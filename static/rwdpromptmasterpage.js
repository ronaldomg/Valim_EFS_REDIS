/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:47:49.95
*/
gx.evt.autoSkip = false;
gx.define('rwdpromptmasterpage', false, function () {
   this.ServerClass =  "rwdpromptmasterpage" ;
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
   this.e14062_client=function()
   {
      this.executeServerEvent("ENTER_MPAGE", true, null, false, false);
   };
   this.e15062_client=function()
   {
      this.executeServerEvent("CANCEL_MPAGE", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"",grid:0};
   GXValidFnc[3]={fld:"MAINTABLE",grid:0};
   GXValidFnc[4]={fld:"",grid:0};
   GXValidFnc[5]={fld:"",grid:0};
   this.Events = {"e14062_client": ["ENTER_MPAGE", true] ,"e15062_client": ["CANCEL_MPAGE", true]};
   this.EvtParms["REFRESH_MPAGE"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setMasterPage(new rwdpromptmasterpage());
