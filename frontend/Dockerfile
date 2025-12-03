FROM node:25-alpine

WORKDIR /app

# Copying dependencies files
COPY package*.json ./

# installing dependencies
RUN npm install

# Copying all project
COPY . .

# Opening port
EXPOSE 5173

# Starting dev server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]




