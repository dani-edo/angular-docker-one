FROM node:16.13.1-alpine
WORKDIR /var/www/
COPY ./ /var/www/
RUN npm install
EXPOSE 80
CMD ["npm", "run", "start"]