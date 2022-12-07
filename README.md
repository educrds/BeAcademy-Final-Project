![](https://www.beacademy.com.br/wp-content/uploads/2019/11/Logo-Topo.png)
# Projeto final - beAcademy

## Landing page
Escolhi como tema de minha landing page um conceito de uma página de zoológico cujo nome será **beZoo**.
Utilizei o framework **Bootstrap** para uma melhor estilização e otimização de tempo na construção do *front-end*. 

Minha principal dificuldade com esse projeto foi na utilização da promise (fetch) para buscar uma API no servidor, não encontrava nenhuma API que disponibilizasse variedades de animais que encaixasse no tema da landing page, e quando encontrei, dias depois ela saiu do ar...😅
Então com esse obstáculo, ao invés de precisar reformular todo o projeto, decidi "simular" uma API,  buscando recursos através de um arquivo JSON criado localmente.

![](https://phx02pap001files.storage.live.com/y4m0uFp7kXadD5llm9_7RhNDGdvreRgNK4Ko0dJu9HJ8Psx5HMLTQEh3sKHiGqaBYstOYeqwUR2nyyCKiJnjzfSfL3aRBVd4-KXW8P9VGD38nyT3bcloPZnSEsnQPPXWpD-yyNiKX0MoGy83JzEYwqtSq64j0PR36orQ_Ax6iEHegmxcR17GXILIu89K1O3JK18buOhub-iRWLS3lBRe8x9gVu5nYhUeC9_OA-72gR1VQo?encodeFailures=1&width=1352&height=597)
> Acredito que consegui entregar todos os requisitos necessários e foi bastante divertido desenvolver esse projeto, ainda mais com uma experiência nova, que é desenvolver utilizando uma metodologia de design, buscando melhorias, concisão e otimizações no código para se encaixar nos princípios **SOLID**.

## Excel
Na criação da planilha utilizei os dados fornecidos pelo **Ministério da Saúde** acerca da **Covid-19**, especificamente na alta de casos (Jan/2022 - Jul/2022).

![](https://phx02pap001files.storage.live.com/y4mjTtKKAeSSsJ39Mtjkg0PvEFGY2yzrkyvk8P06yDA0WEnP0CKka3EVJGGhq8zt72mY7tAz4dbhSJ20wjQrEZeCfVVt-4DqJmAEjjiDqaQgPWycIFpY0vBjrNR7Kb6ecEf28wjTYryuhhhWNf6SrPXIlSO9l46puuUBpT1MbB5djEXHyzKF0AW_yPPVCSMMj5w1uat2faPeqxPzbwcjq01OEk9b-VpEIPe0Z5pPNSz1yc?encodeFailures=1&width=1278&height=597)

## Banco de dados (mySQL)
### Diagrama
![](https://phx02pap001files.storage.live.com/y4mgw7fCo3i5aRmJGpyv533txW1nuaz3PP28PVT7Jjxrl4knvJsju1w2tOqdw3XGhqB3iphI2P_7IMN0L2ILB7ClQpvW1lbo69kD98dFKxPhBmAi3lK5XKEg4WD9cZhcoY1skHSxJ6gjiejr2vRYpSvuQVXlEAmJODg_WgY9pPqD3EIEwikbUYHQ0esAkgavlQWeSp5XtsAFCufsGjBCTo3Fleiyp2IutnUInYfFxuYG0A?encodeFailures=1&width=1464&height=489)
### Criando banco de dados *db_zero_to_hero*
```sql
CREATE DATABASE `db_zero_to_hero` 
DEFAULT CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci ;
``` 
### Criando tabela *users*
```sql
CREATE TABLE `users` (
  `id` INT NOT NULL,
  `username` VARCHAR(55) NOT NULL,
  `email` VARCHAR(55) NOT NULL,
  `country` VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```
### Inserindo valores tabela *users*
```sql
INSERT INTO `users` 
VALUES (1,'educrds','educardoso30@gmail.com','Brasil'),
(2,'tiagosliva10','tiagosil10@outlook.com','Brasil'),
(3,'neymar_10','ney10@outlook.com','Brasil'),
(4,'joaoricardo22','joaoricardo22@gmail.com','EUA'),
(5,'marcelovasquez2022','marcelovasquez2022@gmail.com','EUA'),
(6,'joaoribeiro10','joaoribeiro1010@gmail.com','EUA'),
(7,'joaomarcos32','joaomarcos32@gmail.com','Brasil'),
(8,'johndoe34','johndoe34@gmail.com','Canada'),
(9,'jonesrichard1010','jonesrichard101@yahoo.com','Canada'),
(10,'daisy1010','daisy1010@gmail.com','Brasil'),
(11,'anaoliver20','anaoliver20@gmail.com','Brasil');
```
### Criando tabela *posts*
```sql
CREATE TABLE `posts` (
  `post_id` INT NOT NULL,
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
INSERT INTO `posts` 
VALUES (1,'Hoje estou aprendendo como utilizar o MySQL Workbench...','2022-12-01 13:25:05',1),
(2,'Essa semana vi as aulas de SOLID','2022-12-03 13:06:06',2),
(3,'Faltando 11 dias para o término do projeto, consegui finalizar minha landing page','2022-12-03 13:07:14',3),
(4,'Estou participando do meu primeiro Bootcamp, lecionado pelo time da beAcademy','2022-12-03 13:09:30',4),
(5,'Consegui aprender bastante coisa nesse Bootcamp, dado pela beAcademy','2022-12-03 13:09:30',5),
(6,'A parte mais fácil foi a planilha do Excel.','2022-12-06 13:40:30',9),
(7,'Gostei de fazer a parte da landing page, minha área será front-end...','2022-12-06 13:41:00',1);
```
### Criando tabela *comments*
```sql
CREATE TABLE `comments` (
  `comment_id` INT NOT NULL,
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
INSERT INTO `comments` 
VALUES (1,'Da hora, também comecei aprender, mas não é minha praia...','2022-12-01 13:30:43',3,1),
(2,'Sério Ney? Pode me ajudar, ainda estou com algumas dúvidas sobre a landing page','2022-12-03 13:12:48',6,3),
(3,'Nossa, que bacana, também estou participando, qualquer coisa me chama','2022-12-03 12:12:48',5,4),
(4,'Ahhh, já saiu as aulas de SOLID então?!','2022-12-03 13:15:48',8,2),
(5,'Caracas Marcelo, também estou aprendendo muito, gostei bastante...','2022-12-03 13:11:30',7,5),
(6,'A primeira vez que entrei não estava entendendo nada de tanto botão kkkk...','2022-12-06 12:30:32',4,1),
(7,'Já tinha um pouco de experiência com MySQL, gosto bastante, acho que vou me especializar nele!!!','2022-12-06 12:33:31',2,1),
(8,'Sim, já saiu, estou vendo agora...','2022-12-06 13:15:11',3,2),
(9,'Achei muito confuso o ultimo princípio...','2022-12-06 13:00:31',5,2),
(10,'Aumenta ainda mais nossa lógica de programação aplicando esses princípios','2022-12-06 12:55:31',7,2),
(11,'O principal acredito que seja o primeiro, o restante se baseia nele!','2022-12-06 12:56:31',1,2),
(12,'Posso sim Joao, me chama no whatsapp ou discord mais tarde, tenho tempo para te ajudar hoje!','2022-12-06 13:20:31',3,3),
(13,'Beleza ney, chamo sim, pode ser às 14 horas?','2022-12-06 13:22:00',6,3),
(14,'Pode sim, depois do almoço...Ok!','2022-12-06 13:23:55',3,3),
(15,'Caracas, não vi vocês lá...como estão se saindo?','2022-12-06 13:25:21',6,4),
(16,'Estamos indo muito bem...gostando muito','2022-12-06 13:26:40',4,4),
(17,'Também estou curtindo, espero poder dar tudo certo no projeto final, estou me esforçando ao máximo','2022-12-06 13:27:05',5,4),
(18,'Também estou lá...vi poucas mulheres no grupo kkkk','2022-12-06 13:30:21',10,5),
(19,'Nessa área relmente predomina mais homens, mas para nós não é um empecilho rs','2022-12-06 13:31:44',11,5),
(20,'Exatamente, é isso aí...vamos pra cima!!!','2022-12-06 13:32:11',10,5),
(21,'ahh não, eu sou mais back-end, não tenho muita paciencia de ficar personalizando página kkkk','2022-12-06 13:42:30',9,7),
(22,'Sério?! Para mim é o banco de dados, gosto disso...','2022-12-06 13:44:30',9,6);