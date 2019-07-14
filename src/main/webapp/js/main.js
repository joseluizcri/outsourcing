angular.module('condominio', [
    'ui.router'
]);

angular.module('condominio').config(AppConfig);

AppConfig.$inject = ['$stateProvider']
function AppConfig($stateProvider) {
    $stateProvider
        .state({
            name: 'dashboard',
            url: '/',
            templateUrl: '/views/dashboard.html'
        });
}