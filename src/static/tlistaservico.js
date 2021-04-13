/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:47:1.8
*/
gx.evt.autoSkip = false;
gx.define('tlistaservico', false, function () {
   this.ServerClass =  "tlistaservico" ;
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
      this.AV18ListaServicoId=gx.fn.getIntegerValue("vLISTASERVICOID",'.') ;
      this.A11720ListaServicoSitTriPISTipo=gx.fn.getControlValue("LISTASERVICOSITTRIPISTIPO") ;
      this.A11722ListaServicoSitTriCOFINSTipo=gx.fn.getControlValue("LISTASERVICOSITTRICOFINSTIPO") ;
      this.AV25TipoLancamentoEmpresaiD=gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID") ;
      this.A11724ListaServicoLanPISEmpId=gx.fn.getControlValue("LISTASERVICOLANPISEMPID") ;
      this.A11728ListaServicoLanCOFINSEmpId=gx.fn.getControlValue("LISTASERVICOLANCOFINSEMPID") ;
      this.A11732ListaServicoLanISSEmpId=gx.fn.getControlValue("LISTASERVICOLANISSEMPID") ;
      this.A11736ListaServicoLanINSSEmpId=gx.fn.getControlValue("LISTASERVICOLANINSSEMPID") ;
      this.A11740ListaServicoLanCSLLEmpId=gx.fn.getControlValue("LISTASERVICOLANCSLLEMPID") ;
      this.A11744ListaServicoLanIREmpId=gx.fn.getControlValue("LISTASERVICOLANIREMPID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A11734ListaServicoLanISSTipo=gx.fn.getControlValue("LISTASERVICOLANISSTIPO") ;
      this.A11735ListaServicoLanISSPagRec=gx.fn.getControlValue("LISTASERVICOLANISSPAGREC") ;
      this.A11742ListaServicoLanCSLLTipo=gx.fn.getControlValue("LISTASERVICOLANCSLLTIPO") ;
      this.A11743ListaServicoLanCSLLPagRec=gx.fn.getControlValue("LISTASERVICOLANCSLLPAGREC") ;
      this.A11738ListaServicoLanINSSTipo=gx.fn.getControlValue("LISTASERVICOLANINSSTIPO") ;
      this.A11739ListaServicoLanINSSPagRec=gx.fn.getControlValue("LISTASERVICOLANINSSPAGREC") ;
      this.A11746ListaServicoLanIRTipo=gx.fn.getControlValue("LISTASERVICOLANIRTIPO") ;
      this.A11747ListaServicoLanIRPagRec=gx.fn.getControlValue("LISTASERVICOLANIRPAGREC") ;
      this.A11726ListaServicoLanPISTipo=gx.fn.getControlValue("LISTASERVICOLANPISTIPO") ;
      this.A11727ListaServicoLanPISPagRec=gx.fn.getControlValue("LISTASERVICOLANPISPAGREC") ;
      this.A11730ListaServicoLanCOFINSTipo=gx.fn.getControlValue("LISTASERVICOLANCOFINSTIPO") ;
      this.A11731ListaServicoLanCOFINSPagRec=gx.fn.getControlValue("LISTASERVICOLANCOFINSPAGREC") ;
      this.A11721ListaServicoSitTriPISDescricao=gx.fn.getControlValue("LISTASERVICOSITTRIPISDESCRICAO") ;
      this.A11723ListaServicoSitTriCOFINSDescri=gx.fn.getControlValue("LISTASERVICOSITTRICOFINSDESCRI") ;
      this.AV27Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV26Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV23TipoCSTPIS=gx.fn.getControlValue("vTIPOCSTPIS") ;
      this.AV24TipoCSTCOFINS=gx.fn.getControlValue("vTIPOCSTCOFINS") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV20SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Listaservicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LISTASERVICOID");
         this.AnyError  = 0;
         if ( (0==this.A2983ListaServicoId) )
         {
            try {
               gxballoon.setError("Informe o código");
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
   this.Valid_Listaservicodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LISTASERVICODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2980ListaServicoDescricao) )
         {
            try {
               gxballoon.setError("Informe a descrição");
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
   this.Valid_Listaservicosittripiscodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Listaservicosittripiscodigo",["gx.O.A11718ListaServicoSitTriPISCodigo", "gx.O.A11720ListaServicoSitTriPISTipo", "gx.O.A11721ListaServicoSitTriPISDescricao"],["A11720ListaServicoSitTriPISTipo", "A11721ListaServicoSitTriPISDescricao"]);
      return true;
   }
   this.Valid_Listaservicosittricofinscodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Listaservicosittricofinscodigo",["gx.O.A11719ListaServicoSitTriCOFINSCodigo", "gx.O.A11722ListaServicoSitTriCOFINSTipo", "gx.O.A11723ListaServicoSitTriCOFINSDescri"],["A11722ListaServicoSitTriCOFINSTipo", "A11723ListaServicoSitTriCOFINSDescri"]);
      return true;
   }
   this.Valid_Listaservicoperciss=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LISTASERVICOPERCISS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Listaservicoperccsll=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LISTASERVICOPERCCSLL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Listaservicopercinss=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LISTASERVICOPERCINSS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Listaservicopercirrj=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LISTASERVICOPERCIRRJ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Listaservicopercpis=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LISTASERVICOPERCPIS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Listaservicoperccofins=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LISTASERVICOPERCCOFINS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Listaservicolanisscodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Listaservicolanisscodigo",["gx.O.AV25TipoLancamentoEmpresaiD", "gx.O.A11714ListaServicoLanISSCodigo", "gx.O.A11732ListaServicoLanISSEmpId", "gx.O.A11734ListaServicoLanISSTipo", "gx.O.A11735ListaServicoLanISSPagRec", "gx.O.A11733ListaServicoLanISSDescricao"],["A11732ListaServicoLanISSEmpId", "A11733ListaServicoLanISSDescricao", "A11734ListaServicoLanISSTipo", "A11735ListaServicoLanISSPagRec"]);
      return true;
   }
   this.Valid_Listaservicolancsllcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Listaservicolancsllcodigo",["gx.O.AV25TipoLancamentoEmpresaiD", "gx.O.A11716ListaServicoLanCSLLCodigo", "gx.O.A11740ListaServicoLanCSLLEmpId", "gx.O.A11742ListaServicoLanCSLLTipo", "gx.O.A11743ListaServicoLanCSLLPagRec", "gx.O.A11741ListaServicoLanCSLLDescricao"],["A11740ListaServicoLanCSLLEmpId", "A11741ListaServicoLanCSLLDescricao", "A11742ListaServicoLanCSLLTipo", "A11743ListaServicoLanCSLLPagRec"]);
      return true;
   }
   this.Valid_Listaservicolaninsscodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Listaservicolaninsscodigo",["gx.O.AV25TipoLancamentoEmpresaiD", "gx.O.A11715ListaServicoLanINSSCodigo", "gx.O.A11736ListaServicoLanINSSEmpId", "gx.O.A11738ListaServicoLanINSSTipo", "gx.O.A11739ListaServicoLanINSSPagRec", "gx.O.A11737ListaServicoLanINSSDescricao"],["A11736ListaServicoLanINSSEmpId", "A11737ListaServicoLanINSSDescricao", "A11738ListaServicoLanINSSTipo", "A11739ListaServicoLanINSSPagRec"]);
      return true;
   }
   this.Valid_Listaservicolanircodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Listaservicolanircodigo",["gx.O.AV25TipoLancamentoEmpresaiD", "gx.O.A11717ListaServicoLanIRCodigo", "gx.O.A11744ListaServicoLanIREmpId", "gx.O.A11746ListaServicoLanIRTipo", "gx.O.A11747ListaServicoLanIRPagRec", "gx.O.A11745ListaServicoLanIRDescricao"],["A11744ListaServicoLanIREmpId", "A11745ListaServicoLanIRDescricao", "A11746ListaServicoLanIRTipo", "A11747ListaServicoLanIRPagRec"]);
      return true;
   }
   this.Valid_Listaservicolanpiscodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Listaservicolanpiscodigo",["gx.O.AV25TipoLancamentoEmpresaiD", "gx.O.A11712ListaServicoLanPISCodigo", "gx.O.A11724ListaServicoLanPISEmpId", "gx.O.A11726ListaServicoLanPISTipo", "gx.O.A11727ListaServicoLanPISPagRec", "gx.O.A11725ListaServicoLanPISDescricao"],["A11724ListaServicoLanPISEmpId", "A11725ListaServicoLanPISDescricao", "A11726ListaServicoLanPISTipo", "A11727ListaServicoLanPISPagRec"]);
      return true;
   }
   this.Valid_Listaservicolancofinscodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Listaservicolancofinscodigo",["gx.O.AV25TipoLancamentoEmpresaiD", "gx.O.A11713ListaServicoLanCOFINSCodigo", "gx.O.A11728ListaServicoLanCOFINSEmpId", "gx.O.A11730ListaServicoLanCOFINSTipo", "gx.O.A11731ListaServicoLanCOFINSPagRec", "gx.O.A11729ListaServicoLanCOFINSDescricao"],["A11728ListaServicoLanCOFINSEmpId", "A11729ListaServicoLanCOFINSDescricao", "A11730ListaServicoLanCOFINSTipo", "A11731ListaServicoLanCOFINSPagRec"]);
      return true;
   }
   this.e126w2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136w2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146w387_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156w387_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,21,23,26,28,31,33,36,38,47,50,52,55,58,60,64,66,70,72,76,78,82,84,88,90,93,96,98,99,102,104,105,108,110,111,114,116,117,120,122,123,126,128,129,132,135,137,139,148,149,151,153,154,155,156,157,158,159,160];
   this.GXLastCtrlId =160;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE5",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicoid,isvalid:null,rgrid:[],fld:"LISTASERVICOID",gxz:"Z2983ListaServicoId",gxold:"O2983ListaServicoId",gxvar:"A2983ListaServicoId",ucs:[],op:[17],ip:[17],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2983ListaServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2983ListaServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LISTASERVICOID",gx.O.A2983ListaServicoId,0)},c2v:function(){gx.O.A2983ListaServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LISTASERVICOID",'.')},nac:function(){return !(0==this.AV18ListaServicoId)}};
   GXValidFnc[21]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:360,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Listaservicodescricao,isvalid:null,rgrid:[],fld:"LISTASERVICODESCRICAO",gxz:"Z2980ListaServicoDescricao",gxold:"O2980ListaServicoDescricao",gxvar:"A2980ListaServicoDescricao",ucs:[],op:[23],ip:[23],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2980ListaServicoDescricao=Value},v2z:function(Value){gx.O.Z2980ListaServicoDescricao=Value},v2c:function(){gx.fn.setControlValue("LISTASERVICODESCRICAO",gx.O.A2980ListaServicoDescricao,0)},c2v:function(){gx.O.A2980ListaServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("LISTASERVICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOCNAE",gxz:"Z11046ListaServicoCNAE",gxold:"O11046ListaServicoCNAE",gxvar:"A11046ListaServicoCNAE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11046ListaServicoCNAE=Value},v2z:function(Value){gx.O.Z11046ListaServicoCNAE=Value},v2c:function(){gx.fn.setControlValue("LISTASERVICOCNAE",gx.O.A11046ListaServicoCNAE,0)},c2v:function(){gx.O.A11046ListaServicoCNAE=this.val()},val:function(){return gx.fn.getControlValue("LISTASERVICOCNAE")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicosittripiscodigo,isvalid:null,rgrid:[],fld:"LISTASERVICOSITTRIPISCODIGO",gxz:"Z11718ListaServicoSitTriPISCodigo",gxold:"O11718ListaServicoSitTriPISCodigo",gxvar:"A11718ListaServicoSitTriPISCodigo",ucs:[],op:[],ip:[33],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11718ListaServicoSitTriPISCodigo=Value},v2z:function(Value){gx.O.Z11718ListaServicoSitTriPISCodigo=Value},v2c:function(){gx.fn.setControlValue("LISTASERVICOSITTRIPISCODIGO",gx.O.A11718ListaServicoSitTriPISCodigo,0)},c2v:function(){gx.O.A11718ListaServicoSitTriPISCodigo=this.val()},val:function(){return gx.fn.getControlValue("LISTASERVICOSITTRIPISCODIGO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicosittricofinscodigo,isvalid:null,rgrid:[],fld:"LISTASERVICOSITTRICOFINSCODIGO",gxz:"Z11719ListaServicoSitTriCOFINSCodigo",gxold:"O11719ListaServicoSitTriCOFINSCodigo",gxvar:"A11719ListaServicoSitTriCOFINSCodigo",ucs:[],op:[],ip:[38],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11719ListaServicoSitTriCOFINSCodigo=Value},v2z:function(Value){gx.O.Z11719ListaServicoSitTriCOFINSCodigo=Value},v2c:function(){gx.fn.setControlValue("LISTASERVICOSITTRICOFINSCODIGO",gx.O.A11719ListaServicoSitTriCOFINSCodigo,0)},c2v:function(){gx.O.A11719ListaServicoSitTriCOFINSCodigo=this.val()},val:function(){return gx.fn.getControlValue("LISTASERVICOSITTRICOFINSCODIGO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE6",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[55]={fld:"TABLE7",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicoperciss,isvalid:null,rgrid:[],fld:"LISTASERVICOPERCISS",gxz:"Z9276ListaServicoPercISS",gxold:"O9276ListaServicoPercISS",gxvar:"A9276ListaServicoPercISS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9276ListaServicoPercISS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9276ListaServicoPercISS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LISTASERVICOPERCISS",gx.O.A9276ListaServicoPercISS,4,',')},c2v:function(){gx.O.A9276ListaServicoPercISS=this.val()},val:function(){return gx.fn.getDecimalValue("LISTASERVICOPERCISS",'.',',')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicoperccsll,isvalid:null,rgrid:[],fld:"LISTASERVICOPERCCSLL",gxz:"Z9280ListaServicoPercCSLL",gxold:"O9280ListaServicoPercCSLL",gxvar:"A9280ListaServicoPercCSLL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9280ListaServicoPercCSLL=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9280ListaServicoPercCSLL=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LISTASERVICOPERCCSLL",gx.O.A9280ListaServicoPercCSLL,2,',')},c2v:function(){gx.O.A9280ListaServicoPercCSLL=this.val()},val:function(){return gx.fn.getDecimalValue("LISTASERVICOPERCCSLL",'.',',')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicopercinss,isvalid:null,rgrid:[],fld:"LISTASERVICOPERCINSS",gxz:"Z9277ListaServicoPercINSS",gxold:"O9277ListaServicoPercINSS",gxvar:"A9277ListaServicoPercINSS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9277ListaServicoPercINSS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9277ListaServicoPercINSS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LISTASERVICOPERCINSS",gx.O.A9277ListaServicoPercINSS,2,',')},c2v:function(){gx.O.A9277ListaServicoPercINSS=this.val()},val:function(){return gx.fn.getDecimalValue("LISTASERVICOPERCINSS",'.',',')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicopercirrj,isvalid:null,rgrid:[],fld:"LISTASERVICOPERCIRRJ",gxz:"Z9281ListaServicoPercIRRJ",gxold:"O9281ListaServicoPercIRRJ",gxvar:"A9281ListaServicoPercIRRJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9281ListaServicoPercIRRJ=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9281ListaServicoPercIRRJ=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LISTASERVICOPERCIRRJ",gx.O.A9281ListaServicoPercIRRJ,2,',')},c2v:function(){gx.O.A9281ListaServicoPercIRRJ=this.val()},val:function(){return gx.fn.getDecimalValue("LISTASERVICOPERCIRRJ",'.',',')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicopercpis,isvalid:null,rgrid:[],fld:"LISTASERVICOPERCPIS",gxz:"Z9278ListaServicoPercPIS",gxold:"O9278ListaServicoPercPIS",gxvar:"A9278ListaServicoPercPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9278ListaServicoPercPIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9278ListaServicoPercPIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LISTASERVICOPERCPIS",gx.O.A9278ListaServicoPercPIS,2,',')},c2v:function(){gx.O.A9278ListaServicoPercPIS=this.val()},val:function(){return gx.fn.getDecimalValue("LISTASERVICOPERCPIS",'.',',')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicoperccofins,isvalid:null,rgrid:[],fld:"LISTASERVICOPERCCOFINS",gxz:"Z9279ListaServicoPercCOFINS",gxold:"O9279ListaServicoPercCOFINS",gxvar:"A9279ListaServicoPercCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9279ListaServicoPercCOFINS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9279ListaServicoPercCOFINS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LISTASERVICOPERCCOFINS",gx.O.A9279ListaServicoPercCOFINS,2,',')},c2v:function(){gx.O.A9279ListaServicoPercCOFINS=this.val()},val:function(){return gx.fn.getDecimalValue("LISTASERVICOPERCCOFINS",'.',',')},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TABLE8",grid:0};
   GXValidFnc[96]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicolanisscodigo,isvalid:null,rgrid:[],fld:"LISTASERVICOLANISSCODIGO",gxz:"Z11714ListaServicoLanISSCodigo",gxold:"O11714ListaServicoLanISSCodigo",gxvar:"A11714ListaServicoLanISSCodigo",ucs:[],op:[98,99],ip:[99,98],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11714ListaServicoLanISSCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11714ListaServicoLanISSCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LISTASERVICOLANISSCODIGO",gx.O.A11714ListaServicoLanISSCodigo,0)},c2v:function(){gx.O.A11714ListaServicoLanISSCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LISTASERVICOLANISSCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOLANISSDESCRICAO",gxz:"Z11733ListaServicoLanISSDescricao",gxold:"O11733ListaServicoLanISSDescricao",gxvar:"A11733ListaServicoLanISSDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11733ListaServicoLanISSDescricao=Value},v2z:function(Value){gx.O.Z11733ListaServicoLanISSDescricao=Value},v2c:function(){gx.fn.setControlValue("LISTASERVICOLANISSDESCRICAO",gx.O.A11733ListaServicoLanISSDescricao,0)},c2v:function(){gx.O.A11733ListaServicoLanISSDescricao=this.val()},val:function(){return gx.fn.getControlValue("LISTASERVICOLANISSDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicolancsllcodigo,isvalid:null,rgrid:[],fld:"LISTASERVICOLANCSLLCODIGO",gxz:"Z11716ListaServicoLanCSLLCodigo",gxold:"O11716ListaServicoLanCSLLCodigo",gxvar:"A11716ListaServicoLanCSLLCodigo",ucs:[],op:[104,105],ip:[105,104],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11716ListaServicoLanCSLLCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11716ListaServicoLanCSLLCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LISTASERVICOLANCSLLCODIGO",gx.O.A11716ListaServicoLanCSLLCodigo,0)},c2v:function(){gx.O.A11716ListaServicoLanCSLLCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LISTASERVICOLANCSLLCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOLANCSLLDESCRICAO",gxz:"Z11741ListaServicoLanCSLLDescricao",gxold:"O11741ListaServicoLanCSLLDescricao",gxvar:"A11741ListaServicoLanCSLLDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11741ListaServicoLanCSLLDescricao=Value},v2z:function(Value){gx.O.Z11741ListaServicoLanCSLLDescricao=Value},v2c:function(){gx.fn.setControlValue("LISTASERVICOLANCSLLDESCRICAO",gx.O.A11741ListaServicoLanCSLLDescricao,0)},c2v:function(){gx.O.A11741ListaServicoLanCSLLDescricao=this.val()},val:function(){return gx.fn.getControlValue("LISTASERVICOLANCSLLDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicolaninsscodigo,isvalid:null,rgrid:[],fld:"LISTASERVICOLANINSSCODIGO",gxz:"Z11715ListaServicoLanINSSCodigo",gxold:"O11715ListaServicoLanINSSCodigo",gxvar:"A11715ListaServicoLanINSSCodigo",ucs:[],op:[110,111],ip:[111,110],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11715ListaServicoLanINSSCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11715ListaServicoLanINSSCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LISTASERVICOLANINSSCODIGO",gx.O.A11715ListaServicoLanINSSCodigo,0)},c2v:function(){gx.O.A11715ListaServicoLanINSSCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LISTASERVICOLANINSSCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOLANINSSDESCRICAO",gxz:"Z11737ListaServicoLanINSSDescricao",gxold:"O11737ListaServicoLanINSSDescricao",gxvar:"A11737ListaServicoLanINSSDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11737ListaServicoLanINSSDescricao=Value},v2z:function(Value){gx.O.Z11737ListaServicoLanINSSDescricao=Value},v2c:function(){gx.fn.setControlValue("LISTASERVICOLANINSSDESCRICAO",gx.O.A11737ListaServicoLanINSSDescricao,0)},c2v:function(){gx.O.A11737ListaServicoLanINSSDescricao=this.val()},val:function(){return gx.fn.getControlValue("LISTASERVICOLANINSSDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicolanircodigo,isvalid:null,rgrid:[],fld:"LISTASERVICOLANIRCODIGO",gxz:"Z11717ListaServicoLanIRCodigo",gxold:"O11717ListaServicoLanIRCodigo",gxvar:"A11717ListaServicoLanIRCodigo",ucs:[],op:[116,117],ip:[117,116],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11717ListaServicoLanIRCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11717ListaServicoLanIRCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LISTASERVICOLANIRCODIGO",gx.O.A11717ListaServicoLanIRCodigo,0)},c2v:function(){gx.O.A11717ListaServicoLanIRCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LISTASERVICOLANIRCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOLANIRDESCRICAO",gxz:"Z11745ListaServicoLanIRDescricao",gxold:"O11745ListaServicoLanIRDescricao",gxvar:"A11745ListaServicoLanIRDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11745ListaServicoLanIRDescricao=Value},v2z:function(Value){gx.O.Z11745ListaServicoLanIRDescricao=Value},v2c:function(){gx.fn.setControlValue("LISTASERVICOLANIRDESCRICAO",gx.O.A11745ListaServicoLanIRDescricao,0)},c2v:function(){gx.O.A11745ListaServicoLanIRDescricao=this.val()},val:function(){return gx.fn.getControlValue("LISTASERVICOLANIRDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[120]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[122]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicolanpiscodigo,isvalid:null,rgrid:[],fld:"LISTASERVICOLANPISCODIGO",gxz:"Z11712ListaServicoLanPISCodigo",gxold:"O11712ListaServicoLanPISCodigo",gxvar:"A11712ListaServicoLanPISCodigo",ucs:[],op:[122,123],ip:[123,122],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11712ListaServicoLanPISCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11712ListaServicoLanPISCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LISTASERVICOLANPISCODIGO",gx.O.A11712ListaServicoLanPISCodigo,0)},c2v:function(){gx.O.A11712ListaServicoLanPISCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LISTASERVICOLANPISCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[123]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOLANPISDESCRICAO",gxz:"Z11725ListaServicoLanPISDescricao",gxold:"O11725ListaServicoLanPISDescricao",gxvar:"A11725ListaServicoLanPISDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11725ListaServicoLanPISDescricao=Value},v2z:function(Value){gx.O.Z11725ListaServicoLanPISDescricao=Value},v2c:function(){gx.fn.setControlValue("LISTASERVICOLANPISDESCRICAO",gx.O.A11725ListaServicoLanPISDescricao,0)},c2v:function(){gx.O.A11725ListaServicoLanPISDescricao=this.val()},val:function(){return gx.fn.getControlValue("LISTASERVICOLANPISDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[128]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Listaservicolancofinscodigo,isvalid:null,rgrid:[],fld:"LISTASERVICOLANCOFINSCODIGO",gxz:"Z11713ListaServicoLanCOFINSCodigo",gxold:"O11713ListaServicoLanCOFINSCodigo",gxvar:"A11713ListaServicoLanCOFINSCodigo",ucs:[],op:[128,129],ip:[129,128],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11713ListaServicoLanCOFINSCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11713ListaServicoLanCOFINSCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LISTASERVICOLANCOFINSCODIGO",gx.O.A11713ListaServicoLanCOFINSCodigo,0)},c2v:function(){gx.O.A11713ListaServicoLanCOFINSCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LISTASERVICOLANCOFINSCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOLANCOFINSDESCRICAO",gxz:"Z11729ListaServicoLanCOFINSDescricao",gxold:"O11729ListaServicoLanCOFINSDescricao",gxvar:"A11729ListaServicoLanCOFINSDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11729ListaServicoLanCOFINSDescricao=Value},v2z:function(Value){gx.O.Z11729ListaServicoLanCOFINSDescricao=Value},v2c:function(){gx.fn.setControlValue("LISTASERVICOLANCOFINSDESCRICAO",gx.O.A11729ListaServicoLanCOFINSDescricao,0)},c2v:function(){gx.O.A11729ListaServicoLanCOFINSDescricao=this.val()},val:function(){return gx.fn.getControlValue("LISTASERVICOLANCOFINSDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TABLE4",grid:0};
   GXValidFnc[135]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOUSUARIOALT",gxz:"Z2981ListaServicoUsuarioAlt",gxold:"O2981ListaServicoUsuarioAlt",gxvar:"A2981ListaServicoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2981ListaServicoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2981ListaServicoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("LISTASERVICOUSUARIOALT",gx.O.A2981ListaServicoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2981ListaServicoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("LISTASERVICOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 137 , function() {
   });
   GXValidFnc[139]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICODATAHORAALT",gxz:"Z2982ListaServicoDataHoraAlt",gxold:"O2982ListaServicoDataHoraAlt",gxvar:"A2982ListaServicoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2982ListaServicoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2982ListaServicoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LISTASERVICODATAHORAALT",gx.O.A2982ListaServicoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2982ListaServicoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LISTASERVICODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 139 , function() {
   });
   GXValidFnc[148]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[149]={fld:"JSVAL", format:2,grid:0};
   GXValidFnc[151]={fld:"BTNHELP",grid:0};
   GXValidFnc[153]={fld:"PROMPT_11718",grid:387};
   GXValidFnc[154]={fld:"PROMPT_11719",grid:387};
   GXValidFnc[155]={fld:"PROMPT_11714",grid:387};
   GXValidFnc[156]={fld:"PROMPT_11716",grid:387};
   GXValidFnc[157]={fld:"PROMPT_11715",grid:387};
   GXValidFnc[158]={fld:"PROMPT_11717",grid:387};
   GXValidFnc[159]={fld:"PROMPT_11712",grid:387};
   GXValidFnc[160]={fld:"PROMPT_11713",grid:387};
   this.A2983ListaServicoId = 0 ;
   this.Z2983ListaServicoId = 0 ;
   this.O2983ListaServicoId = 0 ;
   this.A2980ListaServicoDescricao = "" ;
   this.Z2980ListaServicoDescricao = "" ;
   this.O2980ListaServicoDescricao = "" ;
   this.A11046ListaServicoCNAE = "" ;
   this.Z11046ListaServicoCNAE = "" ;
   this.O11046ListaServicoCNAE = "" ;
   this.A11718ListaServicoSitTriPISCodigo = "" ;
   this.Z11718ListaServicoSitTriPISCodigo = "" ;
   this.O11718ListaServicoSitTriPISCodigo = "" ;
   this.A11719ListaServicoSitTriCOFINSCodigo = "" ;
   this.Z11719ListaServicoSitTriCOFINSCodigo = "" ;
   this.O11719ListaServicoSitTriCOFINSCodigo = "" ;
   this.A9276ListaServicoPercISS = 0 ;
   this.Z9276ListaServicoPercISS = 0 ;
   this.O9276ListaServicoPercISS = 0 ;
   this.A9280ListaServicoPercCSLL = 0 ;
   this.Z9280ListaServicoPercCSLL = 0 ;
   this.O9280ListaServicoPercCSLL = 0 ;
   this.A9277ListaServicoPercINSS = 0 ;
   this.Z9277ListaServicoPercINSS = 0 ;
   this.O9277ListaServicoPercINSS = 0 ;
   this.A9281ListaServicoPercIRRJ = 0 ;
   this.Z9281ListaServicoPercIRRJ = 0 ;
   this.O9281ListaServicoPercIRRJ = 0 ;
   this.A9278ListaServicoPercPIS = 0 ;
   this.Z9278ListaServicoPercPIS = 0 ;
   this.O9278ListaServicoPercPIS = 0 ;
   this.A9279ListaServicoPercCOFINS = 0 ;
   this.Z9279ListaServicoPercCOFINS = 0 ;
   this.O9279ListaServicoPercCOFINS = 0 ;
   this.A11714ListaServicoLanISSCodigo = 0 ;
   this.Z11714ListaServicoLanISSCodigo = 0 ;
   this.O11714ListaServicoLanISSCodigo = 0 ;
   this.A11733ListaServicoLanISSDescricao = "" ;
   this.Z11733ListaServicoLanISSDescricao = "" ;
   this.O11733ListaServicoLanISSDescricao = "" ;
   this.A11716ListaServicoLanCSLLCodigo = 0 ;
   this.Z11716ListaServicoLanCSLLCodigo = 0 ;
   this.O11716ListaServicoLanCSLLCodigo = 0 ;
   this.A11741ListaServicoLanCSLLDescricao = "" ;
   this.Z11741ListaServicoLanCSLLDescricao = "" ;
   this.O11741ListaServicoLanCSLLDescricao = "" ;
   this.A11715ListaServicoLanINSSCodigo = 0 ;
   this.Z11715ListaServicoLanINSSCodigo = 0 ;
   this.O11715ListaServicoLanINSSCodigo = 0 ;
   this.A11737ListaServicoLanINSSDescricao = "" ;
   this.Z11737ListaServicoLanINSSDescricao = "" ;
   this.O11737ListaServicoLanINSSDescricao = "" ;
   this.A11717ListaServicoLanIRCodigo = 0 ;
   this.Z11717ListaServicoLanIRCodigo = 0 ;
   this.O11717ListaServicoLanIRCodigo = 0 ;
   this.A11745ListaServicoLanIRDescricao = "" ;
   this.Z11745ListaServicoLanIRDescricao = "" ;
   this.O11745ListaServicoLanIRDescricao = "" ;
   this.A11712ListaServicoLanPISCodigo = 0 ;
   this.Z11712ListaServicoLanPISCodigo = 0 ;
   this.O11712ListaServicoLanPISCodigo = 0 ;
   this.A11725ListaServicoLanPISDescricao = "" ;
   this.Z11725ListaServicoLanPISDescricao = "" ;
   this.O11725ListaServicoLanPISDescricao = "" ;
   this.A11713ListaServicoLanCOFINSCodigo = 0 ;
   this.Z11713ListaServicoLanCOFINSCodigo = 0 ;
   this.O11713ListaServicoLanCOFINSCodigo = 0 ;
   this.A11729ListaServicoLanCOFINSDescricao = "" ;
   this.Z11729ListaServicoLanCOFINSDescricao = "" ;
   this.O11729ListaServicoLanCOFINSDescricao = "" ;
   this.A2981ListaServicoUsuarioAlt = "" ;
   this.Z2981ListaServicoUsuarioAlt = "" ;
   this.O2981ListaServicoUsuarioAlt = "" ;
   this.A2982ListaServicoDataHoraAlt = gx.date.nullDate() ;
   this.Z2982ListaServicoDataHoraAlt = gx.date.nullDate() ;
   this.O2982ListaServicoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV26Pgmname = "" ;
   this.AV27Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV25TipoLancamentoEmpresaiD = "" ;
   this.AV19SnAlterou = "" ;
   this.AV23TipoCSTPIS = "" ;
   this.AV24TipoCSTCOFINS = "" ;
   this.AV18ListaServicoId = 0 ;
   this.AV20SnPrompt = "" ;
   this.A2983ListaServicoId = 0 ;
   this.A11720ListaServicoSitTriPISTipo = "" ;
   this.A11722ListaServicoSitTriCOFINSTipo = "" ;
   this.A11724ListaServicoLanPISEmpId = "" ;
   this.A11728ListaServicoLanCOFINSEmpId = "" ;
   this.A11732ListaServicoLanISSEmpId = "" ;
   this.A11736ListaServicoLanINSSEmpId = "" ;
   this.A11740ListaServicoLanCSLLEmpId = "" ;
   this.A11744ListaServicoLanIREmpId = "" ;
   this.A2981ListaServicoUsuarioAlt = "" ;
   this.A2982ListaServicoDataHoraAlt = gx.date.nullDate() ;
   this.A11046ListaServicoCNAE = "" ;
   this.A2980ListaServicoDescricao = "" ;
   this.A9276ListaServicoPercISS = 0 ;
   this.A9277ListaServicoPercINSS = 0 ;
   this.A9278ListaServicoPercPIS = 0 ;
   this.A9279ListaServicoPercCOFINS = 0 ;
   this.A9280ListaServicoPercCSLL = 0 ;
   this.A9281ListaServicoPercIRRJ = 0 ;
   this.A11718ListaServicoSitTriPISCodigo = "" ;
   this.A11721ListaServicoSitTriPISDescricao = "" ;
   this.A11719ListaServicoSitTriCOFINSCodigo = "" ;
   this.A11723ListaServicoSitTriCOFINSDescri = "" ;
   this.A11712ListaServicoLanPISCodigo = 0 ;
   this.A11725ListaServicoLanPISDescricao = "" ;
   this.A11726ListaServicoLanPISTipo = "" ;
   this.A11727ListaServicoLanPISPagRec = "" ;
   this.A11713ListaServicoLanCOFINSCodigo = 0 ;
   this.A11729ListaServicoLanCOFINSDescricao = "" ;
   this.A11730ListaServicoLanCOFINSTipo = "" ;
   this.A11731ListaServicoLanCOFINSPagRec = "" ;
   this.A11714ListaServicoLanISSCodigo = 0 ;
   this.A11733ListaServicoLanISSDescricao = "" ;
   this.A11734ListaServicoLanISSTipo = "" ;
   this.A11735ListaServicoLanISSPagRec = "" ;
   this.A11715ListaServicoLanINSSCodigo = 0 ;
   this.A11737ListaServicoLanINSSDescricao = "" ;
   this.A11738ListaServicoLanINSSTipo = "" ;
   this.A11739ListaServicoLanINSSPagRec = "" ;
   this.A11716ListaServicoLanCSLLCodigo = 0 ;
   this.A11741ListaServicoLanCSLLDescricao = "" ;
   this.A11742ListaServicoLanCSLLTipo = "" ;
   this.A11743ListaServicoLanCSLLPagRec = "" ;
   this.A11717ListaServicoLanIRCodigo = 0 ;
   this.A11745ListaServicoLanIRDescricao = "" ;
   this.A11746ListaServicoLanIRTipo = "" ;
   this.A11747ListaServicoLanIRPagRec = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126w2_client": ["'FECHAR'", true] ,"e136w2_client": ["AFTER TRN", true] ,"e146w387_client": ["ENTER", true] ,"e156w387_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ListaServicoId',fld:'vLISTASERVICOID'},{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'A2983ListaServicoId',fld:'LISTASERVICOID'}],[{av:'A2983ListaServicoId',fld:'LISTASERVICOID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'A2983ListaServicoId',fld:'LISTASERVICOID'}],[]];
   this.setPrompt("PROMPT_11718", [33]);
   this.setPrompt("PROMPT_11719", [38]);
   this.setPrompt("PROMPT_11714", [98]);
   this.setPrompt("PROMPT_11716", [104]);
   this.setPrompt("PROMPT_11715", [110]);
   this.setPrompt("PROMPT_11717", [116]);
   this.setPrompt("PROMPT_11712", [122]);
   this.setPrompt("PROMPT_11713", [128]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ListaServicoId", "vLISTASERVICOID", 0, "int");
   this.setVCMap("A11720ListaServicoSitTriPISTipo", "LISTASERVICOSITTRIPISTIPO", 0, "char");
   this.setVCMap("A11722ListaServicoSitTriCOFINSTipo", "LISTASERVICOSITTRICOFINSTIPO", 0, "char");
   this.setVCMap("AV25TipoLancamentoEmpresaiD", "vTIPOLANCAMENTOEMPRESAID", 0, "char");
   this.setVCMap("A11724ListaServicoLanPISEmpId", "LISTASERVICOLANPISEMPID", 0, "char");
   this.setVCMap("A11728ListaServicoLanCOFINSEmpId", "LISTASERVICOLANCOFINSEMPID", 0, "char");
   this.setVCMap("A11732ListaServicoLanISSEmpId", "LISTASERVICOLANISSEMPID", 0, "char");
   this.setVCMap("A11736ListaServicoLanINSSEmpId", "LISTASERVICOLANINSSEMPID", 0, "char");
   this.setVCMap("A11740ListaServicoLanCSLLEmpId", "LISTASERVICOLANCSLLEMPID", 0, "char");
   this.setVCMap("A11744ListaServicoLanIREmpId", "LISTASERVICOLANIREMPID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A11734ListaServicoLanISSTipo", "LISTASERVICOLANISSTIPO", 0, "char");
   this.setVCMap("A11735ListaServicoLanISSPagRec", "LISTASERVICOLANISSPAGREC", 0, "char");
   this.setVCMap("A11742ListaServicoLanCSLLTipo", "LISTASERVICOLANCSLLTIPO", 0, "char");
   this.setVCMap("A11743ListaServicoLanCSLLPagRec", "LISTASERVICOLANCSLLPAGREC", 0, "char");
   this.setVCMap("A11738ListaServicoLanINSSTipo", "LISTASERVICOLANINSSTIPO", 0, "char");
   this.setVCMap("A11739ListaServicoLanINSSPagRec", "LISTASERVICOLANINSSPAGREC", 0, "char");
   this.setVCMap("A11746ListaServicoLanIRTipo", "LISTASERVICOLANIRTIPO", 0, "char");
   this.setVCMap("A11747ListaServicoLanIRPagRec", "LISTASERVICOLANIRPAGREC", 0, "char");
   this.setVCMap("A11726ListaServicoLanPISTipo", "LISTASERVICOLANPISTIPO", 0, "char");
   this.setVCMap("A11727ListaServicoLanPISPagRec", "LISTASERVICOLANPISPAGREC", 0, "char");
   this.setVCMap("A11730ListaServicoLanCOFINSTipo", "LISTASERVICOLANCOFINSTIPO", 0, "char");
   this.setVCMap("A11731ListaServicoLanCOFINSPagRec", "LISTASERVICOLANCOFINSPAGREC", 0, "char");
   this.setVCMap("A11721ListaServicoSitTriPISDescricao", "LISTASERVICOSITTRIPISDESCRICAO", 0, "svchar");
   this.setVCMap("A11723ListaServicoSitTriCOFINSDescri", "LISTASERVICOSITTRICOFINSDESCRI", 0, "svchar");
   this.setVCMap("AV27Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV26Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV23TipoCSTPIS", "vTIPOCSTPIS", 0, "char");
   this.setVCMap("AV24TipoCSTCOFINS", "vTIPOCSTCOFINS", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV20SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 387 ]= ["O11713ListaServicoLanCOFINSCodigo","O11712ListaServicoLanPISCodigo","O11717ListaServicoLanIRCodigo","O11715ListaServicoLanINSSCodigo","O11716ListaServicoLanCSLLCodigo","O11714ListaServicoLanISSCodigo","O11719ListaServicoSitTriCOFINSCodigo","O11718ListaServicoSitTriPISCodigo","O2980ListaServicoDescricao","O9281ListaServicoPercIRRJ","O9280ListaServicoPercCSLL","O9279ListaServicoPercCOFINS","O9278ListaServicoPercPIS","O9277ListaServicoPercINSS","O9276ListaServicoPercISS","O2983ListaServicoId"] ;
});
gx.setParentObj(new tlistaservico());
