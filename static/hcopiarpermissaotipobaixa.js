/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:41:31.77
*/
gx.evt.autoSkip = false;
gx.define('hcopiarpermissaotipobaixa', false, function () {
   this.ServerClass =  "hcopiarpermissaotipobaixa" ;
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
      this.AV23TipoBaixaEmpresaId=gx.fn.getControlValue("vTIPOBAIXAEMPRESAID") ;
      this.AV30TipoBaixaPagRec=gx.fn.getControlValue("vTIPOBAIXAPAGREC") ;
      this.AV31TipoBaixaSigla=gx.fn.getControlValue("vTIPOBAIXASIGLA") ;
   };
   this.Validv_Basetipobaixasigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBASETIPOBAIXASIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Basetipobaixapagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBASETIPOBAIXAPAGREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraotipobaixa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOTIPOBAIXA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12hv2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13hv2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15hv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,18,19,20,23];
   this.GXLastCtrlId =23;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Basetipobaixasigla,isvalid:null,rgrid:[],fld:"vBASETIPOBAIXASIGLA",gxz:"ZV33BaseTipoBaixaSigla",gxold:"OV33BaseTipoBaixaSigla",gxvar:"AV33BaseTipoBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33BaseTipoBaixaSigla=Value},v2z:function(Value){gx.O.ZV33BaseTipoBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("vBASETIPOBAIXASIGLA",gx.O.AV33BaseTipoBaixaSigla,0)},c2v:function(){gx.O.AV33BaseTipoBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("vBASETIPOBAIXASIGLA")},nac:gx.falseFn};
   GXValidFnc[11]={fld:"PROMPTBAIXA",grid:0};
   GXValidFnc[12]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBAIXADESCRICAO",gxz:"ZV34TipoBaixaDescricao",gxold:"OV34TipoBaixaDescricao",gxvar:"AV34TipoBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TipoBaixaDescricao=Value},v2z:function(Value){gx.O.ZV34TipoBaixaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOBAIXADESCRICAO",gx.O.AV34TipoBaixaDescricao,0)},c2v:function(){gx.O.AV34TipoBaixaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBAIXADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Basetipobaixapagrec,isvalid:null,rgrid:[],fld:"vBASETIPOBAIXAPAGREC",gxz:"ZV32BaseTipoBaixaPagRec",gxold:"OV32BaseTipoBaixaPagRec",gxvar:"AV32BaseTipoBaixaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32BaseTipoBaixaPagRec=Value},v2z:function(Value){gx.O.ZV32BaseTipoBaixaPagRec=Value},v2c:function(){gx.fn.setControlValue("vBASETIPOBAIXAPAGREC",gx.O.AV32BaseTipoBaixaPagRec,0)},c2v:function(){gx.O.AV32BaseTipoBaixaPagRec=this.val()},val:function(){return gx.fn.getControlValue("vBASETIPOBAIXAPAGREC")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDCARAC",gxz:"ZV26QtdCarac",gxold:"OV26QtdCarac",gxvar:"AV26QtdCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26QtdCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26QtdCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDCARAC",gx.O.AV26QtdCarac,0)},c2v:function(){gx.O.AV26QtdCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDCARAC",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"JS", format:1,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraotipobaixa,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOTIPOBAIXA",gxz:"ZV14EmpresaPadraoTipoBaixa",gxold:"OV14EmpresaPadraoTipoBaixa",gxvar:"AV14EmpresaPadraoTipoBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14EmpresaPadraoTipoBaixa=Value},v2z:function(Value){gx.O.ZV14EmpresaPadraoTipoBaixa=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOTIPOBAIXA",gx.O.AV14EmpresaPadraoTipoBaixa,0)},c2v:function(){gx.O.AV14EmpresaPadraoTipoBaixa=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOTIPOBAIXA")},nac:gx.falseFn};
   this.AV33BaseTipoBaixaSigla = "" ;
   this.ZV33BaseTipoBaixaSigla = "" ;
   this.OV33BaseTipoBaixaSigla = "" ;
   this.AV34TipoBaixaDescricao = "" ;
   this.ZV34TipoBaixaDescricao = "" ;
   this.OV34TipoBaixaDescricao = "" ;
   this.AV32BaseTipoBaixaPagRec = "" ;
   this.ZV32BaseTipoBaixaPagRec = "" ;
   this.OV32BaseTipoBaixaPagRec = "" ;
   this.AV26QtdCarac = 0 ;
   this.ZV26QtdCarac = 0 ;
   this.OV26QtdCarac = 0 ;
   this.AV14EmpresaPadraoTipoBaixa = "" ;
   this.ZV14EmpresaPadraoTipoBaixa = "" ;
   this.OV14EmpresaPadraoTipoBaixa = "" ;
   this.AV33BaseTipoBaixaSigla = "" ;
   this.AV34TipoBaixaDescricao = "" ;
   this.AV32BaseTipoBaixaPagRec = "" ;
   this.AV26QtdCarac = 0 ;
   this.AV14EmpresaPadraoTipoBaixa = "" ;
   this.AV23TipoBaixaEmpresaId = "" ;
   this.AV30TipoBaixaPagRec = "" ;
   this.AV31TipoBaixaSigla = "" ;
   this.A1053TipoBaixaSigla = "" ;
   this.A1049TipoBaixaPagRec = "" ;
   this.A1052TipoBaixaEmpresaId = "" ;
   this.A1054TipoBaixaDescricao = "" ;
   this.Events = {"e12hv2_client": ["ENTER", true] ,"e13hv2_client": ["'CANCELAR'", true] ,"e15hv2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV32BaseTipoBaixaPagRec',fld:'vBASETIPOBAIXAPAGREC'},{av:'AV33BaseTipoBaixaSigla',fld:'vBASETIPOBAIXASIGLA'},{av:'AV34TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'},{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'AV14EmpresaPadraoTipoBaixa',fld:'vEMPRESAPADRAOTIPOBAIXA'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'A1054TipoBaixaDescricao',fld:'TIPOBAIXADESCRICAO'},{av:'AV26QtdCarac',fld:'vQTDCARAC'},{av:'AV30TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC',hsh:true},{av:'AV31TipoBaixaSigla',fld:'vTIPOBAIXASIGLA',hsh:true}],[{av:'AV27snErro',fld:'vSNERRO'},{av:'AV32BaseTipoBaixaPagRec',fld:'vBASETIPOBAIXAPAGREC'},{av:'AV33BaseTipoBaixaSigla',fld:'vBASETIPOBAIXASIGLA'},{av:'AV34TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'},{av:'AV40GXLvl49',fld:'vGXLVL49'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.setPrompt("PROMPTBAIXA", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV23TipoBaixaEmpresaId", "vTIPOBAIXAEMPRESAID", 0, "char");
   this.setVCMap("AV30TipoBaixaPagRec", "vTIPOBAIXAPAGREC", 0, "char");
   this.setVCMap("AV31TipoBaixaSigla", "vTIPOBAIXASIGLA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiarpermissaotipobaixa());
