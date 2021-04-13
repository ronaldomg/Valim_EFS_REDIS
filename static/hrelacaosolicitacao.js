/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:8:18.5
*/
gx.evt.autoSkip = false;
gx.define('hrelacaosolicitacao', false, function () {
   this.ServerClass =  "hrelacaosolicitacao" ;
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
   this.e11q82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13q82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15q82_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16q82_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17q82_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19q82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,17,20,23,25,28,30,32,34,37,39,42,44,50,56,57,59];
   this.GXLastCtrlId =59;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV38TxtTela",gxold:"OV38TxtTela",gxvar:"AV38TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV38TxtTela=Value},v2z:function(Value){gx.O.ZV38TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV38TxtTela)},c2v:function(){gx.O.AV38TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[17]={fld:"TABLE6",grid:0};
   GXValidFnc[20]={fld:"TABLE3",grid:0};
   GXValidFnc[23]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE4",grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV20DataInicial",gxold:"OV20DataInicial",gxvar:"AV20DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV20DataInicial,0)},c2v:function(){gx.O.AV20DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV21DataFinal",gxold:"OV21DataFinal",gxvar:"AV21DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV21DataFinal,0)},c2v:function(){gx.O.AV21DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMEJUSTIFICATIVA",gxz:"ZV24SnImprimeJustificativa",gxold:"OV24SnImprimeJustificativa",gxvar:"AV24SnImprimeJustificativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24SnImprimeJustificativa=Value},v2z:function(Value){gx.O.ZV24SnImprimeJustificativa=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPRIMEJUSTIFICATIVA",gx.O.AV24SnImprimeJustificativa,"S")},c2v:function(){gx.O.AV24SnImprimeJustificativa=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMEJUSTIFICATIVA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITANTECODIGO",gxz:"ZV22SolicitanteCodigo",gxold:"OV22SolicitanteCodigo",gxvar:"AV22SolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22SolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22SolicitanteCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSOLICITANTECODIGO",gx.O.AV22SolicitanteCodigo)},c2v:function(){gx.O.AV22SolicitanteCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITANTECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPTOCOMPRASCODIGO",gxz:"ZV23DeptoComprasCodigo",gxold:"OV23DeptoComprasCodigo",gxvar:"AV23DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23DeptoComprasCodigo=Value},v2z:function(Value){gx.O.ZV23DeptoComprasCodigo=Value},v2c:function(){gx.fn.setComboBoxValue("vDEPTOCOMPRASCODIGO",gx.O.AV23DeptoComprasCodigo)},c2v:function(){gx.O.AV23DeptoComprasCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASCODIGO")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE8",grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDPAGGERADAS",gxz:"ZV18QtdPagGeradas",gxold:"OV18QtdPagGeradas",gxvar:"AV18QtdPagGeradas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18QtdPagGeradas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18QtdPagGeradas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDPAGGERADAS",gx.O.AV18QtdPagGeradas,0)},c2v:function(){gx.O.AV18QtdPagGeradas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDPAGGERADAS",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"JS", format:2,grid:0};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   this.AV38TxtTela = "" ;
   this.ZV38TxtTela = "" ;
   this.OV38TxtTela = "" ;
   this.AV20DataInicial = gx.date.nullDate() ;
   this.ZV20DataInicial = gx.date.nullDate() ;
   this.OV20DataInicial = gx.date.nullDate() ;
   this.AV21DataFinal = gx.date.nullDate() ;
   this.ZV21DataFinal = gx.date.nullDate() ;
   this.OV21DataFinal = gx.date.nullDate() ;
   this.AV24SnImprimeJustificativa = "" ;
   this.ZV24SnImprimeJustificativa = "" ;
   this.OV24SnImprimeJustificativa = "" ;
   this.AV22SolicitanteCodigo = 0 ;
   this.ZV22SolicitanteCodigo = 0 ;
   this.OV22SolicitanteCodigo = 0 ;
   this.AV23DeptoComprasCodigo = "" ;
   this.ZV23DeptoComprasCodigo = "" ;
   this.OV23DeptoComprasCodigo = "" ;
   this.AV18QtdPagGeradas = 0 ;
   this.ZV18QtdPagGeradas = 0 ;
   this.OV18QtdPagGeradas = 0 ;
   this.AV38TxtTela = "" ;
   this.AV20DataInicial = gx.date.nullDate() ;
   this.AV21DataFinal = gx.date.nullDate() ;
   this.AV24SnImprimeJustificativa = "" ;
   this.AV22SolicitanteCodigo = 0 ;
   this.AV23DeptoComprasCodigo = "" ;
   this.AV18QtdPagGeradas = 0 ;
   this.A3487DeptoComprasEmpresaId = "" ;
   this.A3483DeptoComprasNome = "" ;
   this.A3488DeptoComprasCodigo = "" ;
   this.A4027SolicitanteEmpresaId = "" ;
   this.A4060SolicitanteNome = "" ;
   this.A4028SolicitanteCodigo = 0 ;
   this.Events = {"e11q82_client": ["'FECHAR'", true] ,"e13q82_client": ["ENTER", true] ,"e15q82_client": ["'SALVARTXT'", true] ,"e16q82_client": ["VTXTTELA.CLICK", true] ,"e17q82_client": ["'EXCLUIRTXT'", true] ,"e19q82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV58Pgmname',fld:'vPGMNAME'},{av:'AV54SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV38TxtTela',fld:'vTXTTELA'}],[{av:'AV38TxtTela',fld:'vTXTTELA'},{av:'AV63GXV2',fld:'vGXV2'},{av:'AV55SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV62GXV1',fld:'vGXV1'},{av:'AV24SnImprimeJustificativa',fld:'vSNIMPRIMEJUSTIFICATIVA'},{av:'AV22SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV23DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20DataInicial',fld:'vDATAINICIAL'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV38TxtTela',fld:'vTXTTELA'},{av:'AV28DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'AV58Pgmname',fld:'vPGMNAME'},{av:'AV22SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV23DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV24SnImprimeJustificativa',fld:'vSNIMPRIMEJUSTIFICATIVA'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV59Pgmdesc',fld:'vPGMDESC'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV50SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV53OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV38TxtTela',fld:'vTXTTELA'},{av:'AV58Pgmname',fld:'vPGMNAME'},{av:'AV24SnImprimeJustificativa',fld:'vSNIMPRIMEJUSTIFICATIVA'},{av:'AV22SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV23DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'}],[{av:'AV53OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV58Pgmname',fld:'vPGMNAME'},{av:'AV54SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV38TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV62GXV1',fld:'vGXV1'},{av:'AV55SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV24SnImprimeJustificativa',fld:'vSNIMPRIMEJUSTIFICATIVA'},{av:'AV22SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV23DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV58Pgmname',fld:'vPGMNAME'},{av:'AV38TxtTela',fld:'vTXTTELA'}],[]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaosolicitacao());
