package com.joseluiz.outsourcing.service;

import com.joseluiz.outsourcing.models.Equipamento;
import com.joseluiz.outsourcing.utils.GenericDao;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.inject.Inject;

@Stateless
@TransactionAttribute(TransactionAttributeType.SUPPORTS)
public class EquipamentoService extends AbstractService<Equipamento> {

    @Inject
    private GenericDao<Equipamento> dao;

    @Override
    protected GenericDao<Equipamento> getDao() {
        return dao;
    }
}
