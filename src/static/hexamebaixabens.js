/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:33:0.50
*/
gx.evt.autoSkip = false;
gx.define('hexamebaixabens', false, function () {
   this.ServerClass =  "hexamebaixabens" ;
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
      this.AV23SnError =  "N"  ;
      if ( this.AV23SnError == "N" )
      {
         if ( (new gx.date.gxdate("").compare(this.AV20DataIni)==0) && (new gx.date.gxdate("").compare(this.AV21DataFim)==0) )
         {
            this.addMessage("Informe a Data");
            gx.fn.usrSetFocus("vDATAINI") ;
            this.AV23SnError =  "S"  ;
         }
         else
         {
            if ( ( new gx.date.gxdate( this.AV20DataIni ).compare( this.AV21DataFim ) > 0 ) )
            {
               this.addMessage("Data inicial deve ser menor ou igual a data final");
               gx.fn.usrSetFocus("vDATAINI") ;
               this.AV23SnError =  "S"  ;
            }
         }
      }
   };
   this.e15fl1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmtermoresp",["Parâmetros do Exame de Baixa de Bens"]), []);
      this.refreshOutputs([]);
   };
   this.e11fl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13fl2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16fl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,19,21,24,26,28,32,41,43,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={fld:"TABLERPERIODO",grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV20DataIni",gxold:"OV20DataIni",gxvar:"AV20DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV20DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIM",gxz:"ZV21DataFim",gxold:"OV21DataFim",gxvar:"AV21DataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIM",gx.O.AV21DataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIROBS",gxz:"ZV22ImprimirObs",gxold:"OV22ImprimirObs",gxvar:"AV22ImprimirObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22ImprimirObs=Value},v2z:function(Value){gx.O.ZV22ImprimirObs=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIROBS",gx.O.AV22ImprimirObs,"S")},c2v:function(){gx.O.AV22ImprimirObs=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIROBS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[41]={fld:"JS", format:2,grid:0};
   GXValidFnc[43]={fld:"BTNPARM",grid:0};
   GXValidFnc[44]={fld:"BTNHELP",grid:0};
   this.AV20DataIni = gx.date.nullDate() ;
   this.ZV20DataIni = gx.date.nullDate() ;
   this.OV20DataIni = gx.date.nullDate() ;
   this.AV21DataFim = gx.date.nullDate() ;
   this.ZV21DataFim = gx.date.nullDate() ;
   this.OV21DataFim = gx.date.nullDate() ;
   this.AV22ImprimirObs = "" ;
   this.ZV22ImprimirObs = "" ;
   this.OV22ImprimirObs = "" ;
   this.AV20DataIni = gx.date.nullDate() ;
   this.AV21DataFim = gx.date.nullDate() ;
   this.AV22ImprimirObs = "" ;
   this.AV23SnError = "" ;
   this.Events = {"e11fl2_client": ["'FECHAR'", true] ,"e13fl2_client": ["ENTER", true] ,"e16fl2_client": ["CANCEL", true] ,"e15fl1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV23SnError',fld:'vSNERROR'},{av:'AV51Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV24DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV25BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'AV20DataIni',fld:'vDATAINI'},{av:'AV21DataFim',fld:'vDATAFIM'},{av:'AV22ImprimirObs',fld:'vIMPRIMIROBS'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV22ImprimirObs',fld:'vIMPRIMIROBS'},{av:'AV21DataFim',fld:'vDATAFIM'},{av:'AV20DataIni',fld:'vDATAINI'},{av:'AV25BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV24DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV23SnError',fld:'vSNERROR'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexamebaixabens());
