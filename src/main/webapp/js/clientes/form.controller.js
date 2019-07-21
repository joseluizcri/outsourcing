(function(){

    angular.module('outsourcing')
        .controller('ClienteFormController', ClienteFormController);

    ClienteFormController.$inject = ['ClienteService', '$state', '$stateParams', 'DialogBuilder'];

    function ClienteFormController (ClienteService, $state, $stateParams, DialogBuilder) {
        var vm = this;
        vm.titulo = 'Novo Cliente';
        vm.cliente = {};

        if ($stateParams.id) {
            ClienteService.findOne($stateParams.id)
                .then(function(data) {
                    vm.titulo = 'Editando Cliente';
                    vm.cliente = data;
                });
        }

        vm.save = function () {
            if (vm.cliente.id) {
                ClienteService.update(vm.cliente)
                    .then(function (data) {
                        DialogBuilder.message('Cliente atualizado com sucesso!');
                        $state.go('clientes');
                    })
                    .catch(function (error) {
                        vm.errors = error.data;
                        DialogBuilder.error('Erro ao atualizar cliente!');
                    });
            } else {
                ClienteService.insert(vm.cliente)
                    .then(function (data) {
                        DialogBuilder.message('Cliente inserido com sucesso!');
                        $state.go('clientes');
                    })
                    .catch(function (error) {
                        vm.errors = error.data;
                        DialogBuilder.error('Erro ao salvar cliente!');
                    });
            }
        };

    }

})();

