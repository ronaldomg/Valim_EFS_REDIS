/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:31:51.2
*/
gx.evt.autoSkip = false;
gx.define('hatualizaprecovenda', false, function () {
   this.ServerClass =  "hatualizaprecovenda" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("4", "'GRAVARPRECO'");
   this.addKeyListener("6", "'GRAVAPRECOMARGEM'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'GRAVAMARGEM'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A3805PrecoProdutoData=gx.fn.getDateValue("PRECOPRODUTODATA") ;
      this.AV5UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV108Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV109Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV9MsgErro=gx.fn.getControlValue("vMSGERRO") ;
      this.AV38MsgErro1=gx.fn.getControlValue("vMSGERRO1") ;
      this.AV93SnMargemPreco=gx.fn.getControlValue("vSNMARGEMPRECO") ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.AV11ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.A2965ProdutoId=gx.fn.getIntegerValue("PRODUTOID",'.') ;
      this.A3804PrecoProdutoPrecoEmpId=gx.fn.getControlValue("PRECOPRODUTOPRECOEMPID") ;
      this.AV13PrecoEmpresaId=gx.fn.getControlValue("vPRECOEMPRESAID") ;
      this.A3622PrecoProdutoPrecoId=gx.fn.getIntegerValue("PRECOPRODUTOPRECOID",'.') ;
      this.AV25Sdt=gx.fn.getControlValue("vSDT") ;
      this.A3801PrecoProdutoValor=gx.fn.getDecimalValue("PRECOPRODUTOVALOR",'.',',') ;
      this.AV14PrecoId=gx.fn.getIntegerValue("vPRECOID",'.') ;
   };
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
   this.Validv_Produtomargemmarkupcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOMARGEMMARKUPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s198_client=function()
   {
      if ( this.AV60PrecoSnArredonda == "S" )
      {
         if ( this.AV59PrecoCasasDecimais == 0 )
         {
            this.AV52VlrPrecoNovo =  gx.num.round( this.AV52VlrPrecoNovo, 0)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 1 )
         {
            this.AV52VlrPrecoNovo =  gx.num.round( this.AV52VlrPrecoNovo, 1)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 2 )
         {
            this.AV52VlrPrecoNovo =  gx.num.round( this.AV52VlrPrecoNovo, 2)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 3 )
         {
            this.AV52VlrPrecoNovo =  gx.num.round( this.AV52VlrPrecoNovo, 3)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 4 )
         {
            this.AV52VlrPrecoNovo =  gx.num.round( this.AV52VlrPrecoNovo, 4)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 5 )
         {
            this.AV52VlrPrecoNovo =  gx.num.round( this.AV52VlrPrecoNovo, 5)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 6 )
         {
            this.AV52VlrPrecoNovo =  gx.num.round( this.AV52VlrPrecoNovo, 6)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 7 )
         {
            this.AV52VlrPrecoNovo =  gx.num.round( this.AV52VlrPrecoNovo, 7)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 8 )
         {
            this.AV52VlrPrecoNovo =  gx.num.round( this.AV52VlrPrecoNovo, 8)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 9 )
         {
            this.AV52VlrPrecoNovo =  gx.num.round( this.AV52VlrPrecoNovo, 9)  ;
         }
      }
      else
      {
         if ( this.AV59PrecoCasasDecimais == 0 )
         {
            this.AV52VlrPrecoNovo =  gx.num.trunc( this.AV52VlrPrecoNovo, 0)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 1 )
         {
            this.AV52VlrPrecoNovo =  gx.num.trunc( this.AV52VlrPrecoNovo, 1)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 2 )
         {
            this.AV52VlrPrecoNovo =  gx.num.trunc( this.AV52VlrPrecoNovo, 2)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 3 )
         {
            this.AV52VlrPrecoNovo =  gx.num.trunc( this.AV52VlrPrecoNovo, 3)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 4 )
         {
            this.AV52VlrPrecoNovo =  gx.num.trunc( this.AV52VlrPrecoNovo, 4)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 5 )
         {
            this.AV52VlrPrecoNovo =  gx.num.trunc( this.AV52VlrPrecoNovo, 5)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 6 )
         {
            this.AV52VlrPrecoNovo =  gx.num.trunc( this.AV52VlrPrecoNovo, 6)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 7 )
         {
            this.AV52VlrPrecoNovo =  gx.num.trunc( this.AV52VlrPrecoNovo, 7)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 8 )
         {
            this.AV52VlrPrecoNovo =  gx.num.trunc( this.AV52VlrPrecoNovo, 8)  ;
         }
         else if ( this.AV59PrecoCasasDecimais == 9 )
         {
            this.AV52VlrPrecoNovo =  gx.num.trunc( this.AV52VlrPrecoNovo, 9)  ;
         }
      }
   };
   this.s122_client=function()
   {
      this.AV78TpErro = gx.num.trunc( 0 ,0) ;
      this.AV144GXV9 = gx.num.trunc( 1 ,0) ;
      while ( this.AV144GXV9 <= this.AV25Sdt.length )
      {
         this.AV26SdtItem =  this.AV25Sdt[this.AV144GXV9 - 1]  ;
         if ( ! (0.0==this.AV26SdtItem.Margem) && ! (0.0==this.AV26SdtItem.Markup) )
         {
            this.addMessage("Não informe a margem para preço que utiliza markup");
            this.AV78TpErro = gx.num.trunc( 1 ,0) ;
            break;
         }
         if ( this.AV78TpErro == 0 )
         {
            if ( ( ( this.AV26SdtItem.ValorNovo != this.AV26SdtItem.ValorNovoAnterior ) || ( this.AV26SdtItem.Margem != this.AV26SdtItem.MargemAnterior ) ) && this.AV26SdtItem.TipoVinculado == "V" )
            {
               this.addMessage("Preço "+gx.text.trim( this.AV26SdtItem.DescId)+" é alterado pelo preço "+gx.text.trim( gx.num.str( this.AV26SdtItem.Vinculado, 2, 0))+"-"+this.AV26SdtItem.DescVinculado);
               this.AV78TpErro = gx.num.trunc( 1 ,0) ;
               break;
            }
         }
         this.AV144GXV9 = gx.num.trunc( this.AV144GXV9 + 1 ,0) ;
      }
   };
   this.s242_client=function()
   {
      this.AV56VlrBase =  0  ;
      this.AV143GXV8 = gx.num.trunc( 1 ,0) ;
      while ( this.AV143GXV8 <= this.AV25Sdt.length )
      {
         this.AV26SdtItem =  this.AV25Sdt[this.AV143GXV8 - 1]  ;
         if ( this.AV26SdtItem.Id == this.AV16PrecoVinculadoId )
         {
            this.AV56VlrBase =  this.AV26SdtItem.ValorNovo  ;
         }
         this.AV143GXV8 = gx.num.trunc( this.AV143GXV8 + 1 ,0) ;
      }
   };
   this.e11yb2_client=function()
   {
      this.executeServerEvent("'GRAVARPRECO'", false, null, false, false);
   };
   this.e12yb2_client=function()
   {
      this.executeServerEvent("'GRAVAPRECOMARGEM'", false, null, false, false);
   };
   this.e13yb2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14yb2_client=function()
   {
      this.executeServerEvent("'GRAVAMARGEM'", false, null, false, false);
   };
   this.e15yb2_client=function()
   {
      this.executeServerEvent("'RECALCULAR'", false, null, false, false);
   };
   this.e18yb2_client=function()
   {
      this.executeServerEvent("'DETALHARCALCULO'", true, arguments[0], false, false);
   };
   this.e20yb2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e21yb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,17,19,21,23,28,30,31,32,33,34,35,36,37,38,39,40,41,42,53,57,58,59,60,61,62,63];
   this.GXLastCtrlId =63;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hatualizaprecovenda",[],false,1,false,true,0,false,false,false,"CollSdtPrecoVenda.SdtPrecoVendaItem",0,"px","Novo registro",false,false,false,null,null,false,"AV25Sdt",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV10U",30,"CTLEMPRESA","Empresa Preço","","Empresa","char",0,"px",10,10,"left",null,[],"GXV10U","GXV10U",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10V",31,"CTLID","Preço","","Id","int",0,"px",2,2,"right",null,[],"GXV10V","GXV10V",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10W",32,"CTLDESCID","Preço","","DescId","svchar",0,"px",30,30,"left",null,[],"GXV10W","GXV10W",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV10X",33,"CTLVINCULADO","Preço","","Vinculado","int",0,"px",2,2,"right",null,[],"GXV10X","GXV10X",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10Y",34,"CTLDESCVINCULADO","Preço Vinculado","","DescVinculado","svchar",0,"px",30,30,"left",null,[],"GXV10Y","GXV10Y",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Valorprecovincualdo",35,"vVALORPRECOVINCUALDO","","","ValorPrecoVincualdo","decimal",0,"px",21,21,"right",null,[],"Valorprecovincualdo","ValorPrecoVincualdo",true,6,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV110",36,"CTLVALORANTIGO","Valor Antigo","","ValorAntigo","decimal",0,"px",21,21,"right",null,[],"GXV110","GXV110",true,6,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Margemcalculada",37,"vMARGEMCALCULADA","Margem Calculada","","MargemCalculada","decimal",0,"px",12,12,"right",null,[],"Margemcalculada","MargemCalculada",true,6,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV112",38,"CTLMARKUP","Markup","","Markup","decimal",0,"px",10,10,"right",null,[],"GXV112","GXV112",true,6,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV113",39,"CTLMARGEM","Margem","","Margem","decimal",0,"px",10,10,"right",null,[],"GXV113","GXV113",true,6,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV114",40,"CTLVALORNOVO","Novo Valor","","ValorNovo","decimal",100,"px",21,21,"right",null,[],"GXV114","GXV114",true,6,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpdet","vBMPDET",41,0,"px",17,"px","e18yb2_client","","","Image","GridColumnImage");
   this.setGrid(GridContainer);
   this.HDMASKMARGEMContainer = gx.uc.getNew(this, 54, 10, "HDMask", "HDMASKMARGEMContainer", "Hdmaskmargem");
   var HDMASKMARGEMContainer = this.HDMASKMARGEMContainer;
   HDMASKMARGEMContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKMARGEMContainer.setProp("Picture", "Picture", "", "str");
   HDMASKMARGEMContainer.setProp("Default", "Default", "", "str");
   HDMASKMARGEMContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKMARGEMContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKMARGEMContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKMARGEMContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKMARGEMContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKMARGEMContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKMARGEMContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKMARGEMContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKMARGEMContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKMARGEMContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKMARGEMContainer.setProp("Class", "Class", "", "char");
   HDMASKMARGEMContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKMARGEMContainer);
   this.HDMASKVALORNOVOContainer = gx.uc.getNew(this, 55, 10, "HDMask", "HDMASKVALORNOVOContainer", "Hdmaskvalornovo");
   var HDMASKVALORNOVOContainer = this.HDMASKVALORNOVOContainer;
   HDMASKVALORNOVOContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALORNOVOContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVALORNOVOContainer.setProp("Default", "Default", "", "str");
   HDMASKVALORNOVOContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALORNOVOContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVALORNOVOContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALORNOVOContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVALORNOVOContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALORNOVOContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVALORNOVOContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALORNOVOContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKVALORNOVOContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALORNOVOContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALORNOVOContainer.setProp("Class", "Class", "", "char");
   HDMASKVALORNOVOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALORNOVOContainer);
   this.HDMASKMARGEMLUCROContainer = gx.uc.getNew(this, 56, 10, "HDMask", "HDMASKMARGEMLUCROContainer", "Hdmaskmargemlucro");
   var HDMASKMARGEMLUCROContainer = this.HDMASKMARGEMLUCROContainer;
   HDMASKMARGEMLUCROContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKMARGEMLUCROContainer.setProp("Picture", "Picture", "", "str");
   HDMASKMARGEMLUCROContainer.setProp("Default", "Default", "", "str");
   HDMASKMARGEMLUCROContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKMARGEMLUCROContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKMARGEMLUCROContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKMARGEMLUCROContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKMARGEMLUCROContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKMARGEMLUCROContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKMARGEMLUCROContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKMARGEMLUCROContainer.setProp("ControlType", "Controltype", "Default", "str");
   HDMASKMARGEMLUCROContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKMARGEMLUCROContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKMARGEMLUCROContainer.setProp("Class", "Class", "", "char");
   HDMASKMARGEMLUCROContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKMARGEMLUCROContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK94", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV12ProdutoId",gxold:"OV12ProdutoId",gxvar:"AV12ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV12ProdutoId,0)},c2v:function(){gx.O.AV12ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TXTCUSTOMEDIO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRCUSTOMEDIO",gxz:"ZV88VlrCustoMedio",gxold:"OV88VlrCustoMedio",gxvar:"AV88VlrCustoMedio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88VlrCustoMedio=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV88VlrCustoMedio=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRCUSTOMEDIO",gx.O.AV88VlrCustoMedio,6,',')},c2v:function(){gx.O.AV88VlrCustoMedio=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRCUSTOMEDIO",'.',',')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK96", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV29ProdutoDescricaoResumida",gxold:"OV29ProdutoDescricaoResumida",gxvar:"AV29ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV29ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV29ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV29ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK97", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"decimal",len:16,dec:6,sign:false,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOMARGEMLUCRO",gxz:"ZV67ProdutoMargemLucro",gxold:"OV67ProdutoMargemLucro",gxvar:"AV67ProdutoMargemLucro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67ProdutoMargemLucro=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV67ProdutoMargemLucro=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOMARGEMLUCRO",gx.O.AV67ProdutoMargemLucro,6,',')},c2v:function(){gx.O.AV67ProdutoMargemLucro=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOMARGEMLUCRO",'.',',')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[30]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLEMPRESA",gxz:"ZV99GXV10U",gxold:"OV99GXV10U",gxvar:"GXV10U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10U=Value},v2z:function(Value){gx.O.ZV99GXV10U=Value},v2c:function(row){gx.fn.setGridControlValue("CTLEMPRESA",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10U,0)},c2v:function(){gx.O.GXV10U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLEMPRESA",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLID",gxz:"ZV100GXV10V",gxold:"OV100GXV10V",gxvar:"GXV10V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10V=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV100GXV10V=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLID",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10V,0)},c2v:function(){gx.O.GXV10V=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDESCID",gxz:"ZV101GXV10W",gxold:"OV101GXV10W",gxvar:"GXV10W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10W=Value},v2z:function(Value){gx.O.ZV101GXV10W=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDESCID",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10W,0)},c2v:function(){gx.O.GXV10W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDESCID",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVINCULADO",gxz:"ZV102GXV10X",gxold:"OV102GXV10X",gxvar:"GXV10X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10X=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV102GXV10X=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLVINCULADO",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10X,0)},c2v:function(){gx.O.GXV10X=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLVINCULADO",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDESCVINCULADO",gxz:"ZV103GXV10Y",gxold:"OV103GXV10Y",gxvar:"GXV10Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10Y=Value},v2z:function(Value){gx.O.ZV103GXV10Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDESCVINCULADO",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10Y,0)},c2v:function(){gx.O.GXV10Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDESCVINCULADO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALORPRECOVINCUALDO",gxz:"ZV87ValorPrecoVincualdo",gxold:"OV87ValorPrecoVincualdo",gxvar:"AV87ValorPrecoVincualdo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV87ValorPrecoVincualdo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV87ValorPrecoVincualdo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORPRECOVINCUALDO",row || gx.fn.currentGridRowImpl(29),gx.O.AV87ValorPrecoVincualdo,6,',')},c2v:function(){gx.O.AV87ValorPrecoVincualdo=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORPRECOVINCUALDO",row || gx.fn.currentGridRowImpl(29),'.',',')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORANTIGO",gxz:"ZV104GXV110",gxold:"OV104GXV110",gxvar:"GXV110",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV110=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV104GXV110=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORANTIGO",row || gx.fn.currentGridRowImpl(29),gx.O.GXV110,6,',')},c2v:function(){gx.O.GXV110=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORANTIGO",row || gx.fn.currentGridRowImpl(29),'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"decimal",len:12,dec:6,sign:true,pic:"ZZZZ9.999999",ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vMARGEMCALCULADA",gxz:"ZV86MargemCalculada",gxold:"OV86MargemCalculada",gxvar:"AV86MargemCalculada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV86MargemCalculada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV86MargemCalculada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vMARGEMCALCULADA",row || gx.fn.currentGridRowImpl(29),gx.O.AV86MargemCalculada,6,',')},c2v:function(){gx.O.AV86MargemCalculada=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vMARGEMCALCULADA",row || gx.fn.currentGridRowImpl(29),'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"decimal",len:10,dec:6,sign:false,pic:"ZZ9.999999",ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLMARKUP",gxz:"ZV105GXV112",gxold:"OV105GXV112",gxvar:"GXV112",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV112=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV105GXV112=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLMARKUP",row || gx.fn.currentGridRowImpl(29),gx.O.GXV112,6,',')},c2v:function(){gx.O.GXV112=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLMARKUP",row || gx.fn.currentGridRowImpl(29),'.',',')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"decimal",len:10,dec:6,sign:false,pic:"ZZ9.999999",ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLMARGEM",gxz:"ZV106GXV113",gxold:"OV106GXV113",gxvar:"GXV113",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV113=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV106GXV113=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLMARGEM",row || gx.fn.currentGridRowImpl(29),gx.O.GXV113,6,',')},c2v:function(){gx.O.GXV113=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLMARGEM",row || gx.fn.currentGridRowImpl(29),'.',',')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORNOVO",gxz:"ZV107GXV114",gxold:"OV107GXV114",gxvar:"GXV114",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV114=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV107GXV114=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORNOVO",row || gx.fn.currentGridRowImpl(29),gx.O.GXV114,6,',')},c2v:function(){gx.O.GXV114=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORNOVO",row || gx.fn.currentGridRowImpl(29),'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDET",gxz:"ZV79BmpDet",gxold:"OV79BmpDet",gxvar:"AV79BmpDet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV79BmpDet=Value},v2z:function(Value){gx.O.ZV79BmpDet=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDET",row || gx.fn.currentGridRowImpl(29),gx.O.AV79BmpDet,gx.O.AV116Bmpdet_GXI)},c2v:function(){gx.O.AV116Bmpdet_GXI=this.val_GXI();gx.O.AV79BmpDet=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDET",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDET_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV116Bmpdet_GXI',nac:gx.falseFn};
   GXValidFnc[42]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vERRO",gxz:"ZV41Erro",gxold:"OV41Erro",gxvar:"AV41Erro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41Erro=Value},v2z:function(Value){gx.O.ZV41Erro=Value},v2c:function(){gx.fn.setControlValue("vERRO",gx.O.AV41Erro,0)},c2v:function(){gx.O.AV41Erro=this.val()},val:function(){return gx.fn.getControlValue("vERRO")},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCOFINSSAIDA",gxz:"ZV73ProdutoCofinsSaida",gxold:"OV73ProdutoCofinsSaida",gxvar:"AV73ProdutoCofinsSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73ProdutoCofinsSaida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV73ProdutoCofinsSaida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOCOFINSSAIDA",gx.O.AV73ProdutoCofinsSaida,4,',')},c2v:function(){gx.O.AV73ProdutoCofinsSaida=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOCOFINSSAIDA",'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODIFERENCAICMS",gxz:"ZV75ProdutoDiferencaICMS",gxold:"OV75ProdutoDiferencaICMS",gxvar:"AV75ProdutoDiferencaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75ProdutoDiferencaICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV75ProdutoDiferencaICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTODIFERENCAICMS",gx.O.AV75ProdutoDiferencaICMS,2,',')},c2v:function(){gx.O.AV75ProdutoDiferencaICMS=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTODIFERENCAICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOICMSST",gxz:"ZV76ProdutoICMSST",gxold:"OV76ProdutoICMSST",gxvar:"AV76ProdutoICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76ProdutoICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV76ProdutoICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOICMSST",gx.O.AV76ProdutoICMSST,2,',')},c2v:function(){gx.O.AV76ProdutoICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOICMSST",'.',',')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIPIPCSAIDA",gxz:"ZV74ProdutoIPIPCSaida",gxold:"OV74ProdutoIPIPCSaida",gxvar:"AV74ProdutoIPIPCSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74ProdutoIPIPCSaida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV74ProdutoIPIPCSaida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOIPIPCSAIDA",gx.O.AV74ProdutoIPIPCSaida,2,',')},c2v:function(){gx.O.AV74ProdutoIPIPCSaida=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOIPIPCSAIDA",'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtomargemmarkupcodigo,isvalid:null,rgrid:[],fld:"vPRODUTOMARGEMMARKUPCODIGO",gxz:"ZV20ProdutoMargemMarkupCodigo",gxold:"OV20ProdutoMargemMarkupCodigo",gxvar:"AV20ProdutoMargemMarkupCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ProdutoMargemMarkupCodigo=Value},v2z:function(Value){gx.O.ZV20ProdutoMargemMarkupCodigo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOMARGEMMARKUPCODIGO",gx.O.AV20ProdutoMargemMarkupCodigo,0)},c2v:function(){gx.O.AV20ProdutoMargemMarkupCodigo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOMARGEMMARKUPCODIGO")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOPCALIQUOTA",gxz:"ZV77ProdutoPCAliquota",gxold:"OV77ProdutoPCAliquota",gxvar:"AV77ProdutoPCAliquota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77ProdutoPCAliquota=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV77ProdutoPCAliquota=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOPCALIQUOTA",gx.O.AV77ProdutoPCAliquota,2,',')},c2v:function(){gx.O.AV77ProdutoPCAliquota=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOPCALIQUOTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOPISSAIDA",gxz:"ZV72ProdutoPISSaida",gxold:"OV72ProdutoPISSaida",gxvar:"AV72ProdutoPISSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72ProdutoPISSaida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV72ProdutoPISSaida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOPISSAIDA",gx.O.AV72ProdutoPISSaida,4,',')},c2v:function(){gx.O.AV72ProdutoPISSaida=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOPISSAIDA",'.',',')},nac:gx.falseFn};
   this.AV12ProdutoId = 0 ;
   this.ZV12ProdutoId = 0 ;
   this.OV12ProdutoId = 0 ;
   this.AV88VlrCustoMedio = 0 ;
   this.ZV88VlrCustoMedio = 0 ;
   this.OV88VlrCustoMedio = 0 ;
   this.AV29ProdutoDescricaoResumida = "" ;
   this.ZV29ProdutoDescricaoResumida = "" ;
   this.OV29ProdutoDescricaoResumida = "" ;
   this.AV67ProdutoMargemLucro = 0 ;
   this.ZV67ProdutoMargemLucro = 0 ;
   this.OV67ProdutoMargemLucro = 0 ;
   this.ZV99GXV10U = "" ;
   this.OV99GXV10U = "" ;
   this.ZV100GXV10V = 0 ;
   this.OV100GXV10V = 0 ;
   this.ZV101GXV10W = "" ;
   this.OV101GXV10W = "" ;
   this.ZV102GXV10X = 0 ;
   this.OV102GXV10X = 0 ;
   this.ZV103GXV10Y = "" ;
   this.OV103GXV10Y = "" ;
   this.ZV87ValorPrecoVincualdo = 0 ;
   this.OV87ValorPrecoVincualdo = 0 ;
   this.ZV104GXV110 = 0 ;
   this.OV104GXV110 = 0 ;
   this.ZV86MargemCalculada = 0 ;
   this.OV86MargemCalculada = 0 ;
   this.ZV105GXV112 = 0 ;
   this.OV105GXV112 = 0 ;
   this.ZV106GXV113 = 0 ;
   this.OV106GXV113 = 0 ;
   this.ZV107GXV114 = 0 ;
   this.OV107GXV114 = 0 ;
   this.ZV79BmpDet = "" ;
   this.OV79BmpDet = "" ;
   this.AV41Erro = "" ;
   this.ZV41Erro = "" ;
   this.OV41Erro = "" ;
   this.AV73ProdutoCofinsSaida = 0 ;
   this.ZV73ProdutoCofinsSaida = 0 ;
   this.OV73ProdutoCofinsSaida = 0 ;
   this.AV75ProdutoDiferencaICMS = 0 ;
   this.ZV75ProdutoDiferencaICMS = 0 ;
   this.OV75ProdutoDiferencaICMS = 0 ;
   this.AV76ProdutoICMSST = 0 ;
   this.ZV76ProdutoICMSST = 0 ;
   this.OV76ProdutoICMSST = 0 ;
   this.AV74ProdutoIPIPCSaida = 0 ;
   this.ZV74ProdutoIPIPCSaida = 0 ;
   this.OV74ProdutoIPIPCSaida = 0 ;
   this.AV20ProdutoMargemMarkupCodigo = "" ;
   this.ZV20ProdutoMargemMarkupCodigo = "" ;
   this.OV20ProdutoMargemMarkupCodigo = "" ;
   this.AV77ProdutoPCAliquota = 0 ;
   this.ZV77ProdutoPCAliquota = 0 ;
   this.OV77ProdutoPCAliquota = 0 ;
   this.AV72ProdutoPISSaida = 0 ;
   this.ZV72ProdutoPISSaida = 0 ;
   this.OV72ProdutoPISSaida = 0 ;
   this.AV12ProdutoId = 0 ;
   this.AV88VlrCustoMedio = 0 ;
   this.AV29ProdutoDescricaoResumida = "" ;
   this.AV67ProdutoMargemLucro = 0 ;
   this.AV41Erro = "" ;
   this.AV73ProdutoCofinsSaida = 0 ;
   this.AV75ProdutoDiferencaICMS = 0 ;
   this.AV76ProdutoICMSST = 0 ;
   this.AV74ProdutoIPIPCSaida = 0 ;
   this.AV20ProdutoMargemMarkupCodigo = "" ;
   this.AV77ProdutoPCAliquota = 0 ;
   this.AV72ProdutoPISSaida = 0 ;
   this.AV11ProdutoEmpresaId = "" ;
   this.AV13PrecoEmpresaId = "" ;
   this.AV14PrecoId = 0 ;
   this.GXV10U = "" ;
   this.GXV10V = 0 ;
   this.GXV10W = "" ;
   this.GXV10X = 0 ;
   this.GXV10Y = "" ;
   this.AV87ValorPrecoVincualdo = 0 ;
   this.GXV110 = 0 ;
   this.AV86MargemCalculada = 0 ;
   this.GXV112 = 0 ;
   this.GXV113 = 0 ;
   this.GXV114 = 0 ;
   this.AV79BmpDet = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3804PrecoProdutoPrecoEmpId = "" ;
   this.A3805PrecoProdutoData = gx.date.nullDate() ;
   this.A3622PrecoProdutoPrecoId = 0 ;
   this.A3801PrecoProdutoValor = 0 ;
   this.A4463ParametroPrecoMargem = 0 ;
   this.A3704ParametroPrecoProdutoId = 0 ;
   this.A3703ParametroPrecoProdutoEmpId = "" ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A4343PrecoSnCalcularSistema = "" ;
   this.A722PrecoTipo = "" ;
   this.A736PrecoVinculadoId = 0 ;
   this.A738PrecoVinculadoEmpresaId = "" ;
   this.A737PrecoVinculadoDescricao = "" ;
   this.A4952PrecoVinculadoTipo = "" ;
   this.A711PrecoDescricao = "" ;
   this.A4342PrecoPCMargem = 0 ;
   this.A3199PrecoCasasDecimais = 0 ;
   this.A4346PrecoSnArredonda = "" ;
   this.A8405PrecoVendaPercIR = 0 ;
   this.A8393PrecoVendaSnCusOpe = "" ;
   this.A8403PrecoVendaPercCusOpe = 0 ;
   this.A8394PrecoVendaSnPerda = "" ;
   this.A8404PrecoVendaPercPerda = 0 ;
   this.A8395PrecoVendaSnMargemLucro = "" ;
   this.A8398PrecoVendaSnIR = "" ;
   this.A8396PrecoVendaSnPIS = "" ;
   this.A8397PrecoVendaSnCOFINS = "" ;
   this.A8402PrecoVendaSnIPI = "" ;
   this.A8399PrecoVendaSnICMS = "" ;
   this.A8400PrecoVendaSnICMSST = "" ;
   this.A8401PrecoVendaSnDifICMS = "" ;
   this.A6382ProdutoGrupoPrecoId = 0 ;
   this.A6381ProdutoGrupoPrecoEmpId = "" ;
   this.A2962ProdutoUsuarioAlt = "" ;
   this.A4317MargemMarkupCodigo = "" ;
   this.A4319MargemMarkupPercentual = 0 ;
   this.A4315MargemMarkupMetodo = "" ;
   this.A8392PrecoTipoCalculo = "" ;
   this.A9361ProdutoPrecoMedioEmpId = "" ;
   this.A9362ProdutoPrecoMedioId = 0 ;
   this.A9365PrecoMedioEmpId = "" ;
   this.A9366PrecoMedioId = 0 ;
   this.A9367PrecoProdutoMedioData = gx.date.nullDate() ;
   this.A9358PrecoProdutoMedioValor = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A8406ProdutoMargemLucro = 0 ;
   this.A3906ProdutoPISSaida = 0 ;
   this.A3910ProdutoCOFINSSaida = 0 ;
   this.A3903ProdutoIPIPCSaida = 0 ;
   this.A8409ProdutoDiferencaICMS = 0 ;
   this.A8408ProdutoICMSST = 0 ;
   this.A3849ProdutoPCAliquota = 0 ;
   this.A4356ProdutoMargemMarkupCodigo = "" ;
   this.AV5UsrCod = "" ;
   this.AV108Pgmname = "" ;
   this.AV109Pgmdesc = "" ;
   this.AV9MsgErro = "" ;
   this.AV38MsgErro1 = "" ;
   this.AV93SnMargemPreco = "" ;
   this.AV25Sdt = [ ] ;
   this.AV52VlrPrecoNovo = 0 ;
   this.AV59PrecoCasasDecimais = 0 ;
   this.AV60PrecoSnArredonda = "" ;
   this.AV26SdtItem = {} ;
   this.AV144GXV9 = 0 ;
   this.AV78TpErro = 0 ;
   this.AV16PrecoVinculadoId = 0 ;
   this.AV143GXV8 = 0 ;
   this.AV56VlrBase = 0 ;
   this.Events = {"e11yb2_client": ["'GRAVARPRECO'", true] ,"e12yb2_client": ["'GRAVAPRECOMARGEM'", true] ,"e13yb2_client": ["'FECHAR'", true] ,"e14yb2_client": ["'GRAVAMARGEM'", true] ,"e15yb2_client": ["'RECALCULAR'", true] ,"e18yb2_client": ["'DETALHARCALCULO'", true] ,"e20yb2_client": ["ENTER", true] ,"e21yb2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV79BmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'A3805PrecoProdutoData',fld:'PRECOPRODUTODATA'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV11ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV12ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'A3804PrecoProdutoPrecoEmpId',fld:'PRECOPRODUTOPRECOEMPID'},{av:'AV13PrecoEmpresaId',fld:'vPRECOEMPRESAID',hsh:true},{av:'A3622PrecoProdutoPrecoId',fld:'PRECOPRODUTOPRECOID'},{av:'AV25Sdt',fld:'vSDT',grid:29},{av:'A3801PrecoProdutoValor',fld:'PRECOPRODUTOVALOR'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV109Pgmdesc',fld:'vPGMDESC'},{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV38MsgErro1',fld:'vMSGERRO1'},{av:'AV41Erro',fld:'vERRO'},{av:'AV93SnMargemPreco',fld:'vSNMARGEMPRECO'}],[{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV109Pgmdesc',fld:'vPGMDESC'},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV38MsgErro1',fld:'vMSGERRO1'},{ctrl:'CTLMARGEM',prop:'Enabled'},{ctrl:'CTLVALORNOVO',prop:'Enabled'},{ctrl:'BTNMARGEM',prop:'Visible'},{ctrl:'BTNPRECO',prop:'Visible'},{av:'AV92ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV91FilialUnica',fld:'vFILIALUNICA'},{av:'gx.fn.getCtrlProperty("TXTCUSTOMEDIO","Visible")',ctrl:'TXTCUSTOMEDIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVLRCUSTOMEDIO","Visible")',ctrl:'vVLRCUSTOMEDIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK97","Visible")',ctrl:'TEXTBLOCK97',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPRODUTOMARGEMLUCRO","Visible")',ctrl:'vPRODUTOMARGEMLUCRO',prop:'Visible'}]];
   this.EvtParms["'GRAVARPRECO'"] = [[{av:'AV78TpErro',fld:'vTPERRO'},{av:'AV25Sdt',fld:'vSDT',grid:29},{av:'AV39sdtProduto',fld:'vSDTPRODUTO'},{av:'AV83ProdutoGrupoPrecoId',fld:'vPRODUTOGRUPOPRECOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV11ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV12ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'A2962ProdutoUsuarioAlt',fld:'PRODUTOUSUARIOALT'},{av:'A6381ProdutoGrupoPrecoEmpId',fld:'PRODUTOGRUPOPRECOEMPID'},{av:'A6382ProdutoGrupoPrecoId',fld:'PRODUTOGRUPOPRECOID'},{av:'A3805PrecoProdutoData',fld:'PRECOPRODUTODATA'},{av:'A3804PrecoProdutoPrecoEmpId',fld:'PRECOPRODUTOPRECOEMPID'},{av:'AV13PrecoEmpresaId',fld:'vPRECOEMPRESAID',hsh:true},{av:'A3622PrecoProdutoPrecoId',fld:'PRECOPRODUTOPRECOID'},{av:'A3801PrecoProdutoValor',fld:'PRECOPRODUTOVALOR'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A722PrecoTipo',fld:'PRECOTIPO'},{av:'AV93SnMargemPreco',fld:'vSNMARGEMPRECO'},{av:'AV67ProdutoMargemLucro',fld:'vPRODUTOMARGEMLUCRO'},{av:'A8405PrecoVendaPercIR',fld:'PRECOVENDAPERCIR'},{av:'A8393PrecoVendaSnCusOpe',fld:'PRECOVENDASNCUSOPE'},{av:'A8403PrecoVendaPercCusOpe',fld:'PRECOVENDAPERCCUSOPE'},{av:'A8394PrecoVendaSnPerda',fld:'PRECOVENDASNPERDA'},{av:'A8404PrecoVendaPercPerda',fld:'PRECOVENDAPERCPERDA'},{av:'A8395PrecoVendaSnMargemLucro',fld:'PRECOVENDASNMARGEMLUCRO'},{av:'A8398PrecoVendaSnIR',fld:'PRECOVENDASNIR'},{av:'A8396PrecoVendaSnPIS',fld:'PRECOVENDASNPIS'},{av:'AV72ProdutoPISSaida',fld:'vPRODUTOPISSAIDA'},{av:'A8397PrecoVendaSnCOFINS',fld:'PRECOVENDASNCOFINS'},{av:'AV73ProdutoCofinsSaida',fld:'vPRODUTOCOFINSSAIDA'},{av:'A8402PrecoVendaSnIPI',fld:'PRECOVENDASNIPI'},{av:'AV74ProdutoIPIPCSaida',fld:'vPRODUTOIPIPCSAIDA'},{av:'A8399PrecoVendaSnICMS',fld:'PRECOVENDASNICMS'},{av:'AV77ProdutoPCAliquota',fld:'vPRODUTOPCALIQUOTA'},{av:'A8400PrecoVendaSnICMSST',fld:'PRECOVENDASNICMSST'},{av:'AV76ProdutoICMSST',fld:'vPRODUTOICMSST'},{av:'A8401PrecoVendaSnDifICMS',fld:'PRECOVENDASNDIFICMS'},{av:'AV75ProdutoDiferencaICMS',fld:'vPRODUTODIFERENCAICMS'},{av:'A4346PrecoSnArredonda',fld:'PRECOSNARREDONDA'},{av:'A3199PrecoCasasDecimais',fld:'PRECOCASASDECIMAIS'},{av:'AV56VlrBase',fld:'vVLRBASE'},{av:'AV14PrecoId',fld:'vPRECOID',hsh:true},{av:'AV42SnOk',fld:'vSNOK'},{av:'A4317MargemMarkupCodigo',fld:'MARGEMMARKUPCODIGO'},{av:'AV20ProdutoMargemMarkupCodigo',fld:'vPRODUTOMARGEMMARKUPCODIGO'},{av:'A4319MargemMarkupPercentual',fld:'MARGEMMARKUPPERCENTUAL'},{av:'A4315MargemMarkupMetodo',fld:'MARGEMMARKUPMETODO'},{av:'A738PrecoVinculadoEmpresaId',fld:'PRECOVINCULADOEMPRESAID'},{av:'A736PrecoVinculadoId',fld:'PRECOVINCULADOID'},{av:'AV15PrecoPrincipal',fld:'vPRECOPRINCIPAL'},{av:'A4343PrecoSnCalcularSistema',fld:'PRECOSNCALCULARSISTEMA'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'A4342PrecoPCMargem',fld:'PRECOPCMARGEM'},{av:'AV52VlrPrecoNovo',fld:'vVLRPRECONOVO'},{av:'AV66SdtPrecoVinculado',fld:'vSDTPRECOVINCULADO'},{av:'AV64PrecoBaseId',fld:'vPRECOBASEID'},{av:'AV65PrecoBaseDesc',fld:'vPRECOBASEDESC'},{av:'AV71PrecoBaseTipo',fld:'vPRECOBASETIPO'},{av:'A737PrecoVinculadoDescricao',fld:'PRECOVINCULADODESCRICAO'},{av:'A4952PrecoVinculadoTipo',fld:'PRECOVINCULADOTIPO'},{av:'AV60PrecoSnArredonda',fld:'vPRECOSNARREDONDA'},{av:'AV59PrecoCasasDecimais',fld:'vPRECOCASASDECIMAIS'},{av:'AV16PrecoVinculadoId',fld:'vPRECOVINCULADOID'},{av:'A3703ParametroPrecoProdutoEmpId',fld:'PARAMETROPRECOPRODUTOEMPID'},{av:'A3704ParametroPrecoProdutoId',fld:'PARAMETROPRECOPRODUTOID'},{av:'A4463ParametroPrecoMargem',fld:'PARAMETROPRECOMARGEM'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV79BmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV109Pgmdesc',fld:'vPGMDESC'},{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV38MsgErro1',fld:'vMSGERRO1'},{av:'AV41Erro',fld:'vERRO'}],[{av:'AV37SnErro',fld:'vSNERRO'},{av:'AV130GXV5',fld:'vGXV5'},{av:'AV26SdtItem',fld:'vSDTITEM'},{av:'AV39sdtProduto',fld:'vSDTPRODUTO'},{av:'AV25Sdt',fld:'vSDT',grid:29},{av:'AV42SnOk',fld:'vSNOK'},{av:'AV78TpErro',fld:'vTPERRO'},{av:'AV144GXV9',fld:'vGXV9'},{av:'AV83ProdutoGrupoPrecoId',fld:'vPRODUTOGRUPOPRECOID'},{av:'AV82ProdutoGrupoPrecoEmpId',fld:'vPRODUTOGRUPOPRECOEMPID'},{av:'AV40sdtProdutoItem',fld:'vSDTPRODUTOITEM'},{av:'AV80x',fld:'vX'},{av:'AV56VlrBase',fld:'vVLRBASE'},{av:'AV67ProdutoMargemLucro',fld:'vPRODUTOMARGEMLUCRO'},{av:'AV52VlrPrecoNovo',fld:'vVLRPRECONOVO'},{av:'AV15PrecoPrincipal',fld:'vPRECOPRINCIPAL'},{av:'AV64PrecoBaseId',fld:'vPRECOBASEID'},{av:'AV65PrecoBaseDesc',fld:'vPRECOBASEDESC'},{av:'AV71PrecoBaseTipo',fld:'vPRECOBASETIPO'},{av:'AV50PercIR',fld:'vPERCIR'},{av:'AV51MargemTotal',fld:'vMARGEMTOTAL'},{av:'AV60PrecoSnArredonda',fld:'vPRECOSNARREDONDA'},{av:'AV59PrecoCasasDecimais',fld:'vPRECOCASASDECIMAIS'},{av:'AV16PrecoVinculadoId',fld:'vPRECOVINCULADOID'},{av:'AV46EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV27EntradaId',fld:'vENTRADAID'},{av:'AV45TxtAux',fld:'vTXTAUX'},{av:'AV44SdtCustos',fld:'vSDTCUSTOS'},{av:'AV134GXV7',fld:'vGXV7'},{av:'AV43SdtCustosItem',fld:'vSDTCUSTOSITEM'},{av:'AV129GXLvl521',fld:'vGXLVL521'},{av:'AV21MargemMarkupPercentual',fld:'vMARGEMMARKUPPERCENTUAL'},{av:'AV22MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV66SdtPrecoVinculado',fld:'vSDTPRECOVINCULADO'},{av:'AV63SdtPrecoVinculadoItem',fld:'vSDTPRECOVINCULADOITEM'},{av:'AV53VlrBasePadrao',fld:'vVLRBASEPADRAO'},{av:'AV57SdtPrecoAux',fld:'vSDTPRECOAUX'},{av:'AV146GXV11',fld:'vGXV11'},{av:'AV34PrecoViculadoDesc',fld:'vPRECOVICULADODESC'},{av:'AV68PrecoVinculadoTipo',fld:'vPRECOVINCULADOTIPO'},{av:'AV33PrecoPrincipalDesc',fld:'vPRECOPRINCIPALDESC'},{av:'AV70PrecoPrincipalTipo',fld:'vPRECOPRINCIPALTIPO'},{av:'AV55PcMargem',fld:'vPCMARGEM'},{av:'AV54VlrBaseNivel1',fld:'vVLRBASENIVEL1'},{av:'AV58SdtPrecoAuxItem',fld:'vSDTPRECOAUXITEM'},{av:'AV149GXV12',fld:'vGXV12'},{av:'AV143GXV8',fld:'vGXV8'},{av:'AV152GXV13',fld:'vGXV13'}]];
   this.EvtParms["'GRAVAPRECOMARGEM'"] = [[{av:'AV78TpErro',fld:'vTPERRO'},{av:'AV25Sdt',fld:'vSDT',grid:29},{av:'AV39sdtProduto',fld:'vSDTPRODUTO'},{av:'AV83ProdutoGrupoPrecoId',fld:'vPRODUTOGRUPOPRECOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV11ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV12ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'A2962ProdutoUsuarioAlt',fld:'PRODUTOUSUARIOALT'},{av:'A6381ProdutoGrupoPrecoEmpId',fld:'PRODUTOGRUPOPRECOEMPID'},{av:'A6382ProdutoGrupoPrecoId',fld:'PRODUTOGRUPOPRECOID'},{av:'A3805PrecoProdutoData',fld:'PRECOPRODUTODATA'},{av:'A3804PrecoProdutoPrecoEmpId',fld:'PRECOPRODUTOPRECOEMPID'},{av:'AV13PrecoEmpresaId',fld:'vPRECOEMPRESAID',hsh:true},{av:'A3622PrecoProdutoPrecoId',fld:'PRECOPRODUTOPRECOID'},{av:'A3801PrecoProdutoValor',fld:'PRECOPRODUTOVALOR'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A722PrecoTipo',fld:'PRECOTIPO'},{av:'AV93SnMargemPreco',fld:'vSNMARGEMPRECO'},{av:'AV67ProdutoMargemLucro',fld:'vPRODUTOMARGEMLUCRO'},{av:'A8405PrecoVendaPercIR',fld:'PRECOVENDAPERCIR'},{av:'A8393PrecoVendaSnCusOpe',fld:'PRECOVENDASNCUSOPE'},{av:'A8403PrecoVendaPercCusOpe',fld:'PRECOVENDAPERCCUSOPE'},{av:'A8394PrecoVendaSnPerda',fld:'PRECOVENDASNPERDA'},{av:'A8404PrecoVendaPercPerda',fld:'PRECOVENDAPERCPERDA'},{av:'A8395PrecoVendaSnMargemLucro',fld:'PRECOVENDASNMARGEMLUCRO'},{av:'A8398PrecoVendaSnIR',fld:'PRECOVENDASNIR'},{av:'A8396PrecoVendaSnPIS',fld:'PRECOVENDASNPIS'},{av:'AV72ProdutoPISSaida',fld:'vPRODUTOPISSAIDA'},{av:'A8397PrecoVendaSnCOFINS',fld:'PRECOVENDASNCOFINS'},{av:'AV73ProdutoCofinsSaida',fld:'vPRODUTOCOFINSSAIDA'},{av:'A8402PrecoVendaSnIPI',fld:'PRECOVENDASNIPI'},{av:'AV74ProdutoIPIPCSaida',fld:'vPRODUTOIPIPCSAIDA'},{av:'A8399PrecoVendaSnICMS',fld:'PRECOVENDASNICMS'},{av:'AV77ProdutoPCAliquota',fld:'vPRODUTOPCALIQUOTA'},{av:'A8400PrecoVendaSnICMSST',fld:'PRECOVENDASNICMSST'},{av:'AV76ProdutoICMSST',fld:'vPRODUTOICMSST'},{av:'A8401PrecoVendaSnDifICMS',fld:'PRECOVENDASNDIFICMS'},{av:'AV75ProdutoDiferencaICMS',fld:'vPRODUTODIFERENCAICMS'},{av:'A4346PrecoSnArredonda',fld:'PRECOSNARREDONDA'},{av:'A3199PrecoCasasDecimais',fld:'PRECOCASASDECIMAIS'},{av:'AV56VlrBase',fld:'vVLRBASE'},{av:'AV14PrecoId',fld:'vPRECOID',hsh:true},{av:'AV42SnOk',fld:'vSNOK'},{av:'A4317MargemMarkupCodigo',fld:'MARGEMMARKUPCODIGO'},{av:'AV20ProdutoMargemMarkupCodigo',fld:'vPRODUTOMARGEMMARKUPCODIGO'},{av:'A4319MargemMarkupPercentual',fld:'MARGEMMARKUPPERCENTUAL'},{av:'A4315MargemMarkupMetodo',fld:'MARGEMMARKUPMETODO'},{av:'A738PrecoVinculadoEmpresaId',fld:'PRECOVINCULADOEMPRESAID'},{av:'A736PrecoVinculadoId',fld:'PRECOVINCULADOID'},{av:'AV15PrecoPrincipal',fld:'vPRECOPRINCIPAL'},{av:'A4343PrecoSnCalcularSistema',fld:'PRECOSNCALCULARSISTEMA'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'A4342PrecoPCMargem',fld:'PRECOPCMARGEM'},{av:'AV52VlrPrecoNovo',fld:'vVLRPRECONOVO'},{av:'AV66SdtPrecoVinculado',fld:'vSDTPRECOVINCULADO'},{av:'AV64PrecoBaseId',fld:'vPRECOBASEID'},{av:'AV65PrecoBaseDesc',fld:'vPRECOBASEDESC'},{av:'AV71PrecoBaseTipo',fld:'vPRECOBASETIPO'},{av:'A737PrecoVinculadoDescricao',fld:'PRECOVINCULADODESCRICAO'},{av:'A4952PrecoVinculadoTipo',fld:'PRECOVINCULADOTIPO'},{av:'AV60PrecoSnArredonda',fld:'vPRECOSNARREDONDA'},{av:'AV59PrecoCasasDecimais',fld:'vPRECOCASASDECIMAIS'},{av:'AV16PrecoVinculadoId',fld:'vPRECOVINCULADOID'},{av:'A3703ParametroPrecoProdutoEmpId',fld:'PARAMETROPRECOPRODUTOEMPID'},{av:'A3704ParametroPrecoProdutoId',fld:'PARAMETROPRECOPRODUTOID'},{av:'A4463ParametroPrecoMargem',fld:'PARAMETROPRECOMARGEM'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV79BmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV109Pgmdesc',fld:'vPGMDESC'},{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV38MsgErro1',fld:'vMSGERRO1'},{av:'AV41Erro',fld:'vERRO'}],[{av:'AV37SnErro',fld:'vSNERRO'},{av:'AV131GXV6',fld:'vGXV6'},{av:'AV26SdtItem',fld:'vSDTITEM'},{av:'AV39sdtProduto',fld:'vSDTPRODUTO'},{av:'AV25Sdt',fld:'vSDT',grid:29},{av:'AV42SnOk',fld:'vSNOK'},{av:'AV78TpErro',fld:'vTPERRO'},{av:'AV144GXV9',fld:'vGXV9'},{av:'AV83ProdutoGrupoPrecoId',fld:'vPRODUTOGRUPOPRECOID'},{av:'AV82ProdutoGrupoPrecoEmpId',fld:'vPRODUTOGRUPOPRECOEMPID'},{av:'AV40sdtProdutoItem',fld:'vSDTPRODUTOITEM'},{av:'AV80x',fld:'vX'},{av:'AV56VlrBase',fld:'vVLRBASE'},{av:'AV67ProdutoMargemLucro',fld:'vPRODUTOMARGEMLUCRO'},{av:'AV52VlrPrecoNovo',fld:'vVLRPRECONOVO'},{av:'AV15PrecoPrincipal',fld:'vPRECOPRINCIPAL'},{av:'AV64PrecoBaseId',fld:'vPRECOBASEID'},{av:'AV65PrecoBaseDesc',fld:'vPRECOBASEDESC'},{av:'AV71PrecoBaseTipo',fld:'vPRECOBASETIPO'},{av:'AV50PercIR',fld:'vPERCIR'},{av:'AV51MargemTotal',fld:'vMARGEMTOTAL'},{av:'AV60PrecoSnArredonda',fld:'vPRECOSNARREDONDA'},{av:'AV59PrecoCasasDecimais',fld:'vPRECOCASASDECIMAIS'},{av:'AV16PrecoVinculadoId',fld:'vPRECOVINCULADOID'},{av:'AV46EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV27EntradaId',fld:'vENTRADAID'},{av:'AV45TxtAux',fld:'vTXTAUX'},{av:'AV44SdtCustos',fld:'vSDTCUSTOS'},{av:'AV134GXV7',fld:'vGXV7'},{av:'AV43SdtCustosItem',fld:'vSDTCUSTOSITEM'},{av:'AV129GXLvl521',fld:'vGXLVL521'},{av:'AV21MargemMarkupPercentual',fld:'vMARGEMMARKUPPERCENTUAL'},{av:'AV22MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV66SdtPrecoVinculado',fld:'vSDTPRECOVINCULADO'},{av:'AV63SdtPrecoVinculadoItem',fld:'vSDTPRECOVINCULADOITEM'},{av:'AV53VlrBasePadrao',fld:'vVLRBASEPADRAO'},{av:'AV57SdtPrecoAux',fld:'vSDTPRECOAUX'},{av:'AV146GXV11',fld:'vGXV11'},{av:'AV34PrecoViculadoDesc',fld:'vPRECOVICULADODESC'},{av:'AV68PrecoVinculadoTipo',fld:'vPRECOVINCULADOTIPO'},{av:'AV33PrecoPrincipalDesc',fld:'vPRECOPRINCIPALDESC'},{av:'AV70PrecoPrincipalTipo',fld:'vPRECOPRINCIPALTIPO'},{av:'AV55PcMargem',fld:'vPCMARGEM'},{av:'AV54VlrBaseNivel1',fld:'vVLRBASENIVEL1'},{av:'AV58SdtPrecoAuxItem',fld:'vSDTPRECOAUXITEM'},{av:'AV149GXV12',fld:'vGXV12'},{av:'AV143GXV8',fld:'vGXV8'},{av:'AV152GXV13',fld:'vGXV13'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42SnOk',fld:'vSNOK'}],[{av:'AV42SnOk',fld:'vSNOK'}]];
   this.EvtParms["'GRAVAMARGEM'"] = [[{av:'AV78TpErro',fld:'vTPERRO'},{av:'AV25Sdt',fld:'vSDT',grid:29},{av:'AV39sdtProduto',fld:'vSDTPRODUTO'},{av:'AV83ProdutoGrupoPrecoId',fld:'vPRODUTOGRUPOPRECOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV11ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV12ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'A2962ProdutoUsuarioAlt',fld:'PRODUTOUSUARIOALT'},{av:'A6381ProdutoGrupoPrecoEmpId',fld:'PRODUTOGRUPOPRECOEMPID'},{av:'A6382ProdutoGrupoPrecoId',fld:'PRODUTOGRUPOPRECOID'},{av:'A3805PrecoProdutoData',fld:'PRECOPRODUTODATA'},{av:'A3804PrecoProdutoPrecoEmpId',fld:'PRECOPRODUTOPRECOEMPID'},{av:'AV13PrecoEmpresaId',fld:'vPRECOEMPRESAID',hsh:true},{av:'A3622PrecoProdutoPrecoId',fld:'PRECOPRODUTOPRECOID'},{av:'A3801PrecoProdutoValor',fld:'PRECOPRODUTOVALOR'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A722PrecoTipo',fld:'PRECOTIPO'},{av:'AV93SnMargemPreco',fld:'vSNMARGEMPRECO'},{av:'AV67ProdutoMargemLucro',fld:'vPRODUTOMARGEMLUCRO'},{av:'A8405PrecoVendaPercIR',fld:'PRECOVENDAPERCIR'},{av:'A8393PrecoVendaSnCusOpe',fld:'PRECOVENDASNCUSOPE'},{av:'A8403PrecoVendaPercCusOpe',fld:'PRECOVENDAPERCCUSOPE'},{av:'A8394PrecoVendaSnPerda',fld:'PRECOVENDASNPERDA'},{av:'A8404PrecoVendaPercPerda',fld:'PRECOVENDAPERCPERDA'},{av:'A8395PrecoVendaSnMargemLucro',fld:'PRECOVENDASNMARGEMLUCRO'},{av:'A8398PrecoVendaSnIR',fld:'PRECOVENDASNIR'},{av:'A8396PrecoVendaSnPIS',fld:'PRECOVENDASNPIS'},{av:'AV72ProdutoPISSaida',fld:'vPRODUTOPISSAIDA'},{av:'A8397PrecoVendaSnCOFINS',fld:'PRECOVENDASNCOFINS'},{av:'AV73ProdutoCofinsSaida',fld:'vPRODUTOCOFINSSAIDA'},{av:'A8402PrecoVendaSnIPI',fld:'PRECOVENDASNIPI'},{av:'AV74ProdutoIPIPCSaida',fld:'vPRODUTOIPIPCSAIDA'},{av:'A8399PrecoVendaSnICMS',fld:'PRECOVENDASNICMS'},{av:'AV77ProdutoPCAliquota',fld:'vPRODUTOPCALIQUOTA'},{av:'A8400PrecoVendaSnICMSST',fld:'PRECOVENDASNICMSST'},{av:'AV76ProdutoICMSST',fld:'vPRODUTOICMSST'},{av:'A8401PrecoVendaSnDifICMS',fld:'PRECOVENDASNDIFICMS'},{av:'AV75ProdutoDiferencaICMS',fld:'vPRODUTODIFERENCAICMS'},{av:'A4346PrecoSnArredonda',fld:'PRECOSNARREDONDA'},{av:'A3199PrecoCasasDecimais',fld:'PRECOCASASDECIMAIS'},{av:'AV56VlrBase',fld:'vVLRBASE'},{av:'AV14PrecoId',fld:'vPRECOID',hsh:true},{av:'AV42SnOk',fld:'vSNOK'},{av:'A4317MargemMarkupCodigo',fld:'MARGEMMARKUPCODIGO'},{av:'AV20ProdutoMargemMarkupCodigo',fld:'vPRODUTOMARGEMMARKUPCODIGO'},{av:'A4319MargemMarkupPercentual',fld:'MARGEMMARKUPPERCENTUAL'},{av:'A4315MargemMarkupMetodo',fld:'MARGEMMARKUPMETODO'},{av:'A738PrecoVinculadoEmpresaId',fld:'PRECOVINCULADOEMPRESAID'},{av:'A736PrecoVinculadoId',fld:'PRECOVINCULADOID'},{av:'AV15PrecoPrincipal',fld:'vPRECOPRINCIPAL'},{av:'A4343PrecoSnCalcularSistema',fld:'PRECOSNCALCULARSISTEMA'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'A4342PrecoPCMargem',fld:'PRECOPCMARGEM'},{av:'AV52VlrPrecoNovo',fld:'vVLRPRECONOVO'},{av:'AV66SdtPrecoVinculado',fld:'vSDTPRECOVINCULADO'},{av:'AV64PrecoBaseId',fld:'vPRECOBASEID'},{av:'AV65PrecoBaseDesc',fld:'vPRECOBASEDESC'},{av:'AV71PrecoBaseTipo',fld:'vPRECOBASETIPO'},{av:'A737PrecoVinculadoDescricao',fld:'PRECOVINCULADODESCRICAO'},{av:'A4952PrecoVinculadoTipo',fld:'PRECOVINCULADOTIPO'},{av:'AV60PrecoSnArredonda',fld:'vPRECOSNARREDONDA'},{av:'AV59PrecoCasasDecimais',fld:'vPRECOCASASDECIMAIS'},{av:'AV16PrecoVinculadoId',fld:'vPRECOVINCULADOID'},{av:'A3703ParametroPrecoProdutoEmpId',fld:'PARAMETROPRECOPRODUTOEMPID'},{av:'A3704ParametroPrecoProdutoId',fld:'PARAMETROPRECOPRODUTOID'},{av:'A4463ParametroPrecoMargem',fld:'PARAMETROPRECOMARGEM'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV79BmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV109Pgmdesc',fld:'vPGMDESC'},{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV38MsgErro1',fld:'vMSGERRO1'},{av:'AV41Erro',fld:'vERRO'}],[{av:'AV37SnErro',fld:'vSNERRO'},{av:'AV145GXV10',fld:'vGXV10'},{av:'AV26SdtItem',fld:'vSDTITEM'},{av:'AV39sdtProduto',fld:'vSDTPRODUTO'},{av:'AV25Sdt',fld:'vSDT',grid:29},{av:'AV42SnOk',fld:'vSNOK'},{av:'AV78TpErro',fld:'vTPERRO'},{av:'AV144GXV9',fld:'vGXV9'},{av:'AV83ProdutoGrupoPrecoId',fld:'vPRODUTOGRUPOPRECOID'},{av:'AV82ProdutoGrupoPrecoEmpId',fld:'vPRODUTOGRUPOPRECOEMPID'},{av:'AV40sdtProdutoItem',fld:'vSDTPRODUTOITEM'},{av:'AV80x',fld:'vX'},{av:'AV56VlrBase',fld:'vVLRBASE'},{av:'AV67ProdutoMargemLucro',fld:'vPRODUTOMARGEMLUCRO'},{av:'AV52VlrPrecoNovo',fld:'vVLRPRECONOVO'},{av:'AV15PrecoPrincipal',fld:'vPRECOPRINCIPAL'},{av:'AV64PrecoBaseId',fld:'vPRECOBASEID'},{av:'AV65PrecoBaseDesc',fld:'vPRECOBASEDESC'},{av:'AV71PrecoBaseTipo',fld:'vPRECOBASETIPO'},{av:'AV50PercIR',fld:'vPERCIR'},{av:'AV51MargemTotal',fld:'vMARGEMTOTAL'},{av:'AV60PrecoSnArredonda',fld:'vPRECOSNARREDONDA'},{av:'AV59PrecoCasasDecimais',fld:'vPRECOCASASDECIMAIS'},{av:'AV16PrecoVinculadoId',fld:'vPRECOVINCULADOID'},{av:'AV46EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV27EntradaId',fld:'vENTRADAID'},{av:'AV45TxtAux',fld:'vTXTAUX'},{av:'AV44SdtCustos',fld:'vSDTCUSTOS'},{av:'AV134GXV7',fld:'vGXV7'},{av:'AV43SdtCustosItem',fld:'vSDTCUSTOSITEM'},{av:'AV129GXLvl521',fld:'vGXLVL521'},{av:'AV21MargemMarkupPercentual',fld:'vMARGEMMARKUPPERCENTUAL'},{av:'AV22MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV66SdtPrecoVinculado',fld:'vSDTPRECOVINCULADO'},{av:'AV63SdtPrecoVinculadoItem',fld:'vSDTPRECOVINCULADOITEM'},{av:'AV53VlrBasePadrao',fld:'vVLRBASEPADRAO'},{av:'AV57SdtPrecoAux',fld:'vSDTPRECOAUX'},{av:'AV146GXV11',fld:'vGXV11'},{av:'AV34PrecoViculadoDesc',fld:'vPRECOVICULADODESC'},{av:'AV68PrecoVinculadoTipo',fld:'vPRECOVINCULADOTIPO'},{av:'AV33PrecoPrincipalDesc',fld:'vPRECOPRINCIPALDESC'},{av:'AV70PrecoPrincipalTipo',fld:'vPRECOPRINCIPALTIPO'},{av:'AV55PcMargem',fld:'vPCMARGEM'},{av:'AV54VlrBaseNivel1',fld:'vVLRBASENIVEL1'},{av:'AV58SdtPrecoAuxItem',fld:'vSDTPRECOAUXITEM'},{av:'AV149GXV12',fld:'vGXV12'},{av:'AV143GXV8',fld:'vGXV8'},{av:'AV152GXV13',fld:'vGXV13'}]];
   this.EvtParms["'RECALCULAR'"] = [[{av:'AV78TpErro',fld:'vTPERRO'},{av:'AV25Sdt',fld:'vSDT',grid:29},{av:'A3805PrecoProdutoData',fld:'PRECOPRODUTODATA'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV11ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV12ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'A3804PrecoProdutoPrecoEmpId',fld:'PRECOPRODUTOPRECOEMPID'},{av:'AV13PrecoEmpresaId',fld:'vPRECOEMPRESAID',hsh:true},{av:'A3622PrecoProdutoPrecoId',fld:'PRECOPRODUTOPRECOID'},{av:'A3801PrecoProdutoValor',fld:'PRECOPRODUTOVALOR'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A722PrecoTipo',fld:'PRECOTIPO'},{av:'AV93SnMargemPreco',fld:'vSNMARGEMPRECO'},{av:'AV67ProdutoMargemLucro',fld:'vPRODUTOMARGEMLUCRO'},{av:'A8405PrecoVendaPercIR',fld:'PRECOVENDAPERCIR'},{av:'A8393PrecoVendaSnCusOpe',fld:'PRECOVENDASNCUSOPE'},{av:'A8403PrecoVendaPercCusOpe',fld:'PRECOVENDAPERCCUSOPE'},{av:'A8394PrecoVendaSnPerda',fld:'PRECOVENDASNPERDA'},{av:'A8404PrecoVendaPercPerda',fld:'PRECOVENDAPERCPERDA'},{av:'A8395PrecoVendaSnMargemLucro',fld:'PRECOVENDASNMARGEMLUCRO'},{av:'A8398PrecoVendaSnIR',fld:'PRECOVENDASNIR'},{av:'A8396PrecoVendaSnPIS',fld:'PRECOVENDASNPIS'},{av:'AV72ProdutoPISSaida',fld:'vPRODUTOPISSAIDA'},{av:'A8397PrecoVendaSnCOFINS',fld:'PRECOVENDASNCOFINS'},{av:'AV73ProdutoCofinsSaida',fld:'vPRODUTOCOFINSSAIDA'},{av:'A8402PrecoVendaSnIPI',fld:'PRECOVENDASNIPI'},{av:'AV74ProdutoIPIPCSaida',fld:'vPRODUTOIPIPCSAIDA'},{av:'A8399PrecoVendaSnICMS',fld:'PRECOVENDASNICMS'},{av:'AV77ProdutoPCAliquota',fld:'vPRODUTOPCALIQUOTA'},{av:'A8400PrecoVendaSnICMSST',fld:'PRECOVENDASNICMSST'},{av:'AV76ProdutoICMSST',fld:'vPRODUTOICMSST'},{av:'A8401PrecoVendaSnDifICMS',fld:'PRECOVENDASNDIFICMS'},{av:'AV75ProdutoDiferencaICMS',fld:'vPRODUTODIFERENCAICMS'},{av:'A4346PrecoSnArredonda',fld:'PRECOSNARREDONDA'},{av:'A3199PrecoCasasDecimais',fld:'PRECOCASASDECIMAIS'},{av:'AV56VlrBase',fld:'vVLRBASE'},{av:'A4317MargemMarkupCodigo',fld:'MARGEMMARKUPCODIGO'},{av:'AV20ProdutoMargemMarkupCodigo',fld:'vPRODUTOMARGEMMARKUPCODIGO'},{av:'A4319MargemMarkupPercentual',fld:'MARGEMMARKUPPERCENTUAL'},{av:'A4315MargemMarkupMetodo',fld:'MARGEMMARKUPMETODO'},{av:'A738PrecoVinculadoEmpresaId',fld:'PRECOVINCULADOEMPRESAID'},{av:'A736PrecoVinculadoId',fld:'PRECOVINCULADOID'},{av:'AV15PrecoPrincipal',fld:'vPRECOPRINCIPAL'},{av:'A4343PrecoSnCalcularSistema',fld:'PRECOSNCALCULARSISTEMA'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'A4342PrecoPCMargem',fld:'PRECOPCMARGEM'},{av:'AV52VlrPrecoNovo',fld:'vVLRPRECONOVO'},{av:'AV66SdtPrecoVinculado',fld:'vSDTPRECOVINCULADO'},{av:'AV64PrecoBaseId',fld:'vPRECOBASEID'},{av:'AV65PrecoBaseDesc',fld:'vPRECOBASEDESC'},{av:'AV71PrecoBaseTipo',fld:'vPRECOBASETIPO'},{av:'A737PrecoVinculadoDescricao',fld:'PRECOVINCULADODESCRICAO'},{av:'A4952PrecoVinculadoTipo',fld:'PRECOVINCULADOTIPO'},{av:'AV60PrecoSnArredonda',fld:'vPRECOSNARREDONDA'},{av:'AV59PrecoCasasDecimais',fld:'vPRECOCASASDECIMAIS'},{av:'AV16PrecoVinculadoId',fld:'vPRECOVINCULADOID'},{av:'A3703ParametroPrecoProdutoEmpId',fld:'PARAMETROPRECOPRODUTOEMPID'},{av:'A3704ParametroPrecoProdutoId',fld:'PARAMETROPRECOPRODUTOID'},{av:'A4463ParametroPrecoMargem',fld:'PARAMETROPRECOMARGEM'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV79BmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV109Pgmdesc',fld:'vPGMDESC'},{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV38MsgErro1',fld:'vMSGERRO1'},{av:'AV41Erro',fld:'vERRO'}],[{av:'AV78TpErro',fld:'vTPERRO'},{av:'AV144GXV9',fld:'vGXV9'},{av:'AV26SdtItem',fld:'vSDTITEM'},{av:'AV80x',fld:'vX'},{av:'AV56VlrBase',fld:'vVLRBASE'},{av:'AV25Sdt',fld:'vSDT',grid:29},{av:'AV67ProdutoMargemLucro',fld:'vPRODUTOMARGEMLUCRO'},{av:'AV52VlrPrecoNovo',fld:'vVLRPRECONOVO'},{av:'AV15PrecoPrincipal',fld:'vPRECOPRINCIPAL'},{av:'AV64PrecoBaseId',fld:'vPRECOBASEID'},{av:'AV65PrecoBaseDesc',fld:'vPRECOBASEDESC'},{av:'AV71PrecoBaseTipo',fld:'vPRECOBASETIPO'},{av:'AV50PercIR',fld:'vPERCIR'},{av:'AV51MargemTotal',fld:'vMARGEMTOTAL'},{av:'AV60PrecoSnArredonda',fld:'vPRECOSNARREDONDA'},{av:'AV59PrecoCasasDecimais',fld:'vPRECOCASASDECIMAIS'},{av:'AV16PrecoVinculadoId',fld:'vPRECOVINCULADOID'},{av:'AV129GXLvl521',fld:'vGXLVL521'},{av:'AV21MargemMarkupPercentual',fld:'vMARGEMMARKUPPERCENTUAL'},{av:'AV22MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV66SdtPrecoVinculado',fld:'vSDTPRECOVINCULADO'},{av:'AV63SdtPrecoVinculadoItem',fld:'vSDTPRECOVINCULADOITEM'},{av:'AV53VlrBasePadrao',fld:'vVLRBASEPADRAO'},{av:'AV57SdtPrecoAux',fld:'vSDTPRECOAUX'},{av:'AV146GXV11',fld:'vGXV11'},{av:'AV34PrecoViculadoDesc',fld:'vPRECOVICULADODESC'},{av:'AV68PrecoVinculadoTipo',fld:'vPRECOVINCULADOTIPO'},{av:'AV33PrecoPrincipalDesc',fld:'vPRECOPRINCIPALDESC'},{av:'AV70PrecoPrincipalTipo',fld:'vPRECOPRINCIPALTIPO'},{av:'AV55PcMargem',fld:'vPCMARGEM'},{av:'AV54VlrBaseNivel1',fld:'vVLRBASENIVEL1'},{av:'AV58SdtPrecoAuxItem',fld:'vSDTPRECOAUXITEM'},{av:'AV149GXV12',fld:'vGXV12'},{av:'AV143GXV8',fld:'vGXV8'},{av:'AV152GXV13',fld:'vGXV13'}]];
   this.EvtParms["'DETALHARCALCULO'"] = [[{av:'AV11ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'AV12ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV29ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV25Sdt',fld:'vSDT',grid:29},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV79BmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV109Pgmdesc',fld:'vPGMDESC'},{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV38MsgErro1',fld:'vMSGERRO1'},{av:'AV41Erro',fld:'vERRO'},{av:'AV93SnMargemPreco',fld:'vSNMARGEMPRECO'},{av:'A3805PrecoProdutoData',fld:'PRECOPRODUTODATA'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3804PrecoProdutoPrecoEmpId',fld:'PRECOPRODUTOPRECOEMPID'},{av:'AV13PrecoEmpresaId',fld:'vPRECOEMPRESAID',hsh:true},{av:'A3622PrecoProdutoPrecoId',fld:'PRECOPRODUTOPRECOID'},{av:'A3801PrecoProdutoValor',fld:'PRECOPRODUTOVALOR'}],[{av:'AV25Sdt',fld:'vSDT',grid:29},{av:'AV29ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV12ProdutoId',fld:'vPRODUTOID',hsh:true}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3805PrecoProdutoData',fld:'PRECOPRODUTODATA'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV11ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV12ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'A3804PrecoProdutoPrecoEmpId',fld:'PRECOPRODUTOPRECOEMPID'},{av:'AV13PrecoEmpresaId',fld:'vPRECOEMPRESAID',hsh:true},{av:'A3622PrecoProdutoPrecoId',fld:'PRECOPRODUTOPRECOID'},{av:'AV25Sdt',fld:'vSDT',grid:29},{av:'A3801PrecoProdutoValor',fld:'PRECOPRODUTOVALOR'}],[{av:'AV87ValorPrecoVincualdo',fld:'vVALORPRECOVINCUALDO'},{av:'AV86MargemCalculada',fld:'vMARGEMCALCULADA'}]];
   this.setVCMap("A3805PrecoProdutoData", "PRECOPRODUTODATA", 0, "date");
   this.setVCMap("AV5UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV108Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV109Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV9MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV38MsgErro1", "vMSGERRO1", 0, "svchar");
   this.setVCMap("AV93SnMargemPreco", "vSNMARGEMPRECO", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV11ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("A3804PrecoProdutoPrecoEmpId", "PRECOPRODUTOPRECOEMPID", 0, "char");
   this.setVCMap("AV13PrecoEmpresaId", "vPRECOEMPRESAID", 0, "char");
   this.setVCMap("A3622PrecoProdutoPrecoId", "PRECOPRODUTOPRECOID", 0, "int");
   this.setVCMap("AV25Sdt", "vSDT", 0, "CollSdtPrecoVenda.SdtPrecoVendaItem");
   this.setVCMap("A3801PrecoProdutoValor", "PRECOPRODUTOVALOR", 0, "decimal");
   this.setVCMap("AV14PrecoId", "vPRECOID", 0, "int");
   this.setVCMap("AV5UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV108Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV109Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV9MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV38MsgErro1", "vMSGERRO1", 0, "svchar");
   this.setVCMap("AV93SnMargemPreco", "vSNMARGEMPRECO", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV11ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("A3804PrecoProdutoPrecoEmpId", "PRECOPRODUTOPRECOEMPID", 0, "char");
   this.setVCMap("AV13PrecoEmpresaId", "vPRECOEMPRESAID", 0, "char");
   this.setVCMap("A3622PrecoProdutoPrecoId", "PRECOPRODUTOPRECOID", 0, "int");
   this.setVCMap("AV25Sdt", "vSDT", 0, "CollSdtPrecoVenda.SdtPrecoVendaItem");
   this.setVCMap("A3801PrecoProdutoValor", "PRECOPRODUTOVALOR", 0, "decimal");
   GridContainer.addRefreshingVar({rfrVar:"AV79BmpDet", rfrProp:"Value", gxAttId:"Bmpdet"});
   GridContainer.addRefreshingVar({rfrVar:"AV79BmpDet", rfrProp:"Tooltiptext", gxAttId:"Bmpdet"});
   GridContainer.addRefreshingVar({rfrVar:"AV5UsrCod"});
   GridContainer.addRefreshingVar({rfrVar:"AV108Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV109Pgmdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV9MsgErro"});
   GridContainer.addRefreshingVar({rfrVar:"AV38MsgErro1"});
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar({rfrVar:"AV93SnMargemPreco"});
   GridContainer.addRefreshingVar({rfrVar:"A3805PrecoProdutoData"});
   GridContainer.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV11ProdutoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar({rfrVar:"A3804PrecoProdutoPrecoEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"AV13PrecoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A3622PrecoProdutoPrecoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV25Sdt"});
   GridContainer.addRefreshingVar({rfrVar:"A3801PrecoProdutoValor"});
   this.addGridBCProperty("Sdt", ["Empresa"], this.GXValidFnc[30], "AV25Sdt");
   this.addGridBCProperty("Sdt", ["Id"], this.GXValidFnc[31], "AV25Sdt");
   this.addGridBCProperty("Sdt", ["DescId"], this.GXValidFnc[32], "AV25Sdt");
   this.addGridBCProperty("Sdt", ["Vinculado"], this.GXValidFnc[33], "AV25Sdt");
   this.addGridBCProperty("Sdt", ["DescVinculado"], this.GXValidFnc[34], "AV25Sdt");
   this.addGridBCProperty("Sdt", ["ValorAntigo"], this.GXValidFnc[36], "AV25Sdt");
   this.addGridBCProperty("Sdt", ["Markup"], this.GXValidFnc[38], "AV25Sdt");
   this.addGridBCProperty("Sdt", ["Margem"], this.GXValidFnc[39], "AV25Sdt");
   this.addGridBCProperty("Sdt", ["ValorNovo"], this.GXValidFnc[40], "AV25Sdt");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizaprecovenda());
