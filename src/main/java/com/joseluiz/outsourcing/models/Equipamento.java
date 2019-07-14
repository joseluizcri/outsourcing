package com.joseluiz.outsourcing.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "EQUIPAMENTOS")
@SequenceGenerator(name = "equipamento_seq", allocationSize = 1,
        sequenceName = "EQUIPAMENTO_SEQ")
public class Equipamento implements Entidade{

    @Id
    @Column(name = "I_EQUIPAMENTOS")
    @GeneratedValue(generator = "equipamento_seq", strategy = GenerationType.SEQUENCE)
    private Long id;
    @NotNull(message = "O campo patrimônio não pode ser nulo")
    @Column(unique = true)
    private Long patrimonio;
    @NotNull(message = "O campo fabricante não pode ser nulo")
    private Fabricante fabricante;
    @NotNull(message = "O campo modelo não pode ser nulo")
    @Size(max = 20, message = "O campo modelo deve ter no máximo {max} caracteres")
    private String modelo;
    @Size(max = 100, message = "O campo descrição deve ter no máximo {max} caracteres")
    private String descricao;


}
