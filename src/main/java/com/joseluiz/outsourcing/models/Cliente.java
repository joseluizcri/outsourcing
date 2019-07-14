package com.joseluiz.outsourcing.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

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
    @NotNull(message = "O campo documento não pode ser nulo")
    @Size(min = 5, max = 14, message = "O campo documento deve estar entre {min} e {max}")
    private String documento;
    @NotNull
    @Size(min = 10, max = 100, message = "O campo nome deve estar entre {min} e {max}")
    private String nome;
    private String telefone;
    @Email(message = "Você deve informar um e-mail válido")
    private String email;
    @NotNull(message = "O campo endereço não pode ser nulo")
    @Size(min = 10, max = 150, message = "O campo endereço deve estar entre {min} e {max}")
    private String endereco;
}
