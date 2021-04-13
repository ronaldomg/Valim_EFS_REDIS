/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:9:56.43
*/
gx.evt.autoSkip = false;
gx.define('hdiautil', false, function () {
   this.ServerClass =  "hdiautil" ;
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
      this.AV11DataStr=gx.fn.getControlValue("vDATASTR") ;
      this.AV12DiaUtilStr=gx.fn.getControlValue("vDIAUTILSTR") ;
      this.AV18LinhaStr=gx.fn.getControlValue("vLINHASTR") ;
      this.AV17TipoConta=gx.fn.getControlValue("vTIPOCONTA") ;
   };
   this.e12av2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13av2_client=function()
   {
      this.executeServerEvent("'NAO'", false, null, false, false);
   };
   this.e15av2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,14,18,19,20];
   this.GXLastCtrlId =20;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXT1", format:0,grid:0};
   GXValidFnc[9]={fld:"TEXT2", format:0,grid:0};
   GXValidFnc[10]={fld:"TEXT3", format:0,grid:0};
   GXValidFnc[11]={fld:"TEXT4", format:0,grid:0};
   GXValidFnc[14]={fld:"TEXT5", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONT",gxz:"ZV22Cont",gxold:"OV22Cont",gxvar:"AV22Cont",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Cont=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Cont=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONT",gx.O.AV22Cont,0)},c2v:function(){gx.O.AV22Cont=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONT",'.')},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAUTIL",gxz:"ZV14DiaUtil",gxold:"OV14DiaUtil",gxvar:"AV14DiaUtil",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DiaUtil=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14DiaUtil=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDIAUTIL",gx.O.AV14DiaUtil,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14DiaUtil=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDIAUTIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[20]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLINHA",gxz:"ZV13Linha",gxold:"OV13Linha",gxvar:"AV13Linha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Linha=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Linha=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLINHA",gx.O.AV13Linha,0)},c2v:function(){gx.O.AV13Linha=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLINHA",'.')},nac:gx.falseFn};
   this.AV22Cont = 0 ;
   this.ZV22Cont = 0 ;
   this.OV22Cont = 0 ;
   this.AV14DiaUtil = gx.date.nullDate() ;
   this.ZV14DiaUtil = gx.date.nullDate() ;
   this.OV14DiaUtil = gx.date.nullDate() ;
   this.AV13Linha = 0 ;
   this.ZV13Linha = 0 ;
   this.OV13Linha = 0 ;
   this.AV22Cont = 0 ;
   this.AV14DiaUtil = gx.date.nullDate() ;
   this.AV13Linha = 0 ;
   this.AV11DataStr = "" ;
   this.AV12DiaUtilStr = "" ;
   this.AV18LinhaStr = "" ;
   this.AV17TipoConta = "" ;
   this.Events = {"e12av2_client": ["ENTER", true] ,"e13av2_client": ["'NAO'", true] ,"e15av2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13Linha',fld:'vLINHA'},{av:'AV15contas',fld:'vCONTAS'},{av:'AV14DiaUtil',fld:'vDIAUTIL'},{av:'AV11DataStr',fld:'vDATASTR'},{av:'AV25SnOk',fld:'vSNOK'},{av:'AV22Cont',fld:'vCONT'},{av:'AV24Sair',fld:'vSAIR'},{av:'AV17TipoConta',fld:'vTIPOCONTA',hsh:true}],[{av:'AV30GXV1',fld:'vGXV1'},{av:'AV16ParcelasItem',fld:'vPARCELASITEM'},{av:'AV25SnOk',fld:'vSNOK'},{av:'AV32GXV3',fld:'vGXV3'},{av:'AV22Cont',fld:'vCONT'},{av:'AV20ErroDataVenc2',fld:'vERRODATAVENC2'},{av:'AV19ProxDiaUtil',fld:'vPROXDIAUTIL'},{av:'AV21SnValidaDataVenc',fld:'vSNVALIDADATAVENC'},{av:'AV11DataStr',fld:'vDATASTR'},{av:'gx.fn.getCtrlProperty("TEXT1","Caption")',ctrl:'TEXT1',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXT2","Caption")',ctrl:'TEXT2',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXT3","Caption")',ctrl:'TEXT3',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXT4","Caption")',ctrl:'TEXT4',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXT5","Caption")',ctrl:'TEXT5',prop:'Caption'},{av:'AV13Linha',fld:'vLINHA'},{av:'AV14DiaUtil',fld:'vDIAUTIL'},{av:'AV24Sair',fld:'vSAIR'},{av:'AV15contas',fld:'vCONTAS'}]];
   this.EvtParms["'NAO'"] = [[{av:'AV13Linha',fld:'vLINHA'},{av:'AV15contas',fld:'vCONTAS'},{av:'AV11DataStr',fld:'vDATASTR'},{av:'AV25SnOk',fld:'vSNOK'},{av:'AV14DiaUtil',fld:'vDIAUTIL'},{av:'AV22Cont',fld:'vCONT'},{av:'AV24Sair',fld:'vSAIR'},{av:'AV17TipoConta',fld:'vTIPOCONTA',hsh:true}],[{av:'AV31GXV2',fld:'vGXV2'},{av:'AV16ParcelasItem',fld:'vPARCELASITEM'},{av:'AV25SnOk',fld:'vSNOK'},{av:'AV32GXV3',fld:'vGXV3'},{av:'AV22Cont',fld:'vCONT'},{av:'AV20ErroDataVenc2',fld:'vERRODATAVENC2'},{av:'AV19ProxDiaUtil',fld:'vPROXDIAUTIL'},{av:'AV21SnValidaDataVenc',fld:'vSNVALIDADATAVENC'},{av:'AV11DataStr',fld:'vDATASTR'},{av:'gx.fn.getCtrlProperty("TEXT1","Caption")',ctrl:'TEXT1',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXT2","Caption")',ctrl:'TEXT2',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXT3","Caption")',ctrl:'TEXT3',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXT4","Caption")',ctrl:'TEXT4',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TEXT5","Caption")',ctrl:'TEXT5',prop:'Caption'},{av:'AV13Linha',fld:'vLINHA'},{av:'AV14DiaUtil',fld:'vDIAUTIL'},{av:'AV24Sair',fld:'vSAIR'},{av:'AV15contas',fld:'vCONTAS'}]];
   this.EnterCtrl = ["BTNSIM"];
   this.setVCMap("AV11DataStr", "vDATASTR", 0, "char");
   this.setVCMap("AV12DiaUtilStr", "vDIAUTILSTR", 0, "char");
   this.setVCMap("AV18LinhaStr", "vLINHASTR", 0, "char");
   this.setVCMap("AV17TipoConta", "vTIPOCONTA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdiautil());
