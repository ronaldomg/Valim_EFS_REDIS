/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:59:57.47
*/
gx.evt.autoSkip = false;
gx.define('estilowbpsubmit', false, function () {
   this.ServerClass =  "estilowbpsubmit" ;
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
   this.e1220x1_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1320x2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,10,13,15,16,19,21,22,25,27,34,35,40];
   this.GXLastCtrlId =40;
   this.TIMERContainer = gx.uc.getNew(this, 38, 34, "Timer", "TIMERContainer", "Timer");
   var TIMERContainer = this.TIMERContainer;
   TIMERContainer.setProp("Interval", "Interval", 10000, "num");
   TIMERContainer.setProp("Enabled", "Enabled", true, "boolean");
   TIMERContainer.setProp("Visible", "Visible", true, "bool");
   TIMERContainer.setProp("Class", "Class", "", "char");
   TIMERContainer.setC2ShowFunction(function(UC) { UC.start(); });
   this.setUserControl(TIMERContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLEBORDER",grid:0};
   GXValidFnc[10]={fld:"TABERRO",grid:0};
   GXValidFnc[13]={fld:"IMGERRO",grid:0};
   GXValidFnc[15]={fld:"TXTERRO", format:0,grid:0};
   GXValidFnc[16]={fld:"TABCONCLUIDO",grid:0};
   GXValidFnc[19]={fld:"IMAGE2",grid:0};
   GXValidFnc[21]={fld:"TXTCONCLUIDO", format:0,grid:0};
   GXValidFnc[22]={fld:"TAB1",grid:0};
   GXValidFnc[25]={fld:"IMGPROC",grid:0};
   GXValidFnc[27]={fld:"TXTAGUARDE", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV12ProcessoId",gxold:"OV12ProcessoId",gxvar:"AV12ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV12ProcessoId,0)},c2v:function(){gx.O.AV12ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV5AcessoSistemaSequencia",gxold:"OV5AcessoSistemaSequencia",gxvar:"AV5AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV5AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"BTNHELP",grid:0};
   this.AV12ProcessoId = 0 ;
   this.ZV12ProcessoId = 0 ;
   this.OV12ProcessoId = 0 ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.ZV5AcessoSistemaSequencia = 0 ;
   this.OV5AcessoSistemaSequencia = 0 ;
   this.AV12ProcessoId = 0 ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.Events = {"e1220x1_client": ["ENTER", true] ,"e1320x2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new estilowbpsubmit());
