/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:22:34.3
*/
gx.evt.autoSkip=!1;gx.define("hlermensagem",!1,function(){this.ServerClass="hlermensagem";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.AV5MensagensId=gx.fn.getIntegerValue("vMENSAGENSID",".");this.AV8UsrCod=gx.fn.getIntegerValue("vUSRCOD",".");this.AV6SnAtuLid=gx.fn.getControlValue("vSNATULID")};this.Valid_Usuarioenviouid=function(){try{var n=gx.util.balloon.getNew("USUARIOENVIOUID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Destinatarioid=function(){try{var n=gx.util.balloon.getNew("DESTINATARIOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e12492_client=function(){this.executeServerEvent("'EXCLUIMENSAGEM'",!0,null,!1,!1)};this.e13492_client=function(){this.executeServerEvent("'MARCARLIDO'",!0,null,!1,!1)};this.e14492_client=function(){this.executeServerEvent("'NOVA'",!0,null,!1,!1)};this.e16492_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e17492_client=function(){this.executeServerEvent("'RESPONDER'",!0,null,!1,!1)};this.e18492_client=function(){this.executeServerEvent("'ENCAMINHAR'",!0,null,!1,!1)};this.e19492_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e20492_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84];this.GXLastCtrlId=84;n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"TABLE1",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"TABLE3",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"IMAGE1",grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"TEXTBLOCK1",format:0,grid:0};n[16]={fld:"",grid:0};n[17]={fld:"TABLE4",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"",grid:0};n[20]={fld:"IMAGE2",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"",grid:0};n[23]={fld:"TEXTBLOCK2",format:0,grid:0};n[24]={fld:"",grid:0};n[25]={fld:"TABLE5",grid:0};n[26]={fld:"",grid:0};n[27]={fld:"",grid:0};n[28]={fld:"IMAGE3",grid:0};n[29]={fld:"",grid:0};n[30]={fld:"",grid:0};n[31]={fld:"TEXTBLOCK3",format:0,grid:0};n[32]={fld:"",grid:0};n[33]={fld:"TABLE6",grid:0};n[34]={fld:"",grid:0};n[35]={fld:"",grid:0};n[36]={fld:"IMAGE4",grid:0};n[37]={fld:"",grid:0};n[38]={fld:"",grid:0};n[39]={fld:"TEXTBLOCK4",format:0,grid:0};n[40]={fld:"",grid:0};n[41]={fld:"TABLE7",grid:0};n[42]={fld:"",grid:0};n[43]={fld:"",grid:0};n[44]={fld:"IMAGE5",grid:0};n[45]={fld:"",grid:0};n[46]={fld:"",grid:0};n[47]={fld:"TEXTBLOCK5",format:0,grid:0};n[48]={fld:"",grid:0};n[49]={fld:"",grid:0};n[50]={fld:"",grid:0};n[51]={fld:"",grid:0};n[52]={fld:"TABLE2",grid:0};n[53]={fld:"",grid:0};n[54]={fld:"",grid:0};n[55]={fld:"",grid:0};n[56]={lvl:0,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Usuarioenviouid,isvalid:null,rgrid:[],fld:"USUARIOENVIOUID",gxz:"Z132UsuarioEnviouId",gxold:"O132UsuarioEnviouId",gxvar:"A132UsuarioEnviouId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A132UsuarioEnviouId=gx.num.intval(n)},v2z:function(n){gx.O.Z132UsuarioEnviouId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("USUARIOENVIOUID",gx.O.A132UsuarioEnviouId,0)},c2v:function(){gx.O.A132UsuarioEnviouId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("USUARIOENVIOUID",".")},nac:gx.falseFn};n[57]={fld:"",grid:0};n[58]={fld:"",grid:0};n[59]={lvl:0,type:"char",len:35,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOENVIOUNOME",gxz:"Z164UsuarioEnviouNome",gxold:"O164UsuarioEnviouNome",gxvar:"A164UsuarioEnviouNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A164UsuarioEnviouNome=n},v2z:function(n){gx.O.Z164UsuarioEnviouNome=n},v2c:function(){gx.fn.setControlValue("USUARIOENVIOUNOME",gx.O.A164UsuarioEnviouNome,0)},c2v:function(){gx.O.A164UsuarioEnviouNome=this.val()},val:function(){return gx.fn.getControlValue("USUARIOENVIOUNOME")},nac:gx.falseFn};n[60]={fld:"",grid:0};n[61]={fld:"",grid:0};n[62]={fld:"",grid:0};n[63]={lvl:0,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Destinatarioid,isvalid:null,rgrid:[],fld:"DESTINATARIOID",gxz:"Z21DestinatarioId",gxold:"O21DestinatarioId",gxvar:"A21DestinatarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A21DestinatarioId=gx.num.intval(n)},v2z:function(n){gx.O.Z21DestinatarioId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("DESTINATARIOID",gx.O.A21DestinatarioId,0)},c2v:function(){gx.O.A21DestinatarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DESTINATARIOID",".")},nac:gx.falseFn};n[64]={fld:"",grid:0};n[65]={fld:"",grid:0};n[66]={lvl:0,type:"char",len:35,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DESTINATARIONOME",gxz:"Z137DestinatarioNome",gxold:"O137DestinatarioNome",gxvar:"A137DestinatarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A137DestinatarioNome=n},v2z:function(n){gx.O.Z137DestinatarioNome=n},v2c:function(){gx.fn.setControlValue("DESTINATARIONOME",gx.O.A137DestinatarioNome,0)},c2v:function(){gx.O.A137DestinatarioNome=this.val()},val:function(){return gx.fn.getControlValue("DESTINATARIONOME")},nac:gx.falseFn};n[67]={fld:"",grid:0};n[68]={fld:"",grid:0};n[69]={fld:"",grid:0};n[70]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGENSDATA",gxz:"Z155MensagensData",gxold:"O155MensagensData",gxvar:"A155MensagensData",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A155MensagensData=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z155MensagensData=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("MENSAGENSDATA",gx.O.A155MensagensData,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A155MensagensData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MENSAGENSDATA")},nac:gx.falseFn};this.declareDomainHdlr(70,function(){});n[71]={fld:"",grid:0};n[72]={fld:"",grid:0};n[73]={fld:"",grid:0};n[74]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGENSDATAAPRESENTACAO",gxz:"Z156MensagensDataApresentacao",gxold:"O156MensagensDataApresentacao",gxvar:"A156MensagensDataApresentacao",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A156MensagensDataApresentacao=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z156MensagensDataApresentacao=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("MENSAGENSDATAAPRESENTACAO",gx.O.A156MensagensDataApresentacao,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A156MensagensDataApresentacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MENSAGENSDATAAPRESENTACAO")},nac:gx.falseFn};this.declareDomainHdlr(74,function(){});n[75]={fld:"",grid:0};n[76]={fld:"",grid:0};n[77]={fld:"",grid:0};n[78]={lvl:0,type:"svchar",len:80,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGENSASSUNTO",gxz:"Z153MensagensAssunto",gxold:"O153MensagensAssunto",gxvar:"A153MensagensAssunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A153MensagensAssunto=n},v2z:function(n){gx.O.Z153MensagensAssunto=n},v2c:function(){gx.fn.setControlValue("MENSAGENSASSUNTO",gx.O.A153MensagensAssunto,0)},c2v:function(){gx.O.A153MensagensAssunto=this.val()},val:function(){return gx.fn.getControlValue("MENSAGENSASSUNTO")},nac:gx.falseFn};n[79]={fld:"",grid:0};n[80]={fld:"",grid:0};n[81]={fld:"",grid:0};n[82]={lvl:0,type:"svchar",len:2e3,dec:0,sign:!1,ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENSAGENSCORPO",gxz:"Z154MensagensCorpo",gxold:"O154MensagensCorpo",gxvar:"A154MensagensCorpo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A154MensagensCorpo=n},v2z:function(n){gx.O.Z154MensagensCorpo=n},v2c:function(){gx.fn.setControlValue("MENSAGENSCORPO",gx.O.A154MensagensCorpo,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A154MensagensCorpo=this.val()},val:function(){return gx.fn.getControlValue("MENSAGENSCORPO")},nac:gx.falseFn};this.declareDomainHdlr(82,function(){});n[83]={fld:"",grid:0};n[84]={fld:"",grid:0};this.A132UsuarioEnviouId=0;this.Z132UsuarioEnviouId=0;this.O132UsuarioEnviouId=0;this.A164UsuarioEnviouNome="";this.Z164UsuarioEnviouNome="";this.O164UsuarioEnviouNome="";this.A21DestinatarioId=0;this.Z21DestinatarioId=0;this.O21DestinatarioId=0;this.A137DestinatarioNome="";this.Z137DestinatarioNome="";this.O137DestinatarioNome="";this.A155MensagensData=gx.date.nullDate();this.Z155MensagensData=gx.date.nullDate();this.O155MensagensData=gx.date.nullDate();this.A156MensagensDataApresentacao=gx.date.nullDate();this.Z156MensagensDataApresentacao=gx.date.nullDate();this.O156MensagensDataApresentacao=gx.date.nullDate();this.A153MensagensAssunto="";this.Z153MensagensAssunto="";this.O153MensagensAssunto="";this.A154MensagensCorpo="";this.Z154MensagensCorpo="";this.O154MensagensCorpo="";this.A132UsuarioEnviouId=0;this.A164UsuarioEnviouNome="";this.A21DestinatarioId=0;this.A137DestinatarioNome="";this.A155MensagensData=gx.date.nullDate();this.A156MensagensDataApresentacao=gx.date.nullDate();this.A153MensagensAssunto="";this.A154MensagensCorpo="";this.AV5MensagensId=0;this.AV8UsrCod=0;this.AV6SnAtuLid="";this.A131MensagensId=0;this.A158MensagensDestinatarioLida="";this.Events={e12492_client:["'EXCLUIMENSAGEM'",!0],e13492_client:["'MARCARLIDO'",!0],e14492_client:["'NOVA'",!0],e16492_client:["'FECHAR'",!0],e17492_client:["'RESPONDER'",!0],e18492_client:["'ENCAMINHAR'",!0],e19492_client:["ENTER",!0],e20492_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms["'EXCLUIMENSAGEM'"]=[[{av:"AV7Tipo",fld:"vTIPO"},{av:"AV5MensagensId",fld:"vMENSAGENSID",hsh:!0},{av:"A21DestinatarioId",fld:"DESTINATARIOID"}],[]];this.EvtParms["'MARCARLIDO'"]=[[{av:"AV5MensagensId",fld:"vMENSAGENSID",hsh:!0},{av:"A21DestinatarioId",fld:"DESTINATARIOID"}],[]];this.EvtParms["'NOVA'"]=[[],[]];this.EvtParms.LOAD=[[{av:"A158MensagensDestinatarioLida",fld:"MENSAGENSDESTINATARIOLIDA"}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK3","Caption")',ctrl:"TEXTBLOCK3",prop:"Caption"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV6SnAtuLid",fld:"vSNATULID",hsh:!0},{av:"AV5MensagensId",fld:"vMENSAGENSID",hsh:!0},{av:"A21DestinatarioId",fld:"DESTINATARIOID"}],[]];this.EvtParms["'RESPONDER'"]=[[{av:"AV5MensagensId",fld:"vMENSAGENSID",hsh:!0}],[]];this.EvtParms["'ENCAMINHAR'"]=[[{av:"AV5MensagensId",fld:"vMENSAGENSID",hsh:!0}],[]];this.setVCMap("AV5MensagensId","vMENSAGENSID",0,"int");this.setVCMap("AV8UsrCod","vUSRCOD",0,"int");this.setVCMap("AV6SnAtuLid","vSNATULID",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hlermensagem)