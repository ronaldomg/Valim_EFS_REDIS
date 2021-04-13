/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:41:38.64
*/
gx.evt.autoSkip = false;
gx.define('hintegracaopatcontabilidade', false, function () {
   this.ServerClass =  "hintegracaopatcontabilidade" ;
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
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraofilial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOFILIAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e13i02_client=function()
   {
      this.executeServerEvent("'DIALOG'", true, null, false, false);
   };
   this.e11i02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14i02_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17i02_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,25,28,30,33,35,36,40,45,49,52,54,57,59,63,69,75,76,77,78,80,81];
   this.GXLastCtrlId =81;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOEXECUCAO",gxz:"ZV24TipoExecucao",gxold:"OV24TipoExecucao",gxvar:"AV24TipoExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24TipoExecucao=Value},v2z:function(Value){gx.O.ZV24TipoExecucao=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOEXECUCAO",gx.O.AV24TipoExecucao)},c2v:function(){gx.O.AV24TipoExecucao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOEXECUCAO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE9",grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREFERENCIA",gxz:"ZV22MesReferencia",gxold:"OV22MesReferencia",gxvar:"AV22MesReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22MesReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22MesReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREFERENCIA",gx.O.AV22MesReferencia,0)},c2v:function(){gx.O.AV22MesReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREFERENCIA",gxz:"ZV23AnoReferencia",gxold:"OV23AnoReferencia",gxvar:"AV23AnoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AnoReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23AnoReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREFERENCIA",gx.O.AV23AnoReferencia,0)},c2v:function(){gx.O.AV23AnoReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vULTDIAREFERENCIA",gxz:"ZV21UltDiaReferencia",gxold:"OV21UltDiaReferencia",gxvar:"AV21UltDiaReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21UltDiaReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21UltDiaReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vULTDIAREFERENCIA",gx.O.AV21UltDiaReferencia,0)},c2v:function(){gx.O.AV21UltDiaReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vULTDIAREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV18FilialId",gxold:"OV18FilialId",gxvar:"AV18FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV18FilialId,0)},c2v:function(){gx.O.AV18FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV19FilialNome",gxold:"OV19FilialNome",gxvar:"AV19FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19FilialNome=Value},v2z:function(Value){gx.O.ZV19FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV19FilialNome,0)},c2v:function(){gx.O.AV19FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCARJACONTABIL",gxz:"ZV20LancarJaContabil",gxold:"OV20LancarJaContabil",gxvar:"AV20LancarJaContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20LancarJaContabil=Value},v2z:function(Value){gx.O.ZV20LancarJaContabil=Value},v2c:function(){gx.fn.setCheckBoxValue("vLANCARJACONTABIL",gx.O.AV20LancarJaContabil,"S")},c2v:function(){gx.O.AV20LancarJaContabil=this.val()},val:function(){return gx.fn.getControlValue("vLANCARJACONTABIL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[45]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEXPLANCAM",gxz:"ZV124SnExpLancam",gxold:"OV124SnExpLancam",gxvar:"AV124SnExpLancam",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV124SnExpLancam=Value},v2z:function(Value){gx.O.ZV124SnExpLancam=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNEXPLANCAM",gx.O.AV124SnExpLancam,"S")},c2v:function(){gx.O.AV124SnExpLancam=this.val()},val:function(){return gx.fn.getControlValue("vSNEXPLANCAM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[52]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOOPERATIVA",gxz:"ZV127Cooperativa",gxold:"OV127Cooperativa",gxvar:"AV127Cooperativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV127Cooperativa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV127Cooperativa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOOPERATIVA",gx.O.AV127Cooperativa,0)},c2v:function(){gx.O.AV127Cooperativa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOOPERATIVA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODPAC",gxz:"ZV128CodPac",gxold:"OV128CodPac",gxvar:"AV128CodPac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV128CodPac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV128CodPac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODPAC",gx.O.AV128CodPac,0)},c2v:function(){gx.O.AV128CodPac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODPAC",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV125Diretorio",gxold:"OV125Diretorio",gxvar:"AV125Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV125Diretorio=Value},v2z:function(Value){gx.O.ZV125Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV125Diretorio,0)},c2v:function(){gx.O.AV125Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TABLE6",grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV123AcessoSistemaSequencia",gxold:"OV123AcessoSistemaSequencia",gxvar:"AV123AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV123AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV123AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV123AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV123AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTER",gxz:"ZV28QtCaracter",gxold:"OV28QtCaracter",gxvar:"AV28QtCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28QtCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28QtCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTER",gx.O.AV28QtCaracter,0)},c2v:function(){gx.O.AV28QtCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraofilial,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOFILIAL",gxz:"ZV27EmpresaPadraoFilial",gxold:"OV27EmpresaPadraoFilial",gxvar:"AV27EmpresaPadraoFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27EmpresaPadraoFilial=Value},v2z:function(Value){gx.O.ZV27EmpresaPadraoFilial=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOFILIAL",gx.O.AV27EmpresaPadraoFilial,0)},c2v:function(){gx.O.AV27EmpresaPadraoFilial=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOFILIAL")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"JS", format:2,grid:0};
   GXValidFnc[80]={fld:"BTNHELP",grid:0};
   GXValidFnc[81]={fld:"PROMPT_FILIALID",grid:0};
   this.AV24TipoExecucao = "" ;
   this.ZV24TipoExecucao = "" ;
   this.OV24TipoExecucao = "" ;
   this.AV22MesReferencia = 0 ;
   this.ZV22MesReferencia = 0 ;
   this.OV22MesReferencia = 0 ;
   this.AV23AnoReferencia = 0 ;
   this.ZV23AnoReferencia = 0 ;
   this.OV23AnoReferencia = 0 ;
   this.AV21UltDiaReferencia = 0 ;
   this.ZV21UltDiaReferencia = 0 ;
   this.OV21UltDiaReferencia = 0 ;
   this.AV18FilialId = 0 ;
   this.ZV18FilialId = 0 ;
   this.OV18FilialId = 0 ;
   this.AV19FilialNome = "" ;
   this.ZV19FilialNome = "" ;
   this.OV19FilialNome = "" ;
   this.AV20LancarJaContabil = "" ;
   this.ZV20LancarJaContabil = "" ;
   this.OV20LancarJaContabil = "" ;
   this.AV124SnExpLancam = "" ;
   this.ZV124SnExpLancam = "" ;
   this.OV124SnExpLancam = "" ;
   this.AV127Cooperativa = 0 ;
   this.ZV127Cooperativa = 0 ;
   this.OV127Cooperativa = 0 ;
   this.AV128CodPac = 0 ;
   this.ZV128CodPac = 0 ;
   this.OV128CodPac = 0 ;
   this.AV125Diretorio = "" ;
   this.ZV125Diretorio = "" ;
   this.OV125Diretorio = "" ;
   this.AV123AcessoSistemaSequencia = 0 ;
   this.ZV123AcessoSistemaSequencia = 0 ;
   this.OV123AcessoSistemaSequencia = 0 ;
   this.AV28QtCaracter = 0 ;
   this.ZV28QtCaracter = 0 ;
   this.OV28QtCaracter = 0 ;
   this.AV27EmpresaPadraoFilial = "" ;
   this.ZV27EmpresaPadraoFilial = "" ;
   this.OV27EmpresaPadraoFilial = "" ;
   this.AV24TipoExecucao = "" ;
   this.AV22MesReferencia = 0 ;
   this.AV23AnoReferencia = 0 ;
   this.AV21UltDiaReferencia = 0 ;
   this.AV18FilialId = 0 ;
   this.AV19FilialNome = "" ;
   this.AV20LancarJaContabil = "" ;
   this.AV124SnExpLancam = "" ;
   this.AV127Cooperativa = 0 ;
   this.AV128CodPac = 0 ;
   this.AV125Diretorio = "" ;
   this.AV123AcessoSistemaSequencia = 0 ;
   this.AV28QtCaracter = 0 ;
   this.AV27EmpresaPadraoFilial = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.Events = {"e13i02_client": ["'DIALOG'", true] ,"e11i02_client": ["'FECHAR'", true] ,"e14i02_client": ["ENTER", true] ,"e17i02_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV125Diretorio',fld:'vDIRETORIO'}],[]];
   this.EvtParms["'DIALOG'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV123AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV128CodPac',fld:'vCODPAC'},{av:'AV130EmpresaPadraoParametrosSistema',fld:'vEMPRESAPADRAOPARAMETROSSISTEMA'},{av:'AV127Cooperativa',fld:'vCOOPERATIVA'},{av:'AV157Pgmname',fld:'vPGMNAME'},{av:'AV116NomeEmpresa',fld:'vNOMEEMPRESA'},{av:'AV118Imagem',fld:'vIMAGEM'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV124SnExpLancam',fld:'vSNEXPLANCAM'},{av:'AV125Diretorio',fld:'vDIRETORIO'},{av:'AV9EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV27EmpresaPadraoFilial',fld:'vEMPRESAPADRAOFILIAL'},{av:'AV52EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'AV33EmpresaPadraoIntegraCbl',fld:'vEMPRESAPADRAOINTEGRACBL'},{av:'AV54EmpresaPadraoCContabil',fld:'vEMPRESAPADRAOCCONTABIL'},{av:'AV72EmpresaPadraoCentroCusto',fld:'vEMPRESAPADRAOCENTROCUSTO'},{av:'AV82EmpresaPadraoHistorico',fld:'vEMPRESAPADRAOHISTORICO'},{av:'AV99EmpresaPadraoLancamContabil',fld:'vEMPRESAPADRAOLANCAMCONTABIL'},{av:'AV108EmpresaPadraoRateio',fld:'vEMPRESAPADRAORATEIO'},{av:'AV113EmpresaPadraoLancaBem',fld:'vEMPRESAPADRAOLANCABEM'},{av:'AV24TipoExecucao',fld:'vTIPOEXECUCAO'},{av:'AV22MesReferencia',fld:'vMESREFERENCIA'},{av:'AV23AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV21UltDiaReferencia',fld:'vULTDIAREFERENCIA'},{av:'AV18FilialId',fld:'vFILIALID'},{av:'AV20LancarJaContabil',fld:'vLANCARJACONTABIL'},{av:'AV114ProcessoId',fld:'vPROCESSOID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV29snErro',fld:'vSNERRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV122SnGerouRelatorio',fld:'vSNGEROURELATORIO'},{av:'AV29snErro',fld:'vSNERRO'},{av:'AV129ValorParametro',fld:'vVALORPARAMETRO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30DataTempStr',fld:'vDATATEMPSTR'},{av:'AV31DiaMaxAux',fld:'vDIAMAXAUX'},{av:'AV159GXLvl177',fld:'vGXLVL177'},{av:'AV19FilialNome',fld:'vFILIALNOME'}]];
   this.setPrompt("PROMPT_FILIALID", [35]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hintegracaopatcontabilidade());
