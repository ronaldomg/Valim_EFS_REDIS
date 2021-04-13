/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:36.84
*/
gx.evt.autoSkip = false;
gx.define('ttipodispendio', false, function () {
   this.ServerClass =  "ttipodispendio" ;
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
      this.AV18TipoDispendioCodigo=gx.fn.getIntegerValue("vTIPODISPENDIOCODIGO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A8152TipoDispendioEmpresaId=gx.fn.getControlValue("TIPODISPENDIOEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tipodispendiocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPODISPENDIOCODIGO");
         this.AnyError  = 0;
         if ( (0==this.A8153TipoDispendioCodigo) )
         {
            try {
               gxballoon.setError("Informe o Código do Tipo de Dispêndio");
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
   this.Valid_Tipodispendiodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPODISPENDIODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8145TipoDispendioDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição do Tipo de Dispêndio");
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
   this.Valid_Tipodispendioclassificacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPODISPENDIOCLASSIFICACAO");
         this.AnyError  = 0;
         if ( (""==this.A8146TipoDispendioClassificacao) )
         {
            try {
               gxballoon.setError("Informe a Classificação do Tipo de Dispêndio");
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
   this.Valid_Tipodispendiostatus=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPODISPENDIOSTATUS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipodispendiosnmaterialconsumo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPODISPENDIOSNMATERIALCONSUMO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipodispendiosndespoperacional=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPODISPENDIOSNDESPOPERACIONAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12be2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13be2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14be601_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15be601_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,34,38,42,45,48,50,52,61,63];
   this.GXLastCtrlId =63;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodispendiocodigo,isvalid:null,rgrid:[],fld:"TIPODISPENDIOCODIGO",gxz:"Z8153TipoDispendioCodigo",gxold:"O8153TipoDispendioCodigo",gxvar:"A8153TipoDispendioCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8153TipoDispendioCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8153TipoDispendioCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPODISPENDIOCODIGO",gx.O.A8153TipoDispendioCodigo,0)},c2v:function(){gx.O.A8153TipoDispendioCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPODISPENDIOCODIGO",'.')},nac:function(){return !(0==this.AV18TipoDispendioCodigo)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodispendiodescricao,isvalid:null,rgrid:[],fld:"TIPODISPENDIODESCRICAO",gxz:"Z8145TipoDispendioDescricao",gxold:"O8145TipoDispendioDescricao",gxvar:"A8145TipoDispendioDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8145TipoDispendioDescricao=Value},v2z:function(Value){gx.O.Z8145TipoDispendioDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPODISPENDIODESCRICAO",gx.O.A8145TipoDispendioDescricao,0)},c2v:function(){gx.O.A8145TipoDispendioDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPODISPENDIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodispendioclassificacao,isvalid:null,rgrid:[],fld:"TIPODISPENDIOCLASSIFICACAO",gxz:"Z8146TipoDispendioClassificacao",gxold:"O8146TipoDispendioClassificacao",gxvar:"A8146TipoDispendioClassificacao",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A8146TipoDispendioClassificacao=Value},v2z:function(Value){gx.O.Z8146TipoDispendioClassificacao=Value},v2c:function(){gx.fn.setComboBoxValue("TIPODISPENDIOCLASSIFICACAO",gx.O.A8146TipoDispendioClassificacao)},c2v:function(){gx.O.A8146TipoDispendioClassificacao=this.val()},val:function(){return gx.fn.getControlValue("TIPODISPENDIOCLASSIFICACAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodispendiostatus,isvalid:null,rgrid:[],fld:"TIPODISPENDIOSTATUS",gxz:"Z8147TipoDispendioStatus",gxold:"O8147TipoDispendioStatus",gxvar:"A8147TipoDispendioStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A8147TipoDispendioStatus=Value},v2z:function(Value){gx.O.Z8147TipoDispendioStatus=Value},v2c:function(){gx.fn.setComboBoxValue("TIPODISPENDIOSTATUS",gx.O.A8147TipoDispendioStatus)},c2v:function(){gx.O.A8147TipoDispendioStatus=this.val()},val:function(){return gx.fn.getControlValue("TIPODISPENDIOSTATUS")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodispendiosnmaterialconsumo,isvalid:null,rgrid:[],fld:"TIPODISPENDIOSNMATERIALCONSUMO",gxz:"Z8148TipoDispendioSnMaterialConsumo",gxold:"O8148TipoDispendioSnMaterialConsumo",gxvar:"A8148TipoDispendioSnMaterialConsumo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8148TipoDispendioSnMaterialConsumo=Value},v2z:function(Value){gx.O.Z8148TipoDispendioSnMaterialConsumo=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPODISPENDIOSNMATERIALCONSUMO",gx.O.A8148TipoDispendioSnMaterialConsumo,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8148TipoDispendioSnMaterialConsumo=this.val()},val:function(){return gx.fn.getControlValue("TIPODISPENDIOSNMATERIALCONSUMO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodispendiosndespoperacional,isvalid:null,rgrid:[],fld:"TIPODISPENDIOSNDESPOPERACIONAL",gxz:"Z8149TipoDispendioSnDespOperacional",gxold:"O8149TipoDispendioSnDespOperacional",gxvar:"A8149TipoDispendioSnDespOperacional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8149TipoDispendioSnDespOperacional=Value},v2z:function(Value){gx.O.Z8149TipoDispendioSnDespOperacional=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPODISPENDIOSNDESPOPERACIONAL",gx.O.A8149TipoDispendioSnDespOperacional,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8149TipoDispendioSnDespOperacional=this.val()},val:function(){return gx.fn.getControlValue("TIPODISPENDIOSNDESPOPERACIONAL")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIOCOPIARPMS",gxz:"Z8173TipoDispendioCopiarPMS",gxold:"O8173TipoDispendioCopiarPMS",gxvar:"A8173TipoDispendioCopiarPMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8173TipoDispendioCopiarPMS=Value},v2z:function(Value){gx.O.Z8173TipoDispendioCopiarPMS=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPODISPENDIOCOPIARPMS",gx.O.A8173TipoDispendioCopiarPMS,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8173TipoDispendioCopiarPMS=this.val()},val:function(){return gx.fn.getControlValue("TIPODISPENDIOCOPIARPMS")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"TABLE4",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIOUSUARIOALTERACAO",gxz:"Z8150TipoDispendioUsuarioAlteracao",gxold:"O8150TipoDispendioUsuarioAlteracao",gxvar:"A8150TipoDispendioUsuarioAlteracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8150TipoDispendioUsuarioAlteracao=Value},v2z:function(Value){gx.O.Z8150TipoDispendioUsuarioAlteracao=Value},v2c:function(){gx.fn.setControlValue("TIPODISPENDIOUSUARIOALTERACAO",gx.O.A8150TipoDispendioUsuarioAlteracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8150TipoDispendioUsuarioAlteracao=this.val()},val:function(){return gx.fn.getControlValue("TIPODISPENDIOUSUARIOALTERACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[52]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIODATAHORAALTERACAO",gxz:"Z8151TipoDispendioDataHoraAlteracao",gxold:"O8151TipoDispendioDataHoraAlteracao",gxvar:"A8151TipoDispendioDataHoraAlteracao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8151TipoDispendioDataHoraAlteracao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8151TipoDispendioDataHoraAlteracao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPODISPENDIODATAHORAALTERACAO",gx.O.A8151TipoDispendioDataHoraAlteracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8151TipoDispendioDataHoraAlteracao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPODISPENDIODATAHORAALTERACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[61]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"BTNHELP",grid:0};
   this.A8153TipoDispendioCodigo = 0 ;
   this.Z8153TipoDispendioCodigo = 0 ;
   this.O8153TipoDispendioCodigo = 0 ;
   this.A8145TipoDispendioDescricao = "" ;
   this.Z8145TipoDispendioDescricao = "" ;
   this.O8145TipoDispendioDescricao = "" ;
   this.A8146TipoDispendioClassificacao = "" ;
   this.Z8146TipoDispendioClassificacao = "" ;
   this.O8146TipoDispendioClassificacao = "" ;
   this.A8147TipoDispendioStatus = "" ;
   this.Z8147TipoDispendioStatus = "" ;
   this.O8147TipoDispendioStatus = "" ;
   this.A8148TipoDispendioSnMaterialConsumo = "" ;
   this.Z8148TipoDispendioSnMaterialConsumo = "" ;
   this.O8148TipoDispendioSnMaterialConsumo = "" ;
   this.A8149TipoDispendioSnDespOperacional = "" ;
   this.Z8149TipoDispendioSnDespOperacional = "" ;
   this.O8149TipoDispendioSnDespOperacional = "" ;
   this.A8173TipoDispendioCopiarPMS = "" ;
   this.Z8173TipoDispendioCopiarPMS = "" ;
   this.O8173TipoDispendioCopiarPMS = "" ;
   this.A8150TipoDispendioUsuarioAlteracao = "" ;
   this.Z8150TipoDispendioUsuarioAlteracao = "" ;
   this.O8150TipoDispendioUsuarioAlteracao = "" ;
   this.A8151TipoDispendioDataHoraAlteracao = gx.date.nullDate() ;
   this.Z8151TipoDispendioDataHoraAlteracao = gx.date.nullDate() ;
   this.O8151TipoDispendioDataHoraAlteracao = gx.date.nullDate() ;
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
   this.AV18TipoDispendioCodigo = 0 ;
   this.A8152TipoDispendioEmpresaId = "" ;
   this.A8153TipoDispendioCodigo = 0 ;
   this.A8150TipoDispendioUsuarioAlteracao = "" ;
   this.A8151TipoDispendioDataHoraAlteracao = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A8145TipoDispendioDescricao = "" ;
   this.A8146TipoDispendioClassificacao = "" ;
   this.A8147TipoDispendioStatus = "" ;
   this.A8148TipoDispendioSnMaterialConsumo = "" ;
   this.A8149TipoDispendioSnDespOperacional = "" ;
   this.A8173TipoDispendioCopiarPMS = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12be2_client": ["'FECHAR'", true] ,"e13be2_client": ["AFTER TRN", true] ,"e14be601_client": ["ENTER", true] ,"e15be601_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TipoDispendioCodigo", "vTIPODISPENDIOCODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8152TipoDispendioEmpresaId", "TIPODISPENDIOEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 601 ]= ["O8147TipoDispendioStatus","O8148TipoDispendioSnMaterialConsumo","O8149TipoDispendioSnDespOperacional","O8146TipoDispendioClassificacao","O8145TipoDispendioDescricao","O8153TipoDispendioCodigo"] ;
});
gx.setParentObj(new ttipodispendio());
