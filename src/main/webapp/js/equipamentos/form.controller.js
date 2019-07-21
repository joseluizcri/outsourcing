(function(){

    angular.module('outsourcing')
        .controller('EquipamentoFormController', EquipamentoFormController);

    EquipamentoFormController.$inject = ['EquipamentoService', '$state', '$stateParams', 'FabricanteService', 'DialogBuilder'];

    function EquipamentoFormController (EquipamentoService, $state, $stateParams, FabricanteService, DialogBuilder) {
        var vm = this;
        vm.titulo = 'Novo Equipamento';
        vm.equipamento = {};
        vm.fabricantes = [];

        FabricanteService.findAll()
            .then(function(obj) {
                vm.fabricantes = obj.data;
            });

        if ($stateParams.id) {
            EquipamentoService.findOne($stateParams.id)
                .then(function(data) {
                    vm.titulo = 'Editando Equipamento';
                    vm.equipamento = data;
                });
        }

        vm.save = function () {
            if (vm.equipamento.id) {
                EquipamentoService.update(vm.equipamento)
                    .then(function (data) {
                        DialogBuilder.message('Equipamento atualizado com sucesso!');
                        $state.go('equipamentos');
                    })
                    .catch(function (error) {
                        vm.errors = error.data;
                        DialogBuilder.error('Erro ao atualizar equipamento!');
                    });
            } else {
                EquipamentoService.insert(vm.equipamento)
                    .then(function (data) {
                        DialogBuilder.message('Equipamento inserido com sucesso!');
                        $state.go('equipamentos');
                    })
                    .catch(function (error) {
                        vm.errors = error.data;
                        DialogBuilder.error('Erro ao salvar equipamento!');
                    });
            }
        };

    }

})();

