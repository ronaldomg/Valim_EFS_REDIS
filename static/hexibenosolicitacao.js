/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:59:4.99
*/
gx.evt.autoSkip = false;
gx.define('hexibenosolicitacao', false, function () {
   this.ServerClass =  "hexibenosolicitacao" ;
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
      this.AV18SolicitacaoNumero=gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.') ;
   };
   this.e12o52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14o52_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15o52_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,10,13,17,18];
   this.GXLastCtrlId =18;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[10]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TXTSOLICI", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNOK",gxz:"ZV20SnOk",gxold:"OV20SnOk",gxvar:"AV20SnOk",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SnOk=Value},v2z:function(Value){gx.O.ZV20SnOk=Value},v2c:function(){gx.fn.setControlValue("vSNOK",gx.O.AV20SnOk,0)},c2v:function(){gx.O.AV20SnOk=this.val()},val:function(){return gx.fn.getControlValue("vSNOK")},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFECHATDSMODAIS",gxz:"ZV19FechaTdsModais",gxold:"OV19FechaTdsModais",gxvar:"AV19FechaTdsModais",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19FechaTdsModais=Value},v2z:function(Value){gx.O.ZV19FechaTdsModais=Value},v2c:function(){gx.fn.setControlValue("vFECHATDSMODAIS",gx.O.AV19FechaTdsModais,0)},c2v:function(){gx.O.AV19FechaTdsModais=this.val()},val:function(){return gx.fn.getControlValue("vFECHATDSMODAIS")},nac:gx.falseFn};
   this.AV20SnOk = "" ;
   this.ZV20SnOk = "" ;
   this.OV20SnOk = "" ;
   this.AV19FechaTdsModais = "" ;
   this.ZV19FechaTdsModais = "" ;
   this.OV19FechaTdsModais = "" ;
   this.AV20SnOk = "" ;
   this.AV19FechaTdsModais = "" ;
   this.AV18SolicitacaoNumero = 0 ;
   this.Events = {"e12o52_client": ["'FECHAR'", true] ,"e14o52_client": ["ENTER", true] ,"e15o52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19FechaTdsModais',fld:'vFECHATDSMODAIS'},{av:'AV18SolicitacaoNumero',fld:'vSOLICITACAONUMERO'}],[{av:'AV20SnOk',fld:'vSNOK'}]];
   this.setVCMap("AV18SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexibenosolicitacao());
