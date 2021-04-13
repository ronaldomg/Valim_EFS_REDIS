/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:10:31.60
*/
gx.evt.autoSkip = false;
gx.define('hobsforcavenda', false, function () {
   this.ServerClass =  "hobsforcavenda" ;
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
   };
   this.e122c72_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142c72_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSPRODUTO",gxz:"ZV11ObsProduto",gxold:"OV11ObsProduto",gxvar:"AV11ObsProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ObsProduto=Value},v2z:function(Value){gx.O.ZV11ObsProduto=Value},v2c:function(){gx.fn.setControlValue("vOBSPRODUTO",gx.O.AV11ObsProduto,0)},c2v:function(){gx.O.AV11ObsProduto=this.val()},val:function(){return gx.fn.getControlValue("vOBSPRODUTO")},nac:gx.falseFn};
   this.AV11ObsProduto = "" ;
   this.ZV11ObsProduto = "" ;
   this.OV11ObsProduto = "" ;
   this.AV11ObsProduto = "" ;
   this.Events = {"e122c72_client": ["ENTER", true] ,"e142c72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BUTTON2"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hobsforcavenda());
