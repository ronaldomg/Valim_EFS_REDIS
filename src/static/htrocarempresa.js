/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:17:26.6
*/
gx.evt.autoSkip = false;
gx.define('htrocarempresa', false, function () {
   this.ServerClass =  "htrocarempresa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e131d52_client=function()
   {
      this.executeServerEvent("'CANCELAR'", true, arguments[0], false, false);
   };
   this.e141d52_client=function()
   {
      this.executeServerEvent("'RETORNAEMPRESA'", true, arguments[0], false, false);
   };
   this.e111d52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e161d51_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e171d52_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,12,15,17,18];
   this.GXLastCtrlId =18;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",9,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"htrocarempresa",[],true,1,true,true,0,false,false,false,"CollSdtBuscaEmpresasLogin.SdtBuscaEmpresasLoginItem",0,"px","Novo registro",false,false,false,null,null,false,"AV13SdtBuscaEmpresaLogin",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","","","","");
   Grid1Container.startTable("Table10",12,"233px");
   Grid1Container.addHtmlCode("<tbody>");
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","20px","","","");
   Grid1Container.addBitmap("&Bmpseleciona","vBMPSELECIONA",15,0,"",0,"","e141d52_client","","","Image","");
   Grid1Container.endCell();
   Grid1Container.startCell("","","","#FFFFFF","","","","","","");
   Grid1Container.addSingleLineEdit("GXV2",17,"CTLEMPRESANOME1","","","EmpresaNome","svchar",40,"chr",40,40,"left",null,[],"GXV2","GXV2",true,0,false,false,"Attribute",1,"");
   Grid1Container.endCell();
   Grid1Container.endRow();
   Grid1Container.addHtmlCode("</tbody>");
   Grid1Container.endTable();
   Grid1Container.endCell();
   Grid1Container.endRow();
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABEMPRESAS",grid:0};
   GXValidFnc[8]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[12]={fld:"TABLE10",grid:9};
   GXValidFnc[15]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSELECIONA",gxz:"ZV15BmpSeleciona",gxold:"OV15BmpSeleciona",gxvar:"AV15BmpSeleciona",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15BmpSeleciona=Value},v2z:function(Value){gx.O.ZV15BmpSeleciona=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSELECIONA",row || gx.fn.currentGridRowImpl(9),gx.O.AV15BmpSeleciona,gx.O.AV36Bmpseleciona_GXI)},c2v:function(){gx.O.AV36Bmpseleciona_GXI=this.val_GXI();gx.O.AV15BmpSeleciona=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSELECIONA",row || gx.fn.currentGridRowImpl(9))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSELECIONA_GXI",row || gx.fn.currentGridRowImpl(9))}, gxvar_GXI:'AV36Bmpseleciona_GXI',nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESANOME1",gxz:"ZV35GXV2",gxold:"OV35GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV2=Value},v2z:function(Value){gx.O.ZV35GXV2=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMPRESANOME1",row || gx.fn.currentGridRowImpl(9),gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMPRESANOME1",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[18]={fld:"DIV2", format:2,grid:0};
   this.ZV15BmpSeleciona = "" ;
   this.OV15BmpSeleciona = "" ;
   this.ZV35GXV2 = "" ;
   this.OV35GXV2 = "" ;
   this.AV15BmpSeleciona = "" ;
   this.GXV2 = "" ;
   this.A5834ParametroFcxUsuarioAlt = "" ;
   this.A5833ParametroFCXQtdeDiasExcCarga = 0 ;
   this.A138EmpresaId = "" ;
   this.A199EmpresaLinhaGrid = 0 ;
   this.A2695EmpresaLinhaPrompt = 0 ;
   this.A186EmpresaNome = "" ;
   this.A191EmpresaFantasia = "" ;
   this.A200EmpresaLogomarca = "" ;
   this.A140SistemaId = "" ;
   this.A216EmpresaUsuarioUsuarioId = "" ;
   this.Events = {"e131d52_client": ["'CANCELAR'", true] ,"e141d52_client": ["'RETORNAEMPRESA'", true] ,"e111d52_client": ["'FECHAR'", true] ,"e161d51_client": ["ENTER", true] ,"e171d52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV13SdtBuscaEmpresaLogin',fld:'vSDTBUSCAEMPRESALOGIN',grid:9},{av:'AV15BmpSeleciona',fld:'vBMPSELECIONA'}],[]];
   this.EvtParms["'CANCELAR'"] = [[],[{av:'AV21SNCancelar',fld:'vSNCANCELAR'}]];
   this.EvtParms["'RETORNAEMPRESA'"] = [[{av:'AV17SNErro',fld:'vSNERRO'},{av:'AV13SdtBuscaEmpresaLogin',fld:'vSDTBUSCAEMPRESALOGIN',grid:9},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV16EmpresaId',fld:'vEMPRESAID'},{av:'A199EmpresaLinhaGrid',fld:'EMPRESALINHAGRID'},{av:'A2695EmpresaLinhaPrompt',fld:'EMPRESALINHAPROMPT'},{av:'A186EmpresaNome',fld:'EMPRESANOME'},{av:'A191EmpresaFantasia',fld:'EMPRESAFANTASIA'},{av:'A200EmpresaLogomarca',fld:'EMPRESALOGOMARCA'},{av:'A5834ParametroFcxUsuarioAlt',fld:'PARAMETROFCXUSUARIOALT'},{av:'A5833ParametroFCXQtdeDiasExcCarga',fld:'PARAMETROFCXQTDEDIASEXCCARGA'},{av:'AV24DataIni',fld:'vDATAINI'},{av:'AV25QtdeExcluida',fld:'vQTDEEXCLUIDA'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV27MsgErroAbertura',fld:'vMSGERROABERTURA'}],[{av:'AV17SNErro',fld:'vSNERRO'},{av:'AV16EmpresaId',fld:'vEMPRESAID'},{av:'AV38GXLvl50',fld:'vGXLVL50'},{av:'AV31ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV18ParLinGrd',fld:'vPARLINGRD'},{av:'AV19ParLinPro',fld:'vPARLINPRO'},{av:'AV20EmpresaAcessoAtual',fld:'vEMPRESAACESSOATUAL'},{av:'AV22ParametroFCXQtdeDiasExcCarga',fld:'vPARAMETROFCXQTDEDIASEXCCARGA'},{av:'AV23DataFim',fld:'vDATAFIM'},{av:'AV28CargaPDVEmpresaId',fld:'vCARGAPDVEMPRESAID'},{av:'AV25QtdeExcluida',fld:'vQTDEEXCLUIDA'},{av:'AV24DataIni',fld:'vDATAINI'},{av:'AV29DirInstalacao',fld:'vDIRINSTALACAO'},{av:'AV30DiretorioAux',fld:'vDIRETORIOAUX'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV26ArquivoZip',fld:'vARQUIVOZIP'},{av:'AV27MsgErroAbertura',fld:'vMSGERROABERTURA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   Grid1Container.addRefreshingVar({rfrVar:"AV15BmpSeleciona", rfrProp:"Value", gxAttId:"Bmpseleciona"});
   this.addGridBCProperty("Sdtbuscaempresalogin", ["EmpresaNome"], this.GXValidFnc[17], "AV13SdtBuscaEmpresaLogin");
   this.InitStandaloneVars( );
});
gx.setParentObj(new htrocarempresa());
