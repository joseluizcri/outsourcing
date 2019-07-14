package com.joseluiz.outsourcing.models;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "CONTRATOS")
@SequenceGenerator(name = "contrato_seq", allocationSize = 1,
        sequenceName = "CONTRATO_SEQ")
public class Contrato implements Entidade{

    @Id
    @Column(name = "I_CONTRATOS")
    @GeneratedValue(generator = "contrato_seq", strategy = GenerationType.SEQUENCE)
    private Long id;
    private Long numero;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataInicio;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataFim;

    @ManyToOne
    @JoinColumn(name = "I_CLIENTES",
            foreignKey = @ForeignKey(name = "FK_CONTRATO_CLIENTE", value = ConstraintMode.CONSTRAINT))
    private Cliente cliente;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "ID_CONTRATO")
    private List<EquipamentoContrato> equipamentosContrato;

}
