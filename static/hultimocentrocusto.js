/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:11.97
*/
gx.evt.autoSkip = false;
gx.define('hultimocentrocusto', false, function () {
   this.ServerClass =  "hultimocentrocusto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV9EmpresaCentroCustoEmpresaId=gx.fn.getControlValue("vEMPRESACENTROCUSTOEMPRESAID") ;
      this.AV8CentroCustoId=gx.fn.getControlValue("vCENTROCUSTOID") ;
   };
   this.e11l32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14l32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15l32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17];
   this.GXLastCtrlId =17;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE6",grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOSUPERIOR",gxz:"ZV10CentroCustoSuperior",gxold:"OV10CentroCustoSuperior",gxvar:"AV10CentroCustoSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10CentroCustoSuperior=Value},v2z:function(Value){gx.O.ZV10CentroCustoSuperior=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOSUPERIOR",gx.O.AV10CentroCustoSuperior,0)},c2v:function(){gx.O.AV10CentroCustoSuperior=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOSUPERIOR")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTODESCRICAO",gxz:"ZV11CentroCustoDescricao",gxold:"OV11CentroCustoDescricao",gxvar:"AV11CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11CentroCustoDescricao=Value},v2z:function(Value){gx.O.ZV11CentroCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCRICAO",gx.O.AV11CentroCustoDescricao,0)},c2v:function(){gx.O.AV11CentroCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   this.AV10CentroCustoSuperior = "" ;
   this.ZV10CentroCustoSuperior = "" ;
   this.OV10CentroCustoSuperior = "" ;
   this.AV11CentroCustoDescricao = "" ;
   this.ZV11CentroCustoDescricao = "" ;
   this.OV11CentroCustoDescricao = "" ;
   this.AV10CentroCustoSuperior = "" ;
   this.AV11CentroCustoDescricao = "" ;
   this.AV9EmpresaCentroCustoEmpresaId = "" ;
   this.AV8CentroCustoId = "" ;
   this.A150CentroCustoSuperior = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A51CentroCustoId = "" ;
   this.Events = {"e11l32_client": ["'FECHAR'", true] ,"e14l32_client": ["ENTER", true] ,"e15l32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV9EmpresaCentroCustoEmpresaId", "vEMPRESACENTROCUSTOEMPRESAID", 0, "char");
   this.setVCMap("AV8CentroCustoId", "vCENTROCUSTOID", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hultimocentrocusto());
