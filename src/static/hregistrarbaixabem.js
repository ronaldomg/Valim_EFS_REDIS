/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:30:4.41
*/
gx.evt.autoSkip = false;
gx.define('hregistrarbaixabem', false, function () {
   this.ServerClass =  "hregistrarbaixabem" ;
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
   this.Validv_Bemcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Condicaobemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONDICAOBEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraocondicao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOCONDICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraobem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOBEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraoconta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOCONTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11es2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14es2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12es2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e17es2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,20,22,26,28,32,34,35,36,40,42,43,44,45,49,51,52,56,58,62,64,65,66,67,70,73,75,76,79,81,82,85,87,95,96,99,100,101,102,103,105,108,109];
   this.GXLastCtrlId =109;
   this.TIMER1Container = gx.uc.getNew(this, 88, 22, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12es2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE8",grid:0};
   GXValidFnc[9]={fld:"TABLE9",grid:0};
   GXValidFnc[12]={fld:"TABLE1",grid:0};
   GXValidFnc[20]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOBEMDATA",gxz:"ZV26LancamentoBemData",gxold:"OV26LancamentoBemData",gxvar:"AV26LancamentoBemData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26LancamentoBemData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26LancamentoBemData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOBEMDATA",gx.O.AV26LancamentoBemData,0)},c2v:function(){gx.O.AV26LancamentoBemData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOBEMDATA")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXTDATAAUTBAIXA", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDTAUTBAIXA",gxz:"ZV42BemDtAutBaixa",gxold:"OV42BemDtAutBaixa",gxvar:"AV42BemDtAutBaixa",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42BemDtAutBaixa=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV42BemDtAutBaixa=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBEMDTAUTBAIXA",gx.O.AV42BemDtAutBaixa,0)},c2v:function(){gx.O.AV42BemDtAutBaixa=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBEMDTAUTBAIXA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TXTANOPROCESSO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMNOPROCESSOBAIXA",gxz:"ZV28BemNoProcessoBaixa",gxold:"OV28BemNoProcessoBaixa",gxvar:"AV28BemNoProcessoBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28BemNoProcessoBaixa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28BemNoProcessoBaixa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMNOPROCESSOBAIXA",gx.O.AV28BemNoProcessoBaixa,0)},c2v:function(){gx.O.AV28BemNoProcessoBaixa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMNOPROCESSOBAIXA",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TXTBARRAANO", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMANOPROCESSOBAIXA",gxz:"ZV27BemAnoProcessoBaixa",gxold:"OV27BemAnoProcessoBaixa",gxvar:"AV27BemAnoProcessoBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27BemAnoProcessoBaixa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27BemAnoProcessoBaixa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMANOPROCESSOBAIXA",gx.O.AV27BemAnoProcessoBaixa,0)},c2v:function(){gx.O.AV27BemAnoProcessoBaixa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMANOPROCESSOBAIXA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo,isvalid:null,rgrid:[],fld:"vBEMCODIGO",gxz:"ZV29BemCodigo",gxold:"OV29BemCodigo",gxvar:"AV29BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV29BemCodigo,0)},c2v:function(){gx.O.AV29BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO",gxz:"ZV30BemSubgrupo",gxold:"OV30BemSubgrupo",gxvar:"AV30BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV30BemSubgrupo,0)},c2v:function(){gx.O.AV30BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAORESUMIDA",gxz:"ZV35BemDescricaoResumida",gxold:"OV35BemDescricaoResumida",gxvar:"AV35BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35BemDescricaoResumida=Value},v2z:function(Value){gx.O.ZV35BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDA",gx.O.AV35BemDescricaoResumida,0)},c2v:function(){gx.O.AV35BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Condicaobemid,isvalid:null,rgrid:[],fld:"vCONDICAOBEMID",gxz:"ZV31CondicaoBemId",gxold:"OV31CondicaoBemId",gxvar:"AV31CondicaoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31CondicaoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31CondicaoBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONDICAOBEMID",gx.O.AV31CondicaoBemId,0)},c2v:function(){gx.O.AV31CondicaoBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONDICAOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONDICAOBEMDESCRICAO",gxz:"ZV34CondicaoBemDescricao",gxold:"OV34CondicaoBemDescricao",gxvar:"AV34CondicaoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34CondicaoBemDescricao=Value},v2z:function(Value){gx.O.ZV34CondicaoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONDICAOBEMDESCRICAO",gx.O.AV34CondicaoBemDescricao,0)},c2v:function(){gx.O.AV34CondicaoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONDICAOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMVLRAQUISICAO",gxz:"ZV33BemVlrAquisicao",gxold:"OV33BemVlrAquisicao",gxvar:"AV33BemVlrAquisicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33BemVlrAquisicao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV33BemVlrAquisicao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vBEMVLRAQUISICAO",gx.O.AV33BemVlrAquisicao,2,',')},c2v:function(){gx.O.AV33BemVlrAquisicao=this.val()},val:function(){return gx.fn.getDecimalValue("vBEMVLRAQUISICAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TXTTRADUTOR", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV32ContaContabilTradutor",gxold:"OV32ContaContabilTradutor",gxvar:"AV32ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32ContaContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTOR",gx.O.AV32ContaContabilTradutor,0)},c2v:function(){gx.O.AV32ContaContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[65]={fld:"IMGCCONT1",grid:0};
   GXValidFnc[66]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV59ContaContabilNome",gxold:"OV59ContaContabilNome",gxvar:"AV59ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59ContaContabilNome=Value},v2z:function(Value){gx.O.ZV59ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV59ContaContabilNome,0)},c2v:function(){gx.O.AV59ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV54ContaContabilId",gxold:"OV54ContaContabilId",gxvar:"AV54ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54ContaContabilId=Value},v2z:function(Value){gx.O.ZV54ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV54ContaContabilId,0)},c2v:function(){gx.O.AV54ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TAB3",grid:0};
   GXValidFnc[73]={fld:"IMAGE2",grid:0};
   GXValidFnc[75]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[76]={fld:"TAB2",grid:0};
   GXValidFnc[79]={fld:"IMGERRO",grid:0};
   GXValidFnc[81]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[82]={fld:"TAB1",grid:0};
   GXValidFnc[85]={fld:"IMGPROC",grid:0};
   GXValidFnc[87]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV89ProcessoId",gxold:"OV89ProcessoId",gxvar:"AV89ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV89ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV89ProcessoId,0)},c2v:function(){gx.O.AV89ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILMASC",gxz:"ZV62ContaContabilMasc",gxold:"OV62ContaContabilMasc",gxvar:"AV62ContaContabilMasc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62ContaContabilMasc=Value},v2z:function(Value){gx.O.ZV62ContaContabilMasc=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILMASC",gx.O.AV62ContaContabilMasc,0)},c2v:function(){gx.O.AV62ContaContabilMasc=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILMASC")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"JS", format:2,grid:0};
   GXValidFnc[100]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraocondicao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCONDICAO",gxz:"ZV39EmpresaPadraoCondicao",gxold:"OV39EmpresaPadraoCondicao",gxvar:"AV39EmpresaPadraoCondicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39EmpresaPadraoCondicao=Value},v2z:function(Value){gx.O.ZV39EmpresaPadraoCondicao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCONDICAO",gx.O.AV39EmpresaPadraoCondicao,0)},c2v:function(){gx.O.AV39EmpresaPadraoCondicao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCONDICAO")},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraobem,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOBEM",gxz:"ZV38EmpresaPadraoBem",gxold:"OV38EmpresaPadraoBem",gxvar:"AV38EmpresaPadraoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38EmpresaPadraoBem=Value},v2z:function(Value){gx.O.ZV38EmpresaPadraoBem=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOBEM",gx.O.AV38EmpresaPadraoBem,0)},c2v:function(){gx.O.AV38EmpresaPadraoBem=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOBEM")},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraoconta,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCONTA",gxz:"ZV53EmpresaPadraoConta",gxold:"OV53EmpresaPadraoConta",gxvar:"AV53EmpresaPadraoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53EmpresaPadraoConta=Value},v2z:function(Value){gx.O.ZV53EmpresaPadraoConta=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCONTA",gx.O.AV53EmpresaPadraoConta,0)},c2v:function(){gx.O.AV53EmpresaPadraoConta=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCONTA")},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV83AcessoSistemaSequencia",gxold:"OV83AcessoSistemaSequencia",gxvar:"AV83AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV83AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV83AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[105]={fld:"BTNHELP",grid:0};
   GXValidFnc[108]={fld:"PROMPT_BEMCODIGO_BEMSUBGRUPO",grid:0};
   GXValidFnc[109]={fld:"PROMPT_CONDICAOBEMID",grid:0};
   this.AV26LancamentoBemData = gx.date.nullDate() ;
   this.ZV26LancamentoBemData = gx.date.nullDate() ;
   this.OV26LancamentoBemData = gx.date.nullDate() ;
   this.AV42BemDtAutBaixa = gx.date.nullDate() ;
   this.ZV42BemDtAutBaixa = gx.date.nullDate() ;
   this.OV42BemDtAutBaixa = gx.date.nullDate() ;
   this.AV28BemNoProcessoBaixa = 0 ;
   this.ZV28BemNoProcessoBaixa = 0 ;
   this.OV28BemNoProcessoBaixa = 0 ;
   this.AV27BemAnoProcessoBaixa = 0 ;
   this.ZV27BemAnoProcessoBaixa = 0 ;
   this.OV27BemAnoProcessoBaixa = 0 ;
   this.AV29BemCodigo = 0 ;
   this.ZV29BemCodigo = 0 ;
   this.OV29BemCodigo = 0 ;
   this.AV30BemSubgrupo = 0 ;
   this.ZV30BemSubgrupo = 0 ;
   this.OV30BemSubgrupo = 0 ;
   this.AV35BemDescricaoResumida = "" ;
   this.ZV35BemDescricaoResumida = "" ;
   this.OV35BemDescricaoResumida = "" ;
   this.AV31CondicaoBemId = 0 ;
   this.ZV31CondicaoBemId = 0 ;
   this.OV31CondicaoBemId = 0 ;
   this.AV34CondicaoBemDescricao = "" ;
   this.ZV34CondicaoBemDescricao = "" ;
   this.OV34CondicaoBemDescricao = "" ;
   this.AV33BemVlrAquisicao = 0 ;
   this.ZV33BemVlrAquisicao = 0 ;
   this.OV33BemVlrAquisicao = 0 ;
   this.AV32ContaContabilTradutor = 0 ;
   this.ZV32ContaContabilTradutor = 0 ;
   this.OV32ContaContabilTradutor = 0 ;
   this.AV59ContaContabilNome = "" ;
   this.ZV59ContaContabilNome = "" ;
   this.OV59ContaContabilNome = "" ;
   this.AV54ContaContabilId = "" ;
   this.ZV54ContaContabilId = "" ;
   this.OV54ContaContabilId = "" ;
   this.AV89ProcessoId = 0 ;
   this.ZV89ProcessoId = 0 ;
   this.OV89ProcessoId = 0 ;
   this.AV62ContaContabilMasc = "" ;
   this.ZV62ContaContabilMasc = "" ;
   this.OV62ContaContabilMasc = "" ;
   this.AV39EmpresaPadraoCondicao = "" ;
   this.ZV39EmpresaPadraoCondicao = "" ;
   this.OV39EmpresaPadraoCondicao = "" ;
   this.AV38EmpresaPadraoBem = "" ;
   this.ZV38EmpresaPadraoBem = "" ;
   this.OV38EmpresaPadraoBem = "" ;
   this.AV53EmpresaPadraoConta = "" ;
   this.ZV53EmpresaPadraoConta = "" ;
   this.OV53EmpresaPadraoConta = "" ;
   this.AV83AcessoSistemaSequencia = 0 ;
   this.ZV83AcessoSistemaSequencia = 0 ;
   this.OV83AcessoSistemaSequencia = 0 ;
   this.AV26LancamentoBemData = gx.date.nullDate() ;
   this.AV42BemDtAutBaixa = gx.date.nullDate() ;
   this.AV28BemNoProcessoBaixa = 0 ;
   this.AV27BemAnoProcessoBaixa = 0 ;
   this.AV29BemCodigo = 0 ;
   this.AV30BemSubgrupo = 0 ;
   this.AV35BemDescricaoResumida = "" ;
   this.AV31CondicaoBemId = 0 ;
   this.AV34CondicaoBemDescricao = "" ;
   this.AV33BemVlrAquisicao = 0 ;
   this.AV32ContaContabilTradutor = 0 ;
   this.AV59ContaContabilNome = "" ;
   this.AV54ContaContabilId = "" ;
   this.AV89ProcessoId = 0 ;
   this.AV62ContaContabilMasc = "" ;
   this.AV39EmpresaPadraoCondicao = "" ;
   this.AV38EmpresaPadraoBem = "" ;
   this.AV53EmpresaPadraoConta = "" ;
   this.AV83AcessoSistemaSequencia = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.A2034TipoBemId = 0 ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2037TipoBemSnCorrecaoBem = "" ;
   this.A2033TipoBemTpReducao = "" ;
   this.A2038TipoBemSnCorrecaoRed = "" ;
   this.A2039TipoBemSnContAquBai = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A62ContaContabilId = "" ;
   this.A2334CondicaoBemId = 0 ;
   this.A2333CondicaoBemEmpresaId = "" ;
   this.A2318BemSubgrupo = 0 ;
   this.A2262BemCodigo = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2320BemSituacao = "" ;
   this.A2323BemDtUltimaCorrecao = gx.date.nullDate() ;
   this.Events = {"e11es2_client": ["'FECHAR'", true] ,"e14es2_client": ["ENTER", true] ,"e12es2_client": ["TIMER1.ELAPSED", true] ,"e17es2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV89ProcessoId',fld:'vPROCESSOID'}],[{ctrl:'BTNCONFIRMAR',prop:'Enabled'},{ctrl:'BUTTON2',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV83AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV27BemAnoProcessoBaixa',fld:'vBEMANOPROCESSOBAIXA'},{av:'AV28BemNoProcessoBaixa',fld:'vBEMNOPROCESSOBAIXA'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV38EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'AV29BemCodigo',fld:'vBEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV30BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2320BemSituacao',fld:'BEMSITUACAO'},{av:'A2323BemDtUltimaCorrecao',fld:'BEMDTULTIMACORRECAO'},{av:'AV26LancamentoBemData',fld:'vLANCAMENTOBEMDATA'},{av:'AV31CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'A2333CondicaoBemEmpresaId',fld:'CONDICAOBEMEMPRESAID'},{av:'AV39EmpresaPadraoCondicao',fld:'vEMPRESAPADRAOCONDICAO'},{av:'A2334CondicaoBemId',fld:'CONDICAOBEMID'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV52EmpresaPadraoTipo',fld:'vEMPRESAPADRAOTIPO'},{av:'AV51TipoBemId',fld:'vTIPOBEMID'},{av:'A2037TipoBemSnCorrecaoBem',fld:'TIPOBEMSNCORRECAOBEM'},{av:'A2033TipoBemTpReducao',fld:'TIPOBEMTPREDUCAO'},{av:'A2038TipoBemSnCorrecaoRed',fld:'TIPOBEMSNCORRECAORED'},{av:'A2039TipoBemSnContAquBai',fld:'TIPOBEMSNCONTAQUBAI'},{av:'AV32ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV53EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV55TipoBemSnCorrecaoBem',fld:'vTIPOBEMSNCORRECAOBEM'},{av:'AV57TipoBemSnCorrecaoRed',fld:'vTIPOBEMSNCORRECAORED'},{av:'AV56TipoBemTpReducao',fld:'vTIPOBEMTPREDUCAO'},{av:'AV90EmpresaPadraoParametrosCalculo',fld:'vEMPRESAPADRAOPARAMETROSCALCULO'},{av:'AV80EmpresaPadraoLanc',fld:'vEMPRESAPADRAOLANC'},{av:'AV91EmpresaPadraoParametrosSistema',fld:'vEMPRESAPADRAOPARAMETROSSISTEMA'},{av:'AV93EmpresaPadraoDepreciacao',fld:'vEMPRESAPADRAODEPRECIACAO'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV33BemVlrAquisicao',fld:'vBEMVLRAQUISICAO'},{av:'AV44SnIntPatCbl',fld:'vSNINTPATCBL'},{av:'AV81AnoAbertoParam',fld:'vANOABERTOPARAM'},{av:'AV54ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV42BemDtAutBaixa',fld:'vBEMDTAUTBAIXA'},{av:'AV94SnTermoBaixa',fld:'vSNTERMOBAIXA'},{av:'AV59ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV35BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV34CondicaoBemDescricao',fld:'vCONDICAOBEMDESCRICAO'}],[{av:'AV77SnErro',fld:'vSNERRO'},{av:'AV108GXLvl154',fld:'vGXLVL154'},{av:'AV51TipoBemId',fld:'vTIPOBEMID'},{av:'AV109GXLvl180',fld:'vGXLVL180'},{av:'AV55TipoBemSnCorrecaoBem',fld:'vTIPOBEMSNCORRECAOBEM'},{av:'AV56TipoBemTpReducao',fld:'vTIPOBEMTPREDUCAO'},{av:'AV57TipoBemSnCorrecaoRed',fld:'vTIPOBEMSNCORRECAORED'},{av:'AV111GXLvl218',fld:'vGXLVL218'},{av:'AV54ContaContabilId',fld:'vCONTACONTABILID'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV84ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV85IntPatCbl',fld:'vINTPATCBL'},{av:'AV86AnoStr',fld:'vANOSTR'},{av:'AV87AnoAbertoPat',fld:'vANOABERTOPAT'},{av:'AV88DataUltimaCorrecao',fld:'vDATAULTIMACORRECAO'},{av:'AV89ProcessoId',fld:'vPROCESSOID'},{av:'AV92SdtBaixaBem',fld:'vSDTBAIXABEM'},{av:'AV103ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV46SaldoBemVlrCorBem',fld:'vSALDOBEMVLRCORBEM'},{av:'AV47SaldoBemVlrCorRedutora',fld:'vSALDOBEMVLRCORREDUTORA'},{av:'AV48SaldoBemVlrIcms',fld:'vSALDOBEMVLRICMS'},{av:'AV49SaldoBemVlrRedutora',fld:'vSALDOBEMVLRREDUTORA'},{av:'AV50SaldoBemVlrBem',fld:'vSALDOBEMVLRBEM'},{av:'AV33BemVlrAquisicao',fld:'vBEMVLRAQUISICAO'},{av:'AV58LancamentoBemStContabil',fld:'vLANCAMENTOBEMSTCONTABIL'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV26LancamentoBemData',fld:'vLANCAMENTOBEMDATA'},{av:'AV30BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV100BemCodigoRel',fld:'vBEMCODIGOREL'},{av:'AV101BemSubgrupoRel',fld:'vBEMSUBGRUPOREL'},{av:'AV102BemVlrAquisicaoRel',fld:'vBEMVLRAQUISICAOREL'},{av:'AV29BemCodigo',fld:'vBEMCODIGO'},{av:'AV31CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV32ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV59ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV35BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV34CondicaoBemDescricao',fld:'vCONDICAOBEMDESCRICAO'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV89ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'},{av:'AV38EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV80EmpresaPadraoLanc',fld:'vEMPRESAPADRAOLANC'},{av:'AV29BemCodigo',fld:'vBEMCODIGO'},{av:'AV30BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV26LancamentoBemData',fld:'vLANCAMENTOBEMDATA'},{av:'AV33BemVlrAquisicao',fld:'vBEMVLRAQUISICAO'},{av:'AV32ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV53EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV44SnIntPatCbl',fld:'vSNINTPATCBL'},{av:'AV81AnoAbertoParam',fld:'vANOABERTOPARAM'},{av:'AV54ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV31CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV27BemAnoProcessoBaixa',fld:'vBEMANOPROCESSOBAIXA'},{av:'AV28BemNoProcessoBaixa',fld:'vBEMNOPROCESSOBAIXA'},{av:'AV42BemDtAutBaixa',fld:'vBEMDTAUTBAIXA'},{av:'AV94SnTermoBaixa',fld:'vSNTERMOBAIXA'},{av:'AV59ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV35BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV34CondicaoBemDescricao',fld:'vCONDICAOBEMDESCRICAO'}],[{av:'AV112GXLvl349',fld:'vGXLVL349'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'AV89ProcessoId',fld:'vPROCESSOID'},{av:'AV38EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV39EmpresaPadraoCondicao',fld:'vEMPRESAPADRAOCONDICAO'},{av:'AV52EmpresaPadraoTipo',fld:'vEMPRESAPADRAOTIPO'},{av:'AV53EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV80EmpresaPadraoLanc',fld:'vEMPRESAPADRAOLANC'},{av:'AV91EmpresaPadraoParametrosSistema',fld:'vEMPRESAPADRAOPARAMETROSSISTEMA'},{av:'AV90EmpresaPadraoParametrosCalculo',fld:'vEMPRESAPADRAOPARAMETROSCALCULO'},{av:'AV93EmpresaPadraoDepreciacao',fld:'vEMPRESAPADRAODEPRECIACAO'},{av:'AV43SnProcessoBaixa',fld:'vSNPROCESSOBAIXA'},{av:'AV44SnIntPatCbl',fld:'vSNINTPATCBL'},{av:'AV82AnoAbertoParamStr',fld:'vANOABERTOPARAMSTR'},{av:'AV81AnoAbertoParam',fld:'vANOABERTOPARAM'},{av:'AV94SnTermoBaixa',fld:'vSNTERMOBAIXA'},{av:'AV46SaldoBemVlrCorBem',fld:'vSALDOBEMVLRCORBEM'},{av:'AV47SaldoBemVlrCorRedutora',fld:'vSALDOBEMVLRCORREDUTORA'},{av:'AV48SaldoBemVlrIcms',fld:'vSALDOBEMVLRICMS'},{av:'AV49SaldoBemVlrRedutora',fld:'vSALDOBEMVLRREDUTORA'},{av:'AV50SaldoBemVlrBem',fld:'vSALDOBEMVLRBEM'},{av:'AV33BemVlrAquisicao',fld:'vBEMVLRAQUISICAO'},{av:'AV58LancamentoBemStContabil',fld:'vLANCAMENTOBEMSTCONTABIL'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV54ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV26LancamentoBemData',fld:'vLANCAMENTOBEMDATA'},{av:'AV30BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV100BemCodigoRel',fld:'vBEMCODIGOREL'},{av:'AV101BemSubgrupoRel',fld:'vBEMSUBGRUPOREL'},{av:'AV102BemVlrAquisicaoRel',fld:'vBEMVLRAQUISICAOREL'},{av:'AV29BemCodigo',fld:'vBEMCODIGO'},{av:'AV31CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'AV32ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV59ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV35BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV34CondicaoBemDescricao',fld:'vCONDICAOBEMDESCRICAO'}]];
   this.setPrompt("IMGCCONT1", [67,64]);
   this.setPrompt("PROMPT_BEMCODIGO_BEMSUBGRUPO", [42,44]);
   this.setPrompt("PROMPT_CONDICAOBEMID", [51]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarbaixabem());
