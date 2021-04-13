/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:54:10.79
*/
gx.evt.autoSkip = false;
gx.define('hboxobsparcelacontrato', false, function () {
   this.ServerClass =  "hboxobsparcelacontrato" ;
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
      this.AV29ObservacaoPar=gx.fn.getControlValue("vOBSERVACAOPAR") ;
      this.AV30NoPar=gx.fn.getIntegerValue("vNOPAR",'.') ;
   };
   this.e12u72_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13u72_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15u72_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV20Observacao",gxold:"OV20Observacao",gxvar:"AV20Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Observacao=Value},v2z:function(Value){gx.O.ZV20Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV20Observacao,0)},c2v:function(){gx.O.AV20Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   this.AV20Observacao = "" ;
   this.ZV20Observacao = "" ;
   this.OV20Observacao = "" ;
   this.AV20Observacao = "" ;
   this.AV29ObservacaoPar = "" ;
   this.AV30NoPar = 0 ;
   this.Events = {"e12u72_client": ["ENTER", true] ,"e13u72_client": ["'CANCELAR'", true] ,"e15u72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20Observacao',fld:'vOBSERVACAO'},{av:'AV30NoPar',fld:'vNOPAR',hsh:true}],[]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV29ObservacaoPar',fld:'vOBSERVACAOPAR',hsh:true},{av:'AV30NoPar',fld:'vNOPAR',hsh:true}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV29ObservacaoPar", "vOBSERVACAOPAR", 0, "vchar");
   this.setVCMap("AV30NoPar", "vNOPAR", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hboxobsparcelacontrato());
