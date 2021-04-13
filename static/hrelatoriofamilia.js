/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:17:51.22
*/
gx.evt.autoSkip = false;
gx.define('hrelatoriofamilia', false, function () {
   this.ServerClass =  "hrelatoriofamilia" ;
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
   this.e12tp2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14tp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10];
   this.GXLastCtrlId =10;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV11TipoRelatorio",gxold:"OV11TipoRelatorio",gxvar:"AV11TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11TipoRelatorio=Value},v2z:function(Value){gx.O.ZV11TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV11TipoRelatorio)},c2v:function(){gx.O.AV11TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   this.AV11TipoRelatorio = "" ;
   this.ZV11TipoRelatorio = "" ;
   this.OV11TipoRelatorio = "" ;
   this.AV11TipoRelatorio = "" ;
   this.Events = {"e12tp2_client": ["ENTER", true] ,"e14tp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20Pgmname',fld:'vPGMNAME'},{av:'AV12QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV11TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV21Pgmdesc',fld:'vPGMDESC'}],[{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV15NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV14NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV11TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV12QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelatoriofamilia());
