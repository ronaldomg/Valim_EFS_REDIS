/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:46:51.58
*/
gx.evt.autoSkip = false;
gx.define('tlancamentocaixa', false, function () {
   this.ServerClass =  "tlancamentocaixa" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
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
      this.AV34CaixaTrabalhoNumeroLoja=gx.fn.getIntegerValue("vCAIXATRABALHONUMEROLOJA",'.') ;
      this.AV35CaixaTrabalhoSequenciaECF=gx.fn.getIntegerValue("vCAIXATRABALHOSEQUENCIAECF",'.') ;
      this.AV18LancamentoCaixaId=gx.fn.getIntegerValue("vLANCAMENTOCAIXAID",'.') ;
      this.AV19CaixaTrabalhoId=gx.fn.getIntegerValue("vCAIXATRABALHOID",'.') ;
      this.AV32Aux=gx.fn.getDateTimeValue("vAUX") ;
      this.AV20CaixaTrabalhoEmpresaId=gx.fn.getControlValue("vCAIXATRABALHOEMPRESAID") ;
      this.A3442CaixaTrabalhoEmpresaId=gx.fn.getControlValue("CAIXATRABALHOEMPRESAID") ;
      this.AV21HistoricoFcxEmpresaID=gx.fn.getControlValue("vHISTORICOFCXEMPRESAID") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV38SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID") ;
      this.A4353LancamentoCaixaSaidaEmpId=gx.fn.getControlValue("LANCAMENTOCAIXASAIDAEMPID") ;
      this.AV23SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV30sim=gx.fn.getControlValue("vSIM") ;
      this.AV31nao=gx.fn.getControlValue("vNAO") ;
      this.AV37Tipo=gx.fn.getControlValue("vTIPO") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV33HoraStr=gx.fn.getControlValue("vHORASTR") ;
      this.A3543HistoricoFcxTipo=gx.fn.getControlValue("HISTORICOFCXTIPO") ;
      this.A4965LancamentoCaixaSaidaTipo=gx.fn.getControlValue("LANCAMENTOCAIXASAIDATIPO") ;
      this.AV51Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV50Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Caixatrabalhonumeroloja=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHONUMEROLOJA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixatrabalhosequenciaecf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXATRABALHOSEQUENCIAECF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caixatrabalhoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Caixatrabalhoid",["gx.O.A3442CaixaTrabalhoEmpresaId", "gx.O.A5776CaixaTrabalhoNumeroLoja", "gx.O.A5777CaixaTrabalhoSequenciaECF", "gx.O.A3443CaixaTrabalhoId"],[]);
      return true;
   }
   this.Valid_Lancamentocaixaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCAIXAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocaixadata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCAIXADATA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A3625LancamentoCaixaData)==0) )
         {
            try {
               gxballoon.setError("Informe a Data");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocaixahora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCAIXAHORA");
         this.AnyError  = 0;
         if ( (""==this.A3626LancamentoCaixaHora) )
         {
            try {
               gxballoon.setError("Informe a Hora");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicofcxid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOFCXID");
         this.AnyError  = 0;
         if ( (0==this.A3550HistoricoFcxId) )
         {
            try {
               gxballoon.setError("Informe o Histórico");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocaixavalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCAIXAVALOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocaixaobservacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCAIXAOBSERVACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pessoaid",["gx.O.AV22EmpresaPessoasEmpresaId", "gx.O.A69PessoaId", "gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A71PessoaFantasia"],["A227EmpresaPessoasEmpresaId", "A71PessoaFantasia"]);
      return true;
   }
   this.Valid_Lancamentocaixasaidaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentocaixasaidaid",["gx.O.AV38SaidaEmpresaId", "gx.O.A4354LancamentoCaixaSaidaId", "gx.O.A4353LancamentoCaixaSaidaEmpId", "gx.O.A4965LancamentoCaixaSaidaTipo"],["A4353LancamentoCaixaSaidaEmpId", "A4965LancamentoCaixaSaidaTipo"]);
      return true;
   }
   this.Valid_Historicofcxempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Historicofcxempresaid",["gx.O.A3549HistoricoFcxEmpresaID", "gx.O.A3550HistoricoFcxId", "gx.num.urlDecimal(gx.O.A3627LancamentoCaixaValor,\'.\',\',\')", "gx.O.A3543HistoricoFcxTipo", "gx.O.A3540HistoricoFcxDescricao"],["A3540HistoricoFcxDescricao", "A3543HistoricoFcxTipo"]);
      return true;
   }
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e126v2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136v2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146v483_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156v483_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,46,49,51,54,56,59,61,62,65,67,70,73,75,77,86,87,88,89,90,91,92,93,95,97,98,99];
   this.GXLastCtrlId =99;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixatrabalhonumeroloja,isvalid:null,rgrid:[],fld:"CAIXATRABALHONUMEROLOJA",gxz:"Z5776CaixaTrabalhoNumeroLoja",gxold:"O5776CaixaTrabalhoNumeroLoja",gxvar:"A5776CaixaTrabalhoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CAIXATRABALHONUMEROLOJA",gx.O.A5776CaixaTrabalhoNumeroLoja,0)},c2v:function(){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CAIXATRABALHONUMEROLOJA",'.')},nac:function(){return !(0==this.AV34CaixaTrabalhoNumeroLoja)}};
   GXValidFnc[17]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixatrabalhosequenciaecf,isvalid:null,rgrid:[],fld:"CAIXATRABALHOSEQUENCIAECF",gxz:"Z5777CaixaTrabalhoSequenciaECF",gxold:"O5777CaixaTrabalhoSequenciaECF",gxvar:"A5777CaixaTrabalhoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CAIXATRABALHOSEQUENCIAECF",gx.O.A5777CaixaTrabalhoSequenciaECF,0)},c2v:function(){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CAIXATRABALHOSEQUENCIAECF",'.')},nac:function(){return !(0==this.AV35CaixaTrabalhoSequenciaECF)}};
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Caixatrabalhoid,isvalid:null,rgrid:[],fld:"CAIXATRABALHOID",gxz:"Z3443CaixaTrabalhoId",gxold:"O3443CaixaTrabalhoId",gxvar:"A3443CaixaTrabalhoId",ucs:[],op:[],ip:[24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3443CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3443CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CAIXATRABALHOID",gx.O.A3443CaixaTrabalhoId,0)},c2v:function(){gx.O.A3443CaixaTrabalhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CAIXATRABALHOID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocaixaid,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXAID",gxz:"Z3632LancamentoCaixaId",gxold:"O3632LancamentoCaixaId",gxvar:"A3632LancamentoCaixaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3632LancamentoCaixaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3632LancamentoCaixaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCAIXAID",gx.O.A3632LancamentoCaixaId,0)},c2v:function(){gx.O.A3632LancamentoCaixaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOCAIXAID",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocaixadata,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXADATA",gxz:"Z3625LancamentoCaixaData",gxold:"O3625LancamentoCaixaData",gxvar:"A3625LancamentoCaixaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3625LancamentoCaixaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3625LancamentoCaixaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCAIXADATA",gx.O.A3625LancamentoCaixaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3625LancamentoCaixaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("LANCAMENTOCAIXADATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocaixahora,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXAHORA",gxz:"Z3626LancamentoCaixaHora",gxold:"O3626LancamentoCaixaHora",gxvar:"A3626LancamentoCaixaHora",ucs:[],op:[40],ip:[40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3626LancamentoCaixaHora=Value},v2z:function(Value){gx.O.Z3626LancamentoCaixaHora=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOCAIXAHORA",gx.O.A3626LancamentoCaixaHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3626LancamentoCaixaHora=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOCAIXAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxid,isvalid:null,rgrid:[],fld:"HISTORICOFCXID",gxz:"Z3550HistoricoFcxId",gxold:"O3550HistoricoFcxId",gxvar:"A3550HistoricoFcxId",ucs:[],op:[45],ip:[45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3550HistoricoFcxId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3550HistoricoFcxId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOFCXID",gx.O.A3550HistoricoFcxId,0)},c2v:function(){gx.O.A3550HistoricoFcxId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOFCXID",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXDESCRICAO",gxz:"Z3540HistoricoFcxDescricao",gxold:"O3540HistoricoFcxDescricao",gxvar:"A3540HistoricoFcxDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3540HistoricoFcxDescricao=Value},v2z:function(Value){gx.O.Z3540HistoricoFcxDescricao=Value},v2c:function(){gx.fn.setControlValue("HISTORICOFCXDESCRICAO",gx.O.A3540HistoricoFcxDescricao,0)},c2v:function(){gx.O.A3540HistoricoFcxDescricao=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocaixavalor,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXAVALOR",gxz:"Z3627LancamentoCaixaValor",gxold:"O3627LancamentoCaixaValor",gxvar:"A3627LancamentoCaixaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3627LancamentoCaixaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3627LancamentoCaixaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LANCAMENTOCAIXAVALOR",gx.O.A3627LancamentoCaixaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3627LancamentoCaixaValor=this.val()},val:function(){return gx.fn.getDecimalValue("LANCAMENTOCAIXAVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocaixaobservacao,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXAOBSERVACAO",gxz:"Z3628LancamentoCaixaObservacao",gxold:"O3628LancamentoCaixaObservacao",gxvar:"A3628LancamentoCaixaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3628LancamentoCaixaObservacao=Value},v2z:function(Value){gx.O.Z3628LancamentoCaixaObservacao=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOCAIXAOBSERVACAO",gx.O.A3628LancamentoCaixaObservacao,0)},c2v:function(){gx.O.A3628LancamentoCaixaObservacao=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOCAIXAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[62],ip:[62,61,89],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAID",gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("PESSOAFANTASIA",gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("PESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocaixasaidaid,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXASAIDAID",gxz:"Z4354LancamentoCaixaSaidaId",gxold:"O4354LancamentoCaixaSaidaId",gxvar:"A4354LancamentoCaixaSaidaId",ucs:[],op:[],ip:[67],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4354LancamentoCaixaSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4354LancamentoCaixaSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCAIXASAIDAID",gx.O.A4354LancamentoCaixaSaidaId,0)},c2v:function(){gx.O.A4354LancamentoCaixaSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOCAIXASAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TABLE4",grid:0};
   GXValidFnc[73]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXAUSUARIO",gxz:"Z3631LancamentoCaixaUsuario",gxold:"O3631LancamentoCaixaUsuario",gxvar:"A3631LancamentoCaixaUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3631LancamentoCaixaUsuario=Value},v2z:function(Value){gx.O.Z3631LancamentoCaixaUsuario=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOCAIXAUSUARIO",gx.O.A3631LancamentoCaixaUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3631LancamentoCaixaUsuario=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOCAIXAUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[77]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXADATAHORAALT",gxz:"Z3630LancamentoCaixaDataHoraAlt",gxold:"O3630LancamentoCaixaDataHoraAlt",gxvar:"A3630LancamentoCaixaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3630LancamentoCaixaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3630LancamentoCaixaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCAIXADATAHORAALT",gx.O.A3630LancamentoCaixaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3630LancamentoCaixaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LANCAMENTOCAIXADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[86]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"JS", format:2,grid:0};
   GXValidFnc[88]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Historicofcxempresaid,isvalid:null,rgrid:[],fld:"HISTORICOFCXEMPRESAID",gxz:"Z3549HistoricoFcxEmpresaID",gxold:"O3549HistoricoFcxEmpresaID",gxvar:"A3549HistoricoFcxEmpresaID",ucs:[],op:[51,46],ip:[46,51,45,88],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3549HistoricoFcxEmpresaID=Value},v2z:function(Value){gx.O.Z3549HistoricoFcxEmpresaID=Value},v2c:function(){gx.fn.setControlValue("HISTORICOFCXEMPRESAID",gx.O.A3549HistoricoFcxEmpresaID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3549HistoricoFcxEmpresaID=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOFCXEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 88 , function() {
   });
   GXValidFnc[89]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV22EmpresaPessoasEmpresaId",gxold:"OV22EmpresaPessoasEmpresaId",gxvar:"AV22EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV22EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV22EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV22EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOOOUT",gxz:"ZV40CooOut",gxold:"OV40CooOut",gxvar:"AV40CooOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40CooOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40CooOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOOOUT",gx.O.AV40CooOut,0)},c2v:function(){gx.O.AV40CooOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOOOUT",'.')},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTOOUT",gxz:"ZV42DocumentoOut",gxold:"OV42DocumentoOut",gxvar:"AV42DocumentoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42DocumentoOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42DocumentoOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTOOUT",gx.O.AV42DocumentoOut,0)},c2v:function(){gx.O.AV42DocumentoOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDOCUMENTOOUT",'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERIEOUT",gxz:"ZV41SerieOut",gxold:"OV41SerieOut",gxvar:"AV41SerieOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41SerieOut=Value},v2z:function(Value){gx.O.ZV41SerieOut=Value},v2c:function(){gx.fn.setControlValue("vSERIEOUT",gx.O.AV41SerieOut,0)},c2v:function(){gx.O.AV41SerieOut=this.val()},val:function(){return gx.fn.getControlValue("vSERIEOUT")},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vECFOUT",gxz:"ZV39ECFOut",gxold:"OV39ECFOut",gxvar:"AV39ECFOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ECFOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39ECFOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vECFOUT",gx.O.AV39ECFOut,0)},c2v:function(){gx.O.AV39ECFOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vECFOUT",'.')},nac:gx.falseFn};
   GXValidFnc[95]={fld:"BTNHELP",grid:0};
   GXValidFnc[97]={fld:"PROMPT_3550",grid:483};
   GXValidFnc[98]={fld:"PROMPT_69",grid:483};
   GXValidFnc[99]={fld:"PROMPT_4354",grid:483};
   this.A5776CaixaTrabalhoNumeroLoja = 0 ;
   this.Z5776CaixaTrabalhoNumeroLoja = 0 ;
   this.O5776CaixaTrabalhoNumeroLoja = 0 ;
   this.A5777CaixaTrabalhoSequenciaECF = 0 ;
   this.Z5777CaixaTrabalhoSequenciaECF = 0 ;
   this.O5777CaixaTrabalhoSequenciaECF = 0 ;
   this.A3443CaixaTrabalhoId = 0 ;
   this.Z3443CaixaTrabalhoId = 0 ;
   this.O3443CaixaTrabalhoId = 0 ;
   this.A3632LancamentoCaixaId = 0 ;
   this.Z3632LancamentoCaixaId = 0 ;
   this.O3632LancamentoCaixaId = 0 ;
   this.A3625LancamentoCaixaData = gx.date.nullDate() ;
   this.Z3625LancamentoCaixaData = gx.date.nullDate() ;
   this.O3625LancamentoCaixaData = gx.date.nullDate() ;
   this.A3626LancamentoCaixaHora = "" ;
   this.Z3626LancamentoCaixaHora = "" ;
   this.O3626LancamentoCaixaHora = "" ;
   this.A3550HistoricoFcxId = 0 ;
   this.Z3550HistoricoFcxId = 0 ;
   this.O3550HistoricoFcxId = 0 ;
   this.A3540HistoricoFcxDescricao = "" ;
   this.Z3540HistoricoFcxDescricao = "" ;
   this.O3540HistoricoFcxDescricao = "" ;
   this.A3627LancamentoCaixaValor = 0 ;
   this.Z3627LancamentoCaixaValor = 0 ;
   this.O3627LancamentoCaixaValor = 0 ;
   this.A3628LancamentoCaixaObservacao = "" ;
   this.Z3628LancamentoCaixaObservacao = "" ;
   this.O3628LancamentoCaixaObservacao = "" ;
   this.A69PessoaId = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.A4354LancamentoCaixaSaidaId = 0 ;
   this.Z4354LancamentoCaixaSaidaId = 0 ;
   this.O4354LancamentoCaixaSaidaId = 0 ;
   this.A3631LancamentoCaixaUsuario = "" ;
   this.Z3631LancamentoCaixaUsuario = "" ;
   this.O3631LancamentoCaixaUsuario = "" ;
   this.A3630LancamentoCaixaDataHoraAlt = gx.date.nullDate() ;
   this.Z3630LancamentoCaixaDataHoraAlt = gx.date.nullDate() ;
   this.O3630LancamentoCaixaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A3549HistoricoFcxEmpresaID = "" ;
   this.Z3549HistoricoFcxEmpresaID = "" ;
   this.O3549HistoricoFcxEmpresaID = "" ;
   this.AV22EmpresaPessoasEmpresaId = "" ;
   this.ZV22EmpresaPessoasEmpresaId = "" ;
   this.OV22EmpresaPessoasEmpresaId = "" ;
   this.AV40CooOut = 0 ;
   this.ZV40CooOut = 0 ;
   this.OV40CooOut = 0 ;
   this.AV42DocumentoOut = 0 ;
   this.ZV42DocumentoOut = 0 ;
   this.OV42DocumentoOut = 0 ;
   this.AV41SerieOut = "" ;
   this.ZV41SerieOut = "" ;
   this.OV41SerieOut = "" ;
   this.AV39ECFOut = 0 ;
   this.ZV39ECFOut = 0 ;
   this.OV39ECFOut = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV50Pgmname = "" ;
   this.AV51Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV20CaixaTrabalhoEmpresaId = "" ;
   this.AV21HistoricoFcxEmpresaID = "" ;
   this.AV22EmpresaPessoasEmpresaId = "" ;
   this.AV38SaidaEmpresaId = "" ;
   this.AV36SnCaixaPreVenda = "" ;
   this.AV23SnAlterou = "" ;
   this.AV34CaixaTrabalhoNumeroLoja = 0 ;
   this.AV35CaixaTrabalhoSequenciaECF = 0 ;
   this.AV19CaixaTrabalhoId = 0 ;
   this.AV18LancamentoCaixaId = 0 ;
   this.A3442CaixaTrabalhoEmpresaId = "" ;
   this.A5776CaixaTrabalhoNumeroLoja = 0 ;
   this.A5777CaixaTrabalhoSequenciaECF = 0 ;
   this.A3443CaixaTrabalhoId = 0 ;
   this.A3632LancamentoCaixaId = 0 ;
   this.AV32Aux = gx.date.nullDate() ;
   this.A3549HistoricoFcxEmpresaID = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A4353LancamentoCaixaSaidaEmpId = "" ;
   this.A3631LancamentoCaixaUsuario = "" ;
   this.A3630LancamentoCaixaDataHoraAlt = gx.date.nullDate() ;
   this.AV30sim = "" ;
   this.AV31nao = "" ;
   this.AV37Tipo = "" ;
   this.Gx_BScreen = 0 ;
   this.A3625LancamentoCaixaData = gx.date.nullDate() ;
   this.A3626LancamentoCaixaHora = "" ;
   this.A3550HistoricoFcxId = 0 ;
   this.A3540HistoricoFcxDescricao = "" ;
   this.A3543HistoricoFcxTipo = "" ;
   this.A3627LancamentoCaixaValor = 0 ;
   this.A3628LancamentoCaixaObservacao = "" ;
   this.A69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A4354LancamentoCaixaSaidaId = 0 ;
   this.A4965LancamentoCaixaSaidaTipo = "" ;
   this.AV33HoraStr = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126v2_client": ["'FECHAR'", true] ,"e136v2_client": ["AFTER TRN", true] ,"e146v483_client": ["ENTER", true] ,"e156v483_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV34CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV35CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV19CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV18LancamentoCaixaId',fld:'vLANCAMENTOCAIXAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV34CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA'},{av:'AV35CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF'},{av:'AV19CaixaTrabalhoId',fld:'vCAIXATRABALHOID'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_3550", [45]);
   this.setPrompt("PROMPT_69", [61]);
   this.setPrompt("PROMPT_4354", [67]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV34CaixaTrabalhoNumeroLoja", "vCAIXATRABALHONUMEROLOJA", 0, "int");
   this.setVCMap("AV35CaixaTrabalhoSequenciaECF", "vCAIXATRABALHOSEQUENCIAECF", 0, "int");
   this.setVCMap("AV18LancamentoCaixaId", "vLANCAMENTOCAIXAID", 0, "int");
   this.setVCMap("AV19CaixaTrabalhoId", "vCAIXATRABALHOID", 0, "int");
   this.setVCMap("AV32Aux", "vAUX", 0, "dtime");
   this.setVCMap("AV20CaixaTrabalhoEmpresaId", "vCAIXATRABALHOEMPRESAID", 0, "char");
   this.setVCMap("A3442CaixaTrabalhoEmpresaId", "CAIXATRABALHOEMPRESAID", 0, "char");
   this.setVCMap("AV21HistoricoFcxEmpresaID", "vHISTORICOFCXEMPRESAID", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV38SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("A4353LancamentoCaixaSaidaEmpId", "LANCAMENTOCAIXASAIDAEMPID", 0, "char");
   this.setVCMap("AV23SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV30sim", "vSIM", 0, "char");
   this.setVCMap("AV31nao", "vNAO", 0, "char");
   this.setVCMap("AV37Tipo", "vTIPO", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV33HoraStr", "vHORASTR", 0, "char");
   this.setVCMap("A3543HistoricoFcxTipo", "HISTORICOFCXTIPO", 0, "char");
   this.setVCMap("A4965LancamentoCaixaSaidaTipo", "LANCAMENTOCAIXASAIDATIPO", 0, "char");
   this.setVCMap("AV51Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV50Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 483 ]= ["O4354LancamentoCaixaSaidaId","O69PessoaId","O3628LancamentoCaixaObservacao","O3627LancamentoCaixaValor","O3550HistoricoFcxId","O3626LancamentoCaixaHora","O3625LancamentoCaixaData"] ;
});
gx.setParentObj(new tlancamentocaixa());
