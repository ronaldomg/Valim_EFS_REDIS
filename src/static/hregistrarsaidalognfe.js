/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:34:5.50
*/
gx.evt.autoSkip = false;
gx.define('hregistrarsaidalognfe', false, function () {
   this.ServerClass =  "hregistrarsaidalognfe" ;
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
      this.AV13NFE002logdata=gx.fn.getDateTimeValue("vNFE002LOGDATA") ;
      this.AV14NFE002logsequencia=gx.fn.getIntegerValue("vNFE002LOGSEQUENCIA",'.') ;
   };
   this.e1212t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1412t2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1512t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNFE002LOGERRDESCRICAO",gxz:"ZV15NFE002logerrdescricao",gxold:"OV15NFE002logerrdescricao",gxvar:"AV15NFE002logerrdescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15NFE002logerrdescricao=Value},v2z:function(Value){gx.O.ZV15NFE002logerrdescricao=Value},v2c:function(){gx.fn.setControlValue("vNFE002LOGERRDESCRICAO",gx.O.AV15NFE002logerrdescricao,0)},c2v:function(){gx.O.AV15NFE002logerrdescricao=this.val()},val:function(){return gx.fn.getControlValue("vNFE002LOGERRDESCRICAO")},nac:gx.falseFn};
   this.AV15NFE002logerrdescricao = "" ;
   this.ZV15NFE002logerrdescricao = "" ;
   this.OV15NFE002logerrdescricao = "" ;
   this.AV15NFE002logerrdescricao = "" ;
   this.AV13NFE002logdata = gx.date.nullDate() ;
   this.AV14NFE002logsequencia = 0 ;
   this.A7642NFE002logsequencia = 0 ;
   this.A7641NFE002logdata = gx.date.nullDate() ;
   this.A7646NFE002logerrdescricao = "" ;
   this.Events = {"e1212t2_client": ["'FECHAR'", true] ,"e1412t2_client": ["ENTER", true] ,"e1512t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV14NFE002logsequencia',fld:'vNFE002LOGSEQUENCIA'},{av:'AV13NFE002logdata',fld:'vNFE002LOGDATA'}],[]];
   this.setVCMap("AV13NFE002logdata", "vNFE002LOGDATA", 0, "dtime");
   this.setVCMap("AV14NFE002logsequencia", "vNFE002LOGSEQUENCIA", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarsaidalognfe());
