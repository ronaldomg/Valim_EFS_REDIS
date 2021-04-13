/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:13.63
*/
gx.evt.autoSkip = false;
gx.define('halteracategoria', false, function () {
   this.ServerClass =  "halteracategoria" ;
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
   this.e12l72_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13l72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15l72_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,19,20,21,22];
   this.GXLastCtrlId =22;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Categoriaid,isvalid:null,rgrid:[],fld:"vCATEGORIAID",gxz:"ZV14CategoriaId",gxold:"OV14CategoriaId",gxvar:"AV14CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14CategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIAID",gx.O.AV14CategoriaId,0)},c2v:function(){gx.O.AV14CategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIADESCRICAO",gxz:"ZV16CategoriaDescricao",gxold:"OV16CategoriaDescricao",gxvar:"AV16CategoriaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CategoriaDescricao=Value},v2z:function(Value){gx.O.ZV16CategoriaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIADESCRICAO",gx.O.AV16CategoriaDescricao,0)},c2v:function(){gx.O.AV16CategoriaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"JS", format:2,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV15PessoaId",gxold:"OV15PessoaId",gxvar:"AV15PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV15PessoaId,0)},c2v:function(){gx.O.AV15PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"PROMPT_CATEGORIAID",grid:0};
   this.AV14CategoriaId = 0 ;
   this.ZV14CategoriaId = 0 ;
   this.OV14CategoriaId = 0 ;
   this.AV16CategoriaDescricao = "" ;
   this.ZV16CategoriaDescricao = "" ;
   this.OV16CategoriaDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV15PessoaId = 0 ;
   this.ZV15PessoaId = 0 ;
   this.OV15PessoaId = 0 ;
   this.AV14CategoriaId = 0 ;
   this.AV16CategoriaDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV15PessoaId = 0 ;
   this.A2622CategoriaId = 0 ;
   this.A2621CategoriaEmpresaId = "" ;
   this.A2596CategoriaDescAbreviada = "" ;
   this.Events = {"e12l72_client": ["ENTER", true] ,"e13l72_client": ["'FECHAR'", true] ,"e15l72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV14CategoriaId',fld:'vCATEGORIAID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV19CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2596CategoriaDescAbreviada',fld:'CATEGORIADESCABREVIADA'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV22MsgUsuario',fld:'vMSGUSUARIO'}],[{av:'AV20SnErro',fld:'vSNERRO'},{av:'AV28GXLvl44',fld:'vGXLVL44'},{av:'AV16CategoriaDescricao',fld:'vCATEGORIADESCRICAO'},{av:'AV13OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV21Retorno',fld:'vRETORNO'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV22MsgUsuario',fld:'vMSGUSUARIO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV22MsgUsuario',fld:'vMSGUSUARIO'},{av:'AV15PessoaId',fld:'vPESSOAID'}],[{av:'AV22MsgUsuario',fld:'vMSGUSUARIO'}]];
   this.setPrompt("PROMPT_CATEGORIAID", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new halteracategoria());
