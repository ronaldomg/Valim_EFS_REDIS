/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:22.31
*/
gx.evt.autoSkip = false;
gx.define('hatualizadigitoagencia', false, function () {
   this.ServerClass =  "hatualizadigitoagencia" ;
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
   this.e11ij2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ij2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14ij2_client=function()
   {
      this.executeServerEvent("'BUSCARDIRETORIO'", true, null, false, false);
   };
   this.e17ij2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,25];
   this.GXLastCtrlId =25;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV20Diretorio",gxold:"OV20Diretorio",gxvar:"AV20Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Diretorio=Value},v2z:function(Value){gx.O.ZV20Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV20Diretorio,0)},c2v:function(){gx.O.AV20Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[25]={fld:"BTNHELP",grid:0};
   this.AV20Diretorio = "" ;
   this.ZV20Diretorio = "" ;
   this.OV20Diretorio = "" ;
   this.AV20Diretorio = "" ;
   this.Events = {"e11ij2_client": ["'FECHAR'", true] ,"e13ij2_client": ["ENTER", true] ,"e14ij2_client": ["'BUSCARDIRETORIO'", true] ,"e17ij2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20Diretorio',fld:'vDIRETORIO'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.EvtParms["'BUSCARDIRETORIO'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizadigitoagencia());
