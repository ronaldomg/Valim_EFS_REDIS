/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:39:9.89
*/
gx.evt.autoSkip = false;
gx.define('hregistrarconvevento', false, function () {
   this.ServerClass =  "hregistrarconvevento" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("7", "'CANCELAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Transacaocxbcoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOCXBCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11he2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15he2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12he2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e17he2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,19,21,27,34,36,39,41,44,46,47,55,57,59,60,63,65,68,70,71,76,85,86,87,88,91,92,94,96];
   this.GXLastCtrlId =96;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLECABECALHO",grid:0};
   GXValidFnc[12]={fld:"TABLECABECALHODENTRO",grid:0};
   GXValidFnc[19]={fld:"TXTTPRECEBIMENTO", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORECEBIMENTO",gxz:"ZV65tipoRecebimento",gxold:"OV65tipoRecebimento",gxvar:"AV65tipoRecebimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV65tipoRecebimento=Value},v2z:function(Value){gx.O.ZV65tipoRecebimento=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORECEBIMENTO",gx.O.AV65tipoRecebimento)},c2v:function(){gx.O.AV65tipoRecebimento=this.val()},val:function(){return gx.fn.getControlValue("vTIPORECEBIMENTO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLECONVITE",grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV24DataInicial",gxold:"OV24DataInicial",gxvar:"AV24DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV24DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV25DataFinal",gxold:"OV25DataFinal",gxvar:"AV25DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV25DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAOCONVITE",gxz:"ZV82ObservacaoConvite",gxold:"OV82ObservacaoConvite",gxvar:"AV82ObservacaoConvite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82ObservacaoConvite=Value},v2z:function(Value){gx.O.ZV82ObservacaoConvite=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAOCONVITE",gx.O.AV82ObservacaoConvite,0)},c2v:function(){gx.O.AV82ObservacaoConvite=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAOCONVITE")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLEEVENTO",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCOSIGLA",gxz:"ZV80TransacaoCxBcoSigla",gxold:"OV80TransacaoCxBcoSigla",gxvar:"AV80TransacaoCxBcoSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80TransacaoCxBcoSigla=Value},v2z:function(Value){gx.O.ZV80TransacaoCxBcoSigla=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOSIGLA",gx.O.AV80TransacaoCxBcoSigla,0)},c2v:function(){gx.O.AV80TransacaoCxBcoSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOSIGLA")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCODESCRICAO",gxz:"ZV79TransacaoCxBcoDescricao",gxold:"OV79TransacaoCxBcoDescricao",gxvar:"AV79TransacaoCxBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79TransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.ZV79TransacaoCxBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCODESCRICAO",gx.O.AV79TransacaoCxBcoDescricao,0)},c2v:function(){gx.O.AV79TransacaoCxBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaocxbcoempresaid,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCOEMPRESAID",gxz:"ZV78TransacaoCxBcoEmpresaId",gxold:"OV78TransacaoCxBcoEmpresaId",gxvar:"AV78TransacaoCxBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78TransacaoCxBcoEmpresaId=Value},v2z:function(Value){gx.O.ZV78TransacaoCxBcoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOEMPRESAID",gx.O.AV78TransacaoCxBcoEmpresaId,0)},c2v:function(){gx.O.AV78TransacaoCxBcoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALOREVENTO",gxz:"ZV81ValorEvento",gxold:"OV81ValorEvento",gxvar:"AV81ValorEvento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81ValorEvento=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV81ValorEvento=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALOREVENTO",gx.O.AV81ValorEvento,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV81ValorEvento=this.val()},val:function(){return gx.fn.getDecimalValue("vVALOREVENTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAOEVENTO",gxz:"ZV88ObservacaoEvento",gxold:"OV88ObservacaoEvento",gxvar:"AV88ObservacaoEvento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88ObservacaoEvento=Value},v2z:function(Value){gx.O.ZV88ObservacaoEvento=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAOEVENTO",gx.O.AV88ObservacaoEvento,0)},c2v:function(){gx.O.AV88ObservacaoEvento=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAOEVENTO")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TABLEVALOR",grid:0};
   GXValidFnc[76]={fld:"TXTTOTAL", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV95AcessoSistemaSequencia",gxold:"OV95AcessoSistemaSequencia",gxvar:"AV95AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV95AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV95AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV95AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLIMPARTELA",gxz:"ZV94LimparTela",gxold:"OV94LimparTela",gxvar:"AV94LimparTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94LimparTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV94LimparTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLIMPARTELA",gx.O.AV94LimparTela,0)},c2v:function(){gx.O.AV94LimparTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLIMPARTELA",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCONVITE",gxz:"ZV70ValorConvite",gxold:"OV70ValorConvite",gxvar:"AV70ValorConvite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70ValorConvite=Value},v2z:function(Value){gx.O.ZV70ValorConvite=Value},v2c:function(){gx.fn.setControlValue("vVALORCONVITE",gx.O.AV70ValorConvite,0)},c2v:function(){gx.O.AV70ValorConvite=this.val()},val:function(){return gx.fn.getControlValue("vVALORCONVITE")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"JS", format:2,grid:0};
   GXValidFnc[91]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSCONVITE",gxz:"ZV77TransConvite",gxold:"OV77TransConvite",gxvar:"AV77TransConvite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77TransConvite=Value},v2z:function(Value){gx.O.ZV77TransConvite=Value},v2c:function(){gx.fn.setControlValue("vTRANSCONVITE",gx.O.AV77TransConvite,0)},c2v:function(){gx.O.AV77TransConvite=this.val()},val:function(){return gx.fn.getControlValue("vTRANSCONVITE")},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV71ValorTotal",gxold:"OV71ValorTotal",gxvar:"AV71ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71ValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV71ValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTAL",gx.O.AV71ValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV71ValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 92 , function() {
   });
   GXValidFnc[94]={fld:"BTNHELP",grid:0};
   GXValidFnc[96]={fld:"PROMPT_TRANSACAOCXBCOSIGLA",grid:0};
   this.AV65tipoRecebimento = "" ;
   this.ZV65tipoRecebimento = "" ;
   this.OV65tipoRecebimento = "" ;
   this.AV24DataInicial = gx.date.nullDate() ;
   this.ZV24DataInicial = gx.date.nullDate() ;
   this.OV24DataInicial = gx.date.nullDate() ;
   this.AV25DataFinal = gx.date.nullDate() ;
   this.ZV25DataFinal = gx.date.nullDate() ;
   this.OV25DataFinal = gx.date.nullDate() ;
   this.AV82ObservacaoConvite = "" ;
   this.ZV82ObservacaoConvite = "" ;
   this.OV82ObservacaoConvite = "" ;
   this.AV80TransacaoCxBcoSigla = "" ;
   this.ZV80TransacaoCxBcoSigla = "" ;
   this.OV80TransacaoCxBcoSigla = "" ;
   this.AV79TransacaoCxBcoDescricao = "" ;
   this.ZV79TransacaoCxBcoDescricao = "" ;
   this.OV79TransacaoCxBcoDescricao = "" ;
   this.AV78TransacaoCxBcoEmpresaId = "" ;
   this.ZV78TransacaoCxBcoEmpresaId = "" ;
   this.OV78TransacaoCxBcoEmpresaId = "" ;
   this.AV81ValorEvento = 0 ;
   this.ZV81ValorEvento = 0 ;
   this.OV81ValorEvento = 0 ;
   this.AV88ObservacaoEvento = "" ;
   this.ZV88ObservacaoEvento = "" ;
   this.OV88ObservacaoEvento = "" ;
   this.AV95AcessoSistemaSequencia = 0 ;
   this.ZV95AcessoSistemaSequencia = 0 ;
   this.OV95AcessoSistemaSequencia = 0 ;
   this.AV94LimparTela = 0 ;
   this.ZV94LimparTela = 0 ;
   this.OV94LimparTela = 0 ;
   this.AV70ValorConvite = "" ;
   this.ZV70ValorConvite = "" ;
   this.OV70ValorConvite = "" ;
   this.AV77TransConvite = "" ;
   this.ZV77TransConvite = "" ;
   this.OV77TransConvite = "" ;
   this.AV71ValorTotal = 0 ;
   this.ZV71ValorTotal = 0 ;
   this.OV71ValorTotal = 0 ;
   this.AV65tipoRecebimento = "" ;
   this.AV24DataInicial = gx.date.nullDate() ;
   this.AV25DataFinal = gx.date.nullDate() ;
   this.AV82ObservacaoConvite = "" ;
   this.AV80TransacaoCxBcoSigla = "" ;
   this.AV79TransacaoCxBcoDescricao = "" ;
   this.AV78TransacaoCxBcoEmpresaId = "" ;
   this.AV81ValorEvento = 0 ;
   this.AV88ObservacaoEvento = "" ;
   this.AV95AcessoSistemaSequencia = 0 ;
   this.AV94LimparTela = 0 ;
   this.AV70ValorConvite = "" ;
   this.AV77TransConvite = "" ;
   this.AV71ValorTotal = 0 ;
   this.A1114TransacaoCxBcoSigla = "" ;
   this.A1115TransacaoCxBcoEmpresaId = "" ;
   this.A1099TransacaoCxBcoHistoricoId = 0 ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1019CaixaBancoSnAtivo = "" ;
   this.A75UsuarioId = "" ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1589VendedorCaixaBancoId = 0 ;
   this.Events = {"e11he2_client": ["'FECHAR'", true] ,"e15he2_client": ["ENTER", true] ,"e12he2_client": ["'CANCELAR'", true] ,"e17he2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV94LimparTela',fld:'vLIMPARTELA'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV80TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV69SnErro',fld:'vSNERRO'},{av:'AV65tipoRecebimento',fld:'vTIPORECEBIMENTO'},{av:'AV25DataFinal',fld:'vDATAFINAL'}],[{av:'AV94LimparTela',fld:'vLIMPARTELA'},{av:'AV67Tela',fld:'vTELA'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'vTIPORECEBIMENTO'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONVITE","Visible")',ctrl:'TABLECONVITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEVALOR","Visible")',ctrl:'TABLEVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEEVENTO","Visible")',ctrl:'TABLEEVENTO',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCXBCOSIGLA","Enabled")',ctrl:'vTRANSACAOCXBCOSIGLA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vVALOREVENTO","Enabled")',ctrl:'vVALOREVENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOBSERVACAOEVENTO","Enabled")',ctrl:'vOBSERVACAOEVENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAINICIAL","Enabled")',ctrl:'vDATAINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFINAL","Enabled")',ctrl:'vDATAFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOBSERVACAOCONVITE","Enabled")',ctrl:'vOBSERVACAOCONVITE',prop:'Enabled'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'AV65tipoRecebimento',fld:'vTIPORECEBIMENTO'},{av:'AV80TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV79TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV81ValorEvento',fld:'vVALOREVENTO'},{av:'AV82ObservacaoConvite',fld:'vOBSERVACAOCONVITE'},{av:'AV88ObservacaoEvento',fld:'vOBSERVACAOEVENTO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV95AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV67Tela',fld:'vTELA'},{av:'AV65tipoRecebimento',fld:'vTIPORECEBIMENTO'},{av:'AV77TransConvite',fld:'vTRANSCONVITE'},{av:'AV86Mensagem',fld:'vMENSAGEM'},{av:'AV70ValorConvite',fld:'vVALORCONVITE'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV83DataSistema',fld:'vDATASISTEMA'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'AV101DtBloqConvite',fld:'vDTBLOQCONVITE'},{av:'AV80TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV81ValorEvento',fld:'vVALOREVENTO'},{av:'AV88ObservacaoEvento',fld:'vOBSERVACAOEVENTO'},{av:'AV75VendedorCaixaBancoId',fld:'vVENDEDORCAIXABANCOID'},{av:'AV82ObservacaoConvite',fld:'vOBSERVACAOCONVITE'},{av:'AV71ValorTotal',fld:'vVALORTOTAL'},{av:'A1115TransacaoCxBcoEmpresaId',fld:'TRANSACAOCXBCOEMPRESAID'},{av:'AV78TransacaoCxBcoEmpresaId',fld:'vTRANSACAOCXBCOEMPRESAID'},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'},{av:'AV84TransacaoCxBcoSiglaAux',fld:'vTRANSACAOCXBCOSIGLAAUX'},{av:'A1099TransacaoCxBcoHistoricoId',fld:'TRANSACAOCXBCOHISTORICOID'},{av:'AV69SnErro',fld:'vSNERRO'},{av:'AV104Pgmname',fld:'vPGMNAME'},{av:'AV99ParmRelat',fld:'vPARMRELAT'},{av:'AV87PTransacaoCxBcoSigla',fld:'vPTRANSACAOCXBCOSIGLA'},{av:'AV91LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'}],[{av:'AV69SnErro',fld:'vSNERRO'},{av:'AV84TransacaoCxBcoSiglaAux',fld:'vTRANSACAOCXBCOSIGLAAUX'},{av:'AV70ValorConvite',fld:'vVALORCONVITE'},{av:'AV71ValorTotal',fld:'vVALORTOTAL'},{av:'gx.fn.getCtrlProperty("TXTTOTAL","Caption")',ctrl:'TXTTOTAL',prop:'Caption'},{av:'AV87PTransacaoCxBcoSigla',fld:'vPTRANSACAOCXBCOSIGLA'},{av:'AV91LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'},{av:'AV77TransConvite',fld:'vTRANSCONVITE'},{av:'AV100ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV101DtBloqConvite',fld:'vDTBLOQCONVITE'},{av:'AV108GXLvl404',fld:'vGXLVL404'},{av:'AV86Mensagem',fld:'vMENSAGEM'},{av:'AV67Tela',fld:'vTELA'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'vTIPORECEBIMENTO'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONVITE","Visible")',ctrl:'TABLECONVITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEVALOR","Visible")',ctrl:'TABLEVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEEVENTO","Visible")',ctrl:'TABLEEVENTO',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCXBCOSIGLA","Enabled")',ctrl:'vTRANSACAOCXBCOSIGLA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vVALOREVENTO","Enabled")',ctrl:'vVALOREVENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOBSERVACAOEVENTO","Enabled")',ctrl:'vOBSERVACAOEVENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAINICIAL","Enabled")',ctrl:'vDATAINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFINAL","Enabled")',ctrl:'vDATAFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOBSERVACAOCONVITE","Enabled")',ctrl:'vOBSERVACAOCONVITE',prop:'Enabled'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV99ParmRelat',fld:'vPARMRELAT'},{av:'AV94LimparTela',fld:'vLIMPARTELA'},{av:'AV98NomeProc',fld:'vNOMEPROC'},{av:'AV96Random',fld:'vRANDOM'},{av:'AV97NomeSessao',fld:'vNOMESESSAO'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV65tipoRecebimento',fld:'vTIPORECEBIMENTO'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'AV80TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV69SnErro',fld:'vSNERRO'}],[{av:'AV67Tela',fld:'vTELA'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'AV82ObservacaoConvite',fld:'vOBSERVACAOCONVITE'},{av:'AV80TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV79TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV81ValorEvento',fld:'vVALOREVENTO'},{av:'AV88ObservacaoEvento',fld:'vOBSERVACAOEVENTO'},{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'vTIPORECEBIMENTO'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONVITE","Visible")',ctrl:'TABLECONVITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEVALOR","Visible")',ctrl:'TABLEVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEEVENTO","Visible")',ctrl:'TABLEEVENTO',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTRANSACAOCXBCOSIGLA","Enabled")',ctrl:'vTRANSACAOCXBCOSIGLA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vVALOREVENTO","Enabled")',ctrl:'vVALOREVENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOBSERVACAOEVENTO","Enabled")',ctrl:'vOBSERVACAOEVENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAINICIAL","Enabled")',ctrl:'vDATAINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFINAL","Enabled")',ctrl:'vDATAFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOBSERVACAOCONVITE","Enabled")',ctrl:'vOBSERVACAOCONVITE',prop:'Enabled'}]];
   this.setPrompt("PROMPT_TRANSACAOCXBCOSIGLA", [57]);
   this.EnterCtrl = ["BTNCONFIRMAR" ,"BTNAVANCAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarconvevento());
