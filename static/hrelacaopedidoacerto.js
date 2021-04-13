/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:11:3.54
*/
gx.evt.autoSkip = false;
gx.define('hrelacaopedidoacerto', false, function () {
   this.ServerClass =  "hrelacaopedidoacerto" ;
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
      this.AV30PessoaEmpresaId=gx.fn.getControlValue("vPESSOAEMPRESAID") ;
   };
   this.e111052_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131052_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151052_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,25,28,30,33,35,37,40,42,45,47,49,52,54,58,67,69];
   this.GXLastCtrlId =69;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE9",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV21TipoRelatorio",gxold:"OV21TipoRelatorio",gxvar:"AV21TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21TipoRelatorio=Value},v2z:function(Value){gx.O.ZV21TipoRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV21TipoRelatorio)},c2v:function(){gx.O.AV21TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLERDATA",grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOACEDATAINI",gxz:"ZV23PedidoAceDataIni",gxold:"OV23PedidoAceDataIni",gxvar:"AV23PedidoAceDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PedidoAceDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23PedidoAceDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOACEDATAINI",gx.O.AV23PedidoAceDataIni,0)},c2v:function(){gx.O.AV23PedidoAceDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOACEDATAINI")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOACEDATAFIN",gxz:"ZV27PedidoAceDataFin",gxold:"OV27PedidoAceDataFin",gxvar:"AV27PedidoAceDataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PedidoAceDataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27PedidoAceDataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOACEDATAFIN",gx.O.AV27PedidoAceDataFin,0)},c2v:function(){gx.O.AV27PedidoAceDataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOACEDATAFIN")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLERNRO",grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOACEIDINI",gxz:"ZV24PedidoAceIdIni",gxold:"OV24PedidoAceIdIni",gxvar:"AV24PedidoAceIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PedidoAceIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PedidoAceIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOACEIDINI",gx.O.AV24PedidoAceIdIni,0)},c2v:function(){gx.O.AV24PedidoAceIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOACEIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOACEIDFIN",gxz:"ZV25PedidoAceIdFin",gxold:"OV25PedidoAceIdFin",gxvar:"AV25PedidoAceIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PedidoAceIdFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PedidoAceIdFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOACEIDFIN",gx.O.AV25PedidoAceIdFin,0)},c2v:function(){gx.O.AV25PedidoAceIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOACEIDFIN",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOACECLIENTEID",gxz:"ZV29PedidoAceClienteId",gxold:"OV29PedidoAceClienteId",gxvar:"AV29PedidoAceClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV29PedidoAceClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29PedidoAceClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPEDIDOACECLIENTEID",gx.O.AV29PedidoAceClienteId)},c2v:function(){gx.O.AV29PedidoAceClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOACECLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPENASDESPESAS",gxz:"ZV28ApenasDespesas",gxold:"OV28ApenasDespesas",gxvar:"AV28ApenasDespesas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV28ApenasDespesas=Value},v2z:function(Value){gx.O.ZV28ApenasDespesas=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPENASDESPESAS",gx.O.AV28ApenasDespesas,"S")},c2v:function(){gx.O.AV28ApenasDespesas=this.val()},val:function(){return gx.fn.getControlValue("vAPENASDESPESAS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[67]={fld:"JS", format:2,grid:0};
   GXValidFnc[69]={fld:"BTNHELP",grid:0};
   this.AV21TipoRelatorio = "" ;
   this.ZV21TipoRelatorio = "" ;
   this.OV21TipoRelatorio = "" ;
   this.AV23PedidoAceDataIni = gx.date.nullDate() ;
   this.ZV23PedidoAceDataIni = gx.date.nullDate() ;
   this.OV23PedidoAceDataIni = gx.date.nullDate() ;
   this.AV27PedidoAceDataFin = gx.date.nullDate() ;
   this.ZV27PedidoAceDataFin = gx.date.nullDate() ;
   this.OV27PedidoAceDataFin = gx.date.nullDate() ;
   this.AV24PedidoAceIdIni = 0 ;
   this.ZV24PedidoAceIdIni = 0 ;
   this.OV24PedidoAceIdIni = 0 ;
   this.AV25PedidoAceIdFin = 0 ;
   this.ZV25PedidoAceIdFin = 0 ;
   this.OV25PedidoAceIdFin = 0 ;
   this.AV29PedidoAceClienteId = 0 ;
   this.ZV29PedidoAceClienteId = 0 ;
   this.OV29PedidoAceClienteId = 0 ;
   this.AV28ApenasDespesas = "" ;
   this.ZV28ApenasDespesas = "" ;
   this.OV28ApenasDespesas = "" ;
   this.AV21TipoRelatorio = "" ;
   this.AV23PedidoAceDataIni = gx.date.nullDate() ;
   this.AV27PedidoAceDataFin = gx.date.nullDate() ;
   this.AV24PedidoAceIdIni = 0 ;
   this.AV25PedidoAceIdFin = 0 ;
   this.AV29PedidoAceClienteId = 0 ;
   this.AV28ApenasDespesas = "" ;
   this.Events = {"e111052_client": ["'FECHAR'", true] ,"e131052_client": ["ENTER", true] ,"e151052_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV23PedidoAceDataIni',fld:'vPEDIDOACEDATAINI'},{av:'AV27PedidoAceDataFin',fld:'vPEDIDOACEDATAFIN'},{av:'AV24PedidoAceIdIni',fld:'vPEDIDOACEIDINI'},{av:'AV25PedidoAceIdFin',fld:'vPEDIDOACEIDFIN'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV28ApenasDespesas',fld:'vAPENASDESPESAS'},{av:'AV29PedidoAceClienteId',fld:'vPEDIDOACECLIENTEID'}],[{av:'AV22SnErro',fld:'vSNERRO'},{av:'AV25PedidoAceIdFin',fld:'vPEDIDOACEIDFIN'},{av:'AV23PedidoAceDataIni',fld:'vPEDIDOACEDATAINI'},{av:'AV24PedidoAceIdIni',fld:'vPEDIDOACEIDINI'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV28ApenasDespesas',fld:'vAPENASDESPESAS'},{av:'AV29PedidoAceClienteId',fld:'vPEDIDOACECLIENTEID'},{av:'AV27PedidoAceDataFin',fld:'vPEDIDOACEDATAFIN'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV32Orientacao',fld:'vORIENTACAO'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV30PessoaEmpresaId", "vPESSOAEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaopedidoacerto());
