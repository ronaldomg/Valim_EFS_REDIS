/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:59.71
*/
gx.evt.autoSkip = false;
gx.define('tmodelopropostaitem', false, function () {
   this.ServerClass =  "tmodelopropostaitem" ;
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
      this.AV22ModeloPropostaEmpresaId=gx.fn.getControlValue("vMODELOPROPOSTAEMPRESAID") ;
      this.A8298ModeloPropostaEmpresaId=gx.fn.getControlValue("MODELOPROPOSTAEMPRESAID") ;
      this.AV18ModeloPropostaItemId=gx.fn.getIntegerValue("vMODELOPROPOSTAITEMID",'.') ;
      this.AV21ModeloPropostaId=gx.fn.getIntegerValue("vMODELOPROPOSTAID",'.') ;
      this.A8299ModeloPropostaItemOrdem=gx.fn.getIntegerValue("MODELOPROPOSTAITEMORDEM",'.') ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV30Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV29Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Modelopropostaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Modelopropostaid",["gx.O.A8297ModeloPropostaId", "gx.O.A8298ModeloPropostaEmpresaId"],[]);
      return true;
   }
   this.Valid_Modelopropostaitemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOPROPOSTAITEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelopropostaitemtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOPROPOSTAITEMTIPO");
         this.AnyError  = 0;
         if ( (""==this.A8300ModeloPropostaItemTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo");
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
   this.Valid_Modelopropostaitemtexto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOPROPOSTAITEMTEXTO");
         this.AnyError  = 0;
         if ( ! (""==this.A8301ModeloPropostaItemTexto) && this.A8300ModeloPropostaItemTipo == "C" )
         {
            try {
               gxballoon.setError("Não é permitido informar o Texto quando o tipo for Campo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (""==this.A8301ModeloPropostaItemTexto) && this.A8300ModeloPropostaItemTipo == "T" )
         {
            try {
               gxballoon.setError("Informe o Texto");
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
   this.Valid_Modelopropostaitemcampo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOPROPOSTAITEMCAMPO");
         this.AnyError  = 0;
         if ( ! (""==this.A8302ModeloPropostaItemCampo) && this.A8300ModeloPropostaItemTipo == "T" )
         {
            try {
               gxballoon.setError("Não é permitido informar o Campo quando o tipo for Texto");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (""==this.A8302ModeloPropostaItemCampo) && this.A8300ModeloPropostaItemTipo == "C" )
         {
            try {
               gxballoon.setError("Informe o Campo");
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
   this.Valid_Modelopropostaitemsnquebra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOPROPOSTAITEMSNQUEBRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelopropostaitemsnnegrito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOPROPOSTAITEMSNNEGRITO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12bp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13bp2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14bp615_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15bp615_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,38,42,45,48,50,52,61,63];
   this.GXLastCtrlId =63;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostaid,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAID",gxz:"Z8297ModeloPropostaId",gxold:"O8297ModeloPropostaId",gxvar:"A8297ModeloPropostaId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8297ModeloPropostaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8297ModeloPropostaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTAID",gx.O.A8297ModeloPropostaId,0)},c2v:function(){gx.O.A8297ModeloPropostaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELOPROPOSTAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostaitemid,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAITEMID",gxz:"Z8307ModeloPropostaItemId",gxold:"O8307ModeloPropostaItemId",gxvar:"A8307ModeloPropostaItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8307ModeloPropostaItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8307ModeloPropostaItemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTAITEMID",gx.O.A8307ModeloPropostaItemId,0)},c2v:function(){gx.O.A8307ModeloPropostaItemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELOPROPOSTAITEMID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostaitemtipo,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAITEMTIPO",gxz:"Z8300ModeloPropostaItemTipo",gxold:"O8300ModeloPropostaItemTipo",gxvar:"A8300ModeloPropostaItemTipo",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A8300ModeloPropostaItemTipo=Value},v2z:function(Value){gx.O.Z8300ModeloPropostaItemTipo=Value},v2c:function(){gx.fn.setComboBoxValue("MODELOPROPOSTAITEMTIPO",gx.O.A8300ModeloPropostaItemTipo)},c2v:function(){gx.O.A8300ModeloPropostaItemTipo=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTAITEMTIPO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostaitemtexto,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAITEMTEXTO",gxz:"Z8301ModeloPropostaItemTexto",gxold:"O8301ModeloPropostaItemTexto",gxvar:"A8301ModeloPropostaItemTexto",ucs:[],op:[24,29],ip:[24,29],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8301ModeloPropostaItemTexto=Value},v2z:function(Value){gx.O.Z8301ModeloPropostaItemTexto=Value},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTAITEMTEXTO",gx.O.A8301ModeloPropostaItemTexto,0)},c2v:function(){gx.O.A8301ModeloPropostaItemTexto=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTAITEMTEXTO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostaitemcampo,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAITEMCAMPO",gxz:"Z8302ModeloPropostaItemCampo",gxold:"O8302ModeloPropostaItemCampo",gxvar:"A8302ModeloPropostaItemCampo",ucs:[],op:[24,34],ip:[24,34],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A8302ModeloPropostaItemCampo=Value},v2z:function(Value){gx.O.Z8302ModeloPropostaItemCampo=Value},v2c:function(){gx.fn.setComboBoxValue("MODELOPROPOSTAITEMCAMPO",gx.O.A8302ModeloPropostaItemCampo)},c2v:function(){gx.O.A8302ModeloPropostaItemCampo=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTAITEMCAMPO")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostaitemsnquebra,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAITEMSNQUEBRA",gxz:"Z8303ModeloPropostaItemSnQuebra",gxold:"O8303ModeloPropostaItemSnQuebra",gxvar:"A8303ModeloPropostaItemSnQuebra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8303ModeloPropostaItemSnQuebra=Value},v2z:function(Value){gx.O.Z8303ModeloPropostaItemSnQuebra=Value},v2c:function(){gx.fn.setCheckBoxValue("MODELOPROPOSTAITEMSNQUEBRA",gx.O.A8303ModeloPropostaItemSnQuebra,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8303ModeloPropostaItemSnQuebra=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTAITEMSNQUEBRA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostaitemsnnegrito,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAITEMSNNEGRITO",gxz:"Z8304ModeloPropostaItemSnNegrito",gxold:"O8304ModeloPropostaItemSnNegrito",gxvar:"A8304ModeloPropostaItemSnNegrito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8304ModeloPropostaItemSnNegrito=Value},v2z:function(Value){gx.O.Z8304ModeloPropostaItemSnNegrito=Value},v2c:function(){gx.fn.setCheckBoxValue("MODELOPROPOSTAITEMSNNEGRITO",gx.O.A8304ModeloPropostaItemSnNegrito,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8304ModeloPropostaItemSnNegrito=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTAITEMSNNEGRITO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"TABLE4",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAITEMUSUARIOALT",gxz:"Z8305ModeloPropostaItemUsuarioAlt",gxold:"O8305ModeloPropostaItemUsuarioAlt",gxvar:"A8305ModeloPropostaItemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8305ModeloPropostaItemUsuarioAlt=Value},v2z:function(Value){gx.O.Z8305ModeloPropostaItemUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTAITEMUSUARIOALT",gx.O.A8305ModeloPropostaItemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8305ModeloPropostaItemUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTAITEMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[52]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAITEMDATAHORAALT",gxz:"Z8306ModeloPropostaItemDataHoraAlt",gxold:"O8306ModeloPropostaItemDataHoraAlt",gxvar:"A8306ModeloPropostaItemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8306ModeloPropostaItemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8306ModeloPropostaItemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTAITEMDATAHORAALT",gx.O.A8306ModeloPropostaItemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8306ModeloPropostaItemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MODELOPROPOSTAITEMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[61]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"BTNHELP",grid:0};
   this.A8297ModeloPropostaId = 0 ;
   this.Z8297ModeloPropostaId = 0 ;
   this.O8297ModeloPropostaId = 0 ;
   this.A8307ModeloPropostaItemId = 0 ;
   this.Z8307ModeloPropostaItemId = 0 ;
   this.O8307ModeloPropostaItemId = 0 ;
   this.A8300ModeloPropostaItemTipo = "" ;
   this.Z8300ModeloPropostaItemTipo = "" ;
   this.O8300ModeloPropostaItemTipo = "" ;
   this.A8301ModeloPropostaItemTexto = "" ;
   this.Z8301ModeloPropostaItemTexto = "" ;
   this.O8301ModeloPropostaItemTexto = "" ;
   this.A8302ModeloPropostaItemCampo = "" ;
   this.Z8302ModeloPropostaItemCampo = "" ;
   this.O8302ModeloPropostaItemCampo = "" ;
   this.A8303ModeloPropostaItemSnQuebra = "" ;
   this.Z8303ModeloPropostaItemSnQuebra = "" ;
   this.O8303ModeloPropostaItemSnQuebra = "" ;
   this.A8304ModeloPropostaItemSnNegrito = "" ;
   this.Z8304ModeloPropostaItemSnNegrito = "" ;
   this.O8304ModeloPropostaItemSnNegrito = "" ;
   this.A8305ModeloPropostaItemUsuarioAlt = "" ;
   this.Z8305ModeloPropostaItemUsuarioAlt = "" ;
   this.O8305ModeloPropostaItemUsuarioAlt = "" ;
   this.A8306ModeloPropostaItemDataHoraAlt = gx.date.nullDate() ;
   this.Z8306ModeloPropostaItemDataHoraAlt = gx.date.nullDate() ;
   this.O8306ModeloPropostaItemDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV29Pgmname = "" ;
   this.AV30Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV22ModeloPropostaEmpresaId = "" ;
   this.AV20SnAlterou = "" ;
   this.AV18ModeloPropostaItemId = 0 ;
   this.AV21ModeloPropostaId = 0 ;
   this.A8297ModeloPropostaId = 0 ;
   this.A8307ModeloPropostaItemId = 0 ;
   this.A8298ModeloPropostaEmpresaId = "" ;
   this.A8305ModeloPropostaItemUsuarioAlt = "" ;
   this.A8306ModeloPropostaItemDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A8299ModeloPropostaItemOrdem = 0 ;
   this.A8300ModeloPropostaItemTipo = "" ;
   this.A8301ModeloPropostaItemTexto = "" ;
   this.A8302ModeloPropostaItemCampo = "" ;
   this.A8303ModeloPropostaItemSnQuebra = "" ;
   this.A8304ModeloPropostaItemSnNegrito = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12bp2_client": ["'FECHAR'", true] ,"e13bp2_client": ["AFTER TRN", true] ,"e14bp615_client": ["ENTER", true] ,"e15bp615_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ModeloPropostaItemId',fld:'vMODELOPROPOSTAITEMID'},{av:'AV21ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV21ModeloPropostaId',fld:'vMODELOPROPOSTAID'},{av:'AV23ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV22ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'}],[{av:'AV22ModeloPropostaEmpresaId',fld:'vMODELOPROPOSTAEMPRESAID'},{av:'AV23ModeloPropostaDescricao',fld:'vMODELOPROPOSTADESCRICAO'},{av:'AV21ModeloPropostaId',fld:'vMODELOPROPOSTAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV22ModeloPropostaEmpresaId", "vMODELOPROPOSTAEMPRESAID", 0, "char");
   this.setVCMap("A8298ModeloPropostaEmpresaId", "MODELOPROPOSTAEMPRESAID", 0, "char");
   this.setVCMap("AV18ModeloPropostaItemId", "vMODELOPROPOSTAITEMID", 0, "int");
   this.setVCMap("AV21ModeloPropostaId", "vMODELOPROPOSTAID", 0, "int");
   this.setVCMap("A8299ModeloPropostaItemOrdem", "MODELOPROPOSTAITEMORDEM", 0, "int");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV30Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV29Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 615 ]= ["O8304ModeloPropostaItemSnNegrito","O8303ModeloPropostaItemSnQuebra","O8302ModeloPropostaItemCampo","O8301ModeloPropostaItemTexto","O8300ModeloPropostaItemTipo","O8299ModeloPropostaItemOrdem"] ;
});
gx.setParentObj(new tmodelopropostaitem());
