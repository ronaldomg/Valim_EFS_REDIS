/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:48:45.3
*/
gx.evt.autoSkip = false;
gx.define('himportatermooutorgadesc', false, function () {
   this.ServerClass =  "himportatermooutorgadesc" ;
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
   };
   this.e1213r2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1413r2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1513r2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERMOOUTORGATITULO",gxz:"ZV5TermoOutorgaTitulo",gxold:"OV5TermoOutorgaTitulo",gxvar:"AV5TermoOutorgaTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5TermoOutorgaTitulo=Value},v2z:function(Value){gx.O.ZV5TermoOutorgaTitulo=Value},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGATITULO",gx.O.AV5TermoOutorgaTitulo,0)},c2v:function(){gx.O.AV5TermoOutorgaTitulo=this.val()},val:function(){return gx.fn.getControlValue("vTERMOOUTORGATITULO")},nac:gx.falseFn};
   this.AV5TermoOutorgaTitulo = "" ;
   this.ZV5TermoOutorgaTitulo = "" ;
   this.OV5TermoOutorgaTitulo = "" ;
   this.AV5TermoOutorgaTitulo = "" ;
   this.Events = {"e1213r2_client": ["'FECHAR'", true] ,"e1413r2_client": ["ENTER", true] ,"e1513r2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportatermooutorgadesc());
