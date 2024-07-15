# Use an official Node.js lts runtime as the base image
FROM node:20

# Set the working directory to /app, this is the name of the folder that will be created in the container where the application will be stored
WORKDIR /app

# Copy the dependencies file to the working directory
COPY package.json package_lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application to the working directory. The first dot is the location of the files in the host machine, the second dot is the location of the files in the container, and the second dot is the working directory
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Command to run app
CMD ["node", "index.mjs"]
