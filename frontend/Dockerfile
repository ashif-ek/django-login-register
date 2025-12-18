FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json* ./
RUN npm install

# Copy rest of the frontend code
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Run Vite dev server (accessible outside container)
CMD ["npm", "run", "dev", "--", "--host"]
