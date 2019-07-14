(function(){

    angular.module('outsourcing')
        .controller('ContratoListController', ContratoListController);

    ContratoListController.$inject = ['ContratoService'];

    function ContratoListController (ContratoService) {
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
            if (confirm('Deseja realmente excluir o contrato?')) {
                ContratoService.remove(id)
                    .then(function () {
                        alert('Contrato excluído com sucesso!');
                        _load();
                    })
                    .catch(function (error) {
                        alert('Problemas ao excluir o contrato [' + error.code + ']!');
                    });

            }
        }
    }

})();

