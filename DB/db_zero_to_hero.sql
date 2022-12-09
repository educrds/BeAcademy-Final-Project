CREATE DATABASE `db_zero_to_hero` 
DEFAULT CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci ;
USE `db_zero_to_hero`;

CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR (55) NOT NULL,
  `email` VARCHAR (55) NOT NULL,
  `country` VARCHAR (45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

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

CREATE TABLE `posts` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(255) NOT NULL,
  `created_in` TIMESTAMP NOT NULL,
  `user_id` INT DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

INSERT INTO `posts` (content, created_in, user_id)
VALUES ('Hoje estou aprendendo como utilizar o MySQL Workbench...','2022-12-01 13:25:05',1),
('Essa semana vi as aulas de SOLID','2022-12-03 13:06:06',2),
('Faltando 11 dias para o término do projeto, consegui finalizar minha landing page','2022-12-03 13:07:14',3),
('Estou participando do meu primeiro Bootcamp, lecionado pelo time da beAcademy','2022-12-03 13:09:30',4),
('Consegui aprender bastante coisa nesse Bootcamp, dado pela beAcademy','2022-12-03 13:09:30',5),
('A parte mais fácil foi a planilha do Excel.','2022-12-06 13:40:30',9),
('Gostei de fazer a parte da landing page, minha área será front-end...','2022-12-06 13:41:00',1);

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

