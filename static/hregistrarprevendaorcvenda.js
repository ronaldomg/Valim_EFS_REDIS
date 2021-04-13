/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:26:21.13
*/
gx.evt.autoSkip = false;
gx.define('hregistrarprevendaorcvenda', false, function () {
   this.ServerClass =  "hregistrarprevendaorcvenda" ;
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
      this.AV6SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID") ;
      this.AV5SaidaId=gx.fn.getIntegerValue("vSAIDAID",'.') ;
      this.AV45SaidaDataAux=gx.fn.getDateValue("vSAIDADATAAUX") ;
      this.AV46SaidaVendedorIdAux=gx.fn.getIntegerValue("vSAIDAVENDEDORIDAUX",'.') ;
      this.AV47TipoVenda=gx.fn.getControlValue("vTIPOVENDA") ;
   };
   this.Validv_Vendedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Diversosvendant=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDIVERSOSVENDANT");
         this.AnyError  = 0;
         if ( ! ( this.AV10DiversosVendAnt == "N" || this.AV10DiversosVendAnt == "S" ) )
         {
            try {
               gxballoon.setError("Campo DiversosVendAnt fora do intervalo");
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
   this.Validv_Diversosvendatual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDIVERSOSVENDATUAL");
         this.AnyError  = 0;
         if ( ! ( this.AV13DiversosVendAtual == "N" || this.AV13DiversosVendAtual == "S" ) )
         {
            try {
               gxballoon.setError("Campo DiversosVendAtual fora do intervalo");
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
   this.e111192_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141192_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161192_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,17,18,22,28,29,30,31,32,33,34,37];
   this.GXLastCtrlId =37;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TBDATA",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAVENDA",gxz:"ZV15DataVenda",gxold:"OV15DataVenda",gxvar:"AV15DataVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DataVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15DataVenda=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAVENDA",gx.O.AV15DataVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15DataVenda=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAVENDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 10 , function() {
   });
   GXValidFnc[11]={fld:"TBVENDEDOR",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorid,isvalid:null,rgrid:[],fld:"vVENDEDORID",gxz:"ZV19VendedorId",gxold:"OV19VendedorId",gxvar:"AV19VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19VendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORID",gx.O.AV19VendedorId,0)},c2v:function(){gx.O.AV19VendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV20VendedorNome",gxold:"OV20VendedorNome",gxvar:"AV20VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20VendedorNome=Value},v2z:function(Value){gx.O.ZV20VendedorNome=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV20VendedorNome,0)},c2v:function(){gx.O.AV20VendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TBPRECO",grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNALTERARPRECOS",gxz:"ZV21SnAlterarPrecos",gxold:"OV21SnAlterarPrecos",gxvar:"AV21SnAlterarPrecos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21SnAlterarPrecos=Value},v2z:function(Value){gx.O.ZV21SnAlterarPrecos=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNALTERARPRECOS",gx.O.AV21SnAlterarPrecos,"S")},c2v:function(){gx.O.AV21SnAlterarPrecos=this.val()},val:function(){return gx.fn.getControlValue("vSNALTERARPRECOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATA",gxz:"ZV7SaidaData",gxold:"OV7SaidaData",gxvar:"AV7SaidaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7SaidaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7SaidaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSAIDADATA",gx.O.AV7SaidaData,0)},c2v:function(){gx.O.AV7SaidaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATA")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFILIALEMPID",gxz:"ZV38SaidaFilialEmpId",gxold:"OV38SaidaFilialEmpId",gxvar:"AV38SaidaFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38SaidaFilialEmpId=Value},v2z:function(Value){gx.O.ZV38SaidaFilialEmpId=Value},v2c:function(){gx.fn.setControlValue("vSAIDAFILIALEMPID",gx.O.AV38SaidaFilialEmpId,0)},c2v:function(){gx.O.AV38SaidaFilialEmpId=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAFILIALEMPID")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFILIALID",gxz:"ZV39SaidaFilialId",gxold:"OV39SaidaFilialId",gxvar:"AV39SaidaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39SaidaFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39SaidaFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAFILIALID",gx.O.AV39SaidaFilialId,0)},c2v:function(){gx.O.AV39SaidaFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Diversosvendant,isvalid:null,rgrid:[],fld:"vDIVERSOSVENDANT",gxz:"ZV10DiversosVendAnt",gxold:"OV10DiversosVendAnt",gxvar:"AV10DiversosVendAnt",ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10DiversosVendAnt=Value},v2z:function(Value){gx.O.ZV10DiversosVendAnt=Value},v2c:function(){gx.fn.setControlValue("vDIVERSOSVENDANT",gx.O.AV10DiversosVendAnt,0)},c2v:function(){gx.O.AV10DiversosVendAnt=this.val()},val:function(){return gx.fn.getControlValue("vDIVERSOSVENDANT")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Diversosvendatual,isvalid:null,rgrid:[],fld:"vDIVERSOSVENDATUAL",gxz:"ZV13DiversosVendAtual",gxold:"OV13DiversosVendAtual",gxvar:"AV13DiversosVendAtual",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13DiversosVendAtual=Value},v2z:function(Value){gx.O.ZV13DiversosVendAtual=Value},v2c:function(){gx.fn.setControlValue("vDIVERSOSVENDATUAL",gx.O.AV13DiversosVendAtual,0)},c2v:function(){gx.O.AV13DiversosVendAtual=this.val()},val:function(){return gx.fn.getControlValue("vDIVERSOSVENDATUAL")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPREVENDAANT",gxz:"ZV11TipoPreVendaAnt",gxold:"OV11TipoPreVendaAnt",gxvar:"AV11TipoPreVendaAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11TipoPreVendaAnt=Value},v2z:function(Value){gx.O.ZV11TipoPreVendaAnt=Value},v2c:function(){gx.fn.setControlValue("vTIPOPREVENDAANT",gx.O.AV11TipoPreVendaAnt,0)},c2v:function(){gx.O.AV11TipoPreVendaAnt=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPREVENDAANT")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORANT",gxz:"ZV35VendedorAnt",gxold:"OV35VendedorAnt",gxvar:"AV35VendedorAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35VendedorAnt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35VendedorAnt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORANT",gx.O.AV35VendedorAnt,0)},c2v:function(){gx.O.AV35VendedorAnt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORANT",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"PROMPT_VENDEDORID",grid:0};
   this.AV15DataVenda = gx.date.nullDate() ;
   this.ZV15DataVenda = gx.date.nullDate() ;
   this.OV15DataVenda = gx.date.nullDate() ;
   this.AV19VendedorId = 0 ;
   this.ZV19VendedorId = 0 ;
   this.OV19VendedorId = 0 ;
   this.AV20VendedorNome = "" ;
   this.ZV20VendedorNome = "" ;
   this.OV20VendedorNome = "" ;
   this.AV21SnAlterarPrecos = "" ;
   this.ZV21SnAlterarPrecos = "" ;
   this.OV21SnAlterarPrecos = "" ;
   this.AV7SaidaData = gx.date.nullDate() ;
   this.ZV7SaidaData = gx.date.nullDate() ;
   this.OV7SaidaData = gx.date.nullDate() ;
   this.AV38SaidaFilialEmpId = "" ;
   this.ZV38SaidaFilialEmpId = "" ;
   this.OV38SaidaFilialEmpId = "" ;
   this.AV39SaidaFilialId = 0 ;
   this.ZV39SaidaFilialId = 0 ;
   this.OV39SaidaFilialId = 0 ;
   this.AV10DiversosVendAnt = "" ;
   this.ZV10DiversosVendAnt = "" ;
   this.OV10DiversosVendAnt = "" ;
   this.AV13DiversosVendAtual = "" ;
   this.ZV13DiversosVendAtual = "" ;
   this.OV13DiversosVendAtual = "" ;
   this.AV11TipoPreVendaAnt = "" ;
   this.ZV11TipoPreVendaAnt = "" ;
   this.OV11TipoPreVendaAnt = "" ;
   this.AV35VendedorAnt = 0 ;
   this.ZV35VendedorAnt = 0 ;
   this.OV35VendedorAnt = 0 ;
   this.AV15DataVenda = gx.date.nullDate() ;
   this.AV19VendedorId = 0 ;
   this.AV20VendedorNome = "" ;
   this.AV21SnAlterarPrecos = "" ;
   this.AV7SaidaData = gx.date.nullDate() ;
   this.AV38SaidaFilialEmpId = "" ;
   this.AV39SaidaFilialId = 0 ;
   this.AV10DiversosVendAnt = "" ;
   this.AV13DiversosVendAtual = "" ;
   this.AV11TipoPreVendaAnt = "" ;
   this.AV35VendedorAnt = 0 ;
   this.AV6SaidaEmpresaId = "" ;
   this.AV5SaidaId = 0 ;
   this.AV45SaidaDataAux = gx.date.nullDate() ;
   this.AV46SaidaVendedorIdAux = 0 ;
   this.AV47TipoVenda = "" ;
   this.A1237VendedorId = 0 ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1148VendedorNome = "" ;
   this.A1223VendedorSNVendedor = "" ;
   this.A6477VendedorAtivo = "" ;
   this.A75UsuarioId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A6484PessoaVendPadId = 0 ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A5965SaidaClienteEmpresaId = "" ;
   this.A5966SaidaClienteId = 0 ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A6476TransacaoSaidaSNDiversosVend = "" ;
   this.A6569TransacaoSaidaSnCaixaFCX = "" ;
   this.A6475TransacaoSaidaAltData = "" ;
   this.A6469TransacaoSaidaSNPreco = "" ;
   this.A6478TransacaoSaidaAltVendedor = "" ;
   this.A5573TransacaoSaidaSnLancaFinanc = "" ;
   this.A6474TransacaoSaidaTipoPreVenda = "" ;
   this.A6005SaidaData = gx.date.nullDate() ;
   this.A5970SaidaFilialEmpId = "" ;
   this.A5971SaidaFilialId = 0 ;
   this.Events = {"e111192_client": ["'FECHAR'", true] ,"e141192_client": ["ENTER", true] ,"e161192_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV14SnAltDataOrcVen',fld:'vSNALTDATAORCVEN'},{av:'AV16TransacaoSaidaSnCaixaFCX',fld:'vTRANSACAOSAIDASNCAIXAFCX'},{av:'AV17TransacaoSaidaAltData',fld:'vTRANSACAOSAIDAALTDATA'},{av:'AV18SnAltVenOrcVen',fld:'vSNALTVENORCVEN'},{av:'AV13DiversosVendAtual',fld:'vDIVERSOSVENDATUAL'},{av:'AV10DiversosVendAnt',fld:'vDIVERSOSVENDANT'},{av:'AV19VendedorId',fld:'vVENDEDORID'},{av:'AV32TransacaoSaidaAltVendedor',fld:'vTRANSACAOSAIDAALTVENDEDOR'},{av:'AV22TransacaoSaidaSNPreco',fld:'vTRANSACAOSAIDASNPRECO'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV9TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'AV8TrnOrcamento',fld:'vTRNORCAMENTO'},{av:'A6476TransacaoSaidaSNDiversosVend',fld:'TRANSACAOSAIDASNDIVERSOSVEND'},{av:'A6474TransacaoSaidaTipoPreVenda',fld:'TRANSACAOSAIDATIPOPREVENDA'},{av:'AV12TrnPreVenda',fld:'vTRNPREVENDA'},{av:'A6569TransacaoSaidaSnCaixaFCX',fld:'TRANSACAOSAIDASNCAIXAFCX'},{av:'A6475TransacaoSaidaAltData',fld:'TRANSACAOSAIDAALTDATA'},{av:'A6469TransacaoSaidaSNPreco',fld:'TRANSACAOSAIDASNPRECO'},{av:'A6478TransacaoSaidaAltVendedor',fld:'TRANSACAOSAIDAALTVENDEDOR'},{av:'A5573TransacaoSaidaSnLancaFinanc',fld:'TRANSACAOSAIDASNLANCAFINANC'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV6SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'AV5SaidaId',fld:'vSAIDAID',hsh:true},{av:'A5965SaidaClienteEmpresaId',fld:'SAIDACLIENTEEMPRESAID'},{av:'A5966SaidaClienteId',fld:'SAIDACLIENTEID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A6484PessoaVendPadId',fld:'PESSOAVENDPADID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV42SnConfirmado',fld:'vSNCONFIRMADO'},{av:'AV15DataVenda',fld:'vDATAVENDA'},{av:'AV21SnAlterarPrecos',fld:'vSNALTERARPRECOS'}],[{av:'gx.fn.getCtrlProperty("vDATAVENDA","Enabled")',ctrl:'vDATAVENDA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TBDATA","Visible")',ctrl:'TBDATA',prop:'Visible'},{av:'AV35VendedorAnt',fld:'vVENDEDORANT'},{av:'gx.fn.getCtrlProperty("vVENDEDORID","Enabled")',ctrl:'vVENDEDORID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TBVENDEDOR","Visible")',ctrl:'TBVENDEDOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBPRECO","Visible")',ctrl:'TBPRECO',prop:'Visible'},{av:'AV42SnConfirmado',fld:'vSNCONFIRMADO'},{av:'AV8TrnOrcamento',fld:'vTRNORCAMENTO'},{av:'AV12TrnPreVenda',fld:'vTRNPREVENDA'},{av:'AV14SnAltDataOrcVen',fld:'vSNALTDATAORCVEN'},{av:'AV18SnAltVenOrcVen',fld:'vSNALTVENORCVEN'},{av:'AV10DiversosVendAnt',fld:'vDIVERSOSVENDANT'},{av:'AV11TipoPreVendaAnt',fld:'vTIPOPREVENDAANT'},{av:'AV13DiversosVendAtual',fld:'vDIVERSOSVENDATUAL'},{av:'AV16TransacaoSaidaSnCaixaFCX',fld:'vTRANSACAOSAIDASNCAIXAFCX'},{av:'AV17TransacaoSaidaAltData',fld:'vTRANSACAOSAIDAALTDATA'},{av:'AV22TransacaoSaidaSNPreco',fld:'vTRANSACAOSAIDASNPRECO'},{av:'AV32TransacaoSaidaAltVendedor',fld:'vTRANSACAOSAIDAALTVENDEDOR'},{av:'AV30TransacaoSaidaSnLancaFinanc',fld:'vTRANSACAOSAIDASNLANCAFINANC'},{av:'AV31TransacaoSaidaSnDiversosVend',fld:'vTRANSACAOSAIDASNDIVERSOSVEND'},{av:'AV24SaidaClienteEmpresaId',fld:'vSAIDACLIENTEEMPRESAID'},{av:'AV25SaidaClienteId',fld:'vSAIDACLIENTEID'},{av:'AV19VendedorId',fld:'vVENDEDORID'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42SnConfirmado',fld:'vSNCONFIRMADO'},{av:'AV15DataVenda',fld:'vDATAVENDA'},{av:'AV19VendedorId',fld:'vVENDEDORID'},{av:'AV21SnAlterarPrecos',fld:'vSNALTERARPRECOS'}],[{av:'AV42SnConfirmado',fld:'vSNCONFIRMADO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV28SnErro',fld:'vSNERRO'},{av:'AV14SnAltDataOrcVen',fld:'vSNALTDATAORCVEN'},{av:'AV15DataVenda',fld:'vDATAVENDA'},{av:'AV30TransacaoSaidaSnLancaFinanc',fld:'vTRANSACAOSAIDASNLANCAFINANC'},{av:'AV19VendedorId',fld:'vVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV33VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A1223VendedorSNVendedor',fld:'VENDEDORSNVENDEDOR'},{av:'A6477VendedorAtivo',fld:'VENDEDORATIVO'},{av:'AV32TransacaoSaidaAltVendedor',fld:'vTRANSACAOSAIDAALTVENDEDOR'},{av:'AV35VendedorAnt',fld:'vVENDEDORANT'},{av:'AV36UsrCod',fld:'vUSRCOD'},{av:'AV37EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV38SaidaFilialEmpId',fld:'vSAIDAFILIALEMPID'},{av:'AV39SaidaFilialId',fld:'vSAIDAFILIALID'},{av:'AV59Pgmname',fld:'vPGMNAME'},{av:'AV17TransacaoSaidaAltData',fld:'vTRANSACAOSAIDAALTDATA'},{av:'AV7SaidaData',fld:'vSAIDADATA'},{av:'AV34SdtPermissao',fld:'vSDTPERMISSAO'},{av:'AV42SnConfirmado',fld:'vSNCONFIRMADO'},{av:'AV21SnAlterarPrecos',fld:'vSNALTERARPRECOS'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV9TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'AV8TrnOrcamento',fld:'vTRNORCAMENTO'},{av:'A6476TransacaoSaidaSNDiversosVend',fld:'TRANSACAOSAIDASNDIVERSOSVEND'},{av:'A6474TransacaoSaidaTipoPreVenda',fld:'TRANSACAOSAIDATIPOPREVENDA'},{av:'AV12TrnPreVenda',fld:'vTRNPREVENDA'},{av:'A6569TransacaoSaidaSnCaixaFCX',fld:'TRANSACAOSAIDASNCAIXAFCX'},{av:'A6475TransacaoSaidaAltData',fld:'TRANSACAOSAIDAALTDATA'},{av:'A6469TransacaoSaidaSNPreco',fld:'TRANSACAOSAIDASNPRECO'},{av:'A6478TransacaoSaidaAltVendedor',fld:'TRANSACAOSAIDAALTVENDEDOR'},{av:'A5573TransacaoSaidaSnLancaFinanc',fld:'TRANSACAOSAIDASNLANCAFINANC'}],[{av:'AV42SnConfirmado',fld:'vSNCONFIRMADO'},{av:'AV28SnErro',fld:'vSNERRO'},{av:'AV29MsgErro',fld:'vMSGERRO'},{av:'AV58GXLvl214',fld:'vGXLVL214'},{av:'AV20VendedorNome',fld:'vVENDEDORNOME'},{av:'AV34SdtPermissao',fld:'vSDTPERMISSAO'},{av:'AV40MensagemDetalhada',fld:'vMENSAGEMDETALHADA'},{av:'AV43SnTelaPermissao',fld:'vSNTELAPERMISSAO'},{av:'AV44NomeSessao',fld:'vNOMESESSAO'},{av:'AV8TrnOrcamento',fld:'vTRNORCAMENTO'},{av:'AV12TrnPreVenda',fld:'vTRNPREVENDA'},{av:'AV14SnAltDataOrcVen',fld:'vSNALTDATAORCVEN'},{av:'AV18SnAltVenOrcVen',fld:'vSNALTVENORCVEN'},{av:'AV10DiversosVendAnt',fld:'vDIVERSOSVENDANT'},{av:'AV11TipoPreVendaAnt',fld:'vTIPOPREVENDAANT'},{av:'AV13DiversosVendAtual',fld:'vDIVERSOSVENDATUAL'},{av:'AV16TransacaoSaidaSnCaixaFCX',fld:'vTRANSACAOSAIDASNCAIXAFCX'},{av:'AV17TransacaoSaidaAltData',fld:'vTRANSACAOSAIDAALTDATA'},{av:'AV22TransacaoSaidaSNPreco',fld:'vTRANSACAOSAIDASNPRECO'},{av:'AV32TransacaoSaidaAltVendedor',fld:'vTRANSACAOSAIDAALTVENDEDOR'},{av:'AV30TransacaoSaidaSnLancaFinanc',fld:'vTRANSACAOSAIDASNLANCAFINANC'},{av:'AV31TransacaoSaidaSnDiversosVend',fld:'vTRANSACAOSAIDASNDIVERSOSVEND'}]];
   this.setPrompt("PROMPT_VENDEDORID", [16]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("AV6SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV5SaidaId", "vSAIDAID", 0, "int");
   this.setVCMap("AV45SaidaDataAux", "vSAIDADATAAUX", 0, "date");
   this.setVCMap("AV46SaidaVendedorIdAux", "vSAIDAVENDEDORIDAUX", 0, "int");
   this.setVCMap("AV47TipoVenda", "vTIPOVENDA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarprevendaorcvenda());
