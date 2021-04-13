/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:56:13.4
*/
gx.evt.autoSkip = false;
gx.define('haberturames', false, function () {
   this.ServerClass =  "haberturames" ;
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
   this.e116c2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136c2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e166c2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,41,43];
   this.GXLastCtrlId =43;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE5",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESABERTURA",gxz:"ZV16MesAbertura",gxold:"OV16MesAbertura",gxvar:"AV16MesAbertura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16MesAbertura=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16MesAbertura=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESABERTURA",gx.O.AV16MesAbertura,0)},c2v:function(){gx.O.AV16MesAbertura=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESABERTURA",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"BARRA", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOABERTURA",gxz:"ZV18AnoAbertura",gxold:"OV18AnoAbertura",gxvar:"AV18AnoAbertura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AnoAbertura=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AnoAbertura=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOABERTURA",gx.O.AV18AnoAbertura,0)},c2v:function(){gx.O.AV18AnoAbertura=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOABERTURA",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE6",grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFECHAMENTO",gxz:"ZV17MesFechamento",gxold:"OV17MesFechamento",gxvar:"AV17MesFechamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17MesFechamento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17MesFechamento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFECHAMENTO",gx.O.AV17MesFechamento,0)},c2v:function(){gx.O.AV17MesFechamento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFECHAMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"BARRA2", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFECHAMENTO",gxz:"ZV19AnoFechamento",gxold:"OV19AnoFechamento",gxvar:"AV19AnoFechamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AnoFechamento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AnoFechamento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOFECHAMENTO",gx.O.AV19AnoFechamento,0)},c2v:function(){gx.O.AV19AnoFechamento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOFECHAMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV31AcessoSistemaSequencia",gxold:"OV31AcessoSistemaSequencia",gxvar:"AV31AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV31AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV31AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"BTNHELP",grid:0};
   this.AV16MesAbertura = 0 ;
   this.ZV16MesAbertura = 0 ;
   this.OV16MesAbertura = 0 ;
   this.AV18AnoAbertura = 0 ;
   this.ZV18AnoAbertura = 0 ;
   this.OV18AnoAbertura = 0 ;
   this.AV17MesFechamento = 0 ;
   this.ZV17MesFechamento = 0 ;
   this.OV17MesFechamento = 0 ;
   this.AV19AnoFechamento = 0 ;
   this.ZV19AnoFechamento = 0 ;
   this.OV19AnoFechamento = 0 ;
   this.AV31AcessoSistemaSequencia = 0 ;
   this.ZV31AcessoSistemaSequencia = 0 ;
   this.OV31AcessoSistemaSequencia = 0 ;
   this.AV16MesAbertura = 0 ;
   this.AV18AnoAbertura = 0 ;
   this.AV17MesFechamento = 0 ;
   this.AV19AnoFechamento = 0 ;
   this.AV31AcessoSistemaSequencia = 0 ;
   this.Events = {"e116c2_client": ["'FECHAR'", true] ,"e136c2_client": ["ENTER", true] ,"e166c2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV31AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16MesAbertura',fld:'vMESABERTURA'},{av:'AV18AnoAbertura',fld:'vANOABERTURA'},{av:'AV17MesFechamento',fld:'vMESFECHAMENTO'},{av:'AV19AnoFechamento',fld:'vANOFECHAMENTO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV26DataFechamento',fld:'vDATAFECHAMENTO'}],[{av:'AV22DataAberturaAux',fld:'vDATAABERTURAAUX'},{av:'AV23DataAbertura',fld:'vDATAABERTURA'},{av:'AV20ErroDataAbertura',fld:'vERRODATAABERTURA'},{av:'AV25DataFechamentoAux',fld:'vDATAFECHAMENTOAUX'},{av:'AV26DataFechamento',fld:'vDATAFECHAMENTO'},{av:'AV27ErroDataFechamento',fld:'vERRODATAFECHAMENTO'},{av:'AV28ErroVerificaRegistros',fld:'vERROVERIFICAREGISTROS'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new haberturames());
