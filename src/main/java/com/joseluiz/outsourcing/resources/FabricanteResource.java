package com.joseluiz.outsourcing.resources;

import com.joseluiz.outsourcing.models.Fabricante;
import com.joseluiz.outsourcing.service.AbstractService;
import com.joseluiz.outsourcing.service.FabricanteService;

import javax.inject.Inject;
import javax.ws.rs.Path;

@Path("/fabricantes")
public class FabricanteResource extends AbstractResource<Fabricante> {

    @Inject
    private FabricanteService service;

    @Override
    protected AbstractService<Fabricante> getService() {
        return service;
    }

}
