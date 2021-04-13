/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:43:44.49
*/
gx.evt.autoSkip = false;
gx.define('himportabartermica', false, function () {
   this.ServerClass =  "himportabartermica" ;
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
      this.AV14EtiquetaTermicaModelo=gx.fn.getIntegerValue("vETIQUETATERMICAMODELO",'.') ;
      this.AV15EmpresaId=gx.fn.getControlValue("vEMPRESAID") ;
      this.AV16EtiquetaTermicaLinguagem=gx.fn.getControlValue("vETIQUETATERMICALINGUAGEM") ;
      this.AV20EtiquetaTermicaNoColunas=gx.fn.getIntegerValue("vETIQUETATERMICANOCOLUNAS",'.') ;
   };
   this.e121352_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131352_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e141352_client=function()
   {
      this.executeServerEvent("'DIALOG'", false, null, false, false);
   };
   this.e171352_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,10];
   this.GXLastCtrlId =10;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV9Diretorio",gxold:"OV9Diretorio",gxvar:"AV9Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9Diretorio=Value},v2z:function(Value){gx.O.ZV9Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV9Diretorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 10 , function() {
   });
   this.AV9Diretorio = "" ;
   this.ZV9Diretorio = "" ;
   this.OV9Diretorio = "" ;
   this.AV9Diretorio = "" ;
   this.AV14EtiquetaTermicaModelo = 0 ;
   this.AV15EmpresaId = "" ;
   this.AV16EtiquetaTermicaLinguagem = "" ;
   this.AV20EtiquetaTermicaNoColunas = 0 ;
   this.Events = {"e121352_client": ["ENTER", true] ,"e131352_client": ["'CANCELAR'", true] ,"e141352_client": ["'DIALOG'", true] ,"e171352_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV9Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV12SNArquivoValido',fld:'vSNARQUIVOVALIDO'},{av:'AV9Diretorio',fld:'vDIRETORIO'},{av:'AV10Linha',fld:'vLINHA'},{av:'AV18TipoDados',fld:'vTIPODADOS'},{av:'AV21SdtImportaBarTermica',fld:'vSDTIMPORTABARTERMICA'},{av:'AV15EmpresaId',fld:'vEMPRESAID'},{av:'AV14EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV16EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV20EtiquetaTermicaNoColunas',fld:'vETIQUETATERMICANOCOLUNAS'}],[{av:'AV8i',fld:'vI'},{av:'AV12SNArquivoValido',fld:'vSNARQUIVOVALIDO'},{av:'AV11a',fld:'vA'},{av:'AV13v',fld:'vV'},{av:'AV24SNSair',fld:'vSNSAIR'},{av:'AV25contLinha',fld:'vCONTLINHA'},{av:'AV23contBloco',fld:'vCONTBLOCO'},{av:'AV18TipoDados',fld:'vTIPODADOS'},{av:'AV10Linha',fld:'vLINHA'},{av:'AV17Split',fld:'vSPLIT'},{av:'AV22SdtImportaBarTermicaItem',fld:'vSDTIMPORTABARTERMICAITEM'},{av:'AV21SdtImportaBarTermica',fld:'vSDTIMPORTABARTERMICA'},{av:'AV20EtiquetaTermicaNoColunas',fld:'vETIQUETATERMICANOCOLUNAS'},{av:'AV16EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV14EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'AV15EmpresaId',fld:'vEMPRESAID'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV20EtiquetaTermicaNoColunas',fld:'vETIQUETATERMICANOCOLUNAS'},{av:'AV16EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM'},{av:'AV15EmpresaId',fld:'vEMPRESAID'},{av:'AV14EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'}],[]];
   this.EvtParms["'DIALOG'"] = [[],[{av:'AV27isCloud',fld:'vISCLOUD'},{av:'AV26DirUpload',fld:'vDIRUPLOAD'},{av:'AV9Diretorio',fld:'vDIRETORIO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14EtiquetaTermicaModelo", "vETIQUETATERMICAMODELO", 0, "int");
   this.setVCMap("AV15EmpresaId", "vEMPRESAID", 0, "char");
   this.setVCMap("AV16EtiquetaTermicaLinguagem", "vETIQUETATERMICALINGUAGEM", 0, "char");
   this.setVCMap("AV20EtiquetaTermicaNoColunas", "vETIQUETATERMICANOCOLUNAS", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportabartermica());
