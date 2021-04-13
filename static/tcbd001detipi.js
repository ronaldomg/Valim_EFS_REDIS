/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:21.45
*/
gx.evt.autoSkip = false;
gx.define('tcbd001detipi', false, function () {
   this.ServerClass =  "tcbd001detipi" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Cbd001detipicbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETIPICBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detipicbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETIPICBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detipicbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETIPICBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detipicbdnitem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETIPICBDNITEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detipicbdcst_ipi=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001detipicbdcst_ipi",["gx.O.A7096CBD001DETIPICbdEmpCodigo", "gx.O.A7099CBD001DETIPICbdNtfSerie", "gx.O.A7098CBD001DETIPICbdNtfNumero", "gx.O.A7097CBD001DETIPICbdnItem", "gx.O.A7095CBD001DETIPICbdCST_IPI", "gx.num.urlDecimal(gx.O.A7102CBD001DETIPICbdvBC_IPI,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7101CBD001DETIPICbdqUnid_IPI,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7104CBD001DETIPICbdvUnid_IPI,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7100CBD001DETIPICbdpIPI,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7103CBD001DETIPICbdvIPI,\'.\',\',\')"],["A7102CBD001DETIPICbdvBC_IPI", "A7101CBD001DETIPICbdqUnid_IPI", "A7104CBD001DETIPICbdvUnid_IPI", "A7100CBD001DETIPICbdpIPI", "A7103CBD001DETIPICbdvIPI", "Gx_mode", "Z7096CBD001DETIPICbdEmpCodigo", "Z7099CBD001DETIPICbdNtfSerie", "Z7098CBD001DETIPICbdNtfNumero", "Z7097CBD001DETIPICbdnItem", "Z7095CBD001DETIPICbdCST_IPI", "Z7102CBD001DETIPICbdvBC_IPI", "Z7101CBD001DETIPICbdqUnid_IPI", "Z7104CBD001DETIPICbdvUnid_IPI", "Z7100CBD001DETIPICbdpIPI", "Z7103CBD001DETIPICbdvIPI", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11a8548_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12a8548_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,44,46,49,51,54,56,59,61,64,66];
   this.GXLastCtrlId =66;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detipicbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001DETIPICBDEMPCODIGO",gxz:"Z7096CBD001DETIPICbdEmpCodigo",gxold:"O7096CBD001DETIPICbdEmpCodigo",gxvar:"A7096CBD001DETIPICbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7096CBD001DETIPICbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7096CBD001DETIPICbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETIPICBDEMPCODIGO",gx.O.A7096CBD001DETIPICbdEmpCodigo,0)},c2v:function(){gx.O.A7096CBD001DETIPICbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETIPICBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detipicbdntfserie,isvalid:null,rgrid:[],fld:"CBD001DETIPICBDNTFSERIE",gxz:"Z7099CBD001DETIPICbdNtfSerie",gxold:"O7099CBD001DETIPICbdNtfSerie",gxvar:"A7099CBD001DETIPICbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7099CBD001DETIPICbdNtfSerie=Value},v2z:function(Value){gx.O.Z7099CBD001DETIPICbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001DETIPICBDNTFSERIE",gx.O.A7099CBD001DETIPICbdNtfSerie,0)},c2v:function(){gx.O.A7099CBD001DETIPICbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETIPICBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detipicbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001DETIPICBDNTFNUMERO",gxz:"Z7098CBD001DETIPICbdNtfNumero",gxold:"O7098CBD001DETIPICbdNtfNumero",gxvar:"A7098CBD001DETIPICbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7098CBD001DETIPICbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7098CBD001DETIPICbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETIPICBDNTFNUMERO",gx.O.A7098CBD001DETIPICbdNtfNumero,0)},c2v:function(){gx.O.A7098CBD001DETIPICbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETIPICBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detipicbdnitem,isvalid:null,rgrid:[],fld:"CBD001DETIPICBDNITEM",gxz:"Z7097CBD001DETIPICbdnItem",gxold:"O7097CBD001DETIPICbdnItem",gxvar:"A7097CBD001DETIPICbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7097CBD001DETIPICbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7097CBD001DETIPICbdnItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETIPICBDNITEM",gx.O.A7097CBD001DETIPICbdnItem,0)},c2v:function(){gx.O.A7097CBD001DETIPICbdnItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETIPICBDNITEM",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detipicbdcst_ipi,isvalid:null,rgrid:[],fld:"CBD001DETIPICBDCST_IPI",gxz:"Z7095CBD001DETIPICbdCST_IPI",gxold:"O7095CBD001DETIPICbdCST_IPI",gxvar:"A7095CBD001DETIPICbdCST_IPI",ucs:[],op:[66,61,56,51,46],ip:[66,61,56,51,46,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7095CBD001DETIPICbdCST_IPI=Value},v2z:function(Value){gx.O.Z7095CBD001DETIPICbdCST_IPI=Value},v2c:function(){gx.fn.setControlValue("CBD001DETIPICBDCST_IPI",gx.O.A7095CBD001DETIPICbdCST_IPI,0)},c2v:function(){gx.O.A7095CBD001DETIPICbdCST_IPI=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETIPICBDCST_IPI")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETIPICBDVBC_IPI",gxz:"Z7102CBD001DETIPICbdvBC_IPI",gxold:"O7102CBD001DETIPICbdvBC_IPI",gxvar:"A7102CBD001DETIPICbdvBC_IPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7102CBD001DETIPICbdvBC_IPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7102CBD001DETIPICbdvBC_IPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETIPICBDVBC_IPI",gx.O.A7102CBD001DETIPICbdvBC_IPI,2,',')},c2v:function(){gx.O.A7102CBD001DETIPICbdvBC_IPI=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETIPICBDVBC_IPI",'.',',')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"decimal",len:16,dec:4,sign:false,pic:"ZZZZZZZZZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETIPICBDQUNID_IPI",gxz:"Z7101CBD001DETIPICbdqUnid_IPI",gxold:"O7101CBD001DETIPICbdqUnid_IPI",gxvar:"A7101CBD001DETIPICbdqUnid_IPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7101CBD001DETIPICbdqUnid_IPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7101CBD001DETIPICbdqUnid_IPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETIPICBDQUNID_IPI",gx.O.A7101CBD001DETIPICbdqUnid_IPI,4,',')},c2v:function(){gx.O.A7101CBD001DETIPICbdqUnid_IPI=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETIPICBDQUNID_IPI",'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"decimal",len:15,dec:4,sign:false,pic:"ZZZZZZZZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETIPICBDVUNID_IPI",gxz:"Z7104CBD001DETIPICbdvUnid_IPI",gxold:"O7104CBD001DETIPICbdvUnid_IPI",gxvar:"A7104CBD001DETIPICbdvUnid_IPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7104CBD001DETIPICbdvUnid_IPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7104CBD001DETIPICbdvUnid_IPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETIPICBDVUNID_IPI",gx.O.A7104CBD001DETIPICbdvUnid_IPI,4,',')},c2v:function(){gx.O.A7104CBD001DETIPICbdvUnid_IPI=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETIPICBDVUNID_IPI",'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETIPICBDPIPI",gxz:"Z7100CBD001DETIPICbdpIPI",gxold:"O7100CBD001DETIPICbdpIPI",gxvar:"A7100CBD001DETIPICbdpIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7100CBD001DETIPICbdpIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7100CBD001DETIPICbdpIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETIPICBDPIPI",gx.O.A7100CBD001DETIPICbdpIPI,2,',')},c2v:function(){gx.O.A7100CBD001DETIPICbdpIPI=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETIPICBDPIPI",'.',',')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETIPICBDVIPI",gxz:"Z7103CBD001DETIPICbdvIPI",gxold:"O7103CBD001DETIPICbdvIPI",gxvar:"A7103CBD001DETIPICbdvIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7103CBD001DETIPICbdvIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7103CBD001DETIPICbdvIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETIPICBDVIPI",gx.O.A7103CBD001DETIPICbdvIPI,2,',')},c2v:function(){gx.O.A7103CBD001DETIPICbdvIPI=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETIPICBDVIPI",'.',',')},nac:gx.falseFn};
   this.A7096CBD001DETIPICbdEmpCodigo = 0 ;
   this.Z7096CBD001DETIPICbdEmpCodigo = 0 ;
   this.O7096CBD001DETIPICbdEmpCodigo = 0 ;
   this.A7099CBD001DETIPICbdNtfSerie = "" ;
   this.Z7099CBD001DETIPICbdNtfSerie = "" ;
   this.O7099CBD001DETIPICbdNtfSerie = "" ;
   this.A7098CBD001DETIPICbdNtfNumero = 0 ;
   this.Z7098CBD001DETIPICbdNtfNumero = 0 ;
   this.O7098CBD001DETIPICbdNtfNumero = 0 ;
   this.A7097CBD001DETIPICbdnItem = 0 ;
   this.Z7097CBD001DETIPICbdnItem = 0 ;
   this.O7097CBD001DETIPICbdnItem = 0 ;
   this.A7095CBD001DETIPICbdCST_IPI = "" ;
   this.Z7095CBD001DETIPICbdCST_IPI = "" ;
   this.O7095CBD001DETIPICbdCST_IPI = "" ;
   this.A7102CBD001DETIPICbdvBC_IPI = 0 ;
   this.Z7102CBD001DETIPICbdvBC_IPI = 0 ;
   this.O7102CBD001DETIPICbdvBC_IPI = 0 ;
   this.A7101CBD001DETIPICbdqUnid_IPI = 0 ;
   this.Z7101CBD001DETIPICbdqUnid_IPI = 0 ;
   this.O7101CBD001DETIPICbdqUnid_IPI = 0 ;
   this.A7104CBD001DETIPICbdvUnid_IPI = 0 ;
   this.Z7104CBD001DETIPICbdvUnid_IPI = 0 ;
   this.O7104CBD001DETIPICbdvUnid_IPI = 0 ;
   this.A7100CBD001DETIPICbdpIPI = 0 ;
   this.Z7100CBD001DETIPICbdpIPI = 0 ;
   this.O7100CBD001DETIPICbdpIPI = 0 ;
   this.A7103CBD001DETIPICbdvIPI = 0 ;
   this.Z7103CBD001DETIPICbdvIPI = 0 ;
   this.O7103CBD001DETIPICbdvIPI = 0 ;
   this.A7096CBD001DETIPICbdEmpCodigo = 0 ;
   this.A7099CBD001DETIPICbdNtfSerie = "" ;
   this.A7098CBD001DETIPICbdNtfNumero = 0 ;
   this.A7097CBD001DETIPICbdnItem = 0 ;
   this.A7095CBD001DETIPICbdCST_IPI = "" ;
   this.A7102CBD001DETIPICbdvBC_IPI = 0 ;
   this.A7101CBD001DETIPICbdqUnid_IPI = 0 ;
   this.A7104CBD001DETIPICbdvUnid_IPI = 0 ;
   this.A7100CBD001DETIPICbdpIPI = 0 ;
   this.A7103CBD001DETIPICbdvIPI = 0 ;
   this.Events = {"e11a8548_client": ["ENTER", true] ,"e12a8548_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001detipi());
