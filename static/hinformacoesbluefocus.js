/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:2:31.41
*/
gx.evt.autoSkip = false;
gx.define('hinformacoesbluefocus', false, function () {
   this.ServerClass =  "hinformacoesbluefocus" ;
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
   this.e121bb2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141bb2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151bb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,31,33];
   this.GXLastCtrlId =33;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNMOPER",gxz:"ZV5NmOper",gxold:"OV5NmOper",gxvar:"AV5NmOper",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5NmOper=Value},v2z:function(Value){gx.O.ZV5NmOper=Value},v2c:function(){gx.fn.setControlValue("vNMOPER",gx.O.AV5NmOper,0)},c2v:function(){gx.O.AV5NmOper=this.val()},val:function(){return gx.fn.getControlValue("vNMOPER")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVERSAO",gxz:"ZV7Versao",gxold:"OV7Versao",gxvar:"AV7Versao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7Versao=Value},v2z:function(Value){gx.O.ZV7Versao=Value},v2c:function(){gx.fn.setControlValue("vVERSAO",gx.O.AV7Versao,0)},c2v:function(){gx.O.AV7Versao=this.val()},val:function(){return gx.fn.getControlValue("vVERSAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vJAVAHOME",gxz:"ZV8javaHome",gxold:"OV8javaHome",gxvar:"AV8javaHome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8javaHome=Value},v2z:function(Value){gx.O.ZV8javaHome=Value},v2c:function(){gx.fn.setControlValue("vJAVAHOME",gx.O.AV8javaHome,0)},c2v:function(){gx.O.AV8javaHome=this.val()},val:function(){return gx.fn.getControlValue("vJAVAHOME")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vJAVAVERSION",gxz:"ZV9javaVersion",gxold:"OV9javaVersion",gxvar:"AV9javaVersion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9javaVersion=Value},v2z:function(Value){gx.O.ZV9javaVersion=Value},v2c:function(){gx.fn.setControlValue("vJAVAVERSION",gx.O.AV9javaVersion,0)},c2v:function(){gx.O.AV9javaVersion=this.val()},val:function(){return gx.fn.getControlValue("vJAVAVERSION")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPATH",gxz:"ZV6Path",gxold:"OV6Path",gxvar:"AV6Path",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6Path=Value},v2z:function(Value){gx.O.ZV6Path=Value},v2c:function(){gx.fn.setControlValue("vPATH",gx.O.AV6Path,0)},c2v:function(){gx.O.AV6Path=this.val()},val:function(){return gx.fn.getControlValue("vPATH")},nac:gx.falseFn};
   this.AV5NmOper = "" ;
   this.ZV5NmOper = "" ;
   this.OV5NmOper = "" ;
   this.AV7Versao = "" ;
   this.ZV7Versao = "" ;
   this.OV7Versao = "" ;
   this.AV8javaHome = "" ;
   this.ZV8javaHome = "" ;
   this.OV8javaHome = "" ;
   this.AV9javaVersion = "" ;
   this.ZV9javaVersion = "" ;
   this.OV9javaVersion = "" ;
   this.AV6Path = "" ;
   this.ZV6Path = "" ;
   this.OV6Path = "" ;
   this.AV5NmOper = "" ;
   this.AV7Versao = "" ;
   this.AV8javaHome = "" ;
   this.AV9javaVersion = "" ;
   this.AV6Path = "" ;
   this.Events = {"e121bb2_client": ["'FECHAR'", true] ,"e141bb2_client": ["ENTER", true] ,"e151bb2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hinformacoesbluefocus());
