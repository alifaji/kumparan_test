FROM node:16.14.0
WORKDIR /usr/src/app 
COPY . . 
COPY package*.json ./ 
RUN apt-get update
RUN apt-get -y install redis-server
RUN npm install -g npm@8.5.0
RUN npm install 
EXPOSE 5000 
CMD ["npm", "start"]