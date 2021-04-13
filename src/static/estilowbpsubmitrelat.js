/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:59:58.8
*/
gx.evt.autoSkip = false;
gx.define('estilowbpsubmitrelat', false, function () {
   this.ServerClass =  "estilowbpsubmitrelat" ;
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
   };
   this.e1220y1_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1320y2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,10,13,15,16,19,21,22,25,27,33,39,40,43];
   this.GXLastCtrlId =43;
   this.TIMERContainer = gx.uc.getNew(this, 41, 39, "Timer", "TIMERContainer", "Timer");
   var TIMERContainer = this.TIMERContainer;
   TIMERContainer.setProp("Interval", "Interval", 10000, "num");
   TIMERContainer.setProp("Enabled", "Enabled", true, "boolean");
   TIMERContainer.setProp("Visible", "Visible", true, "bool");
   TIMERContainer.setProp("Class", "Class", "", "char");
   TIMERContainer.setC2ShowFunction(function(UC) { UC.start(); });
   this.setUserControl(TIMERContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[10]={fld:"TABCONCLUIDO",grid:0};
   GXValidFnc[13]={fld:"IMAGE2",grid:0};
   GXValidFnc[15]={fld:"TXTCONCLUIDO", format:0,grid:0};
   GXValidFnc[16]={fld:"TABERRO",grid:0};
   GXValidFnc[19]={fld:"IMGERRO",grid:0};
   GXValidFnc[21]={fld:"TXTERRO", format:0,grid:0};
   GXValidFnc[22]={fld:"TABAGUARDE",grid:0};
   GXValidFnc[25]={fld:"IMGPROC",grid:0};
   GXValidFnc[27]={fld:"TXTAGUARDE", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV13ProcessoId",gxold:"OV13ProcessoId",gxvar:"AV13ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV13ProcessoId,0)},c2v:function(){gx.O.AV13ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"BTNHELP",grid:0};
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV13ProcessoId = 0 ;
   this.ZV13ProcessoId = 0 ;
   this.OV13ProcessoId = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV13ProcessoId = 0 ;
   this.Events = {"e1220y1_client": ["ENTER", true] ,"e1320y2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new estilowbpsubmitrelat());
