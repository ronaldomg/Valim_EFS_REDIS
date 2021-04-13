/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:2:16.69
*/
gx.evt.autoSkip = false;
gx.define('hbluefocus', false, function () {
   this.ServerClass =  "hbluefocus" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV106BlueFocusEnv=gx.fn.getControlValue("vBLUEFOCUSENV") ;
      this.AV118CloudLoginSDT=gx.fn.getControlValue("vCLOUDLOGINSDT") ;
      this.AV100hasConversao=gx.fn.getControlValue("vHASCONVERSAO") ;
      this.AV107WSResult=gx.fn.getControlValue("vWSRESULT") ;
      this.AV108ErroItem=gx.fn.getControlValue("vERROITEM") ;
      this.AV17SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV83SdtBuscaEmpresaLogin=gx.fn.getControlValue("vSDTBUSCAEMPRESALOGIN") ;
      this.A191EmpresaFantasia=gx.fn.getControlValue("EMPRESAFANTASIA") ;
      this.A216EmpresaUsuarioUsuarioId=gx.fn.getControlValue("EMPRESAUSUARIOUSUARIOID") ;
      this.A138EmpresaId=gx.fn.getControlValue("EMPRESAID") ;
      this.A140SistemaId=gx.fn.getControlValue("SISTEMAID") ;
      this.AV73NmOper=gx.fn.getControlValue("vNMOPER") ;
      this.A75UsuarioId=gx.fn.getControlValue("USUARIOID") ;
      this.A604UsuarioPrivilegio=gx.fn.getControlValue("USUARIOPRIVILEGIO") ;
      this.A219UsuarioNome=gx.fn.getControlValue("USUARIONOME") ;
      this.A1567UsuarioImpressoraId=gx.fn.getIntegerValue("USUARIOIMPRESSORAID",'.') ;
      this.A615UsuarioEmail=gx.fn.getControlValue("USUARIOEMAIL") ;
      this.A186EmpresaNome=gx.fn.getControlValue("EMPRESANOME") ;
      this.A200EmpresaLogomarca=gx.fn.getControlValue("EMPRESALOGOMARCA") ;
      this.A199EmpresaLinhaGrid=gx.fn.getIntegerValue("EMPRESALINHAGRID",'.') ;
      this.A2695EmpresaLinhaPrompt=gx.fn.getIntegerValue("EMPRESALINHAPROMPT",'.') ;
      this.AV135DirLog=gx.fn.getControlValue("vDIRLOG") ;
      this.A609UsuarioDataSenha=gx.fn.getDateValue("USUARIODATASENHA") ;
      this.A568TipoPermissaoId=gx.fn.getIntegerValue("TIPOPERMISSAOID",'.') ;
      this.A566TipoPermissaoUsuarioUsuarioId=gx.fn.getControlValue("TIPOPERMISSAOUSUARIOUSUARIOID") ;
      this.AV138SdtApuracaoEstoqueMinimo=gx.fn.getControlValue("vSDTAPURACAOESTOQUEMINIMO") ;
   };
   this.Validv_Usrcod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSRCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("TABEMPRESAS","Visible", 0 );
   };
   this.s162_client=function()
   {
      gx.fn.setCtrlProperty("TABEMPRESAS","Visible", 1 );
      gx.fn.setCtrlProperty("vUSRCOD","Enabled", 0 );
      gx.fn.setCtrlProperty("vUSRSNH","Visible", 0 );
      gx.fn.setCtrlProperty("BTNENTRAR","Visible", 0 );
   };
   this.e112o2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142o2_client=function()
   {
      this.executeServerEvent("'RETORNAEMPRESA'", true, arguments[0], false, false);
   };
   this.e122o2_client=function()
   {
      this.executeServerEvent("'CANCELAEMPRESA'", false, null, false, false);
   };
   this.e172o2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,6,9,12,15,19,23,28,31,33,36,38,52,55,58,62,65,67,68,78,81,84,85,86,87,88,89];
   this.GXLastCtrlId =89;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",59,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hbluefocus",[],true,1,true,true,0,false,false,false,"CollSdtBuscaEmpresasLogin.SdtBuscaEmpresasLoginItem",0,"px","Novo registro",false,false,false,null,null,false,"AV83SdtBuscaEmpresaLogin",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","","","","");
   Grid1Container.startTable("Table10",62,"233px");
   Grid1Container.addHtmlCode("<tbody>");
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","20px","","","");
   Grid1Container.addBitmap("&Bmpseleciona","vBMPSELECIONA",65,0,"",0,"","e142o2_client","","","Image","");
   Grid1Container.endCell();
   Grid1Container.startCell("","","","#FFFFFF","","","","","","");
   Grid1Container.addSingleLineEdit("GXV2",67,"CTLEMPRESANOME","","","EmpresaNome","svchar",40,"chr",40,40,"left",null,[],"GXV2","GXV2",true,0,false,false,"Attribute",1,"");
   Grid1Container.endCell();
   Grid1Container.endRow();
   Grid1Container.addHtmlCode("</tbody>");
   Grid1Container.endTable();
   Grid1Container.endCell();
   Grid1Container.endRow();
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[3]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"IMAGE1",grid:0};
   GXValidFnc[9]={fld:"TABLOGIN",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TABLE6",grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLE8",grid:0};
   GXValidFnc[28]={fld:"TABLE7",grid:0};
   GXValidFnc[31]={fld:"TXTUSUARIO", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usrcod,isvalid:null,rgrid:[],fld:"vUSRCOD",gxz:"ZV6UsrCod",gxold:"OV6UsrCod",gxvar:"AV6UsrCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6UsrCod=Value},v2z:function(Value){gx.O.ZV6UsrCod=Value},v2c:function(){gx.fn.setControlValue("vUSRCOD",gx.O.AV6UsrCod,0)},c2v:function(){gx.O.AV6UsrCod=this.val()},val:function(){return gx.fn.getControlValue("vUSRCOD")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TXTSENHA", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:32,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSRSNH",gxz:"ZV7UsrSnh",gxold:"OV7UsrSnh",gxvar:"AV7UsrSnh",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7UsrSnh=Value},v2z:function(Value){gx.O.ZV7UsrSnh=Value},v2c:function(){gx.fn.setControlValue("vUSRSNH",gx.O.AV7UsrSnh,0)},c2v:function(){gx.O.AV7UsrSnh=this.val()},val:function(){return gx.fn.getControlValue("vUSRSNH")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABEMPRESAS",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[58]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[62]={fld:"TABLE10",grid:59};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSELECIONA",gxz:"ZV82BmpSeleciona",gxold:"OV82BmpSeleciona",gxvar:"AV82BmpSeleciona",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV82BmpSeleciona=Value},v2z:function(Value){gx.O.ZV82BmpSeleciona=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSELECIONA",row || gx.fn.currentGridRowImpl(59),gx.O.AV82BmpSeleciona,gx.O.AV144Bmpseleciona_GXI)},c2v:function(){gx.O.AV144Bmpseleciona_GXI=this.val_GXI();gx.O.AV82BmpSeleciona=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSELECIONA",row || gx.fn.currentGridRowImpl(59))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSELECIONA_GXI",row || gx.fn.currentGridRowImpl(59))}, gxvar_GXI:'AV144Bmpseleciona_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:59,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESANOME",gxz:"ZV142GXV2",gxold:"OV142GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV2=Value},v2z:function(Value){gx.O.ZV142GXV2=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMPRESANOME",row || gx.fn.currentGridRowImpl(59),gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMPRESANOME",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[68]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[78]={fld:"IMAGE2",grid:0};
   GXValidFnc[81]={fld:"TABVISIBLE",grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOGINHASH",gxz:"ZV119LoginHash",gxold:"OV119LoginHash",gxvar:"AV119LoginHash",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119LoginHash=Value},v2z:function(Value){gx.O.ZV119LoginHash=Value},v2c:function(){gx.fn.setControlValue("vLOGINHASH",gx.O.AV119LoginHash,0)},c2v:function(){gx.O.AV119LoginHash=this.val()},val:function(){return gx.fn.getControlValue("vLOGINHASH")},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGOUT",gxz:"ZV69MsgOut",gxold:"OV69MsgOut",gxvar:"AV69MsgOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69MsgOut=Value},v2z:function(Value){gx.O.ZV69MsgOut=Value},v2c:function(){gx.fn.setControlValue("vMSGOUT",gx.O.AV69MsgOut,0)},c2v:function(){gx.O.AV69MsgOut=this.val()},val:function(){return gx.fn.getControlValue("vMSGOUT")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTENTATIVAS",gxz:"ZV72NoTentativas",gxold:"OV72NoTentativas",gxvar:"AV72NoTentativas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72NoTentativas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72NoTentativas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOTENTATIVAS",gx.O.AV72NoTentativas,0)},c2v:function(){gx.O.AV72NoTentativas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOTENTATIVAS",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEMPRESA",gxz:"ZV25SnEmpresa",gxold:"OV25SnEmpresa",gxvar:"AV25SnEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25SnEmpresa=Value},v2z:function(Value){gx.O.ZV25SnEmpresa=Value},v2c:function(){gx.fn.setControlValue("vSNEMPRESA",gx.O.AV25SnEmpresa,0)},c2v:function(){gx.O.AV25SnEmpresa=this.val()},val:function(){return gx.fn.getControlValue("vSNEMPRESA")},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNATUALIZA",gxz:"ZV120SNAtualiza",gxold:"OV120SNAtualiza",gxvar:"AV120SNAtualiza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120SNAtualiza=Value},v2z:function(Value){gx.O.ZV120SNAtualiza=Value},v2c:function(){gx.fn.setControlValue("vSNATUALIZA",gx.O.AV120SNAtualiza,0)},c2v:function(){gx.O.AV120SNAtualiza=this.val()},val:function(){return gx.fn.getControlValue("vSNATUALIZA")},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaid,isvalid:null,rgrid:[],fld:"vEMPRESAID",gxz:"ZV20EmpresaId",gxold:"OV20EmpresaId",gxvar:"AV20EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20EmpresaId=Value},v2z:function(Value){gx.O.ZV20EmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAID",gx.O.AV20EmpresaId,0)},c2v:function(){gx.O.AV20EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAID")},nac:gx.falseFn};
   this.AV6UsrCod = "" ;
   this.ZV6UsrCod = "" ;
   this.OV6UsrCod = "" ;
   this.AV7UsrSnh = "" ;
   this.ZV7UsrSnh = "" ;
   this.OV7UsrSnh = "" ;
   this.ZV82BmpSeleciona = "" ;
   this.OV82BmpSeleciona = "" ;
   this.ZV142GXV2 = "" ;
   this.OV142GXV2 = "" ;
   this.AV119LoginHash = "" ;
   this.ZV119LoginHash = "" ;
   this.OV119LoginHash = "" ;
   this.AV69MsgOut = "" ;
   this.ZV69MsgOut = "" ;
   this.OV69MsgOut = "" ;
   this.AV72NoTentativas = 0 ;
   this.ZV72NoTentativas = 0 ;
   this.OV72NoTentativas = 0 ;
   this.AV25SnEmpresa = "" ;
   this.ZV25SnEmpresa = "" ;
   this.OV25SnEmpresa = "" ;
   this.AV120SNAtualiza = "" ;
   this.ZV120SNAtualiza = "" ;
   this.OV120SNAtualiza = "" ;
   this.AV20EmpresaId = "" ;
   this.ZV20EmpresaId = "" ;
   this.OV20EmpresaId = "" ;
   this.AV6UsrCod = "" ;
   this.AV7UsrSnh = "" ;
   this.AV119LoginHash = "" ;
   this.AV69MsgOut = "" ;
   this.AV72NoTentativas = 0 ;
   this.AV25SnEmpresa = "" ;
   this.AV120SNAtualiza = "" ;
   this.AV20EmpresaId = "" ;
   this.AV82BmpSeleciona = "" ;
   this.GXV2 = "" ;
   this.A566TipoPermissaoUsuarioUsuarioId = "" ;
   this.A568TipoPermissaoId = 0 ;
   this.A140SistemaId = "" ;
   this.A138EmpresaId = "" ;
   this.A75UsuarioId = "" ;
   this.A609UsuarioDataSenha = gx.date.nullDate() ;
   this.A186EmpresaNome = "" ;
   this.A199EmpresaLinhaGrid = 0 ;
   this.A2695EmpresaLinhaPrompt = 0 ;
   this.A191EmpresaFantasia = "" ;
   this.A200EmpresaLogomarca = "" ;
   this.A604UsuarioPrivilegio = "" ;
   this.A219UsuarioNome = "" ;
   this.A1567UsuarioImpressoraId = 0 ;
   this.A615UsuarioEmail = "" ;
   this.A216EmpresaUsuarioUsuarioId = "" ;
   this.AV106BlueFocusEnv = {} ;
   this.AV118CloudLoginSDT = {} ;
   this.AV100hasConversao = false ;
   this.AV107WSResult = {} ;
   this.AV108ErroItem = {} ;
   this.AV17SnErro = "" ;
   this.AV83SdtBuscaEmpresaLogin = [ ] ;
   this.AV73NmOper = "" ;
   this.AV135DirLog = "" ;
   this.AV138SdtApuracaoEstoqueMinimo = [ ] ;
   this.Events = {"e112o2_client": ["ENTER", true] ,"e142o2_client": ["'RETORNAEMPRESA'", true] ,"e122o2_client": ["'CANCELAEMPRESA'", true] ,"e172o2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV82BmpSeleciona',fld:'vBMPSELECIONA'},{av:'AV106BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV120SNAtualiza',fld:'vSNATUALIZA'},{av:'AV118CloudLoginSDT',fld:'vCLOUDLOGINSDT'},{av:'AV20EmpresaId',fld:'vEMPRESAID'},{av:'AV100hasConversao',fld:'vHASCONVERSAO'},{av:'AV25SnEmpresa',fld:'vSNEMPRESA'},{av:'AV6UsrCod',fld:'vUSRCOD'},{av:'AV7UsrSnh',fld:'vUSRSNH'},{av:'AV72NoTentativas',fld:'vNOTENTATIVAS'},{av:'AV107WSResult',fld:'vWSRESULT'},{av:'AV108ErroItem',fld:'vERROITEM'},{av:'AV17SnErro',fld:'vSNERRO'},{av:'AV83SdtBuscaEmpresaLogin',fld:'vSDTBUSCAEMPRESALOGIN',grid:59},{av:'A191EmpresaFantasia',fld:'EMPRESAFANTASIA'},{av:'A216EmpresaUsuarioUsuarioId',fld:'EMPRESAUSUARIOUSUARIOID'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV73NmOper',fld:'vNMOPER'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A604UsuarioPrivilegio',fld:'USUARIOPRIVILEGIO'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1567UsuarioImpressoraId',fld:'USUARIOIMPRESSORAID'},{av:'A615UsuarioEmail',fld:'USUARIOEMAIL'},{av:'A186EmpresaNome',fld:'EMPRESANOME'},{av:'A200EmpresaLogomarca',fld:'EMPRESALOGOMARCA'},{av:'A199EmpresaLinhaGrid',fld:'EMPRESALINHAGRID'},{av:'A2695EmpresaLinhaPrompt',fld:'EMPRESALINHAPROMPT'},{av:'AV135DirLog',fld:'vDIRLOG'},{av:'A609UsuarioDataSenha',fld:'USUARIODATASENHA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'AV138SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO'}],[{av:'gx.fn.getCtrlProperty("vUSRCOD","Enabled")',ctrl:'vUSRCOD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSRSNH","Visible")',ctrl:'vUSRSNH',prop:'Visible'},{ctrl:'BTNENTRAR',prop:'Visible'},{av:'AV6UsrCod',fld:'vUSRCOD'},{av:'AV7UsrSnh',fld:'vUSRSNH'},{av:'AV20EmpresaId',fld:'vEMPRESAID'},{av:'gx.fn.getCtrlProperty("TABLE6","Visible")',ctrl:'TABLE6',prop:'Visible'},{av:'AV134UA',fld:'vUA'},{av:'gx.fn.getCtrlProperty("JAVASCRIPT","Caption")',ctrl:'JAVASCRIPT',prop:'Caption'},{av:'AV18MsgErro',fld:'vMSGERRO'},{av:'AV72NoTentativas',fld:'vNOTENTATIVAS'},{av:'AV107WSResult',fld:'vWSRESULT'},{av:'AV108ErroItem',fld:'vERROITEM'},{av:'AV17SnErro',fld:'vSNERRO'},{av:'AV96DiretorioAux',fld:'vDIRETORIOAUX'},{av:'AV25SnEmpresa',fld:'vSNEMPRESA'},{av:'AV145GXV3',fld:'vGXV3'},{av:'AV84SdtBuscaEmpresaLoginItem',fld:'vSDTBUSCAEMPRESALOGINITEM'},{av:'AV100hasConversao',fld:'vHASCONVERSAO'},{av:'gx.fn.getCtrlProperty("TABEMPRESAS","Visible")',ctrl:'TABEMPRESAS',prop:'Visible'},{av:'AV83SdtBuscaEmpresaLogin',fld:'vSDTBUSCAEMPRESALOGIN',grid:59},{av:'gx.fn.getCtrlProperty("TABLOGIN","Visible")',ctrl:'TABLOGIN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE4","Visible")',ctrl:'TABLE4',prop:'Visible'},{av:'AV147GXLvl239',fld:'vGXLVL239'},{av:'AV26path',fld:'vPATH'},{av:'AV109ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV13Parlingrd',fld:'vPARLINGRD'},{av:'AV66ParLinPro',fld:'vPARLINPRO'},{av:'AV151GXLvl325',fld:'vGXLVL325'},{av:'AV52DataSenha',fld:'vDATASENHA'},{av:'AV129TpNotContaVenc',fld:'vTPNOTCONTAVENC'},{av:'AV124SNAniversariante',fld:'vSNANIVERSARIANTE'},{av:'AV111SnExecOut',fld:'vSNEXECOUT'},{av:'AV94SNExisteVisita',fld:'vSNEXISTEVISITA'},{av:'AV95SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE'},{av:'AV136hasPerm',fld:'vHASPERM'},{av:'AV137LoteProdutoEstoqueMinimo',fld:'vLOTEPRODUTOESTOQUEMINIMO'},{av:'AV138SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV100hasConversao',fld:'vHASCONVERSAO'},{av:'AV25SnEmpresa',fld:'vSNEMPRESA'},{av:'AV6UsrCod',fld:'vUSRCOD'},{av:'AV7UsrSnh',fld:'vUSRSNH'},{av:'AV72NoTentativas',fld:'vNOTENTATIVAS'},{av:'AV106BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV107WSResult',fld:'vWSRESULT'},{av:'AV108ErroItem',fld:'vERROITEM'},{av:'AV17SnErro',fld:'vSNERRO'},{av:'AV83SdtBuscaEmpresaLogin',fld:'vSDTBUSCAEMPRESALOGIN',grid:59},{av:'A191EmpresaFantasia',fld:'EMPRESAFANTASIA'},{av:'A216EmpresaUsuarioUsuarioId',fld:'EMPRESAUSUARIOUSUARIOID'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV20EmpresaId',fld:'vEMPRESAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV73NmOper',fld:'vNMOPER'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A604UsuarioPrivilegio',fld:'USUARIOPRIVILEGIO'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1567UsuarioImpressoraId',fld:'USUARIOIMPRESSORAID'},{av:'A615UsuarioEmail',fld:'USUARIOEMAIL'},{av:'A186EmpresaNome',fld:'EMPRESANOME'},{av:'A200EmpresaLogomarca',fld:'EMPRESALOGOMARCA'},{av:'A199EmpresaLinhaGrid',fld:'EMPRESALINHAGRID'},{av:'A2695EmpresaLinhaPrompt',fld:'EMPRESALINHAPROMPT'},{av:'AV135DirLog',fld:'vDIRLOG'},{av:'A609UsuarioDataSenha',fld:'USUARIODATASENHA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'AV138SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV82BmpSeleciona',fld:'vBMPSELECIONA'},{av:'AV120SNAtualiza',fld:'vSNATUALIZA'},{av:'AV118CloudLoginSDT',fld:'vCLOUDLOGINSDT'}],[{av:'AV20EmpresaId',fld:'vEMPRESAID'},{av:'AV18MsgErro',fld:'vMSGERRO'},{av:'AV72NoTentativas',fld:'vNOTENTATIVAS'},{av:'AV7UsrSnh',fld:'vUSRSNH'},{av:'AV6UsrCod',fld:'vUSRCOD'},{av:'AV107WSResult',fld:'vWSRESULT'},{av:'AV108ErroItem',fld:'vERROITEM'},{av:'AV17SnErro',fld:'vSNERRO'},{av:'AV96DiretorioAux',fld:'vDIRETORIOAUX'},{av:'AV25SnEmpresa',fld:'vSNEMPRESA'},{av:'AV145GXV3',fld:'vGXV3'},{av:'AV84SdtBuscaEmpresaLoginItem',fld:'vSDTBUSCAEMPRESALOGINITEM'},{av:'AV100hasConversao',fld:'vHASCONVERSAO'},{av:'gx.fn.getCtrlProperty("TABEMPRESAS","Visible")',ctrl:'TABEMPRESAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vUSRCOD","Enabled")',ctrl:'vUSRCOD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSRSNH","Visible")',ctrl:'vUSRSNH',prop:'Visible'},{ctrl:'BTNENTRAR',prop:'Visible'},{av:'AV83SdtBuscaEmpresaLogin',fld:'vSDTBUSCAEMPRESALOGIN',grid:59},{av:'gx.fn.getCtrlProperty("TABLOGIN","Visible")',ctrl:'TABLOGIN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE4","Visible")',ctrl:'TABLE4',prop:'Visible'},{av:'AV147GXLvl239',fld:'vGXLVL239'},{av:'AV26path',fld:'vPATH'},{av:'AV109ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV13Parlingrd',fld:'vPARLINGRD'},{av:'AV66ParLinPro',fld:'vPARLINPRO'},{av:'AV151GXLvl325',fld:'vGXLVL325'},{av:'AV52DataSenha',fld:'vDATASENHA'},{av:'AV129TpNotContaVenc',fld:'vTPNOTCONTAVENC'},{av:'AV124SNAniversariante',fld:'vSNANIVERSARIANTE'},{av:'AV111SnExecOut',fld:'vSNEXECOUT'},{av:'AV94SNExisteVisita',fld:'vSNEXISTEVISITA'},{av:'AV95SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE'},{av:'AV136hasPerm',fld:'vHASPERM'},{av:'AV137LoteProdutoEstoqueMinimo',fld:'vLOTEPRODUTOESTOQUEMINIMO'},{av:'AV138SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO'}]];
   this.EvtParms["'RETORNAEMPRESA'"] = [[{av:'AV83SdtBuscaEmpresaLogin',fld:'vSDTBUSCAEMPRESALOGIN',grid:59},{av:'AV100hasConversao',fld:'vHASCONVERSAO'},{av:'AV17SnErro',fld:'vSNERRO'},{av:'AV20EmpresaId',fld:'vEMPRESAID'},{av:'AV106BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV107WSResult',fld:'vWSRESULT'},{av:'AV108ErroItem',fld:'vERROITEM'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV73NmOper',fld:'vNMOPER'},{av:'AV6UsrCod',fld:'vUSRCOD'},{av:'AV7UsrSnh',fld:'vUSRSNH'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A604UsuarioPrivilegio',fld:'USUARIOPRIVILEGIO'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1567UsuarioImpressoraId',fld:'USUARIOIMPRESSORAID'},{av:'A615UsuarioEmail',fld:'USUARIOEMAIL'},{av:'A186EmpresaNome',fld:'EMPRESANOME'},{av:'A191EmpresaFantasia',fld:'EMPRESAFANTASIA'},{av:'A200EmpresaLogomarca',fld:'EMPRESALOGOMARCA'},{av:'A199EmpresaLinhaGrid',fld:'EMPRESALINHAGRID'},{av:'A2695EmpresaLinhaPrompt',fld:'EMPRESALINHAPROMPT'},{av:'AV135DirLog',fld:'vDIRLOG'},{av:'A609UsuarioDataSenha',fld:'USUARIODATASENHA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'AV138SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO'}],[{av:'AV20EmpresaId',fld:'vEMPRESAID'},{av:'AV100hasConversao',fld:'vHASCONVERSAO'},{av:'AV107WSResult',fld:'vWSRESULT'},{av:'AV108ErroItem',fld:'vERROITEM'},{av:'AV17SnErro',fld:'vSNERRO'},{av:'AV147GXLvl239',fld:'vGXLVL239'},{av:'AV26path',fld:'vPATH'},{av:'AV109ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV13Parlingrd',fld:'vPARLINGRD'},{av:'AV66ParLinPro',fld:'vPARLINPRO'},{av:'AV6UsrCod',fld:'vUSRCOD'},{av:'AV151GXLvl325',fld:'vGXLVL325'},{av:'AV52DataSenha',fld:'vDATASENHA'},{av:'AV129TpNotContaVenc',fld:'vTPNOTCONTAVENC'},{av:'AV124SNAniversariante',fld:'vSNANIVERSARIANTE'},{av:'AV111SnExecOut',fld:'vSNEXECOUT'},{av:'AV94SNExisteVisita',fld:'vSNEXISTEVISITA'},{av:'AV95SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE'},{av:'AV136hasPerm',fld:'vHASPERM'},{av:'AV137LoteProdutoEstoqueMinimo',fld:'vLOTEPRODUTOESTOQUEMINIMO'},{av:'AV138SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO'}]];
   this.EvtParms["'CANCELAEMPRESA'"] = [[{av:'AV106BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV108ErroItem',fld:'vERROITEM'},{av:'AV118CloudLoginSDT',fld:'vCLOUDLOGINSDT'},{av:'AV107WSResult',fld:'vWSRESULT'},{av:'AV7UsrSnh',fld:'vUSRSNH'}],[{av:'AV108ErroItem',fld:'vERROITEM'},{av:'AV107WSResult',fld:'vWSRESULT'},{av:'AV7UsrSnh',fld:'vUSRSNH'},{av:'AV25SnEmpresa',fld:'vSNEMPRESA'},{av:'gx.fn.getCtrlProperty("TABEMPRESAS","Visible")',ctrl:'TABEMPRESAS',prop:'Visible'}]];
   this.EnterCtrl = ["BTNENTRAR"];
   this.setVCMap("AV106BlueFocusEnv", "vBLUEFOCUSENV", 0, "BlueFocusEnv");
   this.setVCMap("AV118CloudLoginSDT", "vCLOUDLOGINSDT", 0, "CloudLoginSDT");
   this.setVCMap("AV100hasConversao", "vHASCONVERSAO", 0, "boolean");
   this.setVCMap("AV107WSResult", "vWSRESULT", 0, "WSResult");
   this.setVCMap("AV108ErroItem", "vERROITEM", 0, "WSResult.ErroItem");
   this.setVCMap("AV17SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV83SdtBuscaEmpresaLogin", "vSDTBUSCAEMPRESALOGIN", 0, "CollSdtBuscaEmpresasLogin.SdtBuscaEmpresasLoginItem");
   this.setVCMap("A191EmpresaFantasia", "EMPRESAFANTASIA", 0, "svchar");
   this.setVCMap("A216EmpresaUsuarioUsuarioId", "EMPRESAUSUARIOUSUARIOID", 0, "char");
   this.setVCMap("A138EmpresaId", "EMPRESAID", 0, "char");
   this.setVCMap("A140SistemaId", "SISTEMAID", 0, "char");
   this.setVCMap("AV73NmOper", "vNMOPER", 0, "svchar");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("A604UsuarioPrivilegio", "USUARIOPRIVILEGIO", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   this.setVCMap("A1567UsuarioImpressoraId", "USUARIOIMPRESSORAID", 0, "int");
   this.setVCMap("A615UsuarioEmail", "USUARIOEMAIL", 0, "svchar");
   this.setVCMap("A186EmpresaNome", "EMPRESANOME", 0, "svchar");
   this.setVCMap("A200EmpresaLogomarca", "EMPRESALOGOMARCA", 0, "svchar");
   this.setVCMap("A199EmpresaLinhaGrid", "EMPRESALINHAGRID", 0, "int");
   this.setVCMap("A2695EmpresaLinhaPrompt", "EMPRESALINHAPROMPT", 0, "int");
   this.setVCMap("AV135DirLog", "vDIRLOG", 0, "svchar");
   this.setVCMap("A609UsuarioDataSenha", "USUARIODATASENHA", 0, "date");
   this.setVCMap("A568TipoPermissaoId", "TIPOPERMISSAOID", 0, "int");
   this.setVCMap("A566TipoPermissaoUsuarioUsuarioId", "TIPOPERMISSAOUSUARIOUSUARIOID", 0, "char");
   this.setVCMap("AV138SdtApuracaoEstoqueMinimo", "vSDTAPURACAOESTOQUEMINIMO", 0, "CollSdtApuracaoEstoqueMinimo.SdtApuracaoEstoqueMinimoItem");
   this.setVCMap("AV106BlueFocusEnv", "vBLUEFOCUSENV", 0, "BlueFocusEnv");
   this.setVCMap("AV118CloudLoginSDT", "vCLOUDLOGINSDT", 0, "CloudLoginSDT");
   this.setVCMap("AV100hasConversao", "vHASCONVERSAO", 0, "boolean");
   this.setVCMap("AV107WSResult", "vWSRESULT", 0, "WSResult");
   this.setVCMap("AV108ErroItem", "vERROITEM", 0, "WSResult.ErroItem");
   this.setVCMap("AV17SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV83SdtBuscaEmpresaLogin", "vSDTBUSCAEMPRESALOGIN", 0, "CollSdtBuscaEmpresasLogin.SdtBuscaEmpresasLoginItem");
   this.setVCMap("A191EmpresaFantasia", "EMPRESAFANTASIA", 0, "svchar");
   this.setVCMap("A216EmpresaUsuarioUsuarioId", "EMPRESAUSUARIOUSUARIOID", 0, "char");
   this.setVCMap("A138EmpresaId", "EMPRESAID", 0, "char");
   this.setVCMap("A140SistemaId", "SISTEMAID", 0, "char");
   this.setVCMap("AV73NmOper", "vNMOPER", 0, "svchar");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("A604UsuarioPrivilegio", "USUARIOPRIVILEGIO", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   this.setVCMap("A1567UsuarioImpressoraId", "USUARIOIMPRESSORAID", 0, "int");
   this.setVCMap("A615UsuarioEmail", "USUARIOEMAIL", 0, "svchar");
   this.setVCMap("A186EmpresaNome", "EMPRESANOME", 0, "svchar");
   this.setVCMap("A200EmpresaLogomarca", "EMPRESALOGOMARCA", 0, "svchar");
   this.setVCMap("A199EmpresaLinhaGrid", "EMPRESALINHAGRID", 0, "int");
   this.setVCMap("A2695EmpresaLinhaPrompt", "EMPRESALINHAPROMPT", 0, "int");
   this.setVCMap("AV135DirLog", "vDIRLOG", 0, "svchar");
   this.setVCMap("A609UsuarioDataSenha", "USUARIODATASENHA", 0, "date");
   this.setVCMap("A568TipoPermissaoId", "TIPOPERMISSAOID", 0, "int");
   this.setVCMap("A566TipoPermissaoUsuarioUsuarioId", "TIPOPERMISSAOUSUARIOUSUARIOID", 0, "char");
   this.setVCMap("AV138SdtApuracaoEstoqueMinimo", "vSDTAPURACAOESTOQUEMINIMO", 0, "CollSdtApuracaoEstoqueMinimo.SdtApuracaoEstoqueMinimoItem");
   Grid1Container.addRefreshingVar({rfrVar:"AV82BmpSeleciona", rfrProp:"Value", gxAttId:"Bmpseleciona"});
   Grid1Container.addRefreshingVar({rfrVar:"AV106BlueFocusEnv"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[88]);
   Grid1Container.addRefreshingVar({rfrVar:"AV118CloudLoginSDT"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[89]);
   Grid1Container.addRefreshingVar({rfrVar:"AV100hasConversao"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[87]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[33]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[38]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[86]);
   Grid1Container.addRefreshingVar({rfrVar:"AV107WSResult"});
   Grid1Container.addRefreshingVar({rfrVar:"AV108ErroItem"});
   Grid1Container.addRefreshingVar({rfrVar:"AV17SnErro"});
   Grid1Container.addRefreshingVar({rfrVar:"AV83SdtBuscaEmpresaLogin"});
   Grid1Container.addRefreshingVar({rfrVar:"A191EmpresaFantasia"});
   Grid1Container.addRefreshingVar({rfrVar:"A216EmpresaUsuarioUsuarioId"});
   Grid1Container.addRefreshingVar({rfrVar:"A138EmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A140SistemaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV73NmOper"});
   Grid1Container.addRefreshingVar({rfrVar:"A75UsuarioId"});
   Grid1Container.addRefreshingVar({rfrVar:"A604UsuarioPrivilegio"});
   Grid1Container.addRefreshingVar({rfrVar:"A219UsuarioNome"});
   Grid1Container.addRefreshingVar({rfrVar:"A1567UsuarioImpressoraId"});
   Grid1Container.addRefreshingVar({rfrVar:"A615UsuarioEmail"});
   Grid1Container.addRefreshingVar({rfrVar:"A186EmpresaNome"});
   Grid1Container.addRefreshingVar({rfrVar:"A200EmpresaLogomarca"});
   Grid1Container.addRefreshingVar({rfrVar:"A199EmpresaLinhaGrid"});
   Grid1Container.addRefreshingVar({rfrVar:"A2695EmpresaLinhaPrompt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV135DirLog"});
   Grid1Container.addRefreshingVar({rfrVar:"A609UsuarioDataSenha"});
   Grid1Container.addRefreshingVar({rfrVar:"A568TipoPermissaoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A566TipoPermissaoUsuarioUsuarioId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV138SdtApuracaoEstoqueMinimo"});
   this.addGridBCProperty("Sdtbuscaempresalogin", ["EmpresaNome"], this.GXValidFnc[67], "AV83SdtBuscaEmpresaLogin");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbluefocus());
