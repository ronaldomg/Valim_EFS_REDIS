/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:21.81
*/
gx.evt.autoSkip = false;
gx.define('hduplicartransacaocxbco', false, function () {
   this.ServerClass =  "hduplicartransacaocxbco" ;
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
      this.AV18TransacaoCxBcoEmpresaId=gx.fn.getControlValue("vTRANSACAOCXBCOEMPRESAID") ;
   };
   this.Validv_Novatransacaocxbcosigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNOVATRANSACAOCXBCOSIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12982_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13982_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15982_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22];
   this.GXLastCtrlId =22;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE4",grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCOSIGLA",gxz:"ZV13TransacaoCxBcoSigla",gxold:"OV13TransacaoCxBcoSigla",gxvar:"AV13TransacaoCxBcoSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13TransacaoCxBcoSigla=Value},v2z:function(Value){gx.O.ZV13TransacaoCxBcoSigla=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOSIGLA",gx.O.AV13TransacaoCxBcoSigla,0)},c2v:function(){gx.O.AV13TransacaoCxBcoSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOSIGLA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCODESCRICAO",gxz:"ZV14TransacaoCxBcoDescricao",gxold:"OV14TransacaoCxBcoDescricao",gxvar:"AV14TransacaoCxBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14TransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.ZV14TransacaoCxBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCODESCRICAO",gx.O.AV14TransacaoCxBcoDescricao,0)},c2v:function(){gx.O.AV14TransacaoCxBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Novatransacaocxbcosigla,isvalid:null,rgrid:[],fld:"vNOVATRANSACAOCXBCOSIGLA",gxz:"ZV17NovaTransacaoCxBcoSigla",gxold:"OV17NovaTransacaoCxBcoSigla",gxvar:"AV17NovaTransacaoCxBcoSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17NovaTransacaoCxBcoSigla=Value},v2z:function(Value){gx.O.ZV17NovaTransacaoCxBcoSigla=Value},v2c:function(){gx.fn.setControlValue("vNOVATRANSACAOCXBCOSIGLA",gx.O.AV17NovaTransacaoCxBcoSigla,0)},c2v:function(){gx.O.AV17NovaTransacaoCxBcoSigla=this.val()},val:function(){return gx.fn.getControlValue("vNOVATRANSACAOCXBCOSIGLA")},nac:gx.falseFn};
   this.AV13TransacaoCxBcoSigla = "" ;
   this.ZV13TransacaoCxBcoSigla = "" ;
   this.OV13TransacaoCxBcoSigla = "" ;
   this.AV14TransacaoCxBcoDescricao = "" ;
   this.ZV14TransacaoCxBcoDescricao = "" ;
   this.OV14TransacaoCxBcoDescricao = "" ;
   this.AV17NovaTransacaoCxBcoSigla = "" ;
   this.ZV17NovaTransacaoCxBcoSigla = "" ;
   this.OV17NovaTransacaoCxBcoSigla = "" ;
   this.AV13TransacaoCxBcoSigla = "" ;
   this.AV14TransacaoCxBcoDescricao = "" ;
   this.AV17NovaTransacaoCxBcoSigla = "" ;
   this.AV18TransacaoCxBcoEmpresaId = "" ;
   this.A1114TransacaoCxBcoSigla = "" ;
   this.A1115TransacaoCxBcoEmpresaId = "" ;
   this.Events = {"e12982_client": ["ENTER", true] ,"e13982_client": ["'FECHAR'", true] ,"e15982_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV17NovaTransacaoCxBcoSigla',fld:'vNOVATRANSACAOCXBCOSIGLA'},{av:'A1115TransacaoCxBcoEmpresaId',fld:'TRANSACAOCXBCOEMPRESAID'},{av:'AV18TransacaoCxBcoEmpresaId',fld:'vTRANSACAOCXBCOEMPRESAID',hsh:true},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'},{av:'AV13TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA',hsh:true}],[{av:'AV23GXLvl22',fld:'vGXLVL22'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TransacaoCxBcoEmpresaId", "vTRANSACAOCXBCOEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicartransacaocxbco());
