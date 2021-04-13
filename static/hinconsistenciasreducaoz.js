/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:37:9.16
*/
gx.evt.autoSkip = false;
gx.define('hinconsistenciasreducaoz', false, function () {
   this.ServerClass =  "hinconsistenciasreducaoz" ;
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
   this.s132_client=function()
   {
      this.AV29SNConsisteTela =  "S"  ;
      if ( (new gx.date.gxdate("").compare(this.AV23DataInicial)==0) && this.AV29SNConsisteTela == "S" )
      {
         this.addMessage("Informe a data Inicial");
         this.AV29SNConsisteTela =  "N"  ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV23DataInicial)==0) && (new gx.date.gxdate("").compare(this.AV24DataFinal)==0) && this.AV29SNConsisteTela == "S" )
      {
         this.AV24DataFinal =  this.AV23DataInicial  ;
      }
      if ( new gx.date.gxdate( this.AV23DataInicial ).compare( this.AV24DataFinal ) > 0 && this.AV29SNConsisteTela == "S" )
      {
         this.addMessage("Data inicial maior que final");
         this.AV29SNConsisteTela =  "N"  ;
      }
      if ( this.AV20SNTotalizadoReducao == "N" && this.AV25SNTotalizadoAliquota == "N" && this.AV29SNConsisteTela == "S" )
      {
         this.addMessage("Preencha ao menos um tipo de impressão");
         this.AV29SNConsisteTela =  "N"  ;
      }
   };
   this.e111el2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141el2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161el2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,24,26,29,31,33,38,41,44,53,55];
   this.GXLastCtrlId =55;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TABLE3",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDALOJAAUX",gxz:"ZV32SaidaLojaAux",gxold:"OV32SaidaLojaAux",gxvar:"AV32SaidaLojaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32SaidaLojaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32SaidaLojaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDALOJAAUX",gx.O.AV32SaidaLojaAux,0)},c2v:function(){gx.O.AV32SaidaLojaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDALOJAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAECF",gxz:"ZV35SaidaECF",gxold:"OV35SaidaECF",gxvar:"AV35SaidaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35SaidaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35SaidaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAECF",gx.O.AV35SaidaECF,0)},c2v:function(){gx.O.AV35SaidaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAECF",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLERDATA",grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV23DataInicial",gxold:"OV23DataInicial",gxvar:"AV23DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV23DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[31]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV24DataFinal",gxold:"OV24DataFinal",gxvar:"AV24DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV24DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTOTALIZADOREDUCAO",gxz:"ZV20SNTotalizadoReducao",gxold:"OV20SNTotalizadoReducao",gxvar:"AV20SNTotalizadoReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20SNTotalizadoReducao=Value},v2z:function(Value){gx.O.ZV20SNTotalizadoReducao=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNTOTALIZADOREDUCAO",gx.O.AV20SNTotalizadoReducao,"S")},c2v:function(){gx.O.AV20SNTotalizadoReducao=this.val()},val:function(){return gx.fn.getControlValue("vSNTOTALIZADOREDUCAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTOTALIZADOALIQUOTA",gxz:"ZV25SNTotalizadoAliquota",gxold:"OV25SNTotalizadoAliquota",gxvar:"AV25SNTotalizadoAliquota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25SNTotalizadoAliquota=Value},v2z:function(Value){gx.O.ZV25SNTotalizadoAliquota=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNTOTALIZADOALIQUOTA",gx.O.AV25SNTotalizadoAliquota,"S")},c2v:function(){gx.O.AV25SNTotalizadoAliquota=this.val()},val:function(){return gx.fn.getControlValue("vSNTOTALIZADOALIQUOTA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[53]={fld:"JS", format:2,grid:0};
   GXValidFnc[55]={fld:"BTNHELP",grid:0};
   this.AV32SaidaLojaAux = 0 ;
   this.ZV32SaidaLojaAux = 0 ;
   this.OV32SaidaLojaAux = 0 ;
   this.AV35SaidaECF = 0 ;
   this.ZV35SaidaECF = 0 ;
   this.OV35SaidaECF = 0 ;
   this.AV23DataInicial = gx.date.nullDate() ;
   this.ZV23DataInicial = gx.date.nullDate() ;
   this.OV23DataInicial = gx.date.nullDate() ;
   this.AV24DataFinal = gx.date.nullDate() ;
   this.ZV24DataFinal = gx.date.nullDate() ;
   this.OV24DataFinal = gx.date.nullDate() ;
   this.AV20SNTotalizadoReducao = "" ;
   this.ZV20SNTotalizadoReducao = "" ;
   this.OV20SNTotalizadoReducao = "" ;
   this.AV25SNTotalizadoAliquota = "" ;
   this.ZV25SNTotalizadoAliquota = "" ;
   this.OV25SNTotalizadoAliquota = "" ;
   this.AV32SaidaLojaAux = 0 ;
   this.AV35SaidaECF = 0 ;
   this.AV23DataInicial = gx.date.nullDate() ;
   this.AV24DataFinal = gx.date.nullDate() ;
   this.AV20SNTotalizadoReducao = "" ;
   this.AV25SNTotalizadoAliquota = "" ;
   this.AV29SNConsisteTela = "" ;
   this.Events = {"e111el2_client": ["'FECHAR'", true] ,"e141el2_client": ["ENTER", true] ,"e161el2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV32SaidaLojaAux',fld:'vSAIDALOJAAUX'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV35SaidaECF',fld:'vSAIDAECF'},{av:'AV23DataInicial',fld:'vDATAINICIAL'},{av:'AV24DataFinal',fld:'vDATAFINAL'},{av:'AV39Pgmdesc',fld:'vPGMDESC'}],[{av:'AV31SaidaLoja',fld:'vSAIDALOJA'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV24DataFinal',fld:'vDATAFINAL'},{av:'AV23DataInicial',fld:'vDATAINICIAL'},{av:'AV35SaidaECF',fld:'vSAIDAECF'},{av:'AV40Orientacao',fld:'vORIENTACAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV32SaidaLojaAux',fld:'vSAIDALOJAAUX'},{av:'AV29SNConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV20SNTotalizadoReducao',fld:'vSNTOTALIZADOREDUCAO'},{av:'AV25SNTotalizadoAliquota',fld:'vSNTOTALIZADOALIQUOTA'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV35SaidaECF',fld:'vSAIDAECF'},{av:'AV23DataInicial',fld:'vDATAINICIAL'},{av:'AV24DataFinal',fld:'vDATAFINAL'},{av:'AV39Pgmdesc',fld:'vPGMDESC'}],[{av:'AV31SaidaLoja',fld:'vSAIDALOJA'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV24DataFinal',fld:'vDATAFINAL'},{av:'AV23DataInicial',fld:'vDATAINICIAL'},{av:'AV35SaidaECF',fld:'vSAIDAECF'},{av:'AV40Orientacao',fld:'vORIENTACAO'},{av:'AV29SNConsisteTela',fld:'vSNCONSISTETELA'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hinconsistenciasreducaoz());
