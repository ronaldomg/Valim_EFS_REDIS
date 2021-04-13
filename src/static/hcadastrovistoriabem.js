/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:34:18.24
*/
gx.evt.autoSkip = false;
gx.define('hcadastrovistoriabem', false, function () {
   this.ServerClass =  "hcadastrovistoriabem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV31BemCodigoParm=gx.fn.getIntegerValue("vBEMCODIGOPARM",'.') ;
      this.AV32BemSubgrupoParm=gx.fn.getIntegerValue("vBEMSUBGRUPOPARM",'.') ;
      this.AV33VistoriaBemDataParm=gx.fn.getDateValue("vVISTORIABEMDATAPARM") ;
      this.AV41Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.Validv_Bemcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vistoriabemdata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVISTORIABEMDATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Respvistoriaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vRESPVISTORIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Deptoindicadoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPTOINDICADOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Deptoencontradoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPTOENCONTRADOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraodepartamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAODEPARTAMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraoresponsavel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAORESPONSAVEL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vBEMCODIGO","Enabled", 0 );
      gx.fn.setCtrlProperty("vBEMSUBGRUPO","Enabled", 0 );
      gx.fn.setCtrlProperty("vVISTORIABEMDATA","Enabled", 0 );
      gx.fn.setCtrlProperty("vRESPVISTORIAID","Enabled", 0 );
      gx.fn.setCtrlProperty("vDEPTOENCONTRADOID","Enabled", 0 );
      gx.fn.setCtrlProperty("vDEPTOINDICADOID","Enabled", 0 );
      gx.fn.setCtrlProperty("vVISTORIABEMOBSERVACAO","Enabled", 0 );
      gx.fn.setCtrlProperty("vUSUARIO","Enabled", 0 );
      gx.fn.setCtrlProperty("vDATAHORA","Enabled", 0 );
   };
   this.e1123e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1323e2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1423e2_client=function()
   {
      this.executeServerEvent("VBEMCODIGO.ISVALID", true, null, false, true);
   };
   this.e1523e2_client=function()
   {
      this.executeServerEvent("VBEMSUBGRUPO.ISVALID", true, null, false, true);
   };
   this.e1823e2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,17,20,22,26,28,30,33,35,37,40,42,44,45,48,50,53,56,58,60,66,72,73,74,75,76,78,79,80,81,82];
   this.GXLastCtrlId =82;
   GXValidFnc[2]={fld:"TABLE7",grid:0};
   GXValidFnc[5]={fld:"TAB1",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo,isvalid:'e1423e2_client',rgrid:[],fld:"vBEMCODIGO",gxz:"ZV7BemCodigo",gxold:"OV7BemCodigo",gxvar:"AV7BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV7BemCodigo,0)},c2v:function(){gx.O.AV7BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo,isvalid:'e1523e2_client',rgrid:[],fld:"vBEMSUBGRUPO",gxz:"ZV8BemSubgrupo",gxold:"OV8BemSubgrupo",gxvar:"AV8BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV8BemSubgrupo,0)},c2v:function(){gx.O.AV8BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAORESUMIDA",gxz:"ZV34BemDescricaoResumida",gxold:"OV34BemDescricaoResumida",gxvar:"AV34BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34BemDescricaoResumida=Value},v2z:function(Value){gx.O.ZV34BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDA",gx.O.AV34BemDescricaoResumida,0)},c2v:function(){gx.O.AV34BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vistoriabemdata,isvalid:null,rgrid:[],fld:"vVISTORIABEMDATA",gxz:"ZV9VistoriaBemData",gxold:"OV9VistoriaBemData",gxvar:"AV9VistoriaBemData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9VistoriaBemData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9VistoriaBemData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vVISTORIABEMDATA",gx.O.AV9VistoriaBemData,0)},c2v:function(){gx.O.AV9VistoriaBemData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vVISTORIABEMDATA")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Respvistoriaid,isvalid:null,rgrid:[],fld:"vRESPVISTORIAID",gxz:"ZV10RespVistoriaId",gxold:"OV10RespVistoriaId",gxvar:"AV10RespVistoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10RespVistoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10RespVistoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRESPVISTORIAID",gx.O.AV10RespVistoriaId,0)},c2v:function(){gx.O.AV10RespVistoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRESPVISTORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRESPVISTORIANOME",gxz:"ZV14RespVistoriaNome",gxold:"OV14RespVistoriaNome",gxvar:"AV14RespVistoriaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14RespVistoriaNome=Value},v2z:function(Value){gx.O.ZV14RespVistoriaNome=Value},v2c:function(){gx.fn.setControlValue("vRESPVISTORIANOME",gx.O.AV14RespVistoriaNome,0)},c2v:function(){gx.O.AV14RespVistoriaNome=this.val()},val:function(){return gx.fn.getControlValue("vRESPVISTORIANOME")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Deptoindicadoid,isvalid:null,rgrid:[],fld:"vDEPTOINDICADOID",gxz:"ZV11DeptoIndicadoId",gxold:"OV11DeptoIndicadoId",gxvar:"AV11DeptoIndicadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11DeptoIndicadoId=Value},v2z:function(Value){gx.O.ZV11DeptoIndicadoId=Value},v2c:function(){gx.fn.setControlValue("vDEPTOINDICADOID",gx.O.AV11DeptoIndicadoId,0)},c2v:function(){gx.O.AV11DeptoIndicadoId=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOINDICADOID")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPTOINDICADONOME",gxz:"ZV15DeptoIndicadoNome",gxold:"OV15DeptoIndicadoNome",gxvar:"AV15DeptoIndicadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DeptoIndicadoNome=Value},v2z:function(Value){gx.O.ZV15DeptoIndicadoNome=Value},v2c:function(){gx.fn.setControlValue("vDEPTOINDICADONOME",gx.O.AV15DeptoIndicadoNome,0)},c2v:function(){gx.O.AV15DeptoIndicadoNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOINDICADONOME")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Deptoencontradoid,isvalid:null,rgrid:[],fld:"vDEPTOENCONTRADOID",gxz:"ZV12DeptoEncontradoId",gxold:"OV12DeptoEncontradoId",gxvar:"AV12DeptoEncontradoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12DeptoEncontradoId=Value},v2z:function(Value){gx.O.ZV12DeptoEncontradoId=Value},v2c:function(){gx.fn.setControlValue("vDEPTOENCONTRADOID",gx.O.AV12DeptoEncontradoId,0)},c2v:function(){gx.O.AV12DeptoEncontradoId=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOENCONTRADOID")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPTOENCONTRADONOME",gxz:"ZV16DeptoEncontradoNome",gxold:"OV16DeptoEncontradoNome",gxvar:"AV16DeptoEncontradoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16DeptoEncontradoNome=Value},v2z:function(Value){gx.O.ZV16DeptoEncontradoNome=Value},v2c:function(){gx.fn.setControlValue("vDEPTOENCONTRADONOME",gx.O.AV16DeptoEncontradoNome,0)},c2v:function(){gx.O.AV16DeptoEncontradoNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOENCONTRADONOME")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE2",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISTORIABEMOBSERVACAO",gxz:"ZV13VistoriaBemObservacao",gxold:"OV13VistoriaBemObservacao",gxvar:"AV13VistoriaBemObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13VistoriaBemObservacao=Value},v2z:function(Value){gx.O.ZV13VistoriaBemObservacao=Value},v2c:function(){gx.fn.setControlValue("vVISTORIABEMOBSERVACAO",gx.O.AV13VistoriaBemObservacao,0)},c2v:function(){gx.O.AV13VistoriaBemObservacao=this.val()},val:function(){return gx.fn.getControlValue("vVISTORIABEMOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TABLE9",grid:0};
   GXValidFnc[56]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIO",gxz:"ZV5Usuario",gxold:"OV5Usuario",gxvar:"AV5Usuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Usuario=Value},v2z:function(Value){gx.O.ZV5Usuario=Value},v2c:function(){gx.fn.setControlValue("vUSUARIO",gx.O.AV5Usuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5Usuario=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[60]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAHORA",gxz:"ZV6DataHora",gxold:"OV6DataHora",gxvar:"AV6DataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6DataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6DataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAHORA",gx.O.AV6DataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6DataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[66]={fld:"TABLE8",grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV19AcessoSistemaSequencia",gxold:"OV19AcessoSistemaSequencia",gxvar:"AV19AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV19AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"JS", format:2,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraodepartamento,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAODEPARTAMENTO",gxz:"ZV25EmpresaPadraoDepartamento",gxold:"OV25EmpresaPadraoDepartamento",gxvar:"AV25EmpresaPadraoDepartamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25EmpresaPadraoDepartamento=Value},v2z:function(Value){gx.O.ZV25EmpresaPadraoDepartamento=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAODEPARTAMENTO",gx.O.AV25EmpresaPadraoDepartamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25EmpresaPadraoDepartamento=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAODEPARTAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[75]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraoresponsavel,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAORESPONSAVEL",gxz:"ZV24EmpresaPadraoResponsavel",gxold:"OV24EmpresaPadraoResponsavel",gxvar:"AV24EmpresaPadraoResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24EmpresaPadraoResponsavel=Value},v2z:function(Value){gx.O.ZV24EmpresaPadraoResponsavel=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAORESPONSAVEL",gx.O.AV24EmpresaPadraoResponsavel,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24EmpresaPadraoResponsavel=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAORESPONSAVEL")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[76]={fld:"JSMASC", format:2,grid:0};
   GXValidFnc[78]={fld:"BTNHELP",grid:0};
   GXValidFnc[79]={fld:"PROMPT_BEMCODIGO_BEMSUBGRUPO",grid:0};
   GXValidFnc[80]={fld:"PROMPT_RESPVISTORIAID",grid:0};
   GXValidFnc[81]={fld:"PROMPT_DEPTOINDICADOID",grid:0};
   GXValidFnc[82]={fld:"PROMPT_DEPTOENCONTRADOID",grid:0};
   this.AV7BemCodigo = 0 ;
   this.ZV7BemCodigo = 0 ;
   this.OV7BemCodigo = 0 ;
   this.AV8BemSubgrupo = 0 ;
   this.ZV8BemSubgrupo = 0 ;
   this.OV8BemSubgrupo = 0 ;
   this.AV34BemDescricaoResumida = "" ;
   this.ZV34BemDescricaoResumida = "" ;
   this.OV34BemDescricaoResumida = "" ;
   this.AV9VistoriaBemData = gx.date.nullDate() ;
   this.ZV9VistoriaBemData = gx.date.nullDate() ;
   this.OV9VistoriaBemData = gx.date.nullDate() ;
   this.AV10RespVistoriaId = 0 ;
   this.ZV10RespVistoriaId = 0 ;
   this.OV10RespVistoriaId = 0 ;
   this.AV14RespVistoriaNome = "" ;
   this.ZV14RespVistoriaNome = "" ;
   this.OV14RespVistoriaNome = "" ;
   this.AV11DeptoIndicadoId = "" ;
   this.ZV11DeptoIndicadoId = "" ;
   this.OV11DeptoIndicadoId = "" ;
   this.AV15DeptoIndicadoNome = "" ;
   this.ZV15DeptoIndicadoNome = "" ;
   this.OV15DeptoIndicadoNome = "" ;
   this.AV12DeptoEncontradoId = "" ;
   this.ZV12DeptoEncontradoId = "" ;
   this.OV12DeptoEncontradoId = "" ;
   this.AV16DeptoEncontradoNome = "" ;
   this.ZV16DeptoEncontradoNome = "" ;
   this.OV16DeptoEncontradoNome = "" ;
   this.AV13VistoriaBemObservacao = "" ;
   this.ZV13VistoriaBemObservacao = "" ;
   this.OV13VistoriaBemObservacao = "" ;
   this.AV5Usuario = "" ;
   this.ZV5Usuario = "" ;
   this.OV5Usuario = "" ;
   this.AV6DataHora = gx.date.nullDate() ;
   this.ZV6DataHora = gx.date.nullDate() ;
   this.OV6DataHora = gx.date.nullDate() ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.ZV19AcessoSistemaSequencia = 0 ;
   this.OV19AcessoSistemaSequencia = 0 ;
   this.AV25EmpresaPadraoDepartamento = "" ;
   this.ZV25EmpresaPadraoDepartamento = "" ;
   this.OV25EmpresaPadraoDepartamento = "" ;
   this.AV24EmpresaPadraoResponsavel = "" ;
   this.ZV24EmpresaPadraoResponsavel = "" ;
   this.OV24EmpresaPadraoResponsavel = "" ;
   this.AV7BemCodigo = 0 ;
   this.AV8BemSubgrupo = 0 ;
   this.AV34BemDescricaoResumida = "" ;
   this.AV9VistoriaBemData = gx.date.nullDate() ;
   this.AV10RespVistoriaId = 0 ;
   this.AV14RespVistoriaNome = "" ;
   this.AV11DeptoIndicadoId = "" ;
   this.AV15DeptoIndicadoNome = "" ;
   this.AV12DeptoEncontradoId = "" ;
   this.AV16DeptoEncontradoNome = "" ;
   this.AV13VistoriaBemObservacao = "" ;
   this.AV5Usuario = "" ;
   this.AV6DataHora = gx.date.nullDate() ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.AV25EmpresaPadraoDepartamento = "" ;
   this.AV24EmpresaPadraoResponsavel = "" ;
   this.AV31BemCodigoParm = 0 ;
   this.AV32BemSubgrupoParm = 0 ;
   this.AV33VistoriaBemDataParm = gx.date.nullDate() ;
   this.AV41Modo = "" ;
   this.A2281ResponsavelPatId = 0 ;
   this.A2280ResponsavelPatEmpresaId = "" ;
   this.A2282ResponsavelPatNome = "" ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A2249DepartamentoNome = "" ;
   this.A2318BemSubgrupo = 0 ;
   this.A2262BemCodigo = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2264BemDescricaoResumida = "" ;
   this.A2456VistoriaBemData = gx.date.nullDate() ;
   this.A2451RespVistoriaId = 0 ;
   this.A2445DeptoEncontradoId = "" ;
   this.A2448DeptoIndicadoId = "" ;
   this.A2453VistoriaBemObservacao = "" ;
   this.A2454VistoriaBemUsuarioAlt = "" ;
   this.A2455VistoriaBemDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e1123e2_client": ["'FECHAR'", true] ,"e1323e2_client": ["ENTER", true] ,"e1423e2_client": ["VBEMCODIGO.ISVALID", true] ,"e1523e2_client": ["VBEMSUBGRUPO.ISVALID", true] ,"e1823e2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV41Modo',fld:'vMODO'}],[{av:'gx.fn.getCtrlProperty("vDEPTOINDICADOID","Enabled")',ctrl:'vDEPTOINDICADOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBEMCODIGO","Enabled")',ctrl:'vBEMCODIGO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBEMSUBGRUPO","Enabled")',ctrl:'vBEMSUBGRUPO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vVISTORIABEMDATA","Enabled")',ctrl:'vVISTORIABEMDATA',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV41Modo',fld:'vMODO'},{av:'AV7BemCodigo',fld:'vBEMCODIGO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV8BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV9VistoriaBemData',fld:'vVISTORIABEMDATA'},{av:'A2456VistoriaBemData',fld:'VISTORIABEMDATA'},{av:'AV10RespVistoriaId',fld:'vRESPVISTORIAID'},{av:'A2280ResponsavelPatEmpresaId',fld:'RESPONSAVELPATEMPRESAID'},{av:'AV24EmpresaPadraoResponsavel',fld:'vEMPRESAPADRAORESPONSAVEL'},{av:'A2281ResponsavelPatId',fld:'RESPONSAVELPATID'},{av:'AV11DeptoIndicadoId',fld:'vDEPTOINDICADOID'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'AV25EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'AV12DeptoEncontradoId',fld:'vDEPTOENCONTRADOID'},{av:'AV13VistoriaBemObservacao',fld:'vVISTORIABEMOBSERVACAO'},{av:'AV34BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV14RespVistoriaNome',fld:'vRESPVISTORIANOME'},{av:'AV16DeptoEncontradoNome',fld:'vDEPTOENCONTRADONOME'},{av:'AV15DeptoIndicadoNome',fld:'vDEPTOINDICADONOME'},{av:'AV20vistoriabemusuarioalt',fld:'vVISTORIABEMUSUARIOALT'},{av:'AV21vistoriabemdatahoraalt',fld:'vVISTORIABEMDATAHORAALT'}],[{av:'AV17TpErro',fld:'vTPERRO'},{av:'AV47GXLvl71',fld:'vGXLVL71'},{av:'AV49GXLvl110',fld:'vGXLVL110'},{av:'AV50GXLvl127',fld:'vGXLVL127'},{av:'AV51GXLvl144',fld:'vGXLVL144'},{av:'AV30Retorno',fld:'vRETORNO'},{av:'AV41Modo',fld:'vMODO'},{av:'AV13VistoriaBemObservacao',fld:'vVISTORIABEMOBSERVACAO'},{av:'AV12DeptoEncontradoId',fld:'vDEPTOENCONTRADOID'},{av:'AV11DeptoIndicadoId',fld:'vDEPTOINDICADOID'},{av:'AV10RespVistoriaId',fld:'vRESPVISTORIAID'},{av:'AV9VistoriaBemData',fld:'vVISTORIABEMDATA'},{av:'AV8BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV7BemCodigo',fld:'vBEMCODIGO'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV14RespVistoriaNome',fld:'vRESPVISTORIANOME'},{av:'AV16DeptoEncontradoNome',fld:'vDEPTOENCONTRADONOME'},{av:'AV15DeptoIndicadoNome',fld:'vDEPTOINDICADONOME'},{av:'AV5Usuario',fld:'vUSUARIO'},{av:'AV6DataHora',fld:'vDATAHORA'}]];
   this.EvtParms["VBEMCODIGO.ISVALID"] = [[{av:'AV41Modo',fld:'vMODO'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7BemCodigo',fld:'vBEMCODIGO'},{av:'AV8BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV11DeptoIndicadoId',fld:'vDEPTOINDICADOID'},{av:'AV15DeptoIndicadoNome',fld:'vDEPTOINDICADONOME'}],[{av:'AV34BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}]];
   this.EvtParms["VBEMSUBGRUPO.ISVALID"] = [[{av:'AV41Modo',fld:'vMODO'},{av:'AV23EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7BemCodigo',fld:'vBEMCODIGO'},{av:'AV8BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV11DeptoIndicadoId',fld:'vDEPTOINDICADOID'},{av:'AV15DeptoIndicadoNome',fld:'vDEPTOINDICADONOME'}],[{av:'AV34BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}]];
   this.setPrompt("PROMPT_BEMCODIGO_BEMSUBGRUPO", [13,15]);
   this.setPrompt("PROMPT_RESPVISTORIAID", [28]);
   this.setPrompt("PROMPT_DEPTOINDICADOID", [35]);
   this.setPrompt("PROMPT_DEPTOENCONTRADOID", [42]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV31BemCodigoParm", "vBEMCODIGOPARM", 0, "int");
   this.setVCMap("AV32BemSubgrupoParm", "vBEMSUBGRUPOPARM", 0, "int");
   this.setVCMap("AV33VistoriaBemDataParm", "vVISTORIABEMDATAPARM", 0, "date");
   this.setVCMap("AV41Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastrovistoriabem());
