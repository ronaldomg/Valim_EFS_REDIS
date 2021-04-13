/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:39:7.32
*/
gx.evt.autoSkip = false;
gx.define('hmensagempat', false, function () {
   this.ServerClass =  "hmensagempat" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'FECHARNOTA'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV10BemCodigo=gx.fn.getIntegerValue("vBEMCODIGO",'.') ;
      this.AV11BemSubGrupo=gx.fn.getIntegerValue("vBEMSUBGRUPO",'.') ;
   };
   this.e13hb2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11hb2_client=function()
   {
      this.executeServerEvent("'FECHARNOTA'", false, null, false, false);
   };
   this.e15hb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12];
   this.GXLastCtrlId =12;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTEXTO1",gxz:"ZV7Texto1",gxold:"OV7Texto1",gxvar:"AV7Texto1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7Texto1=Value},v2z:function(Value){gx.O.ZV7Texto1=Value},v2c:function(){gx.fn.setControlValue("vTEXTO1",gx.O.AV7Texto1,0)},c2v:function(){gx.O.AV7Texto1=this.val()},val:function(){return gx.fn.getControlValue("vTEXTO1")},nac:gx.falseFn};
   GXValidFnc[12]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTEXTO2",gxz:"ZV8Texto2",gxold:"OV8Texto2",gxvar:"AV8Texto2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8Texto2=Value},v2z:function(Value){gx.O.ZV8Texto2=Value},v2c:function(){gx.fn.setControlValue("vTEXTO2",gx.O.AV8Texto2,0)},c2v:function(){gx.O.AV8Texto2=this.val()},val:function(){return gx.fn.getControlValue("vTEXTO2")},nac:gx.falseFn};
   this.AV7Texto1 = "" ;
   this.ZV7Texto1 = "" ;
   this.OV7Texto1 = "" ;
   this.AV8Texto2 = "" ;
   this.ZV8Texto2 = "" ;
   this.OV8Texto2 = "" ;
   this.AV7Texto1 = "" ;
   this.AV8Texto2 = "" ;
   this.AV10BemCodigo = 0 ;
   this.AV11BemSubGrupo = 0 ;
   this.Events = {"e13hb2_client": ["ENTER", true] ,"e11hb2_client": ["'FECHARNOTA'", true] ,"e15hb2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV9SnFecNota',fld:'vSNFECNOTA'},{av:'AV11BemSubGrupo',fld:'vBEMSUBGRUPO'},{av:'AV10BemCodigo',fld:'vBEMCODIGO'}],[{av:'AV9SnFecNota',fld:'vSNFECNOTA'}]];
   this.EvtParms["'FECHARNOTA'"] = [[{av:'AV9SnFecNota',fld:'vSNFECNOTA'},{av:'AV11BemSubGrupo',fld:'vBEMSUBGRUPO'},{av:'AV10BemCodigo',fld:'vBEMCODIGO'}],[{av:'AV9SnFecNota',fld:'vSNFECNOTA'}]];
   this.EnterCtrl = ["BTNFECHAR"];
   this.setVCMap("AV10BemCodigo", "vBEMCODIGO", 0, "int");
   this.setVCMap("AV11BemSubGrupo", "vBEMSUBGRUPO", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmensagempat());
