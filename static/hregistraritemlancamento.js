/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:3:44.94
*/
gx.evt.autoSkip = false;
gx.define('hregistraritemlancamento', false, function () {
   this.ServerClass =  "hregistraritemlancamento" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("7", "'CENCUSTODEBITO'");
   this.addKeyListener("8", "'CENCUSTOCREDITO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV37LancamentoContabilData=gx.fn.getDateValue("vLANCAMENTOCONTABILDATA") ;
      this.AV39TransacaoContabilId=gx.fn.getControlValue("vTRANSACAOCONTABILID") ;
      this.AV60LancamentoContabilEstorno=gx.fn.getIntegerValue("vLANCAMENTOCONTABILESTORNO",'.') ;
      this.AV82DataReversao=gx.fn.getDateValue("vDATAREVERSAO") ;
      this.AV85Tela=gx.fn.getControlValue("vTELA") ;
   };
   this.Validv_Historicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Lancamentocontabilid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLANCAMENTOCONTABILID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Stcontadeb=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSTCONTADEB");
         this.AnyError  = 0;
         if ( ! ( this.AV54StContaDeb == "I" || this.AV54StContaDeb == "A" ) )
         {
            try {
               gxballoon.setError("Campo StContaDeb fora do intervalo");
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
   this.Validv_Tplancamdeb=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTPLANCAMDEB");
         this.AnyError  = 0;
         if ( ! ( this.AV23TpLancamDeb == "C" || this.AV23TpLancamDeb == "E" || this.AV23TpLancamDeb == "N" ) )
         {
            try {
               gxballoon.setError("Campo TpLancamDeb fora do intervalo");
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
   this.Validv_Empresapadraohistorico=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOHISTORICO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tplancamcre=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTPLANCAMCRE");
         this.AnyError  = 0;
         if ( ! ( this.AV42TpLancamCre == "C" || this.AV42TpLancamCre == "E" || this.AV42TpLancamCre == "N" ) )
         {
            try {
               gxballoon.setError("Campo TpLancamCre fora do intervalo");
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
   this.Validv_Stcontacre=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSTCONTACRE");
         this.AnyError  = 0;
         if ( ! ( this.AV53StContaCre == "I" || this.AV53StContaCre == "A" ) )
         {
            try {
               gxballoon.setError("Campo StContaCre fora do intervalo");
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
   this.Validv_Seqdebito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQDEBITO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Seqcredito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQCREDITO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e113n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e153n2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e123n2_client=function()
   {
      this.executeServerEvent("'CENCUSTODEBITO'", false, null, false, false);
   };
   this.e133n2_client=function()
   {
      this.executeServerEvent("'CENCUSTOCREDITO'", false, null, false, false);
   };
   this.e183n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,33,36,38,41,42,44,46,49,51,52,55,58,65,68,70,73,74,76,78,81,83,84,89,92,94,95,99,105,108,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130];
   this.GXLastCtrlId =130;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLANCAMENTO",gxz:"ZV18ValorLancamento",gxold:"OV18ValorLancamento",gxvar:"AV18ValorLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ValorLancamento=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV18ValorLancamento=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORLANCAMENTO",gx.O.AV18ValorLancamento,2,',')},c2v:function(){gx.O.AV18ValorLancamento=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORLANCAMENTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TXTDATA", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATALANCAMENTO",gxz:"ZV88DataLancamento",gxold:"OV88DataLancamento",gxvar:"AV88DataLancamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88DataLancamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV88DataLancamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATALANCAMENTO",gx.O.AV88DataLancamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV88DataLancamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATALANCAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLE7",grid:0};
   GXValidFnc[36]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[38]={fld:"TABLE11",grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORDEB",gxz:"ZV16TradutorDeb",gxold:"OV16TradutorDeb",gxvar:"AV16TradutorDeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TradutorDeb=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16TradutorDeb=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORDEB",gx.O.AV16TradutorDeb,0)},c2v:function(){gx.O.AV16TradutorDeb=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORDEB",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"IMGCCONTDEB",grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTADEB",gxz:"ZV21ContaDeb",gxold:"OV21ContaDeb",gxvar:"AV21ContaDeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ContaDeb=Value},v2z:function(Value){gx.O.ZV21ContaDeb=Value},v2c:function(){gx.fn.setControlValue("vCONTADEB",gx.O.AV21ContaDeb,0)},c2v:function(){gx.O.AV21ContaDeb=this.val()},val:function(){return gx.fn.getControlValue("vCONTADEB")},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTANOMEDEB",gxz:"ZV22ContaNomeDeb",gxold:"OV22ContaNomeDeb",gxvar:"AV22ContaNomeDeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ContaNomeDeb=Value},v2z:function(Value){gx.O.ZV22ContaNomeDeb=Value},v2c:function(){gx.fn.setControlValue("vCONTANOMEDEB",gx.O.AV22ContaNomeDeb,0)},c2v:function(){gx.O.AV22ContaNomeDeb=this.val()},val:function(){return gx.fn.getControlValue("vCONTANOMEDEB")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADEBID",gxz:"ZV17PessoaDebId",gxold:"OV17PessoaDebId",gxvar:"AV17PessoaDebId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PessoaDebId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PessoaDebId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOADEBID",gx.O.AV17PessoaDebId,0)},c2v:function(){gx.O.AV17PessoaDebId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOADEBID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADEBNOME",gxz:"ZV34PessoaDebNome",gxold:"OV34PessoaDebNome",gxvar:"AV34PessoaDebNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34PessoaDebNome=Value},v2z:function(Value){gx.O.ZV34PessoaDebNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOADEBNOME",gx.O.AV34PessoaDebNome,0)},c2v:function(){gx.O.AV34PessoaDebNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOADEBNOME")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TABLE8",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[65]={fld:"TABLE9",grid:0};
   GXValidFnc[68]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[70]={fld:"TABLE12",grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORCRE",gxz:"ZV43TradutorCre",gxold:"OV43TradutorCre",gxvar:"AV43TradutorCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43TradutorCre=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43TradutorCre=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORCRE",gx.O.AV43TradutorCre,0)},c2v:function(){gx.O.AV43TradutorCre=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORCRE",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"IMGCCONTCRE",grid:0};
   GXValidFnc[76]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACRE",gxz:"ZV40ContaCre",gxold:"OV40ContaCre",gxvar:"AV40ContaCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ContaCre=Value},v2z:function(Value){gx.O.ZV40ContaCre=Value},v2c:function(){gx.fn.setControlValue("vCONTACRE",gx.O.AV40ContaCre,0)},c2v:function(){gx.O.AV40ContaCre=this.val()},val:function(){return gx.fn.getControlValue("vCONTACRE")},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTANOMECRE",gxz:"ZV41ContaNomeCre",gxold:"OV41ContaNomeCre",gxvar:"AV41ContaNomeCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ContaNomeCre=Value},v2z:function(Value){gx.O.ZV41ContaNomeCre=Value},v2c:function(){gx.fn.setControlValue("vCONTANOMECRE",gx.O.AV41ContaNomeCre,0)},c2v:function(){gx.O.AV41ContaNomeCre=this.val()},val:function(){return gx.fn.getControlValue("vCONTANOMECRE")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACREID",gxz:"ZV45PessoaCreId",gxold:"OV45PessoaCreId",gxvar:"AV45PessoaCreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45PessoaCreId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45PessoaCreId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOACREID",gx.O.AV45PessoaCreId,0)},c2v:function(){gx.O.AV45PessoaCreId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOACREID",'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACRENOME",gxz:"ZV44PessoaCreNome",gxold:"OV44PessoaCreNome",gxvar:"AV44PessoaCreNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44PessoaCreNome=Value},v2z:function(Value){gx.O.ZV44PessoaCreNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOACRENOME",gx.O.AV44PessoaCreNome,0)},c2v:function(){gx.O.AV44PessoaCreNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACRENOME")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TABLE10",grid:0};
   GXValidFnc[92]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Historicoid,isvalid:null,rgrid:[],fld:"vHISTORICOID",gxz:"ZV19HistoricoId",gxold:"OV19HistoricoId",gxvar:"AV19HistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19HistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19HistoricoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOID",gx.O.AV19HistoricoId,0)},c2v:function(){gx.O.AV19HistoricoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOID",'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Lancamentocontabilid,isvalid:null,rgrid:[],fld:"vLANCAMENTOCONTABILID",gxz:"ZV38LancamentoContabilId",gxold:"OV38LancamentoContabilId",gxvar:"AV38LancamentoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38LancamentoContabilId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILID",gx.O.AV38LancamentoContabilId,0)},c2v:function(){gx.O.AV38LancamentoContabilId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCONTABILID",'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"svchar",len:180,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICODESCRICAO",gxz:"ZV20HistoricoDescricao",gxold:"OV20HistoricoDescricao",gxvar:"AV20HistoricoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20HistoricoDescricao=Value},v2z:function(Value){gx.O.ZV20HistoricoDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICODESCRICAO",gx.O.AV20HistoricoDescricao,0)},c2v:function(){gx.O.AV20HistoricoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[105]={fld:"TABLE6",grid:0};
   GXValidFnc[108]={fld:"JS", format:2,grid:0};
   GXValidFnc[113]={fld:"BTNHELP",grid:0};
   GXValidFnc[114]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Stcontadeb,isvalid:null,rgrid:[],fld:"vSTCONTADEB",gxz:"ZV54StContaDeb",gxold:"OV54StContaDeb",gxvar:"AV54StContaDeb",ucs:[],op:[114],ip:[114],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV54StContaDeb=Value},v2z:function(Value){gx.O.ZV54StContaDeb=Value},v2c:function(){gx.fn.setComboBoxValue("vSTCONTADEB",gx.O.AV54StContaDeb);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV54StContaDeb=this.val()},val:function(){return gx.fn.getControlValue("vSTCONTADEB")},nac:gx.falseFn};
   this.declareDomainHdlr( 114 , function() {
   });
   GXValidFnc[115]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tplancamdeb,isvalid:null,rgrid:[],fld:"vTPLANCAMDEB",gxz:"ZV23TpLancamDeb",gxold:"OV23TpLancamDeb",gxvar:"AV23TpLancamDeb",ucs:[],op:[115],ip:[115],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23TpLancamDeb=Value},v2z:function(Value){gx.O.ZV23TpLancamDeb=Value},v2c:function(){gx.fn.setComboBoxValue("vTPLANCAMDEB",gx.O.AV23TpLancamDeb)},c2v:function(){gx.O.AV23TpLancamDeb=this.val()},val:function(){return gx.fn.getControlValue("vTPLANCAMDEB")},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR",gxz:"ZV87QtdeCar",gxold:"OV87QtdeCar",gxvar:"AV87QtdeCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87QtdeCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV87QtdeCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR",gx.O.AV87QtdeCar,0)},c2v:function(){gx.O.AV87QtdeCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR",'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOPESSOA",gxz:"ZV31EmpresaPadraoPessoa",gxold:"OV31EmpresaPadraoPessoa",gxvar:"AV31EmpresaPadraoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EmpresaPadraoPessoa=Value},v2z:function(Value){gx.O.ZV31EmpresaPadraoPessoa=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOPESSOA",gx.O.AV31EmpresaPadraoPessoa,0)},c2v:function(){gx.O.AV31EmpresaPadraoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOPESSOA")},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCONTABIL",gxz:"ZV24EmpresaPadraoContabil",gxold:"OV24EmpresaPadraoContabil",gxvar:"AV24EmpresaPadraoContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24EmpresaPadraoContabil=Value},v2z:function(Value){gx.O.ZV24EmpresaPadraoContabil=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCONTABIL",gx.O.AV24EmpresaPadraoContabil,0)},c2v:function(){gx.O.AV24EmpresaPadraoContabil=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCONTABIL")},nac:gx.falseFn};
   GXValidFnc[119]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraohistorico,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOHISTORICO",gxz:"ZV28EmpresaPadraoHistorico",gxold:"OV28EmpresaPadraoHistorico",gxvar:"AV28EmpresaPadraoHistorico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EmpresaPadraoHistorico=Value},v2z:function(Value){gx.O.ZV28EmpresaPadraoHistorico=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOHISTORICO",gx.O.AV28EmpresaPadraoHistorico,0)},c2v:function(){gx.O.AV28EmpresaPadraoHistorico=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOHISTORICO")},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tplancamcre,isvalid:null,rgrid:[],fld:"vTPLANCAMCRE",gxz:"ZV42TpLancamCre",gxold:"OV42TpLancamCre",gxvar:"AV42TpLancamCre",ucs:[],op:[120],ip:[120],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV42TpLancamCre=Value},v2z:function(Value){gx.O.ZV42TpLancamCre=Value},v2c:function(){gx.fn.setComboBoxValue("vTPLANCAMCRE",gx.O.AV42TpLancamCre)},c2v:function(){gx.O.AV42TpLancamCre=this.val()},val:function(){return gx.fn.getControlValue("vTPLANCAMCRE")},nac:gx.falseFn};
   GXValidFnc[121]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORDEBANT",gxz:"ZV69TradutorDebAnt",gxold:"OV69TradutorDebAnt",gxvar:"AV69TradutorDebAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69TradutorDebAnt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69TradutorDebAnt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORDEBANT",gx.O.AV69TradutorDebAnt,0)},c2v:function(){gx.O.AV69TradutorDebAnt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORDEBANT",'.')},nac:gx.falseFn};
   GXValidFnc[122]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOANT",gxz:"ZV61HistoricoAnt",gxold:"OV61HistoricoAnt",gxvar:"AV61HistoricoAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61HistoricoAnt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61HistoricoAnt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOANT",gx.O.AV61HistoricoAnt,0)},c2v:function(){gx.O.AV61HistoricoAnt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOANT",'.')},nac:gx.falseFn};
   GXValidFnc[123]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOCONTABILTIPO",gxz:"ZV59TransacaoContabilTipo",gxold:"OV59TransacaoContabilTipo",gxvar:"AV59TransacaoContabilTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59TransacaoContabilTipo=Value},v2z:function(Value){gx.O.ZV59TransacaoContabilTipo=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCONTABILTIPO",gx.O.AV59TransacaoContabilTipo,0)},c2v:function(){gx.O.AV59TransacaoContabilTipo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCONTABILTIPO")},nac:gx.falseFn};
   GXValidFnc[124]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Stcontacre,isvalid:null,rgrid:[],fld:"vSTCONTACRE",gxz:"ZV53StContaCre",gxold:"OV53StContaCre",gxvar:"AV53StContaCre",ucs:[],op:[124],ip:[124],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV53StContaCre=Value},v2z:function(Value){gx.O.ZV53StContaCre=Value},v2c:function(){gx.fn.setComboBoxValue("vSTCONTACRE",gx.O.AV53StContaCre);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV53StContaCre=this.val()},val:function(){return gx.fn.getControlValue("vSTCONTACRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 124 , function() {
   });
   GXValidFnc[125]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORCREANT",gxz:"ZV70TradutorCreAnt",gxold:"OV70TradutorCreAnt",gxvar:"AV70TradutorCreAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70TradutorCreAnt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70TradutorCreAnt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORCREANT",gx.O.AV70TradutorCreAnt,0)},c2v:function(){gx.O.AV70TradutorCreAnt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORCREANT",'.')},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Seqdebito,isvalid:null,rgrid:[],fld:"vSEQDEBITO",gxz:"ZV50SeqDebito",gxold:"OV50SeqDebito",gxvar:"AV50SeqDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50SeqDebito=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50SeqDebito=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQDEBITO",gx.O.AV50SeqDebito,0)},c2v:function(){gx.O.AV50SeqDebito=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQDEBITO",'.')},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Seqcredito,isvalid:null,rgrid:[],fld:"vSEQCREDITO",gxz:"ZV51SeqCredito",gxold:"OV51SeqCredito",gxvar:"AV51SeqCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51SeqCredito=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51SeqCredito=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQCREDITO",gx.O.AV51SeqCredito,0)},c2v:function(){gx.O.AV51SeqCredito=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQCREDITO",'.')},nac:gx.falseFn};
   GXValidFnc[128]={fld:"PROMPT_PESSOADEBID",grid:0};
   GXValidFnc[129]={fld:"PROMPT_PESSOACREID",grid:0};
   GXValidFnc[130]={fld:"PROMPT_HISTORICOID",grid:0};
   this.AV18ValorLancamento = 0 ;
   this.ZV18ValorLancamento = 0 ;
   this.OV18ValorLancamento = 0 ;
   this.AV88DataLancamento = gx.date.nullDate() ;
   this.ZV88DataLancamento = gx.date.nullDate() ;
   this.OV88DataLancamento = gx.date.nullDate() ;
   this.AV16TradutorDeb = 0 ;
   this.ZV16TradutorDeb = 0 ;
   this.OV16TradutorDeb = 0 ;
   this.AV21ContaDeb = "" ;
   this.ZV21ContaDeb = "" ;
   this.OV21ContaDeb = "" ;
   this.AV22ContaNomeDeb = "" ;
   this.ZV22ContaNomeDeb = "" ;
   this.OV22ContaNomeDeb = "" ;
   this.AV17PessoaDebId = 0 ;
   this.ZV17PessoaDebId = 0 ;
   this.OV17PessoaDebId = 0 ;
   this.AV34PessoaDebNome = "" ;
   this.ZV34PessoaDebNome = "" ;
   this.OV34PessoaDebNome = "" ;
   this.AV43TradutorCre = 0 ;
   this.ZV43TradutorCre = 0 ;
   this.OV43TradutorCre = 0 ;
   this.AV40ContaCre = "" ;
   this.ZV40ContaCre = "" ;
   this.OV40ContaCre = "" ;
   this.AV41ContaNomeCre = "" ;
   this.ZV41ContaNomeCre = "" ;
   this.OV41ContaNomeCre = "" ;
   this.AV45PessoaCreId = 0 ;
   this.ZV45PessoaCreId = 0 ;
   this.OV45PessoaCreId = 0 ;
   this.AV44PessoaCreNome = "" ;
   this.ZV44PessoaCreNome = "" ;
   this.OV44PessoaCreNome = "" ;
   this.AV19HistoricoId = 0 ;
   this.ZV19HistoricoId = 0 ;
   this.OV19HistoricoId = 0 ;
   this.AV38LancamentoContabilId = 0 ;
   this.ZV38LancamentoContabilId = 0 ;
   this.OV38LancamentoContabilId = 0 ;
   this.AV20HistoricoDescricao = "" ;
   this.ZV20HistoricoDescricao = "" ;
   this.OV20HistoricoDescricao = "" ;
   this.AV54StContaDeb = "" ;
   this.ZV54StContaDeb = "" ;
   this.OV54StContaDeb = "" ;
   this.AV23TpLancamDeb = "" ;
   this.ZV23TpLancamDeb = "" ;
   this.OV23TpLancamDeb = "" ;
   this.AV87QtdeCar = 0 ;
   this.ZV87QtdeCar = 0 ;
   this.OV87QtdeCar = 0 ;
   this.AV31EmpresaPadraoPessoa = "" ;
   this.ZV31EmpresaPadraoPessoa = "" ;
   this.OV31EmpresaPadraoPessoa = "" ;
   this.AV24EmpresaPadraoContabil = "" ;
   this.ZV24EmpresaPadraoContabil = "" ;
   this.OV24EmpresaPadraoContabil = "" ;
   this.AV28EmpresaPadraoHistorico = "" ;
   this.ZV28EmpresaPadraoHistorico = "" ;
   this.OV28EmpresaPadraoHistorico = "" ;
   this.AV42TpLancamCre = "" ;
   this.ZV42TpLancamCre = "" ;
   this.OV42TpLancamCre = "" ;
   this.AV69TradutorDebAnt = 0 ;
   this.ZV69TradutorDebAnt = 0 ;
   this.OV69TradutorDebAnt = 0 ;
   this.AV61HistoricoAnt = 0 ;
   this.ZV61HistoricoAnt = 0 ;
   this.OV61HistoricoAnt = 0 ;
   this.AV59TransacaoContabilTipo = "" ;
   this.ZV59TransacaoContabilTipo = "" ;
   this.OV59TransacaoContabilTipo = "" ;
   this.AV53StContaCre = "" ;
   this.ZV53StContaCre = "" ;
   this.OV53StContaCre = "" ;
   this.AV70TradutorCreAnt = 0 ;
   this.ZV70TradutorCreAnt = 0 ;
   this.OV70TradutorCreAnt = 0 ;
   this.AV50SeqDebito = 0 ;
   this.ZV50SeqDebito = 0 ;
   this.OV50SeqDebito = 0 ;
   this.AV51SeqCredito = 0 ;
   this.ZV51SeqCredito = 0 ;
   this.OV51SeqCredito = 0 ;
   this.AV18ValorLancamento = 0 ;
   this.AV88DataLancamento = gx.date.nullDate() ;
   this.AV16TradutorDeb = 0 ;
   this.AV21ContaDeb = "" ;
   this.AV22ContaNomeDeb = "" ;
   this.AV17PessoaDebId = 0 ;
   this.AV34PessoaDebNome = "" ;
   this.AV43TradutorCre = 0 ;
   this.AV40ContaCre = "" ;
   this.AV41ContaNomeCre = "" ;
   this.AV45PessoaCreId = 0 ;
   this.AV44PessoaCreNome = "" ;
   this.AV19HistoricoId = 0 ;
   this.AV38LancamentoContabilId = 0 ;
   this.AV20HistoricoDescricao = "" ;
   this.AV54StContaDeb = "" ;
   this.AV23TpLancamDeb = "" ;
   this.AV87QtdeCar = 0 ;
   this.AV31EmpresaPadraoPessoa = "" ;
   this.AV24EmpresaPadraoContabil = "" ;
   this.AV28EmpresaPadraoHistorico = "" ;
   this.AV42TpLancamCre = "" ;
   this.AV69TradutorDebAnt = 0 ;
   this.AV61HistoricoAnt = 0 ;
   this.AV59TransacaoContabilTipo = "" ;
   this.AV53StContaCre = "" ;
   this.AV70TradutorCreAnt = 0 ;
   this.AV50SeqDebito = 0 ;
   this.AV51SeqCredito = 0 ;
   this.AV37LancamentoContabilData = gx.date.nullDate() ;
   this.AV39TransacaoContabilId = "" ;
   this.AV60LancamentoContabilEstorno = 0 ;
   this.AV82DataReversao = gx.date.nullDate() ;
   this.AV85Tela = "" ;
   this.A284HistoricoId = 0 ;
   this.A283EmpresaHistoricoEmpresaId = "" ;
   this.A281HistoricoDescricao = "" ;
   this.A282HistoricoComplemento = "" ;
   this.A67ItensLancamentoContabilSequenc = 0 ;
   this.A61LancamentoContabilId = 0 ;
   this.A341LancamentoContabilEmpresaid = "" ;
   this.A66ItensLancamentoContabilValor = 0 ;
   this.A336ItensLancamentoContabilHistori = "" ;
   this.A62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A167ContaContabilTipoLancamento = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.A69PessoaId = 0 ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A345ItemLancamentoCCusId = "" ;
   this.A340ItemLancamentoCCusDescricao = "" ;
   this.A53LancamentoCentroCustoValor = 0 ;
   this.A343LancamentoCentroCustoSequencia = 0 ;
   this.A344ItemLancamentoCCusEmpresaId = "" ;
   this.Events = {"e113n2_client": ["'FECHAR'", true] ,"e153n2_client": ["ENTER", true] ,"e123n2_client": ["'CENCUSTODEBITO'", true] ,"e133n2_client": ["'CENCUSTOCREDITO'", true] ,"e183n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV85Tela',fld:'vTELA',hsh:true},{av:'AV50SeqDebito',fld:'vSEQDEBITO'},{av:'AV51SeqCredito',fld:'vSEQCREDITO'}],[{av:'gx.fn.getCtrlProperty("TXTDATA","Visible")',ctrl:'TXTDATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDATALANCAMENTO","Visible")',ctrl:'vDATALANCAMENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDATALANCAMENTO","Enabled")',ctrl:'vDATALANCAMENTO',prop:'Enabled'},{av:'AV66CentroCustoD',fld:'vCENTROCUSTOD'},{av:'AV67CentroCustoC',fld:'vCENTROCUSTOC'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV80SnInsert',fld:'vSNINSERT'},{av:'AV85Tela',fld:'vTELA',hsh:true},{av:'AV86SnOk',fld:'vSNOK'},{av:'AV38LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV60LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO',hsh:true},{av:'AV51SeqCredito',fld:'vSEQCREDITO'},{av:'AV50SeqDebito',fld:'vSEQDEBITO'},{av:'AV39TransacaoContabilId',fld:'vTRANSACAOCONTABILID',hsh:true},{av:'AV58EmpresaPadraoTContabil',fld:'vEMPRESAPADRAOTCONTABIL'},{av:'AV16TradutorDeb',fld:'vTRADUTORDEB'},{av:'AV24EmpresaPadraoContabil',fld:'vEMPRESAPADRAOCONTABIL'},{av:'AV21ContaDeb',fld:'vCONTADEB'},{av:'AV43TradutorCre',fld:'vTRADUTORCRE'},{av:'AV40ContaCre',fld:'vCONTACRE'}],[{av:'AV80SnInsert',fld:'vSNINSERT'},{av:'AV86SnOk',fld:'vSNOK'},{av:'AV50SeqDebito',fld:'vSEQDEBITO'},{av:'AV51SeqCredito',fld:'vSEQCREDITO'},{av:'AV23TpLancamDeb',fld:'vTPLANCAMDEB'},{av:'AV42TpLancamCre',fld:'vTPLANCAMCRE'},{av:'AV53StContaCre',fld:'vSTCONTACRE'},{av:'AV54StContaDeb',fld:'vSTCONTADEB'},{av:'AV61HistoricoAnt',fld:'vHISTORICOANT'},{av:'AV70TradutorCreAnt',fld:'vTRADUTORCREANT'},{av:'AV69TradutorDebAnt',fld:'vTRADUTORDEBANT'},{av:'AV40ContaCre',fld:'vCONTACRE'},{av:'AV21ContaDeb',fld:'vCONTADEB'},{av:'AV41ContaNomeCre',fld:'vCONTANOMECRE'},{av:'AV22ContaNomeDeb',fld:'vCONTANOMEDEB'},{av:'AV44PessoaCreNome',fld:'vPESSOACRENOME'},{av:'AV34PessoaDebNome',fld:'vPESSOADEBNOME'},{av:'AV18ValorLancamento',fld:'vVALORLANCAMENTO'},{av:'AV16TradutorDeb',fld:'vTRADUTORDEB'},{av:'AV17PessoaDebId',fld:'vPESSOADEBID'},{av:'AV43TradutorCre',fld:'vTRADUTORCRE'},{av:'AV45PessoaCreId',fld:'vPESSOACREID'},{av:'AV19HistoricoId',fld:'vHISTORICOID'},{av:'AV20HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV77CentroCustoIdDeb',fld:'vCENTROCUSTOIDDEB'},{av:'AV76RateioIdDeb',fld:'vRATEIOIDDEB'},{av:'AV63HistoricoDescEstorno',fld:'vHISTORICODESCESTORNO'},{av:'AV62HistoricoEstorno',fld:'vHISTORICOESTORNO'},{av:'AV59TransacaoContabilTipo',fld:'vTRANSACAOCONTABILTIPO'},{av:'AV78CentroCustoIdCre',fld:'vCENTROCUSTOIDCRE'},{av:'AV79RateioIdCre',fld:'vRATEIOIDCRE'}]];
   this.EvtParms["ENTER"] = [[{av:'AV18ValorLancamento',fld:'vVALORLANCAMENTO'},{av:'AV88DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV16TradutorDeb',fld:'vTRADUTORDEB'},{av:'AV69TradutorDebAnt',fld:'vTRADUTORDEBANT'},{av:'AV24EmpresaPadraoContabil',fld:'vEMPRESAPADRAOCONTABIL'},{av:'AV21ContaDeb',fld:'vCONTADEB'},{av:'AV17PessoaDebId',fld:'vPESSOADEBID'},{av:'AV31EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'AV87QtdeCar',fld:'vQTDECAR'},{av:'AV43TradutorCre',fld:'vTRADUTORCRE'},{av:'AV70TradutorCreAnt',fld:'vTRADUTORCREANT'},{av:'AV40ContaCre',fld:'vCONTACRE'},{av:'AV45PessoaCreId',fld:'vPESSOACREID'},{av:'AV51SeqCredito',fld:'vSEQCREDITO'},{av:'AV50SeqDebito',fld:'vSEQDEBITO'},{av:'AV55SnParDob',fld:'vSNPARDOB'},{av:'AV19HistoricoId',fld:'vHISTORICOID'},{av:'A283EmpresaHistoricoEmpresaId',fld:'EMPRESAHISTORICOEMPRESAID'},{av:'AV28EmpresaPadraoHistorico',fld:'vEMPRESAPADRAOHISTORICO'},{av:'A284HistoricoId',fld:'HISTORICOID'},{av:'A281HistoricoDescricao',fld:'HISTORICODESCRICAO'},{av:'A282HistoricoComplemento',fld:'HISTORICOCOMPLEMENTO'},{av:'AV20HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV23TpLancamDeb',fld:'vTPLANCAMDEB'},{av:'AV66CentroCustoD',fld:'vCENTROCUSTOD'},{av:'AV42TpLancamCre',fld:'vTPLANCAMCRE'},{av:'AV67CentroCustoC',fld:'vCENTROCUSTOC'},{av:'AV38LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV39TransacaoContabilId',fld:'vTRANSACAOCONTABILID',hsh:true},{av:'AV76RateioIdDeb',fld:'vRATEIOIDDEB'},{av:'AV77CentroCustoIdDeb',fld:'vCENTROCUSTOIDDEB'},{av:'AV79RateioIdCre',fld:'vRATEIOIDCRE'},{av:'AV78CentroCustoIdCre',fld:'vCENTROCUSTOIDCRE'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV58EmpresaPadraoTContabil',fld:'vEMPRESAPADRAOTCONTABIL'},{av:'AV72TipoAtualizacaoDeb',fld:'vTIPOATUALIZACAODEB'},{av:'AV73TipoAtualizacaoCre',fld:'vTIPOATUALIZACAOCRE'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV74SnRefRateioDeb',fld:'vSNREFRATEIODEB'},{av:'AV68EmpresaPadraoCenCusto',fld:'vEMPRESAPADRAOCENCUSTO'},{av:'AV75SnRefRateioCre',fld:'vSNREFRATEIOCRE'},{av:'AV59TransacaoContabilTipo',fld:'vTRANSACAOCONTABILTIPO'},{av:'AV60LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO',hsh:true},{av:'AV82DataReversao',fld:'vDATAREVERSAO',hsh:true},{av:'AV62HistoricoEstorno',fld:'vHISTORICOESTORNO'},{av:'AV63HistoricoDescEstorno',fld:'vHISTORICODESCESTORNO'},{av:'AV80SnInsert',fld:'vSNINSERT'},{av:'AV85Tela',fld:'vTELA',hsh:true},{av:'AV86SnOk',fld:'vSNOK'}],[{av:'AV73TipoAtualizacaoCre',fld:'vTIPOATUALIZACAOCRE'},{av:'AV72TipoAtualizacaoDeb',fld:'vTIPOATUALIZACAODEB'},{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV74SnRefRateioDeb',fld:'vSNREFRATEIODEB'},{av:'AV75SnRefRateioCre',fld:'vSNREFRATEIOCRE'},{av:'AV8MsgErro',fld:'vMSGERRO'},{av:'AV54StContaDeb',fld:'vSTCONTADEB'},{av:'AV23TpLancamDeb',fld:'vTPLANCAMDEB'},{av:'AV22ContaNomeDeb',fld:'vCONTANOMEDEB'},{av:'AV21ContaDeb',fld:'vCONTADEB'},{av:'AV66CentroCustoD',fld:'vCENTROCUSTOD'},{av:'AV34PessoaDebNome',fld:'vPESSOADEBNOME'},{av:'AV53StContaCre',fld:'vSTCONTACRE'},{av:'AV42TpLancamCre',fld:'vTPLANCAMCRE'},{av:'AV41ContaNomeCre',fld:'vCONTANOMECRE'},{av:'AV40ContaCre',fld:'vCONTACRE'},{av:'AV67CentroCustoC',fld:'vCENTROCUSTOC'},{av:'AV44PessoaCreNome',fld:'vPESSOACRENOME'},{av:'AV36HistoricoDescAux',fld:'vHISTORICODESCAUX'},{av:'AV83HistoricoComplemento',fld:'vHISTORICOCOMPLEMENTO'},{av:'AV20HistoricoDescricao',fld:'vHISTORICODESCRICAO'},{av:'AV65total',fld:'vTOTAL'},{av:'AV98GXV1',fld:'vGXV1'},{av:'AV64CentroCustoItem',fld:'vCENTROCUSTOITEM'},{av:'AV99GXV2',fld:'vGXV2'},{av:'AV51SeqCredito',fld:'vSEQCREDITO'},{av:'AV50SeqDebito',fld:'vSEQDEBITO'},{av:'AV38LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV86SnOk',fld:'vSNOK'},{av:'AV60LancamentoContabilEstorno',fld:'vLANCAMENTOCONTABILESTORNO',hsh:true},{av:'AV61HistoricoAnt',fld:'vHISTORICOANT'},{av:'AV70TradutorCreAnt',fld:'vTRADUTORCREANT'},{av:'AV69TradutorDebAnt',fld:'vTRADUTORDEBANT'},{av:'AV18ValorLancamento',fld:'vVALORLANCAMENTO'},{av:'AV16TradutorDeb',fld:'vTRADUTORDEB'},{av:'AV17PessoaDebId',fld:'vPESSOADEBID'},{av:'AV43TradutorCre',fld:'vTRADUTORCRE'},{av:'AV45PessoaCreId',fld:'vPESSOACREID'},{av:'AV19HistoricoId',fld:'vHISTORICOID'},{av:'AV77CentroCustoIdDeb',fld:'vCENTROCUSTOIDDEB'},{av:'AV76RateioIdDeb',fld:'vRATEIOIDDEB'},{av:'AV63HistoricoDescEstorno',fld:'vHISTORICODESCESTORNO'},{av:'AV62HistoricoEstorno',fld:'vHISTORICOESTORNO'},{av:'AV59TransacaoContabilTipo',fld:'vTRANSACAOCONTABILTIPO'},{av:'AV78CentroCustoIdCre',fld:'vCENTROCUSTOIDCRE'},{av:'AV79RateioIdCre',fld:'vRATEIOIDCRE'},{av:'AV80SnInsert',fld:'vSNINSERT'}]];
   this.EvtParms["'CENCUSTODEBITO'"] = [[{av:'AV18ValorLancamento',fld:'vVALORLANCAMENTO'},{av:'AV21ContaDeb',fld:'vCONTADEB'},{av:'AV24EmpresaPadraoContabil',fld:'vEMPRESAPADRAOCONTABIL'},{av:'AV16TradutorDeb',fld:'vTRADUTORDEB'},{av:'AV38LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV50SeqDebito',fld:'vSEQDEBITO'},{av:'AV88DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV39TransacaoContabilId',fld:'vTRANSACAOCONTABILID',hsh:true},{av:'AV76RateioIdDeb',fld:'vRATEIOIDDEB'},{av:'AV77CentroCustoIdDeb',fld:'vCENTROCUSTOIDDEB'}],[{av:'AV54StContaDeb',fld:'vSTCONTADEB'},{av:'AV23TpLancamDeb',fld:'vTPLANCAMDEB'},{av:'AV22ContaNomeDeb',fld:'vCONTANOMEDEB'},{av:'AV21ContaDeb',fld:'vCONTADEB'}]];
   this.EvtParms["'CENCUSTOCREDITO'"] = [[{av:'AV18ValorLancamento',fld:'vVALORLANCAMENTO'},{av:'AV40ContaCre',fld:'vCONTACRE'},{av:'AV24EmpresaPadraoContabil',fld:'vEMPRESAPADRAOCONTABIL'},{av:'AV43TradutorCre',fld:'vTRADUTORCRE'},{av:'AV38LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV51SeqCredito',fld:'vSEQCREDITO'},{av:'AV88DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV39TransacaoContabilId',fld:'vTRANSACAOCONTABILID',hsh:true},{av:'AV79RateioIdCre',fld:'vRATEIOIDCRE'},{av:'AV78CentroCustoIdCre',fld:'vCENTROCUSTOIDCRE'}],[{av:'AV53StContaCre',fld:'vSTCONTACRE'},{av:'AV42TpLancamCre',fld:'vTPLANCAMCRE'},{av:'AV41ContaNomeCre',fld:'vCONTANOMECRE'},{av:'AV40ContaCre',fld:'vCONTACRE'}]];
   this.setPrompt("IMGCCONTDEB", [44,41]);
   this.setPrompt("IMGCCONTCRE", [76,73]);
   this.setPrompt("PROMPT_PESSOADEBID", [51]);
   this.setPrompt("PROMPT_PESSOACREID", [83]);
   this.setPrompt("PROMPT_HISTORICOID", [94]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV37LancamentoContabilData", "vLANCAMENTOCONTABILDATA", 0, "date");
   this.setVCMap("AV39TransacaoContabilId", "vTRANSACAOCONTABILID", 0, "svchar");
   this.setVCMap("AV60LancamentoContabilEstorno", "vLANCAMENTOCONTABILESTORNO", 0, "int");
   this.setVCMap("AV82DataReversao", "vDATAREVERSAO", 0, "date");
   this.setVCMap("AV85Tela", "vTELA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistraritemlancamento());
