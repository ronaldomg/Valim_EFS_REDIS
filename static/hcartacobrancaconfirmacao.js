/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:7:40.56
*/
gx.evt.autoSkip = false;
gx.define('hcartacobrancaconfirmacao', false, function () {
   this.ServerClass =  "hcartacobrancaconfirmacao" ;
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
   this.e122ap2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132ap2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152ap2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGM",gxz:"ZV5Msgm",gxold:"OV5Msgm",gxvar:"AV5Msgm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Msgm=Value},v2z:function(Value){gx.O.ZV5Msgm=Value},v2c:function(){gx.fn.setControlValue("vMSGM",gx.O.AV5Msgm,0)},c2v:function(){gx.O.AV5Msgm=this.val()},val:function(){return gx.fn.getControlValue("vMSGM")},nac:gx.falseFn};
   this.AV5Msgm = "" ;
   this.ZV5Msgm = "" ;
   this.OV5Msgm = "" ;
   this.AV5Msgm = "" ;
   this.Events = {"e122ap2_client": ["'FECHAR'", true] ,"e132ap2_client": ["ENTER", true] ,"e152ap2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcartacobrancaconfirmacao());
