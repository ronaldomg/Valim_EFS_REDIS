/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:59:55.5
*/
gx.evt.autoSkip = false;
gx.define('estilowbprelat', false, function () {
   this.ServerClass =  "estilowbprelat" ;
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
   this.e1220t1_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1320t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,18,29,31];
   this.GXLastCtrlId =31;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TAB1",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTLAYOUT", format:0,grid:0};
   GXValidFnc[18]={fld:"TXTSELECAO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV18AcessoSistemaSequencia",gxold:"OV18AcessoSistemaSequencia",gxvar:"AV18AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV18AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV18AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"BTNHELP",grid:0};
   this.AV18AcessoSistemaSequencia = 0 ;
   this.ZV18AcessoSistemaSequencia = 0 ;
   this.OV18AcessoSistemaSequencia = 0 ;
   this.AV18AcessoSistemaSequencia = 0 ;
   this.Events = {"e1220t1_client": ["ENTER", true] ,"e1320t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new estilowbprelat());
