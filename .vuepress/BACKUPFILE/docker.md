docker run --name www.aoping.club -p 80:80 -p 443:443 -v ~/application/website:/usr/share/nginx/html -v ~/application/nginxConf/nginx.conf:/etc/nginx/nginx.conf -d nginx
docker run --name www.aoping.club -p 8088:80 -v /Users/isaacho/Documents/program/demo/nginx-demo/html:/usr/share/nginx/html -v /Users/isaacho/Documents/program/demo/nginx-demo/nginx.conf:/etc/nginx/nginx.conf -d nginx
