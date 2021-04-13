/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:39.80
*/
gx.evt.autoSkip = false;
gx.define('hconsistecontacaixa', false, function () {
   this.ServerClass =  "hconsistecontacaixa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e110s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130s2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150s2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,20,22,25,27,29,32,34,37,38,40,42,43,46,49,60,61,63];
   this.GXLastCtrlId =63;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE6",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={fld:"MESANO", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLEMESANO",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV20Mes",gxold:"OV20Mes",gxvar:"AV20Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Mes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV20Mes,0)},c2v:function(){gx.O.AV20Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"BARRA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV22Ano",gxold:"OV22Ano",gxvar:"AV22Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV22Ano,0)},c2v:function(){gx.O.AV22Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLERANGECCONTABIL",grid:0};
   GXValidFnc[37]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILINICIAL",gxz:"ZV15ContaContabilInicial",gxold:"OV15ContaContabilInicial",gxvar:"AV15ContaContabilInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ContaContabilInicial=Value},v2z:function(Value){gx.O.ZV15ContaContabilInicial=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILINICIAL",gx.O.AV15ContaContabilInicial,0)},c2v:function(){gx.O.AV15ContaContabilInicial=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILINICIAL")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"IMAGE1",grid:0};
   GXValidFnc[40]={fld:"A", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILFINAL",gxz:"ZV16ContaContabilFinal",gxold:"OV16ContaContabilFinal",gxvar:"AV16ContaContabilFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ContaContabilFinal=Value},v2z:function(Value){gx.O.ZV16ContaContabilFinal=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILFINAL",gx.O.AV16ContaContabilFinal,0)},c2v:function(){gx.O.AV16ContaContabilFinal=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILFINAL")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"IMAGE2",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTORINI",gxz:"ZV21ContaContabilTradutorIni",gxold:"OV21ContaContabilTradutorIni",gxvar:"AV21ContaContabilTradutorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ContaContabilTradutorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21ContaContabilTradutorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTORINI",gx.O.AV21ContaContabilTradutorIni,0)},c2v:function(){gx.O.AV21ContaContabilTradutorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTORINI",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTORFIN",gxz:"ZV25ContaContabilTradutorFin",gxold:"OV25ContaContabilTradutorFin",gxvar:"AV25ContaContabilTradutorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ContaContabilTradutorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25ContaContabilTradutorFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTORFIN",gx.O.AV25ContaContabilTradutorFin,0)},c2v:function(){gx.O.AV25ContaContabilTradutorFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV30ChamaOnBlurMascara",gxold:"OV30ChamaOnBlurMascara",gxvar:"AV30ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV30ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV30ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV30ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"JS", format:2,grid:0};
   GXValidFnc[63]={fld:"BTNHELP",grid:0};
   this.AV20Mes = 0 ;
   this.ZV20Mes = 0 ;
   this.OV20Mes = 0 ;
   this.AV22Ano = 0 ;
   this.ZV22Ano = 0 ;
   this.OV22Ano = 0 ;
   this.AV15ContaContabilInicial = "" ;
   this.ZV15ContaContabilInicial = "" ;
   this.OV15ContaContabilInicial = "" ;
   this.AV16ContaContabilFinal = "" ;
   this.ZV16ContaContabilFinal = "" ;
   this.OV16ContaContabilFinal = "" ;
   this.AV21ContaContabilTradutorIni = 0 ;
   this.ZV21ContaContabilTradutorIni = 0 ;
   this.OV21ContaContabilTradutorIni = 0 ;
   this.AV25ContaContabilTradutorFin = 0 ;
   this.ZV25ContaContabilTradutorFin = 0 ;
   this.OV25ContaContabilTradutorFin = 0 ;
   this.AV30ChamaOnBlurMascara = "" ;
   this.ZV30ChamaOnBlurMascara = "" ;
   this.OV30ChamaOnBlurMascara = "" ;
   this.AV20Mes = 0 ;
   this.AV22Ano = 0 ;
   this.AV15ContaContabilInicial = "" ;
   this.AV16ContaContabilFinal = "" ;
   this.AV21ContaContabilTradutorIni = 0 ;
   this.AV25ContaContabilTradutorFin = 0 ;
   this.AV30ChamaOnBlurMascara = "" ;
   this.Events = {"e110s2_client": ["'FECHAR'", true] ,"e130s2_client": ["ENTER", true] ,"e150s2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20Mes',fld:'vMES'},{av:'AV22Ano',fld:'vANO'},{av:'AV15ContaContabilInicial',fld:'vCONTACONTABILINICIAL'},{av:'AV16ContaContabilFinal',fld:'vCONTACONTABILFINAL'},{av:'AV61Pgmname',fld:'vPGMNAME'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV35QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV62Pgmdesc',fld:'vPGMDESC'}],[{av:'AV28ConsisteData',fld:'vCONSISTEDATA'},{av:'AV26DataStr',fld:'vDATASTR'},{av:'AV27Data',fld:'vDATA'},{av:'AV29ErroData',fld:'vERRODATA'},{av:'AV13NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV35QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV16ContaContabilFinal',fld:'vCONTACONTABILFINAL'},{av:'AV15ContaContabilInicial',fld:'vCONTACONTABILINICIAL'},{av:'AV22Ano',fld:'vANO'},{av:'AV20Mes',fld:'vMES'},{av:'AV11OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}]];
   this.setPrompt("IMAGE1", [37,46]);
   this.setPrompt("IMAGE2", [42,49]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsistecontacaixa());
