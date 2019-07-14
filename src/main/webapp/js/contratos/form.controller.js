(function(){

    angular.module('outsourcing')
        .controller('ContratoFormController', ContratoFormController);

    ContratoFormController.$inject = ['ContratoService', '$state', '$stateParams', 'ClienteService'];

    function ContratoFormController (ContratoService, $state, $stateParams, ClienteService) {
        var vm = this;
        vm.titulo = 'Novo Contrato';
        vm.contrato = {};
        vm.clientes = [];

        ClienteService.findAll()
            .then(function(obj) {
                vm.clientes = obj.data;
            });

        if ($stateParams.id) {
            ContratoService.findOne($stateParams.id)
                .then(function(data) {
                    vm.titulo = 'Editando Contrato';
                    data.dataInicio = new Date(data.dataInicio);
                    if (data.dataFim) {
                        data.dataFim = new Date(data.dataFim);
                    }
                    vm.contrato = data;
                });
        }

        vm.save = function () {
            if (vm.contrato.id) {
                ContratoService.update(vm.contrato)
                    .then(function (data) {
                        alert('Contrato atualizado com sucesso!!!');
                        $state.go('contratos');
                    })
                    .catch(function (error) {
                        vm.errors = error.data;
                        alert('Erro ao atualizar contrato');
                    });
            } else {
                ContratoService.insert(vm.contrato)
                    .then(function (data) {
                        alert('Contrato inserido com sucesso!!!');
                        $state.go('contratos');
                    })
                    .catch(function (error) {
                        vm.errors = error.data;
                        alert('Erro ao salvar contrato');
                    });
            }
        };

    }

})();

