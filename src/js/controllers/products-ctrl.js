/**
 * Alerts Controller
 */

angular
    .module('RDash')
    .controller('ProductsCtrl', ['$scope', ProductsCtrl]);

function ProductsCtrl($scope) {
    $scope.alerts = [{
        type: 'success',
        msg: 'Hey Connor congratulations on your new loan!'
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

    $scope.documents = [
      { 'name': "Valid ID",
        'added': "12/17/2017",
        status: "success"
      },
      { 'name': "Bank statment - Oct",
        'added': "10/31/2017",
        status: "warning"
      },
      { 'name': "Bank statment - Nov",
        'added': "11/30/2017",
        status: "warning"
      },
      { 'name': "Paystub (1)",
        'added': "pending",
        status: "danger"
      },
      { 'name': "Paystub (2)",
        'added': "pending",
        status: "danger"
      },
      { 'name': "Tax return 1040 (2016)",
        'added': "pending",
        status: "danger"
      },
      { 'name': "Tax return 1040 (2017)",
        'added': "pending",
        status: "danger"
      }
    ];

    $scope.pendingDocs = $scope.documents.filter(function(value) { return value.status === 'danger' }).length;
    $scope.validDocs = $scope.documents.filter(function(value) { return value.status === 'success' }).length;
    $scope.reviewDocs = $scope.documents.filter(function(value) { return value.status === 'warning' }).length;
}
