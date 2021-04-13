/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:38:8.43
*/
gx.evt.autoSkip = false;
gx.define('hmodalexclusaoassociado', false, function () {
   this.ServerClass =  "hmodalexclusaoassociado" ;
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
      this.AV19PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
   };
   this.e1224s2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1324s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1524s2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,10,13,15,18,20,23,25,30];
   this.GXLastCtrlId =30;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TXTMSG", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE1",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOEXCLUSAO",gxz:"ZV15TipoExclusao",gxold:"OV15TipoExclusao",gxvar:"AV15TipoExclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15TipoExclusao=Value},v2z:function(Value){gx.O.ZV15TipoExclusao=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOEXCLUSAO",gx.O.AV15TipoExclusao)},c2v:function(){gx.O.AV15TipoExclusao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOEXCLUSAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEXCLUSAO",gxz:"ZV6DataExclusao",gxold:"OV6DataExclusao",gxvar:"AV6DataExclusao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6DataExclusao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6DataExclusao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEXCLUSAO",gx.O.AV6DataExclusao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6DataExclusao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEXCLUSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:240,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOTIVOEXCLUSAO",gxz:"ZV9MotivoExclusao",gxold:"OV9MotivoExclusao",gxvar:"AV9MotivoExclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9MotivoExclusao=Value},v2z:function(Value){gx.O.ZV9MotivoExclusao=Value},v2c:function(){gx.fn.setControlValue("vMOTIVOEXCLUSAO",gx.O.AV9MotivoExclusao,0)},c2v:function(){gx.O.AV9MotivoExclusao=this.val()},val:function(){return gx.fn.getControlValue("vMOTIVOEXCLUSAO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"JS", format:2,grid:0};
   this.AV15TipoExclusao = "" ;
   this.ZV15TipoExclusao = "" ;
   this.OV15TipoExclusao = "" ;
   this.AV6DataExclusao = gx.date.nullDate() ;
   this.ZV6DataExclusao = gx.date.nullDate() ;
   this.OV6DataExclusao = gx.date.nullDate() ;
   this.AV9MotivoExclusao = "" ;
   this.ZV9MotivoExclusao = "" ;
   this.OV9MotivoExclusao = "" ;
   this.AV15TipoExclusao = "" ;
   this.AV6DataExclusao = gx.date.nullDate() ;
   this.AV9MotivoExclusao = "" ;
   this.AV19PessoaId = 0 ;
   this.Events = {"e1224s2_client": ["ENTER", true] ,"e1324s2_client": ["'FECHAR'", true] ,"e1524s2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15TipoExclusao',fld:'vTIPOEXCLUSAO'},{av:'AV6DataExclusao',fld:'vDATAEXCLUSAO'},{av:'AV9MotivoExclusao',fld:'vMOTIVOEXCLUSAO'},{av:'AV13SnConfirmar',fld:'vSNCONFIRMAR'},{av:'AV19PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV20AssociadoId',fld:'vASSOCIADOID'}],[{av:'AV13SnConfirmar',fld:'vSNCONFIRMAR'},{av:'AV16TpErro',fld:'vTPERRO'},{av:'AV20AssociadoId',fld:'vASSOCIADOID'},{av:'AV15TipoExclusao',fld:'vTIPOEXCLUSAO'},{av:'AV6DataExclusao',fld:'vDATAEXCLUSAO'},{av:'AV9MotivoExclusao',fld:'vMOTIVOEXCLUSAO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV13SnConfirmar',fld:'vSNCONFIRMAR'},{av:'AV19PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV15TipoExclusao',fld:'vTIPOEXCLUSAO'},{av:'AV6DataExclusao',fld:'vDATAEXCLUSAO'},{av:'AV9MotivoExclusao',fld:'vMOTIVOEXCLUSAO'},{av:'AV20AssociadoId',fld:'vASSOCIADOID'}],[{av:'AV13SnConfirmar',fld:'vSNCONFIRMAR'},{av:'AV20AssociadoId',fld:'vASSOCIADOID'},{av:'AV15TipoExclusao',fld:'vTIPOEXCLUSAO'},{av:'AV6DataExclusao',fld:'vDATAEXCLUSAO'},{av:'AV9MotivoExclusao',fld:'vMOTIVOEXCLUSAO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19PessoaId", "vPESSOAID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalexclusaoassociado());
