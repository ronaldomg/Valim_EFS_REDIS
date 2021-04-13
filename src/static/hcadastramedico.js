/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:38:32.89
*/
gx.evt.autoSkip = false;
gx.define('hcadastramedico', false, function () {
   this.ServerClass =  "hcadastramedico" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV20MedicoId=gx.fn.getIntegerValue("vMEDICOID",'.') ;
   };
   this.e122582_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132582_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152582_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,32];
   this.GXLastCtrlId =32;
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMEDICONOME",gxz:"ZV16MedicoNome",gxold:"OV16MedicoNome",gxvar:"AV16MedicoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16MedicoNome=Value},v2z:function(Value){gx.O.ZV16MedicoNome=Value},v2c:function(){gx.fn.setControlValue("vMEDICONOME",gx.O.AV16MedicoNome,0)},c2v:function(){gx.O.AV16MedicoNome=this.val()},val:function(){return gx.fn.getControlValue("vMEDICONOME")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMEDICOCRM",gxz:"ZV17MedicoCRM",gxold:"OV17MedicoCRM",gxvar:"AV17MedicoCRM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17MedicoCRM=Value},v2z:function(Value){gx.O.ZV17MedicoCRM=Value},v2c:function(){gx.fn.setControlValue("vMEDICOCRM",gx.O.AV17MedicoCRM,0)},c2v:function(){gx.O.AV17MedicoCRM=this.val()},val:function(){return gx.fn.getControlValue("vMEDICOCRM")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMEDICOCPF",gxz:"ZV18MedicoCPF",gxold:"OV18MedicoCPF",gxvar:"AV18MedicoCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18MedicoCPF=Value},v2z:function(Value){gx.O.ZV18MedicoCPF=Value},v2c:function(){gx.fn.setControlValue("vMEDICOCPF",gx.O.AV18MedicoCPF,0)},c2v:function(){gx.O.AV18MedicoCPF=this.val()},val:function(){return gx.fn.getControlValue("vMEDICOCPF")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"JS", format:2,grid:0};
   this.AV16MedicoNome = "" ;
   this.ZV16MedicoNome = "" ;
   this.OV16MedicoNome = "" ;
   this.AV17MedicoCRM = "" ;
   this.ZV17MedicoCRM = "" ;
   this.OV17MedicoCRM = "" ;
   this.AV18MedicoCPF = "" ;
   this.ZV18MedicoCPF = "" ;
   this.OV18MedicoCPF = "" ;
   this.AV16MedicoNome = "" ;
   this.AV17MedicoCRM = "" ;
   this.AV18MedicoCPF = "" ;
   this.AV20MedicoId = 0 ;
   this.Events = {"e122582_client": ["'FECHAR'", true] ,"e132582_client": ["ENTER", true] ,"e152582_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20MedicoId',fld:'vMEDICOID'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16MedicoNome',fld:'vMEDICONOME'},{av:'AV17MedicoCRM',fld:'vMEDICOCRM'},{av:'AV18MedicoCPF',fld:'vMEDICOCPF'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19SNErro',fld:'vSNERRO'}],[{av:'AV19SNErro',fld:'vSNERRO'},{av:'AV20MedicoId',fld:'vMEDICOID'},{av:'AV6EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18MedicoCPF',fld:'vMEDICOCPF'},{av:'AV17MedicoCRM',fld:'vMEDICOCRM'},{av:'AV16MedicoNome',fld:'vMEDICONOME'},{av:'AV21ErroCRM',fld:'vERROCRM'}]];
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.setVCMap("AV20MedicoId", "vMEDICOID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastramedico());
