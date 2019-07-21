(function(){

    angular.module('outsourcing')
        .controller('FabricanteFormController', FabricanteFormController);

    FabricanteFormController.$inject = ['FabricanteService', '$state', '$stateParams', 'DialogBuilder'];

    function FabricanteFormController (FabricanteService, $state, $stateParams, DialogBuilder) {
        var vm = this;
        vm.titulo = 'Novo Fabricante';
        vm.fabricante = {};

        if ($stateParams.id) {
            FabricanteService.findOne($stateParams.id)
                .then(function(data) {
                    vm.titulo = 'Editando Fabricante';
                    vm.fabricante = data;
                });
        }

        vm.save = function () {
            if (vm.fabricante.id) {
                FabricanteService.update(vm.fabricante)
                    .then(function (data) {
                        DialogBuilder.message('Fabricante atualizado com sucesso!');
                        $state.go('fabricantes');
                    })
                    .catch(function (error) {
                        vm.errors = error.data;
                        DialogBuilder.error('Erro ao atualizar fabricante!');
                    });
            } else {
                FabricanteService.insert(vm.fabricante)
                    .then(function (data) {
                        DialogBuilder.message('Fabricante inserido com sucesso!');
                        $state.go('fabricantes');
                    })
                    .catch(function (error) {
                        vm.errors = error.data;
                        DialogBuilder.error('Erro ao salvar fabricante!');
                    });
            }
        };

    }

})();

