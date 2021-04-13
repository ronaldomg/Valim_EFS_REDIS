/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:35:29.40
*/
gx.evt.autoSkip = false;
gx.define('hconfirmaexclusao', false, function () {
   this.ServerClass =  "hconfirmaexclusao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_msg=gx.fn.getControlValue("vMSG") ;
   };
   this.e1223x2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1323x2_client=function()
   {
      this.executeServerEvent("'NAO'", false, null, false, false);
   };
   this.e1523x2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,16];
   this.GXLastCtrlId =16;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"IMAGE1",grid:0};
   GXValidFnc[10]={fld:"TABLE3",grid:0};
   GXValidFnc[13]={fld:"TXTMENSAGEM", format:0,grid:0};
   GXValidFnc[16]={fld:"TXTMENSAGEM2", format:0,grid:0};
   this.Gx_msg = "" ;
   this.Events = {"e1223x2_client": ["ENTER", true] ,"e1323x2_client": ["'NAO'", true] ,"e1523x2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'Gx_msg',fld:'vMSG'}],[]];
   this.EvtParms["'NAO'"] = [[{av:'Gx_msg',fld:'vMSG'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_msg", "vMSG", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfirmaexclusao());
