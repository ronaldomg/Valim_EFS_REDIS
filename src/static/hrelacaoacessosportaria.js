/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:18:9.71
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoacessosportaria', false, function () {
   this.ServerClass =  "hrelacaoacessosportaria" ;
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
      this.AV26TitularPessoaId=gx.fn.getIntegerValue("vTITULARPESSOAID",'.') ;
      this.AV27TitularPessoaNome=gx.fn.getControlValue("vTITULARPESSOANOME") ;
      this.AV28DependenteId=gx.fn.getIntegerValue("vDEPENDENTEID",'.') ;
      this.AV29DependenteNome=gx.fn.getControlValue("vDEPENDENTENOME") ;
      this.AV30ConvidadoId=gx.fn.getIntegerValue("vCONVIDADOID",'.') ;
      this.AV31ConvidadoNome=gx.fn.getControlValue("vCONVIDADONOME") ;
      this.AV32DataAcessoIni=gx.fn.getDateValue("vDATAACESSOINI") ;
      this.AV33DataAcessoFim=gx.fn.getDateValue("vDATAACESSOFIM") ;
      this.AV34AcessoTitular=gx.fn.getControlValue("vACESSOTITULAR") ;
   };
   this.e151121_client=function()
   {
      this.clearMessages();
      if ( this.AV35TipoRelatorio == 2 )
      {
         gx.fn.setCtrlProperty("TBTOTALIZAR","Visible", 0 );
         gx.fn.setCtrlProperty("vSNTOTALIZAR","Visible", 0 );
      }
      else
      {
         gx.fn.setCtrlProperty("TBTOTALIZAR","Visible", 1 );
         gx.fn.setCtrlProperty("vSNTOTALIZAR","Visible", 1 );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TBTOTALIZAR","Visible")',ctrl:'TBTOTALIZAR',prop:'Visible'},{ctrl:'vSNTOTALIZAR'}]);
   };
   this.e111122_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131122_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161122_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV35TipoRelatorio",gxold:"OV35TipoRelatorio",gxvar:"AV35TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35TipoRelatorio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35TipoRelatorio=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV35TipoRelatorio)},c2v:function(){gx.O.AV35TipoRelatorio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPORELATORIO",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TBTOTALIZAR", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTOTALIZAR",gxz:"ZV25SnTotalizar",gxold:"OV25SnTotalizar",gxvar:"AV25SnTotalizar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25SnTotalizar=Value},v2z:function(Value){gx.O.ZV25SnTotalizar=Value},v2c:function(){gx.fn.setComboBoxValue("vSNTOTALIZAR",gx.O.AV25SnTotalizar)},c2v:function(){gx.O.AV25SnTotalizar=this.val()},val:function(){return gx.fn.getControlValue("vSNTOTALIZAR")},nac:gx.falseFn};
   this.AV35TipoRelatorio = 0 ;
   this.ZV35TipoRelatorio = 0 ;
   this.OV35TipoRelatorio = 0 ;
   this.AV25SnTotalizar = "" ;
   this.ZV25SnTotalizar = "" ;
   this.OV25SnTotalizar = "" ;
   this.AV35TipoRelatorio = 0 ;
   this.AV25SnTotalizar = "" ;
   this.AV26TitularPessoaId = 0 ;
   this.AV27TitularPessoaNome = "" ;
   this.AV28DependenteId = 0 ;
   this.AV29DependenteNome = "" ;
   this.AV30ConvidadoId = 0 ;
   this.AV31ConvidadoNome = "" ;
   this.AV32DataAcessoIni = gx.date.nullDate() ;
   this.AV33DataAcessoFim = gx.date.nullDate() ;
   this.AV34AcessoTitular = "" ;
   this.Events = {"e111122_client": ["'FECHAR'", true] ,"e131122_client": ["ENTER", true] ,"e161122_client": ["CANCEL", true] ,"e151121_client": ["VTIPORELATORIO.CLICK", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34AcessoTitular',fld:'vACESSOTITULAR'},{av:'AV33DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'AV32DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV31ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV30ConvidadoId',fld:'vCONVIDADOID'},{av:'AV29DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV27TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV26TitularPessoaId',fld:'vTITULARPESSOAID'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV25SnTotalizar',fld:'vSNTOTALIZAR'},{av:'AV35TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV26TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV27TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV29DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV30ConvidadoId',fld:'vCONVIDADOID'},{av:'AV31ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV32DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV33DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'AV34AcessoTitular',fld:'vACESSOTITULAR'},{av:'AV12OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV41Pgmdesc',fld:'vPGMDESC'}],[{av:'AV23TpErro',fld:'vTPERRO'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV12OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV25SnTotalizar',fld:'vSNTOTALIZAR'},{av:'AV34AcessoTitular',fld:'vACESSOTITULAR'},{av:'AV33DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'AV32DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV31ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV30ConvidadoId',fld:'vCONVIDADOID'},{av:'AV29DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV28DependenteId',fld:'vDEPENDENTEID'},{av:'AV27TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV26TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37Orientacao',fld:'vORIENTACAO'}]];
   this.EvtParms["VTIPORELATORIO.CLICK"] = [[{av:'AV35TipoRelatorio',fld:'vTIPORELATORIO'}],[{av:'gx.fn.getCtrlProperty("TBTOTALIZAR","Visible")',ctrl:'TBTOTALIZAR',prop:'Visible'},{ctrl:'vSNTOTALIZAR'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV26TitularPessoaId", "vTITULARPESSOAID", 0, "int");
   this.setVCMap("AV27TitularPessoaNome", "vTITULARPESSOANOME", 0, "svchar");
   this.setVCMap("AV28DependenteId", "vDEPENDENTEID", 0, "int");
   this.setVCMap("AV29DependenteNome", "vDEPENDENTENOME", 0, "svchar");
   this.setVCMap("AV30ConvidadoId", "vCONVIDADOID", 0, "int");
   this.setVCMap("AV31ConvidadoNome", "vCONVIDADONOME", 0, "svchar");
   this.setVCMap("AV32DataAcessoIni", "vDATAACESSOINI", 0, "date");
   this.setVCMap("AV33DataAcessoFim", "vDATAACESSOFIM", 0, "date");
   this.setVCMap("AV34AcessoTitular", "vACESSOTITULAR", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoacessosportaria());
