/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:25:26.54
*/
gx.evt.autoSkip = false;
gx.define('tsistemainstalacao', false, function () {
   this.ServerClass =  "tsistemainstalacao" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Sistemainstalacaosistemaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Sistemainstalacaosistemaid",["gx.O.A732SistemaInstalacaoSistemaId", "gx.O.A733SistemaInstalacaoSistemaNome", "gx.O.A734SistemaInstalacaoSistemaUltimo", "gx.O.A735SistemaInstalacaoSistemaVersao"],["A733SistemaInstalacaoSistemaNome", "A734SistemaInstalacaoSistemaUltimo", "A735SistemaInstalacaoSistemaVersao", "Gx_mode", "Z732SistemaInstalacaoSistemaId", "Z733SistemaInstalacaoSistemaNome", "Z734SistemaInstalacaoSistemaUltimo", "Z735SistemaInstalacaoSistemaVersao", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e112093_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e122093_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132093_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,31,40,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sistemainstalacaosistemaid,isvalid:null,rgrid:[],fld:"SISTEMAINSTALACAOSISTEMAID",gxz:"Z732SistemaInstalacaoSistemaId",gxold:"O732SistemaInstalacaoSistemaId",gxvar:"A732SistemaInstalacaoSistemaId",ucs:[],op:[30,25,20],ip:[30,25,20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A732SistemaInstalacaoSistemaId=Value},v2z:function(Value){gx.O.Z732SistemaInstalacaoSistemaId=Value},v2c:function(){gx.fn.setControlValue("SISTEMAINSTALACAOSISTEMAID",gx.O.A732SistemaInstalacaoSistemaId,0)},c2v:function(){gx.O.A732SistemaInstalacaoSistemaId=this.val()},val:function(){return gx.fn.getControlValue("SISTEMAINSTALACAOSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAINSTALACAOSISTEMANOME",gxz:"Z733SistemaInstalacaoSistemaNome",gxold:"O733SistemaInstalacaoSistemaNome",gxvar:"A733SistemaInstalacaoSistemaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A733SistemaInstalacaoSistemaNome=Value},v2z:function(Value){gx.O.Z733SistemaInstalacaoSistemaNome=Value},v2c:function(){gx.fn.setControlValue("SISTEMAINSTALACAOSISTEMANOME",gx.O.A733SistemaInstalacaoSistemaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A733SistemaInstalacaoSistemaNome=this.val()},val:function(){return gx.fn.getControlValue("SISTEMAINSTALACAOSISTEMANOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAINSTALACAOSISTEMAULTIMO",gxz:"Z734SistemaInstalacaoSistemaUltimo",gxold:"O734SistemaInstalacaoSistemaUltimo",gxvar:"A734SistemaInstalacaoSistemaUltimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A734SistemaInstalacaoSistemaUltimo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z734SistemaInstalacaoSistemaUltimo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SISTEMAINSTALACAOSISTEMAULTIMO",gx.O.A734SistemaInstalacaoSistemaUltimo,0)},c2v:function(){gx.O.A734SistemaInstalacaoSistemaUltimo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SISTEMAINSTALACAOSISTEMAULTIMO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAINSTALACAOSISTEMAVERSAO",gxz:"Z735SistemaInstalacaoSistemaVersao",gxold:"O735SistemaInstalacaoSistemaVersao",gxvar:"A735SistemaInstalacaoSistemaVersao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A735SistemaInstalacaoSistemaVersao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z735SistemaInstalacaoSistemaVersao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SISTEMAINSTALACAOSISTEMAVERSAO",gx.O.A735SistemaInstalacaoSistemaVersao,0)},c2v:function(){gx.O.A735SistemaInstalacaoSistemaVersao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SISTEMAINSTALACAOSISTEMAVERSAO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV15AcessoSistemaSequencia",gxold:"OV15AcessoSistemaSequencia",gxvar:"AV15AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV15AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.A732SistemaInstalacaoSistemaId = "" ;
   this.Z732SistemaInstalacaoSistemaId = "" ;
   this.O732SistemaInstalacaoSistemaId = "" ;
   this.A733SistemaInstalacaoSistemaNome = "" ;
   this.Z733SistemaInstalacaoSistemaNome = "" ;
   this.O733SistemaInstalacaoSistemaNome = "" ;
   this.A734SistemaInstalacaoSistemaUltimo = 0 ;
   this.Z734SistemaInstalacaoSistemaUltimo = 0 ;
   this.O734SistemaInstalacaoSistemaUltimo = 0 ;
   this.A735SistemaInstalacaoSistemaVersao = 0 ;
   this.Z735SistemaInstalacaoSistemaVersao = 0 ;
   this.O735SistemaInstalacaoSistemaVersao = 0 ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.ZV15AcessoSistemaSequencia = 0 ;
   this.OV15AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A732SistemaInstalacaoSistemaId = "" ;
   this.A733SistemaInstalacaoSistemaNome = "" ;
   this.A734SistemaInstalacaoSistemaUltimo = 0 ;
   this.A735SistemaInstalacaoSistemaVersao = 0 ;
   this.Events = {"e122093_client": ["ENTER", true] ,"e132093_client": ["CANCEL", true] ,"e112093_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsistemainstalacao());
