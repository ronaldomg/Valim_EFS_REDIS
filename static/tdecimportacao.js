/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:9:11.24
*/
gx.evt.autoSkip = false;
gx.define('tdecimportacao', false, function () {
   this.ServerClass =  "tdecimportacao" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
      this.A10398DecImportacaoTpViaTransp=gx.fn.getIntegerValue("DECIMPORTACAOTPVIATRANSP",'.') ;
      this.A10400DecImportacaovAFRMM=gx.fn.getDecimalValue("DECIMPORTACAOVAFRMM",'.',',') ;
      this.A10397DecImportacaoTpIntermedio=gx.fn.getIntegerValue("DECIMPORTACAOTPINTERMEDIO",'.') ;
      this.A10396DecImportacaoCNPJAdq=gx.fn.getControlValue("DECIMPORTACAOCNPJADQ") ;
      this.A10399DecImportacaoUfTerceiro=gx.fn.getControlValue("DECIMPORTACAOUFTERCEIRO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Entradaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entradaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entradaitemsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entradaitemsequencia",["gx.O.A4637EntradaEmpresaId", "gx.O.A4638EntradaId", "gx.O.A4822EntradaItemSequencia"],[]);
      return true;
   }
   this.Valid_Decimportacaosequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Decimportacaosequencia",["gx.O.A4637EntradaEmpresaId", "gx.O.A4638EntradaId", "gx.O.A4822EntradaItemSequencia", "gx.O.A5175DecImportacaoSequencia", "gx.O.A5167DecImportacaoNoDI", 'gx.date.urlDate(gx.O.A5168DecImportacaoDataRegistro,"DMY4")', "gx.O.A5169DecImportacaoExportador", "gx.O.A5170DecImportacaoUFDesembaraco", "gx.O.A5171DecImportacaoLocalDesembaraco", 'gx.date.urlDate(gx.O.A5172DecImportacaoDataDesembaraco,"DMY4")', "gx.O.A10398DecImportacaoTpViaTransp", "gx.num.urlDecimal(gx.O.A10400DecImportacaovAFRMM,\'.\',\',\')", "gx.O.A10397DecImportacaoTpIntermedio", "gx.O.A10396DecImportacaoCNPJAdq", "gx.O.A10399DecImportacaoUfTerceiro", "gx.O.A5173DecImportacaoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A5174DecImportacaoDataHoraAlt,"DMY4")'],["A5167DecImportacaoNoDI", "A5168DecImportacaoDataRegistro", "A5169DecImportacaoExportador", "A5170DecImportacaoUFDesembaraco", "A5171DecImportacaoLocalDesembaraco", "A5172DecImportacaoDataDesembaraco", "A10398DecImportacaoTpViaTransp", "A10400DecImportacaovAFRMM", "A10397DecImportacaoTpIntermedio", "A10396DecImportacaoCNPJAdq", "A10399DecImportacaoUfTerceiro", "A5173DecImportacaoUsuarioAlt", "A5174DecImportacaoDataHoraAlt", "Gx_mode", "Z4637EntradaEmpresaId", "Z4638EntradaId", "Z4822EntradaItemSequencia", "Z5175DecImportacaoSequencia", "Z5167DecImportacaoNoDI", "Z5168DecImportacaoDataRegistro", "Z5169DecImportacaoExportador", "Z5170DecImportacaoUFDesembaraco", "Z5171DecImportacaoLocalDesembaraco", "Z5172DecImportacaoDataDesembaraco", "Z10398DecImportacaoTpViaTransp", "Z10400DecImportacaovAFRMM", "Z10397DecImportacaoTpIntermedio", "Z10396DecImportacaoCNPJAdq", "Z10399DecImportacaoUfTerceiro", "Z5173DecImportacaoUsuarioAlt", "Z5174DecImportacaoDataHoraAlt", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Decimportacaoufdesembaraco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DECIMPORTACAOUFDESEMBARACO");
         this.AnyError  = 0;
         if ( ! ( this.A5170DecImportacaoUFDesembaraco == "" || this.A5170DecImportacaoUFDesembaraco == "AC" || this.A5170DecImportacaoUFDesembaraco == "AL" || this.A5170DecImportacaoUFDesembaraco == "AP" || this.A5170DecImportacaoUFDesembaraco == "AM" || this.A5170DecImportacaoUFDesembaraco == "BA" || this.A5170DecImportacaoUFDesembaraco == "CE" || this.A5170DecImportacaoUFDesembaraco == "DF" || this.A5170DecImportacaoUFDesembaraco == "ES" || this.A5170DecImportacaoUFDesembaraco == "GO" || this.A5170DecImportacaoUFDesembaraco == "MA" || this.A5170DecImportacaoUFDesembaraco == "MT" || this.A5170DecImportacaoUFDesembaraco == "MS" || this.A5170DecImportacaoUFDesembaraco == "MG" || this.A5170DecImportacaoUFDesembaraco == "PA" || this.A5170DecImportacaoUFDesembaraco == "PB" || this.A5170DecImportacaoUFDesembaraco == "PR" || this.A5170DecImportacaoUFDesembaraco == "PE" || this.A5170DecImportacaoUFDesembaraco == "PI" || this.A5170DecImportacaoUFDesembaraco == "RJ" || this.A5170DecImportacaoUFDesembaraco == "RN" || this.A5170DecImportacaoUFDesembaraco == "RS" || this.A5170DecImportacaoUFDesembaraco == "RO" || this.A5170DecImportacaoUFDesembaraco == "RR" || this.A5170DecImportacaoUFDesembaraco == "SC" || this.A5170DecImportacaoUFDesembaraco == "SP" || this.A5170DecImportacaoUFDesembaraco == "SE" || this.A5170DecImportacaoUFDesembaraco == "TO" || this.A5170DecImportacaoUFDesembaraco == "EX" ) )
         {
            try {
               gxballoon.setError("Campo UF do Desembaraço Aduaneiro fora do intervalo");
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
   this.e118c455_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e128c455_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e138c455_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,71,80,82,84];
   this.GXLastCtrlId =84;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaempresaid,isvalid:null,rgrid:[],fld:"ENTRADAEMPRESAID",gxz:"Z4637EntradaEmpresaId",gxold:"O4637EntradaEmpresaId",gxvar:"A4637EntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4637EntradaEmpresaId=Value},v2z:function(Value){gx.O.Z4637EntradaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ENTRADAEMPRESAID",gx.O.A4637EntradaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4637EntradaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaid,isvalid:null,rgrid:[],fld:"ENTRADAID",gxz:"Z4638EntradaId",gxold:"O4638EntradaId",gxvar:"A4638EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4638EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4638EntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAID",gx.O.A4638EntradaId,0)},c2v:function(){gx.O.A4638EntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaitemsequencia,isvalid:null,rgrid:[],fld:"ENTRADAITEMSEQUENCIA",gxz:"Z4822EntradaItemSequencia",gxold:"O4822EntradaItemSequencia",gxvar:"A4822EntradaItemSequencia",ucs:[],op:[],ip:[24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4822EntradaItemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4822EntradaItemSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAITEMSEQUENCIA",gx.O.A4822EntradaItemSequencia,0)},c2v:function(){gx.O.A4822EntradaItemSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAITEMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Decimportacaosequencia,isvalid:null,rgrid:[],fld:"DECIMPORTACAOSEQUENCIA",gxz:"Z5175DecImportacaoSequencia",gxold:"O5175DecImportacaoSequencia",gxvar:"A5175DecImportacaoSequencia",ucs:[],op:[70,65,60,55,50,45,40,35],ip:[70,65,60,55,50,45,40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5175DecImportacaoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5175DecImportacaoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DECIMPORTACAOSEQUENCIA",gx.O.A5175DecImportacaoSequencia,0)},c2v:function(){gx.O.A5175DecImportacaoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DECIMPORTACAOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:12,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAONODI",gxz:"Z5167DecImportacaoNoDI",gxold:"O5167DecImportacaoNoDI",gxvar:"A5167DecImportacaoNoDI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5167DecImportacaoNoDI=Value},v2z:function(Value){gx.O.Z5167DecImportacaoNoDI=Value},v2c:function(){gx.fn.setControlValue("DECIMPORTACAONODI",gx.O.A5167DecImportacaoNoDI,0)},c2v:function(){gx.O.A5167DecImportacaoNoDI=this.val()},val:function(){return gx.fn.getControlValue("DECIMPORTACAONODI")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAODATAREGISTRO",gxz:"Z5168DecImportacaoDataRegistro",gxold:"O5168DecImportacaoDataRegistro",gxvar:"A5168DecImportacaoDataRegistro",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5168DecImportacaoDataRegistro=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5168DecImportacaoDataRegistro=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DECIMPORTACAODATAREGISTRO",gx.O.A5168DecImportacaoDataRegistro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5168DecImportacaoDataRegistro=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("DECIMPORTACAODATAREGISTRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAOEXPORTADOR",gxz:"Z5169DecImportacaoExportador",gxold:"O5169DecImportacaoExportador",gxvar:"A5169DecImportacaoExportador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5169DecImportacaoExportador=Value},v2z:function(Value){gx.O.Z5169DecImportacaoExportador=Value},v2c:function(){gx.fn.setControlValue("DECIMPORTACAOEXPORTADOR",gx.O.A5169DecImportacaoExportador,0)},c2v:function(){gx.O.A5169DecImportacaoExportador=this.val()},val:function(){return gx.fn.getControlValue("DECIMPORTACAOEXPORTADOR")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Decimportacaoufdesembaraco,isvalid:null,rgrid:[],fld:"DECIMPORTACAOUFDESEMBARACO",gxz:"Z5170DecImportacaoUFDesembaraco",gxold:"O5170DecImportacaoUFDesembaraco",gxvar:"A5170DecImportacaoUFDesembaraco",ucs:[],op:[50],ip:[50],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5170DecImportacaoUFDesembaraco=Value},v2z:function(Value){gx.O.Z5170DecImportacaoUFDesembaraco=Value},v2c:function(){gx.fn.setComboBoxValue("DECIMPORTACAOUFDESEMBARACO",gx.O.A5170DecImportacaoUFDesembaraco);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5170DecImportacaoUFDesembaraco=this.val()},val:function(){return gx.fn.getControlValue("DECIMPORTACAOUFDESEMBARACO")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAOLOCALDESEMBARACO",gxz:"Z5171DecImportacaoLocalDesembaraco",gxold:"O5171DecImportacaoLocalDesembaraco",gxvar:"A5171DecImportacaoLocalDesembaraco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5171DecImportacaoLocalDesembaraco=Value},v2z:function(Value){gx.O.Z5171DecImportacaoLocalDesembaraco=Value},v2c:function(){gx.fn.setControlValue("DECIMPORTACAOLOCALDESEMBARACO",gx.O.A5171DecImportacaoLocalDesembaraco,0)},c2v:function(){gx.O.A5171DecImportacaoLocalDesembaraco=this.val()},val:function(){return gx.fn.getControlValue("DECIMPORTACAOLOCALDESEMBARACO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAODATADESEMBARACO",gxz:"Z5172DecImportacaoDataDesembaraco",gxold:"O5172DecImportacaoDataDesembaraco",gxvar:"A5172DecImportacaoDataDesembaraco",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5172DecImportacaoDataDesembaraco=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5172DecImportacaoDataDesembaraco=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DECIMPORTACAODATADESEMBARACO",gx.O.A5172DecImportacaoDataDesembaraco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5172DecImportacaoDataDesembaraco=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("DECIMPORTACAODATADESEMBARACO")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAOUSUARIOALT",gxz:"Z5173DecImportacaoUsuarioAlt",gxold:"O5173DecImportacaoUsuarioAlt",gxvar:"A5173DecImportacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5173DecImportacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z5173DecImportacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("DECIMPORTACAOUSUARIOALT",gx.O.A5173DecImportacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5173DecImportacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("DECIMPORTACAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAODATAHORAALT",gxz:"Z5174DecImportacaoDataHoraAlt",gxold:"O5174DecImportacaoDataHoraAlt",gxvar:"A5174DecImportacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5174DecImportacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5174DecImportacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DECIMPORTACAODATAHORAALT",gx.O.A5174DecImportacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5174DecImportacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DECIMPORTACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[71]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"BTNHELP",grid:0};
   GXValidFnc[84]={fld:"PROMPT_4637_4638_4822",grid:455};
   this.A4637EntradaEmpresaId = "" ;
   this.Z4637EntradaEmpresaId = "" ;
   this.O4637EntradaEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.Z4638EntradaId = 0 ;
   this.O4638EntradaId = 0 ;
   this.A4822EntradaItemSequencia = 0 ;
   this.Z4822EntradaItemSequencia = 0 ;
   this.O4822EntradaItemSequencia = 0 ;
   this.A5175DecImportacaoSequencia = 0 ;
   this.Z5175DecImportacaoSequencia = 0 ;
   this.O5175DecImportacaoSequencia = 0 ;
   this.A5167DecImportacaoNoDI = "" ;
   this.Z5167DecImportacaoNoDI = "" ;
   this.O5167DecImportacaoNoDI = "" ;
   this.A5168DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.Z5168DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.O5168DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.A5169DecImportacaoExportador = "" ;
   this.Z5169DecImportacaoExportador = "" ;
   this.O5169DecImportacaoExportador = "" ;
   this.A5170DecImportacaoUFDesembaraco = "" ;
   this.Z5170DecImportacaoUFDesembaraco = "" ;
   this.O5170DecImportacaoUFDesembaraco = "" ;
   this.A5171DecImportacaoLocalDesembaraco = "" ;
   this.Z5171DecImportacaoLocalDesembaraco = "" ;
   this.O5171DecImportacaoLocalDesembaraco = "" ;
   this.A5172DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.Z5172DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.O5172DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.A5173DecImportacaoUsuarioAlt = "" ;
   this.Z5173DecImportacaoUsuarioAlt = "" ;
   this.O5173DecImportacaoUsuarioAlt = "" ;
   this.A5174DecImportacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z5174DecImportacaoDataHoraAlt = gx.date.nullDate() ;
   this.O5174DecImportacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.A4822EntradaItemSequencia = 0 ;
   this.A5175DecImportacaoSequencia = 0 ;
   this.A5167DecImportacaoNoDI = "" ;
   this.A5168DecImportacaoDataRegistro = gx.date.nullDate() ;
   this.A5169DecImportacaoExportador = "" ;
   this.A5170DecImportacaoUFDesembaraco = "" ;
   this.A5171DecImportacaoLocalDesembaraco = "" ;
   this.A5172DecImportacaoDataDesembaraco = gx.date.nullDate() ;
   this.A10398DecImportacaoTpViaTransp = 0 ;
   this.A10400DecImportacaovAFRMM = 0 ;
   this.A10397DecImportacaoTpIntermedio = 0 ;
   this.A10396DecImportacaoCNPJAdq = "" ;
   this.A10399DecImportacaoUfTerceiro = "" ;
   this.A5173DecImportacaoUsuarioAlt = "" ;
   this.A5174DecImportacaoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e128c455_client": ["ENTER", true] ,"e138c455_client": ["CANCEL", true] ,"e118c455_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_4637_4638_4822", [14,19,24]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A10398DecImportacaoTpViaTransp", "DECIMPORTACAOTPVIATRANSP", 0, "int");
   this.setVCMap("A10400DecImportacaovAFRMM", "DECIMPORTACAOVAFRMM", 0, "decimal");
   this.setVCMap("A10397DecImportacaoTpIntermedio", "DECIMPORTACAOTPINTERMEDIO", 0, "int");
   this.setVCMap("A10396DecImportacaoCNPJAdq", "DECIMPORTACAOCNPJADQ", 0, "char");
   this.setVCMap("A10399DecImportacaoUfTerceiro", "DECIMPORTACAOUFTERCEIRO", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdecimportacao());
