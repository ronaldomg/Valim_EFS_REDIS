/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:45:43.73
*/
gx.evt.autoSkip = false;
gx.define('tdefinicaocodbar', false, function () {
   this.ServerClass =  "tdefinicaocodbar" ;
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
      this.AV18EsquemaCodigo=gx.fn.getIntegerValue("vESQUEMACODIGO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2936CodificacaoEstEmpresaId=gx.fn.getControlValue("CODIFICACAOESTEMPRESAID") ;
      this.AV19DefinicaoCodBarId=gx.fn.getIntegerValue("vDEFINICAOCODBARID",'.') ;
      this.AV23SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV21SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV28SnErro1=gx.fn.getControlValue("vSNERRO1") ;
      this.AV24SnLoteUnico=gx.fn.getControlValue("vSNLOTEUNICO") ;
      this.AV30Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV29Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Esquemacodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Esquemacodigo",["gx.O.A2915EsquemaCodigo", "gx.O.A2912EsquemaDescricao"],["A2912EsquemaDescricao"]);
      return true;
   }
   this.Valid_Definicaocodbarid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEFINICAOCODBARID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Definicaocodbarordem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEFINICAOCODBARORDEM");
         this.AnyError  = 0;
         if ( (0==this.A2942DefinicaoCodBarOrdem) )
         {
            try {
               gxballoon.setError("Informe a Ordem");
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
   this.Valid_Definicaocodbartipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEFINICAOCODBARTIPO");
         this.AnyError  = 0;
         if ( ( this.AV24SnLoteUnico == "S" ) && ( this.A2943DefinicaoCodBarTipo == "S" ) )
         {
            try {
               gxballoon.setError("Para tipo \"Sequencia\" empresa deve trabalhar com lote");
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
   this.Valid_Definicaocodbarfixo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEFINICAOCODBARFIXO");
         this.AnyError  = 0;
         if ( (0==this.A2944DefinicaoCodBarFixo) && this.A2943DefinicaoCodBarTipo == "F" )
         {
            try {
               gxballoon.setError("Informe o Conteúdo para Fixo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (0==this.A2944DefinicaoCodBarFixo) && this.A2943DefinicaoCodBarTipo != "F" )
         {
            try {
               gxballoon.setError("Apenas informe o Conteúdo para Fixo quando Tipo for Fixo");
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
   this.Valid_Codificacaoestid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Codificacaoestid",["gx.O.AV12EmpresaPadrao", "gx.O.A2937CodificacaoEstId", "gx.O.A2936CodificacaoEstEmpresaId", "gx.O.A2943DefinicaoCodBarTipo", "gx.O.A2932CodificacaoEstDescricao"],["A2936CodificacaoEstEmpresaId", "A2932CodificacaoEstDescricao"]);
      return true;
   }
   this.Valid_Definicaocodbarposini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEFINICAOCODBARPOSINI");
         this.AnyError  = 0;
         if ( (0==this.A2946DefinicaoCodBarPosIni) && this.A2943DefinicaoCodBarTipo != "F" && this.A2943DefinicaoCodBarTipo != "D" && this.A2943DefinicaoCodBarTipo != "S" )
         {
            try {
               gxballoon.setError("Informe a Posição Inicial");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (0==this.A2946DefinicaoCodBarPosIni) && ( this.A2943DefinicaoCodBarTipo == "F" || this.A2943DefinicaoCodBarTipo == "D" || this.A2943DefinicaoCodBarTipo == "S" ) )
         {
            try {
               gxballoon.setError("Não informe a Posição Inicial quando o Tipo for Fixo, Sequencia ou Dígito");
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
   this.Valid_Definicaocodbarposfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEFINICAOCODBARPOSFIN");
         this.AnyError  = 0;
         try {
            if ( gx.OldInteger("DEFINICAOCODBARORDEM","O2942DefinicaoCodBarOrdem") != this.A2942DefinicaoCodBarOrdem || gx.Old("DEFINICAOCODBARTIPO","O2943DefinicaoCodBarTipo") != this.A2943DefinicaoCodBarTipo || gx.Old("CODIFICACAOESTID","O2937CodificacaoEstId") != this.A2937CodificacaoEstId || gx.OldInteger("DEFINICAOCODBARPOSINI","O2946DefinicaoCodBarPosIni") != this.A2946DefinicaoCodBarPosIni || gx.OldInteger("DEFINICAOCODBARPOSFIN","O2947DefinicaoCodBarPosFin") != this.A2947DefinicaoCodBarPosFin || gx.OldInteger("DEFINICAOCODBARFIXO","O2944DefinicaoCodBarFixo") != this.A2944DefinicaoCodBarFixo )
            {
               this.AV23SnAlterou =  "S"  ;
            }
         }
         catch(e){}
         if ( (0==this.A2947DefinicaoCodBarPosFin) && this.A2943DefinicaoCodBarTipo != "F" && this.A2943DefinicaoCodBarTipo != "D" && this.A2943DefinicaoCodBarTipo != "S" )
         {
            try {
               gxballoon.setError("Informe a Posição Final");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (0==this.A2947DefinicaoCodBarPosFin) && ( this.A2943DefinicaoCodBarTipo == "F" || this.A2943DefinicaoCodBarTipo == "D" || this.A2943DefinicaoCodBarTipo == "S" ) )
         {
            try {
               gxballoon.setError("Não Informe a Posição Final quando o Tipo for Fixo, Sequencia ou Dígito");
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
   this.e116h372_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hexemplocodbarras",[]), []);
      this.refreshOutputs([]);
   };
   this.e136h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e146h2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e156h372_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e166h372_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,24,26,29,31,34,37,40,42,45,47,48,51,53,56,58,61,64,66,68,77,79,81];
   this.GXLastCtrlId =81;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Esquemacodigo,isvalid:null,rgrid:[],fld:"ESQUEMACODIGO",gxz:"Z2915EsquemaCodigo",gxold:"O2915EsquemaCodigo",gxvar:"A2915EsquemaCodigo",ucs:[],op:[15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2915EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2915EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ESQUEMACODIGO",gx.O.A2915EsquemaCodigo,0)},c2v:function(){gx.O.A2915EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESQUEMADESCRICAO",gxz:"Z2912EsquemaDescricao",gxold:"O2912EsquemaDescricao",gxvar:"A2912EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2912EsquemaDescricao=Value},v2z:function(Value){gx.O.Z2912EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("ESQUEMADESCRICAO",gx.O.A2912EsquemaDescricao,0)},c2v:function(){gx.O.A2912EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("ESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Definicaocodbarid,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARID",gxz:"Z2950DefinicaoCodBarId",gxold:"O2950DefinicaoCodBarId",gxvar:"A2950DefinicaoCodBarId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2950DefinicaoCodBarId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2950DefinicaoCodBarId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DEFINICAOCODBARID",gx.O.A2950DefinicaoCodBarId,0)},c2v:function(){gx.O.A2950DefinicaoCodBarId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DEFINICAOCODBARID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Definicaocodbarordem,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARORDEM",gxz:"Z2942DefinicaoCodBarOrdem",gxold:"O2942DefinicaoCodBarOrdem",gxvar:"A2942DefinicaoCodBarOrdem",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2942DefinicaoCodBarOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2942DefinicaoCodBarOrdem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DEFINICAOCODBARORDEM",gx.O.A2942DefinicaoCodBarOrdem,0)},c2v:function(){gx.O.A2942DefinicaoCodBarOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DEFINICAOCODBARORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={fld:"TABLE5",grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Definicaocodbartipo,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARTIPO",gxz:"Z2943DefinicaoCodBarTipo",gxold:"O2943DefinicaoCodBarTipo",gxvar:"A2943DefinicaoCodBarTipo",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2943DefinicaoCodBarTipo=Value},v2z:function(Value){gx.O.Z2943DefinicaoCodBarTipo=Value},v2c:function(){gx.fn.setComboBoxValue("DEFINICAOCODBARTIPO",gx.O.A2943DefinicaoCodBarTipo)},c2v:function(){gx.O.A2943DefinicaoCodBarTipo=this.val()},val:function(){return gx.fn.getControlValue("DEFINICAOCODBARTIPO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TXTAJUDA", format:0,grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Definicaocodbarfixo,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARFIXO",gxz:"Z2944DefinicaoCodBarFixo",gxold:"O2944DefinicaoCodBarFixo",gxvar:"A2944DefinicaoCodBarFixo",ucs:[],op:[34,42],ip:[34,42],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2944DefinicaoCodBarFixo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2944DefinicaoCodBarFixo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DEFINICAOCODBARFIXO",gx.O.A2944DefinicaoCodBarFixo,0)},c2v:function(){gx.O.A2944DefinicaoCodBarFixo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DEFINICAOCODBARFIXO",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codificacaoestid,isvalid:null,rgrid:[],fld:"CODIFICACAOESTID",gxz:"Z2937CodificacaoEstId",gxold:"O2937CodificacaoEstId",gxvar:"A2937CodificacaoEstId",ucs:[],op:[34,47,48],ip:[48,34,47],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2937CodificacaoEstId=Value},v2z:function(Value){gx.O.Z2937CodificacaoEstId=Value},v2c:function(){gx.fn.setControlValue("CODIFICACAOESTID",gx.O.A2937CodificacaoEstId,0)},c2v:function(){gx.O.A2937CodificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CODIFICACAOESTDESCRICAO",gxz:"Z2932CodificacaoEstDescricao",gxold:"O2932CodificacaoEstDescricao",gxvar:"A2932CodificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2932CodificacaoEstDescricao=Value},v2z:function(Value){gx.O.Z2932CodificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("CODIFICACAOESTDESCRICAO",gx.O.A2932CodificacaoEstDescricao,0)},c2v:function(){gx.O.A2932CodificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Definicaocodbarposini,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARPOSINI",gxz:"Z2946DefinicaoCodBarPosIni",gxold:"O2946DefinicaoCodBarPosIni",gxvar:"A2946DefinicaoCodBarPosIni",ucs:[],op:[34,53],ip:[34,53],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2946DefinicaoCodBarPosIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2946DefinicaoCodBarPosIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DEFINICAOCODBARPOSINI",gx.O.A2946DefinicaoCodBarPosIni,0)},c2v:function(){gx.O.A2946DefinicaoCodBarPosIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DEFINICAOCODBARPOSINI",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Definicaocodbarposfin,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARPOSFIN",gxz:"Z2947DefinicaoCodBarPosFin",gxold:"O2947DefinicaoCodBarPosFin",gxvar:"A2947DefinicaoCodBarPosFin",ucs:[],op:[34,58],ip:[42,58,53,47,34,26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2947DefinicaoCodBarPosFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2947DefinicaoCodBarPosFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DEFINICAOCODBARPOSFIN",gx.O.A2947DefinicaoCodBarPosFin,0)},c2v:function(){gx.O.A2947DefinicaoCodBarPosFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DEFINICAOCODBARPOSFIN",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   GXValidFnc[64]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARUSUARIOALT",gxz:"Z2948DefinicaoCodBarUsuarioAlt",gxold:"O2948DefinicaoCodBarUsuarioAlt",gxvar:"A2948DefinicaoCodBarUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2948DefinicaoCodBarUsuarioAlt=Value},v2z:function(Value){gx.O.Z2948DefinicaoCodBarUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("DEFINICAOCODBARUSUARIOALT",gx.O.A2948DefinicaoCodBarUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2948DefinicaoCodBarUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("DEFINICAOCODBARUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[68]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEFINICAOCODBARDATAHORAALT",gxz:"Z2949DefinicaoCodBarDataHoraAlt",gxold:"O2949DefinicaoCodBarDataHoraAlt",gxvar:"A2949DefinicaoCodBarDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2949DefinicaoCodBarDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2949DefinicaoCodBarDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DEFINICAOCODBARDATAHORAALT",gx.O.A2949DefinicaoCodBarDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2949DefinicaoCodBarDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DEFINICAOCODBARDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[77]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"BTNHELP",grid:0};
   GXValidFnc[81]={fld:"PROMPT_2937",grid:372};
   this.A2915EsquemaCodigo = 0 ;
   this.Z2915EsquemaCodigo = 0 ;
   this.O2915EsquemaCodigo = 0 ;
   this.A2912EsquemaDescricao = "" ;
   this.Z2912EsquemaDescricao = "" ;
   this.O2912EsquemaDescricao = "" ;
   this.A2950DefinicaoCodBarId = 0 ;
   this.Z2950DefinicaoCodBarId = 0 ;
   this.O2950DefinicaoCodBarId = 0 ;
   this.A2942DefinicaoCodBarOrdem = 0 ;
   this.Z2942DefinicaoCodBarOrdem = 0 ;
   this.O2942DefinicaoCodBarOrdem = 0 ;
   this.A2943DefinicaoCodBarTipo = "" ;
   this.Z2943DefinicaoCodBarTipo = "" ;
   this.O2943DefinicaoCodBarTipo = "" ;
   this.A2944DefinicaoCodBarFixo = 0 ;
   this.Z2944DefinicaoCodBarFixo = 0 ;
   this.O2944DefinicaoCodBarFixo = 0 ;
   this.A2937CodificacaoEstId = "" ;
   this.Z2937CodificacaoEstId = "" ;
   this.O2937CodificacaoEstId = "" ;
   this.A2932CodificacaoEstDescricao = "" ;
   this.Z2932CodificacaoEstDescricao = "" ;
   this.O2932CodificacaoEstDescricao = "" ;
   this.A2946DefinicaoCodBarPosIni = 0 ;
   this.Z2946DefinicaoCodBarPosIni = 0 ;
   this.O2946DefinicaoCodBarPosIni = 0 ;
   this.A2947DefinicaoCodBarPosFin = 0 ;
   this.Z2947DefinicaoCodBarPosFin = 0 ;
   this.O2947DefinicaoCodBarPosFin = 0 ;
   this.A2948DefinicaoCodBarUsuarioAlt = "" ;
   this.Z2948DefinicaoCodBarUsuarioAlt = "" ;
   this.O2948DefinicaoCodBarUsuarioAlt = "" ;
   this.A2949DefinicaoCodBarDataHoraAlt = gx.date.nullDate() ;
   this.Z2949DefinicaoCodBarDataHoraAlt = gx.date.nullDate() ;
   this.O2949DefinicaoCodBarDataHoraAlt = gx.date.nullDate() ;
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
   this.AV24SnLoteUnico = "" ;
   this.AV21SnErro = "" ;
   this.AV23SnAlterou = "" ;
   this.AV28SnErro1 = "" ;
   this.AV18EsquemaCodigo = 0 ;
   this.AV19DefinicaoCodBarId = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2950DefinicaoCodBarId = 0 ;
   this.A2936CodificacaoEstEmpresaId = "" ;
   this.A2948DefinicaoCodBarUsuarioAlt = "" ;
   this.A2949DefinicaoCodBarDataHoraAlt = gx.date.nullDate() ;
   this.A2912EsquemaDescricao = "" ;
   this.A2942DefinicaoCodBarOrdem = 0 ;
   this.A2943DefinicaoCodBarTipo = "" ;
   this.A2944DefinicaoCodBarFixo = 0 ;
   this.A2937CodificacaoEstId = "" ;
   this.A2932CodificacaoEstDescricao = "" ;
   this.A2946DefinicaoCodBarPosIni = 0 ;
   this.A2947DefinicaoCodBarPosFin = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e136h2_client": ["'FECHAR'", true] ,"e146h2_client": ["AFTER TRN", true] ,"e156h372_client": ["ENTER", true] ,"e166h372_client": ["CANCEL", true] ,"e116h372_client": ["'EXEMPLOCODBARRAS'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV19DefinicaoCodBarId',fld:'vDEFINICAOCODBARID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'}],[{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'EXEMPLOCODBARRAS'"] = [[],[]];
   this.setPrompt("PROMPT_2937", [47]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18EsquemaCodigo", "vESQUEMACODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2936CodificacaoEstEmpresaId", "CODIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV19DefinicaoCodBarId", "vDEFINICAOCODBARID", 0, "int");
   this.setVCMap("AV23SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV21SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV28SnErro1", "vSNERRO1", 0, "char");
   this.setVCMap("AV24SnLoteUnico", "vSNLOTEUNICO", 0, "char");
   this.setVCMap("AV30Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV29Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 372 ]= ["O2944DefinicaoCodBarFixo","O2947DefinicaoCodBarPosFin","O2946DefinicaoCodBarPosIni","O2937CodificacaoEstId","O2943DefinicaoCodBarTipo","O2942DefinicaoCodBarOrdem"] ;
});
gx.setParentObj(new tdefinicaocodbar());
