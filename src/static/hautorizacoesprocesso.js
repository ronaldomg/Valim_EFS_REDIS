/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:58.80
*/
gx.evt.autoSkip = false;
gx.define('hautorizacoesprocesso', false, function () {
   this.ServerClass =  "hautorizacoesprocesso" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A3391PedidoCompraValorTotal=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORTOTAL",'.',',') ;
      this.A3382PedidoCompraValorDesconto=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORDESCONTO",'.',',') ;
      this.A3383PedidoCompraValorFrete=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORFRETE",'.',',') ;
      this.A3385PedidoCompraValorSeguro=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORSEGURO",'.',',') ;
      this.A3384PedidoCompraValorEncargo=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORENCARGO",'.',',') ;
      this.A3785PedidoCompraValorIPI=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORIPI",'.',',') ;
      this.A3786PedidoCompraValorICMS=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORICMS",'.',',') ;
      this.A3787PedidoCompraValorICMSST=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORICMSST",'.',',') ;
      this.A3788PedidoCompraValorLiquido=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORLIQUIDO",'.',',') ;
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV55Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A3426PedidoCompraEmpresaId=gx.fn.getControlValue("PEDIDOCOMPRAEMPRESAID") ;
      this.AV45CorPed=gx.fn.getControlValue("vCORPED") ;
   };
   this.Validv_Processoconvano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Processoconvnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocompraano=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(73) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAANO", gx.fn.currentGridRowImpl(73));
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
   this.Valid_Pedidocompranumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(73) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRANUMERO", gx.fn.currentGridRowImpl(73));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitacaonumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(73) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SOLICITACAONUMERO", gx.fn.currentGridRowImpl(73));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocomprapessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(73) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAPESSOAID", gx.fn.currentGridRowImpl(73));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s142_client=function()
   {
      if ( this.AV45CorPed == "0" || (""==this.AV45CorPed) )
      {
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setGridCtrlProperty("SOLICITACAONUMERO","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setGridCtrlProperty("vPEDIDOCOMPRAVALORLIQUIDO","Forecolor", gx.color.rgb( 44, 44, 44) );
      }
      else if ( this.AV45CorPed == "1" )
      {
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setGridCtrlProperty("SOLICITACAONUMERO","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setGridCtrlProperty("vPEDIDOCOMPRAVALORLIQUIDO","Forecolor", gx.color.rgb( 0, 180, 0) );
      }
      else if ( this.AV45CorPed == "2" )
      {
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setGridCtrlProperty("SOLICITACAONUMERO","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setGridCtrlProperty("vPEDIDOCOMPRAVALORLIQUIDO","Forecolor", gx.color.rgb( 255, 0, 0) );
      }
      else if ( this.AV45CorPed == "3" )
      {
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setGridCtrlProperty("SOLICITACAONUMERO","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setGridCtrlProperty("vPEDIDOCOMPRAVALORLIQUIDO","Forecolor", gx.color.rgb( 65, 105, 225) );
      }
      else if ( this.AV45CorPed == "4" )
      {
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setGridCtrlProperty("SOLICITACAONUMERO","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setGridCtrlProperty("vPEDIDOCOMPRAVALORLIQUIDO","Forecolor", gx.color.rgb( 250, 75, 167) );
      }
      else if ( this.AV45CorPed == "5" )
      {
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setGridCtrlProperty("SOLICITACAONUMERO","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setGridCtrlProperty("vPEDIDOCOMPRAVALORLIQUIDO","Forecolor", gx.color.rgb( 157, 0, 0) );
      }
      else if ( this.AV45CorPed == "6" )
      {
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setGridCtrlProperty("SOLICITACAONUMERO","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setGridCtrlProperty("PEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setGridCtrlProperty("vPEDIDOCOMPRAVALORLIQUIDO","Forecolor", gx.color.rgb( 128, 128, 0) );
      }
   };
   this.e11md2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12md2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e14md2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13md2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e18md2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, arguments[0], false, false);
   };
   this.e19md2_client=function()
   {
      this.executeServerEvent("'CONSULTARPEDIDO'", true, arguments[0], false, false);
   };
   this.e20md2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e21md2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,20,22,24,26,29,31,33,36,38,41,43,44,47,49,52,55,58,60,62,64,67,69,70,74,75,76,77,78,79,80,81,82,83,84,85,90,93,95,98,100,103,105,110,113,115,117,119,123,124,125,126];
   this.GXLastCtrlId =126;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",73,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hautorizacoesprocesso",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3336,74,"PEDIDOCOMPRAANO","","","PedidoCompraAno","int",0,"px",4,4,"right",null,[],3336,"PedidoCompraAno",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3337,75,"PEDIDOCOMPRANUMERO","","","PedidoCompraNumero","int",0,"px",7,7,"right",null,[],3337,"PedidoCompraNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3371,76,"SOLICITACAONUMERO","","","SolicitacaoNumero","int",0,"px",7,7,"right",null,[],3371,"SolicitacaoNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3362,77,"PEDIDOCOMPRAPESSOAID","","","PedidoCompraPessoaId","int",0,"px",7,7,"right",null,[],3362,"PedidoCompraPessoaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3778,78,"PEDIDOCOMPRAPESSOAFANTASIA","","","PedidoCompraPessoaFantasia","svchar",0,"px",60,60,"left",null,[],3778,"PedidoCompraPessoaFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3360,79,"PEDIDOCOMPRADATA","Data","","PedidoCompraData","date",0,"px",10,10,"right",null,[],3360,"PedidoCompraData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Pedidocompravalorliquido",80,"vPEDIDOCOMPRAVALORLIQUIDO","","","PedidoCompraValorLiquido","decimal",0,"px",22,22,"right",null,[],"Pedidocompravalorliquido","PedidoCompraValorLiquido",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",81,0,"px",17,"px","e19md2_client","","Cons","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpimprime","vBMPIMPRIME",82,0,"px",17,"px","e18md2_client","","Imp","Image","GridColumnImage");
   GridContainer.addComboBox(3380,83,"PEDIDOCOMPRASITUACAO","Situação","PedidoCompraSituacao","char",null,0,false,false,0,"px","");
   GridContainer.addComboBox(4021,84,"SOLICITACAOSITUACAO","Situação","SolicitacaoSituacao","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit(3388,85,"PEDIDOCOMPRAFILIALID","Código Filial","","PedidoCompraFilialId","int",0,"px",7,7,"right",null,[],3388,"PedidoCompraFilialId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE10",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"ORDEREDTEXT", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE1",grid:0};
   GXValidFnc[17]={fld:"TABLE12",grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Processoconvano,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVANO",gxz:"ZV31ProcessoConvAno",gxold:"OV31ProcessoConvAno",gxvar:"AV31ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ProcessoConvAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVANO",gx.O.AV31ProcessoConvAno,0)},c2v:function(){gx.O.AV31ProcessoConvAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVANO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Processoconvnumero,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVNUMERO",gxz:"ZV30ProcessoConvNumero",gxold:"OV30ProcessoConvNumero",gxvar:"AV30ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ProcessoConvNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVNUMERO",gx.O.AV30ProcessoConvNumero,0)},c2v:function(){gx.O.AV30ProcessoConvNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLE9",grid:0};
   GXValidFnc[29]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVSITUACAO",gxz:"ZV32ProcessoConvSituacao",gxold:"OV32ProcessoConvSituacao",gxvar:"AV32ProcessoConvSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32ProcessoConvSituacao=Value},v2z:function(Value){gx.O.ZV32ProcessoConvSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPROCESSOCONVSITUACAO",gx.O.AV32ProcessoConvSituacao)},c2v:function(){gx.O.AV32ProcessoConvSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOCONVSITUACAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE11",grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVDATAVALIDADE",gxz:"ZV28ProcessoConvDataValidade",gxold:"OV28ProcessoConvDataValidade",gxvar:"AV28ProcessoConvDataValidade",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ProcessoConvDataValidade=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28ProcessoConvDataValidade=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVDATAVALIDADE",gx.O.AV28ProcessoConvDataValidade,0)},c2v:function(){gx.O.AV28ProcessoConvDataValidade=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPROCESSOCONVDATAVALIDADE")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV29ConvenioId",gxold:"OV29ConvenioId",gxvar:"AV29ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV29ConvenioId,0)},c2v:function(){gx.O.AV29ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV33ConvenioDescricao",gxold:"OV33ConvenioDescricao",gxvar:"AV33ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV33ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV33ConvenioDescricao,0)},c2v:function(){gx.O.AV33ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVFINALIDADE",gxz:"ZV27ProcessoConvFinalidade",gxold:"OV27ProcessoConvFinalidade",gxvar:"AV27ProcessoConvFinalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProcessoConvFinalidade=Value},v2z:function(Value){gx.O.ZV27ProcessoConvFinalidade=Value},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVFINALIDADE",gx.O.AV27ProcessoConvFinalidade,0)},c2v:function(){gx.O.AV27ProcessoConvFinalidade=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOCONVFINALIDADE")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLE4",grid:0};
   GXValidFnc[55]={fld:"TABLE3",grid:0};
   GXValidFnc[58]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[60]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   GXValidFnc[64]={fld:"TABLE5",grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocompraano,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAANO",gxz:"Z3336PedidoCompraAno",gxold:"O3336PedidoCompraAno",gxvar:"A3336PedidoCompraAno",ucs:[],op:[84,78],ip:[84,78,75,74,76,77],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3336PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3336PedidoCompraAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(73),gx.O.A3336PedidoCompraAno,0)},c2v:function(){gx.O.A3336PedidoCompraAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(73),'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocompranumero,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRANUMERO",gxz:"Z3337PedidoCompraNumero",gxold:"O3337PedidoCompraNumero",gxvar:"A3337PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3337PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3337PedidoCompraNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(73),gx.O.A3337PedidoCompraNumero,0)},c2v:function(){gx.O.A3337PedidoCompraNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(73),'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:this.Valid_Solicitacaonumero,isvalid:null,rgrid:[],fld:"SOLICITACAONUMERO",gxz:"Z3371SolicitacaoNumero",gxold:"O3371SolicitacaoNumero",gxvar:"A3371SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3371SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3371SolicitacaoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAONUMERO",row || gx.fn.currentGridRowImpl(73),gx.O.A3371SolicitacaoNumero,0)},c2v:function(){gx.O.A3371SolicitacaoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOLICITACAONUMERO",row || gx.fn.currentGridRowImpl(73),'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocomprapessoaid,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAPESSOAID",gxz:"Z3362PedidoCompraPessoaId",gxold:"O3362PedidoCompraPessoaId",gxvar:"A3362PedidoCompraPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3362PedidoCompraPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3362PedidoCompraPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAPESSOAID",row || gx.fn.currentGridRowImpl(73),gx.O.A3362PedidoCompraPessoaId,0)},c2v:function(){gx.O.A3362PedidoCompraPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRAPESSOAID",row || gx.fn.currentGridRowImpl(73),'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAPESSOAFANTASIA",gxz:"Z3778PedidoCompraPessoaFantasia",gxold:"O3778PedidoCompraPessoaFantasia",gxvar:"A3778PedidoCompraPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3778PedidoCompraPessoaFantasia=Value},v2z:function(Value){gx.O.Z3778PedidoCompraPessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(73),gx.O.A3778PedidoCompraPessoaFantasia,0)},c2v:function(){gx.O.A3778PedidoCompraPessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRADATA",gxz:"Z3360PedidoCompraData",gxold:"O3360PedidoCompraData",gxvar:"A3360PedidoCompraData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3360PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3360PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(73),gx.O.A3360PedidoCompraData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3360PedidoCompraData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAVALORLIQUIDO",gxz:"ZV51PedidoCompraValorLiquido",gxold:"OV51PedidoCompraValorLiquido",gxvar:"AV51PedidoCompraValorLiquido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV51PedidoCompraValorLiquido=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV51PedidoCompraValorLiquido=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vPEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(73),gx.O.AV51PedidoCompraValorLiquido,2,',')},c2v:function(){gx.O.AV51PedidoCompraValorLiquido=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vPEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(73),'.',',')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(73),gx.O.AV16bmpCon,gx.O.AV57Bmpcon_GXI)},c2v:function(){gx.O.AV57Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(73))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(73))}, gxvar_GXI:'AV57Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMPRIME",gxz:"ZV38bmpImprime",gxold:"OV38bmpImprime",gxvar:"AV38bmpImprime",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV38bmpImprime=Value},v2z:function(Value){gx.O.ZV38bmpImprime=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMPRIME",row || gx.fn.currentGridRowImpl(73),gx.O.AV38bmpImprime,gx.O.AV58Bmpimprime_GXI)},c2v:function(){gx.O.AV58Bmpimprime_GXI=this.val_GXI();gx.O.AV38bmpImprime=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMPRIME",row || gx.fn.currentGridRowImpl(73))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMPRIME_GXI",row || gx.fn.currentGridRowImpl(73))}, gxvar_GXI:'AV58Bmpimprime_GXI',nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRASITUACAO",gxz:"Z3380PedidoCompraSituacao",gxold:"O3380PedidoCompraSituacao",gxvar:"A3380PedidoCompraSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3380PedidoCompraSituacao=Value},v2z:function(Value){gx.O.Z3380PedidoCompraSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PEDIDOCOMPRASITUACAO",row || gx.fn.currentGridRowImpl(73),gx.O.A3380PedidoCompraSituacao)},c2v:function(){gx.O.A3380PedidoCompraSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRASITUACAO",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOSITUACAO",gxz:"Z4021SolicitacaoSituacao",gxold:"O4021SolicitacaoSituacao",gxvar:"A4021SolicitacaoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A4021SolicitacaoSituacao=Value},v2z:function(Value){gx.O.Z4021SolicitacaoSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SOLICITACAOSITUACAO",row || gx.fn.currentGridRowImpl(73),gx.O.A4021SolicitacaoSituacao)},c2v:function(){gx.O.A4021SolicitacaoSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITACAOSITUACAO",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAFILIALID",gxz:"Z3388PedidoCompraFilialId",gxold:"O3388PedidoCompraFilialId",gxvar:"A3388PedidoCompraFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3388PedidoCompraFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3388PedidoCompraFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAFILIALID",row || gx.fn.currentGridRowImpl(73),gx.O.A3388PedidoCompraFilialId,0)},c2v:function(){gx.O.A3388PedidoCompraFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRAFILIALID",row || gx.fn.currentGridRowImpl(73),'.')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TABLE6",grid:0};
   GXValidFnc[93]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMGABERTO",gxz:"ZV39ImgAberto",gxold:"OV39ImgAberto",gxvar:"AV39ImgAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ImgAberto=Value},v2z:function(Value){gx.O.ZV39ImgAberto=Value},v2c:function(){gx.fn.setMultimediaValue("vIMGABERTO",gx.O.AV39ImgAberto,gx.O.AV60Imgaberto_GXI)},c2v:function(){gx.O.AV60Imgaberto_GXI=this.val_GXI();gx.O.AV39ImgAberto=this.val()},val:function(){return gx.fn.getBlobValue("vIMGABERTO")},val_GXI:function(){return gx.fn.getControlValue("vIMGABERTO_GXI")}, gxvar_GXI:'AV60Imgaberto_GXI',nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMGFECHADO",gxz:"ZV40ImgFechado",gxold:"OV40ImgFechado",gxvar:"AV40ImgFechado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ImgFechado=Value},v2z:function(Value){gx.O.ZV40ImgFechado=Value},v2c:function(){gx.fn.setMultimediaValue("vIMGFECHADO",gx.O.AV40ImgFechado,gx.O.AV61Imgfechado_GXI)},c2v:function(){gx.O.AV61Imgfechado_GXI=this.val_GXI();gx.O.AV40ImgFechado=this.val()},val:function(){return gx.fn.getBlobValue("vIMGFECHADO")},val_GXI:function(){return gx.fn.getControlValue("vIMGFECHADO_GXI")}, gxvar_GXI:'AV61Imgfechado_GXI',nac:gx.falseFn};
   GXValidFnc[100]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMGCANCELADO",gxz:"ZV41ImgCancelado",gxold:"OV41ImgCancelado",gxvar:"AV41ImgCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ImgCancelado=Value},v2z:function(Value){gx.O.ZV41ImgCancelado=Value},v2c:function(){gx.fn.setMultimediaValue("vIMGCANCELADO",gx.O.AV41ImgCancelado,gx.O.AV62Imgcancelado_GXI)},c2v:function(){gx.O.AV62Imgcancelado_GXI=this.val_GXI();gx.O.AV41ImgCancelado=this.val()},val:function(){return gx.fn.getBlobValue("vIMGCANCELADO")},val_GXI:function(){return gx.fn.getControlValue("vIMGCANCELADO_GXI")}, gxvar_GXI:'AV62Imgcancelado_GXI',nac:gx.falseFn};
   GXValidFnc[105]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[110]={fld:"TABLE8",grid:0};
   GXValidFnc[113]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDAUTORIZACOES",gxz:"ZV35QtdAutorizacoes",gxold:"OV35QtdAutorizacoes",gxvar:"AV35QtdAutorizacoes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35QtdAutorizacoes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35QtdAutorizacoes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDAUTORIZACOES",gx.O.AV35QtdAutorizacoes,0)},c2v:function(){gx.O.AV35QtdAutorizacoes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDAUTORIZACOES",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLTOTAL",gxz:"ZV36VlTotal",gxold:"OV36VlTotal",gxvar:"AV36VlTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36VlTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV36VlTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLTOTAL",gx.O.AV36VlTotal,2,',')},c2v:function(){gx.O.AV36VlTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVLTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[123]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORPEDABERTO",gxz:"ZV42CorPedAberto",gxold:"OV42CorPedAberto",gxvar:"AV42CorPedAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42CorPedAberto=Value},v2z:function(Value){gx.O.ZV42CorPedAberto=Value},v2c:function(){gx.fn.setControlValue("vCORPEDABERTO",gx.O.AV42CorPedAberto,0)},c2v:function(){gx.O.AV42CorPedAberto=this.val()},val:function(){return gx.fn.getControlValue("vCORPEDABERTO")},nac:gx.falseFn};
   GXValidFnc[124]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORPEDCANCELADO",gxz:"ZV44CorPedCancelado",gxold:"OV44CorPedCancelado",gxvar:"AV44CorPedCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44CorPedCancelado=Value},v2z:function(Value){gx.O.ZV44CorPedCancelado=Value},v2c:function(){gx.fn.setControlValue("vCORPEDCANCELADO",gx.O.AV44CorPedCancelado,0)},c2v:function(){gx.O.AV44CorPedCancelado=this.val()},val:function(){return gx.fn.getControlValue("vCORPEDCANCELADO")},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORPEDFECHADO",gxz:"ZV43CorPedFechado",gxold:"OV43CorPedFechado",gxvar:"AV43CorPedFechado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43CorPedFechado=Value},v2z:function(Value){gx.O.ZV43CorPedFechado=Value},v2c:function(){gx.fn.setControlValue("vCORPEDFECHADO",gx.O.AV43CorPedFechado,0)},c2v:function(){gx.O.AV43CorPedFechado=this.val()},val:function(){return gx.fn.getControlValue("vCORPEDFECHADO")},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV31ProcessoConvAno = 0 ;
   this.ZV31ProcessoConvAno = 0 ;
   this.OV31ProcessoConvAno = 0 ;
   this.AV30ProcessoConvNumero = 0 ;
   this.ZV30ProcessoConvNumero = 0 ;
   this.OV30ProcessoConvNumero = 0 ;
   this.AV32ProcessoConvSituacao = "" ;
   this.ZV32ProcessoConvSituacao = "" ;
   this.OV32ProcessoConvSituacao = "" ;
   this.AV28ProcessoConvDataValidade = gx.date.nullDate() ;
   this.ZV28ProcessoConvDataValidade = gx.date.nullDate() ;
   this.OV28ProcessoConvDataValidade = gx.date.nullDate() ;
   this.AV29ConvenioId = 0 ;
   this.ZV29ConvenioId = 0 ;
   this.OV29ConvenioId = 0 ;
   this.AV33ConvenioDescricao = "" ;
   this.ZV33ConvenioDescricao = "" ;
   this.OV33ConvenioDescricao = "" ;
   this.AV27ProcessoConvFinalidade = "" ;
   this.ZV27ProcessoConvFinalidade = "" ;
   this.OV27ProcessoConvFinalidade = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3336PedidoCompraAno = 0 ;
   this.O3336PedidoCompraAno = 0 ;
   this.Z3337PedidoCompraNumero = 0 ;
   this.O3337PedidoCompraNumero = 0 ;
   this.Z3371SolicitacaoNumero = 0 ;
   this.O3371SolicitacaoNumero = 0 ;
   this.Z3362PedidoCompraPessoaId = 0 ;
   this.O3362PedidoCompraPessoaId = 0 ;
   this.Z3778PedidoCompraPessoaFantasia = "" ;
   this.O3778PedidoCompraPessoaFantasia = "" ;
   this.Z3360PedidoCompraData = gx.date.nullDate() ;
   this.O3360PedidoCompraData = gx.date.nullDate() ;
   this.ZV51PedidoCompraValorLiquido = 0 ;
   this.OV51PedidoCompraValorLiquido = 0 ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV38bmpImprime = "" ;
   this.OV38bmpImprime = "" ;
   this.Z3380PedidoCompraSituacao = "" ;
   this.O3380PedidoCompraSituacao = "" ;
   this.Z4021SolicitacaoSituacao = "" ;
   this.O4021SolicitacaoSituacao = "" ;
   this.Z3388PedidoCompraFilialId = 0 ;
   this.O3388PedidoCompraFilialId = 0 ;
   this.AV60Imgaberto_GXI = "" ;
   this.AV39ImgAberto = "" ;
   this.ZV39ImgAberto = "" ;
   this.OV39ImgAberto = "" ;
   this.AV61Imgfechado_GXI = "" ;
   this.AV40ImgFechado = "" ;
   this.ZV40ImgFechado = "" ;
   this.OV40ImgFechado = "" ;
   this.AV62Imgcancelado_GXI = "" ;
   this.AV41ImgCancelado = "" ;
   this.ZV41ImgCancelado = "" ;
   this.OV41ImgCancelado = "" ;
   this.AV35QtdAutorizacoes = 0 ;
   this.ZV35QtdAutorizacoes = 0 ;
   this.OV35QtdAutorizacoes = 0 ;
   this.AV36VlTotal = 0 ;
   this.ZV36VlTotal = 0 ;
   this.OV36VlTotal = 0 ;
   this.AV42CorPedAberto = "" ;
   this.ZV42CorPedAberto = "" ;
   this.OV42CorPedAberto = "" ;
   this.AV44CorPedCancelado = "" ;
   this.ZV44CorPedCancelado = "" ;
   this.OV44CorPedCancelado = "" ;
   this.AV43CorPedFechado = "" ;
   this.ZV43CorPedFechado = "" ;
   this.OV43CorPedFechado = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV31ProcessoConvAno = 0 ;
   this.AV30ProcessoConvNumero = 0 ;
   this.AV32ProcessoConvSituacao = "" ;
   this.AV28ProcessoConvDataValidade = gx.date.nullDate() ;
   this.AV29ConvenioId = 0 ;
   this.AV33ConvenioDescricao = "" ;
   this.AV27ProcessoConvFinalidade = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV39ImgAberto = "" ;
   this.AV40ImgFechado = "" ;
   this.AV41ImgCancelado = "" ;
   this.AV35QtdAutorizacoes = 0 ;
   this.AV36VlTotal = 0 ;
   this.AV42CorPedAberto = "" ;
   this.AV44CorPedCancelado = "" ;
   this.AV43CorPedFechado = "" ;
   this.AV11OrderedBy = 0 ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3787PedidoCompraValorICMSST = 0 ;
   this.A3786PedidoCompraValorICMS = 0 ;
   this.A3785PedidoCompraValorIPI = 0 ;
   this.A3384PedidoCompraValorEncargo = 0 ;
   this.A3385PedidoCompraValorSeguro = 0 ;
   this.A3383PedidoCompraValorFrete = 0 ;
   this.A3382PedidoCompraValorDesconto = 0 ;
   this.A3391PedidoCompraValorTotal = 0 ;
   this.A3788PedidoCompraValorLiquido = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3361PedidoCompraPessoaEmpId = "" ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3362PedidoCompraPessoaId = 0 ;
   this.A3778PedidoCompraPessoaFantasia = "" ;
   this.A3360PedidoCompraData = gx.date.nullDate() ;
   this.AV51PedidoCompraValorLiquido = 0 ;
   this.AV16bmpCon = "" ;
   this.AV38bmpImprime = "" ;
   this.A3380PedidoCompraSituacao = "" ;
   this.A4021SolicitacaoSituacao = "" ;
   this.A3388PedidoCompraFilialId = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.A3818ProcessoConvDataValidade = gx.date.nullDate() ;
   this.A3819ProcessoConvFinalidade = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.A3815ProcessoConvSituacao = "" ;
   this.A1680ConvenioEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV55Pgmname = "" ;
   this.AV45CorPed = "" ;
   this.Events = {"e11md2_client": ["'ANTERIOR'", true] ,"e12md2_client": ["'PROXIMO'", true] ,"e14md2_client": ["VPAGINA.CLICK", true] ,"e13md2_client": ["'FECHAR'", true] ,"e18md2_client": ["'IMPRIMIR'", true] ,"e19md2_client": ["'CONSULTARPEDIDO'", true] ,"e20md2_client": ["ENTER", true] ,"e21md2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO',hsh:true},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV55Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV42CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV43CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV44CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV45CorPed',fld:'vCORPED'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO',hsh:true},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV55Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV42CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV43CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV44CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV45CorPed',fld:'vCORPED'}],[{ctrl:'PEDIDOCOMPRAANO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Title")',ctrl:'PEDIDOCOMPRAANO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PEDIDOCOMPRANUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRANUMERO","Title")',ctrl:'PEDIDOCOMPRANUMERO',prop:'Title'},{ctrl:'SOLICITACAONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SOLICITACAONUMERO","Title")',ctrl:'SOLICITACAONUMERO',prop:'Title'},{ctrl:'PEDIDOCOMPRAPESSOAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAPESSOAID","Title")',ctrl:'PEDIDOCOMPRAPESSOAID',prop:'Title'},{ctrl:'PEDIDOCOMPRAPESSOAFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAPESSOAFANTASIA","Title")',ctrl:'PEDIDOCOMPRAPESSOAFANTASIA',prop:'Title'},{ctrl:'vPEDIDOCOMPRAVALORLIQUIDO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vPEDIDOCOMPRAVALORLIQUIDO","Title")',ctrl:'vPEDIDOCOMPRAVALORLIQUIDO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO',hsh:true},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV55Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV42CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV43CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV44CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV45CorPed',fld:'vCORPED'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO',hsh:true},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV55Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV42CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV43CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV44CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV45CorPed',fld:'vCORPED'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO',hsh:true},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV55Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV42CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV43CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV44CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV45CorPed',fld:'vCORPED'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV55Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV42CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV43CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV44CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV45CorPed',fld:'vCORPED'}],[{av:'AV51PedidoCompraValorLiquido',fld:'vPEDIDOCOMPRAVALORLIQUIDO'},{av:'AV45CorPed',fld:'vCORPED'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Forecolor")',ctrl:'PEDIDOCOMPRAANO',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRANUMERO","Forecolor")',ctrl:'PEDIDOCOMPRANUMERO',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("SOLICITACAONUMERO","Forecolor")',ctrl:'SOLICITACAONUMERO',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAPESSOAID","Forecolor")',ctrl:'PEDIDOCOMPRAPESSOAID',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAPESSOAFANTASIA","Forecolor")',ctrl:'PEDIDOCOMPRAPESSOAFANTASIA',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRADATA","Forecolor")',ctrl:'PEDIDOCOMPRADATA',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("vPEDIDOCOMPRAVALORLIQUIDO","Forecolor")',ctrl:'vPEDIDOCOMPRAVALORLIQUIDO',prop:'Forecolor'}]];
   this.EvtParms["'CONSULTARPEDIDO'"] = [[{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'}],[{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV56Pgmdesc',fld:'vPGMDESC'}],[{av:'AV46SNPossuiSistema',fld:'vSNPOSSUISISTEMA'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV52SnCSV',fld:'vSNCSV'},{av:'AV47ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV48SdtPedido',fld:'vSDTPEDIDO'},{av:'AV49SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'},{av:'AV37QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV50Orientacao',fld:'vORIENTACAO'}]];
   this.setVCMap("A3391PedidoCompraValorTotal", "PEDIDOCOMPRAVALORTOTAL", 0, "decimal");
   this.setVCMap("A3382PedidoCompraValorDesconto", "PEDIDOCOMPRAVALORDESCONTO", 0, "decimal");
   this.setVCMap("A3383PedidoCompraValorFrete", "PEDIDOCOMPRAVALORFRETE", 0, "decimal");
   this.setVCMap("A3385PedidoCompraValorSeguro", "PEDIDOCOMPRAVALORSEGURO", 0, "decimal");
   this.setVCMap("A3384PedidoCompraValorEncargo", "PEDIDOCOMPRAVALORENCARGO", 0, "decimal");
   this.setVCMap("A3785PedidoCompraValorIPI", "PEDIDOCOMPRAVALORIPI", 0, "decimal");
   this.setVCMap("A3786PedidoCompraValorICMS", "PEDIDOCOMPRAVALORICMS", 0, "decimal");
   this.setVCMap("A3787PedidoCompraValorICMSST", "PEDIDOCOMPRAVALORICMSST", 0, "decimal");
   this.setVCMap("A3788PedidoCompraValorLiquido", "PEDIDOCOMPRAVALORLIQUIDO", 0, "decimal");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV55Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A3426PedidoCompraEmpresaId", "PEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV45CorPed", "vCORPED", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV55Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A3426PedidoCompraEmpresaId", "PEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV45CorPed", "vCORPED", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[126]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV38bmpImprime", rfrProp:"Value", gxAttId:"Bmpimprime"});
   GridContainer.addRefreshingVar({rfrVar:"AV38bmpImprime", rfrProp:"Tooltiptext", gxAttId:"Bmpimprime"});
   GridContainer.addRefreshingVar({rfrVar:"AV55Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar({rfrVar:"A3788PedidoCompraValorLiquido"});
   GridContainer.addRefreshingVar({rfrVar:"A3426PedidoCompraEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A3336PedidoCompraAno", rfrProp:"Value", gxAttId:"3336"});
   GridContainer.addRefreshingVar({rfrVar:"A3337PedidoCompraNumero", rfrProp:"Value", gxAttId:"3337"});
   GridContainer.addRefreshingVar({rfrVar:"A3380PedidoCompraSituacao", rfrProp:"Value", gxAttId:"3380"});
   GridContainer.addRefreshingVar(this.GXValidFnc[123]);
   GridContainer.addRefreshingVar(this.GXValidFnc[125]);
   GridContainer.addRefreshingVar(this.GXValidFnc[124]);
   GridContainer.addRefreshingVar({rfrVar:"AV45CorPed"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hautorizacoesprocesso());
