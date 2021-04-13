/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:27:33.96
*/
gx.evt.autoSkip = false;
gx.define('hconsistirvalorcontas', false, function () {
   this.ServerClass =  "hconsistirvalorcontas" ;
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
   this.e11e92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13e92_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15e92_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,25,27,29,33,44,45,47];
   this.GXLastCtrlId =47;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECPAGREC",gxz:"ZV20ContaPagRecPagRec",gxold:"OV20ContaPagRecPagRec",gxvar:"AV20ContaPagRecPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20ContaPagRecPagRec=Value},v2z:function(Value){gx.O.ZV20ContaPagRecPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTAPAGRECPAGREC",gx.O.AV20ContaPagRecPagRec)},c2v:function(){gx.O.AV20ContaPagRecPagRec=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECPAGREC")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLERANGEDATAEMISSAO",grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAOINI",gxz:"ZV22ContaPagRecDtEmissaoIni",gxold:"OV22ContaPagRecDtEmissaoIni",gxvar:"AV22ContaPagRecDtEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAOINI",gx.O.AV22ContaPagRecDtEmissaoIni,0)},c2v:function(){gx.O.AV22ContaPagRecDtEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOINI")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTEMISSAOFIM",gxz:"ZV23ContaPagRecDtEmissaoFim",gxold:"OV23ContaPagRecDtEmissaoFim",gxvar:"AV23ContaPagRecDtEmissaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTEMISSAOFIM",gx.O.AV23ContaPagRecDtEmissaoFim,0)},c2v:function(){gx.O.AV23ContaPagRecDtEmissaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTEMISSAOFIM")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESPREZARDESCONTOTOTAL",gxz:"ZV21DesprezarDescontoTotal",gxold:"OV21DesprezarDescontoTotal",gxvar:"AV21DesprezarDescontoTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21DesprezarDescontoTotal=Value},v2z:function(Value){gx.O.ZV21DesprezarDescontoTotal=Value},v2c:function(){gx.fn.setCheckBoxValue("vDESPREZARDESCONTOTOTAL",gx.O.AV21DesprezarDescontoTotal,"S")},c2v:function(){gx.O.AV21DesprezarDescontoTotal=this.val()},val:function(){return gx.fn.getControlValue("vDESPREZARDESCONTOTOTAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV25AcessoSistemaSequencia",gxold:"OV25AcessoSistemaSequencia",gxvar:"AV25AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV25AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"JS", format:2,grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   this.AV20ContaPagRecPagRec = "" ;
   this.ZV20ContaPagRecPagRec = "" ;
   this.OV20ContaPagRecPagRec = "" ;
   this.AV22ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.ZV22ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.OV22ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV23ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.ZV23ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.OV23ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV21DesprezarDescontoTotal = "" ;
   this.ZV21DesprezarDescontoTotal = "" ;
   this.OV21DesprezarDescontoTotal = "" ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.ZV25AcessoSistemaSequencia = 0 ;
   this.OV25AcessoSistemaSequencia = 0 ;
   this.AV20ContaPagRecPagRec = "" ;
   this.AV22ContaPagRecDtEmissaoIni = gx.date.nullDate() ;
   this.AV23ContaPagRecDtEmissaoFim = gx.date.nullDate() ;
   this.AV21DesprezarDescontoTotal = "" ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.Events = {"e11e92_client": ["'FECHAR'", true] ,"e13e92_client": ["ENTER", true] ,"e15e92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV22ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV23ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV50Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV20ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV21DesprezarDescontoTotal',fld:'vDESPREZARDESCONTOTOTAL'},{av:'AV51Pgmdesc',fld:'vPGMDESC'}],[{av:'AV24tpErro',fld:'vTPERRO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV23ContaPagRecDtEmissaoFim',fld:'vCONTAPAGRECDTEMISSAOFIM'},{av:'AV22ContaPagRecDtEmissaoIni',fld:'vCONTAPAGRECDTEMISSAOINI'},{av:'AV21DesprezarDescontoTotal',fld:'vDESPREZARDESCONTOTOTAL'},{av:'AV20ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsistirvalorcontas());
