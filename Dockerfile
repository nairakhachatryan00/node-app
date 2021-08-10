FROM ubuntu:20.04

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
RUN apt-get install nodejs
RUN npm install
RUN npm install nodemon -D
RUN npm install ts-node
RUN npm install typescript

WORKDIR /node-app

COPY src /node-app/src/

COPY package.json package-lock.json /node-app/

RUN npm -v

CMD npm run dev
