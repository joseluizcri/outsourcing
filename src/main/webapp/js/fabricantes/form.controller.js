(function(){

    angular.module('outsourcing')
        .controller('FabricanteFormController', FabricanteFormController);

    FabricanteFormController.$inject = ['FabricanteService', '$state', '$stateParams'];

    function FabricanteFormController (FabricanteService, $state, $stateParams) {
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
                        alert('Fabricante atualizado com sucesso!!!');
                        $state.go('fabricantes');
                    })
                    .catch(function (error) {
                        vm.errors = error.data;
                        alert('Erro ao atualizar fabricante');
                    });
            } else {
                FabricanteService.insert(vm.fabricante)
                    .then(function (data) {
                        alert('Fabricante inserido com sucesso!!!');
                        $state.go('fabricantes');
                    })
                    .catch(function (error) {
                        vm.errors = error.data;
                        alert('Erro ao salvar fabricante');
                    });
            }
        };

    }

})();

