/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:37:49.65
*/
gx.evt.autoSkip = false;
gx.define('tpedidocpc', false, function () {
   this.ServerClass =  "tpedidocpc" ;
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
      this.A11541PedidoCPCValorM3faltante=gx.fn.getDecimalValue("PEDIDOCPCVALORM3FALTANTE",'.',',') ;
      this.AV28PedidoCPCAno=gx.fn.getIntegerValue("vPEDIDOCPCANO",'.') ;
      this.AV30PedidoCPCNumero=gx.fn.getIntegerValue("vPEDIDOCPCNUMERO",'.') ;
      this.A11354PedidoCPCSituacao=gx.fn.getControlValue("PEDIDOCPCSITUACAO") ;
      this.A11345PedidoCPCBetoneiraEmpresaId=gx.fn.getControlValue("PEDIDOCPCBETONEIRAEMPRESAID") ;
      this.A11347PedidoCPCMotoristaEmpresaId=gx.fn.getControlValue("PEDIDOCPCMOTORISTAEMPRESAID") ;
      this.A11343PedidoCPCObraEmpresaId=gx.fn.getControlValue("PEDIDOCPCOBRAEMPRESAID") ;
      this.A11341PedidoCPCSaidaEmpresaId=gx.fn.getControlValue("PEDIDOCPCSAIDAEMPRESAID") ;
      this.AV39SnPedClienteSus=gx.fn.getControlValue("vSNPEDCLIENTESUS") ;
      this.AV38SnPedClienteCan=gx.fn.getControlValue("vSNPEDCLIENTECAN") ;
      this.AV15Erro=gx.fn.getIntegerValue("vERRO",'.') ;
      this.AV44TrnCpcNfe=gx.fn.getControlValue("vTRNCPCNFE") ;
      this.AV43TrnCpcEstoque=gx.fn.getControlValue("vTRNCPCESTOQUE") ;
      this.AV52SnObrCorpoProva=gx.fn.getControlValue("vSNOBRCORPOPROVA") ;
      this.AV25MsgErro=gx.fn.getControlValue("vMSGERRO") ;
      this.AV17FilialPadrao=gx.fn.getControlValue("vFILIALPADRAO") ;
      this.AV16ErroFilial=gx.fn.getIntegerValue("vERROFILIAL",'.') ;
      this.A11572PedidoCPCQtdeBombeado=gx.fn.getDecimalValue("PEDIDOCPCQTDEBOMBEADO",'.',',') ;
      this.A11360PedidoCPCHoSaidaUsina=gx.fn.getControlValue("PEDIDOCPCHOSAIDAUSINA") ;
      this.A11365PedidoCPCHoChegadaObra=gx.fn.getControlValue("PEDIDOCPCHOCHEGADAOBRA") ;
      this.A11361PedidoCPCHoSaidaObra=gx.fn.getControlValue("PEDIDOCPCHOSAIDAOBRA") ;
      this.A11362PedidoCPCHoChegadaUsina=gx.fn.getControlValue("PEDIDOCPCHOCHEGADAUSINA") ;
      this.A11467PedidoCPCDataHoraAlt=gx.fn.getDateTimeValue("PEDIDOCPCDATAHORAALT") ;
      this.A11468PedidoCPCUsuarioAlt=gx.fn.getControlValue("PEDIDOCPCUSUARIOALT") ;
      this.A11451PedidoCPCTipoConcretoEmpresaId=gx.fn.getControlValue("PEDIDOCPCTIPOCONCRETOEMPRESAID") ;
      this.A11342PedidoCPCSaidaId=gx.fn.getIntegerValue("PEDIDOCPCSAIDAID",'.') ;
      this.A11317ObraPessoaEmpresaId=gx.fn.getControlValue("OBRAPESSOAEMPRESAID") ;
      this.A11662PedidoCPCSaidaSerie=gx.fn.getControlValue("PEDIDOCPCSAIDASERIE") ;
      this.A11663PedidoCPCSaidaNoDocumento=gx.fn.getIntegerValue("PEDIDOCPCSAIDANODOCUMENTO",'.') ;
      this.A11444PedidoCPCOBraRazaoSocial=gx.fn.getControlValue("PEDIDOCPCOBRARAZAOSOCIAL") ;
      this.AV54Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV53Pgmname=gx.fn.getControlValue("vPGMNAME") ;
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
   this.Valid_Pedidocpcempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocpcdata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCDATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocpcobracodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCOBRACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocpcobrapessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCOBRAPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocpcbetoneiracodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCBETONEIRACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocpcmotoristacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCMOTORISTACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocpcmotoristanome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCMOTORISTANOME");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A11369PedidoCPCMotoristaNome) )
            {
               this.A11369PedidoCPCMotoristaNome =  gx.text.substring( this.A11369PedidoCPCMotoristaNome, 1, 25)  ;
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
   this.Valid_Pedidocpctipoconcretocodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pedidocpctipoconcretocodigo",["gx.O.A11451PedidoCPCTipoConcretoEmpresaId", "gx.O.A11349PedidoCPCTipoConcretoCodigo", "gx.O.A11344PedidoCPCObraCodigo", "gx.O.A11373PedidoCPCTipoConcretoDesc"],["A11373PedidoCPCTipoConcretoDesc"]);
      return true;
   }
   this.Valid_Pedidocpcqtcorpoprova=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCQTCORPOPROVA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocpcqtdeconcreto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCQTDECONCRETO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocpcvalorconcreto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCVALORCONCRETO");
         this.AnyError  = 0;
         try {
            this.A11405PedidoCPCTotal =  ( this.A11367PedidoCPCQtdeConcreto * this.A11356PedidoCPCValorConcreto ) + this.A11541PedidoCPCValorM3faltante  ;
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
   this.Valid_Pedidocpctiposimplesrem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCTIPOSIMPLESREM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e14gh841_client=function()
   {
      this.executeServerEvent("PROMPT_11349.GXPROMPT", true, null, false, true);
   };
   this.e12gh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13gh2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e15gh841_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16gh841_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,27,29,34,36,37,39,41,45,46,50,52,53,57,59,60,64,66,70,72,78,81,83,84,86,88,91,93,96,99,101,106,108,109,114,116,129,130,131,132,133,135,137,138,139,140];
   this.GXLastCtrlId =140;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE16",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcano,isvalid:null,rgrid:[],fld:"PEDIDOCPCANO",gxz:"Z11339PedidoCPCAno",gxold:"O11339PedidoCPCAno",gxvar:"A11339PedidoCPCAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11339PedidoCPCAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11339PedidoCPCAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCANO",gx.O.A11339PedidoCPCAno,0)},c2v:function(){gx.O.A11339PedidoCPCAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCANO",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcnumero,isvalid:null,rgrid:[],fld:"PEDIDOCPCNUMERO",gxz:"Z11340PedidoCPCNumero",gxold:"O11340PedidoCPCNumero",gxvar:"A11340PedidoCPCNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11340PedidoCPCNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11340PedidoCPCNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCNUMERO",gx.O.A11340PedidoCPCNumero,0)},c2v:function(){gx.O.A11340PedidoCPCNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcdata,isvalid:null,rgrid:[],fld:"PEDIDOCPCDATA",gxz:"Z11353PedidoCPCData",gxold:"O11353PedidoCPCData",gxvar:"A11353PedidoCPCData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11353PedidoCPCData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11353PedidoCPCData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCDATA",gx.O.A11353PedidoCPCData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11353PedidoCPCData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PEDIDOCPCDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcobracodigo,isvalid:null,rgrid:[],fld:"PEDIDOCPCOBRACODIGO",gxz:"Z11344PedidoCPCObraCodigo",gxold:"O11344PedidoCPCObraCodigo",gxvar:"A11344PedidoCPCObraCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11344PedidoCPCObraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11344PedidoCPCObraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCOBRACODIGO",gx.O.A11344PedidoCPCObraCodigo,0)},c2v:function(){gx.O.A11344PedidoCPCObraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCOBRACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCOBRANOME",gxz:"Z11371PedidoCPCObraNome",gxold:"O11371PedidoCPCObraNome",gxvar:"A11371PedidoCPCObraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11371PedidoCPCObraNome=Value},v2z:function(Value){gx.O.Z11371PedidoCPCObraNome=Value},v2c:function(){gx.fn.setControlValue("PEDIDOCPCOBRANOME",gx.O.A11371PedidoCPCObraNome,0)},c2v:function(){gx.O.A11371PedidoCPCObraNome=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCOBRANOME")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCOBSERVACAO",gxz:"Z11359PedidoCPCObservacao",gxold:"O11359PedidoCPCObservacao",gxvar:"A11359PedidoCPCObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11359PedidoCPCObservacao=Value},v2z:function(Value){gx.O.Z11359PedidoCPCObservacao=Value},v2c:function(){gx.fn.setControlValue("PEDIDOCPCOBSERVACAO",gx.O.A11359PedidoCPCObservacao,0)},c2v:function(){gx.O.A11359PedidoCPCObservacao=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcobrapessoaid,isvalid:null,rgrid:[],fld:"PEDIDOCPCOBRAPESSOAID",gxz:"Z11364PedidoCPCObraPessoaId",gxold:"O11364PedidoCPCObraPessoaId",gxvar:"A11364PedidoCPCObraPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11364PedidoCPCObraPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11364PedidoCPCObraPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCOBRAPESSOAID",gx.O.A11364PedidoCPCObraPessoaId,0)},c2v:function(){gx.O.A11364PedidoCPCObraPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCOBRAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCOBRAFANTASIA",gxz:"Z11375PedidoCPCObraFantasia",gxold:"O11375PedidoCPCObraFantasia",gxvar:"A11375PedidoCPCObraFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11375PedidoCPCObraFantasia=Value},v2z:function(Value){gx.O.Z11375PedidoCPCObraFantasia=Value},v2c:function(){gx.fn.setControlValue("PEDIDOCPCOBRAFANTASIA",gx.O.A11375PedidoCPCObraFantasia,0)},c2v:function(){gx.O.A11375PedidoCPCObraFantasia=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCOBRAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcbetoneiracodigo,isvalid:null,rgrid:[],fld:"PEDIDOCPCBETONEIRACODIGO",gxz:"Z11346PedidoCPCBetoneiraCodigo",gxold:"O11346PedidoCPCBetoneiraCodigo",gxvar:"A11346PedidoCPCBetoneiraCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11346PedidoCPCBetoneiraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11346PedidoCPCBetoneiraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCBETONEIRACODIGO",gx.O.A11346PedidoCPCBetoneiraCodigo,0)},c2v:function(){gx.O.A11346PedidoCPCBetoneiraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCBETONEIRACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCBETONEIRAPLACA",gxz:"Z11370PedidoCPCBetoneiraPlaca",gxold:"O11370PedidoCPCBetoneiraPlaca",gxvar:"A11370PedidoCPCBetoneiraPlaca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11370PedidoCPCBetoneiraPlaca=Value},v2z:function(Value){gx.O.Z11370PedidoCPCBetoneiraPlaca=Value},v2c:function(){gx.fn.setControlValue("PEDIDOCPCBETONEIRAPLACA",gx.O.A11370PedidoCPCBetoneiraPlaca,0)},c2v:function(){gx.O.A11370PedidoCPCBetoneiraPlaca=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCBETONEIRAPLACA")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcmotoristacodigo,isvalid:null,rgrid:[],fld:"PEDIDOCPCMOTORISTACODIGO",gxz:"Z11348PedidoCPCMotoristaCodigo",gxold:"O11348PedidoCPCMotoristaCodigo",gxvar:"A11348PedidoCPCMotoristaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11348PedidoCPCMotoristaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11348PedidoCPCMotoristaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCMOTORISTACODIGO",gx.O.A11348PedidoCPCMotoristaCodigo,0)},c2v:function(){gx.O.A11348PedidoCPCMotoristaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCMOTORISTACODIGO",'.')},nac:function(){return (this.Gx_mode == 'UPD')}};
   GXValidFnc[60]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcmotoristanome,isvalid:null,rgrid:[],fld:"PEDIDOCPCMOTORISTANOME",gxz:"Z11369PedidoCPCMotoristaNome",gxold:"O11369PedidoCPCMotoristaNome",gxvar:"A11369PedidoCPCMotoristaNome",ucs:[],op:[60],ip:[60],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11369PedidoCPCMotoristaNome=Value},v2z:function(Value){gx.O.Z11369PedidoCPCMotoristaNome=Value},v2c:function(){gx.fn.setControlValue("PEDIDOCPCMOTORISTANOME",gx.O.A11369PedidoCPCMotoristaNome,0)},c2v:function(){gx.O.A11369PedidoCPCMotoristaNome=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCMOTORISTANOME")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCNUMEROLACRE",gxz:"Z11358PedidoCPCNumeroLacre",gxold:"O11358PedidoCPCNumeroLacre",gxvar:"A11358PedidoCPCNumeroLacre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11358PedidoCPCNumeroLacre=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11358PedidoCPCNumeroLacre=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCNUMEROLACRE",gx.O.A11358PedidoCPCNumeroLacre,0)},c2v:function(){gx.O.A11358PedidoCPCNumeroLacre=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCNUMEROLACRE",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCQTASSENTAMENTO",gxz:"Z11368PedidoCPCQtAssentamento",gxold:"O11368PedidoCPCQtAssentamento",gxvar:"A11368PedidoCPCQtAssentamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11368PedidoCPCQtAssentamento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11368PedidoCPCQtAssentamento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCQTASSENTAMENTO",gx.O.A11368PedidoCPCQtAssentamento,0)},c2v:function(){gx.O.A11368PedidoCPCQtAssentamento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCQTASSENTAMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TABLE4",grid:0};
   GXValidFnc[81]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpctipoconcretocodigo,isvalid:null,rgrid:[],fld:"PEDIDOCPCTIPOCONCRETOCODIGO",gxz:"Z11349PedidoCPCTipoConcretoCodigo",gxold:"O11349PedidoCPCTipoConcretoCodigo",gxvar:"A11349PedidoCPCTipoConcretoCodigo",ucs:[],op:[83,36,84],ip:[84,36,83],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11349PedidoCPCTipoConcretoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11349PedidoCPCTipoConcretoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCTIPOCONCRETOCODIGO",gx.O.A11349PedidoCPCTipoConcretoCodigo,0)},c2v:function(){gx.O.A11349PedidoCPCTipoConcretoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCTIPOCONCRETOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCTIPOCONCRETODESC",gxz:"Z11373PedidoCPCTipoConcretoDesc",gxold:"O11373PedidoCPCTipoConcretoDesc",gxvar:"A11373PedidoCPCTipoConcretoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11373PedidoCPCTipoConcretoDesc=Value},v2z:function(Value){gx.O.Z11373PedidoCPCTipoConcretoDesc=Value},v2c:function(){gx.fn.setControlValue("PEDIDOCPCTIPOCONCRETODESC",gx.O.A11373PedidoCPCTipoConcretoDesc,0)},c2v:function(){gx.O.A11373PedidoCPCTipoConcretoDesc=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCTIPOCONCRETODESC")},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcqtcorpoprova,isvalid:null,rgrid:[],fld:"PEDIDOCPCQTCORPOPROVA",gxz:"Z11363PedidoCPCQtCorpoProva",gxold:"O11363PedidoCPCQtCorpoProva",gxvar:"A11363PedidoCPCQtCorpoProva",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11363PedidoCPCQtCorpoProva=Value},v2z:function(Value){gx.O.Z11363PedidoCPCQtCorpoProva=Value},v2c:function(){gx.fn.setComboBoxValue("PEDIDOCPCQTCORPOPROVA",gx.O.A11363PedidoCPCQtCorpoProva)},c2v:function(){gx.O.A11363PedidoCPCQtCorpoProva=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCQTCORPOPROVA")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"decimal",len:9,dec:3,sign:false,pic:"ZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcqtdeconcreto,isvalid:null,rgrid:[],fld:"PEDIDOCPCQTDECONCRETO",gxz:"Z11367PedidoCPCQtdeConcreto",gxold:"O11367PedidoCPCQtdeConcreto",gxvar:"A11367PedidoCPCQtdeConcreto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11367PedidoCPCQtdeConcreto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11367PedidoCPCQtdeConcreto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PEDIDOCPCQTDECONCRETO",gx.O.A11367PedidoCPCQtdeConcreto,3,',')},c2v:function(){gx.O.A11367PedidoCPCQtdeConcreto=this.val()},val:function(){return gx.fn.getDecimalValue("PEDIDOCPCQTDECONCRETO",'.',',')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPRIMIRPEDIDO",gxz:"ZV51SnImprimirPedido",gxold:"OV51SnImprimirPedido",gxvar:"AV51SnImprimirPedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV51SnImprimirPedido=Value},v2z:function(Value){gx.O.ZV51SnImprimirPedido=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPRIMIRPEDIDO",gx.O.AV51SnImprimirPedido,"S")},c2v:function(){gx.O.AV51SnImprimirPedido=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPRIMIRPEDIDO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[99]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcvalorconcreto,isvalid:null,rgrid:[],fld:"PEDIDOCPCVALORCONCRETO",gxz:"Z11356PedidoCPCValorConcreto",gxold:"O11356PedidoCPCValorConcreto",gxvar:"A11356PedidoCPCValorConcreto",ucs:[],op:[109],ip:[109,101,93],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11356PedidoCPCValorConcreto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11356PedidoCPCValorConcreto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PEDIDOCPCVALORCONCRETO",gx.O.A11356PedidoCPCValorConcreto,2,',')},c2v:function(){gx.O.A11356PedidoCPCValorConcreto=this.val()},val:function(){return gx.fn.getDecimalValue("PEDIDOCPCVALORCONCRETO",'.',',')},nac:gx.falseFn};
   GXValidFnc[106]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV49ValorTotal",gxold:"OV49ValorTotal",gxvar:"AV49ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49ValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV49ValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTAL",gx.O.AV49ValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV49ValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 108 , function() {
   });
   GXValidFnc[109]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCTOTAL",gxz:"Z11405PedidoCPCTotal",gxold:"O11405PedidoCPCTotal",gxvar:"A11405PedidoCPCTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11405PedidoCPCTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11405PedidoCPCTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PEDIDOCPCTOTAL",gx.O.A11405PedidoCPCTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11405PedidoCPCTotal=this.val()},val:function(){return gx.fn.getDecimalValue("PEDIDOCPCTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[114]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpctiposimplesrem,isvalid:null,rgrid:[],fld:"PEDIDOCPCTIPOSIMPLESREM",gxz:"Z11366PedidoCPCTipoSimplesRem",gxold:"O11366PedidoCPCTipoSimplesRem",gxvar:"A11366PedidoCPCTipoSimplesRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11366PedidoCPCTipoSimplesRem=Value},v2z:function(Value){gx.O.Z11366PedidoCPCTipoSimplesRem=Value},v2c:function(){gx.fn.setComboBoxValue("PEDIDOCPCTIPOSIMPLESREM",gx.O.A11366PedidoCPCTipoSimplesRem)},c2v:function(){gx.O.A11366PedidoCPCTipoSimplesRem=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCTIPOSIMPLESREM")},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[130]={fld:"JS", format:2,grid:0};
   GXValidFnc[131]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV13EmpresaPadrao",gxold:"OV13EmpresaPadrao",gxvar:"AV13EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV13EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV13EmpresaPadrao,0)},c2v:function(){gx.O.AV13EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV31Qtde",gxold:"OV31Qtde",gxvar:"AV31Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Qtde=Value},v2z:function(Value){gx.O.ZV31Qtde=Value},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV31Qtde,0)},c2v:function(){gx.O.AV31Qtde=this.val()},val:function(){return gx.fn.getControlValue("vQTDE")},nac:gx.falseFn};
   GXValidFnc[133]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcempresaid,isvalid:null,rgrid:[],fld:"PEDIDOCPCEMPRESAID",gxz:"Z11450PedidoCPCEmpresaId",gxold:"O11450PedidoCPCEmpresaId",gxvar:"A11450PedidoCPCEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11450PedidoCPCEmpresaId=Value},v2z:function(Value){gx.O.Z11450PedidoCPCEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PEDIDOCPCEMPRESAID",gx.O.A11450PedidoCPCEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11450PedidoCPCEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 133 , function() {
   });
   GXValidFnc[135]={fld:"BTNHELP",grid:0};
   GXValidFnc[137]={fld:"PROMPT_11344",grid:841};
   GXValidFnc[138]={fld:"PROMPT_11346",grid:841};
   GXValidFnc[139]={fld:"PROMPT_11348",grid:841};
   GXValidFnc[140]={fld:"PROMPT_11349",grid:841};
   this.A11339PedidoCPCAno = 0 ;
   this.Z11339PedidoCPCAno = 0 ;
   this.O11339PedidoCPCAno = 0 ;
   this.A11340PedidoCPCNumero = 0 ;
   this.Z11340PedidoCPCNumero = 0 ;
   this.O11340PedidoCPCNumero = 0 ;
   this.A11353PedidoCPCData = gx.date.nullDate() ;
   this.Z11353PedidoCPCData = gx.date.nullDate() ;
   this.O11353PedidoCPCData = gx.date.nullDate() ;
   this.A11344PedidoCPCObraCodigo = 0 ;
   this.Z11344PedidoCPCObraCodigo = 0 ;
   this.O11344PedidoCPCObraCodigo = 0 ;
   this.A11371PedidoCPCObraNome = "" ;
   this.Z11371PedidoCPCObraNome = "" ;
   this.O11371PedidoCPCObraNome = "" ;
   this.A11359PedidoCPCObservacao = "" ;
   this.Z11359PedidoCPCObservacao = "" ;
   this.O11359PedidoCPCObservacao = "" ;
   this.A11364PedidoCPCObraPessoaId = 0 ;
   this.Z11364PedidoCPCObraPessoaId = 0 ;
   this.O11364PedidoCPCObraPessoaId = 0 ;
   this.A11375PedidoCPCObraFantasia = "" ;
   this.Z11375PedidoCPCObraFantasia = "" ;
   this.O11375PedidoCPCObraFantasia = "" ;
   this.A11346PedidoCPCBetoneiraCodigo = 0 ;
   this.Z11346PedidoCPCBetoneiraCodigo = 0 ;
   this.O11346PedidoCPCBetoneiraCodigo = 0 ;
   this.A11370PedidoCPCBetoneiraPlaca = "" ;
   this.Z11370PedidoCPCBetoneiraPlaca = "" ;
   this.O11370PedidoCPCBetoneiraPlaca = "" ;
   this.A11348PedidoCPCMotoristaCodigo = 0 ;
   this.Z11348PedidoCPCMotoristaCodigo = 0 ;
   this.O11348PedidoCPCMotoristaCodigo = 0 ;
   this.A11369PedidoCPCMotoristaNome = "" ;
   this.Z11369PedidoCPCMotoristaNome = "" ;
   this.O11369PedidoCPCMotoristaNome = "" ;
   this.A11358PedidoCPCNumeroLacre = 0 ;
   this.Z11358PedidoCPCNumeroLacre = 0 ;
   this.O11358PedidoCPCNumeroLacre = 0 ;
   this.A11368PedidoCPCQtAssentamento = 0 ;
   this.Z11368PedidoCPCQtAssentamento = 0 ;
   this.O11368PedidoCPCQtAssentamento = 0 ;
   this.A11349PedidoCPCTipoConcretoCodigo = 0 ;
   this.Z11349PedidoCPCTipoConcretoCodigo = 0 ;
   this.O11349PedidoCPCTipoConcretoCodigo = 0 ;
   this.A11373PedidoCPCTipoConcretoDesc = "" ;
   this.Z11373PedidoCPCTipoConcretoDesc = "" ;
   this.O11373PedidoCPCTipoConcretoDesc = "" ;
   this.A11363PedidoCPCQtCorpoProva = "" ;
   this.Z11363PedidoCPCQtCorpoProva = "" ;
   this.O11363PedidoCPCQtCorpoProva = "" ;
   this.A11367PedidoCPCQtdeConcreto = 0 ;
   this.Z11367PedidoCPCQtdeConcreto = 0 ;
   this.O11367PedidoCPCQtdeConcreto = 0 ;
   this.AV51SnImprimirPedido = "" ;
   this.ZV51SnImprimirPedido = "" ;
   this.OV51SnImprimirPedido = "" ;
   this.A11356PedidoCPCValorConcreto = 0 ;
   this.Z11356PedidoCPCValorConcreto = 0 ;
   this.O11356PedidoCPCValorConcreto = 0 ;
   this.AV49ValorTotal = 0 ;
   this.ZV49ValorTotal = 0 ;
   this.OV49ValorTotal = 0 ;
   this.A11405PedidoCPCTotal = 0 ;
   this.Z11405PedidoCPCTotal = 0 ;
   this.O11405PedidoCPCTotal = 0 ;
   this.A11366PedidoCPCTipoSimplesRem = "" ;
   this.Z11366PedidoCPCTipoSimplesRem = "" ;
   this.O11366PedidoCPCTipoSimplesRem = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV13EmpresaPadrao = "" ;
   this.ZV13EmpresaPadrao = "" ;
   this.OV13EmpresaPadrao = "" ;
   this.AV31Qtde = "" ;
   this.ZV31Qtde = "" ;
   this.OV31Qtde = "" ;
   this.A11450PedidoCPCEmpresaId = "" ;
   this.Z11450PedidoCPCEmpresaId = "" ;
   this.O11450PedidoCPCEmpresaId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A11317ObraPessoaEmpresaId = "" ;
   this.AV45UsrCod = "" ;
   this.AV12EmpresaLogadaId = "" ;
   this.AV34Sistema = "" ;
   this.AV53Pgmname = "" ;
   this.AV54Pgmdesc = "" ;
   this.AV25MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV23Modulo = "" ;
   this.AV21Logon = {} ;
   this.AV40Tabela = "" ;
   this.AV13EmpresaPadrao = "" ;
   this.AV17FilialPadrao = "" ;
   this.AV16ErroFilial = 0 ;
   this.AV39SnPedClienteSus = "" ;
   this.AV38SnPedClienteCan = "" ;
   this.AV36SnConsLimCred = "" ;
   this.AV44TrnCpcNfe = "" ;
   this.AV43TrnCpcEstoque = "" ;
   this.AV52SnObrCorpoProva = "" ;
   this.AV35SnAlterou = "" ;
   this.AV49ValorTotal = 0 ;
   this.AV14Entrada = [ ] ;
   this.AV32Saida = [ ] ;
   this.AV31Qtde = "" ;
   this.AV28PedidoCPCAno = 0 ;
   this.AV30PedidoCPCNumero = 0 ;
   this.A11450PedidoCPCEmpresaId = "" ;
   this.A11339PedidoCPCAno = 0 ;
   this.A11340PedidoCPCNumero = 0 ;
   this.A11353PedidoCPCData = gx.date.nullDate() ;
   this.A11354PedidoCPCSituacao = "" ;
   this.A11369PedidoCPCMotoristaNome = "" ;
   this.A11345PedidoCPCBetoneiraEmpresaId = "" ;
   this.A11347PedidoCPCMotoristaEmpresaId = "" ;
   this.A11343PedidoCPCObraEmpresaId = "" ;
   this.A11341PedidoCPCSaidaEmpresaId = "" ;
   this.AV15Erro = 0 ;
   this.A11405PedidoCPCTotal = 0 ;
   this.A11348PedidoCPCMotoristaCodigo = 0 ;
   this.A11346PedidoCPCBetoneiraCodigo = 0 ;
   this.A11370PedidoCPCBetoneiraPlaca = "" ;
   this.A11451PedidoCPCTipoConcretoEmpresaId = "" ;
   this.A11349PedidoCPCTipoConcretoCodigo = 0 ;
   this.A11373PedidoCPCTipoConcretoDesc = "" ;
   this.A11344PedidoCPCObraCodigo = 0 ;
   this.A11371PedidoCPCObraNome = "" ;
   this.A11364PedidoCPCObraPessoaId = 0 ;
   this.A11375PedidoCPCObraFantasia = "" ;
   this.A11444PedidoCPCOBraRazaoSocial = "" ;
   this.A11342PedidoCPCSaidaId = 0 ;
   this.A11662PedidoCPCSaidaSerie = "" ;
   this.A11663PedidoCPCSaidaNoDocumento = 0 ;
   this.A11367PedidoCPCQtdeConcreto = 0 ;
   this.A11356PedidoCPCValorConcreto = 0 ;
   this.A11572PedidoCPCQtdeBombeado = 0 ;
   this.A11358PedidoCPCNumeroLacre = 0 ;
   this.A11368PedidoCPCQtAssentamento = 0 ;
   this.A11359PedidoCPCObservacao = "" ;
   this.A11360PedidoCPCHoSaidaUsina = "" ;
   this.A11365PedidoCPCHoChegadaObra = "" ;
   this.A11361PedidoCPCHoSaidaObra = "" ;
   this.A11362PedidoCPCHoChegadaUsina = "" ;
   this.A11363PedidoCPCQtCorpoProva = "" ;
   this.A11366PedidoCPCTipoSimplesRem = "" ;
   this.A11541PedidoCPCValorM3faltante = 0 ;
   this.A11467PedidoCPCDataHoraAlt = gx.date.nullDate() ;
   this.A11468PedidoCPCUsuarioAlt = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e14gh841_client": ["PROMPT_11349.GXPROMPT", true] ,"e12gh2_client": ["'FECHAR'", true] ,"e13gh2_client": ["AFTER TRN", true] ,"e15gh841_client": ["ENTER", true] ,"e16gh841_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV28PedidoCPCAno',fld:'vPEDIDOCPCANO'},{av:'AV30PedidoCPCNumero',fld:'vPEDIDOCPCNUMERO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_11344", [36]);
   this.setPrompt("PROMPT_11346", [52]);
   this.setPrompt("PROMPT_11348", [59]);
   this.setPrompt("PROMPT_11349", [83]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A11541PedidoCPCValorM3faltante", "PEDIDOCPCVALORM3FALTANTE", 0, "decimal");
   this.setVCMap("AV28PedidoCPCAno", "vPEDIDOCPCANO", 0, "int");
   this.setVCMap("AV30PedidoCPCNumero", "vPEDIDOCPCNUMERO", 0, "int");
   this.setVCMap("A11354PedidoCPCSituacao", "PEDIDOCPCSITUACAO", 0, "char");
   this.setVCMap("A11345PedidoCPCBetoneiraEmpresaId", "PEDIDOCPCBETONEIRAEMPRESAID", 0, "char");
   this.setVCMap("A11347PedidoCPCMotoristaEmpresaId", "PEDIDOCPCMOTORISTAEMPRESAID", 0, "char");
   this.setVCMap("A11343PedidoCPCObraEmpresaId", "PEDIDOCPCOBRAEMPRESAID", 0, "char");
   this.setVCMap("A11341PedidoCPCSaidaEmpresaId", "PEDIDOCPCSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV39SnPedClienteSus", "vSNPEDCLIENTESUS", 0, "char");
   this.setVCMap("AV38SnPedClienteCan", "vSNPEDCLIENTECAN", 0, "char");
   this.setVCMap("AV15Erro", "vERRO", 0, "int");
   this.setVCMap("AV44TrnCpcNfe", "vTRNCPCNFE", 0, "char");
   this.setVCMap("AV43TrnCpcEstoque", "vTRNCPCESTOQUE", 0, "char");
   this.setVCMap("AV52SnObrCorpoProva", "vSNOBRCORPOPROVA", 0, "char");
   this.setVCMap("AV25MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV17FilialPadrao", "vFILIALPADRAO", 0, "char");
   this.setVCMap("AV16ErroFilial", "vERROFILIAL", 0, "int");
   this.setVCMap("A11572PedidoCPCQtdeBombeado", "PEDIDOCPCQTDEBOMBEADO", 0, "decimal");
   this.setVCMap("A11360PedidoCPCHoSaidaUsina", "PEDIDOCPCHOSAIDAUSINA", 0, "char");
   this.setVCMap("A11365PedidoCPCHoChegadaObra", "PEDIDOCPCHOCHEGADAOBRA", 0, "char");
   this.setVCMap("A11361PedidoCPCHoSaidaObra", "PEDIDOCPCHOSAIDAOBRA", 0, "char");
   this.setVCMap("A11362PedidoCPCHoChegadaUsina", "PEDIDOCPCHOCHEGADAUSINA", 0, "char");
   this.setVCMap("A11467PedidoCPCDataHoraAlt", "PEDIDOCPCDATAHORAALT", 0, "dtime");
   this.setVCMap("A11468PedidoCPCUsuarioAlt", "PEDIDOCPCUSUARIOALT", 0, "char");
   this.setVCMap("A11451PedidoCPCTipoConcretoEmpresaId", "PEDIDOCPCTIPOCONCRETOEMPRESAID", 0, "char");
   this.setVCMap("A11342PedidoCPCSaidaId", "PEDIDOCPCSAIDAID", 0, "int");
   this.setVCMap("A11317ObraPessoaEmpresaId", "OBRAPESSOAEMPRESAID", 0, "char");
   this.setVCMap("A11662PedidoCPCSaidaSerie", "PEDIDOCPCSAIDASERIE", 0, "char");
   this.setVCMap("A11663PedidoCPCSaidaNoDocumento", "PEDIDOCPCSAIDANODOCUMENTO", 0, "int");
   this.setVCMap("A11444PedidoCPCOBraRazaoSocial", "PEDIDOCPCOBRARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("AV54Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV53Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tpedidocpc());
