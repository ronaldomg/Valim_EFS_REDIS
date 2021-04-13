/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:58.0
*/
gx.evt.autoSkip = false;
gx.define('hcancelatitular', false, function () {
   this.ServerClass =  "hcancelatitular" ;
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
   this.e12ko2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ko2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16ko2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,24,25,26];
   this.GXLastCtrlId =26;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Categoriaid,isvalid:null,rgrid:[],fld:"vCATEGORIAID",gxz:"ZV13CategoriaId",gxold:"OV13CategoriaId",gxvar:"AV13CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13CategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIAID",gx.O.AV13CategoriaId,0)},c2v:function(){gx.O.AV13CategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIADESCABREVIADA",gxz:"ZV14CategoriaDescAbreviada",gxold:"OV14CategoriaDescAbreviada",gxvar:"AV14CategoriaDescAbreviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14CategoriaDescAbreviada=Value},v2z:function(Value){gx.O.ZV14CategoriaDescAbreviada=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIADESCABREVIADA",gx.O.AV14CategoriaDescAbreviada,0)},c2v:function(){gx.O.AV14CategoriaDescAbreviada=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIADESCABREVIADA")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTRANFEREDADOS",gxz:"ZV11snTranfereDados",gxold:"OV11snTranfereDados",gxvar:"AV11snTranfereDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11snTranfereDados=Value},v2z:function(Value){gx.O.ZV11snTranfereDados=Value},v2c:function(){gx.fn.setComboBoxValue("vSNTRANFEREDADOS",gx.O.AV11snTranfereDados)},c2v:function(){gx.O.AV11snTranfereDados=this.val()},val:function(){return gx.fn.getControlValue("vSNTRANFEREDADOS")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"JS", format:1,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Categoriaempresaid,isvalid:null,rgrid:[],fld:"vCATEGORIAEMPRESAID",gxz:"ZV15CategoriaEmpresaId",gxold:"OV15CategoriaEmpresaId",gxvar:"AV15CategoriaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CategoriaEmpresaId=Value},v2z:function(Value){gx.O.ZV15CategoriaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIAEMPRESAID",gx.O.AV15CategoriaEmpresaId,0)},c2v:function(){gx.O.AV15CategoriaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"PROMPT_CATEGORIAID",grid:0};
   this.AV13CategoriaId = 0 ;
   this.ZV13CategoriaId = 0 ;
   this.OV13CategoriaId = 0 ;
   this.AV14CategoriaDescAbreviada = "" ;
   this.ZV14CategoriaDescAbreviada = "" ;
   this.OV14CategoriaDescAbreviada = "" ;
   this.AV11snTranfereDados = "" ;
   this.ZV11snTranfereDados = "" ;
   this.OV11snTranfereDados = "" ;
   this.AV15CategoriaEmpresaId = "" ;
   this.ZV15CategoriaEmpresaId = "" ;
   this.OV15CategoriaEmpresaId = "" ;
   this.AV13CategoriaId = 0 ;
   this.AV14CategoriaDescAbreviada = "" ;
   this.AV11snTranfereDados = "" ;
   this.AV15CategoriaEmpresaId = "" ;
   this.AV16PessoaId = 0 ;
   this.A2622CategoriaId = 0 ;
   this.A2621CategoriaEmpresaId = "" ;
   this.A2596CategoriaDescAbreviada = "" ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.Events = {"e12ko2_client": ["ENTER", true] ,"e13ko2_client": ["'FECHAR'", true] ,"e16ko2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV16PessoaId',fld:'vPESSOAID'}],[]];
   this.EvtParms["ENTER"] = [[{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV22ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'AV16PessoaId',fld:'vPESSOAID'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'AV13CategoriaId',fld:'vCATEGORIAID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV15CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2596CategoriaDescAbreviada',fld:'CATEGORIADESCABREVIADA'},{av:'AV11snTranfereDados',fld:'vSNTRANFEREDADOS'}],[{av:'AV12snErro',fld:'vSNERRO'},{av:'AV33GXLvl49',fld:'vGXLVL49'},{av:'AV14CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV21CategoriaAux',fld:'vCATEGORIAAUX'},{av:'AV20snCancelado',fld:'vSNCANCELADO'},{av:'AV24RetornoWebService',fld:'vRETORNOWEBSERVICE'},{av:'AV27Chamada',fld:'vCHAMADA'},{av:'AV26retHttp',fld:'vRETHTTP'},{av:'AV25Pos',fld:'vPOS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16PessoaId',fld:'vPESSOAID'}],[]];
   this.setPrompt("PROMPT_CATEGORIAID", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV16PessoaId", "vPESSOAID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcancelatitular());
