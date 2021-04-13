/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:24:38.88
*/
gx.evt.autoSkip = false;
gx.define('tcontabilizacao', false, function () {
   this.ServerClass =  "tcontabilizacao" ;
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
      this.AV9ContabilizacaoAssociadoId=gx.fn.getIntegerValue("vCONTABILIZACAOASSOCIADOID",'.') ;
      this.AV8ContabilizacaoAssociadoEmpId=gx.fn.getControlValue("vCONTABILIZACAOASSOCIADOEMPID") ;
      this.A10026ContabilizacaoAssociadoEmpId=gx.fn.getControlValue("CONTABILIZACAOASSOCIADOEMPID") ;
      this.AV17ContabilizacaoAtividadeEmpId=gx.fn.getControlValue("vCONTABILIZACAOATIVIDADEEMPID") ;
      this.A10031ContabilizacaoAtividadeEmpId=gx.fn.getControlValue("CONTABILIZACAOATIVIDADEEMPID") ;
      this.AV10ContabilizacaoMes=gx.fn.getIntegerValue("vCONTABILIZACAOMES",'.') ;
      this.AV7ContabilizacaoAno=gx.fn.getIntegerValue("vCONTABILIZACAOANO",'.') ;
      this.AV11ContabilizacaoSequencia=gx.fn.getIntegerValue("vCONTABILIZACAOSEQUENCIA",'.') ;
      this.AV13AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV32UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A10123ContabilizacaoAssociadoFantasi=gx.fn.getControlValue("CONTABILIZACAOASSOCIADOFANTASI") ;
      this.A10124ContabilizacaoAssociadoRazaoSo=gx.fn.getControlValue("CONTABILIZACAOASSOCIADORAZAOSO") ;
      this.AV35Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Contabilizacaoassociadoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contabilizacaoassociadoid",["gx.O.A10026ContabilizacaoAssociadoEmpId", "gx.O.A10027ContabilizacaoAssociadoId", "gx.O.A10123ContabilizacaoAssociadoFantasi", "gx.O.A10124ContabilizacaoAssociadoRazaoSo"],["A10123ContabilizacaoAssociadoFantasi", "A10124ContabilizacaoAssociadoRazaoSo"]);
      return true;
   }
   this.Valid_Contabilizacaomes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTABILIZACAOMES");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contabilizacaoano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTABILIZACAOANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contabilizacaosequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTABILIZACAOSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contabilizacaoatividadeid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contabilizacaoatividadeid",["gx.O.AV17ContabilizacaoAtividadeEmpId", "gx.O.A10032ContabilizacaoAtividadeId", "gx.O.A10031ContabilizacaoAtividadeEmpId", "gx.O.A10086ContabilizacaoAtivDescServic"],["A10031ContabilizacaoAtividadeEmpId", "A10086ContabilizacaoAtivDescServic"]);
      return true;
   }
   this.Valid_Contabilizacaovalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTABILIZACAOVALOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12eq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13eq2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14eq753_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15eq753_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,21,24,26,27,28,31,33,40,42,43,46,48,54,57,59,61,70,72,74];
   this.GXLastCtrlId =74;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contabilizacaoassociadoid,isvalid:null,rgrid:[],fld:"CONTABILIZACAOASSOCIADOID",gxz:"Z10027ContabilizacaoAssociadoId",gxold:"O10027ContabilizacaoAssociadoId",gxvar:"A10027ContabilizacaoAssociadoId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10027ContabilizacaoAssociadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10027ContabilizacaoAssociadoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTABILIZACAOASSOCIADOID",gx.O.A10027ContabilizacaoAssociadoId,0)},c2v:function(){gx.O.A10027ContabilizacaoAssociadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTABILIZACAOASSOCIADOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV28PessoaRazaoSocial",gxold:"OV28PessoaRazaoSocial",gxvar:"AV28PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV28PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV28PessoaRazaoSocial,0)},c2v:function(){gx.O.AV28PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV27PessoaFantasia",gxold:"OV27PessoaFantasia",gxvar:"AV27PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PessoaFantasia=Value},v2z:function(Value){gx.O.ZV27PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV27PessoaFantasia,0)},c2v:function(){gx.O.AV27PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contabilizacaomes,isvalid:null,rgrid:[],fld:"CONTABILIZACAOMES",gxz:"Z10028ContabilizacaoMes",gxold:"O10028ContabilizacaoMes",gxvar:"A10028ContabilizacaoMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10028ContabilizacaoMes=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10028ContabilizacaoMes=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("CONTABILIZACAOMES",gx.O.A10028ContabilizacaoMes)},c2v:function(){gx.O.A10028ContabilizacaoMes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTABILIZACAOMES",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contabilizacaoano,isvalid:null,rgrid:[],fld:"CONTABILIZACAOANO",gxz:"Z10029ContabilizacaoAno",gxold:"O10029ContabilizacaoAno",gxvar:"A10029ContabilizacaoAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10029ContabilizacaoAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10029ContabilizacaoAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTABILIZACAOANO",gx.O.A10029ContabilizacaoAno,0)},c2v:function(){gx.O.A10029ContabilizacaoAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTABILIZACAOANO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contabilizacaosequencia,isvalid:null,rgrid:[],fld:"CONTABILIZACAOSEQUENCIA",gxz:"Z10030ContabilizacaoSequencia",gxold:"O10030ContabilizacaoSequencia",gxvar:"A10030ContabilizacaoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10030ContabilizacaoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10030ContabilizacaoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTABILIZACAOSEQUENCIA",gx.O.A10030ContabilizacaoSequencia,0)},c2v:function(){gx.O.A10030ContabilizacaoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTABILIZACAOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contabilizacaoatividadeid,isvalid:null,rgrid:[],fld:"CONTABILIZACAOATIVIDADEID",gxz:"Z10032ContabilizacaoAtividadeId",gxold:"O10032ContabilizacaoAtividadeId",gxvar:"A10032ContabilizacaoAtividadeId",ucs:[],op:[43],ip:[43,42],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10032ContabilizacaoAtividadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10032ContabilizacaoAtividadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTABILIZACAOATIVIDADEID",gx.O.A10032ContabilizacaoAtividadeId,0)},c2v:function(){gx.O.A10032ContabilizacaoAtividadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTABILIZACAOATIVIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTABILIZACAOATIVDESCSERVIC",gxz:"Z10086ContabilizacaoAtivDescServic",gxold:"O10086ContabilizacaoAtivDescServic",gxvar:"A10086ContabilizacaoAtivDescServic",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10086ContabilizacaoAtivDescServic=Value},v2z:function(Value){gx.O.Z10086ContabilizacaoAtivDescServic=Value},v2c:function(){gx.fn.setControlValue("CONTABILIZACAOATIVDESCSERVIC",gx.O.A10086ContabilizacaoAtivDescServic,0)},c2v:function(){gx.O.A10086ContabilizacaoAtivDescServic=this.val()},val:function(){return gx.fn.getControlValue("CONTABILIZACAOATIVDESCSERVIC")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contabilizacaovalor,isvalid:null,rgrid:[],fld:"CONTABILIZACAOVALOR",gxz:"Z10090ContabilizacaoValor",gxold:"O10090ContabilizacaoValor",gxvar:"A10090ContabilizacaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10090ContabilizacaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10090ContabilizacaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CONTABILIZACAOVALOR",gx.O.A10090ContabilizacaoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10090ContabilizacaoValor=this.val()},val:function(){return gx.fn.getDecimalValue("CONTABILIZACAOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[54]={fld:"TABLE4",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTABILIZACAOUSUARIOALT",gxz:"Z10089ContabilizacaoUsuarioAlt",gxold:"O10089ContabilizacaoUsuarioAlt",gxvar:"A10089ContabilizacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10089ContabilizacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z10089ContabilizacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONTABILIZACAOUSUARIOALT",gx.O.A10089ContabilizacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10089ContabilizacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONTABILIZACAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[61]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTABILIZACAODATAHORAALT",gxz:"Z10087ContabilizacaoDataHoraAlt",gxold:"O10087ContabilizacaoDataHoraAlt",gxvar:"A10087ContabilizacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10087ContabilizacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10087ContabilizacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTABILIZACAODATAHORAALT",gx.O.A10087ContabilizacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10087ContabilizacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONTABILIZACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[70]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV12AcessoSistemaSequencia",gxold:"OV12AcessoSistemaSequencia",gxvar:"AV12AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV12AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV12AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   GXValidFnc[74]={fld:"PROMPT_10032",grid:753};
   this.A10027ContabilizacaoAssociadoId = 0 ;
   this.Z10027ContabilizacaoAssociadoId = 0 ;
   this.O10027ContabilizacaoAssociadoId = 0 ;
   this.AV28PessoaRazaoSocial = "" ;
   this.ZV28PessoaRazaoSocial = "" ;
   this.OV28PessoaRazaoSocial = "" ;
   this.AV27PessoaFantasia = "" ;
   this.ZV27PessoaFantasia = "" ;
   this.OV27PessoaFantasia = "" ;
   this.A10028ContabilizacaoMes = 0 ;
   this.Z10028ContabilizacaoMes = 0 ;
   this.O10028ContabilizacaoMes = 0 ;
   this.A10029ContabilizacaoAno = 0 ;
   this.Z10029ContabilizacaoAno = 0 ;
   this.O10029ContabilizacaoAno = 0 ;
   this.A10030ContabilizacaoSequencia = 0 ;
   this.Z10030ContabilizacaoSequencia = 0 ;
   this.O10030ContabilizacaoSequencia = 0 ;
   this.A10032ContabilizacaoAtividadeId = 0 ;
   this.Z10032ContabilizacaoAtividadeId = 0 ;
   this.O10032ContabilizacaoAtividadeId = 0 ;
   this.A10086ContabilizacaoAtivDescServic = "" ;
   this.Z10086ContabilizacaoAtivDescServic = "" ;
   this.O10086ContabilizacaoAtivDescServic = "" ;
   this.A10090ContabilizacaoValor = 0 ;
   this.Z10090ContabilizacaoValor = 0 ;
   this.O10090ContabilizacaoValor = 0 ;
   this.A10089ContabilizacaoUsuarioAlt = "" ;
   this.Z10089ContabilizacaoUsuarioAlt = "" ;
   this.O10089ContabilizacaoUsuarioAlt = "" ;
   this.A10087ContabilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z10087ContabilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.O10087ContabilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV12AcessoSistemaSequencia = 0 ;
   this.ZV12AcessoSistemaSequencia = 0 ;
   this.OV12AcessoSistemaSequencia = 0 ;
   this.AV32UsrCod = "" ;
   this.AV18EmpresaLogadaId = "" ;
   this.AV29Sistema = "" ;
   this.AV34Pgmname = "" ;
   this.AV35Pgmdesc = "" ;
   this.AV26MsgErro = "" ;
   this.AV12AcessoSistemaSequencia = 0 ;
   this.AV25Modulo = "" ;
   this.AV22Logon = {} ;
   this.AV31Tabela = "" ;
   this.AV19EmpresaPadrao = "" ;
   this.AV17ContabilizacaoAtividadeEmpId = "" ;
   this.AV13AlterDados = "" ;
   this.AV8ContabilizacaoAssociadoEmpId = "" ;
   this.AV9ContabilizacaoAssociadoId = 0 ;
   this.AV27PessoaFantasia = "" ;
   this.AV28PessoaRazaoSocial = "" ;
   this.AV10ContabilizacaoMes = 0 ;
   this.AV7ContabilizacaoAno = 0 ;
   this.AV11ContabilizacaoSequencia = 0 ;
   this.A10026ContabilizacaoAssociadoEmpId = "" ;
   this.A10027ContabilizacaoAssociadoId = 0 ;
   this.A10028ContabilizacaoMes = 0 ;
   this.A10029ContabilizacaoAno = 0 ;
   this.A10030ContabilizacaoSequencia = 0 ;
   this.A10031ContabilizacaoAtividadeEmpId = "" ;
   this.A10089ContabilizacaoUsuarioAlt = "" ;
   this.A10087ContabilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.A10123ContabilizacaoAssociadoFantasi = "" ;
   this.A10124ContabilizacaoAssociadoRazaoSo = "" ;
   this.A10032ContabilizacaoAtividadeId = 0 ;
   this.A10086ContabilizacaoAtivDescServic = "" ;
   this.A10090ContabilizacaoValor = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12eq2_client": ["'FECHAR'", true] ,"e13eq2_client": ["AFTER TRN", true] ,"e14eq753_client": ["ENTER", true] ,"e15eq753_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV8ContabilizacaoAssociadoEmpId',fld:'vCONTABILIZACAOASSOCIADOEMPID'},{av:'AV9ContabilizacaoAssociadoId',fld:'vCONTABILIZACAOASSOCIADOID'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV10ContabilizacaoMes',fld:'vCONTABILIZACAOMES'},{av:'AV7ContabilizacaoAno',fld:'vCONTABILIZACAOANO'},{av:'AV11ContabilizacaoSequencia',fld:'vCONTABILIZACAOSEQUENCIA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV12AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV12AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_10032", [42]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV9ContabilizacaoAssociadoId", "vCONTABILIZACAOASSOCIADOID", 0, "int");
   this.setVCMap("AV8ContabilizacaoAssociadoEmpId", "vCONTABILIZACAOASSOCIADOEMPID", 0, "char");
   this.setVCMap("A10026ContabilizacaoAssociadoEmpId", "CONTABILIZACAOASSOCIADOEMPID", 0, "char");
   this.setVCMap("AV17ContabilizacaoAtividadeEmpId", "vCONTABILIZACAOATIVIDADEEMPID", 0, "char");
   this.setVCMap("A10031ContabilizacaoAtividadeEmpId", "CONTABILIZACAOATIVIDADEEMPID", 0, "char");
   this.setVCMap("AV10ContabilizacaoMes", "vCONTABILIZACAOMES", 0, "int");
   this.setVCMap("AV7ContabilizacaoAno", "vCONTABILIZACAOANO", 0, "int");
   this.setVCMap("AV11ContabilizacaoSequencia", "vCONTABILIZACAOSEQUENCIA", 0, "int");
   this.setVCMap("AV13AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV32UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A10123ContabilizacaoAssociadoFantasi", "CONTABILIZACAOASSOCIADOFANTASI", 0, "svchar");
   this.setVCMap("A10124ContabilizacaoAssociadoRazaoSo", "CONTABILIZACAOASSOCIADORAZAOSO", 0, "svchar");
   this.setVCMap("AV35Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 753 ]= ["O10090ContabilizacaoValor","O10032ContabilizacaoAtividadeId"] ;
});
gx.setParentObj(new tcontabilizacao());
