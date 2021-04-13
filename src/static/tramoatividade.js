/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:24:51.43
*/
gx.evt.autoSkip = false;
gx.define('tramoatividade', false, function () {
   this.ServerClass =  "tramoatividade" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17RamoAtividadeCodigo=gx.fn.getIntegerValue("vRAMOATIVIDADECODIGO",'.') ;
      this.AV10EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A10019RamoAtividadeEmpresaId=gx.fn.getControlValue("RAMOATIVIDADEEMPRESAID") ;
      this.AV8AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV20UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV21Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Ramoatividadecodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RAMOATIVIDADECODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ramoatividadedescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RAMOATIVIDADEDESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ramoatividadegruporamocodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ramoatividadegruporamocodigo",["gx.O.AV10EmpresaPadrao", "gx.O.A10022RamoAtividadeGrupoRamoCodigo", "gx.O.A10021RamoAtividadeGrupoRamoEmpId", "gx.O.A10106RamoAtividadeGrupoRamoDesc"],["A10021RamoAtividadeGrupoRamoEmpId", "A10106RamoAtividadeGrupoRamoDesc"]);
      return true;
   }
   this.Valid_Ramoatividadegruporamoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RAMOATIVIDADEGRUPORAMOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12eu2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13eu2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14eu757_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15eu757_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,26,29,32,34,36,45,46,48,50];
   this.GXLastCtrlId =50;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE5",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZZ",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ramoatividadecodigo,isvalid:null,rgrid:[],fld:"RAMOATIVIDADECODIGO",gxz:"Z10020RamoAtividadeCodigo",gxold:"O10020RamoAtividadeCodigo",gxvar:"A10020RamoAtividadeCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10020RamoAtividadeCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10020RamoAtividadeCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RAMOATIVIDADECODIGO",gx.O.A10020RamoAtividadeCodigo,0)},c2v:function(){gx.O.A10020RamoAtividadeCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RAMOATIVIDADECODIGO",'.')},nac:function(){return this.Gx_mode=="UPD"}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ramoatividadedescricao,isvalid:null,rgrid:[],fld:"RAMOATIVIDADEDESCRICAO",gxz:"Z10105RamoAtividadeDescricao",gxold:"O10105RamoAtividadeDescricao",gxvar:"A10105RamoAtividadeDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10105RamoAtividadeDescricao=Value},v2z:function(Value){gx.O.Z10105RamoAtividadeDescricao=Value},v2c:function(){gx.fn.setControlValue("RAMOATIVIDADEDESCRICAO",gx.O.A10105RamoAtividadeDescricao,0)},c2v:function(){gx.O.A10105RamoAtividadeDescricao=this.val()},val:function(){return gx.fn.getControlValue("RAMOATIVIDADEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ramoatividadegruporamocodigo,isvalid:null,rgrid:[],fld:"RAMOATIVIDADEGRUPORAMOCODIGO",gxz:"Z10022RamoAtividadeGrupoRamoCodigo",gxold:"O10022RamoAtividadeGrupoRamoCodigo",gxvar:"A10022RamoAtividadeGrupoRamoCodigo",ucs:[],op:[26,46],ip:[26,46,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10022RamoAtividadeGrupoRamoCodigo=Value},v2z:function(Value){gx.O.Z10022RamoAtividadeGrupoRamoCodigo=Value},v2c:function(){gx.fn.setControlValue("RAMOATIVIDADEGRUPORAMOCODIGO",gx.O.A10022RamoAtividadeGrupoRamoCodigo,0)},c2v:function(){gx.O.A10022RamoAtividadeGrupoRamoCodigo=this.val()},val:function(){return gx.fn.getControlValue("RAMOATIVIDADEGRUPORAMOCODIGO")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RAMOATIVIDADEGRUPORAMODESC",gxz:"Z10106RamoAtividadeGrupoRamoDesc",gxold:"O10106RamoAtividadeGrupoRamoDesc",gxvar:"A10106RamoAtividadeGrupoRamoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10106RamoAtividadeGrupoRamoDesc=Value},v2z:function(Value){gx.O.Z10106RamoAtividadeGrupoRamoDesc=Value},v2c:function(){gx.fn.setControlValue("RAMOATIVIDADEGRUPORAMODESC",gx.O.A10106RamoAtividadeGrupoRamoDesc,0)},c2v:function(){gx.O.A10106RamoAtividadeGrupoRamoDesc=this.val()},val:function(){return gx.fn.getControlValue("RAMOATIVIDADEGRUPORAMODESC")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE4",grid:0};
   GXValidFnc[32]={fld:"TXTULTALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RAMOATIVIDADEUSUARIOALT",gxz:"Z10107RamoAtividadeUsuarioAlt",gxold:"O10107RamoAtividadeUsuarioAlt",gxvar:"A10107RamoAtividadeUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10107RamoAtividadeUsuarioAlt=Value},v2z:function(Value){gx.O.Z10107RamoAtividadeUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("RAMOATIVIDADEUSUARIOALT",gx.O.A10107RamoAtividadeUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10107RamoAtividadeUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("RAMOATIVIDADEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[36]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RAMOATIVIDADEDATAHORAALT",gxz:"Z10104RamoAtividadeDataHoraAlt",gxold:"O10104RamoAtividadeDataHoraAlt",gxvar:"A10104RamoAtividadeDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10104RamoAtividadeDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10104RamoAtividadeDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("RAMOATIVIDADEDATAHORAALT",gx.O.A10104RamoAtividadeDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10104RamoAtividadeDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("RAMOATIVIDADEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ramoatividadegruporamoempid,isvalid:null,rgrid:[],fld:"RAMOATIVIDADEGRUPORAMOEMPID",gxz:"Z10021RamoAtividadeGrupoRamoEmpId",gxold:"O10021RamoAtividadeGrupoRamoEmpId",gxvar:"A10021RamoAtividadeGrupoRamoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10021RamoAtividadeGrupoRamoEmpId=Value},v2z:function(Value){gx.O.Z10021RamoAtividadeGrupoRamoEmpId=Value},v2c:function(){gx.fn.setControlValue("RAMOATIVIDADEGRUPORAMOEMPID",gx.O.A10021RamoAtividadeGrupoRamoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10021RamoAtividadeGrupoRamoEmpId=this.val()},val:function(){return gx.fn.getControlValue("RAMOATIVIDADEGRUPORAMOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[48]={fld:"BTNHELP",grid:0};
   GXValidFnc[50]={fld:"PROMPT_10022",grid:757};
   this.A10020RamoAtividadeCodigo = 0 ;
   this.Z10020RamoAtividadeCodigo = 0 ;
   this.O10020RamoAtividadeCodigo = 0 ;
   this.A10105RamoAtividadeDescricao = "" ;
   this.Z10105RamoAtividadeDescricao = "" ;
   this.O10105RamoAtividadeDescricao = "" ;
   this.A10022RamoAtividadeGrupoRamoCodigo = "" ;
   this.Z10022RamoAtividadeGrupoRamoCodigo = "" ;
   this.O10022RamoAtividadeGrupoRamoCodigo = "" ;
   this.A10106RamoAtividadeGrupoRamoDesc = "" ;
   this.Z10106RamoAtividadeGrupoRamoDesc = "" ;
   this.O10106RamoAtividadeGrupoRamoDesc = "" ;
   this.A10107RamoAtividadeUsuarioAlt = "" ;
   this.Z10107RamoAtividadeUsuarioAlt = "" ;
   this.O10107RamoAtividadeUsuarioAlt = "" ;
   this.A10104RamoAtividadeDataHoraAlt = gx.date.nullDate() ;
   this.Z10104RamoAtividadeDataHoraAlt = gx.date.nullDate() ;
   this.O10104RamoAtividadeDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.A10021RamoAtividadeGrupoRamoEmpId = "" ;
   this.Z10021RamoAtividadeGrupoRamoEmpId = "" ;
   this.O10021RamoAtividadeGrupoRamoEmpId = "" ;
   this.AV20UsrCod = "" ;
   this.AV9EmpresaLogadaId = "" ;
   this.AV18Sistema = "" ;
   this.AV21Pgmname = "" ;
   this.AV22Pgmdesc = "" ;
   this.AV16MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV15Modulo = "" ;
   this.AV13Logon = {} ;
   this.AV19Tabela = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV8AlterDados = "" ;
   this.AV17RamoAtividadeCodigo = 0 ;
   this.A10019RamoAtividadeEmpresaId = "" ;
   this.A10020RamoAtividadeCodigo = 0 ;
   this.A10021RamoAtividadeGrupoRamoEmpId = "" ;
   this.A10107RamoAtividadeUsuarioAlt = "" ;
   this.A10104RamoAtividadeDataHoraAlt = gx.date.nullDate() ;
   this.A10105RamoAtividadeDescricao = "" ;
   this.A10022RamoAtividadeGrupoRamoCodigo = "" ;
   this.A10106RamoAtividadeGrupoRamoDesc = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12eu2_client": ["'FECHAR'", true] ,"e13eu2_client": ["AFTER TRN", true] ,"e14eu757_client": ["ENTER", true] ,"e15eu757_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17RamoAtividadeCodigo',fld:'vRAMOATIVIDADECODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_10022", [25]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV17RamoAtividadeCodigo", "vRAMOATIVIDADECODIGO", 0, "int");
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10019RamoAtividadeEmpresaId", "RAMOATIVIDADEEMPRESAID", 0, "char");
   this.setVCMap("AV8AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV20UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV21Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 757 ]= ["O10022RamoAtividadeGrupoRamoCodigo","O10105RamoAtividadeDescricao"] ;
});
gx.setParentObj(new tramoatividade());
