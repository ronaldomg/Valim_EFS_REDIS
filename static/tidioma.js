/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:17:17.24
*/
gx.evt.autoSkip = false;
gx.define('tidioma', false, function () {
   this.ServerClass =  "tidioma" ;
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
      this.AV14IdiomaId=gx.fn.getIntegerValue("vIDIOMAID",'.') ;
      this.AV21Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Idiomaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IDIOMAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Idiomadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IDIOMADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A46IdiomaDescricao) )
         {
            try {
               gxballoon.setError("Informe o Idioma");
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
   this.e120l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130l2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140l338_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150l338_client=function()
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
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Idiomaid,isvalid:null,rgrid:[],fld:"IDIOMAID",gxz:"Z124IdiomaId",gxold:"O124IdiomaId",gxvar:"A124IdiomaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A124IdiomaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z124IdiomaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IDIOMAID",gx.O.A124IdiomaId,0)},c2v:function(){gx.O.A124IdiomaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IDIOMAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Idiomadescricao,isvalid:null,rgrid:[],fld:"IDIOMADESCRICAO",gxz:"Z46IdiomaDescricao",gxold:"O46IdiomaDescricao",gxvar:"A46IdiomaDescricao",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A46IdiomaDescricao=Value},v2z:function(Value){gx.O.Z46IdiomaDescricao=Value},v2c:function(){gx.fn.setControlValue("IDIOMADESCRICAO",gx.O.A46IdiomaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A46IdiomaDescricao=this.val()},val:function(){return gx.fn.getControlValue("IDIOMADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[27]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   this.A124IdiomaId = 0 ;
   this.Z124IdiomaId = 0 ;
   this.O124IdiomaId = 0 ;
   this.A46IdiomaDescricao = "" ;
   this.Z46IdiomaDescricao = "" ;
   this.O46IdiomaDescricao = "" ;
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
   this.AV13Tabela = "" ;
   this.AV14IdiomaId = 0 ;
   this.A124IdiomaId = 0 ;
   this.A46IdiomaDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120l2_client": ["'FECHAR'", true] ,"e130l2_client": ["AFTER TRN", true] ,"e140l338_client": ["ENTER", true] ,"e150l338_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14IdiomaId',fld:'vIDIOMAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14IdiomaId", "vIDIOMAID", 0, "int");
   this.setVCMap("AV21Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tidioma());
