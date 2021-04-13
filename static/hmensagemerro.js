/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:11:32.60
*/
gx.evt.autoSkip = false;
gx.define('hmensagemerro', false, function () {
   this.ServerClass =  "hmensagemerro" ;
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
      this.AV7CodErroBox=gx.fn.getIntegerValue("vCODERROBOX",'.') ;
   };
   this.e112cz2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132cz2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152cz2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8];
   this.GXLastCtrlId =8;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vX",gxz:"ZV6x",gxold:"OV6x",gxvar:"AV6x",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6x=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6x=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vX",gx.O.AV6x,0)},c2v:function(){gx.O.AV6x=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vX",'.')},nac:gx.falseFn};
   GXValidFnc[8]={lvl:0,type:"svchar",len:180,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMSGERRO",gxz:"ZV5MsgErro",gxold:"OV5MsgErro",gxvar:"AV5MsgErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5MsgErro=Value},v2z:function(Value){gx.O.ZV5MsgErro=Value},v2c:function(){gx.fn.setControlValue("vMSGERRO",gx.O.AV5MsgErro,0)},c2v:function(){gx.O.AV5MsgErro=this.val()},val:function(){return gx.fn.getControlValue("vMSGERRO")},nac:gx.falseFn};
   this.AV6x = 0 ;
   this.ZV6x = 0 ;
   this.OV6x = 0 ;
   this.AV5MsgErro = "" ;
   this.ZV5MsgErro = "" ;
   this.OV5MsgErro = "" ;
   this.AV6x = 0 ;
   this.AV5MsgErro = "" ;
   this.AV7CodErroBox = 0 ;
   this.Events = {"e112cz2_client": ["'FECHAR'", true] ,"e132cz2_client": ["ENTER", true] ,"e152cz2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7CodErroBox',fld:'vCODERROBOX',hsh:true}],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.setVCMap("AV7CodErroBox", "vCODERROBOX", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmensagemerro());
