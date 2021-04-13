/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:43:9.62
*/
gx.evt.autoSkip = false;
gx.define('hmodalnotaservicoparametro', false, function () {
   this.ServerClass =  "hmodalnotaservicoparametro" ;
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
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121fs2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131fs2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141fs2_client=function()
   {
      this.executeServerEvent("'PARAMETROS'", true, null, false, false);
   };
   this.e151fs2_client=function()
   {
      this.executeServerEvent("VFILIALID.CLICK", true, null, false, true);
   };
   this.e181fs2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,7,10,12,13,16,18,21,23,26,28,31,33,37,41,51];
   this.GXLastCtrlId =51;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[7]={fld:"TABLE3",grid:0};
   GXValidFnc[10]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[12]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV21FilialId",gxold:"OV21FilialId",gxvar:"AV21FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV21FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vFILIALID",gx.O.AV21FilialId)},c2v:function(){gx.O.AV21FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV22filialnome",gxold:"OV22filialnome",gxvar:"AV22filialnome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22filialnome=Value},v2z:function(Value){gx.O.ZV22filialnome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV22filialnome,0)},c2v:function(){gx.O.AV22filialnome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTASERVICOPARAMETRONATOPE",gxz:"ZV14NotaServicoParametroNatOpe",gxold:"OV14NotaServicoParametroNatOpe",gxvar:"AV14NotaServicoParametroNatOpe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14NotaServicoParametroNatOpe=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14NotaServicoParametroNatOpe=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vNOTASERVICOPARAMETRONATOPE",gx.O.AV14NotaServicoParametroNatOpe)},c2v:function(){gx.O.AV14NotaServicoParametroNatOpe=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOTASERVICOPARAMETRONATOPE",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTASERVICOPARAMETROREGESPTRIB",gxz:"ZV15NotaServicoParametroRegEspTrib",gxold:"OV15NotaServicoParametroRegEspTrib",gxvar:"AV15NotaServicoParametroRegEspTrib",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15NotaServicoParametroRegEspTrib=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15NotaServicoParametroRegEspTrib=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vNOTASERVICOPARAMETROREGESPTRIB",gx.O.AV15NotaServicoParametroRegEspTrib)},c2v:function(){gx.O.AV15NotaServicoParametroRegEspTrib=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOTASERVICOPARAMETROREGESPTRIB",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTASERVICOPARAMETROTIPORPS",gxz:"ZV20NotaServicoParametroTipoRps",gxold:"OV20NotaServicoParametroTipoRps",gxvar:"AV20NotaServicoParametroTipoRps",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20NotaServicoParametroTipoRps=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20NotaServicoParametroTipoRps=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vNOTASERVICOPARAMETROTIPORPS",gx.O.AV20NotaServicoParametroTipoRps)},c2v:function(){gx.O.AV20NotaServicoParametroTipoRps=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOTASERVICOPARAMETROTIPORPS",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTASERVICOPARAMETROSERIERPS",gxz:"ZV18NotaServicoParametroSerieRps",gxold:"OV18NotaServicoParametroSerieRps",gxvar:"AV18NotaServicoParametroSerieRps",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18NotaServicoParametroSerieRps=Value},v2z:function(Value){gx.O.ZV18NotaServicoParametroSerieRps=Value},v2c:function(){gx.fn.setControlValue("vNOTASERVICOPARAMETROSERIERPS",gx.O.AV18NotaServicoParametroSerieRps,0)},c2v:function(){gx.O.AV18NotaServicoParametroSerieRps=this.val()},val:function(){return gx.fn.getControlValue("vNOTASERVICOPARAMETROSERIERPS")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTASERVICOPARAMETROOPSIMNAC",gxz:"ZV16NotaServicoParametroOpSimNac",gxold:"OV16NotaServicoParametroOpSimNac",gxvar:"AV16NotaServicoParametroOpSimNac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16NotaServicoParametroOpSimNac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16NotaServicoParametroOpSimNac=gx.num.intval(Value)},v2c:function(){gx.fn.setCheckBoxValue("vNOTASERVICOPARAMETROOPSIMNAC",gx.O.AV16NotaServicoParametroOpSimNac,"1")},c2v:function(){gx.O.AV16NotaServicoParametroOpSimNac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOTASERVICOPARAMETROOPSIMNAC",'.')},nac:gx.falseFn,values:[1,2]};
   GXValidFnc[41]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTASERVICOPARAMETROINCULTURAL",gxz:"ZV17NotaServicoParametroInCultural",gxold:"OV17NotaServicoParametroInCultural",gxvar:"AV17NotaServicoParametroInCultural",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17NotaServicoParametroInCultural=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17NotaServicoParametroInCultural=gx.num.intval(Value)},v2c:function(){gx.fn.setCheckBoxValue("vNOTASERVICOPARAMETROINCULTURAL",gx.O.AV17NotaServicoParametroInCultural,"1")},c2v:function(){gx.O.AV17NotaServicoParametroInCultural=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOTASERVICOPARAMETROINCULTURAL",'.')},nac:gx.falseFn,values:[1,2]};
   GXValidFnc[51]={fld:"IMAGE1",grid:0};
   this.AV21FilialId = 0 ;
   this.ZV21FilialId = 0 ;
   this.OV21FilialId = 0 ;
   this.AV22filialnome = "" ;
   this.ZV22filialnome = "" ;
   this.OV22filialnome = "" ;
   this.AV14NotaServicoParametroNatOpe = 0 ;
   this.ZV14NotaServicoParametroNatOpe = 0 ;
   this.OV14NotaServicoParametroNatOpe = 0 ;
   this.AV15NotaServicoParametroRegEspTrib = 0 ;
   this.ZV15NotaServicoParametroRegEspTrib = 0 ;
   this.OV15NotaServicoParametroRegEspTrib = 0 ;
   this.AV20NotaServicoParametroTipoRps = 0 ;
   this.ZV20NotaServicoParametroTipoRps = 0 ;
   this.OV20NotaServicoParametroTipoRps = 0 ;
   this.AV18NotaServicoParametroSerieRps = "" ;
   this.ZV18NotaServicoParametroSerieRps = "" ;
   this.OV18NotaServicoParametroSerieRps = "" ;
   this.AV16NotaServicoParametroOpSimNac = 0 ;
   this.ZV16NotaServicoParametroOpSimNac = 0 ;
   this.OV16NotaServicoParametroOpSimNac = 0 ;
   this.AV17NotaServicoParametroInCultural = 0 ;
   this.ZV17NotaServicoParametroInCultural = 0 ;
   this.OV17NotaServicoParametroInCultural = 0 ;
   this.AV21FilialId = 0 ;
   this.AV22filialnome = "" ;
   this.AV14NotaServicoParametroNatOpe = 0 ;
   this.AV15NotaServicoParametroRegEspTrib = 0 ;
   this.AV20NotaServicoParametroTipoRps = 0 ;
   this.AV18NotaServicoParametroSerieRps = "" ;
   this.AV16NotaServicoParametroOpSimNac = 0 ;
   this.AV17NotaServicoParametroInCultural = 0 ;
   this.A9384NotaServicoParametroEmpresaId = "" ;
   this.A11565NotaServicoParametroFilialid = 0 ;
   this.A9377NotaServicoParametroInCultural = 0 ;
   this.A9375NotaServicoParametroNatOpe = 0 ;
   this.A9378NotaServicoParametroOpSimNac = 0 ;
   this.A9376NotaServicoParametroRegEspTrib = 0 ;
   this.A9381NotaServicoParametroSerieRps = "" ;
   this.A9370NotaServicoParametroTipoRps = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A1245FilialCNPJ = "" ;
   this.Events = {"e121fs2_client": ["ENTER", true] ,"e131fs2_client": ["'FECHAR'", true] ,"e141fs2_client": ["'PARAMETROS'", true] ,"e151fs2_client": ["VFILIALID.CLICK", true] ,"e181fs2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'AV21FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A11565NotaServicoParametroFilialid',fld:'NOTASERVICOPARAMETROFILIALID'},{av:'A9384NotaServicoParametroEmpresaId',fld:'NOTASERVICOPARAMETROEMPRESAID'},{av:'A9377NotaServicoParametroInCultural',fld:'NOTASERVICOPARAMETROINCULTURAL'},{av:'A9375NotaServicoParametroNatOpe',fld:'NOTASERVICOPARAMETRONATOPE'},{av:'A9378NotaServicoParametroOpSimNac',fld:'NOTASERVICOPARAMETROOPSIMNAC'},{av:'A9376NotaServicoParametroRegEspTrib',fld:'NOTASERVICOPARAMETROREGESPTRIB'},{av:'A9381NotaServicoParametroSerieRps',fld:'NOTASERVICOPARAMETROSERIERPS'},{av:'A9370NotaServicoParametroTipoRps',fld:'NOTASERVICOPARAMETROTIPORPS'}],[{av:'AV31GXLvl97',fld:'vGXLVL97'},{av:'AV23FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV22filialnome',fld:'vFILIALNOME'},{av:'AV24FilialCNPJ',fld:'vFILIALCNPJ'},{av:'AV17NotaServicoParametroInCultural',fld:'vNOTASERVICOPARAMETROINCULTURAL'},{av:'AV14NotaServicoParametroNatOpe',fld:'vNOTASERVICOPARAMETRONATOPE'},{av:'AV16NotaServicoParametroOpSimNac',fld:'vNOTASERVICOPARAMETROOPSIMNAC'},{av:'AV15NotaServicoParametroRegEspTrib',fld:'vNOTASERVICOPARAMETROREGESPTRIB'},{av:'AV18NotaServicoParametroSerieRps',fld:'vNOTASERVICOPARAMETROSERIERPS'},{av:'AV20NotaServicoParametroTipoRps',fld:'vNOTASERVICOPARAMETROTIPORPS'}]];
   this.EvtParms["ENTER"] = [[{av:'AV21FilialId',fld:'vFILIALID'},{av:'AV14NotaServicoParametroNatOpe',fld:'vNOTASERVICOPARAMETRONATOPE'},{av:'AV20NotaServicoParametroTipoRps',fld:'vNOTASERVICOPARAMETROTIPORPS'},{av:'AV18NotaServicoParametroSerieRps',fld:'vNOTASERVICOPARAMETROSERIERPS'},{av:'AV13NotaServicoParametroEmpresaId',fld:'vNOTASERVICOPARAMETROEMPRESAID'},{av:'AV15NotaServicoParametroRegEspTrib',fld:'vNOTASERVICOPARAMETROREGESPTRIB'},{av:'AV16NotaServicoParametroOpSimNac',fld:'vNOTASERVICOPARAMETROOPSIMNAC'},{av:'AV17NotaServicoParametroInCultural',fld:'vNOTASERVICOPARAMETROINCULTURAL'}],[{av:'AV21FilialId',fld:'vFILIALID'},{av:'AV20NotaServicoParametroTipoRps',fld:'vNOTASERVICOPARAMETROTIPORPS'},{av:'AV17NotaServicoParametroInCultural',fld:'vNOTASERVICOPARAMETROINCULTURAL'},{av:'AV16NotaServicoParametroOpSimNac',fld:'vNOTASERVICOPARAMETROOPSIMNAC'},{av:'AV18NotaServicoParametroSerieRps',fld:'vNOTASERVICOPARAMETROSERIERPS'},{av:'AV15NotaServicoParametroRegEspTrib',fld:'vNOTASERVICOPARAMETROREGESPTRIB'},{av:'AV14NotaServicoParametroNatOpe',fld:'vNOTASERVICOPARAMETRONATOPE'},{av:'AV13NotaServicoParametroEmpresaId',fld:'vNOTASERVICOPARAMETROEMPRESAID'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21FilialId',fld:'vFILIALID'}],[]];
   this.EvtParms["'PARAMETROS'"] = [[{av:'AV21FilialId',fld:'vFILIALID'}],[{av:'AV21FilialId',fld:'vFILIALID'}]];
   this.EvtParms["VFILIALID.CLICK"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'AV21FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A11565NotaServicoParametroFilialid',fld:'NOTASERVICOPARAMETROFILIALID'},{av:'A9384NotaServicoParametroEmpresaId',fld:'NOTASERVICOPARAMETROEMPRESAID'},{av:'A9377NotaServicoParametroInCultural',fld:'NOTASERVICOPARAMETROINCULTURAL'},{av:'A9375NotaServicoParametroNatOpe',fld:'NOTASERVICOPARAMETRONATOPE'},{av:'A9378NotaServicoParametroOpSimNac',fld:'NOTASERVICOPARAMETROOPSIMNAC'},{av:'A9376NotaServicoParametroRegEspTrib',fld:'NOTASERVICOPARAMETROREGESPTRIB'},{av:'A9381NotaServicoParametroSerieRps',fld:'NOTASERVICOPARAMETROSERIERPS'},{av:'A9370NotaServicoParametroTipoRps',fld:'NOTASERVICOPARAMETROTIPORPS'}],[{av:'AV31GXLvl97',fld:'vGXLVL97'},{av:'AV23FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV22filialnome',fld:'vFILIALNOME'},{av:'AV24FilialCNPJ',fld:'vFILIALCNPJ'},{av:'AV17NotaServicoParametroInCultural',fld:'vNOTASERVICOPARAMETROINCULTURAL'},{av:'AV14NotaServicoParametroNatOpe',fld:'vNOTASERVICOPARAMETRONATOPE'},{av:'AV16NotaServicoParametroOpSimNac',fld:'vNOTASERVICOPARAMETROOPSIMNAC'},{av:'AV15NotaServicoParametroRegEspTrib',fld:'vNOTASERVICOPARAMETROREGESPTRIB'},{av:'AV18NotaServicoParametroSerieRps',fld:'vNOTASERVICOPARAMETROSERIERPS'},{av:'AV20NotaServicoParametroTipoRps',fld:'vNOTASERVICOPARAMETROTIPORPS'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalnotaservicoparametro());
