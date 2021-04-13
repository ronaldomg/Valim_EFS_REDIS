/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:1:2.10
*/
gx.evt.autoSkip = false;
gx.define('hacertasoma', false, function () {
   this.ServerClass =  "hacertasoma" ;
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
   this.e1316a2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1116a2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1516a2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,21];
   this.GXLastCtrlId =21;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSRSNH",gxz:"ZV21UsrSnh",gxold:"OV21UsrSnh",gxvar:"AV21UsrSnh",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21UsrSnh=Value},v2z:function(Value){gx.O.ZV21UsrSnh=Value},v2c:function(){gx.fn.setControlValue("vUSRSNH",gx.O.AV21UsrSnh,0)},c2v:function(){gx.O.AV21UsrSnh=this.val()},val:function(){return gx.fn.getControlValue("vUSRSNH")},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTENTATIVAS",gxz:"ZV22NoTentativas",gxold:"OV22NoTentativas",gxvar:"AV22NoTentativas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22NoTentativas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22NoTentativas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOTENTATIVAS",gx.O.AV22NoTentativas,0)},c2v:function(){gx.O.AV22NoTentativas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOTENTATIVAS",'.')},nac:gx.falseFn};
   this.AV21UsrSnh = "" ;
   this.ZV21UsrSnh = "" ;
   this.OV21UsrSnh = "" ;
   this.AV22NoTentativas = 0 ;
   this.ZV22NoTentativas = 0 ;
   this.OV22NoTentativas = 0 ;
   this.AV21UsrSnh = "" ;
   this.AV22NoTentativas = 0 ;
   this.Events = {"e1316a2_client": ["ENTER", true] ,"e1116a2_client": ["'FECHAR'", true] ,"e1516a2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV21UsrSnh',fld:'vUSRSNH'},{av:'AV22NoTentativas',fld:'vNOTENTATIVAS'}],[{av:'AV24SnErro',fld:'vSNERRO'},{av:'AV23EmpresaId',fld:'vEMPRESAID'},{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'AV22NoTentativas',fld:'vNOTENTATIVAS'},{av:'AV21UsrSnh',fld:'vUSRSNH'},{av:'AV5UsrCod',fld:'vUSRCOD'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hacertasoma());
