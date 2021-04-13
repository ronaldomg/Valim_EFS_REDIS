/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:42:24.30
*/
gx.evt.autoSkip = false;
gx.define('tocorrenciaretorno', false, function () {
   this.ServerClass =  "tocorrenciaretorno" ;
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
      this.AV19OcorrenciaRetornoId=gx.fn.getIntegerValue("vOCORRENCIARETORNOID",'.') ;
      this.AV18RemessaRetornoId=gx.fn.getIntegerValue("vREMESSARETORNOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2784RemessaRetornoEmpresaId=gx.fn.getControlValue("REMESSARETORNOEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV27Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV26Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Remessaretornoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Remessaretornoid",["gx.O.A2784RemessaRetornoEmpresaId", "gx.O.A2785RemessaRetornoId"],[]);
      return true;
   }
   this.Valid_Ocorrenciaretornoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIARETORNOID");
         this.AnyError  = 0;
         if ( (0==this.A2804OcorrenciaRetornoId) )
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
   this.Valid_Ocorrenciaretornodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIARETORNODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2805OcorrenciaRetornoDescricao) )
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
   this.Valid_Ocorrenciaretornotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OCORRENCIARETORNOTIPO");
         this.AnyError  = 0;
         if ( (""==this.A2911OcorrenciaRetornoTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Ocorrência");
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
   this.e12542_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13542_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1454293_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1554293_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,23,25,28,30,31,34,36,38,47,50];
   this.GXLastCtrlId =50;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoid,isvalid:null,rgrid:[],fld:"REMESSARETORNOID",gxz:"Z2785RemessaRetornoId",gxold:"O2785RemessaRetornoId",gxvar:"A2785RemessaRetornoId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2785RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2785RemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOID",gx.O.A2785RemessaRetornoId,0)},c2v:function(){gx.O.A2785RemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNODESCRICAO",gxz:"ZV21RemessaRetornoDescricao",gxold:"OV21RemessaRetornoDescricao",gxvar:"AV21RemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.ZV21RemessaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNODESCRICAO",gx.O.AV21RemessaRetornoDescricao,0)},c2v:function(){gx.O.AV21RemessaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaretornoid,isvalid:null,rgrid:[],fld:"OCORRENCIARETORNOID",gxz:"Z2804OcorrenciaRetornoId",gxold:"O2804OcorrenciaRetornoId",gxvar:"A2804OcorrenciaRetornoId",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2804OcorrenciaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2804OcorrenciaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIARETORNOID",gx.O.A2804OcorrenciaRetornoId,0)},c2v:function(){gx.O.A2804OcorrenciaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OCORRENCIARETORNOID",'.')},nac:function(){return !(0==this.AV19OcorrenciaRetornoId)}};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaretornodescricao,isvalid:null,rgrid:[],fld:"OCORRENCIARETORNODESCRICAO",gxz:"Z2805OcorrenciaRetornoDescricao",gxold:"O2805OcorrenciaRetornoDescricao",gxvar:"A2805OcorrenciaRetornoDescricao",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2805OcorrenciaRetornoDescricao=Value},v2z:function(Value){gx.O.Z2805OcorrenciaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIARETORNODESCRICAO",gx.O.A2805OcorrenciaRetornoDescricao,0)},c2v:function(){gx.O.A2805OcorrenciaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ocorrenciaretornotipo,isvalid:null,rgrid:[],fld:"OCORRENCIARETORNOTIPO",gxz:"Z2911OcorrenciaRetornoTipo",gxold:"O2911OcorrenciaRetornoTipo",gxvar:"A2911OcorrenciaRetornoTipo",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2911OcorrenciaRetornoTipo=Value},v2z:function(Value){gx.O.Z2911OcorrenciaRetornoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("OCORRENCIARETORNOTIPO",gx.O.A2911OcorrenciaRetornoTipo)},c2v:function(){gx.O.A2911OcorrenciaRetornoTipo=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIARETORNOTIPO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE4",grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIARETORNOUSUARIOALT",gxz:"Z2807OcorrenciaRetornoUsuarioAlt",gxold:"O2807OcorrenciaRetornoUsuarioAlt",gxvar:"A2807OcorrenciaRetornoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2807OcorrenciaRetornoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2807OcorrenciaRetornoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("OCORRENCIARETORNOUSUARIOALT",gx.O.A2807OcorrenciaRetornoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2807OcorrenciaRetornoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("OCORRENCIARETORNOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[38]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIARETORNODATAHORAALT",gxz:"Z2808OcorrenciaRetornoDataHoraAlt",gxold:"O2808OcorrenciaRetornoDataHoraAlt",gxvar:"A2808OcorrenciaRetornoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2808OcorrenciaRetornoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2808OcorrenciaRetornoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OCORRENCIARETORNODATAHORAALT",gx.O.A2808OcorrenciaRetornoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2808OcorrenciaRetornoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OCORRENCIARETORNODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"BTNHELP",grid:0};
   this.A2785RemessaRetornoId = 0 ;
   this.Z2785RemessaRetornoId = 0 ;
   this.O2785RemessaRetornoId = 0 ;
   this.AV21RemessaRetornoDescricao = "" ;
   this.ZV21RemessaRetornoDescricao = "" ;
   this.OV21RemessaRetornoDescricao = "" ;
   this.A2804OcorrenciaRetornoId = 0 ;
   this.Z2804OcorrenciaRetornoId = 0 ;
   this.O2804OcorrenciaRetornoId = 0 ;
   this.A2805OcorrenciaRetornoDescricao = "" ;
   this.Z2805OcorrenciaRetornoDescricao = "" ;
   this.O2805OcorrenciaRetornoDescricao = "" ;
   this.A2911OcorrenciaRetornoTipo = "" ;
   this.Z2911OcorrenciaRetornoTipo = "" ;
   this.O2911OcorrenciaRetornoTipo = "" ;
   this.A2807OcorrenciaRetornoUsuarioAlt = "" ;
   this.Z2807OcorrenciaRetornoUsuarioAlt = "" ;
   this.O2807OcorrenciaRetornoUsuarioAlt = "" ;
   this.A2808OcorrenciaRetornoDataHoraAlt = gx.date.nullDate() ;
   this.Z2808OcorrenciaRetornoDataHoraAlt = gx.date.nullDate() ;
   this.O2808OcorrenciaRetornoDataHoraAlt = gx.date.nullDate() ;
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
   this.AV20SnAlterou = "" ;
   this.AV18RemessaRetornoId = 0 ;
   this.AV21RemessaRetornoDescricao = "" ;
   this.AV19OcorrenciaRetornoId = 0 ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2804OcorrenciaRetornoId = 0 ;
   this.A2807OcorrenciaRetornoUsuarioAlt = "" ;
   this.A2808OcorrenciaRetornoDataHoraAlt = gx.date.nullDate() ;
   this.A2805OcorrenciaRetornoDescricao = "" ;
   this.A2911OcorrenciaRetornoTipo = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12542_client": ["'FECHAR'", true] ,"e13542_client": ["AFTER TRN", true] ,"e1454293_client": ["ENTER", true] ,"e1554293_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV21RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV19OcorrenciaRetornoId',fld:'vOCORRENCIARETORNOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV21RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'}],[{av:'AV21RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV18RemessaRetornoId',fld:'vREMESSARETORNOID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19OcorrenciaRetornoId", "vOCORRENCIARETORNOID", 0, "int");
   this.setVCMap("AV18RemessaRetornoId", "vREMESSARETORNOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2784RemessaRetornoEmpresaId", "REMESSARETORNOEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV27Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV26Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 293 ]= ["O2911OcorrenciaRetornoTipo","O2805OcorrenciaRetornoDescricao","O2804OcorrenciaRetornoId","O2785RemessaRetornoId"] ;
});
gx.setParentObj(new tocorrenciaretorno());
