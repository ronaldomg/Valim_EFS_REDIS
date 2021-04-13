/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:43:2.35
*/
gx.evt.autoSkip = false;
gx.define('ttmpdirf', false, function () {
   this.ServerClass =  "ttmpdirf" ;
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
      this.A11539TmpDirfValorDiaria=gx.fn.getDecimalValue("TMPDIRFVALORDIARIA",'.',',') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tmpdirfnumeroconta=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tmpdirfnumeroconta",["gx.O.A3051TmpDirfNumeroConta", 'gx.date.urlDate(gx.O.A3043TmpDirfDtEmissao,"DMY4")', 'gx.date.urlDate(gx.O.A3044TmpDirfDtPagamento,"DMY4")', "gx.O.A3045TmpDirfCPF", "gx.O.A3046TmpDirfCNPJ", "gx.O.A3047TmpDirfRazaoSocial", "gx.num.urlDecimal(gx.O.A3048TmpDirfValorConta,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3049TmpDirfValorINSS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11539TmpDirfValorDiaria,\'.\',\',\')"],["A3043TmpDirfDtEmissao", "A3044TmpDirfDtPagamento", "A3045TmpDirfCPF", "A3046TmpDirfCNPJ", "A3047TmpDirfRazaoSocial", "A3048TmpDirfValorConta", "A3049TmpDirfValorINSS", "A11539TmpDirfValorDiaria", "Gx_mode", "Z3051TmpDirfNumeroConta", "Z3043TmpDirfDtEmissao", "Z3044TmpDirfDtPagamento", "Z3045TmpDirfCPF", "Z3046TmpDirfCNPJ", "Z3047TmpDirfRazaoSocial", "Z3048TmpDirfValorConta", "Z3049TmpDirfValorINSS", "Z11539TmpDirfValorDiaria", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e115p315_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e125p315_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e135p315_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,43,45,48,50,54,63,65];
   this.GXLastCtrlId =65;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tmpdirfnumeroconta,isvalid:null,rgrid:[],fld:"TMPDIRFNUMEROCONTA",gxz:"Z3051TmpDirfNumeroConta",gxold:"O3051TmpDirfNumeroConta",gxvar:"A3051TmpDirfNumeroConta",ucs:[],op:[50,45,40,35,30,25,20],ip:[50,45,40,35,30,25,20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3051TmpDirfNumeroConta=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3051TmpDirfNumeroConta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TMPDIRFNUMEROCONTA",gx.O.A3051TmpDirfNumeroConta,0)},c2v:function(){gx.O.A3051TmpDirfNumeroConta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TMPDIRFNUMEROCONTA",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TMPDIRFDTEMISSAO",gxz:"Z3043TmpDirfDtEmissao",gxold:"O3043TmpDirfDtEmissao",gxvar:"A3043TmpDirfDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3043TmpDirfDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3043TmpDirfDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TMPDIRFDTEMISSAO",gx.O.A3043TmpDirfDtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3043TmpDirfDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("TMPDIRFDTEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TMPDIRFDTPAGAMENTO",gxz:"Z3044TmpDirfDtPagamento",gxold:"O3044TmpDirfDtPagamento",gxvar:"A3044TmpDirfDtPagamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3044TmpDirfDtPagamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3044TmpDirfDtPagamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TMPDIRFDTPAGAMENTO",gx.O.A3044TmpDirfDtPagamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3044TmpDirfDtPagamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("TMPDIRFDTPAGAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TMPDIRFCPF",gxz:"Z3045TmpDirfCPF",gxold:"O3045TmpDirfCPF",gxvar:"A3045TmpDirfCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3045TmpDirfCPF=Value},v2z:function(Value){gx.O.Z3045TmpDirfCPF=Value},v2c:function(){gx.fn.setControlValue("TMPDIRFCPF",gx.O.A3045TmpDirfCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3045TmpDirfCPF=this.val()},val:function(){return gx.fn.getControlValue("TMPDIRFCPF")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TMPDIRFCNPJ",gxz:"Z3046TmpDirfCNPJ",gxold:"O3046TmpDirfCNPJ",gxvar:"A3046TmpDirfCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3046TmpDirfCNPJ=Value},v2z:function(Value){gx.O.Z3046TmpDirfCNPJ=Value},v2c:function(){gx.fn.setControlValue("TMPDIRFCNPJ",gx.O.A3046TmpDirfCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3046TmpDirfCNPJ=this.val()},val:function(){return gx.fn.getControlValue("TMPDIRFCNPJ")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TMPDIRFRAZAOSOCIAL",gxz:"Z3047TmpDirfRazaoSocial",gxold:"O3047TmpDirfRazaoSocial",gxvar:"A3047TmpDirfRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3047TmpDirfRazaoSocial=Value},v2z:function(Value){gx.O.Z3047TmpDirfRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("TMPDIRFRAZAOSOCIAL",gx.O.A3047TmpDirfRazaoSocial,0)},c2v:function(){gx.O.A3047TmpDirfRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("TMPDIRFRAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TMPDIRFVALORCONTA",gxz:"Z3048TmpDirfValorConta",gxold:"O3048TmpDirfValorConta",gxvar:"A3048TmpDirfValorConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3048TmpDirfValorConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3048TmpDirfValorConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TMPDIRFVALORCONTA",gx.O.A3048TmpDirfValorConta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3048TmpDirfValorConta=this.val()},val:function(){return gx.fn.getDecimalValue("TMPDIRFVALORCONTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TMPDIRFVALORINSS",gxz:"Z3049TmpDirfValorINSS",gxold:"O3049TmpDirfValorINSS",gxvar:"A3049TmpDirfValorINSS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3049TmpDirfValorINSS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3049TmpDirfValorINSS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TMPDIRFVALORINSS",gx.O.A3049TmpDirfValorINSS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3049TmpDirfValorINSS=this.val()},val:function(){return gx.fn.getDecimalValue("TMPDIRFVALORINSS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={fld:"BTNHELP",grid:0};
   this.A3051TmpDirfNumeroConta = 0 ;
   this.Z3051TmpDirfNumeroConta = 0 ;
   this.O3051TmpDirfNumeroConta = 0 ;
   this.A3043TmpDirfDtEmissao = gx.date.nullDate() ;
   this.Z3043TmpDirfDtEmissao = gx.date.nullDate() ;
   this.O3043TmpDirfDtEmissao = gx.date.nullDate() ;
   this.A3044TmpDirfDtPagamento = gx.date.nullDate() ;
   this.Z3044TmpDirfDtPagamento = gx.date.nullDate() ;
   this.O3044TmpDirfDtPagamento = gx.date.nullDate() ;
   this.A3045TmpDirfCPF = "" ;
   this.Z3045TmpDirfCPF = "" ;
   this.O3045TmpDirfCPF = "" ;
   this.A3046TmpDirfCNPJ = "" ;
   this.Z3046TmpDirfCNPJ = "" ;
   this.O3046TmpDirfCNPJ = "" ;
   this.A3047TmpDirfRazaoSocial = "" ;
   this.Z3047TmpDirfRazaoSocial = "" ;
   this.O3047TmpDirfRazaoSocial = "" ;
   this.A3048TmpDirfValorConta = 0 ;
   this.Z3048TmpDirfValorConta = 0 ;
   this.O3048TmpDirfValorConta = 0 ;
   this.A3049TmpDirfValorINSS = 0 ;
   this.Z3049TmpDirfValorINSS = 0 ;
   this.O3049TmpDirfValorINSS = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A3051TmpDirfNumeroConta = 0 ;
   this.A3043TmpDirfDtEmissao = gx.date.nullDate() ;
   this.A3044TmpDirfDtPagamento = gx.date.nullDate() ;
   this.A3045TmpDirfCPF = "" ;
   this.A3046TmpDirfCNPJ = "" ;
   this.A3047TmpDirfRazaoSocial = "" ;
   this.A3048TmpDirfValorConta = 0 ;
   this.A3049TmpDirfValorINSS = 0 ;
   this.A11539TmpDirfValorDiaria = 0 ;
   this.Events = {"e125p315_client": ["ENTER", true] ,"e135p315_client": ["CANCEL", true] ,"e115p315_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A11539TmpDirfValorDiaria", "TMPDIRFVALORDIARIA", 0, "decimal");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new ttmpdirf());
