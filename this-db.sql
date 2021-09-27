use teste;

create table clientes (
	nome varchar(55) not null,
    email varchar(50) not null,
    nacimento timestamp not null,
    senha varchar(255) not null,
    sexo varchar(1) not null
);

alter table clientes add column id int unique;

select * from clientes;