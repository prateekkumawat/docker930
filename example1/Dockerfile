FROM redhat/ubi9:latest
LABEL orgniztion="highsky"
LABEL purpose="learning dockerfile"

RUN yum install nginx -y 
COPY src/  var/www/html/

RUN echo "/usr/sbin/nginx &>> /var/log/nginx_login.log" >> ~/.bashrc

EXPOSE 80
