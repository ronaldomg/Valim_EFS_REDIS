/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:43.10
*/
gx.evt.autoSkip = false;
gx.define('hcopiartransacaopagrec', false, function () {
   this.ServerClass =  "hcopiartransacaopagrec" ;
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
      this.AV14TransacaoPagRecEmpresaId=gx.fn.getControlValue("vTRANSACAOPAGRECEMPRESAID") ;
   };
   this.e129l2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e149l1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20];
   this.GXLastCtrlId =20;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECTIPO",gxz:"ZV15TransacaoPagRecTipo",gxold:"OV15TransacaoPagRecTipo",gxvar:"AV15TransacaoPagRecTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15TransacaoPagRecTipo=Value},v2z:function(Value){gx.O.ZV15TransacaoPagRecTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOPAGRECTIPO",gx.O.AV15TransacaoPagRecTipo)},c2v:function(){gx.O.AV15TransacaoPagRecTipo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECTIPO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECID",gxz:"ZV16TransacaoPagRecId",gxold:"OV16TransacaoPagRecId",gxvar:"AV16TransacaoPagRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TransacaoPagRecId=Value},v2z:function(Value){gx.O.ZV16TransacaoPagRecId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECID",gx.O.AV16TransacaoPagRecId,0)},c2v:function(){gx.O.AV16TransacaoPagRecId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECID")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVOTRANSACAOPAGRECID",gxz:"ZV12NovoTransacaoPagRecId",gxold:"OV12NovoTransacaoPagRecId",gxvar:"AV12NovoTransacaoPagRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12NovoTransacaoPagRecId=Value},v2z:function(Value){gx.O.ZV12NovoTransacaoPagRecId=Value},v2c:function(){gx.fn.setControlValue("vNOVOTRANSACAOPAGRECID",gx.O.AV12NovoTransacaoPagRecId,0)},c2v:function(){gx.O.AV12NovoTransacaoPagRecId=this.val()},val:function(){return gx.fn.getControlValue("vNOVOTRANSACAOPAGRECID")},nac:gx.falseFn};
   this.AV15TransacaoPagRecTipo = "" ;
   this.ZV15TransacaoPagRecTipo = "" ;
   this.OV15TransacaoPagRecTipo = "" ;
   this.AV16TransacaoPagRecId = "" ;
   this.ZV16TransacaoPagRecId = "" ;
   this.OV16TransacaoPagRecId = "" ;
   this.AV12NovoTransacaoPagRecId = "" ;
   this.ZV12NovoTransacaoPagRecId = "" ;
   this.OV12NovoTransacaoPagRecId = "" ;
   this.AV15TransacaoPagRecTipo = "" ;
   this.AV16TransacaoPagRecId = "" ;
   this.AV12NovoTransacaoPagRecId = "" ;
   this.AV14TransacaoPagRecEmpresaId = "" ;
   this.Events = {"e129l2_client": ["ENTER", true] ,"e149l1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14TransacaoPagRecEmpresaId',fld:'vTRANSACAOPAGRECEMPRESAID',hsh:true},{av:'AV15TransacaoPagRecTipo',fld:'vTRANSACAOPAGRECTIPO',hsh:true},{av:'AV12NovoTransacaoPagRecId',fld:'vNOVOTRANSACAOPAGRECID'},{av:'AV16TransacaoPagRecId',fld:'vTRANSACAOPAGRECID',hsh:true}],[{av:'AV13snExiste',fld:'vSNEXISTE'},{av:'AV15TransacaoPagRecTipo',fld:'vTRANSACAOPAGRECTIPO',hsh:true}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14TransacaoPagRecEmpresaId", "vTRANSACAOPAGRECEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiartransacaopagrec());
