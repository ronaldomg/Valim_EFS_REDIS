/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:1:15.40
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmfaturarvendas', false, function () {
   this.ServerClass =  "hmodalparmfaturarvendas" ;
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
   this.Validv_Filialunica=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALUNICA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1628n1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmfaturarvendasfam",[]), []);
      this.refreshOutputs([]);
   };
   this.e1228n2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1328n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1428n2_client=function()
   {
      this.executeServerEvent("'OBSERVACAO'", true, null, false, false);
   };
   this.e1728n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,24,27,29,32,35,38,41,44,47,50,53,56,59,62,65,71,79,80];
   this.GXLastCtrlId =80;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialunica,isvalid:null,rgrid:[],fld:"vFILIALUNICA",gxz:"ZV8FilialUnica",gxold:"OV8FilialUnica",gxvar:"AV8FilialUnica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8FilialUnica=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8FilialUnica=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALUNICA",gx.O.AV8FilialUnica,0)},c2v:function(){gx.O.AV8FilialUnica=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALUNICA",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOAMBIENTENFE",gxz:"ZV19TIPOAMBIENTENFE",gxold:"OV19TIPOAMBIENTENFE",gxvar:"AV19TIPOAMBIENTENFE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19TIPOAMBIENTENFE=Value},v2z:function(Value){gx.O.ZV19TIPOAMBIENTENFE=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOAMBIENTENFE",gx.O.AV19TIPOAMBIENTENFE)},c2v:function(){gx.O.AV19TIPOAMBIENTENFE=this.val()},val:function(){return gx.fn.getControlValue("vTIPOAMBIENTENFE")},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFATCOND",gxz:"ZV23SNFATCOND",gxold:"OV23SNFATCOND",gxvar:"AV23SNFATCOND",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23SNFATCOND=Value},v2z:function(Value){gx.O.ZV23SNFATCOND=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFATCOND",gx.O.AV23SNFATCOND,"S")},c2v:function(){gx.O.AV23SNFATCOND=this.val()},val:function(){return gx.fn.getControlValue("vSNFATCOND")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFATORCAMENTO",gxz:"ZV24SNFATORCAMENTO",gxold:"OV24SNFATORCAMENTO",gxvar:"AV24SNFATORCAMENTO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24SNFATORCAMENTO=Value},v2z:function(Value){gx.O.ZV24SNFATORCAMENTO=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFATORCAMENTO",gx.O.AV24SNFATORCAMENTO,"S")},c2v:function(){gx.O.AV24SNFATORCAMENTO=this.val()},val:function(){return gx.fn.getControlValue("vSNFATORCAMENTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFATPREVENDA",gxz:"ZV25SNFATPREVENDA",gxold:"OV25SNFATPREVENDA",gxvar:"AV25SNFATPREVENDA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25SNFATPREVENDA=Value},v2z:function(Value){gx.O.ZV25SNFATPREVENDA=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFATPREVENDA",gx.O.AV25SNFATPREVENDA,"S")},c2v:function(){gx.O.AV25SNFATPREVENDA=this.val()},val:function(){return gx.fn.getControlValue("vSNFATPREVENDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[29]={fld:"TABLE10",grid:0};
   GXValidFnc[32]={fld:"TABLE3",grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFATGERACUPOM",gxz:"ZV16SNFATGERACUPOM",gxold:"OV16SNFATGERACUPOM",gxvar:"AV16SNFATGERACUPOM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16SNFATGERACUPOM=Value},v2z:function(Value){gx.O.ZV16SNFATGERACUPOM=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFATGERACUPOM",gx.O.AV16SNFATGERACUPOM,"S")},c2v:function(){gx.O.AV16SNFATGERACUPOM=this.val()},val:function(){return gx.fn.getControlValue("vSNFATGERACUPOM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFATGERANOTA",gxz:"ZV17SNFATGERANOTA",gxold:"OV17SNFATGERANOTA",gxvar:"AV17SNFATGERANOTA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17SNFATGERANOTA=Value},v2z:function(Value){gx.O.ZV17SNFATGERANOTA=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFATGERANOTA",gx.O.AV17SNFATGERANOTA,"S")},c2v:function(){gx.O.AV17SNFATGERANOTA=this.val()},val:function(){return gx.fn.getControlValue("vSNFATGERANOTA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFATGERACAIXA",gxz:"ZV15SNFATGERACAIXA",gxold:"OV15SNFATGERACAIXA",gxvar:"AV15SNFATGERACAIXA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15SNFATGERACAIXA=Value},v2z:function(Value){gx.O.ZV15SNFATGERACAIXA=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFATGERACAIXA",gx.O.AV15SNFATGERACAIXA,"S")},c2v:function(){gx.O.AV15SNFATGERACAIXA=this.val()},val:function(){return gx.fn.getControlValue("vSNFATGERACAIXA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFATGERASAIDA",gxz:"ZV26SNFATGERASAIDA",gxold:"OV26SNFATGERASAIDA",gxvar:"AV26SNFATGERASAIDA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26SNFATGERASAIDA=Value},v2z:function(Value){gx.O.ZV26SNFATGERASAIDA=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFATGERASAIDA",gx.O.AV26SNFATGERASAIDA,"S")},c2v:function(){gx.O.AV26SNFATGERASAIDA=this.val()},val:function(){return gx.fn.getControlValue("vSNFATGERASAIDA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFATURARCUPOM",gxz:"ZV18SNFATURARCUPOM",gxold:"OV18SNFATURARCUPOM",gxvar:"AV18SNFATURARCUPOM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18SNFATURARCUPOM=Value},v2z:function(Value){gx.O.ZV18SNFATURARCUPOM=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNFATURARCUPOM",gx.O.AV18SNFATURARCUPOM,"S")},c2v:function(){gx.O.AV18SNFATURARCUPOM=this.val()},val:function(){return gx.fn.getControlValue("vSNFATURARCUPOM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXIGIRCADPERUSU",gxz:"ZV6EXIGIRCADPERUSU",gxold:"OV6EXIGIRCADPERUSU",gxvar:"AV6EXIGIRCADPERUSU",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV6EXIGIRCADPERUSU=Value},v2z:function(Value){gx.O.ZV6EXIGIRCADPERUSU=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXIGIRCADPERUSU",gx.O.AV6EXIGIRCADPERUSU,"S")},c2v:function(){gx.O.AV6EXIGIRCADPERUSU=this.val()},val:function(){return gx.fn.getControlValue("vEXIGIRCADPERUSU")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEXCPREVENNOT",gxz:"ZV14SNEXCPREVENNOT",gxold:"OV14SNEXCPREVENNOT",gxvar:"AV14SNEXCPREVENNOT",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV14SNEXCPREVENNOT=Value},v2z:function(Value){gx.O.ZV14SNEXCPREVENNOT=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNEXCPREVENNOT",gx.O.AV14SNEXCPREVENNOT,"S")},c2v:function(){gx.O.AV14SNEXCPREVENNOT=this.val()},val:function(){return gx.fn.getControlValue("vSNEXCPREVENNOT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCOPOBSPRENOTA",gxz:"ZV13SNCOPOBSPRENOTA",gxold:"OV13SNCOPOBSPRENOTA",gxvar:"AV13SNCOPOBSPRENOTA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV13SNCOPOBSPRENOTA=Value},v2z:function(Value){gx.O.ZV13SNCOPOBSPRENOTA=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCOPOBSPRENOTA",gx.O.AV13SNCOPOBSPRENOTA,"S")},c2v:function(){gx.O.AV13SNCOPOBSPRENOTA=this.val()},val:function(){return gx.fn.getControlValue("vSNCOPOBSPRENOTA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNDEVFATURAR",gxz:"ZV22SNDEVFATURAR",gxold:"OV22SNDEVFATURAR",gxvar:"AV22SNDEVFATURAR",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22SNDEVFATURAR=Value},v2z:function(Value){gx.O.ZV22SNDEVFATURAR=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNDEVFATURAR",gx.O.AV22SNDEVFATURAR,"S")},c2v:function(){gx.O.AV22SNDEVFATURAR=this.val()},val:function(){return gx.fn.getControlValue("vSNDEVFATURAR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[62]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSELTPPEDIDO",gxz:"ZV27SnSelTpPedido",gxold:"OV27SnSelTpPedido",gxvar:"AV27SnSelTpPedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV27SnSelTpPedido=Value},v2z:function(Value){gx.O.ZV27SnSelTpPedido=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSELTPPEDIDO",gx.O.AV27SnSelTpPedido,"S")},c2v:function(){gx.O.AV27SnSelTpPedido=this.val()},val:function(){return gx.fn.getControlValue("vSNSELTPPEDIDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[65]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTROCAFORMAFAT",gxz:"ZV28SNTROCAFORMAFAT",gxold:"OV28SNTROCAFORMAFAT",gxvar:"AV28SNTROCAFORMAFAT",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV28SNTROCAFORMAFAT=Value},v2z:function(Value){gx.O.ZV28SNTROCAFORMAFAT=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNTROCAFORMAFAT",gx.O.AV28SNTROCAFORMAFAT,"S")},c2v:function(){gx.O.AV28SNTROCAFORMAFAT=this.val()},val:function(){return gx.fn.getControlValue("vSNTROCAFORMAFAT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[71]={fld:"TABLE12",grid:0};
   GXValidFnc[79]={fld:"BTNOBS",grid:0};
   GXValidFnc[80]={fld:"PROMPT_FILIALUNICA",grid:0};
   this.AV8FilialUnica = 0 ;
   this.ZV8FilialUnica = 0 ;
   this.OV8FilialUnica = 0 ;
   this.AV19TIPOAMBIENTENFE = "" ;
   this.ZV19TIPOAMBIENTENFE = "" ;
   this.OV19TIPOAMBIENTENFE = "" ;
   this.AV23SNFATCOND = "" ;
   this.ZV23SNFATCOND = "" ;
   this.OV23SNFATCOND = "" ;
   this.AV24SNFATORCAMENTO = "" ;
   this.ZV24SNFATORCAMENTO = "" ;
   this.OV24SNFATORCAMENTO = "" ;
   this.AV25SNFATPREVENDA = "" ;
   this.ZV25SNFATPREVENDA = "" ;
   this.OV25SNFATPREVENDA = "" ;
   this.AV16SNFATGERACUPOM = "" ;
   this.ZV16SNFATGERACUPOM = "" ;
   this.OV16SNFATGERACUPOM = "" ;
   this.AV17SNFATGERANOTA = "" ;
   this.ZV17SNFATGERANOTA = "" ;
   this.OV17SNFATGERANOTA = "" ;
   this.AV15SNFATGERACAIXA = "" ;
   this.ZV15SNFATGERACAIXA = "" ;
   this.OV15SNFATGERACAIXA = "" ;
   this.AV26SNFATGERASAIDA = "" ;
   this.ZV26SNFATGERASAIDA = "" ;
   this.OV26SNFATGERASAIDA = "" ;
   this.AV18SNFATURARCUPOM = "" ;
   this.ZV18SNFATURARCUPOM = "" ;
   this.OV18SNFATURARCUPOM = "" ;
   this.AV6EXIGIRCADPERUSU = "" ;
   this.ZV6EXIGIRCADPERUSU = "" ;
   this.OV6EXIGIRCADPERUSU = "" ;
   this.AV14SNEXCPREVENNOT = "" ;
   this.ZV14SNEXCPREVENNOT = "" ;
   this.OV14SNEXCPREVENNOT = "" ;
   this.AV13SNCOPOBSPRENOTA = "" ;
   this.ZV13SNCOPOBSPRENOTA = "" ;
   this.OV13SNCOPOBSPRENOTA = "" ;
   this.AV22SNDEVFATURAR = "" ;
   this.ZV22SNDEVFATURAR = "" ;
   this.OV22SNDEVFATURAR = "" ;
   this.AV27SnSelTpPedido = "" ;
   this.ZV27SnSelTpPedido = "" ;
   this.OV27SnSelTpPedido = "" ;
   this.AV28SNTROCAFORMAFAT = "" ;
   this.ZV28SNTROCAFORMAFAT = "" ;
   this.OV28SNTROCAFORMAFAT = "" ;
   this.AV8FilialUnica = 0 ;
   this.AV19TIPOAMBIENTENFE = "" ;
   this.AV23SNFATCOND = "" ;
   this.AV24SNFATORCAMENTO = "" ;
   this.AV25SNFATPREVENDA = "" ;
   this.AV16SNFATGERACUPOM = "" ;
   this.AV17SNFATGERANOTA = "" ;
   this.AV15SNFATGERACAIXA = "" ;
   this.AV26SNFATGERASAIDA = "" ;
   this.AV18SNFATURARCUPOM = "" ;
   this.AV6EXIGIRCADPERUSU = "" ;
   this.AV14SNEXCPREVENNOT = "" ;
   this.AV13SNCOPOBSPRENOTA = "" ;
   this.AV22SNDEVFATURAR = "" ;
   this.AV27SnSelTpPedido = "" ;
   this.AV28SNTROCAFORMAFAT = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.Events = {"e1228n2_client": ["ENTER", true] ,"e1328n2_client": ["'FECHAR'", true] ,"e1428n2_client": ["'OBSERVACAO'", true] ,"e1728n2_client": ["CANCEL", true] ,"e1628n1_client": ["'FAMILIA'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV8FilialUnica',fld:'vFILIALUNICA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV7FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV18SNFATURARCUPOM',fld:'vSNFATURARCUPOM'},{av:'AV6EXIGIRCADPERUSU',fld:'vEXIGIRCADPERUSU'},{av:'AV16SNFATGERACUPOM',fld:'vSNFATGERACUPOM'},{av:'AV17SNFATGERANOTA',fld:'vSNFATGERANOTA'},{av:'AV15SNFATGERACAIXA',fld:'vSNFATGERACAIXA'},{av:'AV26SNFATGERASAIDA',fld:'vSNFATGERASAIDA'},{av:'AV14SNEXCPREVENNOT',fld:'vSNEXCPREVENNOT'},{av:'AV13SNCOPOBSPRENOTA',fld:'vSNCOPOBSPRENOTA'},{av:'AV19TIPOAMBIENTENFE',fld:'vTIPOAMBIENTENFE'},{av:'AV22SNDEVFATURAR',fld:'vSNDEVFATURAR'},{av:'AV23SNFATCOND',fld:'vSNFATCOND'},{av:'AV24SNFATORCAMENTO',fld:'vSNFATORCAMENTO'},{av:'AV25SNFATPREVENDA',fld:'vSNFATPREVENDA'},{av:'AV27SnSelTpPedido',fld:'vSNSELTPPEDIDO'},{av:'AV28SNTROCAFORMAFAT',fld:'vSNTROCAFORMAFAT'}],[{av:'AV20tpErro',fld:'vTPERRO'},{av:'AV33GXLvl42',fld:'vGXLVL42'},{av:'AV18SNFATURARCUPOM',fld:'vSNFATURARCUPOM'},{av:'AV8FilialUnica',fld:'vFILIALUNICA'},{av:'AV6EXIGIRCADPERUSU',fld:'vEXIGIRCADPERUSU'},{av:'AV16SNFATGERACUPOM',fld:'vSNFATGERACUPOM'},{av:'AV17SNFATGERANOTA',fld:'vSNFATGERANOTA'},{av:'AV15SNFATGERACAIXA',fld:'vSNFATGERACAIXA'},{av:'AV26SNFATGERASAIDA',fld:'vSNFATGERASAIDA'},{av:'AV14SNEXCPREVENNOT',fld:'vSNEXCPREVENNOT'},{av:'AV13SNCOPOBSPRENOTA',fld:'vSNCOPOBSPRENOTA'},{av:'AV19TIPOAMBIENTENFE',fld:'vTIPOAMBIENTENFE'},{av:'AV22SNDEVFATURAR',fld:'vSNDEVFATURAR'},{av:'AV23SNFATCOND',fld:'vSNFATCOND'},{av:'AV24SNFATORCAMENTO',fld:'vSNFATORCAMENTO'},{av:'AV25SNFATPREVENDA',fld:'vSNFATPREVENDA'},{av:'AV27SnSelTpPedido',fld:'vSNSELTPPEDIDO'},{av:'AV28SNTROCAFORMAFAT',fld:'vSNTROCAFORMAFAT'},{av:'AV12SnConfirmar',fld:'vSNCONFIRMAR'}]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV12SnConfirmar',fld:'vSNCONFIRMAR'}]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EvtParms["'FAMILIA'"] = [[],[]];
   this.setPrompt("PROMPT_FILIALUNICA", [13]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmfaturarvendas());
