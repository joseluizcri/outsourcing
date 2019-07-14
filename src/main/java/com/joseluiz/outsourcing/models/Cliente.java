package com.joseluiz.outsourcing.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "CLIENTES")
@SequenceGenerator(name = "cliente_seq", allocationSize = 1,
        sequenceName = "CLIENTE_SEQ")
public class Cliente implements Entidade{

    @Id
    @Column(name = "I_CLIENTES")
    @GeneratedValue(generator = "cliente_seq", strategy = GenerationType.SEQUENCE)
    private Long id;
    private String documento;
    private String nome;
    private String telefone;
    private String email;
    private String endereco;
}
