/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:41:47.66
*/
gx.evt.autoSkip = false;
gx.define('tocorrenciaportaria', false, function () {
   this.ServerClass =  "tocorrenciaportaria" ;
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
      this.AV17OcorrenciaPortariaId=gx.fn.getIntegerValue("vOCORRENCIAPORTARIAID",'.') ;
      this.AV18OcorrenciaPortariaEmpresaId=gx.fn.getControlValue("vOCORRENCIAPORTARIAEMPRESAID") ;
      this.A2662OcorrenciaPortariaEmpresaId=gx.fn.getControlValue("OCORRENCIAPORTARIAEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Ocorrenciaportariaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPORTARIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ocorrenciaportariadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPORTARIADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2675OcorrenciaPortariaDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
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
   this.Valid_Ocorrenciaportariatipobloqueio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPORTARIATIPOBLOQUEIO");
         this.AnyError  = 0;
         if ( (""==this.A2676OcorrenciaPortariaTipoBloqueio) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Bloqueio Portaria");
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
   this.Valid_Ocorrenciaportariatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPORTARIATIPO");
         this.AnyError  = 0;
         if ( (""==this.A2678OcorrenciaPortariaTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A2678OcorrenciaPortariaTipo == "H" && this.A2676OcorrenciaPortariaTipoBloqueio != "N" )
         {
            try {
               gxballoon.setError("Para este Tipo, o Tipo de Bloqueio Portaria deve ser Não Apresentar na Portaria");
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
   this.Valid_Ocorrenciaportariatiporegobs=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPORTARIATIPOREGOBS");
         this.AnyError  = 0;
         if ( (""==this.A2679OcorrenciaPortariaTipoRegObs) )
         {
            try {
               gxballoon.setError("Informe o Tipo Registro Observação");
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
   this.Valid_Ocorrenciaportariagerardebito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPORTARIAGERARDEBITO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ocorrenciaportariaaprdescocopo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIAPORTARIAAPRDESCOCOPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e124w2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134w2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144w280_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154w280_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,39,43,46,49,51,53,62,64];
   this.GXLastCtrlId =64;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaportariaid,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAID",gxz:"Z2663OcorrenciaPortariaId",gxold:"O2663OcorrenciaPortariaId",gxvar:"A2663OcorrenciaPortariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2663OcorrenciaPortariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2663OcorrenciaPortariaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIAPORTARIAID",gx.O.A2663OcorrenciaPortariaId,0)},c2v:function(){gx.O.A2663OcorrenciaPortariaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OCORRENCIAPORTARIAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaportariadescricao,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIADESCRICAO",gxz:"Z2675OcorrenciaPortariaDescricao",gxold:"O2675OcorrenciaPortariaDescricao",gxvar:"A2675OcorrenciaPortariaDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2675OcorrenciaPortariaDescricao=Value},v2z:function(Value){gx.O.Z2675OcorrenciaPortariaDescricao=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIAPORTARIADESCRICAO",gx.O.A2675OcorrenciaPortariaDescricao,0)},c2v:function(){gx.O.A2675OcorrenciaPortariaDescricao=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAPORTARIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaportariatipobloqueio,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIATIPOBLOQUEIO",gxz:"Z2676OcorrenciaPortariaTipoBloqueio",gxold:"O2676OcorrenciaPortariaTipoBloqueio",gxvar:"A2676OcorrenciaPortariaTipoBloqueio",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2676OcorrenciaPortariaTipoBloqueio=Value},v2z:function(Value){gx.O.Z2676OcorrenciaPortariaTipoBloqueio=Value},v2c:function(){gx.fn.setComboBoxValue("OCORRENCIAPORTARIATIPOBLOQUEIO",gx.O.A2676OcorrenciaPortariaTipoBloqueio)},c2v:function(){gx.O.A2676OcorrenciaPortariaTipoBloqueio=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAPORTARIATIPOBLOQUEIO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaportariatipo,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIATIPO",gxz:"Z2678OcorrenciaPortariaTipo",gxold:"O2678OcorrenciaPortariaTipo",gxvar:"A2678OcorrenciaPortariaTipo",ucs:[],op:[25,30],ip:[25,30],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2678OcorrenciaPortariaTipo=Value},v2z:function(Value){gx.O.Z2678OcorrenciaPortariaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("OCORRENCIAPORTARIATIPO",gx.O.A2678OcorrenciaPortariaTipo)},c2v:function(){gx.O.A2678OcorrenciaPortariaTipo=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAPORTARIATIPO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaportariatiporegobs,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIATIPOREGOBS",gxz:"Z2679OcorrenciaPortariaTipoRegObs",gxold:"O2679OcorrenciaPortariaTipoRegObs",gxvar:"A2679OcorrenciaPortariaTipoRegObs",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2679OcorrenciaPortariaTipoRegObs=Value},v2z:function(Value){gx.O.Z2679OcorrenciaPortariaTipoRegObs=Value},v2c:function(){gx.fn.setComboBoxValue("OCORRENCIAPORTARIATIPOREGOBS",gx.O.A2679OcorrenciaPortariaTipoRegObs)},c2v:function(){gx.O.A2679OcorrenciaPortariaTipoRegObs=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAPORTARIATIPOREGOBS")},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaportariagerardebito,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAGERARDEBITO",gxz:"Z2677OcorrenciaPortariaGerarDebito",gxold:"O2677OcorrenciaPortariaGerarDebito",gxvar:"A2677OcorrenciaPortariaGerarDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2677OcorrenciaPortariaGerarDebito=Value},v2z:function(Value){gx.O.Z2677OcorrenciaPortariaGerarDebito=Value},v2c:function(){gx.fn.setCheckBoxValue("OCORRENCIAPORTARIAGERARDEBITO",gx.O.A2677OcorrenciaPortariaGerarDebito,"S")},c2v:function(){gx.O.A2677OcorrenciaPortariaGerarDebito=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAPORTARIAGERARDEBITO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaportariaaprdescocopo,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAAPRDESCOCOPO",gxz:"Z2680OcorrenciaPortariaAprDescOcoPo",gxold:"O2680OcorrenciaPortariaAprDescOcoPo",gxvar:"A2680OcorrenciaPortariaAprDescOcoPo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2680OcorrenciaPortariaAprDescOcoPo=Value},v2z:function(Value){gx.O.Z2680OcorrenciaPortariaAprDescOcoPo=Value},v2c:function(){gx.fn.setCheckBoxValue("OCORRENCIAPORTARIAAPRDESCOCOPO",gx.O.A2680OcorrenciaPortariaAprDescOcoPo,"S")},c2v:function(){gx.O.A2680OcorrenciaPortariaAprDescOcoPo=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAPORTARIAAPRDESCOCOPO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[46]={fld:"TABLE4",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAUSUARIOALT",gxz:"Z2681OcorrenciaPortariaUsuarioAlt",gxold:"O2681OcorrenciaPortariaUsuarioAlt",gxvar:"A2681OcorrenciaPortariaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2681OcorrenciaPortariaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2681OcorrenciaPortariaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIAPORTARIAUSUARIOALT",gx.O.A2681OcorrenciaPortariaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2681OcorrenciaPortariaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIAPORTARIAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[53]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIADATAHORAALT",gxz:"Z2682OcorrenciaPortariaDataHoraAlt",gxold:"O2682OcorrenciaPortariaDataHoraAlt",gxvar:"A2682OcorrenciaPortariaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2682OcorrenciaPortariaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2682OcorrenciaPortariaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIAPORTARIADATAHORAALT",gx.O.A2682OcorrenciaPortariaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2682OcorrenciaPortariaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OCORRENCIAPORTARIADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[62]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"BTNHELP",grid:0};
   this.A2663OcorrenciaPortariaId = 0 ;
   this.Z2663OcorrenciaPortariaId = 0 ;
   this.O2663OcorrenciaPortariaId = 0 ;
   this.A2675OcorrenciaPortariaDescricao = "" ;
   this.Z2675OcorrenciaPortariaDescricao = "" ;
   this.O2675OcorrenciaPortariaDescricao = "" ;
   this.A2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.Z2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.O2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.A2678OcorrenciaPortariaTipo = "" ;
   this.Z2678OcorrenciaPortariaTipo = "" ;
   this.O2678OcorrenciaPortariaTipo = "" ;
   this.A2679OcorrenciaPortariaTipoRegObs = "" ;
   this.Z2679OcorrenciaPortariaTipoRegObs = "" ;
   this.O2679OcorrenciaPortariaTipoRegObs = "" ;
   this.A2677OcorrenciaPortariaGerarDebito = "" ;
   this.Z2677OcorrenciaPortariaGerarDebito = "" ;
   this.O2677OcorrenciaPortariaGerarDebito = "" ;
   this.A2680OcorrenciaPortariaAprDescOcoPo = "" ;
   this.Z2680OcorrenciaPortariaAprDescOcoPo = "" ;
   this.O2680OcorrenciaPortariaAprDescOcoPo = "" ;
   this.A2681OcorrenciaPortariaUsuarioAlt = "" ;
   this.Z2681OcorrenciaPortariaUsuarioAlt = "" ;
   this.O2681OcorrenciaPortariaUsuarioAlt = "" ;
   this.A2682OcorrenciaPortariaDataHoraAlt = gx.date.nullDate() ;
   this.Z2682OcorrenciaPortariaDataHoraAlt = gx.date.nullDate() ;
   this.O2682OcorrenciaPortariaDataHoraAlt = gx.date.nullDate() ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.ZV20AcessoSistemaSequencia = 0 ;
   this.OV20AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV18OcorrenciaPortariaEmpresaId = "" ;
   this.AV19SnAlterou = "" ;
   this.AV17OcorrenciaPortariaId = 0 ;
   this.A2662OcorrenciaPortariaEmpresaId = "" ;
   this.A2663OcorrenciaPortariaId = 0 ;
   this.A2681OcorrenciaPortariaUsuarioAlt = "" ;
   this.A2682OcorrenciaPortariaDataHoraAlt = gx.date.nullDate() ;
   this.A2675OcorrenciaPortariaDescricao = "" ;
   this.A2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.A2677OcorrenciaPortariaGerarDebito = "" ;
   this.A2678OcorrenciaPortariaTipo = "" ;
   this.A2679OcorrenciaPortariaTipoRegObs = "" ;
   this.A2680OcorrenciaPortariaAprDescOcoPo = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e124w2_client": ["'FECHAR'", true] ,"e134w2_client": ["AFTER TRN", true] ,"e144w280_client": ["ENTER", true] ,"e154w280_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17OcorrenciaPortariaId", "vOCORRENCIAPORTARIAID", 0, "int");
   this.setVCMap("AV18OcorrenciaPortariaEmpresaId", "vOCORRENCIAPORTARIAEMPRESAID", 0, "char");
   this.setVCMap("A2662OcorrenciaPortariaEmpresaId", "OCORRENCIAPORTARIAEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 280 ]= ["O2680OcorrenciaPortariaAprDescOcoPo","O2677OcorrenciaPortariaGerarDebito","O2679OcorrenciaPortariaTipoRegObs","O2678OcorrenciaPortariaTipo","O2676OcorrenciaPortariaTipoBloqueio","O2675OcorrenciaPortariaDescricao"] ;
});
gx.setParentObj(new tocorrenciaportaria());
