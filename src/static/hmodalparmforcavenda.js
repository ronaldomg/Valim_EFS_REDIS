/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:0:57.66
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmforcavenda', false, function () {
   this.ServerClass =  "hmodalparmforcavenda" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV8EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.e1528g1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms2",[this.AV8EmpresaLogadaId, "BFV", "TRNFORCAVENDA", "PRECOPADFOCVEN"]), []);
      this.refreshOutputs([]);
   };
   this.e1228g2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1328g2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1628g2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,31];
   this.GXLastCtrlId =31;
   GXValidFnc[2]={fld:"TABLE8",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNFORCAVENDA",gxz:"ZV23TRNFORCAVENDA",gxold:"OV23TRNFORCAVENDA",gxvar:"AV23TRNFORCAVENDA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23TRNFORCAVENDA=Value},v2z:function(Value){gx.O.ZV23TRNFORCAVENDA=Value},v2c:function(){gx.fn.setControlValue("vTRNFORCAVENDA",gx.O.AV23TRNFORCAVENDA,0)},c2v:function(){gx.O.AV23TRNFORCAVENDA=this.val()},val:function(){return gx.fn.getControlValue("vTRNFORCAVENDA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOPADFOCVEN",gxz:"ZV24PRECOPADFOCVEN",gxold:"OV24PRECOPADFOCVEN",gxvar:"AV24PRECOPADFOCVEN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PRECOPADFOCVEN=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PRECOPADFOCVEN=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOPADFOCVEN",gx.O.AV24PRECOPADFOCVEN,0)},c2v:function(){gx.O.AV24PRECOPADFOCVEN=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOPADFOCVEN",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABLE1",grid:0};
   GXValidFnc[31]={fld:"BTNOBS",grid:0};
   this.AV23TRNFORCAVENDA = "" ;
   this.ZV23TRNFORCAVENDA = "" ;
   this.OV23TRNFORCAVENDA = "" ;
   this.AV24PRECOPADFOCVEN = 0 ;
   this.ZV24PRECOPADFOCVEN = 0 ;
   this.OV24PRECOPADFOCVEN = 0 ;
   this.AV23TRNFORCAVENDA = "" ;
   this.AV24PRECOPADFOCVEN = 0 ;
   this.AV8EmpresaLogadaId = "" ;
   this.Events = {"e1228g2_client": ["ENTER", true] ,"e1328g2_client": ["'FECHAR'", true] ,"e1628g2_client": ["CANCEL", true] ,"e1528g1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV23TRNFORCAVENDA',fld:'vTRNFORCAVENDA'},{av:'AV24PRECOPADFOCVEN',fld:'vPRECOPADFOCVEN'}],[{av:'AV23TRNFORCAVENDA',fld:'vTRNFORCAVENDA'},{av:'AV24PRECOPADFOCVEN',fld:'vPRECOPADFOCVEN'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmforcavenda());
