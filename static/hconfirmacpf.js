/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:38.31
*/
gx.evt.autoSkip = false;
gx.define('hconfirmacpf', false, function () {
   this.ServerClass =  "hconfirmacpf" ;
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
      this.AV13Modo=gx.fn.getControlValue("vMODO") ;
      this.AV14SNConsulta=gx.fn.getControlValue("vSNCONSULTA") ;
      this.AV15SNCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV16SNFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV17SNFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV18PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
   };
   this.e120r2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140r2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGS",gxz:"ZV12msgs",gxold:"OV12msgs",gxvar:"AV12msgs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12msgs=Value},v2z:function(Value){gx.O.ZV12msgs=Value},v2c:function(){gx.fn.setControlValue("vMSGS",gx.O.AV12msgs,0)},c2v:function(){gx.O.AV12msgs=this.val()},val:function(){return gx.fn.getControlValue("vMSGS")},nac:gx.falseFn};
   this.AV12msgs = "" ;
   this.ZV12msgs = "" ;
   this.OV12msgs = "" ;
   this.AV12msgs = "" ;
   this.AV13Modo = "" ;
   this.AV14SNConsulta = "" ;
   this.AV15SNCliente = "" ;
   this.AV16SNFornecedor = "" ;
   this.AV17SNFabricante = "" ;
   this.AV18PessoaId = 0 ;
   this.Events = {"e120r2_client": ["ENTER", true] ,"e140r2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14SNConsulta',fld:'vSNCONSULTA',hsh:true},{av:'AV12msgs',fld:'vMSGS'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13Modo", "vMODO", 0, "char");
   this.setVCMap("AV14SNConsulta", "vSNCONSULTA", 0, "char");
   this.setVCMap("AV15SNCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV16SNFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV17SNFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV18PessoaId", "vPESSOAID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconfirmacpf());
