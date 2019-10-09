FROM node:10
WORKDIR /usr/src/app

COPY ./client ./client
COPY ./server ./server

# Build Client
WORKDIR /usr/src/app/client
RUN npm install
RUN npm run build

# Build Server
WORKDIR /usr/src/app/server
RUN npm install
RUN npm run build

# Copy Client to Server
RUN cp ../client/dist/* dist/static/

# Finalize
EXPOSE 8080
CMD ["node", "dist/index.js"]
