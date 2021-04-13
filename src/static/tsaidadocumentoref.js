/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:41:41.64
*/
gx.evt.autoSkip = false;
gx.define('tsaidadocumentoref', false, function () {
   this.ServerClass =  "tsaidadocumentoref" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Saidaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaid",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId"],[]);
      return true;
   }
   this.Valid_Saidadocumentorefsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidadocumentorefsequencia",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId", "gx.O.A10773SaidaDocumentoRefSequencia", "gx.O.A10776SaidaDocumentoRefChave", "gx.O.A10777SaidaDocumentoRefCodUf", 'gx.date.urlDate(gx.O.A10778SaidaDocumentoRefDataEmissao,"DMY4")', "gx.O.A10779SaidaDocumentoRefCNPJEmitente", "gx.O.A10780SaidaDocumentoRefCPFEmitente", "gx.O.A10781SaidaDocumentoRefIEEmitente", "gx.O.A10782SaidaDocumentoRefSerie", "gx.O.A10783SaidaDocumentoRefNoNota", "gx.O.A10784SaidaDocumentoRefECF", "gx.O.A10785SaidaDocumentoRefCOO", "gx.O.A10786SaidaDocumentoRefUsuarioAlt", 'gx.date.urlDate(gx.O.A10787SaidaDocumentoRefDataHoraAlt,"DMY4")', "gx.O.A10774SaidaDocumentoRefModeloCod"],["A10774SaidaDocumentoRefModeloCod", "A10776SaidaDocumentoRefChave", "A10777SaidaDocumentoRefCodUf", "A10778SaidaDocumentoRefDataEmissao", "A10779SaidaDocumentoRefCNPJEmitente", "A10780SaidaDocumentoRefCPFEmitente", "A10781SaidaDocumentoRefIEEmitente", "A10782SaidaDocumentoRefSerie", "A10783SaidaDocumentoRefNoNota", "A10784SaidaDocumentoRefECF", "A10785SaidaDocumentoRefCOO", "A10786SaidaDocumentoRefUsuarioAlt", "A10787SaidaDocumentoRefDataHoraAlt", "A10775SaidaDocumentoRefModeloDes", "Gx_mode", "Z4306SaidaEmpresaId", "Z4307SaidaId", "Z10773SaidaDocumentoRefSequencia", "Z10774SaidaDocumentoRefModeloCod", "Z10776SaidaDocumentoRefChave", "Z10777SaidaDocumentoRefCodUf", "Z10778SaidaDocumentoRefDataEmissao", "Z10779SaidaDocumentoRefCNPJEmitente", "Z10780SaidaDocumentoRefCPFEmitente", "Z10781SaidaDocumentoRefIEEmitente", "Z10782SaidaDocumentoRefSerie", "Z10783SaidaDocumentoRefNoNota", "Z10784SaidaDocumentoRefECF", "Z10785SaidaDocumentoRefCOO", "Z10786SaidaDocumentoRefUsuarioAlt", "Z10787SaidaDocumentoRefDataHoraAlt", "Z10775SaidaDocumentoRefModeloDes", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Saidadocumentorefmodelocod=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidadocumentorefmodelocod",["gx.O.A10774SaidaDocumentoRefModeloCod", "gx.O.A10775SaidaDocumentoRefModeloDes"],["A10775SaidaDocumentoRefModeloDes"]);
      return true;
   }
   this.Valid_Saidadocumentorefcoduf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDADOCUMENTOREFCODUF");
         this.AnyError  = 0;
         if ( ! ( this.A10777SaidaDocumentoRefCodUf == 0 || this.A10777SaidaDocumentoRefCodUf == 12 || this.A10777SaidaDocumentoRefCodUf == 27 || this.A10777SaidaDocumentoRefCodUf == 16 || this.A10777SaidaDocumentoRefCodUf == 13 || this.A10777SaidaDocumentoRefCodUf == 29 || this.A10777SaidaDocumentoRefCodUf == 23 || this.A10777SaidaDocumentoRefCodUf == 53 || this.A10777SaidaDocumentoRefCodUf == 32 || this.A10777SaidaDocumentoRefCodUf == 52 || this.A10777SaidaDocumentoRefCodUf == 21 || this.A10777SaidaDocumentoRefCodUf == 51 || this.A10777SaidaDocumentoRefCodUf == 50 || this.A10777SaidaDocumentoRefCodUf == 31 || this.A10777SaidaDocumentoRefCodUf == 15 || this.A10777SaidaDocumentoRefCodUf == 41 || this.A10777SaidaDocumentoRefCodUf == 25 || this.A10777SaidaDocumentoRefCodUf == 26 || this.A10777SaidaDocumentoRefCodUf == 22 || this.A10777SaidaDocumentoRefCodUf == 33 || this.A10777SaidaDocumentoRefCodUf == 24 || this.A10777SaidaDocumentoRefCodUf == 43 || this.A10777SaidaDocumentoRefCodUf == 11 || this.A10777SaidaDocumentoRefCodUf == 14 || this.A10777SaidaDocumentoRefCodUf == 42 || this.A10777SaidaDocumentoRefCodUf == 35 || this.A10777SaidaDocumentoRefCodUf == 28 || this.A10777SaidaDocumentoRefCodUf == 17 ) )
         {
            try {
               gxballoon.setError("Campo Saida Documento Ref Cod Uf fora do intervalo");
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
   this.e11gw794_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12gw794_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,117,119,125,126];
   this.GXLastCtrlId =126;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaempresaid,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SAIDAEMPRESAID",gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDAID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaid,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAID",gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKSAIDADOCUMENTOREFSEQUENCIA", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidadocumentorefsequencia,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFSEQUENCIA",gxz:"Z10773SaidaDocumentoRefSequencia",gxold:"O10773SaidaDocumentoRefSequencia",gxvar:"A10773SaidaDocumentoRefSequencia",ucs:[],op:[54,119,114,109,104,99,94,89,84,79,74,69,64],ip:[54,119,114,109,104,99,94,89,84,79,74,69,64,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10773SaidaDocumentoRefSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10773SaidaDocumentoRefSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFSEQUENCIA",gx.O.A10773SaidaDocumentoRefSequencia,0)},c2v:function(){gx.O.A10773SaidaDocumentoRefSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDADOCUMENTOREFSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKSAIDADOCUMENTOREFMODELOCOD", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidadocumentorefmodelocod,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFMODELOCOD",gxz:"Z10774SaidaDocumentoRefModeloCod",gxold:"O10774SaidaDocumentoRefModeloCod",gxvar:"A10774SaidaDocumentoRefModeloCod",ucs:[],op:[59],ip:[59,54],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10774SaidaDocumentoRefModeloCod=Value},v2z:function(Value){gx.O.Z10774SaidaDocumentoRefModeloCod=Value},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFMODELOCOD",gx.O.A10774SaidaDocumentoRefModeloCod,0)},c2v:function(){gx.O.A10774SaidaDocumentoRefModeloCod=this.val()},val:function(){return gx.fn.getControlValue("SAIDADOCUMENTOREFMODELOCOD")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKSAIDADOCUMENTOREFMODELODES", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFMODELODES",gxz:"Z10775SaidaDocumentoRefModeloDes",gxold:"O10775SaidaDocumentoRefModeloDes",gxvar:"A10775SaidaDocumentoRefModeloDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10775SaidaDocumentoRefModeloDes=Value},v2z:function(Value){gx.O.Z10775SaidaDocumentoRefModeloDes=Value},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFMODELODES",gx.O.A10775SaidaDocumentoRefModeloDes,0)},c2v:function(){gx.O.A10775SaidaDocumentoRefModeloDes=this.val()},val:function(){return gx.fn.getControlValue("SAIDADOCUMENTOREFMODELODES")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKSAIDADOCUMENTOREFCHAVE", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFCHAVE",gxz:"Z10776SaidaDocumentoRefChave",gxold:"O10776SaidaDocumentoRefChave",gxvar:"A10776SaidaDocumentoRefChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10776SaidaDocumentoRefChave=Value},v2z:function(Value){gx.O.Z10776SaidaDocumentoRefChave=Value},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFCHAVE",gx.O.A10776SaidaDocumentoRefChave,0)},c2v:function(){gx.O.A10776SaidaDocumentoRefChave=this.val()},val:function(){return gx.fn.getControlValue("SAIDADOCUMENTOREFCHAVE")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKSAIDADOCUMENTOREFCODUF", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidadocumentorefcoduf,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFCODUF",gxz:"Z10777SaidaDocumentoRefCodUf",gxold:"O10777SaidaDocumentoRefCodUf",gxvar:"A10777SaidaDocumentoRefCodUf",ucs:[],op:[69],ip:[69],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10777SaidaDocumentoRefCodUf=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10777SaidaDocumentoRefCodUf=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("SAIDADOCUMENTOREFCODUF",gx.O.A10777SaidaDocumentoRefCodUf);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10777SaidaDocumentoRefCodUf=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDADOCUMENTOREFCODUF",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKSAIDADOCUMENTOREFDATAEMISSAO", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFDATAEMISSAO",gxz:"Z10778SaidaDocumentoRefDataEmissao",gxold:"O10778SaidaDocumentoRefDataEmissao",gxvar:"A10778SaidaDocumentoRefDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10778SaidaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10778SaidaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFDATAEMISSAO",gx.O.A10778SaidaDocumentoRefDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10778SaidaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SAIDADOCUMENTOREFDATAEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCKSAIDADOCUMENTOREFCNPJEMITENTE", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFCNPJEMITENTE",gxz:"Z10779SaidaDocumentoRefCNPJEmitente",gxold:"O10779SaidaDocumentoRefCNPJEmitente",gxvar:"A10779SaidaDocumentoRefCNPJEmitente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10779SaidaDocumentoRefCNPJEmitente=Value},v2z:function(Value){gx.O.Z10779SaidaDocumentoRefCNPJEmitente=Value},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFCNPJEMITENTE",gx.O.A10779SaidaDocumentoRefCNPJEmitente,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10779SaidaDocumentoRefCNPJEmitente=this.val()},val:function(){return gx.fn.getControlValue("SAIDADOCUMENTOREFCNPJEMITENTE")},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCKSAIDADOCUMENTOREFCPFEMITENTE", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFCPFEMITENTE",gxz:"Z10780SaidaDocumentoRefCPFEmitente",gxold:"O10780SaidaDocumentoRefCPFEmitente",gxvar:"A10780SaidaDocumentoRefCPFEmitente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10780SaidaDocumentoRefCPFEmitente=Value},v2z:function(Value){gx.O.Z10780SaidaDocumentoRefCPFEmitente=Value},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFCPFEMITENTE",gx.O.A10780SaidaDocumentoRefCPFEmitente,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10780SaidaDocumentoRefCPFEmitente=this.val()},val:function(){return gx.fn.getControlValue("SAIDADOCUMENTOREFCPFEMITENTE")},nac:gx.falseFn};
   this.declareDomainHdlr( 84 , function() {
   });
   GXValidFnc[87]={fld:"TEXTBLOCKSAIDADOCUMENTOREFIEEMITENTE", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFIEEMITENTE",gxz:"Z10781SaidaDocumentoRefIEEmitente",gxold:"O10781SaidaDocumentoRefIEEmitente",gxvar:"A10781SaidaDocumentoRefIEEmitente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10781SaidaDocumentoRefIEEmitente=Value},v2z:function(Value){gx.O.Z10781SaidaDocumentoRefIEEmitente=Value},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFIEEMITENTE",gx.O.A10781SaidaDocumentoRefIEEmitente,0)},c2v:function(){gx.O.A10781SaidaDocumentoRefIEEmitente=this.val()},val:function(){return gx.fn.getControlValue("SAIDADOCUMENTOREFIEEMITENTE")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCKSAIDADOCUMENTOREFSERIE", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFSERIE",gxz:"Z10782SaidaDocumentoRefSerie",gxold:"O10782SaidaDocumentoRefSerie",gxvar:"A10782SaidaDocumentoRefSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10782SaidaDocumentoRefSerie=Value},v2z:function(Value){gx.O.Z10782SaidaDocumentoRefSerie=Value},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFSERIE",gx.O.A10782SaidaDocumentoRefSerie,0)},c2v:function(){gx.O.A10782SaidaDocumentoRefSerie=this.val()},val:function(){return gx.fn.getControlValue("SAIDADOCUMENTOREFSERIE")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCKSAIDADOCUMENTOREFNONOTA", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFNONOTA",gxz:"Z10783SaidaDocumentoRefNoNota",gxold:"O10783SaidaDocumentoRefNoNota",gxvar:"A10783SaidaDocumentoRefNoNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10783SaidaDocumentoRefNoNota=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10783SaidaDocumentoRefNoNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFNONOTA",gx.O.A10783SaidaDocumentoRefNoNota,0)},c2v:function(){gx.O.A10783SaidaDocumentoRefNoNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDADOCUMENTOREFNONOTA",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCKSAIDADOCUMENTOREFECF", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFECF",gxz:"Z10784SaidaDocumentoRefECF",gxold:"O10784SaidaDocumentoRefECF",gxvar:"A10784SaidaDocumentoRefECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10784SaidaDocumentoRefECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10784SaidaDocumentoRefECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFECF",gx.O.A10784SaidaDocumentoRefECF,0)},c2v:function(){gx.O.A10784SaidaDocumentoRefECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDADOCUMENTOREFECF",'.')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCKSAIDADOCUMENTOREFCOO", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFCOO",gxz:"Z10785SaidaDocumentoRefCOO",gxold:"O10785SaidaDocumentoRefCOO",gxvar:"A10785SaidaDocumentoRefCOO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10785SaidaDocumentoRefCOO=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10785SaidaDocumentoRefCOO=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFCOO",gx.O.A10785SaidaDocumentoRefCOO,0)},c2v:function(){gx.O.A10785SaidaDocumentoRefCOO=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDADOCUMENTOREFCOO",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCKSAIDADOCUMENTOREFUSUARIOALT", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFUSUARIOALT",gxz:"Z10786SaidaDocumentoRefUsuarioAlt",gxold:"O10786SaidaDocumentoRefUsuarioAlt",gxvar:"A10786SaidaDocumentoRefUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10786SaidaDocumentoRefUsuarioAlt=Value},v2z:function(Value){gx.O.Z10786SaidaDocumentoRefUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFUSUARIOALT",gx.O.A10786SaidaDocumentoRefUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10786SaidaDocumentoRefUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SAIDADOCUMENTOREFUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[117]={fld:"TEXTBLOCKSAIDADOCUMENTOREFDATAHORAALT", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFDATAHORAALT",gxz:"Z10787SaidaDocumentoRefDataHoraAlt",gxold:"O10787SaidaDocumentoRefDataHoraAlt",gxvar:"A10787SaidaDocumentoRefDataHoraAlt",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10787SaidaDocumentoRefDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10787SaidaDocumentoRefDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDADOCUMENTOREFDATAHORAALT",gx.O.A10787SaidaDocumentoRefDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10787SaidaDocumentoRefDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SAIDADOCUMENTOREFDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 119 , function() {
   });
   GXValidFnc[125]={fld:"PROMPT_4306_4307",grid:794};
   GXValidFnc[126]={fld:"PROMPT_10774",grid:794};
   this.A4306SaidaEmpresaId = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.A10773SaidaDocumentoRefSequencia = 0 ;
   this.Z10773SaidaDocumentoRefSequencia = 0 ;
   this.O10773SaidaDocumentoRefSequencia = 0 ;
   this.A10774SaidaDocumentoRefModeloCod = "" ;
   this.Z10774SaidaDocumentoRefModeloCod = "" ;
   this.O10774SaidaDocumentoRefModeloCod = "" ;
   this.A10775SaidaDocumentoRefModeloDes = "" ;
   this.Z10775SaidaDocumentoRefModeloDes = "" ;
   this.O10775SaidaDocumentoRefModeloDes = "" ;
   this.A10776SaidaDocumentoRefChave = "" ;
   this.Z10776SaidaDocumentoRefChave = "" ;
   this.O10776SaidaDocumentoRefChave = "" ;
   this.A10777SaidaDocumentoRefCodUf = 0 ;
   this.Z10777SaidaDocumentoRefCodUf = 0 ;
   this.O10777SaidaDocumentoRefCodUf = 0 ;
   this.A10778SaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.Z10778SaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.O10778SaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.A10779SaidaDocumentoRefCNPJEmitente = "" ;
   this.Z10779SaidaDocumentoRefCNPJEmitente = "" ;
   this.O10779SaidaDocumentoRefCNPJEmitente = "" ;
   this.A10780SaidaDocumentoRefCPFEmitente = "" ;
   this.Z10780SaidaDocumentoRefCPFEmitente = "" ;
   this.O10780SaidaDocumentoRefCPFEmitente = "" ;
   this.A10781SaidaDocumentoRefIEEmitente = "" ;
   this.Z10781SaidaDocumentoRefIEEmitente = "" ;
   this.O10781SaidaDocumentoRefIEEmitente = "" ;
   this.A10782SaidaDocumentoRefSerie = "" ;
   this.Z10782SaidaDocumentoRefSerie = "" ;
   this.O10782SaidaDocumentoRefSerie = "" ;
   this.A10783SaidaDocumentoRefNoNota = 0 ;
   this.Z10783SaidaDocumentoRefNoNota = 0 ;
   this.O10783SaidaDocumentoRefNoNota = 0 ;
   this.A10784SaidaDocumentoRefECF = 0 ;
   this.Z10784SaidaDocumentoRefECF = 0 ;
   this.O10784SaidaDocumentoRefECF = 0 ;
   this.A10785SaidaDocumentoRefCOO = 0 ;
   this.Z10785SaidaDocumentoRefCOO = 0 ;
   this.O10785SaidaDocumentoRefCOO = 0 ;
   this.A10786SaidaDocumentoRefUsuarioAlt = "" ;
   this.Z10786SaidaDocumentoRefUsuarioAlt = "" ;
   this.O10786SaidaDocumentoRefUsuarioAlt = "" ;
   this.A10787SaidaDocumentoRefDataHoraAlt = gx.date.nullDate() ;
   this.Z10787SaidaDocumentoRefDataHoraAlt = gx.date.nullDate() ;
   this.O10787SaidaDocumentoRefDataHoraAlt = gx.date.nullDate() ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A10773SaidaDocumentoRefSequencia = 0 ;
   this.A10774SaidaDocumentoRefModeloCod = "" ;
   this.A10775SaidaDocumentoRefModeloDes = "" ;
   this.A10776SaidaDocumentoRefChave = "" ;
   this.A10777SaidaDocumentoRefCodUf = 0 ;
   this.A10778SaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.A10779SaidaDocumentoRefCNPJEmitente = "" ;
   this.A10780SaidaDocumentoRefCPFEmitente = "" ;
   this.A10781SaidaDocumentoRefIEEmitente = "" ;
   this.A10782SaidaDocumentoRefSerie = "" ;
   this.A10783SaidaDocumentoRefNoNota = 0 ;
   this.A10784SaidaDocumentoRefECF = 0 ;
   this.A10785SaidaDocumentoRefCOO = 0 ;
   this.A10786SaidaDocumentoRefUsuarioAlt = "" ;
   this.A10787SaidaDocumentoRefDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e11gw794_client": ["ENTER", true] ,"e12gw794_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_4306_4307", [39,44]);
   this.setPrompt("PROMPT_10774", [54]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidadocumentoref());
