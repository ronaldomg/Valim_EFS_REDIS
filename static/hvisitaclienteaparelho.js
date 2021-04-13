/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:34:9.81
*/
gx.evt.autoSkip = false;
gx.define('hvisitaclienteaparelho', false, function () {
   this.ServerClass =  "hvisitaclienteaparelho" ;
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
      this.AV9AparelhoClienteSeqId=gx.fn.getIntegerValue("vAPARELHOCLIENTESEQID",'.') ;
      this.AV72PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
   };
   this.Validv_Pessoacidadeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOACIDADEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Aparelhoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAPARELHOID");
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
   this.Validv_Cla1visitaos=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Cla1visitaos",["gx.O.AV24Cla1VisitaOS", "gx.O.AV59OpcaoClassificacaoId"],["AV59OpcaoClassificacaoId"]);
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
   this.s132_client=function()
   {
      this.AV81SdtAparelhoClienteItem =  {AparelhoClienteSeqId:0,AparelhoClientePessoaEmpId:"",PessoaFantasia:"",PessoaTelefone:"",PessoaCelular:"",PessoaId:0,PessoaEndereco:"",PessoaEnderecoBairro:"",PessoaEnderecoNumero:0,PessoaEnderecoComplemento:"",PessoaEnderecoCEP:"",PessoaEnderecoCidadeId:0,PessoaCod1VisitaOS:"",PessoaCod2VisitaOS:"",PessoaCla1VisitaOS:"",PessoaContato:"",PessoaTelefoneContato:"",AparelhoClientePessoaId:0,AparelhoClienteAparelhoEmpId:"",AparelhoClienteAparelhoId:0,AparelhoDescricao:"",AparelhoClienteCarac1EmpId:"",AparelhoClienteCarac1Id:0,AparelhoCaracDesc1:"",AparelhoClienteCarac2EmpId:"",AparelhoClienteCarac2Id:0,AparelhoCaracDesc2:"",AparelhoClienteCarac3EmpId:"",AparelhoClienteCarac3Id:0,AparelhoCaracDesc3:"",AparelhoClienteCarac4EmpId:"",AparelhoClienteCarac4Id:0,AparelhoCaracDesc4:"",AparelhoClienteCarac5EmpId:"",AparelhoClienteCarac5Id:0,AparelhoCaracDesc5:"",AparelhoClienteCarac6EmpId:"",AparelhoClienteCarac6Id:0,AparelhoCaracDesc6:"",AparelhoClienteCarac7EmpId:"",AparelhoClienteCarac7Id:0,AparelhoCaracDesc7:"",AparelhoClienteCarac8EmpId:"",AparelhoClienteCarac8Id:0,AparelhoCaracDesc8:"",AparelhoClienteCarac9EmpId:"",AparelhoClienteCarac9Id:0,AparelhoCaracDesc9:"",AparelhoCaracteristicaVlr1:"",AparelhoCaracteristicaVlr2:"",AparelhoCaracteristicaVlr3:"",AparelhoCaracteristicaVlr4:"",AparelhoCaracteristicaVlr5:"",AparelhoCaracteristicaVlr6:"",AparelhoCaracteristicaVlr7:"",AparelhoCaracteristicaVlr8:"",AparelhoCaracteristicaVlr9:"",AparelhoCaracTipo1:0,AparelhoCaracTipo2:0,AparelhoCaracTipo3:0,AparelhoCaracTipo4:0,AparelhoCaracTipo5:0,AparelhoCaracTipo6:0,AparelhoCaracTipo7:0,AparelhoCaracTipo8:0,AparelhoCaracTipo9:0,AparelhoClienteSNVisitaAgenda:"",AparelhoClienteProfissionalId:0,AparelhoClienteProfissionalEmpId:"",ProfissionalNome:"",AparelhoClienteDataNovaLigacao:"",AparelhoClienteObservacao:"",VisitaClienteDataVisita:"",VisitaClienteDataAgenda:"",VisitaClienteOrdemServicoId:0,VisitaClienteAparelhoItemid:0,AparelhoClienteUsuarioLock:"",AparelhoClienteDataLock:"",Tipo:0}  ;
      this.AV81SdtAparelhoClienteItem.PessoaTelefone =  this.AV103PessoaTelefone  ;
      this.AV81SdtAparelhoClienteItem.PessoaCelular =  this.AV69PessoaCelular  ;
      this.AV81SdtAparelhoClienteItem.PessoaContato =  this.AV104PessoaContato  ;
      this.AV81SdtAparelhoClienteItem.PessoaTelefoneContato =  this.AV73PessoaTelefoneContato  ;
      this.AV81SdtAparelhoClienteItem.PessoaEnderecoCEP =  this.AV99PessoaCep  ;
      this.AV81SdtAparelhoClienteItem.PessoaEndereco =  this.AV70PessoaEndereco  ;
      this.AV81SdtAparelhoClienteItem.PessoaEnderecoNumero = gx.num.trunc( this.AV92PessoaNumeroEnd ,0) ;
      this.AV81SdtAparelhoClienteItem.PessoaEnderecoComplemento =  this.AV97PessoaComplemento  ;
      this.AV81SdtAparelhoClienteItem.PessoaEnderecoBairro =  this.AV93PessoaBairro  ;
      this.AV81SdtAparelhoClienteItem.PessoaEnderecoCidadeId = gx.num.trunc( this.AV100PessoaCidadeId ,0) ;
      this.AV81SdtAparelhoClienteItem.PessoaCod1VisitaOS =  this.AV27Cod1VisitaOSVal  ;
      this.AV81SdtAparelhoClienteItem.PessoaCod2VisitaOS =  this.AV29Cod2VisitaOSVal  ;
      this.AV81SdtAparelhoClienteItem.PessoaCla1VisitaOS =  this.AV59OpcaoClassificacaoId  ;
      this.AV81SdtAparelhoClienteItem.AparelhoClienteProfissionalId = gx.num.trunc( this.AV75ProfissionalId ,0) ;
      this.AV81SdtAparelhoClienteItem.AparelhoClienteObservacao =  this.AV94AparelhoClienteObservacao  ;
   };
   this.e1423a1_client=function()
   {
      this.clearMessages();
      if ( this.AV27Cod1VisitaOSVal == "111111" )
      {
         this.AV27Cod1VisitaOSVal =  "000000"  ;
         this.AV52isSeg =  false  ;
         this.AV54isTer =  false  ;
         this.AV49isQua =  false  ;
         this.AV50isQuI =  false  ;
         this.AV53isSex =  false  ;
         this.AV51isSab =  false  ;
      }
      else
      {
         this.AV27Cod1VisitaOSVal =  "111111"  ;
         this.AV52isSeg =  true  ;
         this.AV54isTer =  true  ;
         this.AV49isQua =  true  ;
         this.AV50isQuI =  true  ;
         this.AV53isSex =  true  ;
         this.AV51isSab =  true  ;
      }
      this.refreshOutputs([{av:'AV27Cod1VisitaOSVal',fld:'vCOD1VISITAOSVAL'},{av:'AV52isSeg',fld:'vISSEG'},{av:'AV54isTer',fld:'vISTER'},{av:'AV49isQua',fld:'vISQUA'},{av:'AV50isQuI',fld:'vISQUI'},{av:'AV53isSex',fld:'vISSEX'},{av:'AV51isSab',fld:'vISSAB'}]);
   };
   this.e1223a2_client=function()
   {
      this.executeServerEvent("'GRAVAR'", false, null, false, false);
   };
   this.e1523a2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1623a1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,13,16,18,20,22,25,27,29,31,33,35,37,38,41,43,45,47,50,52,54,56,59,61,64,66,69,71,73,75,77,80,82,85,87,89,91,93,94,99,101,102,104,106,108,110,113,115,117,119,121,123,126,128,130,132,134,136,139,141,142,149,151,160,161,162,163,164,165,166,167,168,169,170,173,174];
   this.GXLastCtrlId =174;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV71PessoaFantasia",gxold:"OV71PessoaFantasia",gxvar:"AV71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71PessoaFantasia=Value},v2z:function(Value){gx.O.ZV71PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV71PessoaFantasia,0)},c2v:function(){gx.O.AV71PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATELEFONE",gxz:"ZV103PessoaTelefone",gxold:"OV103PessoaTelefone",gxvar:"AV103PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103PessoaTelefone=Value},v2z:function(Value){gx.O.ZV103PessoaTelefone=Value},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONE",gx.O.AV103PessoaTelefone,0)},c2v:function(){gx.O.AV103PessoaTelefone=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONE")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"LBLCOD1VISITAOS", format:0,grid:0};
   GXValidFnc[22]={fld:"TBLCOD1VISITAOS",grid:0};
   GXValidFnc[25]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISSEG",gxz:"ZV52isSeg",gxold:"OV52isSeg",gxvar:"AV52isSeg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV52isSeg=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV52isSeg=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISSEG",gx.O.AV52isSeg,true)},c2v:function(){gx.O.AV52isSeg=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISSEG")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[27]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISTER",gxz:"ZV54isTer",gxold:"OV54isTer",gxvar:"AV54isTer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV54isTer=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV54isTer=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISTER",gx.O.AV54isTer,true)},c2v:function(){gx.O.AV54isTer=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISTER")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[29]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISQUA",gxz:"ZV49isQua",gxold:"OV49isQua",gxvar:"AV49isQua",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV49isQua=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV49isQua=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISQUA",gx.O.AV49isQua,true)},c2v:function(){gx.O.AV49isQua=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISQUA")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[31]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISQUI",gxz:"ZV50isQuI",gxold:"OV50isQuI",gxvar:"AV50isQuI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV50isQuI=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV50isQuI=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISQUI",gx.O.AV50isQuI,true)},c2v:function(){gx.O.AV50isQuI=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISQUI")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[33]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISSEX",gxz:"ZV53isSex",gxold:"OV53isSex",gxvar:"AV53isSex",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV53isSex=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV53isSex=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISSEX",gx.O.AV53isSex,true)},c2v:function(){gx.O.AV53isSex=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISSEX")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[35]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISSAB",gxz:"ZV51isSab",gxold:"OV51isSab",gxvar:"AV51isSab",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV51isSab=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV51isSab=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISSAB",gx.O.AV51isSab,true)},c2v:function(){gx.O.AV51isSab=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISSAB")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[37]={fld:"IMAGE1",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACONTATO",gxz:"ZV104PessoaContato",gxold:"OV104PessoaContato",gxvar:"AV104PessoaContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104PessoaContato=Value},v2z:function(Value){gx.O.ZV104PessoaContato=Value},v2c:function(){gx.fn.setControlValue("vPESSOACONTATO",gx.O.AV104PessoaContato,0)},c2v:function(){gx.O.AV104PessoaContato=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACONTATO")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"LBLCLA1VISITAOS", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOID",gxz:"ZV59OpcaoClassificacaoId",gxold:"OV59OpcaoClassificacaoId",gxvar:"AV59OpcaoClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV59OpcaoClassificacaoId=Value},v2z:function(Value){gx.O.ZV59OpcaoClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOID",gx.O.AV59OpcaoClassificacaoId)},c2v:function(){gx.O.AV59OpcaoClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATELEFONECONTATO",gxz:"ZV73PessoaTelefoneContato",gxold:"OV73PessoaTelefoneContato",gxvar:"AV73PessoaTelefoneContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73PessoaTelefoneContato=Value},v2z:function(Value){gx.O.ZV73PessoaTelefoneContato=Value},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONECONTATO",gx.O.AV73PessoaTelefoneContato,0)},c2v:function(){gx.O.AV73PessoaTelefoneContato=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONECONTATO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"LBLCOD2VISITAOS", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOD2VISITAOSVAL",gxz:"ZV29Cod2VisitaOSVal",gxold:"OV29Cod2VisitaOSVal",gxvar:"AV29Cod2VisitaOSVal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29Cod2VisitaOSVal=Value},v2z:function(Value){gx.O.ZV29Cod2VisitaOSVal=Value},v2c:function(){gx.fn.setControlValue("vCOD2VISITAOSVAL",gx.O.AV29Cod2VisitaOSVal,0)},c2v:function(){gx.O.AV29Cod2VisitaOSVal=this.val()},val:function(){return gx.fn.getControlValue("vCOD2VISITAOSVAL")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACELULAR",gxz:"ZV69PessoaCelular",gxold:"OV69PessoaCelular",gxvar:"AV69PessoaCelular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69PessoaCelular=Value},v2z:function(Value){gx.O.ZV69PessoaCelular=Value},v2c:function(){gx.fn.setControlValue("vPESSOACELULAR",gx.O.AV69PessoaCelular,0)},c2v:function(){gx.O.AV69PessoaCelular=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACELULAR")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[66]={fld:"TABLE3",grid:0};
   GXValidFnc[69]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAENDERECO",gxz:"ZV70PessoaEndereco",gxold:"OV70PessoaEndereco",gxvar:"AV70PessoaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70PessoaEndereco=Value},v2z:function(Value){gx.O.ZV70PessoaEndereco=Value},v2c:function(){gx.fn.setControlValue("vPESSOAENDERECO",gx.O.AV70PessoaEndereco,0)},c2v:function(){gx.O.AV70PessoaEndereco=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAENDERECO")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOANUMEROEND",gxz:"ZV92PessoaNumeroEnd",gxold:"OV92PessoaNumeroEnd",gxvar:"AV92PessoaNumeroEnd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92PessoaNumeroEnd=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV92PessoaNumeroEnd=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOANUMEROEND",gx.O.AV92PessoaNumeroEnd,0)},c2v:function(){gx.O.AV92PessoaNumeroEnd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOANUMEROEND",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACEP",gxz:"ZV99PessoaCep",gxold:"OV99PessoaCep",gxvar:"AV99PessoaCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99PessoaCep=Value},v2z:function(Value){gx.O.ZV99PessoaCep=Value},v2c:function(){gx.fn.setControlValue("vPESSOACEP",gx.O.AV99PessoaCep,0)},c2v:function(){gx.O.AV99PessoaCep=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACEP")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[82]={fld:"TABLE4",grid:0};
   GXValidFnc[85]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACOMPLEMENTO",gxz:"ZV97PessoaComplemento",gxold:"OV97PessoaComplemento",gxvar:"AV97PessoaComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97PessoaComplemento=Value},v2z:function(Value){gx.O.ZV97PessoaComplemento=Value},v2c:function(){gx.fn.setControlValue("vPESSOACOMPLEMENTO",gx.O.AV97PessoaComplemento,0)},c2v:function(){gx.O.AV97PessoaComplemento=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOABAIRRO",gxz:"ZV93PessoaBairro",gxold:"OV93PessoaBairro",gxvar:"AV93PessoaBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93PessoaBairro=Value},v2z:function(Value){gx.O.ZV93PessoaBairro=Value},v2c:function(){gx.fn.setControlValue("vPESSOABAIRRO",gx.O.AV93PessoaBairro,0)},c2v:function(){gx.O.AV93PessoaBairro=this.val()},val:function(){return gx.fn.getControlValue("vPESSOABAIRRO")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoacidadeid,isvalid:null,rgrid:[],fld:"vPESSOACIDADEID",gxz:"ZV100PessoaCidadeId",gxold:"OV100PessoaCidadeId",gxvar:"AV100PessoaCidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100PessoaCidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV100PessoaCidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOACIDADEID",gx.O.AV100PessoaCidadeId,0)},c2v:function(){gx.O.AV100PessoaCidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOACIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACIDADENOME",gxz:"ZV101PessoaCidadeNome",gxold:"OV101PessoaCidadeNome",gxvar:"AV101PessoaCidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101PessoaCidadeNome=Value},v2z:function(Value){gx.O.ZV101PessoaCidadeNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOACIDADENOME",gx.O.AV101PessoaCidadeNome,0)},c2v:function(){gx.O.AV101PessoaCidadeNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACIDADENOME")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Aparelhoid,isvalid:null,rgrid:[],fld:"vAPARELHOID",gxz:"ZV12AparelhoId",gxold:"OV12AparelhoId",gxvar:"AV12AparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12AparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12AparelhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAPARELHOID",gx.O.AV12AparelhoId,0)},c2v:function(){gx.O.AV12AparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOID",'.')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHODESCRICAO",gxz:"ZV10AparelhoDescricao",gxold:"OV10AparelhoDescricao",gxvar:"AV10AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10AparelhoDescricao=Value},v2z:function(Value){gx.O.ZV10AparelhoDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHODESCRICAO",gx.O.AV10AparelhoDescricao,0)},c2v:function(){gx.O.AV10AparelhoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TITCARAC1", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC1APARELHOCARACDESCRICAO",gxz:"ZV16C1AparelhoCaracDescricao",gxold:"OV16C1AparelhoCaracDescricao",gxvar:"AV16C1AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16C1AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV16C1AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC1APARELHOCARACDESCRICAO",gx.O.AV16C1AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV16C1AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC1APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TITCARAC2", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC2APARELHOCARACDESCRICAO",gxz:"ZV17C2AparelhoCaracDescricao",gxold:"OV17C2AparelhoCaracDescricao",gxvar:"AV17C2AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17C2AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV17C2AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC2APARELHOCARACDESCRICAO",gx.O.AV17C2AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV17C2AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC2APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[113]={fld:"TITCARAC3", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC3APARELHOCARACDESCRICAO",gxz:"ZV18C3AparelhoCaracDescricao",gxold:"OV18C3AparelhoCaracDescricao",gxvar:"AV18C3AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18C3AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV18C3AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC3APARELHOCARACDESCRICAO",gx.O.AV18C3AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV18C3AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC3APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TITCARAC4", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC4APARELHOCARACDESCRICAO",gxz:"ZV19C4AparelhoCaracDescricao",gxold:"OV19C4AparelhoCaracDescricao",gxvar:"AV19C4AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19C4AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV19C4AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC4APARELHOCARACDESCRICAO",gx.O.AV19C4AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV19C4AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC4APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TITCARAC5", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC5APARELHOCARACDESCRICAO",gxz:"ZV20C5AparelhoCaracDescricao",gxold:"OV20C5AparelhoCaracDescricao",gxvar:"AV20C5AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20C5AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV20C5AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC5APARELHOCARACDESCRICAO",gx.O.AV20C5AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV20C5AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC5APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TITCARAC6", format:0,grid:0};
   GXValidFnc[128]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC6APARELHOCARACDESCRICAO",gxz:"ZV21C6AparelhoCaracDescricao",gxold:"OV21C6AparelhoCaracDescricao",gxvar:"AV21C6AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21C6AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV21C6AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC6APARELHOCARACDESCRICAO",gx.O.AV21C6AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV21C6AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC6APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[130]={fld:"TITCARAC7", format:0,grid:0};
   GXValidFnc[132]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC7APARELHOCARACDESCRICAO",gxz:"ZV22C7AparelhoCaracDescricao",gxold:"OV22C7AparelhoCaracDescricao",gxvar:"AV22C7AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22C7AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV22C7AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC7APARELHOCARACDESCRICAO",gx.O.AV22C7AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV22C7AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC7APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TITCARAC8", format:0,grid:0};
   GXValidFnc[136]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vC8APARELHOCARACDESCRICAO",gxz:"ZV23C8AparelhoCaracDescricao",gxold:"OV23C8AparelhoCaracDescricao",gxvar:"AV23C8AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23C8AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV23C8AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vC8APARELHOCARACDESCRICAO",gx.O.AV23C8AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV23C8AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vC8APARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[141]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalid,isvalid:null,rgrid:[],fld:"vPROFISSIONALID",gxz:"ZV75ProfissionalId",gxold:"OV75ProfissionalId",gxvar:"AV75ProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV75ProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROFISSIONALID",gx.O.AV75ProfissionalId,0)},c2v:function(){gx.O.AV75ProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[142]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOPROFISSIONALNOME",gxz:"ZV14AparelhoProfissionalNome",gxold:"OV14AparelhoProfissionalNome",gxvar:"AV14AparelhoProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14AparelhoProfissionalNome=Value},v2z:function(Value){gx.O.ZV14AparelhoProfissionalNome=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOPROFISSIONALNOME",gx.O.AV14AparelhoProfissionalNome,0)},c2v:function(){gx.O.AV14AparelhoProfissionalNome=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOPROFISSIONALNOME")},nac:gx.falseFn};
   GXValidFnc[149]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[151]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCLIENTEOBSERVACAO",gxz:"ZV94AparelhoClienteObservacao",gxold:"OV94AparelhoClienteObservacao",gxvar:"AV94AparelhoClienteObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94AparelhoClienteObservacao=Value},v2z:function(Value){gx.O.ZV94AparelhoClienteObservacao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCLIENTEOBSERVACAO",gx.O.AV94AparelhoClienteObservacao,0)},c2v:function(){gx.O.AV94AparelhoClienteObservacao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCLIENTEOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[160]={fld:"JS", format:2,grid:0};
   GXValidFnc[161]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV38FilialEmpresaId",gxold:"OV38FilialEmpresaId",gxvar:"AV38FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV38FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV38FilialEmpresaId,0)},c2v:function(){gx.O.AV38FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[162]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV78QtdeCaracter",gxold:"OV78QtdeCaracter",gxvar:"AV78QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78QtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV78QtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV78QtdeCaracter,0)},c2v:function(){gx.O.AV78QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[163]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalempresaid,isvalid:null,rgrid:[],fld:"vPROFISSIONALEMPRESAID",gxz:"ZV74ProfissionalEmpresaid",gxold:"OV74ProfissionalEmpresaid",gxvar:"AV74ProfissionalEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74ProfissionalEmpresaid=Value},v2z:function(Value){gx.O.ZV74ProfissionalEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALEMPRESAID",gx.O.AV74ProfissionalEmpresaid,0)},c2v:function(){gx.O.AV74ProfissionalEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[164]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOVENDEDOREMPID",gxz:"ZV66OrdemServicoVendedorEmpId",gxold:"OV66OrdemServicoVendedorEmpId",gxvar:"AV66OrdemServicoVendedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66OrdemServicoVendedorEmpId=Value},v2z:function(Value){gx.O.ZV66OrdemServicoVendedorEmpId=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOVENDEDOREMPID",gx.O.AV66OrdemServicoVendedorEmpId,0)},c2v:function(){gx.O.AV66OrdemServicoVendedorEmpId=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOVENDEDOREMPID")},nac:gx.falseFn};
   GXValidFnc[165]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISADIAMENTO",gxz:"ZV46isAdiamento",gxold:"OV46isAdiamento",gxvar:"AV46isAdiamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV46isAdiamento=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV46isAdiamento=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISADIAMENTO",gx.O.AV46isAdiamento,true)},c2v:function(){gx.O.AV46isAdiamento=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISADIAMENTO")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[166]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cla1visitaos,isvalid:null,rgrid:[],fld:"vCLA1VISITAOS",gxz:"ZV24Cla1VisitaOS",gxold:"OV24Cla1VisitaOS",gxvar:"AV24Cla1VisitaOS",ucs:[],op:[47],ip:[47,166],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Cla1VisitaOS=Value},v2z:function(Value){gx.O.ZV24Cla1VisitaOS=Value},v2c:function(){gx.fn.setControlValue("vCLA1VISITAOS",gx.O.AV24Cla1VisitaOS,0)},c2v:function(){gx.O.AV24Cla1VisitaOS=this.val()},val:function(){return gx.fn.getControlValue("vCLA1VISITAOS")},nac:gx.falseFn};
   GXValidFnc[167]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOD1VISITAOS",gxz:"ZV26Cod1VisitaOS",gxold:"OV26Cod1VisitaOS",gxvar:"AV26Cod1VisitaOS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Cod1VisitaOS=Value},v2z:function(Value){gx.O.ZV26Cod1VisitaOS=Value},v2c:function(){gx.fn.setControlValue("vCOD1VISITAOS",gx.O.AV26Cod1VisitaOS,0)},c2v:function(){gx.O.AV26Cod1VisitaOS=this.val()},val:function(){return gx.fn.getControlValue("vCOD1VISITAOS")},nac:gx.falseFn};
   GXValidFnc[168]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cod2visitaos,isvalid:null,rgrid:[],fld:"vCOD2VISITAOS",gxz:"ZV28Cod2VisitaOS",gxold:"OV28Cod2VisitaOS",gxvar:"AV28Cod2VisitaOS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Cod2VisitaOS=Value},v2z:function(Value){gx.O.ZV28Cod2VisitaOS=Value},v2c:function(){gx.fn.setControlValue("vCOD2VISITAOS",gx.O.AV28Cod2VisitaOS,0)},c2v:function(){gx.O.AV28Cod2VisitaOS=this.val()},val:function(){return gx.fn.getControlValue("vCOD2VISITAOS")},nac:gx.falseFn};
   GXValidFnc[169]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOTELEFONEID",gxz:"ZV7TipoTelefoneId",gxold:"OV7TipoTelefoneId",gxvar:"AV7TipoTelefoneId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7TipoTelefoneId=Value},v2z:function(Value){gx.O.ZV7TipoTelefoneId=Value},v2c:function(){gx.fn.setControlValue("vTIPOTELEFONEID",gx.O.AV7TipoTelefoneId,0)},c2v:function(){gx.O.AV7TipoTelefoneId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOTELEFONEID")},nac:gx.falseFn};
   GXValidFnc[170]={lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOD1VISITAOSVAL",gxz:"ZV27Cod1VisitaOSVal",gxold:"OV27Cod1VisitaOSVal",gxvar:"AV27Cod1VisitaOSVal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Cod1VisitaOSVal=Value},v2z:function(Value){gx.O.ZV27Cod1VisitaOSVal=Value},v2c:function(){gx.fn.setControlValue("vCOD1VISITAOSVAL",gx.O.AV27Cod1VisitaOSVal,0)},c2v:function(){gx.O.AV27Cod1VisitaOSVal=this.val()},val:function(){return gx.fn.getControlValue("vCOD1VISITAOSVAL")},nac:gx.falseFn};
   GXValidFnc[173]={fld:"PROMPT_PESSOACIDADEID",grid:0};
   GXValidFnc[174]={fld:"PROMPT_PROFISSIONALID",grid:0};
   this.AV71PessoaFantasia = "" ;
   this.ZV71PessoaFantasia = "" ;
   this.OV71PessoaFantasia = "" ;
   this.AV103PessoaTelefone = "" ;
   this.ZV103PessoaTelefone = "" ;
   this.OV103PessoaTelefone = "" ;
   this.AV52isSeg = false ;
   this.ZV52isSeg = false ;
   this.OV52isSeg = false ;
   this.AV54isTer = false ;
   this.ZV54isTer = false ;
   this.OV54isTer = false ;
   this.AV49isQua = false ;
   this.ZV49isQua = false ;
   this.OV49isQua = false ;
   this.AV50isQuI = false ;
   this.ZV50isQuI = false ;
   this.OV50isQuI = false ;
   this.AV53isSex = false ;
   this.ZV53isSex = false ;
   this.OV53isSex = false ;
   this.AV51isSab = false ;
   this.ZV51isSab = false ;
   this.OV51isSab = false ;
   this.AV104PessoaContato = "" ;
   this.ZV104PessoaContato = "" ;
   this.OV104PessoaContato = "" ;
   this.AV59OpcaoClassificacaoId = "" ;
   this.ZV59OpcaoClassificacaoId = "" ;
   this.OV59OpcaoClassificacaoId = "" ;
   this.AV73PessoaTelefoneContato = "" ;
   this.ZV73PessoaTelefoneContato = "" ;
   this.OV73PessoaTelefoneContato = "" ;
   this.AV29Cod2VisitaOSVal = "" ;
   this.ZV29Cod2VisitaOSVal = "" ;
   this.OV29Cod2VisitaOSVal = "" ;
   this.AV69PessoaCelular = "" ;
   this.ZV69PessoaCelular = "" ;
   this.OV69PessoaCelular = "" ;
   this.AV70PessoaEndereco = "" ;
   this.ZV70PessoaEndereco = "" ;
   this.OV70PessoaEndereco = "" ;
   this.AV92PessoaNumeroEnd = 0 ;
   this.ZV92PessoaNumeroEnd = 0 ;
   this.OV92PessoaNumeroEnd = 0 ;
   this.AV99PessoaCep = "" ;
   this.ZV99PessoaCep = "" ;
   this.OV99PessoaCep = "" ;
   this.AV97PessoaComplemento = "" ;
   this.ZV97PessoaComplemento = "" ;
   this.OV97PessoaComplemento = "" ;
   this.AV93PessoaBairro = "" ;
   this.ZV93PessoaBairro = "" ;
   this.OV93PessoaBairro = "" ;
   this.AV100PessoaCidadeId = 0 ;
   this.ZV100PessoaCidadeId = 0 ;
   this.OV100PessoaCidadeId = 0 ;
   this.AV101PessoaCidadeNome = "" ;
   this.ZV101PessoaCidadeNome = "" ;
   this.OV101PessoaCidadeNome = "" ;
   this.AV12AparelhoId = 0 ;
   this.ZV12AparelhoId = 0 ;
   this.OV12AparelhoId = 0 ;
   this.AV10AparelhoDescricao = "" ;
   this.ZV10AparelhoDescricao = "" ;
   this.OV10AparelhoDescricao = "" ;
   this.AV16C1AparelhoCaracDescricao = "" ;
   this.ZV16C1AparelhoCaracDescricao = "" ;
   this.OV16C1AparelhoCaracDescricao = "" ;
   this.AV17C2AparelhoCaracDescricao = "" ;
   this.ZV17C2AparelhoCaracDescricao = "" ;
   this.OV17C2AparelhoCaracDescricao = "" ;
   this.AV18C3AparelhoCaracDescricao = "" ;
   this.ZV18C3AparelhoCaracDescricao = "" ;
   this.OV18C3AparelhoCaracDescricao = "" ;
   this.AV19C4AparelhoCaracDescricao = "" ;
   this.ZV19C4AparelhoCaracDescricao = "" ;
   this.OV19C4AparelhoCaracDescricao = "" ;
   this.AV20C5AparelhoCaracDescricao = "" ;
   this.ZV20C5AparelhoCaracDescricao = "" ;
   this.OV20C5AparelhoCaracDescricao = "" ;
   this.AV21C6AparelhoCaracDescricao = "" ;
   this.ZV21C6AparelhoCaracDescricao = "" ;
   this.OV21C6AparelhoCaracDescricao = "" ;
   this.AV22C7AparelhoCaracDescricao = "" ;
   this.ZV22C7AparelhoCaracDescricao = "" ;
   this.OV22C7AparelhoCaracDescricao = "" ;
   this.AV23C8AparelhoCaracDescricao = "" ;
   this.ZV23C8AparelhoCaracDescricao = "" ;
   this.OV23C8AparelhoCaracDescricao = "" ;
   this.AV75ProfissionalId = 0 ;
   this.ZV75ProfissionalId = 0 ;
   this.OV75ProfissionalId = 0 ;
   this.AV14AparelhoProfissionalNome = "" ;
   this.ZV14AparelhoProfissionalNome = "" ;
   this.OV14AparelhoProfissionalNome = "" ;
   this.AV94AparelhoClienteObservacao = "" ;
   this.ZV94AparelhoClienteObservacao = "" ;
   this.OV94AparelhoClienteObservacao = "" ;
   this.AV38FilialEmpresaId = "" ;
   this.ZV38FilialEmpresaId = "" ;
   this.OV38FilialEmpresaId = "" ;
   this.AV78QtdeCaracter = 0 ;
   this.ZV78QtdeCaracter = 0 ;
   this.OV78QtdeCaracter = 0 ;
   this.AV74ProfissionalEmpresaid = "" ;
   this.ZV74ProfissionalEmpresaid = "" ;
   this.OV74ProfissionalEmpresaid = "" ;
   this.AV66OrdemServicoVendedorEmpId = "" ;
   this.ZV66OrdemServicoVendedorEmpId = "" ;
   this.OV66OrdemServicoVendedorEmpId = "" ;
   this.AV46isAdiamento = false ;
   this.ZV46isAdiamento = false ;
   this.OV46isAdiamento = false ;
   this.AV24Cla1VisitaOS = "" ;
   this.ZV24Cla1VisitaOS = "" ;
   this.OV24Cla1VisitaOS = "" ;
   this.AV26Cod1VisitaOS = "" ;
   this.ZV26Cod1VisitaOS = "" ;
   this.OV26Cod1VisitaOS = "" ;
   this.AV28Cod2VisitaOS = "" ;
   this.ZV28Cod2VisitaOS = "" ;
   this.OV28Cod2VisitaOS = "" ;
   this.AV7TipoTelefoneId = "" ;
   this.ZV7TipoTelefoneId = "" ;
   this.OV7TipoTelefoneId = "" ;
   this.AV27Cod1VisitaOSVal = "" ;
   this.ZV27Cod1VisitaOSVal = "" ;
   this.OV27Cod1VisitaOSVal = "" ;
   this.AV71PessoaFantasia = "" ;
   this.AV103PessoaTelefone = "" ;
   this.AV52isSeg = false ;
   this.AV54isTer = false ;
   this.AV49isQua = false ;
   this.AV50isQuI = false ;
   this.AV53isSex = false ;
   this.AV51isSab = false ;
   this.AV104PessoaContato = "" ;
   this.AV59OpcaoClassificacaoId = "" ;
   this.AV73PessoaTelefoneContato = "" ;
   this.AV29Cod2VisitaOSVal = "" ;
   this.AV69PessoaCelular = "" ;
   this.AV70PessoaEndereco = "" ;
   this.AV92PessoaNumeroEnd = 0 ;
   this.AV99PessoaCep = "" ;
   this.AV97PessoaComplemento = "" ;
   this.AV93PessoaBairro = "" ;
   this.AV100PessoaCidadeId = 0 ;
   this.AV101PessoaCidadeNome = "" ;
   this.AV12AparelhoId = 0 ;
   this.AV10AparelhoDescricao = "" ;
   this.AV16C1AparelhoCaracDescricao = "" ;
   this.AV17C2AparelhoCaracDescricao = "" ;
   this.AV18C3AparelhoCaracDescricao = "" ;
   this.AV19C4AparelhoCaracDescricao = "" ;
   this.AV20C5AparelhoCaracDescricao = "" ;
   this.AV21C6AparelhoCaracDescricao = "" ;
   this.AV22C7AparelhoCaracDescricao = "" ;
   this.AV23C8AparelhoCaracDescricao = "" ;
   this.AV75ProfissionalId = 0 ;
   this.AV14AparelhoProfissionalNome = "" ;
   this.AV94AparelhoClienteObservacao = "" ;
   this.AV38FilialEmpresaId = "" ;
   this.AV78QtdeCaracter = 0 ;
   this.AV74ProfissionalEmpresaid = "" ;
   this.AV66OrdemServicoVendedorEmpId = "" ;
   this.AV46isAdiamento = false ;
   this.AV24Cla1VisitaOS = "" ;
   this.AV26Cod1VisitaOS = "" ;
   this.AV28Cod2VisitaOS = "" ;
   this.AV7TipoTelefoneId = "" ;
   this.AV27Cod1VisitaOSVal = "" ;
   this.AV9AparelhoClienteSeqId = 0 ;
   this.AV72PessoaId = 0 ;
   this.A9692AparelhoClientePessoaEmpId = "" ;
   this.A9691AparelhoClientePessoaId = 0 ;
   this.A9693AparelhoClienteAparelhoEmpId = "" ;
   this.A9694AparelhoClienteAparelhoId = 0 ;
   this.A8865AparelhoClienteSeqId = 0 ;
   this.A9888AparelhoClienteObservacao = "" ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8566ProfissionalId = 0 ;
   this.A8608ProfissionalNome = "" ;
   this.A147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A55ClassificacaoDescricao = "" ;
   this.A164EmpresaCodificacaoEmpresaId = "" ;
   this.A58CodificacaoId = "" ;
   this.A59CodificacaoDescricao = "" ;
   this.A8922SituacaoProfissional = "" ;
   this.AV81SdtAparelhoClienteItem = {} ;
   this.Events = {"e1223a2_client": ["'GRAVAR'", true] ,"e1523a2_client": ["ENTER", true] ,"e1623a1_client": ["CANCEL", true] ,"e1423a1_client": ["'TODOS'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'GRAVAR'"] = [[{av:'AV52isSeg',fld:'vISSEG'},{av:'AV54isTer',fld:'vISTER'},{av:'AV49isQua',fld:'vISQUA'},{av:'AV50isQuI',fld:'vISQUI'},{av:'AV53isSex',fld:'vISSEX'},{av:'AV51isSab',fld:'vISSAB'},{av:'AV102bit',fld:'vBIT'},{av:'AV9AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'AV12AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV72PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV81SdtAparelhoClienteItem',fld:'vSDTAPARELHOCLIENTEITEM'},{av:'AV103PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV69PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV104PessoaContato',fld:'vPESSOACONTATO'},{av:'AV73PessoaTelefoneContato',fld:'vPESSOATELEFONECONTATO'},{av:'AV99PessoaCep',fld:'vPESSOACEP'},{av:'AV70PessoaEndereco',fld:'vPESSOAENDERECO'},{av:'AV92PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV97PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV93PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV100PessoaCidadeId',fld:'vPESSOACIDADEID'},{av:'AV27Cod1VisitaOSVal',fld:'vCOD1VISITAOSVAL'},{av:'AV29Cod2VisitaOSVal',fld:'vCOD2VISITAOSVAL'},{av:'AV59OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV75ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV94AparelhoClienteObservacao',fld:'vAPARELHOCLIENTEOBSERVACAO'}],[{av:'AV27Cod1VisitaOSVal',fld:'vCOD1VISITAOSVAL'},{av:'AV45I',fld:'vI'},{av:'AV102bit',fld:'vBIT'},{av:'AV81SdtAparelhoClienteItem',fld:'vSDTAPARELHOCLIENTEITEM'}]];
   this.EvtParms["'TODOS'"] = [[{av:'AV27Cod1VisitaOSVal',fld:'vCOD1VISITAOSVAL'}],[{av:'AV27Cod1VisitaOSVal',fld:'vCOD1VISITAOSVAL'},{av:'AV52isSeg',fld:'vISSEG'},{av:'AV54isTer',fld:'vISTER'},{av:'AV49isQua',fld:'vISQUA'},{av:'AV50isQuI',fld:'vISQUI'},{av:'AV53isSex',fld:'vISSEX'},{av:'AV51isSab',fld:'vISSAB'}]];
   this.setPrompt("PROMPT_PESSOACIDADEID", [93]);
   this.setPrompt("PROMPT_PROFISSIONALID", [141]);
   this.setVCMap("AV9AparelhoClienteSeqId", "vAPARELHOCLIENTESEQID", 0, "int");
   this.setVCMap("AV72PessoaId", "vPESSOAID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvisitaclienteaparelho());
