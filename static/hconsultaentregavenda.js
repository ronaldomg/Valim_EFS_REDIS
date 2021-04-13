/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:10:35.19
*/
gx.evt.autoSkip = false;
gx.define('hconsultaentregavenda', false, function () {
   this.ServerClass =  "hconsultaentregavenda" ;
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
   this.e112ca2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132ca2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152ca2_client=function()
   {
      this.executeServerEvent("'PROMPTSAIDA'", true, null, false, false);
   };
   this.e162ca2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,13,14];
   this.GXLastCtrlId =14;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV6SaidaNoDocumento",gxold:"OV6SaidaNoDocumento",gxvar:"AV6SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6SaidaNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6SaidaNoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV6SaidaNoDocumento,0)},c2v:function(){gx.O.AV6SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV11PessoaId",gxold:"OV11PessoaId",gxvar:"AV11PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV11PessoaId,0)},c2v:function(){gx.O.AV11PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[12]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV10Tipo",gxold:"OV10Tipo",gxvar:"AV10Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10Tipo=Value},v2z:function(Value){gx.O.ZV10Tipo=Value},v2c:function(){gx.fn.setControlValue("vTIPO",gx.O.AV10Tipo,0)},c2v:function(){gx.O.AV10Tipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPO")},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAID",gxz:"ZV5SaidaId",gxold:"OV5SaidaId",gxvar:"AV5SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAID",gx.O.AV5SaidaId,0)},c2v:function(){gx.O.AV5SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"PROMPTSAIDA",grid:0};
   this.AV6SaidaNoDocumento = 0 ;
   this.ZV6SaidaNoDocumento = 0 ;
   this.OV6SaidaNoDocumento = 0 ;
   this.AV11PessoaId = 0 ;
   this.ZV11PessoaId = 0 ;
   this.OV11PessoaId = 0 ;
   this.AV10Tipo = "" ;
   this.ZV10Tipo = "" ;
   this.OV10Tipo = "" ;
   this.AV5SaidaId = 0 ;
   this.ZV5SaidaId = 0 ;
   this.OV5SaidaId = 0 ;
   this.AV6SaidaNoDocumento = 0 ;
   this.AV11PessoaId = 0 ;
   this.AV10Tipo = "" ;
   this.AV5SaidaId = 0 ;
   this.A4308SaidaTipo = "" ;
   this.A5960SaidaNoDocumento = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A5978SaidaTipoEntrega = "" ;
   this.Events = {"e112ca2_client": ["'FECHAR'", true] ,"e132ca2_client": ["ENTER", true] ,"e152ca2_client": ["'PROMPTSAIDA'", true] ,"e162ca2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV6SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV19Udparg1',fld:'vUDPARG1'},{av:'A5960SaidaNoDocumento',fld:'SAIDANODOCUMENTO'},{av:'A4308SaidaTipo',fld:'SAIDATIPO'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'A5978SaidaTipoEntrega',fld:'SAIDATIPOENTREGA'},{av:'AV5SaidaId',fld:'vSAIDAID'},{av:'AV15SaidaTipoEntrega',fld:'vSAIDATIPOENTREGA'}],[{av:'AV12isErro',fld:'vISERRO'},{av:'AV18GXLvl25',fld:'vGXLVL25'},{av:'AV5SaidaId',fld:'vSAIDAID'},{av:'AV15SaidaTipoEntrega',fld:'vSAIDATIPOENTREGA'}]];
   this.EvtParms["'PROMPTSAIDA'"] = [[{av:'AV10Tipo',fld:'vTIPO'},{av:'AV11PessoaId',fld:'vPESSOAID'}],[{av:'AV6SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV9SaidaSerie',fld:'vSAIDASERIE'},{av:'AV7CooOut',fld:'vCOOOUT'},{av:'AV8ECFOut',fld:'vECFOUT'},{av:'AV5SaidaId',fld:'vSAIDAID'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaentregavenda());
