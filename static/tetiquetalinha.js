/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:37:19.60
*/
gx.evt.autoSkip = false;
gx.define('tetiquetalinha', false, function () {
   this.ServerClass =  "tetiquetalinha" ;
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
      this.AV17EmpresaEtiquetaEmpresaId=gx.fn.getControlValue("vEMPRESAETIQUETAEMPRESAID") ;
      this.A240EmpresaEtiquetaEmpresaId=gx.fn.getControlValue("EMPRESAETIQUETAEMPRESAID") ;
      this.AV16EtiquetaCodigo=gx.fn.getIntegerValue("vETIQUETACODIGO",'.') ;
      this.AV15EtiquetaLinhaCod=gx.fn.getIntegerValue("vETIQUETALINHACOD",'.') ;
      this.AV8UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23EtiquetaTamFonte=gx.fn.getIntegerValue("vETIQUETATAMFONTE",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.A743EtiquetaTipoImpressao=gx.fn.getControlValue("ETIQUETATIPOIMPRESSAO") ;
      this.AV31Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV30Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Etiquetacodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Etiquetacodigo",["gx.O.A240EmpresaEtiquetaEmpresaId", "gx.O.A241EtiquetaCodigo", "gx.O.A235EtiquetaDescricao", "gx.O.A743EtiquetaTipoImpressao"],["A235EtiquetaDescricao", "A743EtiquetaTipoImpressao"]);
      return true;
   }
   this.Valid_Etiquetalinhacod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETALINHACOD");
         this.AnyError  = 0;
         if ( (0==this.A242EtiquetaLinhaCod) )
         {
            try {
               gxballoon.setError("Informe o Código da Linha");
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
   this.Valid_Etiquetalinhaconteudo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETALINHACONTEUDO");
         this.AnyError  = 0;
         if ( (""==this.A239EtiquetaLinhaConteudo) )
         {
            try {
               gxballoon.setError("Informe o Conteúdo da Linha");
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
   this.Valid_Etiquetalinhatamfonte=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETALINHATAMFONTE");
         this.AnyError  = 0;
         if ( ! ( this.A94EtiquetaLinhaTamFonte == 1 || this.A94EtiquetaLinhaTamFonte == 0 || this.A94EtiquetaLinhaTamFonte == 8 || this.A94EtiquetaLinhaTamFonte == 9 || this.A94EtiquetaLinhaTamFonte == 10 || this.A94EtiquetaLinhaTamFonte == 11 || this.A94EtiquetaLinhaTamFonte == 12 || this.A94EtiquetaLinhaTamFonte == 14 || this.A94EtiquetaLinhaTamFonte == 16 || this.A94EtiquetaLinhaTamFonte == 58 || this.A94EtiquetaLinhaTamFonte == 59 || this.A94EtiquetaLinhaTamFonte == 60 || this.A94EtiquetaLinhaTamFonte == 61 || this.A94EtiquetaLinhaTamFonte == 62 || this.A94EtiquetaLinhaTamFonte == 64 || this.A94EtiquetaLinhaTamFonte == 66 || this.A94EtiquetaLinhaTamFonte == 70 || this.A94EtiquetaLinhaTamFonte == 67 || this.A94EtiquetaLinhaTamFonte == 68 || this.A94EtiquetaLinhaTamFonte == 69 || this.A94EtiquetaLinhaTamFonte == 75 ) )
         {
            try {
               gxballoon.setError("Campo Tamanho Fonte Linha fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A94EtiquetaLinhaTamFonte > 66 && this.A743EtiquetaTipoImpressao == "1" )
         {
            try {
               gxballoon.setError("Tamanho/Estilo Inválido para Modo Gráfico");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A94EtiquetaLinhaTamFonte <= 66 && this.A743EtiquetaTipoImpressao == "2" )
         {
            try {
               gxballoon.setError("Tamanho/Estilo Inválido para Modo Texto");
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
   this.Valid_Etiquetalinhamargesq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETALINHAMARGESQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetalinhaentrecol=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETALINHAENTRECOL");
         this.AnyError  = 0;
         if ( (0==this.A96EtiquetaLinhaEntreCol) )
         {
            try {
               gxballoon.setError("Informe o Espaço entre Colunas");
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
   this.Valid_Etiquetalinhaqtdcar=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETALINHAQTDCAR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e123s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133s2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e143s2_client=function()
   {
      this.executeServerEvent("'CONTEUDO'", false, null, false, false);
   };
   this.e153s200_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e163s200_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,26,28,32,34,39,41,45,47,51,53,57,59,63,66,68,70,79,81];
   this.GXLastCtrlId =81;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE5",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Etiquetacodigo,isvalid:null,rgrid:[],fld:"ETIQUETACODIGO",gxz:"Z241EtiquetaCodigo",gxold:"O241EtiquetaCodigo",gxvar:"A241EtiquetaCodigo",ucs:[],op:[21],ip:[21,17],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A241EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z241EtiquetaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETACODIGO",gx.O.A241EtiquetaCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A241EtiquetaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETACODIGO",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETADESCRICAO",gxz:"Z235EtiquetaDescricao",gxold:"O235EtiquetaDescricao",gxvar:"A235EtiquetaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A235EtiquetaDescricao=Value},v2z:function(Value){gx.O.Z235EtiquetaDescricao=Value},v2c:function(){gx.fn.setControlValue("ETIQUETADESCRICAO",gx.O.A235EtiquetaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A235EtiquetaDescricao=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetalinhacod,isvalid:null,rgrid:[],fld:"ETIQUETALINHACOD",gxz:"Z242EtiquetaLinhaCod",gxold:"O242EtiquetaLinhaCod",gxvar:"A242EtiquetaLinhaCod",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A242EtiquetaLinhaCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z242EtiquetaLinhaCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETALINHACOD",gx.O.A242EtiquetaLinhaCod,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A242EtiquetaLinhaCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETALINHACOD",'.')},nac:function(){return !(this.Gx_mode == 'INS')}};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Etiquetalinhaconteudo,isvalid:null,rgrid:[],fld:"ETIQUETALINHACONTEUDO",gxz:"Z239EtiquetaLinhaConteudo",gxold:"O239EtiquetaLinhaConteudo",gxvar:"A239EtiquetaLinhaConteudo",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A239EtiquetaLinhaConteudo=Value},v2z:function(Value){gx.O.Z239EtiquetaLinhaConteudo=Value},v2c:function(){gx.fn.setControlValue("ETIQUETALINHACONTEUDO",gx.O.A239EtiquetaLinhaConteudo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A239EtiquetaLinhaConteudo=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETALINHACONTEUDO")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetalinhatamfonte,isvalid:null,rgrid:[],fld:"ETIQUETALINHATAMFONTE",gxz:"Z94EtiquetaLinhaTamFonte",gxold:"O94EtiquetaLinhaTamFonte",gxvar:"A94EtiquetaLinhaTamFonte",ucs:[],op:[41],ip:[41],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A94EtiquetaLinhaTamFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.Z94EtiquetaLinhaTamFonte=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("ETIQUETALINHATAMFONTE",gx.O.A94EtiquetaLinhaTamFonte);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A94EtiquetaLinhaTamFonte=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETALINHATAMFONTE",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[45]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetalinhamargesq,isvalid:null,rgrid:[],fld:"ETIQUETALINHAMARGESQ",gxz:"Z95EtiquetaLinhaMargEsq",gxold:"O95EtiquetaLinhaMargEsq",gxvar:"A95EtiquetaLinhaMargEsq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A95EtiquetaLinhaMargEsq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z95EtiquetaLinhaMargEsq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETALINHAMARGESQ",gx.O.A95EtiquetaLinhaMargEsq,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A95EtiquetaLinhaMargEsq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETALINHAMARGESQ",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[51]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetalinhaentrecol,isvalid:null,rgrid:[],fld:"ETIQUETALINHAENTRECOL",gxz:"Z96EtiquetaLinhaEntreCol",gxold:"O96EtiquetaLinhaEntreCol",gxvar:"A96EtiquetaLinhaEntreCol",ucs:[],op:[53],ip:[53],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A96EtiquetaLinhaEntreCol=gx.num.intval(Value)},v2z:function(Value){gx.O.Z96EtiquetaLinhaEntreCol=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETALINHAENTRECOL",gx.O.A96EtiquetaLinhaEntreCol,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A96EtiquetaLinhaEntreCol=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETALINHAENTRECOL",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetalinhaqtdcar,isvalid:null,rgrid:[],fld:"ETIQUETALINHAQTDCAR",gxz:"Z97EtiquetaLinhaQtdCar",gxold:"O97EtiquetaLinhaQtdCar",gxvar:"A97EtiquetaLinhaQtdCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A97EtiquetaLinhaQtdCar=gx.num.intval(Value)},v2z:function(Value){gx.O.Z97EtiquetaLinhaQtdCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETALINHAQTDCAR",gx.O.A97EtiquetaLinhaQtdCar,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A97EtiquetaLinhaQtdCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETALINHAQTDCAR",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   GXValidFnc[66]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETALINHANIVELUSUARIOID",gxz:"Z842EtiquetaLinhaNivelUsuarioId",gxold:"O842EtiquetaLinhaNivelUsuarioId",gxvar:"A842EtiquetaLinhaNivelUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A842EtiquetaLinhaNivelUsuarioId=Value},v2z:function(Value){gx.O.Z842EtiquetaLinhaNivelUsuarioId=Value},v2c:function(){gx.fn.setControlValue("ETIQUETALINHANIVELUSUARIOID",gx.O.A842EtiquetaLinhaNivelUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A842EtiquetaLinhaNivelUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETALINHANIVELUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[70]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETALINHANIVELDATAHORAALT",gxz:"Z843EtiquetaLinhaNivelDataHoraAlt",gxold:"O843EtiquetaLinhaNivelDataHoraAlt",gxvar:"A843EtiquetaLinhaNivelDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A843EtiquetaLinhaNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z843EtiquetaLinhaNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETALINHANIVELDATAHORAALT",gx.O.A843EtiquetaLinhaNivelDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A843EtiquetaLinhaNivelDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ETIQUETALINHANIVELDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[79]={fld:"JSPROMPT", format:2,grid:0};
   GXValidFnc[81]={fld:"BTNHELP",grid:0};
   this.A241EtiquetaCodigo = 0 ;
   this.Z241EtiquetaCodigo = 0 ;
   this.O241EtiquetaCodigo = 0 ;
   this.A235EtiquetaDescricao = "" ;
   this.Z235EtiquetaDescricao = "" ;
   this.O235EtiquetaDescricao = "" ;
   this.A242EtiquetaLinhaCod = 0 ;
   this.Z242EtiquetaLinhaCod = 0 ;
   this.O242EtiquetaLinhaCod = 0 ;
   this.A239EtiquetaLinhaConteudo = "" ;
   this.Z239EtiquetaLinhaConteudo = "" ;
   this.O239EtiquetaLinhaConteudo = "" ;
   this.A94EtiquetaLinhaTamFonte = 0 ;
   this.Z94EtiquetaLinhaTamFonte = 0 ;
   this.O94EtiquetaLinhaTamFonte = 0 ;
   this.A95EtiquetaLinhaMargEsq = 0 ;
   this.Z95EtiquetaLinhaMargEsq = 0 ;
   this.O95EtiquetaLinhaMargEsq = 0 ;
   this.A96EtiquetaLinhaEntreCol = 0 ;
   this.Z96EtiquetaLinhaEntreCol = 0 ;
   this.O96EtiquetaLinhaEntreCol = 0 ;
   this.A97EtiquetaLinhaQtdCar = 0 ;
   this.Z97EtiquetaLinhaQtdCar = 0 ;
   this.O97EtiquetaLinhaQtdCar = 0 ;
   this.A842EtiquetaLinhaNivelUsuarioId = "" ;
   this.Z842EtiquetaLinhaNivelUsuarioId = "" ;
   this.O842EtiquetaLinhaNivelUsuarioId = "" ;
   this.A843EtiquetaLinhaNivelDataHoraAlt = gx.date.nullDate() ;
   this.Z843EtiquetaLinhaNivelDataHoraAlt = gx.date.nullDate() ;
   this.O843EtiquetaLinhaNivelDataHoraAlt = gx.date.nullDate() ;
   this.AV8UsrCod = "" ;
   this.AV9EmpresaLogadaId = "" ;
   this.AV11Sistema = "" ;
   this.AV30Pgmname = "" ;
   this.AV31Pgmdesc = "" ;
   this.AV10MsgErro = "" ;
   this.AV12Modulo = "" ;
   this.AV7Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV17EmpresaEtiquetaEmpresaId = "" ;
   this.AV16EtiquetaCodigo = 0 ;
   this.AV15EtiquetaLinhaCod = 0 ;
   this.AV23EtiquetaTamFonte = 0 ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A242EtiquetaLinhaCod = 0 ;
   this.A842EtiquetaLinhaNivelUsuarioId = "" ;
   this.A843EtiquetaLinhaNivelDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A235EtiquetaDescricao = "" ;
   this.A743EtiquetaTipoImpressao = "" ;
   this.A239EtiquetaLinhaConteudo = "" ;
   this.A94EtiquetaLinhaTamFonte = 0 ;
   this.A95EtiquetaLinhaMargEsq = 0 ;
   this.A96EtiquetaLinhaEntreCol = 0 ;
   this.A97EtiquetaLinhaQtdCar = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e123s2_client": ["'FECHAR'", true] ,"e133s2_client": ["AFTER TRN", true] ,"e143s2_client": ["'CONTEUDO'", true] ,"e153s200_client": ["ENTER", true] ,"e163s200_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'AV16EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV15EtiquetaLinhaCod',fld:'vETIQUETALINHACOD',hsh:true},{av:'AV23EtiquetaTamFonte',fld:'vETIQUETATAMFONTE',hsh:true},{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'AV16EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'AV23EtiquetaTamFonte',fld:'vETIQUETATAMFONTE',hsh:true}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["'CONTEUDO'"] = [[{av:'AV18tags',fld:'vTAGS'},{av:'AV17EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'AV16EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV15EtiquetaLinhaCod',fld:'vETIQUETALINHACOD',hsh:true},{av:'A239EtiquetaLinhaConteudo',fld:'ETIQUETALINHACONTEUDO'},{av:'A242EtiquetaLinhaCod',fld:'ETIQUETALINHACOD'},{av:'AV13Tabela',fld:'vTABELA'}],[{av:'AV18tags',fld:'vTAGS'},{av:'AV20SnErro',fld:'vSNERRO'},{av:'AV10MsgErro',fld:'vMSGERRO'},{av:'AV19proc',fld:'vPROC'},{av:'A239EtiquetaLinhaConteudo',fld:'ETIQUETALINHACONTEUDO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17EmpresaEtiquetaEmpresaId", "vEMPRESAETIQUETAEMPRESAID", 0, "char");
   this.setVCMap("A240EmpresaEtiquetaEmpresaId", "EMPRESAETIQUETAEMPRESAID", 0, "char");
   this.setVCMap("AV16EtiquetaCodigo", "vETIQUETACODIGO", 0, "int");
   this.setVCMap("AV15EtiquetaLinhaCod", "vETIQUETALINHACOD", 0, "int");
   this.setVCMap("AV8UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23EtiquetaTamFonte", "vETIQUETATAMFONTE", 0, "int");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("A743EtiquetaTipoImpressao", "ETIQUETATIPOIMPRESSAO", 0, "char");
   this.setVCMap("AV31Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV30Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 200 ]= ["O97EtiquetaLinhaQtdCar","O96EtiquetaLinhaEntreCol","O95EtiquetaLinhaMargEsq","O94EtiquetaLinhaTamFonte","O239EtiquetaLinhaConteudo"] ;
});
gx.setParentObj(new tetiquetalinha());
