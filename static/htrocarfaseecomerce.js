/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:19:29.94
*/
gx.evt.autoSkip = false;
gx.define('htrocarfaseecomerce', false, function () {
   this.ServerClass =  "htrocarfaseecomerce" ;
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
      this.AV31SaidaId=gx.fn.getIntegerValue("vSAIDAID",'.') ;
      this.AV22PedidosEcommerceId=gx.fn.getIntegerValue("vPEDIDOSECOMMERCEID",'.') ;
      this.AV28TpEnvio=gx.fn.getControlValue("vTPENVIO") ;
   };
   this.e122gg2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132gg2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e162gg2_client=function()
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
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOD",gxz:"ZV7Cod",gxold:"OV7Cod",gxvar:"AV7Cod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7Cod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7Cod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOD",gx.O.AV7Cod,0)},c2v:function(){gx.O.AV7Cod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOD",'.')},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TXT7", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTE",gxz:"ZV5Cliente",gxold:"OV5Cliente",gxvar:"AV5Cliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Cliente=Value},v2z:function(Value){gx.O.ZV5Cliente=Value},v2c:function(){gx.fn.setControlValue("vCLIENTE",gx.O.AV5Cliente,0)},c2v:function(){gx.O.AV5Cliente=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTE")},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEFANTASIA",gxz:"ZV6ClienteFantasia",gxold:"OV6ClienteFantasia",gxvar:"AV6ClienteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6ClienteFantasia=Value},v2z:function(Value){gx.O.ZV6ClienteFantasia=Value},v2c:function(){gx.fn.setControlValue("vCLIENTEFANTASIA",gx.O.AV6ClienteFantasia,0)},c2v:function(){gx.O.AV6ClienteFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXT9", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTAL",gxz:"ZV27Total",gxold:"OV27Total",gxvar:"AV27Total",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Total=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV27Total=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTAL",gx.O.AV27Total,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27Total=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TXT3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPEDIDO",gxz:"ZV9DataPedido",gxold:"OV9DataPedido",gxvar:"AV9DataPedido",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9DataPedido=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9DataPedido=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPEDIDO",gx.O.AV9DataPedido,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9DataPedido=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPEDIDO")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[26]={fld:"TXT8", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTENTREGA",gxz:"ZV10DtEntrega",gxold:"OV10DtEntrega",gxvar:"AV10DtEntrega",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10DtEntrega=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10DtEntrega=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTENTREGA",gx.O.AV10DtEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10DtEntrega=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={fld:"TXT10", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFASE",gxz:"ZV13Fase",gxold:"OV13Fase",gxvar:"AV13Fase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13Fase=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Fase=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vFASE",gx.O.AV13Fase)},c2v:function(){gx.O.AV13Fase=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFASE",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE1",grid:0};
   GXValidFnc[40]={fld:"TXT11", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERENCIAFASE",gxz:"ZV30GerenciaFase",gxold:"OV30GerenciaFase",gxvar:"AV30GerenciaFase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30GerenciaFase=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30GerenciaFase=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vGERENCIAFASE",gx.O.AV30GerenciaFase)},c2v:function(){gx.O.AV30GerenciaFase=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGERENCIAFASE",'.')},nac:gx.falseFn};
   this.AV7Cod = 0 ;
   this.ZV7Cod = 0 ;
   this.OV7Cod = 0 ;
   this.AV5Cliente = "" ;
   this.ZV5Cliente = "" ;
   this.OV5Cliente = "" ;
   this.AV6ClienteFantasia = "" ;
   this.ZV6ClienteFantasia = "" ;
   this.OV6ClienteFantasia = "" ;
   this.AV27Total = 0 ;
   this.ZV27Total = 0 ;
   this.OV27Total = 0 ;
   this.AV9DataPedido = gx.date.nullDate() ;
   this.ZV9DataPedido = gx.date.nullDate() ;
   this.OV9DataPedido = gx.date.nullDate() ;
   this.AV10DtEntrega = gx.date.nullDate() ;
   this.ZV10DtEntrega = gx.date.nullDate() ;
   this.OV10DtEntrega = gx.date.nullDate() ;
   this.AV13Fase = 0 ;
   this.ZV13Fase = 0 ;
   this.OV13Fase = 0 ;
   this.AV30GerenciaFase = 0 ;
   this.ZV30GerenciaFase = 0 ;
   this.OV30GerenciaFase = 0 ;
   this.AV7Cod = 0 ;
   this.AV5Cliente = "" ;
   this.AV6ClienteFantasia = "" ;
   this.AV27Total = 0 ;
   this.AV9DataPedido = gx.date.nullDate() ;
   this.AV10DtEntrega = gx.date.nullDate() ;
   this.AV13Fase = 0 ;
   this.AV30GerenciaFase = 0 ;
   this.AV31SaidaId = 0 ;
   this.AV22PedidosEcommerceId = 0 ;
   this.AV28TpEnvio = "" ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.A8601OrdemServicoFaseObservacao = "" ;
   this.Events = {"e122gg2_client": ["ENTER", true] ,"e132gg2_client": ["'FECHAR'", true] ,"e162gg2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'}],[{av:'AV13Fase',fld:'vFASE'},{av:'AV30GerenciaFase',fld:'vGERENCIAFASE'}]];
   this.EvtParms["ENTER"] = [[{av:'AV22PedidosEcommerceId',fld:'vPEDIDOSECOMMERCEID'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'AV30GerenciaFase',fld:'vGERENCIAFASE'},{av:'A8601OrdemServicoFaseObservacao',fld:'ORDEMSERVICOFASEOBSERVACAO'},{av:'AV18LI_SituacaoAlt',fld:'vLI_SITUACAOALT'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV24queryStringKeyValueCollection',fld:'vQUERYSTRINGKEYVALUECOLLECTION'},{av:'AV31SaidaId',fld:'vSAIDAID',hsh:true},{av:'AV29UsrCod',fld:'vUSRCOD'},{av:'AV28TpEnvio',fld:'vTPENVIO'},{av:'AV13Fase',fld:'vFASE'},{av:'AV10DtEntrega',fld:'vDTENTREGA'},{av:'AV9DataPedido',fld:'vDATAPEDIDO'},{av:'AV27Total',fld:'vTOTAL'},{av:'AV5Cliente',fld:'vCLIENTE'},{av:'AV33WSresult',fld:'vWSRESULT'}],[{av:'AV26SnErro',fld:'vSNERRO'},{av:'AV20Method',fld:'vMETHOD'},{av:'AV25resource',fld:'vRESOURCE'},{av:'AV14html',fld:'vHTML'},{av:'AV18LI_SituacaoAlt',fld:'vLI_SITUACAOALT'},{av:'AV32OrdemservicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV33WSresult',fld:'vWSRESULT'},{av:'AV29UsrCod',fld:'vUSRCOD'},{av:'AV30GerenciaFase',fld:'vGERENCIAFASE'},{av:'AV31SaidaId',fld:'vSAIDAID',hsh:true},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV39GXV1',fld:'vGXV1'},{av:'AV34Erro',fld:'vERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV28TpEnvio',fld:'vTPENVIO'},{av:'AV13Fase',fld:'vFASE'},{av:'AV10DtEntrega',fld:'vDTENTREGA'},{av:'AV9DataPedido',fld:'vDATAPEDIDO'},{av:'AV27Total',fld:'vTOTAL'},{av:'AV5Cliente',fld:'vCLIENTE'},{av:'AV22PedidosEcommerceId',fld:'vPEDIDOSECOMMERCEID'}],[]];
   this.EnterCtrl = ["BTNFECHAR"];
   this.setVCMap("AV31SaidaId", "vSAIDAID", 0, "int");
   this.setVCMap("AV22PedidosEcommerceId", "vPEDIDOSECOMMERCEID", 0, "int");
   this.setVCMap("AV28TpEnvio", "vTPENVIO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new htrocarfaseecomerce());
