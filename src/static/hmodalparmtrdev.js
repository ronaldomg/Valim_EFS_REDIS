/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:34:45.18
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmtrdev', false, function () {
   this.ServerClass =  "hmodalparmtrdev" ;
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
   this.Validv_Precopadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precopadraodevsai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOPADRAODEVSAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precopadraodevent=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOPADRAODEVENT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Trntrocadev=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRNTROCADEV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Trndevent=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRNDEVENT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Trntrocanov=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRNTROCANOV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Trndevsai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRNDEVSAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Trnauxdevsai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRNAUXDEVSAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Trnvalepresente=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRNVALEPRESENTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaosaidaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOSAIDAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e151311_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparmtrdev",[]), []);
      this.refreshOutputs([]);
   };
   this.e121312_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131312_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e161312_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,12,14,17,19,22,24,27,29,32,34,37,39,40,43,45,46,49,51,52,55,57,60,62,63,66,68,69,72,74,75,78,80,81,84,86,87,90,92,93,99,103,104,107,108,110,111,112,113,114,115,116,117,118,119];
   this.GXLastCtrlId =119;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"TABPAR",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPIDENTIFICACAO",gxz:"ZV18TpIdentificacao",gxold:"OV18TpIdentificacao",gxvar:"AV18TpIdentificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18TpIdentificacao=Value},v2z:function(Value){gx.O.ZV18TpIdentificacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPIDENTIFICACAO",gx.O.AV18TpIdentificacao)},c2v:function(){gx.O.AV18TpIdentificacao=this.val()},val:function(){return gx.fn.getControlValue("vTPIDENTIFICACAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCAIXAPREVENDA",gxz:"ZV19SnCaixaPreVenda",gxold:"OV19SnCaixaPreVenda",gxvar:"AV19SnCaixaPreVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19SnCaixaPreVenda=Value},v2z:function(Value){gx.O.ZV19SnCaixaPreVenda=Value},v2c:function(){gx.fn.setComboBoxValue("vSNCAIXAPREVENDA",gx.O.AV19SnCaixaPreVenda)},c2v:function(){gx.O.AV19SnCaixaPreVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNCAIXAPREVENDA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTROCASEMVENDA",gxz:"ZV33SnTrocaSemVenda",gxold:"OV33SnTrocaSemVenda",gxvar:"AV33SnTrocaSemVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV33SnTrocaSemVenda=Value},v2z:function(Value){gx.O.ZV33SnTrocaSemVenda=Value},v2c:function(){gx.fn.setComboBoxValue("vSNTROCASEMVENDA",gx.O.AV33SnTrocaSemVenda)},c2v:function(){gx.O.AV33SnTrocaSemVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNTROCASEMVENDA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIASTROCA",gxz:"ZV30QtdeDiasTroca",gxold:"OV30QtdeDiasTroca",gxvar:"AV30QtdeDiasTroca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30QtdeDiasTroca=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30QtdeDiasTroca=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIASTROCA",gx.O.AV30QtdeDiasTroca,0)},c2v:function(){gx.O.AV30QtdeDiasTroca=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIASTROCA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIASDEV",gxz:"ZV31QtdeDiasDev",gxold:"OV31QtdeDiasDev",gxvar:"AV31QtdeDiasDev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31QtdeDiasDev=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31QtdeDiasDev=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIASDEV",gx.O.AV31QtdeDiasDev,0)},c2v:function(){gx.O.AV31QtdeDiasDev=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIASDEV",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precopadrao,isvalid:null,rgrid:[],fld:"vPRECOPADRAO",gxz:"ZV32PrecoPadrao",gxold:"OV32PrecoPadrao",gxvar:"AV32PrecoPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32PrecoPadrao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32PrecoPadrao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOPADRAO",gx.O.AV32PrecoPadrao,0)},c2v:function(){gx.O.AV32PrecoPadrao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOPADRAO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV34PrecoDescricao",gxold:"OV34PrecoDescricao",gxvar:"AV34PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34PrecoDescricao=Value},v2z:function(Value){gx.O.ZV34PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV34PrecoDescricao,0)},c2v:function(){gx.O.AV34PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precopadraodevsai,isvalid:null,rgrid:[],fld:"vPRECOPADRAODEVSAI",gxz:"ZV54PrecoPadraoDevSai",gxold:"OV54PrecoPadraoDevSai",gxvar:"AV54PrecoPadraoDevSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54PrecoPadraoDevSai=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54PrecoPadraoDevSai=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOPADRAODEVSAI",gx.O.AV54PrecoPadraoDevSai,0)},c2v:function(){gx.O.AV54PrecoPadraoDevSai=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOPADRAODEVSAI",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODEVSAIDESCRICAO",gxz:"ZV56PrecoDevSaiDescricao",gxold:"OV56PrecoDevSaiDescricao",gxvar:"AV56PrecoDevSaiDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56PrecoDevSaiDescricao=Value},v2z:function(Value){gx.O.ZV56PrecoDevSaiDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODEVSAIDESCRICAO",gx.O.AV56PrecoDevSaiDescricao,0)},c2v:function(){gx.O.AV56PrecoDevSaiDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODEVSAIDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precopadraodevent,isvalid:null,rgrid:[],fld:"vPRECOPADRAODEVENT",gxz:"ZV55PrecoPadraoDevEnt",gxold:"OV55PrecoPadraoDevEnt",gxvar:"AV55PrecoPadraoDevEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55PrecoPadraoDevEnt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55PrecoPadraoDevEnt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOPADRAODEVENT",gx.O.AV55PrecoPadraoDevEnt,0)},c2v:function(){gx.O.AV55PrecoPadraoDevEnt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOPADRAODEVENT",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODEVENTDESCRICAO",gxz:"ZV57PrecoDevEntDescricao",gxold:"OV57PrecoDevEntDescricao",gxvar:"AV57PrecoDevEntDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57PrecoDevEntDescricao=Value},v2z:function(Value){gx.O.ZV57PrecoDevEntDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODEVENTDESCRICAO",gx.O.AV57PrecoDevEntDescricao,0)},c2v:function(){gx.O.AV57PrecoDevEntDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODEVENTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNDESCONTO",gxz:"ZV62SnDesconto",gxold:"OV62SnDesconto",gxvar:"AV62SnDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV62SnDesconto=Value},v2z:function(Value){gx.O.ZV62SnDesconto=Value},v2c:function(){gx.fn.setComboBoxValue("vSNDESCONTO",gx.O.AV62SnDesconto)},c2v:function(){gx.O.AV62SnDesconto=this.val()},val:function(){return gx.fn.getControlValue("vSNDESCONTO")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trntrocadev,isvalid:null,rgrid:[],fld:"vTRNTROCADEV",gxz:"ZV20TRNTROCADEV",gxold:"OV20TRNTROCADEV",gxvar:"AV20TRNTROCADEV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20TRNTROCADEV=Value},v2z:function(Value){gx.O.ZV20TRNTROCADEV=Value},v2c:function(){gx.fn.setControlValue("vTRNTROCADEV",gx.O.AV20TRNTROCADEV,0)},c2v:function(){gx.O.AV20TRNTROCADEV=this.val()},val:function(){return gx.fn.getControlValue("vTRNTROCADEV")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTRNTROCADEV",gxz:"ZV39DescTrnTrocaDev",gxold:"OV39DescTrnTrocaDev",gxvar:"AV39DescTrnTrocaDev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39DescTrnTrocaDev=Value},v2z:function(Value){gx.O.ZV39DescTrnTrocaDev=Value},v2c:function(){gx.fn.setControlValue("vDESCTRNTROCADEV",gx.O.AV39DescTrnTrocaDev,0)},c2v:function(){gx.O.AV39DescTrnTrocaDev=this.val()},val:function(){return gx.fn.getControlValue("vDESCTRNTROCADEV")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trndevent,isvalid:null,rgrid:[],fld:"vTRNDEVENT",gxz:"ZV21TRNDEVENT",gxold:"OV21TRNDEVENT",gxvar:"AV21TRNDEVENT",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21TRNDEVENT=Value},v2z:function(Value){gx.O.ZV21TRNDEVENT=Value},v2c:function(){gx.fn.setControlValue("vTRNDEVENT",gx.O.AV21TRNDEVENT,0)},c2v:function(){gx.O.AV21TRNDEVENT=this.val()},val:function(){return gx.fn.getControlValue("vTRNDEVENT")},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTRNDEVENT",gxz:"ZV40DescTrnDevEnt",gxold:"OV40DescTrnDevEnt",gxvar:"AV40DescTrnDevEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40DescTrnDevEnt=Value},v2z:function(Value){gx.O.ZV40DescTrnDevEnt=Value},v2c:function(){gx.fn.setControlValue("vDESCTRNDEVENT",gx.O.AV40DescTrnDevEnt,0)},c2v:function(){gx.O.AV40DescTrnDevEnt=this.val()},val:function(){return gx.fn.getControlValue("vDESCTRNDEVENT")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trntrocanov,isvalid:null,rgrid:[],fld:"vTRNTROCANOV",gxz:"ZV22TRNTROCANOV",gxold:"OV22TRNTROCANOV",gxvar:"AV22TRNTROCANOV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22TRNTROCANOV=Value},v2z:function(Value){gx.O.ZV22TRNTROCANOV=Value},v2c:function(){gx.fn.setControlValue("vTRNTROCANOV",gx.O.AV22TRNTROCANOV,0)},c2v:function(){gx.O.AV22TRNTROCANOV=this.val()},val:function(){return gx.fn.getControlValue("vTRNTROCANOV")},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTRNTROCANOV",gxz:"ZV41DescTrnTrocaNov",gxold:"OV41DescTrnTrocaNov",gxvar:"AV41DescTrnTrocaNov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41DescTrnTrocaNov=Value},v2z:function(Value){gx.O.ZV41DescTrnTrocaNov=Value},v2c:function(){gx.fn.setControlValue("vDESCTRNTROCANOV",gx.O.AV41DescTrnTrocaNov,0)},c2v:function(){gx.O.AV41DescTrnTrocaNov=this.val()},val:function(){return gx.fn.getControlValue("vDESCTRNTROCANOV")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trndevsai,isvalid:null,rgrid:[],fld:"vTRNDEVSAI",gxz:"ZV23TRNDEVSAI",gxold:"OV23TRNDEVSAI",gxvar:"AV23TRNDEVSAI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23TRNDEVSAI=Value},v2z:function(Value){gx.O.ZV23TRNDEVSAI=Value},v2c:function(){gx.fn.setControlValue("vTRNDEVSAI",gx.O.AV23TRNDEVSAI,0)},c2v:function(){gx.O.AV23TRNDEVSAI=this.val()},val:function(){return gx.fn.getControlValue("vTRNDEVSAI")},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTRNDEVSAI",gxz:"ZV42DescTrnDevSai",gxold:"OV42DescTrnDevSai",gxvar:"AV42DescTrnDevSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42DescTrnDevSai=Value},v2z:function(Value){gx.O.ZV42DescTrnDevSai=Value},v2c:function(){gx.fn.setControlValue("vDESCTRNDEVSAI",gx.O.AV42DescTrnDevSai,0)},c2v:function(){gx.O.AV42DescTrnDevSai=this.val()},val:function(){return gx.fn.getControlValue("vDESCTRNDEVSAI")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trnauxdevsai,isvalid:null,rgrid:[],fld:"vTRNAUXDEVSAI",gxz:"ZV24TRNAUXDEVSAI",gxold:"OV24TRNAUXDEVSAI",gxvar:"AV24TRNAUXDEVSAI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TRNAUXDEVSAI=Value},v2z:function(Value){gx.O.ZV24TRNAUXDEVSAI=Value},v2c:function(){gx.fn.setControlValue("vTRNAUXDEVSAI",gx.O.AV24TRNAUXDEVSAI,0)},c2v:function(){gx.O.AV24TRNAUXDEVSAI=this.val()},val:function(){return gx.fn.getControlValue("vTRNAUXDEVSAI")},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTRNAUXDEVSAI",gxz:"ZV43DescTrnAuxDevSai",gxold:"OV43DescTrnAuxDevSai",gxvar:"AV43DescTrnAuxDevSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43DescTrnAuxDevSai=Value},v2z:function(Value){gx.O.ZV43DescTrnAuxDevSai=Value},v2c:function(){gx.fn.setControlValue("vDESCTRNAUXDEVSAI",gx.O.AV43DescTrnAuxDevSai,0)},c2v:function(){gx.O.AV43DescTrnAuxDevSai=this.val()},val:function(){return gx.fn.getControlValue("vDESCTRNAUXDEVSAI")},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Trnvalepresente,isvalid:null,rgrid:[],fld:"vTRNVALEPRESENTE",gxz:"ZV63TRNVALEPRESENTE",gxold:"OV63TRNVALEPRESENTE",gxvar:"AV63TRNVALEPRESENTE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63TRNVALEPRESENTE=Value},v2z:function(Value){gx.O.ZV63TRNVALEPRESENTE=Value},v2c:function(){gx.fn.setControlValue("vTRNVALEPRESENTE",gx.O.AV63TRNVALEPRESENTE,0)},c2v:function(){gx.O.AV63TRNVALEPRESENTE=this.val()},val:function(){return gx.fn.getControlValue("vTRNVALEPRESENTE")},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNVALEPRESENTEDESC",gxz:"ZV64TRNVALEPRESENTEDesc",gxold:"OV64TRNVALEPRESENTEDesc",gxvar:"AV64TRNVALEPRESENTEDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64TRNVALEPRESENTEDesc=Value},v2z:function(Value){gx.O.ZV64TRNVALEPRESENTEDesc=Value},v2c:function(){gx.fn.setControlValue("vTRNVALEPRESENTEDESC",gx.O.AV64TRNVALEPRESENTEDesc,0)},c2v:function(){gx.O.AV64TRNVALEPRESENTEDesc=this.val()},val:function(){return gx.fn.getControlValue("vTRNVALEPRESENTEDESC")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TABLE4",grid:0};
   GXValidFnc[103]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV37PrecoEmpresaId",gxold:"OV37PrecoEmpresaId",gxvar:"AV37PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37PrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV37PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV37PrecoEmpresaId,0)},c2v:function(){gx.O.AV37PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaosaidaempresaid,isvalid:null,rgrid:[],fld:"vTRANSACAOSAIDAEMPRESAID",gxz:"ZV26TransacaoSaidaEmpresaId",gxold:"OV26TransacaoSaidaEmpresaId",gxvar:"AV26TransacaoSaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TransacaoSaidaEmpresaId=Value},v2z:function(Value){gx.O.ZV26TransacaoSaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDAEMPRESAID",gx.O.AV26TransacaoSaidaEmpresaId,0)},c2v:function(){gx.O.AV26TransacaoSaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR",gxz:"ZV38QtdeCar",gxold:"OV38QtdeCar",gxvar:"AV38QtdeCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38QtdeCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38QtdeCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR",gx.O.AV38QtdeCar,0)},c2v:function(){gx.O.AV38QtdeCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR",'.')},nac:gx.falseFn};
   GXValidFnc[108]={fld:"JS", format:2,grid:0};
   GXValidFnc[110]={fld:"BTNOBS",grid:0};
   GXValidFnc[111]={fld:"PROMPT_PRECOPADRAO",grid:0};
   GXValidFnc[112]={fld:"PROMPT_PRECOPADRAODEVSAI",grid:0};
   GXValidFnc[113]={fld:"PROMPT_PRECOPADRAODEVENT",grid:0};
   GXValidFnc[114]={fld:"PROMPT_TRNTROCADEV",grid:0};
   GXValidFnc[115]={fld:"PROMPT_TRNDEVENT",grid:0};
   GXValidFnc[116]={fld:"PROMPT_TRNTROCANOV",grid:0};
   GXValidFnc[117]={fld:"PROMPT_TRNDEVSAI",grid:0};
   GXValidFnc[118]={fld:"PROMPT_TRNAUXDEVSAI",grid:0};
   GXValidFnc[119]={fld:"PROMPT_TRNVALEPRESENTE",grid:0};
   this.AV18TpIdentificacao = "" ;
   this.ZV18TpIdentificacao = "" ;
   this.OV18TpIdentificacao = "" ;
   this.AV19SnCaixaPreVenda = "" ;
   this.ZV19SnCaixaPreVenda = "" ;
   this.OV19SnCaixaPreVenda = "" ;
   this.AV33SnTrocaSemVenda = "" ;
   this.ZV33SnTrocaSemVenda = "" ;
   this.OV33SnTrocaSemVenda = "" ;
   this.AV30QtdeDiasTroca = 0 ;
   this.ZV30QtdeDiasTroca = 0 ;
   this.OV30QtdeDiasTroca = 0 ;
   this.AV31QtdeDiasDev = 0 ;
   this.ZV31QtdeDiasDev = 0 ;
   this.OV31QtdeDiasDev = 0 ;
   this.AV32PrecoPadrao = 0 ;
   this.ZV32PrecoPadrao = 0 ;
   this.OV32PrecoPadrao = 0 ;
   this.AV34PrecoDescricao = "" ;
   this.ZV34PrecoDescricao = "" ;
   this.OV34PrecoDescricao = "" ;
   this.AV54PrecoPadraoDevSai = 0 ;
   this.ZV54PrecoPadraoDevSai = 0 ;
   this.OV54PrecoPadraoDevSai = 0 ;
   this.AV56PrecoDevSaiDescricao = "" ;
   this.ZV56PrecoDevSaiDescricao = "" ;
   this.OV56PrecoDevSaiDescricao = "" ;
   this.AV55PrecoPadraoDevEnt = 0 ;
   this.ZV55PrecoPadraoDevEnt = 0 ;
   this.OV55PrecoPadraoDevEnt = 0 ;
   this.AV57PrecoDevEntDescricao = "" ;
   this.ZV57PrecoDevEntDescricao = "" ;
   this.OV57PrecoDevEntDescricao = "" ;
   this.AV62SnDesconto = "" ;
   this.ZV62SnDesconto = "" ;
   this.OV62SnDesconto = "" ;
   this.AV20TRNTROCADEV = "" ;
   this.ZV20TRNTROCADEV = "" ;
   this.OV20TRNTROCADEV = "" ;
   this.AV39DescTrnTrocaDev = "" ;
   this.ZV39DescTrnTrocaDev = "" ;
   this.OV39DescTrnTrocaDev = "" ;
   this.AV21TRNDEVENT = "" ;
   this.ZV21TRNDEVENT = "" ;
   this.OV21TRNDEVENT = "" ;
   this.AV40DescTrnDevEnt = "" ;
   this.ZV40DescTrnDevEnt = "" ;
   this.OV40DescTrnDevEnt = "" ;
   this.AV22TRNTROCANOV = "" ;
   this.ZV22TRNTROCANOV = "" ;
   this.OV22TRNTROCANOV = "" ;
   this.AV41DescTrnTrocaNov = "" ;
   this.ZV41DescTrnTrocaNov = "" ;
   this.OV41DescTrnTrocaNov = "" ;
   this.AV23TRNDEVSAI = "" ;
   this.ZV23TRNDEVSAI = "" ;
   this.OV23TRNDEVSAI = "" ;
   this.AV42DescTrnDevSai = "" ;
   this.ZV42DescTrnDevSai = "" ;
   this.OV42DescTrnDevSai = "" ;
   this.AV24TRNAUXDEVSAI = "" ;
   this.ZV24TRNAUXDEVSAI = "" ;
   this.OV24TRNAUXDEVSAI = "" ;
   this.AV43DescTrnAuxDevSai = "" ;
   this.ZV43DescTrnAuxDevSai = "" ;
   this.OV43DescTrnAuxDevSai = "" ;
   this.AV63TRNVALEPRESENTE = "" ;
   this.ZV63TRNVALEPRESENTE = "" ;
   this.OV63TRNVALEPRESENTE = "" ;
   this.AV64TRNVALEPRESENTEDesc = "" ;
   this.ZV64TRNVALEPRESENTEDesc = "" ;
   this.OV64TRNVALEPRESENTEDesc = "" ;
   this.AV37PrecoEmpresaId = "" ;
   this.ZV37PrecoEmpresaId = "" ;
   this.OV37PrecoEmpresaId = "" ;
   this.AV26TransacaoSaidaEmpresaId = "" ;
   this.ZV26TransacaoSaidaEmpresaId = "" ;
   this.OV26TransacaoSaidaEmpresaId = "" ;
   this.AV38QtdeCar = 0 ;
   this.ZV38QtdeCar = 0 ;
   this.OV38QtdeCar = 0 ;
   this.AV18TpIdentificacao = "" ;
   this.AV19SnCaixaPreVenda = "" ;
   this.AV33SnTrocaSemVenda = "" ;
   this.AV30QtdeDiasTroca = 0 ;
   this.AV31QtdeDiasDev = 0 ;
   this.AV32PrecoPadrao = 0 ;
   this.AV34PrecoDescricao = "" ;
   this.AV54PrecoPadraoDevSai = 0 ;
   this.AV56PrecoDevSaiDescricao = "" ;
   this.AV55PrecoPadraoDevEnt = 0 ;
   this.AV57PrecoDevEntDescricao = "" ;
   this.AV62SnDesconto = "" ;
   this.AV20TRNTROCADEV = "" ;
   this.AV39DescTrnTrocaDev = "" ;
   this.AV21TRNDEVENT = "" ;
   this.AV40DescTrnDevEnt = "" ;
   this.AV22TRNTROCANOV = "" ;
   this.AV41DescTrnTrocaNov = "" ;
   this.AV23TRNDEVSAI = "" ;
   this.AV42DescTrnDevSai = "" ;
   this.AV24TRNAUXDEVSAI = "" ;
   this.AV43DescTrnAuxDevSai = "" ;
   this.AV63TRNVALEPRESENTE = "" ;
   this.AV64TRNVALEPRESENTEDesc = "" ;
   this.AV37PrecoEmpresaId = "" ;
   this.AV26TransacaoSaidaEmpresaId = "" ;
   this.AV38QtdeCar = 0 ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A4482TransacaoEntradaDescricao = "" ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A5568TransacaoSaidaDescricao = "" ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A711PrecoDescricao = "" ;
   this.Events = {"e121312_client": ["ENTER", true] ,"e131312_client": ["'FECHAR'", true] ,"e161312_client": ["CANCEL", true] ,"e151311_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV25TpErro',fld:'vTPERRO'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV18TpIdentificacao',fld:'vTPIDENTIFICACAO'},{av:'AV19SnCaixaPreVenda',fld:'vSNCAIXAPREVENDA'},{av:'AV20TRNTROCADEV',fld:'vTRNTROCADEV'},{av:'AV21TRNDEVENT',fld:'vTRNDEVENT'},{av:'AV22TRNTROCANOV',fld:'vTRNTROCANOV'},{av:'AV23TRNDEVSAI',fld:'vTRNDEVSAI'},{av:'AV24TRNAUXDEVSAI',fld:'vTRNAUXDEVSAI'},{av:'AV63TRNVALEPRESENTE',fld:'vTRNVALEPRESENTE'},{av:'AV33SnTrocaSemVenda',fld:'vSNTROCASEMVENDA'},{av:'AV62SnDesconto',fld:'vSNDESCONTO'},{av:'AV30QtdeDiasTroca',fld:'vQTDEDIASTROCA'},{av:'AV31QtdeDiasDev',fld:'vQTDEDIASDEV'},{av:'AV32PrecoPadrao',fld:'vPRECOPADRAO'},{av:'AV54PrecoPadraoDevSai',fld:'vPRECOPADRAODEVSAI'},{av:'AV55PrecoPadraoDevEnt',fld:'vPRECOPADRAODEVENT'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV37PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'A4480TransacaoEntradaEmpresaId',fld:'TRANSACAOENTRADAEMPRESAID'},{av:'AV27TransacaoEntradaEmpresaId',fld:'vTRANSACAOENTRADAEMPRESAID'},{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'A4482TransacaoEntradaDescricao',fld:'TRANSACAOENTRADADESCRICAO'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV26TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'A5568TransacaoSaidaDescricao',fld:'TRANSACAOSAIDADESCRICAO'}],[{av:'AV18TpIdentificacao',fld:'vTPIDENTIFICACAO'},{av:'AV19SnCaixaPreVenda',fld:'vSNCAIXAPREVENDA'},{av:'AV20TRNTROCADEV',fld:'vTRNTROCADEV'},{av:'AV21TRNDEVENT',fld:'vTRNDEVENT'},{av:'AV22TRNTROCANOV',fld:'vTRNTROCANOV'},{av:'AV23TRNDEVSAI',fld:'vTRNDEVSAI'},{av:'AV24TRNAUXDEVSAI',fld:'vTRNAUXDEVSAI'},{av:'AV63TRNVALEPRESENTE',fld:'vTRNVALEPRESENTE'},{av:'AV33SnTrocaSemVenda',fld:'vSNTROCASEMVENDA'},{av:'AV62SnDesconto',fld:'vSNDESCONTO'},{av:'AV29ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV25TpErro',fld:'vTPERRO'},{av:'AV76GXLvl240',fld:'vGXLVL240'},{av:'AV34PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV77GXLvl254',fld:'vGXLVL254'},{av:'AV56PrecoDevSaiDescricao',fld:'vPRECODEVSAIDESCRICAO'},{av:'AV78GXLvl268',fld:'vGXLVL268'},{av:'AV57PrecoDevEntDescricao',fld:'vPRECODEVENTDESCRICAO'},{av:'AV79GXLvl290',fld:'vGXLVL290'},{av:'AV39DescTrnTrocaDev',fld:'vDESCTRNTROCADEV'},{av:'AV80GXLvl304',fld:'vGXLVL304'},{av:'AV40DescTrnDevEnt',fld:'vDESCTRNDEVENT'},{av:'AV81GXLvl318',fld:'vGXLVL318'},{av:'AV41DescTrnTrocaNov',fld:'vDESCTRNTROCANOV'},{av:'AV82GXLvl332',fld:'vGXLVL332'},{av:'AV42DescTrnDevSai',fld:'vDESCTRNDEVSAI'},{av:'AV83GXLvl346',fld:'vGXLVL346'},{av:'AV43DescTrnAuxDevSai',fld:'vDESCTRNAUXDEVSAI'},{av:'AV84GXLvl360',fld:'vGXLVL360'},{av:'AV64TRNVALEPRESENTEDesc',fld:'vTRNVALEPRESENTEDESC'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[],[]];
   this.setPrompt("PROMPT_PRECOPADRAO", [39]);
   this.setPrompt("PROMPT_PRECOPADRAODEVSAI", [45]);
   this.setPrompt("PROMPT_PRECOPADRAODEVENT", [51]);
   this.setPrompt("PROMPT_TRNTROCADEV", [62]);
   this.setPrompt("PROMPT_TRNDEVENT", [68]);
   this.setPrompt("PROMPT_TRNTROCANOV", [74]);
   this.setPrompt("PROMPT_TRNDEVSAI", [80]);
   this.setPrompt("PROMPT_TRNAUXDEVSAI", [86]);
   this.setPrompt("PROMPT_TRNVALEPRESENTE", [92]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmtrdev());
