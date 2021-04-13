/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:54:46.7
*/
gx.evt.autoSkip = false;
gx.define('hregistrarcontasprovisoriasfrm', false, function () {
   this.ServerClass =  "hregistrarcontasprovisoriasfrm" ;
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
      this.AV69ContaProvisoriaFRMEmpId=gx.fn.getControlValue("vCONTAPROVISORIAFRMEMPID") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV70PessoaEmpresaid=gx.fn.getControlValue("vPESSOAEMPRESAID") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA") ;
      this.A1680ConvenioEmpresaId=gx.fn.getControlValue("CONVENIOEMPRESAID") ;
      this.A1681ConvenioId=gx.fn.getIntegerValue("CONVENIOID",'.') ;
      this.A2082ConvenioDescricao=gx.fn.getControlValue("CONVENIODESCRICAO") ;
      this.AV51TipoOperacao=gx.fn.getControlValue("vTIPOOPERACAO") ;
   };
   this.Validv_Cliforid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLIFORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaopagrecid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOPAGRECID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contaprovisoriafrmcliforid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(86) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIAFRMCLIFORID", gx.fn.currentGridRowImpl(86));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contaprovisoriafrmconvenioid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(86) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIAFRMCONVENIOID", gx.fn.currentGridRowImpl(86));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipoconta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCONTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaopagrecempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOPAGRECEMPRESAID");
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
   this.s122_client=function()
   {
      gx.fn.setCtrlProperty("vTIPOCONTA","Visible", 0 );
      gx.fn.setCtrlProperty("vTIPOLANCAMENTOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vQTDECARAC","Visible", 0 );
      gx.fn.setCtrlProperty("vTRANSACAOPAGRECEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vCONVENIOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vCONVENIOID","Visible", 0 );
      gx.fn.setCtrlProperty("vCONVENIODESCRICAO","Visible", 0 );
      gx.fn.setCtrlProperty("vTPTELA","Visible", 0 );
   };
   this.e1125q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1625q2_client=function()
   {
      this.executeServerEvent("'EFETIVAR'", true, arguments[0], false, false);
   };
   this.e1725q2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1225q2_client=function()
   {
      this.executeServerEvent("VCLIFORID.ISVALID", true, null, false, true);
   };
   this.e1325q2_client=function()
   {
      this.executeServerEvent("'AVANCAR'", false, null, false, false);
   };
   this.e2025q2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e1425q2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e2125q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,17,20,22,25,27,29,32,34,37,39,41,44,46,47,50,52,56,58,61,64,67,69,70,73,75,76,85,87,88,89,90,91,92,93,94,95,96,97,98,99,100,106,107,108,109,110,111,112,114,115,116,117,118,119,120,121];
   this.GXLastCtrlId =121;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",86,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistrarcontasprovisoriasfrm",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(10139,87,"CONTAPROVISORIAFRMNORESERVA","No.Reserva","","ContaProvisoriaFRMNoReserva","int",0,"px",8,8,"right",null,[],10139,"ContaProvisoriaFRMNoReserva",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10148,88,"CONTAPROVISORIAFRMCLIFORID","Código","","ContaProvisoriaFRMCliForId","int",0,"px",7,7,"right",null,[],10148,"ContaProvisoriaFRMCliForId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Clientefornecedornome",89,"vCLIENTEFORNECEDORNOME","Nome Cliente/Fornecedor","","ClienteFornecedorNome","svchar",0,"px",60,60,"left",null,[],"Clientefornecedornome","ClienteFornecedorNome",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(10155,90,"CONTAPROVISORIAFRMNODOCUMENTO","No.Documento","","ContaProvisoriaFRMNoDocumento","svchar",0,"px",20,20,"left",null,[],10155,"ContaProvisoriaFRMNoDocumento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10150,91,"CONTAPROVISORIAFRMCONVENIOID","Convênio","","ContaProvisoriaFRMConvenioId","int",0,"px",7,7,"right",null,[],10150,"ContaProvisoriaFRMConvenioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Conveniodescricaogrid",92,"vCONVENIODESCRICAOGRID","Descrição","","ConvenioDescricaoGrid","svchar",0,"px",40,40,"left",null,[],"Conveniodescricaogrid","ConvenioDescricaoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(10152,93,"CONTAPROVISORIAFRMDTEMISSAO","Dt.Emissão","","ContaProvisoriaFRMDtEmissao","date",0,"px",10,10,"right",null,[],10152,"ContaProvisoriaFRMDtEmissao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10154,94,"CONTAPROVISORIAFRMDTVENCMTO","Dt.Vencmto","","ContaProvisoriaFRMDtVencmto","date",0,"px",10,10,"right",null,[],10154,"ContaProvisoriaFRMDtVencmto",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10162,95,"CONTAPROVISORIAFRMVALOR","Valor","","ContaProvisoriaFRMValor","decimal",0,"px",22,22,"right",null,[],10162,"ContaProvisoriaFRMValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",96,0,"px",17,"px","e2025q2_client","","Excluir","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpefe","vBMPEFE",97,0,"px",17,"px","e1625q2_client","","Efetivar","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit(10158,98,"CONTAPROVISORIAFRMSNEFETIVADA","Conta Provisoria FRMSn Efetivada","","ContaProvisoriaFRMSnEfetivada","char",0,"px",1,1,"left",null,[],10158,"ContaProvisoriaFRMSnEfetivada",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10138,99,"CONTAPROVISORIAFRMEMPID","Conta Provisoria FRMEmp Id","","ContaProvisoriaFRMEmpId","char",0,"px",10,10,"left",null,[],10138,"ContaProvisoriaFRMEmpId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE8",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TABLE6",grid:0};
   GXValidFnc[14]={fld:"TABLE1",grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE2",grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vDATAINI",gxz:"ZV16DataIni",gxold:"OV16DataIni",gxvar:"AV16DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV16DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV16DataIni,0)},c2v:function(){gx.O.AV16DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vDATAFIN",gxz:"ZV17DataFin",gxold:"OV17DataFin",gxvar:"AV17DataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17DataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV17DataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIN",gx.O.AV17DataFin,0)},c2v:function(){gx.O.AV17DataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIN")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLE4",grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vDTVENINICIAL",gxz:"ZV65DtVenInicial",gxold:"OV65DtVenInicial",gxvar:"AV65DtVenInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65DtVenInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV65DtVenInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTVENINICIAL",gx.O.AV65DtVenInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV65DtVenInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTVENINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vDTVENFINAL",gxz:"ZV66DtVenFinal",gxold:"OV66DtVenFinal",gxvar:"AV66DtVenFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66DtVenFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV66DtVenFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTVENFINAL",gx.O.AV66DtVenFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV66DtVenFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTVENFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cliforid,isvalid:'e1225q2_client',rgrid:[this.Grid1Container],fld:"vCLIFORID",gxz:"ZV67CliForId",gxold:"OV67CliForId",gxvar:"AV67CliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67CliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67CliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIFORID",gx.O.AV67CliForId,0)},c2v:function(){gx.O.AV67CliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIFORNOME",gxz:"ZV68CliForNome",gxold:"OV68CliForNome",gxvar:"AV68CliForNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68CliForNome=Value},v2z:function(Value){gx.O.ZV68CliForNome=Value},v2c:function(){gx.fn.setControlValue("vCLIFORNOME",gx.O.AV68CliForNome,0)},c2v:function(){gx.O.AV68CliForNome=this.val()},val:function(){return gx.fn.getControlValue("vCLIFORNOME")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCONTAPROVISORIAFRMNORESERVA",gxz:"ZV76ContaProvisoriaFRMNoReserva",gxold:"OV76ContaProvisoriaFRMNoReserva",gxvar:"AV76ContaProvisoriaFRMNoReserva",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76ContaProvisoriaFRMNoReserva=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV76ContaProvisoriaFRMNoReserva=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPROVISORIAFRMNORESERVA",gx.O.AV76ContaProvisoriaFRMNoReserva,0)},c2v:function(){gx.O.AV76ContaProvisoriaFRMNoReserva=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPROVISORIAFRMNORESERVA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vAPENASNAOEFETIVADAS",gxz:"ZV22ApenasNaoEfetivadas",gxold:"OV22ApenasNaoEfetivadas",gxvar:"AV22ApenasNaoEfetivadas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22ApenasNaoEfetivadas=Value},v2z:function(Value){gx.O.ZV22ApenasNaoEfetivadas=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPENASNAOEFETIVADAS",gx.O.AV22ApenasNaoEfetivadas,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22ApenasNaoEfetivadas=this.val()},val:function(){return gx.fn.getControlValue("vAPENASNAOEFETIVADAS")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[58]={fld:"TABLE7",grid:0};
   GXValidFnc[61]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[64]={fld:"TABCPR",grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaopagrecid,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECID",gxz:"ZV24TransacaoPagRecId",gxold:"OV24TransacaoPagRecId",gxvar:"AV24TransacaoPagRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TransacaoPagRecId=Value},v2z:function(Value){gx.O.ZV24TransacaoPagRecId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECID",gx.O.AV24TransacaoPagRecId,0)},c2v:function(){gx.O.AV24TransacaoPagRecId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECID")},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECDESCRICAO",gxz:"ZV34TransacaoPagRecDescricao",gxold:"OV34TransacaoPagRecDescricao",gxvar:"AV34TransacaoPagRecDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TransacaoPagRecDescricao=Value},v2z:function(Value){gx.O.ZV34TransacaoPagRecDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECDESCRICAO",gx.O.AV34TransacaoPagRecDescricao,0)},c2v:function(){gx.O.AV34TransacaoPagRecDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOID",gxz:"ZV23TipoLancamentoId",gxold:"OV23TipoLancamentoId",gxvar:"AV23TipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23TipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23TipoLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOID",gx.O.AV23TipoLancamentoId,0)},c2v:function(){gx.O.AV23TipoLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTODESCRICAO",gxz:"ZV30TipoLancamentoDescricao",gxold:"OV30TipoLancamentoDescricao",gxvar:"AV30TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TipoLancamentoDescricao=Value},v2z:function(Value){gx.O.ZV30TipoLancamentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTODESCRICAO",gx.O.AV30TipoLancamentoDescricao,0)},c2v:function(){gx.O.AV30TipoLancamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[85]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[87]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMNORESERVA",gxz:"Z10139ContaProvisoriaFRMNoReserva",gxold:"O10139ContaProvisoriaFRMNoReserva",gxvar:"A10139ContaProvisoriaFRMNoReserva",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10139ContaProvisoriaFRMNoReserva=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10139ContaProvisoriaFRMNoReserva=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMNORESERVA",row || gx.fn.currentGridRowImpl(86),gx.O.A10139ContaProvisoriaFRMNoReserva,0)},c2v:function(){gx.O.A10139ContaProvisoriaFRMNoReserva=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPROVISORIAFRMNORESERVA",row || gx.fn.currentGridRowImpl(86),'.')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:this.Valid_Contaprovisoriafrmcliforid,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCLIFORID",gxz:"Z10148ContaProvisoriaFRMCliForId",gxold:"O10148ContaProvisoriaFRMCliForId",gxvar:"A10148ContaProvisoriaFRMCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10148ContaProvisoriaFRMCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10148ContaProvisoriaFRMCliForId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMCLIFORID",row || gx.fn.currentGridRowImpl(86),gx.O.A10148ContaProvisoriaFRMCliForId,0)},c2v:function(){gx.O.A10148ContaProvisoriaFRMCliForId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPROVISORIAFRMCLIFORID",row || gx.fn.currentGridRowImpl(86),'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEFORNECEDORNOME",gxz:"ZV72ClienteFornecedorNome",gxold:"OV72ClienteFornecedorNome",gxvar:"AV72ClienteFornecedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV72ClienteFornecedorNome=Value},v2z:function(Value){gx.O.ZV72ClienteFornecedorNome=Value},v2c:function(row){gx.fn.setGridControlValue("vCLIENTEFORNECEDORNOME",row || gx.fn.currentGridRowImpl(86),gx.O.AV72ClienteFornecedorNome,0)},c2v:function(){gx.O.AV72ClienteFornecedorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLIENTEFORNECEDORNOME",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMNODOCUMENTO",gxz:"Z10155ContaProvisoriaFRMNoDocumento",gxold:"O10155ContaProvisoriaFRMNoDocumento",gxvar:"A10155ContaProvisoriaFRMNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10155ContaProvisoriaFRMNoDocumento=Value},v2z:function(Value){gx.O.Z10155ContaProvisoriaFRMNoDocumento=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMNODOCUMENTO",row || gx.fn.currentGridRowImpl(86),gx.O.A10155ContaProvisoriaFRMNoDocumento,0)},c2v:function(){gx.O.A10155ContaProvisoriaFRMNoDocumento=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPROVISORIAFRMNODOCUMENTO",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:this.Valid_Contaprovisoriafrmconvenioid,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCONVENIOID",gxz:"Z10150ContaProvisoriaFRMConvenioId",gxold:"O10150ContaProvisoriaFRMConvenioId",gxvar:"A10150ContaProvisoriaFRMConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10150ContaProvisoriaFRMConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10150ContaProvisoriaFRMConvenioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMCONVENIOID",row || gx.fn.currentGridRowImpl(86),gx.O.A10150ContaProvisoriaFRMConvenioId,0)},c2v:function(){gx.O.A10150ContaProvisoriaFRMConvenioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPROVISORIAFRMCONVENIOID",row || gx.fn.currentGridRowImpl(86),'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAOGRID",gxz:"ZV74ConvenioDescricaoGrid",gxold:"OV74ConvenioDescricaoGrid",gxvar:"AV74ConvenioDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV74ConvenioDescricaoGrid=Value},v2z:function(Value){gx.O.ZV74ConvenioDescricaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vCONVENIODESCRICAOGRID",row || gx.fn.currentGridRowImpl(86),gx.O.AV74ConvenioDescricaoGrid,0)},c2v:function(){gx.O.AV74ConvenioDescricaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONVENIODESCRICAOGRID",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMDTEMISSAO",gxz:"Z10152ContaProvisoriaFRMDtEmissao",gxold:"O10152ContaProvisoriaFRMDtEmissao",gxvar:"A10152ContaProvisoriaFRMDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10152ContaProvisoriaFRMDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10152ContaProvisoriaFRMDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMDTEMISSAO",row || gx.fn.currentGridRowImpl(86),gx.O.A10152ContaProvisoriaFRMDtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10152ContaProvisoriaFRMDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPROVISORIAFRMDTEMISSAO",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMDTVENCMTO",gxz:"Z10154ContaProvisoriaFRMDtVencmto",gxold:"O10154ContaProvisoriaFRMDtVencmto",gxvar:"A10154ContaProvisoriaFRMDtVencmto",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10154ContaProvisoriaFRMDtVencmto=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10154ContaProvisoriaFRMDtVencmto=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMDTVENCMTO",row || gx.fn.currentGridRowImpl(86),gx.O.A10154ContaProvisoriaFRMDtVencmto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10154ContaProvisoriaFRMDtVencmto=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPROVISORIAFRMDTVENCMTO",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMVALOR",gxz:"Z10162ContaProvisoriaFRMValor",gxold:"O10162ContaProvisoriaFRMValor",gxvar:"A10162ContaProvisoriaFRMValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10162ContaProvisoriaFRMValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10162ContaProvisoriaFRMValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CONTAPROVISORIAFRMVALOR",row || gx.fn.currentGridRowImpl(86),gx.O.A10162ContaProvisoriaFRMValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10162ContaProvisoriaFRMValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CONTAPROVISORIAFRMVALOR",row || gx.fn.currentGridRowImpl(86),'.',',')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV77bmpExc",gxold:"OV77bmpExc",gxvar:"AV77bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV77bmpExc=Value},v2z:function(Value){gx.O.ZV77bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(86),gx.O.AV77bmpExc,gx.O.AV83Bmpexc_GXI)},c2v:function(){gx.O.AV83Bmpexc_GXI=this.val_GXI();gx.O.AV77bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(86))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(86))}, gxvar_GXI:'AV83Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEFE",gxz:"ZV14bmpEfe",gxold:"OV14bmpEfe",gxvar:"AV14bmpEfe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV14bmpEfe=Value},v2z:function(Value){gx.O.ZV14bmpEfe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEFE",row || gx.fn.currentGridRowImpl(86),gx.O.AV14bmpEfe,gx.O.AV82Bmpefe_GXI)},c2v:function(){gx.O.AV82Bmpefe_GXI=this.val_GXI();gx.O.AV14bmpEfe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEFE",row || gx.fn.currentGridRowImpl(86))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEFE_GXI",row || gx.fn.currentGridRowImpl(86))}, gxvar_GXI:'AV82Bmpefe_GXI',nac:gx.falseFn};
   GXValidFnc[98]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMSNEFETIVADA",gxz:"Z10158ContaProvisoriaFRMSnEfetivada",gxold:"O10158ContaProvisoriaFRMSnEfetivada",gxvar:"A10158ContaProvisoriaFRMSnEfetivada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10158ContaProvisoriaFRMSnEfetivada=Value},v2z:function(Value){gx.O.Z10158ContaProvisoriaFRMSnEfetivada=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMSNEFETIVADA",row || gx.fn.currentGridRowImpl(86),gx.O.A10158ContaProvisoriaFRMSnEfetivada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10158ContaProvisoriaFRMSnEfetivada=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPROVISORIAFRMSNEFETIVADA",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[99]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:86,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMEMPID",gxz:"Z10138ContaProvisoriaFRMEmpId",gxold:"O10138ContaProvisoriaFRMEmpId",gxvar:"A10138ContaProvisoriaFRMEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10138ContaProvisoriaFRMEmpId=Value},v2z:function(Value){gx.O.Z10138ContaProvisoriaFRMEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMEMPID",row || gx.fn.currentGridRowImpl(86),gx.O.A10138ContaProvisoriaFRMEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10138ContaProvisoriaFRMEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPROVISORIAFRMEMPID",row || gx.fn.currentGridRowImpl(86))},nac:gx.falseFn};
   GXValidFnc[100]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[106]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV43ConvenioDescricao",gxold:"OV43ConvenioDescricao",gxvar:"AV43ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV43ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV43ConvenioDescricao,0)},c2v:function(){gx.O.AV43ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV44ConvenioId",gxold:"OV44ConvenioId",gxvar:"AV44ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV44ConvenioId,0)},c2v:function(){gx.O.AV44ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipoconta,isvalid:null,rgrid:[this.Grid1Container],fld:"vTIPOCONTA",gxz:"ZV26TipoConta",gxold:"OV26TipoConta",gxvar:"AV26TipoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TipoConta=Value},v2z:function(Value){gx.O.ZV26TipoConta=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONTA",gx.O.AV26TipoConta,0)},c2v:function(){gx.O.AV26TipoConta=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTA")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoempresaid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOEMPRESAID",gxz:"ZV29TipoLancamentoEmpresaid",gxold:"OV29TipoLancamentoEmpresaid",gxvar:"AV29TipoLancamentoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TipoLancamentoEmpresaid=Value},v2z:function(Value){gx.O.ZV29TipoLancamentoEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOEMPRESAID",gx.O.AV29TipoLancamentoEmpresaid,0)},c2v:function(){gx.O.AV29TipoLancamentoEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARAC",gxz:"ZV31QtdeCarac",gxold:"OV31QtdeCarac",gxvar:"AV31QtdeCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31QtdeCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31QtdeCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARAC",gx.O.AV31QtdeCarac,0)},c2v:function(){gx.O.AV31QtdeCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARAC",'.')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaopagrecempresaid,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECEMPRESAID",gxz:"ZV28TransacaoPagRecEmpresaId",gxold:"OV28TransacaoPagRecEmpresaId",gxvar:"AV28TransacaoPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TransacaoPagRecEmpresaId=Value},v2z:function(Value){gx.O.ZV28TransacaoPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECEMPRESAID",gx.O.AV28TransacaoPagRecEmpresaId,0)},c2v:function(){gx.O.AV28TransacaoPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioempresaid,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV45ConvenioEmpresaId",gxold:"OV45ConvenioEmpresaId",gxvar:"AV45ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV45ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV45ConvenioEmpresaId,0)},c2v:function(){gx.O.AV45ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPTELA",gxz:"ZV57TpTela",gxold:"OV57TpTela",gxvar:"AV57TpTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57TpTela=Value},v2z:function(Value){gx.O.ZV57TpTela=Value},v2c:function(){gx.fn.setControlValue("vTPTELA",gx.O.AV57TpTela,0)},c2v:function(){gx.O.AV57TpTela=this.val()},val:function(){return gx.fn.getControlValue("vTPTELA")},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV50AcessoSistemaSequencia",gxold:"OV50AcessoSistemaSequencia",gxvar:"AV50AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV50AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV50AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[116]={fld:"JS", format:2,grid:0};
   GXValidFnc[117]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV59Sim",gxold:"OV59Sim",gxvar:"AV59Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59Sim=Value},v2z:function(Value){gx.O.ZV59Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV59Sim,0)},c2v:function(){gx.O.AV59Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV75Nao",gxold:"OV75Nao",gxvar:"AV75Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75Nao=Value},v2z:function(Value){gx.O.ZV75Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV75Nao,0)},c2v:function(){gx.O.AV75Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[119]={fld:"PROMPT_CLIFORID",grid:0};
   GXValidFnc[120]={fld:"PROMPT_TRANSACAOPAGRECID",grid:0};
   GXValidFnc[121]={fld:"PROMPT_TIPOLANCAMENTOID",grid:0};
   this.AV16DataIni = gx.date.nullDate() ;
   this.ZV16DataIni = gx.date.nullDate() ;
   this.OV16DataIni = gx.date.nullDate() ;
   this.AV17DataFin = gx.date.nullDate() ;
   this.ZV17DataFin = gx.date.nullDate() ;
   this.OV17DataFin = gx.date.nullDate() ;
   this.AV65DtVenInicial = gx.date.nullDate() ;
   this.ZV65DtVenInicial = gx.date.nullDate() ;
   this.OV65DtVenInicial = gx.date.nullDate() ;
   this.AV66DtVenFinal = gx.date.nullDate() ;
   this.ZV66DtVenFinal = gx.date.nullDate() ;
   this.OV66DtVenFinal = gx.date.nullDate() ;
   this.AV67CliForId = 0 ;
   this.ZV67CliForId = 0 ;
   this.OV67CliForId = 0 ;
   this.AV68CliForNome = "" ;
   this.ZV68CliForNome = "" ;
   this.OV68CliForNome = "" ;
   this.AV76ContaProvisoriaFRMNoReserva = 0 ;
   this.ZV76ContaProvisoriaFRMNoReserva = 0 ;
   this.OV76ContaProvisoriaFRMNoReserva = 0 ;
   this.AV22ApenasNaoEfetivadas = "" ;
   this.ZV22ApenasNaoEfetivadas = "" ;
   this.OV22ApenasNaoEfetivadas = "" ;
   this.AV24TransacaoPagRecId = "" ;
   this.ZV24TransacaoPagRecId = "" ;
   this.OV24TransacaoPagRecId = "" ;
   this.AV34TransacaoPagRecDescricao = "" ;
   this.ZV34TransacaoPagRecDescricao = "" ;
   this.OV34TransacaoPagRecDescricao = "" ;
   this.AV23TipoLancamentoId = 0 ;
   this.ZV23TipoLancamentoId = 0 ;
   this.OV23TipoLancamentoId = 0 ;
   this.AV30TipoLancamentoDescricao = "" ;
   this.ZV30TipoLancamentoDescricao = "" ;
   this.OV30TipoLancamentoDescricao = "" ;
   this.Z10139ContaProvisoriaFRMNoReserva = 0 ;
   this.O10139ContaProvisoriaFRMNoReserva = 0 ;
   this.Z10148ContaProvisoriaFRMCliForId = 0 ;
   this.O10148ContaProvisoriaFRMCliForId = 0 ;
   this.ZV72ClienteFornecedorNome = "" ;
   this.OV72ClienteFornecedorNome = "" ;
   this.Z10155ContaProvisoriaFRMNoDocumento = "" ;
   this.O10155ContaProvisoriaFRMNoDocumento = "" ;
   this.Z10150ContaProvisoriaFRMConvenioId = 0 ;
   this.O10150ContaProvisoriaFRMConvenioId = 0 ;
   this.ZV74ConvenioDescricaoGrid = "" ;
   this.OV74ConvenioDescricaoGrid = "" ;
   this.Z10152ContaProvisoriaFRMDtEmissao = gx.date.nullDate() ;
   this.O10152ContaProvisoriaFRMDtEmissao = gx.date.nullDate() ;
   this.Z10154ContaProvisoriaFRMDtVencmto = gx.date.nullDate() ;
   this.O10154ContaProvisoriaFRMDtVencmto = gx.date.nullDate() ;
   this.Z10162ContaProvisoriaFRMValor = 0 ;
   this.O10162ContaProvisoriaFRMValor = 0 ;
   this.ZV77bmpExc = "" ;
   this.OV77bmpExc = "" ;
   this.ZV14bmpEfe = "" ;
   this.OV14bmpEfe = "" ;
   this.Z10158ContaProvisoriaFRMSnEfetivada = "" ;
   this.O10158ContaProvisoriaFRMSnEfetivada = "" ;
   this.Z10138ContaProvisoriaFRMEmpId = "" ;
   this.O10138ContaProvisoriaFRMEmpId = "" ;
   this.AV43ConvenioDescricao = "" ;
   this.ZV43ConvenioDescricao = "" ;
   this.OV43ConvenioDescricao = "" ;
   this.AV44ConvenioId = 0 ;
   this.ZV44ConvenioId = 0 ;
   this.OV44ConvenioId = 0 ;
   this.AV26TipoConta = "" ;
   this.ZV26TipoConta = "" ;
   this.OV26TipoConta = "" ;
   this.AV29TipoLancamentoEmpresaid = "" ;
   this.ZV29TipoLancamentoEmpresaid = "" ;
   this.OV29TipoLancamentoEmpresaid = "" ;
   this.AV31QtdeCarac = 0 ;
   this.ZV31QtdeCarac = 0 ;
   this.OV31QtdeCarac = 0 ;
   this.AV28TransacaoPagRecEmpresaId = "" ;
   this.ZV28TransacaoPagRecEmpresaId = "" ;
   this.OV28TransacaoPagRecEmpresaId = "" ;
   this.AV45ConvenioEmpresaId = "" ;
   this.ZV45ConvenioEmpresaId = "" ;
   this.OV45ConvenioEmpresaId = "" ;
   this.AV57TpTela = "" ;
   this.ZV57TpTela = "" ;
   this.OV57TpTela = "" ;
   this.AV50AcessoSistemaSequencia = 0 ;
   this.ZV50AcessoSistemaSequencia = 0 ;
   this.OV50AcessoSistemaSequencia = 0 ;
   this.AV59Sim = "" ;
   this.ZV59Sim = "" ;
   this.OV59Sim = "" ;
   this.AV75Nao = "" ;
   this.ZV75Nao = "" ;
   this.OV75Nao = "" ;
   this.AV16DataIni = gx.date.nullDate() ;
   this.AV17DataFin = gx.date.nullDate() ;
   this.AV65DtVenInicial = gx.date.nullDate() ;
   this.AV66DtVenFinal = gx.date.nullDate() ;
   this.AV67CliForId = 0 ;
   this.AV68CliForNome = "" ;
   this.AV76ContaProvisoriaFRMNoReserva = 0 ;
   this.AV22ApenasNaoEfetivadas = "" ;
   this.AV24TransacaoPagRecId = "" ;
   this.AV34TransacaoPagRecDescricao = "" ;
   this.AV23TipoLancamentoId = 0 ;
   this.AV30TipoLancamentoDescricao = "" ;
   this.AV43ConvenioDescricao = "" ;
   this.AV44ConvenioId = 0 ;
   this.AV26TipoConta = "" ;
   this.AV29TipoLancamentoEmpresaid = "" ;
   this.AV31QtdeCarac = 0 ;
   this.AV28TransacaoPagRecEmpresaId = "" ;
   this.AV45ConvenioEmpresaId = "" ;
   this.AV57TpTela = "" ;
   this.AV50AcessoSistemaSequencia = 0 ;
   this.AV59Sim = "" ;
   this.AV75Nao = "" ;
   this.AV51TipoOperacao = "" ;
   this.A10159ContaProvisoriaFRMTpConta = "" ;
   this.A10139ContaProvisoriaFRMNoReserva = 0 ;
   this.A10148ContaProvisoriaFRMCliForId = 0 ;
   this.AV72ClienteFornecedorNome = "" ;
   this.A10155ContaProvisoriaFRMNoDocumento = "" ;
   this.A10150ContaProvisoriaFRMConvenioId = 0 ;
   this.AV74ConvenioDescricaoGrid = "" ;
   this.A10152ContaProvisoriaFRMDtEmissao = gx.date.nullDate() ;
   this.A10154ContaProvisoriaFRMDtVencmto = gx.date.nullDate() ;
   this.A10162ContaProvisoriaFRMValor = 0 ;
   this.AV77bmpExc = "" ;
   this.AV14bmpEfe = "" ;
   this.A10158ContaProvisoriaFRMSnEfetivada = "" ;
   this.A10138ContaProvisoriaFRMEmpId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A963TipoLancamentoDescricao = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A1266TransacaoPagRecId = "" ;
   this.A1175TransacaoPagRecTipo = "" ;
   this.A1212TransacaoPagRecEmpresaId = "" ;
   this.A1204TransacaoPagRecDescricao = "" ;
   this.A1163TipoLancamentoPagRecEmpresaId = "" ;
   this.A1217TipoLancamentoPagRecId = 0 ;
   this.AV69ContaProvisoriaFRMEmpId = "" ;
   this.AV70PessoaEmpresaid = "" ;
   this.Events = {"e1125q2_client": ["'FECHAR'", true] ,"e1625q2_client": ["'EFETIVAR'", true] ,"e1725q2_client": ["ENTER", true] ,"e1225q2_client": ["VCLIFORID.ISVALID", true] ,"e1325q2_client": ["'AVANCAR'", true] ,"e2025q2_client": ["'EXCLUIR'", true] ,"e1425q2_client": ["'CANCELAR'", true] ,"e2125q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV16DataIni',fld:'vDATAINI'},{av:'AV17DataFin',fld:'vDATAFIN'},{av:'AV65DtVenInicial',fld:'vDTVENINICIAL'},{av:'AV66DtVenFinal',fld:'vDTVENFINAL'},{av:'AV67CliForId',fld:'vCLIFORID'},{av:'AV76ContaProvisoriaFRMNoReserva',fld:'vCONTAPROVISORIAFRMNORESERVA'},{av:'AV22ApenasNaoEfetivadas',fld:'vAPENASNAOEFETIVADAS'},{av:'AV26TipoConta',fld:'vTIPOCONTA'},{av:'AV69ContaProvisoriaFRMEmpId',fld:'vCONTAPROVISORIAFRMEMPID'},{av:'AV14bmpEfe',fld:'vBMPEFE'},{av:'AV77bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaid',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10148ContaProvisoriaFRMCliForId',fld:'CONTAPROVISORIAFRMCLIFORID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV45ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A10150ContaProvisoriaFRMConvenioId',fld:'CONTAPROVISORIAFRMCONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A10158ContaProvisoriaFRMSnEfetivada',fld:'CONTAPROVISORIAFRMSNEFETIVADA'},{av:'AV57TpTela',fld:'vTPTELA'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDATAINI","Enabled")',ctrl:'vDATAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFIN","Enabled")',ctrl:'vDATAFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTVENINICIAL","Enabled")',ctrl:'vDTVENINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTVENFINAL","Enabled")',ctrl:'vDTVENFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPENASNAOEFETIVADAS","Enabled")',ctrl:'vAPENASNAOEFETIVADAS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOPAGRECID","Enabled")',ctrl:'vTRANSACAOPAGRECID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTIPOLANCAMENTOID","Enabled")',ctrl:'vTIPOLANCAMENTOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIFORID","Enabled")',ctrl:'vCLIFORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTAPROVISORIAFRMNORESERVA","Enabled")',ctrl:'vCONTAPROVISORIAFRMNORESERVA',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV50AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'EFETIVAR'"] = [[{av:'AV51TipoOperacao',fld:'vTIPOOPERACAO',hsh:true},{av:'A10139ContaProvisoriaFRMNoReserva',fld:'CONTAPROVISORIAFRMNORESERVA'},{av:'AV24TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV23TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'AV16DataIni',fld:'vDATAINI'},{av:'AV17DataFin',fld:'vDATAFIN'},{av:'AV65DtVenInicial',fld:'vDTVENINICIAL'},{av:'AV66DtVenFinal',fld:'vDTVENFINAL'},{av:'AV67CliForId',fld:'vCLIFORID'},{av:'AV22ApenasNaoEfetivadas',fld:'vAPENASNAOEFETIVADAS'}],[{av:'AV73SnErroTela',fld:'vSNERROTELA'},{av:'AV38ApresentaTela',fld:'vAPRESENTATELA'},{av:'AV39message',fld:'vMESSAGE'},{av:'AV37Filtro',fld:'vFILTRO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV16DataIni',fld:'vDATAINI'},{av:'AV17DataFin',fld:'vDATAFIN'},{av:'AV65DtVenInicial',fld:'vDTVENINICIAL'},{av:'AV66DtVenFinal',fld:'vDTVENFINAL'},{av:'AV76ContaProvisoriaFRMNoReserva',fld:'vCONTAPROVISORIAFRMNORESERVA'},{av:'AV67CliForId',fld:'vCLIFORID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaid',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV24TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV41TipoLancamentoPagRecEmpresaId',fld:'vTIPOLANCAMENTOPAGRECEMPRESAID'},{av:'AV42TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'A1212TransacaoPagRecEmpresaId',fld:'TRANSACAOPAGRECEMPRESAID'},{av:'AV28TransacaoPagRecEmpresaId',fld:'vTRANSACAOPAGRECEMPRESAID'},{av:'A1175TransacaoPagRecTipo',fld:'TRANSACAOPAGRECTIPO'},{av:'AV26TipoConta',fld:'vTIPOCONTA'},{av:'A1266TransacaoPagRecId',fld:'TRANSACAOPAGRECID'},{av:'A1204TransacaoPagRecDescricao',fld:'TRANSACAOPAGRECDESCRICAO'},{av:'A1163TipoLancamentoPagRecEmpresaId',fld:'TIPOLANCAMENTOPAGRECEMPRESAID'},{av:'A1217TipoLancamentoPagRecId',fld:'TIPOLANCAMENTOPAGRECID'},{av:'AV23TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV29TipoLancamentoEmpresaid',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A963TipoLancamentoDescricao',fld:'TIPOLANCAMENTODESCRICAO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'}],[{av:'AV71SnMonta',fld:'vSNMONTA'},{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV57TpTela',fld:'vTPTELA'},{av:'AV16DataIni',fld:'vDATAINI'},{av:'AV17DataFin',fld:'vDATAFIN'},{av:'AV65DtVenInicial',fld:'vDTVENINICIAL'},{av:'AV66DtVenFinal',fld:'vDTVENFINAL'},{av:'AV84GXLvl111',fld:'vGXLVL111'},{av:'AV41TipoLancamentoPagRecEmpresaId',fld:'vTIPOLANCAMENTOPAGRECEMPRESAID'},{av:'AV42TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'AV85GXLvl133',fld:'vGXLVL133'},{av:'AV34TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'},{av:'AV23TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'AV86GXLvl169',fld:'vGXLVL169'},{av:'AV30TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaid',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10148ContaProvisoriaFRMCliForId',fld:'CONTAPROVISORIAFRMCLIFORID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV45ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A10150ContaProvisoriaFRMConvenioId',fld:'CONTAPROVISORIAFRMCONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A10158ContaProvisoriaFRMSnEfetivada',fld:'CONTAPROVISORIAFRMSNEFETIVADA'}],[{av:'AV72ClienteFornecedorNome',fld:'vCLIENTEFORNECEDORNOME'},{av:'AV74ConvenioDescricaoGrid',fld:'vCONVENIODESCRICAOGRID'},{av:'gx.fn.getCtrlProperty("vBMPEFE","Enabled")',ctrl:'vBMPEFE',prop:'Enabled'}]];
   this.EvtParms["'CANCELAR'"] = [[],[{av:'AV57TpTela',fld:'vTPTELA'},{av:'AV71SnMonta',fld:'vSNMONTA'}]];
   this.EvtParms["VCLIFORID.ISVALID"] = [[{av:'AV70PessoaEmpresaid',fld:'vPESSOAEMPRESAID'},{av:'AV67CliForId',fld:'vCLIFORID'}],[{av:'AV72ClienteFornecedorNome',fld:'vCLIENTEFORNECEDORNOME'}]];
   this.EvtParms["'AVANCAR'"] = [[{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV16DataIni',fld:'vDATAINI'},{av:'AV17DataFin',fld:'vDATAFIN'},{av:'AV65DtVenInicial',fld:'vDTVENINICIAL'},{av:'AV66DtVenFinal',fld:'vDTVENFINAL'},{av:'AV76ContaProvisoriaFRMNoReserva',fld:'vCONTAPROVISORIAFRMNORESERVA'},{av:'AV67CliForId',fld:'vCLIFORID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaid',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV24TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV41TipoLancamentoPagRecEmpresaId',fld:'vTIPOLANCAMENTOPAGRECEMPRESAID'},{av:'AV42TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'A1212TransacaoPagRecEmpresaId',fld:'TRANSACAOPAGRECEMPRESAID'},{av:'AV28TransacaoPagRecEmpresaId',fld:'vTRANSACAOPAGRECEMPRESAID'},{av:'A1175TransacaoPagRecTipo',fld:'TRANSACAOPAGRECTIPO'},{av:'AV26TipoConta',fld:'vTIPOCONTA'},{av:'A1266TransacaoPagRecId',fld:'TRANSACAOPAGRECID'},{av:'A1204TransacaoPagRecDescricao',fld:'TRANSACAOPAGRECDESCRICAO'},{av:'A1163TipoLancamentoPagRecEmpresaId',fld:'TIPOLANCAMENTOPAGRECEMPRESAID'},{av:'A1217TipoLancamentoPagRecId',fld:'TIPOLANCAMENTOPAGRECID'},{av:'AV23TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV29TipoLancamentoEmpresaid',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A963TipoLancamentoDescricao',fld:'TIPOLANCAMENTODESCRICAO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'}],[{av:'AV71SnMonta',fld:'vSNMONTA'},{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV57TpTela',fld:'vTPTELA'},{av:'AV16DataIni',fld:'vDATAINI'},{av:'AV17DataFin',fld:'vDATAFIN'},{av:'AV65DtVenInicial',fld:'vDTVENINICIAL'},{av:'AV66DtVenFinal',fld:'vDTVENFINAL'},{av:'AV84GXLvl111',fld:'vGXLVL111'},{av:'AV41TipoLancamentoPagRecEmpresaId',fld:'vTIPOLANCAMENTOPAGRECEMPRESAID'},{av:'AV42TipoLancamentoPagRecId',fld:'vTIPOLANCAMENTOPAGRECID'},{av:'AV85GXLvl133',fld:'vGXLVL133'},{av:'AV34TransacaoPagRecDescricao',fld:'vTRANSACAOPAGRECDESCRICAO'},{av:'AV23TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'AV86GXLvl169',fld:'vGXLVL169'},{av:'AV30TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A10138ContaProvisoriaFRMEmpId',fld:'CONTAPROVISORIAFRMEMPID'},{av:'A10139ContaProvisoriaFRMNoReserva',fld:'CONTAPROVISORIAFRMNORESERVA'}],[]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV16DataIni',fld:'vDATAINI'},{av:'AV17DataFin',fld:'vDATAFIN'},{av:'AV65DtVenInicial',fld:'vDTVENINICIAL'},{av:'AV66DtVenFinal',fld:'vDTVENFINAL'},{av:'AV67CliForId',fld:'vCLIFORID'},{av:'AV76ContaProvisoriaFRMNoReserva',fld:'vCONTAPROVISORIAFRMNORESERVA'},{av:'AV22ApenasNaoEfetivadas',fld:'vAPENASNAOEFETIVADAS'},{av:'AV26TipoConta',fld:'vTIPOCONTA'},{av:'AV69ContaProvisoriaFRMEmpId',fld:'vCONTAPROVISORIAFRMEMPID'},{av:'AV14bmpEfe',fld:'vBMPEFE'},{av:'AV77bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaid',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10148ContaProvisoriaFRMCliForId',fld:'CONTAPROVISORIAFRMCLIFORID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV45ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A10150ContaProvisoriaFRMConvenioId',fld:'CONTAPROVISORIAFRMCONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A10158ContaProvisoriaFRMSnEfetivada',fld:'CONTAPROVISORIAFRMSNEFETIVADA'},{av:'AV57TpTela',fld:'vTPTELA'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDATAINI","Enabled")',ctrl:'vDATAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFIN","Enabled")',ctrl:'vDATAFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTVENINICIAL","Enabled")',ctrl:'vDTVENINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTVENFINAL","Enabled")',ctrl:'vDTVENFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPENASNAOEFETIVADAS","Enabled")',ctrl:'vAPENASNAOEFETIVADAS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOPAGRECID","Enabled")',ctrl:'vTRANSACAOPAGRECID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTIPOLANCAMENTOID","Enabled")',ctrl:'vTIPOLANCAMENTOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIFORID","Enabled")',ctrl:'vCLIFORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTAPROVISORIAFRMNORESERVA","Enabled")',ctrl:'vCONTAPROVISORIAFRMNORESERVA',prop:'Enabled'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV16DataIni',fld:'vDATAINI'},{av:'AV17DataFin',fld:'vDATAFIN'},{av:'AV65DtVenInicial',fld:'vDTVENINICIAL'},{av:'AV66DtVenFinal',fld:'vDTVENFINAL'},{av:'AV67CliForId',fld:'vCLIFORID'},{av:'AV76ContaProvisoriaFRMNoReserva',fld:'vCONTAPROVISORIAFRMNORESERVA'},{av:'AV22ApenasNaoEfetivadas',fld:'vAPENASNAOEFETIVADAS'},{av:'AV26TipoConta',fld:'vTIPOCONTA'},{av:'AV69ContaProvisoriaFRMEmpId',fld:'vCONTAPROVISORIAFRMEMPID'},{av:'AV14bmpEfe',fld:'vBMPEFE'},{av:'AV77bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaid',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10148ContaProvisoriaFRMCliForId',fld:'CONTAPROVISORIAFRMCLIFORID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV45ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A10150ContaProvisoriaFRMConvenioId',fld:'CONTAPROVISORIAFRMCONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A10158ContaProvisoriaFRMSnEfetivada',fld:'CONTAPROVISORIAFRMSNEFETIVADA'},{av:'AV57TpTela',fld:'vTPTELA'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDATAINI","Enabled")',ctrl:'vDATAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFIN","Enabled")',ctrl:'vDATAFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTVENINICIAL","Enabled")',ctrl:'vDTVENINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTVENFINAL","Enabled")',ctrl:'vDTVENFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPENASNAOEFETIVADAS","Enabled")',ctrl:'vAPENASNAOEFETIVADAS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOPAGRECID","Enabled")',ctrl:'vTRANSACAOPAGRECID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTIPOLANCAMENTOID","Enabled")',ctrl:'vTIPOLANCAMENTOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIFORID","Enabled")',ctrl:'vCLIFORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTAPROVISORIAFRMNORESERVA","Enabled")',ctrl:'vCONTAPROVISORIAFRMNORESERVA',prop:'Enabled'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV16DataIni',fld:'vDATAINI'},{av:'AV17DataFin',fld:'vDATAFIN'},{av:'AV65DtVenInicial',fld:'vDTVENINICIAL'},{av:'AV66DtVenFinal',fld:'vDTVENFINAL'},{av:'AV67CliForId',fld:'vCLIFORID'},{av:'AV76ContaProvisoriaFRMNoReserva',fld:'vCONTAPROVISORIAFRMNORESERVA'},{av:'AV22ApenasNaoEfetivadas',fld:'vAPENASNAOEFETIVADAS'},{av:'AV26TipoConta',fld:'vTIPOCONTA'},{av:'AV69ContaProvisoriaFRMEmpId',fld:'vCONTAPROVISORIAFRMEMPID'},{av:'AV14bmpEfe',fld:'vBMPEFE'},{av:'AV77bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaid',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10148ContaProvisoriaFRMCliForId',fld:'CONTAPROVISORIAFRMCLIFORID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV45ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A10150ContaProvisoriaFRMConvenioId',fld:'CONTAPROVISORIAFRMCONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A10158ContaProvisoriaFRMSnEfetivada',fld:'CONTAPROVISORIAFRMSNEFETIVADA'},{av:'AV57TpTela',fld:'vTPTELA'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDATAINI","Enabled")',ctrl:'vDATAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFIN","Enabled")',ctrl:'vDATAFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTVENINICIAL","Enabled")',ctrl:'vDTVENINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTVENFINAL","Enabled")',ctrl:'vDTVENFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPENASNAOEFETIVADAS","Enabled")',ctrl:'vAPENASNAOEFETIVADAS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOPAGRECID","Enabled")',ctrl:'vTRANSACAOPAGRECID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTIPOLANCAMENTOID","Enabled")',ctrl:'vTIPOLANCAMENTOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIFORID","Enabled")',ctrl:'vCLIFORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTAPROVISORIAFRMNORESERVA","Enabled")',ctrl:'vCONTAPROVISORIAFRMNORESERVA',prop:'Enabled'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV16DataIni',fld:'vDATAINI'},{av:'AV17DataFin',fld:'vDATAFIN'},{av:'AV65DtVenInicial',fld:'vDTVENINICIAL'},{av:'AV66DtVenFinal',fld:'vDTVENFINAL'},{av:'AV67CliForId',fld:'vCLIFORID'},{av:'AV76ContaProvisoriaFRMNoReserva',fld:'vCONTAPROVISORIAFRMNORESERVA'},{av:'AV22ApenasNaoEfetivadas',fld:'vAPENASNAOEFETIVADAS'},{av:'AV26TipoConta',fld:'vTIPOCONTA'},{av:'AV69ContaProvisoriaFRMEmpId',fld:'vCONTAPROVISORIAFRMEMPID'},{av:'AV14bmpEfe',fld:'vBMPEFE'},{av:'AV77bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaid',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A10148ContaProvisoriaFRMCliForId',fld:'CONTAPROVISORIAFRMCLIFORID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV45ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A10150ContaProvisoriaFRMConvenioId',fld:'CONTAPROVISORIAFRMCONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A10158ContaProvisoriaFRMSnEfetivada',fld:'CONTAPROVISORIAFRMSNEFETIVADA'},{av:'AV57TpTela',fld:'vTPTELA'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDATAINI","Enabled")',ctrl:'vDATAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFIN","Enabled")',ctrl:'vDATAFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTVENINICIAL","Enabled")',ctrl:'vDTVENINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTVENFINAL","Enabled")',ctrl:'vDTVENFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPENASNAOEFETIVADAS","Enabled")',ctrl:'vAPENASNAOEFETIVADAS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTRANSACAOPAGRECID","Enabled")',ctrl:'vTRANSACAOPAGRECID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTIPOLANCAMENTOID","Enabled")',ctrl:'vTIPOLANCAMENTOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIFORID","Enabled")',ctrl:'vCLIFORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTAPROVISORIAFRMNORESERVA","Enabled")',ctrl:'vCONTAPROVISORIAFRMNORESERVA',prop:'Enabled'}]];
   this.setPrompt("PROMPT_CLIFORID", [46]);
   this.setPrompt("PROMPT_TRANSACAOPAGRECID", [69]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOID", [75]);
   this.setVCMap("AV69ContaProvisoriaFRMEmpId", "vCONTAPROVISORIAFRMEMPID", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV70PessoaEmpresaid", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A1680ConvenioEmpresaId", "CONVENIOEMPRESAID", 0, "char");
   this.setVCMap("A1681ConvenioId", "CONVENIOID", 0, "int");
   this.setVCMap("A2082ConvenioDescricao", "CONVENIODESCRICAO", 0, "svchar");
   this.setVCMap("AV51TipoOperacao", "vTIPOOPERACAO", 0, "char");
   this.setVCMap("AV69ContaProvisoriaFRMEmpId", "vCONTAPROVISORIAFRMEMPID", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV70PessoaEmpresaid", "vPESSOAEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A1680ConvenioEmpresaId", "CONVENIOEMPRESAID", 0, "char");
   this.setVCMap("A1681ConvenioId", "CONVENIOID", 0, "int");
   this.setVCMap("A2082ConvenioDescricao", "CONVENIODESCRICAO", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[25]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[41]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[46]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[52]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[56]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[108]);
   Grid1Container.addRefreshingVar({rfrVar:"AV69ContaProvisoriaFRMEmpId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV14bmpEfe", rfrProp:"Value", gxAttId:"Bmpefe"});
   Grid1Container.addRefreshingVar({rfrVar:"AV77bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV77bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[114]);
   Grid1Container.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV70PessoaEmpresaid"});
   Grid1Container.addRefreshingVar({rfrVar:"A69PessoaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A10148ContaProvisoriaFRMCliForId", rfrProp:"Value", gxAttId:"10148"});
   Grid1Container.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   Grid1Container.addRefreshingVar({rfrVar:"A1680ConvenioEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[112]);
   Grid1Container.addRefreshingVar({rfrVar:"A1681ConvenioId"});
   Grid1Container.addRefreshingVar({rfrVar:"A10150ContaProvisoriaFRMConvenioId", rfrProp:"Value", gxAttId:"10150"});
   Grid1Container.addRefreshingVar({rfrVar:"A2082ConvenioDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A10158ContaProvisoriaFRMSnEfetivada", rfrProp:"Value", gxAttId:"10158"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarcontasprovisoriasfrm());
