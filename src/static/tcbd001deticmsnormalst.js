/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:25.93
*/
gx.evt.autoSkip = false;
gx.define('tcbd001deticmsnormalst', false, function () {
   this.ServerClass =  "tcbd001deticmsnormalst" ;
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
   this.Valid_Cbd001deticmsnormalstcbdempcod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETICMSNORMALSTCBDEMPCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001deticmsnormalstcbdntfser=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETICMSNORMALSTCBDNTFSER");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001deticmsnormalstcbdntfnum=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETICMSNORMALSTCBDNTFNUM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001deticmsnormalstcbdnitem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETICMSNORMALSTCBDNITEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001deticmsnormalstcbdcst=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001deticmsnormalstcbdcst",["gx.O.A7070CBD001DETICMSNORMALSTCbdEmpCod", "gx.O.A7076CBD001DETICMSNORMALSTCbdNtfSer", "gx.O.A7075CBD001DETICMSNORMALSTCbdNtfNum", "gx.O.A7074CBD001DETICMSNORMALSTCbdnItem", "gx.O.A7069CBD001DETICMSNORMALSTCbdCST", "gx.O.A7077CBD001DETICMSNORMALSTCbdorig", "gx.O.A7071CBD001DETICMSNORMALSTCbdmodBC", "gx.num.urlDecimal(gx.O.A7082CBD001DETICMSNORMALSTCbdvBC,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7078CBD001DETICMSNORMALSTCbdpICMS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7085CBD001DETICMSNORMALSTCbdvICMS_,\'.\',\',\')", "gx.O.A7072CBD001DETICMSNORMALSTCbdmodBCS", "gx.num.urlDecimal(gx.O.A7080CBD001DETICMSNORMALSTCbdpMVAST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7081CBD001DETICMSNORMALSTCbdpRedBC,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7083CBD001DETICMSNORMALSTCbdvBCST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7079CBD001DETICMSNORMALSTCbdpICMSS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7086CBD001DETICMSNORMALSTCbdvICMSS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7093CBD001DETICMSNORMALSTCbdpRdBC,\'.\',\',\')", "gx.O.A7073CBD001DETICMSNORMALSTCbdmotDes", "gx.num.urlDecimal(gx.O.A7084CBD001DETICMSNORMALSTCbdvBCSTR,\'.\',\',\')", "gx.O.A7089CBD001DETICMSNORMALSTCbdvICMST", "gx.num.urlDecimal(gx.O.A7087CBD001DETICMSNORMALSTCbdpBCOp,\'.\',\',\')", "gx.O.A7092CBD001DETICMSNORMALSTCbdUFST", "gx.O.A7091CBD001DETICMSNORMALSTCbdvBSTDs", "gx.O.A7088CBD001DETICMSNORMALSTCbdvICSTD", "gx.num.urlDecimal(gx.O.A7094CBD001DETICMSNORMALSTCbdpCredS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7090CBD001DETICMSNORMALSTCbdvCredI,\'.\',\',\')"],["A7077CBD001DETICMSNORMALSTCbdorig", "A7071CBD001DETICMSNORMALSTCbdmodBC", "A7082CBD001DETICMSNORMALSTCbdvBC", "A7078CBD001DETICMSNORMALSTCbdpICMS", "A7085CBD001DETICMSNORMALSTCbdvICMS_", "A7072CBD001DETICMSNORMALSTCbdmodBCS", "A7080CBD001DETICMSNORMALSTCbdpMVAST", "A7081CBD001DETICMSNORMALSTCbdpRedBC", "A7083CBD001DETICMSNORMALSTCbdvBCST", "A7079CBD001DETICMSNORMALSTCbdpICMSS", "A7086CBD001DETICMSNORMALSTCbdvICMSS", "A7093CBD001DETICMSNORMALSTCbdpRdBC", "A7073CBD001DETICMSNORMALSTCbdmotDes", "A7084CBD001DETICMSNORMALSTCbdvBCSTR", "A7089CBD001DETICMSNORMALSTCbdvICMST", "A7087CBD001DETICMSNORMALSTCbdpBCOp", "A7092CBD001DETICMSNORMALSTCbdUFST", "A7091CBD001DETICMSNORMALSTCbdvBSTDs", "A7088CBD001DETICMSNORMALSTCbdvICSTD", "A7094CBD001DETICMSNORMALSTCbdpCredS", "A7090CBD001DETICMSNORMALSTCbdvCredI", "Gx_mode", "Z7070CBD001DETICMSNORMALSTCbdEmpCod", "Z7076CBD001DETICMSNORMALSTCbdNtfSer", "Z7075CBD001DETICMSNORMALSTCbdNtfNum", "Z7074CBD001DETICMSNORMALSTCbdnItem", "Z7069CBD001DETICMSNORMALSTCbdCST", "Z7077CBD001DETICMSNORMALSTCbdorig", "Z7071CBD001DETICMSNORMALSTCbdmodBC", "Z7082CBD001DETICMSNORMALSTCbdvBC", "Z7078CBD001DETICMSNORMALSTCbdpICMS", "Z7085CBD001DETICMSNORMALSTCbdvICMS_", "Z7072CBD001DETICMSNORMALSTCbdmodBCS", "Z7080CBD001DETICMSNORMALSTCbdpMVAST", "Z7081CBD001DETICMSNORMALSTCbdpRedBC", "Z7083CBD001DETICMSNORMALSTCbdvBCST", "Z7079CBD001DETICMSNORMALSTCbdpICMSS", "Z7086CBD001DETICMSNORMALSTCbdvICMSS", "Z7093CBD001DETICMSNORMALSTCbdpRdBC", "Z7073CBD001DETICMSNORMALSTCbdmotDes", "Z7084CBD001DETICMSNORMALSTCbdvBCSTR", "Z7089CBD001DETICMSNORMALSTCbdvICMST", "Z7087CBD001DETICMSNORMALSTCbdpBCOp", "Z7092CBD001DETICMSNORMALSTCbdUFST", "Z7091CBD001DETICMSNORMALSTCbdvBSTDs", "Z7088CBD001DETICMSNORMALSTCbdvICSTD", "Z7094CBD001DETICMSNORMALSTCbdpCredS", "Z7090CBD001DETICMSNORMALSTCbdvCredI", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11a9549_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12a9549_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,44,46,49,51,54,56,59,61,64,66,69,71,74,76,79,81,84,86,89,91,94,96,99,101,104,106,109,111,114,116,119,121,124,126,129,131,134,136,139,141,144,146];
   this.GXLastCtrlId =146;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001deticmsnormalstcbdempcod,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDEMPCOD",gxz:"Z7070CBD001DETICMSNORMALSTCbdEmpCod",gxold:"O7070CBD001DETICMSNORMALSTCbdEmpCod",gxvar:"A7070CBD001DETICMSNORMALSTCbdEmpCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7070CBD001DETICMSNORMALSTCbdEmpCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7070CBD001DETICMSNORMALSTCbdEmpCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDEMPCOD",gx.O.A7070CBD001DETICMSNORMALSTCbdEmpCod,0)},c2v:function(){gx.O.A7070CBD001DETICMSNORMALSTCbdEmpCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETICMSNORMALSTCBDEMPCOD",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001deticmsnormalstcbdntfser,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDNTFSER",gxz:"Z7076CBD001DETICMSNORMALSTCbdNtfSer",gxold:"O7076CBD001DETICMSNORMALSTCbdNtfSer",gxvar:"A7076CBD001DETICMSNORMALSTCbdNtfSer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7076CBD001DETICMSNORMALSTCbdNtfSer=Value},v2z:function(Value){gx.O.Z7076CBD001DETICMSNORMALSTCbdNtfSer=Value},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDNTFSER",gx.O.A7076CBD001DETICMSNORMALSTCbdNtfSer,0)},c2v:function(){gx.O.A7076CBD001DETICMSNORMALSTCbdNtfSer=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETICMSNORMALSTCBDNTFSER")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001deticmsnormalstcbdntfnum,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDNTFNUM",gxz:"Z7075CBD001DETICMSNORMALSTCbdNtfNum",gxold:"O7075CBD001DETICMSNORMALSTCbdNtfNum",gxvar:"A7075CBD001DETICMSNORMALSTCbdNtfNum",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7075CBD001DETICMSNORMALSTCbdNtfNum=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7075CBD001DETICMSNORMALSTCbdNtfNum=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDNTFNUM",gx.O.A7075CBD001DETICMSNORMALSTCbdNtfNum,0)},c2v:function(){gx.O.A7075CBD001DETICMSNORMALSTCbdNtfNum=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETICMSNORMALSTCBDNTFNUM",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001deticmsnormalstcbdnitem,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDNITEM",gxz:"Z7074CBD001DETICMSNORMALSTCbdnItem",gxold:"O7074CBD001DETICMSNORMALSTCbdnItem",gxvar:"A7074CBD001DETICMSNORMALSTCbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7074CBD001DETICMSNORMALSTCbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7074CBD001DETICMSNORMALSTCbdnItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDNITEM",gx.O.A7074CBD001DETICMSNORMALSTCbdnItem,0)},c2v:function(){gx.O.A7074CBD001DETICMSNORMALSTCbdnItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETICMSNORMALSTCBDNITEM",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001deticmsnormalstcbdcst,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDCST",gxz:"Z7069CBD001DETICMSNORMALSTCbdCST",gxold:"O7069CBD001DETICMSNORMALSTCbdCST",gxvar:"A7069CBD001DETICMSNORMALSTCbdCST",ucs:[],op:[146,141,136,131,126,121,116,111,106,101,96,91,86,81,76,71,66,61,56,51,46],ip:[146,141,136,131,126,121,116,111,106,101,96,91,86,81,76,71,66,61,56,51,46,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7069CBD001DETICMSNORMALSTCbdCST=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7069CBD001DETICMSNORMALSTCbdCST=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDCST",gx.O.A7069CBD001DETICMSNORMALSTCbdCST,0)},c2v:function(){gx.O.A7069CBD001DETICMSNORMALSTCbdCST=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETICMSNORMALSTCBDCST",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDORIG",gxz:"Z7077CBD001DETICMSNORMALSTCbdorig",gxold:"O7077CBD001DETICMSNORMALSTCbdorig",gxvar:"A7077CBD001DETICMSNORMALSTCbdorig",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7077CBD001DETICMSNORMALSTCbdorig=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7077CBD001DETICMSNORMALSTCbdorig=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDORIG",gx.O.A7077CBD001DETICMSNORMALSTCbdorig,0)},c2v:function(){gx.O.A7077CBD001DETICMSNORMALSTCbdorig=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETICMSNORMALSTCBDORIG",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDMODBC",gxz:"Z7071CBD001DETICMSNORMALSTCbdmodBC",gxold:"O7071CBD001DETICMSNORMALSTCbdmodBC",gxvar:"A7071CBD001DETICMSNORMALSTCbdmodBC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7071CBD001DETICMSNORMALSTCbdmodBC=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7071CBD001DETICMSNORMALSTCbdmodBC=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDMODBC",gx.O.A7071CBD001DETICMSNORMALSTCbdmodBC,0)},c2v:function(){gx.O.A7071CBD001DETICMSNORMALSTCbdmodBC=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETICMSNORMALSTCBDMODBC",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDVBC",gxz:"Z7082CBD001DETICMSNORMALSTCbdvBC",gxold:"O7082CBD001DETICMSNORMALSTCbdvBC",gxvar:"A7082CBD001DETICMSNORMALSTCbdvBC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7082CBD001DETICMSNORMALSTCbdvBC=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7082CBD001DETICMSNORMALSTCbdvBC=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDVBC",gx.O.A7082CBD001DETICMSNORMALSTCbdvBC,2,',')},c2v:function(){gx.O.A7082CBD001DETICMSNORMALSTCbdvBC=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDVBC",'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDPICMS",gxz:"Z7078CBD001DETICMSNORMALSTCbdpICMS",gxold:"O7078CBD001DETICMSNORMALSTCbdpICMS",gxvar:"A7078CBD001DETICMSNORMALSTCbdpICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7078CBD001DETICMSNORMALSTCbdpICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7078CBD001DETICMSNORMALSTCbdpICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDPICMS",gx.O.A7078CBD001DETICMSNORMALSTCbdpICMS,2,',')},c2v:function(){gx.O.A7078CBD001DETICMSNORMALSTCbdpICMS=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDPICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDVICMS_",gxz:"Z7085CBD001DETICMSNORMALSTCbdvICMS_",gxold:"O7085CBD001DETICMSNORMALSTCbdvICMS_",gxvar:"A7085CBD001DETICMSNORMALSTCbdvICMS_",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7085CBD001DETICMSNORMALSTCbdvICMS_=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7085CBD001DETICMSNORMALSTCbdvICMS_=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDVICMS_",gx.O.A7085CBD001DETICMSNORMALSTCbdvICMS_,2,',')},c2v:function(){gx.O.A7085CBD001DETICMSNORMALSTCbdvICMS_=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDVICMS_",'.',',')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDMODBCS",gxz:"Z7072CBD001DETICMSNORMALSTCbdmodBCS",gxold:"O7072CBD001DETICMSNORMALSTCbdmodBCS",gxvar:"A7072CBD001DETICMSNORMALSTCbdmodBCS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7072CBD001DETICMSNORMALSTCbdmodBCS=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7072CBD001DETICMSNORMALSTCbdmodBCS=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDMODBCS",gx.O.A7072CBD001DETICMSNORMALSTCbdmodBCS,0)},c2v:function(){gx.O.A7072CBD001DETICMSNORMALSTCbdmodBCS=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETICMSNORMALSTCBDMODBCS",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDPMVAST",gxz:"Z7080CBD001DETICMSNORMALSTCbdpMVAST",gxold:"O7080CBD001DETICMSNORMALSTCbdpMVAST",gxvar:"A7080CBD001DETICMSNORMALSTCbdpMVAST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7080CBD001DETICMSNORMALSTCbdpMVAST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7080CBD001DETICMSNORMALSTCbdpMVAST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDPMVAST",gx.O.A7080CBD001DETICMSNORMALSTCbdpMVAST,2,',')},c2v:function(){gx.O.A7080CBD001DETICMSNORMALSTCbdpMVAST=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDPMVAST",'.',',')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDPREDBC",gxz:"Z7081CBD001DETICMSNORMALSTCbdpRedBC",gxold:"O7081CBD001DETICMSNORMALSTCbdpRedBC",gxvar:"A7081CBD001DETICMSNORMALSTCbdpRedBC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7081CBD001DETICMSNORMALSTCbdpRedBC=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7081CBD001DETICMSNORMALSTCbdpRedBC=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDPREDBC",gx.O.A7081CBD001DETICMSNORMALSTCbdpRedBC,2,',')},c2v:function(){gx.O.A7081CBD001DETICMSNORMALSTCbdpRedBC=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDPREDBC",'.',',')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDVBCST",gxz:"Z7083CBD001DETICMSNORMALSTCbdvBCST",gxold:"O7083CBD001DETICMSNORMALSTCbdvBCST",gxvar:"A7083CBD001DETICMSNORMALSTCbdvBCST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7083CBD001DETICMSNORMALSTCbdvBCST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7083CBD001DETICMSNORMALSTCbdvBCST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDVBCST",gx.O.A7083CBD001DETICMSNORMALSTCbdvBCST,2,',')},c2v:function(){gx.O.A7083CBD001DETICMSNORMALSTCbdvBCST=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDVBCST",'.',',')},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDPICMSS",gxz:"Z7079CBD001DETICMSNORMALSTCbdpICMSS",gxold:"O7079CBD001DETICMSNORMALSTCbdpICMSS",gxvar:"A7079CBD001DETICMSNORMALSTCbdpICMSS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7079CBD001DETICMSNORMALSTCbdpICMSS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7079CBD001DETICMSNORMALSTCbdpICMSS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDPICMSS",gx.O.A7079CBD001DETICMSNORMALSTCbdpICMSS,2,',')},c2v:function(){gx.O.A7079CBD001DETICMSNORMALSTCbdpICMSS=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDPICMSS",'.',',')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDVICMSS",gxz:"Z7086CBD001DETICMSNORMALSTCbdvICMSS",gxold:"O7086CBD001DETICMSNORMALSTCbdvICMSS",gxvar:"A7086CBD001DETICMSNORMALSTCbdvICMSS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7086CBD001DETICMSNORMALSTCbdvICMSS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7086CBD001DETICMSNORMALSTCbdvICMSS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDVICMSS",gx.O.A7086CBD001DETICMSNORMALSTCbdvICMSS,2,',')},c2v:function(){gx.O.A7086CBD001DETICMSNORMALSTCbdvICMSS=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDVICMSS",'.',',')},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDPRDBC",gxz:"Z7093CBD001DETICMSNORMALSTCbdpRdBC",gxold:"O7093CBD001DETICMSNORMALSTCbdpRdBC",gxvar:"A7093CBD001DETICMSNORMALSTCbdpRdBC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7093CBD001DETICMSNORMALSTCbdpRdBC=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7093CBD001DETICMSNORMALSTCbdpRdBC=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDPRDBC",gx.O.A7093CBD001DETICMSNORMALSTCbdpRdBC,2,',')},c2v:function(){gx.O.A7093CBD001DETICMSNORMALSTCbdpRdBC=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDPRDBC",'.',',')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDMOTDES",gxz:"Z7073CBD001DETICMSNORMALSTCbdmotDes",gxold:"O7073CBD001DETICMSNORMALSTCbdmotDes",gxvar:"A7073CBD001DETICMSNORMALSTCbdmotDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7073CBD001DETICMSNORMALSTCbdmotDes=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7073CBD001DETICMSNORMALSTCbdmotDes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDMOTDES",gx.O.A7073CBD001DETICMSNORMALSTCbdmotDes,0)},c2v:function(){gx.O.A7073CBD001DETICMSNORMALSTCbdmotDes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETICMSNORMALSTCBDMOTDES",'.')},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDVBCSTR",gxz:"Z7084CBD001DETICMSNORMALSTCbdvBCSTR",gxold:"O7084CBD001DETICMSNORMALSTCbdvBCSTR",gxvar:"A7084CBD001DETICMSNORMALSTCbdvBCSTR",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7084CBD001DETICMSNORMALSTCbdvBCSTR=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7084CBD001DETICMSNORMALSTCbdvBCSTR=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDVBCSTR",gx.O.A7084CBD001DETICMSNORMALSTCbdvBCSTR,2,',')},c2v:function(){gx.O.A7084CBD001DETICMSNORMALSTCbdvBCSTR=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDVBCSTR",'.',',')},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDVICMST",gxz:"Z7089CBD001DETICMSNORMALSTCbdvICMST",gxold:"O7089CBD001DETICMSNORMALSTCbdvICMST",gxvar:"A7089CBD001DETICMSNORMALSTCbdvICMST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7089CBD001DETICMSNORMALSTCbdvICMST=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7089CBD001DETICMSNORMALSTCbdvICMST=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDVICMST",gx.O.A7089CBD001DETICMSNORMALSTCbdvICMST,0)},c2v:function(){gx.O.A7089CBD001DETICMSNORMALSTCbdvICMST=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETICMSNORMALSTCBDVICMST",'.')},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDPBCOP",gxz:"Z7087CBD001DETICMSNORMALSTCbdpBCOp",gxold:"O7087CBD001DETICMSNORMALSTCbdpBCOp",gxvar:"A7087CBD001DETICMSNORMALSTCbdpBCOp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7087CBD001DETICMSNORMALSTCbdpBCOp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7087CBD001DETICMSNORMALSTCbdpBCOp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDPBCOP",gx.O.A7087CBD001DETICMSNORMALSTCbdpBCOp,2,',')},c2v:function(){gx.O.A7087CBD001DETICMSNORMALSTCbdpBCOp=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDPBCOP",'.',',')},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDUFST",gxz:"Z7092CBD001DETICMSNORMALSTCbdUFST",gxold:"O7092CBD001DETICMSNORMALSTCbdUFST",gxvar:"A7092CBD001DETICMSNORMALSTCbdUFST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7092CBD001DETICMSNORMALSTCbdUFST=Value},v2z:function(Value){gx.O.Z7092CBD001DETICMSNORMALSTCbdUFST=Value},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDUFST",gx.O.A7092CBD001DETICMSNORMALSTCbdUFST,0)},c2v:function(){gx.O.A7092CBD001DETICMSNORMALSTCbdUFST=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETICMSNORMALSTCBDUFST")},nac:gx.falseFn};
   GXValidFnc[129]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[131]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDVBSTDS",gxz:"Z7091CBD001DETICMSNORMALSTCbdvBSTDs",gxold:"O7091CBD001DETICMSNORMALSTCbdvBSTDs",gxvar:"A7091CBD001DETICMSNORMALSTCbdvBSTDs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7091CBD001DETICMSNORMALSTCbdvBSTDs=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7091CBD001DETICMSNORMALSTCbdvBSTDs=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDVBSTDS",gx.O.A7091CBD001DETICMSNORMALSTCbdvBSTDs,0)},c2v:function(){gx.O.A7091CBD001DETICMSNORMALSTCbdvBSTDs=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETICMSNORMALSTCBDVBSTDS",'.')},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[136]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDVICSTD",gxz:"Z7088CBD001DETICMSNORMALSTCbdvICSTD",gxold:"O7088CBD001DETICMSNORMALSTCbdvICSTD",gxvar:"A7088CBD001DETICMSNORMALSTCbdvICSTD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7088CBD001DETICMSNORMALSTCbdvICSTD=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7088CBD001DETICMSNORMALSTCbdvICSTD=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETICMSNORMALSTCBDVICSTD",gx.O.A7088CBD001DETICMSNORMALSTCbdvICSTD,0)},c2v:function(){gx.O.A7088CBD001DETICMSNORMALSTCbdvICSTD=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETICMSNORMALSTCBDVICSTD",'.')},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDPCREDS",gxz:"Z7094CBD001DETICMSNORMALSTCbdpCredS",gxold:"O7094CBD001DETICMSNORMALSTCbdpCredS",gxvar:"A7094CBD001DETICMSNORMALSTCbdpCredS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7094CBD001DETICMSNORMALSTCbdpCredS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7094CBD001DETICMSNORMALSTCbdpCredS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDPCREDS",gx.O.A7094CBD001DETICMSNORMALSTCbdpCredS,2,',')},c2v:function(){gx.O.A7094CBD001DETICMSNORMALSTCbdpCredS=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDPCREDS",'.',',')},nac:gx.falseFn};
   GXValidFnc[144]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[146]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDVCREDI",gxz:"Z7090CBD001DETICMSNORMALSTCbdvCredI",gxold:"O7090CBD001DETICMSNORMALSTCbdvCredI",gxvar:"A7090CBD001DETICMSNORMALSTCbdvCredI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7090CBD001DETICMSNORMALSTCbdvCredI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7090CBD001DETICMSNORMALSTCbdvCredI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETICMSNORMALSTCBDVCREDI",gx.O.A7090CBD001DETICMSNORMALSTCbdvCredI,2,',')},c2v:function(){gx.O.A7090CBD001DETICMSNORMALSTCbdvCredI=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETICMSNORMALSTCBDVCREDI",'.',',')},nac:gx.falseFn};
   this.A7070CBD001DETICMSNORMALSTCbdEmpCod = 0 ;
   this.Z7070CBD001DETICMSNORMALSTCbdEmpCod = 0 ;
   this.O7070CBD001DETICMSNORMALSTCbdEmpCod = 0 ;
   this.A7076CBD001DETICMSNORMALSTCbdNtfSer = "" ;
   this.Z7076CBD001DETICMSNORMALSTCbdNtfSer = "" ;
   this.O7076CBD001DETICMSNORMALSTCbdNtfSer = "" ;
   this.A7075CBD001DETICMSNORMALSTCbdNtfNum = 0 ;
   this.Z7075CBD001DETICMSNORMALSTCbdNtfNum = 0 ;
   this.O7075CBD001DETICMSNORMALSTCbdNtfNum = 0 ;
   this.A7074CBD001DETICMSNORMALSTCbdnItem = 0 ;
   this.Z7074CBD001DETICMSNORMALSTCbdnItem = 0 ;
   this.O7074CBD001DETICMSNORMALSTCbdnItem = 0 ;
   this.A7069CBD001DETICMSNORMALSTCbdCST = 0 ;
   this.Z7069CBD001DETICMSNORMALSTCbdCST = 0 ;
   this.O7069CBD001DETICMSNORMALSTCbdCST = 0 ;
   this.A7077CBD001DETICMSNORMALSTCbdorig = 0 ;
   this.Z7077CBD001DETICMSNORMALSTCbdorig = 0 ;
   this.O7077CBD001DETICMSNORMALSTCbdorig = 0 ;
   this.A7071CBD001DETICMSNORMALSTCbdmodBC = 0 ;
   this.Z7071CBD001DETICMSNORMALSTCbdmodBC = 0 ;
   this.O7071CBD001DETICMSNORMALSTCbdmodBC = 0 ;
   this.A7082CBD001DETICMSNORMALSTCbdvBC = 0 ;
   this.Z7082CBD001DETICMSNORMALSTCbdvBC = 0 ;
   this.O7082CBD001DETICMSNORMALSTCbdvBC = 0 ;
   this.A7078CBD001DETICMSNORMALSTCbdpICMS = 0 ;
   this.Z7078CBD001DETICMSNORMALSTCbdpICMS = 0 ;
   this.O7078CBD001DETICMSNORMALSTCbdpICMS = 0 ;
   this.A7085CBD001DETICMSNORMALSTCbdvICMS_ = 0 ;
   this.Z7085CBD001DETICMSNORMALSTCbdvICMS_ = 0 ;
   this.O7085CBD001DETICMSNORMALSTCbdvICMS_ = 0 ;
   this.A7072CBD001DETICMSNORMALSTCbdmodBCS = 0 ;
   this.Z7072CBD001DETICMSNORMALSTCbdmodBCS = 0 ;
   this.O7072CBD001DETICMSNORMALSTCbdmodBCS = 0 ;
   this.A7080CBD001DETICMSNORMALSTCbdpMVAST = 0 ;
   this.Z7080CBD001DETICMSNORMALSTCbdpMVAST = 0 ;
   this.O7080CBD001DETICMSNORMALSTCbdpMVAST = 0 ;
   this.A7081CBD001DETICMSNORMALSTCbdpRedBC = 0 ;
   this.Z7081CBD001DETICMSNORMALSTCbdpRedBC = 0 ;
   this.O7081CBD001DETICMSNORMALSTCbdpRedBC = 0 ;
   this.A7083CBD001DETICMSNORMALSTCbdvBCST = 0 ;
   this.Z7083CBD001DETICMSNORMALSTCbdvBCST = 0 ;
   this.O7083CBD001DETICMSNORMALSTCbdvBCST = 0 ;
   this.A7079CBD001DETICMSNORMALSTCbdpICMSS = 0 ;
   this.Z7079CBD001DETICMSNORMALSTCbdpICMSS = 0 ;
   this.O7079CBD001DETICMSNORMALSTCbdpICMSS = 0 ;
   this.A7086CBD001DETICMSNORMALSTCbdvICMSS = 0 ;
   this.Z7086CBD001DETICMSNORMALSTCbdvICMSS = 0 ;
   this.O7086CBD001DETICMSNORMALSTCbdvICMSS = 0 ;
   this.A7093CBD001DETICMSNORMALSTCbdpRdBC = 0 ;
   this.Z7093CBD001DETICMSNORMALSTCbdpRdBC = 0 ;
   this.O7093CBD001DETICMSNORMALSTCbdpRdBC = 0 ;
   this.A7073CBD001DETICMSNORMALSTCbdmotDes = 0 ;
   this.Z7073CBD001DETICMSNORMALSTCbdmotDes = 0 ;
   this.O7073CBD001DETICMSNORMALSTCbdmotDes = 0 ;
   this.A7084CBD001DETICMSNORMALSTCbdvBCSTR = 0 ;
   this.Z7084CBD001DETICMSNORMALSTCbdvBCSTR = 0 ;
   this.O7084CBD001DETICMSNORMALSTCbdvBCSTR = 0 ;
   this.A7089CBD001DETICMSNORMALSTCbdvICMST = 0 ;
   this.Z7089CBD001DETICMSNORMALSTCbdvICMST = 0 ;
   this.O7089CBD001DETICMSNORMALSTCbdvICMST = 0 ;
   this.A7087CBD001DETICMSNORMALSTCbdpBCOp = 0 ;
   this.Z7087CBD001DETICMSNORMALSTCbdpBCOp = 0 ;
   this.O7087CBD001DETICMSNORMALSTCbdpBCOp = 0 ;
   this.A7092CBD001DETICMSNORMALSTCbdUFST = "" ;
   this.Z7092CBD001DETICMSNORMALSTCbdUFST = "" ;
   this.O7092CBD001DETICMSNORMALSTCbdUFST = "" ;
   this.A7091CBD001DETICMSNORMALSTCbdvBSTDs = 0 ;
   this.Z7091CBD001DETICMSNORMALSTCbdvBSTDs = 0 ;
   this.O7091CBD001DETICMSNORMALSTCbdvBSTDs = 0 ;
   this.A7088CBD001DETICMSNORMALSTCbdvICSTD = 0 ;
   this.Z7088CBD001DETICMSNORMALSTCbdvICSTD = 0 ;
   this.O7088CBD001DETICMSNORMALSTCbdvICSTD = 0 ;
   this.A7094CBD001DETICMSNORMALSTCbdpCredS = 0 ;
   this.Z7094CBD001DETICMSNORMALSTCbdpCredS = 0 ;
   this.O7094CBD001DETICMSNORMALSTCbdpCredS = 0 ;
   this.A7090CBD001DETICMSNORMALSTCbdvCredI = 0 ;
   this.Z7090CBD001DETICMSNORMALSTCbdvCredI = 0 ;
   this.O7090CBD001DETICMSNORMALSTCbdvCredI = 0 ;
   this.A7070CBD001DETICMSNORMALSTCbdEmpCod = 0 ;
   this.A7076CBD001DETICMSNORMALSTCbdNtfSer = "" ;
   this.A7075CBD001DETICMSNORMALSTCbdNtfNum = 0 ;
   this.A7074CBD001DETICMSNORMALSTCbdnItem = 0 ;
   this.A7069CBD001DETICMSNORMALSTCbdCST = 0 ;
   this.A7077CBD001DETICMSNORMALSTCbdorig = 0 ;
   this.A7071CBD001DETICMSNORMALSTCbdmodBC = 0 ;
   this.A7082CBD001DETICMSNORMALSTCbdvBC = 0 ;
   this.A7078CBD001DETICMSNORMALSTCbdpICMS = 0 ;
   this.A7085CBD001DETICMSNORMALSTCbdvICMS_ = 0 ;
   this.A7072CBD001DETICMSNORMALSTCbdmodBCS = 0 ;
   this.A7080CBD001DETICMSNORMALSTCbdpMVAST = 0 ;
   this.A7081CBD001DETICMSNORMALSTCbdpRedBC = 0 ;
   this.A7083CBD001DETICMSNORMALSTCbdvBCST = 0 ;
   this.A7079CBD001DETICMSNORMALSTCbdpICMSS = 0 ;
   this.A7086CBD001DETICMSNORMALSTCbdvICMSS = 0 ;
   this.A7093CBD001DETICMSNORMALSTCbdpRdBC = 0 ;
   this.A7073CBD001DETICMSNORMALSTCbdmotDes = 0 ;
   this.A7084CBD001DETICMSNORMALSTCbdvBCSTR = 0 ;
   this.A7089CBD001DETICMSNORMALSTCbdvICMST = 0 ;
   this.A7087CBD001DETICMSNORMALSTCbdpBCOp = 0 ;
   this.A7092CBD001DETICMSNORMALSTCbdUFST = "" ;
   this.A7091CBD001DETICMSNORMALSTCbdvBSTDs = 0 ;
   this.A7088CBD001DETICMSNORMALSTCbdvICSTD = 0 ;
   this.A7094CBD001DETICMSNORMALSTCbdpCredS = 0 ;
   this.A7090CBD001DETICMSNORMALSTCbdvCredI = 0 ;
   this.Events = {"e11a9549_client": ["ENTER", true] ,"e12a9549_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001deticmsnormalst());
