/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:30:54.62
*/
gx.evt.autoSkip = false;
gx.define('gamexamplenotauthorized', false, function () {
   this.ServerClass =  "gamexamplenotauthorized" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e1222l2_client=function()
   {
      this.executeServerEvent("'LOGIN'", true, null, false, false);
   };
   this.e1422l2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1522l1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,14,21];
   this.GXLastCtrlId =21;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TBFORMTITLE", format:0,grid:0};
   GXValidFnc[14]={fld:"TBLINKLOGIN", format:0,grid:0};
   GXValidFnc[21]={fld:"TBBACK", format:0,grid:0};
   this.Events = {"e1222l2_client": ["'LOGIN'", true] ,"e1422l2_client": ["ENTER", true] ,"e1522l1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'LOGIN'"] = [[],[{av:'AV6isOK',fld:'vISOK'}]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplenotauthorized());
