/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:59:49.8
*/
gx.evt.autoSkip = false;
gx.define('hsuspenderclienteparametro', false, function () {
   this.ServerClass =  "hsuspenderclienteparametro" ;
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
   };
   this.e1220l2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1320l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1520l2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,13,15,18,20];
   this.GXLastCtrlId =20;
   GXValidFnc[3]={fld:"TABLE4",grid:0};
   GXValidFnc[6]={fld:"TABLE3",grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSUSPAUTOMATICA",gxz:"ZV12SnSuspAutomatica",gxold:"OV12SnSuspAutomatica",gxvar:"AV12SnSuspAutomatica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV12SnSuspAutomatica=Value},v2z:function(Value){gx.O.ZV12SnSuspAutomatica=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSUSPAUTOMATICA",gx.O.AV12SnSuspAutomatica,"S")},c2v:function(){gx.O.AV12SnSuspAutomatica=this.val()},val:function(){return gx.fn.getControlValue("vSNSUSPAUTOMATICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[13]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTULTIMASUSPENSAO",gxz:"ZV5DtUltimaSuspensao",gxold:"OV5DtUltimaSuspensao",gxvar:"AV5DtUltimaSuspensao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5DtUltimaSuspensao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV5DtUltimaSuspensao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTULTIMASUSPENSAO",gx.O.AV5DtUltimaSuspensao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5DtUltimaSuspensao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTULTIMASUSPENSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIAS",gxz:"ZV11QtdeDias",gxold:"OV11QtdeDias",gxvar:"AV11QtdeDias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11QtdeDias=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11QtdeDias=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIAS",gx.O.AV11QtdeDias,0)},c2v:function(){gx.O.AV11QtdeDias=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIAS",'.')},nac:gx.falseFn};
   this.AV12SnSuspAutomatica = "" ;
   this.ZV12SnSuspAutomatica = "" ;
   this.OV12SnSuspAutomatica = "" ;
   this.AV5DtUltimaSuspensao = gx.date.nullDate() ;
   this.ZV5DtUltimaSuspensao = gx.date.nullDate() ;
   this.OV5DtUltimaSuspensao = gx.date.nullDate() ;
   this.AV11QtdeDias = 0 ;
   this.ZV11QtdeDias = 0 ;
   this.OV11QtdeDias = 0 ;
   this.AV12SnSuspAutomatica = "" ;
   this.AV5DtUltimaSuspensao = gx.date.nullDate() ;
   this.AV11QtdeDias = 0 ;
   this.Events = {"e1220l2_client": ["ENTER", true] ,"e1320l2_client": ["'FECHAR'", true] ,"e1520l2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV17EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV12SnSuspAutomatica',fld:'vSNSUSPAUTOMATICA'},{av:'AV11QtdeDias',fld:'vQTDEDIAS'},{av:'AV5DtUltimaSuspensao',fld:'vDTULTIMASUSPENSAO'}],[{av:'AV12SnSuspAutomatica',fld:'vSNSUSPAUTOMATICA'},{av:'AV11QtdeDias',fld:'vQTDEDIAS'},{av:'AV5DtUltimaSuspensao',fld:'vDTULTIMASUSPENSAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsuspenderclienteparametro());
