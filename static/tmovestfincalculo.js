/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:30:38.59
*/
gx.evt.autoSkip = false;
gx.define('tmovestfincalculo', false, function () {
   this.ServerClass =  "tmovestfincalculo" ;
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
      this.AV21MovEstFinCalculoSeq=gx.fn.getIntegerValue("vMOVESTFINCALCULOSEQ",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Movestfincalculoseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVESTFINCALCULOSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movestfinid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVESTFINID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Relestfinempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RELESTFINEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Relestfinid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Relestfinid",["gx.O.A9547RelEstFinEmpresaId", "gx.O.A9548RelEstFinId", "gx.O.A9443MovEstFinId"],[]);
      return true;
   }
   this.Validv_Relestfinid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vRELESTFINID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Movestfinid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMOVESTFINID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movestfincalculoordem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVESTFINCALCULOORDEM");
         this.AnyError  = 0;
         if ( (0==this.A9444MovEstFinCalculoOrdem) )
         {
            try {
               gxballoon.setError("Informe a ordem da parametrização");
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
   this.Valid_Movestfincalculooperacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVESTFINCALCULOOPERACAO");
         this.AnyError  = 0;
         if ( (""==this.A9445MovEstFinCalculoOperacao) )
         {
            try {
               gxballoon.setError("Informe o tipo de cálculo");
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
   this.e12dl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13dl2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14dl709_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15dl709_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,38,40,43,45,48,51,53,55,64,65,66,67,69];
   this.GXLastCtrlId =69;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE4",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Relestfinid,isvalid:null,rgrid:[],fld:"vRELESTFINID",gxz:"ZV22RelEstFinId",gxold:"OV22RelEstFinId",gxvar:"AV22RelEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22RelEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22RelEstFinId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRELESTFINID",gx.O.AV22RelEstFinId,0)},c2v:function(){gx.O.AV22RelEstFinId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRELESTFINID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRELESTFINDESCRICAO",gxz:"ZV23RelEstFinDescricao",gxold:"OV23RelEstFinDescricao",gxvar:"AV23RelEstFinDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23RelEstFinDescricao=Value},v2z:function(Value){gx.O.ZV23RelEstFinDescricao=Value},v2c:function(){gx.fn.setControlValue("vRELESTFINDESCRICAO",gx.O.AV23RelEstFinDescricao,0)},c2v:function(){gx.O.AV23RelEstFinDescricao=this.val()},val:function(){return gx.fn.getControlValue("vRELESTFINDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[24]={fld:"TABLE5",grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Movestfinid,isvalid:null,rgrid:[],fld:"vMOVESTFINID",gxz:"ZV19MovEstFinId",gxold:"OV19MovEstFinId",gxvar:"AV19MovEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19MovEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19MovEstFinId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINID",gx.O.AV19MovEstFinId,0)},c2v:function(){gx.O.AV19MovEstFinId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINDESCRICAO",gxz:"ZV24MovEstFinDescricao",gxold:"OV24MovEstFinDescricao",gxvar:"AV24MovEstFinDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24MovEstFinDescricao=Value},v2z:function(Value){gx.O.ZV24MovEstFinDescricao=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINDESCRICAO",gx.O.AV24MovEstFinDescricao,0)},c2v:function(){gx.O.AV24MovEstFinDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Movestfincalculoseq,isvalid:null,rgrid:[],fld:"MOVESTFINCALCULOSEQ",gxz:"Z9448MovEstFinCalculoSeq",gxold:"O9448MovEstFinCalculoSeq",gxvar:"A9448MovEstFinCalculoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9448MovEstFinCalculoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9448MovEstFinCalculoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVESTFINCALCULOSEQ",gx.O.A9448MovEstFinCalculoSeq,0)},c2v:function(){gx.O.A9448MovEstFinCalculoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVESTFINCALCULOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movestfincalculoordem,isvalid:null,rgrid:[],fld:"MOVESTFINCALCULOORDEM",gxz:"Z9444MovEstFinCalculoOrdem",gxold:"O9444MovEstFinCalculoOrdem",gxvar:"A9444MovEstFinCalculoOrdem",ucs:[],op:[40],ip:[40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9444MovEstFinCalculoOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9444MovEstFinCalculoOrdem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVESTFINCALCULOORDEM",gx.O.A9444MovEstFinCalculoOrdem,0)},c2v:function(){gx.O.A9444MovEstFinCalculoOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVESTFINCALCULOORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movestfincalculooperacao,isvalid:null,rgrid:[],fld:"MOVESTFINCALCULOOPERACAO",gxz:"Z9445MovEstFinCalculoOperacao",gxold:"O9445MovEstFinCalculoOperacao",gxvar:"A9445MovEstFinCalculoOperacao",ucs:[],op:[45],ip:[45],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9445MovEstFinCalculoOperacao=Value},v2z:function(Value){gx.O.Z9445MovEstFinCalculoOperacao=Value},v2c:function(){gx.fn.setComboBoxValue("MOVESTFINCALCULOOPERACAO",gx.O.A9445MovEstFinCalculoOperacao)},c2v:function(){gx.O.A9445MovEstFinCalculoOperacao=this.val()},val:function(){return gx.fn.getControlValue("MOVESTFINCALCULOOPERACAO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TABLE6",grid:0};
   GXValidFnc[51]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINCALCULOUSUARIOALT",gxz:"Z9446MovEstFinCalculoUsuarioAlt",gxold:"O9446MovEstFinCalculoUsuarioAlt",gxvar:"A9446MovEstFinCalculoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9446MovEstFinCalculoUsuarioAlt=Value},v2z:function(Value){gx.O.Z9446MovEstFinCalculoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MOVESTFINCALCULOUSUARIOALT",gx.O.A9446MovEstFinCalculoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9446MovEstFinCalculoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MOVESTFINCALCULOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[55]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINCALCULODATAHORAALT",gxz:"Z9447MovEstFinCalculoDataHoraAlt",gxold:"O9447MovEstFinCalculoDataHoraAlt",gxvar:"A9447MovEstFinCalculoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9447MovEstFinCalculoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9447MovEstFinCalculoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MOVESTFINCALCULODATAHORAALT",gx.O.A9447MovEstFinCalculoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9447MovEstFinCalculoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MOVESTFINCALCULODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[64]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movestfinid,isvalid:null,rgrid:[],fld:"MOVESTFINID",gxz:"Z9443MovEstFinId",gxold:"O9443MovEstFinId",gxvar:"A9443MovEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9443MovEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9443MovEstFinId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVESTFINID",gx.O.A9443MovEstFinId,0)},c2v:function(){gx.O.A9443MovEstFinId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVESTFINID",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Relestfinempresaid,isvalid:null,rgrid:[],fld:"RELESTFINEMPRESAID",gxz:"Z9547RelEstFinEmpresaId",gxold:"O9547RelEstFinEmpresaId",gxvar:"A9547RelEstFinEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9547RelEstFinEmpresaId=Value},v2z:function(Value){gx.O.Z9547RelEstFinEmpresaId=Value},v2c:function(){gx.fn.setControlValue("RELESTFINEMPRESAID",gx.O.A9547RelEstFinEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9547RelEstFinEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("RELESTFINEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[67]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Relestfinid,isvalid:null,rgrid:[],fld:"RELESTFINID",gxz:"Z9548RelEstFinId",gxold:"O9548RelEstFinId",gxvar:"A9548RelEstFinId",ucs:[],op:[],ip:[65,67,66],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9548RelEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9548RelEstFinId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RELESTFINID",gx.O.A9548RelEstFinId,0)},c2v:function(){gx.O.A9548RelEstFinId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RELESTFINID",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"BTNHELP",grid:0};
   this.AV22RelEstFinId = 0 ;
   this.ZV22RelEstFinId = 0 ;
   this.OV22RelEstFinId = 0 ;
   this.AV23RelEstFinDescricao = "" ;
   this.ZV23RelEstFinDescricao = "" ;
   this.OV23RelEstFinDescricao = "" ;
   this.AV19MovEstFinId = 0 ;
   this.ZV19MovEstFinId = 0 ;
   this.OV19MovEstFinId = 0 ;
   this.AV24MovEstFinDescricao = "" ;
   this.ZV24MovEstFinDescricao = "" ;
   this.OV24MovEstFinDescricao = "" ;
   this.A9448MovEstFinCalculoSeq = 0 ;
   this.Z9448MovEstFinCalculoSeq = 0 ;
   this.O9448MovEstFinCalculoSeq = 0 ;
   this.A9444MovEstFinCalculoOrdem = 0 ;
   this.Z9444MovEstFinCalculoOrdem = 0 ;
   this.O9444MovEstFinCalculoOrdem = 0 ;
   this.A9445MovEstFinCalculoOperacao = "" ;
   this.Z9445MovEstFinCalculoOperacao = "" ;
   this.O9445MovEstFinCalculoOperacao = "" ;
   this.A9446MovEstFinCalculoUsuarioAlt = "" ;
   this.Z9446MovEstFinCalculoUsuarioAlt = "" ;
   this.O9446MovEstFinCalculoUsuarioAlt = "" ;
   this.A9447MovEstFinCalculoDataHoraAlt = gx.date.nullDate() ;
   this.Z9447MovEstFinCalculoDataHoraAlt = gx.date.nullDate() ;
   this.O9447MovEstFinCalculoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A9443MovEstFinId = 0 ;
   this.Z9443MovEstFinId = 0 ;
   this.O9443MovEstFinId = 0 ;
   this.A9547RelEstFinEmpresaId = "" ;
   this.Z9547RelEstFinEmpresaId = "" ;
   this.O9547RelEstFinEmpresaId = "" ;
   this.A9548RelEstFinId = 0 ;
   this.Z9548RelEstFinId = 0 ;
   this.O9548RelEstFinId = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV25Pgmname = "" ;
   this.AV26Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20SnAlterou = "" ;
   this.AV22RelEstFinId = 0 ;
   this.AV23RelEstFinDescricao = "" ;
   this.AV19MovEstFinId = 0 ;
   this.AV24MovEstFinDescricao = "" ;
   this.AV21MovEstFinCalculoSeq = 0 ;
   this.A9547RelEstFinEmpresaId = "" ;
   this.A9548RelEstFinId = 0 ;
   this.A9443MovEstFinId = 0 ;
   this.A9448MovEstFinCalculoSeq = 0 ;
   this.A9446MovEstFinCalculoUsuarioAlt = "" ;
   this.A9447MovEstFinCalculoDataHoraAlt = gx.date.nullDate() ;
   this.A9444MovEstFinCalculoOrdem = 0 ;
   this.A9445MovEstFinCalculoOperacao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12dl2_client": ["'FECHAR'", true] ,"e13dl2_client": ["AFTER TRN", true] ,"e14dl709_client": ["ENTER", true] ,"e15dl709_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV22RelEstFinId',fld:'vRELESTFINID'},{av:'AV23RelEstFinDescricao',fld:'vRELESTFINDESCRICAO'},{av:'AV19MovEstFinId',fld:'vMOVESTFINID'},{av:'AV24MovEstFinDescricao',fld:'vMOVESTFINDESCRICAO'},{av:'AV21MovEstFinCalculoSeq',fld:'vMOVESTFINCALCULOSEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22RelEstFinId',fld:'vRELESTFINID'},{av:'AV23RelEstFinDescricao',fld:'vRELESTFINDESCRICAO'},{av:'AV19MovEstFinId',fld:'vMOVESTFINID'},{av:'AV24MovEstFinDescricao',fld:'vMOVESTFINDESCRICAO'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV21MovEstFinCalculoSeq", "vMOVESTFINCALCULOSEQ", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 709 ]= ["O9445MovEstFinCalculoOperacao","O9444MovEstFinCalculoOrdem"] ;
});
gx.setParentObj(new tmovestfincalculo());
