FROM node:6.2.1

COPY package.json npm-shrinkwrap.json /nodelab/

WORKDIR /nodelab

RUN npm install && npm cache clean

VOLUME ["/nodelab/node_modules"]
