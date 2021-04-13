/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:49.55
*/
gx.evt.autoSkip = false;
gx.define('tfunctiondb', false, function () {
   this.ServerClass =  "tfunctiondb" ;
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
   this.Valid_Functiondbname=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Functiondbname",["gx.O.A9836FunctionDBName", "gx.O.A9892FunctionDBArguments", "gx.O.A9893FunctionDBTypes"],["A9892FunctionDBArguments", "A9893FunctionDBTypes", "Gx_mode", "Z9836FunctionDBName", "Z9892FunctionDBArguments", "Z9893FunctionDBTypes", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11e2739_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12e2739_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKFUNCTIONDBNAME", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Functiondbname,isvalid:null,rgrid:[],fld:"FUNCTIONDBNAME",gxz:"Z9836FunctionDBName",gxold:"O9836FunctionDBName",gxvar:"A9836FunctionDBName",ucs:[],op:[49,44],ip:[49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9836FunctionDBName=Value},v2z:function(Value){gx.O.Z9836FunctionDBName=Value},v2c:function(){gx.fn.setControlValue("FUNCTIONDBNAME",gx.O.A9836FunctionDBName,0)},c2v:function(){gx.O.A9836FunctionDBName=this.val()},val:function(){return gx.fn.getControlValue("FUNCTIONDBNAME")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKFUNCTIONDBARGUMENTS", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FUNCTIONDBARGUMENTS",gxz:"Z9892FunctionDBArguments",gxold:"O9892FunctionDBArguments",gxvar:"A9892FunctionDBArguments",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9892FunctionDBArguments=Value},v2z:function(Value){gx.O.Z9892FunctionDBArguments=Value},v2c:function(){gx.fn.setControlValue("FUNCTIONDBARGUMENTS",gx.O.A9892FunctionDBArguments,0)},c2v:function(){gx.O.A9892FunctionDBArguments=this.val()},val:function(){return gx.fn.getControlValue("FUNCTIONDBARGUMENTS")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKFUNCTIONDBTYPES", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FUNCTIONDBTYPES",gxz:"Z9893FunctionDBTypes",gxold:"O9893FunctionDBTypes",gxvar:"A9893FunctionDBTypes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9893FunctionDBTypes=Value},v2z:function(Value){gx.O.Z9893FunctionDBTypes=Value},v2c:function(){gx.fn.setControlValue("FUNCTIONDBTYPES",gx.O.A9893FunctionDBTypes,0)},c2v:function(){gx.O.A9893FunctionDBTypes=this.val()},val:function(){return gx.fn.getControlValue("FUNCTIONDBTYPES")},nac:gx.falseFn};
   this.A9836FunctionDBName = "" ;
   this.Z9836FunctionDBName = "" ;
   this.O9836FunctionDBName = "" ;
   this.A9892FunctionDBArguments = "" ;
   this.Z9892FunctionDBArguments = "" ;
   this.O9892FunctionDBArguments = "" ;
   this.A9893FunctionDBTypes = "" ;
   this.Z9893FunctionDBTypes = "" ;
   this.O9893FunctionDBTypes = "" ;
   this.A9836FunctionDBName = "" ;
   this.A9892FunctionDBArguments = "" ;
   this.A9893FunctionDBTypes = "" ;
   this.Events = {"e11e2739_client": ["ENTER", true] ,"e12e2739_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tfunctiondb());
