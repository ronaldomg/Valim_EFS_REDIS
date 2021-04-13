/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:23:52.8
*/
gx.evt.autoSkip = false;
gx.define('tsaidaitemoculos', false, function () {
   this.ServerClass =  "tsaidaitemoculos" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Saidaitemoculosempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAITEMOCULOSEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaitemoculosid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAITEMOCULOSID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaitemoculosseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaitemoculosseq",["gx.O.A9947SaidaItemOculosEmpresaId", "gx.O.A9948SaidaItemOculosId", "gx.O.A9949SaidaItemOculosSeq", "gx.O.A9955SaidaItemOculosPaciente", "gx.O.A9956SaidaItemOculosNoReceita", 'gx.date.urlDate(gx.O.A9957SaidaItemOculosDataPresc,"DMY4")', "gx.O.A9958SaidaItemOculosSeqArmacao", "gx.O.A9959SaidaItemOculosArmacaoEmpId", "gx.O.A9960SaidaItemOculosArmacaoId", "gx.O.A9961SaidaItemOculosLoteCombinacao", "gx.num.urlDecimal(gx.O.A9962SaidaItemOculosPertoODEsf,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9963SaidaItemOculosPertoODCil,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9964SaidaItemOculosPertoODEixo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9983SaidaItemOculosPertoODAdicao,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9965SaidaItemOculosPertoOEEsf,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9966SaidaItemOculosPertoOECil,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9967SaidaItemOculosPertoOEEixo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9984SaidaItemOculosPertoOEAdicao,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9968SaidaItemOculosLongeODEsf,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9969SaidaItemOculosLongeODCil,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9970SaidaItemOculosLongeODEixo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9982SaidaItemOculosLongeOEEsf,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9971SaidaItemOculosLongeOECil,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9972SaidaItemOculosLongeOEEixo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9973SaidaItemOculosDP,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9974SaidaItemOculosODAltura,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10189SaidaItemOculosODDNPLonge,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10190SaidaItemOculosODDNPPerto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9976SaidaItemOculosOEAltura,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10191SaidaItemOculosOEDNPPerto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10192SaidaItemOculosOEDNPLonge,\'.\',\',\')", "gx.O.A9978SaidaItemOculosTipoLente", "gx.O.A9979SaidaItemOculosTratamento", 'gx.date.urlDateTime(gx.O.A9980SaidaItemOculosPrevisaoEntrega,"DMY4")', "gx.O.A9981SaidaItemOculosObservacao", "gx.O.A9950SaidaItemOculosMedicoEmpId", "gx.O.A9951SaidaItemOculosMedicoId"],["A9951SaidaItemOculosMedicoId", "A9950SaidaItemOculosMedicoEmpId", "A9955SaidaItemOculosPaciente", "A9956SaidaItemOculosNoReceita", "A9957SaidaItemOculosDataPresc", "A9958SaidaItemOculosSeqArmacao", "A9959SaidaItemOculosArmacaoEmpId", "A9960SaidaItemOculosArmacaoId", "A9961SaidaItemOculosLoteCombinacao", "A9962SaidaItemOculosPertoODEsf", "A9963SaidaItemOculosPertoODCil", "A9964SaidaItemOculosPertoODEixo", "A9983SaidaItemOculosPertoODAdicao", "A9965SaidaItemOculosPertoOEEsf", "A9966SaidaItemOculosPertoOECil", "A9967SaidaItemOculosPertoOEEixo", "A9984SaidaItemOculosPertoOEAdicao", "A9968SaidaItemOculosLongeODEsf", "A9969SaidaItemOculosLongeODCil", "A9970SaidaItemOculosLongeODEixo", "A9982SaidaItemOculosLongeOEEsf", "A9971SaidaItemOculosLongeOECil", "A9972SaidaItemOculosLongeOEEixo", "A9973SaidaItemOculosDP", "A9974SaidaItemOculosODAltura", "A10189SaidaItemOculosODDNPLonge", "A10190SaidaItemOculosODDNPPerto", "A9976SaidaItemOculosOEAltura", "A10191SaidaItemOculosOEDNPPerto", "A10192SaidaItemOculosOEDNPLonge", "A9978SaidaItemOculosTipoLente", "A9979SaidaItemOculosTratamento", "A9980SaidaItemOculosPrevisaoEntrega", "A9981SaidaItemOculosObservacao", "Gx_mode", "Z9947SaidaItemOculosEmpresaId", "Z9948SaidaItemOculosId", "Z9949SaidaItemOculosSeq", "Z9951SaidaItemOculosMedicoId", "Z9950SaidaItemOculosMedicoEmpId", "Z9955SaidaItemOculosPaciente", "Z9956SaidaItemOculosNoReceita", "Z9957SaidaItemOculosDataPresc", "Z9958SaidaItemOculosSeqArmacao", "Z9959SaidaItemOculosArmacaoEmpId", "Z9960SaidaItemOculosArmacaoId", "Z9961SaidaItemOculosLoteCombinacao", "Z9962SaidaItemOculosPertoODEsf", "Z9963SaidaItemOculosPertoODCil", "Z9964SaidaItemOculosPertoODEixo", "Z9983SaidaItemOculosPertoODAdicao", "Z9965SaidaItemOculosPertoOEEsf", "Z9966SaidaItemOculosPertoOECil", "Z9967SaidaItemOculosPertoOEEixo", "Z9984SaidaItemOculosPertoOEAdicao", "Z9968SaidaItemOculosLongeODEsf", "Z9969SaidaItemOculosLongeODCil", "Z9970SaidaItemOculosLongeODEixo", "Z9982SaidaItemOculosLongeOEEsf", "Z9971SaidaItemOculosLongeOECil", "Z9972SaidaItemOculosLongeOEEixo", "Z9973SaidaItemOculosDP", "Z9974SaidaItemOculosODAltura", "Z10189SaidaItemOculosODDNPLonge", "Z10190SaidaItemOculosODDNPPerto", "Z9976SaidaItemOculosOEAltura", "Z10191SaidaItemOculosOEDNPPerto", "Z10192SaidaItemOculosOEDNPLonge", "Z9978SaidaItemOculosTipoLente", "Z9979SaidaItemOculosTratamento", "Z9980SaidaItemOculosPrevisaoEntrega", "Z9981SaidaItemOculosObservacao", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Saidaitemoculosmedicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAITEMOCULOSMEDICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaitemoculosmedicoempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaitemoculosmedicoempid",["gx.O.A9950SaidaItemOculosMedicoEmpId", "gx.O.A9951SaidaItemOculosMedicoId"],[]);
      return true;
   }
   this.e11ek747_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ek747_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,117,119,122,124,127,129,132,134,137,139,142,144,147,149,152,154,157,159,162,164,167,169,172,174,177,179,182,184,187,189,192,194,197,199,202,204,207,209,212,214,217,219];
   this.GXLastCtrlId =219;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDAITEMOCULOSEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemoculosempresaid,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSEMPRESAID",gxz:"Z9947SaidaItemOculosEmpresaId",gxold:"O9947SaidaItemOculosEmpresaId",gxvar:"A9947SaidaItemOculosEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9947SaidaItemOculosEmpresaId=Value},v2z:function(Value){gx.O.Z9947SaidaItemOculosEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSEMPRESAID",gx.O.A9947SaidaItemOculosEmpresaId,0)},c2v:function(){gx.O.A9947SaidaItemOculosEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMOCULOSEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDAITEMOCULOSID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemoculosid,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSID",gxz:"Z9948SaidaItemOculosId",gxold:"O9948SaidaItemOculosId",gxvar:"A9948SaidaItemOculosId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9948SaidaItemOculosId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9948SaidaItemOculosId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSID",gx.O.A9948SaidaItemOculosId,0)},c2v:function(){gx.O.A9948SaidaItemOculosId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMOCULOSID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKSAIDAITEMOCULOSSEQ", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemoculosseq,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSSEQ",gxz:"Z9949SaidaItemOculosSeq",gxold:"O9949SaidaItemOculosSeq",gxvar:"A9949SaidaItemOculosSeq",ucs:[],op:[54,59,219,214,209,204,199,194,189,184,179,174,169,164,159,154,149,144,139,134,129,124,119,114,109,104,99,94,89,84,79,74,69,64],ip:[54,59,219,214,209,204,199,194,189,184,179,174,169,164,159,154,149,144,139,134,129,124,119,114,109,104,99,94,89,84,79,74,69,64,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9949SaidaItemOculosSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9949SaidaItemOculosSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSSEQ",gx.O.A9949SaidaItemOculosSeq,0)},c2v:function(){gx.O.A9949SaidaItemOculosSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMOCULOSSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKSAIDAITEMOCULOSMEDICOID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemoculosmedicoid,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSMEDICOID",gxz:"Z9951SaidaItemOculosMedicoId",gxold:"O9951SaidaItemOculosMedicoId",gxvar:"A9951SaidaItemOculosMedicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9951SaidaItemOculosMedicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9951SaidaItemOculosMedicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSMEDICOID",gx.O.A9951SaidaItemOculosMedicoId,0)},c2v:function(){gx.O.A9951SaidaItemOculosMedicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMOCULOSMEDICOID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKSAIDAITEMOCULOSMEDICOEMPID", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemoculosmedicoempid,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSMEDICOEMPID",gxz:"Z9950SaidaItemOculosMedicoEmpId",gxold:"O9950SaidaItemOculosMedicoEmpId",gxvar:"A9950SaidaItemOculosMedicoEmpId",ucs:[],op:[],ip:[54,59],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9950SaidaItemOculosMedicoEmpId=Value},v2z:function(Value){gx.O.Z9950SaidaItemOculosMedicoEmpId=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSMEDICOEMPID",gx.O.A9950SaidaItemOculosMedicoEmpId,0)},c2v:function(){gx.O.A9950SaidaItemOculosMedicoEmpId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMOCULOSMEDICOEMPID")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKSAIDAITEMOCULOSPACIENTE", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSPACIENTE",gxz:"Z9955SaidaItemOculosPaciente",gxold:"O9955SaidaItemOculosPaciente",gxvar:"A9955SaidaItemOculosPaciente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9955SaidaItemOculosPaciente=Value},v2z:function(Value){gx.O.Z9955SaidaItemOculosPaciente=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSPACIENTE",gx.O.A9955SaidaItemOculosPaciente,0)},c2v:function(){gx.O.A9955SaidaItemOculosPaciente=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMOCULOSPACIENTE")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKSAIDAITEMOCULOSNORECEITA", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSNORECEITA",gxz:"Z9956SaidaItemOculosNoReceita",gxold:"O9956SaidaItemOculosNoReceita",gxvar:"A9956SaidaItemOculosNoReceita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9956SaidaItemOculosNoReceita=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9956SaidaItemOculosNoReceita=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSNORECEITA",gx.O.A9956SaidaItemOculosNoReceita,0)},c2v:function(){gx.O.A9956SaidaItemOculosNoReceita=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMOCULOSNORECEITA",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKSAIDAITEMOCULOSDATAPRESC", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSDATAPRESC",gxz:"Z9957SaidaItemOculosDataPresc",gxold:"O9957SaidaItemOculosDataPresc",gxvar:"A9957SaidaItemOculosDataPresc",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9957SaidaItemOculosDataPresc=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9957SaidaItemOculosDataPresc=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSDATAPRESC",gx.O.A9957SaidaItemOculosDataPresc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9957SaidaItemOculosDataPresc=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SAIDAITEMOCULOSDATAPRESC")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCKSAIDAITEMOCULOSSEQARMACAO", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSSEQARMACAO",gxz:"Z9958SaidaItemOculosSeqArmacao",gxold:"O9958SaidaItemOculosSeqArmacao",gxvar:"A9958SaidaItemOculosSeqArmacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9958SaidaItemOculosSeqArmacao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9958SaidaItemOculosSeqArmacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSSEQARMACAO",gx.O.A9958SaidaItemOculosSeqArmacao,0)},c2v:function(){gx.O.A9958SaidaItemOculosSeqArmacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMOCULOSSEQARMACAO",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKSAIDAITEMOCULOSARMACAOEMPID", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSARMACAOEMPID",gxz:"Z9959SaidaItemOculosArmacaoEmpId",gxold:"O9959SaidaItemOculosArmacaoEmpId",gxvar:"A9959SaidaItemOculosArmacaoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9959SaidaItemOculosArmacaoEmpId=Value},v2z:function(Value){gx.O.Z9959SaidaItemOculosArmacaoEmpId=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSARMACAOEMPID",gx.O.A9959SaidaItemOculosArmacaoEmpId,0)},c2v:function(){gx.O.A9959SaidaItemOculosArmacaoEmpId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMOCULOSARMACAOEMPID")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKSAIDAITEMOCULOSARMACAOID", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSARMACAOID",gxz:"Z9960SaidaItemOculosArmacaoId",gxold:"O9960SaidaItemOculosArmacaoId",gxvar:"A9960SaidaItemOculosArmacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9960SaidaItemOculosArmacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9960SaidaItemOculosArmacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSARMACAOID",gx.O.A9960SaidaItemOculosArmacaoId,0)},c2v:function(){gx.O.A9960SaidaItemOculosArmacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMOCULOSARMACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCKSAIDAITEMOCULOSLOTECOMBINACAO", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSLOTECOMBINACAO",gxz:"Z9961SaidaItemOculosLoteCombinacao",gxold:"O9961SaidaItemOculosLoteCombinacao",gxvar:"A9961SaidaItemOculosLoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9961SaidaItemOculosLoteCombinacao=Value},v2z:function(Value){gx.O.Z9961SaidaItemOculosLoteCombinacao=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSLOTECOMBINACAO",gx.O.A9961SaidaItemOculosLoteCombinacao,0)},c2v:function(){gx.O.A9961SaidaItemOculosLoteCombinacao=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMOCULOSLOTECOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCKSAIDAITEMOCULOSPERTOODESF", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSPERTOODESF",gxz:"Z9962SaidaItemOculosPertoODEsf",gxold:"O9962SaidaItemOculosPertoODEsf",gxvar:"A9962SaidaItemOculosPertoODEsf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9962SaidaItemOculosPertoODEsf=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9962SaidaItemOculosPertoODEsf=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSPERTOODESF",gx.O.A9962SaidaItemOculosPertoODEsf,2,',')},c2v:function(){gx.O.A9962SaidaItemOculosPertoODEsf=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSPERTOODESF",'.',',')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCKSAIDAITEMOCULOSPERTOODCIL", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSPERTOODCIL",gxz:"Z9963SaidaItemOculosPertoODCil",gxold:"O9963SaidaItemOculosPertoODCil",gxvar:"A9963SaidaItemOculosPertoODCil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9963SaidaItemOculosPertoODCil=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9963SaidaItemOculosPertoODCil=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSPERTOODCIL",gx.O.A9963SaidaItemOculosPertoODCil,2,',')},c2v:function(){gx.O.A9963SaidaItemOculosPertoODCil=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSPERTOODCIL",'.',',')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCKSAIDAITEMOCULOSPERTOODEIXO", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSPERTOODEIXO",gxz:"Z9964SaidaItemOculosPertoODEixo",gxold:"O9964SaidaItemOculosPertoODEixo",gxvar:"A9964SaidaItemOculosPertoODEixo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9964SaidaItemOculosPertoODEixo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9964SaidaItemOculosPertoODEixo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSPERTOODEIXO",gx.O.A9964SaidaItemOculosPertoODEixo,2,',')},c2v:function(){gx.O.A9964SaidaItemOculosPertoODEixo=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSPERTOODEIXO",'.',',')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCKSAIDAITEMOCULOSPERTOODADICAO", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSPERTOODADICAO",gxz:"Z9983SaidaItemOculosPertoODAdicao",gxold:"O9983SaidaItemOculosPertoODAdicao",gxvar:"A9983SaidaItemOculosPertoODAdicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9983SaidaItemOculosPertoODAdicao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9983SaidaItemOculosPertoODAdicao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSPERTOODADICAO",gx.O.A9983SaidaItemOculosPertoODAdicao,2,',')},c2v:function(){gx.O.A9983SaidaItemOculosPertoODAdicao=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSPERTOODADICAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCKSAIDAITEMOCULOSPERTOOEESF", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSPERTOOEESF",gxz:"Z9965SaidaItemOculosPertoOEEsf",gxold:"O9965SaidaItemOculosPertoOEEsf",gxvar:"A9965SaidaItemOculosPertoOEEsf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9965SaidaItemOculosPertoOEEsf=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9965SaidaItemOculosPertoOEEsf=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSPERTOOEESF",gx.O.A9965SaidaItemOculosPertoOEEsf,2,',')},c2v:function(){gx.O.A9965SaidaItemOculosPertoOEEsf=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSPERTOOEESF",'.',',')},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCKSAIDAITEMOCULOSPERTOOECIL", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSPERTOOECIL",gxz:"Z9966SaidaItemOculosPertoOECil",gxold:"O9966SaidaItemOculosPertoOECil",gxvar:"A9966SaidaItemOculosPertoOECil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9966SaidaItemOculosPertoOECil=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9966SaidaItemOculosPertoOECil=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSPERTOOECIL",gx.O.A9966SaidaItemOculosPertoOECil,2,',')},c2v:function(){gx.O.A9966SaidaItemOculosPertoOECil=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSPERTOOECIL",'.',',')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCKSAIDAITEMOCULOSPERTOOEEIXO", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSPERTOOEEIXO",gxz:"Z9967SaidaItemOculosPertoOEEixo",gxold:"O9967SaidaItemOculosPertoOEEixo",gxvar:"A9967SaidaItemOculosPertoOEEixo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9967SaidaItemOculosPertoOEEixo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9967SaidaItemOculosPertoOEEixo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSPERTOOEEIXO",gx.O.A9967SaidaItemOculosPertoOEEixo,2,',')},c2v:function(){gx.O.A9967SaidaItemOculosPertoOEEixo=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSPERTOOEEIXO",'.',',')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TEXTBLOCKSAIDAITEMOCULOSPERTOOEADICAO", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSPERTOOEADICAO",gxz:"Z9984SaidaItemOculosPertoOEAdicao",gxold:"O9984SaidaItemOculosPertoOEAdicao",gxvar:"A9984SaidaItemOculosPertoOEAdicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9984SaidaItemOculosPertoOEAdicao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9984SaidaItemOculosPertoOEAdicao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSPERTOOEADICAO",gx.O.A9984SaidaItemOculosPertoOEAdicao,2,',')},c2v:function(){gx.O.A9984SaidaItemOculosPertoOEAdicao=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSPERTOOEADICAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[137]={fld:"TEXTBLOCKSAIDAITEMOCULOSLONGEODESF", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSLONGEODESF",gxz:"Z9968SaidaItemOculosLongeODEsf",gxold:"O9968SaidaItemOculosLongeODEsf",gxvar:"A9968SaidaItemOculosLongeODEsf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9968SaidaItemOculosLongeODEsf=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9968SaidaItemOculosLongeODEsf=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSLONGEODESF",gx.O.A9968SaidaItemOculosLongeODEsf,2,',')},c2v:function(){gx.O.A9968SaidaItemOculosLongeODEsf=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSLONGEODESF",'.',',')},nac:gx.falseFn};
   GXValidFnc[142]={fld:"TEXTBLOCKSAIDAITEMOCULOSLONGEODCIL", format:0,grid:0};
   GXValidFnc[144]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSLONGEODCIL",gxz:"Z9969SaidaItemOculosLongeODCil",gxold:"O9969SaidaItemOculosLongeODCil",gxvar:"A9969SaidaItemOculosLongeODCil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9969SaidaItemOculosLongeODCil=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9969SaidaItemOculosLongeODCil=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSLONGEODCIL",gx.O.A9969SaidaItemOculosLongeODCil,2,',')},c2v:function(){gx.O.A9969SaidaItemOculosLongeODCil=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSLONGEODCIL",'.',',')},nac:gx.falseFn};
   GXValidFnc[147]={fld:"TEXTBLOCKSAIDAITEMOCULOSLONGEODEIXO", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSLONGEODEIXO",gxz:"Z9970SaidaItemOculosLongeODEixo",gxold:"O9970SaidaItemOculosLongeODEixo",gxvar:"A9970SaidaItemOculosLongeODEixo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9970SaidaItemOculosLongeODEixo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9970SaidaItemOculosLongeODEixo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSLONGEODEIXO",gx.O.A9970SaidaItemOculosLongeODEixo,2,',')},c2v:function(){gx.O.A9970SaidaItemOculosLongeODEixo=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSLONGEODEIXO",'.',',')},nac:gx.falseFn};
   GXValidFnc[152]={fld:"TEXTBLOCKSAIDAITEMOCULOSLONGEOEESF", format:0,grid:0};
   GXValidFnc[154]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSLONGEOEESF",gxz:"Z9982SaidaItemOculosLongeOEEsf",gxold:"O9982SaidaItemOculosLongeOEEsf",gxvar:"A9982SaidaItemOculosLongeOEEsf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9982SaidaItemOculosLongeOEEsf=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9982SaidaItemOculosLongeOEEsf=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSLONGEOEESF",gx.O.A9982SaidaItemOculosLongeOEEsf,2,',')},c2v:function(){gx.O.A9982SaidaItemOculosLongeOEEsf=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSLONGEOEESF",'.',',')},nac:gx.falseFn};
   GXValidFnc[157]={fld:"TEXTBLOCKSAIDAITEMOCULOSLONGEOECIL", format:0,grid:0};
   GXValidFnc[159]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSLONGEOECIL",gxz:"Z9971SaidaItemOculosLongeOECil",gxold:"O9971SaidaItemOculosLongeOECil",gxvar:"A9971SaidaItemOculosLongeOECil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9971SaidaItemOculosLongeOECil=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9971SaidaItemOculosLongeOECil=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSLONGEOECIL",gx.O.A9971SaidaItemOculosLongeOECil,2,',')},c2v:function(){gx.O.A9971SaidaItemOculosLongeOECil=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSLONGEOECIL",'.',',')},nac:gx.falseFn};
   GXValidFnc[162]={fld:"TEXTBLOCKSAIDAITEMOCULOSLONGEOEEIXO", format:0,grid:0};
   GXValidFnc[164]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSLONGEOEEIXO",gxz:"Z9972SaidaItemOculosLongeOEEixo",gxold:"O9972SaidaItemOculosLongeOEEixo",gxvar:"A9972SaidaItemOculosLongeOEEixo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9972SaidaItemOculosLongeOEEixo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9972SaidaItemOculosLongeOEEixo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSLONGEOEEIXO",gx.O.A9972SaidaItemOculosLongeOEEixo,2,',')},c2v:function(){gx.O.A9972SaidaItemOculosLongeOEEixo=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSLONGEOEEIXO",'.',',')},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCKSAIDAITEMOCULOSDP", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSDP",gxz:"Z9973SaidaItemOculosDP",gxold:"O9973SaidaItemOculosDP",gxvar:"A9973SaidaItemOculosDP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9973SaidaItemOculosDP=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9973SaidaItemOculosDP=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSDP",gx.O.A9973SaidaItemOculosDP,2,',')},c2v:function(){gx.O.A9973SaidaItemOculosDP=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSDP",'.',',')},nac:gx.falseFn};
   GXValidFnc[172]={fld:"TEXTBLOCKSAIDAITEMOCULOSODALTURA", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSODALTURA",gxz:"Z9974SaidaItemOculosODAltura",gxold:"O9974SaidaItemOculosODAltura",gxvar:"A9974SaidaItemOculosODAltura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9974SaidaItemOculosODAltura=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9974SaidaItemOculosODAltura=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSODALTURA",gx.O.A9974SaidaItemOculosODAltura,2,',')},c2v:function(){gx.O.A9974SaidaItemOculosODAltura=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSODALTURA",'.',',')},nac:gx.falseFn};
   GXValidFnc[177]={fld:"TEXTBLOCKSAIDAITEMOCULOSODDNPLONGE", format:0,grid:0};
   GXValidFnc[179]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSODDNPLONGE",gxz:"Z10189SaidaItemOculosODDNPLonge",gxold:"O10189SaidaItemOculosODDNPLonge",gxvar:"A10189SaidaItemOculosODDNPLonge",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10189SaidaItemOculosODDNPLonge=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10189SaidaItemOculosODDNPLonge=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSODDNPLONGE",gx.O.A10189SaidaItemOculosODDNPLonge,2,',')},c2v:function(){gx.O.A10189SaidaItemOculosODDNPLonge=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSODDNPLONGE",'.',',')},nac:gx.falseFn};
   GXValidFnc[182]={fld:"TEXTBLOCKSAIDAITEMOCULOSODDNPPERTO", format:0,grid:0};
   GXValidFnc[184]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSODDNPPERTO",gxz:"Z10190SaidaItemOculosODDNPPerto",gxold:"O10190SaidaItemOculosODDNPPerto",gxvar:"A10190SaidaItemOculosODDNPPerto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10190SaidaItemOculosODDNPPerto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10190SaidaItemOculosODDNPPerto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSODDNPPERTO",gx.O.A10190SaidaItemOculosODDNPPerto,2,',')},c2v:function(){gx.O.A10190SaidaItemOculosODDNPPerto=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSODDNPPERTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[187]={fld:"TEXTBLOCKSAIDAITEMOCULOSOEALTURA", format:0,grid:0};
   GXValidFnc[189]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSOEALTURA",gxz:"Z9976SaidaItemOculosOEAltura",gxold:"O9976SaidaItemOculosOEAltura",gxvar:"A9976SaidaItemOculosOEAltura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9976SaidaItemOculosOEAltura=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9976SaidaItemOculosOEAltura=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSOEALTURA",gx.O.A9976SaidaItemOculosOEAltura,2,',')},c2v:function(){gx.O.A9976SaidaItemOculosOEAltura=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSOEALTURA",'.',',')},nac:gx.falseFn};
   GXValidFnc[192]={fld:"TEXTBLOCKSAIDAITEMOCULOSOEDNPPERTO", format:0,grid:0};
   GXValidFnc[194]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSOEDNPPERTO",gxz:"Z10191SaidaItemOculosOEDNPPerto",gxold:"O10191SaidaItemOculosOEDNPPerto",gxvar:"A10191SaidaItemOculosOEDNPPerto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10191SaidaItemOculosOEDNPPerto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10191SaidaItemOculosOEDNPPerto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSOEDNPPERTO",gx.O.A10191SaidaItemOculosOEDNPPerto,2,',')},c2v:function(){gx.O.A10191SaidaItemOculosOEDNPPerto=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSOEDNPPERTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[197]={fld:"TEXTBLOCKSAIDAITEMOCULOSOEDNPLONGE", format:0,grid:0};
   GXValidFnc[199]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSOEDNPLONGE",gxz:"Z10192SaidaItemOculosOEDNPLonge",gxold:"O10192SaidaItemOculosOEDNPLonge",gxvar:"A10192SaidaItemOculosOEDNPLonge",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10192SaidaItemOculosOEDNPLonge=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10192SaidaItemOculosOEDNPLonge=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMOCULOSOEDNPLONGE",gx.O.A10192SaidaItemOculosOEDNPLonge,2,',')},c2v:function(){gx.O.A10192SaidaItemOculosOEDNPLonge=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMOCULOSOEDNPLONGE",'.',',')},nac:gx.falseFn};
   GXValidFnc[202]={fld:"TEXTBLOCKSAIDAITEMOCULOSTIPOLENTE", format:0,grid:0};
   GXValidFnc[204]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSTIPOLENTE",gxz:"Z9978SaidaItemOculosTipoLente",gxold:"O9978SaidaItemOculosTipoLente",gxvar:"A9978SaidaItemOculosTipoLente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9978SaidaItemOculosTipoLente=Value},v2z:function(Value){gx.O.Z9978SaidaItemOculosTipoLente=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSTIPOLENTE",gx.O.A9978SaidaItemOculosTipoLente,0)},c2v:function(){gx.O.A9978SaidaItemOculosTipoLente=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMOCULOSTIPOLENTE")},nac:gx.falseFn};
   GXValidFnc[207]={fld:"TEXTBLOCKSAIDAITEMOCULOSTRATAMENTO", format:0,grid:0};
   GXValidFnc[209]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSTRATAMENTO",gxz:"Z9979SaidaItemOculosTratamento",gxold:"O9979SaidaItemOculosTratamento",gxvar:"A9979SaidaItemOculosTratamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9979SaidaItemOculosTratamento=Value},v2z:function(Value){gx.O.Z9979SaidaItemOculosTratamento=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSTRATAMENTO",gx.O.A9979SaidaItemOculosTratamento,0)},c2v:function(){gx.O.A9979SaidaItemOculosTratamento=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMOCULOSTRATAMENTO")},nac:gx.falseFn};
   GXValidFnc[212]={fld:"TEXTBLOCKSAIDAITEMOCULOSPREVISAOENTREGA", format:0,grid:0};
   GXValidFnc[214]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSPREVISAOENTREGA",gxz:"Z9980SaidaItemOculosPrevisaoEntrega",gxold:"O9980SaidaItemOculosPrevisaoEntrega",gxvar:"A9980SaidaItemOculosPrevisaoEntrega",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9980SaidaItemOculosPrevisaoEntrega=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9980SaidaItemOculosPrevisaoEntrega=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSPREVISAOENTREGA",gx.O.A9980SaidaItemOculosPrevisaoEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9980SaidaItemOculosPrevisaoEntrega=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SAIDAITEMOCULOSPREVISAOENTREGA")},nac:gx.falseFn};
   this.declareDomainHdlr( 214 , function() {
   });
   GXValidFnc[217]={fld:"TEXTBLOCKSAIDAITEMOCULOSOBSERVACAO", format:0,grid:0};
   GXValidFnc[219]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMOCULOSOBSERVACAO",gxz:"Z9981SaidaItemOculosObservacao",gxold:"O9981SaidaItemOculosObservacao",gxvar:"A9981SaidaItemOculosObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9981SaidaItemOculosObservacao=Value},v2z:function(Value){gx.O.Z9981SaidaItemOculosObservacao=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMOCULOSOBSERVACAO",gx.O.A9981SaidaItemOculosObservacao,0)},c2v:function(){gx.O.A9981SaidaItemOculosObservacao=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMOCULOSOBSERVACAO")},nac:gx.falseFn};
   this.A9947SaidaItemOculosEmpresaId = "" ;
   this.Z9947SaidaItemOculosEmpresaId = "" ;
   this.O9947SaidaItemOculosEmpresaId = "" ;
   this.A9948SaidaItemOculosId = 0 ;
   this.Z9948SaidaItemOculosId = 0 ;
   this.O9948SaidaItemOculosId = 0 ;
   this.A9949SaidaItemOculosSeq = 0 ;
   this.Z9949SaidaItemOculosSeq = 0 ;
   this.O9949SaidaItemOculosSeq = 0 ;
   this.A9951SaidaItemOculosMedicoId = 0 ;
   this.Z9951SaidaItemOculosMedicoId = 0 ;
   this.O9951SaidaItemOculosMedicoId = 0 ;
   this.A9950SaidaItemOculosMedicoEmpId = "" ;
   this.Z9950SaidaItemOculosMedicoEmpId = "" ;
   this.O9950SaidaItemOculosMedicoEmpId = "" ;
   this.A9955SaidaItemOculosPaciente = "" ;
   this.Z9955SaidaItemOculosPaciente = "" ;
   this.O9955SaidaItemOculosPaciente = "" ;
   this.A9956SaidaItemOculosNoReceita = 0 ;
   this.Z9956SaidaItemOculosNoReceita = 0 ;
   this.O9956SaidaItemOculosNoReceita = 0 ;
   this.A9957SaidaItemOculosDataPresc = gx.date.nullDate() ;
   this.Z9957SaidaItemOculosDataPresc = gx.date.nullDate() ;
   this.O9957SaidaItemOculosDataPresc = gx.date.nullDate() ;
   this.A9958SaidaItemOculosSeqArmacao = 0 ;
   this.Z9958SaidaItemOculosSeqArmacao = 0 ;
   this.O9958SaidaItemOculosSeqArmacao = 0 ;
   this.A9959SaidaItemOculosArmacaoEmpId = "" ;
   this.Z9959SaidaItemOculosArmacaoEmpId = "" ;
   this.O9959SaidaItemOculosArmacaoEmpId = "" ;
   this.A9960SaidaItemOculosArmacaoId = 0 ;
   this.Z9960SaidaItemOculosArmacaoId = 0 ;
   this.O9960SaidaItemOculosArmacaoId = 0 ;
   this.A9961SaidaItemOculosLoteCombinacao = "" ;
   this.Z9961SaidaItemOculosLoteCombinacao = "" ;
   this.O9961SaidaItemOculosLoteCombinacao = "" ;
   this.A9962SaidaItemOculosPertoODEsf = 0 ;
   this.Z9962SaidaItemOculosPertoODEsf = 0 ;
   this.O9962SaidaItemOculosPertoODEsf = 0 ;
   this.A9963SaidaItemOculosPertoODCil = 0 ;
   this.Z9963SaidaItemOculosPertoODCil = 0 ;
   this.O9963SaidaItemOculosPertoODCil = 0 ;
   this.A9964SaidaItemOculosPertoODEixo = 0 ;
   this.Z9964SaidaItemOculosPertoODEixo = 0 ;
   this.O9964SaidaItemOculosPertoODEixo = 0 ;
   this.A9983SaidaItemOculosPertoODAdicao = 0 ;
   this.Z9983SaidaItemOculosPertoODAdicao = 0 ;
   this.O9983SaidaItemOculosPertoODAdicao = 0 ;
   this.A9965SaidaItemOculosPertoOEEsf = 0 ;
   this.Z9965SaidaItemOculosPertoOEEsf = 0 ;
   this.O9965SaidaItemOculosPertoOEEsf = 0 ;
   this.A9966SaidaItemOculosPertoOECil = 0 ;
   this.Z9966SaidaItemOculosPertoOECil = 0 ;
   this.O9966SaidaItemOculosPertoOECil = 0 ;
   this.A9967SaidaItemOculosPertoOEEixo = 0 ;
   this.Z9967SaidaItemOculosPertoOEEixo = 0 ;
   this.O9967SaidaItemOculosPertoOEEixo = 0 ;
   this.A9984SaidaItemOculosPertoOEAdicao = 0 ;
   this.Z9984SaidaItemOculosPertoOEAdicao = 0 ;
   this.O9984SaidaItemOculosPertoOEAdicao = 0 ;
   this.A9968SaidaItemOculosLongeODEsf = 0 ;
   this.Z9968SaidaItemOculosLongeODEsf = 0 ;
   this.O9968SaidaItemOculosLongeODEsf = 0 ;
   this.A9969SaidaItemOculosLongeODCil = 0 ;
   this.Z9969SaidaItemOculosLongeODCil = 0 ;
   this.O9969SaidaItemOculosLongeODCil = 0 ;
   this.A9970SaidaItemOculosLongeODEixo = 0 ;
   this.Z9970SaidaItemOculosLongeODEixo = 0 ;
   this.O9970SaidaItemOculosLongeODEixo = 0 ;
   this.A9982SaidaItemOculosLongeOEEsf = 0 ;
   this.Z9982SaidaItemOculosLongeOEEsf = 0 ;
   this.O9982SaidaItemOculosLongeOEEsf = 0 ;
   this.A9971SaidaItemOculosLongeOECil = 0 ;
   this.Z9971SaidaItemOculosLongeOECil = 0 ;
   this.O9971SaidaItemOculosLongeOECil = 0 ;
   this.A9972SaidaItemOculosLongeOEEixo = 0 ;
   this.Z9972SaidaItemOculosLongeOEEixo = 0 ;
   this.O9972SaidaItemOculosLongeOEEixo = 0 ;
   this.A9973SaidaItemOculosDP = 0 ;
   this.Z9973SaidaItemOculosDP = 0 ;
   this.O9973SaidaItemOculosDP = 0 ;
   this.A9974SaidaItemOculosODAltura = 0 ;
   this.Z9974SaidaItemOculosODAltura = 0 ;
   this.O9974SaidaItemOculosODAltura = 0 ;
   this.A10189SaidaItemOculosODDNPLonge = 0 ;
   this.Z10189SaidaItemOculosODDNPLonge = 0 ;
   this.O10189SaidaItemOculosODDNPLonge = 0 ;
   this.A10190SaidaItemOculosODDNPPerto = 0 ;
   this.Z10190SaidaItemOculosODDNPPerto = 0 ;
   this.O10190SaidaItemOculosODDNPPerto = 0 ;
   this.A9976SaidaItemOculosOEAltura = 0 ;
   this.Z9976SaidaItemOculosOEAltura = 0 ;
   this.O9976SaidaItemOculosOEAltura = 0 ;
   this.A10191SaidaItemOculosOEDNPPerto = 0 ;
   this.Z10191SaidaItemOculosOEDNPPerto = 0 ;
   this.O10191SaidaItemOculosOEDNPPerto = 0 ;
   this.A10192SaidaItemOculosOEDNPLonge = 0 ;
   this.Z10192SaidaItemOculosOEDNPLonge = 0 ;
   this.O10192SaidaItemOculosOEDNPLonge = 0 ;
   this.A9978SaidaItemOculosTipoLente = "" ;
   this.Z9978SaidaItemOculosTipoLente = "" ;
   this.O9978SaidaItemOculosTipoLente = "" ;
   this.A9979SaidaItemOculosTratamento = "" ;
   this.Z9979SaidaItemOculosTratamento = "" ;
   this.O9979SaidaItemOculosTratamento = "" ;
   this.A9980SaidaItemOculosPrevisaoEntrega = gx.date.nullDate() ;
   this.Z9980SaidaItemOculosPrevisaoEntrega = gx.date.nullDate() ;
   this.O9980SaidaItemOculosPrevisaoEntrega = gx.date.nullDate() ;
   this.A9981SaidaItemOculosObservacao = "" ;
   this.Z9981SaidaItemOculosObservacao = "" ;
   this.O9981SaidaItemOculosObservacao = "" ;
   this.A9947SaidaItemOculosEmpresaId = "" ;
   this.A9948SaidaItemOculosId = 0 ;
   this.A9949SaidaItemOculosSeq = 0 ;
   this.A9951SaidaItemOculosMedicoId = 0 ;
   this.A9950SaidaItemOculosMedicoEmpId = "" ;
   this.A9955SaidaItemOculosPaciente = "" ;
   this.A9956SaidaItemOculosNoReceita = 0 ;
   this.A9957SaidaItemOculosDataPresc = gx.date.nullDate() ;
   this.A9958SaidaItemOculosSeqArmacao = 0 ;
   this.A9959SaidaItemOculosArmacaoEmpId = "" ;
   this.A9960SaidaItemOculosArmacaoId = 0 ;
   this.A9961SaidaItemOculosLoteCombinacao = "" ;
   this.A9962SaidaItemOculosPertoODEsf = 0 ;
   this.A9963SaidaItemOculosPertoODCil = 0 ;
   this.A9964SaidaItemOculosPertoODEixo = 0 ;
   this.A9983SaidaItemOculosPertoODAdicao = 0 ;
   this.A9965SaidaItemOculosPertoOEEsf = 0 ;
   this.A9966SaidaItemOculosPertoOECil = 0 ;
   this.A9967SaidaItemOculosPertoOEEixo = 0 ;
   this.A9984SaidaItemOculosPertoOEAdicao = 0 ;
   this.A9968SaidaItemOculosLongeODEsf = 0 ;
   this.A9969SaidaItemOculosLongeODCil = 0 ;
   this.A9970SaidaItemOculosLongeODEixo = 0 ;
   this.A9982SaidaItemOculosLongeOEEsf = 0 ;
   this.A9971SaidaItemOculosLongeOECil = 0 ;
   this.A9972SaidaItemOculosLongeOEEixo = 0 ;
   this.A9973SaidaItemOculosDP = 0 ;
   this.A9974SaidaItemOculosODAltura = 0 ;
   this.A10189SaidaItemOculosODDNPLonge = 0 ;
   this.A10190SaidaItemOculosODDNPPerto = 0 ;
   this.A9976SaidaItemOculosOEAltura = 0 ;
   this.A10191SaidaItemOculosOEDNPPerto = 0 ;
   this.A10192SaidaItemOculosOEDNPLonge = 0 ;
   this.A9978SaidaItemOculosTipoLente = "" ;
   this.A9979SaidaItemOculosTratamento = "" ;
   this.A9980SaidaItemOculosPrevisaoEntrega = gx.date.nullDate() ;
   this.A9981SaidaItemOculosObservacao = "" ;
   this.Events = {"e11ek747_client": ["ENTER", true] ,"e12ek747_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidaitemoculos());
