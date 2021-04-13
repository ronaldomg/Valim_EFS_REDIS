/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:43:6.17
*/
gx.evt.autoSkip = false;
gx.define('ttmpdirfretencao', false, function () {
   this.ServerClass =  "ttmpdirfretencao" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
   this.Valid_Tmpdirfnumeroconta=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tmpdirfnumeroconta",["gx.O.A3051TmpDirfNumeroConta"],[]);
      return true;
   }
   this.Valid_Tmpdirfretencaocodigoretencao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tmpdirfretencaocodigoretencao",["gx.O.A3051TmpDirfNumeroConta", "gx.O.A3067TmpDirfRetencaoCodigoRetencao", "gx.num.urlDecimal(gx.O.A3066TmpDirfRetencaoValor,\'.\',\',\')"],["A3066TmpDirfRetencaoValor", "Gx_mode", "Z3051TmpDirfNumeroConta", "Z3067TmpDirfRetencaoCodigoRetencao", "Z3066TmpDirfRetencaoValor", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e115r320_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e125r320_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e135r320_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,26,35,37,39];
   this.GXLastCtrlId =39;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tmpdirfnumeroconta,isvalid:null,rgrid:[],fld:"TMPDIRFNUMEROCONTA",gxz:"Z3051TmpDirfNumeroConta",gxold:"O3051TmpDirfNumeroConta",gxvar:"A3051TmpDirfNumeroConta",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3051TmpDirfNumeroConta=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3051TmpDirfNumeroConta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TMPDIRFNUMEROCONTA",gx.O.A3051TmpDirfNumeroConta,0)},c2v:function(){gx.O.A3051TmpDirfNumeroConta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TMPDIRFNUMEROCONTA",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tmpdirfretencaocodigoretencao,isvalid:null,rgrid:[],fld:"TMPDIRFRETENCAOCODIGORETENCAO",gxz:"Z3067TmpDirfRetencaoCodigoRetencao",gxold:"O3067TmpDirfRetencaoCodigoRetencao",gxvar:"A3067TmpDirfRetencaoCodigoRetencao",ucs:[],op:[25],ip:[25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3067TmpDirfRetencaoCodigoRetencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3067TmpDirfRetencaoCodigoRetencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TMPDIRFRETENCAOCODIGORETENCAO",gx.O.A3067TmpDirfRetencaoCodigoRetencao,0)},c2v:function(){gx.O.A3067TmpDirfRetencaoCodigoRetencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TMPDIRFRETENCAOCODIGORETENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TMPDIRFRETENCAOVALOR",gxz:"Z3066TmpDirfRetencaoValor",gxold:"O3066TmpDirfRetencaoValor",gxvar:"A3066TmpDirfRetencaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3066TmpDirfRetencaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3066TmpDirfRetencaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TMPDIRFRETENCAOVALOR",gx.O.A3066TmpDirfRetencaoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3066TmpDirfRetencaoValor=this.val()},val:function(){return gx.fn.getDecimalValue("TMPDIRFRETENCAOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"PROMPT_3051",grid:320};
   this.A3051TmpDirfNumeroConta = 0 ;
   this.Z3051TmpDirfNumeroConta = 0 ;
   this.O3051TmpDirfNumeroConta = 0 ;
   this.A3067TmpDirfRetencaoCodigoRetencao = 0 ;
   this.Z3067TmpDirfRetencaoCodigoRetencao = 0 ;
   this.O3067TmpDirfRetencaoCodigoRetencao = 0 ;
   this.A3066TmpDirfRetencaoValor = 0 ;
   this.Z3066TmpDirfRetencaoValor = 0 ;
   this.O3066TmpDirfRetencaoValor = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A3051TmpDirfNumeroConta = 0 ;
   this.A3067TmpDirfRetencaoCodigoRetencao = 0 ;
   this.A3066TmpDirfRetencaoValor = 0 ;
   this.Events = {"e125r320_client": ["ENTER", true] ,"e135r320_client": ["CANCEL", true] ,"e115r320_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_3051", [14]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new ttmpdirfretencao());
