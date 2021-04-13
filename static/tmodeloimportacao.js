/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:17:30.41
*/
gx.evt.autoSkip = false;
gx.define('tmodeloimportacao', false, function () {
   this.ServerClass =  "tmodeloimportacao" ;
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
      this.AV18ImportacaoModelo=gx.fn.getIntegerValue("vIMPORTACAOMODELO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5915ImportacaoModeloEmpresaId=gx.fn.getControlValue("IMPORTACAOMODELOEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Importacaomodelo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPORTACAOMODELO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Importacaomodelodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPORTACAOMODELODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A5917ImportacaoModeloDescricao) )
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
   this.Valid_Importacaotiposeparador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPORTACAOTIPOSEPARADOR");
         this.AnyError  = 0;
         if ( (""==this.A5924ImportacaoTipoSeparador) )
         {
            try {
               gxballoon.setError("Informe o tipo de separador");
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
   this.Valid_Importacaotipodelimitador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPORTACAOTIPODELIMITADOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12962_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13962_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1496491_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1596491_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,34,37,40,42,44,53,55];
   this.GXLastCtrlId =55;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Importacaomodelo,isvalid:null,rgrid:[],fld:"IMPORTACAOMODELO",gxz:"Z5916ImportacaoModelo",gxold:"O5916ImportacaoModelo",gxvar:"A5916ImportacaoModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5916ImportacaoModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5916ImportacaoModelo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPORTACAOMODELO",gx.O.A5916ImportacaoModelo,0)},c2v:function(){gx.O.A5916ImportacaoModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPORTACAOMODELO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Importacaomodelodescricao,isvalid:null,rgrid:[],fld:"IMPORTACAOMODELODESCRICAO",gxz:"Z5917ImportacaoModeloDescricao",gxold:"O5917ImportacaoModeloDescricao",gxvar:"A5917ImportacaoModeloDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5917ImportacaoModeloDescricao=Value},v2z:function(Value){gx.O.Z5917ImportacaoModeloDescricao=Value},v2c:function(){gx.fn.setControlValue("IMPORTACAOMODELODESCRICAO",gx.O.A5917ImportacaoModeloDescricao,0)},c2v:function(){gx.O.A5917ImportacaoModeloDescricao=this.val()},val:function(){return gx.fn.getControlValue("IMPORTACAOMODELODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Importacaotiposeparador,isvalid:null,rgrid:[],fld:"IMPORTACAOTIPOSEPARADOR",gxz:"Z5924ImportacaoTipoSeparador",gxold:"O5924ImportacaoTipoSeparador",gxvar:"A5924ImportacaoTipoSeparador",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5924ImportacaoTipoSeparador=Value},v2z:function(Value){gx.O.Z5924ImportacaoTipoSeparador=Value},v2c:function(){gx.fn.setComboBoxValue("IMPORTACAOTIPOSEPARADOR",gx.O.A5924ImportacaoTipoSeparador)},c2v:function(){gx.O.A5924ImportacaoTipoSeparador=this.val()},val:function(){return gx.fn.getControlValue("IMPORTACAOTIPOSEPARADOR")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Importacaotipodelimitador,isvalid:null,rgrid:[],fld:"IMPORTACAOTIPODELIMITADOR",gxz:"Z5925ImportacaoTipoDelimitador",gxold:"O5925ImportacaoTipoDelimitador",gxvar:"A5925ImportacaoTipoDelimitador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5925ImportacaoTipoDelimitador=Value},v2z:function(Value){gx.O.Z5925ImportacaoTipoDelimitador=Value},v2c:function(){gx.fn.setComboBoxValue("IMPORTACAOTIPODELIMITADOR",gx.O.A5925ImportacaoTipoDelimitador)},c2v:function(){gx.O.A5925ImportacaoTipoDelimitador=this.val()},val:function(){return gx.fn.getControlValue("IMPORTACAOTIPODELIMITADOR")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOATIVO",gxz:"Z5926ImportacaoAtivo",gxold:"O5926ImportacaoAtivo",gxvar:"A5926ImportacaoAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A5926ImportacaoAtivo=Value},v2z:function(Value){gx.O.Z5926ImportacaoAtivo=Value},v2c:function(){gx.fn.setCheckBoxValue("IMPORTACAOATIVO",gx.O.A5926ImportacaoAtivo,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5926ImportacaoAtivo=this.val()},val:function(){return gx.fn.getControlValue("IMPORTACAOATIVO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[37]={fld:"TABLE4",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOMODELOUSUARIOALT",gxz:"Z5927ImportacaoModeloUsuarioAlt",gxold:"O5927ImportacaoModeloUsuarioAlt",gxvar:"A5927ImportacaoModeloUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5927ImportacaoModeloUsuarioAlt=Value},v2z:function(Value){gx.O.Z5927ImportacaoModeloUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("IMPORTACAOMODELOUSUARIOALT",gx.O.A5927ImportacaoModeloUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5927ImportacaoModeloUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("IMPORTACAOMODELOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOMODELODATAHORAALT",gxz:"Z5928ImportacaoModeloDataHoraAlt",gxold:"O5928ImportacaoModeloDataHoraAlt",gxvar:"A5928ImportacaoModeloDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5928ImportacaoModeloDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5928ImportacaoModeloDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("IMPORTACAOMODELODATAHORAALT",gx.O.A5928ImportacaoModeloDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5928ImportacaoModeloDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("IMPORTACAOMODELODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[53]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"BTNHELP",grid:0};
   this.A5916ImportacaoModelo = 0 ;
   this.Z5916ImportacaoModelo = 0 ;
   this.O5916ImportacaoModelo = 0 ;
   this.A5917ImportacaoModeloDescricao = "" ;
   this.Z5917ImportacaoModeloDescricao = "" ;
   this.O5917ImportacaoModeloDescricao = "" ;
   this.A5924ImportacaoTipoSeparador = "" ;
   this.Z5924ImportacaoTipoSeparador = "" ;
   this.O5924ImportacaoTipoSeparador = "" ;
   this.A5925ImportacaoTipoDelimitador = "" ;
   this.Z5925ImportacaoTipoDelimitador = "" ;
   this.O5925ImportacaoTipoDelimitador = "" ;
   this.A5926ImportacaoAtivo = "" ;
   this.Z5926ImportacaoAtivo = "" ;
   this.O5926ImportacaoAtivo = "" ;
   this.A5927ImportacaoModeloUsuarioAlt = "" ;
   this.Z5927ImportacaoModeloUsuarioAlt = "" ;
   this.O5927ImportacaoModeloUsuarioAlt = "" ;
   this.A5928ImportacaoModeloDataHoraAlt = gx.date.nullDate() ;
   this.Z5928ImportacaoModeloDataHoraAlt = gx.date.nullDate() ;
   this.O5928ImportacaoModeloDataHoraAlt = gx.date.nullDate() ;
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
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18ImportacaoModelo = 0 ;
   this.A5915ImportacaoModeloEmpresaId = "" ;
   this.A5916ImportacaoModelo = 0 ;
   this.A5927ImportacaoModeloUsuarioAlt = "" ;
   this.A5928ImportacaoModeloDataHoraAlt = gx.date.nullDate() ;
   this.A5917ImportacaoModeloDescricao = "" ;
   this.A5924ImportacaoTipoSeparador = "" ;
   this.A5925ImportacaoTipoDelimitador = "" ;
   this.A5926ImportacaoAtivo = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12962_client": ["'FECHAR'", true] ,"e13962_client": ["AFTER TRN", true] ,"e1496491_client": ["ENTER", true] ,"e1596491_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ImportacaoModelo", "vIMPORTACAOMODELO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5915ImportacaoModeloEmpresaId", "IMPORTACAOMODELOEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 491 ]= ["O5924ImportacaoTipoSeparador","O5925ImportacaoTipoDelimitador","O5916ImportacaoModelo"] ;
});
gx.setParentObj(new tmodeloimportacao());
