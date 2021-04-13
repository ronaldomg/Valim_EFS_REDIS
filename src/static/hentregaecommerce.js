/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:19:27.76
*/
gx.evt.autoSkip = false;
gx.define('hentregaecommerce', false, function () {
   this.ServerClass =  "hentregaecommerce" ;
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
      this.AV22PedidosEcommerceId=gx.fn.getIntegerValue("vPEDIDOSECOMMERCEID",'.') ;
   };
   this.s112_client=function()
   {
      if ( (""==this.AV28TpEnvio) )
      {
         this.AV26SnErro =  "S"  ;
         this.addMessage("Selecione o Tipo de Envio");
         gx.fn.usrSetFocus("vTPENVIO") ;
      }
      if ( (""==this.AV8CodRastreamento) && this.AV26SnErro == "N" )
      {
         this.AV26SnErro =  "S"  ;
         this.addMessage("Preencher o Código de rastreamento");
         gx.fn.usrSetFocus("vCODRASTREAMENTO") ;
      }
      if ( (new gx.date.gxdate("").compare(this.AV11DtPostagem)==0) && this.AV26SnErro == "N" )
      {
         this.AV26SnErro =  "S"  ;
         this.addMessage("Preencher a Data Postagem");
         gx.fn.usrSetFocus("vDTPOSTAGEM") ;
      }
      if ( (new gx.date.gxdate("").compare(this.AV23PrevEntrega)==0) && this.AV26SnErro == "N" )
      {
         this.AV26SnErro =  "S"  ;
         this.addMessage("Preencher a Previsão Entrega");
         gx.fn.usrSetFocus("vPREVENTREGA") ;
      }
   };
   this.e122gf2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132gf2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e162gf2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,15,17,19,22,24,26,28,30,32,37,40,42,45,47,50,52,55,57];
   this.GXLastCtrlId =57;
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
   GXValidFnc[42]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPENVIO",gxz:"ZV28TpEnvio",gxold:"OV28TpEnvio",gxvar:"AV28TpEnvio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TpEnvio=Value},v2z:function(Value){gx.O.ZV28TpEnvio=Value},v2c:function(){gx.fn.setControlValue("vTPENVIO",gx.O.AV28TpEnvio,0)},c2v:function(){gx.O.AV28TpEnvio=this.val()},val:function(){return gx.fn.getControlValue("vTPENVIO")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TXT12", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODRASTREAMENTO",gxz:"ZV8CodRastreamento",gxold:"OV8CodRastreamento",gxvar:"AV8CodRastreamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8CodRastreamento=Value},v2z:function(Value){gx.O.ZV8CodRastreamento=Value},v2c:function(){gx.fn.setControlValue("vCODRASTREAMENTO",gx.O.AV8CodRastreamento,0)},c2v:function(){gx.O.AV8CodRastreamento=this.val()},val:function(){return gx.fn.getControlValue("vCODRASTREAMENTO")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TXT13", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTPOSTAGEM",gxz:"ZV11DtPostagem",gxold:"OV11DtPostagem",gxvar:"AV11DtPostagem",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11DtPostagem=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11DtPostagem=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTPOSTAGEM",gx.O.AV11DtPostagem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11DtPostagem=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTPOSTAGEM")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[55]={fld:"TXT14", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPREVENTREGA",gxz:"ZV23PrevEntrega",gxold:"OV23PrevEntrega",gxvar:"AV23PrevEntrega",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PrevEntrega=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23PrevEntrega=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPREVENTREGA",gx.O.AV23PrevEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23PrevEntrega=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPREVENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
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
   this.AV28TpEnvio = "" ;
   this.ZV28TpEnvio = "" ;
   this.OV28TpEnvio = "" ;
   this.AV8CodRastreamento = "" ;
   this.ZV8CodRastreamento = "" ;
   this.OV8CodRastreamento = "" ;
   this.AV11DtPostagem = gx.date.nullDate() ;
   this.ZV11DtPostagem = gx.date.nullDate() ;
   this.OV11DtPostagem = gx.date.nullDate() ;
   this.AV23PrevEntrega = gx.date.nullDate() ;
   this.ZV23PrevEntrega = gx.date.nullDate() ;
   this.OV23PrevEntrega = gx.date.nullDate() ;
   this.AV7Cod = 0 ;
   this.AV5Cliente = "" ;
   this.AV6ClienteFantasia = "" ;
   this.AV27Total = 0 ;
   this.AV9DataPedido = gx.date.nullDate() ;
   this.AV10DtEntrega = gx.date.nullDate() ;
   this.AV13Fase = 0 ;
   this.AV28TpEnvio = "" ;
   this.AV8CodRastreamento = "" ;
   this.AV11DtPostagem = gx.date.nullDate() ;
   this.AV23PrevEntrega = gx.date.nullDate() ;
   this.AV22PedidosEcommerceId = 0 ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.A11690PedidosEcommerceId = 0 ;
   this.A11695PedidosEcommerceDados = "" ;
   this.AV26SnErro = "" ;
   this.Events = {"e122gf2_client": ["ENTER", true] ,"e132gf2_client": ["'FECHAR'", true] ,"e162gf2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'}],[{av:'AV13Fase',fld:'vFASE'}]];
   this.EvtParms["ENTER"] = [[{av:'A11690PedidosEcommerceId',fld:'PEDIDOSECOMMERCEID'},{av:'AV22PedidosEcommerceId',fld:'vPEDIDOSECOMMERCEID',hsh:true},{av:'A11695PedidosEcommerceDados',fld:'PEDIDOSECOMMERCEDADOS'},{av:'AV8CodRastreamento',fld:'vCODRASTREAMENTO'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV24queryStringKeyValueCollection',fld:'vQUERYSTRINGKEYVALUECOLLECTION'},{av:'AV18LI_SituacaoAlt',fld:'vLI_SITUACAOALT'},{av:'AV28TpEnvio',fld:'vTPENVIO'},{av:'AV26SnErro',fld:'vSNERRO'},{av:'AV11DtPostagem',fld:'vDTPOSTAGEM'},{av:'AV23PrevEntrega',fld:'vPREVENTREGA'},{av:'AV30WSResult',fld:'vWSRESULT'},{av:'AV13Fase',fld:'vFASE'},{av:'AV10DtEntrega',fld:'vDTENTREGA'},{av:'AV9DataPedido',fld:'vDATAPEDIDO'},{av:'AV27Total',fld:'vTOTAL'},{av:'AV5Cliente',fld:'vCLIENTE'}],[{av:'AV26SnErro',fld:'vSNERRO'},{av:'AV20Method',fld:'vMETHOD'},{av:'AV16LI_PedidoDetalhado',fld:'vLI_PEDIDODETALHADO'},{av:'AV35GXV1',fld:'vGXV1'},{av:'AV15LI_Envios',fld:'vLI_ENVIOS'},{av:'AV25resource',fld:'vRESOURCE'},{av:'AV14html',fld:'vHTML'},{av:'AV30WSResult',fld:'vWSRESULT'},{av:'AV18LI_SituacaoAlt',fld:'vLI_SITUACAOALT'},{av:'AV37GXV2',fld:'vGXV2'},{av:'AV31Erro',fld:'vERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV28TpEnvio',fld:'vTPENVIO'},{av:'AV13Fase',fld:'vFASE'},{av:'AV10DtEntrega',fld:'vDTENTREGA'},{av:'AV9DataPedido',fld:'vDATAPEDIDO'},{av:'AV27Total',fld:'vTOTAL'},{av:'AV5Cliente',fld:'vCLIENTE'}],[]];
   this.EnterCtrl = ["BTNFECHAR"];
   this.setVCMap("AV22PedidosEcommerceId", "vPEDIDOSECOMMERCEID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hentregaecommerce());
