/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:55:58.36
*/
gx.evt.autoSkip = false;
gx.define('tsituacaotributaria', false, function () {
   this.ServerClass =  "tsituacaotributaria" ;
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
      this.AV19SituacaoTributariaTipo=gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPO") ;
      this.AV18SituacaoTributariaCodigo=gx.fn.getControlValue("vSITUACAOTRIBUTARIACODIGO") ;
      this.AV21SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV31LogSituacaoTributariaTipo=gx.fn.getControlValue("vLOGSITUACAOTRIBUTARIATIPO") ;
      this.AV32LogSituacaoTributariaCodigo=gx.fn.getControlValue("vLOGSITUACAOTRIBUTARIACODIGO") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV30lSituacaoTributarias=gx.fn.getControlValue("vLSITUACAOTRIBUTARIAS") ;
      this.AV33LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV37Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Situacaotributariatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOTRIBUTARIATIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Situacaotributariacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOTRIBUTARIACODIGO");
         this.AnyError  = 0;
         if ( (""==this.A3566SituacaoTributariaCodigo) )
         {
            try {
               gxballoon.setError("Informe o Código");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( gx.text.substring( this.A3566SituacaoTributariaCodigo, 3, 1) == "" && this.A3564SituacaoTributariaTipo == "2" )
         {
            try {
               gxballoon.setError("Para ICMS Simples Nacional informe a partir de 3 dígitos");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ( gx.text.substring( this.A3566SituacaoTributariaCodigo, 3, 1) == "" || gx.text.substring( this.A3566SituacaoTributariaCodigo, 4, 1) != "" ) && this.A3564SituacaoTributariaTipo == "1" )
         {
            try {
               gxballoon.setError("Para ICMS Tributação Normal informe 3 dígitos");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( gx.text.substring( this.A3566SituacaoTributariaCodigo, 2, 1) == "" && ( ( this.A3564SituacaoTributariaTipo != "1" ) && ( this.A3564SituacaoTributariaTipo != "2" ) ) )
         {
            try {
               gxballoon.setError("Preencha 2 dígitos para esse Tipo de tributação");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ( gx.text.substring( this.A3566SituacaoTributariaCodigo, 3, 1) != "" ) && ( ( this.A3564SituacaoTributariaTipo != "1" ) && ( this.A3564SituacaoTributariaTipo != "2" ) ) )
         {
            try {
               gxballoon.setError("Preencha apenas 2 dígitos para esse Tipo de tributação");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( gx.text.substring( this.A3566SituacaoTributariaCodigo, 1, 1) < "0" || gx.text.substring( this.A3566SituacaoTributariaCodigo, 1, 1) > "9" )
         {
            try {
               gxballoon.setError("Informe apenas números");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( gx.text.substring( this.A3566SituacaoTributariaCodigo, 2, 1) < "0" || gx.text.substring( this.A3566SituacaoTributariaCodigo, 2, 1) > "9" )
         {
            try {
               gxballoon.setError("Informe apenas números");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ( gx.text.substring( this.A3566SituacaoTributariaCodigo, 3, 1) < "0" || gx.text.substring( this.A3566SituacaoTributariaCodigo, 3, 1) > "9" ) && this.A3564SituacaoTributariaTipo == "2" )
         {
            try {
               gxballoon.setError("Informe apenas números");
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
   this.Valid_Situacaotributariadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOTRIBUTARIADESCRICAO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( (""==this.A3571SituacaoTributariaDescricao) )
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
   this.Valid_Situacaotributariatipotributac=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOTRIBUTARIATIPOTRIBUTAC");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( ( this.A3564SituacaoTributariaTipo == "3" || this.A3564SituacaoTributariaTipo == "4" || this.A3564SituacaoTributariaTipo == "5" ) && ( ! (""==this.A3568SituacaoTributariaTipoTributac) ) && ( this.A3568SituacaoTributariaTipoTributac != "T" && this.A3568SituacaoTributariaTipoTributac != "N" ) )
         {
            try {
               gxballoon.setError("Tipo de Tributação deve estar vazio, ser igual à \"Tributada\" ou \"Não tributada\"");
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
   this.Valid_Situacaotributariatipoentrada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOTRIBUTARIATIPOENTRADA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Situacaotributariaentrada=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Situacaotributariaentrada",["gx.O.Gx_mode", "gx.O.O8935SituacaoTributariaEntrada", "gx.O.AV19SituacaoTributariaTipo", "gx.O.A8935SituacaoTributariaEntrada", "gx.O.A9732SituacaoTributariaTipoEntrada", "gx.O.AV26SituacaoTributariaEntradaDesc"],["A9732SituacaoTributariaTipoEntrada", "AV26SituacaoTributariaEntradaDesc", ["AV30lSituacaoTributarias","Asituacaotributariaentrada"]]);
      return true;
   }
   this.Valid_Situacaotributariasnreducao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOTRIBUTARIASNREDUCAO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( this.A3569SituacaoTributariaSnReducao == "S" && this.A3568SituacaoTributariaTipoTributac != "T" )
         {
            try {
               gxballoon.setError("Não é permitido redução para código que não tem tributação");
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
   this.Valid_Situacaotributariasnsubstit=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOTRIBUTARIASNSUBSTIT");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Situacaotributariastanterior=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOTRIBUTARIASTANTERIOR");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Situacaotributariasnaprcredito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOTRIBUTARIASNAPRCREDITO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Situacaotributariacobrancaicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOTRIBUTARIACOBRANCAICMS");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Situacaotributariasntribqtde=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SITUACAOTRIBUTARIASNTRIBQTDE");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( this.A3568SituacaoTributariaTipoTributac != "T" && this.A5384SituacaoTributariaSnTribQtde == "S" )
         {
            try {
               gxballoon.setError("Só é permitido marcar a opção \"Tributado por Quantidade\" se o Tipo de Tributação for \"Tributada\"");
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
   this.e117h672_client=function()
   {
      this.clearMessages();
      if ( this.AV19SituacaoTributariaTipo == "1" || this.AV19SituacaoTributariaTipo == "2" )
      {
         gx.popup.openUrl(gx.http.formatLink("hconsultasituacaotributaria",[this.A9732SituacaoTributariaTipoEntrada, "", ""]), ["A8935SituacaoTributariaEntrada", "A9732SituacaoTributariaTipoEntrada"]);
      }
      else
      {
         gx.popup.openUrl(gx.http.formatLink("hconsultasituacaotributaria",[this.AV34TipoCST, "", ""]), ["A8935SituacaoTributariaEntrada", "A9732SituacaoTributariaTipoEntrada"]);
      }
      this.refreshOutputs([{av:'A9732SituacaoTributariaTipoEntrada',fld:'SITUACAOTRIBUTARIATIPOENTRADA'},{av:'A8935SituacaoTributariaEntrada',fld:'SITUACAOTRIBUTARIAENTRADA'}]);
   };
   this.e137h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e147h2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e157h672_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e167h672_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,19,21,24,26,29,31,32,35,37,38,41,43,44,45,46,47,51,54,58,61,65,68,72,75,79,82,86,89,92,95,97,99,108,109,110,112];
   this.GXLastCtrlId =112;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE4",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITTRIBTIPO",gxz:"ZV20SitTribTipo",gxold:"OV20SitTribTipo",gxvar:"AV20SitTribTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SitTribTipo=Value},v2z:function(Value){gx.O.ZV20SitTribTipo=Value},v2c:function(){gx.fn.setControlValue("vSITTRIBTIPO",gx.O.AV20SitTribTipo,0)},c2v:function(){gx.O.AV20SitTribTipo=this.val()},val:function(){return gx.fn.getControlValue("vSITTRIBTIPO")},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaotributariatipo,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIATIPO",gxz:"Z3564SituacaoTributariaTipo",gxold:"O3564SituacaoTributariaTipo",gxvar:"A3564SituacaoTributariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3564SituacaoTributariaTipo=Value},v2z:function(Value){gx.O.Z3564SituacaoTributariaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("SITUACAOTRIBUTARIATIPO",gx.O.A3564SituacaoTributariaTipo)},c2v:function(){gx.O.A3564SituacaoTributariaTipo=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIATIPO")},nac:function(){return !(""==this.AV19SituacaoTributariaTipo)}};
   GXValidFnc[19]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaotributariacodigo,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIACODIGO",gxz:"Z3566SituacaoTributariaCodigo",gxold:"O3566SituacaoTributariaCodigo",gxvar:"A3566SituacaoTributariaCodigo",ucs:[],op:[15,21],ip:[15,21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3566SituacaoTributariaCodigo=Value},v2z:function(Value){gx.O.Z3566SituacaoTributariaCodigo=Value},v2c:function(){gx.fn.setControlValue("SITUACAOTRIBUTARIACODIGO",gx.O.A3566SituacaoTributariaCodigo,0)},c2v:function(){gx.O.A3566SituacaoTributariaCodigo=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIACODIGO")},nac:function(){return !(""==this.AV18SituacaoTributariaCodigo)}};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:130,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Situacaotributariadescricao,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIADESCRICAO",gxz:"Z3571SituacaoTributariaDescricao",gxold:"O3571SituacaoTributariaDescricao",gxvar:"A3571SituacaoTributariaDescricao",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3571SituacaoTributariaDescricao=Value},v2z:function(Value){gx.O.Z3571SituacaoTributariaDescricao=Value},v2c:function(){gx.fn.setControlValue("SITUACAOTRIBUTARIADESCRICAO",gx.O.A3571SituacaoTributariaDescricao,0)},c2v:function(){gx.O.A3571SituacaoTributariaDescricao=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaotributariatipotributac,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIATIPOTRIBUTAC",gxz:"Z3568SituacaoTributariaTipoTributac",gxold:"O3568SituacaoTributariaTipoTributac",gxvar:"A3568SituacaoTributariaTipoTributac",ucs:[],op:[31,15],ip:[15,31],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3568SituacaoTributariaTipoTributac=Value},v2z:function(Value){gx.O.Z3568SituacaoTributariaTipoTributac=Value},v2c:function(){gx.fn.setComboBoxValue("SITUACAOTRIBUTARIATIPOTRIBUTAC",gx.O.A3568SituacaoTributariaTipoTributac)},c2v:function(){gx.O.A3568SituacaoTributariaTipoTributac=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIATIPOTRIBUTAC")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABTIPOCSTENT",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaotributariatipoentrada,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIATIPOENTRADA",gxz:"Z9732SituacaoTributariaTipoEntrada",gxold:"O9732SituacaoTributariaTipoEntrada",gxvar:"A9732SituacaoTributariaTipoEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9732SituacaoTributariaTipoEntrada=Value},v2z:function(Value){gx.O.Z9732SituacaoTributariaTipoEntrada=Value},v2c:function(){gx.fn.setComboBoxValue("SITUACAOTRIBUTARIATIPOENTRADA",gx.O.A9732SituacaoTributariaTipoEntrada)},c2v:function(){gx.O.A9732SituacaoTributariaTipoEntrada=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIATIPOENTRADA")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE5",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaotributariaentrada,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIAENTRADA",gxz:"Z8935SituacaoTributariaEntrada",gxold:"O8935SituacaoTributariaEntrada",gxvar:"A8935SituacaoTributariaEntrada",ucs:[],op:[45,37],ip:[45,37,43],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8935SituacaoTributariaEntrada=Value},v2z:function(Value){gx.O.Z8935SituacaoTributariaEntrada=Value},v2c:function(){gx.fn.setControlValue("SITUACAOTRIBUTARIAENTRADA",gx.O.A8935SituacaoTributariaEntrada,0)},c2v:function(){gx.O.A8935SituacaoTributariaEntrada=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIAENTRADA")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"BMPPROMPTCST1",grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOTRIBUTARIAENTRADADESC",gxz:"ZV26SituacaoTributariaEntradaDesc",gxold:"OV26SituacaoTributariaEntradaDesc",gxvar:"AV26SituacaoTributariaEntradaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26SituacaoTributariaEntradaDesc=Value},v2z:function(Value){gx.O.ZV26SituacaoTributariaEntradaDesc=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOTRIBUTARIAENTRADADESC",gx.O.AV26SituacaoTributariaEntradaDesc,0)},c2v:function(){gx.O.AV26SituacaoTributariaEntradaDesc=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIAENTRADADESC")},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV29QtdeChar",gxold:"OV29QtdeChar",gxvar:"AV29QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV29QtdeChar,0)},c2v:function(){gx.O.AV29QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOTRIBUTARIATIPOENTRADA",gxz:"ZV23SituacaoTributariaTipoEntrada",gxold:"OV23SituacaoTributariaTipoEntrada",gxvar:"AV23SituacaoTributariaTipoEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23SituacaoTributariaTipoEntrada=Value},v2z:function(Value){gx.O.ZV23SituacaoTributariaTipoEntrada=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOTRIBUTARIATIPOENTRADA",gx.O.AV23SituacaoTributariaTipoEntrada)},c2v:function(){gx.O.AV23SituacaoTributariaTipoEntrada=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPOENTRADA")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABREDBASE",grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaotributariasnreducao,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIASNREDUCAO",gxz:"Z3569SituacaoTributariaSnReducao",gxold:"O3569SituacaoTributariaSnReducao",gxvar:"A3569SituacaoTributariaSnReducao",ucs:[],op:[31,54],ip:[31,54],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3569SituacaoTributariaSnReducao=Value},v2z:function(Value){gx.O.Z3569SituacaoTributariaSnReducao=Value},v2c:function(){gx.fn.setCheckBoxValue("SITUACAOTRIBUTARIASNREDUCAO",gx.O.A3569SituacaoTributariaSnReducao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3569SituacaoTributariaSnReducao=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIASNREDUCAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[58]={fld:"TABST",grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaotributariasnsubstit,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIASNSUBSTIT",gxz:"Z3570SituacaoTributariaSnSubstit",gxold:"O3570SituacaoTributariaSnSubstit",gxvar:"A3570SituacaoTributariaSnSubstit",ucs:[],op:[],ip:[61],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3570SituacaoTributariaSnSubstit=Value},v2z:function(Value){gx.O.Z3570SituacaoTributariaSnSubstit=Value},v2c:function(){gx.fn.setCheckBoxValue("SITUACAOTRIBUTARIASNSUBSTIT",gx.O.A3570SituacaoTributariaSnSubstit,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3570SituacaoTributariaSnSubstit=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIASNSUBSTIT")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[65]={fld:"TABSTCOBANT",grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaotributariastanterior,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIASTANTERIOR",gxz:"Z4337SituacaoTributariaSTAnterior",gxold:"O4337SituacaoTributariaSTAnterior",gxvar:"A4337SituacaoTributariaSTAnterior",ucs:[],op:[],ip:[68],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A4337SituacaoTributariaSTAnterior=Value},v2z:function(Value){gx.O.Z4337SituacaoTributariaSTAnterior=Value},v2c:function(){gx.fn.setCheckBoxValue("SITUACAOTRIBUTARIASTANTERIOR",gx.O.A4337SituacaoTributariaSTAnterior,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4337SituacaoTributariaSTAnterior=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIASTANTERIOR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[72]={fld:"TABPERAPR",grid:0};
   GXValidFnc[75]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaotributariasnaprcredito,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIASNAPRCREDITO",gxz:"Z4338SituacaoTributariaSnAprCredito",gxold:"O4338SituacaoTributariaSnAprCredito",gxvar:"A4338SituacaoTributariaSnAprCredito",ucs:[],op:[],ip:[75],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A4338SituacaoTributariaSnAprCredito=Value},v2z:function(Value){gx.O.Z4338SituacaoTributariaSnAprCredito=Value},v2c:function(){gx.fn.setCheckBoxValue("SITUACAOTRIBUTARIASNAPRCREDITO",gx.O.A4338SituacaoTributariaSnAprCredito,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4338SituacaoTributariaSnAprCredito=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIASNAPRCREDITO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[79]={fld:"TABCALCICMS",grid:0};
   GXValidFnc[82]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaotributariacobrancaicms,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIACOBRANCAICMS",gxz:"Z7583SituacaoTributariaCobrancaICMS",gxold:"O7583SituacaoTributariaCobrancaICMS",gxvar:"A7583SituacaoTributariaCobrancaICMS",ucs:[],op:[],ip:[82],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A7583SituacaoTributariaCobrancaICMS=Value},v2z:function(Value){gx.O.Z7583SituacaoTributariaCobrancaICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("SITUACAOTRIBUTARIACOBRANCAICMS",gx.O.A7583SituacaoTributariaCobrancaICMS,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7583SituacaoTributariaCobrancaICMS=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIACOBRANCAICMS")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 82 , function() {
   });
   GXValidFnc[86]={fld:"TABTRIBQTDE",grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Situacaotributariasntribqtde,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIASNTRIBQTDE",gxz:"Z5384SituacaoTributariaSnTribQtde",gxold:"O5384SituacaoTributariaSnTribQtde",gxvar:"A5384SituacaoTributariaSnTribQtde",ucs:[],op:[89,31],ip:[31,89],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A5384SituacaoTributariaSnTribQtde=Value},v2z:function(Value){gx.O.Z5384SituacaoTributariaSnTribQtde=Value},v2c:function(){gx.fn.setCheckBoxValue("SITUACAOTRIBUTARIASNTRIBQTDE",gx.O.A5384SituacaoTributariaSnTribQtde,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5384SituacaoTributariaSnTribQtde=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIASNTRIBQTDE")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[92]={fld:"TABLE3",grid:0};
   GXValidFnc[95]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIAUSUARIOALT",gxz:"Z4019SituacaoTributariaUsuarioAlt",gxold:"O4019SituacaoTributariaUsuarioAlt",gxvar:"A4019SituacaoTributariaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4019SituacaoTributariaUsuarioAlt=Value},v2z:function(Value){gx.O.Z4019SituacaoTributariaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SITUACAOTRIBUTARIAUSUARIOALT",gx.O.A4019SituacaoTributariaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4019SituacaoTributariaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SITUACAOTRIBUTARIAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 97 , function() {
   });
   GXValidFnc[99]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIADATAHORAALT",gxz:"Z4020SituacaoTributariaDataHoraAlt",gxold:"O4020SituacaoTributariaDataHoraAlt",gxvar:"A4020SituacaoTributariaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4020SituacaoTributariaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4020SituacaoTributariaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SITUACAOTRIBUTARIADATAHORAALT",gx.O.A4020SituacaoTributariaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4020SituacaoTributariaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SITUACAOTRIBUTARIADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 99 , function() {
   });
   GXValidFnc[108]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[109]={fld:"JS", format:2,grid:0};
   GXValidFnc[110]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCST",gxz:"ZV34TipoCST",gxold:"OV34TipoCST",gxvar:"AV34TipoCST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TipoCST=Value},v2z:function(Value){gx.O.ZV34TipoCST=Value},v2c:function(){gx.fn.setControlValue("vTIPOCST",gx.O.AV34TipoCST,0)},c2v:function(){gx.O.AV34TipoCST=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCST")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"BTNHELP",grid:0};
   this.AV20SitTribTipo = "" ;
   this.ZV20SitTribTipo = "" ;
   this.OV20SitTribTipo = "" ;
   this.A3564SituacaoTributariaTipo = "" ;
   this.Z3564SituacaoTributariaTipo = "" ;
   this.O3564SituacaoTributariaTipo = "" ;
   this.A3566SituacaoTributariaCodigo = "" ;
   this.Z3566SituacaoTributariaCodigo = "" ;
   this.O3566SituacaoTributariaCodigo = "" ;
   this.A3571SituacaoTributariaDescricao = "" ;
   this.Z3571SituacaoTributariaDescricao = "" ;
   this.O3571SituacaoTributariaDescricao = "" ;
   this.A3568SituacaoTributariaTipoTributac = "" ;
   this.Z3568SituacaoTributariaTipoTributac = "" ;
   this.O3568SituacaoTributariaTipoTributac = "" ;
   this.A9732SituacaoTributariaTipoEntrada = "" ;
   this.Z9732SituacaoTributariaTipoEntrada = "" ;
   this.O9732SituacaoTributariaTipoEntrada = "" ;
   this.A8935SituacaoTributariaEntrada = "" ;
   this.Z8935SituacaoTributariaEntrada = "" ;
   this.O8935SituacaoTributariaEntrada = "" ;
   this.AV26SituacaoTributariaEntradaDesc = "" ;
   this.ZV26SituacaoTributariaEntradaDesc = "" ;
   this.OV26SituacaoTributariaEntradaDesc = "" ;
   this.AV29QtdeChar = 0 ;
   this.ZV29QtdeChar = 0 ;
   this.OV29QtdeChar = 0 ;
   this.AV23SituacaoTributariaTipoEntrada = "" ;
   this.ZV23SituacaoTributariaTipoEntrada = "" ;
   this.OV23SituacaoTributariaTipoEntrada = "" ;
   this.A3569SituacaoTributariaSnReducao = "" ;
   this.Z3569SituacaoTributariaSnReducao = "" ;
   this.O3569SituacaoTributariaSnReducao = "" ;
   this.A3570SituacaoTributariaSnSubstit = "" ;
   this.Z3570SituacaoTributariaSnSubstit = "" ;
   this.O3570SituacaoTributariaSnSubstit = "" ;
   this.A4337SituacaoTributariaSTAnterior = "" ;
   this.Z4337SituacaoTributariaSTAnterior = "" ;
   this.O4337SituacaoTributariaSTAnterior = "" ;
   this.A4338SituacaoTributariaSnAprCredito = "" ;
   this.Z4338SituacaoTributariaSnAprCredito = "" ;
   this.O4338SituacaoTributariaSnAprCredito = "" ;
   this.A7583SituacaoTributariaCobrancaICMS = "" ;
   this.Z7583SituacaoTributariaCobrancaICMS = "" ;
   this.O7583SituacaoTributariaCobrancaICMS = "" ;
   this.A5384SituacaoTributariaSnTribQtde = "" ;
   this.Z5384SituacaoTributariaSnTribQtde = "" ;
   this.O5384SituacaoTributariaSnTribQtde = "" ;
   this.A4019SituacaoTributariaUsuarioAlt = "" ;
   this.Z4019SituacaoTributariaUsuarioAlt = "" ;
   this.O4019SituacaoTributariaUsuarioAlt = "" ;
   this.A4020SituacaoTributariaDataHoraAlt = gx.date.nullDate() ;
   this.Z4020SituacaoTributariaDataHoraAlt = gx.date.nullDate() ;
   this.O4020SituacaoTributariaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV34TipoCST = "" ;
   this.ZV34TipoCST = "" ;
   this.OV34TipoCST = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV36Pgmname = "" ;
   this.AV37Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV34TipoCST = "" ;
   this.AV22SnErro = "" ;
   this.AV19SituacaoTributariaTipo = "" ;
   this.AV18SituacaoTributariaCodigo = "" ;
   this.A3564SituacaoTributariaTipo = "" ;
   this.A3566SituacaoTributariaCodigo = "" ;
   this.A9732SituacaoTributariaTipoEntrada = "" ;
   this.AV26SituacaoTributariaEntradaDesc = "" ;
   this.AV20SitTribTipo = "" ;
   this.AV21SnAlterou = "" ;
   this.AV31LogSituacaoTributariaTipo = "" ;
   this.AV32LogSituacaoTributariaCodigo = "" ;
   this.Gx_BScreen = 0 ;
   this.A3571SituacaoTributariaDescricao = "" ;
   this.A3568SituacaoTributariaTipoTributac = "" ;
   this.A3569SituacaoTributariaSnReducao = "" ;
   this.A3570SituacaoTributariaSnSubstit = "" ;
   this.A4337SituacaoTributariaSTAnterior = "" ;
   this.A4338SituacaoTributariaSnAprCredito = "" ;
   this.A5384SituacaoTributariaSnTribQtde = "" ;
   this.A7583SituacaoTributariaCobrancaICMS = "" ;
   this.A8935SituacaoTributariaEntrada = "" ;
   this.A4019SituacaoTributariaUsuarioAlt = "" ;
   this.A4020SituacaoTributariaDataHoraAlt = gx.date.nullDate() ;
   this.AV30lSituacaoTributarias = {} ;
   this.AV33LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e137h2_client": ["'FECHAR'", true] ,"e147h2_client": ["AFTER TRN", true] ,"e157h672_client": ["ENTER", true] ,"e167h672_client": ["CANCEL", true] ,"e117h672_client": ["'CONSULTACSTCORRESPONDENTE'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV18SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'CONSULTACSTCORRESPONDENTE'"] = [[{av:'AV19SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'A9732SituacaoTributariaTipoEntrada',fld:'SITUACAOTRIBUTARIATIPOENTRADA'},{av:'AV34TipoCST',fld:'vTIPOCST'}],[{av:'A9732SituacaoTributariaTipoEntrada',fld:'SITUACAOTRIBUTARIATIPOENTRADA'},{av:'A8935SituacaoTributariaEntrada',fld:'SITUACAOTRIBUTARIAENTRADA'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19SituacaoTributariaTipo", "vSITUACAOTRIBUTARIATIPO", 0, "char");
   this.setVCMap("AV18SituacaoTributariaCodigo", "vSITUACAOTRIBUTARIACODIGO", 0, "char");
   this.setVCMap("AV21SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV31LogSituacaoTributariaTipo", "vLOGSITUACAOTRIBUTARIATIPO", 0, "char");
   this.setVCMap("AV32LogSituacaoTributariaCodigo", "vLOGSITUACAOTRIBUTARIACODIGO", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV30lSituacaoTributarias", "vLSITUACAOTRIBUTARIAS", 0, "lSituacaoTributarias");
   this.setVCMap("AV33LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV37Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 672 ]= ["O8935SituacaoTributariaEntrada","O7583SituacaoTributariaCobrancaICMS","O5384SituacaoTributariaSnTribQtde","O4338SituacaoTributariaSnAprCredito","O4337SituacaoTributariaSTAnterior","O3570SituacaoTributariaSnSubstit","O3569SituacaoTributariaSnReducao","O3568SituacaoTributariaTipoTributac","O3571SituacaoTributariaDescricao"] ;
});
gx.setParentObj(new tsituacaotributaria());
