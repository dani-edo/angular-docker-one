FROM node:12.22.5-alpine3.14
WORKDIR /var/www/
COPY ./ /var/www/
RUN npm install
EXPOSE 80
CMD ["npm", "run", "start"]