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

create table if not exists products (
     id int(11) not null auto_increment,
     name varchar(100) not null,
     price int not null,
     stock int not null,
     category varchar(100) not null,
     primary key (id)
) engine innodb collate utf8mb4_general_ci;

insert into products (name, price, stock, category)
values ('Product 1', 1000, 100, 'K1'),
('Product 2', 2000, 200, 'K1'),
('Product 3', 3000, 300, 'K2'),
('Product 4', 4000, 400, 'K1'),
('Product 5', 5000, 500, 'K2');