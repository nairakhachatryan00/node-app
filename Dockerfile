FROM node:latest

WORKDIR /node-app
COPY package.json package-lock.json /node-app/
COPY src/ /node-app/src/



RUN npm i
EXPOSE 3001
CMD npm run dev
