/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:35:21.61
*/
gx.evt.autoSkip = false;
gx.define('hexcluircorrecaomonetaria', false, function () {
   this.ServerClass =  "hexcluircorrecaomonetaria" ;
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
   this.e11ha2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14ha2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ha2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e16ha2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,23,25,28,30,33,35,37,39,42,44,47,49,51,54,57,59,60,63,65,66,69,71,81,82,83,84,86,88,89,90];
   this.GXLastCtrlId =90;
   this.TIMER1Container = gx.uc.getNew(this, 72, 20, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12ha2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[18]={fld:"LBLDTREF", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREFERENCIA",gxz:"ZV14DataReferencia",gxold:"OV14DataReferencia",gxvar:"AV14DataReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DataReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14DataReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREFERENCIA",gx.O.AV14DataReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14DataReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREFERENCIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"LBLDTULTCORR", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAULTCORRECAO",gxz:"ZV15DataUltCorrecao",gxold:"OV15DataUltCorrecao",gxvar:"AV15DataUltCorrecao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DataUltCorrecao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15DataUltCorrecao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAULTCORRECAO",gx.O.AV15DataUltCorrecao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15DataUltCorrecao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAULTCORRECAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"LBLCODBEM", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLERCODBEM",grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo,isvalid:null,rgrid:[],fld:"vBEMCODIGO",gxz:"ZV16BemCodigo",gxold:"OV16BemCodigo",gxvar:"AV16BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV16BemCodigo,0)},c2v:function(){gx.O.AV16BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCKBARRA", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO",gxz:"ZV17BemSubGrupo",gxold:"OV17BemSubGrupo",gxvar:"AV17BemSubGrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17BemSubGrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17BemSubGrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV17BemSubGrupo,0)},c2v:function(){gx.O.AV17BemSubGrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAO",gxz:"ZV20BemDescricao",gxold:"OV20BemDescricao",gxvar:"AV20BemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20BemDescricao=Value},v2z:function(Value){gx.O.ZV20BemDescricao=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAO",gx.O.AV20BemDescricao,0)},c2v:function(){gx.O.AV20BemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"LBLTBBEM", format:0,grid:0};
   GXValidFnc[44]={fld:"TABLETPBEM",grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMINICIAL",gxz:"ZV18TipoBemInicial",gxold:"OV18TipoBemInicial",gxvar:"AV18TipoBemInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18TipoBemInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18TipoBemInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMINICIAL",gx.O.AV18TipoBemInicial,0)},c2v:function(){gx.O.AV18TipoBemInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCKA", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMFINAL",gxz:"ZV19TipoBemFinal",gxold:"OV19TipoBemFinal",gxvar:"AV19TipoBemFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19TipoBemFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19TipoBemFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMFINAL",gx.O.AV19TipoBemFinal,0)},c2v:function(){gx.O.AV19TipoBemFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TAB3",grid:0};
   GXValidFnc[57]={fld:"IMAGE2",grid:0};
   GXValidFnc[59]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[60]={fld:"TAB2",grid:0};
   GXValidFnc[63]={fld:"IMGERRO",grid:0};
   GXValidFnc[65]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[66]={fld:"TAB1",grid:0};
   GXValidFnc[69]={fld:"IMGPROC",grid:0};
   GXValidFnc[71]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[81]={fld:"JS", format:2,grid:0};
   GXValidFnc[82]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraobem,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOBEM",gxz:"ZV9EmpresaPadraoBem",gxold:"OV9EmpresaPadraoBem",gxvar:"AV9EmpresaPadraoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadraoBem=Value},v2z:function(Value){gx.O.ZV9EmpresaPadraoBem=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOBEM",gx.O.AV9EmpresaPadraoBem,0)},c2v:function(){gx.O.AV9EmpresaPadraoBem=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOBEM")},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV31AcessoSistemaSequencia",gxold:"OV31AcessoSistemaSequencia",gxvar:"AV31AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV31AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV31AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV21ProcessoId",gxold:"OV21ProcessoId",gxvar:"AV21ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV21ProcessoId,0)},c2v:function(){gx.O.AV21ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"BTNHELP",grid:0};
   GXValidFnc[88]={fld:"PROMPT_BEMCODIGO_BEMSUBGRUPO",grid:0};
   GXValidFnc[89]={fld:"PROMPT_TIPOBEMINICIAL",grid:0};
   GXValidFnc[90]={fld:"PROMPT_TIPOBEMFINAL",grid:0};
   this.AV14DataReferencia = gx.date.nullDate() ;
   this.ZV14DataReferencia = gx.date.nullDate() ;
   this.OV14DataReferencia = gx.date.nullDate() ;
   this.AV15DataUltCorrecao = gx.date.nullDate() ;
   this.ZV15DataUltCorrecao = gx.date.nullDate() ;
   this.OV15DataUltCorrecao = gx.date.nullDate() ;
   this.AV16BemCodigo = 0 ;
   this.ZV16BemCodigo = 0 ;
   this.OV16BemCodigo = 0 ;
   this.AV17BemSubGrupo = 0 ;
   this.ZV17BemSubGrupo = 0 ;
   this.OV17BemSubGrupo = 0 ;
   this.AV20BemDescricao = "" ;
   this.ZV20BemDescricao = "" ;
   this.OV20BemDescricao = "" ;
   this.AV18TipoBemInicial = 0 ;
   this.ZV18TipoBemInicial = 0 ;
   this.OV18TipoBemInicial = 0 ;
   this.AV19TipoBemFinal = 0 ;
   this.ZV19TipoBemFinal = 0 ;
   this.OV19TipoBemFinal = 0 ;
   this.AV9EmpresaPadraoBem = "" ;
   this.ZV9EmpresaPadraoBem = "" ;
   this.OV9EmpresaPadraoBem = "" ;
   this.AV31AcessoSistemaSequencia = 0 ;
   this.ZV31AcessoSistemaSequencia = 0 ;
   this.OV31AcessoSistemaSequencia = 0 ;
   this.AV21ProcessoId = 0 ;
   this.ZV21ProcessoId = 0 ;
   this.OV21ProcessoId = 0 ;
   this.AV14DataReferencia = gx.date.nullDate() ;
   this.AV15DataUltCorrecao = gx.date.nullDate() ;
   this.AV16BemCodigo = 0 ;
   this.AV17BemSubGrupo = 0 ;
   this.AV20BemDescricao = "" ;
   this.AV18TipoBemInicial = 0 ;
   this.AV19TipoBemFinal = 0 ;
   this.AV9EmpresaPadraoBem = "" ;
   this.AV31AcessoSistemaSequencia = 0 ;
   this.AV21ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2262BemCodigo = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2264BemDescricaoResumida = "" ;
   this.Events = {"e11ha2_client": ["'FECHAR'", true] ,"e14ha2_client": ["ENTER", true] ,"e12ha2_client": ["TIMER1.ELAPSED", true] ,"e16ha2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV31AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'AV14DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV15DataUltCorrecao',fld:'vDATAULTCORRECAO'},{av:'AV16BemCodigo',fld:'vBEMCODIGO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV9EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV17BemSubGrupo',fld:'vBEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV19TipoBemFinal',fld:'vTIPOBEMFINAL'},{av:'AV18TipoBemInicial',fld:'vTIPOBEMINICIAL'},{av:'AV29EmpresaPadraoLancBem',fld:'vEMPRESAPADRAOLANCBEM'},{av:'AV30EmpresaPadraoParametros',fld:'vEMPRESAPADRAOPARAMETROS'},{av:'AV26AnopatabertoPat',fld:'vANOPATABERTOPAT'},{av:'AV5UsrCod',fld:'vUSRCOD'}],[{av:'AV23snErro',fld:'vSNERRO'},{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'AV38GXLvl102',fld:'vGXLVL102'},{av:'AV20BemDescricao',fld:'vBEMDESCRICAO'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV21ProcessoId',fld:'vPROCESSOID'},{av:'AV33ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV19TipoBemFinal',fld:'vTIPOBEMFINAL'},{av:'AV18TipoBemInicial',fld:'vTIPOBEMINICIAL'},{av:'AV17BemSubGrupo',fld:'vBEMSUBGRUPO'},{av:'AV16BemCodigo',fld:'vBEMCODIGO'},{av:'AV15DataUltCorrecao',fld:'vDATAULTCORRECAO'},{av:'AV14DataReferencia',fld:'vDATAREFERENCIA'},{av:'AV26AnopatabertoPat',fld:'vANOPATABERTOPAT'},{av:'AV9EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV30EmpresaPadraoParametros',fld:'vEMPRESAPADRAOPARAMETROS'},{av:'AV29EmpresaPadraoLancBem',fld:'vEMPRESAPADRAOLANCBEM'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV21ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV39GXLvl137',fld:'vGXLVL137'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.setPrompt("PROMPT_BEMCODIGO_BEMSUBGRUPO", [33,37]);
   this.setPrompt("PROMPT_TIPOBEMINICIAL", [47]);
   this.setPrompt("PROMPT_TIPOBEMFINAL", [51]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexcluircorrecaomonetaria());
