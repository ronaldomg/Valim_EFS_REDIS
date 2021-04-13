/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:2:57.95
*/
gx.evt.autoSkip = false;
gx.define('hregistrarentradacustomedio', false, function () {
   this.ServerClass =  "hregistrarentradacustomedio" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV18EntradaDataEntrada=gx.fn.getDateValue("vENTRADADATAENTRADA") ;
      this.AV29Tela=gx.fn.getControlValue("vTELA") ;
   };
   this.e111bh2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e141bh2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151bh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,8];
   this.GXLastCtrlId =8;
   this.TIMER1Container = gx.uc.getNew(this, 9, 8, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 5000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e111bh2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"IMGPROC1",grid:0};
   GXValidFnc[7]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV21ProcessoId",gxold:"OV21ProcessoId",gxvar:"AV21ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV21ProcessoId,0)},c2v:function(){gx.O.AV21ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   this.AV21ProcessoId = 0 ;
   this.ZV21ProcessoId = 0 ;
   this.OV21ProcessoId = 0 ;
   this.AV21ProcessoId = 0 ;
   this.AV18EntradaDataEntrada = gx.date.nullDate() ;
   this.AV29Tela = "" ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.Events = {"e111bh2_client": ["TIMER1.ELAPSED", true] ,"e141bh2_client": ["ENTER", true] ,"e151bh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV21ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'AV29Tela',fld:'vTELA'},{av:'AV18EntradaDataEntrada',fld:'vENTRADADATAENTRADA'}],[{av:'AV10Custos',fld:'vCUSTOS'}]];
   this.setVCMap("AV18EntradaDataEntrada", "vENTRADADATAENTRADA", 0, "date");
   this.setVCMap("AV29Tela", "vTELA", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarentradacustomedio());
