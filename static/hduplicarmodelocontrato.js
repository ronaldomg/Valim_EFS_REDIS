/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:54:26.15
*/
gx.evt.autoSkip = false;
gx.define('hduplicarmodelocontrato', false, function () {
   this.ServerClass =  "hduplicarmodelocontrato" ;
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
   this.Validv_Modelocontratoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMODELOCONTRATOID");
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
   this.Validv_Modelocontratoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMODELOCONTRATOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12ue2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ue2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15ue2_client=function()
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
   GXValidFnc[10]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Modelocontratoid,isvalid:null,rgrid:[],fld:"vMODELOCONTRATOID",gxz:"ZV17ModeloContratoId",gxold:"OV17ModeloContratoId",gxvar:"AV17ModeloContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ModeloContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17ModeloContratoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELOCONTRATOID",gx.O.AV17ModeloContratoId,0)},c2v:function(){gx.O.AV17ModeloContratoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELOCONTRATOID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOCONTRATODESCRICAO",gxz:"ZV18ModeloContratoDescricao",gxold:"OV18ModeloContratoDescricao",gxvar:"AV18ModeloContratoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ModeloContratoDescricao=Value},v2z:function(Value){gx.O.ZV18ModeloContratoDescricao=Value},v2c:function(){gx.fn.setControlValue("vMODELOCONTRATODESCRICAO",gx.O.AV18ModeloContratoDescricao,0)},c2v:function(){gx.O.AV18ModeloContratoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMODELOCONTRATODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Novomodeloid,isvalid:null,rgrid:[],fld:"vNOVOMODELOID",gxz:"ZV15NovoModeloId",gxold:"OV15NovoModeloId",gxvar:"AV15NovoModeloId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15NovoModeloId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15NovoModeloId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOVOMODELOID",gx.O.AV15NovoModeloId,0)},c2v:function(){gx.O.AV15NovoModeloId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOVOMODELOID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Modelocontratoempresaid,isvalid:null,rgrid:[],fld:"vMODELOCONTRATOEMPRESAID",gxz:"ZV16ModeloContratoEmpresaId",gxold:"OV16ModeloContratoEmpresaId",gxvar:"AV16ModeloContratoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ModeloContratoEmpresaId=Value},v2z:function(Value){gx.O.ZV16ModeloContratoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vMODELOCONTRATOEMPRESAID",gx.O.AV16ModeloContratoEmpresaId,0)},c2v:function(){gx.O.AV16ModeloContratoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vMODELOCONTRATOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"JS", format:1,grid:0};
   GXValidFnc[26]={fld:"PROMPT_MODELOCONTRATOID",grid:0};
   this.AV17ModeloContratoId = 0 ;
   this.ZV17ModeloContratoId = 0 ;
   this.OV17ModeloContratoId = 0 ;
   this.AV18ModeloContratoDescricao = "" ;
   this.ZV18ModeloContratoDescricao = "" ;
   this.OV18ModeloContratoDescricao = "" ;
   this.AV15NovoModeloId = 0 ;
   this.ZV15NovoModeloId = 0 ;
   this.OV15NovoModeloId = 0 ;
   this.AV16ModeloContratoEmpresaId = "" ;
   this.ZV16ModeloContratoEmpresaId = "" ;
   this.OV16ModeloContratoEmpresaId = "" ;
   this.AV17ModeloContratoId = 0 ;
   this.AV18ModeloContratoDescricao = "" ;
   this.AV15NovoModeloId = 0 ;
   this.AV16ModeloContratoEmpresaId = "" ;
   this.A5337ModeloContratoId = 0 ;
   this.A5336ModeloContratoEmpresaId = "" ;
   this.Events = {"e12ue2_client": ["ENTER", true] ,"e13ue2_client": ["'CANCELAR'", true] ,"e15ue2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV17ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'AV16ModeloContratoEmpresaId',fld:'vMODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'AV15NovoModeloId',fld:'vNOVOMODELOID'}],[{av:'AV13SnErro',fld:'vSNERRO'},{av:'AV21GXLvl22',fld:'vGXLVL22'},{av:'AV15NovoModeloId',fld:'vNOVOMODELOID'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.setPrompt("PROMPT_MODELOCONTRATOID", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicarmodelocontrato());
