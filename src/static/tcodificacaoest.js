/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:45:20.61
*/
gx.evt.autoSkip = false;
gx.define('tcodificacaoest', false, function () {
   this.ServerClass =  "tcodificacaoest" ;
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
      this.AV18CodificacaoEstId=gx.fn.getControlValue("vCODIFICACAOESTID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2936CodificacaoEstEmpresaId=gx.fn.getControlValue("CODIFICACAOESTEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Codificacaoestid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CODIFICACAOESTID");
         this.AnyError  = 0;
         if ( (""==this.A2937CodificacaoEstId) )
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
   this.Valid_Codificacaoestdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CODIFICACAOESTDESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Codificacaoestsnobrigatorio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CODIFICACAOESTSNOBRIGATORIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e126e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136e2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146e369_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156e369_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,26,29,31,33,42,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codificacaoestid,isvalid:null,rgrid:[],fld:"CODIFICACAOESTID",gxz:"Z2937CodificacaoEstId",gxold:"O2937CodificacaoEstId",gxvar:"A2937CodificacaoEstId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2937CodificacaoEstId=Value},v2z:function(Value){gx.O.Z2937CodificacaoEstId=Value},v2c:function(){gx.fn.setControlValue("CODIFICACAOESTID",gx.O.A2937CodificacaoEstId,0)},c2v:function(){gx.O.A2937CodificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAOESTID")},nac:function(){return !(""==this.AV18CodificacaoEstId)}};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codificacaoestdescricao,isvalid:null,rgrid:[],fld:"CODIFICACAOESTDESCRICAO",gxz:"Z2932CodificacaoEstDescricao",gxold:"O2932CodificacaoEstDescricao",gxvar:"A2932CodificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2932CodificacaoEstDescricao=Value},v2z:function(Value){gx.O.Z2932CodificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("CODIFICACAOESTDESCRICAO",gx.O.A2932CodificacaoEstDescricao,0)},c2v:function(){gx.O.A2932CodificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codificacaoestsnobrigatorio,isvalid:null,rgrid:[],fld:"CODIFICACAOESTSNOBRIGATORIO",gxz:"Z2933CodificacaoEstSnObrigatorio",gxold:"O2933CodificacaoEstSnObrigatorio",gxvar:"A2933CodificacaoEstSnObrigatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2933CodificacaoEstSnObrigatorio=Value},v2z:function(Value){gx.O.Z2933CodificacaoEstSnObrigatorio=Value},v2c:function(){gx.fn.setCheckBoxValue("CODIFICACAOESTSNOBRIGATORIO",gx.O.A2933CodificacaoEstSnObrigatorio,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2933CodificacaoEstSnObrigatorio=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAOESTSNOBRIGATORIO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TABLE4",grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOESTUSUARIOALT",gxz:"Z2934CodificacaoEstUsuarioAlt",gxold:"O2934CodificacaoEstUsuarioAlt",gxvar:"A2934CodificacaoEstUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2934CodificacaoEstUsuarioAlt=Value},v2z:function(Value){gx.O.Z2934CodificacaoEstUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CODIFICACAOESTUSUARIOALT",gx.O.A2934CodificacaoEstUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2934CodificacaoEstUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAOESTUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[33]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOESTDATAHORAALT",gxz:"Z2935CodificacaoEstDataHoraAlt",gxold:"O2935CodificacaoEstDataHoraAlt",gxvar:"A2935CodificacaoEstDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2935CodificacaoEstDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2935CodificacaoEstDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CODIFICACAOESTDATAHORAALT",gx.O.A2935CodificacaoEstDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2935CodificacaoEstDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CODIFICACAOESTDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"BTNHELP",grid:0};
   this.A2937CodificacaoEstId = "" ;
   this.Z2937CodificacaoEstId = "" ;
   this.O2937CodificacaoEstId = "" ;
   this.A2932CodificacaoEstDescricao = "" ;
   this.Z2932CodificacaoEstDescricao = "" ;
   this.O2932CodificacaoEstDescricao = "" ;
   this.A2933CodificacaoEstSnObrigatorio = "" ;
   this.Z2933CodificacaoEstSnObrigatorio = "" ;
   this.O2933CodificacaoEstSnObrigatorio = "" ;
   this.A2934CodificacaoEstUsuarioAlt = "" ;
   this.Z2934CodificacaoEstUsuarioAlt = "" ;
   this.O2934CodificacaoEstUsuarioAlt = "" ;
   this.A2935CodificacaoEstDataHoraAlt = gx.date.nullDate() ;
   this.Z2935CodificacaoEstDataHoraAlt = gx.date.nullDate() ;
   this.O2935CodificacaoEstDataHoraAlt = gx.date.nullDate() ;
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
   this.AV18CodificacaoEstId = "" ;
   this.A2936CodificacaoEstEmpresaId = "" ;
   this.A2937CodificacaoEstId = "" ;
   this.A2932CodificacaoEstDescricao = "" ;
   this.A2934CodificacaoEstUsuarioAlt = "" ;
   this.A2935CodificacaoEstDataHoraAlt = gx.date.nullDate() ;
   this.A2933CodificacaoEstSnObrigatorio = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126e2_client": ["'FECHAR'", true] ,"e136e2_client": ["AFTER TRN", true] ,"e146e369_client": ["ENTER", true] ,"e156e369_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18CodificacaoEstId", "vCODIFICACAOESTID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2936CodificacaoEstEmpresaId", "CODIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 369 ]= ["O2933CodificacaoEstSnObrigatorio","O2932CodificacaoEstDescricao","O2937CodificacaoEstId"] ;
});
gx.setParentObj(new tcodificacaoest());
