/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:15:49.45
*/
gx.evt.autoSkip = false;
gx.define('tclassificacaoliteraria', false, function () {
   this.ServerClass =  "tclassificacaoliteraria" ;
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
      this.AV14ClassificacaoLiterariaId=gx.fn.getIntegerValue("vCLASSIFICACAOLITERARIAID",'.') ;
      this.AV21Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Classificacaoliterariaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSIFICACAOLITERARIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classificacaoliterariadescrica=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSIFICACAOLITERARIADESCRICA");
         this.AnyError  = 0;
         if ( (""==this.A44ClassificacaoLiterariaDescrica) )
         {
            try {
               gxballoon.setError("Informe a Classificação Literária");
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
   this.e12082_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13082_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1408336_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1508336_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,27];
   this.GXLastCtrlId =27;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Classificacaoliterariaid,isvalid:null,rgrid:[],fld:"CLASSIFICACAOLITERARIAID",gxz:"Z119ClassificacaoLiterariaId",gxold:"O119ClassificacaoLiterariaId",gxvar:"A119ClassificacaoLiterariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A119ClassificacaoLiterariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z119ClassificacaoLiterariaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSIFICACAOLITERARIAID",gx.O.A119ClassificacaoLiterariaId,0)},c2v:function(){gx.O.A119ClassificacaoLiterariaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSIFICACAOLITERARIAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classificacaoliterariadescrica,isvalid:null,rgrid:[],fld:"CLASSIFICACAOLITERARIADESCRICA",gxz:"Z44ClassificacaoLiterariaDescrica",gxold:"O44ClassificacaoLiterariaDescrica",gxvar:"A44ClassificacaoLiterariaDescrica",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A44ClassificacaoLiterariaDescrica=Value},v2z:function(Value){gx.O.Z44ClassificacaoLiterariaDescrica=Value},v2c:function(){gx.fn.setControlValue("CLASSIFICACAOLITERARIADESCRICA",gx.O.A44ClassificacaoLiterariaDescrica,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A44ClassificacaoLiterariaDescrica=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAOLITERARIADESCRICA")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[27]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   this.A119ClassificacaoLiterariaId = 0 ;
   this.Z119ClassificacaoLiterariaId = 0 ;
   this.O119ClassificacaoLiterariaId = 0 ;
   this.A44ClassificacaoLiterariaDescrica = "" ;
   this.Z44ClassificacaoLiterariaDescrica = "" ;
   this.O44ClassificacaoLiterariaDescrica = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV20Pgmname = "" ;
   this.AV21Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV16Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV14ClassificacaoLiterariaId = 0 ;
   this.A119ClassificacaoLiterariaId = 0 ;
   this.A44ClassificacaoLiterariaDescrica = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12082_client": ["'FECHAR'", true] ,"e13082_client": ["AFTER TRN", true] ,"e1408336_client": ["ENTER", true] ,"e1508336_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14ClassificacaoLiterariaId',fld:'vCLASSIFICACAOLITERARIAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14ClassificacaoLiterariaId", "vCLASSIFICACAOLITERARIAID", 0, "int");
   this.setVCMap("AV21Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tclassificacaoliteraria());
