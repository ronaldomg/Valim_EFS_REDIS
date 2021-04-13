/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:59.1
*/
gx.evt.autoSkip = false;
gx.define('hexcluirlogs', false, function () {
   this.ServerClass =  "hexcluirlogs" ;
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
   this.e11kp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13kp2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15kp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,23,26,28,29,32,34,35,41,47,49,50,51];
   this.GXLastCtrlId =51;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={fld:"TABLE10",grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV20DataInicial",gxold:"OV20DataInicial",gxvar:"AV20DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV20DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV21DataFinal",gxold:"OV21DataFinal",gxvar:"AV21DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV21DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV22UsuarioId",gxold:"OV22UsuarioId",gxvar:"AV22UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22UsuarioId=Value},v2z:function(Value){gx.O.ZV22UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV22UsuarioId,0)},c2v:function(){gx.O.AV22UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV23UsuarioNome",gxold:"OV23UsuarioNome",gxvar:"AV23UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23UsuarioNome=Value},v2z:function(Value){gx.O.ZV23UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV23UsuarioNome,0)},c2v:function(){gx.O.AV23UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESANOME",gxz:"ZV31EmpresaNome",gxold:"OV31EmpresaNome",gxvar:"AV31EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EmpresaNome=Value},v2z:function(Value){gx.O.ZV31EmpresaNome=Value},v2c:function(){gx.fn.setControlValue("vEMPRESANOME",gx.O.AV31EmpresaNome,0)},c2v:function(){gx.O.AV31EmpresaNome=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESANOME")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"JS", format:2,grid:0};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   GXValidFnc[50]={fld:"PROMPT_USUARIOID",grid:0};
   GXValidFnc[51]={fld:"PROMPT_EMPRESAPADRAO",grid:0};
   this.AV20DataInicial = gx.date.nullDate() ;
   this.ZV20DataInicial = gx.date.nullDate() ;
   this.OV20DataInicial = gx.date.nullDate() ;
   this.AV21DataFinal = gx.date.nullDate() ;
   this.ZV21DataFinal = gx.date.nullDate() ;
   this.OV21DataFinal = gx.date.nullDate() ;
   this.AV22UsuarioId = "" ;
   this.ZV22UsuarioId = "" ;
   this.OV22UsuarioId = "" ;
   this.AV23UsuarioNome = "" ;
   this.ZV23UsuarioNome = "" ;
   this.OV23UsuarioNome = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV31EmpresaNome = "" ;
   this.ZV31EmpresaNome = "" ;
   this.OV31EmpresaNome = "" ;
   this.AV20DataInicial = gx.date.nullDate() ;
   this.AV21DataFinal = gx.date.nullDate() ;
   this.AV22UsuarioId = "" ;
   this.AV23UsuarioNome = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.AV31EmpresaNome = "" ;
   this.A138EmpresaId = "" ;
   this.A186EmpresaNome = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.Events = {"e11kp2_client": ["'FECHAR'", true] ,"e13kp2_client": ["ENTER", true] ,"e15kp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20DataInicial',fld:'vDATAINICIAL'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV22UsuarioId',fld:'vUSUARIOID'},{av:'AV29LogTabelaNome',fld:'vLOGTABELANOME'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A186EmpresaNome',fld:'EMPRESANOME'},{av:'AV30LogTabelaUsuario',fld:'vLOGTABELAUSUARIO'}],[{av:'AV28Retorno',fld:'vRETORNO'},{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV40GXLvl49',fld:'vGXLVL49'},{av:'AV23UsuarioNome',fld:'vUSUARIONOME'},{av:'AV30LogTabelaUsuario',fld:'vLOGTABELAUSUARIO'},{av:'AV41GXLvl62',fld:'vGXLVL62'},{av:'AV31EmpresaNome',fld:'vEMPRESANOME'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21DataFinal',fld:'vDATAFINAL'},{av:'AV20DataInicial',fld:'vDATAINICIAL'}]];
   this.setPrompt("PROMPT_USUARIOID", [28]);
   this.setPrompt("PROMPT_EMPRESAPADRAO", [34]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexcluirlogs());
