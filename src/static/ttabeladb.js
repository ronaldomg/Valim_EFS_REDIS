/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:53.44
*/
gx.evt.autoSkip = false;
gx.define('ttabeladb', false, function () {
   this.ServerClass =  "ttabeladb" ;
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
   this.Valid_Tabeladbschema=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TABELADBSCHEMA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tabeladbname=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tabeladbname",["gx.O.A9840TabelaDBSchema", "gx.O.A9841TabelaDBName", "gx.O.A9858TabelaDBType"],["A9858TabelaDBType", "Gx_mode", "Z9840TabelaDBSchema", "Z9841TabelaDBName", "Z9858TabelaDBType", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11e5730_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12e5730_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKTABELADBSCHEMA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabeladbschema,isvalid:null,rgrid:[],fld:"TABELADBSCHEMA",gxz:"Z9840TabelaDBSchema",gxold:"O9840TabelaDBSchema",gxvar:"A9840TabelaDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9840TabelaDBSchema=Value},v2z:function(Value){gx.O.Z9840TabelaDBSchema=Value},v2c:function(){gx.fn.setControlValue("TABELADBSCHEMA",gx.O.A9840TabelaDBSchema,0)},c2v:function(){gx.O.A9840TabelaDBSchema=this.val()},val:function(){return gx.fn.getControlValue("TABELADBSCHEMA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTABELADBNAME", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabeladbname,isvalid:null,rgrid:[],fld:"TABELADBNAME",gxz:"Z9841TabelaDBName",gxold:"O9841TabelaDBName",gxvar:"A9841TabelaDBName",ucs:[],op:[49],ip:[49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9841TabelaDBName=Value},v2z:function(Value){gx.O.Z9841TabelaDBName=Value},v2c:function(){gx.fn.setControlValue("TABELADBNAME",gx.O.A9841TabelaDBName,0)},c2v:function(){gx.O.A9841TabelaDBName=this.val()},val:function(){return gx.fn.getControlValue("TABELADBNAME")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKTABELADBTYPE", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TABELADBTYPE",gxz:"Z9858TabelaDBType",gxold:"O9858TabelaDBType",gxvar:"A9858TabelaDBType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9858TabelaDBType=Value},v2z:function(Value){gx.O.Z9858TabelaDBType=Value},v2c:function(){gx.fn.setControlValue("TABELADBTYPE",gx.O.A9858TabelaDBType,0)},c2v:function(){gx.O.A9858TabelaDBType=this.val()},val:function(){return gx.fn.getControlValue("TABELADBTYPE")},nac:gx.falseFn};
   this.A9840TabelaDBSchema = "" ;
   this.Z9840TabelaDBSchema = "" ;
   this.O9840TabelaDBSchema = "" ;
   this.A9841TabelaDBName = "" ;
   this.Z9841TabelaDBName = "" ;
   this.O9841TabelaDBName = "" ;
   this.A9858TabelaDBType = "" ;
   this.Z9858TabelaDBType = "" ;
   this.O9858TabelaDBType = "" ;
   this.A9840TabelaDBSchema = "" ;
   this.A9841TabelaDBName = "" ;
   this.A9858TabelaDBType = "" ;
   this.Events = {"e11e5730_client": ["ENTER", true] ,"e12e5730_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new ttabeladb());
