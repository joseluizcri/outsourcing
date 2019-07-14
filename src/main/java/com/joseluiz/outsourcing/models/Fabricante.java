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
@Table(name = "FABRICANTES")
@SequenceGenerator(name = "fabricante_seq", allocationSize = 1,
        sequenceName = "FABRICANTE_SEQ")
public class Fabricante implements Entidade{

    @Id
    @Column(name = "I_FABRICANTES")
    @GeneratedValue(generator = "fabricante_seq", strategy = GenerationType.SEQUENCE)
    private Long id;
    @NotNull(message = "O campo nome não pode ser nulo")
    @Size(max = 100, message = "O campo nome deve ter no máximo {max} caracteres")
    private String nome;
}
