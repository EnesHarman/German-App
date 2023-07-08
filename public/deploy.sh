#!/bin/bash

# This is a comment explaining the purpose of the script
echo "Starting deployment..."

# Change directory to the project folder
cd /var/www/html/German-App

# Pull the latest changes from the Git repository
echo "Pulling latest changes from Git..."
git pull origin master

# Build the project using npm
echo "Building project..."
sudo npm run build

# Copy the built files to the web server directory
echo "Copying build files..."
sudo cp -r build /var/www/html

# Move into the web server directory
cd /var/www/html

# Remove the existing static directory
echo "Removing existing static directory..."
rm -r static/

# Move the build files to the root of the web server directory
echo "Moving build files..."
sudo mv build/* .

# Restart Nginx
echo "Restarting Nginx..."
sudo systemctl stop nginx
sudo systemctl start nginx

echo "Deployment completed successfully!"