/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:27:6.64
*/
gx.evt.autoSkip = false;
gx.define('tmodelodocumento', false, function () {
   this.ServerClass =  "tmodelodocumento" ;
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
      this.AV17ModeloDocumentoId=gx.fn.getIntegerValue("vMODELODOCUMENTOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1023ModeloDocumentoEmpresaId=gx.fn.getControlValue("MODELODOCUMENTOEMPRESAID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.A3131ModeloDocumentoImagem1=gx.fn.getControlValue("MODELODOCUMENTOIMAGEM1") ;
      this.A3132ModeloDocumentoImagem2=gx.fn.getControlValue("MODELODOCUMENTOIMAGEM2") ;
      this.A3133ModeloDocumentoImagem3=gx.fn.getControlValue("MODELODOCUMENTOIMAGEM3") ;
      this.AV64Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV63Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV44ModeloDocumentoImagem1=gx.fn.getControlValue("vMODELODOCUMENTOIMAGEM1") ;
      this.AV45ModeloDocumentoImagem2=gx.fn.getControlValue("vMODELODOCUMENTOIMAGEM2") ;
      this.AV46ModeloDocumentoImagem3=gx.fn.getControlValue("vMODELODOCUMENTOIMAGEM3") ;
   };
   this.Valid_Modelodocumentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelodocumentodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A1025ModeloDocumentoDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição do Modelo");
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
   this.Valid_Modelodocumentotipoimpressao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTOTIPOIMPRESSAO");
         this.AnyError  = 0;
         if ( ! ( this.A2017ModeloDocumentoTipoImpressao == "0" || this.A2017ModeloDocumentoTipoImpressao == "1" || this.A2017ModeloDocumentoTipoImpressao == "2" || this.A2017ModeloDocumentoTipoImpressao == "3" ) )
         {
            try {
               gxballoon.setError("Campo Tipo de Impressão fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (""==this.A2017ModeloDocumentoTipoImpressao) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Impressão do Documento");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         /*  Failed to generate rule  */

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelodocumentotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTOTIPO");
         this.AnyError  = 0;
         if ( (""==this.A1028ModeloDocumentoTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo do Modelo do Documento");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A2017ModeloDocumentoTipoImpressao == "1" && this.A1028ModeloDocumentoTipo == "C" )
         {
            try {
               gxballoon.setError("\"Cheque\" não pode ser impresso em Modo Gráfico");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ( this.A2017ModeloDocumentoTipoImpressao == "2" || this.A2017ModeloDocumentoTipoImpressao == "3" ) && this.A1028ModeloDocumentoTipo == "T" )
         {
            try {
               gxballoon.setError("\"Carta de Cobrança\" não pode ser impresso em Modo Texto ou Impressora de Cheque");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A2017ModeloDocumentoTipoImpressao != "1" && this.A1028ModeloDocumentoTipo == "O" )
         {
            try {
               gxballoon.setError("Tipo de Impressão deve ser gráfico para Pedidos de Compra");
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
   this.Valid_Modelodocumentomarsup=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTOMARSUP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelodocumentomaresq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTOMARESQ");
         this.AnyError  = 0;
         if ( (0==this.A1031ModeloDocumentoMarEsq) )
         {
            try {
               gxballoon.setError("Informe a Margem Esquerda");
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
   this.Valid_Modelodocumentoqtdevias=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTOQTDEVIAS");
         this.AnyError  = 0;
         if ( (0==this.A1033ModeloDocumentoQtdeVias) )
         {
            try {
               gxballoon.setError("Informe a Quantidade de Vias");
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
   this.Valid_Modelodocumentoqtdedoc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTOQTDEDOC");
         this.AnyError  = 0;
         if ( (0==this.A2688ModeloDocumentoQtdeDoc) )
         {
            try {
               gxballoon.setError("Informe a Quantidade de Documentos por Folha");
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
   this.Valid_Modelodocumentoqtdelinhas=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTOQTDELINHAS");
         this.AnyError  = 0;
         if ( (0==this.A1286ModeloDocumentoQtdeLinhas) )
         {
            try {
               gxballoon.setError("Informe a Quantidade total de Linha do Documento");
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
   this.Valid_Modelodocumentotamfonte=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTOTAMFONTE");
         this.AnyError  = 0;
         if ( ! ( this.A1287ModeloDocumentoTamFonte == 1 || this.A1287ModeloDocumentoTamFonte == 0 || this.A1287ModeloDocumentoTamFonte == 8 || this.A1287ModeloDocumentoTamFonte == 9 || this.A1287ModeloDocumentoTamFonte == 10 || this.A1287ModeloDocumentoTamFonte == 11 || this.A1287ModeloDocumentoTamFonte == 12 || this.A1287ModeloDocumentoTamFonte == 14 || this.A1287ModeloDocumentoTamFonte == 16 || this.A1287ModeloDocumentoTamFonte == 58 || this.A1287ModeloDocumentoTamFonte == 59 || this.A1287ModeloDocumentoTamFonte == 60 || this.A1287ModeloDocumentoTamFonte == 61 || this.A1287ModeloDocumentoTamFonte == 62 || this.A1287ModeloDocumentoTamFonte == 64 || this.A1287ModeloDocumentoTamFonte == 66 || this.A1287ModeloDocumentoTamFonte == 70 || this.A1287ModeloDocumentoTamFonte == 67 || this.A1287ModeloDocumentoTamFonte == 68 || this.A1287ModeloDocumentoTamFonte == 69 || this.A1287ModeloDocumentoTamFonte == 75 ) )
         {
            try {
               gxballoon.setError("Campo Tamanho da fonte fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A1287ModeloDocumentoTamFonte == 1 )
         {
            try {
               gxballoon.setError("Informe o Tamanho da Fonte");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A1287ModeloDocumentoTamFonte > 66 && this.A2017ModeloDocumentoTipoImpressao == "1" )
         {
            try {
               gxballoon.setError("Tamanho da Fonte Inválido para Modo Gráfico");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A1287ModeloDocumentoTamFonte <= 66 && this.A1287ModeloDocumentoTamFonte == 75 && this.A2017ModeloDocumentoTipoImpressao == "2" )
         {
            try {
               gxballoon.setError("Tamanho da Fonte Inválido para Modo Texto");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A1287ModeloDocumentoTamFonte != 75 && this.A2017ModeloDocumentoTipoImpressao == "3" )
         {
            try {
               gxballoon.setError("Tamanho da Fonte Inválido para Impressora de Cheque");
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
   this.Valid_Modelodocumentosnmeiapag=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTOSNMEIAPAG");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelodocumentosnoitavos=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTOSNOITAVOS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelodocumentosncompacta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELODOCUMENTOSNCOMPACTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132h2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142h2_client=function()
   {
      this.executeServerEvent("'CARREGAIMAGEM1'", true, null, false, false);
   };
   this.e152h2_client=function()
   {
      this.executeServerEvent("'CARREGAIMAGEM2'", true, null, false, false);
   };
   this.e162h2_client=function()
   {
      this.executeServerEvent("'CARREGAIMAGEM3'", true, null, false, false);
   };
   this.e172h2_client=function()
   {
      this.executeServerEvent("'REMOVEIMG1'", true, null, false, false);
   };
   this.e182h2_client=function()
   {
      this.executeServerEvent("'REMOVEIMG2'", true, null, false, false);
   };
   this.e192h2_client=function()
   {
      this.executeServerEvent("'REMOVEIMG3'", true, null, false, false);
   };
   this.e202h2_client=function()
   {
      this.executeServerEvent("'IMPAUT'", true, null, false, false);
   };
   this.e212h2_client=function()
   {
      this.executeServerEvent("'INSTALADORINTEGRADOR'", true, null, false, false);
   };
   this.e222h137_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e232h137_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,67,70,73,76,79,82,85,88,91,94,96,99,102,105,107,110,113,116,119,122,124,126,135,138,139,140,142];
   this.GXLastCtrlId =142;
   this.JSHANDLER1Container = gx.uc.getNew(this, 137, 14, "JSHandler", "JSHANDLER1Container", "Jshandler1");
   var JSHANDLER1Container = this.JSHANDLER1Container;
   JSHANDLER1Container.setDynProp("js", "Js", "", "str");
   JSHANDLER1Container.setProp("Visible", "Visible", true, "bool");
   JSHANDLER1Container.setProp("Enabled", "Enabled", true, "boolean");
   JSHANDLER1Container.setProp("Class", "Class", "", "char");
   JSHANDLER1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(JSHANDLER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentoid,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOID",gxz:"Z1024ModeloDocumentoId",gxold:"O1024ModeloDocumentoId",gxvar:"A1024ModeloDocumentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1024ModeloDocumentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1024ModeloDocumentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELODOCUMENTOID",gx.O.A1024ModeloDocumentoId,0)},c2v:function(){gx.O.A1024ModeloDocumentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELODOCUMENTOID",'.')},nac:function(){return !(0==this.AV17ModeloDocumentoId)}};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentodescricao,isvalid:null,rgrid:[],fld:"MODELODOCUMENTODESCRICAO",gxz:"Z1025ModeloDocumentoDescricao",gxold:"O1025ModeloDocumentoDescricao",gxvar:"A1025ModeloDocumentoDescricao",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1025ModeloDocumentoDescricao=Value},v2z:function(Value){gx.O.Z1025ModeloDocumentoDescricao=Value},v2c:function(){gx.fn.setControlValue("MODELODOCUMENTODESCRICAO",gx.O.A1025ModeloDocumentoDescricao,0)},c2v:function(){gx.O.A1025ModeloDocumentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCUMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentotipoimpressao,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOTIPOIMPRESSAO",gxz:"Z2017ModeloDocumentoTipoImpressao",gxold:"O2017ModeloDocumentoTipoImpressao",gxvar:"A2017ModeloDocumentoTipoImpressao",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2017ModeloDocumentoTipoImpressao=Value},v2z:function(Value){gx.O.Z2017ModeloDocumentoTipoImpressao=Value},v2c:function(){gx.fn.setComboBoxValue("MODELODOCUMENTOTIPOIMPRESSAO",gx.O.A2017ModeloDocumentoTipoImpressao);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2017ModeloDocumentoTipoImpressao=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCUMENTOTIPOIMPRESSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOIMPRESSORA",gxz:"Z10616ModeloDocumentoImpressora",gxold:"O10616ModeloDocumentoImpressora",gxvar:"A10616ModeloDocumentoImpressora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10616ModeloDocumentoImpressora=Value},v2z:function(Value){gx.O.Z10616ModeloDocumentoImpressora=Value},v2c:function(){gx.fn.setComboBoxValue("MODELODOCUMENTOIMPRESSORA",gx.O.A10616ModeloDocumentoImpressora)},c2v:function(){gx.O.A10616ModeloDocumentoImpressora=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCUMENTOIMPRESSORA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"IMGAUT",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentotipo,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOTIPO",gxz:"Z1028ModeloDocumentoTipo",gxold:"O1028ModeloDocumentoTipo",gxvar:"A1028ModeloDocumentoTipo",ucs:[],op:[24,35],ip:[24,35],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1028ModeloDocumentoTipo=Value},v2z:function(Value){gx.O.Z1028ModeloDocumentoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("MODELODOCUMENTOTIPO",gx.O.A1028ModeloDocumentoTipo)},c2v:function(){gx.O.A1028ModeloDocumentoTipo=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCUMENTOTIPO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentomarsup,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOMARSUP",gxz:"Z1029ModeloDocumentoMarSup",gxold:"O1029ModeloDocumentoMarSup",gxvar:"A1029ModeloDocumentoMarSup",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1029ModeloDocumentoMarSup=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1029ModeloDocumentoMarSup=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELODOCUMENTOMARSUP",gx.O.A1029ModeloDocumentoMarSup,0)},c2v:function(){gx.O.A1029ModeloDocumentoMarSup=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELODOCUMENTOMARSUP",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentomaresq,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOMARESQ",gxz:"Z1031ModeloDocumentoMarEsq",gxold:"O1031ModeloDocumentoMarEsq",gxvar:"A1031ModeloDocumentoMarEsq",ucs:[],op:[45],ip:[45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1031ModeloDocumentoMarEsq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1031ModeloDocumentoMarEsq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELODOCUMENTOMARESQ",gx.O.A1031ModeloDocumentoMarEsq,0)},c2v:function(){gx.O.A1031ModeloDocumentoMarEsq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELODOCUMENTOMARESQ",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentoqtdevias,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOQTDEVIAS",gxz:"Z1033ModeloDocumentoQtdeVias",gxold:"O1033ModeloDocumentoQtdeVias",gxvar:"A1033ModeloDocumentoQtdeVias",ucs:[],op:[50],ip:[50],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1033ModeloDocumentoQtdeVias=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1033ModeloDocumentoQtdeVias=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELODOCUMENTOQTDEVIAS",gx.O.A1033ModeloDocumentoQtdeVias,0)},c2v:function(){gx.O.A1033ModeloDocumentoQtdeVias=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELODOCUMENTOQTDEVIAS",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentoqtdedoc,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOQTDEDOC",gxz:"Z2688ModeloDocumentoQtdeDoc",gxold:"O2688ModeloDocumentoQtdeDoc",gxvar:"A2688ModeloDocumentoQtdeDoc",ucs:[],op:[55],ip:[55],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2688ModeloDocumentoQtdeDoc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2688ModeloDocumentoQtdeDoc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELODOCUMENTOQTDEDOC",gx.O.A2688ModeloDocumentoQtdeDoc,0)},c2v:function(){gx.O.A2688ModeloDocumentoQtdeDoc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELODOCUMENTOQTDEDOC",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentoqtdelinhas,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOQTDELINHAS",gxz:"Z1286ModeloDocumentoQtdeLinhas",gxold:"O1286ModeloDocumentoQtdeLinhas",gxvar:"A1286ModeloDocumentoQtdeLinhas",ucs:[],op:[60],ip:[60],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1286ModeloDocumentoQtdeLinhas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1286ModeloDocumentoQtdeLinhas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELODOCUMENTOQTDELINHAS",gx.O.A1286ModeloDocumentoQtdeLinhas,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1286ModeloDocumentoQtdeLinhas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELODOCUMENTOQTDELINHAS",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentotamfonte,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOTAMFONTE",gxz:"Z1287ModeloDocumentoTamFonte",gxold:"O1287ModeloDocumentoTamFonte",gxvar:"A1287ModeloDocumentoTamFonte",ucs:[],op:[24,65],ip:[24,65],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1287ModeloDocumentoTamFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1287ModeloDocumentoTamFonte=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("MODELODOCUMENTOTAMFONTE",gx.O.A1287ModeloDocumentoTamFonte);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1287ModeloDocumentoTamFonte=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELODOCUMENTOTAMFONTE",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[67]={fld:"TABLE10",grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentosnmeiapag,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOSNMEIAPAG",gxz:"Z1034ModeloDocumentoSnMeiaPag",gxold:"O1034ModeloDocumentoSnMeiaPag",gxvar:"A1034ModeloDocumentoSnMeiaPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1034ModeloDocumentoSnMeiaPag=Value},v2z:function(Value){gx.O.Z1034ModeloDocumentoSnMeiaPag=Value},v2c:function(){gx.fn.setCheckBoxValue("MODELODOCUMENTOSNMEIAPAG",gx.O.A1034ModeloDocumentoSnMeiaPag,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1034ModeloDocumentoSnMeiaPag=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCUMENTOSNMEIAPAG")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentosnoitavos,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOSNOITAVOS",gxz:"Z1285ModeloDocumentoSnOitavos",gxold:"O1285ModeloDocumentoSnOitavos",gxvar:"A1285ModeloDocumentoSnOitavos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1285ModeloDocumentoSnOitavos=Value},v2z:function(Value){gx.O.Z1285ModeloDocumentoSnOitavos=Value},v2c:function(){gx.fn.setCheckBoxValue("MODELODOCUMENTOSNOITAVOS",gx.O.A1285ModeloDocumentoSnOitavos,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1285ModeloDocumentoSnOitavos=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCUMENTOSNOITAVOS")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[76]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocumentosncompacta,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOSNCOMPACTA",gxz:"Z1288ModeloDocumentoSnCompacta",gxold:"O1288ModeloDocumentoSnCompacta",gxvar:"A1288ModeloDocumentoSnCompacta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1288ModeloDocumentoSnCompacta=Value},v2z:function(Value){gx.O.Z1288ModeloDocumentoSnCompacta=Value},v2c:function(){gx.fn.setCheckBoxValue("MODELODOCUMENTOSNCOMPACTA",gx.O.A1288ModeloDocumentoSnCompacta,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1288ModeloDocumentoSnCompacta=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCUMENTOSNCOMPACTA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 76 , function() {
   });
   GXValidFnc[79]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOSNSALTAPAG",gxz:"Z3137ModeloDocumentoSnSaltaPag",gxold:"O3137ModeloDocumentoSnSaltaPag",gxvar:"A3137ModeloDocumentoSnSaltaPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3137ModeloDocumentoSnSaltaPag=Value},v2z:function(Value){gx.O.Z3137ModeloDocumentoSnSaltaPag=Value},v2c:function(){gx.fn.setCheckBoxValue("MODELODOCUMENTOSNSALTAPAG",gx.O.A3137ModeloDocumentoSnSaltaPag,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3137ModeloDocumentoSnSaltaPag=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCUMENTOSNSALTAPAG")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TABLE12",grid:0};
   GXValidFnc[85]={fld:"TABLEIMAGEM",grid:0};
   GXValidFnc[88]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM1",gxz:"ZV51Imagem1",gxold:"OV51Imagem1",gxvar:"AV51Imagem1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51Imagem1=Value},v2z:function(Value){gx.O.ZV51Imagem1=Value},v2c:function(){gx.fn.setMultimediaValue("vIMAGEM1",gx.O.AV51Imagem1,gx.O.AV65Imagem1_GXI)},c2v:function(){gx.O.AV65Imagem1_GXI=this.val_GXI();gx.O.AV51Imagem1=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGEM1")},val_GXI:function(){return gx.fn.getControlValue("vIMAGEM1_GXI")}, gxvar_GXI:'AV65Imagem1_GXI',nac:gx.falseFn};
   GXValidFnc[91]={fld:"TXTCARREGARIMG1", format:0,grid:0};
   GXValidFnc[94]={fld:"TXTLIMPAR1", format:0,grid:0};
   GXValidFnc[96]={fld:"TABLEIMAGEM2",grid:0};
   GXValidFnc[99]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM2",gxz:"ZV52Imagem2",gxold:"OV52Imagem2",gxvar:"AV52Imagem2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52Imagem2=Value},v2z:function(Value){gx.O.ZV52Imagem2=Value},v2c:function(){gx.fn.setMultimediaValue("vIMAGEM2",gx.O.AV52Imagem2,gx.O.AV66Imagem2_GXI)},c2v:function(){gx.O.AV66Imagem2_GXI=this.val_GXI();gx.O.AV52Imagem2=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGEM2")},val_GXI:function(){return gx.fn.getControlValue("vIMAGEM2_GXI")}, gxvar_GXI:'AV66Imagem2_GXI',nac:gx.falseFn};
   GXValidFnc[102]={fld:"TXTCARREGARIMG2", format:0,grid:0};
   GXValidFnc[105]={fld:"TXTLIMPAR2", format:0,grid:0};
   GXValidFnc[107]={fld:"TABLEIMAGEM3",grid:0};
   GXValidFnc[110]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM3",gxz:"ZV53Imagem3",gxold:"OV53Imagem3",gxvar:"AV53Imagem3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53Imagem3=Value},v2z:function(Value){gx.O.ZV53Imagem3=Value},v2c:function(){gx.fn.setMultimediaValue("vIMAGEM3",gx.O.AV53Imagem3,gx.O.AV67Imagem3_GXI)},c2v:function(){gx.O.AV67Imagem3_GXI=this.val_GXI();gx.O.AV53Imagem3=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGEM3")},val_GXI:function(){return gx.fn.getControlValue("vIMAGEM3_GXI")}, gxvar_GXI:'AV67Imagem3_GXI',nac:gx.falseFn};
   GXValidFnc[113]={fld:"TXTCARREGARIMG3", format:0,grid:0};
   GXValidFnc[116]={fld:"TXTLIMPAR3", format:0,grid:0};
   GXValidFnc[119]={fld:"TABLE13",grid:0};
   GXValidFnc[122]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOUSUARIOALT",gxz:"Z1026ModeloDocumentoUsuarioAlt",gxold:"O1026ModeloDocumentoUsuarioAlt",gxvar:"A1026ModeloDocumentoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1026ModeloDocumentoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1026ModeloDocumentoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MODELODOCUMENTOUSUARIOALT",gx.O.A1026ModeloDocumentoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1026ModeloDocumentoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCUMENTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 124 , function() {
   });
   GXValidFnc[126]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTODATAHORAALT",gxz:"Z1027ModeloDocumentoDataHoraAlt",gxold:"O1027ModeloDocumentoDataHoraAlt",gxvar:"A1027ModeloDocumentoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1027ModeloDocumentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1027ModeloDocumentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MODELODOCUMENTODATAHORAALT",gx.O.A1027ModeloDocumentoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1027ModeloDocumentoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MODELODOCUMENTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 126 , function() {
   });
   GXValidFnc[135]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV19AcessoSistemaSequencia",gxold:"OV19AcessoSistemaSequencia",gxvar:"AV19AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV19AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[138]={fld:"JS", format:2,grid:0};
   GXValidFnc[139]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTEGRADORURL",gxz:"ZV61IntegradorURL",gxold:"OV61IntegradorURL",gxvar:"AV61IntegradorURL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61IntegradorURL=Value},v2z:function(Value){gx.O.ZV61IntegradorURL=Value},v2c:function(){gx.fn.setControlValue("vINTEGRADORURL",gx.O.AV61IntegradorURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV61IntegradorURL=this.val()},val:function(){return gx.fn.getControlValue("vINTEGRADORURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 139 , function() {
   });
   GXValidFnc[140]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPRESSORADEFAULT",gxz:"ZV56ImpressoraDefault",gxold:"OV56ImpressoraDefault",gxvar:"AV56ImpressoraDefault",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56ImpressoraDefault=Value},v2z:function(Value){gx.O.ZV56ImpressoraDefault=Value},v2c:function(){gx.fn.setControlValue("vIMPRESSORADEFAULT",gx.O.AV56ImpressoraDefault,0)},c2v:function(){gx.O.AV56ImpressoraDefault=this.val()},val:function(){return gx.fn.getControlValue("vIMPRESSORADEFAULT")},nac:gx.falseFn};
   GXValidFnc[142]={fld:"BTNHELP",grid:0};
   this.A1024ModeloDocumentoId = 0 ;
   this.Z1024ModeloDocumentoId = 0 ;
   this.O1024ModeloDocumentoId = 0 ;
   this.A1025ModeloDocumentoDescricao = "" ;
   this.Z1025ModeloDocumentoDescricao = "" ;
   this.O1025ModeloDocumentoDescricao = "" ;
   this.A2017ModeloDocumentoTipoImpressao = "" ;
   this.Z2017ModeloDocumentoTipoImpressao = "" ;
   this.O2017ModeloDocumentoTipoImpressao = "" ;
   this.A10616ModeloDocumentoImpressora = "" ;
   this.Z10616ModeloDocumentoImpressora = "" ;
   this.O10616ModeloDocumentoImpressora = "" ;
   this.A1028ModeloDocumentoTipo = "" ;
   this.Z1028ModeloDocumentoTipo = "" ;
   this.O1028ModeloDocumentoTipo = "" ;
   this.A1029ModeloDocumentoMarSup = 0 ;
   this.Z1029ModeloDocumentoMarSup = 0 ;
   this.O1029ModeloDocumentoMarSup = 0 ;
   this.A1031ModeloDocumentoMarEsq = 0 ;
   this.Z1031ModeloDocumentoMarEsq = 0 ;
   this.O1031ModeloDocumentoMarEsq = 0 ;
   this.A1033ModeloDocumentoQtdeVias = 0 ;
   this.Z1033ModeloDocumentoQtdeVias = 0 ;
   this.O1033ModeloDocumentoQtdeVias = 0 ;
   this.A2688ModeloDocumentoQtdeDoc = 0 ;
   this.Z2688ModeloDocumentoQtdeDoc = 0 ;
   this.O2688ModeloDocumentoQtdeDoc = 0 ;
   this.A1286ModeloDocumentoQtdeLinhas = 0 ;
   this.Z1286ModeloDocumentoQtdeLinhas = 0 ;
   this.O1286ModeloDocumentoQtdeLinhas = 0 ;
   this.A1287ModeloDocumentoTamFonte = 0 ;
   this.Z1287ModeloDocumentoTamFonte = 0 ;
   this.O1287ModeloDocumentoTamFonte = 0 ;
   this.A1034ModeloDocumentoSnMeiaPag = "" ;
   this.Z1034ModeloDocumentoSnMeiaPag = "" ;
   this.O1034ModeloDocumentoSnMeiaPag = "" ;
   this.A1285ModeloDocumentoSnOitavos = "" ;
   this.Z1285ModeloDocumentoSnOitavos = "" ;
   this.O1285ModeloDocumentoSnOitavos = "" ;
   this.A1288ModeloDocumentoSnCompacta = "" ;
   this.Z1288ModeloDocumentoSnCompacta = "" ;
   this.O1288ModeloDocumentoSnCompacta = "" ;
   this.A3137ModeloDocumentoSnSaltaPag = "" ;
   this.Z3137ModeloDocumentoSnSaltaPag = "" ;
   this.O3137ModeloDocumentoSnSaltaPag = "" ;
   this.AV65Imagem1_GXI = "" ;
   this.AV51Imagem1 = "" ;
   this.ZV51Imagem1 = "" ;
   this.OV51Imagem1 = "" ;
   this.AV66Imagem2_GXI = "" ;
   this.AV52Imagem2 = "" ;
   this.ZV52Imagem2 = "" ;
   this.OV52Imagem2 = "" ;
   this.AV67Imagem3_GXI = "" ;
   this.AV53Imagem3 = "" ;
   this.ZV53Imagem3 = "" ;
   this.OV53Imagem3 = "" ;
   this.A1026ModeloDocumentoUsuarioAlt = "" ;
   this.Z1026ModeloDocumentoUsuarioAlt = "" ;
   this.O1026ModeloDocumentoUsuarioAlt = "" ;
   this.A1027ModeloDocumentoDataHoraAlt = gx.date.nullDate() ;
   this.Z1027ModeloDocumentoDataHoraAlt = gx.date.nullDate() ;
   this.O1027ModeloDocumentoDataHoraAlt = gx.date.nullDate() ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.ZV19AcessoSistemaSequencia = 0 ;
   this.OV19AcessoSistemaSequencia = 0 ;
   this.AV61IntegradorURL = "" ;
   this.ZV61IntegradorURL = "" ;
   this.OV61IntegradorURL = "" ;
   this.AV56ImpressoraDefault = "" ;
   this.ZV56ImpressoraDefault = "" ;
   this.OV56ImpressoraDefault = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV63Pgmname = "" ;
   this.AV64Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV61IntegradorURL = "" ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV55Data = "" ;
   this.AV54BlueFocusEnv = {} ;
   this.AV59isCloud = false ;
   this.AV29path = "" ;
   this.AV17ModeloDocumentoId = 0 ;
   this.AV56ImpressoraDefault = "" ;
   this.AV51Imagem1 = "" ;
   this.AV52Imagem2 = "" ;
   this.AV53Imagem3 = "" ;
   this.AV26File = {} ;
   this.AV44ModeloDocumentoImagem1 = "" ;
   this.AV45ModeloDocumentoImagem2 = "" ;
   this.AV46ModeloDocumentoImagem3 = "" ;
   this.AV60WebSession = {} ;
   this.A1023ModeloDocumentoEmpresaId = "" ;
   this.A1024ModeloDocumentoId = 0 ;
   this.A1026ModeloDocumentoUsuarioAlt = "" ;
   this.A1027ModeloDocumentoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A1025ModeloDocumentoDescricao = "" ;
   this.A2017ModeloDocumentoTipoImpressao = "" ;
   this.A1028ModeloDocumentoTipo = "" ;
   this.A1029ModeloDocumentoMarSup = 0 ;
   this.A1031ModeloDocumentoMarEsq = 0 ;
   this.A1033ModeloDocumentoQtdeVias = 0 ;
   this.A1034ModeloDocumentoSnMeiaPag = "" ;
   this.A1285ModeloDocumentoSnOitavos = "" ;
   this.A1286ModeloDocumentoQtdeLinhas = 0 ;
   this.A1287ModeloDocumentoTamFonte = 0 ;
   this.A2688ModeloDocumentoQtdeDoc = 0 ;
   this.A1288ModeloDocumentoSnCompacta = "" ;
   this.A3137ModeloDocumentoSnSaltaPag = "" ;
   this.A3131ModeloDocumentoImagem1 = "" ;
   this.A3132ModeloDocumentoImagem2 = "" ;
   this.A3133ModeloDocumentoImagem3 = "" ;
   this.A10616ModeloDocumentoImpressora = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e122h2_client": ["'FECHAR'", true] ,"e132h2_client": ["AFTER TRN", true] ,"e142h2_client": ["'CARREGAIMAGEM1'", true] ,"e152h2_client": ["'CARREGAIMAGEM2'", true] ,"e162h2_client": ["'CARREGAIMAGEM3'", true] ,"e172h2_client": ["'REMOVEIMG1'", true] ,"e182h2_client": ["'REMOVEIMG2'", true] ,"e192h2_client": ["'REMOVEIMG3'", true] ,"e202h2_client": ["'IMPAUT'", true] ,"e212h2_client": ["'INSTALADORINTEGRADOR'", true] ,"e222h137_client": ["ENTER", true] ,"e232h137_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17ModeloDocumentoId',fld:'vMODELODOCUMENTOID'},{av:'AV44ModeloDocumentoImagem1',fld:'vMODELODOCUMENTOIMAGEM1'},{av:'AV45ModeloDocumentoImagem2',fld:'vMODELODOCUMENTOIMAGEM2'},{av:'AV46ModeloDocumentoImagem3',fld:'vMODELODOCUMENTOIMAGEM3'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV65Imagem1_GXI',fld:'vIMAGEM1_GXI'},{av:'AV66Imagem2_GXI',fld:'vIMAGEM2_GXI'},{av:'AV67Imagem3_GXI',fld:'vIMAGEM3_GXI'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV59isCloud',fld:'vISCLOUD'},{av:'AV29path',fld:'vPATH'},{av:'AV67Imagem3_GXI',fld:'vIMAGEM3_GXI'},{av:'AV66Imagem2_GXI',fld:'vIMAGEM2_GXI'},{av:'AV65Imagem1_GXI',fld:'vIMAGEM1_GXI'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'CARREGAIMAGEM1'"] = [[],[{av:'AV59isCloud',fld:'vISCLOUD'},{av:'AV58DirUpload',fld:'vDIRUPLOAD'}]];
   this.EvtParms["'CARREGAIMAGEM2'"] = [[],[{av:'AV59isCloud',fld:'vISCLOUD'},{av:'AV58DirUpload',fld:'vDIRUPLOAD'}]];
   this.EvtParms["'CARREGAIMAGEM3'"] = [[],[{av:'AV59isCloud',fld:'vISCLOUD'},{av:'AV58DirUpload',fld:'vDIRUPLOAD'}]];
   this.EvtParms["'REMOVEIMG1'"] = [[],[{av:'AV51Imagem1',fld:'vIMAGEM1'}]];
   this.EvtParms["'REMOVEIMG2'"] = [[],[{av:'AV52Imagem2',fld:'vIMAGEM2'}]];
   this.EvtParms["'REMOVEIMG3'"] = [[],[{av:'AV53Imagem3',fld:'vIMAGEM3'}]];
   this.EvtParms["'IMPAUT'"] = [[{av:'AV61IntegradorURL',fld:'vINTEGRADORURL'}],[{av:'AV55Data',fld:'vDATA'},{av:'this.JSHANDLER1Container.js',ctrl:'JSHANDLER1',prop:'js'}]];
   this.EvtParms["'INSTALADORINTEGRADOR'"] = [[],[{av:'AV57ArquivoInst',fld:'vARQUIVOINST'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17ModeloDocumentoId", "vMODELODOCUMENTOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1023ModeloDocumentoEmpresaId", "MODELODOCUMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("A3131ModeloDocumentoImagem1", "MODELODOCUMENTOIMAGEM1", 0, "svchar");
   this.setVCMap("A3132ModeloDocumentoImagem2", "MODELODOCUMENTOIMAGEM2", 0, "svchar");
   this.setVCMap("A3133ModeloDocumentoImagem3", "MODELODOCUMENTOIMAGEM3", 0, "svchar");
   this.setVCMap("AV64Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV63Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV44ModeloDocumentoImagem1", "vMODELODOCUMENTOIMAGEM1", 0, "svchar");
   this.setVCMap("AV45ModeloDocumentoImagem2", "vMODELODOCUMENTOIMAGEM2", 0, "svchar");
   this.setVCMap("AV46ModeloDocumentoImagem3", "vMODELODOCUMENTOIMAGEM3", 0, "svchar");
   this.InitStandaloneVars( );
   this.LvlOlds[ 137 ]= ["O1288ModeloDocumentoSnCompacta","O1287ModeloDocumentoTamFonte","O1286ModeloDocumentoQtdeLinhas","O1285ModeloDocumentoSnOitavos","O1034ModeloDocumentoSnMeiaPag","O1033ModeloDocumentoQtdeVias","O1031ModeloDocumentoMarEsq","O1029ModeloDocumentoMarSup","O1028ModeloDocumentoTipo","O1025ModeloDocumentoDescricao"] ;
});
gx.setParentObj(new tmodelodocumento());
