/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:21:8.55
*/
gx.evt.autoSkip = false;
gx.define('tnbs', false, function () {
   this.ServerClass =  "tnbs" ;
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
      this.AV20NBSCod=gx.fn.getIntegerValue("vNBSCOD",'.') ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV19SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Nbscodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NBSCODIGO");
         this.AnyError  = 0;
         if ( (0==this.A7634NBSCodigo) )
         {
            try {
               gxballoon.setError("Informe o Código");
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
   this.Valid_Nbsdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NBSDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A7629NBSDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
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
   this.Valid_Nbsaliquotanacional=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NBSALIQUOTANACIONAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nbsaliquotaimportacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NBSALIQUOTAIMPORTACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12aw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13aw2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14aw577_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15aw577_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,36,38,40,47,50,51,53];
   this.GXLastCtrlId =53;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nbscodigo,isvalid:null,rgrid:[],fld:"NBSCODIGO",gxz:"Z7634NBSCodigo",gxold:"O7634NBSCodigo",gxvar:"A7634NBSCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7634NBSCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7634NBSCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NBSCODIGO",gx.O.A7634NBSCodigo,0)},c2v:function(){gx.O.A7634NBSCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NBSCODIGO",'.')},nac:function(){return !(0==this.AV20NBSCod)}};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Nbsdescricao,isvalid:null,rgrid:[],fld:"NBSDESCRICAO",gxz:"Z7629NBSDescricao",gxold:"O7629NBSDescricao",gxvar:"A7629NBSDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7629NBSDescricao=Value},v2z:function(Value){gx.O.Z7629NBSDescricao=Value},v2c:function(){gx.fn.setControlValue("NBSDESCRICAO",gx.O.A7629NBSDescricao,0)},c2v:function(){gx.O.A7629NBSDescricao=this.val()},val:function(){return gx.fn.getControlValue("NBSDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nbsaliquotanacional,isvalid:null,rgrid:[],fld:"NBSALIQUOTANACIONAL",gxz:"Z7630NBSAliquotaNacional",gxold:"O7630NBSAliquotaNacional",gxvar:"A7630NBSAliquotaNacional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7630NBSAliquotaNacional=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7630NBSAliquotaNacional=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NBSALIQUOTANACIONAL",gx.O.A7630NBSAliquotaNacional,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7630NBSAliquotaNacional=this.val()},val:function(){return gx.fn.getDecimalValue("NBSALIQUOTANACIONAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nbsaliquotaimportacao,isvalid:null,rgrid:[],fld:"NBSALIQUOTAIMPORTACAO",gxz:"Z7631NBSAliquotaImportacao",gxold:"O7631NBSAliquotaImportacao",gxvar:"A7631NBSAliquotaImportacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7631NBSAliquotaImportacao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7631NBSAliquotaImportacao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NBSALIQUOTAIMPORTACAO",gx.O.A7631NBSAliquotaImportacao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7631NBSAliquotaImportacao=this.val()},val:function(){return gx.fn.getDecimalValue("NBSALIQUOTAIMPORTACAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NBSUSUARIOALT",gxz:"Z7632NBSUsuarioAlt",gxold:"O7632NBSUsuarioAlt",gxvar:"A7632NBSUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7632NBSUsuarioAlt=Value},v2z:function(Value){gx.O.Z7632NBSUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("NBSUSUARIOALT",gx.O.A7632NBSUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7632NBSUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("NBSUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[40]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NBSDATAHORAALT",gxz:"Z7633NBSDataHoraAlt",gxold:"O7633NBSDataHoraAlt",gxvar:"A7633NBSDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7633NBSDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7633NBSDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NBSDATAHORAALT",gx.O.A7633NBSDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7633NBSDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NBSDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNBSCODIGO",gxz:"ZV21NBSCodigo",gxold:"OV21NBSCodigo",gxvar:"AV21NBSCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21NBSCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21NBSCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNBSCODIGO",gx.O.AV21NBSCodigo,0)},c2v:function(){gx.O.AV21NBSCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNBSCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"JSVAL", format:2,grid:0};
   GXValidFnc[53]={fld:"BTNHELP",grid:0};
   this.A7634NBSCodigo = 0 ;
   this.Z7634NBSCodigo = 0 ;
   this.O7634NBSCodigo = 0 ;
   this.A7629NBSDescricao = "" ;
   this.Z7629NBSDescricao = "" ;
   this.O7629NBSDescricao = "" ;
   this.A7630NBSAliquotaNacional = 0 ;
   this.Z7630NBSAliquotaNacional = 0 ;
   this.O7630NBSAliquotaNacional = 0 ;
   this.A7631NBSAliquotaImportacao = 0 ;
   this.Z7631NBSAliquotaImportacao = 0 ;
   this.O7631NBSAliquotaImportacao = 0 ;
   this.A7632NBSUsuarioAlt = "" ;
   this.Z7632NBSUsuarioAlt = "" ;
   this.O7632NBSUsuarioAlt = "" ;
   this.A7633NBSDataHoraAlt = gx.date.nullDate() ;
   this.Z7633NBSDataHoraAlt = gx.date.nullDate() ;
   this.O7633NBSDataHoraAlt = gx.date.nullDate() ;
   this.AV21NBSCodigo = 0 ;
   this.ZV21NBSCodigo = 0 ;
   this.OV21NBSCodigo = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV18SnAlterou = "" ;
   this.AV20NBSCod = 0 ;
   this.AV19SnPrompt = "" ;
   this.A7634NBSCodigo = 0 ;
   this.A7632NBSUsuarioAlt = "" ;
   this.A7633NBSDataHoraAlt = gx.date.nullDate() ;
   this.A7629NBSDescricao = "" ;
   this.A7630NBSAliquotaNacional = 0 ;
   this.A7631NBSAliquotaImportacao = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12aw2_client": ["'FECHAR'", true] ,"e13aw2_client": ["AFTER TRN", true] ,"e14aw577_client": ["ENTER", true] ,"e15aw577_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20NBSCod',fld:'vNBSCOD'},{av:'AV19SnPrompt',fld:'vSNPROMPT'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV19SnPrompt',fld:'vSNPROMPT'},{av:'A7634NBSCodigo',fld:'NBSCODIGO'}],[{av:'AV21NBSCodigo',fld:'vNBSCODIGO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV19SnPrompt',fld:'vSNPROMPT'},{av:'A7634NBSCodigo',fld:'NBSCODIGO'}],[{av:'AV21NBSCodigo',fld:'vNBSCODIGO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20NBSCod", "vNBSCOD", 0, "int");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV19SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 577 ]= ["O7631NBSAliquotaImportacao","O7630NBSAliquotaNacional","O7629NBSDescricao","O7634NBSCodigo"] ;
});
gx.setParentObj(new tnbs());
