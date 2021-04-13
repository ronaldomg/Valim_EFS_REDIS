/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:46:22.53
*/
gx.evt.autoSkip = false;
gx.define('thistoricofcx', false, function () {
   this.ServerClass =  "thistoricofcx" ;
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
      this.AV19HistoricoFcxId=gx.fn.getIntegerValue("vHISTORICOFCXID",'.') ;
      this.AV29SNTpAbertura=gx.fn.getControlValue("vSNTPABERTURA") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A3549HistoricoFcxEmpresaID=gx.fn.getControlValue("HISTORICOFCXEMPRESAID") ;
      this.A4358HistoricoFcxTipoSaldoEmpId=gx.fn.getControlValue("HISTORICOFCXTIPOSALDOEMPID") ;
      this.A4361HistoricoFcxHisCxaBcoTrocEmpId=gx.fn.getControlValue("HISTORICOFCXHISCXABCOTROCEMPID") ;
      this.A7496HistoricoFcxTrnCxaBcoEmpId=gx.fn.getControlValue("HISTORICOFCXTRNCXABCOEMPID") ;
      this.AV33TipoBaixaEmpresaId=gx.fn.getControlValue("vTIPOBAIXAEMPRESAID") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A6617HistoricoFcxHisCxaBcoTrocTipo=gx.fn.getControlValue("HISTORICOFCXHISCXABCOTROCTIPO") ;
      this.A6624HistoricoFcxTipoSaldoDesc=gx.fn.getControlValue("HISTORICOFCXTIPOSALDODESC") ;
      this.AV42Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Historicofcxid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOFCXID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicofcxdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOFCXDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A3540HistoricoFcxDescricao) )
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
   this.Valid_Historicofcxtipobaixapagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOFCXTIPOBAIXAPAGREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicofcxsinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOFCXSINAL");
         this.AnyError  = 0;
         if ( (""==this.A3542HistoricoFcxSinal) )
         {
            try {
               gxballoon.setError("Informe o Sinal do Histórico");
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
   this.Valid_Historicofcxtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOFCXTIPO");
         this.AnyError  = 0;
         if ( (""==this.A3543HistoricoFcxTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Histórico");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A3542HistoricoFcxSinal != "C" && this.A3543HistoricoFcxTipo == "1" )
         {
            try {
               gxballoon.setError("Histórico de Abertura deve ser do tipo \"Crédito\"");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A3542HistoricoFcxSinal != "C" && this.A3543HistoricoFcxTipo == "4" )
         {
            try {
               gxballoon.setError("Histórico de Recebimento deve ser do tipo \"Crédito\"");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A3542HistoricoFcxSinal != "C" && this.A3543HistoricoFcxTipo == "6" )
         {
            try {
               gxballoon.setError("Histórico de Suprimento deve ser do tipo \"Crédito\"");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A3542HistoricoFcxSinal != "D" && this.A3543HistoricoFcxTipo == "3" )
         {
            try {
               gxballoon.setError("Histórico de Pagamento deve ser do tipo \"Débito\"");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A3542HistoricoFcxSinal != "D" && this.A3543HistoricoFcxTipo == "5" )
         {
            try {
               gxballoon.setError("Histórico de Sangria deve ser do tipo \"Débito\"");
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
   this.Valid_Historicofcxtiposaldoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Historicofcxtiposaldoid",["gx.O.AV21TipoSaldoEmpresaId", "gx.O.A4359HistoricoFcxTipoSaldoId", "gx.O.A4358HistoricoFcxTipoSaldoEmpId", "gx.O.A6624HistoricoFcxTipoSaldoDesc"],["A4358HistoricoFcxTipoSaldoEmpId", "A6624HistoricoFcxTipoSaldoDesc"]);
      return true;
   }
   this.Valid_Historicofcxtipotroco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOFCXTIPOTROCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicofcxhiscxabcotrocid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Historicofcxhiscxabcotrocid",["gx.O.AV23HistoricoCxaBcoEmpresaId", "gx.O.A4362HistoricoFcxHisCxaBcoTrocId", "gx.O.A4361HistoricoFcxHisCxaBcoTrocEmpId", "gx.O.A4364HistoricoFCXTipoTroco", "gx.O.A6617HistoricoFcxHisCxaBcoTrocTipo"],["A4361HistoricoFcxHisCxaBcoTrocEmpId", "A6617HistoricoFcxHisCxaBcoTrocTipo"]);
      return true;
   }
   this.Valid_Historicovlrminimoemissaotroco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOVLRMINIMOEMISSAOTROCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicofcxtotnaofiscal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOFCXTOTNAOFISCAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicofcxtrncxabcosigla=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Historicofcxtrncxabcosigla",["gx.O.AV30TransacaoCxBcoEmpresaId", "gx.O.A7497HistoricoFcxTrnCxaBcoSigla", "gx.O.A7496HistoricoFcxTrnCxaBcoEmpId"],["A7496HistoricoFcxTrnCxaBcoEmpId"]);
      return true;
   }
   this.Valid_Historicofcxtipobaixaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOFCXTIPOBAIXAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicofcxtipobaixasigla=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Historicofcxtipobaixasigla",["gx.O.A8184HistoricoFCXTipoBaixaEmpId", "gx.O.A8185HistoricoFCXTipoBaixaPagRec", "gx.O.A8186HistoricoFCXTipoBaixaSigla", "gx.O.A8187HistoricoFCXTipoBaixaDescricao"],["A8187HistoricoFCXTipoBaixaDescricao"]);
      return true;
   }
   this.Valid_Historicofcxdescricaoformaecf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOFCXDESCRICAOFORMAECF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicosnemitevaletroco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOSNEMITEVALETROCO");
         this.AnyError  = 0;
         if ( ( this.A4364HistoricoFCXTipoTroco != "V" || this.A4366HistoricoSnEmiteValeTroco == "N" ) && ! (0.0==this.A4365HistoricoVlrMinimoEmissaoTroco) )
         {
            try {
               gxballoon.setError("Não é permitido informar Valor Mínimo Vale Troco");
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
   this.Valid_Historicofcxexicomplemento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOFCXEXICOMPLEMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicofcxabregaveta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOFCXABREGAVETA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaocxbcoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOCXBCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tiposaldoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOSALDOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Historicocxabcoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOCXABCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tiposaldoent=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOSALDOENT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e126q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136q2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146q381_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156q381_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,20,22,25,27,28,31,33,36,38,39,42,44,47,49,50,53,55,58,60,63,65,66,69,71,72,73,74,77,79,81,84,87,90,95,98,100,102,109,110,111,112,115,116,118,119,120,121];
   this.GXLastCtrlId =121;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TABLE2",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxid,isvalid:null,rgrid:[],fld:"HISTORICOFCXID",gxz:"Z3550HistoricoFcxId",gxold:"O3550HistoricoFcxId",gxvar:"A3550HistoricoFcxId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3550HistoricoFcxId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3550HistoricoFcxId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOFCXID",gx.O.A3550HistoricoFcxId,0)},c2v:function(){gx.O.A3550HistoricoFcxId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOFCXID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxdescricao,isvalid:null,rgrid:[],fld:"HISTORICOFCXDESCRICAO",gxz:"Z3540HistoricoFcxDescricao",gxold:"O3540HistoricoFcxDescricao",gxvar:"A3540HistoricoFcxDescricao",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3540HistoricoFcxDescricao=Value},v2z:function(Value){gx.O.Z3540HistoricoFcxDescricao=Value},v2c:function(){gx.fn.setControlValue("HISTORICOFCXDESCRICAO",gx.O.A3540HistoricoFcxDescricao,0)},c2v:function(){gx.O.A3540HistoricoFcxDescricao=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxtipobaixapagrec,isvalid:null,rgrid:[],fld:"HISTORICOFCXTIPOBAIXAPAGREC",gxz:"Z8185HistoricoFCXTipoBaixaPagRec",gxold:"O8185HistoricoFCXTipoBaixaPagRec",gxvar:"A8185HistoricoFCXTipoBaixaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8185HistoricoFCXTipoBaixaPagRec=Value},v2z:function(Value){gx.O.Z8185HistoricoFCXTipoBaixaPagRec=Value},v2c:function(){gx.fn.setControlValue("HISTORICOFCXTIPOBAIXAPAGREC",gx.O.A8185HistoricoFCXTipoBaixaPagRec,0)},c2v:function(){gx.O.A8185HistoricoFCXTipoBaixaPagRec=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXTIPOBAIXAPAGREC")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxsinal,isvalid:null,rgrid:[],fld:"HISTORICOFCXSINAL",gxz:"Z3542HistoricoFcxSinal",gxold:"O3542HistoricoFcxSinal",gxvar:"A3542HistoricoFcxSinal",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3542HistoricoFcxSinal=Value},v2z:function(Value){gx.O.Z3542HistoricoFcxSinal=Value},v2c:function(){gx.fn.setComboBoxValue("HISTORICOFCXSINAL",gx.O.A3542HistoricoFcxSinal)},c2v:function(){gx.O.A3542HistoricoFcxSinal=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXSINAL")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxtipo,isvalid:null,rgrid:[],fld:"HISTORICOFCXTIPO",gxz:"Z3543HistoricoFcxTipo",gxold:"O3543HistoricoFcxTipo",gxvar:"A3543HistoricoFcxTipo",ucs:[],op:[28,33],ip:[28,33],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3543HistoricoFcxTipo=Value},v2z:function(Value){gx.O.Z3543HistoricoFcxTipo=Value},v2c:function(){gx.fn.setComboBoxValue("HISTORICOFCXTIPO",gx.O.A3543HistoricoFcxTipo)},c2v:function(){gx.O.A3543HistoricoFcxTipo=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXTIPO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxtiposaldoid,isvalid:null,rgrid:[],fld:"HISTORICOFCXTIPOSALDOID",gxz:"Z4359HistoricoFcxTipoSaldoId",gxold:"O4359HistoricoFcxTipoSaldoId",gxvar:"A4359HistoricoFcxTipoSaldoId",ucs:[],op:[38],ip:[38,110],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4359HistoricoFcxTipoSaldoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4359HistoricoFcxTipoSaldoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOFCXTIPOSALDOID",gx.O.A4359HistoricoFcxTipoSaldoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4359HistoricoFcxTipoSaldoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOFCXTIPOSALDOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSALDODESCRICAO",gxz:"ZV24TipoSaldoDescricao",gxold:"OV24TipoSaldoDescricao",gxvar:"AV24TipoSaldoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TipoSaldoDescricao=Value},v2z:function(Value){gx.O.ZV24TipoSaldoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOSALDODESCRICAO",gx.O.AV24TipoSaldoDescricao,0)},c2v:function(){gx.O.AV24TipoSaldoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxtipotroco,isvalid:null,rgrid:[],fld:"HISTORICOFCXTIPOTROCO",gxz:"Z4364HistoricoFCXTipoTroco",gxold:"O4364HistoricoFCXTipoTroco",gxvar:"A4364HistoricoFCXTipoTroco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A4364HistoricoFCXTipoTroco=Value},v2z:function(Value){gx.O.Z4364HistoricoFCXTipoTroco=Value},v2c:function(){gx.fn.setComboBoxValue("HISTORICOFCXTIPOTROCO",gx.O.A4364HistoricoFCXTipoTroco)},c2v:function(){gx.O.A4364HistoricoFCXTipoTroco=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXTIPOTROCO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxhiscxabcotrocid,isvalid:null,rgrid:[],fld:"HISTORICOFCXHISCXABCOTROCID",gxz:"Z4362HistoricoFcxHisCxaBcoTrocId",gxold:"O4362HistoricoFcxHisCxaBcoTrocId",gxvar:"A4362HistoricoFcxHisCxaBcoTrocId",ucs:[],op:[44,49],ip:[44,49,111],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4362HistoricoFcxHisCxaBcoTrocId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4362HistoricoFcxHisCxaBcoTrocId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOFCXHISCXABCOTROCID",gx.O.A4362HistoricoFcxHisCxaBcoTrocId,0)},c2v:function(){gx.O.A4362HistoricoFcxHisCxaBcoTrocId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOFCXHISCXABCOTROCID",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOCXABCODESCRICAO",gxz:"ZV25HistoricoCxaBcoDescricao",gxold:"OV25HistoricoCxaBcoDescricao",gxvar:"AV25HistoricoCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25HistoricoCxaBcoDescricao=Value},v2z:function(Value){gx.O.ZV25HistoricoCxaBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCODESCRICAO",gx.O.AV25HistoricoCxaBcoDescricao,0)},c2v:function(){gx.O.AV25HistoricoCxaBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOCXABCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicovlrminimoemissaotroco,isvalid:null,rgrid:[],fld:"HISTORICOVLRMINIMOEMISSAOTROCO",gxz:"Z4365HistoricoVlrMinimoEmissaoTroco",gxold:"O4365HistoricoVlrMinimoEmissaoTroco",gxvar:"A4365HistoricoVlrMinimoEmissaoTroco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4365HistoricoVlrMinimoEmissaoTroco=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4365HistoricoVlrMinimoEmissaoTroco=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("HISTORICOVLRMINIMOEMISSAOTROCO",gx.O.A4365HistoricoVlrMinimoEmissaoTroco,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4365HistoricoVlrMinimoEmissaoTroco=this.val()},val:function(){return gx.fn.getDecimalValue("HISTORICOVLRMINIMOEMISSAOTROCO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxtotnaofiscal,isvalid:null,rgrid:[],fld:"HISTORICOFCXTOTNAOFISCAL",gxz:"Z8026HistoricoFCXTotNaoFiscal",gxold:"O8026HistoricoFCXTotNaoFiscal",gxvar:"A8026HistoricoFCXTotNaoFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8026HistoricoFCXTotNaoFiscal=Value},v2z:function(Value){gx.O.Z8026HistoricoFCXTotNaoFiscal=Value},v2c:function(){gx.fn.setControlValue("HISTORICOFCXTOTNAOFISCAL",gx.O.A8026HistoricoFCXTotNaoFiscal,0)},c2v:function(){gx.O.A8026HistoricoFCXTotNaoFiscal=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXTOTNAOFISCAL")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxtrncxabcosigla,isvalid:null,rgrid:[],fld:"HISTORICOFCXTRNCXABCOSIGLA",gxz:"Z7497HistoricoFcxTrnCxaBcoSigla",gxold:"O7497HistoricoFcxTrnCxaBcoSigla",gxvar:"A7497HistoricoFcxTrnCxaBcoSigla",ucs:[],op:[],ip:[65,109],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7497HistoricoFcxTrnCxaBcoSigla=Value},v2z:function(Value){gx.O.Z7497HistoricoFcxTrnCxaBcoSigla=Value},v2c:function(){gx.fn.setControlValue("HISTORICOFCXTRNCXABCOSIGLA",gx.O.A7497HistoricoFcxTrnCxaBcoSigla,0)},c2v:function(){gx.O.A7497HistoricoFcxTrnCxaBcoSigla=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXTRNCXABCOSIGLA")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCODESCRICAO",gxz:"ZV32TransacaoCxBcoDescricao",gxold:"OV32TransacaoCxBcoDescricao",gxvar:"AV32TransacaoCxBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.ZV32TransacaoCxBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCODESCRICAO",gx.O.AV32TransacaoCxBcoDescricao,0)},c2v:function(){gx.O.AV32TransacaoCxBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxtipobaixaempid,isvalid:null,rgrid:[],fld:"HISTORICOFCXTIPOBAIXAEMPID",gxz:"Z8184HistoricoFCXTipoBaixaEmpId",gxold:"O8184HistoricoFCXTipoBaixaEmpId",gxvar:"A8184HistoricoFCXTipoBaixaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8184HistoricoFCXTipoBaixaEmpId=Value},v2z:function(Value){gx.O.Z8184HistoricoFCXTipoBaixaEmpId=Value},v2c:function(){gx.fn.setControlValue("HISTORICOFCXTIPOBAIXAEMPID",gx.O.A8184HistoricoFCXTipoBaixaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8184HistoricoFCXTipoBaixaEmpId=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXTIPOBAIXAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[72]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxtipobaixasigla,isvalid:null,rgrid:[],fld:"HISTORICOFCXTIPOBAIXASIGLA",gxz:"Z8186HistoricoFCXTipoBaixaSigla",gxold:"O8186HistoricoFCXTipoBaixaSigla",gxvar:"A8186HistoricoFCXTipoBaixaSigla",ucs:[],op:[74],ip:[74,72,27,71],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8186HistoricoFCXTipoBaixaSigla=Value},v2z:function(Value){gx.O.Z8186HistoricoFCXTipoBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("HISTORICOFCXTIPOBAIXASIGLA",gx.O.A8186HistoricoFCXTipoBaixaSigla,0)},c2v:function(){gx.O.A8186HistoricoFCXTipoBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXTIPOBAIXASIGLA")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TIPOBAIXAPROMPT",grid:0};
   GXValidFnc[74]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXTIPOBAIXADESCRICAO",gxz:"Z8187HistoricoFCXTipoBaixaDescricao",gxold:"O8187HistoricoFCXTipoBaixaDescricao",gxvar:"A8187HistoricoFCXTipoBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8187HistoricoFCXTipoBaixaDescricao=Value},v2z:function(Value){gx.O.Z8187HistoricoFCXTipoBaixaDescricao=Value},v2c:function(){gx.fn.setControlValue("HISTORICOFCXTIPOBAIXADESCRICAO",gx.O.A8187HistoricoFCXTipoBaixaDescricao,0)},c2v:function(){gx.O.A8187HistoricoFCXTipoBaixaDescricao=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXTIPOBAIXADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxdescricaoformaecf,isvalid:null,rgrid:[],fld:"HISTORICOFCXDESCRICAOFORMAECF",gxz:"Z8027HistoricoFCXDescricaoFormaECF",gxold:"O8027HistoricoFCXDescricaoFormaECF",gxvar:"A8027HistoricoFCXDescricaoFormaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8027HistoricoFCXDescricaoFormaECF=Value},v2z:function(Value){gx.O.Z8027HistoricoFCXDescricaoFormaECF=Value},v2c:function(){gx.fn.setControlValue("HISTORICOFCXDESCRICAOFORMAECF",gx.O.A8027HistoricoFCXDescricaoFormaECF,0)},c2v:function(){gx.O.A8027HistoricoFCXDescricaoFormaECF=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXDESCRICAOFORMAECF")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TABLE3",grid:0};
   GXValidFnc[84]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicosnemitevaletroco,isvalid:null,rgrid:[],fld:"HISTORICOSNEMITEVALETROCO",gxz:"Z4366HistoricoSnEmiteValeTroco",gxold:"O4366HistoricoSnEmiteValeTroco",gxvar:"A4366HistoricoSnEmiteValeTroco",ucs:[],op:[55,84,44],ip:[55,84,44],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A4366HistoricoSnEmiteValeTroco=Value},v2z:function(Value){gx.O.Z4366HistoricoSnEmiteValeTroco=Value},v2c:function(){gx.fn.setCheckBoxValue("HISTORICOSNEMITEVALETROCO",gx.O.A4366HistoricoSnEmiteValeTroco,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4366HistoricoSnEmiteValeTroco=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOSNEMITEVALETROCO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 84 , function() {
   });
   GXValidFnc[87]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxexicomplemento,isvalid:null,rgrid:[],fld:"HISTORICOFCXEXICOMPLEMENTO",gxz:"Z3544HistoricoFcxExiComplemento",gxold:"O3544HistoricoFcxExiComplemento",gxvar:"A3544HistoricoFcxExiComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3544HistoricoFcxExiComplemento=Value},v2z:function(Value){gx.O.Z3544HistoricoFcxExiComplemento=Value},v2c:function(){gx.fn.setCheckBoxValue("HISTORICOFCXEXICOMPLEMENTO",gx.O.A3544HistoricoFcxExiComplemento,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3544HistoricoFcxExiComplemento=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXEXICOMPLEMENTO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 87 , function() {
   });
   GXValidFnc[90]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxabregaveta,isvalid:null,rgrid:[],fld:"HISTORICOFCXABREGAVETA",gxz:"Z3545HistoricoFcxAbreGaveta",gxold:"O3545HistoricoFcxAbreGaveta",gxvar:"A3545HistoricoFcxAbreGaveta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3545HistoricoFcxAbreGaveta=Value},v2z:function(Value){gx.O.Z3545HistoricoFcxAbreGaveta=Value},v2c:function(){gx.fn.setCheckBoxValue("HISTORICOFCXABREGAVETA",gx.O.A3545HistoricoFcxAbreGaveta,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3545HistoricoFcxAbreGaveta=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXABREGAVETA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[95]={fld:"TABLE7",grid:0};
   GXValidFnc[98]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXUSUARIOALT",gxz:"Z3547HistoricoFcxUsuarioAlt",gxold:"O3547HistoricoFcxUsuarioAlt",gxvar:"A3547HistoricoFcxUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3547HistoricoFcxUsuarioAlt=Value},v2z:function(Value){gx.O.Z3547HistoricoFcxUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("HISTORICOFCXUSUARIOALT",gx.O.A3547HistoricoFcxUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3547HistoricoFcxUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[102]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXDATAHORAALT",gxz:"Z3548HistoricoFcxDataHoraAlt",gxold:"O3548HistoricoFcxDataHoraAlt",gxvar:"A3548HistoricoFcxDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3548HistoricoFcxDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3548HistoricoFcxDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOFCXDATAHORAALT",gx.O.A3548HistoricoFcxDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3548HistoricoFcxDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("HISTORICOFCXDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 102 , function() {
   });
   GXValidFnc[109]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Transacaocxbcoempresaid,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCOEMPRESAID",gxz:"ZV30TransacaoCxBcoEmpresaId",gxold:"OV30TransacaoCxBcoEmpresaId",gxvar:"AV30TransacaoCxBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TransacaoCxBcoEmpresaId=Value},v2z:function(Value){gx.O.ZV30TransacaoCxBcoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOEMPRESAID",gx.O.AV30TransacaoCxBcoEmpresaId,0)},c2v:function(){gx.O.AV30TransacaoCxBcoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tiposaldoempresaid,isvalid:null,rgrid:[],fld:"vTIPOSALDOEMPRESAID",gxz:"ZV21TipoSaldoEmpresaId",gxold:"OV21TipoSaldoEmpresaId",gxvar:"AV21TipoSaldoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21TipoSaldoEmpresaId=Value},v2z:function(Value){gx.O.ZV21TipoSaldoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOSALDOEMPRESAID",gx.O.AV21TipoSaldoEmpresaId,0)},c2v:function(){gx.O.AV21TipoSaldoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Historicocxabcoempresaid,isvalid:null,rgrid:[],fld:"vHISTORICOCXABCOEMPRESAID",gxz:"ZV23HistoricoCxaBcoEmpresaId",gxold:"OV23HistoricoCxaBcoEmpresaId",gxvar:"AV23HistoricoCxaBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23HistoricoCxaBcoEmpresaId=Value},v2z:function(Value){gx.O.ZV23HistoricoCxaBcoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCOEMPRESAID",gx.O.AV23HistoricoCxaBcoEmpresaId,0)},c2v:function(){gx.O.AV23HistoricoCxaBcoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOCXABCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tiposaldoent,isvalid:null,rgrid:[],fld:"vTIPOSALDOENT",gxz:"ZV28TipoSaldoEnt",gxold:"OV28TipoSaldoEnt",gxvar:"AV28TipoSaldoEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TipoSaldoEnt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28TipoSaldoEnt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOSALDOENT",gx.O.AV28TipoSaldoEnt,0)},c2v:function(){gx.O.AV28TipoSaldoEnt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOSALDOENT",'.')},nac:gx.falseFn};
   GXValidFnc[115]={fld:"JS", format:2,grid:0};
   GXValidFnc[116]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[118]={fld:"BTNHELP",grid:0};
   GXValidFnc[119]={fld:"PROMPT_4359",grid:381};
   GXValidFnc[120]={fld:"PROMPT_4362",grid:381};
   GXValidFnc[121]={fld:"PROMPT_7497",grid:381};
   this.A3550HistoricoFcxId = 0 ;
   this.Z3550HistoricoFcxId = 0 ;
   this.O3550HistoricoFcxId = 0 ;
   this.A3540HistoricoFcxDescricao = "" ;
   this.Z3540HistoricoFcxDescricao = "" ;
   this.O3540HistoricoFcxDescricao = "" ;
   this.A8185HistoricoFCXTipoBaixaPagRec = "" ;
   this.Z8185HistoricoFCXTipoBaixaPagRec = "" ;
   this.O8185HistoricoFCXTipoBaixaPagRec = "" ;
   this.A3542HistoricoFcxSinal = "" ;
   this.Z3542HistoricoFcxSinal = "" ;
   this.O3542HistoricoFcxSinal = "" ;
   this.A3543HistoricoFcxTipo = "" ;
   this.Z3543HistoricoFcxTipo = "" ;
   this.O3543HistoricoFcxTipo = "" ;
   this.A4359HistoricoFcxTipoSaldoId = 0 ;
   this.Z4359HistoricoFcxTipoSaldoId = 0 ;
   this.O4359HistoricoFcxTipoSaldoId = 0 ;
   this.AV24TipoSaldoDescricao = "" ;
   this.ZV24TipoSaldoDescricao = "" ;
   this.OV24TipoSaldoDescricao = "" ;
   this.A4364HistoricoFCXTipoTroco = "" ;
   this.Z4364HistoricoFCXTipoTroco = "" ;
   this.O4364HistoricoFCXTipoTroco = "" ;
   this.A4362HistoricoFcxHisCxaBcoTrocId = 0 ;
   this.Z4362HistoricoFcxHisCxaBcoTrocId = 0 ;
   this.O4362HistoricoFcxHisCxaBcoTrocId = 0 ;
   this.AV25HistoricoCxaBcoDescricao = "" ;
   this.ZV25HistoricoCxaBcoDescricao = "" ;
   this.OV25HistoricoCxaBcoDescricao = "" ;
   this.A4365HistoricoVlrMinimoEmissaoTroco = 0 ;
   this.Z4365HistoricoVlrMinimoEmissaoTroco = 0 ;
   this.O4365HistoricoVlrMinimoEmissaoTroco = 0 ;
   this.A8026HistoricoFCXTotNaoFiscal = "" ;
   this.Z8026HistoricoFCXTotNaoFiscal = "" ;
   this.O8026HistoricoFCXTotNaoFiscal = "" ;
   this.A7497HistoricoFcxTrnCxaBcoSigla = "" ;
   this.Z7497HistoricoFcxTrnCxaBcoSigla = "" ;
   this.O7497HistoricoFcxTrnCxaBcoSigla = "" ;
   this.AV32TransacaoCxBcoDescricao = "" ;
   this.ZV32TransacaoCxBcoDescricao = "" ;
   this.OV32TransacaoCxBcoDescricao = "" ;
   this.A8184HistoricoFCXTipoBaixaEmpId = "" ;
   this.Z8184HistoricoFCXTipoBaixaEmpId = "" ;
   this.O8184HistoricoFCXTipoBaixaEmpId = "" ;
   this.A8186HistoricoFCXTipoBaixaSigla = "" ;
   this.Z8186HistoricoFCXTipoBaixaSigla = "" ;
   this.O8186HistoricoFCXTipoBaixaSigla = "" ;
   this.A8187HistoricoFCXTipoBaixaDescricao = "" ;
   this.Z8187HistoricoFCXTipoBaixaDescricao = "" ;
   this.O8187HistoricoFCXTipoBaixaDescricao = "" ;
   this.A8027HistoricoFCXDescricaoFormaECF = "" ;
   this.Z8027HistoricoFCXDescricaoFormaECF = "" ;
   this.O8027HistoricoFCXDescricaoFormaECF = "" ;
   this.A4366HistoricoSnEmiteValeTroco = "" ;
   this.Z4366HistoricoSnEmiteValeTroco = "" ;
   this.O4366HistoricoSnEmiteValeTroco = "" ;
   this.A3544HistoricoFcxExiComplemento = "" ;
   this.Z3544HistoricoFcxExiComplemento = "" ;
   this.O3544HistoricoFcxExiComplemento = "" ;
   this.A3545HistoricoFcxAbreGaveta = "" ;
   this.Z3545HistoricoFcxAbreGaveta = "" ;
   this.O3545HistoricoFcxAbreGaveta = "" ;
   this.A3547HistoricoFcxUsuarioAlt = "" ;
   this.Z3547HistoricoFcxUsuarioAlt = "" ;
   this.O3547HistoricoFcxUsuarioAlt = "" ;
   this.A3548HistoricoFcxDataHoraAlt = gx.date.nullDate() ;
   this.Z3548HistoricoFcxDataHoraAlt = gx.date.nullDate() ;
   this.O3548HistoricoFcxDataHoraAlt = gx.date.nullDate() ;
   this.AV30TransacaoCxBcoEmpresaId = "" ;
   this.ZV30TransacaoCxBcoEmpresaId = "" ;
   this.OV30TransacaoCxBcoEmpresaId = "" ;
   this.AV21TipoSaldoEmpresaId = "" ;
   this.ZV21TipoSaldoEmpresaId = "" ;
   this.OV21TipoSaldoEmpresaId = "" ;
   this.AV23HistoricoCxaBcoEmpresaId = "" ;
   this.ZV23HistoricoCxaBcoEmpresaId = "" ;
   this.OV23HistoricoCxaBcoEmpresaId = "" ;
   this.AV28TipoSaldoEnt = 0 ;
   this.ZV28TipoSaldoEnt = 0 ;
   this.OV28TipoSaldoEnt = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV41Pgmname = "" ;
   this.AV42Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV21TipoSaldoEmpresaId = "" ;
   this.AV23HistoricoCxaBcoEmpresaId = "" ;
   this.AV30TransacaoCxBcoEmpresaId = "" ;
   this.AV33TipoBaixaEmpresaId = "" ;
   this.AV26Entrada = [ ] ;
   this.AV27Saida = [ ] ;
   this.AV19HistoricoFcxId = 0 ;
   this.AV24TipoSaldoDescricao = "" ;
   this.AV25HistoricoCxaBcoDescricao = "" ;
   this.AV32TransacaoCxBcoDescricao = "" ;
   this.AV28TipoSaldoEnt = 0 ;
   this.AV29SNTpAbertura = "" ;
   this.AV18SnAlterou = "" ;
   this.A3549HistoricoFcxEmpresaID = "" ;
   this.A3550HistoricoFcxId = 0 ;
   this.A8185HistoricoFCXTipoBaixaPagRec = "" ;
   this.A4358HistoricoFcxTipoSaldoEmpId = "" ;
   this.A4361HistoricoFcxHisCxaBcoTrocEmpId = "" ;
   this.A7496HistoricoFcxTrnCxaBcoEmpId = "" ;
   this.A8184HistoricoFCXTipoBaixaEmpId = "" ;
   this.A3547HistoricoFcxUsuarioAlt = "" ;
   this.A3548HistoricoFcxDataHoraAlt = gx.date.nullDate() ;
   this.A3540HistoricoFcxDescricao = "" ;
   this.A3542HistoricoFcxSinal = "" ;
   this.A3543HistoricoFcxTipo = "" ;
   this.A3544HistoricoFcxExiComplemento = "" ;
   this.A3545HistoricoFcxAbreGaveta = "" ;
   this.A4359HistoricoFcxTipoSaldoId = 0 ;
   this.A6624HistoricoFcxTipoSaldoDesc = "" ;
   this.A4364HistoricoFCXTipoTroco = "" ;
   this.A4362HistoricoFcxHisCxaBcoTrocId = 0 ;
   this.A6617HistoricoFcxHisCxaBcoTrocTipo = "" ;
   this.A7497HistoricoFcxTrnCxaBcoSigla = "" ;
   this.A4365HistoricoVlrMinimoEmissaoTroco = 0 ;
   this.A4366HistoricoSnEmiteValeTroco = "" ;
   this.A8026HistoricoFCXTotNaoFiscal = "" ;
   this.A8027HistoricoFCXDescricaoFormaECF = "" ;
   this.A8186HistoricoFCXTipoBaixaSigla = "" ;
   this.A8187HistoricoFCXTipoBaixaDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126q2_client": ["'FECHAR'", true] ,"e136q2_client": ["AFTER TRN", true] ,"e146q381_client": ["ENTER", true] ,"e156q381_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19HistoricoFcxId',fld:'vHISTORICOFCXID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("TIPOBAIXAPROMPT", [27,72]);
   this.setPrompt("PROMPT_4359", [38]);
   this.setPrompt("PROMPT_4362", [49]);
   this.setPrompt("PROMPT_7497", [65]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19HistoricoFcxId", "vHISTORICOFCXID", 0, "int");
   this.setVCMap("AV29SNTpAbertura", "vSNTPABERTURA", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3549HistoricoFcxEmpresaID", "HISTORICOFCXEMPRESAID", 0, "char");
   this.setVCMap("A4358HistoricoFcxTipoSaldoEmpId", "HISTORICOFCXTIPOSALDOEMPID", 0, "char");
   this.setVCMap("A4361HistoricoFcxHisCxaBcoTrocEmpId", "HISTORICOFCXHISCXABCOTROCEMPID", 0, "char");
   this.setVCMap("A7496HistoricoFcxTrnCxaBcoEmpId", "HISTORICOFCXTRNCXABCOEMPID", 0, "char");
   this.setVCMap("AV33TipoBaixaEmpresaId", "vTIPOBAIXAEMPRESAID", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A6617HistoricoFcxHisCxaBcoTrocTipo", "HISTORICOFCXHISCXABCOTROCTIPO", 0, "char");
   this.setVCMap("A6624HistoricoFcxTipoSaldoDesc", "HISTORICOFCXTIPOSALDODESC", 0, "svchar");
   this.setVCMap("AV42Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 381 ]= ["O3545HistoricoFcxAbreGaveta","O3544HistoricoFcxExiComplemento","O4366HistoricoSnEmiteValeTroco","O8027HistoricoFCXDescricaoFormaECF","O8186HistoricoFCXTipoBaixaSigla","O7497HistoricoFcxTrnCxaBcoSigla","O8026HistoricoFCXTotNaoFiscal","O4365HistoricoVlrMinimoEmissaoTroco","O4362HistoricoFcxHisCxaBcoTrocId","O4364HistoricoFCXTipoTroco","O4359HistoricoFcxTipoSaldoId","O3543HistoricoFcxTipo","O3542HistoricoFcxSinal","O3540HistoricoFcxDescricao"] ;
});
gx.setParentObj(new thistoricofcx());
