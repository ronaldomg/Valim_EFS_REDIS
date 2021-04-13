/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:45:26.32
*/
gx.evt.autoSkip = false;
gx.define('hboxobspadrao', false, function () {
   this.ServerClass =  "hboxobspadrao" ;
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
      this.AV19TipoConta=gx.fn.getControlValue("vTIPOCONTA") ;
   };
   this.e121g02_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131g02_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e151g02_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,21,22];
   this.GXLastCtrlId =22;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TXTCLIFOR", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE7",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORID",gxz:"ZV16ContaPagRecCliForId",gxold:"OV16ContaPagRecCliForId",gxvar:"AV16ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORID",gx.O.AV16ContaPagRecCliForId,0)},c2v:function(){gx.O.AV16ContaPagRecCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TXTTRACO", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORFANTASIA",gxz:"ZV17ContaPagRecCliForFantasia",gxold:"OV17ContaPagRecCliForFantasia",gxvar:"AV17ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.ZV17ContaPagRecCliForFantasia=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORFANTASIA",gx.O.AV17ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.AV17ContaPagRecCliForFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCLIFORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[21]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV14Observacao",gxold:"OV14Observacao",gxvar:"AV14Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Observacao=Value},v2z:function(Value){gx.O.ZV14Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV14Observacao,0)},c2v:function(){gx.O.AV14Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"DIV2", format:2,grid:0};
   this.AV16ContaPagRecCliForId = 0 ;
   this.ZV16ContaPagRecCliForId = 0 ;
   this.OV16ContaPagRecCliForId = 0 ;
   this.AV17ContaPagRecCliForFantasia = "" ;
   this.ZV17ContaPagRecCliForFantasia = "" ;
   this.OV17ContaPagRecCliForFantasia = "" ;
   this.AV14Observacao = "" ;
   this.ZV14Observacao = "" ;
   this.OV14Observacao = "" ;
   this.AV16ContaPagRecCliForId = 0 ;
   this.AV17ContaPagRecCliForFantasia = "" ;
   this.AV14Observacao = "" ;
   this.AV19TipoConta = "" ;
   this.Events = {"e121g02_client": ["ENTER", true] ,"e131g02_client": ["'CANCELAR'", true] ,"e151g02_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14Observacao',fld:'vOBSERVACAO'},{av:'AV20SnOk',fld:'vSNOK'},{av:'AV16ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'}],[{av:'AV20SnOk',fld:'vSNOK'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV20SnOk',fld:'vSNOK'},{av:'AV16ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'}],[{av:'AV20SnOk',fld:'vSNOK'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19TipoConta", "vTIPOCONTA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hboxobspadrao());
