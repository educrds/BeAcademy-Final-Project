![enter image description here](https://www.beacademy.com.br/wp-content/uploads/2019/11/Logo-Topo.png)
# Projeto final - beAcademy

## Landing page
Escolhi como tema de minha landing page um conceito de uma página de zoológico cujo nome é**beZoo**.
Utilizei o framework **Bootstrap** para uma melhor estilização e otimização de tempo na construção do *front-end*. 

![](https://phx02pap001files.storage.live.com/y4mHw8XASJXKE8UlTOCK9gHqd59rwEZlv2XnEzm2uThztBoFg4MhVt4QEXiK9PCfvHh-WtLnUXXXtoCwrpJsVy471lYCoNJk_ABTuYdBMRAk18hf78KhQ06nnA09B0y1hQVOrIogvaIM1gyv-JjVsv5l8cDPcFRzIDbKqSrycVjNSS1dn5qhQmQi2ytVsGCVtYw20taKQw8jd2tHrzKS_-kMUoJrQYyNuJxkWd4VCzHBHE?encodeFailures=1&width=881&height=389)
> Acredito que consegui entregar todos os requisitos necessários e foi bastante divertido desenvolver esse projeto, ainda mais com uma experiência nova, que é desenvolver utilizando uma metodologia de design, buscando melhorias, concisão e otimizações no código para se encaixar nos princípios **SOLID**.

## Excel
Na criação da planilha utilizei os dados fornecidos pelo **Ministério da Saúde** acerca da **Covid-19**, especificamente na alta de casos (Jan/2022 - Jul/2022).

![](https://phx02pap001files.storage.live.com/y4mE7fim1hnYS9G4lGvXX0QeKfUutv1qYN6nJJ8aEGO37fcp02a-Avndlc6w5hloShi69AM73M-Qpyh3dZ3cCRPyQjzkcNL7DySCXIS5XS1aV4ruNmkwTP6dAtMlNE6t1vsY0zyW_PVGbLcryBtrTJHEfOYnNM6YTSsx7ClEI4i_WGb3jMSGUWOltMhwluhVlkhORx1fgmIi9zQHwe8QEm6z6-nMheKcL_q517sbkqIORs?encodeFailures=1&width=881&height=481)

## Banco de dados (mySQL)
### Diagrama
![](https://phx02pap001files.storage.live.com/y4my2FUp6f4y_F76AmUEYmYB7wzVMM6oPNrMdlYxMiOQ3KisWpvdsYR3bIpbHBfGGejRE8_oE54Y8YdWFrMFDtRvD5raXejke2WdHhxzi73u4vD2TT4jqZJP5lWbhRC7AEB6oiBABQj4v0zPfIAkJlNYXuhdA38xangFm_S7oCJDU7TT9GjUgIZncA8SmM3JlpRJZHwsBIm25riRKaOqGrHpdCc-T8PSZdDd7cJnwbb0pg?encodeFailures=1&width=880&height=389)

### Criando banco de dados *db_zero_to_hero*
```sql
CREATE DATABASE `db_zero_to_hero` 
DEFAULT CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci ;
``` 
### Criando tabela *users*
```sql
CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR (55) NOT NULL,
  `email` VARCHAR (55) NOT NULL,
  `country` VARCHAR (45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```
### Inserindo valores tabela *users*
```sql
INSERT INTO `users` (username, email, country)
VALUES ('educrds','educardoso30@gmail.com','Brasil'),
('tiagosliva10','tiagosil10@outlook.com','Brasil'),
('neymar_10','ney10@outlook.com','Brasil'),
('joaoricardo22','joaoricardo22@gmail.com','EUA'),
('marcelovasquez2022','marcelovasquez2022@gmail.com','EUA'),
('joaoribeiro10','joaoribeiro1010@gmail.com','EUA'),
('joaomarcos32','joaomarcos32@gmail.com','Brasil'),
('johndoe34','johndoe34@gmail.com','Canada'),
('jonesrichard1010','jonesrichard101@yahoo.com','Canada'),
('daisy1010','daisy1010@gmail.com','Brasil'),
('anaoliver20','anaoliver20@gmail.com','Brasil');
```
### Criando tabela *posts*
```sql
CREATE TABLE `posts` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(255) NOT NULL,
  `created_in` TIMESTAMP NOT NULL,
  `user_id` INT DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);
```
### Inserindo valores tabela *posts*
```sql
INSERT INTO `posts` (content, created_in, user_id)
VALUES ('Hoje estou aprendendo como utilizar o MySQL Workbench...','2022-12-01 13:25:05',1),
('Essa semana vi as aulas de SOLID','2022-12-03 13:06:06',2),
('Faltando 11 dias para o término do projeto, consegui finalizar minha landing page','2022-12-03 13:07:14',3),
('Estou participando do meu primeiro Bootcamp, lecionado pelo time da beAcademy','2022-12-03 13:09:30',4),
('Consegui aprender bastante coisa nesse Bootcamp, dado pela beAcademy','2022-12-03 13:09:30',5),
('A parte mais fácil foi a planilha do Excel.','2022-12-06 13:40:30',9),
('Gostei de fazer a parte da landing page, minha área será front-end...','2022-12-06 13:41:00',1);
```
### Criando tabela *comments*
```sql
CREATE TABLE `comments` (
  `comment_id` INT NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR (255) NOT NULL,
  `created_in` TIMESTAMP NOT NULL,
  `user_id` INT DEFAULT NULL,
  `post_id` INT NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `post_id_idx` (`post_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `post_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`),
  CONSTRAINT `uid` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);
```
### Inserindo valores tabela *comments*
```sql
INSERT INTO `comments` (comment, created_in, user_id, post_id)
VALUES ('Da hora, também comecei aprender, mas não é minha praia...','2022-12-01 13:30:43',3,1),
('Sério Ney? Pode me ajudar, ainda estou com algumas dúvidas sobre a landing page','2022-12-03 13:12:48',6,3),
('Nossa, que bacana, também estou participando, qualquer coisa me chama','2022-12-03 12:12:48',5,4),
('Ahhh, já saiu as aulas de SOLID então?!','2022-12-03 13:15:48',8,2),
('Caracas Marcelo, também estou aprendendo muito, gostei bastante...','2022-12-03 13:11:30',7,5),
('A primeira vez que entrei não estava entendendo nada de tanto botão kkkk...','2022-12-06 12:30:32',4,1),
('Já tinha um pouco de experiência com MySQL, gosto bastante, acho que vou me especializar nele!!!','2022-12-06 12:33:31',2,1),
('Sim, já saiu, estou vendo agora...','2022-12-06 13:15:11',3,2),
('Achei muito confuso o ultimo princípio...','2022-12-06 13:00:31',5,2),
('Aumenta ainda mais nossa lógica de programação aplicando esses princípios','2022-12-06 12:55:31',7,2),
('O principal acredito que seja o primeiro, o restante se baseia nele!','2022-12-06 12:56:31',1,2),
('Posso sim Joao, me chama no whatsapp ou discord mais tarde, tenho tempo para te ajudar hoje!','2022-12-06 13:20:31',3,3),
('Beleza ney, chamo sim, pode ser às 14 horas?','2022-12-06 13:22:00',6,3),
('Pode sim, depois do almoço...Ok!','2022-12-06 13:23:55',3,3),
('Caracas, não vi vocês lá...como estão se saindo?','2022-12-06 13:25:21',6,4),
('Estamos indo muito bem...gostando muito','2022-12-06 13:26:40',4,4),
('Também estou curtindo, espero poder dar tudo certo no projeto final, estou me esforçando ao máximo','2022-12-06 13:27:05',5,4),
('Também estou lá...vi poucas mulheres no grupo kkkk','2022-12-06 13:30:21',10,5),
('Nessa área relmente predomina mais homens, mas para nós não é um empecilho rs','2022-12-06 13:31:44',11,5),
('Exatamente, é isso aí...vamos pra cima!!!','2022-12-06 13:32:11',10,5),
('ahh não, eu sou mais back-end, não tenho muita paciencia de ficar personalizando página kkkk','2022-12-06 13:42:30',9,7),
('Sério?! Para mim é o banco de dados, gosto disso...','2022-12-06 13:44:30',9,6);
```
