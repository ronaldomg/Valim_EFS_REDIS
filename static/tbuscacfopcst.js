/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:16:44.88
*/
gx.evt.autoSkip = false;
gx.define('tbuscacfopcst', false, function () {
   this.ServerClass =  "tbuscacfopcst" ;
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
      this.AV20BuscaCfopCSTTrnSaidaCodigo=gx.fn.getControlValue("vBUSCACFOPCSTTRNSAIDACODIGO") ;
      this.AV19BuscaCfopCSTTpTributacao=gx.fn.getControlValue("vBUSCACFOPCSTTPTRIBUTACAO") ;
      this.AV21BuscaCfopCSTTrnSaidaEmpId=gx.fn.getControlValue("vBUSCACFOPCSTTRNSAIDAEMPID") ;
      this.A9419BuscaCfopCSTTrnSaidaDesc=gx.fn.getControlValue("BUSCACFOPCSTTRNSAIDADESC") ;
      this.A9426BuscaCfopCSTCFOPForDescricao=gx.fn.getControlValue("BUSCACFOPCSTCFOPFORDESCRICAO") ;
      this.A9424BuscaCfopCSTCFOPDenDescricao=gx.fn.getControlValue("BUSCACFOPCSTCFOPDENDESCRICAO") ;
      this.AV28CSTDescricao=gx.fn.getControlValue("vCSTDESCRICAO") ;
      this.AV34CSTDescricao2=gx.fn.getControlValue("vCSTDESCRICAO2") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV40Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV39Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV32TransacaoSaidaFilialId=gx.fn.getIntegerValue("vTRANSACAOSAIDAFILIALID",'.') ;
   };
   this.Valid_Buscacfopcsttrnsaidacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BUSCACFOPCSTTRNSAIDACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Buscacfopcsttptributacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BUSCACFOPCSTTPTRIBUTACAO");
         this.AnyError  = 0;
         if ( (""==this.A9431BuscaCfopCSTTpTributacao) )
         {
            try {
               gxballoon.setError("Informe o tipo de Tributação");
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
   this.Valid_Buscacfopcsttrnsaidaempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Buscacfopcsttrnsaidaempid",["gx.O.A9429BuscaCfopCSTTrnSaidaEmpId", "gx.O.A9430BuscaCfopCSTTrnSaidaCodigo", "gx.O.AV23BuscaCfopCSTTrnSaidaDesc", "gx.O.A9419BuscaCfopCSTTrnSaidaDesc"],["A9419BuscaCfopCSTTrnSaidaDesc"]);
      return true;
   }
   this.Validv_Buscacfopcsttrnsaidadesc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBUSCACFOPCSTTRNSAIDADESC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Buscacfopcststcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BUSCACFOPCSTSTCODIGO");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A9421BuscaCfopCSTSTCodigo) )
            {
               this.A9420BuscaCfopCSTSTTipo =  this.AV22BuscaCfopCSTSTTipo  ;
            }
         }
         catch(e){}
         if ( (""==this.A9421BuscaCfopCSTSTCodigo) && this.AV38isSATNFCE )
         {
            try {
               gxballoon.setError("Informe a situação tributária");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (""==this.A9421BuscaCfopCSTSTCodigo) && ! this.AV38isSATNFCE )
         {
            try {
               gxballoon.setError("Informe a situação tributária do simples");
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
   this.Valid_Buscacfopcststtipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Buscacfopcststtipo",["gx.O.A9420BuscaCfopCSTSTTipo", "gx.O.A9421BuscaCfopCSTSTCodigo", "gx.O.A9422BuscaCfopCSTSTDescricao", "gx.O.AV28CSTDescricao"],["A9422BuscaCfopCSTSTDescricao", "AV28CSTDescricao"]);
      return true;
   }
   this.Valid_Buscacfopcststdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BUSCACFOPCSTSTDESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Buscacfopcstdebcrecodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BUSCACFOPCSTDEBCRECODIGO");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A11283BuscaCfopCSTDebCreCodigo) )
            {
               this.A11282BuscaCfopCSTDebCreTipo =  this.AV35BuscaCfopCSTDebCreTipo  ;
            }
         }
         catch(e){}
         if ( (""==this.A11283BuscaCfopCSTDebCreCodigo) && this.AV38isSATNFCE )
         {
            try {
               gxballoon.setError("Informe a situação tributária do regime normal");
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
   this.Valid_Buscacfopcstdebcretipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Buscacfopcstdebcretipo",["gx.O.A11282BuscaCfopCSTDebCreTipo", "gx.O.A11283BuscaCfopCSTDebCreCodigo", "gx.O.A11284BuscaCfopCSTDebCreDescricao", "gx.O.AV34CSTDescricao2"],["A11284BuscaCfopCSTDebCreDescricao", "AV34CSTDescricao2"]);
      return true;
   }
   this.Valid_Buscacfopcstdebcredescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BUSCACFOPCSTDEBCREDESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Buscacfopcstcfopdencodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Buscacfopcstcfopdencodigo",["gx.O.A9423BuscaCfopCSTCFOPDenCodigo", "gx.O.A9424BuscaCfopCSTCFOPDenDescricao", "gx.O.AV26CFOPDenEstDesc"],["A9424BuscaCfopCSTCFOPDenDescricao", "AV26CFOPDenEstDesc"]);
      return true;
   }
   this.Valid_Buscacfopcstcfopforcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Buscacfopcstcfopforcodigo",["gx.O.O9425BuscaCfopCSTCFOPForCodigo", "gx.O.O9423BuscaCfopCSTCFOPDenCodigo", "gx.O.O11283BuscaCfopCSTDebCreCodigo", "gx.O.O11282BuscaCfopCSTDebCreTipo", "gx.O.O9421BuscaCfopCSTSTCodigo", "gx.O.O9420BuscaCfopCSTSTTipo", "gx.O.O9431BuscaCfopCSTTpTributacao", "gx.O.A9425BuscaCfopCSTCFOPForCodigo", "gx.O.A9426BuscaCfopCSTCFOPForDescricao", "gx.O.A9431BuscaCfopCSTTpTributacao", "gx.O.A9420BuscaCfopCSTSTTipo", "gx.O.A9421BuscaCfopCSTSTCodigo", "gx.O.A11282BuscaCfopCSTDebCreTipo", "gx.O.A11283BuscaCfopCSTDebCreCodigo", "gx.O.A9423BuscaCfopCSTCFOPDenCodigo", "gx.O.AV27CFOPForEstDesc", "gx.O.AV18SnAlterou"],["A9426BuscaCfopCSTCFOPForDescricao", "AV27CFOPForEstDesc", "AV18SnAlterou"]);
      return true;
   }
   this.Validv_Buscacfopcstdebcretipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBUSCACFOPCSTDEBCRETIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Issatnfce=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vISSATNFCE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sd=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Buscacfopcststtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBUSCACFOPCSTSTTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12dj704_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hconsultasituacaotributaria",[this.AV35BuscaCfopCSTDebCreTipo, "", ""]), ["A11283BuscaCfopCSTDebCreCodigo", "A11282BuscaCfopCSTDebCreTipo"]);
      this.refreshOutputs([{av:'A11282BuscaCfopCSTDebCreTipo',fld:'BUSCACFOPCSTDEBCRETIPO'},{av:'A11283BuscaCfopCSTDebCreCodigo',fld:'BUSCACFOPCSTDEBCRECODIGO'}]);
   };
   this.e11dj704_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hconsultasituacaotributaria",[this.AV22BuscaCfopCSTSTTipo, "", ""]), ["A9421BuscaCfopCSTSTCodigo", "A9420BuscaCfopCSTSTTipo"]);
      this.refreshOutputs([{av:'A9420BuscaCfopCSTSTTipo',fld:'BUSCACFOPCSTSTTIPO'},{av:'A9421BuscaCfopCSTSTCodigo',fld:'BUSCACFOPCSTSTCODIGO'}]);
   };
   this.e14dj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15dj2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e16dj704_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17dj704_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,23,25,26,27,28,31,33,34,35,36,39,41,42,45,47,48,51,54,56,58,67,68,69,70,71,72,73,74,75,78,80,81];
   this.GXLastCtrlId =81;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscacfopcsttrnsaidacodigo,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTTRNSAIDACODIGO",gxz:"Z9430BuscaCfopCSTTrnSaidaCodigo",gxold:"O9430BuscaCfopCSTTrnSaidaCodigo",gxvar:"A9430BuscaCfopCSTTrnSaidaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9430BuscaCfopCSTTrnSaidaCodigo=Value},v2z:function(Value){gx.O.Z9430BuscaCfopCSTTrnSaidaCodigo=Value},v2c:function(){gx.fn.setControlValue("BUSCACFOPCSTTRNSAIDACODIGO",gx.O.A9430BuscaCfopCSTTrnSaidaCodigo,0)},c2v:function(){gx.O.A9430BuscaCfopCSTTrnSaidaCodigo=this.val()},val:function(){return gx.fn.getControlValue("BUSCACFOPCSTTRNSAIDACODIGO")},nac:function(){return !(""==this.AV20BuscaCfopCSTTrnSaidaCodigo)}};
   GXValidFnc[15]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Buscacfopcsttrnsaidadesc,isvalid:null,rgrid:[],fld:"vBUSCACFOPCSTTRNSAIDADESC",gxz:"ZV23BuscaCfopCSTTrnSaidaDesc",gxold:"OV23BuscaCfopCSTTrnSaidaDesc",gxvar:"AV23BuscaCfopCSTTrnSaidaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23BuscaCfopCSTTrnSaidaDesc=Value},v2z:function(Value){gx.O.ZV23BuscaCfopCSTTrnSaidaDesc=Value},v2c:function(){gx.fn.setControlValue("vBUSCACFOPCSTTRNSAIDADESC",gx.O.AV23BuscaCfopCSTTrnSaidaDesc,0)},c2v:function(){gx.O.AV23BuscaCfopCSTTrnSaidaDesc=this.val()},val:function(){return gx.fn.getControlValue("vBUSCACFOPCSTTRNSAIDADESC")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscacfopcsttptributacao,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTTPTRIBUTACAO",gxz:"Z9431BuscaCfopCSTTpTributacao",gxold:"O9431BuscaCfopCSTTpTributacao",gxvar:"A9431BuscaCfopCSTTpTributacao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9431BuscaCfopCSTTpTributacao=Value},v2z:function(Value){gx.O.Z9431BuscaCfopCSTTpTributacao=Value},v2c:function(){gx.fn.setComboBoxValue("BUSCACFOPCSTTPTRIBUTACAO",gx.O.A9431BuscaCfopCSTTpTributacao)},c2v:function(){gx.O.A9431BuscaCfopCSTTpTributacao=this.val()},val:function(){return gx.fn.getControlValue("BUSCACFOPCSTTPTRIBUTACAO")},nac:function(){return !(""==this.AV19BuscaCfopCSTTpTributacao)}};
   GXValidFnc[23]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscacfopcststcodigo,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTSTCODIGO",gxz:"Z9421BuscaCfopCSTSTCodigo",gxold:"O9421BuscaCfopCSTSTCodigo",gxvar:"A9421BuscaCfopCSTSTCodigo",ucs:[],op:[71,25,26],ip:[26,71,25,74],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9421BuscaCfopCSTSTCodigo=Value},v2z:function(Value){gx.O.Z9421BuscaCfopCSTSTCodigo=Value},v2c:function(){gx.fn.setControlValue("BUSCACFOPCSTSTCODIGO",gx.O.A9421BuscaCfopCSTSTCodigo,0)},c2v:function(){gx.O.A9421BuscaCfopCSTSTCodigo=this.val()},val:function(){return gx.fn.getControlValue("BUSCACFOPCSTSTCODIGO")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscacfopcststtipo,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTSTTIPO",gxz:"Z9420BuscaCfopCSTSTTipo",gxold:"O9420BuscaCfopCSTSTTipo",gxvar:"A9420BuscaCfopCSTSTTipo",ucs:[],op:[28],ip:[28,25,26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9420BuscaCfopCSTSTTipo=Value},v2z:function(Value){gx.O.Z9420BuscaCfopCSTSTTipo=Value},v2c:function(){gx.fn.setControlValue("BUSCACFOPCSTSTTIPO",gx.O.A9420BuscaCfopCSTSTTipo,0)},c2v:function(){gx.O.A9420BuscaCfopCSTSTTipo=this.val()},val:function(){return gx.fn.getControlValue("BUSCACFOPCSTSTTIPO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"PROMPT1",grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:130,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Buscacfopcststdescricao,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTSTDESCRICAO",gxz:"Z9422BuscaCfopCSTSTDescricao",gxold:"O9422BuscaCfopCSTSTDescricao",gxvar:"A9422BuscaCfopCSTSTDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9422BuscaCfopCSTSTDescricao=Value},v2z:function(Value){gx.O.Z9422BuscaCfopCSTSTDescricao=Value},v2c:function(){gx.fn.setControlValue("BUSCACFOPCSTSTDESCRICAO",gx.O.A9422BuscaCfopCSTSTDescricao,0)},c2v:function(){gx.O.A9422BuscaCfopCSTSTDescricao=this.val()},val:function(){return gx.fn.getControlValue("BUSCACFOPCSTSTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscacfopcstdebcrecodigo,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTDEBCRECODIGO",gxz:"Z11283BuscaCfopCSTDebCreCodigo",gxold:"O11283BuscaCfopCSTDebCreCodigo",gxvar:"A11283BuscaCfopCSTDebCreCodigo",ucs:[],op:[71,33,34],ip:[34,71,33,69],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11283BuscaCfopCSTDebCreCodigo=Value},v2z:function(Value){gx.O.Z11283BuscaCfopCSTDebCreCodigo=Value},v2c:function(){gx.fn.setControlValue("BUSCACFOPCSTDEBCRECODIGO",gx.O.A11283BuscaCfopCSTDebCreCodigo,0)},c2v:function(){gx.O.A11283BuscaCfopCSTDebCreCodigo=this.val()},val:function(){return gx.fn.getControlValue("BUSCACFOPCSTDEBCRECODIGO")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscacfopcstdebcretipo,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTDEBCRETIPO",gxz:"Z11282BuscaCfopCSTDebCreTipo",gxold:"O11282BuscaCfopCSTDebCreTipo",gxvar:"A11282BuscaCfopCSTDebCreTipo",ucs:[],op:[36],ip:[36,33,34],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11282BuscaCfopCSTDebCreTipo=Value},v2z:function(Value){gx.O.Z11282BuscaCfopCSTDebCreTipo=Value},v2c:function(){gx.fn.setComboBoxValue("BUSCACFOPCSTDEBCRETIPO",gx.O.A11282BuscaCfopCSTDebCreTipo)},c2v:function(){gx.O.A11282BuscaCfopCSTDebCreTipo=this.val()},val:function(){return gx.fn.getControlValue("BUSCACFOPCSTDEBCRETIPO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"PROMPT2",grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:130,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Buscacfopcstdebcredescricao,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTDEBCREDESCRICAO",gxz:"Z11284BuscaCfopCSTDebCreDescricao",gxold:"O11284BuscaCfopCSTDebCreDescricao",gxvar:"A11284BuscaCfopCSTDebCreDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11284BuscaCfopCSTDebCreDescricao=Value},v2z:function(Value){gx.O.Z11284BuscaCfopCSTDebCreDescricao=Value},v2c:function(){gx.fn.setControlValue("BUSCACFOPCSTDEBCREDESCRICAO",gx.O.A11284BuscaCfopCSTDebCreDescricao,0)},c2v:function(){gx.O.A11284BuscaCfopCSTDebCreDescricao=this.val()},val:function(){return gx.fn.getControlValue("BUSCACFOPCSTDEBCREDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscacfopcstcfopdencodigo,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTCFOPDENCODIGO",gxz:"Z9423BuscaCfopCSTCFOPDenCodigo",gxold:"O9423BuscaCfopCSTCFOPDenCodigo",gxvar:"A9423BuscaCfopCSTCFOPDenCodigo",ucs:[],op:[41,42],ip:[42,41],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9423BuscaCfopCSTCFOPDenCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9423BuscaCfopCSTCFOPDenCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BUSCACFOPCSTCFOPDENCODIGO",gx.O.A9423BuscaCfopCSTCFOPDenCodigo,0)},c2v:function(){gx.O.A9423BuscaCfopCSTCFOPDenCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BUSCACFOPCSTCFOPDENCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPDENESTDESC",gxz:"ZV26CFOPDenEstDesc",gxold:"OV26CFOPDenEstDesc",gxvar:"AV26CFOPDenEstDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26CFOPDenEstDesc=Value},v2z:function(Value){gx.O.ZV26CFOPDenEstDesc=Value},v2c:function(){gx.fn.setControlValue("vCFOPDENESTDESC",gx.O.AV26CFOPDenEstDesc,0)},c2v:function(){gx.O.AV26CFOPDenEstDesc=this.val()},val:function(){return gx.fn.getControlValue("vCFOPDENESTDESC")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscacfopcstcfopforcodigo,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTCFOPFORCODIGO",gxz:"Z9425BuscaCfopCSTCFOPForCodigo",gxold:"O9425BuscaCfopCSTCFOPForCodigo",gxvar:"A9425BuscaCfopCSTCFOPForCodigo",ucs:[],op:[47,48],ip:[48,41,33,34,25,26,20,47],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9425BuscaCfopCSTCFOPForCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9425BuscaCfopCSTCFOPForCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BUSCACFOPCSTCFOPFORCODIGO",gx.O.A9425BuscaCfopCSTCFOPForCodigo,0)},c2v:function(){gx.O.A9425BuscaCfopCSTCFOPForCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BUSCACFOPCSTCFOPFORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPFORESTDESC",gxz:"ZV27CFOPForEstDesc",gxold:"OV27CFOPForEstDesc",gxvar:"AV27CFOPForEstDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27CFOPForEstDesc=Value},v2z:function(Value){gx.O.ZV27CFOPForEstDesc=Value},v2c:function(){gx.fn.setControlValue("vCFOPFORESTDESC",gx.O.AV27CFOPForEstDesc,0)},c2v:function(){gx.O.AV27CFOPForEstDesc=this.val()},val:function(){return gx.fn.getControlValue("vCFOPFORESTDESC")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE4",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTUSUARIOALT",gxz:"Z9427BuscaCfopCSTUsuarioAlt",gxold:"O9427BuscaCfopCSTUsuarioAlt",gxvar:"A9427BuscaCfopCSTUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9427BuscaCfopCSTUsuarioAlt=Value},v2z:function(Value){gx.O.Z9427BuscaCfopCSTUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("BUSCACFOPCSTUSUARIOALT",gx.O.A9427BuscaCfopCSTUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9427BuscaCfopCSTUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("BUSCACFOPCSTUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[58]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTDATAHORAALT",gxz:"Z9428BuscaCfopCSTDataHoraAlt",gxold:"O9428BuscaCfopCSTDataHoraAlt",gxvar:"A9428BuscaCfopCSTDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9428BuscaCfopCSTDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9428BuscaCfopCSTDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BUSCACFOPCSTDATAHORAALT",gx.O.A9428BuscaCfopCSTDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9428BuscaCfopCSTDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("BUSCACFOPCSTDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[67]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscacfopcsttrnsaidaempid,isvalid:null,rgrid:[],fld:"BUSCACFOPCSTTRNSAIDAEMPID",gxz:"Z9429BuscaCfopCSTTrnSaidaEmpId",gxold:"O9429BuscaCfopCSTTrnSaidaEmpId",gxvar:"A9429BuscaCfopCSTTrnSaidaEmpId",ucs:[],op:[],ip:[15,14,68],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9429BuscaCfopCSTTrnSaidaEmpId=Value},v2z:function(Value){gx.O.Z9429BuscaCfopCSTTrnSaidaEmpId=Value},v2c:function(){gx.fn.setControlValue("BUSCACFOPCSTTRNSAIDAEMPID",gx.O.A9429BuscaCfopCSTTrnSaidaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9429BuscaCfopCSTTrnSaidaEmpId=this.val()},val:function(){return gx.fn.getControlValue("BUSCACFOPCSTTRNSAIDAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Buscacfopcstdebcretipo,isvalid:null,rgrid:[],fld:"vBUSCACFOPCSTDEBCRETIPO",gxz:"ZV35BuscaCfopCSTDebCreTipo",gxold:"OV35BuscaCfopCSTDebCreTipo",gxvar:"AV35BuscaCfopCSTDebCreTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35BuscaCfopCSTDebCreTipo=Value},v2z:function(Value){gx.O.ZV35BuscaCfopCSTDebCreTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vBUSCACFOPCSTDEBCRETIPO",gx.O.AV35BuscaCfopCSTDebCreTipo)},c2v:function(){gx.O.AV35BuscaCfopCSTDebCreTipo=this.val()},val:function(){return gx.fn.getControlValue("vBUSCACFOPCSTDEBCRETIPO")},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Sf,isvalid:null,rgrid:[],fld:"vSF",gxz:"ZV25SF",gxold:"OV25SF",gxvar:"AV25SF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25SF=Value},v2z:function(Value){gx.O.ZV25SF=Value},v2c:function(){gx.fn.setControlValue("vSF",gx.O.AV25SF,0)},c2v:function(){gx.O.AV25SF=this.val()},val:function(){return gx.fn.getControlValue("vSF")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Issatnfce,isvalid:null,rgrid:[],fld:"vISSATNFCE",gxz:"ZV38isSATNFCE",gxold:"OV38isSATNFCE",gxvar:"AV38isSATNFCE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV38isSATNFCE=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV38isSATNFCE=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISSATNFCE",gx.O.AV38isSATNFCE,true)},c2v:function(){gx.O.AV38isSATNFCE=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISSATNFCE")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[72]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Sd,isvalid:null,rgrid:[],fld:"vSD",gxz:"ZV24SD",gxold:"OV24SD",gxvar:"AV24SD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24SD=Value},v2z:function(Value){gx.O.ZV24SD=Value},v2c:function(){gx.fn.setControlValue("vSD",gx.O.AV24SD,0)},c2v:function(){gx.O.AV24SD=this.val()},val:function(){return gx.fn.getControlValue("vSD")},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV29QtdeChar",gxold:"OV29QtdeChar",gxvar:"AV29QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV29QtdeChar,0)},c2v:function(){gx.O.AV29QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Buscacfopcststtipo,isvalid:null,rgrid:[],fld:"vBUSCACFOPCSTSTTIPO",gxz:"ZV22BuscaCfopCSTSTTipo",gxold:"OV22BuscaCfopCSTSTTipo",gxvar:"AV22BuscaCfopCSTSTTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22BuscaCfopCSTSTTipo=Value},v2z:function(Value){gx.O.ZV22BuscaCfopCSTSTTipo=Value},v2c:function(){gx.fn.setControlValue("vBUSCACFOPCSTSTTIPO",gx.O.AV22BuscaCfopCSTSTTipo,0)},c2v:function(){gx.O.AV22BuscaCfopCSTSTTipo=this.val()},val:function(){return gx.fn.getControlValue("vBUSCACFOPCSTSTTIPO")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"JS", format:2,grid:0};
   GXValidFnc[78]={fld:"BTNHELP",grid:0};
   GXValidFnc[80]={fld:"PROMPT_9423",grid:704};
   GXValidFnc[81]={fld:"PROMPT_9425",grid:704};
   this.A9430BuscaCfopCSTTrnSaidaCodigo = "" ;
   this.Z9430BuscaCfopCSTTrnSaidaCodigo = "" ;
   this.O9430BuscaCfopCSTTrnSaidaCodigo = "" ;
   this.AV23BuscaCfopCSTTrnSaidaDesc = "" ;
   this.ZV23BuscaCfopCSTTrnSaidaDesc = "" ;
   this.OV23BuscaCfopCSTTrnSaidaDesc = "" ;
   this.A9431BuscaCfopCSTTpTributacao = "" ;
   this.Z9431BuscaCfopCSTTpTributacao = "" ;
   this.O9431BuscaCfopCSTTpTributacao = "" ;
   this.A9421BuscaCfopCSTSTCodigo = "" ;
   this.Z9421BuscaCfopCSTSTCodigo = "" ;
   this.O9421BuscaCfopCSTSTCodigo = "" ;
   this.A9420BuscaCfopCSTSTTipo = "" ;
   this.Z9420BuscaCfopCSTSTTipo = "" ;
   this.O9420BuscaCfopCSTSTTipo = "" ;
   this.A9422BuscaCfopCSTSTDescricao = "" ;
   this.Z9422BuscaCfopCSTSTDescricao = "" ;
   this.O9422BuscaCfopCSTSTDescricao = "" ;
   this.A11283BuscaCfopCSTDebCreCodigo = "" ;
   this.Z11283BuscaCfopCSTDebCreCodigo = "" ;
   this.O11283BuscaCfopCSTDebCreCodigo = "" ;
   this.A11282BuscaCfopCSTDebCreTipo = "" ;
   this.Z11282BuscaCfopCSTDebCreTipo = "" ;
   this.O11282BuscaCfopCSTDebCreTipo = "" ;
   this.A11284BuscaCfopCSTDebCreDescricao = "" ;
   this.Z11284BuscaCfopCSTDebCreDescricao = "" ;
   this.O11284BuscaCfopCSTDebCreDescricao = "" ;
   this.A9423BuscaCfopCSTCFOPDenCodigo = 0 ;
   this.Z9423BuscaCfopCSTCFOPDenCodigo = 0 ;
   this.O9423BuscaCfopCSTCFOPDenCodigo = 0 ;
   this.AV26CFOPDenEstDesc = "" ;
   this.ZV26CFOPDenEstDesc = "" ;
   this.OV26CFOPDenEstDesc = "" ;
   this.A9425BuscaCfopCSTCFOPForCodigo = 0 ;
   this.Z9425BuscaCfopCSTCFOPForCodigo = 0 ;
   this.O9425BuscaCfopCSTCFOPForCodigo = 0 ;
   this.AV27CFOPForEstDesc = "" ;
   this.ZV27CFOPForEstDesc = "" ;
   this.OV27CFOPForEstDesc = "" ;
   this.A9427BuscaCfopCSTUsuarioAlt = "" ;
   this.Z9427BuscaCfopCSTUsuarioAlt = "" ;
   this.O9427BuscaCfopCSTUsuarioAlt = "" ;
   this.A9428BuscaCfopCSTDataHoraAlt = gx.date.nullDate() ;
   this.Z9428BuscaCfopCSTDataHoraAlt = gx.date.nullDate() ;
   this.O9428BuscaCfopCSTDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A9429BuscaCfopCSTTrnSaidaEmpId = "" ;
   this.Z9429BuscaCfopCSTTrnSaidaEmpId = "" ;
   this.O9429BuscaCfopCSTTrnSaidaEmpId = "" ;
   this.AV35BuscaCfopCSTDebCreTipo = "" ;
   this.ZV35BuscaCfopCSTDebCreTipo = "" ;
   this.OV35BuscaCfopCSTDebCreTipo = "" ;
   this.AV25SF = "" ;
   this.ZV25SF = "" ;
   this.OV25SF = "" ;
   this.AV38isSATNFCE = false ;
   this.ZV38isSATNFCE = false ;
   this.OV38isSATNFCE = false ;
   this.AV24SD = "" ;
   this.ZV24SD = "" ;
   this.OV24SD = "" ;
   this.AV29QtdeChar = 0 ;
   this.ZV29QtdeChar = 0 ;
   this.OV29QtdeChar = 0 ;
   this.AV22BuscaCfopCSTSTTipo = "" ;
   this.ZV22BuscaCfopCSTSTTipo = "" ;
   this.OV22BuscaCfopCSTSTTipo = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV39Pgmname = "" ;
   this.AV40Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV38isSATNFCE = false ;
   this.AV22BuscaCfopCSTSTTipo = "" ;
   this.AV35BuscaCfopCSTDebCreTipo = "" ;
   this.AV37TransacaoSaidaEmpresaId = "" ;
   this.AV32TransacaoSaidaFilialId = 0 ;
   this.AV24SD = "" ;
   this.AV25SF = "" ;
   this.AV18SnAlterou = "" ;
   this.AV29QtdeChar = 0 ;
   this.AV30Entrada = [ ] ;
   this.AV31Saida = [ ] ;
   this.AV21BuscaCfopCSTTrnSaidaEmpId = "" ;
   this.AV20BuscaCfopCSTTrnSaidaCodigo = "" ;
   this.AV23BuscaCfopCSTTrnSaidaDesc = "" ;
   this.AV19BuscaCfopCSTTpTributacao = "" ;
   this.A9429BuscaCfopCSTTrnSaidaEmpId = "" ;
   this.A9430BuscaCfopCSTTrnSaidaCodigo = "" ;
   this.A9431BuscaCfopCSTTpTributacao = "" ;
   this.A9419BuscaCfopCSTTrnSaidaDesc = "" ;
   this.A9420BuscaCfopCSTSTTipo = "" ;
   this.A11282BuscaCfopCSTDebCreTipo = "" ;
   this.AV27CFOPForEstDesc = "" ;
   this.AV26CFOPDenEstDesc = "" ;
   this.AV28CSTDescricao = "" ;
   this.AV34CSTDescricao2 = "" ;
   this.A9427BuscaCfopCSTUsuarioAlt = "" ;
   this.A9428BuscaCfopCSTDataHoraAlt = gx.date.nullDate() ;
   this.A9421BuscaCfopCSTSTCodigo = "" ;
   this.A9422BuscaCfopCSTSTDescricao = "" ;
   this.A11283BuscaCfopCSTDebCreCodigo = "" ;
   this.A11284BuscaCfopCSTDebCreDescricao = "" ;
   this.A9423BuscaCfopCSTCFOPDenCodigo = 0 ;
   this.A9424BuscaCfopCSTCFOPDenDescricao = "" ;
   this.A9425BuscaCfopCSTCFOPForCodigo = 0 ;
   this.A9426BuscaCfopCSTCFOPForDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e14dj2_client": ["'FECHAR'", true] ,"e15dj2_client": ["AFTER TRN", true] ,"e16dj704_client": ["ENTER", true] ,"e17dj704_client": ["CANCEL", true] ,"e12dj704_client": ["'PROMPTDEBCRE'", false] ,"e11dj704_client": ["'PROMPTST'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV21BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV20BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV23BuscaCfopCSTTrnSaidaDesc',fld:'vBUSCACFOPCSTTRNSAIDADESC'},{av:'AV19BuscaCfopCSTTpTributacao',fld:'vBUSCACFOPCSTTPTRIBUTACAO'},{av:'AV32TransacaoSaidaFilialId',fld:'vTRANSACAOSAIDAFILIALID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV21BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'},{av:'AV20BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV23BuscaCfopCSTTrnSaidaDesc',fld:'vBUSCACFOPCSTTRNSAIDADESC'}],[{av:'AV23BuscaCfopCSTTrnSaidaDesc',fld:'vBUSCACFOPCSTTRNSAIDADESC'},{av:'AV20BuscaCfopCSTTrnSaidaCodigo',fld:'vBUSCACFOPCSTTRNSAIDACODIGO'},{av:'AV21BuscaCfopCSTTrnSaidaEmpId',fld:'vBUSCACFOPCSTTRNSAIDAEMPID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'PROMPTDEBCRE'"] = [[{av:'AV35BuscaCfopCSTDebCreTipo',fld:'vBUSCACFOPCSTDEBCRETIPO'}],[{av:'A11282BuscaCfopCSTDebCreTipo',fld:'BUSCACFOPCSTDEBCRETIPO'},{av:'A11283BuscaCfopCSTDebCreCodigo',fld:'BUSCACFOPCSTDEBCRECODIGO'}]];
   this.EvtParms["'PROMPTST'"] = [[{av:'AV22BuscaCfopCSTSTTipo',fld:'vBUSCACFOPCSTSTTIPO'}],[{av:'A9420BuscaCfopCSTSTTipo',fld:'BUSCACFOPCSTSTTIPO'},{av:'A9421BuscaCfopCSTSTCodigo',fld:'BUSCACFOPCSTSTCODIGO'}]];
   this.setPrompt("PROMPT_9423", [41]);
   this.setPrompt("PROMPT_9425", [47]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20BuscaCfopCSTTrnSaidaCodigo", "vBUSCACFOPCSTTRNSAIDACODIGO", 0, "char");
   this.setVCMap("AV19BuscaCfopCSTTpTributacao", "vBUSCACFOPCSTTPTRIBUTACAO", 0, "char");
   this.setVCMap("AV21BuscaCfopCSTTrnSaidaEmpId", "vBUSCACFOPCSTTRNSAIDAEMPID", 0, "char");
   this.setVCMap("A9419BuscaCfopCSTTrnSaidaDesc", "BUSCACFOPCSTTRNSAIDADESC", 0, "svchar");
   this.setVCMap("A9426BuscaCfopCSTCFOPForDescricao", "BUSCACFOPCSTCFOPFORDESCRICAO", 0, "svchar");
   this.setVCMap("A9424BuscaCfopCSTCFOPDenDescricao", "BUSCACFOPCSTCFOPDENDESCRICAO", 0, "svchar");
   this.setVCMap("AV28CSTDescricao", "vCSTDESCRICAO", 0, "svchar");
   this.setVCMap("AV34CSTDescricao2", "vCSTDESCRICAO2", 0, "svchar");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV40Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV32TransacaoSaidaFilialId", "vTRANSACAOSAIDAFILIALID", 0, "int");
   this.InitStandaloneVars( );
   this.LvlOlds[ 704 ]= ["O9425BuscaCfopCSTCFOPForCodigo","O9423BuscaCfopCSTCFOPDenCodigo","O11283BuscaCfopCSTDebCreCodigo","O11282BuscaCfopCSTDebCreTipo","O9421BuscaCfopCSTSTCodigo","O9420BuscaCfopCSTSTTipo","O9431BuscaCfopCSTTpTributacao"] ;
});
gx.setParentObj(new tbuscacfopcst());
