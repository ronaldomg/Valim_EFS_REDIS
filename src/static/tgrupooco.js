/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:24:44.37
*/
gx.evt.autoSkip = false;
gx.define('tgrupooco', false, function () {
   this.ServerClass =  "tgrupooco" ;
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
      this.AV20GrupoOcoId=gx.fn.getIntegerValue("vGRUPOOCOID",'.') ;
      this.AV11EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A10007GrupoOcoEmpresaId=gx.fn.getControlValue("GRUPOOCOEMPRESAID") ;
      this.AV19GrupoOcoCenCusEmpId=gx.fn.getControlValue("vGRUPOOCOCENCUSEMPID") ;
      this.A10013GrupoOcoCenCusEmpId=gx.fn.getControlValue("GRUPOOCOCENCUSEMPID") ;
      this.AV21GrupoOcoRateioEmpId=gx.fn.getControlValue("vGRUPOOCORATEIOEMPID") ;
      this.A10009GrupoOcoRateioEmpId=gx.fn.getControlValue("GRUPOOCORATEIOEMPID") ;
      this.AV18GrupoOcoCcontabilEmpId=gx.fn.getControlValue("vGRUPOOCOCCONTABILEMPID") ;
      this.A10011GrupoOcoCcontabilEmpId=gx.fn.getControlValue("GRUPOOCOCCONTABILEMPID") ;
      this.AV34SnSintetico=gx.fn.getControlValue("vSNSINTETICO") ;
      this.AV8AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV33UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV30SnContabilidade=gx.fn.getControlValue("vSNCONTABILIDADE") ;
      this.AV36Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Grupoocoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPOOCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grupoocodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPOOCODESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Grupoococencusid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Grupoococencusid",["gx.O.AV19GrupoOcoCenCusEmpId", "gx.O.A10014GrupoOcoCenCusId", "gx.O.A10013GrupoOcoCenCusEmpId", "gx.O.A10092GrupoOcoCenCusDescricao"],["A10013GrupoOcoCenCusEmpId", "A10092GrupoOcoCenCusDescricao"]);
      return true;
   }
   this.Valid_Grupoocorateioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Grupoocorateioid",["gx.O.AV21GrupoOcoRateioEmpId", "gx.O.A10010GrupoOcoRateioId", "gx.O.A10009GrupoOcoRateioEmpId", "gx.O.A10095GrupoOcoRateioDescricao"],["A10009GrupoOcoRateioEmpId", "A10095GrupoOcoRateioDescricao"]);
      return true;
   }
   this.Valid_Grupoococcontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Grupoococcontabilid",["gx.O.AV18GrupoOcoCcontabilEmpId", "gx.O.A10012GrupoOcoCcontabilId", "gx.O.A10011GrupoOcoCcontabilEmpId", "gx.O.A10091GrupoOcoCcontabilNome", "gx.O.AV34SnSintetico"],["A10011GrupoOcoCcontabilEmpId", "A10091GrupoOcoCcontabilNome", "AV34SnSintetico"]);
      return true;
   }
   this.e12er2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13er2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14er754_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15er754_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,26,29,31,32,35,37,38,41,44,46,48,55,58,60,62,63,64];
   this.GXLastCtrlId =64;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"ZZ",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupoocoid,isvalid:null,rgrid:[],fld:"GRUPOOCOID",gxz:"Z10008GrupoOcoId",gxold:"O10008GrupoOcoId",gxvar:"A10008GrupoOcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10008GrupoOcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10008GrupoOcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GRUPOOCOID",gx.O.A10008GrupoOcoId,0)},c2v:function(){gx.O.A10008GrupoOcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRUPOOCOID",'.')},nac:function(){return this.Gx_mode=="UPD"}};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupoocodescricao,isvalid:null,rgrid:[],fld:"GRUPOOCODESCRICAO",gxz:"Z10094GrupoOcoDescricao",gxold:"O10094GrupoOcoDescricao",gxvar:"A10094GrupoOcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10094GrupoOcoDescricao=Value},v2z:function(Value){gx.O.Z10094GrupoOcoDescricao=Value},v2c:function(){gx.fn.setControlValue("GRUPOOCODESCRICAO",gx.O.A10094GrupoOcoDescricao,0)},c2v:function(){gx.O.A10094GrupoOcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("GRUPOOCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupoococencusid,isvalid:null,rgrid:[],fld:"GRUPOOCOCENCUSID",gxz:"Z10014GrupoOcoCenCusId",gxold:"O10014GrupoOcoCenCusId",gxvar:"A10014GrupoOcoCenCusId",ucs:[],op:[26],ip:[26,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10014GrupoOcoCenCusId=Value},v2z:function(Value){gx.O.Z10014GrupoOcoCenCusId=Value},v2c:function(){gx.fn.setControlValue("GRUPOOCOCENCUSID",gx.O.A10014GrupoOcoCenCusId,0)},c2v:function(){gx.O.A10014GrupoOcoCenCusId=this.val()},val:function(){return gx.fn.getControlValue("GRUPOOCOCENCUSID")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCOCENCUSDESCRICAO",gxz:"Z10092GrupoOcoCenCusDescricao",gxold:"O10092GrupoOcoCenCusDescricao",gxvar:"A10092GrupoOcoCenCusDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10092GrupoOcoCenCusDescricao=Value},v2z:function(Value){gx.O.Z10092GrupoOcoCenCusDescricao=Value},v2c:function(){gx.fn.setControlValue("GRUPOOCOCENCUSDESCRICAO",gx.O.A10092GrupoOcoCenCusDescricao,0)},c2v:function(){gx.O.A10092GrupoOcoCenCusDescricao=this.val()},val:function(){return gx.fn.getControlValue("GRUPOOCOCENCUSDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZZ",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupoocorateioid,isvalid:null,rgrid:[],fld:"GRUPOOCORATEIOID",gxz:"Z10010GrupoOcoRateioId",gxold:"O10010GrupoOcoRateioId",gxvar:"A10010GrupoOcoRateioId",ucs:[],op:[32],ip:[32,31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10010GrupoOcoRateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10010GrupoOcoRateioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GRUPOOCORATEIOID",gx.O.A10010GrupoOcoRateioId,0)},c2v:function(){gx.O.A10010GrupoOcoRateioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GRUPOOCORATEIOID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCORATEIODESCRICAO",gxz:"Z10095GrupoOcoRateioDescricao",gxold:"O10095GrupoOcoRateioDescricao",gxvar:"A10095GrupoOcoRateioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10095GrupoOcoRateioDescricao=Value},v2z:function(Value){gx.O.Z10095GrupoOcoRateioDescricao=Value},v2c:function(){gx.fn.setControlValue("GRUPOOCORATEIODESCRICAO",gx.O.A10095GrupoOcoRateioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10095GrupoOcoRateioDescricao=this.val()},val:function(){return gx.fn.getControlValue("GRUPOOCORATEIODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Grupoococcontabilid,isvalid:null,rgrid:[],fld:"GRUPOOCOCCONTABILID",gxz:"Z10012GrupoOcoCcontabilId",gxold:"O10012GrupoOcoCcontabilId",gxvar:"A10012GrupoOcoCcontabilId",ucs:[],op:[38],ip:[38,37],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10012GrupoOcoCcontabilId=Value},v2z:function(Value){gx.O.Z10012GrupoOcoCcontabilId=Value},v2c:function(){gx.fn.setControlValue("GRUPOOCOCCONTABILID",gx.O.A10012GrupoOcoCcontabilId,0)},c2v:function(){gx.O.A10012GrupoOcoCcontabilId=this.val()},val:function(){return gx.fn.getControlValue("GRUPOOCOCCONTABILID")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCOCCONTABILNOME",gxz:"Z10091GrupoOcoCcontabilNome",gxold:"O10091GrupoOcoCcontabilNome",gxvar:"A10091GrupoOcoCcontabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10091GrupoOcoCcontabilNome=Value},v2z:function(Value){gx.O.Z10091GrupoOcoCcontabilNome=Value},v2c:function(){gx.fn.setControlValue("GRUPOOCOCCONTABILNOME",gx.O.A10091GrupoOcoCcontabilNome,0)},c2v:function(){gx.O.A10091GrupoOcoCcontabilNome=this.val()},val:function(){return gx.fn.getControlValue("GRUPOOCOCCONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLE4",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCOUSUARIOALT",gxz:"Z10096GrupoOcoUsuarioAlt",gxold:"O10096GrupoOcoUsuarioAlt",gxvar:"A10096GrupoOcoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10096GrupoOcoUsuarioAlt=Value},v2z:function(Value){gx.O.Z10096GrupoOcoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("GRUPOOCOUSUARIOALT",gx.O.A10096GrupoOcoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10096GrupoOcoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("GRUPOOCOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[48]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCODATAHORAALT",gxz:"Z10093GrupoOcoDataHoraAlt",gxold:"O10093GrupoOcoDataHoraAlt",gxvar:"A10093GrupoOcoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10093GrupoOcoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10093GrupoOcoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("GRUPOOCODATAHORAALT",gx.O.A10093GrupoOcoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10093GrupoOcoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("GRUPOOCODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[55]={fld:"JS", format:2,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"BTNHELP",grid:0};
   GXValidFnc[62]={fld:"PROMPT_10014",grid:754};
   GXValidFnc[63]={fld:"PROMPT_10010",grid:754};
   GXValidFnc[64]={fld:"PROMPT_10012",grid:754};
   this.A10008GrupoOcoId = 0 ;
   this.Z10008GrupoOcoId = 0 ;
   this.O10008GrupoOcoId = 0 ;
   this.A10094GrupoOcoDescricao = "" ;
   this.Z10094GrupoOcoDescricao = "" ;
   this.O10094GrupoOcoDescricao = "" ;
   this.A10014GrupoOcoCenCusId = "" ;
   this.Z10014GrupoOcoCenCusId = "" ;
   this.O10014GrupoOcoCenCusId = "" ;
   this.A10092GrupoOcoCenCusDescricao = "" ;
   this.Z10092GrupoOcoCenCusDescricao = "" ;
   this.O10092GrupoOcoCenCusDescricao = "" ;
   this.A10010GrupoOcoRateioId = 0 ;
   this.Z10010GrupoOcoRateioId = 0 ;
   this.O10010GrupoOcoRateioId = 0 ;
   this.A10095GrupoOcoRateioDescricao = "" ;
   this.Z10095GrupoOcoRateioDescricao = "" ;
   this.O10095GrupoOcoRateioDescricao = "" ;
   this.A10012GrupoOcoCcontabilId = "" ;
   this.Z10012GrupoOcoCcontabilId = "" ;
   this.O10012GrupoOcoCcontabilId = "" ;
   this.A10091GrupoOcoCcontabilNome = "" ;
   this.Z10091GrupoOcoCcontabilNome = "" ;
   this.O10091GrupoOcoCcontabilNome = "" ;
   this.A10096GrupoOcoUsuarioAlt = "" ;
   this.Z10096GrupoOcoUsuarioAlt = "" ;
   this.O10096GrupoOcoUsuarioAlt = "" ;
   this.A10093GrupoOcoDataHoraAlt = gx.date.nullDate() ;
   this.Z10093GrupoOcoDataHoraAlt = gx.date.nullDate() ;
   this.O10093GrupoOcoDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV33UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV29Sistema = "" ;
   this.AV35Pgmname = "" ;
   this.AV36Pgmdesc = "" ;
   this.AV26MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV25Modulo = "" ;
   this.AV23Logon = {} ;
   this.AV31Tabela = "" ;
   this.AV11EmpresaPadrao = "" ;
   this.AV19GrupoOcoCenCusEmpId = "" ;
   this.AV18GrupoOcoCcontabilEmpId = "" ;
   this.AV21GrupoOcoRateioEmpId = "" ;
   this.AV8AlterDados = "" ;
   this.AV12EmpresaSnContabilidade = "" ;
   this.AV30SnContabilidade = "" ;
   this.AV32TemMascara = "" ;
   this.AV16ErroCaracteres = "" ;
   this.AV17EstruturaContaInicial = "" ;
   this.AV20GrupoOcoId = 0 ;
   this.A10007GrupoOcoEmpresaId = "" ;
   this.A10008GrupoOcoId = 0 ;
   this.A10013GrupoOcoCenCusEmpId = "" ;
   this.A10009GrupoOcoRateioEmpId = "" ;
   this.A10011GrupoOcoCcontabilEmpId = "" ;
   this.AV34SnSintetico = "" ;
   this.A10096GrupoOcoUsuarioAlt = "" ;
   this.A10093GrupoOcoDataHoraAlt = gx.date.nullDate() ;
   this.A10094GrupoOcoDescricao = "" ;
   this.A10014GrupoOcoCenCusId = "" ;
   this.A10092GrupoOcoCenCusDescricao = "" ;
   this.A10012GrupoOcoCcontabilId = "" ;
   this.A10091GrupoOcoCcontabilNome = "" ;
   this.A10010GrupoOcoRateioId = 0 ;
   this.A10095GrupoOcoRateioDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12er2_client": ["'FECHAR'", true] ,"e13er2_client": ["AFTER TRN", true] ,"e14er754_client": ["ENTER", true] ,"e15er754_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20GrupoOcoId',fld:'vGRUPOOCOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_10014", [25]);
   this.setPrompt("PROMPT_10010", [31]);
   this.setPrompt("PROMPT_10012", [37]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20GrupoOcoId", "vGRUPOOCOID", 0, "int");
   this.setVCMap("AV11EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10007GrupoOcoEmpresaId", "GRUPOOCOEMPRESAID", 0, "char");
   this.setVCMap("AV19GrupoOcoCenCusEmpId", "vGRUPOOCOCENCUSEMPID", 0, "char");
   this.setVCMap("A10013GrupoOcoCenCusEmpId", "GRUPOOCOCENCUSEMPID", 0, "char");
   this.setVCMap("AV21GrupoOcoRateioEmpId", "vGRUPOOCORATEIOEMPID", 0, "char");
   this.setVCMap("A10009GrupoOcoRateioEmpId", "GRUPOOCORATEIOEMPID", 0, "char");
   this.setVCMap("AV18GrupoOcoCcontabilEmpId", "vGRUPOOCOCCONTABILEMPID", 0, "char");
   this.setVCMap("A10011GrupoOcoCcontabilEmpId", "GRUPOOCOCCONTABILEMPID", 0, "char");
   this.setVCMap("AV34SnSintetico", "vSNSINTETICO", 0, "char");
   this.setVCMap("AV8AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV33UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV30SnContabilidade", "vSNCONTABILIDADE", 0, "char");
   this.setVCMap("AV36Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 754 ]= ["O10012GrupoOcoCcontabilId","O10010GrupoOcoRateioId","O10014GrupoOcoCenCusId","O10094GrupoOcoDescricao","O10008GrupoOcoId"] ;
});
gx.setParentObj(new tgrupooco());
