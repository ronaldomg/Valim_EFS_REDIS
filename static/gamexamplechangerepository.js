/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:31:38.15
*/
gx.evt.autoSkip = false;
gx.define('gamexamplechangerepository', false, function () {
   this.ServerClass =  "gamexamplechangerepository" ;
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
   };
   this.s112_client=function()
   {
      this.AV19GXV2 = gx.num.trunc( 1 ,0) ;
      while ( this.AV19GXV2 <= this.AV8Errors.length )
      {
         this.AV7Error =  this.AV8Errors[this.AV19GXV2 - 1]  ;
         this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV7Error.Message, this.AV7Error.Code, "", "", "", "", "", "", ""));
         this.AV19GXV2 = gx.num.trunc( this.AV19GXV2 + 1 ,0) ;
      }
   };
   this.e1222s2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1422s2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,13,15,19];
   this.GXLastCtrlId =19;
   GXValidFnc[2]={fld:"TBCHANGEREPOSITORY", format:0,grid:0};
   GXValidFnc[3]={fld:"TBL",grid:0};
   GXValidFnc[13]={fld:"TBCONNECTIONS", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSELECTEDCONNECTION",gxz:"ZV11SelectedConnection",gxold:"OV11SelectedConnection",gxvar:"AV11SelectedConnection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV11SelectedConnection=Value},v2z:function(Value){gx.O.ZV11SelectedConnection=Value},v2c:function(){gx.fn.setRadioValue("vSELECTEDCONNECTION",gx.O.AV11SelectedConnection);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11SelectedConnection=this.val()},val:function(){return gx.fn.getControlValue("vSELECTEDCONNECTION")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[19]={fld:"TBLBUTTONS",grid:0};
   this.AV11SelectedConnection = "" ;
   this.ZV11SelectedConnection = "" ;
   this.OV11SelectedConnection = "" ;
   this.AV11SelectedConnection = "" ;
   this.AV7Error = {} ;
   this.AV8Errors = [ ] ;
   this.AV19GXV2 = 0 ;
   this.Events = {"e1222s2_client": ["ENTER", true] ,"e1422s2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11SelectedConnection',fld:'vSELECTEDCONNECTION'}],[{av:'AV19GXV2',fld:'vGXV2'}]];
   this.EnterCtrl = ["BTNCONFIRM2"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplechangerepository());
