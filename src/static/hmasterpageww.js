/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:48.65
*/
gx.evt.autoSkip = false;
gx.define('hmasterpageww', false, function () {
   this.ServerClass =  "hmasterpageww" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.IsMasterPage=true;
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e142q2_client=function()
   {
      this.executeServerEvent("ENTER_MPAGE", true, null, false, false);
   };
   this.e152q2_client=function()
   {
      this.executeServerEvent("CANCEL_MPAGE", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,13,14,15,16];
   this.GXLastCtrlId =16;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPHEADER_MPAGE",gxz:"ZV7TpHeader",gxold:"OV7TpHeader",gxvar:"AV7TpHeader",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7TpHeader=Value},v2z:function(Value){gx.O.ZV7TpHeader=Value},v2c:function(){gx.fn.setControlValue("vTPHEADER_MPAGE",gx.O.AV7TpHeader,0)},c2v:function(){gx.O.AV7TpHeader=this.val()},val:function(){return gx.fn.getControlValue("vTPHEADER_MPAGE")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLINK_MPAGE",gxz:"ZV20DescLink",gxold:"OV20DescLink",gxvar:"AV20DescLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DescLink=Value},v2z:function(Value){gx.O.ZV20DescLink=Value},v2c:function(){gx.fn.setControlValue("vDESCLINK_MPAGE",gx.O.AV20DescLink,0)},c2v:function(){gx.O.AV20DescLink=this.val()},val:function(){return gx.fn.getControlValue("vDESCLINK_MPAGE")},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNATALHO_MPAGE",gxz:"ZV22SnAtalho",gxold:"OV22SnAtalho",gxvar:"AV22SnAtalho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22SnAtalho=Value},v2z:function(Value){gx.O.ZV22SnAtalho=Value},v2c:function(){gx.fn.setControlValue("vSNATALHO_MPAGE",gx.O.AV22SnAtalho,0)},c2v:function(){gx.O.AV22SnAtalho=this.val()},val:function(){return gx.fn.getControlValue("vSNATALHO_MPAGE")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"JS", format:2,grid:0};
   this.AV7TpHeader = "" ;
   this.ZV7TpHeader = "" ;
   this.OV7TpHeader = "" ;
   this.AV20DescLink = "" ;
   this.ZV20DescLink = "" ;
   this.OV20DescLink = "" ;
   this.AV22SnAtalho = "" ;
   this.ZV22SnAtalho = "" ;
   this.OV22SnAtalho = "" ;
   this.AV7TpHeader = "" ;
   this.AV20DescLink = "" ;
   this.AV22SnAtalho = "" ;
   this.Events = {"e142q2_client": ["ENTER_MPAGE", true] ,"e152q2_client": ["CANCEL_MPAGE", true]};
   this.EvtParms["REFRESH_MPAGE"] = [[{av:'AV20DescLink',fld:'vDESCLINK_MPAGE'},{av:'AV22SnAtalho',fld:'vSNATALHO_MPAGE'}],[{av:'AV20DescLink',fld:'vDESCLINK_MPAGE'},{av:'AV22SnAtalho',fld:'vSNATALHO_MPAGE'}]];
   this.InitStandaloneVars( );
   this.setComponent({id: "WCHEADER" ,GXClass: "hpageheader" , Prefix: "MPW0005" , lvl: 1 });
   this.setComponent({id: "WCFOOTER" ,GXClass: "hpagefooter" , Prefix: "MPW0012" , lvl: 1 });
});
gx.setMasterPage(new hmasterpageww());
