/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:34:43.77
*/
gx.evt.autoSkip = false;
gx.define('hmodaltrnentradaprov', false, function () {
   this.ServerClass =  "hmodaltrnentradaprov" ;
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
      this.AV7EntradaProvEmpresaId=gx.fn.getControlValue("vENTRADAPROVEMPRESAID") ;
      this.AV8EntradaProvId=gx.fn.getIntegerValue("vENTRADAPROVID",'.') ;
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
   this.e1223o2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1323o2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1523o2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,22,23];
   this.GXLastCtrlId =23;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaoentradacodigo,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADACODIGO",gxz:"ZV31TransacaoEntradaCodigo",gxold:"OV31TransacaoEntradaCodigo",gxvar:"AV31TransacaoEntradaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TransacaoEntradaCodigo=Value},v2z:function(Value){gx.O.ZV31TransacaoEntradaCodigo=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACODIGO",gx.O.AV31TransacaoEntradaCodigo,0)},c2v:function(){gx.O.AV31TransacaoEntradaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACODIGO")},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADADESCRICAO",gxz:"ZV32TransacaoEntradaDescricao",gxold:"OV32TransacaoEntradaDescricao",gxvar:"AV32TransacaoEntradaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TransacaoEntradaDescricao=Value},v2z:function(Value){gx.O.ZV32TransacaoEntradaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADADESCRICAO",gx.O.AV32TransacaoEntradaDescricao,0)},c2v:function(){gx.O.AV32TransacaoEntradaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADASNINATIVA",gxz:"ZV34TransacaoEntradaSnInativa",gxold:"OV34TransacaoEntradaSnInativa",gxvar:"AV34TransacaoEntradaSnInativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TransacaoEntradaSnInativa=Value},v2z:function(Value){gx.O.ZV34TransacaoEntradaSnInativa=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADASNINATIVA",gx.O.AV34TransacaoEntradaSnInativa,0)},c2v:function(){gx.O.AV34TransacaoEntradaSnInativa=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADASNINATIVA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"PROMPT_TRANSACAOENTRADACODIGO",grid:0};
   this.AV31TransacaoEntradaCodigo = "" ;
   this.ZV31TransacaoEntradaCodigo = "" ;
   this.OV31TransacaoEntradaCodigo = "" ;
   this.AV32TransacaoEntradaDescricao = "" ;
   this.ZV32TransacaoEntradaDescricao = "" ;
   this.OV32TransacaoEntradaDescricao = "" ;
   this.AV34TransacaoEntradaSnInativa = "" ;
   this.ZV34TransacaoEntradaSnInativa = "" ;
   this.OV34TransacaoEntradaSnInativa = "" ;
   this.AV31TransacaoEntradaCodigo = "" ;
   this.AV32TransacaoEntradaDescricao = "" ;
   this.AV34TransacaoEntradaSnInativa = "" ;
   this.AV7EntradaProvEmpresaId = "" ;
   this.AV8EntradaProvId = 0 ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A4490TransacaoEntradaAtivo = "" ;
   this.Events = {"e1223o2_client": ["ENTER", true] ,"e1323o2_client": ["'FECHAR'", true] ,"e1523o2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV26SnErro',fld:'vSNERRO'},{av:'AV7EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV8EntradaProvId',fld:'vENTRADAPROVID'},{av:'AV31TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV38DataNula',fld:'vDATANULA'},{av:'A4480TransacaoEntradaEmpresaId',fld:'TRANSACAOENTRADAEMPRESAID'},{av:'AV33TransacaoEntradaEmpresaId',fld:'vTRANSACAOENTRADAEMPRESAID'},{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'A4490TransacaoEntradaAtivo',fld:'TRANSACAOENTRADAATIVO'},{av:'AV39SnOK',fld:'vSNOK'}],[{av:'AV37EntradaId',fld:'vENTRADAID'},{av:'AV36EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV39SnOK',fld:'vSNOK'},{av:'AV26SnErro',fld:'vSNERRO'},{av:'AV42GXLvl41',fld:'vGXLVL41'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV39SnOK',fld:'vSNOK'},{av:'AV8EntradaProvId',fld:'vENTRADAPROVID'}],[{av:'AV39SnOK',fld:'vSNOK'}]];
   this.setPrompt("PROMPT_TRANSACAOENTRADACODIGO", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV7EntradaProvEmpresaId", "vENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("AV8EntradaProvId", "vENTRADAPROVID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaltrnentradaprov());
