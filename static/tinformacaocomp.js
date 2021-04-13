/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:34:7.46
*/
gx.evt.autoSkip = false;
gx.define('tinformacaocomp', false, function () {
   this.ServerClass =  "tinformacaocomp" ;
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
      this.AV8InformacaoCompId=gx.fn.getIntegerValue("vINFORMACAOCOMPID",'.') ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A10568InformacaoCompEmpresaId=gx.fn.getControlValue("INFORMACAOCOMPEMPRESAID") ;
      this.AV16AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV9UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV19Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV18Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Informacaocompid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOCOMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaocompdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAOCOMPDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A10571InformacaoCompDescricao) )
         {
            try {
               gxballoon.setError("Informe descrição");
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
   this.e12fc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13fc2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14fc785_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15fc785_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Informacaocompid,isvalid:null,rgrid:[],fld:"INFORMACAOCOMPID",gxz:"Z10569InformacaoCompId",gxold:"O10569InformacaoCompId",gxvar:"A10569InformacaoCompId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10569InformacaoCompId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10569InformacaoCompId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAOCOMPID",gx.O.A10569InformacaoCompId,0)},c2v:function(){gx.O.A10569InformacaoCompId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAOCOMPID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaocompdescricao,isvalid:null,rgrid:[],fld:"INFORMACAOCOMPDESCRICAO",gxz:"Z10571InformacaoCompDescricao",gxold:"O10571InformacaoCompDescricao",gxvar:"A10571InformacaoCompDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10571InformacaoCompDescricao=Value},v2z:function(Value){gx.O.Z10571InformacaoCompDescricao=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOCOMPDESCRICAO",gx.O.A10571InformacaoCompDescricao,0)},c2v:function(){gx.O.A10571InformacaoCompDescricao=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOCOMPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOCOMPUSUARIOALT",gxz:"Z10572InformacaoCompUsuarioAlt",gxold:"O10572InformacaoCompUsuarioAlt",gxvar:"A10572InformacaoCompUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10572InformacaoCompUsuarioAlt=Value},v2z:function(Value){gx.O.Z10572InformacaoCompUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("INFORMACAOCOMPUSUARIOALT",gx.O.A10572InformacaoCompUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10572InformacaoCompUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAOCOMPUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAOCOMPDATAHORAALT",gxz:"Z10570InformacaoCompDataHoraAlt",gxold:"O10570InformacaoCompDataHoraAlt",gxvar:"A10570InformacaoCompDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10570InformacaoCompDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10570InformacaoCompDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAOCOMPDATAHORAALT",gx.O.A10570InformacaoCompDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10570InformacaoCompDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("INFORMACAOCOMPDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A10569InformacaoCompId = 0 ;
   this.Z10569InformacaoCompId = 0 ;
   this.O10569InformacaoCompId = 0 ;
   this.A10571InformacaoCompDescricao = "" ;
   this.Z10571InformacaoCompDescricao = "" ;
   this.O10571InformacaoCompDescricao = "" ;
   this.A10572InformacaoCompUsuarioAlt = "" ;
   this.Z10572InformacaoCompUsuarioAlt = "" ;
   this.O10572InformacaoCompUsuarioAlt = "" ;
   this.A10570InformacaoCompDataHoraAlt = gx.date.nullDate() ;
   this.Z10570InformacaoCompDataHoraAlt = gx.date.nullDate() ;
   this.O10570InformacaoCompDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV9UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV11Sistema = "" ;
   this.AV18Pgmname = "" ;
   this.AV19Pgmdesc = "" ;
   this.AV17MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV12Modulo = "" ;
   this.AV13Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV16AlterDados = "" ;
   this.AV8InformacaoCompId = 0 ;
   this.A10568InformacaoCompEmpresaId = "" ;
   this.A10569InformacaoCompId = 0 ;
   this.A10572InformacaoCompUsuarioAlt = "" ;
   this.A10570InformacaoCompDataHoraAlt = gx.date.nullDate() ;
   this.A10571InformacaoCompDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12fc2_client": ["'FECHAR'", true] ,"e13fc2_client": ["AFTER TRN", true] ,"e14fc785_client": ["ENTER", true] ,"e15fc785_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV8InformacaoCompId',fld:'vINFORMACAOCOMPID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV8InformacaoCompId", "vINFORMACAOCOMPID", 0, "int");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10568InformacaoCompEmpresaId", "INFORMACAOCOMPEMPRESAID", 0, "char");
   this.setVCMap("AV16AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV9UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV19Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV18Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 785 ]= ["O10571InformacaoCompDescricao"] ;
});
gx.setParentObj(new tinformacaocomp());
