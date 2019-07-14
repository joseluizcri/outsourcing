package com.joseluiz.outsourcing.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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
    private Long patrimonio;
    private Fabricante fabricante;
    private String modelo;
    private String descricao;


}
