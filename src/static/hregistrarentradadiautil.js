/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:3:30.43
*/
gx.evt.autoSkip = false;
gx.define('hregistrarentradadiautil', false, function () {
   this.ServerClass =  "hregistrarentradadiautil" ;
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
   this.e12x82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13x82_client=function()
   {
      this.executeServerEvent("'NAO'", false, null, false, false);
   };
   this.e15x82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9];
   this.GXLastCtrlId =9;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"MSGERRO", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSEQUENCIA",gxz:"ZV13Sequencia",gxold:"OV13Sequencia",gxvar:"AV13Sequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Sequencia=Value},v2z:function(Value){gx.O.ZV13Sequencia=Value},v2c:function(){gx.fn.setControlValue("vSEQUENCIA",gx.O.AV13Sequencia,0)},c2v:function(){gx.O.AV13Sequencia=this.val()},val:function(){return gx.fn.getControlValue("vSEQUENCIA")},nac:gx.falseFn};
   GXValidFnc[9]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAUTIL",gxz:"ZV6DiaUtil",gxold:"OV6DiaUtil",gxvar:"AV6DiaUtil",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6DiaUtil=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6DiaUtil=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDIAUTIL",gx.O.AV6DiaUtil,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6DiaUtil=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDIAUTIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 9 , function() {
   });
   this.AV13Sequencia = "" ;
   this.ZV13Sequencia = "" ;
   this.OV13Sequencia = "" ;
   this.AV6DiaUtil = gx.date.nullDate() ;
   this.ZV6DiaUtil = gx.date.nullDate() ;
   this.OV6DiaUtil = gx.date.nullDate() ;
   this.AV13Sequencia = "" ;
   this.AV6DiaUtil = gx.date.nullDate() ;
   this.Events = {"e12x82_client": ["ENTER", true] ,"e13x82_client": ["'NAO'", true] ,"e15x82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13Sequencia',fld:'vSEQUENCIA'},{av:'AV6DiaUtil',fld:'vDIAUTIL'}],[{av:'AV10SdtParcela',fld:'vSDTPARCELA'},{av:'AV17GXV1',fld:'vGXV1'},{av:'AV9SdtParcelaItem',fld:'vSDTPARCELAITEM'},{av:'AV6DiaUtil',fld:'vDIAUTIL'},{av:'AV19GXV3',fld:'vGXV3'},{av:'AV13Sequencia',fld:'vSEQUENCIA'},{av:'AV11SnDiaUtil',fld:'vSNDIAUTIL'},{av:'gx.fn.getCtrlProperty("MSGERRO","Caption")',ctrl:'MSGERRO',prop:'Caption'}]];
   this.EvtParms["'NAO'"] = [[{av:'AV13Sequencia',fld:'vSEQUENCIA'},{av:'AV6DiaUtil',fld:'vDIAUTIL'}],[{av:'AV10SdtParcela',fld:'vSDTPARCELA'},{av:'AV18GXV2',fld:'vGXV2'},{av:'AV9SdtParcelaItem',fld:'vSDTPARCELAITEM'},{av:'AV6DiaUtil',fld:'vDIAUTIL'},{av:'AV19GXV3',fld:'vGXV3'},{av:'AV13Sequencia',fld:'vSEQUENCIA'},{av:'AV11SnDiaUtil',fld:'vSNDIAUTIL'},{av:'gx.fn.getCtrlProperty("MSGERRO","Caption")',ctrl:'MSGERRO',prop:'Caption'}]];
   this.EnterCtrl = ["BTNSIM"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarentradadiautil());
