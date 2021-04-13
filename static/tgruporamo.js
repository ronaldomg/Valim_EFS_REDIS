/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:32:58.4
*/
gx.evt.autoSkip = false;
gx.define('tgruporamo', false, function () {
   this.ServerClass =  "tgruporamo" ;
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
      this.AV12GrupoRamoCodigo=gx.fn.getControlValue("vGRUPORAMOCODIGO") ;
      this.AV10EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A10015GrupoRamoEmpId=gx.fn.getControlValue("GRUPORAMOEMPID") ;
      this.AV8AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV23UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Gruporamocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPORAMOCODIGO");
         this.AnyError  = 0;
         if ( (""==this.A10016GrupoRamoCodigo) )
         {
            try {
               gxballoon.setError("Informe o código do grupo do ramo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Gruporamodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GRUPORAMODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A10098GrupoRamoDescricao) )
         {
            try {
               gxballoon.setError("Informe descrição do grupo do ramo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12es2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13es2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14es755_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15es755_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE5",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gruporamocodigo,isvalid:null,rgrid:[],fld:"GRUPORAMOCODIGO",gxz:"Z10016GrupoRamoCodigo",gxold:"O10016GrupoRamoCodigo",gxvar:"A10016GrupoRamoCodigo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10016GrupoRamoCodigo=Value},v2z:function(Value){gx.O.Z10016GrupoRamoCodigo=Value},v2c:function(){gx.fn.setControlValue("GRUPORAMOCODIGO",gx.O.A10016GrupoRamoCodigo,0)},c2v:function(){gx.O.A10016GrupoRamoCodigo=this.val()},val:function(){return gx.fn.getControlValue("GRUPORAMOCODIGO")},nac:function(){return this.Gx_mode=="UPD"}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gruporamodescricao,isvalid:null,rgrid:[],fld:"GRUPORAMODESCRICAO",gxz:"Z10098GrupoRamoDescricao",gxold:"O10098GrupoRamoDescricao",gxvar:"A10098GrupoRamoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10098GrupoRamoDescricao=Value},v2z:function(Value){gx.O.Z10098GrupoRamoDescricao=Value},v2c:function(){gx.fn.setControlValue("GRUPORAMODESCRICAO",gx.O.A10098GrupoRamoDescricao,0)},c2v:function(){gx.O.A10098GrupoRamoDescricao=this.val()},val:function(){return gx.fn.getControlValue("GRUPORAMODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TXTULTALT", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPORAMOUSUARIOALT",gxz:"Z10099GrupoRamoUsuarioAlt",gxold:"O10099GrupoRamoUsuarioAlt",gxvar:"A10099GrupoRamoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10099GrupoRamoUsuarioAlt=Value},v2z:function(Value){gx.O.Z10099GrupoRamoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("GRUPORAMOUSUARIOALT",gx.O.A10099GrupoRamoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10099GrupoRamoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("GRUPORAMOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GRUPORAMODATAHORAALT",gxz:"Z10097GrupoRamoDataHoraAlt",gxold:"O10097GrupoRamoDataHoraAlt",gxvar:"A10097GrupoRamoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10097GrupoRamoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10097GrupoRamoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("GRUPORAMODATAHORAALT",gx.O.A10097GrupoRamoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10097GrupoRamoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("GRUPORAMODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A10016GrupoRamoCodigo = "" ;
   this.Z10016GrupoRamoCodigo = "" ;
   this.O10016GrupoRamoCodigo = "" ;
   this.A10098GrupoRamoDescricao = "" ;
   this.Z10098GrupoRamoDescricao = "" ;
   this.O10098GrupoRamoDescricao = "" ;
   this.A10099GrupoRamoUsuarioAlt = "" ;
   this.Z10099GrupoRamoUsuarioAlt = "" ;
   this.O10099GrupoRamoUsuarioAlt = "" ;
   this.A10097GrupoRamoDataHoraAlt = gx.date.nullDate() ;
   this.Z10097GrupoRamoDataHoraAlt = gx.date.nullDate() ;
   this.O10097GrupoRamoDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV23UsrCod = "" ;
   this.AV9EmpresaLogadaId = "" ;
   this.AV21Sistema = "" ;
   this.AV25Pgmname = "" ;
   this.AV26Pgmdesc = "" ;
   this.AV20MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV15Logon = {} ;
   this.AV22Tabela = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV8AlterDados = "" ;
   this.AV12GrupoRamoCodigo = "" ;
   this.A10015GrupoRamoEmpId = "" ;
   this.A10016GrupoRamoCodigo = "" ;
   this.A10099GrupoRamoUsuarioAlt = "" ;
   this.A10097GrupoRamoDataHoraAlt = gx.date.nullDate() ;
   this.A10098GrupoRamoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12es2_client": ["'FECHAR'", true] ,"e13es2_client": ["AFTER TRN", true] ,"e14es755_client": ["ENTER", true] ,"e15es755_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV12GrupoRamoCodigo',fld:'vGRUPORAMOCODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV12GrupoRamoCodigo", "vGRUPORAMOCODIGO", 0, "svchar");
   this.setVCMap("AV10EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10015GrupoRamoEmpId", "GRUPORAMOEMPID", 0, "char");
   this.setVCMap("AV8AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV23UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 755 ]= ["O10098GrupoRamoDescricao"] ;
});
gx.setParentObj(new tgruporamo());
