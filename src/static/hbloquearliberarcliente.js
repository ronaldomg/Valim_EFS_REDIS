/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:10:34.66
*/
gx.evt.autoSkip = false;
gx.define('hbloquearliberarcliente', false, function () {
   this.ServerClass =  "hbloquearliberarcliente" ;
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
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122c92_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132c92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142c92_client=function()
   {
      this.executeServerEvent("VPESSOAID.ISVALID", true, null, false, true);
   };
   this.e162c92_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,17,19,27,30,31,32,33,34];
   this.GXLastCtrlId =34;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:'e142c92_client',rgrid:[],fld:"vPESSOAID",gxz:"ZV11PessoaId",gxold:"OV11PessoaId",gxvar:"AV11PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV11PessoaId,0)},c2v:function(){gx.O.AV11PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV10PessoaFantasia",gxold:"OV10PessoaFantasia",gxvar:"AV10PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10PessoaFantasia=Value},v2z:function(Value){gx.O.ZV10PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV10PessoaFantasia,0)},c2v:function(){gx.O.AV10PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLIBERAR",gxz:"ZV12SnLiberar",gxold:"OV12SnLiberar",gxvar:"AV12SnLiberar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12SnLiberar=Value},v2z:function(Value){gx.O.ZV12SnLiberar=Value},v2c:function(){gx.fn.setComboBoxValue("vSNLIBERAR",gx.O.AV12SnLiberar)},c2v:function(){gx.O.AV12SnLiberar=this.val()},val:function(){return gx.fn.getControlValue("vSNLIBERAR")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABVISIVEL",grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV9PessoaEmpresaId",gxold:"OV9PessoaEmpresaId",gxvar:"AV9PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV9PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV9PessoaEmpresaId,0)},c2v:function(){gx.O.AV9PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV19Sim",gxold:"OV19Sim",gxvar:"AV19Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Sim=Value},v2z:function(Value){gx.O.ZV19Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV19Sim,0)},c2v:function(){gx.O.AV19Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV20Nao",gxold:"OV20Nao",gxvar:"AV20Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Nao=Value},v2z:function(Value){gx.O.ZV20Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV20Nao,0)},c2v:function(){gx.O.AV20Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDIN",gxz:"ZV18PessoaIdIn",gxold:"OV18PessoaIdIn",gxvar:"AV18PessoaIdIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PessoaIdIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18PessoaIdIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDIN",gx.O.AV18PessoaIdIn,0)},c2v:function(){gx.O.AV18PessoaIdIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDIN",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV11PessoaId = 0 ;
   this.ZV11PessoaId = 0 ;
   this.OV11PessoaId = 0 ;
   this.AV10PessoaFantasia = "" ;
   this.ZV10PessoaFantasia = "" ;
   this.OV10PessoaFantasia = "" ;
   this.AV12SnLiberar = "" ;
   this.ZV12SnLiberar = "" ;
   this.OV12SnLiberar = "" ;
   this.AV9PessoaEmpresaId = "" ;
   this.ZV9PessoaEmpresaId = "" ;
   this.OV9PessoaEmpresaId = "" ;
   this.AV19Sim = "" ;
   this.ZV19Sim = "" ;
   this.OV19Sim = "" ;
   this.AV20Nao = "" ;
   this.ZV20Nao = "" ;
   this.OV20Nao = "" ;
   this.AV18PessoaIdIn = 0 ;
   this.ZV18PessoaIdIn = 0 ;
   this.OV18PessoaIdIn = 0 ;
   this.AV11PessoaId = 0 ;
   this.AV10PessoaFantasia = "" ;
   this.AV12SnLiberar = "" ;
   this.AV9PessoaEmpresaId = "" ;
   this.AV19Sim = "" ;
   this.AV20Nao = "" ;
   this.AV18PessoaIdIn = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A8818PessoaTipoFaturamento = "" ;
   this.A445PessoaCliente = "" ;
   this.Events = {"e122c92_client": ["ENTER", true] ,"e132c92_client": ["'FECHAR'", true] ,"e142c92_client": ["VPESSOAID.ISVALID", true] ,"e162c92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14TpErro',fld:'vTPERRO'},{av:'AV11PessoaId',fld:'vPESSOAID'},{av:'AV12SnLiberar',fld:'vSNLIBERAR'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A8818PessoaTipoFaturamento',fld:'PESSOATIPOFATURAMENTO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'}],[{av:'AV14TpErro',fld:'vTPERRO'},{av:'AV23GXLvl35',fld:'vGXLVL35'},{av:'AV17PessoaTipoFaturamento',fld:'vPESSOATIPOFATURAMENTO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["VPESSOAID.ISVALID"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV11PessoaId',fld:'vPESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'}],[{av:'AV10PessoaFantasia',fld:'vPESSOAFANTASIA'}]];
   this.setPrompt("PROMPT_PESSOAID", [10]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbloquearliberarcliente());
