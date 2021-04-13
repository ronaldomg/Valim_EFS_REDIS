/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:3:5.92
*/
gx.evt.autoSkip = false;
gx.define('hacertoentregador', false, function () {
   this.ServerClass =  "hacertoentregador" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.s122_client=function()
   {
      this.AV19TpErro = gx.num.trunc( 0 ,0) ;
      if ( ! (new gx.date.gxdate("").compare(this.AV7DtSaidaEntIni)==0) && (new gx.date.gxdate("").compare(this.AV6DtSaidaEntFin)==0) )
      {
         this.AV6DtSaidaEntFin =  this.AV7DtSaidaEntIni  ;
      }
      if ( (""==this.AV20TpGeracao) )
      {
         this.addMessage("Informe o tipo de geração");
         gx.fn.usrSetFocus("vTPGERACAO") ;
         this.AV19TpErro = gx.num.trunc( 1 ,0) ;
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( (""==this.AV21TpRelatorio) )
         {
            this.addMessage("Informe o tipo de relatório");
            gx.fn.usrSetFocus("vTPRELATORIO") ;
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( new gx.date.gxdate( this.AV7DtSaidaEntIni ).compare( this.AV6DtSaidaEntFin ) > 0 )
         {
            this.addMessage("Data de entrega inicial deve ser menor ou igual a final");
            gx.fn.usrSetFocus("vDTSAIDAENTINI") ;
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( this.AV10EntregadorIni > this.AV9EntregadorFin )
         {
            this.addMessage("Entregador inicial deve ser menor ou igual ao final");
            gx.fn.usrSetFocus("vENTREGADORINI") ;
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( (new gx.date.gxdate("").compare(this.AV5DtAcerto)==0) )
         {
            this.addMessage("Informe a data do acerto");
            gx.fn.usrSetFocus("vDTACERTO") ;
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV19TpErro == 0 )
      {
         if ( (0.0==this.AV23ValorEntrega) && this.AV20TpGeracao != "O" )
         {
            this.addMessage("Informe o valor por entrega");
            gx.fn.usrSetFocus("vVALORENTREGA") ;
            this.AV19TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
   };
   this.e1129g2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1329g2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1629g2_client=function()
   {
      this.executeServerEvent("VTPGERACAO.CLICK", true, null, false, true);
   };
   this.e1729g2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,28,32,34,37,39,41,44,46,49,51,53,59,63,65,68,70,74,83,85,87,88];
   this.GXLastCtrlId =88;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPGERACAO",gxz:"ZV20TpGeracao",gxold:"OV20TpGeracao",gxvar:"AV20TpGeracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20TpGeracao=Value},v2z:function(Value){gx.O.ZV20TpGeracao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPGERACAO",gx.O.AV20TpGeracao)},c2v:function(){gx.O.AV20TpGeracao=this.val()},val:function(){return gx.fn.getControlValue("vTPGERACAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPRELATORIO",gxz:"ZV21TpRelatorio",gxold:"OV21TpRelatorio",gxvar:"AV21TpRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21TpRelatorio=Value},v2z:function(Value){gx.O.ZV21TpRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTPRELATORIO",gx.O.AV21TpRelatorio)},c2v:function(){gx.O.AV21TpRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTPRELATORIO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[32]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLE4",grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTSAIDAENTINI",gxz:"ZV7DtSaidaEntIni",gxold:"OV7DtSaidaEntIni",gxvar:"AV7DtSaidaEntIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DtSaidaEntIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7DtSaidaEntIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTSAIDAENTINI",gx.O.AV7DtSaidaEntIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7DtSaidaEntIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTSAIDAENTINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTSAIDAENTFIN",gxz:"ZV6DtSaidaEntFin",gxold:"OV6DtSaidaEntFin",gxvar:"AV6DtSaidaEntFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6DtSaidaEntFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6DtSaidaEntFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTSAIDAENTFIN",gx.O.AV6DtSaidaEntFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6DtSaidaEntFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTSAIDAENTFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[46]={fld:"TABLE5",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGADORINI",gxz:"ZV10EntregadorIni",gxold:"OV10EntregadorIni",gxvar:"AV10EntregadorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10EntregadorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10EntregadorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTREGADORINI",gx.O.AV10EntregadorIni,0)},c2v:function(){gx.O.AV10EntregadorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTREGADORINI",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGADORFIN",gxz:"ZV9EntregadorFin",gxold:"OV9EntregadorFin",gxvar:"AV9EntregadorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EntregadorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9EntregadorFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTREGADORFIN",gx.O.AV9EntregadorFin,0)},c2v:function(){gx.O.AV9EntregadorFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTREGADORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[63]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTACERTO",gxz:"ZV5DtAcerto",gxold:"OV5DtAcerto",gxvar:"AV5DtAcerto",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5DtAcerto=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV5DtAcerto=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTACERTO",gx.O.AV5DtAcerto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5DtAcerto=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTACERTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORENTREGA",gxz:"ZV23ValorEntrega",gxold:"OV23ValorEntrega",gxvar:"AV23ValorEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ValorEntrega=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV23ValorEntrega=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORENTREGA",gx.O.AV23ValorEntrega,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23ValorEntrega=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORENTREGA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNATUALIZARVALOR",gxz:"ZV18SnAtualizarValor",gxold:"OV18SnAtualizarValor",gxvar:"AV18SnAtualizarValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18SnAtualizarValor=Value},v2z:function(Value){gx.O.ZV18SnAtualizarValor=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNATUALIZARVALOR",gx.O.AV18SnAtualizarValor,"S")},c2v:function(){gx.O.AV18SnAtualizarValor=this.val()},val:function(){return gx.fn.getControlValue("vSNATUALIZARVALOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[83]={fld:"JS", format:2,grid:0};
   GXValidFnc[85]={fld:"BTNHELP",grid:0};
   GXValidFnc[87]={fld:"PROMPT_ENTREGADORINI",grid:0};
   GXValidFnc[88]={fld:"PROMPT_ENTREGADORFIN",grid:0};
   this.AV20TpGeracao = "" ;
   this.ZV20TpGeracao = "" ;
   this.OV20TpGeracao = "" ;
   this.AV21TpRelatorio = "" ;
   this.ZV21TpRelatorio = "" ;
   this.OV21TpRelatorio = "" ;
   this.AV7DtSaidaEntIni = gx.date.nullDate() ;
   this.ZV7DtSaidaEntIni = gx.date.nullDate() ;
   this.OV7DtSaidaEntIni = gx.date.nullDate() ;
   this.AV6DtSaidaEntFin = gx.date.nullDate() ;
   this.ZV6DtSaidaEntFin = gx.date.nullDate() ;
   this.OV6DtSaidaEntFin = gx.date.nullDate() ;
   this.AV10EntregadorIni = 0 ;
   this.ZV10EntregadorIni = 0 ;
   this.OV10EntregadorIni = 0 ;
   this.AV9EntregadorFin = 0 ;
   this.ZV9EntregadorFin = 0 ;
   this.OV9EntregadorFin = 0 ;
   this.AV5DtAcerto = gx.date.nullDate() ;
   this.ZV5DtAcerto = gx.date.nullDate() ;
   this.OV5DtAcerto = gx.date.nullDate() ;
   this.AV23ValorEntrega = 0 ;
   this.ZV23ValorEntrega = 0 ;
   this.OV23ValorEntrega = 0 ;
   this.AV18SnAtualizarValor = "" ;
   this.ZV18SnAtualizarValor = "" ;
   this.OV18SnAtualizarValor = "" ;
   this.AV20TpGeracao = "" ;
   this.AV21TpRelatorio = "" ;
   this.AV7DtSaidaEntIni = gx.date.nullDate() ;
   this.AV6DtSaidaEntFin = gx.date.nullDate() ;
   this.AV10EntregadorIni = 0 ;
   this.AV9EntregadorFin = 0 ;
   this.AV5DtAcerto = gx.date.nullDate() ;
   this.AV23ValorEntrega = 0 ;
   this.AV18SnAtualizarValor = "" ;
   this.AV19TpErro = 0 ;
   this.Events = {"e1129g2_client": ["'FECHAR'", true] ,"e1329g2_client": ["ENTER", true] ,"e1629g2_client": ["VTPGERACAO.CLICK", true] ,"e1729g2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV20TpGeracao',fld:'vTPGERACAO'}],[{av:'gx.fn.getCtrlProperty("vSNATUALIZARVALOR","Visible")',ctrl:'vSNATUALIZARVALOR',prop:'Visible'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV31Pgmname',fld:'vPGMNAME'},{av:'AV20TpGeracao',fld:'vTPGERACAO'},{av:'AV21TpRelatorio',fld:'vTPRELATORIO'},{av:'AV7DtSaidaEntIni',fld:'vDTSAIDAENTINI'},{av:'AV6DtSaidaEntFin',fld:'vDTSAIDAENTFIN'},{av:'AV10EntregadorIni',fld:'vENTREGADORINI'},{av:'AV9EntregadorFin',fld:'vENTREGADORFIN'},{av:'AV5DtAcerto',fld:'vDTACERTO'},{av:'AV23ValorEntrega',fld:'vVALORENTREGA'},{av:'AV18SnAtualizarValor',fld:'vSNATUALIZARVALOR'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV15NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV14NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV18SnAtualizarValor',fld:'vSNATUALIZARVALOR'},{av:'AV23ValorEntrega',fld:'vVALORENTREGA'},{av:'AV5DtAcerto',fld:'vDTACERTO'},{av:'AV9EntregadorFin',fld:'vENTREGADORFIN'},{av:'AV10EntregadorIni',fld:'vENTREGADORINI'},{av:'AV6DtSaidaEntFin',fld:'vDTSAIDAENTFIN'},{av:'AV7DtSaidaEntIni',fld:'vDTSAIDAENTINI'},{av:'AV21TpRelatorio',fld:'vTPRELATORIO'},{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV28OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTPGERACAO.CLICK"] = [[{av:'AV20TpGeracao',fld:'vTPGERACAO'}],[{av:'gx.fn.getCtrlProperty("vSNATUALIZARVALOR","Visible")',ctrl:'vSNATUALIZARVALOR',prop:'Visible'}]];
   this.setPrompt("PROMPT_ENTREGADORINI", [49]);
   this.setPrompt("PROMPT_ENTREGADORFIN", [53]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hacertoentregador());
