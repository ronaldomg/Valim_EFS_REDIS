/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:36:54.37
*/
gx.evt.autoSkip = false;
gx.define('hfontemodelodocumento', false, function () {
   this.ServerClass =  "hfontemodelodocumento" ;
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
      this.AV13ModeloDocumentoEmpresaId=gx.fn.getControlValue("vMODELODOCUMENTOEMPRESAID") ;
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
   this.Validv_Modelodocumentotamfonte=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMODELODOCUMENTOTAMFONTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Modelodocumentotipoimpressao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMODELODOCUMENTOTIPOIMPRESSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11g72_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12g72_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15g72_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,30];
   this.GXLastCtrlId =30;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE6",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Modelodocumentoid,isvalid:null,rgrid:[],fld:"vMODELODOCUMENTOID",gxz:"ZV12ModeloDocumentoId",gxold:"OV12ModeloDocumentoId",gxvar:"AV12ModeloDocumentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ModeloDocumentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ModeloDocumentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELODOCUMENTOID",gx.O.AV12ModeloDocumentoId,0)},c2v:function(){gx.O.AV12ModeloDocumentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELODOCUMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELODOCUMENTODESCRICAO",gxz:"ZV14ModeloDocumentoDescricao",gxold:"OV14ModeloDocumentoDescricao",gxvar:"AV14ModeloDocumentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ModeloDocumentoDescricao=Value},v2z:function(Value){gx.O.ZV14ModeloDocumentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vMODELODOCUMENTODESCRICAO",gx.O.AV14ModeloDocumentoDescricao,0)},c2v:function(){gx.O.AV14ModeloDocumentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMODELODOCUMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Modelodocumentotamfonte,isvalid:null,rgrid:[],fld:"vMODELODOCUMENTOTAMFONTE",gxz:"ZV15ModeloDocumentoTamFonte",gxold:"OV15ModeloDocumentoTamFonte",gxvar:"AV15ModeloDocumentoTamFonte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15ModeloDocumentoTamFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15ModeloDocumentoTamFonte=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vMODELODOCUMENTOTAMFONTE",gx.O.AV15ModeloDocumentoTamFonte)},c2v:function(){gx.O.AV15ModeloDocumentoTamFonte=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELODOCUMENTOTAMFONTE",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Modelodocumentotipoimpressao,isvalid:null,rgrid:[],fld:"vMODELODOCUMENTOTIPOIMPRESSAO",gxz:"ZV17ModeloDocumentoTipoImpressao",gxold:"OV17ModeloDocumentoTipoImpressao",gxvar:"AV17ModeloDocumentoTipoImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17ModeloDocumentoTipoImpressao=Value},v2z:function(Value){gx.O.ZV17ModeloDocumentoTipoImpressao=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELODOCUMENTOTIPOIMPRESSAO",gx.O.AV17ModeloDocumentoTipoImpressao)},c2v:function(){gx.O.AV17ModeloDocumentoTipoImpressao=this.val()},val:function(){return gx.fn.getControlValue("vMODELODOCUMENTOTIPOIMPRESSAO")},nac:gx.falseFn};
   this.AV12ModeloDocumentoId = 0 ;
   this.ZV12ModeloDocumentoId = 0 ;
   this.OV12ModeloDocumentoId = 0 ;
   this.AV14ModeloDocumentoDescricao = "" ;
   this.ZV14ModeloDocumentoDescricao = "" ;
   this.OV14ModeloDocumentoDescricao = "" ;
   this.AV15ModeloDocumentoTamFonte = 0 ;
   this.ZV15ModeloDocumentoTamFonte = 0 ;
   this.OV15ModeloDocumentoTamFonte = 0 ;
   this.AV17ModeloDocumentoTipoImpressao = "" ;
   this.ZV17ModeloDocumentoTipoImpressao = "" ;
   this.OV17ModeloDocumentoTipoImpressao = "" ;
   this.AV12ModeloDocumentoId = 0 ;
   this.AV14ModeloDocumentoDescricao = "" ;
   this.AV15ModeloDocumentoTamFonte = 0 ;
   this.AV17ModeloDocumentoTipoImpressao = "" ;
   this.AV13ModeloDocumentoEmpresaId = "" ;
   this.A1024ModeloDocumentoId = 0 ;
   this.A1023ModeloDocumentoEmpresaId = "" ;
   this.A1025ModeloDocumentoDescricao = "" ;
   this.A2017ModeloDocumentoTipoImpressao = "" ;
   this.Events = {"e11g72_client": ["ENTER", true] ,"e12g72_client": ["'CANCELAR'", true] ,"e15g72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15ModeloDocumentoTamFonte',fld:'vMODELODOCUMENTOTAMFONTE'},{av:'AV17ModeloDocumentoTipoImpressao',fld:'vMODELODOCUMENTOTIPOIMPRESSAO'},{av:'AV13ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID',hsh:true},{av:'AV12ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true}],[{av:'AV10SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13ModeloDocumentoEmpresaId", "vMODELODOCUMENTOEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfontemodelodocumento());
