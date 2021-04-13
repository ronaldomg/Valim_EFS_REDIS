FROM tomcat:9.0.39-jdk8-corretto

COPY /conf/context.xml /usr/local/tomcat/webapps/manager/META-INF
COPY /conf/tomcat-users.xml /usr/local/tomcat/conf
COPY /conf/server.xml /usr/local/tomcat/conf
COPY /init.sh /bin
COPY /context.xml /usr/local/tomcat/conf
COPY /CloudAdmin /usr/local/tomcat/webapps/CloudAdmin
COPY /WEB-INF /usr/local/webinf
COPY /static /usr/local/static

EXPOSE 8080

CMD ["init.sh"]
