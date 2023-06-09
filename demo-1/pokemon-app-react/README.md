<h1 align="center">Pokemon deck list</h1>

<br>

## :dart: Objectif de la démo

Describe your project

## :white_check_mark: Prerequis

Avant de commencer :checkered_flag:, merci d'installer :

:heavy_check_mark: [Git](https://git-scm.com)\
 :heavy_check_mark: [Node](https://nodejs.org/en/)\
 :heavy_check_mark: [Docker](https://confluence.axa.com/confluence/display/AFAGUILDS/Installation+Docker)

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

2. Créer l’image :

    docker build -t pokemon-image .

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
