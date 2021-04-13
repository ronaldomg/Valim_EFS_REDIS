/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:24.30
*/
gx.evt.autoSkip = false;
gx.define('hcarteirinha', false, function () {
   this.ServerClass =  "hcarteirinha" ;
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
   this.e110l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130l2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150l2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,22,24,25,28,30,33,35,37,40,42,45,47,49,57,58,60];
   this.GXLastCtrlId =60;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV10Ordenacao",gxold:"OV10Ordenacao",gxvar:"AV10Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10Ordenacao=Value},v2z:function(Value){gx.O.ZV10Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV10Ordenacao)},c2v:function(){gx.O.AV10Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV16PessoaId",gxold:"OV16PessoaId",gxvar:"AV16PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV16PessoaId,0)},c2v:function(){gx.O.AV16PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV37PessoaFantasia",gxold:"OV37PessoaFantasia",gxvar:"AV37PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37PessoaFantasia=Value},v2z:function(Value){gx.O.ZV37PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV37PessoaFantasia,0)},c2v:function(){gx.O.AV37PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLERANGECADASTRO",grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATACADINI",gxz:"ZV12DataCadIni",gxold:"OV12DataCadIni",gxvar:"AV12DataCadIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12DataCadIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12DataCadIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATACADINI",gx.O.AV12DataCadIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12DataCadIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATACADINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={fld:"A4", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATACADFIM",gxz:"ZV13DataCadFim",gxold:"OV13DataCadFim",gxvar:"AV13DataCadFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13DataCadFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV13DataCadFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATACADFIM",gx.O.AV13DataCadFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13DataCadFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATACADFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLERANGENASCIMENTO",grid:0};
   GXValidFnc[45]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATANASCINI",gxz:"ZV14DataNascIni",gxold:"OV14DataNascIni",gxvar:"AV14DataNascIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DataNascIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14DataNascIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATANASCINI",gx.O.AV14DataNascIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14DataNascIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATANASCINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[47]={fld:"A5", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATANASCFIM",gxz:"ZV15DataNascFim",gxold:"OV15DataNascFim",gxvar:"AV15DataNascFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DataNascFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15DataNascFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATANASCFIM",gx.O.AV15DataNascFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15DataNascFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATANASCFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[57]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"JS", format:2,grid:0};
   GXValidFnc[60]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV10Ordenacao = "" ;
   this.ZV10Ordenacao = "" ;
   this.OV10Ordenacao = "" ;
   this.AV16PessoaId = 0 ;
   this.ZV16PessoaId = 0 ;
   this.OV16PessoaId = 0 ;
   this.AV37PessoaFantasia = "" ;
   this.ZV37PessoaFantasia = "" ;
   this.OV37PessoaFantasia = "" ;
   this.AV12DataCadIni = gx.date.nullDate() ;
   this.ZV12DataCadIni = gx.date.nullDate() ;
   this.OV12DataCadIni = gx.date.nullDate() ;
   this.AV13DataCadFim = gx.date.nullDate() ;
   this.ZV13DataCadFim = gx.date.nullDate() ;
   this.OV13DataCadFim = gx.date.nullDate() ;
   this.AV14DataNascIni = gx.date.nullDate() ;
   this.ZV14DataNascIni = gx.date.nullDate() ;
   this.OV14DataNascIni = gx.date.nullDate() ;
   this.AV15DataNascFim = gx.date.nullDate() ;
   this.ZV15DataNascFim = gx.date.nullDate() ;
   this.OV15DataNascFim = gx.date.nullDate() ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV10Ordenacao = "" ;
   this.AV16PessoaId = 0 ;
   this.AV37PessoaFantasia = "" ;
   this.AV12DataCadIni = gx.date.nullDate() ;
   this.AV13DataCadFim = gx.date.nullDate() ;
   this.AV14DataNascIni = gx.date.nullDate() ;
   this.AV15DataNascFim = gx.date.nullDate() ;
   this.AV9EmpresaPadrao = "" ;
   this.Events = {"e110l2_client": ["'FECHAR'", true] ,"e130l2_client": ["ENTER", true] ,"e150l2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13DataCadFim',fld:'vDATACADFIM'},{av:'AV12DataCadIni',fld:'vDATACADINI'},{av:'AV15DataNascFim',fld:'vDATANASCFIM'},{av:'AV14DataNascIni',fld:'vDATANASCINI'},{av:'AV66Pgmname',fld:'vPGMNAME'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV16PessoaId',fld:'vPESSOAID'},{av:'AV67Pgmdesc',fld:'vPGMDESC'}],[{av:'AV13DataCadFim',fld:'vDATACADFIM'},{av:'AV12DataCadIni',fld:'vDATACADINI'},{av:'AV15DataNascFim',fld:'vDATANASCFIM'},{av:'AV14DataNascIni',fld:'vDATANASCINI'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV41QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV16PessoaId',fld:'vPESSOAID'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}]];
   this.setPrompt("PROMPT_PESSOAID", [24]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcarteirinha());
