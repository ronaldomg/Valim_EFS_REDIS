/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:11.43
*/
gx.evt.autoSkip = false;
gx.define('hmodaltxttela', false, function () {
   this.ServerClass =  "hmodaltxttela" ;
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
      this.AV16EmpresaLogada=gx.fn.getControlValue("vEMPRESALOGADA") ;
      this.AV15OpcaoTela=gx.fn.getControlValue("vOPCAOTELA") ;
      this.AV19NomeTela=gx.fn.getControlValue("vNOMETELA") ;
   };
   this.e11wh2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12wh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15wh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,14];
   this.GXLastCtrlId =14;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEARQUIVO",gxz:"ZV11NomeArquivo",gxold:"OV11NomeArquivo",gxvar:"AV11NomeArquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11NomeArquivo=Value},v2z:function(Value){gx.O.ZV11NomeArquivo=Value},v2c:function(){gx.fn.setControlValue("vNOMEARQUIVO",gx.O.AV11NomeArquivo,0)},c2v:function(){gx.O.AV11NomeArquivo=this.val()},val:function(){return gx.fn.getControlValue("vNOMEARQUIVO")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPADRAO",gxz:"ZV12SNPadrao",gxold:"OV12SNPadrao",gxvar:"AV12SNPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV12SNPadrao=Value},v2z:function(Value){gx.O.ZV12SNPadrao=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNPADRAO",gx.O.AV12SNPadrao,"S")},c2v:function(){gx.O.AV12SNPadrao=this.val()},val:function(){return gx.fn.getControlValue("vSNPADRAO")},nac:gx.falseFn,values:['S','N']};
   this.AV11NomeArquivo = "" ;
   this.ZV11NomeArquivo = "" ;
   this.OV11NomeArquivo = "" ;
   this.AV12SNPadrao = "" ;
   this.ZV12SNPadrao = "" ;
   this.OV12SNPadrao = "" ;
   this.AV11NomeArquivo = "" ;
   this.AV12SNPadrao = "" ;
   this.AV16EmpresaLogada = "" ;
   this.AV15OpcaoTela = "" ;
   this.AV19NomeTela = "" ;
   this.Events = {"e11wh2_client": ["ENTER", true] ,"e12wh2_client": ["'FECHAR'", true] ,"e15wh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV16EmpresaLogada',fld:'vEMPRESALOGADA',hsh:true},{av:'AV19NomeTela',fld:'vNOMETELA',hsh:true},{av:'AV12SNPadrao',fld:'vSNPADRAO'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV11NomeArquivo',fld:'vNOMEARQUIVO'}],[{av:'AV11NomeArquivo',fld:'vNOMEARQUIVO'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV16EmpresaLogada", "vEMPRESALOGADA", 0, "char");
   this.setVCMap("AV15OpcaoTela", "vOPCAOTELA", 0, "svchar");
   this.setVCMap("AV19NomeTela", "vNOMETELA", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaltxttela());
