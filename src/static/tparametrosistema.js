/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:18:36.18
*/
gx.evt.autoSkip = false;
gx.define('tparametrosistema', false, function () {
   this.ServerClass =  "tparametrosistema" ;
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
      this.AV15ParametroSistemaCampo=gx.fn.getControlValue("vPARAMETROSISTEMACAMPO") ;
      this.AV14SistemaId=gx.fn.getControlValue("vSISTEMAID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19ParametroSistemaValor=gx.fn.getControlValue("vPARAMETROSISTEMAVALOR") ;
      this.AV32Observacao=gx.fn.getControlValue("vOBSERVACAO") ;
      this.AV16ErroValValidos=gx.fn.getControlValue("vERROVALVALIDOS") ;
      this.AV17ErroOrdCresc=gx.fn.getControlValue("vERROORDCRESC") ;
      this.AV20SNExisteContaContabilCli=gx.fn.getControlValue("vSNEXISTECONTACONTABILCLI") ;
      this.AV21SNExisteContaContabilFor=gx.fn.getControlValue("vSNEXISTECONTACONTABILFOR") ;
      this.AV23Valida=gx.fn.getControlValue("vVALIDA") ;
      this.AV27Mes=gx.fn.getIntegerValue("vMES",'.') ;
      this.AV28Ano=gx.fn.getIntegerValue("vANO",'.') ;
      this.AV33snValida=gx.fn.getControlValue("vSNVALIDA") ;
      this.A933ParametroSistemaSN=gx.fn.getControlValue("PARAMETROSISTEMASN") ;
      this.A934ParametroSitemaNumero=gx.fn.getIntegerValue("PARAMETROSITEMANUMERO",'.') ;
      this.AV40Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV39Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Sistemaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SISTEMAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametrosistemacampo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSISTEMACAMPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Empresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresaid",["gx.O.A138EmpresaId", "gx.O.A140SistemaId", "gx.O.A191EmpresaFantasia"],["A191EmpresaFantasia"]);
      return true;
   }
   this.Valid_Parametrosistematipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSISTEMATIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Parametrosistemavalor=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Parametrosistemavalor",["gx.O.A417ParametroSistemaValor", "gx.O.A419ParametroSistemaCampo", "gx.O.AV19ParametroSistemaValor"],["AV19ParametroSistemaValor"]);
      return true;
   }
   this.Valid_Parametrosistemaobservacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PARAMETROSISTEMAOBSERVACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e120z2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130z2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140z47_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150z47_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,43,45,48,50,59,61,63];
   this.GXLastCtrlId =63;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Sistemaid,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(){gx.fn.setControlValue("SISTEMAID",gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(){return gx.fn.getControlValue("SISTEMAID")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametrosistemacampo,isvalid:null,rgrid:[],fld:"PARAMETROSISTEMACAMPO",gxz:"Z419ParametroSistemaCampo",gxold:"O419ParametroSistemaCampo",gxvar:"A419ParametroSistemaCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A419ParametroSistemaCampo=Value},v2z:function(Value){gx.O.Z419ParametroSistemaCampo=Value},v2c:function(){gx.fn.setControlValue("PARAMETROSISTEMACAMPO",gx.O.A419ParametroSistemaCampo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A419ParametroSistemaCampo=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSISTEMACAMPO")},nac:function(){return !(""==this.AV15ParametroSistemaCampo)}};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaid,isvalid:null,rgrid:[],fld:"EMPRESAID",gxz:"Z138EmpresaId",gxold:"O138EmpresaId",gxvar:"A138EmpresaId",ucs:[],op:[30],ip:[30,14,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A138EmpresaId=Value},v2z:function(Value){gx.O.Z138EmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAID",gx.O.A138EmpresaId,0)},c2v:function(){gx.O.A138EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAID")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAFANTASIA",gxz:"Z191EmpresaFantasia",gxold:"O191EmpresaFantasia",gxvar:"A191EmpresaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A191EmpresaFantasia=Value},v2z:function(Value){gx.O.Z191EmpresaFantasia=Value},v2c:function(){gx.fn.setControlValue("EMPRESAFANTASIA",gx.O.A191EmpresaFantasia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A191EmpresaFantasia=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAFANTASIA")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROSISTEMADESCRICAO",gxz:"Z416ParametroSistemaDescricao",gxold:"O416ParametroSistemaDescricao",gxvar:"A416ParametroSistemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A416ParametroSistemaDescricao=Value},v2z:function(Value){gx.O.Z416ParametroSistemaDescricao=Value},v2c:function(){gx.fn.setControlValue("PARAMETROSISTEMADESCRICAO",gx.O.A416ParametroSistemaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A416ParametroSistemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSISTEMADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Parametrosistematipo,isvalid:null,rgrid:[],fld:"PARAMETROSISTEMATIPO",gxz:"Z930ParametroSistemaTipo",gxold:"O930ParametroSistemaTipo",gxvar:"A930ParametroSistemaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A930ParametroSistemaTipo=Value},v2z:function(Value){gx.O.Z930ParametroSistemaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("PARAMETROSISTEMATIPO",gx.O.A930ParametroSistemaTipo)},c2v:function(){gx.O.A930ParametroSistemaTipo=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSISTEMATIPO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Parametrosistemavalor,isvalid:null,rgrid:[],fld:"PARAMETROSISTEMAVALOR",gxz:"Z417ParametroSistemaValor",gxold:"O417ParametroSistemaValor",gxvar:"A417ParametroSistemaValor",ucs:[],op:[20,45],ip:[20,45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A417ParametroSistemaValor=Value},v2z:function(Value){gx.O.Z417ParametroSistemaValor=Value},v2c:function(){gx.fn.setControlValue("PARAMETROSISTEMAVALOR",gx.O.A417ParametroSistemaValor,0)},c2v:function(){gx.O.A417ParametroSistemaValor=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSISTEMAVALOR")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Parametrosistemaobservacao,isvalid:null,rgrid:[],fld:"PARAMETROSISTEMAOBSERVACAO",gxz:"Z418ParametroSistemaObservacao",gxold:"O418ParametroSistemaObservacao",gxvar:"A418ParametroSistemaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A418ParametroSistemaObservacao=Value},v2z:function(Value){gx.O.Z418ParametroSistemaObservacao=Value},v2c:function(){gx.fn.setControlValue("PARAMETROSISTEMAOBSERVACAO",gx.O.A418ParametroSistemaObservacao,0)},c2v:function(){gx.O.A418ParametroSistemaObservacao=this.val()},val:function(){return gx.fn.getControlValue("PARAMETROSISTEMAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV34AcessoSistemaSequencia",gxold:"OV34AcessoSistemaSequencia",gxvar:"AV34AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV34AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV34AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"BTNHELP",grid:0};
   GXValidFnc[63]={fld:"PROMPT_138",grid:47};
   this.A140SistemaId = "" ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.Z419ParametroSistemaCampo = "" ;
   this.O419ParametroSistemaCampo = "" ;
   this.A138EmpresaId = "" ;
   this.Z138EmpresaId = "" ;
   this.O138EmpresaId = "" ;
   this.A191EmpresaFantasia = "" ;
   this.Z191EmpresaFantasia = "" ;
   this.O191EmpresaFantasia = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.Z416ParametroSistemaDescricao = "" ;
   this.O416ParametroSistemaDescricao = "" ;
   this.A930ParametroSistemaTipo = "" ;
   this.Z930ParametroSistemaTipo = "" ;
   this.O930ParametroSistemaTipo = "" ;
   this.A417ParametroSistemaValor = "" ;
   this.Z417ParametroSistemaValor = "" ;
   this.O417ParametroSistemaValor = "" ;
   this.A418ParametroSistemaObservacao = "" ;
   this.Z418ParametroSistemaObservacao = "" ;
   this.O418ParametroSistemaObservacao = "" ;
   this.AV34AcessoSistemaSequencia = 0 ;
   this.ZV34AcessoSistemaSequencia = 0 ;
   this.OV34AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV39Pgmname = "" ;
   this.AV40Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV34AcessoSistemaSequencia = 0 ;
   this.AV18Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV16ErroValValidos = "" ;
   this.AV17ErroOrdCresc = "" ;
   this.AV20SNExisteContaContabilCli = "" ;
   this.AV21SNExisteContaContabilFor = "" ;
   this.AV27Mes = 0 ;
   this.AV28Ano = 0 ;
   this.AV23Valida = "" ;
   this.AV14SistemaId = "" ;
   this.AV15ParametroSistemaCampo = "" ;
   this.A140SistemaId = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A138EmpresaId = "" ;
   this.AV19ParametroSistemaValor = "" ;
   this.AV32Observacao = "" ;
   this.A191EmpresaFantasia = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.A417ParametroSistemaValor = "" ;
   this.A418ParametroSistemaObservacao = "" ;
   this.A930ParametroSistemaTipo = "" ;
   this.A933ParametroSistemaSN = "" ;
   this.A934ParametroSitemaNumero = 0 ;
   this.AV33snValida = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120z2_client": ["'FECHAR'", true] ,"e130z2_client": ["AFTER TRN", true] ,"e140z47_client": ["ENTER", true] ,"e150z47_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14SistemaId',fld:'vSISTEMAID'},{av:'AV15ParametroSistemaCampo',fld:'vPARAMETROSISTEMACAMPO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV14SistemaId',fld:'vSISTEMAID'}],[{av:'AV14SistemaId',fld:'vSISTEMAID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV34AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_138", [25]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15ParametroSistemaCampo", "vPARAMETROSISTEMACAMPO", 0, "char");
   this.setVCMap("AV14SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19ParametroSistemaValor", "vPARAMETROSISTEMAVALOR", 0, "svchar");
   this.setVCMap("AV32Observacao", "vOBSERVACAO", 0, "svchar");
   this.setVCMap("AV16ErroValValidos", "vERROVALVALIDOS", 0, "svchar");
   this.setVCMap("AV17ErroOrdCresc", "vERROORDCRESC", 0, "svchar");
   this.setVCMap("AV20SNExisteContaContabilCli", "vSNEXISTECONTACONTABILCLI", 0, "char");
   this.setVCMap("AV21SNExisteContaContabilFor", "vSNEXISTECONTACONTABILFOR", 0, "char");
   this.setVCMap("AV23Valida", "vVALIDA", 0, "char");
   this.setVCMap("AV27Mes", "vMES", 0, "int");
   this.setVCMap("AV28Ano", "vANO", 0, "int");
   this.setVCMap("AV33snValida", "vSNVALIDA", 0, "char");
   this.setVCMap("A933ParametroSistemaSN", "PARAMETROSISTEMASN", 0, "char");
   this.setVCMap("A934ParametroSitemaNumero", "PARAMETROSITEMANUMERO", 0, "int");
   this.setVCMap("AV40Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 47 ]= ["O418ParametroSistemaObservacao","O417ParametroSistemaValor"] ;
});
gx.setParentObj(new tparametrosistema());
