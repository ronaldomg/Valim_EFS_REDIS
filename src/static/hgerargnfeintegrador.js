/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:14:34.17
*/
gx.evt.autoSkip = false;
gx.define('hgerargnfeintegrador', false, function () {
   this.ServerClass =  "hgerargnfeintegrador" ;
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
      this.AV13Shell=gx.fn.getControlValue("vSHELL") ;
      this.AV19SnModal=gx.fn.getControlValue("vSNMODAL") ;
   };
   this.e1410g2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1510g2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,12,13];
   this.GXLastCtrlId =13;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"IMGPROC1",grid:0};
   GXValidFnc[11]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEFECHAR",gxz:"ZV17QtdeFechar",gxold:"OV17QtdeFechar",gxvar:"AV17QtdeFechar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17QtdeFechar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17QtdeFechar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEFECHAR",gx.O.AV17QtdeFechar,0)},c2v:function(){gx.O.AV17QtdeFechar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEFECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TXTAPLICACAO1", format:0,grid:0};
   GXValidFnc[13]={fld:"JAVASCRIPT", format:2,grid:0};
   this.AV17QtdeFechar = 0 ;
   this.ZV17QtdeFechar = 0 ;
   this.OV17QtdeFechar = 0 ;
   this.AV17QtdeFechar = 0 ;
   this.AV13Shell = "" ;
   this.AV19SnModal = "" ;
   this.Events = {"e1410g2_client": ["ENTER", true] ,"e1510g2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV17QtdeFechar',fld:'vQTDEFECHAR'},{av:'AV19SnModal',fld:'vSNMODAL'},{av:'AV13Shell',fld:'vSHELL'}],[{av:'gx.fn.getCtrlProperty("vQTDEFECHAR","Visible")',ctrl:'vQTDEFECHAR',prop:'Visible'}]];
   this.setVCMap("AV13Shell", "vSHELL", 0, "svchar");
   this.setVCMap("AV19SnModal", "vSNMODAL", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgerargnfeintegrador());
