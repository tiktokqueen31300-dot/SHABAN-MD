FROM node:20-slim

# Install system dependencies (for native modules like sqlite3, ffmpeg etc.)
RUN apt-get update && apt-get install -y \
  git \
  python3 \
  make \
  g++ \
  ffmpeg \
  && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm install --omit=dev

# Copy all source code
COPY . .

# Set environment variable for PORT (Render expects this)
ENV PORT=9090

# Expose port
EXPOSE $PORT

# Use default npm start from package.json
CMD ["npm", "start"]
