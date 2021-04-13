/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:33:29.39
*/
gx.evt.autoSkip = false;
gx.define('ttipoclassfluxo', false, function () {
   this.ServerClass =  "ttipoclassfluxo" ;
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
      this.AV8TipoClassFluxoId=gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A10198TipoClassFluxoEmpresaId=gx.fn.getControlValue("TIPOCLASSFLUXOEMPRESAID") ;
      this.AV15SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV9UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV19Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV18Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tipoclassfluxoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCLASSFLUXOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipoclassfluxodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCLASSFLUXODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A10345TipoClassFluxoDescricao) )
         {
            try {
               gxballoon.setError("Informe a descrição");
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
   this.Valid_Tipoclassfluxotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOCLASSFLUXOTIPO");
         this.AnyError  = 0;
         if ( (""==this.A10346TipoClassFluxoTipo) )
         {
            try {
               gxballoon.setError("Informe o tipo de fluxo");
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
   this.e12f12_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13f12_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14f1772_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15f1772_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,31,33,35,44,46];
   this.GXLastCtrlId =46;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipoclassfluxoid,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXOID",gxz:"Z10199TipoClassFluxoId",gxold:"O10199TipoClassFluxoId",gxvar:"A10199TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10199TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10199TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOCLASSFLUXOID",gx.O.A10199TipoClassFluxoId,0)},c2v:function(){gx.O.A10199TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoclassfluxodescricao,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXODESCRICAO",gxz:"Z10345TipoClassFluxoDescricao",gxold:"O10345TipoClassFluxoDescricao",gxvar:"A10345TipoClassFluxoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10345TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.Z10345TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOCLASSFLUXODESCRICAO",gx.O.A10345TipoClassFluxoDescricao,0)},c2v:function(){gx.O.A10345TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoclassfluxotipo,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXOTIPO",gxz:"Z10346TipoClassFluxoTipo",gxold:"O10346TipoClassFluxoTipo",gxvar:"A10346TipoClassFluxoTipo",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10346TipoClassFluxoTipo=Value},v2z:function(Value){gx.O.Z10346TipoClassFluxoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOCLASSFLUXOTIPO",gx.O.A10346TipoClassFluxoTipo)},c2v:function(){gx.O.A10346TipoClassFluxoTipo=this.val()},val:function(){return gx.fn.getControlValue("TIPOCLASSFLUXOTIPO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXOUSUARIOALT",gxz:"Z10347TipoClassFluxoUsuarioAlt",gxold:"O10347TipoClassFluxoUsuarioAlt",gxvar:"A10347TipoClassFluxoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10347TipoClassFluxoUsuarioAlt=Value},v2z:function(Value){gx.O.Z10347TipoClassFluxoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPOCLASSFLUXOUSUARIOALT",gx.O.A10347TipoClassFluxoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10347TipoClassFluxoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPOCLASSFLUXOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXODATAHORAALT",gxz:"Z10348TipoClassFluxoDataHoraAlt",gxold:"O10348TipoClassFluxoDataHoraAlt",gxvar:"A10348TipoClassFluxoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10348TipoClassFluxoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10348TipoClassFluxoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOCLASSFLUXODATAHORAALT",gx.O.A10348TipoClassFluxoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10348TipoClassFluxoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOCLASSFLUXODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A10199TipoClassFluxoId = 0 ;
   this.Z10199TipoClassFluxoId = 0 ;
   this.O10199TipoClassFluxoId = 0 ;
   this.A10345TipoClassFluxoDescricao = "" ;
   this.Z10345TipoClassFluxoDescricao = "" ;
   this.O10345TipoClassFluxoDescricao = "" ;
   this.A10346TipoClassFluxoTipo = "" ;
   this.Z10346TipoClassFluxoTipo = "" ;
   this.O10346TipoClassFluxoTipo = "" ;
   this.A10347TipoClassFluxoUsuarioAlt = "" ;
   this.Z10347TipoClassFluxoUsuarioAlt = "" ;
   this.O10347TipoClassFluxoUsuarioAlt = "" ;
   this.A10348TipoClassFluxoDataHoraAlt = gx.date.nullDate() ;
   this.Z10348TipoClassFluxoDataHoraAlt = gx.date.nullDate() ;
   this.O10348TipoClassFluxoDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV9UsrCod = "" ;
   this.AV11EmpresaLogadaId = "" ;
   this.AV17Sistema = "" ;
   this.AV18Pgmname = "" ;
   this.AV19Pgmdesc = "" ;
   this.AV16MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV13Modulo = "" ;
   this.AV10Logon = {} ;
   this.AV14Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV15SnAlterou = "" ;
   this.AV8TipoClassFluxoId = 0 ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A10347TipoClassFluxoUsuarioAlt = "" ;
   this.A10348TipoClassFluxoDataHoraAlt = gx.date.nullDate() ;
   this.A10345TipoClassFluxoDescricao = "" ;
   this.A10346TipoClassFluxoTipo = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12f12_client": ["'FECHAR'", true] ,"e13f12_client": ["AFTER TRN", true] ,"e14f1772_client": ["ENTER", true] ,"e15f1772_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV8TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV8TipoClassFluxoId", "vTIPOCLASSFLUXOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10198TipoClassFluxoEmpresaId", "TIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("AV15SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV9UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV19Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV18Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 772 ]= ["O10346TipoClassFluxoTipo","O10345TipoClassFluxoDescricao","O10199TipoClassFluxoId"] ;
});
gx.setParentObj(new ttipoclassfluxo());
