/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:30:3.16
*/
gx.evt.autoSkip = false;
gx.define('himplantarsaldopat', false, function () {
   this.ServerClass =  "himplantarsaldopat" ;
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
   this.Validv_Bemcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e13el2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11el2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16el2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,25,27,30,32,35,37,40,42,48,54,55,56,57,59,60];
   this.GXLastCtrlId =60;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREFERENCIA",gxz:"ZV20DataReferencia",gxold:"OV20DataReferencia",gxvar:"AV20DataReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DataReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DataReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREFERENCIA",gx.O.AV20DataReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20DataReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREFERENCIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[16]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE10",grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo,isvalid:null,rgrid:[],fld:"vBEMCODIGO",gxz:"ZV21BemCodigo",gxold:"OV21BemCodigo",gxvar:"AV21BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV21BemCodigo,0)},c2v:function(){gx.O.AV21BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO",gxz:"ZV22BemSubgrupo",gxold:"OV22BemSubgrupo",gxvar:"AV22BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV22BemSubgrupo,0)},c2v:function(){gx.O.AV22BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAORESUMIDA",gxz:"ZV34BemDescricaoResumida",gxold:"OV34BemDescricaoResumida",gxvar:"AV34BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34BemDescricaoResumida=Value},v2z:function(Value){gx.O.ZV34BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDA",gx.O.AV34BemDescricaoResumida,0)},c2v:function(){gx.O.AV34BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORBEM",gxz:"ZV23ValorBem",gxold:"OV23ValorBem",gxvar:"AV23ValorBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ValorBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV23ValorBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORBEM",gx.O.AV23ValorBem,2,',')},c2v:function(){gx.O.AV23ValorBem=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORBEM",'.',',')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRECAOACUMULADA",gxz:"ZV24CorrecaoAcumulada",gxold:"OV24CorrecaoAcumulada",gxvar:"AV24CorrecaoAcumulada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24CorrecaoAcumulada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV24CorrecaoAcumulada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCORRECAOACUMULADA",gx.O.AV24CorrecaoAcumulada,2,',')},c2v:function(){gx.O.AV24CorrecaoAcumulada=this.val()},val:function(){return gx.fn.getDecimalValue("vCORRECAOACUMULADA",'.',',')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORREDUTORA",gxz:"ZV25ValorRedutora",gxold:"OV25ValorRedutora",gxvar:"AV25ValorRedutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ValorRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV25ValorRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORREDUTORA",gx.O.AV25ValorRedutora,2,',')},c2v:function(){gx.O.AV25ValorRedutora=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORREDUTORA",'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TABLE5",grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV44AcessoSistemaSequencia",gxold:"OV44AcessoSistemaSequencia",gxvar:"AV44AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV44AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV44AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFECHARTELA",gxz:"ZV37FecharTela",gxold:"OV37FecharTela",gxvar:"AV37FecharTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37FecharTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37FecharTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFECHARTELA",gx.O.AV37FecharTela,0)},c2v:function(){gx.O.AV37FecharTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFECHARTELA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"JS", format:2,grid:0};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   GXValidFnc[60]={fld:"PROMPT_BEMCODIGO_BEMSUBGRUPO",grid:0};
   this.AV20DataReferencia = gx.date.nullDate() ;
   this.ZV20DataReferencia = gx.date.nullDate() ;
   this.OV20DataReferencia = gx.date.nullDate() ;
   this.AV21BemCodigo = 0 ;
   this.ZV21BemCodigo = 0 ;
   this.OV21BemCodigo = 0 ;
   this.AV22BemSubgrupo = 0 ;
   this.ZV22BemSubgrupo = 0 ;
   this.OV22BemSubgrupo = 0 ;
   this.AV34BemDescricaoResumida = "" ;
   this.ZV34BemDescricaoResumida = "" ;
   this.OV34BemDescricaoResumida = "" ;
   this.AV23ValorBem = 0 ;
   this.ZV23ValorBem = 0 ;
   this.OV23ValorBem = 0 ;
   this.AV24CorrecaoAcumulada = 0 ;
   this.ZV24CorrecaoAcumulada = 0 ;
   this.OV24CorrecaoAcumulada = 0 ;
   this.AV25ValorRedutora = 0 ;
   this.ZV25ValorRedutora = 0 ;
   this.OV25ValorRedutora = 0 ;
   this.AV44AcessoSistemaSequencia = 0 ;
   this.ZV44AcessoSistemaSequencia = 0 ;
   this.OV44AcessoSistemaSequencia = 0 ;
   this.AV37FecharTela = 0 ;
   this.ZV37FecharTela = 0 ;
   this.OV37FecharTela = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV20DataReferencia = gx.date.nullDate() ;
   this.AV21BemCodigo = 0 ;
   this.AV22BemSubgrupo = 0 ;
   this.AV34BemDescricaoResumida = "" ;
   this.AV23ValorBem = 0 ;
   this.AV24CorrecaoAcumulada = 0 ;
   this.AV25ValorRedutora = 0 ;
   this.AV44AcessoSistemaSequencia = 0 ;
   this.AV37FecharTela = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.A2318BemSubgrupo = 0 ;
   this.A2262BemCodigo = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2034TipoBemId = 0 ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2037TipoBemSnCorrecaoBem = "" ;
   this.A2033TipoBemTpReducao = "" ;
   this.A2264BemDescricaoResumida = "" ;
   this.Events = {"e13el2_client": ["ENTER", true] ,"e11el2_client": ["'FECHAR'", true] ,"e16el2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV37FecharTela',fld:'vFECHARTELA'},{av:'AV44AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'}],[{av:'AV32SdtImplantarSaldoPat',fld:'vSDTIMPLANTARSALDOPAT'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37FecharTela',fld:'vFECHARTELA'}]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV37FecharTela',fld:'vFECHARTELA'}]];
   this.EvtParms["ENTER"] = [[{av:'AV20DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV21BemCodigo',fld:'vBEMCODIGO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV22BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'A2037TipoBemSnCorrecaoBem',fld:'TIPOBEMSNCORRECAOBEM'},{av:'A2033TipoBemTpReducao',fld:'TIPOBEMTPREDUCAO'},{av:'AV23ValorBem',fld:'vVALORBEM'},{av:'AV29TipoBemSnCorrecaoBem',fld:'vTIPOBEMSNCORRECAOBEM'},{av:'AV24CorrecaoAcumulada',fld:'vCORRECAOACUMULADA'},{av:'AV30TipoBemTpReducao',fld:'vTIPOBEMTPREDUCAO'},{av:'AV25ValorRedutora',fld:'vVALORREDUTORA'},{av:'AV39EmpresaPadraoLanc',fld:'vEMPRESAPADRAOLANC'},{av:'AV40EmpresaPadraoCContab',fld:'vEMPRESAPADRAOCCONTAB'},{av:'AV41IntPatCbl',fld:'vINTPATCBL'},{av:'AV43AnoAbertoParam',fld:'vANOABERTOPARAM'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV33SdtImplantarSaldoPatItem',fld:'vSDTIMPLANTARSALDOPATITEM'},{av:'AV34BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}],[{av:'AV38SnErro',fld:'vSNERRO'},{av:'AV26ErroDataRef',fld:'vERRODATAREF'},{av:'AV29TipoBemSnCorrecaoBem',fld:'vTIPOBEMSNCORRECAOBEM'},{av:'AV30TipoBemTpReducao',fld:'vTIPOBEMTPREDUCAO'},{av:'AV49GXLvl99',fld:'vGXLVL99'},{av:'AV34BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV28TipoBemId',fld:'vTIPOBEMID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV24CorrecaoAcumulada',fld:'vCORRECAOACUMULADA'},{av:'AV25ValorRedutora',fld:'vVALORREDUTORA'},{av:'AV23ValorBem',fld:'vVALORBEM'},{av:'AV20DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV22BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV32SdtImplantarSaldoPat',fld:'vSDTIMPLANTARSALDOPAT'},{av:'AV33SdtImplantarSaldoPatItem',fld:'vSDTIMPLANTARSALDOPATITEM'},{av:'AV21BemCodigo',fld:'vBEMCODIGO'}]];
   this.setPrompt("PROMPT_BEMCODIGO_BEMSUBGRUPO", [21,25]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A2072TipoBemEmpresaId", "TIPOBEMEMPRESAID", 0, "char");
   this.setVCMap("A2034TipoBemId", "TIPOBEMID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new himplantarsaldopat());
