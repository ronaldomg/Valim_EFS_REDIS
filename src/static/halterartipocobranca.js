/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:31:10.14
*/
gx.evt.autoSkip = false;
gx.define('halterartipocobranca', false, function () {
   this.ServerClass =  "halterartipocobranca" ;
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
   this.Validv_Tipocobrancaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCOBRANCAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipocobrancaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCOBRANCAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11f92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13f92_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15f92_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,21,23,28,31,33,34,37,39,42,44,46,49,51,57,63,64,65,67,69,70,71,72];
   this.GXLastCtrlId =72;
   GXValidFnc[3]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE8",grid:0};
   GXValidFnc[9]={fld:"TABLE9",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV20PessoaId",gxold:"OV20PessoaId",gxvar:"AV20PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV20PessoaId,0)},c2v:function(){gx.O.AV20PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV30PessoaFantasia",gxold:"OV30PessoaFantasia",gxvar:"AV30PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30PessoaFantasia=Value},v2z:function(Value){gx.O.ZV30PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV30PessoaFantasia,0)},c2v:function(){gx.O.AV30PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAVENCIMENTO",gxz:"ZV21DataVencimento",gxold:"OV21DataVencimento",gxvar:"AV21DataVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAVENCIMENTO",gx.O.AV21DataVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAVENCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipocobrancaid,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAID",gxz:"ZV22TipoCobrancaId",gxold:"OV22TipoCobrancaId",gxvar:"AV22TipoCobrancaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22TipoCobrancaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22TipoCobrancaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAID",gx.O.AV22TipoCobrancaId,0)},c2v:function(){gx.O.AV22TipoCobrancaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCADESCRICAO",gxz:"ZV29TipoCobrancaDescricao",gxold:"OV29TipoCobrancaDescricao",gxvar:"AV29TipoCobrancaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TipoCobrancaDescricao=Value},v2z:function(Value){gx.O.ZV29TipoCobrancaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCADESCRICAO",gx.O.AV29TipoCobrancaDescricao,0)},c2v:function(){gx.O.AV29TipoCobrancaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCOBRANCADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[39]={fld:"TABLE10",grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bancoid,isvalid:null,rgrid:[],fld:"vBANCOID",gxz:"ZV23BancoId",gxold:"OV23BancoId",gxvar:"AV23BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23BancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOID",gx.O.AV23BancoId,0)},c2v:function(){gx.O.AV23BancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOAGENCIAID",gxz:"ZV24BancoAgenciaId",gxold:"OV24BancoAgenciaId",gxvar:"AV24BancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24BancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24BancoAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIAID",gx.O.AV24BancoAgenciaId,0)},c2v:function(){gx.O.AV24BancoAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOVOVENCIMENTO",gxz:"ZV25NovoVencimento",gxold:"OV25NovoVencimento",gxvar:"AV25NovoVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25NovoVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25NovoVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vNOVOVENCIMENTO",gx.O.AV25NovoVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25NovoVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vNOVOVENCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[57]={fld:"TABLE6",grid:0};
   GXValidFnc[63]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV35EmpresaPessoasEmpresaId",gxold:"OV35EmpresaPessoasEmpresaId",gxvar:"AV35EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV35EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV35EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV35EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipocobrancaempresaid,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAEMPRESAID",gxz:"ZV36TipoCobrancaEmpresaId",gxold:"OV36TipoCobrancaEmpresaId",gxvar:"AV36TipoCobrancaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TipoCobrancaEmpresaId=Value},v2z:function(Value){gx.O.ZV36TipoCobrancaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAEMPRESAID",gx.O.AV36TipoCobrancaEmpresaId,0)},c2v:function(){gx.O.AV36TipoCobrancaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCOBRANCAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"JS", format:2,grid:0};
   GXValidFnc[67]={fld:"BTNHELP",grid:0};
   GXValidFnc[69]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[70]={fld:"PROMPT_TIPOCOBRANCAID",grid:0};
   GXValidFnc[71]={fld:"PROMPT_BANCOID",grid:0};
   GXValidFnc[72]={fld:"PROMPT_BANCOAGENCIAID",grid:0};
   this.AV20PessoaId = 0 ;
   this.ZV20PessoaId = 0 ;
   this.OV20PessoaId = 0 ;
   this.AV30PessoaFantasia = "" ;
   this.ZV30PessoaFantasia = "" ;
   this.OV30PessoaFantasia = "" ;
   this.AV21DataVencimento = gx.date.nullDate() ;
   this.ZV21DataVencimento = gx.date.nullDate() ;
   this.OV21DataVencimento = gx.date.nullDate() ;
   this.AV22TipoCobrancaId = 0 ;
   this.ZV22TipoCobrancaId = 0 ;
   this.OV22TipoCobrancaId = 0 ;
   this.AV29TipoCobrancaDescricao = "" ;
   this.ZV29TipoCobrancaDescricao = "" ;
   this.OV29TipoCobrancaDescricao = "" ;
   this.AV23BancoId = 0 ;
   this.ZV23BancoId = 0 ;
   this.OV23BancoId = 0 ;
   this.AV24BancoAgenciaId = 0 ;
   this.ZV24BancoAgenciaId = 0 ;
   this.OV24BancoAgenciaId = 0 ;
   this.AV25NovoVencimento = gx.date.nullDate() ;
   this.ZV25NovoVencimento = gx.date.nullDate() ;
   this.OV25NovoVencimento = gx.date.nullDate() ;
   this.AV35EmpresaPessoasEmpresaId = "" ;
   this.ZV35EmpresaPessoasEmpresaId = "" ;
   this.OV35EmpresaPessoasEmpresaId = "" ;
   this.AV36TipoCobrancaEmpresaId = "" ;
   this.ZV36TipoCobrancaEmpresaId = "" ;
   this.OV36TipoCobrancaEmpresaId = "" ;
   this.AV20PessoaId = 0 ;
   this.AV30PessoaFantasia = "" ;
   this.AV21DataVencimento = gx.date.nullDate() ;
   this.AV22TipoCobrancaId = 0 ;
   this.AV29TipoCobrancaDescricao = "" ;
   this.AV23BancoId = 0 ;
   this.AV24BancoAgenciaId = 0 ;
   this.AV25NovoVencimento = gx.date.nullDate() ;
   this.AV35EmpresaPessoasEmpresaId = "" ;
   this.AV36TipoCobrancaEmpresaId = "" ;
   this.A953BancoAgenciaId = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A947BancoId = 0 ;
   this.A988TipoCobrancaFormaCob = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.A991TipoCobrancaEmpresaId = "" ;
   this.A445PessoaCliente = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.Events = {"e11f92_client": ["'FECHAR'", true] ,"e13f92_client": ["ENTER", true] ,"e15f92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20PessoaId',fld:'vPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV35EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'AV21DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV22TipoCobrancaId',fld:'vTIPOCOBRANCAID'},{av:'A991TipoCobrancaEmpresaId',fld:'TIPOCOBRANCAEMPRESAID'},{av:'AV36TipoCobrancaEmpresaId',fld:'vTIPOCOBRANCAEMPRESAID'},{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'A988TipoCobrancaFormaCob',fld:'TIPOCOBRANCAFORMACOB'},{av:'AV23BancoId',fld:'vBANCOID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV37BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'AV24BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'AV25NovoVencimento',fld:'vNOVOVENCIMENTO'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV39TotalRegistrosAlterados',fld:'vTOTALREGISTROSALTERADOS'},{av:'AV26tpErro',fld:'vTPERRO'},{av:'AV44GXLvl54',fld:'vGXLVL54'},{av:'AV45GXLvl79',fld:'vGXLVL79'},{av:'AV46GXLvl99',fld:'vGXLVL99'},{av:'AV47GXLvl112',fld:'vGXLVL112'},{av:'AV38QtdeContasAlteradas',fld:'vQTDECONTASALTERADAS'},{av:'AV25NovoVencimento',fld:'vNOVOVENCIMENTO'},{av:'AV24BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV23BancoId',fld:'vBANCOID'},{av:'AV22TipoCobrancaId',fld:'vTIPOCOBRANCAID'},{av:'AV21DataVencimento',fld:'vDATAVENCIMENTO'},{av:'AV20PessoaId',fld:'vPESSOAID'},{av:'AV36TipoCobrancaEmpresaId',fld:'vTIPOCOBRANCAEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.setPrompt("PROMPT_PESSOAID", [17]);
   this.setPrompt("PROMPT_TIPOCOBRANCAID", [33]);
   this.setPrompt("PROMPT_BANCOID", [42]);
   this.setPrompt("PROMPT_BANCOAGENCIAID", [46]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new halterartipocobranca());
