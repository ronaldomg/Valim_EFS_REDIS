/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:27:40.45
*/
gx.evt.autoSkip = false;
gx.define('tpermissaousucxaconta', false, function () {
   this.ServerClass =  "tpermissaousucxaconta" ;
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
      this.AV19PermissaoUsuCxaContaUsuarioId=gx.fn.getControlValue("vPERMISSAOUSUCXACONTAUSUARIOID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1076PermissaoUsuCxaContaEmpresaId=gx.fn.getControlValue("PERMISSAOUSUCXACONTAEMPRESAID") ;
      this.AV20snAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22UsuarioNome=gx.fn.getControlValue("vUSUARIONOME") ;
      this.AV21snExiste=gx.fn.getControlValue("vSNEXISTE") ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Permissaousucxacontausuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTAUSUARIOID");
         this.AnyError  = 0;
         if ( (""==this.A1771PermissaoUsuCxaContaUsuarioId) )
         {
            try {
               gxballoon.setError("Informe Usuário");
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
   this.Valid_Permissaousucxacontalibcxabco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTALIBCXABCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontaperbaipag=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTAPERBAIPAG");
         this.AnyError  = 0;
         if ( ! ( this.A1740PermissaoUsuCxaContaPerBaiPag == "0" || this.A1740PermissaoUsuCxaContaPerBaiPag == "1" || this.A1740PermissaoUsuCxaContaPerBaiPag == "2" || this.A1740PermissaoUsuCxaContaPerBaiPag == "3" ) )
         {
            try {
               gxballoon.setError("Campo Tipo Permissão Contas Pagar fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A1740PermissaoUsuCxaContaPerBaiPag == "0" )
         {
            try {
               gxballoon.setError("Informe Tipo Permissão Contas a Pagar");
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
   this.Valid_Permissaousucxacontaperbairec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTAPERBAIREC");
         this.AnyError  = 0;
         if ( ! ( this.A1751PermissaoUsuCxaContaPerBaiRec == "0" || this.A1751PermissaoUsuCxaContaPerBaiRec == "1" || this.A1751PermissaoUsuCxaContaPerBaiRec == "2" || this.A1751PermissaoUsuCxaContaPerBaiRec == "3" ) )
         {
            try {
               gxballoon.setError("Campo Tipo Permissão Contas Receber fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A1751PermissaoUsuCxaContaPerBaiRec == "0" )
         {
            try {
               gxballoon.setError("Informe Tipo Permissão Contas a receber");
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
   this.Valid_Permissaousucxacontasnaltcpag=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNALTCPAG");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontasnaltcrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNALTCREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontasnexccpag=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNEXCCPAG");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontasnexccrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNEXCCREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontasnconpag=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNCONPAG");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontasnconrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNCONREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontasnaltpag=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNALTPAG");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontasnaltrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNALTREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontasnincpag=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNINCPAG");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontasnincrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNINCREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontasnexcpag=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNEXCPAG");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontaexcrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTAEXCREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontaaltdtbaipa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTAALTDTBAIPA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontaaltdtbaire=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTAALTDTBAIRE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontasnacepag=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNACEPAG");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaousucxacontasnacerec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOUSUCXACONTASNACEREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122k2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132k2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142k184_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152k184_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,20,24,28,32,41,43,46,48,50,54,56,60,62,66,68,72,74,78,80,84,86,90,92,96,98,102,104,108,110,113,116,118,120,129,131,133];
   this.GXLastCtrlId =133;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontausuarioid,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUARIOID",gxz:"Z1771PermissaoUsuCxaContaUsuarioId",gxold:"O1771PermissaoUsuCxaContaUsuarioId",gxvar:"A1771PermissaoUsuCxaContaUsuarioId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1771PermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.Z1771PermissaoUsuCxaContaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOUSUCXACONTAUSUARIOID",gx.O.A1771PermissaoUsuCxaContaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1771PermissaoUsuCxaContaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTAUSUARIOID")},nac:function(){return !(""==this.AV19PermissaoUsuCxaContaUsuarioId)}};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUALTCBC",gxz:"Z2492PermissaoUsuCxaContaUsuAltCbc",gxold:"O2492PermissaoUsuCxaContaUsuAltCbc",gxvar:"A2492PermissaoUsuCxaContaUsuAltCbc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2492PermissaoUsuCxaContaUsuAltCbc=Value},v2z:function(Value){gx.O.Z2492PermissaoUsuCxaContaUsuAltCbc=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTAUSUALTCBC",gx.O.A2492PermissaoUsuCxaContaUsuAltCbc,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2492PermissaoUsuCxaContaUsuAltCbc=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTAUSUALTCBC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUALTCPR",gxz:"Z2493PermissaoUsuCxaContaUsuAltCpr",gxold:"O2493PermissaoUsuCxaContaUsuAltCpr",gxvar:"A2493PermissaoUsuCxaContaUsuAltCpr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2493PermissaoUsuCxaContaUsuAltCpr=Value},v2z:function(Value){gx.O.Z2493PermissaoUsuCxaContaUsuAltCpr=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTAUSUALTCPR",gx.O.A2493PermissaoUsuCxaContaUsuAltCpr,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2493PermissaoUsuCxaContaUsuAltCpr=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTAUSUALTCPR")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUALTCBL",gxz:"Z2491PermissaoUsuCxaContaUsuAltCbl",gxold:"O2491PermissaoUsuCxaContaUsuAltCbl",gxvar:"A2491PermissaoUsuCxaContaUsuAltCbl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2491PermissaoUsuCxaContaUsuAltCbl=Value},v2z:function(Value){gx.O.Z2491PermissaoUsuCxaContaUsuAltCbl=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTAUSUALTCBL",gx.O.A2491PermissaoUsuCxaContaUsuAltCbl,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2491PermissaoUsuCxaContaUsuAltCbl=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTAUSUALTCBL")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontalibcxabco,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTALIBCXABCO",gxz:"Z1750PermissaoUsuCxaContaLibCxaBco",gxold:"O1750PermissaoUsuCxaContaLibCxaBco",gxvar:"A1750PermissaoUsuCxaContaLibCxaBco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1750PermissaoUsuCxaContaLibCxaBco=Value},v2z:function(Value){gx.O.Z1750PermissaoUsuCxaContaLibCxaBco=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTALIBCXABCO",gx.O.A1750PermissaoUsuCxaContaLibCxaBco,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1750PermissaoUsuCxaContaLibCxaBco=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTALIBCXABCO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[41]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontaperbaipag,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAPERBAIPAG",gxz:"Z1740PermissaoUsuCxaContaPerBaiPag",gxold:"O1740PermissaoUsuCxaContaPerBaiPag",gxvar:"A1740PermissaoUsuCxaContaPerBaiPag",ucs:[],op:[48],ip:[48],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1740PermissaoUsuCxaContaPerBaiPag=Value},v2z:function(Value){gx.O.Z1740PermissaoUsuCxaContaPerBaiPag=Value},v2c:function(){gx.fn.setComboBoxValue("PERMISSAOUSUCXACONTAPERBAIPAG",gx.O.A1740PermissaoUsuCxaContaPerBaiPag);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1740PermissaoUsuCxaContaPerBaiPag=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTAPERBAIPAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontaperbairec,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAPERBAIREC",gxz:"Z1751PermissaoUsuCxaContaPerBaiRec",gxold:"O1751PermissaoUsuCxaContaPerBaiRec",gxvar:"A1751PermissaoUsuCxaContaPerBaiRec",ucs:[],op:[50],ip:[50],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1751PermissaoUsuCxaContaPerBaiRec=Value},v2z:function(Value){gx.O.Z1751PermissaoUsuCxaContaPerBaiRec=Value},v2c:function(){gx.fn.setComboBoxValue("PERMISSAOUSUCXACONTAPERBAIREC",gx.O.A1751PermissaoUsuCxaContaPerBaiRec);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1751PermissaoUsuCxaContaPerBaiRec=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTAPERBAIREC")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnaltcpag,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNALTCPAG",gxz:"Z10698PermissaoUsuCxaContaSnAltCPag",gxold:"O10698PermissaoUsuCxaContaSnAltCPag",gxvar:"A10698PermissaoUsuCxaContaSnAltCPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10698PermissaoUsuCxaContaSnAltCPag=Value},v2z:function(Value){gx.O.Z10698PermissaoUsuCxaContaSnAltCPag=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNALTCPAG",gx.O.A10698PermissaoUsuCxaContaSnAltCPag,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10698PermissaoUsuCxaContaSnAltCPag=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNALTCPAG")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnaltcrec,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNALTCREC",gxz:"Z10696PermissaoUsuCxaContaSnAltCRec",gxold:"O10696PermissaoUsuCxaContaSnAltCRec",gxvar:"A10696PermissaoUsuCxaContaSnAltCRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10696PermissaoUsuCxaContaSnAltCRec=Value},v2z:function(Value){gx.O.Z10696PermissaoUsuCxaContaSnAltCRec=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNALTCREC",gx.O.A10696PermissaoUsuCxaContaSnAltCRec,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10696PermissaoUsuCxaContaSnAltCRec=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNALTCREC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnexccpag,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNEXCCPAG",gxz:"Z10699PermissaoUsuCxaContaSnExcCPag",gxold:"O10699PermissaoUsuCxaContaSnExcCPag",gxvar:"A10699PermissaoUsuCxaContaSnExcCPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10699PermissaoUsuCxaContaSnExcCPag=Value},v2z:function(Value){gx.O.Z10699PermissaoUsuCxaContaSnExcCPag=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNEXCCPAG",gx.O.A10699PermissaoUsuCxaContaSnExcCPag,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10699PermissaoUsuCxaContaSnExcCPag=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNEXCCPAG")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[62]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnexccrec,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNEXCCREC",gxz:"Z10697PermissaoUsuCxaContaSnExcCRec",gxold:"O10697PermissaoUsuCxaContaSnExcCRec",gxvar:"A10697PermissaoUsuCxaContaSnExcCRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10697PermissaoUsuCxaContaSnExcCRec=Value},v2z:function(Value){gx.O.Z10697PermissaoUsuCxaContaSnExcCRec=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNEXCCREC",gx.O.A10697PermissaoUsuCxaContaSnExcCRec,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10697PermissaoUsuCxaContaSnExcCRec=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNEXCCREC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnconpag,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNCONPAG",gxz:"Z1742PermissaoUsuCxaContaSnConPag",gxold:"O1742PermissaoUsuCxaContaSnConPag",gxvar:"A1742PermissaoUsuCxaContaSnConPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1742PermissaoUsuCxaContaSnConPag=Value},v2z:function(Value){gx.O.Z1742PermissaoUsuCxaContaSnConPag=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNCONPAG",gx.O.A1742PermissaoUsuCxaContaSnConPag,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1742PermissaoUsuCxaContaSnConPag=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNCONPAG")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnconrec,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNCONREC",gxz:"Z1746PermissaoUsuCxaContaSnConRec",gxold:"O1746PermissaoUsuCxaContaSnConRec",gxvar:"A1746PermissaoUsuCxaContaSnConRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1746PermissaoUsuCxaContaSnConRec=Value},v2z:function(Value){gx.O.Z1746PermissaoUsuCxaContaSnConRec=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNCONREC",gx.O.A1746PermissaoUsuCxaContaSnConRec,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1746PermissaoUsuCxaContaSnConRec=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNCONREC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[72]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnaltpag,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNALTPAG",gxz:"Z1743PermissaoUsuCxaContaSnAltPag",gxold:"O1743PermissaoUsuCxaContaSnAltPag",gxvar:"A1743PermissaoUsuCxaContaSnAltPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1743PermissaoUsuCxaContaSnAltPag=Value},v2z:function(Value){gx.O.Z1743PermissaoUsuCxaContaSnAltPag=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNALTPAG",gx.O.A1743PermissaoUsuCxaContaSnAltPag,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1743PermissaoUsuCxaContaSnAltPag=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNALTPAG")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnaltrec,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNALTREC",gxz:"Z1747PermissaoUsuCxaContaSnAltRec",gxold:"O1747PermissaoUsuCxaContaSnAltRec",gxvar:"A1747PermissaoUsuCxaContaSnAltRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1747PermissaoUsuCxaContaSnAltRec=Value},v2z:function(Value){gx.O.Z1747PermissaoUsuCxaContaSnAltRec=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNALTREC",gx.O.A1747PermissaoUsuCxaContaSnAltRec,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1747PermissaoUsuCxaContaSnAltRec=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNALTREC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[78]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnincpag,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNINCPAG",gxz:"Z1744PermissaoUsuCxaContaSnIncPag",gxold:"O1744PermissaoUsuCxaContaSnIncPag",gxvar:"A1744PermissaoUsuCxaContaSnIncPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1744PermissaoUsuCxaContaSnIncPag=Value},v2z:function(Value){gx.O.Z1744PermissaoUsuCxaContaSnIncPag=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNINCPAG",gx.O.A1744PermissaoUsuCxaContaSnIncPag,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1744PermissaoUsuCxaContaSnIncPag=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNINCPAG")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[80]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnincrec,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNINCREC",gxz:"Z1748PermissaoUsuCxaContaSnIncRec",gxold:"O1748PermissaoUsuCxaContaSnIncRec",gxvar:"A1748PermissaoUsuCxaContaSnIncRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1748PermissaoUsuCxaContaSnIncRec=Value},v2z:function(Value){gx.O.Z1748PermissaoUsuCxaContaSnIncRec=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNINCREC",gx.O.A1748PermissaoUsuCxaContaSnIncRec,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1748PermissaoUsuCxaContaSnIncRec=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNINCREC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[84]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnexcpag,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNEXCPAG",gxz:"Z1745PermissaoUsuCxaContaSnExcPag",gxold:"O1745PermissaoUsuCxaContaSnExcPag",gxvar:"A1745PermissaoUsuCxaContaSnExcPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1745PermissaoUsuCxaContaSnExcPag=Value},v2z:function(Value){gx.O.Z1745PermissaoUsuCxaContaSnExcPag=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNEXCPAG",gx.O.A1745PermissaoUsuCxaContaSnExcPag,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1745PermissaoUsuCxaContaSnExcPag=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNEXCPAG")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 84 , function() {
   });
   GXValidFnc[86]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontaexcrec,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAEXCREC",gxz:"Z1749PermissaoUsuCxaContaExcRec",gxold:"O1749PermissaoUsuCxaContaExcRec",gxvar:"A1749PermissaoUsuCxaContaExcRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1749PermissaoUsuCxaContaExcRec=Value},v2z:function(Value){gx.O.Z1749PermissaoUsuCxaContaExcRec=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTAEXCREC",gx.O.A1749PermissaoUsuCxaContaExcRec,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1749PermissaoUsuCxaContaExcRec=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTAEXCREC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 86 , function() {
   });
   GXValidFnc[90]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontaaltdtbaipa,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAALTDTBAIPA",gxz:"Z1752PermissaoUsuCxaContaAltDtBaiPa",gxold:"O1752PermissaoUsuCxaContaAltDtBaiPa",gxvar:"A1752PermissaoUsuCxaContaAltDtBaiPa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1752PermissaoUsuCxaContaAltDtBaiPa=Value},v2z:function(Value){gx.O.Z1752PermissaoUsuCxaContaAltDtBaiPa=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTAALTDTBAIPA",gx.O.A1752PermissaoUsuCxaContaAltDtBaiPa,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1752PermissaoUsuCxaContaAltDtBaiPa=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTAALTDTBAIPA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[92]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontaaltdtbaire,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAALTDTBAIRE",gxz:"Z1753PermissaoUsuCxaContaAltDtBaiRe",gxold:"O1753PermissaoUsuCxaContaAltDtBaiRe",gxvar:"A1753PermissaoUsuCxaContaAltDtBaiRe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1753PermissaoUsuCxaContaAltDtBaiRe=Value},v2z:function(Value){gx.O.Z1753PermissaoUsuCxaContaAltDtBaiRe=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTAALTDTBAIRE",gx.O.A1753PermissaoUsuCxaContaAltDtBaiRe,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1753PermissaoUsuCxaContaAltDtBaiRe=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTAALTDTBAIRE")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 92 , function() {
   });
   GXValidFnc[96]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnacepag,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNACEPAG",gxz:"Z1876PermissaoUsuCxaContaSnAcePag",gxold:"O1876PermissaoUsuCxaContaSnAcePag",gxvar:"A1876PermissaoUsuCxaContaSnAcePag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1876PermissaoUsuCxaContaSnAcePag=Value},v2z:function(Value){gx.O.Z1876PermissaoUsuCxaContaSnAcePag=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNACEPAG",gx.O.A1876PermissaoUsuCxaContaSnAcePag,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1876PermissaoUsuCxaContaSnAcePag=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNACEPAG")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 96 , function() {
   });
   GXValidFnc[98]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousucxacontasnacerec,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNACEREC",gxz:"Z1877PermissaoUsuCxaContaSnAceRec",gxold:"O1877PermissaoUsuCxaContaSnAceRec",gxvar:"A1877PermissaoUsuCxaContaSnAceRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1877PermissaoUsuCxaContaSnAceRec=Value},v2z:function(Value){gx.O.Z1877PermissaoUsuCxaContaSnAceRec=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNACEREC",gx.O.A1877PermissaoUsuCxaContaSnAceRec,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1877PermissaoUsuCxaContaSnAceRec=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNACEREC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 98 , function() {
   });
   GXValidFnc[102]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNACRPAG",gxz:"Z2195PermissaoUsuCxaContaSnAcrPag",gxold:"O2195PermissaoUsuCxaContaSnAcrPag",gxvar:"A2195PermissaoUsuCxaContaSnAcrPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2195PermissaoUsuCxaContaSnAcrPag=Value},v2z:function(Value){gx.O.Z2195PermissaoUsuCxaContaSnAcrPag=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNACRPAG",gx.O.A2195PermissaoUsuCxaContaSnAcrPag,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2195PermissaoUsuCxaContaSnAcrPag=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNACRPAG")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 102 , function() {
   });
   GXValidFnc[104]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNACRREC",gxz:"Z2196PermissaoUsuCxaContaSnAcrRec",gxold:"O2196PermissaoUsuCxaContaSnAcrRec",gxvar:"A2196PermissaoUsuCxaContaSnAcrRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2196PermissaoUsuCxaContaSnAcrRec=Value},v2z:function(Value){gx.O.Z2196PermissaoUsuCxaContaSnAcrRec=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNACRREC",gx.O.A2196PermissaoUsuCxaContaSnAcrRec,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2196PermissaoUsuCxaContaSnAcrRec=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNACRREC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 104 , function() {
   });
   GXValidFnc[108]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNDESPAG",gxz:"Z2197PermissaoUsuCxaContaSnDesPag",gxold:"O2197PermissaoUsuCxaContaSnDesPag",gxvar:"A2197PermissaoUsuCxaContaSnDesPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2197PermissaoUsuCxaContaSnDesPag=Value},v2z:function(Value){gx.O.Z2197PermissaoUsuCxaContaSnDesPag=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNDESPAG",gx.O.A2197PermissaoUsuCxaContaSnDesPag,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2197PermissaoUsuCxaContaSnDesPag=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNDESPAG")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 108 , function() {
   });
   GXValidFnc[110]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNDESREC",gxz:"Z2198PermissaoUsuCxaContaSnDesRec",gxold:"O2198PermissaoUsuCxaContaSnDesRec",gxvar:"A2198PermissaoUsuCxaContaSnDesRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2198PermissaoUsuCxaContaSnDesRec=Value},v2z:function(Value){gx.O.Z2198PermissaoUsuCxaContaSnDesRec=Value},v2c:function(){gx.fn.setCheckBoxValue("PERMISSAOUSUCXACONTASNDESREC",gx.O.A2198PermissaoUsuCxaContaSnDesRec,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2198PermissaoUsuCxaContaSnDesRec=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTASNDESREC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[113]={fld:"TABLE4",grid:0};
   GXValidFnc[116]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[118]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUARIOALT",gxz:"Z1091PermissaoUsuCxaContaUsuarioAlt",gxold:"O1091PermissaoUsuCxaContaUsuarioAlt",gxvar:"A1091PermissaoUsuCxaContaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1091PermissaoUsuCxaContaUsuarioAlt=Value},v2z:function(Value){gx.O.Z1091PermissaoUsuCxaContaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOUSUCXACONTAUSUARIOALT",gx.O.A1091PermissaoUsuCxaContaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1091PermissaoUsuCxaContaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUCXACONTAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 118 , function() {
   });
   GXValidFnc[120]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTADATAHORAAL",gxz:"Z1092PermissaoUsuCxaContaDataHoraAl",gxold:"O1092PermissaoUsuCxaContaDataHoraAl",gxvar:"A1092PermissaoUsuCxaContaDataHoraAl",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1092PermissaoUsuCxaContaDataHoraAl=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1092PermissaoUsuCxaContaDataHoraAl=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PERMISSAOUSUCXACONTADATAHORAAL",gx.O.A1092PermissaoUsuCxaContaDataHoraAl,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1092PermissaoUsuCxaContaDataHoraAl=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PERMISSAOUSUCXACONTADATAHORAAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[129]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV23AcessoSistemaSequencia",gxold:"OV23AcessoSistemaSequencia",gxvar:"AV23AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV23AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV23AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[131]={fld:"BTNHELP",grid:0};
   GXValidFnc[133]={fld:"PROMPT_1771",grid:184};
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.Z1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.O1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.A2492PermissaoUsuCxaContaUsuAltCbc = "" ;
   this.Z2492PermissaoUsuCxaContaUsuAltCbc = "" ;
   this.O2492PermissaoUsuCxaContaUsuAltCbc = "" ;
   this.A2493PermissaoUsuCxaContaUsuAltCpr = "" ;
   this.Z2493PermissaoUsuCxaContaUsuAltCpr = "" ;
   this.O2493PermissaoUsuCxaContaUsuAltCpr = "" ;
   this.A2491PermissaoUsuCxaContaUsuAltCbl = "" ;
   this.Z2491PermissaoUsuCxaContaUsuAltCbl = "" ;
   this.O2491PermissaoUsuCxaContaUsuAltCbl = "" ;
   this.A1750PermissaoUsuCxaContaLibCxaBco = "" ;
   this.Z1750PermissaoUsuCxaContaLibCxaBco = "" ;
   this.O1750PermissaoUsuCxaContaLibCxaBco = "" ;
   this.A1740PermissaoUsuCxaContaPerBaiPag = "" ;
   this.Z1740PermissaoUsuCxaContaPerBaiPag = "" ;
   this.O1740PermissaoUsuCxaContaPerBaiPag = "" ;
   this.A1751PermissaoUsuCxaContaPerBaiRec = "" ;
   this.Z1751PermissaoUsuCxaContaPerBaiRec = "" ;
   this.O1751PermissaoUsuCxaContaPerBaiRec = "" ;
   this.A10698PermissaoUsuCxaContaSnAltCPag = "" ;
   this.Z10698PermissaoUsuCxaContaSnAltCPag = "" ;
   this.O10698PermissaoUsuCxaContaSnAltCPag = "" ;
   this.A10696PermissaoUsuCxaContaSnAltCRec = "" ;
   this.Z10696PermissaoUsuCxaContaSnAltCRec = "" ;
   this.O10696PermissaoUsuCxaContaSnAltCRec = "" ;
   this.A10699PermissaoUsuCxaContaSnExcCPag = "" ;
   this.Z10699PermissaoUsuCxaContaSnExcCPag = "" ;
   this.O10699PermissaoUsuCxaContaSnExcCPag = "" ;
   this.A10697PermissaoUsuCxaContaSnExcCRec = "" ;
   this.Z10697PermissaoUsuCxaContaSnExcCRec = "" ;
   this.O10697PermissaoUsuCxaContaSnExcCRec = "" ;
   this.A1742PermissaoUsuCxaContaSnConPag = "" ;
   this.Z1742PermissaoUsuCxaContaSnConPag = "" ;
   this.O1742PermissaoUsuCxaContaSnConPag = "" ;
   this.A1746PermissaoUsuCxaContaSnConRec = "" ;
   this.Z1746PermissaoUsuCxaContaSnConRec = "" ;
   this.O1746PermissaoUsuCxaContaSnConRec = "" ;
   this.A1743PermissaoUsuCxaContaSnAltPag = "" ;
   this.Z1743PermissaoUsuCxaContaSnAltPag = "" ;
   this.O1743PermissaoUsuCxaContaSnAltPag = "" ;
   this.A1747PermissaoUsuCxaContaSnAltRec = "" ;
   this.Z1747PermissaoUsuCxaContaSnAltRec = "" ;
   this.O1747PermissaoUsuCxaContaSnAltRec = "" ;
   this.A1744PermissaoUsuCxaContaSnIncPag = "" ;
   this.Z1744PermissaoUsuCxaContaSnIncPag = "" ;
   this.O1744PermissaoUsuCxaContaSnIncPag = "" ;
   this.A1748PermissaoUsuCxaContaSnIncRec = "" ;
   this.Z1748PermissaoUsuCxaContaSnIncRec = "" ;
   this.O1748PermissaoUsuCxaContaSnIncRec = "" ;
   this.A1745PermissaoUsuCxaContaSnExcPag = "" ;
   this.Z1745PermissaoUsuCxaContaSnExcPag = "" ;
   this.O1745PermissaoUsuCxaContaSnExcPag = "" ;
   this.A1749PermissaoUsuCxaContaExcRec = "" ;
   this.Z1749PermissaoUsuCxaContaExcRec = "" ;
   this.O1749PermissaoUsuCxaContaExcRec = "" ;
   this.A1752PermissaoUsuCxaContaAltDtBaiPa = "" ;
   this.Z1752PermissaoUsuCxaContaAltDtBaiPa = "" ;
   this.O1752PermissaoUsuCxaContaAltDtBaiPa = "" ;
   this.A1753PermissaoUsuCxaContaAltDtBaiRe = "" ;
   this.Z1753PermissaoUsuCxaContaAltDtBaiRe = "" ;
   this.O1753PermissaoUsuCxaContaAltDtBaiRe = "" ;
   this.A1876PermissaoUsuCxaContaSnAcePag = "" ;
   this.Z1876PermissaoUsuCxaContaSnAcePag = "" ;
   this.O1876PermissaoUsuCxaContaSnAcePag = "" ;
   this.A1877PermissaoUsuCxaContaSnAceRec = "" ;
   this.Z1877PermissaoUsuCxaContaSnAceRec = "" ;
   this.O1877PermissaoUsuCxaContaSnAceRec = "" ;
   this.A2195PermissaoUsuCxaContaSnAcrPag = "" ;
   this.Z2195PermissaoUsuCxaContaSnAcrPag = "" ;
   this.O2195PermissaoUsuCxaContaSnAcrPag = "" ;
   this.A2196PermissaoUsuCxaContaSnAcrRec = "" ;
   this.Z2196PermissaoUsuCxaContaSnAcrRec = "" ;
   this.O2196PermissaoUsuCxaContaSnAcrRec = "" ;
   this.A2197PermissaoUsuCxaContaSnDesPag = "" ;
   this.Z2197PermissaoUsuCxaContaSnDesPag = "" ;
   this.O2197PermissaoUsuCxaContaSnDesPag = "" ;
   this.A2198PermissaoUsuCxaContaSnDesRec = "" ;
   this.Z2198PermissaoUsuCxaContaSnDesRec = "" ;
   this.O2198PermissaoUsuCxaContaSnDesRec = "" ;
   this.A1091PermissaoUsuCxaContaUsuarioAlt = "" ;
   this.Z1091PermissaoUsuCxaContaUsuarioAlt = "" ;
   this.O1091PermissaoUsuCxaContaUsuarioAlt = "" ;
   this.A1092PermissaoUsuCxaContaDataHoraAl = gx.date.nullDate() ;
   this.Z1092PermissaoUsuCxaContaDataHoraAl = gx.date.nullDate() ;
   this.O1092PermissaoUsuCxaContaDataHoraAl = gx.date.nullDate() ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.ZV23AcessoSistemaSequencia = 0 ;
   this.OV23AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV28Pgmname = "" ;
   this.AV29Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV23AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22UsuarioNome = "" ;
   this.AV21snExiste = "" ;
   this.AV19PermissaoUsuCxaContaUsuarioId = "" ;
   this.A1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.AV20snAlterou = "" ;
   this.Gx_BScreen = 0 ;
   this.A1750PermissaoUsuCxaContaLibCxaBco = "" ;
   this.A1742PermissaoUsuCxaContaSnConPag = "" ;
   this.A1743PermissaoUsuCxaContaSnAltPag = "" ;
   this.A1744PermissaoUsuCxaContaSnIncPag = "" ;
   this.A1745PermissaoUsuCxaContaSnExcPag = "" ;
   this.A1740PermissaoUsuCxaContaPerBaiPag = "" ;
   this.A1752PermissaoUsuCxaContaAltDtBaiPa = "" ;
   this.A1876PermissaoUsuCxaContaSnAcePag = "" ;
   this.A1746PermissaoUsuCxaContaSnConRec = "" ;
   this.A1747PermissaoUsuCxaContaSnAltRec = "" ;
   this.A1748PermissaoUsuCxaContaSnIncRec = "" ;
   this.A1749PermissaoUsuCxaContaExcRec = "" ;
   this.A1751PermissaoUsuCxaContaPerBaiRec = "" ;
   this.A1753PermissaoUsuCxaContaAltDtBaiRe = "" ;
   this.A1877PermissaoUsuCxaContaSnAceRec = "" ;
   this.A2195PermissaoUsuCxaContaSnAcrPag = "" ;
   this.A2196PermissaoUsuCxaContaSnAcrRec = "" ;
   this.A2197PermissaoUsuCxaContaSnDesPag = "" ;
   this.A2198PermissaoUsuCxaContaSnDesRec = "" ;
   this.A2491PermissaoUsuCxaContaUsuAltCbl = "" ;
   this.A2492PermissaoUsuCxaContaUsuAltCbc = "" ;
   this.A2493PermissaoUsuCxaContaUsuAltCpr = "" ;
   this.A10696PermissaoUsuCxaContaSnAltCRec = "" ;
   this.A10697PermissaoUsuCxaContaSnExcCRec = "" ;
   this.A10698PermissaoUsuCxaContaSnAltCPag = "" ;
   this.A10699PermissaoUsuCxaContaSnExcCPag = "" ;
   this.A1091PermissaoUsuCxaContaUsuarioAlt = "" ;
   this.A1092PermissaoUsuCxaContaDataHoraAl = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e122k2_client": ["'FECHAR'", true] ,"e132k2_client": ["AFTER TRN", true] ,"e142k184_client": ["ENTER", true] ,"e152k184_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID',hsh:true},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV23AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV23AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_1771", [14]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19PermissaoUsuCxaContaUsuarioId", "vPERMISSAOUSUCXACONTAUSUARIOID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1076PermissaoUsuCxaContaEmpresaId", "PERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.setVCMap("AV20snAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22UsuarioNome", "vUSUARIONOME", 0, "svchar");
   this.setVCMap("AV21snExiste", "vSNEXISTE", 0, "char");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 184 ]= ["O10699PermissaoUsuCxaContaSnExcCPag","O10698PermissaoUsuCxaContaSnAltCPag","O10697PermissaoUsuCxaContaSnExcCRec","O10696PermissaoUsuCxaContaSnAltCRec","O1877PermissaoUsuCxaContaSnAceRec","O1753PermissaoUsuCxaContaAltDtBaiRe","O1751PermissaoUsuCxaContaPerBaiRec","O1749PermissaoUsuCxaContaExcRec","O1748PermissaoUsuCxaContaSnIncRec","O1747PermissaoUsuCxaContaSnAltRec","O1746PermissaoUsuCxaContaSnConRec","O1876PermissaoUsuCxaContaSnAcePag","O1752PermissaoUsuCxaContaAltDtBaiPa","O1740PermissaoUsuCxaContaPerBaiPag","O1745PermissaoUsuCxaContaSnExcPag","O1744PermissaoUsuCxaContaSnIncPag","O1743PermissaoUsuCxaContaSnAltPag","O1742PermissaoUsuCxaContaSnConPag","O1750PermissaoUsuCxaContaLibCxaBco"] ;
});
gx.setParentObj(new tpermissaousucxaconta());
