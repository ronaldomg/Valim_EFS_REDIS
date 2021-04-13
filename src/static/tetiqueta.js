/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:50:27.69
*/
gx.evt.autoSkip = false;
gx.define('tetiqueta', false, function () {
   this.ServerClass =  "tetiqueta" ;
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
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A240EmpresaEtiquetaEmpresaId=gx.fn.getControlValue("EMPRESAETIQUETAEMPRESAID") ;
      this.AV19EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID") ;
      this.A162EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("EMPRESACLASSIFICACAOEMPRESAID") ;
      this.AV18EmpresaCodificacaoEmpresaId=gx.fn.getControlValue("vEMPRESACODIFICACAOEMPRESAID") ;
      this.A164EmpresaCodificacaoEmpresaId=gx.fn.getControlValue("EMPRESACODIFICACAOEMPRESAID") ;
      this.AV20EmpresaTiposEnderecoEmpresaId=gx.fn.getControlValue("vEMPRESATIPOSENDERECOEMPRESAID") ;
      this.A228EmpresaTiposEnderecoEmpresaId=gx.fn.getControlValue("EMPRESATIPOSENDERECOEMPRESAID") ;
      this.AV15EtiquetaCodigo=gx.fn.getIntegerValue("vETIQUETACODIGO",'.') ;
      this.AV16UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV22ClassificacaoEstEmpresaId=gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID") ;
      this.AV23CodificacaoEstEmpresaId=gx.fn.getControlValue("vCODIFICACAOESTEMPRESAID") ;
      this.AV24ErroTipoDados=gx.fn.getControlValue("vERROTIPODADOS") ;
      this.AV26QtLinhas=gx.fn.getIntegerValue("vQTLINHAS",'.') ;
      this.AV25ErroQtLinhas=gx.fn.getControlValue("vERROQTLINHAS") ;
      this.AV30QtLinhas1=gx.fn.getIntegerValue("vQTLINHAS1",'.') ;
      this.A55ClassificacaoDescricao=gx.fn.getControlValue("CLASSIFICACAODESCRICAO") ;
      this.A59CodificacaoDescricao=gx.fn.getControlValue("CODIFICACAODESCRICAO") ;
      this.A570TiposEnderecoDescricao=gx.fn.getControlValue("TIPOSENDERECODESCRICAO") ;
      this.AV33Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV32Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Etiquetacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A235EtiquetaDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição da Etiqueta");
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
   this.Valid_Etiquetatipodados=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATIPODADOS");
         this.AnyError  = 0;
         if ( (""==this.A5880EtiquetaTipoDados) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Dados");
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
   this.Valid_Etiquetatamfonte=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATAMFONTE");
         this.AnyError  = 0;
         if ( ! ( this.A237EtiquetaTamFonte == 1 || this.A237EtiquetaTamFonte == 0 || this.A237EtiquetaTamFonte == 8 || this.A237EtiquetaTamFonte == 9 || this.A237EtiquetaTamFonte == 10 || this.A237EtiquetaTamFonte == 11 || this.A237EtiquetaTamFonte == 12 || this.A237EtiquetaTamFonte == 14 || this.A237EtiquetaTamFonte == 16 || this.A237EtiquetaTamFonte == 58 || this.A237EtiquetaTamFonte == 59 || this.A237EtiquetaTamFonte == 60 || this.A237EtiquetaTamFonte == 61 || this.A237EtiquetaTamFonte == 62 || this.A237EtiquetaTamFonte == 64 || this.A237EtiquetaTamFonte == 66 || this.A237EtiquetaTamFonte == 70 || this.A237EtiquetaTamFonte == 67 || this.A237EtiquetaTamFonte == 68 || this.A237EtiquetaTamFonte == 69 || this.A237EtiquetaTamFonte == 75 ) )
         {
            try {
               gxballoon.setError("Campo Tamanho Fonte fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A237EtiquetaTamFonte == 1 )
         {
            try {
               gxballoon.setError("Informe o Tamanho/Estilo da Fonte");
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
   this.Valid_Etiquetatipoimpressao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATIPOIMPRESSAO");
         this.AnyError  = 0;
         if ( ! ( this.A743EtiquetaTipoImpressao == "0" || this.A743EtiquetaTipoImpressao == "1" || this.A743EtiquetaTipoImpressao == "2" || this.A743EtiquetaTipoImpressao == "3" ) )
         {
            try {
               gxballoon.setError("Campo Tipo de Impressão fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A237EtiquetaTamFonte > 66 && this.A743EtiquetaTipoImpressao == "1" )
         {
            try {
               gxballoon.setError("Tamanho/Estilo da Fonte Inválido para Modo Gráfico");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A237EtiquetaTamFonte <= 66 && this.A743EtiquetaTipoImpressao == "2" )
         {
            try {
               gxballoon.setError("Tamanho/Estilo da Fonte Inválido para Modo Texto");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (""==this.A743EtiquetaTipoImpressao) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Impressão");
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
   this.Valid_Etiquetaqtdlinhaspag=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETAQTDLINHASPAG");
         this.AnyError  = 0;
         if ( (0==this.A98EtiquetaQtdLinhasPag) )
         {
            try {
               gxballoon.setError("Informe a Qtde de Linhas por Folha");
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
   this.Valid_Etiquetamargsup=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETAMARGSUP");
         this.AnyError  = 0;
         if ( this.A101EtiquetaMargSup >= this.A98EtiquetaQtdLinhasPag )
         {
            try {
               gxballoon.setError("Margem Superior não pode ser maior/igual que a Qtde de Linhas por Folha");
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
   this.Valid_Etiquetacompactaimp=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETACOMPACTAIMP");
         this.AnyError  = 0;
         if ( this.A743EtiquetaTipoImpressao == "1" && this.A103EtiquetaCompactaImp == "S" )
         {
            try {
               gxballoon.setError("Etiqueta Modo Gráfico não pode Compactar Impressão");
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
   this.Valid_Etiquetaqtdcollinha=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETAQTDCOLLINHA");
         this.AnyError  = 0;
         if ( (0==this.A100EtiquetaQtdColLinha) )
         {
            try {
               gxballoon.setError("Informe a Qtde de Colunas");
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
   this.Valid_Etiquetatamentrelinha=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATAMENTRELINHA");
         this.AnyError  = 0;
         if ( this.A102EtiquetaTamEntreLinha >= this.A98EtiquetaQtdLinhasPag )
         {
            try {
               gxballoon.setError("Espaço entre Linhas não pode ser maior/igual que a Qtde de Linhas por Folha");
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
   this.Valid_Etiquetameiapagina=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETAMEIAPAGINA");
         this.AnyError  = 0;
         if ( this.A743EtiquetaTipoImpressao == "1" && this.A742EtiquetaMeiaPagina == "S" )
         {
            try {
               gxballoon.setError("Etiqueta Modo Gráfico não utiliza Meia Página");
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
   this.Valid_Etiquetaqtdlinhasetq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETAQTDLINHASETQ");
         this.AnyError  = 0;
         if ( (0==this.A99EtiquetaQtdLinhasEtq) )
         {
            try {
               gxballoon.setError("Informe a Qtde Linhas por Etiqueta");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A99EtiquetaQtdLinhasEtq > this.A98EtiquetaQtdLinhasPag )
         {
            try {
               gxballoon.setError("Qtde Linhas por Etiqueta não pode ser maior que a Qtde de Linhas por Folha");
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
   this.Valid_Etiquetaqtdcarlinhaetq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETAQTDCARLINHAETQ");
         this.AnyError  = 0;
         if ( (0==this.A236EtiquetaQtdCarLinhaEtq) )
         {
            try {
               gxballoon.setError("Informe a Qtde Caracteres por Etiqueta");
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
   this.Valid_Classificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSIFICACAOID");
         this.AnyError  = 0;
         if ( this.A5880EtiquetaTipoDados != "C" && ! (""==this.A54ClassificacaoId) )
         {
            try {
               gxballoon.setError("Só é permitido informar a Classificação (Dados da Pessoa) quando o Tipo de Dados for \"Cliente/Fornecedor\"");
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
   this.Valid_Codificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CODIFICACAOID");
         this.AnyError  = 0;
         if ( this.A5880EtiquetaTipoDados != "C" && ! (""==this.A58CodificacaoId) )
         {
            try {
               gxballoon.setError("Só é permitido informar a Codificação (Dados da Pessoa) quando o Tipo de Dados for \"Cliente/Fornecedor\"");
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
   this.Valid_Tiposenderecoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOSENDERECOID");
         this.AnyError  = 0;
         if ( this.A5880EtiquetaTipoDados != "C" && ! (""==this.A229TiposEnderecoId) )
         {
            try {
               gxballoon.setError("Só é permitido informar o Endereço (Dados da Pessoa) quando o Tipo de Dados for \"Cliente/Fornecedor\"");
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
   this.Valid_Etiquetaprodutoclassificacaopr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETAPRODUTOCLASSIFICACAOPR");
         this.AnyError  = 0;
         if ( this.A5880EtiquetaTipoDados != "P" && ! (""==this.A5881EtiquetaProdutoClassificacaoPr) )
         {
            try {
               gxballoon.setError("Só é permitido informar a Classificação (Dados do Produto) quando o Tipo de Dados for \"Produto\"");
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
   this.Valid_Etiquetaprodutocodificacaoprin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETAPRODUTOCODIFICACAOPRIN");
         this.AnyError  = 0;
         if ( this.A5880EtiquetaTipoDados != "P" && ! (""==this.A5882EtiquetaProdutoCodificacaoPrin) )
         {
            try {
               gxballoon.setError("Só é permitido informar a Codificação (Dados do Produto) quando o Tipo de Dados for \"Produto\"");
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
   this.e120h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130h2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140h22_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150h22_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,21,23,26,28,31,33,36,38,41,44,47,49,51,53,55,58,60,62,64,66,69,72,75,77,79,81,84,87,90,93,95,98,100,103,105,108,111,114,116,119,121,124,127,129,131,140,142];
   this.GXLastCtrlId =142;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE5",grid:0};
   GXValidFnc[12]={fld:"TABLE6",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Etiquetacodigo,isvalid:null,rgrid:[],fld:"ETIQUETACODIGO",gxz:"Z241EtiquetaCodigo",gxold:"O241EtiquetaCodigo",gxvar:"A241EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A241EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z241EtiquetaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETACODIGO",gx.O.A241EtiquetaCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A241EtiquetaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETACODIGO",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[21]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetadescricao,isvalid:null,rgrid:[],fld:"ETIQUETADESCRICAO",gxz:"Z235EtiquetaDescricao",gxold:"O235EtiquetaDescricao",gxvar:"A235EtiquetaDescricao",ucs:[],op:[23],ip:[23],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A235EtiquetaDescricao=Value},v2z:function(Value){gx.O.Z235EtiquetaDescricao=Value},v2c:function(){gx.fn.setControlValue("ETIQUETADESCRICAO",gx.O.A235EtiquetaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A235EtiquetaDescricao=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatipodados,isvalid:null,rgrid:[],fld:"ETIQUETATIPODADOS",gxz:"Z5880EtiquetaTipoDados",gxold:"O5880EtiquetaTipoDados",gxvar:"A5880EtiquetaTipoDados",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5880EtiquetaTipoDados=Value},v2z:function(Value){gx.O.Z5880EtiquetaTipoDados=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATIPODADOS",gx.O.A5880EtiquetaTipoDados)},c2v:function(){gx.O.A5880EtiquetaTipoDados=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATIPODADOS")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatamfonte,isvalid:null,rgrid:[],fld:"ETIQUETATAMFONTE",gxz:"Z237EtiquetaTamFonte",gxold:"O237EtiquetaTamFonte",gxvar:"A237EtiquetaTamFonte",ucs:[],op:[33],ip:[33],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A237EtiquetaTamFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.Z237EtiquetaTamFonte=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATAMFONTE",gx.O.A237EtiquetaTamFonte);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A237EtiquetaTamFonte=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATAMFONTE",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[36]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatipoimpressao,isvalid:null,rgrid:[],fld:"ETIQUETATIPOIMPRESSAO",gxz:"Z743EtiquetaTipoImpressao",gxold:"O743EtiquetaTipoImpressao",gxvar:"A743EtiquetaTipoImpressao",ucs:[],op:[33,38],ip:[33,38],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A743EtiquetaTipoImpressao=Value},v2z:function(Value){gx.O.Z743EtiquetaTipoImpressao=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATIPOIMPRESSAO",gx.O.A743EtiquetaTipoImpressao);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A743EtiquetaTipoImpressao=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATIPOIMPRESSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[41]={fld:"TABLE7",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetaqtdlinhaspag,isvalid:null,rgrid:[],fld:"ETIQUETAQTDLINHASPAG",gxz:"Z98EtiquetaQtdLinhasPag",gxold:"O98EtiquetaQtdLinhasPag",gxvar:"A98EtiquetaQtdLinhasPag",ucs:[],op:[49],ip:[49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A98EtiquetaQtdLinhasPag=gx.num.intval(Value)},v2z:function(Value){gx.O.Z98EtiquetaQtdLinhasPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETAQTDLINHASPAG",gx.O.A98EtiquetaQtdLinhasPag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A98EtiquetaQtdLinhasPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETAQTDLINHASPAG",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[51]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetamargsup,isvalid:null,rgrid:[],fld:"ETIQUETAMARGSUP",gxz:"Z101EtiquetaMargSup",gxold:"O101EtiquetaMargSup",gxvar:"A101EtiquetaMargSup",ucs:[],op:[49,53],ip:[49,53],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A101EtiquetaMargSup=gx.num.intval(Value)},v2z:function(Value){gx.O.Z101EtiquetaMargSup=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETAMARGSUP",gx.O.A101EtiquetaMargSup,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A101EtiquetaMargSup=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETAMARGSUP",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetacompactaimp,isvalid:null,rgrid:[],fld:"ETIQUETACOMPACTAIMP",gxz:"Z103EtiquetaCompactaImp",gxold:"O103EtiquetaCompactaImp",gxvar:"A103EtiquetaCompactaImp",ucs:[],op:[55,38],ip:[55,38],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A103EtiquetaCompactaImp=Value},v2z:function(Value){gx.O.Z103EtiquetaCompactaImp=Value},v2c:function(){gx.fn.setCheckBoxValue("ETIQUETACOMPACTAIMP",gx.O.A103EtiquetaCompactaImp,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A103EtiquetaCompactaImp=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETACOMPACTAIMP")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetaqtdcollinha,isvalid:null,rgrid:[],fld:"ETIQUETAQTDCOLLINHA",gxz:"Z100EtiquetaQtdColLinha",gxold:"O100EtiquetaQtdColLinha",gxvar:"A100EtiquetaQtdColLinha",ucs:[],op:[60],ip:[60],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A100EtiquetaQtdColLinha=gx.num.intval(Value)},v2z:function(Value){gx.O.Z100EtiquetaQtdColLinha=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETAQTDCOLLINHA",gx.O.A100EtiquetaQtdColLinha,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A100EtiquetaQtdColLinha=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETAQTDCOLLINHA",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatamentrelinha,isvalid:null,rgrid:[],fld:"ETIQUETATAMENTRELINHA",gxz:"Z102EtiquetaTamEntreLinha",gxold:"O102EtiquetaTamEntreLinha",gxvar:"A102EtiquetaTamEntreLinha",ucs:[],op:[49,64],ip:[49,64],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A102EtiquetaTamEntreLinha=gx.num.intval(Value)},v2z:function(Value){gx.O.Z102EtiquetaTamEntreLinha=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATAMENTRELINHA",gx.O.A102EtiquetaTamEntreLinha,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A102EtiquetaTamEntreLinha=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATAMENTRELINHA",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetameiapagina,isvalid:null,rgrid:[],fld:"ETIQUETAMEIAPAGINA",gxz:"Z742EtiquetaMeiaPagina",gxold:"O742EtiquetaMeiaPagina",gxvar:"A742EtiquetaMeiaPagina",ucs:[],op:[66,38],ip:[66,38],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A742EtiquetaMeiaPagina=Value},v2z:function(Value){gx.O.Z742EtiquetaMeiaPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("ETIQUETAMEIAPAGINA",gx.O.A742EtiquetaMeiaPagina,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A742EtiquetaMeiaPagina=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETAMEIAPAGINA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[69]={fld:"TABLE8",grid:0};
   GXValidFnc[72]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[75]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetaqtdlinhasetq,isvalid:null,rgrid:[],fld:"ETIQUETAQTDLINHASETQ",gxz:"Z99EtiquetaQtdLinhasEtq",gxold:"O99EtiquetaQtdLinhasEtq",gxvar:"A99EtiquetaQtdLinhasEtq",ucs:[],op:[49,77],ip:[49,77],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A99EtiquetaQtdLinhasEtq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z99EtiquetaQtdLinhasEtq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETAQTDLINHASETQ",gx.O.A99EtiquetaQtdLinhasEtq,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A99EtiquetaQtdLinhasEtq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETAQTDLINHASETQ",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[79]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetaqtdcarlinhaetq,isvalid:null,rgrid:[],fld:"ETIQUETAQTDCARLINHAETQ",gxz:"Z236EtiquetaQtdCarLinhaEtq",gxold:"O236EtiquetaQtdCarLinhaEtq",gxvar:"A236EtiquetaQtdCarLinhaEtq",ucs:[],op:[81],ip:[81],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A236EtiquetaQtdCarLinhaEtq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z236EtiquetaQtdCarLinhaEtq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETAQTDCARLINHAETQ",gx.O.A236EtiquetaQtdCarLinhaEtq,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A236EtiquetaQtdCarLinhaEtq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETAQTDCARLINHAETQ",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 81 , function() {
   });
   GXValidFnc[84]={fld:"TABLE9",grid:0};
   GXValidFnc[87]={fld:"TABLE3",grid:0};
   GXValidFnc[90]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[93]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classificacaoid,isvalid:null,rgrid:[],fld:"CLASSIFICACAOID",gxz:"Z54ClassificacaoId",gxold:"O54ClassificacaoId",gxvar:"A54ClassificacaoId",ucs:[],op:[95,28],ip:[95,28],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A54ClassificacaoId=Value},v2z:function(Value){gx.O.Z54ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSIFICACAOID",gx.O.A54ClassificacaoId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A54ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[98]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codificacaoid,isvalid:null,rgrid:[],fld:"CODIFICACAOID",gxz:"Z58CodificacaoId",gxold:"O58CodificacaoId",gxvar:"A58CodificacaoId",ucs:[],op:[100,28],ip:[100,28],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A58CodificacaoId=Value},v2z:function(Value){gx.O.Z58CodificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("CODIFICACAOID",gx.O.A58CodificacaoId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A58CodificacaoId=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[103]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiposenderecoid,isvalid:null,rgrid:[],fld:"TIPOSENDERECOID",gxz:"Z229TiposEnderecoId",gxold:"O229TiposEnderecoId",gxvar:"A229TiposEnderecoId",ucs:[],op:[105,28],ip:[105,28],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A229TiposEnderecoId=Value},v2z:function(Value){gx.O.Z229TiposEnderecoId=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOSENDERECOID",gx.O.A229TiposEnderecoId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A229TiposEnderecoId=this.val()},val:function(){return gx.fn.getControlValue("TIPOSENDERECOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[108]={fld:"TABLE4",grid:0};
   GXValidFnc[111]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[114]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetaprodutoclassificacaopr,isvalid:null,rgrid:[],fld:"ETIQUETAPRODUTOCLASSIFICACAOPR",gxz:"Z5881EtiquetaProdutoClassificacaoPr",gxold:"O5881EtiquetaProdutoClassificacaoPr",gxvar:"A5881EtiquetaProdutoClassificacaoPr",ucs:[],op:[116,28],ip:[116,28],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A5881EtiquetaProdutoClassificacaoPr=Value},v2z:function(Value){gx.O.Z5881EtiquetaProdutoClassificacaoPr=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETAPRODUTOCLASSIFICACAOPR",gx.O.A5881EtiquetaProdutoClassificacaoPr)},c2v:function(){gx.O.A5881EtiquetaProdutoClassificacaoPr=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETAPRODUTOCLASSIFICACAOPR")},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetaprodutocodificacaoprin,isvalid:null,rgrid:[],fld:"ETIQUETAPRODUTOCODIFICACAOPRIN",gxz:"Z5882EtiquetaProdutoCodificacaoPrin",gxold:"O5882EtiquetaProdutoCodificacaoPrin",gxvar:"A5882EtiquetaProdutoCodificacaoPrin",ucs:[],op:[121,28],ip:[121,28],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A5882EtiquetaProdutoCodificacaoPrin=Value},v2z:function(Value){gx.O.Z5882EtiquetaProdutoCodificacaoPrin=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETAPRODUTOCODIFICACAOPRIN",gx.O.A5882EtiquetaProdutoCodificacaoPrin)},c2v:function(){gx.O.A5882EtiquetaProdutoCodificacaoPrin=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETAPRODUTOCODIFICACAOPRIN")},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TABLE10",grid:0};
   GXValidFnc[127]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETAUSUARIOID",gxz:"Z840EtiquetaUsuarioId",gxold:"O840EtiquetaUsuarioId",gxvar:"A840EtiquetaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A840EtiquetaUsuarioId=Value},v2z:function(Value){gx.O.Z840EtiquetaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("ETIQUETAUSUARIOID",gx.O.A840EtiquetaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A840EtiquetaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETAUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 129 , function() {
   });
   GXValidFnc[131]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETADATAHORAALT",gxz:"Z841EtiquetaDataHoraAlt",gxold:"O841EtiquetaDataHoraAlt",gxvar:"A841EtiquetaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A841EtiquetaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z841EtiquetaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETADATAHORAALT",gx.O.A841EtiquetaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A841EtiquetaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ETIQUETADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 131 , function() {
   });
   GXValidFnc[140]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV21AcessoSistemaSequencia",gxold:"OV21AcessoSistemaSequencia",gxvar:"AV21AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV21AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[142]={fld:"BTNHELP",grid:0};
   this.A241EtiquetaCodigo = 0 ;
   this.Z241EtiquetaCodigo = 0 ;
   this.O241EtiquetaCodigo = 0 ;
   this.A235EtiquetaDescricao = "" ;
   this.Z235EtiquetaDescricao = "" ;
   this.O235EtiquetaDescricao = "" ;
   this.A5880EtiquetaTipoDados = "" ;
   this.Z5880EtiquetaTipoDados = "" ;
   this.O5880EtiquetaTipoDados = "" ;
   this.A237EtiquetaTamFonte = 0 ;
   this.Z237EtiquetaTamFonte = 0 ;
   this.O237EtiquetaTamFonte = 0 ;
   this.A743EtiquetaTipoImpressao = "" ;
   this.Z743EtiquetaTipoImpressao = "" ;
   this.O743EtiquetaTipoImpressao = "" ;
   this.A98EtiquetaQtdLinhasPag = 0 ;
   this.Z98EtiquetaQtdLinhasPag = 0 ;
   this.O98EtiquetaQtdLinhasPag = 0 ;
   this.A101EtiquetaMargSup = 0 ;
   this.Z101EtiquetaMargSup = 0 ;
   this.O101EtiquetaMargSup = 0 ;
   this.A103EtiquetaCompactaImp = "" ;
   this.Z103EtiquetaCompactaImp = "" ;
   this.O103EtiquetaCompactaImp = "" ;
   this.A100EtiquetaQtdColLinha = 0 ;
   this.Z100EtiquetaQtdColLinha = 0 ;
   this.O100EtiquetaQtdColLinha = 0 ;
   this.A102EtiquetaTamEntreLinha = 0 ;
   this.Z102EtiquetaTamEntreLinha = 0 ;
   this.O102EtiquetaTamEntreLinha = 0 ;
   this.A742EtiquetaMeiaPagina = "" ;
   this.Z742EtiquetaMeiaPagina = "" ;
   this.O742EtiquetaMeiaPagina = "" ;
   this.A99EtiquetaQtdLinhasEtq = 0 ;
   this.Z99EtiquetaQtdLinhasEtq = 0 ;
   this.O99EtiquetaQtdLinhasEtq = 0 ;
   this.A236EtiquetaQtdCarLinhaEtq = 0 ;
   this.Z236EtiquetaQtdCarLinhaEtq = 0 ;
   this.O236EtiquetaQtdCarLinhaEtq = 0 ;
   this.A54ClassificacaoId = "" ;
   this.Z54ClassificacaoId = "" ;
   this.O54ClassificacaoId = "" ;
   this.A58CodificacaoId = "" ;
   this.Z58CodificacaoId = "" ;
   this.O58CodificacaoId = "" ;
   this.A229TiposEnderecoId = "" ;
   this.Z229TiposEnderecoId = "" ;
   this.O229TiposEnderecoId = "" ;
   this.A5881EtiquetaProdutoClassificacaoPr = "" ;
   this.Z5881EtiquetaProdutoClassificacaoPr = "" ;
   this.O5881EtiquetaProdutoClassificacaoPr = "" ;
   this.A5882EtiquetaProdutoCodificacaoPrin = "" ;
   this.Z5882EtiquetaProdutoCodificacaoPrin = "" ;
   this.O5882EtiquetaProdutoCodificacaoPrin = "" ;
   this.A840EtiquetaUsuarioId = "" ;
   this.Z840EtiquetaUsuarioId = "" ;
   this.O840EtiquetaUsuarioId = "" ;
   this.A841EtiquetaDataHoraAlt = gx.date.nullDate() ;
   this.Z841EtiquetaDataHoraAlt = gx.date.nullDate() ;
   this.O841EtiquetaDataHoraAlt = gx.date.nullDate() ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.ZV21AcessoSistemaSequencia = 0 ;
   this.OV21AcessoSistemaSequencia = 0 ;
   this.AV16UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV32Pgmname = "" ;
   this.AV33Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.AV11Modulo = "" ;
   this.AV7Logon = {} ;
   this.AV12Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV18EmpresaCodificacaoEmpresaId = "" ;
   this.AV19EmpresaClassificacaoEmpresaId = "" ;
   this.AV23CodificacaoEstEmpresaId = "" ;
   this.AV22ClassificacaoEstEmpresaId = "" ;
   this.AV20EmpresaTiposEnderecoEmpresaId = "" ;
   this.AV26QtLinhas = 0 ;
   this.AV24ErroTipoDados = "" ;
   this.AV25ErroQtLinhas = "" ;
   this.AV30QtLinhas1 = 0 ;
   this.AV15EtiquetaCodigo = 0 ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A164EmpresaCodificacaoEmpresaId = "" ;
   this.A228EmpresaTiposEnderecoEmpresaId = "" ;
   this.A840EtiquetaUsuarioId = "" ;
   this.A841EtiquetaDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A235EtiquetaDescricao = "" ;
   this.A5880EtiquetaTipoDados = "" ;
   this.A5881EtiquetaProdutoClassificacaoPr = "" ;
   this.A5882EtiquetaProdutoCodificacaoPrin = "" ;
   this.A743EtiquetaTipoImpressao = "" ;
   this.A98EtiquetaQtdLinhasPag = 0 ;
   this.A99EtiquetaQtdLinhasEtq = 0 ;
   this.A236EtiquetaQtdCarLinhaEtq = 0 ;
   this.A100EtiquetaQtdColLinha = 0 ;
   this.A101EtiquetaMargSup = 0 ;
   this.A102EtiquetaTamEntreLinha = 0 ;
   this.A237EtiquetaTamFonte = 0 ;
   this.A103EtiquetaCompactaImp = "" ;
   this.A742EtiquetaMeiaPagina = "" ;
   this.A54ClassificacaoId = "" ;
   this.A55ClassificacaoDescricao = "" ;
   this.A58CodificacaoId = "" ;
   this.A59CodificacaoDescricao = "" ;
   this.A229TiposEnderecoId = "" ;
   this.A570TiposEnderecoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e120h2_client": ["'FECHAR'", true] ,"e130h2_client": ["AFTER TRN", true] ,"e140h22_client": ["ENTER", true] ,"e150h22_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV15EtiquetaCodigo',fld:'vETIQUETACODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A240EmpresaEtiquetaEmpresaId", "EMPRESAETIQUETAEMPRESAID", 0, "char");
   this.setVCMap("AV19EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV18EmpresaCodificacaoEmpresaId", "vEMPRESACODIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A164EmpresaCodificacaoEmpresaId", "EMPRESACODIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV20EmpresaTiposEnderecoEmpresaId", "vEMPRESATIPOSENDERECOEMPRESAID", 0, "char");
   this.setVCMap("A228EmpresaTiposEnderecoEmpresaId", "EMPRESATIPOSENDERECOEMPRESAID", 0, "char");
   this.setVCMap("AV15EtiquetaCodigo", "vETIQUETACODIGO", 0, "int");
   this.setVCMap("AV16UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV22ClassificacaoEstEmpresaId", "vCLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV23CodificacaoEstEmpresaId", "vCODIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV24ErroTipoDados", "vERROTIPODADOS", 0, "char");
   this.setVCMap("AV26QtLinhas", "vQTLINHAS", 0, "int");
   this.setVCMap("AV25ErroQtLinhas", "vERROQTLINHAS", 0, "char");
   this.setVCMap("AV30QtLinhas1", "vQTLINHAS1", 0, "int");
   this.setVCMap("A55ClassificacaoDescricao", "CLASSIFICACAODESCRICAO", 0, "svchar");
   this.setVCMap("A59CodificacaoDescricao", "CODIFICACAODESCRICAO", 0, "svchar");
   this.setVCMap("A570TiposEnderecoDescricao", "TIPOSENDERECODESCRICAO", 0, "svchar");
   this.setVCMap("AV33Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 22 ]= ["O229TiposEnderecoId","O228EmpresaTiposEnderecoEmpresaId","O58CodificacaoId","O164EmpresaCodificacaoEmpresaId","O54ClassificacaoId","O162EmpresaClassificacaoEmpresaId","O742EtiquetaMeiaPagina","O103EtiquetaCompactaImp","O237EtiquetaTamFonte","O102EtiquetaTamEntreLinha","O101EtiquetaMargSup","O100EtiquetaQtdColLinha","O236EtiquetaQtdCarLinhaEtq","O99EtiquetaQtdLinhasEtq","O98EtiquetaQtdLinhasPag","O743EtiquetaTipoImpressao","O235EtiquetaDescricao"] ;
});
gx.setParentObj(new tetiqueta());
