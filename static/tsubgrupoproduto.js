/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:56:38.90
*/
gx.evt.autoSkip = false;
gx.define('tsubgrupoproduto', false, function () {
   this.ServerClass =  "tsubgrupoproduto" ;
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
      this.AV18SubgrupoProdutoId=gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Subgrupoprodutoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SUBGRUPOPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Subgrupoprodutoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SUBGRUPOPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Subgrupoprodutodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SUBGRUPOPRODUTODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A3963SubgrupoProdutoDescricao) )
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
   this.e127k2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e137k2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e147k418_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e157k418_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,37,40,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Subgrupoprodutoid,isvalid:null,rgrid:[],fld:"SUBGRUPOPRODUTOID",gxz:"Z3409SubgrupoProdutoId",gxold:"O3409SubgrupoProdutoId",gxvar:"A3409SubgrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3409SubgrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3409SubgrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SUBGRUPOPRODUTOID",gx.O.A3409SubgrupoProdutoId,0)},c2v:function(){gx.O.A3409SubgrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Subgrupoprodutodescricao,isvalid:null,rgrid:[],fld:"SUBGRUPOPRODUTODESCRICAO",gxz:"Z3963SubgrupoProdutoDescricao",gxold:"O3963SubgrupoProdutoDescricao",gxvar:"A3963SubgrupoProdutoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3963SubgrupoProdutoDescricao=Value},v2z:function(Value){gx.O.Z3963SubgrupoProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("SUBGRUPOPRODUTODESCRICAO",gx.O.A3963SubgrupoProdutoDescricao,0)},c2v:function(){gx.O.A3963SubgrupoProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("SUBGRUPOPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SUBGRUPOPRODUTOUSUARIOALT",gxz:"Z4068SubgrupoProdutoUsuarioAlt",gxold:"O4068SubgrupoProdutoUsuarioAlt",gxvar:"A4068SubgrupoProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4068SubgrupoProdutoUsuarioAlt=Value},v2z:function(Value){gx.O.Z4068SubgrupoProdutoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SUBGRUPOPRODUTOUSUARIOALT",gx.O.A4068SubgrupoProdutoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4068SubgrupoProdutoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SUBGRUPOPRODUTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SUBGRUPOPRODUTODATAHORAALT",gxz:"Z4069SubgrupoProdutoDataHoraAlt",gxold:"O4069SubgrupoProdutoDataHoraAlt",gxvar:"A4069SubgrupoProdutoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4069SubgrupoProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4069SubgrupoProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SUBGRUPOPRODUTODATAHORAALT",gx.O.A4069SubgrupoProdutoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4069SubgrupoProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SUBGRUPOPRODUTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[37]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Subgrupoprodutoempresaid,isvalid:null,rgrid:[],fld:"SUBGRUPOPRODUTOEMPRESAID",gxz:"Z3826SubgrupoProdutoEmpresaId",gxold:"O3826SubgrupoProdutoEmpresaId",gxvar:"A3826SubgrupoProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3826SubgrupoProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z3826SubgrupoProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SUBGRUPOPRODUTOEMPRESAID",gx.O.A3826SubgrupoProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3826SubgrupoProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SUBGRUPOPRODUTOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.A3409SubgrupoProdutoId = 0 ;
   this.Z3409SubgrupoProdutoId = 0 ;
   this.O3409SubgrupoProdutoId = 0 ;
   this.A3963SubgrupoProdutoDescricao = "" ;
   this.Z3963SubgrupoProdutoDescricao = "" ;
   this.O3963SubgrupoProdutoDescricao = "" ;
   this.A4068SubgrupoProdutoUsuarioAlt = "" ;
   this.Z4068SubgrupoProdutoUsuarioAlt = "" ;
   this.O4068SubgrupoProdutoUsuarioAlt = "" ;
   this.A4069SubgrupoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Z4069SubgrupoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.O4069SubgrupoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.A3826SubgrupoProdutoEmpresaId = "" ;
   this.Z3826SubgrupoProdutoEmpresaId = "" ;
   this.O3826SubgrupoProdutoEmpresaId = "" ;
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
   this.AV18SubgrupoProdutoId = 0 ;
   this.A3826SubgrupoProdutoEmpresaId = "" ;
   this.A3409SubgrupoProdutoId = 0 ;
   this.A4068SubgrupoProdutoUsuarioAlt = "" ;
   this.A4069SubgrupoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.A3963SubgrupoProdutoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e127k2_client": ["'FECHAR'", true] ,"e137k2_client": ["AFTER TRN", true] ,"e147k418_client": ["ENTER", true] ,"e157k418_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18SubgrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18SubgrupoProdutoId", "vSUBGRUPOPRODUTOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 418 ]= ["O3963SubgrupoProdutoDescricao"] ;
});
gx.setParentObj(new tsubgrupoproduto());
