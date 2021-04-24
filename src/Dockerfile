FROM tomcat:9.0.39-jdk8-corretto

COPY /conf/tomcat-users.xml /usr/local/tomcat/conf
COPY /conf/server.xml /usr/local/tomcat/conf
COPY /conf/bfRedisson.yaml /usr/local/tomcat/conf
COPY /conf/context.xml /usr/local/tomcat/conf
COPY /lib/redisson-all-3.15.3.jar /usr/local/tomcat/lib
COPY /lib/redisson-tomcat-9-3.15.3.jar /usr/local/tomcat/lib
COPY /init.sh /bin
COPY /CloudAdmin /usr/local/tomcat/webapps/CloudAdmin
COPY /WEB-INF /usr/local/webinf
COPY /static /usr/local/static

EXPOSE 8080

CMD ["init.sh"]
