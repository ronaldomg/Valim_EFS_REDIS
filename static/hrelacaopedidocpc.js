/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:19:9.61
*/
gx.evt.autoSkip = false;
gx.define('hrelacaopedidocpc', false, function () {
   this.ServerClass =  "hrelacaopedidocpc" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Obracodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOBRACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipoconcretocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCONCRETOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Betoneiracodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBETONEIRACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Motoristacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMOTORISTACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipoconcretoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCONCRETOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Obraempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOBRAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Betoneiraempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBETONEIRAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Motoristaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMOTORISTAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e152g41_client=function()
   {
      this.clearMessages();
      if ( this.AV49TpRelatorio == "1" )
      {
         gx.fn.setCtrlProperty("TEXTBLOCK1","Visible", 1 );
         gx.fn.setCtrlProperty("vTPORDENACAO","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TEXTBLOCK1","Visible", 0 );
         gx.fn.setCtrlProperty("vTPORDENACAO","Visible", 0 );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TEXTBLOCK1","Visible")',ctrl:'TEXTBLOCK1',prop:'Visible'},{ctrl:'vTPORDENACAO'}]);
   };
   this.e112g42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132g42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e162g42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.e172g41_client=function()
   {
      this.executeServerEvent("PROMPT_TIPOCONCRETOCODIGO.GXPROMPT", true, null, false, true);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,16,18,21,23,26,30,32,35,37,39,42,44,45,48,50,51,54,56,57,60,62,63,66,68,69,72,74,77,79,83,92,93,96,97,98,99,100,101,102,103,104,105,106,107,109,111,112,113,114,115];
   this.GXLastCtrlId =115;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPRELATORIO",gxz:"ZV49TpRelatorio",gxold:"OV49TpRelatorio",gxvar:"AV49TpRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV49TpRelatorio=Value},v2z:function(Value){gx.O.ZV49TpRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTPRELATORIO",gx.O.AV49TpRelatorio)},c2v:function(){gx.O.AV49TpRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTPRELATORIO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPORDENACAO",gxz:"ZV48TpOrdenacao",gxold:"OV48TpOrdenacao",gxvar:"AV48TpOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV48TpOrdenacao=Value},v2z:function(Value){gx.O.ZV48TpOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPORDENACAO",gx.O.AV48TpOrdenacao)},c2v:function(){gx.O.AV48TpOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vTPORDENACAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[32]={fld:"TABLE5",grid:0};
   GXValidFnc[35]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINICIO",gxz:"ZV10DtInicio",gxold:"OV10DtInicio",gxvar:"AV10DtInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10DtInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10DtInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINICIO",gx.O.AV10DtInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10DtInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[37]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFINAL",gxz:"ZV9DtFinal",gxold:"OV9DtFinal",gxvar:"AV9DtFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9DtFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9DtFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFINAL",gx.O.AV9DtFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9DtFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV35PessoaId",gxold:"OV35PessoaId",gxvar:"AV35PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV35PessoaId,0)},c2v:function(){gx.O.AV35PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV34PessoaFantasia",gxold:"OV34PessoaFantasia",gxvar:"AV34PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34PessoaFantasia=Value},v2z:function(Value){gx.O.ZV34PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV34PessoaFantasia,0)},c2v:function(){gx.O.AV34PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Obracodigo,isvalid:null,rgrid:[],fld:"vOBRACODIGO",gxz:"ZV26ObraCodigo",gxold:"OV26ObraCodigo",gxvar:"AV26ObraCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ObraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26ObraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOBRACODIGO",gx.O.AV26ObraCodigo,0)},c2v:function(){gx.O.AV26ObraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOBRACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBRANOME",gxz:"ZV29ObraNome",gxold:"OV29ObraNome",gxvar:"AV29ObraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ObraNome=Value},v2z:function(Value){gx.O.ZV29ObraNome=Value},v2c:function(){gx.fn.setControlValue("vOBRANOME",gx.O.AV29ObraNome,0)},c2v:function(){gx.O.AV29ObraNome=this.val()},val:function(){return gx.fn.getControlValue("vOBRANOME")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipoconcretocodigo,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOCODIGO",gxz:"ZV44TipoConcretoCodigo",gxold:"OV44TipoConcretoCodigo",gxvar:"AV44TipoConcretoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44TipoConcretoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44TipoConcretoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOCODIGO",gx.O.AV44TipoConcretoCodigo,0)},c2v:function(){gx.O.AV44TipoConcretoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONCRETOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETODESCRICAO",gxz:"ZV46TipoConcretoDescricao",gxold:"OV46TipoConcretoDescricao",gxvar:"AV46TipoConcretoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46TipoConcretoDescricao=Value},v2z:function(Value){gx.O.ZV46TipoConcretoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETODESCRICAO",gx.O.AV46TipoConcretoDescricao,0)},c2v:function(){gx.O.AV46TipoConcretoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Betoneiracodigo,isvalid:null,rgrid:[],fld:"vBETONEIRACODIGO",gxz:"ZV5BetoneiraCodigo",gxold:"OV5BetoneiraCodigo",gxvar:"AV5BetoneiraCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5BetoneiraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5BetoneiraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBETONEIRACODIGO",gx.O.AV5BetoneiraCodigo,0)},c2v:function(){gx.O.AV5BetoneiraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBETONEIRACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBETONEIRAPLACA",gxz:"ZV8BetoneiraPlaca",gxold:"OV8BetoneiraPlaca",gxvar:"AV8BetoneiraPlaca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8BetoneiraPlaca=Value},v2z:function(Value){gx.O.ZV8BetoneiraPlaca=Value},v2c:function(){gx.fn.setControlValue("vBETONEIRAPLACA",gx.O.AV8BetoneiraPlaca,0)},c2v:function(){gx.O.AV8BetoneiraPlaca=this.val()},val:function(){return gx.fn.getControlValue("vBETONEIRAPLACA")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Motoristacodigo,isvalid:null,rgrid:[],fld:"vMOTORISTACODIGO",gxz:"ZV18MotoristaCodigo",gxold:"OV18MotoristaCodigo",gxvar:"AV18MotoristaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18MotoristaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18MotoristaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOTORISTACODIGO",gx.O.AV18MotoristaCodigo,0)},c2v:function(){gx.O.AV18MotoristaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOTORISTACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOTORISTANOME",gxz:"ZV21MotoristaNome",gxold:"OV21MotoristaNome",gxvar:"AV21MotoristaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21MotoristaNome=Value},v2z:function(Value){gx.O.ZV21MotoristaNome=Value},v2c:function(){gx.fn.setControlValue("vMOTORISTANOME",gx.O.AV21MotoristaNome,0)},c2v:function(){gx.O.AV21MotoristaNome=this.val()},val:function(){return gx.fn.getControlValue("vMOTORISTANOME")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTPEDIDO",gxz:"ZV42StPedido",gxold:"OV42StPedido",gxvar:"AV42StPedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV42StPedido=Value},v2z:function(Value){gx.O.ZV42StPedido=Value},v2c:function(){gx.fn.setComboBoxValue("vSTPEDIDO",gx.O.AV42StPedido)},c2v:function(){gx.O.AV42StPedido=this.val()},val:function(){return gx.fn.getControlValue("vSTPEDIDO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFATURADO",gxz:"ZV40SnFaturado",gxold:"OV40SnFaturado",gxvar:"AV40SnFaturado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV40SnFaturado=Value},v2z:function(Value){gx.O.ZV40SnFaturado=Value},v2c:function(){gx.fn.setComboBoxValue("vSNFATURADO",gx.O.AV40SnFaturado)},c2v:function(){gx.O.AV40SnFaturado=this.val()},val:function(){return gx.fn.getControlValue("vSNFATURADO")},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPOBS",gxz:"ZV41SnImpObs",gxold:"OV41SnImpObs",gxvar:"AV41SnImpObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV41SnImpObs=Value},v2z:function(Value){gx.O.ZV41SnImpObs=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPOBS",gx.O.AV41SnImpObs,"S")},c2v:function(){gx.O.AV41SnImpObs=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPOBS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[92]={fld:"JS", format:2,grid:0};
   GXValidFnc[93]={fld:"TABINVISIVEL",grid:0};
   GXValidFnc[96]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBRACODIGOIN",gxz:"ZV27ObraCodigoIn",gxold:"OV27ObraCodigoIn",gxvar:"AV27ObraCodigoIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ObraCodigoIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ObraCodigoIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOBRACODIGOIN",gx.O.AV27ObraCodigoIn,0)},c2v:function(){gx.O.AV27ObraCodigoIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOBRACODIGOIN",'.')},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBETONEIRACODIGOIN",gxz:"ZV6BetoneiraCodigoIn",gxold:"OV6BetoneiraCodigoIn",gxvar:"AV6BetoneiraCodigoIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6BetoneiraCodigoIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6BetoneiraCodigoIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBETONEIRACODIGOIN",gx.O.AV6BetoneiraCodigoIn,0)},c2v:function(){gx.O.AV6BetoneiraCodigoIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBETONEIRACODIGOIN",'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOTORISTACODIGOIN",gxz:"ZV19MotoristaCodigoIn",gxold:"OV19MotoristaCodigoIn",gxvar:"AV19MotoristaCodigoIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19MotoristaCodigoIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19MotoristaCodigoIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOTORISTACODIGOIN",gx.O.AV19MotoristaCodigoIn,0)},c2v:function(){gx.O.AV19MotoristaCodigoIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOTORISTACODIGOIN",'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBRACODIGOIN",gxz:"ZV27ObraCodigoIn",gxold:"OV27ObraCodigoIn",gxvar:"AV27ObraCodigoIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ObraCodigoIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ObraCodigoIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOBRACODIGOIN",gx.O.AV27ObraCodigoIn,0)},c2v:function(){gx.O.AV27ObraCodigoIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOBRACODIGOIN",'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV37Sim",gxold:"OV37Sim",gxvar:"AV37Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37Sim=Value},v2z:function(Value){gx.O.ZV37Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV37Sim,0)},c2v:function(){gx.O.AV37Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV23Nao",gxold:"OV23Nao",gxvar:"AV23Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Nao=Value},v2z:function(Value){gx.O.ZV23Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV23Nao,0)},c2v:function(){gx.O.AV23Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOCODIGOIN",gxz:"ZV45TipoConcretoCodigoIn",gxold:"OV45TipoConcretoCodigoIn",gxvar:"AV45TipoConcretoCodigoIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45TipoConcretoCodigoIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45TipoConcretoCodigoIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOCODIGOIN",gx.O.AV45TipoConcretoCodigoIn,0)},c2v:function(){gx.O.AV45TipoConcretoCodigoIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONCRETOCODIGOIN",'.')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipoconcretoempresaid,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOEMPRESAID",gxz:"ZV47TipoConcretoEmpresaId",gxold:"OV47TipoConcretoEmpresaId",gxvar:"AV47TipoConcretoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47TipoConcretoEmpresaId=Value},v2z:function(Value){gx.O.ZV47TipoConcretoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOEMPRESAID",gx.O.AV47TipoConcretoEmpresaId,0)},c2v:function(){gx.O.AV47TipoConcretoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV33PessoaEmpresaId",gxold:"OV33PessoaEmpresaId",gxvar:"AV33PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV33PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV33PessoaEmpresaId,0)},c2v:function(){gx.O.AV33PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Obraempresaid,isvalid:null,rgrid:[],fld:"vOBRAEMPRESAID",gxz:"ZV28ObraEmpresaId",gxold:"OV28ObraEmpresaId",gxvar:"AV28ObraEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ObraEmpresaId=Value},v2z:function(Value){gx.O.ZV28ObraEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vOBRAEMPRESAID",gx.O.AV28ObraEmpresaId,0)},c2v:function(){gx.O.AV28ObraEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vOBRAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Betoneiraempresaid,isvalid:null,rgrid:[],fld:"vBETONEIRAEMPRESAID",gxz:"ZV7BetoneiraEmpresaId",gxold:"OV7BetoneiraEmpresaId",gxvar:"AV7BetoneiraEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7BetoneiraEmpresaId=Value},v2z:function(Value){gx.O.ZV7BetoneiraEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vBETONEIRAEMPRESAID",gx.O.AV7BetoneiraEmpresaId,0)},c2v:function(){gx.O.AV7BetoneiraEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vBETONEIRAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Motoristaempresaid,isvalid:null,rgrid:[],fld:"vMOTORISTAEMPRESAID",gxz:"ZV20MotoristaEmpresaId",gxold:"OV20MotoristaEmpresaId",gxvar:"AV20MotoristaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20MotoristaEmpresaId=Value},v2z:function(Value){gx.O.ZV20MotoristaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vMOTORISTAEMPRESAID",gx.O.AV20MotoristaEmpresaId,0)},c2v:function(){gx.O.AV20MotoristaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vMOTORISTAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"BTNHELP",grid:0};
   GXValidFnc[111]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[112]={fld:"PROMPT_OBRACODIGO",grid:0};
   GXValidFnc[113]={fld:"PROMPT_TIPOCONCRETOCODIGO",grid:0};
   GXValidFnc[114]={fld:"PROMPT_BETONEIRACODIGO",grid:0};
   GXValidFnc[115]={fld:"PROMPT_MOTORISTACODIGO",grid:0};
   this.AV49TpRelatorio = "" ;
   this.ZV49TpRelatorio = "" ;
   this.OV49TpRelatorio = "" ;
   this.AV48TpOrdenacao = "" ;
   this.ZV48TpOrdenacao = "" ;
   this.OV48TpOrdenacao = "" ;
   this.AV10DtInicio = gx.date.nullDate() ;
   this.ZV10DtInicio = gx.date.nullDate() ;
   this.OV10DtInicio = gx.date.nullDate() ;
   this.AV9DtFinal = gx.date.nullDate() ;
   this.ZV9DtFinal = gx.date.nullDate() ;
   this.OV9DtFinal = gx.date.nullDate() ;
   this.AV35PessoaId = 0 ;
   this.ZV35PessoaId = 0 ;
   this.OV35PessoaId = 0 ;
   this.AV34PessoaFantasia = "" ;
   this.ZV34PessoaFantasia = "" ;
   this.OV34PessoaFantasia = "" ;
   this.AV26ObraCodigo = 0 ;
   this.ZV26ObraCodigo = 0 ;
   this.OV26ObraCodigo = 0 ;
   this.AV29ObraNome = "" ;
   this.ZV29ObraNome = "" ;
   this.OV29ObraNome = "" ;
   this.AV44TipoConcretoCodigo = 0 ;
   this.ZV44TipoConcretoCodigo = 0 ;
   this.OV44TipoConcretoCodigo = 0 ;
   this.AV46TipoConcretoDescricao = "" ;
   this.ZV46TipoConcretoDescricao = "" ;
   this.OV46TipoConcretoDescricao = "" ;
   this.AV5BetoneiraCodigo = 0 ;
   this.ZV5BetoneiraCodigo = 0 ;
   this.OV5BetoneiraCodigo = 0 ;
   this.AV8BetoneiraPlaca = "" ;
   this.ZV8BetoneiraPlaca = "" ;
   this.OV8BetoneiraPlaca = "" ;
   this.AV18MotoristaCodigo = 0 ;
   this.ZV18MotoristaCodigo = 0 ;
   this.OV18MotoristaCodigo = 0 ;
   this.AV21MotoristaNome = "" ;
   this.ZV21MotoristaNome = "" ;
   this.OV21MotoristaNome = "" ;
   this.AV42StPedido = "" ;
   this.ZV42StPedido = "" ;
   this.OV42StPedido = "" ;
   this.AV40SnFaturado = "" ;
   this.ZV40SnFaturado = "" ;
   this.OV40SnFaturado = "" ;
   this.AV41SnImpObs = "" ;
   this.ZV41SnImpObs = "" ;
   this.OV41SnImpObs = "" ;
   this.AV27ObraCodigoIn = 0 ;
   this.ZV27ObraCodigoIn = 0 ;
   this.OV27ObraCodigoIn = 0 ;
   this.AV6BetoneiraCodigoIn = 0 ;
   this.ZV6BetoneiraCodigoIn = 0 ;
   this.OV6BetoneiraCodigoIn = 0 ;
   this.AV19MotoristaCodigoIn = 0 ;
   this.ZV19MotoristaCodigoIn = 0 ;
   this.OV19MotoristaCodigoIn = 0 ;
   this.AV37Sim = "" ;
   this.ZV37Sim = "" ;
   this.OV37Sim = "" ;
   this.AV23Nao = "" ;
   this.ZV23Nao = "" ;
   this.OV23Nao = "" ;
   this.AV45TipoConcretoCodigoIn = 0 ;
   this.ZV45TipoConcretoCodigoIn = 0 ;
   this.OV45TipoConcretoCodigoIn = 0 ;
   this.AV47TipoConcretoEmpresaId = "" ;
   this.ZV47TipoConcretoEmpresaId = "" ;
   this.OV47TipoConcretoEmpresaId = "" ;
   this.AV33PessoaEmpresaId = "" ;
   this.ZV33PessoaEmpresaId = "" ;
   this.OV33PessoaEmpresaId = "" ;
   this.AV28ObraEmpresaId = "" ;
   this.ZV28ObraEmpresaId = "" ;
   this.OV28ObraEmpresaId = "" ;
   this.AV7BetoneiraEmpresaId = "" ;
   this.ZV7BetoneiraEmpresaId = "" ;
   this.OV7BetoneiraEmpresaId = "" ;
   this.AV20MotoristaEmpresaId = "" ;
   this.ZV20MotoristaEmpresaId = "" ;
   this.OV20MotoristaEmpresaId = "" ;
   this.AV49TpRelatorio = "" ;
   this.AV48TpOrdenacao = "" ;
   this.AV10DtInicio = gx.date.nullDate() ;
   this.AV9DtFinal = gx.date.nullDate() ;
   this.AV35PessoaId = 0 ;
   this.AV34PessoaFantasia = "" ;
   this.AV26ObraCodigo = 0 ;
   this.AV29ObraNome = "" ;
   this.AV44TipoConcretoCodigo = 0 ;
   this.AV46TipoConcretoDescricao = "" ;
   this.AV5BetoneiraCodigo = 0 ;
   this.AV8BetoneiraPlaca = "" ;
   this.AV18MotoristaCodigo = 0 ;
   this.AV21MotoristaNome = "" ;
   this.AV42StPedido = "" ;
   this.AV40SnFaturado = "" ;
   this.AV41SnImpObs = "" ;
   this.AV27ObraCodigoIn = 0 ;
   this.AV6BetoneiraCodigoIn = 0 ;
   this.AV19MotoristaCodigoIn = 0 ;
   this.AV37Sim = "" ;
   this.AV23Nao = "" ;
   this.AV45TipoConcretoCodigoIn = 0 ;
   this.AV47TipoConcretoEmpresaId = "" ;
   this.AV33PessoaEmpresaId = "" ;
   this.AV28ObraEmpresaId = "" ;
   this.AV7BetoneiraEmpresaId = "" ;
   this.AV20MotoristaEmpresaId = "" ;
   this.A11286MotoristaCodigo = 0 ;
   this.A11285MotoristaEmpresaId = "" ;
   this.A11288BetoneiraCodigo = 0 ;
   this.A11287BetoneiraEmpresaId = "" ;
   this.A11321TipoConcretoCodigo = 0 ;
   this.A11449TipoConcretoEmpresaId = "" ;
   this.A11312ObraCodigo = 0 ;
   this.A11311ObraEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.Events = {"e112g42_client": ["'FECHAR'", true] ,"e132g42_client": ["ENTER", true] ,"e162g42_client": ["CANCEL", true] ,"e172g41_client": ["PROMPT_TIPOCONCRETOCODIGO.GXPROMPT", true] ,"e152g41_client": ["VTPRELATORIO.CLICK", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV39SnErro',fld:'vSNERRO'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV36QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV49TpRelatorio',fld:'vTPRELATORIO'},{av:'AV48TpOrdenacao',fld:'vTPORDENACAO'},{av:'AV10DtInicio',fld:'vDTINICIO'},{av:'AV9DtFinal',fld:'vDTFINAL'},{av:'AV35PessoaId',fld:'vPESSOAID'},{av:'AV26ObraCodigo',fld:'vOBRACODIGO'},{av:'AV44TipoConcretoCodigo',fld:'vTIPOCONCRETOCODIGO'},{av:'AV5BetoneiraCodigo',fld:'vBETONEIRACODIGO'},{av:'AV18MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV42StPedido',fld:'vSTPEDIDO'},{av:'AV40SnFaturado',fld:'vSNFATURADO'},{av:'AV41SnImpObs',fld:'vSNIMPOBS'},{av:'AV57Pgmdesc',fld:'vPGMDESC'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV33PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A11311ObraEmpresaId',fld:'OBRAEMPRESAID'},{av:'AV28ObraEmpresaId',fld:'vOBRAEMPRESAID'},{av:'A11312ObraCodigo',fld:'OBRACODIGO'},{av:'A11449TipoConcretoEmpresaId',fld:'TIPOCONCRETOEMPRESAID'},{av:'AV47TipoConcretoEmpresaId',fld:'vTIPOCONCRETOEMPRESAID'},{av:'A11321TipoConcretoCodigo',fld:'TIPOCONCRETOCODIGO'},{av:'A11287BetoneiraEmpresaId',fld:'BETONEIRAEMPRESAID'},{av:'AV7BetoneiraEmpresaId',fld:'vBETONEIRAEMPRESAID'},{av:'A11288BetoneiraCodigo',fld:'BETONEIRACODIGO'},{av:'A11285MotoristaEmpresaId',fld:'MOTORISTAEMPRESAID'},{av:'AV20MotoristaEmpresaId',fld:'vMOTORISTAEMPRESAID'},{av:'A11286MotoristaCodigo',fld:'MOTORISTACODIGO'}],[{av:'AV25NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV24NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV41SnImpObs',fld:'vSNIMPOBS'},{av:'AV40SnFaturado',fld:'vSNFATURADO'},{av:'AV42StPedido',fld:'vSTPEDIDO'},{av:'AV18MotoristaCodigo',fld:'vMOTORISTACODIGO'},{av:'AV5BetoneiraCodigo',fld:'vBETONEIRACODIGO'},{av:'AV44TipoConcretoCodigo',fld:'vTIPOCONCRETOCODIGO'},{av:'AV26ObraCodigo',fld:'vOBRACODIGO'},{av:'AV35PessoaId',fld:'vPESSOAID'},{av:'AV9DtFinal',fld:'vDTFINAL'},{av:'AV10DtInicio',fld:'vDTINICIO'},{av:'AV48TpOrdenacao',fld:'vTPORDENACAO'},{av:'AV49TpRelatorio',fld:'vTPRELATORIO'},{av:'AV36QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV39SnErro',fld:'vSNERRO'},{av:'AV58GXLvl133',fld:'vGXLVL133'},{av:'AV59GXLvl146',fld:'vGXLVL146'},{av:'AV60GXLvl159',fld:'vGXLVL159'},{av:'AV61GXLvl172',fld:'vGXLVL172'},{av:'AV62GXLvl185',fld:'vGXLVL185'}]];
   this.EvtParms["VTPRELATORIO.CLICK"] = [[{av:'AV49TpRelatorio',fld:'vTPRELATORIO'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK1","Visible")',ctrl:'TEXTBLOCK1',prop:'Visible'},{ctrl:'vTPORDENACAO'}]];
   this.setPrompt("PROMPT_PESSOAID", [44]);
   this.setPrompt("PROMPT_OBRACODIGO", [50]);
   this.setPrompt("PROMPT_TIPOCONCRETOCODIGO", [56]);
   this.setPrompt("PROMPT_BETONEIRACODIGO", [62]);
   this.setPrompt("PROMPT_MOTORISTACODIGO", [68]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaopedidocpc());
