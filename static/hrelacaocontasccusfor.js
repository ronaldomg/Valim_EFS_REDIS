/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:1.25
*/
gx.evt.autoSkip = false;
gx.define('hrelacaocontasccusfor', false, function () {
   this.ServerClass =  "hrelacaocontasccusfor" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Contapagrecconvenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11lt2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13lt2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15lt2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16lt2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17lt2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19lt2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,30,32,35,37,39,41,44,46,49,51,53,55,58,60,62,65,67,70,72,74,76,79,81,84,86,88,91,93,96,98,100,103,105,108,110,112,115,117,120,121,123,125,126,129,131,132,133,136,138,141,143,145,154,155,156,157,159,161,162,163];
   this.GXLastCtrlId =163;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV64TxtTela",gxold:"OV64TxtTela",gxvar:"AV64TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV64TxtTela=Value},v2z:function(Value){gx.O.ZV64TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV64TxtTela)},c2v:function(){gx.O.AV64TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE2",grid:0};
   GXValidFnc[18]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREFERENCIA",gxz:"ZV20MesReferencia",gxold:"OV20MesReferencia",gxvar:"AV20MesReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20MesReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20MesReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREFERENCIA",gx.O.AV20MesReferencia,0)},c2v:function(){gx.O.AV20MesReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREFERENCIA",gxz:"ZV21AnoReferencia",gxold:"OV21AnoReferencia",gxvar:"AV21AnoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AnoReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21AnoReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREFERENCIA",gx.O.AV21AnoReferencia,0)},c2v:function(){gx.O.AV21AnoReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRCLIFORNNORMAL",gxz:"ZV52ImprimirCliFornNormal",gxold:"OV52ImprimirCliFornNormal",gxvar:"AV52ImprimirCliFornNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV52ImprimirCliFornNormal=Value},v2z:function(Value){gx.O.ZV52ImprimirCliFornNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRCLIFORNNORMAL",gx.O.AV52ImprimirCliFornNormal,"S")},c2v:function(){gx.O.AV52ImprimirCliFornNormal=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRCLIFORNNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[44]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[46]={fld:"TABLE5",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORIDINI",gxz:"ZV23ContaPagRecCliForIdIni",gxold:"OV23ContaPagRecCliForIdIni",gxvar:"AV23ContaPagRecCliForIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ContaPagRecCliForIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23ContaPagRecCliForIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORIDINI",gx.O.AV23ContaPagRecCliForIdIni,0)},c2v:function(){gx.O.AV23ContaPagRecCliForIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORIDFIM",gxz:"ZV24ContaPagRecCliForIdFim",gxold:"OV24ContaPagRecCliForIdFim",gxvar:"AV24ContaPagRecCliForIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ContaPagRecCliForIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24ContaPagRecCliForIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORIDFIM",gx.O.AV24ContaPagRecCliForIdFim,0)},c2v:function(){gx.O.AV24ContaPagRecCliForIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRCLIFORNCANCELADO",gxz:"ZV53ImprimirCliFornCancelado",gxold:"OV53ImprimirCliFornCancelado",gxvar:"AV53ImprimirCliFornCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV53ImprimirCliFornCancelado=Value},v2z:function(Value){gx.O.ZV53ImprimirCliFornCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRCLIFORNCANCELADO",gx.O.AV53ImprimirCliFornCancelado,"S")},c2v:function(){gx.O.AV53ImprimirCliFornCancelado=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRCLIFORNCANCELADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[58]={fld:"TEXTBLOCK56", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBASECNPJ",gxz:"ZV25BaseCNPJ",gxold:"OV25BaseCNPJ",gxvar:"AV25BaseCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25BaseCNPJ=Value},v2z:function(Value){gx.O.ZV25BaseCNPJ=Value},v2c:function(){gx.fn.setControlValue("vBASECNPJ",gx.O.AV25BaseCNPJ,0)},c2v:function(){gx.O.AV25BaseCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vBASECNPJ")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRIMIRCLIFORNSUSPENSO",gxz:"ZV54ImprimirCliFornSuspenso",gxold:"OV54ImprimirCliFornSuspenso",gxvar:"AV54ImprimirCliFornSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV54ImprimirCliFornSuspenso=Value},v2z:function(Value){gx.O.ZV54ImprimirCliFornSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPRIMIRCLIFORNSUSPENSO",gx.O.AV54ImprimirCliFornSuspenso,"S")},c2v:function(){gx.O.AV54ImprimirCliFornSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vIMPRIMIRCLIFORNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[65]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[67]={fld:"TABLE6",grid:0};
   GXValidFnc[70]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAOINI",gxz:"ZV26ContaPagRecDtEmissaoIni",gxold:"OV26ContaPagRecDtEmissaoIni",gxvar:"AV26ContaPagRecDtEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAOINI",gx.O.AV26ContaPagRecDtEmissaoIni,0)},c2v:function(){gx.O.AV26ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOINI")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAOFIM",gxz:"ZV27ContaPagRecDtEmissaoFim",gxold:"OV27ContaPagRecDtEmissaoFim",gxvar:"AV27ContaPagRecDtEmissaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAOFIM",gx.O.AV27ContaPagRecDtEmissaoFim,0)},c2v:function(){gx.O.AV27ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOFIM")},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERACSV",gxz:"ZV46GeraCSV",gxold:"OV46GeraCSV",gxvar:"AV46GeraCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV46GeraCSV=Value},v2z:function(Value){gx.O.ZV46GeraCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERACSV",gx.O.AV46GeraCSV,"S")},c2v:function(){gx.O.AV46GeraCSV=this.val()},val:function(){return gx.fn.getControlValue("vGERACSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[79]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[81]={fld:"TABLE8",grid:0};
   GXValidFnc[84]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTOINI",gxz:"ZV28ContaPagRecDtVencimentoIni",gxold:"OV28ContaPagRecDtVencimentoIni",gxvar:"AV28ContaPagRecDtVencimentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTOINI",gx.O.AV28ContaPagRecDtVencimentoIni,0)},c2v:function(){gx.O.AV28ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTOINI")},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTOFIM",gxz:"ZV29ContaPagRecDtVencimentoFim",gxold:"OV29ContaPagRecDtVencimentoFim",gxvar:"AV29ContaPagRecDtVencimentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTOFIM",gx.O.AV29ContaPagRecDtVencimentoFim,0)},c2v:function(){gx.O.AV29ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTOFIM")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[93]={fld:"TABLE9",grid:0};
   GXValidFnc[96]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTPAGAMENTOINI",gxz:"ZV30ContaPagRecDtPagamentoIni",gxold:"OV30ContaPagRecDtPagamentoIni",gxvar:"AV30ContaPagRecDtPagamentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ContaPagRecDtPagamentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30ContaPagRecDtPagamentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTPAGAMENTOINI",gx.O.AV30ContaPagRecDtPagamentoIni,0)},c2v:function(){gx.O.AV30ContaPagRecDtPagamentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTPAGAMENTOINI")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTPAGAMENTOFIM",gxz:"ZV31ContaPagRecDtPagamentoFim",gxold:"OV31ContaPagRecDtPagamentoFim",gxvar:"AV31ContaPagRecDtPagamentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ContaPagRecDtPagamentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31ContaPagRecDtPagamentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTPAGAMENTOFIM",gx.O.AV31ContaPagRecDtPagamentoFim,0)},c2v:function(){gx.O.AV31ContaPagRecDtPagamentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTPAGAMENTOFIM")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[105]={fld:"TABLE10",grid:0};
   GXValidFnc[108]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTACEITEINI",gxz:"ZV32ContaPagRecDtAceiteIni",gxold:"OV32ContaPagRecDtAceiteIni",gxvar:"AV32ContaPagRecDtAceiteIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ContaPagRecDtAceiteIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32ContaPagRecDtAceiteIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTACEITEINI",gx.O.AV32ContaPagRecDtAceiteIni,0)},c2v:function(){gx.O.AV32ContaPagRecDtAceiteIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTACEITEINI")},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTACEITEFIM",gxz:"ZV33ContaPagRecDtAceiteFim",gxold:"OV33ContaPagRecDtAceiteFim",gxvar:"AV33ContaPagRecDtAceiteFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ContaPagRecDtAceiteFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33ContaPagRecDtAceiteFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTACEITEFIM",gx.O.AV33ContaPagRecDtAceiteFim,0)},c2v:function(){gx.O.AV33ContaPagRecDtAceiteFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTACEITEFIM")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TEXTBLOCK107", format:0,grid:0};
   GXValidFnc[117]={fld:"TABLE11",grid:0};
   GXValidFnc[120]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCCONTABILIDINI",gxz:"ZV36ContaPagRecCContabilIdIni",gxold:"OV36ContaPagRecCContabilIdIni",gxvar:"AV36ContaPagRecCContabilIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ContaPagRecCContabilIdIni=Value},v2z:function(Value){gx.O.ZV36ContaPagRecCContabilIdIni=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCCONTABILIDINI",gx.O.AV36ContaPagRecCContabilIdIni,0)},c2v:function(){gx.O.AV36ContaPagRecCContabilIdIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCCONTABILIDINI")},nac:gx.falseFn};
   GXValidFnc[121]={fld:"IMGCCONT1",grid:0};
   GXValidFnc[123]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCCONTABILIDFIM",gxz:"ZV37ContaPagRecCContabilIdFim",gxold:"OV37ContaPagRecCContabilIdFim",gxvar:"AV37ContaPagRecCContabilIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ContaPagRecCContabilIdFim=Value},v2z:function(Value){gx.O.ZV37ContaPagRecCContabilIdFim=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCCONTABILIDFIM",gx.O.AV37ContaPagRecCContabilIdFim,0)},c2v:function(){gx.O.AV37ContaPagRecCContabilIdFim=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCCONTABILIDFIM")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"IMGCCONT2",grid:0};
   GXValidFnc[129]={fld:"TXTCONVENIO", format:0,grid:0};
   GXValidFnc[131]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecconvenioid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCONVENIOID",gxz:"ZV47ContaPagRecConvenioId",gxold:"OV47ContaPagRecConvenioId",gxvar:"AV47ContaPagRecConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ContaPagRecConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47ContaPagRecConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCONVENIOID",gx.O.AV47ContaPagRecConvenioId,0)},c2v:function(){gx.O.AV47ContaPagRecConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCONVENIODESCRICAO",gxz:"ZV48ContaPagRecConvenioDescricao",gxold:"OV48ContaPagRecConvenioDescricao",gxvar:"AV48ContaPagRecConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48ContaPagRecConvenioDescricao=Value},v2z:function(Value){gx.O.ZV48ContaPagRecConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCONVENIODESCRICAO",gx.O.AV48ContaPagRecConvenioDescricao,0)},c2v:function(){gx.O.AV48ContaPagRecConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[133]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioempresaid,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV51ConvenioEmpresaId",gxold:"OV51ConvenioEmpresaId",gxvar:"AV51ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV51ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV51ConvenioEmpresaId,0)},c2v:function(){gx.O.AV51ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[136]={fld:"TXTPROCESSOANO", format:0,grid:0};
   GXValidFnc[138]={fld:"TABLE12",grid:0};
   GXValidFnc[141]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNOPROCESSO",gxz:"ZV34ContaPagRecNoProcesso",gxold:"OV34ContaPagRecNoProcesso",gxvar:"AV34ContaPagRecNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ContaPagRecNoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34ContaPagRecNoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNOPROCESSO",gx.O.AV34ContaPagRecNoProcesso,0)},c2v:function(){gx.O.AV34ContaPagRecNoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[143]={fld:"TXTBARRA", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECANOPROCESSO",gxz:"ZV35ContaPagRecAnoProcesso",gxold:"OV35ContaPagRecAnoProcesso",gxvar:"AV35ContaPagRecAnoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ContaPagRecAnoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35ContaPagRecAnoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECANOPROCESSO",gx.O.AV35ContaPagRecAnoProcesso,0)},c2v:function(){gx.O.AV35ContaPagRecAnoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECANOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[154]={fld:"JS", format:2,grid:0};
   GXValidFnc[155]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV38ChamaOnBlurMascara",gxold:"OV38ChamaOnBlurMascara",gxvar:"AV38ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV38ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV38ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV38ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[156]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORFINAL",gxz:"ZV44TradutorFinal",gxold:"OV44TradutorFinal",gxvar:"AV44TradutorFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44TradutorFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44TradutorFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORFINAL",gx.O.AV44TradutorFinal,0)},c2v:function(){gx.O.AV44TradutorFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[157]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORINICIAL",gxz:"ZV43TradutorInicial",gxold:"OV43TradutorInicial",gxvar:"AV43TradutorInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43TradutorInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43TradutorInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORINICIAL",gx.O.AV43TradutorInicial,0)},c2v:function(){gx.O.AV43TradutorInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[159]={fld:"BTNHELP",grid:0};
   GXValidFnc[161]={fld:"PROMPT_CONTAPAGRECCLIFORIDINI",grid:0};
   GXValidFnc[162]={fld:"PROMPT_CONTAPAGRECCLIFORIDFIM",grid:0};
   GXValidFnc[163]={fld:"PROMPT_CONTAPAGRECCONVENIOID",grid:0};
   this.AV64TxtTela = "" ;
   this.ZV64TxtTela = "" ;
   this.OV64TxtTela = "" ;
   this.AV20MesReferencia = 0 ;
   this.ZV20MesReferencia = 0 ;
   this.OV20MesReferencia = 0 ;
   this.AV21AnoReferencia = 0 ;
   this.ZV21AnoReferencia = 0 ;
   this.OV21AnoReferencia = 0 ;
   this.AV52ImprimirCliFornNormal = "" ;
   this.ZV52ImprimirCliFornNormal = "" ;
   this.OV52ImprimirCliFornNormal = "" ;
   this.AV23ContaPagRecCliForIdIni = 0 ;
   this.ZV23ContaPagRecCliForIdIni = 0 ;
   this.OV23ContaPagRecCliForIdIni = 0 ;
   this.AV24ContaPagRecCliForIdFim = 0 ;
   this.ZV24ContaPagRecCliForIdFim = 0 ;
   this.OV24ContaPagRecCliForIdFim = 0 ;
   this.AV53ImprimirCliFornCancelado = "" ;
   this.ZV53ImprimirCliFornCancelado = "" ;
   this.OV53ImprimirCliFornCancelado = "" ;
   this.AV25BaseCNPJ = "" ;
   this.ZV25BaseCNPJ = "" ;
   this.OV25BaseCNPJ = "" ;
   this.AV54ImprimirCliFornSuspenso = "" ;
   this.ZV54ImprimirCliFornSuspenso = "" ;
   this.OV54ImprimirCliFornSuspenso = "" ;
   this.AV26ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.ZV26ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.OV26ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV27ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.ZV27ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.OV27ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV46GeraCSV = "" ;
   this.ZV46GeraCSV = "" ;
   this.OV46GeraCSV = "" ;
   this.AV28ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.ZV28ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.OV28ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.AV29ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.ZV29ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.OV29ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.AV30ContaPagRecDtPagamentoIni = gx.date.nullDate() ;
   this.ZV30ContaPagRecDtPagamentoIni = gx.date.nullDate() ;
   this.OV30ContaPagRecDtPagamentoIni = gx.date.nullDate() ;
   this.AV31ContaPagRecDtPagamentoFim = gx.date.nullDate() ;
   this.ZV31ContaPagRecDtPagamentoFim = gx.date.nullDate() ;
   this.OV31ContaPagRecDtPagamentoFim = gx.date.nullDate() ;
   this.AV32ContaPagRecDtAceiteIni = gx.date.nullDate() ;
   this.ZV32ContaPagRecDtAceiteIni = gx.date.nullDate() ;
   this.OV32ContaPagRecDtAceiteIni = gx.date.nullDate() ;
   this.AV33ContaPagRecDtAceiteFim = gx.date.nullDate() ;
   this.ZV33ContaPagRecDtAceiteFim = gx.date.nullDate() ;
   this.OV33ContaPagRecDtAceiteFim = gx.date.nullDate() ;
   this.AV36ContaPagRecCContabilIdIni = "" ;
   this.ZV36ContaPagRecCContabilIdIni = "" ;
   this.OV36ContaPagRecCContabilIdIni = "" ;
   this.AV37ContaPagRecCContabilIdFim = "" ;
   this.ZV37ContaPagRecCContabilIdFim = "" ;
   this.OV37ContaPagRecCContabilIdFim = "" ;
   this.AV47ContaPagRecConvenioId = 0 ;
   this.ZV47ContaPagRecConvenioId = 0 ;
   this.OV47ContaPagRecConvenioId = 0 ;
   this.AV48ContaPagRecConvenioDescricao = "" ;
   this.ZV48ContaPagRecConvenioDescricao = "" ;
   this.OV48ContaPagRecConvenioDescricao = "" ;
   this.AV51ConvenioEmpresaId = "" ;
   this.ZV51ConvenioEmpresaId = "" ;
   this.OV51ConvenioEmpresaId = "" ;
   this.AV34ContaPagRecNoProcesso = 0 ;
   this.ZV34ContaPagRecNoProcesso = 0 ;
   this.OV34ContaPagRecNoProcesso = 0 ;
   this.AV35ContaPagRecAnoProcesso = 0 ;
   this.ZV35ContaPagRecAnoProcesso = 0 ;
   this.OV35ContaPagRecAnoProcesso = 0 ;
   this.AV38ChamaOnBlurMascara = "" ;
   this.ZV38ChamaOnBlurMascara = "" ;
   this.OV38ChamaOnBlurMascara = "" ;
   this.AV44TradutorFinal = 0 ;
   this.ZV44TradutorFinal = 0 ;
   this.OV44TradutorFinal = 0 ;
   this.AV43TradutorInicial = 0 ;
   this.ZV43TradutorInicial = 0 ;
   this.OV43TradutorInicial = 0 ;
   this.AV64TxtTela = "" ;
   this.AV20MesReferencia = 0 ;
   this.AV21AnoReferencia = 0 ;
   this.AV52ImprimirCliFornNormal = "" ;
   this.AV23ContaPagRecCliForIdIni = 0 ;
   this.AV24ContaPagRecCliForIdFim = 0 ;
   this.AV53ImprimirCliFornCancelado = "" ;
   this.AV25BaseCNPJ = "" ;
   this.AV54ImprimirCliFornSuspenso = "" ;
   this.AV26ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV27ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV46GeraCSV = "" ;
   this.AV28ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.AV29ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.AV30ContaPagRecDtPagamentoIni = gx.date.nullDate() ;
   this.AV31ContaPagRecDtPagamentoFim = gx.date.nullDate() ;
   this.AV32ContaPagRecDtAceiteIni = gx.date.nullDate() ;
   this.AV33ContaPagRecDtAceiteFim = gx.date.nullDate() ;
   this.AV36ContaPagRecCContabilIdIni = "" ;
   this.AV37ContaPagRecCContabilIdFim = "" ;
   this.AV47ContaPagRecConvenioId = 0 ;
   this.AV48ContaPagRecConvenioDescricao = "" ;
   this.AV51ConvenioEmpresaId = "" ;
   this.AV34ContaPagRecNoProcesso = 0 ;
   this.AV35ContaPagRecAnoProcesso = 0 ;
   this.AV38ChamaOnBlurMascara = "" ;
   this.AV44TradutorFinal = 0 ;
   this.AV43TradutorInicial = 0 ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.Events = {"e11lt2_client": ["'FECHAR'", true] ,"e13lt2_client": ["ENTER", true] ,"e15lt2_client": ["'SALVARTXT'", true] ,"e16lt2_client": ["VTXTTELA.CLICK", true] ,"e17lt2_client": ["'EXCLUIRTXT'", true] ,"e19lt2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV84Pgmname',fld:'vPGMNAME'},{av:'AV80SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV64TxtTela',fld:'vTXTTELA'}],[{av:'AV64TxtTela',fld:'vTXTTELA'},{av:'AV88GXV2',fld:'vGXV2'},{av:'AV81SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV87GXV1',fld:'vGXV1'},{av:'AV52ImprimirCliFornNormal',fld:'vIMPRIMIRCLIFORNNORMAL'},{av:'AV53ImprimirCliFornCancelado',fld:'vIMPRIMIRCLIFORNCANCELADO'},{av:'AV54ImprimirCliFornSuspenso',fld:'vIMPRIMIRCLIFORNSUSPENSO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20MesReferencia',fld:'vMESREFERENCIA'},{av:'AV21AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV23ContaPagRecCliForIdIni',fld:'vCONTAPAGRECCLIFORIDINI'},{av:'AV24ContaPagRecCliForIdFim',fld:'vCONTAPAGRECCLIFORIDFIM'},{av:'AV26ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV27ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV28ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV29ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'AV30ContaPagRecDtPagamentoIni',fld:'vCONTAPAGRECDTPAGAMENTOINI'},{av:'AV31ContaPagRecDtPagamentoFim',fld:'vCONTAPAGRECDTPAGAMENTOFIM'},{av:'AV32ContaPagRecDtAceiteIni',fld:'vCONTAPAGRECDTACEITEINI'},{av:'AV33ContaPagRecDtAceiteFim',fld:'vCONTAPAGRECDTACEITEFIM'},{av:'AV36ContaPagRecCContabilIdIni',fld:'vCONTAPAGRECCCONTABILIDINI'},{av:'AV37ContaPagRecCContabilIdFim',fld:'vCONTAPAGRECCCONTABILIDFIM'},{av:'AV47ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV51ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'AV34ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV35ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'AV64TxtTela',fld:'vTXTTELA'},{av:'AV84Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV25BaseCNPJ',fld:'vBASECNPJ'},{av:'AV46GeraCSV',fld:'vGERACSV'},{av:'AV52ImprimirCliFornNormal',fld:'vIMPRIMIRCLIFORNNORMAL'},{av:'AV53ImprimirCliFornCancelado',fld:'vIMPRIMIRCLIFORNCANCELADO'},{av:'AV54ImprimirCliFornSuspenso',fld:'vIMPRIMIRCLIFORNSUSPENSO'},{av:'AV85Pgmdesc',fld:'vPGMDESC'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV22tpErro',fld:'vTPERRO'},{av:'AV86GXLvl134',fld:'vGXLVL134'},{av:'AV48ContaPagRecConvenioDescricao',fld:'vCONTAPAGRECCONVENIODESCRICAO'},{av:'AV76SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV54ImprimirCliFornSuspenso',fld:'vIMPRIMIRCLIFORNSUSPENSO'},{av:'AV53ImprimirCliFornCancelado',fld:'vIMPRIMIRCLIFORNCANCELADO'},{av:'AV52ImprimirCliFornNormal',fld:'vIMPRIMIRCLIFORNNORMAL'},{av:'AV46GeraCSV',fld:'vGERACSV'},{av:'AV35ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'AV34ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV47ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'AV37ContaPagRecCContabilIdFim',fld:'vCONTAPAGRECCCONTABILIDFIM'},{av:'AV36ContaPagRecCContabilIdIni',fld:'vCONTAPAGRECCCONTABILIDINI'},{av:'AV33ContaPagRecDtAceiteFim',fld:'vCONTAPAGRECDTACEITEFIM'},{av:'AV32ContaPagRecDtAceiteIni',fld:'vCONTAPAGRECDTACEITEINI'},{av:'AV31ContaPagRecDtPagamentoFim',fld:'vCONTAPAGRECDTPAGAMENTOFIM'},{av:'AV30ContaPagRecDtPagamentoIni',fld:'vCONTAPAGRECDTPAGAMENTOINI'},{av:'AV29ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'AV28ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV27ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV26ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV25BaseCNPJ',fld:'vBASECNPJ'},{av:'AV24ContaPagRecCliForIdFim',fld:'vCONTAPAGRECCLIFORIDFIM'},{av:'AV23ContaPagRecCliForIdIni',fld:'vCONTAPAGRECCLIFORIDINI'},{av:'AV21AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV20MesReferencia',fld:'vMESREFERENCIA'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV79OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV64TxtTela',fld:'vTXTTELA'},{av:'AV84Pgmname',fld:'vPGMNAME'},{av:'AV52ImprimirCliFornNormal',fld:'vIMPRIMIRCLIFORNNORMAL'},{av:'AV53ImprimirCliFornCancelado',fld:'vIMPRIMIRCLIFORNCANCELADO'},{av:'AV54ImprimirCliFornSuspenso',fld:'vIMPRIMIRCLIFORNSUSPENSO'}],[{av:'AV79OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV84Pgmname',fld:'vPGMNAME'},{av:'AV80SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV64TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV87GXV1',fld:'vGXV1'},{av:'AV81SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV52ImprimirCliFornNormal',fld:'vIMPRIMIRCLIFORNNORMAL'},{av:'AV53ImprimirCliFornCancelado',fld:'vIMPRIMIRCLIFORNCANCELADO'},{av:'AV54ImprimirCliFornSuspenso',fld:'vIMPRIMIRCLIFORNSUSPENSO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV84Pgmname',fld:'vPGMNAME'},{av:'AV64TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("IMGCCONT1", [120,157]);
   this.setPrompt("PROMPT_CONTAPAGRECCLIFORIDINI", [49]);
   this.setPrompt("PROMPT_CONTAPAGRECCLIFORIDFIM", [53]);
   this.setPrompt("IMGCCONT2", [125,156]);
   this.setPrompt("PROMPT_CONTAPAGRECCONVENIOID", [131]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaocontasccusfor());
