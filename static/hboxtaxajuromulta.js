/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:12:15.62
*/
gx.evt.autoSkip = false;
gx.define('hboxtaxajuromulta', false, function () {
   this.ServerClass =  "hboxtaxajuromulta" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e12b22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13b22_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15b22_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,7,10,12,15,17,18,21,23,27,31,36,40];
   this.GXLastCtrlId =40;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TABLE4",grid:0};
   GXValidFnc[10]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[12]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPCMULTATELA",gxz:"ZV11PCMultaTela",gxold:"OV11PCMultaTela",gxvar:"AV11PCMultaTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PCMultaTela=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV11PCMultaTela=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPCMULTATELA",gx.O.AV11PCMultaTela,2,',')},c2v:function(){gx.O.AV11PCMultaTela=this.val()},val:function(){return gx.fn.getDecimalValue("vPCMULTATELA",'.',',')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPCJUROSTELA",gxz:"ZV12PCJurosTela",gxold:"OV12PCJurosTela",gxvar:"AV12PCJurosTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12PCJurosTela=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV12PCJurosTela=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPCJUROSTELA",gx.O.AV12PCJurosTela,2,',')},c2v:function(){gx.O.AV12PCJurosTela=this.val()},val:function(){return gx.fn.getDecimalValue("vPCJUROSTELA",'.',',')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIASATRASOTELA",gxz:"ZV13QtdeDiasAtrasoTela",gxold:"OV13QtdeDiasAtrasoTela",gxvar:"AV13QtdeDiasAtrasoTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13QtdeDiasAtrasoTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13QtdeDiasAtrasoTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIASATRASOTELA",gx.O.AV13QtdeDiasAtrasoTela,0)},c2v:function(){gx.O.AV13QtdeDiasAtrasoTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIASATRASOTELA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCAPITAACRESCTELA",gxz:"ZV14snCapitaAcrescTela",gxold:"OV14snCapitaAcrescTela",gxvar:"AV14snCapitaAcrescTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV14snCapitaAcrescTela=Value},v2z:function(Value){gx.O.ZV14snCapitaAcrescTela=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCAPITAACRESCTELA",gx.O.AV14snCapitaAcrescTela,"S")},c2v:function(){gx.O.AV14snCapitaAcrescTela=this.val()},val:function(){return gx.fn.getControlValue("vSNCAPITAACRESCTELA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={fld:"TABLE3",grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"JS", format:2,grid:0};
   this.AV11PCMultaTela = 0 ;
   this.ZV11PCMultaTela = 0 ;
   this.OV11PCMultaTela = 0 ;
   this.AV12PCJurosTela = 0 ;
   this.ZV12PCJurosTela = 0 ;
   this.OV12PCJurosTela = 0 ;
   this.AV13QtdeDiasAtrasoTela = 0 ;
   this.ZV13QtdeDiasAtrasoTela = 0 ;
   this.OV13QtdeDiasAtrasoTela = 0 ;
   this.AV14snCapitaAcrescTela = "" ;
   this.ZV14snCapitaAcrescTela = "" ;
   this.OV14snCapitaAcrescTela = "" ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.ZV20AcessoSistemaSequencia = 0 ;
   this.OV20AcessoSistemaSequencia = 0 ;
   this.AV11PCMultaTela = 0 ;
   this.AV12PCJurosTela = 0 ;
   this.AV13QtdeDiasAtrasoTela = 0 ;
   this.AV14snCapitaAcrescTela = "" ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.Events = {"e12b22_client": ["ENTER", true] ,"e13b22_client": ["'CANCELAR'", true] ,"e15b22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11PCMultaTela',fld:'vPCMULTATELA'},{av:'AV12PCJurosTela',fld:'vPCJUROSTELA'},{av:'AV13QtdeDiasAtrasoTela',fld:'vQTDEDIASATRASOTELA'},{av:'AV15EmpresaId',fld:'vEMPRESAID'},{av:'AV14snCapitaAcrescTela',fld:'vSNCAPITAACRESCTELA'},{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV16Valor1',fld:'vVALOR1'},{av:'AV18Valor2',fld:'vVALOR2'},{av:'AV17Valor3',fld:'vVALOR3'},{av:'AV14snCapitaAcrescTela',fld:'vSNCAPITAACRESCTELA'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hboxtaxajuromulta());
