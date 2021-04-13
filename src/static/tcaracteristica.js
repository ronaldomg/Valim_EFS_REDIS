/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:37:27.79
*/
gx.evt.autoSkip = false;
gx.define('tcaracteristica', false, function () {
   this.ServerClass =  "tcaracteristica" ;
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
      this.AV8CaracteristicaCodigo=gx.fn.getControlValue("vCARACTERISTICACODIGO") ;
      this.AV11EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A11466CaracteristicaEmpresaId=gx.fn.getControlValue("CARACTERISTICAEMPRESAID") ;
      this.AV21SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV20UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Caracteristicatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CARACTERISTICATIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Caracteristicacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CARACTERISTICACODIGO");
         this.AnyError  = 0;
         if ( (""==this.A11320CaracteristicaCodigo) )
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
   this.Valid_Caracteristicadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CARACTERISTICADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A11387CaracteristicaDescricao) )
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
   this.Validv_Caracteristicatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCARACTERISTICATIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12gd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13gd2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14gd843_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15gd843_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,31,33,35,44,45,47];
   this.GXLastCtrlId =47;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Caracteristicatipo,isvalid:null,rgrid:[],fld:"CARACTERISTICATIPO",gxz:"Z11319CaracteristicaTipo",gxold:"O11319CaracteristicaTipo",gxvar:"A11319CaracteristicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11319CaracteristicaTipo=Value},v2z:function(Value){gx.O.Z11319CaracteristicaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("CARACTERISTICATIPO",gx.O.A11319CaracteristicaTipo)},c2v:function(){gx.O.A11319CaracteristicaTipo=this.val()},val:function(){return gx.fn.getControlValue("CARACTERISTICATIPO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caracteristicacodigo,isvalid:null,rgrid:[],fld:"CARACTERISTICACODIGO",gxz:"Z11320CaracteristicaCodigo",gxold:"O11320CaracteristicaCodigo",gxvar:"A11320CaracteristicaCodigo",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11320CaracteristicaCodigo=Value},v2z:function(Value){gx.O.Z11320CaracteristicaCodigo=Value},v2c:function(){gx.fn.setControlValue("CARACTERISTICACODIGO",gx.O.A11320CaracteristicaCodigo,0)},c2v:function(){gx.O.A11320CaracteristicaCodigo=this.val()},val:function(){return gx.fn.getControlValue("CARACTERISTICACODIGO")},nac:function(){return !(""==this.AV8CaracteristicaCodigo)}};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caracteristicadescricao,isvalid:null,rgrid:[],fld:"CARACTERISTICADESCRICAO",gxz:"Z11387CaracteristicaDescricao",gxold:"O11387CaracteristicaDescricao",gxvar:"A11387CaracteristicaDescricao",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11387CaracteristicaDescricao=Value},v2z:function(Value){gx.O.Z11387CaracteristicaDescricao=Value},v2c:function(){gx.fn.setControlValue("CARACTERISTICADESCRICAO",gx.O.A11387CaracteristicaDescricao,0)},c2v:function(){gx.O.A11387CaracteristicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("CARACTERISTICADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICAUSUARIOALT",gxz:"Z11429CaracteristicaUsuarioAlt",gxold:"O11429CaracteristicaUsuarioAlt",gxvar:"A11429CaracteristicaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11429CaracteristicaUsuarioAlt=Value},v2z:function(Value){gx.O.Z11429CaracteristicaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CARACTERISTICAUSUARIOALT",gx.O.A11429CaracteristicaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11429CaracteristicaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CARACTERISTICAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICADATAHORAALT",gxz:"Z11430CaracteristicaDataHoraAlt",gxold:"O11430CaracteristicaDataHoraAlt",gxvar:"A11430CaracteristicaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11430CaracteristicaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11430CaracteristicaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CARACTERISTICADATAHORAALT",gx.O.A11430CaracteristicaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11430CaracteristicaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CARACTERISTICADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Caracteristicatipo,isvalid:null,rgrid:[],fld:"vCARACTERISTICATIPO",gxz:"ZV9CaracteristicaTipo",gxold:"OV9CaracteristicaTipo",gxvar:"AV9CaracteristicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9CaracteristicaTipo=Value},v2z:function(Value){gx.O.ZV9CaracteristicaTipo=Value},v2c:function(){gx.fn.setControlValue("vCARACTERISTICATIPO",gx.O.AV9CaracteristicaTipo,0)},c2v:function(){gx.O.AV9CaracteristicaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCARACTERISTICATIPO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   this.A11319CaracteristicaTipo = "" ;
   this.Z11319CaracteristicaTipo = "" ;
   this.O11319CaracteristicaTipo = "" ;
   this.A11320CaracteristicaCodigo = "" ;
   this.Z11320CaracteristicaCodigo = "" ;
   this.O11320CaracteristicaCodigo = "" ;
   this.A11387CaracteristicaDescricao = "" ;
   this.Z11387CaracteristicaDescricao = "" ;
   this.O11387CaracteristicaDescricao = "" ;
   this.A11429CaracteristicaUsuarioAlt = "" ;
   this.Z11429CaracteristicaUsuarioAlt = "" ;
   this.O11429CaracteristicaUsuarioAlt = "" ;
   this.A11430CaracteristicaDataHoraAlt = gx.date.nullDate() ;
   this.Z11430CaracteristicaDataHoraAlt = gx.date.nullDate() ;
   this.O11430CaracteristicaDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV9CaracteristicaTipo = "" ;
   this.ZV9CaracteristicaTipo = "" ;
   this.OV9CaracteristicaTipo = "" ;
   this.AV20UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV15Logon = {} ;
   this.AV18Sistema = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV17MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV16Modulo = "" ;
   this.AV19Tabela = "" ;
   this.AV11EmpresaPadrao = "" ;
   this.AV9CaracteristicaTipo = "" ;
   this.AV8CaracteristicaCodigo = "" ;
   this.A11466CaracteristicaEmpresaId = "" ;
   this.A11319CaracteristicaTipo = "" ;
   this.A11320CaracteristicaCodigo = "" ;
   this.AV21SnAlterou = "" ;
   this.A11387CaracteristicaDescricao = "" ;
   this.A11429CaracteristicaUsuarioAlt = "" ;
   this.A11430CaracteristicaDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12gd2_client": ["'FECHAR'", true] ,"e13gd2_client": ["AFTER TRN", true] ,"e14gd843_client": ["ENTER", true] ,"e15gd843_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV9CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV8CaracteristicaCodigo", "vCARACTERISTICACODIGO", 0, "char");
   this.setVCMap("AV11EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A11466CaracteristicaEmpresaId", "CARACTERISTICAEMPRESAID", 0, "char");
   this.setVCMap("AV21SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV20UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 843 ]= ["O11387CaracteristicaDescricao","O11320CaracteristicaCodigo","O11319CaracteristicaTipo"] ;
});
gx.setParentObj(new tcaracteristica());
