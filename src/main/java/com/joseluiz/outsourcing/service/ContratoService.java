package com.joseluiz.outsourcing.service;

import com.joseluiz.outsourcing.models.Contrato;
import com.joseluiz.outsourcing.utils.GenericDao;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.inject.Inject;

@Stateless
@TransactionAttribute(TransactionAttributeType.SUPPORTS)
public class ContratoService extends AbstractService<Contrato> {

    @Inject
    private GenericDao<Contrato> dao;

    @Override
    protected GenericDao<Contrato> getDao() {
        return dao;
    }
}
