/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:5.66
*/
gx.evt.autoSkip = false;
gx.define('hexportarsistema', false, function () {
   this.ServerClass =  "hexportarsistema" ;
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
   this.e13252_client=function()
   {
      this.executeServerEvent("'DIALOG'", true, null, false, false);
   };
   this.e11252_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14252_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17252_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,16,18,21,23,29,35,37];
   this.GXLastCtrlId =37;
   GXValidFnc[3]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE4",grid:0};
   GXValidFnc[9]={fld:"TABLE9",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE10",grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV14Diretorio",gxold:"OV14Diretorio",gxvar:"AV14Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Diretorio=Value},v2z:function(Value){gx.O.ZV14Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV14Diretorio,0)},c2v:function(){gx.O.AV14Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[29]={fld:"TABLE8",grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV15AcessoSistemaSequencia",gxold:"OV15AcessoSistemaSequencia",gxvar:"AV15AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV15AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   this.AV14Diretorio = "" ;
   this.ZV14Diretorio = "" ;
   this.OV14Diretorio = "" ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.ZV15AcessoSistemaSequencia = 0 ;
   this.OV15AcessoSistemaSequencia = 0 ;
   this.AV14Diretorio = "" ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.A138EmpresaId = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A140SistemaId = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.A417ParametroSistemaValor = "" ;
   this.A418ParametroSistemaObservacao = "" ;
   this.A930ParametroSistemaTipo = "" ;
   this.A933ParametroSistemaSN = "" ;
   this.A934ParametroSitemaNumero = 0 ;
   this.Events = {"e13252_client": ["'DIALOG'", true] ,"e11252_client": ["'FECHAR'", true] ,"e14252_client": ["ENTER", true] ,"e17252_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV14Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'DIALOG'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV15AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14Diretorio',fld:'vDIRETORIO'},{av:'AV17Caminho',fld:'vCAMINHO'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A416ParametroSistemaDescricao',fld:'PARAMETROSISTEMADESCRICAO'},{av:'A417ParametroSistemaValor',fld:'PARAMETROSISTEMAVALOR'},{av:'A418ParametroSistemaObservacao',fld:'PARAMETROSISTEMAOBSERVACAO'},{av:'A930ParametroSistemaTipo',fld:'PARAMETROSISTEMATIPO'},{av:'A933ParametroSistemaSN',fld:'PARAMETROSISTEMASN'},{av:'A934ParametroSitemaNumero',fld:'PARAMETROSITEMANUMERO'}],[{av:'AV18i',fld:'vI'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexportarsistema());
