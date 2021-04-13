/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:29.31
*/
gx.evt.autoSkip = false;
gx.define('hatualizacaobancodadosbackup', false, function () {
   this.ServerClass =  "hatualizacaobancodadosbackup" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV9Host=gx.fn.getControlValue("vHOST") ;
      this.AV12Porta=gx.fn.getIntegerValue("vPORTA",'.') ;
      this.AV23ConnectionData=gx.fn.getControlValue("vCONNECTIONDATA") ;
      this.AV24UserPassword=gx.fn.getControlValue("vUSERPASSWORD") ;
      this.AV25ChavePassword=gx.fn.getControlValue("vCHAVEPASSWORD") ;
      this.AV26UserName=gx.fn.getControlValue("vUSERNAME") ;
      this.AV15NmOper=gx.fn.getControlValue("vNMOPER") ;
   };
   this.e1121f2_client=function()
   {
      this.executeServerEvent("TIMER.ELAPSED", false, null, true, true);
   };
   this.e1321f2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1421f2_client=function()
   {
      this.executeServerEvent("'ERRO'", false, null, false, false);
   };
   this.e1621f2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1721f2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,7,10,12,13,16,18];
   this.GXLastCtrlId =18;
   this.TIMERContainer = gx.uc.getNew(this, 23, 0, "Timer", "TIMERContainer", "Timer");
   var TIMERContainer = this.TIMERContainer;
   TIMERContainer.setProp("Interval", "Interval", 5000, "num");
   TIMERContainer.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMERContainer.setProp("Visible", "Visible", true, "bool");
   TIMERContainer.setProp("Class", "Class", "", "char");
   TIMERContainer.setC2ShowFunction(function(UC) { UC.start(); });
   TIMERContainer.addEventHandler("Elapsed", this.e1121f2_client);
   this.setUserControl(TIMERContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TABAGUARDE",grid:0};
   GXValidFnc[10]={fld:"IMGPROC",grid:0};
   GXValidFnc[12]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[13]={fld:"TABERRO",grid:0};
   GXValidFnc[16]={fld:"IMGERRO",grid:0};
   GXValidFnc[18]={fld:"TXTAPLERRO", format:0,grid:0};
   this.AV9Host = "" ;
   this.AV12Porta = 0 ;
   this.AV23ConnectionData = "" ;
   this.AV24UserPassword = "" ;
   this.AV25ChavePassword = "" ;
   this.AV26UserName = "" ;
   this.AV15NmOper = "" ;
   this.Events = {"e1121f2_client": ["TIMER.ELAPSED", true] ,"e1321f2_client": ["'FECHAR'", true] ,"e1421f2_client": ["'ERRO'", true] ,"e1621f2_client": ["ENTER", true] ,"e1721f2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["TIMER.ELAPSED"] = [[{av:'AV31DirBackup',fld:'vDIRBACKUP'},{av:'AV23ConnectionData',fld:'vCONNECTIONDATA',hsh:true},{av:'Gx_date',fld:'vTODAY'},{av:'AV20TxtAux',fld:'vTXTAUX'}],[{av:'AV6ArquivoBanco',fld:'vARQUIVOBANCO'},{av:'AV30TamanhoArquivo',fld:'vTAMANHOARQUIVO'},{av:'gx.fn.getCtrlProperty("TXTAPLICACAO","Caption")',ctrl:'TXTAPLICACAO',prop:'Caption'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{av:'AV21DescErro',fld:'vDESCERRO'},{av:'AV22i',fld:'vI'},{av:'gx.fn.getCtrlProperty("TABERRO","Visible")',ctrl:'TABERRO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABAGUARDE","Visible")',ctrl:'TABAGUARDE',prop:'Visible'},{ctrl:'BTNERRO',prop:'Visible'},{ctrl:'BTNFECHAR',prop:'Visible'},{av:'AV31DirBackup',fld:'vDIRBACKUP'},{av:'AV32DirPgTools',fld:'vDIRPGTOOLS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ERRO'"] = [[{av:'AV31DirBackup',fld:'vDIRBACKUP'},{av:'AV20TxtAux',fld:'vTXTAUX'}],[{av:'AV21DescErro',fld:'vDESCERRO'},{av:'AV22i',fld:'vI'}]];
   this.setVCMap("AV9Host", "vHOST", 0, "svchar");
   this.setVCMap("AV12Porta", "vPORTA", 0, "int");
   this.setVCMap("AV23ConnectionData", "vCONNECTIONDATA", 0, "svchar");
   this.setVCMap("AV24UserPassword", "vUSERPASSWORD", 0, "svchar");
   this.setVCMap("AV25ChavePassword", "vCHAVEPASSWORD", 0, "svchar");
   this.setVCMap("AV26UserName", "vUSERNAME", 0, "svchar");
   this.setVCMap("AV15NmOper", "vNMOPER", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizacaobancodadosbackup());
