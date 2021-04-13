/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:19:3.15
*/
gx.evt.autoSkip = false;
gx.define('hrelacaopagamentosliberados', false, function () {
   this.ServerClass =  "hrelacaopagamentosliberados" ;
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
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraopessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOPESSOA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11cs2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cs2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15cs2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,21,23,26,28,30,33,35,38,40,42,45,47,48,49,52,54,57,59,61,70,72,74,75,76];
   this.GXLastCtrlId =76;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLERBCOPGTO",grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOINICIAL",gxz:"ZV23BancoInicial",gxold:"OV23BancoInicial",gxvar:"AV23BancoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23BancoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23BancoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOINICIAL",gx.O.AV23BancoInicial,0)},c2v:function(){gx.O.AV23BancoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOFINAL",gxz:"ZV24BancoFinal",gxold:"OV24BancoFinal",gxvar:"AV24BancoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24BancoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24BancoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOFINAL",gx.O.AV24BancoFinal,0)},c2v:function(){gx.O.AV24BancoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[35]={fld:"TABLERDTLIBERACAO",grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATALIBINICIAL",gxz:"ZV21DataLibInicial",gxold:"OV21DataLibInicial",gxvar:"AV21DataLibInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataLibInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataLibInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATALIBINICIAL",gx.O.AV21DataLibInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataLibInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATALIBINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATALIBFINAL",gxz:"ZV22DataLibFinal",gxold:"OV22DataLibFinal",gxvar:"AV22DataLibFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DataLibFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22DataLibFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATALIBFINAL",gx.O.AV22DataLibFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22DataLibFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATALIBFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV27PessoaId",gxold:"OV27PessoaId",gxvar:"AV27PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV27PessoaId,0)},c2v:function(){gx.O.AV27PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV28PessoaFantasia",gxold:"OV28PessoaFantasia",gxvar:"AV28PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PessoaFantasia=Value},v2z:function(Value){gx.O.ZV28PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV28PessoaFantasia,0)},c2v:function(){gx.O.AV28PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraopessoa,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOPESSOA",gxz:"ZV19EmpresaPadraoPessoa",gxold:"OV19EmpresaPadraoPessoa",gxvar:"AV19EmpresaPadraoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19EmpresaPadraoPessoa=Value},v2z:function(Value){gx.O.ZV19EmpresaPadraoPessoa=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOPESSOA",gx.O.AV19EmpresaPadraoPessoa,0)},c2v:function(){gx.O.AV19EmpresaPadraoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOPESSOA")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[54]={fld:"TABLERDTPGTO",grid:0};
   GXValidFnc[57]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPAGINICIAL",gxz:"ZV25DataPagInicial",gxold:"OV25DataPagInicial",gxvar:"AV25DataPagInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DataPagInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DataPagInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPAGINICIAL",gx.O.AV25DataPagInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DataPagInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPAGINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPAGFINAL",gxz:"ZV26DataPagFinal",gxold:"OV26DataPagFinal",gxvar:"AV26DataPagFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DataPagFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DataPagFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPAGFINAL",gx.O.AV26DataPagFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DataPagFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPAGFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[70]={fld:"JS", format:2,grid:0};
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   GXValidFnc[74]={fld:"PROMPT_BANCOINICIAL",grid:0};
   GXValidFnc[75]={fld:"PROMPT_BANCOFINAL",grid:0};
   GXValidFnc[76]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV23BancoInicial = 0 ;
   this.ZV23BancoInicial = 0 ;
   this.OV23BancoInicial = 0 ;
   this.AV24BancoFinal = 0 ;
   this.ZV24BancoFinal = 0 ;
   this.OV24BancoFinal = 0 ;
   this.AV21DataLibInicial = gx.date.nullDate() ;
   this.ZV21DataLibInicial = gx.date.nullDate() ;
   this.OV21DataLibInicial = gx.date.nullDate() ;
   this.AV22DataLibFinal = gx.date.nullDate() ;
   this.ZV22DataLibFinal = gx.date.nullDate() ;
   this.OV22DataLibFinal = gx.date.nullDate() ;
   this.AV27PessoaId = 0 ;
   this.ZV27PessoaId = 0 ;
   this.OV27PessoaId = 0 ;
   this.AV28PessoaFantasia = "" ;
   this.ZV28PessoaFantasia = "" ;
   this.OV28PessoaFantasia = "" ;
   this.AV19EmpresaPadraoPessoa = "" ;
   this.ZV19EmpresaPadraoPessoa = "" ;
   this.OV19EmpresaPadraoPessoa = "" ;
   this.AV25DataPagInicial = gx.date.nullDate() ;
   this.ZV25DataPagInicial = gx.date.nullDate() ;
   this.OV25DataPagInicial = gx.date.nullDate() ;
   this.AV26DataPagFinal = gx.date.nullDate() ;
   this.ZV26DataPagFinal = gx.date.nullDate() ;
   this.OV26DataPagFinal = gx.date.nullDate() ;
   this.AV23BancoInicial = 0 ;
   this.AV24BancoFinal = 0 ;
   this.AV21DataLibInicial = gx.date.nullDate() ;
   this.AV22DataLibFinal = gx.date.nullDate() ;
   this.AV27PessoaId = 0 ;
   this.AV28PessoaFantasia = "" ;
   this.AV19EmpresaPadraoPessoa = "" ;
   this.AV25DataPagInicial = gx.date.nullDate() ;
   this.AV26DataPagFinal = gx.date.nullDate() ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A446PessoaFornecedor = "" ;
   this.Events = {"e11cs2_client": ["'FECHAR'", true] ,"e13cs2_client": ["ENTER", true] ,"e15cs2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV23BancoInicial',fld:'vBANCOINICIAL'},{av:'AV24BancoFinal',fld:'vBANCOFINAL'},{av:'AV21DataLibInicial',fld:'vDATALIBINICIAL'},{av:'AV22DataLibFinal',fld:'vDATALIBFINAL'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV19EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'AV25DataPagInicial',fld:'vDATAPAGINICIAL'},{av:'AV26DataPagFinal',fld:'vDATAPAGFINAL'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20EmpresaPadraoTpLancamento',fld:'vEMPRESAPADRAOTPLANCAMENTO'},{av:'AV41Pgmdesc',fld:'vPGMDESC'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV35tpErro',fld:'vTPERRO'},{av:'AV42GXLvl81',fld:'vGXLVL81'},{av:'AV20EmpresaPadraoTpLancamento',fld:'vEMPRESAPADRAOTPLANCAMENTO'},{av:'AV19EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV26DataPagFinal',fld:'vDATAPAGFINAL'},{av:'AV25DataPagInicial',fld:'vDATAPAGINICIAL'},{av:'AV22DataLibFinal',fld:'vDATALIBFINAL'},{av:'AV21DataLibInicial',fld:'vDATALIBINICIAL'},{av:'AV24BancoFinal',fld:'vBANCOFINAL'},{av:'AV23BancoInicial',fld:'vBANCOINICIAL'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.setPrompt("PROMPT_BANCOINICIAL", [26]);
   this.setPrompt("PROMPT_BANCOFINAL", [30]);
   this.setPrompt("PROMPT_PESSOAID", [47]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaopagamentosliberados());
