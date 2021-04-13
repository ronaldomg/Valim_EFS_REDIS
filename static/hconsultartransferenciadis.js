/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:9:46.86
*/
gx.evt.autoSkip = false;
gx.define('hconsultartransferenciadis', false, function () {
   this.ServerClass =  "hconsultartransferenciadis" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.A11151TransfDisEmpresaId=gx.fn.getControlValue("TRANSFDISEMPRESAID") ;
      this.A11186TransfDisQtdeDestino=gx.fn.getDecimalValue("TRANSFDISQTDEDESTINO",'.',',') ;
      this.AV60QtdeTransf=gx.fn.getIntegerValue("vQTDETRANSF",'.') ;
      this.AV8UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV11MsgErro=gx.fn.getControlValue("vMSGERRO") ;
      this.AV108SnAlterar=gx.fn.getControlValue("vSNALTERAR") ;
   };
   this.Validv_Usuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOID");
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
   this.Valid_Transfdisnumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(50) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TRANSFDISNUMERO", gx.fn.currentGridRowImpl(50));
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
   this.Valid_Transfdistipo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(50) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TRANSFDISTIPO", gx.fn.currentGridRowImpl(50));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transfdisempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSFDISEMPRESAID");
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
   this.Validv_Gx_date=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTODAY");
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
   this.Valid_Transfdisnumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(50) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TRANSFDISNUMERO", gx.fn.currentGridRowImpl(50));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Transfdistipo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(50) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TRANSFDISTIPO", gx.fn.currentGridRowImpl(50));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e152c12_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e252c12_client=function()
   {
      this.executeServerEvent("'PESQUISAR'", true, arguments[0], false, false);
   };
   this.e162c12_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e172c12_client=function()
   {
      this.executeServerEvent("'NOVATRANSFERENCIANOTA'", false, null, false, false);
   };
   this.e182c12_client=function()
   {
      this.executeServerEvent("'NOVATRANSFERENCIAPRODUTO'", false, null, false, false);
   };
   this.e262c12_client=function()
   {
      this.executeServerEvent("'ALTERARTRANSFERENCIA'", true, arguments[0], false, false);
   };
   this.e192c12_client=function()
   {
      this.executeServerEvent("'PARAMETROS'", true, null, false, false);
   };
   this.e112c12_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e122c12_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132c12_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142c12_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e202c12_client=function()
   {
      this.executeServerEvent("VSTTRANSFERENCIA.CLICK", true, null, false, true);
   };
   this.e272c12_client=function()
   {
      this.executeServerEvent("'EXCLUIRTRANSFERENCIA'", true, arguments[0], false, false);
   };
   this.e282c12_client=function()
   {
      this.executeServerEvent("'ORIGEM'", true, arguments[0], false, false);
   };
   this.e292c12_client=function()
   {
      this.executeServerEvent("'DESTINO'", true, arguments[0], false, false);
   };
   this.e212c12_client=function()
   {
      this.executeServerEvent("VPRODUTOID.ISVALID", true, null, false, true);
   };
   this.e302c12_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,24,25,28,30,32,34,35,38,40,41,42,51,52,53,54,55,56,57,58,59,60,61,62,63,66,69,71,73,75,78,81,83,86,88,94,98,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,128,129];
   this.GXLastCtrlId =129;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",50,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultartransferenciadis",[],false,1,false,true,10,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11163,51,"TRANSFDISDATA","Data","","TransfDisData","date",0,"px",10,10,"right",null,[],11163,"TransfDisData",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(11152,52,"TRANSFDISNUMERO","Número","","TransfDisNumero","int",0,"px",10,10,"right",null,[],11152,"TransfDisNumero",true,0,false,false,"",1,"");
   GridContainer.addComboBox(11166,53,"TRANSFDISTIPO","Tipo Transferência","TransfDisTipo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit("Entradanumerodocumento",54,"vENTRADANUMERODOCUMENTO","No.Docmto ","","EntradaNumeroDocumento","int",0,"px",9,9,"right",null,[],"Entradanumerodocumento","EntradaNumeroDocumento",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(11164,55,"TRANSFDISUSUARIO","Usuário","","TransfDisUsuario","char",0,"px",12,12,"left",null,[],11164,"TransfDisUsuario",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Qtdeitens",56,"vQTDEITENS","Qtde Itens","","QtdeItens","int",0,"px",4,4,"right",null,[],"Qtdeitens","QtdeItens",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Totalqtde",57,"vTOTALQTDE","Total Qtde","","TotalQtde","decimal",0,"px",21,21,"right",null,[],"Totalqtde","TotalQtde",true,4,false,false,"",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",58,0,"px",17,"px","e262c12_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmporigem","vBMPORIGEM",59,0,"px",17,"px","e282c12_client","","Origem","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdestino","vBMPDESTINO",60,0,"px",17,"px","e292c12_client","","Destino","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",61,0,"px",17,"px","e272c12_client","","Exc","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("Transfdisempresaid",62,"vTRANSFDISEMPRESAID","Transf Dis Empresa Id","","TransfDisEmpresaId","char",0,"px",10,10,"left",null,[],"Transfdisempresaid","TransfDisEmpresaId",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(11165,63,"TRANSFDISSITUACAO","Transf Dis Situacao","","TransfDisSituacao","char",0,"px",1,1,"left",null,[],11165,"TransfDisSituacao",false,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE5",grid:0};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAINICIAL",gxz:"ZV17DataInicial",gxold:"OV17DataInicial",gxvar:"AV17DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV17DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV17DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAFINAL",gxz:"ZV18DataFinal",gxold:"OV18DataFinal",gxvar:"AV18DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV18DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV18DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOID",gxz:"ZV21UsuarioId",gxold:"OV21UsuarioId",gxvar:"AV21UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21UsuarioId=Value},v2z:function(Value){gx.O.ZV21UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV21UsuarioId,0)},c2v:function(){gx.O.AV21UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV41UsuarioNome",gxold:"OV41UsuarioNome",gxvar:"AV41UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41UsuarioNome=Value},v2z:function(Value){gx.O.ZV41UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV41UsuarioNome,0)},c2v:function(){gx.O.AV41UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSTTRANSFERENCIA",gxz:"ZV22StTransferencia",gxold:"OV22StTransferencia",gxvar:"AV22StTransferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22StTransferencia=Value},v2z:function(Value){gx.O.ZV22StTransferencia=Value},v2c:function(){gx.fn.setComboBoxValue("vSTTRANSFERENCIA",gx.O.AV22StTransferencia)},c2v:function(){gx.O.AV22StTransferencia=this.val()},val:function(){return gx.fn.getControlValue("vSTTRANSFERENCIA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDOCUMENTOENTRADA",gxz:"ZV81DocumentoEntrada",gxold:"OV81DocumentoEntrada",gxvar:"AV81DocumentoEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81DocumentoEntrada=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81DocumentoEntrada=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTOENTRADA",gx.O.AV81DocumentoEntrada,0)},c2v:function(){gx.O.AV81DocumentoEntrada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDOCUMENTOENTRADA",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"BTNPROMPTENT",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:'e212c12_client',rgrid:[this.GridContainer],fld:"vPRODUTOID",gxz:"ZV91ProdutoId",gxold:"OV91ProdutoId",gxvar:"AV91ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV91ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV91ProdutoId,0)},c2v:function(){gx.O.AV91ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"PROMPTPROD",grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV92ProdutoDescricaoResumida",gxold:"OV92ProdutoDescricaoResumida",gxvar:"AV92ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV92ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV92ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV92ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSFDISDATA",gxz:"Z11163TransfDisData",gxold:"O11163TransfDisData",gxvar:"A11163TransfDisData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11163TransfDisData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11163TransfDisData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSFDISDATA",row || gx.fn.currentGridRowImpl(50),gx.O.A11163TransfDisData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11163TransfDisData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("TRANSFDISDATA",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:this.Valid_Transfdisnumero,isvalid:null,rgrid:[],fld:"TRANSFDISNUMERO",gxz:"Z11152TransfDisNumero",gxold:"O11152TransfDisNumero",gxvar:"A11152TransfDisNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11152TransfDisNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11152TransfDisNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSFDISNUMERO",row || gx.fn.currentGridRowImpl(50),gx.O.A11152TransfDisNumero,0)},c2v:function(){gx.O.A11152TransfDisNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSFDISNUMERO",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:this.Valid_Transfdistipo,isvalid:null,rgrid:[],fld:"TRANSFDISTIPO",gxz:"Z11166TransfDisTipo",gxold:"O11166TransfDisTipo",gxvar:"A11166TransfDisTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A11166TransfDisTipo=Value},v2z:function(Value){gx.O.Z11166TransfDisTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSFDISTIPO",row || gx.fn.currentGridRowImpl(50),gx.O.A11166TransfDisTipo)},c2v:function(){gx.O.A11166TransfDisTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSFDISTIPO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADANUMERODOCUMENTO",gxz:"ZV83EntradaNumeroDocumento",gxold:"OV83EntradaNumeroDocumento",gxvar:"AV83EntradaNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV83EntradaNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83EntradaNumeroDocumento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADANUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(50),gx.O.AV83EntradaNumeroDocumento,0)},c2v:function(){gx.O.AV83EntradaNumeroDocumento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADANUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSFDISUSUARIO",gxz:"Z11164TransfDisUsuario",gxold:"O11164TransfDisUsuario",gxvar:"A11164TransfDisUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11164TransfDisUsuario=Value},v2z:function(Value){gx.O.Z11164TransfDisUsuario=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSFDISUSUARIO",row || gx.fn.currentGridRowImpl(50),gx.O.A11164TransfDisUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11164TransfDisUsuario=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSFDISUSUARIO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEITENS",gxz:"ZV23QtdeItens",gxold:"OV23QtdeItens",gxvar:"AV23QtdeItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23QtdeItens=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23QtdeItens=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vQTDEITENS",row || gx.fn.currentGridRowImpl(50),gx.O.AV23QtdeItens,0)},c2v:function(){gx.O.AV23QtdeItens=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vQTDEITENS",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALQTDE",gxz:"ZV24TotalQtde",gxold:"OV24TotalQtde",gxvar:"AV24TotalQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24TotalQtde=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV24TotalQtde=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vTOTALQTDE",row || gx.fn.currentGridRowImpl(50),gx.O.AV24TotalQtde,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24TotalQtde=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vTOTALQTDE",row || gx.fn.currentGridRowImpl(50),'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV27BmpAlt",gxold:"OV27BmpAlt",gxvar:"AV27BmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27BmpAlt=Value},v2z:function(Value){gx.O.ZV27BmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(50),gx.O.AV27BmpAlt,gx.O.AV119Bmpalt_GXI)},c2v:function(){gx.O.AV119Bmpalt_GXI=this.val_GXI();gx.O.AV27BmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV119Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPORIGEM",gxz:"ZV89bmpOrigem",gxold:"OV89bmpOrigem",gxvar:"AV89bmpOrigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV89bmpOrigem=Value},v2z:function(Value){gx.O.ZV89bmpOrigem=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPORIGEM",row || gx.fn.currentGridRowImpl(50),gx.O.AV89bmpOrigem,gx.O.AV118Bmporigem_GXI)},c2v:function(){gx.O.AV118Bmporigem_GXI=this.val_GXI();gx.O.AV89bmpOrigem=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPORIGEM",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPORIGEM_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV118Bmporigem_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESTINO",gxz:"ZV88bmpDestino",gxold:"OV88bmpDestino",gxvar:"AV88bmpDestino",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV88bmpDestino=Value},v2z:function(Value){gx.O.ZV88bmpDestino=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESTINO",row || gx.fn.currentGridRowImpl(50),gx.O.AV88bmpDestino,gx.O.AV117Bmpdestino_GXI)},c2v:function(){gx.O.AV117Bmpdestino_GXI=this.val_GXI();gx.O.AV88bmpDestino=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESTINO",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESTINO_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV117Bmpdestino_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV28BmpExc",gxold:"OV28BmpExc",gxvar:"AV28BmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28BmpExc=Value},v2z:function(Value){gx.O.ZV28BmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50),gx.O.AV28BmpExc,gx.O.AV114Bmpexc_GXI)},c2v:function(){gx.O.AV114Bmpexc_GXI=this.val_GXI();gx.O.AV28BmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV114Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:this.Validv_Transfdisempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSFDISEMPRESAID",gxz:"ZV57TransfDisEmpresaId",gxold:"OV57TransfDisEmpresaId",gxvar:"AV57TransfDisEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV57TransfDisEmpresaId=Value},v2z:function(Value){gx.O.ZV57TransfDisEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("vTRANSFDISEMPRESAID",row || gx.fn.currentGridRowImpl(50),gx.O.AV57TransfDisEmpresaId,0)},c2v:function(){gx.O.AV57TransfDisEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("vTRANSFDISEMPRESAID",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSFDISSITUACAO",gxz:"Z11165TransfDisSituacao",gxold:"O11165TransfDisSituacao",gxvar:"A11165TransfDisSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11165TransfDisSituacao=Value},v2z:function(Value){gx.O.Z11165TransfDisSituacao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSFDISSITUACAO",row || gx.fn.currentGridRowImpl(50),gx.O.A11165TransfDisSituacao,0)},c2v:function(){gx.O.A11165TransfDisSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSFDISSITUACAO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TABLE15",grid:0};
   GXValidFnc[69]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[71]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[73]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[75]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[78]={fld:"TABLE30",grid:0};
   GXValidFnc[81]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITEMEDICAO",gxz:"ZV5SitEmEdicao",gxold:"OV5SitEmEdicao",gxvar:"AV5SitEmEdicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5SitEmEdicao=Value},v2z:function(Value){gx.O.ZV5SitEmEdicao=Value},v2c:function(){gx.fn.setMultimediaValue("vSITEMEDICAO",gx.O.AV5SitEmEdicao,gx.O.AV115Sitemedicao_GXI)},c2v:function(){gx.O.AV115Sitemedicao_GXI=this.val_GXI();gx.O.AV5SitEmEdicao=this.val()},val:function(){return gx.fn.getBlobValue("vSITEMEDICAO")},val_GXI:function(){return gx.fn.getControlValue("vSITEMEDICAO_GXI")}, gxvar_GXI:'AV115Sitemedicao_GXI',nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITFINALIZADO",gxz:"ZV7SitFinalizado",gxold:"OV7SitFinalizado",gxvar:"AV7SitFinalizado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7SitFinalizado=Value},v2z:function(Value){gx.O.ZV7SitFinalizado=Value},v2c:function(){gx.fn.setMultimediaValue("vSITFINALIZADO",gx.O.AV7SitFinalizado,gx.O.AV116Sitfinalizado_GXI)},c2v:function(){gx.O.AV116Sitfinalizado_GXI=this.val_GXI();gx.O.AV7SitFinalizado=this.val()},val:function(){return gx.fn.getBlobValue("vSITFINALIZADO")},val_GXI:function(){return gx.fn.getControlValue("vSITFINALIZADO_GXI")}, gxvar_GXI:'AV116Sitfinalizado_GXI',nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[94]={fld:"TABLE4",grid:0};
   GXValidFnc[98]={fld:"TABINVISIVEL",grid:0};
   GXValidFnc[101]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV93OrderedBy",gxold:"OV93OrderedBy",gxvar:"AV93OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV93OrderedBy,0)},c2v:function(){gx.O.AV93OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV94SNVenda",gxold:"OV94SNVenda",gxvar:"AV94SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94SNVenda=Value},v2z:function(Value){gx.O.ZV94SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV94SNVenda,0)},c2v:function(){gx.O.AV94SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV95CodigoBarrasProdutoBarra",gxold:"OV95CodigoBarrasProdutoBarra",gxvar:"AV95CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV95CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV95CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV95CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV96ProdutoCategoria",gxold:"OV96ProdutoCategoria",gxvar:"AV96ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV96ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV96ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV96ProdutoCategoria)},c2v:function(){gx.O.AV96ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV97IntAuxIn",gxold:"OV97IntAuxIn",gxvar:"AV97IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV97IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV97IntAuxIn,0)},c2v:function(){gx.O.AV97IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV98QtdeChar",gxold:"OV98QtdeChar",gxvar:"AV98QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV98QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV98QtdeChar,0)},c2v:function(){gx.O.AV98QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV99ProdutoReferencia",gxold:"OV99ProdutoReferencia",gxvar:"AV99ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV99ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV99ProdutoReferencia,0)},c2v:function(){gx.O.AV99ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV100ProdutoEmpresaId",gxold:"OV100ProdutoEmpresaId",gxvar:"AV100ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV100ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV100ProdutoEmpresaId,0)},c2v:function(){gx.O.AV100ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV101GrupoProdutoId",gxold:"OV101GrupoProdutoId",gxvar:"AV101GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV101GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV101GrupoProdutoId,0)},c2v:function(){gx.O.AV101GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV102ProdutoCodigoId",gxold:"OV102ProdutoCodigoId",gxvar:"AV102ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV102ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV102ProdutoCodigoId,0)},c2v:function(){gx.O.AV102ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV103SubGrupoProdutoId",gxold:"OV103SubGrupoProdutoId",gxvar:"AV103SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV103SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV103SubGrupoProdutoId,0)},c2v:function(){gx.O.AV103SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV104LoteProdutoCombinacao",gxold:"OV104LoteProdutoCombinacao",gxvar:"AV104LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV104LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV104LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV104LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV105PrecoNulo",gxold:"OV105PrecoNulo",gxvar:"AV105PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV105PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV105PrecoNulo,0)},c2v:function(){gx.O.AV105PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFILTRO",gxz:"ZV107FilialIdFiltro",gxold:"OV107FilialIdFiltro",gxvar:"AV107FilialIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107FilialIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV107FilialIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFILTRO",gx.O.AV107FilialIdFiltro,0)},c2v:function(){gx.O.AV107FilialIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV44FilialEmpresaId",gxold:"OV44FilialEmpresaId",gxvar:"AV44FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV44FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV44FilialEmpresaId,0)},c2v:function(){gx.O.AV44FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"JSRET", format:2,grid:0};
   GXValidFnc[118]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV12AcessoSistemaSequencia",gxold:"OV12AcessoSistemaSequencia",gxvar:"AV12AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV12AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV12AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[119]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTPAGINA",gxz:"ZV59TotPagina",gxold:"OV59TotPagina",gxvar:"AV59TotPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59TotPagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59TotPagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTOTPAGINA",gx.O.AV59TotPagina,0)},c2v:function(){gx.O.AV59TotPagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTOTPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV50Qtde",gxold:"OV50Qtde",gxvar:"AV50Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV50Qtde,0)},c2v:function(){gx.O.AV50Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[121]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV58Pagina",gxold:"OV58Pagina",gxvar:"AV58Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV58Pagina,0)},c2v:function(){gx.O.AV58Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[122]={fld:"JS", format:2,grid:0};
   GXValidFnc[123]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNMONTA",gxz:"ZV45SnMonta",gxold:"OV45SnMonta",gxvar:"AV45SnMonta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45SnMonta=Value},v2z:function(Value){gx.O.ZV45SnMonta=Value},v2c:function(){gx.fn.setControlValue("vSNMONTA",gx.O.AV45SnMonta,0)},c2v:function(){gx.O.AV45SnMonta=this.val()},val:function(){return gx.fn.getControlValue("vSNMONTA")},nac:gx.falseFn};
   GXValidFnc[128]={fld:"BTNPARM",grid:0};
   GXValidFnc[129]={fld:"PROMPT_USUARIOID",grid:0};
   this.AV17DataInicial = gx.date.nullDate() ;
   this.ZV17DataInicial = gx.date.nullDate() ;
   this.OV17DataInicial = gx.date.nullDate() ;
   this.AV18DataFinal = gx.date.nullDate() ;
   this.ZV18DataFinal = gx.date.nullDate() ;
   this.OV18DataFinal = gx.date.nullDate() ;
   this.AV21UsuarioId = "" ;
   this.ZV21UsuarioId = "" ;
   this.OV21UsuarioId = "" ;
   this.AV41UsuarioNome = "" ;
   this.ZV41UsuarioNome = "" ;
   this.OV41UsuarioNome = "" ;
   this.AV22StTransferencia = "" ;
   this.ZV22StTransferencia = "" ;
   this.OV22StTransferencia = "" ;
   this.AV81DocumentoEntrada = 0 ;
   this.ZV81DocumentoEntrada = 0 ;
   this.OV81DocumentoEntrada = 0 ;
   this.AV91ProdutoId = 0 ;
   this.ZV91ProdutoId = 0 ;
   this.OV91ProdutoId = 0 ;
   this.AV92ProdutoDescricaoResumida = "" ;
   this.ZV92ProdutoDescricaoResumida = "" ;
   this.OV92ProdutoDescricaoResumida = "" ;
   this.Z11163TransfDisData = gx.date.nullDate() ;
   this.O11163TransfDisData = gx.date.nullDate() ;
   this.Z11152TransfDisNumero = 0 ;
   this.O11152TransfDisNumero = 0 ;
   this.Z11166TransfDisTipo = "" ;
   this.O11166TransfDisTipo = "" ;
   this.ZV83EntradaNumeroDocumento = 0 ;
   this.OV83EntradaNumeroDocumento = 0 ;
   this.Z11164TransfDisUsuario = "" ;
   this.O11164TransfDisUsuario = "" ;
   this.ZV23QtdeItens = 0 ;
   this.OV23QtdeItens = 0 ;
   this.ZV24TotalQtde = 0 ;
   this.OV24TotalQtde = 0 ;
   this.ZV27BmpAlt = "" ;
   this.OV27BmpAlt = "" ;
   this.ZV89bmpOrigem = "" ;
   this.OV89bmpOrigem = "" ;
   this.ZV88bmpDestino = "" ;
   this.OV88bmpDestino = "" ;
   this.ZV28BmpExc = "" ;
   this.OV28BmpExc = "" ;
   this.ZV57TransfDisEmpresaId = "" ;
   this.OV57TransfDisEmpresaId = "" ;
   this.Z11165TransfDisSituacao = "" ;
   this.O11165TransfDisSituacao = "" ;
   this.AV115Sitemedicao_GXI = "" ;
   this.AV5SitEmEdicao = "" ;
   this.ZV5SitEmEdicao = "" ;
   this.OV5SitEmEdicao = "" ;
   this.AV116Sitfinalizado_GXI = "" ;
   this.AV7SitFinalizado = "" ;
   this.ZV7SitFinalizado = "" ;
   this.OV7SitFinalizado = "" ;
   this.AV93OrderedBy = 0 ;
   this.ZV93OrderedBy = 0 ;
   this.OV93OrderedBy = 0 ;
   this.AV94SNVenda = "" ;
   this.ZV94SNVenda = "" ;
   this.OV94SNVenda = "" ;
   this.AV95CodigoBarrasProdutoBarra = 0 ;
   this.ZV95CodigoBarrasProdutoBarra = 0 ;
   this.OV95CodigoBarrasProdutoBarra = 0 ;
   this.AV96ProdutoCategoria = "" ;
   this.ZV96ProdutoCategoria = "" ;
   this.OV96ProdutoCategoria = "" ;
   this.AV97IntAuxIn = 0 ;
   this.ZV97IntAuxIn = 0 ;
   this.OV97IntAuxIn = 0 ;
   this.AV98QtdeChar = 0 ;
   this.ZV98QtdeChar = 0 ;
   this.OV98QtdeChar = 0 ;
   this.AV99ProdutoReferencia = "" ;
   this.ZV99ProdutoReferencia = "" ;
   this.OV99ProdutoReferencia = "" ;
   this.AV100ProdutoEmpresaId = "" ;
   this.ZV100ProdutoEmpresaId = "" ;
   this.OV100ProdutoEmpresaId = "" ;
   this.AV101GrupoProdutoId = 0 ;
   this.ZV101GrupoProdutoId = 0 ;
   this.OV101GrupoProdutoId = 0 ;
   this.AV102ProdutoCodigoId = 0 ;
   this.ZV102ProdutoCodigoId = 0 ;
   this.OV102ProdutoCodigoId = 0 ;
   this.AV103SubGrupoProdutoId = 0 ;
   this.ZV103SubGrupoProdutoId = 0 ;
   this.OV103SubGrupoProdutoId = 0 ;
   this.AV104LoteProdutoCombinacao = "" ;
   this.ZV104LoteProdutoCombinacao = "" ;
   this.OV104LoteProdutoCombinacao = "" ;
   this.AV105PrecoNulo = 0 ;
   this.ZV105PrecoNulo = 0 ;
   this.OV105PrecoNulo = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV107FilialIdFiltro = 0 ;
   this.ZV107FilialIdFiltro = 0 ;
   this.OV107FilialIdFiltro = 0 ;
   this.AV44FilialEmpresaId = "" ;
   this.ZV44FilialEmpresaId = "" ;
   this.OV44FilialEmpresaId = "" ;
   this.AV12AcessoSistemaSequencia = 0 ;
   this.ZV12AcessoSistemaSequencia = 0 ;
   this.OV12AcessoSistemaSequencia = 0 ;
   this.AV59TotPagina = 0 ;
   this.ZV59TotPagina = 0 ;
   this.OV59TotPagina = 0 ;
   this.AV50Qtde = 0 ;
   this.ZV50Qtde = 0 ;
   this.OV50Qtde = 0 ;
   this.AV58Pagina = 0 ;
   this.ZV58Pagina = 0 ;
   this.OV58Pagina = 0 ;
   this.AV45SnMonta = "" ;
   this.ZV45SnMonta = "" ;
   this.OV45SnMonta = "" ;
   this.AV17DataInicial = gx.date.nullDate() ;
   this.AV18DataFinal = gx.date.nullDate() ;
   this.AV21UsuarioId = "" ;
   this.AV41UsuarioNome = "" ;
   this.AV22StTransferencia = "" ;
   this.AV81DocumentoEntrada = 0 ;
   this.AV91ProdutoId = 0 ;
   this.AV92ProdutoDescricaoResumida = "" ;
   this.AV5SitEmEdicao = "" ;
   this.AV7SitFinalizado = "" ;
   this.AV93OrderedBy = 0 ;
   this.AV94SNVenda = "" ;
   this.AV95CodigoBarrasProdutoBarra = 0 ;
   this.AV96ProdutoCategoria = "" ;
   this.AV97IntAuxIn = 0 ;
   this.AV98QtdeChar = 0 ;
   this.AV99ProdutoReferencia = "" ;
   this.AV100ProdutoEmpresaId = "" ;
   this.AV101GrupoProdutoId = 0 ;
   this.AV102ProdutoCodigoId = 0 ;
   this.AV103SubGrupoProdutoId = 0 ;
   this.AV104LoteProdutoCombinacao = "" ;
   this.AV105PrecoNulo = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV107FilialIdFiltro = 0 ;
   this.AV44FilialEmpresaId = "" ;
   this.AV12AcessoSistemaSequencia = 0 ;
   this.AV59TotPagina = 0 ;
   this.AV50Qtde = 0 ;
   this.AV58Pagina = 0 ;
   this.AV45SnMonta = "" ;
   this.A11151TransfDisEmpresaId = "" ;
   this.A11186TransfDisQtdeDestino = 0 ;
   this.A11163TransfDisData = gx.date.nullDate() ;
   this.A11152TransfDisNumero = 0 ;
   this.A11166TransfDisTipo = "" ;
   this.AV83EntradaNumeroDocumento = 0 ;
   this.A11164TransfDisUsuario = "" ;
   this.AV23QtdeItens = 0 ;
   this.AV24TotalQtde = 0 ;
   this.AV27BmpAlt = "" ;
   this.AV89bmpOrigem = "" ;
   this.AV88bmpDestino = "" ;
   this.AV28BmpExc = "" ;
   this.AV57TransfDisEmpresaId = "" ;
   this.A11165TransfDisSituacao = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A445PessoaCliente = "" ;
   this.A830PessoaUsuarioId = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A5577TransacaoSaidaAtivo = "" ;
   this.A5569TransacaoSaidaTipo = "" ;
   this.A5573TransacaoSaidaSnLancaFinanc = "" ;
   this.A5572TransacaoSaidaSnAlteraSaldo = "" ;
   this.A5608TransacaoSaidaPrecoId = 0 ;
   this.A5586TransacaoSaidaClienteId = 0 ;
   this.A5578TransacaoSaidaCFOPDenEstadoCod = 0 ;
   this.A5580TransacaoSaidaCFOPForEstadoCod = 0 ;
   this.A5595TransacaoSaidaCSTTipo = "" ;
   this.A5597TransacaoSaidaCSTCodigo = "" ;
   this.A3566SituacaoTributariaCodigo = "" ;
   this.A3564SituacaoTributariaTipo = "" ;
   this.A3430CFOPCodigo = 0 ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A4490TransacaoEntradaAtivo = "" ;
   this.A5489TransacaoEntradaTipo = "" ;
   this.A4488TransacaoEntradaSnLancaFinanc = "" ;
   this.A4485TransacaoEntradaSnAlteraCusto = "" ;
   this.A4487TransacaoEntradaSnAlteraSaldo = "" ;
   this.A4586TransacaoEntradaPessoaId = 0 ;
   this.A4494TransacaoEntradaFilialId = 0 ;
   this.A4603TransacaoEntradaCFOPDenEstadoC = 0 ;
   this.A4604TransacaoEntradaCFOPForEstadoC = 0 ;
   this.A4500TransacaoEntradaCSTTipo = "" ;
   this.A4502TransacaoEntradaCSTCodigo = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A75UsuarioId = "" ;
   this.AV60QtdeTransf = 0 ;
   this.AV8UsrCod = "" ;
   this.AV11MsgErro = "" ;
   this.AV108SnAlterar = "" ;
   this.Events = {"e152c12_client": ["'FECHAR'", true] ,"e252c12_client": ["'PESQUISAR'", true] ,"e162c12_client": ["ENTER", true] ,"e172c12_client": ["'NOVATRANSFERENCIANOTA'", true] ,"e182c12_client": ["'NOVATRANSFERENCIAPRODUTO'", true] ,"e262c12_client": ["'ALTERARTRANSFERENCIA'", true] ,"e192c12_client": ["'PARAMETROS'", true] ,"e112c12_client": ["'GXM_FIRST'", true] ,"e122c12_client": ["'GXM_PREVIOUS'", true] ,"e132c12_client": ["'GXM_NEXT'", true] ,"e142c12_client": ["'GXM_LAST'", true] ,"e202c12_client": ["VSTTRANSFERENCIA.CLICK", true] ,"e272c12_client": ["'EXCLUIRTRANSFERENCIA'", true] ,"e282c12_client": ["'ORIGEM'", true] ,"e292c12_client": ["'DESTINO'", true] ,"e212c12_client": ["VPRODUTOID.ISVALID", true] ,"e302c12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'}],[{av:'AV5SitEmEdicao',fld:'vSITEMEDICAO'},{av:'AV7SitFinalizado',fld:'vSITFINALIZADO'},{av:'AV80TransfDisNumeroExc',fld:'vTRANSFDISNUMEROEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'AV37Filtros',fld:'vFILTROS'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV41UsuarioNome',fld:'vUSUARIONOME'},{av:'AV92ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV87StSeleci',fld:'vSTSELECI'},{av:'AV61QtdeLinGrid',fld:'vQTDELINGRID'},{av:'AV62Res',fld:'vRES'},{av:'AV63ResInt',fld:'vRESINT'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'}],[{av:'AV83EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV24TotalQtde',fld:'vTOTALQTDE'},{av:'AV23QtdeItens',fld:'vQTDEITENS'},{av:'AV42NomeClasse',fld:'vNOMECLASSE'},{av:'gx.fn.getCtrlProperty("TRANSFDISNUMERO","Class")',ctrl:'TRANSFDISNUMERO',prop:'Class'},{av:'gx.fn.getCtrlProperty("TRANSFDISDATA","Class")',ctrl:'TRANSFDISDATA',prop:'Class'},{av:'gx.fn.getCtrlProperty("TRANSFDISUSUARIO","Class")',ctrl:'TRANSFDISUSUARIO',prop:'Class'},{ctrl:'TRANSFDISTIPO'},{av:'gx.fn.getCtrlProperty("vENTRADANUMERODOCUMENTO","Class")',ctrl:'vENTRADANUMERODOCUMENTO',prop:'Class'},{av:'gx.fn.getCtrlProperty("vQTDEITENS","Class")',ctrl:'vQTDEITENS',prop:'Class'},{av:'gx.fn.getCtrlProperty("vTOTALQTDE","Class")',ctrl:'vTOTALQTDE',prop:'Class'},{av:'AV88bmpDestino',fld:'vBMPDESTINO'},{av:'AV89bmpOrigem',fld:'vBMPORIGEM'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Enabled")',ctrl:'vBMPDESTINO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Enabled")',ctrl:'vBMPORIGEM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'AV27BmpAlt',fld:'vBMPALT'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PESQUISAR'"] = [[{av:'AV43TpErro',fld:'vTPERRO'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV43TpErro',fld:'vTPERRO'},{av:'AV120GXLvl264',fld:'vGXLVL264'},{av:'AV121GXLvl276',fld:'vGXLVL276'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'},{av:'AV43TpErro',fld:'vTPERRO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV43TpErro',fld:'vTPERRO'},{av:'AV120GXLvl264',fld:'vGXLVL264'},{av:'AV121GXLvl276',fld:'vGXLVL276'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV87StSeleci',fld:'vSTSELECI'},{av:'AV61QtdeLinGrid',fld:'vQTDELINGRID'},{av:'AV62Res',fld:'vRES'},{av:'AV63ResInt',fld:'vRESINT'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'NOVATRANSFERENCIANOTA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'},{av:'AV43TpErro',fld:'vTPERRO'},{av:'A4480TransacaoEntradaEmpresaId',fld:'TRANSACAOENTRADAEMPRESAID'},{av:'AV66TransacaoEntradaEmpresaId',fld:'vTRANSACAOENTRADAEMPRESAID'},{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'A4490TransacaoEntradaAtivo',fld:'TRANSACAOENTRADAATIVO'},{av:'A5489TransacaoEntradaTipo',fld:'TRANSACAOENTRADATIPO'},{av:'A4488TransacaoEntradaSnLancaFinanc',fld:'TRANSACAOENTRADASNLANCAFINANC'},{av:'A4485TransacaoEntradaSnAlteraCusto',fld:'TRANSACAOENTRADASNALTERACUSTO'},{av:'A4487TransacaoEntradaSnAlteraSaldo',fld:'TRANSACAOENTRADASNALTERASALDO'},{av:'A4586TransacaoEntradaPessoaId',fld:'TRANSACAOENTRADAPESSOAID'},{av:'A4494TransacaoEntradaFilialId',fld:'TRANSACAOENTRADAFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV44FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A4603TransacaoEntradaCFOPDenEstadoC',fld:'TRANSACAOENTRADACFOPDENESTADOC'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'A4604TransacaoEntradaCFOPForEstadoC',fld:'TRANSACAOENTRADACFOPFORESTADOC'},{av:'A4500TransacaoEntradaCSTTipo',fld:'TRANSACAOENTRADACSTTIPO'},{av:'A4502TransacaoEntradaCSTCodigo',fld:'TRANSACAOENTRADACSTCODIGO'},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV74TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'A5569TransacaoSaidaTipo',fld:'TRANSACAOSAIDATIPO'},{av:'A5573TransacaoSaidaSnLancaFinanc',fld:'TRANSACAOSAIDASNLANCAFINANC'},{av:'A5572TransacaoSaidaSnAlteraSaldo',fld:'TRANSACAOSAIDASNALTERASALDO'},{av:'A5608TransacaoSaidaPrecoId',fld:'TRANSACAOSAIDAPRECOID'},{av:'A5586TransacaoSaidaClienteId',fld:'TRANSACAOSAIDACLIENTEID'},{av:'A5578TransacaoSaidaCFOPDenEstadoCod',fld:'TRANSACAOSAIDACFOPDENESTADOCOD'},{av:'A5580TransacaoSaidaCFOPForEstadoCod',fld:'TRANSACAOSAIDACFOPFORESTADOCOD'},{av:'A5595TransacaoSaidaCSTTipo',fld:'TRANSACAOSAIDACSTTIPO'},{av:'A5597TransacaoSaidaCSTCodigo',fld:'TRANSACAOSAIDACSTCODIGO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV73PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV67TransacaoEntradaPessoaId',fld:'vTRANSACAOENTRADAPESSOAID'},{av:'A830PessoaUsuarioId',fld:'PESSOAUSUARIOID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'AV75TransacaoSaidaClienteId',fld:'vTRANSACAOSAIDACLIENTEID'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'}],[{av:'AV43TpErro',fld:'vTPERRO'},{av:'AV64TrnEntrada',fld:'vTRNENTRADA'},{av:'AV65TrnSaida',fld:'vTRNSAIDA'},{av:'AV122GXLvl333',fld:'vGXLVL333'},{av:'AV67TransacaoEntradaPessoaId',fld:'vTRANSACAOENTRADAPESSOAID'},{av:'AV68TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'AV123GXLvl378',fld:'vGXLVL378'},{av:'AV69TransacaoEntradaCFOPDenEstadoCodigo',fld:'vTRANSACAOENTRADACFOPDENESTADOCODIGO'},{av:'AV124GXLvl394',fld:'vGXLVL394'},{av:'AV70TransacaoEntradaCFOPforEstadoCodigo',fld:'vTRANSACAOENTRADACFOPFORESTADOCODIGO'},{av:'AV125GXLvl409',fld:'vGXLVL409'},{av:'AV71TransacaoEntradaCSTTipo',fld:'vTRANSACAOENTRADACSTTIPO'},{av:'AV72TransacaoEntradaCSTCodigo',fld:'vTRANSACAOENTRADACSTCODIGO'},{av:'AV126GXLvl425',fld:'vGXLVL425'},{av:'AV127GXLvl445',fld:'vGXLVL445'},{av:'AV75TransacaoSaidaClienteId',fld:'vTRANSACAOSAIDACLIENTEID'},{av:'AV76TransacaoSaidaCFOPDenEstadoCodigo',fld:'vTRANSACAOSAIDACFOPDENESTADOCODIGO'},{av:'AV128GXLvl490',fld:'vGXLVL490'},{av:'AV77TransacaoSaidaCFOPforEstadoCodigo',fld:'vTRANSACAOSAIDACFOPFORESTADOCODIGO'},{av:'AV129GXLvl505',fld:'vGXLVL505'},{av:'AV78TransacaoSaidaCSTTipo',fld:'vTRANSACAOSAIDACSTTIPO'},{av:'AV79TransacaoSaidaCSTCodigo',fld:'vTRANSACAOSAIDACSTCODIGO'},{av:'AV130GXLvl521',fld:'vGXLVL521'},{av:'AV37Filtros',fld:'vFILTROS'},{av:'AV131GXLvl540',fld:'vGXLVL540'},{av:'AV132GXLvl555',fld:'vGXLVL555'}]];
   this.EvtParms["'NOVATRANSFERENCIAPRODUTO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'},{av:'AV43TpErro',fld:'vTPERRO'},{av:'A4480TransacaoEntradaEmpresaId',fld:'TRANSACAOENTRADAEMPRESAID'},{av:'AV66TransacaoEntradaEmpresaId',fld:'vTRANSACAOENTRADAEMPRESAID'},{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'A4490TransacaoEntradaAtivo',fld:'TRANSACAOENTRADAATIVO'},{av:'A5489TransacaoEntradaTipo',fld:'TRANSACAOENTRADATIPO'},{av:'A4488TransacaoEntradaSnLancaFinanc',fld:'TRANSACAOENTRADASNLANCAFINANC'},{av:'A4485TransacaoEntradaSnAlteraCusto',fld:'TRANSACAOENTRADASNALTERACUSTO'},{av:'A4487TransacaoEntradaSnAlteraSaldo',fld:'TRANSACAOENTRADASNALTERASALDO'},{av:'A4586TransacaoEntradaPessoaId',fld:'TRANSACAOENTRADAPESSOAID'},{av:'A4494TransacaoEntradaFilialId',fld:'TRANSACAOENTRADAFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV44FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A4603TransacaoEntradaCFOPDenEstadoC',fld:'TRANSACAOENTRADACFOPDENESTADOC'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'A4604TransacaoEntradaCFOPForEstadoC',fld:'TRANSACAOENTRADACFOPFORESTADOC'},{av:'A4500TransacaoEntradaCSTTipo',fld:'TRANSACAOENTRADACSTTIPO'},{av:'A4502TransacaoEntradaCSTCodigo',fld:'TRANSACAOENTRADACSTCODIGO'},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV74TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'A5569TransacaoSaidaTipo',fld:'TRANSACAOSAIDATIPO'},{av:'A5573TransacaoSaidaSnLancaFinanc',fld:'TRANSACAOSAIDASNLANCAFINANC'},{av:'A5572TransacaoSaidaSnAlteraSaldo',fld:'TRANSACAOSAIDASNALTERASALDO'},{av:'A5608TransacaoSaidaPrecoId',fld:'TRANSACAOSAIDAPRECOID'},{av:'A5586TransacaoSaidaClienteId',fld:'TRANSACAOSAIDACLIENTEID'},{av:'A5578TransacaoSaidaCFOPDenEstadoCod',fld:'TRANSACAOSAIDACFOPDENESTADOCOD'},{av:'A5580TransacaoSaidaCFOPForEstadoCod',fld:'TRANSACAOSAIDACFOPFORESTADOCOD'},{av:'A5595TransacaoSaidaCSTTipo',fld:'TRANSACAOSAIDACSTTIPO'},{av:'A5597TransacaoSaidaCSTCodigo',fld:'TRANSACAOSAIDACSTCODIGO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV73PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV67TransacaoEntradaPessoaId',fld:'vTRANSACAOENTRADAPESSOAID'},{av:'A830PessoaUsuarioId',fld:'PESSOAUSUARIOID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'AV75TransacaoSaidaClienteId',fld:'vTRANSACAOSAIDACLIENTEID'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'}],[{av:'AV43TpErro',fld:'vTPERRO'},{av:'AV64TrnEntrada',fld:'vTRNENTRADA'},{av:'AV65TrnSaida',fld:'vTRNSAIDA'},{av:'AV122GXLvl333',fld:'vGXLVL333'},{av:'AV67TransacaoEntradaPessoaId',fld:'vTRANSACAOENTRADAPESSOAID'},{av:'AV68TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'AV123GXLvl378',fld:'vGXLVL378'},{av:'AV69TransacaoEntradaCFOPDenEstadoCodigo',fld:'vTRANSACAOENTRADACFOPDENESTADOCODIGO'},{av:'AV124GXLvl394',fld:'vGXLVL394'},{av:'AV70TransacaoEntradaCFOPforEstadoCodigo',fld:'vTRANSACAOENTRADACFOPFORESTADOCODIGO'},{av:'AV125GXLvl409',fld:'vGXLVL409'},{av:'AV71TransacaoEntradaCSTTipo',fld:'vTRANSACAOENTRADACSTTIPO'},{av:'AV72TransacaoEntradaCSTCodigo',fld:'vTRANSACAOENTRADACSTCODIGO'},{av:'AV126GXLvl425',fld:'vGXLVL425'},{av:'AV127GXLvl445',fld:'vGXLVL445'},{av:'AV75TransacaoSaidaClienteId',fld:'vTRANSACAOSAIDACLIENTEID'},{av:'AV76TransacaoSaidaCFOPDenEstadoCodigo',fld:'vTRANSACAOSAIDACFOPDENESTADOCODIGO'},{av:'AV128GXLvl490',fld:'vGXLVL490'},{av:'AV77TransacaoSaidaCFOPforEstadoCodigo',fld:'vTRANSACAOSAIDACFOPFORESTADOCODIGO'},{av:'AV129GXLvl505',fld:'vGXLVL505'},{av:'AV78TransacaoSaidaCSTTipo',fld:'vTRANSACAOSAIDACSTTIPO'},{av:'AV79TransacaoSaidaCSTCodigo',fld:'vTRANSACAOSAIDACSTCODIGO'},{av:'AV130GXLvl521',fld:'vGXLVL521'},{av:'AV37Filtros',fld:'vFILTROS'},{av:'AV131GXLvl540',fld:'vGXLVL540'},{av:'AV132GXLvl555',fld:'vGXLVL555'}]];
   this.EvtParms["'ALTERARTRANSFERENCIA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'},{av:'AV90OrigemDestino',fld:'vORIGEMDESTINO'}],[{av:'AV35MsgAdv',fld:'vMSGADV'},{av:'AV37Filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PARAMETROS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'}],[]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'}],[{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV37Filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'}],[{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV37Filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'}],[{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV37Filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'}],[{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV37Filtros',fld:'vFILTROS'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["VSTTRANSFERENCIA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'},{av:'AV43TpErro',fld:'vTPERRO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV43TpErro',fld:'vTPERRO'},{av:'AV120GXLvl264',fld:'vGXLVL264'},{av:'AV121GXLvl276',fld:'vGXLVL276'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV87StSeleci',fld:'vSTSELECI'},{av:'AV61QtdeLinGrid',fld:'vQTDELINGRID'},{av:'AV62Res',fld:'vRES'},{av:'AV63ResInt',fld:'vRESINT'}]];
   this.EvtParms["'EXCLUIRTRANSFERENCIA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'}],[]];
   this.EvtParms["'ORIGEM'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'},{av:'AV90OrigemDestino',fld:'vORIGEMDESTINO'}],[{av:'AV90OrigemDestino',fld:'vORIGEMDESTINO'},{av:'AV35MsgAdv',fld:'vMSGADV'},{av:'AV37Filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DESTINO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17DataInicial',fld:'vDATAINICIAL'},{av:'AV18DataFinal',fld:'vDATAFINAL'},{av:'AV21UsuarioId',fld:'vUSUARIOID'},{av:'AV22StTransferencia',fld:'vSTTRANSFERENCIA'},{av:'AV81DocumentoEntrada',fld:'vDOCUMENTOENTRADA'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV57TransfDisEmpresaId',fld:'vTRANSFDISEMPRESAID'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPDESTINO","Tooltiptext")',ctrl:'vBMPDESTINO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPORIGEM","Tooltiptext")',ctrl:'vBMPORIGEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV28BmpExc',fld:'vBMPEXC'},{av:'AV58Pagina',fld:'vPAGINA'},{av:'AV59TotPagina',fld:'vTOTPAGINA'},{av:'AV60QtdeTransf',fld:'vQTDETRANSF'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV11MsgErro',fld:'vMSGERRO'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A11151TransfDisEmpresaId',fld:'TRANSFDISEMPRESAID'},{av:'A11166TransfDisTipo',fld:'TRANSFDISTIPO'},{av:'A11163TransfDisData',fld:'TRANSFDISDATA'},{av:'A11164TransfDisUsuario',fld:'TRANSFDISUSUARIO'},{av:'A11165TransfDisSituacao',fld:'TRANSFDISSITUACAO'},{av:'A11152TransfDisNumero',fld:'TRANSFDISNUMERO'},{av:'AV108SnAlterar',fld:'vSNALTERAR'},{av:'A11186TransfDisQtdeDestino',fld:'TRANSFDISQTDEDESTINO'},{av:'AV90OrigemDestino',fld:'vORIGEMDESTINO'}],[{av:'AV90OrigemDestino',fld:'vORIGEMDESTINO'},{av:'AV35MsgAdv',fld:'vMSGADV'},{av:'AV37Filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPRODUTOID.ISVALID"] = [[{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV100ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV91ProdutoId',fld:'vPRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'}],[{av:'AV92ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'}]];
   this.setPrompt("BTNPROMPTENT", [34]);
   this.setPrompt("PROMPT_USUARIOID", [24]);
   this.setPrompt("PROMPTPROD", [40,109,111,110,112,107,103]);
   this.EnterCtrl = ["PESQUISAR"];
   this.setVCMap("A11151TransfDisEmpresaId", "TRANSFDISEMPRESAID", 0, "char");
   this.setVCMap("A11186TransfDisQtdeDestino", "TRANSFDISQTDEDESTINO", 0, "decimal");
   this.setVCMap("AV60QtdeTransf", "vQTDETRANSF", 0, "int");
   this.setVCMap("AV8UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV11MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV108SnAlterar", "vSNALTERAR", 0, "char");
   this.setVCMap("AV60QtdeTransf", "vQTDETRANSF", 0, "int");
   this.setVCMap("AV8UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV11MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV108SnAlterar", "vSNALTERAR", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar(this.GXValidFnc[123]);
   GridContainer.addRefreshingVar({rfrVar:"AV57TransfDisEmpresaId", rfrProp:"Value", gxAttId:"Transfdisempresaid"});
   GridContainer.addRefreshingVar({rfrVar:"AV27BmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV88bmpDestino", rfrProp:"Tooltiptext", gxAttId:"Bmpdestino"});
   GridContainer.addRefreshingVar({rfrVar:"AV89bmpOrigem", rfrProp:"Tooltiptext", gxAttId:"Bmporigem"});
   GridContainer.addRefreshingVar({rfrVar:"AV28BmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV28BmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar(this.GXValidFnc[121]);
   GridContainer.addRefreshingVar(this.GXValidFnc[119]);
   GridContainer.addRefreshingVar({rfrVar:"AV60QtdeTransf"});
   GridContainer.addRefreshingVar({rfrVar:"AV8UsrCod"});
   GridContainer.addRefreshingVar({rfrVar:"AV11MsgErro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[108]);
   GridContainer.addRefreshingVar({rfrVar:"A11151TransfDisEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A11166TransfDisTipo", rfrProp:"Value", gxAttId:"11166"});
   GridContainer.addRefreshingVar({rfrVar:"A11163TransfDisData", rfrProp:"Value", gxAttId:"11163"});
   GridContainer.addRefreshingVar({rfrVar:"A11164TransfDisUsuario", rfrProp:"Value", gxAttId:"11164"});
   GridContainer.addRefreshingVar({rfrVar:"A11165TransfDisSituacao", rfrProp:"Value", gxAttId:"11165"});
   GridContainer.addRefreshingVar({rfrVar:"A11152TransfDisNumero", rfrProp:"Value", gxAttId:"11152"});
   GridContainer.addRefreshingVar({rfrVar:"AV108SnAlterar"});
   GridContainer.addRefreshingVar({rfrVar:"A11186TransfDisQtdeDestino"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultartransferenciadis());
