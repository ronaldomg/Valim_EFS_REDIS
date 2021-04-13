/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:27.87
*/
gx.evt.autoSkip = false;
gx.define('hduplicarlayoutremessaretorno', false, function () {
   this.ServerClass =  "hduplicarlayoutremessaretorno" ;
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
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV15RemessaRetornoId=gx.fn.getIntegerValue("vREMESSARETORNOID",'.') ;
      this.AV16RemessaRetornoItemSequencia=gx.fn.getIntegerValue("vREMESSARETORNOITEMSEQUENCIA",'.') ;
      this.AV17RemessaRetornoTipo=gx.fn.getControlValue("vREMESSARETORNOTIPO") ;
   };
   this.e12jy2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13jy2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15jy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20];
   this.GXLastCtrlId =20;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNOITEMTIPO",gxz:"ZV11RemessaRetornoItemTipo",gxold:"OV11RemessaRetornoItemTipo",gxvar:"AV11RemessaRetornoItemTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11RemessaRetornoItemTipo=Value},v2z:function(Value){gx.O.ZV11RemessaRetornoItemTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vREMESSARETORNOITEMTIPO",gx.O.AV11RemessaRetornoItemTipo)},c2v:function(){gx.O.AV11RemessaRetornoItemTipo=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNOITEMTIPO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNOITEMTIPOREGISTRO",gxz:"ZV12RemessaRetornoItemTipoRegistro",gxold:"OV12RemessaRetornoItemTipoRegistro",gxvar:"AV12RemessaRetornoItemTipoRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12RemessaRetornoItemTipoRegistro=Value},v2z:function(Value){gx.O.ZV12RemessaRetornoItemTipoRegistro=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOITEMTIPOREGISTRO",gx.O.AV12RemessaRetornoItemTipoRegistro,0)},c2v:function(){gx.O.AV12RemessaRetornoItemTipoRegistro=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNOITEMTIPOREGISTRO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNOITEMDESCRICAO",gxz:"ZV13RemessaRetornoItemDescricao",gxold:"OV13RemessaRetornoItemDescricao",gxvar:"AV13RemessaRetornoItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13RemessaRetornoItemDescricao=Value},v2z:function(Value){gx.O.ZV13RemessaRetornoItemDescricao=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOITEMDESCRICAO",gx.O.AV13RemessaRetornoItemDescricao,0)},c2v:function(){gx.O.AV13RemessaRetornoItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNOITEMDESCRICAO")},nac:gx.falseFn};
   this.AV11RemessaRetornoItemTipo = "" ;
   this.ZV11RemessaRetornoItemTipo = "" ;
   this.OV11RemessaRetornoItemTipo = "" ;
   this.AV12RemessaRetornoItemTipoRegistro = "" ;
   this.ZV12RemessaRetornoItemTipoRegistro = "" ;
   this.OV12RemessaRetornoItemTipoRegistro = "" ;
   this.AV13RemessaRetornoItemDescricao = "" ;
   this.ZV13RemessaRetornoItemDescricao = "" ;
   this.OV13RemessaRetornoItemDescricao = "" ;
   this.AV11RemessaRetornoItemTipo = "" ;
   this.AV12RemessaRetornoItemTipoRegistro = "" ;
   this.AV13RemessaRetornoItemDescricao = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV15RemessaRetornoId = 0 ;
   this.AV16RemessaRetornoItemSequencia = 0 ;
   this.AV17RemessaRetornoTipo = "" ;
   this.Events = {"e12jy2_client": ["ENTER", true] ,"e13jy2_client": ["'FECHAR'", true] ,"e15jy2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11RemessaRetornoItemTipo',fld:'vREMESSARETORNOITEMTIPO'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV15RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV16RemessaRetornoItemSequencia',fld:'vREMESSARETORNOITEMSEQUENCIA'},{av:'AV12RemessaRetornoItemTipoRegistro',fld:'vREMESSARETORNOITEMTIPOREGISTRO'},{av:'AV17RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO'},{av:'AV13RemessaRetornoItemDescricao',fld:'vREMESSARETORNOITEMDESCRICAO'}],[{av:'AV19tpErro',fld:'vTPERRO'},{av:'AV18MsgmErro',fld:'vMSGMERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO'},{av:'AV16RemessaRetornoItemSequencia',fld:'vREMESSARETORNOITEMSEQUENCIA'},{av:'AV15RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV15RemessaRetornoId", "vREMESSARETORNOID", 0, "int");
   this.setVCMap("AV16RemessaRetornoItemSequencia", "vREMESSARETORNOITEMSEQUENCIA", 0, "int");
   this.setVCMap("AV17RemessaRetornoTipo", "vREMESSARETORNOTIPO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicarlayoutremessaretorno());
