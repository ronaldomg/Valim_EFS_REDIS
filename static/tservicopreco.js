/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:25:10.74
*/
gx.evt.autoSkip = false;
gx.define('tservicopreco', false, function () {
   this.ServerClass =  "tservicopreco" ;
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
      this.AV19ServicoCodigo=gx.fn.getIntegerValue("vSERVICOCODIGO",'.') ;
      this.AV18ServicoPrecoData=gx.fn.getDateValue("vSERVICOPRECODATA") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV23SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV30Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV29Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Servicocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SERVICOCODIGO");
         this.AnyError  = 0;
         if ( (0==this.A8626ServicoCodigo) )
         {
            try {
               gxballoon.setError("Informe o código do serviço");
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
   this.Valid_Servicoempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Servicoempresaid",["gx.O.A8625ServicoEmpresaId", "gx.O.A8626ServicoCodigo"],[]);
      return true;
   }
   this.Valid_Servicoprecodata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SERVICOPRECODATA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A8688ServicoPrecoData)==0) )
         {
            try {
               gxballoon.setError("Informe a data inicial");
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
   this.Valid_Servicoprecoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SERVICOPRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Servicoprecodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SERVICOPRECODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8683ServicoPrecoDescricao) )
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
   this.Valid_Servicoprecovlr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SERVICOPRECOVLR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12ck2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ck2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14ck647_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ck647_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,21,22,25,27,30,32,33,36,39,41,43,52,53,55,57];
   this.GXLastCtrlId =57;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Servicoprecodescricao,isvalid:null,rgrid:[],fld:"SERVICOPRECODESCRICAO",gxz:"Z8683ServicoPrecoDescricao",gxold:"O8683ServicoPrecoDescricao",gxvar:"A8683ServicoPrecoDescricao",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8683ServicoPrecoDescricao=Value},v2z:function(Value){gx.O.Z8683ServicoPrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("SERVICOPRECODESCRICAO",gx.O.A8683ServicoPrecoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8683ServicoPrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("SERVICOPRECODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Servicocodigo,isvalid:null,rgrid:[],fld:"SERVICOCODIGO",gxz:"Z8626ServicoCodigo",gxold:"O8626ServicoCodigo",gxvar:"A8626ServicoCodigo",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8626ServicoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8626ServicoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SERVICOCODIGO",gx.O.A8626ServicoCodigo,0)},c2v:function(){gx.O.A8626ServicoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SERVICOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICODESCRICAO",gxz:"ZV20ServicoDescricao",gxold:"OV20ServicoDescricao",gxvar:"AV20ServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ServicoDescricao=Value},v2z:function(Value){gx.O.ZV20ServicoDescricao=Value},v2c:function(){gx.fn.setControlValue("vSERVICODESCRICAO",gx.O.AV20ServicoDescricao,0)},c2v:function(){gx.O.AV20ServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSERVICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Servicoempresaid,isvalid:null,rgrid:[],fld:"SERVICOEMPRESAID",gxz:"Z8625ServicoEmpresaId",gxold:"O8625ServicoEmpresaId",gxvar:"A8625ServicoEmpresaId",ucs:[],op:[],ip:[20,22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8625ServicoEmpresaId=Value},v2z:function(Value){gx.O.Z8625ServicoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SERVICOEMPRESAID",gx.O.A8625ServicoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8625ServicoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SERVICOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Servicoprecodata,isvalid:null,rgrid:[],fld:"SERVICOPRECODATA",gxz:"Z8688ServicoPrecoData",gxold:"O8688ServicoPrecoData",gxvar:"A8688ServicoPrecoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8688ServicoPrecoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8688ServicoPrecoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SERVICOPRECODATA",gx.O.A8688ServicoPrecoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8688ServicoPrecoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SERVICOPRECODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[30]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"decimal",len:9,dec:2,sign:true,pic:"ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Servicoprecovlr,isvalid:null,rgrid:[],fld:"SERVICOPRECOVLR",gxz:"Z8684ServicoPrecoVlr",gxold:"O8684ServicoPrecoVlr",gxvar:"A8684ServicoPrecoVlr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8684ServicoPrecoVlr=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8684ServicoPrecoVlr=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SERVICOPRECOVLR",gx.O.A8684ServicoPrecoVlr,2,',')},c2v:function(){gx.O.A8684ServicoPrecoVlr=this.val()},val:function(){return gx.fn.getDecimalValue("SERVICOPRECOVLR",'.',',')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Servicoprecoempresaid,isvalid:null,rgrid:[],fld:"SERVICOPRECOEMPRESAID",gxz:"Z8687ServicoPrecoEmpresaId",gxold:"O8687ServicoPrecoEmpresaId",gxvar:"A8687ServicoPrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8687ServicoPrecoEmpresaId=Value},v2z:function(Value){gx.O.Z8687ServicoPrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SERVICOPRECOEMPRESAID",gx.O.A8687ServicoPrecoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8687ServicoPrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SERVICOPRECOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[36]={fld:"TABLE7",grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOPRECOUSUALT",gxz:"Z8685ServicoPrecoUsuAlt",gxold:"O8685ServicoPrecoUsuAlt",gxvar:"A8685ServicoPrecoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8685ServicoPrecoUsuAlt=Value},v2z:function(Value){gx.O.Z8685ServicoPrecoUsuAlt=Value},v2c:function(){gx.fn.setControlValue("SERVICOPRECOUSUALT",gx.O.A8685ServicoPrecoUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8685ServicoPrecoUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("SERVICOPRECOUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOPRECODATUSUALT",gxz:"Z8686ServicoPrecoDatUsuAlt",gxold:"O8686ServicoPrecoDatUsuAlt",gxvar:"A8686ServicoPrecoDatUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8686ServicoPrecoDatUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8686ServicoPrecoDatUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SERVICOPRECODATUSUALT",gx.O.A8686ServicoPrecoDatUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8686ServicoPrecoDatUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SERVICOPRECODATUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[52]={fld:"JS", format:2,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"BTNHELP",grid:0};
   GXValidFnc[57]={fld:"PROMPT_8626",grid:647};
   this.A8683ServicoPrecoDescricao = "" ;
   this.Z8683ServicoPrecoDescricao = "" ;
   this.O8683ServicoPrecoDescricao = "" ;
   this.A8626ServicoCodigo = 0 ;
   this.Z8626ServicoCodigo = 0 ;
   this.O8626ServicoCodigo = 0 ;
   this.AV20ServicoDescricao = "" ;
   this.ZV20ServicoDescricao = "" ;
   this.OV20ServicoDescricao = "" ;
   this.A8625ServicoEmpresaId = "" ;
   this.Z8625ServicoEmpresaId = "" ;
   this.O8625ServicoEmpresaId = "" ;
   this.A8688ServicoPrecoData = gx.date.nullDate() ;
   this.Z8688ServicoPrecoData = gx.date.nullDate() ;
   this.O8688ServicoPrecoData = gx.date.nullDate() ;
   this.A8684ServicoPrecoVlr = 0 ;
   this.Z8684ServicoPrecoVlr = 0 ;
   this.O8684ServicoPrecoVlr = 0 ;
   this.A8687ServicoPrecoEmpresaId = "" ;
   this.Z8687ServicoPrecoEmpresaId = "" ;
   this.O8687ServicoPrecoEmpresaId = "" ;
   this.A8685ServicoPrecoUsuAlt = "" ;
   this.Z8685ServicoPrecoUsuAlt = "" ;
   this.O8685ServicoPrecoUsuAlt = "" ;
   this.A8686ServicoPrecoDatUsuAlt = gx.date.nullDate() ;
   this.Z8686ServicoPrecoDatUsuAlt = gx.date.nullDate() ;
   this.O8686ServicoPrecoDatUsuAlt = gx.date.nullDate() ;
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
   this.AV12EmpresaPadrao = "" ;
   this.AV21Entrada = [ ] ;
   this.AV22Saida = [ ] ;
   this.AV23SnAlterou = "" ;
   this.AV19ServicoCodigo = 0 ;
   this.AV18ServicoPrecoData = gx.date.nullDate() ;
   this.A8687ServicoPrecoEmpresaId = "" ;
   this.A8688ServicoPrecoData = gx.date.nullDate() ;
   this.A8626ServicoCodigo = 0 ;
   this.A8625ServicoEmpresaId = "" ;
   this.A8685ServicoPrecoUsuAlt = "" ;
   this.A8686ServicoPrecoDatUsuAlt = gx.date.nullDate() ;
   this.A8683ServicoPrecoDescricao = "" ;
   this.A8684ServicoPrecoVlr = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12ck2_client": ["'FECHAR'", true] ,"e13ck2_client": ["AFTER TRN", true] ,"e14ck647_client": ["ENTER", true] ,"e15ck647_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV18ServicoPrecoData',fld:'vSERVICOPRECODATA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_8626", [20]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19ServicoCodigo", "vSERVICOCODIGO", 0, "int");
   this.setVCMap("AV18ServicoPrecoData", "vSERVICOPRECODATA", 0, "date");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV23SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV30Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV29Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 647 ]= ["O8684ServicoPrecoVlr","O8626ServicoCodigo","O8625ServicoEmpresaId","O8683ServicoPrecoDescricao","O8688ServicoPrecoData","O8687ServicoPrecoEmpresaId"] ;
});
gx.setParentObj(new tservicopreco());
