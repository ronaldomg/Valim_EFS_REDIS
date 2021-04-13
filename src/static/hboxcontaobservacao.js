/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:12:30.34
*/
gx.evt.autoSkip = false;
gx.define('hboxcontaobservacao', false, function () {
   this.ServerClass =  "hboxcontaobservacao" ;
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
      this.AV21ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
      this.AV25TipoAceite=gx.fn.getControlValue("vTIPOACEITE") ;
   };
   this.Validv_Contapagrecnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12b52_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13b52_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15b52_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,18,21,23,26,28,30,31,34,36,38,40,43,45,47,49,54,59];
   this.GXLastCtrlId =59;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TXTCONTA", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecnumero,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMERO",gxz:"ZV17ContaPagRecNumero",gxold:"OV17ContaPagRecNumero",gxvar:"AV17ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMERO",gx.O.AV17ContaPagRecNumero,0)},c2v:function(){gx.O.AV17ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCACEITE",gxz:"ZV28DescAceite",gxold:"OV28DescAceite",gxvar:"AV28DescAceite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DescAceite=Value},v2z:function(Value){gx.O.ZV28DescAceite=Value},v2c:function(){gx.fn.setControlValue("vDESCACEITE",gx.O.AV28DescAceite,0)},c2v:function(){gx.O.AV28DescAceite=this.val()},val:function(){return gx.fn.getControlValue("vDESCACEITE")},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCSITUACAO",gxz:"ZV27DescSituacao",gxold:"OV27DescSituacao",gxvar:"AV27DescSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DescSituacao=Value},v2z:function(Value){gx.O.ZV27DescSituacao=Value},v2c:function(){gx.fn.setControlValue("vDESCSITUACAO",gx.O.AV27DescSituacao,0)},c2v:function(){gx.O.AV27DescSituacao=this.val()},val:function(){return gx.fn.getControlValue("vDESCSITUACAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE3",grid:0};
   GXValidFnc[21]={fld:"TXTCLIFOR", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLE7",grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORID",gxz:"ZV23ContaPagRecCliForId",gxold:"OV23ContaPagRecCliForId",gxvar:"AV23ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORID",gx.O.AV23ContaPagRecCliForId,0)},c2v:function(){gx.O.AV23ContaPagRecCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTCLIFOR2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORFANTASIA",gxz:"ZV24ContaPagRecCliForFantasia",gxold:"OV24ContaPagRecCliForFantasia",gxvar:"AV24ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.ZV24ContaPagRecCliForFantasia=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORFANTASIA",gx.O.AV24ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.AV24ContaPagRecCliForFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCLIFORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE6",grid:0};
   GXValidFnc[34]={fld:"TXTDOC2", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCUMENTO",gxz:"ZV31ContaPagRecDocumento",gxold:"OV31ContaPagRecDocumento",gxvar:"AV31ContaPagRecDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ContaPagRecDocumento=Value},v2z:function(Value){gx.O.ZV31ContaPagRecDocumento=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDOCUMENTO",gx.O.AV31ContaPagRecDocumento,0)},c2v:function(){gx.O.AV31ContaPagRecDocumento=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TXTVAL2", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVLRATUALSEMSINAL",gxz:"ZV32ContaPagRecVlrAtualSemSinal",gxold:"OV32ContaPagRecVlrAtualSemSinal",gxvar:"AV32ContaPagRecVlrAtualSemSinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ContaPagRecVlrAtualSemSinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV32ContaPagRecVlrAtualSemSinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTAPAGRECVLRATUALSEMSINAL",gx.O.AV32ContaPagRecVlrAtualSemSinal,2,',')},c2v:function(){gx.O.AV32ContaPagRecVlrAtualSemSinal=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTAPAGRECVLRATUALSEMSINAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TXTDTEMI2", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAO",gxz:"ZV29ContaPagRecDtEmissao",gxold:"OV29ContaPagRecDtEmissao",gxvar:"AV29ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAO",gx.O.AV29ContaPagRecDtEmissao,0)},c2v:function(){gx.O.AV29ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TXTDTVEN2", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTO",gxz:"ZV30ContaPagRecDtVencimento",gxold:"OV30ContaPagRecDtVencimento",gxvar:"AV30ContaPagRecDtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTO",gx.O.AV30ContaPagRecDtVencimento,0)},c2v:function(){gx.O.AV30ContaPagRecDtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV20Observacao",gxold:"OV20Observacao",gxvar:"AV20Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Observacao=Value},v2z:function(Value){gx.O.ZV20Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV20Observacao,0)},c2v:function(){gx.O.AV20Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOSNPERM",gxz:"ZV33UsuarioSnPerm",gxold:"OV33UsuarioSnPerm",gxvar:"AV33UsuarioSnPerm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33UsuarioSnPerm=Value},v2z:function(Value){gx.O.ZV33UsuarioSnPerm=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOSNPERM",gx.O.AV33UsuarioSnPerm,0)},c2v:function(){gx.O.AV33UsuarioSnPerm=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOSNPERM")},nac:gx.falseFn};
   this.AV17ContaPagRecNumero = 0 ;
   this.ZV17ContaPagRecNumero = 0 ;
   this.OV17ContaPagRecNumero = 0 ;
   this.AV28DescAceite = "" ;
   this.ZV28DescAceite = "" ;
   this.OV28DescAceite = "" ;
   this.AV27DescSituacao = "" ;
   this.ZV27DescSituacao = "" ;
   this.OV27DescSituacao = "" ;
   this.AV23ContaPagRecCliForId = 0 ;
   this.ZV23ContaPagRecCliForId = 0 ;
   this.OV23ContaPagRecCliForId = 0 ;
   this.AV24ContaPagRecCliForFantasia = "" ;
   this.ZV24ContaPagRecCliForFantasia = "" ;
   this.OV24ContaPagRecCliForFantasia = "" ;
   this.AV31ContaPagRecDocumento = "" ;
   this.ZV31ContaPagRecDocumento = "" ;
   this.OV31ContaPagRecDocumento = "" ;
   this.AV32ContaPagRecVlrAtualSemSinal = 0 ;
   this.ZV32ContaPagRecVlrAtualSemSinal = 0 ;
   this.OV32ContaPagRecVlrAtualSemSinal = 0 ;
   this.AV29ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.ZV29ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.OV29ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.AV30ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.ZV30ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.OV30ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.AV20Observacao = "" ;
   this.ZV20Observacao = "" ;
   this.OV20Observacao = "" ;
   this.AV33UsuarioSnPerm = "" ;
   this.ZV33UsuarioSnPerm = "" ;
   this.OV33UsuarioSnPerm = "" ;
   this.AV17ContaPagRecNumero = 0 ;
   this.AV28DescAceite = "" ;
   this.AV27DescSituacao = "" ;
   this.AV23ContaPagRecCliForId = 0 ;
   this.AV24ContaPagRecCliForFantasia = "" ;
   this.AV31ContaPagRecDocumento = "" ;
   this.AV32ContaPagRecVlrAtualSemSinal = 0 ;
   this.AV29ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.AV30ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.AV20Observacao = "" ;
   this.AV33UsuarioSnPerm = "" ;
   this.AV21ContaPagRecEmpresaId = "" ;
   this.AV25TipoAceite = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1697ContaPagRecObservacao = "" ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A1715ContaPagRecVlrPagamento = 0 ;
   this.A1714ContaPagRecVlrDesconto = 0 ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1712ContaPagRecVlrAcrescimo = 0 ;
   this.A2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.Events = {"e12b52_client": ["ENTER", true] ,"e13b52_client": ["'CANCELAR'", true] ,"e15b52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV22ContaPagRecObservacao',fld:'vCONTAPAGRECOBSERVACAO'},{av:'AV20Observacao',fld:'vOBSERVACAO'},{av:'AV33UsuarioSnPerm',fld:'vUSUARIOSNPERM'},{av:'AV21ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID',hsh:true},{av:'AV17ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO',hsh:true}],[]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A1712ContaPagRecVlrAcrescimo", "CONTAPAGRECVLRACRESCIMO", 0, "decimal");
   this.setVCMap("A1713ContaPagRecVlrConta", "CONTAPAGRECVLRCONTA", 0, "decimal");
   this.setVCMap("A1714ContaPagRecVlrDesconto", "CONTAPAGRECVLRDESCONTO", 0, "decimal");
   this.setVCMap("A1715ContaPagRecVlrPagamento", "CONTAPAGRECVLRPAGAMENTO", 0, "decimal");
   this.setVCMap("A2115ContaPagRecVlrAtualSemSinal", "CONTAPAGRECVLRATUALSEMSINAL", 0, "decimal");
   this.setVCMap("AV21ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV25TipoAceite", "vTIPOACEITE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hboxcontaobservacao());
