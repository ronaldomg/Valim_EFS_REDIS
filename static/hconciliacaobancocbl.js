/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:55:21.84
*/
gx.evt.autoSkip = false;
gx.define('hconciliacaobancocbl', false, function () {
   this.ServerClass =  "hconciliacaobancocbl" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e132042_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e112042_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152042_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e162042_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e172042_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e192042_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,28,31,33,34,38,42,48,50,53,55,58,60,63,65,74,75,76,77,79,80];
   this.GXLastCtrlId =80;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV40TxtTela",gxold:"OV40TxtTela",gxvar:"AV40TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV40TxtTela=Value},v2z:function(Value){gx.O.ZV40TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV40TxtTela)},c2v:function(){gx.O.AV40TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE3",grid:0};
   GXValidFnc[17]={fld:"IMAGE4",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TABLE9",grid:0};
   GXValidFnc[26]={fld:"TXTTITAPL8", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATA",gxz:"ZV12Data",gxold:"OV12Data",gxvar:"AV12Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATA",gx.O.AV12Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[31]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOID",gxz:"ZV10CaixaBancoId",gxold:"OV10CaixaBancoId",gxvar:"AV10CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV10CaixaBancoId,0)},c2v:function(){gx.O.AV10CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV9CaixaBancoDescricao",gxold:"OV9CaixaBancoDescricao",gxvar:"AV9CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV9CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV9CaixaBancoDescricao,0)},c2v:function(){gx.O.AV9CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSALTARPAGINA",gxz:"ZV46SnSaltarPagina",gxold:"OV46SnSaltarPagina",gxvar:"AV46SnSaltarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV46SnSaltarPagina=Value},v2z:function(Value){gx.O.ZV46SnSaltarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSALTARPAGINA",gx.O.AV46SnSaltarPagina,"S")},c2v:function(){gx.O.AV46SnSaltarPagina=this.val()},val:function(){return gx.fn.getControlValue("vSNSALTARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCOMMOVIMENTACAO",gxz:"ZV47SnComMovimentacao",gxold:"OV47SnComMovimentacao",gxvar:"AV47SnComMovimentacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV47SnComMovimentacao=Value},v2z:function(Value){gx.O.ZV47SnComMovimentacao=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCOMMOVIMENTACAO",gx.O.AV47SnComMovimentacao,"S")},c2v:function(){gx.O.AV47SnComMovimentacao=this.val()},val:function(){return gx.fn.getControlValue("vSNCOMMOVIMENTACAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[48]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRIMEIROCARGO",gxz:"ZV28PrimeiroCargo",gxold:"OV28PrimeiroCargo",gxvar:"AV28PrimeiroCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PrimeiroCargo=Value},v2z:function(Value){gx.O.ZV28PrimeiroCargo=Value},v2c:function(){gx.fn.setControlValue("vPRIMEIROCARGO",gx.O.AV28PrimeiroCargo,0)},c2v:function(){gx.O.AV28PrimeiroCargo=this.val()},val:function(){return gx.fn.getControlValue("vPRIMEIROCARGO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRESPONSAVELCARGO1",gxz:"ZV30ResponsavelCargo1",gxold:"OV30ResponsavelCargo1",gxvar:"AV30ResponsavelCargo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ResponsavelCargo1=Value},v2z:function(Value){gx.O.ZV30ResponsavelCargo1=Value},v2c:function(){gx.fn.setControlValue("vRESPONSAVELCARGO1",gx.O.AV30ResponsavelCargo1,0)},c2v:function(){gx.O.AV30ResponsavelCargo1=this.val()},val:function(){return gx.fn.getControlValue("vRESPONSAVELCARGO1")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSEGUNDOCARGO",gxz:"ZV35SegundoCargo",gxold:"OV35SegundoCargo",gxvar:"AV35SegundoCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35SegundoCargo=Value},v2z:function(Value){gx.O.ZV35SegundoCargo=Value},v2c:function(){gx.fn.setControlValue("vSEGUNDOCARGO",gx.O.AV35SegundoCargo,0)},c2v:function(){gx.O.AV35SegundoCargo=this.val()},val:function(){return gx.fn.getControlValue("vSEGUNDOCARGO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRESPONSAVELCARGO2",gxz:"ZV31ResponsavelCargo2",gxold:"OV31ResponsavelCargo2",gxvar:"AV31ResponsavelCargo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ResponsavelCargo2=Value},v2z:function(Value){gx.O.ZV31ResponsavelCargo2=Value},v2c:function(){gx.fn.setControlValue("vRESPONSAVELCARGO2",gx.O.AV31ResponsavelCargo2,0)},c2v:function(){gx.O.AV31ResponsavelCargo2=this.val()},val:function(){return gx.fn.getControlValue("vRESPONSAVELCARGO2")},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVAR",gxz:"ZV41var",gxold:"OV41var",gxvar:"AV41var",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41var=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41var=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVAR",gx.O.AV41var,0)},c2v:function(){gx.O.AV41var=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVAR",'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVAR2",gxz:"ZV42var2",gxold:"OV42var2",gxvar:"AV42var2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42var2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42var2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVAR2",gx.O.AV42var2,0)},c2v:function(){gx.O.AV42var2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVAR2",'.')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"JS", format:2,grid:0};
   GXValidFnc[77]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV5CaixaBancoEmpresaId",gxold:"OV5CaixaBancoEmpresaId",gxvar:"AV5CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV5CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV5CaixaBancoEmpresaId,0)},c2v:function(){gx.O.AV5CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"BTNHELP",grid:0};
   GXValidFnc[80]={fld:"PROMPT_CAIXABANCOID",grid:0};
   this.AV40TxtTela = "" ;
   this.ZV40TxtTela = "" ;
   this.OV40TxtTela = "" ;
   this.AV12Data = gx.date.nullDate() ;
   this.ZV12Data = gx.date.nullDate() ;
   this.OV12Data = gx.date.nullDate() ;
   this.AV10CaixaBancoId = 0 ;
   this.ZV10CaixaBancoId = 0 ;
   this.OV10CaixaBancoId = 0 ;
   this.AV9CaixaBancoDescricao = "" ;
   this.ZV9CaixaBancoDescricao = "" ;
   this.OV9CaixaBancoDescricao = "" ;
   this.AV46SnSaltarPagina = "" ;
   this.ZV46SnSaltarPagina = "" ;
   this.OV46SnSaltarPagina = "" ;
   this.AV47SnComMovimentacao = "" ;
   this.ZV47SnComMovimentacao = "" ;
   this.OV47SnComMovimentacao = "" ;
   this.AV28PrimeiroCargo = "" ;
   this.ZV28PrimeiroCargo = "" ;
   this.OV28PrimeiroCargo = "" ;
   this.AV30ResponsavelCargo1 = "" ;
   this.ZV30ResponsavelCargo1 = "" ;
   this.OV30ResponsavelCargo1 = "" ;
   this.AV35SegundoCargo = "" ;
   this.ZV35SegundoCargo = "" ;
   this.OV35SegundoCargo = "" ;
   this.AV31ResponsavelCargo2 = "" ;
   this.ZV31ResponsavelCargo2 = "" ;
   this.OV31ResponsavelCargo2 = "" ;
   this.AV41var = 0 ;
   this.ZV41var = 0 ;
   this.OV41var = 0 ;
   this.AV42var2 = 0 ;
   this.ZV42var2 = 0 ;
   this.OV42var2 = 0 ;
   this.AV5CaixaBancoEmpresaId = "" ;
   this.ZV5CaixaBancoEmpresaId = "" ;
   this.OV5CaixaBancoEmpresaId = "" ;
   this.AV40TxtTela = "" ;
   this.AV12Data = gx.date.nullDate() ;
   this.AV10CaixaBancoId = 0 ;
   this.AV9CaixaBancoDescricao = "" ;
   this.AV46SnSaltarPagina = "" ;
   this.AV47SnComMovimentacao = "" ;
   this.AV28PrimeiroCargo = "" ;
   this.AV30ResponsavelCargo1 = "" ;
   this.AV35SegundoCargo = "" ;
   this.AV31ResponsavelCargo2 = "" ;
   this.AV41var = 0 ;
   this.AV42var2 = 0 ;
   this.AV5CaixaBancoEmpresaId = "" ;
   this.Events = {"e132042_client": ["ENTER", true] ,"e112042_client": ["'FECHAR'", true] ,"e152042_client": ["'SALVARTXT'", true] ,"e162042_client": ["VTXTTELA.CLICK", true] ,"e172042_client": ["'EXCLUIRTXT'", true] ,"e192042_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV7SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV16EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV40TxtTela',fld:'vTXTTELA'}],[{av:'AV40TxtTela',fld:'vTXTTELA'},{av:'AV53GXV2',fld:'vGXV2'},{av:'AV34SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV52GXV1',fld:'vGXV1'},{av:'AV28PrimeiroCargo',fld:'vPRIMEIROCARGO'},{av:'AV30ResponsavelCargo1',fld:'vRESPONSAVELCARGO1'},{av:'AV35SegundoCargo',fld:'vSEGUNDOCARGO'},{av:'AV31ResponsavelCargo2',fld:'vRESPONSAVELCARGO2'},{av:'AV46SnSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV47SnComMovimentacao',fld:'vSNCOMMOVIMENTACAO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV12Data',fld:'vDATA'},{av:'AV10CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV28PrimeiroCargo',fld:'vPRIMEIROCARGO'},{av:'AV30ResponsavelCargo1',fld:'vRESPONSAVELCARGO1'},{av:'AV35SegundoCargo',fld:'vSEGUNDOCARGO'},{av:'AV31ResponsavelCargo2',fld:'vRESPONSAVELCARGO2'},{av:'AV46SnSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV47SnComMovimentacao',fld:'vSNCOMMOVIMENTACAO'},{av:'AV51Pgmdesc',fld:'vPGMDESC'},{av:'AV37SnErro',fld:'vSNERRO'},{av:'AV5CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV16EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV40TxtTela',fld:'vTXTTELA'}],[{av:'AV37SnErro',fld:'vSNERRO'},{av:'AV26OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV45NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV44NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV47SnComMovimentacao',fld:'vSNCOMMOVIMENTACAO'},{av:'AV46SnSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV31ResponsavelCargo2',fld:'vRESPONSAVELCARGO2'},{av:'AV35SegundoCargo',fld:'vSEGUNDOCARGO'},{av:'AV30ResponsavelCargo1',fld:'vRESPONSAVELCARGO1'},{av:'AV28PrimeiroCargo',fld:'vPRIMEIROCARGO'},{av:'AV10CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV12Data',fld:'vDATA'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV27Orientacao',fld:'vORIENTACAO'},{av:'AV43Snfecrel',fld:'vSNFECREL'},{av:'AV13DataAux',fld:'vDATAAUX'},{av:'AV15DiaAux',fld:'vDIAAUX'},{av:'AV14Dia',fld:'vDIA'},{av:'AV38snExiste',fld:'vSNEXISTE'},{av:'AV6OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV16EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV40TxtTela',fld:'vTXTTELA'},{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV28PrimeiroCargo',fld:'vPRIMEIROCARGO'},{av:'AV30ResponsavelCargo1',fld:'vRESPONSAVELCARGO1'},{av:'AV35SegundoCargo',fld:'vSEGUNDOCARGO'},{av:'AV31ResponsavelCargo2',fld:'vRESPONSAVELCARGO2'},{av:'AV46SnSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV47SnComMovimentacao',fld:'vSNCOMMOVIMENTACAO'}],[{av:'AV6OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV7SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV40TxtTela',fld:'vTXTTELA'},{av:'AV16EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV52GXV1',fld:'vGXV1'},{av:'AV34SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV28PrimeiroCargo',fld:'vPRIMEIROCARGO'},{av:'AV30ResponsavelCargo1',fld:'vRESPONSAVELCARGO1'},{av:'AV35SegundoCargo',fld:'vSEGUNDOCARGO'},{av:'AV31ResponsavelCargo2',fld:'vRESPONSAVELCARGO2'},{av:'AV46SnSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV47SnComMovimentacao',fld:'vSNCOMMOVIMENTACAO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV16EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV40TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_CAIXABANCOID", [33]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconciliacaobancocbl());
