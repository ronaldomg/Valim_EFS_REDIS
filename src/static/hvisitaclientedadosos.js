/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:51:26.63
*/
gx.evt.autoSkip = false;
gx.define('hvisitaclientedadosos', false, function () {
   this.ServerClass =  "hvisitaclientedadosos" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV21AparelhoClienteSeqId=gx.fn.getIntegerValue("vAPARELHOCLIENTESEQID",'.') ;
      this.AV22AparelhoId=gx.fn.getIntegerValue("vAPARELHOID",'.') ;
      this.AV45AparelhoItemId=gx.fn.getIntegerValue("vAPARELHOITEMID",'.') ;
      this.AV49DataAgendaIn=gx.fn.getDateValue("vDATAAGENDAIN") ;
   };
   this.Validv_Ordemservicovendedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOVENDEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Profissionalid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROFISSIONALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ordemservicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOID");
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
   this.Validv_Profissionalempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROFISSIONALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ordemservicovendedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOVENDEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cla1visitaos=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Cla1visitaos",["gx.O.AV69Cla1VisitaOS", "gx.O.AV86OpcaoClassificacaoId"],["AV86OpcaoClassificacaoId"]);
      return true;
   }
   this.Validv_Cod2visitaos=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOD2VISITAOS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
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
   this.s142_client=function()
   {
      if ( this.AV44SNProDisponivel == "N" )
      {
         gx.fn.setCtrlProperty("vHORAINICIAL","Enabled", 1 );
         gx.fn.setCtrlProperty("vHORAFINAL","Enabled", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("vHORAINICIAL","Enabled", 0 );
         gx.fn.setCtrlProperty("vHORAFINAL","Enabled", 0 );
      }
   };
   this.s172_client=function()
   {
      this.AV36SDTIncluiVisitaOS.AgendaData =  this.AV6DataAgenda  ;
      this.AV36SDTIncluiVisitaOS.AparelhoClienteSeqId = gx.num.trunc( this.AV21AparelhoClienteSeqId ,0) ;
      this.AV36SDTIncluiVisitaOS.AparelhoEmpresaId =  this.AV29AparelhoEmpresaId  ;
      this.AV36SDTIncluiVisitaOS.AparelhoId = gx.num.trunc( this.AV22AparelhoId ,0) ;
      this.AV36SDTIncluiVisitaOS.AparelhoItemId = gx.num.trunc( this.AV45AparelhoItemId ,0) ;
      this.AV36SDTIncluiVisitaOS.EmpresaPessoasEmpresaId =  this.AV28EmpresaPessoasEmpresaId  ;
      this.AV36SDTIncluiVisitaOS.FilialId = gx.num.trunc( this.AV7FilialId ,0) ;
      this.AV36SDTIncluiVisitaOS.HoraFinal =  this.AV8HoraFinal  ;
      this.AV36SDTIncluiVisitaOS.HoraInicial =  this.AV9HoraInicial  ;
      this.AV36SDTIncluiVisitaOS.OrdemServicoTipoId = gx.num.trunc( this.AV11OrdemServicoTipoId ,0) ;
      this.AV36SDTIncluiVisitaOS.OrdemServicoTipoEmpresaId =  this.AV39OrdemServicoTipoEmpresaId  ;
      this.AV36SDTIncluiVisitaOS.OrdemServicoVendedorId = gx.num.trunc( this.AV18OrdemServicoVendedorId ,0) ;
      this.AV36SDTIncluiVisitaOS.OrdemServicoVendedorEmpresaId =  this.AV34OrdemServicoVendedorEmpId  ;
      this.AV36SDTIncluiVisitaOS.PessoaId = gx.num.trunc( this.AV17PessoaId ,0) ;
      this.AV36SDTIncluiVisitaOS.ProfissionalId = gx.num.trunc( this.AV12ProfissionalId ,0) ;
      this.AV36SDTIncluiVisitaOS.ProfissionalEmpresaId =  this.AV30ProfissionalEmpresaid  ;
      this.AV36SDTIncluiVisitaOS.VisitaClienteDataVisita =  this.AV52visitaclientedatavisita  ;
      this.AV36SDTIncluiVisitaOS.VisitaClienteObservacao =  this.AV53VisitaClienteObservacao  ;
      this.AV36SDTIncluiVisitaOS.UsrCod =  this.AV38UsrCod  ;
   };
   this.e131yy2_client=function()
   {
      this.executeServerEvent("'AGENDARVISITA'", false, null, false, false);
   };
   this.e141yy2_client=function()
   {
      this.executeServerEvent("'ADIARLIGACAO'", false, null, false, false);
   };
   this.e151yy2_client=function()
   {
      this.executeServerEvent("'VEROS'", true, null, false, false);
   };
   this.e161yy2_client=function()
   {
      this.executeServerEvent("'ALTERARCLIENTEAPARELHO'", false, null, false, false);
   };
   this.e181yy2_client=function()
   {
      this.executeServerEvent("VSNPRODISPONIVEL.CLICK", true, null, false, true);
   };
   this.e191yy2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e201yy1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,13,16,18,20,22,25,27,30,33,36,38,40,43,45,47,49,54,56,58,60,62,64,67,69,71,73,75,77,80,82,84,86,88,90,93,95,105,107,108,110,112,115,117,122,132,134,136,138,143,145,148,150,152,154,157,159,161,167,169,170,172,174,177,179,180,184,186,190,192,196,198,199,214,217,218,219,220,221,222,223,224,225,226,227,230,231,232,233];
   this.GXLastCtrlId =233;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV89PessoaFantasia",gxold:"OV89PessoaFantasia",gxvar:"AV89PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89PessoaFantasia=Value},v2z:function(Value){gx.O.ZV89PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV89PessoaFantasia,0)},c2v:function(){gx.O.AV89PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTATO",gxz:"ZV75Contato",gxold:"OV75Contato",gxvar:"AV75Contato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75Contato=Value},v2z:function(Value){gx.O.ZV75Contato=Value},v2c:function(){gx.fn.setControlValue("vCONTATO",gx.O.AV75Contato,0)},c2v:function(){gx.O.AV75Contato=this.val()},val:function(){return gx.fn.getControlValue("vCONTATO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"LBLCOD1VISITAOS", format:0,grid:0};
   GXValidFnc[22]={fld:"LBLCOD1VISITAOSVAL", format:0,grid:0};
   GXValidFnc[25]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[27]={fld:"TABLE5",grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATELEFONECONTATO",gxz:"ZV90PessoaTelefoneContato",gxold:"OV90PessoaTelefoneContato",gxvar:"AV90PessoaTelefoneContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90PessoaTelefoneContato=Value},v2z:function(Value){gx.O.ZV90PessoaTelefoneContato=Value},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONECONTATO",gx.O.AV90PessoaTelefoneContato,0)},c2v:function(){gx.O.AV90PessoaTelefoneContato=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONECONTATO")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACELULAR",gxz:"ZV87PessoaCelular",gxold:"OV87PessoaCelular",gxvar:"AV87PessoaCelular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87PessoaCelular=Value},v2z:function(Value){gx.O.ZV87PessoaCelular=Value},v2c:function(){gx.fn.setControlValue("vPESSOACELULAR",gx.O.AV87PessoaCelular,0)},c2v:function(){gx.O.AV87PessoaCelular=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACELULAR")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATELEFONE",gxz:"ZV95PessoaTelefone",gxold:"OV95PessoaTelefone",gxvar:"AV95PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95PessoaTelefone=Value},v2z:function(Value){gx.O.ZV95PessoaTelefone=Value},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONE",gx.O.AV95PessoaTelefone,0)},c2v:function(){gx.O.AV95PessoaTelefone=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONE")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"LBLCLA1VISITAOS", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOID",gxz:"ZV86OpcaoClassificacaoId",gxold:"OV86OpcaoClassificacaoId",gxvar:"AV86OpcaoClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV86OpcaoClassificacaoId=Value},v2z:function(Value){gx.O.ZV86OpcaoClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOID",gx.O.AV86OpcaoClassificacaoId)},c2v:function(){gx.O.AV86OpcaoClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENDERECOCOMPLETO",gxz:"ZV76EnderecoCompleto",gxold:"OV76EnderecoCompleto",gxvar:"AV76EnderecoCompleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76EnderecoCompleto=Value},v2z:function(Value){gx.O.ZV76EnderecoCompleto=Value},v2c:function(){gx.fn.setControlValue("vENDERECOCOMPLETO",gx.O.AV76EnderecoCompleto,0)},c2v:function(){gx.O.AV76EnderecoCompleto=this.val()},val:function(){return gx.fn.getControlValue("vENDERECOCOMPLETO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"LBLCOD2VISITAOS", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOD2VISITAOSVAL",gxz:"ZV74Cod2VisitaOSVal",gxold:"OV74Cod2VisitaOSVal",gxvar:"AV74Cod2VisitaOSVal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74Cod2VisitaOSVal=Value},v2z:function(Value){gx.O.ZV74Cod2VisitaOSVal=Value},v2c:function(){gx.fn.setControlValue("vCOD2VISITAOSVAL",gx.O.AV74Cod2VisitaOSVal,0)},c2v:function(){gx.O.AV74Cod2VisitaOSVal=this.val()},val:function(){return gx.fn.getControlValue("vCOD2VISITAOSVAL")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHODESCRICAO",gxz:"ZV59AparelhoDescricao",gxold:"OV59AparelhoDescricao",gxvar:"AV59AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59AparelhoDescricao=Value},v2z:function(Value){gx.O.ZV59AparelhoDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHODESCRICAO",gx.O.AV59AparelhoDescricao,0)},c2v:function(){gx.O.AV59AparelhoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TITCARAC1", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC1APARELHOCARACDESCRICAO",gxz:"ZV61C1AparelhoCaracDescricao",gxold:"OV61C1AparelhoCaracDescricao",gxvar:"AV61C1AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61C1AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV61C1AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC1APARELHOCARACDESCRICAO",gx.O.AV61C1AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV61C1AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC1APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TITCARAC2", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC2APARELHOCARACDESCRICAO",gxz:"ZV62C2AparelhoCaracDescricao",gxold:"OV62C2AparelhoCaracDescricao",gxvar:"AV62C2AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62C2AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV62C2AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC2APARELHOCARACDESCRICAO",gx.O.AV62C2AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV62C2AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC2APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TITCARAC3", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC3APARELHOCARACDESCRICAO",gxz:"ZV63C3AparelhoCaracDescricao",gxold:"OV63C3AparelhoCaracDescricao",gxvar:"AV63C3AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63C3AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV63C3AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC3APARELHOCARACDESCRICAO",gx.O.AV63C3AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV63C3AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC3APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TITCARAC4", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC4APARELHOCARACDESCRICAO",gxz:"ZV64C4AparelhoCaracDescricao",gxold:"OV64C4AparelhoCaracDescricao",gxvar:"AV64C4AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64C4AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV64C4AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC4APARELHOCARACDESCRICAO",gx.O.AV64C4AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV64C4AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC4APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TITCARAC5", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC5APARELHOCARACDESCRICAO",gxz:"ZV65C5AparelhoCaracDescricao",gxold:"OV65C5AparelhoCaracDescricao",gxvar:"AV65C5AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65C5AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV65C5AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC5APARELHOCARACDESCRICAO",gx.O.AV65C5AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV65C5AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC5APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TITCARAC6", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC6APARELHOCARACDESCRICAO",gxz:"ZV66C6AparelhoCaracDescricao",gxold:"OV66C6AparelhoCaracDescricao",gxvar:"AV66C6AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66C6AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV66C6AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC6APARELHOCARACDESCRICAO",gx.O.AV66C6AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV66C6AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC6APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TITCARAC7", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC7APARELHOCARACDESCRICAO",gxz:"ZV67C7AparelhoCaracDescricao",gxold:"OV67C7AparelhoCaracDescricao",gxvar:"AV67C7AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67C7AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV67C7AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC7APARELHOCARACDESCRICAO",gx.O.AV67C7AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV67C7AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC7APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TITCARAC8", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC8APARELHOCARACDESCRICAO",gxz:"ZV68C8AparelhoCaracDescricao",gxold:"OV68C8AparelhoCaracDescricao",gxvar:"AV68C8AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68C8AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV68C8AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC8APARELHOCARACDESCRICAO",gx.O.AV68C8AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV68C8AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC8APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOPROFISSIONALNOME",gxz:"ZV60AparelhoProfissionalNome",gxold:"OV60AparelhoProfissionalNome",gxvar:"AV60AparelhoProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60AparelhoProfissionalNome=Value},v2z:function(Value){gx.O.ZV60AparelhoProfissionalNome=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOPROFISSIONALNOME",gx.O.AV60AparelhoProfissionalNome,0)},c2v:function(){gx.O.AV60AparelhoProfissionalNome=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOPROFISSIONALNOME")},nac:gx.falseFn};
   GXValidFnc[105]={fld:"LBLDIASADIAMENTO", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMDIASADIAMENTO",gxz:"ZV56NumDiasAdiamento",gxold:"OV56NumDiasAdiamento",gxvar:"AV56NumDiasAdiamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56NumDiasAdiamento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56NumDiasAdiamento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMDIASADIAMENTO",gx.O.AV56NumDiasAdiamento,0)},c2v:function(){gx.O.AV56NumDiasAdiamento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMDIASADIAMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[110]={fld:"LBLOBSERVACOES2", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISITACLIENTEOBSERVACAO",gxz:"ZV53VisitaClienteObservacao",gxold:"OV53VisitaClienteObservacao",gxvar:"AV53VisitaClienteObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53VisitaClienteObservacao=Value},v2z:function(Value){gx.O.ZV53VisitaClienteObservacao=Value},v2c:function(){gx.fn.setControlValue("vVISITACLIENTEOBSERVACAO",gx.O.AV53VisitaClienteObservacao,0)},c2v:function(){gx.O.AV53VisitaClienteObservacao=this.val()},val:function(){return gx.fn.getControlValue("vVISITACLIENTEOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATALIGACAO",gxz:"ZV93DataLigacao",gxold:"OV93DataLigacao",gxvar:"AV93DataLigacao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93DataLigacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV93DataLigacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATALIGACAO",gx.O.AV93DataLigacao,0)},c2v:function(){gx.O.AV93DataLigacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATALIGACAO")},nac:gx.falseFn};
   GXValidFnc[122]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLIGARNOVAMENTE",gxz:"ZV16SNLigarNovamente",gxold:"OV16SNLigarNovamente",gxvar:"AV16SNLigarNovamente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16SNLigarNovamente=Value},v2z:function(Value){gx.O.ZV16SNLigarNovamente=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNLIGARNOVAMENTE",gx.O.AV16SNLigarNovamente,"N");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16SNLigarNovamente=this.val()},val:function(){return gx.fn.getControlValue("vSNLIGARNOVAMENTE")},nac:gx.falseFn,values:['N','S']};
   this.declareDomainHdlr( 122 , function() {
   });
   GXValidFnc[132]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOTIPOID",gxz:"ZV11OrdemServicoTipoId",gxold:"OV11OrdemServicoTipoId",gxvar:"AV11OrdemServicoTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV11OrdemServicoTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrdemServicoTipoId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOTIPOID",gx.O.AV11OrdemServicoTipoId)},c2v:function(){gx.O.AV11OrdemServicoTipoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOTIPOID",'.')},nac:gx.falseFn};
   GXValidFnc[136]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[138]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPRODISPONIVEL",gxz:"ZV44SNProDisponivel",gxold:"OV44SNProDisponivel",gxvar:"AV44SNProDisponivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV44SNProDisponivel=Value},v2z:function(Value){gx.O.ZV44SNProDisponivel=Value},v2c:function(){gx.fn.setComboBoxValue("vSNPRODISPONIVEL",gx.O.AV44SNProDisponivel);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV44SNProDisponivel=this.val()},val:function(){return gx.fn.getControlValue("vSNPRODISPONIVEL")},nac:gx.falseFn};
   this.declareDomainHdlr( 138 , function() {
   });
   GXValidFnc[143]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[145]={fld:"TABLE4",grid:0};
   GXValidFnc[148]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV7FilialId",gxold:"OV7FilialId",gxvar:"AV7FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV7FilialId,0)},c2v:function(){gx.O.AV7FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[150]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV25FilialNome",gxold:"OV25FilialNome",gxvar:"AV25FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25FilialNome=Value},v2z:function(Value){gx.O.ZV25FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV25FilialNome,0)},c2v:function(){gx.O.AV25FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[152]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[154]={fld:"TABLE3",grid:0};
   GXValidFnc[157]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHORAINICIAL",gxz:"ZV9HoraInicial",gxold:"OV9HoraInicial",gxvar:"AV9HoraInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9HoraInicial=Value},v2z:function(Value){gx.O.ZV9HoraInicial=Value},v2c:function(){gx.fn.setControlValue("vHORAINICIAL",gx.O.AV9HoraInicial,0)},c2v:function(){gx.O.AV9HoraInicial=this.val()},val:function(){return gx.fn.getControlValue("vHORAINICIAL")},nac:gx.falseFn};
   GXValidFnc[159]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[161]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHORAFINAL",gxz:"ZV8HoraFinal",gxold:"OV8HoraFinal",gxvar:"AV8HoraFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8HoraFinal=Value},v2z:function(Value){gx.O.ZV8HoraFinal=Value},v2c:function(){gx.fn.setControlValue("vHORAFINAL",gx.O.AV8HoraFinal,0)},c2v:function(){gx.O.AV8HoraFinal=this.val()},val:function(){return gx.fn.getControlValue("vHORAFINAL")},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicovendedorid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOVENDEDORID",gxz:"ZV18OrdemServicoVendedorId",gxold:"OV18OrdemServicoVendedorId",gxvar:"AV18OrdemServicoVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18OrdemServicoVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18OrdemServicoVendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOVENDEDORID",gx.O.AV18OrdemServicoVendedorId,0)},c2v:function(){gx.O.AV18OrdemServicoVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[170]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOVENDEDORNOME",gxz:"ZV19OrdemServicoVendedorNome",gxold:"OV19OrdemServicoVendedorNome",gxvar:"AV19OrdemServicoVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19OrdemServicoVendedorNome=Value},v2z:function(Value){gx.O.ZV19OrdemServicoVendedorNome=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOVENDEDORNOME",gx.O.AV19OrdemServicoVendedorNome,0)},c2v:function(){gx.O.AV19OrdemServicoVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[172]={fld:"LBLOBSERVACOES", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGVISITACLIENTEOBSERVACAO",gxz:"ZV94agVisitaClienteObservacao",gxold:"OV94agVisitaClienteObservacao",gxvar:"AV94agVisitaClienteObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94agVisitaClienteObservacao=Value},v2z:function(Value){gx.O.ZV94agVisitaClienteObservacao=Value},v2c:function(){gx.fn.setControlValue("vAGVISITACLIENTEOBSERVACAO",gx.O.AV94agVisitaClienteObservacao,0)},c2v:function(){gx.O.AV94agVisitaClienteObservacao=this.val()},val:function(){return gx.fn.getControlValue("vAGVISITACLIENTEOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[177]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[179]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalid,isvalid:null,rgrid:[],fld:"vPROFISSIONALID",gxz:"ZV12ProfissionalId",gxold:"OV12ProfissionalId",gxvar:"AV12ProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROFISSIONALID",gx.O.AV12ProfissionalId,0)},c2v:function(){gx.O.AV12ProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[180]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSIONALNOME",gxz:"ZV20ProfissionalNome",gxold:"OV20ProfissionalNome",gxvar:"AV20ProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ProfissionalNome=Value},v2z:function(Value){gx.O.ZV20ProfissionalNome=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALNOME",gx.O.AV20ProfissionalNome,0)},c2v:function(){gx.O.AV20ProfissionalNome=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALNOME")},nac:gx.falseFn};
   GXValidFnc[184]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[186]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAAGENDA",gxz:"ZV6DataAgenda",gxold:"OV6DataAgenda",gxvar:"AV6DataAgenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6DataAgenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6DataAgenda=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAAGENDA",gx.O.AV6DataAgenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6DataAgenda=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAAGENDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 186 , function() {
   });
   GXValidFnc[190]={fld:"LBLDATAVISITA", format:0,grid:0};
   GXValidFnc[192]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISITACLIENTEDATAVISITA",gxz:"ZV52visitaclientedatavisita",gxold:"OV52visitaclientedatavisita",gxvar:"AV52visitaclientedatavisita",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52visitaclientedatavisita=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV52visitaclientedatavisita=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vVISITACLIENTEDATAVISITA",gx.O.AV52visitaclientedatavisita,0)},c2v:function(){gx.O.AV52visitaclientedatavisita=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vVISITACLIENTEDATAVISITA")},nac:gx.falseFn};
   GXValidFnc[196]={fld:"OS", format:0,grid:0};
   GXValidFnc[198]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicoid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOID",gxz:"ZV41OrdemServicoId",gxold:"OV41OrdemServicoId",gxvar:"AV41OrdemServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41OrdemServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41OrdemServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOID",gx.O.AV41OrdemServicoId,0)},c2v:function(){gx.O.AV41OrdemServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[199]={fld:"ABRIR",grid:0};
   GXValidFnc[214]={fld:"TABLEVARS",grid:0};
   GXValidFnc[217]={fld:"JS", format:2,grid:0};
   GXValidFnc[218]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV24FilialEmpresaId",gxold:"OV24FilialEmpresaId",gxvar:"AV24FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV24FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV24FilialEmpresaId,0)},c2v:function(){gx.O.AV24FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[219]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV26QtdeCaracter",gxold:"OV26QtdeCaracter",gxvar:"AV26QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26QtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26QtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV26QtdeCaracter,0)},c2v:function(){gx.O.AV26QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[220]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalempresaid,isvalid:null,rgrid:[],fld:"vPROFISSIONALEMPRESAID",gxz:"ZV30ProfissionalEmpresaid",gxold:"OV30ProfissionalEmpresaid",gxvar:"AV30ProfissionalEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProfissionalEmpresaid=Value},v2z:function(Value){gx.O.ZV30ProfissionalEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALEMPRESAID",gx.O.AV30ProfissionalEmpresaid,0)},c2v:function(){gx.O.AV30ProfissionalEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[221]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicovendedorempid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOVENDEDOREMPID",gxz:"ZV34OrdemServicoVendedorEmpId",gxold:"OV34OrdemServicoVendedorEmpId",gxvar:"AV34OrdemServicoVendedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34OrdemServicoVendedorEmpId=Value},v2z:function(Value){gx.O.ZV34OrdemServicoVendedorEmpId=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOVENDEDOREMPID",gx.O.AV34OrdemServicoVendedorEmpId,0)},c2v:function(){gx.O.AV34OrdemServicoVendedorEmpId=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOVENDEDOREMPID")},nac:gx.falseFn};
   GXValidFnc[222]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISADIAMENTO",gxz:"ZV55isAdiamento",gxold:"OV55isAdiamento",gxvar:"AV55isAdiamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV55isAdiamento=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV55isAdiamento=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISADIAMENTO",gx.O.AV55isAdiamento,true)},c2v:function(){gx.O.AV55isAdiamento=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISADIAMENTO")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[223]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cla1visitaos,isvalid:null,rgrid:[],fld:"vCLA1VISITAOS",gxz:"ZV69Cla1VisitaOS",gxold:"OV69Cla1VisitaOS",gxvar:"AV69Cla1VisitaOS",ucs:[],op:[40],ip:[40,223],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69Cla1VisitaOS=Value},v2z:function(Value){gx.O.ZV69Cla1VisitaOS=Value},v2c:function(){gx.fn.setControlValue("vCLA1VISITAOS",gx.O.AV69Cla1VisitaOS,0)},c2v:function(){gx.O.AV69Cla1VisitaOS=this.val()},val:function(){return gx.fn.getControlValue("vCLA1VISITAOS")},nac:gx.falseFn};
   GXValidFnc[224]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOD1VISITAOS",gxz:"ZV71Cod1VisitaOS",gxold:"OV71Cod1VisitaOS",gxvar:"AV71Cod1VisitaOS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71Cod1VisitaOS=Value},v2z:function(Value){gx.O.ZV71Cod1VisitaOS=Value},v2c:function(){gx.fn.setControlValue("vCOD1VISITAOS",gx.O.AV71Cod1VisitaOS,0)},c2v:function(){gx.O.AV71Cod1VisitaOS=this.val()},val:function(){return gx.fn.getControlValue("vCOD1VISITAOS")},nac:gx.falseFn};
   GXValidFnc[225]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cod2visitaos,isvalid:null,rgrid:[],fld:"vCOD2VISITAOS",gxz:"ZV73Cod2VisitaOS",gxold:"OV73Cod2VisitaOS",gxvar:"AV73Cod2VisitaOS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73Cod2VisitaOS=Value},v2z:function(Value){gx.O.ZV73Cod2VisitaOS=Value},v2c:function(){gx.fn.setControlValue("vCOD2VISITAOS",gx.O.AV73Cod2VisitaOS,0)},c2v:function(){gx.O.AV73Cod2VisitaOS=this.val()},val:function(){return gx.fn.getControlValue("vCOD2VISITAOS")},nac:gx.falseFn};
   GXValidFnc[226]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOTELEFONEID",gxz:"ZV58TipoTelefoneId",gxold:"OV58TipoTelefoneId",gxvar:"AV58TipoTelefoneId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58TipoTelefoneId=Value},v2z:function(Value){gx.O.ZV58TipoTelefoneId=Value},v2c:function(){gx.fn.setControlValue("vTIPOTELEFONEID",gx.O.AV58TipoTelefoneId,0)},c2v:function(){gx.O.AV58TipoTelefoneId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOTELEFONEID")},nac:gx.falseFn};
   GXValidFnc[227]={lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOD1VISITAOSVAL",gxz:"ZV72Cod1VisitaOSVal",gxold:"OV72Cod1VisitaOSVal",gxvar:"AV72Cod1VisitaOSVal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72Cod1VisitaOSVal=Value},v2z:function(Value){gx.O.ZV72Cod1VisitaOSVal=Value},v2c:function(){gx.fn.setControlValue("vCOD1VISITAOSVAL",gx.O.AV72Cod1VisitaOSVal,0)},c2v:function(){gx.O.AV72Cod1VisitaOSVal=this.val()},val:function(){return gx.fn.getControlValue("vCOD1VISITAOSVAL")},nac:gx.falseFn};
   GXValidFnc[230]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV17PessoaId",gxold:"OV17PessoaId",gxvar:"AV17PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV17PessoaId,0)},c2v:function(){gx.O.AV17PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[231]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[232]={fld:"PROMPT_ORDEMSERVICOVENDEDORID",grid:0};
   GXValidFnc[233]={fld:"PROMPT_PROFISSIONALID",grid:0};
   this.AV89PessoaFantasia = "" ;
   this.ZV89PessoaFantasia = "" ;
   this.OV89PessoaFantasia = "" ;
   this.AV75Contato = "" ;
   this.ZV75Contato = "" ;
   this.OV75Contato = "" ;
   this.AV90PessoaTelefoneContato = "" ;
   this.ZV90PessoaTelefoneContato = "" ;
   this.OV90PessoaTelefoneContato = "" ;
   this.AV87PessoaCelular = "" ;
   this.ZV87PessoaCelular = "" ;
   this.OV87PessoaCelular = "" ;
   this.AV95PessoaTelefone = "" ;
   this.ZV95PessoaTelefone = "" ;
   this.OV95PessoaTelefone = "" ;
   this.AV86OpcaoClassificacaoId = "" ;
   this.ZV86OpcaoClassificacaoId = "" ;
   this.OV86OpcaoClassificacaoId = "" ;
   this.AV76EnderecoCompleto = "" ;
   this.ZV76EnderecoCompleto = "" ;
   this.OV76EnderecoCompleto = "" ;
   this.AV74Cod2VisitaOSVal = "" ;
   this.ZV74Cod2VisitaOSVal = "" ;
   this.OV74Cod2VisitaOSVal = "" ;
   this.AV59AparelhoDescricao = "" ;
   this.ZV59AparelhoDescricao = "" ;
   this.OV59AparelhoDescricao = "" ;
   this.AV61C1AparelhoCaracDescricao = "" ;
   this.ZV61C1AparelhoCaracDescricao = "" ;
   this.OV61C1AparelhoCaracDescricao = "" ;
   this.AV62C2AparelhoCaracDescricao = "" ;
   this.ZV62C2AparelhoCaracDescricao = "" ;
   this.OV62C2AparelhoCaracDescricao = "" ;
   this.AV63C3AparelhoCaracDescricao = "" ;
   this.ZV63C3AparelhoCaracDescricao = "" ;
   this.OV63C3AparelhoCaracDescricao = "" ;
   this.AV64C4AparelhoCaracDescricao = "" ;
   this.ZV64C4AparelhoCaracDescricao = "" ;
   this.OV64C4AparelhoCaracDescricao = "" ;
   this.AV65C5AparelhoCaracDescricao = "" ;
   this.ZV65C5AparelhoCaracDescricao = "" ;
   this.OV65C5AparelhoCaracDescricao = "" ;
   this.AV66C6AparelhoCaracDescricao = "" ;
   this.ZV66C6AparelhoCaracDescricao = "" ;
   this.OV66C6AparelhoCaracDescricao = "" ;
   this.AV67C7AparelhoCaracDescricao = "" ;
   this.ZV67C7AparelhoCaracDescricao = "" ;
   this.OV67C7AparelhoCaracDescricao = "" ;
   this.AV68C8AparelhoCaracDescricao = "" ;
   this.ZV68C8AparelhoCaracDescricao = "" ;
   this.OV68C8AparelhoCaracDescricao = "" ;
   this.AV60AparelhoProfissionalNome = "" ;
   this.ZV60AparelhoProfissionalNome = "" ;
   this.OV60AparelhoProfissionalNome = "" ;
   this.AV56NumDiasAdiamento = 0 ;
   this.ZV56NumDiasAdiamento = 0 ;
   this.OV56NumDiasAdiamento = 0 ;
   this.AV53VisitaClienteObservacao = "" ;
   this.ZV53VisitaClienteObservacao = "" ;
   this.OV53VisitaClienteObservacao = "" ;
   this.AV93DataLigacao = gx.date.nullDate() ;
   this.ZV93DataLigacao = gx.date.nullDate() ;
   this.OV93DataLigacao = gx.date.nullDate() ;
   this.AV16SNLigarNovamente = "" ;
   this.ZV16SNLigarNovamente = "" ;
   this.OV16SNLigarNovamente = "" ;
   this.AV11OrdemServicoTipoId = 0 ;
   this.ZV11OrdemServicoTipoId = 0 ;
   this.OV11OrdemServicoTipoId = 0 ;
   this.AV44SNProDisponivel = "" ;
   this.ZV44SNProDisponivel = "" ;
   this.OV44SNProDisponivel = "" ;
   this.AV7FilialId = 0 ;
   this.ZV7FilialId = 0 ;
   this.OV7FilialId = 0 ;
   this.AV25FilialNome = "" ;
   this.ZV25FilialNome = "" ;
   this.OV25FilialNome = "" ;
   this.AV9HoraInicial = "" ;
   this.ZV9HoraInicial = "" ;
   this.OV9HoraInicial = "" ;
   this.AV8HoraFinal = "" ;
   this.ZV8HoraFinal = "" ;
   this.OV8HoraFinal = "" ;
   this.AV18OrdemServicoVendedorId = 0 ;
   this.ZV18OrdemServicoVendedorId = 0 ;
   this.OV18OrdemServicoVendedorId = 0 ;
   this.AV19OrdemServicoVendedorNome = "" ;
   this.ZV19OrdemServicoVendedorNome = "" ;
   this.OV19OrdemServicoVendedorNome = "" ;
   this.AV94agVisitaClienteObservacao = "" ;
   this.ZV94agVisitaClienteObservacao = "" ;
   this.OV94agVisitaClienteObservacao = "" ;
   this.AV12ProfissionalId = 0 ;
   this.ZV12ProfissionalId = 0 ;
   this.OV12ProfissionalId = 0 ;
   this.AV20ProfissionalNome = "" ;
   this.ZV20ProfissionalNome = "" ;
   this.OV20ProfissionalNome = "" ;
   this.AV6DataAgenda = gx.date.nullDate() ;
   this.ZV6DataAgenda = gx.date.nullDate() ;
   this.OV6DataAgenda = gx.date.nullDate() ;
   this.AV52visitaclientedatavisita = gx.date.nullDate() ;
   this.ZV52visitaclientedatavisita = gx.date.nullDate() ;
   this.OV52visitaclientedatavisita = gx.date.nullDate() ;
   this.AV41OrdemServicoId = 0 ;
   this.ZV41OrdemServicoId = 0 ;
   this.OV41OrdemServicoId = 0 ;
   this.AV24FilialEmpresaId = "" ;
   this.ZV24FilialEmpresaId = "" ;
   this.OV24FilialEmpresaId = "" ;
   this.AV26QtdeCaracter = 0 ;
   this.ZV26QtdeCaracter = 0 ;
   this.OV26QtdeCaracter = 0 ;
   this.AV30ProfissionalEmpresaid = "" ;
   this.ZV30ProfissionalEmpresaid = "" ;
   this.OV30ProfissionalEmpresaid = "" ;
   this.AV34OrdemServicoVendedorEmpId = "" ;
   this.ZV34OrdemServicoVendedorEmpId = "" ;
   this.OV34OrdemServicoVendedorEmpId = "" ;
   this.AV55isAdiamento = false ;
   this.ZV55isAdiamento = false ;
   this.OV55isAdiamento = false ;
   this.AV69Cla1VisitaOS = "" ;
   this.ZV69Cla1VisitaOS = "" ;
   this.OV69Cla1VisitaOS = "" ;
   this.AV71Cod1VisitaOS = "" ;
   this.ZV71Cod1VisitaOS = "" ;
   this.OV71Cod1VisitaOS = "" ;
   this.AV73Cod2VisitaOS = "" ;
   this.ZV73Cod2VisitaOS = "" ;
   this.OV73Cod2VisitaOS = "" ;
   this.AV58TipoTelefoneId = "" ;
   this.ZV58TipoTelefoneId = "" ;
   this.OV58TipoTelefoneId = "" ;
   this.AV72Cod1VisitaOSVal = "" ;
   this.ZV72Cod1VisitaOSVal = "" ;
   this.OV72Cod1VisitaOSVal = "" ;
   this.AV17PessoaId = 0 ;
   this.ZV17PessoaId = 0 ;
   this.OV17PessoaId = 0 ;
   this.AV89PessoaFantasia = "" ;
   this.AV75Contato = "" ;
   this.AV90PessoaTelefoneContato = "" ;
   this.AV87PessoaCelular = "" ;
   this.AV95PessoaTelefone = "" ;
   this.AV86OpcaoClassificacaoId = "" ;
   this.AV76EnderecoCompleto = "" ;
   this.AV74Cod2VisitaOSVal = "" ;
   this.AV59AparelhoDescricao = "" ;
   this.AV61C1AparelhoCaracDescricao = "" ;
   this.AV62C2AparelhoCaracDescricao = "" ;
   this.AV63C3AparelhoCaracDescricao = "" ;
   this.AV64C4AparelhoCaracDescricao = "" ;
   this.AV65C5AparelhoCaracDescricao = "" ;
   this.AV66C6AparelhoCaracDescricao = "" ;
   this.AV67C7AparelhoCaracDescricao = "" ;
   this.AV68C8AparelhoCaracDescricao = "" ;
   this.AV60AparelhoProfissionalNome = "" ;
   this.AV56NumDiasAdiamento = 0 ;
   this.AV53VisitaClienteObservacao = "" ;
   this.AV93DataLigacao = gx.date.nullDate() ;
   this.AV16SNLigarNovamente = "" ;
   this.AV11OrdemServicoTipoId = 0 ;
   this.AV44SNProDisponivel = "" ;
   this.AV7FilialId = 0 ;
   this.AV25FilialNome = "" ;
   this.AV9HoraInicial = "" ;
   this.AV8HoraFinal = "" ;
   this.AV18OrdemServicoVendedorId = 0 ;
   this.AV19OrdemServicoVendedorNome = "" ;
   this.AV94agVisitaClienteObservacao = "" ;
   this.AV12ProfissionalId = 0 ;
   this.AV20ProfissionalNome = "" ;
   this.AV6DataAgenda = gx.date.nullDate() ;
   this.AV52visitaclientedatavisita = gx.date.nullDate() ;
   this.AV41OrdemServicoId = 0 ;
   this.AV24FilialEmpresaId = "" ;
   this.AV26QtdeCaracter = 0 ;
   this.AV30ProfissionalEmpresaid = "" ;
   this.AV34OrdemServicoVendedorEmpId = "" ;
   this.AV55isAdiamento = false ;
   this.AV69Cla1VisitaOS = "" ;
   this.AV71Cod1VisitaOS = "" ;
   this.AV73Cod2VisitaOS = "" ;
   this.AV58TipoTelefoneId = "" ;
   this.AV72Cod1VisitaOSVal = "" ;
   this.AV17PessoaId = 0 ;
   this.AV21AparelhoClienteSeqId = 0 ;
   this.AV22AparelhoId = 0 ;
   this.AV45AparelhoItemId = 0 ;
   this.AV49DataAgendaIn = gx.date.nullDate() ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A55ClassificacaoDescricao = "" ;
   this.A164EmpresaCodificacaoEmpresaId = "" ;
   this.A58CodificacaoId = "" ;
   this.A59CodificacaoDescricao = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1136FilialNome = "" ;
   this.A8566ProfissionalId = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8565AgendaHoraFinal = "" ;
   this.A8564AgendaHoraInicial = "" ;
   this.A8571AgendaData = gx.date.nullDate() ;
   this.A8570AgendaId = 0 ;
   this.A8922SituacaoProfissional = "" ;
   this.A1237VendedorId = 0 ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1223VendedorSNVendedor = "" ;
   this.A6477VendedorAtivo = "" ;
   this.A1148VendedorNome = "" ;
   this.A8608ProfissionalNome = "" ;
   this.A8825AparelhoId = 0 ;
   this.A69PessoaId = 0 ;
   this.A8791OrdemServicoEmpresaId = "" ;
   this.A8792OrdemServicoId = 0 ;
   this.A8682OrdemServicoTipoId = 0 ;
   this.A8717OrdemServicoFilialId = 0 ;
   this.A9308OrdemServicoVendedorId = 0 ;
   this.A8919OrdemServicoSituacao = "" ;
   this.A9686VisitaClienteDataAgenda = gx.date.nullDate() ;
   this.A9683VisitaClientePessoaId = 0 ;
   this.A9688VisitaClienteOrdemServicoId = 0 ;
   this.A9713VisitaClienteAparelhoItemid = 0 ;
   this.A9685VisitaClienteAparelhoId = 0 ;
   this.A9681VisitaClienteAparelhoCliSeqId = 0 ;
   this.A9701VisitaClienteDataVisita = gx.date.nullDate() ;
   this.A9702VisitaClienteObservacao = "" ;
   this.AV38UsrCod = "" ;
   this.AV36SDTIncluiVisitaOS = {} ;
   this.AV39OrdemServicoTipoEmpresaId = "" ;
   this.AV28EmpresaPessoasEmpresaId = "" ;
   this.AV29AparelhoEmpresaId = "" ;
   this.Events = {"e131yy2_client": ["'AGENDARVISITA'", true] ,"e141yy2_client": ["'ADIARLIGACAO'", true] ,"e151yy2_client": ["'VEROS'", true] ,"e161yy2_client": ["'ALTERARCLIENTEAPARELHO'", true] ,"e181yy2_client": ["VSNPRODISPONIVEL.CLICK", true] ,"e191yy2_client": ["ENTER", true] ,"e201yy1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV21AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'AV22AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV17PessoaId',fld:'vPESSOAID',hsh:true},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV12ProfissionalId',fld:'vPROFISSIONALID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'AV30ProfissionalEmpresaid',fld:'vPROFISSIONALEMPRESAID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'AV18OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV34OrdemServicoVendedorEmpId',fld:'vORDEMSERVICOVENDEDOREMPID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV24FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV7FilialId',fld:'vFILIALID'},{av:'AV43OrdemServicoFilialId',fld:'vORDEMSERVICOFILIALID'},{av:'AV15SdtAparelhoClienteItem',fld:'vSDTAPARELHOCLIENTEITEM'},{av:'AV71Cod1VisitaOS',fld:'vCOD1VISITAOS'},{av:'AV73Cod2VisitaOS',fld:'vCOD2VISITAOS'},{av:'A58CodificacaoId',fld:'CODIFICACAOID'},{av:'A164EmpresaCodificacaoEmpresaId',fld:'EMPRESACODIFICACAOEMPRESAID'},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A59CodificacaoDescricao',fld:'CODIFICACAODESCRICAO'},{av:'AV69Cla1VisitaOS',fld:'vCLA1VISITAOS'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'A55ClassificacaoDescricao',fld:'CLASSIFICACAODESCRICAO'},{av:'AV44SNProDisponivel',fld:'vSNPRODISPONIVEL'}],[{av:'AV15SdtAparelhoClienteItem',fld:'vSDTAPARELHOCLIENTEITEM'},{av:'AV14SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE'},{av:'AV31Entrada',fld:'vENTRADA'},{av:'AV32Saida',fld:'vSAIDA'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV20ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV19OrdemServicoVendedorNome',fld:'vORDEMSERVICOVENDEDORNOME'},{av:'AV42FilialAux',fld:'vFILIALAUX'},{av:'AV7FilialId',fld:'vFILIALID'},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{av:'AV25FilialNome',fld:'vFILIALNOME'},{av:'AV89PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV75Contato',fld:'vCONTATO'},{av:'AV90PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV95PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV87PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV76EnderecoCompleto',fld:'vENDERECOCOMPLETO'},{av:'AV59AparelhoDescricao',fld:'vAPARELHODESCRICAO'},{av:'gx.fn.getCtrlProperty("TITCARAC1","Visible")',ctrl:'TITCARAC1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vC1APARELHOCARACDESCRICAO","Visible")',ctrl:'vC1APARELHOCARACDESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TITCARAC1","Caption")',ctrl:'TITCARAC1',prop:'Caption'},{av:'AV61C1AparelhoCaracDescricao',fld:'vC1APARELHOCARACDESCRICAO'},{av:'gx.fn.getCtrlProperty("TITCARAC2","Visible")',ctrl:'TITCARAC2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vC2APARELHOCARACDESCRICAO","Visible")',ctrl:'vC2APARELHOCARACDESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TITCARAC2","Caption")',ctrl:'TITCARAC2',prop:'Caption'},{av:'AV62C2AparelhoCaracDescricao',fld:'vC2APARELHOCARACDESCRICAO'},{av:'gx.fn.getCtrlProperty("TITCARAC3","Visible")',ctrl:'TITCARAC3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vC3APARELHOCARACDESCRICAO","Visible")',ctrl:'vC3APARELHOCARACDESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TITCARAC3","Caption")',ctrl:'TITCARAC3',prop:'Caption'},{av:'AV63C3AparelhoCaracDescricao',fld:'vC3APARELHOCARACDESCRICAO'},{av:'gx.fn.getCtrlProperty("TITCARAC4","Visible")',ctrl:'TITCARAC4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vC4APARELHOCARACDESCRICAO","Visible")',ctrl:'vC4APARELHOCARACDESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TITCARAC4","Caption")',ctrl:'TITCARAC4',prop:'Caption'},{av:'AV64C4AparelhoCaracDescricao',fld:'vC4APARELHOCARACDESCRICAO'},{av:'gx.fn.getCtrlProperty("TITCARAC5","Visible")',ctrl:'TITCARAC5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vC5APARELHOCARACDESCRICAO","Visible")',ctrl:'vC5APARELHOCARACDESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TITCARAC5","Caption")',ctrl:'TITCARAC5',prop:'Caption'},{av:'AV65C5AparelhoCaracDescricao',fld:'vC5APARELHOCARACDESCRICAO'},{av:'gx.fn.getCtrlProperty("TITCARAC6","Visible")',ctrl:'TITCARAC6',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vC6APARELHOCARACDESCRICAO","Visible")',ctrl:'vC6APARELHOCARACDESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TITCARAC6","Caption")',ctrl:'TITCARAC6',prop:'Caption'},{av:'AV66C6AparelhoCaracDescricao',fld:'vC6APARELHOCARACDESCRICAO'},{av:'gx.fn.getCtrlProperty("TITCARAC7","Visible")',ctrl:'TITCARAC7',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vC7APARELHOCARACDESCRICAO","Visible")',ctrl:'vC7APARELHOCARACDESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TITCARAC7","Caption")',ctrl:'TITCARAC7',prop:'Caption'},{av:'AV67C7AparelhoCaracDescricao',fld:'vC7APARELHOCARACDESCRICAO'},{av:'gx.fn.getCtrlProperty("TITCARAC8","Visible")',ctrl:'TITCARAC8',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vC8APARELHOCARACDESCRICAO","Visible")',ctrl:'vC8APARELHOCARACDESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TITCARAC8","Caption")',ctrl:'TITCARAC8',prop:'Caption'},{av:'AV68C8AparelhoCaracDescricao',fld:'vC8APARELHOCARACDESCRICAO'},{av:'AV60AparelhoProfissionalNome',fld:'vAPARELHOPROFISSIONALNOME'},{av:'AV72Cod1VisitaOSVal',fld:'vCOD1VISITAOSVAL'},{av:'gx.fn.getCtrlProperty("LBLCOD1VISITAOS","Visible")',ctrl:'LBLCOD1VISITAOS',prop:'Visible'},{av:'AV77I',fld:'vI'},{av:'AV96lblCod1VisitaOSVal',fld:'vLBLCOD1VISITAOSVAL'},{av:'gx.fn.getCtrlProperty("LBLCOD1VISITAOSVAL","Caption")',ctrl:'LBLCOD1VISITAOSVAL',prop:'Caption'},{av:'gx.fn.getCtrlProperty("LBLCOD2VISITAOS","Visible")',ctrl:'LBLCOD2VISITAOS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCOD2VISITAOSVAL","Visible")',ctrl:'vCOD2VISITAOSVAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LBLCOD2VISITAOS","Caption")',ctrl:'LBLCOD2VISITAOS',prop:'Caption'},{av:'AV74Cod2VisitaOSVal',fld:'vCOD2VISITAOSVAL'},{av:'gx.fn.getCtrlProperty("LBLCLA1VISITAOS","Visible")',ctrl:'LBLCLA1VISITAOS',prop:'Visible'},{ctrl:'vOPCAOCLASSIFICACAOID'},{av:'gx.fn.getCtrlProperty("LBLCLA1VISITAOS","Caption")',ctrl:'LBLCLA1VISITAOS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vPESSOAFANTASIA","Enabled")',ctrl:'vPESSOAFANTASIA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTATO","Enabled")',ctrl:'vCONTATO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPESSOATELEFONECONTATO","Enabled")',ctrl:'vPESSOATELEFONECONTATO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPESSOACELULAR","Enabled")',ctrl:'vPESSOACELULAR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPESSOATELEFONE","Enabled")',ctrl:'vPESSOATELEFONE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENDERECOCOMPLETO","Enabled")',ctrl:'vENDERECOCOMPLETO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPARELHODESCRICAO","Enabled")',ctrl:'vAPARELHODESCRICAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vC1APARELHOCARACDESCRICAO","Enabled")',ctrl:'vC1APARELHOCARACDESCRICAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vC2APARELHOCARACDESCRICAO","Enabled")',ctrl:'vC2APARELHOCARACDESCRICAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vC3APARELHOCARACDESCRICAO","Enabled")',ctrl:'vC3APARELHOCARACDESCRICAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vC4APARELHOCARACDESCRICAO","Enabled")',ctrl:'vC4APARELHOCARACDESCRICAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vC5APARELHOCARACDESCRICAO","Enabled")',ctrl:'vC5APARELHOCARACDESCRICAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vC6APARELHOCARACDESCRICAO","Enabled")',ctrl:'vC6APARELHOCARACDESCRICAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vC7APARELHOCARACDESCRICAO","Enabled")',ctrl:'vC7APARELHOCARACDESCRICAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vC8APARELHOCARACDESCRICAO","Enabled")',ctrl:'vC8APARELHOCARACDESCRICAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAPARELHOPROFISSIONALNOME","Enabled")',ctrl:'vAPARELHOPROFISSIONALNOME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOD1VISITAOSVAL","Enabled")',ctrl:'vCOD1VISITAOSVAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOD2VISITAOSVAL","Enabled")',ctrl:'vCOD2VISITAOSVAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vHORAINICIAL","Enabled")',ctrl:'vHORAINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vHORAFINAL","Enabled")',ctrl:'vHORAFINAL',prop:'Enabled'}]];
   this.EvtParms["'AGENDARVISITA'"] = [[{av:'AV94agVisitaClienteObservacao',fld:'vAGVISITACLIENTEOBSERVACAO'},{av:'AV16SNLigarNovamente',fld:'vSNLIGARNOVAMENTE'},{av:'AV21AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'AV22AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV17PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV55isAdiamento',fld:'vISADIAMENTO'},{av:'AV6DataAgenda',fld:'vDATAAGENDA'},{av:'AV35SNErro',fld:'vSNERRO'},{av:'AV49DataAgendaIn',fld:'vDATAAGENDAIN',hsh:true},{av:'AV36SDTIncluiVisitaOS',fld:'vSDTINCLUIVISITAOS'},{av:'AV41OrdemServicoId',fld:'vORDEMSERVICOID',hsh:true},{av:'AV44SNProDisponivel',fld:'vSNPRODISPONIVEL'},{av:'AV51OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV52visitaclientedatavisita',fld:'vVISITACLIENTEDATAVISITA'},{av:'AV11OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV7FilialId',fld:'vFILIALID'},{av:'AV25FilialNome',fld:'vFILIALNOME'},{av:'AV18OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'AV12ProfissionalId',fld:'vPROFISSIONALID'},{av:'Gx_date',fld:'vTODAY'},{av:'AV9HoraInicial',fld:'vHORAINICIAL'},{av:'AV8HoraFinal',fld:'vHORAFINAL'},{av:'AV29AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV45AparelhoItemId',fld:'vAPARELHOITEMID',hsh:true},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV39OrdemServicoTipoEmpresaId',fld:'vORDEMSERVICOTIPOEMPRESAID'},{av:'AV34OrdemServicoVendedorEmpId',fld:'vORDEMSERVICOVENDEDOREMPID'},{av:'AV30ProfissionalEmpresaid',fld:'vPROFISSIONALEMPRESAID'},{av:'AV53VisitaClienteObservacao',fld:'vVISITACLIENTEOBSERVACAO'},{av:'AV38UsrCod',fld:'vUSRCOD'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1223VendedorSNVendedor',fld:'VENDEDORSNVENDEDOR'},{av:'A6477VendedorAtivo',fld:'VENDEDORATIVO'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'A8570AgendaId',fld:'AGENDAID'},{av:'A8571AgendaData',fld:'AGENDADATA'},{av:'A8564AgendaHoraInicial',fld:'AGENDAHORAINICIAL'},{av:'A8565AgendaHoraFinal',fld:'AGENDAHORAFINAL'}],[{av:'AV55isAdiamento',fld:'vISADIAMENTO'},{av:'AV53VisitaClienteObservacao',fld:'vVISITACLIENTEOBSERVACAO'},{av:'AV15SdtAparelhoClienteItem',fld:'vSDTAPARELHOCLIENTEITEM'},{av:'AV57MsgErro',fld:'vMSGERRO'},{av:'AV35SNErro',fld:'vSNERRO'},{av:'AV36SDTIncluiVisitaOS',fld:'vSDTINCLUIVISITAOS'},{av:'AV41OrdemServicoId',fld:'vORDEMSERVICOID',hsh:true},{av:'AV47HoraInicialN',fld:'vHORAINICIALN'},{av:'AV48HoraFinalN',fld:'vHORAFINALN'},{av:'AV105GXLvl358',fld:'vGXLVL358'},{av:'AV106GXLvl379',fld:'vGXLVL379'}]];
   this.EvtParms["'ADIARLIGACAO'"] = [[{av:'AV93DataLigacao',fld:'vDATALIGACAO'},{av:'Gx_date',fld:'vTODAY'},{av:'AV53VisitaClienteObservacao',fld:'vVISITACLIENTEOBSERVACAO'},{av:'AV21AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'AV22AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV17PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV16SNLigarNovamente',fld:'vSNLIGARNOVAMENTE'},{av:'AV55isAdiamento',fld:'vISADIAMENTO'},{av:'AV6DataAgenda',fld:'vDATAAGENDA'},{av:'AV35SNErro',fld:'vSNERRO'},{av:'AV49DataAgendaIn',fld:'vDATAAGENDAIN',hsh:true},{av:'AV36SDTIncluiVisitaOS',fld:'vSDTINCLUIVISITAOS'},{av:'AV41OrdemServicoId',fld:'vORDEMSERVICOID',hsh:true},{av:'AV44SNProDisponivel',fld:'vSNPRODISPONIVEL'},{av:'AV51OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV52visitaclientedatavisita',fld:'vVISITACLIENTEDATAVISITA'},{av:'AV11OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV7FilialId',fld:'vFILIALID'},{av:'AV25FilialNome',fld:'vFILIALNOME'},{av:'AV18OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'AV12ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV9HoraInicial',fld:'vHORAINICIAL'},{av:'AV8HoraFinal',fld:'vHORAFINAL'},{av:'AV29AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV45AparelhoItemId',fld:'vAPARELHOITEMID',hsh:true},{av:'AV28EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV39OrdemServicoTipoEmpresaId',fld:'vORDEMSERVICOTIPOEMPRESAID'},{av:'AV34OrdemServicoVendedorEmpId',fld:'vORDEMSERVICOVENDEDOREMPID'},{av:'AV30ProfissionalEmpresaid',fld:'vPROFISSIONALEMPRESAID'},{av:'AV38UsrCod',fld:'vUSRCOD'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1223VendedorSNVendedor',fld:'VENDEDORSNVENDEDOR'},{av:'A6477VendedorAtivo',fld:'VENDEDORATIVO'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'A8570AgendaId',fld:'AGENDAID'},{av:'A8571AgendaData',fld:'AGENDADATA'},{av:'A8564AgendaHoraInicial',fld:'AGENDAHORAINICIAL'},{av:'A8565AgendaHoraFinal',fld:'AGENDAHORAFINAL'}],[{av:'AV55isAdiamento',fld:'vISADIAMENTO'},{av:'AV6DataAgenda',fld:'vDATAAGENDA'},{av:'AV15SdtAparelhoClienteItem',fld:'vSDTAPARELHOCLIENTEITEM'},{av:'AV57MsgErro',fld:'vMSGERRO'},{av:'AV35SNErro',fld:'vSNERRO'},{av:'AV36SDTIncluiVisitaOS',fld:'vSDTINCLUIVISITAOS'},{av:'AV41OrdemServicoId',fld:'vORDEMSERVICOID',hsh:true},{av:'AV47HoraInicialN',fld:'vHORAINICIALN'},{av:'AV48HoraFinalN',fld:'vHORAFINALN'},{av:'AV105GXLvl358',fld:'vGXLVL358'},{av:'AV106GXLvl379',fld:'vGXLVL379'}]];
   this.EvtParms["'VEROS'"] = [[{av:'AV41OrdemServicoId',fld:'vORDEMSERVICOID',hsh:true}],[{av:'AV41OrdemServicoId',fld:'vORDEMSERVICOID',hsh:true}]];
   this.EvtParms["VSNPRODISPONIVEL.CLICK"] = [[{av:'AV44SNProDisponivel',fld:'vSNPRODISPONIVEL'}],[{av:'gx.fn.getCtrlProperty("vHORAINICIAL","Enabled")',ctrl:'vHORAINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vHORAFINAL","Enabled")',ctrl:'vHORAFINAL',prop:'Enabled'}]];
   this.EvtParms["'ALTERARCLIENTEAPARELHO'"] = [[{av:'AV21AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'AV22AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV17PessoaId',fld:'vPESSOAID',hsh:true}],[]];
   this.setPrompt("PROMPT_FILIALID", [148]);
   this.setPrompt("PROMPT_ORDEMSERVICOVENDEDORID", [169]);
   this.setPrompt("PROMPT_PROFISSIONALID", [179]);
   this.setVCMap("AV21AparelhoClienteSeqId", "vAPARELHOCLIENTESEQID", 0, "int");
   this.setVCMap("AV22AparelhoId", "vAPARELHOID", 0, "int");
   this.setVCMap("AV45AparelhoItemId", "vAPARELHOITEMID", 0, "int");
   this.setVCMap("AV49DataAgendaIn", "vDATAAGENDAIN", 0, "date");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvisitaclientedadosos());
