Calendar.setup=function(n){function t(t,i){typeof n[t]=="undefined"&&(n[t]=i)}function e(n){if(n.params.flat)return typeof n.params.flatCallback=="function"?n.params.flatCallback(n):alert("No flatCallback given -- doing nothing."),!1;if(n.params.inputField&&(n.params.inputField.value=n.date.print(n.params.ifFormat)),n.params.displayArea&&(n.params.displayArea.innerHTML=n.date.print(n.params.daFormat)),n.params.singleClick&&n.dateClicked&&n.callCloseHandler(),typeof n.params.onUpdate=="function")n.params.onUpdate(n)}var f,o,r,u,i,s;if(t("inputField",null),t("displayArea",null),t("button",null),t("eventName","click"),t("ifFormat","%Y/%m/%d"),t("daFormat","%Y/%m/%d"),t("singleClick",!0),t("disableFunc",null),t("dateStatusFunc",n.disableFunc),t("mondayFirst",!0),t("align","Bl"),t("range",[1900,2999]),t("weekNumbers",!0),t("flat",null),t("flatCallback",null),t("onSelect",null),t("onClose",null),t("onUpdate",null),t("date",null),t("showsTime",!1),t("timeFormat","24"),t("displayRight",!1),f=gx.dom.form()[n.inputField],f==null)return!1;o=f.value;r=["inputField","displayArea","button"];for(u in r)typeof n[r[u]]=="string"&&(n[r[u]]=document.getElementById(n[r[u]]));if(n.button&&(n.button.title=Calendar._TT.SEL_DATE,n.button.alt=Calendar._TT.DATE_SELECTOR),!(n.flat||n.inputField||n.displayArea||n.button))return alert("Calendar.setup:\n  Nothing to setup (no fields found).  Please check your code"),!1;if(n.flat!=null)return(n.flat=document.getElementById(n.flat),!n.flat)?(alert("Calendar.setup:\n  Flat specified but can't find parent."),!1):(i=new Calendar(n.mondayFirst,n.date,n.onSelect||e),i.showsTime=n.showsTime,i.time24=n.timeFormat=="24",i.params=n,i.weekNumbers=n.weekNumbers,i.setRange(n.range[0],n.range[1]),i.setDateStatusHandler(n.dateStatusFunc),i.create(n.flat),i.setDateFormat(n.ifFormat),i.parseDate(o,n.ifFormat),i.show(),!1);s=n.button||n.displayArea||n.inputField;s["on"+n.eventName]=function(){var i,r;if(!n.inputField||gx.csv.validControls(gx.csv.lastId,gx.fn.vStructId(n.inputField.id),!1)){var u=n.inputField||n.displayArea,o=n.inputField?n.ifFormat:n.daFormat,f=!1,t;window.calendar=t=new Calendar(n.mondayFirst,n.date,n.onSelect||e,n.onClose||function(n){n.hide()});t.showsTime=n.showsTime;t.time24=n.timeFormat=="24";t.weekNumbers=n.weekNumbers;f=!0;t.setRange(n.range[0],n.range[1]);t.params=n;t.setDateStatusHandler(n.dateStatusFunc);t.setDateFormat(o);i=n.displayArea||n.inputField;i&&gx.dom.hasClass(i,"DPScroll")&&(r=n.parentNode||i.parentNode);f&&t.create(r);t.parseDate(u.value||u.innerHTML,n.ifFormat);t.refresh();t.showAtElement(n.displayArea||n.inputField,n.align)}return!1}}