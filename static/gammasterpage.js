/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:25:44.42
*/
gx.evt.autoSkip = false;
gx.define('gammasterpage', false, function () {
   this.ServerClass =  "gammasterpage" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.IsMasterPage=true;
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
   this.e1321u2_client=function()
   {
      this.executeServerEvent("ENTER_MPAGE", true, null, false, false);
   };
   this.e1421u2_client=function()
   {
      this.executeServerEvent("CANCEL_MPAGE", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TBLPAGE",grid:0};
   GXValidFnc[5]={fld:"TBLWC",grid:0};
   this.Events = {"e1321u2_client": ["ENTER_MPAGE", true] ,"e1421u2_client": ["CANCEL_MPAGE", true]};
   this.EvtParms["REFRESH_MPAGE"] = [[],[]];
   this.InitStandaloneVars( );
   this.setComponent({id: "WCLOGOUT" ,GXClass: "gamlogout" , Prefix: "MPW0008" , lvl: 1 });
   this.setComponent({id: "WCMENU" ,GXClass: "gammenu" , Prefix: "MPW0011" , lvl: 1 });
});
gx.setMasterPage(new gammasterpage());
