/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:49:32.29
*/
gx.evt.autoSkip = false;
gx.define('hconsultaautorizacao', false, function () {
   this.ServerClass =  "hconsultaautorizacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV77SnTrocaUsu=gx.fn.getControlValue("vSNTROCAUSU") ;
      this.AV75SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV97SdtGridPedidoCompra=gx.fn.getControlValue("vSDTGRIDPEDIDOCOMPRA") ;
      this.AV61SolicitacaoEmpresaId=gx.fn.getControlValue("vSOLICITACAOEMPRESAID") ;
      this.A3336PedidoCompraAno=gx.fn.getIntegerValue("PEDIDOCOMPRAANO",'.') ;
      this.A3337PedidoCompraNumero=gx.fn.getIntegerValue("PEDIDOCOMPRANUMERO",'.') ;
      this.A3426PedidoCompraEmpresaId=gx.fn.getControlValue("PEDIDOCOMPRAEMPRESAID") ;
      this.AV20PedidoCompraEmpresaId=gx.fn.getControlValue("vPEDIDOCOMPRAEMPRESAID") ;
      this.A3371SolicitacaoNumero=gx.fn.getIntegerValue("SOLICITACAONUMERO",'.') ;
      this.A3360PedidoCompraData=gx.fn.getDateValue("PEDIDOCOMPRADATA") ;
      this.A3362PedidoCompraPessoaId=gx.fn.getIntegerValue("PEDIDOCOMPRAPESSOAID",'.') ;
      this.A3778PedidoCompraPessoaFantasia=gx.fn.getControlValue("PEDIDOCOMPRAPESSOAFANTASIA") ;
      this.A3386PedidoCompraNoPedidoForn=gx.fn.getControlValue("PEDIDOCOMPRANOPEDIDOFORN") ;
      this.A3380PedidoCompraSituacao=gx.fn.getControlValue("PEDIDOCOMPRASITUACAO") ;
      this.AV43PedidoCompraValorTotal=gx.fn.getDecimalValue("vPEDIDOCOMPRAVALORTOTAL",'.',',') ;
      this.AV95SolicitacaoSituacao=gx.fn.getControlValue("vSOLICITACAOSITUACAO") ;
      this.A3370SolicitacaoEmpresaId=gx.fn.getControlValue("SOLICITACAOEMPRESAID") ;
      this.AV98SdtGridPedidoCompraItem=gx.fn.getControlValue("vSDTGRIDPEDIDOCOMPRAITEM") ;
      this.A3359PedidoCompraItemDataHoraAlt=gx.fn.getDateTimeValue("PEDIDOCOMPRAITEMDATAHORAALT") ;
      this.A4021SolicitacaoSituacao=gx.fn.getControlValue("SOLICITACAOSITUACAO") ;
      this.A3427AditivoSequencia=gx.fn.getIntegerValue("ADITIVOSEQUENCIA",'.') ;
      this.AV44AditivoSequencia=gx.fn.getControlValue("vADITIVOSEQUENCIA") ;
      this.A3422AditivoDataHoraAlt=gx.fn.getDateTimeValue("ADITIVODATAHORAALT") ;
      this.A3416AditivoData=gx.fn.getDateValue("ADITIVODATA") ;
      this.AV40PedidoCompraPessoaId=gx.fn.getIntegerValue("vPEDIDOCOMPRAPESSOAID",'.') ;
      this.AV41PedidoCompraPessoaFantasia=gx.fn.getControlValue("vPEDIDOCOMPRAPESSOAFANTASIA") ;
      this.A3420AditivoNoPedidoFornecedor=gx.fn.getControlValue("ADITIVONOPEDIDOFORNECEDOR") ;
      this.AV74ano=gx.fn.getIntegerValue("vANO",'.') ;
      this.AV73Numero=gx.fn.getIntegerValue("vNUMERO",'.') ;
      this.A3425AditivoItemDataHoraAlt=gx.fn.getDateTimeValue("ADITIVOITEMDATAHORAALT") ;
      this.A3338PedidoCompraItemSeq=gx.fn.getIntegerValue("PEDIDOCOMPRAITEMSEQ",'.') ;
      this.AV69PedidoCompraValorTotalAux=gx.fn.getDecimalValue("vPEDIDOCOMPRAVALORTOTALAUX",'.',',') ;
      this.A3423AditivoItemQtde=gx.fn.getDecimalValue("ADITIVOITEMQTDE",'.',',') ;
      this.AV45PedidoCompraItemSeq=gx.fn.getIntegerValue("vPEDIDOCOMPRAITEMSEQ",'.') ;
      this.AV58MsgErro2=gx.fn.getControlValue("vMSGERRO2") ;
      this.AV59MsgErro3=gx.fn.getControlValue("vMSGERRO3") ;
      this.AV60MsgErro4=gx.fn.getControlValue("vMSGERRO4") ;
      this.AV19CalcNoPedidoAno=gx.fn.getControlValue("vCALCNOPEDIDOANO") ;
      this.AV30CorPedAberto=gx.fn.getControlValue("vCORPEDABERTO") ;
      this.AV31CorPedFechado=gx.fn.getControlValue("vCORPEDFECHADO") ;
      this.AV32CorPedCancelado=gx.fn.getControlValue("vCORPEDCANCELADO") ;
      this.AV36CorPed=gx.fn.getControlValue("vCORPED") ;
      this.AV107TituloTela=gx.fn.getControlValue("vTITULOTELA") ;
   };
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
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
      if ( this.AV36CorPed == "0" || (""==this.AV36CorPed) )
      {
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANOPEDIDOFORN","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAVALORTOTAL","Forecolor", gx.color.rgb( 44, 44, 44) );
         gx.fn.setCtrlProperty("CTLADITIVOSEQUENCIA","Forecolor", gx.color.rgb( 44, 44, 44) );
      }
      else if ( this.AV36CorPed == "1" )
      {
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANOPEDIDOFORN","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAVALORTOTAL","Forecolor", gx.color.rgb( 0, 180, 0) );
         gx.fn.setCtrlProperty("CTLADITIVOSEQUENCIA","Forecolor", gx.color.rgb( 0, 180, 0) );
      }
      else if ( this.AV36CorPed == "2" )
      {
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANOPEDIDOFORN","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAVALORTOTAL","Forecolor", gx.color.rgb( 255, 0, 0) );
         gx.fn.setCtrlProperty("CTLADITIVOSEQUENCIA","Forecolor", gx.color.rgb( 255, 0, 0) );
      }
      else if ( this.AV36CorPed == "3" )
      {
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANOPEDIDOFORN","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAVALORTOTAL","Forecolor", gx.color.rgb( 65, 105, 225) );
         gx.fn.setCtrlProperty("CTLADITIVOSEQUENCIA","Forecolor", gx.color.rgb( 65, 105, 225) );
      }
      else if ( this.AV36CorPed == "4" )
      {
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANOPEDIDOFORN","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAVALORTOTAL","Forecolor", gx.color.rgb( 250, 75, 167) );
         gx.fn.setCtrlProperty("CTLADITIVOSEQUENCIA","Forecolor", gx.color.rgb( 250, 75, 167) );
      }
      else if ( this.AV36CorPed == "5" )
      {
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANOPEDIDOFORN","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAVALORTOTAL","Forecolor", gx.color.rgb( 157, 0, 0) );
         gx.fn.setCtrlProperty("CTLADITIVOSEQUENCIA","Forecolor", gx.color.rgb( 157, 0, 0) );
      }
      else if ( this.AV36CorPed == "6" )
      {
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAANO","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANUMERO","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRADATA","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAID","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAPESSOAFANTASIA","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRANOPEDIDOFORN","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setCtrlProperty("CTLPEDIDOCOMPRAVALORTOTAL","Forecolor", gx.color.rgb( 128, 128, 0) );
         gx.fn.setCtrlProperty("CTLADITIVOSEQUENCIA","Forecolor", gx.color.rgb( 128, 128, 0) );
      }
   };
   this.e11mu2_client=function()
   {
      this.executeServerEvent("'PRIMEIRO'", true, null, false, false);
   };
   this.e12mu2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e13mu2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e14mu2_client=function()
   {
      this.executeServerEvent("'ULTIMO'", true, null, false, false);
   };
   this.e15mu2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e16mu2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e22mu2_client=function()
   {
      this.executeServerEvent("'ACOMPANHAMENTO'", true, arguments[0], false, false);
   };
   this.e23mu2_client=function()
   {
      this.executeServerEvent("'CANCELARAUTORIZACAO'", true, arguments[0], false, false);
   };
   this.e17mu2_client=function()
   {
      this.executeServerEvent("'IMPRIMIRTODOS'", false, null, false, false);
   };
   this.e24mu2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, arguments[0], false, false);
   };
   this.e25mu2_client=function()
   {
      this.executeServerEvent("'REGISTRARADITIVO'", true, arguments[0], false, false);
   };
   this.e26mu2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e27mu2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e18mu2_client=function()
   {
      this.executeServerEvent("'TRANSFERIR'", false, null, false, false);
   };
   this.e29mu2_client=function()
   {
      this.executeServerEvent("'ENVIAREMAIL'", true, arguments[0], false, false);
   };
   this.e30mu2_client=function()
   {
      this.executeServerEvent("'ALTERAROBSERVACAO'", true, arguments[0], false, false);
   };
   this.e19mu2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGPEDIDO'", false, null, false, false);
   };
   this.e31mu2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e32mu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,15,17,20,22,27,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,59,62,63,65,66,68,69,75,79,80,81,84,86,88,90,92,94,95,97,98,101,104,106];
   this.GXLastCtrlId =106;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",37,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaautorizacao",[],false,1,true,true,0,false,false,false,"CollSdtGridPedidoCompra.SdtGridPedidoCompraItem",0,"px","Novo registro",true,false,false,null,null,false,"AV97SdtGridPedidoCompra",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV112",38,"CTLPEDIDOCOMPRAANO","Ano","","PedidoCompraAno","int",0,"px",4,4,"right",null,[],"GXV112","GXV112",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV113",39,"CTLPEDIDOCOMPRANUMERO","Número","","PedidoCompraNumero","int",0,"px",7,7,"right",null,[],"GXV113","GXV113",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV114",40,"CTLPEDIDOCOMPRADATA","Data","","PedidoCompraData","date",0,"px",10,10,"right",null,[],"GXV114","GXV114",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV115",41,"CTLPEDIDOCOMPRAPESSOAID","Fornecedor","","PedidoCompraPessoaId","int",0,"px",7,7,"right",null,[],"GXV115","GXV115",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV116",42,"CTLPEDIDOCOMPRAPESSOAFANTASIA","Fantasia","","PedidoCompraPessoaFantasia","svchar",0,"px",60,60,"left",null,[],"GXV116","GXV116",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV117",43,"CTLPEDIDOCOMPRANOPEDIDOFORN","No Pedido Forn","","PedidoCompraNoPedidoForn","svchar",0,"px",20,20,"left",null,[],"GXV117","GXV117",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV118",44,"CTLPEDIDOCOMPRAVALORTOTAL","Valor","","PedidoCompraValorTotal","decimal",0,"px",22,22,"right",null,[],"GXV118","GXV118",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV119",45,"CTLADITIVOSEQUENCIA","Seq","","AditivoSequencia","char",0,"px",10,10,"left",null,[],"GXV119","GXV119",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpobs","vBMPOBS",46,0,"px",17,"px","e30mu2_client","","Obs","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",47,0,"px",17,"px","e26mu2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",48,0,"px",17,"px","e27mu2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpaditivo","vBMPADITIVO",49,0,"px",17,"px","e25mu2_client","","Aditivo","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpacompanha","vBMPACOMPANHA",50,0,"px",17,"px","e22mu2_client","","Acomp","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcancel","vBMPCANCEL",51,0,"px",17,"px","e23mu2_client","","Canc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpimprime","vBMPIMPRIME",52,0,"px",17,"px","e24mu2_client","","Imp","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpemail","vBMPEMAIL",53,0,"px",17,"px","e29mu2_client","","E-mail","Image","GridColumnImage");
   GridContainer.addComboBox("GXV11I",54,"CTLPEDIDOCOMPRASITUACAO","Situação","PedidoCompraSituacao","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit("GXV11J",55,"CTLPEDIDOCOMPRAFILIALID","Código Filial","","PedidoCompraFilialId","int",0,"px",7,7,"right",null,[],"GXV11J","GXV11J",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11K",56,"CTLPEDIDOCOMPRAVALORLIQUIDO","Valor Líquido","","PedidoCompraValorLiquido","decimal",0,"px",22,22,"right",null,[],"GXV11K","GXV11K",false,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABREGISTRA",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV18SolicitacaoNumero",gxold:"OV18SolicitacaoNumero",gxvar:"AV18SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV18SolicitacaoNumero,0)},c2v:function(){gx.O.AV18SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMREG",gxz:"ZV72numReg",gxold:"OV72numReg",gxvar:"AV72numReg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72numReg=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72numReg=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMREG",gx.O.AV72numReg,0)},c2v:function(){gx.O.AV72numReg=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMREG",'.')},nac:gx.falseFn};
   GXValidFnc[12]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIKPEDIDO",gxz:"ZV84ClikPedido",gxold:"OV84ClikPedido",gxvar:"AV84ClikPedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84ClikPedido=Value},v2z:function(Value){gx.O.ZV84ClikPedido=Value},v2c:function(){gx.fn.setControlValue("vCLIKPEDIDO",gx.O.AV84ClikPedido,0)},c2v:function(){gx.O.AV84ClikPedido=this.val()},val:function(){return gx.fn.getControlValue("vCLIKPEDIDO")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPTOCOMPRASNOME",gxz:"ZV28DeptoComprasNome",gxold:"OV28DeptoComprasNome",gxvar:"AV28DeptoComprasNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DeptoComprasNome=Value},v2z:function(Value){gx.O.ZV28DeptoComprasNome=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASNOME",gx.O.AV28DeptoComprasNome,0)},c2v:function(){gx.O.AV28DeptoComprasNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASNOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITANTENOME",gxz:"ZV29SolicitanteNome",gxold:"OV29SolicitanteNome",gxvar:"AV29SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29SolicitanteNome=Value},v2z:function(Value){gx.O.ZV29SolicitanteNome=Value},v2c:function(){gx.fn.setControlValue("vSOLICITANTENOME",gx.O.AV29SolicitanteNome,0)},c2v:function(){gx.O.AV29SolicitanteNome=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITANTENOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE8",grid:0};
   GXValidFnc[38]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAANO",gxz:"ZV114GXV112",gxold:"OV114GXV112",gxvar:"GXV112",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV112=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV114GXV112=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(37),gx.O.GXV112,0)},c2v:function(){gx.O.GXV112=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRANUMERO",gxz:"ZV115GXV113",gxold:"OV115GXV113",gxvar:"GXV113",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV113=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV115GXV113=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(37),gx.O.GXV113,0)},c2v:function(){gx.O.GXV113=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRADATA",gxz:"ZV116GXV114",gxold:"OV116GXV114",gxvar:"GXV114",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV114=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV116GXV114=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(37),gx.O.GXV114,0)},c2v:function(){gx.O.GXV114=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLPEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAPESSOAID",gxz:"ZV117GXV115",gxold:"OV117GXV115",gxvar:"GXV115",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV115=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV117GXV115=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAPESSOAID",row || gx.fn.currentGridRowImpl(37),gx.O.GXV115,0)},c2v:function(){gx.O.GXV115=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRAPESSOAID",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAPESSOAFANTASIA",gxz:"ZV118GXV116",gxold:"OV118GXV116",gxvar:"GXV116",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV116=Value},v2z:function(Value){gx.O.ZV118GXV116=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(37),gx.O.GXV116,0)},c2v:function(){gx.O.GXV116=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRANOPEDIDOFORN",gxz:"ZV119GXV117",gxold:"OV119GXV117",gxvar:"GXV117",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV117=Value},v2z:function(Value){gx.O.ZV119GXV117=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRANOPEDIDOFORN",row || gx.fn.currentGridRowImpl(37),gx.O.GXV117,0)},c2v:function(){gx.O.GXV117=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPEDIDOCOMPRANOPEDIDOFORN",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAVALORTOTAL",gxz:"ZV120GXV118",gxold:"OV120GXV118",gxvar:"GXV118",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV118=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV120GXV118=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAVALORTOTAL",row || gx.fn.currentGridRowImpl(37),gx.O.GXV118,2,',')},c2v:function(){gx.O.GXV118=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAVALORTOTAL",row || gx.fn.currentGridRowImpl(37),'.',',')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLADITIVOSEQUENCIA",gxz:"ZV121GXV119",gxold:"OV121GXV119",gxvar:"GXV119",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV119=Value},v2z:function(Value){gx.O.ZV121GXV119=Value},v2c:function(row){gx.fn.setGridControlValue("CTLADITIVOSEQUENCIA",row || gx.fn.currentGridRowImpl(37),gx.O.GXV119,0)},c2v:function(){gx.O.GXV119=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLADITIVOSEQUENCIA",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOBS",gxz:"ZV89bmpObs",gxold:"OV89bmpObs",gxvar:"AV89bmpObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV89bmpObs=Value},v2z:function(Value){gx.O.ZV89bmpObs=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOBS",row || gx.fn.currentGridRowImpl(37),gx.O.AV89bmpObs,gx.O.AV133Bmpobs_GXI)},c2v:function(){gx.O.AV133Bmpobs_GXI=this.val_GXI();gx.O.AV89bmpObs=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOBS",row || gx.fn.currentGridRowImpl(37))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOBS_GXI",row || gx.fn.currentGridRowImpl(37))}, gxvar_GXI:'AV133Bmpobs_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV14bmpAlt",gxold:"OV14bmpAlt",gxvar:"AV14bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV14bmpAlt=Value},v2z:function(Value){gx.O.ZV14bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(37),gx.O.AV14bmpAlt,gx.O.AV127Bmpalt_GXI)},c2v:function(){gx.O.AV127Bmpalt_GXI=this.val_GXI();gx.O.AV14bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(37))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(37))}, gxvar_GXI:'AV127Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV15bmpExc",gxold:"OV15bmpExc",gxvar:"AV15bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15bmpExc=Value},v2z:function(Value){gx.O.ZV15bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(37),gx.O.AV15bmpExc,gx.O.AV128Bmpexc_GXI)},c2v:function(){gx.O.AV128Bmpexc_GXI=this.val_GXI();gx.O.AV15bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(37))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(37))}, gxvar_GXI:'AV128Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPADITIVO",gxz:"ZV16bmpAditivo",gxold:"OV16bmpAditivo",gxvar:"AV16bmpAditivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpAditivo=Value},v2z:function(Value){gx.O.ZV16bmpAditivo=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPADITIVO",row || gx.fn.currentGridRowImpl(37),gx.O.AV16bmpAditivo,gx.O.AV129Bmpaditivo_GXI)},c2v:function(){gx.O.AV129Bmpaditivo_GXI=this.val_GXI();gx.O.AV16bmpAditivo=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPADITIVO",row || gx.fn.currentGridRowImpl(37))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPADITIVO_GXI",row || gx.fn.currentGridRowImpl(37))}, gxvar_GXI:'AV129Bmpaditivo_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPACOMPANHA",gxz:"ZV23bmpAcompanha",gxold:"OV23bmpAcompanha",gxvar:"AV23bmpAcompanha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23bmpAcompanha=Value},v2z:function(Value){gx.O.ZV23bmpAcompanha=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPACOMPANHA",row || gx.fn.currentGridRowImpl(37),gx.O.AV23bmpAcompanha,gx.O.AV131Bmpacompanha_GXI)},c2v:function(){gx.O.AV131Bmpacompanha_GXI=this.val_GXI();gx.O.AV23bmpAcompanha=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPACOMPANHA",row || gx.fn.currentGridRowImpl(37))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPACOMPANHA_GXI",row || gx.fn.currentGridRowImpl(37))}, gxvar_GXI:'AV131Bmpacompanha_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCANCEL",gxz:"ZV24bmpCancel",gxold:"OV24bmpCancel",gxvar:"AV24bmpCancel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24bmpCancel=Value},v2z:function(Value){gx.O.ZV24bmpCancel=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCANCEL",row || gx.fn.currentGridRowImpl(37),gx.O.AV24bmpCancel,gx.O.AV132Bmpcancel_GXI)},c2v:function(){gx.O.AV132Bmpcancel_GXI=this.val_GXI();gx.O.AV24bmpCancel=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCANCEL",row || gx.fn.currentGridRowImpl(37))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCANCEL_GXI",row || gx.fn.currentGridRowImpl(37))}, gxvar_GXI:'AV132Bmpcancel_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMPRIME",gxz:"ZV22bmpImprime",gxold:"OV22bmpImprime",gxvar:"AV22bmpImprime",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpImprime=Value},v2z:function(Value){gx.O.ZV22bmpImprime=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMPRIME",row || gx.fn.currentGridRowImpl(37),gx.O.AV22bmpImprime,gx.O.AV130Bmpimprime_GXI)},c2v:function(){gx.O.AV130Bmpimprime_GXI=this.val_GXI();gx.O.AV22bmpImprime=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMPRIME",row || gx.fn.currentGridRowImpl(37))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMPRIME_GXI",row || gx.fn.currentGridRowImpl(37))}, gxvar_GXI:'AV130Bmpimprime_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEMAIL",gxz:"ZV80bmpEmail",gxold:"OV80bmpEmail",gxvar:"AV80bmpEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV80bmpEmail=Value},v2z:function(Value){gx.O.ZV80bmpEmail=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEMAIL",row || gx.fn.currentGridRowImpl(37),gx.O.AV80bmpEmail,gx.O.AV134Bmpemail_GXI)},c2v:function(){gx.O.AV134Bmpemail_GXI=this.val_GXI();gx.O.AV80bmpEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEMAIL",row || gx.fn.currentGridRowImpl(37))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEMAIL_GXI",row || gx.fn.currentGridRowImpl(37))}, gxvar_GXI:'AV134Bmpemail_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRASITUACAO",gxz:"ZV122GXV11I",gxold:"OV122GXV11I",gxvar:"GXV11I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.GXV11I=Value},v2z:function(Value){gx.O.ZV122GXV11I=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLPEDIDOCOMPRASITUACAO",row || gx.fn.currentGridRowImpl(37),gx.O.GXV11I)},c2v:function(){gx.O.GXV11I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPEDIDOCOMPRASITUACAO",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAFILIALID",gxz:"ZV123GXV11J",gxold:"OV123GXV11J",gxvar:"GXV11J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11J=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV123GXV11J=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAFILIALID",row || gx.fn.currentGridRowImpl(37),gx.O.GXV11J,0)},c2v:function(){gx.O.GXV11J=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRAFILIALID",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAVALORLIQUIDO",gxz:"ZV124GXV11K",gxold:"OV124GXV11K",gxvar:"GXV11K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11K=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV124GXV11K=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(37),gx.O.GXV11K,2,',')},c2v:function(){gx.O.GXV11K=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(37),'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE3",grid:0};
   GXValidFnc[62]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMGPEDIDOABERTO",gxz:"ZV33ImgPedidoAberto",gxold:"OV33ImgPedidoAberto",gxvar:"AV33ImgPedidoAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ImgPedidoAberto=Value},v2z:function(Value){gx.O.ZV33ImgPedidoAberto=Value},v2c:function(){gx.fn.setMultimediaValue("vIMGPEDIDOABERTO",gx.O.AV33ImgPedidoAberto,gx.O.AV137Imgpedidoaberto_GXI)},c2v:function(){gx.O.AV137Imgpedidoaberto_GXI=this.val_GXI();gx.O.AV33ImgPedidoAberto=this.val()},val:function(){return gx.fn.getBlobValue("vIMGPEDIDOABERTO")},val_GXI:function(){return gx.fn.getControlValue("vIMGPEDIDOABERTO_GXI")}, gxvar_GXI:'AV137Imgpedidoaberto_GXI',nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMGPEDIDOFECHADO",gxz:"ZV34ImgPedidoFechado",gxold:"OV34ImgPedidoFechado",gxvar:"AV34ImgPedidoFechado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ImgPedidoFechado=Value},v2z:function(Value){gx.O.ZV34ImgPedidoFechado=Value},v2c:function(){gx.fn.setMultimediaValue("vIMGPEDIDOFECHADO",gx.O.AV34ImgPedidoFechado,gx.O.AV138Imgpedidofechado_GXI)},c2v:function(){gx.O.AV138Imgpedidofechado_GXI=this.val_GXI();gx.O.AV34ImgPedidoFechado=this.val()},val:function(){return gx.fn.getBlobValue("vIMGPEDIDOFECHADO")},val_GXI:function(){return gx.fn.getControlValue("vIMGPEDIDOFECHADO_GXI")}, gxvar_GXI:'AV138Imgpedidofechado_GXI',nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMGPEDIDOCANCELADO",gxz:"ZV35ImgPedidoCancelado",gxold:"OV35ImgPedidoCancelado",gxvar:"AV35ImgPedidoCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ImgPedidoCancelado=Value},v2z:function(Value){gx.O.ZV35ImgPedidoCancelado=Value},v2c:function(){gx.fn.setMultimediaValue("vIMGPEDIDOCANCELADO",gx.O.AV35ImgPedidoCancelado,gx.O.AV139Imgpedidocancelado_GXI)},c2v:function(){gx.O.AV139Imgpedidocancelado_GXI=this.val_GXI();gx.O.AV35ImgPedidoCancelado=this.val()},val:function(){return gx.fn.getBlobValue("vIMGPEDIDOCANCELADO")},val_GXI:function(){return gx.fn.getControlValue("vIMGPEDIDOCANCELADO_GXI")}, gxvar_GXI:'AV139Imgpedidocancelado_GXI',nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[75]={fld:"TABLE10",grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAG",gxz:"ZV99CtrlPag",gxold:"OV99CtrlPag",gxvar:"AV99CtrlPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99CtrlPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV99CtrlPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAG",gx.O.AV99CtrlPag,0)},c2v:function(){gx.O.AV99CtrlPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAG",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV12Pagina",gxold:"OV12Pagina",gxvar:"AV12Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV12Pagina,0)},c2v:function(){gx.O.AV12Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TABLE11",grid:0};
   GXValidFnc[84]={fld:"BUTTON2",grid:0};
   GXValidFnc[86]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[88]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[90]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[92]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[94]={fld:"IMAGE5",grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"BTNHELP",grid:0};
   GXValidFnc[98]={fld:"TABERRO",grid:0};
   GXValidFnc[101]={fld:"TABLE7",grid:0};
   GXValidFnc[104]={fld:"IMAGE1",grid:0};
   GXValidFnc[106]={fld:"MSGERRO", format:0,grid:0};
   this.AV18SolicitacaoNumero = 0 ;
   this.ZV18SolicitacaoNumero = 0 ;
   this.OV18SolicitacaoNumero = 0 ;
   this.AV72numReg = 0 ;
   this.ZV72numReg = 0 ;
   this.OV72numReg = 0 ;
   this.AV84ClikPedido = "" ;
   this.ZV84ClikPedido = "" ;
   this.OV84ClikPedido = "" ;
   this.AV28DeptoComprasNome = "" ;
   this.ZV28DeptoComprasNome = "" ;
   this.OV28DeptoComprasNome = "" ;
   this.AV29SolicitanteNome = "" ;
   this.ZV29SolicitanteNome = "" ;
   this.OV29SolicitanteNome = "" ;
   this.ZV114GXV112 = 0 ;
   this.OV114GXV112 = 0 ;
   this.ZV115GXV113 = 0 ;
   this.OV115GXV113 = 0 ;
   this.ZV116GXV114 = gx.date.nullDate() ;
   this.OV116GXV114 = gx.date.nullDate() ;
   this.ZV117GXV115 = 0 ;
   this.OV117GXV115 = 0 ;
   this.ZV118GXV116 = "" ;
   this.OV118GXV116 = "" ;
   this.ZV119GXV117 = "" ;
   this.OV119GXV117 = "" ;
   this.ZV120GXV118 = 0 ;
   this.OV120GXV118 = 0 ;
   this.ZV121GXV119 = "" ;
   this.OV121GXV119 = "" ;
   this.ZV89bmpObs = "" ;
   this.OV89bmpObs = "" ;
   this.ZV14bmpAlt = "" ;
   this.OV14bmpAlt = "" ;
   this.ZV15bmpExc = "" ;
   this.OV15bmpExc = "" ;
   this.ZV16bmpAditivo = "" ;
   this.OV16bmpAditivo = "" ;
   this.ZV23bmpAcompanha = "" ;
   this.OV23bmpAcompanha = "" ;
   this.ZV24bmpCancel = "" ;
   this.OV24bmpCancel = "" ;
   this.ZV22bmpImprime = "" ;
   this.OV22bmpImprime = "" ;
   this.ZV80bmpEmail = "" ;
   this.OV80bmpEmail = "" ;
   this.ZV122GXV11I = "" ;
   this.OV122GXV11I = "" ;
   this.ZV123GXV11J = 0 ;
   this.OV123GXV11J = 0 ;
   this.ZV124GXV11K = 0 ;
   this.OV124GXV11K = 0 ;
   this.AV137Imgpedidoaberto_GXI = "" ;
   this.AV33ImgPedidoAberto = "" ;
   this.ZV33ImgPedidoAberto = "" ;
   this.OV33ImgPedidoAberto = "" ;
   this.AV138Imgpedidofechado_GXI = "" ;
   this.AV34ImgPedidoFechado = "" ;
   this.ZV34ImgPedidoFechado = "" ;
   this.OV34ImgPedidoFechado = "" ;
   this.AV139Imgpedidocancelado_GXI = "" ;
   this.AV35ImgPedidoCancelado = "" ;
   this.ZV35ImgPedidoCancelado = "" ;
   this.OV35ImgPedidoCancelado = "" ;
   this.AV99CtrlPag = 0 ;
   this.ZV99CtrlPag = 0 ;
   this.OV99CtrlPag = 0 ;
   this.AV12Pagina = 0 ;
   this.ZV12Pagina = 0 ;
   this.OV12Pagina = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV18SolicitacaoNumero = 0 ;
   this.AV72numReg = 0 ;
   this.AV84ClikPedido = "" ;
   this.AV28DeptoComprasNome = "" ;
   this.AV29SolicitanteNome = "" ;
   this.AV33ImgPedidoAberto = "" ;
   this.AV34ImgPedidoFechado = "" ;
   this.AV35ImgPedidoCancelado = "" ;
   this.AV99CtrlPag = 0 ;
   this.AV12Pagina = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV107TituloTela = "" ;
   this.GXV112 = 0 ;
   this.GXV113 = 0 ;
   this.GXV114 = gx.date.nullDate() ;
   this.GXV115 = 0 ;
   this.GXV116 = "" ;
   this.GXV117 = "" ;
   this.GXV118 = 0 ;
   this.GXV119 = "" ;
   this.AV89bmpObs = "" ;
   this.AV14bmpAlt = "" ;
   this.AV15bmpExc = "" ;
   this.AV16bmpAditivo = "" ;
   this.AV23bmpAcompanha = "" ;
   this.AV24bmpCancel = "" ;
   this.AV22bmpImprime = "" ;
   this.AV80bmpEmail = "" ;
   this.GXV11I = "" ;
   this.GXV11J = 0 ;
   this.GXV11K = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4021SolicitacaoSituacao = "" ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3359PedidoCompraItemDataHoraAlt = gx.date.nullDate() ;
   this.A3349PedidoCompraItemValor = 0 ;
   this.A3346PedidoCompraItemQtdePedida = 0 ;
   this.A3403PedidoCompraItemValorTotal = 0 ;
   this.A3353PedidoCompraItemValorICMSST = 0 ;
   this.A3351PedidoCompraItemValorICMS = 0 ;
   this.A3352PedidoCompraItemValorIPI = 0 ;
   this.A3355PedidoCompraItemValorEncargo = 0 ;
   this.A3354PedidoCompraItemValorSeguro = 0 ;
   this.A3356PedidoCompraItemValorFrete = 0 ;
   this.A3350PedidoCompraItemValorDesconto = 0 ;
   this.A3404PedidoCompraItemValorLiquido = 0 ;
   this.A4203PedidoCompraPagRecNumero = 0 ;
   this.A4202PedidoCompraPagRecAno = 0 ;
   this.A4201PedidoCompraPagRecEmpId = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A3675MapaPrecoUsuarioAlt = "" ;
   this.A3422AditivoDataHoraAlt = gx.date.nullDate() ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A4042SolicitacaoItemQtdePedida = 0 ;
   this.A3338PedidoCompraItemSeq = 0 ;
   this.A3396CotacaoValoraPrazo = 0 ;
   this.A3395CotacaoValorAvista = 0 ;
   this.A3479CotacaoValorTotalaPrazo = 0 ;
   this.A3473CotacaoValorTotalAVista = 0 ;
   this.A3397CotacaoSnGanhador = "" ;
   this.A3481CotacaoUsuarioAlt = "" ;
   this.A4052SolicitacaoItemDataHoraAlt = gx.date.nullDate() ;
   this.A2965ProdutoId = 0 ;
   this.A3427AditivoSequencia = 0 ;
   this.A3425AditivoItemDataHoraAlt = gx.date.nullDate() ;
   this.A3423AditivoItemQtde = 0 ;
   this.A3416AditivoData = gx.date.nullDate() ;
   this.A3420AditivoNoPedidoFornecedor = "" ;
   this.A3360PedidoCompraData = gx.date.nullDate() ;
   this.A3362PedidoCompraPessoaId = 0 ;
   this.A3778PedidoCompraPessoaFantasia = "" ;
   this.A3386PedidoCompraNoPedidoForn = "" ;
   this.A3380PedidoCompraSituacao = "" ;
   this.A3361PedidoCompraPessoaEmpId = "" ;
   this.A138EmpresaId = "" ;
   this.A140SistemaId = "" ;
   this.AV77SnTrocaUsu = "" ;
   this.AV75SnErro = "" ;
   this.AV97SdtGridPedidoCompra = [ ] ;
   this.AV61SolicitacaoEmpresaId = "" ;
   this.AV20PedidoCompraEmpresaId = "" ;
   this.AV43PedidoCompraValorTotal = 0 ;
   this.AV95SolicitacaoSituacao = "" ;
   this.AV98SdtGridPedidoCompraItem = {} ;
   this.AV44AditivoSequencia = "" ;
   this.AV40PedidoCompraPessoaId = 0 ;
   this.AV41PedidoCompraPessoaFantasia = "" ;
   this.AV74ano = 0 ;
   this.AV73Numero = 0 ;
   this.AV69PedidoCompraValorTotalAux = 0 ;
   this.AV45PedidoCompraItemSeq = 0 ;
   this.AV58MsgErro2 = "" ;
   this.AV59MsgErro3 = "" ;
   this.AV60MsgErro4 = "" ;
   this.AV19CalcNoPedidoAno = "" ;
   this.AV30CorPedAberto = "" ;
   this.AV31CorPedFechado = "" ;
   this.AV32CorPedCancelado = "" ;
   this.AV36CorPed = "" ;
   this.Events = {"e11mu2_client": ["'PRIMEIRO'", true] ,"e12mu2_client": ["'ANTERIOR'", true] ,"e13mu2_client": ["'PROXIMO'", true] ,"e14mu2_client": ["'ULTIMO'", true] ,"e15mu2_client": ["'NOVO'", true] ,"e16mu2_client": ["'FECHAR'", true] ,"e22mu2_client": ["'ACOMPANHAMENTO'", true] ,"e23mu2_client": ["'CANCELARAUTORIZACAO'", true] ,"e17mu2_client": ["'IMPRIMIRTODOS'", true] ,"e24mu2_client": ["'IMPRIMIR'", true] ,"e25mu2_client": ["'REGISTRARADITIVO'", true] ,"e26mu2_client": ["'ALTERAR'", true] ,"e27mu2_client": ["'EXCLUIR'", true] ,"e18mu2_client": ["'TRANSFERIR'", true] ,"e29mu2_client": ["'ENVIAREMAIL'", true] ,"e30mu2_client": ["'ALTERAROBSERVACAO'", true] ,"e19mu2_client": ["'CONSULTALOGPEDIDO'", true] ,"e31mu2_client": ["ENTER", true] ,"e32mu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'}],[{ctrl:'BUTTON4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("BUTTON2","Visible")',ctrl:'BUTTON2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV85Justificativa',fld:'vJUSTIFICATIVA'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'gx.fn.getCtrlProperty("BUTTON2","Enabled")',ctrl:'BUTTON2',prop:'Enabled'},{ctrl:'BUTTON3',prop:'Enabled'},{ctrl:'BUTTON4',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'AV100Res',fld:'vRES'},{av:'AV101ResInt',fld:'vRESINT'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV103SnCancelado',fld:'vSNCANCELADO'},{av:'AV147GXV2',fld:'vGXV2'},{av:'AV72numReg',fld:'vNUMREG'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV74ano',fld:'vANO'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'}],[{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Enabled")',ctrl:'vBMPCANCEL',prop:'Enabled'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{ctrl:'CTLPEDIDOCOMPRAANO',prop:'Visible'},{av:'AV36CorPed',fld:'vCORPED'},{ctrl:'CTLPEDIDOCOMPRAANO',prop:'Forecolor'},{ctrl:'CTLPEDIDOCOMPRANUMERO',prop:'Forecolor'},{ctrl:'CTLPEDIDOCOMPRADATA',prop:'Forecolor'},{ctrl:'CTLPEDIDOCOMPRAPESSOAID',prop:'Forecolor'},{ctrl:'CTLPEDIDOCOMPRAPESSOAFANTASIA',prop:'Forecolor'},{ctrl:'CTLPEDIDOCOMPRANOPEDIDOFORN',prop:'Forecolor'},{ctrl:'CTLPEDIDOCOMPRAVALORTOTAL',prop:'Forecolor'},{ctrl:'CTLADITIVOSEQUENCIA',prop:'Forecolor'}]];
   this.EvtParms["'PRIMEIRO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'}],[{av:'AV99CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'}],[{av:'AV99CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'}],[{av:'AV99CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'ULTIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'}],[{av:'AV99CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'},{av:'AV79SnMapaPreco',fld:'vSNMAPAPRECO'},{av:'AV48Desempate',fld:'vDESEMPATE'},{av:'AV105SnConvenio',fld:'vSNCONVENIO'},{av:'AV27DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'A3675MapaPrecoUsuarioAlt',fld:'MAPAPRECOUSUARIOALT'},{av:'A4052SolicitacaoItemDataHoraAlt',fld:'SOLICITACAOITEMDATAHORAALT'},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3473CotacaoValorTotalAVista',fld:'COTACAOVALORTOTALAVISTA'},{av:'A3479CotacaoValorTotalaPrazo',fld:'COTACAOVALORTOTALAPRAZO'},{av:'AV68Preco',fld:'vPRECO'},{av:'AV47SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'A3395CotacaoValorAvista',fld:'COTACAOVALORAVISTA'},{av:'A3396CotacaoValoraPrazo',fld:'COTACAOVALORAPRAZO'},{av:'A3481CotacaoUsuarioAlt',fld:'COTACAOUSUARIOALT'},{av:'A3397CotacaoSnGanhador',fld:'COTACAOSNGANHADOR'}],[{av:'AV106Titulo',fld:'vTITULO'},{av:'AV79SnMapaPreco',fld:'vSNMAPAPRECO'},{av:'AV49Cont',fld:'vCONT'},{av:'AV48Desempate',fld:'vDESEMPATE'},{av:'AV47SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ'},{av:'AV50ProdutoId',fld:'vPRODUTOID'},{av:'AV46MenorValor',fld:'vMENORVALOR'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ACOMPANHAMENTO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'}],[]];
   this.EvtParms["'CANCELARAUTORIZACAO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'},{av:'AV105SnConvenio',fld:'vSNCONVENIO'}],[]];
   this.EvtParms["'IMPRIMIRTODOS'"] = [[{av:'AV26SnSistema',fld:'vSNSISTEMA'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'}],[{av:'AV54NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV53NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV56QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV110SnCSV',fld:'vSNCSV'},{av:'AV102ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV55SdtPedido',fld:'vSDTPEDIDO'},{av:'AV52SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV26SnSistema',fld:'vSNSISTEMA'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'}],[{av:'AV54NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV53NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV57Sequencia',fld:'vSEQUENCIA'},{av:'AV56QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV110SnCSV',fld:'vSNCSV'},{av:'AV102ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV55SdtPedido',fld:'vSDTPEDIDO'},{av:'AV52SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'}]];
   this.EvtParms["'REGISTRARADITIVO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'},{av:'AV64SnAditivo',fld:'vSNADITIVO'},{av:'AV62QuantidadeAux',fld:'vQUANTIDADEAUX'},{av:'AV66MaxAditivoPercent',fld:'vMAXADITIVOPERCENT'},{av:'A3392SolicitacaoItemSeq',fld:'SOLICITACAOITEMSEQ'},{av:'AV63item',fld:'vITEM'},{av:'A4042SolicitacaoItemQtdePedida',fld:'SOLICITACAOITEMQTDEPEDIDA'}],[{av:'AV64SnAditivo',fld:'vSNADITIVO'},{av:'AV63item',fld:'vITEM'},{av:'AV62QuantidadeAux',fld:'vQUANTIDADEAUX'},{av:'AV65QtdeTotal',fld:'vQTDETOTAL'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV83SnExisteConta',fld:'vSNEXISTECONTA'},{av:'AV105SnConvenio',fld:'vSNCONVENIO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV82ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'A4201PedidoCompraPagRecEmpId',fld:'PEDIDOCOMPRAPAGRECEMPID'},{av:'A4202PedidoCompraPagRecAno',fld:'PEDIDOCOMPRAPAGRECANO'},{av:'AV37PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'A4203PedidoCompraPagRecNumero',fld:'PEDIDOCOMPRAPAGRECNUMERO'},{av:'AV38PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'}],[{av:'AV88MsgErroPedido',fld:'vMSGERROPEDIDO'},{av:'AV37PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV38PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV104Seq',fld:'vSEQ'},{av:'AV83SnExisteConta',fld:'vSNEXISTECONTA'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV83SnExisteConta',fld:'vSNEXISTECONTA'},{av:'AV105SnConvenio',fld:'vSNCONVENIO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV82ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'A4201PedidoCompraPagRecEmpId',fld:'PEDIDOCOMPRAPAGRECEMPID'},{av:'A4202PedidoCompraPagRecAno',fld:'PEDIDOCOMPRAPAGRECANO'},{av:'AV37PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'A4203PedidoCompraPagRecNumero',fld:'PEDIDOCOMPRAPAGRECNUMERO'},{av:'AV38PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'}],[{av:'AV88MsgErroPedido',fld:'vMSGERROPEDIDO'},{av:'AV37PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV38PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV104Seq',fld:'vSEQ'},{av:'AV83SnExisteConta',fld:'vSNEXISTECONTA'}]];
   this.EvtParms["'TRANSFERIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'}],[{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true}]];
   this.EvtParms["'ENVIAREMAIL'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Enabled")',ctrl:'vBMPADITIVO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Enabled")',ctrl:'vBMPIMPRIME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Enabled")',ctrl:'vBMPOBS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Enabled")',ctrl:'vBMPEMAIL',prop:'Enabled'},{av:'AV14bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV15bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpAditivo',fld:'vBMPADITIVO'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Tooltiptext")',ctrl:'vBMPADITIVO',prop:'Tooltiptext'},{av:'AV22bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV23bmpAcompanha',fld:'vBMPACOMPANHA'},{av:'gx.fn.getCtrlProperty("vBMPACOMPANHA","Tooltiptext")',ctrl:'vBMPACOMPANHA',prop:'Tooltiptext'},{av:'AV24bmpCancel',fld:'vBMPCANCEL'},{av:'gx.fn.getCtrlProperty("vBMPCANCEL","Tooltiptext")',ctrl:'vBMPCANCEL',prop:'Tooltiptext'},{av:'AV89bmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV80bmpEmail',fld:'vBMPEMAIL'},{av:'gx.fn.getCtrlProperty("vBMPEMAIL","Tooltiptext")',ctrl:'vBMPEMAIL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPADITIVO","Visible")',ctrl:'vBMPADITIVO',prop:'Visible'},{av:'AV77SnTrocaUsu',fld:'vSNTROCAUSU'},{av:'AV75SnErro',fld:'vSNERRO'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV84ClikPedido',fld:'vCLIKPEDIDO'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV43PedidoCompraValorTotal',fld:'vPEDIDOCOMPRAVALORTOTAL'},{av:'AV95SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV99CtrlPag',fld:'vCTRLPAG'},{av:'AV12Pagina',fld:'vPAGINA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV98SdtGridPedidoCompraItem',fld:'vSDTGRIDPEDIDOCOMPRAITEM'},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3404PedidoCompraItemValorLiquido',fld:'PEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3427AditivoSequencia',fld:'ADITIVOSEQUENCIA'},{av:'AV44AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'A3422AditivoDataHoraAlt',fld:'ADITIVODATAHORAALT'},{av:'A3416AditivoData',fld:'ADITIVODATA'},{av:'AV40PedidoCompraPessoaId',fld:'vPEDIDOCOMPRAPESSOAID'},{av:'AV41PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3420AditivoNoPedidoFornecedor',fld:'ADITIVONOPEDIDOFORNECEDOR'},{av:'AV74ano',fld:'vANO'},{av:'AV73Numero',fld:'vNUMERO'},{av:'AV72numReg',fld:'vNUMREG'},{av:'A3425AditivoItemDataHoraAlt',fld:'ADITIVOITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'AV69PedidoCompraValorTotalAux',fld:'vPEDIDOCOMPRAVALORTOTALAUX'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV45PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV58MsgErro2',fld:'vMSGERRO2'},{av:'AV59MsgErro3',fld:'vMSGERRO3'},{av:'AV60MsgErro4',fld:'vMSGERRO4'},{av:'AV19CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV30CorPedAberto',fld:'vCORPEDABERTO'},{av:'AV31CorPedFechado',fld:'vCORPEDFECHADO'},{av:'AV32CorPedCancelado',fld:'vCORPEDCANCELADO'},{av:'AV36CorPed',fld:'vCORPED'}],[{av:'AV57Sequencia',fld:'vSEQUENCIA'}]];
   this.EvtParms["'ALTERAROBSERVACAO'"] = [[{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV97SdtGridPedidoCompra',fld:'vSDTGRIDPEDIDOCOMPRA',grid:37},{av:'AV105SnConvenio',fld:'vSNCONVENIO'},{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'}],[{av:'AV88MsgErroPedido',fld:'vMSGERROPEDIDO'},{av:'AV91SnErroSol',fld:'vSNERROSOL'},{av:'AV61SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV90Mod',fld:'vMOD'},{av:'AV37PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV38PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'}]];
   this.EvtParms["'CONSULTALOGPEDIDO'"] = [[{av:'AV20PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'}],[{av:'AV96Log',fld:'vLOG'}]];
   this.setVCMap("A3346PedidoCompraItemQtdePedida", "PEDIDOCOMPRAITEMQTDEPEDIDA", 0, "decimal");
   this.setVCMap("A3349PedidoCompraItemValor", "PEDIDOCOMPRAITEMVALOR", 0, "decimal");
   this.setVCMap("A3403PedidoCompraItemValorTotal", "PEDIDOCOMPRAITEMVALORTOTAL", 0, "decimal");
   this.setVCMap("A3350PedidoCompraItemValorDesconto", "PEDIDOCOMPRAITEMVALORDESCONTO", 0, "decimal");
   this.setVCMap("A3356PedidoCompraItemValorFrete", "PEDIDOCOMPRAITEMVALORFRETE", 0, "decimal");
   this.setVCMap("A3354PedidoCompraItemValorSeguro", "PEDIDOCOMPRAITEMVALORSEGURO", 0, "decimal");
   this.setVCMap("A3355PedidoCompraItemValorEncargo", "PEDIDOCOMPRAITEMVALORENCARGO", 0, "decimal");
   this.setVCMap("A3352PedidoCompraItemValorIPI", "PEDIDOCOMPRAITEMVALORIPI", 0, "decimal");
   this.setVCMap("A3351PedidoCompraItemValorICMS", "PEDIDOCOMPRAITEMVALORICMS", 0, "decimal");
   this.setVCMap("A3353PedidoCompraItemValorICMSST", "PEDIDOCOMPRAITEMVALORICMSST", 0, "decimal");
   this.setVCMap("A3404PedidoCompraItemValorLiquido", "PEDIDOCOMPRAITEMVALORLIQUIDO", 0, "decimal");
   this.setVCMap("AV77SnTrocaUsu", "vSNTROCAUSU", 0, "char");
   this.setVCMap("AV75SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV97SdtGridPedidoCompra", "vSDTGRIDPEDIDOCOMPRA", 0, "CollSdtGridPedidoCompra.SdtGridPedidoCompraItem");
   this.setVCMap("AV61SolicitacaoEmpresaId", "vSOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("A3336PedidoCompraAno", "PEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("A3337PedidoCompraNumero", "PEDIDOCOMPRANUMERO", 0, "int");
   this.setVCMap("A3426PedidoCompraEmpresaId", "PEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV20PedidoCompraEmpresaId", "vPEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("A3371SolicitacaoNumero", "SOLICITACAONUMERO", 0, "int");
   this.setVCMap("A3360PedidoCompraData", "PEDIDOCOMPRADATA", 0, "date");
   this.setVCMap("A3362PedidoCompraPessoaId", "PEDIDOCOMPRAPESSOAID", 0, "int");
   this.setVCMap("A3778PedidoCompraPessoaFantasia", "PEDIDOCOMPRAPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A3386PedidoCompraNoPedidoForn", "PEDIDOCOMPRANOPEDIDOFORN", 0, "svchar");
   this.setVCMap("A3380PedidoCompraSituacao", "PEDIDOCOMPRASITUACAO", 0, "char");
   this.setVCMap("AV43PedidoCompraValorTotal", "vPEDIDOCOMPRAVALORTOTAL", 0, "decimal");
   this.setVCMap("AV95SolicitacaoSituacao", "vSOLICITACAOSITUACAO", 0, "char");
   this.setVCMap("A3370SolicitacaoEmpresaId", "SOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV98SdtGridPedidoCompraItem", "vSDTGRIDPEDIDOCOMPRAITEM", 0, "SdtGridPedidoCompra.SdtGridPedidoCompraItem");
   this.setVCMap("A3359PedidoCompraItemDataHoraAlt", "PEDIDOCOMPRAITEMDATAHORAALT", 0, "dtime");
   this.setVCMap("A3404PedidoCompraItemValorLiquido", "PEDIDOCOMPRAITEMVALORLIQUIDO", 0, "decimal");
   this.setVCMap("A4021SolicitacaoSituacao", "SOLICITACAOSITUACAO", 0, "char");
   this.setVCMap("A3427AditivoSequencia", "ADITIVOSEQUENCIA", 0, "int");
   this.setVCMap("AV44AditivoSequencia", "vADITIVOSEQUENCIA", 0, "char");
   this.setVCMap("A3422AditivoDataHoraAlt", "ADITIVODATAHORAALT", 0, "dtime");
   this.setVCMap("A3416AditivoData", "ADITIVODATA", 0, "date");
   this.setVCMap("AV40PedidoCompraPessoaId", "vPEDIDOCOMPRAPESSOAID", 0, "int");
   this.setVCMap("AV41PedidoCompraPessoaFantasia", "vPEDIDOCOMPRAPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A3420AditivoNoPedidoFornecedor", "ADITIVONOPEDIDOFORNECEDOR", 0, "svchar");
   this.setVCMap("AV74ano", "vANO", 0, "int");
   this.setVCMap("AV73Numero", "vNUMERO", 0, "int");
   this.setVCMap("A3425AditivoItemDataHoraAlt", "ADITIVOITEMDATAHORAALT", 0, "dtime");
   this.setVCMap("A3338PedidoCompraItemSeq", "PEDIDOCOMPRAITEMSEQ", 0, "int");
   this.setVCMap("AV69PedidoCompraValorTotalAux", "vPEDIDOCOMPRAVALORTOTALAUX", 0, "decimal");
   this.setVCMap("A3423AditivoItemQtde", "ADITIVOITEMQTDE", 0, "decimal");
   this.setVCMap("AV45PedidoCompraItemSeq", "vPEDIDOCOMPRAITEMSEQ", 0, "int");
   this.setVCMap("A3349PedidoCompraItemValor", "PEDIDOCOMPRAITEMVALOR", 0, "decimal");
   this.setVCMap("AV58MsgErro2", "vMSGERRO2", 0, "svchar");
   this.setVCMap("AV59MsgErro3", "vMSGERRO3", 0, "svchar");
   this.setVCMap("AV60MsgErro4", "vMSGERRO4", 0, "svchar");
   this.setVCMap("AV19CalcNoPedidoAno", "vCALCNOPEDIDOANO", 0, "char");
   this.setVCMap("AV30CorPedAberto", "vCORPEDABERTO", 0, "char");
   this.setVCMap("AV31CorPedFechado", "vCORPEDFECHADO", 0, "char");
   this.setVCMap("AV32CorPedCancelado", "vCORPEDCANCELADO", 0, "char");
   this.setVCMap("AV36CorPed", "vCORPED", 0, "char");
   this.setVCMap("AV107TituloTela", "vTITULOTELA", 0, "svchar");
   this.setVCMap("AV77SnTrocaUsu", "vSNTROCAUSU", 0, "char");
   this.setVCMap("AV75SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV97SdtGridPedidoCompra", "vSDTGRIDPEDIDOCOMPRA", 0, "CollSdtGridPedidoCompra.SdtGridPedidoCompraItem");
   this.setVCMap("AV61SolicitacaoEmpresaId", "vSOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("A3336PedidoCompraAno", "PEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("A3337PedidoCompraNumero", "PEDIDOCOMPRANUMERO", 0, "int");
   this.setVCMap("A3426PedidoCompraEmpresaId", "PEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV20PedidoCompraEmpresaId", "vPEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("A3371SolicitacaoNumero", "SOLICITACAONUMERO", 0, "int");
   this.setVCMap("A3360PedidoCompraData", "PEDIDOCOMPRADATA", 0, "date");
   this.setVCMap("A3362PedidoCompraPessoaId", "PEDIDOCOMPRAPESSOAID", 0, "int");
   this.setVCMap("A3778PedidoCompraPessoaFantasia", "PEDIDOCOMPRAPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A3386PedidoCompraNoPedidoForn", "PEDIDOCOMPRANOPEDIDOFORN", 0, "svchar");
   this.setVCMap("A3380PedidoCompraSituacao", "PEDIDOCOMPRASITUACAO", 0, "char");
   this.setVCMap("AV43PedidoCompraValorTotal", "vPEDIDOCOMPRAVALORTOTAL", 0, "decimal");
   this.setVCMap("AV95SolicitacaoSituacao", "vSOLICITACAOSITUACAO", 0, "char");
   this.setVCMap("A3370SolicitacaoEmpresaId", "SOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV98SdtGridPedidoCompraItem", "vSDTGRIDPEDIDOCOMPRAITEM", 0, "SdtGridPedidoCompra.SdtGridPedidoCompraItem");
   this.setVCMap("A3359PedidoCompraItemDataHoraAlt", "PEDIDOCOMPRAITEMDATAHORAALT", 0, "dtime");
   this.setVCMap("A3404PedidoCompraItemValorLiquido", "PEDIDOCOMPRAITEMVALORLIQUIDO", 0, "decimal");
   this.setVCMap("A4021SolicitacaoSituacao", "SOLICITACAOSITUACAO", 0, "char");
   this.setVCMap("A3427AditivoSequencia", "ADITIVOSEQUENCIA", 0, "int");
   this.setVCMap("AV44AditivoSequencia", "vADITIVOSEQUENCIA", 0, "char");
   this.setVCMap("A3422AditivoDataHoraAlt", "ADITIVODATAHORAALT", 0, "dtime");
   this.setVCMap("A3416AditivoData", "ADITIVODATA", 0, "date");
   this.setVCMap("AV40PedidoCompraPessoaId", "vPEDIDOCOMPRAPESSOAID", 0, "int");
   this.setVCMap("AV41PedidoCompraPessoaFantasia", "vPEDIDOCOMPRAPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A3420AditivoNoPedidoFornecedor", "ADITIVONOPEDIDOFORNECEDOR", 0, "svchar");
   this.setVCMap("AV74ano", "vANO", 0, "int");
   this.setVCMap("AV73Numero", "vNUMERO", 0, "int");
   this.setVCMap("A3425AditivoItemDataHoraAlt", "ADITIVOITEMDATAHORAALT", 0, "dtime");
   this.setVCMap("A3338PedidoCompraItemSeq", "PEDIDOCOMPRAITEMSEQ", 0, "int");
   this.setVCMap("AV69PedidoCompraValorTotalAux", "vPEDIDOCOMPRAVALORTOTALAUX", 0, "decimal");
   this.setVCMap("A3423AditivoItemQtde", "ADITIVOITEMQTDE", 0, "decimal");
   this.setVCMap("AV45PedidoCompraItemSeq", "vPEDIDOCOMPRAITEMSEQ", 0, "int");
   this.setVCMap("A3349PedidoCompraItemValor", "PEDIDOCOMPRAITEMVALOR", 0, "decimal");
   this.setVCMap("AV58MsgErro2", "vMSGERRO2", 0, "svchar");
   this.setVCMap("AV59MsgErro3", "vMSGERRO3", 0, "svchar");
   this.setVCMap("AV60MsgErro4", "vMSGERRO4", 0, "svchar");
   this.setVCMap("AV19CalcNoPedidoAno", "vCALCNOPEDIDOANO", 0, "char");
   this.setVCMap("AV30CorPedAberto", "vCORPEDABERTO", 0, "char");
   this.setVCMap("AV31CorPedFechado", "vCORPEDFECHADO", 0, "char");
   this.setVCMap("AV32CorPedCancelado", "vCORPEDCANCELADO", 0, "char");
   this.setVCMap("AV36CorPed", "vCORPED", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV14bmpAlt", rfrProp:"Enabled", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV15bmpExc", rfrProp:"Enabled", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpAditivo", rfrProp:"Enabled", gxAttId:"Bmpaditivo"});
   GridContainer.addRefreshingVar({rfrVar:"AV22bmpImprime", rfrProp:"Enabled", gxAttId:"Bmpimprime"});
   GridContainer.addRefreshingVar({rfrVar:"AV89bmpObs", rfrProp:"Enabled", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar({rfrVar:"AV80bmpEmail", rfrProp:"Enabled", gxAttId:"Bmpemail"});
   GridContainer.addRefreshingVar({rfrVar:"AV14bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV14bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV15bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV15bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpAditivo", rfrProp:"Value", gxAttId:"Bmpaditivo"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpAditivo", rfrProp:"Tooltiptext", gxAttId:"Bmpaditivo"});
   GridContainer.addRefreshingVar({rfrVar:"AV22bmpImprime", rfrProp:"Value", gxAttId:"Bmpimprime"});
   GridContainer.addRefreshingVar({rfrVar:"AV22bmpImprime", rfrProp:"Tooltiptext", gxAttId:"Bmpimprime"});
   GridContainer.addRefreshingVar({rfrVar:"AV23bmpAcompanha", rfrProp:"Value", gxAttId:"Bmpacompanha"});
   GridContainer.addRefreshingVar({rfrVar:"AV23bmpAcompanha", rfrProp:"Tooltiptext", gxAttId:"Bmpacompanha"});
   GridContainer.addRefreshingVar({rfrVar:"AV24bmpCancel", rfrProp:"Value", gxAttId:"Bmpcancel"});
   GridContainer.addRefreshingVar({rfrVar:"AV24bmpCancel", rfrProp:"Tooltiptext", gxAttId:"Bmpcancel"});
   GridContainer.addRefreshingVar({rfrVar:"AV89bmpObs", rfrProp:"Value", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar({rfrVar:"AV89bmpObs", rfrProp:"Tooltiptext", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar({rfrVar:"AV80bmpEmail", rfrProp:"Value", gxAttId:"Bmpemail"});
   GridContainer.addRefreshingVar({rfrVar:"AV80bmpEmail", rfrProp:"Tooltiptext", gxAttId:"Bmpemail"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpAditivo", rfrProp:"Visible", gxAttId:"Bmpaditivo"});
   GridContainer.addRefreshingVar({rfrVar:"AV77SnTrocaUsu"});
   GridContainer.addRefreshingVar({rfrVar:"AV75SnErro"});
   GridContainer.addRefreshingVar({rfrVar:"AV97SdtGridPedidoCompra"});
   GridContainer.addRefreshingVar(this.GXValidFnc[12]);
   GridContainer.addRefreshingVar({rfrVar:"AV61SolicitacaoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar({rfrVar:"A3336PedidoCompraAno"});
   GridContainer.addRefreshingVar({rfrVar:"A3337PedidoCompraNumero"});
   GridContainer.addRefreshingVar({rfrVar:"A3426PedidoCompraEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV20PedidoCompraEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A3371SolicitacaoNumero"});
   GridContainer.addRefreshingVar({rfrVar:"A3360PedidoCompraData"});
   GridContainer.addRefreshingVar({rfrVar:"A3362PedidoCompraPessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A3778PedidoCompraPessoaFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"A3386PedidoCompraNoPedidoForn"});
   GridContainer.addRefreshingVar({rfrVar:"A3380PedidoCompraSituacao"});
   GridContainer.addRefreshingVar({rfrVar:"AV43PedidoCompraValorTotal"});
   GridContainer.addRefreshingVar({rfrVar:"AV95SolicitacaoSituacao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar({rfrVar:"A3370SolicitacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV98SdtGridPedidoCompraItem"});
   GridContainer.addRefreshingVar({rfrVar:"A3359PedidoCompraItemDataHoraAlt"});
   GridContainer.addRefreshingVar({rfrVar:"A3404PedidoCompraItemValorLiquido"});
   GridContainer.addRefreshingVar({rfrVar:"A4021SolicitacaoSituacao"});
   GridContainer.addRefreshingVar({rfrVar:"A3427AditivoSequencia"});
   GridContainer.addRefreshingVar({rfrVar:"AV44AditivoSequencia"});
   GridContainer.addRefreshingVar({rfrVar:"A3422AditivoDataHoraAlt"});
   GridContainer.addRefreshingVar({rfrVar:"A3416AditivoData"});
   GridContainer.addRefreshingVar({rfrVar:"AV40PedidoCompraPessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV41PedidoCompraPessoaFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"A3420AditivoNoPedidoFornecedor"});
   GridContainer.addRefreshingVar({rfrVar:"AV74ano"});
   GridContainer.addRefreshingVar({rfrVar:"AV73Numero"});
   GridContainer.addRefreshingVar(this.GXValidFnc[11]);
   GridContainer.addRefreshingVar({rfrVar:"A3425AditivoItemDataHoraAlt"});
   GridContainer.addRefreshingVar({rfrVar:"A3338PedidoCompraItemSeq"});
   GridContainer.addRefreshingVar({rfrVar:"AV69PedidoCompraValorTotalAux"});
   GridContainer.addRefreshingVar({rfrVar:"A3423AditivoItemQtde"});
   GridContainer.addRefreshingVar({rfrVar:"AV45PedidoCompraItemSeq"});
   GridContainer.addRefreshingVar({rfrVar:"A3349PedidoCompraItemValor"});
   GridContainer.addRefreshingVar({rfrVar:"AV58MsgErro2"});
   GridContainer.addRefreshingVar({rfrVar:"AV59MsgErro3"});
   GridContainer.addRefreshingVar({rfrVar:"AV60MsgErro4"});
   GridContainer.addRefreshingVar({rfrVar:"AV19CalcNoPedidoAno"});
   GridContainer.addRefreshingVar({rfrVar:"AV30CorPedAberto"});
   GridContainer.addRefreshingVar({rfrVar:"AV31CorPedFechado"});
   GridContainer.addRefreshingVar({rfrVar:"AV32CorPedCancelado"});
   GridContainer.addRefreshingVar({rfrVar:"AV36CorPed"});
   this.addGridBCProperty("Sdtgridpedidocompra", ["PedidoCompraAno"], this.GXValidFnc[38], "AV97SdtGridPedidoCompra");
   this.addGridBCProperty("Sdtgridpedidocompra", ["PedidoCompraNumero"], this.GXValidFnc[39], "AV97SdtGridPedidoCompra");
   this.addGridBCProperty("Sdtgridpedidocompra", ["PedidoCompraData"], this.GXValidFnc[40], "AV97SdtGridPedidoCompra");
   this.addGridBCProperty("Sdtgridpedidocompra", ["PedidoCompraPessoaId"], this.GXValidFnc[41], "AV97SdtGridPedidoCompra");
   this.addGridBCProperty("Sdtgridpedidocompra", ["PedidoCompraPessoaFantasia"], this.GXValidFnc[42], "AV97SdtGridPedidoCompra");
   this.addGridBCProperty("Sdtgridpedidocompra", ["PedidoCompraNoPedidoForn"], this.GXValidFnc[43], "AV97SdtGridPedidoCompra");
   this.addGridBCProperty("Sdtgridpedidocompra", ["PedidoCompraValorTotal"], this.GXValidFnc[44], "AV97SdtGridPedidoCompra");
   this.addGridBCProperty("Sdtgridpedidocompra", ["AditivoSequencia"], this.GXValidFnc[45], "AV97SdtGridPedidoCompra");
   this.addGridBCProperty("Sdtgridpedidocompra", ["PedidoCompraSituacao"], this.GXValidFnc[54], "AV97SdtGridPedidoCompra");
   this.addGridBCProperty("Sdtgridpedidocompra", ["PedidoCompraFilialId"], this.GXValidFnc[55], "AV97SdtGridPedidoCompra");
   this.addGridBCProperty("Sdtgridpedidocompra", ["PedidoCompraValorLiquido"], this.GXValidFnc[56], "AV97SdtGridPedidoCompra");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaautorizacao());
