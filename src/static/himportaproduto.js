/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 17:46:26.8
*
gx.evt.autoSkip=!1;gx.define("himportaproduto",!1,function(){var n,t;this.ServerClass="himportaproduto";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){};this.Validv_Grupoprodutoid=function(){try{var n=gx.util.balloon.getNew("vGRUPOPRODUTOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Subgrupoprodutoid=function(){try{var n=gx.util.balloon.getNew("vSUBGRUPOPRODUTOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Familiaid=function(){try{var n=gx.util.balloon.getNew("vFAMILIAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Tipodispendiocodigo=function(){try{var n=gx.util.balloon.getNew("vTIPODISPENDIOCODIGO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Grupoprodutoempresaid=function(){try{var n=gx.util.balloon.getNew("vGRUPOPRODUTOEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Tipodispendioempresaid=function(){try{var n=gx.util.balloon.getNew("vTIPODISPENDIOEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Familiaempresaid=function(){try{var n=gx.util.balloon.getNew("vFAMILIAEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Subgrupoprodutoempresaid=function(){try{var n=gx.util.balloon.getNew("vSUBGRUPOPRODUTOEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s152_client=function(){gx.fn.setCtrlProperty("vDIRETORIO","Enabled",!1);gx.fn.setCtrlProperty("CHAMADIALOG","Enabled",!1);gx.fn.setCtrlProperty("vGRUPOPRODUTOID","Enabled",!1);gx.fn.setCtrlProperty("PROMPTGRUPO","Enabled",!1);gx.fn.setCtrlProperty("vSUBGRUPOPRODUTOID","Enabled",!1);gx.fn.setCtrlProperty("PROMPTSUBGRUPO","Enabled",!1);gx.fn.setCtrlProperty("vFAMILIAID","Enabled",!1);gx.fn.setCtrlProperty("vTIPODISPENDIOCODIGO","Enabled",!1);gx.fn.setCtrlProperty("BUTTON1","Enabled",!1);gx.fn.setCtrlProperty("BUTTON2","Enabled",!1)};this.s1611_client=function(){gx.fn.setCtrlProperty("vDIRETORIO","Enabled",!0);gx.fn.setCtrlProperty("CHAMADIALOG","Enabled",!0);gx.fn.setCtrlProperty("vGRUPOPRODUTOID","Enabled",!0);gx.fn.setCtrlProperty("PROMPTGRUPO","Enabled",!0);gx.fn.setCtrlProperty("vSUBGRUPOPRODUTOID","Enabled",!0);gx.fn.setCtrlProperty("PROMPTSUBGRUPO","Enabled",!0);gx.fn.setCtrlProperty("vFAMILIAID","Enabled",!0);gx.fn.setCtrlProperty("vTIPODISPENDIOCODIGO","Enabled",!0);gx.fn.setCtrlProperty("BUTTON1","Enabled",!0);gx.fn.setCtrlProperty("BUTTON2","Enabled",!0)};this.e1125u2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e1425u2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1225u2_client=function(){this.executeServerEvent("TIMER.ELAPSED",!1,null,!0,!0)};this.e1725u2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,14,16,17,20,22,23,24,27,29,30,31,34,36,37,40,42,43,54,57,59,60,63,65,66,69,71,81,82,85,86,87,88,89,90,92,93];this.GXLastCtrlId=93;this.TIMERContainer=gx.uc.getNew(this,72,16,"Timer","TIMERContainer","Timer");t=this.TIMERContainer;t.setProp("Interval","Interval",1e4,"num");t.setDynProp("Enabled","Enabled",!0,"boolean");t.setProp("Visible","Visible",!0,"bool");t.setProp("Class","Class","","char");t.setC2ShowFunction(function(n){n.start()});t.addEventHandler("Elapsed",this.e1225u2_client);this.setUserControl(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE7",grid:0};n[8]={fld:"TABLE1",grid:0};n[11]={fld:"TEXTBLOCK14",format:0,grid:0};n[14]={fld:"TEXTBLOCK15",format:0,grid:0};n[16]={lvl:0,type:"svchar",len:150,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV8Diretorio",gxold:"OV8Diretorio",gxvar:"AV8Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8Diretorio=n},v2z:function(n){gx.O.ZV8Diretorio=n},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV8Diretorio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV8Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};this.declareDomainHdlr(16,function(){});n[17]={fld:"CHAMADIALOG",grid:0};n[20]={fld:"TEXTBLOCK24",format:0,grid:0};n[22]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoprodutoid,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV22GrupoProdutoId",gxold:"OV22GrupoProdutoId",gxvar:"AV22GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22GrupoProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV22GrupoProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV22GrupoProdutoId,0)},c2v:function(){gx.O.AV22GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",".")},nac:gx.falseFn};n[23]={fld:"PROMPTGRUPO",grid:0};n[24]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTODESCRICAO",gxz:"ZV20GrupoProdutoDescricao",gxold:"OV20GrupoProdutoDescricao",gxvar:"AV20GrupoProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV20GrupoProdutoDescricao=n},v2z:function(n){gx.O.ZV20GrupoProdutoDescricao=n},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTODESCRICAO",gx.O.AV20GrupoProdutoDescricao,0)},c2v:function(){gx.O.AV20GrupoProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOPRODUTODESCRICAO")},nac:gx.falseFn};n[27]={fld:"TEXTBLOCK19",format:0,grid:0};n[29]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Subgrupoprodutoid,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV46SubgrupoProdutoId",gxold:"OV46SubgrupoProdutoId",gxvar:"AV46SubgrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV46SubgrupoProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV46SubgrupoProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV46SubgrupoProdutoId,0)},c2v:function(){gx.O.AV46SubgrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",".")},nac:gx.falseFn};n[30]={fld:"PROMPTSUBGRUPO",grid:0};n[31]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTODESCRICAO",gxz:"ZV44SubgrupoProdutoDescricao",gxold:"OV44SubgrupoProdutoDescricao",gxvar:"AV44SubgrupoProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV44SubgrupoProdutoDescricao=n},v2z:function(n){gx.O.ZV44SubgrupoProdutoDescricao=n},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTODESCRICAO",gx.O.AV44SubgrupoProdutoDescricao,0)},c2v:function(){gx.O.AV44SubgrupoProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSUBGRUPOPRODUTODESCRICAO")},nac:gx.falseFn};n[34]={fld:"TEXTBLOCK20",format:0,grid:0};n[36]={lvl:0,type:"char",len:15,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaid,isvalid:null,rgrid:[],fld:"vFAMILIAID",gxz:"ZV17FamiliaId",gxold:"OV17FamiliaId",gxvar:"AV17FamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17FamiliaId=n},v2z:function(n){gx.O.ZV17FamiliaId=n},v2c:function(){gx.fn.setControlValue("vFAMILIAID",gx.O.AV17FamiliaId,0)},c2v:function(){gx.O.AV17FamiliaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAID")},nac:gx.falseFn};n[37]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIADESCRICAO",gxz:"ZV15FamiliaDescricao",gxold:"OV15FamiliaDescricao",gxvar:"AV15FamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15FamiliaDescricao=n},v2z:function(n){gx.O.ZV15FamiliaDescricao=n},v2c:function(){gx.fn.setControlValue("vFAMILIADESCRICAO",gx.O.AV15FamiliaDescricao,0)},c2v:function(){gx.O.AV15FamiliaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIADESCRICAO")},nac:gx.falseFn};n[40]={fld:"TEXTBLOCK21",format:0,grid:0};n[42]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipodispendiocodigo,isvalid:null,rgrid:[],fld:"vTIPODISPENDIOCODIGO",gxz:"ZV50TipoDispendioCodigo",gxold:"OV50TipoDispendioCodigo",gxvar:"AV50TipoDispendioCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV50TipoDispendioCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV50TipoDispendioCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vTIPODISPENDIOCODIGO",gx.O.AV50TipoDispendioCodigo,0)},c2v:function(){gx.O.AV50TipoDispendioCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPODISPENDIOCODIGO",".")},nac:gx.falseFn};n[43]={lvl:0,type:"svchar",len:35,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODISPENDIODESCRICAO",gxz:"ZV51TipoDispendioDescricao",gxold:"OV51TipoDispendioDescricao",gxvar:"AV51TipoDispendioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV51TipoDispendioDescricao=n},v2z:function(n){gx.O.ZV51TipoDispendioDescricao=n},v2c:function(){gx.fn.setControlValue("vTIPODISPENDIODESCRICAO",gx.O.AV51TipoDispendioDescricao,0)},c2v:function(){gx.O.AV51TipoDispendioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPODISPENDIODESCRICAO")},nac:gx.falseFn};n[54]={fld:"TAB1",grid:0};n[57]={fld:"IMGPROC",grid:0};n[59]={fld:"TXTAPLICACAO",format:0,grid:0};n[60]={fld:"TAB3",grid:0};n[63]={fld:"IMAGE2",grid:0};n[65]={fld:"TXTAPLERRO1",format:0,grid:0};n[66]={fld:"TAB2",grid:0};n[69]={fld:"IMGERRO",grid:0};n[71]={fld:"TXTAPLERRO",format:0,grid:0};n[81]={fld:"JSJSON",format:2,grid:0};n[82]={fld:"TABVISIBLE",grid:0};n[85]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoprodutoempresaid,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOEMPRESAID",gxz:"ZV21GrupoProdutoEmpresaId",gxold:"OV21GrupoProdutoEmpresaId",gxvar:"AV21GrupoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21GrupoProdutoEmpresaId=n},v2z:function(n){gx.O.ZV21GrupoProdutoEmpresaId=n},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOEMPRESAID",gx.O.AV21GrupoProdutoEmpresaId,0)},c2v:function(){gx.O.AV21GrupoProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOPRODUTOEMPRESAID")},nac:gx.falseFn};n[86]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipodispendioempresaid,isvalid:null,rgrid:[],fld:"vTIPODISPENDIOEMPRESAID",gxz:"ZV52TipoDispendioEmpresaId",gxold:"OV52TipoDispendioEmpresaId",gxvar:"AV52TipoDispendioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV52TipoDispendioEmpresaId=n},v2z:function(n){gx.O.ZV52TipoDispendioEmpresaId=n},v2c:function(){gx.fn.setControlValue("vTIPODISPENDIOEMPRESAID",gx.O.AV52TipoDispendioEmpresaId,0)},c2v:function(){gx.O.AV52TipoDispendioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPODISPENDIOEMPRESAID")},nac:gx.falseFn};n[87]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaempresaid,isvalid:null,rgrid:[],fld:"vFAMILIAEMPRESAID",gxz:"ZV16FamiliaEmpresaId",gxold:"OV16FamiliaEmpresaId",gxvar:"AV16FamiliaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16FamiliaEmpresaId=n},v2z:function(n){gx.O.ZV16FamiliaEmpresaId=n},v2c:function(){gx.fn.setControlValue("vFAMILIAEMPRESAID",gx.O.AV16FamiliaEmpresaId,0)},c2v:function(){gx.O.AV16FamiliaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAEMPRESAID")},nac:gx.falseFn};n[88]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV36ProcessoId",gxold:"OV36ProcessoId",gxvar:"AV36ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV36ProcessoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV36ProcessoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV36ProcessoId,0)},c2v:function(){gx.O.AV36ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",".")},nac:gx.falseFn};n[89]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Subgrupoprodutoempresaid,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOEMPRESAID",gxz:"ZV45SubGrupoProdutoEmpresaId",gxold:"OV45SubGrupoProdutoEmpresaId",gxvar:"AV45SubGrupoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV45SubGrupoProdutoEmpresaId=n},v2z:function(n){gx.O.ZV45SubGrupoProdutoEmpresaId=n},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOEMPRESAID",gx.O.AV45SubGrupoProdutoEmpresaId,0)},c2v:function(){gx.O.AV45SubGrupoProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSUBGRUPOPRODUTOEMPRESAID")},nac:gx.falseFn};n[90]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOROTINA",gxz:"ZV37ProcessoRotina",gxold:"OV37ProcessoRotina",gxvar:"AV37ProcessoRotina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV37ProcessoRotina=n},v2z:function(n){gx.O.ZV37ProcessoRotina=n},v2c:function(){gx.fn.setComboBoxValue("vPROCESSOROTINA",gx.O.AV37ProcessoRotina)},c2v:function(){gx.O.AV37ProcessoRotina=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOROTINA")},nac:gx.falseFn};n[92]={fld:"PROMPT_FAMILIAID",grid:0};n[93]={fld:"PROMPT_TIPODISPENDIOCODIGO",grid:0};this.AV8Diretorio="";this.ZV8Diretorio="";this.OV8Diretorio="";this.AV22GrupoProdutoId=0;this.ZV22GrupoProdutoId=0;this.OV22GrupoProdutoId=0;this.AV20GrupoProdutoDescricao="";this.ZV20GrupoProdutoDescricao="";this.OV20GrupoProdutoDescricao="";this.AV46SubgrupoProdutoId=0;this.ZV46SubgrupoProdutoId=0;this.OV46SubgrupoProdutoId=0;this.AV44SubgrupoProdutoDescricao="";this.ZV44SubgrupoProdutoDescricao="";this.OV44SubgrupoProdutoDescricao="";this.AV17FamiliaId="";this.ZV17FamiliaId="";this.OV17FamiliaId="";this.AV15FamiliaDescricao="";this.ZV15FamiliaDescricao="";this.OV15FamiliaDescricao="";this.AV50TipoDispendioCodigo=0;this.ZV50TipoDispendioCodigo=0;this.OV50TipoDispendioCodigo=0;this.AV51TipoDispendioDescricao="";this.ZV51TipoDispendioDescricao="";this.OV51TipoDispendioDescricao="";this.AV21GrupoProdutoEmpresaId="";this.ZV21GrupoProdutoEmpresaId="";this.OV21GrupoProdutoEmpresaId="";this.AV52TipoDispendioEmpresaId="";this.ZV52TipoDispendioEmpresaId="";this.OV52TipoDispendioEmpresaId="";this.AV16FamiliaEmpresaId="";this.ZV16FamiliaEmpresaId="";this.OV16FamiliaEmpresaId="";this.AV36ProcessoId=0;this.ZV36ProcessoId=0;this.OV36ProcessoId=0;this.AV45SubGrupoProdutoEmpresaId="";this.ZV45SubGrupoProdutoEmpresaId="";this.OV45SubGrupoProdutoEmpresaId="";this.AV37ProcessoRotina="";this.ZV37ProcessoRotina="";this.OV37ProcessoRotina="";this.AV8Diretorio="";this.AV22GrupoProdutoId=0;this.AV20GrupoProdutoDescricao="";this.AV46SubgrupoProdutoId=0;this.AV44SubgrupoProdutoDescricao="";this.AV17FamiliaId="";this.AV15FamiliaDescricao="";this.AV50TipoDispendioCodigo=0;this.AV51TipoDispendioDescricao="";this.AV21GrupoProdutoEmpresaId="";this.AV52TipoDispendioEmpresaId="";this.AV16FamiliaEmpresaId="";this.AV36ProcessoId=0;this.AV45SubGrupoProdutoEmpresaId="";this.AV37ProcessoRotina="";this.A1546ProcessoDtTermino=gx.date.nullDate();this.A1544ProcessoId=0;this.A1543ProcessoRotina="";this.A1554ProcessoQtdeErros=0;this.A8153TipoDispendioCodigo=0;this.A8152TipoDispendioEmpresaId="";this.A8145TipoDispendioDescricao="";this.A2957FamiliaId="";this.A2956FamiliaEmpresaId="";this.A2951FamiliaDescricao="";this.A3409SubgrupoProdutoId=0;this.A3826SubgrupoProdutoEmpresaId="";this.A3963SubgrupoProdutoDescricao="";this.A3408GrupoProdutoId=0;this.A3539GrupoProdutoEmpresaId="";this.A3536GrupoProdutoDescricao="";this.Events={e1125u2_client:["'FECHAR'",!0],e1425u2_client:["ENTER",!0],e1225u2_client:["TIMER.ELAPSED",!0],e1725u2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[{av:"AV7DirAux",fld:"vDIRAUX"},{av:"AV8Diretorio",fld:"vDIRETORIO"}]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms.ENTER=[[{av:"AV53TpErro",fld:"vTPERRO"},{av:"AV57Pgmname",fld:"vPGMNAME"},{av:"AV8Diretorio",fld:"vDIRETORIO"},{av:"AV22GrupoProdutoId",fld:"vGRUPOPRODUTOID"},{av:"AV46SubgrupoProdutoId",fld:"vSUBGRUPOPRODUTOID"},{av:"AV17FamiliaId",fld:"vFAMILIAID"},{av:"AV50TipoDispendioCodigo",fld:"vTIPODISPENDIOCODIGO"},{av:"AV54UsrCod",fld:"vUSRCOD"},{av:"AV9EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV14ErrDsc",fld:"vERRDSC"},{av:"A3539GrupoProdutoEmpresaId",fld:"GRUPOPRODUTOEMPRESAID"},{av:"AV21GrupoProdutoEmpresaId",fld:"vGRUPOPRODUTOEMPRESAID"},{av:"A3408GrupoProdutoId",fld:"GRUPOPRODUTOID"},{av:"A3536GrupoProdutoDescricao",fld:"GRUPOPRODUTODESCRICAO"},{av:"A3826SubgrupoProdutoEmpresaId",fld:"SUBGRUPOPRODUTOEMPRESAID"},{av:"AV45SubGrupoProdutoEmpresaId",fld:"vSUBGRUPOPRODUTOEMPRESAID"},{av:"A3409SubgrupoProdutoId",fld:"SUBGRUPOPRODUTOID"},{av:"A3963SubgrupoProdutoDescricao",fld:"SUBGRUPOPRODUTODESCRICAO"},{av:"A2956FamiliaEmpresaId",fld:"FAMILIAEMPRESAID"},{av:"AV16FamiliaEmpresaId",fld:"vFAMILIAEMPRESAID"},{av:"A2957FamiliaId",fld:"FAMILIAID"},{av:"A2951FamiliaDescricao",fld:"FAMILIADESCRICAO"},{av:"A8152TipoDispendioEmpresaId",fld:"TIPODISPENDIOEMPRESAID"},{av:"AV52TipoDispendioEmpresaId",fld:"vTIPODISPENDIOEMPRESAID"},{av:"A8153TipoDispendioCodigo",fld:"TIPODISPENDIOCODIGO"},{av:"A8145TipoDispendioDescricao",fld:"TIPODISPENDIODESCRICAO"}],[{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:"TAB1",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:"TAB2",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:"TAB3",prop:"Visible"},{av:"this.TIMERContainer.Enabled",ctrl:"TIMER",prop:"Enabled"},{av:"AV37ProcessoRotina",fld:"vPROCESSOROTINA"},{av:"AV36ProcessoId",fld:"vPROCESSOID"},{av:"AV31NmLogon",fld:"vNMLOGON"},{av:"AV19Filtros",fld:"vFILTROS"},{av:"AV14ErrDsc",fld:"vERRDSC"},{av:"AV50TipoDispendioCodigo",fld:"vTIPODISPENDIOCODIGO"},{av:"AV17FamiliaId",fld:"vFAMILIAID"},{av:"AV46SubgrupoProdutoId",fld:"vSUBGRUPOPRODUTOID"},{av:"AV22GrupoProdutoId",fld:"vGRUPOPRODUTOID"},{av:"AV8Diretorio",fld:"vDIRETORIO"},{av:"AV9EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV54UsrCod",fld:"vUSRCOD"},{av:"AV53TpErro",fld:"vTPERRO"},{av:"AV24i",fld:"vI"},{av:"AV59GXLvl116",fld:"vGXLVL116"},{av:"AV20GrupoProdutoDescricao",fld:"vGRUPOPRODUTODESCRICAO"},{av:"AV60GXLvl134",fld:"vGXLVL134"},{av:"AV44SubgrupoProdutoDescricao",fld:"vSUBGRUPOPRODUTODESCRICAO"},{av:"AV61GXLvl152",fld:"vGXLVL152"},{av:"AV15FamiliaDescricao",fld:"vFAMILIADESCRICAO"},{av:"AV62GXLvl170",fld:"vGXLVL170"},{av:"AV51TipoDispendioDescricao",fld:"vTIPODISPENDIODESCRICAO"},{av:'gx.fn.getCtrlProperty("vDIRETORIO","Enabled")',ctrl:"vDIRETORIO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("CHAMADIALOG","Enabled")',ctrl:"CHAMADIALOG",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vGRUPOPRODUTOID","Enabled")',ctrl:"vGRUPOPRODUTOID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("PROMPTGRUPO","Enabled")',ctrl:"PROMPTGRUPO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSUBGRUPOPRODUTOID","Enabled")',ctrl:"vSUBGRUPOPRODUTOID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("PROMPTSUBGRUPO","Enabled")',ctrl:"PROMPTSUBGRUPO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vFAMILIAID","Enabled")',ctrl:"vFAMILIAID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vTIPODISPENDIOCODIGO","Enabled")',ctrl:"vTIPODISPENDIOCODIGO",prop:"Enabled"},{ctrl:"BUTTON1",prop:"Enabled"},{ctrl:"BUTTON2",prop:"Enabled"}]];this.EvtParms["TIMER.ELAPSED"]=[[{av:"A1543ProcessoRotina",fld:"PROCESSOROTINA"},{av:"A1544ProcessoId",fld:"PROCESSOID"},{av:"AV36ProcessoId",fld:"vPROCESSOID"},{av:"A1546ProcessoDtTermino",fld:"PROCESSODTTERMINO"},{av:"A1554ProcessoQtdeErros",fld:"PROCESSOQTDEERROS"}],[{av:"AV67GXLvl281",fld:"vGXLVL281"},{av:"this.TIMERContainer.Enabled",ctrl:"TIMER",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:"TAB1",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:"TAB2",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:"TAB3",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vDIRETORIO","Enabled")',ctrl:"vDIRETORIO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("CHAMADIALOG","Enabled")',ctrl:"CHAMADIALOG",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vGRUPOPRODUTOID","Enabled")',ctrl:"vGRUPOPRODUTOID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("PROMPTGRUPO","Enabled")',ctrl:"PROMPTGRUPO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vSUBGRUPOPRODUTOID","Enabled")',ctrl:"vSUBGRUPOPRODUTOID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("PROMPTSUBGRUPO","Enabled")',ctrl:"PROMPTSUBGRUPO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vFAMILIAID","Enabled")',ctrl:"vFAMILIAID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vTIPODISPENDIOCODIGO","Enabled")',ctrl:"vTIPODISPENDIOCODIGO",prop:"Enabled"},{ctrl:"BUTTON1",prop:"Enabled"},{ctrl:"BUTTON2",prop:"Enabled"}]];this.setPrompt("PROMPTGRUPO",[22]);this.setPrompt("PROMPTSUBGRUPO",[29]);this.setPrompt("PROMPT_FAMILIAID",[36]);this.setPrompt("PROMPT_TIPODISPENDIOCODIGO",[42]);this.EnterCtrl=["BUTTON1"];this.InitStandaloneVars()});gx.setParentObj(new himportaproduto)