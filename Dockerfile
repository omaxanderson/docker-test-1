FROM node:8.16.0-alpine

# Create that shit
WORKDIR /usr/src/app

# Install that shit
COPY package*.json ./

RUN npm install
RUN export TEST_ENV=max_development

# Bundle that shit
COPY . .

# Expose that shit
EXPOSE 4010

# Run that shit
CMD ["npm", "start"]
