/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:38:59.38
*/
gx.evt.autoSkip = false;
gx.define('tcondicaobem', false, function () {
   this.ServerClass =  "tcondicaobem" ;
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
      this.AV17CondicaoBemId=gx.fn.getIntegerValue("vCONDICAOBEMID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2333CondicaoBemEmpresaId=gx.fn.getControlValue("CONDICAOBEMEMPRESAID") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Condicaobemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONDICAOBEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Condicaobemdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONDICAOBEMDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2335CondicaoBemDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
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
   this.e124c2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134c2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144c245_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154c245_client=function()
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
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Condicaobemid,isvalid:null,rgrid:[],fld:"CONDICAOBEMID",gxz:"Z2334CondicaoBemId",gxold:"O2334CondicaoBemId",gxvar:"A2334CondicaoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2334CondicaoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2334CondicaoBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONDICAOBEMID",gx.O.A2334CondicaoBemId,0)},c2v:function(){gx.O.A2334CondicaoBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONDICAOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Condicaobemdescricao,isvalid:null,rgrid:[],fld:"CONDICAOBEMDESCRICAO",gxz:"Z2335CondicaoBemDescricao",gxold:"O2335CondicaoBemDescricao",gxvar:"A2335CondicaoBemDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2335CondicaoBemDescricao=Value},v2z:function(Value){gx.O.Z2335CondicaoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("CONDICAOBEMDESCRICAO",gx.O.A2335CondicaoBemDescricao,0)},c2v:function(){gx.O.A2335CondicaoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONDICAOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONDICAOBEMUSUARIOALT",gxz:"Z2354CondicaoBemUsuarioAlt",gxold:"O2354CondicaoBemUsuarioAlt",gxvar:"A2354CondicaoBemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2354CondicaoBemUsuarioAlt=Value},v2z:function(Value){gx.O.Z2354CondicaoBemUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONDICAOBEMUSUARIOALT",gx.O.A2354CondicaoBemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2354CondicaoBemUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONDICAOBEMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONDICAOBEMDATAHORAALT",gxz:"Z2355CondicaoBemDataHoraAlt",gxold:"O2355CondicaoBemDataHoraAlt",gxvar:"A2355CondicaoBemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2355CondicaoBemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2355CondicaoBemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONDICAOBEMDATAHORAALT",gx.O.A2355CondicaoBemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2355CondicaoBemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONDICAOBEMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV19AcessoSistemaSequencia",gxold:"OV19AcessoSistemaSequencia",gxvar:"AV19AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV19AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A2334CondicaoBemId = 0 ;
   this.Z2334CondicaoBemId = 0 ;
   this.O2334CondicaoBemId = 0 ;
   this.A2335CondicaoBemDescricao = "" ;
   this.Z2335CondicaoBemDescricao = "" ;
   this.O2335CondicaoBemDescricao = "" ;
   this.A2354CondicaoBemUsuarioAlt = "" ;
   this.Z2354CondicaoBemUsuarioAlt = "" ;
   this.O2354CondicaoBemUsuarioAlt = "" ;
   this.A2355CondicaoBemDataHoraAlt = gx.date.nullDate() ;
   this.Z2355CondicaoBemDataHoraAlt = gx.date.nullDate() ;
   this.O2355CondicaoBemDataHoraAlt = gx.date.nullDate() ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.ZV19AcessoSistemaSequencia = 0 ;
   this.OV19AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18SnAlterou = "" ;
   this.AV17CondicaoBemId = 0 ;
   this.A2333CondicaoBemEmpresaId = "" ;
   this.A2334CondicaoBemId = 0 ;
   this.A2354CondicaoBemUsuarioAlt = "" ;
   this.A2355CondicaoBemDataHoraAlt = gx.date.nullDate() ;
   this.A2335CondicaoBemDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e124c2_client": ["'FECHAR'", true] ,"e134c2_client": ["AFTER TRN", true] ,"e144c245_client": ["ENTER", true] ,"e154c245_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17CondicaoBemId", "vCONDICAOBEMID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2333CondicaoBemEmpresaId", "CONDICAOBEMEMPRESAID", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 245 ]= ["O2335CondicaoBemDescricao"] ;
});
gx.setParentObj(new tcondicaobem());
