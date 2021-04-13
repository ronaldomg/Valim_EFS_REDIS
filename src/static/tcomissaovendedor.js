/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:28:50.42
*/
gx.evt.autoSkip = false;
gx.define('tcomissaovendedor', false, function () {
   this.ServerClass =  "tcomissaovendedor" ;
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
      this.AV18ComissaoVendedorEmpresaId=gx.fn.getControlValue("vCOMISSAOVENDEDOREMPRESAID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19ComissaoVendedorSeq=gx.fn.getIntegerValue("vCOMISSAOVENDEDORSEQ",'.') ;
      this.AV21ComissaoVendedorTpCobrEmpresaId=gx.fn.getControlValue("vCOMISSAOVENDEDORTPCOBREMPRESAID") ;
      this.AV20ComissaoVendedorVendEmpId=gx.fn.getControlValue("vCOMISSAOVENDEDORVENDEMPID") ;
      this.AV26SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A1219ComissaoVendedorPercentual=gx.fn.getDecimalValue("COMISSAOVENDEDORPERCENTUAL",'.',',') ;
      this.A9353ComissaoVendedorTpPercentual=gx.fn.getIntegerValue("COMISSAOVENDEDORTPPERCENTUAL",'.') ;
      this.AV31Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV30Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Comissaovendedorseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOVENDEDORSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Comissaovendedorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOVENDEDOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Comissaovendedorvendid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOVENDEDORVENDID");
         this.AnyError  = 0;
         if ( (0==this.A9296ComissaoVendedorVendId) )
         {
            try {
               gxballoon.setError("Informe o Código do Vendedor");
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
   this.Valid_Comissaovendedortpcobrformaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOVENDEDORTPCOBRFORMAID");
         this.AnyError  = 0;
         if ( (0==this.A9299ComissaoVendedorTpCobrFormaId) )
         {
            try {
               gxballoon.setError("Informe a Forma de Cobrança");
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
   this.Valid_Comissaovendedorvalorinicial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOVENDEDORVALORINICIAL");
         this.AnyError  = 0;
         if ( (0.0==this.A9302ComissaoVendedorValorInicial) )
         {
            try {
               gxballoon.setError("Informe o Valor Inicial");
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
   this.Valid_Comissaovendedorvalorfinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOVENDEDORVALORFINAL");
         this.AnyError  = 0;
         if ( (0.0==this.A9303ComissaoVendedorValorFinal) )
         {
            try {
               gxballoon.setError("Informe o Valor Final");
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
   this.Valid_Comissaovendedorpcdescinicial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOVENDEDORPCDESCINICIAL");
         this.AnyError  = 0;
         if ( (0.0==this.A9304ComissaoVendedorPcDescInicial) )
         {
            try {
               gxballoon.setError("Informe o Precentual de Desconto Inicial");
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
   this.Valid_Comissaovendedorpcdescfinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOVENDEDORPCDESCFINAL");
         this.AnyError  = 0;
         if ( (0.0==this.A9305ComissaoVendedorPcDescFinal) )
         {
            try {
               gxballoon.setError("Informe o Percentual de Desconto Final");
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
   this.Valid_Comissaovendedorvendempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Comissaovendedorvendempid",["gx.O.A9295ComissaoVendedorVendEmpId", "gx.O.A9296ComissaoVendedorVendId", "gx.O.A9297ComissaoVendedorVendNome"],["A9297ComissaoVendedorVendNome"]);
      return true;
   }
   this.Valid_Comissaovendedortpcobrempresai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOVENDEDORTPCOBREMPRESAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Comissaovendedortpcobrid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Comissaovendedortpcobrid",["gx.O.A1220ComissaoVendedorEmpresaId", "gx.O.A9306ComissaoVendedorSeq", "gx.O.A9295ComissaoVendedorVendEmpId", "gx.O.A9296ComissaoVendedorVendId", "gx.num.urlDecimal(gx.O.A9302ComissaoVendedorValorInicial,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9303ComissaoVendedorValorFinal,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9304ComissaoVendedorPcDescInicial,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9305ComissaoVendedorPcDescFinal,\'.\',\',\')", "gx.O.A9298ComissaoVendedorTpCobrEmpresaI", "gx.O.A9300ComissaoVendedorTpCobrId", "gx.O.A9299ComissaoVendedorTpCobrFormaId", "gx.O.A9301ComissaoVendedorTpCobrDescrica"],["A9301ComissaoVendedorTpCobrDescrica", ["PROMPT_9298","Link"]]);
      return true;
   }
   this.e122o2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132o2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142o699_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152o699_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,20,23,25,26,29,31,34,36,39,41,44,46,49,52,54,56,63,64,67,69,70,71,73,75,76,77];
   this.GXLastCtrlId =77;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Comissaovendedorseq,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORSEQ",gxz:"Z9306ComissaoVendedorSeq",gxold:"O9306ComissaoVendedorSeq",gxvar:"A9306ComissaoVendedorSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9306ComissaoVendedorSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9306ComissaoVendedorSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("COMISSAOVENDEDORSEQ",gx.O.A9306ComissaoVendedorSeq,0)},c2v:function(){gx.O.A9306ComissaoVendedorSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("COMISSAOVENDEDORSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Comissaovendedorvendid,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORVENDID",gxz:"Z9296ComissaoVendedorVendId",gxold:"O9296ComissaoVendedorVendId",gxvar:"A9296ComissaoVendedorVendId",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9296ComissaoVendedorVendId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9296ComissaoVendedorVendId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("COMISSAOVENDEDORVENDID",gx.O.A9296ComissaoVendedorVendId,0)},c2v:function(){gx.O.A9296ComissaoVendedorVendId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("COMISSAOVENDEDORVENDID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORVENDNOME",gxz:"Z9297ComissaoVendedorVendNome",gxold:"O9297ComissaoVendedorVendNome",gxvar:"A9297ComissaoVendedorVendNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9297ComissaoVendedorVendNome=Value},v2z:function(Value){gx.O.Z9297ComissaoVendedorVendNome=Value},v2c:function(){gx.fn.setControlValue("COMISSAOVENDEDORVENDNOME",gx.O.A9297ComissaoVendedorVendNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9297ComissaoVendedorVendNome=this.val()},val:function(){return gx.fn.getControlValue("COMISSAOVENDEDORVENDNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Comissaovendedortpcobrformaid,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORTPCOBRFORMAID",gxz:"Z9299ComissaoVendedorTpCobrFormaId",gxold:"O9299ComissaoVendedorTpCobrFormaId",gxvar:"A9299ComissaoVendedorTpCobrFormaId",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9299ComissaoVendedorTpCobrFormaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9299ComissaoVendedorTpCobrFormaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("COMISSAOVENDEDORTPCOBRFORMAID",gx.O.A9299ComissaoVendedorTpCobrFormaId,0)},c2v:function(){gx.O.A9299ComissaoVendedorTpCobrFormaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("COMISSAOVENDEDORTPCOBRFORMAID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORTPCOBRDESCRICA",gxz:"Z9301ComissaoVendedorTpCobrDescrica",gxold:"O9301ComissaoVendedorTpCobrDescrica",gxvar:"A9301ComissaoVendedorTpCobrDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9301ComissaoVendedorTpCobrDescrica=Value},v2z:function(Value){gx.O.Z9301ComissaoVendedorTpCobrDescrica=Value},v2c:function(){gx.fn.setControlValue("COMISSAOVENDEDORTPCOBRDESCRICA",gx.O.A9301ComissaoVendedorTpCobrDescrica,0)},c2v:function(){gx.O.A9301ComissaoVendedorTpCobrDescrica=this.val()},val:function(){return gx.fn.getControlValue("COMISSAOVENDEDORTPCOBRDESCRICA")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Comissaovendedorvalorinicial,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORVALORINICIAL",gxz:"Z9302ComissaoVendedorValorInicial",gxold:"O9302ComissaoVendedorValorInicial",gxvar:"A9302ComissaoVendedorValorInicial",ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9302ComissaoVendedorValorInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9302ComissaoVendedorValorInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COMISSAOVENDEDORVALORINICIAL",gx.O.A9302ComissaoVendedorValorInicial,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9302ComissaoVendedorValorInicial=this.val()},val:function(){return gx.fn.getDecimalValue("COMISSAOVENDEDORVALORINICIAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Comissaovendedorvalorfinal,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORVALORFINAL",gxz:"Z9303ComissaoVendedorValorFinal",gxold:"O9303ComissaoVendedorValorFinal",gxvar:"A9303ComissaoVendedorValorFinal",ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9303ComissaoVendedorValorFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9303ComissaoVendedorValorFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COMISSAOVENDEDORVALORFINAL",gx.O.A9303ComissaoVendedorValorFinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9303ComissaoVendedorValorFinal=this.val()},val:function(){return gx.fn.getDecimalValue("COMISSAOVENDEDORVALORFINAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Comissaovendedorpcdescinicial,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORPCDESCINICIAL",gxz:"Z9304ComissaoVendedorPcDescInicial",gxold:"O9304ComissaoVendedorPcDescInicial",gxvar:"A9304ComissaoVendedorPcDescInicial",ucs:[],op:[41],ip:[41],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9304ComissaoVendedorPcDescInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9304ComissaoVendedorPcDescInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COMISSAOVENDEDORPCDESCINICIAL",gx.O.A9304ComissaoVendedorPcDescInicial,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9304ComissaoVendedorPcDescInicial=this.val()},val:function(){return gx.fn.getDecimalValue("COMISSAOVENDEDORPCDESCINICIAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Comissaovendedorpcdescfinal,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORPCDESCFINAL",gxz:"Z9305ComissaoVendedorPcDescFinal",gxold:"O9305ComissaoVendedorPcDescFinal",gxvar:"A9305ComissaoVendedorPcDescFinal",ucs:[],op:[46],ip:[46],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9305ComissaoVendedorPcDescFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9305ComissaoVendedorPcDescFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COMISSAOVENDEDORPCDESCFINAL",gx.O.A9305ComissaoVendedorPcDescFinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9305ComissaoVendedorPcDescFinal=this.val()},val:function(){return gx.fn.getDecimalValue("COMISSAOVENDEDORPCDESCFINAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[49]={fld:"TABLE4",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORUSUARIOALT",gxz:"Z1137ComissaoVendedorUsuarioAlt",gxold:"O1137ComissaoVendedorUsuarioAlt",gxvar:"A1137ComissaoVendedorUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1137ComissaoVendedorUsuarioAlt=Value},v2z:function(Value){gx.O.Z1137ComissaoVendedorUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("COMISSAOVENDEDORUSUARIOALT",gx.O.A1137ComissaoVendedorUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1137ComissaoVendedorUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("COMISSAOVENDEDORUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORDATAHORAALT",gxz:"Z1210ComissaoVendedorDataHoraAlt",gxold:"O1210ComissaoVendedorDataHoraAlt",gxvar:"A1210ComissaoVendedorDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1210ComissaoVendedorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1210ComissaoVendedorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("COMISSAOVENDEDORDATAHORAALT",gx.O.A1210ComissaoVendedorDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1210ComissaoVendedorDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("COMISSAOVENDEDORDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[63]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Comissaovendedorvendempid,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORVENDEMPID",gxz:"Z9295ComissaoVendedorVendEmpId",gxold:"O9295ComissaoVendedorVendEmpId",gxvar:"A9295ComissaoVendedorVendEmpId",ucs:[],op:[20],ip:[20,19,63],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9295ComissaoVendedorVendEmpId=Value},v2z:function(Value){gx.O.Z9295ComissaoVendedorVendEmpId=Value},v2c:function(){gx.fn.setControlValue("COMISSAOVENDEDORVENDEMPID",gx.O.A9295ComissaoVendedorVendEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9295ComissaoVendedorVendEmpId=this.val()},val:function(){return gx.fn.getControlValue("COMISSAOVENDEDORVENDEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Comissaovendedorempresaid,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDOREMPRESAID",gxz:"Z1220ComissaoVendedorEmpresaId",gxold:"O1220ComissaoVendedorEmpresaId",gxvar:"A1220ComissaoVendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1220ComissaoVendedorEmpresaId=Value},v2z:function(Value){gx.O.Z1220ComissaoVendedorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("COMISSAOVENDEDOREMPRESAID",gx.O.A1220ComissaoVendedorEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1220ComissaoVendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("COMISSAOVENDEDOREMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Comissaovendedortpcobrempresai,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORTPCOBREMPRESAI",gxz:"Z9298ComissaoVendedorTpCobrEmpresaI",gxold:"O9298ComissaoVendedorTpCobrEmpresaI",gxvar:"A9298ComissaoVendedorTpCobrEmpresaI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9298ComissaoVendedorTpCobrEmpresaI=Value},v2z:function(Value){gx.O.Z9298ComissaoVendedorTpCobrEmpresaI=Value},v2c:function(){gx.fn.setControlValue("COMISSAOVENDEDORTPCOBREMPRESAI",gx.O.A9298ComissaoVendedorTpCobrEmpresaI,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9298ComissaoVendedorTpCobrEmpresaI=this.val()},val:function(){return gx.fn.getControlValue("COMISSAOVENDEDORTPCOBREMPRESAI")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[70]={fld:"JS", format:2,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Comissaovendedortpcobrid,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORTPCOBRID",gxz:"Z9300ComissaoVendedorTpCobrId",gxold:"O9300ComissaoVendedorTpCobrId",gxvar:"A9300ComissaoVendedorTpCobrId",ucs:[],op:[26],ip:[26,25,71,69],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9300ComissaoVendedorTpCobrId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9300ComissaoVendedorTpCobrId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("COMISSAOVENDEDORTPCOBRID",gx.O.A9300ComissaoVendedorTpCobrId,0)},c2v:function(){gx.O.A9300ComissaoVendedorTpCobrId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("COMISSAOVENDEDORTPCOBRID",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"BTNHELP",grid:0};
   GXValidFnc[75]={fld:"PROMPT_9296",grid:699};
   GXValidFnc[76]={fld:"PROMPT_9299",grid:699};
   GXValidFnc[77]={fld:"PROMPT_9298",grid:699};
   this.A9306ComissaoVendedorSeq = 0 ;
   this.Z9306ComissaoVendedorSeq = 0 ;
   this.O9306ComissaoVendedorSeq = 0 ;
   this.A9296ComissaoVendedorVendId = 0 ;
   this.Z9296ComissaoVendedorVendId = 0 ;
   this.O9296ComissaoVendedorVendId = 0 ;
   this.A9297ComissaoVendedorVendNome = "" ;
   this.Z9297ComissaoVendedorVendNome = "" ;
   this.O9297ComissaoVendedorVendNome = "" ;
   this.A9299ComissaoVendedorTpCobrFormaId = 0 ;
   this.Z9299ComissaoVendedorTpCobrFormaId = 0 ;
   this.O9299ComissaoVendedorTpCobrFormaId = 0 ;
   this.A9301ComissaoVendedorTpCobrDescrica = "" ;
   this.Z9301ComissaoVendedorTpCobrDescrica = "" ;
   this.O9301ComissaoVendedorTpCobrDescrica = "" ;
   this.A9302ComissaoVendedorValorInicial = 0 ;
   this.Z9302ComissaoVendedorValorInicial = 0 ;
   this.O9302ComissaoVendedorValorInicial = 0 ;
   this.A9303ComissaoVendedorValorFinal = 0 ;
   this.Z9303ComissaoVendedorValorFinal = 0 ;
   this.O9303ComissaoVendedorValorFinal = 0 ;
   this.A9304ComissaoVendedorPcDescInicial = 0 ;
   this.Z9304ComissaoVendedorPcDescInicial = 0 ;
   this.O9304ComissaoVendedorPcDescInicial = 0 ;
   this.A9305ComissaoVendedorPcDescFinal = 0 ;
   this.Z9305ComissaoVendedorPcDescFinal = 0 ;
   this.O9305ComissaoVendedorPcDescFinal = 0 ;
   this.A1137ComissaoVendedorUsuarioAlt = "" ;
   this.Z1137ComissaoVendedorUsuarioAlt = "" ;
   this.O1137ComissaoVendedorUsuarioAlt = "" ;
   this.A1210ComissaoVendedorDataHoraAlt = gx.date.nullDate() ;
   this.Z1210ComissaoVendedorDataHoraAlt = gx.date.nullDate() ;
   this.O1210ComissaoVendedorDataHoraAlt = gx.date.nullDate() ;
   this.A9295ComissaoVendedorVendEmpId = "" ;
   this.Z9295ComissaoVendedorVendEmpId = "" ;
   this.O9295ComissaoVendedorVendEmpId = "" ;
   this.A1220ComissaoVendedorEmpresaId = "" ;
   this.Z1220ComissaoVendedorEmpresaId = "" ;
   this.O1220ComissaoVendedorEmpresaId = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A9298ComissaoVendedorTpCobrEmpresaI = "" ;
   this.Z9298ComissaoVendedorTpCobrEmpresaI = "" ;
   this.O9298ComissaoVendedorTpCobrEmpresaI = "" ;
   this.A9300ComissaoVendedorTpCobrId = 0 ;
   this.Z9300ComissaoVendedorTpCobrId = 0 ;
   this.O9300ComissaoVendedorTpCobrId = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV30Pgmname = "" ;
   this.AV31Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20ComissaoVendedorVendEmpId = "" ;
   this.AV21ComissaoVendedorTpCobrEmpresaId = "" ;
   this.AV22Entrada = [ ] ;
   this.AV23Saida = [ ] ;
   this.AV26SnAlterou = "" ;
   this.AV18ComissaoVendedorEmpresaId = "" ;
   this.AV19ComissaoVendedorSeq = 0 ;
   this.A1220ComissaoVendedorEmpresaId = "" ;
   this.A9306ComissaoVendedorSeq = 0 ;
   this.A9298ComissaoVendedorTpCobrEmpresaI = "" ;
   this.A9295ComissaoVendedorVendEmpId = "" ;
   this.A1137ComissaoVendedorUsuarioAlt = "" ;
   this.A1210ComissaoVendedorDataHoraAlt = gx.date.nullDate() ;
   this.A9296ComissaoVendedorVendId = 0 ;
   this.A9297ComissaoVendedorVendNome = "" ;
   this.A9299ComissaoVendedorTpCobrFormaId = 0 ;
   this.A9300ComissaoVendedorTpCobrId = 0 ;
   this.A9301ComissaoVendedorTpCobrDescrica = "" ;
   this.A9302ComissaoVendedorValorInicial = 0 ;
   this.A9303ComissaoVendedorValorFinal = 0 ;
   this.A9304ComissaoVendedorPcDescInicial = 0 ;
   this.A9305ComissaoVendedorPcDescFinal = 0 ;
   this.A1219ComissaoVendedorPercentual = 0 ;
   this.A9353ComissaoVendedorTpPercentual = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e122o2_client": ["'FECHAR'", true] ,"e132o2_client": ["AFTER TRN", true] ,"e142o699_client": ["ENTER", true] ,"e152o699_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ComissaoVendedorEmpresaId',fld:'vCOMISSAOVENDEDOREMPRESAID'},{av:'AV19ComissaoVendedorSeq',fld:'vCOMISSAOVENDEDORSEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_9296", [19]);
   this.setPrompt("PROMPT_9299", [25]);
   this.setPrompt("PROMPT_9298", [69]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ComissaoVendedorEmpresaId", "vCOMISSAOVENDEDOREMPRESAID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19ComissaoVendedorSeq", "vCOMISSAOVENDEDORSEQ", 0, "int");
   this.setVCMap("AV21ComissaoVendedorTpCobrEmpresaId", "vCOMISSAOVENDEDORTPCOBREMPRESAID", 0, "char");
   this.setVCMap("AV20ComissaoVendedorVendEmpId", "vCOMISSAOVENDEDORVENDEMPID", 0, "char");
   this.setVCMap("AV26SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A1219ComissaoVendedorPercentual", "COMISSAOVENDEDORPERCENTUAL", 0, "decimal");
   this.setVCMap("A9353ComissaoVendedorTpPercentual", "COMISSAOVENDEDORTPPERCENTUAL", 0, "int");
   this.setVCMap("AV31Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV30Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 699 ]= ["O9305ComissaoVendedorPcDescFinal","O9304ComissaoVendedorPcDescInicial","O9303ComissaoVendedorValorFinal","O9302ComissaoVendedorValorInicial","O9300ComissaoVendedorTpCobrId","O9299ComissaoVendedorTpCobrFormaId","O9298ComissaoVendedorTpCobrEmpresaI","O9296ComissaoVendedorVendId","O9295ComissaoVendedorVendEmpId","O9306ComissaoVendedorSeq","O1220ComissaoVendedorEmpresaId"] ;
});
gx.setParentObj(new tcomissaovendedor());
