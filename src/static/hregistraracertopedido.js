/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 7:0:28.88
*/
gx.evt.autoSkip = false;
gx.define('hregistraracertopedido', false, function () {
   this.ServerClass =  "hregistraracertopedido" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("3", "'NOVOPRODUTO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV43PessoaEmpresaId=gx.fn.getControlValue("vPESSOAEMPRESAID") ;
      this.AV13PedidoAce=gx.fn.getControlValue("vPEDIDOACE") ;
      this.A6732PedidoAceId=gx.fn.getIntegerValue("PEDIDOACEID",'.') ;
      this.A6743PedidoAceData=gx.fn.getDateValue("PEDIDOACEDATA") ;
      this.A6733PedidoAceItemSeq=gx.fn.getIntegerValue("PEDIDOACEITEMSEQ",'.') ;
      this.AV40PedidoAceIdAux=gx.fn.getIntegerValue("vPEDIDOACEIDAUX",'.') ;
      this.AV36DataStr=gx.fn.getControlValue("vDATASTR") ;
      this.AV19DespAcertoPedido=gx.fn.getControlValue("vDESPACERTOPEDIDO") ;
      this.AV22DespAcertoPedidoItem=gx.fn.getControlValue("vDESPACERTOPEDIDOITEM") ;
   };
   this.Validv_Data=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pedidoaceid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOACEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s202_client=function()
   {
      this.AV20SnErro =  "N"  ;
      this.AV35SnExiste =  "N"  ;
      this.AV78GXV5 = gx.num.trunc( 1 ,0) ;
      while ( this.AV78GXV5 <= this.AV18ItemPedido.length )
      {
         this.AV21ItemPedidoItem =  this.AV18ItemPedido[this.AV78GXV5 - 1]  ;
         if ( ! (0==this.AV21ItemPedidoItem.Produto) )
         {
            this.AV35SnExiste =  "S"  ;
            if ( (0.0==this.AV21ItemPedidoItem.Preco) )
            {
               this.AV10MsgErro =  "Informe o Preço do Produto. Linha: " + gx.text.trim( gx.num.str( this.AV21ItemPedidoItem.Linha, 5, 0))  ;
               this.AV20SnErro =  "S"  ;
            }
            else
            {
               if ( (0.0==this.AV21ItemPedidoItem.Quantidade) )
               {
                  this.AV10MsgErro =  "Informe a Quantidade do Produto. Linha: " + gx.text.trim( gx.num.str( this.AV21ItemPedidoItem.Linha, 5, 0))  ;
                  this.AV20SnErro =  "S"  ;
               }
            }
         }
         else
         {
            if ( ! (0.0==this.AV21ItemPedidoItem.Preco) || ! (0.0==this.AV21ItemPedidoItem.Quantidade) )
            {
               this.AV10MsgErro =  "Informe o Produto. Linha: " + gx.text.trim( gx.num.str( this.AV21ItemPedidoItem.Linha, 5, 0))  ;
               this.AV20SnErro =  "S"  ;
            }
         }
         if ( this.AV20SnErro == "S" )
         {
            break;
         }
         this.AV78GXV5 = gx.num.trunc( this.AV78GXV5 + 1 ,0) ;
      }
      if ( this.AV20SnErro == "N" && this.AV35SnExiste == "N" )
      {
         this.AV10MsgErro =  "Informe ao menos um item para o Pedido"  ;
         this.AV20SnErro =  "S"  ;
      }
   };
   this.s162_client=function()
   {
      if ( this.AV20SnErro == "S" )
      {
         this.addMessage(this.AV10MsgErro);
         gx.fn.setCtrlProperty("JS","Caption", "<script language=\"javascript\"> "+gx.text.newline( ) );
         gx.fn.setCtrlProperty("JS","Caption", gx.fn.getCtrlProperty("JS","Caption")+"function GXOnloadUsr() {"+gx.text.newline( ) );
         gx.fn.setCtrlProperty("JS","Caption", gx.fn.getCtrlProperty("JS","Caption")+" alert ('"+this.AV10MsgErro+"')" );
         gx.fn.setCtrlProperty("JS","Caption", gx.fn.getCtrlProperty("JS","Caption")+"}" );
         gx.fn.setCtrlProperty("JS","Caption", gx.fn.getCtrlProperty("JS","Caption")+"</script>" );
      }
   };
   this.e281022_client=function()
   {
      this.clearMessages();
      this.AV22DespAcertoPedidoItem =  {Linha:0,Id:0,Seq:0,DespCod:0,Valor:0.0,Observacao:""}  ;
      this.AV22DespAcertoPedidoItem.DespCod = gx.num.trunc( 0 ,0) ;
      this.AV22DespAcertoPedidoItem.Id = gx.num.trunc( 0 ,0) ;
      this.AV22DespAcertoPedidoItem.Observacao =  ""  ;
      this.AV22DespAcertoPedidoItem.Seq = gx.num.trunc( 0 ,0) ;
      this.AV22DespAcertoPedidoItem.Valor =  0  ;
      this.AV22DespAcertoPedidoItem.Linha = gx.num.trunc( this.AV19DespAcertoPedido.length + 1 ,0) ;
      this.AV19DespAcertoPedido.push(this.AV22DespAcertoPedidoItem) ;
      this.refreshOutputs([{av:'AV22DespAcertoPedidoItem',fld:'vDESPACERTOPEDIDOITEM'},{av:'AV19DespAcertoPedido',fld:'vDESPACERTOPEDIDO'}]);
   };
   this.e271021_client=function()
   {
      this.clearMessages();
      this.AV36DataStr =  gx.text.trim( gx.date.dtoc( this.AV12Data, "DMY4", "/"))  ;
      gx.popup.openUrl(gx.http.formatLink("hregistraracertopedidorelatorio",[this.AV36DataStr]), []);
      this.refreshOutputs([{av:'AV36DataStr',fld:'vDATASTR'}]);
   };
   this.e111022_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131022_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e171022_client=function()
   {
      this.executeServerEvent("'ALTERARPEDIDO'", true, arguments[0], false, false);
   };
   this.e231022_client=function()
   {
      this.executeServerEvent("CTLPRECO.ISVALID", true, arguments[0], false, false);
   };
   this.e241022_client=function()
   {
      this.executeServerEvent("CTLPRODUTO.ISVALID", true, arguments[0], false, false);
   };
   this.e141022_client=function()
   {
      this.executeServerEvent("'NOVOVENDA'", true, null, false, false);
   };
   this.e121022_client=function()
   {
      this.executeServerEvent("'NOVOPRODUTO'", true, null, false, false);
   };
   this.e151022_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e201022_client=function()
   {
      this.executeServerEvent("'EXCLUIRPEDIDO'", true, arguments[0], false, false);
   };
   this.e261022_client=function()
   {
      this.executeServerEvent("'EXCLUIRPRODUTO'", true, arguments[0], false, false);
   };
   this.e211022_client=function()
   {
      this.executeServerEvent("'EXCLUIRDEPESA'", true, arguments[0], false, false);
   };
   this.e221022_client=function()
   {
      this.executeServerEvent("'EMITERELATORIO'", true, arguments[0], false, false);
   };
   this.e291022_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,22,25,28,30,36,37,38,39,40,41,42,43,44,45,46,49,52,55,57,60,62,65,70,73,75,81,82,83,84,85,86,87,88,98,102,103,104,105,109,112];
   this.GXLastCtrlId =112;
   this.GrdpedidoContainer = new gx.grid.grid(this, 2,"WbpLvl2",35,"Grdpedido","Grdpedido","GrdpedidoContainer",this.CmpContext,this.IsMasterPage,"hregistraracertopedido",[],false,1,true,true,0,false,false,false,"CollPedidoAcerto.PedidoAcertoItem",0,"px","Novo registro",false,false,false,null,null,false,"AV13PedidoAce",false,[1,1,1,1]);
   var GrdpedidoContainer = this.GrdpedidoContainer;
   GrdpedidoContainer.addSingleLineEdit("GXV110",36,"CTLLINHA","Linha","","Linha","int",0,"px",4,4,"right",null,[],"GXV110","GXV110",true,0,false,false,"Attribute",1,"");
   GrdpedidoContainer.addSingleLineEdit("GXV111",37,"CTLNUMERO","Nº Vale","","Numero","int",0,"px",8,8,"right",null,[],"GXV111","GXV111",true,0,false,false,"Attribute",1,"");
   GrdpedidoContainer.addComboBox("GXV112",38,"CTLCLIENTE","Nome do Cliente","Cliente","int",null,1,true,false,0,"px","");
   GrdpedidoContainer.addSingleLineEdit("GXV113",39,"CTLDATA","Data","","Data","date",0,"px",10,10,"right",null,[],"GXV113","GXV113",false,0,false,false,"Attribute",1,"");
   GrdpedidoContainer.addComboBox("GXV114",40,"CTLFORMAPAGAMENTO","Forma de Pagamento","FormaPagamento","char",null,1,true,false,0,"px","");
   GrdpedidoContainer.addSingleLineEdit("GXV115",41,"CTLSNPEDIDO","Sn Pedido","","SnPedido","char",0,"px",1,1,"left",null,[],"GXV115","GXV115",false,0,false,false,"Attribute",1,"");
   GrdpedidoContainer.addComboBox("GXV116",42,"CTLDESPESA","Tipo da Despesa","Despesa","int",null,0,true,false,0,"px","");
   GrdpedidoContainer.addBitmap("&Bmpalt","vBMPALT",43,0,"px",17,"px","e171022_client","","Itens","Image","GridColumnImage");
   GrdpedidoContainer.addBitmap("&Bmpexcped","vBMPEXCPED",44,0,"px",17,"px","e201022_client","","Exc","Image","");
   GrdpedidoContainer.addBitmap("&Bmpimp","vBMPIMP",45,0,"px",17,"px","e221022_client","","Imp","Image","");
   GrdpedidoContainer.addSingleLineEdit("Snpedido",46,"vSNPEDIDO","Sn Pedido","","SnPedido","char",0,"px",1,1,"left",null,[],"Snpedido","SnPedido",false,0,false,false,"Attribute",1,"");
   this.setGrid(GrdpedidoContainer);
   this.GrdprodutoContainer = new gx.grid.grid(this, 8,"WbpLvl8",80,"Grdproduto","Grdproduto","GrdprodutoContainer",this.CmpContext,this.IsMasterPage,"hregistraracertopedido",[],false,1,true,true,0,false,false,false,"CollAcertoPedidoItem.PedidoAcertoItemItem",0,"px","Novo registro",false,false,false,null,null,false,"AV18ItemPedido",false,[1,1,1,1]);
   var GrdprodutoContainer = this.GrdprodutoContainer;
   GrdprodutoContainer.addSingleLineEdit("GXV129",81,"CTLLINHA1","Linha","","Linha","int",0,"px",5,5,"right",null,[],"GXV129","GXV129",true,0,false,false,"Attribute",1,"");
   GrdprodutoContainer.addSingleLineEdit("GXV12A",82,"CTLID","Código","","Id","int",0,"px",8,8,"right",null,[],"GXV12A","GXV12A",false,0,false,false,"Attribute",1,"");
   GrdprodutoContainer.addSingleLineEdit("GXV12B",83,"CTLSEQ","Sequência","","Seq","int",0,"px",4,4,"right",null,[],"GXV12B","GXV12B",false,0,false,false,"Attribute",1,"");
   GrdprodutoContainer.addComboBox("GXV12C",84,"CTLPRODUTO","Produto","Produto","int",null,0,true,false,0,"px","");
   GrdprodutoContainer.addSingleLineEdit("GXV12D",85,"CTLQUANTIDADE","Quantidade","","Quantidade","decimal",0,"px",22,22,"right",null,[],"GXV12D","GXV12D",true,2,false,false,"Attribute",1,"");
   GrdprodutoContainer.addSingleLineEdit("GXV12E",86,"CTLPRECO","Preço","","Preco","decimal",0,"px",22,22,"right",null,[],"GXV12E","GXV12E",true,2,false,false,"Attribute",1,"");
   GrdprodutoContainer.addSingleLineEdit("Valortotal",87,"vVALORTOTAL","Valor Total","","ValorTotal","decimal",0,"px",22,22,"right",null,[],"Valortotal","ValorTotal",true,2,false,false,"Attribute",1,"");
   GrdprodutoContainer.addBitmap("&Bmpexcitem","vBMPEXCITEM",88,0,"px",17,"px","e261022_client","","Exc","Image","");
   this.setGrid(GrdprodutoContainer);
   this.HDMASKDATAContainer = gx.uc.getNew(this, 110, 14, "HDMask", "HDMASKDATAContainer", "Hdmaskdata");
   var HDMASKDATAContainer = this.HDMASKDATAContainer;
   HDMASKDATAContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKDATAContainer.setProp("Picture", "Picture", "99/99/9999", "str");
   HDMASKDATAContainer.setProp("Default", "Default", "", "str");
   HDMASKDATAContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKDATAContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKDATAContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKDATAContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKDATAContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKDATAContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKDATAContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKDATAContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKDATAContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKDATAContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKDATAContainer.setProp("Class", "Class", "", "char");
   HDMASKDATAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKDATAContainer);
   GXValidFnc[3]={fld:"TABLE3",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Data,isvalid:null,rgrid:[],fld:"vDATA",gxz:"ZV12Data",gxold:"OV12Data",gxvar:"AV12Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATA",gx.O.AV12Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[22]={fld:"TABGERAL",grid:0};
   GXValidFnc[25]={fld:"TABLE6",grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[30]={fld:"IMGNOVONOTA",grid:0};
   GXValidFnc[36]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:35,gxgrid:this.GrdpedidoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLINHA",gxz:"ZV51GXV110",gxold:"OV51GXV110",gxvar:"GXV110",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV110=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51GXV110=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLLINHA",row || gx.fn.currentGridRowImpl(35),gx.O.GXV110,0)},c2v:function(){gx.O.GXV110=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLLINHA",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:35,gxgrid:this.GrdpedidoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMERO",gxz:"ZV52GXV111",gxold:"OV52GXV111",gxvar:"GXV111",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV111=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52GXV111=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMERO",row || gx.fn.currentGridRowImpl(35),gx.O.GXV111,0)},c2v:function(){gx.O.GXV111=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMERO",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:35,gxgrid:this.GrdpedidoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLIENTE",gxz:"ZV53GXV112",gxold:"OV53GXV112",gxvar:"GXV112",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.GXV112=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53GXV112=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("CTLCLIENTE",row || gx.fn.currentGridRowImpl(35),gx.O.GXV112)},c2v:function(){gx.O.GXV112=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCLIENTE",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:35,gxgrid:this.GrdpedidoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATA",gxz:"ZV54GXV113",gxold:"OV54GXV113",gxvar:"GXV113",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV113=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV54GXV113=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATA",row || gx.fn.currentGridRowImpl(35),gx.O.GXV113,0)},c2v:function(){gx.O.GXV113=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATA",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:35,gxgrid:this.GrdpedidoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLFORMAPAGAMENTO",gxz:"ZV55GXV114",gxold:"OV55GXV114",gxvar:"GXV114",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.GXV114=Value},v2z:function(Value){gx.O.ZV55GXV114=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLFORMAPAGAMENTO",row || gx.fn.currentGridRowImpl(35),gx.O.GXV114)},c2v:function(){gx.O.GXV114=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFORMAPAGAMENTO",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:35,gxgrid:this.GrdpedidoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNPEDIDO",gxz:"ZV56GXV115",gxold:"OV56GXV115",gxvar:"GXV115",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV115=Value},v2z:function(Value){gx.O.ZV56GXV115=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSNPEDIDO",row || gx.fn.currentGridRowImpl(35),gx.O.GXV115,0)},c2v:function(){gx.O.GXV115=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNPEDIDO",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:35,gxgrid:this.GrdpedidoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDESPESA",gxz:"ZV57GXV116",gxold:"OV57GXV116",gxvar:"GXV116",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.GXV116=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57GXV116=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("CTLDESPESA",row || gx.fn.currentGridRowImpl(35),gx.O.GXV116)},c2v:function(){gx.O.GXV116=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLDESPESA",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.GrdpedidoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV17BmpAlt",gxold:"OV17BmpAlt",gxvar:"AV17BmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17BmpAlt=Value},v2z:function(Value){gx.O.ZV17BmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(35),gx.O.AV17BmpAlt,gx.O.AV67Bmpalt_GXI)},c2v:function(){gx.O.AV67Bmpalt_GXI=this.val_GXI();gx.O.AV17BmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(35))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(35))}, gxvar_GXI:'AV67Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.GrdpedidoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCPED",gxz:"ZV26BmpExcPed",gxold:"OV26BmpExcPed",gxvar:"AV26BmpExcPed",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26BmpExcPed=Value},v2z:function(Value){gx.O.ZV26BmpExcPed=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCPED",row || gx.fn.currentGridRowImpl(35),gx.O.AV26BmpExcPed,gx.O.AV68Bmpexcped_GXI)},c2v:function(){gx.O.AV68Bmpexcped_GXI=this.val_GXI();gx.O.AV26BmpExcPed=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCPED",row || gx.fn.currentGridRowImpl(35))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCPED_GXI",row || gx.fn.currentGridRowImpl(35))}, gxvar_GXI:'AV68Bmpexcped_GXI',nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.GrdpedidoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMP",gxz:"ZV33bmpImp",gxold:"OV33bmpImp",gxvar:"AV33bmpImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33bmpImp=Value},v2z:function(Value){gx.O.ZV33bmpImp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMP",row || gx.fn.currentGridRowImpl(35),gx.O.AV33bmpImp,gx.O.AV70Bmpimp_GXI)},c2v:function(){gx.O.AV70Bmpimp_GXI=this.val_GXI();gx.O.AV33bmpImp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMP",row || gx.fn.currentGridRowImpl(35))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMP_GXI",row || gx.fn.currentGridRowImpl(35))}, gxvar_GXI:'AV70Bmpimp_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:35,gxgrid:this.GrdpedidoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNPEDIDO",gxz:"ZV41SnPedido",gxold:"OV41SnPedido",gxvar:"AV41SnPedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV41SnPedido=Value},v2z:function(Value){gx.O.ZV41SnPedido=Value},v2c:function(row){gx.fn.setGridControlValue("vSNPEDIDO",row || gx.fn.currentGridRowImpl(35),gx.O.AV41SnPedido,0)},c2v:function(){gx.O.AV41SnPedido=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNPEDIDO",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABITENS",grid:0};
   GXValidFnc[52]={fld:"TABLE7",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[57]={fld:"TXTNUM", format:0,grid:0};
   GXValidFnc[60]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[62]={fld:"TXTLINHA", format:0,grid:0};
   GXValidFnc[65]={fld:"TABLE8",grid:0};
   GXValidFnc[70]={fld:"TABLE9",grid:0};
   GXValidFnc[73]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[75]={fld:"IMGNOVOPRODUTO",grid:0};
   GXValidFnc[81]={lvl:8,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,isacc:0,grid:80,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLINHA1",gxz:"ZV59GXV129",gxold:"OV59GXV129",gxvar:"GXV129",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV129=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59GXV129=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLLINHA1",row || gx.fn.currentGridRowImpl(80),gx.O.GXV129,0)},c2v:function(){gx.O.GXV129=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLLINHA1",row || gx.fn.currentGridRowImpl(80),'.')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:8,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:80,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLID",gxz:"ZV60GXV12A",gxold:"OV60GXV12A",gxvar:"GXV12A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12A=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60GXV12A=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLID",row || gx.fn.currentGridRowImpl(80),gx.O.GXV12A,0)},c2v:function(){gx.O.GXV12A=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLID",row || gx.fn.currentGridRowImpl(80),'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:8,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:80,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSEQ",gxz:"ZV61GXV12B",gxold:"OV61GXV12B",gxvar:"GXV12B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12B=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61GXV12B=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSEQ",row || gx.fn.currentGridRowImpl(80),gx.O.GXV12B,0)},c2v:function(){gx.O.GXV12B=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSEQ",row || gx.fn.currentGridRowImpl(80),'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:8,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:80,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:'e241022_client',rgrid:[],fld:"CTLPRODUTO",gxz:"ZV62GXV12C",gxold:"OV62GXV12C",gxvar:"GXV12C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.GXV12C=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62GXV12C=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("CTLPRODUTO",row || gx.fn.currentGridRowImpl(80),gx.O.GXV12C)},c2v:function(){gx.O.GXV12C=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTO",row || gx.fn.currentGridRowImpl(80),'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:8,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:80,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQUANTIDADE",gxz:"ZV63GXV12D",gxold:"OV63GXV12D",gxvar:"GXV12D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12D=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV63GXV12D=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQUANTIDADE",row || gx.fn.currentGridRowImpl(80),gx.O.GXV12D,2,',')},c2v:function(){gx.O.GXV12D=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQUANTIDADE",row || gx.fn.currentGridRowImpl(80),'.',',')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:8,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:80,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:'e231022_client',rgrid:[],fld:"CTLPRECO",gxz:"ZV64GXV12E",gxold:"OV64GXV12E",gxvar:"GXV12E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12E=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV64GXV12E=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPRECO",row || gx.fn.currentGridRowImpl(80),gx.O.GXV12E,2,',')},c2v:function(){gx.O.GXV12E=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPRECO",row || gx.fn.currentGridRowImpl(80),'.',',')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:8,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:80,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV24ValorTotal",gxold:"OV24ValorTotal",gxvar:"AV24ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24ValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV24ValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORTOTAL",row || gx.fn.currentGridRowImpl(80),gx.O.AV24ValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24ValorTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORTOTAL",row || gx.fn.currentGridRowImpl(80),'.',',')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:8,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:80,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCITEM",gxz:"ZV27BmpExcItem",gxold:"OV27BmpExcItem",gxvar:"AV27BmpExcItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27BmpExcItem=Value},v2z:function(Value){gx.O.ZV27BmpExcItem=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCITEM",row || gx.fn.currentGridRowImpl(80),gx.O.AV27BmpExcItem,gx.O.AV69Bmpexcitem_GXI)},c2v:function(){gx.O.AV69Bmpexcitem_GXI=this.val_GXI();gx.O.AV27BmpExcItem=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCITEM",row || gx.fn.currentGridRowImpl(80))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCITEM_GXI",row || gx.fn.currentGridRowImpl(80))}, gxvar_GXI:'AV69Bmpexcitem_GXI',nac:gx.falseFn};
   GXValidFnc[98]={fld:"TABLE11",grid:0};
   GXValidFnc[102]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPPEDIDO",gxz:"ZV44TpPedido",gxold:"OV44TpPedido",gxvar:"AV44TpPedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44TpPedido=Value},v2z:function(Value){gx.O.ZV44TpPedido=Value},v2c:function(){gx.fn.setControlValue("vTPPEDIDO",gx.O.AV44TpPedido,0)},c2v:function(){gx.O.AV44TpPedido=this.val()},val:function(){return gx.fn.getControlValue("vTPPEDIDO")},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidoaceid,isvalid:null,rgrid:[],fld:"vPEDIDOACEID",gxz:"ZV23PedidoAceId",gxold:"OV23PedidoAceId",gxvar:"AV23PedidoAceId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PedidoAceId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PedidoAceId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOACEID",gx.O.AV23PedidoAceId,0)},c2v:function(){gx.O.AV23PedidoAceId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOACEID",'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMLINHA",gxz:"ZV34NumLinha",gxold:"OV34NumLinha",gxvar:"AV34NumLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34NumLinha=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34NumLinha=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMLINHA",gx.O.AV34NumLinha,0)},c2v:function(){gx.O.AV34NumLinha=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMLINHA",'.')},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPTELA",gxz:"ZV16TpTela",gxold:"OV16TpTela",gxvar:"AV16TpTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TpTela=Value},v2z:function(Value){gx.O.ZV16TpTela=Value},v2c:function(){gx.fn.setControlValue("vTPTELA",gx.O.AV16TpTela,0)},c2v:function(){gx.O.AV16TpTela=this.val()},val:function(){return gx.fn.getControlValue("vTPTELA")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"JS", format:2,grid:0};
   GXValidFnc[112]={fld:"BTNHELP",grid:0};
   this.AV12Data = gx.date.nullDate() ;
   this.ZV12Data = gx.date.nullDate() ;
   this.OV12Data = gx.date.nullDate() ;
   this.ZV51GXV110 = 0 ;
   this.OV51GXV110 = 0 ;
   this.ZV52GXV111 = 0 ;
   this.OV52GXV111 = 0 ;
   this.ZV53GXV112 = 0 ;
   this.OV53GXV112 = 0 ;
   this.ZV54GXV113 = gx.date.nullDate() ;
   this.OV54GXV113 = gx.date.nullDate() ;
   this.ZV55GXV114 = "" ;
   this.OV55GXV114 = "" ;
   this.ZV56GXV115 = "" ;
   this.OV56GXV115 = "" ;
   this.ZV57GXV116 = 0 ;
   this.OV57GXV116 = 0 ;
   this.ZV17BmpAlt = "" ;
   this.OV17BmpAlt = "" ;
   this.ZV26BmpExcPed = "" ;
   this.OV26BmpExcPed = "" ;
   this.ZV33bmpImp = "" ;
   this.OV33bmpImp = "" ;
   this.ZV41SnPedido = "" ;
   this.OV41SnPedido = "" ;
   this.ZV59GXV129 = 0 ;
   this.OV59GXV129 = 0 ;
   this.ZV60GXV12A = 0 ;
   this.OV60GXV12A = 0 ;
   this.ZV61GXV12B = 0 ;
   this.OV61GXV12B = 0 ;
   this.ZV62GXV12C = 0 ;
   this.OV62GXV12C = 0 ;
   this.ZV63GXV12D = 0 ;
   this.OV63GXV12D = 0 ;
   this.ZV64GXV12E = 0 ;
   this.OV64GXV12E = 0 ;
   this.ZV24ValorTotal = 0 ;
   this.OV24ValorTotal = 0 ;
   this.ZV27BmpExcItem = "" ;
   this.OV27BmpExcItem = "" ;
   this.AV44TpPedido = "" ;
   this.ZV44TpPedido = "" ;
   this.OV44TpPedido = "" ;
   this.AV23PedidoAceId = 0 ;
   this.ZV23PedidoAceId = 0 ;
   this.OV23PedidoAceId = 0 ;
   this.AV34NumLinha = 0 ;
   this.ZV34NumLinha = 0 ;
   this.OV34NumLinha = 0 ;
   this.AV16TpTela = "" ;
   this.ZV16TpTela = "" ;
   this.OV16TpTela = "" ;
   this.AV12Data = gx.date.nullDate() ;
   this.AV44TpPedido = "" ;
   this.AV23PedidoAceId = 0 ;
   this.AV34NumLinha = 0 ;
   this.AV16TpTela = "" ;
   this.GXV110 = 0 ;
   this.GXV111 = 0 ;
   this.GXV112 = 0 ;
   this.GXV113 = gx.date.nullDate() ;
   this.GXV114 = "" ;
   this.GXV115 = "" ;
   this.GXV116 = 0 ;
   this.AV17BmpAlt = "" ;
   this.AV26BmpExcPed = "" ;
   this.AV33bmpImp = "" ;
   this.AV41SnPedido = "" ;
   this.GXV129 = 0 ;
   this.GXV12A = 0 ;
   this.GXV12B = 0 ;
   this.GXV12C = 0 ;
   this.GXV12D = 0 ;
   this.GXV12E = 0 ;
   this.AV24ValorTotal = 0 ;
   this.AV27BmpExcItem = "" ;
   this.A6743PedidoAceData = gx.date.nullDate() ;
   this.A6732PedidoAceId = 0 ;
   this.A6733PedidoAceItemSeq = 0 ;
   this.A6736PedidoAceItemPreco = 0 ;
   this.A6734PedidoAceItemProdId = 0 ;
   this.A6735PedidoAceItemQtde = 0 ;
   this.A7585PedidoAceClienteId = 0 ;
   this.A6744PedidoAceFormaPgto = "" ;
   this.A6737AcertoDespRecId = 0 ;
   this.AV13PedidoAce = [ ] ;
   this.AV40PedidoAceIdAux = 0 ;
   this.AV43PessoaEmpresaId = "" ;
   this.AV36DataStr = "" ;
   this.AV19DespAcertoPedido = [ ] ;
   this.AV22DespAcertoPedidoItem = {} ;
   this.AV21ItemPedidoItem = {} ;
   this.AV10MsgErro = "" ;
   this.AV18ItemPedido = [ ] ;
   this.AV78GXV5 = 0 ;
   this.AV35SnExiste = "" ;
   this.AV20SnErro = "" ;
   this.Events = {"e111022_client": ["'FECHAR'", true] ,"e131022_client": ["ENTER", true] ,"e171022_client": ["'ALTERARPEDIDO'", true] ,"e231022_client": ["CTLPRECO.ISVALID", true] ,"e241022_client": ["CTLPRODUTO.ISVALID", true] ,"e141022_client": ["'NOVOVENDA'", true] ,"e121022_client": ["'NOVOPRODUTO'", true] ,"e151022_client": ["'CANCELAR'", true] ,"e201022_client": ["'EXCLUIRPEDIDO'", true] ,"e261022_client": ["'EXCLUIRPRODUTO'", true] ,"e211022_client": ["'EXCLUIRDEPESA'", true] ,"e221022_client": ["'EMITERELATORIO'", true] ,"e291022_client": ["CANCEL", true] ,"e281022_client": ["'NOVODESPESA'", false] ,"e271021_client": ["'IMPRIMIR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRDPEDIDO_nFirstRecordOnPage'},{av:'GRDPEDIDO_nEOF'},{av:'AV17BmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV26BmpExcPed',fld:'vBMPEXCPED'},{av:'gx.fn.getCtrlProperty("vBMPEXCPED","Tooltiptext")',ctrl:'vBMPEXCPED',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCPED","Jsonclick")',ctrl:'vBMPEXCPED',prop:'Jsonclick'},{av:'AV33bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Visible")',ctrl:'vBMPIMP',prop:'Visible'},{av:'AV41SnPedido',fld:'vSNPEDIDO'},{av:'AV40PedidoAceIdAux',fld:'vPEDIDOACEIDAUX'},{av:'AV43PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'AV27BmpExcItem',fld:'vBMPEXCITEM'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Tooltiptext")',ctrl:'vBMPEXCITEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Jsonclick")',ctrl:'vBMPEXCITEM',prop:'Jsonclick'},{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'AV25ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV16TpTela',fld:'vTPTELA'},{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'A6732PedidoAceId',fld:'PEDIDOACEID'},{av:'A6743PedidoAceData',fld:'PEDIDOACEDATA'},{av:'AV12Data',fld:'vDATA'},{av:'A6733PedidoAceItemSeq',fld:'PEDIDOACEITEMSEQ'}],[{av:'gx.fn.getCtrlProperty("TXTNUM","Caption")',ctrl:'TXTNUM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TXTLINHA","Caption")',ctrl:'TXTLINHA',prop:'Caption'},{av:'this.HDMASKDATAContainer.AttachControl',ctrl:'HDMASKDATA',prop:'AttachControl'},{av:'gx.fn.getCtrlProperty("TABGERAL","Visible")',ctrl:'TABGERAL',prop:'Visible'},{ctrl:'BTNIMPRIMIR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDATA","Enabled")',ctrl:'vDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TABITENS","Visible")',ctrl:'TABITENS',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{av:'AV74GXV4',fld:'vGXV4'},{av:'AV14PedidoAceItem',fld:'vPEDIDOACEITEM'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16TpTela',fld:'vTPTELA'},{av:'AV12Data',fld:'vDATA'},{av:'AV20SnErro',fld:'vSNERRO'},{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV43PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'A6743PedidoAceData',fld:'PEDIDOACEDATA'},{av:'A7585PedidoAceClienteId',fld:'PEDIDOACECLIENTEID'},{av:'A6744PedidoAceFormaPgto',fld:'PEDIDOACEFORMAPGTO'},{av:'A6732PedidoAceId',fld:'PEDIDOACEID'},{av:'A6737AcertoDespRecId',fld:'ACERTODESPRECID'},{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'AV10MsgErro',fld:'vMSGERRO'},{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'AV27BmpExcItem',fld:'vBMPEXCITEM'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Tooltiptext")',ctrl:'vBMPEXCITEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Jsonclick")',ctrl:'vBMPEXCITEM',prop:'Jsonclick'},{av:'A6733PedidoAceItemSeq',fld:'PEDIDOACEITEMSEQ'},{av:'AV25ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'GRDPEDIDO_nFirstRecordOnPage'},{av:'GRDPEDIDO_nEOF'},{av:'AV17BmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV26BmpExcPed',fld:'vBMPEXCPED'},{av:'gx.fn.getCtrlProperty("vBMPEXCPED","Tooltiptext")',ctrl:'vBMPEXCPED',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCPED","Jsonclick")',ctrl:'vBMPEXCPED',prop:'Jsonclick'},{av:'AV33bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Visible")',ctrl:'vBMPIMP',prop:'Visible'},{av:'AV41SnPedido',fld:'vSNPEDIDO'},{av:'AV40PedidoAceIdAux',fld:'vPEDIDOACEIDAUX'}],[{av:'AV16TpTela',fld:'vTPTELA'},{av:'gx.fn.getCtrlProperty("TABGERAL","Visible")',ctrl:'TABGERAL',prop:'Visible'},{av:'AV71GXV3',fld:'vGXV3'},{av:'AV14PedidoAceItem',fld:'vPEDIDOACEITEM'},{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'AV10MsgErro',fld:'vMSGERRO'},{av:'AV20SnErro',fld:'vSNERRO'},{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV44TpPedido',fld:'vTPPEDIDO'},{av:'AV15i',fld:'vI'},{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'AV35SnExiste',fld:'vSNEXISTE'},{av:'AV78GXV5',fld:'vGXV5'},{av:'AV21ItemPedidoItem',fld:'vITEMPEDIDOITEM'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'}]];
   this.EvtParms["'ALTERARPEDIDO'"] = [[{av:'AV20SnErro',fld:'vSNERRO'},{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'AV41SnPedido',fld:'vSNPEDIDO'},{av:'A6732PedidoAceId',fld:'PEDIDOACEID'},{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'A6743PedidoAceData',fld:'PEDIDOACEDATA'},{av:'AV12Data',fld:'vDATA'},{av:'A6736PedidoAceItemPreco',fld:'PEDIDOACEITEMPRECO'},{av:'A6734PedidoAceItemProdId',fld:'PEDIDOACEITEMPRODID'},{av:'A6735PedidoAceItemQtde',fld:'PEDIDOACEITEMQTDE'},{av:'A6733PedidoAceItemSeq',fld:'PEDIDOACEITEMSEQ'},{av:'AV10MsgErro',fld:'vMSGERRO'},{av:'AV40PedidoAceIdAux',fld:'vPEDIDOACEIDAUX'},{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'AV27BmpExcItem',fld:'vBMPEXCITEM'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Tooltiptext")',ctrl:'vBMPEXCITEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Jsonclick")',ctrl:'vBMPEXCITEM',prop:'Jsonclick'},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV16TpTela',fld:'vTPTELA'},{av:'AV25ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'}],[{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV44TpPedido',fld:'vTPPEDIDO'},{av:'AV16TpTela',fld:'vTPTELA'},{av:'AV20SnErro',fld:'vSNERRO'},{av:'AV10MsgErro',fld:'vMSGERRO'},{av:'AV40PedidoAceIdAux',fld:'vPEDIDOACEIDAUX'},{av:'AV15i',fld:'vI'},{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'AV21ItemPedidoItem',fld:'vITEMPEDIDOITEM'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV41SnPedido',fld:'vSNPEDIDO'}]];
   this.EvtParms["CTLPRECO.ISVALID"] = [[{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80}],[{av:'AV24ValorTotal',fld:'vVALORTOTAL'}]];
   this.EvtParms["CTLPRODUTO.ISVALID"] = [[{av:'AV25ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'AV47PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'AV12Data',fld:'vDATA'},{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'AV27BmpExcItem',fld:'vBMPEXCITEM'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Tooltiptext")',ctrl:'vBMPEXCITEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Jsonclick")',ctrl:'vBMPEXCITEM',prop:'Jsonclick'},{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV16TpTela',fld:'vTPTELA'},{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'A6732PedidoAceId',fld:'PEDIDOACEID'},{av:'A6743PedidoAceData',fld:'PEDIDOACEDATA'},{av:'A6733PedidoAceItemSeq',fld:'PEDIDOACEITEMSEQ'}],[{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80}]];
   this.EvtParms["'NOVOVENDA'"] = [[{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'AV12Data',fld:'vDATA'},{av:'GRDPEDIDO_nFirstRecordOnPage'},{av:'GRDPEDIDO_nEOF'},{av:'AV17BmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV26BmpExcPed',fld:'vBMPEXCPED'},{av:'gx.fn.getCtrlProperty("vBMPEXCPED","Tooltiptext")',ctrl:'vBMPEXCPED',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCPED","Jsonclick")',ctrl:'vBMPEXCPED',prop:'Jsonclick'},{av:'AV33bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Visible")',ctrl:'vBMPIMP',prop:'Visible'},{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV16TpTela',fld:'vTPTELA'},{av:'A6732PedidoAceId',fld:'PEDIDOACEID'},{av:'A6743PedidoAceData',fld:'PEDIDOACEDATA'},{av:'A6733PedidoAceItemSeq',fld:'PEDIDOACEITEMSEQ'},{av:'AV41SnPedido',fld:'vSNPEDIDO'},{av:'AV40PedidoAceIdAux',fld:'vPEDIDOACEIDAUX'},{av:'AV43PessoaEmpresaId',fld:'vPESSOAEMPRESAID'}],[{av:'AV14PedidoAceItem',fld:'vPEDIDOACEITEM'},{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35}]];
   this.EvtParms["'NOVOPRODUTO'"] = [[{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'AV27BmpExcItem',fld:'vBMPEXCITEM'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Tooltiptext")',ctrl:'vBMPEXCITEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Jsonclick")',ctrl:'vBMPEXCITEM',prop:'Jsonclick'},{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV16TpTela',fld:'vTPTELA'},{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'A6732PedidoAceId',fld:'PEDIDOACEID'},{av:'A6743PedidoAceData',fld:'PEDIDOACEDATA'},{av:'AV12Data',fld:'vDATA'},{av:'A6733PedidoAceItemSeq',fld:'PEDIDOACEITEMSEQ'},{av:'AV25ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'}],[{av:'AV21ItemPedidoItem',fld:'vITEMPEDIDOITEM'},{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80}]];
   this.EvtParms["'NOVODESPESA'"] = [[{av:'AV19DespAcertoPedido',fld:'vDESPACERTOPEDIDO'}],[{av:'AV22DespAcertoPedidoItem',fld:'vDESPACERTOPEDIDOITEM'},{av:'AV19DespAcertoPedido',fld:'vDESPACERTOPEDIDO'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV12Data',fld:'vDATA'}],[{av:'AV36DataStr',fld:'vDATASTR'}]];
   this.EvtParms["GRDPEDIDO.LOAD"] = [[{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'AV41SnPedido',fld:'vSNPEDIDO'},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'A6732PedidoAceId',fld:'PEDIDOACEID'},{av:'AV40PedidoAceIdAux',fld:'vPEDIDOACEIDAUX'},{av:'A6743PedidoAceData',fld:'PEDIDOACEDATA'},{av:'AV12Data',fld:'vDATA'}],[{av:'AV40PedidoAceIdAux',fld:'vPEDIDOACEIDAUX'},{ctrl:'CTLNUMERO',prop:'Enabled'},{ctrl:'CTLCLIENTE',prop:'Enabled'},{ctrl:'CTLFORMAPAGAMENTO',prop:'Enabled'},{ctrl:'CTLCLIENTE',prop:'Forecolor'},{ctrl:'CTLCLIENTE',prop:'Fontbold'},{ctrl:'CTLFORMAPAGAMENTO',prop:'Forecolor'},{ctrl:'CTLFORMAPAGAMENTO',prop:'Fontbold'},{ctrl:'CTLDATA',prop:'Forecolor'},{ctrl:'CTLDATA',prop:'Fontbold'},{ctrl:'CTLLINHA',prop:'Forecolor'},{ctrl:'CTLLINHA',prop:'Fontbold'},{ctrl:'CTLNUMERO',prop:'Forecolor'},{ctrl:'CTLNUMERO',prop:'Fontbold'},{av:'AV41SnPedido',fld:'vSNPEDIDO'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV12Data',fld:'vDATA'},{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'GRDPEDIDO_nFirstRecordOnPage'},{av:'GRDPEDIDO_nEOF'},{av:'AV17BmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV26BmpExcPed',fld:'vBMPEXCPED'},{av:'gx.fn.getCtrlProperty("vBMPEXCPED","Tooltiptext")',ctrl:'vBMPEXCPED',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCPED","Jsonclick")',ctrl:'vBMPEXCPED',prop:'Jsonclick'},{av:'AV33bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Visible")',ctrl:'vBMPIMP',prop:'Visible'},{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV16TpTela',fld:'vTPTELA'},{av:'A6732PedidoAceId',fld:'PEDIDOACEID'},{av:'A6743PedidoAceData',fld:'PEDIDOACEDATA'},{av:'A6733PedidoAceItemSeq',fld:'PEDIDOACEITEMSEQ'},{av:'AV41SnPedido',fld:'vSNPEDIDO'},{av:'AV40PedidoAceIdAux',fld:'vPEDIDOACEIDAUX'},{av:'AV43PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'AV27BmpExcItem',fld:'vBMPEXCITEM'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Tooltiptext")',ctrl:'vBMPEXCITEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Jsonclick")',ctrl:'vBMPEXCITEM',prop:'Jsonclick'},{av:'AV25ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'}],[{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV44TpPedido',fld:'vTPPEDIDO'},{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'AV19DespAcertoPedido',fld:'vDESPACERTOPEDIDO'},{av:'AV16TpTela',fld:'vTPTELA'}]];
   this.EvtParms["GRDPRODUTO.LOAD"] = [[{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80}],[{av:'AV24ValorTotal',fld:'vVALORTOTAL'}]];
   this.EvtParms["'EXCLUIRPEDIDO'"] = [[{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'AV27BmpExcItem',fld:'vBMPEXCITEM'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Tooltiptext")',ctrl:'vBMPEXCITEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Jsonclick")',ctrl:'vBMPEXCITEM',prop:'Jsonclick'},{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'AV16TpTela',fld:'vTPTELA'},{av:'A6732PedidoAceId',fld:'PEDIDOACEID'},{av:'A6743PedidoAceData',fld:'PEDIDOACEDATA'},{av:'AV12Data',fld:'vDATA'},{av:'A6733PedidoAceItemSeq',fld:'PEDIDOACEITEMSEQ'},{av:'AV25ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'GRDPEDIDO_nFirstRecordOnPage'},{av:'GRDPEDIDO_nEOF'},{av:'AV17BmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV26BmpExcPed',fld:'vBMPEXCPED'},{av:'gx.fn.getCtrlProperty("vBMPEXCPED","Tooltiptext")',ctrl:'vBMPEXCPED',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCPED","Jsonclick")',ctrl:'vBMPEXCPED',prop:'Jsonclick'},{av:'AV33bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Visible")',ctrl:'vBMPIMP',prop:'Visible'},{av:'AV41SnPedido',fld:'vSNPEDIDO'},{av:'AV40PedidoAceIdAux',fld:'vPEDIDOACEIDAUX'},{av:'AV43PessoaEmpresaId',fld:'vPESSOAEMPRESAID'}],[{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'AV44TpPedido',fld:'vTPPEDIDO'},{av:'AV16TpTela',fld:'vTPTELA'},{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'AV19DespAcertoPedido',fld:'vDESPACERTOPEDIDO'},{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'AV15i',fld:'vI'},{av:'AV79GXV6',fld:'vGXV6'},{av:'AV14PedidoAceItem',fld:'vPEDIDOACEITEM'}]];
   this.EvtParms["'EXCLUIRPRODUTO'"] = [[{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'AV27BmpExcItem',fld:'vBMPEXCITEM'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Tooltiptext")',ctrl:'vBMPEXCITEM',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXCITEM","Jsonclick")',ctrl:'vBMPEXCITEM',prop:'Jsonclick'},{av:'AV23PedidoAceId',fld:'vPEDIDOACEID'},{av:'AV34NumLinha',fld:'vNUMLINHA'},{av:'AV16TpTela',fld:'vTPTELA'},{av:'AV13PedidoAce',fld:'vPEDIDOACE',grid:35},{av:'A6732PedidoAceId',fld:'PEDIDOACEID'},{av:'A6743PedidoAceData',fld:'PEDIDOACEDATA'},{av:'AV12Data',fld:'vDATA'},{av:'A6733PedidoAceItemSeq',fld:'PEDIDOACEITEMSEQ'},{av:'AV25ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'}],[{av:'AV18ItemPedido',fld:'vITEMPEDIDO',grid:80},{av:'AV15i',fld:'vI'},{av:'AV80GXV7',fld:'vGXV7'},{av:'AV21ItemPedidoItem',fld:'vITEMPEDIDOITEM'}]];
   this.EvtParms["'EXCLUIRDEPESA'"] = [[{av:'AV19DespAcertoPedido',fld:'vDESPACERTOPEDIDO'}],[{av:'AV19DespAcertoPedido',fld:'vDESPACERTOPEDIDO'},{av:'AV15i',fld:'vI'},{av:'AV81GXV8',fld:'vGXV8'},{av:'AV22DespAcertoPedidoItem',fld:'vDESPACERTOPEDIDOITEM'}]];
   this.EvtParms["'EMITERELATORIO'"] = [[{av:'AV65Pgmname',fld:'vPGMNAME'},{av:'AV39QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV12Data',fld:'vDATA'},{av:'AV37NomeRelativo',fld:'vNOMERELATIVO'}],[{av:'AV37NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV38NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV12Data',fld:'vDATA'},{av:'AV39QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EnterCtrl = ["BTNAVANCAR" ,"BTNCONFIRMAR"];
   this.setVCMap("AV43PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("AV25ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV13PedidoAce", "vPEDIDOACE", 0, "CollPedidoAcerto.PedidoAcertoItem");
   this.setVCMap("A6732PedidoAceId", "PEDIDOACEID", 0, "int");
   this.setVCMap("A6743PedidoAceData", "PEDIDOACEDATA", 0, "date");
   this.setVCMap("A6733PedidoAceItemSeq", "PEDIDOACEITEMSEQ", 0, "int");
   this.setVCMap("AV40PedidoAceIdAux", "vPEDIDOACEIDAUX", 0, "int");
   this.setVCMap("AV36DataStr", "vDATASTR", 0, "svchar");
   this.setVCMap("AV19DespAcertoPedido", "vDESPACERTOPEDIDO", 0, "CollDespPedidoAcerto.DespPedidoAcertoItem");
   this.setVCMap("AV22DespAcertoPedidoItem", "vDESPACERTOPEDIDOITEM", 0, "DespPedidoAcerto.DespPedidoAcertoItem");
   this.setVCMap("AV13PedidoAce", "vPEDIDOACE", 0, "CollPedidoAcerto.PedidoAcertoItem");
   this.setVCMap("A6732PedidoAceId", "PEDIDOACEID", 0, "int");
   this.setVCMap("A6743PedidoAceData", "PEDIDOACEDATA", 0, "date");
   this.setVCMap("A6733PedidoAceItemSeq", "PEDIDOACEITEMSEQ", 0, "int");
   this.setVCMap("AV40PedidoAceIdAux", "vPEDIDOACEIDAUX", 0, "int");
   GrdpedidoContainer.addRefreshingVar({rfrVar:"AV17BmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GrdpedidoContainer.addRefreshingVar({rfrVar:"AV17BmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GrdpedidoContainer.addRefreshingVar({rfrVar:"AV26BmpExcPed", rfrProp:"Value", gxAttId:"Bmpexcped"});
   GrdpedidoContainer.addRefreshingVar({rfrVar:"AV26BmpExcPed", rfrProp:"Tooltiptext", gxAttId:"Bmpexcped"});
   GrdpedidoContainer.addRefreshingVar({rfrVar:"AV26BmpExcPed", rfrProp:"Jsonclick", gxAttId:"Bmpexcped"});
   GrdpedidoContainer.addRefreshingVar({rfrVar:"AV33bmpImp", rfrProp:"Value", gxAttId:"Bmpimp"});
   GrdpedidoContainer.addRefreshingVar({rfrVar:"AV33bmpImp", rfrProp:"Tooltiptext", gxAttId:"Bmpimp"});
   GrdpedidoContainer.addRefreshingVar({rfrVar:"AV33bmpImp", rfrProp:"Visible", gxAttId:"Bmpimp"});
   GrdpedidoContainer.addRefreshingVar(this.GXValidFnc[103]);
   GrdpedidoContainer.addRefreshingVar(this.GXValidFnc[104]);
   GrdpedidoContainer.addRefreshingVar(this.GXValidFnc[105]);
   GrdpedidoContainer.addRefreshingVar({rfrVar:"AV13PedidoAce"});
   GrdpedidoContainer.addRefreshingVar({rfrVar:"A6732PedidoAceId"});
   GrdpedidoContainer.addRefreshingVar({rfrVar:"A6743PedidoAceData"});
   GrdpedidoContainer.addRefreshingVar(this.GXValidFnc[14]);
   GrdpedidoContainer.addRefreshingVar({rfrVar:"A6733PedidoAceItemSeq"});
   GrdpedidoContainer.addRefreshingVar({rfrVar:"AV41SnPedido", rfrProp:"Value", gxAttId:"Snpedido"});
   GrdpedidoContainer.addRefreshingVar({rfrVar:"AV40PedidoAceIdAux"});
   GrdprodutoContainer.addRefreshingVar({rfrVar:"AV27BmpExcItem", rfrProp:"Value", gxAttId:"Bmpexcitem"});
   GrdprodutoContainer.addRefreshingVar({rfrVar:"AV27BmpExcItem", rfrProp:"Tooltiptext", gxAttId:"Bmpexcitem"});
   GrdprodutoContainer.addRefreshingVar({rfrVar:"AV27BmpExcItem", rfrProp:"Jsonclick", gxAttId:"Bmpexcitem"});
   GrdprodutoContainer.addRefreshingVar(this.GXValidFnc[103]);
   GrdprodutoContainer.addRefreshingVar(this.GXValidFnc[104]);
   GrdprodutoContainer.addRefreshingVar(this.GXValidFnc[105]);
   GrdprodutoContainer.addRefreshingVar({rfrVar:"AV13PedidoAce"});
   GrdprodutoContainer.addRefreshingVar({rfrVar:"A6732PedidoAceId"});
   GrdprodutoContainer.addRefreshingVar({rfrVar:"A6743PedidoAceData"});
   GrdprodutoContainer.addRefreshingVar(this.GXValidFnc[14]);
   GrdprodutoContainer.addRefreshingVar({rfrVar:"A6733PedidoAceItemSeq"});
   GrdprodutoContainer.addRefreshingVar({rfrVar:"AV18ItemPedido"});
   this.addGridBCProperty("Pedidoace", ["Linha"], this.GXValidFnc[36], "AV13PedidoAce");
   this.addGridBCProperty("Pedidoace", ["Numero"], this.GXValidFnc[37], "AV13PedidoAce");
   this.addGridBCProperty("Pedidoace", ["Cliente"], this.GXValidFnc[38], "AV13PedidoAce");
   this.addGridBCProperty("Pedidoace", ["Data"], this.GXValidFnc[39], "AV13PedidoAce");
   this.addGridBCProperty("Pedidoace", ["FormaPagamento"], this.GXValidFnc[40], "AV13PedidoAce");
   this.addGridBCProperty("Pedidoace", ["SnPedido"], this.GXValidFnc[41], "AV13PedidoAce");
   this.addGridBCProperty("Pedidoace", ["Despesa"], this.GXValidFnc[42], "AV13PedidoAce");
   this.addGridBCProperty("Itempedido", ["Linha"], this.GXValidFnc[81], "AV18ItemPedido");
   this.addGridBCProperty("Itempedido", ["Id"], this.GXValidFnc[82], "AV18ItemPedido");
   this.addGridBCProperty("Itempedido", ["Seq"], this.GXValidFnc[83], "AV18ItemPedido");
   this.addGridBCProperty("Itempedido", ["Produto"], this.GXValidFnc[84], "AV18ItemPedido");
   this.addGridBCProperty("Itempedido", ["Quantidade"], this.GXValidFnc[85], "AV18ItemPedido");
   this.addGridBCProperty("Itempedido", ["Preco"], this.GXValidFnc[86], "AV18ItemPedido");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistraracertopedido());
