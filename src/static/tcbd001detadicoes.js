/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:34.90
*/
gx.evt.autoSkip = false;
gx.define('tcbd001detadicoes', false, function () {
   this.ServerClass =  "tcbd001detadicoes" ;
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
      this.A10387CBD001DETADICOESCbdnDrawAdicoe=gx.fn.getControlValue("CBD001DETADICOESCBDNDRAWADICOE") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Cbd001detadicoescbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETADICOESCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detadicoescbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETADICOESCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detadicoescbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETADICOESCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detadicoescbdnitem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETADICOESCBDNITEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detadicoescbdndi=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETADICOESCBDNDI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detadicoescbdnadicao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001detadicoescbdnadicao",["gx.O.A7033CBD001DETADICOESCbdEmpCodigo", "gx.O.A7039CBD001DETADICOESCbdNtfSerie", "gx.O.A7038CBD001DETADICOESCbdNtfNumero", "gx.O.A7036CBD001DETADICOESCbdnItem", "gx.O.A7035CBD001DETADICOESCbdnDI", "gx.O.A7034CBD001DETADICOESCbdnAdicao", "gx.O.A7037CBD001DETADICOESCbdnSeqAdic", "gx.O.A7032CBD001DETADICOESCbdcFabricante", "gx.num.urlDecimal(gx.O.A7040CBD001DETADICOESCbdvDescDI,\'.\',\',\')", "gx.O.A10387CBD001DETADICOESCbdnDrawAdicoe"],["A7037CBD001DETADICOESCbdnSeqAdic", "A7032CBD001DETADICOESCbdcFabricante", "A7040CBD001DETADICOESCbdvDescDI", "A10387CBD001DETADICOESCbdnDrawAdicoe", "Gx_mode", "Z7033CBD001DETADICOESCbdEmpCodigo", "Z7039CBD001DETADICOESCbdNtfSerie", "Z7038CBD001DETADICOESCbdNtfNumero", "Z7036CBD001DETADICOESCbdnItem", "Z7035CBD001DETADICOESCbdnDI", "Z7034CBD001DETADICOESCbdnAdicao", "Z7037CBD001DETADICOESCbdnSeqAdic", "Z7032CBD001DETADICOESCbdcFabricante", "Z7040CBD001DETADICOESCbdvDescDI", "Z10387CBD001DETADICOESCbdnDrawAdicoe", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11ad553_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ad553_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,43,45,49,51,54,56,59,61];
   this.GXLastCtrlId =61;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detadicoescbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001DETADICOESCBDEMPCODIGO",gxz:"Z7033CBD001DETADICOESCbdEmpCodigo",gxold:"O7033CBD001DETADICOESCbdEmpCodigo",gxvar:"A7033CBD001DETADICOESCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7033CBD001DETADICOESCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7033CBD001DETADICOESCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETADICOESCBDEMPCODIGO",gx.O.A7033CBD001DETADICOESCbdEmpCodigo,0)},c2v:function(){gx.O.A7033CBD001DETADICOESCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETADICOESCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detadicoescbdntfserie,isvalid:null,rgrid:[],fld:"CBD001DETADICOESCBDNTFSERIE",gxz:"Z7039CBD001DETADICOESCbdNtfSerie",gxold:"O7039CBD001DETADICOESCbdNtfSerie",gxvar:"A7039CBD001DETADICOESCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7039CBD001DETADICOESCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7039CBD001DETADICOESCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001DETADICOESCBDNTFSERIE",gx.O.A7039CBD001DETADICOESCbdNtfSerie,0)},c2v:function(){gx.O.A7039CBD001DETADICOESCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETADICOESCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detadicoescbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001DETADICOESCBDNTFNUMERO",gxz:"Z7038CBD001DETADICOESCbdNtfNumero",gxold:"O7038CBD001DETADICOESCbdNtfNumero",gxvar:"A7038CBD001DETADICOESCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7038CBD001DETADICOESCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7038CBD001DETADICOESCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETADICOESCBDNTFNUMERO",gx.O.A7038CBD001DETADICOESCbdNtfNumero,0)},c2v:function(){gx.O.A7038CBD001DETADICOESCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETADICOESCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detadicoescbdnitem,isvalid:null,rgrid:[],fld:"CBD001DETADICOESCBDNITEM",gxz:"Z7036CBD001DETADICOESCbdnItem",gxold:"O7036CBD001DETADICOESCbdnItem",gxvar:"A7036CBD001DETADICOESCbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7036CBD001DETADICOESCbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7036CBD001DETADICOESCbdnItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETADICOESCBDNITEM",gx.O.A7036CBD001DETADICOESCbdnItem,0)},c2v:function(){gx.O.A7036CBD001DETADICOESCbdnItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETADICOESCBDNITEM",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:12,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detadicoescbdndi,isvalid:null,rgrid:[],fld:"CBD001DETADICOESCBDNDI",gxz:"Z7035CBD001DETADICOESCbdnDI",gxold:"O7035CBD001DETADICOESCbdnDI",gxvar:"A7035CBD001DETADICOESCbdnDI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7035CBD001DETADICOESCbdnDI=Value},v2z:function(Value){gx.O.Z7035CBD001DETADICOESCbdnDI=Value},v2c:function(){gx.fn.setControlValue("CBD001DETADICOESCBDNDI",gx.O.A7035CBD001DETADICOESCbdnDI,0)},c2v:function(){gx.O.A7035CBD001DETADICOESCbdnDI=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETADICOESCBDNDI")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detadicoescbdnadicao,isvalid:null,rgrid:[],fld:"CBD001DETADICOESCBDNADICAO",gxz:"Z7034CBD001DETADICOESCbdnAdicao",gxold:"O7034CBD001DETADICOESCbdnAdicao",gxvar:"A7034CBD001DETADICOESCbdnAdicao",ucs:[],op:[61,56,51],ip:[61,56,51,45,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7034CBD001DETADICOESCbdnAdicao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7034CBD001DETADICOESCbdnAdicao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETADICOESCBDNADICAO",gx.O.A7034CBD001DETADICOESCbdnAdicao,0)},c2v:function(){gx.O.A7034CBD001DETADICOESCbdnAdicao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETADICOESCBDNADICAO",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETADICOESCBDNSEQADIC",gxz:"Z7037CBD001DETADICOESCbdnSeqAdic",gxold:"O7037CBD001DETADICOESCbdnSeqAdic",gxvar:"A7037CBD001DETADICOESCbdnSeqAdic",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7037CBD001DETADICOESCbdnSeqAdic=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7037CBD001DETADICOESCbdnSeqAdic=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETADICOESCBDNSEQADIC",gx.O.A7037CBD001DETADICOESCbdnSeqAdic,0)},c2v:function(){gx.O.A7037CBD001DETADICOESCbdnSeqAdic=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETADICOESCBDNSEQADIC",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETADICOESCBDCFABRICANTE",gxz:"Z7032CBD001DETADICOESCbdcFabricante",gxold:"O7032CBD001DETADICOESCbdcFabricante",gxvar:"A7032CBD001DETADICOESCbdcFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7032CBD001DETADICOESCbdcFabricante=Value},v2z:function(Value){gx.O.Z7032CBD001DETADICOESCbdcFabricante=Value},v2c:function(){gx.fn.setControlValue("CBD001DETADICOESCBDCFABRICANTE",gx.O.A7032CBD001DETADICOESCbdcFabricante,0)},c2v:function(){gx.O.A7032CBD001DETADICOESCbdcFabricante=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETADICOESCBDCFABRICANTE")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETADICOESCBDVDESCDI",gxz:"Z7040CBD001DETADICOESCbdvDescDI",gxold:"O7040CBD001DETADICOESCbdvDescDI",gxvar:"A7040CBD001DETADICOESCbdvDescDI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7040CBD001DETADICOESCbdvDescDI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7040CBD001DETADICOESCbdvDescDI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETADICOESCBDVDESCDI",gx.O.A7040CBD001DETADICOESCbdvDescDI,2,',')},c2v:function(){gx.O.A7040CBD001DETADICOESCbdvDescDI=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETADICOESCBDVDESCDI",'.',',')},nac:gx.falseFn};
   this.A7033CBD001DETADICOESCbdEmpCodigo = 0 ;
   this.Z7033CBD001DETADICOESCbdEmpCodigo = 0 ;
   this.O7033CBD001DETADICOESCbdEmpCodigo = 0 ;
   this.A7039CBD001DETADICOESCbdNtfSerie = "" ;
   this.Z7039CBD001DETADICOESCbdNtfSerie = "" ;
   this.O7039CBD001DETADICOESCbdNtfSerie = "" ;
   this.A7038CBD001DETADICOESCbdNtfNumero = 0 ;
   this.Z7038CBD001DETADICOESCbdNtfNumero = 0 ;
   this.O7038CBD001DETADICOESCbdNtfNumero = 0 ;
   this.A7036CBD001DETADICOESCbdnItem = 0 ;
   this.Z7036CBD001DETADICOESCbdnItem = 0 ;
   this.O7036CBD001DETADICOESCbdnItem = 0 ;
   this.A7035CBD001DETADICOESCbdnDI = "" ;
   this.Z7035CBD001DETADICOESCbdnDI = "" ;
   this.O7035CBD001DETADICOESCbdnDI = "" ;
   this.A7034CBD001DETADICOESCbdnAdicao = 0 ;
   this.Z7034CBD001DETADICOESCbdnAdicao = 0 ;
   this.O7034CBD001DETADICOESCbdnAdicao = 0 ;
   this.A7037CBD001DETADICOESCbdnSeqAdic = 0 ;
   this.Z7037CBD001DETADICOESCbdnSeqAdic = 0 ;
   this.O7037CBD001DETADICOESCbdnSeqAdic = 0 ;
   this.A7032CBD001DETADICOESCbdcFabricante = "" ;
   this.Z7032CBD001DETADICOESCbdcFabricante = "" ;
   this.O7032CBD001DETADICOESCbdcFabricante = "" ;
   this.A7040CBD001DETADICOESCbdvDescDI = 0 ;
   this.Z7040CBD001DETADICOESCbdvDescDI = 0 ;
   this.O7040CBD001DETADICOESCbdvDescDI = 0 ;
   this.A7033CBD001DETADICOESCbdEmpCodigo = 0 ;
   this.A7039CBD001DETADICOESCbdNtfSerie = "" ;
   this.A7038CBD001DETADICOESCbdNtfNumero = 0 ;
   this.A7036CBD001DETADICOESCbdnItem = 0 ;
   this.A7035CBD001DETADICOESCbdnDI = "" ;
   this.A7034CBD001DETADICOESCbdnAdicao = 0 ;
   this.A7037CBD001DETADICOESCbdnSeqAdic = 0 ;
   this.A7032CBD001DETADICOESCbdcFabricante = "" ;
   this.A7040CBD001DETADICOESCbdvDescDI = 0 ;
   this.A10387CBD001DETADICOESCbdnDrawAdicoe = "" ;
   this.Events = {"e11ad553_client": ["ENTER", true] ,"e12ad553_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("A10387CBD001DETADICOESCbdnDrawAdicoe", "CBD001DETADICOESCBDNDRAWADICOE", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001detadicoes());
