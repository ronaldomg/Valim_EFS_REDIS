/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:1:45.1
*/
gx.evt.autoSkip = false;
gx.define('hhome', false, function () {
   this.ServerClass =  "hhome" ;
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
   this.s1514_client=function()
   {
      this.AV69SNCadNv1 =  "N"  ;
      this.AV31PermissaoMenuItem =  {FmlMnuCod:0,FmlMnuOrd:0,FmlMnuLnk:"",FmlTpoLnk:"",FmlMnuNom:"",GrpMnuCod:0,GrpMnuOrd:0,GrpMnuLnk:"",GrpTpoLnk:"",GrpMnuNom:"",SbgMnuCod:0,SbgMnuOrd:0,SbgMnuLnk:"",SbgTpoLnk:"",SbgMnuNom:"",Sistema:"",CalculaCustoMedio:""}  ;
      this.AV31PermissaoMenuItem.FmlMnuOrd = gx.num.trunc( this.AV68MenuNivel1Ordem ,0) ;
      this.AV31PermissaoMenuItem.FmlMnuCod = gx.num.trunc( this.AV67MenuNivel1Id ,0) ;
      this.AV31PermissaoMenuItem.FmlMnuNom =  this.AV56MenuNivel1Nome  ;
      this.AV31PermissaoMenuItem.FmlMnuLnk =  gx.text.lower( this.AV74ProgramaLink1)  ;
      this.AV31PermissaoMenuItem.FmlTpoLnk =  this.AV75ProgramaTipo1  ;
      this.AV31PermissaoMenuItem.Sistema =  this.AV66SistemaId  ;
      this.AV31PermissaoMenuItem.CalculaCustoMedio =  ((""==this.AV73CalcCustoMedio1) ? "N" : this.AV73CalcCustoMedio1)  ;
      this.AV29PermMenus.push(this.AV31PermissaoMenuItem) ;
      this.AV30AuxMenu.push(this.AV31PermissaoMenuItem) ;
   };
   this.s1615_client=function()
   {
      this.AV70SNCadNv2 =  "N"  ;
      this.AV31PermissaoMenuItem =  {FmlMnuCod:0,FmlMnuOrd:0,FmlMnuLnk:"",FmlTpoLnk:"",FmlMnuNom:"",GrpMnuCod:0,GrpMnuOrd:0,GrpMnuLnk:"",GrpTpoLnk:"",GrpMnuNom:"",SbgMnuCod:0,SbgMnuOrd:0,SbgMnuLnk:"",SbgTpoLnk:"",SbgMnuNom:"",Sistema:"",CalculaCustoMedio:""}  ;
      this.AV31PermissaoMenuItem.FmlMnuOrd = gx.num.trunc( this.AV68MenuNivel1Ordem ,0) ;
      this.AV31PermissaoMenuItem.FmlMnuCod = gx.num.trunc( this.AV67MenuNivel1Id ,0) ;
      this.AV31PermissaoMenuItem.FmlMnuNom =  this.AV56MenuNivel1Nome  ;
      this.AV31PermissaoMenuItem.FmlMnuLnk =  gx.text.lower( this.AV74ProgramaLink1)  ;
      this.AV31PermissaoMenuItem.FmlTpoLnk =  this.AV75ProgramaTipo1  ;
      this.AV31PermissaoMenuItem.Sistema =  this.AV66SistemaId  ;
      this.AV31PermissaoMenuItem.CalculaCustoMedio =  ((""==this.AV73CalcCustoMedio1) ? "N" : this.AV73CalcCustoMedio1)  ;
      this.AV31PermissaoMenuItem.GrpMnuOrd = gx.num.trunc( this.AV71MenuNivel2Ordem ,0) ;
      this.AV31PermissaoMenuItem.GrpMnuCod = gx.num.trunc( this.AV72MenuNivel2Id ,0) ;
      this.AV31PermissaoMenuItem.GrpMnuNom =  this.AV83MenuNivel2Descricao  ;
      this.AV31PermissaoMenuItem.GrpMnuLnk =  gx.text.lower( this.AV76ProgramaLink2)  ;
      this.AV31PermissaoMenuItem.GrpTpoLnk =  this.AV77ProgramaTipo2  ;
      this.AV31PermissaoMenuItem.CalculaCustoMedio =  ((""==this.AV78CalcCustoMedio2) ? "N" : this.AV78CalcCustoMedio2)  ;
      this.AV29PermMenus.push(this.AV31PermissaoMenuItem) ;
      this.AV30AuxMenu.push(this.AV31PermissaoMenuItem) ;
   };
   this.e142b2_client=function()
   {
      this.executeServerEvent("'RECALCULOCUSTOMEDIO'", true, null, false, false);
   };
   this.e152b2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e162b2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,9,10];
   this.GXLastCtrlId =10;
   GXValidFnc[2]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[3]={lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLINKPROGRAMA",gxz:"ZV59LinkPrograma",gxold:"OV59LinkPrograma",gxvar:"AV59LinkPrograma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59LinkPrograma=Value},v2z:function(Value){gx.O.ZV59LinkPrograma=Value},v2c:function(){gx.fn.setControlValue("vLINKPROGRAMA",gx.O.AV59LinkPrograma,0)},c2v:function(){gx.O.AV59LinkPrograma=this.val()},val:function(){return gx.fn.getControlValue("vLINKPROGRAMA")},nac:gx.falseFn};
   GXValidFnc[4]={fld:"STYLES", format:2,grid:0};
   GXValidFnc[5]={fld:"SCRIPTS", format:2,grid:0};
   GXValidFnc[6]={fld:"MENU", format:2,grid:0};
   GXValidFnc[7]={fld:"VE", format:0,grid:0};
   GXValidFnc[9]={fld:"TXTOPCAO", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMNUCOD",gxz:"ZV15MnuCod",gxold:"OV15MnuCod",gxvar:"AV15MnuCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15MnuCod=Value},v2z:function(Value){gx.O.ZV15MnuCod=Value},v2c:function(){gx.fn.setControlValue("vMNUCOD",gx.O.AV15MnuCod,0)},c2v:function(){gx.O.AV15MnuCod=this.val()},val:function(){return gx.fn.getControlValue("vMNUCOD")},nac:gx.falseFn};
   this.AV59LinkPrograma = "" ;
   this.ZV59LinkPrograma = "" ;
   this.OV59LinkPrograma = "" ;
   this.AV15MnuCod = "" ;
   this.ZV15MnuCod = "" ;
   this.OV15MnuCod = "" ;
   this.AV59LinkPrograma = "" ;
   this.AV15MnuCod = "" ;
   this.A141ProgramaId = 0 ;
   this.A140SistemaId = "" ;
   this.A500ProgramaPrivilegio = "" ;
   this.A77MenuNivel2Id = 0 ;
   this.A76MenuNivel1Id = 0 ;
   this.A378ProgramaLinkNivel2 = "" ;
   this.A376SistemaNivel2 = "" ;
   this.A377ProgramaNivel2 = 0 ;
   this.A384ProgramaNivel3 = 0 ;
   this.A382MenuNivel3Ordem = 0 ;
   this.A367SistemaNivel1 = "" ;
   this.A375MenuNivel2Ordem = 0 ;
   this.A75UsuarioId = "" ;
   this.A506ProgramaUsuarioSnInclusao = "" ;
   this.A244GrupoId = 0 ;
   this.A502ProgramaGrupoSnInclusao = "" ;
   this.A138EmpresaId = "" ;
   this.A214SistemaEmpresaVencimento = gx.date.nullDate() ;
   this.A369ProgramaLinkNivel1 = "" ;
   this.A79MenuNivel1Nome = "" ;
   this.A368ProgramaNivel1 = 0 ;
   this.A370ProgramaTipoNivel1 = "" ;
   this.A8938ProgramaCalcCustoNivel1 = "" ;
   this.A373MenuNivel1Ordem = 0 ;
   this.A80MenuNivel2Descricao = "" ;
   this.A379ProgramaTipoNivel2 = "" ;
   this.A8939ProgramaCalcCustoNivel2 = "" ;
   this.A385ProgramaLinkNivel3 = "" ;
   this.A383SistemaNivel3 = "" ;
   this.A78MenuNivel3Id = 0 ;
   this.A81MenuNivel3Descricao = "" ;
   this.A386ProgramaTipoNivel3 = "" ;
   this.A8940ProgramaCalcCustoNivel3 = "" ;
   this.A568TipoPermissaoId = 0 ;
   this.A3138TipoPermissaoSnControla = "" ;
   this.A566TipoPermissaoUsuarioUsuarioId = "" ;
   this.A569UsuarioPermissaoId = 0 ;
   this.A188EmpresaComplemento = "" ;
   this.AV73CalcCustoMedio1 = "" ;
   this.AV31PermissaoMenuItem = {} ;
   this.AV66SistemaId = "" ;
   this.AV75ProgramaTipo1 = "" ;
   this.AV74ProgramaLink1 = "" ;
   this.AV56MenuNivel1Nome = "" ;
   this.AV67MenuNivel1Id = 0 ;
   this.AV68MenuNivel1Ordem = 0 ;
   this.AV69SNCadNv1 = "" ;
   this.AV78CalcCustoMedio2 = "" ;
   this.AV77ProgramaTipo2 = "" ;
   this.AV76ProgramaLink2 = "" ;
   this.AV83MenuNivel2Descricao = "" ;
   this.AV72MenuNivel2Id = 0 ;
   this.AV71MenuNivel2Ordem = 0 ;
   this.AV70SNCadNv2 = "" ;
   this.Events = {"e142b2_client": ["'RECALCULOCUSTOMEDIO'", true] ,"e152b2_client": ["ENTER", true] ,"e162b2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'gx.fn.getCtrlProperty("MENU","Caption")',ctrl:'MENU',prop:'Caption'},{av:'AV59LinkPrograma',fld:'vLINKPROGRAMA'}],[{av:'AV17ContaMenu',fld:'vCONTAMENU'},{av:'gx.fn.getCtrlProperty("JAVASCRIPT","Caption")',ctrl:'JAVASCRIPT',prop:'Caption'},{av:'gx.fn.getCtrlProperty("MENU","Caption")',ctrl:'MENU',prop:'Caption'},{av:'AV18Aux',fld:'vAUX'},{av:'AV19vSequencia',fld:'vVSEQUENCIA'}]];
   this.EvtParms["LOAD"] = [[{av:'AV13UsrTip',fld:'vUSRTIP'},{av:'gx.fn.getCtrlProperty("MENU","Caption")',ctrl:'MENU',prop:'Caption'},{av:'A373MenuNivel1Ordem',fld:'MENUNIVEL1ORDEM'},{av:'AV88BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'A369ProgramaLinkNivel1',fld:'PROGRAMALINKNIVEL1'},{av:'AV87ProgramaLinkNivel1',fld:'vPROGRAMALINKNIVEL1'},{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'},{av:'A370ProgramaTipoNivel1',fld:'PROGRAMATIPONIVEL1'},{av:'A79MenuNivel1Nome',fld:'MENUNIVEL1NOME'},{av:'A8938ProgramaCalcCustoNivel1',fld:'PROGRAMACALCCUSTONIVEL1'},{av:'A367SistemaNivel1',fld:'SISTEMANIVEL1'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV42EmpresaId',fld:'vEMPRESAID'},{av:'A214SistemaEmpresaVencimento',fld:'SISTEMAEMPRESAVENCIMENTO'},{av:'AV17ContaMenu',fld:'vCONTAMENU'},{av:'A375MenuNivel2Ordem',fld:'MENUNIVEL2ORDEM'},{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'},{av:'A378ProgramaLinkNivel2',fld:'PROGRAMALINKNIVEL2'},{av:'A80MenuNivel2Descricao',fld:'MENUNIVEL2DESCRICAO'},{av:'A8939ProgramaCalcCustoNivel2',fld:'PROGRAMACALCCUSTONIVEL2'},{av:'A379ProgramaTipoNivel2',fld:'PROGRAMATIPONIVEL2'},{av:'A382MenuNivel3Ordem',fld:'MENUNIVEL3ORDEM'},{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'},{av:'A385ProgramaLinkNivel3',fld:'PROGRAMALINKNIVEL3'},{av:'A81MenuNivel3Descricao',fld:'MENUNIVEL3DESCRICAO'},{av:'A8940ProgramaCalcCustoNivel3',fld:'PROGRAMACALCCUSTONIVEL3'},{av:'A386ProgramaTipoNivel3',fld:'PROGRAMATIPONIVEL3'},{av:'A383SistemaNivel3',fld:'SISTEMANIVEL3'},{av:'A368ProgramaNivel1',fld:'PROGRAMANIVEL1'},{av:'AV79SNSistemaEmpresa',fld:'vSNSISTEMAEMPRESA'},{av:'AV63SNPrivilegio',fld:'vSNPRIVILEGIO'},{av:'A376SistemaNivel2',fld:'SISTEMANIVEL2'},{av:'A377ProgramaNivel2',fld:'PROGRAMANIVEL2'},{av:'A384ProgramaNivel3',fld:'PROGRAMANIVEL3'},{av:'AV24vScriptAuxiliar',fld:'vVSCRIPTAUXILIAR'},{av:'AV66SistemaId',fld:'vSISTEMAID'},{av:'AV44SistemaIdAux',fld:'vSISTEMAIDAUX'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV80ProgramaId',fld:'vPROGRAMAID'},{av:'A500ProgramaPrivilegio',fld:'PROGRAMAPRIVILEGIO'},{av:'AV84Nivel',fld:'vNIVEL'},{av:'AV68MenuNivel1Ordem',fld:'vMENUNIVEL1ORDEM'},{av:'AV67MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'AV56MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'AV74ProgramaLink1',fld:'vPROGRAMALINK1'},{av:'AV75ProgramaTipo1',fld:'vPROGRAMATIPO1'},{av:'AV73CalcCustoMedio1',fld:'vCALCCUSTOMEDIO1'},{av:'AV29PermMenus',fld:'vPERMMENUS'},{av:'AV30AuxMenu',fld:'vAUXMENU'},{av:'AV71MenuNivel2Ordem',fld:'vMENUNIVEL2ORDEM'},{av:'AV72MenuNivel2Id',fld:'vMENUNIVEL2ID'},{av:'AV83MenuNivel2Descricao',fld:'vMENUNIVEL2DESCRICAO'},{av:'AV76ProgramaLink2',fld:'vPROGRAMALINK2'},{av:'AV77ProgramaTipo2',fld:'vPROGRAMATIPO2'},{av:'AV78CalcCustoMedio2',fld:'vCALCCUSTOMEDIO2'},{av:'A244GrupoId',fld:'GRUPOID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV12UsrCod',fld:'vUSRCOD'},{av:'A502ProgramaGrupoSnInclusao',fld:'PROGRAMAGRUPOSNINCLUSAO'},{av:'A506ProgramaUsuarioSnInclusao',fld:'PROGRAMAUSUARIOSNINCLUSAO'},{av:'AV82ProgramaIdAux',fld:'vPROGRAMAIDAUX'}],[{av:'AV87ProgramaLinkNivel1',fld:'vPROGRAMALINKNIVEL1'},{av:'AV88BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'gx.fn.getCtrlProperty("MENU","Caption")',ctrl:'MENU',prop:'Caption'},{av:'gx.fn.getCtrlProperty("VE","Caption")',ctrl:'VE',prop:'Caption'},{av:'AV57TPDESCRICAO',fld:'vTPDESCRICAO'},{av:'AV58EquipamentoDescricao',fld:'vEQUIPAMENTODESCRICAO'},{av:'AV19vSequencia',fld:'vVSEQUENCIA'},{av:'AV20FmlMnuCod',fld:'vFMLMNUCOD'},{av:'AV22StrLink',fld:'vSTRLINK'},{av:'AV23Target',fld:'vTARGET'},{av:'AV56MenuNivel1Nome',fld:'vMENUNIVEL1NOME'},{av:'AV60ProgramaCalcCustoNivel1',fld:'vPROGRAMACALCCUSTONIVEL1'},{av:'AV24vScriptAuxiliar',fld:'vVSCRIPTAUXILIAR'},{av:'AV17ContaMenu',fld:'vCONTAMENU'},{av:'AV25GrpMnuCod',fld:'vGRPMNUCOD'},{av:'AV26GrpMnuNom',fld:'vGRPMNUNOM'},{av:'AV27GrpMnuLnk',fld:'vGRPMNULNK'},{av:'AV61ProgramaCalcCustoNivel2',fld:'vPROGRAMACALCCUSTONIVEL2'},{av:'AV33Sbgmnunom',fld:'vSBGMNUNOM'},{av:'AV62ProgramaCalcCustoNivel3',fld:'vPROGRAMACALCCUSTONIVEL3'},{av:'AV29PermMenus',fld:'vPERMMENUS'},{av:'AV30AuxMenu',fld:'vAUXMENU'},{av:'AV69SNCadNv1',fld:'vSNCADNV1'},{av:'AV84Nivel',fld:'vNIVEL'},{av:'AV68MenuNivel1Ordem',fld:'vMENUNIVEL1ORDEM'},{av:'AV67MenuNivel1Id',fld:'vMENUNIVEL1ID'},{av:'AV66SistemaId',fld:'vSISTEMAID'},{av:'AV44SistemaIdAux',fld:'vSISTEMAIDAUX'},{av:'AV80ProgramaId',fld:'vPROGRAMAID'},{av:'AV74ProgramaLink1',fld:'vPROGRAMALINK1'},{av:'AV75ProgramaTipo1',fld:'vPROGRAMATIPO1'},{av:'AV73CalcCustoMedio1',fld:'vCALCCUSTOMEDIO1'},{av:'AV70SNCadNv2',fld:'vSNCADNV2'},{av:'AV71MenuNivel2Ordem',fld:'vMENUNIVEL2ORDEM'},{av:'AV72MenuNivel2Id',fld:'vMENUNIVEL2ID'},{av:'AV83MenuNivel2Descricao',fld:'vMENUNIVEL2DESCRICAO'},{av:'AV76ProgramaLink2',fld:'vPROGRAMALINK2'},{av:'AV77ProgramaTipo2',fld:'vPROGRAMATIPO2'},{av:'AV78CalcCustoMedio2',fld:'vCALCCUSTOMEDIO2'},{av:'AV31PermissaoMenuItem',fld:'vPERMISSAOMENUITEM'},{av:'AV112GXV1',fld:'vGXV1'},{av:'AV79SNSistemaEmpresa',fld:'vSNSISTEMAEMPRESA'},{av:'AV64ProgramaPrivilegio',fld:'vPROGRAMAPRIVILEGIO'},{av:'AV63SNPrivilegio',fld:'vSNPRIVILEGIO'},{av:'AV82ProgramaIdAux',fld:'vPROGRAMAIDAUX'}]];
   this.EvtParms["'RECALCULOCUSTOMEDIO'"] = [[{av:'AV97Pgmname',fld:'vPGMNAME'}],[{av:'AV86DataFechamento',fld:'vDATAFECHAMENTO'},{av:'AV97Pgmname',fld:'vPGMNAME'}]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hhome());
