/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:42:45.47
*/
gx.evt.autoSkip = false;
gx.define('tmotivoocorrencia', false, function () {
   this.ServerClass =  "tmotivoocorrencia" ;
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
      this.AV19MotivoOcorrenciaId=gx.fn.getIntegerValue("vMOTIVOOCORRENCIAID",'.') ;
      this.AV21RemessaRetornoId=gx.fn.getIntegerValue("vREMESSARETORNOID",'.') ;
      this.AV22OcorrenciaRetornoId=gx.fn.getIntegerValue("vOCORRENCIARETORNOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2784RemessaRetornoEmpresaId=gx.fn.getControlValue("REMESSARETORNOEMPRESAID") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV31Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV30Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV24OcorrenciaRetornoDescricao=gx.fn.getControlValue("vOCORRENCIARETORNODESCRICAO") ;
   };
   this.Valid_Remessaretornoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ocorrenciaretornoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Ocorrenciaretornoid",["gx.O.A2784RemessaRetornoEmpresaId", "gx.O.A2785RemessaRetornoId", "gx.O.A2804OcorrenciaRetornoId", "gx.O.A2805OcorrenciaRetornoDescricao"],["A2805OcorrenciaRetornoDescricao"]);
      return true;
   }
   this.Valid_Motivoocorrenciaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOTIVOOCORRENCIAID");
         this.AnyError  = 0;
         if ( (0==this.A2984MotivoOcorrenciaId) )
         {
            try {
               gxballoon.setError("Informe o Código");
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
   this.Valid_Motivoocorrenciadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOTIVOOCORRENCIADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2985MotivoOcorrenciaDescricao) )
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
   this.e125m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e135m2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e145m360_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e155m360_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,24,26,29,31,33,36,38,41,43,47,50,52,54,63,65];
   this.GXLastCtrlId =65;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE5",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoid,isvalid:null,rgrid:[],fld:"REMESSARETORNOID",gxz:"Z2785RemessaRetornoId",gxold:"O2785RemessaRetornoId",gxvar:"A2785RemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2785RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2785RemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOID",gx.O.A2785RemessaRetornoId,0)},c2v:function(){gx.O.A2785RemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNODESCRICAO",gxz:"ZV23RemessaRetornoDescricao",gxold:"OV23RemessaRetornoDescricao",gxvar:"AV23RemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.ZV23RemessaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNODESCRICAO",gx.O.AV23RemessaRetornoDescricao,0)},c2v:function(){gx.O.AV23RemessaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaretornoid,isvalid:null,rgrid:[],fld:"OCORRENCIARETORNOID",gxz:"Z2804OcorrenciaRetornoId",gxold:"O2804OcorrenciaRetornoId",gxvar:"A2804OcorrenciaRetornoId",ucs:[],op:[33],ip:[33,29,17],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2804OcorrenciaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2804OcorrenciaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIARETORNOID",gx.O.A2804OcorrenciaRetornoId,0)},c2v:function(){gx.O.A2804OcorrenciaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OCORRENCIARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIARETORNODESCRICAO",gxz:"Z2805OcorrenciaRetornoDescricao",gxold:"O2805OcorrenciaRetornoDescricao",gxvar:"A2805OcorrenciaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2805OcorrenciaRetornoDescricao=Value},v2z:function(Value){gx.O.Z2805OcorrenciaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIARETORNODESCRICAO",gx.O.A2805OcorrenciaRetornoDescricao,0)},c2v:function(){gx.O.A2805OcorrenciaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Motivoocorrenciaid,isvalid:null,rgrid:[],fld:"MOTIVOOCORRENCIAID",gxz:"Z2984MotivoOcorrenciaId",gxold:"O2984MotivoOcorrenciaId",gxvar:"A2984MotivoOcorrenciaId",ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2984MotivoOcorrenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2984MotivoOcorrenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOTIVOOCORRENCIAID",gx.O.A2984MotivoOcorrenciaId,0)},c2v:function(){gx.O.A2984MotivoOcorrenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOTIVOOCORRENCIAID",'.')},nac:function(){return !(0==this.AV19MotivoOcorrenciaId)}};
   GXValidFnc[41]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Motivoocorrenciadescricao,isvalid:null,rgrid:[],fld:"MOTIVOOCORRENCIADESCRICAO",gxz:"Z2985MotivoOcorrenciaDescricao",gxold:"O2985MotivoOcorrenciaDescricao",gxvar:"A2985MotivoOcorrenciaDescricao",ucs:[],op:[43],ip:[43],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2985MotivoOcorrenciaDescricao=Value},v2z:function(Value){gx.O.Z2985MotivoOcorrenciaDescricao=Value},v2c:function(){gx.fn.setControlValue("MOTIVOOCORRENCIADESCRICAO",gx.O.A2985MotivoOcorrenciaDescricao,0)},c2v:function(){gx.O.A2985MotivoOcorrenciaDescricao=this.val()},val:function(){return gx.fn.getControlValue("MOTIVOOCORRENCIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOTIVOOCORRENCIAUSUARIOALT",gxz:"Z2986MotivoOcorrenciaUsuarioAlt",gxold:"O2986MotivoOcorrenciaUsuarioAlt",gxvar:"A2986MotivoOcorrenciaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2986MotivoOcorrenciaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2986MotivoOcorrenciaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MOTIVOOCORRENCIAUSUARIOALT",gx.O.A2986MotivoOcorrenciaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2986MotivoOcorrenciaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MOTIVOOCORRENCIAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[54]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOTIVOOCORRENCIADATAALT",gxz:"Z2987MotivoOcorrenciaDataAlt",gxold:"O2987MotivoOcorrenciaDataAlt",gxvar:"A2987MotivoOcorrenciaDataAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2987MotivoOcorrenciaDataAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2987MotivoOcorrenciaDataAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MOTIVOOCORRENCIADATAALT",gx.O.A2987MotivoOcorrenciaDataAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2987MotivoOcorrenciaDataAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MOTIVOOCORRENCIADATAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[63]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={fld:"BTNHELP",grid:0};
   this.A2785RemessaRetornoId = 0 ;
   this.Z2785RemessaRetornoId = 0 ;
   this.O2785RemessaRetornoId = 0 ;
   this.AV23RemessaRetornoDescricao = "" ;
   this.ZV23RemessaRetornoDescricao = "" ;
   this.OV23RemessaRetornoDescricao = "" ;
   this.A2804OcorrenciaRetornoId = 0 ;
   this.Z2804OcorrenciaRetornoId = 0 ;
   this.O2804OcorrenciaRetornoId = 0 ;
   this.A2805OcorrenciaRetornoDescricao = "" ;
   this.Z2805OcorrenciaRetornoDescricao = "" ;
   this.O2805OcorrenciaRetornoDescricao = "" ;
   this.A2984MotivoOcorrenciaId = 0 ;
   this.Z2984MotivoOcorrenciaId = 0 ;
   this.O2984MotivoOcorrenciaId = 0 ;
   this.A2985MotivoOcorrenciaDescricao = "" ;
   this.Z2985MotivoOcorrenciaDescricao = "" ;
   this.O2985MotivoOcorrenciaDescricao = "" ;
   this.A2986MotivoOcorrenciaUsuarioAlt = "" ;
   this.Z2986MotivoOcorrenciaUsuarioAlt = "" ;
   this.O2986MotivoOcorrenciaUsuarioAlt = "" ;
   this.A2987MotivoOcorrenciaDataAlt = gx.date.nullDate() ;
   this.Z2987MotivoOcorrenciaDataAlt = gx.date.nullDate() ;
   this.O2987MotivoOcorrenciaDataAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
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
   this.AV18SnAlterou = "" ;
   this.AV21RemessaRetornoId = 0 ;
   this.AV23RemessaRetornoDescricao = "" ;
   this.AV22OcorrenciaRetornoId = 0 ;
   this.AV24OcorrenciaRetornoDescricao = "" ;
   this.AV19MotivoOcorrenciaId = 0 ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2804OcorrenciaRetornoId = 0 ;
   this.A2984MotivoOcorrenciaId = 0 ;
   this.A2986MotivoOcorrenciaUsuarioAlt = "" ;
   this.A2987MotivoOcorrenciaDataAlt = gx.date.nullDate() ;
   this.A2805OcorrenciaRetornoDescricao = "" ;
   this.A2985MotivoOcorrenciaDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e125m2_client": ["'FECHAR'", true] ,"e135m2_client": ["AFTER TRN", true] ,"e145m360_client": ["ENTER", true] ,"e155m360_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV21RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV23RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV22OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV24OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV19MotivoOcorrenciaId',fld:'vMOTIVOOCORRENCIAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV21RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV23RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV22OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV24OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'}],[{av:'AV24OcorrenciaRetornoDescricao',fld:'vOCORRENCIARETORNODESCRICAO'},{av:'AV22OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'AV23RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV21RemessaRetornoId',fld:'vREMESSARETORNOID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19MotivoOcorrenciaId", "vMOTIVOOCORRENCIAID", 0, "int");
   this.setVCMap("AV21RemessaRetornoId", "vREMESSARETORNOID", 0, "int");
   this.setVCMap("AV22OcorrenciaRetornoId", "vOCORRENCIARETORNOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2784RemessaRetornoEmpresaId", "REMESSARETORNOEMPRESAID", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV31Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV30Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV24OcorrenciaRetornoDescricao", "vOCORRENCIARETORNODESCRICAO", 0, "svchar");
   this.InitStandaloneVars( );
   this.LvlOlds[ 360 ]= ["O2985MotivoOcorrenciaDescricao","O2984MotivoOcorrenciaId"] ;
});
gx.setParentObj(new tmotivoocorrencia());
