/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:54:58.22
*/
gx.evt.autoSkip = false;
gx.define('htermoaberturaencerramento', false, function () {
   this.ServerClass =  "htermoaberturaencerramento" ;
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
   this.e13442_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11442_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15442_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,23,25,30,33,35,38,40,42,45,47,50,52,55,57,60,62,65,67,70,72,81,83];
   this.GXLastCtrlId =83;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLIVRO",gxz:"ZV28TipoLivro",gxold:"OV28TipoLivro",gxvar:"AV28TipoLivro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV28TipoLivro=Value},v2z:function(Value){gx.O.ZV28TipoLivro=Value},v2c:function(){gx.fn.setRadioValue("vTIPOLIVRO",gx.O.AV28TipoLivro)},c2v:function(){gx.O.AV28TipoLivro=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLIVRO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMLIVRO",gxz:"ZV35NumLivro",gxold:"OV35NumLivro",gxvar:"AV35NumLivro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35NumLivro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35NumLivro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMLIVRO",gx.O.AV35NumLivro,0)},c2v:function(){gx.O.AV35NumLivro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMLIVRO",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={fld:"TABLERPERIODO",grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV21DataInicial",gxold:"OV21DataInicial",gxvar:"AV21DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV21DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV22DataFinal",gxold:"OV22DataFinal",gxvar:"AV22DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV22DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATATERMOABERT",gxz:"ZV29DataTermoAbert",gxold:"OV29DataTermoAbert",gxvar:"AV29DataTermoAbert",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DataTermoAbert=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29DataTermoAbert=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATATERMOABERT",gx.O.AV29DataTermoAbert,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29DataTermoAbert=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATATERMOABERT")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[50]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATATERMOENC",gxz:"ZV30DataTermoEnc",gxold:"OV30DataTermoEnc",gxvar:"AV30DataTermoEnc",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30DataTermoEnc=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30DataTermoEnc=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATATERMOENC",gx.O.AV30DataTermoEnc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30DataTermoEnc=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATATERMOENC")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[55]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDPAGINAS",gxz:"ZV31QtdPaginas",gxold:"OV31QtdPaginas",gxvar:"AV31QtdPaginas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31QtdPaginas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31QtdPaginas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDPAGINAS",gx.O.AV31QtdPaginas,0)},c2v:function(){gx.O.AV31QtdPaginas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDPAGINAS",'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMPORTARIA",gxz:"ZV32NumPortaria",gxold:"OV32NumPortaria",gxvar:"AV32NumPortaria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32NumPortaria=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32NumPortaria=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMPORTARIA",gx.O.AV32NumPortaria,0)},c2v:function(){gx.O.AV32NumPortaria=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMPORTARIA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPORTARIA",gxz:"ZV33DataPortaria",gxold:"OV33DataPortaria",gxvar:"AV33DataPortaria",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33DataPortaria=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33DataPortaria=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPORTARIA",gx.O.AV33DataPortaria,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33DataPortaria=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPORTARIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[70]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"svchar",len:50,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCORGAOREGISTRO",gxz:"ZV34DescOrgaoRegistro",gxold:"OV34DescOrgaoRegistro",gxvar:"AV34DescOrgaoRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34DescOrgaoRegistro=Value},v2z:function(Value){gx.O.ZV34DescOrgaoRegistro=Value},v2c:function(){gx.fn.setControlValue("vDESCORGAOREGISTRO",gx.O.AV34DescOrgaoRegistro,0)},c2v:function(){gx.O.AV34DescOrgaoRegistro=this.val()},val:function(){return gx.fn.getControlValue("vDESCORGAOREGISTRO")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"JS", format:2,grid:0};
   GXValidFnc[83]={fld:"BTNHELP",grid:0};
   this.AV28TipoLivro = "" ;
   this.ZV28TipoLivro = "" ;
   this.OV28TipoLivro = "" ;
   this.AV35NumLivro = 0 ;
   this.ZV35NumLivro = 0 ;
   this.OV35NumLivro = 0 ;
   this.AV21DataInicial = gx.date.nullDate() ;
   this.ZV21DataInicial = gx.date.nullDate() ;
   this.OV21DataInicial = gx.date.nullDate() ;
   this.AV22DataFinal = gx.date.nullDate() ;
   this.ZV22DataFinal = gx.date.nullDate() ;
   this.OV22DataFinal = gx.date.nullDate() ;
   this.AV29DataTermoAbert = gx.date.nullDate() ;
   this.ZV29DataTermoAbert = gx.date.nullDate() ;
   this.OV29DataTermoAbert = gx.date.nullDate() ;
   this.AV30DataTermoEnc = gx.date.nullDate() ;
   this.ZV30DataTermoEnc = gx.date.nullDate() ;
   this.OV30DataTermoEnc = gx.date.nullDate() ;
   this.AV31QtdPaginas = 0 ;
   this.ZV31QtdPaginas = 0 ;
   this.OV31QtdPaginas = 0 ;
   this.AV32NumPortaria = 0 ;
   this.ZV32NumPortaria = 0 ;
   this.OV32NumPortaria = 0 ;
   this.AV33DataPortaria = gx.date.nullDate() ;
   this.ZV33DataPortaria = gx.date.nullDate() ;
   this.OV33DataPortaria = gx.date.nullDate() ;
   this.AV34DescOrgaoRegistro = "" ;
   this.ZV34DescOrgaoRegistro = "" ;
   this.OV34DescOrgaoRegistro = "" ;
   this.AV28TipoLivro = "" ;
   this.AV35NumLivro = 0 ;
   this.AV21DataInicial = gx.date.nullDate() ;
   this.AV22DataFinal = gx.date.nullDate() ;
   this.AV29DataTermoAbert = gx.date.nullDate() ;
   this.AV30DataTermoEnc = gx.date.nullDate() ;
   this.AV31QtdPaginas = 0 ;
   this.AV32NumPortaria = 0 ;
   this.AV33DataPortaria = gx.date.nullDate() ;
   this.AV34DescOrgaoRegistro = "" ;
   this.Events = {"e13442_client": ["ENTER", true] ,"e11442_client": ["'FECHAR'", true] ,"e15442_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV68Pgmdesc',fld:'vPGMDESC'},{av:'AV38QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV22DataFinal',fld:'vDATAFINAL'},{av:'AV21DataInicial',fld:'vDATAINICIAL'},{av:'AV33DataPortaria',fld:'vDATAPORTARIA'},{av:'AV32NumPortaria',fld:'vNUMPORTARIA'},{av:'AV31QtdPaginas',fld:'vQTDPAGINAS'},{av:'AV30DataTermoEnc',fld:'vDATATERMOENC'},{av:'AV29DataTermoAbert',fld:'vDATATERMOABERT'},{av:'AV35NumLivro',fld:'vNUMLIVRO'},{av:'AV28TipoLivro',fld:'vTIPOLIVRO'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV67Pgmname',fld:'vPGMNAME'},{av:'AV34DescOrgaoRegistro',fld:'vDESCORGAOREGISTRO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV13NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV38QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV22DataFinal',fld:'vDATAFINAL'},{av:'AV21DataInicial',fld:'vDATAINICIAL'},{av:'AV34DescOrgaoRegistro',fld:'vDESCORGAOREGISTRO'},{av:'AV33DataPortaria',fld:'vDATAPORTARIA'},{av:'AV32NumPortaria',fld:'vNUMPORTARIA'},{av:'AV31QtdPaginas',fld:'vQTDPAGINAS'},{av:'AV30DataTermoEnc',fld:'vDATATERMOENC'},{av:'AV29DataTermoAbert',fld:'vDATATERMOABERT'},{av:'AV35NumLivro',fld:'vNUMLIVRO'},{av:'AV28TipoLivro',fld:'vTIPOLIVRO'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV59Diretorio',fld:'vDIRETORIO'},{av:'AV39i',fld:'vI'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new htermoaberturaencerramento());
