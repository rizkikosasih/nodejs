create table if not exists sample (
     id int(11) not null auto_increment,
     name varchar(256),
     primary key (id)
) engine innodb collate utf8mb4_general_ci;

create table if not exists customers (
     id int(11) not null auto_increment,
     name varchar(100) not null,
     email varchar(100) not null,
     phone varchar(100) not null,
     primary key (id),
     constraint customers_email_unique unique (email),
     constraint customers_phone_unique unique (phone)
) engine innodb collate utf8mb4_general_ci;