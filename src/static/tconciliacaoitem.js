/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:2:40.10
*/
gx.evt.autoSkip = false;
gx.define('tconciliacaoitem', false, function () {
   this.ServerClass =  "tconciliacaoitem" ;
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
      this.AV18ConciliacaoItemTipoSelecao=gx.fn.getControlValue("vCONCILIACAOITEMTIPOSELECAO") ;
      this.AV19ConciliacaoEmpresaId=gx.fn.getControlValue("vCONCILIACAOEMPRESAID") ;
      this.A1497ConciliacaoEmpresaId=gx.fn.getControlValue("CONCILIACAOEMPRESAID") ;
      this.AV20ConciliacaoId=gx.fn.getIntegerValue("vCONCILIACAOID",'.') ;
      this.AV21ConciliacaoItemSeq=gx.fn.getIntegerValue("vCONCILIACAOITEMSEQ",'.') ;
      this.AV23ConciliacaoItemCContabilEmpId=gx.fn.getControlValue("vCONCILIACAOITEMCCONTABILEMPID") ;
      this.A1511ConciliacaoItemCContabilEmpId=gx.fn.getControlValue("CONCILIACAOITEMCCONTABILEMPID") ;
      this.AV22ConciliacaoItemContaCliEmpId=gx.fn.getControlValue("vCONCILIACAOITEMCONTACLIEMPID") ;
      this.A1522ConciliacaoItemContaCliEmpId=gx.fn.getControlValue("CONCILIACAOITEMCONTACLIEMPID") ;
      this.AV38TipoComparacao=gx.fn.getControlValue("vTIPOCOMPARACAO") ;
      this.AV40snAnalitica=gx.fn.getControlValue("vSNANALITICA") ;
      this.AV41snAnalitica2=gx.fn.getControlValue("vSNANALITICA2") ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV24snAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV53Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV52Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Conciliacaoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Conciliacaoid",["gx.O.A1497ConciliacaoEmpresaId", "gx.O.A1498ConciliacaoId"],[]);
      return true;
   }
   this.Valid_Conciliacaoitemseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemtiposelecao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMTIPOSELECAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemtipopagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMTIPOPAGREC");
         this.AnyError  = 0;
         if ( ! ( this.A1535ConciliacaoItemTipoPagRec == "0" || this.A1535ConciliacaoItemTipoPagRec == "P" || this.A1535ConciliacaoItemTipoPagRec == "R" ) )
         {
            try {
               gxballoon.setError("Campo Tipo Pagar/Receber fora do intervalo");
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
   this.Valid_Conciliacaoitemsncaixa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMSNCAIXA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemsnbanco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMSNBANCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemsnaplicacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMSNAPLICACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemfilini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMFILINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemfilfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMFILFIN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemtplancini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMTPLANCINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemtplancfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMTPLANCFIN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemtpcontaini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMTPCONTAINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemtpcontafin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMTPCONTAFIN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemtpcobini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMTPCOBINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemtpcobfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMTPCOBFIN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemespini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMESPINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemespfin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMESPFIN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemccustoini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMCCUSTOINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemccustofin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMCCUSTOFIN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemhiscxabcoini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMHISCXABCOINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemhiscxabcofin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMHISCXABCOFIN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemcaibanini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMCAIBANINI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemcaibaifin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMCAIBAIFIN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemccontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Conciliacaoitemccontabilid",["gx.O.AV23ConciliacaoItemCContabilEmpId", "gx.O.A1512ConciliacaoItemCContabilId", "gx.O.A1511ConciliacaoItemCContabilEmpId", "gx.O.A1513ConciliacaoItemCContabilNome", "gx.O.AV40snAnalitica"],["A1511ConciliacaoItemCContabilEmpId", "A1513ConciliacaoItemCContabilNome", "AV40snAnalitica"]);
      return true;
   }
   this.Valid_Conciliacaoitemsituacaoclifor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONCILIACAOITEMSITUACAOCLIFOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conciliacaoitemcontacliid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Conciliacaoitemcontacliid",["gx.O.AV22ConciliacaoItemContaCliEmpId", "gx.O.A1523ConciliacaoItemContaCliId", "gx.O.A1522ConciliacaoItemContaCliEmpId", "gx.O.A1814ConciliacaoItemTipoSelecao", "gx.O.AV38TipoComparacao", "gx.O.A1501ConciliacaoItemFilIni", "gx.O.A1502ConciliacaoItemFilFin", "gx.O.A1974ConciliacaoItemTpLancIni", "gx.O.A1975ConciliacaoItemTpLancFin", "gx.O.A1503ConciliacaoItemTpContaIni", "gx.O.A1504ConciliacaoItemTpContaFin", "gx.O.A1505ConciliacaoItemTpCobIni", "gx.O.A1506ConciliacaoItemTpCobFin", "gx.O.A1507ConciliacaoItemEspIni", "gx.O.A1508ConciliacaoItemEspFin", "gx.O.A1509ConciliacaoItemCCustoIni", "gx.O.A1510ConciliacaoItemCCustoFin", "gx.O.A1976ConciliacaoItemHisCxaBcoIni", "gx.O.A1977ConciliacaoItemHisCxaBcoFin", "gx.O.A1519ConciliacaoItemCaiBanIni", "gx.O.A1520ConciliacaoItemCaiBaiFin", "gx.O.A1512ConciliacaoItemCContabilId", "gx.O.AV40snAnalitica", "gx.O.AV41snAnalitica2", "gx.O.A1524ConciliacaoItemContaCliNome", "gx.O.AV10ret"],["A1522ConciliacaoItemContaCliEmpId", "A1524ConciliacaoItemContaCliNome", "AV10ret", "AV41snAnalitica2"]);
      return true;
   }
   this.e12302_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13302_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14302_client=function()
   {
      this.executeServerEvent("CONCILIACAOITEMTIPOSELECAO.CLICK", true, null, false, true);
   };
   this.e1530188_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1630188_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,16,17,20,22,24,27,29,33,36,38,39,43,47,51,52,55,59,61,62,65,67,69,70,73,75,77,78,81,83,85,86,89,91,93,94,97,99,101,102,105,107,109,110,113,115,117,118,121,123,125,126,132,134,135,136,137,138,144,146,149,151,152,153,156,159,161,163,172,173,174,176,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195];
   this.GXLastCtrlId =195;
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV48Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV48Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV48Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tconciliacaoitem_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoid,isvalid:null,rgrid:[],fld:"CONCILIACAOID",gxz:"Z1498ConciliacaoId",gxold:"O1498ConciliacaoId",gxvar:"A1498ConciliacaoId",ucs:[],op:[],ip:[15],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1498ConciliacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1498ConciliacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOID",gx.O.A1498ConciliacaoId,0)},c2v:function(){gx.O.A1498ConciliacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONCILIACAODESCRICAO",gxz:"ZV35ConciliacaoDescricao",gxold:"OV35ConciliacaoDescricao",gxvar:"AV35ConciliacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ConciliacaoDescricao=Value},v2z:function(Value){gx.O.ZV35ConciliacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONCILIACAODESCRICAO",gx.O.AV35ConciliacaoDescricao,0)},c2v:function(){gx.O.AV35ConciliacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONCILIACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"SEQUENCIA", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemseq,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMSEQ",gxz:"Z1527ConciliacaoItemSeq",gxold:"O1527ConciliacaoItemSeq",gxvar:"A1527ConciliacaoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1527ConciliacaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1527ConciliacaoItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMSEQ",gx.O.A1527ConciliacaoItemSeq,0)},c2v:function(){gx.O.A1527ConciliacaoItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABSELECAO",grid:0};
   GXValidFnc[27]={fld:"TIPOSELECAO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemtiposelecao,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMTIPOSELECAO",gxz:"Z1814ConciliacaoItemTipoSelecao",gxold:"O1814ConciliacaoItemTipoSelecao",gxvar:"A1814ConciliacaoItemTipoSelecao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1814ConciliacaoItemTipoSelecao=Value},v2z:function(Value){gx.O.Z1814ConciliacaoItemTipoSelecao=Value},v2c:function(){gx.fn.setComboBoxValue("CONCILIACAOITEMTIPOSELECAO",gx.O.A1814ConciliacaoItemTipoSelecao)},c2v:function(){gx.O.A1814ConciliacaoItemTipoSelecao=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMTIPOSELECAO")},nac:function(){return !(""==this.AV18ConciliacaoItemTipoSelecao)}};
   GXValidFnc[33]={fld:"TABTIPOPAGARRECEBER",grid:0};
   GXValidFnc[36]={fld:"TIPOPAGARRECEBER", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemtipopagrec,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMTIPOPAGREC",gxz:"Z1535ConciliacaoItemTipoPagRec",gxold:"O1535ConciliacaoItemTipoPagRec",gxvar:"A1535ConciliacaoItemTipoPagRec",ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1535ConciliacaoItemTipoPagRec=Value},v2z:function(Value){gx.O.Z1535ConciliacaoItemTipoPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("CONCILIACAOITEMTIPOPAGREC",gx.O.A1535ConciliacaoItemTipoPagRec);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1535ConciliacaoItemTipoPagRec=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMTIPOPAGREC")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[39]={fld:"TABCONCILIAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemsncaixa,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMSNCAIXA",gxz:"Z1516ConciliacaoItemSnCaixa",gxold:"O1516ConciliacaoItemSnCaixa",gxvar:"A1516ConciliacaoItemSnCaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1516ConciliacaoItemSnCaixa=Value},v2z:function(Value){gx.O.Z1516ConciliacaoItemSnCaixa=Value},v2c:function(){gx.fn.setCheckBoxValue("CONCILIACAOITEMSNCAIXA",gx.O.A1516ConciliacaoItemSnCaixa,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1516ConciliacaoItemSnCaixa=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMSNCAIXA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemsnbanco,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMSNBANCO",gxz:"Z1517ConciliacaoItemSnBanco",gxold:"O1517ConciliacaoItemSnBanco",gxvar:"A1517ConciliacaoItemSnBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1517ConciliacaoItemSnBanco=Value},v2z:function(Value){gx.O.Z1517ConciliacaoItemSnBanco=Value},v2c:function(){gx.fn.setCheckBoxValue("CONCILIACAOITEMSNBANCO",gx.O.A1517ConciliacaoItemSnBanco,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1517ConciliacaoItemSnBanco=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMSNBANCO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[51]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemsnaplicacao,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMSNAPLICACAO",gxz:"Z1518ConciliacaoItemSnAplicacao",gxold:"O1518ConciliacaoItemSnAplicacao",gxvar:"A1518ConciliacaoItemSnAplicacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1518ConciliacaoItemSnAplicacao=Value},v2z:function(Value){gx.O.Z1518ConciliacaoItemSnAplicacao=Value},v2c:function(){gx.fn.setCheckBoxValue("CONCILIACAOITEMSNAPLICACAO",gx.O.A1518ConciliacaoItemSnAplicacao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1518ConciliacaoItemSnAplicacao=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMSNAPLICACAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[52]={fld:"TAB2",grid:0};
   GXValidFnc[55]={fld:"TABINCIOFINAL",grid:0};
   GXValidFnc[59]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[61]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[62]={fld:"TABFILIAL",grid:0};
   GXValidFnc[65]={fld:"FILIAL", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemfilini,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMFILINI",gxz:"Z1501ConciliacaoItemFilIni",gxold:"O1501ConciliacaoItemFilIni",gxvar:"A1501ConciliacaoItemFilIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1501ConciliacaoItemFilIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1501ConciliacaoItemFilIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMFILINI",gx.O.A1501ConciliacaoItemFilIni,0)},c2v:function(){gx.O.A1501ConciliacaoItemFilIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMFILINI",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemfilfin,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMFILFIN",gxz:"Z1502ConciliacaoItemFilFin",gxold:"O1502ConciliacaoItemFilFin",gxvar:"A1502ConciliacaoItemFilFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1502ConciliacaoItemFilFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1502ConciliacaoItemFilFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMFILFIN",gx.O.A1502ConciliacaoItemFilFin,0)},c2v:function(){gx.O.A1502ConciliacaoItemFilFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMFILFIN",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TABTIPOLANCAMENTO",grid:0};
   GXValidFnc[73]={fld:"TIPOLANCAMENTO", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemtplancini,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMTPLANCINI",gxz:"Z1974ConciliacaoItemTpLancIni",gxold:"O1974ConciliacaoItemTpLancIni",gxvar:"A1974ConciliacaoItemTpLancIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1974ConciliacaoItemTpLancIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1974ConciliacaoItemTpLancIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMTPLANCINI",gx.O.A1974ConciliacaoItemTpLancIni,0)},c2v:function(){gx.O.A1974ConciliacaoItemTpLancIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMTPLANCINI",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemtplancfin,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMTPLANCFIN",gxz:"Z1975ConciliacaoItemTpLancFin",gxold:"O1975ConciliacaoItemTpLancFin",gxvar:"A1975ConciliacaoItemTpLancFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1975ConciliacaoItemTpLancFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1975ConciliacaoItemTpLancFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMTPLANCFIN",gx.O.A1975ConciliacaoItemTpLancFin,0)},c2v:function(){gx.O.A1975ConciliacaoItemTpLancFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMTPLANCFIN",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TABTIPOCONTA",grid:0};
   GXValidFnc[81]={fld:"TIPOCONTA", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemtpcontaini,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMTPCONTAINI",gxz:"Z1503ConciliacaoItemTpContaIni",gxold:"O1503ConciliacaoItemTpContaIni",gxvar:"A1503ConciliacaoItemTpContaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1503ConciliacaoItemTpContaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1503ConciliacaoItemTpContaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMTPCONTAINI",gx.O.A1503ConciliacaoItemTpContaIni,0)},c2v:function(){gx.O.A1503ConciliacaoItemTpContaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMTPCONTAINI",'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemtpcontafin,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMTPCONTAFIN",gxz:"Z1504ConciliacaoItemTpContaFin",gxold:"O1504ConciliacaoItemTpContaFin",gxvar:"A1504ConciliacaoItemTpContaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1504ConciliacaoItemTpContaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1504ConciliacaoItemTpContaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMTPCONTAFIN",gx.O.A1504ConciliacaoItemTpContaFin,0)},c2v:function(){gx.O.A1504ConciliacaoItemTpContaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMTPCONTAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TABTIPOCOBRANCA",grid:0};
   GXValidFnc[89]={fld:"TIPOCOBRANCA", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemtpcobini,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMTPCOBINI",gxz:"Z1505ConciliacaoItemTpCobIni",gxold:"O1505ConciliacaoItemTpCobIni",gxvar:"A1505ConciliacaoItemTpCobIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1505ConciliacaoItemTpCobIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1505ConciliacaoItemTpCobIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMTPCOBINI",gx.O.A1505ConciliacaoItemTpCobIni,0)},c2v:function(){gx.O.A1505ConciliacaoItemTpCobIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMTPCOBINI",'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemtpcobfin,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMTPCOBFIN",gxz:"Z1506ConciliacaoItemTpCobFin",gxold:"O1506ConciliacaoItemTpCobFin",gxvar:"A1506ConciliacaoItemTpCobFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1506ConciliacaoItemTpCobFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1506ConciliacaoItemTpCobFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMTPCOBFIN",gx.O.A1506ConciliacaoItemTpCobFin,0)},c2v:function(){gx.O.A1506ConciliacaoItemTpCobFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMTPCOBFIN",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TABESPECIE",grid:0};
   GXValidFnc[97]={fld:"ESPECIE", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemespini,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMESPINI",gxz:"Z1507ConciliacaoItemEspIni",gxold:"O1507ConciliacaoItemEspIni",gxvar:"A1507ConciliacaoItemEspIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1507ConciliacaoItemEspIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1507ConciliacaoItemEspIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMESPINI",gx.O.A1507ConciliacaoItemEspIni,0)},c2v:function(){gx.O.A1507ConciliacaoItemEspIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMESPINI",'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemespfin,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMESPFIN",gxz:"Z1508ConciliacaoItemEspFin",gxold:"O1508ConciliacaoItemEspFin",gxvar:"A1508ConciliacaoItemEspFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1508ConciliacaoItemEspFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1508ConciliacaoItemEspFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMESPFIN",gx.O.A1508ConciliacaoItemEspFin,0)},c2v:function(){gx.O.A1508ConciliacaoItemEspFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMESPFIN",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TABCENTROCUSTO",grid:0};
   GXValidFnc[105]={fld:"CENTRODECUSTO", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemccustoini,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMCCUSTOINI",gxz:"Z1509ConciliacaoItemCCustoIni",gxold:"O1509ConciliacaoItemCCustoIni",gxvar:"A1509ConciliacaoItemCCustoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1509ConciliacaoItemCCustoIni=Value},v2z:function(Value){gx.O.Z1509ConciliacaoItemCCustoIni=Value},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMCCUSTOINI",gx.O.A1509ConciliacaoItemCCustoIni,0)},c2v:function(){gx.O.A1509ConciliacaoItemCCustoIni=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMCCUSTOINI")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemccustofin,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMCCUSTOFIN",gxz:"Z1510ConciliacaoItemCCustoFin",gxold:"O1510ConciliacaoItemCCustoFin",gxvar:"A1510ConciliacaoItemCCustoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1510ConciliacaoItemCCustoFin=Value},v2z:function(Value){gx.O.Z1510ConciliacaoItemCCustoFin=Value},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMCCUSTOFIN",gx.O.A1510ConciliacaoItemCCustoFin,0)},c2v:function(){gx.O.A1510ConciliacaoItemCCustoFin=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMCCUSTOFIN")},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TABHISTORICOCAIXABANCO",grid:0};
   GXValidFnc[113]={fld:"HISTORICOCAIXABANCO", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemhiscxabcoini,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMHISCXABCOINI",gxz:"Z1976ConciliacaoItemHisCxaBcoIni",gxold:"O1976ConciliacaoItemHisCxaBcoIni",gxvar:"A1976ConciliacaoItemHisCxaBcoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1976ConciliacaoItemHisCxaBcoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1976ConciliacaoItemHisCxaBcoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMHISCXABCOINI",gx.O.A1976ConciliacaoItemHisCxaBcoIni,0)},c2v:function(){gx.O.A1976ConciliacaoItemHisCxaBcoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMHISCXABCOINI",'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemhiscxabcofin,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMHISCXABCOFIN",gxz:"Z1977ConciliacaoItemHisCxaBcoFin",gxold:"O1977ConciliacaoItemHisCxaBcoFin",gxvar:"A1977ConciliacaoItemHisCxaBcoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1977ConciliacaoItemHisCxaBcoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1977ConciliacaoItemHisCxaBcoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMHISCXABCOFIN",gx.O.A1977ConciliacaoItemHisCxaBcoFin,0)},c2v:function(){gx.O.A1977ConciliacaoItemHisCxaBcoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMHISCXABCOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[118]={fld:"TABCAIXABANCO",grid:0};
   GXValidFnc[121]={fld:"CAIXABANCO", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemcaibanini,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMCAIBANINI",gxz:"Z1519ConciliacaoItemCaiBanIni",gxold:"O1519ConciliacaoItemCaiBanIni",gxvar:"A1519ConciliacaoItemCaiBanIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1519ConciliacaoItemCaiBanIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1519ConciliacaoItemCaiBanIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMCAIBANINI",gx.O.A1519ConciliacaoItemCaiBanIni,0)},c2v:function(){gx.O.A1519ConciliacaoItemCaiBanIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMCAIBANINI",'.')},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemcaibaifin,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMCAIBAIFIN",gxz:"Z1520ConciliacaoItemCaiBaiFin",gxold:"O1520ConciliacaoItemCaiBaiFin",gxvar:"A1520ConciliacaoItemCaiBaiFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1520ConciliacaoItemCaiBaiFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1520ConciliacaoItemCaiBaiFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMCAIBAIFIN",gx.O.A1520ConciliacaoItemCaiBaiFin,0)},c2v:function(){gx.O.A1520ConciliacaoItemCaiBaiFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONCILIACAOITEMCAIBAIFIN",'.')},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TABCONTACONTABIL",grid:0};
   GXValidFnc[132]={fld:"CONTACONTABIL", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemccontabilid,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMCCONTABILID",gxz:"Z1512ConciliacaoItemCContabilId",gxold:"O1512ConciliacaoItemCContabilId",gxvar:"A1512ConciliacaoItemCContabilId",ucs:[],op:[136],ip:[136,134],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1512ConciliacaoItemCContabilId=Value},v2z:function(Value){gx.O.Z1512ConciliacaoItemCContabilId=Value},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMCCONTABILID",gx.O.A1512ConciliacaoItemCContabilId,0)},c2v:function(){gx.O.A1512ConciliacaoItemCContabilId=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMCCONTABILID")},nac:gx.falseFn};
   GXValidFnc[135]={fld:"PROMPTCCONTABIL",grid:0};
   GXValidFnc[136]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMCCONTABILNOME",gxz:"Z1513ConciliacaoItemCContabilNome",gxold:"O1513ConciliacaoItemCContabilNome",gxvar:"A1513ConciliacaoItemCContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1513ConciliacaoItemCContabilNome=Value},v2z:function(Value){gx.O.Z1513ConciliacaoItemCContabilNome=Value},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMCCONTABILNOME",gx.O.A1513ConciliacaoItemCContabilNome,0)},c2v:function(){gx.O.A1513ConciliacaoItemCContabilNome=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMCCONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[137]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADCONTA",gxz:"ZV33TradConta",gxold:"OV33TradConta",gxvar:"AV33TradConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33TradConta=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33TradConta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADCONTA",gx.O.AV33TradConta,0)},c2v:function(){gx.O.AV33TradConta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADCONTA",'.')},nac:gx.falseFn};
   GXValidFnc[138]={fld:"TABCLIENTE",grid:0};
   GXValidFnc[144]={fld:"SITUACAOCLIENTEFORNECEDOR", format:0,grid:0};
   GXValidFnc[146]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemsituacaoclifor,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMSITUACAOCLIFOR",gxz:"Z1521ConciliacaoItemSituacaoCliFor",gxold:"O1521ConciliacaoItemSituacaoCliFor",gxvar:"A1521ConciliacaoItemSituacaoCliFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1521ConciliacaoItemSituacaoCliFor=Value},v2z:function(Value){gx.O.Z1521ConciliacaoItemSituacaoCliFor=Value},v2c:function(){gx.fn.setComboBoxValue("CONCILIACAOITEMSITUACAOCLIFOR",gx.O.A1521ConciliacaoItemSituacaoCliFor)},c2v:function(){gx.O.A1521ConciliacaoItemSituacaoCliFor=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMSITUACAOCLIFOR")},nac:gx.falseFn};
   GXValidFnc[149]={fld:"CONTACLIENTE", format:0,grid:0};
   GXValidFnc[151]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conciliacaoitemcontacliid,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMCONTACLIID",gxz:"Z1523ConciliacaoItemContaCliId",gxold:"O1523ConciliacaoItemContaCliId",gxvar:"A1523ConciliacaoItemContaCliId",ucs:[],op:[152],ip:[152,134,125,123,117,115,109,107,101,99,93,91,85,83,77,75,69,67,29,151],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1523ConciliacaoItemContaCliId=Value},v2z:function(Value){gx.O.Z1523ConciliacaoItemContaCliId=Value},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMCONTACLIID",gx.O.A1523ConciliacaoItemContaCliId,0)},c2v:function(){gx.O.A1523ConciliacaoItemContaCliId=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMCONTACLIID")},nac:gx.falseFn};
   GXValidFnc[152]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMCONTACLINOME",gxz:"Z1524ConciliacaoItemContaCliNome",gxold:"O1524ConciliacaoItemContaCliNome",gxvar:"A1524ConciliacaoItemContaCliNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1524ConciliacaoItemContaCliNome=Value},v2z:function(Value){gx.O.Z1524ConciliacaoItemContaCliNome=Value},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMCONTACLINOME",gx.O.A1524ConciliacaoItemContaCliNome,0)},c2v:function(){gx.O.A1524ConciliacaoItemContaCliNome=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMCONTACLINOME")},nac:gx.falseFn};
   GXValidFnc[153]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADCLI",gxz:"ZV34TradCli",gxold:"OV34TradCli",gxvar:"AV34TradCli",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TradCli=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34TradCli=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADCLI",gx.O.AV34TradCli,0)},c2v:function(){gx.O.AV34TradCli=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADCLI",'.')},nac:gx.falseFn};
   GXValidFnc[156]={fld:"TABLE3",grid:0};
   GXValidFnc[159]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[161]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMUSUARIOALT",gxz:"Z1525ConciliacaoItemUsuarioAlt",gxold:"O1525ConciliacaoItemUsuarioAlt",gxvar:"A1525ConciliacaoItemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1525ConciliacaoItemUsuarioAlt=Value},v2z:function(Value){gx.O.Z1525ConciliacaoItemUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMUSUARIOALT",gx.O.A1525ConciliacaoItemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1525ConciliacaoItemUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONCILIACAOITEMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 161 , function() {
   });
   GXValidFnc[163]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMDATAHORAALT",gxz:"Z1526ConciliacaoItemDataHoraAlt",gxold:"O1526ConciliacaoItemDataHoraAlt",gxvar:"A1526ConciliacaoItemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1526ConciliacaoItemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1526ConciliacaoItemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONCILIACAOITEMDATAHORAALT",gx.O.A1526ConciliacaoItemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1526ConciliacaoItemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONCILIACAOITEMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 163 , function() {
   });
   GXValidFnc[172]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV26ChamaOnBlurMascara",gxold:"OV26ChamaOnBlurMascara",gxvar:"AV26ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV26ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV26ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV26ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[173]={fld:"JS", format:2,grid:0};
   GXValidFnc[174]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV42AcessoSistemaSequencia",gxold:"OV42AcessoSistemaSequencia",gxvar:"AV42AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV42AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV42AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[176]={fld:"BTNHELP",grid:0};
   GXValidFnc[179]={fld:"PROMPT_1501",grid:188};
   GXValidFnc[180]={fld:"PROMPT_1502",grid:188};
   GXValidFnc[181]={fld:"PROMPT_1974",grid:188};
   GXValidFnc[182]={fld:"PROMPT_1975",grid:188};
   GXValidFnc[183]={fld:"PROMPT_1503",grid:188};
   GXValidFnc[184]={fld:"PROMPT_1504",grid:188};
   GXValidFnc[185]={fld:"PROMPT_1505",grid:188};
   GXValidFnc[186]={fld:"PROMPT_1506",grid:188};
   GXValidFnc[187]={fld:"PROMPT_1507",grid:188};
   GXValidFnc[188]={fld:"PROMPT_1508",grid:188};
   GXValidFnc[189]={fld:"PROMPT_1509",grid:188};
   GXValidFnc[190]={fld:"PROMPT_1510",grid:188};
   GXValidFnc[191]={fld:"PROMPT_1976",grid:188};
   GXValidFnc[192]={fld:"PROMPT_1977",grid:188};
   GXValidFnc[193]={fld:"PROMPT_1519",grid:188};
   GXValidFnc[194]={fld:"PROMPT_1520",grid:188};
   GXValidFnc[195]={fld:"PROMPT_1523",grid:188};
   this.A1498ConciliacaoId = 0 ;
   this.Z1498ConciliacaoId = 0 ;
   this.O1498ConciliacaoId = 0 ;
   this.AV35ConciliacaoDescricao = "" ;
   this.ZV35ConciliacaoDescricao = "" ;
   this.OV35ConciliacaoDescricao = "" ;
   this.A1527ConciliacaoItemSeq = 0 ;
   this.Z1527ConciliacaoItemSeq = 0 ;
   this.O1527ConciliacaoItemSeq = 0 ;
   this.A1814ConciliacaoItemTipoSelecao = "" ;
   this.Z1814ConciliacaoItemTipoSelecao = "" ;
   this.O1814ConciliacaoItemTipoSelecao = "" ;
   this.A1535ConciliacaoItemTipoPagRec = "" ;
   this.Z1535ConciliacaoItemTipoPagRec = "" ;
   this.O1535ConciliacaoItemTipoPagRec = "" ;
   this.A1516ConciliacaoItemSnCaixa = "" ;
   this.Z1516ConciliacaoItemSnCaixa = "" ;
   this.O1516ConciliacaoItemSnCaixa = "" ;
   this.A1517ConciliacaoItemSnBanco = "" ;
   this.Z1517ConciliacaoItemSnBanco = "" ;
   this.O1517ConciliacaoItemSnBanco = "" ;
   this.A1518ConciliacaoItemSnAplicacao = "" ;
   this.Z1518ConciliacaoItemSnAplicacao = "" ;
   this.O1518ConciliacaoItemSnAplicacao = "" ;
   this.A1501ConciliacaoItemFilIni = 0 ;
   this.Z1501ConciliacaoItemFilIni = 0 ;
   this.O1501ConciliacaoItemFilIni = 0 ;
   this.A1502ConciliacaoItemFilFin = 0 ;
   this.Z1502ConciliacaoItemFilFin = 0 ;
   this.O1502ConciliacaoItemFilFin = 0 ;
   this.A1974ConciliacaoItemTpLancIni = 0 ;
   this.Z1974ConciliacaoItemTpLancIni = 0 ;
   this.O1974ConciliacaoItemTpLancIni = 0 ;
   this.A1975ConciliacaoItemTpLancFin = 0 ;
   this.Z1975ConciliacaoItemTpLancFin = 0 ;
   this.O1975ConciliacaoItemTpLancFin = 0 ;
   this.A1503ConciliacaoItemTpContaIni = 0 ;
   this.Z1503ConciliacaoItemTpContaIni = 0 ;
   this.O1503ConciliacaoItemTpContaIni = 0 ;
   this.A1504ConciliacaoItemTpContaFin = 0 ;
   this.Z1504ConciliacaoItemTpContaFin = 0 ;
   this.O1504ConciliacaoItemTpContaFin = 0 ;
   this.A1505ConciliacaoItemTpCobIni = 0 ;
   this.Z1505ConciliacaoItemTpCobIni = 0 ;
   this.O1505ConciliacaoItemTpCobIni = 0 ;
   this.A1506ConciliacaoItemTpCobFin = 0 ;
   this.Z1506ConciliacaoItemTpCobFin = 0 ;
   this.O1506ConciliacaoItemTpCobFin = 0 ;
   this.A1507ConciliacaoItemEspIni = 0 ;
   this.Z1507ConciliacaoItemEspIni = 0 ;
   this.O1507ConciliacaoItemEspIni = 0 ;
   this.A1508ConciliacaoItemEspFin = 0 ;
   this.Z1508ConciliacaoItemEspFin = 0 ;
   this.O1508ConciliacaoItemEspFin = 0 ;
   this.A1509ConciliacaoItemCCustoIni = "" ;
   this.Z1509ConciliacaoItemCCustoIni = "" ;
   this.O1509ConciliacaoItemCCustoIni = "" ;
   this.A1510ConciliacaoItemCCustoFin = "" ;
   this.Z1510ConciliacaoItemCCustoFin = "" ;
   this.O1510ConciliacaoItemCCustoFin = "" ;
   this.A1976ConciliacaoItemHisCxaBcoIni = 0 ;
   this.Z1976ConciliacaoItemHisCxaBcoIni = 0 ;
   this.O1976ConciliacaoItemHisCxaBcoIni = 0 ;
   this.A1977ConciliacaoItemHisCxaBcoFin = 0 ;
   this.Z1977ConciliacaoItemHisCxaBcoFin = 0 ;
   this.O1977ConciliacaoItemHisCxaBcoFin = 0 ;
   this.A1519ConciliacaoItemCaiBanIni = 0 ;
   this.Z1519ConciliacaoItemCaiBanIni = 0 ;
   this.O1519ConciliacaoItemCaiBanIni = 0 ;
   this.A1520ConciliacaoItemCaiBaiFin = 0 ;
   this.Z1520ConciliacaoItemCaiBaiFin = 0 ;
   this.O1520ConciliacaoItemCaiBaiFin = 0 ;
   this.A1512ConciliacaoItemCContabilId = "" ;
   this.Z1512ConciliacaoItemCContabilId = "" ;
   this.O1512ConciliacaoItemCContabilId = "" ;
   this.A1513ConciliacaoItemCContabilNome = "" ;
   this.Z1513ConciliacaoItemCContabilNome = "" ;
   this.O1513ConciliacaoItemCContabilNome = "" ;
   this.AV33TradConta = 0 ;
   this.ZV33TradConta = 0 ;
   this.OV33TradConta = 0 ;
   this.A1521ConciliacaoItemSituacaoCliFor = "" ;
   this.Z1521ConciliacaoItemSituacaoCliFor = "" ;
   this.O1521ConciliacaoItemSituacaoCliFor = "" ;
   this.A1523ConciliacaoItemContaCliId = "" ;
   this.Z1523ConciliacaoItemContaCliId = "" ;
   this.O1523ConciliacaoItemContaCliId = "" ;
   this.A1524ConciliacaoItemContaCliNome = "" ;
   this.Z1524ConciliacaoItemContaCliNome = "" ;
   this.O1524ConciliacaoItemContaCliNome = "" ;
   this.AV34TradCli = 0 ;
   this.ZV34TradCli = 0 ;
   this.OV34TradCli = 0 ;
   this.A1525ConciliacaoItemUsuarioAlt = "" ;
   this.Z1525ConciliacaoItemUsuarioAlt = "" ;
   this.O1525ConciliacaoItemUsuarioAlt = "" ;
   this.A1526ConciliacaoItemDataHoraAlt = gx.date.nullDate() ;
   this.Z1526ConciliacaoItemDataHoraAlt = gx.date.nullDate() ;
   this.O1526ConciliacaoItemDataHoraAlt = gx.date.nullDate() ;
   this.AV26ChamaOnBlurMascara = "" ;
   this.ZV26ChamaOnBlurMascara = "" ;
   this.OV26ChamaOnBlurMascara = "" ;
   this.AV42AcessoSistemaSequencia = 0 ;
   this.ZV42AcessoSistemaSequencia = 0 ;
   this.OV42AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV16Sistema = "" ;
   this.AV52Pgmname = "" ;
   this.AV53Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV42AcessoSistemaSequencia = 0 ;
   this.AV25Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV23ConciliacaoItemCContabilEmpId = "" ;
   this.AV22ConciliacaoItemContaCliEmpId = "" ;
   this.AV26ChamaOnBlurMascara = "" ;
   this.AV27TemMascara = "" ;
   this.AV28EstruturaContaInicial = "" ;
   this.AV31Entrada0 = [ ] ;
   this.AV32Saida0 = [ ] ;
   this.AV29Entrada1 = [ ] ;
   this.AV30Saida1 = [ ] ;
   this.AV36TemMascara2 = "" ;
   this.AV19ConciliacaoEmpresaId = "" ;
   this.AV20ConciliacaoId = 0 ;
   this.AV38TipoComparacao = "" ;
   this.AV39Habilita = 0 ;
   this.AV24snAlterou = "" ;
   this.AV40snAnalitica = "" ;
   this.AV41snAnalitica2 = "" ;
   this.AV10ret = 0 ;
   this.AV35ConciliacaoDescricao = "" ;
   this.AV18ConciliacaoItemTipoSelecao = "" ;
   this.AV21ConciliacaoItemSeq = 0 ;
   this.A1497ConciliacaoEmpresaId = "" ;
   this.A1498ConciliacaoId = 0 ;
   this.A1814ConciliacaoItemTipoSelecao = "" ;
   this.A1527ConciliacaoItemSeq = 0 ;
   this.A1511ConciliacaoItemCContabilEmpId = "" ;
   this.A1522ConciliacaoItemContaCliEmpId = "" ;
   this.A1525ConciliacaoItemUsuarioAlt = "" ;
   this.A1526ConciliacaoItemDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A1535ConciliacaoItemTipoPagRec = "" ;
   this.A1516ConciliacaoItemSnCaixa = "" ;
   this.A1517ConciliacaoItemSnBanco = "" ;
   this.A1518ConciliacaoItemSnAplicacao = "" ;
   this.A1501ConciliacaoItemFilIni = 0 ;
   this.A1502ConciliacaoItemFilFin = 0 ;
   this.A1974ConciliacaoItemTpLancIni = 0 ;
   this.A1975ConciliacaoItemTpLancFin = 0 ;
   this.A1503ConciliacaoItemTpContaIni = 0 ;
   this.A1504ConciliacaoItemTpContaFin = 0 ;
   this.A1505ConciliacaoItemTpCobIni = 0 ;
   this.A1506ConciliacaoItemTpCobFin = 0 ;
   this.A1507ConciliacaoItemEspIni = 0 ;
   this.A1508ConciliacaoItemEspFin = 0 ;
   this.A1509ConciliacaoItemCCustoIni = "" ;
   this.A1510ConciliacaoItemCCustoFin = "" ;
   this.A1976ConciliacaoItemHisCxaBcoIni = 0 ;
   this.A1977ConciliacaoItemHisCxaBcoFin = 0 ;
   this.A1519ConciliacaoItemCaiBanIni = 0 ;
   this.A1520ConciliacaoItemCaiBaiFin = 0 ;
   this.A1512ConciliacaoItemCContabilId = "" ;
   this.A1513ConciliacaoItemCContabilNome = "" ;
   this.A1521ConciliacaoItemSituacaoCliFor = "" ;
   this.A1523ConciliacaoItemContaCliId = "" ;
   this.A1524ConciliacaoItemContaCliNome = "" ;
   this.AV48Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12302_client": ["'FECHAR'", true] ,"e13302_client": ["AFTER TRN", true] ,"e14302_client": ["CONCILIACAOITEMTIPOSELECAO.CLICK", true] ,"e1530188_client": ["ENTER", true] ,"e1630188_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19ConciliacaoEmpresaId',fld:'vCONCILIACAOEMPRESAID'},{av:'AV20ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV35ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV18ConciliacaoItemTipoSelecao',fld:'vCONCILIACAOITEMTIPOSELECAO'},{av:'AV21ConciliacaoItemSeq',fld:'vCONCILIACAOITEMSEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV19ConciliacaoEmpresaId',fld:'vCONCILIACAOEMPRESAID'},{av:'AV20ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV35ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'}],[{av:'AV35ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV20ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV19ConciliacaoEmpresaId',fld:'vCONCILIACAOEMPRESAID'},{av:'AV37ModoTela',fld:'vMODOTELA'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV42AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV48Tab',fld:'vTAB'}]];
   this.EvtParms["CONCILIACAOITEMTIPOSELECAO.CLICK"] = [[{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'AV38TipoComparacao',fld:'vTIPOCOMPARACAO'},{av:'Gx_mode',fld:'vMODE'},{av:'AV18ConciliacaoItemTipoSelecao',fld:'vCONCILIACAOITEMTIPOSELECAO'}],[{av:'AV37ModoTela',fld:'vMODOTELA'},{av:'gx.fn.getCtrlProperty("TABTIPOPAGARRECEBER","Visible")',ctrl:'TABTIPOPAGARRECEBER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCONCILIAR","Visible")',ctrl:'TABCONCILIAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABINCIOFINAL","Visible")',ctrl:'TABINCIOFINAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABFILIAL","Visible")',ctrl:'TABFILIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTIPOLANCAMENTO","Visible")',ctrl:'TABTIPOLANCAMENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTIPOCONTA","Visible")',ctrl:'TABTIPOCONTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTIPOCOBRANCA","Visible")',ctrl:'TABTIPOCOBRANCA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABESPECIE","Visible")',ctrl:'TABESPECIE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCENTROCUSTO","Visible")',ctrl:'TABCENTROCUSTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABHISTORICOCAIXABANCO","Visible")',ctrl:'TABHISTORICOCAIXABANCO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCAIXABANCO","Visible")',ctrl:'TABCAIXABANCO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCLIENTE","Visible")',ctrl:'TABCLIENTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABCONTACONTABIL","Visible")',ctrl:'TABCONTACONTABIL',prop:'Visible'},{av:'AV39Habilita',fld:'vHABILITA'},{av:'AV48Tab',fld:'vTAB'}]];
   this.setPrompt("PROMPTCCONTABIL", [134]);
   this.setPrompt("PROMPT_1501", [67]);
   this.setPrompt("PROMPT_1502", [69]);
   this.setPrompt("PROMPT_1974", [75]);
   this.setPrompt("PROMPT_1975", [77]);
   this.setPrompt("PROMPT_1503", [83]);
   this.setPrompt("PROMPT_1504", [85]);
   this.setPrompt("PROMPT_1505", [91]);
   this.setPrompt("PROMPT_1506", [93]);
   this.setPrompt("PROMPT_1507", [99]);
   this.setPrompt("PROMPT_1508", [101]);
   this.setPrompt("PROMPT_1509", [107]);
   this.setPrompt("PROMPT_1510", [109]);
   this.setPrompt("PROMPT_1976", [115]);
   this.setPrompt("PROMPT_1977", [117]);
   this.setPrompt("PROMPT_1519", [123]);
   this.setPrompt("PROMPT_1520", [125]);
   this.setPrompt("PROMPT_1523", [151]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ConciliacaoItemTipoSelecao", "vCONCILIACAOITEMTIPOSELECAO", 0, "char");
   this.setVCMap("AV19ConciliacaoEmpresaId", "vCONCILIACAOEMPRESAID", 0, "char");
   this.setVCMap("A1497ConciliacaoEmpresaId", "CONCILIACAOEMPRESAID", 0, "char");
   this.setVCMap("AV20ConciliacaoId", "vCONCILIACAOID", 0, "int");
   this.setVCMap("AV21ConciliacaoItemSeq", "vCONCILIACAOITEMSEQ", 0, "int");
   this.setVCMap("AV23ConciliacaoItemCContabilEmpId", "vCONCILIACAOITEMCCONTABILEMPID", 0, "char");
   this.setVCMap("A1511ConciliacaoItemCContabilEmpId", "CONCILIACAOITEMCCONTABILEMPID", 0, "char");
   this.setVCMap("AV22ConciliacaoItemContaCliEmpId", "vCONCILIACAOITEMCONTACLIEMPID", 0, "char");
   this.setVCMap("A1522ConciliacaoItemContaCliEmpId", "CONCILIACAOITEMCONTACLIEMPID", 0, "char");
   this.setVCMap("AV38TipoComparacao", "vTIPOCOMPARACAO", 0, "char");
   this.setVCMap("AV40snAnalitica", "vSNANALITICA", 0, "char");
   this.setVCMap("AV41snAnalitica2", "vSNANALITICA2", 0, "char");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV24snAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV53Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV52Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 188 ]= ["O1518ConciliacaoItemSnAplicacao","O1517ConciliacaoItemSnBanco","O1516ConciliacaoItemSnCaixa","O1535ConciliacaoItemTipoPagRec","O1523ConciliacaoItemContaCliId","O1521ConciliacaoItemSituacaoCliFor","O1520ConciliacaoItemCaiBaiFin","O1519ConciliacaoItemCaiBanIni","O1512ConciliacaoItemCContabilId","O1510ConciliacaoItemCCustoFin","O1509ConciliacaoItemCCustoIni","O1508ConciliacaoItemEspFin","O1507ConciliacaoItemEspIni","O1506ConciliacaoItemTpCobFin","O1505ConciliacaoItemTpCobIni","O1504ConciliacaoItemTpContaFin","O1503ConciliacaoItemTpContaIni","O1502ConciliacaoItemFilFin","O1501ConciliacaoItemFilIni"] ;
});
gx.setParentObj(new tconciliacaoitem());
