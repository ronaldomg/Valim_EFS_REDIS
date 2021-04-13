/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:9:28.28
*/
gx.evt.autoSkip = false;
gx.define('hfechamentomes', false, function () {
   this.ServerClass =  "hfechamentomes" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e122bu2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132bu2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142bu2_client=function()
   {
      this.executeServerEvent("VTIPOSISTEMA.CLICK", true, null, false, true);
   };
   this.e172bu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,27,28,30];
   this.GXLastCtrlId =30;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TAB1",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSISTEMA",gxz:"ZV6TipoSistema",gxold:"OV6TipoSistema",gxvar:"AV6TipoSistema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV6TipoSistema=Value},v2z:function(Value){gx.O.ZV6TipoSistema=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOSISTEMA",gx.O.AV6TipoSistema)},c2v:function(){gx.O.AV6TipoSistema=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSISTEMA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFECHAMENTO",gxz:"ZV7DataFechamento",gxold:"OV7DataFechamento",gxvar:"AV7DataFechamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DataFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7DataFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFECHAMENTO",gx.O.AV7DataFechamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7DataFechamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFECHAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 18 , function() {
   });
   GXValidFnc[27]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV5AcessoSistemaSequencia",gxold:"OV5AcessoSistemaSequencia",gxvar:"AV5AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV5AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[30]={fld:"BTNHELP",grid:0};
   this.AV6TipoSistema = "" ;
   this.ZV6TipoSistema = "" ;
   this.OV6TipoSistema = "" ;
   this.AV7DataFechamento = gx.date.nullDate() ;
   this.ZV7DataFechamento = gx.date.nullDate() ;
   this.OV7DataFechamento = gx.date.nullDate() ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.ZV5AcessoSistemaSequencia = 0 ;
   this.OV5AcessoSistemaSequencia = 0 ;
   this.AV6TipoSistema = "" ;
   this.AV7DataFechamento = gx.date.nullDate() ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.A138EmpresaId = "" ;
   this.A140SistemaId = "" ;
   this.Events = {"e122bu2_client": ["'FECHAR'", true] ,"e132bu2_client": ["ENTER", true] ,"e142bu2_client": ["VTIPOSISTEMA.CLICK", true] ,"e172bu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A140SistemaId',fld:'SISTEMAID'}],[{av:'AV6TipoSistema',fld:'vTIPOSISTEMA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV6TipoSistema',fld:'vTIPOSISTEMA'},{av:'AV7DataFechamento',fld:'vDATAFECHAMENTO'},{av:'AV9EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV16DataStr',fld:'vDATASTR'},{av:'AV6TipoSistema',fld:'vTIPOSISTEMA'},{av:'AV7DataFechamento',fld:'vDATAFECHAMENTO'}]];
   this.EvtParms["VTIPOSISTEMA.CLICK"] = [[{av:'AV6TipoSistema',fld:'vTIPOSISTEMA'}],[{av:'AV7DataFechamento',fld:'vDATAFECHAMENTO'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("A138EmpresaId", "EMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfechamentomes());
