/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:34:13.51
*/
gx.evt.autoSkip = false;
gx.define('tforcavenda', false, function () {
   this.ServerClass =  "tforcavenda" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV14FvId=gx.fn.getIntegerValue("vFVID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A10617FVEmpresa=gx.fn.getControlValue("FVEMPRESA") ;
      this.AV11EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.A10648FVClienteCnpj=gx.fn.getControlValue("FVCLIENTECNPJ") ;
      this.A10647FVClienteCpf=gx.fn.getControlValue("FVCLIENTECPF") ;
      this.AV34Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Fvid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Fvnumeroprevendaret=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Fvnumeroprevendaret",["gx.O.AV11EmpresaLogadaId", "gx.O.A10645FVNumeroPreVendaRet", "gx.O.AV32SaidaNoDocumento"],["AV32SaidaNoDocumento"]);
      return true;
   }
   this.Valid_Fvuf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FVUF");
         this.AnyError  = 0;
         if ( ! ( this.A10631FVUF == "" || this.A10631FVUF == "AC" || this.A10631FVUF == "AL" || this.A10631FVUF == "AP" || this.A10631FVUF == "AM" || this.A10631FVUF == "BA" || this.A10631FVUF == "CE" || this.A10631FVUF == "DF" || this.A10631FVUF == "ES" || this.A10631FVUF == "GO" || this.A10631FVUF == "MA" || this.A10631FVUF == "MT" || this.A10631FVUF == "MS" || this.A10631FVUF == "MG" || this.A10631FVUF == "PA" || this.A10631FVUF == "PB" || this.A10631FVUF == "PR" || this.A10631FVUF == "PE" || this.A10631FVUF == "PI" || this.A10631FVUF == "RJ" || this.A10631FVUF == "RN" || this.A10631FVUF == "RS" || this.A10631FVUF == "RO" || this.A10631FVUF == "RR" || this.A10631FVUF == "SC" || this.A10631FVUF == "SP" || this.A10631FVUF == "SE" || this.A10631FVUF == "TO" || this.A10631FVUF == "EX" ) )
         {
            try {
               gxballoon.setError("Campo FVUF fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Fvufentrega=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FVUFENTREGA");
         this.AnyError  = 0;
         if ( ! ( this.A10643FVUFEntrega == "" || this.A10643FVUFEntrega == "AC" || this.A10643FVUFEntrega == "AL" || this.A10643FVUFEntrega == "AP" || this.A10643FVUFEntrega == "AM" || this.A10643FVUFEntrega == "BA" || this.A10643FVUFEntrega == "CE" || this.A10643FVUFEntrega == "DF" || this.A10643FVUFEntrega == "ES" || this.A10643FVUFEntrega == "GO" || this.A10643FVUFEntrega == "MA" || this.A10643FVUFEntrega == "MT" || this.A10643FVUFEntrega == "MS" || this.A10643FVUFEntrega == "MG" || this.A10643FVUFEntrega == "PA" || this.A10643FVUFEntrega == "PB" || this.A10643FVUFEntrega == "PR" || this.A10643FVUFEntrega == "PE" || this.A10643FVUFEntrega == "PI" || this.A10643FVUFEntrega == "RJ" || this.A10643FVUFEntrega == "RN" || this.A10643FVUFEntrega == "RS" || this.A10643FVUFEntrega == "RO" || this.A10643FVUFEntrega == "RR" || this.A10643FVUFEntrega == "SC" || this.A10643FVUFEntrega == "SP" || this.A10643FVUFEntrega == "SE" || this.A10643FVUFEntrega == "TO" || this.A10643FVUFEntrega == "EX" ) )
         {
            try {
               gxballoon.setError("Campo FVUFEntrega fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12fd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13fd786_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14fd786_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,13,16,19,21,24,26,30,32,34,37,39,42,44,47,49,52,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,92,95,97,100,102,105,107,110,112,113,116,119,121,124,126,129,131,134,136,139,141,143,146,148,151,153,156,158,161,163,164,167,170,172,184];
   this.GXLastCtrlId =184;
   this.TABCSSContainer = gx.uc.getNew(this, 9, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV28Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV28Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV28Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tabcss_1", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TAB1",grid:0};
   GXValidFnc[13]={fld:"TABLE6",grid:0};
   GXValidFnc[16]={fld:"TABLE3",grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Fvnumeroprevendaret,isvalid:null,rgrid:[],fld:"FVNUMEROPREVENDARET",gxz:"Z10645FVNumeroPreVendaRet",gxold:"O10645FVNumeroPreVendaRet",gxvar:"A10645FVNumeroPreVendaRet",ucs:[],op:[39],ip:[39,21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10645FVNumeroPreVendaRet=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10645FVNumeroPreVendaRet=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVNUMEROPREVENDARET",gx.O.A10645FVNumeroPreVendaRet,0)},c2v:function(){gx.O.A10645FVNumeroPreVendaRet=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVNUMEROPREVENDARET",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fvid,isvalid:null,rgrid:[],fld:"FVID",gxz:"Z10618FVId",gxold:"O10618FVId",gxvar:"A10618FVId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10618FVId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10618FVId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVID",gx.O.A10618FVId,0)},c2v:function(){gx.O.A10618FVId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVID",'.')},nac:function(){return !(0==this.AV14FvId)}};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVUSUARIO",gxz:"Z10623FVUsuario",gxold:"O10623FVUsuario",gxvar:"A10623FVUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10623FVUsuario=Value},v2z:function(Value){gx.O.Z10623FVUsuario=Value},v2c:function(){gx.fn.setControlValue("FVUSUARIO",gx.O.A10623FVUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10623FVUsuario=this.val()},val:function(){return gx.fn.getControlValue("FVUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={fld:"TABLE7",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV32SaidaNoDocumento",gxold:"OV32SaidaNoDocumento",gxvar:"AV32SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32SaidaNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32SaidaNoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV32SaidaNoDocumento,0)},c2v:function(){gx.O.AV32SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVDATAVENDA",gxz:"Z10624FVDataVenda",gxold:"O10624FVDataVenda",gxvar:"A10624FVDataVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10624FVDataVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10624FVDataVenda=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("FVDATAVENDA",gx.O.A10624FVDataVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10624FVDataVenda=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("FVDATAVENDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVSITUACAO",gxz:"Z10633FVSituacao",gxold:"O10633FVSituacao",gxvar:"A10633FVSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10633FVSituacao=Value},v2z:function(Value){gx.O.Z10633FVSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("FVSITUACAO",gx.O.A10633FVSituacao)},c2v:function(){gx.O.A10633FVSituacao=this.val()},val:function(){return gx.fn.getControlValue("FVSITUACAO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[55]={fld:"TABLE5",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVCLIENTECODIGO",gxz:"Z10622FVClienteCodigo",gxold:"O10622FVClienteCodigo",gxvar:"A10622FVClienteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10622FVClienteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10622FVClienteCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVCLIENTECODIGO",gx.O.A10622FVClienteCodigo,0)},c2v:function(){gx.O.A10622FVClienteCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVCLIENTECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVCLIENTENOME",gxz:"Z10646FVClienteNome",gxold:"O10646FVClienteNome",gxvar:"A10646FVClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10646FVClienteNome=Value},v2z:function(Value){gx.O.Z10646FVClienteNome=Value},v2c:function(){gx.fn.setControlValue("FVCLIENTENOME",gx.O.A10646FVClienteNome,0)},c2v:function(){gx.O.A10646FVClienteNome=this.val()},val:function(){return gx.fn.getControlValue("FVCLIENTENOME")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCPFCNPJ",gxz:"ZV10CPFCNPJ",gxold:"OV10CPFCNPJ",gxvar:"AV10CPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10CPFCNPJ=Value},v2z:function(Value){gx.O.ZV10CPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("vCPFCNPJ",gx.O.AV10CPFCNPJ,0)},c2v:function(){gx.O.AV10CPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vCPFCNPJ")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVINSCESTADUAL",gxz:"Z10625FVInscEstadual",gxold:"O10625FVInscEstadual",gxvar:"A10625FVInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10625FVInscEstadual=Value},v2z:function(Value){gx.O.Z10625FVInscEstadual=Value},v2c:function(){gx.fn.setControlValue("FVINSCESTADUAL",gx.O.A10625FVInscEstadual,0)},c2v:function(){gx.O.A10625FVInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("FVINSCESTADUAL")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVCEP",gxz:"Z10632FVCep",gxold:"O10632FVCep",gxvar:"A10632FVCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10632FVCep=Value},v2z:function(Value){gx.O.Z10632FVCep=Value},v2c:function(){gx.fn.setControlValue("FVCEP",gx.O.A10632FVCep,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10632FVCep=this.val()},val:function(){return gx.fn.getControlValue("FVCEP")},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[85]={fld:"TABLE9",grid:0};
   GXValidFnc[88]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVENDERECO",gxz:"Z10626FVEndereco",gxold:"O10626FVEndereco",gxvar:"A10626FVEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10626FVEndereco=Value},v2z:function(Value){gx.O.Z10626FVEndereco=Value},v2c:function(){gx.fn.setControlValue("FVENDERECO",gx.O.A10626FVEndereco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10626FVEndereco=this.val()},val:function(){return gx.fn.getControlValue("FVENDERECO")},nac:gx.falseFn};
   this.declareDomainHdlr( 88 , function() {
   });
   GXValidFnc[90]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVNUMERO",gxz:"Z10627FVNumero",gxold:"O10627FVNumero",gxvar:"A10627FVNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10627FVNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10627FVNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVNUMERO",gx.O.A10627FVNumero,0)},c2v:function(){gx.O.A10627FVNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVCOMPLEMENTO",gxz:"Z10629FVComplemento",gxold:"O10629FVComplemento",gxvar:"A10629FVComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10629FVComplemento=Value},v2z:function(Value){gx.O.Z10629FVComplemento=Value},v2c:function(){gx.fn.setControlValue("FVCOMPLEMENTO",gx.O.A10629FVComplemento,0)},c2v:function(){gx.O.A10629FVComplemento=this.val()},val:function(){return gx.fn.getControlValue("FVCOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[100]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[102]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVBAIRRO",gxz:"Z10628FVBairro",gxold:"O10628FVBairro",gxvar:"A10628FVBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10628FVBairro=Value},v2z:function(Value){gx.O.Z10628FVBairro=Value},v2c:function(){gx.fn.setControlValue("FVBAIRRO",gx.O.A10628FVBairro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10628FVBairro=this.val()},val:function(){return gx.fn.getControlValue("FVBAIRRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 102 , function() {
   });
   GXValidFnc[105]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVCIDADE",gxz:"Z10630FVCidade",gxold:"O10630FVCidade",gxvar:"A10630FVCidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10630FVCidade=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10630FVCidade=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVCIDADE",gx.O.A10630FVCidade,0)},c2v:function(){gx.O.A10630FVCidade=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVCIDADE",'.')},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fvuf,isvalid:null,rgrid:[],fld:"FVUF",gxz:"Z10631FVUF",gxold:"O10631FVUF",gxvar:"A10631FVUF",ucs:[],op:[112],ip:[112],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10631FVUF=Value},v2z:function(Value){gx.O.Z10631FVUF=Value},v2c:function(){gx.fn.setComboBoxValue("FVUF",gx.O.A10631FVUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10631FVUF=this.val()},val:function(){return gx.fn.getControlValue("FVUF")},nac:gx.falseFn};
   this.declareDomainHdlr( 112 , function() {
   });
   GXValidFnc[113]={fld:"TAB2",grid:0};
   GXValidFnc[116]={fld:"TABLE8",grid:0};
   GXValidFnc[119]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVPRAZOENTREGA",gxz:"Z10636FVPrazoEntrega",gxold:"O10636FVPrazoEntrega",gxvar:"A10636FVPrazoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10636FVPrazoEntrega=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10636FVPrazoEntrega=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVPRAZOENTREGA",gx.O.A10636FVPrazoEntrega,0)},c2v:function(){gx.O.A10636FVPrazoEntrega=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVPRAZOENTREGA",'.')},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVTIPOENTREGA",gxz:"Z10637FVTipoEntrega",gxold:"O10637FVTipoEntrega",gxvar:"A10637FVTipoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10637FVTipoEntrega=Value},v2z:function(Value){gx.O.Z10637FVTipoEntrega=Value},v2c:function(){gx.fn.setComboBoxValue("FVTIPOENTREGA",gx.O.A10637FVTipoEntrega)},c2v:function(){gx.O.A10637FVTipoEntrega=this.val()},val:function(){return gx.fn.getControlValue("FVTIPOENTREGA")},nac:gx.falseFn};
   GXValidFnc[129]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[131]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVCEPENTREGA",gxz:"Z10644FVCepEntrega",gxold:"O10644FVCepEntrega",gxvar:"A10644FVCepEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10644FVCepEntrega=Value},v2z:function(Value){gx.O.Z10644FVCepEntrega=Value},v2c:function(){gx.fn.setControlValue("FVCEPENTREGA",gx.O.A10644FVCepEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10644FVCepEntrega=this.val()},val:function(){return gx.fn.getControlValue("FVCEPENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 131 , function() {
   });
   GXValidFnc[134]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[136]={fld:"TABLE10",grid:0};
   GXValidFnc[139]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVENDERECOENTREGA",gxz:"Z10638FVEnderecoEntrega",gxold:"O10638FVEnderecoEntrega",gxvar:"A10638FVEnderecoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10638FVEnderecoEntrega=Value},v2z:function(Value){gx.O.Z10638FVEnderecoEntrega=Value},v2c:function(){gx.fn.setControlValue("FVENDERECOENTREGA",gx.O.A10638FVEnderecoEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10638FVEnderecoEntrega=this.val()},val:function(){return gx.fn.getControlValue("FVENDERECOENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 139 , function() {
   });
   GXValidFnc[141]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[143]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVNUMEROENTREGA",gxz:"Z10639FVNumeroEntrega",gxold:"O10639FVNumeroEntrega",gxvar:"A10639FVNumeroEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10639FVNumeroEntrega=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10639FVNumeroEntrega=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVNUMEROENTREGA",gx.O.A10639FVNumeroEntrega,0)},c2v:function(){gx.O.A10639FVNumeroEntrega=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVNUMEROENTREGA",'.')},nac:gx.falseFn};
   GXValidFnc[146]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[148]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVCOMPLEMENTOENTREGA",gxz:"Z10641FVComplementoEntrega",gxold:"O10641FVComplementoEntrega",gxvar:"A10641FVComplementoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10641FVComplementoEntrega=Value},v2z:function(Value){gx.O.Z10641FVComplementoEntrega=Value},v2c:function(){gx.fn.setControlValue("FVCOMPLEMENTOENTREGA",gx.O.A10641FVComplementoEntrega,0)},c2v:function(){gx.O.A10641FVComplementoEntrega=this.val()},val:function(){return gx.fn.getControlValue("FVCOMPLEMENTOENTREGA")},nac:gx.falseFn};
   GXValidFnc[151]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[153]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVBAIRROENTREGA",gxz:"Z10640FVBairroEntrega",gxold:"O10640FVBairroEntrega",gxvar:"A10640FVBairroEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10640FVBairroEntrega=Value},v2z:function(Value){gx.O.Z10640FVBairroEntrega=Value},v2c:function(){gx.fn.setControlValue("FVBAIRROENTREGA",gx.O.A10640FVBairroEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10640FVBairroEntrega=this.val()},val:function(){return gx.fn.getControlValue("FVBAIRROENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 153 , function() {
   });
   GXValidFnc[156]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[158]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVCIDADEENTREGA",gxz:"Z10642FVCidadeEntrega",gxold:"O10642FVCidadeEntrega",gxvar:"A10642FVCidadeEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10642FVCidadeEntrega=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10642FVCidadeEntrega=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVCIDADEENTREGA",gx.O.A10642FVCidadeEntrega,0)},c2v:function(){gx.O.A10642FVCidadeEntrega=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVCIDADEENTREGA",'.')},nac:gx.falseFn};
   GXValidFnc[161]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[163]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fvufentrega,isvalid:null,rgrid:[],fld:"FVUFENTREGA",gxz:"Z10643FVUFEntrega",gxold:"O10643FVUFEntrega",gxvar:"A10643FVUFEntrega",ucs:[],op:[163],ip:[163],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10643FVUFEntrega=Value},v2z:function(Value){gx.O.Z10643FVUFEntrega=Value},v2c:function(){gx.fn.setComboBoxValue("FVUFENTREGA",gx.O.A10643FVUFEntrega);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10643FVUFEntrega=this.val()},val:function(){return gx.fn.getControlValue("FVUFENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 163 , function() {
   });
   GXValidFnc[164]={fld:"TAB3",grid:0};
   GXValidFnc[167]={fld:"TABLE23",grid:0};
   GXValidFnc[170]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[172]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVOBSERVACAO",gxz:"Z10634FVObservacao",gxold:"O10634FVObservacao",gxvar:"A10634FVObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10634FVObservacao=Value},v2z:function(Value){gx.O.Z10634FVObservacao=Value},v2c:function(){gx.fn.setControlValue("FVOBSERVACAO",gx.O.A10634FVObservacao,0)},c2v:function(){gx.O.A10634FVObservacao=this.val()},val:function(){return gx.fn.getControlValue("FVOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[184]={fld:"BTNHELP",grid:0};
   this.A10645FVNumeroPreVendaRet = 0 ;
   this.Z10645FVNumeroPreVendaRet = 0 ;
   this.O10645FVNumeroPreVendaRet = 0 ;
   this.A10618FVId = 0 ;
   this.Z10618FVId = 0 ;
   this.O10618FVId = 0 ;
   this.A10623FVUsuario = "" ;
   this.Z10623FVUsuario = "" ;
   this.O10623FVUsuario = "" ;
   this.AV32SaidaNoDocumento = 0 ;
   this.ZV32SaidaNoDocumento = 0 ;
   this.OV32SaidaNoDocumento = 0 ;
   this.A10624FVDataVenda = gx.date.nullDate() ;
   this.Z10624FVDataVenda = gx.date.nullDate() ;
   this.O10624FVDataVenda = gx.date.nullDate() ;
   this.A10633FVSituacao = "" ;
   this.Z10633FVSituacao = "" ;
   this.O10633FVSituacao = "" ;
   this.A10622FVClienteCodigo = 0 ;
   this.Z10622FVClienteCodigo = 0 ;
   this.O10622FVClienteCodigo = 0 ;
   this.A10646FVClienteNome = "" ;
   this.Z10646FVClienteNome = "" ;
   this.O10646FVClienteNome = "" ;
   this.AV10CPFCNPJ = "" ;
   this.ZV10CPFCNPJ = "" ;
   this.OV10CPFCNPJ = "" ;
   this.A10625FVInscEstadual = "" ;
   this.Z10625FVInscEstadual = "" ;
   this.O10625FVInscEstadual = "" ;
   this.A10632FVCep = "" ;
   this.Z10632FVCep = "" ;
   this.O10632FVCep = "" ;
   this.A10626FVEndereco = "" ;
   this.Z10626FVEndereco = "" ;
   this.O10626FVEndereco = "" ;
   this.A10627FVNumero = 0 ;
   this.Z10627FVNumero = 0 ;
   this.O10627FVNumero = 0 ;
   this.A10629FVComplemento = "" ;
   this.Z10629FVComplemento = "" ;
   this.O10629FVComplemento = "" ;
   this.A10628FVBairro = "" ;
   this.Z10628FVBairro = "" ;
   this.O10628FVBairro = "" ;
   this.A10630FVCidade = 0 ;
   this.Z10630FVCidade = 0 ;
   this.O10630FVCidade = 0 ;
   this.A10631FVUF = "" ;
   this.Z10631FVUF = "" ;
   this.O10631FVUF = "" ;
   this.A10636FVPrazoEntrega = 0 ;
   this.Z10636FVPrazoEntrega = 0 ;
   this.O10636FVPrazoEntrega = 0 ;
   this.A10637FVTipoEntrega = "" ;
   this.Z10637FVTipoEntrega = "" ;
   this.O10637FVTipoEntrega = "" ;
   this.A10644FVCepEntrega = "" ;
   this.Z10644FVCepEntrega = "" ;
   this.O10644FVCepEntrega = "" ;
   this.A10638FVEnderecoEntrega = "" ;
   this.Z10638FVEnderecoEntrega = "" ;
   this.O10638FVEnderecoEntrega = "" ;
   this.A10639FVNumeroEntrega = 0 ;
   this.Z10639FVNumeroEntrega = 0 ;
   this.O10639FVNumeroEntrega = 0 ;
   this.A10641FVComplementoEntrega = "" ;
   this.Z10641FVComplementoEntrega = "" ;
   this.O10641FVComplementoEntrega = "" ;
   this.A10640FVBairroEntrega = "" ;
   this.Z10640FVBairroEntrega = "" ;
   this.O10640FVBairroEntrega = "" ;
   this.A10642FVCidadeEntrega = 0 ;
   this.Z10642FVCidadeEntrega = 0 ;
   this.O10642FVCidadeEntrega = 0 ;
   this.A10643FVUFEntrega = "" ;
   this.Z10643FVUFEntrega = "" ;
   this.O10643FVUFEntrega = "" ;
   this.A10634FVObservacao = "" ;
   this.Z10634FVObservacao = "" ;
   this.O10634FVObservacao = "" ;
   this.AV27UsrCod = "" ;
   this.AV11EmpresaLogadaId = "" ;
   this.AV25Sistema = "" ;
   this.AV33Pgmname = "" ;
   this.AV34Pgmdesc = "" ;
   this.AV20MsgErro = "" ;
   this.AV19Modulo = "" ;
   this.AV17Logon = {} ;
   this.AV26Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV14FvId = 0 ;
   this.A10617FVEmpresa = "" ;
   this.A10618FVId = 0 ;
   this.AV32SaidaNoDocumento = 0 ;
   this.AV10CPFCNPJ = "" ;
   this.A10623FVUsuario = "" ;
   this.A10624FVDataVenda = gx.date.nullDate() ;
   this.A10622FVClienteCodigo = 0 ;
   this.A10647FVClienteCpf = "" ;
   this.A10648FVClienteCnpj = "" ;
   this.A10646FVClienteNome = "" ;
   this.A10625FVInscEstadual = "" ;
   this.A10626FVEndereco = "" ;
   this.A10627FVNumero = 0 ;
   this.A10628FVBairro = "" ;
   this.A10629FVComplemento = "" ;
   this.A10630FVCidade = 0 ;
   this.A10631FVUF = "" ;
   this.A10632FVCep = "" ;
   this.A10633FVSituacao = "" ;
   this.A10634FVObservacao = "" ;
   this.A10636FVPrazoEntrega = 0 ;
   this.A10637FVTipoEntrega = "" ;
   this.A10638FVEnderecoEntrega = "" ;
   this.A10639FVNumeroEntrega = 0 ;
   this.A10640FVBairroEntrega = "" ;
   this.A10641FVComplementoEntrega = "" ;
   this.A10642FVCidadeEntrega = 0 ;
   this.A10643FVUFEntrega = "" ;
   this.A10644FVCepEntrega = "" ;
   this.A10645FVNumeroPreVendaRet = 0 ;
   this.AV28Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12fd2_client": ["'FECHAR'", true] ,"e13fd786_client": ["ENTER", true] ,"e14fd786_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14FvId',fld:'vFVID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14FvId", "vFVID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10617FVEmpresa", "FVEMPRESA", 0, "char");
   this.setVCMap("AV11EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A10648FVClienteCnpj", "FVCLIENTECNPJ", 0, "char");
   this.setVCMap("A10647FVClienteCpf", "FVCLIENTECPF", 0, "char");
   this.setVCMap("AV34Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tforcavenda());
