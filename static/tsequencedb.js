/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:50.74
*/
gx.evt.autoSkip = false;
gx.define('tsequencedb', false, function () {
   this.ServerClass =  "tsequencedb" ;
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
   this.Valid_Sequencedbschema=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SEQUENCEDBSCHEMA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sequencedbname=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Sequencedbname",["gx.O.A9837SequenceDBSchema", "gx.O.A9838SequenceDBName"],["Gx_mode", "Z9837SequenceDBSchema", "Z9838SequenceDBName", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11e3728_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12e3728_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44];
   this.GXLastCtrlId =44;
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
   GXValidFnc[37]={fld:"TEXTBLOCKSEQUENCEDBSCHEMA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sequencedbschema,isvalid:null,rgrid:[],fld:"SEQUENCEDBSCHEMA",gxz:"Z9837SequenceDBSchema",gxold:"O9837SequenceDBSchema",gxvar:"A9837SequenceDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9837SequenceDBSchema=Value},v2z:function(Value){gx.O.Z9837SequenceDBSchema=Value},v2c:function(){gx.fn.setControlValue("SEQUENCEDBSCHEMA",gx.O.A9837SequenceDBSchema,0)},c2v:function(){gx.O.A9837SequenceDBSchema=this.val()},val:function(){return gx.fn.getControlValue("SEQUENCEDBSCHEMA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSEQUENCEDBNAME", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sequencedbname,isvalid:null,rgrid:[],fld:"SEQUENCEDBNAME",gxz:"Z9838SequenceDBName",gxold:"O9838SequenceDBName",gxvar:"A9838SequenceDBName",ucs:[],op:[],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9838SequenceDBName=Value},v2z:function(Value){gx.O.Z9838SequenceDBName=Value},v2c:function(){gx.fn.setControlValue("SEQUENCEDBNAME",gx.O.A9838SequenceDBName,0)},c2v:function(){gx.O.A9838SequenceDBName=this.val()},val:function(){return gx.fn.getControlValue("SEQUENCEDBNAME")},nac:gx.falseFn};
   this.A9837SequenceDBSchema = "" ;
   this.Z9837SequenceDBSchema = "" ;
   this.O9837SequenceDBSchema = "" ;
   this.A9838SequenceDBName = "" ;
   this.Z9838SequenceDBName = "" ;
   this.O9838SequenceDBName = "" ;
   this.A9837SequenceDBSchema = "" ;
   this.A9838SequenceDBName = "" ;
   this.Events = {"e11e3728_client": ["ENTER", true] ,"e12e3728_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsequencedb());
