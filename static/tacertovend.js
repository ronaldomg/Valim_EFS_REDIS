/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:40:30.44
*/
gx.evt.autoSkip = false;
gx.define('tacertovend', false, function () {
   this.ServerClass =  "tacertovend" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Vendedorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VENDEDOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Vendedorid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Vendedorid",["gx.O.A1229VendedorEmpresaId", "gx.O.A1237VendedorId", "gx.O.A1148VendedorNome"],["A1148VendedorNome"]);
      return true;
   }
   this.Valid_Acertovenddata=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Acertovenddata",["gx.O.A2571AcertoVendCidadeUF", "gx.O.A1229VendedorEmpresaId", "gx.O.A1237VendedorId", 'gx.date.urlDate(gx.O.A2494AcertoVendData,"DMY4")', "gx.num.urlDecimal(gx.O.A2495AcertoVendSaidaNota,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2496AcertoVendRetornoNota,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2497AcertoVendSaida1250,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2498AcertoVendSaida2250,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2499AcertoVendSaida3250,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2500AcertoVendSaida4250,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2501AcertoVendSaida1500,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2502AcertoVendSaida2500,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2503AcertoVendSaida3500,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2504AcertoVendSaida4500,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2505AcertoVendSaida1GTor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2506AcertoVendSaida2GTor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2507AcertoVendSaida3GTor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2508AcertoVendSaida4GTor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2509AcertoVendSaida1Exp,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2510AcertoVendSaida2Exp,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2511AcertoVendSaida3Exp,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2512AcertoVendSaida4Exp,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2513AcertoVendSaidaOutCid250,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2514AcertoVendSaidaOutCid500,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2515AcertoVendSaidaOutCidGTor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2516AcertoVendSaidaOutCidExp,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2517AcertoVendRetorno250,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2518AcertoVendRetorno500,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2519AcertoVendRetornoGTor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2520AcertoVendRetornoExp,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2521AcertoVendRecebidoDin,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2522AcertoVendRecebidoChe,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2567AcertoVendPrecoPad250500,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2525AcertoVendPrecoPadGTor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A2526AcertoVendPrecoPadExp,\'.\',\',\')", "gx.O.A2541AcertoVendUsuarioAlt", 'gx.date.urlDateTime(gx.O.A2542AcertoVendDataHoraAlt,"DMY4")', "gx.O.A2569AcertoVendCidadeId"],["A2495AcertoVendSaidaNota", "A2496AcertoVendRetornoNota", "A2569AcertoVendCidadeId", "A2497AcertoVendSaida1250", "A2498AcertoVendSaida2250", "A2499AcertoVendSaida3250", "A2500AcertoVendSaida4250", "A2501AcertoVendSaida1500", "A2502AcertoVendSaida2500", "A2503AcertoVendSaida3500", "A2504AcertoVendSaida4500", "A2505AcertoVendSaida1GTor", "A2506AcertoVendSaida2GTor", "A2507AcertoVendSaida3GTor", "A2508AcertoVendSaida4GTor", "A2509AcertoVendSaida1Exp", "A2510AcertoVendSaida2Exp", "A2511AcertoVendSaida3Exp", "A2512AcertoVendSaida4Exp", "A2513AcertoVendSaidaOutCid250", "A2514AcertoVendSaidaOutCid500", "A2515AcertoVendSaidaOutCidGTor", "A2516AcertoVendSaidaOutCidExp", "A2517AcertoVendRetorno250", "A2518AcertoVendRetorno500", "A2519AcertoVendRetornoGTor", "A2520AcertoVendRetornoExp", "A2521AcertoVendRecebidoDin", "A2522AcertoVendRecebidoChe", "A2567AcertoVendPrecoPad250500", "A2525AcertoVendPrecoPadGTor", "A2526AcertoVendPrecoPadExp", "A2541AcertoVendUsuarioAlt", "A2542AcertoVendDataHoraAlt", "A1148VendedorNome", "A2570AcertoVendCidadeNome", "A2571AcertoVendCidadeUF", "Gx_mode", "Z1229VendedorEmpresaId", "Z1237VendedorId", "Z2494AcertoVendData", "Z2495AcertoVendSaidaNota", "Z2496AcertoVendRetornoNota", "Z2569AcertoVendCidadeId", "Z2497AcertoVendSaida1250", "Z2498AcertoVendSaida2250", "Z2499AcertoVendSaida3250", "Z2500AcertoVendSaida4250", "Z2501AcertoVendSaida1500", "Z2502AcertoVendSaida2500", "Z2503AcertoVendSaida3500", "Z2504AcertoVendSaida4500", "Z2505AcertoVendSaida1GTor", "Z2506AcertoVendSaida2GTor", "Z2507AcertoVendSaida3GTor", "Z2508AcertoVendSaida4GTor", "Z2509AcertoVendSaida1Exp", "Z2510AcertoVendSaida2Exp", "Z2511AcertoVendSaida3Exp", "Z2512AcertoVendSaida4Exp", "Z2513AcertoVendSaidaOutCid250", "Z2514AcertoVendSaidaOutCid500", "Z2515AcertoVendSaidaOutCidGTor", "Z2516AcertoVendSaidaOutCidExp", "Z2517AcertoVendRetorno250", "Z2518AcertoVendRetorno500", "Z2519AcertoVendRetornoGTor", "Z2520AcertoVendRetornoExp", "Z2521AcertoVendRecebidoDin", "Z2522AcertoVendRecebidoChe", "Z2567AcertoVendPrecoPad250500", "Z2525AcertoVendPrecoPadGTor", "Z2526AcertoVendPrecoPadExp", "Z2541AcertoVendUsuarioAlt", "Z2542AcertoVendDataHoraAlt", "Z1148VendedorNome", "Z2570AcertoVendCidadeNome", "Z2571AcertoVendCidadeUF", "Grid1", "Grid2", "Grid3", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Acertovendcidadeid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Acertovendcidadeid",["gx.O.A2569AcertoVendCidadeId", "gx.O.A2570AcertoVendCidadeNome", "gx.O.A2571AcertoVendCidadeUF"],["A2570AcertoVendCidadeNome", "A2571AcertoVendCidadeUF"]);
      return true;
   }
   this.Valid_Acertovendvendaseq=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(217) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ACERTOVENDVENDASEQ", gx.fn.currentGridRowImpl(217));
         this.AnyError  = 0;
         this.sMode266 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(266,217)  ;
         this.standaloneModal4O266( );
         this.standaloneNotModal4O266( );
         if ( gx.fn.gridDuplicateKey(219) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Venda", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode266  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal4O266=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("ACERTOVENDVENDASEQ","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("ACERTOVENDVENDASEQ","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal4O266=function()
   {
      return true;
   }
   this.Valid_Acertovendcortesiaseq=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(242) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ACERTOVENDCORTESIASEQ", gx.fn.currentGridRowImpl(242));
         this.AnyError  = 0;
         this.sMode267 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(267,242)  ;
         this.standaloneModal4O267( );
         this.standaloneNotModal4O267( );
         if ( gx.fn.gridDuplicateKey(244) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Cortesia", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode267  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal4O267=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("ACERTOVENDCORTESIASEQ","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("ACERTOVENDCORTESIASEQ","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal4O267=function()
   {
      return true;
   }
   this.Valid_Acertovendrecdesseq=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(255) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ACERTOVENDRECDESSEQ", gx.fn.currentGridRowImpl(255));
         this.AnyError  = 0;
         this.sMode268 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(268,255)  ;
         this.standaloneModal4O268( );
         this.standaloneNotModal4O268( );
         if ( gx.fn.gridDuplicateKey(257) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Receita/Despesa", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode268  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal4O268=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("ACERTOVENDRECDESSEQ","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("ACERTOVENDRECDESSEQ","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal4O268=function()
   {
      return true;
   }
   this.e114o265_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e124o265_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e134o265_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,25,27,30,32,36,38,41,43,46,48,51,53,56,58,61,63,66,68,71,73,76,78,81,83,86,88,91,93,96,98,101,103,106,108,111,113,116,118,121,123,126,128,131,133,136,138,141,143,146,148,151,153,156,158,161,163,166,168,171,173,176,178,181,183,186,188,191,193,196,198,201,203,206,208,211,213,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,243,244,245,246,247,248,249,250,251,256,257,258,259,260,261,262,263,264,267,268,269,272,282,284,287,288];
   this.GXLastCtrlId =288;
   this.Grid1Container = new gx.grid.grid(this, 266,"Venda",217,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tacertovend",[2527],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_266",218,"vNRCDDELETED_266","","","nRcdDeleted_266","int",0,"px",4,1,"right",null,[],"nRcdDeleted_266","nRcdDeleted_266",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2527,219,"ACERTOVENDVENDASEQ","Sequência","","AcertoVendVendaSeq","int",0,"px",4,4,"right",null,[],2527,"AcertoVendVendaSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2528,220,"ACERTOVENDVENDAESTABELECIMENTO","Acerto Vend Venda Estabelecimento","","AcertoVendVendaEstabelecimento","svchar",0,"px",20,20,"left",null,[],2528,"AcertoVendVendaEstabelecimento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2529,221,"ACERTOVENDQTDE250","Quantidade 250","","AcertoVendQtde250","decimal",0,"px",22,22,"right",null,[],2529,"AcertoVendQtde250",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2530,222,"ACERTOVENDVALOR250","Valor 250","","AcertoVendValor250","decimal",0,"px",22,22,"right",null,[],2530,"AcertoVendValor250",true,2,false,false,"Attribute",1,"");
   Grid1Container.addCheckBox(2531,223,"ACERTOVENDSNPRAZO250","Prazo 250","Prz","AcertoVendSnPrazo250","char","S","N",null,true,false,0,"px","");
   Grid1Container.addCheckBox(2563,224,"ACERTOVENDSNSNOTA250","Acerto Vend Sn SNota250","Sem Nota","AcertoVendSnSNota250","char","S","N",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(2535,225,"ACERTOVENDQTDE500","Quantidade 500","","AcertoVendQtde500","decimal",0,"px",22,22,"right",null,[],2535,"AcertoVendQtde500",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2536,226,"ACERTOVENDVALOR500","Valor 500","","AcertoVendValor500","decimal",0,"px",22,22,"right",null,[],2536,"AcertoVendValor500",true,2,false,false,"Attribute",1,"");
   Grid1Container.addCheckBox(2532,227,"ACERTOVENDSNPRAZO500","Prazo 500","Prz","AcertoVendSnPrazo500","char","S","N",null,true,false,0,"px","");
   Grid1Container.addCheckBox(2564,228,"ACERTOVENDSNSNOTA500","Sem Nota 500","Sem Nota","AcertoVendSnSNota500","char","S","N",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(2537,229,"ACERTOVENDQTDEGTOR","Quantidade Grão Torrado","","AcertoVendQtdeGTor","decimal",0,"px",22,22,"right",null,[],2537,"AcertoVendQtdeGTor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2538,230,"ACERTOVENDVALORGTOR","Valor Grão Torrado","","AcertoVendValorGTor","decimal",0,"px",22,22,"right",null,[],2538,"AcertoVendValorGTor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addCheckBox(2533,231,"ACERTOVENDSNPRAZOGTOR","Prazo Grão Torrado","Prz","AcertoVendSnPrazoGTor","char","S","N",null,true,false,0,"px","");
   Grid1Container.addCheckBox(2565,232,"ACERTOVENDSNSNOTAGTOR","Sem Nota Grão Torrado","Sem Nota","AcertoVendSnSNotaGTor","char","S","N",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(2539,233,"ACERTOVENDQTDEEXP","Quantidade Expresso","","AcertoVendQtdeExp","decimal",0,"px",22,22,"right",null,[],2539,"AcertoVendQtdeExp",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2540,234,"ACERTOVENDVALOREXP","Valor Expresso","","AcertoVendValorExp","decimal",0,"px",22,22,"right",null,[],2540,"AcertoVendValorExp",true,2,false,false,"Attribute",1,"");
   Grid1Container.addCheckBox(2534,235,"ACERTOVENDSNPRAZOEXP","Prazo Expresso","Prz","AcertoVendSnPrazoExp","char","S","N",null,true,false,0,"px","");
   Grid1Container.addCheckBox(2566,236,"ACERTOVENDSNSNOTAEXP","Sem Nota Expresso","Sem Nota","AcertoVendSnSNotaExp","char","S","N",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(2543,237,"ACERTOVENDVENDAUSUALT","Usuário Alteração","","AcertoVendVendaUsuAlt","char",0,"px",12,12,"left",null,[],2543,"AcertoVendVendaUsuAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2544,238,"ACERTOVENDVENDADATAHORAALT","Data/Hora Alteração","","AcertoVendVendaDataHoraAlt","dtime",0,"px",16,16,"right",null,[],2544,"AcertoVendVendaDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.Grid2Container = new gx.grid.grid(this, 267,"Cortesia",242,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"tacertovend",[2546],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("nRcdDeleted_267",243,"vNRCDDELETED_267","","","nRcdDeleted_267","int",0,"px",4,1,"right",null,[],"nRcdDeleted_267","nRcdDeleted_267",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(2546,244,"ACERTOVENDCORTESIASEQ","Sequência","","AcertoVendCortesiaSeq","int",0,"px",4,4,"right",null,[],2546,"AcertoVendCortesiaSeq",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(2547,245,"ACERTOVENDCORTESIAESTAB","Estabelecimento","","AcertoVendCortesiaEstab","svchar",0,"px",20,20,"left",null,[],2547,"AcertoVendCortesiaEstab",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(2548,246,"ACERTOVENDCORTESIA250","Qtde Cortesia 250","","AcertoVendCortesia250","decimal",0,"px",22,22,"right",null,[],2548,"AcertoVendCortesia250",true,2,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(2549,247,"ACERTOVENDCORTESIA500","Qtde Cortesia 500","","AcertoVendCortesia500","decimal",0,"px",22,22,"right",null,[],2549,"AcertoVendCortesia500",true,2,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(2550,248,"ACERTOVENDCORTESIAGTOR","Qtde Cortesia Grão Torrado","","AcertoVendCortesiaGTor","decimal",0,"px",22,22,"right",null,[],2550,"AcertoVendCortesiaGTor",true,2,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(2551,249,"ACERTOVENDCORTESIAEXP","Qtde Cortesia Expresso","","AcertoVendCortesiaExp","decimal",0,"px",22,22,"right",null,[],2551,"AcertoVendCortesiaExp",true,2,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(2552,250,"ACERTOVENDCORTESIAUSUARIOALT","Usuário Alteração","","AcertoVendCortesiaUsuarioAlt","char",0,"px",12,12,"left",null,[],2552,"AcertoVendCortesiaUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit(2553,251,"ACERTOVENDCORTESIADATAHORAALT","Data/Hora alteração","","AcertoVendCortesiaDataHoraAlt","dtime",0,"px",16,16,"right",null,[],2553,"AcertoVendCortesiaDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   this.Grid3Container = new gx.grid.grid(this, 268,"RecDes",255,"Grid3","Grid3","Grid3Container",this.CmpContext,this.IsMasterPage,"tacertovend",[2554],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid3Container = this.Grid3Container;
   Grid3Container.addSingleLineEdit("nRcdDeleted_268",256,"vNRCDDELETED_268","","","nRcdDeleted_268","int",0,"px",4,1,"right",null,[],"nRcdDeleted_268","nRcdDeleted_268",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(2554,257,"ACERTOVENDRECDESSEQ","Sequência","","AcertoVendRecDesSeq","int",0,"px",4,4,"right",null,[],2554,"AcertoVendRecDesSeq",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(2555,258,"ACERTOVENDRECDESDESCRICAO","Descrição","","AcertoVendRecDesDescricao","svchar",0,"px",30,30,"left",null,[],2555,"AcertoVendRecDesDescricao",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(2556,259,"ACERTOVENDRECDESVALOR","Valor","","AcertoVendRecDesValor","decimal",0,"px",22,22,"right",null,[],2556,"AcertoVendRecDesValor",true,2,false,false,"Attribute",1,"");
   Grid3Container.addComboBox(2545,260,"ACERTOVENDRECDESTIPO","Tipo","AcertoVendRecDesTipo","char",null,0,true,false,0,"px","");
   Grid3Container.addSingleLineEdit(2557,261,"ACERTOVENDRECDESOBS","Observação","","AcertoVendRecDesObs","svchar",0,"px",30,30,"left",null,[],2557,"AcertoVendRecDesObs",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(2558,262,"ACERTOVENDRECDESUSUARIOALT","Usuário Alteração","","AcertoVendRecDesUsuarioAlt","char",0,"px",12,12,"left",null,[],2558,"AcertoVendRecDesUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid3Container.addSingleLineEdit(2559,263,"ACERTOVENDRECDESDATAHORAALT","Data/Hora Alteração","","AcertoVendRecDesDataHoraAlt","dtime",0,"px",16,16,"right",null,[],2559,"AcertoVendRecDesDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid3Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TXTTITULO", format:0,grid:0};
   GXValidFnc[9]={fld:"TAB1",grid:0};
   GXValidFnc[12]={fld:"TABLE2",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vendedorempresaid,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container,this.Grid3Container],fld:"VENDEDOREMPRESAID",gxz:"Z1229VendedorEmpresaId",gxold:"O1229VendedorEmpresaId",gxvar:"A1229VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1229VendedorEmpresaId=Value},v2z:function(Value){gx.O.Z1229VendedorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("VENDEDOREMPRESAID",gx.O.A1229VendedorEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1229VendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("VENDEDOREMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[20]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vendedorid,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container,this.Grid3Container],fld:"VENDEDORID",gxz:"Z1237VendedorId",gxold:"O1237VendedorId",gxvar:"A1237VendedorId",ucs:[],op:[27],ip:[27,22,17],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1237VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1237VendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VENDEDORID",gx.O.A1237VendedorId,0)},c2v:function(){gx.O.A1237VendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORNOME",gxz:"Z1148VendedorNome",gxold:"O1148VendedorNome",gxvar:"A1148VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1148VendedorNome=Value},v2z:function(Value){gx.O.Z1148VendedorNome=Value},v2c:function(){gx.fn.setControlValue("VENDEDORNOME",gx.O.A1148VendedorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1148VendedorNome=this.val()},val:function(){return gx.fn.getControlValue("VENDEDORNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acertovenddata,isvalid:null,rgrid:[this.Grid1Container,this.Grid2Container,this.Grid3Container],fld:"ACERTOVENDDATA",gxz:"Z2494AcertoVendData",gxold:"O2494AcertoVendData",gxvar:"A2494AcertoVendData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[48,213,208,203,198,193,188,183,178,173,168,163,158,153,148,143,138,133,128,123,118,113,108,103,98,93,88,83,78,73,68,63,43,38],ip:[48,213,208,203,198,193,188,183,178,173,168,163,158,153,148,143,138,133,128,123,118,113,108,103,98,93,88,83,78,73,68,63,43,38,32,22,17],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2494AcertoVendData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2494AcertoVendData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACERTOVENDDATA",gx.O.A2494AcertoVendData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2494AcertoVendData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ACERTOVENDDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[36]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDANOTA",gxz:"Z2495AcertoVendSaidaNota",gxold:"O2495AcertoVendSaidaNota",gxvar:"A2495AcertoVendSaidaNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2495AcertoVendSaidaNota=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2495AcertoVendSaidaNota=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDANOTA",gx.O.A2495AcertoVendSaidaNota,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2495AcertoVendSaidaNota=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDANOTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[41]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRETORNONOTA",gxz:"Z2496AcertoVendRetornoNota",gxold:"O2496AcertoVendRetornoNota",gxvar:"A2496AcertoVendRetornoNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2496AcertoVendRetornoNota=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2496AcertoVendRetornoNota=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDRETORNONOTA",gx.O.A2496AcertoVendRetornoNota,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2496AcertoVendRetornoNota=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDRETORNONOTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acertovendcidadeid,isvalid:null,rgrid:[],fld:"ACERTOVENDCIDADEID",gxz:"Z2569AcertoVendCidadeId",gxold:"O2569AcertoVendCidadeId",gxvar:"A2569AcertoVendCidadeId",ucs:[],op:[58,53],ip:[58,53,48],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2569AcertoVendCidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2569AcertoVendCidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACERTOVENDCIDADEID",gx.O.A2569AcertoVendCidadeId,0)},c2v:function(){gx.O.A2569AcertoVendCidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACERTOVENDCIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDCIDADENOME",gxz:"Z2570AcertoVendCidadeNome",gxold:"O2570AcertoVendCidadeNome",gxvar:"A2570AcertoVendCidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2570AcertoVendCidadeNome=Value},v2z:function(Value){gx.O.Z2570AcertoVendCidadeNome=Value},v2c:function(){gx.fn.setControlValue("ACERTOVENDCIDADENOME",gx.O.A2570AcertoVendCidadeNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2570AcertoVendCidadeNome=this.val()},val:function(){return gx.fn.getControlValue("ACERTOVENDCIDADENOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[56]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDCIDADEUF",gxz:"Z2571AcertoVendCidadeUF",gxold:"O2571AcertoVendCidadeUF",gxvar:"A2571AcertoVendCidadeUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2571AcertoVendCidadeUF=Value},v2z:function(Value){gx.O.Z2571AcertoVendCidadeUF=Value},v2c:function(){gx.fn.setComboBoxValue("ACERTOVENDCIDADEUF",gx.O.A2571AcertoVendCidadeUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2571AcertoVendCidadeUF=this.val()},val:function(){return gx.fn.getControlValue("ACERTOVENDCIDADEUF")},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[61]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA1250",gxz:"Z2497AcertoVendSaida1250",gxold:"O2497AcertoVendSaida1250",gxvar:"A2497AcertoVendSaida1250",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2497AcertoVendSaida1250=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2497AcertoVendSaida1250=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA1250",gx.O.A2497AcertoVendSaida1250,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2497AcertoVendSaida1250=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA1250",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[66]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA2250",gxz:"Z2498AcertoVendSaida2250",gxold:"O2498AcertoVendSaida2250",gxvar:"A2498AcertoVendSaida2250",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2498AcertoVendSaida2250=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2498AcertoVendSaida2250=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA2250",gx.O.A2498AcertoVendSaida2250,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2498AcertoVendSaida2250=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA2250",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[71]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA3250",gxz:"Z2499AcertoVendSaida3250",gxold:"O2499AcertoVendSaida3250",gxvar:"A2499AcertoVendSaida3250",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2499AcertoVendSaida3250=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2499AcertoVendSaida3250=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA3250",gx.O.A2499AcertoVendSaida3250,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2499AcertoVendSaida3250=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA3250",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[76]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA4250",gxz:"Z2500AcertoVendSaida4250",gxold:"O2500AcertoVendSaida4250",gxvar:"A2500AcertoVendSaida4250",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2500AcertoVendSaida4250=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2500AcertoVendSaida4250=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA4250",gx.O.A2500AcertoVendSaida4250,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2500AcertoVendSaida4250=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA4250",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[81]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA1500",gxz:"Z2501AcertoVendSaida1500",gxold:"O2501AcertoVendSaida1500",gxvar:"A2501AcertoVendSaida1500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2501AcertoVendSaida1500=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2501AcertoVendSaida1500=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA1500",gx.O.A2501AcertoVendSaida1500,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2501AcertoVendSaida1500=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA1500",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 83 , function() {
   });
   GXValidFnc[86]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA2500",gxz:"Z2502AcertoVendSaida2500",gxold:"O2502AcertoVendSaida2500",gxvar:"A2502AcertoVendSaida2500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2502AcertoVendSaida2500=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2502AcertoVendSaida2500=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA2500",gx.O.A2502AcertoVendSaida2500,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2502AcertoVendSaida2500=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA2500",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 88 , function() {
   });
   GXValidFnc[91]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA3500",gxz:"Z2503AcertoVendSaida3500",gxold:"O2503AcertoVendSaida3500",gxvar:"A2503AcertoVendSaida3500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2503AcertoVendSaida3500=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2503AcertoVendSaida3500=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA3500",gx.O.A2503AcertoVendSaida3500,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2503AcertoVendSaida3500=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA3500",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 93 , function() {
   });
   GXValidFnc[96]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA4500",gxz:"Z2504AcertoVendSaida4500",gxold:"O2504AcertoVendSaida4500",gxvar:"A2504AcertoVendSaida4500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2504AcertoVendSaida4500=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2504AcertoVendSaida4500=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA4500",gx.O.A2504AcertoVendSaida4500,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2504AcertoVendSaida4500=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA4500",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 98 , function() {
   });
   GXValidFnc[101]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA1GTOR",gxz:"Z2505AcertoVendSaida1GTor",gxold:"O2505AcertoVendSaida1GTor",gxvar:"A2505AcertoVendSaida1GTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2505AcertoVendSaida1GTor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2505AcertoVendSaida1GTor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA1GTOR",gx.O.A2505AcertoVendSaida1GTor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2505AcertoVendSaida1GTor=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA1GTOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 103 , function() {
   });
   GXValidFnc[106]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA2GTOR",gxz:"Z2506AcertoVendSaida2GTor",gxold:"O2506AcertoVendSaida2GTor",gxvar:"A2506AcertoVendSaida2GTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2506AcertoVendSaida2GTor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2506AcertoVendSaida2GTor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA2GTOR",gx.O.A2506AcertoVendSaida2GTor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2506AcertoVendSaida2GTor=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA2GTOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 108 , function() {
   });
   GXValidFnc[111]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[113]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA3GTOR",gxz:"Z2507AcertoVendSaida3GTor",gxold:"O2507AcertoVendSaida3GTor",gxvar:"A2507AcertoVendSaida3GTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2507AcertoVendSaida3GTor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2507AcertoVendSaida3GTor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA3GTOR",gx.O.A2507AcertoVendSaida3GTor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2507AcertoVendSaida3GTor=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA3GTOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 113 , function() {
   });
   GXValidFnc[116]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[118]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA4GTOR",gxz:"Z2508AcertoVendSaida4GTor",gxold:"O2508AcertoVendSaida4GTor",gxvar:"A2508AcertoVendSaida4GTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2508AcertoVendSaida4GTor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2508AcertoVendSaida4GTor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA4GTOR",gx.O.A2508AcertoVendSaida4GTor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2508AcertoVendSaida4GTor=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA4GTOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 118 , function() {
   });
   GXValidFnc[121]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA1EXP",gxz:"Z2509AcertoVendSaida1Exp",gxold:"O2509AcertoVendSaida1Exp",gxvar:"A2509AcertoVendSaida1Exp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2509AcertoVendSaida1Exp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2509AcertoVendSaida1Exp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA1EXP",gx.O.A2509AcertoVendSaida1Exp,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2509AcertoVendSaida1Exp=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA1EXP",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 123 , function() {
   });
   GXValidFnc[126]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[128]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA2EXP",gxz:"Z2510AcertoVendSaida2Exp",gxold:"O2510AcertoVendSaida2Exp",gxvar:"A2510AcertoVendSaida2Exp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2510AcertoVendSaida2Exp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2510AcertoVendSaida2Exp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA2EXP",gx.O.A2510AcertoVendSaida2Exp,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2510AcertoVendSaida2Exp=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA2EXP",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 128 , function() {
   });
   GXValidFnc[131]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA3EXP",gxz:"Z2511AcertoVendSaida3Exp",gxold:"O2511AcertoVendSaida3Exp",gxvar:"A2511AcertoVendSaida3Exp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2511AcertoVendSaida3Exp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2511AcertoVendSaida3Exp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA3EXP",gx.O.A2511AcertoVendSaida3Exp,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2511AcertoVendSaida3Exp=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA3EXP",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 133 , function() {
   });
   GXValidFnc[136]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[138]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDA4EXP",gxz:"Z2512AcertoVendSaida4Exp",gxold:"O2512AcertoVendSaida4Exp",gxvar:"A2512AcertoVendSaida4Exp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2512AcertoVendSaida4Exp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2512AcertoVendSaida4Exp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDA4EXP",gx.O.A2512AcertoVendSaida4Exp,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2512AcertoVendSaida4Exp=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDA4EXP",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 138 , function() {
   });
   GXValidFnc[141]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[143]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDAOUTCID250",gxz:"Z2513AcertoVendSaidaOutCid250",gxold:"O2513AcertoVendSaidaOutCid250",gxvar:"A2513AcertoVendSaidaOutCid250",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2513AcertoVendSaidaOutCid250=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2513AcertoVendSaidaOutCid250=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDAOUTCID250",gx.O.A2513AcertoVendSaidaOutCid250,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2513AcertoVendSaidaOutCid250=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDAOUTCID250",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 143 , function() {
   });
   GXValidFnc[146]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[148]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDAOUTCID500",gxz:"Z2514AcertoVendSaidaOutCid500",gxold:"O2514AcertoVendSaidaOutCid500",gxvar:"A2514AcertoVendSaidaOutCid500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2514AcertoVendSaidaOutCid500=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2514AcertoVendSaidaOutCid500=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDAOUTCID500",gx.O.A2514AcertoVendSaidaOutCid500,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2514AcertoVendSaidaOutCid500=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDAOUTCID500",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 148 , function() {
   });
   GXValidFnc[151]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[153]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDAOUTCIDGTOR",gxz:"Z2515AcertoVendSaidaOutCidGTor",gxold:"O2515AcertoVendSaidaOutCidGTor",gxvar:"A2515AcertoVendSaidaOutCidGTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2515AcertoVendSaidaOutCidGTor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2515AcertoVendSaidaOutCidGTor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDAOUTCIDGTOR",gx.O.A2515AcertoVendSaidaOutCidGTor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2515AcertoVendSaidaOutCidGTor=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDAOUTCIDGTOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 153 , function() {
   });
   GXValidFnc[156]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[158]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSAIDAOUTCIDEXP",gxz:"Z2516AcertoVendSaidaOutCidExp",gxold:"O2516AcertoVendSaidaOutCidExp",gxvar:"A2516AcertoVendSaidaOutCidExp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2516AcertoVendSaidaOutCidExp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2516AcertoVendSaidaOutCidExp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDSAIDAOUTCIDEXP",gx.O.A2516AcertoVendSaidaOutCidExp,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2516AcertoVendSaidaOutCidExp=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDSAIDAOUTCIDEXP",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 158 , function() {
   });
   GXValidFnc[161]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[163]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRETORNO250",gxz:"Z2517AcertoVendRetorno250",gxold:"O2517AcertoVendRetorno250",gxvar:"A2517AcertoVendRetorno250",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2517AcertoVendRetorno250=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2517AcertoVendRetorno250=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDRETORNO250",gx.O.A2517AcertoVendRetorno250,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2517AcertoVendRetorno250=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDRETORNO250",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 163 , function() {
   });
   GXValidFnc[166]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[168]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRETORNO500",gxz:"Z2518AcertoVendRetorno500",gxold:"O2518AcertoVendRetorno500",gxvar:"A2518AcertoVendRetorno500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2518AcertoVendRetorno500=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2518AcertoVendRetorno500=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDRETORNO500",gx.O.A2518AcertoVendRetorno500,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2518AcertoVendRetorno500=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDRETORNO500",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 168 , function() {
   });
   GXValidFnc[171]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[173]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRETORNOGTOR",gxz:"Z2519AcertoVendRetornoGTor",gxold:"O2519AcertoVendRetornoGTor",gxvar:"A2519AcertoVendRetornoGTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2519AcertoVendRetornoGTor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2519AcertoVendRetornoGTor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDRETORNOGTOR",gx.O.A2519AcertoVendRetornoGTor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2519AcertoVendRetornoGTor=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDRETORNOGTOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 173 , function() {
   });
   GXValidFnc[176]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[178]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRETORNOEXP",gxz:"Z2520AcertoVendRetornoExp",gxold:"O2520AcertoVendRetornoExp",gxvar:"A2520AcertoVendRetornoExp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2520AcertoVendRetornoExp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2520AcertoVendRetornoExp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDRETORNOEXP",gx.O.A2520AcertoVendRetornoExp,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2520AcertoVendRetornoExp=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDRETORNOEXP",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 178 , function() {
   });
   GXValidFnc[181]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[183]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRECEBIDODIN",gxz:"Z2521AcertoVendRecebidoDin",gxold:"O2521AcertoVendRecebidoDin",gxvar:"A2521AcertoVendRecebidoDin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2521AcertoVendRecebidoDin=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2521AcertoVendRecebidoDin=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDRECEBIDODIN",gx.O.A2521AcertoVendRecebidoDin,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2521AcertoVendRecebidoDin=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDRECEBIDODIN",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 183 , function() {
   });
   GXValidFnc[186]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[188]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRECEBIDOCHE",gxz:"Z2522AcertoVendRecebidoChe",gxold:"O2522AcertoVendRecebidoChe",gxvar:"A2522AcertoVendRecebidoChe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2522AcertoVendRecebidoChe=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2522AcertoVendRecebidoChe=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDRECEBIDOCHE",gx.O.A2522AcertoVendRecebidoChe,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2522AcertoVendRecebidoChe=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDRECEBIDOCHE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 188 , function() {
   });
   GXValidFnc[191]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[193]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDPRECOPAD250500",gxz:"Z2567AcertoVendPrecoPad250500",gxold:"O2567AcertoVendPrecoPad250500",gxvar:"A2567AcertoVendPrecoPad250500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2567AcertoVendPrecoPad250500=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2567AcertoVendPrecoPad250500=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDPRECOPAD250500",gx.O.A2567AcertoVendPrecoPad250500,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2567AcertoVendPrecoPad250500=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDPRECOPAD250500",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 193 , function() {
   });
   GXValidFnc[196]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[198]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDPRECOPADGTOR",gxz:"Z2525AcertoVendPrecoPadGTor",gxold:"O2525AcertoVendPrecoPadGTor",gxvar:"A2525AcertoVendPrecoPadGTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2525AcertoVendPrecoPadGTor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2525AcertoVendPrecoPadGTor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDPRECOPADGTOR",gx.O.A2525AcertoVendPrecoPadGTor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2525AcertoVendPrecoPadGTor=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDPRECOPADGTOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 198 , function() {
   });
   GXValidFnc[201]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[203]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDPRECOPADEXP",gxz:"Z2526AcertoVendPrecoPadExp",gxold:"O2526AcertoVendPrecoPadExp",gxvar:"A2526AcertoVendPrecoPadExp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2526AcertoVendPrecoPadExp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2526AcertoVendPrecoPadExp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ACERTOVENDPRECOPADEXP",gx.O.A2526AcertoVendPrecoPadExp,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2526AcertoVendPrecoPadExp=this.val()},val:function(){return gx.fn.getDecimalValue("ACERTOVENDPRECOPADEXP",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 203 , function() {
   });
   GXValidFnc[206]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[208]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDUSUARIOALT",gxz:"Z2541AcertoVendUsuarioAlt",gxold:"O2541AcertoVendUsuarioAlt",gxvar:"A2541AcertoVendUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2541AcertoVendUsuarioAlt=Value},v2z:function(Value){gx.O.Z2541AcertoVendUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ACERTOVENDUSUARIOALT",gx.O.A2541AcertoVendUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2541AcertoVendUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ACERTOVENDUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 208 , function() {
   });
   GXValidFnc[211]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[213]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDDATAHORAALT",gxz:"Z2542AcertoVendDataHoraAlt",gxold:"O2542AcertoVendDataHoraAlt",gxvar:"A2542AcertoVendDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2542AcertoVendDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2542AcertoVendDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ACERTOVENDDATAHORAALT",gx.O.A2542AcertoVendDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2542AcertoVendDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ACERTOVENDDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 213 , function() {
   });
   GXValidFnc[218]={lvl:266,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_266",gxz:"ZnRcdDeleted_266",gxold:"OnRcdDeleted_266",gxvar:"nRcdDeleted_266",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_266=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_266=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_266",row || gx.fn.currentGridRowImpl(217),gx.O.nRcdDeleted_266,0)},c2v:function(){gx.O.nRcdDeleted_266=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_266",row || gx.fn.currentGridRowImpl(217),'.')},nac:gx.falseFn};
   GXValidFnc[219]={lvl:266,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:this.Valid_Acertovendvendaseq,isvalid:null,rgrid:[],fld:"ACERTOVENDVENDASEQ",gxz:"Z2527AcertoVendVendaSeq",gxold:"O2527AcertoVendVendaSeq",gxvar:"A2527AcertoVendVendaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2527AcertoVendVendaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2527AcertoVendVendaSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDVENDASEQ",row || gx.fn.currentGridRowImpl(217),gx.O.A2527AcertoVendVendaSeq,0)},c2v:function(){gx.O.A2527AcertoVendVendaSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACERTOVENDVENDASEQ",row || gx.fn.currentGridRowImpl(217),'.')},nac:gx.falseFn};
   GXValidFnc[220]={lvl:266,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDVENDAESTABELECIMENTO",gxz:"Z2528AcertoVendVendaEstabelecimento",gxold:"O2528AcertoVendVendaEstabelecimento",gxvar:"A2528AcertoVendVendaEstabelecimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2528AcertoVendVendaEstabelecimento=Value},v2z:function(Value){gx.O.Z2528AcertoVendVendaEstabelecimento=Value},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDVENDAESTABELECIMENTO",row || gx.fn.currentGridRowImpl(217),gx.O.A2528AcertoVendVendaEstabelecimento,0)},c2v:function(){gx.O.A2528AcertoVendVendaEstabelecimento=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDVENDAESTABELECIMENTO",row || gx.fn.currentGridRowImpl(217))},nac:gx.falseFn};
   GXValidFnc[221]={lvl:266,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDQTDE250",gxz:"Z2529AcertoVendQtde250",gxold:"O2529AcertoVendQtde250",gxvar:"A2529AcertoVendQtde250",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2529AcertoVendQtde250=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2529AcertoVendQtde250=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDQTDE250",row || gx.fn.currentGridRowImpl(217),gx.O.A2529AcertoVendQtde250,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2529AcertoVendQtde250=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDQTDE250",row || gx.fn.currentGridRowImpl(217),'.',',')},nac:gx.falseFn};
   GXValidFnc[222]={lvl:266,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDVALOR250",gxz:"Z2530AcertoVendValor250",gxold:"O2530AcertoVendValor250",gxvar:"A2530AcertoVendValor250",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2530AcertoVendValor250=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2530AcertoVendValor250=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDVALOR250",row || gx.fn.currentGridRowImpl(217),gx.O.A2530AcertoVendValor250,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2530AcertoVendValor250=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDVALOR250",row || gx.fn.currentGridRowImpl(217),'.',',')},nac:gx.falseFn};
   GXValidFnc[223]={lvl:266,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSNPRAZO250",gxz:"Z2531AcertoVendSnPrazo250",gxold:"O2531AcertoVendSnPrazo250",gxvar:"A2531AcertoVendSnPrazo250",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A2531AcertoVendSnPrazo250=Value},v2z:function(Value){gx.O.Z2531AcertoVendSnPrazo250=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("ACERTOVENDSNPRAZO250",row || gx.fn.currentGridRowImpl(217),gx.O.A2531AcertoVendSnPrazo250,"S")},c2v:function(){gx.O.A2531AcertoVendSnPrazo250=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDSNPRAZO250",row || gx.fn.currentGridRowImpl(217))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[224]={lvl:266,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSNSNOTA250",gxz:"Z2563AcertoVendSnSNota250",gxold:"O2563AcertoVendSnSNota250",gxvar:"A2563AcertoVendSnSNota250",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A2563AcertoVendSnSNota250=Value},v2z:function(Value){gx.O.Z2563AcertoVendSnSNota250=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("ACERTOVENDSNSNOTA250",row || gx.fn.currentGridRowImpl(217),gx.O.A2563AcertoVendSnSNota250,"S")},c2v:function(){gx.O.A2563AcertoVendSnSNota250=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDSNSNOTA250",row || gx.fn.currentGridRowImpl(217))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[225]={lvl:266,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDQTDE500",gxz:"Z2535AcertoVendQtde500",gxold:"O2535AcertoVendQtde500",gxvar:"A2535AcertoVendQtde500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2535AcertoVendQtde500=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2535AcertoVendQtde500=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDQTDE500",row || gx.fn.currentGridRowImpl(217),gx.O.A2535AcertoVendQtde500,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2535AcertoVendQtde500=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDQTDE500",row || gx.fn.currentGridRowImpl(217),'.',',')},nac:gx.falseFn};
   GXValidFnc[226]={lvl:266,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDVALOR500",gxz:"Z2536AcertoVendValor500",gxold:"O2536AcertoVendValor500",gxvar:"A2536AcertoVendValor500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2536AcertoVendValor500=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2536AcertoVendValor500=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDVALOR500",row || gx.fn.currentGridRowImpl(217),gx.O.A2536AcertoVendValor500,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2536AcertoVendValor500=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDVALOR500",row || gx.fn.currentGridRowImpl(217),'.',',')},nac:gx.falseFn};
   GXValidFnc[227]={lvl:266,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSNPRAZO500",gxz:"Z2532AcertoVendSnPrazo500",gxold:"O2532AcertoVendSnPrazo500",gxvar:"A2532AcertoVendSnPrazo500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A2532AcertoVendSnPrazo500=Value},v2z:function(Value){gx.O.Z2532AcertoVendSnPrazo500=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("ACERTOVENDSNPRAZO500",row || gx.fn.currentGridRowImpl(217),gx.O.A2532AcertoVendSnPrazo500,"S")},c2v:function(){gx.O.A2532AcertoVendSnPrazo500=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDSNPRAZO500",row || gx.fn.currentGridRowImpl(217))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[228]={lvl:266,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSNSNOTA500",gxz:"Z2564AcertoVendSnSNota500",gxold:"O2564AcertoVendSnSNota500",gxvar:"A2564AcertoVendSnSNota500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A2564AcertoVendSnSNota500=Value},v2z:function(Value){gx.O.Z2564AcertoVendSnSNota500=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("ACERTOVENDSNSNOTA500",row || gx.fn.currentGridRowImpl(217),gx.O.A2564AcertoVendSnSNota500,"S")},c2v:function(){gx.O.A2564AcertoVendSnSNota500=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDSNSNOTA500",row || gx.fn.currentGridRowImpl(217))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[229]={lvl:266,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDQTDEGTOR",gxz:"Z2537AcertoVendQtdeGTor",gxold:"O2537AcertoVendQtdeGTor",gxvar:"A2537AcertoVendQtdeGTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2537AcertoVendQtdeGTor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2537AcertoVendQtdeGTor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDQTDEGTOR",row || gx.fn.currentGridRowImpl(217),gx.O.A2537AcertoVendQtdeGTor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2537AcertoVendQtdeGTor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDQTDEGTOR",row || gx.fn.currentGridRowImpl(217),'.',',')},nac:gx.falseFn};
   GXValidFnc[230]={lvl:266,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDVALORGTOR",gxz:"Z2538AcertoVendValorGTor",gxold:"O2538AcertoVendValorGTor",gxvar:"A2538AcertoVendValorGTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2538AcertoVendValorGTor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2538AcertoVendValorGTor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDVALORGTOR",row || gx.fn.currentGridRowImpl(217),gx.O.A2538AcertoVendValorGTor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2538AcertoVendValorGTor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDVALORGTOR",row || gx.fn.currentGridRowImpl(217),'.',',')},nac:gx.falseFn};
   GXValidFnc[231]={lvl:266,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSNPRAZOGTOR",gxz:"Z2533AcertoVendSnPrazoGTor",gxold:"O2533AcertoVendSnPrazoGTor",gxvar:"A2533AcertoVendSnPrazoGTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A2533AcertoVendSnPrazoGTor=Value},v2z:function(Value){gx.O.Z2533AcertoVendSnPrazoGTor=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("ACERTOVENDSNPRAZOGTOR",row || gx.fn.currentGridRowImpl(217),gx.O.A2533AcertoVendSnPrazoGTor,"S")},c2v:function(){gx.O.A2533AcertoVendSnPrazoGTor=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDSNPRAZOGTOR",row || gx.fn.currentGridRowImpl(217))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[232]={lvl:266,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSNSNOTAGTOR",gxz:"Z2565AcertoVendSnSNotaGTor",gxold:"O2565AcertoVendSnSNotaGTor",gxvar:"A2565AcertoVendSnSNotaGTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A2565AcertoVendSnSNotaGTor=Value},v2z:function(Value){gx.O.Z2565AcertoVendSnSNotaGTor=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("ACERTOVENDSNSNOTAGTOR",row || gx.fn.currentGridRowImpl(217),gx.O.A2565AcertoVendSnSNotaGTor,"S")},c2v:function(){gx.O.A2565AcertoVendSnSNotaGTor=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDSNSNOTAGTOR",row || gx.fn.currentGridRowImpl(217))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[233]={lvl:266,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDQTDEEXP",gxz:"Z2539AcertoVendQtdeExp",gxold:"O2539AcertoVendQtdeExp",gxvar:"A2539AcertoVendQtdeExp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2539AcertoVendQtdeExp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2539AcertoVendQtdeExp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDQTDEEXP",row || gx.fn.currentGridRowImpl(217),gx.O.A2539AcertoVendQtdeExp,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2539AcertoVendQtdeExp=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDQTDEEXP",row || gx.fn.currentGridRowImpl(217),'.',',')},nac:gx.falseFn};
   GXValidFnc[234]={lvl:266,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDVALOREXP",gxz:"Z2540AcertoVendValorExp",gxold:"O2540AcertoVendValorExp",gxvar:"A2540AcertoVendValorExp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2540AcertoVendValorExp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2540AcertoVendValorExp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDVALOREXP",row || gx.fn.currentGridRowImpl(217),gx.O.A2540AcertoVendValorExp,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2540AcertoVendValorExp=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDVALOREXP",row || gx.fn.currentGridRowImpl(217),'.',',')},nac:gx.falseFn};
   GXValidFnc[235]={lvl:266,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSNPRAZOEXP",gxz:"Z2534AcertoVendSnPrazoExp",gxold:"O2534AcertoVendSnPrazoExp",gxvar:"A2534AcertoVendSnPrazoExp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A2534AcertoVendSnPrazoExp=Value},v2z:function(Value){gx.O.Z2534AcertoVendSnPrazoExp=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("ACERTOVENDSNPRAZOEXP",row || gx.fn.currentGridRowImpl(217),gx.O.A2534AcertoVendSnPrazoExp,"S")},c2v:function(){gx.O.A2534AcertoVendSnPrazoExp=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDSNPRAZOEXP",row || gx.fn.currentGridRowImpl(217))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[236]={lvl:266,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDSNSNOTAEXP",gxz:"Z2566AcertoVendSnSNotaExp",gxold:"O2566AcertoVendSnSNotaExp",gxvar:"A2566AcertoVendSnSNotaExp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A2566AcertoVendSnSNotaExp=Value},v2z:function(Value){gx.O.Z2566AcertoVendSnSNotaExp=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("ACERTOVENDSNSNOTAEXP",row || gx.fn.currentGridRowImpl(217),gx.O.A2566AcertoVendSnSNotaExp,"S")},c2v:function(){gx.O.A2566AcertoVendSnSNotaExp=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDSNSNOTAEXP",row || gx.fn.currentGridRowImpl(217))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[237]={lvl:266,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDVENDAUSUALT",gxz:"Z2543AcertoVendVendaUsuAlt",gxold:"O2543AcertoVendVendaUsuAlt",gxvar:"A2543AcertoVendVendaUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2543AcertoVendVendaUsuAlt=Value},v2z:function(Value){gx.O.Z2543AcertoVendVendaUsuAlt=Value},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDVENDAUSUALT",row || gx.fn.currentGridRowImpl(217),gx.O.A2543AcertoVendVendaUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2543AcertoVendVendaUsuAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDVENDAUSUALT",row || gx.fn.currentGridRowImpl(217))},nac:gx.falseFn};
   GXValidFnc[238]={lvl:266,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:1,grid:217,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDVENDADATAHORAALT",gxz:"Z2544AcertoVendVendaDataHoraAlt",gxold:"O2544AcertoVendVendaDataHoraAlt",gxvar:"A2544AcertoVendVendaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2544AcertoVendVendaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2544AcertoVendVendaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDVENDADATAHORAALT",row || gx.fn.currentGridRowImpl(217),gx.O.A2544AcertoVendVendaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2544AcertoVendVendaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACERTOVENDVENDADATAHORAALT",row || gx.fn.currentGridRowImpl(217))},nac:gx.falseFn};
   GXValidFnc[243]={lvl:267,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:242,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_267",gxz:"ZnRcdDeleted_267",gxold:"OnRcdDeleted_267",gxvar:"nRcdDeleted_267",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_267=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_267=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_267",row || gx.fn.currentGridRowImpl(242),gx.O.nRcdDeleted_267,0)},c2v:function(){gx.O.nRcdDeleted_267=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_267",row || gx.fn.currentGridRowImpl(242),'.')},nac:gx.falseFn};
   GXValidFnc[244]={lvl:267,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:242,gxgrid:this.Grid2Container,fnc:this.Valid_Acertovendcortesiaseq,isvalid:null,rgrid:[],fld:"ACERTOVENDCORTESIASEQ",gxz:"Z2546AcertoVendCortesiaSeq",gxold:"O2546AcertoVendCortesiaSeq",gxvar:"A2546AcertoVendCortesiaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2546AcertoVendCortesiaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2546AcertoVendCortesiaSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDCORTESIASEQ",row || gx.fn.currentGridRowImpl(242),gx.O.A2546AcertoVendCortesiaSeq,0)},c2v:function(){gx.O.A2546AcertoVendCortesiaSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACERTOVENDCORTESIASEQ",row || gx.fn.currentGridRowImpl(242),'.')},nac:gx.falseFn};
   GXValidFnc[245]={lvl:267,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:1,grid:242,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDCORTESIAESTAB",gxz:"Z2547AcertoVendCortesiaEstab",gxold:"O2547AcertoVendCortesiaEstab",gxvar:"A2547AcertoVendCortesiaEstab",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2547AcertoVendCortesiaEstab=Value},v2z:function(Value){gx.O.Z2547AcertoVendCortesiaEstab=Value},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDCORTESIAESTAB",row || gx.fn.currentGridRowImpl(242),gx.O.A2547AcertoVendCortesiaEstab,0)},c2v:function(){gx.O.A2547AcertoVendCortesiaEstab=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDCORTESIAESTAB",row || gx.fn.currentGridRowImpl(242))},nac:gx.falseFn};
   GXValidFnc[246]={lvl:267,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:242,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDCORTESIA250",gxz:"Z2548AcertoVendCortesia250",gxold:"O2548AcertoVendCortesia250",gxvar:"A2548AcertoVendCortesia250",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2548AcertoVendCortesia250=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2548AcertoVendCortesia250=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDCORTESIA250",row || gx.fn.currentGridRowImpl(242),gx.O.A2548AcertoVendCortesia250,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2548AcertoVendCortesia250=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDCORTESIA250",row || gx.fn.currentGridRowImpl(242),'.',',')},nac:gx.falseFn};
   GXValidFnc[247]={lvl:267,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:242,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDCORTESIA500",gxz:"Z2549AcertoVendCortesia500",gxold:"O2549AcertoVendCortesia500",gxvar:"A2549AcertoVendCortesia500",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2549AcertoVendCortesia500=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2549AcertoVendCortesia500=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDCORTESIA500",row || gx.fn.currentGridRowImpl(242),gx.O.A2549AcertoVendCortesia500,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2549AcertoVendCortesia500=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDCORTESIA500",row || gx.fn.currentGridRowImpl(242),'.',',')},nac:gx.falseFn};
   GXValidFnc[248]={lvl:267,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:242,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDCORTESIAGTOR",gxz:"Z2550AcertoVendCortesiaGTor",gxold:"O2550AcertoVendCortesiaGTor",gxvar:"A2550AcertoVendCortesiaGTor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2550AcertoVendCortesiaGTor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2550AcertoVendCortesiaGTor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDCORTESIAGTOR",row || gx.fn.currentGridRowImpl(242),gx.O.A2550AcertoVendCortesiaGTor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2550AcertoVendCortesiaGTor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDCORTESIAGTOR",row || gx.fn.currentGridRowImpl(242),'.',',')},nac:gx.falseFn};
   GXValidFnc[249]={lvl:267,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:242,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDCORTESIAEXP",gxz:"Z2551AcertoVendCortesiaExp",gxold:"O2551AcertoVendCortesiaExp",gxvar:"A2551AcertoVendCortesiaExp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2551AcertoVendCortesiaExp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2551AcertoVendCortesiaExp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDCORTESIAEXP",row || gx.fn.currentGridRowImpl(242),gx.O.A2551AcertoVendCortesiaExp,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2551AcertoVendCortesiaExp=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDCORTESIAEXP",row || gx.fn.currentGridRowImpl(242),'.',',')},nac:gx.falseFn};
   GXValidFnc[250]={lvl:267,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:242,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDCORTESIAUSUARIOALT",gxz:"Z2552AcertoVendCortesiaUsuarioAlt",gxold:"O2552AcertoVendCortesiaUsuarioAlt",gxvar:"A2552AcertoVendCortesiaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2552AcertoVendCortesiaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2552AcertoVendCortesiaUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDCORTESIAUSUARIOALT",row || gx.fn.currentGridRowImpl(242),gx.O.A2552AcertoVendCortesiaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2552AcertoVendCortesiaUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDCORTESIAUSUARIOALT",row || gx.fn.currentGridRowImpl(242))},nac:gx.falseFn};
   GXValidFnc[251]={lvl:267,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:1,grid:242,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDCORTESIADATAHORAALT",gxz:"Z2553AcertoVendCortesiaDataHoraAlt",gxold:"O2553AcertoVendCortesiaDataHoraAlt",gxvar:"A2553AcertoVendCortesiaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2553AcertoVendCortesiaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2553AcertoVendCortesiaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDCORTESIADATAHORAALT",row || gx.fn.currentGridRowImpl(242),gx.O.A2553AcertoVendCortesiaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2553AcertoVendCortesiaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACERTOVENDCORTESIADATAHORAALT",row || gx.fn.currentGridRowImpl(242))},nac:gx.falseFn};
   GXValidFnc[256]={lvl:268,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:255,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_268",gxz:"ZnRcdDeleted_268",gxold:"OnRcdDeleted_268",gxvar:"nRcdDeleted_268",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_268=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_268=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_268",row || gx.fn.currentGridRowImpl(255),gx.O.nRcdDeleted_268,0)},c2v:function(){gx.O.nRcdDeleted_268=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_268",row || gx.fn.currentGridRowImpl(255),'.')},nac:gx.falseFn};
   GXValidFnc[257]={lvl:268,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:255,gxgrid:this.Grid3Container,fnc:this.Valid_Acertovendrecdesseq,isvalid:null,rgrid:[],fld:"ACERTOVENDRECDESSEQ",gxz:"Z2554AcertoVendRecDesSeq",gxold:"O2554AcertoVendRecDesSeq",gxvar:"A2554AcertoVendRecDesSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2554AcertoVendRecDesSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2554AcertoVendRecDesSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDRECDESSEQ",row || gx.fn.currentGridRowImpl(255),gx.O.A2554AcertoVendRecDesSeq,0)},c2v:function(){gx.O.A2554AcertoVendRecDesSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACERTOVENDRECDESSEQ",row || gx.fn.currentGridRowImpl(255),'.')},nac:gx.falseFn};
   GXValidFnc[258]={lvl:268,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:1,grid:255,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRECDESDESCRICAO",gxz:"Z2555AcertoVendRecDesDescricao",gxold:"O2555AcertoVendRecDesDescricao",gxvar:"A2555AcertoVendRecDesDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2555AcertoVendRecDesDescricao=Value},v2z:function(Value){gx.O.Z2555AcertoVendRecDesDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDRECDESDESCRICAO",row || gx.fn.currentGridRowImpl(255),gx.O.A2555AcertoVendRecDesDescricao,0)},c2v:function(){gx.O.A2555AcertoVendRecDesDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDRECDESDESCRICAO",row || gx.fn.currentGridRowImpl(255))},nac:gx.falseFn};
   GXValidFnc[259]={lvl:268,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:255,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRECDESVALOR",gxz:"Z2556AcertoVendRecDesValor",gxold:"O2556AcertoVendRecDesValor",gxvar:"A2556AcertoVendRecDesValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2556AcertoVendRecDesValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2556AcertoVendRecDesValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ACERTOVENDRECDESVALOR",row || gx.fn.currentGridRowImpl(255),gx.O.A2556AcertoVendRecDesValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2556AcertoVendRecDesValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ACERTOVENDRECDESVALOR",row || gx.fn.currentGridRowImpl(255),'.',',')},nac:gx.falseFn};
   GXValidFnc[260]={lvl:268,type:"char",len:1,dec:0,sign:false,ro:0,isacc:1,grid:255,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRECDESTIPO",gxz:"Z2545AcertoVendRecDesTipo",gxold:"O2545AcertoVendRecDesTipo",gxvar:"A2545AcertoVendRecDesTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2545AcertoVendRecDesTipo=Value},v2z:function(Value){gx.O.Z2545AcertoVendRecDesTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("ACERTOVENDRECDESTIPO",row || gx.fn.currentGridRowImpl(255),gx.O.A2545AcertoVendRecDesTipo)},c2v:function(){gx.O.A2545AcertoVendRecDesTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDRECDESTIPO",row || gx.fn.currentGridRowImpl(255))},nac:gx.falseFn};
   GXValidFnc[261]={lvl:268,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:1,grid:255,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRECDESOBS",gxz:"Z2557AcertoVendRecDesObs",gxold:"O2557AcertoVendRecDesObs",gxvar:"A2557AcertoVendRecDesObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2557AcertoVendRecDesObs=Value},v2z:function(Value){gx.O.Z2557AcertoVendRecDesObs=Value},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDRECDESOBS",row || gx.fn.currentGridRowImpl(255),gx.O.A2557AcertoVendRecDesObs,0)},c2v:function(){gx.O.A2557AcertoVendRecDesObs=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDRECDESOBS",row || gx.fn.currentGridRowImpl(255))},nac:gx.falseFn};
   GXValidFnc[262]={lvl:268,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:255,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRECDESUSUARIOALT",gxz:"Z2558AcertoVendRecDesUsuarioAlt",gxold:"O2558AcertoVendRecDesUsuarioAlt",gxvar:"A2558AcertoVendRecDesUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2558AcertoVendRecDesUsuarioAlt=Value},v2z:function(Value){gx.O.Z2558AcertoVendRecDesUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDRECDESUSUARIOALT",row || gx.fn.currentGridRowImpl(255),gx.O.A2558AcertoVendRecDesUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2558AcertoVendRecDesUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("ACERTOVENDRECDESUSUARIOALT",row || gx.fn.currentGridRowImpl(255))},nac:gx.falseFn};
   GXValidFnc[263]={lvl:268,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:1,grid:255,gxgrid:this.Grid3Container,fnc:null,isvalid:null,rgrid:[],fld:"ACERTOVENDRECDESDATAHORAALT",gxz:"Z2559AcertoVendRecDesDataHoraAlt",gxold:"O2559AcertoVendRecDesDataHoraAlt",gxvar:"A2559AcertoVendRecDesDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2559AcertoVendRecDesDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2559AcertoVendRecDesDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACERTOVENDRECDESDATAHORAALT",row || gx.fn.currentGridRowImpl(255),gx.O.A2559AcertoVendRecDesDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2559AcertoVendRecDesDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACERTOVENDRECDESDATAHORAALT",row || gx.fn.currentGridRowImpl(255))},nac:gx.falseFn};
   GXValidFnc[264]={fld:"TAB2",grid:0};
   GXValidFnc[267]={fld:"DIV1", format:1,grid:0};
   GXValidFnc[268]={fld:"DIV2", format:1,grid:0};
   GXValidFnc[269]={fld:"TABLE21",grid:0};
   GXValidFnc[272]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[282]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[284]={fld:"BTNHELP",grid:0};
   GXValidFnc[287]={fld:"PROMPT_1229_1237",grid:265};
   GXValidFnc[288]={fld:"PROMPT_2569",grid:265};
   this.A1229VendedorEmpresaId = "" ;
   this.Z1229VendedorEmpresaId = "" ;
   this.O1229VendedorEmpresaId = "" ;
   this.A1237VendedorId = 0 ;
   this.Z1237VendedorId = 0 ;
   this.O1237VendedorId = 0 ;
   this.A1148VendedorNome = "" ;
   this.Z1148VendedorNome = "" ;
   this.O1148VendedorNome = "" ;
   this.A2494AcertoVendData = gx.date.nullDate() ;
   this.Z2494AcertoVendData = gx.date.nullDate() ;
   this.O2494AcertoVendData = gx.date.nullDate() ;
   this.A2495AcertoVendSaidaNota = 0 ;
   this.Z2495AcertoVendSaidaNota = 0 ;
   this.O2495AcertoVendSaidaNota = 0 ;
   this.A2496AcertoVendRetornoNota = 0 ;
   this.Z2496AcertoVendRetornoNota = 0 ;
   this.O2496AcertoVendRetornoNota = 0 ;
   this.A2569AcertoVendCidadeId = 0 ;
   this.Z2569AcertoVendCidadeId = 0 ;
   this.O2569AcertoVendCidadeId = 0 ;
   this.A2570AcertoVendCidadeNome = "" ;
   this.Z2570AcertoVendCidadeNome = "" ;
   this.O2570AcertoVendCidadeNome = "" ;
   this.A2571AcertoVendCidadeUF = "" ;
   this.Z2571AcertoVendCidadeUF = "" ;
   this.O2571AcertoVendCidadeUF = "" ;
   this.A2497AcertoVendSaida1250 = 0 ;
   this.Z2497AcertoVendSaida1250 = 0 ;
   this.O2497AcertoVendSaida1250 = 0 ;
   this.A2498AcertoVendSaida2250 = 0 ;
   this.Z2498AcertoVendSaida2250 = 0 ;
   this.O2498AcertoVendSaida2250 = 0 ;
   this.A2499AcertoVendSaida3250 = 0 ;
   this.Z2499AcertoVendSaida3250 = 0 ;
   this.O2499AcertoVendSaida3250 = 0 ;
   this.A2500AcertoVendSaida4250 = 0 ;
   this.Z2500AcertoVendSaida4250 = 0 ;
   this.O2500AcertoVendSaida4250 = 0 ;
   this.A2501AcertoVendSaida1500 = 0 ;
   this.Z2501AcertoVendSaida1500 = 0 ;
   this.O2501AcertoVendSaida1500 = 0 ;
   this.A2502AcertoVendSaida2500 = 0 ;
   this.Z2502AcertoVendSaida2500 = 0 ;
   this.O2502AcertoVendSaida2500 = 0 ;
   this.A2503AcertoVendSaida3500 = 0 ;
   this.Z2503AcertoVendSaida3500 = 0 ;
   this.O2503AcertoVendSaida3500 = 0 ;
   this.A2504AcertoVendSaida4500 = 0 ;
   this.Z2504AcertoVendSaida4500 = 0 ;
   this.O2504AcertoVendSaida4500 = 0 ;
   this.A2505AcertoVendSaida1GTor = 0 ;
   this.Z2505AcertoVendSaida1GTor = 0 ;
   this.O2505AcertoVendSaida1GTor = 0 ;
   this.A2506AcertoVendSaida2GTor = 0 ;
   this.Z2506AcertoVendSaida2GTor = 0 ;
   this.O2506AcertoVendSaida2GTor = 0 ;
   this.A2507AcertoVendSaida3GTor = 0 ;
   this.Z2507AcertoVendSaida3GTor = 0 ;
   this.O2507AcertoVendSaida3GTor = 0 ;
   this.A2508AcertoVendSaida4GTor = 0 ;
   this.Z2508AcertoVendSaida4GTor = 0 ;
   this.O2508AcertoVendSaida4GTor = 0 ;
   this.A2509AcertoVendSaida1Exp = 0 ;
   this.Z2509AcertoVendSaida1Exp = 0 ;
   this.O2509AcertoVendSaida1Exp = 0 ;
   this.A2510AcertoVendSaida2Exp = 0 ;
   this.Z2510AcertoVendSaida2Exp = 0 ;
   this.O2510AcertoVendSaida2Exp = 0 ;
   this.A2511AcertoVendSaida3Exp = 0 ;
   this.Z2511AcertoVendSaida3Exp = 0 ;
   this.O2511AcertoVendSaida3Exp = 0 ;
   this.A2512AcertoVendSaida4Exp = 0 ;
   this.Z2512AcertoVendSaida4Exp = 0 ;
   this.O2512AcertoVendSaida4Exp = 0 ;
   this.A2513AcertoVendSaidaOutCid250 = 0 ;
   this.Z2513AcertoVendSaidaOutCid250 = 0 ;
   this.O2513AcertoVendSaidaOutCid250 = 0 ;
   this.A2514AcertoVendSaidaOutCid500 = 0 ;
   this.Z2514AcertoVendSaidaOutCid500 = 0 ;
   this.O2514AcertoVendSaidaOutCid500 = 0 ;
   this.A2515AcertoVendSaidaOutCidGTor = 0 ;
   this.Z2515AcertoVendSaidaOutCidGTor = 0 ;
   this.O2515AcertoVendSaidaOutCidGTor = 0 ;
   this.A2516AcertoVendSaidaOutCidExp = 0 ;
   this.Z2516AcertoVendSaidaOutCidExp = 0 ;
   this.O2516AcertoVendSaidaOutCidExp = 0 ;
   this.A2517AcertoVendRetorno250 = 0 ;
   this.Z2517AcertoVendRetorno250 = 0 ;
   this.O2517AcertoVendRetorno250 = 0 ;
   this.A2518AcertoVendRetorno500 = 0 ;
   this.Z2518AcertoVendRetorno500 = 0 ;
   this.O2518AcertoVendRetorno500 = 0 ;
   this.A2519AcertoVendRetornoGTor = 0 ;
   this.Z2519AcertoVendRetornoGTor = 0 ;
   this.O2519AcertoVendRetornoGTor = 0 ;
   this.A2520AcertoVendRetornoExp = 0 ;
   this.Z2520AcertoVendRetornoExp = 0 ;
   this.O2520AcertoVendRetornoExp = 0 ;
   this.A2521AcertoVendRecebidoDin = 0 ;
   this.Z2521AcertoVendRecebidoDin = 0 ;
   this.O2521AcertoVendRecebidoDin = 0 ;
   this.A2522AcertoVendRecebidoChe = 0 ;
   this.Z2522AcertoVendRecebidoChe = 0 ;
   this.O2522AcertoVendRecebidoChe = 0 ;
   this.A2567AcertoVendPrecoPad250500 = 0 ;
   this.Z2567AcertoVendPrecoPad250500 = 0 ;
   this.O2567AcertoVendPrecoPad250500 = 0 ;
   this.A2525AcertoVendPrecoPadGTor = 0 ;
   this.Z2525AcertoVendPrecoPadGTor = 0 ;
   this.O2525AcertoVendPrecoPadGTor = 0 ;
   this.A2526AcertoVendPrecoPadExp = 0 ;
   this.Z2526AcertoVendPrecoPadExp = 0 ;
   this.O2526AcertoVendPrecoPadExp = 0 ;
   this.A2541AcertoVendUsuarioAlt = "" ;
   this.Z2541AcertoVendUsuarioAlt = "" ;
   this.O2541AcertoVendUsuarioAlt = "" ;
   this.A2542AcertoVendDataHoraAlt = gx.date.nullDate() ;
   this.Z2542AcertoVendDataHoraAlt = gx.date.nullDate() ;
   this.O2542AcertoVendDataHoraAlt = gx.date.nullDate() ;
   this.ZnRcdDeleted_266 = 0 ;
   this.OnRcdDeleted_266 = 0 ;
   this.Z2527AcertoVendVendaSeq = 0 ;
   this.O2527AcertoVendVendaSeq = 0 ;
   this.Z2528AcertoVendVendaEstabelecimento = "" ;
   this.O2528AcertoVendVendaEstabelecimento = "" ;
   this.Z2529AcertoVendQtde250 = 0 ;
   this.O2529AcertoVendQtde250 = 0 ;
   this.Z2530AcertoVendValor250 = 0 ;
   this.O2530AcertoVendValor250 = 0 ;
   this.Z2531AcertoVendSnPrazo250 = "" ;
   this.O2531AcertoVendSnPrazo250 = "" ;
   this.Z2563AcertoVendSnSNota250 = "" ;
   this.O2563AcertoVendSnSNota250 = "" ;
   this.Z2535AcertoVendQtde500 = 0 ;
   this.O2535AcertoVendQtde500 = 0 ;
   this.Z2536AcertoVendValor500 = 0 ;
   this.O2536AcertoVendValor500 = 0 ;
   this.Z2532AcertoVendSnPrazo500 = "" ;
   this.O2532AcertoVendSnPrazo500 = "" ;
   this.Z2564AcertoVendSnSNota500 = "" ;
   this.O2564AcertoVendSnSNota500 = "" ;
   this.Z2537AcertoVendQtdeGTor = 0 ;
   this.O2537AcertoVendQtdeGTor = 0 ;
   this.Z2538AcertoVendValorGTor = 0 ;
   this.O2538AcertoVendValorGTor = 0 ;
   this.Z2533AcertoVendSnPrazoGTor = "" ;
   this.O2533AcertoVendSnPrazoGTor = "" ;
   this.Z2565AcertoVendSnSNotaGTor = "" ;
   this.O2565AcertoVendSnSNotaGTor = "" ;
   this.Z2539AcertoVendQtdeExp = 0 ;
   this.O2539AcertoVendQtdeExp = 0 ;
   this.Z2540AcertoVendValorExp = 0 ;
   this.O2540AcertoVendValorExp = 0 ;
   this.Z2534AcertoVendSnPrazoExp = "" ;
   this.O2534AcertoVendSnPrazoExp = "" ;
   this.Z2566AcertoVendSnSNotaExp = "" ;
   this.O2566AcertoVendSnSNotaExp = "" ;
   this.Z2543AcertoVendVendaUsuAlt = "" ;
   this.O2543AcertoVendVendaUsuAlt = "" ;
   this.Z2544AcertoVendVendaDataHoraAlt = gx.date.nullDate() ;
   this.O2544AcertoVendVendaDataHoraAlt = gx.date.nullDate() ;
   this.ZnRcdDeleted_267 = 0 ;
   this.OnRcdDeleted_267 = 0 ;
   this.Z2546AcertoVendCortesiaSeq = 0 ;
   this.O2546AcertoVendCortesiaSeq = 0 ;
   this.Z2547AcertoVendCortesiaEstab = "" ;
   this.O2547AcertoVendCortesiaEstab = "" ;
   this.Z2548AcertoVendCortesia250 = 0 ;
   this.O2548AcertoVendCortesia250 = 0 ;
   this.Z2549AcertoVendCortesia500 = 0 ;
   this.O2549AcertoVendCortesia500 = 0 ;
   this.Z2550AcertoVendCortesiaGTor = 0 ;
   this.O2550AcertoVendCortesiaGTor = 0 ;
   this.Z2551AcertoVendCortesiaExp = 0 ;
   this.O2551AcertoVendCortesiaExp = 0 ;
   this.Z2552AcertoVendCortesiaUsuarioAlt = "" ;
   this.O2552AcertoVendCortesiaUsuarioAlt = "" ;
   this.Z2553AcertoVendCortesiaDataHoraAlt = gx.date.nullDate() ;
   this.O2553AcertoVendCortesiaDataHoraAlt = gx.date.nullDate() ;
   this.ZnRcdDeleted_268 = 0 ;
   this.OnRcdDeleted_268 = 0 ;
   this.Z2554AcertoVendRecDesSeq = 0 ;
   this.O2554AcertoVendRecDesSeq = 0 ;
   this.Z2555AcertoVendRecDesDescricao = "" ;
   this.O2555AcertoVendRecDesDescricao = "" ;
   this.Z2556AcertoVendRecDesValor = 0 ;
   this.O2556AcertoVendRecDesValor = 0 ;
   this.Z2545AcertoVendRecDesTipo = "" ;
   this.O2545AcertoVendRecDesTipo = "" ;
   this.Z2557AcertoVendRecDesObs = "" ;
   this.O2557AcertoVendRecDesObs = "" ;
   this.Z2558AcertoVendRecDesUsuarioAlt = "" ;
   this.O2558AcertoVendRecDesUsuarioAlt = "" ;
   this.Z2559AcertoVendRecDesDataHoraAlt = gx.date.nullDate() ;
   this.O2559AcertoVendRecDesDataHoraAlt = gx.date.nullDate() ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.ZV20AcessoSistemaSequencia = 0 ;
   this.OV20AcessoSistemaSequencia = 0 ;
   this.A2554AcertoVendRecDesSeq = 0 ;
   this.A2555AcertoVendRecDesDescricao = "" ;
   this.A2556AcertoVendRecDesValor = 0 ;
   this.A2545AcertoVendRecDesTipo = "" ;
   this.A2557AcertoVendRecDesObs = "" ;
   this.A2558AcertoVendRecDesUsuarioAlt = "" ;
   this.A2559AcertoVendRecDesDataHoraAlt = gx.date.nullDate() ;
   this.A2546AcertoVendCortesiaSeq = 0 ;
   this.A2547AcertoVendCortesiaEstab = "" ;
   this.A2548AcertoVendCortesia250 = 0 ;
   this.A2549AcertoVendCortesia500 = 0 ;
   this.A2550AcertoVendCortesiaGTor = 0 ;
   this.A2551AcertoVendCortesiaExp = 0 ;
   this.A2552AcertoVendCortesiaUsuarioAlt = "" ;
   this.A2553AcertoVendCortesiaDataHoraAlt = gx.date.nullDate() ;
   this.A2527AcertoVendVendaSeq = 0 ;
   this.A2528AcertoVendVendaEstabelecimento = "" ;
   this.A2529AcertoVendQtde250 = 0 ;
   this.A2530AcertoVendValor250 = 0 ;
   this.A2531AcertoVendSnPrazo250 = "" ;
   this.A2563AcertoVendSnSNota250 = "" ;
   this.A2535AcertoVendQtde500 = 0 ;
   this.A2536AcertoVendValor500 = 0 ;
   this.A2532AcertoVendSnPrazo500 = "" ;
   this.A2564AcertoVendSnSNota500 = "" ;
   this.A2537AcertoVendQtdeGTor = 0 ;
   this.A2538AcertoVendValorGTor = 0 ;
   this.A2533AcertoVendSnPrazoGTor = "" ;
   this.A2565AcertoVendSnSNotaGTor = "" ;
   this.A2539AcertoVendQtdeExp = 0 ;
   this.A2540AcertoVendValorExp = 0 ;
   this.A2534AcertoVendSnPrazoExp = "" ;
   this.A2566AcertoVendSnSNotaExp = "" ;
   this.A2543AcertoVendVendaUsuAlt = "" ;
   this.A2544AcertoVendVendaDataHoraAlt = gx.date.nullDate() ;
   this.AV8Logon = {} ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1237VendedorId = 0 ;
   this.A2494AcertoVendData = gx.date.nullDate() ;
   this.A1148VendedorNome = "" ;
   this.A2495AcertoVendSaidaNota = 0 ;
   this.A2496AcertoVendRetornoNota = 0 ;
   this.A2569AcertoVendCidadeId = 0 ;
   this.A2570AcertoVendCidadeNome = "" ;
   this.A2571AcertoVendCidadeUF = "" ;
   this.A2497AcertoVendSaida1250 = 0 ;
   this.A2498AcertoVendSaida2250 = 0 ;
   this.A2499AcertoVendSaida3250 = 0 ;
   this.A2500AcertoVendSaida4250 = 0 ;
   this.A2501AcertoVendSaida1500 = 0 ;
   this.A2502AcertoVendSaida2500 = 0 ;
   this.A2503AcertoVendSaida3500 = 0 ;
   this.A2504AcertoVendSaida4500 = 0 ;
   this.A2505AcertoVendSaida1GTor = 0 ;
   this.A2506AcertoVendSaida2GTor = 0 ;
   this.A2507AcertoVendSaida3GTor = 0 ;
   this.A2508AcertoVendSaida4GTor = 0 ;
   this.A2509AcertoVendSaida1Exp = 0 ;
   this.A2510AcertoVendSaida2Exp = 0 ;
   this.A2511AcertoVendSaida3Exp = 0 ;
   this.A2512AcertoVendSaida4Exp = 0 ;
   this.A2513AcertoVendSaidaOutCid250 = 0 ;
   this.A2514AcertoVendSaidaOutCid500 = 0 ;
   this.A2515AcertoVendSaidaOutCidGTor = 0 ;
   this.A2516AcertoVendSaidaOutCidExp = 0 ;
   this.A2517AcertoVendRetorno250 = 0 ;
   this.A2518AcertoVendRetorno500 = 0 ;
   this.A2519AcertoVendRetornoGTor = 0 ;
   this.A2520AcertoVendRetornoExp = 0 ;
   this.A2521AcertoVendRecebidoDin = 0 ;
   this.A2522AcertoVendRecebidoChe = 0 ;
   this.A2567AcertoVendPrecoPad250500 = 0 ;
   this.A2525AcertoVendPrecoPadGTor = 0 ;
   this.A2526AcertoVendPrecoPadExp = 0 ;
   this.A2541AcertoVendUsuarioAlt = "" ;
   this.A2542AcertoVendDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e124o265_client": ["ENTER", true] ,"e134o265_client": ["CANCEL", true] ,"e114o265_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_1229_1237", [17,22]);
   this.setPrompt("PROMPT_2569", [48]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tacertovend());
