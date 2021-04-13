/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:24.95
*/
gx.evt.autoSkip = false;
gx.define('habrerelatoriosolicitacao', false, function () {
   this.ServerClass =  "habrerelatoriosolicitacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV14NomeRelativo=gx.fn.getControlValue("vNOMERELATIVO") ;
      this.AV13NomeAbsoluto=gx.fn.getControlValue("vNOMEABSOLUTO") ;
   };
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12m62_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13m62_client=function()
   {
      this.executeServerEvent("'CANCEL'", false, null, false, false);
   };
   this.e14m62_client=function()
   {
      this.executeServerEvent("VTPRELATORIO.CLICK", true, null, false, true);
   };
   this.e17m62_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,16,19,22,24,27,29,32,34,36,39,42,43,46,48,56,57,58];
   this.GXLastCtrlId =58;
   GXValidFnc[2]={fld:"TABLE7",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPRELATORIO",gxz:"ZV18TpRelatorio",gxold:"OV18TpRelatorio",gxvar:"AV18TpRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18TpRelatorio=Value},v2z:function(Value){gx.O.ZV18TpRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTPRELATORIO",gx.O.AV18TpRelatorio)},c2v:function(){gx.O.AV18TpRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTPRELATORIO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERACSV",gxz:"ZV11GeraCsv",gxold:"OV11GeraCsv",gxvar:"AV11GeraCsv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11GeraCsv=Value},v2z:function(Value){gx.O.ZV11GeraCsv=Value},v2c:function(){gx.fn.setComboBoxValue("vGERACSV",gx.O.AV11GeraCsv)},c2v:function(){gx.O.AV11GeraCsv=this.val()},val:function(){return gx.fn.getControlValue("vGERACSV")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABMAPAPRECO",grid:0};
   GXValidFnc[19]={fld:"TABLE3",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMAPAPRECONUMERO",gxz:"ZV21MapaPrecoNumero",gxold:"OV21MapaPrecoNumero",gxvar:"AV21MapaPrecoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21MapaPrecoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21MapaPrecoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMAPAPRECONUMERO",gx.O.AV21MapaPrecoNumero,0)},c2v:function(){gx.O.AV21MapaPrecoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMAPAPRECONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TXTTPPRECO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPRECO",gxz:"ZV22TipoPreco",gxold:"OV22TipoPreco",gxvar:"AV22TipoPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22TipoPreco=Value},v2z:function(Value){gx.O.ZV22TipoPreco=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOPRECO",gx.O.AV22TipoPreco)},c2v:function(){gx.O.AV22TipoPreco=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPRECO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNATUALIZARMAPA",gxz:"ZV23SnAtualizarMapa",gxold:"OV23SnAtualizarMapa",gxvar:"AV23SnAtualizarMapa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23SnAtualizarMapa=Value},v2z:function(Value){gx.O.ZV23SnAtualizarMapa=Value},v2c:function(){gx.fn.setComboBoxValue("vSNATUALIZARMAPA",gx.O.AV23SnAtualizarMapa)},c2v:function(){gx.O.AV23SnAtualizarMapa=this.val()},val:function(){return gx.fn.getControlValue("vSNATUALIZARMAPA")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLE2",grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMEITEMEMPATADO",gxz:"ZV25SnImprimeItemEmpatado",gxold:"OV25SnImprimeItemEmpatado",gxvar:"AV25SnImprimeItemEmpatado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25SnImprimeItemEmpatado=Value},v2z:function(Value){gx.O.ZV25SnImprimeItemEmpatado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPRIMEITEMEMPATADO",gx.O.AV25SnImprimeItemEmpatado,"S")},c2v:function(){gx.O.AV25SnImprimeItemEmpatado=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMEITEMEMPATADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMENAOCOTADOS",gxz:"ZV24SnImprimeNaoCotados",gxold:"OV24SnImprimeNaoCotados",gxvar:"AV24SnImprimeNaoCotados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24SnImprimeNaoCotados=Value},v2z:function(Value){gx.O.ZV24SnImprimeNaoCotados=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPRIMENAOCOTADOS",gx.O.AV24SnImprimeNaoCotados,"S")},c2v:function(){gx.O.AV24SnImprimeNaoCotados=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMENAOCOTADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[43]={fld:"TABASSINATURA",grid:0};
   GXValidFnc[46]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSINATURA",gxz:"ZV29Assinatura",gxold:"OV29Assinatura",gxvar:"AV29Assinatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29Assinatura=Value},v2z:function(Value){gx.O.ZV29Assinatura=Value},v2c:function(){gx.fn.setControlValue("vASSINATURA",gx.O.AV29Assinatura,0)},c2v:function(){gx.O.AV29Assinatura=this.val()},val:function(){return gx.fn.getControlValue("vASSINATURA")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV12SolicitacaoNumero",gxold:"OV12SolicitacaoNumero",gxvar:"AV12SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV12SolicitacaoNumero,0)},c2v:function(){gx.O.AV12SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDPAGGERADAS",gxz:"ZV20QtdPagGeradas",gxold:"OV20QtdPagGeradas",gxvar:"AV20QtdPagGeradas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20QtdPagGeradas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20QtdPagGeradas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDPAGGERADAS",gx.O.AV20QtdPagGeradas,0)},c2v:function(){gx.O.AV20QtdPagGeradas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDPAGGERADAS",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"PROMPT_MAPAPRECONUMERO",grid:0};
   this.AV18TpRelatorio = "" ;
   this.ZV18TpRelatorio = "" ;
   this.OV18TpRelatorio = "" ;
   this.AV11GeraCsv = "" ;
   this.ZV11GeraCsv = "" ;
   this.OV11GeraCsv = "" ;
   this.AV21MapaPrecoNumero = 0 ;
   this.ZV21MapaPrecoNumero = 0 ;
   this.OV21MapaPrecoNumero = 0 ;
   this.AV22TipoPreco = "" ;
   this.ZV22TipoPreco = "" ;
   this.OV22TipoPreco = "" ;
   this.AV23SnAtualizarMapa = "" ;
   this.ZV23SnAtualizarMapa = "" ;
   this.OV23SnAtualizarMapa = "" ;
   this.AV25SnImprimeItemEmpatado = "" ;
   this.ZV25SnImprimeItemEmpatado = "" ;
   this.OV25SnImprimeItemEmpatado = "" ;
   this.AV24SnImprimeNaoCotados = "" ;
   this.ZV24SnImprimeNaoCotados = "" ;
   this.OV24SnImprimeNaoCotados = "" ;
   this.AV29Assinatura = "" ;
   this.ZV29Assinatura = "" ;
   this.OV29Assinatura = "" ;
   this.AV12SolicitacaoNumero = 0 ;
   this.ZV12SolicitacaoNumero = 0 ;
   this.OV12SolicitacaoNumero = 0 ;
   this.AV20QtdPagGeradas = 0 ;
   this.ZV20QtdPagGeradas = 0 ;
   this.OV20QtdPagGeradas = 0 ;
   this.AV18TpRelatorio = "" ;
   this.AV11GeraCsv = "" ;
   this.AV21MapaPrecoNumero = 0 ;
   this.AV22TipoPreco = "" ;
   this.AV23SnAtualizarMapa = "" ;
   this.AV25SnImprimeItemEmpatado = "" ;
   this.AV24SnImprimeNaoCotados = "" ;
   this.AV29Assinatura = "" ;
   this.AV12SolicitacaoNumero = 0 ;
   this.AV20QtdPagGeradas = 0 ;
   this.AV14NomeRelativo = "" ;
   this.AV13NomeAbsoluto = "" ;
   this.A10566SolicitacaoFornecedorDtHrFinal = gx.date.nullDate() ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3675MapaPrecoUsuarioAlt = "" ;
   this.A3405MapaPrecoNumero = 0 ;
   this.Events = {"e12m62_client": ["ENTER", true] ,"e13m62_client": ["'CANCEL'", true] ,"e14m62_client": ["VTPRELATORIO.CLICK", true] ,"e17m62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV21MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'AV22TipoPreco',fld:'vTIPOPRECO'},{av:'AV23SnAtualizarMapa',fld:'vSNATUALIZARMAPA'},{av:'AV24SnImprimeNaoCotados',fld:'vSNIMPRIMENAOCOTADOS'},{av:'AV25SnImprimeItemEmpatado',fld:'vSNIMPRIMEITEMEMPATADO'},{av:'AV11GeraCsv',fld:'vGERACSV'},{av:'AV18TpRelatorio',fld:'vTPRELATORIO'},{av:'AV29Assinatura',fld:'vASSINATURA'},{av:'AV26SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV36AssAux',fld:'vASSAUX'}],[{av:'AV14NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV13NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV20QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV11GeraCsv',fld:'vGERACSV'},{av:'AV25SnImprimeItemEmpatado',fld:'vSNIMPRIMEITEMEMPATADO'},{av:'AV24SnImprimeNaoCotados',fld:'vSNIMPRIMENAOCOTADOS'},{av:'AV23SnAtualizarMapa',fld:'vSNATUALIZARMAPA'},{av:'AV22TipoPreco',fld:'vTIPOPRECO'},{av:'AV21MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV29Assinatura',fld:'vASSINATURA'},{av:'gx.fn.getCtrlProperty("TABASSINATURA","Visible")',ctrl:'TABASSINATURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABMAPAPRECO","Visible")',ctrl:'TABMAPAPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTTPPRECO","Visible")',ctrl:'TXTTPPRECO',prop:'Visible'},{ctrl:'vTIPOPRECO'},{av:'AV30Arquivo',fld:'vARQUIVO'},{av:'AV32i',fld:'vI'},{av:'AV36AssAux',fld:'vASSAUX'}]];
   this.EvtParms["ENTER"] = [[{av:'AV18TpRelatorio',fld:'vTPRELATORIO'},{av:'AV11GeraCsv',fld:'vGERACSV'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV27tpErro',fld:'vTPERRO'},{av:'AV21MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'AV22TipoPreco',fld:'vTIPOPRECO'},{av:'AV23SnAtualizarMapa',fld:'vSNATUALIZARMAPA'},{av:'AV24SnImprimeNaoCotados',fld:'vSNIMPRIMENAOCOTADOS'},{av:'AV25SnImprimeItemEmpatado',fld:'vSNIMPRIMEITEMEMPATADO'},{av:'AV29Assinatura',fld:'vASSINATURA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV28SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3405MapaPrecoNumero',fld:'MAPAPRECONUMERO'},{av:'A3675MapaPrecoUsuarioAlt',fld:'MAPAPRECOUSUARIOALT'},{av:'A10566SolicitacaoFornecedorDtHrFinal',fld:'SOLICITACAOFORNECEDORDTHRFINAL'}],[{av:'AV14NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV13NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV20QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV11GeraCsv',fld:'vGERACSV'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV25SnImprimeItemEmpatado',fld:'vSNIMPRIMEITEMEMPATADO'},{av:'AV24SnImprimeNaoCotados',fld:'vSNIMPRIMENAOCOTADOS'},{av:'AV23SnAtualizarMapa',fld:'vSNATUALIZARMAPA'},{av:'AV22TipoPreco',fld:'vTIPOPRECO'},{av:'AV21MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'AV29Assinatura',fld:'vASSINATURA'},{av:'AV27tpErro',fld:'vTPERRO'},{av:'AV41GXLvl212',fld:'vGXLVL212'},{av:'AV30Arquivo',fld:'vARQUIVO'},{av:'AV32i',fld:'vI'}]];
   this.EvtParms["'CANCEL'"] = [[{av:'AV13NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV14NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12SolicitacaoNumero',fld:'vSOLICITACAONUMERO'}],[]];
   this.EvtParms["VTPRELATORIO.CLICK"] = [[{av:'AV18TpRelatorio',fld:'vTPRELATORIO'},{av:'AV26SnValorPrazo',fld:'vSNVALORPRAZO'},{av:'AV36AssAux',fld:'vASSAUX'}],[{av:'gx.fn.getCtrlProperty("TABASSINATURA","Visible")',ctrl:'TABASSINATURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABMAPAPRECO","Visible")',ctrl:'TABMAPAPRECO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTTPPRECO","Visible")',ctrl:'TXTTPPRECO',prop:'Visible'},{ctrl:'vTIPOPRECO'},{av:'AV29Assinatura',fld:'vASSINATURA'},{av:'AV36AssAux',fld:'vASSAUX'},{av:'AV30Arquivo',fld:'vARQUIVO'},{av:'AV32i',fld:'vI'}]];
   this.setPrompt("PROMPT_MAPAPRECONUMERO", [24]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14NomeRelativo", "vNOMERELATIVO", 0, "svchar");
   this.setVCMap("AV13NomeAbsoluto", "vNOMEABSOLUTO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new habrerelatoriosolicitacao());
