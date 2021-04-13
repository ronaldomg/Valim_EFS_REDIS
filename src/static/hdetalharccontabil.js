/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:17.35
*/
gx.evt.autoSkip = false;
gx.define('hdetalharccontabil', false, function () {
   this.ServerClass =  "hdetalharccontabil" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV10EmpresaContaContabilEmpresaId=gx.fn.getControlValue("vEMPRESACONTACONTABILEMPRESAID") ;
      this.AV11ContaContabilTradutor=gx.fn.getIntegerValue("vCONTACONTABILTRADUTOR",'.') ;
   };
   this.Validv_Contacontabilnatureza=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILNATUREZA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contacontabiltipoconta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILTIPOCONTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11ib2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14ib2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ib2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,19,21,24,26,29,31];
   this.GXLastCtrlId =31;
   GXValidFnc[3]={fld:"TABLE3",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV13ContaContabilId",gxold:"OV13ContaContabilId",gxvar:"AV13ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ContaContabilId=Value},v2z:function(Value){gx.O.ZV13ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV13ContaContabilId,0)},c2v:function(){gx.O.AV13ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV16ContaContabilNome",gxold:"OV16ContaContabilNome",gxvar:"AV16ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ContaContabilNome=Value},v2z:function(Value){gx.O.ZV16ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV16ContaContabilNome,0)},c2v:function(){gx.O.AV16ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTORAUX",gxz:"ZV18ContaContabilTradutorAux",gxold:"OV18ContaContabilTradutorAux",gxvar:"AV18ContaContabilTradutorAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ContaContabilTradutorAux=Value},v2z:function(Value){gx.O.ZV18ContaContabilTradutorAux=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTORAUX",gx.O.AV18ContaContabilTradutorAux,0)},c2v:function(){gx.O.AV18ContaContabilTradutorAux=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILTRADUTORAUX")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabilnatureza,isvalid:null,rgrid:[],fld:"vCONTACONTABILNATUREZA",gxz:"ZV14ContaContabilNatureza",gxold:"OV14ContaContabilNatureza",gxvar:"AV14ContaContabilNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14ContaContabilNatureza=Value},v2z:function(Value){gx.O.ZV14ContaContabilNatureza=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTACONTABILNATUREZA",gx.O.AV14ContaContabilNatureza)},c2v:function(){gx.O.AV14ContaContabilNatureza=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNATUREZA")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabiltipoconta,isvalid:null,rgrid:[],fld:"vCONTACONTABILTIPOCONTA",gxz:"ZV15ContaContabilTipoConta",gxold:"OV15ContaContabilTipoConta",gxvar:"AV15ContaContabilTipoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15ContaContabilTipoConta=Value},v2z:function(Value){gx.O.ZV15ContaContabilTipoConta=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTACONTABILTIPOCONTA",gx.O.AV15ContaContabilTipoConta)},c2v:function(){gx.O.AV15ContaContabilTipoConta=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILTIPOCONTA")},nac:gx.falseFn};
   this.AV13ContaContabilId = "" ;
   this.ZV13ContaContabilId = "" ;
   this.OV13ContaContabilId = "" ;
   this.AV16ContaContabilNome = "" ;
   this.ZV16ContaContabilNome = "" ;
   this.OV16ContaContabilNome = "" ;
   this.AV18ContaContabilTradutorAux = "" ;
   this.ZV18ContaContabilTradutorAux = "" ;
   this.OV18ContaContabilTradutorAux = "" ;
   this.AV14ContaContabilNatureza = "" ;
   this.ZV14ContaContabilNatureza = "" ;
   this.OV14ContaContabilNatureza = "" ;
   this.AV15ContaContabilTipoConta = "" ;
   this.ZV15ContaContabilTipoConta = "" ;
   this.OV15ContaContabilTipoConta = "" ;
   this.AV13ContaContabilId = "" ;
   this.AV16ContaContabilNome = "" ;
   this.AV18ContaContabilTradutorAux = "" ;
   this.AV14ContaContabilNatureza = "" ;
   this.AV15ContaContabilTipoConta = "" ;
   this.AV10EmpresaContaContabilEmpresaId = "" ;
   this.AV11ContaContabilTradutor = 0 ;
   this.A64ContaContabilTradutor = 0 ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A166ContaContabilNatureza = "" ;
   this.A168ContaContabilTipoConta = "" ;
   this.Events = {"e11ib2_client": ["'FECHAR'", true] ,"e14ib2_client": ["ENTER", true] ,"e15ib2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV10EmpresaContaContabilEmpresaId", "vEMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV11ContaContabilTradutor", "vCONTACONTABILTRADUTOR", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdetalharccontabil());
