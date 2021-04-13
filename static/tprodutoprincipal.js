/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:33:0.47
*/
gx.evt.autoSkip = false;
gx.define('tprodutoprincipal', false, function () {
   this.ServerClass =  "tprodutoprincipal" ;
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
      this.AV17ProdutoPrincipalId=gx.fn.getIntegerValue("vPRODUTOPRINCIPALID",'.') ;
      this.AV10EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A10017ProdutoPrincipalEmpresaId=gx.fn.getControlValue("PRODUTOPRINCIPALEMPRESAID") ;
      this.AV8AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV20UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV21Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Produtoprincipalid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRODUTOPRINCIPALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Produtoprincipaldescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRODUTOPRINCIPALDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A10102ProdutoPrincipalDescricao) )
         {
            try {
               gxballoon.setError("Informe descrição do produto principal");
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
   this.e12et2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13et2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14et756_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15et756_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE5",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Produtoprincipalid,isvalid:null,rgrid:[],fld:"PRODUTOPRINCIPALID",gxz:"Z10018ProdutoPrincipalId",gxold:"O10018ProdutoPrincipalId",gxvar:"A10018ProdutoPrincipalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10018ProdutoPrincipalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10018ProdutoPrincipalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PRODUTOPRINCIPALID",gx.O.A10018ProdutoPrincipalId,0)},c2v:function(){gx.O.A10018ProdutoPrincipalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRODUTOPRINCIPALID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Produtoprincipaldescricao,isvalid:null,rgrid:[],fld:"PRODUTOPRINCIPALDESCRICAO",gxz:"Z10102ProdutoPrincipalDescricao",gxold:"O10102ProdutoPrincipalDescricao",gxvar:"A10102ProdutoPrincipalDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10102ProdutoPrincipalDescricao=Value},v2z:function(Value){gx.O.Z10102ProdutoPrincipalDescricao=Value},v2c:function(){gx.fn.setControlValue("PRODUTOPRINCIPALDESCRICAO",gx.O.A10102ProdutoPrincipalDescricao,0)},c2v:function(){gx.O.A10102ProdutoPrincipalDescricao=this.val()},val:function(){return gx.fn.getControlValue("PRODUTOPRINCIPALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TXTULTALT", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOPRINCIPALUSUARIOALT",gxz:"Z10103ProdutoPrincipalUsuarioAlt",gxold:"O10103ProdutoPrincipalUsuarioAlt",gxvar:"A10103ProdutoPrincipalUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10103ProdutoPrincipalUsuarioAlt=Value},v2z:function(Value){gx.O.Z10103ProdutoPrincipalUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PRODUTOPRINCIPALUSUARIOALT",gx.O.A10103ProdutoPrincipalUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10103ProdutoPrincipalUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PRODUTOPRINCIPALUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOPRINCIPALDATAHORAALT",gxz:"Z10101ProdutoPrincipalDataHoraAlt",gxold:"O10101ProdutoPrincipalDataHoraAlt",gxvar:"A10101ProdutoPrincipalDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10101ProdutoPrincipalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10101ProdutoPrincipalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PRODUTOPRINCIPALDATAHORAALT",gx.O.A10101ProdutoPrincipalDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10101ProdutoPrincipalDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PRODUTOPRINCIPALDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A10018ProdutoPrincipalId = 0 ;
   this.Z10018ProdutoPrincipalId = 0 ;
   this.O10018ProdutoPrincipalId = 0 ;
   this.A10102ProdutoPrincipalDescricao = "" ;
   this.Z10102ProdutoPrincipalDescricao = "" ;
   this.O10102ProdutoPrincipalDescricao = "" ;
   this.A10103ProdutoPrincipalUsuarioAlt = "" ;
   this.Z10103ProdutoPrincipalUsuarioAlt = "" ;
   this.O10103ProdutoPrincipalUsuarioAlt = "" ;
   this.A10101ProdutoPrincipalDataHoraAlt = gx.date.nullDate() ;
   this.Z10101ProdutoPrincipalDataHoraAlt = gx.date.nullDate() ;
   this.O10101ProdutoPrincipalDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV20UsrCod = "" ;
   this.AV9EmpresaLogadaId = "" ;
   this.AV18Sistema = "" ;
   this.AV21Pgmname = "" ;
   this.AV22Pgmdesc = "" ;
   this.AV16MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV15Modulo = "" ;
   this.AV13Logon = {} ;
   this.AV19Tabela = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV8AlterDados = "" ;
   this.AV17ProdutoPrincipalId = 0 ;
   this.A10017ProdutoPrincipalEmpresaId = "" ;
   this.A10018ProdutoPrincipalId = 0 ;
   this.A10103ProdutoPrincipalUsuarioAlt = "" ;
   this.A10101ProdutoPrincipalDataHoraAlt = gx.date.nullDate() ;
   this.A10102ProdutoPrincipalDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12et2_client": ["'FECHAR'", true] ,"e13et2_client": ["AFTER TRN", true] ,"e14et756_client": ["ENTER", true] ,"e15et756_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17ProdutoPrincipalId',fld:'vPRODUTOPRINCIPALID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV17ProdutoPrincipalId", "vPRODUTOPRINCIPALID", 0, "int");
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10017ProdutoPrincipalEmpresaId", "PRODUTOPRINCIPALEMPRESAID", 0, "char");
   this.setVCMap("AV8AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV20UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV21Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 756 ]= ["O10102ProdutoPrincipalDescricao"] ;
});
gx.setParentObj(new tprodutoprincipal());
