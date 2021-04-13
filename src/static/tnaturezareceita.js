/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:18.24
*/
gx.evt.autoSkip = false;
gx.define('tnaturezareceita', false, function () {
   this.ServerClass =  "tnaturezareceita" ;
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
      this.AV18NaturezaReceitaId=gx.fn.getIntegerValue("vNATUREZARECEITAID",'.') ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Naturezareceitaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NATUREZARECEITAID");
         this.AnyError  = 0;
         if ( (0==this.A8441NaturezaReceitaId) )
         {
            try {
               gxballoon.setError("Informe o Código");
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
   this.Valid_Naturezareceitadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NATUREZARECEITADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8438NaturezaReceitaDescricao) )
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
   this.e12bv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13bv2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14bv621_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15bv621_client=function()
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
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Naturezareceitaid,isvalid:null,rgrid:[],fld:"NATUREZARECEITAID",gxz:"Z8441NaturezaReceitaId",gxold:"O8441NaturezaReceitaId",gxvar:"A8441NaturezaReceitaId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8441NaturezaReceitaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8441NaturezaReceitaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NATUREZARECEITAID",gx.O.A8441NaturezaReceitaId,0)},c2v:function(){gx.O.A8441NaturezaReceitaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NATUREZARECEITAID",'.')},nac:function(){return !(0==this.AV18NaturezaReceitaId)}};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Naturezareceitadescricao,isvalid:null,rgrid:[],fld:"NATUREZARECEITADESCRICAO",gxz:"Z8438NaturezaReceitaDescricao",gxold:"O8438NaturezaReceitaDescricao",gxvar:"A8438NaturezaReceitaDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8438NaturezaReceitaDescricao=Value},v2z:function(Value){gx.O.Z8438NaturezaReceitaDescricao=Value},v2c:function(){gx.fn.setControlValue("NATUREZARECEITADESCRICAO",gx.O.A8438NaturezaReceitaDescricao,0)},c2v:function(){gx.O.A8438NaturezaReceitaDescricao=this.val()},val:function(){return gx.fn.getControlValue("NATUREZARECEITADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZARECEITAUSUARIOALT",gxz:"Z8439NaturezaReceitaUsuarioAlt",gxold:"O8439NaturezaReceitaUsuarioAlt",gxvar:"A8439NaturezaReceitaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8439NaturezaReceitaUsuarioAlt=Value},v2z:function(Value){gx.O.Z8439NaturezaReceitaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("NATUREZARECEITAUSUARIOALT",gx.O.A8439NaturezaReceitaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8439NaturezaReceitaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("NATUREZARECEITAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZARECEITADATAHORAALT",gxz:"Z8440NaturezaReceitaDataHoraAlt",gxold:"O8440NaturezaReceitaDataHoraAlt",gxvar:"A8440NaturezaReceitaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8440NaturezaReceitaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8440NaturezaReceitaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NATUREZARECEITADATAHORAALT",gx.O.A8440NaturezaReceitaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8440NaturezaReceitaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NATUREZARECEITADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A8441NaturezaReceitaId = 0 ;
   this.Z8441NaturezaReceitaId = 0 ;
   this.O8441NaturezaReceitaId = 0 ;
   this.A8438NaturezaReceitaDescricao = "" ;
   this.Z8438NaturezaReceitaDescricao = "" ;
   this.O8438NaturezaReceitaDescricao = "" ;
   this.A8439NaturezaReceitaUsuarioAlt = "" ;
   this.Z8439NaturezaReceitaUsuarioAlt = "" ;
   this.O8439NaturezaReceitaUsuarioAlt = "" ;
   this.A8440NaturezaReceitaDataHoraAlt = gx.date.nullDate() ;
   this.Z8440NaturezaReceitaDataHoraAlt = gx.date.nullDate() ;
   this.O8440NaturezaReceitaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV19SnAlterou = "" ;
   this.AV18NaturezaReceitaId = 0 ;
   this.A8441NaturezaReceitaId = 0 ;
   this.A8439NaturezaReceitaUsuarioAlt = "" ;
   this.A8440NaturezaReceitaDataHoraAlt = gx.date.nullDate() ;
   this.A8438NaturezaReceitaDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12bv2_client": ["'FECHAR'", true] ,"e13bv2_client": ["AFTER TRN", true] ,"e14bv621_client": ["ENTER", true] ,"e15bv621_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18NaturezaReceitaId',fld:'vNATUREZARECEITAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18NaturezaReceitaId", "vNATUREZARECEITAID", 0, "int");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 621 ]= ["O8438NaturezaReceitaDescricao"] ;
});
gx.setParentObj(new tnaturezareceita());
