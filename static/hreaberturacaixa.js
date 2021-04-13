/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:33:31.28
*/
gx.evt.autoSkip = false;
gx.define('hreaberturacaixa', false, function () {
   this.ServerClass =  "hreaberturacaixa" ;
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
   this.e11yu2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13yu2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15yu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,20,26,28,30];
   this.GXLastCtrlId =30;
   GXValidFnc[3]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE4",grid:0};
   GXValidFnc[9]={fld:"TABLE9",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXATRABALHOID",gxz:"ZV22CaixaTrabalhoId",gxold:"OV22CaixaTrabalhoId",gxvar:"AV22CaixaTrabalhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHOID",gx.O.AV22CaixaTrabalhoId,0)},c2v:function(){gx.O.AV22CaixaTrabalhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHOID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TABLE8",grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV23AcessoSistemaSequencia",gxold:"OV23AcessoSistemaSequencia",gxvar:"AV23AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV23AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"BTNHELP",grid:0};
   GXValidFnc[30]={fld:"PROMPT_CAIXATRABALHOID",grid:0};
   this.AV22CaixaTrabalhoId = 0 ;
   this.ZV22CaixaTrabalhoId = 0 ;
   this.OV22CaixaTrabalhoId = 0 ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.ZV23AcessoSistemaSequencia = 0 ;
   this.OV23AcessoSistemaSequencia = 0 ;
   this.AV22CaixaTrabalhoId = 0 ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.A3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.A6613CaixaTrabalhoUsuarioId = "" ;
   this.A3443CaixaTrabalhoId = 0 ;
   this.A3442CaixaTrabalhoEmpresaId = "" ;
   this.Events = {"e11yu2_client": ["'FECHAR'", true] ,"e13yu2_client": ["ENTER", true] ,"e15yu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV23AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21TpErro',fld:'vTPERRO'},{av:'AV22CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'A3442CaixaTrabalhoEmpresaId',fld:'CAIXATRABALHOEMPRESAID'},{av:'AV26CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'},{av:'A6613CaixaTrabalhoUsuarioId',fld:'CAIXATRABALHOUSUARIOID'},{av:'A3438CaixaTrabalhoDtFechamento',fld:'CAIXATRABALHODTFECHAMENTO'},{av:'AV24UsuarioCaixaId',fld:'vUSUARIOCAIXAID'}],[{av:'AV21TpErro',fld:'vTPERRO'},{av:'AV31GXLvl58',fld:'vGXLVL58'},{av:'AV24UsuarioCaixaId',fld:'vUSUARIOCAIXAID'}]];
   this.setPrompt("PROMPT_CAIXATRABALHOID", [14]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hreaberturacaixa());
