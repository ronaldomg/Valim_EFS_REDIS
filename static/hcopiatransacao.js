/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:43.36
*/
gx.evt.autoSkip = false;
gx.define('hcopiatransacao', false, function () {
   this.ServerClass =  "hcopiatransacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Transacaocontabilidcopia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOCONTABILIDCOPIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaocontabilid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOCONTABILID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e131t2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e111t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,23];
   this.GXLastCtrlId =23;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaocontabilidcopia,isvalid:null,rgrid:[],fld:"vTRANSACAOCONTABILIDCOPIA",gxz:"ZV11TransacaoContabilIdCopia",gxold:"OV11TransacaoContabilIdCopia",gxvar:"AV11TransacaoContabilIdCopia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11TransacaoContabilIdCopia=Value},v2z:function(Value){gx.O.ZV11TransacaoContabilIdCopia=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCONTABILIDCOPIA",gx.O.AV11TransacaoContabilIdCopia,0)},c2v:function(){gx.O.AV11TransacaoContabilIdCopia=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCONTABILIDCOPIA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaocontabilid,isvalid:null,rgrid:[],fld:"vTRANSACAOCONTABILID",gxz:"ZV12TransacaoContabilId",gxold:"OV12TransacaoContabilId",gxvar:"AV12TransacaoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12TransacaoContabilId=Value},v2z:function(Value){gx.O.ZV12TransacaoContabilId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCONTABILID",gx.O.AV12TransacaoContabilId,0)},c2v:function(){gx.O.AV12TransacaoContabilId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCONTABILID")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"PROMPT_TRANSACAOCONTABILIDCOPIA",grid:0};
   this.AV11TransacaoContabilIdCopia = "" ;
   this.ZV11TransacaoContabilIdCopia = "" ;
   this.OV11TransacaoContabilIdCopia = "" ;
   this.AV12TransacaoContabilId = "" ;
   this.ZV12TransacaoContabilId = "" ;
   this.OV12TransacaoContabilId = "" ;
   this.AV11TransacaoContabilIdCopia = "" ;
   this.AV12TransacaoContabilId = "" ;
   this.A347TransacaoContabilId = "" ;
   this.A346EmpresaTransacaoContabilEmpres = "" ;
   this.Events = {"e131t2_client": ["ENTER", true] ,"e111t2_client": ["'FECHAR'", true] ,"e151t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV11TransacaoContabilIdCopia',fld:'vTRANSACAOCONTABILIDCOPIA'},{av:'A347TransacaoContabilId',fld:'TRANSACAOCONTABILID'},{av:'A346EmpresaTransacaoContabilEmpres',fld:'EMPRESATRANSACAOCONTABILEMPRES'},{av:'AV14EmpresaId',fld:'vEMPRESAID'}],[{av:'AV13Quant',fld:'vQUANT'},{av:'AV19GXLvl31',fld:'vGXLVL31'},{av:'AV20GXLvl44',fld:'vGXLVL44'},{av:'AV11TransacaoContabilIdCopia',fld:'vTRANSACAOCONTABILIDCOPIA'},{av:'AV12TransacaoContabilId',fld:'vTRANSACAOCONTABILID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_TRANSACAOCONTABILIDCOPIA", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiatransacao());
