/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:34:19.97
*/
gx.evt.autoSkip = false;
gx.define('hcopiarnotaitem', false, function () {
   this.ServerClass =  "hcopiarnotaitem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV26TpOperacao=gx.fn.getIntegerValue("vTPOPERACAO",'.') ;
      this.AV18SaidaIdDestino=gx.fn.getIntegerValue("vSAIDAIDDESTINO",'.') ;
      this.AV11EntradaIdDestino=gx.fn.getIntegerValue("vENTRADAIDDESTINO",'.') ;
      this.AV29TransacaoSaidaCodigo=gx.fn.getControlValue("vTRANSACAOSAIDACODIGO") ;
   };
   this.Validv_Entradaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Saidaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1323g2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1423g2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1623g2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,17,18,21,22,23,31,34,35,36,37,38,39,40,41];
   this.GXLastCtrlId =41;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TXTNOTA", format:0,grid:0};
   GXValidFnc[13]={fld:"TABENTRADA",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaid,isvalid:null,rgrid:[],fld:"vENTRADAID",gxz:"ZV10EntradaId",gxold:"OV10EntradaId",gxvar:"AV10EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10EntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAID",gx.O.AV10EntradaId,0)},c2v:function(){gx.O.AV10EntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"PROMPTENTRADA",grid:0};
   GXValidFnc[18]={fld:"TABSAIDA",grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidaid,isvalid:null,rgrid:[],fld:"vSAIDAID",gxz:"ZV17SaidaId",gxold:"OV17SaidaId",gxvar:"AV17SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAID",gx.O.AV17SaidaId,0)},c2v:function(){gx.O.AV17SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFALSE",gxz:"ZV30false",gxold:"OV30false",gxvar:"AV30false",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV30false=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV30false=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vFALSE",gx.O.AV30false,true)},c2v:function(){gx.O.AV30false=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vFALSE")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[23]={fld:"PROMPTSAIDA",grid:0};
   GXValidFnc[31]={fld:"TABVISIVEL",grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOOOUT",gxz:"ZV5CooOut",gxold:"OV5CooOut",gxvar:"AV5CooOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5CooOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5CooOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOOOUT",gx.O.AV5CooOut,0)},c2v:function(){gx.O.AV5CooOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOOOUT",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAOUT",gxz:"ZV20SaidaOut",gxold:"OV20SaidaOut",gxvar:"AV20SaidaOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SaidaOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20SaidaOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAOUT",gx.O.AV20SaidaOut,0)},c2v:function(){gx.O.AV20SaidaOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAOUT",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV23Tipo",gxold:"OV23Tipo",gxvar:"AV23Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Tipo=Value},v2z:function(Value){gx.O.ZV23Tipo=Value},v2c:function(){gx.fn.setControlValue("vTIPO",gx.O.AV23Tipo,0)},c2v:function(){gx.O.AV23Tipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPO")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERIE",gxz:"ZV21Serie",gxold:"OV21Serie",gxvar:"AV21Serie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Serie=Value},v2z:function(Value){gx.O.ZV21Serie=Value},v2c:function(){gx.fn.setControlValue("vSERIE",gx.O.AV21Serie,0)},c2v:function(){gx.O.AV21Serie=this.val()},val:function(){return gx.fn.getControlValue("vSERIE")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTO",gxz:"ZV6Documento",gxold:"OV6Documento",gxvar:"AV6Documento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6Documento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6Documento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTO",gx.O.AV6Documento,0)},c2v:function(){gx.O.AV6Documento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTOOUT",gxz:"ZV28DocumentoOut",gxold:"OV28DocumentoOut",gxvar:"AV28DocumentoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DocumentoOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28DocumentoOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTOOUT",gx.O.AV28DocumentoOut,0)},c2v:function(){gx.O.AV28DocumentoOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDOCUMENTOOUT",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vECFOUT",gxz:"ZV7ECFOut",gxold:"OV7ECFOut",gxvar:"AV7ECFOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7ECFOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7ECFOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vECFOUT",gx.O.AV7ECFOut,0)},c2v:function(){gx.O.AV7ECFOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vECFOUT",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSAIDA",gxz:"ZV24TipoSaida",gxold:"OV24TipoSaida",gxvar:"AV24TipoSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TipoSaida=Value},v2z:function(Value){gx.O.ZV24TipoSaida=Value},v2c:function(){gx.fn.setControlValue("vTIPOSAIDA",gx.O.AV24TipoSaida,0)},c2v:function(){gx.O.AV24TipoSaida=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSAIDA")},nac:gx.falseFn};
   this.AV10EntradaId = 0 ;
   this.ZV10EntradaId = 0 ;
   this.OV10EntradaId = 0 ;
   this.AV17SaidaId = 0 ;
   this.ZV17SaidaId = 0 ;
   this.OV17SaidaId = 0 ;
   this.AV30false = false ;
   this.ZV30false = false ;
   this.OV30false = false ;
   this.AV5CooOut = 0 ;
   this.ZV5CooOut = 0 ;
   this.OV5CooOut = 0 ;
   this.AV20SaidaOut = 0 ;
   this.ZV20SaidaOut = 0 ;
   this.OV20SaidaOut = 0 ;
   this.AV23Tipo = "" ;
   this.ZV23Tipo = "" ;
   this.OV23Tipo = "" ;
   this.AV21Serie = "" ;
   this.ZV21Serie = "" ;
   this.OV21Serie = "" ;
   this.AV6Documento = 0 ;
   this.ZV6Documento = 0 ;
   this.OV6Documento = 0 ;
   this.AV28DocumentoOut = 0 ;
   this.ZV28DocumentoOut = 0 ;
   this.OV28DocumentoOut = 0 ;
   this.AV7ECFOut = 0 ;
   this.ZV7ECFOut = 0 ;
   this.OV7ECFOut = 0 ;
   this.AV24TipoSaida = "" ;
   this.ZV24TipoSaida = "" ;
   this.OV24TipoSaida = "" ;
   this.AV10EntradaId = 0 ;
   this.AV17SaidaId = 0 ;
   this.AV30false = false ;
   this.AV5CooOut = 0 ;
   this.AV20SaidaOut = 0 ;
   this.AV23Tipo = "" ;
   this.AV21Serie = "" ;
   this.AV6Documento = 0 ;
   this.AV28DocumentoOut = 0 ;
   this.AV7ECFOut = 0 ;
   this.AV24TipoSaida = "" ;
   this.AV26TpOperacao = 0 ;
   this.AV18SaidaIdDestino = 0 ;
   this.AV11EntradaIdDestino = 0 ;
   this.AV29TransacaoSaidaCodigo = "" ;
   this.A4638EntradaId = 0 ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.Events = {"e1323g2_client": ["'FECHAR'", true] ,"e1423g2_client": ["ENTER", true] ,"e1623g2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV26TpOperacao',fld:'vTPOPERACAO',hsh:true}],[{av:'gx.fn.getCtrlProperty("TABSAIDA","Visible")',ctrl:'TABSAIDA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABENTRADA","Visible")',ctrl:'TABENTRADA',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TXTNOTA","Caption")',ctrl:'TXTNOTA',prop:'Caption'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV26TpOperacao',fld:'vTPOPERACAO',hsh:true},{av:'AV17SaidaId',fld:'vSAIDAID'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV15SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'AV10EntradaId',fld:'vENTRADAID'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV9EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'AV18SaidaIdDestino',fld:'vSAIDAIDDESTINO',hsh:true},{av:'AV11EntradaIdDestino',fld:'vENTRADAIDDESTINO',hsh:true},{av:'AV29TransacaoSaidaCodigo',fld:'vTRANSACAOSAIDACODIGO',hsh:true}],[{av:'AV25TpErro',fld:'vTPERRO'},{av:'AV34GXLvl66',fld:'vGXLVL66'},{av:'AV35GXLvl81',fld:'vGXLVL81'},{av:'AV19SaidaIdNova',fld:'vSAIDAIDNOVA'},{av:'AV16SaidaEmpresaIdNova',fld:'vSAIDAEMPRESAIDNOVA'}]];
   this.setPrompt("PROMPTENTRADA", [16,37,38]);
   this.setPrompt("PROMPTSAIDA", [41,22,21,40,34,37,39]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV26TpOperacao", "vTPOPERACAO", 0, "int");
   this.setVCMap("AV18SaidaIdDestino", "vSAIDAIDDESTINO", 0, "int");
   this.setVCMap("AV11EntradaIdDestino", "vENTRADAIDDESTINO", 0, "int");
   this.setVCMap("AV29TransacaoSaidaCodigo", "vTRANSACAOSAIDACODIGO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiarnotaitem());
