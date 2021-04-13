/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:54:55.58
*/
gx.evt.autoSkip = false;
gx.define('havisopagamentooutorgadesc', false, function () {
   this.ServerClass =  "havisopagamentooutorgadesc" ;
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
   };
   this.e1125w2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1425w2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10];
   this.GXLastCtrlId =10;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:0,type:"svchar",len:1500,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCERRO",gxz:"ZV5DescErro",gxold:"OV5DescErro",gxvar:"AV5DescErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5DescErro=Value},v2z:function(Value){gx.O.ZV5DescErro=Value},v2c:function(){gx.fn.setControlValue("vDESCERRO",gx.O.AV5DescErro,0)},c2v:function(){gx.O.AV5DescErro=this.val()},val:function(){return gx.fn.getControlValue("vDESCERRO")},nac:gx.falseFn};
   GXValidFnc[10]={fld:"JS", format:2,grid:0};
   this.AV5DescErro = "" ;
   this.ZV5DescErro = "" ;
   this.OV5DescErro = "" ;
   this.AV5DescErro = "" ;
   this.Events = {"e1125w2_client": ["ENTER", true] ,"e1425w2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new havisopagamentooutorgadesc());
