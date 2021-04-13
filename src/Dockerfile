FROM tomcat:9.0.39-jdk8-corrett
COPY /conf/context.xml /usr/local/tomcat/webapps/manager/META-INF
COPY /conf/tomcat-users.xml /usr/local/tomcat/conf
COPY /conf/server.xml /usr/local/tomcat/conf
COPY /init.sh /bin
COPY /context.xml /usr/local/tomcat/conf
EXPOSE 808
CMD ["init.sh"]