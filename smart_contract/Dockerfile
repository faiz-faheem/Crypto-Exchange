# Use an official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Install Hardhat globally
RUN npm install -g hardhat

# Expose port 8545 (optional, useful if using Hardhat's local node)
EXPOSE 8545

# Default command to deploy the contract on Sepolia network
CMD ["npx", "hardhat", "run", "scripts/deploy.js", "--network", "ropsten"]
