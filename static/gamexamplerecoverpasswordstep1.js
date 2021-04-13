/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:30:34.44
*/
gx.evt.autoSkip = false;
gx.define('gamexamplerecoverpasswordstep1', false, function () {
   this.ServerClass =  "gamexamplerecoverpasswordstep1" ;
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
      this.AV5ApplicationClientId=gx.fn.getControlValue("vAPPLICATIONCLIENTID") ;
   };
   this.s112_client=function()
   {
      this.AV18GXV1 = gx.num.trunc( 1 ,0) ;
      while ( this.AV18GXV1 <= this.AV7Errors.length )
      {
         this.AV6Error =  this.AV7Errors[this.AV18GXV1 - 1]  ;
         this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV6Error.Message, this.AV6Error.Code, "", "", "", "", "", "", ""));
         this.AV18GXV1 = gx.num.trunc( this.AV18GXV1 + 1 ,0) ;
      }
   };
   this.e1122h2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1322h1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,17,20,29];
   this.GXLastCtrlId =29;
   GXValidFnc[2]={fld:"TBLMAIN",grid:0};
   GXValidFnc[6]={fld:"TBLCEN",grid:0};
   GXValidFnc[9]={fld:"TBTITLE", format:0,grid:0};
   GXValidFnc[12]={fld:"TBLFIELDS",grid:0};
   GXValidFnc[17]={fld:"TBUSERNAME", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV12UserName",gxold:"OV12UserName",gxvar:"AV12UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12UserName=Value},v2z:function(Value){gx.O.ZV12UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV12UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[29]={fld:"TBLBUTTONS",grid:0};
   this.AV12UserName = "" ;
   this.ZV12UserName = "" ;
   this.OV12UserName = "" ;
   this.AV12UserName = "" ;
   this.AV5ApplicationClientId = "" ;
   this.AV6Error = {} ;
   this.AV7Errors = [ ] ;
   this.AV18GXV1 = 0 ;
   this.Events = {"e1122h2_client": ["ENTER", true] ,"e1322h1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11UserAuthTypeName',fld:'vUSERAUTHTYPENAME'},{av:'AV12UserName',fld:'vUSERNAME'}],[{av:'AV8KeyToChangePassword',fld:'vKEYTOCHANGEPASSWORD'},{av:'AV18GXV1',fld:'vGXV1'}]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("AV5ApplicationClientId", "vAPPLICATIONCLIENTID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplerecoverpasswordstep1());
