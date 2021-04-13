/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:54:43.96
*/
gx.evt.autoSkip = false;
gx.define('hrelatoriomovimentacao', false, function () {
   this.ServerClass =  "hrelatoriomovimentacao" ;
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
   this.e113w2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133w2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153w2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,15,17,22,26,28,31,33,36,38,41,43,45,48,50,53,55,57,60,62,65,67,69,72,74,77,79,87,88,89];
   this.GXLastCtrlId =89;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK145454", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV10Ordenacao",gxold:"OV10Ordenacao",gxvar:"AV10Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10Ordenacao=Value},v2z:function(Value){gx.O.ZV10Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV10Ordenacao)},c2v:function(){gx.O.AV10Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV15PessoaId",gxold:"OV15PessoaId",gxvar:"AV15PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV15PessoaId,0)},c2v:function(){gx.O.AV15PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"ORDEREDTEXT1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACERVOID",gxz:"ZV18AcervoId",gxold:"OV18AcervoId",gxvar:"AV18AcervoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AcervoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AcervoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACERVOID",gx.O.AV18AcervoId,0)},c2v:function(){gx.O.AV18AcervoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACERVOID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[38]={fld:"TABLE8",grid:0};
   GXValidFnc[41]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEINICIAL",gxz:"ZV24DEInicial",gxold:"OV24DEInicial",gxvar:"AV24DEInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DEInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DEInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDEINICIAL",gx.O.AV24DEInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DEInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDEINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEFINAL",gxz:"ZV25DEFinal",gxold:"OV25DEFinal",gxvar:"AV25DEFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DEFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DEFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDEFINAL",gx.O.AV25DEFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DEFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDEFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[50]={fld:"TABLE9",grid:0};
   GXValidFnc[53]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDDINICIAL",gxz:"ZV26DDInicial",gxold:"OV26DDInicial",gxvar:"AV26DDInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DDInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DDInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDINICIAL",gx.O.AV26DDInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DDInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[55]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDDFINAL",gxz:"ZV27DDFinal",gxold:"OV27DDFinal",gxvar:"AV27DDFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DDFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DDFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDFINAL",gx.O.AV27DDFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27DDFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[60]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[62]={fld:"TABLE10",grid:0};
   GXValidFnc[65]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDPINICIAL",gxz:"ZV28DPInicial",gxold:"OV28DPInicial",gxvar:"AV28DPInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DPInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28DPInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDPINICIAL",gx.O.AV28DPInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28DPInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDPINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDPFINAL",gxz:"ZV29DPFinal",gxold:"OV29DPFinal",gxvar:"AV29DPFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DPFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29DPFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDPFINAL",gx.O.AV29DPFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29DPFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDPFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOITEMID",gxz:"ZV31TipoItemId",gxold:"OV31TipoItemId",gxvar:"AV31TipoItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV31TipoItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31TipoItemId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vTIPOITEMID",gx.O.AV31TipoItemId)},c2v:function(){gx.O.AV31TipoItemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOITEMID",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"ORDEREDTEXT2", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAOTIPO",gxz:"ZV21MovimentacaoTipo",gxold:"OV21MovimentacaoTipo",gxvar:"AV21MovimentacaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV21MovimentacaoTipo=Value},v2z:function(Value){gx.O.ZV21MovimentacaoTipo=Value},v2c:function(){gx.fn.setRadioValue("vMOVIMENTACAOTIPO",gx.O.AV21MovimentacaoTipo)},c2v:function(){gx.O.AV21MovimentacaoTipo=this.val()},val:function(){return gx.fn.getControlValue("vMOVIMENTACAOTIPO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"JS", format:2,grid:0};
   GXValidFnc[88]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[89]={fld:"PROMPT_ACERVOID",grid:0};
   this.AV10Ordenacao = "" ;
   this.ZV10Ordenacao = "" ;
   this.OV10Ordenacao = "" ;
   this.AV15PessoaId = 0 ;
   this.ZV15PessoaId = 0 ;
   this.OV15PessoaId = 0 ;
   this.AV18AcervoId = 0 ;
   this.ZV18AcervoId = 0 ;
   this.OV18AcervoId = 0 ;
   this.AV24DEInicial = gx.date.nullDate() ;
   this.ZV24DEInicial = gx.date.nullDate() ;
   this.OV24DEInicial = gx.date.nullDate() ;
   this.AV25DEFinal = gx.date.nullDate() ;
   this.ZV25DEFinal = gx.date.nullDate() ;
   this.OV25DEFinal = gx.date.nullDate() ;
   this.AV26DDInicial = gx.date.nullDate() ;
   this.ZV26DDInicial = gx.date.nullDate() ;
   this.OV26DDInicial = gx.date.nullDate() ;
   this.AV27DDFinal = gx.date.nullDate() ;
   this.ZV27DDFinal = gx.date.nullDate() ;
   this.OV27DDFinal = gx.date.nullDate() ;
   this.AV28DPInicial = gx.date.nullDate() ;
   this.ZV28DPInicial = gx.date.nullDate() ;
   this.OV28DPInicial = gx.date.nullDate() ;
   this.AV29DPFinal = gx.date.nullDate() ;
   this.ZV29DPFinal = gx.date.nullDate() ;
   this.OV29DPFinal = gx.date.nullDate() ;
   this.AV31TipoItemId = 0 ;
   this.ZV31TipoItemId = 0 ;
   this.OV31TipoItemId = 0 ;
   this.AV21MovimentacaoTipo = "" ;
   this.ZV21MovimentacaoTipo = "" ;
   this.OV21MovimentacaoTipo = "" ;
   this.AV10Ordenacao = "" ;
   this.AV15PessoaId = 0 ;
   this.AV18AcervoId = 0 ;
   this.AV24DEInicial = gx.date.nullDate() ;
   this.AV25DEFinal = gx.date.nullDate() ;
   this.AV26DDInicial = gx.date.nullDate() ;
   this.AV27DDFinal = gx.date.nullDate() ;
   this.AV28DPInicial = gx.date.nullDate() ;
   this.AV29DPFinal = gx.date.nullDate() ;
   this.AV31TipoItemId = 0 ;
   this.AV21MovimentacaoTipo = "" ;
   this.Events = {"e113w2_client": ["'FECHAR'", true] ,"e133w2_client": ["ENTER", true] ,"e153w2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV24DEInicial',fld:'vDEINICIAL'},{av:'AV25DEFinal',fld:'vDEFINAL'},{av:'AV26DDInicial',fld:'vDDINICIAL'},{av:'AV27DDFinal',fld:'vDDFINAL'},{av:'AV28DPInicial',fld:'vDPINICIAL'},{av:'AV29DPFinal',fld:'vDPFINAL'},{av:'AV21MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV18AcervoId',fld:'vACERVOID'},{av:'AV31TipoItemId',fld:'vTIPOITEMID'},{av:'AV66Pgmdesc',fld:'vPGMDESC'},{av:'AV67Qtdpaggeradas',fld:'vQTDPAGGERADAS'}],[{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV13NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV31TipoItemId',fld:'vTIPOITEMID'},{av:'AV29DPFinal',fld:'vDPFINAL'},{av:'AV28DPInicial',fld:'vDPINICIAL'},{av:'AV27DDFinal',fld:'vDDFINAL'},{av:'AV26DDInicial',fld:'vDDINICIAL'},{av:'AV25DEFinal',fld:'vDEFINAL'},{av:'AV24DEInicial',fld:'vDEINICIAL'},{av:'AV18AcervoId',fld:'vACERVOID'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV21MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'}]];
   this.setPrompt("PROMPT_PESSOAID", [28]);
   this.setPrompt("PROMPT_ACERVOID", [33]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelatoriomovimentacao());
