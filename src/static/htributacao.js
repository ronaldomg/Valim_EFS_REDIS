/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:11:39.2
*/
gx.evt.autoSkip = false;
gx.define('htributacao', false, function () {
   this.ServerClass =  "htributacao" ;
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
      this.AV19SnErro =  "N"  ;
      if ( new gx.date.gxdate( this.AV7DataIni ).compare( this.AV6DataFim ) > 0 && (new gx.date.gxdate("").compare(this.AV6DataFim)==0) )
      {
         this.AV6DataFim =  this.AV7DataIni  ;
      }
      if ( (""==this.AV20TpRelatorio) && this.AV19SnErro == "N" )
      {
         this.addMessage("Informe o tipo de relatório");
         gx.fn.usrSetFocus("vTPRELATORIO") ;
         this.AV19SnErro =  "S"  ;
      }
      if ( (new gx.date.gxdate("").compare(this.AV7DataIni)==0) && (new gx.date.gxdate("").compare(this.AV6DataFim)==0) )
      {
         this.addMessage("Informe o intervalo de data de emissão");
         gx.fn.usrSetFocus("vDATAINI") ;
         this.AV19SnErro =  "S"  ;
      }
      else
      {
         if ( new gx.date.gxdate( this.AV7DataIni ).compare( this.AV6DataFim ) > 0 )
         {
            this.addMessage("Data inicial deve ser menor ou igual a final");
            gx.fn.usrSetFocus("vDATAINI") ;
            this.AV19SnErro =  "S"  ;
         }
      }
   };
   this.e132d32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e112d32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152d32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,26,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE4",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPRELATORIO",gxz:"ZV20TpRelatorio",gxold:"OV20TpRelatorio",gxvar:"AV20TpRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20TpRelatorio=Value},v2z:function(Value){gx.O.ZV20TpRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTPRELATORIO",gx.O.AV20TpRelatorio)},c2v:function(){gx.O.AV20TpRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTPRELATORIO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={fld:"TABLE13",grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV7DataIni",gxold:"OV7DataIni",gxvar:"AV7DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV7DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIM",gxz:"ZV6DataFim",gxold:"OV6DataFim",gxvar:"AV6DataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6DataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6DataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIM",gx.O.AV6DataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6DataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERARCSV",gxz:"ZV21GerarCSV",gxold:"OV21GerarCSV",gxvar:"AV21GerarCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21GerarCSV=Value},v2z:function(Value){gx.O.ZV21GerarCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERARCSV",gx.O.AV21GerarCSV,"S")},c2v:function(){gx.O.AV21GerarCSV=this.val()},val:function(){return gx.fn.getControlValue("vGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[39]={fld:"JS", format:2,grid:0};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.AV20TpRelatorio = "" ;
   this.ZV20TpRelatorio = "" ;
   this.OV20TpRelatorio = "" ;
   this.AV7DataIni = gx.date.nullDate() ;
   this.ZV7DataIni = gx.date.nullDate() ;
   this.OV7DataIni = gx.date.nullDate() ;
   this.AV6DataFim = gx.date.nullDate() ;
   this.ZV6DataFim = gx.date.nullDate() ;
   this.OV6DataFim = gx.date.nullDate() ;
   this.AV21GerarCSV = "" ;
   this.ZV21GerarCSV = "" ;
   this.OV21GerarCSV = "" ;
   this.AV20TpRelatorio = "" ;
   this.AV7DataIni = gx.date.nullDate() ;
   this.AV6DataFim = gx.date.nullDate() ;
   this.AV21GerarCSV = "" ;
   this.AV19SnErro = "" ;
   this.Events = {"e132d32_client": ["ENTER", true] ,"e112d32_client": ["'FECHAR'", true] ,"e152d32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19SnErro',fld:'vSNERRO'},{av:'AV24Pgmname',fld:'vPGMNAME'},{av:'AV20TpRelatorio',fld:'vTPRELATORIO'},{av:'AV7DataIni',fld:'vDATAINI'},{av:'AV6DataFim',fld:'vDATAFIM'},{av:'AV21GerarCSV',fld:'vGERARCSV'},{av:'AV25Pgmdesc',fld:'vPGMDESC'}],[{av:'AV13NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV21GerarCSV',fld:'vGERARCSV'},{av:'AV6DataFim',fld:'vDATAFIM'},{av:'AV7DataIni',fld:'vDATAINI'},{av:'AV14Orientacao',fld:'vORIENTACAO'},{av:'AV19SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new htributacao());
