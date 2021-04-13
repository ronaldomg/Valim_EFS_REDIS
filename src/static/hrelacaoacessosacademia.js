/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:47:12.96
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoacessosacademia', false, function () {
   this.ServerClass =  "hrelacaoacessosacademia" ;
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
      this.AV7TitularId=gx.fn.getIntegerValue("vTITULARID",'.') ;
      this.AV8DependenteId=gx.fn.getIntegerValue("vDEPENDENTEID",'.') ;
      this.AV9DataAcessoIni=gx.fn.getDateTimeValue("vDATAACESSOINI") ;
      this.AV10DataAcessoFim=gx.fn.getDateTimeValue("vDATAACESSOFIM") ;
      this.AV11AcessoAcademiaSituacao=gx.fn.getControlValue("vACESSOACADEMIASITUACAO") ;
   };
   this.e161gl1_client=function()
   {
      this.clearMessages();
      if ( this.AV6TipoRelatorio == 2 )
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
   this.e111gl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131gl2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e171gl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,23];
   this.GXLastCtrlId =23;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV6TipoRelatorio",gxold:"OV6TipoRelatorio",gxvar:"AV6TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV6TipoRelatorio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6TipoRelatorio=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vTIPORELATORIO",gx.O.AV6TipoRelatorio)},c2v:function(){gx.O.AV6TipoRelatorio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPORELATORIO",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TBTOTALIZAR", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTOTALIZAR",gxz:"ZV5SnTotalizar",gxold:"OV5SnTotalizar",gxvar:"AV5SnTotalizar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5SnTotalizar=Value},v2z:function(Value){gx.O.ZV5SnTotalizar=Value},v2c:function(){gx.fn.setComboBoxValue("vSNTOTALIZAR",gx.O.AV5SnTotalizar)},c2v:function(){gx.O.AV5SnTotalizar=this.val()},val:function(){return gx.fn.getControlValue("vSNTOTALIZAR")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"JSRELAT", format:2,grid:0};
   this.AV6TipoRelatorio = 0 ;
   this.ZV6TipoRelatorio = 0 ;
   this.OV6TipoRelatorio = 0 ;
   this.AV5SnTotalizar = "" ;
   this.ZV5SnTotalizar = "" ;
   this.OV5SnTotalizar = "" ;
   this.AV6TipoRelatorio = 0 ;
   this.AV5SnTotalizar = "" ;
   this.AV7TitularId = 0 ;
   this.AV8DependenteId = 0 ;
   this.AV9DataAcessoIni = gx.date.nullDate() ;
   this.AV10DataAcessoFim = gx.date.nullDate() ;
   this.AV11AcessoAcademiaSituacao = "" ;
   this.Events = {"e111gl2_client": ["'FECHAR'", true] ,"e131gl2_client": ["ENTER", true] ,"e171gl2_client": ["CANCEL", true] ,"e161gl1_client": ["VTIPORELATORIO.CLICK", false]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV22SnFecharRel',fld:'vSNFECHARREL'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV5SnTotalizar',fld:'vSNTOTALIZAR'},{av:'AV6TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV27Pgmname',fld:'vPGMNAME'},{av:'AV19QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV7TitularId',fld:'vTITULARID',hsh:true},{av:'AV8DependenteId',fld:'vDEPENDENTEID',hsh:true},{av:'AV9DataAcessoIni',fld:'vDATAACESSOINI',hsh:true},{av:'AV10DataAcessoFim',fld:'vDATAACESSOFIM',hsh:true},{av:'AV11AcessoAcademiaSituacao',fld:'vACESSOACADEMIASITUACAO',hsh:true},{av:'AV17OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}],[{av:'AV18tpErro',fld:'vTPERRO'},{av:'AV20NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV23NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV17OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV5SnTotalizar',fld:'vSNTOTALIZAR'},{av:'AV11AcessoAcademiaSituacao',fld:'vACESSOACADEMIASITUACAO',hsh:true},{av:'AV10DataAcessoFim',fld:'vDATAACESSOFIM',hsh:true},{av:'AV9DataAcessoIni',fld:'vDATAACESSOINI',hsh:true},{av:'AV8DependenteId',fld:'vDEPENDENTEID',hsh:true},{av:'AV7TitularId',fld:'vTITULARID',hsh:true},{av:'AV19QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["VTIPORELATORIO.CLICK"] = [[{av:'AV6TipoRelatorio',fld:'vTIPORELATORIO'}],[{av:'gx.fn.getCtrlProperty("TBTOTALIZAR","Visible")',ctrl:'TBTOTALIZAR',prop:'Visible'},{ctrl:'vSNTOTALIZAR'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV7TitularId", "vTITULARID", 0, "int");
   this.setVCMap("AV8DependenteId", "vDEPENDENTEID", 0, "int");
   this.setVCMap("AV9DataAcessoIni", "vDATAACESSOINI", 0, "dtime");
   this.setVCMap("AV10DataAcessoFim", "vDATAACESSOFIM", 0, "dtime");
   this.setVCMap("AV11AcessoAcademiaSituacao", "vACESSOACADEMIASITUACAO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoacessosacademia());
