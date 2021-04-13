/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:18.17
*/
gx.evt.autoSkip = false;
gx.define('hbalanceteverificacao', false, function () {
   this.ServerClass =  "hbalanceteverificacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV99SnExcluirLinha=gx.fn.getControlValue("vSNEXCLUIRLINHA") ;
      this.AV93SdtSelecaoCContabil=gx.fn.getControlValue("vSDTSELECAOCCONTABIL") ;
      this.A82EmpresaPaginacaoEmpresaId=gx.fn.getControlValue("EMPRESAPAGINACAOEMPRESAID") ;
      this.AV59EmpresaPadraoPag=gx.fn.getControlValue("vEMPRESAPADRAOPAG") ;
      this.A93PaginacaoNumeroBalancete=gx.fn.getIntegerValue("PAGINACAONUMEROBALANCETE",'.') ;
      this.A92PaginacaoQuantidadeBalancete=gx.fn.getIntegerValue("PAGINACAOQUANTIDADEBALANCETE",'.') ;
      this.AV113Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV91SdtTxtTela=gx.fn.getControlValue("vSDTTXTTELA") ;
      this.AV8EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.s132_client=function()
   {
      this.AV101TpErro = gx.num.trunc( 1 ,0) ;
      if ( (0==this.AV45MesInicial) )
      {
         this.addMessage("Informe o Mês Inicial do Período");
         gx.fn.usrSetFocus("vMESINICIAL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( (0==this.AV47AnoInicial) )
      {
         this.addMessage("Informe o Ano Inicial do Período");
         gx.fn.usrSetFocus("vANOINICIAL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( (0==this.AV46MesFinal) )
      {
         this.addMessage("Informe o Mês Final do Período");
         gx.fn.usrSetFocus("vMESFINAL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( (0==this.AV48AnoFinal) )
      {
         this.addMessage("Informe o Ano Final do Período");
         gx.fn.usrSetFocus("vANOFINAL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( ! (""==this.AV50ErroDataInicial) )
      {
         this.addMessage(this.AV50ErroDataInicial);
         gx.fn.usrSetFocus("vMESINICIAL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( ! (""==this.AV51ErroDataFinal) )
      {
         this.addMessage(this.AV51ErroDataFinal);
         gx.fn.usrSetFocus("vMESFINAL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( new gx.date.gxdate( this.AV30DataFinal ).compare( this.AV29DataInicial ) < 0 )
      {
         this.addMessage("Data Final do Período deve ser maior ou igual a Inicial");
         gx.fn.usrSetFocus("vMESFINAL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( this.AV16Tipo == "S" && (0==this.AV23Nivel) )
      {
         this.addMessage("Informe o nível da Conta");
         gx.fn.usrSetFocus("vNIVEL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( this.AV16Tipo == "A" && ! (0==this.AV23Nivel) )
      {
         this.addMessage("Não informar o nível da Conta quando o Tipo de balancete for Analítico");
         gx.fn.usrSetFocus("vNIVEL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( this.AV15Modelo == "N" && this.AV27ImprimirTermoReconhecimento == "S" )
      {
         this.addMessage("Desmarque a opção Imprimir termo de Reconhecimento");
         gx.fn.usrSetFocus("vIMPRIMIRTERMORECONHECIMENTO") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( this.AV15Modelo == "N" && this.AV28ImprimirEspacoAssinatura == "S" )
      {
         this.addMessage("A opção Imprimir Espaço para Assinatura deve ser informada somente quando o Tipo de Impressão for diferente de Normal");
         gx.fn.usrSetFocus("vIMPRIMIRESPACOASSINATURA") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( this.AV28ImprimirEspacoAssinatura == "S" && this.AV27ImprimirTermoReconhecimento == "N" )
      {
         this.addMessage("A opção Imprimir Espaço para Assinatura deve ser informada somente quando a opção Imprimir Termo de Reconhecimento estiver marcada");
         gx.fn.usrSetFocus("vIMPRIMIRESPACOASSINATURA") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( new gx.date.gxdate( this.AV29DataInicial ).compare( this.AV33DataImplantacao ) < 0 )
      {
         this.addMessage("Data Inicial deve ser maior que a Data de Implantação do Sistema");
         gx.fn.usrSetFocus("vMESINICIAL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( new gx.date.gxdate( this.AV30DataFinal ).compare( this.AV33DataImplantacao ) < 0 )
      {
         this.addMessage("Data Final deve ser maior que a Data de Implantação do Sistema");
         gx.fn.usrSetFocus("vMESFINAL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( new gx.date.gxdate( this.AV29DataInicial ).compare( this.AV34DataRefere ) > 0 )
      {
         this.addMessage("Data Inicial deve ser menor que a Data de Referência");
         gx.fn.usrSetFocus("vMESINICIAL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( new gx.date.gxdate( this.AV30DataFinal ).compare( this.AV34DataRefere ) > 0 )
      {
         this.addMessage("Data Final deve ser menor que a Data de Referência");
         gx.fn.usrSetFocus("vMESFINAL") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( this.AV24AtualizarPagina == "S" && ( this.AV15Modelo != "R" && this.AV15Modelo != "D" ) )
      {
         this.addMessage("Atualizar Página deve ser marcado apenas quando o Tipo de Impressão for Razão ou Diário");
         gx.fn.usrSetFocus("vATUALIZARPAGINA") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else if ( this.AV24AtualizarPagina == "S" && ( (0==this.AV57PaginacaoNumeroBalancete) && (0==this.AV58PaginacaoQuantidadeBalancete) ) )
      {
         this.addMessage("Cadastrar paginação para que possa escolher a opção de Atualizar Número da Páginas");
         gx.fn.usrSetFocus("vATUALIZARPAGINA") ;
         this.TABCSSContainer.setPosition(1) ;
      }
      else
      {
         this.AV101TpErro = gx.num.trunc( 0 ,0) ;
      }
      if ( this.AV101TpErro == 0 )
      {
         this.AV102NumLinha = gx.num.trunc( 1 ,0) ;
         /* Start For Each Line in Grdccontabil */
         var rowIdx124 = 1 ;
         var currentRowIdx124 = gx.fn.currentGridRowImpl(124) ;
         var rowIdxS124 ;
         var gridObj124 = gx.O.getGridById(124,0) ;
         while ( rowIdx124 <= gridObj124.grid.rows.length )
         {
            rowIdxS124 =  gx.text.padl( gx.text.tostring( rowIdx124), 4, "0")  ;
            gridObj124.instanciateRow(gridObj124.grid.getRowById(rowIdx124 - 1));
            if ( this.AV19ContaContabilInicial > this.AV20ContaContabilFinal )
            {
               this.addMessage("Conta Contabil inicial deve ser menor ou igual a final. Linha do erro: "+gx.text.trim( gx.num.str( this.AV102NumLinha, 4, 0)));
               this.TABCSSContainer.setPosition(2) ;
               this.AV101TpErro = gx.num.trunc( 1 ,0) ;
            }
            this.AV102NumLinha = gx.num.trunc( this.AV102NumLinha + 1 ,0) ;
            rowIdx124 = gx.num.trunc( rowIdx124 + 1 ,0) ;
         }
         if ( currentRowIdx124 )
         {
            gridObj124.instanciateRow(currentRowIdx124);
         }
      }
   };
   this.s152_client=function()
   {
      if ( this.AV99SnExcluirLinha != "S" )
      {
         this.AV100ContGrid = gx.num.trunc( 1 ,0) ;
         /* Start For Each Line in Grdccontabil */
         var rowIdx124 = 1 ;
         var currentRowIdx124 = gx.fn.currentGridRowImpl(124) ;
         var rowIdxS124 ;
         var gridObj124 = gx.O.getGridById(124,0) ;
         while ( rowIdx124 <= gridObj124.grid.rows.length )
         {
            rowIdxS124 =  gx.text.padl( gx.text.tostring( rowIdx124), 4, "0")  ;
            gridObj124.instanciateRow(gridObj124.grid.getRowById(rowIdx124 - 1));
            this.AV103ContSdt = gx.num.trunc( 1 ,0) ;
            this.AV123GXV4 = gx.num.trunc( 1 ,0) ;
            while ( this.AV123GXV4 <= this.AV93SdtSelecaoCContabil.length )
            {
               this.AV96SdtSelecaoCContabilItem =  this.AV93SdtSelecaoCContabil[this.AV123GXV4 - 1]  ;
               if ( this.AV103ContSdt == this.AV100ContGrid )
               {
                  this.AV96SdtSelecaoCContabilItem.ContaContabilInicial =  this.AV19ContaContabilInicial  ;
                  this.AV96SdtSelecaoCContabilItem.TradutorInicial = gx.num.trunc( this.AV43TradutorInicial ,0) ;
                  this.AV96SdtSelecaoCContabilItem.ContaContabilFinal =  this.AV20ContaContabilFinal  ;
                  this.AV96SdtSelecaoCContabilItem.TradutorFinal = gx.num.trunc( this.AV44TradutorFinal ,0) ;
               }
               this.AV103ContSdt = gx.num.trunc( this.AV103ContSdt + 1 ,0) ;
               this.AV123GXV4 = gx.num.trunc( this.AV123GXV4 + 1 ,0) ;
            }
            this.AV100ContGrid = gx.num.trunc( this.AV100ContGrid + 1 ,0) ;
            rowIdx124 = gx.num.trunc( rowIdx124 + 1 ,0) ;
         }
         if ( currentRowIdx124 )
         {
            gridObj124.instanciateRow(currentRowIdx124);
         }
      }
   };
   this.e210h1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmgrpordenacao",["S", "Parâmetros do Balancete de Verificação"]), ["", ""]);
      this.refreshOutputs([]);
   };
   this.e110h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e120h2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e130h2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e140h2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e150h2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e160h2_client=function()
   {
      this.executeServerEvent("'NOVACCONTABIL'", true, null, false, false);
   };
   this.e190h2_client=function()
   {
      this.executeServerEvent("'EXCLUIRCCONTABIL'", true, arguments[0], false, false);
   };
   this.e220h2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,21,24,27,30,32,36,38,43,45,49,51,55,61,64,66,69,71,73,75,77,79,81,84,86,92,95,97,101,103,108,110,113,118,121,123,125,126,127,128,129,130,131,132,133,134,135,136,143,144,150,151];
   this.GXLastCtrlId =151;
   this.GrdccontabilContainer = new gx.grid.grid(this, 2,"WbpLvl2",124,"Grdccontabil","Grdccontabil","GrdccontabilContainer",this.CmpContext,this.IsMasterPage,"hbalanceteverificacao",[],false,1,true,true,0,true,false,false,"CollSdtSelecaoCContabil.SdtSelecaoCContabilItem",0,"px","Novo registro",true,false,true,null,null,false,"AV93SdtSelecaoCContabil",false,[1,1,1,1]);
   var GrdccontabilContainer = this.GrdccontabilContainer;
   GrdccontabilContainer.addSingleLineEdit("Contacontabilinicial",125,"vCONTACONTABILINICIAL","Conta Contabil Inicial","","ContaContabilInicial","svchar",0,"px",30,30,"left",null,[],"Contacontabilinicial","ContaContabilInicial",true,0,false,false,"Attribute",1,"");
   GrdccontabilContainer.addSingleLineEdit("Tradutorinicial",126,"vTRADUTORINICIAL","Tradutor Inicial","","TradutorInicial","int",0,"px",5,5,"right",null,[],"Tradutorinicial","TradutorInicial",true,0,false,false,"Attribute",1,"");
   GrdccontabilContainer.addBitmap("&Bmpccontabilini","vBMPCCONTABILINI",127,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GrdccontabilContainer.addSingleLineEdit("Contacontabilfinal",128,"vCONTACONTABILFINAL","Conta Contabil Final","","ContaContabilFinal","svchar",0,"px",30,30,"left",null,[],"Contacontabilfinal","ContaContabilFinal",true,0,false,false,"Attribute",1,"");
   GrdccontabilContainer.addSingleLineEdit("Tradutorfinal",129,"vTRADUTORFINAL","Tradutor Final","","TradutorFinal","int",0,"px",5,5,"right",null,[],"Tradutorfinal","TradutorFinal",true,0,false,false,"Attribute",1,"");
   GrdccontabilContainer.addBitmap("&Bmpccontabilfin","vBMPCCONTABILFIN",130,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GrdccontabilContainer.addBitmap("&Bmpexc","vBMPEXC",131,0,"px",17,"px","e190h2_client","","","Image","GridColumnImage");
   GrdccontabilContainer.addSingleLineEdit("GXV13O",132,"CTLCONTACONTABILINICIAL","Código","","ContaContabilInicial","svchar",0,"px",30,30,"left",null,[],"GXV13O","GXV13O",false,0,false,false,"Attribute",1,"");
   GrdccontabilContainer.addSingleLineEdit("GXV13P",133,"CTLTRADUTORINICIAL","Conta Contabil Tradutor","","TradutorInicial","int",0,"px",5,5,"right",null,[],"GXV13P","GXV13P",false,0,false,false,"Attribute",1,"");
   GrdccontabilContainer.addSingleLineEdit("GXV13Q",134,"CTLCONTACONTABILFINAL","Código","","ContaContabilFinal","svchar",0,"px",30,30,"left",null,[],"GXV13Q","GXV13Q",false,0,false,false,"Attribute",1,"");
   GrdccontabilContainer.addSingleLineEdit("GXV13R",135,"CTLTRADUTORFINAL","Conta Contabil Tradutor","","TradutorFinal","int",0,"px",5,5,"right",null,[],"GXV13R","GXV13R",false,0,false,false,"Attribute",1,"");
   this.setGrid(GrdccontabilContainer);
   this.TABCSSContainer = gx.uc.getNew(this, 20, 13, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV92Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV92Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV92Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hbalanceteverificacao_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   this.HDMASKCCONTABILINIContainer = gx.uc.getNew(this, 147, 13, "HDMask", "HDMASKCCONTABILINIContainer", "Hdmaskccontabilini");
   var HDMASKCCONTABILINIContainer = this.HDMASKCCONTABILINIContainer;
   HDMASKCCONTABILINIContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKCCONTABILINIContainer.setDynProp("Picture", "Picture", "", "str");
   HDMASKCCONTABILINIContainer.setProp("Default", "Default", "", "str");
   HDMASKCCONTABILINIContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKCCONTABILINIContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKCCONTABILINIContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKCCONTABILINIContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKCCONTABILINIContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKCCONTABILINIContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKCCONTABILINIContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKCCONTABILINIContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKCCONTABILINIContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKCCONTABILINIContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKCCONTABILINIContainer.setProp("Class", "Class", "", "char");
   HDMASKCCONTABILINIContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKCCONTABILINIContainer);
   this.HDMASKCCONTABILFINContainer = gx.uc.getNew(this, 148, 13, "HDMask", "HDMASKCCONTABILFINContainer", "Hdmaskccontabilfin");
   var HDMASKCCONTABILFINContainer = this.HDMASKCCONTABILFINContainer;
   HDMASKCCONTABILFINContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKCCONTABILFINContainer.setDynProp("Picture", "Picture", "", "str");
   HDMASKCCONTABILFINContainer.setProp("Default", "Default", "", "str");
   HDMASKCCONTABILFINContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKCCONTABILFINContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKCCONTABILFINContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKCCONTABILFINContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKCCONTABILFINContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKCCONTABILFINContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKCCONTABILFINContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKCCONTABILFINContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKCCONTABILFINContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKCCONTABILFINContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKCCONTABILFINContainer.setProp("Class", "Class", "", "char");
   HDMASKCCONTABILFINContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKCCONTABILFINContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV75TxtTela",gxold:"OV75TxtTela",gxvar:"AV75TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV75TxtTela=Value},v2z:function(Value){gx.O.ZV75TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV75TxtTela)},c2v:function(){gx.O.AV75TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE2",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TAB1",grid:0};
   GXValidFnc[24]={fld:"TABLE13",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV16Tipo",gxold:"OV16Tipo",gxvar:"AV16Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Tipo=Value},v2z:function(Value){gx.O.ZV16Tipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPO",gx.O.AV16Tipo)},c2v:function(){gx.O.AV16Tipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELO",gxz:"ZV15Modelo",gxold:"OV15Modelo",gxvar:"AV15Modelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15Modelo=Value},v2z:function(Value){gx.O.ZV15Modelo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELO",gx.O.AV15Modelo)},c2v:function(){gx.O.AV15Modelo=this.val()},val:function(){return gx.fn.getControlValue("vMODELO")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDETALHARCORRENTISTA",gxz:"ZV25DetalharCorrentista",gxold:"OV25DetalharCorrentista",gxvar:"AV25DetalharCorrentista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25DetalharCorrentista=Value},v2z:function(Value){gx.O.ZV25DetalharCorrentista=Value},v2c:function(){gx.fn.setCheckBoxValue("vDETALHARCORRENTISTA",gx.O.AV25DetalharCorrentista,"S")},c2v:function(){gx.O.AV25DetalharCorrentista=this.val()},val:function(){return gx.fn.getControlValue("vDETALHARCORRENTISTA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRTERMORECONHECIMENTO",gxz:"ZV27ImprimirTermoReconhecimento",gxold:"OV27ImprimirTermoReconhecimento",gxvar:"AV27ImprimirTermoReconhecimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV27ImprimirTermoReconhecimento=Value},v2z:function(Value){gx.O.ZV27ImprimirTermoReconhecimento=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRTERMORECONHECIMENTO",gx.O.AV27ImprimirTermoReconhecimento,"S")},c2v:function(){gx.O.AV27ImprimirTermoReconhecimento=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRTERMORECONHECIMENTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESPAPURACAORESULT",gxz:"ZV26DespApuracaoResult",gxold:"OV26DespApuracaoResult",gxvar:"AV26DespApuracaoResult",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26DespApuracaoResult=Value},v2z:function(Value){gx.O.ZV26DespApuracaoResult=Value},v2c:function(){gx.fn.setCheckBoxValue("vDESPAPURACAORESULT",gx.O.AV26DespApuracaoResult,"S")},c2v:function(){gx.O.AV26DespApuracaoResult=this.val()},val:function(){return gx.fn.getControlValue("vDESPAPURACAORESULT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[51]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRESPACOASSINATURA",gxz:"ZV28ImprimirEspacoAssinatura",gxold:"OV28ImprimirEspacoAssinatura",gxvar:"AV28ImprimirEspacoAssinatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV28ImprimirEspacoAssinatura=Value},v2z:function(Value){gx.O.ZV28ImprimirEspacoAssinatura=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRESPACOASSINATURA",gx.O.AV28ImprimirEspacoAssinatura,"S")},c2v:function(){gx.O.AV28ImprimirEspacoAssinatura=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRESPACOASSINATURA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERARCSV",gxz:"ZV64GerarCsv",gxold:"OV64GerarCsv",gxvar:"AV64GerarCsv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV64GerarCsv=Value},v2z:function(Value){gx.O.ZV64GerarCsv=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERARCSV",gx.O.AV64GerarCsv,"S")},c2v:function(){gx.O.AV64GerarCsv=this.val()},val:function(){return gx.fn.getControlValue("vGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[61]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[64]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[66]={fld:"TABLE14",grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINICIAL",gxz:"ZV45MesInicial",gxold:"OV45MesInicial",gxvar:"AV45MesInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45MesInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45MesInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINICIAL",gx.O.AV45MesInicial,0)},c2v:function(){gx.O.AV45MesInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINICIAL",gxz:"ZV47AnoInicial",gxold:"OV47AnoInicial",gxvar:"AV47AnoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47AnoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47AnoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOINICIAL",gx.O.AV47AnoInicial,0)},c2v:function(){gx.O.AV47AnoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFINAL",gxz:"ZV46MesFinal",gxold:"OV46MesFinal",gxvar:"AV46MesFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46MesFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46MesFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFINAL",gx.O.AV46MesFinal,0)},c2v:function(){gx.O.AV46MesFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFINAL",gxz:"ZV48AnoFinal",gxold:"OV48AnoFinal",gxvar:"AV48AnoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48AnoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48AnoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOFINAL",gx.O.AV48AnoFinal,0)},c2v:function(){gx.O.AV48AnoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"NIVEL2", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNIVEL",gxz:"ZV23Nivel",gxold:"OV23Nivel",gxvar:"AV23Nivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Nivel=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Nivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNIVEL",gx.O.AV23Nivel,0)},c2v:function(){gx.O.AV23Nivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TITULOPAGINACAO", format:0,grid:0};
   GXValidFnc[95]={fld:"PAGINAATUAL", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAONUMEROBALANCETE",gxz:"ZV57PaginacaoNumeroBalancete",gxold:"OV57PaginacaoNumeroBalancete",gxvar:"AV57PaginacaoNumeroBalancete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57PaginacaoNumeroBalancete=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57PaginacaoNumeroBalancete=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINACAONUMEROBALANCETE",gx.O.AV57PaginacaoNumeroBalancete,0)},c2v:function(){gx.O.AV57PaginacaoNumeroBalancete=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAONUMEROBALANCETE",'.')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"QTDEPAGINAS", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAOQUANTIDADEBALANCETE",gxz:"ZV58PaginacaoQuantidadeBalancete",gxold:"OV58PaginacaoQuantidadeBalancete",gxvar:"AV58PaginacaoQuantidadeBalancete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58PaginacaoQuantidadeBalancete=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58PaginacaoQuantidadeBalancete=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINACAOQUANTIDADEBALANCETE",gx.O.AV58PaginacaoQuantidadeBalancete,0)},c2v:function(){gx.O.AV58PaginacaoQuantidadeBalancete=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAOQUANTIDADEBALANCETE",'.')},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATUALIZARPAGINA",gxz:"ZV24AtualizarPagina",gxold:"OV24AtualizarPagina",gxvar:"AV24AtualizarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24AtualizarPagina=Value},v2z:function(Value){gx.O.ZV24AtualizarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vATUALIZARPAGINA",gx.O.AV24AtualizarPagina,"S")},c2v:function(){gx.O.AV24AtualizarPagina=this.val()},val:function(){return gx.fn.getControlValue("vATUALIZARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[110]={fld:"TAB2",grid:0};
   GXValidFnc[113]={fld:"TABLE3",grid:0};
   GXValidFnc[118]={fld:"TABLE4",grid:0};
   GXValidFnc[121]={fld:"IMGNOVACCONTABIL",grid:0};
   GXValidFnc[123]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[125]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:124,gxgrid:this.GrdccontabilContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILINICIAL",gxz:"ZV19ContaContabilInicial",gxold:"OV19ContaContabilInicial",gxvar:"AV19ContaContabilInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV19ContaContabilInicial=Value},v2z:function(Value){gx.O.ZV19ContaContabilInicial=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILINICIAL",row || gx.fn.currentGridRowImpl(124),gx.O.AV19ContaContabilInicial,0)},c2v:function(){gx.O.AV19ContaContabilInicial=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACONTABILINICIAL",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn};
   GXValidFnc[126]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,isacc:0,grid:124,gxgrid:this.GrdccontabilContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORINICIAL",gxz:"ZV43TradutorInicial",gxold:"OV43TradutorInicial",gxvar:"AV43TradutorInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV43TradutorInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43TradutorInicial=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTRADUTORINICIAL",row || gx.fn.currentGridRowImpl(124),gx.O.AV43TradutorInicial,0)},c2v:function(){gx.O.AV43TradutorInicial=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTRADUTORINICIAL",row || gx.fn.currentGridRowImpl(124),'.')},nac:gx.falseFn};
   GXValidFnc[127]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:124,gxgrid:this.GrdccontabilContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCCONTABILINI",gxz:"ZV94BmpCContabilIni",gxold:"OV94BmpCContabilIni",gxvar:"AV94BmpCContabilIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV94BmpCContabilIni=Value},v2z:function(Value){gx.O.ZV94BmpCContabilIni=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCCONTABILINI",row || gx.fn.currentGridRowImpl(124),gx.O.AV94BmpCContabilIni,gx.O.AV120Bmpccontabilini_GXI)},c2v:function(){gx.O.AV120Bmpccontabilini_GXI=this.val_GXI();gx.O.AV94BmpCContabilIni=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCCONTABILINI",row || gx.fn.currentGridRowImpl(124))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCCONTABILINI_GXI",row || gx.fn.currentGridRowImpl(124))}, gxvar_GXI:'AV120Bmpccontabilini_GXI',nac:gx.falseFn};
   GXValidFnc[128]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:124,gxgrid:this.GrdccontabilContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILFINAL",gxz:"ZV20ContaContabilFinal",gxold:"OV20ContaContabilFinal",gxvar:"AV20ContaContabilFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20ContaContabilFinal=Value},v2z:function(Value){gx.O.ZV20ContaContabilFinal=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILFINAL",row || gx.fn.currentGridRowImpl(124),gx.O.AV20ContaContabilFinal,0)},c2v:function(){gx.O.AV20ContaContabilFinal=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACONTABILFINAL",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn};
   GXValidFnc[129]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,isacc:0,grid:124,gxgrid:this.GrdccontabilContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORFINAL",gxz:"ZV44TradutorFinal",gxold:"OV44TradutorFinal",gxvar:"AV44TradutorFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV44TradutorFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44TradutorFinal=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTRADUTORFINAL",row || gx.fn.currentGridRowImpl(124),gx.O.AV44TradutorFinal,0)},c2v:function(){gx.O.AV44TradutorFinal=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTRADUTORFINAL",row || gx.fn.currentGridRowImpl(124),'.')},nac:gx.falseFn};
   GXValidFnc[130]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:124,gxgrid:this.GrdccontabilContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCCONTABILFIN",gxz:"ZV95BmpCContabilFin",gxold:"OV95BmpCContabilFin",gxvar:"AV95BmpCContabilFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV95BmpCContabilFin=Value},v2z:function(Value){gx.O.ZV95BmpCContabilFin=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCCONTABILFIN",row || gx.fn.currentGridRowImpl(124),gx.O.AV95BmpCContabilFin,gx.O.AV121Bmpccontabilfin_GXI)},c2v:function(){gx.O.AV121Bmpccontabilfin_GXI=this.val_GXI();gx.O.AV95BmpCContabilFin=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCCONTABILFIN",row || gx.fn.currentGridRowImpl(124))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCCONTABILFIN_GXI",row || gx.fn.currentGridRowImpl(124))}, gxvar_GXI:'AV121Bmpccontabilfin_GXI',nac:gx.falseFn};
   GXValidFnc[131]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:124,gxgrid:this.GrdccontabilContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV97BmpExc",gxold:"OV97BmpExc",gxvar:"AV97BmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV97BmpExc=Value},v2z:function(Value){gx.O.ZV97BmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(124),gx.O.AV97BmpExc,gx.O.AV119Bmpexc_GXI)},c2v:function(){gx.O.AV119Bmpexc_GXI=this.val_GXI();gx.O.AV97BmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(124))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(124))}, gxvar_GXI:'AV119Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[132]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:124,gxgrid:this.GrdccontabilContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTACONTABILINICIAL",gxz:"ZV109GXV13O",gxold:"OV109GXV13O",gxvar:"GXV13O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13O=Value},v2z:function(Value){gx.O.ZV109GXV13O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTACONTABILINICIAL",row || gx.fn.currentGridRowImpl(124),gx.O.GXV13O,0)},c2v:function(){gx.O.GXV13O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTACONTABILINICIAL",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn};
   GXValidFnc[133]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,isacc:0,grid:124,gxgrid:this.GrdccontabilContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTRADUTORINICIAL",gxz:"ZV110GXV13P",gxold:"OV110GXV13P",gxvar:"GXV13P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13P=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV110GXV13P=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLTRADUTORINICIAL",row || gx.fn.currentGridRowImpl(124),gx.O.GXV13P,0)},c2v:function(){gx.O.GXV13P=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLTRADUTORINICIAL",row || gx.fn.currentGridRowImpl(124),'.')},nac:gx.falseFn};
   GXValidFnc[134]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:124,gxgrid:this.GrdccontabilContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTACONTABILFINAL",gxz:"ZV111GXV13Q",gxold:"OV111GXV13Q",gxvar:"GXV13Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13Q=Value},v2z:function(Value){gx.O.ZV111GXV13Q=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTACONTABILFINAL",row || gx.fn.currentGridRowImpl(124),gx.O.GXV13Q,0)},c2v:function(){gx.O.GXV13Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTACONTABILFINAL",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn};
   GXValidFnc[135]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,isacc:0,grid:124,gxgrid:this.GrdccontabilContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTRADUTORFINAL",gxz:"ZV112GXV13R",gxold:"OV112GXV13R",gxvar:"GXV13R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13R=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV112GXV13R=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLTRADUTORFINAL",row || gx.fn.currentGridRowImpl(124),gx.O.GXV13R,0)},c2v:function(){gx.O.GXV13R=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLTRADUTORFINAL",row || gx.fn.currentGridRowImpl(124),'.')},nac:gx.falseFn};
   GXValidFnc[136]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[143]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV52ChamaOnBlurMascara",gxold:"OV52ChamaOnBlurMascara",gxvar:"AV52ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV52ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV52ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV52ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[144]={fld:"JS", format:2,grid:0};
   GXValidFnc[150]={fld:"BTNPARM",grid:0};
   GXValidFnc[151]={fld:"BTNHELP",grid:0};
   this.AV75TxtTela = "" ;
   this.ZV75TxtTela = "" ;
   this.OV75TxtTela = "" ;
   this.AV16Tipo = "" ;
   this.ZV16Tipo = "" ;
   this.OV16Tipo = "" ;
   this.AV15Modelo = "" ;
   this.ZV15Modelo = "" ;
   this.OV15Modelo = "" ;
   this.AV25DetalharCorrentista = "" ;
   this.ZV25DetalharCorrentista = "" ;
   this.OV25DetalharCorrentista = "" ;
   this.AV27ImprimirTermoReconhecimento = "" ;
   this.ZV27ImprimirTermoReconhecimento = "" ;
   this.OV27ImprimirTermoReconhecimento = "" ;
   this.AV26DespApuracaoResult = "" ;
   this.ZV26DespApuracaoResult = "" ;
   this.OV26DespApuracaoResult = "" ;
   this.AV28ImprimirEspacoAssinatura = "" ;
   this.ZV28ImprimirEspacoAssinatura = "" ;
   this.OV28ImprimirEspacoAssinatura = "" ;
   this.AV64GerarCsv = "" ;
   this.ZV64GerarCsv = "" ;
   this.OV64GerarCsv = "" ;
   this.AV45MesInicial = 0 ;
   this.ZV45MesInicial = 0 ;
   this.OV45MesInicial = 0 ;
   this.AV47AnoInicial = 0 ;
   this.ZV47AnoInicial = 0 ;
   this.OV47AnoInicial = 0 ;
   this.AV46MesFinal = 0 ;
   this.ZV46MesFinal = 0 ;
   this.OV46MesFinal = 0 ;
   this.AV48AnoFinal = 0 ;
   this.ZV48AnoFinal = 0 ;
   this.OV48AnoFinal = 0 ;
   this.AV23Nivel = 0 ;
   this.ZV23Nivel = 0 ;
   this.OV23Nivel = 0 ;
   this.AV57PaginacaoNumeroBalancete = 0 ;
   this.ZV57PaginacaoNumeroBalancete = 0 ;
   this.OV57PaginacaoNumeroBalancete = 0 ;
   this.AV58PaginacaoQuantidadeBalancete = 0 ;
   this.ZV58PaginacaoQuantidadeBalancete = 0 ;
   this.OV58PaginacaoQuantidadeBalancete = 0 ;
   this.AV24AtualizarPagina = "" ;
   this.ZV24AtualizarPagina = "" ;
   this.OV24AtualizarPagina = "" ;
   this.ZV19ContaContabilInicial = "" ;
   this.OV19ContaContabilInicial = "" ;
   this.ZV43TradutorInicial = 0 ;
   this.OV43TradutorInicial = 0 ;
   this.ZV94BmpCContabilIni = "" ;
   this.OV94BmpCContabilIni = "" ;
   this.ZV20ContaContabilFinal = "" ;
   this.OV20ContaContabilFinal = "" ;
   this.ZV44TradutorFinal = 0 ;
   this.OV44TradutorFinal = 0 ;
   this.ZV95BmpCContabilFin = "" ;
   this.OV95BmpCContabilFin = "" ;
   this.ZV97BmpExc = "" ;
   this.OV97BmpExc = "" ;
   this.ZV109GXV13O = "" ;
   this.OV109GXV13O = "" ;
   this.ZV110GXV13P = 0 ;
   this.OV110GXV13P = 0 ;
   this.ZV111GXV13Q = "" ;
   this.OV111GXV13Q = "" ;
   this.ZV112GXV13R = 0 ;
   this.OV112GXV13R = 0 ;
   this.AV52ChamaOnBlurMascara = "" ;
   this.ZV52ChamaOnBlurMascara = "" ;
   this.OV52ChamaOnBlurMascara = "" ;
   this.AV75TxtTela = "" ;
   this.AV92Tab = [ ] ;
   this.AV16Tipo = "" ;
   this.AV15Modelo = "" ;
   this.AV25DetalharCorrentista = "" ;
   this.AV27ImprimirTermoReconhecimento = "" ;
   this.AV26DespApuracaoResult = "" ;
   this.AV28ImprimirEspacoAssinatura = "" ;
   this.AV64GerarCsv = "" ;
   this.AV45MesInicial = 0 ;
   this.AV47AnoInicial = 0 ;
   this.AV46MesFinal = 0 ;
   this.AV48AnoFinal = 0 ;
   this.AV23Nivel = 0 ;
   this.AV57PaginacaoNumeroBalancete = 0 ;
   this.AV58PaginacaoQuantidadeBalancete = 0 ;
   this.AV24AtualizarPagina = "" ;
   this.AV52ChamaOnBlurMascara = "" ;
   this.AV19ContaContabilInicial = "" ;
   this.AV43TradutorInicial = 0 ;
   this.AV94BmpCContabilIni = "" ;
   this.AV20ContaContabilFinal = "" ;
   this.AV44TradutorFinal = 0 ;
   this.AV95BmpCContabilFin = "" ;
   this.AV97BmpExc = "" ;
   this.GXV13O = "" ;
   this.GXV13P = 0 ;
   this.GXV13Q = "" ;
   this.GXV13R = 0 ;
   this.A82EmpresaPaginacaoEmpresaId = "" ;
   this.A93PaginacaoNumeroBalancete = 0 ;
   this.A92PaginacaoQuantidadeBalancete = 0 ;
   this.AV99SnExcluirLinha = "" ;
   this.AV93SdtSelecaoCContabil = [ ] ;
   this.AV59EmpresaPadraoPag = "" ;
   this.AV113Pgmname = "" ;
   this.AV91SdtTxtTela = [ ] ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV102NumLinha = 0 ;
   this.AV34DataRefere = gx.date.nullDate() ;
   this.AV33DataImplantacao = gx.date.nullDate() ;
   this.AV29DataInicial = gx.date.nullDate() ;
   this.AV30DataFinal = gx.date.nullDate() ;
   this.AV51ErroDataFinal = "" ;
   this.AV50ErroDataInicial = "" ;
   this.AV101TpErro = 0 ;
   this.AV96SdtSelecaoCContabilItem = {} ;
   this.AV123GXV4 = 0 ;
   this.AV103ContSdt = 0 ;
   this.AV100ContGrid = 0 ;
   this.Events = {"e110h2_client": ["'FECHAR'", true] ,"e120h2_client": ["ENTER", true] ,"e130h2_client": ["'SALVARTXT'", true] ,"e140h2_client": ["VTXTTELA.CLICK", true] ,"e150h2_client": ["'EXCLUIRTXT'", true] ,"e160h2_client": ["'NOVACCONTABIL'", true] ,"e190h2_client": ["'EXCLUIRCCONTABIL'", true] ,"e220h2_client": ["CANCEL", true] ,"e210h1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRDCCONTABIL_nFirstRecordOnPage'},{av:'GRDCCONTABIL_nEOF'},{av:'subGrdccontabil_Rows'},{av:'gx.fn.getCtrlProperty("vTRADUTORINICIAL","Visible")',ctrl:'vTRADUTORINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTRADUTORFINAL","Visible")',ctrl:'vTRADUTORFINAL',prop:'Visible'},{av:'AV97BmpExc',fld:'vBMPEXC',grid:124},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV94BmpCContabilIni',fld:'vBMPCCONTABILINI',grid:124},{av:'AV95BmpCContabilFin',fld:'vBMPCCONTABILFIN',grid:124},{av:'AV99SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL',grid:124},{av:'AV43TradutorInicial',fld:'vTRADUTORINICIAL',grid:124},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL',grid:124},{av:'AV44TradutorFinal',fld:'vTRADUTORFINAL',grid:124},{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV59EmpresaPadraoPag',fld:'vEMPRESAPADRAOPAG'},{av:'A93PaginacaoNumeroBalancete',fld:'PAGINACAONUMEROBALANCETE'},{av:'A92PaginacaoQuantidadeBalancete',fld:'PAGINACAOQUANTIDADEBALANCETE'},{av:'AV113Pgmname',fld:'vPGMNAME'},{av:'AV91SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV75TxtTela',fld:'vTXTTELA'}],[{av:'AV100ContGrid',fld:'vCONTGRID'},{av:'AV103ContSdt',fld:'vCONTSDT'},{av:'AV123GXV4',fld:'vGXV4'},{av:'AV96SdtSelecaoCContabilItem',fld:'vSDTSELECAOCCONTABILITEM'},{av:'AV57PaginacaoNumeroBalancete',fld:'vPAGINACAONUMEROBALANCETE'},{av:'AV58PaginacaoQuantidadeBalancete',fld:'vPAGINACAOQUANTIDADEBALANCETE'},{av:'AV75TxtTela',fld:'vTXTTELA'},{av:'AV118GXV3',fld:'vGXV3'},{av:'AV88SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV40TemMascara',fld:'vTEMMASCARA'},{av:'this.HDMASKCCONTABILINIContainer.AttachControl',ctrl:'HDMASKCCONTABILINI',prop:'AttachControl'},{av:'AV105MascaraValores',fld:'vMASCARAVALORES'},{av:'this.HDMASKCCONTABILINIContainer.Picture',ctrl:'HDMASKCCONTABILINI',prop:'Picture'},{av:'this.HDMASKCCONTABILFINContainer.AttachControl',ctrl:'HDMASKCCONTABILFIN',prop:'AttachControl'},{av:'this.HDMASKCCONTABILFINContainer.Picture',ctrl:'HDMASKCCONTABILFIN',prop:'Picture'},{av:'AV117GXV2',fld:'vGXV2'},{av:'AV16Tipo',fld:'vTIPO'},{av:'AV15Modelo',fld:'vMODELO'},{av:'AV23Nivel',fld:'vNIVEL'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV45MesInicial',fld:'vMESINICIAL'},{av:'AV47AnoInicial',fld:'vANOINICIAL'},{av:'AV46MesFinal',fld:'vMESFINAL'},{av:'AV48AnoFinal',fld:'vANOFINAL'},{av:'AV101TpErro',fld:'vTPERRO'},{av:'AV75TxtTela',fld:'vTXTTELA'},{av:'AV113Pgmname',fld:'vPGMNAME'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV23Nivel',fld:'vNIVEL'},{av:'AV16Tipo',fld:'vTIPO'},{av:'AV15Modelo',fld:'vMODELO'},{av:'AV26DespApuracaoResult',fld:'vDESPAPURACAORESULT'},{av:'AV27ImprimirTermoReconhecimento',fld:'vIMPRIMIRTERMORECONHECIMENTO'},{av:'AV28ImprimirEspacoAssinatura',fld:'vIMPRIMIRESPACOASSINATURA'},{av:'AV25DetalharCorrentista',fld:'vDETALHARCORRENTISTA'},{av:'AV24AtualizarPagina',fld:'vATUALIZARPAGINA'},{av:'AV57PaginacaoNumeroBalancete',fld:'vPAGINACAONUMEROBALANCETE'},{av:'AV58PaginacaoQuantidadeBalancete',fld:'vPAGINACAOQUANTIDADEBALANCETE'},{av:'AV62QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV64GerarCsv',fld:'vGERARCSV'},{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124},{av:'AV114Pgmdesc',fld:'vPGMDESC'},{av:'AV50ErroDataInicial',fld:'vERRODATAINICIAL'},{av:'AV51ErroDataFinal',fld:'vERRODATAFINAL'},{av:'AV33DataImplantacao',fld:'vDATAIMPLANTACAO'},{av:'AV29DataInicial',fld:'vDATAINICIAL'},{av:'AV34DataRefere',fld:'vDATAREFERE'},{av:'AV30DataFinal',fld:'vDATAFINAL'},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL',grid:124},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL',grid:124},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV99SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV43TradutorInicial',fld:'vTRADUTORINICIAL',grid:124},{av:'AV44TradutorFinal',fld:'vTRADUTORFINAL',grid:124},{av:'GRDCCONTABIL_nFirstRecordOnPage'},{av:'GRDCCONTABIL_nEOF'},{av:'subGrdccontabil_Rows'},{av:'gx.fn.getCtrlProperty("vTRADUTORINICIAL","Visible")',ctrl:'vTRADUTORINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTRADUTORFINAL","Visible")',ctrl:'vTRADUTORFINAL',prop:'Visible'},{av:'AV97BmpExc',fld:'vBMPEXC',grid:124},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV94BmpCContabilIni',fld:'vBMPCCONTABILINI',grid:124},{av:'AV95BmpCContabilFin',fld:'vBMPCCONTABILFIN',grid:124},{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV59EmpresaPadraoPag',fld:'vEMPRESAPADRAOPAG'},{av:'A93PaginacaoNumeroBalancete',fld:'PAGINACAONUMEROBALANCETE'},{av:'A92PaginacaoQuantidadeBalancete',fld:'PAGINACAOQUANTIDADEBALANCETE'},{av:'AV91SdtTxtTela',fld:'vSDTTXTTELA'}],[{av:'AV39DataInicialStr',fld:'vDATAINICIALSTR'},{av:'AV29DataInicial',fld:'vDATAINICIAL'},{av:'AV49DataFinalStr',fld:'vDATAFINALSTR'},{av:'AV30DataFinal',fld:'vDATAFINAL'},{av:'AV35DataImplantacaoStr',fld:'vDATAIMPLANTACAOSTR'},{av:'AV36DataRefereStr',fld:'vDATAREFERESTR'},{av:'AV33DataImplantacao',fld:'vDATAIMPLANTACAO'},{av:'AV34DataRefere',fld:'vDATAREFERE'},{av:'AV50ErroDataInicial',fld:'vERRODATAINICIAL'},{av:'AV51ErroDataFinal',fld:'vERRODATAFINAL'},{av:'AV86SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV13NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124},{av:'AV64GerarCsv',fld:'vGERARCSV'},{av:'AV62QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV58PaginacaoQuantidadeBalancete',fld:'vPAGINACAOQUANTIDADEBALANCETE'},{av:'AV57PaginacaoNumeroBalancete',fld:'vPAGINACAONUMEROBALANCETE'},{av:'AV24AtualizarPagina',fld:'vATUALIZARPAGINA'},{av:'AV25DetalharCorrentista',fld:'vDETALHARCORRENTISTA'},{av:'AV28ImprimirEspacoAssinatura',fld:'vIMPRIMIRESPACOASSINATURA'},{av:'AV27ImprimirTermoReconhecimento',fld:'vIMPRIMIRTERMORECONHECIMENTO'},{av:'AV26DespApuracaoResult',fld:'vDESPAPURACAORESULT'},{av:'AV15Modelo',fld:'vMODELO'},{av:'AV16Tipo',fld:'vTIPO'},{av:'AV23Nivel',fld:'vNIVEL'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV101TpErro',fld:'vTPERRO'},{av:'AV102NumLinha',fld:'vNUMLINHA'},{av:'AV100ContGrid',fld:'vCONTGRID'},{av:'AV103ContSdt',fld:'vCONTSDT'},{av:'AV123GXV4',fld:'vGXV4'},{av:'AV96SdtSelecaoCContabilItem',fld:'vSDTSELECAOCCONTABILITEM'},{av:'AV90OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'GRDCCONTABIL_nFirstRecordOnPage'},{av:'GRDCCONTABIL_nEOF'},{av:'subGrdccontabil_Rows'},{av:'gx.fn.getCtrlProperty("vTRADUTORINICIAL","Visible")',ctrl:'vTRADUTORINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTRADUTORFINAL","Visible")',ctrl:'vTRADUTORFINAL',prop:'Visible'},{av:'AV97BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV94BmpCContabilIni',fld:'vBMPCCONTABILINI'},{av:'AV95BmpCContabilFin',fld:'vBMPCCONTABILFIN'},{av:'AV99SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL'},{av:'AV43TradutorInicial',fld:'vTRADUTORINICIAL'},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL'},{av:'AV44TradutorFinal',fld:'vTRADUTORFINAL'},{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV59EmpresaPadraoPag',fld:'vEMPRESAPADRAOPAG'},{av:'A93PaginacaoNumeroBalancete',fld:'PAGINACAONUMEROBALANCETE'},{av:'A92PaginacaoQuantidadeBalancete',fld:'PAGINACAOQUANTIDADEBALANCETE'},{av:'AV113Pgmname',fld:'vPGMNAME'},{av:'AV91SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV75TxtTela',fld:'vTXTTELA'},{av:'AV16Tipo',fld:'vTIPO'},{av:'AV15Modelo',fld:'vMODELO'},{av:'AV23Nivel',fld:'vNIVEL'}],[{av:'AV90OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV113Pgmname',fld:'vPGMNAME'},{av:'AV91SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV75TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true}],[{av:'AV117GXV2',fld:'vGXV2'},{av:'AV88SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV16Tipo',fld:'vTIPO'},{av:'AV15Modelo',fld:'vMODELO'},{av:'AV23Nivel',fld:'vNIVEL'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV113Pgmname',fld:'vPGMNAME'},{av:'AV75TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["'NOVACCONTABIL'"] = [[{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124},{av:'GRDCCONTABIL_nFirstRecordOnPage'},{av:'GRDCCONTABIL_nEOF'},{av:'subGrdccontabil_Rows'},{av:'gx.fn.getCtrlProperty("vTRADUTORINICIAL","Visible")',ctrl:'vTRADUTORINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTRADUTORFINAL","Visible")',ctrl:'vTRADUTORFINAL',prop:'Visible'},{av:'AV97BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV94BmpCContabilIni',fld:'vBMPCCONTABILINI'},{av:'AV95BmpCContabilFin',fld:'vBMPCCONTABILFIN'},{av:'AV99SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL'},{av:'AV43TradutorInicial',fld:'vTRADUTORINICIAL'},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL'},{av:'AV44TradutorFinal',fld:'vTRADUTORFINAL'},{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV59EmpresaPadraoPag',fld:'vEMPRESAPADRAOPAG'},{av:'A93PaginacaoNumeroBalancete',fld:'PAGINACAONUMEROBALANCETE'},{av:'A92PaginacaoQuantidadeBalancete',fld:'PAGINACAOQUANTIDADEBALANCETE'},{av:'AV113Pgmname',fld:'vPGMNAME'},{av:'AV91SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV75TxtTela',fld:'vTXTTELA'}],[{av:'AV96SdtSelecaoCContabilItem',fld:'vSDTSELECAOCCONTABILITEM'},{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124},{av:'AV40TemMascara',fld:'vTEMMASCARA'},{av:'this.HDMASKCCONTABILINIContainer.AttachControl',ctrl:'HDMASKCCONTABILINI',prop:'AttachControl'},{av:'AV105MascaraValores',fld:'vMASCARAVALORES'},{av:'this.HDMASKCCONTABILINIContainer.Picture',ctrl:'HDMASKCCONTABILINI',prop:'Picture'},{av:'this.HDMASKCCONTABILFINContainer.AttachControl',ctrl:'HDMASKCCONTABILFIN',prop:'AttachControl'},{av:'this.HDMASKCCONTABILFINContainer.Picture',ctrl:'HDMASKCCONTABILFIN',prop:'Picture'}]];
   this.EvtParms["'EXCLUIRCCONTABIL'"] = [[{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124},{av:'AV99SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL',grid:124},{av:'AV43TradutorInicial',fld:'vTRADUTORINICIAL',grid:124},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL',grid:124},{av:'AV44TradutorFinal',fld:'vTRADUTORFINAL',grid:124},{av:'GRDCCONTABIL_nFirstRecordOnPage'},{av:'GRDCCONTABIL_nEOF'},{av:'subGrdccontabil_Rows'},{av:'gx.fn.getCtrlProperty("vTRADUTORINICIAL","Visible")',ctrl:'vTRADUTORINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTRADUTORFINAL","Visible")',ctrl:'vTRADUTORFINAL',prop:'Visible'},{av:'AV97BmpExc',fld:'vBMPEXC',grid:124},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV94BmpCContabilIni',fld:'vBMPCCONTABILINI',grid:124},{av:'AV95BmpCContabilFin',fld:'vBMPCCONTABILFIN',grid:124},{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV59EmpresaPadraoPag',fld:'vEMPRESAPADRAOPAG'},{av:'A93PaginacaoNumeroBalancete',fld:'PAGINACAONUMEROBALANCETE'},{av:'A92PaginacaoQuantidadeBalancete',fld:'PAGINACAOQUANTIDADEBALANCETE'},{av:'AV113Pgmname',fld:'vPGMNAME'},{av:'AV91SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV75TxtTela',fld:'vTXTTELA'}],[{av:'AV98Idx',fld:'vIDX'},{av:'AV99SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124},{av:'AV100ContGrid',fld:'vCONTGRID'},{av:'AV103ContSdt',fld:'vCONTSDT'},{av:'AV123GXV4',fld:'vGXV4'},{av:'AV96SdtSelecaoCContabilItem',fld:'vSDTSELECAOCCONTABILITEM'}]];
   this.EvtParms["GRDCCONTABIL.LOAD"] = [[{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124}],[{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL'},{av:'AV43TradutorInicial',fld:'vTRADUTORINICIAL'},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL'},{av:'AV44TradutorFinal',fld:'vTRADUTORFINAL'}]];
   this.EvtParms["GRDCCONTABIL_FIRSTPAGE"] = [[{av:'GRDCCONTABIL_nFirstRecordOnPage'},{av:'GRDCCONTABIL_nEOF'},{av:'subGrdccontabil_Rows'},{av:'gx.fn.getCtrlProperty("vTRADUTORINICIAL","Visible")',ctrl:'vTRADUTORINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTRADUTORFINAL","Visible")',ctrl:'vTRADUTORFINAL',prop:'Visible'},{av:'AV97BmpExc',fld:'vBMPEXC',grid:124},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV94BmpCContabilIni',fld:'vBMPCCONTABILINI',grid:124},{av:'AV95BmpCContabilFin',fld:'vBMPCCONTABILFIN',grid:124},{av:'AV99SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL',grid:124},{av:'AV43TradutorInicial',fld:'vTRADUTORINICIAL',grid:124},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL',grid:124},{av:'AV44TradutorFinal',fld:'vTRADUTORFINAL',grid:124},{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV59EmpresaPadraoPag',fld:'vEMPRESAPADRAOPAG'},{av:'A93PaginacaoNumeroBalancete',fld:'PAGINACAONUMEROBALANCETE'},{av:'A92PaginacaoQuantidadeBalancete',fld:'PAGINACAOQUANTIDADEBALANCETE'},{av:'AV113Pgmname',fld:'vPGMNAME'},{av:'AV91SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV75TxtTela',fld:'vTXTTELA'},{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124}],[{av:'AV100ContGrid',fld:'vCONTGRID'},{av:'AV103ContSdt',fld:'vCONTSDT'},{av:'AV123GXV4',fld:'vGXV4'},{av:'AV96SdtSelecaoCContabilItem',fld:'vSDTSELECAOCCONTABILITEM'},{av:'AV57PaginacaoNumeroBalancete',fld:'vPAGINACAONUMEROBALANCETE'},{av:'AV58PaginacaoQuantidadeBalancete',fld:'vPAGINACAOQUANTIDADEBALANCETE'},{av:'AV75TxtTela',fld:'vTXTTELA'},{av:'AV118GXV3',fld:'vGXV3'},{av:'AV88SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV40TemMascara',fld:'vTEMMASCARA'},{av:'this.HDMASKCCONTABILINIContainer.AttachControl',ctrl:'HDMASKCCONTABILINI',prop:'AttachControl'},{av:'AV105MascaraValores',fld:'vMASCARAVALORES'},{av:'this.HDMASKCCONTABILINIContainer.Picture',ctrl:'HDMASKCCONTABILINI',prop:'Picture'},{av:'this.HDMASKCCONTABILFINContainer.AttachControl',ctrl:'HDMASKCCONTABILFIN',prop:'AttachControl'},{av:'this.HDMASKCCONTABILFINContainer.Picture',ctrl:'HDMASKCCONTABILFIN',prop:'Picture'},{av:'AV117GXV2',fld:'vGXV2'},{av:'AV16Tipo',fld:'vTIPO'},{av:'AV15Modelo',fld:'vMODELO'},{av:'AV23Nivel',fld:'vNIVEL'}]];
   this.EvtParms["GRDCCONTABIL_PREVPAGE"] = [[{av:'GRDCCONTABIL_nFirstRecordOnPage'},{av:'GRDCCONTABIL_nEOF'},{av:'subGrdccontabil_Rows'},{av:'gx.fn.getCtrlProperty("vTRADUTORINICIAL","Visible")',ctrl:'vTRADUTORINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTRADUTORFINAL","Visible")',ctrl:'vTRADUTORFINAL',prop:'Visible'},{av:'AV97BmpExc',fld:'vBMPEXC',grid:124},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV94BmpCContabilIni',fld:'vBMPCCONTABILINI',grid:124},{av:'AV95BmpCContabilFin',fld:'vBMPCCONTABILFIN',grid:124},{av:'AV99SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL',grid:124},{av:'AV43TradutorInicial',fld:'vTRADUTORINICIAL',grid:124},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL',grid:124},{av:'AV44TradutorFinal',fld:'vTRADUTORFINAL',grid:124},{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV59EmpresaPadraoPag',fld:'vEMPRESAPADRAOPAG'},{av:'A93PaginacaoNumeroBalancete',fld:'PAGINACAONUMEROBALANCETE'},{av:'A92PaginacaoQuantidadeBalancete',fld:'PAGINACAOQUANTIDADEBALANCETE'},{av:'AV113Pgmname',fld:'vPGMNAME'},{av:'AV91SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV75TxtTela',fld:'vTXTTELA'},{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124}],[{av:'AV100ContGrid',fld:'vCONTGRID'},{av:'AV103ContSdt',fld:'vCONTSDT'},{av:'AV123GXV4',fld:'vGXV4'},{av:'AV96SdtSelecaoCContabilItem',fld:'vSDTSELECAOCCONTABILITEM'},{av:'AV57PaginacaoNumeroBalancete',fld:'vPAGINACAONUMEROBALANCETE'},{av:'AV58PaginacaoQuantidadeBalancete',fld:'vPAGINACAOQUANTIDADEBALANCETE'},{av:'AV75TxtTela',fld:'vTXTTELA'},{av:'AV118GXV3',fld:'vGXV3'},{av:'AV88SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV40TemMascara',fld:'vTEMMASCARA'},{av:'this.HDMASKCCONTABILINIContainer.AttachControl',ctrl:'HDMASKCCONTABILINI',prop:'AttachControl'},{av:'AV105MascaraValores',fld:'vMASCARAVALORES'},{av:'this.HDMASKCCONTABILINIContainer.Picture',ctrl:'HDMASKCCONTABILINI',prop:'Picture'},{av:'this.HDMASKCCONTABILFINContainer.AttachControl',ctrl:'HDMASKCCONTABILFIN',prop:'AttachControl'},{av:'this.HDMASKCCONTABILFINContainer.Picture',ctrl:'HDMASKCCONTABILFIN',prop:'Picture'},{av:'AV117GXV2',fld:'vGXV2'},{av:'AV16Tipo',fld:'vTIPO'},{av:'AV15Modelo',fld:'vMODELO'},{av:'AV23Nivel',fld:'vNIVEL'}]];
   this.EvtParms["GRDCCONTABIL_NEXTPAGE"] = [[{av:'GRDCCONTABIL_nFirstRecordOnPage'},{av:'GRDCCONTABIL_nEOF'},{av:'subGrdccontabil_Rows'},{av:'gx.fn.getCtrlProperty("vTRADUTORINICIAL","Visible")',ctrl:'vTRADUTORINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTRADUTORFINAL","Visible")',ctrl:'vTRADUTORFINAL',prop:'Visible'},{av:'AV97BmpExc',fld:'vBMPEXC',grid:124},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV94BmpCContabilIni',fld:'vBMPCCONTABILINI',grid:124},{av:'AV95BmpCContabilFin',fld:'vBMPCCONTABILFIN',grid:124},{av:'AV99SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL',grid:124},{av:'AV43TradutorInicial',fld:'vTRADUTORINICIAL',grid:124},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL',grid:124},{av:'AV44TradutorFinal',fld:'vTRADUTORFINAL',grid:124},{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV59EmpresaPadraoPag',fld:'vEMPRESAPADRAOPAG'},{av:'A93PaginacaoNumeroBalancete',fld:'PAGINACAONUMEROBALANCETE'},{av:'A92PaginacaoQuantidadeBalancete',fld:'PAGINACAOQUANTIDADEBALANCETE'},{av:'AV113Pgmname',fld:'vPGMNAME'},{av:'AV91SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV75TxtTela',fld:'vTXTTELA'},{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124}],[{av:'AV100ContGrid',fld:'vCONTGRID'},{av:'AV103ContSdt',fld:'vCONTSDT'},{av:'AV123GXV4',fld:'vGXV4'},{av:'AV96SdtSelecaoCContabilItem',fld:'vSDTSELECAOCCONTABILITEM'},{av:'AV57PaginacaoNumeroBalancete',fld:'vPAGINACAONUMEROBALANCETE'},{av:'AV58PaginacaoQuantidadeBalancete',fld:'vPAGINACAOQUANTIDADEBALANCETE'},{av:'AV75TxtTela',fld:'vTXTTELA'},{av:'AV118GXV3',fld:'vGXV3'},{av:'AV88SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV40TemMascara',fld:'vTEMMASCARA'},{av:'this.HDMASKCCONTABILINIContainer.AttachControl',ctrl:'HDMASKCCONTABILINI',prop:'AttachControl'},{av:'AV105MascaraValores',fld:'vMASCARAVALORES'},{av:'this.HDMASKCCONTABILINIContainer.Picture',ctrl:'HDMASKCCONTABILINI',prop:'Picture'},{av:'this.HDMASKCCONTABILFINContainer.AttachControl',ctrl:'HDMASKCCONTABILFIN',prop:'AttachControl'},{av:'this.HDMASKCCONTABILFINContainer.Picture',ctrl:'HDMASKCCONTABILFIN',prop:'Picture'},{av:'AV117GXV2',fld:'vGXV2'},{av:'AV16Tipo',fld:'vTIPO'},{av:'AV15Modelo',fld:'vMODELO'},{av:'AV23Nivel',fld:'vNIVEL'}]];
   this.EvtParms["GRDCCONTABIL_LASTPAGE"] = [[{av:'GRDCCONTABIL_nFirstRecordOnPage'},{av:'GRDCCONTABIL_nEOF'},{av:'subGrdccontabil_Rows'},{av:'gx.fn.getCtrlProperty("vTRADUTORINICIAL","Visible")',ctrl:'vTRADUTORINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTRADUTORFINAL","Visible")',ctrl:'vTRADUTORFINAL',prop:'Visible'},{av:'AV97BmpExc',fld:'vBMPEXC',grid:124},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV94BmpCContabilIni',fld:'vBMPCCONTABILINI',grid:124},{av:'AV95BmpCContabilFin',fld:'vBMPCCONTABILFIN',grid:124},{av:'AV99SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV19ContaContabilInicial',fld:'vCONTACONTABILINICIAL',grid:124},{av:'AV43TradutorInicial',fld:'vTRADUTORINICIAL',grid:124},{av:'AV20ContaContabilFinal',fld:'vCONTACONTABILFINAL',grid:124},{av:'AV44TradutorFinal',fld:'vTRADUTORFINAL',grid:124},{av:'A82EmpresaPaginacaoEmpresaId',fld:'EMPRESAPAGINACAOEMPRESAID'},{av:'AV59EmpresaPadraoPag',fld:'vEMPRESAPADRAOPAG'},{av:'A93PaginacaoNumeroBalancete',fld:'PAGINACAONUMEROBALANCETE'},{av:'A92PaginacaoQuantidadeBalancete',fld:'PAGINACAOQUANTIDADEBALANCETE'},{av:'AV113Pgmname',fld:'vPGMNAME'},{av:'AV91SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV75TxtTela',fld:'vTXTTELA'},{av:'AV93SdtSelecaoCContabil',fld:'vSDTSELECAOCCONTABIL',grid:124}],[{av:'AV100ContGrid',fld:'vCONTGRID'},{av:'AV103ContSdt',fld:'vCONTSDT'},{av:'AV123GXV4',fld:'vGXV4'},{av:'AV96SdtSelecaoCContabilItem',fld:'vSDTSELECAOCCONTABILITEM'},{av:'AV57PaginacaoNumeroBalancete',fld:'vPAGINACAONUMEROBALANCETE'},{av:'AV58PaginacaoQuantidadeBalancete',fld:'vPAGINACAOQUANTIDADEBALANCETE'},{av:'AV75TxtTela',fld:'vTXTTELA'},{av:'AV118GXV3',fld:'vGXV3'},{av:'AV88SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV40TemMascara',fld:'vTEMMASCARA'},{av:'this.HDMASKCCONTABILINIContainer.AttachControl',ctrl:'HDMASKCCONTABILINI',prop:'AttachControl'},{av:'AV105MascaraValores',fld:'vMASCARAVALORES'},{av:'this.HDMASKCCONTABILINIContainer.Picture',ctrl:'HDMASKCCONTABILINI',prop:'Picture'},{av:'this.HDMASKCCONTABILFINContainer.AttachControl',ctrl:'HDMASKCCONTABILFIN',prop:'AttachControl'},{av:'this.HDMASKCCONTABILFINContainer.Picture',ctrl:'HDMASKCCONTABILFIN',prop:'Picture'},{av:'AV117GXV2',fld:'vGXV2'},{av:'AV16Tipo',fld:'vTIPO'},{av:'AV15Modelo',fld:'vMODELO'},{av:'AV23Nivel',fld:'vNIVEL'}]];
   this.setPrompt("&BMPCCONTABILINI", [125,126]);
   this.setPrompt("&BMPCCONTABILFIN", [128,129]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV99SnExcluirLinha", "vSNEXCLUIRLINHA", 0, "char");
   this.setVCMap("AV93SdtSelecaoCContabil", "vSDTSELECAOCCONTABIL", 0, "CollSdtSelecaoCContabil.SdtSelecaoCContabilItem");
   this.setVCMap("A82EmpresaPaginacaoEmpresaId", "EMPRESAPAGINACAOEMPRESAID", 0, "char");
   this.setVCMap("AV59EmpresaPadraoPag", "vEMPRESAPADRAOPAG", 0, "char");
   this.setVCMap("A93PaginacaoNumeroBalancete", "PAGINACAONUMEROBALANCETE", 0, "int");
   this.setVCMap("A92PaginacaoQuantidadeBalancete", "PAGINACAOQUANTIDADEBALANCETE", 0, "int");
   this.setVCMap("AV113Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV91SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV99SnExcluirLinha", "vSNEXCLUIRLINHA", 0, "char");
   this.setVCMap("AV93SdtSelecaoCContabil", "vSDTSELECAOCCONTABIL", 0, "CollSdtSelecaoCContabil.SdtSelecaoCContabilItem");
   this.setVCMap("A82EmpresaPaginacaoEmpresaId", "EMPRESAPAGINACAOEMPRESAID", 0, "char");
   this.setVCMap("AV59EmpresaPadraoPag", "vEMPRESAPADRAOPAG", 0, "char");
   this.setVCMap("A93PaginacaoNumeroBalancete", "PAGINACAONUMEROBALANCETE", 0, "int");
   this.setVCMap("A92PaginacaoQuantidadeBalancete", "PAGINACAOQUANTIDADEBALANCETE", 0, "int");
   this.setVCMap("AV113Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV91SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV43TradutorInicial", rfrProp:"Visible", gxAttId:"Tradutorinicial"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV44TradutorFinal", rfrProp:"Visible", gxAttId:"Tradutorfinal"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV97BmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV97BmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV94BmpCContabilIni", rfrProp:"Value", gxAttId:"Bmpccontabilini"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV95BmpCContabilFin", rfrProp:"Value", gxAttId:"Bmpccontabilfin"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV99SnExcluirLinha"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV93SdtSelecaoCContabil"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV19ContaContabilInicial", rfrProp:"Value", gxAttId:"Contacontabilinicial"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV43TradutorInicial", rfrProp:"Value", gxAttId:"Tradutorinicial"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV20ContaContabilFinal", rfrProp:"Value", gxAttId:"Contacontabilfinal"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV44TradutorFinal", rfrProp:"Value", gxAttId:"Tradutorfinal"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"A82EmpresaPaginacaoEmpresaId"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV59EmpresaPadraoPag"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"A93PaginacaoNumeroBalancete"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"A92PaginacaoQuantidadeBalancete"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV113Pgmname"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV91SdtTxtTela"});
   GrdccontabilContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GrdccontabilContainer.addRefreshingVar(this.GXValidFnc[13]);
   this.addGridBCProperty("Sdtselecaoccontabil", ["ContaContabilInicial"], this.GXValidFnc[132], "AV93SdtSelecaoCContabil");
   this.addGridBCProperty("Sdtselecaoccontabil", ["TradutorInicial"], this.GXValidFnc[133], "AV93SdtSelecaoCContabil");
   this.addGridBCProperty("Sdtselecaoccontabil", ["ContaContabilFinal"], this.GXValidFnc[134], "AV93SdtSelecaoCContabil");
   this.addGridBCProperty("Sdtselecaoccontabil", ["TradutorFinal"], this.GXValidFnc[135], "AV93SdtSelecaoCContabil");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbalanceteverificacao());
