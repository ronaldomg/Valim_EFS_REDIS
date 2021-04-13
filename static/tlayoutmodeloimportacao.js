/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:52:8.32
*/
gx.evt.autoSkip = false;
gx.define('tlayoutmodeloimportacao', false, function () {
   this.ServerClass =  "tlayoutmodeloimportacao" ;
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
      this.AV18ImportacaoModelo=gx.fn.getIntegerValue("vIMPORTACAOMODELO",'.') ;
      this.AV19SequenciaModeloImportacao=gx.fn.getIntegerValue("vSEQUENCIAMODELOIMPORTACAO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5915ImportacaoModeloEmpresaId=gx.fn.getControlValue("IMPORTACAOMODELOEMPRESAID") ;
      this.AV24EmpresaCodificacaoEmpresaId=gx.fn.getControlValue("vEMPRESACODIFICACAOEMPRESAID") ;
      this.A164EmpresaCodificacaoEmpresaId=gx.fn.getControlValue("EMPRESACODIFICACAOEMPRESAID") ;
      this.AV25EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID") ;
      this.A162EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("EMPRESACLASSIFICACAOEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV29SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV28SnLoteUnico=gx.fn.getControlValue("vSNLOTEUNICO") ;
      this.AV35Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV22ImportacaoTabela=gx.fn.getControlValue("vIMPORTACAOTABELA") ;
   };
   this.Valid_Importacaomodelo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Importacaomodelo",["gx.O.A5915ImportacaoModeloEmpresaId", "gx.O.A5916ImportacaoModelo", "gx.O.A5917ImportacaoModeloDescricao"],["A5917ImportacaoModeloDescricao"]);
      return true;
   }
   this.Valid_Sequenciamodeloimportacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SEQUENCIAMODELOIMPORTACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Importacaotabela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPORTACAOTABELA");
         this.AnyError  = 0;
         if ( (""==this.A5907ImportacaoTabela) )
         {
            try {
               gxballoon.setError("Informe a tabela");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ( this.A5907ImportacaoTabela == "B" ) && ( this.AV28SnLoteUnico == "N" ) )
         {
            try {
               gxballoon.setError("Tabela não pode ser Código de Barras, Empresa Trabalha com Lote");
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
   this.Valid_Importacaotipocampo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPORTACAOTIPOCAMPO");
         this.AnyError  = 0;
         if ( (""==this.A5908ImportacaoTipoCampo) )
         {
            try {
               gxballoon.setError("Informe o tipo de campo");
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
   this.Valid_Importacaocampo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPORTACAOCAMPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Importacaovalorcampo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPORTACAOVALORCAMPO");
         this.AnyError  = 0;
         if ( (""==this.A5909ImportacaoCampo) && (""==this.A5910ImportacaoValorCampo) )
         {
            try {
               gxballoon.setError("Informe o campo ou o valor do campo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (""==this.A5909ImportacaoCampo) && ! (""==this.A5910ImportacaoValorCampo) )
         {
            try {
               gxballoon.setError("Informe apenas o campo ou o valor do campo, não é permitido informar os dois");
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
   this.Valid_Importacaotamanhocampo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPORTACAOTAMANHOCAMPO");
         this.AnyError  = 0;
         if ( (0==this.A5911ImportacaoTamanhoCampo) )
         {
            try {
               gxballoon.setError("Informe o tamanho do campo");
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
   this.Valid_Importacaoqtdecasasdecimais=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPORTACAOQTDECASASDECIMAIS");
         this.AnyError  = 0;
         if ( this.A5912ImportacaoQtdeCasasDecimais > 0 && this.A5908ImportacaoTipoCampo != "N" )
         {
            try {
               gxballoon.setError("Não informe a quantidade de casas decimais");
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
         if ( (""==this.A54ClassificacaoId) && this.A5909ImportacaoCampo == "pessoaclassificacao" )
         {
            try {
               gxballoon.setError("Informe a Classificação");
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
         if ( (""==this.A58CodificacaoId) && this.A5909ImportacaoCampo == "pessoacodificacao" )
         {
            try {
               gxballoon.setError("Informe a Codificação");
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
   this.e12942_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13942_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14942_client=function()
   {
      this.executeServerEvent("IMPORTACAOTABELA.CLICK", true, null, false, true);
   };
   this.e15942_client=function()
   {
      this.executeServerEvent("IMPORTACAOCAMPO.CLICK", true, null, false, true);
   };
   this.e1694489_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1794489_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,24,26,29,31,34,36,39,41,44,46,49,51,54,56,59,61,64,67,69,71,80,82];
   this.GXLastCtrlId =82;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Importacaomodelo,isvalid:null,rgrid:[],fld:"IMPORTACAOMODELO",gxz:"Z5916ImportacaoModelo",gxold:"O5916ImportacaoModelo",gxvar:"A5916ImportacaoModelo",ucs:[],op:[15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5916ImportacaoModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5916ImportacaoModelo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPORTACAOMODELO",gx.O.A5916ImportacaoModelo,0)},c2v:function(){gx.O.A5916ImportacaoModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPORTACAOMODELO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOMODELODESCRICAO",gxz:"Z5917ImportacaoModeloDescricao",gxold:"O5917ImportacaoModeloDescricao",gxvar:"A5917ImportacaoModeloDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5917ImportacaoModeloDescricao=Value},v2z:function(Value){gx.O.Z5917ImportacaoModeloDescricao=Value},v2c:function(){gx.fn.setControlValue("IMPORTACAOMODELODESCRICAO",gx.O.A5917ImportacaoModeloDescricao,0)},c2v:function(){gx.O.A5917ImportacaoModeloDescricao=this.val()},val:function(){return gx.fn.getControlValue("IMPORTACAOMODELODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Sequenciamodeloimportacao,isvalid:null,rgrid:[],fld:"SEQUENCIAMODELOIMPORTACAO",gxz:"Z5918SequenciaModeloImportacao",gxold:"O5918SequenciaModeloImportacao",gxvar:"A5918SequenciaModeloImportacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5918SequenciaModeloImportacao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5918SequenciaModeloImportacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SEQUENCIAMODELOIMPORTACAO",gx.O.A5918SequenciaModeloImportacao,0)},c2v:function(){gx.O.A5918SequenciaModeloImportacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SEQUENCIAMODELOIMPORTACAO",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Importacaotabela,isvalid:null,rgrid:[],fld:"IMPORTACAOTABELA",gxz:"Z5907ImportacaoTabela",gxold:"O5907ImportacaoTabela",gxvar:"A5907ImportacaoTabela",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5907ImportacaoTabela=Value},v2z:function(Value){gx.O.Z5907ImportacaoTabela=Value},v2c:function(){gx.fn.setComboBoxValue("IMPORTACAOTABELA",gx.O.A5907ImportacaoTabela)},c2v:function(){gx.O.A5907ImportacaoTabela=this.val()},val:function(){return gx.fn.getControlValue("IMPORTACAOTABELA")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Importacaotipocampo,isvalid:null,rgrid:[],fld:"IMPORTACAOTIPOCAMPO",gxz:"Z5908ImportacaoTipoCampo",gxold:"O5908ImportacaoTipoCampo",gxvar:"A5908ImportacaoTipoCampo",ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5908ImportacaoTipoCampo=Value},v2z:function(Value){gx.O.Z5908ImportacaoTipoCampo=Value},v2c:function(){gx.fn.setComboBoxValue("IMPORTACAOTIPOCAMPO",gx.O.A5908ImportacaoTipoCampo)},c2v:function(){gx.O.A5908ImportacaoTipoCampo=this.val()},val:function(){return gx.fn.getControlValue("IMPORTACAOTIPOCAMPO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Importacaocampo,isvalid:null,rgrid:[],fld:"IMPORTACAOCAMPO",gxz:"Z5909ImportacaoCampo",gxold:"O5909ImportacaoCampo",gxvar:"A5909ImportacaoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5909ImportacaoCampo=Value},v2z:function(Value){gx.O.Z5909ImportacaoCampo=Value},v2c:function(){gx.fn.setComboBoxValue("IMPORTACAOCAMPO",gx.O.A5909ImportacaoCampo)},c2v:function(){gx.O.A5909ImportacaoCampo=this.val()},val:function(){return gx.fn.getControlValue("IMPORTACAOCAMPO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Importacaovalorcampo,isvalid:null,rgrid:[],fld:"IMPORTACAOVALORCAMPO",gxz:"Z5910ImportacaoValorCampo",gxold:"O5910ImportacaoValorCampo",gxvar:"A5910ImportacaoValorCampo",ucs:[],op:[41,36],ip:[41,36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5910ImportacaoValorCampo=Value},v2z:function(Value){gx.O.Z5910ImportacaoValorCampo=Value},v2c:function(){gx.fn.setControlValue("IMPORTACAOVALORCAMPO",gx.O.A5910ImportacaoValorCampo,0)},c2v:function(){gx.O.A5910ImportacaoValorCampo=this.val()},val:function(){return gx.fn.getControlValue("IMPORTACAOVALORCAMPO")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Importacaotamanhocampo,isvalid:null,rgrid:[],fld:"IMPORTACAOTAMANHOCAMPO",gxz:"Z5911ImportacaoTamanhoCampo",gxold:"O5911ImportacaoTamanhoCampo",gxvar:"A5911ImportacaoTamanhoCampo",ucs:[],op:[46],ip:[46],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5911ImportacaoTamanhoCampo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5911ImportacaoTamanhoCampo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPORTACAOTAMANHOCAMPO",gx.O.A5911ImportacaoTamanhoCampo,0)},c2v:function(){gx.O.A5911ImportacaoTamanhoCampo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPORTACAOTAMANHOCAMPO",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Importacaoqtdecasasdecimais,isvalid:null,rgrid:[],fld:"IMPORTACAOQTDECASASDECIMAIS",gxz:"Z5912ImportacaoQtdeCasasDecimais",gxold:"O5912ImportacaoQtdeCasasDecimais",gxvar:"A5912ImportacaoQtdeCasasDecimais",ucs:[],op:[31,51],ip:[31,51],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5912ImportacaoQtdeCasasDecimais=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5912ImportacaoQtdeCasasDecimais=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPORTACAOQTDECASASDECIMAIS",gx.O.A5912ImportacaoQtdeCasasDecimais,0)},c2v:function(){gx.O.A5912ImportacaoQtdeCasasDecimais=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPORTACAOQTDECASASDECIMAIS",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classificacaoid,isvalid:null,rgrid:[],fld:"CLASSIFICACAOID",gxz:"Z54ClassificacaoId",gxold:"O54ClassificacaoId",gxvar:"A54ClassificacaoId",ucs:[],op:[36,56],ip:[36,56],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A54ClassificacaoId=Value},v2z:function(Value){gx.O.Z54ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSIFICACAOID",gx.O.A54ClassificacaoId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A54ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codificacaoid,isvalid:null,rgrid:[],fld:"CODIFICACAOID",gxz:"Z58CodificacaoId",gxold:"O58CodificacaoId",gxvar:"A58CodificacaoId",ucs:[],op:[36,61],ip:[36,61],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A58CodificacaoId=Value},v2z:function(Value){gx.O.Z58CodificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("CODIFICACAOID",gx.O.A58CodificacaoId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A58CodificacaoId=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[64]={fld:"TABLE4",grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOUSUARIOALT",gxz:"Z5913ImportacaoUsuarioAlt",gxold:"O5913ImportacaoUsuarioAlt",gxvar:"A5913ImportacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5913ImportacaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z5913ImportacaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("IMPORTACAOUSUARIOALT",gx.O.A5913ImportacaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5913ImportacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("IMPORTACAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[71]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAODATAHORAALT",gxz:"Z5914ImportacaoDataHoraAlt",gxold:"O5914ImportacaoDataHoraAlt",gxvar:"A5914ImportacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5914ImportacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5914ImportacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("IMPORTACAODATAHORAALT",gx.O.A5914ImportacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5914ImportacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("IMPORTACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[80]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"BTNHELP",grid:0};
   this.A5916ImportacaoModelo = 0 ;
   this.Z5916ImportacaoModelo = 0 ;
   this.O5916ImportacaoModelo = 0 ;
   this.A5917ImportacaoModeloDescricao = "" ;
   this.Z5917ImportacaoModeloDescricao = "" ;
   this.O5917ImportacaoModeloDescricao = "" ;
   this.A5918SequenciaModeloImportacao = 0 ;
   this.Z5918SequenciaModeloImportacao = 0 ;
   this.O5918SequenciaModeloImportacao = 0 ;
   this.A5907ImportacaoTabela = "" ;
   this.Z5907ImportacaoTabela = "" ;
   this.O5907ImportacaoTabela = "" ;
   this.A5908ImportacaoTipoCampo = "" ;
   this.Z5908ImportacaoTipoCampo = "" ;
   this.O5908ImportacaoTipoCampo = "" ;
   this.A5909ImportacaoCampo = "" ;
   this.Z5909ImportacaoCampo = "" ;
   this.O5909ImportacaoCampo = "" ;
   this.A5910ImportacaoValorCampo = "" ;
   this.Z5910ImportacaoValorCampo = "" ;
   this.O5910ImportacaoValorCampo = "" ;
   this.A5911ImportacaoTamanhoCampo = 0 ;
   this.Z5911ImportacaoTamanhoCampo = 0 ;
   this.O5911ImportacaoTamanhoCampo = 0 ;
   this.A5912ImportacaoQtdeCasasDecimais = 0 ;
   this.Z5912ImportacaoQtdeCasasDecimais = 0 ;
   this.O5912ImportacaoQtdeCasasDecimais = 0 ;
   this.A54ClassificacaoId = "" ;
   this.Z54ClassificacaoId = "" ;
   this.O54ClassificacaoId = "" ;
   this.A58CodificacaoId = "" ;
   this.Z58CodificacaoId = "" ;
   this.O58CodificacaoId = "" ;
   this.A5913ImportacaoUsuarioAlt = "" ;
   this.Z5913ImportacaoUsuarioAlt = "" ;
   this.O5913ImportacaoUsuarioAlt = "" ;
   this.A5914ImportacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z5914ImportacaoDataHoraAlt = gx.date.nullDate() ;
   this.O5914ImportacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV34Pgmname = "" ;
   this.AV35Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV24EmpresaCodificacaoEmpresaId = "" ;
   this.AV25EmpresaClassificacaoEmpresaId = "" ;
   this.AV28SnLoteUnico = "" ;
   this.AV23ImportacaoTabelaAux = "" ;
   this.AV29SnErro = "" ;
   this.AV18ImportacaoModelo = 0 ;
   this.AV19SequenciaModeloImportacao = 0 ;
   this.AV22ImportacaoTabela = "" ;
   this.A5915ImportacaoModeloEmpresaId = "" ;
   this.A5916ImportacaoModelo = 0 ;
   this.A5918SequenciaModeloImportacao = 0 ;
   this.A164EmpresaCodificacaoEmpresaId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.AV20SnAlterou = "" ;
   this.A5917ImportacaoModeloDescricao = "" ;
   this.A5907ImportacaoTabela = "" ;
   this.A5908ImportacaoTipoCampo = "" ;
   this.A5909ImportacaoCampo = "" ;
   this.A5910ImportacaoValorCampo = "" ;
   this.A5911ImportacaoTamanhoCampo = 0 ;
   this.A5912ImportacaoQtdeCasasDecimais = 0 ;
   this.A54ClassificacaoId = "" ;
   this.A58CodificacaoId = "" ;
   this.A5913ImportacaoUsuarioAlt = "" ;
   this.A5914ImportacaoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12942_client": ["'FECHAR'", true] ,"e13942_client": ["AFTER TRN", true] ,"e14942_client": ["IMPORTACAOTABELA.CLICK", true] ,"e15942_client": ["IMPORTACAOCAMPO.CLICK", true] ,"e1694489_client": ["ENTER", true] ,"e1794489_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ImportacaoModelo',fld:'vIMPORTACAOMODELO',hsh:true},{av:'AV19SequenciaModeloImportacao',fld:'vSEQUENCIAMODELOIMPORTACAO',hsh:true},{av:'AV22ImportacaoTabela',fld:'vIMPORTACAOTABELA',hsh:true},{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18ImportacaoModelo',fld:'vIMPORTACAOMODELO',hsh:true}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["IMPORTACAOTABELA.CLICK"] = [[{av:'A5907ImportacaoTabela',fld:'IMPORTACAOTABELA'},{av:'AV23ImportacaoTabelaAux',fld:'vIMPORTACAOTABELAAUX'}],[{av:'AV23ImportacaoTabelaAux',fld:'vIMPORTACAOTABELAAUX'},{av:'A5909ImportacaoCampo',fld:'IMPORTACAOCAMPO'}]];
   this.EvtParms["IMPORTACAOCAMPO.CLICK"] = [[{av:'A5909ImportacaoCampo',fld:'IMPORTACAOCAMPO'},{av:'A5907ImportacaoTabela',fld:'IMPORTACAOTABELA'},{av:'AV23ImportacaoTabelaAux',fld:'vIMPORTACAOTABELAAUX'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Visible")',ctrl:'TEXTBLOCK11',prop:'Visible'},{ctrl:'CLASSIFICACAOID'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK12","Visible")',ctrl:'TEXTBLOCK12',prop:'Visible'},{ctrl:'CODIFICACAOID'},{av:'AV23ImportacaoTabelaAux',fld:'vIMPORTACAOTABELAAUX'},{av:'A5909ImportacaoCampo',fld:'IMPORTACAOCAMPO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ImportacaoModelo", "vIMPORTACAOMODELO", 0, "int");
   this.setVCMap("AV19SequenciaModeloImportacao", "vSEQUENCIAMODELOIMPORTACAO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5915ImportacaoModeloEmpresaId", "IMPORTACAOMODELOEMPRESAID", 0, "char");
   this.setVCMap("AV24EmpresaCodificacaoEmpresaId", "vEMPRESACODIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A164EmpresaCodificacaoEmpresaId", "EMPRESACODIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV25EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV29SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV28SnLoteUnico", "vSNLOTEUNICO", 0, "char");
   this.setVCMap("AV35Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV22ImportacaoTabela", "vIMPORTACAOTABELA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 489 ]= ["O54ClassificacaoId","O58CodificacaoId","O5910ImportacaoValorCampo","O5908ImportacaoTipoCampo","O5912ImportacaoQtdeCasasDecimais","O5907ImportacaoTabela","O5909ImportacaoCampo"] ;
});
gx.setParentObj(new tlayoutmodeloimportacao());
