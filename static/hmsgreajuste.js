/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:0:49.64
*/
gx.evt.autoSkip = false;
gx.define('hmsgreajuste', false, function () {
   this.ServerClass =  "hmsgreajuste" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12SnGerarBoleto=gx.fn.getControlValue("vSNGERARBOLETO") ;
   };
   this.e1215g2_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e1415g2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1515g2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={lvl:0,type:"char",len:200,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGS",gxz:"ZV11msgs",gxold:"OV11msgs",gxvar:"AV11msgs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11msgs=Value},v2z:function(Value){gx.O.ZV11msgs=Value},v2c:function(){gx.fn.setControlValue("vMSGS",gx.O.AV11msgs,0)},c2v:function(){gx.O.AV11msgs=this.val()},val:function(){return gx.fn.getControlValue("vMSGS")},nac:gx.falseFn};
   this.AV11msgs = "" ;
   this.ZV11msgs = "" ;
   this.OV11msgs = "" ;
   this.AV11msgs = "" ;
   this.AV12SnGerarBoleto = "" ;
   this.Events = {"e1215g2_client": ["'CONFIRMAR'", true] ,"e1415g2_client": ["ENTER", true] ,"e1515g2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV12SnGerarBoleto',fld:'vSNGERARBOLETO'},{av:'AV11msgs',fld:'vMSGS'}],[]];
   this.setVCMap("AV12SnGerarBoleto", "vSNGERARBOLETO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmsgreajuste());
