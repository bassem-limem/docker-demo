<h1 align="center">Pokemon deck list with express backend </h1>

<br>

## :dart: Objectif de la démo

Describe your project

## :white_check_mark: Prerequis

Avant de commencer :checkered_flag:, merci d'installer :

:heavy_check_mark: [Git](https://git-scm.com)\
 :heavy_check_mark: [Node](https://nodejs.org/en/)\
 :heavy_check_mark: [Docker](https://confluence.axa.com/confluence/display/AFAGUILDS/Installation+Docker)\
 :heavy_check_mark: [Mongodb Compass](https://www.mongodb.com/try/download/compass)

## :checkered_flag: Description des étapes

1. Créer le fichier : touch Dockerfile

    ```bash
      FROM node:alpine
      WORKDIR /src
      COPY package.json ./
      COPY package-lock.json ./
      COPY ./ ./
      RUN npm i
      EXPOSE 3000
      CMD ["npm", "run", "start"]

    ```

2. Créer le fichier docker-compose.yml sur la racine /demo-2/ :

   ```bash
    version: "3"
    name: pokemon-list
    services:
        db:
            image: mongo
            restart: always
            container_name: pokemon-db
            environment:
            - MONGODB_SYSTEM_LOG_VERBOSITY=3
            - MONGO_INITDB_DATABASE=pokemon
            - MONGO_INITDB_ROOT_USERNAME=pokemon
            - MONGO_INITDB_ROOT_PASSWORD=pokemon123456789$
        volumes:
            - ./init-mongo.js:/docker-entrypoint-initdb.d/init-mongo.js:ro
            ports:
            - "27017:27017"
        api:
            build: pokemon-api-express
            restart: always
            ports:
            - "4000:4000"
            depends_on:
            - db
            environment:
            Database_Server: pokemon-db
            container_name: pokemon-api


    ```

3. Lister les images :

    docker images

4. Créer un container :

    docker run -it -p 8080:3000 --name pokemon-container pokemon-image

5. Lister les containers :

    docker container ls

6. Stopper un container :

    docker stop 6dc5d0cde61c

7. Afficher les logs d’un container :

    docker logs 6dc5d0cde61c

8. Live stats d’un container :

    docker container stats 6dc5d0cde61c

9. Se connecter en SH sur un container :

    docker exec -it pokemon-container sh

10. Supprimer un container :

    docker rm 6dc5d0cde61c

11. Supprimer une image :

    docker image rm pokemon-image
