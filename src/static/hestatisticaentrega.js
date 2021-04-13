/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:3:6.94
*/
gx.evt.autoSkip = false;
gx.define('hestatisticaentrega', false, function () {
   this.ServerClass =  "hestatisticaentrega" ;
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
   this.s112_client=function()
   {
      this.AV17TpErro = gx.num.trunc( 0 ,0) ;
      if ( ! (new gx.date.gxdate("").compare(this.AV6DtEntregaIni)==0) && (new gx.date.gxdate("").compare(this.AV5DtEntregaFin)==0) )
      {
         this.AV5DtEntregaFin =  this.AV6DtEntregaIni  ;
      }
      if ( (""==this.AV18TpEstatistica) )
      {
         this.addMessage("Informe o tipo de estatística");
         gx.fn.usrSetFocus("vTPESTATISTICA") ;
         this.AV17TpErro = gx.num.trunc( 1 ,0) ;
      }
      if ( this.AV17TpErro == 0 )
      {
         if ( (new gx.date.gxdate("").compare(this.AV6DtEntregaIni)==0) && (new gx.date.gxdate("").compare(this.AV5DtEntregaFin)==0) )
         {
            this.addMessage("Informe o intervalo de data de entrega");
            gx.fn.usrSetFocus("vDTENTREGAINI") ;
            this.AV17TpErro = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( new gx.date.gxdate( this.AV6DtEntregaIni ).compare( this.AV5DtEntregaFin ) > 0 )
            {
               this.addMessage("Data de entrega inicial deve ser menor ou igual a final");
               gx.fn.usrSetFocus("vDTENTREGAINI") ;
               this.AV17TpErro = gx.num.trunc( 1 ,0) ;
            }
         }
      }
      if ( this.AV17TpErro == 0 )
      {
         if ( this.AV9EntregadorIni > this.AV8EntregadorFin )
         {
            this.addMessage("Entregador inicial deve ser menor ou igual ao final");
            gx.fn.usrSetFocus("vENTREGADORINI") ;
            this.AV17TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV17TpErro == 0 )
      {
         if ( this.AV21VendedorIni > this.AV20VendedorFin )
         {
            this.addMessage("Vendedor inicial deve ser menor ou igual ao final");
            gx.fn.usrSetFocus("vVENDEDORINI") ;
            this.AV17TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
   };
   this.e1129h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1329h2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1629h2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,25,27,29,32,34,37,39,41,44,46,49,51,53,62,64,66,67,68,69];
   this.GXLastCtrlId =69;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPESTATISTICA",gxz:"ZV18TpEstatistica",gxold:"OV18TpEstatistica",gxvar:"AV18TpEstatistica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18TpEstatistica=Value},v2z:function(Value){gx.O.ZV18TpEstatistica=Value},v2c:function(){gx.fn.setComboBoxValue("vTPESTATISTICA",gx.O.AV18TpEstatistica)},c2v:function(){gx.O.AV18TpEstatistica=this.val()},val:function(){return gx.fn.getControlValue("vTPESTATISTICA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE4",grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTENTREGAINI",gxz:"ZV6DtEntregaIni",gxold:"OV6DtEntregaIni",gxvar:"AV6DtEntregaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6DtEntregaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6DtEntregaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTENTREGAINI",gx.O.AV6DtEntregaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6DtEntregaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTENTREGAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTENTREGAFIN",gxz:"ZV5DtEntregaFin",gxold:"OV5DtEntregaFin",gxvar:"AV5DtEntregaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5DtEntregaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV5DtEntregaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTENTREGAFIN",gx.O.AV5DtEntregaFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5DtEntregaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTENTREGAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLE5",grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGADORINI",gxz:"ZV9EntregadorIni",gxold:"OV9EntregadorIni",gxvar:"AV9EntregadorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EntregadorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9EntregadorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTREGADORINI",gx.O.AV9EntregadorIni,0)},c2v:function(){gx.O.AV9EntregadorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTREGADORINI",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTREGADORFIN",gxz:"ZV8EntregadorFin",gxold:"OV8EntregadorFin",gxvar:"AV8EntregadorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8EntregadorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8EntregadorFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTREGADORFIN",gx.O.AV8EntregadorFin,0)},c2v:function(){gx.O.AV8EntregadorFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTREGADORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[46]={fld:"TABLE6",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORINI",gxz:"ZV21VendedorIni",gxold:"OV21VendedorIni",gxvar:"AV21VendedorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21VendedorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21VendedorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORINI",gx.O.AV21VendedorIni,0)},c2v:function(){gx.O.AV21VendedorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORINI",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORFIN",gxz:"ZV20VendedorFin",gxold:"OV20VendedorFin",gxvar:"AV20VendedorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20VendedorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20VendedorFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORFIN",gx.O.AV20VendedorFin,0)},c2v:function(){gx.O.AV20VendedorFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"JS", format:2,grid:0};
   GXValidFnc[64]={fld:"BTNHELP",grid:0};
   GXValidFnc[66]={fld:"PROMPT_ENTREGADORINI",grid:0};
   GXValidFnc[67]={fld:"PROMPT_ENTREGADORFIN",grid:0};
   GXValidFnc[68]={fld:"PROMPT_VENDEDORINI",grid:0};
   GXValidFnc[69]={fld:"PROMPT_VENDEDORFIN",grid:0};
   this.AV18TpEstatistica = "" ;
   this.ZV18TpEstatistica = "" ;
   this.OV18TpEstatistica = "" ;
   this.AV6DtEntregaIni = gx.date.nullDate() ;
   this.ZV6DtEntregaIni = gx.date.nullDate() ;
   this.OV6DtEntregaIni = gx.date.nullDate() ;
   this.AV5DtEntregaFin = gx.date.nullDate() ;
   this.ZV5DtEntregaFin = gx.date.nullDate() ;
   this.OV5DtEntregaFin = gx.date.nullDate() ;
   this.AV9EntregadorIni = 0 ;
   this.ZV9EntregadorIni = 0 ;
   this.OV9EntregadorIni = 0 ;
   this.AV8EntregadorFin = 0 ;
   this.ZV8EntregadorFin = 0 ;
   this.OV8EntregadorFin = 0 ;
   this.AV21VendedorIni = 0 ;
   this.ZV21VendedorIni = 0 ;
   this.OV21VendedorIni = 0 ;
   this.AV20VendedorFin = 0 ;
   this.ZV20VendedorFin = 0 ;
   this.OV20VendedorFin = 0 ;
   this.AV18TpEstatistica = "" ;
   this.AV6DtEntregaIni = gx.date.nullDate() ;
   this.AV5DtEntregaFin = gx.date.nullDate() ;
   this.AV9EntregadorIni = 0 ;
   this.AV8EntregadorFin = 0 ;
   this.AV21VendedorIni = 0 ;
   this.AV20VendedorFin = 0 ;
   this.A10905EntregadorUsuarioCodigo = "" ;
   this.A10825EntregadorEmpresaId = "" ;
   this.A10826EntregadorId = 0 ;
   this.AV17TpErro = 0 ;
   this.Events = {"e1129h2_client": ["'FECHAR'", true] ,"e1329h2_client": ["ENTER", true] ,"e1629h2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A10825EntregadorEmpresaId',fld:'ENTREGADOREMPRESAID'},{av:'AV22EntregadorEmpresaId',fld:'vENTREGADOREMPRESAID'},{av:'A10905EntregadorUsuarioCodigo',fld:'ENTREGADORUSUARIOCODIGO'},{av:'AV19UsrCod',fld:'vUSRCOD'},{av:'A10826EntregadorId',fld:'ENTREGADORID'}],[{av:'gx.fn.getCtrlProperty("vENTREGADORINI","Enabled")',ctrl:'vENTREGADORINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTREGADORFIN","Enabled")',ctrl:'vENTREGADORFIN',prop:'Enabled'},{av:'AV23EntregadorId',fld:'vENTREGADORID'},{av:'AV9EntregadorIni',fld:'vENTREGADORINI'},{av:'AV8EntregadorFin',fld:'vENTREGADORFIN'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV17TpErro',fld:'vTPERRO'},{av:'AV26Pgmname',fld:'vPGMNAME'},{av:'AV18TpEstatistica',fld:'vTPESTATISTICA'},{av:'AV6DtEntregaIni',fld:'vDTENTREGAINI'},{av:'AV5DtEntregaFin',fld:'vDTENTREGAFIN'},{av:'AV9EntregadorIni',fld:'vENTREGADORINI'},{av:'AV8EntregadorFin',fld:'vENTREGADORFIN'},{av:'AV21VendedorIni',fld:'vVENDEDORINI'},{av:'AV20VendedorFin',fld:'vVENDEDORFIN'}],[{av:'AV14NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV13NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV15QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV20VendedorFin',fld:'vVENDEDORFIN'},{av:'AV21VendedorIni',fld:'vVENDEDORINI'},{av:'AV8EntregadorFin',fld:'vENTREGADORFIN'},{av:'AV9EntregadorIni',fld:'vENTREGADORINI'},{av:'AV5DtEntregaFin',fld:'vDTENTREGAFIN'},{av:'AV6DtEntregaIni',fld:'vDTENTREGAINI'},{av:'AV18TpEstatistica',fld:'vTPESTATISTICA'},{av:'AV17TpErro',fld:'vTPERRO'}]];
   this.setPrompt("PROMPT_ENTREGADORINI", [37]);
   this.setPrompt("PROMPT_ENTREGADORFIN", [41]);
   this.setPrompt("PROMPT_VENDEDORINI", [49]);
   this.setPrompt("PROMPT_VENDEDORFIN", [53]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hestatisticaentrega());
