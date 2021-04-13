/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:11:5.74
*/
gx.evt.autoSkip = false;
gx.define('htermoaberturaencerramentoest', false, function () {
   this.ServerClass =  "htermoaberturaencerramentoest" ;
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
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e141062_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e111062_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e161062_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,21,23,24,27,29,32,34,37,39,42,44,47,49,52,54,56,59,61,64,66,69,71,74,76,79,81,84,86,89,91,94,96,105,106,108,110];
   this.GXLastCtrlId =110;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV22FilialId",gxold:"OV22FilialId",gxvar:"AV22FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV22FilialId,0)},c2v:function(){gx.O.AV22FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV24FilialNome",gxold:"OV24FilialNome",gxvar:"AV24FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FilialNome=Value},v2z:function(Value){gx.O.ZV24FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV24FilialNome,0)},c2v:function(){gx.O.AV24FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOREGISTRO",gxz:"ZV28TipoRegistro",gxold:"OV28TipoRegistro",gxvar:"AV28TipoRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28TipoRegistro=Value},v2z:function(Value){gx.O.ZV28TipoRegistro=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOREGISTRO",gx.O.AV28TipoRegistro)},c2v:function(){gx.O.AV28TipoRegistro=this.val()},val:function(){return gx.fn.getControlValue("vTIPOREGISTRO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV23FilialEmpresaId",gxold:"OV23FilialEmpresaId",gxvar:"AV23FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV23FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV23FilialEmpresaId,0)},c2v:function(){gx.O.AV23FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMPAGABERTURA",gxz:"ZV63NumPagAbertura",gxold:"OV63NumPagAbertura",gxvar:"AV63NumPagAbertura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63NumPagAbertura=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63NumPagAbertura=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMPAGABERTURA",gx.O.AV63NumPagAbertura,0)},c2v:function(){gx.O.AV63NumPagAbertura=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMPAGABERTURA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMPAGENCERRAMENTO",gxz:"ZV29NumPagEncerramento",gxold:"OV29NumPagEncerramento",gxvar:"AV29NumPagEncerramento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29NumPagEncerramento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29NumPagEncerramento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMPAGENCERRAMENTO",gx.O.AV29NumPagEncerramento,0)},c2v:function(){gx.O.AV29NumPagEncerramento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMPAGENCERRAMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMLIVRO",gxz:"ZV30NumLivro",gxold:"OV30NumLivro",gxvar:"AV30NumLivro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30NumLivro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30NumLivro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMLIVRO",gx.O.AV30NumLivro,0)},c2v:function(){gx.O.AV30NumLivro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMLIVRO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEFOLHAS",gxz:"ZV31QtdeFolhas",gxold:"OV31QtdeFolhas",gxvar:"AV31QtdeFolhas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31QtdeFolhas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31QtdeFolhas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEFOLHAS",gx.O.AV31QtdeFolhas,0)},c2v:function(){gx.O.AV31QtdeFolhas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEFOLHAS",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[49]={fld:"TABLEPERIODO",grid:0};
   GXValidFnc[52]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERIODOINI",gxz:"ZV32PeriodoIni",gxold:"OV32PeriodoIni",gxvar:"AV32PeriodoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32PeriodoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32PeriodoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPERIODOINI",gx.O.AV32PeriodoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV32PeriodoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPERIODOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERIODOFIM",gxz:"ZV33PeriodoFim",gxold:"OV33PeriodoFim",gxvar:"AV33PeriodoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33PeriodoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33PeriodoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPERIODOFIM",gx.O.AV33PeriodoFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33PeriodoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPERIODOFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAO",gxz:"ZV34DataEmissao",gxold:"OV34DataEmissao",gxvar:"AV34DataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34DataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV34DataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAO",gx.O.AV34DataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34DataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[64]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAULTLANCMTO",gxz:"ZV35DataUltLancmto",gxold:"OV35DataUltLancmto",gxvar:"AV35DataUltLancmto",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35DataUltLancmto=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV35DataUltLancmto=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAULTLANCMTO",gx.O.AV35DataUltLancmto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV35DataUltLancmto=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAULTLANCMTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[69]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAONIRE",gxz:"ZV36DescricaoNIRE",gxold:"OV36DescricaoNIRE",gxvar:"AV36DescricaoNIRE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36DescricaoNIRE=Value},v2z:function(Value){gx.O.ZV36DescricaoNIRE=Value},v2c:function(){gx.fn.setControlValue("vDESCRICAONIRE",gx.O.AV36DescricaoNIRE,0)},c2v:function(){gx.O.AV36DescricaoNIRE=this.val()},val:function(){return gx.fn.getControlValue("vDESCRICAONIRE")},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERESPONSAVEL1",gxz:"ZV37NomeResponsavel1",gxold:"OV37NomeResponsavel1",gxvar:"AV37NomeResponsavel1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37NomeResponsavel1=Value},v2z:function(Value){gx.O.ZV37NomeResponsavel1=Value},v2c:function(){gx.fn.setControlValue("vNOMERESPONSAVEL1",gx.O.AV37NomeResponsavel1,0)},c2v:function(){gx.O.AV37NomeResponsavel1=this.val()},val:function(){return gx.fn.getControlValue("vNOMERESPONSAVEL1")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSAO1",gxz:"ZV38Profissao1",gxold:"OV38Profissao1",gxvar:"AV38Profissao1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38Profissao1=Value},v2z:function(Value){gx.O.ZV38Profissao1=Value},v2c:function(){gx.fn.setControlValue("vPROFISSAO1",gx.O.AV38Profissao1,0)},c2v:function(){gx.O.AV38Profissao1=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSAO1")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERESPONSAVEL2",gxz:"ZV61NomeResponsavel2",gxold:"OV61NomeResponsavel2",gxvar:"AV61NomeResponsavel2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61NomeResponsavel2=Value},v2z:function(Value){gx.O.ZV61NomeResponsavel2=Value},v2c:function(){gx.fn.setControlValue("vNOMERESPONSAVEL2",gx.O.AV61NomeResponsavel2,0)},c2v:function(){gx.O.AV61NomeResponsavel2=this.val()},val:function(){return gx.fn.getControlValue("vNOMERESPONSAVEL2")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSAO2",gxz:"ZV62Profissao2",gxold:"OV62Profissao2",gxvar:"AV62Profissao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62Profissao2=Value},v2z:function(Value){gx.O.ZV62Profissao2=Value},v2c:function(){gx.fn.setControlValue("vPROFISSAO2",gx.O.AV62Profissao2,0)},c2v:function(){gx.O.AV62Profissao2=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSAO2")},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELO",gxz:"ZV39Modelo",gxold:"OV39Modelo",gxvar:"AV39Modelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV39Modelo=Value},v2z:function(Value){gx.O.ZV39Modelo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELO",gx.O.AV39Modelo)},c2v:function(){gx.O.AV39Modelo=this.val()},val:function(){return gx.fn.getControlValue("vMODELO")},nac:gx.falseFn};
   GXValidFnc[105]={fld:"JS", format:2,grid:0};
   GXValidFnc[106]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEFIL",gxz:"ZV64QtdeFil",gxold:"OV64QtdeFil",gxvar:"AV64QtdeFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64QtdeFil=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64QtdeFil=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEFIL",gx.O.AV64QtdeFil,0)},c2v:function(){gx.O.AV64QtdeFil=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEFIL",'.')},nac:gx.falseFn};
   GXValidFnc[108]={fld:"BTNHELP",grid:0};
   GXValidFnc[110]={fld:"PROMPT_FILIALID",grid:0};
   this.AV22FilialId = 0 ;
   this.ZV22FilialId = 0 ;
   this.OV22FilialId = 0 ;
   this.AV24FilialNome = "" ;
   this.ZV24FilialNome = "" ;
   this.OV24FilialNome = "" ;
   this.AV28TipoRegistro = "" ;
   this.ZV28TipoRegistro = "" ;
   this.OV28TipoRegistro = "" ;
   this.AV23FilialEmpresaId = "" ;
   this.ZV23FilialEmpresaId = "" ;
   this.OV23FilialEmpresaId = "" ;
   this.AV63NumPagAbertura = 0 ;
   this.ZV63NumPagAbertura = 0 ;
   this.OV63NumPagAbertura = 0 ;
   this.AV29NumPagEncerramento = 0 ;
   this.ZV29NumPagEncerramento = 0 ;
   this.OV29NumPagEncerramento = 0 ;
   this.AV30NumLivro = 0 ;
   this.ZV30NumLivro = 0 ;
   this.OV30NumLivro = 0 ;
   this.AV31QtdeFolhas = 0 ;
   this.ZV31QtdeFolhas = 0 ;
   this.OV31QtdeFolhas = 0 ;
   this.AV32PeriodoIni = gx.date.nullDate() ;
   this.ZV32PeriodoIni = gx.date.nullDate() ;
   this.OV32PeriodoIni = gx.date.nullDate() ;
   this.AV33PeriodoFim = gx.date.nullDate() ;
   this.ZV33PeriodoFim = gx.date.nullDate() ;
   this.OV33PeriodoFim = gx.date.nullDate() ;
   this.AV34DataEmissao = gx.date.nullDate() ;
   this.ZV34DataEmissao = gx.date.nullDate() ;
   this.OV34DataEmissao = gx.date.nullDate() ;
   this.AV35DataUltLancmto = gx.date.nullDate() ;
   this.ZV35DataUltLancmto = gx.date.nullDate() ;
   this.OV35DataUltLancmto = gx.date.nullDate() ;
   this.AV36DescricaoNIRE = "" ;
   this.ZV36DescricaoNIRE = "" ;
   this.OV36DescricaoNIRE = "" ;
   this.AV37NomeResponsavel1 = "" ;
   this.ZV37NomeResponsavel1 = "" ;
   this.OV37NomeResponsavel1 = "" ;
   this.AV38Profissao1 = "" ;
   this.ZV38Profissao1 = "" ;
   this.OV38Profissao1 = "" ;
   this.AV61NomeResponsavel2 = "" ;
   this.ZV61NomeResponsavel2 = "" ;
   this.OV61NomeResponsavel2 = "" ;
   this.AV62Profissao2 = "" ;
   this.ZV62Profissao2 = "" ;
   this.OV62Profissao2 = "" ;
   this.AV39Modelo = "" ;
   this.ZV39Modelo = "" ;
   this.OV39Modelo = "" ;
   this.AV64QtdeFil = 0 ;
   this.ZV64QtdeFil = 0 ;
   this.OV64QtdeFil = 0 ;
   this.AV22FilialId = 0 ;
   this.AV24FilialNome = "" ;
   this.AV28TipoRegistro = "" ;
   this.AV23FilialEmpresaId = "" ;
   this.AV63NumPagAbertura = 0 ;
   this.AV29NumPagEncerramento = 0 ;
   this.AV30NumLivro = 0 ;
   this.AV31QtdeFolhas = 0 ;
   this.AV32PeriodoIni = gx.date.nullDate() ;
   this.AV33PeriodoFim = gx.date.nullDate() ;
   this.AV34DataEmissao = gx.date.nullDate() ;
   this.AV35DataUltLancmto = gx.date.nullDate() ;
   this.AV36DescricaoNIRE = "" ;
   this.AV37NomeResponsavel1 = "" ;
   this.AV38Profissao1 = "" ;
   this.AV61NomeResponsavel2 = "" ;
   this.AV62Profissao2 = "" ;
   this.AV39Modelo = "" ;
   this.AV64QtdeFil = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.Events = {"e141062_client": ["ENTER", true] ,"e111062_client": ["'FECHAR'", true] ,"e161062_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV21FilialIdParm',fld:'vFILIALIDPARM'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV23FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{av:'AV22FilialId',fld:'vFILIALID'},{av:'AV70GXLvl48',fld:'vGXLVL48'},{av:'AV24FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["ENTER"] = [[{av:'AV27SNErro',fld:'vSNERRO'},{av:'AV68Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV22FilialId',fld:'vFILIALID'},{av:'AV28TipoRegistro',fld:'vTIPOREGISTRO'},{av:'AV63NumPagAbertura',fld:'vNUMPAGABERTURA'},{av:'AV29NumPagEncerramento',fld:'vNUMPAGENCERRAMENTO'},{av:'AV30NumLivro',fld:'vNUMLIVRO'},{av:'AV31QtdeFolhas',fld:'vQTDEFOLHAS'},{av:'AV32PeriodoIni',fld:'vPERIODOINI'},{av:'AV33PeriodoFim',fld:'vPERIODOFIM'},{av:'AV34DataEmissao',fld:'vDATAEMISSAO'},{av:'AV35DataUltLancmto',fld:'vDATAULTLANCMTO'},{av:'AV36DescricaoNIRE',fld:'vDESCRICAONIRE'},{av:'AV37NomeResponsavel1',fld:'vNOMERESPONSAVEL1'},{av:'AV38Profissao1',fld:'vPROFISSAO1'},{av:'AV61NomeResponsavel2',fld:'vNOMERESPONSAVEL2'},{av:'AV62Profissao2',fld:'vPROFISSAO2'},{av:'AV39Modelo',fld:'vMODELO'},{av:'AV69Pgmdesc',fld:'vPGMDESC'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV23FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV27SNErro',fld:'vSNERRO'},{av:'AV71GXLvl122',fld:'vGXLVL122'},{av:'AV24FilialNome',fld:'vFILIALNOME'},{av:'AV52Diretorio',fld:'vDIRETORIO'},{av:'AV19i',fld:'vI'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_FILIALID", [17]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new htermoaberturaencerramentoest());
