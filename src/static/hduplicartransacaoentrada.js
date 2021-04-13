/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:9:7.83
*/
gx.evt.autoSkip = false;
gx.define('hduplicartransacaoentrada', false, function () {
   this.ServerClass =  "hduplicartransacaoentrada" ;
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
   this.Validv_Transacaoentradacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaoentradacodigonovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOENTRADACODIGONOVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12zo2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13zo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15zo2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,24];
   this.GXLastCtrlId =24;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradacodigo,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACODIGO",gxz:"ZV11TransacaoEntradaCodigo",gxold:"OV11TransacaoEntradaCodigo",gxvar:"AV11TransacaoEntradaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11TransacaoEntradaCodigo=Value},v2z:function(Value){gx.O.ZV11TransacaoEntradaCodigo=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACODIGO",gx.O.AV11TransacaoEntradaCodigo,0)},c2v:function(){gx.O.AV11TransacaoEntradaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACODIGO")},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNATIVA",gxz:"ZV9SNAtiva",gxold:"OV9SNAtiva",gxvar:"AV9SNAtiva",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9SNAtiva=Value},v2z:function(Value){gx.O.ZV9SNAtiva=Value},v2c:function(){gx.fn.setControlValue("vSNATIVA",gx.O.AV9SNAtiva,0)},c2v:function(){gx.O.AV9SNAtiva=this.val()},val:function(){return gx.fn.getControlValue("vSNATIVA")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradacodigonovo,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACODIGONOVO",gxz:"ZV12TransacaoEntradaCodigoNovo",gxold:"OV12TransacaoEntradaCodigoNovo",gxvar:"AV12TransacaoEntradaCodigoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12TransacaoEntradaCodigoNovo=Value},v2z:function(Value){gx.O.ZV12TransacaoEntradaCodigoNovo=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACODIGONOVO",gx.O.AV12TransacaoEntradaCodigoNovo,0)},c2v:function(){gx.O.AV12TransacaoEntradaCodigoNovo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACODIGONOVO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"PROMPT_TRANSACAOENTRADACODIGO",grid:0};
   this.AV11TransacaoEntradaCodigo = "" ;
   this.ZV11TransacaoEntradaCodigo = "" ;
   this.OV11TransacaoEntradaCodigo = "" ;
   this.AV9SNAtiva = "" ;
   this.ZV9SNAtiva = "" ;
   this.OV9SNAtiva = "" ;
   this.AV12TransacaoEntradaCodigoNovo = "" ;
   this.ZV12TransacaoEntradaCodigoNovo = "" ;
   this.OV12TransacaoEntradaCodigoNovo = "" ;
   this.AV11TransacaoEntradaCodigo = "" ;
   this.AV9SNAtiva = "" ;
   this.AV12TransacaoEntradaCodigoNovo = "" ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.Events = {"e12zo2_client": ["ENTER", true] ,"e13zo2_client": ["'FECHAR'", true] ,"e15zo2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'A4480TransacaoEntradaEmpresaId',fld:'TRANSACAOENTRADAEMPRESAID'},{av:'AV13TransacaoEntradaEmpresaId',fld:'vTRANSACAOENTRADAEMPRESAID'},{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'AV12TransacaoEntradaCodigoNovo',fld:'vTRANSACAOENTRADACODIGONOVO'}],[{av:'AV10SNErro',fld:'vSNERRO'},{av:'AV19GXLvl33',fld:'vGXLVL33'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_TRANSACAOENTRADACODIGO", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicartransacaoentrada());
