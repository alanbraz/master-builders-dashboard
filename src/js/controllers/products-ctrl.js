/**
 * Alerts Controller
 */


angular
  .module('RDash')
  .controller('ProductsCtrl', ['$scope', '$http', '$timeout', ProductsCtrl]);

function ProductsCtrl($scope, $http, $timeout) {

  $scope.alerts = [{
    type: 'success',
    msg: 'Connor Cook congratulations on your new loan!'
  }, {
    type: 'danger',
    msg: 'Some documents are missing. Please review your documents list.'
  }];

  $scope.addAlert = function() {
    $scope.alerts.push({
      msg: 'Another alert!'
    });
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.documents = [{
      'name': "Valid ID",
      'added': "12/17/2017",
      status: "success"
    },
    {
      'name': "Bank statment - Oct",
      'added': "10/31/2017",
      status: "warning"
    },
    {
      'name': "Bank statment - Nov",
      'added': "11/30/2017",
      status: "warning"
    },
    {
      'name': "Paystub",
      'added': "pending",
      status: "danger"
    }/*,
    {
      'name': "Paystub (2)",
      'added': "pending",
      status: "danger"
    }*/,
    {
      'name': "Tax return 1040 (2016)",
      'added': "pending",
      status: "danger"
    }/*,
    {
      'name': "Tax return 1040 (2017)",
      'added': "pending",
      status: "danger"
    }*/
  ];

  $scope.pendingDocs = $scope.documents.filter(function(value) {
    return value.status === 'danger'
  }).length;
  $scope.validDocs = $scope.documents.filter(function(value) {
    return value.status === 'success'
  }).length;
  $scope.reviewDocs = $scope.documents.filter(function(value) {
    return value.status === 'warning'
  }).length;

    $scope.uploadFiles = function(files, errFiles) {
        $scope.files = files;
        $scope.errFiles = errFiles;
        //console.log(files);
        $scope.alerts = [];
        for (var i = 0; i < files.length; i++) {
          console.log(files[i]);
          var file = files[i];
          //var fd = new FormData();
          //fd.append("file", file);

          if (file.name.toLowerCase().indexOf("pay") > -1 || file.name.toLowerCase().indexOf("stub") > -1) {
            $scope.documents[3].added = "12/20/2017";
            $scope.documents[3].status = "success";
            $scope.alerts.push({
              type: 'success',
              msg: 'File ' + file.name + ' detected as a Paystub and added successfully!'
            });
          } else if (file.name.toLowerCase().indexOf("tax") > -1 || file.name.toLowerCase().indexOf("1040") > -1 || file.name.toLowerCase().indexOf("irs") > -1) {
            $scope.documents[4].added = "12/20/2017";
            $scope.documents[4].status = "success";
            $scope.alerts.push({
              type: 'success',
              msg: 'File ' + file.name + ' detected as a Tax return 1040 and added successfully!'
            });
          } else {
            $scope.alerts.push({
              type: 'danger',
              msg: 'File ' + file.name + ' is not valid document.'
            });
          }

          /*$http.post("/discovery/document", fd, {
              headers: {
                'Content-Type': undefined
              },
            })
            .success(function(data) {
              console.log(data);
            })
            .error(function(data) {
              console.log(data);
            });
            */
        }
    }



}
