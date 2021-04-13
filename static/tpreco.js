/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:43:35.50
*/
gx.evt.autoSkip = false;
gx.define('tpreco', false, function () {
   this.ServerClass =  "tpreco" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
      this.AV22LogPrecoEmpresaId=gx.fn.getControlValue("vLOGPRECOEMPRESAID") ;
      this.AV23LogPrecoId=gx.fn.getIntegerValue("vLOGPRECOID",'.') ;
      this.AV21lPrecos=gx.fn.getControlValue("vLPRECOS") ;
      this.AV24LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.A10601PrecoTpOpeFCP=gx.fn.getControlValue("PRECOTPOPEFCP") ;
      this.A10602PrecoTpOpeFCPST=gx.fn.getControlValue("PRECOTPOPEFCPST") ;
      this.A10603PrecoTpOpeFCPSTRet=gx.fn.getControlValue("PRECOTPOPEFCPSTRET") ;
      this.A10604PrecoTpOpeICMSDeson=gx.fn.getControlValue("PRECOTPOPEICMSDESON") ;
      this.A11703PrecoOperacaoIndice=gx.fn.getControlValue("PRECOOPERACAOINDICE") ;
      this.A11702PrecoIndiceSigla=gx.fn.getControlValue("PRECOINDICESIGLA") ;
      this.A11700PrecoCustoBaseEmpresaId=gx.fn.getControlValue("PRECOCUSTOBASEEMPRESAID") ;
      this.A11701PrecoCustoBaseId=gx.fn.getIntegerValue("PRECOCUSTOBASEID",'.') ;
      this.A11705PrecoIndiceDescricao=gx.fn.getControlValue("PRECOINDICEDESCRICAO") ;
      this.A11704PrecoCustoBaseDescricao=gx.fn.getControlValue("PRECOCUSTOBASEDESCRICAO") ;
      this.A11706PrecoCustoBaseTipo=gx.fn.getControlValue("PRECOCUSTOBASETIPO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV15PrecoId=gx.fn.getIntegerValue("vPRECOID",'.') ;
   };
   this.Valid_Precoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECODESCRICAO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTIPO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precocasasdecimais=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOCASASDECIMAIS");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovinculadoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVINCULADOEMPRESAID");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovinculadoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Precovinculadoid",["gx.O.Gx_mode", "gx.O.O736PrecoVinculadoId", "gx.O.O4952PrecoVinculadoTipo", "gx.O.O737PrecoVinculadoDescricao", "gx.O.A738PrecoVinculadoEmpresaId", "gx.O.A736PrecoVinculadoId", "gx.O.A737PrecoVinculadoDescricao", "gx.O.A4952PrecoVinculadoTipo"],["O737PrecoVinculadoDescricao", "O4952PrecoVinculadoTipo", "A737PrecoVinculadoDescricao", "A4952PrecoVinculadoTipo", ["AV21lPrecos","Aprecovinculadodescricao"], ["AV21lPrecos","Aprecovinculadotipo"], ["AV21lPrecos","Aprecovinculadoid"]]);
      return true;
   }
   this.Valid_Precovinculadodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVINCULADODESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovinculadotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVINCULADOTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precopcmargem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOPCMARGEM");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precosncalcularsistema=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOSNCALCULARSISTEMA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precodescontomax=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECODESCONTOMAX");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precosnarredonda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOSNARREDONDA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopeseguro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPESEGURO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopefrete=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPEFRETE");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopeoutdesp=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPEOUTDESP");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopeacrescimo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPEACRESCIMO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopemanuseio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPEMANUSEIO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopedesconto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPEDESCONTO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopepis=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPEPIS");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopecofins=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPECOFINS");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopeipi=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPEIPI");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopeicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPEICMS");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopeicmsst=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPEICMSST");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopeicmsstnaodest=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPEICMSSTNAODEST");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotpopedificms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTPOPEDIFICMS");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precotipocalculo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOTIPOCALCULO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendasncusope=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDASNCUSOPE");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendasnperda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDASNPERDA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendasnmargemlucro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDASNMARGEMLUCRO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendasnpis=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDASNPIS");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendasncofins=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDASNCOFINS");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendasnir=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDASNIR");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendasnicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDASNICMS");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendasnicmsst=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDASNICMSST");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendasndificms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDASNDIFICMS");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendasnipi=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDASNIPI");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendaperccusope=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDAPERCCUSOPE");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendapercperda=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDAPERCPERDA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Precovendapercir=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PRECOVENDAPERCIR");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e115x345_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e125x345_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e135x345_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,117,119,122,124,127,129,132,134,137,139,142,144,148,152,156,160,164,168,172,176,180,184,187,189,192,194,197,199,202,204,207,209,210,219,221,223];
   this.GXLastCtrlId =223;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precoempresaid,isvalid:null,rgrid:[],fld:"PRECOEMPRESAID",gxz:"Z709PrecoEmpresaId",gxold:"O709PrecoEmpresaId",gxvar:"A709PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A709PrecoEmpresaId=Value},v2z:function(Value){gx.O.Z709PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PRECOEMPRESAID",gx.O.A709PrecoEmpresaId,0)},c2v:function(){gx.O.A709PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precoid,isvalid:null,rgrid:[],fld:"PRECOID",gxz:"Z710PrecoId",gxold:"O710PrecoId",gxvar:"A710PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A710PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z710PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PRECOID",gx.O.A710PrecoId,0)},c2v:function(){gx.O.A710PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precodescricao,isvalid:null,rgrid:[],fld:"PRECODESCRICAO",gxz:"Z711PrecoDescricao",gxold:"O711PrecoDescricao",gxvar:"A711PrecoDescricao",ucs:[],op:[],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A711PrecoDescricao=Value},v2z:function(Value){gx.O.Z711PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("PRECODESCRICAO",gx.O.A711PrecoDescricao,0)},c2v:function(){gx.O.A711PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("PRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotipo,isvalid:null,rgrid:[],fld:"PRECOTIPO",gxz:"Z722PrecoTipo",gxold:"O722PrecoTipo",gxvar:"A722PrecoTipo",ucs:[],op:[],ip:[30],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A722PrecoTipo=Value},v2z:function(Value){gx.O.Z722PrecoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("PRECOTIPO",gx.O.A722PrecoTipo)},c2v:function(){gx.O.A722PrecoTipo=this.val()},val:function(){return gx.fn.getControlValue("PRECOTIPO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precocasasdecimais,isvalid:null,rgrid:[],fld:"PRECOCASASDECIMAIS",gxz:"Z3199PrecoCasasDecimais",gxold:"O3199PrecoCasasDecimais",gxvar:"A3199PrecoCasasDecimais",ucs:[],op:[],ip:[35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3199PrecoCasasDecimais=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3199PrecoCasasDecimais=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PRECOCASASDECIMAIS",gx.O.A3199PrecoCasasDecimais,0)},c2v:function(){gx.O.A3199PrecoCasasDecimais=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRECOCASASDECIMAIS",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovinculadoempresaid,isvalid:null,rgrid:[],fld:"PRECOVINCULADOEMPRESAID",gxz:"Z738PrecoVinculadoEmpresaId",gxold:"O738PrecoVinculadoEmpresaId",gxvar:"A738PrecoVinculadoEmpresaId",ucs:[],op:[],ip:[40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A738PrecoVinculadoEmpresaId=Value},v2z:function(Value){gx.O.Z738PrecoVinculadoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PRECOVINCULADOEMPRESAID",gx.O.A738PrecoVinculadoEmpresaId,0)},c2v:function(){gx.O.A738PrecoVinculadoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PRECOVINCULADOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovinculadoid,isvalid:null,rgrid:[],fld:"PRECOVINCULADOID",gxz:"Z736PrecoVinculadoId",gxold:"O736PrecoVinculadoId",gxvar:"A736PrecoVinculadoId",ucs:[],op:[55,50],ip:[55,50,45,40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A736PrecoVinculadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z736PrecoVinculadoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PRECOVINCULADOID",gx.O.A736PrecoVinculadoId,0)},c2v:function(){gx.O.A736PrecoVinculadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRECOVINCULADOID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Precovinculadodescricao,isvalid:null,rgrid:[],fld:"PRECOVINCULADODESCRICAO",gxz:"Z737PrecoVinculadoDescricao",gxold:"O737PrecoVinculadoDescricao",gxvar:"A737PrecoVinculadoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A737PrecoVinculadoDescricao=Value},v2z:function(Value){gx.O.Z737PrecoVinculadoDescricao=Value},v2c:function(){gx.fn.setControlValue("PRECOVINCULADODESCRICAO",gx.O.A737PrecoVinculadoDescricao,0)},c2v:function(){gx.O.A737PrecoVinculadoDescricao=this.val()},val:function(){return gx.fn.getControlValue("PRECOVINCULADODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Precovinculadotipo,isvalid:null,rgrid:[],fld:"PRECOVINCULADOTIPO",gxz:"Z4952PrecoVinculadoTipo",gxold:"O4952PrecoVinculadoTipo",gxvar:"A4952PrecoVinculadoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4952PrecoVinculadoTipo=Value},v2z:function(Value){gx.O.Z4952PrecoVinculadoTipo=Value},v2c:function(){gx.fn.setControlValue("PRECOVINCULADOTIPO",gx.O.A4952PrecoVinculadoTipo,0)},c2v:function(){gx.O.A4952PrecoVinculadoTipo=this.val()},val:function(){return gx.fn.getControlValue("PRECOVINCULADOTIPO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:10,dec:6,sign:false,pic:"ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precopcmargem,isvalid:null,rgrid:[],fld:"PRECOPCMARGEM",gxz:"Z4342PrecoPCMargem",gxold:"O4342PrecoPCMargem",gxvar:"A4342PrecoPCMargem",ucs:[],op:[],ip:[60],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4342PrecoPCMargem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4342PrecoPCMargem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PRECOPCMARGEM",gx.O.A4342PrecoPCMargem,6,',')},c2v:function(){gx.O.A4342PrecoPCMargem=this.val()},val:function(){return gx.fn.getDecimalValue("PRECOPCMARGEM",'.',',')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precosncalcularsistema,isvalid:null,rgrid:[],fld:"PRECOSNCALCULARSISTEMA",gxz:"Z4343PrecoSnCalcularSistema",gxold:"O4343PrecoSnCalcularSistema",gxvar:"A4343PrecoSnCalcularSistema",ucs:[],op:[],ip:[64],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4343PrecoSnCalcularSistema=Value},v2z:function(Value){gx.O.Z4343PrecoSnCalcularSistema=Value},v2c:function(){gx.fn.setControlValue("PRECOSNCALCULARSISTEMA",gx.O.A4343PrecoSnCalcularSistema,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4343PrecoSnCalcularSistema=this.val()},val:function(){return gx.fn.getControlValue("PRECOSNCALCULARSISTEMA")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"decimal",len:16,dec:6,sign:false,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precodescontomax,isvalid:null,rgrid:[],fld:"PRECODESCONTOMAX",gxz:"Z4345PrecoDescontoMax",gxold:"O4345PrecoDescontoMax",gxvar:"A4345PrecoDescontoMax",ucs:[],op:[],ip:[69],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4345PrecoDescontoMax=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4345PrecoDescontoMax=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PRECODESCONTOMAX",gx.O.A4345PrecoDescontoMax,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4345PrecoDescontoMax=this.val()},val:function(){return gx.fn.getDecimalValue("PRECODESCONTOMAX",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precosnarredonda,isvalid:null,rgrid:[],fld:"PRECOSNARREDONDA",gxz:"Z4346PrecoSnArredonda",gxold:"O4346PrecoSnArredonda",gxvar:"A4346PrecoSnArredonda",ucs:[],op:[],ip:[74],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4346PrecoSnArredonda=Value},v2z:function(Value){gx.O.Z4346PrecoSnArredonda=Value},v2c:function(){gx.fn.setControlValue("PRECOSNARREDONDA",gx.O.A4346PrecoSnArredonda,0)},c2v:function(){gx.O.A4346PrecoSnArredonda=this.val()},val:function(){return gx.fn.getControlValue("PRECOSNARREDONDA")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopeseguro,isvalid:null,rgrid:[],fld:"PRECOTPOPESEGURO",gxz:"Z8482PrecoTpOpeSeguro",gxold:"O8482PrecoTpOpeSeguro",gxvar:"A8482PrecoTpOpeSeguro",ucs:[],op:[],ip:[79],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8482PrecoTpOpeSeguro=Value},v2z:function(Value){gx.O.Z8482PrecoTpOpeSeguro=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPESEGURO",gx.O.A8482PrecoTpOpeSeguro,0)},c2v:function(){gx.O.A8482PrecoTpOpeSeguro=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPESEGURO")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopefrete,isvalid:null,rgrid:[],fld:"PRECOTPOPEFRETE",gxz:"Z8483PrecoTpOpeFrete",gxold:"O8483PrecoTpOpeFrete",gxvar:"A8483PrecoTpOpeFrete",ucs:[],op:[],ip:[84],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8483PrecoTpOpeFrete=Value},v2z:function(Value){gx.O.Z8483PrecoTpOpeFrete=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPEFRETE",gx.O.A8483PrecoTpOpeFrete,0)},c2v:function(){gx.O.A8483PrecoTpOpeFrete=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPEFRETE")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopeoutdesp,isvalid:null,rgrid:[],fld:"PRECOTPOPEOUTDESP",gxz:"Z8484PrecoTpOpeOutDesp",gxold:"O8484PrecoTpOpeOutDesp",gxvar:"A8484PrecoTpOpeOutDesp",ucs:[],op:[],ip:[89],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8484PrecoTpOpeOutDesp=Value},v2z:function(Value){gx.O.Z8484PrecoTpOpeOutDesp=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPEOUTDESP",gx.O.A8484PrecoTpOpeOutDesp,0)},c2v:function(){gx.O.A8484PrecoTpOpeOutDesp=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPEOUTDESP")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopeacrescimo,isvalid:null,rgrid:[],fld:"PRECOTPOPEACRESCIMO",gxz:"Z8485PrecoTpOpeAcrescimo",gxold:"O8485PrecoTpOpeAcrescimo",gxvar:"A8485PrecoTpOpeAcrescimo",ucs:[],op:[],ip:[94],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8485PrecoTpOpeAcrescimo=Value},v2z:function(Value){gx.O.Z8485PrecoTpOpeAcrescimo=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPEACRESCIMO",gx.O.A8485PrecoTpOpeAcrescimo,0)},c2v:function(){gx.O.A8485PrecoTpOpeAcrescimo=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPEACRESCIMO")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopemanuseio,isvalid:null,rgrid:[],fld:"PRECOTPOPEMANUSEIO",gxz:"Z8486PrecoTpOpeManuseio",gxold:"O8486PrecoTpOpeManuseio",gxvar:"A8486PrecoTpOpeManuseio",ucs:[],op:[],ip:[99],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8486PrecoTpOpeManuseio=Value},v2z:function(Value){gx.O.Z8486PrecoTpOpeManuseio=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPEMANUSEIO",gx.O.A8486PrecoTpOpeManuseio,0)},c2v:function(){gx.O.A8486PrecoTpOpeManuseio=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPEMANUSEIO")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopedesconto,isvalid:null,rgrid:[],fld:"PRECOTPOPEDESCONTO",gxz:"Z8487PrecoTpOpeDesconto",gxold:"O8487PrecoTpOpeDesconto",gxvar:"A8487PrecoTpOpeDesconto",ucs:[],op:[],ip:[104],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8487PrecoTpOpeDesconto=Value},v2z:function(Value){gx.O.Z8487PrecoTpOpeDesconto=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPEDESCONTO",gx.O.A8487PrecoTpOpeDesconto,0)},c2v:function(){gx.O.A8487PrecoTpOpeDesconto=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPEDESCONTO")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopepis,isvalid:null,rgrid:[],fld:"PRECOTPOPEPIS",gxz:"Z8488PrecoTpOpePIS",gxold:"O8488PrecoTpOpePIS",gxvar:"A8488PrecoTpOpePIS",ucs:[],op:[],ip:[109],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8488PrecoTpOpePIS=Value},v2z:function(Value){gx.O.Z8488PrecoTpOpePIS=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPEPIS",gx.O.A8488PrecoTpOpePIS,0)},c2v:function(){gx.O.A8488PrecoTpOpePIS=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPEPIS")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopecofins,isvalid:null,rgrid:[],fld:"PRECOTPOPECOFINS",gxz:"Z8489PrecoTpOpeCOFINS",gxold:"O8489PrecoTpOpeCOFINS",gxvar:"A8489PrecoTpOpeCOFINS",ucs:[],op:[],ip:[114],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8489PrecoTpOpeCOFINS=Value},v2z:function(Value){gx.O.Z8489PrecoTpOpeCOFINS=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPECOFINS",gx.O.A8489PrecoTpOpeCOFINS,0)},c2v:function(){gx.O.A8489PrecoTpOpeCOFINS=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPECOFINS")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopeipi,isvalid:null,rgrid:[],fld:"PRECOTPOPEIPI",gxz:"Z8490PrecoTpOpeIPI",gxold:"O8490PrecoTpOpeIPI",gxvar:"A8490PrecoTpOpeIPI",ucs:[],op:[],ip:[119],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8490PrecoTpOpeIPI=Value},v2z:function(Value){gx.O.Z8490PrecoTpOpeIPI=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPEIPI",gx.O.A8490PrecoTpOpeIPI,0)},c2v:function(){gx.O.A8490PrecoTpOpeIPI=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPEIPI")},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopeicms,isvalid:null,rgrid:[],fld:"PRECOTPOPEICMS",gxz:"Z8491PrecoTpOpeICMS",gxold:"O8491PrecoTpOpeICMS",gxvar:"A8491PrecoTpOpeICMS",ucs:[],op:[],ip:[124],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8491PrecoTpOpeICMS=Value},v2z:function(Value){gx.O.Z8491PrecoTpOpeICMS=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPEICMS",gx.O.A8491PrecoTpOpeICMS,0)},c2v:function(){gx.O.A8491PrecoTpOpeICMS=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPEICMS")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopeicmsst,isvalid:null,rgrid:[],fld:"PRECOTPOPEICMSST",gxz:"Z8492PrecoTpOpeICMSST",gxold:"O8492PrecoTpOpeICMSST",gxvar:"A8492PrecoTpOpeICMSST",ucs:[],op:[],ip:[129],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8492PrecoTpOpeICMSST=Value},v2z:function(Value){gx.O.Z8492PrecoTpOpeICMSST=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPEICMSST",gx.O.A8492PrecoTpOpeICMSST,0)},c2v:function(){gx.O.A8492PrecoTpOpeICMSST=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPEICMSST")},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopeicmsstnaodest,isvalid:null,rgrid:[],fld:"PRECOTPOPEICMSSTNAODEST",gxz:"Z8493PrecoTpOpeICMSSTNaoDest",gxold:"O8493PrecoTpOpeICMSSTNaoDest",gxvar:"A8493PrecoTpOpeICMSSTNaoDest",ucs:[],op:[],ip:[134],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8493PrecoTpOpeICMSSTNaoDest=Value},v2z:function(Value){gx.O.Z8493PrecoTpOpeICMSSTNaoDest=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPEICMSSTNAODEST",gx.O.A8493PrecoTpOpeICMSSTNaoDest,0)},c2v:function(){gx.O.A8493PrecoTpOpeICMSSTNaoDest=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPEICMSSTNAODEST")},nac:gx.falseFn};
   GXValidFnc[137]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotpopedificms,isvalid:null,rgrid:[],fld:"PRECOTPOPEDIFICMS",gxz:"Z8494PrecoTpOpeDifICMS",gxold:"O8494PrecoTpOpeDifICMS",gxvar:"A8494PrecoTpOpeDifICMS",ucs:[],op:[],ip:[139],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8494PrecoTpOpeDifICMS=Value},v2z:function(Value){gx.O.Z8494PrecoTpOpeDifICMS=Value},v2c:function(){gx.fn.setControlValue("PRECOTPOPEDIFICMS",gx.O.A8494PrecoTpOpeDifICMS,0)},c2v:function(){gx.O.A8494PrecoTpOpeDifICMS=this.val()},val:function(){return gx.fn.getControlValue("PRECOTPOPEDIFICMS")},nac:gx.falseFn};
   GXValidFnc[142]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[144]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precotipocalculo,isvalid:null,rgrid:[],fld:"PRECOTIPOCALCULO",gxz:"Z8392PrecoTipoCalculo",gxold:"O8392PrecoTipoCalculo",gxvar:"A8392PrecoTipoCalculo",ucs:[],op:[],ip:[144],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8392PrecoTipoCalculo=Value},v2z:function(Value){gx.O.Z8392PrecoTipoCalculo=Value},v2c:function(){gx.fn.setControlValue("PRECOTIPOCALCULO",gx.O.A8392PrecoTipoCalculo,0)},c2v:function(){gx.O.A8392PrecoTipoCalculo=this.val()},val:function(){return gx.fn.getControlValue("PRECOTIPOCALCULO")},nac:gx.falseFn};
   GXValidFnc[148]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendasncusope,isvalid:null,rgrid:[],fld:"PRECOVENDASNCUSOPE",gxz:"Z8393PrecoVendaSnCusOpe",gxold:"O8393PrecoVendaSnCusOpe",gxvar:"A8393PrecoVendaSnCusOpe",ucs:[],op:[],ip:[148],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8393PrecoVendaSnCusOpe=Value},v2z:function(Value){gx.O.Z8393PrecoVendaSnCusOpe=Value},v2c:function(){gx.fn.setControlValue("PRECOVENDASNCUSOPE",gx.O.A8393PrecoVendaSnCusOpe,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8393PrecoVendaSnCusOpe=this.val()},val:function(){return gx.fn.getControlValue("PRECOVENDASNCUSOPE")},nac:gx.falseFn};
   this.declareDomainHdlr( 148 , function() {
   });
   GXValidFnc[152]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendasnperda,isvalid:null,rgrid:[],fld:"PRECOVENDASNPERDA",gxz:"Z8394PrecoVendaSnPerda",gxold:"O8394PrecoVendaSnPerda",gxvar:"A8394PrecoVendaSnPerda",ucs:[],op:[],ip:[152],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8394PrecoVendaSnPerda=Value},v2z:function(Value){gx.O.Z8394PrecoVendaSnPerda=Value},v2c:function(){gx.fn.setControlValue("PRECOVENDASNPERDA",gx.O.A8394PrecoVendaSnPerda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8394PrecoVendaSnPerda=this.val()},val:function(){return gx.fn.getControlValue("PRECOVENDASNPERDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 152 , function() {
   });
   GXValidFnc[156]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendasnmargemlucro,isvalid:null,rgrid:[],fld:"PRECOVENDASNMARGEMLUCRO",gxz:"Z8395PrecoVendaSnMargemLucro",gxold:"O8395PrecoVendaSnMargemLucro",gxvar:"A8395PrecoVendaSnMargemLucro",ucs:[],op:[],ip:[156],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8395PrecoVendaSnMargemLucro=Value},v2z:function(Value){gx.O.Z8395PrecoVendaSnMargemLucro=Value},v2c:function(){gx.fn.setControlValue("PRECOVENDASNMARGEMLUCRO",gx.O.A8395PrecoVendaSnMargemLucro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8395PrecoVendaSnMargemLucro=this.val()},val:function(){return gx.fn.getControlValue("PRECOVENDASNMARGEMLUCRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 156 , function() {
   });
   GXValidFnc[160]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendasnpis,isvalid:null,rgrid:[],fld:"PRECOVENDASNPIS",gxz:"Z8396PrecoVendaSnPIS",gxold:"O8396PrecoVendaSnPIS",gxvar:"A8396PrecoVendaSnPIS",ucs:[],op:[],ip:[160],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8396PrecoVendaSnPIS=Value},v2z:function(Value){gx.O.Z8396PrecoVendaSnPIS=Value},v2c:function(){gx.fn.setControlValue("PRECOVENDASNPIS",gx.O.A8396PrecoVendaSnPIS,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8396PrecoVendaSnPIS=this.val()},val:function(){return gx.fn.getControlValue("PRECOVENDASNPIS")},nac:gx.falseFn};
   this.declareDomainHdlr( 160 , function() {
   });
   GXValidFnc[164]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendasncofins,isvalid:null,rgrid:[],fld:"PRECOVENDASNCOFINS",gxz:"Z8397PrecoVendaSnCOFINS",gxold:"O8397PrecoVendaSnCOFINS",gxvar:"A8397PrecoVendaSnCOFINS",ucs:[],op:[],ip:[164],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8397PrecoVendaSnCOFINS=Value},v2z:function(Value){gx.O.Z8397PrecoVendaSnCOFINS=Value},v2c:function(){gx.fn.setControlValue("PRECOVENDASNCOFINS",gx.O.A8397PrecoVendaSnCOFINS,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8397PrecoVendaSnCOFINS=this.val()},val:function(){return gx.fn.getControlValue("PRECOVENDASNCOFINS")},nac:gx.falseFn};
   this.declareDomainHdlr( 164 , function() {
   });
   GXValidFnc[168]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendasnir,isvalid:null,rgrid:[],fld:"PRECOVENDASNIR",gxz:"Z8398PrecoVendaSnIR",gxold:"O8398PrecoVendaSnIR",gxvar:"A8398PrecoVendaSnIR",ucs:[],op:[],ip:[168],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8398PrecoVendaSnIR=Value},v2z:function(Value){gx.O.Z8398PrecoVendaSnIR=Value},v2c:function(){gx.fn.setControlValue("PRECOVENDASNIR",gx.O.A8398PrecoVendaSnIR,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8398PrecoVendaSnIR=this.val()},val:function(){return gx.fn.getControlValue("PRECOVENDASNIR")},nac:gx.falseFn};
   this.declareDomainHdlr( 168 , function() {
   });
   GXValidFnc[172]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendasnicms,isvalid:null,rgrid:[],fld:"PRECOVENDASNICMS",gxz:"Z8399PrecoVendaSnICMS",gxold:"O8399PrecoVendaSnICMS",gxvar:"A8399PrecoVendaSnICMS",ucs:[],op:[],ip:[172],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8399PrecoVendaSnICMS=Value},v2z:function(Value){gx.O.Z8399PrecoVendaSnICMS=Value},v2c:function(){gx.fn.setControlValue("PRECOVENDASNICMS",gx.O.A8399PrecoVendaSnICMS,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8399PrecoVendaSnICMS=this.val()},val:function(){return gx.fn.getControlValue("PRECOVENDASNICMS")},nac:gx.falseFn};
   this.declareDomainHdlr( 172 , function() {
   });
   GXValidFnc[176]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendasnicmsst,isvalid:null,rgrid:[],fld:"PRECOVENDASNICMSST",gxz:"Z8400PrecoVendaSnICMSST",gxold:"O8400PrecoVendaSnICMSST",gxvar:"A8400PrecoVendaSnICMSST",ucs:[],op:[],ip:[176],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8400PrecoVendaSnICMSST=Value},v2z:function(Value){gx.O.Z8400PrecoVendaSnICMSST=Value},v2c:function(){gx.fn.setControlValue("PRECOVENDASNICMSST",gx.O.A8400PrecoVendaSnICMSST,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8400PrecoVendaSnICMSST=this.val()},val:function(){return gx.fn.getControlValue("PRECOVENDASNICMSST")},nac:gx.falseFn};
   this.declareDomainHdlr( 176 , function() {
   });
   GXValidFnc[180]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendasndificms,isvalid:null,rgrid:[],fld:"PRECOVENDASNDIFICMS",gxz:"Z8401PrecoVendaSnDifICMS",gxold:"O8401PrecoVendaSnDifICMS",gxvar:"A8401PrecoVendaSnDifICMS",ucs:[],op:[],ip:[180],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8401PrecoVendaSnDifICMS=Value},v2z:function(Value){gx.O.Z8401PrecoVendaSnDifICMS=Value},v2c:function(){gx.fn.setControlValue("PRECOVENDASNDIFICMS",gx.O.A8401PrecoVendaSnDifICMS,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8401PrecoVendaSnDifICMS=this.val()},val:function(){return gx.fn.getControlValue("PRECOVENDASNDIFICMS")},nac:gx.falseFn};
   this.declareDomainHdlr( 180 , function() {
   });
   GXValidFnc[184]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendasnipi,isvalid:null,rgrid:[],fld:"PRECOVENDASNIPI",gxz:"Z8402PrecoVendaSnIPI",gxold:"O8402PrecoVendaSnIPI",gxvar:"A8402PrecoVendaSnIPI",ucs:[],op:[],ip:[184],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8402PrecoVendaSnIPI=Value},v2z:function(Value){gx.O.Z8402PrecoVendaSnIPI=Value},v2c:function(){gx.fn.setControlValue("PRECOVENDASNIPI",gx.O.A8402PrecoVendaSnIPI,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8402PrecoVendaSnIPI=this.val()},val:function(){return gx.fn.getControlValue("PRECOVENDASNIPI")},nac:gx.falseFn};
   this.declareDomainHdlr( 184 , function() {
   });
   GXValidFnc[187]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[189]={lvl:0,type:"decimal",len:9,dec:2,sign:false,pic:"ZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendaperccusope,isvalid:null,rgrid:[],fld:"PRECOVENDAPERCCUSOPE",gxz:"Z8403PrecoVendaPercCusOpe",gxold:"O8403PrecoVendaPercCusOpe",gxvar:"A8403PrecoVendaPercCusOpe",ucs:[],op:[],ip:[189],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8403PrecoVendaPercCusOpe=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8403PrecoVendaPercCusOpe=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PRECOVENDAPERCCUSOPE",gx.O.A8403PrecoVendaPercCusOpe,2,',')},c2v:function(){gx.O.A8403PrecoVendaPercCusOpe=this.val()},val:function(){return gx.fn.getDecimalValue("PRECOVENDAPERCCUSOPE",'.',',')},nac:gx.falseFn};
   GXValidFnc[192]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[194]={lvl:0,type:"decimal",len:9,dec:2,sign:false,pic:"ZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendapercperda,isvalid:null,rgrid:[],fld:"PRECOVENDAPERCPERDA",gxz:"Z8404PrecoVendaPercPerda",gxold:"O8404PrecoVendaPercPerda",gxvar:"A8404PrecoVendaPercPerda",ucs:[],op:[],ip:[194],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8404PrecoVendaPercPerda=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8404PrecoVendaPercPerda=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PRECOVENDAPERCPERDA",gx.O.A8404PrecoVendaPercPerda,2,',')},c2v:function(){gx.O.A8404PrecoVendaPercPerda=this.val()},val:function(){return gx.fn.getDecimalValue("PRECOVENDAPERCPERDA",'.',',')},nac:gx.falseFn};
   GXValidFnc[197]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[199]={lvl:0,type:"decimal",len:9,dec:2,sign:false,pic:"ZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precovendapercir,isvalid:null,rgrid:[],fld:"PRECOVENDAPERCIR",gxz:"Z8405PrecoVendaPercIR",gxold:"O8405PrecoVendaPercIR",gxvar:"A8405PrecoVendaPercIR",ucs:[],op:[],ip:[199],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8405PrecoVendaPercIR=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8405PrecoVendaPercIR=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PRECOVENDAPERCIR",gx.O.A8405PrecoVendaPercIR,2,',')},c2v:function(){gx.O.A8405PrecoVendaPercIR=this.val()},val:function(){return gx.fn.getDecimalValue("PRECOVENDAPERCIR",'.',',')},nac:gx.falseFn};
   GXValidFnc[202]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[204]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRECOUSUARIOALT",gxz:"Z3200PrecoUsuarioAlt",gxold:"O3200PrecoUsuarioAlt",gxvar:"A3200PrecoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3200PrecoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3200PrecoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PRECOUSUARIOALT",gx.O.A3200PrecoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3200PrecoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PRECOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 204 , function() {
   });
   GXValidFnc[207]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[209]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRECODATAHORAALT",gxz:"Z3201PrecoDataHoraAlt",gxold:"O3201PrecoDataHoraAlt",gxvar:"A3201PrecoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3201PrecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3201PrecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PRECODATAHORAALT",gx.O.A3201PrecoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3201PrecoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PRECODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 209 , function() {
   });
   GXValidFnc[210]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[219]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSISTEMA",gxz:"ZV17Sistema",gxold:"OV17Sistema",gxvar:"AV17Sistema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Sistema=Value},v2z:function(Value){gx.O.ZV17Sistema=Value},v2c:function(){gx.fn.setControlValue("vSISTEMA",gx.O.AV17Sistema,0)},c2v:function(){gx.O.AV17Sistema=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMA")},nac:gx.falseFn};
   GXValidFnc[221]={fld:"BTNHELP",grid:0};
   GXValidFnc[223]={fld:"PROMPT_738_736",grid:345};
   this.A709PrecoEmpresaId = "" ;
   this.Z709PrecoEmpresaId = "" ;
   this.O709PrecoEmpresaId = "" ;
   this.A710PrecoId = 0 ;
   this.Z710PrecoId = 0 ;
   this.O710PrecoId = 0 ;
   this.A711PrecoDescricao = "" ;
   this.Z711PrecoDescricao = "" ;
   this.O711PrecoDescricao = "" ;
   this.A722PrecoTipo = "" ;
   this.Z722PrecoTipo = "" ;
   this.O722PrecoTipo = "" ;
   this.A3199PrecoCasasDecimais = 0 ;
   this.Z3199PrecoCasasDecimais = 0 ;
   this.O3199PrecoCasasDecimais = 0 ;
   this.A738PrecoVinculadoEmpresaId = "" ;
   this.Z738PrecoVinculadoEmpresaId = "" ;
   this.O738PrecoVinculadoEmpresaId = "" ;
   this.A736PrecoVinculadoId = 0 ;
   this.Z736PrecoVinculadoId = 0 ;
   this.O736PrecoVinculadoId = 0 ;
   this.A737PrecoVinculadoDescricao = "" ;
   this.Z737PrecoVinculadoDescricao = "" ;
   this.O737PrecoVinculadoDescricao = "" ;
   this.A4952PrecoVinculadoTipo = "" ;
   this.Z4952PrecoVinculadoTipo = "" ;
   this.O4952PrecoVinculadoTipo = "" ;
   this.A4342PrecoPCMargem = 0 ;
   this.Z4342PrecoPCMargem = 0 ;
   this.O4342PrecoPCMargem = 0 ;
   this.A4343PrecoSnCalcularSistema = "" ;
   this.Z4343PrecoSnCalcularSistema = "" ;
   this.O4343PrecoSnCalcularSistema = "" ;
   this.A4345PrecoDescontoMax = 0 ;
   this.Z4345PrecoDescontoMax = 0 ;
   this.O4345PrecoDescontoMax = 0 ;
   this.A4346PrecoSnArredonda = "" ;
   this.Z4346PrecoSnArredonda = "" ;
   this.O4346PrecoSnArredonda = "" ;
   this.A8482PrecoTpOpeSeguro = "" ;
   this.Z8482PrecoTpOpeSeguro = "" ;
   this.O8482PrecoTpOpeSeguro = "" ;
   this.A8483PrecoTpOpeFrete = "" ;
   this.Z8483PrecoTpOpeFrete = "" ;
   this.O8483PrecoTpOpeFrete = "" ;
   this.A8484PrecoTpOpeOutDesp = "" ;
   this.Z8484PrecoTpOpeOutDesp = "" ;
   this.O8484PrecoTpOpeOutDesp = "" ;
   this.A8485PrecoTpOpeAcrescimo = "" ;
   this.Z8485PrecoTpOpeAcrescimo = "" ;
   this.O8485PrecoTpOpeAcrescimo = "" ;
   this.A8486PrecoTpOpeManuseio = "" ;
   this.Z8486PrecoTpOpeManuseio = "" ;
   this.O8486PrecoTpOpeManuseio = "" ;
   this.A8487PrecoTpOpeDesconto = "" ;
   this.Z8487PrecoTpOpeDesconto = "" ;
   this.O8487PrecoTpOpeDesconto = "" ;
   this.A8488PrecoTpOpePIS = "" ;
   this.Z8488PrecoTpOpePIS = "" ;
   this.O8488PrecoTpOpePIS = "" ;
   this.A8489PrecoTpOpeCOFINS = "" ;
   this.Z8489PrecoTpOpeCOFINS = "" ;
   this.O8489PrecoTpOpeCOFINS = "" ;
   this.A8490PrecoTpOpeIPI = "" ;
   this.Z8490PrecoTpOpeIPI = "" ;
   this.O8490PrecoTpOpeIPI = "" ;
   this.A8491PrecoTpOpeICMS = "" ;
   this.Z8491PrecoTpOpeICMS = "" ;
   this.O8491PrecoTpOpeICMS = "" ;
   this.A8492PrecoTpOpeICMSST = "" ;
   this.Z8492PrecoTpOpeICMSST = "" ;
   this.O8492PrecoTpOpeICMSST = "" ;
   this.A8493PrecoTpOpeICMSSTNaoDest = "" ;
   this.Z8493PrecoTpOpeICMSSTNaoDest = "" ;
   this.O8493PrecoTpOpeICMSSTNaoDest = "" ;
   this.A8494PrecoTpOpeDifICMS = "" ;
   this.Z8494PrecoTpOpeDifICMS = "" ;
   this.O8494PrecoTpOpeDifICMS = "" ;
   this.A8392PrecoTipoCalculo = "" ;
   this.Z8392PrecoTipoCalculo = "" ;
   this.O8392PrecoTipoCalculo = "" ;
   this.A8393PrecoVendaSnCusOpe = "" ;
   this.Z8393PrecoVendaSnCusOpe = "" ;
   this.O8393PrecoVendaSnCusOpe = "" ;
   this.A8394PrecoVendaSnPerda = "" ;
   this.Z8394PrecoVendaSnPerda = "" ;
   this.O8394PrecoVendaSnPerda = "" ;
   this.A8395PrecoVendaSnMargemLucro = "" ;
   this.Z8395PrecoVendaSnMargemLucro = "" ;
   this.O8395PrecoVendaSnMargemLucro = "" ;
   this.A8396PrecoVendaSnPIS = "" ;
   this.Z8396PrecoVendaSnPIS = "" ;
   this.O8396PrecoVendaSnPIS = "" ;
   this.A8397PrecoVendaSnCOFINS = "" ;
   this.Z8397PrecoVendaSnCOFINS = "" ;
   this.O8397PrecoVendaSnCOFINS = "" ;
   this.A8398PrecoVendaSnIR = "" ;
   this.Z8398PrecoVendaSnIR = "" ;
   this.O8398PrecoVendaSnIR = "" ;
   this.A8399PrecoVendaSnICMS = "" ;
   this.Z8399PrecoVendaSnICMS = "" ;
   this.O8399PrecoVendaSnICMS = "" ;
   this.A8400PrecoVendaSnICMSST = "" ;
   this.Z8400PrecoVendaSnICMSST = "" ;
   this.O8400PrecoVendaSnICMSST = "" ;
   this.A8401PrecoVendaSnDifICMS = "" ;
   this.Z8401PrecoVendaSnDifICMS = "" ;
   this.O8401PrecoVendaSnDifICMS = "" ;
   this.A8402PrecoVendaSnIPI = "" ;
   this.Z8402PrecoVendaSnIPI = "" ;
   this.O8402PrecoVendaSnIPI = "" ;
   this.A8403PrecoVendaPercCusOpe = 0 ;
   this.Z8403PrecoVendaPercCusOpe = 0 ;
   this.O8403PrecoVendaPercCusOpe = 0 ;
   this.A8404PrecoVendaPercPerda = 0 ;
   this.Z8404PrecoVendaPercPerda = 0 ;
   this.O8404PrecoVendaPercPerda = 0 ;
   this.A8405PrecoVendaPercIR = 0 ;
   this.Z8405PrecoVendaPercIR = 0 ;
   this.O8405PrecoVendaPercIR = 0 ;
   this.A3200PrecoUsuarioAlt = "" ;
   this.Z3200PrecoUsuarioAlt = "" ;
   this.O3200PrecoUsuarioAlt = "" ;
   this.A3201PrecoDataHoraAlt = gx.date.nullDate() ;
   this.Z3201PrecoDataHoraAlt = gx.date.nullDate() ;
   this.O3201PrecoDataHoraAlt = gx.date.nullDate() ;
   this.AV17Sistema = "" ;
   this.ZV17Sistema = "" ;
   this.OV17Sistema = "" ;
   this.AV15PrecoId = 0 ;
   this.AV8Logon = {} ;
   this.A709PrecoEmpresaId = "" ;
   this.A710PrecoId = 0 ;
   this.AV22LogPrecoEmpresaId = "" ;
   this.AV23LogPrecoId = 0 ;
   this.A711PrecoDescricao = "" ;
   this.A722PrecoTipo = "" ;
   this.A3199PrecoCasasDecimais = 0 ;
   this.A738PrecoVinculadoEmpresaId = "" ;
   this.A736PrecoVinculadoId = 0 ;
   this.A737PrecoVinculadoDescricao = "" ;
   this.A4952PrecoVinculadoTipo = "" ;
   this.A4342PrecoPCMargem = 0 ;
   this.A4343PrecoSnCalcularSistema = "" ;
   this.A4345PrecoDescontoMax = 0 ;
   this.A4346PrecoSnArredonda = "" ;
   this.A8482PrecoTpOpeSeguro = "" ;
   this.A8483PrecoTpOpeFrete = "" ;
   this.A8484PrecoTpOpeOutDesp = "" ;
   this.A8485PrecoTpOpeAcrescimo = "" ;
   this.A8486PrecoTpOpeManuseio = "" ;
   this.A8487PrecoTpOpeDesconto = "" ;
   this.A8488PrecoTpOpePIS = "" ;
   this.A8489PrecoTpOpeCOFINS = "" ;
   this.A8490PrecoTpOpeIPI = "" ;
   this.A8491PrecoTpOpeICMS = "" ;
   this.A8493PrecoTpOpeICMSSTNaoDest = "" ;
   this.A8494PrecoTpOpeDifICMS = "" ;
   this.A10601PrecoTpOpeFCP = "" ;
   this.A10602PrecoTpOpeFCPST = "" ;
   this.A10603PrecoTpOpeFCPSTRet = "" ;
   this.A10604PrecoTpOpeICMSDeson = "" ;
   this.A8392PrecoTipoCalculo = "" ;
   this.A8393PrecoVendaSnCusOpe = "" ;
   this.A8394PrecoVendaSnPerda = "" ;
   this.A8395PrecoVendaSnMargemLucro = "" ;
   this.A8396PrecoVendaSnPIS = "" ;
   this.A8397PrecoVendaSnCOFINS = "" ;
   this.A8398PrecoVendaSnIR = "" ;
   this.A8399PrecoVendaSnICMS = "" ;
   this.A8400PrecoVendaSnICMSST = "" ;
   this.A8401PrecoVendaSnDifICMS = "" ;
   this.A8402PrecoVendaSnIPI = "" ;
   this.A8403PrecoVendaPercCusOpe = 0 ;
   this.A8404PrecoVendaPercPerda = 0 ;
   this.A8405PrecoVendaPercIR = 0 ;
   this.A3200PrecoUsuarioAlt = "" ;
   this.A3201PrecoDataHoraAlt = gx.date.nullDate() ;
   this.A8492PrecoTpOpeICMSST = "" ;
   this.A11700PrecoCustoBaseEmpresaId = "" ;
   this.A11701PrecoCustoBaseId = 0 ;
   this.A11704PrecoCustoBaseDescricao = "" ;
   this.A11706PrecoCustoBaseTipo = "" ;
   this.A11702PrecoIndiceSigla = "" ;
   this.A11705PrecoIndiceDescricao = "" ;
   this.A11703PrecoOperacaoIndice = "" ;
   this.AV21lPrecos = {} ;
   this.AV24LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e125x345_client": ["ENTER", true] ,"e135x345_client": ["CANCEL", true] ,"e115x345_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV15PrecoId',fld:'vPRECOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_738_736", [40,45]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV22LogPrecoEmpresaId", "vLOGPRECOEMPRESAID", 0, "char");
   this.setVCMap("AV23LogPrecoId", "vLOGPRECOID", 0, "int");
   this.setVCMap("AV21lPrecos", "vLPRECOS", 0, "lPrecos");
   this.setVCMap("AV24LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("A10601PrecoTpOpeFCP", "PRECOTPOPEFCP", 0, "char");
   this.setVCMap("A10602PrecoTpOpeFCPST", "PRECOTPOPEFCPST", 0, "char");
   this.setVCMap("A10603PrecoTpOpeFCPSTRet", "PRECOTPOPEFCPSTRET", 0, "char");
   this.setVCMap("A10604PrecoTpOpeICMSDeson", "PRECOTPOPEICMSDESON", 0, "char");
   this.setVCMap("A11703PrecoOperacaoIndice", "PRECOOPERACAOINDICE", 0, "char");
   this.setVCMap("A11702PrecoIndiceSigla", "PRECOINDICESIGLA", 0, "char");
   this.setVCMap("A11700PrecoCustoBaseEmpresaId", "PRECOCUSTOBASEEMPRESAID", 0, "char");
   this.setVCMap("A11701PrecoCustoBaseId", "PRECOCUSTOBASEID", 0, "int");
   this.setVCMap("A11705PrecoIndiceDescricao", "PRECOINDICEDESCRICAO", 0, "svchar");
   this.setVCMap("A11704PrecoCustoBaseDescricao", "PRECOCUSTOBASEDESCRICAO", 0, "svchar");
   this.setVCMap("A11706PrecoCustoBaseTipo", "PRECOCUSTOBASETIPO", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV15PrecoId", "vPRECOID", 0, "int");
   this.InitStandaloneVars( );
   this.LvlOlds[ 345 ]= ["O8405PrecoVendaPercIR","O8404PrecoVendaPercPerda","O8403PrecoVendaPercCusOpe","O8402PrecoVendaSnIPI","O8401PrecoVendaSnDifICMS","O8400PrecoVendaSnICMSST","O8399PrecoVendaSnICMS","O8398PrecoVendaSnIR","O8397PrecoVendaSnCOFINS","O8396PrecoVendaSnPIS","O8395PrecoVendaSnMargemLucro","O8394PrecoVendaSnPerda","O8393PrecoVendaSnCusOpe","O8392PrecoTipoCalculo","O8494PrecoTpOpeDifICMS","O8493PrecoTpOpeICMSSTNaoDest","O8492PrecoTpOpeICMSST","O8491PrecoTpOpeICMS","O8490PrecoTpOpeIPI","O8489PrecoTpOpeCOFINS","O8488PrecoTpOpePIS","O8487PrecoTpOpeDesconto","O8486PrecoTpOpeManuseio","O8485PrecoTpOpeAcrescimo","O8484PrecoTpOpeOutDesp","O8483PrecoTpOpeFrete","O8482PrecoTpOpeSeguro","O4346PrecoSnArredonda","O4345PrecoDescontoMax","O4343PrecoSnCalcularSistema","O4342PrecoPCMargem","O736PrecoVinculadoId","O4952PrecoVinculadoTipo","O737PrecoVinculadoDescricao","O738PrecoVinculadoEmpresaId","O3199PrecoCasasDecimais","O722PrecoTipo","O711PrecoDescricao"] ;
});
gx.setParentObj(new tpreco());
