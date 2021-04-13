/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:0:42.18
*/
gx.evt.autoSkip = false;
gx.define('hconsultardadosremessa', false, function () {
   this.ServerClass =  "hconsultardadosremessa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A1686ContaPagRecNumero=gx.fn.getIntegerValue("CONTAPAGRECNUMERO",'.') ;
      this.A1685ContaPagRecEmpresaId=gx.fn.getControlValue("CONTAPAGRECEMPRESAID") ;
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1693ContaPagRecPagRec=gx.fn.getControlValue("CONTAPAGRECPAGREC") ;
      this.A1637ContaPagRecCliForId=gx.fn.getIntegerValue("CONTAPAGRECCLIFORID",'.') ;
      this.A1687ContaPagRecConvenioEmpId=gx.fn.getControlValue("CONTAPAGRECCONVENIOEMPID") ;
      this.A1688ContaPagRecConvenioId=gx.fn.getIntegerValue("CONTAPAGRECCONVENIOID",'.') ;
      this.A1640ContaPagRecEspecieId=gx.fn.getIntegerValue("CONTAPAGRECESPECIEID",'.') ;
      this.A1695ContaPagRecDocumento=gx.fn.getControlValue("CONTAPAGRECDOCUMENTO") ;
      this.A1696ContaPagRecSeqDocume=gx.fn.getControlValue("CONTAPAGRECSEQDOCUME") ;
      this.A1966ContaPagRecNoProcesso=gx.fn.getIntegerValue("CONTAPAGRECNOPROCESSO",'.') ;
      this.A2005ContaPagRecAnoProcesso=gx.fn.getIntegerValue("CONTAPAGRECANOPROCESSO",'.') ;
      this.A1701ContaPagRecDtVencimento=gx.fn.getDateValue("CONTAPAGRECDTVENCIMENTO") ;
      this.A1699ContaPagRecDtEmissao=gx.fn.getDateValue("CONTAPAGRECDTEMISSAO") ;
      this.A6623ContaPagRecDtPgtoFornec=gx.fn.getDateValue("CONTAPAGRECDTPGTOFORNEC") ;
      this.A6622ContaPagRecDataDebito=gx.fn.getDateValue("CONTAPAGRECDATADEBITO") ;
      this.A1692ContaPagRecSituacao=gx.fn.getControlValue("CONTAPAGRECSITUACAO") ;
      this.A5440ContaPagRecTipoPagmto=gx.fn.getControlValue("CONTAPAGRECTIPOPAGMTO") ;
      this.A1638ContaPagRecCliForFantasia=gx.fn.getControlValue("CONTAPAGRECCLIFORFANTASIA") ;
   };
   this.Validv_Contapagreccliforid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECCLIFORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contapagrecespecieid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECESPECIEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
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
   this.Validv_Contapagrecnoprocesso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECNOPROCESSO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contapagrecanoprocesso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECANOPROCESSO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contapagrecconvenioempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECCONVENIOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Especieempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vESPECIEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12w22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11w22_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e18w22_client=function()
   {
      this.executeServerEvent("'DADOSREMESSA'", true, arguments[0], false, false);
   };
   this.e13w22_client=function()
   {
      this.executeServerEvent("'LIMPARDADOS'", false, null, false, false);
   };
   this.e14w22_client=function()
   {
      this.executeServerEvent("'REGISTRAR'", false, null, false, false);
   };
   this.e15w22_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e16w22_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e21w22_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,24,25,28,30,33,35,37,39,41,42,45,47,50,52,54,56,58,61,63,65,68,70,73,75,77,79,81,84,86,88,90,93,95,96,97,99,101,104,105,106,107,120,122,123,124,125,126,127,128,129,130,131,134,140,143,144,146,147,148,149,154,155,156,157];
   this.GXLastCtrlId =157;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",121,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultardadosremessa",[],false,1,true,true,0,true,false,false,"CollSdtConsultarDadosRemessa.SdtConsultarDadosRemessaItem",0,"px","Novo registro",true,false,false,null,null,false,"AV82SdtConsultarDadosRemessa",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV13E",122,"CTLCONTAPAGRECNUMERO","No.Conta","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],"GXV13E","GXV13E",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV13F",123,"CTLCONTAPAGRECCLIFORFANTASIA","Fornecedor","","ContaPagRecCliForFantasia","svchar",0,"px",60,60,"left",null,[],"GXV13F","GXV13F",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV13G",124,"CTLCONTAPAGRECDOCUMENTO","Doc./Seq.","","ContaPagRecDocumento","svchar",0,"px",24,24,"left",null,[],"GXV13G","GXV13G",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV13H",125,"CTLCONTAPAGRECDTEMISSAO","Emissão","","ContaPagRecDtEmissao","date",0,"px",10,10,"right",null,[],"GXV13H","GXV13H",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV13I",126,"CTLCONTAPAGRECDTVENCIMENTO","Vencimento","","ContaPagRecDtVencimento","date",0,"px",10,10,"right",null,[],"GXV13I","GXV13I",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV13J",127,"CTLCONTAPAGRECVLRATUALSEMSINAL","Valor","","ContaPagRecVlrAtualSemSinal","decimal",0,"px",22,22,"right",null,[],"GXV13J","GXV13J",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV13K",128,"CTLCONTAPAGRECTIPOPAGMTO","Tipo de Pagamento","","ContaPagRecTipoPagmto","char",0,"px",1,1,"left",null,[],"GXV13K","GXV13K",false,0,false,false,"Attribute",1,"");
   GridContainer.addCheckBox("GXV13L",129,"CTLSNMARCADO","Marcar","","SNMarcado","char","S","N",null,true,false,0,"px","GridColumnImage");
   GridContainer.addBitmap("&Bmpdadosrem","vBMPDADOSREM",130,0,"px",17,"px","e18w22_client","","Remessa","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE7",grid:0};
   GXValidFnc[5]={fld:"TABFILTRO",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTOINI",gxz:"ZV67ContaPagRecDtVencimentoIni",gxold:"OV67ContaPagRecDtVencimentoIni",gxvar:"AV67ContaPagRecDtVencimentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV67ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTOINI",gx.O.AV67ContaPagRecDtVencimentoIni,0)},c2v:function(){gx.O.AV67ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTOINI")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTOFIM",gxz:"ZV68ContaPagRecDtVencimentoFim",gxold:"OV68ContaPagRecDtVencimentoFim",gxvar:"AV68ContaPagRecDtVencimentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV68ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTOFIM",gx.O.AV68ContaPagRecDtVencimentoFim,0)},c2v:function(){gx.O.AV68ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTOFIM")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagreccliforid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORID",gxz:"ZV72ContaPagRecCliForId",gxold:"OV72ContaPagRecCliForId",gxvar:"AV72ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORID",gx.O.AV72ContaPagRecCliForId,0)},c2v:function(){gx.O.AV72ContaPagRecCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORFANTASIA",gxz:"ZV73ContaPagRecCliForFantasia",gxold:"OV73ContaPagRecCliForFantasia",gxvar:"AV73ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.ZV73ContaPagRecCliForFantasia=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORFANTASIA",gx.O.AV73ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.AV73ContaPagRecCliForFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCLIFORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLE11",grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAOINI",gxz:"ZV69ContaPagRecDtEmissaoIni",gxold:"OV69ContaPagRecDtEmissaoIni",gxvar:"AV69ContaPagRecDtEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV69ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAOINI",gx.O.AV69ContaPagRecDtEmissaoIni,0)},c2v:function(){gx.O.AV69ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOINI")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAOFIM",gxz:"ZV70ContaPagRecDtEmissaoFim",gxold:"OV70ContaPagRecDtEmissaoFim",gxvar:"AV70ContaPagRecDtEmissaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV70ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAOFIM",gx.O.AV70ContaPagRecDtEmissaoFim,0)},c2v:function(){gx.O.AV70ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOFIM")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecespecieid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECESPECIEID",gxz:"ZV75ContaPagRecEspecieId",gxold:"OV75ContaPagRecEspecieId",gxvar:"AV75ContaPagRecEspecieId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75ContaPagRecEspecieId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV75ContaPagRecEspecieId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECESPECIEID",gx.O.AV75ContaPagRecEspecieId,0)},c2v:function(){gx.O.AV75ContaPagRecEspecieId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECESPECIEID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECESPECIEDESCRICAO",gxz:"ZV76ContaPagRecEspecieDescricao",gxold:"OV76ContaPagRecEspecieDescricao",gxvar:"AV76ContaPagRecEspecieDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76ContaPagRecEspecieDescricao=Value},v2z:function(Value){gx.O.ZV76ContaPagRecEspecieDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECESPECIEDESCRICAO",gx.O.AV76ContaPagRecEspecieDescricao,0)},c2v:function(){gx.O.AV76ContaPagRecEspecieDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECESPECIEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[47]={fld:"TABLE12",grid:0};
   GXValidFnc[50]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTPGTOFORNECINI",gxz:"ZV107ContaPagRecDtPgtoFornecIni",gxold:"OV107ContaPagRecDtPgtoFornecIni",gxvar:"AV107ContaPagRecDtPgtoFornecIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107ContaPagRecDtPgtoFornecIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV107ContaPagRecDtPgtoFornecIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTPGTOFORNECINI",gx.O.AV107ContaPagRecDtPgtoFornecIni,0)},c2v:function(){gx.O.AV107ContaPagRecDtPgtoFornecIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTPGTOFORNECINI")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTPGTOFORNECFIM",gxz:"ZV108ContaPagRecDtPgtoFornecFim",gxold:"OV108ContaPagRecDtPgtoFornecFim",gxvar:"AV108ContaPagRecDtPgtoFornecFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108ContaPagRecDtPgtoFornecFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV108ContaPagRecDtPgtoFornecFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTPGTOFORNECFIM",gx.O.AV108ContaPagRecDtPgtoFornecFim,0)},c2v:function(){gx.O.AV108ContaPagRecDtPgtoFornecFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTPGTOFORNECFIM")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[58]={fld:"TABLE9",grid:0};
   GXValidFnc[61]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCUMENTO",gxz:"ZV78ContaPagRecDocumento",gxold:"OV78ContaPagRecDocumento",gxvar:"AV78ContaPagRecDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78ContaPagRecDocumento=Value},v2z:function(Value){gx.O.ZV78ContaPagRecDocumento=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDOCUMENTO",gx.O.AV78ContaPagRecDocumento,0)},c2v:function(){gx.O.AV78ContaPagRecDocumento=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECSEQDOCUME",gxz:"ZV95ContaPagRecSeqDocume",gxold:"OV95ContaPagRecSeqDocume",gxvar:"AV95ContaPagRecSeqDocume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95ContaPagRecSeqDocume=Value},v2z:function(Value){gx.O.ZV95ContaPagRecSeqDocume=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECSEQDOCUME",gx.O.AV95ContaPagRecSeqDocume,0)},c2v:function(){gx.O.AV95ContaPagRecSeqDocume=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECSEQDOCUME")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[70]={fld:"TABLE13",grid:0};
   GXValidFnc[73]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDATADEBITOINI",gxz:"ZV105ContaPagRecDataDebitoIni",gxold:"OV105ContaPagRecDataDebitoIni",gxvar:"AV105ContaPagRecDataDebitoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105ContaPagRecDataDebitoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV105ContaPagRecDataDebitoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDATADEBITOINI",gx.O.AV105ContaPagRecDataDebitoIni,0)},c2v:function(){gx.O.AV105ContaPagRecDataDebitoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDATADEBITOINI")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDATADEBITOFIM",gxz:"ZV106ContaPagRecDataDebitoFim",gxold:"OV106ContaPagRecDataDebitoFim",gxvar:"AV106ContaPagRecDataDebitoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106ContaPagRecDataDebitoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV106ContaPagRecDataDebitoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDATADEBITOFIM",gx.O.AV106ContaPagRecDataDebitoFim,0)},c2v:function(){gx.O.AV106ContaPagRecDataDebitoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDATADEBITOFIM")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDADOSREMESSA",gxz:"ZV79DadosRemessa",gxold:"OV79DadosRemessa",gxvar:"AV79DadosRemessa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV79DadosRemessa=Value},v2z:function(Value){gx.O.ZV79DadosRemessa=Value},v2c:function(){gx.fn.setComboBoxValue("vDADOSREMESSA",gx.O.AV79DadosRemessa)},c2v:function(){gx.O.AV79DadosRemessa=this.val()},val:function(){return gx.fn.getControlValue("vDADOSREMESSA")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecnumero,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMERO",gxz:"ZV93ContaPagRecNumero",gxold:"OV93ContaPagRecNumero",gxvar:"AV93ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMERO",gx.O.AV93ContaPagRecNumero,0)},c2v:function(){gx.O.AV93ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECSITUACAO",gxz:"ZV102ContaPagRecSituacao",gxold:"OV102ContaPagRecSituacao",gxvar:"AV102ContaPagRecSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV102ContaPagRecSituacao=Value},v2z:function(Value){gx.O.ZV102ContaPagRecSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTAPAGRECSITUACAO",gx.O.AV102ContaPagRecSituacao)},c2v:function(){gx.O.AV102ContaPagRecSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECSITUACAO")},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TXTCONVENIO", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecconvenioid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCONVENIOID",gxz:"ZV100ContaPagRecConvenioId",gxold:"OV100ContaPagRecConvenioId",gxvar:"AV100ContaPagRecConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100ContaPagRecConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV100ContaPagRecConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCONVENIOID",gx.O.AV100ContaPagRecConvenioId,0)},c2v:function(){gx.O.AV100ContaPagRecConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[96]={fld:"PROMPTCONVENIO",grid:0};
   GXValidFnc[97]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCONVENIODESC",gxz:"ZV101ContaPagRecConvenioDesc",gxold:"OV101ContaPagRecConvenioDesc",gxvar:"AV101ContaPagRecConvenioDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101ContaPagRecConvenioDesc=Value},v2z:function(Value){gx.O.ZV101ContaPagRecConvenioDesc=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCONVENIODESC",gx.O.AV101ContaPagRecConvenioDesc,0)},c2v:function(){gx.O.AV101ContaPagRecConvenioDesc=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCONVENIODESC")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TXTNOPROCESSO", format:0,grid:0};
   GXValidFnc[101]={fld:"TABLE14",grid:0};
   GXValidFnc[104]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecnoprocesso,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNOPROCESSO",gxz:"ZV97ContaPagRecNoProcesso",gxold:"OV97ContaPagRecNoProcesso",gxvar:"AV97ContaPagRecNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97ContaPagRecNoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV97ContaPagRecNoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNOPROCESSO",gx.O.AV97ContaPagRecNoProcesso,0)},c2v:function(){gx.O.AV97ContaPagRecNoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[105]={fld:"TXTNOPROCESSOBARRA", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecanoprocesso,isvalid:null,rgrid:[],fld:"vCONTAPAGRECANOPROCESSO",gxz:"ZV96ContaPagRecAnoProcesso",gxold:"OV96ContaPagRecAnoProcesso",gxvar:"AV96ContaPagRecAnoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96ContaPagRecAnoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV96ContaPagRecAnoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECANOPROCESSO",gx.O.AV96ContaPagRecAnoProcesso,0)},c2v:function(){gx.O.AV96ContaPagRecAnoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECANOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"PROMPTNOPROCESSO",grid:0};
   GXValidFnc[120]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[122]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECNUMERO",gxz:"ZV112GXV13E",gxold:"OV112GXV13E",gxvar:"GXV13E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13E=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV112GXV13E=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(121),gx.O.GXV13E,0)},c2v:function(){gx.O.GXV13E=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(121),'.')},nac:gx.falseFn};
   GXValidFnc[123]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECCLIFORFANTASIA",gxz:"ZV113GXV13F",gxold:"OV113GXV13F",gxvar:"GXV13F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13F=Value},v2z:function(Value){gx.O.ZV113GXV13F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(121),gx.O.GXV13F,0)},c2v:function(){gx.O.GXV13F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[124]={lvl:2,type:"svchar",len:24,dec:0,sign:false,ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECDOCUMENTO",gxz:"ZV114GXV13G",gxold:"OV114GXV13G",gxvar:"GXV13G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13G=Value},v2z:function(Value){gx.O.ZV114GXV13G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECDOCUMENTO",row || gx.fn.currentGridRowImpl(121),gx.O.GXV13G,0)},c2v:function(){gx.O.GXV13G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPAGRECDOCUMENTO",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[125]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECDTEMISSAO",gxz:"ZV115GXV13H",gxold:"OV115GXV13H",gxvar:"GXV13H",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13H=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV115GXV13H=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(121),gx.O.GXV13H,0)},c2v:function(){gx.O.GXV13H=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLCONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[126]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECDTVENCIMENTO",gxz:"ZV116GXV13I",gxold:"OV116GXV13I",gxvar:"GXV13I",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13I=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV116GXV13I=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(121),gx.O.GXV13I,0)},c2v:function(){gx.O.GXV13I=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLCONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[127]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECVLRATUALSEMSINAL",gxz:"ZV117GXV13J",gxold:"OV117GXV13J",gxvar:"GXV13J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13J=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV117GXV13J=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCONTAPAGRECVLRATUALSEMSINAL",row || gx.fn.currentGridRowImpl(121),gx.O.GXV13J,2,',')},c2v:function(){gx.O.GXV13J=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCONTAPAGRECVLRATUALSEMSINAL",row || gx.fn.currentGridRowImpl(121),'.',',')},nac:gx.falseFn};
   GXValidFnc[128]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECTIPOPAGMTO",gxz:"ZV118GXV13K",gxold:"OV118GXV13K",gxvar:"GXV13K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV13K=Value},v2z:function(Value){gx.O.ZV118GXV13K=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECTIPOPAGMTO",row || gx.fn.currentGridRowImpl(121),gx.O.GXV13K,0)},c2v:function(){gx.O.GXV13K=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPAGRECTIPOPAGMTO",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[129]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNMARCADO",gxz:"ZV119GXV13L",gxold:"OV119GXV13L",gxvar:"GXV13L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV13L=Value},v2z:function(Value){gx.O.ZV119GXV13L=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNMARCADO",row || gx.fn.currentGridRowImpl(121),gx.O.GXV13L,"S")},c2v:function(){gx.O.GXV13L=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNMARCADO",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[130]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDADOSREM",gxz:"ZV81bmpDadosRem",gxold:"OV81bmpDadosRem",gxvar:"AV81bmpDadosRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV81bmpDadosRem=Value},v2z:function(Value){gx.O.ZV81bmpDadosRem=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDADOSREM",row || gx.fn.currentGridRowImpl(121),gx.O.AV81bmpDadosRem,gx.O.AV122Bmpdadosrem_GXI)},c2v:function(){gx.O.AV122Bmpdadosrem_GXI=this.val_GXI();gx.O.AV81bmpDadosRem=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDADOSREM",row || gx.fn.currentGridRowImpl(121))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDADOSREM_GXI",row || gx.fn.currentGridRowImpl(121))}, gxvar_GXI:'AV122Bmpdadosrem_GXI',nac:gx.falseFn};
   GXValidFnc[131]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[134]={fld:"TXTTOTAL", format:0,grid:0};
   GXValidFnc[140]={fld:"TABLE8",grid:0};
   GXValidFnc[143]={fld:"JS", format:2,grid:0};
   GXValidFnc[144]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLRTOTAL",gxz:"ZV104VlrTotal",gxold:"OV104VlrTotal",gxvar:"AV104VlrTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104VlrTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV104VlrTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVLRTOTAL",gx.O.AV104VlrTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV104VlrTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVLRTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 144 , function() {
   });
   GXValidFnc[146]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecconvenioempid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCONVENIOEMPID",gxz:"ZV99ContaPagRecConvenioEmpId",gxold:"OV99ContaPagRecConvenioEmpId",gxvar:"AV99ContaPagRecConvenioEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99ContaPagRecConvenioEmpId=Value},v2z:function(Value){gx.O.ZV99ContaPagRecConvenioEmpId=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCONVENIOEMPID",gx.O.AV99ContaPagRecConvenioEmpId,0)},c2v:function(){gx.O.AV99ContaPagRecConvenioEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECCONVENIOEMPID")},nac:gx.falseFn};
   GXValidFnc[147]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV80QtdeCaracter",gxold:"OV80QtdeCaracter",gxvar:"AV80QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80QtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80QtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV80QtdeCaracter,0)},c2v:function(){gx.O.AV80QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[148]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Especieempresaid,isvalid:null,rgrid:[],fld:"vESPECIEEMPRESAID",gxz:"ZV77EspecieEmpresaId",gxold:"OV77EspecieEmpresaId",gxvar:"AV77EspecieEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77EspecieEmpresaId=Value},v2z:function(Value){gx.O.ZV77EspecieEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vESPECIEEMPRESAID",gx.O.AV77EspecieEmpresaId,0)},c2v:function(){gx.O.AV77EspecieEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vESPECIEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[149]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV71EmpresaPessoasEmpresaId",gxold:"OV71EmpresaPessoasEmpresaId",gxvar:"AV71EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV71EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV71EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV71EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[154]={fld:"BTNHELP",grid:0};
   GXValidFnc[155]={fld:"PROMPT_CONTAPAGRECCLIFORID",grid:0};
   GXValidFnc[156]={fld:"PROMPT_CONTAPAGRECESPECIEID",grid:0};
   GXValidFnc[157]={fld:"PROMPT_CONTAPAGRECNUMERO",grid:0};
   this.AV67ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.ZV67ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.OV67ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.AV68ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.ZV68ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.OV68ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.AV72ContaPagRecCliForId = 0 ;
   this.ZV72ContaPagRecCliForId = 0 ;
   this.OV72ContaPagRecCliForId = 0 ;
   this.AV73ContaPagRecCliForFantasia = "" ;
   this.ZV73ContaPagRecCliForFantasia = "" ;
   this.OV73ContaPagRecCliForFantasia = "" ;
   this.AV69ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.ZV69ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.OV69ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV70ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.ZV70ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.OV70ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV75ContaPagRecEspecieId = 0 ;
   this.ZV75ContaPagRecEspecieId = 0 ;
   this.OV75ContaPagRecEspecieId = 0 ;
   this.AV76ContaPagRecEspecieDescricao = "" ;
   this.ZV76ContaPagRecEspecieDescricao = "" ;
   this.OV76ContaPagRecEspecieDescricao = "" ;
   this.AV107ContaPagRecDtPgtoFornecIni = gx.date.nullDate() ;
   this.ZV107ContaPagRecDtPgtoFornecIni = gx.date.nullDate() ;
   this.OV107ContaPagRecDtPgtoFornecIni = gx.date.nullDate() ;
   this.AV108ContaPagRecDtPgtoFornecFim = gx.date.nullDate() ;
   this.ZV108ContaPagRecDtPgtoFornecFim = gx.date.nullDate() ;
   this.OV108ContaPagRecDtPgtoFornecFim = gx.date.nullDate() ;
   this.AV78ContaPagRecDocumento = "" ;
   this.ZV78ContaPagRecDocumento = "" ;
   this.OV78ContaPagRecDocumento = "" ;
   this.AV95ContaPagRecSeqDocume = "" ;
   this.ZV95ContaPagRecSeqDocume = "" ;
   this.OV95ContaPagRecSeqDocume = "" ;
   this.AV105ContaPagRecDataDebitoIni = gx.date.nullDate() ;
   this.ZV105ContaPagRecDataDebitoIni = gx.date.nullDate() ;
   this.OV105ContaPagRecDataDebitoIni = gx.date.nullDate() ;
   this.AV106ContaPagRecDataDebitoFim = gx.date.nullDate() ;
   this.ZV106ContaPagRecDataDebitoFim = gx.date.nullDate() ;
   this.OV106ContaPagRecDataDebitoFim = gx.date.nullDate() ;
   this.AV79DadosRemessa = "" ;
   this.ZV79DadosRemessa = "" ;
   this.OV79DadosRemessa = "" ;
   this.AV93ContaPagRecNumero = 0 ;
   this.ZV93ContaPagRecNumero = 0 ;
   this.OV93ContaPagRecNumero = 0 ;
   this.AV102ContaPagRecSituacao = "" ;
   this.ZV102ContaPagRecSituacao = "" ;
   this.OV102ContaPagRecSituacao = "" ;
   this.AV100ContaPagRecConvenioId = 0 ;
   this.ZV100ContaPagRecConvenioId = 0 ;
   this.OV100ContaPagRecConvenioId = 0 ;
   this.AV101ContaPagRecConvenioDesc = "" ;
   this.ZV101ContaPagRecConvenioDesc = "" ;
   this.OV101ContaPagRecConvenioDesc = "" ;
   this.AV97ContaPagRecNoProcesso = 0 ;
   this.ZV97ContaPagRecNoProcesso = 0 ;
   this.OV97ContaPagRecNoProcesso = 0 ;
   this.AV96ContaPagRecAnoProcesso = 0 ;
   this.ZV96ContaPagRecAnoProcesso = 0 ;
   this.OV96ContaPagRecAnoProcesso = 0 ;
   this.ZV112GXV13E = 0 ;
   this.OV112GXV13E = 0 ;
   this.ZV113GXV13F = "" ;
   this.OV113GXV13F = "" ;
   this.ZV114GXV13G = "" ;
   this.OV114GXV13G = "" ;
   this.ZV115GXV13H = gx.date.nullDate() ;
   this.OV115GXV13H = gx.date.nullDate() ;
   this.ZV116GXV13I = gx.date.nullDate() ;
   this.OV116GXV13I = gx.date.nullDate() ;
   this.ZV117GXV13J = 0 ;
   this.OV117GXV13J = 0 ;
   this.ZV118GXV13K = "" ;
   this.OV118GXV13K = "" ;
   this.ZV119GXV13L = "" ;
   this.OV119GXV13L = "" ;
   this.ZV81bmpDadosRem = "" ;
   this.OV81bmpDadosRem = "" ;
   this.AV104VlrTotal = 0 ;
   this.ZV104VlrTotal = 0 ;
   this.OV104VlrTotal = 0 ;
   this.AV99ContaPagRecConvenioEmpId = "" ;
   this.ZV99ContaPagRecConvenioEmpId = "" ;
   this.OV99ContaPagRecConvenioEmpId = "" ;
   this.AV80QtdeCaracter = 0 ;
   this.ZV80QtdeCaracter = 0 ;
   this.OV80QtdeCaracter = 0 ;
   this.AV77EspecieEmpresaId = "" ;
   this.ZV77EspecieEmpresaId = "" ;
   this.OV77EspecieEmpresaId = "" ;
   this.AV71EmpresaPessoasEmpresaId = "" ;
   this.ZV71EmpresaPessoasEmpresaId = "" ;
   this.OV71EmpresaPessoasEmpresaId = "" ;
   this.AV67ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.AV68ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.AV72ContaPagRecCliForId = 0 ;
   this.AV73ContaPagRecCliForFantasia = "" ;
   this.AV69ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV70ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV75ContaPagRecEspecieId = 0 ;
   this.AV76ContaPagRecEspecieDescricao = "" ;
   this.AV107ContaPagRecDtPgtoFornecIni = gx.date.nullDate() ;
   this.AV108ContaPagRecDtPgtoFornecFim = gx.date.nullDate() ;
   this.AV78ContaPagRecDocumento = "" ;
   this.AV95ContaPagRecSeqDocume = "" ;
   this.AV105ContaPagRecDataDebitoIni = gx.date.nullDate() ;
   this.AV106ContaPagRecDataDebitoFim = gx.date.nullDate() ;
   this.AV79DadosRemessa = "" ;
   this.AV93ContaPagRecNumero = 0 ;
   this.AV102ContaPagRecSituacao = "" ;
   this.AV100ContaPagRecConvenioId = 0 ;
   this.AV101ContaPagRecConvenioDesc = "" ;
   this.AV97ContaPagRecNoProcesso = 0 ;
   this.AV96ContaPagRecAnoProcesso = 0 ;
   this.AV104VlrTotal = 0 ;
   this.AV99ContaPagRecConvenioEmpId = "" ;
   this.AV80QtdeCaracter = 0 ;
   this.AV77EspecieEmpresaId = "" ;
   this.AV71EmpresaPessoasEmpresaId = "" ;
   this.GXV13E = 0 ;
   this.GXV13F = "" ;
   this.GXV13G = "" ;
   this.GXV13H = gx.date.nullDate() ;
   this.GXV13I = gx.date.nullDate() ;
   this.GXV13J = 0 ;
   this.GXV13K = "" ;
   this.GXV13L = "" ;
   this.AV81bmpDadosRem = "" ;
   this.A5440ContaPagRecTipoPagmto = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.A938EspecieId = 0 ;
   this.A937EspecieEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A1688ContaPagRecConvenioId = 0 ;
   this.A1687ContaPagRecConvenioEmpId = "" ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A6622ContaPagRecDataDebito = gx.date.nullDate() ;
   this.A6623ContaPagRecDtPgtoFornec = gx.date.nullDate() ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A2005ContaPagRecAnoProcesso = 0 ;
   this.A1966ContaPagRecNoProcesso = 0 ;
   this.A1696ContaPagRecSeqDocume = "" ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1640ContaPagRecEspecieId = 0 ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1715ContaPagRecVlrPagamento = 0 ;
   this.A1714ContaPagRecVlrDesconto = 0 ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1712ContaPagRecVlrAcrescimo = 0 ;
   this.A2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.Events = {"e12w22_client": ["ENTER", true] ,"e11w22_client": ["'FECHAR'", true] ,"e18w22_client": ["'DADOSREMESSA'", true] ,"e13w22_client": ["'LIMPARDADOS'", true] ,"e14w22_client": ["'REGISTRAR'", true] ,"e15w22_client": ["'MARCARTODOS'", true] ,"e16w22_client": ["'DESMARCARTODOS'", true] ,"e21w22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121},{av:'subGrid_Rows'},{av:'AV81bmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV93ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV72ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV100ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'A1687ContaPagRecConvenioEmpId',fld:'CONTAPAGRECCONVENIOEMPID'},{av:'AV99ContaPagRecConvenioEmpId',fld:'vCONTAPAGRECCONVENIOEMPID'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'A1640ContaPagRecEspecieId',fld:'CONTAPAGRECESPECIEID'},{av:'AV75ContaPagRecEspecieId',fld:'vCONTAPAGRECESPECIEID'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'AV78ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'AV95ContaPagRecSeqDocume',fld:'vCONTAPAGRECSEQDOCUME'},{av:'A1966ContaPagRecNoProcesso',fld:'CONTAPAGRECNOPROCESSO'},{av:'AV97ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'A2005ContaPagRecAnoProcesso',fld:'CONTAPAGRECANOPROCESSO'},{av:'AV96ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV67ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV68ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'AV69ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV70ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'A6623ContaPagRecDtPgtoFornec',fld:'CONTAPAGRECDTPGTOFORNEC'},{av:'AV107ContaPagRecDtPgtoFornecIni',fld:'vCONTAPAGRECDTPGTOFORNECINI'},{av:'AV108ContaPagRecDtPgtoFornecFim',fld:'vCONTAPAGRECDTPGTOFORNECFIM'},{av:'A6622ContaPagRecDataDebito',fld:'CONTAPAGRECDATADEBITO'},{av:'AV105ContaPagRecDataDebitoIni',fld:'vCONTAPAGRECDATADEBITOINI'},{av:'AV106ContaPagRecDataDebitoFim',fld:'vCONTAPAGRECDATADEBITOFIM'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV102ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV79DadosRemessa',fld:'vDADOSREMESSA'},{av:'A5440ContaPagRecTipoPagmto',fld:'CONTAPAGRECTIPOPAGMTO'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1715ContaPagRecVlrPagamento',fld:'CONTAPAGRECVLRPAGAMENTO'}],[{av:'gx.fn.getCtrlProperty("TXTTOTAL","Caption")',ctrl:'TXTTOTAL',prop:'Caption'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121},{av:'AV83SdtConsultarDadosRemessaItem',fld:'vSDTCONSULTARDADOSREMESSAITEM'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121},{av:'subGrid_Rows'},{av:'AV81bmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV93ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV72ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV100ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'A1687ContaPagRecConvenioEmpId',fld:'CONTAPAGRECCONVENIOEMPID'},{av:'AV99ContaPagRecConvenioEmpId',fld:'vCONTAPAGRECCONVENIOEMPID'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'A1640ContaPagRecEspecieId',fld:'CONTAPAGRECESPECIEID'},{av:'AV75ContaPagRecEspecieId',fld:'vCONTAPAGRECESPECIEID'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'AV78ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'AV95ContaPagRecSeqDocume',fld:'vCONTAPAGRECSEQDOCUME'},{av:'A1966ContaPagRecNoProcesso',fld:'CONTAPAGRECNOPROCESSO'},{av:'AV97ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'A2005ContaPagRecAnoProcesso',fld:'CONTAPAGRECANOPROCESSO'},{av:'AV96ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV67ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV68ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'AV69ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV70ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'A6623ContaPagRecDtPgtoFornec',fld:'CONTAPAGRECDTPGTOFORNEC'},{av:'AV107ContaPagRecDtPgtoFornecIni',fld:'vCONTAPAGRECDTPGTOFORNECINI'},{av:'AV108ContaPagRecDtPgtoFornecFim',fld:'vCONTAPAGRECDTPGTOFORNECFIM'},{av:'A6622ContaPagRecDataDebito',fld:'CONTAPAGRECDATADEBITO'},{av:'AV105ContaPagRecDataDebitoIni',fld:'vCONTAPAGRECDATADEBITOINI'},{av:'AV106ContaPagRecDataDebitoFim',fld:'vCONTAPAGRECDATADEBITOFIM'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV102ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV79DadosRemessa',fld:'vDADOSREMESSA'},{av:'A5440ContaPagRecTipoPagmto',fld:'CONTAPAGRECTIPOPAGMTO'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1715ContaPagRecVlrPagamento',fld:'CONTAPAGRECVLRPAGAMENTO'},{av:'AV74SNErro',fld:'vSNERRO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV71EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A937EspecieEmpresaId',fld:'ESPECIEEMPRESAID'},{av:'AV77EspecieEmpresaId',fld:'vESPECIEEMPRESAID'},{av:'A938EspecieId',fld:'ESPECIEID'},{av:'A3372ProcessoConvEmpresaId',fld:'PROCESSOCONVEMPRESAID'},{av:'AV98ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'}],[{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121},{av:'AV74SNErro',fld:'vSNERRO'},{av:'AV126GXLvl247',fld:'vGXLVL247'},{av:'AV127GXLvl260',fld:'vGXLVL260'},{av:'AV128GXLvl274',fld:'vGXLVL274'},{av:'AV129GXLvl287',fld:'vGXLVL287'},{av:'AV130GXLvl318',fld:'vGXLVL318'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'AV83SdtConsultarDadosRemessaItem',fld:'vSDTCONSULTARDADOSREMESSAITEM'},{av:'gx.fn.getCtrlProperty("TXTTOTAL","Caption")',ctrl:'TXTTOTAL',prop:'Caption'}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121}],[{av:'AV124GXV2',fld:'vGXV2'},{av:'AV83SdtConsultarDadosRemessaItem',fld:'vSDTCONSULTARDADOSREMESSAITEM'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121}],[{av:'AV125GXV3',fld:'vGXV3'},{av:'AV83SdtConsultarDadosRemessaItem',fld:'vSDTCONSULTARDADOSREMESSAITEM'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'DADOSREMESSA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121},{av:'subGrid_Rows'},{av:'AV81bmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV93ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV72ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV100ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'A1687ContaPagRecConvenioEmpId',fld:'CONTAPAGRECCONVENIOEMPID'},{av:'AV99ContaPagRecConvenioEmpId',fld:'vCONTAPAGRECCONVENIOEMPID'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'A1640ContaPagRecEspecieId',fld:'CONTAPAGRECESPECIEID'},{av:'AV75ContaPagRecEspecieId',fld:'vCONTAPAGRECESPECIEID'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'AV78ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'AV95ContaPagRecSeqDocume',fld:'vCONTAPAGRECSEQDOCUME'},{av:'A1966ContaPagRecNoProcesso',fld:'CONTAPAGRECNOPROCESSO'},{av:'AV97ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'A2005ContaPagRecAnoProcesso',fld:'CONTAPAGRECANOPROCESSO'},{av:'AV96ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV67ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV68ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'AV69ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV70ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'A6623ContaPagRecDtPgtoFornec',fld:'CONTAPAGRECDTPGTOFORNEC'},{av:'AV107ContaPagRecDtPgtoFornecIni',fld:'vCONTAPAGRECDTPGTOFORNECINI'},{av:'AV108ContaPagRecDtPgtoFornecFim',fld:'vCONTAPAGRECDTPGTOFORNECFIM'},{av:'A6622ContaPagRecDataDebito',fld:'CONTAPAGRECDATADEBITO'},{av:'AV105ContaPagRecDataDebitoIni',fld:'vCONTAPAGRECDATADEBITOINI'},{av:'AV106ContaPagRecDataDebitoFim',fld:'vCONTAPAGRECDATADEBITOFIM'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV102ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV79DadosRemessa',fld:'vDADOSREMESSA'},{av:'A5440ContaPagRecTipoPagmto',fld:'CONTAPAGRECTIPOPAGMTO'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1715ContaPagRecVlrPagamento',fld:'CONTAPAGRECVLRPAGAMENTO'},{av:'AV120Pgmname',fld:'vPGMNAME'}],[{av:'AV87SNMarcado',fld:'vSNMARCADO'},{av:'AV131GXV4',fld:'vGXV4'},{av:'AV83SdtConsultarDadosRemessaItem',fld:'vSDTCONSULTARDADOSREMESSAITEM'},{av:'AV120Pgmname',fld:'vPGMNAME'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121}]];
   this.EvtParms["'LIMPARDADOS'"] = [[{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV93ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV72ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV100ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'A1687ContaPagRecConvenioEmpId',fld:'CONTAPAGRECCONVENIOEMPID'},{av:'AV99ContaPagRecConvenioEmpId',fld:'vCONTAPAGRECCONVENIOEMPID'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'A1640ContaPagRecEspecieId',fld:'CONTAPAGRECESPECIEID'},{av:'AV75ContaPagRecEspecieId',fld:'vCONTAPAGRECESPECIEID'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'AV78ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'AV95ContaPagRecSeqDocume',fld:'vCONTAPAGRECSEQDOCUME'},{av:'A1966ContaPagRecNoProcesso',fld:'CONTAPAGRECNOPROCESSO'},{av:'AV97ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'A2005ContaPagRecAnoProcesso',fld:'CONTAPAGRECANOPROCESSO'},{av:'AV96ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV67ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV68ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'AV69ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV70ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'A6623ContaPagRecDtPgtoFornec',fld:'CONTAPAGRECDTPGTOFORNEC'},{av:'AV107ContaPagRecDtPgtoFornecIni',fld:'vCONTAPAGRECDTPGTOFORNECINI'},{av:'AV108ContaPagRecDtPgtoFornecFim',fld:'vCONTAPAGRECDTPGTOFORNECFIM'},{av:'A6622ContaPagRecDataDebito',fld:'CONTAPAGRECDATADEBITO'},{av:'AV105ContaPagRecDataDebitoIni',fld:'vCONTAPAGRECDATADEBITOINI'},{av:'AV106ContaPagRecDataDebitoFim',fld:'vCONTAPAGRECDATADEBITOFIM'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV102ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV79DadosRemessa',fld:'vDADOSREMESSA'},{av:'A5440ContaPagRecTipoPagmto',fld:'CONTAPAGRECTIPOPAGMTO'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1715ContaPagRecVlrPagamento',fld:'CONTAPAGRECVLRPAGAMENTO'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV81bmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'}],[{av:'AV87SNMarcado',fld:'vSNMARCADO'},{av:'AV132GXV5',fld:'vGXV5'},{av:'AV83SdtConsultarDadosRemessaItem',fld:'vSDTCONSULTARDADOSREMESSAITEM'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121},{av:'gx.fn.getCtrlProperty("TXTTOTAL","Caption")',ctrl:'TXTTOTAL',prop:'Caption'}]];
   this.EvtParms["'REGISTRAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121},{av:'subGrid_Rows'},{av:'AV81bmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV93ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV72ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV100ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'A1687ContaPagRecConvenioEmpId',fld:'CONTAPAGRECCONVENIOEMPID'},{av:'AV99ContaPagRecConvenioEmpId',fld:'vCONTAPAGRECCONVENIOEMPID'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'A1640ContaPagRecEspecieId',fld:'CONTAPAGRECESPECIEID'},{av:'AV75ContaPagRecEspecieId',fld:'vCONTAPAGRECESPECIEID'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'AV78ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'AV95ContaPagRecSeqDocume',fld:'vCONTAPAGRECSEQDOCUME'},{av:'A1966ContaPagRecNoProcesso',fld:'CONTAPAGRECNOPROCESSO'},{av:'AV97ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'A2005ContaPagRecAnoProcesso',fld:'CONTAPAGRECANOPROCESSO'},{av:'AV96ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV67ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV68ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'AV69ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV70ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'A6623ContaPagRecDtPgtoFornec',fld:'CONTAPAGRECDTPGTOFORNEC'},{av:'AV107ContaPagRecDtPgtoFornecIni',fld:'vCONTAPAGRECDTPGTOFORNECINI'},{av:'AV108ContaPagRecDtPgtoFornecFim',fld:'vCONTAPAGRECDTPGTOFORNECFIM'},{av:'A6622ContaPagRecDataDebito',fld:'CONTAPAGRECDATADEBITO'},{av:'AV105ContaPagRecDataDebitoIni',fld:'vCONTAPAGRECDATADEBITOINI'},{av:'AV106ContaPagRecDataDebitoFim',fld:'vCONTAPAGRECDATADEBITOFIM'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV102ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV79DadosRemessa',fld:'vDADOSREMESSA'},{av:'A5440ContaPagRecTipoPagmto',fld:'CONTAPAGRECTIPOPAGMTO'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1715ContaPagRecVlrPagamento',fld:'CONTAPAGRECVLRPAGAMENTO'},{av:'AV120Pgmname',fld:'vPGMNAME'}],[{av:'AV87SNMarcado',fld:'vSNMARCADO'},{av:'AV89SNErroConta',fld:'vSNERROCONTA'},{av:'AV133GXV6',fld:'vGXV6'},{av:'AV83SdtConsultarDadosRemessaItem',fld:'vSDTCONSULTARDADOSREMESSAITEM'},{av:'AV134GXLvl388',fld:'vGXLVL388'},{av:'AV120Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV81bmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV93ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV72ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV100ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'A1687ContaPagRecConvenioEmpId',fld:'CONTAPAGRECCONVENIOEMPID'},{av:'AV99ContaPagRecConvenioEmpId',fld:'vCONTAPAGRECCONVENIOEMPID'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'A1640ContaPagRecEspecieId',fld:'CONTAPAGRECESPECIEID'},{av:'AV75ContaPagRecEspecieId',fld:'vCONTAPAGRECESPECIEID'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'AV78ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'AV95ContaPagRecSeqDocume',fld:'vCONTAPAGRECSEQDOCUME'},{av:'A1966ContaPagRecNoProcesso',fld:'CONTAPAGRECNOPROCESSO'},{av:'AV97ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'A2005ContaPagRecAnoProcesso',fld:'CONTAPAGRECANOPROCESSO'},{av:'AV96ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV67ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV68ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'AV69ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV70ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'A6623ContaPagRecDtPgtoFornec',fld:'CONTAPAGRECDTPGTOFORNEC'},{av:'AV107ContaPagRecDtPgtoFornecIni',fld:'vCONTAPAGRECDTPGTOFORNECINI'},{av:'AV108ContaPagRecDtPgtoFornecFim',fld:'vCONTAPAGRECDTPGTOFORNECFIM'},{av:'A6622ContaPagRecDataDebito',fld:'CONTAPAGRECDATADEBITO'},{av:'AV105ContaPagRecDataDebitoIni',fld:'vCONTAPAGRECDATADEBITOINI'},{av:'AV106ContaPagRecDataDebitoFim',fld:'vCONTAPAGRECDATADEBITOFIM'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV102ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV79DadosRemessa',fld:'vDADOSREMESSA'},{av:'A5440ContaPagRecTipoPagmto',fld:'CONTAPAGRECTIPOPAGMTO'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1715ContaPagRecVlrPagamento',fld:'CONTAPAGRECVLRPAGAMENTO'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121}],[{av:'gx.fn.getCtrlProperty("TXTTOTAL","Caption")',ctrl:'TXTTOTAL',prop:'Caption'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121},{av:'AV83SdtConsultarDadosRemessaItem',fld:'vSDTCONSULTARDADOSREMESSAITEM'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV81bmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV93ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV72ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV100ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'A1687ContaPagRecConvenioEmpId',fld:'CONTAPAGRECCONVENIOEMPID'},{av:'AV99ContaPagRecConvenioEmpId',fld:'vCONTAPAGRECCONVENIOEMPID'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'A1640ContaPagRecEspecieId',fld:'CONTAPAGRECESPECIEID'},{av:'AV75ContaPagRecEspecieId',fld:'vCONTAPAGRECESPECIEID'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'AV78ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'AV95ContaPagRecSeqDocume',fld:'vCONTAPAGRECSEQDOCUME'},{av:'A1966ContaPagRecNoProcesso',fld:'CONTAPAGRECNOPROCESSO'},{av:'AV97ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'A2005ContaPagRecAnoProcesso',fld:'CONTAPAGRECANOPROCESSO'},{av:'AV96ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV67ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV68ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'AV69ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV70ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'A6623ContaPagRecDtPgtoFornec',fld:'CONTAPAGRECDTPGTOFORNEC'},{av:'AV107ContaPagRecDtPgtoFornecIni',fld:'vCONTAPAGRECDTPGTOFORNECINI'},{av:'AV108ContaPagRecDtPgtoFornecFim',fld:'vCONTAPAGRECDTPGTOFORNECFIM'},{av:'A6622ContaPagRecDataDebito',fld:'CONTAPAGRECDATADEBITO'},{av:'AV105ContaPagRecDataDebitoIni',fld:'vCONTAPAGRECDATADEBITOINI'},{av:'AV106ContaPagRecDataDebitoFim',fld:'vCONTAPAGRECDATADEBITOFIM'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV102ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV79DadosRemessa',fld:'vDADOSREMESSA'},{av:'A5440ContaPagRecTipoPagmto',fld:'CONTAPAGRECTIPOPAGMTO'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1715ContaPagRecVlrPagamento',fld:'CONTAPAGRECVLRPAGAMENTO'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121}],[{av:'gx.fn.getCtrlProperty("TXTTOTAL","Caption")',ctrl:'TXTTOTAL',prop:'Caption'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121},{av:'AV83SdtConsultarDadosRemessaItem',fld:'vSDTCONSULTARDADOSREMESSAITEM'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV81bmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV93ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV72ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV100ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'A1687ContaPagRecConvenioEmpId',fld:'CONTAPAGRECCONVENIOEMPID'},{av:'AV99ContaPagRecConvenioEmpId',fld:'vCONTAPAGRECCONVENIOEMPID'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'A1640ContaPagRecEspecieId',fld:'CONTAPAGRECESPECIEID'},{av:'AV75ContaPagRecEspecieId',fld:'vCONTAPAGRECESPECIEID'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'AV78ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'AV95ContaPagRecSeqDocume',fld:'vCONTAPAGRECSEQDOCUME'},{av:'A1966ContaPagRecNoProcesso',fld:'CONTAPAGRECNOPROCESSO'},{av:'AV97ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'A2005ContaPagRecAnoProcesso',fld:'CONTAPAGRECANOPROCESSO'},{av:'AV96ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV67ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV68ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'AV69ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV70ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'A6623ContaPagRecDtPgtoFornec',fld:'CONTAPAGRECDTPGTOFORNEC'},{av:'AV107ContaPagRecDtPgtoFornecIni',fld:'vCONTAPAGRECDTPGTOFORNECINI'},{av:'AV108ContaPagRecDtPgtoFornecFim',fld:'vCONTAPAGRECDTPGTOFORNECFIM'},{av:'A6622ContaPagRecDataDebito',fld:'CONTAPAGRECDATADEBITO'},{av:'AV105ContaPagRecDataDebitoIni',fld:'vCONTAPAGRECDATADEBITOINI'},{av:'AV106ContaPagRecDataDebitoFim',fld:'vCONTAPAGRECDATADEBITOFIM'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV102ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV79DadosRemessa',fld:'vDADOSREMESSA'},{av:'A5440ContaPagRecTipoPagmto',fld:'CONTAPAGRECTIPOPAGMTO'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1715ContaPagRecVlrPagamento',fld:'CONTAPAGRECVLRPAGAMENTO'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121}],[{av:'gx.fn.getCtrlProperty("TXTTOTAL","Caption")',ctrl:'TXTTOTAL',prop:'Caption'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121},{av:'AV83SdtConsultarDadosRemessaItem',fld:'vSDTCONSULTARDADOSREMESSAITEM'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV81bmpDadosRem',fld:'vBMPDADOSREM'},{av:'gx.fn.getCtrlProperty("vBMPDADOSREM","Tooltiptext")',ctrl:'vBMPDADOSREM',prop:'Tooltiptext'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV93ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV72ContaPagRecCliForId',fld:'vCONTAPAGRECCLIFORID'},{av:'AV100ContaPagRecConvenioId',fld:'vCONTAPAGRECCONVENIOID'},{av:'A1687ContaPagRecConvenioEmpId',fld:'CONTAPAGRECCONVENIOEMPID'},{av:'AV99ContaPagRecConvenioEmpId',fld:'vCONTAPAGRECCONVENIOEMPID'},{av:'A1688ContaPagRecConvenioId',fld:'CONTAPAGRECCONVENIOID'},{av:'A1640ContaPagRecEspecieId',fld:'CONTAPAGRECESPECIEID'},{av:'AV75ContaPagRecEspecieId',fld:'vCONTAPAGRECESPECIEID'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'AV78ContaPagRecDocumento',fld:'vCONTAPAGRECDOCUMENTO'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'AV95ContaPagRecSeqDocume',fld:'vCONTAPAGRECSEQDOCUME'},{av:'A1966ContaPagRecNoProcesso',fld:'CONTAPAGRECNOPROCESSO'},{av:'AV97ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'A2005ContaPagRecAnoProcesso',fld:'CONTAPAGRECANOPROCESSO'},{av:'AV96ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'AV67ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV68ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'AV69ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV70ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'A6623ContaPagRecDtPgtoFornec',fld:'CONTAPAGRECDTPGTOFORNEC'},{av:'AV107ContaPagRecDtPgtoFornecIni',fld:'vCONTAPAGRECDTPGTOFORNECINI'},{av:'AV108ContaPagRecDtPgtoFornecFim',fld:'vCONTAPAGRECDTPGTOFORNECFIM'},{av:'A6622ContaPagRecDataDebito',fld:'CONTAPAGRECDATADEBITO'},{av:'AV105ContaPagRecDataDebitoIni',fld:'vCONTAPAGRECDATADEBITOINI'},{av:'AV106ContaPagRecDataDebitoFim',fld:'vCONTAPAGRECDATADEBITOFIM'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV102ContaPagRecSituacao',fld:'vCONTAPAGRECSITUACAO'},{av:'AV79DadosRemessa',fld:'vDADOSREMESSA'},{av:'A5440ContaPagRecTipoPagmto',fld:'CONTAPAGRECTIPOPAGMTO'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A2115ContaPagRecVlrAtualSemSinal',fld:'CONTAPAGRECVLRATUALSEMSINAL'},{av:'A1715ContaPagRecVlrPagamento',fld:'CONTAPAGRECVLRPAGAMENTO'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121}],[{av:'gx.fn.getCtrlProperty("TXTTOTAL","Caption")',ctrl:'TXTTOTAL',prop:'Caption'},{av:'AV104VlrTotal',fld:'vVLRTOTAL'},{av:'AV82SdtConsultarDadosRemessa',fld:'vSDTCONSULTARDADOSREMESSA',grid:121},{av:'AV83SdtConsultarDadosRemessaItem',fld:'vSDTCONSULTARDADOSREMESSAITEM'}]];
   this.setPrompt("PROMPTCONVENIO", [95]);
   this.setPrompt("PROMPT_CONTAPAGRECCLIFORID", [24]);
   this.setPrompt("PROMPT_CONTAPAGRECESPECIEID", [41]);
   this.setPrompt("PROMPT_CONTAPAGRECNUMERO", [86]);
   this.setPrompt("PROMPTNOPROCESSO", [106]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("A1712ContaPagRecVlrAcrescimo", "CONTAPAGRECVLRACRESCIMO", 0, "decimal");
   this.setVCMap("A1713ContaPagRecVlrConta", "CONTAPAGRECVLRCONTA", 0, "decimal");
   this.setVCMap("A1714ContaPagRecVlrDesconto", "CONTAPAGRECVLRDESCONTO", 0, "decimal");
   this.setVCMap("A1715ContaPagRecVlrPagamento", "CONTAPAGRECVLRPAGAMENTO", 0, "decimal");
   this.setVCMap("A2115ContaPagRecVlrAtualSemSinal", "CONTAPAGRECVLRATUALSEMSINAL", 0, "decimal");
   this.setVCMap("A1686ContaPagRecNumero", "CONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("A1685ContaPagRecEmpresaId", "CONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1693ContaPagRecPagRec", "CONTAPAGRECPAGREC", 0, "char");
   this.setVCMap("A1637ContaPagRecCliForId", "CONTAPAGRECCLIFORID", 0, "int");
   this.setVCMap("A1687ContaPagRecConvenioEmpId", "CONTAPAGRECCONVENIOEMPID", 0, "char");
   this.setVCMap("A1688ContaPagRecConvenioId", "CONTAPAGRECCONVENIOID", 0, "int");
   this.setVCMap("A1640ContaPagRecEspecieId", "CONTAPAGRECESPECIEID", 0, "int");
   this.setVCMap("A1695ContaPagRecDocumento", "CONTAPAGRECDOCUMENTO", 0, "svchar");
   this.setVCMap("A1696ContaPagRecSeqDocume", "CONTAPAGRECSEQDOCUME", 0, "char");
   this.setVCMap("A1966ContaPagRecNoProcesso", "CONTAPAGRECNOPROCESSO", 0, "int");
   this.setVCMap("A2005ContaPagRecAnoProcesso", "CONTAPAGRECANOPROCESSO", 0, "int");
   this.setVCMap("A1701ContaPagRecDtVencimento", "CONTAPAGRECDTVENCIMENTO", 0, "date");
   this.setVCMap("A1699ContaPagRecDtEmissao", "CONTAPAGRECDTEMISSAO", 0, "date");
   this.setVCMap("A6623ContaPagRecDtPgtoFornec", "CONTAPAGRECDTPGTOFORNEC", 0, "date");
   this.setVCMap("A6622ContaPagRecDataDebito", "CONTAPAGRECDATADEBITO", 0, "date");
   this.setVCMap("A1692ContaPagRecSituacao", "CONTAPAGRECSITUACAO", 0, "char");
   this.setVCMap("A5440ContaPagRecTipoPagmto", "CONTAPAGRECTIPOPAGMTO", 0, "char");
   this.setVCMap("A1638ContaPagRecCliForFantasia", "CONTAPAGRECCLIFORFANTASIA", 0, "svchar");
   this.setVCMap("A2115ContaPagRecVlrAtualSemSinal", "CONTAPAGRECVLRATUALSEMSINAL", 0, "decimal");
   this.setVCMap("A1715ContaPagRecVlrPagamento", "CONTAPAGRECVLRPAGAMENTO", 0, "decimal");
   this.setVCMap("A1686ContaPagRecNumero", "CONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("A1685ContaPagRecEmpresaId", "CONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1693ContaPagRecPagRec", "CONTAPAGRECPAGREC", 0, "char");
   this.setVCMap("A1637ContaPagRecCliForId", "CONTAPAGRECCLIFORID", 0, "int");
   this.setVCMap("A1687ContaPagRecConvenioEmpId", "CONTAPAGRECCONVENIOEMPID", 0, "char");
   this.setVCMap("A1688ContaPagRecConvenioId", "CONTAPAGRECCONVENIOID", 0, "int");
   this.setVCMap("A1640ContaPagRecEspecieId", "CONTAPAGRECESPECIEID", 0, "int");
   this.setVCMap("A1695ContaPagRecDocumento", "CONTAPAGRECDOCUMENTO", 0, "svchar");
   this.setVCMap("A1696ContaPagRecSeqDocume", "CONTAPAGRECSEQDOCUME", 0, "char");
   this.setVCMap("A1966ContaPagRecNoProcesso", "CONTAPAGRECNOPROCESSO", 0, "int");
   this.setVCMap("A2005ContaPagRecAnoProcesso", "CONTAPAGRECANOPROCESSO", 0, "int");
   this.setVCMap("A1701ContaPagRecDtVencimento", "CONTAPAGRECDTVENCIMENTO", 0, "date");
   this.setVCMap("A1699ContaPagRecDtEmissao", "CONTAPAGRECDTEMISSAO", 0, "date");
   this.setVCMap("A6623ContaPagRecDtPgtoFornec", "CONTAPAGRECDTPGTOFORNEC", 0, "date");
   this.setVCMap("A6622ContaPagRecDataDebito", "CONTAPAGRECDATADEBITO", 0, "date");
   this.setVCMap("A1692ContaPagRecSituacao", "CONTAPAGRECSITUACAO", 0, "char");
   this.setVCMap("A5440ContaPagRecTipoPagmto", "CONTAPAGRECTIPOPAGMTO", 0, "char");
   this.setVCMap("A1638ContaPagRecCliForFantasia", "CONTAPAGRECCLIFORFANTASIA", 0, "svchar");
   this.setVCMap("A2115ContaPagRecVlrAtualSemSinal", "CONTAPAGRECVLRATUALSEMSINAL", 0, "decimal");
   this.setVCMap("A1715ContaPagRecVlrPagamento", "CONTAPAGRECVLRPAGAMENTO", 0, "decimal");
   GridContainer.addRefreshingVar({rfrVar:"AV81bmpDadosRem", rfrProp:"Value", gxAttId:"Bmpdadosrem"});
   GridContainer.addRefreshingVar({rfrVar:"AV81bmpDadosRem", rfrProp:"Tooltiptext", gxAttId:"Bmpdadosrem"});
   GridContainer.addRefreshingVar(this.GXValidFnc[144]);
   GridContainer.addRefreshingVar({rfrVar:"A1686ContaPagRecNumero"});
   GridContainer.addRefreshingVar({rfrVar:"A1685ContaPagRecEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A1693ContaPagRecPagRec"});
   GridContainer.addRefreshingVar(this.GXValidFnc[86]);
   GridContainer.addRefreshingVar({rfrVar:"A1637ContaPagRecCliForId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[95]);
   GridContainer.addRefreshingVar({rfrVar:"A1687ContaPagRecConvenioEmpId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[146]);
   GridContainer.addRefreshingVar({rfrVar:"A1688ContaPagRecConvenioId"});
   GridContainer.addRefreshingVar({rfrVar:"A1640ContaPagRecEspecieId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[41]);
   GridContainer.addRefreshingVar({rfrVar:"A1695ContaPagRecDocumento"});
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"A1696ContaPagRecSeqDocume"});
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridContainer.addRefreshingVar({rfrVar:"A1966ContaPagRecNoProcesso"});
   GridContainer.addRefreshingVar(this.GXValidFnc[104]);
   GridContainer.addRefreshingVar({rfrVar:"A2005ContaPagRecAnoProcesso"});
   GridContainer.addRefreshingVar(this.GXValidFnc[106]);
   GridContainer.addRefreshingVar({rfrVar:"A1701ContaPagRecDtVencimento"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar({rfrVar:"A1699ContaPagRecDtEmissao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar({rfrVar:"A6623ContaPagRecDtPgtoFornec"});
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar({rfrVar:"A6622ContaPagRecDataDebito"});
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar({rfrVar:"A1692ContaPagRecSituacao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[90]);
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar({rfrVar:"A5440ContaPagRecTipoPagmto"});
   GridContainer.addRefreshingVar({rfrVar:"A1638ContaPagRecCliForFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"A2115ContaPagRecVlrAtualSemSinal"});
   GridContainer.addRefreshingVar({rfrVar:"A1715ContaPagRecVlrPagamento"});
   this.addGridBCProperty("Sdtconsultardadosremessa", ["ContaPagRecNumero"], this.GXValidFnc[122], "AV82SdtConsultarDadosRemessa");
   this.addGridBCProperty("Sdtconsultardadosremessa", ["ContaPagRecCliForFantasia"], this.GXValidFnc[123], "AV82SdtConsultarDadosRemessa");
   this.addGridBCProperty("Sdtconsultardadosremessa", ["ContaPagRecDocumento"], this.GXValidFnc[124], "AV82SdtConsultarDadosRemessa");
   this.addGridBCProperty("Sdtconsultardadosremessa", ["ContaPagRecDtEmissao"], this.GXValidFnc[125], "AV82SdtConsultarDadosRemessa");
   this.addGridBCProperty("Sdtconsultardadosremessa", ["ContaPagRecDtVencimento"], this.GXValidFnc[126], "AV82SdtConsultarDadosRemessa");
   this.addGridBCProperty("Sdtconsultardadosremessa", ["ContaPagRecVlrAtualSemSinal"], this.GXValidFnc[127], "AV82SdtConsultarDadosRemessa");
   this.addGridBCProperty("Sdtconsultardadosremessa", ["ContaPagRecTipoPagmto"], this.GXValidFnc[128], "AV82SdtConsultarDadosRemessa");
   this.addGridBCProperty("Sdtconsultardadosremessa", ["SNMarcado"], this.GXValidFnc[129], "AV82SdtConsultarDadosRemessa");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultardadosremessa());
