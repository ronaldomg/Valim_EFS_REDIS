/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:21.96
*/
gx.evt.autoSkip = false;
gx.define('hregistrarcontacontabilconv', false, function () {
   this.ServerClass =  "hregistrarcontacontabilconv" ;
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
      this.AV17ConvenioEmpresaId=gx.fn.getControlValue("vCONVENIOEMPRESAID") ;
      this.AV20ConvenioCentroCustoEmpId=gx.fn.getControlValue("vCONVENIOCENTROCUSTOEMPID") ;
      this.AV26ConvenioCCusNatDesEmpId=gx.fn.getControlValue("vCONVENIOCCUSNATDESEMPID") ;
      this.AV32ConvenioCCusSnPatrimonio=gx.fn.getControlValue("vCONVENIOCCUSSNPATRIMONIO") ;
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
   this.Validv_Conveniocentrocustoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOCENTROCUSTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioccusnatdesid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOCCUSNATDESID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contacontabilid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresacontacontabilempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACONTACONTABILEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12ig2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14ig2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,35,37,40,42,44,47,49,50,51,52,59,60,61,62];
   this.GXLastCtrlId =62;
   GXValidFnc[2]={fld:"TABLE6",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV18ConvenioId",gxold:"OV18ConvenioId",gxvar:"AV18ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV18ConvenioId,0)},c2v:function(){gx.O.AV18ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV19ConvenioDescricao",gxold:"OV19ConvenioDescricao",gxvar:"AV19ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV19ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV19ConvenioDescricao,0)},c2v:function(){gx.O.AV19ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE4",grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Conveniocentrocustoid,isvalid:null,rgrid:[],fld:"vCONVENIOCENTROCUSTOID",gxz:"ZV21ConvenioCentroCustoId",gxold:"OV21ConvenioCentroCustoId",gxvar:"AV21ConvenioCentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ConvenioCentroCustoId=Value},v2z:function(Value){gx.O.ZV21ConvenioCentroCustoId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOCENTROCUSTOID",gx.O.AV21ConvenioCentroCustoId,0)},c2v:function(){gx.O.AV21ConvenioCentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTODESCRICAO",gxz:"ZV22CentroCustoDescricao",gxold:"OV22CentroCustoDescricao",gxvar:"AV22CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CentroCustoDescricao=Value},v2z:function(Value){gx.O.ZV22CentroCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCRICAO",gx.O.AV22CentroCustoDescricao,0)},c2v:function(){gx.O.AV22CentroCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Convenioccusnatdesid,isvalid:null,rgrid:[],fld:"vCONVENIOCCUSNATDESID",gxz:"ZV25ConvenioCCusNatDesId",gxold:"OV25ConvenioCCusNatDesId",gxvar:"AV25ConvenioCCusNatDesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ConvenioCCusNatDesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25ConvenioCCusNatDesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOCCUSNATDESID",gx.O.AV25ConvenioCCusNatDesId,0)},c2v:function(){gx.O.AV25ConvenioCCusNatDesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOCCUSNATDESID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESPESADESCRICAO",gxz:"ZV23NaturezaDespesaDescricao",gxold:"OV23NaturezaDespesaDescricao",gxvar:"AV23NaturezaDespesaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23NaturezaDespesaDescricao=Value},v2z:function(Value){gx.O.ZV23NaturezaDespesaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESADESCRICAO",gx.O.AV23NaturezaDespesaDescricao,0)},c2v:function(){gx.O.AV23NaturezaDespesaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESPESADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabilid,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV24ContaContabilId",gxold:"OV24ContaContabilId",gxvar:"AV24ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ContaContabilId=Value},v2z:function(Value){gx.O.ZV24ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV24ContaContabilId,0)},c2v:function(){gx.O.AV24ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORAUX",gxz:"ZV31TradutorAux",gxold:"OV31TradutorAux",gxvar:"AV31TradutorAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TradutorAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31TradutorAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORAUX",gx.O.AV31TradutorAux,0)},c2v:function(){gx.O.AV31TradutorAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV27ContaContabilNome",gxold:"OV27ContaContabilNome",gxvar:"AV27ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ContaContabilNome=Value},v2z:function(Value){gx.O.ZV27ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV27ContaContabilNome,0)},c2v:function(){gx.O.AV27ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV34Qtde",gxold:"OV34Qtde",gxvar:"AV34Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV34Qtde,0)},c2v:function(){gx.O.AV34Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacontacontabilempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACONTACONTABILEMPRESAID",gxz:"ZV16EmpresaContaContabilEmpresaId",gxold:"OV16EmpresaContaContabilEmpresaId",gxvar:"AV16EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV16EmpresaContaContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACONTACONTABILEMPRESAID",gx.O.AV16EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.AV16EmpresaContaContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACONTACONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV29ChamaOnBlurMascara",gxold:"OV29ChamaOnBlurMascara",gxvar:"AV29ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV29ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV29ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV29ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"JS", format:2,grid:0};
   this.AV18ConvenioId = 0 ;
   this.ZV18ConvenioId = 0 ;
   this.OV18ConvenioId = 0 ;
   this.AV19ConvenioDescricao = "" ;
   this.ZV19ConvenioDescricao = "" ;
   this.OV19ConvenioDescricao = "" ;
   this.AV21ConvenioCentroCustoId = "" ;
   this.ZV21ConvenioCentroCustoId = "" ;
   this.OV21ConvenioCentroCustoId = "" ;
   this.AV22CentroCustoDescricao = "" ;
   this.ZV22CentroCustoDescricao = "" ;
   this.OV22CentroCustoDescricao = "" ;
   this.AV25ConvenioCCusNatDesId = 0 ;
   this.ZV25ConvenioCCusNatDesId = 0 ;
   this.OV25ConvenioCCusNatDesId = 0 ;
   this.AV23NaturezaDespesaDescricao = "" ;
   this.ZV23NaturezaDespesaDescricao = "" ;
   this.OV23NaturezaDespesaDescricao = "" ;
   this.AV24ContaContabilId = "" ;
   this.ZV24ContaContabilId = "" ;
   this.OV24ContaContabilId = "" ;
   this.AV31TradutorAux = 0 ;
   this.ZV31TradutorAux = 0 ;
   this.OV31TradutorAux = 0 ;
   this.AV27ContaContabilNome = "" ;
   this.ZV27ContaContabilNome = "" ;
   this.OV27ContaContabilNome = "" ;
   this.AV34Qtde = 0 ;
   this.ZV34Qtde = 0 ;
   this.OV34Qtde = 0 ;
   this.AV16EmpresaContaContabilEmpresaId = "" ;
   this.ZV16EmpresaContaContabilEmpresaId = "" ;
   this.OV16EmpresaContaContabilEmpresaId = "" ;
   this.AV29ChamaOnBlurMascara = "" ;
   this.ZV29ChamaOnBlurMascara = "" ;
   this.OV29ChamaOnBlurMascara = "" ;
   this.AV18ConvenioId = 0 ;
   this.AV19ConvenioDescricao = "" ;
   this.AV21ConvenioCentroCustoId = "" ;
   this.AV22CentroCustoDescricao = "" ;
   this.AV25ConvenioCCusNatDesId = 0 ;
   this.AV23NaturezaDespesaDescricao = "" ;
   this.AV24ContaContabilId = "" ;
   this.AV31TradutorAux = 0 ;
   this.AV27ContaContabilNome = "" ;
   this.AV34Qtde = 0 ;
   this.AV16EmpresaContaContabilEmpresaId = "" ;
   this.AV29ChamaOnBlurMascara = "" ;
   this.AV17ConvenioEmpresaId = "" ;
   this.AV20ConvenioCentroCustoEmpId = "" ;
   this.AV26ConvenioCCusNatDesEmpId = "" ;
   this.AV32ConvenioCCusSnPatrimonio = "" ;
   this.A62ContaContabilId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A2073NaturezaDespesaId = 0 ;
   this.A2076NaturezaDespesaEmpresaId = "" ;
   this.A2077NaturezaDespesaDescricao = "" ;
   this.A51CentroCustoId = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.Events = {"e12ig2_client": ["ENTER", true] ,"e14ig2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV24ContaContabilId',fld:'vCONTACONTABILID'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV16EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'AV17ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID',hsh:true},{av:'AV18ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV20ConvenioCentroCustoEmpId',fld:'vCONVENIOCENTROCUSTOEMPID',hsh:true},{av:'AV21ConvenioCentroCustoId',fld:'vCONVENIOCENTROCUSTOID',hsh:true},{av:'AV26ConvenioCCusNatDesEmpId',fld:'vCONVENIOCCUSNATDESEMPID',hsh:true},{av:'AV25ConvenioCCusNatDesId',fld:'vCONVENIOCCUSNATDESID',hsh:true},{av:'AV32ConvenioCCusSnPatrimonio',fld:'vCONVENIOCCUSSNPATRIMONIO',hsh:true}],[{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV42GXLvl80',fld:'vGXLVL80'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV28SnCConSin',fld:'vSNCCONSIN'}]];
   this.setPrompt("IMGPROMPT", [49,51]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17ConvenioEmpresaId", "vCONVENIOEMPRESAID", 0, "char");
   this.setVCMap("AV20ConvenioCentroCustoEmpId", "vCONVENIOCENTROCUSTOEMPID", 0, "char");
   this.setVCMap("AV26ConvenioCCusNatDesEmpId", "vCONVENIOCCUSNATDESEMPID", 0, "char");
   this.setVCMap("AV32ConvenioCCusSnPatrimonio", "vCONVENIOCCUSSNPATRIMONIO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarcontacontabilconv());
