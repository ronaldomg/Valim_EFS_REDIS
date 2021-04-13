/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:34:15.67
*/
gx.evt.autoSkip = false;
gx.define('hregistrarsaidaparametros', false, function () {
   this.ServerClass =  "hregistrarsaidaparametros" ;
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
      this.AV91Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.Validv_Saidatipolancdescontoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDATIPOLANCDESCONTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saidatipolancfreteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDATIPOLANCFRETEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saidatipolancoutdespid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDATIPOLANCOUTDESPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saidatipolancipiid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDATIPOLANCIPIID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saidatipolancicmsstid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDATIPOLANCICMSSTID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precopadsaidaaux=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOPADSAIDAAUX");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precominimoaux=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOMINIMOAUX");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ajusteicmsfrete=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAJUSTEICMSFRETE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ajustenotafrete=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAJUSTENOTAFRETE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1212u2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1312u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1512u2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,7,10,16,19,22,25,27,32,44,46,48,50,52,54,56,58,70,73,75,77,79,81,94,97,99,101,103,105,107,119,121,123,125,127,129,131,133,145,148,150,152,154,156,158,170,173,175,177,179,181,183,195,198,200,202,204,207,219,222,225,227,230,233,236,238,241,243,246,248,251,253,256,258,261,263,266,268,271,273,279,282,285,289,300,301,302,303,304,305,306,307,308,309];
   this.GXLastCtrlId =309;
   GXValidFnc[2]={fld:"SECTION2",grid:0};
   GXValidFnc[3]={fld:"SECTION1",grid:0};
   GXValidFnc[4]={fld:"TABLE2",grid:0};
   GXValidFnc[7]={fld:"TABLE7",grid:0};
   GXValidFnc[10]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[16]={fld:"TABLE5",grid:0};
   GXValidFnc[19]={fld:"TABLE3",grid:0};
   GXValidFnc[22]={fld:"TABLE4",grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASNALTERASALDO",gxz:"ZV20SaidaSnAlteraSaldo",gxold:"OV20SaidaSnAlteraSaldo",gxvar:"AV20SaidaSnAlteraSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20SaidaSnAlteraSaldo=Value},v2z:function(Value){gx.O.ZV20SaidaSnAlteraSaldo=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDASNALTERASALDO",gx.O.AV20SaidaSnAlteraSaldo,"S")},c2v:function(){gx.O.AV20SaidaSnAlteraSaldo=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASNALTERASALDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASNCALCDIFICMSST",gxz:"ZV21SaidaSnCalcDifICMSST",gxold:"OV21SaidaSnCalcDifICMSST",gxvar:"AV21SaidaSnCalcDifICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21SaidaSnCalcDifICMSST=Value},v2z:function(Value){gx.O.ZV21SaidaSnCalcDifICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDASNCALCDIFICMSST",gx.O.AV21SaidaSnCalcDifICMSST,"S")},c2v:function(){gx.O.AV21SaidaSnCalcDifICMSST=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASNCALCDIFICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[32]={fld:"TABLE1",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[46]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[56]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[70]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVLRPRODUTOENTRAICMS",gxz:"ZV23SaidaVlrProdutoEntraICMS",gxold:"OV23SaidaVlrProdutoEntraICMS",gxvar:"AV23SaidaVlrProdutoEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23SaidaVlrProdutoEntraICMS=Value},v2z:function(Value){gx.O.ZV23SaidaVlrProdutoEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAVLRPRODUTOENTRAICMS",gx.O.AV23SaidaVlrProdutoEntraICMS,"S")},c2v:function(){gx.O.AV23SaidaVlrProdutoEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAVLRPRODUTOENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[75]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVLRPRODUTOENTRAICMSST",gxz:"ZV24SaidaVlrProdutoEntraICMSST",gxold:"OV24SaidaVlrProdutoEntraICMSST",gxvar:"AV24SaidaVlrProdutoEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24SaidaVlrProdutoEntraICMSST=Value},v2z:function(Value){gx.O.ZV24SaidaVlrProdutoEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAVLRPRODUTOENTRAICMSST",gx.O.AV24SaidaVlrProdutoEntraICMSST,"S")},c2v:function(){gx.O.AV24SaidaVlrProdutoEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAVLRPRODUTOENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[77]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVLRPRODUTOENTRAPIS",gxz:"ZV26SaidaVlrProdutoEntraPIS",gxold:"OV26SaidaVlrProdutoEntraPIS",gxvar:"AV26SaidaVlrProdutoEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26SaidaVlrProdutoEntraPIS=Value},v2z:function(Value){gx.O.ZV26SaidaVlrProdutoEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAVLRPRODUTOENTRAPIS",gx.O.AV26SaidaVlrProdutoEntraPIS,"S")},c2v:function(){gx.O.AV26SaidaVlrProdutoEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAVLRPRODUTOENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[79]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVLRPRODUTOENTRACOFINS",gxz:"ZV27SaidaVlrProdutoEntraCOFINS",gxold:"OV27SaidaVlrProdutoEntraCOFINS",gxvar:"AV27SaidaVlrProdutoEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV27SaidaVlrProdutoEntraCOFINS=Value},v2z:function(Value){gx.O.ZV27SaidaVlrProdutoEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAVLRPRODUTOENTRACOFINS",gx.O.AV27SaidaVlrProdutoEntraCOFINS,"S")},c2v:function(){gx.O.AV27SaidaVlrProdutoEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAVLRPRODUTOENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[81]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVLRPRODUTOENTRAIPI",gxz:"ZV25SaidaVlrProdutoEntraIPI",gxold:"OV25SaidaVlrProdutoEntraIPI",gxvar:"AV25SaidaVlrProdutoEntraIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25SaidaVlrProdutoEntraIPI=Value},v2z:function(Value){gx.O.ZV25SaidaVlrProdutoEntraIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAVLRPRODUTOENTRAIPI",gx.O.AV25SaidaVlrProdutoEntraIPI,"S")},c2v:function(){gx.O.AV25SaidaVlrProdutoEntraIPI=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAVLRPRODUTOENTRAIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[94]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADESCONTOENTRAICMS",gxz:"ZV28SaidaDescontoEntraICMS",gxold:"OV28SaidaDescontoEntraICMS",gxvar:"AV28SaidaDescontoEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV28SaidaDescontoEntraICMS=Value},v2z:function(Value){gx.O.ZV28SaidaDescontoEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDADESCONTOENTRAICMS",gx.O.AV28SaidaDescontoEntraICMS,"S")},c2v:function(){gx.O.AV28SaidaDescontoEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDADESCONTOENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[99]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADESCONTOENTRAICMSST",gxz:"ZV29SaidaDescontoEntraICMSST",gxold:"OV29SaidaDescontoEntraICMSST",gxvar:"AV29SaidaDescontoEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV29SaidaDescontoEntraICMSST=Value},v2z:function(Value){gx.O.ZV29SaidaDescontoEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDADESCONTOENTRAICMSST",gx.O.AV29SaidaDescontoEntraICMSST,"S")},c2v:function(){gx.O.AV29SaidaDescontoEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vSAIDADESCONTOENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[101]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADESCONTOENTRAPIS",gxz:"ZV31SaidaDescontoEntraPIS",gxold:"OV31SaidaDescontoEntraPIS",gxvar:"AV31SaidaDescontoEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV31SaidaDescontoEntraPIS=Value},v2z:function(Value){gx.O.ZV31SaidaDescontoEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDADESCONTOENTRAPIS",gx.O.AV31SaidaDescontoEntraPIS,"S")},c2v:function(){gx.O.AV31SaidaDescontoEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDADESCONTOENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[103]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADESCONTOENTRACOFINS",gxz:"ZV32SaidaDescontoEntraCOFINS",gxold:"OV32SaidaDescontoEntraCOFINS",gxvar:"AV32SaidaDescontoEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV32SaidaDescontoEntraCOFINS=Value},v2z:function(Value){gx.O.ZV32SaidaDescontoEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDADESCONTOENTRACOFINS",gx.O.AV32SaidaDescontoEntraCOFINS,"S")},c2v:function(){gx.O.AV32SaidaDescontoEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDADESCONTOENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[105]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADESCONTOENTRAIPI",gxz:"ZV30SaidaDescontoEntraIPI",gxold:"OV30SaidaDescontoEntraIPI",gxvar:"AV30SaidaDescontoEntraIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV30SaidaDescontoEntraIPI=Value},v2z:function(Value){gx.O.ZV30SaidaDescontoEntraIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDADESCONTOENTRAIPI",gx.O.AV30SaidaDescontoEntraIPI,"S")},c2v:function(){gx.O.AV30SaidaDescontoEntraIPI=this.val()},val:function(){return gx.fn.getControlValue("vSAIDADESCONTOENTRAIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[107]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidatipolancdescontoid,isvalid:null,rgrid:[],fld:"vSAIDATIPOLANCDESCONTOID",gxz:"ZV33SaidaTipoLancDescontoId",gxold:"OV33SaidaTipoLancDescontoId",gxvar:"AV33SaidaTipoLancDescontoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33SaidaTipoLancDescontoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33SaidaTipoLancDescontoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDATIPOLANCDESCONTOID",gx.O.AV33SaidaTipoLancDescontoId,0)},c2v:function(){gx.O.AV33SaidaTipoLancDescontoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDATIPOLANCDESCONTOID",'.')},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFRETEENTRATOTAL",gxz:"ZV34SaidaFreteEntraTotal",gxold:"OV34SaidaFreteEntraTotal",gxvar:"AV34SaidaFreteEntraTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV34SaidaFreteEntraTotal=Value},v2z:function(Value){gx.O.ZV34SaidaFreteEntraTotal=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAFRETEENTRATOTAL",gx.O.AV34SaidaFreteEntraTotal,"S")},c2v:function(){gx.O.AV34SaidaFreteEntraTotal=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAFRETEENTRATOTAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[123]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFRETEENTRAICMS",gxz:"ZV35SaidaFreteEntraICMS",gxold:"OV35SaidaFreteEntraICMS",gxvar:"AV35SaidaFreteEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV35SaidaFreteEntraICMS=Value},v2z:function(Value){gx.O.ZV35SaidaFreteEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAFRETEENTRAICMS",gx.O.AV35SaidaFreteEntraICMS,"S")},c2v:function(){gx.O.AV35SaidaFreteEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAFRETEENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[125]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFRETEENTRAICMSST",gxz:"ZV36SaidaFreteEntraICMSST",gxold:"OV36SaidaFreteEntraICMSST",gxvar:"AV36SaidaFreteEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV36SaidaFreteEntraICMSST=Value},v2z:function(Value){gx.O.ZV36SaidaFreteEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAFRETEENTRAICMSST",gx.O.AV36SaidaFreteEntraICMSST,"S")},c2v:function(){gx.O.AV36SaidaFreteEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAFRETEENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[127]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFRETEENTRAPIS",gxz:"ZV38SaidaFreteEntraPIS",gxold:"OV38SaidaFreteEntraPIS",gxvar:"AV38SaidaFreteEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV38SaidaFreteEntraPIS=Value},v2z:function(Value){gx.O.ZV38SaidaFreteEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAFRETEENTRAPIS",gx.O.AV38SaidaFreteEntraPIS,"S")},c2v:function(){gx.O.AV38SaidaFreteEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAFRETEENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[129]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFRETEENTRACOFINS",gxz:"ZV39SaidaFreteEntraCOFINS",gxold:"OV39SaidaFreteEntraCOFINS",gxvar:"AV39SaidaFreteEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV39SaidaFreteEntraCOFINS=Value},v2z:function(Value){gx.O.ZV39SaidaFreteEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAFRETEENTRACOFINS",gx.O.AV39SaidaFreteEntraCOFINS,"S")},c2v:function(){gx.O.AV39SaidaFreteEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAFRETEENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[131]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFRETEENTRAIPI",gxz:"ZV37SaidaFreteEntraIPI",gxold:"OV37SaidaFreteEntraIPI",gxvar:"AV37SaidaFreteEntraIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV37SaidaFreteEntraIPI=Value},v2z:function(Value){gx.O.ZV37SaidaFreteEntraIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAFRETEENTRAIPI",gx.O.AV37SaidaFreteEntraIPI,"S")},c2v:function(){gx.O.AV37SaidaFreteEntraIPI=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAFRETEENTRAIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[133]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidatipolancfreteid,isvalid:null,rgrid:[],fld:"vSAIDATIPOLANCFRETEID",gxz:"ZV43SaidaTipoLancFreteId",gxold:"OV43SaidaTipoLancFreteId",gxvar:"AV43SaidaTipoLancFreteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43SaidaTipoLancFreteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43SaidaTipoLancFreteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDATIPOLANCFRETEID",gx.O.AV43SaidaTipoLancFreteId,0)},c2v:function(){gx.O.AV43SaidaTipoLancFreteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDATIPOLANCFRETEID",'.')},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[148]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASEGUROENTRAICMS",gxz:"ZV57SaidaSeguroEntraICMS",gxold:"OV57SaidaSeguroEntraICMS",gxvar:"AV57SaidaSeguroEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV57SaidaSeguroEntraICMS=Value},v2z:function(Value){gx.O.ZV57SaidaSeguroEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDASEGUROENTRAICMS",gx.O.AV57SaidaSeguroEntraICMS,"S")},c2v:function(){gx.O.AV57SaidaSeguroEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASEGUROENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[150]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASEGUROENTRAICMSST",gxz:"ZV58SaidaSeguroEntraICMSST",gxold:"OV58SaidaSeguroEntraICMSST",gxvar:"AV58SaidaSeguroEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV58SaidaSeguroEntraICMSST=Value},v2z:function(Value){gx.O.ZV58SaidaSeguroEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDASEGUROENTRAICMSST",gx.O.AV58SaidaSeguroEntraICMSST,"S")},c2v:function(){gx.O.AV58SaidaSeguroEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASEGUROENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[152]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASEGUROENTRAPIS",gxz:"ZV60SaidaSeguroEntraPIS",gxold:"OV60SaidaSeguroEntraPIS",gxvar:"AV60SaidaSeguroEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV60SaidaSeguroEntraPIS=Value},v2z:function(Value){gx.O.ZV60SaidaSeguroEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDASEGUROENTRAPIS",gx.O.AV60SaidaSeguroEntraPIS,"S")},c2v:function(){gx.O.AV60SaidaSeguroEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASEGUROENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[154]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASEGUROENTRACOFINS",gxz:"ZV61SaidaSeguroEntraCOFINS",gxold:"OV61SaidaSeguroEntraCOFINS",gxvar:"AV61SaidaSeguroEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV61SaidaSeguroEntraCOFINS=Value},v2z:function(Value){gx.O.ZV61SaidaSeguroEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDASEGUROENTRACOFINS",gx.O.AV61SaidaSeguroEntraCOFINS,"S")},c2v:function(){gx.O.AV61SaidaSeguroEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASEGUROENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[156]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASEGUROENTRAIPI",gxz:"ZV59SaidaSeguroEntraIPI",gxold:"OV59SaidaSeguroEntraIPI",gxvar:"AV59SaidaSeguroEntraIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV59SaidaSeguroEntraIPI=Value},v2z:function(Value){gx.O.ZV59SaidaSeguroEntraIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDASEGUROENTRAIPI",gx.O.AV59SaidaSeguroEntraIPI,"S")},c2v:function(){gx.O.AV59SaidaSeguroEntraIPI=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASEGUROENTRAIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[158]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDATIPOLANCSEGUROID",gxz:"ZV46SaidaTipoLancSeguroId",gxold:"OV46SaidaTipoLancSeguroId",gxvar:"AV46SaidaTipoLancSeguroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46SaidaTipoLancSeguroId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46SaidaTipoLancSeguroId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDATIPOLANCSEGUROID",gx.O.AV46SaidaTipoLancSeguroId,0)},c2v:function(){gx.O.AV46SaidaTipoLancSeguroId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDATIPOLANCSEGUROID",'.')},nac:gx.falseFn};
   GXValidFnc[170]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[173]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAOUTDESPENTRAICMS",gxz:"ZV62SaidaOutDespEntraICMS",gxold:"OV62SaidaOutDespEntraICMS",gxvar:"AV62SaidaOutDespEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV62SaidaOutDespEntraICMS=Value},v2z:function(Value){gx.O.ZV62SaidaOutDespEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAOUTDESPENTRAICMS",gx.O.AV62SaidaOutDespEntraICMS,"S")},c2v:function(){gx.O.AV62SaidaOutDespEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAOUTDESPENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[175]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAOUTDESPENTRAICMSST",gxz:"ZV63SaidaOutDespEntraICMSST",gxold:"OV63SaidaOutDespEntraICMSST",gxvar:"AV63SaidaOutDespEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV63SaidaOutDespEntraICMSST=Value},v2z:function(Value){gx.O.ZV63SaidaOutDespEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAOUTDESPENTRAICMSST",gx.O.AV63SaidaOutDespEntraICMSST,"S")},c2v:function(){gx.O.AV63SaidaOutDespEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAOUTDESPENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[177]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAOUTDESPENTRAPIS",gxz:"ZV65SaidaOutDespEntraPIS",gxold:"OV65SaidaOutDespEntraPIS",gxvar:"AV65SaidaOutDespEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV65SaidaOutDespEntraPIS=Value},v2z:function(Value){gx.O.ZV65SaidaOutDespEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAOUTDESPENTRAPIS",gx.O.AV65SaidaOutDespEntraPIS,"S")},c2v:function(){gx.O.AV65SaidaOutDespEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAOUTDESPENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[179]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAOUTDESPENTRACOFINS",gxz:"ZV66SaidaOutDespEntraCOFINS",gxold:"OV66SaidaOutDespEntraCOFINS",gxvar:"AV66SaidaOutDespEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV66SaidaOutDespEntraCOFINS=Value},v2z:function(Value){gx.O.ZV66SaidaOutDespEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAOUTDESPENTRACOFINS",gx.O.AV66SaidaOutDespEntraCOFINS,"S")},c2v:function(){gx.O.AV66SaidaOutDespEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAOUTDESPENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[181]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAOUTDESPENTRAIPI",gxz:"ZV64SaidaOutDespEntraIPI",gxold:"OV64SaidaOutDespEntraIPI",gxvar:"AV64SaidaOutDespEntraIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV64SaidaOutDespEntraIPI=Value},v2z:function(Value){gx.O.ZV64SaidaOutDespEntraIPI=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAOUTDESPENTRAIPI",gx.O.AV64SaidaOutDespEntraIPI,"S")},c2v:function(){gx.O.AV64SaidaOutDespEntraIPI=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAOUTDESPENTRAIPI")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[183]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidatipolancoutdespid,isvalid:null,rgrid:[],fld:"vSAIDATIPOLANCOUTDESPID",gxz:"ZV49SaidaTipoLancOutDespId",gxold:"OV49SaidaTipoLancOutDespId",gxvar:"AV49SaidaTipoLancOutDespId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49SaidaTipoLancOutDespId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49SaidaTipoLancOutDespId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDATIPOLANCOUTDESPID",gx.O.AV49SaidaTipoLancOutDespId,0)},c2v:function(){gx.O.AV49SaidaTipoLancOutDespId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDATIPOLANCOUTDESPID",'.')},nac:gx.falseFn};
   GXValidFnc[195]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[198]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAIPIENTRAICMS",gxz:"ZV67SaidaIPIEntraICMS",gxold:"OV67SaidaIPIEntraICMS",gxvar:"AV67SaidaIPIEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV67SaidaIPIEntraICMS=Value},v2z:function(Value){gx.O.ZV67SaidaIPIEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAIPIENTRAICMS",gx.O.AV67SaidaIPIEntraICMS,"S")},c2v:function(){gx.O.AV67SaidaIPIEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAIPIENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[200]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAIPIENTRAICMSST",gxz:"ZV68SaidaIPIEntraICMSST",gxold:"OV68SaidaIPIEntraICMSST",gxvar:"AV68SaidaIPIEntraICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV68SaidaIPIEntraICMSST=Value},v2z:function(Value){gx.O.ZV68SaidaIPIEntraICMSST=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAIPIENTRAICMSST",gx.O.AV68SaidaIPIEntraICMSST,"S")},c2v:function(){gx.O.AV68SaidaIPIEntraICMSST=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAIPIENTRAICMSST")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[202]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAIPIENTRAPIS",gxz:"ZV69SaidaIPIEntraPIS",gxold:"OV69SaidaIPIEntraPIS",gxvar:"AV69SaidaIPIEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV69SaidaIPIEntraPIS=Value},v2z:function(Value){gx.O.ZV69SaidaIPIEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAIPIENTRAPIS",gx.O.AV69SaidaIPIEntraPIS,"S")},c2v:function(){gx.O.AV69SaidaIPIEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAIPIENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[204]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAIPIENTRACOFINS",gxz:"ZV70SaidaIPIEntraCOFINS",gxold:"OV70SaidaIPIEntraCOFINS",gxvar:"AV70SaidaIPIEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV70SaidaIPIEntraCOFINS=Value},v2z:function(Value){gx.O.ZV70SaidaIPIEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAIPIENTRACOFINS",gx.O.AV70SaidaIPIEntraCOFINS,"S")},c2v:function(){gx.O.AV70SaidaIPIEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAIPIENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[207]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidatipolancipiid,isvalid:null,rgrid:[],fld:"vSAIDATIPOLANCIPIID",gxz:"ZV52SaidaTipoLancIPIId",gxold:"OV52SaidaTipoLancIPIId",gxvar:"AV52SaidaTipoLancIPIId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52SaidaTipoLancIPIId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52SaidaTipoLancIPIId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDATIPOLANCIPIID",gx.O.AV52SaidaTipoLancIPIId,0)},c2v:function(){gx.O.AV52SaidaTipoLancIPIId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDATIPOLANCIPIID",'.')},nac:gx.falseFn};
   GXValidFnc[219]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[222]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAICMSSTENTRAICMS",gxz:"ZV71SaidaICMSSTEntraICMS",gxold:"OV71SaidaICMSSTEntraICMS",gxvar:"AV71SaidaICMSSTEntraICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV71SaidaICMSSTEntraICMS=Value},v2z:function(Value){gx.O.ZV71SaidaICMSSTEntraICMS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAICMSSTENTRAICMS",gx.O.AV71SaidaICMSSTEntraICMS,"S")},c2v:function(){gx.O.AV71SaidaICMSSTEntraICMS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAICMSSTENTRAICMS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[225]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAICMSSTENTRAPIS",gxz:"ZV72SaidaICMSSTEntraPIS",gxold:"OV72SaidaICMSSTEntraPIS",gxvar:"AV72SaidaICMSSTEntraPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV72SaidaICMSSTEntraPIS=Value},v2z:function(Value){gx.O.ZV72SaidaICMSSTEntraPIS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAICMSSTENTRAPIS",gx.O.AV72SaidaICMSSTEntraPIS,"S")},c2v:function(){gx.O.AV72SaidaICMSSTEntraPIS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAICMSSTENTRAPIS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[227]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAICMSSTENTRACOFINS",gxz:"ZV73SaidaICMSSTEntraCOFINS",gxold:"OV73SaidaICMSSTEntraCOFINS",gxvar:"AV73SaidaICMSSTEntraCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV73SaidaICMSSTEntraCOFINS=Value},v2z:function(Value){gx.O.ZV73SaidaICMSSTEntraCOFINS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSAIDAICMSSTENTRACOFINS",gx.O.AV73SaidaICMSSTEntraCOFINS,"S")},c2v:function(){gx.O.AV73SaidaICMSSTEntraCOFINS=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAICMSSTENTRACOFINS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[230]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidatipolancicmsstid,isvalid:null,rgrid:[],fld:"vSAIDATIPOLANCICMSSTID",gxz:"ZV55SaidaTipoLancICMSSTId",gxold:"OV55SaidaTipoLancICMSSTId",gxvar:"AV55SaidaTipoLancICMSSTId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55SaidaTipoLancICMSSTId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55SaidaTipoLancICMSSTId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDATIPOLANCICMSSTID",gx.O.AV55SaidaTipoLancICMSSTId,0)},c2v:function(){gx.O.AV55SaidaTipoLancICMSSTId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDATIPOLANCICMSSTID",'.')},nac:gx.falseFn};
   GXValidFnc[233]={fld:"TABLE6",grid:0};
   GXValidFnc[236]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[238]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPDATARECADCLI",gxz:"ZV75TpDataRecadCli",gxold:"OV75TpDataRecadCli",gxvar:"AV75TpDataRecadCli",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV75TpDataRecadCli=Value},v2z:function(Value){gx.O.ZV75TpDataRecadCli=Value},v2c:function(){gx.fn.setComboBoxValue("vTPDATARECADCLI",gx.O.AV75TpDataRecadCli)},c2v:function(){gx.O.AV75TpDataRecadCli=this.val()},val:function(){return gx.fn.getControlValue("vTPDATARECADCLI")},nac:gx.falseFn};
   GXValidFnc[241]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[243]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPORDEMPARSAI",gxz:"ZV76TpOrdemParSai",gxold:"OV76TpOrdemParSai",gxvar:"AV76TpOrdemParSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV76TpOrdemParSai=Value},v2z:function(Value){gx.O.ZV76TpOrdemParSai=Value},v2c:function(){gx.fn.setComboBoxValue("vTPORDEMPARSAI",gx.O.AV76TpOrdemParSai)},c2v:function(){gx.O.AV76TpOrdemParSai=this.val()},val:function(){return gx.fn.getControlValue("vTPORDEMPARSAI")},nac:gx.falseFn};
   GXValidFnc[246]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[248]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precopadsaidaaux,isvalid:null,rgrid:[],fld:"vPRECOPADSAIDAAUX",gxz:"ZV90PrecoPadSaidaAux",gxold:"OV90PrecoPadSaidaAux",gxvar:"AV90PrecoPadSaidaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90PrecoPadSaidaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV90PrecoPadSaidaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOPADSAIDAAUX",gx.O.AV90PrecoPadSaidaAux,0)},c2v:function(){gx.O.AV90PrecoPadSaidaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOPADSAIDAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[251]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[253]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precominimoaux,isvalid:null,rgrid:[],fld:"vPRECOMINIMOAUX",gxz:"ZV89PrecoMinimoAux",gxold:"OV89PrecoMinimoAux",gxvar:"AV89PrecoMinimoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89PrecoMinimoAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV89PrecoMinimoAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOMINIMOAUX",gx.O.AV89PrecoMinimoAux,0)},c2v:function(){gx.O.AV89PrecoMinimoAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOMINIMOAUX",'.')},nac:gx.falseFn};
   GXValidFnc[256]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[258]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPIDENTPRODNOT",gxz:"ZV81TpIdentProdNot",gxold:"OV81TpIdentProdNot",gxvar:"AV81TpIdentProdNot",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV81TpIdentProdNot=Value},v2z:function(Value){gx.O.ZV81TpIdentProdNot=Value},v2c:function(){gx.fn.setComboBoxValue("vTPIDENTPRODNOT",gx.O.AV81TpIdentProdNot)},c2v:function(){gx.O.AV81TpIdentProdNot=this.val()},val:function(){return gx.fn.getControlValue("vTPIDENTPRODNOT")},nac:gx.falseFn};
   GXValidFnc[261]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[263]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ajusteicmsfrete,isvalid:null,rgrid:[],fld:"vAJUSTEICMSFRETE",gxz:"ZV84AjusteICMSFrete",gxold:"OV84AjusteICMSFrete",gxvar:"AV84AjusteICMSFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84AjusteICMSFrete=Value},v2z:function(Value){gx.O.ZV84AjusteICMSFrete=Value},v2c:function(){gx.fn.setControlValue("vAJUSTEICMSFRETE",gx.O.AV84AjusteICMSFrete,0)},c2v:function(){gx.O.AV84AjusteICMSFrete=this.val()},val:function(){return gx.fn.getControlValue("vAJUSTEICMSFRETE")},nac:gx.falseFn};
   GXValidFnc[266]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[268]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ajustenotafrete,isvalid:null,rgrid:[],fld:"vAJUSTENOTAFRETE",gxz:"ZV85AjusteNotaFrete",gxold:"OV85AjusteNotaFrete",gxvar:"AV85AjusteNotaFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85AjusteNotaFrete=Value},v2z:function(Value){gx.O.ZV85AjusteNotaFrete=Value},v2c:function(){gx.fn.setControlValue("vAJUSTENOTAFRETE",gx.O.AV85AjusteNotaFrete,0)},c2v:function(){gx.O.AV85AjusteNotaFrete=this.val()},val:function(){return gx.fn.getControlValue("vAJUSTENOTAFRETE")},nac:gx.falseFn};
   GXValidFnc[271]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[273]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELODANFE",gxz:"ZV82ModeloDanfe",gxold:"OV82ModeloDanfe",gxvar:"AV82ModeloDanfe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV82ModeloDanfe=Value},v2z:function(Value){gx.O.ZV82ModeloDanfe=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELODANFE",gx.O.AV82ModeloDanfe)},c2v:function(){gx.O.AV82ModeloDanfe=this.val()},val:function(){return gx.fn.getControlValue("vMODELODANFE")},nac:gx.falseFn};
   GXValidFnc[279]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNALTPREITENOT",gxz:"ZV86SNAltPreItenOt",gxold:"OV86SNAltPreItenOt",gxvar:"AV86SNAltPreItenOt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV86SNAltPreItenOt=Value},v2z:function(Value){gx.O.ZV86SNAltPreItenOt=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNALTPREITENOT",gx.O.AV86SNAltPreItenOt,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV86SNAltPreItenOt=this.val()},val:function(){return gx.fn.getControlValue("vSNALTPREITENOT")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 279 , function() {
   });
   GXValidFnc[282]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCONTASREGSAI",gxz:"ZV77SNContasRegSai",gxold:"OV77SNContasRegSai",gxvar:"AV77SNContasRegSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV77SNContasRegSai=Value},v2z:function(Value){gx.O.ZV77SNContasRegSai=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCONTASREGSAI",gx.O.AV77SNContasRegSai,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV77SNContasRegSai=this.val()},val:function(){return gx.fn.getControlValue("vSNCONTASREGSAI")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 282 , function() {
   });
   GXValidFnc[285]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNALTCAIBANSAI",gxz:"ZV78SNAltCaiBanSai",gxold:"OV78SNAltCaiBanSai",gxvar:"AV78SNAltCaiBanSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV78SNAltCaiBanSai=Value},v2z:function(Value){gx.O.ZV78SNAltCaiBanSai=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNALTCAIBANSAI",gx.O.AV78SNAltCaiBanSai,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV78SNAltCaiBanSai=this.val()},val:function(){return gx.fn.getControlValue("vSNALTCAIBANSAI")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 285 , function() {
   });
   GXValidFnc[289]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUTILIZAGRADESAI",gxz:"ZV83UtilizaGradeSai",gxold:"OV83UtilizaGradeSai",gxvar:"AV83UtilizaGradeSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV83UtilizaGradeSai=Value},v2z:function(Value){gx.O.ZV83UtilizaGradeSai=Value},v2c:function(){gx.fn.setCheckBoxValue("vUTILIZAGRADESAI",gx.O.AV83UtilizaGradeSai,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV83UtilizaGradeSai=this.val()},val:function(){return gx.fn.getControlValue("vUTILIZAGRADESAI")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 289 , function() {
   });
   GXValidFnc[300]={fld:"PROMPT_SAIDATIPOLANCDESCONTOID",grid:0};
   GXValidFnc[301]={fld:"PROMPT_SAIDATIPOLANCFRETEID",grid:0};
   GXValidFnc[302]={fld:"PROMPT_SAIDATIPOLANCSEGUROID",grid:0};
   GXValidFnc[303]={fld:"PROMPT_SAIDATIPOLANCOUTDESPID",grid:0};
   GXValidFnc[304]={fld:"PROMPT_SAIDATIPOLANCIPIID",grid:0};
   GXValidFnc[305]={fld:"PROMPT_SAIDATIPOLANCICMSSTID",grid:0};
   GXValidFnc[306]={fld:"PROMPT_PRECOPADSAIDAAUX",grid:0};
   GXValidFnc[307]={fld:"PROMPT_PRECOMINIMOAUX",grid:0};
   GXValidFnc[308]={fld:"PROMPT_AJUSTEICMSFRETE",grid:0};
   GXValidFnc[309]={fld:"PROMPT_AJUSTENOTAFRETE",grid:0};
   this.AV20SaidaSnAlteraSaldo = "" ;
   this.ZV20SaidaSnAlteraSaldo = "" ;
   this.OV20SaidaSnAlteraSaldo = "" ;
   this.AV21SaidaSnCalcDifICMSST = "" ;
   this.ZV21SaidaSnCalcDifICMSST = "" ;
   this.OV21SaidaSnCalcDifICMSST = "" ;
   this.AV23SaidaVlrProdutoEntraICMS = "" ;
   this.ZV23SaidaVlrProdutoEntraICMS = "" ;
   this.OV23SaidaVlrProdutoEntraICMS = "" ;
   this.AV24SaidaVlrProdutoEntraICMSST = "" ;
   this.ZV24SaidaVlrProdutoEntraICMSST = "" ;
   this.OV24SaidaVlrProdutoEntraICMSST = "" ;
   this.AV26SaidaVlrProdutoEntraPIS = "" ;
   this.ZV26SaidaVlrProdutoEntraPIS = "" ;
   this.OV26SaidaVlrProdutoEntraPIS = "" ;
   this.AV27SaidaVlrProdutoEntraCOFINS = "" ;
   this.ZV27SaidaVlrProdutoEntraCOFINS = "" ;
   this.OV27SaidaVlrProdutoEntraCOFINS = "" ;
   this.AV25SaidaVlrProdutoEntraIPI = "" ;
   this.ZV25SaidaVlrProdutoEntraIPI = "" ;
   this.OV25SaidaVlrProdutoEntraIPI = "" ;
   this.AV28SaidaDescontoEntraICMS = "" ;
   this.ZV28SaidaDescontoEntraICMS = "" ;
   this.OV28SaidaDescontoEntraICMS = "" ;
   this.AV29SaidaDescontoEntraICMSST = "" ;
   this.ZV29SaidaDescontoEntraICMSST = "" ;
   this.OV29SaidaDescontoEntraICMSST = "" ;
   this.AV31SaidaDescontoEntraPIS = "" ;
   this.ZV31SaidaDescontoEntraPIS = "" ;
   this.OV31SaidaDescontoEntraPIS = "" ;
   this.AV32SaidaDescontoEntraCOFINS = "" ;
   this.ZV32SaidaDescontoEntraCOFINS = "" ;
   this.OV32SaidaDescontoEntraCOFINS = "" ;
   this.AV30SaidaDescontoEntraIPI = "" ;
   this.ZV30SaidaDescontoEntraIPI = "" ;
   this.OV30SaidaDescontoEntraIPI = "" ;
   this.AV33SaidaTipoLancDescontoId = 0 ;
   this.ZV33SaidaTipoLancDescontoId = 0 ;
   this.OV33SaidaTipoLancDescontoId = 0 ;
   this.AV34SaidaFreteEntraTotal = "" ;
   this.ZV34SaidaFreteEntraTotal = "" ;
   this.OV34SaidaFreteEntraTotal = "" ;
   this.AV35SaidaFreteEntraICMS = "" ;
   this.ZV35SaidaFreteEntraICMS = "" ;
   this.OV35SaidaFreteEntraICMS = "" ;
   this.AV36SaidaFreteEntraICMSST = "" ;
   this.ZV36SaidaFreteEntraICMSST = "" ;
   this.OV36SaidaFreteEntraICMSST = "" ;
   this.AV38SaidaFreteEntraPIS = "" ;
   this.ZV38SaidaFreteEntraPIS = "" ;
   this.OV38SaidaFreteEntraPIS = "" ;
   this.AV39SaidaFreteEntraCOFINS = "" ;
   this.ZV39SaidaFreteEntraCOFINS = "" ;
   this.OV39SaidaFreteEntraCOFINS = "" ;
   this.AV37SaidaFreteEntraIPI = "" ;
   this.ZV37SaidaFreteEntraIPI = "" ;
   this.OV37SaidaFreteEntraIPI = "" ;
   this.AV43SaidaTipoLancFreteId = 0 ;
   this.ZV43SaidaTipoLancFreteId = 0 ;
   this.OV43SaidaTipoLancFreteId = 0 ;
   this.AV57SaidaSeguroEntraICMS = "" ;
   this.ZV57SaidaSeguroEntraICMS = "" ;
   this.OV57SaidaSeguroEntraICMS = "" ;
   this.AV58SaidaSeguroEntraICMSST = "" ;
   this.ZV58SaidaSeguroEntraICMSST = "" ;
   this.OV58SaidaSeguroEntraICMSST = "" ;
   this.AV60SaidaSeguroEntraPIS = "" ;
   this.ZV60SaidaSeguroEntraPIS = "" ;
   this.OV60SaidaSeguroEntraPIS = "" ;
   this.AV61SaidaSeguroEntraCOFINS = "" ;
   this.ZV61SaidaSeguroEntraCOFINS = "" ;
   this.OV61SaidaSeguroEntraCOFINS = "" ;
   this.AV59SaidaSeguroEntraIPI = "" ;
   this.ZV59SaidaSeguroEntraIPI = "" ;
   this.OV59SaidaSeguroEntraIPI = "" ;
   this.AV46SaidaTipoLancSeguroId = 0 ;
   this.ZV46SaidaTipoLancSeguroId = 0 ;
   this.OV46SaidaTipoLancSeguroId = 0 ;
   this.AV62SaidaOutDespEntraICMS = "" ;
   this.ZV62SaidaOutDespEntraICMS = "" ;
   this.OV62SaidaOutDespEntraICMS = "" ;
   this.AV63SaidaOutDespEntraICMSST = "" ;
   this.ZV63SaidaOutDespEntraICMSST = "" ;
   this.OV63SaidaOutDespEntraICMSST = "" ;
   this.AV65SaidaOutDespEntraPIS = "" ;
   this.ZV65SaidaOutDespEntraPIS = "" ;
   this.OV65SaidaOutDespEntraPIS = "" ;
   this.AV66SaidaOutDespEntraCOFINS = "" ;
   this.ZV66SaidaOutDespEntraCOFINS = "" ;
   this.OV66SaidaOutDespEntraCOFINS = "" ;
   this.AV64SaidaOutDespEntraIPI = "" ;
   this.ZV64SaidaOutDespEntraIPI = "" ;
   this.OV64SaidaOutDespEntraIPI = "" ;
   this.AV49SaidaTipoLancOutDespId = 0 ;
   this.ZV49SaidaTipoLancOutDespId = 0 ;
   this.OV49SaidaTipoLancOutDespId = 0 ;
   this.AV67SaidaIPIEntraICMS = "" ;
   this.ZV67SaidaIPIEntraICMS = "" ;
   this.OV67SaidaIPIEntraICMS = "" ;
   this.AV68SaidaIPIEntraICMSST = "" ;
   this.ZV68SaidaIPIEntraICMSST = "" ;
   this.OV68SaidaIPIEntraICMSST = "" ;
   this.AV69SaidaIPIEntraPIS = "" ;
   this.ZV69SaidaIPIEntraPIS = "" ;
   this.OV69SaidaIPIEntraPIS = "" ;
   this.AV70SaidaIPIEntraCOFINS = "" ;
   this.ZV70SaidaIPIEntraCOFINS = "" ;
   this.OV70SaidaIPIEntraCOFINS = "" ;
   this.AV52SaidaTipoLancIPIId = 0 ;
   this.ZV52SaidaTipoLancIPIId = 0 ;
   this.OV52SaidaTipoLancIPIId = 0 ;
   this.AV71SaidaICMSSTEntraICMS = "" ;
   this.ZV71SaidaICMSSTEntraICMS = "" ;
   this.OV71SaidaICMSSTEntraICMS = "" ;
   this.AV72SaidaICMSSTEntraPIS = "" ;
   this.ZV72SaidaICMSSTEntraPIS = "" ;
   this.OV72SaidaICMSSTEntraPIS = "" ;
   this.AV73SaidaICMSSTEntraCOFINS = "" ;
   this.ZV73SaidaICMSSTEntraCOFINS = "" ;
   this.OV73SaidaICMSSTEntraCOFINS = "" ;
   this.AV55SaidaTipoLancICMSSTId = 0 ;
   this.ZV55SaidaTipoLancICMSSTId = 0 ;
   this.OV55SaidaTipoLancICMSSTId = 0 ;
   this.AV75TpDataRecadCli = "" ;
   this.ZV75TpDataRecadCli = "" ;
   this.OV75TpDataRecadCli = "" ;
   this.AV76TpOrdemParSai = "" ;
   this.ZV76TpOrdemParSai = "" ;
   this.OV76TpOrdemParSai = "" ;
   this.AV90PrecoPadSaidaAux = 0 ;
   this.ZV90PrecoPadSaidaAux = 0 ;
   this.OV90PrecoPadSaidaAux = 0 ;
   this.AV89PrecoMinimoAux = 0 ;
   this.ZV89PrecoMinimoAux = 0 ;
   this.OV89PrecoMinimoAux = 0 ;
   this.AV81TpIdentProdNot = "" ;
   this.ZV81TpIdentProdNot = "" ;
   this.OV81TpIdentProdNot = "" ;
   this.AV84AjusteICMSFrete = "" ;
   this.ZV84AjusteICMSFrete = "" ;
   this.OV84AjusteICMSFrete = "" ;
   this.AV85AjusteNotaFrete = "" ;
   this.ZV85AjusteNotaFrete = "" ;
   this.OV85AjusteNotaFrete = "" ;
   this.AV82ModeloDanfe = "" ;
   this.ZV82ModeloDanfe = "" ;
   this.OV82ModeloDanfe = "" ;
   this.AV86SNAltPreItenOt = "" ;
   this.ZV86SNAltPreItenOt = "" ;
   this.OV86SNAltPreItenOt = "" ;
   this.AV77SNContasRegSai = "" ;
   this.ZV77SNContasRegSai = "" ;
   this.OV77SNContasRegSai = "" ;
   this.AV78SNAltCaiBanSai = "" ;
   this.ZV78SNAltCaiBanSai = "" ;
   this.OV78SNAltCaiBanSai = "" ;
   this.AV83UtilizaGradeSai = "" ;
   this.ZV83UtilizaGradeSai = "" ;
   this.OV83UtilizaGradeSai = "" ;
   this.AV20SaidaSnAlteraSaldo = "" ;
   this.AV21SaidaSnCalcDifICMSST = "" ;
   this.AV23SaidaVlrProdutoEntraICMS = "" ;
   this.AV24SaidaVlrProdutoEntraICMSST = "" ;
   this.AV26SaidaVlrProdutoEntraPIS = "" ;
   this.AV27SaidaVlrProdutoEntraCOFINS = "" ;
   this.AV25SaidaVlrProdutoEntraIPI = "" ;
   this.AV28SaidaDescontoEntraICMS = "" ;
   this.AV29SaidaDescontoEntraICMSST = "" ;
   this.AV31SaidaDescontoEntraPIS = "" ;
   this.AV32SaidaDescontoEntraCOFINS = "" ;
   this.AV30SaidaDescontoEntraIPI = "" ;
   this.AV33SaidaTipoLancDescontoId = 0 ;
   this.AV34SaidaFreteEntraTotal = "" ;
   this.AV35SaidaFreteEntraICMS = "" ;
   this.AV36SaidaFreteEntraICMSST = "" ;
   this.AV38SaidaFreteEntraPIS = "" ;
   this.AV39SaidaFreteEntraCOFINS = "" ;
   this.AV37SaidaFreteEntraIPI = "" ;
   this.AV43SaidaTipoLancFreteId = 0 ;
   this.AV57SaidaSeguroEntraICMS = "" ;
   this.AV58SaidaSeguroEntraICMSST = "" ;
   this.AV60SaidaSeguroEntraPIS = "" ;
   this.AV61SaidaSeguroEntraCOFINS = "" ;
   this.AV59SaidaSeguroEntraIPI = "" ;
   this.AV46SaidaTipoLancSeguroId = 0 ;
   this.AV62SaidaOutDespEntraICMS = "" ;
   this.AV63SaidaOutDespEntraICMSST = "" ;
   this.AV65SaidaOutDespEntraPIS = "" ;
   this.AV66SaidaOutDespEntraCOFINS = "" ;
   this.AV64SaidaOutDespEntraIPI = "" ;
   this.AV49SaidaTipoLancOutDespId = 0 ;
   this.AV67SaidaIPIEntraICMS = "" ;
   this.AV68SaidaIPIEntraICMSST = "" ;
   this.AV69SaidaIPIEntraPIS = "" ;
   this.AV70SaidaIPIEntraCOFINS = "" ;
   this.AV52SaidaTipoLancIPIId = 0 ;
   this.AV71SaidaICMSSTEntraICMS = "" ;
   this.AV72SaidaICMSSTEntraPIS = "" ;
   this.AV73SaidaICMSSTEntraCOFINS = "" ;
   this.AV55SaidaTipoLancICMSSTId = 0 ;
   this.AV75TpDataRecadCli = "" ;
   this.AV76TpOrdemParSai = "" ;
   this.AV90PrecoPadSaidaAux = 0 ;
   this.AV89PrecoMinimoAux = 0 ;
   this.AV81TpIdentProdNot = "" ;
   this.AV84AjusteICMSFrete = "" ;
   this.AV85AjusteNotaFrete = "" ;
   this.AV82ModeloDanfe = "" ;
   this.AV86SNAltPreItenOt = "" ;
   this.AV77SNContasRegSai = "" ;
   this.AV78SNAltCaiBanSai = "" ;
   this.AV83UtilizaGradeSai = "" ;
   this.AV91Modo = "" ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A5483AjusteFiscalCodigo = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.Events = {"e1212u2_client": ["ENTER", true] ,"e1312u2_client": ["'FECHAR'", true] ,"e1512u2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12SnErro',fld:'vSNERRO'},{av:'AV90PrecoPadSaidaAux',fld:'vPRECOPADSAIDAAUX'},{av:'AV89PrecoMinimoAux',fld:'vPRECOMINIMOAUX'},{av:'AV13EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV75TpDataRecadCli',fld:'vTPDATARECADCLI'},{av:'AV76TpOrdemParSai',fld:'vTPORDEMPARSAI'},{av:'AV77SNContasRegSai',fld:'vSNCONTASREGSAI'},{av:'AV78SNAltCaiBanSai',fld:'vSNALTCAIBANSAI'},{av:'AV81TpIdentProdNot',fld:'vTPIDENTPRODNOT'},{av:'AV82ModeloDanfe',fld:'vMODELODANFE'},{av:'AV83UtilizaGradeSai',fld:'vUTILIZAGRADESAI'},{av:'AV84AjusteICMSFrete',fld:'vAJUSTEICMSFRETE'},{av:'AV85AjusteNotaFrete',fld:'vAJUSTENOTAFRETE'},{av:'AV86SNAltPreItenOt',fld:'vSNALTPREITENOT'},{av:'AV33SaidaTipoLancDescontoId',fld:'vSAIDATIPOLANCDESCONTOID'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'AV43SaidaTipoLancFreteId',fld:'vSAIDATIPOLANCFRETEID'},{av:'AV49SaidaTipoLancOutDespId',fld:'vSAIDATIPOLANCOUTDESPID'},{av:'AV52SaidaTipoLancIPIId',fld:'vSAIDATIPOLANCIPIID'},{av:'AV55SaidaTipoLancICMSSTId',fld:'vSAIDATIPOLANCICMSSTID'},{av:'AV80PrecoPadSaida',fld:'vPRECOPADSAIDA'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A5483AjusteFiscalCodigo',fld:'AJUSTEFISCALCODIGO'},{av:'AV32SaidaDescontoEntraCOFINS',fld:'vSAIDADESCONTOENTRACOFINS'},{av:'AV28SaidaDescontoEntraICMS',fld:'vSAIDADESCONTOENTRAICMS'},{av:'AV29SaidaDescontoEntraICMSST',fld:'vSAIDADESCONTOENTRAICMSST'},{av:'AV30SaidaDescontoEntraIPI',fld:'vSAIDADESCONTOENTRAIPI'},{av:'AV31SaidaDescontoEntraPIS',fld:'vSAIDADESCONTOENTRAPIS'},{av:'AV39SaidaFreteEntraCOFINS',fld:'vSAIDAFRETEENTRACOFINS'},{av:'AV35SaidaFreteEntraICMS',fld:'vSAIDAFRETEENTRAICMS'},{av:'AV36SaidaFreteEntraICMSST',fld:'vSAIDAFRETEENTRAICMSST'},{av:'AV37SaidaFreteEntraIPI',fld:'vSAIDAFRETEENTRAIPI'},{av:'AV38SaidaFreteEntraPIS',fld:'vSAIDAFRETEENTRAPIS'},{av:'AV34SaidaFreteEntraTotal',fld:'vSAIDAFRETEENTRATOTAL'},{av:'AV73SaidaICMSSTEntraCOFINS',fld:'vSAIDAICMSSTENTRACOFINS'},{av:'AV71SaidaICMSSTEntraICMS',fld:'vSAIDAICMSSTENTRAICMS'},{av:'AV72SaidaICMSSTEntraPIS',fld:'vSAIDAICMSSTENTRAPIS'},{av:'AV70SaidaIPIEntraCOFINS',fld:'vSAIDAIPIENTRACOFINS'},{av:'AV67SaidaIPIEntraICMS',fld:'vSAIDAIPIENTRAICMS'},{av:'AV68SaidaIPIEntraICMSST',fld:'vSAIDAIPIENTRAICMSST'},{av:'AV69SaidaIPIEntraPIS',fld:'vSAIDAIPIENTRAPIS'},{av:'AV27SaidaVlrProdutoEntraCOFINS',fld:'vSAIDAVLRPRODUTOENTRACOFINS'},{av:'AV23SaidaVlrProdutoEntraICMS',fld:'vSAIDAVLRPRODUTOENTRAICMS'},{av:'AV24SaidaVlrProdutoEntraICMSST',fld:'vSAIDAVLRPRODUTOENTRAICMSST'},{av:'AV25SaidaVlrProdutoEntraIPI',fld:'vSAIDAVLRPRODUTOENTRAIPI'},{av:'AV26SaidaVlrProdutoEntraPIS',fld:'vSAIDAVLRPRODUTOENTRAPIS'},{av:'AV61SaidaSeguroEntraCOFINS',fld:'vSAIDASEGUROENTRACOFINS'},{av:'AV57SaidaSeguroEntraICMS',fld:'vSAIDASEGUROENTRAICMS'},{av:'AV58SaidaSeguroEntraICMSST',fld:'vSAIDASEGUROENTRAICMSST'},{av:'AV59SaidaSeguroEntraIPI',fld:'vSAIDASEGUROENTRAIPI'},{av:'AV60SaidaSeguroEntraPIS',fld:'vSAIDASEGUROENTRAPIS'},{av:'AV66SaidaOutDespEntraCOFINS',fld:'vSAIDAOUTDESPENTRACOFINS'},{av:'AV62SaidaOutDespEntraICMS',fld:'vSAIDAOUTDESPENTRAICMS'},{av:'AV63SaidaOutDespEntraICMSST',fld:'vSAIDAOUTDESPENTRAICMSST'},{av:'AV64SaidaOutDespEntraIPI',fld:'vSAIDAOUTDESPENTRAIPI'},{av:'AV65SaidaOutDespEntraPIS',fld:'vSAIDAOUTDESPENTRAPIS'},{av:'AV20SaidaSnAlteraSaldo',fld:'vSAIDASNALTERASALDO'},{av:'AV21SaidaSnCalcDifICMSST',fld:'vSAIDASNCALCDIFICMSST'},{av:'AV46SaidaTipoLancSeguroId',fld:'vSAIDATIPOLANCSEGUROID'},{av:'AV18SnOk',fld:'vSNOK'}],[{av:'AV80PrecoPadSaida',fld:'vPRECOPADSAIDA'},{av:'AV79PrecoMinimo',fld:'vPRECOMINIMO'},{av:'AV75TpDataRecadCli',fld:'vTPDATARECADCLI'},{av:'AV76TpOrdemParSai',fld:'vTPORDEMPARSAI'},{av:'AV77SNContasRegSai',fld:'vSNCONTASREGSAI'},{av:'AV78SNAltCaiBanSai',fld:'vSNALTCAIBANSAI'},{av:'AV81TpIdentProdNot',fld:'vTPIDENTPRODNOT'},{av:'AV82ModeloDanfe',fld:'vMODELODANFE'},{av:'AV83UtilizaGradeSai',fld:'vUTILIZAGRADESAI'},{av:'AV84AjusteICMSFrete',fld:'vAJUSTEICMSFRETE'},{av:'AV85AjusteNotaFrete',fld:'vAJUSTENOTAFRETE'},{av:'AV86SNAltPreItenOt',fld:'vSNALTPREITENOT'},{av:'AV18SnOk',fld:'vSNOK'},{av:'AV12SnErro',fld:'vSNERRO'},{av:'AV11TipoLancamentoEmpresaId',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'AV74TrnSaida',fld:'vTRNSAIDA'},{av:'AV97GXLvl298',fld:'vGXLVL298'},{av:'AV98GXLvl316',fld:'vGXLVL316'},{av:'AV99GXLvl335',fld:'vGXLVL335'},{av:'AV100GXLvl354',fld:'vGXLVL354'},{av:'AV101GXLvl373',fld:'vGXLVL373'},{av:'AV102GXLvl392',fld:'vGXLVL392'},{av:'AV103GXLvl407',fld:'vGXLVL407'},{av:'AV104GXLvl422',fld:'vGXLVL422'},{av:'AV105GXLvl436',fld:'vGXLVL436'},{av:'AV106GXLvl454',fld:'vGXLVL454'},{av:'AV92SaidaParametros',fld:'vSAIDAPARAMETROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18SnOk',fld:'vSNOK'}],[{av:'AV18SnOk',fld:'vSNOK'}]];
   this.setPrompt("PROMPT_SAIDATIPOLANCDESCONTOID", [107]);
   this.setPrompt("PROMPT_SAIDATIPOLANCFRETEID", [133]);
   this.setPrompt("PROMPT_SAIDATIPOLANCSEGUROID", [158]);
   this.setPrompt("PROMPT_SAIDATIPOLANCOUTDESPID", [183]);
   this.setPrompt("PROMPT_SAIDATIPOLANCIPIID", [207]);
   this.setPrompt("PROMPT_SAIDATIPOLANCICMSSTID", [230]);
   this.setPrompt("PROMPT_PRECOPADSAIDAAUX", [248]);
   this.setPrompt("PROMPT_PRECOMINIMOAUX", [253]);
   this.setPrompt("PROMPT_AJUSTEICMSFRETE", [263]);
   this.setPrompt("PROMPT_AJUSTENOTAFRETE", [268]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV91Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarsaidaparametros());
