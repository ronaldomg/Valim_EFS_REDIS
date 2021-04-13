/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:57:33.28
*/
gx.evt.autoSkip = false;
gx.define('tutilizacao', false, function () {
   this.ServerClass =  "tutilizacao" ;
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
      this.AV18UtilizacaoId=gx.fn.getIntegerValue("vUTILIZACAOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A4025UtilizacaoEmpresaId=gx.fn.getControlValue("UTILIZACAOEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV20SnConsulta=gx.fn.getControlValue("vSNCONSULTA") ;
   };
   this.Valid_Utilizacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("UTILIZACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Utilizacaodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("UTILIZACAODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A4059UtilizacaoDescricao) )
         {
            try {
               gxballoon.setError("Informe a descrição");
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
   this.e127r2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e137r2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e147r425_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e157r425_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Utilizacaoid,isvalid:null,rgrid:[],fld:"UTILIZACAOID",gxz:"Z4026UtilizacaoId",gxold:"O4026UtilizacaoId",gxvar:"A4026UtilizacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4026UtilizacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4026UtilizacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("UTILIZACAOID",gx.O.A4026UtilizacaoId,0)},c2v:function(){gx.O.A4026UtilizacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("UTILIZACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Utilizacaodescricao,isvalid:null,rgrid:[],fld:"UTILIZACAODESCRICAO",gxz:"Z4059UtilizacaoDescricao",gxold:"O4059UtilizacaoDescricao",gxvar:"A4059UtilizacaoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4059UtilizacaoDescricao=Value},v2z:function(Value){gx.O.Z4059UtilizacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("UTILIZACAODESCRICAO",gx.O.A4059UtilizacaoDescricao,0)},c2v:function(){gx.O.A4059UtilizacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("UTILIZACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"UTILIZACAOUSUARIOALT",gxz:"Z4180UtilizacaoUsuarioAlt",gxold:"O4180UtilizacaoUsuarioAlt",gxvar:"A4180UtilizacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4180UtilizacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z4180UtilizacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("UTILIZACAOUSUARIOALT",gx.O.A4180UtilizacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4180UtilizacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("UTILIZACAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"UTILIZACAODATAHORAALT",gxz:"Z4181UtilizacaoDataHoraAlt",gxold:"O4181UtilizacaoDataHoraAlt",gxvar:"A4181UtilizacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4181UtilizacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4181UtilizacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("UTILIZACAODATAHORAALT",gx.O.A4181UtilizacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4181UtilizacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("UTILIZACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A4026UtilizacaoId = 0 ;
   this.Z4026UtilizacaoId = 0 ;
   this.O4026UtilizacaoId = 0 ;
   this.A4059UtilizacaoDescricao = "" ;
   this.Z4059UtilizacaoDescricao = "" ;
   this.O4059UtilizacaoDescricao = "" ;
   this.A4180UtilizacaoUsuarioAlt = "" ;
   this.Z4180UtilizacaoUsuarioAlt = "" ;
   this.O4180UtilizacaoUsuarioAlt = "" ;
   this.A4181UtilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z4181UtilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.O4181UtilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18UtilizacaoId = 0 ;
   this.AV20SnConsulta = "" ;
   this.A4025UtilizacaoEmpresaId = "" ;
   this.A4026UtilizacaoId = 0 ;
   this.A4180UtilizacaoUsuarioAlt = "" ;
   this.A4181UtilizacaoDataHoraAlt = gx.date.nullDate() ;
   this.A4059UtilizacaoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e127r2_client": ["'FECHAR'", true] ,"e137r2_client": ["AFTER TRN", true] ,"e147r425_client": ["ENTER", true] ,"e157r425_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18UtilizacaoId',fld:'vUTILIZACAOID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV20SnConsulta',fld:'vSNCONSULTA'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnConsulta',fld:'vSNCONSULTA'}],[{av:'A4059UtilizacaoDescricao',fld:'UTILIZACAODESCRICAO'},{av:'A4026UtilizacaoId',fld:'UTILIZACAOID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnConsulta',fld:'vSNCONSULTA'},{av:'A4026UtilizacaoId',fld:'UTILIZACAOID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18UtilizacaoId", "vUTILIZACAOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A4025UtilizacaoEmpresaId", "UTILIZACAOEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV20SnConsulta", "vSNCONSULTA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 425 ]= ["O4059UtilizacaoDescricao"] ;
});
gx.setParentObj(new tutilizacao());
