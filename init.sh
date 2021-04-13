#!/bin/sh
echo "ln -s /usr/local/webinf /usr/local/tomcat/webapps/BlueFocusCloud/WEB-INF;";
ln -sf /usr/local/webinf /usr/local/tomcat/webapps/BlueFocusCloud/WEB-INF;
echo "ln -s /usr/local/static /usr/local/tomcat/webapps/BlueFocusCloud/static;";
ln -sf /usr/local/static /usr/local/tomcat/webapps/BlueFocusCloud/static;
echo "export BFHOME='/usr/local/tomcat/webapps/BlueFocusCloud/';";
export BFHOME="/usr/local/tomcat/webapps/BlueFocusCloud/";
echo "export IS_AWS='1';";
export IS_AWS="1";
echo "exec catalina.sh run;";
exec catalina.sh run;