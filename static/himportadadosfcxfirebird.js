/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:0:53.44
*/
gx.evt.autoSkip = false;
gx.define('himportadadosfcxfirebird', false, function () {
   this.ServerClass =  "himportadadosfcxfirebird" ;
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
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tiposaldoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOSALDOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Historicocxabcoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOCXABCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaocxbcosigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOCXBCOSIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transacaocxbcoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOCXBCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Historicocxabcoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOCXABCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tiposaldoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOSALDOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1315q2_client=function()
   {
      this.executeServerEvent("'DIALOG'", true, null, false, false);
   };
   this.e1115q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1415q2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1715q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,25,28,30,31,34,36,37,40,42,43,46,48,49,53,61,62,63,64,65,66,68,69,70,71,72];
   this.GXLastCtrlId =72;
   GXValidFnc[3]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE8",grid:0};
   GXValidFnc[9]={fld:"TABLE6",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE9",grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV21Diretorio",gxold:"OV21Diretorio",gxvar:"AV21Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Diretorio=Value},v2z:function(Value){gx.O.ZV21Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV21Diretorio,0)},c2v:function(){gx.O.AV21Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV30FilialId",gxold:"OV30FilialId",gxvar:"AV30FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV30FilialId,0)},c2v:function(){gx.O.AV30FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV31FilialNome",gxold:"OV31FilialNome",gxvar:"AV31FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31FilialNome=Value},v2z:function(Value){gx.O.ZV31FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV31FilialNome,0)},c2v:function(){gx.O.AV31FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaid,isvalid:null,rgrid:[],fld:"vEMPRESAID",gxz:"ZV40EmpresaId",gxold:"OV40EmpresaId",gxvar:"AV40EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40EmpresaId=Value},v2z:function(Value){gx.O.ZV40EmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAID",gx.O.AV40EmpresaId,0)},c2v:function(){gx.O.AV40EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESANOME",gxz:"ZV41EmpresaNome",gxold:"OV41EmpresaNome",gxvar:"AV41EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41EmpresaNome=Value},v2z:function(Value){gx.O.ZV41EmpresaNome=Value},v2c:function(){gx.fn.setControlValue("vEMPRESANOME",gx.O.AV41EmpresaNome,0)},c2v:function(){gx.O.AV41EmpresaNome=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESANOME")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tiposaldoid,isvalid:null,rgrid:[],fld:"vTIPOSALDOID",gxz:"ZV44TipoSaldoId",gxold:"OV44TipoSaldoId",gxvar:"AV44TipoSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44TipoSaldoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44TipoSaldoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOSALDOID",gx.O.AV44TipoSaldoId,0)},c2v:function(){gx.O.AV44TipoSaldoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOSALDOID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSALDODESCRICAO",gxz:"ZV47TipoSaldoDescricao",gxold:"OV47TipoSaldoDescricao",gxvar:"AV47TipoSaldoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47TipoSaldoDescricao=Value},v2z:function(Value){gx.O.ZV47TipoSaldoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOSALDODESCRICAO",gx.O.AV47TipoSaldoDescricao,0)},c2v:function(){gx.O.AV47TipoSaldoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Historicocxabcoid,isvalid:null,rgrid:[],fld:"vHISTORICOCXABCOID",gxz:"ZV45HistoricoCxaBcoId",gxold:"OV45HistoricoCxaBcoId",gxvar:"AV45HistoricoCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45HistoricoCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45HistoricoCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCOID",gx.O.AV45HistoricoCxaBcoId,0)},c2v:function(){gx.O.AV45HistoricoCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOCXABCOID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOCXABCODESCRICAO",gxz:"ZV48HistoricoCxaBcoDescricao",gxold:"OV48HistoricoCxaBcoDescricao",gxvar:"AV48HistoricoCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48HistoricoCxaBcoDescricao=Value},v2z:function(Value){gx.O.ZV48HistoricoCxaBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCODESCRICAO",gx.O.AV48HistoricoCxaBcoDescricao,0)},c2v:function(){gx.O.AV48HistoricoCxaBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOCXABCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaocxbcosigla,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCOSIGLA",gxz:"ZV46TransacaoCxBcoSigla",gxold:"OV46TransacaoCxBcoSigla",gxvar:"AV46TransacaoCxBcoSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46TransacaoCxBcoSigla=Value},v2z:function(Value){gx.O.ZV46TransacaoCxBcoSigla=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOSIGLA",gx.O.AV46TransacaoCxBcoSigla,0)},c2v:function(){gx.O.AV46TransacaoCxBcoSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOSIGLA")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCODESCRICAO",gxz:"ZV49TransacaoCxBcoDescricao",gxold:"OV49TransacaoCxBcoDescricao",gxvar:"AV49TransacaoCxBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49TransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.ZV49TransacaoCxBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCODESCRICAO",gx.O.AV49TransacaoCxBcoDescricao,0)},c2v:function(){gx.O.AV49TransacaoCxBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRCADASTROS",gxz:"ZV22ExcluirCadastros",gxold:"OV22ExcluirCadastros",gxvar:"AV22ExcluirCadastros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22ExcluirCadastros=Value},v2z:function(Value){gx.O.ZV22ExcluirCadastros=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRCADASTROS",gx.O.AV22ExcluirCadastros,"S")},c2v:function(){gx.O.AV22ExcluirCadastros=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRCADASTROS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[61]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV53Qtde",gxold:"OV53Qtde",gxvar:"AV53Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV53Qtde,0)},c2v:function(){gx.O.AV53Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaocxbcoempresaid,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCOEMPRESAID",gxz:"ZV51TransacaoCxBcoEmpresaId",gxold:"OV51TransacaoCxBcoEmpresaId",gxvar:"AV51TransacaoCxBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51TransacaoCxBcoEmpresaId=Value},v2z:function(Value){gx.O.ZV51TransacaoCxBcoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOEMPRESAID",gx.O.AV51TransacaoCxBcoEmpresaId,0)},c2v:function(){gx.O.AV51TransacaoCxBcoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Historicocxabcoempresaid,isvalid:null,rgrid:[],fld:"vHISTORICOCXABCOEMPRESAID",gxz:"ZV50HistoricoCxaBcoEmpresaId",gxold:"OV50HistoricoCxaBcoEmpresaId",gxvar:"AV50HistoricoCxaBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50HistoricoCxaBcoEmpresaId=Value},v2z:function(Value){gx.O.ZV50HistoricoCxaBcoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCOEMPRESAID",gx.O.AV50HistoricoCxaBcoEmpresaId,0)},c2v:function(){gx.O.AV50HistoricoCxaBcoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOCXABCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tiposaldoempresaid,isvalid:null,rgrid:[],fld:"vTIPOSALDOEMPRESAID",gxz:"ZV52TipoSaldoEmpresaId",gxold:"OV52TipoSaldoEmpresaId",gxvar:"AV52TipoSaldoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52TipoSaldoEmpresaId=Value},v2z:function(Value){gx.O.ZV52TipoSaldoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOSALDOEMPRESAID",gx.O.AV52TipoSaldoEmpresaId,0)},c2v:function(){gx.O.AV52TipoSaldoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV33FilialEmpresaId",gxold:"OV33FilialEmpresaId",gxvar:"AV33FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV33FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV33FilialEmpresaId,0)},c2v:function(){gx.O.AV33FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[68]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[69]={fld:"PROMPT_EMPRESAID",grid:0};
   GXValidFnc[70]={fld:"PROMPT_TIPOSALDOID",grid:0};
   GXValidFnc[71]={fld:"PROMPT_HISTORICOCXABCOID",grid:0};
   GXValidFnc[72]={fld:"PROMPT_TRANSACAOCXBCOSIGLA",grid:0};
   this.AV21Diretorio = "" ;
   this.ZV21Diretorio = "" ;
   this.OV21Diretorio = "" ;
   this.AV30FilialId = 0 ;
   this.ZV30FilialId = 0 ;
   this.OV30FilialId = 0 ;
   this.AV31FilialNome = "" ;
   this.ZV31FilialNome = "" ;
   this.OV31FilialNome = "" ;
   this.AV40EmpresaId = "" ;
   this.ZV40EmpresaId = "" ;
   this.OV40EmpresaId = "" ;
   this.AV41EmpresaNome = "" ;
   this.ZV41EmpresaNome = "" ;
   this.OV41EmpresaNome = "" ;
   this.AV44TipoSaldoId = 0 ;
   this.ZV44TipoSaldoId = 0 ;
   this.OV44TipoSaldoId = 0 ;
   this.AV47TipoSaldoDescricao = "" ;
   this.ZV47TipoSaldoDescricao = "" ;
   this.OV47TipoSaldoDescricao = "" ;
   this.AV45HistoricoCxaBcoId = 0 ;
   this.ZV45HistoricoCxaBcoId = 0 ;
   this.OV45HistoricoCxaBcoId = 0 ;
   this.AV48HistoricoCxaBcoDescricao = "" ;
   this.ZV48HistoricoCxaBcoDescricao = "" ;
   this.OV48HistoricoCxaBcoDescricao = "" ;
   this.AV46TransacaoCxBcoSigla = "" ;
   this.ZV46TransacaoCxBcoSigla = "" ;
   this.OV46TransacaoCxBcoSigla = "" ;
   this.AV49TransacaoCxBcoDescricao = "" ;
   this.ZV49TransacaoCxBcoDescricao = "" ;
   this.OV49TransacaoCxBcoDescricao = "" ;
   this.AV22ExcluirCadastros = "" ;
   this.ZV22ExcluirCadastros = "" ;
   this.OV22ExcluirCadastros = "" ;
   this.AV53Qtde = 0 ;
   this.ZV53Qtde = 0 ;
   this.OV53Qtde = 0 ;
   this.AV51TransacaoCxBcoEmpresaId = "" ;
   this.ZV51TransacaoCxBcoEmpresaId = "" ;
   this.OV51TransacaoCxBcoEmpresaId = "" ;
   this.AV50HistoricoCxaBcoEmpresaId = "" ;
   this.ZV50HistoricoCxaBcoEmpresaId = "" ;
   this.OV50HistoricoCxaBcoEmpresaId = "" ;
   this.AV52TipoSaldoEmpresaId = "" ;
   this.ZV52TipoSaldoEmpresaId = "" ;
   this.OV52TipoSaldoEmpresaId = "" ;
   this.AV33FilialEmpresaId = "" ;
   this.ZV33FilialEmpresaId = "" ;
   this.OV33FilialEmpresaId = "" ;
   this.AV21Diretorio = "" ;
   this.AV30FilialId = 0 ;
   this.AV31FilialNome = "" ;
   this.AV40EmpresaId = "" ;
   this.AV41EmpresaNome = "" ;
   this.AV44TipoSaldoId = 0 ;
   this.AV47TipoSaldoDescricao = "" ;
   this.AV45HistoricoCxaBcoId = 0 ;
   this.AV48HistoricoCxaBcoDescricao = "" ;
   this.AV46TransacaoCxBcoSigla = "" ;
   this.AV49TransacaoCxBcoDescricao = "" ;
   this.AV22ExcluirCadastros = "" ;
   this.AV53Qtde = 0 ;
   this.AV51TransacaoCxBcoEmpresaId = "" ;
   this.AV50HistoricoCxaBcoEmpresaId = "" ;
   this.AV52TipoSaldoEmpresaId = "" ;
   this.AV33FilialEmpresaId = "" ;
   this.A1114TransacaoCxBcoSigla = "" ;
   this.A1115TransacaoCxBcoEmpresaId = "" ;
   this.A1004HistoricoCxaBcoId = 0 ;
   this.A1003HistoricoCxaBcoEmpresaId = "" ;
   this.A1569TipoSaldoId = 0 ;
   this.A1568TipoSaldoEmpresaId = "" ;
   this.A138EmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.Events = {"e1315q2_client": ["'DIALOG'", true] ,"e1115q2_client": ["'FECHAR'", true] ,"e1415q2_client": ["ENTER", true] ,"e1715q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV21Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'DIALOG'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21Diretorio',fld:'vDIRETORIO'},{av:'AV39SnBal002',fld:'vSNBAL002'},{av:'AV38SnBal003',fld:'vSNBAL003'},{av:'AV37SnBal004',fld:'vSNBAL004'},{av:'AV36SnBal009',fld:'vSNBAL009'},{av:'AV35SnBal013',fld:'vSNBAL013'},{av:'AV42SnBal007',fld:'vSNBAL007'},{av:'AV43SnBal005',fld:'vSNBAL005'},{av:'AV30FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV40EmpresaId',fld:'vEMPRESAID'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV44TipoSaldoId',fld:'vTIPOSALDOID'},{av:'A1568TipoSaldoEmpresaId',fld:'TIPOSALDOEMPRESAID'},{av:'AV52TipoSaldoEmpresaId',fld:'vTIPOSALDOEMPRESAID'},{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'AV45HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'A1003HistoricoCxaBcoEmpresaId',fld:'HISTORICOCXABCOEMPRESAID'},{av:'AV50HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'AV46TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'A1115TransacaoCxBcoEmpresaId',fld:'TRANSACAOCXBCOEMPRESAID'},{av:'AV51TransacaoCxBcoEmpresaId',fld:'vTRANSACAOCXBCOEMPRESAID'},{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'},{av:'AV22ExcluirCadastros',fld:'vEXCLUIRCADASTROS'},{av:'AV28DescTabela',fld:'vDESCTABELA'},{av:'AV29Campos',fld:'vCAMPOS'},{av:'AV26Arquivo',fld:'vARQUIVO'},{av:'AV27Linha',fld:'vLINHA'}],[{av:'AV23SnErro',fld:'vSNERRO'},{av:'AV39SnBal002',fld:'vSNBAL002'},{av:'AV38SnBal003',fld:'vSNBAL003'},{av:'AV37SnBal004',fld:'vSNBAL004'},{av:'AV36SnBal009',fld:'vSNBAL009'},{av:'AV35SnBal013',fld:'vSNBAL013'},{av:'AV42SnBal007',fld:'vSNBAL007'},{av:'AV43SnBal005',fld:'vSNBAL005'},{av:'AV19i',fld:'vI'},{av:'AV58GXLvl196',fld:'vGXLVL196'},{av:'AV40EmpresaId',fld:'vEMPRESAID'},{av:'AV59GXLvl214',fld:'vGXLVL214'},{av:'AV60GXLvl231',fld:'vGXLVL231'},{av:'AV61GXLvl256',fld:'vGXLVL256'},{av:'AV62GXLvl281',fld:'vGXLVL281'},{av:'AV26Arquivo',fld:'vARQUIVO'},{av:'AV28DescTabela',fld:'vDESCTABELA'},{av:'AV29Campos',fld:'vCAMPOS'}]];
   this.setPrompt("PROMPT_FILIALID", [24]);
   this.setPrompt("PROMPT_EMPRESAID", [30]);
   this.setPrompt("PROMPT_TIPOSALDOID", [36]);
   this.setPrompt("PROMPT_HISTORICOCXABCOID", [42]);
   this.setPrompt("PROMPT_TRANSACAOCXBCOSIGLA", [48]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportadadosfcxfirebird());
