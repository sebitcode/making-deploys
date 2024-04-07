# Use an official Node runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /nodejs-docker-app/

COPY . /nodejs-docker-app/


# Install app dependencies
RUN npm install -g npm
RUN npm install
RUN npm i sharp
RUN npm run build


# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app when the container launches
CMD ["npm", "start"]