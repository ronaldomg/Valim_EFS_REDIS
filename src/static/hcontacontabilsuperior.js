/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:42:36.19
*/
gx.evt.autoSkip = false;
gx.define('hcontacontabilsuperior', false, function () {
   this.ServerClass =  "hcontacontabilsuperior" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A176EmpresaContaContabilEmpresaId=gx.fn.getControlValue("EMPRESACONTACONTABILEMPRESAID") ;
      this.AV10EmpresaContaContabilEmpresaId=gx.fn.getControlValue("vEMPRESACONTACONTABILEMPRESAID") ;
      this.A62ContaContabilId=gx.fn.getControlValue("CONTACONTABILID") ;
      this.AV11ContaContabilId=gx.fn.getControlValue("vCONTACONTABILID") ;
      this.A63ContaContabilNome=gx.fn.getControlValue("CONTACONTABILNOME") ;
      this.A165ContaContabilSuperior=gx.fn.getControlValue("CONTACONTABILSUPERIOR") ;
      this.AV14SdtContas=gx.fn.getControlValue("vSDTCONTAS") ;
   };
   this.e11i92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15i92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e16i92_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,11];
   this.GXLastCtrlId =11;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",7,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hcontacontabilsuperior",[],true,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","","","","");
   Grid1Container.addTextBlock('TXTSUP',null);
   Grid1Container.endCell();
   Grid1Container.endRow();
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[10]={fld:"TXTSUP", format:0,grid:7};
   GXValidFnc[11]={fld:"DIV2", format:2,grid:0};
   this.AV10EmpresaContaContabilEmpresaId = "" ;
   this.AV11ContaContabilId = "" ;
   this.A62ContaContabilId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A165ContaContabilSuperior = "" ;
   this.AV14SdtContas = [ ] ;
   this.Events = {"e11i92_client": ["'FECHAR'", true] ,"e15i92_client": ["ENTER", true] ,"e16i92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV14SdtContas',fld:'vSDTCONTAS'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV10EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID',hsh:true},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV11ContaContabilId',fld:'vCONTACONTABILID',hsh:true},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A165ContaContabilSuperior',fld:'CONTACONTABILSUPERIOR'}],[{av:'AV14SdtContas',fld:'vSDTCONTAS'},{av:'AV13ContaContabilSuperior',fld:'vCONTACONTABILSUPERIOR'},{av:'AV19GXLvl33',fld:'vGXLVL33'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV14SdtContas',fld:'vSDTCONTAS'}],[{av:'AV15Count',fld:'vCOUNT'},{av:'gx.fn.getCtrlProperty("TXTSUP","Caption")',ctrl:'TXTSUP',prop:'Caption'}]];
   this.setVCMap("A176EmpresaContaContabilEmpresaId", "EMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV10EmpresaContaContabilEmpresaId", "vEMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("A62ContaContabilId", "CONTACONTABILID", 0, "svchar");
   this.setVCMap("AV11ContaContabilId", "vCONTACONTABILID", 0, "svchar");
   this.setVCMap("A63ContaContabilNome", "CONTACONTABILNOME", 0, "svchar");
   this.setVCMap("A165ContaContabilSuperior", "CONTACONTABILSUPERIOR", 0, "svchar");
   this.setVCMap("AV14SdtContas", "vSDTCONTAS", 0, "Collchar");
   this.setVCMap("A176EmpresaContaContabilEmpresaId", "EMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV10EmpresaContaContabilEmpresaId", "vEMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("A62ContaContabilId", "CONTACONTABILID", 0, "svchar");
   this.setVCMap("AV11ContaContabilId", "vCONTACONTABILID", 0, "svchar");
   this.setVCMap("A63ContaContabilNome", "CONTACONTABILNOME", 0, "svchar");
   this.setVCMap("A165ContaContabilSuperior", "CONTACONTABILSUPERIOR", 0, "svchar");
   this.setVCMap("AV14SdtContas", "vSDTCONTAS", 0, "Collchar");
   Grid1Container.addRefreshingVar({rfrVar:"A176EmpresaContaContabilEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV10EmpresaContaContabilEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A62ContaContabilId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11ContaContabilId"});
   Grid1Container.addRefreshingVar({rfrVar:"A63ContaContabilNome"});
   Grid1Container.addRefreshingVar({rfrVar:"A165ContaContabilSuperior"});
   Grid1Container.addRefreshingVar({rfrVar:"AV14SdtContas"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcontacontabilsuperior());
