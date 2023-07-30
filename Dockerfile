FROM node:14.19.3

WORKDIR /React_Supplier_dash

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 3010

CMD ["npm","run","start"]