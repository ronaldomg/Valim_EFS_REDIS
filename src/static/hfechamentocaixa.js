/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:33:30.38
*/
gx.evt.autoSkip = false;
gx.define('hfechamentocaixa', false, function () {
   this.ServerClass =  "hfechamentocaixa" ;
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
   this.Validv_Usuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11yt2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13yt2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15yt2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,28,29,31,32,33];
   this.GXLastCtrlId =33;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV28UsuarioId",gxold:"OV28UsuarioId",gxvar:"AV28UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28UsuarioId=Value},v2z:function(Value){gx.O.ZV28UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV28UsuarioId,0)},c2v:function(){gx.O.AV28UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV31UsuarioNome",gxold:"OV31UsuarioNome",gxvar:"AV31UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31UsuarioNome=Value},v2z:function(Value){gx.O.ZV31UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV31UsuarioNome,0)},c2v:function(){gx.O.AV31UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXATRABALHOID",gxz:"ZV22CaixaTrabalhoId",gxold:"OV22CaixaTrabalhoId",gxvar:"AV22CaixaTrabalhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHOID",gx.O.AV22CaixaTrabalhoId,0)},c2v:function(){gx.O.AV22CaixaTrabalhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV23AcessoSistemaSequencia",gxold:"OV23AcessoSistemaSequencia",gxvar:"AV23AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV23AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"JS", format:2,grid:0};
   GXValidFnc[31]={fld:"BTNHELP",grid:0};
   GXValidFnc[32]={fld:"PROMPT_USUARIOID",grid:0};
   GXValidFnc[33]={fld:"PROMPT_CAIXATRABALHOID",grid:0};
   this.AV28UsuarioId = "" ;
   this.ZV28UsuarioId = "" ;
   this.OV28UsuarioId = "" ;
   this.AV31UsuarioNome = "" ;
   this.ZV31UsuarioNome = "" ;
   this.OV31UsuarioNome = "" ;
   this.AV22CaixaTrabalhoId = 0 ;
   this.ZV22CaixaTrabalhoId = 0 ;
   this.OV22CaixaTrabalhoId = 0 ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.ZV23AcessoSistemaSequencia = 0 ;
   this.OV23AcessoSistemaSequencia = 0 ;
   this.AV28UsuarioId = "" ;
   this.AV31UsuarioNome = "" ;
   this.AV22CaixaTrabalhoId = 0 ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.A3443CaixaTrabalhoId = 0 ;
   this.A3442CaixaTrabalhoEmpresaId = "" ;
   this.A6613CaixaTrabalhoUsuarioId = "" ;
   this.A3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.A3439UsuarioCaixaId = "" ;
   this.Events = {"e11yt2_client": ["'FECHAR'", true] ,"e13yt2_client": ["ENTER", true] ,"e15yt2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV23AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21TpErro',fld:'vTPERRO'},{av:'AV27Data',fld:'vDATA'},{av:'AV24UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV22CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV28UsuarioId',fld:'vUSUARIOID'},{av:'A3439UsuarioCaixaId',fld:'USUARIOCAIXAID'},{av:'A3442CaixaTrabalhoEmpresaId',fld:'CAIXATRABALHOEMPRESAID'},{av:'AV26CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'},{av:'A6613CaixaTrabalhoUsuarioId',fld:'CAIXATRABALHOUSUARIOID'},{av:'A3438CaixaTrabalhoDtFechamento',fld:'CAIXATRABALHODTFECHAMENTO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV38ParmRelat',fld:'vPARMRELAT'}],[{av:'AV27Data',fld:'vDATA'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV34DescFechamento',fld:'vDESCFECHAMENTO'},{av:'AV22CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV24UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV36SNIMPFECHACAIXA',fld:'vSNIMPFECHACAIXA'},{av:'AV21TpErro',fld:'vTPERRO'},{av:'AV30SNCaixaBranco',fld:'vSNCAIXABRANCO'},{av:'AV47GXLvl99',fld:'vGXLVL99'},{av:'AV29CaixasUsuario',fld:'vCAIXASUSUARIO'},{av:'AV48GXLvl122',fld:'vGXLVL122'},{av:'AV50GXLvl153',fld:'vGXLVL153'},{av:'AV40NomeProc',fld:'vNOMEPROC'},{av:'AV37Random',fld:'vRANDOM'},{av:'AV41NomeSessao',fld:'vNOMESESSAO'}]];
   this.setPrompt("PROMPT_USUARIOID", [13]);
   this.setPrompt("PROMPT_CAIXATRABALHOID", [19]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfechamentocaixa());
