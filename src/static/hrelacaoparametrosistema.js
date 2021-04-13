/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:0.15
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoparametrosistema', false, function () {
   this.ServerClass =  "hrelacaoparametrosistema" ;
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
   this.e11kv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13kv2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15kv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,21,23,32,34,36];
   this.GXLastCtrlId =36;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSISTEMAID",gxz:"ZV20SistemaId",gxold:"OV20SistemaId",gxvar:"AV20SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SistemaId=Value},v2z:function(Value){gx.O.ZV20SistemaId=Value},v2c:function(){gx.fn.setControlValue("vSISTEMAID",gx.O.AV20SistemaId,0)},c2v:function(){gx.O.AV20SistemaId=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSISTEMANOME",gxz:"ZV21SistemaNome",gxold:"OV21SistemaNome",gxvar:"AV21SistemaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21SistemaNome=Value},v2z:function(Value){gx.O.ZV21SistemaNome=Value},v2c:function(){gx.fn.setControlValue("vSISTEMANOME",gx.O.AV21SistemaNome,0)},c2v:function(){gx.O.AV21SistemaNome=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMANOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAID",gxz:"ZV22EmpresaId",gxold:"OV22EmpresaId",gxvar:"AV22EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV22EmpresaId=Value},v2z:function(Value){gx.O.ZV22EmpresaId=Value},v2c:function(){gx.fn.setComboBoxValue("vEMPRESAID",gx.O.AV22EmpresaId)},c2v:function(){gx.O.AV22EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"JS", format:2,grid:0};
   GXValidFnc[34]={fld:"BTNHELP",grid:0};
   GXValidFnc[36]={fld:"PROMPT_SISTEMAID",grid:0};
   this.AV20SistemaId = "" ;
   this.ZV20SistemaId = "" ;
   this.OV20SistemaId = "" ;
   this.AV21SistemaNome = "" ;
   this.ZV21SistemaNome = "" ;
   this.OV21SistemaNome = "" ;
   this.AV22EmpresaId = "" ;
   this.ZV22EmpresaId = "" ;
   this.OV22EmpresaId = "" ;
   this.AV20SistemaId = "" ;
   this.AV21SistemaNome = "" ;
   this.AV22EmpresaId = "" ;
   this.Events = {"e11kv2_client": ["'FECHAR'", true] ,"e13kv2_client": ["ENTER", true] ,"e15kv2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20SistemaId',fld:'vSISTEMAID'},{av:'AV28Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29Pgmdesc',fld:'vPGMDESC'}],[{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20SistemaId',fld:'vSISTEMAID'}]];
   this.setPrompt("PROMPT_SISTEMAID", [17]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoparametrosistema());
