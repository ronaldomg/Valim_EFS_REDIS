/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:52.13
*/
gx.evt.autoSkip = false;
gx.define('tsettingdb', false, function () {
   this.ServerClass =  "tsettingdb" ;
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
   this.Valid_Settingdbname=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Settingdbname",["gx.O.A9839SettingDBName", "gx.O.A9857SettingDBSetting"],["A9857SettingDBSetting", "Gx_mode", "Z9839SettingDBName", "Z9857SettingDBSetting", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11e4729_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12e4729_client=function()
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
   GXValidFnc[37]={fld:"TEXTBLOCKSETTINGDBNAME", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Settingdbname,isvalid:null,rgrid:[],fld:"SETTINGDBNAME",gxz:"Z9839SettingDBName",gxold:"O9839SettingDBName",gxvar:"A9839SettingDBName",ucs:[],op:[44],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9839SettingDBName=Value},v2z:function(Value){gx.O.Z9839SettingDBName=Value},v2c:function(){gx.fn.setControlValue("SETTINGDBNAME",gx.O.A9839SettingDBName,0)},c2v:function(){gx.O.A9839SettingDBName=this.val()},val:function(){return gx.fn.getControlValue("SETTINGDBNAME")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSETTINGDBSETTING", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SETTINGDBSETTING",gxz:"Z9857SettingDBSetting",gxold:"O9857SettingDBSetting",gxvar:"A9857SettingDBSetting",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9857SettingDBSetting=Value},v2z:function(Value){gx.O.Z9857SettingDBSetting=Value},v2c:function(){gx.fn.setControlValue("SETTINGDBSETTING",gx.O.A9857SettingDBSetting,0)},c2v:function(){gx.O.A9857SettingDBSetting=this.val()},val:function(){return gx.fn.getControlValue("SETTINGDBSETTING")},nac:gx.falseFn};
   this.A9839SettingDBName = "" ;
   this.Z9839SettingDBName = "" ;
   this.O9839SettingDBName = "" ;
   this.A9857SettingDBSetting = "" ;
   this.Z9857SettingDBSetting = "" ;
   this.O9857SettingDBSetting = "" ;
   this.A9839SettingDBName = "" ;
   this.A9857SettingDBSetting = "" ;
   this.Events = {"e11e4729_client": ["ENTER", true] ,"e12e4729_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsettingdb());
