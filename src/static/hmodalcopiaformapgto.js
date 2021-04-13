/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:1:27.81
*/
gx.evt.autoSkip = false;
gx.define('hmodalcopiaformapgto', false, function () {
   this.ServerClass =  "hmodalcopiaformapgto" ;
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
      this.AV14FormaPgtoId=gx.fn.getIntegerValue("vFORMAPGTOID",'.') ;
   };
   this.e12ow2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ow2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ow2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,20,21,22];
   this.GXLastCtrlId =22;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAPGTOID2",gxz:"ZV12FormaPgtoId2",gxold:"OV12FormaPgtoId2",gxvar:"AV12FormaPgtoId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12FormaPgtoId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12FormaPgtoId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORMAPGTOID2",gx.O.AV12FormaPgtoId2,0)},c2v:function(){gx.O.AV12FormaPgtoId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORMAPGTOID2",'.')},nac:gx.falseFn};
   GXValidFnc[12]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAPGTODESCRICAO",gxz:"ZV13FormaPgtoDescricao",gxold:"OV13FormaPgtoDescricao",gxvar:"AV13FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13FormaPgtoDescricao=Value},v2z:function(Value){gx.O.ZV13FormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("vFORMAPGTODESCRICAO",gx.O.AV13FormaPgtoDescricao,0)},c2v:function(){gx.O.AV13FormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"JS", format:1,grid:0};
   GXValidFnc[22]={fld:"PROMPT_FORMAPGTOID2",grid:0};
   this.AV12FormaPgtoId2 = 0 ;
   this.ZV12FormaPgtoId2 = 0 ;
   this.OV12FormaPgtoId2 = 0 ;
   this.AV13FormaPgtoDescricao = "" ;
   this.ZV13FormaPgtoDescricao = "" ;
   this.OV13FormaPgtoDescricao = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV12FormaPgtoId2 = 0 ;
   this.AV13FormaPgtoDescricao = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV14FormaPgtoId = 0 ;
   this.Events = {"e12ow2_client": ["ENTER", true] ,"e13ow2_client": ["'FECHAR'", true] ,"e15ow2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'AV12FormaPgtoId2',fld:'vFORMAPGTOID2'}],[{av:'AV12FormaPgtoId2',fld:'vFORMAPGTOID2'},{av:'AV14FormaPgtoId',fld:'vFORMAPGTOID',hsh:true}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_FORMAPGTOID2", [11]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14FormaPgtoId", "vFORMAPGTOID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalcopiaformapgto());
