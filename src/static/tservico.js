/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:57.87
*/
gx.evt.autoSkip = false;
gx.define('tservico', false, function () {
   this.ServerClass =  "tservico" ;
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
      this.AV18ServicoCodigo=gx.fn.getIntegerValue("vSERVICOCODIGO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2980ListaServicoDescricao=gx.fn.getControlValue("LISTASERVICODESCRICAO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Servicocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SERVICOCODIGO");
         this.AnyError  = 0;

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
      try {
         var gxballoon = gx.util.balloon.getNew("SERVICOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Servicodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SERVICODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8622ServicoDescricao) )
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
   this.Valid_Listaservicoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Listaservicoid",["gx.O.A2983ListaServicoId", "gx.O.A2980ListaServicoDescricao", "gx.O.AV20ListaServicoDescricao"],["O2980ListaServicoDescricao", "A2980ListaServicoDescricao", "AV20ListaServicoDescricao"]);
      return true;
   }
   this.e12ce2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ce2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14ce641_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ce641_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,18,20,23,25,26,29,32,34,36,45,47,48];
   this.GXLastCtrlId =48;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Servicocodigo,isvalid:null,rgrid:[],fld:"SERVICOCODIGO",gxz:"Z8626ServicoCodigo",gxold:"O8626ServicoCodigo",gxvar:"A8626ServicoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8626ServicoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8626ServicoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SERVICOCODIGO",gx.O.A8626ServicoCodigo,0)},c2v:function(){gx.O.A8626ServicoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SERVICOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Servicoempresaid,isvalid:null,rgrid:[],fld:"SERVICOEMPRESAID",gxz:"Z8625ServicoEmpresaId",gxold:"O8625ServicoEmpresaId",gxvar:"A8625ServicoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8625ServicoEmpresaId=Value},v2z:function(Value){gx.O.Z8625ServicoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SERVICOEMPRESAID",gx.O.A8625ServicoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8625ServicoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SERVICOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Servicodescricao,isvalid:null,rgrid:[],fld:"SERVICODESCRICAO",gxz:"Z8622ServicoDescricao",gxold:"O8622ServicoDescricao",gxvar:"A8622ServicoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8622ServicoDescricao=Value},v2z:function(Value){gx.O.Z8622ServicoDescricao=Value},v2c:function(){gx.fn.setControlValue("SERVICODESCRICAO",gx.O.A8622ServicoDescricao,0)},c2v:function(){gx.O.A8622ServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("SERVICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicoid,isvalid:null,rgrid:[],fld:"LISTASERVICOID",gxz:"Z2983ListaServicoId",gxold:"O2983ListaServicoId",gxvar:"A2983ListaServicoId",ucs:[],op:[25,26],ip:[26,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2983ListaServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2983ListaServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LISTASERVICOID",gx.O.A2983ListaServicoId,0)},c2v:function(){gx.O.A2983ListaServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LISTASERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLISTASERVICODESCRICAO",gxz:"ZV20ListaServicoDescricao",gxold:"OV20ListaServicoDescricao",gxvar:"AV20ListaServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ListaServicoDescricao=Value},v2z:function(Value){gx.O.ZV20ListaServicoDescricao=Value},v2c:function(){gx.fn.setControlValue("vLISTASERVICODESCRICAO",gx.O.AV20ListaServicoDescricao,0)},c2v:function(){gx.O.AV20ListaServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vLISTASERVICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE5",grid:0};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOUSUARIOALT",gxz:"Z8623ServicoUsuarioAlt",gxold:"O8623ServicoUsuarioAlt",gxvar:"A8623ServicoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8623ServicoUsuarioAlt=Value},v2z:function(Value){gx.O.Z8623ServicoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SERVICOUSUARIOALT",gx.O.A8623ServicoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8623ServicoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SERVICOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[36]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SERVICODATAHORAALT",gxz:"Z8624ServicoDataHoraAlt",gxold:"O8624ServicoDataHoraAlt",gxvar:"A8624ServicoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8624ServicoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8624ServicoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SERVICODATAHORAALT",gx.O.A8624ServicoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8624ServicoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SERVICODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[48]={fld:"PROMPT_2983",grid:641};
   this.A8626ServicoCodigo = 0 ;
   this.Z8626ServicoCodigo = 0 ;
   this.O8626ServicoCodigo = 0 ;
   this.A8625ServicoEmpresaId = "" ;
   this.Z8625ServicoEmpresaId = "" ;
   this.O8625ServicoEmpresaId = "" ;
   this.A8622ServicoDescricao = "" ;
   this.Z8622ServicoDescricao = "" ;
   this.O8622ServicoDescricao = "" ;
   this.A2983ListaServicoId = 0 ;
   this.Z2983ListaServicoId = 0 ;
   this.O2983ListaServicoId = 0 ;
   this.AV20ListaServicoDescricao = "" ;
   this.ZV20ListaServicoDescricao = "" ;
   this.OV20ListaServicoDescricao = "" ;
   this.A8623ServicoUsuarioAlt = "" ;
   this.Z8623ServicoUsuarioAlt = "" ;
   this.O8623ServicoUsuarioAlt = "" ;
   this.A8624ServicoDataHoraAlt = gx.date.nullDate() ;
   this.Z8624ServicoDataHoraAlt = gx.date.nullDate() ;
   this.O8624ServicoDataHoraAlt = gx.date.nullDate() ;
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
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18ServicoCodigo = 0 ;
   this.A8625ServicoEmpresaId = "" ;
   this.A8626ServicoCodigo = 0 ;
   this.AV20ListaServicoDescricao = "" ;
   this.A8623ServicoUsuarioAlt = "" ;
   this.A8624ServicoDataHoraAlt = gx.date.nullDate() ;
   this.A8622ServicoDescricao = "" ;
   this.A2983ListaServicoId = 0 ;
   this.A2980ListaServicoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12ce2_client": ["'FECHAR'", true] ,"e13ce2_client": ["AFTER TRN", true] ,"e14ce641_client": ["ENTER", true] ,"e15ce641_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_2983", [25]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ServicoCodigo", "vSERVICOCODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2980ListaServicoDescricao", "LISTASERVICODESCRICAO", 0, "svchar");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 641 ]= ["O2980ListaServicoDescricao","O2983ListaServicoId","O8622ServicoDescricao","O8626ServicoCodigo","O8625ServicoEmpresaId"] ;
});
gx.setParentObj(new tservico());
