/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:10:15.78
*/
gx.evt.autoSkip = false;
gx.define('tremessaretornocpagitem', false, function () {
   this.ServerClass =  "tremessaretornocpagitem" ;
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
      this.AV18RemessaRetornoCPagId=gx.fn.getIntegerValue("vREMESSARETORNOCPAGID",'.') ;
      this.AV19RemessaRetornoCPagItemSeq=gx.fn.getIntegerValue("vREMESSARETORNOCPAGITEMSEQ",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5462RemessaRetornoCPagEmpresaId=gx.fn.getControlValue("REMESSARETORNOCPAGEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24MsgmErro=gx.fn.getControlValue("vMSGMERRO") ;
      this.AV22RemessaRetornoCPagTamanho=gx.fn.getIntegerValue("vREMESSARETORNOCPAGTAMANHO",'.') ;
      this.AV26MsgRetorno=gx.fn.getControlValue("vMSGRETORNO") ;
      this.A5458RemessaRetornoCPagTipo=gx.fn.getControlValue("REMESSARETORNOCPAGTIPO") ;
      this.AV34Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV21RemessaRetornoCPagDescricao=gx.fn.getControlValue("vREMESSARETORNOCPAGDESCRICAO") ;
      this.AV23RemessaRetornoCPagTipo=gx.fn.getControlValue("vREMESSARETORNOCPAGTIPO") ;
   };
   this.Valid_Remessaretornocpagid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Remessaretornocpagid",["gx.O.A5462RemessaRetornoCPagEmpresaId", "gx.O.A5463RemessaRetornoCPagId", "gx.O.A5458RemessaRetornoCPagTipo"],["A5458RemessaRetornoCPagTipo"]);
      return true;
   }
   this.Valid_Remessaretornocpagitemseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGITEMSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Remessaretornocpagitemtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGITEMTIPO");
         this.AnyError  = 0;
         if ( (""==this.A5464RemessaRetornoCPagItemTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo");
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
   this.Valid_Remessaretornocpagitemdescrica=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGITEMDESCRICA");
         this.AnyError  = 0;
         if ( (""==this.A5465RemessaRetornoCPagItemDescrica) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
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
   this.Valid_Remessaretornocpagitemtipopagm=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGITEMTIPOPAGM");
         this.AnyError  = 0;
         if ( (""==this.A5466RemessaRetornoCPagItemTipoPagm) && ( this.A5464RemessaRetornoCPagItemTipo == "2" || this.A5464RemessaRetornoCPagItemTipo == "3" || this.A5464RemessaRetornoCPagItemTipo == "4" ) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Pagamento");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (""==this.A5466RemessaRetornoCPagItemTipoPagm) && this.A5464RemessaRetornoCPagItemTipo != "3" && this.A5464RemessaRetornoCPagItemTipo != "2" && this.A5464RemessaRetornoCPagItemTipo != "4" )
         {
            try {
               gxballoon.setError("Só é permitido informar o Tipo de Pagamento quando o Tipo for \"Header de Lote\",  \"Detalhe\" ou \"Trailer de Lote\"");
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
   this.Valid_Remessaretornocpagitemquebra1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGITEMQUEBRA1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Remessaretornocpagitemquebra2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGITEMQUEBRA2");
         this.AnyError  = 0;
         if ( (""==this.A5467RemessaRetornoCPagItemQuebra1) && (""==this.A5468RemessaRetornoCPagItemQuebra2) && this.A5464RemessaRetornoCPagItemTipo == "2" )
         {
            try {
               gxballoon.setError("Informe pelo menos um dos Campos de Quebra");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ( ! (""==this.A5467RemessaRetornoCPagItemQuebra1) || ! (""==this.A5468RemessaRetornoCPagItemQuebra2) ) && this.A5464RemessaRetornoCPagItemTipo != "2" )
         {
            try {
               gxballoon.setError("Só é permitido informar um Campo de Quebra quando o Tipo for \"Header de Lote\"");
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
   this.Valid_Remessaretornocpagitemconteudo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGITEMCONTEUDO");
         this.AnyError  = 0;
         if ( (""==this.A5469RemessaRetornoCPagItemConteudo) )
         {
            try {
               gxballoon.setError("Informe o Conteúdo");
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
   this.Validv_Armazenatamanho=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vARMAZENATAMANHO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e128r2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138r2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148r2_client=function()
   {
      this.executeServerEvent("'CONTEUDO'", false, null, false, false);
   };
   this.e158r471_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e168r471_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,20,22,25,27,30,32,35,37,40,42,45,47,50,52,55,58,60,62,69,72,73,75];
   this.GXLastCtrlId =75;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE5",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagid,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGID",gxz:"Z5463RemessaRetornoCPagId",gxold:"O5463RemessaRetornoCPagId",gxvar:"A5463RemessaRetornoCPagId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5463RemessaRetornoCPagId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5463RemessaRetornoCPagId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGID",gx.O.A5463RemessaRetornoCPagId,0)},c2v:function(){gx.O.A5463RemessaRetornoCPagId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOCPAGID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagitemseq,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGITEMSEQ",gxz:"Z5472RemessaRetornoCPagItemSeq",gxold:"O5472RemessaRetornoCPagItemSeq",gxvar:"A5472RemessaRetornoCPagItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5472RemessaRetornoCPagItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5472RemessaRetornoCPagItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGITEMSEQ",gx.O.A5472RemessaRetornoCPagItemSeq,0)},c2v:function(){gx.O.A5472RemessaRetornoCPagItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOCPAGITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagitemtipo,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGITEMTIPO",gxz:"Z5464RemessaRetornoCPagItemTipo",gxold:"O5464RemessaRetornoCPagItemTipo",gxvar:"A5464RemessaRetornoCPagItemTipo",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5464RemessaRetornoCPagItemTipo=Value},v2z:function(Value){gx.O.Z5464RemessaRetornoCPagItemTipo=Value},v2c:function(){gx.fn.setComboBoxValue("REMESSARETORNOCPAGITEMTIPO",gx.O.A5464RemessaRetornoCPagItemTipo)},c2v:function(){gx.O.A5464RemessaRetornoCPagItemTipo=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGITEMTIPO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagitemdescrica,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGITEMDESCRICA",gxz:"Z5465RemessaRetornoCPagItemDescrica",gxold:"O5465RemessaRetornoCPagItemDescrica",gxvar:"A5465RemessaRetornoCPagItemDescrica",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5465RemessaRetornoCPagItemDescrica=Value},v2z:function(Value){gx.O.Z5465RemessaRetornoCPagItemDescrica=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGITEMDESCRICA",gx.O.A5465RemessaRetornoCPagItemDescrica,0)},c2v:function(){gx.O.A5465RemessaRetornoCPagItemDescrica=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGITEMDESCRICA")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagitemtipopagm,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGITEMTIPOPAGM",gxz:"Z5466RemessaRetornoCPagItemTipoPagm",gxold:"O5466RemessaRetornoCPagItemTipoPagm",gxvar:"A5466RemessaRetornoCPagItemTipoPagm",ucs:[],op:[27,37],ip:[27,37],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5466RemessaRetornoCPagItemTipoPagm=Value},v2z:function(Value){gx.O.Z5466RemessaRetornoCPagItemTipoPagm=Value},v2c:function(){gx.fn.setComboBoxValue("REMESSARETORNOCPAGITEMTIPOPAGM",gx.O.A5466RemessaRetornoCPagItemTipoPagm)},c2v:function(){gx.O.A5466RemessaRetornoCPagItemTipoPagm=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGITEMTIPOPAGM")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagitemquebra1,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGITEMQUEBRA1",gxz:"Z5467RemessaRetornoCPagItemQuebra1",gxold:"O5467RemessaRetornoCPagItemQuebra1",gxvar:"A5467RemessaRetornoCPagItemQuebra1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5467RemessaRetornoCPagItemQuebra1=Value},v2z:function(Value){gx.O.Z5467RemessaRetornoCPagItemQuebra1=Value},v2c:function(){gx.fn.setComboBoxValue("REMESSARETORNOCPAGITEMQUEBRA1",gx.O.A5467RemessaRetornoCPagItemQuebra1)},c2v:function(){gx.O.A5467RemessaRetornoCPagItemQuebra1=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGITEMQUEBRA1")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagitemquebra2,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGITEMQUEBRA2",gxz:"Z5468RemessaRetornoCPagItemQuebra2",gxold:"O5468RemessaRetornoCPagItemQuebra2",gxvar:"A5468RemessaRetornoCPagItemQuebra2",ucs:[],op:[27,47,42],ip:[27,47,42],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5468RemessaRetornoCPagItemQuebra2=Value},v2z:function(Value){gx.O.Z5468RemessaRetornoCPagItemQuebra2=Value},v2c:function(){gx.fn.setComboBoxValue("REMESSARETORNOCPAGITEMQUEBRA2",gx.O.A5468RemessaRetornoCPagItemQuebra2)},c2v:function(){gx.O.A5468RemessaRetornoCPagItemQuebra2=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGITEMQUEBRA2")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagitemconteudo,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGITEMCONTEUDO",gxz:"Z5469RemessaRetornoCPagItemConteudo",gxold:"O5469RemessaRetornoCPagItemConteudo",gxvar:"A5469RemessaRetornoCPagItemConteudo",ucs:[],op:[52],ip:[52],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5469RemessaRetornoCPagItemConteudo=Value},v2z:function(Value){gx.O.Z5469RemessaRetornoCPagItemConteudo=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGITEMCONTEUDO",gx.O.A5469RemessaRetornoCPagItemConteudo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5469RemessaRetornoCPagItemConteudo=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGITEMCONTEUDO")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[55]={fld:"TABLE4",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGITEMUSUARIOA",gxz:"Z5470RemessaRetornoCPagItemUsuarioA",gxold:"O5470RemessaRetornoCPagItemUsuarioA",gxvar:"A5470RemessaRetornoCPagItemUsuarioA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5470RemessaRetornoCPagItemUsuarioA=Value},v2z:function(Value){gx.O.Z5470RemessaRetornoCPagItemUsuarioA=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGITEMUSUARIOA",gx.O.A5470RemessaRetornoCPagItemUsuarioA,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5470RemessaRetornoCPagItemUsuarioA=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGITEMUSUARIOA")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[62]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGITEMDATAHORA",gxz:"Z5471RemessaRetornoCPagItemDataHora",gxold:"O5471RemessaRetornoCPagItemDataHora",gxvar:"A5471RemessaRetornoCPagItemDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5471RemessaRetornoCPagItemDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5471RemessaRetornoCPagItemDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGITEMDATAHORA",gx.O.A5471RemessaRetornoCPagItemDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5471RemessaRetornoCPagItemDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("REMESSARETORNOCPAGITEMDATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Armazenatamanho,isvalid:null,rgrid:[],fld:"vARMAZENATAMANHO",gxz:"ZV25ArmazenaTamanho",gxold:"OV25ArmazenaTamanho",gxvar:"AV25ArmazenaTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ArmazenaTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25ArmazenaTamanho=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vARMAZENATAMANHO",gx.O.AV25ArmazenaTamanho,0)},c2v:function(){gx.O.AV25ArmazenaTamanho=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vARMAZENATAMANHO",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"JS", format:2,grid:0};
   GXValidFnc[75]={fld:"BTNHELP",grid:0};
   this.A5463RemessaRetornoCPagId = 0 ;
   this.Z5463RemessaRetornoCPagId = 0 ;
   this.O5463RemessaRetornoCPagId = 0 ;
   this.A5472RemessaRetornoCPagItemSeq = 0 ;
   this.Z5472RemessaRetornoCPagItemSeq = 0 ;
   this.O5472RemessaRetornoCPagItemSeq = 0 ;
   this.A5464RemessaRetornoCPagItemTipo = "" ;
   this.Z5464RemessaRetornoCPagItemTipo = "" ;
   this.O5464RemessaRetornoCPagItemTipo = "" ;
   this.A5465RemessaRetornoCPagItemDescrica = "" ;
   this.Z5465RemessaRetornoCPagItemDescrica = "" ;
   this.O5465RemessaRetornoCPagItemDescrica = "" ;
   this.A5466RemessaRetornoCPagItemTipoPagm = "" ;
   this.Z5466RemessaRetornoCPagItemTipoPagm = "" ;
   this.O5466RemessaRetornoCPagItemTipoPagm = "" ;
   this.A5467RemessaRetornoCPagItemQuebra1 = "" ;
   this.Z5467RemessaRetornoCPagItemQuebra1 = "" ;
   this.O5467RemessaRetornoCPagItemQuebra1 = "" ;
   this.A5468RemessaRetornoCPagItemQuebra2 = "" ;
   this.Z5468RemessaRetornoCPagItemQuebra2 = "" ;
   this.O5468RemessaRetornoCPagItemQuebra2 = "" ;
   this.A5469RemessaRetornoCPagItemConteudo = "" ;
   this.Z5469RemessaRetornoCPagItemConteudo = "" ;
   this.O5469RemessaRetornoCPagItemConteudo = "" ;
   this.A5470RemessaRetornoCPagItemUsuarioA = "" ;
   this.Z5470RemessaRetornoCPagItemUsuarioA = "" ;
   this.O5470RemessaRetornoCPagItemUsuarioA = "" ;
   this.A5471RemessaRetornoCPagItemDataHora = gx.date.nullDate() ;
   this.Z5471RemessaRetornoCPagItemDataHora = gx.date.nullDate() ;
   this.O5471RemessaRetornoCPagItemDataHora = gx.date.nullDate() ;
   this.AV25ArmazenaTamanho = 0 ;
   this.ZV25ArmazenaTamanho = 0 ;
   this.OV25ArmazenaTamanho = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV33Pgmname = "" ;
   this.AV34Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12EmpresaPadrao = "" ;
   this.AV25ArmazenaTamanho = 0 ;
   this.AV26MsgRetorno = "" ;
   this.AV24MsgmErro = "" ;
   this.AV18RemessaRetornoCPagId = 0 ;
   this.AV21RemessaRetornoCPagDescricao = "" ;
   this.AV19RemessaRetornoCPagItemSeq = 0 ;
   this.AV22RemessaRetornoCPagTamanho = 0 ;
   this.AV23RemessaRetornoCPagTipo = "" ;
   this.A5462RemessaRetornoCPagEmpresaId = "" ;
   this.A5463RemessaRetornoCPagId = 0 ;
   this.A5472RemessaRetornoCPagItemSeq = 0 ;
   this.AV20SnAlterou = "" ;
   this.A5458RemessaRetornoCPagTipo = "" ;
   this.A5464RemessaRetornoCPagItemTipo = "" ;
   this.A5465RemessaRetornoCPagItemDescrica = "" ;
   this.A5466RemessaRetornoCPagItemTipoPagm = "" ;
   this.A5467RemessaRetornoCPagItemQuebra1 = "" ;
   this.A5468RemessaRetornoCPagItemQuebra2 = "" ;
   this.A5469RemessaRetornoCPagItemConteudo = "" ;
   this.A5470RemessaRetornoCPagItemUsuarioA = "" ;
   this.A5471RemessaRetornoCPagItemDataHora = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e128r2_client": ["'FECHAR'", true] ,"e138r2_client": ["AFTER TRN", true] ,"e148r2_client": ["'CONTEUDO'", true] ,"e158r471_client": ["ENTER", true] ,"e168r471_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18RemessaRetornoCPagId',fld:'vREMESSARETORNOCPAGID'},{av:'AV21RemessaRetornoCPagDescricao',fld:'vREMESSARETORNOCPAGDESCRICAO'},{av:'AV19RemessaRetornoCPagItemSeq',fld:'vREMESSARETORNOCPAGITEMSEQ'},{av:'AV22RemessaRetornoCPagTamanho',fld:'vREMESSARETORNOCPAGTAMANHO'},{av:'AV23RemessaRetornoCPagTipo',fld:'vREMESSARETORNOCPAGTIPO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18RemessaRetornoCPagId',fld:'vREMESSARETORNOCPAGID'},{av:'AV21RemessaRetornoCPagDescricao',fld:'vREMESSARETORNOCPAGDESCRICAO'},{av:'AV22RemessaRetornoCPagTamanho',fld:'vREMESSARETORNOCPAGTAMANHO'},{av:'AV23RemessaRetornoCPagTipo',fld:'vREMESSARETORNOCPAGTIPO'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'CONTEUDO'"] = [[{av:'AV27SNErro',fld:'vSNERRO'},{av:'A5464RemessaRetornoCPagItemTipo',fld:'REMESSARETORNOCPAGITEMTIPO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18RemessaRetornoCPagId',fld:'vREMESSARETORNOCPAGID'},{av:'A5472RemessaRetornoCPagItemSeq',fld:'REMESSARETORNOCPAGITEMSEQ'},{av:'A5466RemessaRetornoCPagItemTipoPagm',fld:'REMESSARETORNOCPAGITEMTIPOPAGM'},{av:'Gx_mode',fld:'vMODE'},{av:'A5465RemessaRetornoCPagItemDescrica',fld:'REMESSARETORNOCPAGITEMDESCRICA'},{av:'A5467RemessaRetornoCPagItemQuebra1',fld:'REMESSARETORNOCPAGITEMQUEBRA1'},{av:'A5468RemessaRetornoCPagItemQuebra2',fld:'REMESSARETORNOCPAGITEMQUEBRA2'},{av:'AV19RemessaRetornoCPagItemSeq',fld:'vREMESSARETORNOCPAGITEMSEQ'},{av:'A5469RemessaRetornoCPagItemConteudo',fld:'REMESSARETORNOCPAGITEMCONTEUDO'},{av:'AV23RemessaRetornoCPagTipo',fld:'vREMESSARETORNOCPAGTIPO'}],[{av:'AV27SNErro',fld:'vSNERRO'},{av:'AV24MsgmErro',fld:'vMSGMERRO'},{av:'AV28SdtRemessaRetornoCPag',fld:'vSDTREMESSARETORNOCPAG'},{av:'AV25ArmazenaTamanho',fld:'vARMAZENATAMANHO'},{av:'A5469RemessaRetornoCPagItemConteudo',fld:'REMESSARETORNOCPAGITEMCONTEUDO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18RemessaRetornoCPagId", "vREMESSARETORNOCPAGID", 0, "int");
   this.setVCMap("AV19RemessaRetornoCPagItemSeq", "vREMESSARETORNOCPAGITEMSEQ", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5462RemessaRetornoCPagEmpresaId", "REMESSARETORNOCPAGEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24MsgmErro", "vMSGMERRO", 0, "svchar");
   this.setVCMap("AV22RemessaRetornoCPagTamanho", "vREMESSARETORNOCPAGTAMANHO", 0, "int");
   this.setVCMap("AV26MsgRetorno", "vMSGRETORNO", 0, "svchar");
   this.setVCMap("A5458RemessaRetornoCPagTipo", "REMESSARETORNOCPAGTIPO", 0, "char");
   this.setVCMap("AV34Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV21RemessaRetornoCPagDescricao", "vREMESSARETORNOCPAGDESCRICAO", 0, "svchar");
   this.setVCMap("AV23RemessaRetornoCPagTipo", "vREMESSARETORNOCPAGTIPO", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 471 ]= ["O5469RemessaRetornoCPagItemConteudo","O5468RemessaRetornoCPagItemQuebra2","O5467RemessaRetornoCPagItemQuebra1","O5466RemessaRetornoCPagItemTipoPagm","O5465RemessaRetornoCPagItemDescrica","O5464RemessaRetornoCPagItemTipo"] ;
});
gx.setParentObj(new tremessaretornocpagitem());
