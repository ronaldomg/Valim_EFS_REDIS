/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:3.79
*/
gx.evt.autoSkip = false;
gx.define('tcbd001regcanadeducoes', false, function () {
   this.ServerClass =  "tcbd001regcanadeducoes" ;
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
   this.Valid_Cbd001regcanadeducoescbdempcod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001REGCANADEDUCOESCBDEMPCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001regcanadeducoescbdntfnum=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001REGCANADEDUCOESCBDNTFNUM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001regcanadeducoescbdntfser=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001REGCANADEDUCOESCBDNTFSER");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001regcanadeducoescbdndedu=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001regcanadeducoescbdndedu",["gx.O.A7168CBD001REGCANADEDUCOESCbdEmpCod", "gx.O.A7170CBD001REGCANADEDUCOESCbdNtfNum", "gx.O.A7171CBD001REGCANADEDUCOESCbdNtfSer", "gx.O.A7169CBD001REGCANADEDUCOESCbdnDedu", "gx.O.A7173CBD001REGCANADEDUCOESCbdxDed", "gx.num.urlDecimal(gx.O.A7172CBD001REGCANADEDUCOESCbdvDed,\'.\',\',\')"],["A7173CBD001REGCANADEDUCOESCbdxDed", "A7172CBD001REGCANADEDUCOESCbdvDed", "Gx_mode", "Z7168CBD001REGCANADEDUCOESCbdEmpCod", "Z7170CBD001REGCANADEDUCOESCbdNtfNum", "Z7171CBD001REGCANADEDUCOESCbdNtfSer", "Z7169CBD001REGCANADEDUCOESCbdnDedu", "Z7173CBD001REGCANADEDUCOESCbdxDed", "Z7172CBD001REGCANADEDUCOESCbdvDed", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e119z539_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e129z539_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,39,41,44,46];
   this.GXLastCtrlId =46;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001regcanadeducoescbdempcod,isvalid:null,rgrid:[],fld:"CBD001REGCANADEDUCOESCBDEMPCOD",gxz:"Z7168CBD001REGCANADEDUCOESCbdEmpCod",gxold:"O7168CBD001REGCANADEDUCOESCbdEmpCod",gxvar:"A7168CBD001REGCANADEDUCOESCbdEmpCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7168CBD001REGCANADEDUCOESCbdEmpCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7168CBD001REGCANADEDUCOESCbdEmpCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001REGCANADEDUCOESCBDEMPCOD",gx.O.A7168CBD001REGCANADEDUCOESCbdEmpCod,0)},c2v:function(){gx.O.A7168CBD001REGCANADEDUCOESCbdEmpCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001REGCANADEDUCOESCBDEMPCOD",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001regcanadeducoescbdntfnum,isvalid:null,rgrid:[],fld:"CBD001REGCANADEDUCOESCBDNTFNUM",gxz:"Z7170CBD001REGCANADEDUCOESCbdNtfNum",gxold:"O7170CBD001REGCANADEDUCOESCbdNtfNum",gxvar:"A7170CBD001REGCANADEDUCOESCbdNtfNum",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7170CBD001REGCANADEDUCOESCbdNtfNum=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7170CBD001REGCANADEDUCOESCbdNtfNum=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001REGCANADEDUCOESCBDNTFNUM",gx.O.A7170CBD001REGCANADEDUCOESCbdNtfNum,0)},c2v:function(){gx.O.A7170CBD001REGCANADEDUCOESCbdNtfNum=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001REGCANADEDUCOESCBDNTFNUM",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001regcanadeducoescbdntfser,isvalid:null,rgrid:[],fld:"CBD001REGCANADEDUCOESCBDNTFSER",gxz:"Z7171CBD001REGCANADEDUCOESCbdNtfSer",gxold:"O7171CBD001REGCANADEDUCOESCbdNtfSer",gxvar:"A7171CBD001REGCANADEDUCOESCbdNtfSer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7171CBD001REGCANADEDUCOESCbdNtfSer=Value},v2z:function(Value){gx.O.Z7171CBD001REGCANADEDUCOESCbdNtfSer=Value},v2c:function(){gx.fn.setControlValue("CBD001REGCANADEDUCOESCBDNTFSER",gx.O.A7171CBD001REGCANADEDUCOESCbdNtfSer,0)},c2v:function(){gx.O.A7171CBD001REGCANADEDUCOESCbdNtfSer=this.val()},val:function(){return gx.fn.getControlValue("CBD001REGCANADEDUCOESCBDNTFSER")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001regcanadeducoescbdndedu,isvalid:null,rgrid:[],fld:"CBD001REGCANADEDUCOESCBDNDEDU",gxz:"Z7169CBD001REGCANADEDUCOESCbdnDedu",gxold:"O7169CBD001REGCANADEDUCOESCbdnDedu",gxvar:"A7169CBD001REGCANADEDUCOESCbdnDedu",ucs:[],op:[46,41],ip:[46,41,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7169CBD001REGCANADEDUCOESCbdnDedu=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7169CBD001REGCANADEDUCOESCbdnDedu=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001REGCANADEDUCOESCBDNDEDU",gx.O.A7169CBD001REGCANADEDUCOESCbdnDedu,0)},c2v:function(){gx.O.A7169CBD001REGCANADEDUCOESCbdnDedu=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001REGCANADEDUCOESCBDNDEDU",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001REGCANADEDUCOESCBDXDED",gxz:"Z7173CBD001REGCANADEDUCOESCbdxDed",gxold:"O7173CBD001REGCANADEDUCOESCbdxDed",gxvar:"A7173CBD001REGCANADEDUCOESCbdxDed",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7173CBD001REGCANADEDUCOESCbdxDed=Value},v2z:function(Value){gx.O.Z7173CBD001REGCANADEDUCOESCbdxDed=Value},v2c:function(){gx.fn.setControlValue("CBD001REGCANADEDUCOESCBDXDED",gx.O.A7173CBD001REGCANADEDUCOESCbdxDed,0)},c2v:function(){gx.O.A7173CBD001REGCANADEDUCOESCbdxDed=this.val()},val:function(){return gx.fn.getControlValue("CBD001REGCANADEDUCOESCBDXDED")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001REGCANADEDUCOESCBDVDED",gxz:"Z7172CBD001REGCANADEDUCOESCbdvDed",gxold:"O7172CBD001REGCANADEDUCOESCbdvDed",gxvar:"A7172CBD001REGCANADEDUCOESCbdvDed",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7172CBD001REGCANADEDUCOESCbdvDed=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7172CBD001REGCANADEDUCOESCbdvDed=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001REGCANADEDUCOESCBDVDED",gx.O.A7172CBD001REGCANADEDUCOESCbdvDed,2,',')},c2v:function(){gx.O.A7172CBD001REGCANADEDUCOESCbdvDed=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001REGCANADEDUCOESCBDVDED",'.',',')},nac:gx.falseFn};
   this.A7168CBD001REGCANADEDUCOESCbdEmpCod = 0 ;
   this.Z7168CBD001REGCANADEDUCOESCbdEmpCod = 0 ;
   this.O7168CBD001REGCANADEDUCOESCbdEmpCod = 0 ;
   this.A7170CBD001REGCANADEDUCOESCbdNtfNum = 0 ;
   this.Z7170CBD001REGCANADEDUCOESCbdNtfNum = 0 ;
   this.O7170CBD001REGCANADEDUCOESCbdNtfNum = 0 ;
   this.A7171CBD001REGCANADEDUCOESCbdNtfSer = "" ;
   this.Z7171CBD001REGCANADEDUCOESCbdNtfSer = "" ;
   this.O7171CBD001REGCANADEDUCOESCbdNtfSer = "" ;
   this.A7169CBD001REGCANADEDUCOESCbdnDedu = 0 ;
   this.Z7169CBD001REGCANADEDUCOESCbdnDedu = 0 ;
   this.O7169CBD001REGCANADEDUCOESCbdnDedu = 0 ;
   this.A7173CBD001REGCANADEDUCOESCbdxDed = "" ;
   this.Z7173CBD001REGCANADEDUCOESCbdxDed = "" ;
   this.O7173CBD001REGCANADEDUCOESCbdxDed = "" ;
   this.A7172CBD001REGCANADEDUCOESCbdvDed = 0 ;
   this.Z7172CBD001REGCANADEDUCOESCbdvDed = 0 ;
   this.O7172CBD001REGCANADEDUCOESCbdvDed = 0 ;
   this.A7168CBD001REGCANADEDUCOESCbdEmpCod = 0 ;
   this.A7170CBD001REGCANADEDUCOESCbdNtfNum = 0 ;
   this.A7171CBD001REGCANADEDUCOESCbdNtfSer = "" ;
   this.A7169CBD001REGCANADEDUCOESCbdnDedu = 0 ;
   this.A7173CBD001REGCANADEDUCOESCbdxDed = "" ;
   this.A7172CBD001REGCANADEDUCOESCbdvDed = 0 ;
   this.Events = {"e119z539_client": ["ENTER", true] ,"e129z539_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001regcanadeducoes());
