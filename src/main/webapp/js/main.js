angular.module('outsourcing', [
    'ui.router'
]);

angular.module('outsourcing').config(AppConfig);

AppConfig.$inject = ['$stateProvider']
function AppConfig($stateProvider) {
    $stateProvider
        .state({
            name: 'dashboard',
            url: '/',
            templateUrl: '/views/dashboard.html'
        })
        .state({
            name: 'clientes',
            url: '/clientes',
            templateUrl: '/views/clientes/list.html',
            controller: 'ClienteListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clientesNovo',
            url: '/clientes/novo',
            templateUrl: '/views/clientes/form.html',
            controller: 'ClienteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clientesEditar',
            url: '/clientes/:id',
            templateUrl: '/views/clientes/form.html',
            controller: 'ClienteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'fabricantes',
            url: '/fabricantes',
            templateUrl: '/views/fabricantes/list.html',
            controller: 'FabricanteListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'fabricantesNovo',
            url: '/fabricantes/novo',
            templateUrl: '/views/fabricantes/form.html',
            controller: 'FabricanteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'fabricantesEditar',
            url: '/fabricantes/:id',
            templateUrl: '/views/fabricantes/form.html',
            controller: 'FabricanteFormController',
            controllerAs: 'vm'
        });
}