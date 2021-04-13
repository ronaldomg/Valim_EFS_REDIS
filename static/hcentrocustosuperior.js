/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:42:35.59
*/
gx.evt.autoSkip = false;
gx.define('hcentrocustosuperior', false, function () {
   this.ServerClass =  "hcentrocustosuperior" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A153EmpresaCentroCustoEmpresaId=gx.fn.getControlValue("EMPRESACENTROCUSTOEMPRESAID") ;
      this.AV14EmpresaCentroCustoEmpresaId=gx.fn.getControlValue("vEMPRESACENTROCUSTOEMPRESAID") ;
      this.A51CentroCustoId=gx.fn.getControlValue("CENTROCUSTOID") ;
      this.AV13CentroCustoId=gx.fn.getControlValue("vCENTROCUSTOID") ;
      this.A52CentroCustoDescricao=gx.fn.getControlValue("CENTROCUSTODESCRICAO") ;
      this.A150CentroCustoSuperior=gx.fn.getControlValue("CENTROCUSTOSUPERIOR") ;
      this.AV11SdtCCusto=gx.fn.getControlValue("vSDTCCUSTO") ;
   };
   this.e11i82_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, arguments[0], false, false);
   };
   this.e12i82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16i82_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,9,10];
   this.GXLastCtrlId =10;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",6,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hcentrocustosuperior",[],true,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","","","","");
   Grid1Container.addTextBlock('TXTSUP',null);
   Grid1Container.endCell();
   Grid1Container.endRow();
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[9]={fld:"TXTSUP", format:0,grid:6};
   GXValidFnc[10]={fld:"DIV2", format:2,grid:0};
   this.AV14EmpresaCentroCustoEmpresaId = "" ;
   this.AV13CentroCustoId = "" ;
   this.A51CentroCustoId = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A150CentroCustoSuperior = "" ;
   this.AV11SdtCCusto = [ ] ;
   this.Events = {"e11i82_client": ["'FECHAR'", true] ,"e12i82_client": ["ENTER", true] ,"e16i82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV11SdtCCusto',fld:'vSDTCCUSTO'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'AV14EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID',hsh:true},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV13CentroCustoId',fld:'vCENTROCUSTOID',hsh:true},{av:'A52CentroCustoDescricao',fld:'CENTROCUSTODESCRICAO'},{av:'A150CentroCustoSuperior',fld:'CENTROCUSTOSUPERIOR'}],[{av:'AV11SdtCCusto',fld:'vSDTCCUSTO'},{av:'AV15CentroCustoSuperior',fld:'vCENTROCUSTOSUPERIOR'},{av:'AV19GXLvl34',fld:'vGXLVL34'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV11SdtCCusto',fld:'vSDTCCUSTO'}],[{av:'AV12Count',fld:'vCOUNT'},{av:'gx.fn.getCtrlProperty("TXTSUP","Caption")',ctrl:'TXTSUP',prop:'Caption'}]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A153EmpresaCentroCustoEmpresaId", "EMPRESACENTROCUSTOEMPRESAID", 0, "char");
   this.setVCMap("AV14EmpresaCentroCustoEmpresaId", "vEMPRESACENTROCUSTOEMPRESAID", 0, "char");
   this.setVCMap("A51CentroCustoId", "CENTROCUSTOID", 0, "svchar");
   this.setVCMap("AV13CentroCustoId", "vCENTROCUSTOID", 0, "svchar");
   this.setVCMap("A52CentroCustoDescricao", "CENTROCUSTODESCRICAO", 0, "svchar");
   this.setVCMap("A150CentroCustoSuperior", "CENTROCUSTOSUPERIOR", 0, "svchar");
   this.setVCMap("AV11SdtCCusto", "vSDTCCUSTO", 0, "Collchar");
   this.setVCMap("A153EmpresaCentroCustoEmpresaId", "EMPRESACENTROCUSTOEMPRESAID", 0, "char");
   this.setVCMap("AV14EmpresaCentroCustoEmpresaId", "vEMPRESACENTROCUSTOEMPRESAID", 0, "char");
   this.setVCMap("A51CentroCustoId", "CENTROCUSTOID", 0, "svchar");
   this.setVCMap("AV13CentroCustoId", "vCENTROCUSTOID", 0, "svchar");
   this.setVCMap("A52CentroCustoDescricao", "CENTROCUSTODESCRICAO", 0, "svchar");
   this.setVCMap("A150CentroCustoSuperior", "CENTROCUSTOSUPERIOR", 0, "svchar");
   this.setVCMap("AV11SdtCCusto", "vSDTCCUSTO", 0, "Collchar");
   Grid1Container.addRefreshingVar({rfrVar:"A153EmpresaCentroCustoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV14EmpresaCentroCustoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A51CentroCustoId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV13CentroCustoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A52CentroCustoDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A150CentroCustoSuperior"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11SdtCCusto"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcentrocustosuperior());
