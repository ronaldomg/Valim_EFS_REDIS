/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:45.64
*/
gx.evt.autoSkip = false;
gx.define('hduplicarintegracaocbl', false, function () {
   this.ServerClass =  "hduplicarintegracaocbl" ;
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
      this.AV13IntegracaoCblEmpresaId=gx.fn.getControlValue("vINTEGRACAOCBLEMPRESAID") ;
      this.AV14IntegracaoCblId=gx.fn.getIntegerValue("vINTEGRACAOCBLID",'.') ;
   };
   this.e129w2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e139w2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e159w2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10];
   this.GXLastCtrlId =10;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTEGRACAOCBLDESCRICAO",gxz:"ZV15IntegracaoCblDescricao",gxold:"OV15IntegracaoCblDescricao",gxvar:"AV15IntegracaoCblDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15IntegracaoCblDescricao=Value},v2z:function(Value){gx.O.ZV15IntegracaoCblDescricao=Value},v2c:function(){gx.fn.setControlValue("vINTEGRACAOCBLDESCRICAO",gx.O.AV15IntegracaoCblDescricao,0)},c2v:function(){gx.O.AV15IntegracaoCblDescricao=this.val()},val:function(){return gx.fn.getControlValue("vINTEGRACAOCBLDESCRICAO")},nac:gx.falseFn};
   this.AV15IntegracaoCblDescricao = "" ;
   this.ZV15IntegracaoCblDescricao = "" ;
   this.OV15IntegracaoCblDescricao = "" ;
   this.AV15IntegracaoCblDescricao = "" ;
   this.AV13IntegracaoCblEmpresaId = "" ;
   this.AV14IntegracaoCblId = 0 ;
   this.Events = {"e129w2_client": ["ENTER", true] ,"e139w2_client": ["'CANCELAR'", true] ,"e159w2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13IntegracaoCblEmpresaId',fld:'vINTEGRACAOCBLEMPRESAID',hsh:true},{av:'AV14IntegracaoCblId',fld:'vINTEGRACAOCBLID',hsh:true}],[]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13IntegracaoCblEmpresaId", "vINTEGRACAOCBLEMPRESAID", 0, "char");
   this.setVCMap("AV14IntegracaoCblId", "vINTEGRACAOCBLID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicarintegracaocbl());
