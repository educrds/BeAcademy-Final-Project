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
### Create *users* table
```sql
CREATE TABLE `users` (
  `id` INT NOT NULL,
  `username` VARCHAR(55) NOT NULL,
  `email` VARCHAR(55) NOT NULL,
  `country` VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```
### Create *posts* table
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
### Create *comments* table
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