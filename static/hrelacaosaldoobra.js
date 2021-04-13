/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:12.55
*/
gx.evt.autoSkip = false;
gx.define('hrelacaosaldoobra', false, function () {
   this.ServerClass =  "hrelacaosaldoobra" ;
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
   this.e112732_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132732_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152732_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,23,26,28,30,31,33,35,38,40,42,43,45,48,50,53,55,57,61,63,66,68,70,75,89,91];
   this.GXLastCtrlId =91;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={fld:"TABLE3",grid:0};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINIPROCESSO",gxz:"ZV6AnoIniProcesso",gxold:"OV6AnoIniProcesso",gxvar:"AV6AnoIniProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6AnoIniProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6AnoIniProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOINIPROCESSO",gx.O.AV6AnoIniProcesso,0)},c2v:function(){gx.O.AV6AnoIniProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOINIPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMINIPROCESSO",gxz:"ZV20NumIniProcesso",gxold:"OV20NumIniProcesso",gxvar:"AV20NumIniProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20NumIniProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20NumIniProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMINIPROCESSO",gx.O.AV20NumIniProcesso,0)},c2v:function(){gx.O.AV20NumIniProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMINIPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"PROMPTPROCESSOINI",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[35]={fld:"TABLE6",grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFINPROCESSO",gxz:"ZV5AnoFinProcesso",gxold:"OV5AnoFinProcesso",gxvar:"AV5AnoFinProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AnoFinProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AnoFinProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOFINPROCESSO",gx.O.AV5AnoFinProcesso,0)},c2v:function(){gx.O.AV5AnoFinProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOFINPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMFINPROCESSO",gxz:"ZV19NumFinProcesso",gxold:"OV19NumFinProcesso",gxvar:"AV19NumFinProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19NumFinProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19NumFinProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMFINPROCESSO",gx.O.AV19NumFinProcesso,0)},c2v:function(){gx.O.AV19NumFinProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMFINPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"PROMPTPROCESSOFIN",grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGERARCSV",gxz:"ZV29SnGerarCSV",gxold:"OV29SnGerarCSV",gxvar:"AV29SnGerarCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV29SnGerarCSV=Value},v2z:function(Value){gx.O.ZV29SnGerarCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNGERARCSV",gx.O.AV29SnGerarCSV,"S")},c2v:function(){gx.O.AV29SnGerarCSV=this.val()},val:function(){return gx.fn.getControlValue("vSNGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[48]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[50]={fld:"TABLERPERIODO",grid:0};
   GXValidFnc[53]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINIINICIO",gxz:"ZV9DtIniInicio",gxold:"OV9DtIniInicio",gxvar:"AV9DtIniInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9DtIniInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9DtIniInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINIINICIO",gx.O.AV9DtIniInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9DtIniInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINIINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[55]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFININICIO",gxz:"ZV7DtFinInicio",gxold:"OV7DtFinInicio",gxvar:"AV7DtFinInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DtFinInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7DtFinInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFININICIO",gx.O.AV7DtFinInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7DtFinInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFININICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[61]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[63]={fld:"TABLERPERIODO2",grid:0};
   GXValidFnc[66]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINIVALIDADE",gxz:"ZV10DtIniValidade",gxold:"OV10DtIniValidade",gxvar:"AV10DtIniValidade",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10DtIniValidade=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10DtIniValidade=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINIVALIDADE",gx.O.AV10DtIniValidade,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10DtIniValidade=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINIVALIDADE")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFINVALIDADE",gxz:"ZV8DtFinValidade",gxold:"OV8DtFinValidade",gxvar:"AV8DtFinValidade",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8DtFinValidade=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8DtFinValidade=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFINVALIDADE",gx.O.AV8DtFinValidade,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8DtFinValidade=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFINVALIDADE")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[75]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPROCESSOABERTO",gxz:"ZV25SnProcessoAberto",gxold:"OV25SnProcessoAberto",gxvar:"AV25SnProcessoAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25SnProcessoAberto=Value},v2z:function(Value){gx.O.ZV25SnProcessoAberto=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNPROCESSOABERTO",gx.O.AV25SnProcessoAberto,"S")},c2v:function(){gx.O.AV25SnProcessoAberto=this.val()},val:function(){return gx.fn.getControlValue("vSNPROCESSOABERTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[89]={fld:"JS", format:2,grid:0};
   GXValidFnc[91]={fld:"BTNHELP",grid:0};
   this.AV6AnoIniProcesso = 0 ;
   this.ZV6AnoIniProcesso = 0 ;
   this.OV6AnoIniProcesso = 0 ;
   this.AV20NumIniProcesso = 0 ;
   this.ZV20NumIniProcesso = 0 ;
   this.OV20NumIniProcesso = 0 ;
   this.AV5AnoFinProcesso = 0 ;
   this.ZV5AnoFinProcesso = 0 ;
   this.OV5AnoFinProcesso = 0 ;
   this.AV19NumFinProcesso = 0 ;
   this.ZV19NumFinProcesso = 0 ;
   this.OV19NumFinProcesso = 0 ;
   this.AV29SnGerarCSV = "" ;
   this.ZV29SnGerarCSV = "" ;
   this.OV29SnGerarCSV = "" ;
   this.AV9DtIniInicio = gx.date.nullDate() ;
   this.ZV9DtIniInicio = gx.date.nullDate() ;
   this.OV9DtIniInicio = gx.date.nullDate() ;
   this.AV7DtFinInicio = gx.date.nullDate() ;
   this.ZV7DtFinInicio = gx.date.nullDate() ;
   this.OV7DtFinInicio = gx.date.nullDate() ;
   this.AV10DtIniValidade = gx.date.nullDate() ;
   this.ZV10DtIniValidade = gx.date.nullDate() ;
   this.OV10DtIniValidade = gx.date.nullDate() ;
   this.AV8DtFinValidade = gx.date.nullDate() ;
   this.ZV8DtFinValidade = gx.date.nullDate() ;
   this.OV8DtFinValidade = gx.date.nullDate() ;
   this.AV25SnProcessoAberto = "" ;
   this.ZV25SnProcessoAberto = "" ;
   this.OV25SnProcessoAberto = "" ;
   this.AV6AnoIniProcesso = 0 ;
   this.AV20NumIniProcesso = 0 ;
   this.AV5AnoFinProcesso = 0 ;
   this.AV19NumFinProcesso = 0 ;
   this.AV29SnGerarCSV = "" ;
   this.AV9DtIniInicio = gx.date.nullDate() ;
   this.AV7DtFinInicio = gx.date.nullDate() ;
   this.AV10DtIniValidade = gx.date.nullDate() ;
   this.AV8DtFinValidade = gx.date.nullDate() ;
   this.AV25SnProcessoAberto = "" ;
   this.Events = {"e112732_client": ["'FECHAR'", true] ,"e132732_client": ["ENTER", true] ,"e152732_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV6AnoIniProcesso',fld:'vANOINIPROCESSO'},{av:'AV5AnoFinProcesso',fld:'vANOFINPROCESSO'},{av:'AV20NumIniProcesso',fld:'vNUMINIPROCESSO'},{av:'AV19NumFinProcesso',fld:'vNUMFINPROCESSO'},{av:'AV9DtIniInicio',fld:'vDTINIINICIO'},{av:'AV7DtFinInicio',fld:'vDTFININICIO'},{av:'AV10DtIniValidade',fld:'vDTINIVALIDADE'},{av:'AV8DtFinValidade',fld:'vDTFINVALIDADE'},{av:'AV25SnProcessoAberto',fld:'vSNPROCESSOABERTO'},{av:'AV29SnGerarCSV',fld:'vSNGERARCSV'},{av:'AV33Pgmdesc',fld:'vPGMDESC'}],[{av:'AV18NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV17NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV27tpErro',fld:'vTPERRO'},{av:'AV7DtFinInicio',fld:'vDTFININICIO'},{av:'AV8DtFinValidade',fld:'vDTFINVALIDADE'},{av:'AV23QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.setPrompt("PROMPTPROCESSOINI", [26]);
   this.setPrompt("PROMPTPROCESSOFIN", [38]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaosaldoobra());
