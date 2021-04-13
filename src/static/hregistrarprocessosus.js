/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:7:25.38
*/
gx.evt.autoSkip = false;
gx.define('hregistrarprocessosus', false, function () {
   this.ServerClass =  "hregistrarprocessosus" ;
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
   this.e12q42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13q42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15q42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,19,21,24,26,29,31,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVANO",gxz:"ZV11ProcessoConvAno",gxold:"OV11ProcessoConvAno",gxvar:"AV11ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11ProcessoConvAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVANO",gx.O.AV11ProcessoConvAno,0)},c2v:function(){gx.O.AV11ProcessoConvAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVANO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVNUMERO",gxz:"ZV12ProcessoConvNumero",gxold:"OV12ProcessoConvNumero",gxvar:"AV12ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ProcessoConvNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVNUMERO",gx.O.AV12ProcessoConvNumero,0)},c2v:function(){gx.O.AV12ProcessoConvNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVFINALIDADE",gxz:"ZV13ProcessoConvFinalidade",gxold:"OV13ProcessoConvFinalidade",gxvar:"AV13ProcessoConvFinalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ProcessoConvFinalidade=Value},v2z:function(Value){gx.O.ZV13ProcessoConvFinalidade=Value},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVFINALIDADE",gx.O.AV13ProcessoConvFinalidade,0)},c2v:function(){gx.O.AV13ProcessoConvFinalidade=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOCONVFINALIDADE")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOCONVDATAVALIDADE",gxz:"ZV19ProcessoConvDataValidade",gxold:"OV19ProcessoConvDataValidade",gxvar:"AV19ProcessoConvDataValidade",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ProcessoConvDataValidade=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19ProcessoConvDataValidade=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVDATAVALIDADE",gx.O.AV19ProcessoConvDataValidade,0)},c2v:function(){gx.O.AV19ProcessoConvDataValidade=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPROCESSOCONVDATAVALIDADE")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV14ConvenioId",gxold:"OV14ConvenioId",gxvar:"AV14ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV14ConvenioId,0)},c2v:function(){gx.O.AV14ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"JS", format:2,grid:0};
   GXValidFnc[41]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV11ProcessoConvAno = 0 ;
   this.ZV11ProcessoConvAno = 0 ;
   this.OV11ProcessoConvAno = 0 ;
   this.AV12ProcessoConvNumero = 0 ;
   this.ZV12ProcessoConvNumero = 0 ;
   this.OV12ProcessoConvNumero = 0 ;
   this.AV13ProcessoConvFinalidade = "" ;
   this.ZV13ProcessoConvFinalidade = "" ;
   this.OV13ProcessoConvFinalidade = "" ;
   this.AV19ProcessoConvDataValidade = gx.date.nullDate() ;
   this.ZV19ProcessoConvDataValidade = gx.date.nullDate() ;
   this.OV19ProcessoConvDataValidade = gx.date.nullDate() ;
   this.AV14ConvenioId = 0 ;
   this.ZV14ConvenioId = 0 ;
   this.OV14ConvenioId = 0 ;
   this.AV11ProcessoConvAno = 0 ;
   this.AV12ProcessoConvNumero = 0 ;
   this.AV13ProcessoConvFinalidade = "" ;
   this.AV19ProcessoConvDataValidade = gx.date.nullDate() ;
   this.AV14ConvenioId = 0 ;
   this.A1681ConvenioId = 0 ;
   this.A1684ConvenioDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e12q42_client": ["ENTER", true] ,"e13q42_client": ["'FECHAR'", true] ,"e15q42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV13ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE'},{av:'AV14ConvenioId',fld:'vCONVENIOID'},{av:'AV19ProcessoConvDataValidade',fld:'vPROCESSOCONVDATAVALIDADE'},{av:'AV12ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A1684ConvenioDataHoraAlt',fld:'CONVENIODATAHORAALT'}],[{av:'AV16SnErro',fld:'vSNERRO'},{av:'AV12ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV20SnExiste',fld:'vSNEXISTE'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV12ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV11ProcessoConvAno',fld:'vPROCESSOCONVANO'}],[{av:'AV11ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV12ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'}]];
   this.setPrompt("PROMPT_CONVENIOID", [31]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarprocessosus());
