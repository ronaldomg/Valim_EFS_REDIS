/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:40:6.78
*/
gx.evt.autoSkip = false;
gx.define('hmodalregistraconvidado', false, function () {
   this.ServerClass =  "hmodalregistraconvidado" ;
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
      this.AV27ConvidadoId=gx.fn.getIntegerValue("vCONVIDADOID",'.') ;
   };
   this.e12hq2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13hq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15hq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,11,13,16,18,21,23,24];
   this.GXLastCtrlId =24;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVIDADONOME",gxz:"ZV20ConvidadoNome",gxold:"OV20ConvidadoNome",gxvar:"AV20ConvidadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ConvidadoNome=Value},v2z:function(Value){gx.O.ZV20ConvidadoNome=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADONOME",gx.O.AV20ConvidadoNome,0)},c2v:function(){gx.O.AV20ConvidadoNome=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADONOME")},nac:gx.falseFn};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVIDADOCPF",gxz:"ZV21ConvidadoCPF",gxold:"OV21ConvidadoCPF",gxvar:"AV21ConvidadoCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ConvidadoCPF=Value},v2z:function(Value){gx.O.ZV21ConvidadoCPF=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADOCPF",gx.O.AV21ConvidadoCPF,0)},c2v:function(){gx.O.AV21ConvidadoCPF=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADOCPF")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVIDADORG",gxz:"ZV22ConvidadoRG",gxold:"OV22ConvidadoRG",gxvar:"AV22ConvidadoRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ConvidadoRG=Value},v2z:function(Value){gx.O.ZV22ConvidadoRG=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADORG",gx.O.AV22ConvidadoRG,0)},c2v:function(){gx.O.AV22ConvidadoRG=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADORG")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVIDADODATANASCIMENTO",gxz:"ZV23ConvidadoDataNascimento",gxold:"OV23ConvidadoDataNascimento",gxvar:"AV23ConvidadoDataNascimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ConvidadoDataNascimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23ConvidadoDataNascimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONVIDADODATANASCIMENTO",gx.O.AV23ConvidadoDataNascimento,0)},c2v:function(){gx.O.AV23ConvidadoDataNascimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONVIDADODATANASCIMENTO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"JS", format:2,grid:0};
   this.AV20ConvidadoNome = "" ;
   this.ZV20ConvidadoNome = "" ;
   this.OV20ConvidadoNome = "" ;
   this.AV21ConvidadoCPF = "" ;
   this.ZV21ConvidadoCPF = "" ;
   this.OV21ConvidadoCPF = "" ;
   this.AV22ConvidadoRG = "" ;
   this.ZV22ConvidadoRG = "" ;
   this.OV22ConvidadoRG = "" ;
   this.AV23ConvidadoDataNascimento = gx.date.nullDate() ;
   this.ZV23ConvidadoDataNascimento = gx.date.nullDate() ;
   this.OV23ConvidadoDataNascimento = gx.date.nullDate() ;
   this.AV20ConvidadoNome = "" ;
   this.AV21ConvidadoCPF = "" ;
   this.AV22ConvidadoRG = "" ;
   this.AV23ConvidadoDataNascimento = gx.date.nullDate() ;
   this.AV27ConvidadoId = 0 ;
   this.Events = {"e12hq2_client": ["ENTER", true] ,"e13hq2_client": ["'FECHAR'", true] ,"e15hq2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV21ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV24ConvidadoEmpresaId',fld:'vCONVIDADOEMPRESAID'},{av:'AV31EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV23ConvidadoDataNascimento',fld:'vCONVIDADODATANASCIMENTO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV22ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV30SnOk',fld:'vSNOK'}],[{av:'AV25tpErro',fld:'vTPERRO'},{av:'AV26SNCPFRepetido',fld:'vSNCPFREPETIDO'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV30SnOk',fld:'vSNOK'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV30SnOk',fld:'vSNOK'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'}],[{av:'AV30SnOk',fld:'vSNOK'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV27ConvidadoId", "vCONVIDADOID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalregistraconvidado());
