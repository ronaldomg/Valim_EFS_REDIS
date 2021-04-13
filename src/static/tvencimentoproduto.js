/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:57:41.57
*/
gx.evt.autoSkip = false;
gx.define('tvencimentoproduto', false, function () {
   this.ServerClass =  "tvencimentoproduto" ;
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
      this.AV22ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.AV23FilialEmpresaId=gx.fn.getControlValue("vFILIALEMPRESAID") ;
      this.A1228FilialEmpresaId=gx.fn.getControlValue("FILIALEMPRESAID") ;
      this.AV18FilialId=gx.fn.getIntegerValue("vFILIALID",'.') ;
      this.AV19ProdutoId=gx.fn.getIntegerValue("vPRODUTOID",'.') ;
      this.AV20VencimentoProdutoDsLote=gx.fn.getControlValue("vVENCIMENTOPRODUTODSLOTE") ;
      this.AV21VencimentoProdutoSequencia=gx.fn.getIntegerValue("vVENCIMENTOPRODUTOSEQUENCIA",'.') ;
      this.AV45ProdutoQtdeDiasAvisoVal=gx.fn.getIntegerValue("vPRODUTOQTDEDIASAVISOVAL",'.') ;
      this.AV24SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV38LogFilialEmpresaId=gx.fn.getControlValue("vLOGFILIALEMPRESAID") ;
      this.AV39LogFilialId=gx.fn.getIntegerValue("vLOGFILIALID",'.') ;
      this.AV40LogProdutoEmpresaId=gx.fn.getControlValue("vLOGPRODUTOEMPRESAID") ;
      this.AV41LogProdutoId=gx.fn.getIntegerValue("vLOGPRODUTOID",'.') ;
      this.AV42LogVencimentoProdutoDsLote=gx.fn.getControlValue("vLOGVENCIMENTOPRODUTODSLOTE") ;
      this.AV43LogVencimentoProdutoSequencia=gx.fn.getIntegerValue("vLOGVENCIMENTOPRODUTOSEQUENCIA",'.') ;
      this.A1136FilialNome=gx.fn.getControlValue("FILIALNOME") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV37lVencimentoProdutos=gx.fn.getControlValue("vLVENCIMENTOPRODUTOS") ;
      this.AV44LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.A3843ProdutoDiasValidade=gx.fn.getIntegerValue("PRODUTODIASVALIDADE",'.') ;
      this.AV50Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV49Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Filialid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Filialid",["gx.O.Gx_mode", "gx.O.O1136FilialNome", "gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId", "gx.O.A1136FilialNome"],["O1136FilialNome", "A1136FilialNome", ["AV37lVencimentoProdutos","Afilialnome"]]);
      return true;
   }
   this.Valid_Produtoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Produtoid",["gx.O.Gx_mode", "gx.O.O2961ProdutoDescricaoResumida", "gx.O.A2964ProdutoEmpresaId", "gx.O.A2965ProdutoId", "gx.O.A2961ProdutoDescricaoResumida", "gx.O.AV22ProdutoEmpresaId", "gx.O.AV45ProdutoQtdeDiasAvisoVal", "gx.O.AV47QtDiaPadVal", "gx.O.A3843ProdutoDiasValidade"],["O2961ProdutoDescricaoResumida", "A2961ProdutoDescricaoResumida", "A3843ProdutoDiasValidade", ["AV37lVencimentoProdutos","Aprodutodescricaoresumida"], "AV45ProdutoQtdeDiasAvisoVal"]);
      return true;
   }
   this.Valid_Vencimentoprodutodslote=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VENCIMENTOPRODUTODSLOTE");
         this.AnyError  = 0;
         if ( (""==this.A4187VencimentoProdutoDsLote) )
         {
            try {
               gxballoon.setError("Informe o lote");
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
   this.Valid_Vencimentoprodutosequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VENCIMENTOPRODUTOSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Produtodescricaoresumida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRODUTODESCRICAORESUMIDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Vencimentoprodutodtentrada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VENCIMENTOPRODUTODTENTRADA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( (new gx.date.gxdate("").compare(this.A4183VencimentoProdutoDtEntrada)==0) )
         {
            try {
               gxballoon.setError("Informe a Data de Entrada");
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
   this.Valid_Vencimentoprodutodata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VENCIMENTOPRODUTODATA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( (new gx.date.gxdate("").compare(this.A4182VencimentoProdutoData)==0) )
         {
            try {
               gxballoon.setError("Informe a Data de Validade");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( new gx.date.gxdate( this.A4183VencimentoProdutoDtEntrada ).compare( this.A4182VencimentoProdutoData ) > 0 )
         {
            try {
               gxballoon.setError("Data de Entrada deve ser menor que a Data de Validade");
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
   this.Valid_Vencimentoprodutoqtentrada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VENCIMENTOPRODUTOQTENTRADA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( (0.0==this.A4184VencimentoProdutoQtEntrada) )
         {
            try {
               gxballoon.setError("Informe a Quantidade de Entrada");
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
   this.Validv_Gx_date=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTODAY");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtocategoria=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOCATEGORIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Qtdiapadval=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vQTDIAPADVAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Snvenda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSNVENDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Preconulo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECONULO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Intaux=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vINTAUX");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e127t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e137t2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e147t427_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e157t427_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,21,22,25,27,29,31,34,36,39,41,44,46,49,52,54,56,63,64,67,68,69,70,71,72,73,74,75,76,77,78,81];
   this.GXLastCtrlId =81;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Filialid,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FILIALID",gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV26FilialNome",gxold:"OV26FilialNome",gxvar:"AV26FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26FilialNome=Value},v2z:function(Value){gx.O.ZV26FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV26FilialNome,0)},c2v:function(){gx.O.AV26FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Produtoid,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[68,22],ip:[68,22,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PRODUTOID",gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRODUTOID",'.')},nac:function(){return !(0==this.AV19ProdutoId)}};
   GXValidFnc[21]={fld:"PROMPTPROD",grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Produtodescricaoresumida,isvalid:null,rgrid:[],fld:"PRODUTODESCRICAORESUMIDA",gxz:"Z2961ProdutoDescricaoResumida",gxold:"O2961ProdutoDescricaoResumida",gxvar:"A2961ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2961ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.Z2961ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("PRODUTODESCRICAORESUMIDA",gx.O.A2961ProdutoDescricaoResumida,0)},c2v:function(){gx.O.A2961ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("PRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vencimentoprodutodslote,isvalid:null,rgrid:[],fld:"VENCIMENTOPRODUTODSLOTE",gxz:"Z4187VencimentoProdutoDsLote",gxold:"O4187VencimentoProdutoDsLote",gxvar:"A4187VencimentoProdutoDsLote",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4187VencimentoProdutoDsLote=Value},v2z:function(Value){gx.O.Z4187VencimentoProdutoDsLote=Value},v2c:function(){gx.fn.setControlValue("VENCIMENTOPRODUTODSLOTE",gx.O.A4187VencimentoProdutoDsLote,0)},c2v:function(){gx.O.A4187VencimentoProdutoDsLote=this.val()},val:function(){return gx.fn.getControlValue("VENCIMENTOPRODUTODSLOTE")},nac:function(){return !(""==this.AV20VencimentoProdutoDsLote)}};
   GXValidFnc[29]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Vencimentoprodutosequencia,isvalid:null,rgrid:[],fld:"VENCIMENTOPRODUTOSEQUENCIA",gxz:"Z4188VencimentoProdutoSequencia",gxold:"O4188VencimentoProdutoSequencia",gxvar:"A4188VencimentoProdutoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4188VencimentoProdutoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4188VencimentoProdutoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VENCIMENTOPRODUTOSEQUENCIA",gx.O.A4188VencimentoProdutoSequencia,0)},c2v:function(){gx.O.A4188VencimentoProdutoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VENCIMENTOPRODUTOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vencimentoprodutodtentrada,isvalid:null,rgrid:[],fld:"VENCIMENTOPRODUTODTENTRADA",gxz:"Z4183VencimentoProdutoDtEntrada",gxold:"O4183VencimentoProdutoDtEntrada",gxvar:"A4183VencimentoProdutoDtEntrada",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4183VencimentoProdutoDtEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4183VencimentoProdutoDtEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("VENCIMENTOPRODUTODTENTRADA",gx.O.A4183VencimentoProdutoDtEntrada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4183VencimentoProdutoDtEntrada=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("VENCIMENTOPRODUTODTENTRADA")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vencimentoprodutodata,isvalid:null,rgrid:[],fld:"VENCIMENTOPRODUTODATA",gxz:"Z4182VencimentoProdutoData",gxold:"O4182VencimentoProdutoData",gxvar:"A4182VencimentoProdutoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[36,41],ip:[36,41],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4182VencimentoProdutoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4182VencimentoProdutoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("VENCIMENTOPRODUTODATA",gx.O.A4182VencimentoProdutoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4182VencimentoProdutoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("VENCIMENTOPRODUTODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vencimentoprodutoqtentrada,isvalid:null,rgrid:[],fld:"VENCIMENTOPRODUTOQTENTRADA",gxz:"Z4184VencimentoProdutoQtEntrada",gxold:"O4184VencimentoProdutoQtEntrada",gxvar:"A4184VencimentoProdutoQtEntrada",ucs:[],op:[46],ip:[46],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4184VencimentoProdutoQtEntrada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4184VencimentoProdutoQtEntrada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("VENCIMENTOPRODUTOQTENTRADA",gx.O.A4184VencimentoProdutoQtEntrada,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4184VencimentoProdutoQtEntrada=this.val()},val:function(){return gx.fn.getDecimalValue("VENCIMENTOPRODUTOQTENTRADA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[49]={fld:"TABLE4",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VENCIMENTOPRODUTOUSUARIOALT",gxz:"Z4185VencimentoProdutoUsuarioAlt",gxold:"O4185VencimentoProdutoUsuarioAlt",gxvar:"A4185VencimentoProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4185VencimentoProdutoUsuarioAlt=Value},v2z:function(Value){gx.O.Z4185VencimentoProdutoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("VENCIMENTOPRODUTOUSUARIOALT",gx.O.A4185VencimentoProdutoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4185VencimentoProdutoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("VENCIMENTOPRODUTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VENCIMENTOPRODUTODATAHORAALT",gxz:"Z4186VencimentoProdutoDataHoraAlt",gxold:"O4186VencimentoProdutoDataHoraAlt",gxvar:"A4186VencimentoProdutoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4186VencimentoProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4186VencimentoProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("VENCIMENTOPRODUTODATAHORAALT",gx.O.A4186VencimentoProdutoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4186VencimentoProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("VENCIMENTOPRODUTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[63]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV31LoteProdutoCombinacao",gxold:"OV31LoteProdutoCombinacao",gxvar:"AV31LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV31LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV31LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV31LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtocategoria,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV32ProdutoCategoria",gxold:"OV32ProdutoCategoria",gxvar:"AV32ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV32ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV32ProdutoCategoria)},c2v:function(){gx.O.AV32ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Qtdiapadval,isvalid:null,rgrid:[],fld:"vQTDIAPADVAL",gxz:"ZV47QtDiaPadVal",gxold:"OV47QtDiaPadVal",gxvar:"AV47QtDiaPadVal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47QtDiaPadVal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47QtDiaPadVal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDIAPADVAL",gx.O.AV47QtDiaPadVal,0)},c2v:function(){gx.O.AV47QtDiaPadVal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDIAPADVAL",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV34ProdutoReferencia",gxold:"OV34ProdutoReferencia",gxvar:"AV34ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV34ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV34ProdutoReferencia,0)},c2v:function(){gx.O.AV34ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Snvenda,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV36SNVenda",gxold:"OV36SNVenda",gxvar:"AV36SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36SNVenda=Value},v2z:function(Value){gx.O.ZV36SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV36SNVenda,0)},c2v:function(){gx.O.AV36SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"JS", format:2,grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV28GrupoProdutoId",gxold:"OV28GrupoProdutoId",gxvar:"AV28GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV28GrupoProdutoId,0)},c2v:function(){gx.O.AV28GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Preconulo,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV27PrecoNulo",gxold:"OV27PrecoNulo",gxvar:"AV27PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV27PrecoNulo,0)},c2v:function(){gx.O.AV27PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV29ProdutoCodigoId",gxold:"OV29ProdutoCodigoId",gxvar:"AV29ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV29ProdutoCodigoId,0)},c2v:function(){gx.O.AV29ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV30SubGrupoProdutoId",gxold:"OV30SubGrupoProdutoId",gxvar:"AV30SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV30SubGrupoProdutoId,0)},c2v:function(){gx.O.AV30SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV33CodigoBarrasProdutoBarra",gxold:"OV33CodigoBarrasProdutoBarra",gxvar:"AV33CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV33CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV33CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Intaux,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV35IntAux",gxold:"OV35IntAux",gxvar:"AV35IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV35IntAux,0)},c2v:function(){gx.O.AV35IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"BTNHELP",grid:0};
   this.A1156FilialId = 0 ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.AV26FilialNome = "" ;
   this.ZV26FilialNome = "" ;
   this.OV26FilialNome = "" ;
   this.A2965ProdutoId = 0 ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.Z2961ProdutoDescricaoResumida = "" ;
   this.O2961ProdutoDescricaoResumida = "" ;
   this.A4187VencimentoProdutoDsLote = "" ;
   this.Z4187VencimentoProdutoDsLote = "" ;
   this.O4187VencimentoProdutoDsLote = "" ;
   this.A4188VencimentoProdutoSequencia = 0 ;
   this.Z4188VencimentoProdutoSequencia = 0 ;
   this.O4188VencimentoProdutoSequencia = 0 ;
   this.A4183VencimentoProdutoDtEntrada = gx.date.nullDate() ;
   this.Z4183VencimentoProdutoDtEntrada = gx.date.nullDate() ;
   this.O4183VencimentoProdutoDtEntrada = gx.date.nullDate() ;
   this.A4182VencimentoProdutoData = gx.date.nullDate() ;
   this.Z4182VencimentoProdutoData = gx.date.nullDate() ;
   this.O4182VencimentoProdutoData = gx.date.nullDate() ;
   this.A4184VencimentoProdutoQtEntrada = 0 ;
   this.Z4184VencimentoProdutoQtEntrada = 0 ;
   this.O4184VencimentoProdutoQtEntrada = 0 ;
   this.A4185VencimentoProdutoUsuarioAlt = "" ;
   this.Z4185VencimentoProdutoUsuarioAlt = "" ;
   this.O4185VencimentoProdutoUsuarioAlt = "" ;
   this.A4186VencimentoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Z4186VencimentoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.O4186VencimentoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV31LoteProdutoCombinacao = "" ;
   this.ZV31LoteProdutoCombinacao = "" ;
   this.OV31LoteProdutoCombinacao = "" ;
   this.AV32ProdutoCategoria = "" ;
   this.ZV32ProdutoCategoria = "" ;
   this.OV32ProdutoCategoria = "" ;
   this.AV47QtDiaPadVal = 0 ;
   this.ZV47QtDiaPadVal = 0 ;
   this.OV47QtDiaPadVal = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV34ProdutoReferencia = "" ;
   this.ZV34ProdutoReferencia = "" ;
   this.OV34ProdutoReferencia = "" ;
   this.AV36SNVenda = "" ;
   this.ZV36SNVenda = "" ;
   this.OV36SNVenda = "" ;
   this.AV28GrupoProdutoId = 0 ;
   this.ZV28GrupoProdutoId = 0 ;
   this.OV28GrupoProdutoId = 0 ;
   this.AV27PrecoNulo = 0 ;
   this.ZV27PrecoNulo = 0 ;
   this.OV27PrecoNulo = 0 ;
   this.AV29ProdutoCodigoId = 0 ;
   this.ZV29ProdutoCodigoId = 0 ;
   this.OV29ProdutoCodigoId = 0 ;
   this.AV30SubGrupoProdutoId = 0 ;
   this.ZV30SubGrupoProdutoId = 0 ;
   this.OV30SubGrupoProdutoId = 0 ;
   this.AV33CodigoBarrasProdutoBarra = 0 ;
   this.ZV33CodigoBarrasProdutoBarra = 0 ;
   this.OV33CodigoBarrasProdutoBarra = 0 ;
   this.AV35IntAux = 0 ;
   this.ZV35IntAux = 0 ;
   this.OV35IntAux = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV49Pgmname = "" ;
   this.AV50Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV23FilialEmpresaId = "" ;
   this.AV22ProdutoEmpresaId = "" ;
   this.AV46ParametroSistemaValor = "" ;
   this.AV47QtDiaPadVal = 0 ;
   this.AV18FilialId = 0 ;
   this.AV26FilialNome = "" ;
   this.AV27PrecoNulo = 0 ;
   this.AV36SNVenda = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV32ProdutoCategoria = "" ;
   this.AV28GrupoProdutoId = 0 ;
   this.AV30SubGrupoProdutoId = 0 ;
   this.AV29ProdutoCodigoId = 0 ;
   this.AV31LoteProdutoCombinacao = "" ;
   this.AV35IntAux = 0 ;
   this.AV34ProdutoReferencia = "" ;
   this.AV33CodigoBarrasProdutoBarra = 0 ;
   this.AV19ProdutoId = 0 ;
   this.AV20VencimentoProdutoDsLote = "" ;
   this.AV21VencimentoProdutoSequencia = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A4187VencimentoProdutoDsLote = "" ;
   this.A4188VencimentoProdutoSequencia = 0 ;
   this.AV45ProdutoQtdeDiasAvisoVal = 0 ;
   this.AV24SnAlterou = "" ;
   this.AV38LogFilialEmpresaId = "" ;
   this.AV39LogFilialId = 0 ;
   this.AV40LogProdutoEmpresaId = "" ;
   this.AV41LogProdutoId = 0 ;
   this.AV42LogVencimentoProdutoDsLote = "" ;
   this.AV43LogVencimentoProdutoSequencia = 0 ;
   this.A1136FilialNome = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3843ProdutoDiasValidade = 0 ;
   this.A4182VencimentoProdutoData = gx.date.nullDate() ;
   this.A4183VencimentoProdutoDtEntrada = gx.date.nullDate() ;
   this.A4184VencimentoProdutoQtEntrada = 0 ;
   this.A4185VencimentoProdutoUsuarioAlt = "" ;
   this.A4186VencimentoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV37lVencimentoProdutos = {} ;
   this.AV44LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e127t2_client": ["'FECHAR'", true] ,"e137t2_client": ["AFTER TRN", true] ,"e147t427_client": ["ENTER", true] ,"e157t427_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18FilialId',fld:'vFILIALID'},{av:'AV19ProdutoId',fld:'vPRODUTOID'},{av:'AV20VencimentoProdutoDsLote',fld:'vVENCIMENTOPRODUTODSLOTE'},{av:'AV21VencimentoProdutoSequencia',fld:'vVENCIMENTOPRODUTOSEQUENCIA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV23FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV18FilialId',fld:'vFILIALID'}],[{av:'AV26FilialNome',fld:'vFILIALNOME'}]];
   this.setPrompt("PROMPTPROD", [20]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV22ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV23FilialEmpresaId", "vFILIALEMPRESAID", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("AV18FilialId", "vFILIALID", 0, "int");
   this.setVCMap("AV19ProdutoId", "vPRODUTOID", 0, "int");
   this.setVCMap("AV20VencimentoProdutoDsLote", "vVENCIMENTOPRODUTODSLOTE", 0, "char");
   this.setVCMap("AV21VencimentoProdutoSequencia", "vVENCIMENTOPRODUTOSEQUENCIA", 0, "int");
   this.setVCMap("AV45ProdutoQtdeDiasAvisoVal", "vPRODUTOQTDEDIASAVISOVAL", 0, "int");
   this.setVCMap("AV24SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV38LogFilialEmpresaId", "vLOGFILIALEMPRESAID", 0, "char");
   this.setVCMap("AV39LogFilialId", "vLOGFILIALID", 0, "int");
   this.setVCMap("AV40LogProdutoEmpresaId", "vLOGPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV41LogProdutoId", "vLOGPRODUTOID", 0, "int");
   this.setVCMap("AV42LogVencimentoProdutoDsLote", "vLOGVENCIMENTOPRODUTODSLOTE", 0, "char");
   this.setVCMap("AV43LogVencimentoProdutoSequencia", "vLOGVENCIMENTOPRODUTOSEQUENCIA", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV37lVencimentoProdutos", "vLVENCIMENTOPRODUTOS", 0, "lVencimentoProdutos");
   this.setVCMap("AV44LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("A3843ProdutoDiasValidade", "PRODUTODIASVALIDADE", 0, "int");
   this.setVCMap("AV50Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV49Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 427 ]= ["O4184VencimentoProdutoQtEntrada","O4183VencimentoProdutoDtEntrada","O4182VencimentoProdutoData","O4188VencimentoProdutoSequencia","O2961ProdutoDescricaoResumida","O1136FilialNome","O4187VencimentoProdutoDsLote","O2965ProdutoId","O1156FilialId"] ;
});
gx.setParentObj(new tvencimentoproduto());
