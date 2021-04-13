/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:29:54.50
*/
gx.evt.autoSkip = false;
gx.define('tordemservicomodelorelatorio', false, function () {
   this.ServerClass =  "tordemservicomodelorelatorio" ;
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
      this.AV18OSModeloRelatorio=gx.fn.getIntegerValue("vOSMODELORELATORIO",'.') ;
      this.AV9Erro=gx.fn.getControlValue("vERRO") ;
      this.AV22Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV21Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Osmodelorelatorio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OSMODELORELATORIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Osmodelorelatoriosncanhoto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OSMODELORELATORIOSNCANHOTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Osmodelorelatoriosel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OSMODELORELATORIOSEL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12dd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13dd2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14dd697_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15dd697_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,24,28,37,39];
   this.GXLastCtrlId =39;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Osmodelorelatorio,isvalid:null,rgrid:[],fld:"OSMODELORELATORIO",gxz:"Z9268OSModeloRelatorio",gxold:"O9268OSModeloRelatorio",gxvar:"A9268OSModeloRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9268OSModeloRelatorio=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9268OSModeloRelatorio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OSMODELORELATORIO",gx.O.A9268OSModeloRelatorio,0)},c2v:function(){gx.O.A9268OSModeloRelatorio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OSMODELORELATORIO",'.')},nac:function(){return !(0==this.AV18OSModeloRelatorio)}};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OSMODELORELATORIODESCRICAO",gxz:"Z9265OSModeloRelatorioDescricao",gxold:"O9265OSModeloRelatorioDescricao",gxvar:"A9265OSModeloRelatorioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9265OSModeloRelatorioDescricao=Value},v2z:function(Value){gx.O.Z9265OSModeloRelatorioDescricao=Value},v2c:function(){gx.fn.setControlValue("OSMODELORELATORIODESCRICAO",gx.O.A9265OSModeloRelatorioDescricao,0)},c2v:function(){gx.O.A9265OSModeloRelatorioDescricao=this.val()},val:function(){return gx.fn.getControlValue("OSMODELORELATORIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Osmodelorelatoriosncanhoto,isvalid:null,rgrid:[],fld:"OSMODELORELATORIOSNCANHOTO",gxz:"Z9267OSModeloRelatorioSNCanhoto",gxold:"O9267OSModeloRelatorioSNCanhoto",gxvar:"A9267OSModeloRelatorioSNCanhoto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9267OSModeloRelatorioSNCanhoto=Value},v2z:function(Value){gx.O.Z9267OSModeloRelatorioSNCanhoto=Value},v2c:function(){gx.fn.setComboBoxValue("OSMODELORELATORIOSNCANHOTO",gx.O.A9267OSModeloRelatorioSNCanhoto)},c2v:function(){gx.O.A9267OSModeloRelatorioSNCanhoto=this.val()},val:function(){return gx.fn.getControlValue("OSMODELORELATORIOSNCANHOTO")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Osmodelorelatoriosel,isvalid:null,rgrid:[],fld:"OSMODELORELATORIOSEL",gxz:"Z9266OSModeloRelatorioSel",gxold:"O9266OSModeloRelatorioSel",gxvar:"A9266OSModeloRelatorioSel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9266OSModeloRelatorioSel=Value},v2z:function(Value){gx.O.Z9266OSModeloRelatorioSel=Value},v2c:function(){gx.fn.setCheckBoxValue("OSMODELORELATORIOSEL",gx.O.A9266OSModeloRelatorioSel,"S")},c2v:function(){gx.O.A9266OSModeloRelatorioSel=this.val()},val:function(){return gx.fn.getControlValue("OSMODELORELATORIOSEL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"BTNHELP",grid:0};
   this.A9268OSModeloRelatorio = 0 ;
   this.Z9268OSModeloRelatorio = 0 ;
   this.O9268OSModeloRelatorio = 0 ;
   this.A9265OSModeloRelatorioDescricao = "" ;
   this.Z9265OSModeloRelatorioDescricao = "" ;
   this.O9265OSModeloRelatorioDescricao = "" ;
   this.A9267OSModeloRelatorioSNCanhoto = "" ;
   this.Z9267OSModeloRelatorioSNCanhoto = "" ;
   this.O9267OSModeloRelatorioSNCanhoto = "" ;
   this.A9266OSModeloRelatorioSel = "" ;
   this.Z9266OSModeloRelatorioSel = "" ;
   this.O9266OSModeloRelatorioSel = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV21Pgmname = "" ;
   this.AV22Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV9Erro = "" ;
   this.AV18OSModeloRelatorio = 0 ;
   this.A9268OSModeloRelatorio = 0 ;
   this.A9265OSModeloRelatorioDescricao = "" ;
   this.A9266OSModeloRelatorioSel = "" ;
   this.A9267OSModeloRelatorioSNCanhoto = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12dd2_client": ["'FECHAR'", true] ,"e13dd2_client": ["AFTER TRN", true] ,"e14dd697_client": ["ENTER", true] ,"e15dd697_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18OSModeloRelatorio", "vOSMODELORELATORIO", 0, "int");
   this.setVCMap("AV9Erro", "vERRO", 0, "svchar");
   this.setVCMap("AV22Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV21Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tordemservicomodelorelatorio());
