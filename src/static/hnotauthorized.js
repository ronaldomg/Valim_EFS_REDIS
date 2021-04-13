/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:52:14.9
*/
gx.evt.autoSkip = false;
gx.define('hnotauthorized', false, function () {
   this.ServerClass =  "hnotauthorized" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.GxObject=gx.fn.getControlValue("vGXOBJECT") ;
   };
   this.e13302_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14302_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[4,7,13,16];
   this.GXLastCtrlId =16;
   GXValidFnc[4]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TITLETEXT", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE2",grid:0};
   GXValidFnc[16]={fld:"TABLE3",grid:0};
   this.GxObject = "" ;
   this.Events = {"e13302_client": ["ENTER", true] ,"e14302_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.setVCMap("GxObject", "vGXOBJECT", 0, "char");
   this.InitStandaloneVars( );
   this.setComponent({id: "HEADERBC" ,GXClass: null , Prefix: "W0002" , lvl: 1 });
   this.setComponent({id: "RECENTLINKS" ,GXClass: null , Prefix: "W0003" , lvl: 1 });
});
gx.setParentObj(new hnotauthorized());
