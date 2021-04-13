/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:54.92
*/
gx.evt.autoSkip = false;
gx.define('ttriggerdb', false, function () {
   this.ServerClass =  "ttriggerdb" ;
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
   this.Valid_Triggerdbschema=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRIGGERDBSCHEMA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Triggerdbname=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Triggerdbname",["gx.O.A9842TriggerDBSchema", "gx.O.A9843TriggerDBName"],["Gx_mode", "Z9842TriggerDBSchema", "Z9843TriggerDBName", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11e6731_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12e6731_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKTRIGGERDBSCHEMA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Triggerdbschema,isvalid:null,rgrid:[],fld:"TRIGGERDBSCHEMA",gxz:"Z9842TriggerDBSchema",gxold:"O9842TriggerDBSchema",gxvar:"A9842TriggerDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9842TriggerDBSchema=Value},v2z:function(Value){gx.O.Z9842TriggerDBSchema=Value},v2c:function(){gx.fn.setControlValue("TRIGGERDBSCHEMA",gx.O.A9842TriggerDBSchema,0)},c2v:function(){gx.O.A9842TriggerDBSchema=this.val()},val:function(){return gx.fn.getControlValue("TRIGGERDBSCHEMA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTRIGGERDBNAME", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Triggerdbname,isvalid:null,rgrid:[],fld:"TRIGGERDBNAME",gxz:"Z9843TriggerDBName",gxold:"O9843TriggerDBName",gxvar:"A9843TriggerDBName",ucs:[],op:[],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9843TriggerDBName=Value},v2z:function(Value){gx.O.Z9843TriggerDBName=Value},v2c:function(){gx.fn.setControlValue("TRIGGERDBNAME",gx.O.A9843TriggerDBName,0)},c2v:function(){gx.O.A9843TriggerDBName=this.val()},val:function(){return gx.fn.getControlValue("TRIGGERDBNAME")},nac:gx.falseFn};
   this.A9842TriggerDBSchema = "" ;
   this.Z9842TriggerDBSchema = "" ;
   this.O9842TriggerDBSchema = "" ;
   this.A9843TriggerDBName = "" ;
   this.Z9843TriggerDBName = "" ;
   this.O9843TriggerDBName = "" ;
   this.A9842TriggerDBSchema = "" ;
   this.A9843TriggerDBName = "" ;
   this.Events = {"e11e6731_client": ["ENTER", true] ,"e12e6731_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new ttriggerdb());
