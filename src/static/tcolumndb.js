/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:47.14
*/
gx.evt.autoSkip = false;
gx.define('tcolumndb', false, function () {
   this.ServerClass =  "tcolumndb" ;
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
   this.Valid_Columndbschema=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COLUMNDBSCHEMA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Columndbtable=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COLUMNDBTABLE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Columndbname=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Columndbname",["gx.O.A9830ColumnDBSchema", "gx.O.A9831ColumnDBTable", "gx.O.A9832ColumnDBName", "gx.O.A9853ColumnDBDataType", "gx.O.A9833ColumnDBLength", "gx.O.A9854ColumnDBNumericPrecision", "gx.O.A9855ColumnDBNumericScale"],["A9853ColumnDBDataType", "A9833ColumnDBLength", "A9854ColumnDBNumericPrecision", "A9855ColumnDBNumericScale", "Gx_mode", "Z9830ColumnDBSchema", "Z9831ColumnDBTable", "Z9832ColumnDBName", "Z9853ColumnDBDataType", "Z9833ColumnDBLength", "Z9854ColumnDBNumericPrecision", "Z9855ColumnDBNumericScale", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11e0725_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12e0725_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69];
   this.GXLastCtrlId =69;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKCOLUMNDBSCHEMA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Columndbschema,isvalid:null,rgrid:[],fld:"COLUMNDBSCHEMA",gxz:"Z9830ColumnDBSchema",gxold:"O9830ColumnDBSchema",gxvar:"A9830ColumnDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9830ColumnDBSchema=Value},v2z:function(Value){gx.O.Z9830ColumnDBSchema=Value},v2c:function(){gx.fn.setControlValue("COLUMNDBSCHEMA",gx.O.A9830ColumnDBSchema,0)},c2v:function(){gx.O.A9830ColumnDBSchema=this.val()},val:function(){return gx.fn.getControlValue("COLUMNDBSCHEMA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCOLUMNDBTABLE", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Columndbtable,isvalid:null,rgrid:[],fld:"COLUMNDBTABLE",gxz:"Z9831ColumnDBTable",gxold:"O9831ColumnDBTable",gxvar:"A9831ColumnDBTable",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9831ColumnDBTable=Value},v2z:function(Value){gx.O.Z9831ColumnDBTable=Value},v2c:function(){gx.fn.setControlValue("COLUMNDBTABLE",gx.O.A9831ColumnDBTable,0)},c2v:function(){gx.O.A9831ColumnDBTable=this.val()},val:function(){return gx.fn.getControlValue("COLUMNDBTABLE")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKCOLUMNDBNAME", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Columndbname,isvalid:null,rgrid:[],fld:"COLUMNDBNAME",gxz:"Z9832ColumnDBName",gxold:"O9832ColumnDBName",gxvar:"A9832ColumnDBName",ucs:[],op:[69,64,59,54],ip:[69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9832ColumnDBName=Value},v2z:function(Value){gx.O.Z9832ColumnDBName=Value},v2c:function(){gx.fn.setControlValue("COLUMNDBNAME",gx.O.A9832ColumnDBName,0)},c2v:function(){gx.O.A9832ColumnDBName=this.val()},val:function(){return gx.fn.getControlValue("COLUMNDBNAME")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKCOLUMNDBDATATYPE", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"COLUMNDBDATATYPE",gxz:"Z9853ColumnDBDataType",gxold:"O9853ColumnDBDataType",gxvar:"A9853ColumnDBDataType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9853ColumnDBDataType=Value},v2z:function(Value){gx.O.Z9853ColumnDBDataType=Value},v2c:function(){gx.fn.setControlValue("COLUMNDBDATATYPE",gx.O.A9853ColumnDBDataType,0)},c2v:function(){gx.O.A9853ColumnDBDataType=this.val()},val:function(){return gx.fn.getControlValue("COLUMNDBDATATYPE")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKCOLUMNDBLENGTH", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"COLUMNDBLENGTH",gxz:"Z9833ColumnDBLength",gxold:"O9833ColumnDBLength",gxvar:"A9833ColumnDBLength",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9833ColumnDBLength=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9833ColumnDBLength=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("COLUMNDBLENGTH",gx.O.A9833ColumnDBLength,0)},c2v:function(){gx.O.A9833ColumnDBLength=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("COLUMNDBLENGTH",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKCOLUMNDBNUMERICPRECISION", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"COLUMNDBNUMERICPRECISION",gxz:"Z9854ColumnDBNumericPrecision",gxold:"O9854ColumnDBNumericPrecision",gxvar:"A9854ColumnDBNumericPrecision",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9854ColumnDBNumericPrecision=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9854ColumnDBNumericPrecision=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("COLUMNDBNUMERICPRECISION",gx.O.A9854ColumnDBNumericPrecision,0)},c2v:function(){gx.O.A9854ColumnDBNumericPrecision=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("COLUMNDBNUMERICPRECISION",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKCOLUMNDBNUMERICSCALE", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"COLUMNDBNUMERICSCALE",gxz:"Z9855ColumnDBNumericScale",gxold:"O9855ColumnDBNumericScale",gxvar:"A9855ColumnDBNumericScale",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9855ColumnDBNumericScale=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9855ColumnDBNumericScale=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("COLUMNDBNUMERICSCALE",gx.O.A9855ColumnDBNumericScale,0)},c2v:function(){gx.O.A9855ColumnDBNumericScale=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("COLUMNDBNUMERICSCALE",'.')},nac:gx.falseFn};
   this.A9830ColumnDBSchema = "" ;
   this.Z9830ColumnDBSchema = "" ;
   this.O9830ColumnDBSchema = "" ;
   this.A9831ColumnDBTable = "" ;
   this.Z9831ColumnDBTable = "" ;
   this.O9831ColumnDBTable = "" ;
   this.A9832ColumnDBName = "" ;
   this.Z9832ColumnDBName = "" ;
   this.O9832ColumnDBName = "" ;
   this.A9853ColumnDBDataType = "" ;
   this.Z9853ColumnDBDataType = "" ;
   this.O9853ColumnDBDataType = "" ;
   this.A9833ColumnDBLength = 0 ;
   this.Z9833ColumnDBLength = 0 ;
   this.O9833ColumnDBLength = 0 ;
   this.A9854ColumnDBNumericPrecision = 0 ;
   this.Z9854ColumnDBNumericPrecision = 0 ;
   this.O9854ColumnDBNumericPrecision = 0 ;
   this.A9855ColumnDBNumericScale = 0 ;
   this.Z9855ColumnDBNumericScale = 0 ;
   this.O9855ColumnDBNumericScale = 0 ;
   this.A9830ColumnDBSchema = "" ;
   this.A9831ColumnDBTable = "" ;
   this.A9832ColumnDBName = "" ;
   this.A9853ColumnDBDataType = "" ;
   this.A9833ColumnDBLength = 0 ;
   this.A9854ColumnDBNumericPrecision = 0 ;
   this.A9855ColumnDBNumericScale = 0 ;
   this.Events = {"e11e0725_client": ["ENTER", true] ,"e12e0725_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcolumndb());
