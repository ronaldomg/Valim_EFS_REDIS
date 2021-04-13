/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:36.18
*/
gx.evt.autoSkip = false;
gx.define('hreativartitular', false, function () {
   this.ServerClass =  "hreativartitular" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV16PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
   };
   this.Validv_Categoriaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCATEGORIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaidnovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAIDNOVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Categoriaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCATEGORIAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12lh2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13lh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15lh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,17,25,26];
   this.GXLastCtrlId =26;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Categoriaid,isvalid:null,rgrid:[],fld:"vCATEGORIAID",gxz:"ZV13CategoriaId",gxold:"OV13CategoriaId",gxvar:"AV13CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13CategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIAID",gx.O.AV13CategoriaId,0)},c2v:function(){gx.O.AV13CategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIADESCABREVIADA",gxz:"ZV14CategoriaDescAbreviada",gxold:"OV14CategoriaDescAbreviada",gxvar:"AV14CategoriaDescAbreviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14CategoriaDescAbreviada=Value},v2z:function(Value){gx.O.ZV14CategoriaDescAbreviada=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIADESCABREVIADA",gx.O.AV14CategoriaDescAbreviada,0)},c2v:function(){gx.O.AV14CategoriaDescAbreviada=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIADESCABREVIADA")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaidnovo,isvalid:null,rgrid:[],fld:"vPESSOAIDNOVO",gxz:"ZV22PessoaIdNovo",gxold:"OV22PessoaIdNovo",gxvar:"AV22PessoaIdNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PessoaIdNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PessoaIdNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDNOVO",gx.O.AV22PessoaIdNovo,0)},c2v:function(){gx.O.AV22PessoaIdNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDNOVO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Categoriaempresaid,isvalid:null,rgrid:[],fld:"vCATEGORIAEMPRESAID",gxz:"ZV15CategoriaEmpresaId",gxold:"OV15CategoriaEmpresaId",gxvar:"AV15CategoriaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CategoriaEmpresaId=Value},v2z:function(Value){gx.O.ZV15CategoriaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIAEMPRESAID",gx.O.AV15CategoriaEmpresaId,0)},c2v:function(){gx.O.AV15CategoriaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"JS", format:1,grid:0};
   GXValidFnc[26]={fld:"PROMPT_CATEGORIAID",grid:0};
   this.AV13CategoriaId = 0 ;
   this.ZV13CategoriaId = 0 ;
   this.OV13CategoriaId = 0 ;
   this.AV14CategoriaDescAbreviada = "" ;
   this.ZV14CategoriaDescAbreviada = "" ;
   this.OV14CategoriaDescAbreviada = "" ;
   this.AV22PessoaIdNovo = 0 ;
   this.ZV22PessoaIdNovo = 0 ;
   this.OV22PessoaIdNovo = 0 ;
   this.AV15CategoriaEmpresaId = "" ;
   this.ZV15CategoriaEmpresaId = "" ;
   this.OV15CategoriaEmpresaId = "" ;
   this.AV13CategoriaId = 0 ;
   this.AV14CategoriaDescAbreviada = "" ;
   this.AV22PessoaIdNovo = 0 ;
   this.AV15CategoriaEmpresaId = "" ;
   this.AV16PessoaId = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A2622CategoriaId = 0 ;
   this.A2621CategoriaEmpresaId = "" ;
   this.A2596CategoriaDescAbreviada = "" ;
   this.Events = {"e12lh2_client": ["ENTER", true] ,"e13lh2_client": ["'FECHAR'", true] ,"e15lh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13CategoriaId',fld:'vCATEGORIAID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV15CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2596CategoriaDescAbreviada',fld:'CATEGORIADESCABREVIADA'},{av:'AV22PessoaIdNovo',fld:'vPESSOAIDNOVO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV17EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV16PessoaId',fld:'vPESSOAID'}],[{av:'AV12snErro',fld:'vSNERRO'},{av:'AV27GXLvl38',fld:'vGXLVL38'},{av:'AV14CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV21CategoriaAux',fld:'vCATEGORIAAUX'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16PessoaId',fld:'vPESSOAID'}],[]];
   this.setPrompt("PROMPT_CATEGORIAID", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV16PessoaId", "vPESSOAID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hreativartitular());
