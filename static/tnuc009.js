/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:21:13.49
*/
gx.evt.autoSkip = false;
gx.define('tnuc009', false, function () {
   this.ServerClass =  "tnuc009" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Nuc009stsretcod=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nuc009stsretcod",["gx.O.A7660NUC009stsretcod", "gx.O.A7661NUC009stsretnome", "gx.O.A7662NUC009stsorigem"],["A7661NUC009stsretnome", "A7662NUC009stsorigem", "Gx_mode", "Z7660NUC009stsretcod", "Z7661NUC009stsretnome", "Z7662NUC009stsorigem", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11az580_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12az580_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,24,26,29,31];
   this.GXLastCtrlId =31;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nuc009stsretcod,isvalid:null,rgrid:[],fld:"NUC009STSRETCOD",gxz:"Z7660NUC009stsretcod",gxold:"O7660NUC009stsretcod",gxvar:"A7660NUC009stsretcod",ucs:[],op:[31,26],ip:[31,26,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7660NUC009stsretcod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7660NUC009stsretcod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NUC009STSRETCOD",gx.O.A7660NUC009stsretcod,0)},c2v:function(){gx.O.A7660NUC009stsretcod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NUC009STSRETCOD",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:256,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NUC009STSRETNOME",gxz:"Z7661NUC009stsretnome",gxold:"O7661NUC009stsretnome",gxvar:"A7661NUC009stsretnome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7661NUC009stsretnome=Value},v2z:function(Value){gx.O.Z7661NUC009stsretnome=Value},v2c:function(){gx.fn.setControlValue("NUC009STSRETNOME",gx.O.A7661NUC009stsretnome,0)},c2v:function(){gx.O.A7661NUC009stsretnome=this.val()},val:function(){return gx.fn.getControlValue("NUC009STSRETNOME")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NUC009STSORIGEM",gxz:"Z7662NUC009stsorigem",gxold:"O7662NUC009stsorigem",gxvar:"A7662NUC009stsorigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7662NUC009stsorigem=Value},v2z:function(Value){gx.O.Z7662NUC009stsorigem=Value},v2c:function(){gx.fn.setControlValue("NUC009STSORIGEM",gx.O.A7662NUC009stsorigem,0)},c2v:function(){gx.O.A7662NUC009stsorigem=this.val()},val:function(){return gx.fn.getControlValue("NUC009STSORIGEM")},nac:gx.falseFn};
   this.A7660NUC009stsretcod = 0 ;
   this.Z7660NUC009stsretcod = 0 ;
   this.O7660NUC009stsretcod = 0 ;
   this.A7661NUC009stsretnome = "" ;
   this.Z7661NUC009stsretnome = "" ;
   this.O7661NUC009stsretnome = "" ;
   this.A7662NUC009stsorigem = "" ;
   this.Z7662NUC009stsorigem = "" ;
   this.O7662NUC009stsorigem = "" ;
   this.A7660NUC009stsretcod = 0 ;
   this.A7661NUC009stsretnome = "" ;
   this.A7662NUC009stsorigem = "" ;
   this.Events = {"e11az580_client": ["ENTER", true] ,"e12az580_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnuc009());
