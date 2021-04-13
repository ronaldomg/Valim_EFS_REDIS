/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:38:31.86
*/
gx.evt.autoSkip = false;
gx.define('tbuscaentcfopcst', false, function () {
   this.ServerClass =  "tbuscaentcfopcst" ;
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
      this.AV29BuscaEntCfopCSTTipoTributacao=gx.fn.getControlValue("vBUSCAENTCFOPCSTTIPOTRIBUTACAO") ;
      this.A11263BuscaEntCfopCSTTrnEntDesc=gx.fn.getControlValue("BUSCAENTCFOPCSTTRNENTDESC") ;
      this.A11265BuscaEntCfopCSTCFOPForDescrica=gx.fn.getControlValue("BUSCAENTCFOPCSTCFOPFORDESCRICA") ;
      this.A11268BuscaEntCfopCSTCFOPDenDescrica=gx.fn.getControlValue("BUSCAENTCFOPCSTCFOPDENDESCRICA") ;
      this.A11264BuscaEntCfopCSTSTDescricao=gx.fn.getControlValue("BUSCAENTCFOPCSTSTDESCRICAO") ;
      this.AV35SnErroED=gx.fn.getControlValue("vSNERROED") ;
      this.AV36SnErroEF=gx.fn.getControlValue("vSNERROEF") ;
      this.AV32SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV22UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV39Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV38Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV7TransacaoEntradaFilialId=gx.fn.getIntegerValue("vTRANSACAOENTRADAFILIALID",'.') ;
   };
   this.Valid_Buscaentcfopcsttrnentcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BUSCAENTCFOPCSTTRNENTCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Buscaentcfopcsttipotributacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BUSCAENTCFOPCSTTIPOTRIBUTACAO");
         this.AnyError  = 0;
         if ( (""==this.A11257BuscaEntCfopCSTTipoTributacao) )
         {
            try {
               gxballoon.setError("Informe o tipo de Tributação");
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
   this.Valid_Buscaentcfopcsttrnentempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Buscaentcfopcsttrnentempid",["gx.O.A11255BuscaEntCfopCSTTrnEntEmpId", "gx.O.A11256BuscaEntCfopCSTTrnEntCodigo", "gx.O.AV9BuscaEntCfopCSTTrnEntDesc", "gx.O.A11263BuscaEntCfopCSTTrnEntDesc"],["A11263BuscaEntCfopCSTTrnEntDesc"]);
      return true;
   }
   this.Validv_Buscaentcfopcsttrnentdesc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBUSCAENTCFOPCSTTRNENTDESC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Buscaentcfopcstcfopdencodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Buscaentcfopcstcfopdencodigo",["gx.O.A11260BuscaEntCfopCSTCFOPDenCodigo", "gx.O.A11268BuscaEntCfopCSTCFOPDenDescrica", "gx.O.AV15CFOPDenEstDesc", "gx.O.AV35SnErroED"],["A11268BuscaEntCfopCSTCFOPDenDescrica", "AV15CFOPDenEstDesc", "AV35SnErroED"]);
      return true;
   }
   this.Valid_Buscaentcfopcstcfopforcodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Buscaentcfopcstcfopforcodigo",["gx.O.A11261BuscaEntCfopCSTCFOPForCodigo", "gx.O.A11265BuscaEntCfopCSTCFOPForDescrica", "gx.O.A11260BuscaEntCfopCSTCFOPDenCodigo", "gx.O.AV35SnErroED", "gx.O.AV36SnErroEF", "gx.O.AV16CFOPForEstDesc"],["A11265BuscaEntCfopCSTCFOPForDescrica", "AV16CFOPForEstDesc", "AV36SnErroEF"]);
      return true;
   }
   this.Valid_Buscaentcfopcststcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BUSCAENTCFOPCSTSTCODIGO");
         this.AnyError  = 0;
         try {
            if ( ! (""==this.A11259BuscaEntCfopCSTSTCodigo) )
            {
               this.A11258BuscaEntCfopCSTSTTipo =  this.AV12BuscaEntCfopCSTSTTipo  ;
            }
            else
            {
               if ( (""==this.A11259BuscaEntCfopCSTSTCodigo) )
               {
                  this.A11258BuscaEntCfopCSTSTTipo =  ""  ;
               }
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
   this.Valid_Buscaentcfopcststtipo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Buscaentcfopcststtipo",["gx.O.O11261BuscaEntCfopCSTCFOPForCodigo", "gx.O.O11260BuscaEntCfopCSTCFOPDenCodigo", "gx.O.O11259BuscaEntCfopCSTSTCodigo", "gx.O.O11258BuscaEntCfopCSTSTTipo", "gx.O.O11257BuscaEntCfopCSTTipoTributacao", "gx.O.A11258BuscaEntCfopCSTSTTipo", "gx.O.A11259BuscaEntCfopCSTSTCodigo", "gx.O.A11264BuscaEntCfopCSTSTDescricao", "gx.O.A11257BuscaEntCfopCSTTipoTributacao", "gx.O.A11260BuscaEntCfopCSTCFOPDenCodigo", "gx.O.A11261BuscaEntCfopCSTCFOPForCodigo", "gx.O.AV14CSTDescricao", "gx.O.AV32SnAlterou"],["A11264BuscaEntCfopCSTSTDescricao", "AV14CSTDescricao", "AV32SnAlterou"]);
      return true;
   }
   this.Validv_Sf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sd=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Buscaentcfopcststtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBUSCAENTCFOPCSTSTTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Buscaentcfopcsttrnentempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBUSCAENTCFOPCSTTRNENTEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Buscaentcfopcsttrnentcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBUSCAENTCFOPCSTTRNENTCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12g82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13g82_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14g82_client=function()
   {
      this.executeServerEvent("BUSCAENTCFOPCSTSTCODIGO.ISVALID", true, null, false, true);
   };
   this.e15g8825_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16g8825_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,23,25,26,29,31,32,35,37,38,39,40,43,46,48,50,59,60,61,62,63,64,65,66,68,70,72,73];
   this.GXLastCtrlId =73;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscaentcfopcsttrnentcodigo,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTTRNENTCODIGO",gxz:"Z11256BuscaEntCfopCSTTrnEntCodigo",gxold:"O11256BuscaEntCfopCSTTrnEntCodigo",gxvar:"A11256BuscaEntCfopCSTTrnEntCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11256BuscaEntCfopCSTTrnEntCodigo=Value},v2z:function(Value){gx.O.Z11256BuscaEntCfopCSTTrnEntCodigo=Value},v2c:function(){gx.fn.setControlValue("BUSCAENTCFOPCSTTRNENTCODIGO",gx.O.A11256BuscaEntCfopCSTTrnEntCodigo,0)},c2v:function(){gx.O.A11256BuscaEntCfopCSTTrnEntCodigo=this.val()},val:function(){return gx.fn.getControlValue("BUSCAENTCFOPCSTTRNENTCODIGO")},nac:function(){return !(""==this.AV11BuscaEntCfopCSTTrnEntCodigo)}};
   GXValidFnc[15]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Buscaentcfopcsttrnentdesc,isvalid:null,rgrid:[],fld:"vBUSCAENTCFOPCSTTRNENTDESC",gxz:"ZV9BuscaEntCfopCSTTrnEntDesc",gxold:"OV9BuscaEntCfopCSTTrnEntDesc",gxvar:"AV9BuscaEntCfopCSTTrnEntDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9BuscaEntCfopCSTTrnEntDesc=Value},v2z:function(Value){gx.O.ZV9BuscaEntCfopCSTTrnEntDesc=Value},v2c:function(){gx.fn.setControlValue("vBUSCAENTCFOPCSTTRNENTDESC",gx.O.AV9BuscaEntCfopCSTTrnEntDesc,0)},c2v:function(){gx.O.AV9BuscaEntCfopCSTTrnEntDesc=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAENTCFOPCSTTRNENTDESC")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscaentcfopcsttipotributacao,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTTIPOTRIBUTACAO",gxz:"Z11257BuscaEntCfopCSTTipoTributacao",gxold:"O11257BuscaEntCfopCSTTipoTributacao",gxvar:"A11257BuscaEntCfopCSTTipoTributacao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11257BuscaEntCfopCSTTipoTributacao=Value},v2z:function(Value){gx.O.Z11257BuscaEntCfopCSTTipoTributacao=Value},v2c:function(){gx.fn.setComboBoxValue("BUSCAENTCFOPCSTTIPOTRIBUTACAO",gx.O.A11257BuscaEntCfopCSTTipoTributacao)},c2v:function(){gx.O.A11257BuscaEntCfopCSTTipoTributacao=this.val()},val:function(){return gx.fn.getControlValue("BUSCAENTCFOPCSTTIPOTRIBUTACAO")},nac:function(){return !(""==this.AV29BuscaEntCfopCSTTipoTributacao)}};
   GXValidFnc[23]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscaentcfopcstcfopdencodigo,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTCFOPDENCODIGO",gxz:"Z11260BuscaEntCfopCSTCFOPDenCodigo",gxold:"O11260BuscaEntCfopCSTCFOPDenCodigo",gxvar:"A11260BuscaEntCfopCSTCFOPDenCodigo",ucs:[],op:[25,26],ip:[26,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11260BuscaEntCfopCSTCFOPDenCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11260BuscaEntCfopCSTCFOPDenCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BUSCAENTCFOPCSTCFOPDENCODIGO",gx.O.A11260BuscaEntCfopCSTCFOPDenCodigo,0)},c2v:function(){gx.O.A11260BuscaEntCfopCSTCFOPDenCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BUSCAENTCFOPCSTCFOPDENCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPDENESTDESC",gxz:"ZV15CFOPDenEstDesc",gxold:"OV15CFOPDenEstDesc",gxvar:"AV15CFOPDenEstDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CFOPDenEstDesc=Value},v2z:function(Value){gx.O.ZV15CFOPDenEstDesc=Value},v2c:function(){gx.fn.setControlValue("vCFOPDENESTDESC",gx.O.AV15CFOPDenEstDesc,0)},c2v:function(){gx.O.AV15CFOPDenEstDesc=this.val()},val:function(){return gx.fn.getControlValue("vCFOPDENESTDESC")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscaentcfopcstcfopforcodigo,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTCFOPFORCODIGO",gxz:"Z11261BuscaEntCfopCSTCFOPForCodigo",gxold:"O11261BuscaEntCfopCSTCFOPForCodigo",gxvar:"A11261BuscaEntCfopCSTCFOPForCodigo",ucs:[],op:[31,25,32],ip:[32,25,31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11261BuscaEntCfopCSTCFOPForCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11261BuscaEntCfopCSTCFOPForCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BUSCAENTCFOPCSTCFOPFORCODIGO",gx.O.A11261BuscaEntCfopCSTCFOPForCodigo,0)},c2v:function(){gx.O.A11261BuscaEntCfopCSTCFOPForCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BUSCAENTCFOPCSTCFOPFORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPFORESTDESC",gxz:"ZV16CFOPForEstDesc",gxold:"OV16CFOPForEstDesc",gxvar:"AV16CFOPForEstDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CFOPForEstDesc=Value},v2z:function(Value){gx.O.ZV16CFOPForEstDesc=Value},v2c:function(){gx.fn.setControlValue("vCFOPFORESTDESC",gx.O.AV16CFOPForEstDesc,0)},c2v:function(){gx.O.AV16CFOPForEstDesc=this.val()},val:function(){return gx.fn.getControlValue("vCFOPFORESTDESC")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscaentcfopcststcodigo,isvalid:'e14g82_client',rgrid:[],fld:"BUSCAENTCFOPCSTSTCODIGO",gxz:"Z11259BuscaEntCfopCSTSTCodigo",gxold:"O11259BuscaEntCfopCSTSTCodigo",gxvar:"A11259BuscaEntCfopCSTSTCodigo",ucs:[],op:[38],ip:[38,37,64],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11259BuscaEntCfopCSTSTCodigo=Value},v2z:function(Value){gx.O.Z11259BuscaEntCfopCSTSTCodigo=Value},v2c:function(){gx.fn.setControlValue("BUSCAENTCFOPCSTSTCODIGO",gx.O.A11259BuscaEntCfopCSTSTCodigo,0)},c2v:function(){gx.O.A11259BuscaEntCfopCSTSTCodigo=this.val()},val:function(){return gx.fn.getControlValue("BUSCAENTCFOPCSTSTCODIGO")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscaentcfopcststtipo,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTSTTIPO",gxz:"Z11258BuscaEntCfopCSTSTTipo",gxold:"O11258BuscaEntCfopCSTSTTipo",gxvar:"A11258BuscaEntCfopCSTSTTipo",ucs:[],op:[40],ip:[40,31,25,20,37,38],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11258BuscaEntCfopCSTSTTipo=Value},v2z:function(Value){gx.O.Z11258BuscaEntCfopCSTSTTipo=Value},v2c:function(){gx.fn.setComboBoxValue("BUSCAENTCFOPCSTSTTIPO",gx.O.A11258BuscaEntCfopCSTSTTipo)},c2v:function(){gx.O.A11258BuscaEntCfopCSTSTTipo=this.val()},val:function(){return gx.fn.getControlValue("BUSCAENTCFOPCSTSTTIPO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"PROMPT1",grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCSTDESCRICAO",gxz:"ZV14CSTDescricao",gxold:"OV14CSTDescricao",gxvar:"AV14CSTDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14CSTDescricao=Value},v2z:function(Value){gx.O.ZV14CSTDescricao=Value},v2c:function(){gx.fn.setControlValue("vCSTDESCRICAO",gx.O.AV14CSTDescricao,0)},c2v:function(){gx.O.AV14CSTDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCSTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLE4",grid:0};
   GXValidFnc[46]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTUSUARIOALT",gxz:"Z11266BuscaEntCfopCSTUsuarioAlt",gxold:"O11266BuscaEntCfopCSTUsuarioAlt",gxvar:"A11266BuscaEntCfopCSTUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11266BuscaEntCfopCSTUsuarioAlt=Value},v2z:function(Value){gx.O.Z11266BuscaEntCfopCSTUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("BUSCAENTCFOPCSTUSUARIOALT",gx.O.A11266BuscaEntCfopCSTUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11266BuscaEntCfopCSTUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("BUSCAENTCFOPCSTUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[50]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTDATAHORAALT",gxz:"Z11267BuscaEntCfopCSTDataHoraAlt",gxold:"O11267BuscaEntCfopCSTDataHoraAlt",gxvar:"A11267BuscaEntCfopCSTDataHoraAlt",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11267BuscaEntCfopCSTDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11267BuscaEntCfopCSTDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BUSCAENTCFOPCSTDATAHORAALT",gx.O.A11267BuscaEntCfopCSTDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11267BuscaEntCfopCSTDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("BUSCAENTCFOPCSTDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[59]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Buscaentcfopcsttrnentempid,isvalid:null,rgrid:[],fld:"BUSCAENTCFOPCSTTRNENTEMPID",gxz:"Z11255BuscaEntCfopCSTTrnEntEmpId",gxold:"O11255BuscaEntCfopCSTTrnEntEmpId",gxvar:"A11255BuscaEntCfopCSTTrnEntEmpId",ucs:[],op:[],ip:[15,14,60],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11255BuscaEntCfopCSTTrnEntEmpId=Value},v2z:function(Value){gx.O.Z11255BuscaEntCfopCSTTrnEntEmpId=Value},v2c:function(){gx.fn.setControlValue("BUSCAENTCFOPCSTTRNENTEMPID",gx.O.A11255BuscaEntCfopCSTTrnEntEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11255BuscaEntCfopCSTTrnEntEmpId=this.val()},val:function(){return gx.fn.getControlValue("BUSCAENTCFOPCSTTRNENTEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Sf,isvalid:null,rgrid:[],fld:"vSF",gxz:"ZV18SF",gxold:"OV18SF",gxvar:"AV18SF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18SF=Value},v2z:function(Value){gx.O.ZV18SF=Value},v2c:function(){gx.fn.setControlValue("vSF",gx.O.AV18SF,0)},c2v:function(){gx.O.AV18SF=this.val()},val:function(){return gx.fn.getControlValue("vSF")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Sd,isvalid:null,rgrid:[],fld:"vSD",gxz:"ZV19SD",gxold:"OV19SD",gxvar:"AV19SD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19SD=Value},v2z:function(Value){gx.O.ZV19SD=Value},v2c:function(){gx.fn.setControlValue("vSD",gx.O.AV19SD,0)},c2v:function(){gx.O.AV19SD=this.val()},val:function(){return gx.fn.getControlValue("vSD")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV20QtdeChar",gxold:"OV20QtdeChar",gxvar:"AV20QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV20QtdeChar,0)},c2v:function(){gx.O.AV20QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Buscaentcfopcststtipo,isvalid:null,rgrid:[],fld:"vBUSCAENTCFOPCSTSTTIPO",gxz:"ZV12BuscaEntCfopCSTSTTipo",gxold:"OV12BuscaEntCfopCSTSTTipo",gxvar:"AV12BuscaEntCfopCSTSTTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12BuscaEntCfopCSTSTTipo=Value},v2z:function(Value){gx.O.ZV12BuscaEntCfopCSTSTTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vBUSCAENTCFOPCSTSTTIPO",gx.O.AV12BuscaEntCfopCSTSTTipo)},c2v:function(){gx.O.AV12BuscaEntCfopCSTSTTipo=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAENTCFOPCSTSTTIPO")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"JS", format:2,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Buscaentcfopcsttrnentempid,isvalid:null,rgrid:[],fld:"vBUSCAENTCFOPCSTTRNENTEMPID",gxz:"ZV10BuscaEntCfopCSTTrnEntEmpId",gxold:"OV10BuscaEntCfopCSTTrnEntEmpId",gxvar:"AV10BuscaEntCfopCSTTrnEntEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10BuscaEntCfopCSTTrnEntEmpId=Value},v2z:function(Value){gx.O.ZV10BuscaEntCfopCSTTrnEntEmpId=Value},v2c:function(){gx.fn.setControlValue("vBUSCAENTCFOPCSTTRNENTEMPID",gx.O.AV10BuscaEntCfopCSTTrnEntEmpId,0)},c2v:function(){gx.O.AV10BuscaEntCfopCSTTrnEntEmpId=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAENTCFOPCSTTRNENTEMPID")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Buscaentcfopcsttrnentcodigo,isvalid:null,rgrid:[],fld:"vBUSCAENTCFOPCSTTRNENTCODIGO",gxz:"ZV11BuscaEntCfopCSTTrnEntCodigo",gxold:"OV11BuscaEntCfopCSTTrnEntCodigo",gxvar:"AV11BuscaEntCfopCSTTrnEntCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11BuscaEntCfopCSTTrnEntCodigo=Value},v2z:function(Value){gx.O.ZV11BuscaEntCfopCSTTrnEntCodigo=Value},v2c:function(){gx.fn.setControlValue("vBUSCAENTCFOPCSTTRNENTCODIGO",gx.O.AV11BuscaEntCfopCSTTrnEntCodigo,0)},c2v:function(){gx.O.AV11BuscaEntCfopCSTTrnEntCodigo=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAENTCFOPCSTTRNENTCODIGO")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"BTNHELP",grid:0};
   GXValidFnc[72]={fld:"PROMPT_11260",grid:825};
   GXValidFnc[73]={fld:"PROMPT_11261",grid:825};
   this.A11256BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.Z11256BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.O11256BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.AV9BuscaEntCfopCSTTrnEntDesc = "" ;
   this.ZV9BuscaEntCfopCSTTrnEntDesc = "" ;
   this.OV9BuscaEntCfopCSTTrnEntDesc = "" ;
   this.A11257BuscaEntCfopCSTTipoTributacao = "" ;
   this.Z11257BuscaEntCfopCSTTipoTributacao = "" ;
   this.O11257BuscaEntCfopCSTTipoTributacao = "" ;
   this.A11260BuscaEntCfopCSTCFOPDenCodigo = 0 ;
   this.Z11260BuscaEntCfopCSTCFOPDenCodigo = 0 ;
   this.O11260BuscaEntCfopCSTCFOPDenCodigo = 0 ;
   this.AV15CFOPDenEstDesc = "" ;
   this.ZV15CFOPDenEstDesc = "" ;
   this.OV15CFOPDenEstDesc = "" ;
   this.A11261BuscaEntCfopCSTCFOPForCodigo = 0 ;
   this.Z11261BuscaEntCfopCSTCFOPForCodigo = 0 ;
   this.O11261BuscaEntCfopCSTCFOPForCodigo = 0 ;
   this.AV16CFOPForEstDesc = "" ;
   this.ZV16CFOPForEstDesc = "" ;
   this.OV16CFOPForEstDesc = "" ;
   this.A11259BuscaEntCfopCSTSTCodigo = "" ;
   this.Z11259BuscaEntCfopCSTSTCodigo = "" ;
   this.O11259BuscaEntCfopCSTSTCodigo = "" ;
   this.A11258BuscaEntCfopCSTSTTipo = "" ;
   this.Z11258BuscaEntCfopCSTSTTipo = "" ;
   this.O11258BuscaEntCfopCSTSTTipo = "" ;
   this.AV14CSTDescricao = "" ;
   this.ZV14CSTDescricao = "" ;
   this.OV14CSTDescricao = "" ;
   this.A11266BuscaEntCfopCSTUsuarioAlt = "" ;
   this.Z11266BuscaEntCfopCSTUsuarioAlt = "" ;
   this.O11266BuscaEntCfopCSTUsuarioAlt = "" ;
   this.A11267BuscaEntCfopCSTDataHoraAlt = gx.date.nullDate() ;
   this.Z11267BuscaEntCfopCSTDataHoraAlt = gx.date.nullDate() ;
   this.O11267BuscaEntCfopCSTDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A11255BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.Z11255BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.O11255BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.AV18SF = "" ;
   this.ZV18SF = "" ;
   this.OV18SF = "" ;
   this.AV19SD = "" ;
   this.ZV19SD = "" ;
   this.OV19SD = "" ;
   this.AV20QtdeChar = 0 ;
   this.ZV20QtdeChar = 0 ;
   this.OV20QtdeChar = 0 ;
   this.AV12BuscaEntCfopCSTSTTipo = "" ;
   this.ZV12BuscaEntCfopCSTSTTipo = "" ;
   this.OV12BuscaEntCfopCSTSTTipo = "" ;
   this.AV10BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.ZV10BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.OV10BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.AV11BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.ZV11BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.OV11BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.AV22UsrCod = "" ;
   this.AV23EmpresaLogadaId = "" ;
   this.AV25Sistema = "" ;
   this.AV38Pgmname = "" ;
   this.AV39Pgmdesc = "" ;
   this.AV26MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV27Modulo = "" ;
   this.AV24Logon = {} ;
   this.AV33Tabela = "" ;
   this.AV7TransacaoEntradaFilialId = 0 ;
   this.AV12BuscaEntCfopCSTSTTipo = "" ;
   this.AV19SD = "" ;
   this.AV18SF = "" ;
   this.AV32SnAlterou = "" ;
   this.AV20QtdeChar = 0 ;
   this.AV30Entrada = [ ] ;
   this.AV31Saida = [ ] ;
   this.AV10BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.AV11BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.AV9BuscaEntCfopCSTTrnEntDesc = "" ;
   this.AV29BuscaEntCfopCSTTipoTributacao = "" ;
   this.A11255BuscaEntCfopCSTTrnEntEmpId = "" ;
   this.A11256BuscaEntCfopCSTTrnEntCodigo = "" ;
   this.A11257BuscaEntCfopCSTTipoTributacao = "" ;
   this.A11263BuscaEntCfopCSTTrnEntDesc = "" ;
   this.A11258BuscaEntCfopCSTSTTipo = "" ;
   this.AV16CFOPForEstDesc = "" ;
   this.AV15CFOPDenEstDesc = "" ;
   this.AV14CSTDescricao = "" ;
   this.AV35SnErroED = "" ;
   this.AV36SnErroEF = "" ;
   this.A11266BuscaEntCfopCSTUsuarioAlt = "" ;
   this.A11267BuscaEntCfopCSTDataHoraAlt = gx.date.nullDate() ;
   this.A11260BuscaEntCfopCSTCFOPDenCodigo = 0 ;
   this.A11268BuscaEntCfopCSTCFOPDenDescrica = "" ;
   this.A11261BuscaEntCfopCSTCFOPForCodigo = 0 ;
   this.A11265BuscaEntCfopCSTCFOPForDescrica = "" ;
   this.A11259BuscaEntCfopCSTSTCodigo = "" ;
   this.A11264BuscaEntCfopCSTSTDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12g82_client": ["'FECHAR'", true] ,"e13g82_client": ["AFTER TRN", true] ,"e14g82_client": ["BUSCAENTCFOPCSTSTCODIGO.ISVALID", true] ,"e15g8825_client": ["ENTER", true] ,"e16g8825_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV10BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV11BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV9BuscaEntCfopCSTTrnEntDesc',fld:'vBUSCAENTCFOPCSTTRNENTDESC'},{av:'AV29BuscaEntCfopCSTTipoTributacao',fld:'vBUSCAENTCFOPCSTTIPOTRIBUTACAO'},{av:'AV7TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV10BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'},{av:'AV11BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV9BuscaEntCfopCSTTrnEntDesc',fld:'vBUSCAENTCFOPCSTTRNENTDESC'}],[{av:'AV9BuscaEntCfopCSTTrnEntDesc',fld:'vBUSCAENTCFOPCSTTRNENTDESC'},{av:'AV11BuscaEntCfopCSTTrnEntCodigo',fld:'vBUSCAENTCFOPCSTTRNENTCODIGO'},{av:'AV10BuscaEntCfopCSTTrnEntEmpId',fld:'vBUSCAENTCFOPCSTTRNENTEMPID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["BUSCAENTCFOPCSTSTCODIGO.ISVALID"] = [[{av:'A11259BuscaEntCfopCSTSTCodigo',fld:'BUSCAENTCFOPCSTSTCODIGO'},{av:'AV23EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV7TransacaoEntradaFilialId',fld:'vTRANSACAOENTRADAFILIALID'}],[{av:'AV28BuscaEntCfopCSTSTCodigo',fld:'vBUSCAENTCFOPCSTSTCODIGO'},{av:'AV12BuscaEntCfopCSTSTTipo',fld:'vBUSCAENTCFOPCSTSTTIPO'},{av:'AV14CSTDescricao',fld:'vCSTDESCRICAO'}]];
   this.setPrompt("PROMPT1", [38,37]);
   this.setPrompt("PROMPT_11260", [25]);
   this.setPrompt("PROMPT_11261", [31]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV29BuscaEntCfopCSTTipoTributacao", "vBUSCAENTCFOPCSTTIPOTRIBUTACAO", 0, "char");
   this.setVCMap("A11263BuscaEntCfopCSTTrnEntDesc", "BUSCAENTCFOPCSTTRNENTDESC", 0, "svchar");
   this.setVCMap("A11265BuscaEntCfopCSTCFOPForDescrica", "BUSCAENTCFOPCSTCFOPFORDESCRICA", 0, "svchar");
   this.setVCMap("A11268BuscaEntCfopCSTCFOPDenDescrica", "BUSCAENTCFOPCSTCFOPDENDESCRICA", 0, "svchar");
   this.setVCMap("A11264BuscaEntCfopCSTSTDescricao", "BUSCAENTCFOPCSTSTDESCRICAO", 0, "svchar");
   this.setVCMap("AV35SnErroED", "vSNERROED", 0, "char");
   this.setVCMap("AV36SnErroEF", "vSNERROEF", 0, "char");
   this.setVCMap("AV32SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV22UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV39Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV38Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV7TransacaoEntradaFilialId", "vTRANSACAOENTRADAFILIALID", 0, "int");
   this.InitStandaloneVars( );
   this.LvlOlds[ 825 ]= ["O11261BuscaEntCfopCSTCFOPForCodigo","O11260BuscaEntCfopCSTCFOPDenCodigo","O11259BuscaEntCfopCSTSTCodigo","O11258BuscaEntCfopCSTSTTipo","O11257BuscaEntCfopCSTTipoTributacao"] ;
});
gx.setParentObj(new tbuscaentcfopcst());
