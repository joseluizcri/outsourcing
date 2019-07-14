package com.joseluiz.outsourcing.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
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
    @NotNull(message = "O campo equipamento não pode ser nulo")
    private Equipamento equipamento;
    @NotNull(message = "O campo quantidade não pode ser nulo")
    @Min(value = 1, message = "A quantidade não pode ser menor que {value}")
    private Integer quantidade;
    @NotNull(message = "O campo valor unitário não pode ser nulo")
    @Digits(integer = 10, fraction = 2)
    private BigDecimal valorUnitario;
    @NotNull(message = "O campo valor total não pode ser nulo")
    @Digits(integer = 10, fraction = 2)
    private BigDecimal valorTotal;
}
