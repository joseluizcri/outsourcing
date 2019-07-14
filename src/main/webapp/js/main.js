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
        //CLIENTES
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
        //FRABRICANTES
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
        })
        //EQUIPAMENTOS
        .state({
            name: 'equipamentos',
            url: '/equipamentos',
            templateUrl: '/views/equipamentos/list.html',
            controller: 'EquipamentoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'equipamentosNovo',
            url: '/equipamentos/novo',
            templateUrl: '/views/equipamentos/form.html',
            controller: 'EquipamentoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'equipamentosEditar',
            url: '/equipamentos/:id',
            templateUrl: '/views/equipamentos/form.html',
            controller: 'EquipamentoFormController',
            controllerAs: 'vm'
        })
        //CONTRATOS
        .state({
            name: 'contratos',
            url: '/contratos',
            templateUrl: '/views/contratos/list.html',
            controller: 'ContratoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'contratosNovo',
            url: '/contratos/novo',
            templateUrl: '/views/contratos/form.html',
            controller: 'ContratoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'contratosEditar',
            url: '/contratos/:id',
            templateUrl: '/views/contratos/form.html',
            controller: 'ContratoFormController',
            controllerAs: 'vm'
        });
}