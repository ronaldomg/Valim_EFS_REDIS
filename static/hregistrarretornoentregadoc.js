/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:12:40.66
*/
gx.evt.autoSkip = false;
gx.define('hregistrarretornoentregadoc', false, function () {
   this.ServerClass =  "hregistrarretornoentregadoc" ;
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
      this.AV6EntregaSaidaNoDocumento=gx.fn.getIntegerValue("vENTREGASAIDANODOCUMENTO",'.') ;
   };
   this.e122dx2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132dx2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152dx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10];
   this.GXLastCtrlId =10;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV5SaidaNoDocumento",gxold:"OV5SaidaNoDocumento",gxvar:"AV5SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5SaidaNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5SaidaNoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV5SaidaNoDocumento,0)},c2v:function(){gx.O.AV5SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",'.')},nac:gx.falseFn};
   this.AV5SaidaNoDocumento = 0 ;
   this.ZV5SaidaNoDocumento = 0 ;
   this.OV5SaidaNoDocumento = 0 ;
   this.AV5SaidaNoDocumento = 0 ;
   this.AV6EntregaSaidaNoDocumento = 0 ;
   this.Events = {"e122dx2_client": ["'FECHAR'", true] ,"e132dx2_client": ["ENTER", true] ,"e152dx2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV5SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV6EntregaSaidaNoDocumento',fld:'vENTREGASAIDANODOCUMENTO',hsh:true}],[{av:'AV5SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EntregaSaidaNoDocumento", "vENTREGASAIDANODOCUMENTO", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarretornoentregadoc());
