/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:58:21.97
*/
gx.evt.autoSkip = false;
gx.define('himportapedidoalerta', false, function () {
   this.ServerClass =  "himportapedidoalerta" ;
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
      this.AV16CodMsgAlerta=gx.fn.getIntegerValue("vCODMSGALERTA",'.') ;
   };
   this.e12vl2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13vl2_client=function()
   {
      this.executeServerEvent("'NAO'", false, null, false, false);
   };
   this.e15vl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,17];
   this.GXLastCtrlId =17;
   GXValidFnc[3]={fld:"TABALERT",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"TXTMSGPARTE1", format:0,grid:0};
   GXValidFnc[12]={fld:"TXTMSGPARTE2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRESP",gxz:"ZV14SnResp",gxold:"OV14SnResp",gxvar:"AV14SnResp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SnResp=Value},v2z:function(Value){gx.O.ZV14SnResp=Value},v2c:function(){gx.fn.setControlValue("vSNRESP",gx.O.AV14SnResp,0)},c2v:function(){gx.O.AV14SnResp=this.val()},val:function(){return gx.fn.getControlValue("vSNRESP")},nac:gx.falseFn};
   this.AV14SnResp = "" ;
   this.ZV14SnResp = "" ;
   this.OV14SnResp = "" ;
   this.AV14SnResp = "" ;
   this.AV16CodMsgAlerta = 0 ;
   this.Events = {"e12vl2_client": ["ENTER", true] ,"e13vl2_client": ["'NAO'", true] ,"e15vl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14SnResp',fld:'vSNRESP'}],[{av:'AV14SnResp',fld:'vSNRESP'}]];
   this.EvtParms["'NAO'"] = [[{av:'AV14SnResp',fld:'vSNRESP'}],[{av:'AV14SnResp',fld:'vSNRESP'}]];
   this.EnterCtrl = ["BTNSIM"];
   this.setVCMap("AV16CodMsgAlerta", "vCODMSGALERTA", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportapedidoalerta());
