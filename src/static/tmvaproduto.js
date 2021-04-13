/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:47:22.53
*/
gx.evt.autoSkip = false;
gx.define('tmvaproduto', false, function () {
   this.ServerClass =  "tmvaproduto" ;
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
      this.AV18ProdutoId=gx.fn.getIntegerValue("vPRODUTOID",'.') ;
      this.AV20MVAProdutoUF=gx.fn.getControlValue("vMVAPRODUTOUF") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.AV21SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23LogProdutoEmpresaId=gx.fn.getControlValue("vLOGPRODUTOEMPRESAID") ;
      this.AV24LogProdutoId=gx.fn.getIntegerValue("vLOGPRODUTOID",'.') ;
      this.AV25LogMVAProdutoUF=gx.fn.getControlValue("vLOGMVAPRODUTOUF") ;
      this.A5508MVAProdutoAliquotaST=gx.fn.getDecimalValue("MVAPRODUTOALIQUOTAST",'.',',') ;
      this.A5507MVaProdutoPCReducaoST=gx.fn.getDecimalValue("MVAPRODUTOPCREDUCAOST",'.',',') ;
      this.AV22lMVAProdutos=gx.fn.getControlValue("vLMVAPRODUTOS") ;
      this.AV26LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV28Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Produtoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Produtoid",["gx.O.Gx_mode", "gx.O.O2960ProdutoDescricao", "gx.O.A2964ProdutoEmpresaId", "gx.O.A2965ProdutoId", "gx.O.A2960ProdutoDescricao", "gx.O.AV19ProdutoDescricao"],["O2960ProdutoDescricao", "A2960ProdutoDescricao", "AV19ProdutoDescricao", ["AV22lMVAProdutos","Aprodutodescricao"]]);
      return true;
   }
   this.Valid_Mvaprodutouf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MVAPRODUTOUF");
         this.AnyError  = 0;
         if ( ! ( this.A3690MVAProdutoUF == "" || this.A3690MVAProdutoUF == "99" || this.A3690MVAProdutoUF == "AC" || this.A3690MVAProdutoUF == "AL" || this.A3690MVAProdutoUF == "AP" || this.A3690MVAProdutoUF == "AM" || this.A3690MVAProdutoUF == "BA" || this.A3690MVAProdutoUF == "CE" || this.A3690MVAProdutoUF == "DF" || this.A3690MVAProdutoUF == "ES" || this.A3690MVAProdutoUF == "GO" || this.A3690MVAProdutoUF == "MA" || this.A3690MVAProdutoUF == "MT" || this.A3690MVAProdutoUF == "MS" || this.A3690MVAProdutoUF == "MG" || this.A3690MVAProdutoUF == "PA" || this.A3690MVAProdutoUF == "PB" || this.A3690MVAProdutoUF == "PR" || this.A3690MVAProdutoUF == "PE" || this.A3690MVAProdutoUF == "PI" || this.A3690MVAProdutoUF == "RJ" || this.A3690MVAProdutoUF == "RN" || this.A3690MVAProdutoUF == "RS" || this.A3690MVAProdutoUF == "RO" || this.A3690MVAProdutoUF == "RR" || this.A3690MVAProdutoUF == "SC" || this.A3690MVAProdutoUF == "SP" || this.A3690MVAProdutoUF == "SE" || this.A3690MVAProdutoUF == "TO" ) )
         {
            try {
               gxballoon.setError("Campo UF da MVA fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (""==this.A3690MVAProdutoUF) )
         {
            try {
               gxballoon.setError("Informe a UF");
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
   this.Valid_Mvaprodutopcmargem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MVAPRODUTOPCMARGEM");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( (0.0==this.A3686MVAProdutoPcMargem) )
         {
            try {
               gxballoon.setError("Informe o Percentual de MVA");
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
   this.Valid_Mvaprodutopccargatributaria=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MVAPRODUTOPCCARGATRIBUTARIA");
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
   this.Valid_Mvaprodutoajustado=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MVAPRODUTOAJUSTADO");
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
   this.Valid_Produtodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRODUTODESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12712_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13712_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1471392_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1571392_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,24,26,29,31,35,38,41,43,45,54,55,56,58];
   this.GXLastCtrlId =58;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Produtoid,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[15,56],ip:[15,56,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PRODUTOID",gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV19ProdutoDescricao",gxold:"OV19ProdutoDescricao",gxvar:"AV19ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV19ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV19ProdutoDescricao,0)},c2v:function(){gx.O.AV19ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mvaprodutouf,isvalid:null,rgrid:[],fld:"MVAPRODUTOUF",gxz:"Z3690MVAProdutoUF",gxold:"O3690MVAProdutoUF",gxvar:"A3690MVAProdutoUF",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3690MVAProdutoUF=Value},v2z:function(Value){gx.O.Z3690MVAProdutoUF=Value},v2c:function(){gx.fn.setComboBoxValue("MVAPRODUTOUF",gx.O.A3690MVAProdutoUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3690MVAProdutoUF=this.val()},val:function(){return gx.fn.getControlValue("MVAPRODUTOUF")},nac:function(){return !(""==this.AV20MVAProdutoUF)}};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mvaprodutopcmargem,isvalid:null,rgrid:[],fld:"MVAPRODUTOPCMARGEM",gxz:"Z3686MVAProdutoPcMargem",gxold:"O3686MVAProdutoPcMargem",gxvar:"A3686MVAProdutoPcMargem",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3686MVAProdutoPcMargem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3686MVAProdutoPcMargem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MVAPRODUTOPCMARGEM",gx.O.A3686MVAProdutoPcMargem,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3686MVAProdutoPcMargem=this.val()},val:function(){return gx.fn.getDecimalValue("MVAPRODUTOPCMARGEM",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mvaprodutopccargatributaria,isvalid:null,rgrid:[],fld:"MVAPRODUTOPCCARGATRIBUTARIA",gxz:"Z11309MVAProdutoPcCargaTributaria",gxold:"O11309MVAProdutoPcCargaTributaria",gxvar:"A11309MVAProdutoPcCargaTributaria",ucs:[],op:[],ip:[31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11309MVAProdutoPcCargaTributaria=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11309MVAProdutoPcCargaTributaria=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MVAPRODUTOPCCARGATRIBUTARIA",gx.O.A11309MVAProdutoPcCargaTributaria,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11309MVAProdutoPcCargaTributaria=this.val()},val:function(){return gx.fn.getDecimalValue("MVAPRODUTOPCCARGATRIBUTARIA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mvaprodutoajustado,isvalid:null,rgrid:[],fld:"MVAPRODUTOAJUSTADO",gxz:"Z3687MVAProdutoAjustado",gxold:"O3687MVAProdutoAjustado",gxvar:"A3687MVAProdutoAjustado",ucs:[],op:[],ip:[35],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3687MVAProdutoAjustado=Value},v2z:function(Value){gx.O.Z3687MVAProdutoAjustado=Value},v2c:function(){gx.fn.setCheckBoxValue("MVAPRODUTOAJUSTADO",gx.O.A3687MVAProdutoAjustado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3687MVAProdutoAjustado=this.val()},val:function(){return gx.fn.getControlValue("MVAPRODUTOAJUSTADO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MVAPRODUTOUSUARIOALT",gxz:"Z3688MVAProdutoUsuarioAlt",gxold:"O3688MVAProdutoUsuarioAlt",gxvar:"A3688MVAProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3688MVAProdutoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3688MVAProdutoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MVAPRODUTOUSUARIOALT",gx.O.A3688MVAProdutoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3688MVAProdutoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MVAPRODUTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MVAPRODUTODATAHORAALT",gxz:"Z3689MVAProdutoDataHoraAlt",gxold:"O3689MVAProdutoDataHoraAlt",gxvar:"A3689MVAProdutoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3689MVAProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3689MVAProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MVAPRODUTODATAHORAALT",gx.O.A3689MVAProdutoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3689MVAProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MVAPRODUTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[54]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"JS", format:2,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Produtodescricao,isvalid:null,rgrid:[],fld:"PRODUTODESCRICAO",gxz:"Z2960ProdutoDescricao",gxold:"O2960ProdutoDescricao",gxvar:"A2960ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2960ProdutoDescricao=Value},v2z:function(Value){gx.O.Z2960ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("PRODUTODESCRICAO",gx.O.A2960ProdutoDescricao,0)},c2v:function(){gx.O.A2960ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("PRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"BTNHELP",grid:0};
   this.A2965ProdutoId = 0 ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.AV19ProdutoDescricao = "" ;
   this.ZV19ProdutoDescricao = "" ;
   this.OV19ProdutoDescricao = "" ;
   this.A3690MVAProdutoUF = "" ;
   this.Z3690MVAProdutoUF = "" ;
   this.O3690MVAProdutoUF = "" ;
   this.A3686MVAProdutoPcMargem = 0 ;
   this.Z3686MVAProdutoPcMargem = 0 ;
   this.O3686MVAProdutoPcMargem = 0 ;
   this.A11309MVAProdutoPcCargaTributaria = 0 ;
   this.Z11309MVAProdutoPcCargaTributaria = 0 ;
   this.O11309MVAProdutoPcCargaTributaria = 0 ;
   this.A3687MVAProdutoAjustado = "" ;
   this.Z3687MVAProdutoAjustado = "" ;
   this.O3687MVAProdutoAjustado = "" ;
   this.A3688MVAProdutoUsuarioAlt = "" ;
   this.Z3688MVAProdutoUsuarioAlt = "" ;
   this.O3688MVAProdutoUsuarioAlt = "" ;
   this.A3689MVAProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Z3689MVAProdutoDataHoraAlt = gx.date.nullDate() ;
   this.O3689MVAProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A2960ProdutoDescricao = "" ;
   this.Z2960ProdutoDescricao = "" ;
   this.O2960ProdutoDescricao = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV27Pgmname = "" ;
   this.AV28Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19ProdutoDescricao = "" ;
   this.AV21SnAlterou = "" ;
   this.AV18ProdutoId = 0 ;
   this.AV20MVAProdutoUF = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3690MVAProdutoUF = "" ;
   this.A3688MVAProdutoUsuarioAlt = "" ;
   this.A3689MVAProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV23LogProdutoEmpresaId = "" ;
   this.AV24LogProdutoId = 0 ;
   this.AV25LogMVAProdutoUF = "" ;
   this.A2960ProdutoDescricao = "" ;
   this.A3686MVAProdutoPcMargem = 0 ;
   this.A3687MVAProdutoAjustado = "" ;
   this.A5507MVaProdutoPCReducaoST = 0 ;
   this.A5508MVAProdutoAliquotaST = 0 ;
   this.A11309MVAProdutoPcCargaTributaria = 0 ;
   this.AV22lMVAProdutos = {} ;
   this.AV26LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12712_client": ["'FECHAR'", true] ,"e13712_client": ["AFTER TRN", true] ,"e1471392_client": ["ENTER", true] ,"e1571392_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ProdutoId',fld:'vPRODUTOID'},{av:'AV20MVAProdutoUF',fld:'vMVAPRODUTOUF'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ProdutoId", "vPRODUTOID", 0, "int");
   this.setVCMap("AV20MVAProdutoUF", "vMVAPRODUTOUF", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV21SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23LogProdutoEmpresaId", "vLOGPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV24LogProdutoId", "vLOGPRODUTOID", 0, "int");
   this.setVCMap("AV25LogMVAProdutoUF", "vLOGMVAPRODUTOUF", 0, "char");
   this.setVCMap("A5508MVAProdutoAliquotaST", "MVAPRODUTOALIQUOTAST", 0, "decimal");
   this.setVCMap("A5507MVaProdutoPCReducaoST", "MVAPRODUTOPCREDUCAOST", 0, "decimal");
   this.setVCMap("AV22lMVAProdutos", "vLMVAPRODUTOS", 0, "lMVAProdutos");
   this.setVCMap("AV26LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV28Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV27Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 392 ]= ["O5507MVaProdutoPCReducaoST","O5508MVAProdutoAliquotaST","O3687MVAProdutoAjustado","O11309MVAProdutoPcCargaTributaria","O3686MVAProdutoPcMargem","O3690MVAProdutoUF","O2960ProdutoDescricao"] ;
});
gx.setParentObj(new tmvaproduto());
