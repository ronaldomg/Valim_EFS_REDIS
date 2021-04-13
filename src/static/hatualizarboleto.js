/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:56:49.54
*/
gx.evt.autoSkip = false;
gx.define('hatualizarboleto', false, function () {
   this.ServerClass =  "hatualizarboleto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV10BoletoEmpresaId=gx.fn.getControlValue("vBOLETOEMPRESAID") ;
      this.AV11BoletoId=gx.fn.getIntegerValue("vBOLETOID",'.') ;
   };
   this.e1226m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1326m2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1626m2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e1726m2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,7,10,13,16,18,21,23,26,28,31,33,36,38,46,49,51,59,60,61,62];
   this.GXLastCtrlId =62;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TABLE3",grid:0};
   GXValidFnc[10]={fld:"TABLE5",grid:0};
   GXValidFnc[13]={fld:"TABLE2",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETONOSSONUMERO",gxz:"ZV13BoletoNossoNumero",gxold:"OV13BoletoNossoNumero",gxvar:"AV13BoletoNossoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13BoletoNossoNumero=Value},v2z:function(Value){gx.O.ZV13BoletoNossoNumero=Value},v2c:function(){gx.fn.setControlValue("vBOLETONOSSONUMERO",gx.O.AV13BoletoNossoNumero,0)},c2v:function(){gx.O.AV13BoletoNossoNumero=this.val()},val:function(){return gx.fn.getControlValue("vBOLETONOSSONUMERO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETONOMESACADO",gxz:"ZV12BoletoNomeSacado",gxold:"OV12BoletoNomeSacado",gxvar:"AV12BoletoNomeSacado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12BoletoNomeSacado=Value},v2z:function(Value){gx.O.ZV12BoletoNomeSacado=Value},v2c:function(){gx.fn.setControlValue("vBOLETONOMESACADO",gx.O.AV12BoletoNomeSacado,0)},c2v:function(){gx.O.AV12BoletoNomeSacado=this.val()},val:function(){return gx.fn.getControlValue("vBOLETONOMESACADO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETOVALORORIGINAL",gxz:"ZV15BoletoValorOriginal",gxold:"OV15BoletoValorOriginal",gxvar:"AV15BoletoValorOriginal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15BoletoValorOriginal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV15BoletoValorOriginal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vBOLETOVALORORIGINAL",gx.O.AV15BoletoValorOriginal,2,',')},c2v:function(){gx.O.AV15BoletoValorOriginal=this.val()},val:function(){return gx.fn.getDecimalValue("vBOLETOVALORORIGINAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETODATAVENCIMENTO",gxz:"ZV9BoletoDataVencimento",gxold:"OV9BoletoDataVencimento",gxvar:"AV9BoletoDataVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9BoletoDataVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9BoletoDataVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBOLETODATAVENCIMENTO",gx.O.AV9BoletoDataVencimento,0)},c2v:function(){gx.O.AV9BoletoDataVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBOLETODATAVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETOVENCIMENTONOVO",gxz:"ZV16BoletoVencimentoNovo",gxold:"OV16BoletoVencimentoNovo",gxvar:"AV16BoletoVencimentoNovo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16BoletoVencimentoNovo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV16BoletoVencimentoNovo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBOLETOVENCIMENTONOVO",gx.O.AV16BoletoVencimentoNovo,0)},c2v:function(){gx.O.AV16BoletoVencimentoNovo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBOLETOVENCIMENTONOVO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TABLE4",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBOLETOVALORCORRIGIDO",gxz:"ZV14BoletoValorCorrigido",gxold:"OV14BoletoValorCorrigido",gxvar:"AV14BoletoValorCorrigido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14BoletoValorCorrigido=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV14BoletoValorCorrigido=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vBOLETOVALORCORRIGIDO",gx.O.AV14BoletoValorCorrigido,2,',')},c2v:function(){gx.O.AV14BoletoValorCorrigido=this.val()},val:function(){return gx.fn.getDecimalValue("vBOLETOVALORCORRIGIDO",'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPTELA",gxz:"ZV21TpTela",gxold:"OV21TpTela",gxvar:"AV21TpTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21TpTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21TpTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPTELA",gx.O.AV21TpTela,0)},c2v:function(){gx.O.AV21TpTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPTELA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECEMPRESAID",gxz:"ZV5ContaPagRecEmpresaId",gxold:"OV5ContaPagRecEmpresaId",gxvar:"AV5ContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5ContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.ZV5ContaPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECEMPRESAID",gx.O.AV5ContaPagRecEmpresaId,0)},c2v:function(){gx.O.AV5ContaPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMERO",gxz:"ZV6ContaPagRecNumero",gxold:"OV6ContaPagRecNumero",gxvar:"AV6ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMERO",gx.O.AV6ContaPagRecNumero,0)},c2v:function(){gx.O.AV6ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   this.AV13BoletoNossoNumero = "" ;
   this.ZV13BoletoNossoNumero = "" ;
   this.OV13BoletoNossoNumero = "" ;
   this.AV12BoletoNomeSacado = "" ;
   this.ZV12BoletoNomeSacado = "" ;
   this.OV12BoletoNomeSacado = "" ;
   this.AV15BoletoValorOriginal = 0 ;
   this.ZV15BoletoValorOriginal = 0 ;
   this.OV15BoletoValorOriginal = 0 ;
   this.AV9BoletoDataVencimento = gx.date.nullDate() ;
   this.ZV9BoletoDataVencimento = gx.date.nullDate() ;
   this.OV9BoletoDataVencimento = gx.date.nullDate() ;
   this.AV16BoletoVencimentoNovo = gx.date.nullDate() ;
   this.ZV16BoletoVencimentoNovo = gx.date.nullDate() ;
   this.OV16BoletoVencimentoNovo = gx.date.nullDate() ;
   this.AV14BoletoValorCorrigido = 0 ;
   this.ZV14BoletoValorCorrigido = 0 ;
   this.OV14BoletoValorCorrigido = 0 ;
   this.AV21TpTela = 0 ;
   this.ZV21TpTela = 0 ;
   this.OV21TpTela = 0 ;
   this.AV5ContaPagRecEmpresaId = "" ;
   this.ZV5ContaPagRecEmpresaId = "" ;
   this.OV5ContaPagRecEmpresaId = "" ;
   this.AV6ContaPagRecNumero = 0 ;
   this.ZV6ContaPagRecNumero = 0 ;
   this.OV6ContaPagRecNumero = 0 ;
   this.AV13BoletoNossoNumero = "" ;
   this.AV12BoletoNomeSacado = "" ;
   this.AV15BoletoValorOriginal = 0 ;
   this.AV9BoletoDataVencimento = gx.date.nullDate() ;
   this.AV16BoletoVencimentoNovo = gx.date.nullDate() ;
   this.AV14BoletoValorCorrigido = 0 ;
   this.AV21TpTela = 0 ;
   this.AV5ContaPagRecEmpresaId = "" ;
   this.AV6ContaPagRecNumero = 0 ;
   this.AV10BoletoEmpresaId = "" ;
   this.AV11BoletoId = 0 ;
   this.A1853ContaPagRecBoletoId = 0 ;
   this.A1852ContaPagRecBoletoEmpId = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.Events = {"e1226m2_client": ["'FECHAR'", true] ,"e1326m2_client": ["ENTER", true] ,"e1626m2_client": ["'CANCELAR'", true] ,"e1726m2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV21TpTela',fld:'vTPTELA'}],[{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBOLETOVENCIMENTONOVO","Enabled")',ctrl:'vBOLETOVENCIMENTONOVO',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21TpTela',fld:'vTPTELA'},{av:'AV16BoletoVencimentoNovo',fld:'vBOLETOVENCIMENTONOVO'},{av:'Gx_date',fld:'vTODAY'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV26Udparg1',fld:'vUDPARG1'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'A1852ContaPagRecBoletoEmpId',fld:'CONTAPAGRECBOLETOEMPID'},{av:'AV10BoletoEmpresaId',fld:'vBOLETOEMPRESAID',hsh:true},{av:'A1853ContaPagRecBoletoId',fld:'CONTAPAGRECBOLETOID'},{av:'AV11BoletoId',fld:'vBOLETOID',hsh:true},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV14BoletoValorCorrigido',fld:'vBOLETOVALORCORRIGIDO'},{av:'AV15BoletoValorOriginal',fld:'vBOLETOVALORORIGINAL'},{av:'AV9BoletoDataVencimento',fld:'vBOLETODATAVENCIMENTO'},{av:'AV5ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV6ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'}],[{av:'AV17isErro',fld:'vISERRO'},{av:'AV7TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'AV25GXLvl43',fld:'vGXLVL43'},{av:'AV5ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV6ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV27GXLvl64',fld:'vGXLVL64'},{av:'AV21TpTela',fld:'vTPTELA'},{av:'Gx_date',fld:'vTODAY'},{av:'AV14BoletoValorCorrigido',fld:'vBOLETOVALORCORRIGIDO'}]];
   this.EvtParms["'CANCELAR'"] = [[],[{av:'AV21TpTela',fld:'vTPTELA'}]];
   this.EnterCtrl = ["BTNAVANCAR" ,"BTNCONFIRMAR"];
   this.setVCMap("AV10BoletoEmpresaId", "vBOLETOEMPRESAID", 0, "char");
   this.setVCMap("AV11BoletoId", "vBOLETOID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizarboleto());
