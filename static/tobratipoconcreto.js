/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:37:39.96
*/
gx.evt.autoSkip = false;
gx.define('tobratipoconcreto', false, function () {
   this.ServerClass =  "tobratipoconcreto" ;
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
      this.A11311ObraEmpresaId=gx.fn.getControlValue("OBRAEMPRESAID") ;
      this.AV31ObraCodigo=gx.fn.getIntegerValue("vOBRACODIGO",'.') ;
      this.A11459ObraTipoConcretoTpConEmpId=gx.fn.getControlValue("OBRATIPOCONCRETOTPCONEMPID") ;
      this.AV28ObraTipoConcretoTpConCod=gx.fn.getIntegerValue("vOBRATIPOCONCRETOTPCONCOD",'.') ;
      this.AV22SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV25UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV34Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Obracodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obracodigo",["gx.O.A11311ObraEmpresaId", "gx.O.A11312ObraCodigo"],[]);
      return true;
   }
   this.Valid_Obratipoconcretotpconcod=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obratipoconcretotpconcod",["gx.O.A11459ObraTipoConcretoTpConEmpId", "gx.O.A11460ObraTipoConcretoTpConCod", "gx.O.A11397ObraTipoConcretoTpConDesc"],["A11397ObraTipoConcretoTpConDesc"]);
      return true;
   }
   this.Valid_Obratipoconcretovolume=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OBRATIPOCONCRETOVOLUME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Obratipoconcretovalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OBRATIPOCONCRETOVALOR");
         this.AnyError  = 0;
         if ( (0.0==this.A11399ObraTipoConcretoValor) )
         {
            try {
               gxballoon.setError("Informar o Valor");
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
   this.Validv_Tipoconcretoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCONCRETOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Obraempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOBRAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e14gg840_client=function()
   {
      this.executeServerEvent("PROMPT_11460.GXPROMPT", true, null, false, true);
   };
   this.e12gg2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13gg2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e15gg840_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16gg840_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,19,21,22,25,27,30,32,35,38,40,42,51,52,53,55,57];
   this.GXLastCtrlId =57;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Obracodigo,isvalid:null,rgrid:[],fld:"OBRACODIGO",gxz:"Z11312ObraCodigo",gxold:"O11312ObraCodigo",gxvar:"A11312ObraCodigo",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11312ObraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11312ObraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRACODIGO",gx.O.A11312ObraCodigo,0)},c2v:function(){gx.O.A11312ObraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBRANOME",gxz:"ZV32ObraNome",gxold:"OV32ObraNome",gxvar:"AV32ObraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ObraNome=Value},v2z:function(Value){gx.O.ZV32ObraNome=Value},v2c:function(){gx.fn.setControlValue("vOBRANOME",gx.O.AV32ObraNome,0)},c2v:function(){gx.O.AV32ObraNome=this.val()},val:function(){return gx.fn.getControlValue("vOBRANOME")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obratipoconcretotpconcod,isvalid:null,rgrid:[],fld:"OBRATIPOCONCRETOTPCONCOD",gxz:"Z11460ObraTipoConcretoTpConCod",gxold:"O11460ObraTipoConcretoTpConCod",gxvar:"A11460ObraTipoConcretoTpConCod",ucs:[],op:[21,22],ip:[22,21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11460ObraTipoConcretoTpConCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11460ObraTipoConcretoTpConCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRATIPOCONCRETOTPCONCOD",gx.O.A11460ObraTipoConcretoTpConCod,0)},c2v:function(){gx.O.A11460ObraTipoConcretoTpConCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRATIPOCONCRETOTPCONCOD",'.')},nac:function(){return !(0==this.AV28ObraTipoConcretoTpConCod)}};
   GXValidFnc[22]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRATIPOCONCRETOTPCONDESC",gxz:"Z11397ObraTipoConcretoTpConDesc",gxold:"O11397ObraTipoConcretoTpConDesc",gxvar:"A11397ObraTipoConcretoTpConDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11397ObraTipoConcretoTpConDesc=Value},v2z:function(Value){gx.O.Z11397ObraTipoConcretoTpConDesc=Value},v2c:function(){gx.fn.setControlValue("OBRATIPOCONCRETOTPCONDESC",gx.O.A11397ObraTipoConcretoTpConDesc,0)},c2v:function(){gx.O.A11397ObraTipoConcretoTpConDesc=this.val()},val:function(){return gx.fn.getControlValue("OBRATIPOCONCRETOTPCONDESC")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obratipoconcretovolume,isvalid:null,rgrid:[],fld:"OBRATIPOCONCRETOVOLUME",gxz:"Z11398ObraTipoConcretoVolume",gxold:"O11398ObraTipoConcretoVolume",gxvar:"A11398ObraTipoConcretoVolume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11398ObraTipoConcretoVolume=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11398ObraTipoConcretoVolume=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRATIPOCONCRETOVOLUME",gx.O.A11398ObraTipoConcretoVolume,2,',')},c2v:function(){gx.O.A11398ObraTipoConcretoVolume=this.val()},val:function(){return gx.fn.getDecimalValue("OBRATIPOCONCRETOVOLUME",'.',',')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"ZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Obratipoconcretovalor,isvalid:null,rgrid:[],fld:"OBRATIPOCONCRETOVALOR",gxz:"Z11399ObraTipoConcretoValor",gxold:"O11399ObraTipoConcretoValor",gxvar:"A11399ObraTipoConcretoValor",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11399ObraTipoConcretoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11399ObraTipoConcretoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("OBRATIPOCONCRETOVALOR",gx.O.A11399ObraTipoConcretoValor,2,',')},c2v:function(){gx.O.A11399ObraTipoConcretoValor=this.val()},val:function(){return gx.fn.getDecimalValue("OBRATIPOCONCRETOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRATIPOCONCRETOUSUARIOALT",gxz:"Z11442ObraTipoConcretoUsuarioAlt",gxold:"O11442ObraTipoConcretoUsuarioAlt",gxvar:"A11442ObraTipoConcretoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11442ObraTipoConcretoUsuarioAlt=Value},v2z:function(Value){gx.O.Z11442ObraTipoConcretoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("OBRATIPOCONCRETOUSUARIOALT",gx.O.A11442ObraTipoConcretoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11442ObraTipoConcretoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("OBRATIPOCONCRETOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRATIPOCONCRETODATAHORAALT",gxz:"Z11443ObraTipoConcretoDataHoraAlt",gxold:"O11443ObraTipoConcretoDataHoraAlt",gxvar:"A11443ObraTipoConcretoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11443ObraTipoConcretoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11443ObraTipoConcretoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OBRATIPOCONCRETODATAHORAALT",gx.O.A11443ObraTipoConcretoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11443ObraTipoConcretoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OBRATIPOCONCRETODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[51]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoconcretoempresaid,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOEMPRESAID",gxz:"ZV29TipoConcretoEmpresaId",gxold:"OV29TipoConcretoEmpresaId",gxvar:"AV29TipoConcretoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TipoConcretoEmpresaId=Value},v2z:function(Value){gx.O.ZV29TipoConcretoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOEMPRESAID",gx.O.AV29TipoConcretoEmpresaId,0)},c2v:function(){gx.O.AV29TipoConcretoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Obraempresaid,isvalid:null,rgrid:[],fld:"vOBRAEMPRESAID",gxz:"ZV30ObraEmpresaId",gxold:"OV30ObraEmpresaId",gxvar:"AV30ObraEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ObraEmpresaId=Value},v2z:function(Value){gx.O.ZV30ObraEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vOBRAEMPRESAID",gx.O.AV30ObraEmpresaId,0)},c2v:function(){gx.O.AV30ObraEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vOBRAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"BTNHELP",grid:0};
   GXValidFnc[57]={fld:"PROMPT_11460",grid:840};
   this.A11312ObraCodigo = 0 ;
   this.Z11312ObraCodigo = 0 ;
   this.O11312ObraCodigo = 0 ;
   this.AV32ObraNome = "" ;
   this.ZV32ObraNome = "" ;
   this.OV32ObraNome = "" ;
   this.A11460ObraTipoConcretoTpConCod = 0 ;
   this.Z11460ObraTipoConcretoTpConCod = 0 ;
   this.O11460ObraTipoConcretoTpConCod = 0 ;
   this.A11397ObraTipoConcretoTpConDesc = "" ;
   this.Z11397ObraTipoConcretoTpConDesc = "" ;
   this.O11397ObraTipoConcretoTpConDesc = "" ;
   this.A11398ObraTipoConcretoVolume = 0 ;
   this.Z11398ObraTipoConcretoVolume = 0 ;
   this.O11398ObraTipoConcretoVolume = 0 ;
   this.A11399ObraTipoConcretoValor = 0 ;
   this.Z11399ObraTipoConcretoValor = 0 ;
   this.O11399ObraTipoConcretoValor = 0 ;
   this.A11442ObraTipoConcretoUsuarioAlt = "" ;
   this.Z11442ObraTipoConcretoUsuarioAlt = "" ;
   this.O11442ObraTipoConcretoUsuarioAlt = "" ;
   this.A11443ObraTipoConcretoDataHoraAlt = gx.date.nullDate() ;
   this.Z11443ObraTipoConcretoDataHoraAlt = gx.date.nullDate() ;
   this.O11443ObraTipoConcretoDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV29TipoConcretoEmpresaId = "" ;
   this.ZV29TipoConcretoEmpresaId = "" ;
   this.OV29TipoConcretoEmpresaId = "" ;
   this.AV30ObraEmpresaId = "" ;
   this.ZV30ObraEmpresaId = "" ;
   this.OV30ObraEmpresaId = "" ;
   this.AV25UsrCod = "" ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV21Sistema = "" ;
   this.AV33Pgmname = "" ;
   this.AV34Pgmdesc = "" ;
   this.AV16MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV13Logon = {} ;
   this.AV24Tabela = "" ;
   this.AV30ObraEmpresaId = "" ;
   this.AV29TipoConcretoEmpresaId = "" ;
   this.AV22SnAlterou = "" ;
   this.AV31ObraCodigo = 0 ;
   this.AV32ObraNome = "" ;
   this.AV28ObraTipoConcretoTpConCod = 0 ;
   this.A11311ObraEmpresaId = "" ;
   this.A11312ObraCodigo = 0 ;
   this.A11459ObraTipoConcretoTpConEmpId = "" ;
   this.A11460ObraTipoConcretoTpConCod = 0 ;
   this.A11442ObraTipoConcretoUsuarioAlt = "" ;
   this.A11443ObraTipoConcretoDataHoraAlt = gx.date.nullDate() ;
   this.A11397ObraTipoConcretoTpConDesc = "" ;
   this.A11398ObraTipoConcretoVolume = 0 ;
   this.A11399ObraTipoConcretoValor = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e14gg840_client": ["PROMPT_11460.GXPROMPT", true] ,"e12gg2_client": ["'FECHAR'", true] ,"e13gg2_client": ["AFTER TRN", true] ,"e15gg840_client": ["ENTER", true] ,"e16gg840_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV31ObraCodigo',fld:'vOBRACODIGO'},{av:'AV32ObraNome',fld:'vOBRANOME'},{av:'AV28ObraTipoConcretoTpConCod',fld:'vOBRATIPOCONCRETOTPCONCOD'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_11460", [21]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A11311ObraEmpresaId", "OBRAEMPRESAID", 0, "char");
   this.setVCMap("AV31ObraCodigo", "vOBRACODIGO", 0, "int");
   this.setVCMap("A11459ObraTipoConcretoTpConEmpId", "OBRATIPOCONCRETOTPCONEMPID", 0, "char");
   this.setVCMap("AV28ObraTipoConcretoTpConCod", "vOBRATIPOCONCRETOTPCONCOD", 0, "int");
   this.setVCMap("AV22SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV25UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV34Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 840 ]= ["O11399ObraTipoConcretoValor","O11398ObraTipoConcretoVolume","O11460ObraTipoConcretoTpConCod"] ;
});
gx.setParentObj(new tobratipoconcreto());
