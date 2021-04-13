/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:19:38.86
*/
gx.evt.autoSkip = false;
gx.define('hparametrosecommerce', false, function () {
   this.ServerClass =  "hparametrosecommerce" ;
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
      this.AV10EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.Validv_Clasubcatfam=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASUBCATFAM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Claecomarca=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLAECOMARCA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ns1classificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNS1CLASSIFICACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ns2classificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNS2CLASSIFICACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ns3classificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNS3CLASSIFICACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ns4classificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNS4CLASSIFICACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ns5classificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNS5CLASSIFICACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e172gj1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms11",[this.AV10EmpresaLogadaId, "IEC", "FILIALECOMMERCE", "PRECOVENECOM", "PRECOCUSTOECOM", "CHAVEAPI", "CHAVEAPLICACAO", "PERIODICIDADATU", "TRNECOMMERCE", "VENPADECOMMERCE", "CLASUBCATFAM", "TIPOPRODUTOECO", "CLAECOMARCA"]), []);
      this.refreshOutputs([]);
   };
   this.e182gj1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hconsultapreco",[""]), ["AV21PRECOVENECOM"]);
      this.refreshOutputs([{av:'AV21PRECOVENECOM',fld:'vPRECOVENECOM'}]);
   };
   this.e192gj1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hconsultapreco",[""]), ["AV19PRECOCUSTOECOM"]);
      this.refreshOutputs([{av:'AV19PRECOCUSTOECOM',fld:'vPRECOCUSTOECOM'}]);
   };
   this.e202gj1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hconsultatransacaosaida",["N", ""]), ["AV30TRNECOMMERCE"]);
      this.refreshOutputs([{av:'AV30TRNECOMMERCE',fld:'vTRNECOMMERCE'}]);
   };
   this.e122gj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132gj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152gj2_client=function()
   {
      this.executeServerEvent("VTIPOCATEGORIA.CLICK", true, null, false, true);
   };
   this.e162gj2_client=function()
   {
      this.executeServerEvent("VTIPOMARCA.CLICK", true, null, false, true);
   };
   this.e212gj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,19,22,24,25,28,30,33,35,38,40,43,45,46,49,51,54,56,59,61,64,66,69,71,74,76,79,81,84,86,88,90,92,98,105,106,107,108,109,110,111,112,113,114];
   this.GXLastCtrlId =114;
   GXValidFnc[2]={fld:"TABLE8",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALECOMMERCE",gxz:"ZV12FILIALECOMMERCE",gxold:"OV12FILIALECOMMERCE",gxvar:"AV12FILIALECOMMERCE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12FILIALECOMMERCE=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12FILIALECOMMERCE=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALECOMMERCE",gx.O.AV12FILIALECOMMERCE,0)},c2v:function(){gx.O.AV12FILIALECOMMERCE=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALECOMMERCE",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOVENECOM",gxz:"ZV21PRECOVENECOM",gxold:"OV21PRECOVENECOM",gxvar:"AV21PRECOVENECOM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PRECOVENECOM=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PRECOVENECOM=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOVENECOM",gx.O.AV21PRECOVENECOM,0)},c2v:function(){gx.O.AV21PRECOVENECOM=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOVENECOM",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"IMAGE1",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOCUSTOECOM",gxz:"ZV19PRECOCUSTOECOM",gxold:"OV19PRECOCUSTOECOM",gxvar:"AV19PRECOCUSTOECOM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PRECOCUSTOECOM=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PRECOCUSTOECOM=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOCUSTOECOM",gx.O.AV19PRECOCUSTOECOM,0)},c2v:function(){gx.O.AV19PRECOCUSTOECOM=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOCUSTOECOM",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"IMAGE2",grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAVEAPI",gxz:"ZV7CHAVEAPI",gxold:"OV7CHAVEAPI",gxvar:"AV7CHAVEAPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7CHAVEAPI=Value},v2z:function(Value){gx.O.ZV7CHAVEAPI=Value},v2c:function(){gx.fn.setControlValue("vCHAVEAPI",gx.O.AV7CHAVEAPI,0)},c2v:function(){gx.O.AV7CHAVEAPI=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEAPI")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAVEAPLICACAO",gxz:"ZV8CHAVEAPLICACAO",gxold:"OV8CHAVEAPLICACAO",gxvar:"AV8CHAVEAPLICACAO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8CHAVEAPLICACAO=Value},v2z:function(Value){gx.O.ZV8CHAVEAPLICACAO=Value},v2c:function(){gx.fn.setControlValue("vCHAVEAPLICACAO",gx.O.AV8CHAVEAPLICACAO,0)},c2v:function(){gx.O.AV8CHAVEAPLICACAO=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEAPLICACAO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERIODICIDADATU",gxz:"ZV17PERIODICIDADATU",gxold:"OV17PERIODICIDADATU",gxvar:"AV17PERIODICIDADATU",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PERIODICIDADATU=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PERIODICIDADATU=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPERIODICIDADATU",gx.O.AV17PERIODICIDADATU,0)},c2v:function(){gx.O.AV17PERIODICIDADATU=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPERIODICIDADATU",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNECOMMERCE",gxz:"ZV30TRNECOMMERCE",gxold:"OV30TRNECOMMERCE",gxvar:"AV30TRNECOMMERCE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TRNECOMMERCE=Value},v2z:function(Value){gx.O.ZV30TRNECOMMERCE=Value},v2c:function(){gx.fn.setControlValue("vTRNECOMMERCE",gx.O.AV30TRNECOMMERCE,0)},c2v:function(){gx.O.AV30TRNECOMMERCE=this.val()},val:function(){return gx.fn.getControlValue("vTRNECOMMERCE")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"IMAGE3",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORID",gxz:"ZV45Vendedorid",gxold:"OV45Vendedorid",gxvar:"AV45Vendedorid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45Vendedorid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45Vendedorid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORID",gx.O.AV45Vendedorid,0)},c2v:function(){gx.O.AV45Vendedorid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[56]={fld:"TABLE3",grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCATEGORIA",gxz:"ZV42TipoCategoria",gxold:"OV42TipoCategoria",gxvar:"AV42TipoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV42TipoCategoria=Value},v2z:function(Value){gx.O.ZV42TipoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCATEGORIA",gx.O.AV42TipoCategoria)},c2v:function(){gx.O.AV42TipoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Clasubcatfam,isvalid:null,rgrid:[],fld:"vCLASUBCATFAM",gxz:"ZV35CLASUBCATFAM",gxold:"OV35CLASUBCATFAM",gxvar:"AV35CLASUBCATFAM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35CLASUBCATFAM=Value},v2z:function(Value){gx.O.ZV35CLASUBCATFAM=Value},v2c:function(){gx.fn.setControlValue("vCLASUBCATFAM",gx.O.AV35CLASUBCATFAM,0)},c2v:function(){gx.O.AV35CLASUBCATFAM=this.val()},val:function(){return gx.fn.getControlValue("vCLASUBCATFAM")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPRODUTOECO",gxz:"ZV44TIPOPRODUTOECO",gxold:"OV44TIPOPRODUTOECO",gxvar:"AV44TIPOPRODUTOECO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44TIPOPRODUTOECO=Value},v2z:function(Value){gx.O.ZV44TIPOPRODUTOECO=Value},v2c:function(){gx.fn.setControlValue("vTIPOPRODUTOECO",gx.O.AV44TIPOPRODUTOECO,0)},c2v:function(){gx.O.AV44TIPOPRODUTOECO=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPRODUTOECO")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[71]={fld:"TABLE6",grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOMARCA",gxz:"ZV43TipoMarca",gxold:"OV43TipoMarca",gxvar:"AV43TipoMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV43TipoMarca=Value},v2z:function(Value){gx.O.ZV43TipoMarca=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOMARCA",gx.O.AV43TipoMarca)},c2v:function(){gx.O.AV43TipoMarca=this.val()},val:function(){return gx.fn.getControlValue("vTIPOMARCA")},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Claecomarca,isvalid:null,rgrid:[],fld:"vCLAECOMARCA",gxz:"ZV33CLAECOMARCA",gxold:"OV33CLAECOMARCA",gxvar:"AV33CLAECOMARCA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33CLAECOMARCA=Value},v2z:function(Value){gx.O.ZV33CLAECOMARCA=Value},v2c:function(){gx.fn.setControlValue("vCLAECOMARCA",gx.O.AV33CLAECOMARCA,0)},c2v:function(){gx.O.AV33CLAECOMARCA=this.val()},val:function(){return gx.fn.getControlValue("vCLAECOMARCA")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"NAOENVIAR", format:0,grid:0};
   GXValidFnc[81]={fld:"TABLENAOENVIAR",grid:0};
   GXValidFnc[84]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ns1classificacaoid,isvalid:null,rgrid:[],fld:"vNS1CLASSIFICACAOID",gxz:"ZV36NS1ClassificacaoId",gxold:"OV36NS1ClassificacaoId",gxvar:"AV36NS1ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36NS1ClassificacaoId=Value},v2z:function(Value){gx.O.ZV36NS1ClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vNS1CLASSIFICACAOID",gx.O.AV36NS1ClassificacaoId,0)},c2v:function(){gx.O.AV36NS1ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vNS1CLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ns2classificacaoid,isvalid:null,rgrid:[],fld:"vNS2CLASSIFICACAOID",gxz:"ZV37NS2ClassificacaoId",gxold:"OV37NS2ClassificacaoId",gxvar:"AV37NS2ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37NS2ClassificacaoId=Value},v2z:function(Value){gx.O.ZV37NS2ClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vNS2CLASSIFICACAOID",gx.O.AV37NS2ClassificacaoId,0)},c2v:function(){gx.O.AV37NS2ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vNS2CLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ns3classificacaoid,isvalid:null,rgrid:[],fld:"vNS3CLASSIFICACAOID",gxz:"ZV38NS3ClassificacaoId",gxold:"OV38NS3ClassificacaoId",gxvar:"AV38NS3ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38NS3ClassificacaoId=Value},v2z:function(Value){gx.O.ZV38NS3ClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vNS3CLASSIFICACAOID",gx.O.AV38NS3ClassificacaoId,0)},c2v:function(){gx.O.AV38NS3ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vNS3CLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ns4classificacaoid,isvalid:null,rgrid:[],fld:"vNS4CLASSIFICACAOID",gxz:"ZV39NS4ClassificacaoId",gxold:"OV39NS4ClassificacaoId",gxvar:"AV39NS4ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39NS4ClassificacaoId=Value},v2z:function(Value){gx.O.ZV39NS4ClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vNS4CLASSIFICACAOID",gx.O.AV39NS4ClassificacaoId,0)},c2v:function(){gx.O.AV39NS4ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vNS4CLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ns5classificacaoid,isvalid:null,rgrid:[],fld:"vNS5CLASSIFICACAOID",gxz:"ZV40NS5ClassificacaoId",gxold:"OV40NS5ClassificacaoId",gxvar:"AV40NS5ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40NS5ClassificacaoId=Value},v2z:function(Value){gx.O.ZV40NS5ClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vNS5CLASSIFICACAOID",gx.O.AV40NS5ClassificacaoId,0)},c2v:function(){gx.O.AV40NS5ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vNS5CLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TABLE1",grid:0};
   GXValidFnc[105]={fld:"BTNOBS",grid:0};
   GXValidFnc[106]={fld:"PROMPT_FILIALECOMMERCE",grid:0};
   GXValidFnc[107]={fld:"PROMPT_VENDEDORID",grid:0};
   GXValidFnc[108]={fld:"PROMPT_CLASUBCATFAM",grid:0};
   GXValidFnc[109]={fld:"PROMPT_CLAECOMARCA",grid:0};
   GXValidFnc[110]={fld:"PROMPT_NS1CLASSIFICACAOID",grid:0};
   GXValidFnc[111]={fld:"PROMPT_NS2CLASSIFICACAOID",grid:0};
   GXValidFnc[112]={fld:"PROMPT_NS3CLASSIFICACAOID",grid:0};
   GXValidFnc[113]={fld:"PROMPT_NS4CLASSIFICACAOID",grid:0};
   GXValidFnc[114]={fld:"PROMPT_NS5CLASSIFICACAOID",grid:0};
   this.AV12FILIALECOMMERCE = 0 ;
   this.ZV12FILIALECOMMERCE = 0 ;
   this.OV12FILIALECOMMERCE = 0 ;
   this.AV21PRECOVENECOM = 0 ;
   this.ZV21PRECOVENECOM = 0 ;
   this.OV21PRECOVENECOM = 0 ;
   this.AV19PRECOCUSTOECOM = 0 ;
   this.ZV19PRECOCUSTOECOM = 0 ;
   this.OV19PRECOCUSTOECOM = 0 ;
   this.AV7CHAVEAPI = "" ;
   this.ZV7CHAVEAPI = "" ;
   this.OV7CHAVEAPI = "" ;
   this.AV8CHAVEAPLICACAO = "" ;
   this.ZV8CHAVEAPLICACAO = "" ;
   this.OV8CHAVEAPLICACAO = "" ;
   this.AV17PERIODICIDADATU = 0 ;
   this.ZV17PERIODICIDADATU = 0 ;
   this.OV17PERIODICIDADATU = 0 ;
   this.AV30TRNECOMMERCE = "" ;
   this.ZV30TRNECOMMERCE = "" ;
   this.OV30TRNECOMMERCE = "" ;
   this.AV45Vendedorid = 0 ;
   this.ZV45Vendedorid = 0 ;
   this.OV45Vendedorid = 0 ;
   this.AV42TipoCategoria = "" ;
   this.ZV42TipoCategoria = "" ;
   this.OV42TipoCategoria = "" ;
   this.AV35CLASUBCATFAM = "" ;
   this.ZV35CLASUBCATFAM = "" ;
   this.OV35CLASUBCATFAM = "" ;
   this.AV44TIPOPRODUTOECO = "" ;
   this.ZV44TIPOPRODUTOECO = "" ;
   this.OV44TIPOPRODUTOECO = "" ;
   this.AV43TipoMarca = "" ;
   this.ZV43TipoMarca = "" ;
   this.OV43TipoMarca = "" ;
   this.AV33CLAECOMARCA = "" ;
   this.ZV33CLAECOMARCA = "" ;
   this.OV33CLAECOMARCA = "" ;
   this.AV36NS1ClassificacaoId = "" ;
   this.ZV36NS1ClassificacaoId = "" ;
   this.OV36NS1ClassificacaoId = "" ;
   this.AV37NS2ClassificacaoId = "" ;
   this.ZV37NS2ClassificacaoId = "" ;
   this.OV37NS2ClassificacaoId = "" ;
   this.AV38NS3ClassificacaoId = "" ;
   this.ZV38NS3ClassificacaoId = "" ;
   this.OV38NS3ClassificacaoId = "" ;
   this.AV39NS4ClassificacaoId = "" ;
   this.ZV39NS4ClassificacaoId = "" ;
   this.OV39NS4ClassificacaoId = "" ;
   this.AV40NS5ClassificacaoId = "" ;
   this.ZV40NS5ClassificacaoId = "" ;
   this.OV40NS5ClassificacaoId = "" ;
   this.AV12FILIALECOMMERCE = 0 ;
   this.AV21PRECOVENECOM = 0 ;
   this.AV19PRECOCUSTOECOM = 0 ;
   this.AV7CHAVEAPI = "" ;
   this.AV8CHAVEAPLICACAO = "" ;
   this.AV17PERIODICIDADATU = 0 ;
   this.AV30TRNECOMMERCE = "" ;
   this.AV45Vendedorid = 0 ;
   this.AV42TipoCategoria = "" ;
   this.AV35CLASUBCATFAM = "" ;
   this.AV44TIPOPRODUTOECO = "" ;
   this.AV43TipoMarca = "" ;
   this.AV33CLAECOMARCA = "" ;
   this.AV36NS1ClassificacaoId = "" ;
   this.AV37NS2ClassificacaoId = "" ;
   this.AV38NS3ClassificacaoId = "" ;
   this.AV39NS4ClassificacaoId = "" ;
   this.AV40NS5ClassificacaoId = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.Events = {"e122gj2_client": ["ENTER", true] ,"e132gj2_client": ["'FECHAR'", true] ,"e152gj2_client": ["VTIPOCATEGORIA.CLICK", true] ,"e162gj2_client": ["VTIPOMARCA.CLICK", true] ,"e212gj2_client": ["CANCEL", true] ,"e172gj1_client": ["'OBSERVACAO'", false] ,"e182gj1_client": ["'PRECOVENDA'", false] ,"e192gj1_client": ["'PRECOCUSTO'", false] ,"e202gj1_client": ["'TRANSACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV12FILIALECOMMERCE',fld:'vFILIALECOMMERCE'},{av:'AV21PRECOVENECOM',fld:'vPRECOVENECOM'},{av:'AV19PRECOCUSTOECOM',fld:'vPRECOCUSTOECOM'},{av:'AV7CHAVEAPI',fld:'vCHAVEAPI'},{av:'AV8CHAVEAPLICACAO',fld:'vCHAVEAPLICACAO'},{av:'AV17PERIODICIDADATU',fld:'vPERIODICIDADATU'},{av:'AV30TRNECOMMERCE',fld:'vTRNECOMMERCE'},{av:'AV45Vendedorid',fld:'vVENDEDORID'},{av:'AV35CLASUBCATFAM',fld:'vCLASUBCATFAM'},{av:'AV33CLAECOMARCA',fld:'vCLAECOMARCA'},{av:'AV44TIPOPRODUTOECO',fld:'vTIPOPRODUTOECO'},{av:'AV42TipoCategoria',fld:'vTIPOCATEGORIA'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV31ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'AV32hasError',fld:'vHASERROR'},{av:'AV43TipoMarca',fld:'vTIPOMARCA'},{av:'AV36NS1ClassificacaoId',fld:'vNS1CLASSIFICACAOID'},{av:'AV37NS2ClassificacaoId',fld:'vNS2CLASSIFICACAOID'},{av:'AV34CLANAOENVIARECO',fld:'vCLANAOENVIARECO'},{av:'AV38NS3ClassificacaoId',fld:'vNS3CLASSIFICACAOID'},{av:'AV39NS4ClassificacaoId',fld:'vNS4CLASSIFICACAOID'},{av:'AV40NS5ClassificacaoId',fld:'vNS5CLASSIFICACAOID'}],[{av:'AV34CLANAOENVIARECO',fld:'vCLANAOENVIARECO'},{av:'AV31ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'AV32hasError',fld:'vHASERROR'},{av:'AV12FILIALECOMMERCE',fld:'vFILIALECOMMERCE'},{av:'AV21PRECOVENECOM',fld:'vPRECOVENECOM'},{av:'AV19PRECOCUSTOECOM',fld:'vPRECOCUSTOECOM'},{av:'AV7CHAVEAPI',fld:'vCHAVEAPI'},{av:'AV8CHAVEAPLICACAO',fld:'vCHAVEAPLICACAO'},{av:'AV17PERIODICIDADATU',fld:'vPERIODICIDADATU'},{av:'AV30TRNECOMMERCE',fld:'vTRNECOMMERCE'},{av:'AV45Vendedorid',fld:'vVENDEDORID'},{av:'AV35CLASUBCATFAM',fld:'vCLASUBCATFAM'},{av:'AV33CLAECOMARCA',fld:'vCLAECOMARCA'},{av:'AV44TIPOPRODUTOECO',fld:'vTIPOPRODUTOECO'},{av:'AV50GXLvl113',fld:'vGXLVL113'},{av:'AV51GXLvl134',fld:'vGXLVL134'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV10EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EvtParms["'PRECOVENDA'"] = [[],[{av:'AV21PRECOVENECOM',fld:'vPRECOVENECOM'}]];
   this.EvtParms["'PRECOCUSTO'"] = [[],[{av:'AV19PRECOCUSTOECOM',fld:'vPRECOCUSTOECOM'}]];
   this.EvtParms["'TRANSACAO'"] = [[],[{av:'AV30TRNECOMMERCE',fld:'vTRNECOMMERCE'}]];
   this.EvtParms["VTIPOCATEGORIA.CLICK"] = [[{av:'AV42TipoCategoria',fld:'vTIPOCATEGORIA'},{av:'AV35CLASUBCATFAM',fld:'vCLASUBCATFAM'}],[{av:'AV35CLASUBCATFAM',fld:'vCLASUBCATFAM'}]];
   this.EvtParms["VTIPOMARCA.CLICK"] = [[{av:'AV43TipoMarca',fld:'vTIPOMARCA'},{av:'AV33CLAECOMARCA',fld:'vCLAECOMARCA'}],[{av:'AV33CLAECOMARCA',fld:'vCLAECOMARCA'}]];
   this.setPrompt("PROMPT_FILIALECOMMERCE", [13]);
   this.setPrompt("PROMPT_VENDEDORID", [51]);
   this.setPrompt("PROMPT_CLASUBCATFAM", [61]);
   this.setPrompt("PROMPT_CLAECOMARCA", [76]);
   this.setPrompt("PROMPT_NS1CLASSIFICACAOID", [84]);
   this.setPrompt("PROMPT_NS2CLASSIFICACAOID", [86]);
   this.setPrompt("PROMPT_NS3CLASSIFICACAOID", [88]);
   this.setPrompt("PROMPT_NS4CLASSIFICACAOID", [90]);
   this.setPrompt("PROMPT_NS5CLASSIFICACAOID", [92]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV10EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hparametrosecommerce());
