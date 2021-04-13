/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:31:43.92
*/
gx.evt.autoSkip = false;
gx.define('terroprocesso', false, function () {
   this.ServerClass =  "terroprocesso" ;
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
      this.AV19ProcessoRotina=gx.fn.getControlValue("vPROCESSOROTINA") ;
      this.AV18ProcessoId=gx.fn.getIntegerValue("vPROCESSOID",'.') ;
      this.AV17ErroProcessoSequencia=gx.fn.getIntegerValue("vERROPROCESSOSEQUENCIA",'.') ;
      this.AV20SnModificado=gx.fn.getControlValue("vSNMODIFICADO") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV28Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Processorotina=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOROTINA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Processoid",["gx.O.A1543ProcessoRotina", "gx.O.A1544ProcessoId"],[]);
      return true;
   }
   this.Valid_Erroprocessosequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ERROPROCESSOSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Erroprocessoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ERROPROCESSOID");
         this.AnyError  = 0;
         if ( (0==this.A1550ErroProcessoId) )
         {
            try {
               gxballoon.setError("Informe o Código do Erro");
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
   this.Valid_Erroprocessodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ERROPROCESSODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A1551ErroProcessoDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição do Erro");
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
   this.e12322_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13322_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1432233_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1532233_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,19,21,24,26,29,31,34,36,39,42,44,46,55,57];
   this.GXLastCtrlId =57;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Processorotina,isvalid:null,rgrid:[],fld:"PROCESSOROTINA",gxz:"Z1543ProcessoRotina",gxold:"O1543ProcessoRotina",gxvar:"A1543ProcessoRotina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1543ProcessoRotina=Value},v2z:function(Value){gx.O.Z1543ProcessoRotina=Value},v2c:function(){gx.fn.setControlValue("PROCESSOROTINA",gx.O.A1543ProcessoRotina,0)},c2v:function(){gx.O.A1543ProcessoRotina=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOROTINA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TPROCESSOROTINA", format:0,grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Processoid,isvalid:null,rgrid:[],fld:"PROCESSOID",gxz:"Z1544ProcessoId",gxold:"O1544ProcessoId",gxvar:"A1544ProcessoId",ucs:[],op:[],ip:[21,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1544ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1544ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROCESSOID",gx.O.A1544ProcessoId,0)},c2v:function(){gx.O.A1544ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Erroprocessosequencia,isvalid:null,rgrid:[],fld:"ERROPROCESSOSEQUENCIA",gxz:"Z1549ErroProcessoSequencia",gxold:"O1549ErroProcessoSequencia",gxvar:"A1549ErroProcessoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1549ErroProcessoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1549ErroProcessoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ERROPROCESSOSEQUENCIA",gx.O.A1549ErroProcessoSequencia,0)},c2v:function(){gx.O.A1549ErroProcessoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ERROPROCESSOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Erroprocessoid,isvalid:null,rgrid:[],fld:"ERROPROCESSOID",gxz:"Z1550ErroProcessoId",gxold:"O1550ErroProcessoId",gxvar:"A1550ErroProcessoId",ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1550ErroProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1550ErroProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ERROPROCESSOID",gx.O.A1550ErroProcessoId,0)},c2v:function(){gx.O.A1550ErroProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ERROPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:350,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Erroprocessodescricao,isvalid:null,rgrid:[],fld:"ERROPROCESSODESCRICAO",gxz:"Z1551ErroProcessoDescricao",gxold:"O1551ErroProcessoDescricao",gxvar:"A1551ErroProcessoDescricao",ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1551ErroProcessoDescricao=Value},v2z:function(Value){gx.O.Z1551ErroProcessoDescricao=Value},v2c:function(){gx.fn.setControlValue("ERROPROCESSODESCRICAO",gx.O.A1551ErroProcessoDescricao,0)},c2v:function(){gx.O.A1551ErroProcessoDescricao=this.val()},val:function(){return gx.fn.getControlValue("ERROPROCESSODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE4",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ERROPROCESSOUSUARIOALT",gxz:"Z1553ErroProcessoUsuarioAlt",gxold:"O1553ErroProcessoUsuarioAlt",gxvar:"A1553ErroProcessoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1553ErroProcessoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1553ErroProcessoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ERROPROCESSOUSUARIOALT",gx.O.A1553ErroProcessoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1553ErroProcessoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ERROPROCESSOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ERROPROCESSODATAHORAALT",gxz:"Z1552ErroProcessoDataHoraAlt",gxold:"O1552ErroProcessoDataHoraAlt",gxvar:"A1552ErroProcessoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1552ErroProcessoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1552ErroProcessoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ERROPROCESSODATAHORAALT",gx.O.A1552ErroProcessoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1552ErroProcessoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ERROPROCESSODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[55]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV21AcessoSistemaSequencia",gxold:"OV21AcessoSistemaSequencia",gxvar:"AV21AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV21AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV21AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"BTNHELP",grid:0};
   this.A1543ProcessoRotina = "" ;
   this.Z1543ProcessoRotina = "" ;
   this.O1543ProcessoRotina = "" ;
   this.A1544ProcessoId = 0 ;
   this.Z1544ProcessoId = 0 ;
   this.O1544ProcessoId = 0 ;
   this.A1549ErroProcessoSequencia = 0 ;
   this.Z1549ErroProcessoSequencia = 0 ;
   this.O1549ErroProcessoSequencia = 0 ;
   this.A1550ErroProcessoId = 0 ;
   this.Z1550ErroProcessoId = 0 ;
   this.O1550ErroProcessoId = 0 ;
   this.A1551ErroProcessoDescricao = "" ;
   this.Z1551ErroProcessoDescricao = "" ;
   this.O1551ErroProcessoDescricao = "" ;
   this.A1553ErroProcessoUsuarioAlt = "" ;
   this.Z1553ErroProcessoUsuarioAlt = "" ;
   this.O1553ErroProcessoUsuarioAlt = "" ;
   this.A1552ErroProcessoDataHoraAlt = gx.date.nullDate() ;
   this.Z1552ErroProcessoDataHoraAlt = gx.date.nullDate() ;
   this.O1552ErroProcessoDataHoraAlt = gx.date.nullDate() ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.ZV21AcessoSistemaSequencia = 0 ;
   this.OV21AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV27Pgmname = "" ;
   this.AV28Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV21AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20SnModificado = "" ;
   this.AV26TProcessoRotina = "" ;
   this.AV19ProcessoRotina = "" ;
   this.AV18ProcessoId = 0 ;
   this.AV17ErroProcessoSequencia = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1544ProcessoId = 0 ;
   this.A1549ErroProcessoSequencia = 0 ;
   this.A1553ErroProcessoUsuarioAlt = "" ;
   this.A1552ErroProcessoDataHoraAlt = gx.date.nullDate() ;
   this.A1550ErroProcessoId = 0 ;
   this.A1551ErroProcessoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12322_client": ["'FECHAR'", true] ,"e13322_client": ["AFTER TRN", true] ,"e1432233_client": ["ENTER", true] ,"e1532233_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV18ProcessoId',fld:'vPROCESSOID'},{av:'AV17ErroProcessoSequencia',fld:'vERROPROCESSOSEQUENCIA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV19ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV18ProcessoId',fld:'vPROCESSOID'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV21AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19ProcessoRotina", "vPROCESSOROTINA", 0, "svchar");
   this.setVCMap("AV18ProcessoId", "vPROCESSOID", 0, "int");
   this.setVCMap("AV17ErroProcessoSequencia", "vERROPROCESSOSEQUENCIA", 0, "int");
   this.setVCMap("AV20SnModificado", "vSNMODIFICADO", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV28Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV27Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 233 ]= ["O1551ErroProcessoDescricao","O1550ErroProcessoId"] ;
});
gx.setParentObj(new terroprocesso());
