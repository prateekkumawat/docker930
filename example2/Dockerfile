FROM redhat/ubi9:latest
LABEL orgniztion="highsky"
LABEL purpose="learning dockerfile"

RUN yum install nginx -y 
COPY src/  var/www/html/

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]

EXPOSE 80


#CMD yum install httpd  # shell mode in cmd
#CMD ["/usr/sbin/yum", "install, "httpd", "-y"]    # exec mode in cmd
#CMD ["python", "/app/app.py"]  # for python app
#CMD ["java", "-jar", "/app/app.jar"]  # for java app
#CMD java -jar /app/app.jar  # for java app shell mode