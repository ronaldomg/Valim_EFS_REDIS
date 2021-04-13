/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:38:10.60
*/
gx.evt.autoSkip = false;
gx.define('hregistrartrocadevnovoitem', false, function () {
   this.ServerClass =  "hregistrartrocadevnovoitem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV75TrocaDevolucaoEmpresaId=gx.fn.getControlValue("vTROCADEVOLUCAOEMPRESAID") ;
      this.AV76TrocaDevolucaoTipo=gx.fn.getControlValue("vTROCADEVOLUCAOTIPO") ;
      this.AV95TrocaDevolucaoNumero=gx.fn.getIntegerValue("vTROCADEVOLUCAONUMERO",'.') ;
      this.AV19ModeTela=gx.fn.getControlValue("vMODETELA") ;
      this.AV190ValorSaldoParm=gx.fn.getDecimalValue("vVALORSALDOPARM",'.',',') ;
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Idauxiliar=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vIDAUXILIAR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vLOTEPRODUTOCOMBINACAOPARM","Visible", 0 );
      gx.fn.setCtrlProperty("vSNVENDA","Visible", 0 );
      gx.fn.setCtrlProperty("vGRUPOPRODUTOID","Visible", 0 );
      gx.fn.setCtrlProperty("vSUBGRUPOPRODUTOID","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOCODIGOID","Visible", 0 );
      gx.fn.setCtrlProperty("vTODAY","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOCATEGORIA","Visible", 0 );
      gx.fn.setCtrlProperty("vPRECONULO","Visible", 0 );
      gx.fn.setCtrlProperty("vINTAUXIN","Visible", 0 );
      gx.fn.setCtrlProperty("vPESSOAEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vTELA","Visible", 0 );
      gx.fn.setCtrlProperty("vSNFROMPESSOA","Visible", 0 );
      gx.fn.setCtrlProperty("vENTRADADEVOLVIDAID","Visible", 0 );
      gx.fn.setCtrlProperty("vSAIDADEVOLVIDAID","Visible", 0 );
      gx.fn.setCtrlProperty("vCOMBOOUEDIT1","Visible", 0 );
      gx.fn.setCtrlProperty("vCOMBOOUEDIT2","Visible", 0 );
      gx.fn.setCtrlProperty("vCOMBOOUEDIT3","Visible", 0 );
      gx.fn.setCtrlProperty("vCOMBOOUEDIT4","Visible", 0 );
      gx.fn.setCtrlProperty("vCOMBOOUEDIT5","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOCASASDECIMAIS","Visible", 0 );
      gx.fn.setCtrlProperty("vFILIALEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vSNLOTEUNICO","Visible", 0 );
      gx.fn.setCtrlProperty("vQTDECAR","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOEMBALAGEM","Visible", 0 );
      gx.fn.setCtrlProperty("vIDAUXILIAR","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOTIPOVENDABALANCA","Visible", 0 );
      gx.fn.setCtrlProperty("vPRECOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vPRECOANTERIOR","Visible", 0 );
      gx.fn.setCtrlProperty("vDESCPRECOANTERIOR","Visible", 0 );
      gx.fn.setCtrlProperty("vSNPERMITIDO","Visible", 0 );
      gx.fn.setCtrlProperty("vSNTELAPERMISSAO","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOUNIDADEVENDAEMPID","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOUNIDADEVENDAID","Visible", 0 );
      gx.fn.setCtrlProperty("vSNPERMISSAOITEM","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOSNCONTROLAVENC","Visible", false );
      gx.fn.setCtrlProperty("vTIPOCAMPO","Visible", 0 );
   };
   this.s162_client=function()
   {
      if ( this.AV87TpIdentificacaoProd == "R" )
      {
         gx.fn.usrSetFocus("vPRODUTOREFERENCIA") ;
      }
      else if ( this.AV87TpIdentificacaoProd == "B" )
      {
         gx.fn.usrSetFocus("vPRODUTOCODIGOBARRAS") ;
      }
      else
      {
         gx.fn.usrSetFocus("vPRODUTOID") ;
      }
      this.AV42Tela = gx.num.trunc( 2 ,0) ;
   };
   this.s242_client=function()
   {
      this.AV182Quantidade0 = gx.num.trunc( 0 ,0) ;
      this.AV183Quantidade1 =  0  ;
      this.AV184Quantidade2 =  0  ;
      this.AV185Quantidade3 =  0  ;
      this.AV41Valor =  0  ;
      this.AV13ProdutoId = gx.num.trunc( 0 ,0) ;
      this.AV17ProdutoDescricaoResumida =  ""  ;
      this.AV88ProdutoReferencia =  ""  ;
      this.AV194ProdutoCodigoBarras = gx.num.trunc( 0 ,0) ;
      gx.fn.setCtrlProperty("TABLOTE","Visible", 0 );
      gx.fn.setCtrlProperty("TBLOTEVENC","Visible", false );
      this.AV196LoteMedicamento =  ""  ;
      this.AV93LoteProdutoCombinacao =  ""  ;
      this.AV29ValorAtributoCombo1 = gx.num.trunc( 0 ,0) ;
      this.AV31ValorAtributoCombo2 = gx.num.trunc( 0 ,0) ;
      this.AV33ValorAtributoCombo3 = gx.num.trunc( 0 ,0) ;
      this.AV35ValorAtributoCombo4 = gx.num.trunc( 0 ,0) ;
      this.AV37ValorAtributoCombo5 = gx.num.trunc( 0 ,0) ;
      this.AV28ValorAtributo1 = gx.num.trunc( 0 ,0) ;
      this.AV30ValorAtributo2 = gx.num.trunc( 0 ,0) ;
      this.AV32ValorAtributo3 = gx.num.trunc( 0 ,0) ;
      this.AV34ValorAtributo4 = gx.num.trunc( 0 ,0) ;
      this.AV36ValorAtributo5 = gx.num.trunc( 0 ,0) ;
   };
   this.e1211p2_client=function()
   {
      this.executeServerEvent("'FECHARMODAL'", true, null, false, false);
   };
   this.e1311p2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1511p2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e1711p2_client=function()
   {
      this.executeServerEvent("'CONSULTAPRODUTO'", true, null, false, false);
   };
   this.e1811p2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,17,19,21,22,25,27,28,30,32,34,36,39,41,42,54,57,60,63,65,66,67,69,72,74,75,76,84,87,89,92,94,96,98,100,103,104,106,107,109,110,112,113,115,116,117,120,123,125,126,127,128,131,133,141,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182];
   this.GXLastCtrlId =182;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TABLE13",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV99FilialId",gxold:"OV99FilialId",gxvar:"AV99FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV99FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV99FilialId,0)},c2v:function(){gx.O.AV99FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV146FilialNome",gxold:"OV146FilialNome",gxvar:"AV146FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV146FilialNome=Value},v2z:function(Value){gx.O.ZV146FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV146FilialNome,0)},c2v:function(){gx.O.AV146FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTCPF1", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV22PessoaId",gxold:"OV22PessoaId",gxvar:"AV22PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV22PessoaId,0)},c2v:function(){gx.O.AV22PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV49PessoaFantasia",gxold:"OV49PessoaFantasia",gxvar:"AV49PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49PessoaFantasia=Value},v2z:function(Value){gx.O.ZV49PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV49PessoaFantasia,0)},c2v:function(){gx.O.AV49PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORID",gxz:"ZV118VendedorId",gxold:"OV118VendedorId",gxvar:"AV118VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV118VendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORID",gx.O.AV118VendedorId,0)},c2v:function(){gx.O.AV118VendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV119VendedorNOme",gxold:"OV119VendedorNOme",gxvar:"AV119VendedorNOme",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119VendedorNOme=Value},v2z:function(Value){gx.O.ZV119VendedorNOme=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV119VendedorNOme,0)},c2v:function(){gx.O.AV119VendedorNOme=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREFERENCIA",gxz:"ZV147DataReferencia",gxold:"OV147DataReferencia",gxvar:"AV147DataReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV147DataReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV147DataReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREFERENCIA",gx.O.AV147DataReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV147DataReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREFERENCIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={fld:"TXTSALDO", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"decimal",len:12,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ.ZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORSALDO",gxz:"ZV189ValorSaldo",gxold:"OV189ValorSaldo",gxvar:"AV189ValorSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV189ValorSaldo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV189ValorSaldo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORSALDO",gx.O.AV189ValorSaldo,2,',')},c2v:function(){gx.O.AV189ValorSaldo=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORSALDO",'.',',')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoid,isvalid:null,rgrid:[],fld:"vPRECOID",gxz:"ZV148PrecoId",gxold:"OV148PrecoId",gxvar:"AV148PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV148PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV148PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV148PrecoId,0)},c2v:function(){gx.O.AV148PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV149PrecoDescricao",gxold:"OV149PrecoDescricao",gxvar:"AV149PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV149PrecoDescricao=Value},v2z:function(Value){gx.O.ZV149PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV149PrecoDescricao,0)},c2v:function(){gx.O.AV149PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE2",grid:0};
   GXValidFnc[57]={fld:"TABLE10",grid:0};
   GXValidFnc[60]={fld:"TBPROD",grid:0};
   GXValidFnc[63]={fld:"TXTPROD", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:14,dec:0,sign:false,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOBARRAS",gxz:"ZV194ProdutoCodigoBarras",gxold:"OV194ProdutoCodigoBarras",gxvar:"AV194ProdutoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV194ProdutoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV194ProdutoCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOBARRAS",gx.O.AV194ProdutoCodigoBarras,0)},c2v:function(){gx.O.AV194ProdutoCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV88ProdutoReferencia",gxold:"OV88ProdutoReferencia",gxvar:"AV88ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV88ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV88ProdutoReferencia,0)},c2v:function(){gx.O.AV88ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"BTNPROMPT1",grid:0};
   GXValidFnc[69]={fld:"TABLE42",grid:0};
   GXValidFnc[72]={fld:"TXT9", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV13ProdutoId",gxold:"OV13ProdutoId",gxvar:"AV13ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV13ProdutoId,0)},c2v:function(){gx.O.AV13ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"BTNPROMPT",grid:0};
   GXValidFnc[76]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV17ProdutoDescricaoResumida",gxold:"OV17ProdutoDescricaoResumida",gxvar:"AV17ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV17ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV17ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV17ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TABLE6",grid:0};
   GXValidFnc[87]={fld:"LOTE", format:0,grid:0};
   GXValidFnc[89]={fld:"TABLOTE",grid:0};
   GXValidFnc[92]={fld:"LOTE1", format:0,grid:0};
   GXValidFnc[94]={fld:"LOTE2", format:0,grid:0};
   GXValidFnc[96]={fld:"LOTE3", format:0,grid:0};
   GXValidFnc[98]={fld:"LOTE4", format:0,grid:0};
   GXValidFnc[100]={fld:"LOTE5", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO1",gxz:"ZV28ValorAtributo1",gxold:"OV28ValorAtributo1",gxvar:"AV28ValorAtributo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ValorAtributo1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ValorAtributo1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO1",gx.O.AV28ValorAtributo1,0)},c2v:function(){gx.O.AV28ValorAtributo1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO1",'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO1",gxz:"ZV29ValorAtributoCombo1",gxold:"OV29ValorAtributoCombo1",gxvar:"AV29ValorAtributoCombo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29ValorAtributoCombo1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ValorAtributoCombo1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vVALORATRIBUTOCOMBO1",gx.O.AV29ValorAtributoCombo1)},c2v:function(){gx.O.AV29ValorAtributoCombo1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO1",'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO2",gxz:"ZV30ValorAtributo2",gxold:"OV30ValorAtributo2",gxvar:"AV30ValorAtributo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ValorAtributo2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ValorAtributo2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO2",gx.O.AV30ValorAtributo2,0)},c2v:function(){gx.O.AV30ValorAtributo2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO2",'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO2",gxz:"ZV31ValorAtributoCombo2",gxold:"OV31ValorAtributoCombo2",gxvar:"AV31ValorAtributoCombo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV31ValorAtributoCombo2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ValorAtributoCombo2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vVALORATRIBUTOCOMBO2",gx.O.AV31ValorAtributoCombo2)},c2v:function(){gx.O.AV31ValorAtributoCombo2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO2",'.')},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO3",gxz:"ZV32ValorAtributo3",gxold:"OV32ValorAtributo3",gxvar:"AV32ValorAtributo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ValorAtributo3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32ValorAtributo3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO3",gx.O.AV32ValorAtributo3,0)},c2v:function(){gx.O.AV32ValorAtributo3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO3",'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO3",gxz:"ZV33ValorAtributoCombo3",gxold:"OV33ValorAtributoCombo3",gxvar:"AV33ValorAtributoCombo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV33ValorAtributoCombo3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33ValorAtributoCombo3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vVALORATRIBUTOCOMBO3",gx.O.AV33ValorAtributoCombo3)},c2v:function(){gx.O.AV33ValorAtributoCombo3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO3",'.')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO4",gxz:"ZV34ValorAtributo4",gxold:"OV34ValorAtributo4",gxvar:"AV34ValorAtributo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ValorAtributo4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34ValorAtributo4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO4",gx.O.AV34ValorAtributo4,0)},c2v:function(){gx.O.AV34ValorAtributo4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO4",'.')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO4",gxz:"ZV35ValorAtributoCombo4",gxold:"OV35ValorAtributoCombo4",gxvar:"AV35ValorAtributoCombo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35ValorAtributoCombo4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35ValorAtributoCombo4=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vVALORATRIBUTOCOMBO4",gx.O.AV35ValorAtributoCombo4)},c2v:function(){gx.O.AV35ValorAtributoCombo4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO4",'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTO5",gxz:"ZV36ValorAtributo5",gxold:"OV36ValorAtributo5",gxvar:"AV36ValorAtributo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ValorAtributo5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36ValorAtributo5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVALORATRIBUTO5",gx.O.AV36ValorAtributo5,0)},c2v:function(){gx.O.AV36ValorAtributo5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTO5",'.')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATRIBUTOCOMBO5",gxz:"ZV37ValorAtributoCombo5",gxold:"OV37ValorAtributoCombo5",gxvar:"AV37ValorAtributoCombo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV37ValorAtributoCombo5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37ValorAtributoCombo5=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vVALORATRIBUTOCOMBO5",gx.O.AV37ValorAtributoCombo5)},c2v:function(){gx.O.AV37ValorAtributoCombo5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVALORATRIBUTOCOMBO5",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TBLOTEVENC",grid:0};
   GXValidFnc[120]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEMEDICAMENTO",gxz:"ZV196LoteMedicamento",gxold:"OV196LoteMedicamento",gxvar:"AV196LoteMedicamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV196LoteMedicamento=Value},v2z:function(Value){gx.O.ZV196LoteMedicamento=Value},v2c:function(){gx.fn.setComboBoxValue("vLOTEMEDICAMENTO",gx.O.AV196LoteMedicamento)},c2v:function(){gx.O.AV196LoteMedicamento=this.val()},val:function(){return gx.fn.getControlValue("vLOTEMEDICAMENTO")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZZ,ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADE0",gxz:"ZV182Quantidade0",gxold:"OV182Quantidade0",gxvar:"AV182Quantidade0",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV182Quantidade0=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV182Quantidade0=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQUANTIDADE0",gx.O.AV182Quantidade0,0)},c2v:function(){gx.O.AV182Quantidade0=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQUANTIDADE0",'.')},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"decimal",len:18,dec:1,sign:false,pic:"Z,ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADE1",gxz:"ZV183Quantidade1",gxold:"OV183Quantidade1",gxvar:"AV183Quantidade1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV183Quantidade1=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV183Quantidade1=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vQUANTIDADE1",gx.O.AV183Quantidade1,1,',')},c2v:function(){gx.O.AV183Quantidade1=this.val()},val:function(){return gx.fn.getDecimalValue("vQUANTIDADE1",'.',',')},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADE2",gxz:"ZV184Quantidade2",gxold:"OV184Quantidade2",gxvar:"AV184Quantidade2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV184Quantidade2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV184Quantidade2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vQUANTIDADE2",gx.O.AV184Quantidade2,2,',')},c2v:function(){gx.O.AV184Quantidade2=this.val()},val:function(){return gx.fn.getDecimalValue("vQUANTIDADE2",'.',',')},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"decimal",len:18,dec:3,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZZ,ZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADE3",gxz:"ZV185Quantidade3",gxold:"OV185Quantidade3",gxvar:"AV185Quantidade3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV185Quantidade3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV185Quantidade3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vQUANTIDADE3",gx.O.AV185Quantidade3,3,',')},c2v:function(){gx.O.AV185Quantidade3=this.val()},val:function(){return gx.fn.getDecimalValue("vQUANTIDADE3",'.',',')},nac:gx.falseFn};
   GXValidFnc[131]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALOR",gxz:"ZV41Valor",gxold:"OV41Valor",gxvar:"AV41Valor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41Valor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV41Valor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALOR",gx.O.AV41Valor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV41Valor=this.val()},val:function(){return gx.fn.getDecimalValue("vVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 133 , function() {
   });
   GXValidFnc[141]={fld:"TABLE12",grid:0};
   GXValidFnc[144]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAOPARM",gxz:"ZV139LoteProdutoCombinacaoParm",gxold:"OV139LoteProdutoCombinacaoParm",gxvar:"AV139LoteProdutoCombinacaoParm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV139LoteProdutoCombinacaoParm=Value},v2z:function(Value){gx.O.ZV139LoteProdutoCombinacaoParm=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAOPARM",gx.O.AV139LoteProdutoCombinacaoParm,0)},c2v:function(){gx.O.AV139LoteProdutoCombinacaoParm=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAOPARM")},nac:gx.falseFn};
   GXValidFnc[145]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR",gxz:"ZV195QtdeCar",gxold:"OV195QtdeCar",gxvar:"AV195QtdeCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV195QtdeCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV195QtdeCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR",gx.O.AV195QtdeCar,0)},c2v:function(){gx.O.AV195QtdeCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR",'.')},nac:gx.falseFn};
   GXValidFnc[146]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBOOUEDIT1",gxz:"ZV60ComboOuEdit1",gxold:"OV60ComboOuEdit1",gxvar:"AV60ComboOuEdit1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60ComboOuEdit1=Value},v2z:function(Value){gx.O.ZV60ComboOuEdit1=Value},v2c:function(){gx.fn.setControlValue("vCOMBOOUEDIT1",gx.O.AV60ComboOuEdit1,0)},c2v:function(){gx.O.AV60ComboOuEdit1=this.val()},val:function(){return gx.fn.getControlValue("vCOMBOOUEDIT1")},nac:gx.falseFn};
   GXValidFnc[147]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADEVOLVIDAID",gxz:"ZV122SaidaDevolvidaId",gxold:"OV122SaidaDevolvidaId",gxvar:"AV122SaidaDevolvidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV122SaidaDevolvidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV122SaidaDevolvidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDADEVOLVIDAID",gx.O.AV122SaidaDevolvidaId,0)},c2v:function(){gx.O.AV122SaidaDevolvidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDADEVOLVIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[148]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCAMPO",gxz:"ZV199TipoCampo",gxold:"OV199TipoCampo",gxvar:"AV199TipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV199TipoCampo=Value},v2z:function(Value){gx.O.ZV199TipoCampo=Value},v2c:function(){gx.fn.setControlValue("vTIPOCAMPO",gx.O.AV199TipoCampo,0)},c2v:function(){gx.O.AV199TipoCampo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCAMPO")},nac:gx.falseFn};
   GXValidFnc[149]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADEVOLVIDAID",gxz:"ZV123EntradaDevolvidaId",gxold:"OV123EntradaDevolvidaId",gxvar:"AV123EntradaDevolvidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV123EntradaDevolvidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV123EntradaDevolvidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADADEVOLVIDAID",gx.O.AV123EntradaDevolvidaId,0)},c2v:function(){gx.O.AV123EntradaDevolvidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADADEVOLVIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[150]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV125FilialEmpresaId",gxold:"OV125FilialEmpresaId",gxvar:"AV125FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV125FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV125FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV125FilialEmpresaId,0)},c2v:function(){gx.O.AV125FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[151]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV12ProdutoEmpresaId",gxold:"OV12ProdutoEmpresaId",gxvar:"AV12ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV12ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV12ProdutoEmpresaId,0)},c2v:function(){gx.O.AV12ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[152]={lvl:0,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOEMBALAGEM",gxz:"ZV103ProdutoEmbalagem",gxold:"OV103ProdutoEmbalagem",gxvar:"AV103ProdutoEmbalagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103ProdutoEmbalagem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV103ProdutoEmbalagem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOEMBALAGEM",gx.O.AV103ProdutoEmbalagem,3,',')},c2v:function(){gx.O.AV103ProdutoEmbalagem=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOEMBALAGEM",'.',',')},nac:gx.falseFn};
   GXValidFnc[153]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV136ProdutoCodigoId",gxold:"OV136ProdutoCodigoId",gxvar:"AV136ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV136ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV136ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV136ProdutoCodigoId,0)},c2v:function(){gx.O.AV136ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[154]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[155]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV134GrupoProdutoId",gxold:"OV134GrupoProdutoId",gxvar:"AV134GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV134GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV134GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV134GrupoProdutoId,0)},c2v:function(){gx.O.AV134GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[156]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV132SNVenda",gxold:"OV132SNVenda",gxvar:"AV132SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV132SNVenda=Value},v2z:function(Value){gx.O.ZV132SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV132SNVenda,0)},c2v:function(){gx.O.AV132SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[157]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV137PrecoNulo",gxold:"OV137PrecoNulo",gxvar:"AV137PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV137PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV137PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV137PrecoNulo,0)},c2v:function(){gx.O.AV137PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[158]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBOOUEDIT2",gxz:"ZV71ComboOuEdit2",gxold:"OV71ComboOuEdit2",gxvar:"AV71ComboOuEdit2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71ComboOuEdit2=Value},v2z:function(Value){gx.O.ZV71ComboOuEdit2=Value},v2c:function(){gx.fn.setControlValue("vCOMBOOUEDIT2",gx.O.AV71ComboOuEdit2,0)},c2v:function(){gx.O.AV71ComboOuEdit2=this.val()},val:function(){return gx.fn.getControlValue("vCOMBOOUEDIT2")},nac:gx.falseFn};
   GXValidFnc[159]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBOOUEDIT4",gxz:"ZV73ComboOuEdit4",gxold:"OV73ComboOuEdit4",gxvar:"AV73ComboOuEdit4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73ComboOuEdit4=Value},v2z:function(Value){gx.O.ZV73ComboOuEdit4=Value},v2c:function(){gx.fn.setControlValue("vCOMBOOUEDIT4",gx.O.AV73ComboOuEdit4,0)},c2v:function(){gx.O.AV73ComboOuEdit4=this.val()},val:function(){return gx.fn.getControlValue("vCOMBOOUEDIT4")},nac:gx.falseFn};
   GXValidFnc[160]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBOOUEDIT5",gxz:"ZV74ComboOuEdit5",gxold:"OV74ComboOuEdit5",gxvar:"AV74ComboOuEdit5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74ComboOuEdit5=Value},v2z:function(Value){gx.O.ZV74ComboOuEdit5=Value},v2c:function(){gx.fn.setControlValue("vCOMBOOUEDIT5",gx.O.AV74ComboOuEdit5,0)},c2v:function(){gx.O.AV74ComboOuEdit5=this.val()},val:function(){return gx.fn.getControlValue("vCOMBOOUEDIT5")},nac:gx.falseFn};
   GXValidFnc[161]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBOOUEDIT3",gxz:"ZV72ComboOuEdit3",gxold:"OV72ComboOuEdit3",gxvar:"AV72ComboOuEdit3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72ComboOuEdit3=Value},v2z:function(Value){gx.O.ZV72ComboOuEdit3=Value},v2c:function(){gx.fn.setControlValue("vCOMBOOUEDIT3",gx.O.AV72ComboOuEdit3,0)},c2v:function(){gx.O.AV72ComboOuEdit3=this.val()},val:function(){return gx.fn.getControlValue("vCOMBOOUEDIT3")},nac:gx.falseFn};
   GXValidFnc[162]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLOTEUNICO",gxz:"ZV51SNLoteUnico",gxold:"OV51SNLoteUnico",gxvar:"AV51SNLoteUnico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51SNLoteUnico=Value},v2z:function(Value){gx.O.ZV51SNLoteUnico=Value},v2c:function(){gx.fn.setControlValue("vSNLOTEUNICO",gx.O.AV51SNLoteUnico,0)},c2v:function(){gx.O.AV51SNLoteUnico=this.val()},val:function(){return gx.fn.getControlValue("vSNLOTEUNICO")},nac:gx.falseFn};
   GXValidFnc[163]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFROMPESSOA",gxz:"ZV81SnFromPessoa",gxold:"OV81SnFromPessoa",gxvar:"AV81SnFromPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81SnFromPessoa=Value},v2z:function(Value){gx.O.ZV81SnFromPessoa=Value},v2c:function(){gx.fn.setControlValue("vSNFROMPESSOA",gx.O.AV81SnFromPessoa,0)},c2v:function(){gx.O.AV81SnFromPessoa=this.val()},val:function(){return gx.fn.getControlValue("vSNFROMPESSOA")},nac:gx.falseFn};
   GXValidFnc[164]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV135SubGrupoProdutoId",gxold:"OV135SubGrupoProdutoId",gxvar:"AV135SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV135SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV135SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV135SubGrupoProdutoId,0)},c2v:function(){gx.O.AV135SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[165]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOANTERIOR",gxz:"ZV164PrecoAnterior",gxold:"OV164PrecoAnterior",gxvar:"AV164PrecoAnterior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV164PrecoAnterior=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV164PrecoAnterior=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOANTERIOR",gx.O.AV164PrecoAnterior,0)},c2v:function(){gx.O.AV164PrecoAnterior=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOANTERIOR",'.')},nac:gx.falseFn};
   GXValidFnc[166]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPERMITIDO",gxz:"ZV180SnPermitido",gxold:"OV180SnPermitido",gxvar:"AV180SnPermitido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV180SnPermitido=Value},v2z:function(Value){gx.O.ZV180SnPermitido=Value},v2c:function(){gx.fn.setControlValue("vSNPERMITIDO",gx.O.AV180SnPermitido,0)},c2v:function(){gx.O.AV180SnPermitido=this.val()},val:function(){return gx.fn.getControlValue("vSNPERMITIDO")},nac:gx.falseFn};
   GXValidFnc[167]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOUNIDADEVENDAID",gxz:"ZV188ProdutoUnidadeVendaId",gxold:"OV188ProdutoUnidadeVendaId",gxvar:"AV188ProdutoUnidadeVendaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV188ProdutoUnidadeVendaId=Value},v2z:function(Value){gx.O.ZV188ProdutoUnidadeVendaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOUNIDADEVENDAID",gx.O.AV188ProdutoUnidadeVendaId,0)},c2v:function(){gx.O.AV188ProdutoUnidadeVendaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOUNIDADEVENDAID")},nac:gx.falseFn};
   GXValidFnc[168]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOUNIDADEVENDAEMPID",gxz:"ZV187ProdutoUnidadeVendaEmpId",gxold:"OV187ProdutoUnidadeVendaEmpId",gxvar:"AV187ProdutoUnidadeVendaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV187ProdutoUnidadeVendaEmpId=Value},v2z:function(Value){gx.O.ZV187ProdutoUnidadeVendaEmpId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOUNIDADEVENDAEMPID",gx.O.AV187ProdutoUnidadeVendaEmpId,0)},c2v:function(){gx.O.AV187ProdutoUnidadeVendaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOUNIDADEVENDAEMPID")},nac:gx.falseFn};
   GXValidFnc[169]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPERMISSAOITEM",gxz:"ZV192SnPermissaoItem",gxold:"OV192SnPermissaoItem",gxvar:"AV192SnPermissaoItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV192SnPermissaoItem=Value},v2z:function(Value){gx.O.ZV192SnPermissaoItem=Value},v2c:function(){gx.fn.setControlValue("vSNPERMISSAOITEM",gx.O.AV192SnPermissaoItem,0)},c2v:function(){gx.O.AV192SnPermissaoItem=this.val()},val:function(){return gx.fn.getControlValue("vSNPERMISSAOITEM")},nac:gx.falseFn};
   GXValidFnc[170]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPOVENDABALANCA",gxz:"ZV97ProdutoTipoVendaBalanca",gxold:"OV97ProdutoTipoVendaBalanca",gxvar:"AV97ProdutoTipoVendaBalanca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV97ProdutoTipoVendaBalanca=Value},v2z:function(Value){gx.O.ZV97ProdutoTipoVendaBalanca=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOTIPOVENDABALANCA",gx.O.AV97ProdutoTipoVendaBalanca)},c2v:function(){gx.O.AV97ProdutoTipoVendaBalanca=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPOVENDABALANCA")},nac:gx.falseFn};
   GXValidFnc[171]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV138IntAuxIn",gxold:"OV138IntAuxIn",gxvar:"AV138IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV138IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV138IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV138IntAuxIn,0)},c2v:function(){gx.O.AV138IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[172]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV133ProdutoCategoria",gxold:"OV133ProdutoCategoria",gxvar:"AV133ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV133ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV133ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV133ProdutoCategoria)},c2v:function(){gx.O.AV133ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[173]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV46PessoaEmpresaId",gxold:"OV46PessoaEmpresaId",gxvar:"AV46PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV46PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV46PessoaEmpresaId,0)},c2v:function(){gx.O.AV46PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[174]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOSNCONTROLAVENC",gxz:"ZV197ProdutoSnControlaVEnc",gxold:"OV197ProdutoSnControlaVEnc",gxvar:"AV197ProdutoSnControlaVEnc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV197ProdutoSnControlaVEnc=Value},v2z:function(Value){gx.O.ZV197ProdutoSnControlaVEnc=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOSNCONTROLAVENC",gx.O.AV197ProdutoSnControlaVEnc,0)},c2v:function(){gx.O.AV197ProdutoSnControlaVEnc=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOSNCONTROLAVENC")},nac:gx.falseFn};
   GXValidFnc[175]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV153PrecoEmpresaId",gxold:"OV153PrecoEmpresaId",gxvar:"AV153PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV153PrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV153PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV153PrecoEmpresaId,0)},c2v:function(){gx.O.AV153PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[176]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTELA",gxz:"ZV42Tela",gxold:"OV42Tela",gxvar:"AV42Tela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42Tela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42Tela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTELA",gx.O.AV42Tela,0)},c2v:function(){gx.O.AV42Tela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTELA",'.')},nac:gx.falseFn};
   GXValidFnc[177]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Idauxiliar,isvalid:null,rgrid:[],fld:"vIDAUXILIAR",gxz:"ZV77IdAuxiliar",gxold:"OV77IdAuxiliar",gxvar:"AV77IdAuxiliar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77IdAuxiliar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77IdAuxiliar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vIDAUXILIAR",gx.O.AV77IdAuxiliar,0)},c2v:function(){gx.O.AV77IdAuxiliar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIDAUXILIAR",'.')},nac:gx.falseFn};
   GXValidFnc[178]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTELAPERMISSAO",gxz:"ZV177SnTelaPermissao",gxold:"OV177SnTelaPermissao",gxvar:"AV177SnTelaPermissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV177SnTelaPermissao=Value},v2z:function(Value){gx.O.ZV177SnTelaPermissao=Value},v2c:function(){gx.fn.setControlValue("vSNTELAPERMISSAO",gx.O.AV177SnTelaPermissao,0)},c2v:function(){gx.O.AV177SnTelaPermissao=this.val()},val:function(){return gx.fn.getControlValue("vSNTELAPERMISSAO")},nac:gx.falseFn};
   GXValidFnc[179]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCASASDECIMAIS",gxz:"ZV98ProdutoCasasDecimais",gxold:"OV98ProdutoCasasDecimais",gxvar:"AV98ProdutoCasasDecimais",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98ProdutoCasasDecimais=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV98ProdutoCasasDecimais=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCASASDECIMAIS",gx.O.AV98ProdutoCasasDecimais,0)},c2v:function(){gx.O.AV98ProdutoCasasDecimais=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCASASDECIMAIS",'.')},nac:gx.falseFn};
   GXValidFnc[180]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCPRECOANTERIOR",gxz:"ZV176DescPrecoAnterior",gxold:"OV176DescPrecoAnterior",gxvar:"AV176DescPrecoAnterior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV176DescPrecoAnterior=Value},v2z:function(Value){gx.O.ZV176DescPrecoAnterior=Value},v2c:function(){gx.fn.setControlValue("vDESCPRECOANTERIOR",gx.O.AV176DescPrecoAnterior,0)},c2v:function(){gx.O.AV176DescPrecoAnterior=this.val()},val:function(){return gx.fn.getControlValue("vDESCPRECOANTERIOR")},nac:gx.falseFn};
   GXValidFnc[181]={fld:"JS", format:2,grid:0};
   GXValidFnc[182]={fld:"PROMPT_PRECOID",grid:0};
   this.AV99FilialId = 0 ;
   this.ZV99FilialId = 0 ;
   this.OV99FilialId = 0 ;
   this.AV146FilialNome = "" ;
   this.ZV146FilialNome = "" ;
   this.OV146FilialNome = "" ;
   this.AV22PessoaId = 0 ;
   this.ZV22PessoaId = 0 ;
   this.OV22PessoaId = 0 ;
   this.AV49PessoaFantasia = "" ;
   this.ZV49PessoaFantasia = "" ;
   this.OV49PessoaFantasia = "" ;
   this.AV118VendedorId = 0 ;
   this.ZV118VendedorId = 0 ;
   this.OV118VendedorId = 0 ;
   this.AV119VendedorNOme = "" ;
   this.ZV119VendedorNOme = "" ;
   this.OV119VendedorNOme = "" ;
   this.AV147DataReferencia = gx.date.nullDate() ;
   this.ZV147DataReferencia = gx.date.nullDate() ;
   this.OV147DataReferencia = gx.date.nullDate() ;
   this.AV189ValorSaldo = 0 ;
   this.ZV189ValorSaldo = 0 ;
   this.OV189ValorSaldo = 0 ;
   this.AV148PrecoId = 0 ;
   this.ZV148PrecoId = 0 ;
   this.OV148PrecoId = 0 ;
   this.AV149PrecoDescricao = "" ;
   this.ZV149PrecoDescricao = "" ;
   this.OV149PrecoDescricao = "" ;
   this.AV194ProdutoCodigoBarras = 0 ;
   this.ZV194ProdutoCodigoBarras = 0 ;
   this.OV194ProdutoCodigoBarras = 0 ;
   this.AV88ProdutoReferencia = "" ;
   this.ZV88ProdutoReferencia = "" ;
   this.OV88ProdutoReferencia = "" ;
   this.AV13ProdutoId = 0 ;
   this.ZV13ProdutoId = 0 ;
   this.OV13ProdutoId = 0 ;
   this.AV17ProdutoDescricaoResumida = "" ;
   this.ZV17ProdutoDescricaoResumida = "" ;
   this.OV17ProdutoDescricaoResumida = "" ;
   this.AV28ValorAtributo1 = 0 ;
   this.ZV28ValorAtributo1 = 0 ;
   this.OV28ValorAtributo1 = 0 ;
   this.AV29ValorAtributoCombo1 = 0 ;
   this.ZV29ValorAtributoCombo1 = 0 ;
   this.OV29ValorAtributoCombo1 = 0 ;
   this.AV30ValorAtributo2 = 0 ;
   this.ZV30ValorAtributo2 = 0 ;
   this.OV30ValorAtributo2 = 0 ;
   this.AV31ValorAtributoCombo2 = 0 ;
   this.ZV31ValorAtributoCombo2 = 0 ;
   this.OV31ValorAtributoCombo2 = 0 ;
   this.AV32ValorAtributo3 = 0 ;
   this.ZV32ValorAtributo3 = 0 ;
   this.OV32ValorAtributo3 = 0 ;
   this.AV33ValorAtributoCombo3 = 0 ;
   this.ZV33ValorAtributoCombo3 = 0 ;
   this.OV33ValorAtributoCombo3 = 0 ;
   this.AV34ValorAtributo4 = 0 ;
   this.ZV34ValorAtributo4 = 0 ;
   this.OV34ValorAtributo4 = 0 ;
   this.AV35ValorAtributoCombo4 = 0 ;
   this.ZV35ValorAtributoCombo4 = 0 ;
   this.OV35ValorAtributoCombo4 = 0 ;
   this.AV36ValorAtributo5 = 0 ;
   this.ZV36ValorAtributo5 = 0 ;
   this.OV36ValorAtributo5 = 0 ;
   this.AV37ValorAtributoCombo5 = 0 ;
   this.ZV37ValorAtributoCombo5 = 0 ;
   this.OV37ValorAtributoCombo5 = 0 ;
   this.AV196LoteMedicamento = "" ;
   this.ZV196LoteMedicamento = "" ;
   this.OV196LoteMedicamento = "" ;
   this.AV182Quantidade0 = 0 ;
   this.ZV182Quantidade0 = 0 ;
   this.OV182Quantidade0 = 0 ;
   this.AV183Quantidade1 = 0 ;
   this.ZV183Quantidade1 = 0 ;
   this.OV183Quantidade1 = 0 ;
   this.AV184Quantidade2 = 0 ;
   this.ZV184Quantidade2 = 0 ;
   this.OV184Quantidade2 = 0 ;
   this.AV185Quantidade3 = 0 ;
   this.ZV185Quantidade3 = 0 ;
   this.OV185Quantidade3 = 0 ;
   this.AV41Valor = 0 ;
   this.ZV41Valor = 0 ;
   this.OV41Valor = 0 ;
   this.AV139LoteProdutoCombinacaoParm = "" ;
   this.ZV139LoteProdutoCombinacaoParm = "" ;
   this.OV139LoteProdutoCombinacaoParm = "" ;
   this.AV195QtdeCar = 0 ;
   this.ZV195QtdeCar = 0 ;
   this.OV195QtdeCar = 0 ;
   this.AV60ComboOuEdit1 = "" ;
   this.ZV60ComboOuEdit1 = "" ;
   this.OV60ComboOuEdit1 = "" ;
   this.AV122SaidaDevolvidaId = 0 ;
   this.ZV122SaidaDevolvidaId = 0 ;
   this.OV122SaidaDevolvidaId = 0 ;
   this.AV199TipoCampo = "" ;
   this.ZV199TipoCampo = "" ;
   this.OV199TipoCampo = "" ;
   this.AV123EntradaDevolvidaId = 0 ;
   this.ZV123EntradaDevolvidaId = 0 ;
   this.OV123EntradaDevolvidaId = 0 ;
   this.AV125FilialEmpresaId = "" ;
   this.ZV125FilialEmpresaId = "" ;
   this.OV125FilialEmpresaId = "" ;
   this.AV12ProdutoEmpresaId = "" ;
   this.ZV12ProdutoEmpresaId = "" ;
   this.OV12ProdutoEmpresaId = "" ;
   this.AV103ProdutoEmbalagem = 0 ;
   this.ZV103ProdutoEmbalagem = 0 ;
   this.OV103ProdutoEmbalagem = 0 ;
   this.AV136ProdutoCodigoId = 0 ;
   this.ZV136ProdutoCodigoId = 0 ;
   this.OV136ProdutoCodigoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV134GrupoProdutoId = 0 ;
   this.ZV134GrupoProdutoId = 0 ;
   this.OV134GrupoProdutoId = 0 ;
   this.AV132SNVenda = "" ;
   this.ZV132SNVenda = "" ;
   this.OV132SNVenda = "" ;
   this.AV137PrecoNulo = 0 ;
   this.ZV137PrecoNulo = 0 ;
   this.OV137PrecoNulo = 0 ;
   this.AV71ComboOuEdit2 = "" ;
   this.ZV71ComboOuEdit2 = "" ;
   this.OV71ComboOuEdit2 = "" ;
   this.AV73ComboOuEdit4 = "" ;
   this.ZV73ComboOuEdit4 = "" ;
   this.OV73ComboOuEdit4 = "" ;
   this.AV74ComboOuEdit5 = "" ;
   this.ZV74ComboOuEdit5 = "" ;
   this.OV74ComboOuEdit5 = "" ;
   this.AV72ComboOuEdit3 = "" ;
   this.ZV72ComboOuEdit3 = "" ;
   this.OV72ComboOuEdit3 = "" ;
   this.AV51SNLoteUnico = "" ;
   this.ZV51SNLoteUnico = "" ;
   this.OV51SNLoteUnico = "" ;
   this.AV81SnFromPessoa = "" ;
   this.ZV81SnFromPessoa = "" ;
   this.OV81SnFromPessoa = "" ;
   this.AV135SubGrupoProdutoId = 0 ;
   this.ZV135SubGrupoProdutoId = 0 ;
   this.OV135SubGrupoProdutoId = 0 ;
   this.AV164PrecoAnterior = 0 ;
   this.ZV164PrecoAnterior = 0 ;
   this.OV164PrecoAnterior = 0 ;
   this.AV180SnPermitido = "" ;
   this.ZV180SnPermitido = "" ;
   this.OV180SnPermitido = "" ;
   this.AV188ProdutoUnidadeVendaId = "" ;
   this.ZV188ProdutoUnidadeVendaId = "" ;
   this.OV188ProdutoUnidadeVendaId = "" ;
   this.AV187ProdutoUnidadeVendaEmpId = "" ;
   this.ZV187ProdutoUnidadeVendaEmpId = "" ;
   this.OV187ProdutoUnidadeVendaEmpId = "" ;
   this.AV192SnPermissaoItem = "" ;
   this.ZV192SnPermissaoItem = "" ;
   this.OV192SnPermissaoItem = "" ;
   this.AV97ProdutoTipoVendaBalanca = "" ;
   this.ZV97ProdutoTipoVendaBalanca = "" ;
   this.OV97ProdutoTipoVendaBalanca = "" ;
   this.AV138IntAuxIn = 0 ;
   this.ZV138IntAuxIn = 0 ;
   this.OV138IntAuxIn = 0 ;
   this.AV133ProdutoCategoria = "" ;
   this.ZV133ProdutoCategoria = "" ;
   this.OV133ProdutoCategoria = "" ;
   this.AV46PessoaEmpresaId = "" ;
   this.ZV46PessoaEmpresaId = "" ;
   this.OV46PessoaEmpresaId = "" ;
   this.AV197ProdutoSnControlaVEnc = "" ;
   this.ZV197ProdutoSnControlaVEnc = "" ;
   this.OV197ProdutoSnControlaVEnc = "" ;
   this.AV153PrecoEmpresaId = "" ;
   this.ZV153PrecoEmpresaId = "" ;
   this.OV153PrecoEmpresaId = "" ;
   this.AV42Tela = 0 ;
   this.ZV42Tela = 0 ;
   this.OV42Tela = 0 ;
   this.AV77IdAuxiliar = 0 ;
   this.ZV77IdAuxiliar = 0 ;
   this.OV77IdAuxiliar = 0 ;
   this.AV177SnTelaPermissao = "" ;
   this.ZV177SnTelaPermissao = "" ;
   this.OV177SnTelaPermissao = "" ;
   this.AV98ProdutoCasasDecimais = 0 ;
   this.ZV98ProdutoCasasDecimais = 0 ;
   this.OV98ProdutoCasasDecimais = 0 ;
   this.AV176DescPrecoAnterior = "" ;
   this.ZV176DescPrecoAnterior = "" ;
   this.OV176DescPrecoAnterior = "" ;
   this.AV99FilialId = 0 ;
   this.AV146FilialNome = "" ;
   this.AV22PessoaId = 0 ;
   this.AV49PessoaFantasia = "" ;
   this.AV118VendedorId = 0 ;
   this.AV119VendedorNOme = "" ;
   this.AV147DataReferencia = gx.date.nullDate() ;
   this.AV189ValorSaldo = 0 ;
   this.AV148PrecoId = 0 ;
   this.AV149PrecoDescricao = "" ;
   this.AV194ProdutoCodigoBarras = 0 ;
   this.AV88ProdutoReferencia = "" ;
   this.AV13ProdutoId = 0 ;
   this.AV17ProdutoDescricaoResumida = "" ;
   this.AV28ValorAtributo1 = 0 ;
   this.AV29ValorAtributoCombo1 = 0 ;
   this.AV30ValorAtributo2 = 0 ;
   this.AV31ValorAtributoCombo2 = 0 ;
   this.AV32ValorAtributo3 = 0 ;
   this.AV33ValorAtributoCombo3 = 0 ;
   this.AV34ValorAtributo4 = 0 ;
   this.AV35ValorAtributoCombo4 = 0 ;
   this.AV36ValorAtributo5 = 0 ;
   this.AV37ValorAtributoCombo5 = 0 ;
   this.AV196LoteMedicamento = "" ;
   this.AV182Quantidade0 = 0 ;
   this.AV183Quantidade1 = 0 ;
   this.AV184Quantidade2 = 0 ;
   this.AV185Quantidade3 = 0 ;
   this.AV41Valor = 0 ;
   this.AV139LoteProdutoCombinacaoParm = "" ;
   this.AV195QtdeCar = 0 ;
   this.AV60ComboOuEdit1 = "" ;
   this.AV122SaidaDevolvidaId = 0 ;
   this.AV199TipoCampo = "" ;
   this.AV123EntradaDevolvidaId = 0 ;
   this.AV125FilialEmpresaId = "" ;
   this.AV12ProdutoEmpresaId = "" ;
   this.AV103ProdutoEmbalagem = 0 ;
   this.AV136ProdutoCodigoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV134GrupoProdutoId = 0 ;
   this.AV132SNVenda = "" ;
   this.AV137PrecoNulo = 0 ;
   this.AV71ComboOuEdit2 = "" ;
   this.AV73ComboOuEdit4 = "" ;
   this.AV74ComboOuEdit5 = "" ;
   this.AV72ComboOuEdit3 = "" ;
   this.AV51SNLoteUnico = "" ;
   this.AV81SnFromPessoa = "" ;
   this.AV135SubGrupoProdutoId = 0 ;
   this.AV164PrecoAnterior = 0 ;
   this.AV180SnPermitido = "" ;
   this.AV188ProdutoUnidadeVendaId = "" ;
   this.AV187ProdutoUnidadeVendaEmpId = "" ;
   this.AV192SnPermissaoItem = "" ;
   this.AV97ProdutoTipoVendaBalanca = "" ;
   this.AV138IntAuxIn = 0 ;
   this.AV133ProdutoCategoria = "" ;
   this.AV46PessoaEmpresaId = "" ;
   this.AV197ProdutoSnControlaVEnc = "" ;
   this.AV153PrecoEmpresaId = "" ;
   this.AV42Tela = 0 ;
   this.AV77IdAuxiliar = 0 ;
   this.AV177SnTelaPermissao = "" ;
   this.AV98ProdutoCasasDecimais = 0 ;
   this.AV176DescPrecoAnterior = "" ;
   this.AV75TrocaDevolucaoEmpresaId = "" ;
   this.AV76TrocaDevolucaoTipo = "" ;
   this.AV95TrocaDevolucaoNumero = 0 ;
   this.AV19ModeTela = "" ;
   this.AV190ValorSaldoParm = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A3850ProdutoCasasDecimais = 0 ;
   this.A1136FilialNome = "" ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A711PrecoDescricao = "" ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A5608TransacaoSaidaPrecoId = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A7499AuxiliarTrDvNumero = 0 ;
   this.A7530AuxiliarTrDvTipo = "" ;
   this.A7529AuxiliarTrDvEmpresaId = "" ;
   this.A7509AuxiliarTrDvData = gx.date.nullDate() ;
   this.A7503AuxiliarTrDvFilialId = 0 ;
   this.A7505AuxiliarTrDvCliForId = 0 ;
   this.A7507AuxiliarTrDvTrnSaidaId = "" ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2939ValorAtributoUsuarioAlt = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.A2919AtributoEsquemaUsuarioAlt = "" ;
   this.A2918AtributoEsquemaSnVencimento = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A3644LoteProdutoCodigoBarras = 0 ;
   this.A7512AuxiliarTrDvNovoProdLote = "" ;
   this.A7511AuxiliarTrDvNovoProdId = 0 ;
   this.A7510AuxiliarTrDvNovoProdEmpId = "" ;
   this.A7546AuxiliarTrDvNovoNumero = 0 ;
   this.A7545AuxiliarTrDvNovoTipo = "" ;
   this.A7544AuxiliarTrDvNovoEmpresaId = "" ;
   this.A7513AuxiliarTrDvNovoQtde = 0 ;
   this.A5578TransacaoSaidaCFOPDenEstadoCod = 0 ;
   this.A3651LoteProdutoUsuarioAlt = "" ;
   this.A3857ProdutoTipoVendaBalanca = "" ;
   this.A3830ProdutoEmbalagem = 0 ;
   this.A3834ProdutoUnidadeVendaEmpId = "" ;
   this.A3835ProdutoUnidadeVendaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A10788ProdutoSnControlaVenc = "" ;
   this.A3844ProdutoSNSuspenso = "" ;
   this.A2968CodigoBarrasProdutoBarra = 0 ;
   this.A3837ProdutoReferencia = "" ;
   this.A722PrecoTipo = "" ;
   this.AV87TpIdentificacaoProd = "" ;
   this.AV93LoteProdutoCombinacao = "" ;
   this.Events = {"e1211p2_client": ["'FECHARMODAL'", true] ,"e1311p2_client": ["ENTER", true] ,"e1511p2_client": ["'CANCELAR'", true] ,"e1711p2_client": ["'CONSULTAPRODUTO'", true] ,"e1811p2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV177SnTelaPermissao',fld:'vSNTELAPERMISSAO'},{av:'AV180SnPermitido',fld:'vSNPERMITIDO'},{av:'AV148PrecoId',fld:'vPRECOID'},{av:'AV192SnPermissaoItem',fld:'vSNPERMISSAOITEM'},{av:'AV41Valor',fld:'vVALOR'},{av:'AV87TpIdentificacaoProd',fld:'vTPIDENTIFICACAOPROD'},{av:'AV88ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV194ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'AV98ProdutoCasasDecimais',fld:'vPRODUTOCASASDECIMAIS'},{av:'AV183Quantidade1',fld:'vQUANTIDADE1'},{av:'AV184Quantidade2',fld:'vQUANTIDADE2'},{av:'AV185Quantidade3',fld:'vQUANTIDADE3'},{av:'AV182Quantidade0',fld:'vQUANTIDADE0'},{av:'AV75TrocaDevolucaoEmpresaId',fld:'vTROCADEVOLUCAOEMPRESAID',hsh:true},{av:'AV76TrocaDevolucaoTipo',fld:'vTROCADEVOLUCAOTIPO',hsh:true},{av:'AV77IdAuxiliar',fld:'vIDAUXILIAR',hsh:true},{av:'AV12ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV93LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV95TrocaDevolucaoNumero',fld:'vTROCADEVOLUCAONUMERO',hsh:true},{av:'AV111SdtAuxiliarTrDv',fld:'vSDTAUXILIARTRDV'},{av:'AV112SdtAuxiliarTrDvDevolucao',fld:'vSDTAUXILIARTRDVDEVOLUCAO'},{av:'AV19ModeTela',fld:'vMODETELA',hsh:true},{av:'AV118VendedorId',fld:'vVENDEDORID',hsh:true},{av:'AV173IdTrocaDevolucao',fld:'vIDTROCADEVOLUCAO'},{av:'AV189ValorSaldo',fld:'vVALORSALDO'},{av:'AV42Tela',fld:'vTELA'},{av:'AV51SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV197ProdutoSnControlaVEnc',fld:'vPRODUTOSNCONTROLAVENC'},{av:'AV60ComboOuEdit1',fld:'vCOMBOOUEDIT1'},{av:'AV29ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV28ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV71ComboOuEdit2',fld:'vCOMBOOUEDIT2'},{av:'AV31ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV30ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV72ComboOuEdit3',fld:'vCOMBOOUEDIT3'},{av:'AV33ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV32ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV73ComboOuEdit4',fld:'vCOMBOOUEDIT4'},{av:'AV35ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV34ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV74ComboOuEdit5',fld:'vCOMBOOUEDIT5'},{av:'AV37ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV36ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV196LoteMedicamento',fld:'vLOTEMEDICAMENTO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV125FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV99FilialId',fld:'vFILIALID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV199TipoCampo',fld:'vTIPOCAMPO'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV58AtributoEsquemaSnVencimento',fld:'vATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV61ContAux',fld:'vCONTAUX'},{av:'AV69ValorAtributoCodigoAux',fld:'vVALORATRIBUTOCODIGOAUX'},{av:'AV70ValorAtributoDescricaoAux',fld:'vVALORATRIBUTODESCRICAOAUX'},{av:'AV62Controle',fld:'vCONTROLE'},{av:'AV56EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV59AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV57Cont',fld:'vCONT'}],[{av:'AV180SnPermitido',fld:'vSNPERMITIDO'},{av:'AV177SnTelaPermissao',fld:'vSNTELAPERMISSAO'},{av:'AV91TpErro',fld:'vTPERRO'},{av:'AV192SnPermissaoItem',fld:'vSNPERMISSAOITEM'},{av:'AV42Tela',fld:'vTELA'},{av:'AV53Quantidade',fld:'vQUANTIDADE'},{av:'AV113SdtAuxiliarTrDvNovo',fld:'vSDTAUXILIARTRDVNOVO'},{av:'AV160SdtAuxiliarTrDvNovoItem',fld:'vSDTAUXILIARTRDVNOVOITEM'},{av:'AV115ValorFinanceiroSaida',fld:'vVALORFINANCEIROSAIDA'},{av:'AV114ValorFinanceiroEntrada',fld:'vVALORFINANCEIROENTRADA'},{av:'AV173IdTrocaDevolucao',fld:'vIDTROCADEVOLUCAO'},{av:'AV77IdAuxiliar',fld:'vIDAUXILIAR',hsh:true},{av:'AV189ValorSaldo',fld:'vVALORSALDO'},{ctrl:'BTNAV1',prop:'Visible'},{ctrl:'BTNCAN1',prop:'Visible'},{ctrl:'BTNAV2',prop:'Visible'},{ctrl:'BTNCAN2',prop:'Visible'},{ctrl:'BTNAV3',prop:'Visible'},{ctrl:'BTNCAN3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPRECOID","Enabled")',ctrl:'vPRECOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOID","Enabled")',ctrl:'vPRODUTOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOREFERENCIA","Enabled")',ctrl:'vPRODUTOREFERENCIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOCODIGOBARRAS","Enabled")',ctrl:'vPRODUTOCODIGOBARRAS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TABLOTE","Visible")',ctrl:'TABLOTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBLOTEVENC","Visible")',ctrl:'TBLOTEVENC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQUANTIDADE3","Visible")',ctrl:'vQUANTIDADE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQUANTIDADE3","Enabled")',ctrl:'vQUANTIDADE3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vQUANTIDADE1","Visible")',ctrl:'vQUANTIDADE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQUANTIDADE2","Visible")',ctrl:'vQUANTIDADE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQUANTIDADE0","Visible")',ctrl:'vQUANTIDADE0',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALOR","Enabled")',ctrl:'vVALOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROMPT1","Visible")',ctrl:'BTNPROMPT1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("BTNPROMPT","Visible")',ctrl:'BTNPROMPT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQUANTIDADE1","Enabled")',ctrl:'vQUANTIDADE1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vQUANTIDADE2","Enabled")',ctrl:'vQUANTIDADE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vQUANTIDADE0","Enabled")',ctrl:'vQUANTIDADE0',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRODUTOCODIGOBARRAS","Visible")',ctrl:'vPRODUTOCODIGOBARRAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPRODUTOREFERENCIA","Visible")',ctrl:'vPRODUTOREFERENCIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPRODUTOID","Visible")',ctrl:'vPRODUTOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBPROD","Visible")',ctrl:'TBPROD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTPROD","Caption")',ctrl:'TXTPROD',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TXTSALDO","Visible")',ctrl:'TXTSALDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALORSALDO","Visible")',ctrl:'vVALORSALDO',prop:'Visible'},{av:'AV93LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV182Quantidade0',fld:'vQUANTIDADE0'},{av:'AV183Quantidade1',fld:'vQUANTIDADE1'},{av:'AV184Quantidade2',fld:'vQUANTIDADE2'},{av:'AV185Quantidade3',fld:'vQUANTIDADE3'},{av:'AV41Valor',fld:'vVALOR'},{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'AV17ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV88ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV194ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV196LoteMedicamento',fld:'vLOTEMEDICAMENTO'},{av:'AV29ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV31ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV33ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV35ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV37ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV28ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV30ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'AV32ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'AV34ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'AV36ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'AV56EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'gx.fn.getCtrlProperty("LOTE1","Caption")',ctrl:'LOTE1',prop:'Caption'},{av:'gx.fn.getCtrlProperty("LOTE2","Caption")',ctrl:'LOTE2',prop:'Caption'},{av:'gx.fn.getCtrlProperty("LOTE3","Caption")',ctrl:'LOTE3',prop:'Caption'},{av:'gx.fn.getCtrlProperty("LOTE4","Caption")',ctrl:'LOTE4',prop:'Caption'},{av:'gx.fn.getCtrlProperty("LOTE5","Caption")',ctrl:'LOTE5',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO1","Visible")',ctrl:'vVALORATRIBUTO1',prop:'Visible'},{ctrl:'vVALORATRIBUTOCOMBO1'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO2","Visible")',ctrl:'vVALORATRIBUTO2',prop:'Visible'},{ctrl:'vVALORATRIBUTOCOMBO2'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO3","Visible")',ctrl:'vVALORATRIBUTO3',prop:'Visible'},{ctrl:'vVALORATRIBUTOCOMBO3'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO4","Visible")',ctrl:'vVALORATRIBUTO4',prop:'Visible'},{ctrl:'vVALORATRIBUTOCOMBO4'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO5","Visible")',ctrl:'vVALORATRIBUTO5',prop:'Visible'},{ctrl:'vVALORATRIBUTOCOMBO5'},{av:'AV57Cont',fld:'vCONT'},{av:'AV217GXLvl996',fld:'vGXLVL996'},{av:'AV58AtributoEsquemaSnVencimento',fld:'vATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV59AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV68SNMontaLote',fld:'vSNMONTALOTE'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO1","Enabled")',ctrl:'vVALORATRIBUTO1',prop:'Enabled'},{av:'AV60ComboOuEdit1',fld:'vCOMBOOUEDIT1'},{av:'AV67AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO2","Enabled")',ctrl:'vVALORATRIBUTO2',prop:'Enabled'},{av:'AV71ComboOuEdit2',fld:'vCOMBOOUEDIT2'},{av:'AV66AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO3","Enabled")',ctrl:'vVALORATRIBUTO3',prop:'Enabled'},{av:'AV72ComboOuEdit3',fld:'vCOMBOOUEDIT3'},{av:'AV65AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO4","Enabled")',ctrl:'vVALORATRIBUTO4',prop:'Enabled'},{av:'AV73ComboOuEdit4',fld:'vCOMBOOUEDIT4'},{av:'AV63AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO5","Enabled")',ctrl:'vVALORATRIBUTO5',prop:'Enabled'},{av:'AV74ComboOuEdit5',fld:'vCOMBOOUEDIT5'},{av:'AV64AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV94Combinacao',fld:'vCOMBINACAO'},{av:'AV61ContAux',fld:'vCONTAUX'},{av:'AV69ValorAtributoCodigoAux',fld:'vVALORATRIBUTOCODIGOAUX'},{av:'AV70ValorAtributoDescricaoAux',fld:'vVALORATRIBUTODESCRICAOAUX'}]];
   this.EvtParms["'FECHARMODAL'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV42Tela',fld:'vTELA'},{av:'AV91TpErro',fld:'vTPERRO'},{av:'AV51SNLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV197ProdutoSnControlaVEnc',fld:'vPRODUTOSNCONTROLAVENC'},{av:'AV87TpIdentificacaoProd',fld:'vTPIDENTIFICACAOPROD'},{av:'AV194ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV98ProdutoCasasDecimais',fld:'vPRODUTOCASASDECIMAIS'},{av:'AV183Quantidade1',fld:'vQUANTIDADE1'},{av:'AV184Quantidade2',fld:'vQUANTIDADE2'},{av:'AV185Quantidade3',fld:'vQUANTIDADE3'},{av:'AV182Quantidade0',fld:'vQUANTIDADE0'},{av:'AV60ComboOuEdit1',fld:'vCOMBOOUEDIT1'},{av:'AV29ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV28ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'AV196LoteMedicamento',fld:'vLOTEMEDICAMENTO'},{av:'AV148PrecoId',fld:'vPRECOID'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV153PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'A722PrecoTipo',fld:'PRECOTIPO'},{av:'AV154SnSaidaPrecoCusto',fld:'vSNSAIDAPRECOCUSTO'},{av:'AV152SnAlteraPreco',fld:'vSNALTERAPRECO'},{av:'AV164PrecoAnterior',fld:'vPRECOANTERIOR'},{av:'AV176DescPrecoAnterior',fld:'vDESCPRECOANTERIOR'},{av:'AV149PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV43EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV125FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV99FilialId',fld:'vFILIALID'},{av:'AV203Pgmname',fld:'vPGMNAME'},{av:'AV169SdtPermissao',fld:'vSDTPERMISSAO'},{av:'AV179PrecoTipo',fld:'vPRECOTIPO'},{av:'AV88ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV12ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A3837ProdutoReferencia',fld:'PRODUTOREFERENCIA'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3850ProdutoCasasDecimais',fld:'PRODUTOCASASDECIMAIS'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A3857ProdutoTipoVendaBalanca',fld:'PRODUTOTIPOVENDABALANCA'},{av:'A3830ProdutoEmbalagem',fld:'PRODUTOEMBALAGEM'},{av:'A3834ProdutoUnidadeVendaEmpId',fld:'PRODUTOUNIDADEVENDAEMPID'},{av:'A3835ProdutoUnidadeVendaId',fld:'PRODUTOUNIDADEVENDAID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A3844ProdutoSNSuspenso',fld:'PRODUTOSNSUSPENSO'},{av:'AV97ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'AV147DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV103ProdutoEmbalagem',fld:'vPRODUTOEMBALAGEM'},{av:'AV22PessoaId',fld:'vPESSOAID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV199TipoCampo',fld:'vTIPOCAMPO'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV58AtributoEsquemaSnVencimento',fld:'vATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV61ContAux',fld:'vCONTAUX'},{av:'AV69ValorAtributoCodigoAux',fld:'vVALORATRIBUTOCODIGOAUX'},{av:'AV70ValorAtributoDescricaoAux',fld:'vVALORATRIBUTODESCRICAOAUX'},{av:'AV62Controle',fld:'vCONTROLE'},{av:'gx.fn.getCtrlProperty("LOTE1","Caption")',ctrl:'LOTE1',prop:'Caption'},{av:'AV71ComboOuEdit2',fld:'vCOMBOOUEDIT2'},{av:'AV30ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'gx.fn.getCtrlProperty("LOTE2","Caption")',ctrl:'LOTE2',prop:'Caption'},{av:'AV31ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV72ComboOuEdit3',fld:'vCOMBOOUEDIT3'},{av:'AV32ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'gx.fn.getCtrlProperty("LOTE3","Caption")',ctrl:'LOTE3',prop:'Caption'},{av:'AV33ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV73ComboOuEdit4',fld:'vCOMBOOUEDIT4'},{av:'AV34ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'gx.fn.getCtrlProperty("LOTE4","Caption")',ctrl:'LOTE4',prop:'Caption'},{av:'AV35ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV74ComboOuEdit5',fld:'vCOMBOOUEDIT5'},{av:'AV36ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'gx.fn.getCtrlProperty("LOTE5","Caption")',ctrl:'LOTE5',prop:'Caption'},{av:'AV37ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV93LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'A3651LoteProdutoUsuarioAlt',fld:'LOTEPRODUTOUSUARIOALT'},{av:'AV38QuantidadeChar',fld:'vQUANTIDADECHAR'},{av:'AV41Valor',fld:'vVALOR'},{av:'A7529AuxiliarTrDvEmpresaId',fld:'AUXILIARTRDVEMPRESAID'},{av:'AV75TrocaDevolucaoEmpresaId',fld:'vTROCADEVOLUCAOEMPRESAID',hsh:true},{av:'A7530AuxiliarTrDvTipo',fld:'AUXILIARTRDVTIPO'},{av:'AV76TrocaDevolucaoTipo',fld:'vTROCADEVOLUCAOTIPO',hsh:true},{av:'A7499AuxiliarTrDvNumero',fld:'AUXILIARTRDVNUMERO'},{av:'AV77IdAuxiliar',fld:'vIDAUXILIAR',hsh:true},{av:'A7507AuxiliarTrDvTrnSaidaId',fld:'AUXILIARTRDVTRNSAIDAID'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV163Transacaosaidaempresaid',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'A5578TransacaoSaidaCFOPDenEstadoCod',fld:'TRANSACAOSAIDACFOPDENESTADOCOD'},{av:'A7544AuxiliarTrDvNovoEmpresaId',fld:'AUXILIARTRDVNOVOEMPRESAID'},{av:'A7545AuxiliarTrDvNovoTipo',fld:'AUXILIARTRDVNOVOTIPO'},{av:'A7546AuxiliarTrDvNovoNumero',fld:'AUXILIARTRDVNOVONUMERO'},{av:'A7510AuxiliarTrDvNovoProdEmpId',fld:'AUXILIARTRDVNOVOPRODEMPID'},{av:'A7511AuxiliarTrDvNovoProdId',fld:'AUXILIARTRDVNOVOPRODID'},{av:'A7512AuxiliarTrDvNovoProdLote',fld:'AUXILIARTRDVNOVOPRODLOTE'},{av:'A7513AuxiliarTrDvNovoQtde',fld:'AUXILIARTRDVNOVOQTDE'},{av:'AV127SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV165NotaSaida',fld:'vNOTASAIDA'},{av:'AV46PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV49PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV166NotaSaidaItem',fld:'vNOTASAIDAITEM'},{av:'AV17ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV187ProdutoUnidadeVendaEmpId',fld:'vPRODUTOUNIDADEVENDAEMPID'},{av:'AV188ProdutoUnidadeVendaId',fld:'vPRODUTOUNIDADEVENDAID'},{av:'AV95TrocaDevolucaoNumero',fld:'vTROCADEVOLUCAONUMERO',hsh:true},{av:'AV111SdtAuxiliarTrDv',fld:'vSDTAUXILIARTRDV'},{av:'AV112SdtAuxiliarTrDvDevolucao',fld:'vSDTAUXILIARTRDVDEVOLUCAO'},{av:'AV19ModeTela',fld:'vMODETELA',hsh:true},{av:'AV118VendedorId',fld:'vVENDEDORID',hsh:true},{av:'AV173IdTrocaDevolucao',fld:'vIDTROCADEVOLUCAO'},{av:'AV189ValorSaldo',fld:'vVALORSALDO'},{av:'AV56EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV59AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2939ValorAtributoUsuarioAlt',fld:'VALORATRIBUTOUSUARIOALT'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV57Cont',fld:'vCONT'}],[{av:'gx.fn.getCtrlProperty("TABLOTE","Visible")',ctrl:'TABLOTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBLOTEVENC","Visible")',ctrl:'TBLOTEVENC',prop:'Visible'},{av:'AV42Tela',fld:'vTELA'},{av:'AV177SnTelaPermissao',fld:'vSNTELAPERMISSAO'},{av:'AV180SnPermitido',fld:'vSNPERMITIDO'},{av:'AV91TpErro',fld:'vTPERRO'},{av:'AV204GXLvl426',fld:'vGXLVL426'},{av:'AV149PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV179PrecoTipo',fld:'vPRECOTIPO'},{av:'AV181Mensagem',fld:'vMENSAGEM'},{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV169SdtPermissao',fld:'vSDTPERMISSAO'},{av:'AV178NomeSessao',fld:'vNOMESESSAO'},{av:'AV199TipoCampo',fld:'vTIPOCAMPO'},{av:'AV205GXLvl505',fld:'vGXLVL505'},{av:'AV206GXLvl517',fld:'vGXLVL517'},{av:'AV88ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'AV98ProdutoCasasDecimais',fld:'vPRODUTOCASASDECIMAIS'},{av:'AV197ProdutoSnControlaVEnc',fld:'vPRODUTOSNCONTROLAVENC'},{av:'AV102CodigoBarras',fld:'vCODIGOBARRAS'},{av:'AV100SnExisteCodBar',fld:'vSNEXISTECODBAR'},{av:'AV193ProdutoQtdeAtacado',fld:'vPRODUTOQTDEATACADO'},{av:'AV103ProdutoEmbalagem',fld:'vPRODUTOEMBALAGEM'},{av:'AV97ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'AV101TxtAux',fld:'vTXTAUX'},{av:'AV207GXLvl563',fld:'vGXLVL563'},{av:'AV194ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV209GXLvl604',fld:'vGXLVL604'},{av:'AV187ProdutoUnidadeVendaEmpId',fld:'vPRODUTOUNIDADEVENDAEMPID'},{av:'AV188ProdutoUnidadeVendaId',fld:'vPRODUTOUNIDADEVENDAID'},{av:'AV17ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV175SaidaTipoAcresDesc',fld:'vSAIDATIPOACRESDESC'},{av:'AV174SaidaDescAcresc',fld:'vSAIDADESCACRESC'},{av:'AV41Valor',fld:'vVALOR'},{av:'AV53Quantidade',fld:'vQUANTIDADE'},{av:'AV182Quantidade0',fld:'vQUANTIDADE0'},{av:'AV183Quantidade1',fld:'vQUANTIDADE1'},{av:'AV184Quantidade2',fld:'vQUANTIDADE2'},{av:'AV185Quantidade3',fld:'vQUANTIDADE3'},{av:'AV196LoteMedicamento',fld:'vLOTEMEDICAMENTO'},{av:'AV56EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV93LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'gx.fn.getCtrlProperty("LOTE1","Caption")',ctrl:'LOTE1',prop:'Caption'},{av:'gx.fn.getCtrlProperty("LOTE2","Caption")',ctrl:'LOTE2',prop:'Caption'},{av:'gx.fn.getCtrlProperty("LOTE3","Caption")',ctrl:'LOTE3',prop:'Caption'},{av:'gx.fn.getCtrlProperty("LOTE4","Caption")',ctrl:'LOTE4',prop:'Caption'},{av:'gx.fn.getCtrlProperty("LOTE5","Caption")',ctrl:'LOTE5',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO1","Visible")',ctrl:'vVALORATRIBUTO1',prop:'Visible'},{ctrl:'vVALORATRIBUTOCOMBO1'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO2","Visible")',ctrl:'vVALORATRIBUTO2',prop:'Visible'},{ctrl:'vVALORATRIBUTOCOMBO2'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO3","Visible")',ctrl:'vVALORATRIBUTO3',prop:'Visible'},{ctrl:'vVALORATRIBUTOCOMBO3'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO4","Visible")',ctrl:'vVALORATRIBUTO4',prop:'Visible'},{ctrl:'vVALORATRIBUTOCOMBO4'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO5","Visible")',ctrl:'vVALORATRIBUTO5',prop:'Visible'},{ctrl:'vVALORATRIBUTOCOMBO5'},{av:'AV57Cont',fld:'vCONT'},{av:'AV217GXLvl996',fld:'vGXLVL996'},{av:'AV58AtributoEsquemaSnVencimento',fld:'vATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV59AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV68SNMontaLote',fld:'vSNMONTALOTE'},{av:'AV28ValorAtributo1',fld:'vVALORATRIBUTO1'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO1","Enabled")',ctrl:'vVALORATRIBUTO1',prop:'Enabled'},{av:'AV60ComboOuEdit1',fld:'vCOMBOOUEDIT1'},{av:'AV29ValorAtributoCombo1',fld:'vVALORATRIBUTOCOMBO1'},{av:'AV67AtributoEsquemaCodigo1',fld:'vATRIBUTOESQUEMACODIGO1'},{av:'AV30ValorAtributo2',fld:'vVALORATRIBUTO2'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO2","Enabled")',ctrl:'vVALORATRIBUTO2',prop:'Enabled'},{av:'AV71ComboOuEdit2',fld:'vCOMBOOUEDIT2'},{av:'AV31ValorAtributoCombo2',fld:'vVALORATRIBUTOCOMBO2'},{av:'AV66AtributoEsquemaCodigo2',fld:'vATRIBUTOESQUEMACODIGO2'},{av:'AV32ValorAtributo3',fld:'vVALORATRIBUTO3'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO3","Enabled")',ctrl:'vVALORATRIBUTO3',prop:'Enabled'},{av:'AV72ComboOuEdit3',fld:'vCOMBOOUEDIT3'},{av:'AV33ValorAtributoCombo3',fld:'vVALORATRIBUTOCOMBO3'},{av:'AV65AtributoEsquemaCodigo3',fld:'vATRIBUTOESQUEMACODIGO3'},{av:'AV34ValorAtributo4',fld:'vVALORATRIBUTO4'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO4","Enabled")',ctrl:'vVALORATRIBUTO4',prop:'Enabled'},{av:'AV73ComboOuEdit4',fld:'vCOMBOOUEDIT4'},{av:'AV35ValorAtributoCombo4',fld:'vVALORATRIBUTOCOMBO4'},{av:'AV63AtributoEsquemaCodigo4',fld:'vATRIBUTOESQUEMACODIGO4'},{av:'AV36ValorAtributo5',fld:'vVALORATRIBUTO5'},{av:'gx.fn.getCtrlProperty("vVALORATRIBUTO5","Enabled")',ctrl:'vVALORATRIBUTO5',prop:'Enabled'},{av:'AV74ComboOuEdit5',fld:'vCOMBOOUEDIT5'},{av:'AV37ValorAtributoCombo5',fld:'vVALORATRIBUTOCOMBO5'},{av:'AV64AtributoEsquemaCodigo5',fld:'vATRIBUTOESQUEMACODIGO5'},{av:'AV94Combinacao',fld:'vCOMBINACAO'},{av:'AV211GXLvl755',fld:'vGXLVL755'},{av:'AV162AuxiliarTrDvTrnSaidaId',fld:'vAUXILIARTRDVTRNSAIDAID'},{av:'AV167TransacaoSaidaCFOPDenEstadoCodigo',fld:'vTRANSACAOSAIDACFOPDENESTADOCODIGO'},{av:'AV198AuxiliarTrDvNovoQtde',fld:'vAUXILIARTRDVNOVOQTDE'},{av:'AV165NotaSaida',fld:'vNOTASAIDA'},{av:'AV166NotaSaidaItem',fld:'vNOTASAIDAITEM'},{av:'AV170SnErro',fld:'vSNERRO'},{av:'AV113SdtAuxiliarTrDvNovo',fld:'vSDTAUXILIARTRDVNOVO'},{av:'AV160SdtAuxiliarTrDvNovoItem',fld:'vSDTAUXILIARTRDVNOVOITEM'},{av:'AV115ValorFinanceiroSaida',fld:'vVALORFINANCEIROSAIDA'},{av:'AV114ValorFinanceiroEntrada',fld:'vVALORFINANCEIROENTRADA'},{av:'AV173IdTrocaDevolucao',fld:'vIDTROCADEVOLUCAO'},{av:'AV77IdAuxiliar',fld:'vIDAUXILIAR',hsh:true},{av:'AV189ValorSaldo',fld:'vVALORSALDO'},{av:'AV61ContAux',fld:'vCONTAUX'},{av:'AV69ValorAtributoCodigoAux',fld:'vVALORATRIBUTOCODIGOAUX'},{av:'AV70ValorAtributoDescricaoAux',fld:'vVALORATRIBUTODESCRICAOAUX'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV42Tela',fld:'vTELA'},{av:'AV148PrecoId',fld:'vPRECOID'},{av:'AV87TpIdentificacaoProd',fld:'vTPIDENTIFICACAOPROD'},{av:'AV88ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV194ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV13ProdutoId',fld:'vPRODUTOID'}],[{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'AV88ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV194ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV17ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV42Tela',fld:'vTELA'},{av:'AV41Valor',fld:'vVALOR'},{av:'AV53Quantidade',fld:'vQUANTIDADE'},{av:'AV182Quantidade0',fld:'vQUANTIDADE0'},{av:'AV183Quantidade1',fld:'vQUANTIDADE1'},{av:'AV184Quantidade2',fld:'vQUANTIDADE2'},{av:'AV185Quantidade3',fld:'vQUANTIDADE3'},{av:'gx.fn.getCtrlProperty("TABLOTE","Visible")',ctrl:'TABLOTE',prop:'Visible'}]];
   this.EvtParms["'CONSULTAPRODUTO'"] = [[{av:'AV99FilialId',fld:'vFILIALID'},{av:'Gx_date',fld:'vTODAY'},{av:'AV137PrecoNulo',fld:'vPRECONULO'},{av:'AV133ProdutoCategoria',fld:'vPRODUTOCATEGORIA'},{av:'AV138IntAuxIn',fld:'vINTAUXIN'},{av:'AV132SNVenda',fld:'vSNVENDA'}],[{av:'AV194ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV88ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV139LoteProdutoCombinacaoParm',fld:'vLOTEPRODUTOCOMBINACAOPARM'},{av:'AV136ProdutoCodigoId',fld:'vPRODUTOCODIGOID'},{av:'AV135SubGrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV134GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV13ProdutoId',fld:'vPRODUTOID'}]];
   this.setPrompt("PROMPT_PRECOID", [41]);
   this.EnterCtrl = ["BTNAV1" ,"BTNAV2" ,"BTNAV3"];
   this.setVCMap("AV75TrocaDevolucaoEmpresaId", "vTROCADEVOLUCAOEMPRESAID", 0, "char");
   this.setVCMap("AV76TrocaDevolucaoTipo", "vTROCADEVOLUCAOTIPO", 0, "char");
   this.setVCMap("AV95TrocaDevolucaoNumero", "vTROCADEVOLUCAONUMERO", 0, "int");
   this.setVCMap("AV19ModeTela", "vMODETELA", 0, "char");
   this.setVCMap("AV190ValorSaldoParm", "vVALORSALDOPARM", 0, "decimal");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrartrocadevnovoitem());
