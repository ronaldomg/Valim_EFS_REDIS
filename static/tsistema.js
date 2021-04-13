/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:24:34.90
*/
gx.evt.autoSkip = false;
gx.define('tsistema', false, function () {
   this.ServerClass =  "tsistema" ;
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
      this.AV9SistemaId=gx.fn.getControlValue("vSISTEMAID") ;
      this.A501SistemaUltimoPrograma=gx.fn.getIntegerValue("SISTEMAULTIMOPROGRAMA",'.') ;
      this.AV18Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV17Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Sistemaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SISTEMAID");
         this.AnyError  = 0;
         if ( (""==this.A140SistemaId) )
         {
            try {
               gxballoon.setError("Informe o Código do Sistema");
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
   this.Valid_Sistemanome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SISTEMANOME");
         this.AnyError  = 0;
         if ( (""==this.A539SistemaNome) )
         {
            try {
               gxballoon.setError("Informe o Nome do Sistema");
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
   this.e12192_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13192_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141962_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151962_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,34,36];
   this.GXLastCtrlId =36;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sistemaid,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(){gx.fn.setControlValue("SISTEMAID",gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(){return gx.fn.getControlValue("SISTEMAID")},nac:function(){return !(""==this.AV9SistemaId)}};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sistemanome,isvalid:null,rgrid:[],fld:"SISTEMANOME",gxz:"Z539SistemaNome",gxold:"O539SistemaNome",gxvar:"A539SistemaNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A539SistemaNome=Value},v2z:function(Value){gx.O.Z539SistemaNome=Value},v2c:function(){gx.fn.setControlValue("SISTEMANOME",gx.O.A539SistemaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A539SistemaNome=this.val()},val:function(){return gx.fn.getControlValue("SISTEMANOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAVERSAO",gxz:"Z540SistemaVersao",gxold:"O540SistemaVersao",gxvar:"A540SistemaVersao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A540SistemaVersao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z540SistemaVersao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SISTEMAVERSAO",gx.O.A540SistemaVersao,0)},c2v:function(){gx.O.A540SistemaVersao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SISTEMAVERSAO",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV14AcessoSistemaSequencia",gxold:"OV14AcessoSistemaSequencia",gxvar:"AV14AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV14AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV14AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"BTNHELP",grid:0};
   this.A140SistemaId = "" ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.A539SistemaNome = "" ;
   this.Z539SistemaNome = "" ;
   this.O539SistemaNome = "" ;
   this.A540SistemaVersao = 0 ;
   this.Z540SistemaVersao = 0 ;
   this.O540SistemaVersao = 0 ;
   this.AV14AcessoSistemaSequencia = 0 ;
   this.ZV14AcessoSistemaSequencia = 0 ;
   this.OV14AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV11EmpresaLogadaId = "" ;
   this.AV17Pgmname = "" ;
   this.AV18Pgmdesc = "" ;
   this.AV10MsgErro = "" ;
   this.AV14AcessoSistemaSequencia = 0 ;
   this.AV13Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12Tabela = "" ;
   this.AV9SistemaId = "" ;
   this.A140SistemaId = "" ;
   this.A539SistemaNome = "" ;
   this.A540SistemaVersao = 0 ;
   this.A501SistemaUltimoPrograma = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12192_client": ["'FECHAR'", true] ,"e13192_client": ["AFTER TRN", true] ,"e141962_client": ["ENTER", true] ,"e151962_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV9SistemaId',fld:'vSISTEMAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV14AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV14AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV9SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("A501SistemaUltimoPrograma", "SISTEMAULTIMOPROGRAMA", 0, "int");
   this.setVCMap("AV18Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV17Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsistema());
