FROM nginx:latest

RUN apt-get update
RUN apt-get install -y nodejs npm

ADD app /usr/share/nginx/html
ADD package.json /usr/share/nginx/html/
ADD bower.json /usr/share/nginx/html

RUN chmod -R 777 /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

RUN npm install
RUN npm install -g bower
RUN bower install --allow-root
