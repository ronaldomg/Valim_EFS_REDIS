/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:32:31.77
*/
gx.evt.autoSkip = false;
gx.define('gamssologin', false, function () {
   this.ServerClass =  "gamssologin" ;
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
   this.s112_client=function()
   {
      this.AV15GXV1 = gx.num.trunc( 1 ,0) ;
      while ( this.AV15GXV1 <= this.AV7Errors.length )
      {
         this.AV6Error =  this.AV7Errors[this.AV15GXV1 - 1]  ;
         if ( this.AV6Error.Code != 13 )
         {
            this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV6Error.Message, this.AV6Error.Code, "", "", "", "", "", "", ""));
         }
         this.AV15GXV1 = gx.num.trunc( this.AV15GXV1 + 1 ,0) ;
      }
   };
   this.e1322w2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1422w2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[6,18];
   this.GXLastCtrlId =18;
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[18]={fld:"TBBACK", format:0,grid:0};
   this.AV6Error = {} ;
   this.AV7Errors = [ ] ;
   this.AV15GXV1 = 0 ;
   this.Events = {"e1322w2_client": ["ENTER", true] ,"e1422w2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamssologin());
