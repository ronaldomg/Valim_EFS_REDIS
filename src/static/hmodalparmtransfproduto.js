/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:0:57.33
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmtransfproduto', false, function () {
   this.ServerClass =  "hmodalparmtransfproduto" ;
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
      this.AV6EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.e1528d1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms3",[this.AV6EmpresaLogadaId, "EST", "SNACEITETRANSF", "TPIDENTPRODTRA", "SNLOTEMEDICAMEN"]), []);
      this.refreshOutputs([]);
   };
   this.e1228d2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1328d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1628d2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,27,34];
   this.GXLastCtrlId =34;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPIDENTICACAO",gxz:"ZV20TpIdenticacao",gxold:"OV20TpIdenticacao",gxvar:"AV20TpIdenticacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20TpIdenticacao=Value},v2z:function(Value){gx.O.ZV20TpIdenticacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPIDENTICACAO",gx.O.AV20TpIdenticacao)},c2v:function(){gx.O.AV20TpIdenticacao=this.val()},val:function(){return gx.fn.getControlValue("vTPIDENTICACAO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNACEITE",gxz:"ZV21SnAceite",gxold:"OV21SnAceite",gxvar:"AV21SnAceite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21SnAceite=Value},v2z:function(Value){gx.O.ZV21SnAceite=Value},v2c:function(){gx.fn.setComboBoxValue("vSNACEITE",gx.O.AV21SnAceite)},c2v:function(){gx.O.AV21SnAceite=this.val()},val:function(){return gx.fn.getControlValue("vSNACEITE")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLOTEMEDCONT",gxz:"ZV22SnLoteMedCont",gxold:"OV22SnLoteMedCont",gxvar:"AV22SnLoteMedCont",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22SnLoteMedCont=Value},v2z:function(Value){gx.O.ZV22SnLoteMedCont=Value},v2c:function(){gx.fn.setComboBoxValue("vSNLOTEMEDCONT",gx.O.AV22SnLoteMedCont)},c2v:function(){gx.O.AV22SnLoteMedCont=this.val()},val:function(){return gx.fn.getControlValue("vSNLOTEMEDCONT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE5",grid:0};
   GXValidFnc[34]={fld:"BTNOBS",grid:0};
   this.AV20TpIdenticacao = "" ;
   this.ZV20TpIdenticacao = "" ;
   this.OV20TpIdenticacao = "" ;
   this.AV21SnAceite = "" ;
   this.ZV21SnAceite = "" ;
   this.OV21SnAceite = "" ;
   this.AV22SnLoteMedCont = "" ;
   this.ZV22SnLoteMedCont = "" ;
   this.OV22SnLoteMedCont = "" ;
   this.AV20TpIdenticacao = "" ;
   this.AV21SnAceite = "" ;
   this.AV22SnLoteMedCont = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e1228d2_client": ["ENTER", true] ,"e1328d2_client": ["'FECHAR'", true] ,"e1628d2_client": ["CANCEL", true] ,"e1528d1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV21SnAceite',fld:'vSNACEITE'},{av:'AV20TpIdenticacao',fld:'vTPIDENTICACAO'},{av:'AV22SnLoteMedCont',fld:'vSNLOTEMEDCONT'}],[{av:'AV14tpErro',fld:'vTPERRO'},{av:'AV21SnAceite',fld:'vSNACEITE'},{av:'AV20TpIdenticacao',fld:'vTPIDENTICACAO'},{av:'AV22SnLoteMedCont',fld:'vSNLOTEMEDCONT'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmtransfproduto());
