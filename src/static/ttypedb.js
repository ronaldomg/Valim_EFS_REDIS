/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:56.34
*/
gx.evt.autoSkip = false;
gx.define('ttypedb', false, function () {
   this.ServerClass =  "ttypedb" ;
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
   this.Valid_Typedbschema=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TYPEDBSCHEMA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Typedbname=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Typedbname",["gx.O.A9844TypeDBSchema", "gx.O.A9845TypeDBName", "gx.O.A9859TypeDBAttribute"],["A9859TypeDBAttribute", "Gx_mode", "Z9844TypeDBSchema", "Z9845TypeDBName", "Z9859TypeDBAttribute", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11e7732_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12e7732_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKTYPEDBSCHEMA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Typedbschema,isvalid:null,rgrid:[],fld:"TYPEDBSCHEMA",gxz:"Z9844TypeDBSchema",gxold:"O9844TypeDBSchema",gxvar:"A9844TypeDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9844TypeDBSchema=Value},v2z:function(Value){gx.O.Z9844TypeDBSchema=Value},v2c:function(){gx.fn.setControlValue("TYPEDBSCHEMA",gx.O.A9844TypeDBSchema,0)},c2v:function(){gx.O.A9844TypeDBSchema=this.val()},val:function(){return gx.fn.getControlValue("TYPEDBSCHEMA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTYPEDBNAME", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Typedbname,isvalid:null,rgrid:[],fld:"TYPEDBNAME",gxz:"Z9845TypeDBName",gxold:"O9845TypeDBName",gxvar:"A9845TypeDBName",ucs:[],op:[49],ip:[49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9845TypeDBName=Value},v2z:function(Value){gx.O.Z9845TypeDBName=Value},v2c:function(){gx.fn.setControlValue("TYPEDBNAME",gx.O.A9845TypeDBName,0)},c2v:function(){gx.O.A9845TypeDBName=this.val()},val:function(){return gx.fn.getControlValue("TYPEDBNAME")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKTYPEDBATTRIBUTE", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TYPEDBATTRIBUTE",gxz:"Z9859TypeDBAttribute",gxold:"O9859TypeDBAttribute",gxvar:"A9859TypeDBAttribute",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9859TypeDBAttribute=Value},v2z:function(Value){gx.O.Z9859TypeDBAttribute=Value},v2c:function(){gx.fn.setControlValue("TYPEDBATTRIBUTE",gx.O.A9859TypeDBAttribute,0)},c2v:function(){gx.O.A9859TypeDBAttribute=this.val()},val:function(){return gx.fn.getControlValue("TYPEDBATTRIBUTE")},nac:gx.falseFn};
   this.A9844TypeDBSchema = "" ;
   this.Z9844TypeDBSchema = "" ;
   this.O9844TypeDBSchema = "" ;
   this.A9845TypeDBName = "" ;
   this.Z9845TypeDBName = "" ;
   this.O9845TypeDBName = "" ;
   this.A9859TypeDBAttribute = "" ;
   this.Z9859TypeDBAttribute = "" ;
   this.O9859TypeDBAttribute = "" ;
   this.A9844TypeDBSchema = "" ;
   this.A9845TypeDBName = "" ;
   this.A9859TypeDBAttribute = "" ;
   this.Events = {"e11e7732_client": ["ENTER", true] ,"e12e7732_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new ttypedb());
