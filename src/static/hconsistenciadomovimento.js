/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:54:46.44
*/
gx.evt.autoSkip = false;
gx.define('hconsistenciadomovimento', false, function () {
   this.ServerClass =  "hconsistenciadomovimento" ;
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
   this.e113y2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133y2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153y2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,20,22,25,27,29,32,34,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={fld:"MESANO", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLERANGEMESANO",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV16Mes",gxold:"OV16Mes",gxvar:"AV16Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Mes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV16Mes,0)},c2v:function(){gx.O.AV16Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"BARRA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV17Ano",gxold:"OV17Ano",gxvar:"AV17Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV17Ano,0)},c2v:function(){gx.O.AV17Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIA",gxz:"ZV18Dia",gxold:"OV18Dia",gxvar:"AV18Dia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Dia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Dia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIA",gx.O.AV18Dia,0)},c2v:function(){gx.O.AV18Dia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"BTNHELP",grid:0};
   this.AV16Mes = 0 ;
   this.ZV16Mes = 0 ;
   this.OV16Mes = 0 ;
   this.AV17Ano = 0 ;
   this.ZV17Ano = 0 ;
   this.OV17Ano = 0 ;
   this.AV18Dia = 0 ;
   this.ZV18Dia = 0 ;
   this.OV18Dia = 0 ;
   this.AV16Mes = 0 ;
   this.AV17Ano = 0 ;
   this.AV18Dia = 0 ;
   this.Events = {"e113y2_client": ["'FECHAR'", true] ,"e133y2_client": ["ENTER", true] ,"e153y2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV18Dia',fld:'vDIA'},{av:'AV16Mes',fld:'vMES'},{av:'AV17Ano',fld:'vANO'},{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV10Ordenacao',fld:'vORDENACAO'},{av:'AV24QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV51Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19DataStr',fld:'vDATASTR'},{av:'AV15DataInicial',fld:'vDATAINICIAL'},{av:'AV20DataFinal',fld:'vDATAFINAL'},{av:'AV21ErroData',fld:'vERRODATA'},{av:'AV13NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV24QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsistenciadomovimento());
