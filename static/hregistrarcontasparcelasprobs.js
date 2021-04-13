/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:47.3
*/
gx.evt.autoSkip = false;
gx.define('hregistrarcontasparcelasprobs', false, function () {
   this.ServerClass =  "hregistrarcontasparcelasprobs" ;
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
      this.AV6ContaPagRecObservacao=gx.fn.getControlValue("vCONTAPAGRECOBSERVACAO") ;
      this.AV8ObservacaoOut=gx.fn.getControlValue("vOBSERVACAOOUT") ;
   };
   this.e121ys2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131ys2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e151ys2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV5Observacao",gxold:"OV5Observacao",gxvar:"AV5Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Observacao=Value},v2z:function(Value){gx.O.ZV5Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV5Observacao,0)},c2v:function(){gx.O.AV5Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   this.AV5Observacao = "" ;
   this.ZV5Observacao = "" ;
   this.OV5Observacao = "" ;
   this.AV5Observacao = "" ;
   this.AV6ContaPagRecObservacao = "" ;
   this.AV8ObservacaoOut = "" ;
   this.Events = {"e121ys2_client": ["ENTER", true] ,"e131ys2_client": ["'CANCELAR'", true] ,"e151ys2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV5Observacao',fld:'vOBSERVACAO'}],[{av:'AV8ObservacaoOut',fld:'vOBSERVACAOOUT'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV6ContaPagRecObservacao',fld:'vCONTAPAGRECOBSERVACAO',hsh:true}],[{av:'AV8ObservacaoOut',fld:'vOBSERVACAOOUT'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6ContaPagRecObservacao", "vCONTAPAGRECOBSERVACAO", 0, "vchar");
   this.setVCMap("AV8ObservacaoOut", "vOBSERVACAOOUT", 0, "vchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarcontasparcelasprobs());
