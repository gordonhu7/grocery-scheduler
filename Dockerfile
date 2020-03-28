# base image for node
FROM node:alpine

# set the working directory from within the container to be /app
WORKDIR /app

# copying the dependencies for the express server into working directory
COPY package.json /app

# downloads the dependencies from package.json
RUN npm install

# copy the files/code into the working directory
COPY . /app

# CMD is a docker directive to run a bash command
CMD node app.js

# exposing port 8000 so when navigating to http://127.0.0.1:8000/
# we can see the landing page or whatever
EXPOSE 8000