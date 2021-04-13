/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:57.91
*/
gx.evt.autoSkip = false;
gx.define('tindexdb', false, function () {
   this.ServerClass =  "tindexdb" ;
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
   this.Valid_Indexdbschema=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INDEXDBSCHEMA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Indexdbtable=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INDEXDBTABLE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Indexdbname=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Indexdbname",["gx.O.A9846IndexDBSchema", "gx.O.A9847IndexDBTable", "gx.O.A9848IndexDBName"],["Gx_mode", "Z9846IndexDBSchema", "Z9847IndexDBTable", "Z9848IndexDBName", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11e8733_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12e8733_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49];
   this.GXLastCtrlId =49;
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
   GXValidFnc[37]={fld:"TEXTBLOCKINDEXDBSCHEMA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Indexdbschema,isvalid:null,rgrid:[],fld:"INDEXDBSCHEMA",gxz:"Z9846IndexDBSchema",gxold:"O9846IndexDBSchema",gxvar:"A9846IndexDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9846IndexDBSchema=Value},v2z:function(Value){gx.O.Z9846IndexDBSchema=Value},v2c:function(){gx.fn.setControlValue("INDEXDBSCHEMA",gx.O.A9846IndexDBSchema,0)},c2v:function(){gx.O.A9846IndexDBSchema=this.val()},val:function(){return gx.fn.getControlValue("INDEXDBSCHEMA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKINDEXDBTABLE", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Indexdbtable,isvalid:null,rgrid:[],fld:"INDEXDBTABLE",gxz:"Z9847IndexDBTable",gxold:"O9847IndexDBTable",gxvar:"A9847IndexDBTable",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9847IndexDBTable=Value},v2z:function(Value){gx.O.Z9847IndexDBTable=Value},v2c:function(){gx.fn.setControlValue("INDEXDBTABLE",gx.O.A9847IndexDBTable,0)},c2v:function(){gx.O.A9847IndexDBTable=this.val()},val:function(){return gx.fn.getControlValue("INDEXDBTABLE")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKINDEXDBNAME", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Indexdbname,isvalid:null,rgrid:[],fld:"INDEXDBNAME",gxz:"Z9848IndexDBName",gxold:"O9848IndexDBName",gxvar:"A9848IndexDBName",ucs:[],op:[],ip:[49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9848IndexDBName=Value},v2z:function(Value){gx.O.Z9848IndexDBName=Value},v2c:function(){gx.fn.setControlValue("INDEXDBNAME",gx.O.A9848IndexDBName,0)},c2v:function(){gx.O.A9848IndexDBName=this.val()},val:function(){return gx.fn.getControlValue("INDEXDBNAME")},nac:gx.falseFn};
   this.A9846IndexDBSchema = "" ;
   this.Z9846IndexDBSchema = "" ;
   this.O9846IndexDBSchema = "" ;
   this.A9847IndexDBTable = "" ;
   this.Z9847IndexDBTable = "" ;
   this.O9847IndexDBTable = "" ;
   this.A9848IndexDBName = "" ;
   this.Z9848IndexDBName = "" ;
   this.O9848IndexDBName = "" ;
   this.A9846IndexDBSchema = "" ;
   this.A9847IndexDBTable = "" ;
   this.A9848IndexDBName = "" ;
   this.Events = {"e11e8733_client": ["ENTER", true] ,"e12e8733_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tindexdb());
