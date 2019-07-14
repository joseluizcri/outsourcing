package com.joseluiz.outsourcing.resources;

import com.joseluiz.outsourcing.models.Cliente;
import com.joseluiz.outsourcing.service.AbstractService;
import com.joseluiz.outsourcing.service.ClienteService;

import javax.inject.Inject;
import javax.ws.rs.Path;

@Path("/clientes")
public class ClienteResource extends AbstractResource<Cliente> {

    @Inject
    private ClienteService service;

    @Override
    protected AbstractService<Cliente> getService() {
        return service;
    }

}
