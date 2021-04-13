/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:14:32.88
*/
gx.evt.autoSkip = false;
gx.define('halterarcontacontabil', false, function () {
   this.ServerClass =  "halterarcontacontabil" ;
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
   this.Validv_Contacontabilidant=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILIDANT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contacontabilidnov=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILIDNOV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s152_client=function()
   {
      if ( this.AV47TpAtualizacao == "1" )
      {
         gx.fn.setCtrlProperty("TABAPENASUMACONTA","Visible", 1 );
         gx.fn.setCtrlProperty("TABINTERVALOCONTAS","Visible", 0 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABAPENASUMACONTA","Visible", 0 );
         gx.fn.setCtrlProperty("TABINTERVALOCONTAS","Visible", 1 );
      }
   };
   this.e11s72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13s72_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16s72_client=function()
   {
      this.executeServerEvent("VTPATUALIZACAO.CLICK", true, null, false, true);
   };
   this.e17s72_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,23,24,26,28,29,30,33,35,36,37,38,41,43,44,45,46,49,51,52,53,59,65,66,67,69];
   this.GXLastCtrlId =69;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPATUALIZACAO",gxz:"ZV47TpAtualizacao",gxold:"OV47TpAtualizacao",gxvar:"AV47TpAtualizacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV47TpAtualizacao=Value},v2z:function(Value){gx.O.ZV47TpAtualizacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPATUALIZACAO",gx.O.AV47TpAtualizacao)},c2v:function(){gx.O.AV47TpAtualizacao=this.val()},val:function(){return gx.fn.getControlValue("vTPATUALIZACAO")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TABINTERVALOCONTAS",grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={fld:"TABLE2",grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILINI",gxz:"ZV48ContaContabilIni",gxold:"OV48ContaContabilIni",gxvar:"AV48ContaContabilIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48ContaContabilIni=Value},v2z:function(Value){gx.O.ZV48ContaContabilIni=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILINI",gx.O.AV48ContaContabilIni,0)},c2v:function(){gx.O.AV48ContaContabilIni=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILINI")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORINI",gxz:"ZV51TradutorIni",gxold:"OV51TradutorIni",gxvar:"AV51TradutorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51TradutorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51TradutorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORINI",gx.O.AV51TradutorIni,0)},c2v:function(){gx.O.AV51TradutorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORINI",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"PROMPTINI",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILFIN",gxz:"ZV49ContaContabilFin",gxold:"OV49ContaContabilFin",gxvar:"AV49ContaContabilFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49ContaContabilFin=Value},v2z:function(Value){gx.O.ZV49ContaContabilFin=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILFIN",gx.O.AV49ContaContabilFin,0)},c2v:function(){gx.O.AV49ContaContabilFin=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILFIN")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORFIN",gxz:"ZV52TradutorFin",gxold:"OV52TradutorFin",gxvar:"AV52TradutorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52TradutorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52TradutorFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORFIN",gx.O.AV52TradutorFin,0)},c2v:function(){gx.O.AV52TradutorFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"PROMPTFIN",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOCONTAS",gxz:"ZV50GrupoContas",gxold:"OV50GrupoContas",gxvar:"AV50GrupoContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50GrupoContas=Value},v2z:function(Value){gx.O.ZV50GrupoContas=Value},v2c:function(){gx.fn.setControlValue("vGRUPOCONTAS",gx.O.AV50GrupoContas,0)},c2v:function(){gx.O.AV50GrupoContas=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOCONTAS")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORGRUPO",gxz:"ZV53TradutorGrupo",gxold:"OV53TradutorGrupo",gxvar:"AV53TradutorGrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53TradutorGrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53TradutorGrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORGRUPO",gx.O.AV53TradutorGrupo,0)},c2v:function(){gx.O.AV53TradutorGrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"PROMPTGRUPO",grid:0};
   GXValidFnc[38]={fld:"TABAPENASUMACONTA",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabilidant,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDANT",gxz:"ZV21ContaContabilIdAnt",gxold:"OV21ContaContabilIdAnt",gxvar:"AV21ContaContabilIdAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ContaContabilIdAnt=Value},v2z:function(Value){gx.O.ZV21ContaContabilIdAnt=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDANT",gx.O.AV21ContaContabilIdAnt,0)},c2v:function(){gx.O.AV21ContaContabilIdAnt=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDANT")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"IMGCCONT",grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV32ContaContabilNome",gxold:"OV32ContaContabilNome",gxvar:"AV32ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ContaContabilNome=Value},v2z:function(Value){gx.O.ZV32ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV32ContaContabilNome,0)},c2v:function(){gx.O.AV32ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORANT",gxz:"ZV22TradutorAnt",gxold:"OV22TradutorAnt",gxvar:"AV22TradutorAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22TradutorAnt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22TradutorAnt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORANT",gx.O.AV22TradutorAnt,0)},c2v:function(){gx.O.AV22TradutorAnt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORANT",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabilidnov,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDNOV",gxz:"ZV23ContaContabilIdNov",gxold:"OV23ContaContabilIdNov",gxvar:"AV23ContaContabilIdNov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ContaContabilIdNov=Value},v2z:function(Value){gx.O.ZV23ContaContabilIdNov=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDNOV",gx.O.AV23ContaContabilIdNov,0)},c2v:function(){gx.O.AV23ContaContabilIdNov=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDNOV")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"IMGCCONTNOV",grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORNOV",gxz:"ZV24TradutorNov",gxold:"OV24TradutorNov",gxvar:"AV24TradutorNov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TradutorNov=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24TradutorNov=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORNOV",gx.O.AV24TradutorNov,0)},c2v:function(){gx.O.AV24TradutorNov=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORNOV",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE5",grid:0};
   GXValidFnc[65]={fld:"JS", format:2,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV25ChamaOnBlurMascara",gxold:"OV25ChamaOnBlurMascara",gxvar:"AV25ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV25ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV25ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV25ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"BTNHELP",grid:0};
   this.AV47TpAtualizacao = "" ;
   this.ZV47TpAtualizacao = "" ;
   this.OV47TpAtualizacao = "" ;
   this.AV48ContaContabilIni = "" ;
   this.ZV48ContaContabilIni = "" ;
   this.OV48ContaContabilIni = "" ;
   this.AV51TradutorIni = 0 ;
   this.ZV51TradutorIni = 0 ;
   this.OV51TradutorIni = 0 ;
   this.AV49ContaContabilFin = "" ;
   this.ZV49ContaContabilFin = "" ;
   this.OV49ContaContabilFin = "" ;
   this.AV52TradutorFin = 0 ;
   this.ZV52TradutorFin = 0 ;
   this.OV52TradutorFin = 0 ;
   this.AV50GrupoContas = "" ;
   this.ZV50GrupoContas = "" ;
   this.OV50GrupoContas = "" ;
   this.AV53TradutorGrupo = 0 ;
   this.ZV53TradutorGrupo = 0 ;
   this.OV53TradutorGrupo = 0 ;
   this.AV21ContaContabilIdAnt = "" ;
   this.ZV21ContaContabilIdAnt = "" ;
   this.OV21ContaContabilIdAnt = "" ;
   this.AV32ContaContabilNome = "" ;
   this.ZV32ContaContabilNome = "" ;
   this.OV32ContaContabilNome = "" ;
   this.AV22TradutorAnt = 0 ;
   this.ZV22TradutorAnt = 0 ;
   this.OV22TradutorAnt = 0 ;
   this.AV23ContaContabilIdNov = "" ;
   this.ZV23ContaContabilIdNov = "" ;
   this.OV23ContaContabilIdNov = "" ;
   this.AV24TradutorNov = 0 ;
   this.ZV24TradutorNov = 0 ;
   this.OV24TradutorNov = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV25ChamaOnBlurMascara = "" ;
   this.ZV25ChamaOnBlurMascara = "" ;
   this.OV25ChamaOnBlurMascara = "" ;
   this.AV47TpAtualizacao = "" ;
   this.AV48ContaContabilIni = "" ;
   this.AV51TradutorIni = 0 ;
   this.AV49ContaContabilFin = "" ;
   this.AV52TradutorFin = 0 ;
   this.AV50GrupoContas = "" ;
   this.AV53TradutorGrupo = 0 ;
   this.AV21ContaContabilIdAnt = "" ;
   this.AV32ContaContabilNome = "" ;
   this.AV22TradutorAnt = 0 ;
   this.AV23ContaContabilIdNov = "" ;
   this.AV24TradutorNov = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.AV25ChamaOnBlurMascara = "" ;
   this.A62ContaContabilId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A173ContaContabilNivel = 0 ;
   this.A174ContaContabilFinal = "" ;
   this.Events = {"e11s72_client": ["'FECHAR'", true] ,"e13s72_client": ["ENTER", true] ,"e16s72_client": ["VTPATUALIZACAO.CLICK", true] ,"e17s72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV47TpAtualizacao',fld:'vTPATUALIZACAO'}],[{av:'gx.fn.getCtrlProperty("TABAPENASUMACONTA","Visible")',ctrl:'TABAPENASUMACONTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABINTERVALOCONTAS","Visible")',ctrl:'TABINTERVALOCONTAS',prop:'Visible'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV47TpAtualizacao',fld:'vTPATUALIZACAO'},{av:'AV21ContaContabilIdAnt',fld:'vCONTACONTABILIDANT'},{av:'AV30ContaContabilIdAntFin',fld:'vCONTACONTABILIDANTFIN'},{av:'AV29ContaContabilNivelAnt',fld:'vCONTACONTABILNIVELANT'},{av:'AV23ContaContabilIdNov',fld:'vCONTACONTABILIDNOV'},{av:'AV28tpErro',fld:'vTPERRO'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A173ContaContabilNivel',fld:'CONTACONTABILNIVEL'},{av:'A174ContaContabilFinal',fld:'CONTACONTABILFINAL'},{av:'AV31ContaContabilNivelNov',fld:'vCONTACONTABILNIVELNOV'},{av:'AV48ContaContabilIni',fld:'vCONTACONTABILINI'},{av:'AV49ContaContabilFin',fld:'vCONTACONTABILFIN'},{av:'AV55ContaContabilSuperiorAnt',fld:'vCONTACONTABILSUPERIORANT'},{av:'AV50GrupoContas',fld:'vGRUPOCONTAS'},{av:'AV38ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV35ContaContabilIdNovNivel',fld:'vCONTACONTABILIDNOVNIVEL'},{av:'AV40ContaContabilIdFinal',fld:'vCONTACONTABILIDFINAL'}],[{av:'AV28tpErro',fld:'vTPERRO'},{av:'AV41Retorno',fld:'vRETORNO'},{av:'AV23ContaContabilIdNov',fld:'vCONTACONTABILIDNOV'},{av:'AV29ContaContabilNivelAnt',fld:'vCONTACONTABILNIVELANT'},{av:'AV30ContaContabilIdAntFin',fld:'vCONTACONTABILIDANTFIN'},{av:'AV21ContaContabilIdAnt',fld:'vCONTACONTABILIDANT'},{av:'AV61GXLvl76',fld:'vGXLVL76'},{av:'AV62GXLvl97',fld:'vGXLVL97'},{av:'AV31ContaContabilNivelNov',fld:'vCONTACONTABILNIVELNOV'},{av:'AV46SNCadastrar',fld:'vSNCADASTRAR'},{av:'AV45SNContaSuperior',fld:'vSNCONTASUPERIOR'},{av:'AV44ContaContabilSuperior',fld:'vCONTACONTABILSUPERIOR'},{av:'AV43ContaContabilNomeOut',fld:'vCONTACONTABILNOMEOUT'},{av:'AV63GXLvl121',fld:'vGXLVL121'},{av:'AV35ContaContabilIdNovNivel',fld:'vCONTACONTABILIDNOVNIVEL'},{av:'AV36split',fld:'vSPLIT'},{av:'AV37x',fld:'vX'},{av:'AV55ContaContabilSuperiorAnt',fld:'vCONTACONTABILSUPERIORANT'},{av:'AV54SintAnaContaCli',fld:'vSINTANACONTACLI'},{av:'AV56NovaCContabilAnalitica',fld:'vNOVACCONTABILANALITICA'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV38ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV39ContaContabilIdNivel',fld:'vCONTACONTABILIDNIVEL'},{av:'AV40ContaContabilIdFinal',fld:'vCONTACONTABILIDFINAL'}]];
   this.EvtParms["VTPATUALIZACAO.CLICK"] = [[{av:'AV47TpAtualizacao',fld:'vTPATUALIZACAO'}],[{av:'gx.fn.getCtrlProperty("TABAPENASUMACONTA","Visible")',ctrl:'TABAPENASUMACONTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABINTERVALOCONTAS","Visible")',ctrl:'TABINTERVALOCONTAS',prop:'Visible'}]];
   this.setPrompt("PROMPTINI", [22,23]);
   this.setPrompt("PROMPTFIN", [28,29]);
   this.setPrompt("PROMPTGRUPO", [35,36]);
   this.setPrompt("IMGCCONT", [43,46]);
   this.setPrompt("IMGCCONTNOV", [51,53]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new halterarcontacontabil());
