(function(){

    angular.module('outsourcing')
        .service('EquipamentoService', EquipamentoService);

    EquipamentoService.$inject = ['$http'];

    function EquipamentoService ($http) {
        var service = this;

        var URL = 'http://localhost:8080/api/equipamentos';

        service.findAll = function (page, pageSize, filter, sort) {
            var urlFinal = URL + '?pageSize=' + (pageSize || 20)
                + '&page=' + (page || 1) + '&sort=' + (sort || 'modelo');
            if (filter) {
                urlFinal += '&filterField=modelo&filterData=' + filter;
            }
            
            return $http.get(urlFinal)
                .then(function(response) {
                    return {
                        data: response.data,
                        count: response.headers('X-Total-Length'),
                        page: response.headers('X-Current-Page'),
                        pageSize: response.headers('X-Page-Size'),
                        finish: response.status === 200
                    };
                });
        }

        service.findOne = function (id) {
            return $http.get(URL + '/' + id)
                .then(function(response) {
                    return response.data;
                });
        }

        service.insert = function (equipamento) {
            return $http.post(URL, equipamento)
                .then(function(response) {
                    return response.data;
                });
        }

        service.update = function (equipamento) {
            return $http.put(URL + '/' + equipamento.id, equipamento)
                .then(function(response) {
                    return response.data;
                });
        }

        service.remove = function (id) {
            return $http.delete(URL + '/' + id);
        }

        return service;
    }

})();