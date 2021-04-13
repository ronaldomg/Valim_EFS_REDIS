/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:8:8.25
*/
gx.evt.autoSkip = false;
gx.define('hboxtipopermissao', false, function () {
   this.ServerClass =  "hboxtipopermissao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'CANCELAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV16TipoPermissaoId=gx.fn.getIntegerValue("vTIPOPERMISSAOID",'.') ;
      this.AV15UsuarioId=gx.fn.getControlValue("vUSUARIOID") ;
      this.AV17EmpresaId=gx.fn.getControlValue("vEMPRESAID") ;
      this.AV14SnPermissao=gx.fn.getControlValue("vSNPERMISSAO") ;
   };
   this.s122_client=function()
   {
      gx.fn.setCtrlProperty("JSFEC","Caption", "<script language='Javascript'>"+gx.text.newline( ) );
      gx.fn.setCtrlProperty("JSFEC","Caption", gx.fn.getCtrlProperty("JSFEC","Caption")+" parent.hidePopWin(false);"+gx.text.newline( ) );
      gx.fn.setCtrlProperty("JSFEC","Caption", gx.fn.getCtrlProperty("JSFEC","Caption")+" try {parent.Frame().document.forms["+"0"+"].submit();}catch (e) {} "+gx.text.newline( ) );
      gx.fn.setCtrlProperty("JSFEC","Caption", gx.fn.getCtrlProperty("JSFEC","Caption")+"</script>"+gx.text.newline( ) );
   };
   this.e16a21_client=function()
   {
      this.clearMessages();
      this.AV5UsrCod =  this.AV12UsuarioIdAux  ;
      this.refreshOutputs([{av:'AV5UsrCod',fld:'vUSRCOD'}]);
   };
   this.e13a22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14a22_client=function()
   {
      this.executeServerEvent("'ENTER2'", false, null, false, false);
   };
   this.e11a22_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e17a22_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[4,7,10,13,16,18,23,26,29,34,37,40,43,45,48,50,52,62,63,64];
   this.GXLastCtrlId =64;
   GXValidFnc[4]={fld:"TABLE2",grid:0};
   GXValidFnc[7]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLEAVISO",grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={fld:"IMAGE1",grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGERRO",gxz:"ZV9MsgErro",gxold:"OV9MsgErro",gxvar:"AV9MsgErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9MsgErro=Value},v2z:function(Value){gx.O.ZV9MsgErro=Value},v2c:function(){gx.fn.setControlValue("vMSGERRO",gx.O.AV9MsgErro,0)},c2v:function(){gx.O.AV9MsgErro=this.val()},val:function(){return gx.fn.getControlValue("vMSGERRO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLEPERMISSAO",grid:0};
   GXValidFnc[26]={fld:"TABLE5",grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLE4",grid:0};
   GXValidFnc[37]={fld:"TABLE1",grid:0};
   GXValidFnc[40]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSRCOD",gxz:"ZV5UsrCod",gxold:"OV5UsrCod",gxvar:"AV5UsrCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5UsrCod=Value},v2z:function(Value){gx.O.ZV5UsrCod=Value},v2c:function(){gx.fn.setControlValue("vUSRCOD",gx.O.AV5UsrCod,0)},c2v:function(){gx.O.AV5UsrCod=this.val()},val:function(){return gx.fn.getControlValue("vUSRCOD")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:32,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSRSNH",gxz:"ZV11UsrSnh",gxold:"OV11UsrSnh",gxvar:"AV11UsrSnh",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11UsrSnh=Value},v2z:function(Value){gx.O.ZV11UsrSnh=Value},v2c:function(){gx.fn.setControlValue("vUSRSNH",gx.O.AV11UsrSnh,0)},c2v:function(){gx.O.AV11UsrSnh=this.val()},val:function(){return gx.fn.getControlValue("vUSRSNH")},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"char",len:12,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOIDAUX",gxz:"ZV12UsuarioIdAux",gxold:"OV12UsuarioIdAux",gxvar:"AV12UsuarioIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"listbx",v2v:function(Value){gx.O.AV12UsuarioIdAux=Value},v2z:function(Value){gx.O.ZV12UsuarioIdAux=Value},v2c:function(){gx.fn.setComboBoxValue("vUSUARIOIDAUX",gx.O.AV12UsuarioIdAux)},c2v:function(){gx.O.AV12UsuarioIdAux=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOIDAUX")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"JS", format:1,grid:0};
   GXValidFnc[63]={fld:"JSFEC", format:2,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTENTATIVAS",gxz:"ZV26NoTentativas",gxold:"OV26NoTentativas",gxvar:"AV26NoTentativas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26NoTentativas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26NoTentativas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOTENTATIVAS",gx.O.AV26NoTentativas,0)},c2v:function(){gx.O.AV26NoTentativas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOTENTATIVAS",'.')},nac:gx.falseFn};
   this.AV9MsgErro = "" ;
   this.ZV9MsgErro = "" ;
   this.OV9MsgErro = "" ;
   this.AV5UsrCod = "" ;
   this.ZV5UsrCod = "" ;
   this.OV5UsrCod = "" ;
   this.AV11UsrSnh = "" ;
   this.ZV11UsrSnh = "" ;
   this.OV11UsrSnh = "" ;
   this.AV12UsuarioIdAux = "" ;
   this.ZV12UsuarioIdAux = "" ;
   this.OV12UsuarioIdAux = "" ;
   this.AV26NoTentativas = 0 ;
   this.ZV26NoTentativas = 0 ;
   this.OV26NoTentativas = 0 ;
   this.AV9MsgErro = "" ;
   this.AV5UsrCod = "" ;
   this.AV11UsrSnh = "" ;
   this.AV12UsuarioIdAux = "" ;
   this.AV26NoTentativas = 0 ;
   this.AV16TipoPermissaoId = 0 ;
   this.AV15UsuarioId = "" ;
   this.AV17EmpresaId = "" ;
   this.AV14SnPermissao = "" ;
   this.A559TipoPermissaoPrivilegio = "" ;
   this.A568TipoPermissaoId = 0 ;
   this.A557TipoPermissaoDescricao = "" ;
   this.A563TipoPermissaoMensagemSenha = "" ;
   this.A558TipoPermissaoSnEmpresa = "" ;
   this.A219UsuarioNome = "" ;
   this.A604UsuarioPrivilegio = "" ;
   this.A75UsuarioId = "" ;
   this.A566TipoPermissaoUsuarioUsuarioId = "" ;
   this.A138EmpresaId = "" ;
   this.A561TipoPermissaoUsuarioNaoLiberad = "" ;
   this.A560TipoPermissaoUsuarioLiberado = "" ;
   this.A567TipoPermissaoUsuarioPrivilegio = "" ;
   this.Events = {"e13a22_client": ["ENTER", true] ,"e14a22_client": ["'ENTER2'", true] ,"e11a22_client": ["'CANCELAR'", true] ,"e17a22_client": ["CANCEL", true] ,"e16a21_client": ["VUSUARIOIDAUX.CLICK", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[{av:'gx.fn.getCtrlProperty("JSFEC","Caption")',ctrl:'JSFEC',prop:'Caption'}]];
   this.EvtParms["'ENTER2'"] = [[{av:'AV19Cont',fld:'vCONT'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV20Usuarios',fld:'vUSUARIOS'},{av:'AV11UsrSnh',fld:'vUSRSNH'},{av:'AV26NoTentativas',fld:'vNOTENTATIVAS'}],[{av:'AV21FlagExisteUsr',fld:'vFLAGEXISTEUSR'},{av:'AV22I',fld:'vI'},{av:'AV17EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV26NoTentativas',fld:'vNOTENTATIVAS'},{av:'AV11UsrSnh',fld:'vUSRSNH'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV14SnPermissao',fld:'vSNPERMISSAO'},{av:'gx.fn.getCtrlProperty("JSFEC","Caption")',ctrl:'JSFEC',prop:'Caption'}]];
   this.EvtParms["VUSUARIOIDAUX.CLICK"] = [[{av:'AV12UsuarioIdAux',fld:'vUSUARIOIDAUX'}],[{av:'AV5UsrCod',fld:'vUSRCOD'}]];
   this.EvtParms["'CANCELAR'"] = [[],[{av:'AV14SnPermissao',fld:'vSNPERMISSAO'},{av:'gx.fn.getCtrlProperty("JSFEC","Caption")',ctrl:'JSFEC',prop:'Caption'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV16TipoPermissaoId", "vTIPOPERMISSAOID", 0, "int");
   this.setVCMap("AV15UsuarioId", "vUSUARIOID", 0, "char");
   this.setVCMap("AV17EmpresaId", "vEMPRESAID", 0, "char");
   this.setVCMap("AV14SnPermissao", "vSNPERMISSAO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hboxtipopermissao());
