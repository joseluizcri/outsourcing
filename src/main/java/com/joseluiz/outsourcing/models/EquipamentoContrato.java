package com.joseluiz.outsourcing.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "EQUIPAMENTOS_CONTRATOS")
@SequenceGenerator(name = "equipamentos_contratos_seq", allocationSize = 1,
        sequenceName = "EQUIPAMENTOS_CONTRATO_SEQ")
public class EquipamentoContrato implements Entidade{

    @Id
    @Column(name = "I_EQUIPAMENTOS_CONTRATOS")
    @GeneratedValue(generator = "equipamentos_contratos_seq", strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "I_EQUIPAMENTOS")
    private Equipamento equipamento;
    private Integer quantidade;
    private BigDecimal valorUnitario;
    private BigDecimal valorTotal;
}
