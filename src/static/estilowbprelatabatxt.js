/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:59:56.27
*/
gx.evt.autoSkip = false;
gx.define('estilowbprelatabatxt', false, function () {
   this.ServerClass =  "estilowbprelatabatxt" ;
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
   this.e1220v1_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1320v2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,18,21,24,31,34,45,47];
   this.GXLastCtrlId =47;
   this.TABCSSContainer = gx.uc.getNew(this, 17, 10, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV19Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV19Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV19Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hprestacaocontas_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV21TxtTela",gxold:"OV21TxtTela",gxvar:"AV21TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21TxtTela=Value},v2z:function(Value){gx.O.ZV21TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV21TxtTela)},c2v:function(){gx.O.AV21TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMGEXCTXTTELA",grid:0};
   GXValidFnc[18]={fld:"TAB1",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TXTLAYOUT", format:0,grid:0};
   GXValidFnc[31]={fld:"TXTSELECAO", format:0,grid:0};
   GXValidFnc[34]={fld:"TAB2",grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV24AcessoSistemaSequencia",gxold:"OV24AcessoSistemaSequencia",gxvar:"AV24AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV24AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV24AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   this.AV21TxtTela = "" ;
   this.ZV21TxtTela = "" ;
   this.OV21TxtTela = "" ;
   this.AV24AcessoSistemaSequencia = 0 ;
   this.ZV24AcessoSistemaSequencia = 0 ;
   this.OV24AcessoSistemaSequencia = 0 ;
   this.AV21TxtTela = "" ;
   this.AV19Tab = [ ] ;
   this.AV24AcessoSistemaSequencia = 0 ;
   this.Events = {"e1220v1_client": ["ENTER", true] ,"e1320v2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new estilowbprelatabatxt());
