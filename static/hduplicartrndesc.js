/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:13.35
*/
gx.evt.autoSkip = false;
gx.define('hduplicartrndesc', false, function () {
   this.ServerClass =  "hduplicartrndesc" ;
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
      this.AV13TrnDescEmpresaId=gx.fn.getControlValue("vTRNDESCEMPRESAID") ;
   };
   this.e12942_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13942_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15942_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22];
   this.GXLastCtrlId =22;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE6",grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNDESCSIGLA",gxz:"ZV12TrnDescSigla",gxold:"OV12TrnDescSigla",gxvar:"AV12TrnDescSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12TrnDescSigla=Value},v2z:function(Value){gx.O.ZV12TrnDescSigla=Value},v2c:function(){gx.fn.setControlValue("vTRNDESCSIGLA",gx.O.AV12TrnDescSigla,0)},c2v:function(){gx.O.AV12TrnDescSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRNDESCSIGLA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNDESCDESCRICAO",gxz:"ZV17TrnDescDescricao",gxold:"OV17TrnDescDescricao",gxvar:"AV17TrnDescDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TrnDescDescricao=Value},v2z:function(Value){gx.O.ZV17TrnDescDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRNDESCDESCRICAO",gx.O.AV17TrnDescDescricao,0)},c2v:function(){gx.O.AV17TrnDescDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRNDESCDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVOTRNDESCSIGLA",gxz:"ZV11NovoTrnDescSigla",gxold:"OV11NovoTrnDescSigla",gxvar:"AV11NovoTrnDescSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11NovoTrnDescSigla=Value},v2z:function(Value){gx.O.ZV11NovoTrnDescSigla=Value},v2c:function(){gx.fn.setControlValue("vNOVOTRNDESCSIGLA",gx.O.AV11NovoTrnDescSigla,0)},c2v:function(){gx.O.AV11NovoTrnDescSigla=this.val()},val:function(){return gx.fn.getControlValue("vNOVOTRNDESCSIGLA")},nac:gx.falseFn};
   this.AV12TrnDescSigla = "" ;
   this.ZV12TrnDescSigla = "" ;
   this.OV12TrnDescSigla = "" ;
   this.AV17TrnDescDescricao = "" ;
   this.ZV17TrnDescDescricao = "" ;
   this.OV17TrnDescDescricao = "" ;
   this.AV11NovoTrnDescSigla = "" ;
   this.ZV11NovoTrnDescSigla = "" ;
   this.OV11NovoTrnDescSigla = "" ;
   this.AV12TrnDescSigla = "" ;
   this.AV17TrnDescDescricao = "" ;
   this.AV11NovoTrnDescSigla = "" ;
   this.AV13TrnDescEmpresaId = "" ;
   this.Events = {"e12942_client": ["ENTER", true] ,"e13942_client": ["'CANCELAR'", true] ,"e15942_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13TrnDescEmpresaId',fld:'vTRNDESCEMPRESAID',hsh:true},{av:'AV11NovoTrnDescSigla',fld:'vNOVOTRNDESCSIGLA'},{av:'AV12TrnDescSigla',fld:'vTRNDESCSIGLA',hsh:true}],[{av:'AV16snExiste',fld:'vSNEXISTE'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13TrnDescEmpresaId", "vTRNDESCEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicartrndesc());
