/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:41:22.16
*/
gx.evt.autoSkip = false;
gx.define('hconferenciaentrada', false, function () {
   this.ServerClass =  "hconferenciaentrada" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A568TipoPermissaoId=gx.fn.getIntegerValue("TIPOPERMISSAOID",'.') ;
      this.A3138TipoPermissaoSnControla=gx.fn.getControlValue("TIPOPERMISSAOSNCONTROLA") ;
      this.A566TipoPermissaoUsuarioUsuarioId=gx.fn.getControlValue("TIPOPERMISSAOUSUARIOUSUARIOID") ;
      this.AV9UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV66SNQTDECONFENTR=gx.fn.getControlValue("vSNQTDECONFENTR") ;
      this.AV182Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A5091EntradaProvSequencia=gx.fn.getIntegerValue("ENTRADAPROVSEQUENCIA",'.') ;
      this.A5013EntradaProvEmpresaId=gx.fn.getControlValue("ENTRADAPROVEMPRESAID") ;
      this.A5014EntradaProvId=gx.fn.getIntegerValue("ENTRADAPROVID",'.') ;
      this.A5092EntradaProvItemLoteFilialEmpId=gx.fn.getControlValue("ENTRADAPROVITEMLOTEFILIALEMPID") ;
      this.A5093EntradaProvItemLoteFilialId=gx.fn.getIntegerValue("ENTRADAPROVITEMLOTEFILIALID",'.') ;
      this.A9247EntradaProvItemQtdeConf=gx.fn.getDecimalValue("ENTRADAPROVITEMQTDECONF",'.',',') ;
      this.A5018EntradaProvFornecedorId=gx.fn.getIntegerValue("ENTRADAPROVFORNECEDORID",'.') ;
      this.A5097EntradaProvItemCodigoBarras=gx.fn.getIntegerValue("ENTRADAPROVITEMCODIGOBARRAS",'.') ;
      this.A5096EntradaProvItemLoteCombinacao=gx.fn.getControlValue("ENTRADAPROVITEMLOTECOMBINACAO") ;
      this.A5094EntradaProvItemLoteProdEmpId=gx.fn.getControlValue("ENTRADAPROVITEMLOTEPRODEMPID") ;
      this.A5095EntradaProvItemLoteProdId=gx.fn.getIntegerValue("ENTRADAPROVITEMLOTEPRODID",'.') ;
      this.A8233EntradaProvItemLoteProdDesc=gx.fn.getControlValue("ENTRADAPROVITEMLOTEPRODDESC") ;
      this.A5098EntradaProvItemQuantidade=gx.fn.getDecimalValue("ENTRADAPROVITEMQUANTIDADE",'.',',') ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.A2965ProdutoId=gx.fn.getIntegerValue("PRODUTOID",'.') ;
      this.A2915EsquemaCodigo=gx.fn.getIntegerValue("ESQUEMACODIGO",'.') ;
      this.A3837ProdutoReferencia=gx.fn.getControlValue("PRODUTOREFERENCIA") ;
      this.A2921AtributoEsquemaCodigo=gx.fn.getIntegerValue("ATRIBUTOESQUEMACODIGO",'.') ;
      this.A2916AtributoEsquemaDescricao=gx.fn.getControlValue("ATRIBUTOESQUEMADESCRICAO") ;
      this.AV128atributoAux=gx.fn.getControlValue("vATRIBUTOAUX") ;
      this.AV169Cont=gx.fn.getIntegerValue("vCONT",'.') ;
      this.AV179NomeClasse=gx.fn.getControlValue("vNOMECLASSE") ;
      this.AV126EsquemaCodigo=gx.fn.getIntegerValue("vESQUEMACODIGO",'.') ;
      this.AV127AtributoEsquemaCodigo=gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO",'.') ;
      this.A2917AtributoEsquemaSnCadastrado=gx.fn.getControlValue("ATRIBUTOESQUEMASNCADASTRADO") ;
      this.A2941ValorAtributoCodigo=gx.fn.getIntegerValue("VALORATRIBUTOCODIGO",'.') ;
      this.AV129ValorAtributo=gx.fn.getIntegerValue("vVALORATRIBUTO",'.') ;
      this.A2938ValorAtributoDescricao=gx.fn.getControlValue("VALORATRIBUTODESCRICAO") ;
      this.AV170EntradaProvNumeroDocumento=gx.fn.getIntegerValue("vENTRADAPROVNUMERODOCUMENTO",'.') ;
   };
   this.Validv_Entradaprovfornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovfornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s144_client=function()
   {
      gx.fn.setCtrlProperty("vENTRADAPROVITEMCODIGOBARRASGRID","Class", this.AV179NomeClasse );
      gx.fn.setCtrlProperty("vENTRADAPROVITEMLOTEPRODDESC","Class", this.AV179NomeClasse );
      gx.fn.setCtrlProperty("vENTRADAPROVITEMLOTEPRODIDGRID","Class", this.AV179NomeClasse );
      gx.fn.setCtrlProperty("vENTRADAPROVITEMQUANTIDADE","Class", this.AV179NomeClasse );
      gx.fn.setCtrlProperty("vENTRADAPROVITEMQTDECONFGRID","Class", this.AV179NomeClasse );
      gx.fn.setCtrlProperty("vLOTEUNICO","Class", this.AV179NomeClasse );
      gx.fn.setCtrlProperty("vLOTE1GRID","Class", this.AV179NomeClasse );
      gx.fn.setCtrlProperty("vLOTE2GRID","Class", this.AV179NomeClasse );
      gx.fn.setCtrlProperty("vLOTE3GRID","Class", this.AV179NomeClasse );
      gx.fn.setCtrlProperty("vLOTE4GRID","Class", this.AV179NomeClasse );
      gx.fn.setCtrlProperty("vLOTE5GRID","Class", this.AV179NomeClasse );
   };
   this.e121f12_client=function()
   {
      this.executeServerEvent("'XML'", false, null, false, false);
   };
   this.e131f12_client=function()
   {
      this.executeServerEvent("'VALIDACODIGO'", false, null, false, false);
   };
   this.e141f12_client=function()
   {
      this.executeServerEvent("'NOTACONFERIDA'", false, null, false, false);
   };
   this.e221f12_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e151f12_client=function()
   {
      this.executeServerEvent("'PRIMEIRAPAGINA'", true, null, false, false);
   };
   this.e161f12_client=function()
   {
      this.executeServerEvent("'PAGINAANTERIOR'", true, null, false, false);
   };
   this.e171f12_client=function()
   {
      this.executeServerEvent("'PROXIMAPAGINA'", true, null, false, false);
   };
   this.e181f12_client=function()
   {
      this.executeServerEvent("'ULTIMAPAGINA'", true, null, false, false);
   };
   this.e111f12_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e231f12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e241f12_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,23,26,28,31,33,35,38,40,42,45,47,49,51,54,56,62,64,70,73,76,78,79,82,84,85,86,87,88,89,90,92,95,97,99,101,105,107,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,152,156,162,163,164,165,166,167,168,169,170,177];
   this.GXLastCtrlId =177;
   this.GridvarContainer = new gx.grid.grid(this, 2,"WbpLvl2",115,"Gridvar","Gridvar","GridvarContainer",this.CmpContext,this.IsMasterPage,"hconferenciaentrada",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridvarContainer = this.GridvarContainer;
   GridvarContainer.addSingleLineEdit("Entradaprovitemloteprodidgrid",116,"vENTRADAPROVITEMLOTEPRODIDGRID","Código","","EntradaProvItemLoteProdIdGrid","int",0,"px",10,10,"right",null,[],"Entradaprovitemloteprodidgrid","EntradaProvItemLoteProdIdGrid",true,0,false,false,"",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovitemloteproddesc",117,"vENTRADAPROVITEMLOTEPRODDESC","Nome do Produto","","EntradaProvItemLoteProdDesc","svchar",0,"px",120,80,"left",null,[],"Entradaprovitemloteproddesc","EntradaProvItemLoteProdDesc",true,0,false,false,"",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovitemcodigobarrasgrid",118,"vENTRADAPROVITEMCODIGOBARRASGRID","Código de Barras","","EntradaProvItemCodigoBarrasGrid","int",0,"px",15,15,"right",null,[],"Entradaprovitemcodigobarrasgrid","EntradaProvItemCodigoBarrasGrid",true,0,false,false,"",1,"");
   GridvarContainer.addSingleLineEdit("Produtoreferencia",119,"vPRODUTOREFERENCIA","Referência","","ProdutoReferencia","svchar",0,"px",20,20,"left",null,[],"Produtoreferencia","ProdutoReferencia",true,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovitemquantidade",120,"vENTRADAPROVITEMQUANTIDADE","Qtde Nota","","EntradaProvItemQuantidade","decimal",0,"px",21,21,"right",null,[],"Entradaprovitemquantidade","EntradaProvItemQuantidade",true,4,false,false,"",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovitemqtdeconfgrid",121,"vENTRADAPROVITEMQTDECONFGRID","Qtde Conf.","","EntradaProvItemQtdeConfGrid","decimal",0,"px",21,21,"right",null,[],"Entradaprovitemqtdeconfgrid","EntradaProvItemQtdeConfGrid",true,4,false,false,"",1,"");
   GridvarContainer.addSingleLineEdit("Loteunico",122,"vLOTEUNICO","Lote ","","LoteUnico","char",0,"px",15,15,"left",null,[],"Loteunico","LoteUnico",true,0,false,false,"",1,"");
   GridvarContainer.addSingleLineEdit("Lote1grid",123,"vLOTE1GRID","","","Lote1Grid","char",0,"px",15,15,"left",null,[],"Lote1grid","Lote1Grid",true,0,false,false,"",1,"");
   GridvarContainer.addSingleLineEdit("Lote2grid",124,"vLOTE2GRID","","","Lote2Grid","char",0,"px",15,15,"left",null,[],"Lote2grid","Lote2Grid",true,0,false,false,"",1,"");
   GridvarContainer.addSingleLineEdit("Lote3grid",125,"vLOTE3GRID","","","Lote3Grid","char",0,"px",15,15,"left",null,[],"Lote3grid","Lote3Grid",true,0,false,false,"",1,"");
   GridvarContainer.addSingleLineEdit("Lote4grid",126,"vLOTE4GRID","","","Lote4Grid","char",0,"px",15,15,"left",null,[],"Lote4grid","Lote4Grid",true,0,false,false,"",1,"");
   GridvarContainer.addSingleLineEdit("Lote5grid",127,"vLOTE5GRID","","","Lote5Grid","char",0,"px",15,15,"left",null,[],"Lote5grid","Lote5Grid",true,0,false,false,"",1,"");
   GridvarContainer.addBitmap("&Bmpexc","vBMPEXC",128,0,"px",17,"px","e221f12_client","","Exc","Image","GridColumnImage");
   GridvarContainer.addSingleLineEdit("Entradaprovitemlotefilialid",129,"vENTRADAPROVITEMLOTEFILIALID","Entrada Prov Item Lote Filial Id","","EntradaProvItemLoteFilialId","int",0,"px",7,7,"right",null,[],"Entradaprovitemlotefilialid","EntradaProvItemLoteFilialId",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Loteprodutocombinacao",130,"vLOTEPRODUTOCOMBINACAO","Lote Produto Combinacao","","LoteProdutoCombinacao","char",0,"px",20,20,"left",null,[],"Loteprodutocombinacao","LoteProdutoCombinacao",true,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovdataemissao",131,"vENTRADAPROVDATAEMISSAO","Entrada Prov Data Emissao","","EntradaProvDataEmissao","date",0,"px",10,10,"right",null,[],"Entradaprovdataemissao","EntradaProvDataEmissao",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovempresaid",132,"vENTRADAPROVEMPRESAID","Entrada Prov Empresa Id","","EntradaProvEmpresaId","char",0,"px",10,10,"left",null,[],"Entradaprovempresaid","EntradaProvEmpresaId",true,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovfornecedorempid",133,"vENTRADAPROVFORNECEDOREMPID","Entrada Prov Fornecedor Emp Id","","EntradaProvFornecedorEmpId","char",0,"px",10,10,"left",null,[],"Entradaprovfornecedorempid","EntradaProvFornecedorEmpId",true,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovfornecedorid",134,"vENTRADAPROVFORNECEDORID","Entrada Prov Fornecedor Id","","EntradaProvFornecedorId","int",0,"px",7,7,"right",null,[],"Entradaprovfornecedorid","EntradaProvFornecedorId",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovid",135,"vENTRADAPROVID","Entrada Prov Id","","EntradaProvId","int",0,"px",10,10,"right",null,[],"Entradaprovid","EntradaProvId",true,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovitemloteprodempid",136,"vENTRADAPROVITEMLOTEPRODEMPID","Entrada Prov Item Lote Prod Emp Id","","EntradaProvItemLoteProdEmpId","char",0,"px",10,10,"left",null,[],"Entradaprovitemloteprodempid","EntradaProvItemLoteProdEmpId",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovitemlotecombinacao",137,"vENTRADAPROVITEMLOTECOMBINACAO","Entrada Prov Item Lote Combinacao","","EntradaProvItemLoteCombinacao","char",0,"px",20,20,"left",null,[],"Entradaprovitemlotecombinacao","EntradaProvItemLoteCombinacao",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovitemlotefilialempid",138,"vENTRADAPROVITEMLOTEFILIALEMPID","Entrada Prov Item Lote Filial Emp Id","","EntradaProvItemLoteFilialEmpId","char",0,"px",10,10,"left",null,[],"Entradaprovitemlotefilialempid","EntradaProvItemLoteFilialEmpId",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Entradaprovsequencia",139,"vENTRADAPROVSEQUENCIA","Entrada Prov Sequencia","","EntradaProvSequencia","int",0,"px",6,6,"right",null,[],"Entradaprovsequencia","EntradaProvSequencia",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Atributo1descricao",140,"vATRIBUTO1DESCRICAO","Atributo1 Descricao","","Atributo1Descricao","char",0,"px",15,15,"left",null,[],"Atributo1descricao","Atributo1Descricao",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Atributo2descricao",141,"vATRIBUTO2DESCRICAO","Atributo2 Descricao","","Atributo2Descricao","char",0,"px",15,15,"left",null,[],"Atributo2descricao","Atributo2Descricao",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Atributo3descricao",142,"vATRIBUTO3DESCRICAO","Atributo3 Descricao","","Atributo3Descricao","char",0,"px",15,15,"left",null,[],"Atributo3descricao","Atributo3Descricao",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Atributo4descricao",143,"vATRIBUTO4DESCRICAO","Atributo4 Descricao","","Atributo4Descricao","char",0,"px",15,15,"left",null,[],"Atributo4descricao","Atributo4Descricao",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Atributo5descricao",144,"vATRIBUTO5DESCRICAO","Atributo5 Descricao","","Atributo5Descricao","char",0,"px",15,15,"left",null,[],"Atributo5descricao","Atributo5Descricao",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Atributocod1",145,"vATRIBUTOCOD1","Atributo Cod1","","AtributoCod1","int",0,"px",2,2,"right",null,[],"Atributocod1","AtributoCod1",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Atributocod2",146,"vATRIBUTOCOD2","Atributo Cod2","","AtributoCod2","int",0,"px",2,2,"right",null,[],"Atributocod2","AtributoCod2",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Atributocod3",147,"vATRIBUTOCOD3","Atributo Cod3","","AtributoCod3","int",0,"px",2,2,"right",null,[],"Atributocod3","AtributoCod3",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Atributocod4",148,"vATRIBUTOCOD4","Atributo Cod4","","AtributoCod4","int",0,"px",2,2,"right",null,[],"Atributocod4","AtributoCod4",false,0,false,false,"Attribute",1,"");
   GridvarContainer.addSingleLineEdit("Atributocod5",149,"vATRIBUTOCOD5","Atributo Cod5","","AtributoCod5","int",0,"px",2,2,"right",null,[],"Atributocod5","AtributoCod5",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridvarContainer);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TABLE5",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={fld:"TABLE3",grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovfornecedorid,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECEDORID",gxz:"ZV70EntradaProvFornecedorId",gxold:"OV70EntradaProvFornecedorId",gxvar:"AV70EntradaProvFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70EntradaProvFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70EntradaProvFornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVFORNECEDORID",gx.O.AV70EntradaProvFornecedorId,0)},c2v:function(){gx.O.AV70EntradaProvFornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECEDORNOME",gxz:"ZV71EntradaProvFornecedorNome",gxold:"OV71EntradaProvFornecedorNome",gxvar:"AV71EntradaProvFornecedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71EntradaProvFornecedorNome=Value},v2z:function(Value){gx.O.ZV71EntradaProvFornecedorNome=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVFORNECEDORNOME",gx.O.AV71EntradaProvFornecedorNome,0)},c2v:function(){gx.O.AV71EntradaProvFornecedorNome=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVFORNECEDORNOME")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[28]={fld:"TABLE10",grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV102FilialId",gxold:"OV102FilialId",gxvar:"AV102FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV102FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV102FilialId,0)},c2v:function(){gx.O.AV102FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV103FilialNome",gxold:"OV103FilialNome",gxvar:"AV103FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103FilialNome=Value},v2z:function(Value){gx.O.ZV103FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV103FilialNome,0)},c2v:function(){gx.O.AV103FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERIE",gxz:"ZV171Serie",gxold:"OV171Serie",gxvar:"AV171Serie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV171Serie=Value},v2z:function(Value){gx.O.ZV171Serie=Value},v2c:function(){gx.fn.setControlValue("vSERIE",gx.O.AV171Serie,0)},c2v:function(){gx.O.AV171Serie=this.val()},val:function(){return gx.fn.getControlValue("vSERIE")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLE6",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCPFCNPJ",gxz:"ZV73EntradaProvCPFCNPJ",gxold:"OV73EntradaProvCPFCNPJ",gxvar:"AV73EntradaProvCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73EntradaProvCPFCNPJ=Value},v2z:function(Value){gx.O.ZV73EntradaProvCPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCPFCNPJ",gx.O.AV73EntradaProvCPFCNPJ,0)},c2v:function(){gx.O.AV73EntradaProvCPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCPFCNPJ")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECTELEFONE",gxz:"ZV74EntradaProvFornecTelefone",gxold:"OV74EntradaProvFornecTelefone",gxvar:"AV74EntradaProvFornecTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74EntradaProvFornecTelefone=Value},v2z:function(Value){gx.O.ZV74EntradaProvFornecTelefone=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVFORNECTELEFONE",gx.O.AV74EntradaProvFornecTelefone,0)},c2v:function(){gx.O.AV74EntradaProvFornecTelefone=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVFORNECTELEFONE")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAEMISSAO",gxz:"ZV76EntradaProvDataEmissao",gxold:"OV76EntradaProvDataEmissao",gxvar:"AV76EntradaProvDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76EntradaProvDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV76EntradaProvDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVDATAEMISSAO",gx.O.AV76EntradaProvDataEmissao,0)},c2v:function(){gx.O.AV76EntradaProvDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADAPROVDATAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDITENS",gxz:"ZV151QtdItens",gxold:"OV151QtdItens",gxvar:"AV151QtdItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV151QtdItens=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV151QtdItens=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDITENS",gx.O.AV151QtdItens,0)},c2v:function(){gx.O.AV151QtdItens=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDITENS",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TABLE7",grid:0};
   GXValidFnc[73]={fld:"TABLE8",grid:0};
   GXValidFnc[76]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMCODIGOBARRAS",gxz:"ZV112EntradaProvItemCodigoBarras",gxold:"OV112EntradaProvItemCodigoBarras",gxvar:"AV112EntradaProvItemCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112EntradaProvItemCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV112EntradaProvItemCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVITEMCODIGOBARRAS",gx.O.AV112EntradaProvItemCodigoBarras,0)},c2v:function(){gx.O.AV112EntradaProvItemCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVITEMCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV90ProdutoDescricao",gxold:"OV90ProdutoDescricao",gxvar:"AV90ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV90ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV90ProdutoDescricao,0)},c2v:function(){gx.O.AV90ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"Z,ZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADETELA",gxz:"ZV130QuantidadeTela",gxold:"OV130QuantidadeTela",gxvar:"AV130QuantidadeTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV130QuantidadeTela=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV130QuantidadeTela=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vQUANTIDADETELA",gx.O.AV130QuantidadeTela,4,',')},c2v:function(){gx.O.AV130QuantidadeTela=this.val()},val:function(){return gx.fn.getDecimalValue("vQUANTIDADETELA",'.',',')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV78ProdutoEmpresaId",gxold:"OV78ProdutoEmpresaId",gxvar:"AV78ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV78ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV78ProdutoEmpresaId,0)},c2v:function(){gx.O.AV78ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV77ProdutoId",gxold:"OV77ProdutoId",gxvar:"AV77ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV77ProdutoId,0)},c2v:function(){gx.O.AV77ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV113LoteProdutoCombinacao",gxold:"OV113LoteProdutoCombinacao",gxvar:"AV113LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV113LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV113LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV113LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLOTEUNICO",gxz:"ZV114SNLOTEUNICO",gxold:"OV114SNLOTEUNICO",gxvar:"AV114SNLOTEUNICO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114SNLOTEUNICO=Value},v2z:function(Value){gx.O.ZV114SNLOTEUNICO=Value},v2c:function(){gx.fn.setControlValue("vSNLOTEUNICO",gx.O.AV114SNLOTEUNICO,0)},c2v:function(){gx.O.AV114SNLOTEUNICO=this.val()},val:function(){return gx.fn.getControlValue("vSNLOTEUNICO")},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovempresaid,isvalid:null,rgrid:[],fld:"vENTRADAPROVEMPRESAID",gxz:"ZV67EntradaProvEmpresaId",gxold:"OV67EntradaProvEmpresaId",gxvar:"AV67EntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67EntradaProvEmpresaId=Value},v2z:function(Value){gx.O.ZV67EntradaProvEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVEMPRESAID",gx.O.AV67EntradaProvEmpresaId,0)},c2v:function(){gx.O.AV67EntradaProvEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovid,isvalid:null,rgrid:[],fld:"vENTRADAPROVID",gxz:"ZV68EntradaProvId",gxold:"OV68EntradaProvId",gxvar:"AV68EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68EntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVID",gx.O.AV68EntradaProvId,0)},c2v:function(){gx.O.AV68EntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TABLE2",grid:0};
   GXValidFnc[95]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE",gxz:"ZV175Lote",gxold:"OV175Lote",gxvar:"AV175Lote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV175Lote=Value},v2z:function(Value){gx.O.ZV175Lote=Value},v2c:function(){gx.fn.setControlValue("vLOTE",gx.O.AV175Lote,0)},c2v:function(){gx.O.AV175Lote=this.val()},val:function(){return gx.fn.getControlValue("vLOTE")},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE1",gxz:"ZV91Lote1",gxold:"OV91Lote1",gxvar:"AV91Lote1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91Lote1=Value},v2z:function(Value){gx.O.ZV91Lote1=Value},v2c:function(){gx.fn.setControlValue("vLOTE1",gx.O.AV91Lote1,0)},c2v:function(){gx.O.AV91Lote1=this.val()},val:function(){return gx.fn.getControlValue("vLOTE1")},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE2",gxz:"ZV92Lote2",gxold:"OV92Lote2",gxvar:"AV92Lote2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92Lote2=Value},v2z:function(Value){gx.O.ZV92Lote2=Value},v2c:function(){gx.fn.setControlValue("vLOTE2",gx.O.AV92Lote2,0)},c2v:function(){gx.O.AV92Lote2=this.val()},val:function(){return gx.fn.getControlValue("vLOTE2")},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE3",gxz:"ZV93Lote3",gxold:"OV93Lote3",gxvar:"AV93Lote3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93Lote3=Value},v2z:function(Value){gx.O.ZV93Lote3=Value},v2c:function(){gx.fn.setControlValue("vLOTE3",gx.O.AV93Lote3,0)},c2v:function(){gx.O.AV93Lote3=this.val()},val:function(){return gx.fn.getControlValue("vLOTE3")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE4",gxz:"ZV94Lote4",gxold:"OV94Lote4",gxvar:"AV94Lote4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94Lote4=Value},v2z:function(Value){gx.O.ZV94Lote4=Value},v2c:function(){gx.fn.setControlValue("vLOTE4",gx.O.AV94Lote4,0)},c2v:function(){gx.O.AV94Lote4=this.val()},val:function(){return gx.fn.getControlValue("vLOTE4")},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE5",gxz:"ZV95Lote5",gxold:"OV95Lote5",gxvar:"AV95Lote5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95Lote5=Value},v2z:function(Value){gx.O.ZV95Lote5=Value},v2c:function(){gx.fn.setControlValue("vLOTE5",gx.O.AV95Lote5,0)},c2v:function(){gx.O.AV95Lote5=this.val()},val:function(){return gx.fn.getControlValue("vLOTE5")},nac:gx.falseFn};
   GXValidFnc[116]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMLOTEPRODIDGRID",gxz:"ZV160EntradaProvItemLoteProdIdGrid",gxold:"OV160EntradaProvItemLoteProdIdGrid",gxvar:"AV160EntradaProvItemLoteProdIdGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV160EntradaProvItemLoteProdIdGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV160EntradaProvItemLoteProdIdGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVITEMLOTEPRODIDGRID",row || gx.fn.currentGridRowImpl(115),gx.O.AV160EntradaProvItemLoteProdIdGrid,0)},c2v:function(){gx.O.AV160EntradaProvItemLoteProdIdGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVITEMLOTEPRODIDGRID",row || gx.fn.currentGridRowImpl(115),'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:2,type:"svchar",len:120,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMLOTEPRODDESC",gxz:"ZV158EntradaProvItemLoteProdDesc",gxold:"OV158EntradaProvItemLoteProdDesc",gxvar:"AV158EntradaProvItemLoteProdDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV158EntradaProvItemLoteProdDesc=Value},v2z:function(Value){gx.O.ZV158EntradaProvItemLoteProdDesc=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVITEMLOTEPRODDESC",row || gx.fn.currentGridRowImpl(115),gx.O.AV158EntradaProvItemLoteProdDesc,0)},c2v:function(){gx.O.AV158EntradaProvItemLoteProdDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVITEMLOTEPRODDESC",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[118]={lvl:2,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMCODIGOBARRASGRID",gxz:"ZV167EntradaProvItemCodigoBarrasGrid",gxold:"OV167EntradaProvItemCodigoBarrasGrid",gxvar:"AV167EntradaProvItemCodigoBarrasGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV167EntradaProvItemCodigoBarrasGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV167EntradaProvItemCodigoBarrasGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVITEMCODIGOBARRASGRID",row || gx.fn.currentGridRowImpl(115),gx.O.AV167EntradaProvItemCodigoBarrasGrid,0)},c2v:function(){gx.O.AV167EntradaProvItemCodigoBarrasGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVITEMCODIGOBARRASGRID",row || gx.fn.currentGridRowImpl(115),'.')},nac:gx.falseFn};
   GXValidFnc[119]={lvl:2,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV88ProdutoReferencia",gxold:"OV88ProdutoReferencia",gxvar:"AV88ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV88ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV88ProdutoReferencia=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOREFERENCIA",row || gx.fn.currentGridRowImpl(115),gx.O.AV88ProdutoReferencia,0)},c2v:function(){gx.O.AV88ProdutoReferencia=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTOREFERENCIA",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[120]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMQUANTIDADE",gxz:"ZV131EntradaProvItemQuantidade",gxold:"OV131EntradaProvItemQuantidade",gxvar:"AV131EntradaProvItemQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV131EntradaProvItemQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV131EntradaProvItemQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vENTRADAPROVITEMQUANTIDADE",row || gx.fn.currentGridRowImpl(115),gx.O.AV131EntradaProvItemQuantidade,4,',')},c2v:function(){gx.O.AV131EntradaProvItemQuantidade=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vENTRADAPROVITEMQUANTIDADE",row || gx.fn.currentGridRowImpl(115),'.',',')},nac:gx.falseFn};
   GXValidFnc[121]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMQTDECONFGRID",gxz:"ZV166EntradaProvItemQtdeConfGrid",gxold:"OV166EntradaProvItemQtdeConfGrid",gxvar:"AV166EntradaProvItemQtdeConfGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV166EntradaProvItemQtdeConfGrid=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV166EntradaProvItemQtdeConfGrid=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vENTRADAPROVITEMQTDECONFGRID",row || gx.fn.currentGridRowImpl(115),gx.O.AV166EntradaProvItemQtdeConfGrid,4,',')},c2v:function(){gx.O.AV166EntradaProvItemQtdeConfGrid=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vENTRADAPROVITEMQTDECONFGRID",row || gx.fn.currentGridRowImpl(115),'.',',')},nac:gx.falseFn};
   GXValidFnc[122]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEUNICO",gxz:"ZV159LoteUnico",gxold:"OV159LoteUnico",gxvar:"AV159LoteUnico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV159LoteUnico=Value},v2z:function(Value){gx.O.ZV159LoteUnico=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTEUNICO",row || gx.fn.currentGridRowImpl(115),gx.O.AV159LoteUnico,0)},c2v:function(){gx.O.AV159LoteUnico=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTEUNICO",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[123]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE1GRID",gxz:"ZV161Lote1Grid",gxold:"OV161Lote1Grid",gxvar:"AV161Lote1Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV161Lote1Grid=Value},v2z:function(Value){gx.O.ZV161Lote1Grid=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTE1GRID",row || gx.fn.currentGridRowImpl(115),gx.O.AV161Lote1Grid,0)},c2v:function(){gx.O.AV161Lote1Grid=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTE1GRID",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[124]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE2GRID",gxz:"ZV165Lote2Grid",gxold:"OV165Lote2Grid",gxvar:"AV165Lote2Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV165Lote2Grid=Value},v2z:function(Value){gx.O.ZV165Lote2Grid=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTE2GRID",row || gx.fn.currentGridRowImpl(115),gx.O.AV165Lote2Grid,0)},c2v:function(){gx.O.AV165Lote2Grid=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTE2GRID",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[125]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE3GRID",gxz:"ZV164Lote3Grid",gxold:"OV164Lote3Grid",gxvar:"AV164Lote3Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV164Lote3Grid=Value},v2z:function(Value){gx.O.ZV164Lote3Grid=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTE3GRID",row || gx.fn.currentGridRowImpl(115),gx.O.AV164Lote3Grid,0)},c2v:function(){gx.O.AV164Lote3Grid=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTE3GRID",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[126]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE4GRID",gxz:"ZV163Lote4Grid",gxold:"OV163Lote4Grid",gxvar:"AV163Lote4Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV163Lote4Grid=Value},v2z:function(Value){gx.O.ZV163Lote4Grid=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTE4GRID",row || gx.fn.currentGridRowImpl(115),gx.O.AV163Lote4Grid,0)},c2v:function(){gx.O.AV163Lote4Grid=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTE4GRID",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[127]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE5GRID",gxz:"ZV162Lote5Grid",gxold:"OV162Lote5Grid",gxvar:"AV162Lote5Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV162Lote5Grid=Value},v2z:function(Value){gx.O.ZV162Lote5Grid=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTE5GRID",row || gx.fn.currentGridRowImpl(115),gx.O.AV162Lote5Grid,0)},c2v:function(){gx.O.AV162Lote5Grid=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTE5GRID",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[128]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(115),gx.O.AV8bmpExc,gx.O.AV191Bmpexc_GXI)},c2v:function(){gx.O.AV191Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(115))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(115))}, gxvar_GXI:'AV191Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[129]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMLOTEFILIALID",gxz:"ZV155EntradaProvItemLoteFilialId",gxold:"OV155EntradaProvItemLoteFilialId",gxvar:"AV155EntradaProvItemLoteFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV155EntradaProvItemLoteFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV155EntradaProvItemLoteFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVITEMLOTEFILIALID",row || gx.fn.currentGridRowImpl(115),gx.O.AV155EntradaProvItemLoteFilialId,0)},c2v:function(){gx.O.AV155EntradaProvItemLoteFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVITEMLOTEFILIALID",row || gx.fn.currentGridRowImpl(115),'.')},nac:gx.falseFn};
   GXValidFnc[130]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV113LoteProdutoCombinacao",gxold:"OV113LoteProdutoCombinacao",gxvar:"AV113LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV113LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV113LoteProdutoCombinacao=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTEPRODUTOCOMBINACAO",row || gx.fn.currentGridRowImpl(115),gx.O.AV113LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV113LoteProdutoCombinacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTEPRODUTOCOMBINACAO",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[131]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAEMISSAO",gxz:"ZV76EntradaProvDataEmissao",gxold:"OV76EntradaProvDataEmissao",gxvar:"AV76EntradaProvDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV76EntradaProvDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV76EntradaProvDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVDATAEMISSAO",row || gx.fn.currentGridRowImpl(115),gx.O.AV76EntradaProvDataEmissao,0)},c2v:function(){gx.O.AV76EntradaProvDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vENTRADAPROVDATAEMISSAO",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[132]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:this.Validv_Entradaprovempresaid,isvalid:null,rgrid:[],fld:"vENTRADAPROVEMPRESAID",gxz:"ZV67EntradaProvEmpresaId",gxold:"OV67EntradaProvEmpresaId",gxvar:"AV67EntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV67EntradaProvEmpresaId=Value},v2z:function(Value){gx.O.ZV67EntradaProvEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVEMPRESAID",row || gx.fn.currentGridRowImpl(115),gx.O.AV67EntradaProvEmpresaId,0)},c2v:function(){gx.O.AV67EntradaProvEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVEMPRESAID",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[133]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:this.Validv_Entradaprovfornecedorempid,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECEDOREMPID",gxz:"ZV69EntradaProvFornecedorEmpId",gxold:"OV69EntradaProvFornecedorEmpId",gxvar:"AV69EntradaProvFornecedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV69EntradaProvFornecedorEmpId=Value},v2z:function(Value){gx.O.ZV69EntradaProvFornecedorEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVFORNECEDOREMPID",row || gx.fn.currentGridRowImpl(115),gx.O.AV69EntradaProvFornecedorEmpId,0)},c2v:function(){gx.O.AV69EntradaProvFornecedorEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVFORNECEDOREMPID",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[134]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:this.Validv_Entradaprovfornecedorid,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECEDORID",gxz:"ZV70EntradaProvFornecedorId",gxold:"OV70EntradaProvFornecedorId",gxvar:"AV70EntradaProvFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV70EntradaProvFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70EntradaProvFornecedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVFORNECEDORID",row || gx.fn.currentGridRowImpl(115),gx.O.AV70EntradaProvFornecedorId,0)},c2v:function(){gx.O.AV70EntradaProvFornecedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVFORNECEDORID",row || gx.fn.currentGridRowImpl(115),'.')},nac:gx.falseFn};
   GXValidFnc[135]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:this.Validv_Entradaprovid,isvalid:null,rgrid:[],fld:"vENTRADAPROVID",gxz:"ZV68EntradaProvId",gxold:"OV68EntradaProvId",gxvar:"AV68EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV68EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68EntradaProvId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVID",row || gx.fn.currentGridRowImpl(115),gx.O.AV68EntradaProvId,0)},c2v:function(){gx.O.AV68EntradaProvId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVID",row || gx.fn.currentGridRowImpl(115),'.')},nac:gx.falseFn};
   GXValidFnc[136]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMLOTEPRODEMPID",gxz:"ZV156EntradaProvItemLoteProdEmpId",gxold:"OV156EntradaProvItemLoteProdEmpId",gxvar:"AV156EntradaProvItemLoteProdEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV156EntradaProvItemLoteProdEmpId=Value},v2z:function(Value){gx.O.ZV156EntradaProvItemLoteProdEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVITEMLOTEPRODEMPID",row || gx.fn.currentGridRowImpl(115),gx.O.AV156EntradaProvItemLoteProdEmpId,0)},c2v:function(){gx.O.AV156EntradaProvItemLoteProdEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVITEMLOTEPRODEMPID",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[137]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMLOTECOMBINACAO",gxz:"ZV153EntradaProvItemLoteCombinacao",gxold:"OV153EntradaProvItemLoteCombinacao",gxvar:"AV153EntradaProvItemLoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV153EntradaProvItemLoteCombinacao=Value},v2z:function(Value){gx.O.ZV153EntradaProvItemLoteCombinacao=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVITEMLOTECOMBINACAO",row || gx.fn.currentGridRowImpl(115),gx.O.AV153EntradaProvItemLoteCombinacao,0)},c2v:function(){gx.O.AV153EntradaProvItemLoteCombinacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVITEMLOTECOMBINACAO",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[138]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMLOTEFILIALEMPID",gxz:"ZV154EntradaProvItemLoteFilialEmpId",gxold:"OV154EntradaProvItemLoteFilialEmpId",gxvar:"AV154EntradaProvItemLoteFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV154EntradaProvItemLoteFilialEmpId=Value},v2z:function(Value){gx.O.ZV154EntradaProvItemLoteFilialEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVITEMLOTEFILIALEMPID",row || gx.fn.currentGridRowImpl(115),gx.O.AV154EntradaProvItemLoteFilialEmpId,0)},c2v:function(){gx.O.AV154EntradaProvItemLoteFilialEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAPROVITEMLOTEFILIALEMPID",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[139]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSEQUENCIA",gxz:"ZV152EntradaProvSequencia",gxold:"OV152EntradaProvSequencia",gxvar:"AV152EntradaProvSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV152EntradaProvSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV152EntradaProvSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAPROVSEQUENCIA",row || gx.fn.currentGridRowImpl(115),gx.O.AV152EntradaProvSequencia,0)},c2v:function(){gx.O.AV152EntradaProvSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAPROVSEQUENCIA",row || gx.fn.currentGridRowImpl(115),'.')},nac:gx.falseFn};
   GXValidFnc[140]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTO1DESCRICAO",gxz:"ZV115Atributo1Descricao",gxold:"OV115Atributo1Descricao",gxvar:"AV115Atributo1Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV115Atributo1Descricao=Value},v2z:function(Value){gx.O.ZV115Atributo1Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTO1DESCRICAO",row || gx.fn.currentGridRowImpl(115),gx.O.AV115Atributo1Descricao,0)},c2v:function(){gx.O.AV115Atributo1Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vATRIBUTO1DESCRICAO",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[141]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTO2DESCRICAO",gxz:"ZV116Atributo2Descricao",gxold:"OV116Atributo2Descricao",gxvar:"AV116Atributo2Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV116Atributo2Descricao=Value},v2z:function(Value){gx.O.ZV116Atributo2Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTO2DESCRICAO",row || gx.fn.currentGridRowImpl(115),gx.O.AV116Atributo2Descricao,0)},c2v:function(){gx.O.AV116Atributo2Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vATRIBUTO2DESCRICAO",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[142]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTO3DESCRICAO",gxz:"ZV117Atributo3Descricao",gxold:"OV117Atributo3Descricao",gxvar:"AV117Atributo3Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV117Atributo3Descricao=Value},v2z:function(Value){gx.O.ZV117Atributo3Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTO3DESCRICAO",row || gx.fn.currentGridRowImpl(115),gx.O.AV117Atributo3Descricao,0)},c2v:function(){gx.O.AV117Atributo3Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vATRIBUTO3DESCRICAO",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[143]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTO4DESCRICAO",gxz:"ZV118Atributo4Descricao",gxold:"OV118Atributo4Descricao",gxvar:"AV118Atributo4Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV118Atributo4Descricao=Value},v2z:function(Value){gx.O.ZV118Atributo4Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTO4DESCRICAO",row || gx.fn.currentGridRowImpl(115),gx.O.AV118Atributo4Descricao,0)},c2v:function(){gx.O.AV118Atributo4Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vATRIBUTO4DESCRICAO",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[144]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTO5DESCRICAO",gxz:"ZV119Atributo5Descricao",gxold:"OV119Atributo5Descricao",gxvar:"AV119Atributo5Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV119Atributo5Descricao=Value},v2z:function(Value){gx.O.ZV119Atributo5Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTO5DESCRICAO",row || gx.fn.currentGridRowImpl(115),gx.O.AV119Atributo5Descricao,0)},c2v:function(){gx.O.AV119Atributo5Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vATRIBUTO5DESCRICAO",row || gx.fn.currentGridRowImpl(115))},nac:gx.falseFn};
   GXValidFnc[145]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTOCOD1",gxz:"ZV120AtributoCod1",gxold:"OV120AtributoCod1",gxvar:"AV120AtributoCod1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV120AtributoCod1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV120AtributoCod1=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTOCOD1",row || gx.fn.currentGridRowImpl(115),gx.O.AV120AtributoCod1,0)},c2v:function(){gx.O.AV120AtributoCod1=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vATRIBUTOCOD1",row || gx.fn.currentGridRowImpl(115),'.')},nac:gx.falseFn};
   GXValidFnc[146]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTOCOD2",gxz:"ZV121AtributoCod2",gxold:"OV121AtributoCod2",gxvar:"AV121AtributoCod2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV121AtributoCod2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV121AtributoCod2=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTOCOD2",row || gx.fn.currentGridRowImpl(115),gx.O.AV121AtributoCod2,0)},c2v:function(){gx.O.AV121AtributoCod2=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vATRIBUTOCOD2",row || gx.fn.currentGridRowImpl(115),'.')},nac:gx.falseFn};
   GXValidFnc[147]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTOCOD3",gxz:"ZV122AtributoCod3",gxold:"OV122AtributoCod3",gxvar:"AV122AtributoCod3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV122AtributoCod3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV122AtributoCod3=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTOCOD3",row || gx.fn.currentGridRowImpl(115),gx.O.AV122AtributoCod3,0)},c2v:function(){gx.O.AV122AtributoCod3=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vATRIBUTOCOD3",row || gx.fn.currentGridRowImpl(115),'.')},nac:gx.falseFn};
   GXValidFnc[148]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTOCOD4",gxz:"ZV123AtributoCod4",gxold:"OV123AtributoCod4",gxvar:"AV123AtributoCod4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV123AtributoCod4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV123AtributoCod4=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTOCOD4",row || gx.fn.currentGridRowImpl(115),gx.O.AV123AtributoCod4,0)},c2v:function(){gx.O.AV123AtributoCod4=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vATRIBUTOCOD4",row || gx.fn.currentGridRowImpl(115),'.')},nac:gx.falseFn};
   GXValidFnc[149]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:115,gxgrid:this.GridvarContainer,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTOCOD5",gxz:"ZV124AtributoCod5",gxold:"OV124AtributoCod5",gxvar:"AV124AtributoCod5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV124AtributoCod5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV124AtributoCod5=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vATRIBUTOCOD5",row || gx.fn.currentGridRowImpl(115),gx.O.AV124AtributoCod5,0)},c2v:function(){gx.O.AV124AtributoCod5=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vATRIBUTOCOD5",row || gx.fn.currentGridRowImpl(115),'.')},nac:gx.falseFn};
   GXValidFnc[152]={fld:"LEGENDA",grid:0};
   GXValidFnc[156]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[162]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[163]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[164]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[165]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[166]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[167]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[168]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAGINA",gxz:"ZV135CtrlPagina",gxold:"OV135CtrlPagina",gxvar:"AV135CtrlPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV135CtrlPagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV135CtrlPagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCTRLPAGINA",gx.O.AV135CtrlPagina)},c2v:function(){gx.O.AV135CtrlPagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[169]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV79FilialEmpresaId",gxold:"OV79FilialEmpresaId",gxvar:"AV79FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV79FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV79FilialEmpresaId,0)},c2v:function(){gx.O.AV79FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[170]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovfornecedorempid,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECEDOREMPID",gxz:"ZV69EntradaProvFornecedorEmpId",gxold:"OV69EntradaProvFornecedorEmpId",gxvar:"AV69EntradaProvFornecedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69EntradaProvFornecedorEmpId=Value},v2z:function(Value){gx.O.ZV69EntradaProvFornecedorEmpId=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVFORNECEDOREMPID",gx.O.AV69EntradaProvFornecedorEmpId,0)},c2v:function(){gx.O.AV69EntradaProvFornecedorEmpId=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVFORNECEDOREMPID")},nac:gx.falseFn};
   GXValidFnc[177]={fld:"JS", format:2,grid:0};
   this.AV70EntradaProvFornecedorId = 0 ;
   this.ZV70EntradaProvFornecedorId = 0 ;
   this.OV70EntradaProvFornecedorId = 0 ;
   this.AV71EntradaProvFornecedorNome = "" ;
   this.ZV71EntradaProvFornecedorNome = "" ;
   this.OV71EntradaProvFornecedorNome = "" ;
   this.AV102FilialId = 0 ;
   this.ZV102FilialId = 0 ;
   this.OV102FilialId = 0 ;
   this.AV103FilialNome = "" ;
   this.ZV103FilialNome = "" ;
   this.OV103FilialNome = "" ;
   this.AV171Serie = "" ;
   this.ZV171Serie = "" ;
   this.OV171Serie = "" ;
   this.AV73EntradaProvCPFCNPJ = "" ;
   this.ZV73EntradaProvCPFCNPJ = "" ;
   this.OV73EntradaProvCPFCNPJ = "" ;
   this.AV74EntradaProvFornecTelefone = "" ;
   this.ZV74EntradaProvFornecTelefone = "" ;
   this.OV74EntradaProvFornecTelefone = "" ;
   this.AV76EntradaProvDataEmissao = gx.date.nullDate() ;
   this.ZV76EntradaProvDataEmissao = gx.date.nullDate() ;
   this.OV76EntradaProvDataEmissao = gx.date.nullDate() ;
   this.AV151QtdItens = 0 ;
   this.ZV151QtdItens = 0 ;
   this.OV151QtdItens = 0 ;
   this.AV112EntradaProvItemCodigoBarras = 0 ;
   this.ZV112EntradaProvItemCodigoBarras = 0 ;
   this.OV112EntradaProvItemCodigoBarras = 0 ;
   this.AV90ProdutoDescricao = "" ;
   this.ZV90ProdutoDescricao = "" ;
   this.OV90ProdutoDescricao = "" ;
   this.AV130QuantidadeTela = 0 ;
   this.ZV130QuantidadeTela = 0 ;
   this.OV130QuantidadeTela = 0 ;
   this.AV78ProdutoEmpresaId = "" ;
   this.ZV78ProdutoEmpresaId = "" ;
   this.OV78ProdutoEmpresaId = "" ;
   this.AV77ProdutoId = 0 ;
   this.ZV77ProdutoId = 0 ;
   this.OV77ProdutoId = 0 ;
   this.AV113LoteProdutoCombinacao = "" ;
   this.ZV113LoteProdutoCombinacao = "" ;
   this.OV113LoteProdutoCombinacao = "" ;
   this.AV114SNLOTEUNICO = "" ;
   this.ZV114SNLOTEUNICO = "" ;
   this.OV114SNLOTEUNICO = "" ;
   this.AV67EntradaProvEmpresaId = "" ;
   this.ZV67EntradaProvEmpresaId = "" ;
   this.OV67EntradaProvEmpresaId = "" ;
   this.AV68EntradaProvId = 0 ;
   this.ZV68EntradaProvId = 0 ;
   this.OV68EntradaProvId = 0 ;
   this.AV175Lote = "" ;
   this.ZV175Lote = "" ;
   this.OV175Lote = "" ;
   this.AV91Lote1 = "" ;
   this.ZV91Lote1 = "" ;
   this.OV91Lote1 = "" ;
   this.AV92Lote2 = "" ;
   this.ZV92Lote2 = "" ;
   this.OV92Lote2 = "" ;
   this.AV93Lote3 = "" ;
   this.ZV93Lote3 = "" ;
   this.OV93Lote3 = "" ;
   this.AV94Lote4 = "" ;
   this.ZV94Lote4 = "" ;
   this.OV94Lote4 = "" ;
   this.AV95Lote5 = "" ;
   this.ZV95Lote5 = "" ;
   this.OV95Lote5 = "" ;
   this.ZV160EntradaProvItemLoteProdIdGrid = 0 ;
   this.OV160EntradaProvItemLoteProdIdGrid = 0 ;
   this.ZV158EntradaProvItemLoteProdDesc = "" ;
   this.OV158EntradaProvItemLoteProdDesc = "" ;
   this.ZV167EntradaProvItemCodigoBarrasGrid = 0 ;
   this.OV167EntradaProvItemCodigoBarrasGrid = 0 ;
   this.ZV88ProdutoReferencia = "" ;
   this.OV88ProdutoReferencia = "" ;
   this.ZV131EntradaProvItemQuantidade = 0 ;
   this.OV131EntradaProvItemQuantidade = 0 ;
   this.ZV166EntradaProvItemQtdeConfGrid = 0 ;
   this.OV166EntradaProvItemQtdeConfGrid = 0 ;
   this.ZV159LoteUnico = "" ;
   this.OV159LoteUnico = "" ;
   this.ZV161Lote1Grid = "" ;
   this.OV161Lote1Grid = "" ;
   this.ZV165Lote2Grid = "" ;
   this.OV165Lote2Grid = "" ;
   this.ZV164Lote3Grid = "" ;
   this.OV164Lote3Grid = "" ;
   this.ZV163Lote4Grid = "" ;
   this.OV163Lote4Grid = "" ;
   this.ZV162Lote5Grid = "" ;
   this.OV162Lote5Grid = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV155EntradaProvItemLoteFilialId = 0 ;
   this.OV155EntradaProvItemLoteFilialId = 0 ;
   this.ZV69EntradaProvFornecedorEmpId = "" ;
   this.OV69EntradaProvFornecedorEmpId = "" ;
   this.ZV156EntradaProvItemLoteProdEmpId = "" ;
   this.OV156EntradaProvItemLoteProdEmpId = "" ;
   this.ZV153EntradaProvItemLoteCombinacao = "" ;
   this.OV153EntradaProvItemLoteCombinacao = "" ;
   this.ZV154EntradaProvItemLoteFilialEmpId = "" ;
   this.OV154EntradaProvItemLoteFilialEmpId = "" ;
   this.ZV152EntradaProvSequencia = 0 ;
   this.OV152EntradaProvSequencia = 0 ;
   this.ZV115Atributo1Descricao = "" ;
   this.OV115Atributo1Descricao = "" ;
   this.ZV116Atributo2Descricao = "" ;
   this.OV116Atributo2Descricao = "" ;
   this.ZV117Atributo3Descricao = "" ;
   this.OV117Atributo3Descricao = "" ;
   this.ZV118Atributo4Descricao = "" ;
   this.OV118Atributo4Descricao = "" ;
   this.ZV119Atributo5Descricao = "" ;
   this.OV119Atributo5Descricao = "" ;
   this.ZV120AtributoCod1 = 0 ;
   this.OV120AtributoCod1 = 0 ;
   this.ZV121AtributoCod2 = 0 ;
   this.OV121AtributoCod2 = 0 ;
   this.ZV122AtributoCod3 = 0 ;
   this.OV122AtributoCod3 = 0 ;
   this.ZV123AtributoCod4 = 0 ;
   this.OV123AtributoCod4 = 0 ;
   this.ZV124AtributoCod5 = 0 ;
   this.OV124AtributoCod5 = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV135CtrlPagina = 0 ;
   this.ZV135CtrlPagina = 0 ;
   this.OV135CtrlPagina = 0 ;
   this.AV79FilialEmpresaId = "" ;
   this.ZV79FilialEmpresaId = "" ;
   this.OV79FilialEmpresaId = "" ;
   this.AV69EntradaProvFornecedorEmpId = "" ;
   this.AV70EntradaProvFornecedorId = 0 ;
   this.AV71EntradaProvFornecedorNome = "" ;
   this.AV102FilialId = 0 ;
   this.AV103FilialNome = "" ;
   this.AV171Serie = "" ;
   this.AV73EntradaProvCPFCNPJ = "" ;
   this.AV74EntradaProvFornecTelefone = "" ;
   this.AV76EntradaProvDataEmissao = gx.date.nullDate() ;
   this.AV151QtdItens = 0 ;
   this.AV112EntradaProvItemCodigoBarras = 0 ;
   this.AV90ProdutoDescricao = "" ;
   this.AV130QuantidadeTela = 0 ;
   this.AV78ProdutoEmpresaId = "" ;
   this.AV77ProdutoId = 0 ;
   this.AV113LoteProdutoCombinacao = "" ;
   this.AV114SNLOTEUNICO = "" ;
   this.AV67EntradaProvEmpresaId = "" ;
   this.AV68EntradaProvId = 0 ;
   this.AV175Lote = "" ;
   this.AV91Lote1 = "" ;
   this.AV92Lote2 = "" ;
   this.AV93Lote3 = "" ;
   this.AV94Lote4 = "" ;
   this.AV95Lote5 = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV135CtrlPagina = 0 ;
   this.AV79FilialEmpresaId = "" ;
   this.AV69EntradaProvFornecedorEmpId = "" ;
   this.AV170EntradaProvNumeroDocumento = 0 ;
   this.AV160EntradaProvItemLoteProdIdGrid = 0 ;
   this.AV158EntradaProvItemLoteProdDesc = "" ;
   this.AV167EntradaProvItemCodigoBarrasGrid = 0 ;
   this.AV88ProdutoReferencia = "" ;
   this.AV131EntradaProvItemQuantidade = 0 ;
   this.AV166EntradaProvItemQtdeConfGrid = 0 ;
   this.AV159LoteUnico = "" ;
   this.AV161Lote1Grid = "" ;
   this.AV165Lote2Grid = "" ;
   this.AV164Lote3Grid = "" ;
   this.AV163Lote4Grid = "" ;
   this.AV162Lote5Grid = "" ;
   this.AV8bmpExc = "" ;
   this.AV155EntradaProvItemLoteFilialId = 0 ;
   this.AV156EntradaProvItemLoteProdEmpId = "" ;
   this.AV153EntradaProvItemLoteCombinacao = "" ;
   this.AV154EntradaProvItemLoteFilialEmpId = "" ;
   this.AV152EntradaProvSequencia = 0 ;
   this.AV115Atributo1Descricao = "" ;
   this.AV116Atributo2Descricao = "" ;
   this.AV117Atributo3Descricao = "" ;
   this.AV118Atributo4Descricao = "" ;
   this.AV119Atributo5Descricao = "" ;
   this.AV120AtributoCod1 = 0 ;
   this.AV121AtributoCod2 = 0 ;
   this.AV122AtributoCod3 = 0 ;
   this.AV123AtributoCod4 = 0 ;
   this.AV124AtributoCod5 = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A72PessoaTelefone = "" ;
   this.A5093EntradaProvItemLoteFilialId = 0 ;
   this.A5092EntradaProvItemLoteFilialEmpId = "" ;
   this.A5014EntradaProvId = 0 ;
   this.A5013EntradaProvEmpresaId = "" ;
   this.A5091EntradaProvSequencia = 0 ;
   this.A5018EntradaProvFornecedorId = 0 ;
   this.A5089EntradaProvCPFCNPJ = "" ;
   this.A5019EntradaProvSerie = "" ;
   this.A5022EntradaProvDataEmissao = gx.date.nullDate() ;
   this.A6562EntradaProvFornecTelefone = "" ;
   this.A6550EntradaProvFornecedorNome = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A9247EntradaProvItemQtdeConf = 0 ;
   this.A5098EntradaProvItemQuantidade = 0 ;
   this.A5097EntradaProvItemCodigoBarras = 0 ;
   this.A472PessoaCNPJ = "" ;
   this.A5095EntradaProvItemLoteProdId = 0 ;
   this.A5094EntradaProvItemLoteProdEmpId = "" ;
   this.A5096EntradaProvItemLoteCombinacao = "" ;
   this.A8233EntradaProvItemLoteProdDesc = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3837ProdutoReferencia = "" ;
   this.A566TipoPermissaoUsuarioUsuarioId = "" ;
   this.A3138TipoPermissaoSnControla = "" ;
   this.A568TipoPermissaoId = 0 ;
   this.AV9UsrCod = "" ;
   this.AV66SNQTDECONFENTR = "" ;
   this.AV182Pgmname = "" ;
   this.AV128atributoAux = "" ;
   this.AV169Cont = 0 ;
   this.AV179NomeClasse = "" ;
   this.AV126EsquemaCodigo = 0 ;
   this.AV127AtributoEsquemaCodigo = 0 ;
   this.AV129ValorAtributo = 0 ;
   this.Events = {"e121f12_client": ["'XML'", true] ,"e131f12_client": ["'VALIDACODIGO'", true] ,"e141f12_client": ["'NOTACONFERIDA'", true] ,"e221f12_client": ["'EXCLUIR'", true] ,"e151f12_client": ["'PRIMEIRAPAGINA'", true] ,"e161f12_client": ["'PAGINAANTERIOR'", true] ,"e171f12_client": ["'PROXIMAPAGINA'", true] ,"e181f12_client": ["'ULTIMAPAGINA'", true] ,"e111f12_client": ["'FECHAR'", true] ,"e231f12_client": ["ENTER", true] ,"e241f12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDVAR_nFirstRecordOnPage'},{av:'GRIDVAR_nEOF'},{av:'subGridvar_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV69EntradaProvFornecedorEmpId',fld:'vENTRADAPROVFORNECEDOREMPID'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVEMPRESAID","Visible")',ctrl:'vENTRADAPROVEMPRESAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVID","Visible")',ctrl:'vENTRADAPROVID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVFORNECEDOREMPID","Visible")',ctrl:'vENTRADAPROVFORNECEDOREMPID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOCOMBINACAO","Visible")',ctrl:'vLOTEPRODUTOCOMBINACAO',prop:'Visible'},{av:'AV70EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV76EntradaProvDataEmissao',fld:'vENTRADAPROVDATAEMISSAO'},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5092EntradaProvItemLoteFilialEmpId',fld:'ENTRADAPROVITEMLOTEFILIALEMPID'},{av:'AV79FilialEmpresaId',fld:'vFILIALEMPRESAID',hsh:true},{av:'A5093EntradaProvItemLoteFilialId',fld:'ENTRADAPROVITEMLOTEFILIALID'},{av:'A9247EntradaProvItemQtdeConf',fld:'ENTRADAPROVITEMQTDECONF'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'A5096EntradaProvItemLoteCombinacao',fld:'ENTRADAPROVITEMLOTECOMBINACAO'},{av:'A5094EntradaProvItemLoteProdEmpId',fld:'ENTRADAPROVITEMLOTEPRODEMPID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A3837ProdutoReferencia',fld:'PRODUTOREFERENCIA'},{av:'AV114SNLOTEUNICO',fld:'vSNLOTEUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV159LoteUnico',fld:'vLOTEUNICO'},{av:'AV120AtributoCod1',fld:'vATRIBUTOCOD1'},{av:'AV115Atributo1Descricao',fld:'vATRIBUTO1DESCRICAO'},{av:'AV128atributoAux',fld:'vATRIBUTOAUX'},{av:'AV121AtributoCod2',fld:'vATRIBUTOCOD2'},{av:'AV116Atributo2Descricao',fld:'vATRIBUTO2DESCRICAO'},{av:'AV122AtributoCod3',fld:'vATRIBUTOCOD3'},{av:'AV117Atributo3Descricao',fld:'vATRIBUTO3DESCRICAO'},{av:'AV123AtributoCod4',fld:'vATRIBUTOCOD4'},{av:'AV118Atributo4Descricao',fld:'vATRIBUTO4DESCRICAO'},{av:'AV124AtributoCod5',fld:'vATRIBUTOCOD5'},{av:'AV119Atributo5Descricao',fld:'vATRIBUTO5DESCRICAO'},{av:'AV169Cont',fld:'vCONT'},{av:'AV179NomeClasse',fld:'vNOMECLASSE'},{av:'AV126EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV127AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV129ValorAtributo',fld:'vVALORATRIBUTO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV66SNQTDECONFENTR',fld:'vSNQTDECONFENTR'},{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV67EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV68EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV182Pgmname',fld:'vPGMNAME'},{av:'AV102FilialId',fld:'vFILIALID',hsh:true}],[{ctrl:'BTNXML',prop:'Visible'},{av:'AV176Aux',fld:'vAUX'},{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV130QuantidadeTela',fld:'vQUANTIDADETELA'},{av:'gx.fn.getCtrlProperty("vQUANTIDADETELA","Enabled")',ctrl:'vQUANTIDADETELA',prop:'Enabled'},{av:'AV150SnAlterou',fld:'vSNALTEROU'},{av:'AV102FilialId',fld:'vFILIALID',hsh:true},{av:'AV182Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["GRIDVAR.LOAD"] = [[{av:'GRIDVAR_nFirstRecordOnPage'},{av:'GRIDVAR_nEOF'},{av:'subGridvar_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV69EntradaProvFornecedorEmpId',fld:'vENTRADAPROVFORNECEDOREMPID'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVEMPRESAID","Visible")',ctrl:'vENTRADAPROVEMPRESAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVID","Visible")',ctrl:'vENTRADAPROVID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVFORNECEDOREMPID","Visible")',ctrl:'vENTRADAPROVFORNECEDOREMPID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOCOMBINACAO","Visible")',ctrl:'vLOTEPRODUTOCOMBINACAO',prop:'Visible'},{av:'AV70EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV76EntradaProvDataEmissao',fld:'vENTRADAPROVDATAEMISSAO'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV66SNQTDECONFENTR',fld:'vSNQTDECONFENTR'},{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV67EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV68EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV182Pgmname',fld:'vPGMNAME'},{av:'AV102FilialId',fld:'vFILIALID',hsh:true},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5092EntradaProvItemLoteFilialEmpId',fld:'ENTRADAPROVITEMLOTEFILIALEMPID'},{av:'AV79FilialEmpresaId',fld:'vFILIALEMPRESAID',hsh:true},{av:'A5093EntradaProvItemLoteFilialId',fld:'ENTRADAPROVITEMLOTEFILIALID'},{av:'A9247EntradaProvItemQtdeConf',fld:'ENTRADAPROVITEMQTDECONF'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'A5096EntradaProvItemLoteCombinacao',fld:'ENTRADAPROVITEMLOTECOMBINACAO'},{av:'A5094EntradaProvItemLoteProdEmpId',fld:'ENTRADAPROVITEMLOTEPRODEMPID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A3837ProdutoReferencia',fld:'PRODUTOREFERENCIA'},{av:'AV114SNLOTEUNICO',fld:'vSNLOTEUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV159LoteUnico',fld:'vLOTEUNICO'},{av:'AV120AtributoCod1',fld:'vATRIBUTOCOD1'},{av:'AV115Atributo1Descricao',fld:'vATRIBUTO1DESCRICAO'},{av:'AV128atributoAux',fld:'vATRIBUTOAUX'},{av:'AV121AtributoCod2',fld:'vATRIBUTOCOD2'},{av:'AV116Atributo2Descricao',fld:'vATRIBUTO2DESCRICAO'},{av:'AV122AtributoCod3',fld:'vATRIBUTOCOD3'},{av:'AV117Atributo3Descricao',fld:'vATRIBUTO3DESCRICAO'},{av:'AV123AtributoCod4',fld:'vATRIBUTOCOD4'},{av:'AV118Atributo4Descricao',fld:'vATRIBUTO4DESCRICAO'},{av:'AV124AtributoCod5',fld:'vATRIBUTOCOD5'},{av:'AV119Atributo5Descricao',fld:'vATRIBUTO5DESCRICAO'},{av:'AV169Cont',fld:'vCONT'},{av:'AV179NomeClasse',fld:'vNOMECLASSE'},{av:'AV126EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV127AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV129ValorAtributo',fld:'vVALORATRIBUTO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Visible")',ctrl:'vLOTEUNICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTE1GRID","Visible")',ctrl:'vLOTE1GRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTE2GRID","Visible")',ctrl:'vLOTE2GRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTE3GRID","Visible")',ctrl:'vLOTE3GRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTE4GRID","Visible")',ctrl:'vLOTE4GRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTE5GRID","Visible")',ctrl:'vLOTE5GRID',prop:'Visible'},{av:'AV152EntradaProvSequencia',fld:'vENTRADAPROVSEQUENCIA'},{av:'AV70EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV167EntradaProvItemCodigoBarrasGrid',fld:'vENTRADAPROVITEMCODIGOBARRASGRID'},{av:'AV153EntradaProvItemLoteCombinacao',fld:'vENTRADAPROVITEMLOTECOMBINACAO'},{av:'AV154EntradaProvItemLoteFilialEmpId',fld:'vENTRADAPROVITEMLOTEFILIALEMPID'},{av:'AV155EntradaProvItemLoteFilialId',fld:'vENTRADAPROVITEMLOTEFILIALID'},{av:'AV156EntradaProvItemLoteProdEmpId',fld:'vENTRADAPROVITEMLOTEPRODEMPID'},{av:'AV160EntradaProvItemLoteProdIdGrid',fld:'vENTRADAPROVITEMLOTEPRODIDGRID'},{av:'AV158EntradaProvItemLoteProdDesc',fld:'vENTRADAPROVITEMLOTEPRODDESC'},{av:'AV131EntradaProvItemQuantidade',fld:'vENTRADAPROVITEMQUANTIDADE'},{av:'AV166EntradaProvItemQtdeConfGrid',fld:'vENTRADAPROVITEMQTDECONFGRID'},{av:'gx.fn.getCtrlProperty("LEGENDA","Visible")',ctrl:'LEGENDA',prop:'Visible'},{av:'AV179NomeClasse',fld:'vNOMECLASSE'},{av:'AV126EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV88ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV125i',fld:'vI'},{av:'AV115Atributo1Descricao',fld:'vATRIBUTO1DESCRICAO'},{av:'AV120AtributoCod1',fld:'vATRIBUTOCOD1'},{av:'AV116Atributo2Descricao',fld:'vATRIBUTO2DESCRICAO'},{av:'AV121AtributoCod2',fld:'vATRIBUTOCOD2'},{av:'AV117Atributo3Descricao',fld:'vATRIBUTO3DESCRICAO'},{av:'AV122AtributoCod3',fld:'vATRIBUTOCOD3'},{av:'AV118Atributo4Descricao',fld:'vATRIBUTO4DESCRICAO'},{av:'AV123AtributoCod4',fld:'vATRIBUTOCOD4'},{av:'AV119Atributo5Descricao',fld:'vATRIBUTO5DESCRICAO'},{av:'AV124AtributoCod5',fld:'vATRIBUTOCOD5'},{av:'AV159LoteUnico',fld:'vLOTEUNICO'},{av:'AV127AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV129ValorAtributo',fld:'vVALORATRIBUTO'},{av:'gx.fn.getCtrlProperty("vLOTE1GRID","Title")',ctrl:'vLOTE1GRID',prop:'Title'},{av:'AV161Lote1Grid',fld:'vLOTE1GRID'},{av:'gx.fn.getCtrlProperty("vLOTE2GRID","Title")',ctrl:'vLOTE2GRID',prop:'Title'},{av:'AV165Lote2Grid',fld:'vLOTE2GRID'},{av:'gx.fn.getCtrlProperty("vLOTE3GRID","Title")',ctrl:'vLOTE3GRID',prop:'Title'},{av:'AV164Lote3Grid',fld:'vLOTE3GRID'},{av:'gx.fn.getCtrlProperty("vLOTE4GRID","Title")',ctrl:'vLOTE4GRID',prop:'Title'},{av:'AV163Lote4Grid',fld:'vLOTE4GRID'},{av:'gx.fn.getCtrlProperty("vLOTE5GRID","Title")',ctrl:'vLOTE5GRID',prop:'Title'},{av:'AV162Lote5Grid',fld:'vLOTE5GRID'},{av:'AV169Cont',fld:'vCONT'},{av:'AV133Res',fld:'vRES'},{av:'AV134ResInt',fld:'vRESINT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV136z',fld:'vZ'},{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVITEMCODIGOBARRASGRID","Class")',ctrl:'vENTRADAPROVITEMCODIGOBARRASGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVITEMLOTEPRODDESC","Class")',ctrl:'vENTRADAPROVITEMLOTEPRODDESC',prop:'Class'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVITEMLOTEPRODIDGRID","Class")',ctrl:'vENTRADAPROVITEMLOTEPRODIDGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVITEMQUANTIDADE","Class")',ctrl:'vENTRADAPROVITEMQUANTIDADE',prop:'Class'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVITEMQTDECONFGRID","Class")',ctrl:'vENTRADAPROVITEMQTDECONFGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vLOTEUNICO","Class")',ctrl:'vLOTEUNICO',prop:'Class'},{av:'gx.fn.getCtrlProperty("vLOTE1GRID","Class")',ctrl:'vLOTE1GRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vLOTE2GRID","Class")',ctrl:'vLOTE2GRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vLOTE3GRID","Class")',ctrl:'vLOTE3GRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vLOTE4GRID","Class")',ctrl:'vLOTE4GRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vLOTE5GRID","Class")',ctrl:'vLOTE5GRID',prop:'Class'},{av:'AV128atributoAux',fld:'vATRIBUTOAUX'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'XML'"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV69EntradaProvFornecedorEmpId',fld:'vENTRADAPROVFORNECEDOREMPID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV70EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV79FilialEmpresaId',fld:'vFILIALEMPRESAID',hsh:true},{av:'AV102FilialId',fld:'vFILIALID',hsh:true},{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV67EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV68EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV71EntradaProvFornecedorNome',fld:'vENTRADAPROVFORNECEDORNOME'}],[{av:'AV137PessoaCNPJ',fld:'vPESSOACNPJ'}]];
   this.EvtParms["'VALIDACODIGO'"] = [[{av:'AV112EntradaProvItemCodigoBarras',fld:'vENTRADAPROVITEMCODIGOBARRAS'},{av:'AV130QuantidadeTela',fld:'vQUANTIDADETELA'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'AV67EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'AV68EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'A5092EntradaProvItemLoteFilialEmpId',fld:'ENTRADAPROVITEMLOTEFILIALEMPID'},{av:'AV79FilialEmpresaId',fld:'vFILIALEMPRESAID',hsh:true},{av:'A5093EntradaProvItemLoteFilialId',fld:'ENTRADAPROVITEMLOTEFILIALID'},{av:'AV102FilialId',fld:'vFILIALID',hsh:true},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'}],[{av:'AV149SnErro',fld:'vSNERRO'},{av:'AV189GXLvl323',fld:'vGXLVL323'},{av:'AV112EntradaProvItemCodigoBarras',fld:'vENTRADAPROVITEMCODIGOBARRAS'},{av:'AV130QuantidadeTela',fld:'vQUANTIDADETELA'},{av:'AV90ProdutoDescricao',fld:'vPRODUTODESCRICAO'},{av:'AV91Lote1',fld:'vLOTE1'},{av:'AV92Lote2',fld:'vLOTE2'},{av:'AV93Lote3',fld:'vLOTE3'},{av:'AV94Lote4',fld:'vLOTE4'},{av:'AV95Lote5',fld:'vLOTE5'}]];
   this.EvtParms["'NOTACONFERIDA'"] = [[{av:'GRIDVAR_nFirstRecordOnPage'},{av:'GRIDVAR_nEOF'},{av:'subGridvar_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV69EntradaProvFornecedorEmpId',fld:'vENTRADAPROVFORNECEDOREMPID'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVEMPRESAID","Visible")',ctrl:'vENTRADAPROVEMPRESAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVID","Visible")',ctrl:'vENTRADAPROVID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVFORNECEDOREMPID","Visible")',ctrl:'vENTRADAPROVFORNECEDOREMPID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOCOMBINACAO","Visible")',ctrl:'vLOTEPRODUTOCOMBINACAO',prop:'Visible'},{av:'AV70EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV76EntradaProvDataEmissao',fld:'vENTRADAPROVDATAEMISSAO'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV66SNQTDECONFENTR',fld:'vSNQTDECONFENTR'},{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV67EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV68EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV182Pgmname',fld:'vPGMNAME'},{av:'AV102FilialId',fld:'vFILIALID',hsh:true},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5092EntradaProvItemLoteFilialEmpId',fld:'ENTRADAPROVITEMLOTEFILIALEMPID'},{av:'AV79FilialEmpresaId',fld:'vFILIALEMPRESAID',hsh:true},{av:'A5093EntradaProvItemLoteFilialId',fld:'ENTRADAPROVITEMLOTEFILIALID'},{av:'A9247EntradaProvItemQtdeConf',fld:'ENTRADAPROVITEMQTDECONF'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'A5096EntradaProvItemLoteCombinacao',fld:'ENTRADAPROVITEMLOTECOMBINACAO'},{av:'A5094EntradaProvItemLoteProdEmpId',fld:'ENTRADAPROVITEMLOTEPRODEMPID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A3837ProdutoReferencia',fld:'PRODUTOREFERENCIA'},{av:'AV114SNLOTEUNICO',fld:'vSNLOTEUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV159LoteUnico',fld:'vLOTEUNICO'},{av:'AV120AtributoCod1',fld:'vATRIBUTOCOD1'},{av:'AV115Atributo1Descricao',fld:'vATRIBUTO1DESCRICAO'},{av:'AV128atributoAux',fld:'vATRIBUTOAUX'},{av:'AV121AtributoCod2',fld:'vATRIBUTOCOD2'},{av:'AV116Atributo2Descricao',fld:'vATRIBUTO2DESCRICAO'},{av:'AV122AtributoCod3',fld:'vATRIBUTOCOD3'},{av:'AV117Atributo3Descricao',fld:'vATRIBUTO3DESCRICAO'},{av:'AV123AtributoCod4',fld:'vATRIBUTOCOD4'},{av:'AV118Atributo4Descricao',fld:'vATRIBUTO4DESCRICAO'},{av:'AV124AtributoCod5',fld:'vATRIBUTOCOD5'},{av:'AV119Atributo5Descricao',fld:'vATRIBUTO5DESCRICAO'},{av:'AV169Cont',fld:'vCONT'},{av:'AV179NomeClasse',fld:'vNOMECLASSE'},{av:'AV126EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV127AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV129ValorAtributo',fld:'vVALORATRIBUTO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV170EntradaProvNumeroDocumento',fld:'vENTRADAPROVNUMERODOCUMENTO',hsh:true},{av:'AV14EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV168SnDiferente',fld:'vSNDIFERENTE'},{av:'AV172ContDiferenca',fld:'vCONTDIFERENCA'},{av:'AV142SdtPermissao',fld:'vSDTPERMISSAO'},{av:'AV141MensagemDetalhada',fld:'vMENSAGEMDETALHADA'},{av:'AV143Mensagem',fld:'vMENSAGEM'},{av:'AV149SnErro',fld:'vSNERRO'},{av:'AV144SnTelaPermissao',fld:'vSNTELAPERMISSAO'},{av:'AV145NomeSessao',fld:'vNOMESESSAO'},{av:'AV150SnAlterou',fld:'vSNALTEROU'},{av:'AV102FilialId',fld:'vFILIALID',hsh:true},{av:'AV182Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV67EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV68EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV152EntradaProvSequencia',fld:'vENTRADAPROVSEQUENCIA'},{av:'AV79FilialEmpresaId',fld:'vFILIALEMPRESAID',hsh:true},{av:'AV102FilialId',fld:'vFILIALID',hsh:true},{av:'AV167EntradaProvItemCodigoBarrasGrid',fld:'vENTRADAPROVITEMCODIGOBARRASGRID'}],[]];
   this.EvtParms["'PRIMEIRAPAGINA'"] = [[{av:'GRIDVAR_nFirstRecordOnPage'},{av:'GRIDVAR_nEOF'},{av:'subGridvar_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV69EntradaProvFornecedorEmpId',fld:'vENTRADAPROVFORNECEDOREMPID'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVEMPRESAID","Visible")',ctrl:'vENTRADAPROVEMPRESAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVID","Visible")',ctrl:'vENTRADAPROVID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVFORNECEDOREMPID","Visible")',ctrl:'vENTRADAPROVFORNECEDOREMPID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOCOMBINACAO","Visible")',ctrl:'vLOTEPRODUTOCOMBINACAO',prop:'Visible'},{av:'AV70EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV76EntradaProvDataEmissao',fld:'vENTRADAPROVDATAEMISSAO'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV66SNQTDECONFENTR',fld:'vSNQTDECONFENTR'},{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV67EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV68EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV182Pgmname',fld:'vPGMNAME'},{av:'AV102FilialId',fld:'vFILIALID',hsh:true},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5092EntradaProvItemLoteFilialEmpId',fld:'ENTRADAPROVITEMLOTEFILIALEMPID'},{av:'AV79FilialEmpresaId',fld:'vFILIALEMPRESAID',hsh:true},{av:'A5093EntradaProvItemLoteFilialId',fld:'ENTRADAPROVITEMLOTEFILIALID'},{av:'A9247EntradaProvItemQtdeConf',fld:'ENTRADAPROVITEMQTDECONF'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'A5096EntradaProvItemLoteCombinacao',fld:'ENTRADAPROVITEMLOTECOMBINACAO'},{av:'A5094EntradaProvItemLoteProdEmpId',fld:'ENTRADAPROVITEMLOTEPRODEMPID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A3837ProdutoReferencia',fld:'PRODUTOREFERENCIA'},{av:'AV114SNLOTEUNICO',fld:'vSNLOTEUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV159LoteUnico',fld:'vLOTEUNICO'},{av:'AV120AtributoCod1',fld:'vATRIBUTOCOD1'},{av:'AV115Atributo1Descricao',fld:'vATRIBUTO1DESCRICAO'},{av:'AV128atributoAux',fld:'vATRIBUTOAUX'},{av:'AV121AtributoCod2',fld:'vATRIBUTOCOD2'},{av:'AV116Atributo2Descricao',fld:'vATRIBUTO2DESCRICAO'},{av:'AV122AtributoCod3',fld:'vATRIBUTOCOD3'},{av:'AV117Atributo3Descricao',fld:'vATRIBUTO3DESCRICAO'},{av:'AV123AtributoCod4',fld:'vATRIBUTOCOD4'},{av:'AV118Atributo4Descricao',fld:'vATRIBUTO4DESCRICAO'},{av:'AV124AtributoCod5',fld:'vATRIBUTOCOD5'},{av:'AV119Atributo5Descricao',fld:'vATRIBUTO5DESCRICAO'},{av:'AV169Cont',fld:'vCONT'},{av:'AV179NomeClasse',fld:'vNOMECLASSE'},{av:'AV126EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV127AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV129ValorAtributo',fld:'vVALORATRIBUTO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'PAGINAANTERIOR'"] = [[{av:'GRIDVAR_nFirstRecordOnPage'},{av:'GRIDVAR_nEOF'},{av:'subGridvar_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV69EntradaProvFornecedorEmpId',fld:'vENTRADAPROVFORNECEDOREMPID'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVEMPRESAID","Visible")',ctrl:'vENTRADAPROVEMPRESAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVID","Visible")',ctrl:'vENTRADAPROVID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVFORNECEDOREMPID","Visible")',ctrl:'vENTRADAPROVFORNECEDOREMPID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOCOMBINACAO","Visible")',ctrl:'vLOTEPRODUTOCOMBINACAO',prop:'Visible'},{av:'AV70EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV76EntradaProvDataEmissao',fld:'vENTRADAPROVDATAEMISSAO'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV66SNQTDECONFENTR',fld:'vSNQTDECONFENTR'},{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV67EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV68EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV182Pgmname',fld:'vPGMNAME'},{av:'AV102FilialId',fld:'vFILIALID',hsh:true},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5092EntradaProvItemLoteFilialEmpId',fld:'ENTRADAPROVITEMLOTEFILIALEMPID'},{av:'AV79FilialEmpresaId',fld:'vFILIALEMPRESAID',hsh:true},{av:'A5093EntradaProvItemLoteFilialId',fld:'ENTRADAPROVITEMLOTEFILIALID'},{av:'A9247EntradaProvItemQtdeConf',fld:'ENTRADAPROVITEMQTDECONF'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'A5096EntradaProvItemLoteCombinacao',fld:'ENTRADAPROVITEMLOTECOMBINACAO'},{av:'A5094EntradaProvItemLoteProdEmpId',fld:'ENTRADAPROVITEMLOTEPRODEMPID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A3837ProdutoReferencia',fld:'PRODUTOREFERENCIA'},{av:'AV114SNLOTEUNICO',fld:'vSNLOTEUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV159LoteUnico',fld:'vLOTEUNICO'},{av:'AV120AtributoCod1',fld:'vATRIBUTOCOD1'},{av:'AV115Atributo1Descricao',fld:'vATRIBUTO1DESCRICAO'},{av:'AV128atributoAux',fld:'vATRIBUTOAUX'},{av:'AV121AtributoCod2',fld:'vATRIBUTOCOD2'},{av:'AV116Atributo2Descricao',fld:'vATRIBUTO2DESCRICAO'},{av:'AV122AtributoCod3',fld:'vATRIBUTOCOD3'},{av:'AV117Atributo3Descricao',fld:'vATRIBUTO3DESCRICAO'},{av:'AV123AtributoCod4',fld:'vATRIBUTOCOD4'},{av:'AV118Atributo4Descricao',fld:'vATRIBUTO4DESCRICAO'},{av:'AV124AtributoCod5',fld:'vATRIBUTOCOD5'},{av:'AV119Atributo5Descricao',fld:'vATRIBUTO5DESCRICAO'},{av:'AV169Cont',fld:'vCONT'},{av:'AV179NomeClasse',fld:'vNOMECLASSE'},{av:'AV126EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV127AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV129ValorAtributo',fld:'vVALORATRIBUTO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'PROXIMAPAGINA'"] = [[{av:'GRIDVAR_nFirstRecordOnPage'},{av:'GRIDVAR_nEOF'},{av:'subGridvar_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV69EntradaProvFornecedorEmpId',fld:'vENTRADAPROVFORNECEDOREMPID'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVEMPRESAID","Visible")',ctrl:'vENTRADAPROVEMPRESAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVID","Visible")',ctrl:'vENTRADAPROVID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVFORNECEDOREMPID","Visible")',ctrl:'vENTRADAPROVFORNECEDOREMPID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOCOMBINACAO","Visible")',ctrl:'vLOTEPRODUTOCOMBINACAO',prop:'Visible'},{av:'AV70EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV76EntradaProvDataEmissao',fld:'vENTRADAPROVDATAEMISSAO'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV66SNQTDECONFENTR',fld:'vSNQTDECONFENTR'},{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV67EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV68EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV182Pgmname',fld:'vPGMNAME'},{av:'AV102FilialId',fld:'vFILIALID',hsh:true},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5092EntradaProvItemLoteFilialEmpId',fld:'ENTRADAPROVITEMLOTEFILIALEMPID'},{av:'AV79FilialEmpresaId',fld:'vFILIALEMPRESAID',hsh:true},{av:'A5093EntradaProvItemLoteFilialId',fld:'ENTRADAPROVITEMLOTEFILIALID'},{av:'A9247EntradaProvItemQtdeConf',fld:'ENTRADAPROVITEMQTDECONF'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'A5096EntradaProvItemLoteCombinacao',fld:'ENTRADAPROVITEMLOTECOMBINACAO'},{av:'A5094EntradaProvItemLoteProdEmpId',fld:'ENTRADAPROVITEMLOTEPRODEMPID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A3837ProdutoReferencia',fld:'PRODUTOREFERENCIA'},{av:'AV114SNLOTEUNICO',fld:'vSNLOTEUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV159LoteUnico',fld:'vLOTEUNICO'},{av:'AV120AtributoCod1',fld:'vATRIBUTOCOD1'},{av:'AV115Atributo1Descricao',fld:'vATRIBUTO1DESCRICAO'},{av:'AV128atributoAux',fld:'vATRIBUTOAUX'},{av:'AV121AtributoCod2',fld:'vATRIBUTOCOD2'},{av:'AV116Atributo2Descricao',fld:'vATRIBUTO2DESCRICAO'},{av:'AV122AtributoCod3',fld:'vATRIBUTOCOD3'},{av:'AV117Atributo3Descricao',fld:'vATRIBUTO3DESCRICAO'},{av:'AV123AtributoCod4',fld:'vATRIBUTOCOD4'},{av:'AV118Atributo4Descricao',fld:'vATRIBUTO4DESCRICAO'},{av:'AV124AtributoCod5',fld:'vATRIBUTOCOD5'},{av:'AV119Atributo5Descricao',fld:'vATRIBUTO5DESCRICAO'},{av:'AV169Cont',fld:'vCONT'},{av:'AV179NomeClasse',fld:'vNOMECLASSE'},{av:'AV126EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV127AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV129ValorAtributo',fld:'vVALORATRIBUTO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'ULTIMAPAGINA'"] = [[{av:'GRIDVAR_nFirstRecordOnPage'},{av:'GRIDVAR_nEOF'},{av:'subGridvar_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV69EntradaProvFornecedorEmpId',fld:'vENTRADAPROVFORNECEDOREMPID'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVEMPRESAID","Visible")',ctrl:'vENTRADAPROVEMPRESAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVID","Visible")',ctrl:'vENTRADAPROVID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVFORNECEDOREMPID","Visible")',ctrl:'vENTRADAPROVFORNECEDOREMPID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOCOMBINACAO","Visible")',ctrl:'vLOTEPRODUTOCOMBINACAO',prop:'Visible'},{av:'AV70EntradaProvFornecedorId',fld:'vENTRADAPROVFORNECEDORID'},{av:'AV76EntradaProvDataEmissao',fld:'vENTRADAPROVDATAEMISSAO'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3138TipoPermissaoSnControla',fld:'TIPOPERMISSAOSNCONTROLA'},{av:'A566TipoPermissaoUsuarioUsuarioId',fld:'TIPOPERMISSAOUSUARIOUSUARIOID'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV66SNQTDECONFENTR',fld:'vSNQTDECONFENTR'},{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV67EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV68EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV182Pgmname',fld:'vPGMNAME'},{av:'AV102FilialId',fld:'vFILIALID',hsh:true},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5092EntradaProvItemLoteFilialEmpId',fld:'ENTRADAPROVITEMLOTEFILIALEMPID'},{av:'AV79FilialEmpresaId',fld:'vFILIALEMPRESAID',hsh:true},{av:'A5093EntradaProvItemLoteFilialId',fld:'ENTRADAPROVITEMLOTEFILIALID'},{av:'A9247EntradaProvItemQtdeConf',fld:'ENTRADAPROVITEMQTDECONF'},{av:'A5018EntradaProvFornecedorId',fld:'ENTRADAPROVFORNECEDORID'},{av:'A5097EntradaProvItemCodigoBarras',fld:'ENTRADAPROVITEMCODIGOBARRAS'},{av:'A5096EntradaProvItemLoteCombinacao',fld:'ENTRADAPROVITEMLOTECOMBINACAO'},{av:'A5094EntradaProvItemLoteProdEmpId',fld:'ENTRADAPROVITEMLOTEPRODEMPID'},{av:'A5095EntradaProvItemLoteProdId',fld:'ENTRADAPROVITEMLOTEPRODID'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A3837ProdutoReferencia',fld:'PRODUTOREFERENCIA'},{av:'AV114SNLOTEUNICO',fld:'vSNLOTEUNICO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV159LoteUnico',fld:'vLOTEUNICO'},{av:'AV120AtributoCod1',fld:'vATRIBUTOCOD1'},{av:'AV115Atributo1Descricao',fld:'vATRIBUTO1DESCRICAO'},{av:'AV128atributoAux',fld:'vATRIBUTOAUX'},{av:'AV121AtributoCod2',fld:'vATRIBUTOCOD2'},{av:'AV116Atributo2Descricao',fld:'vATRIBUTO2DESCRICAO'},{av:'AV122AtributoCod3',fld:'vATRIBUTOCOD3'},{av:'AV117Atributo3Descricao',fld:'vATRIBUTO3DESCRICAO'},{av:'AV123AtributoCod4',fld:'vATRIBUTOCOD4'},{av:'AV118Atributo4Descricao',fld:'vATRIBUTO4DESCRICAO'},{av:'AV124AtributoCod5',fld:'vATRIBUTOCOD5'},{av:'AV119Atributo5Descricao',fld:'vATRIBUTO5DESCRICAO'},{av:'AV169Cont',fld:'vCONT'},{av:'AV179NomeClasse',fld:'vNOMECLASSE'},{av:'AV126EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV127AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV129ValorAtributo',fld:'vVALORATRIBUTO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV135CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV182Pgmname',fld:'vPGMNAME'},{av:'AV102FilialId',fld:'vFILIALID',hsh:true}],[{av:'AV102FilialId',fld:'vFILIALID',hsh:true},{av:'AV182Pgmname',fld:'vPGMNAME'}]];
   this.setVCMap("A568TipoPermissaoId", "TIPOPERMISSAOID", 0, "int");
   this.setVCMap("A3138TipoPermissaoSnControla", "TIPOPERMISSAOSNCONTROLA", 0, "char");
   this.setVCMap("A566TipoPermissaoUsuarioUsuarioId", "TIPOPERMISSAOUSUARIOUSUARIOID", 0, "char");
   this.setVCMap("AV9UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV66SNQTDECONFENTR", "vSNQTDECONFENTR", 0, "char");
   this.setVCMap("AV182Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A5091EntradaProvSequencia", "ENTRADAPROVSEQUENCIA", 0, "int");
   this.setVCMap("A5013EntradaProvEmpresaId", "ENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("A5014EntradaProvId", "ENTRADAPROVID", 0, "int");
   this.setVCMap("A5092EntradaProvItemLoteFilialEmpId", "ENTRADAPROVITEMLOTEFILIALEMPID", 0, "char");
   this.setVCMap("A5093EntradaProvItemLoteFilialId", "ENTRADAPROVITEMLOTEFILIALID", 0, "int");
   this.setVCMap("A9247EntradaProvItemQtdeConf", "ENTRADAPROVITEMQTDECONF", 0, "decimal");
   this.setVCMap("A5018EntradaProvFornecedorId", "ENTRADAPROVFORNECEDORID", 0, "int");
   this.setVCMap("A5097EntradaProvItemCodigoBarras", "ENTRADAPROVITEMCODIGOBARRAS", 0, "int");
   this.setVCMap("A5096EntradaProvItemLoteCombinacao", "ENTRADAPROVITEMLOTECOMBINACAO", 0, "char");
   this.setVCMap("A5094EntradaProvItemLoteProdEmpId", "ENTRADAPROVITEMLOTEPRODEMPID", 0, "char");
   this.setVCMap("A5095EntradaProvItemLoteProdId", "ENTRADAPROVITEMLOTEPRODID", 0, "int");
   this.setVCMap("A8233EntradaProvItemLoteProdDesc", "ENTRADAPROVITEMLOTEPRODDESC", 0, "svchar");
   this.setVCMap("A5098EntradaProvItemQuantidade", "ENTRADAPROVITEMQUANTIDADE", 0, "decimal");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A3837ProdutoReferencia", "PRODUTOREFERENCIA", 0, "svchar");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   this.setVCMap("AV128atributoAux", "vATRIBUTOAUX", 0, "char");
   this.setVCMap("AV169Cont", "vCONT", 0, "int");
   this.setVCMap("AV179NomeClasse", "vNOMECLASSE", 0, "svchar");
   this.setVCMap("AV126EsquemaCodigo", "vESQUEMACODIGO", 0, "int");
   this.setVCMap("AV127AtributoEsquemaCodigo", "vATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("AV129ValorAtributo", "vVALORATRIBUTO", 0, "int");
   this.setVCMap("A2938ValorAtributoDescricao", "VALORATRIBUTODESCRICAO", 0, "char");
   this.setVCMap("AV170EntradaProvNumeroDocumento", "vENTRADAPROVNUMERODOCUMENTO", 0, "int");
   this.setVCMap("A568TipoPermissaoId", "TIPOPERMISSAOID", 0, "int");
   this.setVCMap("A3138TipoPermissaoSnControla", "TIPOPERMISSAOSNCONTROLA", 0, "char");
   this.setVCMap("A566TipoPermissaoUsuarioUsuarioId", "TIPOPERMISSAOUSUARIOUSUARIOID", 0, "char");
   this.setVCMap("AV9UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV66SNQTDECONFENTR", "vSNQTDECONFENTR", 0, "char");
   this.setVCMap("AV182Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A5091EntradaProvSequencia", "ENTRADAPROVSEQUENCIA", 0, "int");
   this.setVCMap("A5013EntradaProvEmpresaId", "ENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("A5014EntradaProvId", "ENTRADAPROVID", 0, "int");
   this.setVCMap("A5092EntradaProvItemLoteFilialEmpId", "ENTRADAPROVITEMLOTEFILIALEMPID", 0, "char");
   this.setVCMap("A5093EntradaProvItemLoteFilialId", "ENTRADAPROVITEMLOTEFILIALID", 0, "int");
   this.setVCMap("A9247EntradaProvItemQtdeConf", "ENTRADAPROVITEMQTDECONF", 0, "decimal");
   this.setVCMap("A5018EntradaProvFornecedorId", "ENTRADAPROVFORNECEDORID", 0, "int");
   this.setVCMap("A5097EntradaProvItemCodigoBarras", "ENTRADAPROVITEMCODIGOBARRAS", 0, "int");
   this.setVCMap("A5096EntradaProvItemLoteCombinacao", "ENTRADAPROVITEMLOTECOMBINACAO", 0, "char");
   this.setVCMap("A5094EntradaProvItemLoteProdEmpId", "ENTRADAPROVITEMLOTEPRODEMPID", 0, "char");
   this.setVCMap("A5095EntradaProvItemLoteProdId", "ENTRADAPROVITEMLOTEPRODID", 0, "int");
   this.setVCMap("A8233EntradaProvItemLoteProdDesc", "ENTRADAPROVITEMLOTEPRODDESC", 0, "svchar");
   this.setVCMap("A5098EntradaProvItemQuantidade", "ENTRADAPROVITEMQUANTIDADE", 0, "decimal");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A3837ProdutoReferencia", "PRODUTOREFERENCIA", 0, "svchar");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   this.setVCMap("AV128atributoAux", "vATRIBUTOAUX", 0, "char");
   this.setVCMap("AV169Cont", "vCONT", 0, "int");
   this.setVCMap("AV179NomeClasse", "vNOMECLASSE", 0, "svchar");
   this.setVCMap("AV126EsquemaCodigo", "vESQUEMACODIGO", 0, "int");
   this.setVCMap("AV127AtributoEsquemaCodigo", "vATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("AV129ValorAtributo", "vVALORATRIBUTO", 0, "int");
   this.setVCMap("A2938ValorAtributoDescricao", "VALORATRIBUTODESCRICAO", 0, "char");
   GridvarContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridvarContainer.addRefreshingVar(this.GXValidFnc[170]);
   GridvarContainer.addRefreshingVar({rfrVar:"AV67EntradaProvEmpresaId", rfrProp:"Visible", gxAttId:"Entradaprovempresaid"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV68EntradaProvId", rfrProp:"Visible", gxAttId:"Entradaprovid"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV69EntradaProvFornecedorEmpId", rfrProp:"Visible", gxAttId:"Entradaprovfornecedorempid"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV113LoteProdutoCombinacao", rfrProp:"Visible", gxAttId:"Loteprodutocombinacao"});
   GridvarContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridvarContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridvarContainer.addRefreshingVar({rfrVar:"A568TipoPermissaoId"});
   GridvarContainer.addRefreshingVar({rfrVar:"A3138TipoPermissaoSnControla"});
   GridvarContainer.addRefreshingVar({rfrVar:"A566TipoPermissaoUsuarioUsuarioId"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV9UsrCod"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV66SNQTDECONFENTR"});
   GridvarContainer.addRefreshingVar(this.GXValidFnc[168]);
   GridvarContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridvarContainer.addRefreshingVar(this.GXValidFnc[90]);
   GridvarContainer.addRefreshingVar({rfrVar:"AV182Pgmname"});
   GridvarContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridvarContainer.addRefreshingVar({rfrVar:"A5091EntradaProvSequencia"});
   GridvarContainer.addRefreshingVar({rfrVar:"A5013EntradaProvEmpresaId"});
   GridvarContainer.addRefreshingVar({rfrVar:"A5014EntradaProvId"});
   GridvarContainer.addRefreshingVar({rfrVar:"A5092EntradaProvItemLoteFilialEmpId"});
   GridvarContainer.addRefreshingVar(this.GXValidFnc[169]);
   GridvarContainer.addRefreshingVar({rfrVar:"A5093EntradaProvItemLoteFilialId"});
   GridvarContainer.addRefreshingVar({rfrVar:"A9247EntradaProvItemQtdeConf"});
   GridvarContainer.addRefreshingVar({rfrVar:"A5018EntradaProvFornecedorId"});
   GridvarContainer.addRefreshingVar({rfrVar:"A5097EntradaProvItemCodigoBarras"});
   GridvarContainer.addRefreshingVar({rfrVar:"A5096EntradaProvItemLoteCombinacao"});
   GridvarContainer.addRefreshingVar({rfrVar:"A5094EntradaProvItemLoteProdEmpId"});
   GridvarContainer.addRefreshingVar({rfrVar:"A5095EntradaProvItemLoteProdId"});
   GridvarContainer.addRefreshingVar({rfrVar:"A8233EntradaProvItemLoteProdDesc"});
   GridvarContainer.addRefreshingVar({rfrVar:"A5098EntradaProvItemQuantidade"});
   GridvarContainer.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   GridvarContainer.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   GridvarContainer.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   GridvarContainer.addRefreshingVar({rfrVar:"A3837ProdutoReferencia"});
   GridvarContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridvarContainer.addRefreshingVar({rfrVar:"A2921AtributoEsquemaCodigo"});
   GridvarContainer.addRefreshingVar({rfrVar:"A2916AtributoEsquemaDescricao"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV159LoteUnico", rfrProp:"Value", gxAttId:"Loteunico"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV120AtributoCod1", rfrProp:"Value", gxAttId:"Atributocod1"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV115Atributo1Descricao", rfrProp:"Value", gxAttId:"Atributo1descricao"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV128atributoAux"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV121AtributoCod2", rfrProp:"Value", gxAttId:"Atributocod2"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV116Atributo2Descricao", rfrProp:"Value", gxAttId:"Atributo2descricao"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV122AtributoCod3", rfrProp:"Value", gxAttId:"Atributocod3"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV117Atributo3Descricao", rfrProp:"Value", gxAttId:"Atributo3descricao"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV123AtributoCod4", rfrProp:"Value", gxAttId:"Atributocod4"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV118Atributo4Descricao", rfrProp:"Value", gxAttId:"Atributo4descricao"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV124AtributoCod5", rfrProp:"Value", gxAttId:"Atributocod5"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV119Atributo5Descricao", rfrProp:"Value", gxAttId:"Atributo5descricao"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV169Cont"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV179NomeClasse"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV126EsquemaCodigo"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV127AtributoEsquemaCodigo"});
   GridvarContainer.addRefreshingVar({rfrVar:"A2917AtributoEsquemaSnCadastrado"});
   GridvarContainer.addRefreshingVar({rfrVar:"A2941ValorAtributoCodigo"});
   GridvarContainer.addRefreshingVar({rfrVar:"AV129ValorAtributo"});
   GridvarContainer.addRefreshingVar({rfrVar:"A2938ValorAtributoDescricao"});
   GridvarContainer.addRefreshingVar(this.GXValidFnc[166]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconferenciaentrada());
