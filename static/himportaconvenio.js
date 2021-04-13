/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:17.73
*/
gx.evt.autoSkip = false;
gx.define('himportaconvenio', false, function () {
   this.ServerClass =  "himportaconvenio" ;
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
   this.e11ic2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ic2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ic2_client=function()
   {
      this.executeServerEvent("'DIALOG'", false, null, false, false);
   };
   this.e17ic2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,19,29];
   this.GXLastCtrlId =29;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPIMPORT",gxz:"ZV22TpImport",gxold:"OV22TpImport",gxvar:"AV22TpImport",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22TpImport=Value},v2z:function(Value){gx.O.ZV22TpImport=Value},v2c:function(){gx.fn.setComboBoxValue("vTPIMPORT",gx.O.AV22TpImport)},c2v:function(){gx.O.AV22TpImport=this.val()},val:function(){return gx.fn.getControlValue("vTPIMPORT")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV20Diretorio",gxold:"OV20Diretorio",gxvar:"AV20Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Diretorio=Value},v2z:function(Value){gx.O.ZV20Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV20Diretorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[29]={fld:"BTNHELP",grid:0};
   this.AV22TpImport = "" ;
   this.ZV22TpImport = "" ;
   this.OV22TpImport = "" ;
   this.AV20Diretorio = "" ;
   this.ZV20Diretorio = "" ;
   this.OV20Diretorio = "" ;
   this.AV22TpImport = "" ;
   this.AV20Diretorio = "" ;
   this.Events = {"e11ic2_client": ["'FECHAR'", true] ,"e13ic2_client": ["ENTER", true] ,"e15ic2_client": ["'DIALOG'", true] ,"e17ic2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV22TpImport',fld:'vTPIMPORT'},{av:'AV20Diretorio',fld:'vDIRETORIO'}],[]];
   this.EvtParms["'DIALOG'"] = [[],[{av:'AV24isCloud',fld:'vISCLOUD'},{av:'AV23DirUpload',fld:'vDIRUPLOAD'},{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportaconvenio());
