/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:15:37.92
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmtermoresp', false, function () {
   this.ServerClass =  "hmodalparmtermoresp" ;
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
      this.AV6EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.AV19Titulo=gx.fn.getControlValue("vTITULO") ;
   };
   this.Validv_Responsavelpatid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vRESPONSAVELPATID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Responsavelpatempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vRESPONSAVELPATEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e15sr1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms",[this.AV6EmpresaLogadaId, "PAT", "RESPPATRIMONIO"]), []);
      this.refreshOutputs([]);
   };
   this.e12sr2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13sr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16sr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,17,23,24,25,27,28];
   this.GXLastCtrlId =28;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Responsavelpatid,isvalid:null,rgrid:[],fld:"vRESPONSAVELPATID",gxz:"ZV12ResponsavelPatId",gxold:"OV12ResponsavelPatId",gxvar:"AV12ResponsavelPatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ResponsavelPatId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ResponsavelPatId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRESPONSAVELPATID",gx.O.AV12ResponsavelPatId,0)},c2v:function(){gx.O.AV12ResponsavelPatId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRESPONSAVELPATID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRESPONSAVELPATNOME",gxz:"ZV16ResponsavelPatNome",gxold:"OV16ResponsavelPatNome",gxvar:"AV16ResponsavelPatNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ResponsavelPatNome=Value},v2z:function(Value){gx.O.ZV16ResponsavelPatNome=Value},v2c:function(){gx.fn.setControlValue("vRESPONSAVELPATNOME",gx.O.AV16ResponsavelPatNome,0)},c2v:function(){gx.O.AV16ResponsavelPatNome=this.val()},val:function(){return gx.fn.getControlValue("vRESPONSAVELPATNOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TABLE5",grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Responsavelpatempresaid,isvalid:null,rgrid:[],fld:"vRESPONSAVELPATEMPRESAID",gxz:"ZV13ResponsavelPatEmpresaId",gxold:"OV13ResponsavelPatEmpresaId",gxvar:"AV13ResponsavelPatEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ResponsavelPatEmpresaId=Value},v2z:function(Value){gx.O.ZV13ResponsavelPatEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vRESPONSAVELPATEMPRESAID",gx.O.AV13ResponsavelPatEmpresaId,0)},c2v:function(){gx.O.AV13ResponsavelPatEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vRESPONSAVELPATEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV15QtdeCaracter",gxold:"OV15QtdeCaracter",gxvar:"AV15QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15QtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15QtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV15QtdeCaracter,0)},c2v:function(){gx.O.AV15QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"JS", format:2,grid:0};
   GXValidFnc[27]={fld:"BTNOBS",grid:0};
   GXValidFnc[28]={fld:"PROMPT_RESPONSAVELPATID",grid:0};
   this.AV12ResponsavelPatId = 0 ;
   this.ZV12ResponsavelPatId = 0 ;
   this.OV12ResponsavelPatId = 0 ;
   this.AV16ResponsavelPatNome = "" ;
   this.ZV16ResponsavelPatNome = "" ;
   this.OV16ResponsavelPatNome = "" ;
   this.AV13ResponsavelPatEmpresaId = "" ;
   this.ZV13ResponsavelPatEmpresaId = "" ;
   this.OV13ResponsavelPatEmpresaId = "" ;
   this.AV15QtdeCaracter = 0 ;
   this.ZV15QtdeCaracter = 0 ;
   this.OV15QtdeCaracter = 0 ;
   this.AV12ResponsavelPatId = 0 ;
   this.AV16ResponsavelPatNome = "" ;
   this.AV13ResponsavelPatEmpresaId = "" ;
   this.AV15QtdeCaracter = 0 ;
   this.AV19Titulo = "" ;
   this.A2281ResponsavelPatId = 0 ;
   this.A2280ResponsavelPatEmpresaId = "" ;
   this.A2282ResponsavelPatNome = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12sr2_client": ["ENTER", true] ,"e13sr2_client": ["'FECHAR'", true] ,"e16sr2_client": ["CANCEL", true] ,"e15sr1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'A2280ResponsavelPatEmpresaId',fld:'RESPONSAVELPATEMPRESAID'},{av:'AV13ResponsavelPatEmpresaId',fld:'vRESPONSAVELPATEMPRESAID'},{av:'A2281ResponsavelPatId',fld:'RESPONSAVELPATID'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV14tpErro',fld:'vTPERRO'},{av:'AV25GXLvl50',fld:'vGXLVL50'},{av:'AV12ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'AV11ResponsavelPat',fld:'vRESPONSAVELPAT'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.setPrompt("PROMPT_RESPONSAVELPATID", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV19Titulo", "vTITULO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmtermoresp());
