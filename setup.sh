#!/bin/bash

# Setup script for WP MCP Server

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Setup complete."
