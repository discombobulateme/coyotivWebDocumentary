FROM node:14.10.1-alpine3.11 AS BUILDER

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD .browserslistrc .env.production .eslintrc.js .prettierignore .prettierrc babel.config.js vue.config.js ./

ADD src ./src
ADD public ./public

RUN npm run build

FROM node:14.10.1-alpine3.11

WORKDIR /app

RUN npm i -g serve

COPY --from=BUILDER /app/dist ./
#-s allows single-page application mode -l enables to choose the Port
CMD serve -s -l $PORT
