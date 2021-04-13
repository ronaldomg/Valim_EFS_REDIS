/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:46:9.17
*/
gx.evt.autoSkip = false;
gx.define('tgenero', false, function () {
   this.ServerClass =  "tgenero" ;
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
      this.AV18GeneroId1=gx.fn.getControlValue("vGENEROID1") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV20SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Generoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GENEROID");
         this.AnyError  = 0;
         if ( (""==this.A3527GeneroId) )
         {
            try {
               gxballoon.setError("Informe o código");
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
   this.Valid_Generodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GENERODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A3524GeneroDescricao) )
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
   this.Valid_Generosnanp=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GENEROSNANP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e126n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136n2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146n378_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156n378_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,24,27,30,32,34,43,45];
   this.GXLastCtrlId =45;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Generoid,isvalid:null,rgrid:[],fld:"GENEROID",gxz:"Z3527GeneroId",gxold:"O3527GeneroId",gxvar:"A3527GeneroId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3527GeneroId=Value},v2z:function(Value){gx.O.Z3527GeneroId=Value},v2c:function(){gx.fn.setControlValue("GENEROID",gx.O.A3527GeneroId,0)},c2v:function(){gx.O.A3527GeneroId=this.val()},val:function(){return gx.fn.getControlValue("GENEROID")},nac:function(){return !(""==this.AV18GeneroId1)}};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:160,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Generodescricao,isvalid:null,rgrid:[],fld:"GENERODESCRICAO",gxz:"Z3524GeneroDescricao",gxold:"O3524GeneroDescricao",gxvar:"A3524GeneroDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3524GeneroDescricao=Value},v2z:function(Value){gx.O.Z3524GeneroDescricao=Value},v2c:function(){gx.fn.setControlValue("GENERODESCRICAO",gx.O.A3524GeneroDescricao,0)},c2v:function(){gx.O.A3524GeneroDescricao=this.val()},val:function(){return gx.fn.getControlValue("GENERODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Generosnanp,isvalid:null,rgrid:[],fld:"GENEROSNANP",gxz:"Z7726GeneroSnANP",gxold:"O7726GeneroSnANP",gxvar:"A7726GeneroSnANP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A7726GeneroSnANP=Value},v2z:function(Value){gx.O.Z7726GeneroSnANP=Value},v2c:function(){gx.fn.setCheckBoxValue("GENEROSNANP",gx.O.A7726GeneroSnANP,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7726GeneroSnANP=this.val()},val:function(){return gx.fn.getControlValue("GENEROSNANP")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GENEROUSUARIOALT",gxz:"Z3525GeneroUsuarioAlt",gxold:"O3525GeneroUsuarioAlt",gxvar:"A3525GeneroUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3525GeneroUsuarioAlt=Value},v2z:function(Value){gx.O.Z3525GeneroUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("GENEROUSUARIOALT",gx.O.A3525GeneroUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3525GeneroUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("GENEROUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GENERODATAHORAALT",gxz:"Z3526GeneroDataHoraAlt",gxold:"O3526GeneroDataHoraAlt",gxvar:"A3526GeneroDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3526GeneroDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3526GeneroDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("GENERODATAHORAALT",gx.O.A3526GeneroDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3526GeneroDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("GENERODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"BTNHELP",grid:0};
   this.A3527GeneroId = "" ;
   this.Z3527GeneroId = "" ;
   this.O3527GeneroId = "" ;
   this.A3524GeneroDescricao = "" ;
   this.Z3524GeneroDescricao = "" ;
   this.O3524GeneroDescricao = "" ;
   this.A7726GeneroSnANP = "" ;
   this.Z7726GeneroSnANP = "" ;
   this.O7726GeneroSnANP = "" ;
   this.A3525GeneroUsuarioAlt = "" ;
   this.Z3525GeneroUsuarioAlt = "" ;
   this.O3525GeneroUsuarioAlt = "" ;
   this.A3526GeneroDataHoraAlt = gx.date.nullDate() ;
   this.Z3526GeneroDataHoraAlt = gx.date.nullDate() ;
   this.O3526GeneroDataHoraAlt = gx.date.nullDate() ;
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
   this.AV19SnAlterou = "" ;
   this.AV18GeneroId1 = "" ;
   this.AV20SnPrompt = "" ;
   this.A3527GeneroId = "" ;
   this.A3525GeneroUsuarioAlt = "" ;
   this.A3526GeneroDataHoraAlt = gx.date.nullDate() ;
   this.A3524GeneroDescricao = "" ;
   this.A7726GeneroSnANP = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126n2_client": ["'FECHAR'", true] ,"e136n2_client": ["AFTER TRN", true] ,"e146n378_client": ["ENTER", true] ,"e156n378_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18GeneroId1',fld:'vGENEROID1'},{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'A3527GeneroId',fld:'GENEROID'}],[{av:'A3527GeneroId',fld:'GENEROID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'A3527GeneroId',fld:'GENEROID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18GeneroId1", "vGENEROID1", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV20SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 378 ]= ["O3524GeneroDescricao","O7726GeneroSnANP","O3527GeneroId"] ;
});
gx.setParentObj(new tgenero());
