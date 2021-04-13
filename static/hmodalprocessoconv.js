/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:2:17.50
*/
gx.evt.autoSkip = false;
gx.define('hmodalprocessoconv', false, function () {
   this.ServerClass =  "hmodalprocessoconv" ;
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
   };
   this.e12p62_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13p62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15p62_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,14,17,20];
   this.GXLastCtrlId =20;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPREL",gxz:"ZV13TpRel",gxold:"OV13TpRel",gxvar:"AV13TpRel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13TpRel=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13TpRel=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vTPREL",gx.O.AV13TpRel)},c2v:function(){gx.O.AV13TpRel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPREL",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TABLE6",grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTAS",gxz:"ZV16Notas",gxold:"OV16Notas",gxvar:"AV16Notas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16Notas=Value},v2z:function(Value){gx.O.ZV16Notas=Value},v2c:function(){gx.fn.setCheckBoxValue("vNOTAS",gx.O.AV16Notas,"S")},c2v:function(){gx.O.AV16Notas=this.val()},val:function(){return gx.fn.getControlValue("vNOTAS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAUTORIZACOES",gxz:"ZV15Autorizacoes",gxold:"OV15Autorizacoes",gxvar:"AV15Autorizacoes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15Autorizacoes=Value},v2z:function(Value){gx.O.ZV15Autorizacoes=Value},v2c:function(){gx.fn.setCheckBoxValue("vAUTORIZACOES",gx.O.AV15Autorizacoes,"S")},c2v:function(){gx.O.AV15Autorizacoes=this.val()},val:function(){return gx.fn.getControlValue("vAUTORIZACOES")},nac:gx.falseFn,values:['S','N']};
   this.AV13TpRel = 0 ;
   this.ZV13TpRel = 0 ;
   this.OV13TpRel = 0 ;
   this.AV16Notas = "" ;
   this.ZV16Notas = "" ;
   this.OV16Notas = "" ;
   this.AV15Autorizacoes = "" ;
   this.ZV15Autorizacoes = "" ;
   this.OV15Autorizacoes = "" ;
   this.AV13TpRel = 0 ;
   this.AV16Notas = "" ;
   this.AV15Autorizacoes = "" ;
   this.Events = {"e12p62_client": ["ENTER", true] ,"e13p62_client": ["'FECHAR'", true] ,"e15p62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV13TpRel',fld:'vTPREL'},{av:'AV14OrderedBy',fld:'vORDEREDBY'},{av:'AV19OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV16Notas',fld:'vNOTAS'},{av:'AV15Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV25ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV26ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV27Dtini',fld:'vDTINI'},{av:'AV28Dtfim',fld:'vDTFIM'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV30ConvenioId',fld:'vCONVENIOID'}],[{av:'AV18NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV17NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV31QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30ConvenioId',fld:'vCONVENIOID'},{av:'AV29ProcessoConvSituacao',fld:'vPROCESSOCONVSITUACAO'},{av:'AV28Dtfim',fld:'vDTFIM'},{av:'AV27Dtini',fld:'vDTINI'},{av:'AV26ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV25ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV15Autorizacoes',fld:'vAUTORIZACOES'},{av:'AV16Notas',fld:'vNOTAS'},{av:'AV19OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV32Orientacao',fld:'vORIENTACAO'},{av:'AV24filtros',fld:'vFILTROS'},{av:'AV14OrderedBy',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV13TpRel',fld:'vTPREL'},{av:'AV22Imprimir',fld:'vIMPRIMIR'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalprocessoconv());
