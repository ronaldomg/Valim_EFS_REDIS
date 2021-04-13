/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:15:50.31
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmcontapassivo', false, function () {
   this.ServerClass =  "hmodalparmcontapassivo" ;
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
      this.AV21Titulo=gx.fn.getControlValue("vTITULO") ;
   };
   this.Validv_Contapassivo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPASSIVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contacontabilempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e15sv1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms",[this.AV6EmpresaLogadaId, "CBL", "CONTAPASSIVO"]), []);
      this.refreshOutputs([]);
   };
   this.e12sv2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13sv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16sv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,13,19,25,26,27,29];
   this.GXLastCtrlId =29;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapassivo,isvalid:null,rgrid:[],fld:"vCONTAPASSIVO",gxz:"ZV11ContaPassivo",gxold:"OV11ContaPassivo",gxvar:"AV11ContaPassivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ContaPassivo=Value},v2z:function(Value){gx.O.ZV11ContaPassivo=Value},v2c:function(){gx.fn.setControlValue("vCONTAPASSIVO",gx.O.AV11ContaPassivo,0)},c2v:function(){gx.O.AV11ContaPassivo=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPASSIVO")},nac:gx.falseFn};
   GXValidFnc[11]={fld:"IMGCCONT",grid:0};
   GXValidFnc[12]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR",gxz:"ZV12Tradutor",gxold:"OV12Tradutor",gxvar:"AV12Tradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Tradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12Tradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR",gx.O.AV12Tradutor,0)},c2v:function(){gx.O.AV12Tradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV13ContaContabilNome",gxold:"OV13ContaContabilNome",gxvar:"AV13ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ContaContabilNome=Value},v2z:function(Value){gx.O.ZV13ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV13ContaContabilNome,0)},c2v:function(){gx.O.AV13ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TABLE5",grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabilempresaid,isvalid:null,rgrid:[],fld:"vCONTACONTABILEMPRESAID",gxz:"ZV14ContaContabilEmpresaId",gxold:"OV14ContaContabilEmpresaId",gxvar:"AV14ContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ContaContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV14ContaContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILEMPRESAID",gx.O.AV14ContaContabilEmpresaId,0)},c2v:function(){gx.O.AV14ContaContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV15ChamaOnBlurMascara",gxold:"OV15ChamaOnBlurMascara",gxvar:"AV15ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV15ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV15ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV15ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"JS", format:2,grid:0};
   GXValidFnc[29]={fld:"BTNOBS",grid:0};
   this.AV11ContaPassivo = "" ;
   this.ZV11ContaPassivo = "" ;
   this.OV11ContaPassivo = "" ;
   this.AV12Tradutor = 0 ;
   this.ZV12Tradutor = 0 ;
   this.OV12Tradutor = 0 ;
   this.AV13ContaContabilNome = "" ;
   this.ZV13ContaContabilNome = "" ;
   this.OV13ContaContabilNome = "" ;
   this.AV14ContaContabilEmpresaId = "" ;
   this.ZV14ContaContabilEmpresaId = "" ;
   this.OV14ContaContabilEmpresaId = "" ;
   this.AV15ChamaOnBlurMascara = "" ;
   this.ZV15ChamaOnBlurMascara = "" ;
   this.OV15ChamaOnBlurMascara = "" ;
   this.AV11ContaPassivo = "" ;
   this.AV12Tradutor = 0 ;
   this.AV13ContaContabilNome = "" ;
   this.AV14ContaContabilEmpresaId = "" ;
   this.AV15ChamaOnBlurMascara = "" ;
   this.AV21Titulo = "" ;
   this.A62ContaContabilId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A63ContaContabilNome = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12sv2_client": ["ENTER", true] ,"e13sv2_client": ["'FECHAR'", true] ,"e16sv2_client": ["CANCEL", true] ,"e15sv1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11ContaPassivo',fld:'vCONTAPASSIVO'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV14ContaContabilEmpresaId',fld:'vCONTACONTABILEMPRESAID'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV20tpErro',fld:'vTPERRO'},{av:'AV27GXLvl55',fld:'vGXLVL55'},{av:'AV11ContaPassivo',fld:'vCONTAPASSIVO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.setPrompt("IMGCCONT", [10,12]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV21Titulo", "vTITULO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmcontapassivo());
