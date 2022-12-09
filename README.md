![enter image description here](https://www.beacademy.com.br/wp-content/uploads/2019/11/Logo-Topo.png)
# Projeto final - beAcademy

## Landing page
Escolhi como tema de minha landing page um conceito de uma página de zoológico cujo nome é**beZoo**.
Utilizei o framework **Bootstrap** para uma melhor estilização e otimização de tempo na construção do *front-end*. 

![](https://phx02pap001files.storage.live.com/y4mSWE_0mK8q2vtc2vhYeFkP-o74qU8hlxgFMY91oFi-NxtOpREnHDQSctxYDS7Dda2zEFwKy7YSLUelvNLJcD8-3_WHzTwMFac9kfXvgxr6E33chzNtfJNC4PED1rxhhJPHkGCzAhlAdAoxGddw_crF_6tgcbJRv0vq0B0x_oaGgN1W46xFI77gmK97T_erPH0MLwHgv6eSZuiFYL6a5eWZc2FuGlNpSLWRMuUgBChJ20?encodeFailures=1&width=1352&height=597)
> Acredito que consegui entregar todos os requisitos necessários e foi bastante divertido desenvolver esse projeto, ainda mais com uma experiência nova, que é desenvolver utilizando uma metodologia de design, buscando melhorias, concisão e otimizações no código para se encaixar nos princípios **SOLID**.

## Excel
Na criação da planilha utilizei os dados fornecidos pelo **Ministério da Saúde** acerca da **Covid-19**, especificamente na alta de casos (Jan/2022 - Jul/2022).

![enter image description here](https://phx02pap001files.storage.live.com/y4mTRSDRLwvmIomEAw63GWvEIQnpfSMUPtpj_a3hWhBgg40laRljJVMqV9i7NpaizLlSXenxZ6mrSTWm4IOtRv_Ejax90j3rD1vo4S01p-xBQjB_A3coKVyZU3NbCGRWY0IHMtnzZNH0QV9pvmXM2n57rZcJpnIe0D5QCcPvPrgT72Ho_SA4pR6Bf-Ub657-mfeFFuCMAI9eZoNdH9_eEVIe591tFjUQY6Bbv4JQQ38suY?encodeFailures=1&width=1456&height=795)

## Banco de dados (mySQL)
### Diagrama
![](https://phx02pap001files.storage.live.com/y4mxxsPPXvIFRgkvQSfRYzw4PLV3rbcG6hgunOVFf60UOyhiDutVgsdrwmTIEJPc-wtPWnK1aGrqKftQ2WyVhReycurtbkrgQxKaHOy1ZxfGmJRPJdVXoBRzF4iA4oK2MnwNhtyvSOLBkXb6y8sno527CgDbHmoep3fSWO7SyS2mnyiZLvpMsrZ0GXSd4xssXWo9IQpUR-ELbYJi5cTbpV-WcNBkcRGGgt57TjlNgPAM1g?encodeFailures=1&width=1468&height=891)

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
