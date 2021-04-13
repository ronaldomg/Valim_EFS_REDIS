/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:20.72
*/
gx.evt.autoSkip = false;
gx.define('hregistrarcentrocustoconv', false, function () {
   this.ServerClass =  "hregistrarcentrocustoconv" ;
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
      this.AV11ConvenioEmpresaId=gx.fn.getControlValue("vCONVENIOEMPRESAID") ;
      this.AV13ConvenioVerbaContaEmpId=gx.fn.getControlValue("vCONVENIOVERBACONTAEMPID") ;
      this.AV15ConvenioVerbaNatDesEmpId=gx.fn.getControlValue("vCONVENIOVERBANATDESEMPID") ;
      this.AV28ConvenioVerbaSnPatrimonio=gx.fn.getControlValue("vCONVENIOVERBASNPATRIMONIO") ;
   };
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioverbacontaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOVERBACONTAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioverbanatdesid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOVERBANATDESID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Centrocustoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCENTROCUSTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresacentrocustoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACENTROCUSTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12if2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14if2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,29,32,34,37,39,41,44,46,47,53,55,56,58];
   this.GXLastCtrlId =58;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE3",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV12ConvenioId",gxold:"OV12ConvenioId",gxvar:"AV12ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV12ConvenioId,0)},c2v:function(){gx.O.AV12ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIONOME",gxz:"ZV19ConvenioNome",gxold:"OV19ConvenioNome",gxvar:"AV19ConvenioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ConvenioNome=Value},v2z:function(Value){gx.O.ZV19ConvenioNome=Value},v2c:function(){gx.fn.setControlValue("vCONVENIONOME",gx.O.AV19ConvenioNome,0)},c2v:function(){gx.O.AV19ConvenioNome=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIONOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE4",grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Convenioverbacontaid,isvalid:null,rgrid:[],fld:"vCONVENIOVERBACONTAID",gxz:"ZV14ConvenioVerbaContaId",gxold:"OV14ConvenioVerbaContaId",gxvar:"AV14ConvenioVerbaContaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ConvenioVerbaContaId=Value},v2z:function(Value){gx.O.ZV14ConvenioVerbaContaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOVERBACONTAID",gx.O.AV14ConvenioVerbaContaId,0)},c2v:function(){gx.O.AV14ConvenioVerbaContaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOVERBACONTAID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV17ContaContabilNome",gxold:"OV17ContaContabilNome",gxvar:"AV17ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ContaContabilNome=Value},v2z:function(Value){gx.O.ZV17ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV17ContaContabilNome,0)},c2v:function(){gx.O.AV17ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLE5",grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Convenioverbanatdesid,isvalid:null,rgrid:[],fld:"vCONVENIOVERBANATDESID",gxz:"ZV16ConvenioVerbaNatDesId",gxold:"OV16ConvenioVerbaNatDesId",gxvar:"AV16ConvenioVerbaNatDesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ConvenioVerbaNatDesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16ConvenioVerbaNatDesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOVERBANATDESID",gx.O.AV16ConvenioVerbaNatDesId,0)},c2v:function(){gx.O.AV16ConvenioVerbaNatDesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOVERBANATDESID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESPESADESCRICAO",gxz:"ZV18NaturezaDespesaDescricao",gxold:"OV18NaturezaDespesaDescricao",gxvar:"AV18NaturezaDespesaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18NaturezaDespesaDescricao=Value},v2z:function(Value){gx.O.ZV18NaturezaDespesaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESADESCRICAO",gx.O.AV18NaturezaDespesaDescricao,0)},c2v:function(){gx.O.AV18NaturezaDespesaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESPESADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Centrocustoid,isvalid:null,rgrid:[],fld:"vCENTROCUSTOID",gxz:"ZV21CentroCustoId",gxold:"OV21CentroCustoId",gxvar:"AV21CentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CentroCustoId=Value},v2z:function(Value){gx.O.ZV21CentroCustoId=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOID",gx.O.AV21CentroCustoId,0)},c2v:function(){gx.O.AV21CentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTODESCRICAO",gxz:"ZV20CentroCustoDescricao",gxold:"OV20CentroCustoDescricao",gxvar:"AV20CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20CentroCustoDescricao=Value},v2z:function(Value){gx.O.ZV20CentroCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCRICAO",gx.O.AV20CentroCustoDescricao,0)},c2v:function(){gx.O.AV20CentroCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"JS", format:1,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacentrocustoempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACENTROCUSTOEMPRESAID",gxz:"ZV25EmpresaCentroCustoEmpresaId",gxold:"OV25EmpresaCentroCustoEmpresaId",gxvar:"AV25EmpresaCentroCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25EmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.ZV25EmpresaCentroCustoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACENTROCUSTOEMPRESAID",gx.O.AV25EmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.AV25EmpresaCentroCustoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACENTROCUSTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV30Qtde",gxold:"OV30Qtde",gxvar:"AV30Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV30Qtde,0)},c2v:function(){gx.O.AV30Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"PROMPT_CENTROCUSTOID",grid:0};
   this.AV12ConvenioId = 0 ;
   this.ZV12ConvenioId = 0 ;
   this.OV12ConvenioId = 0 ;
   this.AV19ConvenioNome = "" ;
   this.ZV19ConvenioNome = "" ;
   this.OV19ConvenioNome = "" ;
   this.AV14ConvenioVerbaContaId = "" ;
   this.ZV14ConvenioVerbaContaId = "" ;
   this.OV14ConvenioVerbaContaId = "" ;
   this.AV17ContaContabilNome = "" ;
   this.ZV17ContaContabilNome = "" ;
   this.OV17ContaContabilNome = "" ;
   this.AV16ConvenioVerbaNatDesId = 0 ;
   this.ZV16ConvenioVerbaNatDesId = 0 ;
   this.OV16ConvenioVerbaNatDesId = 0 ;
   this.AV18NaturezaDespesaDescricao = "" ;
   this.ZV18NaturezaDespesaDescricao = "" ;
   this.OV18NaturezaDespesaDescricao = "" ;
   this.AV21CentroCustoId = "" ;
   this.ZV21CentroCustoId = "" ;
   this.OV21CentroCustoId = "" ;
   this.AV20CentroCustoDescricao = "" ;
   this.ZV20CentroCustoDescricao = "" ;
   this.OV20CentroCustoDescricao = "" ;
   this.AV25EmpresaCentroCustoEmpresaId = "" ;
   this.ZV25EmpresaCentroCustoEmpresaId = "" ;
   this.OV25EmpresaCentroCustoEmpresaId = "" ;
   this.AV30Qtde = 0 ;
   this.ZV30Qtde = 0 ;
   this.OV30Qtde = 0 ;
   this.AV12ConvenioId = 0 ;
   this.AV19ConvenioNome = "" ;
   this.AV14ConvenioVerbaContaId = "" ;
   this.AV17ContaContabilNome = "" ;
   this.AV16ConvenioVerbaNatDesId = 0 ;
   this.AV18NaturezaDespesaDescricao = "" ;
   this.AV21CentroCustoId = "" ;
   this.AV20CentroCustoDescricao = "" ;
   this.AV25EmpresaCentroCustoEmpresaId = "" ;
   this.AV30Qtde = 0 ;
   this.AV11ConvenioEmpresaId = "" ;
   this.AV13ConvenioVerbaContaEmpId = "" ;
   this.AV15ConvenioVerbaNatDesEmpId = "" ;
   this.AV28ConvenioVerbaSnPatrimonio = "" ;
   this.A51CentroCustoId = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A2073NaturezaDespesaId = 0 ;
   this.A2076NaturezaDespesaEmpresaId = "" ;
   this.A2077NaturezaDespesaDescricao = "" ;
   this.A62ContaContabilId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.Events = {"e12if2_client": ["ENTER", true] ,"e14if2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21CentroCustoId',fld:'vCENTROCUSTOID'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'AV25EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A52CentroCustoDescricao',fld:'CENTROCUSTODESCRICAO'},{av:'AV11ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID',hsh:true},{av:'AV12ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV13ConvenioVerbaContaEmpId',fld:'vCONVENIOVERBACONTAEMPID',hsh:true},{av:'AV14ConvenioVerbaContaId',fld:'vCONVENIOVERBACONTAID',hsh:true},{av:'AV15ConvenioVerbaNatDesEmpId',fld:'vCONVENIOVERBANATDESEMPID',hsh:true},{av:'AV16ConvenioVerbaNatDesId',fld:'vCONVENIOVERBANATDESID',hsh:true},{av:'AV28ConvenioVerbaSnPatrimonio',fld:'vCONVENIOVERBASNPATRIMONIO',hsh:true}],[{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV38GXLvl73',fld:'vGXLVL73'},{av:'AV20CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV26SnCCusSin',fld:'vSNCCUSSIN'}]];
   this.setPrompt("PROMPT_CENTROCUSTOID", [46]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11ConvenioEmpresaId", "vCONVENIOEMPRESAID", 0, "char");
   this.setVCMap("AV13ConvenioVerbaContaEmpId", "vCONVENIOVERBACONTAEMPID", 0, "char");
   this.setVCMap("AV15ConvenioVerbaNatDesEmpId", "vCONVENIOVERBANATDESEMPID", 0, "char");
   this.setVCMap("AV28ConvenioVerbaSnPatrimonio", "vCONVENIOVERBASNPATRIMONIO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarcentrocustoconv());
