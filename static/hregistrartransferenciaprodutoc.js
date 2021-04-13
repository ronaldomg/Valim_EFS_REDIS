/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:42:15.30
*/
gx.evt.autoSkip = false;
gx.define('hregistrartransferenciaprodutoc', false, function () {
   this.ServerClass =  "hregistrartransferenciaprodutoc" ;
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
      this.AV9TransferenciaNumero=gx.fn.getIntegerValue("vTRANSFERENCIANUMERO",'.') ;
      this.AV13TpOperacao=gx.fn.getIntegerValue("vTPOPERACAO",'.') ;
   };
   this.e121242_client=function()
   {
      this.executeServerEvent("'NAO'", false, null, false, false);
   };
   this.e131242_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151242_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,21];
   this.GXLastCtrlId =21;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABCONFTRANSF",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TXTQT", format:0,grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={fld:"TXTVL", format:0,grid:0};
   GXValidFnc[18]={fld:"TABCONFEXC",grid:0};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   this.AV9TransferenciaNumero = 0 ;
   this.AV13TpOperacao = 0 ;
   this.A10704TransferenciaNumero = 0 ;
   this.A10703TransferenciaEmpresaId = "" ;
   this.A10723TransferenciaItemSequencia = 0 ;
   this.A10739TransferenciaItemQuantidade = 0 ;
   this.A10741TransferenciaItemValor = 0 ;
   this.Events = {"e121242_client": ["'NAO'", true] ,"e131242_client": ["ENTER", true] ,"e151242_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'NAO'"] = [[{av:'AV8SnOk',fld:'vSNOK'},{av:'AV13TpOperacao',fld:'vTPOPERACAO'}],[{av:'AV8SnOk',fld:'vSNOK'}]];
   this.EvtParms["ENTER"] = [[{av:'AV8SnOk',fld:'vSNOK'},{av:'AV13TpOperacao',fld:'vTPOPERACAO'}],[{av:'AV8SnOk',fld:'vSNOK'}]];
   this.EnterCtrl = ["BTNSIM"];
   this.setVCMap("AV9TransferenciaNumero", "vTRANSFERENCIANUMERO", 0, "int");
   this.setVCMap("AV13TpOperacao", "vTPOPERACAO", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrartransferenciaprodutoc());
