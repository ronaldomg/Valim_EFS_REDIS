/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:6:3.44
*/
gx.evt.autoSkip = false;
gx.define('hcadastrausuariovendedor', false, function () {
   this.ServerClass =  "hcadastrausuariovendedor" ;
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
      this.AV19SnRetorno=gx.fn.getControlValue("vSNRETORNO") ;
   };
   this.e12xb2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13xb2_client=function()
   {
      this.executeServerEvent("'NAO'", false, null, false, false);
   };
   this.e16xb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7];
   this.GXLastCtrlId =7;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TEXTBLOCK1", format:0,grid:0};
   this.AV19SnRetorno = "" ;
   this.Events = {"e12xb2_client": ["ENTER", true] ,"e13xb2_client": ["'NAO'", true] ,"e16xb2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV19SnRetorno',fld:'vSNRETORNO'}]];
   this.EvtParms["ENTER"] = [[],[{av:'AV14UsuarioId',fld:'vUSUARIOID'},{av:'AV15UsuarioNome',fld:'vUSUARIONOME'},{av:'AV16UsuarioFilialId',fld:'vUSUARIOFILIALID'}]];
   this.EvtParms["'NAO'"] = [[],[{av:'AV19SnRetorno',fld:'vSNRETORNO'}]];
   this.EnterCtrl = ["BTNSIM"];
   this.setVCMap("AV19SnRetorno", "vSNRETORNO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastrausuariovendedor());
