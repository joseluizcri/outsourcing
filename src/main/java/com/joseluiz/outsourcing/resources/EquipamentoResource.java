package com.joseluiz.outsourcing.resources;

import com.joseluiz.outsourcing.models.Equipamento;
import com.joseluiz.outsourcing.service.AbstractService;
import com.joseluiz.outsourcing.service.EquipamentoService;

import javax.inject.Inject;
import javax.ws.rs.Path;

@Path("/equipamentos")
public class EquipamentoResource extends AbstractResource<Equipamento> {

    @Inject
    private EquipamentoService service;

    @Override
    protected AbstractService<Equipamento> getService() {
        return service;
    }

}
