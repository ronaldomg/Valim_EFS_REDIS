/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:29.61
*/
gx.evt.autoSkip = false;
gx.define('hatualizacaobancodadosbackuperr', false, function () {
   this.ServerClass =  "hatualizacaobancodadosbackuperr" ;
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
   this.e1121g2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1321g2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCERRO",gxz:"ZV22DescErro",gxold:"OV22DescErro",gxvar:"AV22DescErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DescErro=Value},v2z:function(Value){gx.O.ZV22DescErro=Value},v2c:function(){gx.fn.setControlValue("vDESCERRO",gx.O.AV22DescErro,0)},c2v:function(){gx.O.AV22DescErro=this.val()},val:function(){return gx.fn.getControlValue("vDESCERRO")},nac:gx.falseFn};
   this.AV22DescErro = "" ;
   this.ZV22DescErro = "" ;
   this.OV22DescErro = "" ;
   this.AV22DescErro = "" ;
   this.Events = {"e1121g2_client": ["ENTER", true] ,"e1321g2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BTNFECHAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizacaobancodadosbackuperr());
