FROM node:14-alpine
WORKDIR /app
COPY package.json ./
# RUN yarn --frozen-lockfile
COPY . .
EXPOSE 3000
CMD yarn run start