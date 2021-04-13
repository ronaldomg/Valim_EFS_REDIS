/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:54:58.57
*/
gx.evt.autoSkip = false;
gx.define('ttransacaocontabil', false, function () {
   this.ServerClass =  "ttransacaocontabil" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV15EmpresaPadraoTRateio=gx.fn.getControlValue("vEMPRESAPADRAOTRATEIO") ;
      this.A579RateioDebitoEmpresaId=gx.fn.getControlValue("RATEIODEBITOEMPRESAID") ;
      this.A590RateioCreditoEmpresaId=gx.fn.getControlValue("RATEIOCREDITOEMPRESAID") ;
      this.AV17EmpresaPadraoTCentroCusto=gx.fn.getControlValue("vEMPRESAPADRAOTCENTROCUSTO") ;
      this.A582CentroCustoDebitoEmpresaId=gx.fn.getControlValue("CENTROCUSTODEBITOEMPRESAID") ;
      this.A593CentroCustoCreditoEmpresaId=gx.fn.getControlValue("CENTROCUSTOCREDITOEMPRESAID") ;
      this.AV18EmpresaPadraoTContaContabil=gx.fn.getControlValue("vEMPRESAPADRAOTCONTACONTABIL") ;
      this.A585ContaCreditoEmpresaId=gx.fn.getControlValue("CONTACREDITOEMPRESAID") ;
      this.A574ContaDebitoEmpresaId=gx.fn.getControlValue("CONTADEBITOEMPRESAID") ;
      this.AV16EmpresaPadraoTHistorico=gx.fn.getControlValue("vEMPRESAPADRAOTHISTORICO") ;
      this.A596HistoricoContaEmpresaId=gx.fn.getControlValue("HISTORICOCONTAEMPRESAID") ;
      this.A601HistoricoEstornoEmpresaId=gx.fn.getControlValue("HISTORICOESTORNOEMPRESAID") ;
      this.AV23TransacaoContabilId=gx.fn.getControlValue("vTRANSACAOCONTABILID") ;
      this.AV27ValidaTradutor=gx.fn.getControlValue("vVALIDATRADUTOR") ;
      this.AV28ValidaTradutor2=gx.fn.getControlValue("vVALIDATRADUTOR2") ;
      this.AV39ErroCaracteres=gx.fn.getControlValue("vERROCARACTERES") ;
      this.AV40ErroCaracteres2=gx.fn.getControlValue("vERROCARACTERES2") ;
      this.A9626HistoricoContaComplemento=gx.fn.getControlValue("HISTORICOCONTACOMPLEMENTO") ;
      this.AV54TransacaoContabilTipo=gx.fn.getControlValue("vTRANSACAOCONTABILTIPO") ;
      this.A9627HistoricoEstornoComplemento=gx.fn.getControlValue("HISTORICOESTORNOCOMPLEMENTO") ;
      this.AV22ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A578ContaDebitoTipoLancamento=gx.fn.getControlValue("CONTADEBITOTIPOLANCAMENTO") ;
      this.A589ContaCreditoTipoLancamento=gx.fn.getControlValue("CONTACREDITOTIPOLANCAMENTO") ;
      this.A598HistoricoContaDescricao=gx.fn.getControlValue("HISTORICOCONTADESCRICAO") ;
      this.A603HistoricoEstornoDescricao=gx.fn.getControlValue("HISTORICOESTORNODESCRICAO") ;
      this.AV56Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV55Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Transacaocontabilid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSACAOCONTABILID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Empresatransacaocontabilempres=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresatransacaocontabilempres",["gx.O.A346EmpresaTransacaoContabilEmpres"],[]);
      return true;
   }
   this.Valid_Transacaocontabildescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSACAOCONTABILDESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transacaocontabiltipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transacaocontabiltipo",["gx.O.A573TransacaoContabilTipo", "gx.O.AV54TransacaoContabilTipo"],["AV54TransacaoContabilTipo"]);
      return true;
   }
   this.Valid_Contadebitoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contadebitoid",["gx.O.A575ContaDebitoId", "gx.O.AV38ChamaOnBlurMascara", "gx.O.AV39ErroCaracteres"],["AV39ErroCaracteres"]);
      return true;
   }
   this.Valid_Contacreditoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contacreditoid",["gx.O.A586ContaCreditoId", "gx.O.AV38ChamaOnBlurMascara", "gx.O.AV40ErroCaracteres2"],["AV40ErroCaracteres2"]);
      return true;
   }
   this.Valid_Contadebitotradutorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTADEBITOTRADUTORID");
         this.AnyError  = 0;
         try {
            if ( this.A576ContaDebitoTradutorId != 0 )
            {
               gx.fn.setCtrlProperty("CONTADEBITOTRADUTORID","Visible", 1 );
            }
            else
            {
               if ( this.A576ContaDebitoTradutorId == 0 && ( (this.Gx_mode == 'INS') ) )
               {
                  gx.fn.setCtrlProperty("CONTADEBITOTRADUTORID","Visible", 0 );
               }
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
   this.Valid_Contacreditotradutorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTACREDITOTRADUTORID");
         this.AnyError  = 0;
         try {
            if ( this.A587ContaCreditoTradutorId != 0 )
            {
               gx.fn.setCtrlProperty("CONTACREDITOTRADUTORID","Visible", 1 );
            }
            else
            {
               if ( this.A587ContaCreditoTradutorId == 0 && ( (this.Gx_mode == 'INS') ) )
               {
                  gx.fn.setCtrlProperty("CONTACREDITOTRADUTORID","Visible", 0 );
               }
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
   this.Valid_Centrocustodebitoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CENTROCUSTODEBITOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Centrocustocreditoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CENTROCUSTOCREDITOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Rateiodebitoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RATEIODEBITOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Rateiocreditoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RATEIOCREDITOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicocontaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOCONTAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transacaocontabilcomplementohi=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSACAOCONTABILCOMPLEMENTOHI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicoestornoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOESTORNOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transacaocontabilcomplementoes=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transacaocontabilcomplementoes",["gx.O.O602HistoricoEstornoId", "gx.O.O600TransacaoContabilComplementoEs", "gx.O.O599TransacaoContabilComplementoHi", "gx.O.O597HistoricoContaId", "gx.O.O594CentroCustoCreditoId", "gx.O.O591RateioCreditoId", "gx.O.O586ContaCreditoId", "gx.O.O583CentroCustoDebitoId", "gx.O.O580RateioDebitoId", "gx.O.O575ContaDebitoId", "gx.O.O573TransacaoContabilTipo", "gx.O.O572TransacaoContabilDescricao", "gx.O.AV7UsrCod", "gx.O.A572TransacaoContabilDescricao", "gx.O.A573TransacaoContabilTipo", "gx.O.A575ContaDebitoId", "gx.O.A580RateioDebitoId", "gx.O.A583CentroCustoDebitoId", "gx.O.A586ContaCreditoId", "gx.O.A591RateioCreditoId", "gx.O.A594CentroCustoCreditoId", "gx.O.A597HistoricoContaId", "gx.O.A599TransacaoContabilComplementoHi", "gx.O.A600TransacaoContabilComplementoEs", "gx.O.A602HistoricoEstornoId", "gx.O.A770TransacaoContabilUsuarioId", 'gx.date.urlDateTime(gx.O.A771TransacaoContabilDataHoraAlt,"DMY4")'],["A770TransacaoContabilUsuarioId", "A771TransacaoContabilDataHoraAlt"]);
      return true;
   }
   this.Validv_Chamaonblurmascara=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCHAMAONBLURMASCARA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131j2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141j73_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151j73_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,21,23,25,27,32,34,35,37,39,40,43,45,47,49,52,54,56,58,62,65,68,70,71,73,75,76,81,83,88,90,91,94,97,99,102,104,107,110,112,114,121,122,123,126,128,132,133,134,135,136,137];
   this.GXLastCtrlId =137;
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV51Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV51Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV51Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "ttransacaocontabil_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transacaocontabilid,isvalid:null,rgrid:[],fld:"TRANSACAOCONTABILID",gxz:"Z347TransacaoContabilId",gxold:"O347TransacaoContabilId",gxvar:"A347TransacaoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A347TransacaoContabilId=Value},v2z:function(Value){gx.O.Z347TransacaoContabilId=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOCONTABILID",gx.O.A347TransacaoContabilId,0)},c2v:function(){gx.O.A347TransacaoContabilId=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOCONTABILID")},nac:function(){return !(""==this.AV23TransacaoContabilId)}};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transacaocontabildescricao,isvalid:null,rgrid:[],fld:"TRANSACAOCONTABILDESCRICAO",gxz:"Z572TransacaoContabilDescricao",gxold:"O572TransacaoContabilDescricao",gxvar:"A572TransacaoContabilDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A572TransacaoContabilDescricao=Value},v2z:function(Value){gx.O.Z572TransacaoContabilDescricao=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOCONTABILDESCRICAO",gx.O.A572TransacaoContabilDescricao,0)},c2v:function(){gx.O.A572TransacaoContabilDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOCONTABILDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transacaocontabiltipo,isvalid:null,rgrid:[],fld:"TRANSACAOCONTABILTIPO",gxz:"Z573TransacaoContabilTipo",gxold:"O573TransacaoContabilTipo",gxvar:"A573TransacaoContabilTipo",ucs:[],op:[],ip:[27],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A573TransacaoContabilTipo=Value},v2z:function(Value){gx.O.Z573TransacaoContabilTipo=Value},v2c:function(){gx.fn.setComboBoxValue("TRANSACAOCONTABILTIPO",gx.O.A573TransacaoContabilTipo)},c2v:function(){gx.O.A573TransacaoContabilTipo=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOCONTABILTIPO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contadebitoid,isvalid:null,rgrid:[],fld:"CONTADEBITOID",gxz:"Z575ContaDebitoId",gxold:"O575ContaDebitoId",gxvar:"A575ContaDebitoId",ucs:[],op:[],ip:[121,34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A575ContaDebitoId=Value},v2z:function(Value){gx.O.Z575ContaDebitoId=Value},v2c:function(){gx.fn.setControlValue("CONTADEBITOID",gx.O.A575ContaDebitoId,0)},c2v:function(){gx.O.A575ContaDebitoId=this.val()},val:function(){return gx.fn.getControlValue("CONTADEBITOID")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"PROMPTCCONTDEB",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contacreditoid,isvalid:null,rgrid:[],fld:"CONTACREDITOID",gxz:"Z586ContaCreditoId",gxold:"O586ContaCreditoId",gxvar:"A586ContaCreditoId",ucs:[],op:[],ip:[121,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A586ContaCreditoId=Value},v2z:function(Value){gx.O.Z586ContaCreditoId=Value},v2c:function(){gx.fn.setControlValue("CONTACREDITOID",gx.O.A586ContaCreditoId,0)},c2v:function(){gx.O.A586ContaCreditoId=this.val()},val:function(){return gx.fn.getControlValue("CONTACREDITOID")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"PROMPTCCONTCRED",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contadebitotradutorid,isvalid:null,rgrid:[],fld:"CONTADEBITOTRADUTORID",gxz:"Z576ContaDebitoTradutorId",gxold:"O576ContaDebitoTradutorId",gxvar:"A576ContaDebitoTradutorId",ucs:[],op:[],ip:[43],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A576ContaDebitoTradutorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z576ContaDebitoTradutorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTADEBITOTRADUTORID",gx.O.A576ContaDebitoTradutorId,0)},c2v:function(){gx.O.A576ContaDebitoTradutorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTADEBITOTRADUTORID",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTADEBITONOME",gxz:"Z577ContaDebitoNome",gxold:"O577ContaDebitoNome",gxvar:"A577ContaDebitoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A577ContaDebitoNome=Value},v2z:function(Value){gx.O.Z577ContaDebitoNome=Value},v2c:function(){gx.fn.setControlValue("CONTADEBITONOME",gx.O.A577ContaDebitoNome,0)},c2v:function(){gx.O.A577ContaDebitoNome=this.val()},val:function(){return gx.fn.getControlValue("CONTADEBITONOME")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contacreditotradutorid,isvalid:null,rgrid:[],fld:"CONTACREDITOTRADUTORID",gxz:"Z587ContaCreditoTradutorId",gxold:"O587ContaCreditoTradutorId",gxvar:"A587ContaCreditoTradutorId",ucs:[],op:[],ip:[47],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A587ContaCreditoTradutorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z587ContaCreditoTradutorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTACREDITOTRADUTORID",gx.O.A587ContaCreditoTradutorId,0)},c2v:function(){gx.O.A587ContaCreditoTradutorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTACREDITOTRADUTORID",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTACREDITONOME",gxz:"Z588ContaCreditoNome",gxold:"O588ContaCreditoNome",gxvar:"A588ContaCreditoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A588ContaCreditoNome=Value},v2z:function(Value){gx.O.Z588ContaCreditoNome=Value},v2c:function(){gx.fn.setControlValue("CONTACREDITONOME",gx.O.A588ContaCreditoNome,0)},c2v:function(){gx.O.A588ContaCreditoNome=this.val()},val:function(){return gx.fn.getControlValue("CONTACREDITONOME")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Centrocustodebitoid,isvalid:null,rgrid:[],fld:"CENTROCUSTODEBITOID",gxz:"Z583CentroCustoDebitoId",gxold:"O583CentroCustoDebitoId",gxvar:"A583CentroCustoDebitoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A583CentroCustoDebitoId=Value},v2z:function(Value){gx.O.Z583CentroCustoDebitoId=Value},v2c:function(){gx.fn.setControlValue("CENTROCUSTODEBITOID",gx.O.A583CentroCustoDebitoId,0)},c2v:function(){gx.O.A583CentroCustoDebitoId=this.val()},val:function(){return gx.fn.getControlValue("CENTROCUSTODEBITOID")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Centrocustocreditoid,isvalid:null,rgrid:[],fld:"CENTROCUSTOCREDITOID",gxz:"Z594CentroCustoCreditoId",gxold:"O594CentroCustoCreditoId",gxvar:"A594CentroCustoCreditoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A594CentroCustoCreditoId=Value},v2z:function(Value){gx.O.Z594CentroCustoCreditoId=Value},v2c:function(){gx.fn.setControlValue("CENTROCUSTOCREDITOID",gx.O.A594CentroCustoCreditoId,0)},c2v:function(){gx.O.A594CentroCustoCreditoId=this.val()},val:function(){return gx.fn.getControlValue("CENTROCUSTOCREDITOID")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTODEBITODESCRICAO",gxz:"Z584CentroCustoDebitoDescricao",gxold:"O584CentroCustoDebitoDescricao",gxvar:"A584CentroCustoDebitoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A584CentroCustoDebitoDescricao=Value},v2z:function(Value){gx.O.Z584CentroCustoDebitoDescricao=Value},v2c:function(){gx.fn.setControlValue("CENTROCUSTODEBITODESCRICAO",gx.O.A584CentroCustoDebitoDescricao,0)},c2v:function(){gx.O.A584CentroCustoDebitoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CENTROCUSTODEBITODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOCREDITODESCRICAO",gxz:"Z595CentroCustoCreditoDescricao",gxold:"O595CentroCustoCreditoDescricao",gxvar:"A595CentroCustoCreditoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A595CentroCustoCreditoDescricao=Value},v2z:function(Value){gx.O.Z595CentroCustoCreditoDescricao=Value},v2c:function(){gx.fn.setControlValue("CENTROCUSTOCREDITODESCRICAO",gx.O.A595CentroCustoCreditoDescricao,0)},c2v:function(){gx.O.A595CentroCustoCreditoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CENTROCUSTOCREDITODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rateiodebitoid,isvalid:null,rgrid:[],fld:"RATEIODEBITOID",gxz:"Z580RateioDebitoId",gxold:"O580RateioDebitoId",gxvar:"A580RateioDebitoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A580RateioDebitoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z580RateioDebitoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RATEIODEBITOID",gx.O.A580RateioDebitoId,0)},c2v:function(){gx.O.A580RateioDebitoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RATEIODEBITOID",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RATEIODEBITODESCRICAO",gxz:"Z581RateioDebitoDescricao",gxold:"O581RateioDebitoDescricao",gxvar:"A581RateioDebitoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A581RateioDebitoDescricao=Value},v2z:function(Value){gx.O.Z581RateioDebitoDescricao=Value},v2c:function(){gx.fn.setControlValue("RATEIODEBITODESCRICAO",gx.O.A581RateioDebitoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A581RateioDebitoDescricao=this.val()},val:function(){return gx.fn.getControlValue("RATEIODEBITODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rateiocreditoid,isvalid:null,rgrid:[],fld:"RATEIOCREDITOID",gxz:"Z591RateioCreditoId",gxold:"O591RateioCreditoId",gxvar:"A591RateioCreditoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A591RateioCreditoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z591RateioCreditoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RATEIOCREDITOID",gx.O.A591RateioCreditoId,0)},c2v:function(){gx.O.A591RateioCreditoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RATEIOCREDITOID",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RATEIOCREDITODESCRICAO",gxz:"Z592RateioCreditoDescricao",gxold:"O592RateioCreditoDescricao",gxvar:"A592RateioCreditoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A592RateioCreditoDescricao=Value},v2z:function(Value){gx.O.Z592RateioCreditoDescricao=Value},v2c:function(){gx.fn.setControlValue("RATEIOCREDITODESCRICAO",gx.O.A592RateioCreditoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A592RateioCreditoDescricao=this.val()},val:function(){return gx.fn.getControlValue("RATEIOCREDITODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 76 , function() {
   });
   GXValidFnc[81]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocontaid,isvalid:null,rgrid:[],fld:"HISTORICOCONTAID",gxz:"Z597HistoricoContaId",gxold:"O597HistoricoContaId",gxvar:"A597HistoricoContaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A597HistoricoContaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z597HistoricoContaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOCONTAID",gx.O.A597HistoricoContaId,0)},c2v:function(){gx.O.A597HistoricoContaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOCONTAID",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"svchar",len:180,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Transacaocontabilcomplementohi,isvalid:null,rgrid:[],fld:"TRANSACAOCONTABILCOMPLEMENTOHI",gxz:"Z599TransacaoContabilComplementoHi",gxold:"O599TransacaoContabilComplementoHi",gxvar:"A599TransacaoContabilComplementoHi",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A599TransacaoContabilComplementoHi=Value},v2z:function(Value){gx.O.Z599TransacaoContabilComplementoHi=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOCONTABILCOMPLEMENTOHI",gx.O.A599TransacaoContabilComplementoHi,0)},c2v:function(){gx.O.A599TransacaoContabilComplementoHi=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOCONTABILCOMPLEMENTOHI")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TAB2",grid:0};
   GXValidFnc[94]={fld:"TABLE4",grid:0};
   GXValidFnc[97]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicoestornoid,isvalid:null,rgrid:[],fld:"HISTORICOESTORNOID",gxz:"Z602HistoricoEstornoId",gxold:"O602HistoricoEstornoId",gxvar:"A602HistoricoEstornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A602HistoricoEstornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z602HistoricoEstornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOESTORNOID",gx.O.A602HistoricoEstornoId,0)},c2v:function(){gx.O.A602HistoricoEstornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOESTORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"svchar",len:180,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Transacaocontabilcomplementoes,isvalid:null,rgrid:[],fld:"TRANSACAOCONTABILCOMPLEMENTOES",gxz:"Z600TransacaoContabilComplementoEs",gxold:"O600TransacaoContabilComplementoEs",gxvar:"A600TransacaoContabilComplementoEs",ucs:[],op:[114,112],ip:[114,112,99,104,90,83,58,75,39,54,70,34,27,23],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A600TransacaoContabilComplementoEs=Value},v2z:function(Value){gx.O.Z600TransacaoContabilComplementoEs=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOCONTABILCOMPLEMENTOES",gx.O.A600TransacaoContabilComplementoEs,0)},c2v:function(){gx.O.A600TransacaoContabilComplementoEs=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOCONTABILCOMPLEMENTOES")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TABLE3",grid:0};
   GXValidFnc[110]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCONTABILUSUARIOID",gxz:"Z770TransacaoContabilUsuarioId",gxold:"O770TransacaoContabilUsuarioId",gxvar:"A770TransacaoContabilUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A770TransacaoContabilUsuarioId=Value},v2z:function(Value){gx.O.Z770TransacaoContabilUsuarioId=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOCONTABILUSUARIOID",gx.O.A770TransacaoContabilUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A770TransacaoContabilUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOCONTABILUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 112 , function() {
   });
   GXValidFnc[114]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCONTABILDATAHORAALT",gxz:"Z771TransacaoContabilDataHoraAlt",gxold:"O771TransacaoContabilDataHoraAlt",gxvar:"A771TransacaoContabilDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A771TransacaoContabilDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z771TransacaoContabilDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TRANSACAOCONTABILDATAHORAALT",gx.O.A771TransacaoContabilDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A771TransacaoContabilDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TRANSACAOCONTABILDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[121]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Chamaonblurmascara,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV38ChamaOnBlurMascara",gxold:"OV38ChamaOnBlurMascara",gxvar:"AV38ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV38ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV38ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV38ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[122]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Empresatransacaocontabilempres,isvalid:null,rgrid:[],fld:"EMPRESATRANSACAOCONTABILEMPRES",gxz:"Z346EmpresaTransacaoContabilEmpres",gxold:"O346EmpresaTransacaoContabilEmpres",gxvar:"A346EmpresaTransacaoContabilEmpres",ucs:[],op:[],ip:[122],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A346EmpresaTransacaoContabilEmpres=Value},v2z:function(Value){gx.O.Z346EmpresaTransacaoContabilEmpres=Value},v2c:function(){gx.fn.setControlValue("EMPRESATRANSACAOCONTABILEMPRES",gx.O.A346EmpresaTransacaoContabilEmpres,0)},c2v:function(){gx.O.A346EmpresaTransacaoContabilEmpres=this.val()},val:function(){return gx.fn.getControlValue("EMPRESATRANSACAOCONTABILEMPRES")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"JS", format:2,grid:0};
   GXValidFnc[126]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV47AcessoSistemaSequencia",gxold:"OV47AcessoSistemaSequencia",gxvar:"AV47AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV47AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV47AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[128]={fld:"BTNHELP",grid:0};
   GXValidFnc[132]={fld:"PROMPT_583",grid:73};
   GXValidFnc[133]={fld:"PROMPT_594",grid:73};
   GXValidFnc[134]={fld:"PROMPT_580",grid:73};
   GXValidFnc[135]={fld:"PROMPT_591",grid:73};
   GXValidFnc[136]={fld:"PROMPT_597",grid:73};
   GXValidFnc[137]={fld:"PROMPT_602",grid:73};
   this.A347TransacaoContabilId = "" ;
   this.Z347TransacaoContabilId = "" ;
   this.O347TransacaoContabilId = "" ;
   this.A572TransacaoContabilDescricao = "" ;
   this.Z572TransacaoContabilDescricao = "" ;
   this.O572TransacaoContabilDescricao = "" ;
   this.A573TransacaoContabilTipo = "" ;
   this.Z573TransacaoContabilTipo = "" ;
   this.O573TransacaoContabilTipo = "" ;
   this.A575ContaDebitoId = "" ;
   this.Z575ContaDebitoId = "" ;
   this.O575ContaDebitoId = "" ;
   this.A586ContaCreditoId = "" ;
   this.Z586ContaCreditoId = "" ;
   this.O586ContaCreditoId = "" ;
   this.A576ContaDebitoTradutorId = 0 ;
   this.Z576ContaDebitoTradutorId = 0 ;
   this.O576ContaDebitoTradutorId = 0 ;
   this.A577ContaDebitoNome = "" ;
   this.Z577ContaDebitoNome = "" ;
   this.O577ContaDebitoNome = "" ;
   this.A587ContaCreditoTradutorId = 0 ;
   this.Z587ContaCreditoTradutorId = 0 ;
   this.O587ContaCreditoTradutorId = 0 ;
   this.A588ContaCreditoNome = "" ;
   this.Z588ContaCreditoNome = "" ;
   this.O588ContaCreditoNome = "" ;
   this.A583CentroCustoDebitoId = "" ;
   this.Z583CentroCustoDebitoId = "" ;
   this.O583CentroCustoDebitoId = "" ;
   this.A594CentroCustoCreditoId = "" ;
   this.Z594CentroCustoCreditoId = "" ;
   this.O594CentroCustoCreditoId = "" ;
   this.A584CentroCustoDebitoDescricao = "" ;
   this.Z584CentroCustoDebitoDescricao = "" ;
   this.O584CentroCustoDebitoDescricao = "" ;
   this.A595CentroCustoCreditoDescricao = "" ;
   this.Z595CentroCustoCreditoDescricao = "" ;
   this.O595CentroCustoCreditoDescricao = "" ;
   this.A580RateioDebitoId = 0 ;
   this.Z580RateioDebitoId = 0 ;
   this.O580RateioDebitoId = 0 ;
   this.A581RateioDebitoDescricao = "" ;
   this.Z581RateioDebitoDescricao = "" ;
   this.O581RateioDebitoDescricao = "" ;
   this.A591RateioCreditoId = 0 ;
   this.Z591RateioCreditoId = 0 ;
   this.O591RateioCreditoId = 0 ;
   this.A592RateioCreditoDescricao = "" ;
   this.Z592RateioCreditoDescricao = "" ;
   this.O592RateioCreditoDescricao = "" ;
   this.A597HistoricoContaId = 0 ;
   this.Z597HistoricoContaId = 0 ;
   this.O597HistoricoContaId = 0 ;
   this.A599TransacaoContabilComplementoHi = "" ;
   this.Z599TransacaoContabilComplementoHi = "" ;
   this.O599TransacaoContabilComplementoHi = "" ;
   this.A602HistoricoEstornoId = 0 ;
   this.Z602HistoricoEstornoId = 0 ;
   this.O602HistoricoEstornoId = 0 ;
   this.A600TransacaoContabilComplementoEs = "" ;
   this.Z600TransacaoContabilComplementoEs = "" ;
   this.O600TransacaoContabilComplementoEs = "" ;
   this.A770TransacaoContabilUsuarioId = "" ;
   this.Z770TransacaoContabilUsuarioId = "" ;
   this.O770TransacaoContabilUsuarioId = "" ;
   this.A771TransacaoContabilDataHoraAlt = gx.date.nullDate() ;
   this.Z771TransacaoContabilDataHoraAlt = gx.date.nullDate() ;
   this.O771TransacaoContabilDataHoraAlt = gx.date.nullDate() ;
   this.AV38ChamaOnBlurMascara = "" ;
   this.ZV38ChamaOnBlurMascara = "" ;
   this.OV38ChamaOnBlurMascara = "" ;
   this.A346EmpresaTransacaoContabilEmpres = "" ;
   this.Z346EmpresaTransacaoContabilEmpres = "" ;
   this.O346EmpresaTransacaoContabilEmpres = "" ;
   this.AV47AcessoSistemaSequencia = 0 ;
   this.ZV47AcessoSistemaSequencia = 0 ;
   this.OV47AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV45Sistema = "" ;
   this.AV55Pgmname = "" ;
   this.AV56Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV47AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV15EmpresaPadraoTRateio = "" ;
   this.AV16EmpresaPadraoTHistorico = "" ;
   this.AV17EmpresaPadraoTCentroCusto = "" ;
   this.AV18EmpresaPadraoTContaContabil = "" ;
   this.AV40ErroCaracteres2 = "" ;
   this.AV39ErroCaracteres = "" ;
   this.AV22ret = 0 ;
   this.AV38ChamaOnBlurMascara = "" ;
   this.AV29TemMascara = "" ;
   this.AV31EstruturaContaInicial = "" ;
   this.AV30TemMascara2 = "" ;
   this.AV25entrada = [ ] ;
   this.AV26saida = [ ] ;
   this.AV36Entrada2 = [ ] ;
   this.AV37Saida2 = [ ] ;
   this.AV41Entrada1 = [ ] ;
   this.AV42Saida1 = [ ] ;
   this.AV43Entrada3 = [ ] ;
   this.AV44Saida3 = [ ] ;
   this.AV27ValidaTradutor = "" ;
   this.AV28ValidaTradutor2 = "" ;
   this.AV23TransacaoContabilId = "" ;
   this.A346EmpresaTransacaoContabilEmpres = "" ;
   this.A347TransacaoContabilId = "" ;
   this.A579RateioDebitoEmpresaId = "" ;
   this.A590RateioCreditoEmpresaId = "" ;
   this.A582CentroCustoDebitoEmpresaId = "" ;
   this.A593CentroCustoCreditoEmpresaId = "" ;
   this.A585ContaCreditoEmpresaId = "" ;
   this.A574ContaDebitoEmpresaId = "" ;
   this.A596HistoricoContaEmpresaId = "" ;
   this.A601HistoricoEstornoEmpresaId = "" ;
   this.A575ContaDebitoId = "" ;
   this.A586ContaCreditoId = "" ;
   this.AV54TransacaoContabilTipo = "" ;
   this.A770TransacaoContabilUsuarioId = "" ;
   this.A771TransacaoContabilDataHoraAlt = gx.date.nullDate() ;
   this.A572TransacaoContabilDescricao = "" ;
   this.A573TransacaoContabilTipo = "" ;
   this.A576ContaDebitoTradutorId = 0 ;
   this.A577ContaDebitoNome = "" ;
   this.A578ContaDebitoTipoLancamento = "" ;
   this.A583CentroCustoDebitoId = "" ;
   this.A584CentroCustoDebitoDescricao = "" ;
   this.A580RateioDebitoId = 0 ;
   this.A581RateioDebitoDescricao = "" ;
   this.A587ContaCreditoTradutorId = 0 ;
   this.A588ContaCreditoNome = "" ;
   this.A589ContaCreditoTipoLancamento = "" ;
   this.A594CentroCustoCreditoId = "" ;
   this.A595CentroCustoCreditoDescricao = "" ;
   this.A591RateioCreditoId = 0 ;
   this.A592RateioCreditoDescricao = "" ;
   this.A597HistoricoContaId = 0 ;
   this.A598HistoricoContaDescricao = "" ;
   this.A9626HistoricoContaComplemento = "" ;
   this.A599TransacaoContabilComplementoHi = "" ;
   this.A600TransacaoContabilComplementoEs = "" ;
   this.A602HistoricoEstornoId = 0 ;
   this.A603HistoricoEstornoDescricao = "" ;
   this.A9627HistoricoEstornoComplemento = "" ;
   this.AV51Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e121j2_client": ["'FECHAR'", true] ,"e131j2_client": ["AFTER TRN", true] ,"e141j73_client": ["ENTER", true] ,"e151j73_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV23TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV47AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV47AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'gx.fn.getCtrlProperty("CONTADEBITOTRADUTORID","Visible")',ctrl:'CONTADEBITOTRADUTORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CONTACREDITOTRADUTORID","Visible")',ctrl:'CONTACREDITOTRADUTORID',prop:'Visible'}]];
   this.setPrompt("PROMPTCCONTDEB", [34]);
   this.setPrompt("PROMPTCCONTCRED", [39]);
   this.setPrompt("PROMPT_583", [54]);
   this.setPrompt("PROMPT_594", [58]);
   this.setPrompt("PROMPT_580", [70]);
   this.setPrompt("PROMPT_591", [75]);
   this.setPrompt("PROMPT_597", [83]);
   this.setPrompt("PROMPT_602", [99]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV15EmpresaPadraoTRateio", "vEMPRESAPADRAOTRATEIO", 0, "char");
   this.setVCMap("A579RateioDebitoEmpresaId", "RATEIODEBITOEMPRESAID", 0, "char");
   this.setVCMap("A590RateioCreditoEmpresaId", "RATEIOCREDITOEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadraoTCentroCusto", "vEMPRESAPADRAOTCENTROCUSTO", 0, "char");
   this.setVCMap("A582CentroCustoDebitoEmpresaId", "CENTROCUSTODEBITOEMPRESAID", 0, "char");
   this.setVCMap("A593CentroCustoCreditoEmpresaId", "CENTROCUSTOCREDITOEMPRESAID", 0, "char");
   this.setVCMap("AV18EmpresaPadraoTContaContabil", "vEMPRESAPADRAOTCONTACONTABIL", 0, "char");
   this.setVCMap("A585ContaCreditoEmpresaId", "CONTACREDITOEMPRESAID", 0, "char");
   this.setVCMap("A574ContaDebitoEmpresaId", "CONTADEBITOEMPRESAID", 0, "char");
   this.setVCMap("AV16EmpresaPadraoTHistorico", "vEMPRESAPADRAOTHISTORICO", 0, "char");
   this.setVCMap("A596HistoricoContaEmpresaId", "HISTORICOCONTAEMPRESAID", 0, "char");
   this.setVCMap("A601HistoricoEstornoEmpresaId", "HISTORICOESTORNOEMPRESAID", 0, "char");
   this.setVCMap("AV23TransacaoContabilId", "vTRANSACAOCONTABILID", 0, "svchar");
   this.setVCMap("AV27ValidaTradutor", "vVALIDATRADUTOR", 0, "char");
   this.setVCMap("AV28ValidaTradutor2", "vVALIDATRADUTOR2", 0, "char");
   this.setVCMap("AV39ErroCaracteres", "vERROCARACTERES", 0, "svchar");
   this.setVCMap("AV40ErroCaracteres2", "vERROCARACTERES2", 0, "svchar");
   this.setVCMap("A9626HistoricoContaComplemento", "HISTORICOCONTACOMPLEMENTO", 0, "char");
   this.setVCMap("AV54TransacaoContabilTipo", "vTRANSACAOCONTABILTIPO", 0, "char");
   this.setVCMap("A9627HistoricoEstornoComplemento", "HISTORICOESTORNOCOMPLEMENTO", 0, "char");
   this.setVCMap("AV22ret", "vRET", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A578ContaDebitoTipoLancamento", "CONTADEBITOTIPOLANCAMENTO", 0, "char");
   this.setVCMap("A589ContaCreditoTipoLancamento", "CONTACREDITOTIPOLANCAMENTO", 0, "char");
   this.setVCMap("A598HistoricoContaDescricao", "HISTORICOCONTADESCRICAO", 0, "svchar");
   this.setVCMap("A603HistoricoEstornoDescricao", "HISTORICOESTORNODESCRICAO", 0, "svchar");
   this.setVCMap("AV56Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV55Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 73 ]= ["O602HistoricoEstornoId","O600TransacaoContabilComplementoEs","O599TransacaoContabilComplementoHi","O597HistoricoContaId","O594CentroCustoCreditoId","O591RateioCreditoId","O586ContaCreditoId","O583CentroCustoDebitoId","O580RateioDebitoId","O575ContaDebitoId","O573TransacaoContabilTipo","O572TransacaoContabilDescricao"] ;
});
gx.setParentObj(new ttransacaocontabil());
