package com.joseluiz.outsourcing.resources;

import com.joseluiz.outsourcing.models.Contrato;
import com.joseluiz.outsourcing.service.AbstractService;
import com.joseluiz.outsourcing.service.ContratoService;

import javax.inject.Inject;
import javax.ws.rs.Path;

@Path("/contratos")
public class ContratoResource extends AbstractResource<Contrato> {

    @Inject
    private ContratoService service;

    @Override
    protected AbstractService<Contrato> getService() {
        return service;
    }

}
