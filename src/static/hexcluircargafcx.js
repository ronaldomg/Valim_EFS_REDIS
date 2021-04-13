/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:21:9.25
*/
gx.evt.autoSkip = false;
gx.define('hexcluircargafcx', false, function () {
   this.ServerClass =  "hexcluircargafcx" ;
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
      this.AV25SNErro =  "N"  ;
      if ( this.AV21CargaPDVNumeroIni > this.AV22CargaPDVNumeroFim && this.AV25SNErro == "N" )
      {
         this.addMessage("O Número da Carga inicial deve ser menor ou igual o final");
         gx.fn.usrSetFocus("vCARGAPDVNUMEROINI") ;
         this.AV25SNErro =  "S"  ;
      }
      if ( new gx.date.gxdate( this.AV23CargaPDVDataIni ).compare( this.AV24CargaPDVDataFim ) > 0 && this.AV25SNErro == "N" )
      {
         this.addMessage("O Período inicial deve ser menor ou igual o final");
         gx.fn.usrSetFocus("vCARGAPDVDATAINI") ;
         this.AV25SNErro =  "S"  ;
      }
      if ( gx.date.year( this.AV23CargaPDVDataIni) < 1900 && ! (new gx.date.gxdate("").compare(this.AV23CargaPDVDataIni)==0) && this.AV25SNErro == "N" )
      {
         this.addMessage("Período inicial inválido");
         gx.fn.usrSetFocus("vCARGAPDVDATAINI") ;
         this.AV25SNErro =  "S"  ;
      }
      if ( gx.date.year( this.AV24CargaPDVDataFim) < 1900 && ! (new gx.date.gxdate("").compare(this.AV24CargaPDVDataFim)==0) && this.AV25SNErro == "N" )
      {
         this.addMessage("Período final inválido");
         gx.fn.usrSetFocus("vCARGAPDVDATAFIM") ;
         this.AV25SNErro =  "S"  ;
      }
      if ( (0==this.AV22CargaPDVNumeroFim) && (new gx.date.gxdate("").compare(this.AV24CargaPDVDataFim)==0) && this.AV25SNErro == "N" )
      {
         this.addMessage("Informe o Número ou o Período da Carga");
         gx.fn.usrSetFocus("vCARGAPDVNUMEROINI") ;
         this.AV25SNErro =  "S"  ;
      }
   };
   this.e11xj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13xj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15xj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,24,26,29,31,33,39,45,47];
   this.GXLastCtrlId =47;
   GXValidFnc[3]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE4",grid:0};
   GXValidFnc[9]={fld:"TABLE9",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE10",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARGAPDVNUMEROINI",gxz:"ZV21CargaPDVNumeroIni",gxold:"OV21CargaPDVNumeroIni",gxvar:"AV21CargaPDVNumeroIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CargaPDVNumeroIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21CargaPDVNumeroIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCARGAPDVNUMEROINI",gx.O.AV21CargaPDVNumeroIni,0)},c2v:function(){gx.O.AV21CargaPDVNumeroIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCARGAPDVNUMEROINI",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARGAPDVNUMEROFIM",gxz:"ZV22CargaPDVNumeroFim",gxold:"OV22CargaPDVNumeroFim",gxvar:"AV22CargaPDVNumeroFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CargaPDVNumeroFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22CargaPDVNumeroFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCARGAPDVNUMEROFIM",gx.O.AV22CargaPDVNumeroFim,0)},c2v:function(){gx.O.AV22CargaPDVNumeroFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCARGAPDVNUMEROFIM",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE11",grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARGAPDVDATAINI",gxz:"ZV23CargaPDVDataIni",gxold:"OV23CargaPDVDataIni",gxvar:"AV23CargaPDVDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CargaPDVDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23CargaPDVDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCARGAPDVDATAINI",gx.O.AV23CargaPDVDataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23CargaPDVDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCARGAPDVDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[31]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARGAPDVDATAFIM",gxz:"ZV24CargaPDVDataFim",gxold:"OV24CargaPDVDataFim",gxvar:"AV24CargaPDVDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24CargaPDVDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24CargaPDVDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCARGAPDVDATAFIM",gx.O.AV24CargaPDVDataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24CargaPDVDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCARGAPDVDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[39]={fld:"TABLE8",grid:0};
   GXValidFnc[45]={fld:"JS", format:2,grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   this.AV21CargaPDVNumeroIni = 0 ;
   this.ZV21CargaPDVNumeroIni = 0 ;
   this.OV21CargaPDVNumeroIni = 0 ;
   this.AV22CargaPDVNumeroFim = 0 ;
   this.ZV22CargaPDVNumeroFim = 0 ;
   this.OV22CargaPDVNumeroFim = 0 ;
   this.AV23CargaPDVDataIni = gx.date.nullDate() ;
   this.ZV23CargaPDVDataIni = gx.date.nullDate() ;
   this.OV23CargaPDVDataIni = gx.date.nullDate() ;
   this.AV24CargaPDVDataFim = gx.date.nullDate() ;
   this.ZV24CargaPDVDataFim = gx.date.nullDate() ;
   this.OV24CargaPDVDataFim = gx.date.nullDate() ;
   this.AV21CargaPDVNumeroIni = 0 ;
   this.AV22CargaPDVNumeroFim = 0 ;
   this.AV23CargaPDVDataIni = gx.date.nullDate() ;
   this.AV24CargaPDVDataFim = gx.date.nullDate() ;
   this.AV25SNErro = "" ;
   this.Events = {"e11xj2_client": ["'FECHAR'", true] ,"e13xj2_client": ["ENTER", true] ,"e15xj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV25SNErro',fld:'vSNERRO'},{av:'AV21CargaPDVNumeroIni',fld:'vCARGAPDVNUMEROINI'},{av:'AV22CargaPDVNumeroFim',fld:'vCARGAPDVNUMEROFIM'},{av:'AV23CargaPDVDataIni',fld:'vCARGAPDVDATAINI'},{av:'AV24CargaPDVDataFim',fld:'vCARGAPDVDATAFIM'}],[{av:'AV27CargaPDVEmpresaId',fld:'vCARGAPDVEMPRESAID'},{av:'AV28ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV26QtdeExcluida',fld:'vQTDEEXCLUIDA'},{av:'AV25SNErro',fld:'vSNERRO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexcluircargafcx());
