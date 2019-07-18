(function(){

    angular.module('outsourcing')
        .controller('ContratoListController', ContratoListController);

    ContratoListController.$inject = ['ContratoService', 'DialogBuilder'];

    function ContratoListController (ContratoService, DialogBuilder) {
        var vm = this;
        vm.contratos = [];

        function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
        
            return [year, month, day].join("");
        }

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

        function _loadByData(filterField, comparador) {
            data = new Date();
            filter = formatDate(data);
            ContratoService.findByData(vm.page, vm.pageSize, filterField, filter, vm.sort, comparador)
                .then(function(obj) {
                    vm.contratos = obj.data;
                    vm.pageSize = obj.pageSize;
                    vm.page = obj.page;
                    vm.finish = obj.finish;
                    vm.pages = _pages(obj.pageSize, obj.count);
                });
        }

        _load();

        vm.vencidos = function() {
            _loadByData("dataFim", "less");
        }

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

        diferencaData = function(dataContrato){
            date1 = new Date();
            date1.setHours(0,0,0,0);
            date2 = new Date(dataContrato);
            timeDiff = (date2 - date1);
            return timeDiff/(24*60*60*1000);
        }

        vm.vencimento = function(item){
            vencimento = [];
            vencimento['vencida'] = false;
            diasParaEncerrar = diferencaData(item.dataFim);
            if (item.dataFim && item.ativo) {
                if (diasParaEncerrar >= 1 && diasParaEncerrar <= 30 ) {
                    vencimento['classe'] = 'table-warning ';
                } else if (diasParaEncerrar < 1) {
                    vencimento['classe'] = 'table-danger ';
                    vencimento['vencida'] = true;
                }
            }
            
            return vencimento;
        }
        
    }

})();

