/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:38.6
*/
gx.evt.autoSkip = false;
gx.define('tobssaldocaixabanco', false, function () {
   this.ServerClass =  "tobssaldocaixabanco" ;
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
      this.AV12CaixaBancoId=gx.fn.getIntegerValue("vCAIXABANCOID",'.') ;
      this.AV10CaixaBancoData=gx.fn.getDateValue("vCAIXABANCODATA") ;
      this.AV9BancoEmpresaId=gx.fn.getControlValue("vBANCOEMPRESAID") ;
      this.AV11CaixaBancoEmpresaId=gx.fn.getControlValue("vCAIXABANCOEMPRESAID") ;
      this.AV31DataAux=gx.fn.getDateValue("vDATAAUX") ;
      this.AV29UltimoDiaMes=gx.fn.getIntegerValue("vULTIMODIAMES",'.') ;
      this.AV23SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV30UltimoDiaMesAux=gx.fn.getIntegerValue("vULTIMODIAMESAUX",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A1037ContaContabilCxBcoEmpresaId=gx.fn.getControlValue("CONTACONTABILCXBCOEMPRESAID") ;
      this.AV33Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV32Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV26Nao=gx.fn.getControlValue("vNAO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Caixabancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOID");
         this.AnyError  = 0;
         if ( (0==this.A1015CaixaBancoId) )
         {
            try {
               gxballoon.setError("Informe o Código do Banco");
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
   this.Valid_Caixabancoempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Caixabancoempresaid",["gx.O.A1014CaixaBancoEmpresaId", "gx.O.A1015CaixaBancoId", "gx.O.A1017CaixaBancoDescricao", "gx.O.A1037ContaContabilCxBcoEmpresaId", "gx.O.A1038ContaContabilCxBcoId"],["A1017CaixaBancoDescricao", "A1037ContaContabilCxBcoEmpresaId", "A1038ContaContabilCxBcoId"]);
      return true;
   }
   this.Valid_Obssaldocaixabancodata=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obssaldocaixabancodata",['gx.date.urlDate(gx.O.A9760ObsSaldoCaixaBancoData,"DMY4")', 'gx.date.urlDate(gx.O.AV31DataAux,"DMY4")', "gx.O.AV29UltimoDiaMes", "gx.O.AV30UltimoDiaMesAux"],["AV31DataAux", "AV30UltimoDiaMesAux", "AV29UltimoDiaMes"]);
      return true;
   }
   this.Valid_Obssaldocaixabancoobs=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OBSSALDOCAIXABANCOOBS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12dx2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13dx2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14dx2_client=function()
   {
      this.executeServerEvent("OBSSALDOCAIXABANCODATA.ISVALID", true, null, false, true);
   };
   this.e15dx722_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16dx722_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,19,22,24,27,29,32,35,37,40,42,45,48,50,51,52,56,59,61,63,72,73,74,76,78];
   this.GXLastCtrlId =78;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCKCAIXABANCOID2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancoid,isvalid:null,rgrid:[],fld:"CAIXABANCOID",gxz:"Z1015CaixaBancoId",gxold:"O1015CaixaBancoId",gxvar:"A1015CaixaBancoId",ucs:[],op:[17],ip:[17],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1015CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1015CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CAIXABANCOID",gx.O.A1015CaixaBancoId,0)},c2v:function(){gx.O.A1015CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CAIXABANCOID",'.')},nac:function(){return !(0==this.AV12CaixaBancoId)}};
   GXValidFnc[18]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCODESCRICAO",gxz:"Z1017CaixaBancoDescricao",gxold:"O1017CaixaBancoDescricao",gxvar:"A1017CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1017CaixaBancoDescricao=Value},v2z:function(Value){gx.O.Z1017CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("CAIXABANCODESCRICAO",gx.O.A1017CaixaBancoDescricao,0)},c2v:function(){gx.O.A1017CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caixabancoempresaid,isvalid:null,rgrid:[],fld:"CAIXABANCOEMPRESAID",gxz:"Z1014CaixaBancoEmpresaId",gxold:"O1014CaixaBancoEmpresaId",gxvar:"A1014CaixaBancoEmpresaId",ucs:[],op:[24,18],ip:[24,18,17,19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1014CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.Z1014CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("CAIXABANCOEMPRESAID",gx.O.A1014CaixaBancoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1014CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("CAIXABANCOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCKCAIXABANCOID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILCXBCOID",gxz:"Z1038ContaContabilCxBcoId",gxold:"O1038ContaContabilCxBcoId",gxvar:"A1038ContaContabilCxBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1038ContaContabilCxBcoId=Value},v2z:function(Value){gx.O.Z1038ContaContabilCxBcoId=Value},v2c:function(){gx.fn.setControlValue("CONTACONTABILCXBCOID",gx.O.A1038ContaContabilCxBcoId,0)},c2v:function(){gx.O.A1038ContaContabilCxBcoId=this.val()},val:function(){return gx.fn.getControlValue("CONTACONTABILCXBCOID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKOBSSALDOCAIXABANCODATA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obssaldocaixabancodata,isvalid:'e14dx2_client',rgrid:[],fld:"OBSSALDOCAIXABANCODATA",gxz:"Z9760ObsSaldoCaixaBancoData",gxold:"O9760ObsSaldoCaixaBancoData",gxvar:"A9760ObsSaldoCaixaBancoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9760ObsSaldoCaixaBancoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9760ObsSaldoCaixaBancoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OBSSALDOCAIXABANCODATA",gx.O.A9760ObsSaldoCaixaBancoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9760ObsSaldoCaixaBancoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("OBSSALDOCAIXABANCODATA")},nac:function(){return !(new gx.date.gxdate("").compare(this.AV10CaixaBancoData)==0)}};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"TABLE7",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCKCAIXABANCOID3", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOCXABCOVALOR",gxz:"ZV28SaldoCxaBcoValor",gxold:"OV28SaldoCxaBcoValor",gxvar:"AV28SaldoCxaBcoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28SaldoCxaBcoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV28SaldoCxaBcoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOCXABCOVALOR",gx.O.AV28SaldoCxaBcoValor,2,',')},c2v:function(){gx.O.AV28SaldoCxaBcoValor=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOCXABCOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCKCAIXABANCOID4", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOCONTASALDOATUAL",gxz:"ZV27SaldoContaSaldoAtual",gxold:"OV27SaldoContaSaldoAtual",gxvar:"AV27SaldoContaSaldoAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27SaldoContaSaldoAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV27SaldoContaSaldoAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOCONTASALDOATUAL",gx.O.AV27SaldoContaSaldoAtual,2,',')},c2v:function(){gx.O.AV27SaldoContaSaldoAtual=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOCONTASALDOATUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE6",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCKOBSSALDOCAIXABANCOOBS", format:0,grid:0};
   GXValidFnc[50]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[51]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Obssaldocaixabancoobs,isvalid:null,rgrid:[],fld:"OBSSALDOCAIXABANCOOBS",gxz:"Z9761ObsSaldoCaixaBancoObs",gxold:"O9761ObsSaldoCaixaBancoObs",gxvar:"A9761ObsSaldoCaixaBancoObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9761ObsSaldoCaixaBancoObs=Value},v2z:function(Value){gx.O.Z9761ObsSaldoCaixaBancoObs=Value},v2c:function(){gx.fn.setControlValue("OBSSALDOCAIXABANCOOBS",gx.O.A9761ObsSaldoCaixaBancoObs,0)},c2v:function(){gx.O.A9761ObsSaldoCaixaBancoObs=this.val()},val:function(){return gx.fn.getControlValue("OBSSALDOCAIXABANCOOBS")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   GXValidFnc[59]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBSSALDOCAIXABANCOUSUARIOALT",gxz:"Z9762ObsSaldoCaixaBancoUsuarioAlt",gxold:"O9762ObsSaldoCaixaBancoUsuarioAlt",gxvar:"A9762ObsSaldoCaixaBancoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9762ObsSaldoCaixaBancoUsuarioAlt=Value},v2z:function(Value){gx.O.Z9762ObsSaldoCaixaBancoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("OBSSALDOCAIXABANCOUSUARIOALT",gx.O.A9762ObsSaldoCaixaBancoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9762ObsSaldoCaixaBancoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("OBSSALDOCAIXABANCOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[63]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBSSALDOCAIXABANCODATAHORAALT",gxz:"Z9763ObsSaldoCaixaBancoDataHoraAlt",gxold:"O9763ObsSaldoCaixaBancoDataHoraAlt",gxvar:"A9763ObsSaldoCaixaBancoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9763ObsSaldoCaixaBancoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9763ObsSaldoCaixaBancoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OBSSALDOCAIXABANCODATAHORAALT",gx.O.A9763ObsSaldoCaixaBancoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9763ObsSaldoCaixaBancoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OBSSALDOCAIXABANCODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[72]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV8AcessoSistemaSequencia",gxold:"OV8AcessoSistemaSequencia",gxvar:"AV8AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV8AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV8AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV13ChamaOnBlurMascara",gxold:"OV13ChamaOnBlurMascara",gxvar:"AV13ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV13ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV13ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV13ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[74]={fld:"JSJSON", format:2,grid:0};
   GXValidFnc[76]={fld:"BTNHELP",grid:0};
   GXValidFnc[78]={fld:"PROMPT_1015",grid:722};
   this.A1015CaixaBancoId = 0 ;
   this.Z1015CaixaBancoId = 0 ;
   this.O1015CaixaBancoId = 0 ;
   this.A1017CaixaBancoDescricao = "" ;
   this.Z1017CaixaBancoDescricao = "" ;
   this.O1017CaixaBancoDescricao = "" ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.Z1014CaixaBancoEmpresaId = "" ;
   this.O1014CaixaBancoEmpresaId = "" ;
   this.A1038ContaContabilCxBcoId = "" ;
   this.Z1038ContaContabilCxBcoId = "" ;
   this.O1038ContaContabilCxBcoId = "" ;
   this.A9760ObsSaldoCaixaBancoData = gx.date.nullDate() ;
   this.Z9760ObsSaldoCaixaBancoData = gx.date.nullDate() ;
   this.O9760ObsSaldoCaixaBancoData = gx.date.nullDate() ;
   this.AV28SaldoCxaBcoValor = 0 ;
   this.ZV28SaldoCxaBcoValor = 0 ;
   this.OV28SaldoCxaBcoValor = 0 ;
   this.AV27SaldoContaSaldoAtual = 0 ;
   this.ZV27SaldoContaSaldoAtual = 0 ;
   this.OV27SaldoContaSaldoAtual = 0 ;
   this.A9761ObsSaldoCaixaBancoObs = "" ;
   this.Z9761ObsSaldoCaixaBancoObs = "" ;
   this.O9761ObsSaldoCaixaBancoObs = "" ;
   this.A9762ObsSaldoCaixaBancoUsuarioAlt = "" ;
   this.Z9762ObsSaldoCaixaBancoUsuarioAlt = "" ;
   this.O9762ObsSaldoCaixaBancoUsuarioAlt = "" ;
   this.A9763ObsSaldoCaixaBancoDataHoraAlt = gx.date.nullDate() ;
   this.Z9763ObsSaldoCaixaBancoDataHoraAlt = gx.date.nullDate() ;
   this.O9763ObsSaldoCaixaBancoDataHoraAlt = gx.date.nullDate() ;
   this.AV8AcessoSistemaSequencia = 0 ;
   this.ZV8AcessoSistemaSequencia = 0 ;
   this.OV8AcessoSistemaSequencia = 0 ;
   this.AV13ChamaOnBlurMascara = "" ;
   this.ZV13ChamaOnBlurMascara = "" ;
   this.OV13ChamaOnBlurMascara = "" ;
   this.AV7UsrCod = "" ;
   this.AV15EmpresaLogadaId = "" ;
   this.AV22Sistema = "" ;
   this.AV32Pgmname = "" ;
   this.AV33Pgmdesc = "" ;
   this.AV20MsgErro = "" ;
   this.AV8AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV18Logon = {} ;
   this.AV24Tabela = "" ;
   this.AV16EmpresaPadrao = "" ;
   this.AV11CaixaBancoEmpresaId = "" ;
   this.AV14DebCre = "" ;
   this.AV17Entrada = [ ] ;
   this.AV21Saida = [ ] ;
   this.AV26Nao = "" ;
   this.AV9BancoEmpresaId = "" ;
   this.AV12CaixaBancoId = 0 ;
   this.AV10CaixaBancoData = gx.date.nullDate() ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A9760ObsSaldoCaixaBancoData = gx.date.nullDate() ;
   this.AV31DataAux = gx.date.nullDate() ;
   this.AV29UltimoDiaMes = 0 ;
   this.AV27SaldoContaSaldoAtual = 0 ;
   this.AV28SaldoCxaBcoValor = 0 ;
   this.AV23SnAlterou = "" ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A1038ContaContabilCxBcoId = "" ;
   this.A9761ObsSaldoCaixaBancoObs = "" ;
   this.A9762ObsSaldoCaixaBancoUsuarioAlt = "" ;
   this.A9763ObsSaldoCaixaBancoDataHoraAlt = gx.date.nullDate() ;
   this.A1037ContaContabilCxBcoEmpresaId = "" ;
   this.AV30UltimoDiaMesAux = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12dx2_client": ["'FECHAR'", true] ,"e13dx2_client": ["AFTER TRN", true] ,"e14dx2_client": ["OBSSALDOCAIXABANCODATA.ISVALID", true] ,"e15dx722_client": ["ENTER", true] ,"e16dx722_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV9BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV10CaixaBancoData',fld:'vCAIXABANCODATA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV8AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV8AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["OBSSALDOCAIXABANCODATA.ISVALID"] = [[{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'}],[{av:'AV28SaldoCxaBcoValor',fld:'vSALDOCXABCOVALOR'},{av:'AV27SaldoContaSaldoAtual',fld:'vSALDOCONTASALDOATUAL'}]];
   this.setPrompt("PROMPT_1015", [17]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12CaixaBancoId", "vCAIXABANCOID", 0, "int");
   this.setVCMap("AV10CaixaBancoData", "vCAIXABANCODATA", 0, "date");
   this.setVCMap("AV9BancoEmpresaId", "vBANCOEMPRESAID", 0, "char");
   this.setVCMap("AV11CaixaBancoEmpresaId", "vCAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("AV31DataAux", "vDATAAUX", 0, "date");
   this.setVCMap("AV29UltimoDiaMes", "vULTIMODIAMES", 0, "int");
   this.setVCMap("AV23SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV30UltimoDiaMesAux", "vULTIMODIAMESAUX", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A1037ContaContabilCxBcoEmpresaId", "CONTACONTABILCXBCOEMPRESAID", 0, "char");
   this.setVCMap("AV33Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV26Nao", "vNAO", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 722 ]= ["O9761ObsSaldoCaixaBancoObs"] ;
});
gx.setParentObj(new tobssaldocaixabanco());
