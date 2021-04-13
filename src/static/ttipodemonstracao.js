/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:54:15.74
*/
gx.evt.autoSkip = false;
gx.define('ttipodemonstracao', false, function () {
   this.ServerClass =  "ttipodemonstracao" ;
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
      this.AV13EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A270TipoDemonstracaoEmpresaId=gx.fn.getControlValue("TIPODEMONSTRACAOEMPRESAID") ;
      this.AV15TipoDemonstracaoId=gx.fn.getIntegerValue("vTIPODEMONSTRACAOID",'.') ;
      this.AV8UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV16ErroValValidos=gx.fn.getControlValue("vERROVALVALIDOS") ;
      this.AV17ErroOrdCresc=gx.fn.getControlValue("vERROORDCRESC") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tipodemonstracaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPODEMONSTRACAOID");
         this.AnyError  = 0;
         if ( (0==this.A271TipoDemonstracaoId) )
         {
            try {
               gxballoon.setError("Informe código para o tipo de demonstração");
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
   this.Valid_Tipodemonstracaodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPODEMONSTRACAODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A550TipoDemonstracaoDescricao) )
         {
            try {
               gxballoon.setError("Informe descrição da demonstração");
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
   this.Valid_Tipodemonstracaoestrutura=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPODEMONSTRACAOESTRUTURA");
         this.AnyError  = 0;
         if ( (""==this.A280TipoDemonstracaoEstrutura) )
         {
            try {
               gxballoon.setError("Informe estrutura da demonstração");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( gx.text.substring( this.A280TipoDemonstracaoEstrutura, 1, 1) != "1" )
         {
            try {
               gxballoon.setError("Estrutura de Acumulação deve ser iniciada por 1(Um)");
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
   this.Valid_Tipodemonstracaozerodireita=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPODEMONSTRACAOZERODIREITA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipodemonstracaoidentvalor=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipodemonstracaoidentvalor",["gx.O.O553TipoDemonstracaoIdentValor", "gx.O.O551TipoDemonstracaoZeroDireita", "gx.O.O280TipoDemonstracaoEstrutura", "gx.O.O550TipoDemonstracaoDescricao", "gx.O.AV8UsrCod", "gx.O.A550TipoDemonstracaoDescricao", "gx.O.A280TipoDemonstracaoEstrutura", "gx.O.A551TipoDemonstracaoZeroDireita", "gx.O.A553TipoDemonstracaoIdentValor", "gx.O.A820TipoDemonstracaoUsuarioId", 'gx.date.urlDateTime(gx.O.A775TipoDemonstracaoDataHoraAlt,"DMY4")'],["A820TipoDemonstracaoUsuarioId", "A775TipoDemonstracaoDataHoraAlt"]);
      return true;
   }
   this.e121d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131d2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141d66_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151d66_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,17,19,22,24,26,30,32,35,38,40,42,51,53];
   this.GXLastCtrlId =53;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodemonstracaoid,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOID",gxz:"Z271TipoDemonstracaoId",gxold:"O271TipoDemonstracaoId",gxvar:"A271TipoDemonstracaoId",ucs:[],op:[13],ip:[13],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A271TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z271TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPODEMONSTRACAOID",gx.O.A271TipoDemonstracaoId,0)},c2v:function(){gx.O.A271TipoDemonstracaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPODEMONSTRACAOID",'.')},nac:function(){return !(0==this.AV15TipoDemonstracaoId)}};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodemonstracaodescricao,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAODESCRICAO",gxz:"Z550TipoDemonstracaoDescricao",gxold:"O550TipoDemonstracaoDescricao",gxvar:"A550TipoDemonstracaoDescricao",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A550TipoDemonstracaoDescricao=Value},v2z:function(Value){gx.O.Z550TipoDemonstracaoDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPODEMONSTRACAODESCRICAO",gx.O.A550TipoDemonstracaoDescricao,0)},c2v:function(){gx.O.A550TipoDemonstracaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPODEMONSTRACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodemonstracaoestrutura,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOESTRUTURA",gxz:"Z280TipoDemonstracaoEstrutura",gxold:"O280TipoDemonstracaoEstrutura",gxvar:"A280TipoDemonstracaoEstrutura",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A280TipoDemonstracaoEstrutura=Value},v2z:function(Value){gx.O.Z280TipoDemonstracaoEstrutura=Value},v2c:function(){gx.fn.setControlValue("TIPODEMONSTRACAOESTRUTURA",gx.O.A280TipoDemonstracaoEstrutura,0)},c2v:function(){gx.O.A280TipoDemonstracaoEstrutura=this.val()},val:function(){return gx.fn.getControlValue("TIPODEMONSTRACAOESTRUTURA")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodemonstracaozerodireita,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOZERODIREITA",gxz:"Z551TipoDemonstracaoZeroDireita",gxold:"O551TipoDemonstracaoZeroDireita",gxvar:"A551TipoDemonstracaoZeroDireita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A551TipoDemonstracaoZeroDireita=Value},v2z:function(Value){gx.O.Z551TipoDemonstracaoZeroDireita=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPODEMONSTRACAOZERODIREITA",gx.O.A551TipoDemonstracaoZeroDireita,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A551TipoDemonstracaoZeroDireita=this.val()},val:function(){return gx.fn.getControlValue("TIPODEMONSTRACAOZERODIREITA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[30]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipodemonstracaoidentvalor,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOIDENTVALOR",gxz:"Z553TipoDemonstracaoIdentValor",gxold:"O553TipoDemonstracaoIdentValor",gxvar:"A553TipoDemonstracaoIdentValor",ucs:[],op:[42,40],ip:[42,40,32,26,24,19],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A553TipoDemonstracaoIdentValor=Value},v2z:function(Value){gx.O.Z553TipoDemonstracaoIdentValor=Value},v2c:function(){gx.fn.setComboBoxValue("TIPODEMONSTRACAOIDENTVALOR",gx.O.A553TipoDemonstracaoIdentValor)},c2v:function(){gx.O.A553TipoDemonstracaoIdentValor=this.val()},val:function(){return gx.fn.getControlValue("TIPODEMONSTRACAOIDENTVALOR")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE1",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOUSUARIOID",gxz:"Z820TipoDemonstracaoUsuarioId",gxold:"O820TipoDemonstracaoUsuarioId",gxvar:"A820TipoDemonstracaoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A820TipoDemonstracaoUsuarioId=Value},v2z:function(Value){gx.O.Z820TipoDemonstracaoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("TIPODEMONSTRACAOUSUARIOID",gx.O.A820TipoDemonstracaoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A820TipoDemonstracaoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("TIPODEMONSTRACAOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAODATAHORAALT",gxz:"Z775TipoDemonstracaoDataHoraAlt",gxold:"O775TipoDemonstracaoDataHoraAlt",gxvar:"A775TipoDemonstracaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A775TipoDemonstracaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z775TipoDemonstracaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPODEMONSTRACAODATAHORAALT",gx.O.A775TipoDemonstracaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A775TipoDemonstracaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPODEMONSTRACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[51]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV21AcessoSistemaSequencia",gxold:"OV21AcessoSistemaSequencia",gxvar:"AV21AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV21AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"BTNHELP",grid:0};
   this.A271TipoDemonstracaoId = 0 ;
   this.Z271TipoDemonstracaoId = 0 ;
   this.O271TipoDemonstracaoId = 0 ;
   this.A550TipoDemonstracaoDescricao = "" ;
   this.Z550TipoDemonstracaoDescricao = "" ;
   this.O550TipoDemonstracaoDescricao = "" ;
   this.A280TipoDemonstracaoEstrutura = "" ;
   this.Z280TipoDemonstracaoEstrutura = "" ;
   this.O280TipoDemonstracaoEstrutura = "" ;
   this.A551TipoDemonstracaoZeroDireita = "" ;
   this.Z551TipoDemonstracaoZeroDireita = "" ;
   this.O551TipoDemonstracaoZeroDireita = "" ;
   this.A553TipoDemonstracaoIdentValor = "" ;
   this.Z553TipoDemonstracaoIdentValor = "" ;
   this.O553TipoDemonstracaoIdentValor = "" ;
   this.A820TipoDemonstracaoUsuarioId = "" ;
   this.Z820TipoDemonstracaoUsuarioId = "" ;
   this.O820TipoDemonstracaoUsuarioId = "" ;
   this.A775TipoDemonstracaoDataHoraAlt = gx.date.nullDate() ;
   this.Z775TipoDemonstracaoDataHoraAlt = gx.date.nullDate() ;
   this.O775TipoDemonstracaoDataHoraAlt = gx.date.nullDate() ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.ZV21AcessoSistemaSequencia = 0 ;
   this.OV21AcessoSistemaSequencia = 0 ;
   this.AV8UsrCod = "" ;
   this.AV9EmpresaLogadaId = "" ;
   this.AV20Sistema = "" ;
   this.AV25Pgmname = "" ;
   this.AV26Pgmdesc = "" ;
   this.AV10MsgErro = "" ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.AV11Modulo = "" ;
   this.AV14Logon = {} ;
   this.AV12Tabela = "" ;
   this.AV13EmpresaPadrao = "" ;
   this.AV16ErroValValidos = "" ;
   this.AV17ErroOrdCresc = "" ;
   this.AV15TipoDemonstracaoId = 0 ;
   this.A270TipoDemonstracaoEmpresaId = "" ;
   this.A271TipoDemonstracaoId = 0 ;
   this.A820TipoDemonstracaoUsuarioId = "" ;
   this.A775TipoDemonstracaoDataHoraAlt = gx.date.nullDate() ;
   this.A550TipoDemonstracaoDescricao = "" ;
   this.A280TipoDemonstracaoEstrutura = "" ;
   this.A551TipoDemonstracaoZeroDireita = "" ;
   this.A553TipoDemonstracaoIdentValor = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e121d2_client": ["'FECHAR'", true] ,"e131d2_client": ["AFTER TRN", true] ,"e141d66_client": ["ENTER", true] ,"e151d66_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV15TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV13EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A270TipoDemonstracaoEmpresaId", "TIPODEMONSTRACAOEMPRESAID", 0, "char");
   this.setVCMap("AV15TipoDemonstracaoId", "vTIPODEMONSTRACAOID", 0, "int");
   this.setVCMap("AV8UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV16ErroValValidos", "vERROVALVALIDOS", 0, "svchar");
   this.setVCMap("AV17ErroOrdCresc", "vERROORDCRESC", 0, "svchar");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 66 ]= ["O553TipoDemonstracaoIdentValor","O551TipoDemonstracaoZeroDireita","O280TipoDemonstracaoEstrutura","O550TipoDemonstracaoDescricao"] ;
});
gx.setParentObj(new ttipodemonstracao());
