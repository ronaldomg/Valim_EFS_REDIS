/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:29:53.33
*/
gx.evt.autoSkip = false;
gx.define('tlayoutdocumento', false, function () {
   this.ServerClass =  "tlayoutdocumento" ;
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
      this.AV17ModeloDocumentoEmpresaId=gx.fn.getControlValue("vMODELODOCUMENTOEMPRESAID") ;
      this.A1023ModeloDocumentoEmpresaId=gx.fn.getControlValue("MODELODOCUMENTOEMPRESAID") ;
      this.AV18ModeloDocumentoId=gx.fn.getIntegerValue("vMODELODOCUMENTOID",'.') ;
      this.AV19LayoutDocumentoSeq=gx.fn.getIntegerValue("vLAYOUTDOCUMENTOSEQ",'.') ;
      this.A1284LayoutDocumentoSeq=gx.fn.getIntegerValue("LAYOUTDOCUMENTOSEQ",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A1287ModeloDocumentoTamFonte=gx.fn.getIntegerValue("MODELODOCUMENTOTAMFONTE",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.A2017ModeloDocumentoTipoImpressao=gx.fn.getControlValue("MODELODOCUMENTOTIPOIMPRESSAO") ;
      this.AV21SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.A1286ModeloDocumentoQtdeLinhas=gx.fn.getIntegerValue("MODELODOCUMENTOQTDELINHAS",'.') ;
      this.A1028ModeloDocumentoTipo=gx.fn.getControlValue("MODELODOCUMENTOTIPO") ;
      this.AV32Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Modelodocumentoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Modelodocumentoid",["gx.O.Gx_mode", "gx.O.A1023ModeloDocumentoEmpresaId", "gx.O.A1024ModeloDocumentoId", "gx.O.A1287ModeloDocumentoTamFonte", "gx.O.Gx_BScreen", "gx.O.A1025ModeloDocumentoDescricao", "gx.O.A1028ModeloDocumentoTipo", "gx.O.A2017ModeloDocumentoTipoImpressao", "gx.O.A1286ModeloDocumentoQtdeLinhas", "gx.O.A1281LayoutDocumentoTamFonte"],["A1025ModeloDocumentoDescricao", "A1028ModeloDocumentoTipo", "A2017ModeloDocumentoTipoImpressao", "A1286ModeloDocumentoQtdeLinhas", "A1287ModeloDocumentoTamFonte", "A1281LayoutDocumentoTamFonte"]);
      return true;
   }
   this.Valid_Layoutdocumentoconteudo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LAYOUTDOCUMENTOCONTEUDO");
         this.AnyError  = 0;
         if ( (""==this.A1278LayoutDocumentoConteudo) )
         {
            try {
               gxballoon.setError("Informe o Conteúdo da Linha");
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
   this.Valid_Layoutdocumentolinhaini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LAYOUTDOCUMENTOLINHAINI");
         this.AnyError  = 0;
         if ( (0==this.A1279LayoutDocumentoLinhaIni) )
         {
            try {
               gxballoon.setError("Informe a Linha Inicial");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A1279LayoutDocumentoLinhaIni > this.A1286ModeloDocumentoQtdeLinhas )
         {
            try {
               gxballoon.setError("Linha Inicial deve ser menor que Quantidade Total de Linhas do Modelo");
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
   this.Valid_Layoutdocumentocolunaini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LAYOUTDOCUMENTOCOLUNAINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Layoutdocumentotamfonte=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LAYOUTDOCUMENTOTAMFONTE");
         this.AnyError  = 0;
         if ( ! ( this.A1281LayoutDocumentoTamFonte == 1 || this.A1281LayoutDocumentoTamFonte == 0 || this.A1281LayoutDocumentoTamFonte == 8 || this.A1281LayoutDocumentoTamFonte == 9 || this.A1281LayoutDocumentoTamFonte == 10 || this.A1281LayoutDocumentoTamFonte == 11 || this.A1281LayoutDocumentoTamFonte == 12 || this.A1281LayoutDocumentoTamFonte == 14 || this.A1281LayoutDocumentoTamFonte == 16 || this.A1281LayoutDocumentoTamFonte == 58 || this.A1281LayoutDocumentoTamFonte == 59 || this.A1281LayoutDocumentoTamFonte == 60 || this.A1281LayoutDocumentoTamFonte == 61 || this.A1281LayoutDocumentoTamFonte == 62 || this.A1281LayoutDocumentoTamFonte == 64 || this.A1281LayoutDocumentoTamFonte == 66 || this.A1281LayoutDocumentoTamFonte == 70 || this.A1281LayoutDocumentoTamFonte == 67 || this.A1281LayoutDocumentoTamFonte == 68 || this.A1281LayoutDocumentoTamFonte == 69 || this.A1281LayoutDocumentoTamFonte == 75 ) )
         {
            try {
               gxballoon.setError("Campo Tamanho da Fonte fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A1281LayoutDocumentoTamFonte > 66 && this.A2017ModeloDocumentoTipoImpressao == "1" )
         {
            try {
               gxballoon.setError("Tamanho da Fonte Inválido para Modo Gráfico");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A1281LayoutDocumentoTamFonte <= 66 && this.A2017ModeloDocumentoTipoImpressao == "2" )
         {
            try {
               gxballoon.setError("Tamanho da Fonte Inválido para Modo Texto");
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
   this.Valid_Layoutdocumentoqtdecaracter=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LAYOUTDOCUMENTOQTDECARACTER");
         this.AnyError  = 0;
         try {
            if ( (0==this.A1282LayoutDocumentoQtdeCaracter) && this.A1278LayoutDocumentoConteudo == "@mercadoria" )
            {
               this.A1282LayoutDocumentoQtdeCaracter = gx.num.trunc( 40 ,0) ;
            }
         }
         catch(e){}
         if ( (0==this.A1282LayoutDocumentoQtdeCaracter) && this.A1278LayoutDocumentoConteudo != "@mercadoria" )
         {
            try {
               gxballoon.setError("Informe a Quantidade de Caracteres da Linha");
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
   this.Valid_Layoutdocumentoqtderepeticao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Layoutdocumentoqtderepeticao",["gx.O.O1283LayoutDocumentoQtdeRepeticao", "gx.O.O1282LayoutDocumentoQtdeCaracter", "gx.O.O1281LayoutDocumentoTamFonte", "gx.O.O1280LayoutDocumentoColunaIni", "gx.O.O1279LayoutDocumentoLinhaIni", "gx.O.O1278LayoutDocumentoConteudo", "gx.O.AV7UsrCod", "gx.O.A1278LayoutDocumentoConteudo", "gx.O.A1279LayoutDocumentoLinhaIni", "gx.O.A1280LayoutDocumentoColunaIni", "gx.O.A1281LayoutDocumentoTamFonte", "gx.O.A1282LayoutDocumentoQtdeCaracter", "gx.O.A1283LayoutDocumentoQtdeRepeticao", "gx.O.A1028ModeloDocumentoTipo", "gx.O.A1368LayoutDocumentoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A1369LayoutDocumentoDataHoraAlt,"DMY4")'],["A1368LayoutDocumentoUsuarioAlt", "A1369LayoutDocumentoDataHoraAlt"]);
      return true;
   }
   this.Valid_Layoutdocumentoborda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LAYOUTDOCUMENTOBORDA");
         this.AnyError  = 0;
         if ( ! ( this.A3135LayoutDocumentoBorda == 0 || this.A3135LayoutDocumentoBorda == 1 || this.A3135LayoutDocumentoBorda == 2 ) )
         {
            try {
               gxballoon.setError("Campo Borda fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A2017ModeloDocumentoTipoImpressao != "1" && this.A3135LayoutDocumentoBorda != 0 )
         {
            try {
               gxballoon.setError("Não é possível fazer borda ou sublinhar no modo Texto");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( gx.text.indexOf( this.A1278LayoutDocumentoConteudo, "<imagem", 1) > 0 && this.A3135LayoutDocumentoBorda == 2 )
         {
            try {
               gxballoon.setError("Não é permitido sublinhar linha com imagem");
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
   this.Valid_Layoutdocumentodestacar=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LAYOUTDOCUMENTODESTACAR");
         this.AnyError  = 0;
         if ( this.A2017ModeloDocumentoTipoImpressao != "1" && ( this.A3136LayoutDocumentoDestacar == "S" || this.A3136LayoutDocumentoDestacar == "S" ) )
         {
            try {
               gxballoon.setError("Destaque do Fundo só é possível no modo gráfico");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( gx.text.indexOf( this.A1278LayoutDocumentoConteudo, "grande>", 1) > 0 && this.A3136LayoutDocumentoDestacar == "S" )
         {
            try {
               gxballoon.setError("Não é permitido destacar fundo das linhas com imagem grande");
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
   this.e122t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132t2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142t2_client=function()
   {
      this.executeServerEvent("'CONTEUDO'", false, null, false, false);
   };
   this.e152t150_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e162t150_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,20,22,27,29,33,35,39,41,45,47,51,53,57,59,64,68,71,73,75,84,86];
   this.GXLastCtrlId =86;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentoid,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOID",gxz:"Z1024ModeloDocumentoId",gxold:"O1024ModeloDocumentoId",gxvar:"A1024ModeloDocumentoId",ucs:[],op:[41,15],ip:[41,15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1024ModeloDocumentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1024ModeloDocumentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELODOCUMENTOID",gx.O.A1024ModeloDocumentoId,0)},c2v:function(){gx.O.A1024ModeloDocumentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELODOCUMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTODESCRICAO",gxz:"Z1025ModeloDocumentoDescricao",gxold:"O1025ModeloDocumentoDescricao",gxvar:"A1025ModeloDocumentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1025ModeloDocumentoDescricao=Value},v2z:function(Value){gx.O.Z1025ModeloDocumentoDescricao=Value},v2c:function(){gx.fn.setControlValue("MODELODOCUMENTODESCRICAO",gx.O.A1025ModeloDocumentoDescricao,0)},c2v:function(){gx.O.A1025ModeloDocumentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCUMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Layoutdocumentoconteudo,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOCONTEUDO",gxz:"Z1278LayoutDocumentoConteudo",gxold:"O1278LayoutDocumentoConteudo",gxvar:"A1278LayoutDocumentoConteudo",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1278LayoutDocumentoConteudo=Value},v2z:function(Value){gx.O.Z1278LayoutDocumentoConteudo=Value},v2c:function(){gx.fn.setControlValue("LAYOUTDOCUMENTOCONTEUDO",gx.O.A1278LayoutDocumentoConteudo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1278LayoutDocumentoConteudo=this.val()},val:function(){return gx.fn.getControlValue("LAYOUTDOCUMENTOCONTEUDO")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Layoutdocumentolinhaini,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOLINHAINI",gxz:"Z1279LayoutDocumentoLinhaIni",gxold:"O1279LayoutDocumentoLinhaIni",gxvar:"A1279LayoutDocumentoLinhaIni",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1279LayoutDocumentoLinhaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1279LayoutDocumentoLinhaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LAYOUTDOCUMENTOLINHAINI",gx.O.A1279LayoutDocumentoLinhaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1279LayoutDocumentoLinhaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LAYOUTDOCUMENTOLINHAINI",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Layoutdocumentocolunaini,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOCOLUNAINI",gxz:"Z1280LayoutDocumentoColunaIni",gxold:"O1280LayoutDocumentoColunaIni",gxvar:"A1280LayoutDocumentoColunaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1280LayoutDocumentoColunaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1280LayoutDocumentoColunaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LAYOUTDOCUMENTOCOLUNAINI",gx.O.A1280LayoutDocumentoColunaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1280LayoutDocumentoColunaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LAYOUTDOCUMENTOCOLUNAINI",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Layoutdocumentotamfonte,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOTAMFONTE",gxz:"Z1281LayoutDocumentoTamFonte",gxold:"O1281LayoutDocumentoTamFonte",gxvar:"A1281LayoutDocumentoTamFonte",ucs:[],op:[41],ip:[41],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1281LayoutDocumentoTamFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1281LayoutDocumentoTamFonte=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("LAYOUTDOCUMENTOTAMFONTE",gx.O.A1281LayoutDocumentoTamFonte);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1281LayoutDocumentoTamFonte=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LAYOUTDOCUMENTOTAMFONTE",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[45]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Layoutdocumentoqtdecaracter,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOQTDECARACTER",gxz:"Z1282LayoutDocumentoQtdeCaracter",gxold:"O1282LayoutDocumentoQtdeCaracter",gxvar:"A1282LayoutDocumentoQtdeCaracter",ucs:[],op:[22,47],ip:[22,47],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1282LayoutDocumentoQtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1282LayoutDocumentoQtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LAYOUTDOCUMENTOQTDECARACTER",gx.O.A1282LayoutDocumentoQtdeCaracter,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1282LayoutDocumentoQtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LAYOUTDOCUMENTOQTDECARACTER",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[51]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Layoutdocumentoqtderepeticao,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOQTDEREPETICAO",gxz:"Z1283LayoutDocumentoQtdeRepeticao",gxold:"O1283LayoutDocumentoQtdeRepeticao",gxvar:"A1283LayoutDocumentoQtdeRepeticao",ucs:[],op:[53,75,73],ip:[75,73,53,47,41,35,29,22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1283LayoutDocumentoQtdeRepeticao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1283LayoutDocumentoQtdeRepeticao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LAYOUTDOCUMENTOQTDEREPETICAO",gx.O.A1283LayoutDocumentoQtdeRepeticao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1283LayoutDocumentoQtdeRepeticao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LAYOUTDOCUMENTOQTDEREPETICAO",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Layoutdocumentoborda,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOBORDA",gxz:"Z3135LayoutDocumentoBorda",gxold:"O3135LayoutDocumentoBorda",gxvar:"A3135LayoutDocumentoBorda",ucs:[],op:[22,59],ip:[22,59],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3135LayoutDocumentoBorda=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3135LayoutDocumentoBorda=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("LAYOUTDOCUMENTOBORDA",gx.O.A3135LayoutDocumentoBorda);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3135LayoutDocumentoBorda=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LAYOUTDOCUMENTOBORDA",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Layoutdocumentodestacar,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTODESTACAR",gxz:"Z3136LayoutDocumentoDestacar",gxold:"O3136LayoutDocumentoDestacar",gxvar:"A3136LayoutDocumentoDestacar",ucs:[],op:[22,64],ip:[22,64],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3136LayoutDocumentoDestacar=Value},v2z:function(Value){gx.O.Z3136LayoutDocumentoDestacar=Value},v2c:function(){gx.fn.setCheckBoxValue("LAYOUTDOCUMENTODESTACAR",gx.O.A3136LayoutDocumentoDestacar,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3136LayoutDocumentoDestacar=this.val()},val:function(){return gx.fn.getControlValue("LAYOUTDOCUMENTODESTACAR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[68]={fld:"TABLE4",grid:0};
   GXValidFnc[71]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOUSUARIOALT",gxz:"Z1368LayoutDocumentoUsuarioAlt",gxold:"O1368LayoutDocumentoUsuarioAlt",gxvar:"A1368LayoutDocumentoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1368LayoutDocumentoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1368LayoutDocumentoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("LAYOUTDOCUMENTOUSUARIOALT",gx.O.A1368LayoutDocumentoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1368LayoutDocumentoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("LAYOUTDOCUMENTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[75]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTODATAHORAALT",gxz:"Z1369LayoutDocumentoDataHoraAlt",gxold:"O1369LayoutDocumentoDataHoraAlt",gxvar:"A1369LayoutDocumentoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1369LayoutDocumentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1369LayoutDocumentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LAYOUTDOCUMENTODATAHORAALT",gx.O.A1369LayoutDocumentoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1369LayoutDocumentoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LAYOUTDOCUMENTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[84]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV25AcessoSistemaSequencia",gxold:"OV25AcessoSistemaSequencia",gxvar:"AV25AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV25AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV25AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"BTNHELP",grid:0};
   this.A1024ModeloDocumentoId = 0 ;
   this.Z1024ModeloDocumentoId = 0 ;
   this.O1024ModeloDocumentoId = 0 ;
   this.A1025ModeloDocumentoDescricao = "" ;
   this.Z1025ModeloDocumentoDescricao = "" ;
   this.O1025ModeloDocumentoDescricao = "" ;
   this.A1278LayoutDocumentoConteudo = "" ;
   this.Z1278LayoutDocumentoConteudo = "" ;
   this.O1278LayoutDocumentoConteudo = "" ;
   this.A1279LayoutDocumentoLinhaIni = 0 ;
   this.Z1279LayoutDocumentoLinhaIni = 0 ;
   this.O1279LayoutDocumentoLinhaIni = 0 ;
   this.A1280LayoutDocumentoColunaIni = 0 ;
   this.Z1280LayoutDocumentoColunaIni = 0 ;
   this.O1280LayoutDocumentoColunaIni = 0 ;
   this.A1281LayoutDocumentoTamFonte = 0 ;
   this.Z1281LayoutDocumentoTamFonte = 0 ;
   this.O1281LayoutDocumentoTamFonte = 0 ;
   this.A1282LayoutDocumentoQtdeCaracter = 0 ;
   this.Z1282LayoutDocumentoQtdeCaracter = 0 ;
   this.O1282LayoutDocumentoQtdeCaracter = 0 ;
   this.A1283LayoutDocumentoQtdeRepeticao = 0 ;
   this.Z1283LayoutDocumentoQtdeRepeticao = 0 ;
   this.O1283LayoutDocumentoQtdeRepeticao = 0 ;
   this.A3135LayoutDocumentoBorda = 0 ;
   this.Z3135LayoutDocumentoBorda = 0 ;
   this.O3135LayoutDocumentoBorda = 0 ;
   this.A3136LayoutDocumentoDestacar = "" ;
   this.Z3136LayoutDocumentoDestacar = "" ;
   this.O3136LayoutDocumentoDestacar = "" ;
   this.A1368LayoutDocumentoUsuarioAlt = "" ;
   this.Z1368LayoutDocumentoUsuarioAlt = "" ;
   this.O1368LayoutDocumentoUsuarioAlt = "" ;
   this.A1369LayoutDocumentoDataHoraAlt = gx.date.nullDate() ;
   this.Z1369LayoutDocumentoDataHoraAlt = gx.date.nullDate() ;
   this.O1369LayoutDocumentoDataHoraAlt = gx.date.nullDate() ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.ZV25AcessoSistemaSequencia = 0 ;
   this.OV25AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV31Pgmname = "" ;
   this.AV32Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV25AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV21SnErro = "" ;
   this.AV17ModeloDocumentoEmpresaId = "" ;
   this.AV18ModeloDocumentoId = 0 ;
   this.AV19LayoutDocumentoSeq = 0 ;
   this.A1023ModeloDocumentoEmpresaId = "" ;
   this.A1024ModeloDocumentoId = 0 ;
   this.A1284LayoutDocumentoSeq = 0 ;
   this.A1282LayoutDocumentoQtdeCaracter = 0 ;
   this.A1368LayoutDocumentoUsuarioAlt = "" ;
   this.A1369LayoutDocumentoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A1278LayoutDocumentoConteudo = "" ;
   this.A1025ModeloDocumentoDescricao = "" ;
   this.A1028ModeloDocumentoTipo = "" ;
   this.A2017ModeloDocumentoTipoImpressao = "" ;
   this.A1286ModeloDocumentoQtdeLinhas = 0 ;
   this.A1287ModeloDocumentoTamFonte = 0 ;
   this.A1279LayoutDocumentoLinhaIni = 0 ;
   this.A1280LayoutDocumentoColunaIni = 0 ;
   this.A1281LayoutDocumentoTamFonte = 0 ;
   this.A1283LayoutDocumentoQtdeRepeticao = 0 ;
   this.A3135LayoutDocumentoBorda = 0 ;
   this.A3136LayoutDocumentoDestacar = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e122t2_client": ["'FECHAR'", true] ,"e132t2_client": ["AFTER TRN", true] ,"e142t2_client": ["'CONTEUDO'", true] ,"e152t150_client": ["ENTER", true] ,"e162t150_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID',hsh:true},{av:'AV18ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'AV19LayoutDocumentoSeq',fld:'vLAYOUTDOCUMENTOSEQ',hsh:true},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV17ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID',hsh:true},{av:'AV18ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV25AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'CONTEUDO'"] = [[{av:'AV22tags',fld:'vTAGS'},{av:'AV17ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID',hsh:true},{av:'AV18ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'AV19LayoutDocumentoSeq',fld:'vLAYOUTDOCUMENTOSEQ',hsh:true},{av:'A1278LayoutDocumentoConteudo',fld:'LAYOUTDOCUMENTOCONTEUDO'},{av:'AV13Tabela',fld:'vTABELA'}],[{av:'AV22tags',fld:'vTAGS'},{av:'AV23proc',fld:'vPROC'},{av:'A1278LayoutDocumentoConteudo',fld:'LAYOUTDOCUMENTOCONTEUDO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17ModeloDocumentoEmpresaId", "vMODELODOCUMENTOEMPRESAID", 0, "char");
   this.setVCMap("A1023ModeloDocumentoEmpresaId", "MODELODOCUMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV18ModeloDocumentoId", "vMODELODOCUMENTOID", 0, "int");
   this.setVCMap("AV19LayoutDocumentoSeq", "vLAYOUTDOCUMENTOSEQ", 0, "int");
   this.setVCMap("A1284LayoutDocumentoSeq", "LAYOUTDOCUMENTOSEQ", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A1287ModeloDocumentoTamFonte", "MODELODOCUMENTOTAMFONTE", 0, "int");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("A2017ModeloDocumentoTipoImpressao", "MODELODOCUMENTOTIPOIMPRESSAO", 0, "char");
   this.setVCMap("AV21SnErro", "vSNERRO", 0, "char");
   this.setVCMap("A1286ModeloDocumentoQtdeLinhas", "MODELODOCUMENTOQTDELINHAS", 0, "int");
   this.setVCMap("A1028ModeloDocumentoTipo", "MODELODOCUMENTOTIPO", 0, "char");
   this.setVCMap("AV32Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV31Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 150 ]= ["O1283LayoutDocumentoQtdeRepeticao","O1282LayoutDocumentoQtdeCaracter","O1281LayoutDocumentoTamFonte","O1280LayoutDocumentoColunaIni","O1279LayoutDocumentoLinhaIni","O1278LayoutDocumentoConteudo"] ;
});
gx.setParentObj(new tlayoutdocumento());
