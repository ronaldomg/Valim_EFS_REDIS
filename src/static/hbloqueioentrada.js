/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:34:43.6
*/
gx.evt.autoSkip = false;
gx.define('hbloqueioentrada', false, function () {
   this.ServerClass =  "hbloqueioentrada" ;
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
      this.AV18NomePrograma=gx.fn.getControlValue("vNOMEPROGRAMA") ;
      this.AV31TipoConsulta=gx.fn.getControlValue("vTIPOCONSULTA") ;
   };
   this.e1123n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1423n2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1523n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13];
   this.GXLastCtrlId =13;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={fld:"TXTMSG", format:0,grid:0};
   this.AV18NomePrograma = "" ;
   this.AV31TipoConsulta = "" ;
   this.Events = {"e1123n2_client": ["'FECHAR'", true] ,"e1423n2_client": ["ENTER", true] ,"e1523n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18NomePrograma',fld:'vNOMEPROGRAMA',hsh:true},{av:'AV31TipoConsulta',fld:'vTIPOCONSULTA',hsh:true}],[{av:'AV20ParmStr1',fld:'vPARMSTR1'},{av:'AV19NomeProgramaAux',fld:'vNOMEPROGRAMAAUX'},{av:'AV22SnClientePagRec',fld:'vSNCLIENTEPAGREC'},{av:'AV24SnFornecedorPagRec',fld:'vSNFORNECEDORPAGREC'},{av:'AV25SnFabricantePagRec',fld:'vSNFABRICANTEPAGREC'},{av:'AV26SnPromptPagRec',fld:'vSNPROMPTPAGREC'},{av:'AV23PessoaIdParmPagRec',fld:'vPESSOAIDPARMPAGREC'},{av:'AV27SituacaoContaParmPagRec',fld:'vSITUACAOCONTAPARMPAGREC'},{av:'AV28TipoTelaPagRec',fld:'vTIPOTELAPAGREC'},{av:'AV29PagarOuReceber',fld:'vPAGAROURECEBER'},{av:'AV30PessoaIdParm',fld:'vPESSOAIDPARM'},{av:'AV21Split',fld:'vSPLIT'},{av:'AV31TipoConsulta',fld:'vTIPOCONSULTA',hsh:true}]];
   this.setVCMap("AV18NomePrograma", "vNOMEPROGRAMA", 0, "svchar");
   this.setVCMap("AV31TipoConsulta", "vTIPOCONSULTA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbloqueioentrada());
