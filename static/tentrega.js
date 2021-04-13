/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:35:6.92
*/
gx.evt.autoSkip = false;
gx.define('tentrega', false, function () {
   this.ServerClass =  "tentrega" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
      this.A6063SaidaValorServico=gx.fn.getDecimalValue("SAIDAVALORSERVICO",'.',',') ;
      this.A6064SaidaValorProduto=gx.fn.getDecimalValue("SAIDAVALORPRODUTO",'.',',') ;
      this.A6065SaidaValorDesconto=gx.fn.getDecimalValue("SAIDAVALORDESCONTO",'.',',') ;
      this.A6076SaidaValorICMSST=gx.fn.getDecimalValue("SAIDAVALORICMSST",'.',',') ;
      this.A6068SaidaValorSeguro=gx.fn.getDecimalValue("SAIDAVALORSEGURO",'.',',') ;
      this.A6069SaidaValorOutrasDespesas=gx.fn.getDecimalValue("SAIDAVALOROUTRASDESPESAS",'.',',') ;
      this.A6077SaidaValorIPI=gx.fn.getDecimalValue("SAIDAVALORIPI",'.',',') ;
      this.A6067SaidaValorFrete=gx.fn.getDecimalValue("SAIDAVALORFRETE",'.',',') ;
      this.A6092SaidaFreteEntraTotal=gx.fn.getControlValue("SAIDAFRETEENTRATOTAL") ;
      this.A10677SaidaValorFCPST=gx.fn.getDecimalValue("SAIDAVALORFCPST",'.',',') ;
      this.A10671SaidaValorICMSDesonerado=gx.fn.getDecimalValue("SAIDAVALORICMSDESONERADO",'.',',') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Entregaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entreganumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entreganumero",["gx.O.A11296EntregaSaidaTipoFaturamento", "gx.O.A10854EntregaCidadeEndEntregaUF", "gx.O.A10808EntregaEmpresaId", "gx.O.A10809EntregaNumero", "gx.O.A10849EntregaCliente", "gx.O.A10833EntregaEnderecoEntrega", "gx.O.A10834EntregaNumeroEndEntrega", "gx.O.A10835EntregaComplementoEndEntrega", "gx.O.A10836EntregaBairroEndEntrega", "gx.O.A10837EntregaCEPEndEntrega", "gx.O.A10838EntregaTipoServico", "gx.O.A10830EntregaSituacao", "gx.O.A10839EntregaObsServico", 'gx.date.urlDateTime(gx.O.A10848EntregaDataHoraSaidaEntrega,"DMY4")', 'gx.date.urlDate(gx.O.A10840EntregaDataAcertoEntregador,"DMY4")', "gx.num.urlDecimal(gx.O.A10841EntregaValorAcertoEntregador,\'.\',\',\')", 'gx.date.urlDateTime(gx.O.A10847EntregaDataHoraRetornoEntrega,"DMY4")', "gx.num.urlDecimal(gx.O.A10842EntregaValorTroco,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10843EntregaValorTaxaEntrega,\'.\',\',\')", "gx.O.A10844EntregaObsEntrega", 'gx.date.urlDateTime(gx.O.A10850EntregaDataHoraEntrega,"DMY4")', "gx.O.A10829EntregaUsuarioAlt", 'gx.date.urlDateTime(gx.O.A10855EntregaDataHoraAlt,"DMY4")', "gx.O.A10821EntregaClienteEmpresaId", "gx.O.A10822EntregaClienteId", "gx.O.A10820EntregaCidadeEndEntregaId", "gx.O.A10818EntregaSaidaEmpresaId", "gx.O.A10819EntregaSaidaId", "gx.O.A10816EntregaEntregadorEmpId", "gx.O.A10817EntregaEntregadorId", "gx.O.A10810EntregaLancCreTrocoEmpId", "gx.O.A10811EntregaLancCreTrocoNumero", "gx.O.A10812EntregaLancDebTrocoEmpId", "gx.O.A10813EntregaLancDebTrocoNumero", "gx.O.A10814EntregaLancTaxaEmpId", "gx.O.A10815EntregaLancTaxaNumero"],["A10821EntregaClienteEmpresaId", "A10822EntregaClienteId", "A10849EntregaCliente", "A10833EntregaEnderecoEntrega", "A10834EntregaNumeroEndEntrega", "A10835EntregaComplementoEndEntrega", "A10836EntregaBairroEndEntrega", "A10837EntregaCEPEndEntrega", "A10820EntregaCidadeEndEntregaId", "A10818EntregaSaidaEmpresaId", "A10819EntregaSaidaId", "A10838EntregaTipoServico", "A10830EntregaSituacao", "A10839EntregaObsServico", "A10848EntregaDataHoraSaidaEntrega", "A10816EntregaEntregadorEmpId", "A10817EntregaEntregadorId", "A10840EntregaDataAcertoEntregador", "A10841EntregaValorAcertoEntregador", "A10847EntregaDataHoraRetornoEntrega", "A10842EntregaValorTroco", "A10810EntregaLancCreTrocoEmpId", "A10811EntregaLancCreTrocoNumero", "A10812EntregaLancDebTrocoEmpId", "A10813EntregaLancDebTrocoNumero", "A10843EntregaValorTaxaEntrega", "A10814EntregaLancTaxaEmpId", "A10815EntregaLancTaxaNumero", "A10844EntregaObsEntrega", "A10850EntregaDataHoraEntrega", "A10829EntregaUsuarioAlt", "A10855EntregaDataHoraAlt", "A10832EntregaClienteNome", "A11182EntregaClienteRazSol", "A11192EntregaNomeCliente", "A10906EntregaClienteRota", "A10831EntregaCidadeEndEntregaNome", "A10854EntregaCidadeEndEntregaUF", "A10852EntregaSaidaData", "A11295EntregaSaidaHora", "A10851EntregaSaidaNoDocumento", "A11296EntregaSaidaTipoFaturamento", "A6063SaidaValorServico", "A6064SaidaValorProduto", "A6065SaidaValorDesconto", "A6076SaidaValorICMSST", "A6068SaidaValorSeguro", "A6069SaidaValorOutrasDespesas", "A6077SaidaValorIPI", "A6067SaidaValorFrete", "A6092SaidaFreteEntraTotal", "A10677SaidaValorFCPST", "A10671SaidaValorICMSDesonerado", "A10853EntregaSaidaValorTotal", "A10845EntregaEntregadorNome", "Gx_mode", "Z10808EntregaEmpresaId", "Z10809EntregaNumero", "Z10821EntregaClienteEmpresaId", "Z10822EntregaClienteId", "Z10849EntregaCliente", "Z10833EntregaEnderecoEntrega", "Z10834EntregaNumeroEndEntrega", "Z10835EntregaComplementoEndEntrega", "Z10836EntregaBairroEndEntrega", "Z10837EntregaCEPEndEntrega", "Z10820EntregaCidadeEndEntregaId", "Z10818EntregaSaidaEmpresaId", "Z10819EntregaSaidaId", "Z10838EntregaTipoServico", "Z10830EntregaSituacao", "Z10839EntregaObsServico", "Z10848EntregaDataHoraSaidaEntrega", "Z10816EntregaEntregadorEmpId", "Z10817EntregaEntregadorId", "Z10840EntregaDataAcertoEntregador", "Z10841EntregaValorAcertoEntregador", "Z10847EntregaDataHoraRetornoEntrega", "Z10842EntregaValorTroco", "Z10810EntregaLancCreTrocoEmpId", "Z10811EntregaLancCreTrocoNumero", "Z10812EntregaLancDebTrocoEmpId", "Z10813EntregaLancDebTrocoNumero", "Z10843EntregaValorTaxaEntrega", "Z10814EntregaLancTaxaEmpId", "Z10815EntregaLancTaxaNumero", "Z10844EntregaObsEntrega", "Z10850EntregaDataHoraEntrega", "Z10829EntregaUsuarioAlt", "Z10855EntregaDataHoraAlt", "Z10832EntregaClienteNome", "Z11182EntregaClienteRazSol", "Z11192EntregaNomeCliente", "Z10906EntregaClienteRota", "Z10831EntregaCidadeEndEntregaNome", "Z10854EntregaCidadeEndEntregaUF", "Z10852EntregaSaidaData", "Z11295EntregaSaidaHora", "Z10851EntregaSaidaNoDocumento", "Z11296EntregaSaidaTipoFaturamento", "Z6063SaidaValorServico", "Z6064SaidaValorProduto", "Z6065SaidaValorDesconto", "Z6076SaidaValorICMSST", "Z6068SaidaValorSeguro", "Z6069SaidaValorOutrasDespesas", "Z6077SaidaValorIPI", "Z6067SaidaValorFrete", "Z6092SaidaFreteEntraTotal", "Z10677SaidaValorFCPST", "Z10671SaidaValorICMSDesonerado", "Z10853EntregaSaidaValorTotal", "Z10845EntregaEntregadorNome", "Gridtentrega_ocorrencia", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Entregaclienteempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGACLIENTEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entregaclienteid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entregaclienteid",["gx.O.A10821EntregaClienteEmpresaId", "gx.O.A10822EntregaClienteId", "gx.O.A10832EntregaClienteNome", "gx.O.A11182EntregaClienteRazSol", "gx.O.A10906EntregaClienteRota"],["A10832EntregaClienteNome", "A11182EntregaClienteRazSol", "A10906EntregaClienteRota"]);
      return true;
   }
   this.Valid_Entregaclienterazsol=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGACLIENTERAZSOL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entregacliente=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGACLIENTE");
         this.AnyError  = 0;
         try {
            this.A11192EntregaNomeCliente =  ((0==this.A10822EntregaClienteId) ? this.A10849EntregaCliente : this.A11182EntregaClienteRazSol)  ;
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
   this.Valid_Entregacidadeendentregaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entregacidadeendentregaid",["gx.O.A10820EntregaCidadeEndEntregaId", "gx.O.A10831EntregaCidadeEndEntregaNome", "gx.O.A10854EntregaCidadeEndEntregaUF"],["A10831EntregaCidadeEndEntregaNome", "A10854EntregaCidadeEndEntregaUF"]);
      return true;
   }
   this.Valid_Entregasaidaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGASAIDAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entregasaidaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entregasaidaid",["gx.O.A10818EntregaSaidaEmpresaId", "gx.O.A10819EntregaSaidaId", "gx.num.urlDecimal(gx.O.A6063SaidaValorServico,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6064SaidaValorProduto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6065SaidaValorDesconto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6076SaidaValorICMSST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6068SaidaValorSeguro,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6069SaidaValorOutrasDespesas,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6077SaidaValorIPI,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6067SaidaValorFrete,\'.\',\',\')", "gx.O.A6092SaidaFreteEntraTotal", "gx.num.urlDecimal(gx.O.A10677SaidaValorFCPST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10671SaidaValorICMSDesonerado,\'.\',\',\')", 'gx.date.urlDate(gx.O.A10852EntregaSaidaData,"DMY4")', "gx.O.A11295EntregaSaidaHora", "gx.O.A10851EntregaSaidaNoDocumento", "gx.O.A11296EntregaSaidaTipoFaturamento", "gx.num.urlDecimal(gx.O.A10853EntregaSaidaValorTotal,\'.\',\',\')"],["A10852EntregaSaidaData", "A11295EntregaSaidaHora", "A10851EntregaSaidaNoDocumento", "A11296EntregaSaidaTipoFaturamento", "A6063SaidaValorServico", "A6064SaidaValorProduto", "A6065SaidaValorDesconto", "A6076SaidaValorICMSST", "A6068SaidaValorSeguro", "A6069SaidaValorOutrasDespesas", "A6077SaidaValorIPI", "A6067SaidaValorFrete", "A6092SaidaFreteEntraTotal", "A10677SaidaValorFCPST", "A10671SaidaValorICMSDesonerado", "A10853EntregaSaidaValorTotal"]);
      return true;
   }
   this.Valid_Entregaentregadorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGAENTREGADOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entregaentregadorid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entregaentregadorid",["gx.O.A10816EntregaEntregadorEmpId", "gx.O.A10817EntregaEntregadorId", "gx.O.A10845EntregaEntregadorNome"],["A10845EntregaEntregadorNome"]);
      return true;
   }
   this.Valid_Entregalanccretrocoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGALANCCRETROCOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entregalanccretroconumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entregalanccretroconumero",["gx.O.A10810EntregaLancCreTrocoEmpId", "gx.O.A10811EntregaLancCreTrocoNumero"],[]);
      return true;
   }
   this.Valid_Entregalancdebtrocoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGALANCDEBTROCOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entregalancdebtroconumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entregalancdebtroconumero",["gx.O.A10812EntregaLancDebTrocoEmpId", "gx.O.A10813EntregaLancDebTrocoNumero"],[]);
      return true;
   }
   this.Valid_Entregalanctaxaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGALANCTAXAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entregalanctaxanumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entregalanctaxanumero",["gx.O.A10814EntregaLancTaxaEmpId", "gx.O.A10815EntregaLancTaxaNumero"],[]);
      return true;
   }
   this.Valid_Entregaocorrenciasequencia=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(271) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ENTREGAOCORRENCIASEQUENCIA", gx.fn.currentGridRowImpl(271));
         this.AnyError  = 0;
         this.sMode797 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(797,271)  ;
         this.standaloneModalFL797( );
         this.standaloneNotModalFL797( );
         if ( gx.fn.gridDuplicateKey(272) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Ocorrencia", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode797  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entregaocorrenciausuarioid=function()
   {
      this.sMode797 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(797,271)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Entregaocorrenciausuarioid",["gx.O.A10824EntregaOcorrenciaUsuarioId", "gx.O.A10860EntregaOcorrenciaUsuarioNome"],["A10860EntregaOcorrenciaUsuarioNome"]);
      this.Gx_mode =  this.sMode797  ;
      return true;
   }
   this.standaloneModalFL797=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("ENTREGAOCORRENCIASEQUENCIA","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("ENTREGAOCORRENCIASEQUENCIA","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModalFL797=function()
   {
      return true;
   }
   this.e11fl796_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12fl796_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,117,119,122,124,127,129,132,134,137,139,142,144,147,149,152,154,157,159,162,164,167,169,172,174,177,179,182,184,187,189,192,194,197,199,202,204,207,209,212,214,217,219,222,224,227,229,232,234,237,239,242,244,247,249,252,254,257,259,262,264,267,270,272,273,274,275,276,277,278,284,285,286,287,288,289,290];
   this.GXLastCtrlId =290;
   this.Gridtentrega_ocorrenciaContainer = new gx.grid.grid(this, 797,"Ocorrencia",271,"Gridtentrega_ocorrencia","Gridtentrega_ocorrencia","Gridtentrega_ocorrenciaContainer",this.CmpContext,this.IsMasterPage,"tentrega",[10823],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Gridtentrega_ocorrenciaContainer = this.Gridtentrega_ocorrenciaContainer;
   Gridtentrega_ocorrenciaContainer.addSingleLineEdit(10823,272,"ENTREGAOCORRENCIASEQUENCIA","Ocorrencia Sequencia","","EntregaOcorrenciaSequencia","int",0,"px",4,4,"right",null,[],10823,"EntregaOcorrenciaSequencia",true,0,false,false,"Attribute",1,"");
   Gridtentrega_ocorrenciaContainer.addSingleLineEdit(10824,273,"ENTREGAOCORRENCIAUSUARIOID","do Usuário","","EntregaOcorrenciaUsuarioId","char",0,"px",12,12,"left",null,[],10824,"EntregaOcorrenciaUsuarioId",true,0,false,false,"Attribute",1,"");
   Gridtentrega_ocorrenciaContainer.addBitmap("prompt_10824","PROMPT_10824",291,0,"",0,"",null,"","","gx-prompt Image","");
   Gridtentrega_ocorrenciaContainer.addSingleLineEdit(10860,274,"ENTREGAOCORRENCIAUSUARIONOME","do Usuário","","EntregaOcorrenciaUsuarioNome","svchar",0,"px",35,35,"left",null,[],10860,"EntregaOcorrenciaUsuarioNome",true,0,false,false,"Attribute",1,"");
   Gridtentrega_ocorrenciaContainer.addSingleLineEdit(10856,275,"ENTREGAOCORRENCIADATAHORA","Data Hora","","EntregaOcorrenciaDataHora","dtime",0,"px",16,16,"right",null,[],10856,"EntregaOcorrenciaDataHora",true,5,false,false,"Attribute",1,"");
   Gridtentrega_ocorrenciaContainer.addSingleLineEdit(10857,276,"ENTREGAOCORRENCIASITUACAO","Ocorrencia Situacao","","EntregaOcorrenciaSituacao","char",0,"px",2,2,"left",null,[],10857,"EntregaOcorrenciaSituacao",true,0,false,false,"Attribute",1,"");
   Gridtentrega_ocorrenciaContainer.addSingleLineEdit(10858,277,"ENTREGAOCORRENCIAUSUARIOALT","Usuario Alt","","EntregaOcorrenciaUsuarioAlt","char",0,"px",12,12,"left",null,[],10858,"EntregaOcorrenciaUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Gridtentrega_ocorrenciaContainer.addSingleLineEdit(10859,278,"ENTREGAOCORRENCIADATAHORAALT","Hora Alt","","EntregaOcorrenciaDataHoraAlt","dtime",0,"px",16,16,"right",null,[],10859,"EntregaOcorrenciaDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Gridtentrega_ocorrenciaContainer);
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKENTREGAEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregaempresaid,isvalid:null,rgrid:[this.Gridtentrega_ocorrenciaContainer],fld:"ENTREGAEMPRESAID",gxz:"Z10808EntregaEmpresaId",gxold:"O10808EntregaEmpresaId",gxvar:"A10808EntregaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10808EntregaEmpresaId=Value},v2z:function(Value){gx.O.Z10808EntregaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ENTREGAEMPRESAID",gx.O.A10808EntregaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10808EntregaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ENTREGAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKENTREGANUMERO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entreganumero,isvalid:null,rgrid:[this.Gridtentrega_ocorrenciaContainer],fld:"ENTREGANUMERO",gxz:"Z10809EntregaNumero",gxold:"O10809EntregaNumero",gxvar:"A10809EntregaNumero",ucs:[],op:[239,234,224,219,214,209,179,174,124,119,104,54,49,264,259,249,244,229,204,199,194,189,169,164,159,154,99,94,89,84,79,74],ip:[239,234,224,219,214,209,179,174,124,119,104,54,49,264,259,249,244,229,204,199,194,189,169,164,159,154,99,94,89,84,79,74,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10809EntregaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10809EntregaNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTREGANUMERO",gx.O.A10809EntregaNumero,0)},c2v:function(){gx.O.A10809EntregaNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTREGANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKENTREGACLIENTEEMPRESAID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregaclienteempresaid,isvalid:null,rgrid:[],fld:"ENTREGACLIENTEEMPRESAID",gxz:"Z10821EntregaClienteEmpresaId",gxold:"O10821EntregaClienteEmpresaId",gxvar:"A10821EntregaClienteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10821EntregaClienteEmpresaId=Value},v2z:function(Value){gx.O.Z10821EntregaClienteEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ENTREGACLIENTEEMPRESAID",gx.O.A10821EntregaClienteEmpresaId,0)},c2v:function(){gx.O.A10821EntregaClienteEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ENTREGACLIENTEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKENTREGACLIENTEID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregaclienteid,isvalid:null,rgrid:[],fld:"ENTREGACLIENTEID",gxz:"Z10822EntregaClienteId",gxold:"O10822EntregaClienteId",gxvar:"A10822EntregaClienteId",ucs:[],op:[69,64,59],ip:[69,64,59,54,49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10822EntregaClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10822EntregaClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTREGACLIENTEID",gx.O.A10822EntregaClienteId,0)},c2v:function(){gx.O.A10822EntregaClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTREGACLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKENTREGACLIENTENOME", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGACLIENTENOME",gxz:"Z10832EntregaClienteNome",gxold:"O10832EntregaClienteNome",gxvar:"A10832EntregaClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10832EntregaClienteNome=Value},v2z:function(Value){gx.O.Z10832EntregaClienteNome=Value},v2c:function(){gx.fn.setControlValue("ENTREGACLIENTENOME",gx.O.A10832EntregaClienteNome,0)},c2v:function(){gx.O.A10832EntregaClienteNome=this.val()},val:function(){return gx.fn.getControlValue("ENTREGACLIENTENOME")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKENTREGACLIENTERAZSOL", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Entregaclienterazsol,isvalid:null,rgrid:[],fld:"ENTREGACLIENTERAZSOL",gxz:"Z11182EntregaClienteRazSol",gxold:"O11182EntregaClienteRazSol",gxvar:"A11182EntregaClienteRazSol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11182EntregaClienteRazSol=Value},v2z:function(Value){gx.O.Z11182EntregaClienteRazSol=Value},v2c:function(){gx.fn.setControlValue("ENTREGACLIENTERAZSOL",gx.O.A11182EntregaClienteRazSol,0)},c2v:function(){gx.O.A11182EntregaClienteRazSol=this.val()},val:function(){return gx.fn.getControlValue("ENTREGACLIENTERAZSOL")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKENTREGACLIENTEROTA", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGACLIENTEROTA",gxz:"Z10906EntregaClienteRota",gxold:"O10906EntregaClienteRota",gxvar:"A10906EntregaClienteRota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10906EntregaClienteRota=Value},v2z:function(Value){gx.O.Z10906EntregaClienteRota=Value},v2c:function(){gx.fn.setControlValue("ENTREGACLIENTEROTA",gx.O.A10906EntregaClienteRota,0)},c2v:function(){gx.O.A10906EntregaClienteRota=this.val()},val:function(){return gx.fn.getControlValue("ENTREGACLIENTEROTA")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKENTREGACLIENTE", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregacliente,isvalid:null,rgrid:[],fld:"ENTREGACLIENTE",gxz:"Z10849EntregaCliente",gxold:"O10849EntregaCliente",gxvar:"A10849EntregaCliente",ucs:[],op:[254],ip:[254,64,74,54],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10849EntregaCliente=Value},v2z:function(Value){gx.O.Z10849EntregaCliente=Value},v2c:function(){gx.fn.setControlValue("ENTREGACLIENTE",gx.O.A10849EntregaCliente,0)},c2v:function(){gx.O.A10849EntregaCliente=this.val()},val:function(){return gx.fn.getControlValue("ENTREGACLIENTE")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKENTREGAENDERECOENTREGA", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAENDERECOENTREGA",gxz:"Z10833EntregaEnderecoEntrega",gxold:"O10833EntregaEnderecoEntrega",gxvar:"A10833EntregaEnderecoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10833EntregaEnderecoEntrega=Value},v2z:function(Value){gx.O.Z10833EntregaEnderecoEntrega=Value},v2c:function(){gx.fn.setControlValue("ENTREGAENDERECOENTREGA",gx.O.A10833EntregaEnderecoEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10833EntregaEnderecoEntrega=this.val()},val:function(){return gx.fn.getControlValue("ENTREGAENDERECOENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCKENTREGANUMEROENDENTREGA", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGANUMEROENDENTREGA",gxz:"Z10834EntregaNumeroEndEntrega",gxold:"O10834EntregaNumeroEndEntrega",gxvar:"A10834EntregaNumeroEndEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10834EntregaNumeroEndEntrega=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10834EntregaNumeroEndEntrega=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTREGANUMEROENDENTREGA",gx.O.A10834EntregaNumeroEndEntrega,0)},c2v:function(){gx.O.A10834EntregaNumeroEndEntrega=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTREGANUMEROENDENTREGA",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKENTREGACOMPLEMENTOENDENTREGA", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGACOMPLEMENTOENDENTREGA",gxz:"Z10835EntregaComplementoEndEntrega",gxold:"O10835EntregaComplementoEndEntrega",gxvar:"A10835EntregaComplementoEndEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10835EntregaComplementoEndEntrega=Value},v2z:function(Value){gx.O.Z10835EntregaComplementoEndEntrega=Value},v2c:function(){gx.fn.setControlValue("ENTREGACOMPLEMENTOENDENTREGA",gx.O.A10835EntregaComplementoEndEntrega,0)},c2v:function(){gx.O.A10835EntregaComplementoEndEntrega=this.val()},val:function(){return gx.fn.getControlValue("ENTREGACOMPLEMENTOENDENTREGA")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCKENTREGABAIRROENDENTREGA", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGABAIRROENDENTREGA",gxz:"Z10836EntregaBairroEndEntrega",gxold:"O10836EntregaBairroEndEntrega",gxvar:"A10836EntregaBairroEndEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10836EntregaBairroEndEntrega=Value},v2z:function(Value){gx.O.Z10836EntregaBairroEndEntrega=Value},v2c:function(){gx.fn.setControlValue("ENTREGABAIRROENDENTREGA",gx.O.A10836EntregaBairroEndEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10836EntregaBairroEndEntrega=this.val()},val:function(){return gx.fn.getControlValue("ENTREGABAIRROENDENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[97]={fld:"TEXTBLOCKENTREGACEPENDENTREGA", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGACEPENDENTREGA",gxz:"Z10837EntregaCEPEndEntrega",gxold:"O10837EntregaCEPEndEntrega",gxvar:"A10837EntregaCEPEndEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10837EntregaCEPEndEntrega=Value},v2z:function(Value){gx.O.Z10837EntregaCEPEndEntrega=Value},v2c:function(){gx.fn.setControlValue("ENTREGACEPENDENTREGA",gx.O.A10837EntregaCEPEndEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10837EntregaCEPEndEntrega=this.val()},val:function(){return gx.fn.getControlValue("ENTREGACEPENDENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 99 , function() {
   });
   GXValidFnc[102]={fld:"TEXTBLOCKENTREGACIDADEENDENTREGAID", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregacidadeendentregaid,isvalid:null,rgrid:[],fld:"ENTREGACIDADEENDENTREGAID",gxz:"Z10820EntregaCidadeEndEntregaId",gxold:"O10820EntregaCidadeEndEntregaId",gxvar:"A10820EntregaCidadeEndEntregaId",ucs:[],op:[114,109],ip:[114,109,104],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10820EntregaCidadeEndEntregaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10820EntregaCidadeEndEntregaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTREGACIDADEENDENTREGAID",gx.O.A10820EntregaCidadeEndEntregaId,0)},c2v:function(){gx.O.A10820EntregaCidadeEndEntregaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTREGACIDADEENDENTREGAID",'.')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCKENTREGACIDADEENDENTREGANOME", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGACIDADEENDENTREGANOME",gxz:"Z10831EntregaCidadeEndEntregaNome",gxold:"O10831EntregaCidadeEndEntregaNome",gxvar:"A10831EntregaCidadeEndEntregaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10831EntregaCidadeEndEntregaNome=Value},v2z:function(Value){gx.O.Z10831EntregaCidadeEndEntregaNome=Value},v2c:function(){gx.fn.setControlValue("ENTREGACIDADEENDENTREGANOME",gx.O.A10831EntregaCidadeEndEntregaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10831EntregaCidadeEndEntregaNome=this.val()},val:function(){return gx.fn.getControlValue("ENTREGACIDADEENDENTREGANOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[112]={fld:"TEXTBLOCKENTREGACIDADEENDENTREGAUF", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGACIDADEENDENTREGAUF",gxz:"Z10854EntregaCidadeEndEntregaUF",gxold:"O10854EntregaCidadeEndEntregaUF",gxvar:"A10854EntregaCidadeEndEntregaUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10854EntregaCidadeEndEntregaUF=Value},v2z:function(Value){gx.O.Z10854EntregaCidadeEndEntregaUF=Value},v2c:function(){gx.fn.setComboBoxValue("ENTREGACIDADEENDENTREGAUF",gx.O.A10854EntregaCidadeEndEntregaUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10854EntregaCidadeEndEntregaUF=this.val()},val:function(){return gx.fn.getControlValue("ENTREGACIDADEENDENTREGAUF")},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[117]={fld:"TEXTBLOCKENTREGASAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregasaidaempresaid,isvalid:null,rgrid:[],fld:"ENTREGASAIDAEMPRESAID",gxz:"Z10818EntregaSaidaEmpresaId",gxold:"O10818EntregaSaidaEmpresaId",gxvar:"A10818EntregaSaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10818EntregaSaidaEmpresaId=Value},v2z:function(Value){gx.O.Z10818EntregaSaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ENTREGASAIDAEMPRESAID",gx.O.A10818EntregaSaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10818EntregaSaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ENTREGASAIDAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 119 , function() {
   });
   GXValidFnc[122]={fld:"TEXTBLOCKENTREGASAIDAID", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregasaidaid,isvalid:null,rgrid:[],fld:"ENTREGASAIDAID",gxz:"Z10819EntregaSaidaId",gxold:"O10819EntregaSaidaId",gxvar:"A10819EntregaSaidaId",ucs:[],op:[144,149,139,134,129],ip:[144,149,139,134,129,124,119],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10819EntregaSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10819EntregaSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTREGASAIDAID",gx.O.A10819EntregaSaidaId,0)},c2v:function(){gx.O.A10819EntregaSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTREGASAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCKENTREGASAIDADATA", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGASAIDADATA",gxz:"Z10852EntregaSaidaData",gxold:"O10852EntregaSaidaData",gxvar:"A10852EntregaSaidaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10852EntregaSaidaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10852EntregaSaidaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ENTREGASAIDADATA",gx.O.A10852EntregaSaidaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10852EntregaSaidaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ENTREGASAIDADATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 129 , function() {
   });
   GXValidFnc[132]={fld:"TEXTBLOCKENTREGASAIDAHORA", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGASAIDAHORA",gxz:"Z11295EntregaSaidaHora",gxold:"O11295EntregaSaidaHora",gxvar:"A11295EntregaSaidaHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11295EntregaSaidaHora=Value},v2z:function(Value){gx.O.Z11295EntregaSaidaHora=Value},v2c:function(){gx.fn.setControlValue("ENTREGASAIDAHORA",gx.O.A11295EntregaSaidaHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11295EntregaSaidaHora=this.val()},val:function(){return gx.fn.getControlValue("ENTREGASAIDAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 134 , function() {
   });
   GXValidFnc[137]={fld:"TEXTBLOCKENTREGASAIDANODOCUMENTO", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGASAIDANODOCUMENTO",gxz:"Z10851EntregaSaidaNoDocumento",gxold:"O10851EntregaSaidaNoDocumento",gxvar:"A10851EntregaSaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10851EntregaSaidaNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10851EntregaSaidaNoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTREGASAIDANODOCUMENTO",gx.O.A10851EntregaSaidaNoDocumento,0)},c2v:function(){gx.O.A10851EntregaSaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTREGASAIDANODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[142]={fld:"TEXTBLOCKENTREGASAIDAVALORTOTAL", format:0,grid:0};
   GXValidFnc[144]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGASAIDAVALORTOTAL",gxz:"Z10853EntregaSaidaValorTotal",gxold:"O10853EntregaSaidaValorTotal",gxvar:"A10853EntregaSaidaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10853EntregaSaidaValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10853EntregaSaidaValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTREGASAIDAVALORTOTAL",gx.O.A10853EntregaSaidaValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10853EntregaSaidaValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("ENTREGASAIDAVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 144 , function() {
   });
   GXValidFnc[147]={fld:"TEXTBLOCKENTREGASAIDATIPOFATURAMENTO", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGASAIDATIPOFATURAMENTO",gxz:"Z11296EntregaSaidaTipoFaturamento",gxold:"O11296EntregaSaidaTipoFaturamento",gxvar:"A11296EntregaSaidaTipoFaturamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11296EntregaSaidaTipoFaturamento=Value},v2z:function(Value){gx.O.Z11296EntregaSaidaTipoFaturamento=Value},v2c:function(){gx.fn.setComboBoxValue("ENTREGASAIDATIPOFATURAMENTO",gx.O.A11296EntregaSaidaTipoFaturamento)},c2v:function(){gx.O.A11296EntregaSaidaTipoFaturamento=this.val()},val:function(){return gx.fn.getControlValue("ENTREGASAIDATIPOFATURAMENTO")},nac:gx.falseFn};
   GXValidFnc[152]={fld:"TEXTBLOCKENTREGATIPOSERVICO", format:0,grid:0};
   GXValidFnc[154]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGATIPOSERVICO",gxz:"Z10838EntregaTipoServico",gxold:"O10838EntregaTipoServico",gxvar:"A10838EntregaTipoServico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10838EntregaTipoServico=Value},v2z:function(Value){gx.O.Z10838EntregaTipoServico=Value},v2c:function(){gx.fn.setControlValue("ENTREGATIPOSERVICO",gx.O.A10838EntregaTipoServico,0)},c2v:function(){gx.O.A10838EntregaTipoServico=this.val()},val:function(){return gx.fn.getControlValue("ENTREGATIPOSERVICO")},nac:gx.falseFn};
   GXValidFnc[157]={fld:"TEXTBLOCKENTREGASITUACAO", format:0,grid:0};
   GXValidFnc[159]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGASITUACAO",gxz:"Z10830EntregaSituacao",gxold:"O10830EntregaSituacao",gxvar:"A10830EntregaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10830EntregaSituacao=Value},v2z:function(Value){gx.O.Z10830EntregaSituacao=Value},v2c:function(){gx.fn.setControlValue("ENTREGASITUACAO",gx.O.A10830EntregaSituacao,0)},c2v:function(){gx.O.A10830EntregaSituacao=this.val()},val:function(){return gx.fn.getControlValue("ENTREGASITUACAO")},nac:gx.falseFn};
   GXValidFnc[162]={fld:"TEXTBLOCKENTREGAOBSSERVICO", format:0,grid:0};
   GXValidFnc[164]={lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAOBSSERVICO",gxz:"Z10839EntregaObsServico",gxold:"O10839EntregaObsServico",gxvar:"A10839EntregaObsServico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10839EntregaObsServico=Value},v2z:function(Value){gx.O.Z10839EntregaObsServico=Value},v2c:function(){gx.fn.setControlValue("ENTREGAOBSSERVICO",gx.O.A10839EntregaObsServico,0)},c2v:function(){gx.O.A10839EntregaObsServico=this.val()},val:function(){return gx.fn.getControlValue("ENTREGAOBSSERVICO")},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCKENTREGADATAHORASAIDAENTREGA", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGADATAHORASAIDAENTREGA",gxz:"Z10848EntregaDataHoraSaidaEntrega",gxold:"O10848EntregaDataHoraSaidaEntrega",gxvar:"A10848EntregaDataHoraSaidaEntrega",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10848EntregaDataHoraSaidaEntrega=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10848EntregaDataHoraSaidaEntrega=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ENTREGADATAHORASAIDAENTREGA",gx.O.A10848EntregaDataHoraSaidaEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10848EntregaDataHoraSaidaEntrega=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ENTREGADATAHORASAIDAENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 169 , function() {
   });
   GXValidFnc[172]={fld:"TEXTBLOCKENTREGAENTREGADOREMPID", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregaentregadorempid,isvalid:null,rgrid:[],fld:"ENTREGAENTREGADOREMPID",gxz:"Z10816EntregaEntregadorEmpId",gxold:"O10816EntregaEntregadorEmpId",gxvar:"A10816EntregaEntregadorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10816EntregaEntregadorEmpId=Value},v2z:function(Value){gx.O.Z10816EntregaEntregadorEmpId=Value},v2c:function(){gx.fn.setControlValue("ENTREGAENTREGADOREMPID",gx.O.A10816EntregaEntregadorEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10816EntregaEntregadorEmpId=this.val()},val:function(){return gx.fn.getControlValue("ENTREGAENTREGADOREMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 174 , function() {
   });
   GXValidFnc[177]={fld:"TEXTBLOCKENTREGAENTREGADORID", format:0,grid:0};
   GXValidFnc[179]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregaentregadorid,isvalid:null,rgrid:[],fld:"ENTREGAENTREGADORID",gxz:"Z10817EntregaEntregadorId",gxold:"O10817EntregaEntregadorId",gxvar:"A10817EntregaEntregadorId",ucs:[],op:[184],ip:[184,179,174],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10817EntregaEntregadorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10817EntregaEntregadorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTREGAENTREGADORID",gx.O.A10817EntregaEntregadorId,0)},c2v:function(){gx.O.A10817EntregaEntregadorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTREGAENTREGADORID",'.')},nac:gx.falseFn};
   GXValidFnc[182]={fld:"TEXTBLOCKENTREGAENTREGADORNOME", format:0,grid:0};
   GXValidFnc[184]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAENTREGADORNOME",gxz:"Z10845EntregaEntregadorNome",gxold:"O10845EntregaEntregadorNome",gxvar:"A10845EntregaEntregadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10845EntregaEntregadorNome=Value},v2z:function(Value){gx.O.Z10845EntregaEntregadorNome=Value},v2c:function(){gx.fn.setControlValue("ENTREGAENTREGADORNOME",gx.O.A10845EntregaEntregadorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10845EntregaEntregadorNome=this.val()},val:function(){return gx.fn.getControlValue("ENTREGAENTREGADORNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 184 , function() {
   });
   GXValidFnc[187]={fld:"TEXTBLOCKENTREGADATAACERTOENTREGADOR", format:0,grid:0};
   GXValidFnc[189]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGADATAACERTOENTREGADOR",gxz:"Z10840EntregaDataAcertoEntregador",gxold:"O10840EntregaDataAcertoEntregador",gxvar:"A10840EntregaDataAcertoEntregador",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10840EntregaDataAcertoEntregador=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10840EntregaDataAcertoEntregador=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ENTREGADATAACERTOENTREGADOR",gx.O.A10840EntregaDataAcertoEntregador,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10840EntregaDataAcertoEntregador=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ENTREGADATAACERTOENTREGADOR")},nac:gx.falseFn};
   this.declareDomainHdlr( 189 , function() {
   });
   GXValidFnc[192]={fld:"TEXTBLOCKENTREGAVALORACERTOENTREGADOR", format:0,grid:0};
   GXValidFnc[194]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAVALORACERTOENTREGADOR",gxz:"Z10841EntregaValorAcertoEntregador",gxold:"O10841EntregaValorAcertoEntregador",gxvar:"A10841EntregaValorAcertoEntregador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10841EntregaValorAcertoEntregador=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10841EntregaValorAcertoEntregador=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTREGAVALORACERTOENTREGADOR",gx.O.A10841EntregaValorAcertoEntregador,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10841EntregaValorAcertoEntregador=this.val()},val:function(){return gx.fn.getDecimalValue("ENTREGAVALORACERTOENTREGADOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 194 , function() {
   });
   GXValidFnc[197]={fld:"TEXTBLOCKENTREGADATAHORARETORNOENTREGA", format:0,grid:0};
   GXValidFnc[199]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGADATAHORARETORNOENTREGA",gxz:"Z10847EntregaDataHoraRetornoEntrega",gxold:"O10847EntregaDataHoraRetornoEntrega",gxvar:"A10847EntregaDataHoraRetornoEntrega",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10847EntregaDataHoraRetornoEntrega=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10847EntregaDataHoraRetornoEntrega=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ENTREGADATAHORARETORNOENTREGA",gx.O.A10847EntregaDataHoraRetornoEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10847EntregaDataHoraRetornoEntrega=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ENTREGADATAHORARETORNOENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 199 , function() {
   });
   GXValidFnc[202]={fld:"TEXTBLOCKENTREGAVALORTROCO", format:0,grid:0};
   GXValidFnc[204]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAVALORTROCO",gxz:"Z10842EntregaValorTroco",gxold:"O10842EntregaValorTroco",gxvar:"A10842EntregaValorTroco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10842EntregaValorTroco=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10842EntregaValorTroco=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTREGAVALORTROCO",gx.O.A10842EntregaValorTroco,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10842EntregaValorTroco=this.val()},val:function(){return gx.fn.getDecimalValue("ENTREGAVALORTROCO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 204 , function() {
   });
   GXValidFnc[207]={fld:"TEXTBLOCKENTREGALANCCRETROCOEMPID", format:0,grid:0};
   GXValidFnc[209]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregalanccretrocoempid,isvalid:null,rgrid:[],fld:"ENTREGALANCCRETROCOEMPID",gxz:"Z10810EntregaLancCreTrocoEmpId",gxold:"O10810EntregaLancCreTrocoEmpId",gxvar:"A10810EntregaLancCreTrocoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10810EntregaLancCreTrocoEmpId=Value},v2z:function(Value){gx.O.Z10810EntregaLancCreTrocoEmpId=Value},v2c:function(){gx.fn.setControlValue("ENTREGALANCCRETROCOEMPID",gx.O.A10810EntregaLancCreTrocoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10810EntregaLancCreTrocoEmpId=this.val()},val:function(){return gx.fn.getControlValue("ENTREGALANCCRETROCOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 209 , function() {
   });
   GXValidFnc[212]={fld:"TEXTBLOCKENTREGALANCCRETROCONUMERO", format:0,grid:0};
   GXValidFnc[214]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregalanccretroconumero,isvalid:null,rgrid:[],fld:"ENTREGALANCCRETROCONUMERO",gxz:"Z10811EntregaLancCreTrocoNumero",gxold:"O10811EntregaLancCreTrocoNumero",gxvar:"A10811EntregaLancCreTrocoNumero",ucs:[],op:[],ip:[214,209],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10811EntregaLancCreTrocoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10811EntregaLancCreTrocoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTREGALANCCRETROCONUMERO",gx.O.A10811EntregaLancCreTrocoNumero,0)},c2v:function(){gx.O.A10811EntregaLancCreTrocoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTREGALANCCRETROCONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[217]={fld:"TEXTBLOCKENTREGALANCDEBTROCOEMPID", format:0,grid:0};
   GXValidFnc[219]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregalancdebtrocoempid,isvalid:null,rgrid:[],fld:"ENTREGALANCDEBTROCOEMPID",gxz:"Z10812EntregaLancDebTrocoEmpId",gxold:"O10812EntregaLancDebTrocoEmpId",gxvar:"A10812EntregaLancDebTrocoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10812EntregaLancDebTrocoEmpId=Value},v2z:function(Value){gx.O.Z10812EntregaLancDebTrocoEmpId=Value},v2c:function(){gx.fn.setControlValue("ENTREGALANCDEBTROCOEMPID",gx.O.A10812EntregaLancDebTrocoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10812EntregaLancDebTrocoEmpId=this.val()},val:function(){return gx.fn.getControlValue("ENTREGALANCDEBTROCOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 219 , function() {
   });
   GXValidFnc[222]={fld:"TEXTBLOCKENTREGALANCDEBTROCONUMERO", format:0,grid:0};
   GXValidFnc[224]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregalancdebtroconumero,isvalid:null,rgrid:[],fld:"ENTREGALANCDEBTROCONUMERO",gxz:"Z10813EntregaLancDebTrocoNumero",gxold:"O10813EntregaLancDebTrocoNumero",gxvar:"A10813EntregaLancDebTrocoNumero",ucs:[],op:[],ip:[224,219],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10813EntregaLancDebTrocoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10813EntregaLancDebTrocoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTREGALANCDEBTROCONUMERO",gx.O.A10813EntregaLancDebTrocoNumero,0)},c2v:function(){gx.O.A10813EntregaLancDebTrocoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTREGALANCDEBTROCONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[227]={fld:"TEXTBLOCKENTREGAVALORTAXAENTREGA", format:0,grid:0};
   GXValidFnc[229]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAVALORTAXAENTREGA",gxz:"Z10843EntregaValorTaxaEntrega",gxold:"O10843EntregaValorTaxaEntrega",gxvar:"A10843EntregaValorTaxaEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10843EntregaValorTaxaEntrega=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10843EntregaValorTaxaEntrega=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTREGAVALORTAXAENTREGA",gx.O.A10843EntregaValorTaxaEntrega,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10843EntregaValorTaxaEntrega=this.val()},val:function(){return gx.fn.getDecimalValue("ENTREGAVALORTAXAENTREGA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 229 , function() {
   });
   GXValidFnc[232]={fld:"TEXTBLOCKENTREGALANCTAXAEMPID", format:0,grid:0};
   GXValidFnc[234]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregalanctaxaempid,isvalid:null,rgrid:[],fld:"ENTREGALANCTAXAEMPID",gxz:"Z10814EntregaLancTaxaEmpId",gxold:"O10814EntregaLancTaxaEmpId",gxvar:"A10814EntregaLancTaxaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10814EntregaLancTaxaEmpId=Value},v2z:function(Value){gx.O.Z10814EntregaLancTaxaEmpId=Value},v2c:function(){gx.fn.setControlValue("ENTREGALANCTAXAEMPID",gx.O.A10814EntregaLancTaxaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10814EntregaLancTaxaEmpId=this.val()},val:function(){return gx.fn.getControlValue("ENTREGALANCTAXAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 234 , function() {
   });
   GXValidFnc[237]={fld:"TEXTBLOCKENTREGALANCTAXANUMERO", format:0,grid:0};
   GXValidFnc[239]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregalanctaxanumero,isvalid:null,rgrid:[],fld:"ENTREGALANCTAXANUMERO",gxz:"Z10815EntregaLancTaxaNumero",gxold:"O10815EntregaLancTaxaNumero",gxvar:"A10815EntregaLancTaxaNumero",ucs:[],op:[],ip:[239,234],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10815EntregaLancTaxaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10815EntregaLancTaxaNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTREGALANCTAXANUMERO",gx.O.A10815EntregaLancTaxaNumero,0)},c2v:function(){gx.O.A10815EntregaLancTaxaNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTREGALANCTAXANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[242]={fld:"TEXTBLOCKENTREGAOBSENTREGA", format:0,grid:0};
   GXValidFnc[244]={lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAOBSENTREGA",gxz:"Z10844EntregaObsEntrega",gxold:"O10844EntregaObsEntrega",gxvar:"A10844EntregaObsEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10844EntregaObsEntrega=Value},v2z:function(Value){gx.O.Z10844EntregaObsEntrega=Value},v2c:function(){gx.fn.setControlValue("ENTREGAOBSENTREGA",gx.O.A10844EntregaObsEntrega,0)},c2v:function(){gx.O.A10844EntregaObsEntrega=this.val()},val:function(){return gx.fn.getControlValue("ENTREGAOBSENTREGA")},nac:gx.falseFn};
   GXValidFnc[247]={fld:"TEXTBLOCKENTREGADATAHORAENTREGA", format:0,grid:0};
   GXValidFnc[249]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGADATAHORAENTREGA",gxz:"Z10850EntregaDataHoraEntrega",gxold:"O10850EntregaDataHoraEntrega",gxvar:"A10850EntregaDataHoraEntrega",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10850EntregaDataHoraEntrega=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10850EntregaDataHoraEntrega=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ENTREGADATAHORAENTREGA",gx.O.A10850EntregaDataHoraEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10850EntregaDataHoraEntrega=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ENTREGADATAHORAENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 249 , function() {
   });
   GXValidFnc[252]={fld:"TEXTBLOCKENTREGANOMECLIENTE", format:0,grid:0};
   GXValidFnc[254]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGANOMECLIENTE",gxz:"Z11192EntregaNomeCliente",gxold:"O11192EntregaNomeCliente",gxvar:"A11192EntregaNomeCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11192EntregaNomeCliente=Value},v2z:function(Value){gx.O.Z11192EntregaNomeCliente=Value},v2c:function(){gx.fn.setControlValue("ENTREGANOMECLIENTE",gx.O.A11192EntregaNomeCliente,0)},c2v:function(){gx.O.A11192EntregaNomeCliente=this.val()},val:function(){return gx.fn.getControlValue("ENTREGANOMECLIENTE")},nac:gx.falseFn};
   GXValidFnc[257]={fld:"TEXTBLOCKENTREGAUSUARIOALT", format:0,grid:0};
   GXValidFnc[259]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAUSUARIOALT",gxz:"Z10829EntregaUsuarioAlt",gxold:"O10829EntregaUsuarioAlt",gxvar:"A10829EntregaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10829EntregaUsuarioAlt=Value},v2z:function(Value){gx.O.Z10829EntregaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ENTREGAUSUARIOALT",gx.O.A10829EntregaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10829EntregaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ENTREGAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 259 , function() {
   });
   GXValidFnc[262]={fld:"TEXTBLOCKENTREGADATAHORAALT", format:0,grid:0};
   GXValidFnc[264]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGADATAHORAALT",gxz:"Z10855EntregaDataHoraAlt",gxold:"O10855EntregaDataHoraAlt",gxvar:"A10855EntregaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10855EntregaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10855EntregaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ENTREGADATAHORAALT",gx.O.A10855EntregaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10855EntregaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ENTREGADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 264 , function() {
   });
   GXValidFnc[267]={fld:"TABLE3",grid:0};
   GXValidFnc[270]={fld:"TITLEOCORRENCIA", format:0,grid:0};
   GXValidFnc[272]={lvl:797,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:271,gxgrid:this.Gridtentrega_ocorrenciaContainer,fnc:this.Valid_Entregaocorrenciasequencia,isvalid:null,rgrid:[],fld:"ENTREGAOCORRENCIASEQUENCIA",gxz:"Z10823EntregaOcorrenciaSequencia",gxold:"O10823EntregaOcorrenciaSequencia",gxvar:"A10823EntregaOcorrenciaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10823EntregaOcorrenciaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10823EntregaOcorrenciaSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTREGAOCORRENCIASEQUENCIA",row || gx.fn.currentGridRowImpl(271),gx.O.A10823EntregaOcorrenciaSequencia,0)},c2v:function(){gx.O.A10823EntregaOcorrenciaSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTREGAOCORRENCIASEQUENCIA",row || gx.fn.currentGridRowImpl(271),'.')},nac:gx.falseFn};
   GXValidFnc[273]={lvl:797,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:271,gxgrid:this.Gridtentrega_ocorrenciaContainer,fnc:this.Valid_Entregaocorrenciausuarioid,isvalid:null,rgrid:[],fld:"ENTREGAOCORRENCIAUSUARIOID",gxz:"Z10824EntregaOcorrenciaUsuarioId",gxold:"O10824EntregaOcorrenciaUsuarioId",gxvar:"A10824EntregaOcorrenciaUsuarioId",ucs:[],op:[274],ip:[274,273],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10824EntregaOcorrenciaUsuarioId=Value},v2z:function(Value){gx.O.Z10824EntregaOcorrenciaUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTREGAOCORRENCIAUSUARIOID",row || gx.fn.currentGridRowImpl(271),gx.O.A10824EntregaOcorrenciaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10824EntregaOcorrenciaUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTREGAOCORRENCIAUSUARIOID",row || gx.fn.currentGridRowImpl(271))},nac:gx.falseFn};
   GXValidFnc[274]={lvl:797,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:1,grid:271,gxgrid:this.Gridtentrega_ocorrenciaContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAOCORRENCIAUSUARIONOME",gxz:"Z10860EntregaOcorrenciaUsuarioNome",gxold:"O10860EntregaOcorrenciaUsuarioNome",gxvar:"A10860EntregaOcorrenciaUsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10860EntregaOcorrenciaUsuarioNome=Value},v2z:function(Value){gx.O.Z10860EntregaOcorrenciaUsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("ENTREGAOCORRENCIAUSUARIONOME",row || gx.fn.currentGridRowImpl(271),gx.O.A10860EntregaOcorrenciaUsuarioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10860EntregaOcorrenciaUsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTREGAOCORRENCIAUSUARIONOME",row || gx.fn.currentGridRowImpl(271))},nac:gx.falseFn};
   GXValidFnc[275]={lvl:797,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:1,grid:271,gxgrid:this.Gridtentrega_ocorrenciaContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAOCORRENCIADATAHORA",gxz:"Z10856EntregaOcorrenciaDataHora",gxold:"O10856EntregaOcorrenciaDataHora",gxvar:"A10856EntregaOcorrenciaDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10856EntregaOcorrenciaDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10856EntregaOcorrenciaDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTREGAOCORRENCIADATAHORA",row || gx.fn.currentGridRowImpl(271),gx.O.A10856EntregaOcorrenciaDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10856EntregaOcorrenciaDataHora=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ENTREGAOCORRENCIADATAHORA",row || gx.fn.currentGridRowImpl(271))},nac:gx.falseFn};
   GXValidFnc[276]={lvl:797,type:"char",len:2,dec:0,sign:false,ro:0,isacc:1,grid:271,gxgrid:this.Gridtentrega_ocorrenciaContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAOCORRENCIASITUACAO",gxz:"Z10857EntregaOcorrenciaSituacao",gxold:"O10857EntregaOcorrenciaSituacao",gxvar:"A10857EntregaOcorrenciaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10857EntregaOcorrenciaSituacao=Value},v2z:function(Value){gx.O.Z10857EntregaOcorrenciaSituacao=Value},v2c:function(row){gx.fn.setGridControlValue("ENTREGAOCORRENCIASITUACAO",row || gx.fn.currentGridRowImpl(271),gx.O.A10857EntregaOcorrenciaSituacao,0)},c2v:function(){gx.O.A10857EntregaOcorrenciaSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTREGAOCORRENCIASITUACAO",row || gx.fn.currentGridRowImpl(271))},nac:gx.falseFn};
   GXValidFnc[277]={lvl:797,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:271,gxgrid:this.Gridtentrega_ocorrenciaContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAOCORRENCIAUSUARIOALT",gxz:"Z10858EntregaOcorrenciaUsuarioAlt",gxold:"O10858EntregaOcorrenciaUsuarioAlt",gxvar:"A10858EntregaOcorrenciaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10858EntregaOcorrenciaUsuarioAlt=Value},v2z:function(Value){gx.O.Z10858EntregaOcorrenciaUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("ENTREGAOCORRENCIAUSUARIOALT",row || gx.fn.currentGridRowImpl(271),gx.O.A10858EntregaOcorrenciaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10858EntregaOcorrenciaUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTREGAOCORRENCIAUSUARIOALT",row || gx.fn.currentGridRowImpl(271))},nac:gx.falseFn};
   GXValidFnc[278]={lvl:797,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:1,grid:271,gxgrid:this.Gridtentrega_ocorrenciaContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGAOCORRENCIADATAHORAALT",gxz:"Z10859EntregaOcorrenciaDataHoraAlt",gxold:"O10859EntregaOcorrenciaDataHoraAlt",gxvar:"A10859EntregaOcorrenciaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10859EntregaOcorrenciaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10859EntregaOcorrenciaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTREGAOCORRENCIADATAHORAALT",row || gx.fn.currentGridRowImpl(271),gx.O.A10859EntregaOcorrenciaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10859EntregaOcorrenciaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ENTREGAOCORRENCIADATAHORAALT",row || gx.fn.currentGridRowImpl(271))},nac:gx.falseFn};
   GXValidFnc[284]={fld:"PROMPT_10821_10822",grid:796};
   GXValidFnc[285]={fld:"PROMPT_10820",grid:796};
   GXValidFnc[286]={fld:"PROMPT_10818_10819",grid:796};
   GXValidFnc[287]={fld:"PROMPT_10816_10817",grid:796};
   GXValidFnc[288]={fld:"PROMPT_10810_10811",grid:796};
   GXValidFnc[289]={fld:"PROMPT_10812_10813",grid:796};
   GXValidFnc[290]={fld:"PROMPT_10814_10815",grid:796};
   this.A10808EntregaEmpresaId = "" ;
   this.Z10808EntregaEmpresaId = "" ;
   this.O10808EntregaEmpresaId = "" ;
   this.A10809EntregaNumero = 0 ;
   this.Z10809EntregaNumero = 0 ;
   this.O10809EntregaNumero = 0 ;
   this.A10821EntregaClienteEmpresaId = "" ;
   this.Z10821EntregaClienteEmpresaId = "" ;
   this.O10821EntregaClienteEmpresaId = "" ;
   this.A10822EntregaClienteId = 0 ;
   this.Z10822EntregaClienteId = 0 ;
   this.O10822EntregaClienteId = 0 ;
   this.A10832EntregaClienteNome = "" ;
   this.Z10832EntregaClienteNome = "" ;
   this.O10832EntregaClienteNome = "" ;
   this.A11182EntregaClienteRazSol = "" ;
   this.Z11182EntregaClienteRazSol = "" ;
   this.O11182EntregaClienteRazSol = "" ;
   this.A10906EntregaClienteRota = "" ;
   this.Z10906EntregaClienteRota = "" ;
   this.O10906EntregaClienteRota = "" ;
   this.A10849EntregaCliente = "" ;
   this.Z10849EntregaCliente = "" ;
   this.O10849EntregaCliente = "" ;
   this.A10833EntregaEnderecoEntrega = "" ;
   this.Z10833EntregaEnderecoEntrega = "" ;
   this.O10833EntregaEnderecoEntrega = "" ;
   this.A10834EntregaNumeroEndEntrega = 0 ;
   this.Z10834EntregaNumeroEndEntrega = 0 ;
   this.O10834EntregaNumeroEndEntrega = 0 ;
   this.A10835EntregaComplementoEndEntrega = "" ;
   this.Z10835EntregaComplementoEndEntrega = "" ;
   this.O10835EntregaComplementoEndEntrega = "" ;
   this.A10836EntregaBairroEndEntrega = "" ;
   this.Z10836EntregaBairroEndEntrega = "" ;
   this.O10836EntregaBairroEndEntrega = "" ;
   this.A10837EntregaCEPEndEntrega = "" ;
   this.Z10837EntregaCEPEndEntrega = "" ;
   this.O10837EntregaCEPEndEntrega = "" ;
   this.A10820EntregaCidadeEndEntregaId = 0 ;
   this.Z10820EntregaCidadeEndEntregaId = 0 ;
   this.O10820EntregaCidadeEndEntregaId = 0 ;
   this.A10831EntregaCidadeEndEntregaNome = "" ;
   this.Z10831EntregaCidadeEndEntregaNome = "" ;
   this.O10831EntregaCidadeEndEntregaNome = "" ;
   this.A10854EntregaCidadeEndEntregaUF = "" ;
   this.Z10854EntregaCidadeEndEntregaUF = "" ;
   this.O10854EntregaCidadeEndEntregaUF = "" ;
   this.A10818EntregaSaidaEmpresaId = "" ;
   this.Z10818EntregaSaidaEmpresaId = "" ;
   this.O10818EntregaSaidaEmpresaId = "" ;
   this.A10819EntregaSaidaId = 0 ;
   this.Z10819EntregaSaidaId = 0 ;
   this.O10819EntregaSaidaId = 0 ;
   this.A10852EntregaSaidaData = gx.date.nullDate() ;
   this.Z10852EntregaSaidaData = gx.date.nullDate() ;
   this.O10852EntregaSaidaData = gx.date.nullDate() ;
   this.A11295EntregaSaidaHora = "" ;
   this.Z11295EntregaSaidaHora = "" ;
   this.O11295EntregaSaidaHora = "" ;
   this.A10851EntregaSaidaNoDocumento = 0 ;
   this.Z10851EntregaSaidaNoDocumento = 0 ;
   this.O10851EntregaSaidaNoDocumento = 0 ;
   this.A10853EntregaSaidaValorTotal = 0 ;
   this.Z10853EntregaSaidaValorTotal = 0 ;
   this.O10853EntregaSaidaValorTotal = 0 ;
   this.A11296EntregaSaidaTipoFaturamento = "" ;
   this.Z11296EntregaSaidaTipoFaturamento = "" ;
   this.O11296EntregaSaidaTipoFaturamento = "" ;
   this.A10838EntregaTipoServico = "" ;
   this.Z10838EntregaTipoServico = "" ;
   this.O10838EntregaTipoServico = "" ;
   this.A10830EntregaSituacao = "" ;
   this.Z10830EntregaSituacao = "" ;
   this.O10830EntregaSituacao = "" ;
   this.A10839EntregaObsServico = "" ;
   this.Z10839EntregaObsServico = "" ;
   this.O10839EntregaObsServico = "" ;
   this.A10848EntregaDataHoraSaidaEntrega = gx.date.nullDate() ;
   this.Z10848EntregaDataHoraSaidaEntrega = gx.date.nullDate() ;
   this.O10848EntregaDataHoraSaidaEntrega = gx.date.nullDate() ;
   this.A10816EntregaEntregadorEmpId = "" ;
   this.Z10816EntregaEntregadorEmpId = "" ;
   this.O10816EntregaEntregadorEmpId = "" ;
   this.A10817EntregaEntregadorId = 0 ;
   this.Z10817EntregaEntregadorId = 0 ;
   this.O10817EntregaEntregadorId = 0 ;
   this.A10845EntregaEntregadorNome = "" ;
   this.Z10845EntregaEntregadorNome = "" ;
   this.O10845EntregaEntregadorNome = "" ;
   this.A10840EntregaDataAcertoEntregador = gx.date.nullDate() ;
   this.Z10840EntregaDataAcertoEntregador = gx.date.nullDate() ;
   this.O10840EntregaDataAcertoEntregador = gx.date.nullDate() ;
   this.A10841EntregaValorAcertoEntregador = 0 ;
   this.Z10841EntregaValorAcertoEntregador = 0 ;
   this.O10841EntregaValorAcertoEntregador = 0 ;
   this.A10847EntregaDataHoraRetornoEntrega = gx.date.nullDate() ;
   this.Z10847EntregaDataHoraRetornoEntrega = gx.date.nullDate() ;
   this.O10847EntregaDataHoraRetornoEntrega = gx.date.nullDate() ;
   this.A10842EntregaValorTroco = 0 ;
   this.Z10842EntregaValorTroco = 0 ;
   this.O10842EntregaValorTroco = 0 ;
   this.A10810EntregaLancCreTrocoEmpId = "" ;
   this.Z10810EntregaLancCreTrocoEmpId = "" ;
   this.O10810EntregaLancCreTrocoEmpId = "" ;
   this.A10811EntregaLancCreTrocoNumero = 0 ;
   this.Z10811EntregaLancCreTrocoNumero = 0 ;
   this.O10811EntregaLancCreTrocoNumero = 0 ;
   this.A10812EntregaLancDebTrocoEmpId = "" ;
   this.Z10812EntregaLancDebTrocoEmpId = "" ;
   this.O10812EntregaLancDebTrocoEmpId = "" ;
   this.A10813EntregaLancDebTrocoNumero = 0 ;
   this.Z10813EntregaLancDebTrocoNumero = 0 ;
   this.O10813EntregaLancDebTrocoNumero = 0 ;
   this.A10843EntregaValorTaxaEntrega = 0 ;
   this.Z10843EntregaValorTaxaEntrega = 0 ;
   this.O10843EntregaValorTaxaEntrega = 0 ;
   this.A10814EntregaLancTaxaEmpId = "" ;
   this.Z10814EntregaLancTaxaEmpId = "" ;
   this.O10814EntregaLancTaxaEmpId = "" ;
   this.A10815EntregaLancTaxaNumero = 0 ;
   this.Z10815EntregaLancTaxaNumero = 0 ;
   this.O10815EntregaLancTaxaNumero = 0 ;
   this.A10844EntregaObsEntrega = "" ;
   this.Z10844EntregaObsEntrega = "" ;
   this.O10844EntregaObsEntrega = "" ;
   this.A10850EntregaDataHoraEntrega = gx.date.nullDate() ;
   this.Z10850EntregaDataHoraEntrega = gx.date.nullDate() ;
   this.O10850EntregaDataHoraEntrega = gx.date.nullDate() ;
   this.A11192EntregaNomeCliente = "" ;
   this.Z11192EntregaNomeCliente = "" ;
   this.O11192EntregaNomeCliente = "" ;
   this.A10829EntregaUsuarioAlt = "" ;
   this.Z10829EntregaUsuarioAlt = "" ;
   this.O10829EntregaUsuarioAlt = "" ;
   this.A10855EntregaDataHoraAlt = gx.date.nullDate() ;
   this.Z10855EntregaDataHoraAlt = gx.date.nullDate() ;
   this.O10855EntregaDataHoraAlt = gx.date.nullDate() ;
   this.Z10823EntregaOcorrenciaSequencia = 0 ;
   this.O10823EntregaOcorrenciaSequencia = 0 ;
   this.Z10824EntregaOcorrenciaUsuarioId = "" ;
   this.O10824EntregaOcorrenciaUsuarioId = "" ;
   this.Z10860EntregaOcorrenciaUsuarioNome = "" ;
   this.O10860EntregaOcorrenciaUsuarioNome = "" ;
   this.Z10856EntregaOcorrenciaDataHora = gx.date.nullDate() ;
   this.O10856EntregaOcorrenciaDataHora = gx.date.nullDate() ;
   this.Z10857EntregaOcorrenciaSituacao = "" ;
   this.O10857EntregaOcorrenciaSituacao = "" ;
   this.Z10858EntregaOcorrenciaUsuarioAlt = "" ;
   this.O10858EntregaOcorrenciaUsuarioAlt = "" ;
   this.Z10859EntregaOcorrenciaDataHoraAlt = gx.date.nullDate() ;
   this.O10859EntregaOcorrenciaDataHoraAlt = gx.date.nullDate() ;
   this.A10823EntregaOcorrenciaSequencia = 0 ;
   this.A10824EntregaOcorrenciaUsuarioId = "" ;
   this.A10860EntregaOcorrenciaUsuarioNome = "" ;
   this.A10856EntregaOcorrenciaDataHora = gx.date.nullDate() ;
   this.A10857EntregaOcorrenciaSituacao = "" ;
   this.A10858EntregaOcorrenciaUsuarioAlt = "" ;
   this.A10859EntregaOcorrenciaDataHoraAlt = gx.date.nullDate() ;
   this.A10808EntregaEmpresaId = "" ;
   this.A10809EntregaNumero = 0 ;
   this.A11192EntregaNomeCliente = "" ;
   this.A10906EntregaClienteRota = "" ;
   this.A10821EntregaClienteEmpresaId = "" ;
   this.A10822EntregaClienteId = 0 ;
   this.A10832EntregaClienteNome = "" ;
   this.A11182EntregaClienteRazSol = "" ;
   this.A10849EntregaCliente = "" ;
   this.A10833EntregaEnderecoEntrega = "" ;
   this.A10834EntregaNumeroEndEntrega = 0 ;
   this.A10835EntregaComplementoEndEntrega = "" ;
   this.A10836EntregaBairroEndEntrega = "" ;
   this.A10837EntregaCEPEndEntrega = "" ;
   this.A10820EntregaCidadeEndEntregaId = 0 ;
   this.A10831EntregaCidadeEndEntregaNome = "" ;
   this.A10854EntregaCidadeEndEntregaUF = "" ;
   this.A10818EntregaSaidaEmpresaId = "" ;
   this.A10819EntregaSaidaId = 0 ;
   this.A10852EntregaSaidaData = gx.date.nullDate() ;
   this.A11295EntregaSaidaHora = "" ;
   this.A10851EntregaSaidaNoDocumento = 0 ;
   this.A10853EntregaSaidaValorTotal = 0 ;
   this.A11296EntregaSaidaTipoFaturamento = "" ;
   this.A10838EntregaTipoServico = "" ;
   this.A10830EntregaSituacao = "" ;
   this.A10839EntregaObsServico = "" ;
   this.A10848EntregaDataHoraSaidaEntrega = gx.date.nullDate() ;
   this.A10816EntregaEntregadorEmpId = "" ;
   this.A10817EntregaEntregadorId = 0 ;
   this.A10845EntregaEntregadorNome = "" ;
   this.A10840EntregaDataAcertoEntregador = gx.date.nullDate() ;
   this.A10841EntregaValorAcertoEntregador = 0 ;
   this.A10847EntregaDataHoraRetornoEntrega = gx.date.nullDate() ;
   this.A10842EntregaValorTroco = 0 ;
   this.A10810EntregaLancCreTrocoEmpId = "" ;
   this.A10811EntregaLancCreTrocoNumero = 0 ;
   this.A10812EntregaLancDebTrocoEmpId = "" ;
   this.A10813EntregaLancDebTrocoNumero = 0 ;
   this.A10843EntregaValorTaxaEntrega = 0 ;
   this.A10814EntregaLancTaxaEmpId = "" ;
   this.A10815EntregaLancTaxaNumero = 0 ;
   this.A10844EntregaObsEntrega = "" ;
   this.A10850EntregaDataHoraEntrega = gx.date.nullDate() ;
   this.A10829EntregaUsuarioAlt = "" ;
   this.A10855EntregaDataHoraAlt = gx.date.nullDate() ;
   this.A6063SaidaValorServico = 0 ;
   this.A6064SaidaValorProduto = 0 ;
   this.A6065SaidaValorDesconto = 0 ;
   this.A6076SaidaValorICMSST = 0 ;
   this.A6068SaidaValorSeguro = 0 ;
   this.A6069SaidaValorOutrasDespesas = 0 ;
   this.A6077SaidaValorIPI = 0 ;
   this.A6067SaidaValorFrete = 0 ;
   this.A6092SaidaFreteEntraTotal = "" ;
   this.A10677SaidaValorFCPST = 0 ;
   this.A10671SaidaValorICMSDesonerado = 0 ;
   this.Events = {"e11fl796_client": ["ENTER", true] ,"e12fl796_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_10821_10822", [49,54]);
   this.setPrompt("PROMPT_10820", [104]);
   this.setPrompt("PROMPT_10818_10819", [119,124]);
   this.setPrompt("PROMPT_10816_10817", [174,179]);
   this.setPrompt("PROMPT_10810_10811", [209,214]);
   this.setPrompt("PROMPT_10812_10813", [219,224]);
   this.setPrompt("PROMPT_10814_10815", [234,239]);
   this.setPrompt("PROMPT_10824", [273]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("A6063SaidaValorServico", "SAIDAVALORSERVICO", 0, "decimal");
   this.setVCMap("A6064SaidaValorProduto", "SAIDAVALORPRODUTO", 0, "decimal");
   this.setVCMap("A6065SaidaValorDesconto", "SAIDAVALORDESCONTO", 0, "decimal");
   this.setVCMap("A6076SaidaValorICMSST", "SAIDAVALORICMSST", 0, "decimal");
   this.setVCMap("A6068SaidaValorSeguro", "SAIDAVALORSEGURO", 0, "decimal");
   this.setVCMap("A6069SaidaValorOutrasDespesas", "SAIDAVALOROUTRASDESPESAS", 0, "decimal");
   this.setVCMap("A6077SaidaValorIPI", "SAIDAVALORIPI", 0, "decimal");
   this.setVCMap("A6067SaidaValorFrete", "SAIDAVALORFRETE", 0, "decimal");
   this.setVCMap("A6092SaidaFreteEntraTotal", "SAIDAFRETEENTRATOTAL", 0, "char");
   this.setVCMap("A10677SaidaValorFCPST", "SAIDAVALORFCPST", 0, "decimal");
   this.setVCMap("A10671SaidaValorICMSDesonerado", "SAIDAVALORICMSDESONERADO", 0, "decimal");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tentrega());
