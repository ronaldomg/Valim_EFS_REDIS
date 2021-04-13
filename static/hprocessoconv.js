/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:59:24.3
*/
gx.evt.autoSkip = false;
gx.define('hprocessoconv', false, function () {
   this.ServerClass =  "hprocessoconv" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV69SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV73Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV50Notas=gx.fn.getControlValue("vNOTAS") ;
      this.AV51Autorizacoes=gx.fn.getControlValue("vAUTORIZACOES") ;
      this.AV46PedidoCompraEmpresaId=gx.fn.getControlValue("vPEDIDOCOMPRAEMPRESAID") ;
      this.AV54PessoaFantasia=gx.fn.getControlValue("vPESSOAFANTASIA") ;
      this.AV55ProcessoConvEmpresaIdAux=gx.fn.getControlValue("vPROCESSOCONVEMPRESAIDAUX") ;
      this.AV56ProcessoConvAnoAux=gx.fn.getIntegerValue("vPROCESSOCONVANOAUX",'.') ;
      this.AV57ProcessoConvNumeroAux=gx.fn.getIntegerValue("vPROCESSOCONVNUMEROAUX",'.') ;
      this.A3361PedidoCompraPessoaEmpId=gx.fn.getControlValue("PEDIDOCOMPRAPESSOAEMPID") ;
      this.A3362PedidoCompraPessoaId=gx.fn.getIntegerValue("PEDIDOCOMPRAPESSOAID",'.') ;
      this.A3778PedidoCompraPessoaFantasia=gx.fn.getControlValue("PEDIDOCOMPRAPESSOAFANTASIA") ;
   };
   this.Validv_Processoconvfornecid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVFORNECID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoconvnumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(92) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVNUMERO", gx.fn.currentGridRowImpl(92));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoconvano=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(92) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVANO", gx.fn.currentGridRowImpl(92));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convenioid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(92) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVENIOID", gx.fn.currentGridRowImpl(92));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoconvempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(92) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVEMPRESAID", gx.fn.currentGridRowImpl(92));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoconvfornecid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(92) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVFORNECID", gx.fn.currentGridRowImpl(92));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convenioempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(92) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVENIOEMPRESAID", gx.fn.currentGridRowImpl(92));
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
   this.Valid_Processoconvnumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(92) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVNUMERO", gx.fn.currentGridRowImpl(92));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoconvano=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(92) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVANO", gx.fn.currentGridRowImpl(92));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoconvempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(92) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVEMPRESAID", gx.fn.currentGridRowImpl(92));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11pp2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12pp2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16pp2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13pp2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14pp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15pp2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21pp2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22pp2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23pp2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e17pp2_client=function()
   {
      this.executeServerEvent("'CHAMAMODAL'", true, null, false, false);
   };
   this.e24pp2_client=function()
   {
      this.executeServerEvent("'ETIQUETA'", true, arguments[0], false, false);
   };
   this.e18pp2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGGERAL'", true, null, false, false);
   };
   this.e26pp2_client=function()
   {
      this.executeServerEvent("'CONSULTALOG'", true, arguments[0], false, false);
   };
   this.e27pp2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e28pp2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e29pp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,24,27,29,31,34,36,37,42,44,47,49,54,56,58,60,65,68,71,73,75,77,79,81,83,86,88,89,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,123,124,125,127,128,129,130,131,132,133,134];
   this.GXLastCtrlId =134;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",92,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hprocessoconv",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3374,93,"PROCESSOCONVNUMERO","","","ProcessoConvNumero","int",0,"px",8,8,"right",null,[],3374,"ProcessoConvNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3815,94,"PROCESSOCONVSITUACAO","","ProcessoConvSituacao","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit("Finalidade",95,"vFINALIDADE","","","Finalidade","svchar",0,"px",65,65,"left",null,[],"Finalidade","Finalidade",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2082,96,"CONVENIODESCRICAO","","","ConvenioDescricao","svchar",0,"px",40,40,"left",null,[],2082,"ConvenioDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Processoconvfornecfantasia",97,"vPROCESSOCONVFORNECFANTASIA","","","ProcessoConvFornecFantasia","svchar",0,"px",40,40,"left",null,[],"Processoconvfornecfantasia","ProcessoConvFornecFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3817,98,"PROCESSOCONVDATAINICIO","Dt.Início","","ProcessoConvDataInicio","date",0,"px",10,10,"right",null,[],3817,"ProcessoConvDataInicio",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3818,99,"PROCESSOCONVDATAVALIDADE","Dt.Validade","","ProcessoConvDataValidade","date",0,"px",10,10,"right",null,[],3818,"ProcessoConvDataValidade",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3820,100,"PROCESSOCONVVALOR","","","ProcessoConvValor","decimal",0,"px",22,22,"right",null,[],3820,"ProcessoConvValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Saldoprocesso",101,"vSALDOPROCESSO","Saldo","","SaldoProcesso","decimal",0,"px",12,12,"right",null,[],"Saldoprocesso","SaldoProcesso",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Saldoprocesso2",102,"vSALDOPROCESSO2","Saldo","","SaldoProcesso2","decimal",0,"px",22,22,"right",null,[],"Saldoprocesso2","SaldoProcesso2",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpetq","vBMPETQ",103,0,"px",17,"px","e24pp2_client","","Etq","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpnotas","vBMPNOTAS",104,0,"px",17,"px",null,"","Not","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpautorizacoes","vBMPAUTORIZACOES",105,0,"px",17,"px",null,"","Aut","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmplog","vBMPLOG",106,0,"px",17,"px","e26pp2_client","","Log","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",107,0,"px",17,"px","e21pp2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",108,0,"px",17,"px","e22pp2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",109,0,"px",17,"px","e23pp2_client","","Cons","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(4294,110,"PROCESSOCONVFORNECFANTASIA","Processo Conv Fornec Fantasia","","ProcessoConvFornecFantasia","svchar",0,"px",60,60,"left",null,[],4294,"ProcessoConvFornecFantasia",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3819,111,"PROCESSOCONVFINALIDADE","Finalidade","","ProcessoConvFinalidade","svchar",0,"px",100,80,"left",null,[],3819,"ProcessoConvFinalidade",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3373,112,"PROCESSOCONVANO","Ano Processo","","ProcessoConvAno","int",0,"px",4,4,"right",null,[],3373,"ProcessoConvAno",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1681,113,"CONVENIOID","Código do Convênio","","ConvenioId","int",0,"px",7,7,"right",null,[],1681,"ConvenioId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3372,114,"PROCESSOCONVEMPRESAID","Empresa","","ProcessoConvEmpresaId","char",0,"px",10,10,"left",null,[],3372,"ProcessoConvEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4296,115,"PROCESSOCONVPEDIDOCOMPRAFORN","Processo Conv Pedido Compra Forn","","ProcessoConvPedidoCompraForn","svchar",0,"px",300,80,"left",null,[],4296,"ProcessoConvPedidoCompraForn",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4293,116,"PROCESSOCONVFORNECID","Processo Conv Fornec Id","","ProcessoConvFornecId","int",0,"px",7,7,"right",null,[],4293,"ProcessoConvFornecId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1680,117,"CONVENIOEMPRESAID","Empresa do Convênio","","ConvenioEmpresaId","char",0,"px",10,10,"left",null,[],1680,"ConvenioEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL7", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE13",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVANO",gxz:"ZV27ProcessoConvAno",gxold:"OV27ProcessoConvAno",gxvar:"AV27ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ProcessoConvAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVANO",gx.O.AV27ProcessoConvAno,0)},c2v:function(){gx.O.AV27ProcessoConvAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVANO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVNUMERO",gxz:"ZV28ProcessoConvNumero",gxold:"OV28ProcessoConvNumero",gxvar:"AV28ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ProcessoConvNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVNUMERO",gx.O.AV28ProcessoConvNumero,0)},c2v:function(){gx.O.AV28ProcessoConvNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[24]={fld:"TABLE14",grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDTINI",gxz:"ZV32Dtini",gxold:"OV32Dtini",gxvar:"AV32Dtini",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Dtini=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32Dtini=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINI",gx.O.AV32Dtini,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV32Dtini=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDTFIM",gxz:"ZV33Dtfim",gxold:"OV33Dtfim",gxvar:"AV33Dtfim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Dtfim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33Dtfim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFIM",gx.O.AV33Dtfim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33Dtfim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={fld:"TXTTITAPL9", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Processoconvfornecid,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVFORNECID",gxz:"ZV59ProcessoConvFornecId",gxold:"OV59ProcessoConvFornecId",gxvar:"AV59ProcessoConvFornecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59ProcessoConvFornecId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59ProcessoConvFornecId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVFORNECID",gx.O.AV59ProcessoConvFornecId,0)},c2v:function(){gx.O.AV59ProcessoConvFornecId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVFORNECID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVFORNECFANTASIAAUX",gxz:"ZV64ProcessoConvFornecFantasiaAux",gxold:"OV64ProcessoConvFornecFantasiaAux",gxvar:"AV64ProcessoConvFornecFantasiaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64ProcessoConvFornecFantasiaAux=Value},v2z:function(Value){gx.O.ZV64ProcessoConvFornecFantasiaAux=Value},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVFORNECFANTASIAAUX",gx.O.AV64ProcessoConvFornecFantasiaAux,0)},c2v:function(){gx.O.AV64ProcessoConvFornecFantasiaAux=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOCONVFORNECFANTASIAAUX")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[44]={fld:"TABLE12",grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOID",gxz:"ZV30ConvenioId",gxold:"OV30ConvenioId",gxvar:"AV30ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV30ConvenioId,0)},c2v:function(){gx.O.AV30ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV31ConvenioDescricao",gxold:"OV31ConvenioDescricao",gxvar:"AV31ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV31ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV31ConvenioDescricao,0)},c2v:function(){gx.O.AV31ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVFINALIDADE",gxz:"ZV52ProcessoConvFinalidade",gxold:"OV52ProcessoConvFinalidade",gxvar:"AV52ProcessoConvFinalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52ProcessoConvFinalidade=Value},v2z:function(Value){gx.O.ZV52ProcessoConvFinalidade=Value},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVFINALIDADE",gx.O.AV52ProcessoConvFinalidade,0)},c2v:function(){gx.O.AV52ProcessoConvFinalidade=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOCONVFINALIDADE")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVSITUACAO",gxz:"ZV29ProcessoConvSituacao",gxold:"OV29ProcessoConvSituacao",gxvar:"AV29ProcessoConvSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29ProcessoConvSituacao=Value},v2z:function(Value){gx.O.ZV29ProcessoConvSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPROCESSOCONVSITUACAO",gx.O.AV29ProcessoConvSituacao)},c2v:function(){gx.O.AV29ProcessoConvSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOCONVSITUACAO")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TABLE4",grid:0};
   GXValidFnc[68]={fld:"TABLE9",grid:0};
   GXValidFnc[71]={fld:"IMAGE2",grid:0};
   GXValidFnc[73]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[75]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[77]={fld:"IMAGE1",grid:0};
   GXValidFnc[79]={fld:"BTNHELP",grid:0};
   GXValidFnc[81]={fld:"BTNLOG",grid:0};
   GXValidFnc[83]={fld:"TABLE5",grid:0};
   GXValidFnc[86]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:this.Valid_Processoconvnumero,isvalid:null,rgrid:[],fld:"PROCESSOCONVNUMERO",gxz:"Z3374ProcessoConvNumero",gxold:"O3374ProcessoConvNumero",gxvar:"A3374ProcessoConvNumero",ucs:[],op:[115,110,96],ip:[115,110,96,93,112,114,116,113,117],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3374ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3374ProcessoConvNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVNUMERO",row || gx.fn.currentGridRowImpl(92),gx.O.A3374ProcessoConvNumero,0)},c2v:function(){gx.O.A3374ProcessoConvNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOCONVNUMERO",row || gx.fn.currentGridRowImpl(92),'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVSITUACAO",gxz:"Z3815ProcessoConvSituacao",gxold:"O3815ProcessoConvSituacao",gxvar:"A3815ProcessoConvSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3815ProcessoConvSituacao=Value},v2z:function(Value){gx.O.Z3815ProcessoConvSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PROCESSOCONVSITUACAO",row || gx.fn.currentGridRowImpl(92),gx.O.A3815ProcessoConvSituacao)},c2v:function(){gx.O.A3815ProcessoConvSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOCONVSITUACAO",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"svchar",len:65,dec:0,sign:false,ro:0,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vFINALIDADE",gxz:"ZV35Finalidade",gxold:"OV35Finalidade",gxvar:"AV35Finalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV35Finalidade=Value},v2z:function(Value){gx.O.ZV35Finalidade=Value},v2c:function(row){gx.fn.setGridControlValue("vFINALIDADE",row || gx.fn.currentGridRowImpl(92),gx.O.AV35Finalidade,0)},c2v:function(){gx.O.AV35Finalidade=this.val()},val:function(row){return gx.fn.getGridControlValue("vFINALIDADE",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIODESCRICAO",gxz:"Z2082ConvenioDescricao",gxold:"O2082ConvenioDescricao",gxvar:"A2082ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2082ConvenioDescricao=Value},v2z:function(Value){gx.O.Z2082ConvenioDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIODESCRICAO",row || gx.fn.currentGridRowImpl(92),gx.O.A2082ConvenioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2082ConvenioDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIODESCRICAO",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVFORNECFANTASIA",gxz:"ZV53ProcessoConvFornecFantasia",gxold:"OV53ProcessoConvFornecFantasia",gxvar:"AV53ProcessoConvFornecFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV53ProcessoConvFornecFantasia=Value},v2z:function(Value){gx.O.ZV53ProcessoConvFornecFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("vPROCESSOCONVFORNECFANTASIA",row || gx.fn.currentGridRowImpl(92),gx.O.AV53ProcessoConvFornecFantasia,0)},c2v:function(){gx.O.AV53ProcessoConvFornecFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROCESSOCONVFORNECFANTASIA",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[98]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVDATAINICIO",gxz:"Z3817ProcessoConvDataInicio",gxold:"O3817ProcessoConvDataInicio",gxvar:"A3817ProcessoConvDataInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3817ProcessoConvDataInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3817ProcessoConvDataInicio=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVDATAINICIO",row || gx.fn.currentGridRowImpl(92),gx.O.A3817ProcessoConvDataInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3817ProcessoConvDataInicio=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PROCESSOCONVDATAINICIO",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[99]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVDATAVALIDADE",gxz:"Z3818ProcessoConvDataValidade",gxold:"O3818ProcessoConvDataValidade",gxvar:"A3818ProcessoConvDataValidade",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3818ProcessoConvDataValidade=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3818ProcessoConvDataValidade=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVDATAVALIDADE",row || gx.fn.currentGridRowImpl(92),gx.O.A3818ProcessoConvDataValidade,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3818ProcessoConvDataValidade=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PROCESSOCONVDATAVALIDADE",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[100]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVVALOR",gxz:"Z3820ProcessoConvValor",gxold:"O3820ProcessoConvValor",gxvar:"A3820ProcessoConvValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3820ProcessoConvValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3820ProcessoConvValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PROCESSOCONVVALOR",row || gx.fn.currentGridRowImpl(92),gx.O.A3820ProcessoConvValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3820ProcessoConvValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PROCESSOCONVVALOR",row || gx.fn.currentGridRowImpl(92),'.',',')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:2,type:"decimal",len:10,dec:2,sign:true,pic:"Z,ZZZ,ZZ9.99",ro:0,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOPROCESSO",gxz:"ZV44SaldoProcesso",gxold:"OV44SaldoProcesso",gxvar:"AV44SaldoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV44SaldoProcesso=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV44SaldoProcesso=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vSALDOPROCESSO",row || gx.fn.currentGridRowImpl(92),gx.O.AV44SaldoProcesso,2,',')},c2v:function(){gx.O.AV44SaldoProcesso=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vSALDOPROCESSO",row || gx.fn.currentGridRowImpl(92),'.',',')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOPROCESSO2",gxz:"ZV68SaldoProcesso2",gxold:"OV68SaldoProcesso2",gxvar:"AV68SaldoProcesso2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV68SaldoProcesso2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV68SaldoProcesso2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vSALDOPROCESSO2",row || gx.fn.currentGridRowImpl(92),gx.O.AV68SaldoProcesso2,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV68SaldoProcesso2=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vSALDOPROCESSO2",row || gx.fn.currentGridRowImpl(92),'.',',')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPETQ",gxz:"ZV49bmpEtq",gxold:"OV49bmpEtq",gxvar:"AV49bmpEtq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV49bmpEtq=Value},v2z:function(Value){gx.O.ZV49bmpEtq=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPETQ",row || gx.fn.currentGridRowImpl(92),gx.O.AV49bmpEtq,gx.O.AV81Bmpetq_GXI)},c2v:function(){gx.O.AV81Bmpetq_GXI=this.val_GXI();gx.O.AV49bmpEtq=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPETQ",row || gx.fn.currentGridRowImpl(92))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPETQ_GXI",row || gx.fn.currentGridRowImpl(92))}, gxvar_GXI:'AV81Bmpetq_GXI',nac:gx.falseFn};
   GXValidFnc[104]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPNOTAS",gxz:"ZV41bmpNotas",gxold:"OV41bmpNotas",gxvar:"AV41bmpNotas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV41bmpNotas=Value},v2z:function(Value){gx.O.ZV41bmpNotas=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPNOTAS",row || gx.fn.currentGridRowImpl(92),gx.O.AV41bmpNotas,gx.O.AV78Bmpnotas_GXI)},c2v:function(){gx.O.AV78Bmpnotas_GXI=this.val_GXI();gx.O.AV41bmpNotas=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPNOTAS",row || gx.fn.currentGridRowImpl(92))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPNOTAS_GXI",row || gx.fn.currentGridRowImpl(92))}, gxvar_GXI:'AV78Bmpnotas_GXI',nac:gx.falseFn};
   GXValidFnc[105]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPAUTORIZACOES",gxz:"ZV42bmpAutorizacoes",gxold:"OV42bmpAutorizacoes",gxvar:"AV42bmpAutorizacoes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV42bmpAutorizacoes=Value},v2z:function(Value){gx.O.ZV42bmpAutorizacoes=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPAUTORIZACOES",row || gx.fn.currentGridRowImpl(92),gx.O.AV42bmpAutorizacoes,gx.O.AV79Bmpautorizacoes_GXI)},c2v:function(){gx.O.AV79Bmpautorizacoes_GXI=this.val_GXI();gx.O.AV42bmpAutorizacoes=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPAUTORIZACOES",row || gx.fn.currentGridRowImpl(92))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPAUTORIZACOES_GXI",row || gx.fn.currentGridRowImpl(92))}, gxvar_GXI:'AV79Bmpautorizacoes_GXI',nac:gx.falseFn};
   GXValidFnc[106]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLOG",gxz:"ZV67bmpLog",gxold:"OV67bmpLog",gxvar:"AV67bmpLog",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV67bmpLog=Value},v2z:function(Value){gx.O.ZV67bmpLog=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLOG",row || gx.fn.currentGridRowImpl(92),gx.O.AV67bmpLog,gx.O.AV80Bmplog_GXI)},c2v:function(){gx.O.AV80Bmplog_GXI=this.val_GXI();gx.O.AV67bmpLog=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLOG",row || gx.fn.currentGridRowImpl(92))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLOG_GXI",row || gx.fn.currentGridRowImpl(92))}, gxvar_GXI:'AV80Bmplog_GXI',nac:gx.falseFn};
   GXValidFnc[107]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(92),gx.O.AV7bmpAlt,gx.O.AV75Bmpalt_GXI)},c2v:function(){gx.O.AV75Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(92))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(92))}, gxvar_GXI:'AV75Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[108]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(92),gx.O.AV8bmpExc,gx.O.AV76Bmpexc_GXI)},c2v:function(){gx.O.AV76Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(92))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(92))}, gxvar_GXI:'AV76Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[109]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(92),gx.O.AV16bmpCon,gx.O.AV77Bmpcon_GXI)},c2v:function(){gx.O.AV77Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(92))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(92))}, gxvar_GXI:'AV77Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[110]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVFORNECFANTASIA",gxz:"Z4294ProcessoConvFornecFantasia",gxold:"O4294ProcessoConvFornecFantasia",gxvar:"A4294ProcessoConvFornecFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4294ProcessoConvFornecFantasia=Value},v2z:function(Value){gx.O.Z4294ProcessoConvFornecFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVFORNECFANTASIA",row || gx.fn.currentGridRowImpl(92),gx.O.A4294ProcessoConvFornecFantasia,0)},c2v:function(){gx.O.A4294ProcessoConvFornecFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOCONVFORNECFANTASIA",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[111]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVFINALIDADE",gxz:"Z3819ProcessoConvFinalidade",gxold:"O3819ProcessoConvFinalidade",gxvar:"A3819ProcessoConvFinalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3819ProcessoConvFinalidade=Value},v2z:function(Value){gx.O.Z3819ProcessoConvFinalidade=Value},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVFINALIDADE",row || gx.fn.currentGridRowImpl(92),gx.O.A3819ProcessoConvFinalidade,0)},c2v:function(){gx.O.A3819ProcessoConvFinalidade=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOCONVFINALIDADE",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[112]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:this.Valid_Processoconvano,isvalid:null,rgrid:[],fld:"PROCESSOCONVANO",gxz:"Z3373ProcessoConvAno",gxold:"O3373ProcessoConvAno",gxvar:"A3373ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3373ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3373ProcessoConvAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVANO",row || gx.fn.currentGridRowImpl(92),gx.O.A3373ProcessoConvAno,0)},c2v:function(){gx.O.A3373ProcessoConvAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOCONVANO",row || gx.fn.currentGridRowImpl(92),'.')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:this.Valid_Convenioid,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOID",row || gx.fn.currentGridRowImpl(92),gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVENIOID",row || gx.fn.currentGridRowImpl(92),'.')},nac:gx.falseFn};
   GXValidFnc[114]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:this.Valid_Processoconvempresaid,isvalid:null,rgrid:[],fld:"PROCESSOCONVEMPRESAID",gxz:"Z3372ProcessoConvEmpresaId",gxold:"O3372ProcessoConvEmpresaId",gxvar:"A3372ProcessoConvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3372ProcessoConvEmpresaId=Value},v2z:function(Value){gx.O.Z3372ProcessoConvEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVEMPRESAID",row || gx.fn.currentGridRowImpl(92),gx.O.A3372ProcessoConvEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3372ProcessoConvEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOCONVEMPRESAID",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[115]={lvl:2,type:"svchar",len:300,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVPEDIDOCOMPRAFORN",gxz:"Z4296ProcessoConvPedidoCompraForn",gxold:"O4296ProcessoConvPedidoCompraForn",gxvar:"A4296ProcessoConvPedidoCompraForn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4296ProcessoConvPedidoCompraForn=Value},v2z:function(Value){gx.O.Z4296ProcessoConvPedidoCompraForn=Value},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVPEDIDOCOMPRAFORN",row || gx.fn.currentGridRowImpl(92),gx.O.A4296ProcessoConvPedidoCompraForn,0)},c2v:function(){gx.O.A4296ProcessoConvPedidoCompraForn=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOCONVPEDIDOCOMPRAFORN",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[116]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:this.Valid_Processoconvfornecid,isvalid:null,rgrid:[],fld:"PROCESSOCONVFORNECID",gxz:"Z4293ProcessoConvFornecId",gxold:"O4293ProcessoConvFornecId",gxvar:"A4293ProcessoConvFornecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4293ProcessoConvFornecId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4293ProcessoConvFornecId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVFORNECID",row || gx.fn.currentGridRowImpl(92),gx.O.A4293ProcessoConvFornecId,0)},c2v:function(){gx.O.A4293ProcessoConvFornecId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOCONVFORNECID",row || gx.fn.currentGridRowImpl(92),'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:this.Valid_Convenioempresaid,isvalid:null,rgrid:[],fld:"CONVENIOEMPRESAID",gxz:"Z1680ConvenioEmpresaId",gxold:"O1680ConvenioEmpresaId",gxvar:"A1680ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1680ConvenioEmpresaId=Value},v2z:function(Value){gx.O.Z1680ConvenioEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOEMPRESAID",row || gx.fn.currentGridRowImpl(92),gx.O.A1680ConvenioEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1680ConvenioEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOEMPRESAID",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[123]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV70Qtde",gxold:"OV70Qtde",gxvar:"AV70Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV70Qtde,0)},c2v:function(){gx.O.AV70Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[124]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"JS", format:2,grid:0};
   GXValidFnc[128]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV34ConvenioEmpresaId",gxold:"OV34ConvenioEmpresaId",gxvar:"AV34ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV34ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV34ConvenioEmpresaId,0)},c2v:function(){gx.O.AV34ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV63PessoaEmpresaId",gxold:"OV63PessoaEmpresaId",gxvar:"AV63PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV63PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV63PessoaEmpresaId,0)},c2v:function(){gx.O.AV63PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV62Sim",gxold:"OV62Sim",gxvar:"AV62Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62Sim=Value},v2z:function(Value){gx.O.ZV62Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV62Sim,0)},c2v:function(){gx.O.AV62Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV61Nao",gxold:"OV61Nao",gxvar:"AV61Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61Nao=Value},v2z:function(Value){gx.O.ZV61Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV61Nao,0)},c2v:function(){gx.O.AV61Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVFORNECIDAUX",gxz:"ZV60ProcessoConvFornecIdAux",gxold:"OV60ProcessoConvFornecIdAux",gxvar:"AV60ProcessoConvFornecIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60ProcessoConvFornecIdAux=Value},v2z:function(Value){gx.O.ZV60ProcessoConvFornecIdAux=Value},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVFORNECIDAUX",gx.O.AV60ProcessoConvFornecIdAux,0)},c2v:function(){gx.O.AV60ProcessoConvFornecIdAux=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOCONVFORNECIDAUX")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"PROMPT_PROCESSOCONVFORNECID",grid:0};
   GXValidFnc[134]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV27ProcessoConvAno = 0 ;
   this.ZV27ProcessoConvAno = 0 ;
   this.OV27ProcessoConvAno = 0 ;
   this.AV28ProcessoConvNumero = 0 ;
   this.ZV28ProcessoConvNumero = 0 ;
   this.OV28ProcessoConvNumero = 0 ;
   this.AV32Dtini = gx.date.nullDate() ;
   this.ZV32Dtini = gx.date.nullDate() ;
   this.OV32Dtini = gx.date.nullDate() ;
   this.AV33Dtfim = gx.date.nullDate() ;
   this.ZV33Dtfim = gx.date.nullDate() ;
   this.OV33Dtfim = gx.date.nullDate() ;
   this.AV59ProcessoConvFornecId = 0 ;
   this.ZV59ProcessoConvFornecId = 0 ;
   this.OV59ProcessoConvFornecId = 0 ;
   this.AV64ProcessoConvFornecFantasiaAux = "" ;
   this.ZV64ProcessoConvFornecFantasiaAux = "" ;
   this.OV64ProcessoConvFornecFantasiaAux = "" ;
   this.AV30ConvenioId = 0 ;
   this.ZV30ConvenioId = 0 ;
   this.OV30ConvenioId = 0 ;
   this.AV31ConvenioDescricao = "" ;
   this.ZV31ConvenioDescricao = "" ;
   this.OV31ConvenioDescricao = "" ;
   this.AV52ProcessoConvFinalidade = "" ;
   this.ZV52ProcessoConvFinalidade = "" ;
   this.OV52ProcessoConvFinalidade = "" ;
   this.AV29ProcessoConvSituacao = "" ;
   this.ZV29ProcessoConvSituacao = "" ;
   this.OV29ProcessoConvSituacao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3374ProcessoConvNumero = 0 ;
   this.O3374ProcessoConvNumero = 0 ;
   this.Z3815ProcessoConvSituacao = "" ;
   this.O3815ProcessoConvSituacao = "" ;
   this.ZV35Finalidade = "" ;
   this.OV35Finalidade = "" ;
   this.Z2082ConvenioDescricao = "" ;
   this.O2082ConvenioDescricao = "" ;
   this.ZV53ProcessoConvFornecFantasia = "" ;
   this.OV53ProcessoConvFornecFantasia = "" ;
   this.Z3817ProcessoConvDataInicio = gx.date.nullDate() ;
   this.O3817ProcessoConvDataInicio = gx.date.nullDate() ;
   this.Z3818ProcessoConvDataValidade = gx.date.nullDate() ;
   this.O3818ProcessoConvDataValidade = gx.date.nullDate() ;
   this.Z3820ProcessoConvValor = 0 ;
   this.O3820ProcessoConvValor = 0 ;
   this.ZV44SaldoProcesso = 0 ;
   this.OV44SaldoProcesso = 0 ;
   this.ZV68SaldoProcesso2 = 0 ;
   this.OV68SaldoProcesso2 = 0 ;
   this.ZV49bmpEtq = "" ;
   this.OV49bmpEtq = "" ;
   this.ZV41bmpNotas = "" ;
   this.OV41bmpNotas = "" ;
   this.ZV42bmpAutorizacoes = "" ;
   this.OV42bmpAutorizacoes = "" ;
   this.ZV67bmpLog = "" ;
   this.OV67bmpLog = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z4294ProcessoConvFornecFantasia = "" ;
   this.O4294ProcessoConvFornecFantasia = "" ;
   this.Z3819ProcessoConvFinalidade = "" ;
   this.O3819ProcessoConvFinalidade = "" ;
   this.Z3373ProcessoConvAno = 0 ;
   this.O3373ProcessoConvAno = 0 ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.Z3372ProcessoConvEmpresaId = "" ;
   this.O3372ProcessoConvEmpresaId = "" ;
   this.Z4296ProcessoConvPedidoCompraForn = "" ;
   this.O4296ProcessoConvPedidoCompraForn = "" ;
   this.Z4293ProcessoConvFornecId = 0 ;
   this.O4293ProcessoConvFornecId = 0 ;
   this.Z1680ConvenioEmpresaId = "" ;
   this.O1680ConvenioEmpresaId = "" ;
   this.AV70Qtde = 0 ;
   this.ZV70Qtde = 0 ;
   this.OV70Qtde = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV34ConvenioEmpresaId = "" ;
   this.ZV34ConvenioEmpresaId = "" ;
   this.OV34ConvenioEmpresaId = "" ;
   this.AV63PessoaEmpresaId = "" ;
   this.ZV63PessoaEmpresaId = "" ;
   this.OV63PessoaEmpresaId = "" ;
   this.AV62Sim = "" ;
   this.ZV62Sim = "" ;
   this.OV62Sim = "" ;
   this.AV61Nao = "" ;
   this.ZV61Nao = "" ;
   this.OV61Nao = "" ;
   this.AV60ProcessoConvFornecIdAux = "" ;
   this.ZV60ProcessoConvFornecIdAux = "" ;
   this.OV60ProcessoConvFornecIdAux = "" ;
   this.AV27ProcessoConvAno = 0 ;
   this.AV28ProcessoConvNumero = 0 ;
   this.AV32Dtini = gx.date.nullDate() ;
   this.AV33Dtfim = gx.date.nullDate() ;
   this.AV59ProcessoConvFornecId = 0 ;
   this.AV64ProcessoConvFornecFantasiaAux = "" ;
   this.AV30ConvenioId = 0 ;
   this.AV31ConvenioDescricao = "" ;
   this.AV52ProcessoConvFinalidade = "" ;
   this.AV29ProcessoConvSituacao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV70Qtde = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV34ConvenioEmpresaId = "" ;
   this.AV63PessoaEmpresaId = "" ;
   this.AV62Sim = "" ;
   this.AV61Nao = "" ;
   this.AV60ProcessoConvFornecIdAux = "" ;
   this.A4292ProcessoConvFornecEmpId = "" ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3815ProcessoConvSituacao = "" ;
   this.AV35Finalidade = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.AV53ProcessoConvFornecFantasia = "" ;
   this.A3817ProcessoConvDataInicio = gx.date.nullDate() ;
   this.A3818ProcessoConvDataValidade = gx.date.nullDate() ;
   this.A3820ProcessoConvValor = 0 ;
   this.AV44SaldoProcesso = 0 ;
   this.AV68SaldoProcesso2 = 0 ;
   this.AV49bmpEtq = "" ;
   this.AV41bmpNotas = "" ;
   this.AV42bmpAutorizacoes = "" ;
   this.AV67bmpLog = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A4294ProcessoConvFornecFantasia = "" ;
   this.A3819ProcessoConvFinalidade = "" ;
   this.A3373ProcessoConvAno = 0 ;
   this.A1681ConvenioId = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.A4296ProcessoConvPedidoCompraForn = "" ;
   this.A4293ProcessoConvFornecId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A3362PedidoCompraPessoaId = 0 ;
   this.A3361PedidoCompraPessoaEmpId = "" ;
   this.A3778PedidoCompraPessoaFantasia = "" ;
   this.AV69SnRecuperaFiltro = "" ;
   this.AV73Pgmname = "" ;
   this.AV50Notas = "" ;
   this.AV51Autorizacoes = "" ;
   this.AV46PedidoCompraEmpresaId = "" ;
   this.AV54PessoaFantasia = "" ;
   this.AV55ProcessoConvEmpresaIdAux = "" ;
   this.AV56ProcessoConvAnoAux = 0 ;
   this.AV57ProcessoConvNumeroAux = 0 ;
   this.Events = {"e11pp2_client": ["'ANTERIOR'", true] ,"e12pp2_client": ["'PROXIMO'", true] ,"e16pp2_client": ["VPAGINA.CLICK", true] ,"e13pp2_client": ["'NOVO'", true] ,"e14pp2_client": ["'FECHAR'", true] ,"e15pp2_client": ["'PROCURAR'", true] ,"e21pp2_client": ["'ALTERAR'", true] ,"e22pp2_client": ["'EXCLUIR'", true] ,"e23pp2_client": ["'CONSULTAR'", true] ,"e17pp2_client": ["'CHAMAMODAL'", true] ,"e24pp2_client": ["'ETIQUETA'", true] ,"e18pp2_client": ["'CONSULTALOGGERAL'", true] ,"e26pp2_client": ["'CONSULTALOG'", true] ,"e27pp2_client": ["'ATUALIZAPAGINA'", true] ,"e28pp2_client": ["ENTER", true] ,"e29pp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41bmpNotas',fld:'vBMPNOTAS'},{av:'gx.fn.getCtrlProperty("vBMPNOTAS","Tooltiptext")',ctrl:'vBMPNOTAS',prop:'Tooltiptext'},{av:'AV42bmpAutorizacoes',fld:'vBMPAUTORIZACOES'},{av:'gx.fn.getCtrlProperty("vBMPAUTORIZACOES","Tooltiptext")',ctrl:'vBMPAUTORIZACOES',prop:'Tooltiptext'},{av:'AV67bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV49bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV69SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'AV46PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3820ProcessoConvValor',fld:'PROCESSOCONVVALOR'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A4293ProcessoConvFornecId',fld:'PROCESSOCONVFORNECID'},{av:'A4294ProcessoConvFornecFantasia',fld:'PROCESSOCONVFORNECFANTASIA'},{av:'AV54PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV55ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV56ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV57ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41bmpNotas',fld:'vBMPNOTAS'},{av:'gx.fn.getCtrlProperty("vBMPNOTAS","Tooltiptext")',ctrl:'vBMPNOTAS',prop:'Tooltiptext'},{av:'AV42bmpAutorizacoes',fld:'vBMPAUTORIZACOES'},{av:'gx.fn.getCtrlProperty("vBMPAUTORIZACOES","Tooltiptext")',ctrl:'vBMPAUTORIZACOES',prop:'Tooltiptext'},{av:'AV67bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV49bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV69SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'AV46PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3820ProcessoConvValor',fld:'PROCESSOCONVVALOR'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A4293ProcessoConvFornecId',fld:'PROCESSOCONVFORNECID'},{av:'A4294ProcessoConvFornecFantasia',fld:'PROCESSOCONVFORNECFANTASIA'},{av:'AV54PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV55ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV56ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV57ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'}],[{ctrl:'PROCESSOCONVNUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROCESSOCONVNUMERO","Title")',ctrl:'PROCESSOCONVNUMERO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PROCESSOCONVSITUACAO'},{ctrl:'vFINALIDADE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vFINALIDADE","Title")',ctrl:'vFINALIDADE',prop:'Title'},{ctrl:'CONVENIODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIODESCRICAO","Title")',ctrl:'CONVENIODESCRICAO',prop:'Title'},{ctrl:'vPROCESSOCONVFORNECFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vPROCESSOCONVFORNECFANTASIA","Title")',ctrl:'vPROCESSOCONVFORNECFANTASIA',prop:'Title'},{ctrl:'PROCESSOCONVVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROCESSOCONVVALOR","Title")',ctrl:'PROCESSOCONVVALOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV69SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41bmpNotas',fld:'vBMPNOTAS'},{av:'gx.fn.getCtrlProperty("vBMPNOTAS","Tooltiptext")',ctrl:'vBMPNOTAS',prop:'Tooltiptext'},{av:'AV42bmpAutorizacoes',fld:'vBMPAUTORIZACOES'},{av:'gx.fn.getCtrlProperty("vBMPAUTORIZACOES","Tooltiptext")',ctrl:'vBMPAUTORIZACOES',prop:'Tooltiptext'},{av:'AV67bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV49bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV69SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'AV46PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3820ProcessoConvValor',fld:'PROCESSOCONVVALOR'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A4293ProcessoConvFornecId',fld:'PROCESSOCONVFORNECID'},{av:'A4294ProcessoConvFornecFantasia',fld:'PROCESSOCONVFORNECFANTASIA'},{av:'AV54PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV55ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV56ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV57ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41bmpNotas',fld:'vBMPNOTAS'},{av:'gx.fn.getCtrlProperty("vBMPNOTAS","Tooltiptext")',ctrl:'vBMPNOTAS',prop:'Tooltiptext'},{av:'AV42bmpAutorizacoes',fld:'vBMPAUTORIZACOES'},{av:'gx.fn.getCtrlProperty("vBMPAUTORIZACOES","Tooltiptext")',ctrl:'vBMPAUTORIZACOES',prop:'Tooltiptext'},{av:'AV67bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV49bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV69SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'AV46PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3820ProcessoConvValor',fld:'PROCESSOCONVVALOR'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A4293ProcessoConvFornecId',fld:'PROCESSOCONVFORNECID'},{av:'A4294ProcessoConvFornecFantasia',fld:'PROCESSOCONVFORNECFANTASIA'},{av:'AV54PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV55ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV56ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV57ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41bmpNotas',fld:'vBMPNOTAS'},{av:'gx.fn.getCtrlProperty("vBMPNOTAS","Tooltiptext")',ctrl:'vBMPNOTAS',prop:'Tooltiptext'},{av:'AV42bmpAutorizacoes',fld:'vBMPAUTORIZACOES'},{av:'gx.fn.getCtrlProperty("vBMPAUTORIZACOES","Tooltiptext")',ctrl:'vBMPAUTORIZACOES',prop:'Tooltiptext'},{av:'AV67bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV49bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV69SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'AV46PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3820ProcessoConvValor',fld:'PROCESSOCONVVALOR'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A4293ProcessoConvFornecId',fld:'PROCESSOCONVFORNECID'},{av:'A4294ProcessoConvFornecFantasia',fld:'PROCESSOCONVFORNECFANTASIA'},{av:'AV54PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV55ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV56ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV57ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV73Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV73Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41bmpNotas',fld:'vBMPNOTAS'},{av:'gx.fn.getCtrlProperty("vBMPNOTAS","Tooltiptext")',ctrl:'vBMPNOTAS',prop:'Tooltiptext'},{av:'AV42bmpAutorizacoes',fld:'vBMPAUTORIZACOES'},{av:'gx.fn.getCtrlProperty("vBMPAUTORIZACOES","Tooltiptext")',ctrl:'vBMPAUTORIZACOES',prop:'Tooltiptext'},{av:'AV67bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV49bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV69SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'AV46PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3820ProcessoConvValor',fld:'PROCESSOCONVVALOR'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A4293ProcessoConvFornecId',fld:'PROCESSOCONVFORNECID'},{av:'A4294ProcessoConvFornecFantasia',fld:'PROCESSOCONVFORNECFANTASIA'},{av:'AV54PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV55ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV56ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV57ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV70Qtde',fld:'vQTDE'}],[{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV83GXLvl351',fld:'vGXLVL351'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV73Pgmname',fld:'vPGMNAME'}],[{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV73Pgmname',fld:'vPGMNAME'}],[{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV73Pgmname',fld:'vPGMNAME'}],[{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CHAMAMODAL'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41bmpNotas',fld:'vBMPNOTAS'},{av:'gx.fn.getCtrlProperty("vBMPNOTAS","Tooltiptext")',ctrl:'vBMPNOTAS',prop:'Tooltiptext'},{av:'AV42bmpAutorizacoes',fld:'vBMPAUTORIZACOES'},{av:'gx.fn.getCtrlProperty("vBMPAUTORIZACOES","Tooltiptext")',ctrl:'vBMPAUTORIZACOES',prop:'Tooltiptext'},{av:'AV67bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV49bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV69SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'AV46PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3820ProcessoConvValor',fld:'PROCESSOCONVVALOR'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A4293ProcessoConvFornecId',fld:'PROCESSOCONVFORNECID'},{av:'A4294ProcessoConvFornecFantasia',fld:'PROCESSOCONVFORNECFANTASIA'},{av:'AV54PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV55ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV56ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV57ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ETIQUETA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41bmpNotas',fld:'vBMPNOTAS'},{av:'gx.fn.getCtrlProperty("vBMPNOTAS","Tooltiptext")',ctrl:'vBMPNOTAS',prop:'Tooltiptext'},{av:'AV42bmpAutorizacoes',fld:'vBMPAUTORIZACOES'},{av:'gx.fn.getCtrlProperty("vBMPAUTORIZACOES","Tooltiptext")',ctrl:'vBMPAUTORIZACOES',prop:'Tooltiptext'},{av:'AV67bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV49bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV69SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'AV46PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3820ProcessoConvValor',fld:'PROCESSOCONVVALOR'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A4293ProcessoConvFornecId',fld:'PROCESSOCONVFORNECID'},{av:'A4294ProcessoConvFornecFantasia',fld:'PROCESSOCONVFORNECFANTASIA'},{av:'AV54PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV55ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV56ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV57ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3817ProcessoConvDataInicio',fld:'PROCESSOCONVDATAINICIO'},{av:'AV53ProcessoConvFornecFantasia',fld:'vPROCESSOCONVFORNECFANTASIA'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'AV46PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3820ProcessoConvValor',fld:'PROCESSOCONVVALOR'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A4293ProcessoConvFornecId',fld:'PROCESSOCONVFORNECID'},{av:'A4294ProcessoConvFornecFantasia',fld:'PROCESSOCONVFORNECFANTASIA'},{av:'AV54PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV55ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV56ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV57ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'}],[{av:'AV35Finalidade',fld:'vFINALIDADE'},{av:'AV48QtdeAutorizacoes',fld:'vQTDEAUTORIZACOES'},{av:'AV45SomaVlrAutorizacao',fld:'vSOMAVLRAUTORIZACAO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'AV44SaldoProcesso',fld:'vSALDOPROCESSO'},{av:'AV68SaldoProcesso2',fld:'vSALDOPROCESSO2'},{av:'AV55ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV56ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV57ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'AV53ProcessoConvFornecFantasia',fld:'vPROCESSOCONVFORNECFANTASIA'},{av:'gx.fn.getCtrlProperty("vBMPAUTORIZACOES","Link")',ctrl:'vBMPAUTORIZACOES',prop:'Link'},{av:'gx.fn.getCtrlProperty("vBMPNOTAS","Link")',ctrl:'vBMPNOTAS',prop:'Link'},{av:'AV54PessoaFantasia',fld:'vPESSOAFANTASIA'}]];
   this.EvtParms["'CONSULTALOGGERAL'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV66Log',fld:'vLOG'}]];
   this.EvtParms["'CONSULTALOG'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'}],[{av:'AV66Log',fld:'vLOG'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV28ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV32Dtini',fld:'vDTINI'},{av:'AV33Dtfim',fld:'vDTFIM'},{av:'AV59ProcessoConvFornecId',fld:'vPROCESSOCONVFORNECID'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV52ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41bmpNotas',fld:'vBMPNOTAS'},{av:'gx.fn.getCtrlProperty("vBMPNOTAS","Tooltiptext")',ctrl:'vBMPNOTAS',prop:'Tooltiptext'},{av:'AV42bmpAutorizacoes',fld:'vBMPAUTORIZACOES'},{av:'gx.fn.getCtrlProperty("vBMPAUTORIZACOES","Tooltiptext")',ctrl:'vBMPAUTORIZACOES',prop:'Tooltiptext'},{av:'AV67bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV49bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV69SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV50Notas',fld:'vNOTAS'},{av:'AV51Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV60ProcessoConvFornecIdAux',fld:'vPROCESSOCONVFORNECIDAUX'},{av:'AV64ProcessoConvFornecFantasiaAux',fld:'vPROCESSOCONVFORNECFANTASIAAUX'},{av:'A3819ProcessoConvFinalidade',fld:'PROCESSOCONVFINALIDADE'},{av:'AV46PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3820ProcessoConvValor',fld:'PROCESSOCONVVALOR'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A4293ProcessoConvFornecId',fld:'PROCESSOCONVFORNECID'},{av:'A4294ProcessoConvFornecFantasia',fld:'PROCESSOCONVFORNECFANTASIA'},{av:'AV54PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV55ProcessoConvEmpresaIdAux',fld:'vPROCESSOCONVEMPRESAIDAUX'},{av:'AV56ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'},{av:'AV57ProcessoConvNumeroAux',fld:'vPROCESSOCONVNUMEROAUX'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV63PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'}],[]];
   this.setPrompt("PROMPT_PROCESSOCONVFORNECID", [36]);
   this.setPrompt("PROMPT_CONVENIOID", [47]);
   this.setVCMap("AV69SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV73Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV50Notas", "vNOTAS", 0, "char");
   this.setVCMap("AV51Autorizacoes", "vAUTORIZACOES", 0, "char");
   this.setVCMap("AV46PedidoCompraEmpresaId", "vPEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV54PessoaFantasia", "vPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("AV55ProcessoConvEmpresaIdAux", "vPROCESSOCONVEMPRESAIDAUX", 0, "char");
   this.setVCMap("AV56ProcessoConvAnoAux", "vPROCESSOCONVANOAUX", 0, "int");
   this.setVCMap("AV57ProcessoConvNumeroAux", "vPROCESSOCONVNUMEROAUX", 0, "int");
   this.setVCMap("A3361PedidoCompraPessoaEmpId", "PEDIDOCOMPRAPESSOAEMPID", 0, "char");
   this.setVCMap("A3362PedidoCompraPessoaId", "PEDIDOCOMPRAPESSOAID", 0, "int");
   this.setVCMap("A3778PedidoCompraPessoaFantasia", "PEDIDOCOMPRAPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("AV69SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV73Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV50Notas", "vNOTAS", 0, "char");
   this.setVCMap("AV51Autorizacoes", "vAUTORIZACOES", 0, "char");
   this.setVCMap("AV46PedidoCompraEmpresaId", "vPEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV54PessoaFantasia", "vPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("AV55ProcessoConvEmpresaIdAux", "vPROCESSOCONVEMPRESAIDAUX", 0, "char");
   this.setVCMap("AV56ProcessoConvAnoAux", "vPROCESSOCONVANOAUX", 0, "int");
   this.setVCMap("AV57ProcessoConvNumeroAux", "vPROCESSOCONVNUMEROAUX", 0, "int");
   this.setVCMap("A3361PedidoCompraPessoaEmpId", "PEDIDOCOMPRAPESSOAEMPID", 0, "char");
   this.setVCMap("A3362PedidoCompraPessoaId", "PEDIDOCOMPRAPESSOAID", 0, "int");
   this.setVCMap("A3778PedidoCompraPessoaFantasia", "PEDIDOCOMPRAPESSOAFANTASIA", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar(this.GXValidFnc[124]);
   GridContainer.addRefreshingVar(this.GXValidFnc[125]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV41bmpNotas", rfrProp:"Value", gxAttId:"Bmpnotas"});
   GridContainer.addRefreshingVar({rfrVar:"AV41bmpNotas", rfrProp:"Tooltiptext", gxAttId:"Bmpnotas"});
   GridContainer.addRefreshingVar({rfrVar:"AV42bmpAutorizacoes", rfrProp:"Value", gxAttId:"Bmpautorizacoes"});
   GridContainer.addRefreshingVar({rfrVar:"AV42bmpAutorizacoes", rfrProp:"Tooltiptext", gxAttId:"Bmpautorizacoes"});
   GridContainer.addRefreshingVar({rfrVar:"AV67bmpLog", rfrProp:"Value", gxAttId:"Bmplog"});
   GridContainer.addRefreshingVar({rfrVar:"AV67bmpLog", rfrProp:"Tooltiptext", gxAttId:"Bmplog"});
   GridContainer.addRefreshingVar({rfrVar:"AV49bmpEtq", rfrProp:"Value", gxAttId:"Bmpetq"});
   GridContainer.addRefreshingVar({rfrVar:"AV49bmpEtq", rfrProp:"Tooltiptext", gxAttId:"Bmpetq"});
   GridContainer.addRefreshingVar({rfrVar:"AV69SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV73Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"AV50Notas"});
   GridContainer.addRefreshingVar({rfrVar:"AV51Autorizacoes"});
   GridContainer.addRefreshingVar(this.GXValidFnc[132]);
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar({rfrVar:"A3819ProcessoConvFinalidade", rfrProp:"Value", gxAttId:"3819"});
   GridContainer.addRefreshingVar({rfrVar:"AV46PedidoCompraEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A3373ProcessoConvAno", rfrProp:"Value", gxAttId:"3373"});
   GridContainer.addRefreshingVar({rfrVar:"A3374ProcessoConvNumero", rfrProp:"Value", gxAttId:"3374"});
   GridContainer.addRefreshingVar({rfrVar:"A3820ProcessoConvValor", rfrProp:"Value", gxAttId:"3820"});
   GridContainer.addRefreshingVar({rfrVar:"A3372ProcessoConvEmpresaId", rfrProp:"Value", gxAttId:"3372"});
   GridContainer.addRefreshingVar({rfrVar:"A1680ConvenioEmpresaId", rfrProp:"Value", gxAttId:"1680"});
   GridContainer.addRefreshingVar({rfrVar:"A1681ConvenioId", rfrProp:"Value", gxAttId:"1681"});
   GridContainer.addRefreshingVar({rfrVar:"A4293ProcessoConvFornecId", rfrProp:"Value", gxAttId:"4293"});
   GridContainer.addRefreshingVar({rfrVar:"A4294ProcessoConvFornecFantasia", rfrProp:"Value", gxAttId:"4294"});
   GridContainer.addRefreshingVar({rfrVar:"AV54PessoaFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"AV55ProcessoConvEmpresaIdAux"});
   GridContainer.addRefreshingVar({rfrVar:"AV56ProcessoConvAnoAux"});
   GridContainer.addRefreshingVar({rfrVar:"AV57ProcessoConvNumeroAux"});
   GridContainer.addRefreshingVar({rfrVar:"A3361PedidoCompraPessoaEmpId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[129]);
   GridContainer.addRefreshingVar({rfrVar:"A3362PedidoCompraPessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A3778PedidoCompraPessoaFantasia"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hprocessoconv());
