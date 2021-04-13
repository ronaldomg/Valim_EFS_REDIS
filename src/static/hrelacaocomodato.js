/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:32:59.6
*/
gx.evt.autoSkip = false;
gx.define('hrelacaocomodato', false, function () {
   this.ServerClass =  "hrelacaocomodato" ;
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
      this.AV25PessoaEmpresaId=gx.fn.getControlValue("vPESSOAEMPRESAID") ;
   };
   this.e1112b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1312b2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1512b2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,16,18,23,27,29,32,34,36,39,41,44,46,55,57];
   this.GXLastCtrlId =57;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE8",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV23TipoRelatorio",gxold:"OV23TipoRelatorio",gxvar:"AV23TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23TipoRelatorio=Value},v2z:function(Value){gx.O.ZV23TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV23TipoRelatorio)},c2v:function(){gx.O.AV23TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[29]={fld:"TABLERPERIODO",grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV26DataInicial",gxold:"OV26DataInicial",gxvar:"AV26DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV26DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV27DataFinal",gxold:"OV27DataFinal",gxvar:"AV27DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV27DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV21PessoaId",gxold:"OV21PessoaId",gxvar:"AV21PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV21PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPESSOAID",gx.O.AV21PessoaId)},c2v:function(){gx.O.AV21PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATIPOCOMODATO",gxz:"ZV22PessoaTipoComodato",gxold:"OV22PessoaTipoComodato",gxvar:"AV22PessoaTipoComodato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22PessoaTipoComodato=Value},v2z:function(Value){gx.O.ZV22PessoaTipoComodato=Value},v2c:function(){gx.fn.setComboBoxValue("vPESSOATIPOCOMODATO",gx.O.AV22PessoaTipoComodato)},c2v:function(){gx.O.AV22PessoaTipoComodato=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATIPOCOMODATO")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"JS", format:2,grid:0};
   GXValidFnc[57]={fld:"BTNHELP",grid:0};
   this.AV23TipoRelatorio = "" ;
   this.ZV23TipoRelatorio = "" ;
   this.OV23TipoRelatorio = "" ;
   this.AV26DataInicial = gx.date.nullDate() ;
   this.ZV26DataInicial = gx.date.nullDate() ;
   this.OV26DataInicial = gx.date.nullDate() ;
   this.AV27DataFinal = gx.date.nullDate() ;
   this.ZV27DataFinal = gx.date.nullDate() ;
   this.OV27DataFinal = gx.date.nullDate() ;
   this.AV21PessoaId = 0 ;
   this.ZV21PessoaId = 0 ;
   this.OV21PessoaId = 0 ;
   this.AV22PessoaTipoComodato = "" ;
   this.ZV22PessoaTipoComodato = "" ;
   this.OV22PessoaTipoComodato = "" ;
   this.AV23TipoRelatorio = "" ;
   this.AV26DataInicial = gx.date.nullDate() ;
   this.AV27DataFinal = gx.date.nullDate() ;
   this.AV21PessoaId = 0 ;
   this.AV22PessoaTipoComodato = "" ;
   this.Events = {"e1112b2_client": ["'FECHAR'", true] ,"e1312b2_client": ["ENTER", true] ,"e1512b2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV23TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV26DataInicial',fld:'vDATAINICIAL'},{av:'AV27DataFinal',fld:'vDATAFINAL'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV21PessoaId',fld:'vPESSOAID'},{av:'AV22PessoaTipoComodato',fld:'vPESSOATIPOCOMODATO'},{av:'AV33Pgmdesc',fld:'vPGMDESC'}],[{av:'AV24SnErro',fld:'vSNERRO'},{av:'AV27DataFinal',fld:'vDATAFINAL'},{av:'AV26DataInicial',fld:'vDATAINICIAL'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV29Orientacao',fld:'vORIENTACAO'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV25PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaocomodato());
