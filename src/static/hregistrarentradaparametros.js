/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:56:38.87
*/
gx.evt.autoSkip = false;
gx.define('hregistrarentradaparametros', false, function () {
   this.ServerClass =  "hregistrarentradaparametros" ;
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
      this.AV78SnGravarNota=gx.fn.getControlValue("vSNGRAVARNOTA") ;
      this.AV80SnHabilitaFinanceiro=gx.fn.getControlValue("vSNHABILITAFINANCEIRO") ;
   };
   this.Validv_Entradatipolancdescontoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADATIPOLANCDESCONTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradatipolancfreteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADATIPOLANCFRETEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradatipolancseguroid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADATIPOLANCSEGUROID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradatipolancoutdespid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADATIPOLANCOUTDESPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradatipolancacrescimoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADATIPOLANCACRESCIMOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradatipolancipiid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADATIPOLANCIPIID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradatipolancmanuseioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADATIPOLANCMANUSEIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradatipolancicmsstid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADATIPOLANCICMSSTID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradatipolancicmsstnaodestid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADATIPOLANCICMSSTNAODESTID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12v92_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13v92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15v92_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,10,13,15,17,19,23,26,28,30,32,34,36,38,40,43,46,48,50,52,54,58,61,63,65,67,69,71,74,76,78,80,82,84,86,88,91,94,96,98,100,102,104,107,110,112,114,116,118,120,123,126,128,130,132,134,136,139,142,144,146,148,151,154,157,159,161,163,165,167,170,173,176,178,181,184,187,190,192,195,198,200,208,212,214,216,218,221,223,226,228,231,233,236,238,241,243,246,248,256,257,258,259,260,261,262,263,264];
   this.GXLastCtrlId =264;
   GXValidFnc[2]={fld:"TABLE8",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[7]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE7",grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNALTERASALDO",gxz:"ZV6EntradaSnAlteraSaldo",gxold:"OV6EntradaSnAlteraSaldo",gxvar:"AV6EntradaSnAlteraSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV6EntradaSnAlteraSaldo=Value},v2z:function(Value){gx.O.ZV6EntradaSnAlteraSaldo=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNALTERASALDO",gx.O.AV6EntradaSnAlteraSaldo,"S")},c2v:function(){gx.O.AV6EntradaSnAlteraSaldo=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNALTERASALDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNALTERACUSTO",gxz:"ZV7EntradaSnAlteraCusto",gxold:"OV7EntradaSnAlteraCusto",gxvar:"AV7EntradaSnAlteraCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV7EntradaSnAlteraCusto=Value},v2z:function(Value){gx.O.ZV7EntradaSnAlteraCusto=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNALTERACUSTO",gx.O.AV7EntradaSnAlteraCusto,"S")},c2v:function(){gx.O.AV7EntradaSnAlteraCusto=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNALTERACUSTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASNCALCULADIFERENCAICMS",gxz:"ZV8EntradaSnCalculaDiferencaICMS",gxold:"OV8EntradaSnCalculaDiferencaICMS",gxvar:"AV8EntradaSnCalculaDiferencaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV8EntradaSnCalculaDiferencaICMS=Value},v2z:function(Value){gx.O.ZV8EntradaSnCalculaDiferencaICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASNCALCULADIFERENCAICMS",gx.O.AV8EntradaSnCalculaDiferencaICMS,"S")},c2v:function(){gx.O.AV8EntradaSnCalculaDiferencaICMS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASNCALCULADIFERENCAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNINCVALENTRADA",gxz:"ZV85SnIncValEntrada",gxold:"OV85SnIncValEntrada",gxvar:"AV85SnIncValEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV85SnIncValEntrada=Value},v2z:function(Value){gx.O.ZV85SnIncValEntrada=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNINCVALENTRADA",gx.O.AV85SnIncValEntrada,"S")},c2v:function(){gx.O.AV85SnIncValEntrada=this.val()},val:function(){return gx.fn.getControlValue("vSNINCVALENTRADA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[23]={fld:"TABLE10",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[32]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAVLRPRODUTOENTRAICMS",gxz:"ZV18EntradaVlrProdutoEntraICMS",gxold:"OV18EntradaVlrProdutoEntraICMS",gxvar:"AV18EntradaVlrProdutoEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18EntradaVlrProdutoEntraICMS=Value},v2z:function(Value){gx.O.ZV18EntradaVlrProdutoEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAVLRPRODUTOENTRAICMS",gx.O.AV18EntradaVlrProdutoEntraICMS,"S")},c2v:function(){gx.O.AV18EntradaVlrProdutoEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAVLRPRODUTOENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAVLRPRODUTOENTRAICMSST",gxz:"ZV9EntradaVlrProdutoEntraICMSST",gxold:"OV9EntradaVlrProdutoEntraICMSST",gxvar:"AV9EntradaVlrProdutoEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV9EntradaVlrProdutoEntraICMSST=Value},v2z:function(Value){gx.O.ZV9EntradaVlrProdutoEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAVLRPRODUTOENTRAICMSST",gx.O.AV9EntradaVlrProdutoEntraICMSST,"S")},c2v:function(){gx.O.AV9EntradaVlrProdutoEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAVLRPRODUTOENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAVLRPRODUTOENTRAPIS",gxz:"ZV10EntradaVlrProdutoEntraPIS",gxold:"OV10EntradaVlrProdutoEntraPIS",gxvar:"AV10EntradaVlrProdutoEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV10EntradaVlrProdutoEntraPIS=Value},v2z:function(Value){gx.O.ZV10EntradaVlrProdutoEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAVLRPRODUTOENTRAPIS",gx.O.AV10EntradaVlrProdutoEntraPIS,"S")},c2v:function(){gx.O.AV10EntradaVlrProdutoEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAVLRPRODUTOENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[52]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAVLRPRODUTOENTRACOFINS",gxz:"ZV11EntradaVlrProdutoEntraCOFINS",gxold:"OV11EntradaVlrProdutoEntraCOFINS",gxvar:"AV11EntradaVlrProdutoEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV11EntradaVlrProdutoEntraCOFINS=Value},v2z:function(Value){gx.O.ZV11EntradaVlrProdutoEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAVLRPRODUTOENTRACOFINS",gx.O.AV11EntradaVlrProdutoEntraCOFINS,"S")},c2v:function(){gx.O.AV11EntradaVlrProdutoEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAVLRPRODUTOENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAVLRPRODUTOENTRAIPI",gxz:"ZV12EntradaVlrProdutoEntraIPI",gxold:"OV12EntradaVlrProdutoEntraIPI",gxvar:"AV12EntradaVlrProdutoEntraIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV12EntradaVlrProdutoEntraIPI=Value},v2z:function(Value){gx.O.ZV12EntradaVlrProdutoEntraIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAVLRPRODUTOENTRAIPI",gx.O.AV12EntradaVlrProdutoEntraIPI,"S")},c2v:function(){gx.O.AV12EntradaVlrProdutoEntraIPI=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAVLRPRODUTOENTRAIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[58]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADESCONTOENTRAICMS",gxz:"ZV13EntradaDescontoEntraICMS",gxold:"OV13EntradaDescontoEntraICMS",gxvar:"AV13EntradaDescontoEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV13EntradaDescontoEntraICMS=Value},v2z:function(Value){gx.O.ZV13EntradaDescontoEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADADESCONTOENTRAICMS",gx.O.AV13EntradaDescontoEntraICMS,"S")},c2v:function(){gx.O.AV13EntradaDescontoEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADADESCONTOENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[63]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADESCONTOENTRAICMSST",gxz:"ZV14EntradaDescontoEntraICMSST",gxold:"OV14EntradaDescontoEntraICMSST",gxvar:"AV14EntradaDescontoEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV14EntradaDescontoEntraICMSST=Value},v2z:function(Value){gx.O.ZV14EntradaDescontoEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADADESCONTOENTRAICMSST",gx.O.AV14EntradaDescontoEntraICMSST,"S")},c2v:function(){gx.O.AV14EntradaDescontoEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vENTRADADESCONTOENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[65]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADESCONTOENTRAPIS",gxz:"ZV15EntradaDescontoEntraPIS",gxold:"OV15EntradaDescontoEntraPIS",gxvar:"AV15EntradaDescontoEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15EntradaDescontoEntraPIS=Value},v2z:function(Value){gx.O.ZV15EntradaDescontoEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADADESCONTOENTRAPIS",gx.O.AV15EntradaDescontoEntraPIS,"S")},c2v:function(){gx.O.AV15EntradaDescontoEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADADESCONTOENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[67]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADESCONTOENTRACOFINS",gxz:"ZV16EntradaDescontoEntraCOFINS",gxold:"OV16EntradaDescontoEntraCOFINS",gxvar:"AV16EntradaDescontoEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16EntradaDescontoEntraCOFINS=Value},v2z:function(Value){gx.O.ZV16EntradaDescontoEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADADESCONTOENTRACOFINS",gx.O.AV16EntradaDescontoEntraCOFINS,"S")},c2v:function(){gx.O.AV16EntradaDescontoEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADADESCONTOENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADESCONTOENTRAIPI",gxz:"ZV17EntradaDescontoEntraIPI",gxold:"OV17EntradaDescontoEntraIPI",gxvar:"AV17EntradaDescontoEntraIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17EntradaDescontoEntraIPI=Value},v2z:function(Value){gx.O.ZV17EntradaDescontoEntraIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADADESCONTOENTRAIPI",gx.O.AV17EntradaDescontoEntraIPI,"S")},c2v:function(){gx.O.AV17EntradaDescontoEntraIPI=this.val()},val:function(){return gx.fn.getControlValue("vENTRADADESCONTOENTRAIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradatipolancdescontoid,isvalid:null,rgrid:[],fld:"vENTRADATIPOLANCDESCONTOID",gxz:"ZV55EntradaTipoLancDescontoid",gxold:"OV55EntradaTipoLancDescontoid",gxvar:"AV55EntradaTipoLancDescontoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55EntradaTipoLancDescontoid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55EntradaTipoLancDescontoid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADATIPOLANCDESCONTOID",gx.O.AV55EntradaTipoLancDescontoid,0)},c2v:function(){gx.O.AV55EntradaTipoLancDescontoid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADATIPOLANCDESCONTOID",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFRETEENTRATOTAL",gxz:"ZV19EntradaFreteEntraTotal",gxold:"OV19EntradaFreteEntraTotal",gxvar:"AV19EntradaFreteEntraTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV19EntradaFreteEntraTotal=Value},v2z:function(Value){gx.O.ZV19EntradaFreteEntraTotal=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAFRETEENTRATOTAL",gx.O.AV19EntradaFreteEntraTotal,"S")},c2v:function(){gx.O.AV19EntradaFreteEntraTotal=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFRETEENTRATOTAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[78]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFRETEENTRAICMS",gxz:"ZV20EntradaFreteEntraICMS",gxold:"OV20EntradaFreteEntraICMS",gxvar:"AV20EntradaFreteEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20EntradaFreteEntraICMS=Value},v2z:function(Value){gx.O.ZV20EntradaFreteEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAFRETEENTRAICMS",gx.O.AV20EntradaFreteEntraICMS,"S")},c2v:function(){gx.O.AV20EntradaFreteEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFRETEENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[80]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFRETEENTRAICMSST",gxz:"ZV21EntradaFreteEntraICMSST",gxold:"OV21EntradaFreteEntraICMSST",gxvar:"AV21EntradaFreteEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21EntradaFreteEntraICMSST=Value},v2z:function(Value){gx.O.ZV21EntradaFreteEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAFRETEENTRAICMSST",gx.O.AV21EntradaFreteEntraICMSST,"S")},c2v:function(){gx.O.AV21EntradaFreteEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFRETEENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[82]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFRETEENTRAPIS",gxz:"ZV22EntradaFreteEntraPIS",gxold:"OV22EntradaFreteEntraPIS",gxvar:"AV22EntradaFreteEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22EntradaFreteEntraPIS=Value},v2z:function(Value){gx.O.ZV22EntradaFreteEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAFRETEENTRAPIS",gx.O.AV22EntradaFreteEntraPIS,"S")},c2v:function(){gx.O.AV22EntradaFreteEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFRETEENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[84]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFRETEENTRACOFINS",gxz:"ZV23EntradaFreteEntraCOFINS",gxold:"OV23EntradaFreteEntraCOFINS",gxvar:"AV23EntradaFreteEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23EntradaFreteEntraCOFINS=Value},v2z:function(Value){gx.O.ZV23EntradaFreteEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAFRETEENTRACOFINS",gx.O.AV23EntradaFreteEntraCOFINS,"S")},c2v:function(){gx.O.AV23EntradaFreteEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFRETEENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[86]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFRETEENTRAIPI",gxz:"ZV24EntradaFreteEntraIPI",gxold:"OV24EntradaFreteEntraIPI",gxvar:"AV24EntradaFreteEntraIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24EntradaFreteEntraIPI=Value},v2z:function(Value){gx.O.ZV24EntradaFreteEntraIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAFRETEENTRAIPI",gx.O.AV24EntradaFreteEntraIPI,"S")},c2v:function(){gx.O.AV24EntradaFreteEntraIPI=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFRETEENTRAIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[88]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradatipolancfreteid,isvalid:null,rgrid:[],fld:"vENTRADATIPOLANCFRETEID",gxz:"ZV56EntradaTipoLancFreteId",gxold:"OV56EntradaTipoLancFreteId",gxvar:"AV56EntradaTipoLancFreteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56EntradaTipoLancFreteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56EntradaTipoLancFreteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADATIPOLANCFRETEID",gx.O.AV56EntradaTipoLancFreteId,0)},c2v:function(){gx.O.AV56EntradaTipoLancFreteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADATIPOLANCFRETEID",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASEGUROENTRAICMS",gxz:"ZV25EntradaSeguroEntraICMS",gxold:"OV25EntradaSeguroEntraICMS",gxvar:"AV25EntradaSeguroEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25EntradaSeguroEntraICMS=Value},v2z:function(Value){gx.O.ZV25EntradaSeguroEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASEGUROENTRAICMS",gx.O.AV25EntradaSeguroEntraICMS,"S")},c2v:function(){gx.O.AV25EntradaSeguroEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASEGUROENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[96]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASEGUROENTRAICMSST",gxz:"ZV26EntradaSeguroEntraICMSST",gxold:"OV26EntradaSeguroEntraICMSST",gxvar:"AV26EntradaSeguroEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26EntradaSeguroEntraICMSST=Value},v2z:function(Value){gx.O.ZV26EntradaSeguroEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASEGUROENTRAICMSST",gx.O.AV26EntradaSeguroEntraICMSST,"S")},c2v:function(){gx.O.AV26EntradaSeguroEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASEGUROENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[98]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASEGUROENTRAPIS",gxz:"ZV27EntradaSeguroEntraPIS",gxold:"OV27EntradaSeguroEntraPIS",gxvar:"AV27EntradaSeguroEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV27EntradaSeguroEntraPIS=Value},v2z:function(Value){gx.O.ZV27EntradaSeguroEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASEGUROENTRAPIS",gx.O.AV27EntradaSeguroEntraPIS,"S")},c2v:function(){gx.O.AV27EntradaSeguroEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASEGUROENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[100]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASEGUROENTRACOFINS",gxz:"ZV28EntradaSeguroEntraCOFINS",gxold:"OV28EntradaSeguroEntraCOFINS",gxvar:"AV28EntradaSeguroEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV28EntradaSeguroEntraCOFINS=Value},v2z:function(Value){gx.O.ZV28EntradaSeguroEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASEGUROENTRACOFINS",gx.O.AV28EntradaSeguroEntraCOFINS,"S")},c2v:function(){gx.O.AV28EntradaSeguroEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASEGUROENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[102]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASEGUROENTRAIPI",gxz:"ZV29EntradaSeguroEntraIPI",gxold:"OV29EntradaSeguroEntraIPI",gxvar:"AV29EntradaSeguroEntraIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV29EntradaSeguroEntraIPI=Value},v2z:function(Value){gx.O.ZV29EntradaSeguroEntraIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADASEGUROENTRAIPI",gx.O.AV29EntradaSeguroEntraIPI,"S")},c2v:function(){gx.O.AV29EntradaSeguroEntraIPI=this.val()},val:function(){return gx.fn.getControlValue("vENTRADASEGUROENTRAIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[104]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradatipolancseguroid,isvalid:null,rgrid:[],fld:"vENTRADATIPOLANCSEGUROID",gxz:"ZV57EntradaTipoLancSeguroId",gxold:"OV57EntradaTipoLancSeguroId",gxvar:"AV57EntradaTipoLancSeguroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57EntradaTipoLancSeguroId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57EntradaTipoLancSeguroId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADATIPOLANCSEGUROID",gx.O.AV57EntradaTipoLancSeguroId,0)},c2v:function(){gx.O.AV57EntradaTipoLancSeguroId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADATIPOLANCSEGUROID",'.')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAOUTDESPENTRAICMS",gxz:"ZV30EntradaOutDespEntraICMS",gxold:"OV30EntradaOutDespEntraICMS",gxvar:"AV30EntradaOutDespEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV30EntradaOutDespEntraICMS=Value},v2z:function(Value){gx.O.ZV30EntradaOutDespEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAOUTDESPENTRAICMS",gx.O.AV30EntradaOutDespEntraICMS,"S")},c2v:function(){gx.O.AV30EntradaOutDespEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAOUTDESPENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[112]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAOUTDESPENTRAICMSST",gxz:"ZV31EntradaOutDespEntraICMSST",gxold:"OV31EntradaOutDespEntraICMSST",gxvar:"AV31EntradaOutDespEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV31EntradaOutDespEntraICMSST=Value},v2z:function(Value){gx.O.ZV31EntradaOutDespEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAOUTDESPENTRAICMSST",gx.O.AV31EntradaOutDespEntraICMSST,"S")},c2v:function(){gx.O.AV31EntradaOutDespEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAOUTDESPENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[114]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAOUTDESPENTRAPIS",gxz:"ZV32EntradaOutDespEntraPIS",gxold:"OV32EntradaOutDespEntraPIS",gxvar:"AV32EntradaOutDespEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV32EntradaOutDespEntraPIS=Value},v2z:function(Value){gx.O.ZV32EntradaOutDespEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAOUTDESPENTRAPIS",gx.O.AV32EntradaOutDespEntraPIS,"S")},c2v:function(){gx.O.AV32EntradaOutDespEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAOUTDESPENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[116]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAOUTDESPENTRACOFINS",gxz:"ZV33EntradaOutDespEntraCOFINS",gxold:"OV33EntradaOutDespEntraCOFINS",gxvar:"AV33EntradaOutDespEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV33EntradaOutDespEntraCOFINS=Value},v2z:function(Value){gx.O.ZV33EntradaOutDespEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAOUTDESPENTRACOFINS",gx.O.AV33EntradaOutDespEntraCOFINS,"S")},c2v:function(){gx.O.AV33EntradaOutDespEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAOUTDESPENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[118]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAOUTDESPENTRAIPI",gxz:"ZV34EntradaOutDespEntraIPI",gxold:"OV34EntradaOutDespEntraIPI",gxvar:"AV34EntradaOutDespEntraIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV34EntradaOutDespEntraIPI=Value},v2z:function(Value){gx.O.ZV34EntradaOutDespEntraIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAOUTDESPENTRAIPI",gx.O.AV34EntradaOutDespEntraIPI,"S")},c2v:function(){gx.O.AV34EntradaOutDespEntraIPI=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAOUTDESPENTRAIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[120]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradatipolancoutdespid,isvalid:null,rgrid:[],fld:"vENTRADATIPOLANCOUTDESPID",gxz:"ZV58EntradaTipoLancOutDespId",gxold:"OV58EntradaTipoLancOutDespId",gxvar:"AV58EntradaTipoLancOutDespId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58EntradaTipoLancOutDespId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58EntradaTipoLancOutDespId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADATIPOLANCOUTDESPID",gx.O.AV58EntradaTipoLancOutDespId,0)},c2v:function(){gx.O.AV58EntradaTipoLancOutDespId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADATIPOLANCOUTDESPID",'.')},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAACRESCIMOENTRAICMS",gxz:"ZV35EntradaAcrescimoEntraICMS",gxold:"OV35EntradaAcrescimoEntraICMS",gxvar:"AV35EntradaAcrescimoEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV35EntradaAcrescimoEntraICMS=Value},v2z:function(Value){gx.O.ZV35EntradaAcrescimoEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAACRESCIMOENTRAICMS",gx.O.AV35EntradaAcrescimoEntraICMS,"S")},c2v:function(){gx.O.AV35EntradaAcrescimoEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAACRESCIMOENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[128]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAACRESCIMOENTRAICMSST",gxz:"ZV36EntradaAcrescimoEntraICMSST",gxold:"OV36EntradaAcrescimoEntraICMSST",gxvar:"AV36EntradaAcrescimoEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV36EntradaAcrescimoEntraICMSST=Value},v2z:function(Value){gx.O.ZV36EntradaAcrescimoEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAACRESCIMOENTRAICMSST",gx.O.AV36EntradaAcrescimoEntraICMSST,"S")},c2v:function(){gx.O.AV36EntradaAcrescimoEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAACRESCIMOENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[130]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAACRESCIMOENTRAPIS",gxz:"ZV37EntradaAcrescimoEntraPIS",gxold:"OV37EntradaAcrescimoEntraPIS",gxvar:"AV37EntradaAcrescimoEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV37EntradaAcrescimoEntraPIS=Value},v2z:function(Value){gx.O.ZV37EntradaAcrescimoEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAACRESCIMOENTRAPIS",gx.O.AV37EntradaAcrescimoEntraPIS,"S")},c2v:function(){gx.O.AV37EntradaAcrescimoEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAACRESCIMOENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[132]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAACRESCIMOENTRACOFINS",gxz:"ZV38EntradaAcrescimoEntraCOFINS",gxold:"OV38EntradaAcrescimoEntraCOFINS",gxvar:"AV38EntradaAcrescimoEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV38EntradaAcrescimoEntraCOFINS=Value},v2z:function(Value){gx.O.ZV38EntradaAcrescimoEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAACRESCIMOENTRACOFINS",gx.O.AV38EntradaAcrescimoEntraCOFINS,"S")},c2v:function(){gx.O.AV38EntradaAcrescimoEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAACRESCIMOENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[134]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAACRESCIMOENTRAIPI",gxz:"ZV39EntradaAcrescimoEntraIPI",gxold:"OV39EntradaAcrescimoEntraIPI",gxvar:"AV39EntradaAcrescimoEntraIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV39EntradaAcrescimoEntraIPI=Value},v2z:function(Value){gx.O.ZV39EntradaAcrescimoEntraIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAACRESCIMOENTRAIPI",gx.O.AV39EntradaAcrescimoEntraIPI,"S")},c2v:function(){gx.O.AV39EntradaAcrescimoEntraIPI=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAACRESCIMOENTRAIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[136]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradatipolancacrescimoid,isvalid:null,rgrid:[],fld:"vENTRADATIPOLANCACRESCIMOID",gxz:"ZV59EntradaTipoLancAcrescimoId",gxold:"OV59EntradaTipoLancAcrescimoId",gxvar:"AV59EntradaTipoLancAcrescimoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59EntradaTipoLancAcrescimoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59EntradaTipoLancAcrescimoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADATIPOLANCACRESCIMOID",gx.O.AV59EntradaTipoLancAcrescimoId,0)},c2v:function(){gx.O.AV59EntradaTipoLancAcrescimoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADATIPOLANCACRESCIMOID",'.')},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[142]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAIPIENTRAICMS",gxz:"ZV40EntradaIPIEntraICMS",gxold:"OV40EntradaIPIEntraICMS",gxvar:"AV40EntradaIPIEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV40EntradaIPIEntraICMS=Value},v2z:function(Value){gx.O.ZV40EntradaIPIEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAIPIENTRAICMS",gx.O.AV40EntradaIPIEntraICMS,"S")},c2v:function(){gx.O.AV40EntradaIPIEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAIPIENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[144]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAIPIENTRAICMSST",gxz:"ZV41EntradaIPIEntraICMSST",gxold:"OV41EntradaIPIEntraICMSST",gxvar:"AV41EntradaIPIEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV41EntradaIPIEntraICMSST=Value},v2z:function(Value){gx.O.ZV41EntradaIPIEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAIPIENTRAICMSST",gx.O.AV41EntradaIPIEntraICMSST,"S")},c2v:function(){gx.O.AV41EntradaIPIEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAIPIENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[146]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAIPIENTRAPIS",gxz:"ZV42EntradaIPIEntraPIS",gxold:"OV42EntradaIPIEntraPIS",gxvar:"AV42EntradaIPIEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV42EntradaIPIEntraPIS=Value},v2z:function(Value){gx.O.ZV42EntradaIPIEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAIPIENTRAPIS",gx.O.AV42EntradaIPIEntraPIS,"S")},c2v:function(){gx.O.AV42EntradaIPIEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAIPIENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[148]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAIPIENTRACOFINS",gxz:"ZV43EntradaIPIEntraCOFINS",gxold:"OV43EntradaIPIEntraCOFINS",gxvar:"AV43EntradaIPIEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV43EntradaIPIEntraCOFINS=Value},v2z:function(Value){gx.O.ZV43EntradaIPIEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAIPIENTRACOFINS",gx.O.AV43EntradaIPIEntraCOFINS,"S")},c2v:function(){gx.O.AV43EntradaIPIEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAIPIENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[151]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradatipolancipiid,isvalid:null,rgrid:[],fld:"vENTRADATIPOLANCIPIID",gxz:"ZV60EntradaTipoLancIPIId",gxold:"OV60EntradaTipoLancIPIId",gxvar:"AV60EntradaTipoLancIPIId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60EntradaTipoLancIPIId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60EntradaTipoLancIPIId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADATIPOLANCIPIID",gx.O.AV60EntradaTipoLancIPIId,0)},c2v:function(){gx.O.AV60EntradaTipoLancIPIId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADATIPOLANCIPIID",'.')},nac:gx.falseFn};
   GXValidFnc[154]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[157]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAMANUSEIOENTRAICMS",gxz:"ZV44EntradaManuseioEntraICMS",gxold:"OV44EntradaManuseioEntraICMS",gxvar:"AV44EntradaManuseioEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV44EntradaManuseioEntraICMS=Value},v2z:function(Value){gx.O.ZV44EntradaManuseioEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAMANUSEIOENTRAICMS",gx.O.AV44EntradaManuseioEntraICMS,"S")},c2v:function(){gx.O.AV44EntradaManuseioEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAMANUSEIOENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[159]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAMANUSEIOENTRAICMSST",gxz:"ZV45EntradaManuseioEntraICMSST",gxold:"OV45EntradaManuseioEntraICMSST",gxvar:"AV45EntradaManuseioEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV45EntradaManuseioEntraICMSST=Value},v2z:function(Value){gx.O.ZV45EntradaManuseioEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAMANUSEIOENTRAICMSST",gx.O.AV45EntradaManuseioEntraICMSST,"S")},c2v:function(){gx.O.AV45EntradaManuseioEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAMANUSEIOENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[161]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAMANUSEIOENTRAPIS",gxz:"ZV46EntradaManuseioEntraPIS",gxold:"OV46EntradaManuseioEntraPIS",gxvar:"AV46EntradaManuseioEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV46EntradaManuseioEntraPIS=Value},v2z:function(Value){gx.O.ZV46EntradaManuseioEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAMANUSEIOENTRAPIS",gx.O.AV46EntradaManuseioEntraPIS,"S")},c2v:function(){gx.O.AV46EntradaManuseioEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAMANUSEIOENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[163]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAMANUSEIOENTRACOFINS",gxz:"ZV47EntradaManuseioEntraCOFINS",gxold:"OV47EntradaManuseioEntraCOFINS",gxvar:"AV47EntradaManuseioEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV47EntradaManuseioEntraCOFINS=Value},v2z:function(Value){gx.O.ZV47EntradaManuseioEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAMANUSEIOENTRACOFINS",gx.O.AV47EntradaManuseioEntraCOFINS,"S")},c2v:function(){gx.O.AV47EntradaManuseioEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAMANUSEIOENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[165]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAMANUSEIOENTRAIPI",gxz:"ZV48EntradaManuseioEntraIPI",gxold:"OV48EntradaManuseioEntraIPI",gxvar:"AV48EntradaManuseioEntraIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV48EntradaManuseioEntraIPI=Value},v2z:function(Value){gx.O.ZV48EntradaManuseioEntraIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAMANUSEIOENTRAIPI",gx.O.AV48EntradaManuseioEntraIPI,"S")},c2v:function(){gx.O.AV48EntradaManuseioEntraIPI=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAMANUSEIOENTRAIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[167]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradatipolancmanuseioid,isvalid:null,rgrid:[],fld:"vENTRADATIPOLANCMANUSEIOID",gxz:"ZV61EntradaTipoLancManuseioId",gxold:"OV61EntradaTipoLancManuseioId",gxvar:"AV61EntradaTipoLancManuseioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61EntradaTipoLancManuseioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61EntradaTipoLancManuseioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADATIPOLANCMANUSEIOID",gx.O.AV61EntradaTipoLancManuseioId,0)},c2v:function(){gx.O.AV61EntradaTipoLancManuseioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADATIPOLANCMANUSEIOID",'.')},nac:gx.falseFn};
   GXValidFnc[170]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[173]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAICMSSTENTRAICMS",gxz:"ZV49EntradaICMSSTEntraICMS",gxold:"OV49EntradaICMSSTEntraICMS",gxvar:"AV49EntradaICMSSTEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV49EntradaICMSSTEntraICMS=Value},v2z:function(Value){gx.O.ZV49EntradaICMSSTEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAICMSSTENTRAICMS",gx.O.AV49EntradaICMSSTEntraICMS,"S")},c2v:function(){gx.O.AV49EntradaICMSSTEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAICMSSTENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[176]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAICMSSTENTRAPIS",gxz:"ZV50EntradaICMSSTEntraPIS",gxold:"OV50EntradaICMSSTEntraPIS",gxvar:"AV50EntradaICMSSTEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV50EntradaICMSSTEntraPIS=Value},v2z:function(Value){gx.O.ZV50EntradaICMSSTEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAICMSSTENTRAPIS",gx.O.AV50EntradaICMSSTEntraPIS,"S")},c2v:function(){gx.O.AV50EntradaICMSSTEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAICMSSTENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[178]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAICMSSTENTRACOFINS",gxz:"ZV51EntradaICMSSTEntraCOFINS",gxold:"OV51EntradaICMSSTEntraCOFINS",gxvar:"AV51EntradaICMSSTEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV51EntradaICMSSTEntraCOFINS=Value},v2z:function(Value){gx.O.ZV51EntradaICMSSTEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAICMSSTENTRACOFINS",gx.O.AV51EntradaICMSSTEntraCOFINS,"S")},c2v:function(){gx.O.AV51EntradaICMSSTEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAICMSSTENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[181]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradatipolancicmsstid,isvalid:null,rgrid:[],fld:"vENTRADATIPOLANCICMSSTID",gxz:"ZV62EntradaTipoLancICMSSTId",gxold:"OV62EntradaTipoLancICMSSTId",gxvar:"AV62EntradaTipoLancICMSSTId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62EntradaTipoLancICMSSTId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62EntradaTipoLancICMSSTId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADATIPOLANCICMSSTID",gx.O.AV62EntradaTipoLancICMSSTId,0)},c2v:function(){gx.O.AV62EntradaTipoLancICMSSTId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADATIPOLANCICMSSTID",'.')},nac:gx.falseFn};
   GXValidFnc[184]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[187]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAICMSSTNAODESTENTRAICMS",gxz:"ZV52EntradaICMSSTNaoDestEntraICMS",gxold:"OV52EntradaICMSSTNaoDestEntraICMS",gxvar:"AV52EntradaICMSSTNaoDestEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV52EntradaICMSSTNaoDestEntraICMS=Value},v2z:function(Value){gx.O.ZV52EntradaICMSSTNaoDestEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAICMSSTNAODESTENTRAICMS",gx.O.AV52EntradaICMSSTNaoDestEntraICMS,"S")},c2v:function(){gx.O.AV52EntradaICMSSTNaoDestEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAICMSSTNAODESTENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[190]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAICMSSTNAODESTENTRAPIS",gxz:"ZV53EntradaICMSSTNaoDestEntraPIS",gxold:"OV53EntradaICMSSTNaoDestEntraPIS",gxvar:"AV53EntradaICMSSTNaoDestEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV53EntradaICMSSTNaoDestEntraPIS=Value},v2z:function(Value){gx.O.ZV53EntradaICMSSTNaoDestEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAICMSSTNAODESTENTRAPIS",gx.O.AV53EntradaICMSSTNaoDestEntraPIS,"S")},c2v:function(){gx.O.AV53EntradaICMSSTNaoDestEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAICMSSTNAODESTENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[192]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAICMSSTNAODESTENTRACOFINS",gxz:"ZV54EntradaICMSSTNaoDestEntraCOFINS",gxold:"OV54EntradaICMSSTNaoDestEntraCOFINS",gxvar:"AV54EntradaICMSSTNaoDestEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV54EntradaICMSSTNaoDestEntraCOFINS=Value},v2z:function(Value){gx.O.ZV54EntradaICMSSTNaoDestEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAICMSSTNAODESTENTRACOFINS",gx.O.AV54EntradaICMSSTNaoDestEntraCOFINS,"S")},c2v:function(){gx.O.AV54EntradaICMSSTNaoDestEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAICMSSTNAODESTENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[195]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradatipolancicmsstnaodestid,isvalid:null,rgrid:[],fld:"vENTRADATIPOLANCICMSSTNAODESTID",gxz:"ZV63EntradaTipoLancICMSSTNaoDestId",gxold:"OV63EntradaTipoLancICMSSTNaoDestId",gxvar:"AV63EntradaTipoLancICMSSTNaoDestId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63EntradaTipoLancICMSSTNaoDestId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63EntradaTipoLancICMSSTNaoDestId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADATIPOLANCICMSSTNAODESTID",gx.O.AV63EntradaTipoLancICMSSTNaoDestId,0)},c2v:function(){gx.O.AV63EntradaTipoLancICMSSTNaoDestId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADATIPOLANCICMSSTNAODESTID",'.')},nac:gx.falseFn};
   GXValidFnc[198]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[200]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFRETEENTRATOTAL",gxz:"ZV19EntradaFreteEntraTotal",gxold:"OV19EntradaFreteEntraTotal",gxvar:"AV19EntradaFreteEntraTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV19EntradaFreteEntraTotal=Value},v2z:function(Value){gx.O.ZV19EntradaFreteEntraTotal=Value},v2c:function(){gx.fn.setCheckBoxValue("vENTRADAFRETEENTRATOTAL",gx.O.AV19EntradaFreteEntraTotal,"S")},c2v:function(){gx.O.AV19EntradaFreteEntraTotal=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFRETEENTRATOTAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[208]={fld:"TABLE9",grid:0};
   GXValidFnc[212]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[214]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[216]={fld:"TXTTRIB", format:0,grid:0};
   GXValidFnc[218]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[221]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[223]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADATPRATEIODESCONTO",gxz:"ZV64EntradaTpRateioDesconto",gxold:"OV64EntradaTpRateioDesconto",gxvar:"AV64EntradaTpRateioDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV64EntradaTpRateioDesconto=Value},v2z:function(Value){gx.O.ZV64EntradaTpRateioDesconto=Value},v2c:function(){gx.fn.setRadioValue("vENTRADATPRATEIODESCONTO",gx.O.AV64EntradaTpRateioDesconto)},c2v:function(){gx.O.AV64EntradaTpRateioDesconto=this.val()},val:function(){return gx.fn.getControlValue("vENTRADATPRATEIODESCONTO")},nac:gx.falseFn};
   GXValidFnc[226]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[228]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADATPRATEIOFRETE",gxz:"ZV65EntradaTpRateioFrete",gxold:"OV65EntradaTpRateioFrete",gxvar:"AV65EntradaTpRateioFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV65EntradaTpRateioFrete=Value},v2z:function(Value){gx.O.ZV65EntradaTpRateioFrete=Value},v2c:function(){gx.fn.setRadioValue("vENTRADATPRATEIOFRETE",gx.O.AV65EntradaTpRateioFrete)},c2v:function(){gx.O.AV65EntradaTpRateioFrete=this.val()},val:function(){return gx.fn.getControlValue("vENTRADATPRATEIOFRETE")},nac:gx.falseFn};
   GXValidFnc[231]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[233]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADATPRATEIOSEGURO",gxz:"ZV66EntradaTpRateioSeguro",gxold:"OV66EntradaTpRateioSeguro",gxvar:"AV66EntradaTpRateioSeguro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV66EntradaTpRateioSeguro=Value},v2z:function(Value){gx.O.ZV66EntradaTpRateioSeguro=Value},v2c:function(){gx.fn.setRadioValue("vENTRADATPRATEIOSEGURO",gx.O.AV66EntradaTpRateioSeguro)},c2v:function(){gx.O.AV66EntradaTpRateioSeguro=this.val()},val:function(){return gx.fn.getControlValue("vENTRADATPRATEIOSEGURO")},nac:gx.falseFn};
   GXValidFnc[236]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[238]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADATPRATEIOOUTDESP",gxz:"ZV67EntradaTpRateioOutDesp",gxold:"OV67EntradaTpRateioOutDesp",gxvar:"AV67EntradaTpRateioOutDesp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV67EntradaTpRateioOutDesp=Value},v2z:function(Value){gx.O.ZV67EntradaTpRateioOutDesp=Value},v2c:function(){gx.fn.setRadioValue("vENTRADATPRATEIOOUTDESP",gx.O.AV67EntradaTpRateioOutDesp)},c2v:function(){gx.O.AV67EntradaTpRateioOutDesp=this.val()},val:function(){return gx.fn.getControlValue("vENTRADATPRATEIOOUTDESP")},nac:gx.falseFn};
   GXValidFnc[241]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[243]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADATPRATEIOACRESCIMO",gxz:"ZV68EntradaTpRateioAcrescimo",gxold:"OV68EntradaTpRateioAcrescimo",gxvar:"AV68EntradaTpRateioAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV68EntradaTpRateioAcrescimo=Value},v2z:function(Value){gx.O.ZV68EntradaTpRateioAcrescimo=Value},v2c:function(){gx.fn.setRadioValue("vENTRADATPRATEIOACRESCIMO",gx.O.AV68EntradaTpRateioAcrescimo)},c2v:function(){gx.O.AV68EntradaTpRateioAcrescimo=this.val()},val:function(){return gx.fn.getControlValue("vENTRADATPRATEIOACRESCIMO")},nac:gx.falseFn};
   GXValidFnc[246]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[248]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADATPRATEIOMANUSEIO",gxz:"ZV69EntradaTpRateioManuseio",gxold:"OV69EntradaTpRateioManuseio",gxvar:"AV69EntradaTpRateioManuseio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV69EntradaTpRateioManuseio=Value},v2z:function(Value){gx.O.ZV69EntradaTpRateioManuseio=Value},v2c:function(){gx.fn.setRadioValue("vENTRADATPRATEIOMANUSEIO",gx.O.AV69EntradaTpRateioManuseio)},c2v:function(){gx.O.AV69EntradaTpRateioManuseio=this.val()},val:function(){return gx.fn.getControlValue("vENTRADATPRATEIOMANUSEIO")},nac:gx.falseFn};
   GXValidFnc[256]={fld:"PROMPT_ENTRADATIPOLANCDESCONTOID",grid:0};
   GXValidFnc[257]={fld:"PROMPT_ENTRADATIPOLANCFRETEID",grid:0};
   GXValidFnc[258]={fld:"PROMPT_ENTRADATIPOLANCSEGUROID",grid:0};
   GXValidFnc[259]={fld:"PROMPT_ENTRADATIPOLANCOUTDESPID",grid:0};
   GXValidFnc[260]={fld:"PROMPT_ENTRADATIPOLANCACRESCIMOID",grid:0};
   GXValidFnc[261]={fld:"PROMPT_ENTRADATIPOLANCIPIID",grid:0};
   GXValidFnc[262]={fld:"PROMPT_ENTRADATIPOLANCMANUSEIOID",grid:0};
   GXValidFnc[263]={fld:"PROMPT_ENTRADATIPOLANCICMSSTID",grid:0};
   GXValidFnc[264]={fld:"PROMPT_ENTRADATIPOLANCICMSSTNAODESTID",grid:0};
   this.AV6EntradaSnAlteraSaldo = "" ;
   this.ZV6EntradaSnAlteraSaldo = "" ;
   this.OV6EntradaSnAlteraSaldo = "" ;
   this.AV7EntradaSnAlteraCusto = "" ;
   this.ZV7EntradaSnAlteraCusto = "" ;
   this.OV7EntradaSnAlteraCusto = "" ;
   this.AV8EntradaSnCalculaDiferencaICMS = "" ;
   this.ZV8EntradaSnCalculaDiferencaICMS = "" ;
   this.OV8EntradaSnCalculaDiferencaICMS = "" ;
   this.AV85SnIncValEntrada = "" ;
   this.ZV85SnIncValEntrada = "" ;
   this.OV85SnIncValEntrada = "" ;
   this.AV18EntradaVlrProdutoEntraICMS = "" ;
   this.ZV18EntradaVlrProdutoEntraICMS = "" ;
   this.OV18EntradaVlrProdutoEntraICMS = "" ;
   this.AV9EntradaVlrProdutoEntraICMSST = "" ;
   this.ZV9EntradaVlrProdutoEntraICMSST = "" ;
   this.OV9EntradaVlrProdutoEntraICMSST = "" ;
   this.AV10EntradaVlrProdutoEntraPIS = "" ;
   this.ZV10EntradaVlrProdutoEntraPIS = "" ;
   this.OV10EntradaVlrProdutoEntraPIS = "" ;
   this.AV11EntradaVlrProdutoEntraCOFINS = "" ;
   this.ZV11EntradaVlrProdutoEntraCOFINS = "" ;
   this.OV11EntradaVlrProdutoEntraCOFINS = "" ;
   this.AV12EntradaVlrProdutoEntraIPI = "" ;
   this.ZV12EntradaVlrProdutoEntraIPI = "" ;
   this.OV12EntradaVlrProdutoEntraIPI = "" ;
   this.AV13EntradaDescontoEntraICMS = "" ;
   this.ZV13EntradaDescontoEntraICMS = "" ;
   this.OV13EntradaDescontoEntraICMS = "" ;
   this.AV14EntradaDescontoEntraICMSST = "" ;
   this.ZV14EntradaDescontoEntraICMSST = "" ;
   this.OV14EntradaDescontoEntraICMSST = "" ;
   this.AV15EntradaDescontoEntraPIS = "" ;
   this.ZV15EntradaDescontoEntraPIS = "" ;
   this.OV15EntradaDescontoEntraPIS = "" ;
   this.AV16EntradaDescontoEntraCOFINS = "" ;
   this.ZV16EntradaDescontoEntraCOFINS = "" ;
   this.OV16EntradaDescontoEntraCOFINS = "" ;
   this.AV17EntradaDescontoEntraIPI = "" ;
   this.ZV17EntradaDescontoEntraIPI = "" ;
   this.OV17EntradaDescontoEntraIPI = "" ;
   this.AV55EntradaTipoLancDescontoid = 0 ;
   this.ZV55EntradaTipoLancDescontoid = 0 ;
   this.OV55EntradaTipoLancDescontoid = 0 ;
   this.AV19EntradaFreteEntraTotal = "" ;
   this.ZV19EntradaFreteEntraTotal = "" ;
   this.OV19EntradaFreteEntraTotal = "" ;
   this.AV20EntradaFreteEntraICMS = "" ;
   this.ZV20EntradaFreteEntraICMS = "" ;
   this.OV20EntradaFreteEntraICMS = "" ;
   this.AV21EntradaFreteEntraICMSST = "" ;
   this.ZV21EntradaFreteEntraICMSST = "" ;
   this.OV21EntradaFreteEntraICMSST = "" ;
   this.AV22EntradaFreteEntraPIS = "" ;
   this.ZV22EntradaFreteEntraPIS = "" ;
   this.OV22EntradaFreteEntraPIS = "" ;
   this.AV23EntradaFreteEntraCOFINS = "" ;
   this.ZV23EntradaFreteEntraCOFINS = "" ;
   this.OV23EntradaFreteEntraCOFINS = "" ;
   this.AV24EntradaFreteEntraIPI = "" ;
   this.ZV24EntradaFreteEntraIPI = "" ;
   this.OV24EntradaFreteEntraIPI = "" ;
   this.AV56EntradaTipoLancFreteId = 0 ;
   this.ZV56EntradaTipoLancFreteId = 0 ;
   this.OV56EntradaTipoLancFreteId = 0 ;
   this.AV25EntradaSeguroEntraICMS = "" ;
   this.ZV25EntradaSeguroEntraICMS = "" ;
   this.OV25EntradaSeguroEntraICMS = "" ;
   this.AV26EntradaSeguroEntraICMSST = "" ;
   this.ZV26EntradaSeguroEntraICMSST = "" ;
   this.OV26EntradaSeguroEntraICMSST = "" ;
   this.AV27EntradaSeguroEntraPIS = "" ;
   this.ZV27EntradaSeguroEntraPIS = "" ;
   this.OV27EntradaSeguroEntraPIS = "" ;
   this.AV28EntradaSeguroEntraCOFINS = "" ;
   this.ZV28EntradaSeguroEntraCOFINS = "" ;
   this.OV28EntradaSeguroEntraCOFINS = "" ;
   this.AV29EntradaSeguroEntraIPI = "" ;
   this.ZV29EntradaSeguroEntraIPI = "" ;
   this.OV29EntradaSeguroEntraIPI = "" ;
   this.AV57EntradaTipoLancSeguroId = 0 ;
   this.ZV57EntradaTipoLancSeguroId = 0 ;
   this.OV57EntradaTipoLancSeguroId = 0 ;
   this.AV30EntradaOutDespEntraICMS = "" ;
   this.ZV30EntradaOutDespEntraICMS = "" ;
   this.OV30EntradaOutDespEntraICMS = "" ;
   this.AV31EntradaOutDespEntraICMSST = "" ;
   this.ZV31EntradaOutDespEntraICMSST = "" ;
   this.OV31EntradaOutDespEntraICMSST = "" ;
   this.AV32EntradaOutDespEntraPIS = "" ;
   this.ZV32EntradaOutDespEntraPIS = "" ;
   this.OV32EntradaOutDespEntraPIS = "" ;
   this.AV33EntradaOutDespEntraCOFINS = "" ;
   this.ZV33EntradaOutDespEntraCOFINS = "" ;
   this.OV33EntradaOutDespEntraCOFINS = "" ;
   this.AV34EntradaOutDespEntraIPI = "" ;
   this.ZV34EntradaOutDespEntraIPI = "" ;
   this.OV34EntradaOutDespEntraIPI = "" ;
   this.AV58EntradaTipoLancOutDespId = 0 ;
   this.ZV58EntradaTipoLancOutDespId = 0 ;
   this.OV58EntradaTipoLancOutDespId = 0 ;
   this.AV35EntradaAcrescimoEntraICMS = "" ;
   this.ZV35EntradaAcrescimoEntraICMS = "" ;
   this.OV35EntradaAcrescimoEntraICMS = "" ;
   this.AV36EntradaAcrescimoEntraICMSST = "" ;
   this.ZV36EntradaAcrescimoEntraICMSST = "" ;
   this.OV36EntradaAcrescimoEntraICMSST = "" ;
   this.AV37EntradaAcrescimoEntraPIS = "" ;
   this.ZV37EntradaAcrescimoEntraPIS = "" ;
   this.OV37EntradaAcrescimoEntraPIS = "" ;
   this.AV38EntradaAcrescimoEntraCOFINS = "" ;
   this.ZV38EntradaAcrescimoEntraCOFINS = "" ;
   this.OV38EntradaAcrescimoEntraCOFINS = "" ;
   this.AV39EntradaAcrescimoEntraIPI = "" ;
   this.ZV39EntradaAcrescimoEntraIPI = "" ;
   this.OV39EntradaAcrescimoEntraIPI = "" ;
   this.AV59EntradaTipoLancAcrescimoId = 0 ;
   this.ZV59EntradaTipoLancAcrescimoId = 0 ;
   this.OV59EntradaTipoLancAcrescimoId = 0 ;
   this.AV40EntradaIPIEntraICMS = "" ;
   this.ZV40EntradaIPIEntraICMS = "" ;
   this.OV40EntradaIPIEntraICMS = "" ;
   this.AV41EntradaIPIEntraICMSST = "" ;
   this.ZV41EntradaIPIEntraICMSST = "" ;
   this.OV41EntradaIPIEntraICMSST = "" ;
   this.AV42EntradaIPIEntraPIS = "" ;
   this.ZV42EntradaIPIEntraPIS = "" ;
   this.OV42EntradaIPIEntraPIS = "" ;
   this.AV43EntradaIPIEntraCOFINS = "" ;
   this.ZV43EntradaIPIEntraCOFINS = "" ;
   this.OV43EntradaIPIEntraCOFINS = "" ;
   this.AV60EntradaTipoLancIPIId = 0 ;
   this.ZV60EntradaTipoLancIPIId = 0 ;
   this.OV60EntradaTipoLancIPIId = 0 ;
   this.AV44EntradaManuseioEntraICMS = "" ;
   this.ZV44EntradaManuseioEntraICMS = "" ;
   this.OV44EntradaManuseioEntraICMS = "" ;
   this.AV45EntradaManuseioEntraICMSST = "" ;
   this.ZV45EntradaManuseioEntraICMSST = "" ;
   this.OV45EntradaManuseioEntraICMSST = "" ;
   this.AV46EntradaManuseioEntraPIS = "" ;
   this.ZV46EntradaManuseioEntraPIS = "" ;
   this.OV46EntradaManuseioEntraPIS = "" ;
   this.AV47EntradaManuseioEntraCOFINS = "" ;
   this.ZV47EntradaManuseioEntraCOFINS = "" ;
   this.OV47EntradaManuseioEntraCOFINS = "" ;
   this.AV48EntradaManuseioEntraIPI = "" ;
   this.ZV48EntradaManuseioEntraIPI = "" ;
   this.OV48EntradaManuseioEntraIPI = "" ;
   this.AV61EntradaTipoLancManuseioId = 0 ;
   this.ZV61EntradaTipoLancManuseioId = 0 ;
   this.OV61EntradaTipoLancManuseioId = 0 ;
   this.AV49EntradaICMSSTEntraICMS = "" ;
   this.ZV49EntradaICMSSTEntraICMS = "" ;
   this.OV49EntradaICMSSTEntraICMS = "" ;
   this.AV50EntradaICMSSTEntraPIS = "" ;
   this.ZV50EntradaICMSSTEntraPIS = "" ;
   this.OV50EntradaICMSSTEntraPIS = "" ;
   this.AV51EntradaICMSSTEntraCOFINS = "" ;
   this.ZV51EntradaICMSSTEntraCOFINS = "" ;
   this.OV51EntradaICMSSTEntraCOFINS = "" ;
   this.AV62EntradaTipoLancICMSSTId = 0 ;
   this.ZV62EntradaTipoLancICMSSTId = 0 ;
   this.OV62EntradaTipoLancICMSSTId = 0 ;
   this.AV52EntradaICMSSTNaoDestEntraICMS = "" ;
   this.ZV52EntradaICMSSTNaoDestEntraICMS = "" ;
   this.OV52EntradaICMSSTNaoDestEntraICMS = "" ;
   this.AV53EntradaICMSSTNaoDestEntraPIS = "" ;
   this.ZV53EntradaICMSSTNaoDestEntraPIS = "" ;
   this.OV53EntradaICMSSTNaoDestEntraPIS = "" ;
   this.AV54EntradaICMSSTNaoDestEntraCOFINS = "" ;
   this.ZV54EntradaICMSSTNaoDestEntraCOFINS = "" ;
   this.OV54EntradaICMSSTNaoDestEntraCOFINS = "" ;
   this.AV63EntradaTipoLancICMSSTNaoDestId = 0 ;
   this.ZV63EntradaTipoLancICMSSTNaoDestId = 0 ;
   this.OV63EntradaTipoLancICMSSTNaoDestId = 0 ;
   this.AV64EntradaTpRateioDesconto = "" ;
   this.ZV64EntradaTpRateioDesconto = "" ;
   this.OV64EntradaTpRateioDesconto = "" ;
   this.AV65EntradaTpRateioFrete = "" ;
   this.ZV65EntradaTpRateioFrete = "" ;
   this.OV65EntradaTpRateioFrete = "" ;
   this.AV66EntradaTpRateioSeguro = "" ;
   this.ZV66EntradaTpRateioSeguro = "" ;
   this.OV66EntradaTpRateioSeguro = "" ;
   this.AV67EntradaTpRateioOutDesp = "" ;
   this.ZV67EntradaTpRateioOutDesp = "" ;
   this.OV67EntradaTpRateioOutDesp = "" ;
   this.AV68EntradaTpRateioAcrescimo = "" ;
   this.ZV68EntradaTpRateioAcrescimo = "" ;
   this.OV68EntradaTpRateioAcrescimo = "" ;
   this.AV69EntradaTpRateioManuseio = "" ;
   this.ZV69EntradaTpRateioManuseio = "" ;
   this.OV69EntradaTpRateioManuseio = "" ;
   this.AV6EntradaSnAlteraSaldo = "" ;
   this.AV7EntradaSnAlteraCusto = "" ;
   this.AV8EntradaSnCalculaDiferencaICMS = "" ;
   this.AV85SnIncValEntrada = "" ;
   this.AV18EntradaVlrProdutoEntraICMS = "" ;
   this.AV9EntradaVlrProdutoEntraICMSST = "" ;
   this.AV10EntradaVlrProdutoEntraPIS = "" ;
   this.AV11EntradaVlrProdutoEntraCOFINS = "" ;
   this.AV12EntradaVlrProdutoEntraIPI = "" ;
   this.AV13EntradaDescontoEntraICMS = "" ;
   this.AV14EntradaDescontoEntraICMSST = "" ;
   this.AV15EntradaDescontoEntraPIS = "" ;
   this.AV16EntradaDescontoEntraCOFINS = "" ;
   this.AV17EntradaDescontoEntraIPI = "" ;
   this.AV55EntradaTipoLancDescontoid = 0 ;
   this.AV19EntradaFreteEntraTotal = "" ;
   this.AV20EntradaFreteEntraICMS = "" ;
   this.AV21EntradaFreteEntraICMSST = "" ;
   this.AV22EntradaFreteEntraPIS = "" ;
   this.AV23EntradaFreteEntraCOFINS = "" ;
   this.AV24EntradaFreteEntraIPI = "" ;
   this.AV56EntradaTipoLancFreteId = 0 ;
   this.AV25EntradaSeguroEntraICMS = "" ;
   this.AV26EntradaSeguroEntraICMSST = "" ;
   this.AV27EntradaSeguroEntraPIS = "" ;
   this.AV28EntradaSeguroEntraCOFINS = "" ;
   this.AV29EntradaSeguroEntraIPI = "" ;
   this.AV57EntradaTipoLancSeguroId = 0 ;
   this.AV30EntradaOutDespEntraICMS = "" ;
   this.AV31EntradaOutDespEntraICMSST = "" ;
   this.AV32EntradaOutDespEntraPIS = "" ;
   this.AV33EntradaOutDespEntraCOFINS = "" ;
   this.AV34EntradaOutDespEntraIPI = "" ;
   this.AV58EntradaTipoLancOutDespId = 0 ;
   this.AV35EntradaAcrescimoEntraICMS = "" ;
   this.AV36EntradaAcrescimoEntraICMSST = "" ;
   this.AV37EntradaAcrescimoEntraPIS = "" ;
   this.AV38EntradaAcrescimoEntraCOFINS = "" ;
   this.AV39EntradaAcrescimoEntraIPI = "" ;
   this.AV59EntradaTipoLancAcrescimoId = 0 ;
   this.AV40EntradaIPIEntraICMS = "" ;
   this.AV41EntradaIPIEntraICMSST = "" ;
   this.AV42EntradaIPIEntraPIS = "" ;
   this.AV43EntradaIPIEntraCOFINS = "" ;
   this.AV60EntradaTipoLancIPIId = 0 ;
   this.AV44EntradaManuseioEntraICMS = "" ;
   this.AV45EntradaManuseioEntraICMSST = "" ;
   this.AV46EntradaManuseioEntraPIS = "" ;
   this.AV47EntradaManuseioEntraCOFINS = "" ;
   this.AV48EntradaManuseioEntraIPI = "" ;
   this.AV61EntradaTipoLancManuseioId = 0 ;
   this.AV49EntradaICMSSTEntraICMS = "" ;
   this.AV50EntradaICMSSTEntraPIS = "" ;
   this.AV51EntradaICMSSTEntraCOFINS = "" ;
   this.AV62EntradaTipoLancICMSSTId = 0 ;
   this.AV52EntradaICMSSTNaoDestEntraICMS = "" ;
   this.AV53EntradaICMSSTNaoDestEntraPIS = "" ;
   this.AV54EntradaICMSSTNaoDestEntraCOFINS = "" ;
   this.AV63EntradaTipoLancICMSSTNaoDestId = 0 ;
   this.AV64EntradaTpRateioDesconto = "" ;
   this.AV65EntradaTpRateioFrete = "" ;
   this.AV66EntradaTpRateioSeguro = "" ;
   this.AV67EntradaTpRateioOutDesp = "" ;
   this.AV68EntradaTpRateioAcrescimo = "" ;
   this.AV69EntradaTpRateioManuseio = "" ;
   this.AV78SnGravarNota = "" ;
   this.AV80SnHabilitaFinanceiro = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A5483AjusteFiscalCodigo = "" ;
   this.Events = {"e12v92_client": ["ENTER", true] ,"e13v92_client": ["'FECHAR'", true] ,"e15v92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV76SnErro',fld:'vSNERRO'},{av:'AV8EntradaSnCalculaDiferencaICMS',fld:'vENTRADASNCALCULADIFERENCAICMS'},{av:'A5483AjusteFiscalCodigo',fld:'AJUSTEFISCALCODIGO'},{av:'AV77EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV55EntradaTipoLancDescontoid',fld:'vENTRADATIPOLANCDESCONTOID'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'AV56EntradaTipoLancFreteId',fld:'vENTRADATIPOLANCFRETEID'},{av:'AV57EntradaTipoLancSeguroId',fld:'vENTRADATIPOLANCSEGUROID'},{av:'AV58EntradaTipoLancOutDespId',fld:'vENTRADATIPOLANCOUTDESPID'},{av:'AV59EntradaTipoLancAcrescimoId',fld:'vENTRADATIPOLANCACRESCIMOID'},{av:'AV60EntradaTipoLancIPIId',fld:'vENTRADATIPOLANCIPIID'},{av:'AV61EntradaTipoLancManuseioId',fld:'vENTRADATIPOLANCMANUSEIOID'},{av:'AV62EntradaTipoLancICMSSTId',fld:'vENTRADATIPOLANCICMSSTID'},{av:'AV63EntradaTipoLancICMSSTNaoDestId',fld:'vENTRADATIPOLANCICMSSTNAODESTID'},{av:'AV38EntradaAcrescimoEntraCOFINS',fld:'vENTRADAACRESCIMOENTRACOFINS'},{av:'AV35EntradaAcrescimoEntraICMS',fld:'vENTRADAACRESCIMOENTRAICMS'},{av:'AV36EntradaAcrescimoEntraICMSST',fld:'vENTRADAACRESCIMOENTRAICMSST'},{av:'AV39EntradaAcrescimoEntraIPI',fld:'vENTRADAACRESCIMOENTRAIPI'},{av:'AV37EntradaAcrescimoEntraPIS',fld:'vENTRADAACRESCIMOENTRAPIS'},{av:'AV16EntradaDescontoEntraCOFINS',fld:'vENTRADADESCONTOENTRACOFINS'},{av:'AV13EntradaDescontoEntraICMS',fld:'vENTRADADESCONTOENTRAICMS'},{av:'AV14EntradaDescontoEntraICMSST',fld:'vENTRADADESCONTOENTRAICMSST'},{av:'AV17EntradaDescontoEntraIPI',fld:'vENTRADADESCONTOENTRAIPI'},{av:'AV15EntradaDescontoEntraPIS',fld:'vENTRADADESCONTOENTRAPIS'},{av:'AV23EntradaFreteEntraCOFINS',fld:'vENTRADAFRETEENTRACOFINS'},{av:'AV20EntradaFreteEntraICMS',fld:'vENTRADAFRETEENTRAICMS'},{av:'AV21EntradaFreteEntraICMSST',fld:'vENTRADAFRETEENTRAICMSST'},{av:'AV24EntradaFreteEntraIPI',fld:'vENTRADAFRETEENTRAIPI'},{av:'AV22EntradaFreteEntraPIS',fld:'vENTRADAFRETEENTRAPIS'},{av:'AV19EntradaFreteEntraTotal',fld:'vENTRADAFRETEENTRATOTAL'},{av:'AV86EntradaICMSDesEntraTotal',fld:'vENTRADAICMSDESENTRATOTAL'},{av:'AV51EntradaICMSSTEntraCOFINS',fld:'vENTRADAICMSSTENTRACOFINS'},{av:'AV49EntradaICMSSTEntraICMS',fld:'vENTRADAICMSSTENTRAICMS'},{av:'AV50EntradaICMSSTEntraPIS',fld:'vENTRADAICMSSTENTRAPIS'},{av:'AV54EntradaICMSSTNaoDestEntraCOFINS',fld:'vENTRADAICMSSTNAODESTENTRACOFINS'},{av:'AV52EntradaICMSSTNaoDestEntraICMS',fld:'vENTRADAICMSSTNAODESTENTRAICMS'},{av:'AV53EntradaICMSSTNaoDestEntraPIS',fld:'vENTRADAICMSSTNAODESTENTRAPIS'},{av:'AV43EntradaIPIEntraCOFINS',fld:'vENTRADAIPIENTRACOFINS'},{av:'AV40EntradaIPIEntraICMS',fld:'vENTRADAIPIENTRAICMS'},{av:'AV41EntradaIPIEntraICMSST',fld:'vENTRADAIPIENTRAICMSST'},{av:'AV42EntradaIPIEntraPIS',fld:'vENTRADAIPIENTRAPIS'},{av:'AV47EntradaManuseioEntraCOFINS',fld:'vENTRADAMANUSEIOENTRACOFINS'},{av:'AV44EntradaManuseioEntraICMS',fld:'vENTRADAMANUSEIOENTRAICMS'},{av:'AV45EntradaManuseioEntraICMSST',fld:'vENTRADAMANUSEIOENTRAICMSST'},{av:'AV48EntradaManuseioEntraIPI',fld:'vENTRADAMANUSEIOENTRAIPI'},{av:'AV46EntradaManuseioEntraPIS',fld:'vENTRADAMANUSEIOENTRAPIS'},{av:'AV11EntradaVlrProdutoEntraCOFINS',fld:'vENTRADAVLRPRODUTOENTRACOFINS'},{av:'AV18EntradaVlrProdutoEntraICMS',fld:'vENTRADAVLRPRODUTOENTRAICMS'},{av:'AV9EntradaVlrProdutoEntraICMSST',fld:'vENTRADAVLRPRODUTOENTRAICMSST'},{av:'AV12EntradaVlrProdutoEntraIPI',fld:'vENTRADAVLRPRODUTOENTRAIPI'},{av:'AV10EntradaVlrProdutoEntraPIS',fld:'vENTRADAVLRPRODUTOENTRAPIS'},{av:'AV28EntradaSeguroEntraCOFINS',fld:'vENTRADASEGUROENTRACOFINS'},{av:'AV25EntradaSeguroEntraICMS',fld:'vENTRADASEGUROENTRAICMS'},{av:'AV26EntradaSeguroEntraICMSST',fld:'vENTRADASEGUROENTRAICMSST'},{av:'AV29EntradaSeguroEntraIPI',fld:'vENTRADASEGUROENTRAIPI'},{av:'AV27EntradaSeguroEntraPIS',fld:'vENTRADASEGUROENTRAPIS'},{av:'AV33EntradaOutDespEntraCOFINS',fld:'vENTRADAOUTDESPENTRACOFINS'},{av:'AV30EntradaOutDespEntraICMS',fld:'vENTRADAOUTDESPENTRAICMS'},{av:'AV31EntradaOutDespEntraICMSST',fld:'vENTRADAOUTDESPENTRAICMSST'},{av:'AV34EntradaOutDespEntraIPI',fld:'vENTRADAOUTDESPENTRAIPI'},{av:'AV32EntradaOutDespEntraPIS',fld:'vENTRADAOUTDESPENTRAPIS'},{av:'AV7EntradaSnAlteraCusto',fld:'vENTRADASNALTERACUSTO'},{av:'AV6EntradaSnAlteraSaldo',fld:'vENTRADASNALTERASALDO'},{av:'AV64EntradaTpRateioDesconto',fld:'vENTRADATPRATEIODESCONTO'},{av:'AV65EntradaTpRateioFrete',fld:'vENTRADATPRATEIOFRETE'},{av:'AV66EntradaTpRateioSeguro',fld:'vENTRADATPRATEIOSEGURO'},{av:'AV67EntradaTpRateioOutDesp',fld:'vENTRADATPRATEIOOUTDESP'},{av:'AV68EntradaTpRateioAcrescimo',fld:'vENTRADATPRATEIOACRESCIMO'},{av:'AV69EntradaTpRateioManuseio',fld:'vENTRADATPRATEIOMANUSEIO'},{av:'AV85SnIncValEntrada',fld:'vSNINCVALENTRADA'}],[{av:'AV82SnOk',fld:'vSNOK'},{av:'AV76SnErro',fld:'vSNERRO'},{av:'AV75TipoLancamentoEmpresaId',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'AV74TrnEntrada',fld:'vTRNENTRADA'},{av:'AV84AjusteFiscalCodigo',fld:'vAJUSTEFISCALCODIGO'},{av:'AV91GXLvl227',fld:'vGXLVL227'},{av:'AV83SnFinanceiro',fld:'vSNFINANCEIRO'},{av:'AV92GXLvl247',fld:'vGXLVL247'},{av:'AV93GXLvl278',fld:'vGXLVL278'},{av:'AV94GXLvl309',fld:'vGXLVL309'},{av:'AV95GXLvl340',fld:'vGXLVL340'},{av:'AV96GXLvl371',fld:'vGXLVL371'},{av:'AV97GXLvl402',fld:'vGXLVL402'},{av:'AV98GXLvl433',fld:'vGXLVL433'},{av:'AV99GXLvl464',fld:'vGXLVL464'},{av:'AV100GXLvl495',fld:'vGXLVL495'},{av:'AV85SnIncValEntrada',fld:'vSNINCVALENTRADA'}]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV82SnOk',fld:'vSNOK'}]];
   this.setPrompt("PROMPT_ENTRADATIPOLANCDESCONTOID", [71]);
   this.setPrompt("PROMPT_ENTRADATIPOLANCFRETEID", [88]);
   this.setPrompt("PROMPT_ENTRADATIPOLANCSEGUROID", [104]);
   this.setPrompt("PROMPT_ENTRADATIPOLANCOUTDESPID", [120]);
   this.setPrompt("PROMPT_ENTRADATIPOLANCACRESCIMOID", [136]);
   this.setPrompt("PROMPT_ENTRADATIPOLANCIPIID", [151]);
   this.setPrompt("PROMPT_ENTRADATIPOLANCMANUSEIOID", [167]);
   this.setPrompt("PROMPT_ENTRADATIPOLANCICMSSTID", [181]);
   this.setPrompt("PROMPT_ENTRADATIPOLANCICMSSTNAODESTID", [195]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV78SnGravarNota", "vSNGRAVARNOTA", 0, "char");
   this.setVCMap("AV80SnHabilitaFinanceiro", "vSNHABILITAFINANCEIRO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarentradaparametros());
