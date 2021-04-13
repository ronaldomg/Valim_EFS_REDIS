/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:15:0.64
*/
gx.evt.autoSkip = false;
gx.define('hexcluiassociados', false, function () {
   this.ServerClass =  "hexcluiassociados" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV26EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID") ;
      this.AV27ClassificacaoIdParm=gx.fn.getControlValue("vCLASSIFICACAOIDPARM") ;
   };
   this.e11sf2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13sf2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15sf2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16sf2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17sf2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19sf2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,13,15,18,21,24,26,29,31,34,36,39,41,44,46,56];
   this.GXLastCtrlId =56;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABTXT",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV39TxtTela",gxold:"OV39TxtTela",gxvar:"AV39TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV39TxtTela=Value},v2z:function(Value){gx.O.ZV39TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV39TxtTela)},c2v:function(){gx.O.AV39TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"IMAGE2",grid:0};
   GXValidFnc[15]={fld:"IMAGE1",grid:0};
   GXValidFnc[18]={fld:"TABLE7",grid:0};
   GXValidFnc[21]={fld:"TABLE3",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOEXECUCAO",gxz:"ZV21TipoExecucao",gxold:"OV21TipoExecucao",gxvar:"AV21TipoExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21TipoExecucao=Value},v2z:function(Value){gx.O.ZV21TipoExecucao=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOEXECUCAO",gx.O.AV21TipoExecucao)},c2v:function(){gx.O.AV21TipoExecucao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOEXECUCAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIAID",gxz:"ZV22CategoriaId",gxold:"OV22CategoriaId",gxvar:"AV22CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV22CategoriaId=Value},v2z:function(Value){gx.O.ZV22CategoriaId=Value},v2c:function(){gx.fn.setComboBoxValue("vCATEGORIAID",gx.O.AV22CategoriaId)},c2v:function(){gx.O.AV22CategoriaId=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIAID")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:4,dec:0,sign:true,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEASSOCIADOSEXC",gxz:"ZV23QtdeAssociadosExc",gxold:"OV23QtdeAssociadosExc",gxvar:"AV23QtdeAssociadosExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23QtdeAssociadosExc=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23QtdeAssociadosExc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEASSOCIADOSEXC",gx.O.AV23QtdeAssociadosExc,0)},c2v:function(){gx.O.AV23QtdeAssociadosExc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEASSOCIADOSEXC",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMESELECAO",gxz:"ZV24NomeSelecao",gxold:"OV24NomeSelecao",gxvar:"AV24NomeSelecao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24NomeSelecao=Value},v2z:function(Value){gx.O.ZV24NomeSelecao=Value},v2c:function(){gx.fn.setControlValue("vNOMESELECAO",gx.O.AV24NomeSelecao,0)},c2v:function(){gx.O.AV24NomeSelecao=this.val()},val:function(){return gx.fn.getControlValue("vNOMESELECAO")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEAUTORIZADOR",gxz:"ZV29NomeAutorizador",gxold:"OV29NomeAutorizador",gxvar:"AV29NomeAutorizador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29NomeAutorizador=Value},v2z:function(Value){gx.O.ZV29NomeAutorizador=Value},v2c:function(){gx.fn.setControlValue("vNOMEAUTORIZADOR",gx.O.AV29NomeAutorizador,0)},c2v:function(){gx.O.AV29NomeAutorizador=this.val()},val:function(){return gx.fn.getControlValue("vNOMEAUTORIZADOR")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"BTNHELP",grid:0};
   this.AV39TxtTela = "" ;
   this.ZV39TxtTela = "" ;
   this.OV39TxtTela = "" ;
   this.AV21TipoExecucao = "" ;
   this.ZV21TipoExecucao = "" ;
   this.OV21TipoExecucao = "" ;
   this.AV22CategoriaId = "" ;
   this.ZV22CategoriaId = "" ;
   this.OV22CategoriaId = "" ;
   this.AV23QtdeAssociadosExc = 0 ;
   this.ZV23QtdeAssociadosExc = 0 ;
   this.OV23QtdeAssociadosExc = 0 ;
   this.AV24NomeSelecao = "" ;
   this.ZV24NomeSelecao = "" ;
   this.OV24NomeSelecao = "" ;
   this.AV29NomeAutorizador = "" ;
   this.ZV29NomeAutorizador = "" ;
   this.OV29NomeAutorizador = "" ;
   this.AV39TxtTela = "" ;
   this.AV21TipoExecucao = "" ;
   this.AV22CategoriaId = "" ;
   this.AV23QtdeAssociadosExc = 0 ;
   this.AV24NomeSelecao = "" ;
   this.AV29NomeAutorizador = "" ;
   this.Events = {"e11sf2_client": ["'FECHAR'", true] ,"e13sf2_client": ["ENTER", true] ,"e15sf2_client": ["'SALVARTXT'", true] ,"e16sf2_client": ["VTXTTELA.CLICK", true] ,"e17sf2_client": ["'EXCLUIRTXT'", true] ,"e19sf2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV59Pgmname',fld:'vPGMNAME'},{av:'AV53SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV39TxtTela',fld:'vTXTTELA'}],[{av:'AV39TxtTela',fld:'vTXTTELA'},{av:'AV62GXV2',fld:'vGXV2'},{av:'AV54SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV61GXV1',fld:'vGXV1'},{av:'AV24NomeSelecao',fld:'vNOMESELECAO'},{av:'AV29NomeAutorizador',fld:'vNOMEAUTORIZADOR'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21TipoExecucao',fld:'vTIPOEXECUCAO'},{av:'AV22CategoriaId',fld:'vCATEGORIAID'},{av:'AV23QtdeAssociadosExc',fld:'vQTDEASSOCIADOSEXC'},{av:'AV29NomeAutorizador',fld:'vNOMEAUTORIZADOR'},{av:'AV24NomeSelecao',fld:'vNOMESELECAO'},{av:'AV51SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV39TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV59Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV60Pgmdesc',fld:'vPGMDESC'}],[{av:'AV28tpErro',fld:'vTPERRO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV39TxtTela',fld:'vTXTTELA'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV55OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV39TxtTela',fld:'vTXTTELA'},{av:'AV59Pgmname',fld:'vPGMNAME'},{av:'AV24NomeSelecao',fld:'vNOMESELECAO'},{av:'AV29NomeAutorizador',fld:'vNOMEAUTORIZADOR'}],[{av:'AV55OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV59Pgmname',fld:'vPGMNAME'},{av:'AV53SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV39TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV61GXV1',fld:'vGXV1'},{av:'AV54SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV24NomeSelecao',fld:'vNOMESELECAO'},{av:'AV29NomeAutorizador',fld:'vNOMEAUTORIZADOR'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV59Pgmname',fld:'vPGMNAME'},{av:'AV39TxtTela',fld:'vTXTTELA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV26EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV27ClassificacaoIdParm", "vCLASSIFICACAOIDPARM", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexcluiassociados());
