/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:17:37.82
*/
gx.evt.autoSkip = false;
gx.define('tpermissaoconc', false, function () {
   this.ServerClass =  "tpermissaoconc" ;
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
      this.AV18TipoPermissaoId=gx.fn.getIntegerValue("vTIPOPERMISSAOID",'.') ;
      this.AV19PermissaoConcSeq=gx.fn.getIntegerValue("vPERMISSAOCONCSEQ",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A6566PermissaoConcStatus=gx.fn.getControlValue("PERMISSAOCONCSTATUS") ;
      this.A6567PermissaoConcSnPendente=gx.fn.getControlValue("PERMISSAOCONCSNPENDENTE") ;
      this.A6565PermissaoConcNoAgrupamento=gx.fn.getIntegerValue("PERMISSAOCONCNOAGRUPAMENTO",'.') ;
      this.AV24Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV23Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Permissaoconcseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOCONCSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipopermissaoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipopermissaoid",["gx.O.A568TipoPermissaoId", "gx.O.A557TipoPermissaoDescricao"],["A557TipoPermissaoDescricao"]);
      return true;
   }
   this.Valid_Permissaousuariosolid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Permissaousuariosolid",["gx.O.A3139PermissaoUsuarioSolId", "gx.O.A3140PermissaoUsuarioSolNome"],["A3140PermissaoUsuarioSolNome"]);
      return true;
   }
   this.Valid_Permissaousuariolibid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Permissaousuariolibid",["gx.O.A3141PermissaoUsuarioLibId", "gx.O.A3142PermissaoUsuarioLibNome"],["A3142PermissaoUsuarioLibNome"]);
      return true;
   }
   this.Valid_Permissaoconcempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PERMISSAOCONCEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Permissaoconcprogramasistema=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Permissaoconcprogramasistema",["gx.O.A3150PermissaoConcProgramaSistema"],[]);
      return true;
   }
   this.Valid_Permissaoconcprogramaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Permissaoconcprogramaid",["gx.O.A3150PermissaoConcProgramaSistema", "gx.O.A3151PermissaoConcProgramaId", "gx.O.A3152PermissaoConcProgramaNome", "gx.O.A3153PermissaoConcProgramaLink"],["A3152PermissaoConcProgramaNome", "A3153PermissaoConcProgramaLink"]);
      return true;
   }
   this.e125u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e135u2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e145u342_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e155u342_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,21,24,26,29,31,32,35,37,40,42,43,46,48,51,53,56,58,59,60,63,65,66,67,70,73,75,77,86,88,90,91,92,93,94,95];
   this.GXLastCtrlId =95;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Permissaoconcseq,isvalid:null,rgrid:[],fld:"PERMISSAOCONCSEQ",gxz:"Z3143PermissaoConcSeq",gxold:"O3143PermissaoConcSeq",gxvar:"A3143PermissaoConcSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3143PermissaoConcSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3143PermissaoConcSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PERMISSAOCONCSEQ",gx.O.A3143PermissaoConcSeq,0)},c2v:function(){gx.O.A3143PermissaoConcSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PERMISSAOCONCSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipopermissaoid,isvalid:null,rgrid:[],fld:"TIPOPERMISSAOID",gxz:"Z568TipoPermissaoId",gxold:"O568TipoPermissaoId",gxvar:"A568TipoPermissaoId",ucs:[],op:[21],ip:[21,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A568TipoPermissaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z568TipoPermissaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOPERMISSAOID",gx.O.A568TipoPermissaoId,0)},c2v:function(){gx.O.A568TipoPermissaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOPERMISSAOID",'.')},nac:function(){return !(0==this.AV18TipoPermissaoId)}};
   GXValidFnc[21]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPERMISSAODESCRICAO",gxz:"Z557TipoPermissaoDescricao",gxold:"O557TipoPermissaoDescricao",gxvar:"A557TipoPermissaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A557TipoPermissaoDescricao=Value},v2z:function(Value){gx.O.Z557TipoPermissaoDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOPERMISSAODESCRICAO",gx.O.A557TipoPermissaoDescricao,0)},c2v:function(){gx.O.A557TipoPermissaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOPERMISSAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCDATAHORASOL",gxz:"Z3144PermissaoConcDataHoraSol",gxold:"O3144PermissaoConcDataHoraSol",gxvar:"A3144PermissaoConcDataHoraSol",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3144PermissaoConcDataHoraSol=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3144PermissaoConcDataHoraSol=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PERMISSAOCONCDATAHORASOL",gx.O.A3144PermissaoConcDataHoraSol,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3144PermissaoConcDataHoraSol=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PERMISSAOCONCDATAHORASOL")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousuariosolid,isvalid:null,rgrid:[],fld:"PERMISSAOUSUARIOSOLID",gxz:"Z3139PermissaoUsuarioSolId",gxold:"O3139PermissaoUsuarioSolId",gxvar:"A3139PermissaoUsuarioSolId",ucs:[],op:[32],ip:[32,31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3139PermissaoUsuarioSolId=Value},v2z:function(Value){gx.O.Z3139PermissaoUsuarioSolId=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOUSUARIOSOLID",gx.O.A3139PermissaoUsuarioSolId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3139PermissaoUsuarioSolId=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUARIOSOLID")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[32]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUARIOSOLNOME",gxz:"Z3140PermissaoUsuarioSolNome",gxold:"O3140PermissaoUsuarioSolNome",gxvar:"A3140PermissaoUsuarioSolNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3140PermissaoUsuarioSolNome=Value},v2z:function(Value){gx.O.Z3140PermissaoUsuarioSolNome=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOUSUARIOSOLNOME",gx.O.A3140PermissaoUsuarioSolNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3140PermissaoUsuarioSolNome=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUARIOSOLNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCDATAHORALIB",gxz:"Z3145PermissaoConcDataHoraLib",gxold:"O3145PermissaoConcDataHoraLib",gxvar:"A3145PermissaoConcDataHoraLib",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3145PermissaoConcDataHoraLib=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3145PermissaoConcDataHoraLib=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PERMISSAOCONCDATAHORALIB",gx.O.A3145PermissaoConcDataHoraLib,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3145PermissaoConcDataHoraLib=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PERMISSAOCONCDATAHORALIB")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaousuariolibid,isvalid:null,rgrid:[],fld:"PERMISSAOUSUARIOLIBID",gxz:"Z3141PermissaoUsuarioLibId",gxold:"O3141PermissaoUsuarioLibId",gxvar:"A3141PermissaoUsuarioLibId",ucs:[],op:[43],ip:[43,42],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3141PermissaoUsuarioLibId=Value},v2z:function(Value){gx.O.Z3141PermissaoUsuarioLibId=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOUSUARIOLIBID",gx.O.A3141PermissaoUsuarioLibId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3141PermissaoUsuarioLibId=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUARIOLIBID")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUARIOLIBNOME",gxz:"Z3142PermissaoUsuarioLibNome",gxold:"O3142PermissaoUsuarioLibNome",gxvar:"A3142PermissaoUsuarioLibNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3142PermissaoUsuarioLibNome=Value},v2z:function(Value){gx.O.Z3142PermissaoUsuarioLibNome=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOUSUARIOLIBNOME",gx.O.A3142PermissaoUsuarioLibNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3142PermissaoUsuarioLibNome=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOUSUARIOLIBNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaoconcempresaid,isvalid:null,rgrid:[],fld:"PERMISSAOCONCEMPRESAID",gxz:"Z3149PermissaoConcEmpresaId",gxold:"O3149PermissaoConcEmpresaId",gxvar:"A3149PermissaoConcEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3149PermissaoConcEmpresaId=Value},v2z:function(Value){gx.O.Z3149PermissaoConcEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOCONCEMPRESAID",gx.O.A3149PermissaoConcEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3149PermissaoConcEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOCONCEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[51]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaoconcprogramasistema,isvalid:null,rgrid:[],fld:"PERMISSAOCONCPROGRAMASISTEMA",gxz:"Z3150PermissaoConcProgramaSistema",gxold:"O3150PermissaoConcProgramaSistema",gxvar:"A3150PermissaoConcProgramaSistema",ucs:[],op:[],ip:[53],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3150PermissaoConcProgramaSistema=Value},v2z:function(Value){gx.O.Z3150PermissaoConcProgramaSistema=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOCONCPROGRAMASISTEMA",gx.O.A3150PermissaoConcProgramaSistema,0)},c2v:function(){gx.O.A3150PermissaoConcProgramaSistema=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOCONCPROGRAMASISTEMA")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Permissaoconcprogramaid,isvalid:null,rgrid:[],fld:"PERMISSAOCONCPROGRAMAID",gxz:"Z3151PermissaoConcProgramaId",gxold:"O3151PermissaoConcProgramaId",gxvar:"A3151PermissaoConcProgramaId",ucs:[],op:[60,59],ip:[60,59,58,53],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3151PermissaoConcProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3151PermissaoConcProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PERMISSAOCONCPROGRAMAID",gx.O.A3151PermissaoConcProgramaId,0)},c2v:function(){gx.O.A3151PermissaoConcProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PERMISSAOCONCPROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCPROGRAMANOME",gxz:"Z3152PermissaoConcProgramaNome",gxold:"O3152PermissaoConcProgramaNome",gxvar:"A3152PermissaoConcProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3152PermissaoConcProgramaNome=Value},v2z:function(Value){gx.O.Z3152PermissaoConcProgramaNome=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOCONCPROGRAMANOME",gx.O.A3152PermissaoConcProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3152PermissaoConcProgramaNome=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOCONCPROGRAMANOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[60]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCPROGRAMALINK",gxz:"Z3153PermissaoConcProgramaLink",gxold:"O3153PermissaoConcProgramaLink",gxvar:"A3153PermissaoConcProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3153PermissaoConcProgramaLink=Value},v2z:function(Value){gx.O.Z3153PermissaoConcProgramaLink=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOCONCPROGRAMALINK",gx.O.A3153PermissaoConcProgramaLink,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3153PermissaoConcProgramaLink=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOCONCPROGRAMALINK")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[65]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[66]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCOBSERVACAO",gxz:"Z3146PermissaoConcObservacao",gxold:"O3146PermissaoConcObservacao",gxvar:"A3146PermissaoConcObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3146PermissaoConcObservacao=Value},v2z:function(Value){gx.O.Z3146PermissaoConcObservacao=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOCONCOBSERVACAO",gx.O.A3146PermissaoConcObservacao,0)},c2v:function(){gx.O.A3146PermissaoConcObservacao=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOCONCOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[70]={fld:"TABLE5",grid:0};
   GXValidFnc[73]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCUSUARIOALT",gxz:"Z3147PermissaoConcUsuarioAlt",gxold:"O3147PermissaoConcUsuarioAlt",gxvar:"A3147PermissaoConcUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3147PermissaoConcUsuarioAlt=Value},v2z:function(Value){gx.O.Z3147PermissaoConcUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PERMISSAOCONCUSUARIOALT",gx.O.A3147PermissaoConcUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3147PermissaoConcUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PERMISSAOCONCUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[77]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCDATAHORAALT",gxz:"Z3148PermissaoConcDataHoraAlt",gxold:"O3148PermissaoConcDataHoraAlt",gxvar:"A3148PermissaoConcDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3148PermissaoConcDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3148PermissaoConcDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PERMISSAOCONCDATAHORAALT",gx.O.A3148PermissaoConcDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3148PermissaoConcDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PERMISSAOCONCDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[86]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"BTNHELP",grid:0};
   GXValidFnc[90]={fld:"PROMPT_568",grid:342};
   GXValidFnc[91]={fld:"PROMPT_3139",grid:342};
   GXValidFnc[92]={fld:"PROMPT_3141",grid:342};
   GXValidFnc[93]={fld:"PROMPT_3149",grid:342};
   GXValidFnc[94]={fld:"PROMPT_3150",grid:342};
   GXValidFnc[95]={fld:"PROMPT_3151",grid:342};
   this.A3143PermissaoConcSeq = 0 ;
   this.Z3143PermissaoConcSeq = 0 ;
   this.O3143PermissaoConcSeq = 0 ;
   this.A568TipoPermissaoId = 0 ;
   this.Z568TipoPermissaoId = 0 ;
   this.O568TipoPermissaoId = 0 ;
   this.A557TipoPermissaoDescricao = "" ;
   this.Z557TipoPermissaoDescricao = "" ;
   this.O557TipoPermissaoDescricao = "" ;
   this.A3144PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.Z3144PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.O3144PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.A3139PermissaoUsuarioSolId = "" ;
   this.Z3139PermissaoUsuarioSolId = "" ;
   this.O3139PermissaoUsuarioSolId = "" ;
   this.A3140PermissaoUsuarioSolNome = "" ;
   this.Z3140PermissaoUsuarioSolNome = "" ;
   this.O3140PermissaoUsuarioSolNome = "" ;
   this.A3145PermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.Z3145PermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.O3145PermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.A3141PermissaoUsuarioLibId = "" ;
   this.Z3141PermissaoUsuarioLibId = "" ;
   this.O3141PermissaoUsuarioLibId = "" ;
   this.A3142PermissaoUsuarioLibNome = "" ;
   this.Z3142PermissaoUsuarioLibNome = "" ;
   this.O3142PermissaoUsuarioLibNome = "" ;
   this.A3149PermissaoConcEmpresaId = "" ;
   this.Z3149PermissaoConcEmpresaId = "" ;
   this.O3149PermissaoConcEmpresaId = "" ;
   this.A3150PermissaoConcProgramaSistema = "" ;
   this.Z3150PermissaoConcProgramaSistema = "" ;
   this.O3150PermissaoConcProgramaSistema = "" ;
   this.A3151PermissaoConcProgramaId = 0 ;
   this.Z3151PermissaoConcProgramaId = 0 ;
   this.O3151PermissaoConcProgramaId = 0 ;
   this.A3152PermissaoConcProgramaNome = "" ;
   this.Z3152PermissaoConcProgramaNome = "" ;
   this.O3152PermissaoConcProgramaNome = "" ;
   this.A3153PermissaoConcProgramaLink = "" ;
   this.Z3153PermissaoConcProgramaLink = "" ;
   this.O3153PermissaoConcProgramaLink = "" ;
   this.A3146PermissaoConcObservacao = "" ;
   this.Z3146PermissaoConcObservacao = "" ;
   this.O3146PermissaoConcObservacao = "" ;
   this.A3147PermissaoConcUsuarioAlt = "" ;
   this.Z3147PermissaoConcUsuarioAlt = "" ;
   this.O3147PermissaoConcUsuarioAlt = "" ;
   this.A3148PermissaoConcDataHoraAlt = gx.date.nullDate() ;
   this.Z3148PermissaoConcDataHoraAlt = gx.date.nullDate() ;
   this.O3148PermissaoConcDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV23Pgmname = "" ;
   this.AV24Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV18TipoPermissaoId = 0 ;
   this.AV19PermissaoConcSeq = 0 ;
   this.A568TipoPermissaoId = 0 ;
   this.A3143PermissaoConcSeq = 0 ;
   this.A3147PermissaoConcUsuarioAlt = "" ;
   this.A3148PermissaoConcDataHoraAlt = gx.date.nullDate() ;
   this.A557TipoPermissaoDescricao = "" ;
   this.A3144PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.A3139PermissaoUsuarioSolId = "" ;
   this.A3140PermissaoUsuarioSolNome = "" ;
   this.A3145PermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.A3141PermissaoUsuarioLibId = "" ;
   this.A3142PermissaoUsuarioLibNome = "" ;
   this.A3149PermissaoConcEmpresaId = "" ;
   this.A3150PermissaoConcProgramaSistema = "" ;
   this.A3151PermissaoConcProgramaId = 0 ;
   this.A3152PermissaoConcProgramaNome = "" ;
   this.A3153PermissaoConcProgramaLink = "" ;
   this.A3146PermissaoConcObservacao = "" ;
   this.A6566PermissaoConcStatus = "" ;
   this.A6567PermissaoConcSnPendente = "" ;
   this.A6565PermissaoConcNoAgrupamento = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e125u2_client": ["'FECHAR'", true] ,"e135u2_client": ["AFTER TRN", true] ,"e145u342_client": ["ENTER", true] ,"e155u342_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'AV19PermissaoConcSeq',fld:'vPERMISSAOCONCSEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_568", [20]);
   this.setPrompt("PROMPT_3139", [31]);
   this.setPrompt("PROMPT_3141", [42]);
   this.setPrompt("PROMPT_3149", [48]);
   this.setPrompt("PROMPT_3150", [53]);
   this.setPrompt("PROMPT_3151", [58]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TipoPermissaoId", "vTIPOPERMISSAOID", 0, "int");
   this.setVCMap("AV19PermissaoConcSeq", "vPERMISSAOCONCSEQ", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A6566PermissaoConcStatus", "PERMISSAOCONCSTATUS", 0, "char");
   this.setVCMap("A6567PermissaoConcSnPendente", "PERMISSAOCONCSNPENDENTE", 0, "char");
   this.setVCMap("A6565PermissaoConcNoAgrupamento", "PERMISSAOCONCNOAGRUPAMENTO", 0, "int");
   this.setVCMap("AV24Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV23Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tpermissaoconc());
