docker run -d --name node-img node-image
docker run -d --name ap-php-img apache-php-image
docker run -d -e STATIC_APP=172.17.0.3:80 -e DYNAMIC_APP=172.17.0.2:8888 --name ap-reve-proxy-img -p 8080:80 apache-reverse-proxy
