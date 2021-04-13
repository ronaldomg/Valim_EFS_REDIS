/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:15:27.53
*/
gx.evt.autoSkip = false;
gx.define('tbairro', false, function () {
   this.ServerClass =  "tbairro" ;
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
      this.AV15BairroId=gx.fn.getIntegerValue("vBAIRROID",'.') ;
      this.AV16CidadesId=gx.fn.getIntegerValue("vCIDADESID",'.') ;
      this.AV22Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV21Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV17CidadesNome=gx.fn.getControlValue("vCIDADESNOME") ;
   };
   this.Valid_Bairroid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BAIRROID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bairronome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BAIRRONOME");
         this.AnyError  = 0;
         if ( (""==this.A146BairroNome) )
         {
            try {
               gxballoon.setError("Informe o nome do bairro");
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
   this.Valid_Cidadesid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cidadesid",["gx.O.A147CidadesId", "gx.O.A149CidadesNome"],["A149CidadesNome"]);
      return true;
   }
   this.e12042_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13042_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14047_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15047_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,26,35,37];
   this.GXLastCtrlId =37;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bairroid,isvalid:null,rgrid:[],fld:"BAIRROID",gxz:"Z148BairroId",gxold:"O148BairroId",gxvar:"A148BairroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A148BairroId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z148BairroId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BAIRROID",gx.O.A148BairroId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A148BairroId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BAIRROID",'.')},nac:function(){return !(0==this.AV15BairroId)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bairronome,isvalid:null,rgrid:[],fld:"BAIRRONOME",gxz:"Z146BairroNome",gxold:"O146BairroNome",gxvar:"A146BairroNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A146BairroNome=Value},v2z:function(Value){gx.O.Z146BairroNome=Value},v2c:function(){gx.fn.setControlValue("BAIRRONOME",gx.O.A146BairroNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A146BairroNome=this.val()},val:function(){return gx.fn.getControlValue("BAIRRONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cidadesid,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[26],ip:[26,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CIDADESID",gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z149CidadesNome",gxold:"O149CidadesNome",gxvar:"A149CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A149CidadesNome=Value},v2z:function(Value){gx.O.Z149CidadesNome=Value},v2c:function(){gx.fn.setControlValue("CIDADESNOME",gx.O.A149CidadesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A149CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("CIDADESNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV18AcessoSistemaSequencia",gxold:"OV18AcessoSistemaSequencia",gxvar:"AV18AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV18AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   this.A148BairroId = 0 ;
   this.Z148BairroId = 0 ;
   this.O148BairroId = 0 ;
   this.A146BairroNome = "" ;
   this.Z146BairroNome = "" ;
   this.O146BairroNome = "" ;
   this.A147CidadesId = 0 ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.Z149CidadesNome = "" ;
   this.O149CidadesNome = "" ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.ZV18AcessoSistemaSequencia = 0 ;
   this.OV18AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV21Pgmname = "" ;
   this.AV22Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV16CidadesId = 0 ;
   this.AV17CidadesNome = "" ;
   this.AV15BairroId = 0 ;
   this.A148BairroId = 0 ;
   this.A147CidadesId = 0 ;
   this.A146BairroNome = "" ;
   this.A149CidadesNome = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12042_client": ["'FECHAR'", true] ,"e13042_client": ["AFTER TRN", true] ,"e14047_client": ["ENTER", true] ,"e15047_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV16CidadesId',fld:'vCIDADESID'},{av:'AV17CidadesNome',fld:'vCIDADESNOME'},{av:'AV15BairroId',fld:'vBAIRROID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV16CidadesId',fld:'vCIDADESID'},{av:'AV17CidadesNome',fld:'vCIDADESNOME'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV18AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15BairroId", "vBAIRROID", 0, "int");
   this.setVCMap("AV16CidadesId", "vCIDADESID", 0, "int");
   this.setVCMap("AV22Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV21Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV17CidadesNome", "vCIDADESNOME", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tbairro());
