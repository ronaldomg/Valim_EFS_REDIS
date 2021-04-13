/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:16:48.93
*/
gx.evt.autoSkip = false;
gx.define('tmovestfin', false, function () {
   this.ServerClass =  "tmovestfin" ;
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
      this.A9548RelEstFinId=gx.fn.getIntegerValue("RELESTFINID",'.') ;
      this.AV19MovEstFinId=gx.fn.getIntegerValue("vMOVESTFINID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV20PrecoEmpresaId=gx.fn.getControlValue("vPRECOEMPRESAID") ;
      this.A9437MovEstFinPrecoEmpresaId=gx.fn.getControlValue("MOVESTFINPRECOEMPRESAID") ;
      this.AV23MovEstFinTipo=gx.fn.getIntegerValue("vMOVESTFINTIPO",'.') ;
      this.AV24MovEstFinTipoValor=gx.fn.getControlValue("vMOVESTFINTIPOVALOR") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
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
      gx.ajax.validSrvEvt("dyncall","valid_Relestfinempresaid",["gx.O.A9547RelEstFinEmpresaId", "gx.O.A9548RelEstFinId"],[]);
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
   this.Valid_Movestfindescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVESTFINDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A9433MovEstFinDescricao) )
         {
            try {
               gxballoon.setError("Informe a descrição a ser impressa no relatório");
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
   this.Valid_Movestfinordem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVESTFINORDEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movestfintipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Movestfintipo",["gx.O.A9435MovEstFinTipo", "gx.O.AV23MovEstFinTipo"],["AV23MovEstFinTipo"]);
      return true;
   }
   this.Valid_Movestfintipovalor=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Movestfintipovalor",["gx.O.A9436MovEstFinTipoValor", "gx.O.AV23MovEstFinTipo", "gx.O.AV24MovEstFinTipoValor"],["AV24MovEstFinTipoValor"]);
      return true;
   }
   this.Valid_Movestfinprecoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Movestfinprecoid",["gx.O.AV20PrecoEmpresaId", "gx.O.A9438MovEstFinPrecoId", "gx.O.A9437MovEstFinPrecoEmpresaId", "gx.O.A9439MovEstFinPrecoDescricao"],["A9437MovEstFinPrecoEmpresaId", "A9439MovEstFinPrecoDescricao"]);
      return true;
   }
   this.e12dk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13dk2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14dk708_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15dk708_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,24,26,29,31,34,36,39,41,44,46,47,50,53,55,57,66,67,69,71,72];
   this.GXLastCtrlId =72;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Relestfinid,isvalid:null,rgrid:[],fld:"vRELESTFINID",gxz:"ZV21RelEstFinId",gxold:"OV21RelEstFinId",gxvar:"AV21RelEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21RelEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21RelEstFinId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRELESTFINID",gx.O.AV21RelEstFinId,0)},c2v:function(){gx.O.AV21RelEstFinId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRELESTFINID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRELESTFINDESCRICAO",gxz:"ZV22RelEstFinDescricao",gxold:"OV22RelEstFinDescricao",gxvar:"AV22RelEstFinDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22RelEstFinDescricao=Value},v2z:function(Value){gx.O.ZV22RelEstFinDescricao=Value},v2c:function(){gx.fn.setControlValue("vRELESTFINDESCRICAO",gx.O.AV22RelEstFinDescricao,0)},c2v:function(){gx.O.AV22RelEstFinDescricao=this.val()},val:function(){return gx.fn.getControlValue("vRELESTFINDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Movestfinid,isvalid:null,rgrid:[],fld:"MOVESTFINID",gxz:"Z9443MovEstFinId",gxold:"O9443MovEstFinId",gxvar:"A9443MovEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9443MovEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9443MovEstFinId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVESTFINID",gx.O.A9443MovEstFinId,0)},c2v:function(){gx.O.A9443MovEstFinId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVESTFINID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movestfindescricao,isvalid:null,rgrid:[],fld:"MOVESTFINDESCRICAO",gxz:"Z9433MovEstFinDescricao",gxold:"O9433MovEstFinDescricao",gxvar:"A9433MovEstFinDescricao",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9433MovEstFinDescricao=Value},v2z:function(Value){gx.O.Z9433MovEstFinDescricao=Value},v2c:function(){gx.fn.setControlValue("MOVESTFINDESCRICAO",gx.O.A9433MovEstFinDescricao,0)},c2v:function(){gx.O.A9433MovEstFinDescricao=this.val()},val:function(){return gx.fn.getControlValue("MOVESTFINDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Movestfinordem,isvalid:null,rgrid:[],fld:"MOVESTFINORDEM",gxz:"Z9434MovEstFinOrdem",gxold:"O9434MovEstFinOrdem",gxvar:"A9434MovEstFinOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9434MovEstFinOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9434MovEstFinOrdem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVESTFINORDEM",gx.O.A9434MovEstFinOrdem,0)},c2v:function(){gx.O.A9434MovEstFinOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVESTFINORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movestfintipo,isvalid:null,rgrid:[],fld:"MOVESTFINTIPO",gxz:"Z9435MovEstFinTipo",gxold:"O9435MovEstFinTipo",gxvar:"A9435MovEstFinTipo",ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9435MovEstFinTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9435MovEstFinTipo=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("MOVESTFINTIPO",gx.O.A9435MovEstFinTipo)},c2v:function(){gx.O.A9435MovEstFinTipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVESTFINTIPO",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movestfintipovalor,isvalid:null,rgrid:[],fld:"MOVESTFINTIPOVALOR",gxz:"Z9436MovEstFinTipoValor",gxold:"O9436MovEstFinTipoValor",gxvar:"A9436MovEstFinTipoValor",ucs:[],op:[41],ip:[41],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9436MovEstFinTipoValor=Value},v2z:function(Value){gx.O.Z9436MovEstFinTipoValor=Value},v2c:function(){gx.fn.setComboBoxValue("MOVESTFINTIPOVALOR",gx.O.A9436MovEstFinTipoValor)},c2v:function(){gx.O.A9436MovEstFinTipoValor=this.val()},val:function(){return gx.fn.getControlValue("MOVESTFINTIPOVALOR")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Movestfinprecoid,isvalid:null,rgrid:[],fld:"MOVESTFINPRECOID",gxz:"Z9438MovEstFinPrecoId",gxold:"O9438MovEstFinPrecoId",gxvar:"A9438MovEstFinPrecoId",ucs:[],op:[47],ip:[47,46],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9438MovEstFinPrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9438MovEstFinPrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVESTFINPRECOID",gx.O.A9438MovEstFinPrecoId,0)},c2v:function(){gx.O.A9438MovEstFinPrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVESTFINPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINPRECODESCRICAO",gxz:"Z9439MovEstFinPrecoDescricao",gxold:"O9439MovEstFinPrecoDescricao",gxvar:"A9439MovEstFinPrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9439MovEstFinPrecoDescricao=Value},v2z:function(Value){gx.O.Z9439MovEstFinPrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("MOVESTFINPRECODESCRICAO",gx.O.A9439MovEstFinPrecoDescricao,0)},c2v:function(){gx.O.A9439MovEstFinPrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("MOVESTFINPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   GXValidFnc[53]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINUSUARIOALT",gxz:"Z9440MovEstFinUsuarioAlt",gxold:"O9440MovEstFinUsuarioAlt",gxvar:"A9440MovEstFinUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9440MovEstFinUsuarioAlt=Value},v2z:function(Value){gx.O.Z9440MovEstFinUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MOVESTFINUSUARIOALT",gx.O.A9440MovEstFinUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9440MovEstFinUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MOVESTFINUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[57]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINDATAHORAALT",gxz:"Z9441MovEstFinDataHoraAlt",gxold:"O9441MovEstFinDataHoraAlt",gxvar:"A9441MovEstFinDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9441MovEstFinDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9441MovEstFinDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MOVESTFINDATAHORAALT",gx.O.A9441MovEstFinDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9441MovEstFinDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MOVESTFINDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[66]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Relestfinempresaid,isvalid:null,rgrid:[],fld:"RELESTFINEMPRESAID",gxz:"Z9547RelEstFinEmpresaId",gxold:"O9547RelEstFinEmpresaId",gxvar:"A9547RelEstFinEmpresaId",ucs:[],op:[],ip:[67],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9547RelEstFinEmpresaId=Value},v2z:function(Value){gx.O.Z9547RelEstFinEmpresaId=Value},v2c:function(){gx.fn.setControlValue("RELESTFINEMPRESAID",gx.O.A9547RelEstFinEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9547RelEstFinEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("RELESTFINEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[69]={fld:"BTNHELP",grid:0};
   GXValidFnc[71]={fld:"PROMPT_9438",grid:708};
   GXValidFnc[72]={fld:"PROMPT_9547",grid:708};
   this.AV21RelEstFinId = 0 ;
   this.ZV21RelEstFinId = 0 ;
   this.OV21RelEstFinId = 0 ;
   this.AV22RelEstFinDescricao = "" ;
   this.ZV22RelEstFinDescricao = "" ;
   this.OV22RelEstFinDescricao = "" ;
   this.A9443MovEstFinId = 0 ;
   this.Z9443MovEstFinId = 0 ;
   this.O9443MovEstFinId = 0 ;
   this.A9433MovEstFinDescricao = "" ;
   this.Z9433MovEstFinDescricao = "" ;
   this.O9433MovEstFinDescricao = "" ;
   this.A9434MovEstFinOrdem = 0 ;
   this.Z9434MovEstFinOrdem = 0 ;
   this.O9434MovEstFinOrdem = 0 ;
   this.A9435MovEstFinTipo = 0 ;
   this.Z9435MovEstFinTipo = 0 ;
   this.O9435MovEstFinTipo = 0 ;
   this.A9436MovEstFinTipoValor = "" ;
   this.Z9436MovEstFinTipoValor = "" ;
   this.O9436MovEstFinTipoValor = "" ;
   this.A9438MovEstFinPrecoId = 0 ;
   this.Z9438MovEstFinPrecoId = 0 ;
   this.O9438MovEstFinPrecoId = 0 ;
   this.A9439MovEstFinPrecoDescricao = "" ;
   this.Z9439MovEstFinPrecoDescricao = "" ;
   this.O9439MovEstFinPrecoDescricao = "" ;
   this.A9440MovEstFinUsuarioAlt = "" ;
   this.Z9440MovEstFinUsuarioAlt = "" ;
   this.O9440MovEstFinUsuarioAlt = "" ;
   this.A9441MovEstFinDataHoraAlt = gx.date.nullDate() ;
   this.Z9441MovEstFinDataHoraAlt = gx.date.nullDate() ;
   this.O9441MovEstFinDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A9547RelEstFinEmpresaId = "" ;
   this.Z9547RelEstFinEmpresaId = "" ;
   this.O9547RelEstFinEmpresaId = "" ;
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
   this.AV20PrecoEmpresaId = "" ;
   this.AV18SnAlterou = "" ;
   this.AV21RelEstFinId = 0 ;
   this.AV22RelEstFinDescricao = "" ;
   this.AV19MovEstFinId = 0 ;
   this.A9547RelEstFinEmpresaId = "" ;
   this.A9548RelEstFinId = 0 ;
   this.A9443MovEstFinId = 0 ;
   this.A9437MovEstFinPrecoEmpresaId = "" ;
   this.AV23MovEstFinTipo = 0 ;
   this.AV24MovEstFinTipoValor = "" ;
   this.A9434MovEstFinOrdem = 0 ;
   this.A9440MovEstFinUsuarioAlt = "" ;
   this.A9441MovEstFinDataHoraAlt = gx.date.nullDate() ;
   this.A9433MovEstFinDescricao = "" ;
   this.A9435MovEstFinTipo = 0 ;
   this.A9436MovEstFinTipoValor = "" ;
   this.A9438MovEstFinPrecoId = 0 ;
   this.A9439MovEstFinPrecoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12dk2_client": ["'FECHAR'", true] ,"e13dk2_client": ["AFTER TRN", true] ,"e14dk708_client": ["ENTER", true] ,"e15dk708_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV21RelEstFinId',fld:'vRELESTFINID'},{av:'AV22RelEstFinDescricao',fld:'vRELESTFINDESCRICAO'},{av:'AV19MovEstFinId',fld:'vMOVESTFINID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV21RelEstFinId',fld:'vRELESTFINID'},{av:'AV22RelEstFinDescricao',fld:'vRELESTFINDESCRICAO'}],[{av:'AV22RelEstFinDescricao',fld:'vRELESTFINDESCRICAO'},{av:'AV21RelEstFinId',fld:'vRELESTFINID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_9438", [46]);
   this.setPrompt("PROMPT_9547", [67]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A9548RelEstFinId", "RELESTFINID", 0, "int");
   this.setVCMap("AV19MovEstFinId", "vMOVESTFINID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20PrecoEmpresaId", "vPRECOEMPRESAID", 0, "char");
   this.setVCMap("A9437MovEstFinPrecoEmpresaId", "MOVESTFINPRECOEMPRESAID", 0, "char");
   this.setVCMap("AV23MovEstFinTipo", "vMOVESTFINTIPO", 0, "int");
   this.setVCMap("AV24MovEstFinTipoValor", "vMOVESTFINTIPOVALOR", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 708 ]= ["O9438MovEstFinPrecoId","O9436MovEstFinTipoValor","O9435MovEstFinTipo","O9434MovEstFinOrdem","O9433MovEstFinDescricao"] ;
});
gx.setParentObj(new tmovestfin());
