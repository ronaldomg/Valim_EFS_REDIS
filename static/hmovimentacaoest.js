/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:33:4.88
*/
gx.evt.autoSkip = false;
gx.define('hmovimentacaoest', false, function () {
   this.ServerClass =  "hmovimentacaoest" ;
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
   };
   this.e1112f2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e1312f2_client=function()
   {
      this.executeServerEvent("'PRODUCAO'", true, null, false, false);
   };
   this.e1412f2_client=function()
   {
      this.executeServerEvent("'TRANSFERENCIAPRODUTO'", true, null, false, false);
   };
   this.e1612f2_client=function()
   {
      this.executeServerEvent("'CONSULTAENTRADA'", true, null, false, false);
   };
   this.e1712f2_client=function()
   {
      this.executeServerEvent("'CONSULTAPREVENDA'", true, null, false, false);
   };
   this.e1912f2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e2012f2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3];
   this.GXLastCtrlId =3;
   GXValidFnc[3]={fld:"MENU", format:2,grid:0};
   this.A498ProgramaLink = "" ;
   this.A140SistemaId = "" ;
   this.A8937ProgramaSnCalculaCustoMedio = "" ;
   this.Events = {"e1112f2_client": ["'FECHAR'", true] ,"e1312f2_client": ["'PRODUCAO'", true] ,"e1412f2_client": ["'TRANSFERENCIAPRODUTO'", true] ,"e1612f2_client": ["'CONSULTAENTRADA'", true] ,"e1712f2_client": ["'CONSULTAPREVENDA'", true] ,"e1912f2_client": ["ENTER", true] ,"e2012f2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV39linkAtalho',fld:'vLINKATALHO'}],[{av:'AV39linkAtalho',fld:'vLINKATALHO'}]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV29i',fld:'vI'}]];
   this.EvtParms["'PRODUCAO'"] = [[{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'},{av:'A8937ProgramaSnCalculaCustoMedio',fld:'PROGRAMASNCALCULACUSTOMEDIO'},{av:'AV38link',fld:'vLINK'},{av:'AV39linkAtalho',fld:'vLINKATALHO'},{av:'Gx_date',fld:'vTODAY'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'AV44GXLvl81',fld:'vGXLVL81'},{av:'AV35ProgramaSnCalculaCustoMedio',fld:'vPROGRAMASNCALCULACUSTOMEDIO'},{av:'AV38link',fld:'vLINK'},{av:'AV37Split',fld:'vSPLIT'},{av:'AV39linkAtalho',fld:'vLINKATALHO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'Gx_date',fld:'vTODAY'}]];
   this.EvtParms["'TRANSFERENCIAPRODUTO'"] = [[{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'},{av:'A8937ProgramaSnCalculaCustoMedio',fld:'PROGRAMASNCALCULACUSTOMEDIO'},{av:'AV38link',fld:'vLINK'},{av:'AV39linkAtalho',fld:'vLINKATALHO'},{av:'Gx_date',fld:'vTODAY'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'AV45GXLvl95',fld:'vGXLVL95'},{av:'AV35ProgramaSnCalculaCustoMedio',fld:'vPROGRAMASNCALCULACUSTOMEDIO'},{av:'AV38link',fld:'vLINK'},{av:'AV37Split',fld:'vSPLIT'},{av:'AV39linkAtalho',fld:'vLINKATALHO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'Gx_date',fld:'vTODAY'}]];
   this.EvtParms["'CONSULTAENTRADA'"] = [[],[]];
   this.EvtParms["'CONSULTAPREVENDA'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmovimentacaoest());
