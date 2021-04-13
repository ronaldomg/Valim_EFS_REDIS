/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:28.42
*/
gx.evt.autoSkip = false;
gx.define('hlocalizarlancamentos', false, function () {
   this.ServerClass =  "hlocalizarlancamentos" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV5UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A3177localizarlancamentosSeq=gx.fn.getIntegerValue("LOCALIZARLANCAMENTOSSEQ",'.') ;
   };
   this.Validv_Numeroconta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNUMEROCONTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Numerolancamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNUMEROLANCAMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresacontacontabilempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACONTACONTABILEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contacontabilsituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILSITUACAO");
         this.AnyError  = 0;
         if ( ! ( this.AV50ContaContabilSituacao == "I" || this.AV50ContaContabilSituacao == "A" || (""==this.AV50ContaContabilSituacao) ) )
         {
            try {
               gxballoon.setError("Campo ContaContabilSituacao fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contacontabiltipolancamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILTIPOLANCAMENTO");
         this.AnyError  = 0;
         if ( ! ( this.AV49ContaContabilTipoLancamento == "C" || this.AV49ContaContabilTipoLancamento == "E" || this.AV49ContaContabilTipoLancamento == "N" || (""==this.AV49ContaContabilTipoLancamento) ) )
         {
            try {
               gxballoon.setError("Campo ContaContabilTipoLancamento fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e24l92_client=function()
   {
      this.clearMessages();
      if ( ! (""==this.A3160localizarlancamentoscontadeb) )
      {
         gx.popup.openUrl(gx.http.formatLink("hconsultarintegracaofinanceiro",[this.A3176localizarlancamentosnumero, this.A3158localizarlancamentosseqdeb, this.A3157localizarlancamentosdata, this.A3160localizarlancamentoscontadeb, this.A3166localizarlancamentosvalor, "D"]), []);
      }
      this.refreshOutputs([]);
   };
   this.e25l92_client=function()
   {
      this.clearMessages();
      if ( ! (""==this.A3163localizarlancamentoscontacre) )
      {
         gx.popup.openUrl(gx.http.formatLink("hconsultarintegracaofinanceiro",[this.A3176localizarlancamentosnumero, this.A3159localizarlancamentosseqcre, this.A3157localizarlancamentosdata, this.A3163localizarlancamentoscontacre, this.A3166localizarlancamentosvalor, "C"]), []);
      }
      this.refreshOutputs([]);
   };
   this.e17l92_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11l92_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12l92_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13l92_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14l92_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15l92_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e19l92_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e16l92_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e21l92_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23l92_client=function()
   {
      this.executeServerEvent("'DETALHAR'", true, arguments[0], false, false);
   };
   this.e26l92_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,23,26,28,29,30,33,35,38,39,41,43,44,47,49,52,54,56,59,61,64,66,68,71,73,74,78,80,83,85,88,90,93,95,98,100,103,105,106,109,111,112,115,117,124,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,161,165,168,170,172,174,176,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,195,196,197,198,199,200,201];
   this.GXLastCtrlId =201;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",125,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hlocalizarlancamentos",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(3157,126,"LOCALIZARLANCAMENTOSDATA","Data","","localizarlancamentosdata","date",0,"px",10,10,"right",null,[],3157,"localizarlancamentosdata",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Numlancamento",127,"vNUMLANCAMENTO","Lancmto","","NumLancamento","char",0,"px",13,13,"left",null,[],"Numlancamento","NumLancamento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Tradutordebitar",128,"vTRADUTORDEBITAR","Debitar","","TradutorDebitar","char",0,"px",7,7,"left",null,[],"Tradutordebitar","TradutorDebitar",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(3162,129,"LOCALIZARLANCAMENTOSDESCDEB","Descrição","","localizarlancamentosdescdeb","svchar",0,"px",45,45,"left",null,[],3162,"localizarlancamentosdescdeb",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("&Bmpfindeb","vBMPFINDEB",130,0,"px",17,"px","e24l92_client","","Fin","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit("Tradutorcreditar",131,"vTRADUTORCREDITAR","Creditar","","TradutorCreditar","char",0,"px",7,7,"left",null,[],"Tradutorcreditar","TradutorCreditar",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(3165,132,"LOCALIZARLANCAMENTOSDESCCRE","Descrição","","localizarlancamentosdesccre","svchar",0,"px",45,45,"left",null,[],3165,"localizarlancamentosdesccre",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("&Bmpfincre","vBMPFINCRE",133,0,"px",17,"px","e25l92_client","","Fin","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit(3166,134,"LOCALIZARLANCAMENTOSVALOR","Valor","","localizarlancamentosvalor","decimal",0,"px",18,18,"right",null,[],3166,"localizarlancamentosvalor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3175,135,"LOCALIZARLANCAMENTOSTPLANC","D/C","","localizarlancamentostplanc","char",0,"px",1,1,"left",null,[],3175,"localizarlancamentostplanc",true,0,false,false,"Attribute",1,"GridColumnImage");
   Grid1Container.addSingleLineEdit(3173,136,"LOCALIZARLANCAMENTOSSALDO","Saldo","","localizarlancamentossaldo","decimal",0,"px",18,18,"right",null,[],3173,"localizarlancamentossaldo",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3174,137,"LOCALIZARLANCAMENTOSTPSALDO","D/C","","localizarlancamentostpsaldo","char",0,"px",1,1,"left",null,[],3174,"localizarlancamentostpsaldo",true,0,false,false,"Attribute",1,"GridColumnImage");
   Grid1Container.addSingleLineEdit(3167,138,"LOCALIZARLANCAMENTOSHISTID","Hist","","localizarlancamentoshistid","int",0,"px",7,7,"right",null,[],3167,"localizarlancamentoshistid",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3168,139,"LOCALIZARLANCAMENTOSHISTDESC","Descrição","","localizarlancamentoshistdesc","svchar",0,"px",180,80,"left",null,[],3168,"localizarlancamentoshistdesc",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpdetalhar","vBMPDETALHAR",140,0,"px",17,"px","e23l92_client","","Con","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpalterar","vBMPALTERAR",141,0,"px",17,"px","e19l92_client","","Alt","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",142,0,"px",17,"px","e21l92_client","","Exc","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit(3161,143,"LOCALIZARLANCAMENTOSTRADDEB","Debitar","","localizarlancamentostraddeb","int",0,"px",5,5,"right",null,[],3161,"localizarlancamentostraddeb",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3176,144,"LOCALIZARLANCAMENTOSNUMERO","Lancmto","","localizarlancamentosnumero","int",0,"px",8,8,"right",null,[],3176,"localizarlancamentosnumero",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3164,145,"LOCALIZARLANCAMENTOSTRADCRE","Creditar","","localizarlancamentostradcre","int",0,"px",5,5,"right",null,[],3164,"localizarlancamentostradcre",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3163,146,"LOCALIZARLANCAMENTOSCONTACRE","localizarlancamentoscontacre","","localizarlancamentoscontacre","svchar",0,"px",30,30,"left",null,[],3163,"localizarlancamentoscontacre",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3160,147,"LOCALIZARLANCAMENTOSCONTADEB","localizarlancamentoscontadeb","","localizarlancamentoscontadeb","svchar",0,"px",30,30,"left",null,[],3160,"localizarlancamentoscontadeb",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3156,148,"LOCALIZARLANCAMENTOSEMP","localizarlancamentosemp","","localizarlancamentosemp","char",0,"px",10,10,"left",null,[],3156,"localizarlancamentosemp",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3169,149,"LOCALIZARLANCAMENTOSESTORNO","localizarlancamentosestorno","","localizarlancamentosestorno","int",0,"px",8,8,"right",null,[],3169,"localizarlancamentosestorno",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3159,150,"LOCALIZARLANCAMENTOSSEQCRE","localizarlancamentosseqcre","","localizarlancamentosseqcre","int",0,"px",4,4,"right",null,[],3159,"localizarlancamentosseqcre",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3158,151,"LOCALIZARLANCAMENTOSSEQDEB","localizarlancamentosseqdeb","","localizarlancamentosseqdeb","int",0,"px",4,4,"right",null,[],3158,"localizarlancamentosseqdeb",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3170,152,"LOCALIZARLANCAMENTOSTRANSCONTA","localizarlancamentostranscontab","","localizarlancamentostransconta","svchar",0,"px",10,10,"left",null,[],3170,"localizarlancamentostransconta",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3172,153,"LOCALIZARLANCAMENTOSUSUINCCRE","localizarlancamentosusuinccre","","localizarlancamentosusuinccre","char",0,"px",12,12,"left",null,[],3172,"localizarlancamentosusuinccre",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3171,154,"LOCALIZARLANCAMENTOSUSUINCDEB","localizarlancamentosusuincdeb","","localizarlancamentosusuincdeb","char",0,"px",12,12,"left",null,[],3171,"localizarlancamentosusuincdeb",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE13",grid:0};
   GXValidFnc[5]={fld:"TABLE16",grid:0};
   GXValidFnc[8]={fld:"TABLE17",grid:0};
   GXValidFnc[11]={fld:"TABLE18",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[16]={fld:"TABLE21",grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV13DataInicial",gxold:"OV13DataInicial",gxvar:"AV13DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV13DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV13DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[21]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV14DataFinal",gxold:"OV14DataFinal",gxvar:"AV14DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV14DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTORAUX",gxz:"ZV46ContaContabilTradutorAux",gxold:"OV46ContaContabilTradutorAux",gxvar:"AV46ContaContabilTradutorAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ContaContabilTradutorAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46ContaContabilTradutorAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTORAUX",gx.O.AV46ContaContabilTradutorAux,0)},c2v:function(){gx.O.AV46ContaContabilTradutorAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTORAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"IMGCCONT",grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV48ContaContabilNome",gxold:"OV48ContaContabilNome",gxvar:"AV48ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48ContaContabilNome=Value},v2z:function(Value){gx.O.ZV48ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV48ContaContabilNome,0)},c2v:function(){gx.O.AV48ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[35]={fld:"TABLE22",grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAINICIAL",gxz:"ZV16ContaInicial",gxold:"OV16ContaInicial",gxvar:"AV16ContaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ContaInicial=Value},v2z:function(Value){gx.O.ZV16ContaInicial=Value},v2c:function(){gx.fn.setControlValue("vCONTAINICIAL",gx.O.AV16ContaInicial,0)},c2v:function(){gx.O.AV16ContaInicial=this.val()},val:function(){return gx.fn.getControlValue("vCONTAINICIAL")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"IMAGE4",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAFINAL",gxz:"ZV17ContaFinal",gxold:"OV17ContaFinal",gxvar:"AV17ContaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ContaFinal=Value},v2z:function(Value){gx.O.ZV17ContaFinal=Value},v2c:function(){gx.fn.setControlValue("vCONTAFINAL",gx.O.AV17ContaFinal,0)},c2v:function(){gx.O.AV17ContaFinal=this.val()},val:function(){return gx.fn.getControlValue("vCONTAFINAL")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"IMAGE6",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[49]={fld:"TABLE23",grid:0};
   GXValidFnc[52]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOINICIAL",gxz:"ZV20CentroCustoInicial",gxold:"OV20CentroCustoInicial",gxvar:"AV20CentroCustoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20CentroCustoInicial=Value},v2z:function(Value){gx.O.ZV20CentroCustoInicial=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOINICIAL",gx.O.AV20CentroCustoInicial,0)},c2v:function(){gx.O.AV20CentroCustoInicial=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOINICIAL")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOFINAL",gxz:"ZV21CentroCustoFinal",gxold:"OV21CentroCustoFinal",gxvar:"AV21CentroCustoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CentroCustoFinal=Value},v2z:function(Value){gx.O.ZV21CentroCustoFinal=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOFINAL",gx.O.AV21CentroCustoFinal,0)},c2v:function(){gx.O.AV21CentroCustoFinal=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOFINAL")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[61]={fld:"TABLE24",grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAINICIAL",gxz:"ZV18NaturezaInicial",gxold:"OV18NaturezaInicial",gxvar:"AV18NaturezaInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18NaturezaInicial=Value},v2z:function(Value){gx.O.ZV18NaturezaInicial=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAINICIAL",gx.O.AV18NaturezaInicial,0)},c2v:function(){gx.O.AV18NaturezaInicial=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAINICIAL")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAFINAL",gxz:"ZV19NaturezaFinal",gxold:"OV19NaturezaFinal",gxvar:"AV19NaturezaFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19NaturezaFinal=Value},v2z:function(Value){gx.O.ZV19NaturezaFinal=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAFINAL",gx.O.AV19NaturezaFinal,0)},c2v:function(){gx.O.AV19NaturezaFinal=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAFINAL")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRENTISTA",gxz:"ZV15Correntista",gxold:"OV15Correntista",gxvar:"AV15Correntista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Correntista=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15Correntista=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRENTISTA",gx.O.AV15Correntista,0)},c2v:function(){gx.O.AV15Correntista=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRENTISTA",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECORRENTISTA",gxz:"ZV24NomeCorrentista",gxold:"OV24NomeCorrentista",gxvar:"AV24NomeCorrentista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24NomeCorrentista=Value},v2z:function(Value){gx.O.ZV24NomeCorrentista=Value},v2c:function(){gx.fn.setControlValue("vNOMECORRENTISTA",gx.O.AV24NomeCorrentista,0)},c2v:function(){gx.O.AV24NomeCorrentista=this.val()},val:function(){return gx.fn.getControlValue("vNOMECORRENTISTA")},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPRESENTARHISTORICO",gxz:"ZV52ApresentarHistorico",gxold:"OV52ApresentarHistorico",gxvar:"AV52ApresentarHistorico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV52ApresentarHistorico=Value},v2z:function(Value){gx.O.ZV52ApresentarHistorico=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPRESENTARHISTORICO",gx.O.AV52ApresentarHistorico,"S")},c2v:function(){gx.O.AV52ApresentarHistorico=this.val()},val:function(){return gx.fn.getControlValue("vAPRESENTARHISTORICO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[80]={fld:"TABLE19",grid:0};
   GXValidFnc[83]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICO",gxz:"ZV27Historico",gxold:"OV27Historico",gxvar:"AV27Historico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Historico=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Historico=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICO",gx.O.AV27Historico,0)},c2v:function(){gx.O.AV27Historico=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICO",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARTEHISTORICO",gxz:"ZV30ParteHistorico",gxold:"OV30ParteHistorico",gxvar:"AV30ParteHistorico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ParteHistorico=Value},v2z:function(Value){gx.O.ZV30ParteHistorico=Value},v2c:function(){gx.fn.setControlValue("vPARTEHISTORICO",gx.O.AV30ParteHistorico,0)},c2v:function(){gx.O.AV30ParteHistorico=this.val()},val:function(){return gx.fn.getControlValue("vPARTEHISTORICO")},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLOCALIZAR",gxz:"ZV28ValorLocalizar",gxold:"OV28ValorLocalizar",gxvar:"AV28ValorLocalizar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ValorLocalizar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV28ValorLocalizar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORLOCALIZAR",gx.O.AV28ValorLocalizar,2,',')},c2v:function(){gx.O.AV28ValorLocalizar=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORLOCALIZAR",'.',',')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOLERANCIA",gxz:"ZV29ValorTolerancia",gxold:"OV29ValorTolerancia",gxvar:"AV29ValorTolerancia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ValorTolerancia=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV29ValorTolerancia=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOLERANCIA",gx.O.AV29ValorTolerancia,2,',')},c2v:function(){gx.O.AV29ValorTolerancia=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOLERANCIA",'.',',')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Numeroconta,isvalid:null,rgrid:[],fld:"vNUMEROCONTA",gxz:"ZV72NumeroConta",gxold:"OV72NumeroConta",gxvar:"AV72NumeroConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72NumeroConta=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72NumeroConta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMEROCONTA",gx.O.AV72NumeroConta,0)},c2v:function(){gx.O.AV72NumeroConta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMEROCONTA",'.')},nac:gx.falseFn};
   GXValidFnc[106]={fld:"PROMPTNUMCONTA",grid:0};
   GXValidFnc[109]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Numerolancamento,isvalid:null,rgrid:[],fld:"vNUMEROLANCAMENTO",gxz:"ZV73NumeroLancamento",gxold:"OV73NumeroLancamento",gxvar:"AV73NumeroLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73NumeroLancamento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73NumeroLancamento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMEROLANCAMENTO",gx.O.AV73NumeroLancamento,0)},c2v:function(){gx.O.AV73NumeroLancamento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMEROLANCAMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"PROMPTLANCXABCO",grid:0};
   GXValidFnc[115]={fld:"TXTSALDO", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDSSALANT",gxz:"ZV60DsSalAnt",gxold:"OV60DsSalAnt",gxvar:"AV60DsSalAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60DsSalAnt=Value},v2z:function(Value){gx.O.ZV60DsSalAnt=Value},v2c:function(){gx.fn.setControlValue("vDSSALANT",gx.O.AV60DsSalAnt,0)},c2v:function(){gx.O.AV60DsSalAnt=this.val()},val:function(){return gx.fn.getControlValue("vDSSALANT")},nac:gx.falseFn};
   GXValidFnc[124]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[126]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSDATA",gxz:"Z3157localizarlancamentosdata",gxold:"O3157localizarlancamentosdata",gxvar:"A3157localizarlancamentosdata",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3157localizarlancamentosdata=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3157localizarlancamentosdata=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSDATA",row || gx.fn.currentGridRowImpl(125),gx.O.A3157localizarlancamentosdata,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3157localizarlancamentosdata=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LOCALIZARLANCAMENTOSDATA",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[127]={lvl:2,type:"char",len:13,dec:0,sign:false,ro:0,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNUMLANCAMENTO",gxz:"ZV61NumLancamento",gxold:"OV61NumLancamento",gxvar:"AV61NumLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV61NumLancamento=Value},v2z:function(Value){gx.O.ZV61NumLancamento=Value},v2c:function(row){gx.fn.setGridControlValue("vNUMLANCAMENTO",row || gx.fn.currentGridRowImpl(125),gx.O.AV61NumLancamento,0)},c2v:function(){gx.O.AV61NumLancamento=this.val()},val:function(row){return gx.fn.getGridControlValue("vNUMLANCAMENTO",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[128]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:0,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORDEBITAR",gxz:"ZV31TradutorDebitar",gxold:"OV31TradutorDebitar",gxvar:"AV31TradutorDebitar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31TradutorDebitar=Value},v2z:function(Value){gx.O.ZV31TradutorDebitar=Value},v2c:function(row){gx.fn.setGridControlValue("vTRADUTORDEBITAR",row || gx.fn.currentGridRowImpl(125),gx.O.AV31TradutorDebitar,0)},c2v:function(){gx.O.AV31TradutorDebitar=this.val()},val:function(row){return gx.fn.getGridControlValue("vTRADUTORDEBITAR",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[129]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSDESCDEB",gxz:"Z3162localizarlancamentosdescdeb",gxold:"O3162localizarlancamentosdescdeb",gxvar:"A3162localizarlancamentosdescdeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3162localizarlancamentosdescdeb=Value},v2z:function(Value){gx.O.Z3162localizarlancamentosdescdeb=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSDESCDEB",row || gx.fn.currentGridRowImpl(125),gx.O.A3162localizarlancamentosdescdeb,0)},c2v:function(){gx.O.A3162localizarlancamentosdescdeb=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALIZARLANCAMENTOSDESCDEB",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[130]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFINDEB",gxz:"ZV77BmpFinDeb",gxold:"OV77BmpFinDeb",gxvar:"AV77BmpFinDeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV77BmpFinDeb=Value},v2z:function(Value){gx.O.ZV77BmpFinDeb=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPFINDEB",row || gx.fn.currentGridRowImpl(125),gx.O.AV77BmpFinDeb,gx.O.AV93Bmpfindeb_GXI)},c2v:function(){gx.O.AV93Bmpfindeb_GXI=this.val_GXI();gx.O.AV77BmpFinDeb=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPFINDEB",row || gx.fn.currentGridRowImpl(125))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPFINDEB_GXI",row || gx.fn.currentGridRowImpl(125))}, gxvar_GXI:'AV93Bmpfindeb_GXI',nac:gx.falseFn};
   GXValidFnc[131]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:0,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORCREDITAR",gxz:"ZV32TradutorCreditar",gxold:"OV32TradutorCreditar",gxvar:"AV32TradutorCreditar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32TradutorCreditar=Value},v2z:function(Value){gx.O.ZV32TradutorCreditar=Value},v2c:function(row){gx.fn.setGridControlValue("vTRADUTORCREDITAR",row || gx.fn.currentGridRowImpl(125),gx.O.AV32TradutorCreditar,0)},c2v:function(){gx.O.AV32TradutorCreditar=this.val()},val:function(row){return gx.fn.getGridControlValue("vTRADUTORCREDITAR",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[132]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSDESCCRE",gxz:"Z3165localizarlancamentosdesccre",gxold:"O3165localizarlancamentosdesccre",gxvar:"A3165localizarlancamentosdesccre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3165localizarlancamentosdesccre=Value},v2z:function(Value){gx.O.Z3165localizarlancamentosdesccre=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSDESCCRE",row || gx.fn.currentGridRowImpl(125),gx.O.A3165localizarlancamentosdesccre,0)},c2v:function(){gx.O.A3165localizarlancamentosdesccre=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALIZARLANCAMENTOSDESCCRE",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[133]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFINCRE",gxz:"ZV78BmpFinCre",gxold:"OV78BmpFinCre",gxvar:"AV78BmpFinCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV78BmpFinCre=Value},v2z:function(Value){gx.O.ZV78BmpFinCre=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPFINCRE",row || gx.fn.currentGridRowImpl(125),gx.O.AV78BmpFinCre,gx.O.AV92Bmpfincre_GXI)},c2v:function(){gx.O.AV92Bmpfincre_GXI=this.val_GXI();gx.O.AV78BmpFinCre=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPFINCRE",row || gx.fn.currentGridRowImpl(125))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPFINCRE_GXI",row || gx.fn.currentGridRowImpl(125))}, gxvar_GXI:'AV92Bmpfincre_GXI',nac:gx.falseFn};
   GXValidFnc[134]={lvl:2,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSVALOR",gxz:"Z3166localizarlancamentosvalor",gxold:"O3166localizarlancamentosvalor",gxvar:"A3166localizarlancamentosvalor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3166localizarlancamentosvalor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3166localizarlancamentosvalor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LOCALIZARLANCAMENTOSVALOR",row || gx.fn.currentGridRowImpl(125),gx.O.A3166localizarlancamentosvalor,2,',')},c2v:function(){gx.O.A3166localizarlancamentosvalor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LOCALIZARLANCAMENTOSVALOR",row || gx.fn.currentGridRowImpl(125),'.',',')},nac:gx.falseFn};
   GXValidFnc[135]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSTPLANC",gxz:"Z3175localizarlancamentostplanc",gxold:"O3175localizarlancamentostplanc",gxvar:"A3175localizarlancamentostplanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3175localizarlancamentostplanc=Value},v2z:function(Value){gx.O.Z3175localizarlancamentostplanc=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSTPLANC",row || gx.fn.currentGridRowImpl(125),gx.O.A3175localizarlancamentostplanc,0)},c2v:function(){gx.O.A3175localizarlancamentostplanc=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALIZARLANCAMENTOSTPLANC",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[136]={lvl:2,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSSALDO",gxz:"Z3173localizarlancamentossaldo",gxold:"O3173localizarlancamentossaldo",gxvar:"A3173localizarlancamentossaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3173localizarlancamentossaldo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3173localizarlancamentossaldo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LOCALIZARLANCAMENTOSSALDO",row || gx.fn.currentGridRowImpl(125),gx.O.A3173localizarlancamentossaldo,2,',')},c2v:function(){gx.O.A3173localizarlancamentossaldo=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LOCALIZARLANCAMENTOSSALDO",row || gx.fn.currentGridRowImpl(125),'.',',')},nac:gx.falseFn};
   GXValidFnc[137]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSTPSALDO",gxz:"Z3174localizarlancamentostpsaldo",gxold:"O3174localizarlancamentostpsaldo",gxvar:"A3174localizarlancamentostpsaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3174localizarlancamentostpsaldo=Value},v2z:function(Value){gx.O.Z3174localizarlancamentostpsaldo=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSTPSALDO",row || gx.fn.currentGridRowImpl(125),gx.O.A3174localizarlancamentostpsaldo,0)},c2v:function(){gx.O.A3174localizarlancamentostpsaldo=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALIZARLANCAMENTOSTPSALDO",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[138]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSHISTID",gxz:"Z3167localizarlancamentoshistid",gxold:"O3167localizarlancamentoshistid",gxvar:"A3167localizarlancamentoshistid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3167localizarlancamentoshistid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3167localizarlancamentoshistid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSHISTID",row || gx.fn.currentGridRowImpl(125),gx.O.A3167localizarlancamentoshistid,0)},c2v:function(){gx.O.A3167localizarlancamentoshistid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOCALIZARLANCAMENTOSHISTID",row || gx.fn.currentGridRowImpl(125),'.')},nac:gx.falseFn};
   GXValidFnc[139]={lvl:2,type:"svchar",len:180,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSHISTDESC",gxz:"Z3168localizarlancamentoshistdesc",gxold:"O3168localizarlancamentoshistdesc",gxvar:"A3168localizarlancamentoshistdesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3168localizarlancamentoshistdesc=Value},v2z:function(Value){gx.O.Z3168localizarlancamentoshistdesc=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSHISTDESC",row || gx.fn.currentGridRowImpl(125),gx.O.A3168localizarlancamentoshistdesc,0)},c2v:function(){gx.O.A3168localizarlancamentoshistdesc=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALIZARLANCAMENTOSHISTDESC",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[140]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDETALHAR",gxz:"ZV53bmpDetalhar",gxold:"OV53bmpDetalhar",gxvar:"AV53bmpDetalhar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV53bmpDetalhar=Value},v2z:function(Value){gx.O.ZV53bmpDetalhar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDETALHAR",row || gx.fn.currentGridRowImpl(125),gx.O.AV53bmpDetalhar,gx.O.AV85Bmpdetalhar_GXI)},c2v:function(){gx.O.AV85Bmpdetalhar_GXI=this.val_GXI();gx.O.AV53bmpDetalhar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDETALHAR",row || gx.fn.currentGridRowImpl(125))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDETALHAR_GXI",row || gx.fn.currentGridRowImpl(125))}, gxvar_GXI:'AV85Bmpdetalhar_GXI',nac:gx.falseFn};
   GXValidFnc[141]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALTERAR",gxz:"ZV54bmpAlterar",gxold:"OV54bmpAlterar",gxvar:"AV54bmpAlterar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV54bmpAlterar=Value},v2z:function(Value){gx.O.ZV54bmpAlterar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALTERAR",row || gx.fn.currentGridRowImpl(125),gx.O.AV54bmpAlterar,gx.O.AV84Bmpalterar_GXI)},c2v:function(){gx.O.AV84Bmpalterar_GXI=this.val_GXI();gx.O.AV54bmpAlterar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALTERAR",row || gx.fn.currentGridRowImpl(125))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALTERAR_GXI",row || gx.fn.currentGridRowImpl(125))}, gxvar_GXI:'AV84Bmpalterar_GXI',nac:gx.falseFn};
   GXValidFnc[142]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV58bmpExc",gxold:"OV58bmpExc",gxvar:"AV58bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV58bmpExc=Value},v2z:function(Value){gx.O.ZV58bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(125),gx.O.AV58bmpExc,gx.O.AV86Bmpexc_GXI)},c2v:function(){gx.O.AV86Bmpexc_GXI=this.val_GXI();gx.O.AV58bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(125))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(125))}, gxvar_GXI:'AV86Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[143]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSTRADDEB",gxz:"Z3161localizarlancamentostraddeb",gxold:"O3161localizarlancamentostraddeb",gxvar:"A3161localizarlancamentostraddeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3161localizarlancamentostraddeb=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3161localizarlancamentostraddeb=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSTRADDEB",row || gx.fn.currentGridRowImpl(125),gx.O.A3161localizarlancamentostraddeb,0)},c2v:function(){gx.O.A3161localizarlancamentostraddeb=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOCALIZARLANCAMENTOSTRADDEB",row || gx.fn.currentGridRowImpl(125),'.')},nac:gx.falseFn};
   GXValidFnc[144]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSNUMERO",gxz:"Z3176localizarlancamentosnumero",gxold:"O3176localizarlancamentosnumero",gxvar:"A3176localizarlancamentosnumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3176localizarlancamentosnumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3176localizarlancamentosnumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSNUMERO",row || gx.fn.currentGridRowImpl(125),gx.O.A3176localizarlancamentosnumero,0)},c2v:function(){gx.O.A3176localizarlancamentosnumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOCALIZARLANCAMENTOSNUMERO",row || gx.fn.currentGridRowImpl(125),'.')},nac:gx.falseFn};
   GXValidFnc[145]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSTRADCRE",gxz:"Z3164localizarlancamentostradcre",gxold:"O3164localizarlancamentostradcre",gxvar:"A3164localizarlancamentostradcre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3164localizarlancamentostradcre=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3164localizarlancamentostradcre=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSTRADCRE",row || gx.fn.currentGridRowImpl(125),gx.O.A3164localizarlancamentostradcre,0)},c2v:function(){gx.O.A3164localizarlancamentostradcre=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOCALIZARLANCAMENTOSTRADCRE",row || gx.fn.currentGridRowImpl(125),'.')},nac:gx.falseFn};
   GXValidFnc[146]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSCONTACRE",gxz:"Z3163localizarlancamentoscontacre",gxold:"O3163localizarlancamentoscontacre",gxvar:"A3163localizarlancamentoscontacre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3163localizarlancamentoscontacre=Value},v2z:function(Value){gx.O.Z3163localizarlancamentoscontacre=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSCONTACRE",row || gx.fn.currentGridRowImpl(125),gx.O.A3163localizarlancamentoscontacre,0)},c2v:function(){gx.O.A3163localizarlancamentoscontacre=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALIZARLANCAMENTOSCONTACRE",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[147]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSCONTADEB",gxz:"Z3160localizarlancamentoscontadeb",gxold:"O3160localizarlancamentoscontadeb",gxvar:"A3160localizarlancamentoscontadeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3160localizarlancamentoscontadeb=Value},v2z:function(Value){gx.O.Z3160localizarlancamentoscontadeb=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSCONTADEB",row || gx.fn.currentGridRowImpl(125),gx.O.A3160localizarlancamentoscontadeb,0)},c2v:function(){gx.O.A3160localizarlancamentoscontadeb=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALIZARLANCAMENTOSCONTADEB",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[148]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSEMP",gxz:"Z3156localizarlancamentosemp",gxold:"O3156localizarlancamentosemp",gxvar:"A3156localizarlancamentosemp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3156localizarlancamentosemp=Value},v2z:function(Value){gx.O.Z3156localizarlancamentosemp=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSEMP",row || gx.fn.currentGridRowImpl(125),gx.O.A3156localizarlancamentosemp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3156localizarlancamentosemp=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALIZARLANCAMENTOSEMP",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[149]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSESTORNO",gxz:"Z3169localizarlancamentosestorno",gxold:"O3169localizarlancamentosestorno",gxvar:"A3169localizarlancamentosestorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3169localizarlancamentosestorno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3169localizarlancamentosestorno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSESTORNO",row || gx.fn.currentGridRowImpl(125),gx.O.A3169localizarlancamentosestorno,0)},c2v:function(){gx.O.A3169localizarlancamentosestorno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOCALIZARLANCAMENTOSESTORNO",row || gx.fn.currentGridRowImpl(125),'.')},nac:gx.falseFn};
   GXValidFnc[150]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSSEQCRE",gxz:"Z3159localizarlancamentosseqcre",gxold:"O3159localizarlancamentosseqcre",gxvar:"A3159localizarlancamentosseqcre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3159localizarlancamentosseqcre=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3159localizarlancamentosseqcre=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSSEQCRE",row || gx.fn.currentGridRowImpl(125),gx.O.A3159localizarlancamentosseqcre,0)},c2v:function(){gx.O.A3159localizarlancamentosseqcre=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOCALIZARLANCAMENTOSSEQCRE",row || gx.fn.currentGridRowImpl(125),'.')},nac:gx.falseFn};
   GXValidFnc[151]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSSEQDEB",gxz:"Z3158localizarlancamentosseqdeb",gxold:"O3158localizarlancamentosseqdeb",gxvar:"A3158localizarlancamentosseqdeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3158localizarlancamentosseqdeb=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3158localizarlancamentosseqdeb=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSSEQDEB",row || gx.fn.currentGridRowImpl(125),gx.O.A3158localizarlancamentosseqdeb,0)},c2v:function(){gx.O.A3158localizarlancamentosseqdeb=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOCALIZARLANCAMENTOSSEQDEB",row || gx.fn.currentGridRowImpl(125),'.')},nac:gx.falseFn};
   GXValidFnc[152]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSTRANSCONTA",gxz:"Z3170localizarlancamentostransconta",gxold:"O3170localizarlancamentostransconta",gxvar:"A3170localizarlancamentostransconta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3170localizarlancamentostransconta=Value},v2z:function(Value){gx.O.Z3170localizarlancamentostransconta=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSTRANSCONTA",row || gx.fn.currentGridRowImpl(125),gx.O.A3170localizarlancamentostransconta,0)},c2v:function(){gx.O.A3170localizarlancamentostransconta=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALIZARLANCAMENTOSTRANSCONTA",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[153]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSUSUINCCRE",gxz:"Z3172localizarlancamentosusuinccre",gxold:"O3172localizarlancamentosusuinccre",gxvar:"A3172localizarlancamentosusuinccre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3172localizarlancamentosusuinccre=Value},v2z:function(Value){gx.O.Z3172localizarlancamentosusuinccre=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSUSUINCCRE",row || gx.fn.currentGridRowImpl(125),gx.O.A3172localizarlancamentosusuinccre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3172localizarlancamentosusuinccre=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALIZARLANCAMENTOSUSUINCCRE",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[154]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:125,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSUSUINCDEB",gxz:"Z3171localizarlancamentosusuincdeb",gxold:"O3171localizarlancamentosusuincdeb",gxvar:"A3171localizarlancamentosusuincdeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3171localizarlancamentosusuincdeb=Value},v2z:function(Value){gx.O.Z3171localizarlancamentosusuincdeb=Value},v2c:function(row){gx.fn.setGridControlValue("LOCALIZARLANCAMENTOSUSUINCDEB",row || gx.fn.currentGridRowImpl(125),gx.O.A3171localizarlancamentosusuincdeb,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3171localizarlancamentosusuincdeb=this.val()},val:function(row){return gx.fn.getGridControlValue("LOCALIZARLANCAMENTOSUSUINCDEB",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[155]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[161]={fld:"TABLE14",grid:0};
   GXValidFnc[165]={fld:"TABLE15",grid:0};
   GXValidFnc[168]={fld:"IMAGE2",grid:0};
   GXValidFnc[170]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[172]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[174]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[176]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[178]={fld:"IMAGE7",grid:0};
   GXValidFnc[179]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR",gxz:"ZV80QtdeCar",gxold:"OV80QtdeCar",gxvar:"AV80QtdeCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80QtdeCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80QtdeCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR",gx.O.AV80QtdeCar,0)},c2v:function(){gx.O.AV80QtdeCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR",'.')},nac:gx.falseFn};
   GXValidFnc[180]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV23Nao",gxold:"OV23Nao",gxvar:"AV23Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Nao=Value},v2z:function(Value){gx.O.ZV23Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV23Nao,0)},c2v:function(){gx.O.AV23Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[181]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV22Sim",gxold:"OV22Sim",gxvar:"AV22Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Sim=Value},v2z:function(Value){gx.O.ZV22Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV22Sim,0)},c2v:function(){gx.O.AV22Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[182]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDAUX",gxz:"ZV47ContaContabilIdAux",gxold:"OV47ContaContabilIdAux",gxvar:"AV47ContaContabilIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ContaContabilIdAux=Value},v2z:function(Value){gx.O.ZV47ContaContabilIdAux=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDAUX",gx.O.AV47ContaContabilIdAux,0)},c2v:function(){gx.O.AV47ContaContabilIdAux=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDAUX")},nac:gx.falseFn};
   GXValidFnc[183]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vEMPRESAPADRAO",gxz:"ZV10EmpresaPadrao",gxold:"OV10EmpresaPadrao",gxvar:"AV10EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV10EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV10EmpresaPadrao,0)},c2v:function(){gx.O.AV10EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[184]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacontacontabilempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACONTACONTABILEMPRESAID",gxz:"ZV45EmpresaContaContabilEmpresaId",gxold:"OV45EmpresaContaContabilEmpresaId",gxvar:"AV45EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV45EmpresaContaContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACONTACONTABILEMPRESAID",gx.O.AV45EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.AV45EmpresaContaContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACONTACONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[185]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vSNERRO",gxz:"ZV55SnErro",gxold:"OV55SnErro",gxvar:"AV55SnErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55SnErro=Value},v2z:function(Value){gx.O.ZV55SnErro=Value},v2c:function(){gx.fn.setControlValue("vSNERRO",gx.O.AV55SnErro,0)},c2v:function(){gx.O.AV55SnErro=this.val()},val:function(){return gx.fn.getControlValue("vSNERRO")},nac:gx.falseFn};
   GXValidFnc[186]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV40ChamaOnBlurMascara",gxold:"OV40ChamaOnBlurMascara",gxvar:"AV40ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV40ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV40ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV40ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[187]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabilsituacao,isvalid:null,rgrid:[],fld:"vCONTACONTABILSITUACAO",gxz:"ZV50ContaContabilSituacao",gxold:"OV50ContaContabilSituacao",gxvar:"AV50ContaContabilSituacao",ucs:[],op:[187],ip:[187],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV50ContaContabilSituacao=Value},v2z:function(Value){gx.O.ZV50ContaContabilSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTACONTABILSITUACAO",gx.O.AV50ContaContabilSituacao)},c2v:function(){gx.O.AV50ContaContabilSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILSITUACAO")},nac:gx.falseFn};
   GXValidFnc[188]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR",gxz:"ZV66Tradutor",gxold:"OV66Tradutor",gxvar:"AV66Tradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66Tradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66Tradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR",gx.O.AV66Tradutor,0)},c2v:function(){gx.O.AV66Tradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[189]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabiltipolancamento,isvalid:null,rgrid:[],fld:"vCONTACONTABILTIPOLANCAMENTO",gxz:"ZV49ContaContabilTipoLancamento",gxold:"OV49ContaContabilTipoLancamento",gxvar:"AV49ContaContabilTipoLancamento",ucs:[],op:[189],ip:[189],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV49ContaContabilTipoLancamento=Value},v2z:function(Value){gx.O.ZV49ContaContabilTipoLancamento=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTACONTABILTIPOLANCAMENTO",gx.O.AV49ContaContabilTipoLancamento)},c2v:function(){gx.O.AV49ContaContabilTipoLancamento=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILTIPOLANCAMENTO")},nac:gx.falseFn};
   GXValidFnc[190]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGREC",gxz:"ZV74PagRec",gxold:"OV74PagRec",gxvar:"AV74PagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74PagRec=Value},v2z:function(Value){gx.O.ZV74PagRec=Value},v2c:function(){gx.fn.setControlValue("vPAGREC",gx.O.AV74PagRec,0)},c2v:function(){gx.O.AV74PagRec=this.val()},val:function(){return gx.fn.getControlValue("vPAGREC")},nac:gx.falseFn};
   GXValidFnc[191]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAG",gxz:"ZV71CtrlPag",gxold:"OV71CtrlPag",gxvar:"AV71CtrlPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71CtrlPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV71CtrlPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAG",gx.O.AV71CtrlPag,0)},c2v:function(){gx.O.AV71CtrlPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAG",'.')},nac:gx.falseFn};
   GXValidFnc[192]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDTRAD",gxz:"ZV51ContaContabilIdTrad",gxold:"OV51ContaContabilIdTrad",gxvar:"AV51ContaContabilIdTrad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ContaContabilIdTrad=Value},v2z:function(Value){gx.O.ZV51ContaContabilIdTrad=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDTRAD",gx.O.AV51ContaContabilIdTrad,0)},c2v:function(){gx.O.AV51ContaContabilIdTrad=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDTRAD")},nac:gx.falseFn};
   GXValidFnc[193]={fld:"JS", format:2,grid:0};
   GXValidFnc[195]={fld:"BTNHELP",grid:0};
   GXValidFnc[196]={fld:"PROMPT_CENTROCUSTOINICIAL",grid:0};
   GXValidFnc[197]={fld:"PROMPT_CENTROCUSTOFINAL",grid:0};
   GXValidFnc[198]={fld:"PROMPT_NATUREZAINICIAL",grid:0};
   GXValidFnc[199]={fld:"PROMPT_NATUREZAFINAL",grid:0};
   GXValidFnc[200]={fld:"PROMPT_CORRENTISTA",grid:0};
   GXValidFnc[201]={fld:"PROMPT_HISTORICO",grid:0};
   this.AV13DataInicial = gx.date.nullDate() ;
   this.ZV13DataInicial = gx.date.nullDate() ;
   this.OV13DataInicial = gx.date.nullDate() ;
   this.AV14DataFinal = gx.date.nullDate() ;
   this.ZV14DataFinal = gx.date.nullDate() ;
   this.OV14DataFinal = gx.date.nullDate() ;
   this.AV46ContaContabilTradutorAux = 0 ;
   this.ZV46ContaContabilTradutorAux = 0 ;
   this.OV46ContaContabilTradutorAux = 0 ;
   this.AV48ContaContabilNome = "" ;
   this.ZV48ContaContabilNome = "" ;
   this.OV48ContaContabilNome = "" ;
   this.AV16ContaInicial = "" ;
   this.ZV16ContaInicial = "" ;
   this.OV16ContaInicial = "" ;
   this.AV17ContaFinal = "" ;
   this.ZV17ContaFinal = "" ;
   this.OV17ContaFinal = "" ;
   this.AV20CentroCustoInicial = "" ;
   this.ZV20CentroCustoInicial = "" ;
   this.OV20CentroCustoInicial = "" ;
   this.AV21CentroCustoFinal = "" ;
   this.ZV21CentroCustoFinal = "" ;
   this.OV21CentroCustoFinal = "" ;
   this.AV18NaturezaInicial = "" ;
   this.ZV18NaturezaInicial = "" ;
   this.OV18NaturezaInicial = "" ;
   this.AV19NaturezaFinal = "" ;
   this.ZV19NaturezaFinal = "" ;
   this.OV19NaturezaFinal = "" ;
   this.AV15Correntista = 0 ;
   this.ZV15Correntista = 0 ;
   this.OV15Correntista = 0 ;
   this.AV24NomeCorrentista = "" ;
   this.ZV24NomeCorrentista = "" ;
   this.OV24NomeCorrentista = "" ;
   this.AV52ApresentarHistorico = "" ;
   this.ZV52ApresentarHistorico = "" ;
   this.OV52ApresentarHistorico = "" ;
   this.AV27Historico = 0 ;
   this.ZV27Historico = 0 ;
   this.OV27Historico = 0 ;
   this.AV30ParteHistorico = "" ;
   this.ZV30ParteHistorico = "" ;
   this.OV30ParteHistorico = "" ;
   this.AV28ValorLocalizar = 0 ;
   this.ZV28ValorLocalizar = 0 ;
   this.OV28ValorLocalizar = 0 ;
   this.AV29ValorTolerancia = 0 ;
   this.ZV29ValorTolerancia = 0 ;
   this.OV29ValorTolerancia = 0 ;
   this.AV72NumeroConta = 0 ;
   this.ZV72NumeroConta = 0 ;
   this.OV72NumeroConta = 0 ;
   this.AV73NumeroLancamento = 0 ;
   this.ZV73NumeroLancamento = 0 ;
   this.OV73NumeroLancamento = 0 ;
   this.AV60DsSalAnt = "" ;
   this.ZV60DsSalAnt = "" ;
   this.OV60DsSalAnt = "" ;
   this.Z3157localizarlancamentosdata = gx.date.nullDate() ;
   this.O3157localizarlancamentosdata = gx.date.nullDate() ;
   this.ZV61NumLancamento = "" ;
   this.OV61NumLancamento = "" ;
   this.ZV31TradutorDebitar = "" ;
   this.OV31TradutorDebitar = "" ;
   this.Z3162localizarlancamentosdescdeb = "" ;
   this.O3162localizarlancamentosdescdeb = "" ;
   this.ZV77BmpFinDeb = "" ;
   this.OV77BmpFinDeb = "" ;
   this.ZV32TradutorCreditar = "" ;
   this.OV32TradutorCreditar = "" ;
   this.Z3165localizarlancamentosdesccre = "" ;
   this.O3165localizarlancamentosdesccre = "" ;
   this.ZV78BmpFinCre = "" ;
   this.OV78BmpFinCre = "" ;
   this.Z3166localizarlancamentosvalor = 0 ;
   this.O3166localizarlancamentosvalor = 0 ;
   this.Z3175localizarlancamentostplanc = "" ;
   this.O3175localizarlancamentostplanc = "" ;
   this.Z3173localizarlancamentossaldo = 0 ;
   this.O3173localizarlancamentossaldo = 0 ;
   this.Z3174localizarlancamentostpsaldo = "" ;
   this.O3174localizarlancamentostpsaldo = "" ;
   this.Z3167localizarlancamentoshistid = 0 ;
   this.O3167localizarlancamentoshistid = 0 ;
   this.Z3168localizarlancamentoshistdesc = "" ;
   this.O3168localizarlancamentoshistdesc = "" ;
   this.ZV53bmpDetalhar = "" ;
   this.OV53bmpDetalhar = "" ;
   this.ZV54bmpAlterar = "" ;
   this.OV54bmpAlterar = "" ;
   this.ZV58bmpExc = "" ;
   this.OV58bmpExc = "" ;
   this.Z3161localizarlancamentostraddeb = 0 ;
   this.O3161localizarlancamentostraddeb = 0 ;
   this.Z3176localizarlancamentosnumero = 0 ;
   this.O3176localizarlancamentosnumero = 0 ;
   this.Z3164localizarlancamentostradcre = 0 ;
   this.O3164localizarlancamentostradcre = 0 ;
   this.Z3163localizarlancamentoscontacre = "" ;
   this.O3163localizarlancamentoscontacre = "" ;
   this.Z3160localizarlancamentoscontadeb = "" ;
   this.O3160localizarlancamentoscontadeb = "" ;
   this.Z3156localizarlancamentosemp = "" ;
   this.O3156localizarlancamentosemp = "" ;
   this.Z3169localizarlancamentosestorno = 0 ;
   this.O3169localizarlancamentosestorno = 0 ;
   this.Z3159localizarlancamentosseqcre = 0 ;
   this.O3159localizarlancamentosseqcre = 0 ;
   this.Z3158localizarlancamentosseqdeb = 0 ;
   this.O3158localizarlancamentosseqdeb = 0 ;
   this.Z3170localizarlancamentostransconta = "" ;
   this.O3170localizarlancamentostransconta = "" ;
   this.Z3172localizarlancamentosusuinccre = "" ;
   this.O3172localizarlancamentosusuinccre = "" ;
   this.Z3171localizarlancamentosusuincdeb = "" ;
   this.O3171localizarlancamentosusuincdeb = "" ;
   this.AV80QtdeCar = 0 ;
   this.ZV80QtdeCar = 0 ;
   this.OV80QtdeCar = 0 ;
   this.AV23Nao = "" ;
   this.ZV23Nao = "" ;
   this.OV23Nao = "" ;
   this.AV22Sim = "" ;
   this.ZV22Sim = "" ;
   this.OV22Sim = "" ;
   this.AV47ContaContabilIdAux = "" ;
   this.ZV47ContaContabilIdAux = "" ;
   this.OV47ContaContabilIdAux = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.ZV10EmpresaPadrao = "" ;
   this.OV10EmpresaPadrao = "" ;
   this.AV45EmpresaContaContabilEmpresaId = "" ;
   this.ZV45EmpresaContaContabilEmpresaId = "" ;
   this.OV45EmpresaContaContabilEmpresaId = "" ;
   this.AV55SnErro = "" ;
   this.ZV55SnErro = "" ;
   this.OV55SnErro = "" ;
   this.AV40ChamaOnBlurMascara = "" ;
   this.ZV40ChamaOnBlurMascara = "" ;
   this.OV40ChamaOnBlurMascara = "" ;
   this.AV50ContaContabilSituacao = "" ;
   this.ZV50ContaContabilSituacao = "" ;
   this.OV50ContaContabilSituacao = "" ;
   this.AV66Tradutor = 0 ;
   this.ZV66Tradutor = 0 ;
   this.OV66Tradutor = 0 ;
   this.AV49ContaContabilTipoLancamento = "" ;
   this.ZV49ContaContabilTipoLancamento = "" ;
   this.OV49ContaContabilTipoLancamento = "" ;
   this.AV74PagRec = "" ;
   this.ZV74PagRec = "" ;
   this.OV74PagRec = "" ;
   this.AV71CtrlPag = 0 ;
   this.ZV71CtrlPag = 0 ;
   this.OV71CtrlPag = 0 ;
   this.AV51ContaContabilIdTrad = "" ;
   this.ZV51ContaContabilIdTrad = "" ;
   this.OV51ContaContabilIdTrad = "" ;
   this.AV13DataInicial = gx.date.nullDate() ;
   this.AV14DataFinal = gx.date.nullDate() ;
   this.AV46ContaContabilTradutorAux = 0 ;
   this.AV48ContaContabilNome = "" ;
   this.AV16ContaInicial = "" ;
   this.AV17ContaFinal = "" ;
   this.AV20CentroCustoInicial = "" ;
   this.AV21CentroCustoFinal = "" ;
   this.AV18NaturezaInicial = "" ;
   this.AV19NaturezaFinal = "" ;
   this.AV15Correntista = 0 ;
   this.AV24NomeCorrentista = "" ;
   this.AV52ApresentarHistorico = "" ;
   this.AV27Historico = 0 ;
   this.AV30ParteHistorico = "" ;
   this.AV28ValorLocalizar = 0 ;
   this.AV29ValorTolerancia = 0 ;
   this.AV72NumeroConta = 0 ;
   this.AV73NumeroLancamento = 0 ;
   this.AV60DsSalAnt = "" ;
   this.AV80QtdeCar = 0 ;
   this.AV23Nao = "" ;
   this.AV22Sim = "" ;
   this.AV47ContaContabilIdAux = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV45EmpresaContaContabilEmpresaId = "" ;
   this.AV55SnErro = "" ;
   this.AV40ChamaOnBlurMascara = "" ;
   this.AV50ContaContabilSituacao = "" ;
   this.AV66Tradutor = 0 ;
   this.AV49ContaContabilTipoLancamento = "" ;
   this.AV74PagRec = "" ;
   this.AV71CtrlPag = 0 ;
   this.AV51ContaContabilIdTrad = "" ;
   this.A3155localizarlancamentosusuario = "" ;
   this.A3177localizarlancamentosSeq = 0 ;
   this.A3157localizarlancamentosdata = gx.date.nullDate() ;
   this.AV61NumLancamento = "" ;
   this.AV31TradutorDebitar = "" ;
   this.A3162localizarlancamentosdescdeb = "" ;
   this.AV77BmpFinDeb = "" ;
   this.AV32TradutorCreditar = "" ;
   this.A3165localizarlancamentosdesccre = "" ;
   this.AV78BmpFinCre = "" ;
   this.A3166localizarlancamentosvalor = 0 ;
   this.A3175localizarlancamentostplanc = "" ;
   this.A3173localizarlancamentossaldo = 0 ;
   this.A3174localizarlancamentostpsaldo = "" ;
   this.A3167localizarlancamentoshistid = 0 ;
   this.A3168localizarlancamentoshistdesc = "" ;
   this.AV53bmpDetalhar = "" ;
   this.AV54bmpAlterar = "" ;
   this.AV58bmpExc = "" ;
   this.A3161localizarlancamentostraddeb = 0 ;
   this.A3176localizarlancamentosnumero = 0 ;
   this.A3164localizarlancamentostradcre = 0 ;
   this.A3163localizarlancamentoscontacre = "" ;
   this.A3160localizarlancamentoscontadeb = "" ;
   this.A3156localizarlancamentosemp = "" ;
   this.A3169localizarlancamentosestorno = 0 ;
   this.A3159localizarlancamentosseqcre = 0 ;
   this.A3158localizarlancamentosseqdeb = 0 ;
   this.A3170localizarlancamentostransconta = "" ;
   this.A3172localizarlancamentosusuinccre = "" ;
   this.A3171localizarlancamentosusuincdeb = "" ;
   this.A1929LancamentoCxaBcoNumero = 0 ;
   this.A1928LancamentoCxaBcoEmpresaid = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A284HistoricoId = 0 ;
   this.A283EmpresaHistoricoEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A62ContaContabilId = "" ;
   this.AV5UsrCod = "" ;
   this.Events = {"e17l92_client": ["ENTER", true] ,"e11l92_client": ["'GXM_FIRST'", true] ,"e12l92_client": ["'GXM_PREVIOUS'", true] ,"e13l92_client": ["'GXM_NEXT'", true] ,"e14l92_client": ["'GXM_LAST'", true] ,"e15l92_client": ["'FECHAR'", true] ,"e19l92_client": ["'ALTERAR'", true] ,"e16l92_client": ["'NOVO'", true] ,"e21l92_client": ["'EXCLUIR'", true] ,"e23l92_client": ["'DETALHAR'", true] ,"e26l92_client": ["CANCEL", true] ,"e24l92_client": ["'INTEGRACAOFINDEBITO'", false] ,"e25l92_client": ["'INTEGRACAOFINCREDITO'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV55SnErro',fld:'vSNERRO'},{av:'AV54bmpAlterar',fld:'vBMPALTERAR'},{av:'gx.fn.getCtrlProperty("vBMPALTERAR","Tooltiptext")',ctrl:'vBMPALTERAR',prop:'Tooltiptext'},{av:'AV53bmpDetalhar',fld:'vBMPDETALHAR'},{av:'gx.fn.getCtrlProperty("vBMPDETALHAR","Tooltiptext")',ctrl:'vBMPDETALHAR',prop:'Tooltiptext'},{av:'AV58bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV78BmpFinCre',fld:'vBMPFINCRE'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Tooltiptext")',ctrl:'vBMPFINCRE',prop:'Tooltiptext'},{av:'AV77BmpFinDeb',fld:'vBMPFINDEB'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Tooltiptext")',ctrl:'vBMPFINDEB',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Visible")',ctrl:'vBMPFINCRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Visible")',ctrl:'vBMPFINDEB',prop:'Visible'},{av:'A3161localizarlancamentostraddeb',fld:'LOCALIZARLANCAMENTOSTRADDEB'},{av:'A3164localizarlancamentostradcre',fld:'LOCALIZARLANCAMENTOSTRADCRE'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3177localizarlancamentosSeq',fld:'LOCALIZARLANCAMENTOSSEQ'},{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3163localizarlancamentoscontacre',fld:'LOCALIZARLANCAMENTOSCONTACRE'},{av:'AV17ContaFinal',fld:'vCONTAFINAL'},{av:'AV16ContaInicial',fld:'vCONTAINICIAL'},{av:'AV46ContaContabilTradutorAux',fld:'vCONTACONTABILTRADUTORAUX'},{av:'AV52ApresentarHistorico',fld:'vAPRESENTARHISTORICO'},{av:'AV28ValorLocalizar',fld:'vVALORLOCALIZAR'},{av:'AV29ValorTolerancia',fld:'vVALORTOLERANCIA'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV13DataInicial',fld:'vDATAINICIAL'},{av:'AV14DataFinal',fld:'vDATAFINAL'},{av:'AV51ContaContabilIdTrad',fld:'vCONTACONTABILIDTRAD'},{av:'AV20CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV21CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV18NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV19NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV15Correntista',fld:'vCORRENTISTA'},{av:'AV27Historico',fld:'vHISTORICO'},{av:'AV30ParteHistorico',fld:'vPARTEHISTORICO'},{av:'AV72NumeroConta',fld:'vNUMEROCONTA'},{av:'AV73NumeroLancamento',fld:'vNUMEROLANCAMENTO'},{av:'AV71CtrlPag',fld:'vCTRLPAG'}],[{av:'gx.fn.getCtrlProperty("LOCALIZARLANCAMENTOSTPLANC","Visible")',ctrl:'LOCALIZARLANCAMENTOSTPLANC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOCALIZARLANCAMENTOSSALDO","Visible")',ctrl:'LOCALIZARLANCAMENTOSSALDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOCALIZARLANCAMENTOSTPSALDO","Visible")',ctrl:'LOCALIZARLANCAMENTOSTPSALDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTSALDO","Visible")',ctrl:'TXTSALDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDSSALANT","Visible")',ctrl:'vDSSALANT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOCALIZARLANCAMENTOSHISTDESC","Visible")',ctrl:'LOCALIZARLANCAMENTOSHISTDESC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOCALIZARLANCAMENTOSDESCDEB","Visible")',ctrl:'LOCALIZARLANCAMENTOSDESCDEB',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOCALIZARLANCAMENTOSDESCCRE","Visible")',ctrl:'LOCALIZARLANCAMENTOSDESCCRE',prop:'Visible'},{av:'AV35ValorInicial',fld:'vVALORINICIAL'},{av:'AV36ValorFinal',fld:'vVALORFINAL'},{av:'AV60DsSalAnt',fld:'vDSSALANT'},{av:'AV71CtrlPag',fld:'vCTRLPAG'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV55SnErro',fld:'vSNERRO'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV54bmpAlterar',fld:'vBMPALTERAR'},{av:'gx.fn.getCtrlProperty("vBMPALTERAR","Tooltiptext")',ctrl:'vBMPALTERAR',prop:'Tooltiptext'},{av:'AV53bmpDetalhar',fld:'vBMPDETALHAR'},{av:'gx.fn.getCtrlProperty("vBMPDETALHAR","Tooltiptext")',ctrl:'vBMPDETALHAR',prop:'Tooltiptext'},{av:'AV58bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV78BmpFinCre',fld:'vBMPFINCRE'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Tooltiptext")',ctrl:'vBMPFINCRE',prop:'Tooltiptext'},{av:'AV77BmpFinDeb',fld:'vBMPFINDEB'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Tooltiptext")',ctrl:'vBMPFINDEB',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Visible")',ctrl:'vBMPFINCRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Visible")',ctrl:'vBMPFINDEB',prop:'Visible'},{av:'AV17ContaFinal',fld:'vCONTAFINAL'},{av:'AV16ContaInicial',fld:'vCONTAINICIAL'},{av:'AV46ContaContabilTradutorAux',fld:'vCONTACONTABILTRADUTORAUX'},{av:'AV52ApresentarHistorico',fld:'vAPRESENTARHISTORICO'},{av:'AV28ValorLocalizar',fld:'vVALORLOCALIZAR'},{av:'AV29ValorTolerancia',fld:'vVALORTOLERANCIA'},{av:'AV13DataInicial',fld:'vDATAINICIAL'},{av:'AV14DataFinal',fld:'vDATAFINAL'},{av:'AV51ContaContabilIdTrad',fld:'vCONTACONTABILIDTRAD'},{av:'AV20CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV21CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV18NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV19NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV15Correntista',fld:'vCORRENTISTA'},{av:'AV27Historico',fld:'vHISTORICO'},{av:'AV30ParteHistorico',fld:'vPARTEHISTORICO'},{av:'AV72NumeroConta',fld:'vNUMEROCONTA'},{av:'AV73NumeroLancamento',fld:'vNUMEROLANCAMENTO'},{av:'AV71CtrlPag',fld:'vCTRLPAG'},{av:'A3161localizarlancamentostraddeb',fld:'LOCALIZARLANCAMENTOSTRADDEB'},{av:'A3164localizarlancamentostradcre',fld:'LOCALIZARLANCAMENTOSTRADCRE'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3177localizarlancamentosSeq',fld:'LOCALIZARLANCAMENTOSSEQ'},{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3163localizarlancamentoscontacre',fld:'LOCALIZARLANCAMENTOSCONTACRE'},{av:'AV35ValorInicial',fld:'vVALORINICIAL'},{av:'AV36ValorFinal',fld:'vVALORFINAL'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV45EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A283EmpresaHistoricoEmpresaId',fld:'EMPRESAHISTORICOEMPRESAID'},{av:'A284HistoricoId',fld:'HISTORICOID'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV75ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1928LancamentoCxaBcoEmpresaid',fld:'LANCAMENTOCXABCOEMPRESAID'},{av:'AV76LancamentoCxaBcoEmpresaId',fld:'vLANCAMENTOCXABCOEMPRESAID'},{av:'A1929LancamentoCxaBcoNumero',fld:'LANCAMENTOCXABCONUMERO'}],[{av:'AV60DsSalAnt',fld:'vDSSALANT'},{av:'AV71CtrlPag',fld:'vCTRLPAG'},{av:'AV55SnErro',fld:'vSNERRO'},{av:'AV16ContaInicial',fld:'vCONTAINICIAL'},{av:'AV17ContaFinal',fld:'vCONTAFINAL'},{av:'AV14DataFinal',fld:'vDATAFINAL'},{av:'AV13DataInicial',fld:'vDATAINICIAL'},{av:'AV51ContaContabilIdTrad',fld:'vCONTACONTABILIDTRAD'},{av:'AV87GXLvl130',fld:'vGXLVL130'},{av:'AV48ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV21CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV20CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV18NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV19NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV88GXLvl203',fld:'vGXLVL203'},{av:'AV89GXLvl217',fld:'vGXLVL217'},{av:'AV90GXLvl231',fld:'vGXLVL231'},{av:'AV91GXLvl244',fld:'vGXLVL244'},{av:'AV30ParteHistorico',fld:'vPARTEHISTORICO'},{av:'AV35ValorInicial',fld:'vVALORINICIAL'},{av:'AV36ValorFinal',fld:'vVALORFINAL'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV55SnErro',fld:'vSNERRO'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV54bmpAlterar',fld:'vBMPALTERAR'},{av:'gx.fn.getCtrlProperty("vBMPALTERAR","Tooltiptext")',ctrl:'vBMPALTERAR',prop:'Tooltiptext'},{av:'AV53bmpDetalhar',fld:'vBMPDETALHAR'},{av:'gx.fn.getCtrlProperty("vBMPDETALHAR","Tooltiptext")',ctrl:'vBMPDETALHAR',prop:'Tooltiptext'},{av:'AV58bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV78BmpFinCre',fld:'vBMPFINCRE'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Tooltiptext")',ctrl:'vBMPFINCRE',prop:'Tooltiptext'},{av:'AV77BmpFinDeb',fld:'vBMPFINDEB'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Tooltiptext")',ctrl:'vBMPFINDEB',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Visible")',ctrl:'vBMPFINCRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Visible")',ctrl:'vBMPFINDEB',prop:'Visible'},{av:'AV17ContaFinal',fld:'vCONTAFINAL'},{av:'AV16ContaInicial',fld:'vCONTAINICIAL'},{av:'AV46ContaContabilTradutorAux',fld:'vCONTACONTABILTRADUTORAUX'},{av:'AV52ApresentarHistorico',fld:'vAPRESENTARHISTORICO'},{av:'AV28ValorLocalizar',fld:'vVALORLOCALIZAR'},{av:'AV29ValorTolerancia',fld:'vVALORTOLERANCIA'},{av:'AV13DataInicial',fld:'vDATAINICIAL'},{av:'AV14DataFinal',fld:'vDATAFINAL'},{av:'AV51ContaContabilIdTrad',fld:'vCONTACONTABILIDTRAD'},{av:'AV20CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV21CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV18NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV19NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV15Correntista',fld:'vCORRENTISTA'},{av:'AV27Historico',fld:'vHISTORICO'},{av:'AV30ParteHistorico',fld:'vPARTEHISTORICO'},{av:'AV72NumeroConta',fld:'vNUMEROCONTA'},{av:'AV73NumeroLancamento',fld:'vNUMEROLANCAMENTO'},{av:'AV71CtrlPag',fld:'vCTRLPAG'},{av:'A3161localizarlancamentostraddeb',fld:'LOCALIZARLANCAMENTOSTRADDEB'},{av:'A3164localizarlancamentostradcre',fld:'LOCALIZARLANCAMENTOSTRADCRE'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3177localizarlancamentosSeq',fld:'LOCALIZARLANCAMENTOSSEQ'},{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3163localizarlancamentoscontacre',fld:'LOCALIZARLANCAMENTOSCONTACRE'}],[{av:'AV71CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV55SnErro',fld:'vSNERRO'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV54bmpAlterar',fld:'vBMPALTERAR'},{av:'gx.fn.getCtrlProperty("vBMPALTERAR","Tooltiptext")',ctrl:'vBMPALTERAR',prop:'Tooltiptext'},{av:'AV53bmpDetalhar',fld:'vBMPDETALHAR'},{av:'gx.fn.getCtrlProperty("vBMPDETALHAR","Tooltiptext")',ctrl:'vBMPDETALHAR',prop:'Tooltiptext'},{av:'AV58bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV78BmpFinCre',fld:'vBMPFINCRE'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Tooltiptext")',ctrl:'vBMPFINCRE',prop:'Tooltiptext'},{av:'AV77BmpFinDeb',fld:'vBMPFINDEB'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Tooltiptext")',ctrl:'vBMPFINDEB',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Visible")',ctrl:'vBMPFINCRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Visible")',ctrl:'vBMPFINDEB',prop:'Visible'},{av:'AV17ContaFinal',fld:'vCONTAFINAL'},{av:'AV16ContaInicial',fld:'vCONTAINICIAL'},{av:'AV46ContaContabilTradutorAux',fld:'vCONTACONTABILTRADUTORAUX'},{av:'AV52ApresentarHistorico',fld:'vAPRESENTARHISTORICO'},{av:'AV28ValorLocalizar',fld:'vVALORLOCALIZAR'},{av:'AV29ValorTolerancia',fld:'vVALORTOLERANCIA'},{av:'AV13DataInicial',fld:'vDATAINICIAL'},{av:'AV14DataFinal',fld:'vDATAFINAL'},{av:'AV51ContaContabilIdTrad',fld:'vCONTACONTABILIDTRAD'},{av:'AV20CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV21CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV18NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV19NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV15Correntista',fld:'vCORRENTISTA'},{av:'AV27Historico',fld:'vHISTORICO'},{av:'AV30ParteHistorico',fld:'vPARTEHISTORICO'},{av:'AV72NumeroConta',fld:'vNUMEROCONTA'},{av:'AV73NumeroLancamento',fld:'vNUMEROLANCAMENTO'},{av:'AV71CtrlPag',fld:'vCTRLPAG'},{av:'A3161localizarlancamentostraddeb',fld:'LOCALIZARLANCAMENTOSTRADDEB'},{av:'A3164localizarlancamentostradcre',fld:'LOCALIZARLANCAMENTOSTRADCRE'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3177localizarlancamentosSeq',fld:'LOCALIZARLANCAMENTOSSEQ'},{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3163localizarlancamentoscontacre',fld:'LOCALIZARLANCAMENTOSCONTACRE'}],[{av:'AV71CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV55SnErro',fld:'vSNERRO'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV54bmpAlterar',fld:'vBMPALTERAR'},{av:'gx.fn.getCtrlProperty("vBMPALTERAR","Tooltiptext")',ctrl:'vBMPALTERAR',prop:'Tooltiptext'},{av:'AV53bmpDetalhar',fld:'vBMPDETALHAR'},{av:'gx.fn.getCtrlProperty("vBMPDETALHAR","Tooltiptext")',ctrl:'vBMPDETALHAR',prop:'Tooltiptext'},{av:'AV58bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV78BmpFinCre',fld:'vBMPFINCRE'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Tooltiptext")',ctrl:'vBMPFINCRE',prop:'Tooltiptext'},{av:'AV77BmpFinDeb',fld:'vBMPFINDEB'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Tooltiptext")',ctrl:'vBMPFINDEB',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Visible")',ctrl:'vBMPFINCRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Visible")',ctrl:'vBMPFINDEB',prop:'Visible'},{av:'AV17ContaFinal',fld:'vCONTAFINAL'},{av:'AV16ContaInicial',fld:'vCONTAINICIAL'},{av:'AV46ContaContabilTradutorAux',fld:'vCONTACONTABILTRADUTORAUX'},{av:'AV52ApresentarHistorico',fld:'vAPRESENTARHISTORICO'},{av:'AV28ValorLocalizar',fld:'vVALORLOCALIZAR'},{av:'AV29ValorTolerancia',fld:'vVALORTOLERANCIA'},{av:'AV13DataInicial',fld:'vDATAINICIAL'},{av:'AV14DataFinal',fld:'vDATAFINAL'},{av:'AV51ContaContabilIdTrad',fld:'vCONTACONTABILIDTRAD'},{av:'AV20CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV21CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV18NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV19NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV15Correntista',fld:'vCORRENTISTA'},{av:'AV27Historico',fld:'vHISTORICO'},{av:'AV30ParteHistorico',fld:'vPARTEHISTORICO'},{av:'AV72NumeroConta',fld:'vNUMEROCONTA'},{av:'AV73NumeroLancamento',fld:'vNUMEROLANCAMENTO'},{av:'AV71CtrlPag',fld:'vCTRLPAG'},{av:'A3161localizarlancamentostraddeb',fld:'LOCALIZARLANCAMENTOSTRADDEB'},{av:'A3164localizarlancamentostradcre',fld:'LOCALIZARLANCAMENTOSTRADCRE'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3177localizarlancamentosSeq',fld:'LOCALIZARLANCAMENTOSSEQ'},{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3163localizarlancamentoscontacre',fld:'LOCALIZARLANCAMENTOSCONTACRE'}],[{av:'AV71CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV55SnErro',fld:'vSNERRO'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV54bmpAlterar',fld:'vBMPALTERAR'},{av:'gx.fn.getCtrlProperty("vBMPALTERAR","Tooltiptext")',ctrl:'vBMPALTERAR',prop:'Tooltiptext'},{av:'AV53bmpDetalhar',fld:'vBMPDETALHAR'},{av:'gx.fn.getCtrlProperty("vBMPDETALHAR","Tooltiptext")',ctrl:'vBMPDETALHAR',prop:'Tooltiptext'},{av:'AV58bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV78BmpFinCre',fld:'vBMPFINCRE'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Tooltiptext")',ctrl:'vBMPFINCRE',prop:'Tooltiptext'},{av:'AV77BmpFinDeb',fld:'vBMPFINDEB'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Tooltiptext")',ctrl:'vBMPFINDEB',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Visible")',ctrl:'vBMPFINCRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Visible")',ctrl:'vBMPFINDEB',prop:'Visible'},{av:'AV17ContaFinal',fld:'vCONTAFINAL'},{av:'AV16ContaInicial',fld:'vCONTAINICIAL'},{av:'AV46ContaContabilTradutorAux',fld:'vCONTACONTABILTRADUTORAUX'},{av:'AV52ApresentarHistorico',fld:'vAPRESENTARHISTORICO'},{av:'AV28ValorLocalizar',fld:'vVALORLOCALIZAR'},{av:'AV29ValorTolerancia',fld:'vVALORTOLERANCIA'},{av:'AV13DataInicial',fld:'vDATAINICIAL'},{av:'AV14DataFinal',fld:'vDATAFINAL'},{av:'AV51ContaContabilIdTrad',fld:'vCONTACONTABILIDTRAD'},{av:'AV20CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV21CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV18NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV19NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV15Correntista',fld:'vCORRENTISTA'},{av:'AV27Historico',fld:'vHISTORICO'},{av:'AV30ParteHistorico',fld:'vPARTEHISTORICO'},{av:'AV72NumeroConta',fld:'vNUMEROCONTA'},{av:'AV73NumeroLancamento',fld:'vNUMEROLANCAMENTO'},{av:'AV71CtrlPag',fld:'vCTRLPAG'},{av:'A3161localizarlancamentostraddeb',fld:'LOCALIZARLANCAMENTOSTRADDEB'},{av:'A3164localizarlancamentostradcre',fld:'LOCALIZARLANCAMENTOSTRADCRE'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3177localizarlancamentosSeq',fld:'LOCALIZARLANCAMENTOSSEQ'},{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3163localizarlancamentoscontacre',fld:'LOCALIZARLANCAMENTOSCONTACRE'}],[{av:'AV71CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV55SnErro',fld:'vSNERRO'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV54bmpAlterar',fld:'vBMPALTERAR'},{av:'gx.fn.getCtrlProperty("vBMPALTERAR","Tooltiptext")',ctrl:'vBMPALTERAR',prop:'Tooltiptext'},{av:'AV53bmpDetalhar',fld:'vBMPDETALHAR'},{av:'gx.fn.getCtrlProperty("vBMPDETALHAR","Tooltiptext")',ctrl:'vBMPDETALHAR',prop:'Tooltiptext'},{av:'AV58bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV78BmpFinCre',fld:'vBMPFINCRE'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Tooltiptext")',ctrl:'vBMPFINCRE',prop:'Tooltiptext'},{av:'AV77BmpFinDeb',fld:'vBMPFINDEB'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Tooltiptext")',ctrl:'vBMPFINDEB',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Visible")',ctrl:'vBMPFINCRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Visible")',ctrl:'vBMPFINDEB',prop:'Visible'},{av:'AV17ContaFinal',fld:'vCONTAFINAL'},{av:'AV16ContaInicial',fld:'vCONTAINICIAL'},{av:'AV46ContaContabilTradutorAux',fld:'vCONTACONTABILTRADUTORAUX'},{av:'AV52ApresentarHistorico',fld:'vAPRESENTARHISTORICO'},{av:'AV28ValorLocalizar',fld:'vVALORLOCALIZAR'},{av:'AV29ValorTolerancia',fld:'vVALORTOLERANCIA'},{av:'AV13DataInicial',fld:'vDATAINICIAL'},{av:'AV14DataFinal',fld:'vDATAFINAL'},{av:'AV51ContaContabilIdTrad',fld:'vCONTACONTABILIDTRAD'},{av:'AV20CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV21CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV18NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV19NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV15Correntista',fld:'vCORRENTISTA'},{av:'AV27Historico',fld:'vHISTORICO'},{av:'AV30ParteHistorico',fld:'vPARTEHISTORICO'},{av:'AV72NumeroConta',fld:'vNUMEROCONTA'},{av:'AV73NumeroLancamento',fld:'vNUMEROLANCAMENTO'},{av:'AV71CtrlPag',fld:'vCTRLPAG'},{av:'A3161localizarlancamentostraddeb',fld:'LOCALIZARLANCAMENTOSTRADDEB'},{av:'A3164localizarlancamentostradcre',fld:'LOCALIZARLANCAMENTOSTRADCRE'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3177localizarlancamentosSeq',fld:'LOCALIZARLANCAMENTOSSEQ'},{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3163localizarlancamentoscontacre',fld:'LOCALIZARLANCAMENTOSCONTACRE'},{av:'A3171localizarlancamentosusuincdeb',fld:'LOCALIZARLANCAMENTOSUSUINCDEB'},{av:'A3172localizarlancamentosusuinccre',fld:'LOCALIZARLANCAMENTOSUSUINCCRE'},{av:'AV83Pgmname',fld:'vPGMNAME'},{av:'A3170localizarlancamentostransconta',fld:'LOCALIZARLANCAMENTOSTRANSCONTA'},{av:'A3158localizarlancamentosseqdeb',fld:'LOCALIZARLANCAMENTOSSEQDEB'},{av:'A3159localizarlancamentosseqcre',fld:'LOCALIZARLANCAMENTOSSEQCRE'},{av:'A3169localizarlancamentosestorno',fld:'LOCALIZARLANCAMENTOSESTORNO'},{av:'A3157localizarlancamentosdata',fld:'LOCALIZARLANCAMENTOSDATA'}],[{av:'AV65UsrInc',fld:'vUSRINC'},{av:'AV64SnPermitido',fld:'vSNPERMITIDO'},{av:'A3159localizarlancamentosseqcre',fld:'LOCALIZARLANCAMENTOSSEQCRE'},{av:'A3158localizarlancamentosseqdeb',fld:'LOCALIZARLANCAMENTOSSEQDEB'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'}]];
   this.EvtParms["'DETALHAR'"] = [[{av:'A3161localizarlancamentostraddeb',fld:'LOCALIZARLANCAMENTOSTRADDEB'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3157localizarlancamentosdata',fld:'LOCALIZARLANCAMENTOSDATA'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3158localizarlancamentosseqdeb',fld:'LOCALIZARLANCAMENTOSSEQDEB'},{av:'A3163localizarlancamentoscontacre',fld:'LOCALIZARLANCAMENTOSCONTACRE'},{av:'A3159localizarlancamentosseqcre',fld:'LOCALIZARLANCAMENTOSSEQCRE'}],[{av:'A3158localizarlancamentosseqdeb',fld:'LOCALIZARLANCAMENTOSSEQDEB'},{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3159localizarlancamentosseqcre',fld:'LOCALIZARLANCAMENTOSSEQCRE'},{av:'A3163localizarlancamentoscontacre',fld:'LOCALIZARLANCAMENTOSCONTACRE'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3157localizarlancamentosdata',fld:'LOCALIZARLANCAMENTOSDATA'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV55SnErro',fld:'vSNERRO'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV54bmpAlterar',fld:'vBMPALTERAR'},{av:'gx.fn.getCtrlProperty("vBMPALTERAR","Tooltiptext")',ctrl:'vBMPALTERAR',prop:'Tooltiptext'},{av:'AV53bmpDetalhar',fld:'vBMPDETALHAR'},{av:'gx.fn.getCtrlProperty("vBMPDETALHAR","Tooltiptext")',ctrl:'vBMPDETALHAR',prop:'Tooltiptext'},{av:'AV58bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV78BmpFinCre',fld:'vBMPFINCRE'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Tooltiptext")',ctrl:'vBMPFINCRE',prop:'Tooltiptext'},{av:'AV77BmpFinDeb',fld:'vBMPFINDEB'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Tooltiptext")',ctrl:'vBMPFINDEB',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Visible")',ctrl:'vBMPFINCRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Visible")',ctrl:'vBMPFINDEB',prop:'Visible'},{av:'AV17ContaFinal',fld:'vCONTAFINAL'},{av:'AV16ContaInicial',fld:'vCONTAINICIAL'},{av:'AV46ContaContabilTradutorAux',fld:'vCONTACONTABILTRADUTORAUX'},{av:'AV52ApresentarHistorico',fld:'vAPRESENTARHISTORICO'},{av:'AV28ValorLocalizar',fld:'vVALORLOCALIZAR'},{av:'AV29ValorTolerancia',fld:'vVALORTOLERANCIA'},{av:'AV13DataInicial',fld:'vDATAINICIAL'},{av:'AV14DataFinal',fld:'vDATAFINAL'},{av:'AV51ContaContabilIdTrad',fld:'vCONTACONTABILIDTRAD'},{av:'AV20CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV21CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV18NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV19NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV15Correntista',fld:'vCORRENTISTA'},{av:'AV27Historico',fld:'vHISTORICO'},{av:'AV30ParteHistorico',fld:'vPARTEHISTORICO'},{av:'AV72NumeroConta',fld:'vNUMEROCONTA'},{av:'AV73NumeroLancamento',fld:'vNUMEROLANCAMENTO'},{av:'AV71CtrlPag',fld:'vCTRLPAG'},{av:'A3161localizarlancamentostraddeb',fld:'LOCALIZARLANCAMENTOSTRADDEB'},{av:'A3164localizarlancamentostradcre',fld:'LOCALIZARLANCAMENTOSTRADCRE'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3177localizarlancamentosSeq',fld:'LOCALIZARLANCAMENTOSSEQ'},{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3163localizarlancamentoscontacre',fld:'LOCALIZARLANCAMENTOSCONTACRE'},{av:'AV62DataAuxiliar',fld:'vDATAAUXILIAR'}],[{av:'AV63TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV62DataAuxiliar',fld:'vDATAAUXILIAR'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3171localizarlancamentosusuincdeb',fld:'LOCALIZARLANCAMENTOSUSUINCDEB'},{av:'A3172localizarlancamentosusuinccre',fld:'LOCALIZARLANCAMENTOSUSUINCCRE'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV83Pgmname',fld:'vPGMNAME'},{av:'A3169localizarlancamentosestorno',fld:'LOCALIZARLANCAMENTOSESTORNO'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3157localizarlancamentosdata',fld:'LOCALIZARLANCAMENTOSDATA'},{av:'AV59EmpresaTransacaoContabilEmpresaId',fld:'vEMPRESATRANSACAOCONTABILEMPRESAID'},{av:'A3170localizarlancamentostransconta',fld:'LOCALIZARLANCAMENTOSTRANSCONTA'},{av:'A3158localizarlancamentosseqdeb',fld:'LOCALIZARLANCAMENTOSSEQDEB'},{av:'A3166localizarlancamentosvalor',fld:'LOCALIZARLANCAMENTOSVALOR'},{av:'A3159localizarlancamentosseqcre',fld:'LOCALIZARLANCAMENTOSSEQCRE'},{av:'AV28ValorLocalizar',fld:'vVALORLOCALIZAR'},{av:'AV29ValorTolerancia',fld:'vVALORTOLERANCIA'},{av:'AV13DataInicial',fld:'vDATAINICIAL'},{av:'AV14DataFinal',fld:'vDATAFINAL'},{av:'AV51ContaContabilIdTrad',fld:'vCONTACONTABILIDTRAD'},{av:'AV20CentroCustoInicial',fld:'vCENTROCUSTOINICIAL'},{av:'AV21CentroCustoFinal',fld:'vCENTROCUSTOFINAL'},{av:'AV18NaturezaInicial',fld:'vNATUREZAINICIAL'},{av:'AV19NaturezaFinal',fld:'vNATUREZAFINAL'},{av:'AV15Correntista',fld:'vCORRENTISTA'},{av:'AV27Historico',fld:'vHISTORICO'},{av:'AV30ParteHistorico',fld:'vPARTEHISTORICO'},{av:'AV72NumeroConta',fld:'vNUMEROCONTA'},{av:'AV73NumeroLancamento',fld:'vNUMEROLANCAMENTO'}],[{av:'AV65UsrInc',fld:'vUSRINC'},{av:'AV64SnPermitido',fld:'vSNPERMITIDO'},{av:'A3158localizarlancamentosseqdeb',fld:'LOCALIZARLANCAMENTOSSEQDEB'},{av:'A3159localizarlancamentosseqcre',fld:'LOCALIZARLANCAMENTOSSEQCRE'},{av:'A3169localizarlancamentosestorno',fld:'LOCALIZARLANCAMENTOSESTORNO'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'AV35ValorInicial',fld:'vVALORINICIAL'},{av:'AV36ValorFinal',fld:'vVALORFINAL'},{av:'AV60DsSalAnt',fld:'vDSSALANT'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A3161localizarlancamentostraddeb',fld:'LOCALIZARLANCAMENTOSTRADDEB'},{av:'A3164localizarlancamentostradcre',fld:'LOCALIZARLANCAMENTOSTRADCRE'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3177localizarlancamentosSeq',fld:'LOCALIZARLANCAMENTOSSEQ'},{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3163localizarlancamentoscontacre',fld:'LOCALIZARLANCAMENTOSCONTACRE'}],[{av:'AV41TradutorAlfa',fld:'vTRADUTORALFA'},{av:'AV33Digito',fld:'vDIGITO'},{av:'AV31TradutorDebitar',fld:'vTRADUTORDEBITAR'},{av:'AV32TradutorCreditar',fld:'vTRADUTORCREDITAR'},{av:'AV61NumLancamento',fld:'vNUMLANCAMENTO'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Enabled")',ctrl:'vBMPFINDEB',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPFINDEB","Tooltiptext")',ctrl:'vBMPFINDEB',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Enabled")',ctrl:'vBMPFINCRE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPFINCRE","Tooltiptext")',ctrl:'vBMPFINCRE',prop:'Tooltiptext'}]];
   this.EvtParms["'INTEGRACAOFINDEBITO'"] = [[{av:'A3160localizarlancamentoscontadeb',fld:'LOCALIZARLANCAMENTOSCONTADEB'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3158localizarlancamentosseqdeb',fld:'LOCALIZARLANCAMENTOSSEQDEB'},{av:'A3157localizarlancamentosdata',fld:'LOCALIZARLANCAMENTOSDATA'},{av:'A3166localizarlancamentosvalor',fld:'LOCALIZARLANCAMENTOSVALOR'}],[]];
   this.EvtParms["'INTEGRACAOFINCREDITO'"] = [[{av:'A3163localizarlancamentoscontacre',fld:'LOCALIZARLANCAMENTOSCONTACRE'},{av:'A3176localizarlancamentosnumero',fld:'LOCALIZARLANCAMENTOSNUMERO'},{av:'A3159localizarlancamentosseqcre',fld:'LOCALIZARLANCAMENTOSSEQCRE'},{av:'A3157localizarlancamentosdata',fld:'LOCALIZARLANCAMENTOSDATA'},{av:'A3166localizarlancamentosvalor',fld:'LOCALIZARLANCAMENTOSVALOR'}],[]];
   this.setPrompt("IMGCCONT", [182,28]);
   this.setPrompt("IMAGE4", [38,188]);
   this.setPrompt("IMAGE6", [43,188]);
   this.setPrompt("PROMPT_CENTROCUSTOINICIAL", [52]);
   this.setPrompt("PROMPT_CENTROCUSTOFINAL", [56]);
   this.setPrompt("PROMPT_NATUREZAINICIAL", [64]);
   this.setPrompt("PROMPT_NATUREZAFINAL", [68]);
   this.setPrompt("PROMPT_CORRENTISTA", [73]);
   this.setPrompt("PROMPTNUMCONTA", [105]);
   this.setPrompt("PROMPT_HISTORICO", [85]);
   this.setPrompt("PROMPTLANCXABCO", [111]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV5UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A3177localizarlancamentosSeq", "LOCALIZARLANCAMENTOSSEQ", 0, "int");
   this.setVCMap("AV5UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A3177localizarlancamentosSeq", "LOCALIZARLANCAMENTOSSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[183]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[185]);
   Grid1Container.addRefreshingVar({rfrVar:"AV5UsrCod"});
   Grid1Container.addRefreshingVar({rfrVar:"AV54bmpAlterar", rfrProp:"Value", gxAttId:"Bmpalterar"});
   Grid1Container.addRefreshingVar({rfrVar:"AV54bmpAlterar", rfrProp:"Tooltiptext", gxAttId:"Bmpalterar"});
   Grid1Container.addRefreshingVar({rfrVar:"AV53bmpDetalhar", rfrProp:"Value", gxAttId:"Bmpdetalhar"});
   Grid1Container.addRefreshingVar({rfrVar:"AV53bmpDetalhar", rfrProp:"Tooltiptext", gxAttId:"Bmpdetalhar"});
   Grid1Container.addRefreshingVar({rfrVar:"AV58bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV58bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV58bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV78BmpFinCre", rfrProp:"Value", gxAttId:"Bmpfincre"});
   Grid1Container.addRefreshingVar({rfrVar:"AV78BmpFinCre", rfrProp:"Tooltiptext", gxAttId:"Bmpfincre"});
   Grid1Container.addRefreshingVar({rfrVar:"AV77BmpFinDeb", rfrProp:"Value", gxAttId:"Bmpfindeb"});
   Grid1Container.addRefreshingVar({rfrVar:"AV77BmpFinDeb", rfrProp:"Tooltiptext", gxAttId:"Bmpfindeb"});
   Grid1Container.addRefreshingVar({rfrVar:"AV78BmpFinCre", rfrProp:"Visible", gxAttId:"Bmpfincre"});
   Grid1Container.addRefreshingVar({rfrVar:"AV77BmpFinDeb", rfrProp:"Visible", gxAttId:"Bmpfindeb"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[43]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[38]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[28]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[78]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[95]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[100]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[23]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[192]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[52]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[56]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[64]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[68]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[73]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[85]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[90]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[105]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[111]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[191]);
   Grid1Container.addRefreshingVar({rfrVar:"A3161localizarlancamentostraddeb", rfrProp:"Value", gxAttId:"3161"});
   Grid1Container.addRefreshingVar({rfrVar:"A3164localizarlancamentostradcre", rfrProp:"Value", gxAttId:"3164"});
   Grid1Container.addRefreshingVar({rfrVar:"A3176localizarlancamentosnumero", rfrProp:"Value", gxAttId:"3176"});
   Grid1Container.addRefreshingVar({rfrVar:"A3177localizarlancamentosSeq"});
   Grid1Container.addRefreshingVar({rfrVar:"A3160localizarlancamentoscontadeb", rfrProp:"Value", gxAttId:"3160"});
   Grid1Container.addRefreshingVar({rfrVar:"A3163localizarlancamentoscontacre", rfrProp:"Value", gxAttId:"3163"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlocalizarlancamentos());
