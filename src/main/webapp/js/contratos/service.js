(function(){

    angular.module('outsourcing')
        .service('ContratoService', ContratoService);

    ContratoService.$inject = ['$http'];

    function ContratoService ($http) {
        var service = this;

        var URL = 'http://localhost:8080/api/contratos';

        service.findAll = function (page, pageSize, filter, sort) {
            var urlFinal = URL + '?pageSize=' + (pageSize || 20)
                + '&page=' + (page || 1) + '&sort=' + (sort || 'numero');
            if (filter) {
                urlFinal += '&filterField=cliente.nome&filterData=' + filter;
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

        service.findByData = function (page, pageSize, filterField, filter, sort, comparador) {
            var urlFinal = URL + '/data?pageSize=' + (pageSize || 20)
                + '&page=' + (page || 1) + '&sort=' + (sort || 'numero');
            if (filter) {
                urlFinal += '&filterField=' + filterField + '&filterData=' + filter + '&comparador=' +comparador;
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

        service.insert = function (contratos) {
            return $http.post(URL, contratos)
                .then(function(response) {
                    return response.data;
                });
        }

        service.update = function (contratos) {
            return $http.put(URL + '/' + contratos.id, contratos)
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