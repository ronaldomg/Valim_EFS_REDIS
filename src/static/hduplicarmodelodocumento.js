/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:33:19.87
*/
gx.evt.autoSkip = false;
gx.define('hduplicarmodelodocumento', false, function () {
   this.ServerClass =  "hduplicarmodelodocumento" ;
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
   };
   this.Validv_Modelodocumentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMODELODOCUMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Novomodeloid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNOVOMODELOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Modelodocumentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMODELODOCUMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12fx2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13fx2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15fx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,24,25,26];
   this.GXLastCtrlId =26;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Modelodocumentoid,isvalid:null,rgrid:[],fld:"vMODELODOCUMENTOID",gxz:"ZV15ModeloDocumentoId",gxold:"OV15ModeloDocumentoId",gxvar:"AV15ModeloDocumentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ModeloDocumentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15ModeloDocumentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELODOCUMENTOID",gx.O.AV15ModeloDocumentoId,0)},c2v:function(){gx.O.AV15ModeloDocumentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELODOCUMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELODOCUMENTODESCRICAO",gxz:"ZV17ModeloDocumentoDescricao",gxold:"OV17ModeloDocumentoDescricao",gxvar:"AV17ModeloDocumentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ModeloDocumentoDescricao=Value},v2z:function(Value){gx.O.ZV17ModeloDocumentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vMODELODOCUMENTODESCRICAO",gx.O.AV17ModeloDocumentoDescricao,0)},c2v:function(){gx.O.AV17ModeloDocumentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMODELODOCUMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Novomodeloid,isvalid:null,rgrid:[],fld:"vNOVOMODELOID",gxz:"ZV18NovoModeloId",gxold:"OV18NovoModeloId",gxvar:"AV18NovoModeloId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18NovoModeloId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18NovoModeloId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOVOMODELOID",gx.O.AV18NovoModeloId,0)},c2v:function(){gx.O.AV18NovoModeloId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOVOMODELOID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Modelodocumentoempresaid,isvalid:null,rgrid:[],fld:"vMODELODOCUMENTOEMPRESAID",gxz:"ZV16ModeloDocumentoEmpresaId",gxold:"OV16ModeloDocumentoEmpresaId",gxvar:"AV16ModeloDocumentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ModeloDocumentoEmpresaId=Value},v2z:function(Value){gx.O.ZV16ModeloDocumentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vMODELODOCUMENTOEMPRESAID",gx.O.AV16ModeloDocumentoEmpresaId,0)},c2v:function(){gx.O.AV16ModeloDocumentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vMODELODOCUMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"JS", format:1,grid:0};
   GXValidFnc[26]={fld:"PROMPT_MODELODOCUMENTOID",grid:0};
   this.AV15ModeloDocumentoId = 0 ;
   this.ZV15ModeloDocumentoId = 0 ;
   this.OV15ModeloDocumentoId = 0 ;
   this.AV17ModeloDocumentoDescricao = "" ;
   this.ZV17ModeloDocumentoDescricao = "" ;
   this.OV17ModeloDocumentoDescricao = "" ;
   this.AV18NovoModeloId = 0 ;
   this.ZV18NovoModeloId = 0 ;
   this.OV18NovoModeloId = 0 ;
   this.AV16ModeloDocumentoEmpresaId = "" ;
   this.ZV16ModeloDocumentoEmpresaId = "" ;
   this.OV16ModeloDocumentoEmpresaId = "" ;
   this.AV15ModeloDocumentoId = 0 ;
   this.AV17ModeloDocumentoDescricao = "" ;
   this.AV18NovoModeloId = 0 ;
   this.AV16ModeloDocumentoEmpresaId = "" ;
   this.A1024ModeloDocumentoId = 0 ;
   this.A1023ModeloDocumentoEmpresaId = "" ;
   this.Events = {"e12fx2_client": ["ENTER", true] ,"e13fx2_client": ["'CANCELAR'", true] ,"e15fx2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15ModeloDocumentoId',fld:'vMODELODOCUMENTOID'},{av:'A1023ModeloDocumentoEmpresaId',fld:'MODELODOCUMENTOEMPRESAID'},{av:'AV16ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'},{av:'AV18NovoModeloId',fld:'vNOVOMODELOID'}],[{av:'AV13SnErro',fld:'vSNERRO'},{av:'AV21GXLvl21',fld:'vGXLVL21'},{av:'AV18NovoModeloId',fld:'vNOVOMODELOID'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.setPrompt("PROMPT_MODELODOCUMENTOID", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicarmodelodocumento());
