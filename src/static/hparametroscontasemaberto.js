/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:46:17.58
*/
gx.evt.autoSkip = false;
gx.define('hparametroscontasemaberto', false, function () {
   this.ServerClass =  "hparametroscontasemaberto" ;
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
   this.Validv_Ocorrenciacobranca=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOCORRENCIACOBRANCA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ocorrenciaaviso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOCORRENCIAAVISO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ocorrenciaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOCORRENCIAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121gc2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131gc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151gc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,21,24,26,27,30,32,35,37,40,42,45,47,49,51,54,56,58,60,61,64,67,69,72,74,76,79,81,83,86,88,91,93,95,98,100,102,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133];
   this.GXLastCtrlId =133;
   GXValidFnc[2]={fld:"TABLE9",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIASCOBRANCA",gxz:"ZV16QtdeDiasCobranca",gxold:"OV16QtdeDiasCobranca",gxvar:"AV16QtdeDiasCobranca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16QtdeDiasCobranca=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16QtdeDiasCobranca=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIASCOBRANCA",gx.O.AV16QtdeDiasCobranca,0)},c2v:function(){gx.O.AV16QtdeDiasCobranca=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIASCOBRANCA",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOLERANCIANOVACOBRANCA",gxz:"ZV17ToleranciaNovaCobranca",gxold:"OV17ToleranciaNovaCobranca",gxvar:"AV17ToleranciaNovaCobranca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ToleranciaNovaCobranca=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17ToleranciaNovaCobranca=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTOLERANCIANOVACOBRANCA",gx.O.AV17ToleranciaNovaCobranca,0)},c2v:function(){gx.O.AV17ToleranciaNovaCobranca=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTOLERANCIANOVACOBRANCA",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ocorrenciacobranca,isvalid:null,rgrid:[],fld:"vOCORRENCIACOBRANCA",gxz:"ZV18OcorrenciaCobranca",gxold:"OV18OcorrenciaCobranca",gxvar:"AV18OcorrenciaCobranca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18OcorrenciaCobranca=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18OcorrenciaCobranca=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIACOBRANCA",gx.O.AV18OcorrenciaCobranca,0)},c2v:function(){gx.O.AV18OcorrenciaCobranca=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIACOBRANCA",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOCORRENCIACOBRANCADESC",gxz:"ZV42OcorrenciaCobrancaDesc",gxold:"OV42OcorrenciaCobrancaDesc",gxvar:"AV42OcorrenciaCobrancaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42OcorrenciaCobrancaDesc=Value},v2z:function(Value){gx.O.ZV42OcorrenciaCobrancaDesc=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIACOBRANCADESC",gx.O.AV42OcorrenciaCobrancaDesc,0)},c2v:function(){gx.O.AV42OcorrenciaCobrancaDesc=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIACOBRANCADESC")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ocorrenciaaviso,isvalid:null,rgrid:[],fld:"vOCORRENCIAAVISO",gxz:"ZV19OcorrenciaAviso",gxold:"OV19OcorrenciaAviso",gxvar:"AV19OcorrenciaAviso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19OcorrenciaAviso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19OcorrenciaAviso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAAVISO",gx.O.AV19OcorrenciaAviso,0)},c2v:function(){gx.O.AV19OcorrenciaAviso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIAAVISO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOCORRENCIAAVISODESC",gxz:"ZV41OcorrenciaAvisoDesc",gxold:"OV41OcorrenciaAvisoDesc",gxvar:"AV41OcorrenciaAvisoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41OcorrenciaAvisoDesc=Value},v2z:function(Value){gx.O.ZV41OcorrenciaAvisoDesc=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIAAVISODESC",gx.O.AV41OcorrenciaAvisoDesc,0)},c2v:function(){gx.O.AV41OcorrenciaAvisoDesc=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIAAVISODESC")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIASPAGMTOPARCIAL",gxz:"ZV20QtdeDiasPagmtoParcial",gxold:"OV20QtdeDiasPagmtoParcial",gxvar:"AV20QtdeDiasPagmtoParcial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20QtdeDiasPagmtoParcial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20QtdeDiasPagmtoParcial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIASPAGMTOPARCIAL",gx.O.AV20QtdeDiasPagmtoParcial,0)},c2v:function(){gx.O.AV20QtdeDiasPagmtoParcial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIASPAGMTOPARCIAL",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIASULTIMOPAGMTO",gxz:"ZV21QtdeDiasUltimoPagmto",gxold:"OV21QtdeDiasUltimoPagmto",gxvar:"AV21QtdeDiasUltimoPagmto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21QtdeDiasUltimoPagmto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21QtdeDiasUltimoPagmto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIASULTIMOPAGMTO",gx.O.AV21QtdeDiasUltimoPagmto,0)},c2v:function(){gx.O.AV21QtdeDiasUltimoPagmto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIASULTIMOPAGMTO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLE6",grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBDESPREZAR1",gxz:"ZV22TipoCobDesprezar1",gxold:"OV22TipoCobDesprezar1",gxvar:"AV22TipoCobDesprezar1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22TipoCobDesprezar1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22TipoCobDesprezar1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBDESPREZAR1",gx.O.AV22TipoCobDesprezar1,0)},c2v:function(){gx.O.AV22TipoCobDesprezar1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBDESPREZAR1",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBDESPREZAR2",gxz:"ZV23TipoCobDesprezar2",gxold:"OV23TipoCobDesprezar2",gxvar:"AV23TipoCobDesprezar2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23TipoCobDesprezar2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23TipoCobDesprezar2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBDESPREZAR2",gx.O.AV23TipoCobDesprezar2,0)},c2v:function(){gx.O.AV23TipoCobDesprezar2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBDESPREZAR2",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBDESPREZAR3",gxz:"ZV24TipoCobDesprezar3",gxold:"OV24TipoCobDesprezar3",gxvar:"AV24TipoCobDesprezar3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TipoCobDesprezar3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24TipoCobDesprezar3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBDESPREZAR3",gx.O.AV24TipoCobDesprezar3,0)},c2v:function(){gx.O.AV24TipoCobDesprezar3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBDESPREZAR3",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBDESPREZAR4",gxz:"ZV25TipoCobDesprezar4",gxold:"OV25TipoCobDesprezar4",gxvar:"AV25TipoCobDesprezar4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TipoCobDesprezar4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25TipoCobDesprezar4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBDESPREZAR4",gx.O.AV25TipoCobDesprezar4,0)},c2v:function(){gx.O.AV25TipoCobDesprezar4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBDESPREZAR4",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBDESPREZAR5",gxz:"ZV26TipoCobDesprezar5",gxold:"OV26TipoCobDesprezar5",gxvar:"AV26TipoCobDesprezar5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TipoCobDesprezar5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26TipoCobDesprezar5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBDESPREZAR5",gx.O.AV26TipoCobDesprezar5,0)},c2v:function(){gx.O.AV26TipoCobDesprezar5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBDESPREZAR5",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBDESPREZAR6",gxz:"ZV27TipoCobDesprezar6",gxold:"OV27TipoCobDesprezar6",gxvar:"AV27TipoCobDesprezar6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TipoCobDesprezar6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TipoCobDesprezar6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBDESPREZAR6",gx.O.AV27TipoCobDesprezar6,0)},c2v:function(){gx.O.AV27TipoCobDesprezar6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBDESPREZAR6",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBDESPREZAR7",gxz:"ZV28TipoCobDesprezar7",gxold:"OV28TipoCobDesprezar7",gxvar:"AV28TipoCobDesprezar7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TipoCobDesprezar7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28TipoCobDesprezar7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBDESPREZAR7",gx.O.AV28TipoCobDesprezar7,0)},c2v:function(){gx.O.AV28TipoCobDesprezar7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBDESPREZAR7",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBDESPREZAR8",gxz:"ZV29TipoCobDesprezar8",gxold:"OV29TipoCobDesprezar8",gxvar:"AV29TipoCobDesprezar8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TipoCobDesprezar8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29TipoCobDesprezar8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBDESPREZAR8",gx.O.AV29TipoCobDesprezar8,0)},c2v:function(){gx.O.AV29TipoCobDesprezar8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBDESPREZAR8",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE8",grid:0};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[69]={fld:"TABLE4",grid:0};
   GXValidFnc[72]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTO1",gxz:"ZV13CentroCusto1",gxold:"OV13CentroCusto1",gxvar:"AV13CentroCusto1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13CentroCusto1=Value},v2z:function(Value){gx.O.ZV13CentroCusto1=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTO1",gx.O.AV13CentroCusto1,0)},c2v:function(){gx.O.AV13CentroCusto1=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTO1")},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTO2",gxz:"ZV30CentroCusto2",gxold:"OV30CentroCusto2",gxvar:"AV30CentroCusto2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30CentroCusto2=Value},v2z:function(Value){gx.O.ZV30CentroCusto2=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTO2",gx.O.AV30CentroCusto2,0)},c2v:function(){gx.O.AV30CentroCusto2=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTO2")},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTO3",gxz:"ZV31CentroCusto3",gxold:"OV31CentroCusto3",gxvar:"AV31CentroCusto3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31CentroCusto3=Value},v2z:function(Value){gx.O.ZV31CentroCusto3=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTO3",gx.O.AV31CentroCusto3,0)},c2v:function(){gx.O.AV31CentroCusto3=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTO3")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTO4",gxz:"ZV32CentroCusto4",gxold:"OV32CentroCusto4",gxvar:"AV32CentroCusto4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32CentroCusto4=Value},v2z:function(Value){gx.O.ZV32CentroCusto4=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTO4",gx.O.AV32CentroCusto4,0)},c2v:function(){gx.O.AV32CentroCusto4=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTO4")},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTO5",gxz:"ZV33CentroCusto5",gxold:"OV33CentroCusto5",gxvar:"AV33CentroCusto5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33CentroCusto5=Value},v2z:function(Value){gx.O.ZV33CentroCusto5=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTO5",gx.O.AV33CentroCusto5,0)},c2v:function(){gx.O.AV33CentroCusto5=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTO5")},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTO6",gxz:"ZV40CentroCusto6",gxold:"OV40CentroCusto6",gxvar:"AV40CentroCusto6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40CentroCusto6=Value},v2z:function(Value){gx.O.ZV40CentroCusto6=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTO6",gx.O.AV40CentroCusto6,0)},c2v:function(){gx.O.AV40CentroCusto6=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTO6")},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[88]={fld:"TABLE5",grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTA1",gxz:"ZV34TipoConta1",gxold:"OV34TipoConta1",gxvar:"AV34TipoConta1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TipoConta1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34TipoConta1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTA1",gx.O.AV34TipoConta1,0)},c2v:function(){gx.O.AV34TipoConta1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTA1",'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTA2",gxz:"ZV35TipoConta2",gxold:"OV35TipoConta2",gxvar:"AV35TipoConta2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35TipoConta2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35TipoConta2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTA2",gx.O.AV35TipoConta2,0)},c2v:function(){gx.O.AV35TipoConta2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTA2",'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTA3",gxz:"ZV36TipoConta3",gxold:"OV36TipoConta3",gxvar:"AV36TipoConta3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TipoConta3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36TipoConta3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTA3",gx.O.AV36TipoConta3,0)},c2v:function(){gx.O.AV36TipoConta3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTA3",'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTA4",gxz:"ZV37TipoConta4",gxold:"OV37TipoConta4",gxvar:"AV37TipoConta4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TipoConta4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37TipoConta4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTA4",gx.O.AV37TipoConta4,0)},c2v:function(){gx.O.AV37TipoConta4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTA4",'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTA5",gxz:"ZV38TipoConta5",gxold:"OV38TipoConta5",gxvar:"AV38TipoConta5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38TipoConta5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38TipoConta5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTA5",gx.O.AV38TipoConta5,0)},c2v:function(){gx.O.AV38TipoConta5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTA5",'.')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTA6",gxz:"ZV39TipoConta6",gxold:"OV39TipoConta6",gxvar:"AV39TipoConta6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39TipoConta6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39TipoConta6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONTA6",gx.O.AV39TipoConta6,0)},c2v:function(){gx.O.AV39TipoConta6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONTA6",'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ocorrenciaempresaid,isvalid:null,rgrid:[],fld:"vOCORRENCIAEMPRESAID",gxz:"ZV47OcorrenciaEmpresaId",gxold:"OV47OcorrenciaEmpresaId",gxvar:"AV47OcorrenciaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47OcorrenciaEmpresaId=Value},v2z:function(Value){gx.O.ZV47OcorrenciaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIAEMPRESAID",gx.O.AV47OcorrenciaEmpresaId,0)},c2v:function(){gx.O.AV47OcorrenciaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[111]={fld:"JS", format:2,grid:0};
   GXValidFnc[112]={fld:"PROMPT_OCORRENCIACOBRANCA",grid:0};
   GXValidFnc[113]={fld:"PROMPT_OCORRENCIAAVISO",grid:0};
   GXValidFnc[114]={fld:"PROMPT_TIPOCOBDESPREZAR1",grid:0};
   GXValidFnc[115]={fld:"PROMPT_TIPOCOBDESPREZAR2",grid:0};
   GXValidFnc[116]={fld:"PROMPT_TIPOCOBDESPREZAR3",grid:0};
   GXValidFnc[117]={fld:"PROMPT_TIPOCOBDESPREZAR4",grid:0};
   GXValidFnc[118]={fld:"PROMPT_TIPOCOBDESPREZAR5",grid:0};
   GXValidFnc[119]={fld:"PROMPT_TIPOCOBDESPREZAR6",grid:0};
   GXValidFnc[120]={fld:"PROMPT_TIPOCOBDESPREZAR7",grid:0};
   GXValidFnc[121]={fld:"PROMPT_TIPOCOBDESPREZAR8",grid:0};
   GXValidFnc[122]={fld:"PROMPT_CENTROCUSTO1",grid:0};
   GXValidFnc[123]={fld:"PROMPT_CENTROCUSTO2",grid:0};
   GXValidFnc[124]={fld:"PROMPT_CENTROCUSTO3",grid:0};
   GXValidFnc[125]={fld:"PROMPT_CENTROCUSTO4",grid:0};
   GXValidFnc[126]={fld:"PROMPT_CENTROCUSTO5",grid:0};
   GXValidFnc[127]={fld:"PROMPT_CENTROCUSTO6",grid:0};
   GXValidFnc[128]={fld:"PROMPT_TIPOCONTA1",grid:0};
   GXValidFnc[129]={fld:"PROMPT_TIPOCONTA2",grid:0};
   GXValidFnc[130]={fld:"PROMPT_TIPOCONTA3",grid:0};
   GXValidFnc[131]={fld:"PROMPT_TIPOCONTA4",grid:0};
   GXValidFnc[132]={fld:"PROMPT_TIPOCONTA5",grid:0};
   GXValidFnc[133]={fld:"PROMPT_TIPOCONTA6",grid:0};
   this.AV16QtdeDiasCobranca = 0 ;
   this.ZV16QtdeDiasCobranca = 0 ;
   this.OV16QtdeDiasCobranca = 0 ;
   this.AV17ToleranciaNovaCobranca = 0 ;
   this.ZV17ToleranciaNovaCobranca = 0 ;
   this.OV17ToleranciaNovaCobranca = 0 ;
   this.AV18OcorrenciaCobranca = 0 ;
   this.ZV18OcorrenciaCobranca = 0 ;
   this.OV18OcorrenciaCobranca = 0 ;
   this.AV42OcorrenciaCobrancaDesc = "" ;
   this.ZV42OcorrenciaCobrancaDesc = "" ;
   this.OV42OcorrenciaCobrancaDesc = "" ;
   this.AV19OcorrenciaAviso = 0 ;
   this.ZV19OcorrenciaAviso = 0 ;
   this.OV19OcorrenciaAviso = 0 ;
   this.AV41OcorrenciaAvisoDesc = "" ;
   this.ZV41OcorrenciaAvisoDesc = "" ;
   this.OV41OcorrenciaAvisoDesc = "" ;
   this.AV20QtdeDiasPagmtoParcial = 0 ;
   this.ZV20QtdeDiasPagmtoParcial = 0 ;
   this.OV20QtdeDiasPagmtoParcial = 0 ;
   this.AV21QtdeDiasUltimoPagmto = 0 ;
   this.ZV21QtdeDiasUltimoPagmto = 0 ;
   this.OV21QtdeDiasUltimoPagmto = 0 ;
   this.AV22TipoCobDesprezar1 = 0 ;
   this.ZV22TipoCobDesprezar1 = 0 ;
   this.OV22TipoCobDesprezar1 = 0 ;
   this.AV23TipoCobDesprezar2 = 0 ;
   this.ZV23TipoCobDesprezar2 = 0 ;
   this.OV23TipoCobDesprezar2 = 0 ;
   this.AV24TipoCobDesprezar3 = 0 ;
   this.ZV24TipoCobDesprezar3 = 0 ;
   this.OV24TipoCobDesprezar3 = 0 ;
   this.AV25TipoCobDesprezar4 = 0 ;
   this.ZV25TipoCobDesprezar4 = 0 ;
   this.OV25TipoCobDesprezar4 = 0 ;
   this.AV26TipoCobDesprezar5 = 0 ;
   this.ZV26TipoCobDesprezar5 = 0 ;
   this.OV26TipoCobDesprezar5 = 0 ;
   this.AV27TipoCobDesprezar6 = 0 ;
   this.ZV27TipoCobDesprezar6 = 0 ;
   this.OV27TipoCobDesprezar6 = 0 ;
   this.AV28TipoCobDesprezar7 = 0 ;
   this.ZV28TipoCobDesprezar7 = 0 ;
   this.OV28TipoCobDesprezar7 = 0 ;
   this.AV29TipoCobDesprezar8 = 0 ;
   this.ZV29TipoCobDesprezar8 = 0 ;
   this.OV29TipoCobDesprezar8 = 0 ;
   this.AV13CentroCusto1 = "" ;
   this.ZV13CentroCusto1 = "" ;
   this.OV13CentroCusto1 = "" ;
   this.AV30CentroCusto2 = "" ;
   this.ZV30CentroCusto2 = "" ;
   this.OV30CentroCusto2 = "" ;
   this.AV31CentroCusto3 = "" ;
   this.ZV31CentroCusto3 = "" ;
   this.OV31CentroCusto3 = "" ;
   this.AV32CentroCusto4 = "" ;
   this.ZV32CentroCusto4 = "" ;
   this.OV32CentroCusto4 = "" ;
   this.AV33CentroCusto5 = "" ;
   this.ZV33CentroCusto5 = "" ;
   this.OV33CentroCusto5 = "" ;
   this.AV40CentroCusto6 = "" ;
   this.ZV40CentroCusto6 = "" ;
   this.OV40CentroCusto6 = "" ;
   this.AV34TipoConta1 = 0 ;
   this.ZV34TipoConta1 = 0 ;
   this.OV34TipoConta1 = 0 ;
   this.AV35TipoConta2 = 0 ;
   this.ZV35TipoConta2 = 0 ;
   this.OV35TipoConta2 = 0 ;
   this.AV36TipoConta3 = 0 ;
   this.ZV36TipoConta3 = 0 ;
   this.OV36TipoConta3 = 0 ;
   this.AV37TipoConta4 = 0 ;
   this.ZV37TipoConta4 = 0 ;
   this.OV37TipoConta4 = 0 ;
   this.AV38TipoConta5 = 0 ;
   this.ZV38TipoConta5 = 0 ;
   this.OV38TipoConta5 = 0 ;
   this.AV39TipoConta6 = 0 ;
   this.ZV39TipoConta6 = 0 ;
   this.OV39TipoConta6 = 0 ;
   this.AV47OcorrenciaEmpresaId = "" ;
   this.ZV47OcorrenciaEmpresaId = "" ;
   this.OV47OcorrenciaEmpresaId = "" ;
   this.AV16QtdeDiasCobranca = 0 ;
   this.AV17ToleranciaNovaCobranca = 0 ;
   this.AV18OcorrenciaCobranca = 0 ;
   this.AV42OcorrenciaCobrancaDesc = "" ;
   this.AV19OcorrenciaAviso = 0 ;
   this.AV41OcorrenciaAvisoDesc = "" ;
   this.AV20QtdeDiasPagmtoParcial = 0 ;
   this.AV21QtdeDiasUltimoPagmto = 0 ;
   this.AV22TipoCobDesprezar1 = 0 ;
   this.AV23TipoCobDesprezar2 = 0 ;
   this.AV24TipoCobDesprezar3 = 0 ;
   this.AV25TipoCobDesprezar4 = 0 ;
   this.AV26TipoCobDesprezar5 = 0 ;
   this.AV27TipoCobDesprezar6 = 0 ;
   this.AV28TipoCobDesprezar7 = 0 ;
   this.AV29TipoCobDesprezar8 = 0 ;
   this.AV13CentroCusto1 = "" ;
   this.AV30CentroCusto2 = "" ;
   this.AV31CentroCusto3 = "" ;
   this.AV32CentroCusto4 = "" ;
   this.AV33CentroCusto5 = "" ;
   this.AV40CentroCusto6 = "" ;
   this.AV34TipoConta1 = 0 ;
   this.AV35TipoConta2 = 0 ;
   this.AV36TipoConta3 = 0 ;
   this.AV37TipoConta4 = 0 ;
   this.AV38TipoConta5 = 0 ;
   this.AV39TipoConta6 = 0 ;
   this.AV47OcorrenciaEmpresaId = "" ;
   this.A973Ocorrenciaid = 0 ;
   this.A972OcorrenciaEmpresaId = "" ;
   this.A974OcorrenciaDescricao = "" ;
   this.A942TipoContaId = 0 ;
   this.A941TipoContaEmpresaId = "" ;
   this.A51CentroCustoId = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.A991TipoCobrancaEmpresaId = "" ;
   this.Events = {"e121gc2_client": ["ENTER", true] ,"e131gc2_client": ["'FECHAR'", true] ,"e151gc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV49TpErro',fld:'vTPERRO'},{av:'AV17ToleranciaNovaCobranca',fld:'vTOLERANCIANOVACOBRANCA'},{av:'AV18OcorrenciaCobranca',fld:'vOCORRENCIACOBRANCA'},{av:'A972OcorrenciaEmpresaId',fld:'OCORRENCIAEMPRESAID'},{av:'AV47OcorrenciaEmpresaId',fld:'vOCORRENCIAEMPRESAID'},{av:'A973Ocorrenciaid',fld:'OCORRENCIAID'},{av:'AV19OcorrenciaAviso',fld:'vOCORRENCIAAVISO'},{av:'AV22TipoCobDesprezar1',fld:'vTIPOCOBDESPREZAR1'},{av:'AV23TipoCobDesprezar2',fld:'vTIPOCOBDESPREZAR2'},{av:'AV24TipoCobDesprezar3',fld:'vTIPOCOBDESPREZAR3'},{av:'AV25TipoCobDesprezar4',fld:'vTIPOCOBDESPREZAR4'},{av:'AV26TipoCobDesprezar5',fld:'vTIPOCOBDESPREZAR5'},{av:'AV27TipoCobDesprezar6',fld:'vTIPOCOBDESPREZAR6'},{av:'AV28TipoCobDesprezar7',fld:'vTIPOCOBDESPREZAR7'},{av:'AV29TipoCobDesprezar8',fld:'vTIPOCOBDESPREZAR8'},{av:'AV13CentroCusto1',fld:'vCENTROCUSTO1'},{av:'AV30CentroCusto2',fld:'vCENTROCUSTO2'},{av:'AV31CentroCusto3',fld:'vCENTROCUSTO3'},{av:'AV32CentroCusto4',fld:'vCENTROCUSTO4'},{av:'AV33CentroCusto5',fld:'vCENTROCUSTO5'},{av:'AV40CentroCusto6',fld:'vCENTROCUSTO6'},{av:'AV34TipoConta1',fld:'vTIPOCONTA1'},{av:'AV35TipoConta2',fld:'vTIPOCONTA2'},{av:'AV36TipoConta3',fld:'vTIPOCONTA3'},{av:'AV37TipoConta4',fld:'vTIPOCONTA4'},{av:'AV38TipoConta5',fld:'vTIPOCONTA5'},{av:'AV39TipoConta6',fld:'vTIPOCONTA6'},{av:'AV16QtdeDiasCobranca',fld:'vQTDEDIASCOBRANCA'},{av:'AV20QtdeDiasPagmtoParcial',fld:'vQTDEDIASPAGMTOPARCIAL'},{av:'AV21QtdeDiasUltimoPagmto',fld:'vQTDEDIASULTIMOPAGMTO'},{av:'A991TipoCobrancaEmpresaId',fld:'TIPOCOBRANCAEMPRESAID'},{av:'AV56TipoCobrancaEmpresaId',fld:'vTIPOCOBRANCAEMPRESAID'},{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'AV51TipoCobranca',fld:'vTIPOCOBRANCA'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'AV55CCustoEmpresaId',fld:'vCCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV52CentroCusto',fld:'vCENTROCUSTO'},{av:'A941TipoContaEmpresaId',fld:'TIPOCONTAEMPRESAID'},{av:'AV54TipoContaEmpresaId',fld:'vTIPOCONTAEMPRESAID'},{av:'A942TipoContaId',fld:'TIPOCONTAID'},{av:'AV53TipoConta',fld:'vTIPOCONTA'}],[{av:'AV49TpErro',fld:'vTPERRO'},{av:'AV61GXLvl71',fld:'vGXLVL71'},{av:'AV62GXLvl82',fld:'vGXLVL82'},{av:'AV50x',fld:'vX'},{av:'AV51TipoCobranca',fld:'vTIPOCOBRANCA'},{av:'AV52CentroCusto',fld:'vCENTROCUSTO'},{av:'AV53TipoConta',fld:'vTIPOCONTA'},{av:'AV58Arquivo',fld:'vARQUIVO'},{av:'AV57i',fld:'vI'},{av:'AV63GXLvl219',fld:'vGXLVL219'},{av:'AV64GXLvl229',fld:'vGXLVL229'},{av:'AV65GXLvl239',fld:'vGXLVL239'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_OCORRENCIACOBRANCA", [20]);
   this.setPrompt("PROMPT_OCORRENCIAAVISO", [26]);
   this.setPrompt("PROMPT_TIPOCOBDESPREZAR1", [45]);
   this.setPrompt("PROMPT_TIPOCOBDESPREZAR2", [47]);
   this.setPrompt("PROMPT_TIPOCOBDESPREZAR3", [49]);
   this.setPrompt("PROMPT_TIPOCOBDESPREZAR4", [51]);
   this.setPrompt("PROMPT_TIPOCOBDESPREZAR5", [54]);
   this.setPrompt("PROMPT_TIPOCOBDESPREZAR6", [56]);
   this.setPrompt("PROMPT_TIPOCOBDESPREZAR7", [58]);
   this.setPrompt("PROMPT_TIPOCOBDESPREZAR8", [60]);
   this.setPrompt("PROMPT_CENTROCUSTO1", [72]);
   this.setPrompt("PROMPT_CENTROCUSTO2", [74]);
   this.setPrompt("PROMPT_CENTROCUSTO3", [76]);
   this.setPrompt("PROMPT_CENTROCUSTO4", [79]);
   this.setPrompt("PROMPT_CENTROCUSTO5", [81]);
   this.setPrompt("PROMPT_CENTROCUSTO6", [83]);
   this.setPrompt("PROMPT_TIPOCONTA1", [91]);
   this.setPrompt("PROMPT_TIPOCONTA2", [93]);
   this.setPrompt("PROMPT_TIPOCONTA3", [95]);
   this.setPrompt("PROMPT_TIPOCONTA4", [98]);
   this.setPrompt("PROMPT_TIPOCONTA5", [100]);
   this.setPrompt("PROMPT_TIPOCONTA6", [102]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hparametroscontasemaberto());
