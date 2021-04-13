/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:9:7.0
*/
gx.evt.autoSkip = false;
gx.define('hduplicartransacaosaida', false, function () {
   this.ServerClass =  "hduplicartransacaosaida" ;
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
   this.Validv_Transacaosaidacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOSAIDACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaosaidacodigonovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOSAIDACODIGONOVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12zn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13zn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15zn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,24];
   this.GXLastCtrlId =24;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaosaidacodigo,isvalid:null,rgrid:[],fld:"vTRANSACAOSAIDACODIGO",gxz:"ZV10TransacaoSaidaCodigo",gxold:"OV10TransacaoSaidaCodigo",gxvar:"AV10TransacaoSaidaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10TransacaoSaidaCodigo=Value},v2z:function(Value){gx.O.ZV10TransacaoSaidaCodigo=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDACODIGO",gx.O.AV10TransacaoSaidaCodigo,0)},c2v:function(){gx.O.AV10TransacaoSaidaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDACODIGO")},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNATIVA",gxz:"ZV11SNAtiva",gxold:"OV11SNAtiva",gxvar:"AV11SNAtiva",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11SNAtiva=Value},v2z:function(Value){gx.O.ZV11SNAtiva=Value},v2c:function(){gx.fn.setControlValue("vSNATIVA",gx.O.AV11SNAtiva,0)},c2v:function(){gx.O.AV11SNAtiva=this.val()},val:function(){return gx.fn.getControlValue("vSNATIVA")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaosaidacodigonovo,isvalid:null,rgrid:[],fld:"vTRANSACAOSAIDACODIGONOVO",gxz:"ZV12TransacaoSaidaCodigoNovo",gxold:"OV12TransacaoSaidaCodigoNovo",gxvar:"AV12TransacaoSaidaCodigoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12TransacaoSaidaCodigoNovo=Value},v2z:function(Value){gx.O.ZV12TransacaoSaidaCodigoNovo=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDACODIGONOVO",gx.O.AV12TransacaoSaidaCodigoNovo,0)},c2v:function(){gx.O.AV12TransacaoSaidaCodigoNovo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDACODIGONOVO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"PROMPT_TRANSACAOSAIDACODIGO",grid:0};
   this.AV10TransacaoSaidaCodigo = "" ;
   this.ZV10TransacaoSaidaCodigo = "" ;
   this.OV10TransacaoSaidaCodigo = "" ;
   this.AV11SNAtiva = "" ;
   this.ZV11SNAtiva = "" ;
   this.OV11SNAtiva = "" ;
   this.AV12TransacaoSaidaCodigoNovo = "" ;
   this.ZV12TransacaoSaidaCodigoNovo = "" ;
   this.OV12TransacaoSaidaCodigoNovo = "" ;
   this.AV10TransacaoSaidaCodigo = "" ;
   this.AV11SNAtiva = "" ;
   this.AV12TransacaoSaidaCodigoNovo = "" ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.Events = {"e12zn2_client": ["ENTER", true] ,"e13zn2_client": ["'FECHAR'", true] ,"e15zn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10TransacaoSaidaCodigo',fld:'vTRANSACAOSAIDACODIGO'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV14TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'AV12TransacaoSaidaCodigoNovo',fld:'vTRANSACAOSAIDACODIGONOVO'}],[{av:'AV13SNErro',fld:'vSNERRO'},{av:'AV19GXLvl33',fld:'vGXLVL33'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_TRANSACAOSAIDACODIGO", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicartransacaosaida());
