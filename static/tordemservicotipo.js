/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:25:7.77
*/
gx.evt.autoSkip = false;
gx.define('tordemservicotipo', false, function () {
   this.ServerClass =  "tordemservicotipo" ;
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
      this.AV20OrdemServicoTipoId=gx.fn.getIntegerValue("vORDEMSERVICOTIPOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A8681OrdemServicoTipoEmpresaid=gx.fn.getControlValue("ORDEMSERVICOTIPOEMPRESAID") ;
      this.A8819OrdemServicoTipoFaseEmpId=gx.fn.getControlValue("ORDEMSERVICOTIPOFASEEMPID") ;
      this.AV25ModeloPreVendaEmpresaId=gx.fn.getControlValue("vMODELOPREVENDAEMPRESAID") ;
      this.A9173OrdemServicoTipoModeloCarEmpId=gx.fn.getControlValue("ORDEMSERVICOTIPOMODELOCAREMPID") ;
      this.AV22TipoCarne=gx.fn.getControlValue("vTIPOCARNE") ;
      this.AV27SNErroCar=gx.fn.getControlValue("vSNERROCAR") ;
      this.A9169OrdemServicoTipoModeloDupEmpId=gx.fn.getControlValue("ORDEMSERVICOTIPOMODELODUPEMPID") ;
      this.AV23TipoDuplicata=gx.fn.getControlValue("vTIPODUPLICATA") ;
      this.AV35TipoPromissoria=gx.fn.getControlValue("vTIPOPROMISSORIA") ;
      this.AV26SNErroDup=gx.fn.getControlValue("vSNERRODUP") ;
      this.A11566OrdemServicoTipoModeloPromEmp=gx.fn.getControlValue("ORDEMSERVICOTIPOMODELOPROMEMP") ;
      this.AV28SnMsgErro=gx.fn.getControlValue("vSNMSGERRO") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A11569OrdemServicoTipoModeloPromTipo=gx.fn.getControlValue("ORDEMSERVICOTIPOMODELOPROMTIPO") ;
      this.AV38Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Ordemservicotipoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotipodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8675OrdemServicoTipoDescricao) )
         {
            try {
               gxballoon.setError("Informe uma Descrição");
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
   this.Valid_Ordemservicotipofaseid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOFASEID");
         this.AnyError  = 0;
         if ( (0==this.A8820OrdemServicoTipoFaseId) )
         {
            try {
               gxballoon.setError("Informe uma Fase Inicial");
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
   this.Valid_Ordemservicotipocontrolaest=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOCONTROLAEST");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotiposndesconto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOSNDESCONTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotipoclientecan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOCLIENTECAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotipoclientesus=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOCLIENTESUS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotipotpparcvista=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOTPPARCVISTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotipomodelodupid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ordemservicotipomodelodupid",["gx.O.AV25ModeloPreVendaEmpresaId", "gx.O.A9170OrdemServicoTipoModeloDupId", "gx.O.A9169OrdemServicoTipoModeloDupEmpId", "gx.O.A9171OrdemServicoTipoModeloDupDesc", "gx.O.A9172OrdemServicoTipoModeloDupTipo"],["A9169OrdemServicoTipoModeloDupEmpId", "A9171OrdemServicoTipoModeloDupDesc", "A9172OrdemServicoTipoModeloDupTipo"]);
      return true;
   }
   this.Valid_Ordemservicotipomodelocarid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ordemservicotipomodelocarid",["gx.O.AV25ModeloPreVendaEmpresaId", "gx.O.A9174OrdemServicoTipoModeloCarId", "gx.O.A9173OrdemServicoTipoModeloCarEmpId", "gx.O.A9175OrdemServicoTipoModeloCarDesc", "gx.O.A9176OrdemServicoTipoModeloCarTipo"],["A9173OrdemServicoTipoModeloCarEmpId", "A9175OrdemServicoTipoModeloCarDesc", "A9176OrdemServicoTipoModeloCarTipo"]);
      return true;
   }
   this.Valid_Ordemservicotipomodelorecid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOMODELORECID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotipomodelorecempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ordemservicotipomodelorecempid",["gx.O.A9177OrdemServicoTipoModeloRecEmpId", "gx.O.A9178OrdemServicoTipoModeloRecId", "gx.O.A9179OrdemServicoTipoModeloRecDesc"],["A9179OrdemServicoTipoModeloRecDesc"]);
      return true;
   }
   this.Valid_Ordemservicotipomodelopromid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ordemservicotipomodelopromid",["gx.O.AV25ModeloPreVendaEmpresaId", "gx.O.A11567OrdemServicoTipoModeloPromId", "gx.O.A11566OrdemServicoTipoModeloPromEmp", "gx.O.A11568OrdemServicoTipoModeloPromDesc", "gx.O.A11569OrdemServicoTipoModeloPromTipo"],["A11566OrdemServicoTipoModeloPromEmp", "A11568OrdemServicoTipoModeloPromDesc", "A11569OrdemServicoTipoModeloPromTipo"]);
      return true;
   }
   this.Valid_Ordemservicotiposngerafinanc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOSNGERAFINANC");
         this.AnyError  = 0;
         if ( this.A8676OrdemServicoTipoSNGeraFinanc == "N" && ! (""==this.A9160OrdemServicoTipoTpParcVista) )
         {
            try {
               gxballoon.setError("Para informar um Lanc. Financeiro à Vista, somente para o Tipo que Gera Financeiro");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A8676OrdemServicoTipoSNGeraFinanc == "S" && (""==this.A9160OrdemServicoTipoTpParcVista) )
         {
            try {
               gxballoon.setError("Informe um Lanc. Financeiro à Vista");
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
   this.Valid_Ordemservicotiposngarantia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOSNGARANTIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotiposncontrato=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOSNCONTRATO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotiposituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOSITUACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotiposnimpgarantia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOSNIMPGARANTIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotiposnimpduplicata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOSNIMPDUPLICATA");
         this.AnyError  = 0;
         if ( this.A9165OrdemServicoTipoSNImpDuplicata == "S" && (0==this.A9170OrdemServicoTipoModeloDupId) )
         {
            try {
               gxballoon.setError("Informe o Modelo Duplicata");
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
   this.Valid_Ordemservicotiposnimpcarne=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOSNIMPCARNE");
         this.AnyError  = 0;
         if ( this.A9166OrdemServicoTipoSNImpCarne == "S" && (0==this.A9174OrdemServicoTipoModeloCarId) )
         {
            try {
               gxballoon.setError("Informe o Modelo Carnê");
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
   this.Valid_Ordemservicotiposnimprecibo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOSNIMPRECIBO");
         this.AnyError  = 0;
         if ( this.A9168OrdemServicoTipoSNImpRecibo == "S" && (0==this.A9178OrdemServicoTipoModeloRecId) )
         {
            try {
               gxballoon.setError("Informe o Modelo Recibo");
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
   this.Valid_Ordemservicotiposnimpboleto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOSNIMPBOLETO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12cj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cj2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14cj646_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15cj646_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,21,23,26,28,31,33,36,38,41,43,46,48,51,53,56,58,59,60,61,64,66,67,68,69,72,74,75,76,77,80,82,83,84,88,92,96,100,102,105,108,111,114,117,120,123,126,128,130,139,141];
   this.GXLastCtrlId =141;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE4",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotipoid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOID",gxz:"Z8682OrdemServicoTipoId",gxold:"O8682OrdemServicoTipoId",gxvar:"A8682OrdemServicoTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8682OrdemServicoTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8682OrdemServicoTipoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOID",gx.O.A8682OrdemServicoTipoId,0)},c2v:function(){gx.O.A8682OrdemServicoTipoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOTIPOID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotipodescricao,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPODESCRICAO",gxz:"Z8675OrdemServicoTipoDescricao",gxold:"O8675OrdemServicoTipoDescricao",gxvar:"A8675OrdemServicoTipoDescricao",ucs:[],op:[23],ip:[23],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8675OrdemServicoTipoDescricao=Value},v2z:function(Value){gx.O.Z8675OrdemServicoTipoDescricao=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPODESCRICAO",gx.O.A8675OrdemServicoTipoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8675OrdemServicoTipoDescricao=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotipofaseid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOFASEID",gxz:"Z8820OrdemServicoTipoFaseId",gxold:"O8820OrdemServicoTipoFaseId",gxvar:"A8820OrdemServicoTipoFaseId",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A8820OrdemServicoTipoFaseId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8820OrdemServicoTipoFaseId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("ORDEMSERVICOTIPOFASEID",gx.O.A8820OrdemServicoTipoFaseId)},c2v:function(){gx.O.A8820OrdemServicoTipoFaseId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOTIPOFASEID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotipocontrolaest,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOCONTROLAEST",gxz:"Z9052OrdemServicoTipoControlaEst",gxold:"O9052OrdemServicoTipoControlaEst",gxvar:"A9052OrdemServicoTipoControlaEst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9052OrdemServicoTipoControlaEst=Value},v2z:function(Value){gx.O.Z9052OrdemServicoTipoControlaEst=Value},v2c:function(){gx.fn.setComboBoxValue("ORDEMSERVICOTIPOCONTROLAEST",gx.O.A9052OrdemServicoTipoControlaEst)},c2v:function(){gx.O.A9052OrdemServicoTipoControlaEst=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOCONTROLAEST")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotiposndesconto,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOSNDESCONTO",gxz:"Z9051OrdemServicoTipoSNDesconto",gxold:"O9051OrdemServicoTipoSNDesconto",gxvar:"A9051OrdemServicoTipoSNDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9051OrdemServicoTipoSNDesconto=Value},v2z:function(Value){gx.O.Z9051OrdemServicoTipoSNDesconto=Value},v2c:function(){gx.fn.setComboBoxValue("ORDEMSERVICOTIPOSNDESCONTO",gx.O.A9051OrdemServicoTipoSNDesconto)},c2v:function(){gx.O.A9051OrdemServicoTipoSNDesconto=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOSNDESCONTO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotipoclientecan,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOCLIENTECAN",gxz:"Z9161OrdemServicoTipoClienteCan",gxold:"O9161OrdemServicoTipoClienteCan",gxvar:"A9161OrdemServicoTipoClienteCan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9161OrdemServicoTipoClienteCan=Value},v2z:function(Value){gx.O.Z9161OrdemServicoTipoClienteCan=Value},v2c:function(){gx.fn.setComboBoxValue("ORDEMSERVICOTIPOCLIENTECAN",gx.O.A9161OrdemServicoTipoClienteCan)},c2v:function(){gx.O.A9161OrdemServicoTipoClienteCan=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOCLIENTECAN")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotipoclientesus,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOCLIENTESUS",gxz:"Z9162OrdemServicoTipoClienteSus",gxold:"O9162OrdemServicoTipoClienteSus",gxvar:"A9162OrdemServicoTipoClienteSus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9162OrdemServicoTipoClienteSus=Value},v2z:function(Value){gx.O.Z9162OrdemServicoTipoClienteSus=Value},v2c:function(){gx.fn.setComboBoxValue("ORDEMSERVICOTIPOCLIENTESUS",gx.O.A9162OrdemServicoTipoClienteSus)},c2v:function(){gx.O.A9162OrdemServicoTipoClienteSus=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOCLIENTESUS")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TBLANCFINANCEIRO", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotipotpparcvista,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOTPPARCVISTA",gxz:"Z9160OrdemServicoTipoTpParcVista",gxold:"O9160OrdemServicoTipoTpParcVista",gxvar:"A9160OrdemServicoTipoTpParcVista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9160OrdemServicoTipoTpParcVista=Value},v2z:function(Value){gx.O.Z9160OrdemServicoTipoTpParcVista=Value},v2c:function(){gx.fn.setComboBoxValue("ORDEMSERVICOTIPOTPPARCVISTA",gx.O.A9160OrdemServicoTipoTpParcVista)},c2v:function(){gx.O.A9160OrdemServicoTipoTpParcVista=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOTPPARCVISTA")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TBLANCFINANCEIRO1", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotipomodelodupid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOMODELODUPID",gxz:"Z9170OrdemServicoTipoModeloDupId",gxold:"O9170OrdemServicoTipoModeloDupId",gxvar:"A9170OrdemServicoTipoModeloDupId",ucs:[],op:[61,60],ip:[61,60,58],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9170OrdemServicoTipoModeloDupId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9170OrdemServicoTipoModeloDupId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOMODELODUPID",gx.O.A9170OrdemServicoTipoModeloDupId,0)},c2v:function(){gx.O.A9170OrdemServicoTipoModeloDupId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOTIPOMODELODUPID",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"PROMPTDUP",grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOMODELODUPDESC",gxz:"Z9171OrdemServicoTipoModeloDupDesc",gxold:"O9171OrdemServicoTipoModeloDupDesc",gxvar:"A9171OrdemServicoTipoModeloDupDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9171OrdemServicoTipoModeloDupDesc=Value},v2z:function(Value){gx.O.Z9171OrdemServicoTipoModeloDupDesc=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOMODELODUPDESC",gx.O.A9171OrdemServicoTipoModeloDupDesc,0)},c2v:function(){gx.O.A9171OrdemServicoTipoModeloDupDesc=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOMODELODUPDESC")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOMODELODUPTIPO",gxz:"Z9172OrdemServicoTipoModeloDupTipo",gxold:"O9172OrdemServicoTipoModeloDupTipo",gxvar:"A9172OrdemServicoTipoModeloDupTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9172OrdemServicoTipoModeloDupTipo=Value},v2z:function(Value){gx.O.Z9172OrdemServicoTipoModeloDupTipo=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOMODELODUPTIPO",gx.O.A9172OrdemServicoTipoModeloDupTipo,0)},c2v:function(){gx.O.A9172OrdemServicoTipoModeloDupTipo=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOMODELODUPTIPO")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TBLANCFINANCEIRO2", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotipomodelocarid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOMODELOCARID",gxz:"Z9174OrdemServicoTipoModeloCarId",gxold:"O9174OrdemServicoTipoModeloCarId",gxvar:"A9174OrdemServicoTipoModeloCarId",ucs:[],op:[69,68],ip:[69,68,66],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9174OrdemServicoTipoModeloCarId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9174OrdemServicoTipoModeloCarId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOMODELOCARID",gx.O.A9174OrdemServicoTipoModeloCarId,0)},c2v:function(){gx.O.A9174OrdemServicoTipoModeloCarId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOTIPOMODELOCARID",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"PROMPTCARNE",grid:0};
   GXValidFnc[68]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOMODELOCARDESC",gxz:"Z9175OrdemServicoTipoModeloCarDesc",gxold:"O9175OrdemServicoTipoModeloCarDesc",gxvar:"A9175OrdemServicoTipoModeloCarDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9175OrdemServicoTipoModeloCarDesc=Value},v2z:function(Value){gx.O.Z9175OrdemServicoTipoModeloCarDesc=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOMODELOCARDESC",gx.O.A9175OrdemServicoTipoModeloCarDesc,0)},c2v:function(){gx.O.A9175OrdemServicoTipoModeloCarDesc=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOMODELOCARDESC")},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOMODELOCARTIPO",gxz:"Z9176OrdemServicoTipoModeloCarTipo",gxold:"O9176OrdemServicoTipoModeloCarTipo",gxvar:"A9176OrdemServicoTipoModeloCarTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9176OrdemServicoTipoModeloCarTipo=Value},v2z:function(Value){gx.O.Z9176OrdemServicoTipoModeloCarTipo=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOMODELOCARTIPO",gx.O.A9176OrdemServicoTipoModeloCarTipo,0)},c2v:function(){gx.O.A9176OrdemServicoTipoModeloCarTipo=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOMODELOCARTIPO")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TBLANCFINANCEIRO3", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotipomodelorecid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOMODELORECID",gxz:"Z9178OrdemServicoTipoModeloRecId",gxold:"O9178OrdemServicoTipoModeloRecId",gxvar:"A9178OrdemServicoTipoModeloRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9178OrdemServicoTipoModeloRecId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9178OrdemServicoTipoModeloRecId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOMODELORECID",gx.O.A9178OrdemServicoTipoModeloRecId,0)},c2v:function(){gx.O.A9178OrdemServicoTipoModeloRecId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOTIPOMODELORECID",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"PROMPTREC",grid:0};
   GXValidFnc[76]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOMODELORECDESC",gxz:"Z9179OrdemServicoTipoModeloRecDesc",gxold:"O9179OrdemServicoTipoModeloRecDesc",gxvar:"A9179OrdemServicoTipoModeloRecDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9179OrdemServicoTipoModeloRecDesc=Value},v2z:function(Value){gx.O.Z9179OrdemServicoTipoModeloRecDesc=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOMODELORECDESC",gx.O.A9179OrdemServicoTipoModeloRecDesc,0)},c2v:function(){gx.O.A9179OrdemServicoTipoModeloRecDesc=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOMODELORECDESC")},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotipomodelorecempid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOMODELORECEMPID",gxz:"Z9177OrdemServicoTipoModeloRecEmpId",gxold:"O9177OrdemServicoTipoModeloRecEmpId",gxvar:"A9177OrdemServicoTipoModeloRecEmpId",ucs:[],op:[76],ip:[76,74,77],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9177OrdemServicoTipoModeloRecEmpId=Value},v2z:function(Value){gx.O.Z9177OrdemServicoTipoModeloRecEmpId=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOMODELORECEMPID",gx.O.A9177OrdemServicoTipoModeloRecEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9177OrdemServicoTipoModeloRecEmpId=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOMODELORECEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[80]={fld:"TBLANCFINANCEIRO4", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotipomodelopromid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOMODELOPROMID",gxz:"Z11567OrdemServicoTipoModeloPromId",gxold:"O11567OrdemServicoTipoModeloPromId",gxvar:"A11567OrdemServicoTipoModeloPromId",ucs:[],op:[84],ip:[84,82],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11567OrdemServicoTipoModeloPromId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11567OrdemServicoTipoModeloPromId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOMODELOPROMID",gx.O.A11567OrdemServicoTipoModeloPromId,0)},c2v:function(){gx.O.A11567OrdemServicoTipoModeloPromId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOTIPOMODELOPROMID",'.')},nac:gx.falseFn};
   GXValidFnc[83]={fld:"PROMPTPROM",grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOMODELOPROMDESC",gxz:"Z11568OrdemServicoTipoModeloPromDesc",gxold:"O11568OrdemServicoTipoModeloPromDesc",gxvar:"A11568OrdemServicoTipoModeloPromDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11568OrdemServicoTipoModeloPromDesc=Value},v2z:function(Value){gx.O.Z11568OrdemServicoTipoModeloPromDesc=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOMODELOPROMDESC",gx.O.A11568OrdemServicoTipoModeloPromDesc,0)},c2v:function(){gx.O.A11568OrdemServicoTipoModeloPromDesc=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOMODELOPROMDESC")},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotiposngerafinanc,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOSNGERAFINANC",gxz:"Z8676OrdemServicoTipoSNGeraFinanc",gxold:"O8676OrdemServicoTipoSNGeraFinanc",gxvar:"A8676OrdemServicoTipoSNGeraFinanc",ucs:[],op:[53,88],ip:[53,88],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8676OrdemServicoTipoSNGeraFinanc=Value},v2z:function(Value){gx.O.Z8676OrdemServicoTipoSNGeraFinanc=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOTIPOSNGERAFINANC",gx.O.A8676OrdemServicoTipoSNGeraFinanc,"S")},c2v:function(){gx.O.A8676OrdemServicoTipoSNGeraFinanc=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOSNGERAFINANC")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[92]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotiposngarantia,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOSNGARANTIA",gxz:"Z8677OrdemServicoTipoSNGarantia",gxold:"O8677OrdemServicoTipoSNGarantia",gxvar:"A8677OrdemServicoTipoSNGarantia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8677OrdemServicoTipoSNGarantia=Value},v2z:function(Value){gx.O.Z8677OrdemServicoTipoSNGarantia=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOTIPOSNGARANTIA",gx.O.A8677OrdemServicoTipoSNGarantia,"S")},c2v:function(){gx.O.A8677OrdemServicoTipoSNGarantia=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOSNGARANTIA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[96]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotiposncontrato,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOSNCONTRATO",gxz:"Z8678OrdemServicoTipoSNContrato",gxold:"O8678OrdemServicoTipoSNContrato",gxvar:"A8678OrdemServicoTipoSNContrato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8678OrdemServicoTipoSNContrato=Value},v2z:function(Value){gx.O.Z8678OrdemServicoTipoSNContrato=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOTIPOSNCONTRATO",gx.O.A8678OrdemServicoTipoSNContrato,"S")},c2v:function(){gx.O.A8678OrdemServicoTipoSNContrato=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOSNCONTRATO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[100]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotiposituacao,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOSITUACAO",gxz:"Z9243OrdemServicoTipoSituacao",gxold:"O9243OrdemServicoTipoSituacao",gxvar:"A9243OrdemServicoTipoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9243OrdemServicoTipoSituacao=Value},v2z:function(Value){gx.O.Z9243OrdemServicoTipoSituacao=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOTIPOSITUACAO",gx.O.A9243OrdemServicoTipoSituacao,"A")},c2v:function(){gx.O.A9243OrdemServicoTipoSituacao=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOSITUACAO")},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[102]={fld:"TABLE6",grid:0};
   GXValidFnc[105]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotiposnimpgarantia,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOSNIMPGARANTIA",gxz:"Z9164OrdemServicoTipoSNImpGarantia",gxold:"O9164OrdemServicoTipoSNImpGarantia",gxvar:"A9164OrdemServicoTipoSNImpGarantia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9164OrdemServicoTipoSNImpGarantia=Value},v2z:function(Value){gx.O.Z9164OrdemServicoTipoSNImpGarantia=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOTIPOSNIMPGARANTIA",gx.O.A9164OrdemServicoTipoSNImpGarantia,"S")},c2v:function(){gx.O.A9164OrdemServicoTipoSNImpGarantia=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOSNIMPGARANTIA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[108]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotiposnimpduplicata,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOSNIMPDUPLICATA",gxz:"Z9165OrdemServicoTipoSNImpDuplicata",gxold:"O9165OrdemServicoTipoSNImpDuplicata",gxvar:"A9165OrdemServicoTipoSNImpDuplicata",ucs:[],op:[58,108],ip:[58,108],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9165OrdemServicoTipoSNImpDuplicata=Value},v2z:function(Value){gx.O.Z9165OrdemServicoTipoSNImpDuplicata=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOTIPOSNIMPDUPLICATA",gx.O.A9165OrdemServicoTipoSNImpDuplicata,"S")},c2v:function(){gx.O.A9165OrdemServicoTipoSNImpDuplicata=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOSNIMPDUPLICATA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[111]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotiposnimpcarne,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOSNIMPCARNE",gxz:"Z9166OrdemServicoTipoSNImpCarne",gxold:"O9166OrdemServicoTipoSNImpCarne",gxvar:"A9166OrdemServicoTipoSNImpCarne",ucs:[],op:[66,111],ip:[66,111],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9166OrdemServicoTipoSNImpCarne=Value},v2z:function(Value){gx.O.Z9166OrdemServicoTipoSNImpCarne=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOTIPOSNIMPCARNE",gx.O.A9166OrdemServicoTipoSNImpCarne,"S")},c2v:function(){gx.O.A9166OrdemServicoTipoSNImpCarne=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOSNIMPCARNE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[114]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotiposnimprecibo,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOSNIMPRECIBO",gxz:"Z9168OrdemServicoTipoSNImpRecibo",gxold:"O9168OrdemServicoTipoSNImpRecibo",gxvar:"A9168OrdemServicoTipoSNImpRecibo",ucs:[],op:[74,114],ip:[74,114],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9168OrdemServicoTipoSNImpRecibo=Value},v2z:function(Value){gx.O.Z9168OrdemServicoTipoSNImpRecibo=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOTIPOSNIMPRECIBO",gx.O.A9168OrdemServicoTipoSNImpRecibo,"S")},c2v:function(){gx.O.A9168OrdemServicoTipoSNImpRecibo=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOSNIMPRECIBO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[117]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicotiposnimpboleto,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOSNIMPBOLETO",gxz:"Z9167OrdemServicoTipoSNImpBoleto",gxold:"O9167OrdemServicoTipoSNImpBoleto",gxvar:"A9167OrdemServicoTipoSNImpBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9167OrdemServicoTipoSNImpBoleto=Value},v2z:function(Value){gx.O.Z9167OrdemServicoTipoSNImpBoleto=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOTIPOSNIMPBOLETO",gx.O.A9167OrdemServicoTipoSNImpBoleto,"S")},c2v:function(){gx.O.A9167OrdemServicoTipoSNImpBoleto=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOSNIMPBOLETO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[120]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOSNIMPPROM",gxz:"Z11570OrdemServicoTipoSNImpProm",gxold:"O11570OrdemServicoTipoSNImpProm",gxvar:"A11570OrdemServicoTipoSNImpProm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A11570OrdemServicoTipoSNImpProm=Value},v2z:function(Value){gx.O.Z11570OrdemServicoTipoSNImpProm=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOTIPOSNIMPPROM",gx.O.A11570OrdemServicoTipoSNImpProm,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11570OrdemServicoTipoSNImpProm=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOSNIMPPROM")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[123]={fld:"TABLE7",grid:0};
   GXValidFnc[126]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[128]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOUSUALT",gxz:"Z8679OrdemServicoTipoUsuAlt",gxold:"O8679OrdemServicoTipoUsuAlt",gxvar:"A8679OrdemServicoTipoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8679OrdemServicoTipoUsuAlt=Value},v2z:function(Value){gx.O.Z8679OrdemServicoTipoUsuAlt=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPOUSUALT",gx.O.A8679OrdemServicoTipoUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8679OrdemServicoTipoUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOTIPOUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 128 , function() {
   });
   GXValidFnc[130]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPODTALT",gxz:"Z8680OrdemServicoTipoDtAlt",gxold:"O8680OrdemServicoTipoDtAlt",gxvar:"A8680OrdemServicoTipoDtAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8680OrdemServicoTipoDtAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8680OrdemServicoTipoDtAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOTIPODTALT",gx.O.A8680OrdemServicoTipoDtAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8680OrdemServicoTipoDtAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ORDEMSERVICOTIPODTALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 130 , function() {
   });
   GXValidFnc[139]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[141]={fld:"BTNHELP",grid:0};
   this.A8682OrdemServicoTipoId = 0 ;
   this.Z8682OrdemServicoTipoId = 0 ;
   this.O8682OrdemServicoTipoId = 0 ;
   this.A8675OrdemServicoTipoDescricao = "" ;
   this.Z8675OrdemServicoTipoDescricao = "" ;
   this.O8675OrdemServicoTipoDescricao = "" ;
   this.A8820OrdemServicoTipoFaseId = 0 ;
   this.Z8820OrdemServicoTipoFaseId = 0 ;
   this.O8820OrdemServicoTipoFaseId = 0 ;
   this.A9052OrdemServicoTipoControlaEst = "" ;
   this.Z9052OrdemServicoTipoControlaEst = "" ;
   this.O9052OrdemServicoTipoControlaEst = "" ;
   this.A9051OrdemServicoTipoSNDesconto = "" ;
   this.Z9051OrdemServicoTipoSNDesconto = "" ;
   this.O9051OrdemServicoTipoSNDesconto = "" ;
   this.A9161OrdemServicoTipoClienteCan = "" ;
   this.Z9161OrdemServicoTipoClienteCan = "" ;
   this.O9161OrdemServicoTipoClienteCan = "" ;
   this.A9162OrdemServicoTipoClienteSus = "" ;
   this.Z9162OrdemServicoTipoClienteSus = "" ;
   this.O9162OrdemServicoTipoClienteSus = "" ;
   this.A9160OrdemServicoTipoTpParcVista = "" ;
   this.Z9160OrdemServicoTipoTpParcVista = "" ;
   this.O9160OrdemServicoTipoTpParcVista = "" ;
   this.A9170OrdemServicoTipoModeloDupId = 0 ;
   this.Z9170OrdemServicoTipoModeloDupId = 0 ;
   this.O9170OrdemServicoTipoModeloDupId = 0 ;
   this.A9171OrdemServicoTipoModeloDupDesc = "" ;
   this.Z9171OrdemServicoTipoModeloDupDesc = "" ;
   this.O9171OrdemServicoTipoModeloDupDesc = "" ;
   this.A9172OrdemServicoTipoModeloDupTipo = "" ;
   this.Z9172OrdemServicoTipoModeloDupTipo = "" ;
   this.O9172OrdemServicoTipoModeloDupTipo = "" ;
   this.A9174OrdemServicoTipoModeloCarId = 0 ;
   this.Z9174OrdemServicoTipoModeloCarId = 0 ;
   this.O9174OrdemServicoTipoModeloCarId = 0 ;
   this.A9175OrdemServicoTipoModeloCarDesc = "" ;
   this.Z9175OrdemServicoTipoModeloCarDesc = "" ;
   this.O9175OrdemServicoTipoModeloCarDesc = "" ;
   this.A9176OrdemServicoTipoModeloCarTipo = "" ;
   this.Z9176OrdemServicoTipoModeloCarTipo = "" ;
   this.O9176OrdemServicoTipoModeloCarTipo = "" ;
   this.A9178OrdemServicoTipoModeloRecId = 0 ;
   this.Z9178OrdemServicoTipoModeloRecId = 0 ;
   this.O9178OrdemServicoTipoModeloRecId = 0 ;
   this.A9179OrdemServicoTipoModeloRecDesc = "" ;
   this.Z9179OrdemServicoTipoModeloRecDesc = "" ;
   this.O9179OrdemServicoTipoModeloRecDesc = "" ;
   this.A9177OrdemServicoTipoModeloRecEmpId = "" ;
   this.Z9177OrdemServicoTipoModeloRecEmpId = "" ;
   this.O9177OrdemServicoTipoModeloRecEmpId = "" ;
   this.A11567OrdemServicoTipoModeloPromId = 0 ;
   this.Z11567OrdemServicoTipoModeloPromId = 0 ;
   this.O11567OrdemServicoTipoModeloPromId = 0 ;
   this.A11568OrdemServicoTipoModeloPromDesc = "" ;
   this.Z11568OrdemServicoTipoModeloPromDesc = "" ;
   this.O11568OrdemServicoTipoModeloPromDesc = "" ;
   this.A8676OrdemServicoTipoSNGeraFinanc = "" ;
   this.Z8676OrdemServicoTipoSNGeraFinanc = "" ;
   this.O8676OrdemServicoTipoSNGeraFinanc = "" ;
   this.A8677OrdemServicoTipoSNGarantia = "" ;
   this.Z8677OrdemServicoTipoSNGarantia = "" ;
   this.O8677OrdemServicoTipoSNGarantia = "" ;
   this.A8678OrdemServicoTipoSNContrato = "" ;
   this.Z8678OrdemServicoTipoSNContrato = "" ;
   this.O8678OrdemServicoTipoSNContrato = "" ;
   this.A9243OrdemServicoTipoSituacao = "" ;
   this.Z9243OrdemServicoTipoSituacao = "" ;
   this.O9243OrdemServicoTipoSituacao = "" ;
   this.A9164OrdemServicoTipoSNImpGarantia = "" ;
   this.Z9164OrdemServicoTipoSNImpGarantia = "" ;
   this.O9164OrdemServicoTipoSNImpGarantia = "" ;
   this.A9165OrdemServicoTipoSNImpDuplicata = "" ;
   this.Z9165OrdemServicoTipoSNImpDuplicata = "" ;
   this.O9165OrdemServicoTipoSNImpDuplicata = "" ;
   this.A9166OrdemServicoTipoSNImpCarne = "" ;
   this.Z9166OrdemServicoTipoSNImpCarne = "" ;
   this.O9166OrdemServicoTipoSNImpCarne = "" ;
   this.A9168OrdemServicoTipoSNImpRecibo = "" ;
   this.Z9168OrdemServicoTipoSNImpRecibo = "" ;
   this.O9168OrdemServicoTipoSNImpRecibo = "" ;
   this.A9167OrdemServicoTipoSNImpBoleto = "" ;
   this.Z9167OrdemServicoTipoSNImpBoleto = "" ;
   this.O9167OrdemServicoTipoSNImpBoleto = "" ;
   this.A11570OrdemServicoTipoSNImpProm = "" ;
   this.Z11570OrdemServicoTipoSNImpProm = "" ;
   this.O11570OrdemServicoTipoSNImpProm = "" ;
   this.A8679OrdemServicoTipoUsuAlt = "" ;
   this.Z8679OrdemServicoTipoUsuAlt = "" ;
   this.O8679OrdemServicoTipoUsuAlt = "" ;
   this.A8680OrdemServicoTipoDtAlt = gx.date.nullDate() ;
   this.Z8680OrdemServicoTipoDtAlt = gx.date.nullDate() ;
   this.O8680OrdemServicoTipoDtAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV37Pgmname = "" ;
   this.AV38Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV24ModeloDocumentoEmpresaId = "" ;
   this.AV25ModeloPreVendaEmpresaId = "" ;
   this.AV22TipoCarne = "" ;
   this.AV23TipoDuplicata = "" ;
   this.AV35TipoPromissoria = "" ;
   this.AV27SNErroCar = "" ;
   this.AV26SNErroDup = "" ;
   this.AV28SnMsgErro = "" ;
   this.AV20OrdemServicoTipoId = 0 ;
   this.A8681OrdemServicoTipoEmpresaid = "" ;
   this.A8682OrdemServicoTipoId = 0 ;
   this.A8819OrdemServicoTipoFaseEmpId = "" ;
   this.A9173OrdemServicoTipoModeloCarEmpId = "" ;
   this.A9169OrdemServicoTipoModeloDupEmpId = "" ;
   this.A11566OrdemServicoTipoModeloPromEmp = "" ;
   this.AV19SnAlterou = "" ;
   this.A9177OrdemServicoTipoModeloRecEmpId = "" ;
   this.Gx_BScreen = 0 ;
   this.A8820OrdemServicoTipoFaseId = 0 ;
   this.A8675OrdemServicoTipoDescricao = "" ;
   this.A8676OrdemServicoTipoSNGeraFinanc = "" ;
   this.A8677OrdemServicoTipoSNGarantia = "" ;
   this.A8678OrdemServicoTipoSNContrato = "" ;
   this.A9051OrdemServicoTipoSNDesconto = "" ;
   this.A9052OrdemServicoTipoControlaEst = "" ;
   this.A9160OrdemServicoTipoTpParcVista = "" ;
   this.A9161OrdemServicoTipoClienteCan = "" ;
   this.A9162OrdemServicoTipoClienteSus = "" ;
   this.A9164OrdemServicoTipoSNImpGarantia = "" ;
   this.A9165OrdemServicoTipoSNImpDuplicata = "" ;
   this.A9166OrdemServicoTipoSNImpCarne = "" ;
   this.A9167OrdemServicoTipoSNImpBoleto = "" ;
   this.A9168OrdemServicoTipoSNImpRecibo = "" ;
   this.A11570OrdemServicoTipoSNImpProm = "" ;
   this.A9170OrdemServicoTipoModeloDupId = 0 ;
   this.A9171OrdemServicoTipoModeloDupDesc = "" ;
   this.A9172OrdemServicoTipoModeloDupTipo = "" ;
   this.A9174OrdemServicoTipoModeloCarId = 0 ;
   this.A9175OrdemServicoTipoModeloCarDesc = "" ;
   this.A9176OrdemServicoTipoModeloCarTipo = "" ;
   this.A9178OrdemServicoTipoModeloRecId = 0 ;
   this.A9179OrdemServicoTipoModeloRecDesc = "" ;
   this.A11567OrdemServicoTipoModeloPromId = 0 ;
   this.A11568OrdemServicoTipoModeloPromDesc = "" ;
   this.A11569OrdemServicoTipoModeloPromTipo = "" ;
   this.A8679OrdemServicoTipoUsuAlt = "" ;
   this.A8680OrdemServicoTipoDtAlt = gx.date.nullDate() ;
   this.A9243OrdemServicoTipoSituacao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12cj2_client": ["'FECHAR'", true] ,"e13cj2_client": ["AFTER TRN", true] ,"e14cj646_client": ["ENTER", true] ,"e15cj646_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPTDUP", [58]);
   this.setPrompt("PROMPTCARNE", [66]);
   this.setPrompt("PROMPTREC", [74]);
   this.setPrompt("PROMPTPROM", [82]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20OrdemServicoTipoId", "vORDEMSERVICOTIPOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8681OrdemServicoTipoEmpresaid", "ORDEMSERVICOTIPOEMPRESAID", 0, "char");
   this.setVCMap("A8819OrdemServicoTipoFaseEmpId", "ORDEMSERVICOTIPOFASEEMPID", 0, "char");
   this.setVCMap("AV25ModeloPreVendaEmpresaId", "vMODELOPREVENDAEMPRESAID", 0, "char");
   this.setVCMap("A9173OrdemServicoTipoModeloCarEmpId", "ORDEMSERVICOTIPOMODELOCAREMPID", 0, "char");
   this.setVCMap("AV22TipoCarne", "vTIPOCARNE", 0, "char");
   this.setVCMap("AV27SNErroCar", "vSNERROCAR", 0, "char");
   this.setVCMap("A9169OrdemServicoTipoModeloDupEmpId", "ORDEMSERVICOTIPOMODELODUPEMPID", 0, "char");
   this.setVCMap("AV23TipoDuplicata", "vTIPODUPLICATA", 0, "char");
   this.setVCMap("AV35TipoPromissoria", "vTIPOPROMISSORIA", 0, "char");
   this.setVCMap("AV26SNErroDup", "vSNERRODUP", 0, "char");
   this.setVCMap("A11566OrdemServicoTipoModeloPromEmp", "ORDEMSERVICOTIPOMODELOPROMEMP", 0, "char");
   this.setVCMap("AV28SnMsgErro", "vSNMSGERRO", 0, "svchar");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A11569OrdemServicoTipoModeloPromTipo", "ORDEMSERVICOTIPOMODELOPROMTIPO", 0, "char");
   this.setVCMap("AV38Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 646 ]= ["O8678OrdemServicoTipoSNContrato","O9243OrdemServicoTipoSituacao","O9178OrdemServicoTipoModeloRecId","O9177OrdemServicoTipoModeloRecEmpId","O9174OrdemServicoTipoModeloCarId","O9173OrdemServicoTipoModeloCarEmpId","O9170OrdemServicoTipoModeloDupId","O9169OrdemServicoTipoModeloDupEmpId","O9168OrdemServicoTipoSNImpRecibo","O9167OrdemServicoTipoSNImpBoleto","O9166OrdemServicoTipoSNImpCarne","O9165OrdemServicoTipoSNImpDuplicata","O9164OrdemServicoTipoSNImpGarantia","O9162OrdemServicoTipoClienteSus","O9161OrdemServicoTipoClienteCan","O9160OrdemServicoTipoTpParcVista","O9051OrdemServicoTipoSNDesconto","O9052OrdemServicoTipoControlaEst","O8677OrdemServicoTipoSNGarantia","O8676OrdemServicoTipoSNGeraFinanc","O8820OrdemServicoTipoFaseId","O8675OrdemServicoTipoDescricao"] ;
});
gx.setParentObj(new tordemservicotipo());
