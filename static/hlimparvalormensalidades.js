/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:37.43
*/
gx.evt.autoSkip = false;
gx.define('hlimparvalormensalidades', false, function () {
   this.ServerClass =  "hlimparvalormensalidades" ;
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
      this.AV15MensalidadePagRec=gx.fn.getControlValue("vMENSALIDADEPAGREC") ;
   };
   this.e12lj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13lj2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15lj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,22];
   this.GXLastCtrlId =22;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTA",gxz:"ZV11TipoConta",gxold:"OV11TipoConta",gxvar:"AV11TipoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11TipoConta=Value},v2z:function(Value){gx.O.ZV11TipoConta=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCONTA",gx.O.AV11TipoConta)},c2v:function(){gx.O.AV11TipoConta=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[15]={fld:"TABLE7",grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV12Mes",gxold:"OV12Mes",gxvar:"AV12Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12Mes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV12Mes,0)},c2v:function(){gx.O.AV12Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV13Ano",gxold:"OV13Ano",gxvar:"AV13Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV13Ano,0)},c2v:function(){gx.O.AV13Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   this.AV11TipoConta = "" ;
   this.ZV11TipoConta = "" ;
   this.OV11TipoConta = "" ;
   this.AV12Mes = 0 ;
   this.ZV12Mes = 0 ;
   this.OV12Mes = 0 ;
   this.AV13Ano = 0 ;
   this.ZV13Ano = 0 ;
   this.OV13Ano = 0 ;
   this.AV11TipoConta = "" ;
   this.AV12Mes = 0 ;
   this.AV13Ano = 0 ;
   this.AV15MensalidadePagRec = "" ;
   this.Events = {"e12lj2_client": ["ENTER", true] ,"e13lj2_client": ["'CANCELAR'", true] ,"e15lj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12Mes',fld:'vMES'},{av:'AV13Ano',fld:'vANO'},{av:'AV11TipoConta',fld:'vTIPOCONTA'}],[{av:'AV10SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15MensalidadePagRec", "vMENSALIDADEPAGREC", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlimparvalormensalidades());
