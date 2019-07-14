package com.joseluiz.outsourcing.service;

import com.joseluiz.outsourcing.models.Fabricante;
import com.joseluiz.outsourcing.utils.GenericDao;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.inject.Inject;

@Stateless
@TransactionAttribute(TransactionAttributeType.SUPPORTS)
public class FabricanteService extends AbstractService<Fabricante> {

    @Inject
    private GenericDao<Fabricante> dao;

    @Override
    protected GenericDao<Fabricante> getDao() {
        return dao;
    }
}
