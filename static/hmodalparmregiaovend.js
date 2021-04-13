/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:2.85
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmregiaovend', false, function () {
   this.ServerClass =  "hmodalparmregiaovend" ;
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
      this.AV12EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID") ;
      this.AV6EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.e15sy1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms",[this.AV6EmpresaLogadaId, "CPR", "REGIAOVENDED"]), []);
      this.refreshOutputs([]);
   };
   this.e12sy2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13sy2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16sy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,18,22];
   this.GXLastCtrlId =22;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREGIAOVENDEDOR",gxz:"ZV11RegiaoVendedor",gxold:"OV11RegiaoVendedor",gxvar:"AV11RegiaoVendedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV11RegiaoVendedor=Value},v2z:function(Value){gx.O.ZV11RegiaoVendedor=Value},v2c:function(){gx.fn.setComboBoxValue("vREGIAOVENDEDOR",gx.O.AV11RegiaoVendedor)},c2v:function(){gx.O.AV11RegiaoVendedor=this.val()},val:function(){return gx.fn.getControlValue("vREGIAOVENDEDOR")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE2",grid:0};
   GXValidFnc[22]={fld:"BTNOBS",grid:0};
   this.AV11RegiaoVendedor = "" ;
   this.ZV11RegiaoVendedor = "" ;
   this.OV11RegiaoVendedor = "" ;
   this.AV11RegiaoVendedor = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12sy2_client": ["ENTER", true] ,"e13sy2_client": ["'FECHAR'", true] ,"e16sy2_client": ["CANCEL", true] ,"e15sy1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV11RegiaoVendedor',fld:'vREGIAOVENDEDOR'}],[{av:'AV11RegiaoVendedor',fld:'vREGIAOVENDEDOR'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmregiaovend());
