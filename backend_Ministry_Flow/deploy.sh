#!/bin/bash

cd /app/backend

echo "Pulling latest code..."
git pull

echo "Installing dependencies..."
npm ci

echo "Restarting backend..."
pm2 restart all

echo "Deployment completed."
