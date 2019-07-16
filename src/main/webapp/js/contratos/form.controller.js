(function(){

    angular.module('outsourcing')
        .controller('ContratoFormController', ContratoFormController);

    ContratoFormController.$inject = ['ContratoService', '$state', '$stateParams', 'ClienteService', 'EquipamentoService', 'DialogBuilder'];

    function ContratoFormController (ContratoService, $state, $stateParams, ClienteService, EquipamentoService, DialogBuilder) {
        var vm = this;
        vm.titulo = 'Novo Contrato';
        vm.contrato = {};
        vm.equipamentoContrato = {
            equipamento : null,
            quantidade : null,
            valorUnitario : null,
            valorTotal : null
        };
        vm.contrato.equipamentosContrato = [];
        vm.clientes = [];
        vm.equipamentos = [];

        vm.boolToStr = function(arg) {return arg ? 'Ativo' : 'Inativo'};

        ClienteService.findAll()
            .then(function(obj) {
                vm.clientes = obj.data;
            });

        EquipamentoService.findAll()
            .then(function(obj) {
                vm.equipamentos = obj.data;
            });

        if ($stateParams.id) {
            ContratoService.findOne($stateParams.id)
                .then(function(data) {
                    vm.titulo = 'Editando Contrato';
                    data.dataInicio = new Date(data.dataInicio);
                    if (data.dataFim) {
                        data.dataFim = new Date(data.dataFim);
                    }
                    if (!data.equipamentosContrato) {
                        data.equipamentosContrato = [];
                    }
                    vm.contrato = data;
                });
        }

        vm.editarEquipamentoContrato = function(item) {
            vm.itemOriginal = item;
            angular.copy(item, vm.equipamentoContrato);
        }

        vm.addEquipamentoContrato = function (){

            var index = vm.contrato.equipamentosContrato.indexOf(vm.itemOriginal);
            if (index != -1) {
                vm.contrato.equipamentosContrato[index] = vm.equipamentoContrato;
            } else {
                vm.contrato.equipamentosContrato.push(vm.equipamentoContrato);
            }

            vm.itemOriginal = null;
            vm.equipamentoContrato = {};

            vm.contrato.valorTotal = 0;
            vm.contrato.equipamentosContrato.forEach(function (item) {
                vm.contrato.valorTotal += item.valorTotal;
            });

        }

        vm.removerEquipamentoContrato = function (item) {
            var index = vm.contrato.equipamentosContrato.indexOf(item);
            vm.contrato.equipamentosContrato.splice(index, 1);

            vm.contrato.valorTotal = 0;
            vm.contrato.equipamentosContrato.forEach(function (item) {
                vm.contrato.valorTotal += item.valorTotal;
            });
        }

        vm.save = function () {
            if (vm.contrato.id) {
                ContratoService.update(vm.contrato)
                    .then(function (data) {
                        DialogBuilder.message('Contrato atualizado com sucesso!');
                        $state.go('contratos');
                    })
                    .catch(function (error) {
                        vm.errors = error.data;
                        DialogBuilder.error('Erro ao atualizar contrato!');
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

        vm.calcularValorTotal = function (){
            vm.equipamentoContrato.valorTotal = vm.equipamentoContrato.quantidade * vm.equipamentoContrato.valorUnitario;
        }

    }

})();

