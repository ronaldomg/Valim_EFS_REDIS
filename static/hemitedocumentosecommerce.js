/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:19:46.9
*/
gx.evt.autoSkip = false;
gx.define('hemitedocumentosecommerce', false, function () {
   this.ServerClass =  "hemitedocumentosecommerce" ;
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
   this.e122gl2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132gl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e162gl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,15,17,19,22,24,26,28,30,32,37,40,42];
   this.GXLastCtrlId =42;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TXT1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOD",gxz:"ZV7Cod",gxold:"OV7Cod",gxvar:"AV7Cod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7Cod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7Cod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOD",gx.O.AV7Cod,0)},c2v:function(){gx.O.AV7Cod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOD",'.')},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TXT7", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTE",gxz:"ZV5Cliente",gxold:"OV5Cliente",gxvar:"AV5Cliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Cliente=Value},v2z:function(Value){gx.O.ZV5Cliente=Value},v2c:function(){gx.fn.setControlValue("vCLIENTE",gx.O.AV5Cliente,0)},c2v:function(){gx.O.AV5Cliente=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTE")},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEFANTASIA",gxz:"ZV6ClienteFantasia",gxold:"OV6ClienteFantasia",gxvar:"AV6ClienteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6ClienteFantasia=Value},v2z:function(Value){gx.O.ZV6ClienteFantasia=Value},v2c:function(){gx.fn.setControlValue("vCLIENTEFANTASIA",gx.O.AV6ClienteFantasia,0)},c2v:function(){gx.O.AV6ClienteFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXT9", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTAL",gxz:"ZV13Total",gxold:"OV13Total",gxvar:"AV13Total",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Total=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV13Total=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTAL",gx.O.AV13Total,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13Total=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TXT3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPEDIDO",gxz:"ZV8DataPedido",gxold:"OV8DataPedido",gxvar:"AV8DataPedido",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8DataPedido=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8DataPedido=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPEDIDO",gx.O.AV8DataPedido,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8DataPedido=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPEDIDO")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[26]={fld:"TXT8", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTENTREGA",gxz:"ZV9DtEntrega",gxold:"OV9DtEntrega",gxvar:"AV9DtEntrega",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9DtEntrega=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9DtEntrega=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTENTREGA",gx.O.AV9DtEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9DtEntrega=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={fld:"TXT10", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFASE",gxz:"ZV11Fase",gxold:"OV11Fase",gxvar:"AV11Fase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11Fase=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11Fase=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vFASE",gx.O.AV11Fase)},c2v:function(){gx.O.AV11Fase=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFASE",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE1",grid:0};
   GXValidFnc[40]={fld:"TXT11", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPDOCUMENTO",gxz:"ZV15TpDocumento",gxold:"OV15TpDocumento",gxvar:"AV15TpDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15TpDocumento=Value},v2z:function(Value){gx.O.ZV15TpDocumento=Value},v2c:function(){gx.fn.setComboBoxValue("vTPDOCUMENTO",gx.O.AV15TpDocumento)},c2v:function(){gx.O.AV15TpDocumento=this.val()},val:function(){return gx.fn.getControlValue("vTPDOCUMENTO")},nac:gx.falseFn};
   this.AV7Cod = 0 ;
   this.ZV7Cod = 0 ;
   this.OV7Cod = 0 ;
   this.AV5Cliente = "" ;
   this.ZV5Cliente = "" ;
   this.OV5Cliente = "" ;
   this.AV6ClienteFantasia = "" ;
   this.ZV6ClienteFantasia = "" ;
   this.OV6ClienteFantasia = "" ;
   this.AV13Total = 0 ;
   this.ZV13Total = 0 ;
   this.OV13Total = 0 ;
   this.AV8DataPedido = gx.date.nullDate() ;
   this.ZV8DataPedido = gx.date.nullDate() ;
   this.OV8DataPedido = gx.date.nullDate() ;
   this.AV9DtEntrega = gx.date.nullDate() ;
   this.ZV9DtEntrega = gx.date.nullDate() ;
   this.OV9DtEntrega = gx.date.nullDate() ;
   this.AV11Fase = 0 ;
   this.ZV11Fase = 0 ;
   this.OV11Fase = 0 ;
   this.AV15TpDocumento = "" ;
   this.ZV15TpDocumento = "" ;
   this.OV15TpDocumento = "" ;
   this.AV7Cod = 0 ;
   this.AV5Cliente = "" ;
   this.AV6ClienteFantasia = "" ;
   this.AV13Total = 0 ;
   this.AV8DataPedido = gx.date.nullDate() ;
   this.AV9DtEntrega = gx.date.nullDate() ;
   this.AV11Fase = 0 ;
   this.AV15TpDocumento = "" ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.Events = {"e122gl2_client": ["ENTER", true] ,"e132gl2_client": ["'FECHAR'", true] ,"e162gl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'}],[{av:'AV11Fase',fld:'vFASE'}]];
   this.EvtParms["ENTER"] = [[{av:'AV11Fase',fld:'vFASE'},{av:'AV9DtEntrega',fld:'vDTENTREGA'},{av:'AV8DataPedido',fld:'vDATAPEDIDO'},{av:'AV13Total',fld:'vTOTAL'},{av:'AV5Cliente',fld:'vCLIENTE'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV11Fase',fld:'vFASE'},{av:'AV9DtEntrega',fld:'vDTENTREGA'},{av:'AV8DataPedido',fld:'vDATAPEDIDO'},{av:'AV13Total',fld:'vTOTAL'},{av:'AV5Cliente',fld:'vCLIENTE'}],[]];
   this.EnterCtrl = ["BTNFECHAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemitedocumentosecommerce());
