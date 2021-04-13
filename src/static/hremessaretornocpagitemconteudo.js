/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:0:56.44
*/
gx.evt.autoSkip = false;
gx.define('hremessaretornocpagitemconteudo', false, function () {
   this.ServerClass =  "hremessaretornocpagitemconteudo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV45ChamouTipoCampo=gx.fn.getControlValue("vCHAMOUTIPOCAMPO") ;
      this.AV13tpErro=gx.fn.getIntegerValue("vTPERRO",'.') ;
      this.AV26Linha=gx.fn.getControlValue("vLINHA") ;
      this.AV11EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV73RemessaRetornoCPagId=gx.fn.getIntegerValue("vREMESSARETORNOCPAGID",'.') ;
      this.AV74RemessaRetornoCPagItemSeq=gx.fn.getIntegerValue("vREMESSARETORNOCPAGITEMSEQ",'.') ;
      this.AV75RemessaRetornoCPagItemTipo=gx.fn.getControlValue("vREMESSARETORNOCPAGITEMTIPO") ;
      this.AV76RemessaRetornoCPagTipo=gx.fn.getControlValue("vREMESSARETORNOCPAGTIPO") ;
   };
   this.Validv_Sequenciaitem01=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM01");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem02=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM02");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem03=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM03");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem04=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM04");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem05=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM05");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem06=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM06");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem07=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM07");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem08=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM08");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem09=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM09");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sequenciaitem10=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQUENCIAITEM10");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      if ( this.AV45ChamouTipoCampo == "S" )
      {
         this.AV45ChamouTipoCampo =  "N"  ;
         this.AV20TamanhoCampo = gx.num.trunc( 0 ,0) ;
         this.AV21TipoNumCar =  ""  ;
      }
      if ( this.AV12TipoCampo == "F" )
      {
         gx.fn.setCtrlProperty("TABLEFIXO","Visible", 1 );
         gx.fn.setCtrlProperty("TABLETABELA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECAMPO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECONTADOR","Visible", 0 );
         gx.fn.setCtrlProperty("TABLESISTEMA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETAMANHO","Visible", 1 );
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 0 );
         gx.fn.setCtrlProperty("vTIPONUMCAR","Enabled", 1 );
         if ( this.AV13tpErro == 0 )
         {
            gx.fn.usrSetFocus("vTEXTOFIXO") ;
         }
      }
      else if ( this.AV12TipoCampo == "T" )
      {
         gx.fn.setCtrlProperty("TABLETABELA","Visible", 1 );
         gx.fn.setCtrlProperty("TABLECAMPO","Visible", 1 );
         gx.fn.setCtrlProperty("TABLEFIXO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECONTADOR","Visible", 0 );
         gx.fn.setCtrlProperty("TABLESISTEMA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETAMANHO","Visible", 1 );
         gx.fn.setCtrlProperty("vTIPONUMCAR","Enabled", 1 );
         if ( this.AV13tpErro == 0 )
         {
            gx.fn.usrSetFocus("vTABELA") ;
         }
         this.s142_client();
      }
      else if ( this.AV12TipoCampo == "C" )
      {
         gx.fn.setCtrlProperty("TABLECONTADOR","Visible", 1 );
         gx.fn.setCtrlProperty("TABLETABELA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECAMPO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEFIXO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLESISTEMA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETAMANHO","Visible", 1 );
         this.AV21TipoNumCar =  "N"  ;
         gx.fn.setCtrlProperty("vTIPONUMCAR","Enabled", 0 );
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 0 );
         if ( this.AV13tpErro == 0 )
         {
            gx.fn.usrSetFocus("vSEQUENCIAITEM01") ;
         }
      }
      else if ( this.AV12TipoCampo == "S" )
      {
         gx.fn.setCtrlProperty("TABLESISTEMA","Visible", 1 );
         gx.fn.setCtrlProperty("TABLECONTADOR","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETABELA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECAMPO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLEFIXO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETAMANHO","Visible", 1 );
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 0 );
         gx.fn.setCtrlProperty("vTIPONUMCAR","Enabled", 1 );
         if ( this.AV13tpErro == 0 )
         {
            gx.fn.usrSetFocus("vOPCOESSISTEMA") ;
         }
      }
      else if ( this.AV12TipoCampo == "R" )
      {
         gx.fn.setCtrlProperty("TABLETABELA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECAMPO","Visible", 1 );
         gx.fn.setCtrlProperty("TABLEFIXO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECONTADOR","Visible", 0 );
         gx.fn.setCtrlProperty("TABLESISTEMA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETAMANHO","Visible", 1 );
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 0 );
         gx.fn.setCtrlProperty("vTIPONUMCAR","Enabled", 1 );
         if ( this.AV13tpErro == 0 )
         {
            gx.fn.usrSetFocus("vNOMECAMPO") ;
         }
      }
      else
      {
         gx.fn.setCtrlProperty("TABLEFIXO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETABELA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECAMPO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLECONTADOR","Visible", 0 );
         gx.fn.setCtrlProperty("TABLESISTEMA","Visible", 0 );
         gx.fn.setCtrlProperty("TABLETAMANHO","Visible", 0 );
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 0 );
      }
   };
   this.s142_client=function()
   {
      if ( this.AV16NomeCampo == "ContaPagRecVlrAtual" || this.AV16NomeCampo == "ContaPagRecVlrOriginal" )
      {
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 1 );
      }
      else
      {
         this.AV18Somatorio =  "N"  ;
         gx.fn.setCtrlProperty("TABLESOMAT","Visible", 0 );
      }
   };
   this.s152_client=function()
   {
      this.AV31Cont = gx.num.trunc( 0 ,0) ;
      this.AV12TipoCampo =  ""  ;
      this.AV14TextoFixo =  ""  ;
      this.AV15Tabela =  ""  ;
      this.AV16NomeCampo =  ""  ;
      this.AV18Somatorio =  "N"  ;
      this.AV34SequenciaItem01 = gx.num.trunc( 0 ,0) ;
      this.AV35SequenciaItem02 = gx.num.trunc( 0 ,0) ;
      this.AV36SequenciaItem03 = gx.num.trunc( 0 ,0) ;
      this.AV37SequenciaItem04 = gx.num.trunc( 0 ,0) ;
      this.AV38SequenciaItem05 = gx.num.trunc( 0 ,0) ;
      this.AV39SequenciaItem06 = gx.num.trunc( 0 ,0) ;
      this.AV40SequenciaItem07 = gx.num.trunc( 0 ,0) ;
      this.AV41SequenciaItem08 = gx.num.trunc( 0 ,0) ;
      this.AV42SequenciaItem09 = gx.num.trunc( 0 ,0) ;
      this.AV43SequenciaItem10 = gx.num.trunc( 0 ,0) ;
      this.AV19OpcoesSistema =  ""  ;
      this.AV20TamanhoCampo = gx.num.trunc( 0 ,0) ;
      this.AV21TipoNumCar =  ""  ;
   };
   this.s172_client=function()
   {
      if ( this.AV12TipoCampo == "F" )
      {
         this.AV30Conteudo.Valor =  this.AV14TextoFixo  ;
         this.AV30Conteudo.Tipo =  "F"  ;
         this.AV30Conteudo.Tamanho = gx.num.trunc( this.AV20TamanhoCampo ,0) ;
         this.AV30Conteudo.NumCarac =  this.AV21TipoNumCar  ;
         this.AV30Conteudo.NumLinha = gx.num.trunc( 0 ,0) ;
      }
      else if ( this.AV12TipoCampo == "T" )
      {
         this.AV30Conteudo.Valor =  this.AV16NomeCampo  ;
         this.AV30Conteudo.Tipo =  "T"  ;
         this.AV30Conteudo.Tabela =  this.AV15Tabela  ;
         this.AV30Conteudo.Tamanho = gx.num.trunc( this.AV20TamanhoCampo ,0) ;
         if ( this.AV15Tabela == "C" )
         {
            this.AV30Conteudo.SnSomatorio =  this.AV18Somatorio  ;
         }
         else
         {
            this.AV30Conteudo.SnSomatorio =  ""  ;
         }
         this.AV30Conteudo.NumCarac =  this.AV21TipoNumCar  ;
         this.AV30Conteudo.NumLinha = gx.num.trunc( this.AV70LinhaMsg ,0) ;
      }
      else if ( this.AV12TipoCampo == "C" )
      {
         this.AV44ValorAuxiliar =  ""  ;
         if ( ! (0==this.AV34SequenciaItem01) )
         {
            this.AV44ValorAuxiliar =  gx.text.trim( gx.num.str( this.AV34SequenciaItem01, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV35SequenciaItem02) )
         {
            this.AV44ValorAuxiliar =  this.AV44ValorAuxiliar + gx.text.trim( gx.num.str( this.AV35SequenciaItem02, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV36SequenciaItem03) )
         {
            this.AV44ValorAuxiliar =  this.AV44ValorAuxiliar + gx.text.trim( gx.num.str( this.AV36SequenciaItem03, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV37SequenciaItem04) )
         {
            this.AV44ValorAuxiliar =  this.AV44ValorAuxiliar + gx.text.trim( gx.num.str( this.AV37SequenciaItem04, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV38SequenciaItem05) )
         {
            this.AV44ValorAuxiliar =  this.AV44ValorAuxiliar + gx.text.trim( gx.num.str( this.AV38SequenciaItem05, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV39SequenciaItem06) )
         {
            this.AV44ValorAuxiliar =  this.AV44ValorAuxiliar + gx.text.trim( gx.num.str( this.AV39SequenciaItem06, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV40SequenciaItem07) )
         {
            this.AV44ValorAuxiliar =  this.AV44ValorAuxiliar + gx.text.trim( gx.num.str( this.AV40SequenciaItem07, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV41SequenciaItem08) )
         {
            this.AV44ValorAuxiliar =  this.AV44ValorAuxiliar + gx.text.trim( gx.num.str( this.AV41SequenciaItem08, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV42SequenciaItem09) )
         {
            this.AV44ValorAuxiliar =  this.AV44ValorAuxiliar + gx.text.trim( gx.num.str( this.AV42SequenciaItem09, 4, 0)) + " "  ;
         }
         if ( ! (0==this.AV43SequenciaItem10) )
         {
            this.AV44ValorAuxiliar =  this.AV44ValorAuxiliar + gx.text.trim( gx.num.str( this.AV43SequenciaItem10, 4, 0))  ;
         }
         this.AV44ValorAuxiliar =  gx.text.rtrim( this.AV44ValorAuxiliar)  ;
         this.AV30Conteudo.Valor =  this.AV44ValorAuxiliar  ;
         this.AV30Conteudo.Tipo =  "C"  ;
         this.AV30Conteudo.Tamanho = gx.num.trunc( this.AV20TamanhoCampo ,0) ;
         this.AV30Conteudo.NumCarac =  this.AV21TipoNumCar  ;
      }
      else if ( this.AV12TipoCampo == "S" )
      {
         if ( this.AV19OpcoesSistema == "1" )
         {
            this.AV30Conteudo.Valor =  "Data"  ;
         }
         if ( this.AV19OpcoesSistema == "2" )
         {
            this.AV30Conteudo.Valor =  "Hora"  ;
         }
         if ( this.AV19OpcoesSistema == "3" )
         {
            this.AV30Conteudo.Valor =  "Sequência Lote"  ;
         }
         if ( this.AV19OpcoesSistema == "4" )
         {
            this.AV30Conteudo.Valor =  "Sequência Detalhe"  ;
         }
         if ( this.AV19OpcoesSistema == "5" )
         {
            this.AV30Conteudo.Valor =  "Sequência Remessa"  ;
         }
         if ( this.AV19OpcoesSistema == "6" )
         {
            this.AV30Conteudo.Valor =  "Sequência Registro"  ;
         }
         this.AV30Conteudo.Tipo =  "S"  ;
         this.AV30Conteudo.Tamanho = gx.num.trunc( this.AV20TamanhoCampo ,0) ;
         this.AV30Conteudo.NumCarac =  this.AV21TipoNumCar  ;
      }
      else
      {
         this.AV30Conteudo.Valor =  this.AV16NomeCampo  ;
         this.AV30Conteudo.Tipo =  "R"  ;
         this.AV30Conteudo.Tamanho = gx.num.trunc( this.AV20TamanhoCampo ,0) ;
         this.AV30Conteudo.NumCarac =  this.AV21TipoNumCar  ;
         this.AV30Conteudo.NumLinha = gx.num.trunc( this.AV70LinhaMsg ,0) ;
      }
   };
   this.e11w52_client=function()
   {
      this.executeServerEvent("VTIPOCAMPO.CLICK", true, null, false, true);
   };
   this.e12w52_client=function()
   {
      this.executeServerEvent("VTABELA.CLICK", true, null, false, true);
   };
   this.e13w52_client=function()
   {
      this.executeServerEvent("'SALVAR'", false, null, false, false);
   };
   this.e21w52_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22w52_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e14w52_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15w52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e23w52_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e24w52_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e16w52_client=function()
   {
      this.executeServerEvent("VNOMECAMPO.CLICK", true, null, false, true);
   };
   this.e17w52_client=function()
   {
      this.executeServerEvent("'NOVOITEM'", false, null, false, false);
   };
   this.e25w52_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,12,13,14,15,18,20,21,24,26,27,30,32,33,36,37,40,42,43,44,45,46,47,48,49,50,51,52,55,57,58,61,63,66,68,71,81,83,84,85,86,87,88,89,90,91,92,93,94,95,96,102];
   this.GXLastCtrlId =102;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",82,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hremessaretornocpagitemconteudo",[],false,1,true,true,0,true,false,false,"SdtRemessaRetorno.Linha",0,"px","Novo registro",true,false,false,null,null,false,"AV26Linha",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV12B",83,"CTLVALOR","Valor","","GXV12B","char",0,"px",200,80,"left",null,[],"GXV12B","GXV12B",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Tipocampogrid",84,"vTIPOCAMPOGRID","Tipo","","TipoCampoGrid","char",0,"px",16,16,"left",null,[],"Tipocampogrid","TipoCampoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV12D",85,"CTLTAMANHO","Tamanho","","GXV12D","int",0,"px",4,4,"right",null,[],"GXV12D","GXV12D",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12E",86,"CTLCONTADOR","Contador","","GXV12E","int",0,"px",4,4,"right",null,[],"GXV12E","GXV12E",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12F",87,"CTLTIPO","Tipo","","GXV12F","char",0,"px",1,1,"left",null,[],"GXV12F","GXV12F",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12G",88,"CTLTABELA","Tabela","","GXV12G","char",0,"px",1,1,"left",null,[],"GXV12G","GXV12G",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12H",89,"CTLSNSOMATORIO","Sn Somatorio","","GXV12H","char",0,"px",1,1,"left",null,[],"GXV12H","GXV12H",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV12I",90,"CTLNUMCARAC","Num Carac","","GXV12I","char",0,"px",1,1,"left",null,[],"GXV12I","GXV12I",false,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpalt","vBMPALT",91,0,"px",17,"px","e21w52_client","","Alterar","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",92,0,"px",17,"px","e22w52_client","","Excluir","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpsobe","vBMPSOBE",93,0,"px",17,"px","e23w52_client","","Sobe","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpdesc","vBMPDESC",94,0,"px",17,"px","e24w52_client","","Desce","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLETIPOCAMPO",grid:0};
   GXValidFnc[9]={fld:"TXTTIPOCAMPO", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCAMPO",gxz:"ZV12TipoCampo",gxold:"OV12TipoCampo",gxvar:"AV12TipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12TipoCampo=Value},v2z:function(Value){gx.O.ZV12TipoCampo=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCAMPO",gx.O.AV12TipoCampo)},c2v:function(){gx.O.AV12TipoCampo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCAMPO")},nac:gx.falseFn};
   GXValidFnc[12]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTADOR",gxz:"ZV28Contador",gxold:"OV28Contador",gxvar:"AV28Contador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Contador=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28Contador=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTADOR",gx.O.AV28Contador,0)},c2v:function(){gx.O.AV28Contador=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTADOR",'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONT",gxz:"ZV31Cont",gxold:"OV31Cont",gxvar:"AV31Cont",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Cont=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31Cont=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONT",gx.O.AV31Cont,0)},c2v:function(){gx.O.AV31Cont=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONT",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARMAZENATAMANHO",gxz:"ZV52ArmazenaTamanho",gxold:"OV52ArmazenaTamanho",gxvar:"AV52ArmazenaTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52ArmazenaTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52ArmazenaTamanho=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vARMAZENATAMANHO",gx.O.AV52ArmazenaTamanho,0)},c2v:function(){gx.O.AV52ArmazenaTamanho=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vARMAZENATAMANHO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TABLEFIXO",grid:0};
   GXValidFnc[18]={fld:"TXTFIXO", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTEXTOFIXO",gxz:"ZV14TextoFixo",gxold:"OV14TextoFixo",gxvar:"AV14TextoFixo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14TextoFixo=Value},v2z:function(Value){gx.O.ZV14TextoFixo=Value},v2c:function(){gx.fn.setControlValue("vTEXTOFIXO",gx.O.AV14TextoFixo,0)},c2v:function(){gx.O.AV14TextoFixo=this.val()},val:function(){return gx.fn.getControlValue("vTEXTOFIXO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TABLETABELA",grid:0};
   GXValidFnc[24]={fld:"TXTTABELA", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTABELA",gxz:"ZV15Tabela",gxold:"OV15Tabela",gxvar:"AV15Tabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15Tabela=Value},v2z:function(Value){gx.O.ZV15Tabela=Value},v2c:function(){gx.fn.setComboBoxValue("vTABELA",gx.O.AV15Tabela)},c2v:function(){gx.O.AV15Tabela=this.val()},val:function(){return gx.fn.getControlValue("vTABELA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLECAMPO",grid:0};
   GXValidFnc[30]={fld:"TXTCAMPO", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO",gxz:"ZV16NomeCampo",gxold:"OV16NomeCampo",gxvar:"AV16NomeCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"listbx",v2v:function(Value){gx.O.AV16NomeCampo=Value},v2z:function(Value){gx.O.ZV16NomeCampo=Value},v2c:function(){gx.fn.setComboBoxValue("vNOMECAMPO",gx.O.AV16NomeCampo)},c2v:function(){gx.O.AV16NomeCampo=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLESOMAT",grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOMATORIO",gxz:"ZV18Somatorio",gxold:"OV18Somatorio",gxvar:"AV18Somatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18Somatorio=Value},v2z:function(Value){gx.O.ZV18Somatorio=Value},v2c:function(){gx.fn.setCheckBoxValue("vSOMATORIO",gx.O.AV18Somatorio,"S")},c2v:function(){gx.O.AV18Somatorio=this.val()},val:function(){return gx.fn.getControlValue("vSOMATORIO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={fld:"TABLECONTADOR",grid:0};
   GXValidFnc[40]={fld:"TXTSEQUENCIA", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem01,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM01",gxz:"ZV34SequenciaItem01",gxold:"OV34SequenciaItem01",gxvar:"AV34SequenciaItem01",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34SequenciaItem01=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34SequenciaItem01=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM01",gx.O.AV34SequenciaItem01,0)},c2v:function(){gx.O.AV34SequenciaItem01=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM01",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem02,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM02",gxz:"ZV35SequenciaItem02",gxold:"OV35SequenciaItem02",gxvar:"AV35SequenciaItem02",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35SequenciaItem02=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35SequenciaItem02=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM02",gx.O.AV35SequenciaItem02,0)},c2v:function(){gx.O.AV35SequenciaItem02=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM02",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem03,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM03",gxz:"ZV36SequenciaItem03",gxold:"OV36SequenciaItem03",gxvar:"AV36SequenciaItem03",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36SequenciaItem03=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36SequenciaItem03=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM03",gx.O.AV36SequenciaItem03,0)},c2v:function(){gx.O.AV36SequenciaItem03=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM03",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem04,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM04",gxz:"ZV37SequenciaItem04",gxold:"OV37SequenciaItem04",gxvar:"AV37SequenciaItem04",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37SequenciaItem04=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37SequenciaItem04=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM04",gx.O.AV37SequenciaItem04,0)},c2v:function(){gx.O.AV37SequenciaItem04=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM04",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem05,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM05",gxz:"ZV38SequenciaItem05",gxold:"OV38SequenciaItem05",gxvar:"AV38SequenciaItem05",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38SequenciaItem05=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38SequenciaItem05=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM05",gx.O.AV38SequenciaItem05,0)},c2v:function(){gx.O.AV38SequenciaItem05=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM05",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem06,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM06",gxz:"ZV39SequenciaItem06",gxold:"OV39SequenciaItem06",gxvar:"AV39SequenciaItem06",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39SequenciaItem06=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39SequenciaItem06=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM06",gx.O.AV39SequenciaItem06,0)},c2v:function(){gx.O.AV39SequenciaItem06=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM06",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem07,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM07",gxz:"ZV40SequenciaItem07",gxold:"OV40SequenciaItem07",gxvar:"AV40SequenciaItem07",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40SequenciaItem07=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40SequenciaItem07=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM07",gx.O.AV40SequenciaItem07,0)},c2v:function(){gx.O.AV40SequenciaItem07=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM07",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem08,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM08",gxz:"ZV41SequenciaItem08",gxold:"OV41SequenciaItem08",gxvar:"AV41SequenciaItem08",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41SequenciaItem08=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41SequenciaItem08=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM08",gx.O.AV41SequenciaItem08,0)},c2v:function(){gx.O.AV41SequenciaItem08=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM08",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem09,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM09",gxz:"ZV42SequenciaItem09",gxold:"OV42SequenciaItem09",gxvar:"AV42SequenciaItem09",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42SequenciaItem09=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42SequenciaItem09=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM09",gx.O.AV42SequenciaItem09,0)},c2v:function(){gx.O.AV42SequenciaItem09=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM09",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sequenciaitem10,isvalid:null,rgrid:[],fld:"vSEQUENCIAITEM10",gxz:"ZV43SequenciaItem10",gxold:"OV43SequenciaItem10",gxvar:"AV43SequenciaItem10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43SequenciaItem10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43SequenciaItem10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAITEM10",gx.O.AV43SequenciaItem10,0)},c2v:function(){gx.O.AV43SequenciaItem10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAITEM10",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLESISTEMA",grid:0};
   GXValidFnc[55]={fld:"TXTOPSISTEMA", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCOESSISTEMA",gxz:"ZV19OpcoesSistema",gxold:"OV19OpcoesSistema",gxvar:"AV19OpcoesSistema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19OpcoesSistema=Value},v2z:function(Value){gx.O.ZV19OpcoesSistema=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCOESSISTEMA",gx.O.AV19OpcoesSistema)},c2v:function(){gx.O.AV19OpcoesSistema=this.val()},val:function(){return gx.fn.getControlValue("vOPCOESSISTEMA")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLETAMANHO",grid:0};
   GXValidFnc[61]={fld:"TXTTAMANHO", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTAMANHOCAMPO",gxz:"ZV20TamanhoCampo",gxold:"OV20TamanhoCampo",gxvar:"AV20TamanhoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20TamanhoCampo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20TamanhoCampo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTAMANHOCAMPO",gx.O.AV20TamanhoCampo,0)},c2v:function(){gx.O.AV20TamanhoCampo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTAMANHOCAMPO",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TXTTIPO", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPONUMCAR",gxz:"ZV21TipoNumCar",gxold:"OV21TipoNumCar",gxvar:"AV21TipoNumCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21TipoNumCar=Value},v2z:function(Value){gx.O.ZV21TipoNumCar=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPONUMCAR",gx.O.AV21TipoNumCar)},c2v:function(){gx.O.AV21TipoNumCar=this.val()},val:function(){return gx.fn.getControlValue("vTIPONUMCAR")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TABLE2",grid:0};
   GXValidFnc[81]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[83]={lvl:2,type:"char",len:200,dec:0,sign:false,ro:0,isacc:0,grid:82,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALOR",gxz:"ZV82GXV12B",gxold:"OV82GXV12B",gxvar:"GXV12B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12B=Value},v2z:function(Value){gx.O.ZV82GXV12B=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVALOR",row || gx.fn.currentGridRowImpl(82),gx.O.GXV12B,0)},c2v:function(){gx.O.GXV12B=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVALOR",row || gx.fn.currentGridRowImpl(82))},nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"char",len:16,dec:0,sign:false,ro:0,isacc:0,grid:82,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCAMPOGRID",gxz:"ZV27TipoCampoGrid",gxold:"OV27TipoCampoGrid",gxvar:"AV27TipoCampoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV27TipoCampoGrid=Value},v2z:function(Value){gx.O.ZV27TipoCampoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOCAMPOGRID",row || gx.fn.currentGridRowImpl(82),gx.O.AV27TipoCampoGrid,0)},c2v:function(){gx.O.AV27TipoCampoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOCAMPOGRID",row || gx.fn.currentGridRowImpl(82))},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:82,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTAMANHO",gxz:"ZV83GXV12D",gxold:"OV83GXV12D",gxvar:"GXV12D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12D=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83GXV12D=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLTAMANHO",row || gx.fn.currentGridRowImpl(82),gx.O.GXV12D,0)},c2v:function(){gx.O.GXV12D=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLTAMANHO",row || gx.fn.currentGridRowImpl(82),'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:82,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTADOR",gxz:"ZV84GXV12E",gxold:"OV84GXV12E",gxvar:"GXV12E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12E=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV84GXV12E=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTADOR",row || gx.fn.currentGridRowImpl(82),gx.O.GXV12E,0)},c2v:function(){gx.O.GXV12E=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCONTADOR",row || gx.fn.currentGridRowImpl(82),'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:82,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPO",gxz:"ZV85GXV12F",gxold:"OV85GXV12F",gxvar:"GXV12F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12F=Value},v2z:function(Value){gx.O.ZV85GXV12F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPO",row || gx.fn.currentGridRowImpl(82),gx.O.GXV12F,0)},c2v:function(){gx.O.GXV12F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPO",row || gx.fn.currentGridRowImpl(82))},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:82,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTABELA",gxz:"ZV86GXV12G",gxold:"OV86GXV12G",gxvar:"GXV12G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12G=Value},v2z:function(Value){gx.O.ZV86GXV12G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTABELA",row || gx.fn.currentGridRowImpl(82),gx.O.GXV12G,0)},c2v:function(){gx.O.GXV12G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTABELA",row || gx.fn.currentGridRowImpl(82))},nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:82,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNSOMATORIO",gxz:"ZV87GXV12H",gxold:"OV87GXV12H",gxvar:"GXV12H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12H=Value},v2z:function(Value){gx.O.ZV87GXV12H=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSNSOMATORIO",row || gx.fn.currentGridRowImpl(82),gx.O.GXV12H,0)},c2v:function(){gx.O.GXV12H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNSOMATORIO",row || gx.fn.currentGridRowImpl(82))},nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:82,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMCARAC",gxz:"ZV88GXV12I",gxold:"OV88GXV12I",gxvar:"GXV12I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12I=Value},v2z:function(Value){gx.O.ZV88GXV12I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNUMCARAC",row || gx.fn.currentGridRowImpl(82),gx.O.GXV12I,0)},c2v:function(){gx.O.GXV12I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNUMCARAC",row || gx.fn.currentGridRowImpl(82))},nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:82,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV24bmpAlt",gxold:"OV24bmpAlt",gxvar:"AV24bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24bmpAlt=Value},v2z:function(Value){gx.O.ZV24bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(82),gx.O.AV24bmpAlt,gx.O.AV91Bmpalt_GXI)},c2v:function(){gx.O.AV91Bmpalt_GXI=this.val_GXI();gx.O.AV24bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(82))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(82))}, gxvar_GXI:'AV91Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:82,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV22bmpExc",gxold:"OV22bmpExc",gxvar:"AV22bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpExc=Value},v2z:function(Value){gx.O.ZV22bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(82),gx.O.AV22bmpExc,gx.O.AV92Bmpexc_GXI)},c2v:function(){gx.O.AV92Bmpexc_GXI=this.val_GXI();gx.O.AV22bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(82))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(82))}, gxvar_GXI:'AV92Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:82,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOBE",gxz:"ZV53bmpSobe",gxold:"OV53bmpSobe",gxvar:"AV53bmpSobe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV53bmpSobe=Value},v2z:function(Value){gx.O.ZV53bmpSobe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(82),gx.O.AV53bmpSobe,gx.O.AV93Bmpsobe_GXI)},c2v:function(){gx.O.AV93Bmpsobe_GXI=this.val_GXI();gx.O.AV53bmpSobe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(82))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOBE_GXI",row || gx.fn.currentGridRowImpl(82))}, gxvar_GXI:'AV93Bmpsobe_GXI',nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:82,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESC",gxz:"ZV54bmpDesc",gxold:"OV54bmpDesc",gxvar:"AV54bmpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV54bmpDesc=Value},v2z:function(Value){gx.O.ZV54bmpDesc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESC",row || gx.fn.currentGridRowImpl(82),gx.O.AV54bmpDesc,gx.O.AV94Bmpdesc_GXI)},c2v:function(){gx.O.AV94Bmpdesc_GXI=this.val_GXI();gx.O.AV54bmpDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESC",row || gx.fn.currentGridRowImpl(82))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESC_GXI",row || gx.fn.currentGridRowImpl(82))}, gxvar_GXI:'AV94Bmpdesc_GXI',nac:gx.falseFn};
   GXValidFnc[95]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[96]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNOCPAGITEMCONTEUDO",gxz:"ZV78RemessaRetornoCPagItemConteudo",gxold:"OV78RemessaRetornoCPagItemConteudo",gxvar:"AV78RemessaRetornoCPagItemConteudo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78RemessaRetornoCPagItemConteudo=Value},v2z:function(Value){gx.O.ZV78RemessaRetornoCPagItemConteudo=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOCPAGITEMCONTEUDO",gx.O.AV78RemessaRetornoCPagItemConteudo,0)},c2v:function(){gx.O.AV78RemessaRetornoCPagItemConteudo=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNOCPAGITEMCONTEUDO")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TABLE3",grid:0};
   this.AV12TipoCampo = "" ;
   this.ZV12TipoCampo = "" ;
   this.OV12TipoCampo = "" ;
   this.AV28Contador = 0 ;
   this.ZV28Contador = 0 ;
   this.OV28Contador = 0 ;
   this.AV31Cont = 0 ;
   this.ZV31Cont = 0 ;
   this.OV31Cont = 0 ;
   this.AV52ArmazenaTamanho = 0 ;
   this.ZV52ArmazenaTamanho = 0 ;
   this.OV52ArmazenaTamanho = 0 ;
   this.AV14TextoFixo = "" ;
   this.ZV14TextoFixo = "" ;
   this.OV14TextoFixo = "" ;
   this.AV15Tabela = "" ;
   this.ZV15Tabela = "" ;
   this.OV15Tabela = "" ;
   this.AV16NomeCampo = "" ;
   this.ZV16NomeCampo = "" ;
   this.OV16NomeCampo = "" ;
   this.AV18Somatorio = "" ;
   this.ZV18Somatorio = "" ;
   this.OV18Somatorio = "" ;
   this.AV34SequenciaItem01 = 0 ;
   this.ZV34SequenciaItem01 = 0 ;
   this.OV34SequenciaItem01 = 0 ;
   this.AV35SequenciaItem02 = 0 ;
   this.ZV35SequenciaItem02 = 0 ;
   this.OV35SequenciaItem02 = 0 ;
   this.AV36SequenciaItem03 = 0 ;
   this.ZV36SequenciaItem03 = 0 ;
   this.OV36SequenciaItem03 = 0 ;
   this.AV37SequenciaItem04 = 0 ;
   this.ZV37SequenciaItem04 = 0 ;
   this.OV37SequenciaItem04 = 0 ;
   this.AV38SequenciaItem05 = 0 ;
   this.ZV38SequenciaItem05 = 0 ;
   this.OV38SequenciaItem05 = 0 ;
   this.AV39SequenciaItem06 = 0 ;
   this.ZV39SequenciaItem06 = 0 ;
   this.OV39SequenciaItem06 = 0 ;
   this.AV40SequenciaItem07 = 0 ;
   this.ZV40SequenciaItem07 = 0 ;
   this.OV40SequenciaItem07 = 0 ;
   this.AV41SequenciaItem08 = 0 ;
   this.ZV41SequenciaItem08 = 0 ;
   this.OV41SequenciaItem08 = 0 ;
   this.AV42SequenciaItem09 = 0 ;
   this.ZV42SequenciaItem09 = 0 ;
   this.OV42SequenciaItem09 = 0 ;
   this.AV43SequenciaItem10 = 0 ;
   this.ZV43SequenciaItem10 = 0 ;
   this.OV43SequenciaItem10 = 0 ;
   this.AV19OpcoesSistema = "" ;
   this.ZV19OpcoesSistema = "" ;
   this.OV19OpcoesSistema = "" ;
   this.AV20TamanhoCampo = 0 ;
   this.ZV20TamanhoCampo = 0 ;
   this.OV20TamanhoCampo = 0 ;
   this.AV21TipoNumCar = "" ;
   this.ZV21TipoNumCar = "" ;
   this.OV21TipoNumCar = "" ;
   this.ZV82GXV12B = "" ;
   this.OV82GXV12B = "" ;
   this.ZV27TipoCampoGrid = "" ;
   this.OV27TipoCampoGrid = "" ;
   this.ZV83GXV12D = 0 ;
   this.OV83GXV12D = 0 ;
   this.ZV84GXV12E = 0 ;
   this.OV84GXV12E = 0 ;
   this.ZV85GXV12F = "" ;
   this.OV85GXV12F = "" ;
   this.ZV86GXV12G = "" ;
   this.OV86GXV12G = "" ;
   this.ZV87GXV12H = "" ;
   this.OV87GXV12H = "" ;
   this.ZV88GXV12I = "" ;
   this.OV88GXV12I = "" ;
   this.ZV24bmpAlt = "" ;
   this.OV24bmpAlt = "" ;
   this.ZV22bmpExc = "" ;
   this.OV22bmpExc = "" ;
   this.ZV53bmpSobe = "" ;
   this.OV53bmpSobe = "" ;
   this.ZV54bmpDesc = "" ;
   this.OV54bmpDesc = "" ;
   this.AV78RemessaRetornoCPagItemConteudo = "" ;
   this.ZV78RemessaRetornoCPagItemConteudo = "" ;
   this.OV78RemessaRetornoCPagItemConteudo = "" ;
   this.AV12TipoCampo = "" ;
   this.AV28Contador = 0 ;
   this.AV31Cont = 0 ;
   this.AV52ArmazenaTamanho = 0 ;
   this.AV14TextoFixo = "" ;
   this.AV15Tabela = "" ;
   this.AV16NomeCampo = "" ;
   this.AV18Somatorio = "" ;
   this.AV34SequenciaItem01 = 0 ;
   this.AV35SequenciaItem02 = 0 ;
   this.AV36SequenciaItem03 = 0 ;
   this.AV37SequenciaItem04 = 0 ;
   this.AV38SequenciaItem05 = 0 ;
   this.AV39SequenciaItem06 = 0 ;
   this.AV40SequenciaItem07 = 0 ;
   this.AV41SequenciaItem08 = 0 ;
   this.AV42SequenciaItem09 = 0 ;
   this.AV43SequenciaItem10 = 0 ;
   this.AV19OpcoesSistema = "" ;
   this.AV20TamanhoCampo = 0 ;
   this.AV21TipoNumCar = "" ;
   this.AV78RemessaRetornoCPagItemConteudo = "" ;
   this.AV11EmpresaPadrao = "" ;
   this.AV73RemessaRetornoCPagId = 0 ;
   this.AV74RemessaRetornoCPagItemSeq = 0 ;
   this.AV75RemessaRetornoCPagItemTipo = "" ;
   this.AV76RemessaRetornoCPagTipo = "" ;
   this.GXV12B = "" ;
   this.AV27TipoCampoGrid = "" ;
   this.GXV12D = 0 ;
   this.GXV12E = 0 ;
   this.GXV12F = "" ;
   this.GXV12G = "" ;
   this.GXV12H = "" ;
   this.GXV12I = "" ;
   this.AV24bmpAlt = "" ;
   this.AV22bmpExc = "" ;
   this.AV53bmpSobe = "" ;
   this.AV54bmpDesc = "" ;
   this.A5472RemessaRetornoCPagItemSeq = 0 ;
   this.A5463RemessaRetornoCPagId = 0 ;
   this.A5462RemessaRetornoCPagEmpresaId = "" ;
   this.AV45ChamouTipoCampo = "" ;
   this.AV13tpErro = 0 ;
   this.AV26Linha = {} ;
   this.AV44ValorAuxiliar = "" ;
   this.AV70LinhaMsg = 0 ;
   this.AV30Conteudo = {} ;
   this.Events = {"e11w52_client": ["VTIPOCAMPO.CLICK", true] ,"e12w52_client": ["VTABELA.CLICK", true] ,"e13w52_client": ["'SALVAR'", true] ,"e21w52_client": ["'ALTERAR'", true] ,"e22w52_client": ["'EXCLUIR'", true] ,"e14w52_client": ["ENTER", true] ,"e15w52_client": ["'FECHAR'", true] ,"e23w52_client": ["'SUBIR'", true] ,"e24w52_client": ["'DESCER'", true] ,"e16w52_client": ["VNOMECAMPO.CLICK", true] ,"e17w52_client": ["'NOVOITEM'", true] ,"e25w52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV26Linha',fld:'vLINHA',grid:82},{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV34SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'}],[{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'}]];
   this.EvtParms["VTIPOCAMPO.CLICK"] = [[{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV34SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'}],[{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'}]];
   this.EvtParms["VTABELA.CLICK"] = [[{av:'AV15Tabela',fld:'vTABELA'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'}],[{av:'AV16NomeCampo',fld:'vNOMECAMPO'}]];
   this.EvtParms["VNOMECAMPO.CLICK"] = [[{av:'AV16NomeCampo',fld:'vNOMECAMPO'}],[{av:'AV18Somatorio',fld:'vSOMATORIO'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV26Linha',fld:'vLINHA',grid:82}],[{av:'AV24bmpAlt',fld:'vBMPALT'},{av:'AV22bmpExc',fld:'vBMPEXC'},{av:'AV53bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV54bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV30Conteudo',fld:'vCONTEUDO'},{av:'AV27TipoCampoGrid',fld:'vTIPOCAMPOGRID'}]];
   this.EvtParms["'NOVOITEM'"] = [[],[{av:'AV31Cont',fld:'vCONT'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'},{av:'AV34SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV35SequenciaItem02',fld:'vSEQUENCIAITEM02'},{av:'AV36SequenciaItem03',fld:'vSEQUENCIAITEM03'},{av:'AV37SequenciaItem04',fld:'vSEQUENCIAITEM04'},{av:'AV38SequenciaItem05',fld:'vSEQUENCIAITEM05'},{av:'AV39SequenciaItem06',fld:'vSEQUENCIAITEM06'},{av:'AV40SequenciaItem07',fld:'vSEQUENCIAITEM07'},{av:'AV41SequenciaItem08',fld:'vSEQUENCIAITEM08'},{av:'AV42SequenciaItem09',fld:'vSEQUENCIAITEM09'},{av:'AV43SequenciaItem10',fld:'vSEQUENCIAITEM10'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'}]];
   this.EvtParms["'SALVAR'"] = [[{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV26Linha',fld:'vLINHA',grid:82},{av:'AV31Cont',fld:'vCONT'},{av:'AV28Contador',fld:'vCONTADOR'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV34SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV35SequenciaItem02',fld:'vSEQUENCIAITEM02'},{av:'AV36SequenciaItem03',fld:'vSEQUENCIAITEM03'},{av:'AV37SequenciaItem04',fld:'vSEQUENCIAITEM04'},{av:'AV38SequenciaItem05',fld:'vSEQUENCIAITEM05'},{av:'AV39SequenciaItem06',fld:'vSEQUENCIAITEM06'},{av:'AV40SequenciaItem07',fld:'vSEQUENCIAITEM07'},{av:'AV41SequenciaItem08',fld:'vSEQUENCIAITEM08'},{av:'AV42SequenciaItem09',fld:'vSEQUENCIAITEM09'},{av:'AV43SequenciaItem10',fld:'vSEQUENCIAITEM10'},{av:'A5462RemessaRetornoCPagEmpresaId',fld:'REMESSARETORNOCPAGEMPRESAID'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO',hsh:true},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'AV73RemessaRetornoCPagId',fld:'vREMESSARETORNOCPAGID',hsh:true},{av:'A5472RemessaRetornoCPagItemSeq',fld:'REMESSARETORNOCPAGITEMSEQ'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'AV30Conteudo',fld:'vCONTEUDO'},{av:'AV18Somatorio',fld:'vSOMATORIO'},{av:'AV70LinhaMsg',fld:'vLINHAMSG'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'}],[{av:'AV32SnEncontrou',fld:'vSNENCONTROU'},{av:'AV95GXV4',fld:'vGXV4'},{av:'AV30Conteudo',fld:'vCONTEUDO'},{av:'AV28Contador',fld:'vCONTADOR'},{av:'AV26Linha',fld:'vLINHA',grid:82},{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV97GXLvl604',fld:'vGXLVL604'},{av:'AV98GXLvl617',fld:'vGXLVL617'},{av:'AV99GXLvl630',fld:'vGXLVL630'},{av:'AV100GXLvl643',fld:'vGXLVL643'},{av:'AV101GXLvl656',fld:'vGXLVL656'},{av:'AV102GXLvl669',fld:'vGXLVL669'},{av:'AV103GXLvl682',fld:'vGXLVL682'},{av:'AV104GXLvl695',fld:'vGXLVL695'},{av:'AV105GXLvl708',fld:'vGXLVL708'},{av:'AV106GXLvl721',fld:'vGXLVL721'},{av:'AV44ValorAuxiliar',fld:'vVALORAUXILIAR'},{av:'AV78RemessaRetornoCPagItemConteudo',fld:'vREMESSARETORNOCPAGITEMCONTEUDO'},{av:'AV96GXV5',fld:'vGXV5'},{av:'AV31Cont',fld:'vCONT'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'},{av:'AV34SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV35SequenciaItem02',fld:'vSEQUENCIAITEM02'},{av:'AV36SequenciaItem03',fld:'vSEQUENCIAITEM03'},{av:'AV37SequenciaItem04',fld:'vSEQUENCIAITEM04'},{av:'AV38SequenciaItem05',fld:'vSEQUENCIAITEM05'},{av:'AV39SequenciaItem06',fld:'vSEQUENCIAITEM06'},{av:'AV40SequenciaItem07',fld:'vSEQUENCIAITEM07'},{av:'AV41SequenciaItem08',fld:'vSEQUENCIAITEM08'},{av:'AV42SequenciaItem09',fld:'vSEQUENCIAITEM09'},{av:'AV43SequenciaItem10',fld:'vSEQUENCIAITEM10'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV26Linha',fld:'vLINHA',grid:82},{av:'AV34SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV35SequenciaItem02',fld:'vSEQUENCIAITEM02'},{av:'AV36SequenciaItem03',fld:'vSEQUENCIAITEM03'},{av:'AV37SequenciaItem04',fld:'vSEQUENCIAITEM04'},{av:'AV38SequenciaItem05',fld:'vSEQUENCIAITEM05'},{av:'AV39SequenciaItem06',fld:'vSEQUENCIAITEM06'},{av:'AV40SequenciaItem07',fld:'vSEQUENCIAITEM07'},{av:'AV41SequenciaItem08',fld:'vSEQUENCIAITEM08'},{av:'AV42SequenciaItem09',fld:'vSEQUENCIAITEM09'},{av:'AV47PosIni',fld:'vPOSINI'},{av:'AV43SequenciaItem10',fld:'vSEQUENCIAITEM10'},{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'}],[{av:'AV30Conteudo',fld:'vCONTEUDO'},{av:'AV31Cont',fld:'vCONT'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'},{av:'AV34SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV35SequenciaItem02',fld:'vSEQUENCIAITEM02'},{av:'AV36SequenciaItem03',fld:'vSEQUENCIAITEM03'},{av:'AV37SequenciaItem04',fld:'vSEQUENCIAITEM04'},{av:'AV38SequenciaItem05',fld:'vSEQUENCIAITEM05'},{av:'AV39SequenciaItem06',fld:'vSEQUENCIAITEM06'},{av:'AV40SequenciaItem07',fld:'vSEQUENCIAITEM07'},{av:'AV41SequenciaItem08',fld:'vSEQUENCIAITEM08'},{av:'AV42SequenciaItem09',fld:'vSEQUENCIAITEM09'},{av:'AV43SequenciaItem10',fld:'vSEQUENCIAITEM10'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'AV70LinhaMsg',fld:'vLINHAMSG'},{av:'AV44ValorAuxiliar',fld:'vVALORAUXILIAR'},{av:'AV51ControlePosicao',fld:'vCONTROLEPOSICAO'},{av:'AV48QtdeCaracteres',fld:'vQTDECARACTERES'},{av:'AV49i',fld:'vI'},{av:'AV50c',fld:'vC'},{av:'AV46PosFim',fld:'vPOSFIM'},{av:'AV47PosIni',fld:'vPOSINI'},{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV26Linha',fld:'vLINHA',grid:82},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV34SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'}],[{av:'AV26Linha',fld:'vLINHA',grid:82},{av:'AV78RemessaRetornoCPagItemConteudo',fld:'vREMESSARETORNOCPAGITEMCONTEUDO'},{av:'AV96GXV5',fld:'vGXV5'},{av:'AV30Conteudo',fld:'vCONTEUDO'},{av:'AV44ValorAuxiliar',fld:'vVALORAUXILIAR'}]];
   this.EvtParms["ENTER"] = [[{av:'AV25SnConfirma',fld:'vSNCONFIRMA'},{av:'AV26Linha',fld:'vLINHA',grid:82},{av:'AV52ArmazenaTamanho',fld:'vARMAZENATAMANHO'},{av:'AV78RemessaRetornoCPagItemConteudo',fld:'vREMESSARETORNOCPAGITEMCONTEUDO'}],[{av:'AV25SnConfirma',fld:'vSNCONFIRMA'},{av:'AV107GXV6',fld:'vGXV6'},{av:'AV30Conteudo',fld:'vCONTEUDO'},{av:'AV52ArmazenaTamanho',fld:'vARMAZENATAMANHO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV25SnConfirma',fld:'vSNCONFIRMA'},{av:'AV26Linha',fld:'vLINHA',grid:82},{av:'AV52ArmazenaTamanho',fld:'vARMAZENATAMANHO'},{av:'AV78RemessaRetornoCPagItemConteudo',fld:'vREMESSARETORNOCPAGITEMCONTEUDO'}],[{av:'AV25SnConfirma',fld:'vSNCONFIRMA'},{av:'AV107GXV6',fld:'vGXV6'},{av:'AV30Conteudo',fld:'vCONTEUDO'},{av:'AV52ArmazenaTamanho',fld:'vARMAZENATAMANHO'}]];
   this.EvtParms["'SUBIR'"] = [[{av:'AV26Linha',fld:'vLINHA',grid:82},{av:'AV63TamanhoOrigem',fld:'vTAMANHOORIGEM'},{av:'AV64TipoOrigem',fld:'vTIPOORIGEM'},{av:'AV65ValorOrigem',fld:'vVALORORIGEM'},{av:'AV66TabelaOrigem',fld:'vTABELAORIGEM'},{av:'AV67SnSomatorioOrigem',fld:'vSNSOMATORIOORIGEM'},{av:'AV68NumCaracOrigem',fld:'vNUMCARACORIGEM'},{av:'AV72NumLinhaOrigem',fld:'vNUMLINHAORIGEM'},{av:'AV57TamanhoDestino',fld:'vTAMANHODESTINO'},{av:'AV58TipoDestino',fld:'vTIPODESTINO'},{av:'AV59ValorDestino',fld:'vVALORDESTINO'},{av:'AV60TabelaDestino',fld:'vTABELADESTINO'},{av:'AV61SnSomatorioDestino',fld:'vSNSOMATORIODESTINO'},{av:'AV62NumCaracDestino',fld:'vNUMCARACDESTINO'},{av:'AV71NumLinhaDestino',fld:'vNUMLINHADESTINO'}],[{av:'AV55Origem',fld:'vORIGEM'},{av:'AV56Destino',fld:'vDESTINO'},{av:'AV108GXV7',fld:'vGXV7'},{av:'AV30Conteudo',fld:'vCONTEUDO'},{av:'AV57TamanhoDestino',fld:'vTAMANHODESTINO'},{av:'AV58TipoDestino',fld:'vTIPODESTINO'},{av:'AV59ValorDestino',fld:'vVALORDESTINO'},{av:'AV60TabelaDestino',fld:'vTABELADESTINO'},{av:'AV61SnSomatorioDestino',fld:'vSNSOMATORIODESTINO'},{av:'AV62NumCaracDestino',fld:'vNUMCARACDESTINO'},{av:'AV71NumLinhaDestino',fld:'vNUMLINHADESTINO'},{av:'AV63TamanhoOrigem',fld:'vTAMANHOORIGEM'},{av:'AV64TipoOrigem',fld:'vTIPOORIGEM'},{av:'AV65ValorOrigem',fld:'vVALORORIGEM'},{av:'AV66TabelaOrigem',fld:'vTABELAORIGEM'},{av:'AV67SnSomatorioOrigem',fld:'vSNSOMATORIOORIGEM'},{av:'AV68NumCaracOrigem',fld:'vNUMCARACORIGEM'},{av:'AV72NumLinhaOrigem',fld:'vNUMLINHAORIGEM'},{av:'AV109GXV8',fld:'vGXV8'},{av:'AV78RemessaRetornoCPagItemConteudo',fld:'vREMESSARETORNOCPAGITEMCONTEUDO'},{av:'AV96GXV5',fld:'vGXV5'},{av:'AV44ValorAuxiliar',fld:'vVALORAUXILIAR'}]];
   this.EvtParms["'DESCER'"] = [[{av:'AV26Linha',fld:'vLINHA',grid:82},{av:'AV57TamanhoDestino',fld:'vTAMANHODESTINO'},{av:'AV58TipoDestino',fld:'vTIPODESTINO'},{av:'AV59ValorDestino',fld:'vVALORDESTINO'},{av:'AV60TabelaDestino',fld:'vTABELADESTINO'},{av:'AV61SnSomatorioDestino',fld:'vSNSOMATORIODESTINO'},{av:'AV62NumCaracDestino',fld:'vNUMCARACDESTINO'},{av:'AV71NumLinhaDestino',fld:'vNUMLINHADESTINO'},{av:'AV63TamanhoOrigem',fld:'vTAMANHOORIGEM'},{av:'AV64TipoOrigem',fld:'vTIPOORIGEM'},{av:'AV65ValorOrigem',fld:'vVALORORIGEM'},{av:'AV66TabelaOrigem',fld:'vTABELAORIGEM'},{av:'AV67SnSomatorioOrigem',fld:'vSNSOMATORIOORIGEM'},{av:'AV68NumCaracOrigem',fld:'vNUMCARACORIGEM'},{av:'AV72NumLinhaOrigem',fld:'vNUMLINHAORIGEM'}],[{av:'AV69SnExiste',fld:'vSNEXISTE'},{av:'AV55Origem',fld:'vORIGEM'},{av:'AV56Destino',fld:'vDESTINO'},{av:'AV110GXV9',fld:'vGXV9'},{av:'AV30Conteudo',fld:'vCONTEUDO'},{av:'AV63TamanhoOrigem',fld:'vTAMANHOORIGEM'},{av:'AV64TipoOrigem',fld:'vTIPOORIGEM'},{av:'AV65ValorOrigem',fld:'vVALORORIGEM'},{av:'AV66TabelaOrigem',fld:'vTABELAORIGEM'},{av:'AV67SnSomatorioOrigem',fld:'vSNSOMATORIOORIGEM'},{av:'AV68NumCaracOrigem',fld:'vNUMCARACORIGEM'},{av:'AV72NumLinhaOrigem',fld:'vNUMLINHAORIGEM'},{av:'AV57TamanhoDestino',fld:'vTAMANHODESTINO'},{av:'AV58TipoDestino',fld:'vTIPODESTINO'},{av:'AV59ValorDestino',fld:'vVALORDESTINO'},{av:'AV60TabelaDestino',fld:'vTABELADESTINO'},{av:'AV61SnSomatorioDestino',fld:'vSNSOMATORIODESTINO'},{av:'AV62NumCaracDestino',fld:'vNUMCARACDESTINO'},{av:'AV71NumLinhaDestino',fld:'vNUMLINHADESTINO'},{av:'AV111GXV10',fld:'vGXV10'},{av:'AV78RemessaRetornoCPagItemConteudo',fld:'vREMESSARETORNOCPAGITEMCONTEUDO'},{av:'AV96GXV5',fld:'vGXV5'},{av:'AV44ValorAuxiliar',fld:'vVALORAUXILIAR'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV34SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV26Linha',fld:'vLINHA',grid:82}],[{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV34SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV26Linha',fld:'vLINHA',grid:82}],[{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV34SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV26Linha',fld:'vLINHA',grid:82}],[{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV12TipoCampo',fld:'vTIPOCAMPO'},{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV14TextoFixo',fld:'vTEXTOFIXO'},{av:'AV15Tabela',fld:'vTABELA'},{av:'AV34SequenciaItem01',fld:'vSEQUENCIAITEM01'},{av:'AV19OpcoesSistema',fld:'vOPCOESSISTEMA'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV26Linha',fld:'vLINHA',grid:82}],[{av:'AV45ChamouTipoCampo',fld:'vCHAMOUTIPOCAMPO'},{av:'AV20TamanhoCampo',fld:'vTAMANHOCAMPO'},{av:'AV21TipoNumCar',fld:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLESOMAT","Visible")',ctrl:'TABLESOMAT',prop:'Visible'},{ctrl:'vTIPONUMCAR'},{av:'gx.fn.getCtrlProperty("TABLEFIXO","Visible")',ctrl:'TABLEFIXO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETABELA","Visible")',ctrl:'TABLETABELA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECAMPO","Visible")',ctrl:'TABLECAMPO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLECONTADOR","Visible")',ctrl:'TABLECONTADOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLESISTEMA","Visible")',ctrl:'TABLESISTEMA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLETAMANHO","Visible")',ctrl:'TABLETAMANHO',prop:'Visible'},{av:'AV16NomeCampo',fld:'vNOMECAMPO'},{av:'AV18Somatorio',fld:'vSOMATORIO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV45ChamouTipoCampo", "vCHAMOUTIPOCAMPO", 0, "char");
   this.setVCMap("AV13tpErro", "vTPERRO", 0, "int");
   this.setVCMap("AV26Linha", "vLINHA", 0, "SdtRemessaRetorno.Linha");
   this.setVCMap("AV11EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV73RemessaRetornoCPagId", "vREMESSARETORNOCPAGID", 0, "int");
   this.setVCMap("AV74RemessaRetornoCPagItemSeq", "vREMESSARETORNOCPAGITEMSEQ", 0, "int");
   this.setVCMap("AV75RemessaRetornoCPagItemTipo", "vREMESSARETORNOCPAGITEMTIPO", 0, "char");
   this.setVCMap("AV76RemessaRetornoCPagTipo", "vREMESSARETORNOCPAGTIPO", 0, "char");
   this.setVCMap("AV45ChamouTipoCampo", "vCHAMOUTIPOCAMPO", 0, "char");
   this.setVCMap("AV13tpErro", "vTPERRO", 0, "int");
   this.setVCMap("AV26Linha", "vLINHA", 0, "SdtRemessaRetorno.Linha");
   Grid1Container.addRefreshingVar({rfrVar:"AV45ChamouTipoCampo"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[11]);
   Grid1Container.addRefreshingVar({rfrVar:"AV13tpErro"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[20]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[26]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[42]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[57]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[32]);
   Grid1Container.addRefreshingVar({rfrVar:"AV26Linha"});
   this.addGridBCProperty("Linha", ["Conteudo", "Valor"], this.GXValidFnc[83], "AV26Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "Tamanho"], this.GXValidFnc[85], "AV26Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "Contador"], this.GXValidFnc[86], "AV26Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "Tipo"], this.GXValidFnc[87], "AV26Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "Tabela"], this.GXValidFnc[88], "AV26Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "SnSomatorio"], this.GXValidFnc[89], "AV26Linha");
   this.addGridBCProperty("Linha", ["Conteudo", "NumCarac"], this.GXValidFnc[90], "AV26Linha");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hremessaretornocpagitemconteudo());
