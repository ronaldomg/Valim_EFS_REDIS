/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:29:40.3
*/
gx.evt.autoSkip = false;
gx.define('taparelhoitem', false, function () {
   this.ServerClass =  "taparelhoitem" ;
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
      this.AV23AparelhoItemId=gx.fn.getIntegerValue("vAPARELHOITEMID",'.') ;
      this.AV18AparelhoId=gx.fn.getIntegerValue("vAPARELHOID",'.') ;
      this.AV26AparelhoDescricaoParm=gx.fn.getControlValue("vAPARELHODESCRICAOPARM") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV35Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV33TelaPai=gx.fn.getControlValue("vTELAPAI") ;
   };
   this.Valid_Aparelhoitemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOITEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoitemempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOITEMEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoitemdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOITEMDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8876AparelhoItemDescricao) )
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
   this.Valid_Aparelhoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoid",["gx.O.A8824AparelhoEmpresaId", "gx.O.A8825AparelhoId"],[]);
      return true;
   }
   this.Valid_Aparelhoitemsituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOITEMSITUACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12cw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cw2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14cw664_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15cw664_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,17,20,22,25,27,28,31,33,35,39,42,45,47,49,58,59,61,63];
   this.GXLastCtrlId =63;
   GXValidFnc[3]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[6]={fld:"TABLEBORDER",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoitemid,isvalid:null,rgrid:[],fld:"APARELHOITEMID",gxz:"Z8880AparelhoItemId",gxold:"O8880AparelhoItemId",gxvar:"A8880AparelhoItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8880AparelhoItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8880AparelhoItemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOITEMID",gx.O.A8880AparelhoItemId,0)},c2v:function(){gx.O.A8880AparelhoItemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOITEMID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoempresaid,isvalid:null,rgrid:[],fld:"APARELHOEMPRESAID",gxz:"Z8824AparelhoEmpresaId",gxold:"O8824AparelhoEmpresaId",gxvar:"A8824AparelhoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8824AparelhoEmpresaId=Value},v2z:function(Value){gx.O.Z8824AparelhoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("APARELHOEMPRESAID",gx.O.A8824AparelhoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8824AparelhoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[17]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoitemempresaid,isvalid:null,rgrid:[],fld:"APARELHOITEMEMPRESAID",gxz:"Z8879AparelhoItemEmpresaId",gxold:"O8879AparelhoItemEmpresaId",gxvar:"A8879AparelhoItemEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8879AparelhoItemEmpresaId=Value},v2z:function(Value){gx.O.Z8879AparelhoItemEmpresaId=Value},v2c:function(){gx.fn.setControlValue("APARELHOITEMEMPRESAID",gx.O.A8879AparelhoItemEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8879AparelhoItemEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOITEMEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[20]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoitemdescricao,isvalid:null,rgrid:[],fld:"APARELHOITEMDESCRICAO",gxz:"Z8876AparelhoItemDescricao",gxold:"O8876AparelhoItemDescricao",gxvar:"A8876AparelhoItemDescricao",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8876AparelhoItemDescricao=Value},v2z:function(Value){gx.O.Z8876AparelhoItemDescricao=Value},v2c:function(){gx.fn.setControlValue("APARELHOITEMDESCRICAO",gx.O.A8876AparelhoItemDescricao,0)},c2v:function(){gx.O.A8876AparelhoItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("APARELHOITEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"APARELHO", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoid,isvalid:null,rgrid:[],fld:"APARELHOID",gxz:"Z8825AparelhoId",gxold:"O8825AparelhoId",gxvar:"A8825AparelhoId",ucs:[],op:[],ip:[27,16],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8825AparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8825AparelhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOID",gx.O.A8825AparelhoId,0)},c2v:function(){gx.O.A8825AparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHODESCRICAO",gxz:"ZV21AparelhoDescricao",gxold:"OV21AparelhoDescricao",gxvar:"AV21AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AparelhoDescricao=Value},v2z:function(Value){gx.O.ZV21AparelhoDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHODESCRICAO",gx.O.AV21AparelhoDescricao,0)},c2v:function(){gx.O.AV21AparelhoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"APARELHO2", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMPRAZOMANUTENCAO",gxz:"Z9714AparelhoItemPrazoManutencao",gxold:"O9714AparelhoItemPrazoManutencao",gxvar:"A9714AparelhoItemPrazoManutencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9714AparelhoItemPrazoManutencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9714AparelhoItemPrazoManutencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOITEMPRAZOMANUTENCAO",gx.O.A9714AparelhoItemPrazoManutencao,0)},c2v:function(){gx.O.A9714AparelhoItemPrazoManutencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOITEMPRAZOMANUTENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"APARELHO3", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoitemsituacao,isvalid:null,rgrid:[],fld:"APARELHOITEMSITUACAO",gxz:"Z9245AparelhoItemSituacao",gxold:"O9245AparelhoItemSituacao",gxvar:"A9245AparelhoItemSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9245AparelhoItemSituacao=Value},v2z:function(Value){gx.O.Z9245AparelhoItemSituacao=Value},v2c:function(){gx.fn.setCheckBoxValue("APARELHOITEMSITUACAO",gx.O.A9245AparelhoItemSituacao,"A")},c2v:function(){gx.O.A9245AparelhoItemSituacao=this.val()},val:function(){return gx.fn.getControlValue("APARELHOITEMSITUACAO")},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[42]={fld:"TABLE7",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMUSUALT",gxz:"Z8877AparelhoItemUsuAlt",gxold:"O8877AparelhoItemUsuAlt",gxvar:"A8877AparelhoItemUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8877AparelhoItemUsuAlt=Value},v2z:function(Value){gx.O.Z8877AparelhoItemUsuAlt=Value},v2c:function(){gx.fn.setControlValue("APARELHOITEMUSUALT",gx.O.A8877AparelhoItemUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8877AparelhoItemUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("APARELHOITEMUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[49]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMDATAUSUALT",gxz:"Z8878AparelhoItemDataUsuAlt",gxold:"O8878AparelhoItemDataUsuAlt",gxvar:"A8878AparelhoItemDataUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8878AparelhoItemDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8878AparelhoItemDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("APARELHOITEMDATAUSUALT",gx.O.A8878AparelhoItemDataUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8878AparelhoItemDataUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("APARELHOITEMDATAUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[58]={fld:"JS", format:2,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"BTNHELP",grid:0};
   GXValidFnc[63]={fld:"PROMPT_8825",grid:664};
   this.A8880AparelhoItemId = 0 ;
   this.Z8880AparelhoItemId = 0 ;
   this.O8880AparelhoItemId = 0 ;
   this.A8824AparelhoEmpresaId = "" ;
   this.Z8824AparelhoEmpresaId = "" ;
   this.O8824AparelhoEmpresaId = "" ;
   this.A8879AparelhoItemEmpresaId = "" ;
   this.Z8879AparelhoItemEmpresaId = "" ;
   this.O8879AparelhoItemEmpresaId = "" ;
   this.A8876AparelhoItemDescricao = "" ;
   this.Z8876AparelhoItemDescricao = "" ;
   this.O8876AparelhoItemDescricao = "" ;
   this.A8825AparelhoId = 0 ;
   this.Z8825AparelhoId = 0 ;
   this.O8825AparelhoId = 0 ;
   this.AV21AparelhoDescricao = "" ;
   this.ZV21AparelhoDescricao = "" ;
   this.OV21AparelhoDescricao = "" ;
   this.A9714AparelhoItemPrazoManutencao = 0 ;
   this.Z9714AparelhoItemPrazoManutencao = 0 ;
   this.O9714AparelhoItemPrazoManutencao = 0 ;
   this.A9245AparelhoItemSituacao = "" ;
   this.Z9245AparelhoItemSituacao = "" ;
   this.O9245AparelhoItemSituacao = "" ;
   this.A8877AparelhoItemUsuAlt = "" ;
   this.Z8877AparelhoItemUsuAlt = "" ;
   this.O8877AparelhoItemUsuAlt = "" ;
   this.A8878AparelhoItemDataUsuAlt = gx.date.nullDate() ;
   this.Z8878AparelhoItemDataUsuAlt = gx.date.nullDate() ;
   this.O8878AparelhoItemDataUsuAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV24EquipamentoDes = "" ;
   this.AV16Sistema = "" ;
   this.AV34Pgmname = "" ;
   this.AV35Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19Entrada = [ ] ;
   this.AV20Saida = [ ] ;
   this.AV22SnAlterou = "" ;
   this.AV23AparelhoItemId = 0 ;
   this.AV26AparelhoDescricaoParm = "" ;
   this.AV18AparelhoId = 0 ;
   this.AV33TelaPai = "" ;
   this.A8879AparelhoItemEmpresaId = "" ;
   this.A8880AparelhoItemId = 0 ;
   this.A8825AparelhoId = 0 ;
   this.AV21AparelhoDescricao = "" ;
   this.A8824AparelhoEmpresaId = "" ;
   this.A8877AparelhoItemUsuAlt = "" ;
   this.A8878AparelhoItemDataUsuAlt = gx.date.nullDate() ;
   this.A8876AparelhoItemDescricao = "" ;
   this.A9245AparelhoItemSituacao = "" ;
   this.A9714AparelhoItemPrazoManutencao = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12cw2_client": ["'FECHAR'", true] ,"e13cw2_client": ["AFTER TRN", true] ,"e14cw664_client": ["ENTER", true] ,"e15cw664_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV23AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV26AparelhoDescricaoParm',fld:'vAPARELHODESCRICAOPARM',hsh:true},{av:'AV18AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV33TelaPai',fld:'vTELAPAI',hsh:true},{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV33TelaPai',fld:'vTELAPAI',hsh:true}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV33TelaPai',fld:'vTELAPAI',hsh:true}],[{av:'AV21AparelhoDescricao',fld:'vAPARELHODESCRICAO'}]];
   this.setPrompt("PROMPT_8825", [27]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV23AparelhoItemId", "vAPARELHOITEMID", 0, "int");
   this.setVCMap("AV18AparelhoId", "vAPARELHOID", 0, "int");
   this.setVCMap("AV26AparelhoDescricaoParm", "vAPARELHODESCRICAOPARM", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV35Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV33TelaPai", "vTELAPAI", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 664 ]= ["O8876AparelhoItemDescricao","O9245AparelhoItemSituacao","O8825AparelhoId","O8824AparelhoEmpresaId","O8880AparelhoItemId","O8879AparelhoItemEmpresaId"] ;
});
gx.setParentObj(new taparelhoitem());
