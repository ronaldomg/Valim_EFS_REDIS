/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:39:47.35
*/
gx.evt.autoSkip = false;
gx.define('hduplicaretiqueta', false, function () {
   this.ServerClass =  "hduplicaretiqueta" ;
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
   this.Validv_Etiquetacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Novocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNOVOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresaetiquetaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAETIQUETAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12hm2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13hm2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15hm2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,24,25,26];
   this.GXLastCtrlId =26;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetacodigo,isvalid:null,rgrid:[],fld:"vETIQUETACODIGO",gxz:"ZV13EtiquetaCodigo",gxold:"OV13EtiquetaCodigo",gxvar:"AV13EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13EtiquetaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETACODIGO",gx.O.AV13EtiquetaCodigo,0)},c2v:function(){gx.O.AV13EtiquetaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETADESCRICAO",gxz:"ZV15EtiquetaDescricao",gxold:"OV15EtiquetaDescricao",gxvar:"AV15EtiquetaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15EtiquetaDescricao=Value},v2z:function(Value){gx.O.ZV15EtiquetaDescricao=Value},v2c:function(){gx.fn.setControlValue("vETIQUETADESCRICAO",gx.O.AV15EtiquetaDescricao,0)},c2v:function(){gx.O.AV15EtiquetaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Novocodigo,isvalid:null,rgrid:[],fld:"vNOVOCODIGO",gxz:"ZV18NovoCodigo",gxold:"OV18NovoCodigo",gxvar:"AV18NovoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18NovoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18NovoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOVOCODIGO",gx.O.AV18NovoCodigo,0)},c2v:function(){gx.O.AV18NovoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOVOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaetiquetaempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAETIQUETAEMPRESAID",gxz:"ZV14EmpresaEtiquetaEmpresaId",gxold:"OV14EmpresaEtiquetaEmpresaId",gxvar:"AV14EmpresaEtiquetaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14EmpresaEtiquetaEmpresaId=Value},v2z:function(Value){gx.O.ZV14EmpresaEtiquetaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAETIQUETAEMPRESAID",gx.O.AV14EmpresaEtiquetaEmpresaId,0)},c2v:function(){gx.O.AV14EmpresaEtiquetaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAETIQUETAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"JS", format:2,grid:0};
   GXValidFnc[26]={fld:"PROMPT_ETIQUETACODIGO",grid:0};
   this.AV13EtiquetaCodigo = 0 ;
   this.ZV13EtiquetaCodigo = 0 ;
   this.OV13EtiquetaCodigo = 0 ;
   this.AV15EtiquetaDescricao = "" ;
   this.ZV15EtiquetaDescricao = "" ;
   this.OV15EtiquetaDescricao = "" ;
   this.AV18NovoCodigo = 0 ;
   this.ZV18NovoCodigo = 0 ;
   this.OV18NovoCodigo = 0 ;
   this.AV14EmpresaEtiquetaEmpresaId = "" ;
   this.ZV14EmpresaEtiquetaEmpresaId = "" ;
   this.OV14EmpresaEtiquetaEmpresaId = "" ;
   this.AV13EtiquetaCodigo = 0 ;
   this.AV15EtiquetaDescricao = "" ;
   this.AV18NovoCodigo = 0 ;
   this.AV14EmpresaEtiquetaEmpresaId = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.Events = {"e12hm2_client": ["ENTER", true] ,"e13hm2_client": ["'CANCELAR'", true] ,"e15hm2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13EtiquetaCodigo',fld:'vETIQUETACODIGO'},{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'AV14EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'AV18NovoCodigo',fld:'vNOVOCODIGO'}],[{av:'AV11SnErro',fld:'vSNERRO'},{av:'AV21GXLvl21',fld:'vGXLVL21'},{av:'AV18NovoCodigo',fld:'vNOVOCODIGO'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.setPrompt("PROMPT_ETIQUETACODIGO", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicaretiqueta());
