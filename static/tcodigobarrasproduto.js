/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:45:22.90
*/
gx.evt.autoSkip = false;
gx.define('tcodigobarrasproduto', false, function () {
   this.ServerClass =  "tcodigobarrasproduto" ;
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
      this.AV18ProdutoId1=gx.fn.getIntegerValue("vPRODUTOID1",'.') ;
      this.AV19CodigoBarrasProdutoBarra1=gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA1",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24LogProdutoEmpresaId=gx.fn.getControlValue("vLOGPRODUTOEMPRESAID") ;
      this.AV25LogProdutoId=gx.fn.getIntegerValue("vLOGPRODUTOID",'.') ;
      this.AV26LogCodigoBarrasProdutoBarra=gx.fn.getIntegerValue("vLOGCODIGOBARRASPRODUTOBARRA",'.') ;
      this.AV23lCodigoBarrasProdutos=gx.fn.getControlValue("vLCODIGOBARRASPRODUTOS") ;
      this.AV27LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Produtoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Produtoid",["gx.O.A2964ProdutoEmpresaId", "gx.O.A2965ProdutoId"],[]);
      return true;
   }
   this.Valid_Codigobarrasprodutobarra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CODIGOBARRASPRODUTOBARRA");
         this.AnyError  = 0;
         if ( (0==this.A2968CodigoBarrasProdutoBarra) )
         {
            try {
               gxballoon.setError("Informe o código de barras");
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
   this.Valid_Codigobarraseantributavel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CODIGOBARRASEANTRIBUTAVEL");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e126f2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136f2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146f370_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156f370_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,31,33,35,42,45,47];
   this.GXLastCtrlId =47;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Produtoid,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PRODUTOID",gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codigobarrasprodutobarra,isvalid:null,rgrid:[],fld:"CODIGOBARRASPRODUTOBARRA",gxz:"Z2968CodigoBarrasProdutoBarra",gxold:"O2968CodigoBarrasProdutoBarra",gxvar:"A2968CodigoBarrasProdutoBarra",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2968CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2968CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CODIGOBARRASPRODUTOBARRA",gx.O.A2968CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.A2968CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codigobarraseantributavel,isvalid:null,rgrid:[],fld:"CODIGOBARRASEANTRIBUTAVEL",gxz:"Z3450CodigoBarrasEANTributavel",gxold:"O3450CodigoBarrasEANTributavel",gxvar:"A3450CodigoBarrasEANTributavel",ucs:[],op:[],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3450CodigoBarrasEANTributavel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3450CodigoBarrasEANTributavel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CODIGOBARRASEANTRIBUTAVEL",gx.O.A3450CodigoBarrasEANTributavel,0)},c2v:function(){gx.O.A3450CodigoBarrasEANTributavel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CODIGOBARRASEANTRIBUTAVEL",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CODIGOBARRASPRODUTOUSUARIOALT",gxz:"Z2966CodigoBarrasProdutoUsuarioAlt",gxold:"O2966CodigoBarrasProdutoUsuarioAlt",gxvar:"A2966CodigoBarrasProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2966CodigoBarrasProdutoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2966CodigoBarrasProdutoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CODIGOBARRASPRODUTOUSUARIOALT",gx.O.A2966CodigoBarrasProdutoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2966CodigoBarrasProdutoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CODIGOBARRASPRODUTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CODIGOBARRASPRODUTODATAHORAALT",gxz:"Z2967CodigoBarrasProdutoDataHoraAlt",gxold:"O2967CodigoBarrasProdutoDataHoraAlt",gxvar:"A2967CodigoBarrasProdutoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2967CodigoBarrasProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2967CodigoBarrasProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CODIGOBARRASPRODUTODATAHORAALT",gx.O.A2967CodigoBarrasProdutoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2967CodigoBarrasProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CODIGOBARRASPRODUTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPOVENDABALANCA",gxz:"ZV21ProdutoTipoVendaBalanca",gxold:"OV21ProdutoTipoVendaBalanca",gxvar:"AV21ProdutoTipoVendaBalanca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21ProdutoTipoVendaBalanca=Value},v2z:function(Value){gx.O.ZV21ProdutoTipoVendaBalanca=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOTIPOVENDABALANCA",gx.O.AV21ProdutoTipoVendaBalanca)},c2v:function(){gx.O.AV21ProdutoTipoVendaBalanca=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPOVENDABALANCA")},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   this.A2965ProdutoId = 0 ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.A2968CodigoBarrasProdutoBarra = 0 ;
   this.Z2968CodigoBarrasProdutoBarra = 0 ;
   this.O2968CodigoBarrasProdutoBarra = 0 ;
   this.A3450CodigoBarrasEANTributavel = 0 ;
   this.Z3450CodigoBarrasEANTributavel = 0 ;
   this.O3450CodigoBarrasEANTributavel = 0 ;
   this.A2966CodigoBarrasProdutoUsuarioAlt = "" ;
   this.Z2966CodigoBarrasProdutoUsuarioAlt = "" ;
   this.O2966CodigoBarrasProdutoUsuarioAlt = "" ;
   this.A2967CodigoBarrasProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Z2967CodigoBarrasProdutoDataHoraAlt = gx.date.nullDate() ;
   this.O2967CodigoBarrasProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV21ProdutoTipoVendaBalanca = "" ;
   this.ZV21ProdutoTipoVendaBalanca = "" ;
   this.OV21ProdutoTipoVendaBalanca = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV28Pgmname = "" ;
   this.AV29Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22Snerro = "" ;
   this.AV19CodigoBarrasProdutoBarra1 = 0 ;
   this.AV18ProdutoId1 = 0 ;
   this.AV21ProdutoTipoVendaBalanca = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2968CodigoBarrasProdutoBarra = 0 ;
   this.AV20SnAlterou = "" ;
   this.A2966CodigoBarrasProdutoUsuarioAlt = "" ;
   this.A2967CodigoBarrasProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV24LogProdutoEmpresaId = "" ;
   this.AV25LogProdutoId = 0 ;
   this.AV26LogCodigoBarrasProdutoBarra = 0 ;
   this.A3450CodigoBarrasEANTributavel = 0 ;
   this.AV23lCodigoBarrasProdutos = {} ;
   this.AV27LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126f2_client": ["'FECHAR'", true] ,"e136f2_client": ["AFTER TRN", true] ,"e146f370_client": ["ENTER", true] ,"e156f370_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19CodigoBarrasProdutoBarra1',fld:'vCODIGOBARRASPRODUTOBARRA1'},{av:'AV18ProdutoId1',fld:'vPRODUTOID1'},{av:'AV21ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ProdutoId1", "vPRODUTOID1", 0, "int");
   this.setVCMap("AV19CodigoBarrasProdutoBarra1", "vCODIGOBARRASPRODUTOBARRA1", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24LogProdutoEmpresaId", "vLOGPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV25LogProdutoId", "vLOGPRODUTOID", 0, "int");
   this.setVCMap("AV26LogCodigoBarrasProdutoBarra", "vLOGCODIGOBARRASPRODUTOBARRA", 0, "int");
   this.setVCMap("AV23lCodigoBarrasProdutos", "vLCODIGOBARRASPRODUTOS", 0, "lCodigoBarrasProdutos");
   this.setVCMap("AV27LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 370 ]= ["O3450CodigoBarrasEANTributavel","O2968CodigoBarrasProdutoBarra","O2965ProdutoId"] ;
});
gx.setParentObj(new tcodigobarrasproduto());
