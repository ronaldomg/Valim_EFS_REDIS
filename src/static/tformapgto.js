/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:46:4.39
*/
gx.evt.autoSkip = false;
gx.define('tformapgto', false, function () {
   this.ServerClass =  "tformapgto" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
      this.AV19FormaPgtoId=gx.fn.getIntegerValue("vFORMAPGTOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A3375FormaPgtoEmpresaId=gx.fn.getControlValue("FORMAPGTOEMPRESAID") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV29MsgNotificacao=gx.fn.getControlValue("vMSGNOTIFICACAO") ;
      this.AV35Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Formapgtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Formapgtodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A3489FormaPgtoDescricao) )
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
   this.Valid_Formapgtotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOTIPO");
         this.AnyError  = 0;
         if ( (""==this.A3490FormaPgtoTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo");
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
   this.Valid_Formapgtocodimpfiscal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOCODIMPFISCAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Formapgtotipocliente=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOTIPOCLIENTE");
         this.AnyError  = 0;
         if ( (""==this.A3492FormaPgtoTipoCliente) || this.A3492FormaPgtoTipoCliente == "0" )
         {
            try {
               gxballoon.setError("Informe o Tipo de Cliente");
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
   this.Valid_Formapgtosnsoldadcliente=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOSNSOLDADCLIENTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Formapgtosnrecebmaior=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOSNRECEBMAIOR");
         this.AnyError  = 0;
         if ( (""==this.A3496FormaPgtoSnRecebMaior) )
         {
            try {
               gxballoon.setError("Informe se Recebe Valor Maior ao da Venda");
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
   this.Valid_Formapgtotipoconcheque=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOTIPOCONCHEQUE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Formapgtosnalttpcobr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOSNALTTPCOBR");
         this.AnyError  = 0;
         if ( (""==this.A3505FormaPgtoSnAltTpCobr) )
         {
            try {
               gxballoon.setError("Informe se Altera o Tipo de Cobrança");
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
   this.Valid_Formapagtovalorminimotroco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPAGTOVALORMINIMOTROCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Formapgtopagnfe=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOPAGNFE");
         this.AnyError  = 0;
         if ( (""==this.A10690FormaPgtoPagNFe) )
         {
            try {
               gxballoon.setError("Informe a forma de pagamento Nfe");
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
   this.Valid_Formapagtoteclaconfiguracao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPAGTOTECLACONFIGURACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Formapgtoqtdemaxparcela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOQTDEMAXPARCELA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Formapgtosnaltqtdeparcela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOSNALTQTDEPARCELA");
         this.AnyError  = 0;
         if ( (""==this.A3503FormaPgtoSnAltQtdeParcela) )
         {
            try {
               gxballoon.setError("Informe se Altera a Quantidade de Parcelas");
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
   this.Valid_Formapgtosnaltvenparcela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOSNALTVENPARCELA");
         this.AnyError  = 0;
         if ( (""==this.A3504FormaPgtoSnAltVenParcela) )
         {
            try {
               gxballoon.setError("Informe se Altera o Vencimento das Parcelas");
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
   this.Valid_Formapgtosnsoldadcheque=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOSNSOLDADCHEQUE");
         this.AnyError  = 0;
         if ( this.A3490FormaPgtoTipo == "V" && this.A3493FormaPgtoSnSolDadCheque == "S" )
         {
            try {
               gxballoon.setError("Não é permitido Solicitar dados do Cheque para pagamento \"A vista\"");
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
   this.Valid_Formapgtosnabregaveta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOSNABREGAVETA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Formapgtosnlimitecredito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOSNLIMITECREDITO");
         this.AnyError  = 0;
         if ( this.A3501FormaPgtoSnLimiteCredito == "S" && this.A3492FormaPgtoTipoCliente == "2" )
         {
            try {
               gxballoon.setError("Para checar o Limite de Crédito o cliente deve ser diferente de \"Apenas Consumidor\"");
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
   this.Valid_Formapgtosnexiconcheque=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOSNEXICONCHEQUE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Formapgtovaletroco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOVALETROCO");
         this.AnyError  = 0;
         if ( this.A3496FormaPgtoSnRecebMaior == "N" && this.A4382FormaPgtoValeTroco == "S" )
         {
            try {
               gxballoon.setError("Não é permitido Vale Troco para Forma de Cobrança que não Recebe Valor Maior");
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
   this.Valid_Formapagtoqtdetickets=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPAGTOQTDETICKETS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Formapgtosndescformaecf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOSNDESCFORMAECF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Formapagtosnsolicitaautori=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPAGTOSNSOLICITAAUTORI");
         this.AnyError  = 0;
         if ( this.A3490FormaPgtoTipo == "V" && this.A9121FormaPagtoSnSolicitaAutori == "S" )
         {
            try {
               gxballoon.setError("Não é permitido Solicitar Autorização para pagamento \"A vista\"");
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
   this.Valid_Formapgtosnemitedocto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOSNEMITEDOCTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      if ( this.Gx_mode != "INS" && this.Gx_mode != "UPD" )
      {
         gx.fn.setCtrlProperty("IMGKEYBOARD3","Enabled", 0 );
         gx.fn.setCtrlProperty("IMGLIMPA01","Enabled", 0 );
      }
      else
      {
         gx.fn.setCtrlProperty("IMGKEYBOARD3","Enabled", 1 );
         gx.fn.setCtrlProperty("IMGLIMPA01","Enabled", 1 );
      }
   };
   this.e116l376_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalpdvteclas",[this.A8031FormaPagtoTeclaConfiguracao, "", "", this.AV26Random]), ["A8031FormaPagtoTeclaConfiguracao", "AV25Tecla1"]);
      this.refreshOutputs([{av:'AV25Tecla1',fld:'vTECLA1'},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'}]);
   };
   this.e136l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e146l2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e156l2_client=function()
   {
      this.executeServerEvent("'LIMPATECLA'", true, null, false, false);
   };
   this.e166l376_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e176l376_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,21,23,26,28,31,33,36,38,41,43,46,48,51,53,56,58,61,63,66,68,71,73,76,79,81,84,86,88,97,101,103,106,108,111,113,115,118,121,124,127,130,133,136,139,142,145,148,150,152,161,162,164];
   this.GXLastCtrlId =164;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE8",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Formapgtoid,isvalid:null,rgrid:[],fld:"FORMAPGTOID",gxz:"Z3376FormaPgtoId",gxold:"O3376FormaPgtoId",gxvar:"A3376FormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3376FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3376FormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FORMAPGTOID",gx.O.A3376FormaPgtoId,0)},c2v:function(){gx.O.A3376FormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtodescricao,isvalid:null,rgrid:[],fld:"FORMAPGTODESCRICAO",gxz:"Z3489FormaPgtoDescricao",gxold:"O3489FormaPgtoDescricao",gxvar:"A3489FormaPgtoDescricao",ucs:[],op:[23],ip:[23],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3489FormaPgtoDescricao=Value},v2z:function(Value){gx.O.Z3489FormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("FORMAPGTODESCRICAO",gx.O.A3489FormaPgtoDescricao,0)},c2v:function(){gx.O.A3489FormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtotipo,isvalid:null,rgrid:[],fld:"FORMAPGTOTIPO",gxz:"Z3490FormaPgtoTipo",gxold:"O3490FormaPgtoTipo",gxvar:"A3490FormaPgtoTipo",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3490FormaPgtoTipo=Value},v2z:function(Value){gx.O.Z3490FormaPgtoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("FORMAPGTOTIPO",gx.O.A3490FormaPgtoTipo)},c2v:function(){gx.O.A3490FormaPgtoTipo=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOTIPO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtocodimpfiscal,isvalid:null,rgrid:[],fld:"FORMAPGTOCODIMPFISCAL",gxz:"Z3508FormaPgtoCodImpFiscal",gxold:"O3508FormaPgtoCodImpFiscal",gxvar:"A3508FormaPgtoCodImpFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3508FormaPgtoCodImpFiscal=Value},v2z:function(Value){gx.O.Z3508FormaPgtoCodImpFiscal=Value},v2c:function(){gx.fn.setControlValue("FORMAPGTOCODIMPFISCAL",gx.O.A3508FormaPgtoCodImpFiscal,0)},c2v:function(){gx.O.A3508FormaPgtoCodImpFiscal=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOCODIMPFISCAL")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtotipocliente,isvalid:null,rgrid:[],fld:"FORMAPGTOTIPOCLIENTE",gxz:"Z3492FormaPgtoTipoCliente",gxold:"O3492FormaPgtoTipoCliente",gxvar:"A3492FormaPgtoTipoCliente",ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3492FormaPgtoTipoCliente=Value},v2z:function(Value){gx.O.Z3492FormaPgtoTipoCliente=Value},v2c:function(){gx.fn.setComboBoxValue("FORMAPGTOTIPOCLIENTE",gx.O.A3492FormaPgtoTipoCliente)},c2v:function(){gx.O.A3492FormaPgtoTipoCliente=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOTIPOCLIENTE")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtosnsoldadcliente,isvalid:null,rgrid:[],fld:"FORMAPGTOSNSOLDADCLIENTE",gxz:"Z3495FormaPgtoSnSolDadCliente",gxold:"O3495FormaPgtoSnSolDadCliente",gxvar:"A3495FormaPgtoSnSolDadCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3495FormaPgtoSnSolDadCliente=Value},v2z:function(Value){gx.O.Z3495FormaPgtoSnSolDadCliente=Value},v2c:function(){gx.fn.setComboBoxValue("FORMAPGTOSNSOLDADCLIENTE",gx.O.A3495FormaPgtoSnSolDadCliente)},c2v:function(){gx.O.A3495FormaPgtoSnSolDadCliente=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOSNSOLDADCLIENTE")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtosnrecebmaior,isvalid:null,rgrid:[],fld:"FORMAPGTOSNRECEBMAIOR",gxz:"Z3496FormaPgtoSnRecebMaior",gxold:"O3496FormaPgtoSnRecebMaior",gxvar:"A3496FormaPgtoSnRecebMaior",ucs:[],op:[48],ip:[48],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3496FormaPgtoSnRecebMaior=Value},v2z:function(Value){gx.O.Z3496FormaPgtoSnRecebMaior=Value},v2c:function(){gx.fn.setComboBoxValue("FORMAPGTOSNRECEBMAIOR",gx.O.A3496FormaPgtoSnRecebMaior)},c2v:function(){gx.O.A3496FormaPgtoSnRecebMaior=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOSNRECEBMAIOR")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtotipoconcheque,isvalid:null,rgrid:[],fld:"FORMAPGTOTIPOCONCHEQUE",gxz:"Z3499FormaPgtoTipoConCheque",gxold:"O3499FormaPgtoTipoConCheque",gxvar:"A3499FormaPgtoTipoConCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3499FormaPgtoTipoConCheque=Value},v2z:function(Value){gx.O.Z3499FormaPgtoTipoConCheque=Value},v2c:function(){gx.fn.setComboBoxValue("FORMAPGTOTIPOCONCHEQUE",gx.O.A3499FormaPgtoTipoConCheque)},c2v:function(){gx.O.A3499FormaPgtoTipoConCheque=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOTIPOCONCHEQUE")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtosnalttpcobr,isvalid:null,rgrid:[],fld:"FORMAPGTOSNALTTPCOBR",gxz:"Z3505FormaPgtoSnAltTpCobr",gxold:"O3505FormaPgtoSnAltTpCobr",gxvar:"A3505FormaPgtoSnAltTpCobr",ucs:[],op:[58],ip:[58],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3505FormaPgtoSnAltTpCobr=Value},v2z:function(Value){gx.O.Z3505FormaPgtoSnAltTpCobr=Value},v2c:function(){gx.fn.setComboBoxValue("FORMAPGTOSNALTTPCOBR",gx.O.A3505FormaPgtoSnAltTpCobr)},c2v:function(){gx.O.A3505FormaPgtoSnAltTpCobr=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOSNALTTPCOBR")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapagtovalorminimotroco,isvalid:null,rgrid:[],fld:"FORMAPAGTOVALORMINIMOTROCO",gxz:"Z8030FormaPagtoValorMinimoTroco",gxold:"O8030FormaPagtoValorMinimoTroco",gxvar:"A8030FormaPagtoValorMinimoTroco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8030FormaPagtoValorMinimoTroco=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8030FormaPagtoValorMinimoTroco=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FORMAPAGTOVALORMINIMOTROCO",gx.O.A8030FormaPagtoValorMinimoTroco,2,',')},c2v:function(){gx.O.A8030FormaPagtoValorMinimoTroco=this.val()},val:function(){return gx.fn.getDecimalValue("FORMAPAGTOVALORMINIMOTROCO",'.',',')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtopagnfe,isvalid:null,rgrid:[],fld:"FORMAPGTOPAGNFE",gxz:"Z10690FormaPgtoPagNFe",gxold:"O10690FormaPgtoPagNFe",gxvar:"A10690FormaPgtoPagNFe",ucs:[],op:[68],ip:[68],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10690FormaPgtoPagNFe=Value},v2z:function(Value){gx.O.Z10690FormaPgtoPagNFe=Value},v2c:function(){gx.fn.setComboBoxValue("FORMAPGTOPAGNFE",gx.O.A10690FormaPgtoPagNFe)},c2v:function(){gx.O.A10690FormaPgtoPagNFe=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOPAGNFE")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[73]={fld:"TABLE3",grid:0};
   GXValidFnc[76]={fld:"TABLE12",grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Formapagtoteclaconfiguracao,isvalid:null,rgrid:[],fld:"FORMAPAGTOTECLACONFIGURACAO",gxz:"Z8031FormaPagtoTeclaConfiguracao",gxold:"O8031FormaPagtoTeclaConfiguracao",gxvar:"A8031FormaPagtoTeclaConfiguracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8031FormaPagtoTeclaConfiguracao=Value},v2z:function(Value){gx.O.Z8031FormaPagtoTeclaConfiguracao=Value},v2c:function(){gx.fn.setControlValue("FORMAPAGTOTECLACONFIGURACAO",gx.O.A8031FormaPagtoTeclaConfiguracao,0)},c2v:function(){gx.O.A8031FormaPagtoTeclaConfiguracao=this.val()},val:function(){return gx.fn.getControlValue("FORMAPAGTOTECLACONFIGURACAO")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TABLE5",grid:0};
   GXValidFnc[84]={fld:"IMGKEYBOARD3",grid:0};
   GXValidFnc[86]={fld:"IMGLIMPA01",grid:0};
   GXValidFnc[88]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTECLA1",gxz:"ZV25Tecla1",gxold:"OV25Tecla1",gxvar:"AV25Tecla1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25Tecla1=Value},v2z:function(Value){gx.O.ZV25Tecla1=Value},v2c:function(){gx.fn.setComboBoxValue("vTECLA1",gx.O.AV25Tecla1)},c2v:function(){gx.O.AV25Tecla1=this.val()},val:function(){return gx.fn.getControlValue("vTECLA1")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[101]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtoqtdemaxparcela,isvalid:null,rgrid:[],fld:"FORMAPGTOQTDEMAXPARCELA",gxz:"Z3502FormaPgtoQtdeMaxParcela",gxold:"O3502FormaPgtoQtdeMaxParcela",gxvar:"A3502FormaPgtoQtdeMaxParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3502FormaPgtoQtdeMaxParcela=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3502FormaPgtoQtdeMaxParcela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FORMAPGTOQTDEMAXPARCELA",gx.O.A3502FormaPgtoQtdeMaxParcela,0)},c2v:function(){gx.O.A3502FormaPgtoQtdeMaxParcela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FORMAPGTOQTDEMAXPARCELA",'.')},nac:gx.falseFn};
   GXValidFnc[106]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtosnaltqtdeparcela,isvalid:null,rgrid:[],fld:"FORMAPGTOSNALTQTDEPARCELA",gxz:"Z3503FormaPgtoSnAltQtdeParcela",gxold:"O3503FormaPgtoSnAltQtdeParcela",gxvar:"A3503FormaPgtoSnAltQtdeParcela",ucs:[],op:[108],ip:[108],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3503FormaPgtoSnAltQtdeParcela=Value},v2z:function(Value){gx.O.Z3503FormaPgtoSnAltQtdeParcela=Value},v2c:function(){gx.fn.setComboBoxValue("FORMAPGTOSNALTQTDEPARCELA",gx.O.A3503FormaPgtoSnAltQtdeParcela)},c2v:function(){gx.O.A3503FormaPgtoSnAltQtdeParcela=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOSNALTQTDEPARCELA")},nac:gx.falseFn};
   GXValidFnc[111]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[113]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtosnaltvenparcela,isvalid:null,rgrid:[],fld:"FORMAPGTOSNALTVENPARCELA",gxz:"Z3504FormaPgtoSnAltVenParcela",gxold:"O3504FormaPgtoSnAltVenParcela",gxvar:"A3504FormaPgtoSnAltVenParcela",ucs:[],op:[113],ip:[113],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3504FormaPgtoSnAltVenParcela=Value},v2z:function(Value){gx.O.Z3504FormaPgtoSnAltVenParcela=Value},v2c:function(){gx.fn.setComboBoxValue("FORMAPGTOSNALTVENPARCELA",gx.O.A3504FormaPgtoSnAltVenParcela)},c2v:function(){gx.O.A3504FormaPgtoSnAltVenParcela=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOSNALTVENPARCELA")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TABLE6",grid:0};
   GXValidFnc[118]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtosnsoldadcheque,isvalid:null,rgrid:[],fld:"FORMAPGTOSNSOLDADCHEQUE",gxz:"Z3493FormaPgtoSnSolDadCheque",gxold:"O3493FormaPgtoSnSolDadCheque",gxvar:"A3493FormaPgtoSnSolDadCheque",ucs:[],op:[118,28],ip:[118,28],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3493FormaPgtoSnSolDadCheque=Value},v2z:function(Value){gx.O.Z3493FormaPgtoSnSolDadCheque=Value},v2c:function(){gx.fn.setCheckBoxValue("FORMAPGTOSNSOLDADCHEQUE",gx.O.A3493FormaPgtoSnSolDadCheque,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3493FormaPgtoSnSolDadCheque=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOSNSOLDADCHEQUE")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 118 , function() {
   });
   GXValidFnc[121]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtosnabregaveta,isvalid:null,rgrid:[],fld:"FORMAPGTOSNABREGAVETA",gxz:"Z3500FormaPgtoSnAbreGaveta",gxold:"O3500FormaPgtoSnAbreGaveta",gxvar:"A3500FormaPgtoSnAbreGaveta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3500FormaPgtoSnAbreGaveta=Value},v2z:function(Value){gx.O.Z3500FormaPgtoSnAbreGaveta=Value},v2c:function(){gx.fn.setCheckBoxValue("FORMAPGTOSNABREGAVETA",gx.O.A3500FormaPgtoSnAbreGaveta,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3500FormaPgtoSnAbreGaveta=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOSNABREGAVETA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 121 , function() {
   });
   GXValidFnc[124]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtosnlimitecredito,isvalid:null,rgrid:[],fld:"FORMAPGTOSNLIMITECREDITO",gxz:"Z3501FormaPgtoSnLimiteCredito",gxold:"O3501FormaPgtoSnLimiteCredito",gxvar:"A3501FormaPgtoSnLimiteCredito",ucs:[],op:[38,124],ip:[38,124],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3501FormaPgtoSnLimiteCredito=Value},v2z:function(Value){gx.O.Z3501FormaPgtoSnLimiteCredito=Value},v2c:function(){gx.fn.setCheckBoxValue("FORMAPGTOSNLIMITECREDITO",gx.O.A3501FormaPgtoSnLimiteCredito,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3501FormaPgtoSnLimiteCredito=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOSNLIMITECREDITO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 124 , function() {
   });
   GXValidFnc[127]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtosnexiconcheque,isvalid:null,rgrid:[],fld:"FORMAPGTOSNEXICONCHEQUE",gxz:"Z3498FormaPgtoSnExiConCheque",gxold:"O3498FormaPgtoSnExiConCheque",gxvar:"A3498FormaPgtoSnExiConCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3498FormaPgtoSnExiConCheque=Value},v2z:function(Value){gx.O.Z3498FormaPgtoSnExiConCheque=Value},v2c:function(){gx.fn.setCheckBoxValue("FORMAPGTOSNEXICONCHEQUE",gx.O.A3498FormaPgtoSnExiConCheque,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3498FormaPgtoSnExiConCheque=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOSNEXICONCHEQUE")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 127 , function() {
   });
   GXValidFnc[130]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtovaletroco,isvalid:null,rgrid:[],fld:"FORMAPGTOVALETROCO",gxz:"Z4382FormaPgtoValeTroco",gxold:"O4382FormaPgtoValeTroco",gxvar:"A4382FormaPgtoValeTroco",ucs:[],op:[130,48],ip:[130,48],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A4382FormaPgtoValeTroco=Value},v2z:function(Value){gx.O.Z4382FormaPgtoValeTroco=Value},v2c:function(){gx.fn.setCheckBoxValue("FORMAPGTOVALETROCO",gx.O.A4382FormaPgtoValeTroco,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4382FormaPgtoValeTroco=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOVALETROCO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 130 , function() {
   });
   GXValidFnc[133]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapagtoqtdetickets,isvalid:null,rgrid:[],fld:"FORMAPAGTOQTDETICKETS",gxz:"Z8032FormaPagtoQtdeTickets",gxold:"O8032FormaPagtoQtdeTickets",gxvar:"A8032FormaPagtoQtdeTickets",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8032FormaPagtoQtdeTickets=Value},v2z:function(Value){gx.O.Z8032FormaPagtoQtdeTickets=Value},v2c:function(){gx.fn.setCheckBoxValue("FORMAPAGTOQTDETICKETS",gx.O.A8032FormaPagtoQtdeTickets,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8032FormaPagtoQtdeTickets=this.val()},val:function(){return gx.fn.getControlValue("FORMAPAGTOQTDETICKETS")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 133 , function() {
   });
   GXValidFnc[136]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtosndescformaecf,isvalid:null,rgrid:[],fld:"FORMAPGTOSNDESCFORMAECF",gxz:"Z8532FormaPgtoSNDescFormaECF",gxold:"O8532FormaPgtoSNDescFormaECF",gxvar:"A8532FormaPgtoSNDescFormaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8532FormaPgtoSNDescFormaECF=Value},v2z:function(Value){gx.O.Z8532FormaPgtoSNDescFormaECF=Value},v2c:function(){gx.fn.setCheckBoxValue("FORMAPGTOSNDESCFORMAECF",gx.O.A8532FormaPgtoSNDescFormaECF,"S")},c2v:function(){gx.O.A8532FormaPgtoSNDescFormaECF=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOSNDESCFORMAECF")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[139]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapagtosnsolicitaautori,isvalid:null,rgrid:[],fld:"FORMAPAGTOSNSOLICITAAUTORI",gxz:"Z9121FormaPagtoSnSolicitaAutori",gxold:"O9121FormaPagtoSnSolicitaAutori",gxvar:"A9121FormaPagtoSnSolicitaAutori",ucs:[],op:[139,28],ip:[139,28],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9121FormaPagtoSnSolicitaAutori=Value},v2z:function(Value){gx.O.Z9121FormaPagtoSnSolicitaAutori=Value},v2c:function(){gx.fn.setCheckBoxValue("FORMAPAGTOSNSOLICITAAUTORI",gx.O.A9121FormaPagtoSnSolicitaAutori,"S")},c2v:function(){gx.O.A9121FormaPagtoSnSolicitaAutori=this.val()},val:function(){return gx.fn.getControlValue("FORMAPAGTOSNSOLICITAAUTORI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[142]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Formapgtosnemitedocto,isvalid:null,rgrid:[],fld:"FORMAPGTOSNEMITEDOCTO",gxz:"Z9352FormaPgtoSnEmiteDocto",gxold:"O9352FormaPgtoSnEmiteDocto",gxvar:"A9352FormaPgtoSnEmiteDocto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9352FormaPgtoSnEmiteDocto=Value},v2z:function(Value){gx.O.Z9352FormaPgtoSnEmiteDocto=Value},v2c:function(){gx.fn.setCheckBoxValue("FORMAPGTOSNEMITEDOCTO",gx.O.A9352FormaPgtoSnEmiteDocto,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9352FormaPgtoSnEmiteDocto=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOSNEMITEDOCTO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 142 , function() {
   });
   GXValidFnc[145]={fld:"TABLE10",grid:0};
   GXValidFnc[148]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTOUSUARIOALT",gxz:"Z3511FormaPgtoUsuarioAlt",gxold:"O3511FormaPgtoUsuarioAlt",gxvar:"A3511FormaPgtoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3511FormaPgtoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3511FormaPgtoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("FORMAPGTOUSUARIOALT",gx.O.A3511FormaPgtoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3511FormaPgtoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("FORMAPGTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 150 , function() {
   });
   GXValidFnc[152]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTODATAHORAALT",gxz:"Z3512FormaPgtoDataHoraAlt",gxold:"O3512FormaPgtoDataHoraAlt",gxvar:"A3512FormaPgtoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3512FormaPgtoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3512FormaPgtoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("FORMAPGTODATAHORAALT",gx.O.A3512FormaPgtoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3512FormaPgtoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("FORMAPGTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 152 , function() {
   });
   GXValidFnc[161]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[162]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRANDOM",gxz:"ZV26Random",gxold:"OV26Random",gxvar:"AV26Random",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Random=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26Random=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRANDOM",gx.O.AV26Random,0)},c2v:function(){gx.O.AV26Random=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRANDOM",'.')},nac:gx.falseFn};
   GXValidFnc[164]={fld:"BTNHELP",grid:0};
   this.A3376FormaPgtoId = 0 ;
   this.Z3376FormaPgtoId = 0 ;
   this.O3376FormaPgtoId = 0 ;
   this.A3489FormaPgtoDescricao = "" ;
   this.Z3489FormaPgtoDescricao = "" ;
   this.O3489FormaPgtoDescricao = "" ;
   this.A3490FormaPgtoTipo = "" ;
   this.Z3490FormaPgtoTipo = "" ;
   this.O3490FormaPgtoTipo = "" ;
   this.A3508FormaPgtoCodImpFiscal = "" ;
   this.Z3508FormaPgtoCodImpFiscal = "" ;
   this.O3508FormaPgtoCodImpFiscal = "" ;
   this.A3492FormaPgtoTipoCliente = "" ;
   this.Z3492FormaPgtoTipoCliente = "" ;
   this.O3492FormaPgtoTipoCliente = "" ;
   this.A3495FormaPgtoSnSolDadCliente = "" ;
   this.Z3495FormaPgtoSnSolDadCliente = "" ;
   this.O3495FormaPgtoSnSolDadCliente = "" ;
   this.A3496FormaPgtoSnRecebMaior = "" ;
   this.Z3496FormaPgtoSnRecebMaior = "" ;
   this.O3496FormaPgtoSnRecebMaior = "" ;
   this.A3499FormaPgtoTipoConCheque = "" ;
   this.Z3499FormaPgtoTipoConCheque = "" ;
   this.O3499FormaPgtoTipoConCheque = "" ;
   this.A3505FormaPgtoSnAltTpCobr = "" ;
   this.Z3505FormaPgtoSnAltTpCobr = "" ;
   this.O3505FormaPgtoSnAltTpCobr = "" ;
   this.A8030FormaPagtoValorMinimoTroco = 0 ;
   this.Z8030FormaPagtoValorMinimoTroco = 0 ;
   this.O8030FormaPagtoValorMinimoTroco = 0 ;
   this.A10690FormaPgtoPagNFe = "" ;
   this.Z10690FormaPgtoPagNFe = "" ;
   this.O10690FormaPgtoPagNFe = "" ;
   this.A8031FormaPagtoTeclaConfiguracao = "" ;
   this.Z8031FormaPagtoTeclaConfiguracao = "" ;
   this.O8031FormaPagtoTeclaConfiguracao = "" ;
   this.AV25Tecla1 = "" ;
   this.ZV25Tecla1 = "" ;
   this.OV25Tecla1 = "" ;
   this.A3502FormaPgtoQtdeMaxParcela = 0 ;
   this.Z3502FormaPgtoQtdeMaxParcela = 0 ;
   this.O3502FormaPgtoQtdeMaxParcela = 0 ;
   this.A3503FormaPgtoSnAltQtdeParcela = "" ;
   this.Z3503FormaPgtoSnAltQtdeParcela = "" ;
   this.O3503FormaPgtoSnAltQtdeParcela = "" ;
   this.A3504FormaPgtoSnAltVenParcela = "" ;
   this.Z3504FormaPgtoSnAltVenParcela = "" ;
   this.O3504FormaPgtoSnAltVenParcela = "" ;
   this.A3493FormaPgtoSnSolDadCheque = "" ;
   this.Z3493FormaPgtoSnSolDadCheque = "" ;
   this.O3493FormaPgtoSnSolDadCheque = "" ;
   this.A3500FormaPgtoSnAbreGaveta = "" ;
   this.Z3500FormaPgtoSnAbreGaveta = "" ;
   this.O3500FormaPgtoSnAbreGaveta = "" ;
   this.A3501FormaPgtoSnLimiteCredito = "" ;
   this.Z3501FormaPgtoSnLimiteCredito = "" ;
   this.O3501FormaPgtoSnLimiteCredito = "" ;
   this.A3498FormaPgtoSnExiConCheque = "" ;
   this.Z3498FormaPgtoSnExiConCheque = "" ;
   this.O3498FormaPgtoSnExiConCheque = "" ;
   this.A4382FormaPgtoValeTroco = "" ;
   this.Z4382FormaPgtoValeTroco = "" ;
   this.O4382FormaPgtoValeTroco = "" ;
   this.A8032FormaPagtoQtdeTickets = "" ;
   this.Z8032FormaPagtoQtdeTickets = "" ;
   this.O8032FormaPagtoQtdeTickets = "" ;
   this.A8532FormaPgtoSNDescFormaECF = "" ;
   this.Z8532FormaPgtoSNDescFormaECF = "" ;
   this.O8532FormaPgtoSNDescFormaECF = "" ;
   this.A9121FormaPagtoSnSolicitaAutori = "" ;
   this.Z9121FormaPagtoSnSolicitaAutori = "" ;
   this.O9121FormaPagtoSnSolicitaAutori = "" ;
   this.A9352FormaPgtoSnEmiteDocto = "" ;
   this.Z9352FormaPgtoSnEmiteDocto = "" ;
   this.O9352FormaPgtoSnEmiteDocto = "" ;
   this.A3511FormaPgtoUsuarioAlt = "" ;
   this.Z3511FormaPgtoUsuarioAlt = "" ;
   this.O3511FormaPgtoUsuarioAlt = "" ;
   this.A3512FormaPgtoDataHoraAlt = gx.date.nullDate() ;
   this.Z3512FormaPgtoDataHoraAlt = gx.date.nullDate() ;
   this.O3512FormaPgtoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV26Random = 0 ;
   this.ZV26Random = 0 ;
   this.OV26Random = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV34Pgmname = "" ;
   this.AV35Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20ECF = 0 ;
   this.AV22CPR = 0 ;
   this.AV19FormaPgtoId = 0 ;
   this.AV25Tecla1 = "" ;
   this.AV26Random = 0 ;
   this.AV28NomeSessao = "" ;
   this.AV18SnAlterou = "" ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.A3376FormaPgtoId = 0 ;
   this.A3511FormaPgtoUsuarioAlt = "" ;
   this.A3512FormaPgtoDataHoraAlt = gx.date.nullDate() ;
   this.AV29MsgNotificacao = "" ;
   this.Gx_BScreen = 0 ;
   this.A3489FormaPgtoDescricao = "" ;
   this.A3490FormaPgtoTipo = "" ;
   this.A3492FormaPgtoTipoCliente = "" ;
   this.A3493FormaPgtoSnSolDadCheque = "" ;
   this.A3495FormaPgtoSnSolDadCliente = "" ;
   this.A3496FormaPgtoSnRecebMaior = "" ;
   this.A3498FormaPgtoSnExiConCheque = "" ;
   this.A3499FormaPgtoTipoConCheque = "" ;
   this.A3500FormaPgtoSnAbreGaveta = "" ;
   this.A3501FormaPgtoSnLimiteCredito = "" ;
   this.A3502FormaPgtoQtdeMaxParcela = 0 ;
   this.A3503FormaPgtoSnAltQtdeParcela = "" ;
   this.A3504FormaPgtoSnAltVenParcela = "" ;
   this.A3505FormaPgtoSnAltTpCobr = "" ;
   this.A3508FormaPgtoCodImpFiscal = "" ;
   this.A4382FormaPgtoValeTroco = "" ;
   this.A8532FormaPgtoSNDescFormaECF = "" ;
   this.A8030FormaPagtoValorMinimoTroco = 0 ;
   this.A8031FormaPagtoTeclaConfiguracao = "" ;
   this.A8032FormaPagtoQtdeTickets = "" ;
   this.A9121FormaPagtoSnSolicitaAutori = "" ;
   this.A9352FormaPgtoSnEmiteDocto = "" ;
   this.A10690FormaPgtoPagNFe = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e136l2_client": ["'FECHAR'", true] ,"e146l2_client": ["AFTER TRN", true] ,"e156l2_client": ["'LIMPATECLA'", true] ,"e166l376_client": ["ENTER", true] ,"e176l376_client": ["CANCEL", true] ,"e116l376_client": ["'MODALKEYTECLAS'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19FormaPgtoId',fld:'vFORMAPGTOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV28NomeSessao',fld:'vNOMESESSAO'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV28NomeSessao',fld:'vNOMESESSAO'}],[]];
   this.EvtParms["'MODALKEYTECLAS'"] = [[{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV26Random',fld:'vRANDOM'}],[{av:'AV25Tecla1',fld:'vTECLA1'},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'}]];
   this.EvtParms["'LIMPATECLA'"] = [[{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV25Tecla1',fld:'vTECLA1'},{av:'AV26Random',fld:'vRANDOM'}],[{av:'AV25Tecla1',fld:'vTECLA1'},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19FormaPgtoId", "vFORMAPGTOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3375FormaPgtoEmpresaId", "FORMAPGTOEMPRESAID", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV29MsgNotificacao", "vMSGNOTIFICACAO", 0, "svchar");
   this.setVCMap("AV35Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 376 ]= ["O10690FormaPgtoPagNFe","O4382FormaPgtoValeTroco","O9352FormaPgtoSnEmiteDocto","O9121FormaPagtoSnSolicitaAutori","O8532FormaPgtoSNDescFormaECF","O8031FormaPagtoTeclaConfiguracao","O8032FormaPagtoQtdeTickets","O8030FormaPagtoValorMinimoTroco","O3508FormaPgtoCodImpFiscal","O3505FormaPgtoSnAltTpCobr","O3504FormaPgtoSnAltVenParcela","O3503FormaPgtoSnAltQtdeParcela","O3502FormaPgtoQtdeMaxParcela","O3501FormaPgtoSnLimiteCredito","O3500FormaPgtoSnAbreGaveta","O3499FormaPgtoTipoConCheque","O3498FormaPgtoSnExiConCheque","O3496FormaPgtoSnRecebMaior","O3495FormaPgtoSnSolDadCliente","O3493FormaPgtoSnSolDadCheque","O3492FormaPgtoTipoCliente","O3490FormaPgtoTipo","O3489FormaPgtoDescricao"] ;
});
gx.setParentObj(new tformapgto());
