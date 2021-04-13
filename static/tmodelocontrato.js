/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:9:50.84
*/
gx.evt.autoSkip = false;
gx.define('tmodelocontrato', false, function () {
   this.ServerClass =  "tmodelocontrato" ;
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
      this.AV18ModeloContratoId=gx.fn.getIntegerValue("vMODELOCONTRATOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5336ModeloContratoEmpresaId=gx.fn.getControlValue("MODELOCONTRATOEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Modelocontratoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOCONTRATOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelocontratodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOCONTRATODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A5333ModeloContratoDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição do Modelo do Contrato");
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
   this.e128j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138j2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148j463_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158j463_client=function()
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
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Modelocontratoid,isvalid:null,rgrid:[],fld:"MODELOCONTRATOID",gxz:"Z5337ModeloContratoId",gxold:"O5337ModeloContratoId",gxvar:"A5337ModeloContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5337ModeloContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5337ModeloContratoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELOCONTRATOID",gx.O.A5337ModeloContratoId,0)},c2v:function(){gx.O.A5337ModeloContratoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELOCONTRATOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelocontratodescricao,isvalid:null,rgrid:[],fld:"MODELOCONTRATODESCRICAO",gxz:"Z5333ModeloContratoDescricao",gxold:"O5333ModeloContratoDescricao",gxvar:"A5333ModeloContratoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5333ModeloContratoDescricao=Value},v2z:function(Value){gx.O.Z5333ModeloContratoDescricao=Value},v2c:function(){gx.fn.setControlValue("MODELOCONTRATODESCRICAO",gx.O.A5333ModeloContratoDescricao,0)},c2v:function(){gx.O.A5333ModeloContratoDescricao=this.val()},val:function(){return gx.fn.getControlValue("MODELOCONTRATODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOUSUARIOALT",gxz:"Z5334ModeloContratoUsuarioAlt",gxold:"O5334ModeloContratoUsuarioAlt",gxvar:"A5334ModeloContratoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5334ModeloContratoUsuarioAlt=Value},v2z:function(Value){gx.O.Z5334ModeloContratoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MODELOCONTRATOUSUARIOALT",gx.O.A5334ModeloContratoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5334ModeloContratoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MODELOCONTRATOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATODATAHORAALT",gxz:"Z5335ModeloContratoDataHoraAlt",gxold:"O5335ModeloContratoDataHoraAlt",gxvar:"A5335ModeloContratoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5335ModeloContratoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5335ModeloContratoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MODELOCONTRATODATAHORAALT",gx.O.A5335ModeloContratoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5335ModeloContratoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MODELOCONTRATODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A5337ModeloContratoId = 0 ;
   this.Z5337ModeloContratoId = 0 ;
   this.O5337ModeloContratoId = 0 ;
   this.A5333ModeloContratoDescricao = "" ;
   this.Z5333ModeloContratoDescricao = "" ;
   this.O5333ModeloContratoDescricao = "" ;
   this.A5334ModeloContratoUsuarioAlt = "" ;
   this.Z5334ModeloContratoUsuarioAlt = "" ;
   this.O5334ModeloContratoUsuarioAlt = "" ;
   this.A5335ModeloContratoDataHoraAlt = gx.date.nullDate() ;
   this.Z5335ModeloContratoDataHoraAlt = gx.date.nullDate() ;
   this.O5335ModeloContratoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18ModeloContratoId = 0 ;
   this.A5336ModeloContratoEmpresaId = "" ;
   this.A5337ModeloContratoId = 0 ;
   this.A5334ModeloContratoUsuarioAlt = "" ;
   this.A5335ModeloContratoDataHoraAlt = gx.date.nullDate() ;
   this.A5333ModeloContratoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128j2_client": ["'FECHAR'", true] ,"e138j2_client": ["AFTER TRN", true] ,"e148j463_client": ["ENTER", true] ,"e158j463_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ModeloContratoId',fld:'vMODELOCONTRATOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ModeloContratoId", "vMODELOCONTRATOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5336ModeloContratoEmpresaId", "MODELOCONTRATOEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 463 ]= ["O5333ModeloContratoDescricao"] ;
});
gx.setParentObj(new tmodelocontrato());
