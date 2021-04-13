/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:12.35
*/
gx.evt.autoSkip = false;
gx.define('himportaboletocepremessa', false, function () {
   this.ServerClass =  "himportaboletocepremessa" ;
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
   this.e11l42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13l42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15l42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,24];
   this.GXLastCtrlId =24;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQUIVO",gxz:"ZV14Arquivo",gxold:"OV14Arquivo",gxvar:"AV14Arquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Arquivo=Value},v2z:function(Value){gx.O.ZV14Arquivo=Value},v2c:function(){gx.fn.setControlValue("vARQUIVO",gx.O.AV14Arquivo,0)},c2v:function(){gx.O.AV14Arquivo=this.val()},val:function(){return gx.fn.getControlValue("vARQUIVO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"BTNHELP",grid:0};
   this.AV14Arquivo = "" ;
   this.ZV14Arquivo = "" ;
   this.OV14Arquivo = "" ;
   this.AV14Arquivo = "" ;
   this.Events = {"e11l42_client": ["'FECHAR'", true] ,"e13l42_client": ["ENTER", true] ,"e15l42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14Arquivo',fld:'vARQUIVO'}],[{av:'AV14Arquivo',fld:'vARQUIVO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportaboletocepremessa());
