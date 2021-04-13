/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:51:40.53
*/
gx.evt.autoSkip = false;
gx.define('himportatxt', false, function () {
   this.ServerClass =  "himportatxt" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e151z41_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hdialog",["A", "S", ""]), ["AV5ArquivoTxt"]);
      this.refreshOutputs([{av:'AV5ArquivoTxt',fld:'vARQUIVOTXT'}]);
   };
   this.e121z42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131z42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e161z42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14];
   this.GXLastCtrlId =14;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQUIVOTXT",gxz:"ZV5ArquivoTxt",gxold:"OV5ArquivoTxt",gxvar:"AV5ArquivoTxt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5ArquivoTxt=Value},v2z:function(Value){gx.O.ZV5ArquivoTxt=Value},v2c:function(){gx.fn.setControlValue("vARQUIVOTXT",gx.O.AV5ArquivoTxt,0)},c2v:function(){gx.O.AV5ArquivoTxt=this.val()},val:function(){return gx.fn.getControlValue("vARQUIVOTXT")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"CHAMADIALOG",grid:0};
   this.AV5ArquivoTxt = "" ;
   this.ZV5ArquivoTxt = "" ;
   this.OV5ArquivoTxt = "" ;
   this.AV5ArquivoTxt = "" ;
   this.Events = {"e121z42_client": ["ENTER", true] ,"e131z42_client": ["'FECHAR'", true] ,"e161z42_client": ["CANCEL", true] ,"e151z41_client": ["'BUSCARARQUIVO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV5ArquivoTxt',fld:'vARQUIVOTXT'},{av:'AV25NomeTela',fld:'vNOMETELA'},{av:'AV16ArquivoImp',fld:'vARQUIVOIMP'}],[{av:'AV12DiretorioImport',fld:'vDIRETORIOIMPORT'},{av:'AV36GXV2',fld:'vGXV2'},{av:'AV28ArquivoAux',fld:'vARQUIVOAUX'},{av:'AV25NomeTela',fld:'vNOMETELA'},{av:'AV16ArquivoImp',fld:'vARQUIVOIMP'}]];
   this.EvtParms["'BUSCARARQUIVO'"] = [[],[{av:'AV5ArquivoTxt',fld:'vARQUIVOTXT'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportatxt());
