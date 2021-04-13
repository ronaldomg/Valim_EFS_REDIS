/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:15:34.46
*/
gx.evt.autoSkip = false;
gx.define('tcentrocusto', false, function () {
   this.ServerClass =  "tcentrocusto" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A153EmpresaCentroCustoEmpresaId=gx.fn.getControlValue("EMPRESACENTROCUSTOEMPRESAID") ;
      this.AV30TipoNaturezaEmpresaId=gx.fn.getControlValue("vTIPONATUREZAEMPRESAID") ;
      this.A10499CentroCustoTpClassificempid=gx.fn.getControlValue("CENTROCUSTOTPCLASSIFICEMPID") ;
      this.AV14CentroCustoId=gx.fn.getControlValue("vCENTROCUSTOID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22SnSair=gx.fn.getControlValue("vSNSAIR") ;
      this.AV21SNCentroCustoSuperior=gx.fn.getControlValue("vSNCENTROCUSTOSUPERIOR") ;
      this.AV32Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV26SnConsulta=gx.fn.getControlValue("vSNCONSULTA") ;
   };
   this.Valid_Centrocustoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CENTROCUSTOID");
         this.AnyError  = 0;
         if ( (""==this.A51CentroCustoId) )
         {
            try {
               gxballoon.setError("Informe o Código do Centro de Custo");
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
   this.Valid_Centrocustofinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CENTROCUSTOFINAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Centrocustodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CENTROCUSTODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A52CentroCustoDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição do Centro de Custo");
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
   this.Valid_Centrocustotpclassificid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Centrocustotpclassificid",["gx.O.O10500CentroCustoTpClassificId", "gx.O.O52CentroCustoDescricao", "gx.O.A10500CentroCustoTpClassificId", "gx.O.AV30TipoNaturezaEmpresaId", "gx.O.A10499CentroCustoTpClassificempid", "gx.O.AV7UsrCod", "gx.O.A52CentroCustoDescricao", "gx.O.A10501CentroCustoTpClassificDesc", "gx.O.A768CentroCustoUsuarioId", 'gx.date.urlDateTime(gx.O.A769CentroCustoDataHoraAlt,"DMY4")'],["A10499CentroCustoTpClassificempid", "A10501CentroCustoTpClassificDesc", "A768CentroCustoUsuarioId", "A769CentroCustoDataHoraAlt"]);
      return true;
   }
   this.e12052_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13052_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14058_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15058_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,37,40,42,43,44,50,52,53,56,59,61,63,72,73,75,77];
   this.GXLastCtrlId =77;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Centrocustoid,isvalid:null,rgrid:[],fld:"CENTROCUSTOID",gxz:"Z51CentroCustoId",gxold:"O51CentroCustoId",gxvar:"A51CentroCustoId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A51CentroCustoId=Value},v2z:function(Value){gx.O.Z51CentroCustoId=Value},v2c:function(){gx.fn.setControlValue("CENTROCUSTOID",gx.O.A51CentroCustoId,0)},c2v:function(){gx.O.A51CentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("CENTROCUSTOID")},nac:function(){return !(""==this.AV14CentroCustoId)}};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Centrocustofinal,isvalid:null,rgrid:[],fld:"CENTROCUSTOFINAL",gxz:"Z151CentroCustoFinal",gxold:"O151CentroCustoFinal",gxvar:"A151CentroCustoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A151CentroCustoFinal=Value},v2z:function(Value){gx.O.Z151CentroCustoFinal=Value},v2c:function(){gx.fn.setControlValue("CENTROCUSTOFINAL",gx.O.A151CentroCustoFinal,0)},c2v:function(){gx.O.A151CentroCustoFinal=this.val()},val:function(){return gx.fn.getControlValue("CENTROCUSTOFINAL")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Centrocustodescricao,isvalid:null,rgrid:[],fld:"CENTROCUSTODESCRICAO",gxz:"Z52CentroCustoDescricao",gxold:"O52CentroCustoDescricao",gxvar:"A52CentroCustoDescricao",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A52CentroCustoDescricao=Value},v2z:function(Value){gx.O.Z52CentroCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("CENTROCUSTODESCRICAO",gx.O.A52CentroCustoDescricao,0)},c2v:function(){gx.O.A52CentroCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTONIVEL",gxz:"Z152CentroCustoNivel",gxold:"O152CentroCustoNivel",gxvar:"A152CentroCustoNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A152CentroCustoNivel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z152CentroCustoNivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CENTROCUSTONIVEL",gx.O.A152CentroCustoNivel,0)},c2v:function(){gx.O.A152CentroCustoNivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CENTROCUSTONIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE6",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Centrocustotpclassificid,isvalid:null,rgrid:[],fld:"CENTROCUSTOTPCLASSIFICID",gxz:"Z10500CentroCustoTpClassificId",gxold:"O10500CentroCustoTpClassificId",gxvar:"A10500CentroCustoTpClassificId",ucs:[],op:[63,61,43],ip:[63,61,43,25,42],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10500CentroCustoTpClassificId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10500CentroCustoTpClassificId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CENTROCUSTOTPCLASSIFICID",gx.O.A10500CentroCustoTpClassificId,0)},c2v:function(){gx.O.A10500CentroCustoTpClassificId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CENTROCUSTOTPCLASSIFICID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOTPCLASSIFICDESC",gxz:"Z10501CentroCustoTpClassificDesc",gxold:"O10501CentroCustoTpClassificDesc",gxvar:"A10501CentroCustoTpClassificDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10501CentroCustoTpClassificDesc=Value},v2z:function(Value){gx.O.Z10501CentroCustoTpClassificDesc=Value},v2c:function(){gx.fn.setControlValue("CENTROCUSTOTPCLASSIFICDESC",gx.O.A10501CentroCustoTpClassificDesc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10501CentroCustoTpClassificDesc=this.val()},val:function(){return gx.fn.getControlValue("CENTROCUSTOTPCLASSIFICDESC")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[44]={fld:"TABLE4",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOSUPERIOR",gxz:"Z150CentroCustoSuperior",gxold:"O150CentroCustoSuperior",gxvar:"A150CentroCustoSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A150CentroCustoSuperior=Value},v2z:function(Value){gx.O.Z150CentroCustoSuperior=Value},v2c:function(){gx.fn.setControlValue("CENTROCUSTOSUPERIOR",gx.O.A150CentroCustoSuperior,0)},c2v:function(){gx.O.A150CentroCustoSuperior=this.val()},val:function(){return gx.fn.getControlValue("CENTROCUSTOSUPERIOR")},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTODESCRICAO",gxz:"ZV17CentroCustoDescricao",gxold:"OV17CentroCustoDescricao",gxvar:"AV17CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17CentroCustoDescricao=Value},v2z:function(Value){gx.O.ZV17CentroCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCRICAO",gx.O.AV17CentroCustoDescricao,0)},c2v:function(){gx.O.AV17CentroCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE5",grid:0};
   GXValidFnc[59]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOUSUARIOID",gxz:"Z768CentroCustoUsuarioId",gxold:"O768CentroCustoUsuarioId",gxvar:"A768CentroCustoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A768CentroCustoUsuarioId=Value},v2z:function(Value){gx.O.Z768CentroCustoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("CENTROCUSTOUSUARIOID",gx.O.A768CentroCustoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A768CentroCustoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("CENTROCUSTOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[63]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTODATAHORAALT",gxz:"Z769CentroCustoDataHoraAlt",gxold:"O769CentroCustoDataHoraAlt",gxvar:"A769CentroCustoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A769CentroCustoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z769CentroCustoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CENTROCUSTODATAHORAALT",gx.O.A769CentroCustoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A769CentroCustoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CENTROCUSTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[72]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV25AcessoSistemaSequencia",gxold:"OV25AcessoSistemaSequencia",gxvar:"AV25AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV25AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"JS", format:2,grid:0};
   GXValidFnc[75]={fld:"BTNHELP",grid:0};
   GXValidFnc[77]={fld:"PROMPT_10500",grid:8};
   this.A51CentroCustoId = "" ;
   this.Z51CentroCustoId = "" ;
   this.O51CentroCustoId = "" ;
   this.A151CentroCustoFinal = "" ;
   this.Z151CentroCustoFinal = "" ;
   this.O151CentroCustoFinal = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.Z52CentroCustoDescricao = "" ;
   this.O52CentroCustoDescricao = "" ;
   this.A152CentroCustoNivel = 0 ;
   this.Z152CentroCustoNivel = 0 ;
   this.O152CentroCustoNivel = 0 ;
   this.A10500CentroCustoTpClassificId = 0 ;
   this.Z10500CentroCustoTpClassificId = 0 ;
   this.O10500CentroCustoTpClassificId = 0 ;
   this.A10501CentroCustoTpClassificDesc = "" ;
   this.Z10501CentroCustoTpClassificDesc = "" ;
   this.O10501CentroCustoTpClassificDesc = "" ;
   this.A150CentroCustoSuperior = "" ;
   this.Z150CentroCustoSuperior = "" ;
   this.O150CentroCustoSuperior = "" ;
   this.AV17CentroCustoDescricao = "" ;
   this.ZV17CentroCustoDescricao = "" ;
   this.OV17CentroCustoDescricao = "" ;
   this.A768CentroCustoUsuarioId = "" ;
   this.Z768CentroCustoUsuarioId = "" ;
   this.O768CentroCustoUsuarioId = "" ;
   this.A769CentroCustoDataHoraAlt = gx.date.nullDate() ;
   this.Z769CentroCustoDataHoraAlt = gx.date.nullDate() ;
   this.O769CentroCustoDataHoraAlt = gx.date.nullDate() ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.ZV25AcessoSistemaSequencia = 0 ;
   this.OV25AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV23Sistema = "" ;
   this.AV31Pgmname = "" ;
   this.AV32Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.AV16Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV30TipoNaturezaEmpresaId = "" ;
   this.AV15TemMascara = "" ;
   this.AV22SnSair = "" ;
   this.AV21SNCentroCustoSuperior = "" ;
   this.AV14CentroCustoId = "" ;
   this.AV26SnConsulta = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A51CentroCustoId = "" ;
   this.A10499CentroCustoTpClassificempid = "" ;
   this.AV17CentroCustoDescricao = "" ;
   this.A150CentroCustoSuperior = "" ;
   this.A151CentroCustoFinal = "" ;
   this.A152CentroCustoNivel = 0 ;
   this.A768CentroCustoUsuarioId = "" ;
   this.A769CentroCustoDataHoraAlt = gx.date.nullDate() ;
   this.A52CentroCustoDescricao = "" ;
   this.A10500CentroCustoTpClassificId = 0 ;
   this.A10501CentroCustoTpClassificDesc = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12052_client": ["'FECHAR'", true] ,"e13052_client": ["AFTER TRN", true] ,"e14058_client": ["ENTER", true] ,"e15058_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14CentroCustoId',fld:'vCENTROCUSTOID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV26SnConsulta',fld:'vSNCONSULTA'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV26SnConsulta',fld:'vSNCONSULTA'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'AV26SnConsulta',fld:'vSNCONSULTA'},{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.setPrompt("PROMPT_10500", [42]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A153EmpresaCentroCustoEmpresaId", "EMPRESACENTROCUSTOEMPRESAID", 0, "char");
   this.setVCMap("AV30TipoNaturezaEmpresaId", "vTIPONATUREZAEMPRESAID", 0, "char");
   this.setVCMap("A10499CentroCustoTpClassificempid", "CENTROCUSTOTPCLASSIFICEMPID", 0, "char");
   this.setVCMap("AV14CentroCustoId", "vCENTROCUSTOID", 0, "svchar");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22SnSair", "vSNSAIR", 0, "char");
   this.setVCMap("AV21SNCentroCustoSuperior", "vSNCENTROCUSTOSUPERIOR", 0, "char");
   this.setVCMap("AV32Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV31Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV26SnConsulta", "vSNCONSULTA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 8 ]= ["O10500CentroCustoTpClassificId","O52CentroCustoDescricao"] ;
});
gx.setParentObj(new tcentrocusto());
