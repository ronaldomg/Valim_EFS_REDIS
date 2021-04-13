/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 0:47:14.51
*/
gx.evt.autoSkip = false;
gx.define('gammenu', true, function (CmpContext) {
   this.ServerClass =  "gammenu" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
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
   this.s112_client=function()
   {
      this.AV12GXV1 = gx.num.trunc( 1 ,0) ;
      while ( this.AV12GXV1 <= this.AV6Errors.length )
      {
         this.AV5Error =  this.AV6Errors[this.AV12GXV1 - 1]  ;
         this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV5Error.Message, this.AV5Error.Code, "", "", "", "", "", "", ""));
         this.AV12GXV1 = gx.num.trunc( this.AV12GXV1 + 1 ,0) ;
      }
   };
   this.e1222k2_client=function()
   {
      this.executeServerEvent("'WWUSERS'", true, null, false, false);
   };
   this.e1322k2_client=function()
   {
      this.executeServerEvent("'WWSECPOL'", true, null, false, false);
   };
   this.e1422k2_client=function()
   {
      this.executeServerEvent("'REPOSITORYCONFIGURATION'", true, null, false, false);
   };
   this.e1522k2_client=function()
   {
      this.executeServerEvent("'CHANGEPASSWORD'", true, null, false, false);
   };
   this.e1622k2_client=function()
   {
      this.executeServerEvent("'WWROLES'", true, null, false, false);
   };
   this.e1722k2_client=function()
   {
      this.executeServerEvent("'WWAPPLICATIONS'", true, null, false, false);
   };
   this.e1822k2_client=function()
   {
      this.executeServerEvent("'AUTHTYPE'", true, null, false, false);
   };
   this.e1922k2_client=function()
   {
      this.executeServerEvent("'REPCONNECTION'", true, null, false, false);
   };
   this.e2022k2_client=function()
   {
      this.executeServerEvent("'CHANGEWORKINGREPOSITORY'", true, null, false, false);
   };
   this.e2122k2_client=function()
   {
      this.executeServerEvent("'WWREPOSITORIES'", true, null, false, false);
   };
   this.e2322k2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e2422k2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,7,12,17,22,27,32,37,42,47,52];
   this.GXLastCtrlId =52;
   GXValidFnc[2]={fld:"TBLMENU",grid:0};
   GXValidFnc[7]={fld:"TBUSERS", format:0,grid:0};
   GXValidFnc[12]={fld:"TBROLES", format:0,grid:0};
   GXValidFnc[17]={fld:"TBSECPOL", format:0,grid:0};
   GXValidFnc[22]={fld:"TBAPPL", format:0,grid:0};
   GXValidFnc[27]={fld:"TBREPOSITORYCONFIGURATION", format:0,grid:0};
   GXValidFnc[32]={fld:"TBREPCONN", format:0,grid:0};
   GXValidFnc[37]={fld:"TBAUTHTYPE", format:0,grid:0};
   GXValidFnc[42]={fld:"TBCHGPASSWORD", format:0,grid:0};
   GXValidFnc[47]={fld:"TBCHGREPOSITORY", format:0,grid:0};
   GXValidFnc[52]={fld:"TBREPOSITORIES", format:0,grid:0};
   this.AV5Error = {} ;
   this.AV6Errors = [ ] ;
   this.AV12GXV1 = 0 ;
   this.Events = {"e1222k2_client": ["'WWUSERS'", true] ,"e1322k2_client": ["'WWSECPOL'", true] ,"e1422k2_client": ["'REPOSITORYCONFIGURATION'", true] ,"e1522k2_client": ["'CHANGEPASSWORD'", true] ,"e1622k2_client": ["'WWROLES'", true] ,"e1722k2_client": ["'WWAPPLICATIONS'", true] ,"e1822k2_client": ["'AUTHTYPE'", true] ,"e1922k2_client": ["'REPCONNECTION'", true] ,"e2022k2_client": ["'CHANGEWORKINGREPOSITORY'", true] ,"e2122k2_client": ["'WWREPOSITORIES'", true] ,"e2322k2_client": ["ENTER", true] ,"e2422k2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'WWUSERS'"] = [[],[]];
   this.EvtParms["'WWSECPOL'"] = [[],[]];
   this.EvtParms["'REPOSITORYCONFIGURATION'"] = [[],[{av:'AV9Id',fld:'vID'}]];
   this.EvtParms["'CHANGEPASSWORD'"] = [[],[]];
   this.EvtParms["'WWROLES'"] = [[],[]];
   this.EvtParms["'WWAPPLICATIONS'"] = [[],[]];
   this.EvtParms["'AUTHTYPE'"] = [[],[]];
   this.EvtParms["'REPCONNECTION'"] = [[],[]];
   this.EvtParms["'CHANGEWORKINGREPOSITORY'"] = [[],[]];
   this.EvtParms["'WWREPOSITORIES'"] = [[],[]];
   this.InitStandaloneVars( );
});
