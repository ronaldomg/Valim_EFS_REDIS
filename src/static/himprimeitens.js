/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:4:37.98
*/
gx.evt.autoSkip = false;
gx.define('himprimeitens', false, function () {
   this.ServerClass =  "himprimeitens" ;
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
      this.AV8ImprimeItensIn=gx.fn.getControlValue("vIMPRIMEITENSIN") ;
   };
   this.e122a42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142a41_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,13];
   this.GXLastCtrlId =13;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMEITENS",gxz:"ZV7ImprimeItens",gxold:"OV7ImprimeItens",gxvar:"AV7ImprimeItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV7ImprimeItens=Value},v2z:function(Value){gx.O.ZV7ImprimeItens=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMEITENS",gx.O.AV7ImprimeItens,"S")},c2v:function(){gx.O.AV7ImprimeItens=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMEITENS")},nac:gx.falseFn,values:['S','N']};
   this.AV7ImprimeItens = "" ;
   this.ZV7ImprimeItens = "" ;
   this.OV7ImprimeItens = "" ;
   this.AV7ImprimeItens = "" ;
   this.AV8ImprimeItensIn = "" ;
   this.Events = {"e122a42_client": ["ENTER", true] ,"e142a41_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV7ImprimeItens',fld:'vIMPRIMEITENS'}],[]];
   this.EnterCtrl = ["BUTTON2"];
   this.setVCMap("AV8ImprimeItensIn", "vIMPRIMEITENSIN", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new himprimeitens());
