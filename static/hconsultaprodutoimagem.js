/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:4:26.97
*/
gx.evt.autoSkip = false;
gx.define('hconsultaprodutoimagem', false, function () {
   this.ServerClass =  "hconsultaprodutoimagem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV6ProdutoId=gx.fn.getIntegerValue("vPRODUTOID",'.') ;
   };
   this.e1229z2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1429z2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"IMAGE1",grid:0};
   this.AV6ProdutoId = 0 ;
   this.Events = {"e1229z2_client": ["ENTER", true] ,"e1429z2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BTNFECHAR"];
   this.setVCMap("AV6ProdutoId", "vPRODUTOID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaprodutoimagem());
