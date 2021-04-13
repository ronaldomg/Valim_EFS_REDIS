/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:33:27.79
*/
gx.evt.autoSkip = false;
gx.define('tclassfluxocalculo', false, function () {
   this.ServerClass =  "tclassfluxocalculo" ;
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
      this.AV11ClassFluxoCalculoId=gx.fn.getControlValue("vCLASSFLUXOCALCULOID") ;
      this.AV13TipoClassFluxoEmpresaId=gx.fn.getControlValue("vTIPOCLASSFLUXOEMPRESAID") ;
      this.A10198TipoClassFluxoEmpresaId=gx.fn.getControlValue("TIPOCLASSFLUXOEMPRESAID") ;
      this.A10199TipoClassFluxoId=gx.fn.getIntegerValue("TIPOCLASSFLUXOID",'.') ;
      this.AV12ClassFluxoId=gx.fn.getControlValue("vCLASSFLUXOID") ;
      this.AV22SnExiste=gx.fn.getControlValue("vSNEXISTE") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV14UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A3289ClassFluxoDescricao=gx.fn.getControlValue("CLASSFLUXODESCRICAO") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Classfluxoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxoid",["gx.O.A10198TipoClassFluxoEmpresaId", "gx.O.A10199TipoClassFluxoId", "gx.O.A3288ClassFluxoId", "gx.O.A3289ClassFluxoDescricao"],["A3289ClassFluxoDescricao"]);
      return true;
   }
   this.Valid_Classfluxocalculoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxocalculoid",["gx.O.AV13TipoClassFluxoEmpresaId", "gx.O.AV7TipoClassFluxoId", "gx.O.A10218ClassFluxoCalculoId", "gx.O.AV22SnExiste", "gx.O.AV21ClassFluxoCalculoDescricao"],["AV21ClassFluxoCalculoDescricao", "AV22SnExiste"]);
      return true;
   }
   this.Validv_Tipoclassfluxoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCLASSFLUXOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipoclassfluxodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCLASSFLUXODESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxocalculooperacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOCALCULOOPERACAO");
         this.AnyError  = 0;
         if ( (""==this.A10342ClassFluxoCalculoOperacao) && this.AV22SnExiste == "S" )
         {
            try {
               gxballoon.setError("Informe o tipo de operação");
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
   this.e12f02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13f02_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14f0770_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15f0770_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,24,26,29,31,33,36,38,39,43,45,48,51,53,55,64,65,67,69];
   this.GXLastCtrlId =69;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE7",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoclassfluxoid,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXOID",gxz:"ZV7TipoClassFluxoId",gxold:"OV7TipoClassFluxoId",gxvar:"AV7TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOID",gx.O.AV7TipoClassFluxoId,0)},c2v:function(){gx.O.AV7TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoclassfluxodescricao,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV8TipoClassFluxoDescricao",gxold:"OV8TipoClassFluxoDescricao",gxvar:"AV8TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV8TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV8TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV8TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Classfluxoid,isvalid:null,rgrid:[],fld:"CLASSFLUXOID",gxz:"Z3288ClassFluxoId",gxold:"O3288ClassFluxoId",gxvar:"A3288ClassFluxoId",ucs:[],op:[],ip:[29],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3288ClassFluxoId=Value},v2z:function(Value){gx.O.Z3288ClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOID",gx.O.A3288ClassFluxoId,0)},c2v:function(){gx.O.A3288ClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXODESCRICAO",gxz:"ZV10ClassFluxoDescricao",gxold:"OV10ClassFluxoDescricao",gxvar:"AV10ClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10ClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV10ClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXODESCRICAO",gx.O.AV10ClassFluxoDescricao,0)},c2v:function(){gx.O.AV10ClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxocalculoid,isvalid:null,rgrid:[],fld:"CLASSFLUXOCALCULOID",gxz:"Z10218ClassFluxoCalculoId",gxold:"O10218ClassFluxoCalculoId",gxvar:"A10218ClassFluxoCalculoId",ucs:[],op:[38,39],ip:[39,38,17],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10218ClassFluxoCalculoId=Value},v2z:function(Value){gx.O.Z10218ClassFluxoCalculoId=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOCALCULOID",gx.O.A10218ClassFluxoCalculoId,0)},c2v:function(){gx.O.A10218ClassFluxoCalculoId=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOCALCULOID")},nac:function(){return !(""==this.AV11ClassFluxoCalculoId)}};
   GXValidFnc[39]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXOCALCULODESCRICAO",gxz:"ZV21ClassFluxoCalculoDescricao",gxold:"OV21ClassFluxoCalculoDescricao",gxvar:"AV21ClassFluxoCalculoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ClassFluxoCalculoDescricao=Value},v2z:function(Value){gx.O.ZV21ClassFluxoCalculoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOCALCULODESCRICAO",gx.O.AV21ClassFluxoCalculoDescricao,0)},c2v:function(){gx.O.AV21ClassFluxoCalculoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXOCALCULODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxocalculooperacao,isvalid:null,rgrid:[],fld:"CLASSFLUXOCALCULOOPERACAO",gxz:"Z10342ClassFluxoCalculoOperacao",gxold:"O10342ClassFluxoCalculoOperacao",gxvar:"A10342ClassFluxoCalculoOperacao",ucs:[],op:[45],ip:[45],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10342ClassFluxoCalculoOperacao=Value},v2z:function(Value){gx.O.Z10342ClassFluxoCalculoOperacao=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSFLUXOCALCULOOPERACAO",gx.O.A10342ClassFluxoCalculoOperacao)},c2v:function(){gx.O.A10342ClassFluxoCalculoOperacao=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOCALCULOOPERACAO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TABLE4",grid:0};
   GXValidFnc[51]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOCALCULOUSUARIOALT",gxz:"Z10343ClassFluxoCalculoUsuarioAlt",gxold:"O10343ClassFluxoCalculoUsuarioAlt",gxvar:"A10343ClassFluxoCalculoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10343ClassFluxoCalculoUsuarioAlt=Value},v2z:function(Value){gx.O.Z10343ClassFluxoCalculoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOCALCULOUSUARIOALT",gx.O.A10343ClassFluxoCalculoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10343ClassFluxoCalculoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOCALCULOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[55]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOCALCULODATAHORAALT",gxz:"Z10340ClassFluxoCalculoDataHoraAlt",gxold:"O10340ClassFluxoCalculoDataHoraAlt",gxvar:"A10340ClassFluxoCalculoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10340ClassFluxoCalculoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10340ClassFluxoCalculoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOCALCULODATAHORAALT",gx.O.A10340ClassFluxoCalculoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10340ClassFluxoCalculoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CLASSFLUXOCALCULODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[64]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV9AcessoSistemaSequencia",gxold:"OV9AcessoSistemaSequencia",gxvar:"AV9AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV9AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV9AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={fld:"JS", format:2,grid:0};
   GXValidFnc[67]={fld:"BTNHELP",grid:0};
   GXValidFnc[69]={fld:"PROMPT_10218",grid:770};
   this.AV7TipoClassFluxoId = 0 ;
   this.ZV7TipoClassFluxoId = 0 ;
   this.OV7TipoClassFluxoId = 0 ;
   this.AV8TipoClassFluxoDescricao = "" ;
   this.ZV8TipoClassFluxoDescricao = "" ;
   this.OV8TipoClassFluxoDescricao = "" ;
   this.A3288ClassFluxoId = "" ;
   this.Z3288ClassFluxoId = "" ;
   this.O3288ClassFluxoId = "" ;
   this.AV10ClassFluxoDescricao = "" ;
   this.ZV10ClassFluxoDescricao = "" ;
   this.OV10ClassFluxoDescricao = "" ;
   this.A10218ClassFluxoCalculoId = "" ;
   this.Z10218ClassFluxoCalculoId = "" ;
   this.O10218ClassFluxoCalculoId = "" ;
   this.AV21ClassFluxoCalculoDescricao = "" ;
   this.ZV21ClassFluxoCalculoDescricao = "" ;
   this.OV21ClassFluxoCalculoDescricao = "" ;
   this.A10342ClassFluxoCalculoOperacao = "" ;
   this.Z10342ClassFluxoCalculoOperacao = "" ;
   this.O10342ClassFluxoCalculoOperacao = "" ;
   this.A10343ClassFluxoCalculoUsuarioAlt = "" ;
   this.Z10343ClassFluxoCalculoUsuarioAlt = "" ;
   this.O10343ClassFluxoCalculoUsuarioAlt = "" ;
   this.A10340ClassFluxoCalculoDataHoraAlt = gx.date.nullDate() ;
   this.Z10340ClassFluxoCalculoDataHoraAlt = gx.date.nullDate() ;
   this.O10340ClassFluxoCalculoDataHoraAlt = gx.date.nullDate() ;
   this.AV9AcessoSistemaSequencia = 0 ;
   this.ZV9AcessoSistemaSequencia = 0 ;
   this.OV9AcessoSistemaSequencia = 0 ;
   this.AV14UsrCod = "" ;
   this.AV16EmpresaLogadaId = "" ;
   this.AV17Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV18MsgErro = "" ;
   this.AV9AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV15Logon = {} ;
   this.AV20SnAlterou = "" ;
   this.AV13TipoClassFluxoEmpresaId = "" ;
   this.AV7TipoClassFluxoId = 0 ;
   this.AV8TipoClassFluxoDescricao = "" ;
   this.AV12ClassFluxoId = "" ;
   this.AV11ClassFluxoCalculoId = "" ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A3288ClassFluxoId = "" ;
   this.A10218ClassFluxoCalculoId = "" ;
   this.AV21ClassFluxoCalculoDescricao = "" ;
   this.AV22SnExiste = "" ;
   this.A10343ClassFluxoCalculoUsuarioAlt = "" ;
   this.A10340ClassFluxoCalculoDataHoraAlt = gx.date.nullDate() ;
   this.A3289ClassFluxoDescricao = "" ;
   this.A10342ClassFluxoCalculoOperacao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12f02_client": ["'FECHAR'", true] ,"e13f02_client": ["AFTER TRN", true] ,"e14f0770_client": ["ENTER", true] ,"e15f0770_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV13TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV7TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV8TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV12ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV11ClassFluxoCalculoId',fld:'vCLASSFLUXOCALCULOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV9AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV13TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV7TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV8TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV12ClassFluxoId',fld:'vCLASSFLUXOID'}],[{av:'AV12ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV8TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV7TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV13TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV9AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_10218", [38]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11ClassFluxoCalculoId", "vCLASSFLUXOCALCULOID", 0, "svchar");
   this.setVCMap("AV13TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("A10198TipoClassFluxoEmpresaId", "TIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("A10199TipoClassFluxoId", "TIPOCLASSFLUXOID", 0, "int");
   this.setVCMap("AV12ClassFluxoId", "vCLASSFLUXOID", 0, "svchar");
   this.setVCMap("AV22SnExiste", "vSNEXISTE", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV14UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A3289ClassFluxoDescricao", "CLASSFLUXODESCRICAO", 0, "svchar");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 770 ]= ["O10342ClassFluxoCalculoOperacao","O10218ClassFluxoCalculoId"] ;
});
gx.setParentObj(new tclassfluxocalculo());
