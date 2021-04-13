/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:41:30.90
*/
gx.evt.autoSkip = false;
gx.define('hcopiarpermissaocxabco', false, function () {
   this.ServerClass =  "hcopiarpermissaocxabco" ;
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
      this.AV24CaixaBancoEmpresaId=gx.fn.getControlValue("vCAIXABANCOEMPRESAID") ;
      this.AV25CaixaBancoId=gx.fn.getIntegerValue("vCAIXABANCOID",'.') ;
   };
   this.Validv_Basecaixabancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBASECAIXABANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraocaixabanco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOCAIXABANCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12hu2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13hu2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15hu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,19,20,21,22];
   this.GXLastCtrlId =22;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Basecaixabancoid,isvalid:null,rgrid:[],fld:"vBASECAIXABANCOID",gxz:"ZV11BaseCaixaBancoId",gxold:"OV11BaseCaixaBancoId",gxvar:"AV11BaseCaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11BaseCaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11BaseCaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBASECAIXABANCOID",gx.O.AV11BaseCaixaBancoId,0)},c2v:function(){gx.O.AV11BaseCaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBASECAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV12CaixaBancoDescricao",gxold:"OV12CaixaBancoDescricao",gxvar:"AV12CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV12CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV12CaixaBancoDescricao,0)},c2v:function(){gx.O.AV12CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraocaixabanco,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCAIXABANCO",gxz:"ZV15EmpresaPadraoCaixaBanco",gxold:"OV15EmpresaPadraoCaixaBanco",gxvar:"AV15EmpresaPadraoCaixaBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15EmpresaPadraoCaixaBanco=Value},v2z:function(Value){gx.O.ZV15EmpresaPadraoCaixaBanco=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCAIXABANCO",gx.O.AV15EmpresaPadraoCaixaBanco,0)},c2v:function(){gx.O.AV15EmpresaPadraoCaixaBanco=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCAIXABANCO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"JS", format:1,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDCARAC",gxz:"ZV27QtdCarac",gxold:"OV27QtdCarac",gxvar:"AV27QtdCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27QtdCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27QtdCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDCARAC",gx.O.AV27QtdCarac,0)},c2v:function(){gx.O.AV27QtdCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDCARAC",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"PROMPT_BASECAIXABANCOID",grid:0};
   this.AV11BaseCaixaBancoId = 0 ;
   this.ZV11BaseCaixaBancoId = 0 ;
   this.OV11BaseCaixaBancoId = 0 ;
   this.AV12CaixaBancoDescricao = "" ;
   this.ZV12CaixaBancoDescricao = "" ;
   this.OV12CaixaBancoDescricao = "" ;
   this.AV15EmpresaPadraoCaixaBanco = "" ;
   this.ZV15EmpresaPadraoCaixaBanco = "" ;
   this.OV15EmpresaPadraoCaixaBanco = "" ;
   this.AV27QtdCarac = 0 ;
   this.ZV27QtdCarac = 0 ;
   this.OV27QtdCarac = 0 ;
   this.AV11BaseCaixaBancoId = 0 ;
   this.AV12CaixaBancoDescricao = "" ;
   this.AV15EmpresaPadraoCaixaBanco = "" ;
   this.AV27QtdCarac = 0 ;
   this.AV24CaixaBancoEmpresaId = "" ;
   this.AV25CaixaBancoId = 0 ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1017CaixaBancoDescricao = "" ;
   this.Events = {"e12hu2_client": ["ENTER", true] ,"e13hu2_client": ["'CANCELAR'", true] ,"e15hu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11BaseCaixaBancoId',fld:'vBASECAIXABANCOID'},{av:'AV12CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV15EmpresaPadraoCaixaBanco',fld:'vEMPRESAPADRAOCAIXABANCO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'AV27QtdCarac',fld:'vQTDCARAC'},{av:'AV25CaixaBancoId',fld:'vCAIXABANCOID',hsh:true}],[{av:'AV28snErro',fld:'vSNERRO'},{av:'AV12CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV35GXLvl42',fld:'vGXLVL42'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.setPrompt("PROMPT_BASECAIXABANCOID", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV24CaixaBancoEmpresaId", "vCAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("AV25CaixaBancoId", "vCAIXABANCOID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiarpermissaocxabco());
