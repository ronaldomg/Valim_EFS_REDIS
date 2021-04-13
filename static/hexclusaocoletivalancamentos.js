/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:26:38.95
*/
gx.evt.autoSkip = false;
gx.define('hexclusaocoletivalancamentos', false, function () {
   this.ServerClass =  "hexclusaocoletivalancamentos" ;
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
      this.AV20ContaPagRecPagRecAux=gx.fn.getControlValue("vCONTAPAGRECPAGRECAUX") ;
   };
   this.Validv_Lancamentoid01=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOID01");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lancamentoid02=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOID02");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lancamentoid03=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOID03");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lancamentoid04=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOID04");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lancamentoid05=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOID05");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lancamentoid06=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOID06");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lancamentoid07=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOID07");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lancamentoid08=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOID08");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lancamentoid09=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOID09");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lancamentoid10=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOID10");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11dz2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13dz2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16dz2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,25,28,33,35,38,40,42,44,47,49,50,51,52,53,55,59,60,61,62,63,65,68,71,73,76,78,80,82,84,87,89,91,94,96,99,101,103,105,107,110,111,112,114,116,117,118,121,123,126,128,130,132,134,137,139,142,144,146,148,150,153,155,158,160,162,164,166,169,171,173,176,178,181,183,185,187,189,192,193,194,196,198,199,200,203,205,208,210,212,214,216,221,223,226,228,230,239,240,242,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273];
   this.GXLastCtrlId =273;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={fld:"TABLE3",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOEXECUCAO",gxz:"ZV69TipoExecucao",gxold:"OV69TipoExecucao",gxvar:"AV69TipoExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV69TipoExecucao=Value},v2z:function(Value){gx.O.ZV69TipoExecucao=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOEXECUCAO",gx.O.AV69TipoExecucao)},c2v:function(){gx.O.AV69TipoExecucao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOEXECUCAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TABLE5",grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[35]={fld:"TABLERLANC",grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTALANCAMDATAINI",gxz:"ZV41ContaLancamDataIni",gxold:"OV41ContaLancamDataIni",gxvar:"AV41ContaLancamDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ContaLancamDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV41ContaLancamDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTALANCAMDATAINI",gx.O.AV41ContaLancamDataIni,0)},c2v:function(){gx.O.AV41ContaLancamDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTALANCAMDATAINI")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTALANCAMDATAFIM",gxz:"ZV42ContaLancamDataFim",gxold:"OV42ContaLancamDataFim",gxvar:"AV42ContaLancamDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ContaLancamDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV42ContaLancamDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTALANCAMDATAFIM",gx.O.AV42ContaLancamDataFim,0)},c2v:function(){gx.O.AV42ContaLancamDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTALANCAMDATAFIM")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRCLIFORNNORMAL",gxz:"ZV23ExcluirCliFornNormal",gxold:"OV23ExcluirCliFornNormal",gxvar:"AV23ExcluirCliFornNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23ExcluirCliFornNormal=Value},v2z:function(Value){gx.O.ZV23ExcluirCliFornNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRCLIFORNNORMAL",gx.O.AV23ExcluirCliFornNormal,"S")},c2v:function(){gx.O.AV23ExcluirCliFornNormal=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRCLIFORNNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[47]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lancamentoid01,isvalid:null,rgrid:[],fld:"vLANCAMENTOID01",gxz:"ZV59LancamentoId01",gxold:"OV59LancamentoId01",gxvar:"AV59LancamentoId01",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59LancamentoId01=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59LancamentoId01=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOID01",gx.O.AV59LancamentoId01,0)},c2v:function(){gx.O.AV59LancamentoId01=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOID01",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lancamentoid02,isvalid:null,rgrid:[],fld:"vLANCAMENTOID02",gxz:"ZV60LancamentoId02",gxold:"OV60LancamentoId02",gxvar:"AV60LancamentoId02",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60LancamentoId02=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60LancamentoId02=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOID02",gx.O.AV60LancamentoId02,0)},c2v:function(){gx.O.AV60LancamentoId02=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOID02",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lancamentoid03,isvalid:null,rgrid:[],fld:"vLANCAMENTOID03",gxz:"ZV61LancamentoId03",gxold:"OV61LancamentoId03",gxvar:"AV61LancamentoId03",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61LancamentoId03=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61LancamentoId03=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOID03",gx.O.AV61LancamentoId03,0)},c2v:function(){gx.O.AV61LancamentoId03=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOID03",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lancamentoid04,isvalid:null,rgrid:[],fld:"vLANCAMENTOID04",gxz:"ZV62LancamentoId04",gxold:"OV62LancamentoId04",gxvar:"AV62LancamentoId04",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62LancamentoId04=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62LancamentoId04=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOID04",gx.O.AV62LancamentoId04,0)},c2v:function(){gx.O.AV62LancamentoId04=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOID04",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lancamentoid05,isvalid:null,rgrid:[],fld:"vLANCAMENTOID05",gxz:"ZV63LancamentoId05",gxold:"OV63LancamentoId05",gxvar:"AV63LancamentoId05",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63LancamentoId05=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63LancamentoId05=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOID05",gx.O.AV63LancamentoId05,0)},c2v:function(){gx.O.AV63LancamentoId05=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOID05",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRCLIFORNCANCELADO",gxz:"ZV24ExcluirCliFornCancelado",gxold:"OV24ExcluirCliFornCancelado",gxvar:"AV24ExcluirCliFornCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24ExcluirCliFornCancelado=Value},v2z:function(Value){gx.O.ZV24ExcluirCliFornCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRCLIFORNCANCELADO",gx.O.AV24ExcluirCliFornCancelado,"S")},c2v:function(){gx.O.AV24ExcluirCliFornCancelado=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRCLIFORNCANCELADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lancamentoid06,isvalid:null,rgrid:[],fld:"vLANCAMENTOID06",gxz:"ZV64LancamentoId06",gxold:"OV64LancamentoId06",gxvar:"AV64LancamentoId06",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64LancamentoId06=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64LancamentoId06=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOID06",gx.O.AV64LancamentoId06,0)},c2v:function(){gx.O.AV64LancamentoId06=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOID06",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lancamentoid07,isvalid:null,rgrid:[],fld:"vLANCAMENTOID07",gxz:"ZV65LancamentoId07",gxold:"OV65LancamentoId07",gxvar:"AV65LancamentoId07",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65LancamentoId07=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65LancamentoId07=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOID07",gx.O.AV65LancamentoId07,0)},c2v:function(){gx.O.AV65LancamentoId07=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOID07",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lancamentoid08,isvalid:null,rgrid:[],fld:"vLANCAMENTOID08",gxz:"ZV66LancamentoId08",gxold:"OV66LancamentoId08",gxvar:"AV66LancamentoId08",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66LancamentoId08=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66LancamentoId08=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOID08",gx.O.AV66LancamentoId08,0)},c2v:function(){gx.O.AV66LancamentoId08=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOID08",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lancamentoid09,isvalid:null,rgrid:[],fld:"vLANCAMENTOID09",gxz:"ZV67LancamentoId09",gxold:"OV67LancamentoId09",gxvar:"AV67LancamentoId09",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67LancamentoId09=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67LancamentoId09=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOID09",gx.O.AV67LancamentoId09,0)},c2v:function(){gx.O.AV67LancamentoId09=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOID09",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Lancamentoid10,isvalid:null,rgrid:[],fld:"vLANCAMENTOID10",gxz:"ZV68LancamentoId10",gxold:"OV68LancamentoId10",gxvar:"AV68LancamentoId10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68LancamentoId10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68LancamentoId10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOID10",gx.O.AV68LancamentoId10,0)},c2v:function(){gx.O.AV68LancamentoId10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOID10",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRCLIFORNSUSPENSO",gxz:"ZV25ExcluirCliFornSuspenso",gxold:"OV25ExcluirCliFornSuspenso",gxvar:"AV25ExcluirCliFornSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25ExcluirCliFornSuspenso=Value},v2z:function(Value){gx.O.ZV25ExcluirCliFornSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRCLIFORNSUSPENSO",gx.O.AV25ExcluirCliFornSuspenso,"S")},c2v:function(){gx.O.AV25ExcluirCliFornSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRCLIFORNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[68]={fld:"TABLE4",grid:0};
   GXValidFnc[71]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[73]={fld:"TABLEREMISS",grid:0};
   GXValidFnc[76]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAOINI",gxz:"ZV26ContaPagRecDtEmissaoIni",gxold:"OV26ContaPagRecDtEmissaoIni",gxvar:"AV26ContaPagRecDtEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAOINI",gx.O.AV26ContaPagRecDtEmissaoIni,0)},c2v:function(){gx.O.AV26ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOINI")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAOFIM",gxz:"ZV27ContaPagRecDtEmissaoFim",gxold:"OV27ContaPagRecDtEmissaoFim",gxvar:"AV27ContaPagRecDtEmissaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAOFIM",gx.O.AV27ContaPagRecDtEmissaoFim,0)},c2v:function(){gx.O.AV27ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOFIM")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[84]={fld:"TABLERNCONTA",grid:0};
   GXValidFnc[87]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMEROINI",gxz:"ZV30ContaPagRecNumeroIni",gxold:"OV30ContaPagRecNumeroIni",gxvar:"AV30ContaPagRecNumeroIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ContaPagRecNumeroIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ContaPagRecNumeroIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMEROINI",gx.O.AV30ContaPagRecNumeroIni,0)},c2v:function(){gx.O.AV30ContaPagRecNumeroIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMEROINI",'.')},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMEROFIM",gxz:"ZV31ContaPagRecNumeroFim",gxold:"OV31ContaPagRecNumeroFim",gxvar:"AV31ContaPagRecNumeroFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ContaPagRecNumeroFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ContaPagRecNumeroFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMEROFIM",gx.O.AV31ContaPagRecNumeroFim,0)},c2v:function(){gx.O.AV31ContaPagRecNumeroFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMEROFIM",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[96]={fld:"TABLERVENC",grid:0};
   GXValidFnc[99]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTOINI",gxz:"ZV28ContaPagRecDtVencimentoIni",gxold:"OV28ContaPagRecDtVencimentoIni",gxvar:"AV28ContaPagRecDtVencimentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTOINI",gx.O.AV28ContaPagRecDtVencimentoIni,0)},c2v:function(){gx.O.AV28ContaPagRecDtVencimentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTOINI")},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTOFIM",gxz:"ZV29ContaPagRecDtVencimentoFim",gxold:"OV29ContaPagRecDtVencimentoFim",gxvar:"AV29ContaPagRecDtVencimentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTOFIM",gx.O.AV29ContaPagRecDtVencimentoFim,0)},c2v:function(){gx.O.AV29ContaPagRecDtVencimentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTOFIM")},nac:gx.falseFn};
   GXValidFnc[105]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[107]={fld:"TABLE9",grid:0};
   GXValidFnc[110]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCUMENTOINI",gxz:"ZV32ContaPagRecDocumentoIni",gxold:"OV32ContaPagRecDocumentoIni",gxvar:"AV32ContaPagRecDocumentoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ContaPagRecDocumentoIni=Value},v2z:function(Value){gx.O.ZV32ContaPagRecDocumentoIni=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDOCUMENTOINI",gx.O.AV32ContaPagRecDocumentoIni,0)},c2v:function(){gx.O.AV32ContaPagRecDocumentoIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDOCUMENTOINI")},nac:gx.falseFn};
   GXValidFnc[111]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECSEQDOCUMEINI",gxz:"ZV33ContaPagRecSeqDocumeIni",gxold:"OV33ContaPagRecSeqDocumeIni",gxvar:"AV33ContaPagRecSeqDocumeIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ContaPagRecSeqDocumeIni=Value},v2z:function(Value){gx.O.ZV33ContaPagRecSeqDocumeIni=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECSEQDOCUMEINI",gx.O.AV33ContaPagRecSeqDocumeIni,0)},c2v:function(){gx.O.AV33ContaPagRecSeqDocumeIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECSEQDOCUMEINI")},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCUMENTOFIM",gxz:"ZV34ContaPagRecDocumentoFim",gxold:"OV34ContaPagRecDocumentoFim",gxvar:"AV34ContaPagRecDocumentoFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ContaPagRecDocumentoFim=Value},v2z:function(Value){gx.O.ZV34ContaPagRecDocumentoFim=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDOCUMENTOFIM",gx.O.AV34ContaPagRecDocumentoFim,0)},c2v:function(){gx.O.AV34ContaPagRecDocumentoFim=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDOCUMENTOFIM")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[118]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECSEQDOCUMEFIM",gxz:"ZV35ContaPagRecSeqDocumeFim",gxold:"OV35ContaPagRecSeqDocumeFim",gxvar:"AV35ContaPagRecSeqDocumeFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ContaPagRecSeqDocumeFim=Value},v2z:function(Value){gx.O.ZV35ContaPagRecSeqDocumeFim=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECSEQDOCUMEFIM",gx.O.AV35ContaPagRecSeqDocumeFim,0)},c2v:function(){gx.O.AV35ContaPagRecSeqDocumeFim=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECSEQDOCUMEFIM")},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[123]={fld:"TABLERCLIFOR",grid:0};
   GXValidFnc[126]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORIDINI",gxz:"ZV36ContaPagRecCliForIdIni",gxold:"OV36ContaPagRecCliForIdIni",gxvar:"AV36ContaPagRecCliForIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ContaPagRecCliForIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36ContaPagRecCliForIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORIDINI",gx.O.AV36ContaPagRecCliForIdIni,0)},c2v:function(){gx.O.AV36ContaPagRecCliForIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECCLIFORIDFIM",gxz:"ZV37ContaPagRecCliForIdFim",gxold:"OV37ContaPagRecCliForIdFim",gxvar:"AV37ContaPagRecCliForIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ContaPagRecCliForIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37ContaPagRecCliForIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECCLIFORIDFIM",gx.O.AV37ContaPagRecCliForIdFim,0)},c2v:function(){gx.O.AV37ContaPagRecCliForIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECCLIFORIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFATURA",gxz:"ZV38ContaPagRecFatura",gxold:"OV38ContaPagRecFatura",gxvar:"AV38ContaPagRecFatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ContaPagRecFatura=Value},v2z:function(Value){gx.O.ZV38ContaPagRecFatura=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFATURA",gx.O.AV38ContaPagRecFatura,0)},c2v:function(){gx.O.AV38ContaPagRecFatura=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECFATURA")},nac:gx.falseFn};
   GXValidFnc[137]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[139]={fld:"TABLERCTAPAGREC",grid:0};
   GXValidFnc[142]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFILIALIDINI",gxz:"ZV47ContaPagRecFilialIdIni",gxold:"OV47ContaPagRecFilialIdIni",gxvar:"AV47ContaPagRecFilialIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ContaPagRecFilialIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47ContaPagRecFilialIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFILIALIDINI",gx.O.AV47ContaPagRecFilialIdIni,0)},c2v:function(){gx.O.AV47ContaPagRecFilialIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECFILIALIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[144]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[146]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFILIALIDFIM",gxz:"ZV48ContaPagRecFilialIdFim",gxold:"OV48ContaPagRecFilialIdFim",gxvar:"AV48ContaPagRecFilialIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48ContaPagRecFilialIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48ContaPagRecFilialIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFILIALIDFIM",gx.O.AV48ContaPagRecFilialIdFim,0)},c2v:function(){gx.O.AV48ContaPagRecFilialIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECFILIALIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[148]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoid,isvalid:null,rgrid:[],fld:"vCAIXABANCOID",gxz:"ZV55CaixaBancoId",gxold:"OV55CaixaBancoId",gxvar:"AV55CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV55CaixaBancoId,0)},c2v:function(){gx.O.AV55CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[153]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[155]={fld:"TABLERESPECIE",grid:0};
   GXValidFnc[158]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECESPECIEIDINI",gxz:"ZV39ContaPagRecEspecieIdIni",gxold:"OV39ContaPagRecEspecieIdIni",gxvar:"AV39ContaPagRecEspecieIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ContaPagRecEspecieIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39ContaPagRecEspecieIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECESPECIEIDINI",gx.O.AV39ContaPagRecEspecieIdIni,0)},c2v:function(){gx.O.AV39ContaPagRecEspecieIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECESPECIEIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[160]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[162]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECESPECIEIDFIM",gxz:"ZV40ContaPagRecEspecieIdFim",gxold:"OV40ContaPagRecEspecieIdFim",gxvar:"AV40ContaPagRecEspecieIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ContaPagRecEspecieIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40ContaPagRecEspecieIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECESPECIEIDFIM",gx.O.AV40ContaPagRecEspecieIdFim,0)},c2v:function(){gx.O.AV40ContaPagRecEspecieIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECESPECIEIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[164]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[166]={fld:"TABLERCCUSTO",grid:0};
   GXValidFnc[169]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDINI",gxz:"ZV49CentroCustoIdIni",gxold:"OV49CentroCustoIdIni",gxvar:"AV49CentroCustoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49CentroCustoIdIni=Value},v2z:function(Value){gx.O.ZV49CentroCustoIdIni=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDINI",gx.O.AV49CentroCustoIdIni,0)},c2v:function(){gx.O.AV49CentroCustoIdIni=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDINI")},nac:gx.falseFn};
   GXValidFnc[171]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[173]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDFIM",gxz:"ZV50CentroCustoIdFim",gxold:"OV50CentroCustoIdFim",gxvar:"AV50CentroCustoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50CentroCustoIdFim=Value},v2z:function(Value){gx.O.ZV50CentroCustoIdFim=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDFIM",gx.O.AV50CentroCustoIdFim,0)},c2v:function(){gx.O.AV50CentroCustoIdFim=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDFIM")},nac:gx.falseFn};
   GXValidFnc[176]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[178]={fld:"TABLERTPCTA",grid:0};
   GXValidFnc[181]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECTIPCONTAIDINI",gxz:"ZV43ContaPagRecTipContaIdIni",gxold:"OV43ContaPagRecTipContaIdIni",gxvar:"AV43ContaPagRecTipContaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ContaPagRecTipContaIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43ContaPagRecTipContaIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECTIPCONTAIDINI",gx.O.AV43ContaPagRecTipContaIdIni,0)},c2v:function(){gx.O.AV43ContaPagRecTipContaIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECTIPCONTAIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[183]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[185]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECTIPCONTAIDFIM",gxz:"ZV44ContaPagRecTipContaIdFim",gxold:"OV44ContaPagRecTipContaIdFim",gxvar:"AV44ContaPagRecTipContaIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44ContaPagRecTipContaIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44ContaPagRecTipContaIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECTIPCONTAIDFIM",gx.O.AV44ContaPagRecTipContaIdFim,0)},c2v:function(){gx.O.AV44ContaPagRecTipContaIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECTIPCONTAIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[187]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[189]={fld:"TABLE8",grid:0};
   GXValidFnc[192]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOIDINI",gxz:"ZV51BancoIdIni",gxold:"OV51BancoIdIni",gxvar:"AV51BancoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51BancoIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51BancoIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOIDINI",gx.O.AV51BancoIdIni,0)},c2v:function(){gx.O.AV51BancoIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[193]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[194]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOAGENCIAIDINI",gxz:"ZV53BancoAgenciaIdIni",gxold:"OV53BancoAgenciaIdIni",gxvar:"AV53BancoAgenciaIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53BancoAgenciaIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53BancoAgenciaIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIAIDINI",gx.O.AV53BancoAgenciaIdIni,0)},c2v:function(){gx.O.AV53BancoAgenciaIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOAGENCIAIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[196]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[198]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOIDFIM",gxz:"ZV52BancoIdFim",gxold:"OV52BancoIdFim",gxvar:"AV52BancoIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52BancoIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52BancoIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOIDFIM",gx.O.AV52BancoIdFim,0)},c2v:function(){gx.O.AV52BancoIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[199]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[200]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOAGENCIAIDFIM",gxz:"ZV54BancoAgenciaIdFim",gxold:"OV54BancoAgenciaIdFim",gxvar:"AV54BancoAgenciaIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54BancoAgenciaIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54BancoAgenciaIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIAIDFIM",gx.O.AV54BancoAgenciaIdFim,0)},c2v:function(){gx.O.AV54BancoAgenciaIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOAGENCIAIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[203]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[205]={fld:"TABLERTPCOB",grid:0};
   GXValidFnc[208]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECTIPCOBIDINI",gxz:"ZV45ContaPagRecTipCobIdIni",gxold:"OV45ContaPagRecTipCobIdIni",gxvar:"AV45ContaPagRecTipCobIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45ContaPagRecTipCobIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45ContaPagRecTipCobIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECTIPCOBIDINI",gx.O.AV45ContaPagRecTipCobIdIni,0)},c2v:function(){gx.O.AV45ContaPagRecTipCobIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECTIPCOBIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[210]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[212]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECTIPCOBIDFIM",gxz:"ZV46ContaPagRecTipCobIdFim",gxold:"OV46ContaPagRecTipCobIdFim",gxvar:"AV46ContaPagRecTipCobIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ContaPagRecTipCobIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46ContaPagRecTipCobIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECTIPCOBIDFIM",gx.O.AV46ContaPagRecTipCobIdFim,0)},c2v:function(){gx.O.AV46ContaPagRecTipCobIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECTIPCOBIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[214]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[216]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV56ConvenioId",gxold:"OV56ConvenioId",gxvar:"AV56ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV56ConvenioId,0)},c2v:function(){gx.O.AV56ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[221]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[223]={fld:"TABLEPROCANO",grid:0};
   GXValidFnc[226]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNOPROCESSO",gxz:"ZV57ContaPagRecNoProcesso",gxold:"OV57ContaPagRecNoProcesso",gxvar:"AV57ContaPagRecNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57ContaPagRecNoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57ContaPagRecNoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNOPROCESSO",gx.O.AV57ContaPagRecNoProcesso,0)},c2v:function(){gx.O.AV57ContaPagRecNoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[228]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[230]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECANOPROCESSO",gxz:"ZV58ContaPagRecAnoProcesso",gxold:"OV58ContaPagRecAnoProcesso",gxvar:"AV58ContaPagRecAnoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58ContaPagRecAnoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58ContaPagRecAnoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECANOPROCESSO",gx.O.AV58ContaPagRecAnoProcesso,0)},c2v:function(){gx.O.AV58ContaPagRecAnoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECANOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[239]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV89AcessoSistemaSequencia",gxold:"OV89AcessoSistemaSequencia",gxvar:"AV89AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV89AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV89AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV89AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[240]={fld:"JS", format:2,grid:0};
   GXValidFnc[242]={fld:"BTNHELP",grid:0};
   GXValidFnc[244]={fld:"PROMPT_LANCAMENTOID01",grid:0};
   GXValidFnc[245]={fld:"PROMPT_LANCAMENTOID02",grid:0};
   GXValidFnc[246]={fld:"PROMPT_LANCAMENTOID03",grid:0};
   GXValidFnc[247]={fld:"PROMPT_LANCAMENTOID04",grid:0};
   GXValidFnc[248]={fld:"PROMPT_LANCAMENTOID05",grid:0};
   GXValidFnc[249]={fld:"PROMPT_LANCAMENTOID06",grid:0};
   GXValidFnc[250]={fld:"PROMPT_LANCAMENTOID07",grid:0};
   GXValidFnc[251]={fld:"PROMPT_LANCAMENTOID08",grid:0};
   GXValidFnc[252]={fld:"PROMPT_LANCAMENTOID09",grid:0};
   GXValidFnc[253]={fld:"PROMPT_LANCAMENTOID10",grid:0};
   GXValidFnc[254]={fld:"PROMPT_CONTAPAGRECNUMEROINI",grid:0};
   GXValidFnc[255]={fld:"PROMPT_CONTAPAGRECNUMEROFIM",grid:0};
   GXValidFnc[256]={fld:"PROMPT_CONTAPAGRECCLIFORIDINI",grid:0};
   GXValidFnc[257]={fld:"PROMPT_CONTAPAGRECCLIFORIDFIM",grid:0};
   GXValidFnc[258]={fld:"PROMPT_CONTAPAGRECFILIALIDINI",grid:0};
   GXValidFnc[259]={fld:"PROMPT_CONTAPAGRECFILIALIDFIM",grid:0};
   GXValidFnc[260]={fld:"PROMPT_CAIXABANCOID",grid:0};
   GXValidFnc[261]={fld:"PROMPT_CONTAPAGRECESPECIEIDINI",grid:0};
   GXValidFnc[262]={fld:"PROMPT_CONTAPAGRECESPECIEIDFIM",grid:0};
   GXValidFnc[263]={fld:"PROMPT_CENTROCUSTOIDINI",grid:0};
   GXValidFnc[264]={fld:"PROMPT_CENTROCUSTOIDFIM",grid:0};
   GXValidFnc[265]={fld:"PROMPT_CONTAPAGRECTIPCONTAIDINI",grid:0};
   GXValidFnc[266]={fld:"PROMPT_CONTAPAGRECTIPCONTAIDFIM",grid:0};
   GXValidFnc[267]={fld:"PROMPT_BANCOIDINI",grid:0};
   GXValidFnc[268]={fld:"PROMPT_BANCOAGENCIAIDINI",grid:0};
   GXValidFnc[269]={fld:"PROMPT_BANCOIDFIM",grid:0};
   GXValidFnc[270]={fld:"PROMPT_BANCOAGENCIAIDFIM",grid:0};
   GXValidFnc[271]={fld:"PROMPT_CONTAPAGRECTIPCOBIDINI",grid:0};
   GXValidFnc[272]={fld:"PROMPT_CONTAPAGRECTIPCOBIDFIM",grid:0};
   GXValidFnc[273]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV69TipoExecucao = "" ;
   this.ZV69TipoExecucao = "" ;
   this.OV69TipoExecucao = "" ;
   this.AV41ContaLancamDataIni = gx.date.nullDate() ;
   this.ZV41ContaLancamDataIni = gx.date.nullDate() ;
   this.OV41ContaLancamDataIni = gx.date.nullDate() ;
   this.AV42ContaLancamDataFim = gx.date.nullDate() ;
   this.ZV42ContaLancamDataFim = gx.date.nullDate() ;
   this.OV42ContaLancamDataFim = gx.date.nullDate() ;
   this.AV23ExcluirCliFornNormal = "" ;
   this.ZV23ExcluirCliFornNormal = "" ;
   this.OV23ExcluirCliFornNormal = "" ;
   this.AV59LancamentoId01 = 0 ;
   this.ZV59LancamentoId01 = 0 ;
   this.OV59LancamentoId01 = 0 ;
   this.AV60LancamentoId02 = 0 ;
   this.ZV60LancamentoId02 = 0 ;
   this.OV60LancamentoId02 = 0 ;
   this.AV61LancamentoId03 = 0 ;
   this.ZV61LancamentoId03 = 0 ;
   this.OV61LancamentoId03 = 0 ;
   this.AV62LancamentoId04 = 0 ;
   this.ZV62LancamentoId04 = 0 ;
   this.OV62LancamentoId04 = 0 ;
   this.AV63LancamentoId05 = 0 ;
   this.ZV63LancamentoId05 = 0 ;
   this.OV63LancamentoId05 = 0 ;
   this.AV24ExcluirCliFornCancelado = "" ;
   this.ZV24ExcluirCliFornCancelado = "" ;
   this.OV24ExcluirCliFornCancelado = "" ;
   this.AV64LancamentoId06 = 0 ;
   this.ZV64LancamentoId06 = 0 ;
   this.OV64LancamentoId06 = 0 ;
   this.AV65LancamentoId07 = 0 ;
   this.ZV65LancamentoId07 = 0 ;
   this.OV65LancamentoId07 = 0 ;
   this.AV66LancamentoId08 = 0 ;
   this.ZV66LancamentoId08 = 0 ;
   this.OV66LancamentoId08 = 0 ;
   this.AV67LancamentoId09 = 0 ;
   this.ZV67LancamentoId09 = 0 ;
   this.OV67LancamentoId09 = 0 ;
   this.AV68LancamentoId10 = 0 ;
   this.ZV68LancamentoId10 = 0 ;
   this.OV68LancamentoId10 = 0 ;
   this.AV25ExcluirCliFornSuspenso = "" ;
   this.ZV25ExcluirCliFornSuspenso = "" ;
   this.OV25ExcluirCliFornSuspenso = "" ;
   this.AV26ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.ZV26ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.OV26ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV27ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.ZV27ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.OV27ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV30ContaPagRecNumeroIni = 0 ;
   this.ZV30ContaPagRecNumeroIni = 0 ;
   this.OV30ContaPagRecNumeroIni = 0 ;
   this.AV31ContaPagRecNumeroFim = 0 ;
   this.ZV31ContaPagRecNumeroFim = 0 ;
   this.OV31ContaPagRecNumeroFim = 0 ;
   this.AV28ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.ZV28ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.OV28ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.AV29ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.ZV29ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.OV29ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.AV32ContaPagRecDocumentoIni = "" ;
   this.ZV32ContaPagRecDocumentoIni = "" ;
   this.OV32ContaPagRecDocumentoIni = "" ;
   this.AV33ContaPagRecSeqDocumeIni = "" ;
   this.ZV33ContaPagRecSeqDocumeIni = "" ;
   this.OV33ContaPagRecSeqDocumeIni = "" ;
   this.AV34ContaPagRecDocumentoFim = "" ;
   this.ZV34ContaPagRecDocumentoFim = "" ;
   this.OV34ContaPagRecDocumentoFim = "" ;
   this.AV35ContaPagRecSeqDocumeFim = "" ;
   this.ZV35ContaPagRecSeqDocumeFim = "" ;
   this.OV35ContaPagRecSeqDocumeFim = "" ;
   this.AV36ContaPagRecCliForIdIni = 0 ;
   this.ZV36ContaPagRecCliForIdIni = 0 ;
   this.OV36ContaPagRecCliForIdIni = 0 ;
   this.AV37ContaPagRecCliForIdFim = 0 ;
   this.ZV37ContaPagRecCliForIdFim = 0 ;
   this.OV37ContaPagRecCliForIdFim = 0 ;
   this.AV38ContaPagRecFatura = "" ;
   this.ZV38ContaPagRecFatura = "" ;
   this.OV38ContaPagRecFatura = "" ;
   this.AV47ContaPagRecFilialIdIni = 0 ;
   this.ZV47ContaPagRecFilialIdIni = 0 ;
   this.OV47ContaPagRecFilialIdIni = 0 ;
   this.AV48ContaPagRecFilialIdFim = 0 ;
   this.ZV48ContaPagRecFilialIdFim = 0 ;
   this.OV48ContaPagRecFilialIdFim = 0 ;
   this.AV55CaixaBancoId = 0 ;
   this.ZV55CaixaBancoId = 0 ;
   this.OV55CaixaBancoId = 0 ;
   this.AV39ContaPagRecEspecieIdIni = 0 ;
   this.ZV39ContaPagRecEspecieIdIni = 0 ;
   this.OV39ContaPagRecEspecieIdIni = 0 ;
   this.AV40ContaPagRecEspecieIdFim = 0 ;
   this.ZV40ContaPagRecEspecieIdFim = 0 ;
   this.OV40ContaPagRecEspecieIdFim = 0 ;
   this.AV49CentroCustoIdIni = "" ;
   this.ZV49CentroCustoIdIni = "" ;
   this.OV49CentroCustoIdIni = "" ;
   this.AV50CentroCustoIdFim = "" ;
   this.ZV50CentroCustoIdFim = "" ;
   this.OV50CentroCustoIdFim = "" ;
   this.AV43ContaPagRecTipContaIdIni = 0 ;
   this.ZV43ContaPagRecTipContaIdIni = 0 ;
   this.OV43ContaPagRecTipContaIdIni = 0 ;
   this.AV44ContaPagRecTipContaIdFim = 0 ;
   this.ZV44ContaPagRecTipContaIdFim = 0 ;
   this.OV44ContaPagRecTipContaIdFim = 0 ;
   this.AV51BancoIdIni = 0 ;
   this.ZV51BancoIdIni = 0 ;
   this.OV51BancoIdIni = 0 ;
   this.AV53BancoAgenciaIdIni = 0 ;
   this.ZV53BancoAgenciaIdIni = 0 ;
   this.OV53BancoAgenciaIdIni = 0 ;
   this.AV52BancoIdFim = 0 ;
   this.ZV52BancoIdFim = 0 ;
   this.OV52BancoIdFim = 0 ;
   this.AV54BancoAgenciaIdFim = 0 ;
   this.ZV54BancoAgenciaIdFim = 0 ;
   this.OV54BancoAgenciaIdFim = 0 ;
   this.AV45ContaPagRecTipCobIdIni = 0 ;
   this.ZV45ContaPagRecTipCobIdIni = 0 ;
   this.OV45ContaPagRecTipCobIdIni = 0 ;
   this.AV46ContaPagRecTipCobIdFim = 0 ;
   this.ZV46ContaPagRecTipCobIdFim = 0 ;
   this.OV46ContaPagRecTipCobIdFim = 0 ;
   this.AV56ConvenioId = 0 ;
   this.ZV56ConvenioId = 0 ;
   this.OV56ConvenioId = 0 ;
   this.AV57ContaPagRecNoProcesso = 0 ;
   this.ZV57ContaPagRecNoProcesso = 0 ;
   this.OV57ContaPagRecNoProcesso = 0 ;
   this.AV58ContaPagRecAnoProcesso = 0 ;
   this.ZV58ContaPagRecAnoProcesso = 0 ;
   this.OV58ContaPagRecAnoProcesso = 0 ;
   this.AV89AcessoSistemaSequencia = 0 ;
   this.ZV89AcessoSistemaSequencia = 0 ;
   this.OV89AcessoSistemaSequencia = 0 ;
   this.AV69TipoExecucao = "" ;
   this.AV41ContaLancamDataIni = gx.date.nullDate() ;
   this.AV42ContaLancamDataFim = gx.date.nullDate() ;
   this.AV23ExcluirCliFornNormal = "" ;
   this.AV59LancamentoId01 = 0 ;
   this.AV60LancamentoId02 = 0 ;
   this.AV61LancamentoId03 = 0 ;
   this.AV62LancamentoId04 = 0 ;
   this.AV63LancamentoId05 = 0 ;
   this.AV24ExcluirCliFornCancelado = "" ;
   this.AV64LancamentoId06 = 0 ;
   this.AV65LancamentoId07 = 0 ;
   this.AV66LancamentoId08 = 0 ;
   this.AV67LancamentoId09 = 0 ;
   this.AV68LancamentoId10 = 0 ;
   this.AV25ExcluirCliFornSuspenso = "" ;
   this.AV26ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV27ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV30ContaPagRecNumeroIni = 0 ;
   this.AV31ContaPagRecNumeroFim = 0 ;
   this.AV28ContaPagRecDtVencimentoIni = gx.date.nullDate() ;
   this.AV29ContaPagRecDtVencimentoFim = gx.date.nullDate() ;
   this.AV32ContaPagRecDocumentoIni = "" ;
   this.AV33ContaPagRecSeqDocumeIni = "" ;
   this.AV34ContaPagRecDocumentoFim = "" ;
   this.AV35ContaPagRecSeqDocumeFim = "" ;
   this.AV36ContaPagRecCliForIdIni = 0 ;
   this.AV37ContaPagRecCliForIdFim = 0 ;
   this.AV38ContaPagRecFatura = "" ;
   this.AV47ContaPagRecFilialIdIni = 0 ;
   this.AV48ContaPagRecFilialIdFim = 0 ;
   this.AV55CaixaBancoId = 0 ;
   this.AV39ContaPagRecEspecieIdIni = 0 ;
   this.AV40ContaPagRecEspecieIdFim = 0 ;
   this.AV49CentroCustoIdIni = "" ;
   this.AV50CentroCustoIdFim = "" ;
   this.AV43ContaPagRecTipContaIdIni = 0 ;
   this.AV44ContaPagRecTipContaIdFim = 0 ;
   this.AV51BancoIdIni = 0 ;
   this.AV53BancoAgenciaIdIni = 0 ;
   this.AV52BancoIdFim = 0 ;
   this.AV54BancoAgenciaIdFim = 0 ;
   this.AV45ContaPagRecTipCobIdIni = 0 ;
   this.AV46ContaPagRecTipCobIdFim = 0 ;
   this.AV56ConvenioId = 0 ;
   this.AV57ContaPagRecNoProcesso = 0 ;
   this.AV58ContaPagRecAnoProcesso = 0 ;
   this.AV89AcessoSistemaSequencia = 0 ;
   this.AV20ContaPagRecPagRecAux = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.Events = {"e11dz2_client": ["'FECHAR'", true] ,"e13dz2_client": ["ENTER", true] ,"e16dz2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV116Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV21ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV69TipoExecucao',fld:'vTIPOEXECUCAO'},{av:'AV41ContaLancamDataIni',fld:'vCONTALANCAMDATAINI'},{av:'AV42ContaLancamDataFim',fld:'vCONTALANCAMDATAFIM'},{av:'AV26ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV27ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV28ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV29ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'AV30ContaPagRecNumeroIni',fld:'vCONTAPAGRECNUMEROINI'},{av:'AV31ContaPagRecNumeroFim',fld:'vCONTAPAGRECNUMEROFIM'},{av:'AV32ContaPagRecDocumentoIni',fld:'vCONTAPAGRECDOCUMENTOINI'},{av:'AV33ContaPagRecSeqDocumeIni',fld:'vCONTAPAGRECSEQDOCUMEINI'},{av:'AV34ContaPagRecDocumentoFim',fld:'vCONTAPAGRECDOCUMENTOFIM'},{av:'AV35ContaPagRecSeqDocumeFim',fld:'vCONTAPAGRECSEQDOCUMEFIM'},{av:'AV36ContaPagRecCliForIdIni',fld:'vCONTAPAGRECCLIFORIDINI'},{av:'AV37ContaPagRecCliForIdFim',fld:'vCONTAPAGRECCLIFORIDFIM'},{av:'AV38ContaPagRecFatura',fld:'vCONTAPAGRECFATURA'},{av:'AV55CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV49CentroCustoIdIni',fld:'vCENTROCUSTOIDINI'},{av:'AV50CentroCustoIdFim',fld:'vCENTROCUSTOIDFIM'},{av:'AV59LancamentoId01',fld:'vLANCAMENTOID01'},{av:'AV60LancamentoId02',fld:'vLANCAMENTOID02'},{av:'AV61LancamentoId03',fld:'vLANCAMENTOID03'},{av:'AV62LancamentoId04',fld:'vLANCAMENTOID04'},{av:'AV63LancamentoId05',fld:'vLANCAMENTOID05'},{av:'AV64LancamentoId06',fld:'vLANCAMENTOID06'},{av:'AV65LancamentoId07',fld:'vLANCAMENTOID07'},{av:'AV66LancamentoId08',fld:'vLANCAMENTOID08'},{av:'AV67LancamentoId09',fld:'vLANCAMENTOID09'},{av:'AV68LancamentoId10',fld:'vLANCAMENTOID10'},{av:'AV56ConvenioId',fld:'vCONVENIOID'},{av:'AV23ExcluirCliFornNormal',fld:'vEXCLUIRCLIFORNNORMAL'},{av:'AV24ExcluirCliFornCancelado',fld:'vEXCLUIRCLIFORNCANCELADO'},{av:'AV25ExcluirCliFornSuspenso',fld:'vEXCLUIRCLIFORNSUSPENSO'},{av:'AV47ContaPagRecFilialIdIni',fld:'vCONTAPAGRECFILIALIDINI'},{av:'AV48ContaPagRecFilialIdFim',fld:'vCONTAPAGRECFILIALIDFIM'},{av:'AV39ContaPagRecEspecieIdIni',fld:'vCONTAPAGRECESPECIEIDINI'},{av:'AV40ContaPagRecEspecieIdFim',fld:'vCONTAPAGRECESPECIEIDFIM'},{av:'AV43ContaPagRecTipContaIdIni',fld:'vCONTAPAGRECTIPCONTAIDINI'},{av:'AV44ContaPagRecTipContaIdFim',fld:'vCONTAPAGRECTIPCONTAIDFIM'},{av:'AV45ContaPagRecTipCobIdIni',fld:'vCONTAPAGRECTIPCOBIDINI'},{av:'AV46ContaPagRecTipCobIdFim',fld:'vCONTAPAGRECTIPCOBIDFIM'},{av:'AV51BancoIdIni',fld:'vBANCOIDINI'},{av:'AV53BancoAgenciaIdIni',fld:'vBANCOAGENCIAIDINI'},{av:'AV52BancoIdFim',fld:'vBANCOIDFIM'},{av:'AV54BancoAgenciaIdFim',fld:'vBANCOAGENCIAIDFIM'},{av:'AV57ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV58ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'}],[{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV58ContaPagRecAnoProcesso',fld:'vCONTAPAGRECANOPROCESSO'},{av:'AV57ContaPagRecNoProcesso',fld:'vCONTAPAGRECNOPROCESSO'},{av:'AV54BancoAgenciaIdFim',fld:'vBANCOAGENCIAIDFIM'},{av:'AV52BancoIdFim',fld:'vBANCOIDFIM'},{av:'AV53BancoAgenciaIdIni',fld:'vBANCOAGENCIAIDINI'},{av:'AV51BancoIdIni',fld:'vBANCOIDINI'},{av:'AV46ContaPagRecTipCobIdFim',fld:'vCONTAPAGRECTIPCOBIDFIM'},{av:'AV45ContaPagRecTipCobIdIni',fld:'vCONTAPAGRECTIPCOBIDINI'},{av:'AV44ContaPagRecTipContaIdFim',fld:'vCONTAPAGRECTIPCONTAIDFIM'},{av:'AV43ContaPagRecTipContaIdIni',fld:'vCONTAPAGRECTIPCONTAIDINI'},{av:'AV40ContaPagRecEspecieIdFim',fld:'vCONTAPAGRECESPECIEIDFIM'},{av:'AV39ContaPagRecEspecieIdIni',fld:'vCONTAPAGRECESPECIEIDINI'},{av:'AV48ContaPagRecFilialIdFim',fld:'vCONTAPAGRECFILIALIDFIM'},{av:'AV47ContaPagRecFilialIdIni',fld:'vCONTAPAGRECFILIALIDINI'},{av:'AV25ExcluirCliFornSuspenso',fld:'vEXCLUIRCLIFORNSUSPENSO'},{av:'AV24ExcluirCliFornCancelado',fld:'vEXCLUIRCLIFORNCANCELADO'},{av:'AV23ExcluirCliFornNormal',fld:'vEXCLUIRCLIFORNNORMAL'},{av:'AV56ConvenioId',fld:'vCONVENIOID'},{av:'AV68LancamentoId10',fld:'vLANCAMENTOID10'},{av:'AV67LancamentoId09',fld:'vLANCAMENTOID09'},{av:'AV66LancamentoId08',fld:'vLANCAMENTOID08'},{av:'AV65LancamentoId07',fld:'vLANCAMENTOID07'},{av:'AV64LancamentoId06',fld:'vLANCAMENTOID06'},{av:'AV63LancamentoId05',fld:'vLANCAMENTOID05'},{av:'AV62LancamentoId04',fld:'vLANCAMENTOID04'},{av:'AV61LancamentoId03',fld:'vLANCAMENTOID03'},{av:'AV60LancamentoId02',fld:'vLANCAMENTOID02'},{av:'AV59LancamentoId01',fld:'vLANCAMENTOID01'},{av:'AV50CentroCustoIdFim',fld:'vCENTROCUSTOIDFIM'},{av:'AV49CentroCustoIdIni',fld:'vCENTROCUSTOIDINI'},{av:'AV55CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV38ContaPagRecFatura',fld:'vCONTAPAGRECFATURA'},{av:'AV37ContaPagRecCliForIdFim',fld:'vCONTAPAGRECCLIFORIDFIM'},{av:'AV36ContaPagRecCliForIdIni',fld:'vCONTAPAGRECCLIFORIDINI'},{av:'AV35ContaPagRecSeqDocumeFim',fld:'vCONTAPAGRECSEQDOCUMEFIM'},{av:'AV34ContaPagRecDocumentoFim',fld:'vCONTAPAGRECDOCUMENTOFIM'},{av:'AV33ContaPagRecSeqDocumeIni',fld:'vCONTAPAGRECSEQDOCUMEINI'},{av:'AV32ContaPagRecDocumentoIni',fld:'vCONTAPAGRECDOCUMENTOINI'},{av:'AV31ContaPagRecNumeroFim',fld:'vCONTAPAGRECNUMEROFIM'},{av:'AV30ContaPagRecNumeroIni',fld:'vCONTAPAGRECNUMEROINI'},{av:'AV29ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'AV28ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV27ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV26ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV42ContaLancamDataFim',fld:'vCONTALANCAMDATAFIM'},{av:'AV41ContaLancamDataIni',fld:'vCONTALANCAMDATAINI'},{av:'AV69TipoExecucao',fld:'vTIPOEXECUCAO'},{av:'AV21ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'gx.fn.getCtrlProperty("vCONTAPAGRECFILIALIDINI","Enabled")',ctrl:'vCONTAPAGRECFILIALIDINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTAPAGRECFILIALIDFIM","Enabled")',ctrl:'vCONTAPAGRECFILIALIDFIM',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV89AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV69TipoExecucao',fld:'vTIPOEXECUCAO'},{av:'AV41ContaLancamDataIni',fld:'vCONTALANCAMDATAINI'},{av:'AV42ContaLancamDataFim',fld:'vCONTALANCAMDATAFIM'},{av:'AV77SnCaixaBanco',fld:'vSNCAIXABANCO'},{av:'AV78IntFinCbl',fld:'vINTFINCBL'},{av:'AV59LancamentoId01',fld:'vLANCAMENTOID01'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV87EmpresaTpLancamento',fld:'vEMPRESATPLANCAMENTO'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'AV21ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV60LancamentoId02',fld:'vLANCAMENTOID02'},{av:'AV61LancamentoId03',fld:'vLANCAMENTOID03'},{av:'AV62LancamentoId04',fld:'vLANCAMENTOID04'},{av:'AV63LancamentoId05',fld:'vLANCAMENTOID05'},{av:'AV64LancamentoId06',fld:'vLANCAMENTOID06'},{av:'AV65LancamentoId07',fld:'vLANCAMENTOID07'},{av:'AV66LancamentoId08',fld:'vLANCAMENTOID08'},{av:'AV67LancamentoId09',fld:'vLANCAMENTOID09'},{av:'AV68LancamentoId10',fld:'vLANCAMENTOID10'},{av:'AV26ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV27ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV28ContaPagRecDtVencimentoIni',fld:'vCONTAPAGRECDTVENCIMENTOINI'},{av:'AV29ContaPagRecDtVencimentoFim',fld:'vCONTAPAGRECDTVENCIMENTOFIM'},{av:'AV36ContaPagRecCliForIdIni',fld:'vCONTAPAGRECCLIFORIDINI'},{av:'AV37ContaPagRecCliForIdFim',fld:'vCONTAPAGRECCLIFORIDFIM'},{av:'AV47ContaPagRecFilialIdIni',fld:'vCONTAPAGRECFILIALIDINI'},{av:'AV48ContaPagRecFilialIdFim',fld:'vCONTAPAGRECFILIALIDFIM'},{av:'AV39ContaPagRecEspecieIdIni',fld:'vCONTAPAGRECESPECIEIDINI'},{av:'AV40ContaPagRecEspecieIdFim',fld:'vCONTAPAGRECESPECIEIDFIM'},{av:'AV43ContaPagRecTipContaIdIni',fld:'vCONTAPAGRECTIPCONTAIDINI'},{av:'AV44ContaPagRecTipContaIdFim',fld:'vCONTAPAGRECTIPCONTAIDFIM'},{av:'AV45ContaPagRecTipCobIdIni',fld:'vCONTAPAGRECTIPCOBIDINI'},{av:'AV46ContaPagRecTipCobIdFim',fld:'vCONTAPAGRECTIPCOBIDFIM'},{av:'AV30ContaPagRecNumeroIni',fld:'vCONTAPAGRECNUMEROINI'},{av:'AV31ContaPagRecNumeroFim',fld:'vCONTAPAGRECNUMEROFIM'},{av:'AV32ContaPagRecDocumentoIni',fld:'vCONTAPAGRECDOCUMENTOINI'},{av:'AV34ContaPagRecDocumentoFim',fld:'vCONTAPAGRECDOCUMENTOFIM'},{av:'AV55CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV80EmpresaCaixaBanco',fld:'vEMPRESACAIXABANCO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV49CentroCustoIdIni',fld:'vCENTROCUSTOIDINI'},{av:'AV50CentroCustoIdFim',fld:'vCENTROCUSTOIDFIM'},{av:'AV51BancoIdIni',fld:'vBANCOIDINI'},{av:'AV52BancoIdFim',fld:'vBANCOIDFIM'},{av:'AV53BancoAgenciaIdIni',fld:'vBANCOAGENCIAIDINI'},{av:'AV54BancoAgenciaIdFim',fld:'vBANCOAGENCIAIDFIM'},{av:'AV56ConvenioId',fld:'vCONVENIOID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV88EmpresaConvenio',fld:'vEMPRESACONVENIO'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV20ContaPagRecPagRecAux',fld:'vCONTAPAGRECPAGRECAUX'}],[{av:'AV70tpErro',fld:'vTPERRO'},{av:'AV79MsgErroSaida',fld:'vMSGERROSAIDA'},{av:'AV118GXLvl200',fld:'vGXLVL200'},{av:'AV119GXLvl222',fld:'vGXLVL222'},{av:'AV120GXLvl243',fld:'vGXLVL243'},{av:'AV121GXLvl264',fld:'vGXLVL264'},{av:'AV122GXLvl285',fld:'vGXLVL285'},{av:'AV123GXLvl306',fld:'vGXLVL306'},{av:'AV124GXLvl327',fld:'vGXLVL327'},{av:'AV125GXLvl348',fld:'vGXLVL348'},{av:'AV126GXLvl369',fld:'vGXLVL369'},{av:'AV127GXLvl390',fld:'vGXLVL390'},{av:'AV128GXLvl465',fld:'vGXLVL465'},{av:'AV129GXLvl495',fld:'vGXLVL495'},{av:'AV113PagarReceber',fld:'vPAGARRECEBER'}]];
   this.setPrompt("PROMPT_LANCAMENTOID01", [49]);
   this.setPrompt("PROMPT_LANCAMENTOID02", [50]);
   this.setPrompt("PROMPT_LANCAMENTOID03", [51]);
   this.setPrompt("PROMPT_LANCAMENTOID04", [52]);
   this.setPrompt("PROMPT_LANCAMENTOID05", [53]);
   this.setPrompt("PROMPT_LANCAMENTOID06", [59]);
   this.setPrompt("PROMPT_LANCAMENTOID07", [60]);
   this.setPrompt("PROMPT_LANCAMENTOID08", [61]);
   this.setPrompt("PROMPT_LANCAMENTOID09", [62]);
   this.setPrompt("PROMPT_LANCAMENTOID10", [63]);
   this.setPrompt("PROMPT_CONTAPAGRECNUMEROINI", [87]);
   this.setPrompt("PROMPT_CONTAPAGRECNUMEROFIM", [91]);
   this.setPrompt("PROMPT_CONTAPAGRECCLIFORIDINI", [126]);
   this.setPrompt("PROMPT_CONTAPAGRECCLIFORIDFIM", [130]);
   this.setPrompt("PROMPT_CONTAPAGRECFILIALIDINI", [142]);
   this.setPrompt("PROMPT_CONTAPAGRECFILIALIDFIM", [146]);
   this.setPrompt("PROMPT_CAIXABANCOID", [150]);
   this.setPrompt("PROMPT_CONTAPAGRECESPECIEIDINI", [158]);
   this.setPrompt("PROMPT_CONTAPAGRECESPECIEIDFIM", [162]);
   this.setPrompt("PROMPT_CENTROCUSTOIDINI", [169]);
   this.setPrompt("PROMPT_CENTROCUSTOIDFIM", [173]);
   this.setPrompt("PROMPT_CONTAPAGRECTIPCONTAIDINI", [181]);
   this.setPrompt("PROMPT_CONTAPAGRECTIPCONTAIDFIM", [185]);
   this.setPrompt("PROMPT_BANCOIDINI", [192]);
   this.setPrompt("PROMPT_BANCOAGENCIAIDINI", [194]);
   this.setPrompt("PROMPT_BANCOIDFIM", [198]);
   this.setPrompt("PROMPT_BANCOAGENCIAIDFIM", [200]);
   this.setPrompt("PROMPT_CONTAPAGRECTIPCOBIDINI", [208]);
   this.setPrompt("PROMPT_CONTAPAGRECTIPCOBIDFIM", [212]);
   this.setPrompt("PROMPT_CONVENIOID", [216]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV20ContaPagRecPagRecAux", "vCONTAPAGRECPAGRECAUX", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexclusaocoletivalancamentos());
