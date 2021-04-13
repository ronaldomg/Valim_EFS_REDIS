/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:50:33.18
*/
gx.evt.autoSkip = false;
gx.define('hrelacaocontabilizacao', false, function () {
   this.ServerClass =  "hrelacaocontabilizacao" ;
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
   this.Validv_Associadoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vASSOCIADOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1125j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1325j2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1425j2_client=function()
   {
      this.executeServerEvent("VASSOCIADOID.ISVALID", true, null, false, true);
   };
   this.e1625j2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,18,20,24,29,32,36,38,41,42,43,45,47,48,49,52,54,57,59,61,63,65,67,69,72,74,75,81,88,89,90,91,92,93,94,95,96];
   this.GXLastCtrlId =96;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TABLE5",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV32Ordenacao",gxold:"OV32Ordenacao",gxvar:"AV32Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32Ordenacao=Value},v2z:function(Value){gx.O.ZV32Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV32Ordenacao)},c2v:function(){gx.O.AV32Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSALTARPAGINA",gxz:"ZV36SnSaltarPagina",gxold:"OV36SnSaltarPagina",gxvar:"AV36SnSaltarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV36SnSaltarPagina=Value},v2z:function(Value){gx.O.ZV36SnSaltarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSALTARPAGINA",gx.O.AV36SnSaltarPagina,"S")},c2v:function(){gx.O.AV36SnSaltarPagina=this.val()},val:function(){return gx.fn.getControlValue("vSNSALTARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[29]={fld:"TABLE6",grid:0};
   GXValidFnc[32]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[38]={fld:"TABLE7",grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINICIAL",gxz:"ZV26MesInicial",gxold:"OV26MesInicial",gxvar:"AV26MesInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26MesInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26MesInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINICIAL",gx.O.AV26MesInicial,0)},c2v:function(){gx.O.AV26MesInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINICIAL",gxz:"ZV9AnoInicial",gxold:"OV9AnoInicial",gxvar:"AV9AnoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9AnoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9AnoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOINICIAL",gx.O.AV9AnoInicial,0)},c2v:function(){gx.O.AV9AnoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFINAL",gxz:"ZV25MesFinal",gxold:"OV25MesFinal",gxvar:"AV25MesFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25MesFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25MesFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFINAL",gx.O.AV25MesFinal,0)},c2v:function(){gx.O.AV25MesFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFINAL",gxz:"ZV8AnoFinal",gxold:"OV8AnoFinal",gxvar:"AV8AnoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8AnoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8AnoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOFINAL",gx.O.AV8AnoFinal,0)},c2v:function(){gx.O.AV8AnoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[54]={fld:"TABLE8",grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATIVIDADEID1",gxz:"ZV12AtividadeId1",gxold:"OV12AtividadeId1",gxvar:"AV12AtividadeId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12AtividadeId1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12AtividadeId1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATIVIDADEID1",gx.O.AV12AtividadeId1,0)},c2v:function(){gx.O.AV12AtividadeId1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATIVIDADEID1",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATIVIDADEID2",gxz:"ZV13AtividadeId2",gxold:"OV13AtividadeId2",gxvar:"AV13AtividadeId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13AtividadeId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13AtividadeId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATIVIDADEID2",gx.O.AV13AtividadeId2,0)},c2v:function(){gx.O.AV13AtividadeId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATIVIDADEID2",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATIVIDADEID3",gxz:"ZV14AtividadeId3",gxold:"OV14AtividadeId3",gxvar:"AV14AtividadeId3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14AtividadeId3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14AtividadeId3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATIVIDADEID3",gx.O.AV14AtividadeId3,0)},c2v:function(){gx.O.AV14AtividadeId3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATIVIDADEID3",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATIVIDADEID4",gxz:"ZV15AtividadeId4",gxold:"OV15AtividadeId4",gxvar:"AV15AtividadeId4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AtividadeId4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15AtividadeId4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATIVIDADEID4",gx.O.AV15AtividadeId4,0)},c2v:function(){gx.O.AV15AtividadeId4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATIVIDADEID4",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATIVIDADEID5",gxz:"ZV16AtividadeId5",gxold:"OV16AtividadeId5",gxvar:"AV16AtividadeId5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16AtividadeId5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16AtividadeId5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATIVIDADEID5",gx.O.AV16AtividadeId5,0)},c2v:function(){gx.O.AV16AtividadeId5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATIVIDADEID5",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATIVIDADEID6",gxz:"ZV17AtividadeId6",gxold:"OV17AtividadeId6",gxvar:"AV17AtividadeId6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AtividadeId6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AtividadeId6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATIVIDADEID6",gx.O.AV17AtividadeId6,0)},c2v:function(){gx.O.AV17AtividadeId6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATIVIDADEID6",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATIVIDADEID7",gxz:"ZV18AtividadeId7",gxold:"OV18AtividadeId7",gxvar:"AV18AtividadeId7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AtividadeId7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AtividadeId7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vATIVIDADEID7",gx.O.AV18AtividadeId7,0)},c2v:function(){gx.O.AV18AtividadeId7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vATIVIDADEID7",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Associadoid,isvalid:'e1425j2_client',rgrid:[],fld:"vASSOCIADOID",gxz:"ZV10AssociadoId",gxold:"OV10AssociadoId",gxvar:"AV10AssociadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10AssociadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10AssociadoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vASSOCIADOID",gx.O.AV10AssociadoId,0)},c2v:function(){gx.O.AV10AssociadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vASSOCIADOID",'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSOCIADONOME",gxz:"ZV11AssociadoNome",gxold:"OV11AssociadoNome",gxvar:"AV11AssociadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11AssociadoNome=Value},v2z:function(Value){gx.O.ZV11AssociadoNome=Value},v2c:function(){gx.fn.setControlValue("vASSOCIADONOME",gx.O.AV11AssociadoNome,0)},c2v:function(){gx.O.AV11AssociadoNome=this.val()},val:function(){return gx.fn.getControlValue("vASSOCIADONOME")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TABLE3",grid:0};
   GXValidFnc[88]={fld:"BTNHELP",grid:0};
   GXValidFnc[89]={fld:"PROMPT_ATIVIDADEID1",grid:0};
   GXValidFnc[90]={fld:"PROMPT_ATIVIDADEID2",grid:0};
   GXValidFnc[91]={fld:"PROMPT_ATIVIDADEID3",grid:0};
   GXValidFnc[92]={fld:"PROMPT_ATIVIDADEID4",grid:0};
   GXValidFnc[93]={fld:"PROMPT_ATIVIDADEID5",grid:0};
   GXValidFnc[94]={fld:"PROMPT_ATIVIDADEID6",grid:0};
   GXValidFnc[95]={fld:"PROMPT_ATIVIDADEID7",grid:0};
   GXValidFnc[96]={fld:"PROMPT_ASSOCIADOID",grid:0};
   this.AV32Ordenacao = "" ;
   this.ZV32Ordenacao = "" ;
   this.OV32Ordenacao = "" ;
   this.AV36SnSaltarPagina = "" ;
   this.ZV36SnSaltarPagina = "" ;
   this.OV36SnSaltarPagina = "" ;
   this.AV26MesInicial = 0 ;
   this.ZV26MesInicial = 0 ;
   this.OV26MesInicial = 0 ;
   this.AV9AnoInicial = 0 ;
   this.ZV9AnoInicial = 0 ;
   this.OV9AnoInicial = 0 ;
   this.AV25MesFinal = 0 ;
   this.ZV25MesFinal = 0 ;
   this.OV25MesFinal = 0 ;
   this.AV8AnoFinal = 0 ;
   this.ZV8AnoFinal = 0 ;
   this.OV8AnoFinal = 0 ;
   this.AV12AtividadeId1 = 0 ;
   this.ZV12AtividadeId1 = 0 ;
   this.OV12AtividadeId1 = 0 ;
   this.AV13AtividadeId2 = 0 ;
   this.ZV13AtividadeId2 = 0 ;
   this.OV13AtividadeId2 = 0 ;
   this.AV14AtividadeId3 = 0 ;
   this.ZV14AtividadeId3 = 0 ;
   this.OV14AtividadeId3 = 0 ;
   this.AV15AtividadeId4 = 0 ;
   this.ZV15AtividadeId4 = 0 ;
   this.OV15AtividadeId4 = 0 ;
   this.AV16AtividadeId5 = 0 ;
   this.ZV16AtividadeId5 = 0 ;
   this.OV16AtividadeId5 = 0 ;
   this.AV17AtividadeId6 = 0 ;
   this.ZV17AtividadeId6 = 0 ;
   this.OV17AtividadeId6 = 0 ;
   this.AV18AtividadeId7 = 0 ;
   this.ZV18AtividadeId7 = 0 ;
   this.OV18AtividadeId7 = 0 ;
   this.AV10AssociadoId = 0 ;
   this.ZV10AssociadoId = 0 ;
   this.OV10AssociadoId = 0 ;
   this.AV11AssociadoNome = "" ;
   this.ZV11AssociadoNome = "" ;
   this.OV11AssociadoNome = "" ;
   this.AV32Ordenacao = "" ;
   this.AV36SnSaltarPagina = "" ;
   this.AV26MesInicial = 0 ;
   this.AV9AnoInicial = 0 ;
   this.AV25MesFinal = 0 ;
   this.AV8AnoFinal = 0 ;
   this.AV12AtividadeId1 = 0 ;
   this.AV13AtividadeId2 = 0 ;
   this.AV14AtividadeId3 = 0 ;
   this.AV15AtividadeId4 = 0 ;
   this.AV16AtividadeId5 = 0 ;
   this.AV17AtividadeId6 = 0 ;
   this.AV18AtividadeId7 = 0 ;
   this.AV10AssociadoId = 0 ;
   this.AV11AssociadoNome = "" ;
   this.A10115AssociadoPessoaId = 0 ;
   this.A10114AssociadoPessoaEmpId = "" ;
   this.A10004AtividadeId = 0 ;
   this.A10003AtividadeEmpresaId = "" ;
   this.Events = {"e1125j2_client": ["'FECHAR'", true] ,"e1325j2_client": ["ENTER", true] ,"e1425j2_client": ["VASSOCIADOID.ISVALID", true] ,"e1625j2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV32Ordenacao',fld:'vORDENACAO'},{av:'AV36SnSaltarPagina',fld:'vSNSALTARPAGINA'},{av:'AV26MesInicial',fld:'vMESINICIAL'},{av:'AV9AnoInicial',fld:'vANOINICIAL'},{av:'AV25MesFinal',fld:'vMESFINAL'},{av:'AV8AnoFinal',fld:'vANOFINAL'},{av:'AV12AtividadeId1',fld:'vATIVIDADEID1'},{av:'AV13AtividadeId2',fld:'vATIVIDADEID2'},{av:'AV14AtividadeId3',fld:'vATIVIDADEID3'},{av:'AV15AtividadeId4',fld:'vATIVIDADEID4'},{av:'AV16AtividadeId5',fld:'vATIVIDADEID5'},{av:'AV17AtividadeId6',fld:'vATIVIDADEID6'},{av:'AV18AtividadeId7',fld:'vATIVIDADEID7'},{av:'AV10AssociadoId',fld:'vASSOCIADOID'},{av:'AV11AssociadoNome',fld:'vASSOCIADONOME'},{av:'AV43Pgmdesc',fld:'vPGMDESC'},{av:'AV38tpErro',fld:'vTPERRO'},{av:'AV7AtividadeId',fld:'vATIVIDADEID'},{av:'A10003AtividadeEmpresaId',fld:'ATIVIDADEEMPRESAID'},{av:'AV6AtividadeEmpresaId',fld:'vATIVIDADEEMPRESAID'},{av:'A10004AtividadeId',fld:'ATIVIDADEID'},{av:'A10114AssociadoPessoaEmpId',fld:'ASSOCIADOPESSOAEMPID'},{av:'AV5AssociadoEmpresaId',fld:'vASSOCIADOEMPRESAID'},{av:'A10115AssociadoPessoaId',fld:'ASSOCIADOPESSOAID'}],[{av:'AV38tpErro',fld:'vTPERRO'},{av:'AV31NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV29NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV40x',fld:'vX'},{av:'AV7AtividadeId',fld:'vATIVIDADEID'},{av:'AV45GXLvl120',fld:'vGXLVL120'},{av:'AV46GXLvl152',fld:'vGXLVL152'}]];
   this.EvtParms["VASSOCIADOID.ISVALID"] = [[{av:'AV33PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV10AssociadoId',fld:'vASSOCIADOID'}],[{av:'AV11AssociadoNome',fld:'vASSOCIADONOME'}]];
   this.setPrompt("PROMPT_ATIVIDADEID1", [57]);
   this.setPrompt("PROMPT_ATIVIDADEID2", [59]);
   this.setPrompt("PROMPT_ATIVIDADEID3", [61]);
   this.setPrompt("PROMPT_ATIVIDADEID4", [63]);
   this.setPrompt("PROMPT_ATIVIDADEID5", [65]);
   this.setPrompt("PROMPT_ATIVIDADEID6", [67]);
   this.setPrompt("PROMPT_ATIVIDADEID7", [69]);
   this.setPrompt("PROMPT_ASSOCIADOID", [74]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaocontabilizacao());
