FROM node:14

#Create App DIR
WORKDIR /usr/src/app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 8000
CMD [ "node", "app.js" ]