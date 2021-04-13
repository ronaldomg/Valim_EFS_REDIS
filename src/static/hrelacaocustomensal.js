/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:19:4.28
*/
gx.evt.autoSkip = false;
gx.define('hrelacaocustomensal', false, function () {
   this.ServerClass =  "hrelacaocustomensal" ;
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
   this.Validv_Obracodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOBRACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tpnaturezamcc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTPNATUREZAMCC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tpnaturezacustos=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTPNATUREZACUSTOS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tpnaturezaoutrasdesp=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTPNATUREZAOUTRASDESP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112g22_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132g22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142g22_client=function()
   {
      this.executeServerEvent("VTPNATUREZAMCC.ISVALID", true, null, false, true);
   };
   this.e152g22_client=function()
   {
      this.executeServerEvent("VTPNATUREZACUSTOS.ISVALID", true, null, false, true);
   };
   this.e162g22_client=function()
   {
      this.executeServerEvent("VTPNATUREZAOUTRASDESP.ISVALID", true, null, false, true);
   };
   this.e172g22_client=function()
   {
      this.executeServerEvent("VOBRACODIGO.ISVALID", true, null, false, true);
   };
   this.e192g22_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,16,18,19,20,23,25,26,29,31,32,35,37,38,41,43,44,47,49,52,54,56,58,60,62,64,66,68,70,73,75,78,80,82,84,86,88,91,93,95,97,99,101,104,106,108,110,112,114,126,127,129,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156];
   this.GXLastCtrlId =156;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREF",gxz:"ZV37MesRef",gxold:"OV37MesRef",gxvar:"AV37MesRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37MesRef=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37MesRef=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREF",gx.O.AV37MesRef,0)},c2v:function(){gx.O.AV37MesRef=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREF",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREF",gxz:"ZV5AnoRef",gxold:"OV5AnoRef",gxvar:"AV5AnoRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AnoRef=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AnoRef=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREF",gx.O.AV5AnoRef,0)},c2v:function(){gx.O.AV5AnoRef=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREF",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Obracodigo,isvalid:'e172g22_client',rgrid:[],fld:"vOBRACODIGO",gxz:"ZV42ObraCodigo",gxold:"OV42ObraCodigo",gxvar:"AV42ObraCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ObraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42ObraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOBRACODIGO",gx.O.AV42ObraCodigo,0)},c2v:function(){gx.O.AV42ObraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOBRACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBRANOME",gxz:"ZV45ObraNome",gxold:"OV45ObraNome",gxvar:"AV45ObraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45ObraNome=Value},v2z:function(Value){gx.O.ZV45ObraNome=Value},v2c:function(){gx.fn.setControlValue("vOBRANOME",gx.O.AV45ObraNome,0)},c2v:function(){gx.O.AV45ObraNome=this.val()},val:function(){return gx.fn.getControlValue("vOBRANOME")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tpnaturezamcc,isvalid:'e142g22_client',rgrid:[],fld:"vTPNATUREZAMCC",gxz:"ZV60TpNaturezaMCC",gxold:"OV60TpNaturezaMCC",gxvar:"AV60TpNaturezaMCC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60TpNaturezaMCC=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60TpNaturezaMCC=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPNATUREZAMCC",gx.O.AV60TpNaturezaMCC,0)},c2v:function(){gx.O.AV60TpNaturezaMCC=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPNATUREZAMCC",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPNATUREZAMCCDESC",gxz:"ZV61TpNaturezaMCCDesc",gxold:"OV61TpNaturezaMCCDesc",gxvar:"AV61TpNaturezaMCCDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61TpNaturezaMCCDesc=Value},v2z:function(Value){gx.O.ZV61TpNaturezaMCCDesc=Value},v2c:function(){gx.fn.setControlValue("vTPNATUREZAMCCDESC",gx.O.AV61TpNaturezaMCCDesc,0)},c2v:function(){gx.O.AV61TpNaturezaMCCDesc=this.val()},val:function(){return gx.fn.getControlValue("vTPNATUREZAMCCDESC")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tpnaturezacustos,isvalid:'e152g22_client',rgrid:[],fld:"vTPNATUREZACUSTOS",gxz:"ZV58TpNaturezaCustos",gxold:"OV58TpNaturezaCustos",gxvar:"AV58TpNaturezaCustos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58TpNaturezaCustos=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58TpNaturezaCustos=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPNATUREZACUSTOS",gx.O.AV58TpNaturezaCustos,0)},c2v:function(){gx.O.AV58TpNaturezaCustos=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPNATUREZACUSTOS",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPNATUREZACUSTOSDESC",gxz:"ZV59TpNaturezaCustosDesc",gxold:"OV59TpNaturezaCustosDesc",gxvar:"AV59TpNaturezaCustosDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59TpNaturezaCustosDesc=Value},v2z:function(Value){gx.O.ZV59TpNaturezaCustosDesc=Value},v2c:function(){gx.fn.setControlValue("vTPNATUREZACUSTOSDESC",gx.O.AV59TpNaturezaCustosDesc,0)},c2v:function(){gx.O.AV59TpNaturezaCustosDesc=this.val()},val:function(){return gx.fn.getControlValue("vTPNATUREZACUSTOSDESC")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tpnaturezaoutrasdesp,isvalid:'e162g22_client',rgrid:[],fld:"vTPNATUREZAOUTRASDESP",gxz:"ZV63TpNaturezaOutrasDesp",gxold:"OV63TpNaturezaOutrasDesp",gxvar:"AV63TpNaturezaOutrasDesp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63TpNaturezaOutrasDesp=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63TpNaturezaOutrasDesp=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPNATUREZAOUTRASDESP",gx.O.AV63TpNaturezaOutrasDesp,0)},c2v:function(){gx.O.AV63TpNaturezaOutrasDesp=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPNATUREZAOUTRASDESP",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPNATUREZAOUTDESPDESC",gxz:"ZV62TpNaturezaOutDespDesc",gxold:"OV62TpNaturezaOutDespDesc",gxvar:"AV62TpNaturezaOutDespDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62TpNaturezaOutDespDesc=Value},v2z:function(Value){gx.O.ZV62TpNaturezaOutDespDesc=Value},v2c:function(){gx.fn.setControlValue("vTPNATUREZAOUTDESPDESC",gx.O.AV62TpNaturezaOutDespDesc,0)},c2v:function(){gx.O.AV62TpNaturezaOutDespDesc=this.val()},val:function(){return gx.fn.getControlValue("vTPNATUREZAOUTDESPDESC")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[49]={fld:"TABLE4",grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEID1",gxz:"ZV24EspecieId1",gxold:"OV24EspecieId1",gxvar:"AV24EspecieId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24EspecieId1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24EspecieId1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEID1",gx.O.AV24EspecieId1,0)},c2v:function(){gx.O.AV24EspecieId1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEID1",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEID2",gxz:"ZV26EspecieId2",gxold:"OV26EspecieId2",gxvar:"AV26EspecieId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26EspecieId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26EspecieId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEID2",gx.O.AV26EspecieId2,0)},c2v:function(){gx.O.AV26EspecieId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEID2",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEID3",gxz:"ZV27EspecieId3",gxold:"OV27EspecieId3",gxvar:"AV27EspecieId3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27EspecieId3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27EspecieId3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEID3",gx.O.AV27EspecieId3,0)},c2v:function(){gx.O.AV27EspecieId3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEID3",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEID4",gxz:"ZV28EspecieId4",gxold:"OV28EspecieId4",gxvar:"AV28EspecieId4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EspecieId4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28EspecieId4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEID4",gx.O.AV28EspecieId4,0)},c2v:function(){gx.O.AV28EspecieId4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEID4",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEID5",gxz:"ZV29EspecieId5",gxold:"OV29EspecieId5",gxvar:"AV29EspecieId5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EspecieId5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29EspecieId5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEID5",gx.O.AV29EspecieId5,0)},c2v:function(){gx.O.AV29EspecieId5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEID5",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEID6",gxz:"ZV30EspecieId6",gxold:"OV30EspecieId6",gxvar:"AV30EspecieId6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30EspecieId6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30EspecieId6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEID6",gx.O.AV30EspecieId6,0)},c2v:function(){gx.O.AV30EspecieId6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEID6",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEID7",gxz:"ZV31EspecieId7",gxold:"OV31EspecieId7",gxvar:"AV31EspecieId7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EspecieId7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31EspecieId7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEID7",gx.O.AV31EspecieId7,0)},c2v:function(){gx.O.AV31EspecieId7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEID7",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEID8",gxz:"ZV32EspecieId8",gxold:"OV32EspecieId8",gxvar:"AV32EspecieId8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32EspecieId8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32EspecieId8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEID8",gx.O.AV32EspecieId8,0)},c2v:function(){gx.O.AV32EspecieId8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEID8",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEID9",gxz:"ZV33EspecieId9",gxold:"OV33EspecieId9",gxvar:"AV33EspecieId9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33EspecieId9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33EspecieId9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEID9",gx.O.AV33EspecieId9,0)},c2v:function(){gx.O.AV33EspecieId9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEID9",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPECIEID10",gxz:"ZV25EspecieId10",gxold:"OV25EspecieId10",gxvar:"AV25EspecieId10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25EspecieId10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25EspecieId10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESPECIEID10",gx.O.AV25EspecieId10,0)},c2v:function(){gx.O.AV25EspecieId10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESPECIEID10",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[75]={fld:"TABLE3",grid:0};
   GXValidFnc[78]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAINI1",gxz:"ZV79NaturezaIni1",gxold:"OV79NaturezaIni1",gxvar:"AV79NaturezaIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79NaturezaIni1=Value},v2z:function(Value){gx.O.ZV79NaturezaIni1=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAINI1",gx.O.AV79NaturezaIni1,0)},c2v:function(){gx.O.AV79NaturezaIni1=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAINI1")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAFIN1",gxz:"ZV72NaturezaFin1",gxold:"OV72NaturezaFin1",gxvar:"AV72NaturezaFin1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72NaturezaFin1=Value},v2z:function(Value){gx.O.ZV72NaturezaFin1=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAFIN1",gx.O.AV72NaturezaFin1,0)},c2v:function(){gx.O.AV72NaturezaFin1=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAFIN1")},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAINI2",gxz:"ZV80NaturezaIni2",gxold:"OV80NaturezaIni2",gxvar:"AV80NaturezaIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80NaturezaIni2=Value},v2z:function(Value){gx.O.ZV80NaturezaIni2=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAINI2",gx.O.AV80NaturezaIni2,0)},c2v:function(){gx.O.AV80NaturezaIni2=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAINI2")},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAFIN2",gxz:"ZV73NaturezaFin2",gxold:"OV73NaturezaFin2",gxvar:"AV73NaturezaFin2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73NaturezaFin2=Value},v2z:function(Value){gx.O.ZV73NaturezaFin2=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAFIN2",gx.O.AV73NaturezaFin2,0)},c2v:function(){gx.O.AV73NaturezaFin2=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAFIN2")},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAINI3",gxz:"ZV81NaturezaIni3",gxold:"OV81NaturezaIni3",gxvar:"AV81NaturezaIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81NaturezaIni3=Value},v2z:function(Value){gx.O.ZV81NaturezaIni3=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAINI3",gx.O.AV81NaturezaIni3,0)},c2v:function(){gx.O.AV81NaturezaIni3=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAINI3")},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAFIN3",gxz:"ZV74NaturezaFin3",gxold:"OV74NaturezaFin3",gxvar:"AV74NaturezaFin3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74NaturezaFin3=Value},v2z:function(Value){gx.O.ZV74NaturezaFin3=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAFIN3",gx.O.AV74NaturezaFin3,0)},c2v:function(){gx.O.AV74NaturezaFin3=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAFIN3")},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAINI4",gxz:"ZV82NaturezaIni4",gxold:"OV82NaturezaIni4",gxvar:"AV82NaturezaIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82NaturezaIni4=Value},v2z:function(Value){gx.O.ZV82NaturezaIni4=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAINI4",gx.O.AV82NaturezaIni4,0)},c2v:function(){gx.O.AV82NaturezaIni4=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAINI4")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAFIN4",gxz:"ZV75NaturezaFin4",gxold:"OV75NaturezaFin4",gxvar:"AV75NaturezaFin4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75NaturezaFin4=Value},v2z:function(Value){gx.O.ZV75NaturezaFin4=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAFIN4",gx.O.AV75NaturezaFin4,0)},c2v:function(){gx.O.AV75NaturezaFin4=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAFIN4")},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAINI5",gxz:"ZV83NaturezaIni5",gxold:"OV83NaturezaIni5",gxvar:"AV83NaturezaIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83NaturezaIni5=Value},v2z:function(Value){gx.O.ZV83NaturezaIni5=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAINI5",gx.O.AV83NaturezaIni5,0)},c2v:function(){gx.O.AV83NaturezaIni5=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAINI5")},nac:gx.falseFn};
   GXValidFnc[106]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAFIN5",gxz:"ZV76NaturezaFin5",gxold:"OV76NaturezaFin5",gxvar:"AV76NaturezaFin5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76NaturezaFin5=Value},v2z:function(Value){gx.O.ZV76NaturezaFin5=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAFIN5",gx.O.AV76NaturezaFin5,0)},c2v:function(){gx.O.AV76NaturezaFin5=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAFIN5")},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAINI6",gxz:"ZV84NaturezaIni6",gxold:"OV84NaturezaIni6",gxvar:"AV84NaturezaIni6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84NaturezaIni6=Value},v2z:function(Value){gx.O.ZV84NaturezaIni6=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAINI6",gx.O.AV84NaturezaIni6,0)},c2v:function(){gx.O.AV84NaturezaIni6=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAINI6")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAFIN6",gxz:"ZV77NaturezaFin6",gxold:"OV77NaturezaFin6",gxvar:"AV77NaturezaFin6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77NaturezaFin6=Value},v2z:function(Value){gx.O.ZV77NaturezaFin6=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAFIN6",gx.O.AV77NaturezaFin6,0)},c2v:function(){gx.O.AV77NaturezaFin6=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAFIN6")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"JS", format:2,grid:0};
   GXValidFnc[127]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBRACODIGOIN",gxz:"ZV43ObraCodigoIn",gxold:"OV43ObraCodigoIn",gxvar:"AV43ObraCodigoIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ObraCodigoIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43ObraCodigoIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOBRACODIGOIN",gx.O.AV43ObraCodigoIn,0)},c2v:function(){gx.O.AV43ObraCodigoIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOBRACODIGOIN",'.')},nac:gx.falseFn};
   GXValidFnc[129]={fld:"BTNHELP",grid:0};
   GXValidFnc[131]={fld:"PROMPT_OBRACODIGO",grid:0};
   GXValidFnc[132]={fld:"PROMPT_TPNATUREZAMCC",grid:0};
   GXValidFnc[133]={fld:"PROMPT_TPNATUREZACUSTOS",grid:0};
   GXValidFnc[134]={fld:"PROMPT_TPNATUREZAOUTRASDESP",grid:0};
   GXValidFnc[135]={fld:"PROMPT_ESPECIEID1",grid:0};
   GXValidFnc[136]={fld:"PROMPT_ESPECIEID2",grid:0};
   GXValidFnc[137]={fld:"PROMPT_ESPECIEID3",grid:0};
   GXValidFnc[138]={fld:"PROMPT_ESPECIEID4",grid:0};
   GXValidFnc[139]={fld:"PROMPT_ESPECIEID5",grid:0};
   GXValidFnc[140]={fld:"PROMPT_ESPECIEID6",grid:0};
   GXValidFnc[141]={fld:"PROMPT_ESPECIEID7",grid:0};
   GXValidFnc[142]={fld:"PROMPT_ESPECIEID8",grid:0};
   GXValidFnc[143]={fld:"PROMPT_ESPECIEID9",grid:0};
   GXValidFnc[144]={fld:"PROMPT_ESPECIEID10",grid:0};
   GXValidFnc[145]={fld:"PROMPT_NATUREZAINI1",grid:0};
   GXValidFnc[146]={fld:"PROMPT_NATUREZAFIN1",grid:0};
   GXValidFnc[147]={fld:"PROMPT_NATUREZAINI2",grid:0};
   GXValidFnc[148]={fld:"PROMPT_NATUREZAFIN2",grid:0};
   GXValidFnc[149]={fld:"PROMPT_NATUREZAINI3",grid:0};
   GXValidFnc[150]={fld:"PROMPT_NATUREZAFIN3",grid:0};
   GXValidFnc[151]={fld:"PROMPT_NATUREZAINI4",grid:0};
   GXValidFnc[152]={fld:"PROMPT_NATUREZAFIN4",grid:0};
   GXValidFnc[153]={fld:"PROMPT_NATUREZAINI5",grid:0};
   GXValidFnc[154]={fld:"PROMPT_NATUREZAFIN5",grid:0};
   GXValidFnc[155]={fld:"PROMPT_NATUREZAINI6",grid:0};
   GXValidFnc[156]={fld:"PROMPT_NATUREZAFIN6",grid:0};
   this.AV37MesRef = 0 ;
   this.ZV37MesRef = 0 ;
   this.OV37MesRef = 0 ;
   this.AV5AnoRef = 0 ;
   this.ZV5AnoRef = 0 ;
   this.OV5AnoRef = 0 ;
   this.AV42ObraCodigo = 0 ;
   this.ZV42ObraCodigo = 0 ;
   this.OV42ObraCodigo = 0 ;
   this.AV45ObraNome = "" ;
   this.ZV45ObraNome = "" ;
   this.OV45ObraNome = "" ;
   this.AV60TpNaturezaMCC = 0 ;
   this.ZV60TpNaturezaMCC = 0 ;
   this.OV60TpNaturezaMCC = 0 ;
   this.AV61TpNaturezaMCCDesc = "" ;
   this.ZV61TpNaturezaMCCDesc = "" ;
   this.OV61TpNaturezaMCCDesc = "" ;
   this.AV58TpNaturezaCustos = 0 ;
   this.ZV58TpNaturezaCustos = 0 ;
   this.OV58TpNaturezaCustos = 0 ;
   this.AV59TpNaturezaCustosDesc = "" ;
   this.ZV59TpNaturezaCustosDesc = "" ;
   this.OV59TpNaturezaCustosDesc = "" ;
   this.AV63TpNaturezaOutrasDesp = 0 ;
   this.ZV63TpNaturezaOutrasDesp = 0 ;
   this.OV63TpNaturezaOutrasDesp = 0 ;
   this.AV62TpNaturezaOutDespDesc = "" ;
   this.ZV62TpNaturezaOutDespDesc = "" ;
   this.OV62TpNaturezaOutDespDesc = "" ;
   this.AV24EspecieId1 = 0 ;
   this.ZV24EspecieId1 = 0 ;
   this.OV24EspecieId1 = 0 ;
   this.AV26EspecieId2 = 0 ;
   this.ZV26EspecieId2 = 0 ;
   this.OV26EspecieId2 = 0 ;
   this.AV27EspecieId3 = 0 ;
   this.ZV27EspecieId3 = 0 ;
   this.OV27EspecieId3 = 0 ;
   this.AV28EspecieId4 = 0 ;
   this.ZV28EspecieId4 = 0 ;
   this.OV28EspecieId4 = 0 ;
   this.AV29EspecieId5 = 0 ;
   this.ZV29EspecieId5 = 0 ;
   this.OV29EspecieId5 = 0 ;
   this.AV30EspecieId6 = 0 ;
   this.ZV30EspecieId6 = 0 ;
   this.OV30EspecieId6 = 0 ;
   this.AV31EspecieId7 = 0 ;
   this.ZV31EspecieId7 = 0 ;
   this.OV31EspecieId7 = 0 ;
   this.AV32EspecieId8 = 0 ;
   this.ZV32EspecieId8 = 0 ;
   this.OV32EspecieId8 = 0 ;
   this.AV33EspecieId9 = 0 ;
   this.ZV33EspecieId9 = 0 ;
   this.OV33EspecieId9 = 0 ;
   this.AV25EspecieId10 = 0 ;
   this.ZV25EspecieId10 = 0 ;
   this.OV25EspecieId10 = 0 ;
   this.AV79NaturezaIni1 = "" ;
   this.ZV79NaturezaIni1 = "" ;
   this.OV79NaturezaIni1 = "" ;
   this.AV72NaturezaFin1 = "" ;
   this.ZV72NaturezaFin1 = "" ;
   this.OV72NaturezaFin1 = "" ;
   this.AV80NaturezaIni2 = "" ;
   this.ZV80NaturezaIni2 = "" ;
   this.OV80NaturezaIni2 = "" ;
   this.AV73NaturezaFin2 = "" ;
   this.ZV73NaturezaFin2 = "" ;
   this.OV73NaturezaFin2 = "" ;
   this.AV81NaturezaIni3 = "" ;
   this.ZV81NaturezaIni3 = "" ;
   this.OV81NaturezaIni3 = "" ;
   this.AV74NaturezaFin3 = "" ;
   this.ZV74NaturezaFin3 = "" ;
   this.OV74NaturezaFin3 = "" ;
   this.AV82NaturezaIni4 = "" ;
   this.ZV82NaturezaIni4 = "" ;
   this.OV82NaturezaIni4 = "" ;
   this.AV75NaturezaFin4 = "" ;
   this.ZV75NaturezaFin4 = "" ;
   this.OV75NaturezaFin4 = "" ;
   this.AV83NaturezaIni5 = "" ;
   this.ZV83NaturezaIni5 = "" ;
   this.OV83NaturezaIni5 = "" ;
   this.AV76NaturezaFin5 = "" ;
   this.ZV76NaturezaFin5 = "" ;
   this.OV76NaturezaFin5 = "" ;
   this.AV84NaturezaIni6 = "" ;
   this.ZV84NaturezaIni6 = "" ;
   this.OV84NaturezaIni6 = "" ;
   this.AV77NaturezaFin6 = "" ;
   this.ZV77NaturezaFin6 = "" ;
   this.OV77NaturezaFin6 = "" ;
   this.AV43ObraCodigoIn = 0 ;
   this.ZV43ObraCodigoIn = 0 ;
   this.OV43ObraCodigoIn = 0 ;
   this.AV37MesRef = 0 ;
   this.AV5AnoRef = 0 ;
   this.AV42ObraCodigo = 0 ;
   this.AV45ObraNome = "" ;
   this.AV60TpNaturezaMCC = 0 ;
   this.AV61TpNaturezaMCCDesc = "" ;
   this.AV58TpNaturezaCustos = 0 ;
   this.AV59TpNaturezaCustosDesc = "" ;
   this.AV63TpNaturezaOutrasDesp = 0 ;
   this.AV62TpNaturezaOutDespDesc = "" ;
   this.AV24EspecieId1 = 0 ;
   this.AV26EspecieId2 = 0 ;
   this.AV27EspecieId3 = 0 ;
   this.AV28EspecieId4 = 0 ;
   this.AV29EspecieId5 = 0 ;
   this.AV30EspecieId6 = 0 ;
   this.AV31EspecieId7 = 0 ;
   this.AV32EspecieId8 = 0 ;
   this.AV33EspecieId9 = 0 ;
   this.AV25EspecieId10 = 0 ;
   this.AV79NaturezaIni1 = "" ;
   this.AV72NaturezaFin1 = "" ;
   this.AV80NaturezaIni2 = "" ;
   this.AV73NaturezaFin2 = "" ;
   this.AV81NaturezaIni3 = "" ;
   this.AV74NaturezaFin3 = "" ;
   this.AV82NaturezaIni4 = "" ;
   this.AV75NaturezaFin4 = "" ;
   this.AV83NaturezaIni5 = "" ;
   this.AV76NaturezaFin5 = "" ;
   this.AV84NaturezaIni6 = "" ;
   this.AV77NaturezaFin6 = "" ;
   this.AV43ObraCodigoIn = 0 ;
   this.A11312ObraCodigo = 0 ;
   this.A11311ObraEmpresaId = "" ;
   this.A11372ObraNome = "" ;
   this.A395TipoNaturezaId = 0 ;
   this.A394EmpresaTipoNaturezaEmpresaId = "" ;
   this.A556TipoNaturezaDescricao = "" ;
   this.A938EspecieId = 0 ;
   this.A937EspecieEmpresaId = "" ;
   this.Events = {"e112g22_client": ["'FECHAR'", true] ,"e132g22_client": ["ENTER", true] ,"e142g22_client": ["VTPNATUREZAMCC.ISVALID", true] ,"e152g22_client": ["VTPNATUREZACUSTOS.ISVALID", true] ,"e162g22_client": ["VTPNATUREZAOUTRASDESP.ISVALID", true] ,"e172g22_client": ["VOBRACODIGO.ISVALID", true] ,"e192g22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV88Pgmname',fld:'vPGMNAME'},{av:'AV49QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37MesRef',fld:'vMESREF'},{av:'AV5AnoRef',fld:'vANOREF'},{av:'AV42ObraCodigo',fld:'vOBRACODIGO'},{av:'AV60TpNaturezaMCC',fld:'vTPNATUREZAMCC'},{av:'AV58TpNaturezaCustos',fld:'vTPNATUREZACUSTOS'},{av:'AV63TpNaturezaOutrasDesp',fld:'vTPNATUREZAOUTRASDESP'},{av:'AV24EspecieId1',fld:'vESPECIEID1'},{av:'AV26EspecieId2',fld:'vESPECIEID2'},{av:'AV27EspecieId3',fld:'vESPECIEID3'},{av:'AV28EspecieId4',fld:'vESPECIEID4'},{av:'AV29EspecieId5',fld:'vESPECIEID5'},{av:'AV30EspecieId6',fld:'vESPECIEID6'},{av:'AV31EspecieId7',fld:'vESPECIEID7'},{av:'AV32EspecieId8',fld:'vESPECIEID8'},{av:'AV33EspecieId9',fld:'vESPECIEID9'},{av:'AV25EspecieId10',fld:'vESPECIEID10'},{av:'AV79NaturezaIni1',fld:'vNATUREZAINI1'},{av:'AV72NaturezaFin1',fld:'vNATUREZAFIN1'},{av:'AV80NaturezaIni2',fld:'vNATUREZAINI2'},{av:'AV73NaturezaFin2',fld:'vNATUREZAFIN2'},{av:'AV81NaturezaIni3',fld:'vNATUREZAINI3'},{av:'AV74NaturezaFin3',fld:'vNATUREZAFIN3'},{av:'AV82NaturezaIni4',fld:'vNATUREZAINI4'},{av:'AV75NaturezaFin4',fld:'vNATUREZAFIN4'},{av:'AV83NaturezaIni5',fld:'vNATUREZAINI5'},{av:'AV76NaturezaFin5',fld:'vNATUREZAFIN5'},{av:'AV84NaturezaIni6',fld:'vNATUREZAINI6'},{av:'AV77NaturezaFin6',fld:'vNATUREZAFIN6'},{av:'AV89Pgmdesc',fld:'vPGMDESC'},{av:'A11311ObraEmpresaId',fld:'OBRAEMPRESAID'},{av:'AV44ObraEmpresaId',fld:'vOBRAEMPRESAID'},{av:'A11312ObraCodigo',fld:'OBRACODIGO'},{av:'A394EmpresaTipoNaturezaEmpresaId',fld:'EMPRESATIPONATUREZAEMPRESAID'},{av:'AV57TipoNaturezaEmpresaId',fld:'vTIPONATUREZAEMPRESAID'},{av:'A395TipoNaturezaId',fld:'TIPONATUREZAID'},{av:'AV23EspecieId',fld:'vESPECIEID'},{av:'A937EspecieEmpresaId',fld:'ESPECIEEMPRESAID'},{av:'AV22EspecieEmpresaId',fld:'vESPECIEEMPRESAID'},{av:'A938EspecieId',fld:'ESPECIEID'},{av:'AV78NaturezaIni',fld:'vNATUREZAINI'},{av:'AV71NaturezaFin',fld:'vNATUREZAFIN'},{av:'AV85SnNatureza',fld:'vSNNATUREZA'},{av:'AV53SnEspecie',fld:'vSNESPECIE'},{av:'AV20EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV41NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV40NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV77NaturezaFin6',fld:'vNATUREZAFIN6'},{av:'AV84NaturezaIni6',fld:'vNATUREZAINI6'},{av:'AV76NaturezaFin5',fld:'vNATUREZAFIN5'},{av:'AV83NaturezaIni5',fld:'vNATUREZAINI5'},{av:'AV75NaturezaFin4',fld:'vNATUREZAFIN4'},{av:'AV82NaturezaIni4',fld:'vNATUREZAINI4'},{av:'AV74NaturezaFin3',fld:'vNATUREZAFIN3'},{av:'AV81NaturezaIni3',fld:'vNATUREZAINI3'},{av:'AV73NaturezaFin2',fld:'vNATUREZAFIN2'},{av:'AV80NaturezaIni2',fld:'vNATUREZAINI2'},{av:'AV72NaturezaFin1',fld:'vNATUREZAFIN1'},{av:'AV79NaturezaIni1',fld:'vNATUREZAINI1'},{av:'AV25EspecieId10',fld:'vESPECIEID10'},{av:'AV33EspecieId9',fld:'vESPECIEID9'},{av:'AV32EspecieId8',fld:'vESPECIEID8'},{av:'AV31EspecieId7',fld:'vESPECIEID7'},{av:'AV30EspecieId6',fld:'vESPECIEID6'},{av:'AV29EspecieId5',fld:'vESPECIEID5'},{av:'AV28EspecieId4',fld:'vESPECIEID4'},{av:'AV27EspecieId3',fld:'vESPECIEID3'},{av:'AV26EspecieId2',fld:'vESPECIEID2'},{av:'AV24EspecieId1',fld:'vESPECIEID1'},{av:'AV63TpNaturezaOutrasDesp',fld:'vTPNATUREZAOUTRASDESP'},{av:'AV58TpNaturezaCustos',fld:'vTPNATUREZACUSTOS'},{av:'AV60TpNaturezaMCC',fld:'vTPNATUREZAMCC'},{av:'AV42ObraCodigo',fld:'vOBRACODIGO'},{av:'AV5AnoRef',fld:'vANOREF'},{av:'AV37MesRef',fld:'vMESREF'},{av:'AV49QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV90GXLvl101',fld:'vGXLVL101'},{av:'AV91GXLvl118',fld:'vGXLVL118'},{av:'AV92GXLvl135',fld:'vGXLVL135'},{av:'AV93GXLvl152',fld:'vGXLVL152'},{av:'AV65x',fld:'vX'},{av:'AV53SnEspecie',fld:'vSNESPECIE'},{av:'AV23EspecieId',fld:'vESPECIEID'},{av:'AV94GXLvl194',fld:'vGXLVL194'},{av:'AV85SnNatureza',fld:'vSNNATUREZA'},{av:'AV78NaturezaIni',fld:'vNATUREZAINI'},{av:'AV71NaturezaFin',fld:'vNATUREZAFIN'},{av:'AV70OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTPNATUREZAMCC.ISVALID"] = [[{av:'A394EmpresaTipoNaturezaEmpresaId',fld:'EMPRESATIPONATUREZAEMPRESAID'},{av:'AV57TipoNaturezaEmpresaId',fld:'vTIPONATUREZAEMPRESAID'},{av:'A395TipoNaturezaId',fld:'TIPONATUREZAID'},{av:'AV60TpNaturezaMCC',fld:'vTPNATUREZAMCC'},{av:'A556TipoNaturezaDescricao',fld:'TIPONATUREZADESCRICAO'}],[{av:'AV61TpNaturezaMCCDesc',fld:'vTPNATUREZAMCCDESC'}]];
   this.EvtParms["VTPNATUREZACUSTOS.ISVALID"] = [[{av:'A394EmpresaTipoNaturezaEmpresaId',fld:'EMPRESATIPONATUREZAEMPRESAID'},{av:'AV57TipoNaturezaEmpresaId',fld:'vTIPONATUREZAEMPRESAID'},{av:'A395TipoNaturezaId',fld:'TIPONATUREZAID'},{av:'AV58TpNaturezaCustos',fld:'vTPNATUREZACUSTOS'},{av:'A556TipoNaturezaDescricao',fld:'TIPONATUREZADESCRICAO'}],[{av:'AV59TpNaturezaCustosDesc',fld:'vTPNATUREZACUSTOSDESC'}]];
   this.EvtParms["VTPNATUREZAOUTRASDESP.ISVALID"] = [[{av:'A394EmpresaTipoNaturezaEmpresaId',fld:'EMPRESATIPONATUREZAEMPRESAID'},{av:'AV57TipoNaturezaEmpresaId',fld:'vTIPONATUREZAEMPRESAID'},{av:'A395TipoNaturezaId',fld:'TIPONATUREZAID'},{av:'AV63TpNaturezaOutrasDesp',fld:'vTPNATUREZAOUTRASDESP'},{av:'A556TipoNaturezaDescricao',fld:'TIPONATUREZADESCRICAO'}],[{av:'AV62TpNaturezaOutDespDesc',fld:'vTPNATUREZAOUTDESPDESC'}]];
   this.EvtParms["VOBRACODIGO.ISVALID"] = [[{av:'A11311ObraEmpresaId',fld:'OBRAEMPRESAID'},{av:'AV44ObraEmpresaId',fld:'vOBRAEMPRESAID'},{av:'A11312ObraCodigo',fld:'OBRACODIGO'},{av:'AV42ObraCodigo',fld:'vOBRACODIGO'},{av:'A11372ObraNome',fld:'OBRANOME'}],[{av:'AV45ObraNome',fld:'vOBRANOME'}]];
   this.setPrompt("PROMPT_OBRACODIGO", [25]);
   this.setPrompt("PROMPT_TPNATUREZAMCC", [31]);
   this.setPrompt("PROMPT_TPNATUREZACUSTOS", [37]);
   this.setPrompt("PROMPT_TPNATUREZAOUTRASDESP", [43]);
   this.setPrompt("PROMPT_ESPECIEID1", [52]);
   this.setPrompt("PROMPT_ESPECIEID2", [54]);
   this.setPrompt("PROMPT_ESPECIEID3", [56]);
   this.setPrompt("PROMPT_ESPECIEID4", [58]);
   this.setPrompt("PROMPT_ESPECIEID5", [60]);
   this.setPrompt("PROMPT_ESPECIEID6", [62]);
   this.setPrompt("PROMPT_ESPECIEID7", [64]);
   this.setPrompt("PROMPT_ESPECIEID8", [66]);
   this.setPrompt("PROMPT_ESPECIEID9", [68]);
   this.setPrompt("PROMPT_ESPECIEID10", [70]);
   this.setPrompt("PROMPT_NATUREZAINI1", [78]);
   this.setPrompt("PROMPT_NATUREZAFIN1", [82]);
   this.setPrompt("PROMPT_NATUREZAINI2", [84]);
   this.setPrompt("PROMPT_NATUREZAFIN2", [88]);
   this.setPrompt("PROMPT_NATUREZAINI3", [91]);
   this.setPrompt("PROMPT_NATUREZAFIN3", [95]);
   this.setPrompt("PROMPT_NATUREZAINI4", [97]);
   this.setPrompt("PROMPT_NATUREZAFIN4", [101]);
   this.setPrompt("PROMPT_NATUREZAINI5", [104]);
   this.setPrompt("PROMPT_NATUREZAFIN5", [108]);
   this.setPrompt("PROMPT_NATUREZAINI6", [110]);
   this.setPrompt("PROMPT_NATUREZAFIN6", [114]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaocustomensal());
