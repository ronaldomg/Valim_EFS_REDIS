/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:1:49.87
*/
gx.evt.autoSkip = false;
gx.define('tccontabilpessoa', false, function () {
   this.ServerClass =  "tccontabilpessoa" ;
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
      this.AV18FilialId=gx.fn.getIntegerValue("vFILIALID",'.') ;
      this.AV17PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.AV21EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV22EmpresaPadraoCContabil=gx.fn.getControlValue("vEMPRESAPADRAOCCONTABIL") ;
      this.A1436CContabilPessoaContaCliEmpresa=gx.fn.getControlValue("CCONTABILPESSOACONTACLIEMPRESA") ;
      this.AV12EmpresaPadraoPessoa=gx.fn.getControlValue("vEMPRESAPADRAOPESSOA") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV19EmpresaPadraoFilal=gx.fn.getControlValue("vEMPRESAPADRAOFILAL") ;
      this.A1228FilialEmpresaId=gx.fn.getControlValue("FILIALEMPRESAID") ;
      this.A1439CContabilPessoaContaForEmpresa=gx.fn.getControlValue("CCONTABILPESSOACONTAFOREMPRESA") ;
      this.AV39SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV41LogEmpresaPessoasEmpresaId=gx.fn.getControlValue("vLOGEMPRESAPESSOASEMPRESAID") ;
      this.AV42LogPessoaId=gx.fn.getIntegerValue("vLOGPESSOAID",'.') ;
      this.AV43LogFilialEmpresaId=gx.fn.getControlValue("vLOGFILIALEMPRESAID") ;
      this.AV44LogFilialId=gx.fn.getIntegerValue("vLOGFILIALID",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A445PessoaCliente=gx.fn.getControlValue("PESSOACLIENTE") ;
      this.A446PessoaFornecedor=gx.fn.getControlValue("PESSOAFORNECEDOR") ;
      this.AV32ErroCli=gx.fn.getControlValue("vERROCLI") ;
      this.AV34ContaSuperiorCli=gx.fn.getControlValue("vCONTASUPERIORCLI") ;
      this.AV33ErroFor=gx.fn.getControlValue("vERROFOR") ;
      this.AV35ContaSuperiorFor=gx.fn.getControlValue("vCONTASUPERIORFOR") ;
      this.AV40lCContabilPessoas=gx.fn.getControlValue("vLCCONTABILPESSOAS") ;
      this.AV45LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV47Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV46Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV38Chamada=gx.fn.getControlValue("vCHAMADA") ;
   };
   this.Valid_Pessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pessoaid",["gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId", "gx.O.A445PessoaCliente", "gx.O.A446PessoaFornecedor"],["A446PessoaFornecedor", "A445PessoaCliente"]);
      return true;
   }
   this.Valid_Filialid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Filialid",["gx.O.Gx_mode", "gx.O.O1136FilialNome", "gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId", "gx.O.A1136FilialNome"],["O1136FilialNome", "A1136FilialNome", ["AV40lCContabilPessoas","Afilialnome"]]);
      return true;
   }
   this.Valid_Filialnome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FILIALNOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ccontabilpessoacontacliid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ccontabilpessoacontacliid",["gx.O.Gx_mode", "gx.O.O1437CContabilPessoaContaCliId", "gx.O.O1529CContabilPessoaContaCliTraduto", "gx.O.O1438CContabilPessoaContaCliNome", "gx.O.O1436CContabilPessoaContaCliEmpresa", "gx.O.AV21EmpresaPadrao", "gx.O.AV22EmpresaPadraoCContabil", "gx.O.A1437CContabilPessoaContaCliId", "gx.O.A1436CContabilPessoaContaCliEmpresa", "gx.O.A1438CContabilPessoaContaCliNome", "gx.O.A1529CContabilPessoaContaCliTraduto", "gx.O.A445PessoaCliente"],["O1438CContabilPessoaContaCliNome", "O1529CContabilPessoaContaCliTraduto", "A1436CContabilPessoaContaCliEmpresa", ["AV40lCContabilPessoas","Accontabilpessoacontacliempresaid"], "A1438CContabilPessoaContaCliNome", "A1529CContabilPessoaContaCliTraduto", ["AV40lCContabilPessoas","Accontabilpessoacontaclinome"], ["AV40lCContabilPessoas","Accontabilpessoacontaclitradutor"], ["AV40lCContabilPessoas","Accontabilpessoacontacliid"]]);
      return true;
   }
   this.Valid_Ccontabilpessoacontaclinome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CCONTABILPESSOACONTACLINOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ccontabilpessoacontaclitraduto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CCONTABILPESSOACONTACLITRADUTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ccontabilpessoacontaforid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ccontabilpessoacontaforid",["gx.O.Gx_mode", "gx.O.O1440CContabilPessoaContaForId", "gx.O.O1530CContabilPessoaContaForTraduto", "gx.O.O1441CContabilPessoaContaForNome", "gx.O.O1439CContabilPessoaContaForEmpresa", "gx.O.AV22EmpresaPadraoCContabil", "gx.O.A1440CContabilPessoaContaForId", "gx.O.A1439CContabilPessoaContaForEmpresa", "gx.O.A1441CContabilPessoaContaForNome", "gx.O.A1530CContabilPessoaContaForTraduto", "gx.O.A446PessoaFornecedor"],["O1441CContabilPessoaContaForNome", "O1530CContabilPessoaContaForTraduto", "A1439CContabilPessoaContaForEmpresa", ["AV40lCContabilPessoas","Accontabilpessoacontaforempresaid"], "A1441CContabilPessoaContaForNome", "A1530CContabilPessoaContaForTraduto", ["AV40lCContabilPessoas","Accontabilpessoacontafornome"], ["AV40lCContabilPessoas","Accontabilpessoacontafortradutor"], ["AV40lCContabilPessoas","Accontabilpessoacontaforid"]]);
      return true;
   }
   this.Valid_Ccontabilpessoacontafornome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CCONTABILPESSOACONTAFORNOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ccontabilpessoacontafortraduto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CCONTABILPESSOACONTAFORTRADUTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122x2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132x2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142x516_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152x516_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,19,21,22,25,27,28,29,30,33,35,36,37,38,41,44,46,48,57,58,59,61,63];
   this.GXLastCtrlId =63;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAID",gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV20PessoaFantasia",gxold:"OV20PessoaFantasia",gxvar:"AV20PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PessoaFantasia=Value},v2z:function(Value){gx.O.ZV20PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV20PessoaFantasia,0)},c2v:function(){gx.O.AV20PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialid,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[21,22],ip:[22,21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FILIALID",gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FILIALID",'.')},nac:function(){return !(0==this.AV18FilialId)}};
   GXValidFnc[22]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Filialnome,isvalid:null,rgrid:[],fld:"FILIALNOME",gxz:"Z1136FilialNome",gxold:"O1136FilialNome",gxvar:"A1136FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1136FilialNome=Value},v2z:function(Value){gx.O.Z1136FilialNome=Value},v2c:function(){gx.fn.setControlValue("FILIALNOME",gx.O.A1136FilialNome,0)},c2v:function(){gx.O.A1136FilialNome=this.val()},val:function(){return gx.fn.getControlValue("FILIALNOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilpessoacontacliid,isvalid:null,rgrid:[],fld:"CCONTABILPESSOACONTACLIID",gxz:"Z1437CContabilPessoaContaCliId",gxold:"O1437CContabilPessoaContaCliId",gxvar:"A1437CContabilPessoaContaCliId",ucs:[],op:[27,30,29],ip:[30,29,27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1437CContabilPessoaContaCliId=Value},v2z:function(Value){gx.O.Z1437CContabilPessoaContaCliId=Value},v2c:function(){gx.fn.setControlValue("CCONTABILPESSOACONTACLIID",gx.O.A1437CContabilPessoaContaCliId,0)},c2v:function(){gx.O.A1437CContabilPessoaContaCliId=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILPESSOACONTACLIID")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"PROMPTCCONTCLI",grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilpessoacontaclinome,isvalid:null,rgrid:[],fld:"CCONTABILPESSOACONTACLINOME",gxz:"Z1438CContabilPessoaContaCliNome",gxold:"O1438CContabilPessoaContaCliNome",gxvar:"A1438CContabilPessoaContaCliNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1438CContabilPessoaContaCliNome=Value},v2z:function(Value){gx.O.Z1438CContabilPessoaContaCliNome=Value},v2c:function(){gx.fn.setControlValue("CCONTABILPESSOACONTACLINOME",gx.O.A1438CContabilPessoaContaCliNome,0)},c2v:function(){gx.O.A1438CContabilPessoaContaCliNome=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILPESSOACONTACLINOME")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilpessoacontaclitraduto,isvalid:null,rgrid:[],fld:"CCONTABILPESSOACONTACLITRADUTO",gxz:"Z1529CContabilPessoaContaCliTraduto",gxold:"O1529CContabilPessoaContaCliTraduto",gxvar:"A1529CContabilPessoaContaCliTraduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1529CContabilPessoaContaCliTraduto=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1529CContabilPessoaContaCliTraduto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CCONTABILPESSOACONTACLITRADUTO",gx.O.A1529CContabilPessoaContaCliTraduto,0)},c2v:function(){gx.O.A1529CContabilPessoaContaCliTraduto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CCONTABILPESSOACONTACLITRADUTO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilpessoacontaforid,isvalid:null,rgrid:[],fld:"CCONTABILPESSOACONTAFORID",gxz:"Z1440CContabilPessoaContaForId",gxold:"O1440CContabilPessoaContaForId",gxvar:"A1440CContabilPessoaContaForId",ucs:[],op:[35,38,37],ip:[38,37,35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1440CContabilPessoaContaForId=Value},v2z:function(Value){gx.O.Z1440CContabilPessoaContaForId=Value},v2c:function(){gx.fn.setControlValue("CCONTABILPESSOACONTAFORID",gx.O.A1440CContabilPessoaContaForId,0)},c2v:function(){gx.O.A1440CContabilPessoaContaForId=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILPESSOACONTAFORID")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"PROMPTCCONTFOR",grid:0};
   GXValidFnc[37]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilpessoacontafornome,isvalid:null,rgrid:[],fld:"CCONTABILPESSOACONTAFORNOME",gxz:"Z1441CContabilPessoaContaForNome",gxold:"O1441CContabilPessoaContaForNome",gxvar:"A1441CContabilPessoaContaForNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1441CContabilPessoaContaForNome=Value},v2z:function(Value){gx.O.Z1441CContabilPessoaContaForNome=Value},v2c:function(){gx.fn.setControlValue("CCONTABILPESSOACONTAFORNOME",gx.O.A1441CContabilPessoaContaForNome,0)},c2v:function(){gx.O.A1441CContabilPessoaContaForNome=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILPESSOACONTAFORNOME")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ccontabilpessoacontafortraduto,isvalid:null,rgrid:[],fld:"CCONTABILPESSOACONTAFORTRADUTO",gxz:"Z1530CContabilPessoaContaForTraduto",gxold:"O1530CContabilPessoaContaForTraduto",gxvar:"A1530CContabilPessoaContaForTraduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1530CContabilPessoaContaForTraduto=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1530CContabilPessoaContaForTraduto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CCONTABILPESSOACONTAFORTRADUTO",gx.O.A1530CContabilPessoaContaForTraduto,0)},c2v:function(){gx.O.A1530CContabilPessoaContaForTraduto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CCONTABILPESSOACONTAFORTRADUTO",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLE4",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILPESSOAUSUARIOALT",gxz:"Z1442CContabilPessoaUsuarioAlt",gxold:"O1442CContabilPessoaUsuarioAlt",gxvar:"A1442CContabilPessoaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1442CContabilPessoaUsuarioAlt=Value},v2z:function(Value){gx.O.Z1442CContabilPessoaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CCONTABILPESSOAUSUARIOALT",gx.O.A1442CContabilPessoaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1442CContabilPessoaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CCONTABILPESSOAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[48]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILPESSOADATAHORAALT",gxz:"Z1443CContabilPessoaDataHoraAlt",gxold:"O1443CContabilPessoaDataHoraAlt",gxvar:"A1443CContabilPessoaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1443CContabilPessoaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1443CContabilPessoaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CCONTABILPESSOADATAHORAALT",gx.O.A1443CContabilPessoaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1443CContabilPessoaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CCONTABILPESSOADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[57]={fld:"JS", format:2,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV23ChamaOnBlurMascara",gxold:"OV23ChamaOnBlurMascara",gxvar:"AV23ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV23ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV23ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV23ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV37AcessoSistemaSequencia",gxold:"OV37AcessoSistemaSequencia",gxvar:"AV37AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV37AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV37AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"IMAGE1",grid:0};
   GXValidFnc[63]={fld:"PROMPT_1156",grid:516};
   this.A69PessoaId = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.AV20PessoaFantasia = "" ;
   this.ZV20PessoaFantasia = "" ;
   this.OV20PessoaFantasia = "" ;
   this.A1156FilialId = 0 ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.A1136FilialNome = "" ;
   this.Z1136FilialNome = "" ;
   this.O1136FilialNome = "" ;
   this.A1437CContabilPessoaContaCliId = "" ;
   this.Z1437CContabilPessoaContaCliId = "" ;
   this.O1437CContabilPessoaContaCliId = "" ;
   this.A1438CContabilPessoaContaCliNome = "" ;
   this.Z1438CContabilPessoaContaCliNome = "" ;
   this.O1438CContabilPessoaContaCliNome = "" ;
   this.A1529CContabilPessoaContaCliTraduto = 0 ;
   this.Z1529CContabilPessoaContaCliTraduto = 0 ;
   this.O1529CContabilPessoaContaCliTraduto = 0 ;
   this.A1440CContabilPessoaContaForId = "" ;
   this.Z1440CContabilPessoaContaForId = "" ;
   this.O1440CContabilPessoaContaForId = "" ;
   this.A1441CContabilPessoaContaForNome = "" ;
   this.Z1441CContabilPessoaContaForNome = "" ;
   this.O1441CContabilPessoaContaForNome = "" ;
   this.A1530CContabilPessoaContaForTraduto = 0 ;
   this.Z1530CContabilPessoaContaForTraduto = 0 ;
   this.O1530CContabilPessoaContaForTraduto = 0 ;
   this.A1442CContabilPessoaUsuarioAlt = "" ;
   this.Z1442CContabilPessoaUsuarioAlt = "" ;
   this.O1442CContabilPessoaUsuarioAlt = "" ;
   this.A1443CContabilPessoaDataHoraAlt = gx.date.nullDate() ;
   this.Z1443CContabilPessoaDataHoraAlt = gx.date.nullDate() ;
   this.O1443CContabilPessoaDataHoraAlt = gx.date.nullDate() ;
   this.AV23ChamaOnBlurMascara = "" ;
   this.ZV23ChamaOnBlurMascara = "" ;
   this.OV23ChamaOnBlurMascara = "" ;
   this.AV37AcessoSistemaSequencia = 0 ;
   this.ZV37AcessoSistemaSequencia = 0 ;
   this.OV37AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV46Pgmname = "" ;
   this.AV47Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV37AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV21EmpresaPadrao = "" ;
   this.AV12EmpresaPadraoPessoa = "" ;
   this.AV19EmpresaPadraoFilal = "" ;
   this.AV22EmpresaPadraoCContabil = "" ;
   this.AV23ChamaOnBlurMascara = "" ;
   this.AV24TemMascara = "" ;
   this.AV25EstruturaContaInicial = "" ;
   this.AV26Entrada1 = [ ] ;
   this.AV27Saida1 = [ ] ;
   this.AV28Entrada2 = [ ] ;
   this.AV29Saida2 = [ ] ;
   this.AV17PessoaId = 0 ;
   this.AV20PessoaFantasia = "" ;
   this.AV32ErroCli = "" ;
   this.AV33ErroFor = "" ;
   this.AV34ContaSuperiorCli = "" ;
   this.AV35ContaSuperiorFor = "" ;
   this.AV18FilialId = 0 ;
   this.AV38Chamada = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1436CContabilPessoaContaCliEmpresa = "" ;
   this.A1439CContabilPessoaContaForEmpresa = "" ;
   this.AV39SnAlterou = "" ;
   this.AV41LogEmpresaPessoasEmpresaId = "" ;
   this.AV42LogPessoaId = 0 ;
   this.AV43LogFilialEmpresaId = "" ;
   this.AV44LogFilialId = 0 ;
   this.A446PessoaFornecedor = "" ;
   this.A445PessoaCliente = "" ;
   this.A1136FilialNome = "" ;
   this.A1437CContabilPessoaContaCliId = "" ;
   this.A1438CContabilPessoaContaCliNome = "" ;
   this.A1529CContabilPessoaContaCliTraduto = 0 ;
   this.A1440CContabilPessoaContaForId = "" ;
   this.A1441CContabilPessoaContaForNome = "" ;
   this.A1530CContabilPessoaContaForTraduto = 0 ;
   this.A1442CContabilPessoaUsuarioAlt = "" ;
   this.A1443CContabilPessoaDataHoraAlt = gx.date.nullDate() ;
   this.AV40lCContabilPessoas = {} ;
   this.AV45LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e122x2_client": ["'FECHAR'", true] ,"e132x2_client": ["AFTER TRN", true] ,"e142x516_client": ["ENTER", true] ,"e152x516_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17PessoaId',fld:'vPESSOAID'},{av:'AV18FilialId',fld:'vFILIALID'},{av:'Gx_mode',fld:'vMODE'},{av:'AV38Chamada',fld:'vCHAMADA'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV37AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV12EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'AV17PessoaId',fld:'vPESSOAID'},{av:'AV38Chamada',fld:'vCHAMADA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV37AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTCCONTCLI", [27]);
   this.setPrompt("PROMPT_1156", [21]);
   this.setPrompt("PROMPTCCONTFOR", [35]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18FilialId", "vFILIALID", 0, "int");
   this.setVCMap("AV17PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("AV21EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV22EmpresaPadraoCContabil", "vEMPRESAPADRAOCCONTABIL", 0, "char");
   this.setVCMap("A1436CContabilPessoaContaCliEmpresa", "CCONTABILPESSOACONTACLIEMPRESA", 0, "char");
   this.setVCMap("AV12EmpresaPadraoPessoa", "vEMPRESAPADRAOPESSOA", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV19EmpresaPadraoFilal", "vEMPRESAPADRAOFILAL", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1439CContabilPessoaContaForEmpresa", "CCONTABILPESSOACONTAFOREMPRESA", 0, "char");
   this.setVCMap("AV39SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV41LogEmpresaPessoasEmpresaId", "vLOGEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV42LogPessoaId", "vLOGPESSOAID", 0, "int");
   this.setVCMap("AV43LogFilialEmpresaId", "vLOGFILIALEMPRESAID", 0, "char");
   this.setVCMap("AV44LogFilialId", "vLOGFILIALID", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A445PessoaCliente", "PESSOACLIENTE", 0, "char");
   this.setVCMap("A446PessoaFornecedor", "PESSOAFORNECEDOR", 0, "char");
   this.setVCMap("AV32ErroCli", "vERROCLI", 0, "svchar");
   this.setVCMap("AV34ContaSuperiorCli", "vCONTASUPERIORCLI", 0, "svchar");
   this.setVCMap("AV33ErroFor", "vERROFOR", 0, "svchar");
   this.setVCMap("AV35ContaSuperiorFor", "vCONTASUPERIORFOR", 0, "svchar");
   this.setVCMap("AV40lCContabilPessoas", "vLCCONTABILPESSOAS", 0, "lCContabilPessoas");
   this.setVCMap("AV45LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV47Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV46Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV38Chamada", "vCHAMADA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 516 ]= ["O1440CContabilPessoaContaForId","O1530CContabilPessoaContaForTraduto","O1441CContabilPessoaContaForNome","O1439CContabilPessoaContaForEmpresa","O1437CContabilPessoaContaCliId","O1529CContabilPessoaContaCliTraduto","O1438CContabilPessoaContaCliNome","O1436CContabilPessoaContaCliEmpresa","O1156FilialId","O1136FilialNome"] ;
});
gx.setParentObj(new tccontabilpessoa());
