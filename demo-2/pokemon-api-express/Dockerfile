FROM node:alpine
WORKDIR /src
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
EXPOSE 4000
CMD ["npm", "run", "build"]