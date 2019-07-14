(function(){

    angular.module('outsourcing')
        .service('FabricanteService', FabricanteService);

    FabricanteService.$inject = ['$http'];

    function FabricanteService ($http) {
        var service = this;

        var URL = 'http://localhost:8080/api/fabricantes';

        service.findAll = function (page, pageSize, filter, sort) {
            var urlFinal = URL + '?pageSize=' + (pageSize || 20)
                + '&page=' + (page || 1) + '&sort=' + (sort || 'nome');
            if (filter) {
                urlFinal += '&filterField=nome&filterData=' + filter;
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

        service.insert = function (fabricante) {
            return $http.post(URL, fabricante)
                .then(function(response) {
                    return response.data;
                });
        }

        service.update = function (fabricante) {
            return $http.put(URL + '/' + fabricante.id, fabricante)
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