/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:26.86
*/
gx.evt.autoSkip = false;
gx.define('hduplicartrntranf', false, function () {
   this.ServerClass =  "hduplicartrntranf" ;
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
      this.AV13TrnTransfEmpresaID=gx.fn.getControlValue("vTRNTRANSFEMPRESAID") ;
   };
   this.e129d2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e139d2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e159d2_client=function()
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
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNTRANSFSIGLA",gxz:"ZV12TrnTransfSigla",gxold:"OV12TrnTransfSigla",gxvar:"AV12TrnTransfSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12TrnTransfSigla=Value},v2z:function(Value){gx.O.ZV12TrnTransfSigla=Value},v2c:function(){gx.fn.setControlValue("vTRNTRANSFSIGLA",gx.O.AV12TrnTransfSigla,0)},c2v:function(){gx.O.AV12TrnTransfSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRNTRANSFSIGLA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNTRANSFDESCRICAO",gxz:"ZV17TrnTransfDescricao",gxold:"OV17TrnTransfDescricao",gxvar:"AV17TrnTransfDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TrnTransfDescricao=Value},v2z:function(Value){gx.O.ZV17TrnTransfDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRNTRANSFDESCRICAO",gx.O.AV17TrnTransfDescricao,0)},c2v:function(){gx.O.AV17TrnTransfDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRNTRANSFDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVOTRNDESCSIGLA",gxz:"ZV11NovoTrnDescSigla",gxold:"OV11NovoTrnDescSigla",gxvar:"AV11NovoTrnDescSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11NovoTrnDescSigla=Value},v2z:function(Value){gx.O.ZV11NovoTrnDescSigla=Value},v2c:function(){gx.fn.setControlValue("vNOVOTRNDESCSIGLA",gx.O.AV11NovoTrnDescSigla,0)},c2v:function(){gx.O.AV11NovoTrnDescSigla=this.val()},val:function(){return gx.fn.getControlValue("vNOVOTRNDESCSIGLA")},nac:gx.falseFn};
   this.AV12TrnTransfSigla = "" ;
   this.ZV12TrnTransfSigla = "" ;
   this.OV12TrnTransfSigla = "" ;
   this.AV17TrnTransfDescricao = "" ;
   this.ZV17TrnTransfDescricao = "" ;
   this.OV17TrnTransfDescricao = "" ;
   this.AV11NovoTrnDescSigla = "" ;
   this.ZV11NovoTrnDescSigla = "" ;
   this.OV11NovoTrnDescSigla = "" ;
   this.AV12TrnTransfSigla = "" ;
   this.AV17TrnTransfDescricao = "" ;
   this.AV11NovoTrnDescSigla = "" ;
   this.AV13TrnTransfEmpresaID = "" ;
   this.Events = {"e129d2_client": ["ENTER", true] ,"e139d2_client": ["'CANCELAR'", true] ,"e159d2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13TrnTransfEmpresaID',fld:'vTRNTRANSFEMPRESAID',hsh:true},{av:'AV11NovoTrnDescSigla',fld:'vNOVOTRNDESCSIGLA'},{av:'AV12TrnTransfSigla',fld:'vTRNTRANSFSIGLA',hsh:true}],[{av:'AV14snExiste',fld:'vSNEXISTE'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13TrnTransfEmpresaID", "vTRNTRANSFEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicartrntranf());
