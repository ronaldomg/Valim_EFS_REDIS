/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:10.8
*/
gx.evt.autoSkip = false;
gx.define('haguardarecalculo', false, function () {
   this.ServerClass =  "haguardarecalculo" ;
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
      this.AV25ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.AV26ProdutoId=gx.fn.getIntegerValue("vPRODUTOID",'.') ;
      this.AV29Sistema=gx.fn.getControlValue("vSISTEMA") ;
      this.AV30NomePrograma=gx.fn.getControlValue("vNOMEPROGRAMA") ;
   };
   this.e112702_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e142702_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152702_client=function()
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
   TIMER1Container.addEventHandler("Elapsed", this.e112702_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"IMGPROC1",grid:0};
   GXValidFnc[7]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV17ProcessoId",gxold:"OV17ProcessoId",gxvar:"AV17ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV17ProcessoId,0)},c2v:function(){gx.O.AV17ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   this.AV17ProcessoId = 0 ;
   this.ZV17ProcessoId = 0 ;
   this.OV17ProcessoId = 0 ;
   this.AV17ProcessoId = 0 ;
   this.AV25ProdutoEmpresaId = "" ;
   this.AV26ProdutoId = 0 ;
   this.AV29Sistema = "" ;
   this.AV30NomePrograma = "" ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.Events = {"e112702_client": ["TIMER1.ELAPSED", true] ,"e142702_client": ["ENTER", true] ,"e152702_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV17ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'}],[]];
   this.setVCMap("AV25ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV26ProdutoId", "vPRODUTOID", 0, "int");
   this.setVCMap("AV29Sistema", "vSISTEMA", 0, "char");
   this.setVCMap("AV30NomePrograma", "vNOMEPROGRAMA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new haguardarecalculo());
