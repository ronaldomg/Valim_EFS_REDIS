/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:42:36.6
*/
gx.evt.autoSkip = false;
gx.define('tretencao', false, function () {
   this.ServerClass =  "tretencao" ;
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
      this.AV18RetencaoTipo=gx.fn.getControlValue("vRETENCAOTIPO") ;
      this.AV19RetencaoCodigo=gx.fn.getIntegerValue("vRETENCAOCODIGO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2884RetencaoEmpresaId=gx.fn.getControlValue("RETENCAOEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV27Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV26Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Retencaotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RETENCAOTIPO");
         this.AnyError  = 0;
         if ( (""==this.A2883RetencaoTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Parametrização");
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
   this.Valid_Retencaocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RETENCAOCODIGO");
         this.AnyError  = 0;
         if ( (0==this.A2885RetencaoCodigo) )
         {
            try {
               gxballoon.setError("Informe o Código de Retenção");
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
   this.Valid_Retencaodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RETENCAODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2886RetencaoDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição da Receita");
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
   this.Valid_Retencaotipodata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RETENCAOTIPODATA");
         this.AnyError  = 0;
         if ( (""==this.A2995RetencaoTipoData) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Data de Retenção");
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
   this.e12582_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13582_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1458297_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1558297_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,44,47,50,52,54,63,64,66];
   this.GXLastCtrlId =66;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Retencaotipo,isvalid:null,rgrid:[],fld:"RETENCAOTIPO",gxz:"Z2883RetencaoTipo",gxold:"O2883RetencaoTipo",gxvar:"A2883RetencaoTipo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2883RetencaoTipo=Value},v2z:function(Value){gx.O.Z2883RetencaoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("RETENCAOTIPO",gx.O.A2883RetencaoTipo)},c2v:function(){gx.O.A2883RetencaoTipo=this.val()},val:function(){return gx.fn.getControlValue("RETENCAOTIPO")},nac:function(){return !(""==this.AV18RetencaoTipo)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Retencaocodigo,isvalid:null,rgrid:[],fld:"RETENCAOCODIGO",gxz:"Z2885RetencaoCodigo",gxold:"O2885RetencaoCodigo",gxvar:"A2885RetencaoCodigo",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2885RetencaoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2885RetencaoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RETENCAOCODIGO",gx.O.A2885RetencaoCodigo,0)},c2v:function(){gx.O.A2885RetencaoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RETENCAOCODIGO",'.')},nac:function(){return !(0==this.AV19RetencaoCodigo)}};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Retencaodescricao,isvalid:null,rgrid:[],fld:"RETENCAODESCRICAO",gxz:"Z2886RetencaoDescricao",gxold:"O2886RetencaoDescricao",gxvar:"A2886RetencaoDescricao",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2886RetencaoDescricao=Value},v2z:function(Value){gx.O.Z2886RetencaoDescricao=Value},v2c:function(){gx.fn.setControlValue("RETENCAODESCRICAO",gx.O.A2886RetencaoDescricao,0)},c2v:function(){gx.O.A2886RetencaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("RETENCAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RETENCAOTIPOPESSOA",gxz:"Z3065RetencaoTipoPessoa",gxold:"O3065RetencaoTipoPessoa",gxvar:"A3065RetencaoTipoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3065RetencaoTipoPessoa=Value},v2z:function(Value){gx.O.Z3065RetencaoTipoPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("RETENCAOTIPOPESSOA",gx.O.A3065RetencaoTipoPessoa)},c2v:function(){gx.O.A3065RetencaoTipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("RETENCAOTIPOPESSOA")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Retencaotipodata,isvalid:null,rgrid:[],fld:"RETENCAOTIPODATA",gxz:"Z2995RetencaoTipoData",gxold:"O2995RetencaoTipoData",gxvar:"A2995RetencaoTipoData",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2995RetencaoTipoData=Value},v2z:function(Value){gx.O.Z2995RetencaoTipoData=Value},v2c:function(){gx.fn.setComboBoxValue("RETENCAOTIPODATA",gx.O.A2995RetencaoTipoData)},c2v:function(){gx.O.A2995RetencaoTipoData=this.val()},val:function(){return gx.fn.getControlValue("RETENCAOTIPODATA")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RETENCAOVLRMINREND",gxz:"Z3055RetencaoVlrMinRend",gxold:"O3055RetencaoVlrMinRend",gxvar:"A3055RetencaoVlrMinRend",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3055RetencaoVlrMinRend=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3055RetencaoVlrMinRend=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("RETENCAOVLRMINREND",gx.O.A3055RetencaoVlrMinRend,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3055RetencaoVlrMinRend=this.val()},val:function(){return gx.fn.getDecimalValue("RETENCAOVLRMINREND",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RETENCAOAPENASRETENCAO",gxz:"Z3054RetencaoApenasRetencao",gxold:"O3054RetencaoApenasRetencao",gxvar:"A3054RetencaoApenasRetencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3054RetencaoApenasRetencao=Value},v2z:function(Value){gx.O.Z3054RetencaoApenasRetencao=Value},v2c:function(){gx.fn.setCheckBoxValue("RETENCAOAPENASRETENCAO",gx.O.A3054RetencaoApenasRetencao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3054RetencaoApenasRetencao=this.val()},val:function(){return gx.fn.getControlValue("RETENCAOAPENASRETENCAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RETENCAOUSUARIOALT",gxz:"Z2887RetencaoUsuarioAlt",gxold:"O2887RetencaoUsuarioAlt",gxvar:"A2887RetencaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2887RetencaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2887RetencaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("RETENCAOUSUARIOALT",gx.O.A2887RetencaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2887RetencaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("RETENCAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[54]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RETENCAODATAHORAALT",gxz:"Z2888RetencaoDataHoraAlt",gxold:"O2888RetencaoDataHoraAlt",gxvar:"A2888RetencaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2888RetencaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2888RetencaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("RETENCAODATAHORAALT",gx.O.A2888RetencaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2888RetencaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("RETENCAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[63]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"JS", format:2,grid:0};
   GXValidFnc[66]={fld:"BTNHELP",grid:0};
   this.A2883RetencaoTipo = "" ;
   this.Z2883RetencaoTipo = "" ;
   this.O2883RetencaoTipo = "" ;
   this.A2885RetencaoCodigo = 0 ;
   this.Z2885RetencaoCodigo = 0 ;
   this.O2885RetencaoCodigo = 0 ;
   this.A2886RetencaoDescricao = "" ;
   this.Z2886RetencaoDescricao = "" ;
   this.O2886RetencaoDescricao = "" ;
   this.A3065RetencaoTipoPessoa = "" ;
   this.Z3065RetencaoTipoPessoa = "" ;
   this.O3065RetencaoTipoPessoa = "" ;
   this.A2995RetencaoTipoData = "" ;
   this.Z2995RetencaoTipoData = "" ;
   this.O2995RetencaoTipoData = "" ;
   this.A3055RetencaoVlrMinRend = 0 ;
   this.Z3055RetencaoVlrMinRend = 0 ;
   this.O3055RetencaoVlrMinRend = 0 ;
   this.A3054RetencaoApenasRetencao = "" ;
   this.Z3054RetencaoApenasRetencao = "" ;
   this.O3054RetencaoApenasRetencao = "" ;
   this.A2887RetencaoUsuarioAlt = "" ;
   this.Z2887RetencaoUsuarioAlt = "" ;
   this.O2887RetencaoUsuarioAlt = "" ;
   this.A2888RetencaoDataHoraAlt = gx.date.nullDate() ;
   this.Z2888RetencaoDataHoraAlt = gx.date.nullDate() ;
   this.O2888RetencaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV26Pgmname = "" ;
   this.AV27Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20SnAlterou = "" ;
   this.AV18RetencaoTipo = "" ;
   this.AV19RetencaoCodigo = 0 ;
   this.A2884RetencaoEmpresaId = "" ;
   this.A2883RetencaoTipo = "" ;
   this.A2885RetencaoCodigo = 0 ;
   this.A2887RetencaoUsuarioAlt = "" ;
   this.A2888RetencaoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A2886RetencaoDescricao = "" ;
   this.A3065RetencaoTipoPessoa = "" ;
   this.A2995RetencaoTipoData = "" ;
   this.A3054RetencaoApenasRetencao = "" ;
   this.A3055RetencaoVlrMinRend = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12582_client": ["'FECHAR'", true] ,"e13582_client": ["AFTER TRN", true] ,"e1458297_client": ["ENTER", true] ,"e1558297_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18RetencaoTipo',fld:'vRETENCAOTIPO'},{av:'AV19RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18RetencaoTipo", "vRETENCAOTIPO", 0, "char");
   this.setVCMap("AV19RetencaoCodigo", "vRETENCAOCODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2884RetencaoEmpresaId", "RETENCAOEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV27Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV26Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 297 ]= ["O2886RetencaoDescricao","O2995RetencaoTipoData","O2885RetencaoCodigo","O2883RetencaoTipo"] ;
});
gx.setParentObj(new tretencao());
