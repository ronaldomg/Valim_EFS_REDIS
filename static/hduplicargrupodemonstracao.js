/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:46.72
*/
gx.evt.autoSkip = false;
gx.define('hduplicargrupodemonstracao', false, function () {
   this.ServerClass =  "hduplicargrupodemonstracao" ;
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
      this.AV14TipoDemonstracaoEmpresaId=gx.fn.getControlValue("vTIPODEMONSTRACAOEMPRESAID") ;
   };
   this.e121w2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131w2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151w2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,28];
   this.GXLastCtrlId =28;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODEMONSTRACAOID",gxz:"ZV11TipoDemonstracaoId",gxold:"OV11TipoDemonstracaoId",gxvar:"AV11TipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPODEMONSTRACAOID",gx.O.AV11TipoDemonstracaoId,0)},c2v:function(){gx.O.AV11TipoDemonstracaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPODEMONSTRACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOTIPODEMONSTRACAOID",gxz:"ZV13GrupoTipoDemonstracaoId",gxold:"OV13GrupoTipoDemonstracaoId",gxvar:"AV13GrupoTipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13GrupoTipoDemonstracaoId=Value},v2z:function(Value){gx.O.ZV13GrupoTipoDemonstracaoId=Value},v2c:function(){gx.fn.setControlValue("vGRUPOTIPODEMONSTRACAOID",gx.O.AV13GrupoTipoDemonstracaoId,0)},c2v:function(){gx.O.AV13GrupoTipoDemonstracaoId=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOTIPODEMONSTRACAOID")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVOCODIGO",gxz:"ZV12NovoCodigo",gxold:"OV12NovoCodigo",gxvar:"AV12NovoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12NovoCodigo=Value},v2z:function(Value){gx.O.ZV12NovoCodigo=Value},v2c:function(){gx.fn.setControlValue("vNOVOCODIGO",gx.O.AV12NovoCodigo,0)},c2v:function(){gx.O.AV12NovoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vNOVOCODIGO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"JS", format:1,grid:0};
   this.AV11TipoDemonstracaoId = 0 ;
   this.ZV11TipoDemonstracaoId = 0 ;
   this.OV11TipoDemonstracaoId = 0 ;
   this.AV13GrupoTipoDemonstracaoId = "" ;
   this.ZV13GrupoTipoDemonstracaoId = "" ;
   this.OV13GrupoTipoDemonstracaoId = "" ;
   this.AV12NovoCodigo = "" ;
   this.ZV12NovoCodigo = "" ;
   this.OV12NovoCodigo = "" ;
   this.AV11TipoDemonstracaoId = 0 ;
   this.AV13GrupoTipoDemonstracaoId = "" ;
   this.AV12NovoCodigo = "" ;
   this.AV14TipoDemonstracaoEmpresaId = "" ;
   this.Events = {"e121w2_client": ["ENTER", true] ,"e131w2_client": ["'FECHAR'", true] ,"e151w2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14TipoDemonstracaoEmpresaId',fld:'vTIPODEMONSTRACAOEMPRESAID',hsh:true},{av:'AV11TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID',hsh:true},{av:'AV12NovoCodigo',fld:'vNOVOCODIGO'},{av:'AV13GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID',hsh:true}],[{av:'AV15snExiste',fld:'vSNEXISTE'},{av:'AV18SNTipoDemoSuperior',fld:'vSNTIPODEMOSUPERIOR'},{av:'AV14TipoDemonstracaoEmpresaId',fld:'vTIPODEMONSTRACAOEMPRESAID',hsh:true}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14TipoDemonstracaoEmpresaId", "vTIPODEMONSTRACAOEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicargrupodemonstracao());
