/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:59:56.89
*/
gx.evt.autoSkip = false;
gx.define('estilowbprelattxt', false, function () {
   this.ServerClass =  "estilowbprelattxt" ;
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
   this.e1220w1_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1320w2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,30,37,48,50];
   this.GXLastCtrlId =50;
   GXValidFnc[3]={fld:"TABLE4",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV22TxtTela",gxold:"OV22TxtTela",gxvar:"AV22TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22TxtTela=Value},v2z:function(Value){gx.O.ZV22TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV22TxtTela)},c2v:function(){gx.O.AV22TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE9",grid:0};
   GXValidFnc[18]={fld:"IMGEXCTXTTELA",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TAB1",grid:0};
   GXValidFnc[27]={fld:"TABLE8",grid:0};
   GXValidFnc[30]={fld:"TXTLAYOUT", format:0,grid:0};
   GXValidFnc[37]={fld:"TXTSELECAO", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV24AcessoSistemaSequencia",gxold:"OV24AcessoSistemaSequencia",gxvar:"AV24AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV24AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV24AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"BTNHELP",grid:0};
   this.AV22TxtTela = "" ;
   this.ZV22TxtTela = "" ;
   this.OV22TxtTela = "" ;
   this.AV24AcessoSistemaSequencia = 0 ;
   this.ZV24AcessoSistemaSequencia = 0 ;
   this.OV24AcessoSistemaSequencia = 0 ;
   this.AV22TxtTela = "" ;
   this.AV24AcessoSistemaSequencia = 0 ;
   this.Events = {"e1220w1_client": ["ENTER", true] ,"e1320w2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new estilowbprelattxt());
