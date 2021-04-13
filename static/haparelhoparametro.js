/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:51.61
*/
gx.evt.autoSkip = false;
gx.define('haparelhoparametro', false, function () {
   this.ServerClass =  "haparelhoparametro" ;
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
   };
   this.Validv_Agendatipocompromissoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAGENDATIPOCOMPROMISSOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ordemservicotipoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOTIPOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121yv2_client=function()
   {
      this.executeServerEvent("'MOSTRAAJUDA'", true, null, false, false);
   };
   this.e131yv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141yv2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151yv2_client=function()
   {
      this.executeServerEvent("VAGENDATIPOCOMPROMISSOID.ISVALID", true, null, false, true);
   };
   this.e161yv2_client=function()
   {
      this.executeServerEvent("VORDEMSERVICOFASEID.ISVALID", true, null, false, true);
   };
   this.e171yv2_client=function()
   {
      this.executeServerEvent("VORDEMSERVICOTIPOID.ISVALID", true, null, false, true);
   };
   this.e191yv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,16,19,21,22,25,27,28,31,33,36,38,39,42,44,47,49,52,54,57,59,62,64,67,69,78,80,81,82,83];
   this.GXLastCtrlId =83;
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLEINPUT",grid:0};
   GXValidFnc[8]={fld:"LBLQTDDIASAVISO", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDDIASAVISOMAN",gxz:"ZV33QtdDiasAvisoMan",gxold:"OV33QtdDiasAvisoMan",gxvar:"AV33QtdDiasAvisoMan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33QtdDiasAvisoMan=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33QtdDiasAvisoMan=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDDIASAVISOMAN",gx.O.AV33QtdDiasAvisoMan,0)},c2v:function(){gx.O.AV33QtdDiasAvisoMan=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDDIASAVISOMAN",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"LBLTPCOMPROMISSO", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Agendatipocompromissoid,isvalid:'e151yv2_client',rgrid:[],fld:"vAGENDATIPOCOMPROMISSOID",gxz:"ZV6AgendaTipoCompromissoId",gxold:"OV6AgendaTipoCompromissoId",gxvar:"AV6AgendaTipoCompromissoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6AgendaTipoCompromissoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6AgendaTipoCompromissoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAGENDATIPOCOMPROMISSOID",gx.O.AV6AgendaTipoCompromissoId,0)},c2v:function(){gx.O.AV6AgendaTipoCompromissoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAGENDATIPOCOMPROMISSOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDATIPOCOMPROMISSODESC",gxz:"ZV52AgendaTipoCompromissoDesc",gxold:"OV52AgendaTipoCompromissoDesc",gxvar:"AV52AgendaTipoCompromissoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52AgendaTipoCompromissoDesc=Value},v2z:function(Value){gx.O.ZV52AgendaTipoCompromissoDesc=Value},v2c:function(){gx.fn.setControlValue("vAGENDATIPOCOMPROMISSODESC",gx.O.AV52AgendaTipoCompromissoDesc,0)},c2v:function(){gx.O.AV52AgendaTipoCompromissoDesc=this.val()},val:function(){return gx.fn.getControlValue("vAGENDATIPOCOMPROMISSODESC")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"LBLTPOS", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicotipoid,isvalid:'e171yv2_client',rgrid:[],fld:"vORDEMSERVICOTIPOID",gxz:"ZV32OrdemServicoTipoId",gxold:"OV32OrdemServicoTipoId",gxvar:"AV32OrdemServicoTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32OrdemServicoTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32OrdemServicoTipoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOTIPOID",gx.O.AV32OrdemServicoTipoId,0)},c2v:function(){gx.O.AV32OrdemServicoTipoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOTIPOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOTIPODESCRICAO",gxz:"ZV57OrdemServicoTipoDescricao",gxold:"OV57OrdemServicoTipoDescricao",gxvar:"AV57OrdemServicoTipoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57OrdemServicoTipoDescricao=Value},v2z:function(Value){gx.O.ZV57OrdemServicoTipoDescricao=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOTIPODESCRICAO",gx.O.AV57OrdemServicoTipoDescricao,0)},c2v:function(){gx.O.AV57OrdemServicoTipoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOTIPODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"LBLFASEINI", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e161yv2_client',rgrid:[],fld:"vORDEMSERVICOFASEID",gxz:"ZV31OrdemServicoFaseId",gxold:"OV31OrdemServicoFaseId",gxvar:"AV31OrdemServicoFaseId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31OrdemServicoFaseId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31OrdemServicoFaseId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOFASEID",gx.O.AV31OrdemServicoFaseId,0)},c2v:function(){gx.O.AV31OrdemServicoFaseId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOFASEID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASEDESCRICAO",gxz:"ZV56OrdemServicoFaseDescricao",gxold:"OV56OrdemServicoFaseDescricao",gxvar:"AV56OrdemServicoFaseDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56OrdemServicoFaseDescricao=Value},v2z:function(Value){gx.O.ZV56OrdemServicoFaseDescricao=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOFASEDESCRICAO",gx.O.AV56OrdemServicoFaseDescricao,0)},c2v:function(){gx.O.AV56OrdemServicoFaseDescricao=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOFASEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"LBLCONDICAO", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECONDRECEPCAO",gxz:"ZV29OrdemServicoApareCondRecepcao",gxold:"OV29OrdemServicoApareCondRecepcao",gxvar:"AV29OrdemServicoApareCondRecepcao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29OrdemServicoApareCondRecepcao=Value},v2z:function(Value){gx.O.ZV29OrdemServicoApareCondRecepcao=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECONDRECEPCAO",gx.O.AV29OrdemServicoApareCondRecepcao,0)},c2v:function(){gx.O.AV29OrdemServicoApareCondRecepcao=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECONDRECEPCAO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"LBLDEFEITO", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPAREDEFERECLAMADO",gxz:"ZV30OrdemServicoApareDefeReclamado",gxold:"OV30OrdemServicoApareDefeReclamado",gxvar:"AV30OrdemServicoApareDefeReclamado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30OrdemServicoApareDefeReclamado=Value},v2z:function(Value){gx.O.ZV30OrdemServicoApareDefeReclamado=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPAREDEFERECLAMADO",gx.O.AV30OrdemServicoApareDefeReclamado,0)},c2v:function(){gx.O.AV30OrdemServicoApareDefeReclamado=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPAREDEFERECLAMADO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLEOBSERVACOES",grid:0};
   GXValidFnc[42]={fld:"LBL1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO1",gxz:"ZV22Observacao1",gxold:"OV22Observacao1",gxvar:"AV22Observacao1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Observacao1=Value},v2z:function(Value){gx.O.ZV22Observacao1=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO1",gx.O.AV22Observacao1,0)},c2v:function(){gx.O.AV22Observacao1=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO1")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"LBL3", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO3",gxz:"ZV24Observacao3",gxold:"OV24Observacao3",gxvar:"AV24Observacao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Observacao3=Value},v2z:function(Value){gx.O.ZV24Observacao3=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO3",gx.O.AV24Observacao3,0)},c2v:function(){gx.O.AV24Observacao3=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO3")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"LBL4", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO4",gxz:"ZV25Observacao4",gxold:"OV25Observacao4",gxvar:"AV25Observacao4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Observacao4=Value},v2z:function(Value){gx.O.ZV25Observacao4=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO4",gx.O.AV25Observacao4,0)},c2v:function(){gx.O.AV25Observacao4=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO4")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"LBL5", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO5",gxz:"ZV26Observacao5",gxold:"OV26Observacao5",gxvar:"AV26Observacao5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Observacao5=Value},v2z:function(Value){gx.O.ZV26Observacao5=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO5",gx.O.AV26Observacao5,0)},c2v:function(){gx.O.AV26Observacao5=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO5")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"LBL6", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO6",gxz:"ZV27Observacao6",gxold:"OV27Observacao6",gxvar:"AV27Observacao6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Observacao6=Value},v2z:function(Value){gx.O.ZV27Observacao6=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO6",gx.O.AV27Observacao6,0)},c2v:function(){gx.O.AV27Observacao6=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO6")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"LBL7", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO7",gxz:"ZV28Observacao7",gxold:"OV28Observacao7",gxvar:"AV28Observacao7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Observacao7=Value},v2z:function(Value){gx.O.ZV28Observacao7=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO7",gx.O.AV28Observacao7,0)},c2v:function(){gx.O.AV28Observacao7=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO7")},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"svchar",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODO",gxz:"ZV20modo",gxold:"OV20modo",gxvar:"AV20modo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20modo=Value},v2z:function(Value){gx.O.ZV20modo=Value},v2c:function(){gx.fn.setControlValue("vMODO",gx.O.AV20modo,0)},c2v:function(){gx.O.AV20modo=this.val()},val:function(){return gx.fn.getControlValue("vMODO")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"MOSTRAROBS",grid:0};
   GXValidFnc[81]={fld:"PROMPT_AGENDATIPOCOMPROMISSOID",grid:0};
   GXValidFnc[82]={fld:"PROMPT_ORDEMSERVICOTIPOID",grid:0};
   GXValidFnc[83]={fld:"PROMPT_ORDEMSERVICOFASEID",grid:0};
   this.AV33QtdDiasAvisoMan = 0 ;
   this.ZV33QtdDiasAvisoMan = 0 ;
   this.OV33QtdDiasAvisoMan = 0 ;
   this.AV6AgendaTipoCompromissoId = 0 ;
   this.ZV6AgendaTipoCompromissoId = 0 ;
   this.OV6AgendaTipoCompromissoId = 0 ;
   this.AV52AgendaTipoCompromissoDesc = "" ;
   this.ZV52AgendaTipoCompromissoDesc = "" ;
   this.OV52AgendaTipoCompromissoDesc = "" ;
   this.AV32OrdemServicoTipoId = 0 ;
   this.ZV32OrdemServicoTipoId = 0 ;
   this.OV32OrdemServicoTipoId = 0 ;
   this.AV57OrdemServicoTipoDescricao = "" ;
   this.ZV57OrdemServicoTipoDescricao = "" ;
   this.OV57OrdemServicoTipoDescricao = "" ;
   this.AV31OrdemServicoFaseId = 0 ;
   this.ZV31OrdemServicoFaseId = 0 ;
   this.OV31OrdemServicoFaseId = 0 ;
   this.AV56OrdemServicoFaseDescricao = "" ;
   this.ZV56OrdemServicoFaseDescricao = "" ;
   this.OV56OrdemServicoFaseDescricao = "" ;
   this.AV29OrdemServicoApareCondRecepcao = "" ;
   this.ZV29OrdemServicoApareCondRecepcao = "" ;
   this.OV29OrdemServicoApareCondRecepcao = "" ;
   this.AV30OrdemServicoApareDefeReclamado = "" ;
   this.ZV30OrdemServicoApareDefeReclamado = "" ;
   this.OV30OrdemServicoApareDefeReclamado = "" ;
   this.AV22Observacao1 = "" ;
   this.ZV22Observacao1 = "" ;
   this.OV22Observacao1 = "" ;
   this.AV24Observacao3 = "" ;
   this.ZV24Observacao3 = "" ;
   this.OV24Observacao3 = "" ;
   this.AV25Observacao4 = "" ;
   this.ZV25Observacao4 = "" ;
   this.OV25Observacao4 = "" ;
   this.AV26Observacao5 = "" ;
   this.ZV26Observacao5 = "" ;
   this.OV26Observacao5 = "" ;
   this.AV27Observacao6 = "" ;
   this.ZV27Observacao6 = "" ;
   this.OV27Observacao6 = "" ;
   this.AV28Observacao7 = "" ;
   this.ZV28Observacao7 = "" ;
   this.OV28Observacao7 = "" ;
   this.AV20modo = "" ;
   this.ZV20modo = "" ;
   this.OV20modo = "" ;
   this.AV33QtdDiasAvisoMan = 0 ;
   this.AV6AgendaTipoCompromissoId = 0 ;
   this.AV52AgendaTipoCompromissoDesc = "" ;
   this.AV32OrdemServicoTipoId = 0 ;
   this.AV57OrdemServicoTipoDescricao = "" ;
   this.AV31OrdemServicoFaseId = 0 ;
   this.AV56OrdemServicoFaseDescricao = "" ;
   this.AV29OrdemServicoApareCondRecepcao = "" ;
   this.AV30OrdemServicoApareDefeReclamado = "" ;
   this.AV22Observacao1 = "" ;
   this.AV24Observacao3 = "" ;
   this.AV25Observacao4 = "" ;
   this.AV26Observacao5 = "" ;
   this.AV27Observacao6 = "" ;
   this.AV28Observacao7 = "" ;
   this.AV20modo = "" ;
   this.A8568AgendaTipoCompromissoId = 0 ;
   this.A8572AgendaTipoCompromissoDesc = "" ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.A8681OrdemServicoTipoEmpresaid = "" ;
   this.A8682OrdemServicoTipoId = 0 ;
   this.A8675OrdemServicoTipoDescricao = "" ;
   this.A138EmpresaId = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A140SistemaId = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.A418ParametroSistemaObservacao = "" ;
   this.Events = {"e121yv2_client": ["'MOSTRAAJUDA'", true] ,"e131yv2_client": ["'FECHAR'", true] ,"e141yv2_client": ["ENTER", true] ,"e151yv2_client": ["VAGENDATIPOCOMPROMISSOID.ISVALID", true] ,"e161yv2_client": ["VORDEMSERVICOFASEID.ISVALID", true] ,"e171yv2_client": ["VORDEMSERVICOTIPOID.ISVALID", true] ,"e191yv2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'MOSTRAAJUDA'"] = [[{av:'AV20modo',fld:'vMODO'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV34Sistema',fld:'vSISTEMA'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV16EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A416ParametroSistemaDescricao',fld:'PARAMETROSISTEMADESCRICAO'},{av:'A418ParametroSistemaObservacao',fld:'PARAMETROSISTEMAOBSERVACAO'},{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'AV6AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'A8572AgendaTipoCompromissoDesc',fld:'AGENDATIPOCOMPROMISSODESC'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'AV31OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8682OrdemServicoTipoId',fld:'ORDEMSERVICOTIPOID'},{av:'AV32OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'A8681OrdemServicoTipoEmpresaid',fld:'ORDEMSERVICOTIPOEMPRESAID'},{av:'AV59OrdemServicoTipoEmpresaId',fld:'vORDEMSERVICOTIPOEMPRESAID'},{av:'A8675OrdemServicoTipoDescricao',fld:'ORDEMSERVICOTIPODESCRICAO'}],[{av:'AV20modo',fld:'vMODO'},{av:'gx.fn.getCtrlProperty("TABLEINPUT","Visible")',ctrl:'TABLEINPUT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEOBSERVACOES","Visible")',ctrl:'TABLEOBSERVACOES',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MOSTRAROBS","Visible")',ctrl:'MOSTRAROBS',prop:'Visible'},{av:'AV58Parm',fld:'vPARM'},{av:'AV33QtdDiasAvisoMan',fld:'vQTDDIASAVISOMAN'},{av:'AV32OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV29OrdemServicoApareCondRecepcao',fld:'vORDEMSERVICOAPARECONDRECEPCAO'},{av:'AV30OrdemServicoApareDefeReclamado',fld:'vORDEMSERVICOAPAREDEFERECLAMADO'},{av:'AV31OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV6AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'gx.fn.getCtrlProperty("LBL1","Caption")',ctrl:'LBL1',prop:'Caption'},{av:'AV22Observacao1',fld:'vOBSERVACAO1'},{av:'gx.fn.getCtrlProperty("LBL3","Caption")',ctrl:'LBL3',prop:'Caption'},{av:'AV24Observacao3',fld:'vOBSERVACAO3'},{av:'gx.fn.getCtrlProperty("LBL4","Caption")',ctrl:'LBL4',prop:'Caption'},{av:'AV25Observacao4',fld:'vOBSERVACAO4'},{av:'gx.fn.getCtrlProperty("LBL5","Caption")',ctrl:'LBL5',prop:'Caption'},{av:'AV26Observacao5',fld:'vOBSERVACAO5'},{av:'gx.fn.getCtrlProperty("LBL6","Caption")',ctrl:'LBL6',prop:'Caption'},{av:'AV27Observacao6',fld:'vOBSERVACAO6'},{av:'gx.fn.getCtrlProperty("LBL7","Caption")',ctrl:'LBL7',prop:'Caption'},{av:'AV28Observacao7',fld:'vOBSERVACAO7'},{av:'AV71GXLvl210',fld:'vGXLVL210'},{av:'AV52AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV60SNValido',fld:'vSNVALIDO'},{av:'AV70GXLvl200',fld:'vGXLVL200'},{av:'AV56OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV69GXLvl189',fld:'vGXLVL189'},{av:'AV57OrdemServicoTipoDescricao',fld:'vORDEMSERVICOTIPODESCRICAO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20modo',fld:'vMODO'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV34Sistema',fld:'vSISTEMA'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV16EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A416ParametroSistemaDescricao',fld:'PARAMETROSISTEMADESCRICAO'},{av:'A418ParametroSistemaObservacao',fld:'PARAMETROSISTEMAOBSERVACAO'},{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'AV6AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'A8572AgendaTipoCompromissoDesc',fld:'AGENDATIPOCOMPROMISSODESC'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'AV31OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8682OrdemServicoTipoId',fld:'ORDEMSERVICOTIPOID'},{av:'AV32OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'A8681OrdemServicoTipoEmpresaid',fld:'ORDEMSERVICOTIPOEMPRESAID'},{av:'AV59OrdemServicoTipoEmpresaId',fld:'vORDEMSERVICOTIPOEMPRESAID'},{av:'A8675OrdemServicoTipoDescricao',fld:'ORDEMSERVICOTIPODESCRICAO'}],[{av:'AV20modo',fld:'vMODO'},{av:'gx.fn.getCtrlProperty("TABLEINPUT","Visible")',ctrl:'TABLEINPUT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEOBSERVACOES","Visible")',ctrl:'TABLEOBSERVACOES',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MOSTRAROBS","Visible")',ctrl:'MOSTRAROBS',prop:'Visible'},{av:'AV58Parm',fld:'vPARM'},{av:'AV33QtdDiasAvisoMan',fld:'vQTDDIASAVISOMAN'},{av:'AV32OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV29OrdemServicoApareCondRecepcao',fld:'vORDEMSERVICOAPARECONDRECEPCAO'},{av:'AV30OrdemServicoApareDefeReclamado',fld:'vORDEMSERVICOAPAREDEFERECLAMADO'},{av:'AV31OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV6AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'gx.fn.getCtrlProperty("LBL1","Caption")',ctrl:'LBL1',prop:'Caption'},{av:'AV22Observacao1',fld:'vOBSERVACAO1'},{av:'gx.fn.getCtrlProperty("LBL3","Caption")',ctrl:'LBL3',prop:'Caption'},{av:'AV24Observacao3',fld:'vOBSERVACAO3'},{av:'gx.fn.getCtrlProperty("LBL4","Caption")',ctrl:'LBL4',prop:'Caption'},{av:'AV25Observacao4',fld:'vOBSERVACAO4'},{av:'gx.fn.getCtrlProperty("LBL5","Caption")',ctrl:'LBL5',prop:'Caption'},{av:'AV26Observacao5',fld:'vOBSERVACAO5'},{av:'gx.fn.getCtrlProperty("LBL6","Caption")',ctrl:'LBL6',prop:'Caption'},{av:'AV27Observacao6',fld:'vOBSERVACAO6'},{av:'gx.fn.getCtrlProperty("LBL7","Caption")',ctrl:'LBL7',prop:'Caption'},{av:'AV28Observacao7',fld:'vOBSERVACAO7'},{av:'AV71GXLvl210',fld:'vGXLVL210'},{av:'AV52AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV60SNValido',fld:'vSNVALIDO'},{av:'AV70GXLvl200',fld:'vGXLVL200'},{av:'AV56OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV69GXLvl189',fld:'vGXLVL189'},{av:'AV57OrdemServicoTipoDescricao',fld:'vORDEMSERVICOTIPODESCRICAO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV6AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV32OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV31OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV16EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV33QtdDiasAvisoMan',fld:'vQTDDIASAVISOMAN'},{av:'AV29OrdemServicoApareCondRecepcao',fld:'vORDEMSERVICOAPARECONDRECEPCAO'},{av:'AV30OrdemServicoApareDefeReclamado',fld:'vORDEMSERVICOAPAREDEFERECLAMADO'},{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'A8572AgendaTipoCompromissoDesc',fld:'AGENDATIPOCOMPROMISSODESC'},{av:'A8682OrdemServicoTipoId',fld:'ORDEMSERVICOTIPOID'},{av:'A8681OrdemServicoTipoEmpresaid',fld:'ORDEMSERVICOTIPOEMPRESAID'},{av:'AV59OrdemServicoTipoEmpresaId',fld:'vORDEMSERVICOTIPOEMPRESAID'},{av:'A8675OrdemServicoTipoDescricao',fld:'ORDEMSERVICOTIPODESCRICAO'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'}],[{av:'AV60SNValido',fld:'vSNVALIDO'},{av:'AV33QtdDiasAvisoMan',fld:'vQTDDIASAVISOMAN'},{av:'AV32OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV6AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV31OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoApareCondRecepcao',fld:'vORDEMSERVICOAPARECONDRECEPCAO'},{av:'AV30OrdemServicoApareDefeReclamado',fld:'vORDEMSERVICOAPAREDEFERECLAMADO'},{av:'AV71GXLvl210',fld:'vGXLVL210'},{av:'AV52AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV69GXLvl189',fld:'vGXLVL189'},{av:'AV57OrdemServicoTipoDescricao',fld:'vORDEMSERVICOTIPODESCRICAO'},{av:'AV70GXLvl200',fld:'vGXLVL200'},{av:'AV56OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'}]];
   this.EvtParms["VAGENDATIPOCOMPROMISSOID.ISVALID"] = [[{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'AV6AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'A8572AgendaTipoCompromissoDesc',fld:'AGENDATIPOCOMPROMISSODESC'}],[{av:'AV71GXLvl210',fld:'vGXLVL210'},{av:'AV52AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV60SNValido',fld:'vSNVALIDO'}]];
   this.EvtParms["VORDEMSERVICOFASEID.ISVALID"] = [[{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'AV31OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'}],[{av:'AV70GXLvl200',fld:'vGXLVL200'},{av:'AV56OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV60SNValido',fld:'vSNVALIDO'}]];
   this.EvtParms["VORDEMSERVICOTIPOID.ISVALID"] = [[{av:'A8682OrdemServicoTipoId',fld:'ORDEMSERVICOTIPOID'},{av:'AV32OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'A8681OrdemServicoTipoEmpresaid',fld:'ORDEMSERVICOTIPOEMPRESAID'},{av:'AV59OrdemServicoTipoEmpresaId',fld:'vORDEMSERVICOTIPOEMPRESAID'},{av:'A8675OrdemServicoTipoDescricao',fld:'ORDEMSERVICOTIPODESCRICAO'}],[{av:'AV69GXLvl189',fld:'vGXLVL189'},{av:'AV57OrdemServicoTipoDescricao',fld:'vORDEMSERVICOTIPODESCRICAO'},{av:'AV60SNValido',fld:'vSNVALIDO'}]];
   this.setPrompt("PROMPT_AGENDATIPOCOMPROMISSOID", [15]);
   this.setPrompt("PROMPT_ORDEMSERVICOTIPOID", [21]);
   this.setPrompt("PROMPT_ORDEMSERVICOFASEID", [27]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new haparelhoparametro());
