/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:50:26.96
*/
gx.evt.autoSkip = false;
gx.define('haberturamesestoque', false, function () {
   this.ServerClass =  "haberturamesestoque" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Empresalogadaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESALOGADAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Usrcod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSRCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("vMES","Enabled", 0 );
      gx.fn.setCtrlProperty("vANO","Enabled", 0 );
      gx.fn.setCtrlProperty("vDTESTFECHAMENTO","Enabled", 0 );
      gx.fn.setCtrlProperty("vSNRECALCULARQTDE","Enabled", 0 );
      gx.fn.setCtrlProperty("vSNRECALCULARCUSTO","Enabled", 0 );
      gx.fn.setCtrlProperty("BTNCONFIRMAR","Enabled", 0 );
      gx.fn.setCtrlProperty("BTNFECHAR","Enabled", 0 );
   };
   this.s152_client=function()
   {
      gx.fn.setCtrlProperty("vMES","Enabled", 1 );
      gx.fn.setCtrlProperty("vANO","Enabled", 1 );
      gx.fn.setCtrlProperty("vDTESTFECHAMENTO","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNRECALCULARQTDE","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNRECALCULARCUSTO","Enabled", 1 );
      gx.fn.setCtrlProperty("BTNCONFIRMAR","Enabled", 1 );
      gx.fn.setCtrlProperty("BTNFECHAR","Enabled", 1 );
   };
   this.e11xy2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14xy2_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", true, null, false, false);
   };
   this.e12xy2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e17xy2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e18xy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,16,19,21,25,29,32,35,37,38,41,43,44,47,49,57,58,59,60,63,64,65,66,67,68,70];
   this.GXLastCtrlId =70;
   this.TIMER1Container = gx.uc.getNew(this, 50, 14, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12xy2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV19Mes",gxold:"OV19Mes",gxvar:"AV19Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Mes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV19Mes,0)},c2v:function(){gx.O.AV19Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TXTBARRA", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV20Ano",gxold:"OV20Ano",gxvar:"AV20Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV20Ano,0)},c2v:function(){gx.O.AV20Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTDTFECHAMENTO", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTESTFECHAMENTO",gxz:"ZV33DtEstFechamento",gxold:"OV33DtEstFechamento",gxvar:"AV33DtEstFechamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33DtEstFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33DtEstFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTESTFECHAMENTO",gx.O.AV33DtEstFechamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33DtEstFechamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTESTFECHAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRECALCULARQTDE",gxz:"ZV26SnRecalcularQtde",gxold:"OV26SnRecalcularQtde",gxvar:"AV26SnRecalcularQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26SnRecalcularQtde=Value},v2z:function(Value){gx.O.ZV26SnRecalcularQtde=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNRECALCULARQTDE",gx.O.AV26SnRecalcularQtde,"S")},c2v:function(){gx.O.AV26SnRecalcularQtde=this.val()},val:function(){return gx.fn.getControlValue("vSNRECALCULARQTDE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRECALCULARCUSTO",gxz:"ZV27SnRecalcularCusto",gxold:"OV27SnRecalcularCusto",gxvar:"AV27SnRecalcularCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV27SnRecalcularCusto=Value},v2z:function(Value){gx.O.ZV27SnRecalcularCusto=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNRECALCULARCUSTO",gx.O.AV27SnRecalcularCusto,"S")},c2v:function(){gx.O.AV27SnRecalcularCusto=this.val()},val:function(){return gx.fn.getControlValue("vSNRECALCULARCUSTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[32]={fld:"TAB3",grid:0};
   GXValidFnc[35]={fld:"IMAGE2",grid:0};
   GXValidFnc[37]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[38]={fld:"TAB2",grid:0};
   GXValidFnc[41]={fld:"IMGERRO",grid:0};
   GXValidFnc[43]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[44]={fld:"TAB1",grid:0};
   GXValidFnc[47]={fld:"IMGPROC",grid:0};
   GXValidFnc[49]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresalogadaid,isvalid:null,rgrid:[],fld:"vEMPRESALOGADAID",gxz:"ZV8EmpresaLogadaId",gxold:"OV8EmpresaLogadaId",gxvar:"AV8EmpresaLogadaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8EmpresaLogadaId=Value},v2z:function(Value){gx.O.ZV8EmpresaLogadaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESALOGADAID",gx.O.AV8EmpresaLogadaId,0)},c2v:function(){gx.O.AV8EmpresaLogadaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESALOGADAID")},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV23ProcessoId",gxold:"OV23ProcessoId",gxvar:"AV23ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV23ProcessoId,0)},c2v:function(){gx.O.AV23ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usrcod,isvalid:null,rgrid:[],fld:"vUSRCOD",gxz:"ZV5UsrCod",gxold:"OV5UsrCod",gxvar:"AV5UsrCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5UsrCod=Value},v2z:function(Value){gx.O.ZV5UsrCod=Value},v2c:function(){gx.fn.setControlValue("vUSRCOD",gx.O.AV5UsrCod,0)},c2v:function(){gx.O.AV5UsrCod=this.val()},val:function(){return gx.fn.getControlValue("vUSRCOD")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV25AcessoSistemaSequencia",gxold:"OV25AcessoSistemaSequencia",gxvar:"AV25AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV25AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"JS", format:2,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESABERTO",gxz:"ZV36MesAberto",gxold:"OV36MesAberto",gxvar:"AV36MesAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36MesAberto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36MesAberto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESABERTO",gx.O.AV36MesAberto,0)},c2v:function(){gx.O.AV36MesAberto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESABERTO",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOABERTO",gxz:"ZV37AnoAberto",gxold:"OV37AnoAberto",gxvar:"AV37AnoAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37AnoAberto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37AnoAberto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOABERTO",gx.O.AV37AnoAberto,0)},c2v:function(){gx.O.AV37AnoAberto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOABERTO",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTESTABERTO",gxz:"ZV31DtEstAberto",gxold:"OV31DtEstAberto",gxvar:"AV31DtEstAberto",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31DtEstAberto=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31DtEstAberto=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTESTABERTO",gx.O.AV31DtEstAberto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV31DtEstAberto=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTESTABERTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[67]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTESTIMPLAN",gxz:"ZV32DtEstImplan",gxold:"OV32DtEstImplan",gxvar:"AV32DtEstImplan",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32DtEstImplan=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32DtEstImplan=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTESTIMPLAN",gx.O.AV32DtEstImplan,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV32DtEstImplan=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTESTIMPLAN")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[68]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTESTFECPARAMETRO",gxz:"ZV34DtEstFecParametro",gxold:"OV34DtEstFecParametro",gxvar:"AV34DtEstFecParametro",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34DtEstFecParametro=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV34DtEstFecParametro=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTESTFECPARAMETRO",gx.O.AV34DtEstFecParametro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34DtEstFecParametro=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTESTFECPARAMETRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[70]={fld:"BTNHELP",grid:0};
   this.AV19Mes = 0 ;
   this.ZV19Mes = 0 ;
   this.OV19Mes = 0 ;
   this.AV20Ano = 0 ;
   this.ZV20Ano = 0 ;
   this.OV20Ano = 0 ;
   this.AV33DtEstFechamento = gx.date.nullDate() ;
   this.ZV33DtEstFechamento = gx.date.nullDate() ;
   this.OV33DtEstFechamento = gx.date.nullDate() ;
   this.AV26SnRecalcularQtde = "" ;
   this.ZV26SnRecalcularQtde = "" ;
   this.OV26SnRecalcularQtde = "" ;
   this.AV27SnRecalcularCusto = "" ;
   this.ZV27SnRecalcularCusto = "" ;
   this.OV27SnRecalcularCusto = "" ;
   this.AV8EmpresaLogadaId = "" ;
   this.ZV8EmpresaLogadaId = "" ;
   this.OV8EmpresaLogadaId = "" ;
   this.AV23ProcessoId = 0 ;
   this.ZV23ProcessoId = 0 ;
   this.OV23ProcessoId = 0 ;
   this.AV5UsrCod = "" ;
   this.ZV5UsrCod = "" ;
   this.OV5UsrCod = "" ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.ZV25AcessoSistemaSequencia = 0 ;
   this.OV25AcessoSistemaSequencia = 0 ;
   this.AV36MesAberto = 0 ;
   this.ZV36MesAberto = 0 ;
   this.OV36MesAberto = 0 ;
   this.AV37AnoAberto = 0 ;
   this.ZV37AnoAberto = 0 ;
   this.OV37AnoAberto = 0 ;
   this.AV31DtEstAberto = gx.date.nullDate() ;
   this.ZV31DtEstAberto = gx.date.nullDate() ;
   this.OV31DtEstAberto = gx.date.nullDate() ;
   this.AV32DtEstImplan = gx.date.nullDate() ;
   this.ZV32DtEstImplan = gx.date.nullDate() ;
   this.OV32DtEstImplan = gx.date.nullDate() ;
   this.AV34DtEstFecParametro = gx.date.nullDate() ;
   this.ZV34DtEstFecParametro = gx.date.nullDate() ;
   this.OV34DtEstFecParametro = gx.date.nullDate() ;
   this.AV19Mes = 0 ;
   this.AV20Ano = 0 ;
   this.AV33DtEstFechamento = gx.date.nullDate() ;
   this.AV26SnRecalcularQtde = "" ;
   this.AV27SnRecalcularCusto = "" ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV23ProcessoId = 0 ;
   this.AV5UsrCod = "" ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.AV36MesAberto = 0 ;
   this.AV37AnoAberto = 0 ;
   this.AV31DtEstAberto = gx.date.nullDate() ;
   this.AV32DtEstImplan = gx.date.nullDate() ;
   this.AV34DtEstFecParametro = gx.date.nullDate() ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.A6445ParmCustoMedioPrograma = "" ;
   this.A6447ParmCustoMedioUsuario = "" ;
   this.A6446ParmCustoMedioEmpId = "" ;
   this.Events = {"e11xy2_client": ["'FECHAR'", true] ,"e14xy2_client": ["'CONFIRMAR'", true] ,"e12xy2_client": ["TIMER1.ELAPSED", true] ,"e17xy2_client": ["ENTER", true] ,"e18xy2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV19Mes',fld:'vMES'},{av:'AV20Ano',fld:'vANO'},{av:'AV31DtEstAberto',fld:'vDTESTABERTO'},{av:'AV32DtEstImplan',fld:'vDTESTIMPLAN'},{av:'AV33DtEstFechamento',fld:'vDTESTFECHAMENTO'},{av:'AV34DtEstFecParametro',fld:'vDTESTFECPARAMETRO'},{av:'AV27SnRecalcularCusto',fld:'vSNRECALCULARCUSTO'},{av:'A6446ParmCustoMedioEmpId',fld:'PARMCUSTOMEDIOEMPID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A6447ParmCustoMedioUsuario',fld:'PARMCUSTOMEDIOUSUARIO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A6445ParmCustoMedioPrograma',fld:'PARMCUSTOMEDIOPROGRAMA'},{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV26SnRecalcularQtde',fld:'vSNRECALCULARQTDE'},{av:'AV35ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV36MesAberto',fld:'vMESABERTO'},{av:'AV37AnoAberto',fld:'vANOABERTO'},{av:'AV17Sistema',fld:'vSISTEMA'}],[{av:'AV46TpErro',fld:'vTPERRO'},{av:'AV21DataAberturaStr',fld:'vDATAABERTURASTR'},{av:'AV22DataAbertura',fld:'vDATAABERTURA'},{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV23ProcessoId',fld:'vPROCESSOID'},{av:'AV47ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV17Sistema',fld:'vSISTEMA'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV26SnRecalcularQtde',fld:'vSNRECALCULARQTDE'},{av:'AV27SnRecalcularCusto',fld:'vSNRECALCULARCUSTO'},{av:'AV37AnoAberto',fld:'vANOABERTO'},{av:'AV36MesAberto',fld:'vMESABERTO'},{av:'AV35ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'gx.fn.getCtrlProperty("vMES","Enabled")',ctrl:'vMES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANO","Enabled")',ctrl:'vANO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTESTFECHAMENTO","Enabled")',ctrl:'vDTESTFECHAMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNRECALCULARQTDE","Enabled")',ctrl:'vSNRECALCULARQTDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNRECALCULARCUSTO","Enabled")',ctrl:'vSNRECALCULARCUSTO',prop:'Enabled'},{ctrl:'BTNCONFIRMAR',prop:'Enabled'},{ctrl:'BTNFECHAR',prop:'Enabled'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV23ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'},{av:'AV19Mes',fld:'vMES'},{av:'AV20Ano',fld:'vANO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV33DtEstFechamento',fld:'vDTESTFECHAMENTO'}],[{av:'AV53GXLvl218',fld:'vGXLVL218'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'AV23ProcessoId',fld:'vPROCESSOID'},{av:'AV21DataAberturaStr',fld:'vDATAABERTURASTR'},{av:'AV22DataAbertura',fld:'vDATAABERTURA'},{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'gx.fn.getCtrlProperty("vMES","Enabled")',ctrl:'vMES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANO","Enabled")',ctrl:'vANO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTESTFECHAMENTO","Enabled")',ctrl:'vDTESTFECHAMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNRECALCULARQTDE","Enabled")',ctrl:'vSNRECALCULARQTDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNRECALCULARCUSTO","Enabled")',ctrl:'vSNRECALCULARCUSTO',prop:'Enabled'},{ctrl:'BTNCONFIRMAR',prop:'Enabled'},{ctrl:'BTNFECHAR',prop:'Enabled'}]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new haberturamesestoque());
