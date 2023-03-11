# ==== CONFIGURE =====
# Use a Node 18 base image
FROM node:18-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy source files to /app
COPY . .

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# ==== RUN =======
RUN npm run build

# Expose the port on which the app will be running (3000 is the default)
EXPOSE 3000
# Start the app
CMD [ "npm", "run", "start" ]