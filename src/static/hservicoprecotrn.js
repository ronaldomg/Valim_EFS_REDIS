/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:7:30.51
*/
gx.evt.autoSkip = false;
gx.define('hservicoprecotrn', false, function () {
   this.ServerClass =  "hservicoprecotrn" ;
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
      this.AV8ServicoPrecoDescricao=gx.fn.getControlValue("vSERVICOPRECODESCRICAO") ;
      this.AV12ServicoPrecoData=gx.fn.getDateValue("vSERVICOPRECODATA") ;
      this.AV9ServicoCodigo=gx.fn.getIntegerValue("vSERVICOCODIGO",'.') ;
      this.AV11ServicoPrecoVlr=gx.fn.getDecimalValue("vSERVICOPRECOVLR",'.',',') ;
      this.AV15Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.Validv_Servicocodigotela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSERVICOCODIGOTELA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Servicoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSERVICOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121ci2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131ci2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151ci2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,23,25,28,30,33,36,38,40,49,50,51,53,55];
   this.GXLastCtrlId =55;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Servicocodigotela,isvalid:null,rgrid:[],fld:"vSERVICOCODIGOTELA",gxz:"ZV30ServicoCodigoTela",gxold:"OV30ServicoCodigoTela",gxvar:"AV30ServicoCodigoTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ServicoCodigoTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ServicoCodigoTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSERVICOCODIGOTELA",gx.O.AV30ServicoCodigoTela,0)},c2v:function(){gx.O.AV30ServicoCodigoTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSERVICOCODIGOTELA",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICODESCRICAO",gxz:"ZV5ServicoDescricao",gxold:"OV5ServicoDescricao",gxvar:"AV5ServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5ServicoDescricao=Value},v2z:function(Value){gx.O.ZV5ServicoDescricao=Value},v2c:function(){gx.fn.setControlValue("vSERVICODESCRICAO",gx.O.AV5ServicoDescricao,0)},c2v:function(){gx.O.AV5ServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSERVICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICOPRECODATATELA",gxz:"ZV29ServicoPrecoDataTela",gxold:"OV29ServicoPrecoDataTela",gxvar:"AV29ServicoPrecoDataTela",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ServicoPrecoDataTela=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29ServicoPrecoDataTela=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSERVICOPRECODATATELA",gx.O.AV29ServicoPrecoDataTela,0)},c2v:function(){gx.O.AV29ServicoPrecoDataTela=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSERVICOPRECODATATELA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICOPRECODESCRICAOTELA",gxz:"ZV28ServicoPrecoDescricaoTela",gxold:"OV28ServicoPrecoDescricaoTela",gxvar:"AV28ServicoPrecoDescricaoTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ServicoPrecoDescricaoTela=Value},v2z:function(Value){gx.O.ZV28ServicoPrecoDescricaoTela=Value},v2c:function(){gx.fn.setControlValue("vSERVICOPRECODESCRICAOTELA",gx.O.AV28ServicoPrecoDescricaoTela,0)},c2v:function(){gx.O.AV28ServicoPrecoDescricaoTela=this.val()},val:function(){return gx.fn.getControlValue("vSERVICOPRECODESCRICAOTELA")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"decimal",len:9,dec:2,sign:true,pic:"ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICOPRECOVLRTELA",gxz:"ZV31ServicoPrecoVlrTela",gxold:"OV31ServicoPrecoVlrTela",gxvar:"AV31ServicoPrecoVlrTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ServicoPrecoVlrTela=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV31ServicoPrecoVlrTela=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSERVICOPRECOVLRTELA",gx.O.AV31ServicoPrecoVlrTela,2,',')},c2v:function(){gx.O.AV31ServicoPrecoVlrTela=this.val()},val:function(){return gx.fn.getDecimalValue("vSERVICOPRECOVLRTELA",'.',',')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICOPRECOUSUALT",gxz:"ZV13ServicoPrecoUsuAlt",gxold:"OV13ServicoPrecoUsuAlt",gxvar:"AV13ServicoPrecoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ServicoPrecoUsuAlt=Value},v2z:function(Value){gx.O.ZV13ServicoPrecoUsuAlt=Value},v2c:function(){gx.fn.setControlValue("vSERVICOPRECOUSUALT",gx.O.AV13ServicoPrecoUsuAlt,0)},c2v:function(){gx.O.AV13ServicoPrecoUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("vSERVICOPRECOUSUALT")},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICOPRECODATUSUALT",gxz:"ZV14ServicoPrecoDatUsuAlt",gxold:"OV14ServicoPrecoDatUsuAlt",gxvar:"AV14ServicoPrecoDatUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ServicoPrecoDatUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14ServicoPrecoDatUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSERVICOPRECODATUSUALT",gx.O.AV14ServicoPrecoDatUsuAlt,0)},c2v:function(){gx.O.AV14ServicoPrecoDatUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vSERVICOPRECODATUSUALT")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"JS", format:2,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Servicoempresaid,isvalid:null,rgrid:[],fld:"vSERVICOEMPRESAID",gxz:"ZV10ServicoEmpresaId",gxold:"OV10ServicoEmpresaId",gxvar:"AV10ServicoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10ServicoEmpresaId=Value},v2z:function(Value){gx.O.ZV10ServicoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSERVICOEMPRESAID",gx.O.AV10ServicoEmpresaId,0)},c2v:function(){gx.O.AV10ServicoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSERVICOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICOPRECOEMPRESAID",gxz:"ZV7ServicoPrecoEmpresaId",gxold:"OV7ServicoPrecoEmpresaId",gxvar:"AV7ServicoPrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7ServicoPrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV7ServicoPrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSERVICOPRECOEMPRESAID",gx.O.AV7ServicoPrecoEmpresaId,0)},c2v:function(){gx.O.AV7ServicoPrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSERVICOPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"BTNHELP",grid:0};
   GXValidFnc[55]={fld:"PROMPT_SERVICOCODIGOTELA",grid:0};
   this.AV30ServicoCodigoTela = 0 ;
   this.ZV30ServicoCodigoTela = 0 ;
   this.OV30ServicoCodigoTela = 0 ;
   this.AV5ServicoDescricao = "" ;
   this.ZV5ServicoDescricao = "" ;
   this.OV5ServicoDescricao = "" ;
   this.AV29ServicoPrecoDataTela = gx.date.nullDate() ;
   this.ZV29ServicoPrecoDataTela = gx.date.nullDate() ;
   this.OV29ServicoPrecoDataTela = gx.date.nullDate() ;
   this.AV28ServicoPrecoDescricaoTela = "" ;
   this.ZV28ServicoPrecoDescricaoTela = "" ;
   this.OV28ServicoPrecoDescricaoTela = "" ;
   this.AV31ServicoPrecoVlrTela = 0 ;
   this.ZV31ServicoPrecoVlrTela = 0 ;
   this.OV31ServicoPrecoVlrTela = 0 ;
   this.AV13ServicoPrecoUsuAlt = "" ;
   this.ZV13ServicoPrecoUsuAlt = "" ;
   this.OV13ServicoPrecoUsuAlt = "" ;
   this.AV14ServicoPrecoDatUsuAlt = gx.date.nullDate() ;
   this.ZV14ServicoPrecoDatUsuAlt = gx.date.nullDate() ;
   this.OV14ServicoPrecoDatUsuAlt = gx.date.nullDate() ;
   this.AV10ServicoEmpresaId = "" ;
   this.ZV10ServicoEmpresaId = "" ;
   this.OV10ServicoEmpresaId = "" ;
   this.AV7ServicoPrecoEmpresaId = "" ;
   this.ZV7ServicoPrecoEmpresaId = "" ;
   this.OV7ServicoPrecoEmpresaId = "" ;
   this.AV30ServicoCodigoTela = 0 ;
   this.AV5ServicoDescricao = "" ;
   this.AV29ServicoPrecoDataTela = gx.date.nullDate() ;
   this.AV28ServicoPrecoDescricaoTela = "" ;
   this.AV31ServicoPrecoVlrTela = 0 ;
   this.AV13ServicoPrecoUsuAlt = "" ;
   this.AV14ServicoPrecoDatUsuAlt = gx.date.nullDate() ;
   this.AV10ServicoEmpresaId = "" ;
   this.AV7ServicoPrecoEmpresaId = "" ;
   this.AV8ServicoPrecoDescricao = "" ;
   this.AV12ServicoPrecoData = gx.date.nullDate() ;
   this.AV9ServicoCodigo = 0 ;
   this.AV11ServicoPrecoVlr = 0 ;
   this.AV15Modo = "" ;
   this.A8626ServicoCodigo = 0 ;
   this.A8625ServicoEmpresaId = "" ;
   this.A8622ServicoDescricao = "" ;
   this.Events = {"e121ci2_client": ["ENTER", true] ,"e131ci2_client": ["'FECHAR'", true] ,"e151ci2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15Modo',fld:'vMODO'},{av:'AV23SnErro',fld:'vSNERRO'},{av:'AV7ServicoPrecoEmpresaId',fld:'vSERVICOPRECOEMPRESAID'},{av:'AV28ServicoPrecoDescricaoTela',fld:'vSERVICOPRECODESCRICAOTELA'},{av:'AV29ServicoPrecoDataTela',fld:'vSERVICOPRECODATATELA'},{av:'AV30ServicoCodigoTela',fld:'vSERVICOCODIGOTELA'},{av:'AV10ServicoEmpresaId',fld:'vSERVICOEMPRESAID'},{av:'AV31ServicoPrecoVlrTela',fld:'vSERVICOPRECOVLRTELA'},{av:'AV13ServicoPrecoUsuAlt',fld:'vSERVICOPRECOUSUALT'},{av:'AV14ServicoPrecoDatUsuAlt',fld:'vSERVICOPRECODATUSUALT'},{av:'A8625ServicoEmpresaId',fld:'SERVICOEMPRESAID'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'}],[{av:'AV23SnErro',fld:'vSNERRO'},{av:'AV24Mensagem',fld:'vMENSAGEM'},{ctrl:'CONFIRMAR',prop:'Enabled'},{av:'AV38GXLvl139',fld:'vGXLVL139'},{av:'AV32DataAtual',fld:'vDATAATUAL'},{av:'AV28ServicoPrecoDescricaoTela',fld:'vSERVICOPRECODESCRICAOTELA'},{av:'AV29ServicoPrecoDataTela',fld:'vSERVICOPRECODATATELA'},{av:'AV30ServicoCodigoTela',fld:'vSERVICOCODIGOTELA'},{av:'AV31ServicoPrecoVlrTela',fld:'vSERVICOPRECOVLRTELA'},{av:'AV5ServicoDescricao',fld:'vSERVICODESCRICAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_SERVICOCODIGOTELA", [14]);
   this.EnterCtrl = ["CONFIRMAR"];
   this.setVCMap("AV8ServicoPrecoDescricao", "vSERVICOPRECODESCRICAO", 0, "svchar");
   this.setVCMap("AV12ServicoPrecoData", "vSERVICOPRECODATA", 0, "date");
   this.setVCMap("AV9ServicoCodigo", "vSERVICOCODIGO", 0, "int");
   this.setVCMap("AV11ServicoPrecoVlr", "vSERVICOPRECOVLR", 0, "decimal");
   this.setVCMap("AV15Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hservicoprecotrn());
