(function(){

    angular.module('outsourcing')
        .controller('ContratoListController', ContratoListController);

    ContratoListController.$inject = ['ContratoService', 'DialogBuilder'];

    function ContratoListController (ContratoService, DialogBuilder) {
        var vm = this;
        vm.contratos = [];

        function _load() {
            ContratoService.findAll(vm.page, vm.pageSize, vm.filter, vm.sort)
                .then(function(obj) {
                    vm.contratos = obj.data;
                    vm.pageSize = obj.pageSize;
                    vm.page = obj.page;
                    vm.finish = obj.finish;
                    vm.pages = _pages(obj.pageSize, obj.count);
                });
        }
        _load();

        function _pages(pageSize, count) {
            var pages = count / pageSize;
            pages = pages === Math.trunc(pages) ? pages : Math.trunc(pages) + 1;

            var pagesArr = [];
            for (var i = 1; i <= pages; i++) {
                pagesArr.push(i);
            }
            return pagesArr;
        }
        
        vm.filtrar = _load;
        vm.limpar = function() {
            vm.filter = '';

            _load()
        }
        
        vm.anterior = function () {
            vm.page--
        }

        vm.proxima = function () {
            vm.page++
        }

        vm.setPage = function (page) {
            vm.page = page
        }
        
        vm.remove = function (id) {
            DialogBuilder.confirm('Tem certeza que deseja remover o registro?')
                .then(function (result) {
                    if (result.value) {
                        ContratoService.remove(id)
                            .then(function () {
                                DialogBuilder.message('Contrato excluído com sucesso!');
                                _load();
                            })
                            .catch(function (error) {
                                DialogBuilder.error('Problemas ao excluir o contrato [' + error.code + ']!');
                            });
                    }
                });
        }
    }

})();

