/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:42.63
*/
gx.evt.autoSkip = false;
gx.define('hcopiartipodemonstracao', false, function () {
   this.ServerClass =  "hcopiartipodemonstracao" ;
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
      this.AV11TipoDemonstracaoEmpresaId=gx.fn.getControlValue("vTIPODEMONSTRACAOEMPRESAID") ;
   };
   this.e121s2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141s1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODEMONSTRACAOID",gxz:"ZV12TipoDemonstracaoId",gxold:"OV12TipoDemonstracaoId",gxvar:"AV12TipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPODEMONSTRACAOID",gx.O.AV12TipoDemonstracaoId,0)},c2v:function(){gx.O.AV12TipoDemonstracaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPODEMONSTRACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVOCODIGO",gxz:"ZV13NovoCodigo",gxold:"OV13NovoCodigo",gxvar:"AV13NovoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13NovoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13NovoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOVOCODIGO",gx.O.AV13NovoCodigo,0)},c2v:function(){gx.O.AV13NovoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOVOCODIGO",'.')},nac:gx.falseFn};
   this.AV12TipoDemonstracaoId = 0 ;
   this.ZV12TipoDemonstracaoId = 0 ;
   this.OV12TipoDemonstracaoId = 0 ;
   this.AV13NovoCodigo = 0 ;
   this.ZV13NovoCodigo = 0 ;
   this.OV13NovoCodigo = 0 ;
   this.AV12TipoDemonstracaoId = 0 ;
   this.AV13NovoCodigo = 0 ;
   this.AV11TipoDemonstracaoEmpresaId = "" ;
   this.Events = {"e121s2_client": ["ENTER", true] ,"e141s1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11TipoDemonstracaoEmpresaId',fld:'vTIPODEMONSTRACAOEMPRESAID',hsh:true},{av:'AV13NovoCodigo',fld:'vNOVOCODIGO'},{av:'AV12TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID',hsh:true}],[{av:'AV14snExiste',fld:'vSNEXISTE'},{av:'AV11TipoDemonstracaoEmpresaId',fld:'vTIPODEMONSTRACAOEMPRESAID',hsh:true}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11TipoDemonstracaoEmpresaId", "vTIPODEMONSTRACAOEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiartipodemonstracao());
