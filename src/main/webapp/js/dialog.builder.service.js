(function () {
    angular.module('outsourcing')
        .service('DialogBuilder', DialogBuilder);

    function DialogBuilder() {
        return {
            confirm: swal.mixin({
                type: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sim, claro!',
                cancelButtonText: 'Não, obrigado!',
                confirmButtonClass: 'btn btn-success mx-2',
                cancelButtonClass: 'btn btn-danger mx-2',
                buttonsStyling: false
            }),
            message: swal.mixin({
                position: 'top-end',
                type: 'success',
                showConfirmButton: false,
                timer: 3000
            }),
            error: swal.mixin({
                position: 'top-end',
                type: 'error',
                showConfirmButton: false,
                timer: 3000
            })
        }

    }
})();