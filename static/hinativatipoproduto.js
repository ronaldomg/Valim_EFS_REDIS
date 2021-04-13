/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:20:21.50
*/
gx.evt.autoSkip = false;
gx.define('hinativatipoproduto', false, function () {
   this.ServerClass =  "hinativatipoproduto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Fabricanteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFABRICANTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112h22_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132h22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142h22_client=function()
   {
      this.executeServerEvent("VFABRICANTEID.ISVALID", true, null, false, true);
   };
   this.e162h22_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,17,19,22,24,27,29,34,37,40,42,45,47,49,52,54,55,59,68,69,70,71,73,74];
   this.GXLastCtrlId =74;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TAB1",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTLAYOUT", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE1",grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOEXECUCAO",gxz:"ZV18TipoExecucao",gxold:"OV18TipoExecucao",gxvar:"AV18TipoExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18TipoExecucao=Value},v2z:function(Value){gx.O.ZV18TipoExecucao=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOEXECUCAO",gx.O.AV18TipoExecucao)},c2v:function(){gx.O.AV18TipoExecucao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOEXECUCAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPOATIVO",gxz:"ZV21ProdutoTipoAtivo",gxold:"OV21ProdutoTipoAtivo",gxvar:"AV21ProdutoTipoAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ProdutoTipoAtivo=Value},v2z:function(Value){gx.O.ZV21ProdutoTipoAtivo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOTIPOATIVO",gx.O.AV21ProdutoTipoAtivo,0)},c2v:function(){gx.O.AV21ProdutoTipoAtivo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPOATIVO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPOINATIVO",gxz:"ZV22ProdutoTipoInativo",gxold:"OV22ProdutoTipoInativo",gxvar:"AV22ProdutoTipoInativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ProdutoTipoInativo=Value},v2z:function(Value){gx.O.ZV22ProdutoTipoInativo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOTIPOINATIVO",gx.O.AV22ProdutoTipoInativo,0)},c2v:function(){gx.O.AV22ProdutoTipoInativo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPOINATIVO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TXTSELECAO", format:0,grid:0};
   GXValidFnc[37]={fld:"TABLE4",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLE3",grid:0};
   GXValidFnc[45]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV7DataInicial",gxold:"OV7DataInicial",gxvar:"AV7DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV7DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV6DataFinal",gxold:"OV6DataFinal",gxvar:"AV6DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV6DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fabricanteid,isvalid:'e142h22_client',rgrid:[],fld:"vFABRICANTEID",gxz:"ZV24FabricanteId",gxold:"OV24FabricanteId",gxvar:"AV24FabricanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FabricanteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24FabricanteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEID",gx.O.AV24FabricanteId,0)},c2v:function(){gx.O.AV24FabricanteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEID",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTENOME",gxz:"ZV25FabricanteNome",gxold:"OV25FabricanteNome",gxvar:"AV25FabricanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25FabricanteNome=Value},v2z:function(Value){gx.O.ZV25FabricanteNome=Value},v2c:function(){gx.fn.setControlValue("vFABRICANTENOME",gx.O.AV25FabricanteNome,0)},c2v:function(){gx.O.AV25FabricanteNome=this.val()},val:function(){return gx.fn.getControlValue("vFABRICANTENOME")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISDESPREZARATIVOMANUAL",gxz:"ZV23isDesprezarAtivoManual",gxold:"OV23isDesprezarAtivoManual",gxvar:"AV23isDesprezarAtivoManual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23isDesprezarAtivoManual=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV23isDesprezarAtivoManual=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISDESPREZARATIVOMANUAL",gx.O.AV23isDesprezarAtivoManual,true)},c2v:function(){gx.O.AV23isDesprezarAtivoManual=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISDESPREZARATIVOMANUAL")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[68]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV5AcessoSistemaSequencia",gxold:"OV5AcessoSistemaSequencia",gxvar:"AV5AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV5AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV26Sim",gxold:"OV26Sim",gxvar:"AV26Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Sim=Value},v2z:function(Value){gx.O.ZV26Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV26Sim,0)},c2v:function(){gx.O.AV26Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV27Nao",gxold:"OV27Nao",gxvar:"AV27Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Nao=Value},v2z:function(Value){gx.O.ZV27Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV27Nao,0)},c2v:function(){gx.O.AV27Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"BTNHELP",grid:0};
   GXValidFnc[74]={fld:"PROMPT_FABRICANTEID",grid:0};
   this.AV18TipoExecucao = "" ;
   this.ZV18TipoExecucao = "" ;
   this.OV18TipoExecucao = "" ;
   this.AV21ProdutoTipoAtivo = "" ;
   this.ZV21ProdutoTipoAtivo = "" ;
   this.OV21ProdutoTipoAtivo = "" ;
   this.AV22ProdutoTipoInativo = "" ;
   this.ZV22ProdutoTipoInativo = "" ;
   this.OV22ProdutoTipoInativo = "" ;
   this.AV7DataInicial = gx.date.nullDate() ;
   this.ZV7DataInicial = gx.date.nullDate() ;
   this.OV7DataInicial = gx.date.nullDate() ;
   this.AV6DataFinal = gx.date.nullDate() ;
   this.ZV6DataFinal = gx.date.nullDate() ;
   this.OV6DataFinal = gx.date.nullDate() ;
   this.AV24FabricanteId = 0 ;
   this.ZV24FabricanteId = 0 ;
   this.OV24FabricanteId = 0 ;
   this.AV25FabricanteNome = "" ;
   this.ZV25FabricanteNome = "" ;
   this.OV25FabricanteNome = "" ;
   this.AV23isDesprezarAtivoManual = false ;
   this.ZV23isDesprezarAtivoManual = false ;
   this.OV23isDesprezarAtivoManual = false ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.ZV5AcessoSistemaSequencia = 0 ;
   this.OV5AcessoSistemaSequencia = 0 ;
   this.AV26Sim = "" ;
   this.ZV26Sim = "" ;
   this.OV26Sim = "" ;
   this.AV27Nao = "" ;
   this.ZV27Nao = "" ;
   this.OV27Nao = "" ;
   this.AV18TipoExecucao = "" ;
   this.AV21ProdutoTipoAtivo = "" ;
   this.AV22ProdutoTipoInativo = "" ;
   this.AV7DataInicial = gx.date.nullDate() ;
   this.AV6DataFinal = gx.date.nullDate() ;
   this.AV24FabricanteId = 0 ;
   this.AV25FabricanteNome = "" ;
   this.AV23isDesprezarAtivoManual = false ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.AV26Sim = "" ;
   this.AV27Nao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A449PessoaFabricante = "" ;
   this.Events = {"e112h22_client": ["'FECHAR'", true] ,"e132h22_client": ["ENTER", true] ,"e142h22_client": ["VFABRICANTEID.ISVALID", true] ,"e162h22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV5AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10hasErro',fld:'vHASERRO'},{av:'AV31Pgmname',fld:'vPGMNAME'},{av:'AV7DataInicial',fld:'vDATAINICIAL'},{av:'AV6DataFinal',fld:'vDATAFINAL'},{av:'AV18TipoExecucao',fld:'vTIPOEXECUCAO'},{av:'AV23isDesprezarAtivoManual',fld:'vISDESPREZARATIVOMANUAL'},{av:'AV21ProdutoTipoAtivo',fld:'vPRODUTOTIPOATIVO'},{av:'AV22ProdutoTipoInativo',fld:'vPRODUTOTIPOINATIVO'},{av:'AV24FabricanteId',fld:'vFABRICANTEID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV28PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A449PessoaFabricante',fld:'PESSOAFABRICANTE'}],[{av:'AV14NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV13NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV15QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV10hasErro',fld:'vHASERRO'},{av:'AV6DataFinal',fld:'vDATAFINAL'},{av:'AV7DataInicial',fld:'vDATAINICIAL'},{av:'AV33GXLvl120',fld:'vGXLVL120'},{av:'AV25FabricanteNome',fld:'vFABRICANTENOME'}]];
   this.EvtParms["VFABRICANTEID.ISVALID"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV28PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV24FabricanteId',fld:'vFABRICANTEID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'}],[{av:'AV25FabricanteNome',fld:'vFABRICANTENOME'}]];
   this.setPrompt("PROMPT_FABRICANTEID", [54]);
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hinativatipoproduto());
