/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:0:1.76
*/
gx.evt.autoSkip = false;
gx.define('hduplicarcaixabancousu', false, function () {
   this.ServerClass =  "hduplicarcaixabancousu" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV13PermissaoUsuCxaContaEmpresaId=gx.fn.getControlValue("vPERMISSAOUSUCXACONTAEMPRESAID") ;
   };
   this.e12a42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14a41_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,22,25,27,28,36,37,38];
   this.GXLastCtrlId =38;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERMISSAOUSUCXACONTAUSUARIOID",gxz:"ZV14PermissaoUsuCxaContaUsuarioId",gxold:"OV14PermissaoUsuCxaContaUsuarioId",gxvar:"AV14PermissaoUsuCxaContaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.ZV14PermissaoUsuCxaContaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vPERMISSAOUSUCXACONTAUSUARIOID",gx.O.AV14PermissaoUsuCxaContaUsuarioId,0)},c2v:function(){gx.O.AV14PermissaoUsuCxaContaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSAOUSUCXACONTAUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={fld:"TABLE7",grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOUSUCXABCOID",gxz:"ZV16CaixaBancoUsuCxaBcoId",gxold:"OV16CaixaBancoUsuCxaBcoId",gxvar:"AV16CaixaBancoUsuCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CaixaBancoUsuCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16CaixaBancoUsuCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOUSUCXABCOID",gx.O.AV16CaixaBancoUsuCxaBcoId,0)},c2v:function(){gx.O.AV16CaixaBancoUsuCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOUSUCXABCOID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOUSUCXABCODESCRICAO",gxz:"ZV22CaixaBancoUsuCxaBcoDescricao",gxold:"OV22CaixaBancoUsuCxaBcoDescricao",gxvar:"AV22CaixaBancoUsuCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CaixaBancoUsuCxaBcoDescricao=Value},v2z:function(Value){gx.O.ZV22CaixaBancoUsuCxaBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOUSUCXABCODESCRICAO",gx.O.AV22CaixaBancoUsuCxaBcoDescricao,0)},c2v:function(){gx.O.AV22CaixaBancoUsuCxaBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOUSUCXABCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVOCAIXABANCOID",gxz:"ZV11NovoCaixaBancoId",gxold:"OV11NovoCaixaBancoId",gxvar:"AV11NovoCaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11NovoCaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11NovoCaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOVOCAIXABANCOID",gx.O.AV11NovoCaixaBancoId,0)},c2v:function(){gx.O.AV11NovoCaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOVOCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV12CaixaBancoDescricao",gxold:"OV12CaixaBancoDescricao",gxvar:"AV12CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV12CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV12CaixaBancoDescricao,0)},c2v:function(){gx.O.AV12CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"JSJSON", format:2,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOUSUCXABCOEMPID",gxz:"ZV15CaixaBancoUsuCxaBcoEmpId",gxold:"OV15CaixaBancoUsuCxaBcoEmpId",gxvar:"AV15CaixaBancoUsuCxaBcoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CaixaBancoUsuCxaBcoEmpId=Value},v2z:function(Value){gx.O.ZV15CaixaBancoUsuCxaBcoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOUSUCXABCOEMPID",gx.O.AV15CaixaBancoUsuCxaBcoEmpId,0)},c2v:function(){gx.O.AV15CaixaBancoUsuCxaBcoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOUSUCXABCOEMPID")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"PROMPT_NOVOCAIXABANCOID",grid:0};
   this.AV14PermissaoUsuCxaContaUsuarioId = "" ;
   this.ZV14PermissaoUsuCxaContaUsuarioId = "" ;
   this.OV14PermissaoUsuCxaContaUsuarioId = "" ;
   this.AV16CaixaBancoUsuCxaBcoId = 0 ;
   this.ZV16CaixaBancoUsuCxaBcoId = 0 ;
   this.OV16CaixaBancoUsuCxaBcoId = 0 ;
   this.AV22CaixaBancoUsuCxaBcoDescricao = "" ;
   this.ZV22CaixaBancoUsuCxaBcoDescricao = "" ;
   this.OV22CaixaBancoUsuCxaBcoDescricao = "" ;
   this.AV11NovoCaixaBancoId = 0 ;
   this.ZV11NovoCaixaBancoId = 0 ;
   this.OV11NovoCaixaBancoId = 0 ;
   this.AV12CaixaBancoDescricao = "" ;
   this.ZV12CaixaBancoDescricao = "" ;
   this.OV12CaixaBancoDescricao = "" ;
   this.AV15CaixaBancoUsuCxaBcoEmpId = "" ;
   this.ZV15CaixaBancoUsuCxaBcoEmpId = "" ;
   this.OV15CaixaBancoUsuCxaBcoEmpId = "" ;
   this.AV14PermissaoUsuCxaContaUsuarioId = "" ;
   this.AV16CaixaBancoUsuCxaBcoId = 0 ;
   this.AV22CaixaBancoUsuCxaBcoDescricao = "" ;
   this.AV11NovoCaixaBancoId = 0 ;
   this.AV12CaixaBancoDescricao = "" ;
   this.AV15CaixaBancoUsuCxaBcoEmpId = "" ;
   this.AV13PermissaoUsuCxaContaEmpresaId = "" ;
   this.Events = {"e12a42_client": ["ENTER", true] ,"e14a41_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV15CaixaBancoUsuCxaBcoEmpId',fld:'vCAIXABANCOUSUCXABCOEMPID'},{av:'AV14PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV11NovoCaixaBancoId',fld:'vNOVOCAIXABANCOID'},{av:'AV16CaixaBancoUsuCxaBcoId',fld:'vCAIXABANCOUSUCXABCOID'},{av:'AV22CaixaBancoUsuCxaBcoDescricao',fld:'vCAIXABANCOUSUCXABCODESCRICAO'}],[{av:'AV21SnExiste',fld:'vSNEXISTE'},{av:'AV13PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV23SnExiste2',fld:'vSNEXISTE2'}]];
   this.setPrompt("PROMPT_NOVOCAIXABANCOID", [27]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13PermissaoUsuCxaContaEmpresaId", "vPERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicarcaixabancousu());
