/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:42:17.31
*/
gx.evt.autoSkip = false;
gx.define('tcontrato', false, function () {
   this.ServerClass =  "tcontrato" ;
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
      this.A5281ContratoValorTotal=gx.fn.getDecimalValue("CONTRATOVALORTOTAL",'.',',') ;
      this.AV19ContratoNumero=gx.fn.getIntegerValue("vCONTRATONUMERO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5288ContratoEmpresaId=gx.fn.getControlValue("CONTRATOEMPRESAID") ;
      this.AV21PessoaEmpresaId=gx.fn.getControlValue("vPESSOAEMPRESAID") ;
      this.A5267ContratoClienteEmpId=gx.fn.getControlValue("CONTRATOCLIENTEEMPID") ;
      this.A5272ContratoLoteamentoEmpId=gx.fn.getControlValue("CONTRATOLOTEAMENTOEMPID") ;
      this.A5271ContratoClienteSnCliente=gx.fn.getControlValue("CONTRATOCLIENTESNCLIENTE") ;
      this.A10760ContratoSnCancelado=gx.fn.getControlValue("CONTRATOSNCANCELADO") ;
      this.AV76TPDESCRICAO=gx.fn.getControlValue("vTPDESCRICAO") ;
      this.A5275ContratoLoteamentoIdentLotes=gx.fn.getControlValue("CONTRATOLOTEAMENTOIDENTLOTES") ;
      this.AV57SnConsisteSituacao=gx.fn.getControlValue("vSNCONSISTESITUACAO") ;
      this.AV93SnNaoCadastrado=gx.fn.getControlValue("vSNNAOCADASTRADO") ;
      this.AV40SnReservado=gx.fn.getControlValue("vSNRESERVADO") ;
      this.AV38ClienteReserva=gx.fn.getIntegerValue("vCLIENTERESERVA",'.') ;
      this.AV39SnAVenda=gx.fn.getControlValue("vSNAVENDA") ;
      this.AV9Erro=gx.fn.getIntegerValue("vERRO",'.') ;
      this.AV89Erro1=gx.fn.getIntegerValue("vERRO1",'.') ;
      this.AV44ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV96ContratoSnZerado=gx.fn.getControlValue("vCONTRATOSNZERADO") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV83MsgLote=gx.fn.getControlValue("vMSGLOTE") ;
      this.AV84MsgQuadra=gx.fn.getControlValue("vMSGQUADRA") ;
      this.AV41SnVendido=gx.fn.getControlValue("vSNVENDIDO") ;
      this.AV92MsgNaoCadastrado=gx.fn.getControlValue("vMSGNAOCADASTRADO") ;
      this.AV81MsgReservado=gx.fn.getControlValue("vMSGRESERVADO") ;
      this.AV80MsgNaoDisp=gx.fn.getControlValue("vMSGNAODISP") ;
      this.AV82MsgValor=gx.fn.getControlValue("vMSGVALOR") ;
      this.A5270ContratoClienteRazaoSocial=gx.fn.getControlValue("CONTRATOCLIENTERAZAOSOCIAL") ;
      this.A9612ContratoClienteSnFornecedor=gx.fn.getControlValue("CONTRATOCLIENTESNFORNECEDOR") ;
      this.AV99Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV98Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV25Sim=gx.fn.getControlValue("vSIM") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV18ContratoEmpresaId=gx.fn.getControlValue("vCONTRATOEMPRESAID") ;
   };
   this.Valid_Contratonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRATONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contratoclienteid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contratoclienteid",["gx.O.AV21PessoaEmpresaId", "gx.O.A5268ContratoClienteId", "gx.O.A5267ContratoClienteEmpId", "gx.O.A5269ContratoClienteFantasia", "gx.O.A5270ContratoClienteRazaoSocial", "gx.O.A5271ContratoClienteSnCliente", "gx.O.A9612ContratoClienteSnFornecedor"],["A5267ContratoClienteEmpId", "A5269ContratoClienteFantasia", "A5270ContratoClienteRazaoSocial", "A5271ContratoClienteSnCliente", "A9612ContratoClienteSnFornecedor"]);
      return true;
   }
   this.Valid_Contratosnzerado=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contratosnzerado",["gx.O.A10695ContratoSnZerado", "gx.O.AV96ContratoSnZerado"],["AV96ContratoSnZerado"]);
      return true;
   }
   this.Valid_Contratoloteamentoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contratoloteamentoid",["gx.O.AV22LoteamentoEmpresaId", "gx.O.A5273ContratoLoteamentoId", "gx.O.A5272ContratoLoteamentoEmpId", "gx.O.A5274ContratoLoteamentoNome", "gx.O.A5275ContratoLoteamentoIdentLotes"],["A5272ContratoLoteamentoEmpId", "A5274ContratoLoteamentoNome", "A5275ContratoLoteamentoIdentLotes"]);
      return true;
   }
   this.Valid_Contratoloteamentonome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRATOLOTEAMENTONOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contratoloteamentonumlote=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRATOLOTEAMENTONUMLOTE");
         this.AnyError  = 0;
         try {
            this.A5276ContratoLoteamentoNumLote =  gx.text.upper( this.A5276ContratoLoteamentoNumLote)  ;
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
   this.Valid_Contratoloteamentonumquadra=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contratoloteamentonumquadra",["gx.O.A5277ContratoLoteamentoNumQuadra", "gx.O.A5272ContratoLoteamentoEmpId", "gx.O.A5273ContratoLoteamentoId", "gx.O.A5276ContratoLoteamentoNumLote", "gx.O.AV22LoteamentoEmpresaId", "gx.O.A5289ContratoNumero", "gx.O.AV57SnConsisteSituacao", "gx.O.AV39SnAVenda", "gx.O.AV40SnReservado", "gx.O.AV41SnVendido", "gx.O.AV38ClienteReserva", "gx.O.AV93SnNaoCadastrado"],["A5277ContratoLoteamentoNumQuadra", "AV39SnAVenda", "AV40SnReservado", "AV41SnVendido", "AV38ClienteReserva", "AV93SnNaoCadastrado"]);
      return true;
   }
   this.Valid_Contratodtvenda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRATODTVENDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contratovalorloteimovel=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contratovalorloteimovel",["gx.O.A5272ContratoLoteamentoEmpId", "gx.O.A5273ContratoLoteamentoId", "gx.O.A5276ContratoLoteamentoNumLote", "gx.O.A5277ContratoLoteamentoNumQuadra", "gx.num.urlDecimal(gx.O.A8505ContratoValorLoteImovel,\'.\',\',\')", "gx.O.AV96ContratoSnZerado"],["A8505ContratoValorLoteImovel"]);
      return true;
   }
   this.Valid_Contratovalordesconto=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contratovalordesconto",["gx.num.urlDecimal(gx.O.A8505ContratoValorLoteImovel,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5280ContratoValorDesconto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5281ContratoValorTotal,\'.\',\',\')", "gx.num.urlDecimal(gx.O.AV56ContratoValorTotal,\'.\',\',\')"],["A5281ContratoValorTotal", "AV56ContratoValorTotal"]);
      return true;
   }
   this.Valid_Contratoqtdetotalparcelas=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRATOQTDETOTALPARCELAS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contratonomepritestemunha=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRATONOMEPRITESTEMUNHA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contratocpfpritestemunha=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contratocpfpritestemunha",["gx.O.A5283ContratoCpfPriTestemunha", "gx.O.AV9Erro"],["AV9Erro"]);
      return true;
   }
   this.Valid_Contratonomesegtestemunha=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRATONOMESEGTESTEMUNHA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contratocpfsegtestemunha=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contratocpfsegtestemunha",["gx.O.A5285ContratoCpfSegTestemunha", "gx.O.AV89Erro1"],["AV89Erro1"]);
      return true;
   }
   this.Valid_Contratoobservacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTRATOOBSERVACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Loteamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTEAMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e148g460_client=function()
   {
      this.executeServerEvent("PROMPT_5273.GXPROMPT", true, null, false, true);
   };
   this.e128g2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138g2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e158g460_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e168g460_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,19,21,22,26,29,31,32,35,37,38,39,42,44,50,52,55,57,60,62,65,67,70,76,78,81,83,86,88,91,93,94,97,100,102,105,107,110,112,118,120,123,125,126,129,132,134,137,140,142,144,151,154,155,156,157,159,161,162,163];
   this.GXLastCtrlId =163;
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV90Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV90Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV90Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tcontrato_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE5",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE6",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contratonumero,isvalid:null,rgrid:[],fld:"CONTRATONUMERO",gxz:"Z5289ContratoNumero",gxold:"O5289ContratoNumero",gxvar:"A5289ContratoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5289ContratoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5289ContratoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTRATONUMERO",gx.O.A5289ContratoNumero,0)},c2v:function(){gx.O.A5289ContratoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTRATONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratoclienteid,isvalid:null,rgrid:[],fld:"CONTRATOCLIENTEID",gxz:"Z5268ContratoClienteId",gxold:"O5268ContratoClienteId",gxvar:"A5268ContratoClienteId",ucs:[],op:[22],ip:[22,21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5268ContratoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5268ContratoClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTRATOCLIENTEID",gx.O.A5268ContratoClienteId,0)},c2v:function(){gx.O.A5268ContratoClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTRATOCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCLIENTEFANTASIA",gxz:"Z5269ContratoClienteFantasia",gxold:"O5269ContratoClienteFantasia",gxvar:"A5269ContratoClienteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5269ContratoClienteFantasia=Value},v2z:function(Value){gx.O.Z5269ContratoClienteFantasia=Value},v2c:function(){gx.fn.setControlValue("CONTRATOCLIENTEFANTASIA",gx.O.A5269ContratoClienteFantasia,0)},c2v:function(){gx.O.A5269ContratoClienteFantasia=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOCLIENTEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratosnzerado,isvalid:null,rgrid:[],fld:"CONTRATOSNZERADO",gxz:"Z10695ContratoSnZerado",gxold:"O10695ContratoSnZerado",gxvar:"A10695ContratoSnZerado",ucs:[],op:[],ip:[26],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10695ContratoSnZerado=Value},v2z:function(Value){gx.O.Z10695ContratoSnZerado=Value},v2c:function(){gx.fn.setCheckBoxValue("CONTRATOSNZERADO",gx.O.A10695ContratoSnZerado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10695ContratoSnZerado=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOSNZERADO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTEMP",gxz:"ZV77DescLotEmp",gxold:"OV77DescLotEmp",gxvar:"AV77DescLotEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77DescLotEmp=Value},v2z:function(Value){gx.O.ZV77DescLotEmp=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTEMP",gx.O.AV77DescLotEmp,0)},c2v:function(){gx.O.AV77DescLotEmp=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTEMP")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratoloteamentoid,isvalid:null,rgrid:[],fld:"CONTRATOLOTEAMENTOID",gxz:"Z5273ContratoLoteamentoId",gxold:"O5273ContratoLoteamentoId",gxvar:"A5273ContratoLoteamentoId",ucs:[],op:[32],ip:[32,31,151],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5273ContratoLoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5273ContratoLoteamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTRATOLOTEAMENTOID",gx.O.A5273ContratoLoteamentoId,0)},c2v:function(){gx.O.A5273ContratoLoteamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTRATOLOTEAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contratoloteamentonome,isvalid:null,rgrid:[],fld:"CONTRATOLOTEAMENTONOME",gxz:"Z5274ContratoLoteamentoNome",gxold:"O5274ContratoLoteamentoNome",gxvar:"A5274ContratoLoteamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5274ContratoLoteamentoNome=Value},v2z:function(Value){gx.O.Z5274ContratoLoteamentoNome=Value},v2c:function(){gx.fn.setControlValue("CONTRATOLOTEAMENTONOME",gx.O.A5274ContratoLoteamentoNome,0)},c2v:function(){gx.O.A5274ContratoLoteamentoNome=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOLOTEAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCNUMLOTEMP",gxz:"ZV78DescNumLotEmp",gxold:"OV78DescNumLotEmp",gxvar:"AV78DescNumLotEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78DescNumLotEmp=Value},v2z:function(Value){gx.O.ZV78DescNumLotEmp=Value},v2c:function(){gx.fn.setControlValue("vDESCNUMLOTEMP",gx.O.AV78DescNumLotEmp,0)},c2v:function(){gx.O.AV78DescNumLotEmp=this.val()},val:function(){return gx.fn.getControlValue("vDESCNUMLOTEMP")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratoloteamentonumlote,isvalid:null,rgrid:[],fld:"CONTRATOLOTEAMENTONUMLOTE",gxz:"Z5276ContratoLoteamentoNumLote",gxold:"O5276ContratoLoteamentoNumLote",gxvar:"A5276ContratoLoteamentoNumLote",ucs:[],op:[37],ip:[37],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5276ContratoLoteamentoNumLote=Value},v2z:function(Value){gx.O.Z5276ContratoLoteamentoNumLote=Value},v2c:function(){gx.fn.setControlValue("CONTRATOLOTEAMENTONUMLOTE",gx.O.A5276ContratoLoteamentoNumLote,0)},c2v:function(){gx.O.A5276ContratoLoteamentoNumLote=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOLOTEAMENTONUMLOTE")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratoloteamentonumquadra,isvalid:null,rgrid:[],fld:"CONTRATOLOTEAMENTONUMQUADRA",gxz:"Z5277ContratoLoteamentoNumQuadra",gxold:"O5277ContratoLoteamentoNumQuadra",gxvar:"A5277ContratoLoteamentoNumQuadra",ucs:[],op:[39],ip:[15,151,37,31,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5277ContratoLoteamentoNumQuadra=Value},v2z:function(Value){gx.O.Z5277ContratoLoteamentoNumQuadra=Value},v2c:function(){gx.fn.setControlValue("CONTRATOLOTEAMENTONUMQUADRA",gx.O.A5277ContratoLoteamentoNumQuadra,0)},c2v:function(){gx.O.A5277ContratoLoteamentoNumQuadra=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOLOTEAMENTONUMQUADRA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratodtvenda,isvalid:null,rgrid:[],fld:"CONTRATODTVENDA",gxz:"Z5278ContratoDtVenda",gxold:"O5278ContratoDtVenda",gxvar:"A5278ContratoDtVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5278ContratoDtVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5278ContratoDtVenda=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTRATODTVENDA",gx.O.A5278ContratoDtVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5278ContratoDtVenda=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONTRATODTVENDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[50]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCVLRLOTEMP",gxz:"ZV79DescVlrLotEmp",gxold:"OV79DescVlrLotEmp",gxvar:"AV79DescVlrLotEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79DescVlrLotEmp=Value},v2z:function(Value){gx.O.ZV79DescVlrLotEmp=Value},v2c:function(){gx.fn.setControlValue("vDESCVLRLOTEMP",gx.O.AV79DescVlrLotEmp,0)},c2v:function(){gx.O.AV79DescVlrLotEmp=this.val()},val:function(){return gx.fn.getControlValue("vDESCVLRLOTEMP")},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratovalorloteimovel,isvalid:null,rgrid:[],fld:"CONTRATOVALORLOTEIMOVEL",gxz:"Z8505ContratoValorLoteImovel",gxold:"O8505ContratoValorLoteImovel",gxvar:"A8505ContratoValorLoteImovel",ucs:[],op:[52],ip:[52,39,37,31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8505ContratoValorLoteImovel=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8505ContratoValorLoteImovel=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CONTRATOVALORLOTEIMOVEL",gx.O.A8505ContratoValorLoteImovel,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8505ContratoValorLoteImovel=this.val()},val:function(){return gx.fn.getDecimalValue("CONTRATOVALORLOTEIMOVEL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[55]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratovalordesconto,isvalid:null,rgrid:[],fld:"CONTRATOVALORDESCONTO",gxz:"Z5280ContratoValorDesconto",gxold:"O5280ContratoValorDesconto",gxvar:"A5280ContratoValorDesconto",ucs:[],op:[62],ip:[62,57,52],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5280ContratoValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5280ContratoValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CONTRATOVALORDESCONTO",gx.O.A5280ContratoValorDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5280ContratoValorDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("CONTRATOVALORDESCONTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[60]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTRATOVALORTOTAL",gxz:"ZV56ContratoValorTotal",gxold:"OV56ContratoValorTotal",gxvar:"AV56ContratoValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56ContratoValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV56ContratoValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTRATOVALORTOTAL",gx.O.AV56ContratoValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV56ContratoValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTRATOVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[65]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratoqtdetotalparcelas,isvalid:null,rgrid:[],fld:"CONTRATOQTDETOTALPARCELAS",gxz:"Z8236ContratoQtdeTotalParcelas",gxold:"O8236ContratoQtdeTotalParcelas",gxvar:"A8236ContratoQtdeTotalParcelas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8236ContratoQtdeTotalParcelas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8236ContratoQtdeTotalParcelas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTRATOQTDETOTALPARCELAS",gx.O.A8236ContratoQtdeTotalParcelas,0)},c2v:function(){gx.O.A8236ContratoQtdeTotalParcelas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTRATOQTDETOTALPARCELAS",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[76]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratonomepritestemunha,isvalid:null,rgrid:[],fld:"CONTRATONOMEPRITESTEMUNHA",gxz:"Z5282ContratoNomePriTestemunha",gxold:"O5282ContratoNomePriTestemunha",gxvar:"A5282ContratoNomePriTestemunha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5282ContratoNomePriTestemunha=Value},v2z:function(Value){gx.O.Z5282ContratoNomePriTestemunha=Value},v2c:function(){gx.fn.setControlValue("CONTRATONOMEPRITESTEMUNHA",gx.O.A5282ContratoNomePriTestemunha,0)},c2v:function(){gx.O.A5282ContratoNomePriTestemunha=this.val()},val:function(){return gx.fn.getControlValue("CONTRATONOMEPRITESTEMUNHA")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratocpfpritestemunha,isvalid:null,rgrid:[],fld:"CONTRATOCPFPRITESTEMUNHA",gxz:"Z5283ContratoCpfPriTestemunha",gxold:"O5283ContratoCpfPriTestemunha",gxvar:"A5283ContratoCpfPriTestemunha",ucs:[],op:[],ip:[83],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5283ContratoCpfPriTestemunha=Value},v2z:function(Value){gx.O.Z5283ContratoCpfPriTestemunha=Value},v2c:function(){gx.fn.setControlValue("CONTRATOCPFPRITESTEMUNHA",gx.O.A5283ContratoCpfPriTestemunha,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5283ContratoCpfPriTestemunha=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOCPFPRITESTEMUNHA")},nac:gx.falseFn};
   this.declareDomainHdlr( 83 , function() {
   });
   GXValidFnc[86]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratonomesegtestemunha,isvalid:null,rgrid:[],fld:"CONTRATONOMESEGTESTEMUNHA",gxz:"Z5284ContratoNomeSegTestemunha",gxold:"O5284ContratoNomeSegTestemunha",gxvar:"A5284ContratoNomeSegTestemunha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5284ContratoNomeSegTestemunha=Value},v2z:function(Value){gx.O.Z5284ContratoNomeSegTestemunha=Value},v2c:function(){gx.fn.setControlValue("CONTRATONOMESEGTESTEMUNHA",gx.O.A5284ContratoNomeSegTestemunha,0)},c2v:function(){gx.O.A5284ContratoNomeSegTestemunha=this.val()},val:function(){return gx.fn.getControlValue("CONTRATONOMESEGTESTEMUNHA")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratocpfsegtestemunha,isvalid:null,rgrid:[],fld:"CONTRATOCPFSEGTESTEMUNHA",gxz:"Z5285ContratoCpfSegTestemunha",gxold:"O5285ContratoCpfSegTestemunha",gxvar:"A5285ContratoCpfSegTestemunha",ucs:[],op:[],ip:[93],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5285ContratoCpfSegTestemunha=Value},v2z:function(Value){gx.O.Z5285ContratoCpfSegTestemunha=Value},v2c:function(){gx.fn.setControlValue("CONTRATOCPFSEGTESTEMUNHA",gx.O.A5285ContratoCpfSegTestemunha,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5285ContratoCpfSegTestemunha=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOCPFSEGTESTEMUNHA")},nac:gx.falseFn};
   this.declareDomainHdlr( 93 , function() {
   });
   GXValidFnc[94]={fld:"TAB2",grid:0};
   GXValidFnc[97]={fld:"TABLE1",grid:0};
   GXValidFnc[100]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[102]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPARCELAS",gxz:"ZV47QtdeParcelas",gxold:"OV47QtdeParcelas",gxvar:"AV47QtdeParcelas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47QtdeParcelas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47QtdeParcelas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPARCELAS",gx.O.AV47QtdeParcelas,0)},c2v:function(){gx.O.AV47QtdeParcelas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPARCELAS",'.')},nac:gx.falseFn};
   GXValidFnc[105]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPARCQUITADA",gxz:"ZV48QtdeParcQuitada",gxold:"OV48QtdeParcQuitada",gxvar:"AV48QtdeParcQuitada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48QtdeParcQuitada=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48QtdeParcQuitada=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPARCQUITADA",gx.O.AV48QtdeParcQuitada,0)},c2v:function(){gx.O.AV48QtdeParcQuitada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPARCQUITADA",'.')},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRPARCQUITADA",gxz:"ZV49VlrParcQuitada",gxold:"OV49VlrParcQuitada",gxvar:"AV49VlrParcQuitada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49VlrParcQuitada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV49VlrParcQuitada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRPARCQUITADA",gx.O.AV49VlrParcQuitada,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV49VlrParcQuitada=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRPARCQUITADA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 112 , function() {
   });
   GXValidFnc[118]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPARCABERTA",gxz:"ZV50QtdeParcAberta",gxold:"OV50QtdeParcAberta",gxvar:"AV50QtdeParcAberta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50QtdeParcAberta=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50QtdeParcAberta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPARCABERTA",gx.O.AV50QtdeParcAberta,0)},c2v:function(){gx.O.AV50QtdeParcAberta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPARCABERTA",'.')},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRPARCABERTA",gxz:"ZV51VlrParcAberta",gxold:"OV51VlrParcAberta",gxvar:"AV51VlrParcAberta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51VlrParcAberta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV51VlrParcAberta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRPARCABERTA",gx.O.AV51VlrParcAberta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV51VlrParcAberta=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRPARCABERTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 125 , function() {
   });
   GXValidFnc[126]={fld:"TAB3",grid:0};
   GXValidFnc[129]={fld:"TABLE4",grid:0};
   GXValidFnc[132]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Contratoobservacao,isvalid:null,rgrid:[],fld:"CONTRATOOBSERVACAO",gxz:"Z10761ContratoObservacao",gxold:"O10761ContratoObservacao",gxvar:"A10761ContratoObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10761ContratoObservacao=Value},v2z:function(Value){gx.O.Z10761ContratoObservacao=Value},v2c:function(){gx.fn.setControlValue("CONTRATOOBSERVACAO",gx.O.A10761ContratoObservacao,0)},c2v:function(){gx.O.A10761ContratoObservacao=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[137]={fld:"TABLE7",grid:0};
   GXValidFnc[140]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[142]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOUSUARIOALT",gxz:"Z5286ContratoUsuarioAlt",gxold:"O5286ContratoUsuarioAlt",gxvar:"A5286ContratoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5286ContratoUsuarioAlt=Value},v2z:function(Value){gx.O.Z5286ContratoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONTRATOUSUARIOALT",gx.O.A5286ContratoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5286ContratoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONTRATOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 142 , function() {
   });
   GXValidFnc[144]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATODATAHORAALT",gxz:"Z5287ContratoDataHoraAlt",gxold:"O5287ContratoDataHoraAlt",gxvar:"A5287ContratoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5287ContratoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5287ContratoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTRATODATAHORAALT",gx.O.A5287ContratoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5287ContratoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONTRATODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 144 , function() {
   });
   GXValidFnc[151]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Loteamentoempresaid,isvalid:null,rgrid:[],fld:"vLOTEAMENTOEMPRESAID",gxz:"ZV22LoteamentoEmpresaId",gxold:"OV22LoteamentoEmpresaId",gxvar:"AV22LoteamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22LoteamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV22LoteamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOEMPRESAID",gx.O.AV22LoteamentoEmpresaId,0)},c2v:function(){gx.O.AV22LoteamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[154]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORAUX",gxz:"ZV27ValorAux",gxold:"OV27ValorAux",gxvar:"AV27ValorAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ValorAux=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV27ValorAux=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORAUX",gx.O.AV27ValorAux,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27ValorAux=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORAUX",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 154 , function() {
   });
   GXValidFnc[155]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[156]={fld:"JS", format:2,grid:0};
   GXValidFnc[157]={fld:"JSABR", format:2,grid:0};
   GXValidFnc[159]={fld:"BTNHELP",grid:0};
   GXValidFnc[161]={fld:"PROMPT_5268",grid:460};
   GXValidFnc[162]={fld:"PROMPT_5273",grid:460};
   GXValidFnc[163]={fld:"PROMPT_5273_5276_5277",grid:460};
   this.A5289ContratoNumero = 0 ;
   this.Z5289ContratoNumero = 0 ;
   this.O5289ContratoNumero = 0 ;
   this.A5268ContratoClienteId = 0 ;
   this.Z5268ContratoClienteId = 0 ;
   this.O5268ContratoClienteId = 0 ;
   this.A5269ContratoClienteFantasia = "" ;
   this.Z5269ContratoClienteFantasia = "" ;
   this.O5269ContratoClienteFantasia = "" ;
   this.A10695ContratoSnZerado = "" ;
   this.Z10695ContratoSnZerado = "" ;
   this.O10695ContratoSnZerado = "" ;
   this.AV77DescLotEmp = "" ;
   this.ZV77DescLotEmp = "" ;
   this.OV77DescLotEmp = "" ;
   this.A5273ContratoLoteamentoId = 0 ;
   this.Z5273ContratoLoteamentoId = 0 ;
   this.O5273ContratoLoteamentoId = 0 ;
   this.A5274ContratoLoteamentoNome = "" ;
   this.Z5274ContratoLoteamentoNome = "" ;
   this.O5274ContratoLoteamentoNome = "" ;
   this.AV78DescNumLotEmp = "" ;
   this.ZV78DescNumLotEmp = "" ;
   this.OV78DescNumLotEmp = "" ;
   this.A5276ContratoLoteamentoNumLote = "" ;
   this.Z5276ContratoLoteamentoNumLote = "" ;
   this.O5276ContratoLoteamentoNumLote = "" ;
   this.A5277ContratoLoteamentoNumQuadra = "" ;
   this.Z5277ContratoLoteamentoNumQuadra = "" ;
   this.O5277ContratoLoteamentoNumQuadra = "" ;
   this.A5278ContratoDtVenda = gx.date.nullDate() ;
   this.Z5278ContratoDtVenda = gx.date.nullDate() ;
   this.O5278ContratoDtVenda = gx.date.nullDate() ;
   this.AV79DescVlrLotEmp = "" ;
   this.ZV79DescVlrLotEmp = "" ;
   this.OV79DescVlrLotEmp = "" ;
   this.A8505ContratoValorLoteImovel = 0 ;
   this.Z8505ContratoValorLoteImovel = 0 ;
   this.O8505ContratoValorLoteImovel = 0 ;
   this.A5280ContratoValorDesconto = 0 ;
   this.Z5280ContratoValorDesconto = 0 ;
   this.O5280ContratoValorDesconto = 0 ;
   this.AV56ContratoValorTotal = 0 ;
   this.ZV56ContratoValorTotal = 0 ;
   this.OV56ContratoValorTotal = 0 ;
   this.A8236ContratoQtdeTotalParcelas = 0 ;
   this.Z8236ContratoQtdeTotalParcelas = 0 ;
   this.O8236ContratoQtdeTotalParcelas = 0 ;
   this.A5282ContratoNomePriTestemunha = "" ;
   this.Z5282ContratoNomePriTestemunha = "" ;
   this.O5282ContratoNomePriTestemunha = "" ;
   this.A5283ContratoCpfPriTestemunha = "" ;
   this.Z5283ContratoCpfPriTestemunha = "" ;
   this.O5283ContratoCpfPriTestemunha = "" ;
   this.A5284ContratoNomeSegTestemunha = "" ;
   this.Z5284ContratoNomeSegTestemunha = "" ;
   this.O5284ContratoNomeSegTestemunha = "" ;
   this.A5285ContratoCpfSegTestemunha = "" ;
   this.Z5285ContratoCpfSegTestemunha = "" ;
   this.O5285ContratoCpfSegTestemunha = "" ;
   this.AV47QtdeParcelas = 0 ;
   this.ZV47QtdeParcelas = 0 ;
   this.OV47QtdeParcelas = 0 ;
   this.AV48QtdeParcQuitada = 0 ;
   this.ZV48QtdeParcQuitada = 0 ;
   this.OV48QtdeParcQuitada = 0 ;
   this.AV49VlrParcQuitada = 0 ;
   this.ZV49VlrParcQuitada = 0 ;
   this.OV49VlrParcQuitada = 0 ;
   this.AV50QtdeParcAberta = 0 ;
   this.ZV50QtdeParcAberta = 0 ;
   this.OV50QtdeParcAberta = 0 ;
   this.AV51VlrParcAberta = 0 ;
   this.ZV51VlrParcAberta = 0 ;
   this.OV51VlrParcAberta = 0 ;
   this.A10761ContratoObservacao = "" ;
   this.Z10761ContratoObservacao = "" ;
   this.O10761ContratoObservacao = "" ;
   this.A5286ContratoUsuarioAlt = "" ;
   this.Z5286ContratoUsuarioAlt = "" ;
   this.O5286ContratoUsuarioAlt = "" ;
   this.A5287ContratoDataHoraAlt = gx.date.nullDate() ;
   this.Z5287ContratoDataHoraAlt = gx.date.nullDate() ;
   this.O5287ContratoDataHoraAlt = gx.date.nullDate() ;
   this.AV22LoteamentoEmpresaId = "" ;
   this.ZV22LoteamentoEmpresaId = "" ;
   this.OV22LoteamentoEmpresaId = "" ;
   this.AV27ValorAux = 0 ;
   this.ZV27ValorAux = 0 ;
   this.OV27ValorAux = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV98Pgmname = "" ;
   this.AV99Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22LoteamentoEmpresaId = "" ;
   this.AV21PessoaEmpresaId = "" ;
   this.AV57SnConsisteSituacao = "" ;
   this.AV76TPDESCRICAO = "" ;
   this.AV77DescLotEmp = "" ;
   this.AV78DescNumLotEmp = "" ;
   this.AV79DescVlrLotEmp = "" ;
   this.AV80MsgNaoDisp = "" ;
   this.AV81MsgReservado = "" ;
   this.AV82MsgValor = "" ;
   this.AV83MsgLote = "" ;
   this.AV84MsgQuadra = "" ;
   this.AV92MsgNaoCadastrado = "" ;
   this.AV27ValorAux = 0 ;
   this.AV23Entrada = [ ] ;
   this.AV24Saida = [ ] ;
   this.AV54Entrada2 = [ ] ;
   this.AV55Saida2 = [ ] ;
   this.AV25Sim = "" ;
   this.AV26Nao = "" ;
   this.AV29snMostraModal = "" ;
   this.AV31ContratoClienteId = 0 ;
   this.AV35ContratoClienteFantasia = "" ;
   this.AV32ContratoLoteamentoId = 0 ;
   this.AV33ContratoLoteamentoNumLote = "" ;
   this.AV34ContratoLoteamentoNumQuadra = "" ;
   this.AV52NumeroContrato = 0 ;
   this.AV28ValorStr = "" ;
   this.AV58ContratoQtdeTotalParcelas = 0 ;
   this.AV95SnZerado = "" ;
   this.AV59ParametroSistemaValor = "" ;
   this.AV60DiaLimiteParcMes = 0 ;
   this.AV61MesUltMensalidade = 0 ;
   this.AV62AnoUltMensalidade = 0 ;
   this.AV63DataAtual = gx.date.nullDate() ;
   this.AV64DiaAtual = 0 ;
   this.AV65MesAtual = 0 ;
   this.AV66AnoAtual = 0 ;
   this.AV67QtParcelas = 0 ;
   this.AV94Valor = 0 ;
   this.AV39SnAVenda = "" ;
   this.AV40SnReservado = "" ;
   this.AV41SnVendido = "" ;
   this.AV38ClienteReserva = 0 ;
   this.AV9Erro = 0 ;
   this.AV89Erro1 = 0 ;
   this.AV18ContratoEmpresaId = "" ;
   this.AV19ContratoNumero = 0 ;
   this.A5288ContratoEmpresaId = "" ;
   this.A5289ContratoNumero = 0 ;
   this.AV56ContratoValorTotal = 0 ;
   this.A5267ContratoClienteEmpId = "" ;
   this.A5272ContratoLoteamentoEmpId = "" ;
   this.A5276ContratoLoteamentoNumLote = "" ;
   this.A5277ContratoLoteamentoNumQuadra = "" ;
   this.AV44ret = 0 ;
   this.AV93SnNaoCadastrado = "" ;
   this.AV96ContratoSnZerado = "" ;
   this.AV20SnAlterou = "" ;
   this.Gx_BScreen = 0 ;
   this.A5281ContratoValorTotal = 0 ;
   this.A5268ContratoClienteId = 0 ;
   this.A5269ContratoClienteFantasia = "" ;
   this.A5270ContratoClienteRazaoSocial = "" ;
   this.A5271ContratoClienteSnCliente = "" ;
   this.A9612ContratoClienteSnFornecedor = "" ;
   this.A5273ContratoLoteamentoId = 0 ;
   this.A5274ContratoLoteamentoNome = "" ;
   this.A5275ContratoLoteamentoIdentLotes = "" ;
   this.A5278ContratoDtVenda = gx.date.nullDate() ;
   this.A5280ContratoValorDesconto = 0 ;
   this.A5282ContratoNomePriTestemunha = "" ;
   this.A5283ContratoCpfPriTestemunha = "" ;
   this.A5284ContratoNomeSegTestemunha = "" ;
   this.A5285ContratoCpfSegTestemunha = "" ;
   this.A8236ContratoQtdeTotalParcelas = 0 ;
   this.A8505ContratoValorLoteImovel = 0 ;
   this.A10695ContratoSnZerado = "" ;
   this.A10760ContratoSnCancelado = "" ;
   this.A10761ContratoObservacao = "" ;
   this.A5286ContratoUsuarioAlt = "" ;
   this.A5287ContratoDataHoraAlt = gx.date.nullDate() ;
   this.AV90Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e148g460_client": ["PROMPT_5273.GXPROMPT", true] ,"e128g2_client": ["'FECHAR'", true] ,"e138g2_client": ["AFTER TRN", true] ,"e158g460_client": ["ENTER", true] ,"e168g460_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV19ContratoNumero',fld:'vCONTRATONUMERO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'AV22LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5273ContratoLoteamentoId',fld:'CONTRATOLOTEAMENTOID'},{av:'A5276ContratoLoteamentoNumLote',fld:'CONTRATOLOTEAMENTONUMLOTE'},{av:'A5277ContratoLoteamentoNumQuadra',fld:'CONTRATOLOTEAMENTONUMQUADRA'},{av:'Gx_mode',fld:'vMODE'},{av:'A5268ContratoClienteId',fld:'CONTRATOCLIENTEID'},{av:'A5269ContratoClienteFantasia',fld:'CONTRATOCLIENTEFANTASIA'},{av:'A5289ContratoNumero',fld:'CONTRATONUMERO'},{av:'A5281ContratoValorTotal',fld:'CONTRATOVALORTOTAL'},{av:'A8236ContratoQtdeTotalParcelas',fld:'CONTRATOQTDETOTALPARCELAS'},{av:'A10695ContratoSnZerado',fld:'CONTRATOSNZERADO'},{av:'AV18ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'},{av:'AV19ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'Gx_mode',fld:'vMODE'},{av:'AV19ContratoNumero',fld:'vCONTRATONUMERO'},{av:'AV18ContratoEmpresaId',fld:'vCONTRATOEMPRESAID'}]];
   this.setPrompt("PROMPT_5268", [21]);
   this.setPrompt("PROMPT_5273", [31]);
   this.setPrompt("PROMPT_5273_5276_5277", [31,37,39]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A5281ContratoValorTotal", "CONTRATOVALORTOTAL", 0, "decimal");
   this.setVCMap("AV19ContratoNumero", "vCONTRATONUMERO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5288ContratoEmpresaId", "CONTRATOEMPRESAID", 0, "char");
   this.setVCMap("AV21PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("A5267ContratoClienteEmpId", "CONTRATOCLIENTEEMPID", 0, "char");
   this.setVCMap("A5272ContratoLoteamentoEmpId", "CONTRATOLOTEAMENTOEMPID", 0, "char");
   this.setVCMap("A5271ContratoClienteSnCliente", "CONTRATOCLIENTESNCLIENTE", 0, "char");
   this.setVCMap("A10760ContratoSnCancelado", "CONTRATOSNCANCELADO", 0, "char");
   this.setVCMap("AV76TPDESCRICAO", "vTPDESCRICAO", 0, "char");
   this.setVCMap("A5275ContratoLoteamentoIdentLotes", "CONTRATOLOTEAMENTOIDENTLOTES", 0, "char");
   this.setVCMap("AV57SnConsisteSituacao", "vSNCONSISTESITUACAO", 0, "char");
   this.setVCMap("AV93SnNaoCadastrado", "vSNNAOCADASTRADO", 0, "char");
   this.setVCMap("AV40SnReservado", "vSNRESERVADO", 0, "char");
   this.setVCMap("AV38ClienteReserva", "vCLIENTERESERVA", 0, "int");
   this.setVCMap("AV39SnAVenda", "vSNAVENDA", 0, "char");
   this.setVCMap("AV9Erro", "vERRO", 0, "int");
   this.setVCMap("AV89Erro1", "vERRO1", 0, "int");
   this.setVCMap("AV44ret", "vRET", 0, "int");
   this.setVCMap("AV96ContratoSnZerado", "vCONTRATOSNZERADO", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV83MsgLote", "vMSGLOTE", 0, "char");
   this.setVCMap("AV84MsgQuadra", "vMSGQUADRA", 0, "char");
   this.setVCMap("AV41SnVendido", "vSNVENDIDO", 0, "char");
   this.setVCMap("AV92MsgNaoCadastrado", "vMSGNAOCADASTRADO", 0, "char");
   this.setVCMap("AV81MsgReservado", "vMSGRESERVADO", 0, "char");
   this.setVCMap("AV80MsgNaoDisp", "vMSGNAODISP", 0, "char");
   this.setVCMap("AV82MsgValor", "vMSGVALOR", 0, "char");
   this.setVCMap("A5270ContratoClienteRazaoSocial", "CONTRATOCLIENTERAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A9612ContratoClienteSnFornecedor", "CONTRATOCLIENTESNFORNECEDOR", 0, "char");
   this.setVCMap("AV99Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV98Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV25Sim", "vSIM", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV18ContratoEmpresaId", "vCONTRATOEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 460 ]= ["O5273ContratoLoteamentoId","O10761ContratoObservacao","O5285ContratoCpfSegTestemunha","O5284ContratoNomeSegTestemunha","O5283ContratoCpfPriTestemunha","O5282ContratoNomePriTestemunha","O5278ContratoDtVenda","O5277ContratoLoteamentoNumQuadra","O5276ContratoLoteamentoNumLote","O10695ContratoSnZerado","O5268ContratoClienteId"] ;
});
gx.setParentObj(new tcontrato());
