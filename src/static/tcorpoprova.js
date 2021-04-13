/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:37:53.42
*/
gx.evt.autoSkip = false;
gx.define('tcorpoprova', false, function () {
   this.ServerClass =  "tcorpoprova" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV14PedidoCPCAno=gx.fn.getIntegerValue("vPEDIDOCPCANO",'.') ;
      this.AV16PedidoCPCNumero=gx.fn.getIntegerValue("vPEDIDOCPCNUMERO",'.') ;
      this.AV8CorpoProvaSerie=gx.fn.getIntegerValue("vCORPOPROVASERIE",'.') ;
      this.A11377CorpoProvaDescPeca=gx.fn.getControlValue("CORPOPROVADESCPECA") ;
      this.A11660CorpoProvaSlump=gx.fn.getControlValue("CORPOPROVASLUMP") ;
      this.A11473CorpoProvaDataHoraAlt=gx.fn.getDateTimeValue("CORPOPROVADATAHORAALT") ;
      this.A11472CorpoProvaUsuarioAlt=gx.fn.getControlValue("CORPOPROVAUSUARIOALT") ;
      this.AV36Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Pedidocpcano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocpcnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Corpoprovaserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CORPOPROVASERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocpcempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pedidocpcempresaid",["gx.O.A11450PedidoCPCEmpresaId", "gx.O.A11339PedidoCPCAno", "gx.O.A11340PedidoCPCNumero"],[]);
      return true;
   }
   this.e12gi842_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13gi842_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,23,25,27,30,32,35,37,38,41,43,45,48,50,51,54,56,57,60,62,65,68,70,72,74,78,80,82,87,90,92,97,101,103,105,107,109,111,114,116,131,132,134];
   this.GXLastCtrlId =134;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE16",grid:0};
   GXValidFnc[12]={fld:"TABLE17",grid:0};
   GXValidFnc[15]={fld:"TABLE18",grid:0};
   GXValidFnc[18]={fld:"TXTFORNEC5", format:0,grid:0};
   GXValidFnc[20]={fld:"TABLE21",grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcano,isvalid:null,rgrid:[],fld:"PEDIDOCPCANO",gxz:"Z11339PedidoCPCAno",gxold:"O11339PedidoCPCAno",gxvar:"A11339PedidoCPCAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11339PedidoCPCAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11339PedidoCPCAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCANO",gx.O.A11339PedidoCPCAno,0)},c2v:function(){gx.O.A11339PedidoCPCAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCANO",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcnumero,isvalid:null,rgrid:[],fld:"PEDIDOCPCNUMERO",gxz:"Z11340PedidoCPCNumero",gxold:"O11340PedidoCPCNumero",gxvar:"A11340PedidoCPCNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11340PedidoCPCNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11340PedidoCPCNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCNUMERO",gx.O.A11340PedidoCPCNumero,0)},c2v:function(){gx.O.A11340PedidoCPCNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXTFORNEC6", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Corpoprovaserie,isvalid:null,rgrid:[],fld:"CORPOPROVASERIE",gxz:"Z11350CorpoProvaSerie",gxold:"O11350CorpoProvaSerie",gxvar:"A11350CorpoProvaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11350CorpoProvaSerie=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11350CorpoProvaSerie=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CORPOPROVASERIE",gx.O.A11350CorpoProvaSerie,0)},c2v:function(){gx.O.A11350CorpoProvaSerie=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CORPOPROVASERIE",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TXTCFOP3", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOCODIGO",gxz:"ZV27TipoConcretocodigo",gxold:"OV27TipoConcretocodigo",gxvar:"AV27TipoConcretocodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TipoConcretocodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TipoConcretocodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOCODIGO",gx.O.AV27TipoConcretocodigo,0)},c2v:function(){gx.O.AV27TipoConcretocodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCONCRETOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETODESCRESUMIDA",gxz:"ZV29TipoConcretoDescResumida",gxold:"OV29TipoConcretoDescResumida",gxvar:"AV29TipoConcretoDescResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TipoConcretoDescResumida=Value},v2z:function(Value){gx.O.ZV29TipoConcretoDescResumida=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETODESCRESUMIDA",gx.O.AV29TipoConcretoDescResumida,0)},c2v:function(){gx.O.AV29TipoConcretoDescResumida=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETODESCRESUMIDA")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TXTFORNEC7", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCVALORCONCRETO",gxz:"ZV21PedidoCPCValorConcreto",gxold:"OV21PedidoCPCValorConcreto",gxvar:"AV21PedidoCPCValorConcreto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PedidoCPCValorConcreto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV21PedidoCPCValorConcreto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCPCVALORCONCRETO",gx.O.AV21PedidoCPCValorConcreto,2,',')},c2v:function(){gx.O.AV21PedidoCPCValorConcreto=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCPCVALORCONCRETO",'.',',')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE20",grid:0};
   GXValidFnc[48]={fld:"TXTCFOP6", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCOBRAPESSOAID",gxz:"ZV20PedidoCPCObraPessoaId",gxold:"OV20PedidoCPCObraPessoaId",gxvar:"AV20PedidoCPCObraPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PedidoCPCObraPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PedidoCPCObraPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCOBRAPESSOAID",gx.O.AV20PedidoCPCObraPessoaId,0)},c2v:function(){gx.O.AV20PedidoCPCObraPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCPCOBRAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCOBRAFANTASIA",gxz:"ZV18PedidoCPCObraFantasia",gxold:"OV18PedidoCPCObraFantasia",gxvar:"AV18PedidoCPCObraFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PedidoCPCObraFantasia=Value},v2z:function(Value){gx.O.ZV18PedidoCPCObraFantasia=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCOBRAFANTASIA",gx.O.AV18PedidoCPCObraFantasia,0)},c2v:function(){gx.O.AV18PedidoCPCObraFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCPCOBRAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TXTCFOP10", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCOBRACODIGO",gxz:"ZV17PedidoCPCObraCodigo",gxold:"OV17PedidoCPCObraCodigo",gxvar:"AV17PedidoCPCObraCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PedidoCPCObraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PedidoCPCObraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCOBRACODIGO",gx.O.AV17PedidoCPCObraCodigo,0)},c2v:function(){gx.O.AV17PedidoCPCObraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCPCOBRACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCOBRANOME",gxz:"ZV19PedidoCPCObraNome",gxold:"OV19PedidoCPCObraNome",gxvar:"AV19PedidoCPCObraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PedidoCPCObraNome=Value},v2z:function(Value){gx.O.ZV19PedidoCPCObraNome=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCOBRANOME",gx.O.AV19PedidoCPCObraNome,0)},c2v:function(){gx.O.AV19PedidoCPCObraNome=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCPCOBRANOME")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TXTCFOP11", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENDERECOOBRA",gxz:"ZV34EnderecoObra",gxold:"OV34EnderecoObra",gxvar:"AV34EnderecoObra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34EnderecoObra=Value},v2z:function(Value){gx.O.ZV34EnderecoObra=Value},v2c:function(){gx.fn.setControlValue("vENDERECOOBRA",gx.O.AV34EnderecoObra,0)},c2v:function(){gx.O.AV34EnderecoObra=this.val()},val:function(){return gx.fn.getControlValue("vENDERECOOBRA")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TABLE4",grid:0};
   GXValidFnc[68]={fld:"TXTCFOP4", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOCONDESC",gxz:"ZV28TipoConcretoConDesc",gxold:"OV28TipoConcretoConDesc",gxvar:"AV28TipoConcretoConDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TipoConcretoConDesc=Value},v2z:function(Value){gx.O.ZV28TipoConcretoConDesc=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOCONDESC",gx.O.AV28TipoConcretoConDesc,0)},c2v:function(){gx.O.AV28TipoConcretoConDesc=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOCONDESC")},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"decimal",len:7,dec:1,sign:false,pic:"ZZZZ9.9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETORESISTENCIA",gxz:"ZV31TipoConcretoresistencia",gxold:"OV31TipoConcretoresistencia",gxvar:"AV31TipoConcretoresistencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TipoConcretoresistencia=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV31TipoConcretoresistencia=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTIPOCONCRETORESISTENCIA",gx.O.AV31TipoConcretoresistencia,1,',')},c2v:function(){gx.O.AV31TipoConcretoresistencia=this.val()},val:function(){return gx.fn.getDecimalValue("vTIPOCONCRETORESISTENCIA",'.',',')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOAGREGRAUDODESC",gxz:"ZV25TipoConcretoAgreGraudoDesc",gxold:"OV25TipoConcretoAgreGraudoDesc",gxvar:"AV25TipoConcretoAgreGraudoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TipoConcretoAgreGraudoDesc=Value},v2z:function(Value){gx.O.ZV25TipoConcretoAgreGraudoDesc=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOAGREGRAUDODESC",gx.O.AV25TipoConcretoAgreGraudoDesc,0)},c2v:function(){gx.O.AV25TipoConcretoAgreGraudoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOAGREGRAUDODESC")},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETODIMENSAODESC",gxz:"ZV30TipoConcretoDimensaoDesc",gxold:"OV30TipoConcretoDimensaoDesc",gxvar:"AV30TipoConcretoDimensaoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TipoConcretoDimensaoDesc=Value},v2z:function(Value){gx.O.ZV30TipoConcretoDimensaoDesc=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETODIMENSAODESC",gx.O.AV30TipoConcretoDimensaoDesc,0)},c2v:function(){gx.O.AV30TipoConcretoDimensaoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETODIMENSAODESC")},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOCIMENTODESC",gxz:"ZV26TipoConcretoCimentoDesc",gxold:"OV26TipoConcretoCimentoDesc",gxvar:"AV26TipoConcretoCimentoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TipoConcretoCimentoDesc=Value},v2z:function(Value){gx.O.ZV26TipoConcretoCimentoDesc=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOCIMENTODESC",gx.O.AV26TipoConcretoCimentoDesc,0)},c2v:function(){gx.O.AV26TipoConcretoCimentoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOCIMENTODESC")},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOSLUMPDESC",gxz:"ZV32TipoConcretoSlumpDesc",gxold:"OV32TipoConcretoSlumpDesc",gxvar:"AV32TipoConcretoSlumpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TipoConcretoSlumpDesc=Value},v2z:function(Value){gx.O.ZV32TipoConcretoSlumpDesc=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOSLUMPDESC",gx.O.AV32TipoConcretoSlumpDesc,0)},c2v:function(){gx.O.AV32TipoConcretoSlumpDesc=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOSLUMPDESC")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TABLE3",grid:0};
   GXValidFnc[90]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVACERTIFICADO",gxz:"Z11379CorpoProvaCertificado",gxold:"O11379CorpoProvaCertificado",gxvar:"A11379CorpoProvaCertificado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11379CorpoProvaCertificado=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11379CorpoProvaCertificado=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CORPOPROVACERTIFICADO",gx.O.A11379CorpoProvaCertificado,0)},c2v:function(){gx.O.A11379CorpoProvaCertificado=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CORPOPROVACERTIFICADO",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[101]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVADATAAMOSTRAGEM",gxz:"Z11380CorpoProvaDataAmostragem",gxold:"O11380CorpoProvaDataAmostragem",gxvar:"A11380CorpoProvaDataAmostragem",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11380CorpoProvaDataAmostragem=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11380CorpoProvaDataAmostragem=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CORPOPROVADATAAMOSTRAGEM",gx.O.A11380CorpoProvaDataAmostragem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11380CorpoProvaDataAmostragem=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CORPOPROVADATAAMOSTRAGEM")},nac:gx.falseFn};
   this.declareDomainHdlr( 103 , function() {
   });
   GXValidFnc[105]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVAHORAAMOSTRAGEM",gxz:"Z11381CorpoProvaHoraAmostragem",gxold:"O11381CorpoProvaHoraAmostragem",gxvar:"A11381CorpoProvaHoraAmostragem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11381CorpoProvaHoraAmostragem=Value},v2z:function(Value){gx.O.Z11381CorpoProvaHoraAmostragem=Value},v2c:function(){gx.fn.setControlValue("CORPOPROVAHORAAMOSTRAGEM",gx.O.A11381CorpoProvaHoraAmostragem,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11381CorpoProvaHoraAmostragem=this.val()},val:function(){return gx.fn.getControlValue("CORPOPROVAHORAAMOSTRAGEM")},nac:gx.falseFn};
   this.declareDomainHdlr( 107 , function() {
   });
   GXValidFnc[109]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVACONDTEMPO",gxz:"Z11378CorpoProvaCondTempo",gxold:"O11378CorpoProvaCondTempo",gxvar:"A11378CorpoProvaCondTempo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11378CorpoProvaCondTempo=Value},v2z:function(Value){gx.O.Z11378CorpoProvaCondTempo=Value},v2c:function(){gx.fn.setControlValue("CORPOPROVACONDTEMPO",gx.O.A11378CorpoProvaCondTempo,0)},c2v:function(){gx.O.A11378CorpoProvaCondTempo=this.val()},val:function(){return gx.fn.getControlValue("CORPOPROVACONDTEMPO")},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVAOBSERVACAO",gxz:"Z11382CorpoProvaObservacao",gxold:"O11382CorpoProvaObservacao",gxvar:"A11382CorpoProvaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11382CorpoProvaObservacao=Value},v2z:function(Value){gx.O.Z11382CorpoProvaObservacao=Value},v2c:function(){gx.fn.setControlValue("CORPOPROVAOBSERVACAO",gx.O.A11382CorpoProvaObservacao,0)},c2v:function(){gx.O.A11382CorpoProvaObservacao=this.val()},val:function(){return gx.fn.getControlValue("CORPOPROVAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcempresaid,isvalid:null,rgrid:[],fld:"PEDIDOCPCEMPRESAID",gxz:"Z11450PedidoCPCEmpresaId",gxold:"O11450PedidoCPCEmpresaId",gxvar:"A11450PedidoCPCEmpresaId",ucs:[],op:[],ip:[27,23,132],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11450PedidoCPCEmpresaId=Value},v2z:function(Value){gx.O.Z11450PedidoCPCEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PEDIDOCPCEMPRESAID",gx.O.A11450PedidoCPCEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11450PedidoCPCEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 132 , function() {
   });
   GXValidFnc[134]={fld:"BTNHELP",grid:0};
   this.A11339PedidoCPCAno = 0 ;
   this.Z11339PedidoCPCAno = 0 ;
   this.O11339PedidoCPCAno = 0 ;
   this.A11340PedidoCPCNumero = 0 ;
   this.Z11340PedidoCPCNumero = 0 ;
   this.O11340PedidoCPCNumero = 0 ;
   this.A11350CorpoProvaSerie = 0 ;
   this.Z11350CorpoProvaSerie = 0 ;
   this.O11350CorpoProvaSerie = 0 ;
   this.AV27TipoConcretocodigo = 0 ;
   this.ZV27TipoConcretocodigo = 0 ;
   this.OV27TipoConcretocodigo = 0 ;
   this.AV29TipoConcretoDescResumida = "" ;
   this.ZV29TipoConcretoDescResumida = "" ;
   this.OV29TipoConcretoDescResumida = "" ;
   this.AV21PedidoCPCValorConcreto = 0 ;
   this.ZV21PedidoCPCValorConcreto = 0 ;
   this.OV21PedidoCPCValorConcreto = 0 ;
   this.AV20PedidoCPCObraPessoaId = 0 ;
   this.ZV20PedidoCPCObraPessoaId = 0 ;
   this.OV20PedidoCPCObraPessoaId = 0 ;
   this.AV18PedidoCPCObraFantasia = "" ;
   this.ZV18PedidoCPCObraFantasia = "" ;
   this.OV18PedidoCPCObraFantasia = "" ;
   this.AV17PedidoCPCObraCodigo = 0 ;
   this.ZV17PedidoCPCObraCodigo = 0 ;
   this.OV17PedidoCPCObraCodigo = 0 ;
   this.AV19PedidoCPCObraNome = "" ;
   this.ZV19PedidoCPCObraNome = "" ;
   this.OV19PedidoCPCObraNome = "" ;
   this.AV34EnderecoObra = "" ;
   this.ZV34EnderecoObra = "" ;
   this.OV34EnderecoObra = "" ;
   this.AV28TipoConcretoConDesc = "" ;
   this.ZV28TipoConcretoConDesc = "" ;
   this.OV28TipoConcretoConDesc = "" ;
   this.AV31TipoConcretoresistencia = 0 ;
   this.ZV31TipoConcretoresistencia = 0 ;
   this.OV31TipoConcretoresistencia = 0 ;
   this.AV25TipoConcretoAgreGraudoDesc = "" ;
   this.ZV25TipoConcretoAgreGraudoDesc = "" ;
   this.OV25TipoConcretoAgreGraudoDesc = "" ;
   this.AV30TipoConcretoDimensaoDesc = "" ;
   this.ZV30TipoConcretoDimensaoDesc = "" ;
   this.OV30TipoConcretoDimensaoDesc = "" ;
   this.AV26TipoConcretoCimentoDesc = "" ;
   this.ZV26TipoConcretoCimentoDesc = "" ;
   this.OV26TipoConcretoCimentoDesc = "" ;
   this.AV32TipoConcretoSlumpDesc = "" ;
   this.ZV32TipoConcretoSlumpDesc = "" ;
   this.OV32TipoConcretoSlumpDesc = "" ;
   this.A11379CorpoProvaCertificado = 0 ;
   this.Z11379CorpoProvaCertificado = 0 ;
   this.O11379CorpoProvaCertificado = 0 ;
   this.A11380CorpoProvaDataAmostragem = gx.date.nullDate() ;
   this.Z11380CorpoProvaDataAmostragem = gx.date.nullDate() ;
   this.O11380CorpoProvaDataAmostragem = gx.date.nullDate() ;
   this.A11381CorpoProvaHoraAmostragem = "" ;
   this.Z11381CorpoProvaHoraAmostragem = "" ;
   this.O11381CorpoProvaHoraAmostragem = "" ;
   this.A11378CorpoProvaCondTempo = "" ;
   this.Z11378CorpoProvaCondTempo = "" ;
   this.O11378CorpoProvaCondTempo = "" ;
   this.A11382CorpoProvaObservacao = "" ;
   this.Z11382CorpoProvaObservacao = "" ;
   this.O11382CorpoProvaObservacao = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.A11450PedidoCPCEmpresaId = "" ;
   this.Z11450PedidoCPCEmpresaId = "" ;
   this.O11450PedidoCPCEmpresaId = "" ;
   this.AV33UsrCod = "" ;
   this.AV9EmpresaLogadaId = "" ;
   this.AV22Sistema = "" ;
   this.AV35Pgmname = "" ;
   this.AV36Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV12Modulo = "" ;
   this.AV11Logon = {} ;
   this.AV24Tabela = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV23SnAlterou = "" ;
   this.AV14PedidoCPCAno = 0 ;
   this.AV16PedidoCPCNumero = 0 ;
   this.AV8CorpoProvaSerie = 0 ;
   this.A11450PedidoCPCEmpresaId = "" ;
   this.A11340PedidoCPCNumero = 0 ;
   this.A11339PedidoCPCAno = 0 ;
   this.A11350CorpoProvaSerie = 0 ;
   this.A11377CorpoProvaDescPeca = "" ;
   this.A11378CorpoProvaCondTempo = "" ;
   this.A11379CorpoProvaCertificado = 0 ;
   this.A11380CorpoProvaDataAmostragem = gx.date.nullDate() ;
   this.A11381CorpoProvaHoraAmostragem = "" ;
   this.A11382CorpoProvaObservacao = "" ;
   this.A11660CorpoProvaSlump = "" ;
   this.A11473CorpoProvaDataHoraAlt = gx.date.nullDate() ;
   this.A11472CorpoProvaUsuarioAlt = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12gi842_client": ["ENTER", true] ,"e13gi842_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14PedidoCPCAno',fld:'vPEDIDOCPCANO'},{av:'AV16PedidoCPCNumero',fld:'vPEDIDOCPCNUMERO'},{av:'AV8CorpoProvaSerie',fld:'vCORPOPROVASERIE'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14PedidoCPCAno", "vPEDIDOCPCANO", 0, "int");
   this.setVCMap("AV16PedidoCPCNumero", "vPEDIDOCPCNUMERO", 0, "int");
   this.setVCMap("AV8CorpoProvaSerie", "vCORPOPROVASERIE", 0, "int");
   this.setVCMap("A11377CorpoProvaDescPeca", "CORPOPROVADESCPECA", 0, "svchar");
   this.setVCMap("A11660CorpoProvaSlump", "CORPOPROVASLUMP", 0, "svchar");
   this.setVCMap("A11473CorpoProvaDataHoraAlt", "CORPOPROVADATAHORAALT", 0, "dtime");
   this.setVCMap("A11472CorpoProvaUsuarioAlt", "CORPOPROVAUSUARIOALT", 0, "char");
   this.setVCMap("AV36Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcorpoprova());
