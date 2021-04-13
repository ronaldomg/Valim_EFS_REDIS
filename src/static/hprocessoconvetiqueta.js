/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:14:26.67
*/
gx.evt.autoSkip = false;
gx.define('hprocessoconvetiqueta', false, function () {
   this.ServerClass =  "hprocessoconvetiqueta" ;
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
      this.AV16ProcessoConvAno=gx.fn.getIntegerValue("vPROCESSOCONVANO",'.') ;
      this.AV17ProcessoConvNumero=gx.fn.getIntegerValue("vPROCESSOCONVNUMERO",'.') ;
      this.AV18ProcessoConvDataInicio=gx.fn.getDateValue("vPROCESSOCONVDATAINICIO") ;
      this.AV19ProcessoConvFinalidade=gx.fn.getControlValue("vPROCESSOCONVFINALIDADE") ;
      this.AV23ProcessoConvFornecFantasia=gx.fn.getControlValue("vPROCESSOCONVFORNECFANTASIA") ;
   };
   this.s112_client=function()
   {
      this.AV20SnErro =  ""  ;
      if ( this.AV11LinhaIni > 10 )
      {
         this.addMessage("Linha inválida");
         gx.fn.usrSetFocus("vLINHAINI") ;
      }
      else
      {
         if ( this.AV12ColunaIni > 3 )
         {
            this.addMessage("Coluna inválida");
            gx.fn.usrSetFocus("vCOLUNAINI") ;
         }
         else
         {
            this.AV20SnErro =  "N"  ;
         }
      }
   };
   this.e12s32_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13s32_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15s32_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16];
   this.GXLastCtrlId =16;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLINHAINI",gxz:"ZV11LinhaIni",gxold:"OV11LinhaIni",gxvar:"AV11LinhaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11LinhaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11LinhaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLINHAINI",gx.O.AV11LinhaIni,0)},c2v:function(){gx.O.AV11LinhaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLINHAINI",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOLUNAINI",gxz:"ZV12ColunaIni",gxold:"OV12ColunaIni",gxvar:"AV12ColunaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ColunaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ColunaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOLUNAINI",gx.O.AV12ColunaIni,0)},c2v:function(){gx.O.AV12ColunaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOLUNAINI",'.')},nac:gx.falseFn};
   this.AV11LinhaIni = 0 ;
   this.ZV11LinhaIni = 0 ;
   this.OV11LinhaIni = 0 ;
   this.AV12ColunaIni = 0 ;
   this.ZV12ColunaIni = 0 ;
   this.OV12ColunaIni = 0 ;
   this.AV11LinhaIni = 0 ;
   this.AV12ColunaIni = 0 ;
   this.AV16ProcessoConvAno = 0 ;
   this.AV17ProcessoConvNumero = 0 ;
   this.AV18ProcessoConvDataInicio = gx.date.nullDate() ;
   this.AV19ProcessoConvFinalidade = "" ;
   this.AV23ProcessoConvFornecFantasia = "" ;
   this.AV20SnErro = "" ;
   this.Events = {"e12s32_client": ["ENTER", true] ,"e13s32_client": ["'FECHAR'", true] ,"e15s32_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20SnErro',fld:'vSNERRO'},{av:'AV11LinhaIni',fld:'vLINHAINI'},{av:'AV12ColunaIni',fld:'vCOLUNAINI'},{av:'AV16ProcessoConvAno',fld:'vPROCESSOCONVANO',hsh:true},{av:'AV17ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO',hsh:true},{av:'AV18ProcessoConvDataInicio',fld:'vPROCESSOCONVDATAINICIO',hsh:true},{av:'AV19ProcessoConvFinalidade',fld:'vPROCESSOCONVFINALIDADE',hsh:true},{av:'AV23ProcessoConvFornecFantasia',fld:'vPROCESSOCONVFORNECFANTASIA',hsh:true},{av:'AV21SdtEtq',fld:'vSDTETQ'},{av:'AV26Pgmname',fld:'vPGMNAME'},{av:'AV15QtdPagGeradas',fld:'vQTDPAGGERADAS'}],[{av:'AV11LinhaIni',fld:'vLINHAINI'},{av:'AV12ColunaIni',fld:'vCOLUNAINI'},{av:'AV22SdtEtqItem',fld:'vSDTETQITEM'},{av:'AV21SdtEtq',fld:'vSDTETQ'},{av:'AV14NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV13NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV15QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV20SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV16ProcessoConvAno", "vPROCESSOCONVANO", 0, "int");
   this.setVCMap("AV17ProcessoConvNumero", "vPROCESSOCONVNUMERO", 0, "int");
   this.setVCMap("AV18ProcessoConvDataInicio", "vPROCESSOCONVDATAINICIO", 0, "date");
   this.setVCMap("AV19ProcessoConvFinalidade", "vPROCESSOCONVFINALIDADE", 0, "svchar");
   this.setVCMap("AV23ProcessoConvFornecFantasia", "vPROCESSOCONVFORNECFANTASIA", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hprocessoconvetiqueta());
