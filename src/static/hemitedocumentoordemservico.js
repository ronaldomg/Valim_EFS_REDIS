/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:36:39.29
*/
gx.evt.autoSkip = false;
gx.define('hemitedocumentoordemservico', false, function () {
   this.ServerClass =  "hemitedocumentoordemservico" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("27", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV78OrdemServicoEmpresaId=gx.fn.getControlValue("vORDEMSERVICOEMPRESAID") ;
      this.AV17SNEmitiu=gx.fn.getControlValue("vSNEMITIU") ;
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
   this.Validv_Ordemservicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      if ( this.AV80TipoDocumento == "C" )
      {
         this.AV35TipoNome =  "Carnê"  ;
      }
      else if ( this.AV80TipoDocumento == "D" )
      {
         this.AV35TipoNome =  "Duplicata"  ;
      }
      else if ( this.AV80TipoDocumento == "T" )
      {
         this.AV35TipoNome =  "Termo de Garantia"  ;
      }
      else if ( this.AV80TipoDocumento == "O" )
      {
         this.AV35TipoNome =  "Ordem de Serviço"  ;
      }
      else if ( this.AV80TipoDocumento == "OC" )
      {
         this.AV35TipoNome =  "Ordem de Serviço"  ;
      }
      else if ( this.AV80TipoDocumento == "S" )
      {
         this.AV35TipoNome =  "Solicitacao Ordem de Serviço"  ;
      }
   };
   this.s132_client=function()
   {
      if ( (0==this.AV30ModeloPreVendaQtdeVias) && this.AV33SNErro == "N" )
      {
         this.addMessage("Informe a Quantidade de Vias");
         gx.fn.usrSetFocus("vMODELOPREVENDAQTDEVIAS") ;
         this.AV33SNErro =  "S"  ;
      }
   };
   this.s222_client=function()
   {
      this.AV40NomeRelat =  "Nome: "  ;
      this.AV44TamLink = gx.num.trunc( gx.text.length( gx.text.trim( this.AV36NomeRelativo)) ,0) ;
      this.AV45cont = gx.num.trunc( this.AV44TamLink ,0) ;
      while ( this.AV45cont >= 1 )
      {
         if ( gx.text.substring( this.AV36NomeRelativo, this.AV45cont, 1) != "/" )
         {
            this.AV45cont = gx.num.trunc( this.AV45cont - 1 ,0) ;
         }
         else
         {
            break;
         }
      }
      this.AV46Final = gx.num.trunc( this.AV44TamLink - this.AV45cont ,0) ;
      this.AV46Final = gx.num.trunc( this.AV46Final + 1 ,0) ;
      this.AV45cont = gx.num.trunc( this.AV45cont + 1 ,0) ;
      this.AV40NomeRelat =  this.AV40NomeRelat + gx.text.substring( this.AV36NomeRelativo, this.AV45cont, this.AV46Final)  ;
   };
   this.e141dp2_client=function()
   {
      this.executeServerEvent("'EMAIL'", false, null, false, false);
   };
   this.e151dp2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", false, null, false, false);
   };
   this.e111dp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e171dp2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e181dp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,18,21,23,26,28,30,31,34,36,39,41,42,45,47,53,54,58];
   this.GXLastCtrlId =58;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TAB",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV22FilialId",gxold:"OV22FilialId",gxvar:"AV22FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV22FilialId,0)},c2v:function(){gx.O.AV22FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV25FilialNome",gxold:"OV25FilialNome",gxvar:"AV25FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25FilialNome=Value},v2z:function(Value){gx.O.ZV25FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV25FilialNome,0)},c2v:function(){gx.O.AV25FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERELATIVO",gxz:"ZV36NomeRelativo",gxold:"OV36NomeRelativo",gxvar:"AV36NomeRelativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36NomeRelativo=Value},v2z:function(Value){gx.O.ZV36NomeRelativo=Value},v2c:function(){gx.fn.setControlValue("vNOMERELATIVO",gx.O.AV36NomeRelativo,0)},c2v:function(){gx.O.AV36NomeRelativo=this.val()},val:function(){return gx.fn.getControlValue("vNOMERELATIVO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLE1",grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOCLIENTEID",gxz:"ZV28OrdemServicoClienteId",gxold:"OV28OrdemServicoClienteId",gxvar:"AV28OrdemServicoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28OrdemServicoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28OrdemServicoClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOCLIENTEID",gx.O.AV28OrdemServicoClienteId,0)},c2v:function(){gx.O.AV28OrdemServicoClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOCLIENTERAZAO",gxz:"ZV29OrdemServicoClienteRazao",gxold:"OV29OrdemServicoClienteRazao",gxvar:"AV29OrdemServicoClienteRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29OrdemServicoClienteRazao=Value},v2z:function(Value){gx.O.ZV29OrdemServicoClienteRazao=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOCLIENTERAZAO",gx.O.AV29OrdemServicoClienteRazao,0)},c2v:function(){gx.O.AV29OrdemServicoClienteRazao=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOCLIENTERAZAO")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERELAT",gxz:"ZV40NomeRelat",gxold:"OV40NomeRelat",gxvar:"AV40NomeRelat",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40NomeRelat=Value},v2z:function(Value){gx.O.ZV40NomeRelat=Value},v2c:function(){gx.fn.setControlValue("vNOMERELAT",gx.O.AV40NomeRelat,0)},c2v:function(){gx.O.AV40NomeRelat=this.val()},val:function(){return gx.fn.getControlValue("vNOMERELAT")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicoid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOID",gxz:"ZV81OrdemServicoId",gxold:"OV81OrdemServicoId",gxvar:"AV81OrdemServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81OrdemServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81OrdemServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOID",gx.O.AV81OrdemServicoId,0)},c2v:function(){gx.O.AV81OrdemServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"LBLQTVIAS", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOPREVENDAQTDEVIAS",gxz:"ZV30ModeloPreVendaQtdeVias",gxold:"OV30ModeloPreVendaQtdeVias",gxvar:"AV30ModeloPreVendaQtdeVias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ModeloPreVendaQtdeVias=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ModeloPreVendaQtdeVias=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELOPREVENDAQTDEVIAS",gx.O.AV30ModeloPreVendaQtdeVias,0)},c2v:function(){gx.O.AV30ModeloPreVendaQtdeVias=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELOPREVENDAQTDEVIAS",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOSMODELORELATORIO",gxz:"ZV84OSModeloRelatorio",gxold:"OV84OSModeloRelatorio",gxvar:"AV84OSModeloRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84OSModeloRelatorio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV84OSModeloRelatorio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOSMODELORELATORIO",gx.O.AV84OSModeloRelatorio,0)},c2v:function(){gx.O.AV84OSModeloRelatorio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOSMODELORELATORIO",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"LBLSNPRECO", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNMOSTRAPRECO",gxz:"ZV88SNMostraPreco",gxold:"OV88SNMostraPreco",gxvar:"AV88SNMostraPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV88SNMostraPreco=Value},v2z:function(Value){gx.O.ZV88SNMostraPreco=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNMOSTRAPRECO",gx.O.AV88SNMostraPreco,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV88SNMostraPreco=this.val()},val:function(){return gx.fn.getControlValue("vSNMOSTRAPRECO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODOCUMENTO",gxz:"ZV80TipoDocumento",gxold:"OV80TipoDocumento",gxvar:"AV80TipoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80TipoDocumento=Value},v2z:function(Value){gx.O.ZV80TipoDocumento=Value},v2c:function(){gx.fn.setControlValue("vTIPODOCUMENTO",gx.O.AV80TipoDocumento,0)},c2v:function(){gx.O.AV80TipoDocumento=this.val()},val:function(){return gx.fn.getControlValue("vTIPODOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEMITIR",gxz:"ZV65SNEmitir",gxold:"OV65SNEmitir",gxvar:"AV65SNEmitir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65SNEmitir=Value},v2z:function(Value){gx.O.ZV65SNEmitir=Value},v2c:function(){gx.fn.setControlValue("vSNEMITIR",gx.O.AV65SNEmitir,0)},c2v:function(){gx.O.AV65SNEmitir=this.val()},val:function(){return gx.fn.getControlValue("vSNEMITIR")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"JS", format:2,grid:0};
   this.AV22FilialId = 0 ;
   this.ZV22FilialId = 0 ;
   this.OV22FilialId = 0 ;
   this.AV25FilialNome = "" ;
   this.ZV25FilialNome = "" ;
   this.OV25FilialNome = "" ;
   this.AV36NomeRelativo = "" ;
   this.ZV36NomeRelativo = "" ;
   this.OV36NomeRelativo = "" ;
   this.AV28OrdemServicoClienteId = 0 ;
   this.ZV28OrdemServicoClienteId = 0 ;
   this.OV28OrdemServicoClienteId = 0 ;
   this.AV29OrdemServicoClienteRazao = "" ;
   this.ZV29OrdemServicoClienteRazao = "" ;
   this.OV29OrdemServicoClienteRazao = "" ;
   this.AV40NomeRelat = "" ;
   this.ZV40NomeRelat = "" ;
   this.OV40NomeRelat = "" ;
   this.AV81OrdemServicoId = 0 ;
   this.ZV81OrdemServicoId = 0 ;
   this.OV81OrdemServicoId = 0 ;
   this.AV30ModeloPreVendaQtdeVias = 0 ;
   this.ZV30ModeloPreVendaQtdeVias = 0 ;
   this.OV30ModeloPreVendaQtdeVias = 0 ;
   this.AV84OSModeloRelatorio = 0 ;
   this.ZV84OSModeloRelatorio = 0 ;
   this.OV84OSModeloRelatorio = 0 ;
   this.AV88SNMostraPreco = "" ;
   this.ZV88SNMostraPreco = "" ;
   this.OV88SNMostraPreco = "" ;
   this.AV80TipoDocumento = "" ;
   this.ZV80TipoDocumento = "" ;
   this.OV80TipoDocumento = "" ;
   this.AV65SNEmitir = "" ;
   this.ZV65SNEmitir = "" ;
   this.OV65SNEmitir = "" ;
   this.AV22FilialId = 0 ;
   this.AV25FilialNome = "" ;
   this.AV36NomeRelativo = "" ;
   this.AV28OrdemServicoClienteId = 0 ;
   this.AV29OrdemServicoClienteRazao = "" ;
   this.AV40NomeRelat = "" ;
   this.AV81OrdemServicoId = 0 ;
   this.AV30ModeloPreVendaQtdeVias = 0 ;
   this.AV84OSModeloRelatorio = 0 ;
   this.AV88SNMostraPreco = "" ;
   this.AV80TipoDocumento = "" ;
   this.AV65SNEmitir = "" ;
   this.AV78OrdemServicoEmpresaId = "" ;
   this.AV17SNEmitiu = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A8791OrdemServicoEmpresaId = "" ;
   this.A8792OrdemServicoId = 0 ;
   this.A9134OSPagtoParTipo = "" ;
   this.A9148OSPagtoParContaPRecEmpId = "" ;
   this.A9149OSPagtoParContaPRecNum = 0 ;
   this.A9129OSPagtoParVencimento = gx.date.nullDate() ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A8717OrdemServicoFilialId = 0 ;
   this.A69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A9267OSModeloRelatorioSNCanhoto = "" ;
   this.A9266OSModeloRelatorioSel = "" ;
   this.A9268OSModeloRelatorio = 0 ;
   this.A8946ModeloPreVendaCodigo = 0 ;
   this.A8945ModeloPrevendaEmpresaId = "" ;
   this.A7259ModeloPreVendaSNSolicitarVias = "" ;
   this.A7261ModeloPreVendaModoImpressao = "" ;
   this.A7258ModeloPreVendaQtdeVias = 0 ;
   this.A9174OrdemServicoTipoModeloCarId = 0 ;
   this.A9170OrdemServicoTipoModeloDupId = 0 ;
   this.A8681OrdemServicoTipoEmpresaid = "" ;
   this.A8682OrdemServicoTipoId = 0 ;
   this.AV35TipoNome = "" ;
   this.AV33SNErro = "" ;
   this.AV46Final = 0 ;
   this.AV45cont = 0 ;
   this.AV44TamLink = 0 ;
   this.Events = {"e141dp2_client": ["'EMAIL'", true] ,"e151dp2_client": ["'IMPRIMIR'", true] ,"e111dp2_client": ["'FECHAR'", true] ,"e171dp2_client": ["ENTER", true] ,"e181dp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV92Pgmdesc',fld:'vPGMDESC'},{av:'AV35TipoNome',fld:'vTIPONOME'},{av:'AV60Consiste',fld:'vCONSISTE'},{av:'AV80TipoDocumento',fld:'vTIPODOCUMENTO',hsh:true}],[{ctrl:'FORM',prop:'Caption'},{ctrl:'BTNEMAIL',prop:'Visible'},{ctrl:'BTNIMPRIMIR',prop:'Visible'},{av:'AV35TipoNome',fld:'vTIPONOME'}]];
   this.EvtParms["'EMAIL'"] = [[{av:'AV33SNErro',fld:'vSNERRO'},{av:'AV65SNEmitir',fld:'vSNEMITIR'},{av:'AV30ModeloPreVendaQtdeVias',fld:'vMODELOPREVENDAQTDEVIAS'},{av:'AV24TipoDocumentoAux',fld:'vTIPODOCUMENTOAUX'},{av:'AV72ExisteParcelas',fld:'vEXISTEPARCELAS'},{av:'AV32ModeloPreVendaModoImpressao',fld:'vMODELOPREVENDAMODOIMPRESSAO'},{av:'AV80TipoDocumento',fld:'vTIPODOCUMENTO',hsh:true},{av:'AV22FilialId',fld:'vFILIALID'},{av:'AV66QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV88SNMostraPreco',fld:'vSNMOSTRAPRECO'},{av:'AV78OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID',hsh:true},{av:'AV81OrdemServicoId',fld:'vORDEMSERVICOID',hsh:true},{av:'AV84OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV86OSModeloRelatorioCanhoto',fld:'vOSMODELORELATORIOCANHOTO'},{av:'AV60Consiste',fld:'vCONSISTE'},{av:'AV40NomeRelat',fld:'vNOMERELAT'},{av:'AV42path',fld:'vPATH'},{av:'AV87SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'A9129OSPagtoParVencimento',fld:'OSPAGTOPARVENCIMENTO'},{av:'A8791OrdemServicoEmpresaId',fld:'ORDEMSERVICOEMPRESAID'},{av:'A8792OrdemServicoId',fld:'ORDEMSERVICOID'},{av:'A9134OSPagtoParTipo',fld:'OSPAGTOPARTIPO'},{av:'A9148OSPagtoParContaPRecEmpId',fld:'OSPAGTOPARCONTAPRECEMPID'},{av:'A9149OSPagtoParContaPRecNum',fld:'OSPAGTOPARCONTAPRECNUM'},{av:'AV36NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV62ParmRelat',fld:'vPARMRELAT'},{av:'AV48TrocaDevolucaoEmpresaId',fld:'vTROCADEVOLUCAOEMPRESAID'},{av:'AV27SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV83OSPagtoParContaPRecNum',fld:'vOSPAGTOPARCONTAPRECNUM'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV82OSPagtoParContaPRecEmpId',fld:'vOSPAGTOPARCONTAPRECEMPID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'}],[{av:'AV33SNErro',fld:'vSNERRO'},{av:'AV66QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV88SNMostraPreco',fld:'vSNMOSTRAPRECO'},{av:'AV78OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID',hsh:true},{av:'AV81OrdemServicoId',fld:'vORDEMSERVICOID',hsh:true},{av:'AV85Orientacao',fld:'vORIENTACAO'},{av:'AV24TipoDocumentoAux',fld:'vTIPODOCUMENTOAUX'},{av:'AV27SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV32ModeloPreVendaModoImpressao',fld:'vMODELOPREVENDAMODOIMPRESSAO'},{av:'AV68SNApplet',fld:'vSNAPPLET'},{av:'AV36NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV30ModeloPreVendaQtdeVias',fld:'vMODELOPREVENDAQTDEVIAS'},{av:'AV80TipoDocumento',fld:'vTIPODOCUMENTO',hsh:true},{ctrl:'BTNIMPRIMIR',prop:'Visible'},{ctrl:'BTNEMAIL',prop:'Visible'},{av:'AV38Tamanho',fld:'vTAMANHO'},{av:'AV39NomeRelatorio',fld:'vNOMERELATORIO'},{av:'AV41CamRelat',fld:'vCAMRELAT'},{av:'AV43Assunto',fld:'vASSUNTO'},{av:'AV87SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV98GXLvl417',fld:'vGXLVL417'},{av:'AV82OSPagtoParContaPRecEmpId',fld:'vOSPAGTOPARCONTAPRECEMPID'},{av:'AV83OSPagtoParContaPRecNum',fld:'vOSPAGTOPARCONTAPRECNUM'},{av:'AV72ExisteParcelas',fld:'vEXISTEPARCELAS'},{av:'AV62ParmRelat',fld:'vPARMRELAT'},{av:'AV61NomeProc',fld:'vNOMEPROC'},{av:'AV63Random',fld:'vRANDOM'},{av:'AV64NomeSessao',fld:'vNOMESESSAO'},{av:'AV40NomeRelat',fld:'vNOMERELAT'},{av:'AV44TamLink',fld:'vTAMLINK'},{av:'AV45cont',fld:'vCONT'},{av:'AV46Final',fld:'vFINAL'},{av:'AV99GXLvl434',fld:'vGXLVL434'},{av:'AV75ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV68SNApplet',fld:'vSNAPPLET'},{av:'AV30ModeloPreVendaQtdeVias',fld:'vMODELOPREVENDAQTDEVIAS'},{av:'AV33SNErro',fld:'vSNERRO'},{av:'AV24TipoDocumentoAux',fld:'vTIPODOCUMENTOAUX'},{av:'AV72ExisteParcelas',fld:'vEXISTEPARCELAS'},{av:'AV32ModeloPreVendaModoImpressao',fld:'vMODELOPREVENDAMODOIMPRESSAO'},{av:'AV80TipoDocumento',fld:'vTIPODOCUMENTO',hsh:true},{av:'AV22FilialId',fld:'vFILIALID'},{av:'AV66QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV88SNMostraPreco',fld:'vSNMOSTRAPRECO'},{av:'AV78OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID',hsh:true},{av:'AV81OrdemServicoId',fld:'vORDEMSERVICOID',hsh:true},{av:'AV84OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV86OSModeloRelatorioCanhoto',fld:'vOSMODELORELATORIOCANHOTO'},{av:'AV60Consiste',fld:'vCONSISTE'},{av:'AV36NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV92Pgmdesc',fld:'vPGMDESC'},{av:'A9129OSPagtoParVencimento',fld:'OSPAGTOPARVENCIMENTO'},{av:'A8791OrdemServicoEmpresaId',fld:'ORDEMSERVICOEMPRESAID'},{av:'A8792OrdemServicoId',fld:'ORDEMSERVICOID'},{av:'A9134OSPagtoParTipo',fld:'OSPAGTOPARTIPO'},{av:'A9148OSPagtoParContaPRecEmpId',fld:'OSPAGTOPARCONTAPRECEMPID'},{av:'A9149OSPagtoParContaPRecNum',fld:'OSPAGTOPARCONTAPRECNUM'},{av:'AV62ParmRelat',fld:'vPARMRELAT'},{av:'AV48TrocaDevolucaoEmpresaId',fld:'vTROCADEVOLUCAOEMPRESAID'},{av:'AV27SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV83OSPagtoParContaPRecNum',fld:'vOSPAGTOPARCONTAPRECNUM'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV82OSPagtoParContaPRecEmpId',fld:'vOSPAGTOPARCONTAPRECEMPID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'}],[{av:'AV33SNErro',fld:'vSNERRO'},{av:'AV65SNEmitir',fld:'vSNEMITIR'},{av:'AV66QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV88SNMostraPreco',fld:'vSNMOSTRAPRECO'},{av:'AV78OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID',hsh:true},{av:'AV81OrdemServicoId',fld:'vORDEMSERVICOID',hsh:true},{av:'AV85Orientacao',fld:'vORIENTACAO'},{av:'AV24TipoDocumentoAux',fld:'vTIPODOCUMENTOAUX'},{av:'AV27SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV32ModeloPreVendaModoImpressao',fld:'vMODELOPREVENDAMODOIMPRESSAO'},{av:'AV68SNApplet',fld:'vSNAPPLET'},{av:'AV36NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV30ModeloPreVendaQtdeVias',fld:'vMODELOPREVENDAQTDEVIAS'},{av:'AV80TipoDocumento',fld:'vTIPODOCUMENTO',hsh:true},{ctrl:'BTNIMPRIMIR',prop:'Visible'},{ctrl:'BTNEMAIL',prop:'Visible'},{av:'AV17SNEmitiu',fld:'vSNEMITIU'},{av:'AV98GXLvl417',fld:'vGXLVL417'},{av:'AV82OSPagtoParContaPRecEmpId',fld:'vOSPAGTOPARCONTAPRECEMPID'},{av:'AV83OSPagtoParContaPRecNum',fld:'vOSPAGTOPARCONTAPRECNUM'},{av:'AV72ExisteParcelas',fld:'vEXISTEPARCELAS'},{av:'AV62ParmRelat',fld:'vPARMRELAT'},{av:'AV61NomeProc',fld:'vNOMEPROC'},{av:'AV63Random',fld:'vRANDOM'},{av:'AV64NomeSessao',fld:'vNOMESESSAO'},{av:'AV40NomeRelat',fld:'vNOMERELAT'},{av:'AV44TamLink',fld:'vTAMLINK'},{av:'AV45cont',fld:'vCONT'},{av:'AV46Final',fld:'vFINAL'},{av:'AV99GXLvl434',fld:'vGXLVL434'},{av:'AV75ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17SNEmitiu',fld:'vSNEMITIU'}],[]];
   this.setVCMap("AV78OrdemServicoEmpresaId", "vORDEMSERVICOEMPRESAID", 0, "char");
   this.setVCMap("AV17SNEmitiu", "vSNEMITIU", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemitedocumentoordemservico());
