package com.joseluiz.outsourcing.models;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
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
    @NotNull(message = "O campo número do contrado não pode ser nulo")
    @Column(unique = true)
    private Long numero;
    @NotNull(message = "O campo data de inicio do contrato não pode ser nulo")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataInicio;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataFim;

    @ManyToOne
    @JoinColumn(name = "I_CLIENTES",
            foreignKey = @ForeignKey(name = "FK_CONTRATO_CLIENTE", value = ConstraintMode.CONSTRAINT))
    @NotNull(message = "O campo cliente não pode ser nulo")
    private Cliente cliente;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "I_CONTRATOS")
    private List<EquipamentoContrato> equipamentosContrato;

    @Digits(integer = 10, fraction = 2)
    private BigDecimal valorTotal;

    private Boolean ativo;

}
