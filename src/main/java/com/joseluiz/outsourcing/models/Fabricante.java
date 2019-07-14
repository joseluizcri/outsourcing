package com.joseluiz.outsourcing.models;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "FABRICANTES")
@SequenceGenerator(name = "fabricante_seq", allocationSize = 1,
        sequenceName = "FABRICANTE_SEQ")
public class Fabricante implements Entidade{

    @Id
    @Column(name = "I_FABRICANTES")
    @GeneratedValue(generator = "fabricante_seq", strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nome;
}
