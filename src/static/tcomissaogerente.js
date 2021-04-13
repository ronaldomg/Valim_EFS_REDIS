/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:29:56.39
*/
gx.evt.autoSkip = false;
gx.define('tcomissaogerente', false, function () {
   this.ServerClass =  "tcomissaogerente" ;
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
      this.AV19ComissaoGerenteSeq=gx.fn.getIntegerValue("vCOMISSAOGERENTESEQ",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A9290ComissaoGerentePercentual=gx.fn.getDecimalValue("COMISSAOGERENTEPERCENTUAL",'.',',') ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV18ComissaoGerenteEmpresaId=gx.fn.getControlValue("vCOMISSAOGERENTEEMPRESAID") ;
   };
   this.Valid_Comissaogerenteseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOGERENTESEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Comissaogerenteempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOGERENTEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Comissaogerentevalorinicial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOGERENTEVALORINICIAL");
         this.AnyError  = 0;
         if ( (0.0==this.A9288ComissaoGerenteValorInicial) )
         {
            try {
               gxballoon.setError("Informe o valor inicial");
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
   this.Valid_Comissaogerentevalorfinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("COMISSAOGERENTEVALORFINAL");
         this.AnyError  = 0;
         if ( (0.0==this.A9289ComissaoGerenteValorFinal) )
         {
            try {
               gxballoon.setError("Informe o valor final");
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
   this.e12de2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13de2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14de698_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15de698_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,25,28,30,31,38,41,43,45];
   this.GXLastCtrlId =45;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Comissaogerenteseq,isvalid:null,rgrid:[],fld:"COMISSAOGERENTESEQ",gxz:"Z9294ComissaoGerenteSeq",gxold:"O9294ComissaoGerenteSeq",gxvar:"A9294ComissaoGerenteSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9294ComissaoGerenteSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9294ComissaoGerenteSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("COMISSAOGERENTESEQ",gx.O.A9294ComissaoGerenteSeq,0)},c2v:function(){gx.O.A9294ComissaoGerenteSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("COMISSAOGERENTESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Comissaogerentevalorinicial,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEVALORINICIAL",gxz:"Z9288ComissaoGerenteValorInicial",gxold:"O9288ComissaoGerenteValorInicial",gxvar:"A9288ComissaoGerenteValorInicial",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9288ComissaoGerenteValorInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9288ComissaoGerenteValorInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COMISSAOGERENTEVALORINICIAL",gx.O.A9288ComissaoGerenteValorInicial,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9288ComissaoGerenteValorInicial=this.val()},val:function(){return gx.fn.getDecimalValue("COMISSAOGERENTEVALORINICIAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Comissaogerentevalorfinal,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEVALORFINAL",gxz:"Z9289ComissaoGerenteValorFinal",gxold:"O9289ComissaoGerenteValorFinal",gxvar:"A9289ComissaoGerenteValorFinal",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9289ComissaoGerenteValorFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9289ComissaoGerenteValorFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("COMISSAOGERENTEVALORFINAL",gx.O.A9289ComissaoGerenteValorFinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9289ComissaoGerenteValorFinal=this.val()},val:function(){return gx.fn.getDecimalValue("COMISSAOGERENTEVALORFINAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[25]={fld:"TABLE4",grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEUSUARIOALT",gxz:"Z9291ComissaoGerenteUsuarioAlt",gxold:"O9291ComissaoGerenteUsuarioAlt",gxvar:"A9291ComissaoGerenteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9291ComissaoGerenteUsuarioAlt=Value},v2z:function(Value){gx.O.Z9291ComissaoGerenteUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("COMISSAOGERENTEUSUARIOALT",gx.O.A9291ComissaoGerenteUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9291ComissaoGerenteUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("COMISSAOGERENTEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[31]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEDATAHORAALT",gxz:"Z9292ComissaoGerenteDataHoraAlt",gxold:"O9292ComissaoGerenteDataHoraAlt",gxvar:"A9292ComissaoGerenteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9292ComissaoGerenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9292ComissaoGerenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("COMISSAOGERENTEDATAHORAALT",gx.O.A9292ComissaoGerenteDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9292ComissaoGerenteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("COMISSAOGERENTEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[38]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Comissaogerenteempresaid,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEEMPRESAID",gxz:"Z9293ComissaoGerenteEmpresaId",gxold:"O9293ComissaoGerenteEmpresaId",gxvar:"A9293ComissaoGerenteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9293ComissaoGerenteEmpresaId=Value},v2z:function(Value){gx.O.Z9293ComissaoGerenteEmpresaId=Value},v2c:function(){gx.fn.setControlValue("COMISSAOGERENTEEMPRESAID",gx.O.A9293ComissaoGerenteEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9293ComissaoGerenteEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("COMISSAOGERENTEEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[41]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"JS", format:2,grid:0};
   GXValidFnc[45]={fld:"BTNHELP",grid:0};
   this.A9294ComissaoGerenteSeq = 0 ;
   this.Z9294ComissaoGerenteSeq = 0 ;
   this.O9294ComissaoGerenteSeq = 0 ;
   this.A9288ComissaoGerenteValorInicial = 0 ;
   this.Z9288ComissaoGerenteValorInicial = 0 ;
   this.O9288ComissaoGerenteValorInicial = 0 ;
   this.A9289ComissaoGerenteValorFinal = 0 ;
   this.Z9289ComissaoGerenteValorFinal = 0 ;
   this.O9289ComissaoGerenteValorFinal = 0 ;
   this.A9291ComissaoGerenteUsuarioAlt = "" ;
   this.Z9291ComissaoGerenteUsuarioAlt = "" ;
   this.O9291ComissaoGerenteUsuarioAlt = "" ;
   this.A9292ComissaoGerenteDataHoraAlt = gx.date.nullDate() ;
   this.Z9292ComissaoGerenteDataHoraAlt = gx.date.nullDate() ;
   this.O9292ComissaoGerenteDataHoraAlt = gx.date.nullDate() ;
   this.A9293ComissaoGerenteEmpresaId = "" ;
   this.Z9293ComissaoGerenteEmpresaId = "" ;
   this.O9293ComissaoGerenteEmpresaId = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20SnAlterou = "" ;
   this.AV18ComissaoGerenteEmpresaId = "" ;
   this.AV19ComissaoGerenteSeq = 0 ;
   this.A9293ComissaoGerenteEmpresaId = "" ;
   this.A9294ComissaoGerenteSeq = 0 ;
   this.A9291ComissaoGerenteUsuarioAlt = "" ;
   this.A9292ComissaoGerenteDataHoraAlt = gx.date.nullDate() ;
   this.A9288ComissaoGerenteValorInicial = 0 ;
   this.A9289ComissaoGerenteValorFinal = 0 ;
   this.A9290ComissaoGerentePercentual = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12de2_client": ["'FECHAR'", true] ,"e13de2_client": ["AFTER TRN", true] ,"e14de698_client": ["ENTER", true] ,"e15de698_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ComissaoGerenteEmpresaId',fld:'vCOMISSAOGERENTEEMPRESAID'},{av:'AV19ComissaoGerenteSeq',fld:'vCOMISSAOGERENTESEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19ComissaoGerenteSeq", "vCOMISSAOGERENTESEQ", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A9290ComissaoGerentePercentual", "COMISSAOGERENTEPERCENTUAL", 0, "decimal");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV18ComissaoGerenteEmpresaId", "vCOMISSAOGERENTEEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 698 ]= ["O9289ComissaoGerenteValorFinal","O9288ComissaoGerenteValorInicial","O9294ComissaoGerenteSeq","O9293ComissaoGerenteEmpresaId"] ;
});
gx.setParentObj(new tcomissaogerente());
