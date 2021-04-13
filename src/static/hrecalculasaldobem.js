/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:31:8.93
*/
gx.evt.autoSkip = false;
gx.define('hrecalculasaldobem', false, function () {
   this.ServerClass =  "hrecalculasaldobem" ;
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
   this.e11fk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14fk2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12fk2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e16fk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,25,27,29,30,33,36,38,39,42,44,45,48,50,60,61,62,63,64,66,68];
   this.GXLastCtrlId =68;
   this.TIMER1Container = gx.uc.getNew(this, 51, 17, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12fk2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINICIAL",gxz:"ZV20AnoInicial",gxold:"OV20AnoInicial",gxvar:"AV20AnoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AnoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AnoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOINICIAL",gx.O.AV20AnoInicial,0)},c2v:function(){gx.O.AV20AnoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE4",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo,isvalid:null,rgrid:[],fld:"vBEMCODIGO",gxz:"ZV22BemCodigo",gxold:"OV22BemCodigo",gxvar:"AV22BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV22BemCodigo,0)},c2v:function(){gx.O.AV22BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO",gxz:"ZV23BemSubgrupo",gxold:"OV23BemSubgrupo",gxvar:"AV23BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV23BemSubgrupo,0)},c2v:function(){gx.O.AV23BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAORESUMIDA",gxz:"ZV24BemDescricaoResumida",gxold:"OV24BemDescricaoResumida",gxvar:"AV24BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24BemDescricaoResumida=Value},v2z:function(Value){gx.O.ZV24BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDA",gx.O.AV24BemDescricaoResumida,0)},c2v:function(){gx.O.AV24BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TAB3",grid:0};
   GXValidFnc[36]={fld:"IMAGE2",grid:0};
   GXValidFnc[38]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[39]={fld:"TAB2",grid:0};
   GXValidFnc[42]={fld:"IMGERRO",grid:0};
   GXValidFnc[44]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[45]={fld:"TAB1",grid:0};
   GXValidFnc[48]={fld:"IMGPROC",grid:0};
   GXValidFnc[50]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV34AcessoSistemaSequencia",gxold:"OV34AcessoSistemaSequencia",gxvar:"AV34AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV34AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV34AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"JS", format:2,grid:0};
   GXValidFnc[62]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTER",gxz:"ZV27QtCaracter",gxold:"OV27QtCaracter",gxvar:"AV27QtCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27QtCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27QtCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTER",gx.O.AV27QtCaracter,0)},c2v:function(){gx.O.AV27QtCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV32ProcessoId",gxold:"OV32ProcessoId",gxvar:"AV32ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV32ProcessoId,0)},c2v:function(){gx.O.AV32ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"BTNHELP",grid:0};
   GXValidFnc[68]={fld:"PROMPT_BEMCODIGO_BEMSUBGRUPO",grid:0};
   this.AV20AnoInicial = 0 ;
   this.ZV20AnoInicial = 0 ;
   this.OV20AnoInicial = 0 ;
   this.AV22BemCodigo = 0 ;
   this.ZV22BemCodigo = 0 ;
   this.OV22BemCodigo = 0 ;
   this.AV23BemSubgrupo = 0 ;
   this.ZV23BemSubgrupo = 0 ;
   this.OV23BemSubgrupo = 0 ;
   this.AV24BemDescricaoResumida = "" ;
   this.ZV24BemDescricaoResumida = "" ;
   this.OV24BemDescricaoResumida = "" ;
   this.AV34AcessoSistemaSequencia = 0 ;
   this.ZV34AcessoSistemaSequencia = 0 ;
   this.OV34AcessoSistemaSequencia = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV27QtCaracter = 0 ;
   this.ZV27QtCaracter = 0 ;
   this.OV27QtCaracter = 0 ;
   this.AV32ProcessoId = 0 ;
   this.ZV32ProcessoId = 0 ;
   this.OV32ProcessoId = 0 ;
   this.AV20AnoInicial = 0 ;
   this.AV22BemCodigo = 0 ;
   this.AV23BemSubgrupo = 0 ;
   this.AV24BemDescricaoResumida = "" ;
   this.AV34AcessoSistemaSequencia = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.AV27QtCaracter = 0 ;
   this.AV32ProcessoId = 0 ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2262BemCodigo = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.Events = {"e11fk2_client": ["'FECHAR'", true] ,"e14fk2_client": ["ENTER", true] ,"e12fk2_client": ["TIMER1.ELAPSED", true] ,"e16fk2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20AnoInicial',fld:'vANOINICIAL'},{av:'AV30AnoDtPatImplan',fld:'vANODTPATIMPLAN'},{av:'AV33AnoPatAbertoAux',fld:'vANOPATABERTOAUX'},{av:'AV22BemCodigo',fld:'vBEMCODIGO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV23BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV31LancamentoBemEmpresaId',fld:'vLANCAMENTOBEMEMPRESAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV21tpErro',fld:'vTPERRO'},{av:'AV41GXLvl96',fld:'vGXLVL96'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV32ProcessoId',fld:'vPROCESSOID'},{av:'AV36ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV33AnoPatAbertoAux',fld:'vANOPATABERTOAUX'},{av:'AV20AnoInicial',fld:'vANOINICIAL'},{av:'AV23BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV22BemCodigo',fld:'vBEMCODIGO'},{av:'AV31LancamentoBemEmpresaId',fld:'vLANCAMENTOBEMEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV32ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV42GXLvl123',fld:'vGXLVL123'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.setPrompt("PROMPT_BEMCODIGO_BEMSUBGRUPO", [25,29]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrecalculasaldobem());
