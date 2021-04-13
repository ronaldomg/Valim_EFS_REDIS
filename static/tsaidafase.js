/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:32:20.14
*/
gx.evt.autoSkip = false;
gx.define('tsaidafase', false, function () {
   this.ServerClass =  "tsaidafase" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Saidaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaid",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId"],[]);
      return true;
   }
   this.Valid_Saidafaseitemseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAFASEITEMSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidafaseseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidafaseseq",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId", "gx.O.A9935SaidaFaseItemSeq", "gx.O.A9936SaidaFaseSeq", 'gx.date.urlDateTime(gx.O.A9939SaidaFaseDataHora,"DMY4")', "gx.O.A9940SaidaFaseObservacao", "gx.O.A9941SaidaFaseUsuarioAlt", 'gx.date.urlDateTime(gx.O.A9942SaidaFaseDataHoraAlt,"DMY4")', "gx.O.A9943SaidaFaseEmpId", "gx.O.A9944SaidaFaseCodigo"],["A9943SaidaFaseEmpId", "A9944SaidaFaseCodigo", "A9939SaidaFaseDataHora", "A9940SaidaFaseObservacao", "A9941SaidaFaseUsuarioAlt", "A9942SaidaFaseDataHoraAlt", "Gx_mode", "Z4306SaidaEmpresaId", "Z4307SaidaId", "Z9935SaidaFaseItemSeq", "Z9936SaidaFaseSeq", "Z9943SaidaFaseEmpId", "Z9944SaidaFaseCodigo", "Z9939SaidaFaseDataHora", "Z9940SaidaFaseObservacao", "Z9941SaidaFaseUsuarioAlt", "Z9942SaidaFaseDataHoraAlt", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Saidafaseempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAFASEEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidafasecodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidafasecodigo",["gx.O.A9943SaidaFaseEmpId", "gx.O.A9944SaidaFaseCodigo"],[]);
      return true;
   }
   this.e11ei745_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ei745_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,90,91];
   this.GXLastCtrlId =91;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaempresaid,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SAIDAEMPRESAID",gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDAID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaid,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAID",gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKSAIDAFASEITEMSEQ", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidafaseitemseq,isvalid:null,rgrid:[],fld:"SAIDAFASEITEMSEQ",gxz:"Z9935SaidaFaseItemSeq",gxold:"O9935SaidaFaseItemSeq",gxvar:"A9935SaidaFaseItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9935SaidaFaseItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9935SaidaFaseItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAFASEITEMSEQ",gx.O.A9935SaidaFaseItemSeq,0)},c2v:function(){gx.O.A9935SaidaFaseItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAFASEITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKSAIDAFASESEQ", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidafaseseq,isvalid:null,rgrid:[],fld:"SAIDAFASESEQ",gxz:"Z9936SaidaFaseSeq",gxold:"O9936SaidaFaseSeq",gxvar:"A9936SaidaFaseSeq",ucs:[],op:[64,59,84,79,74,69],ip:[64,59,84,79,74,69,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9936SaidaFaseSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9936SaidaFaseSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAFASESEQ",gx.O.A9936SaidaFaseSeq,0)},c2v:function(){gx.O.A9936SaidaFaseSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAFASESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKSAIDAFASEEMPID", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidafaseempid,isvalid:null,rgrid:[],fld:"SAIDAFASEEMPID",gxz:"Z9943SaidaFaseEmpId",gxold:"O9943SaidaFaseEmpId",gxvar:"A9943SaidaFaseEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9943SaidaFaseEmpId=Value},v2z:function(Value){gx.O.Z9943SaidaFaseEmpId=Value},v2c:function(){gx.fn.setControlValue("SAIDAFASEEMPID",gx.O.A9943SaidaFaseEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9943SaidaFaseEmpId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAFASEEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCKSAIDAFASECODIGO", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidafasecodigo,isvalid:null,rgrid:[],fld:"SAIDAFASECODIGO",gxz:"Z9944SaidaFaseCodigo",gxold:"O9944SaidaFaseCodigo",gxvar:"A9944SaidaFaseCodigo",ucs:[],op:[],ip:[64,59],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9944SaidaFaseCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9944SaidaFaseCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAFASECODIGO",gx.O.A9944SaidaFaseCodigo,0)},c2v:function(){gx.O.A9944SaidaFaseCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAFASECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKSAIDAFASEDATAHORA", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFASEDATAHORA",gxz:"Z9939SaidaFaseDataHora",gxold:"O9939SaidaFaseDataHora",gxvar:"A9939SaidaFaseDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9939SaidaFaseDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9939SaidaFaseDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAFASEDATAHORA",gx.O.A9939SaidaFaseDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9939SaidaFaseDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SAIDAFASEDATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKSAIDAFASEOBSERVACAO", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFASEOBSERVACAO",gxz:"Z9940SaidaFaseObservacao",gxold:"O9940SaidaFaseObservacao",gxvar:"A9940SaidaFaseObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9940SaidaFaseObservacao=Value},v2z:function(Value){gx.O.Z9940SaidaFaseObservacao=Value},v2c:function(){gx.fn.setControlValue("SAIDAFASEOBSERVACAO",gx.O.A9940SaidaFaseObservacao,0)},c2v:function(){gx.O.A9940SaidaFaseObservacao=this.val()},val:function(){return gx.fn.getControlValue("SAIDAFASEOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKSAIDAFASEUSUARIOALT", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFASEUSUARIOALT",gxz:"Z9941SaidaFaseUsuarioAlt",gxold:"O9941SaidaFaseUsuarioAlt",gxvar:"A9941SaidaFaseUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9941SaidaFaseUsuarioAlt=Value},v2z:function(Value){gx.O.Z9941SaidaFaseUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SAIDAFASEUSUARIOALT",gx.O.A9941SaidaFaseUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9941SaidaFaseUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SAIDAFASEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCKSAIDAFASEDATAHORAALT", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFASEDATAHORAALT",gxz:"Z9942SaidaFaseDataHoraAlt",gxold:"O9942SaidaFaseDataHoraAlt",gxvar:"A9942SaidaFaseDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9942SaidaFaseDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9942SaidaFaseDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAFASEDATAHORAALT",gx.O.A9942SaidaFaseDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9942SaidaFaseDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SAIDAFASEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 84 , function() {
   });
   GXValidFnc[90]={fld:"PROMPT_4306_4307",grid:745};
   GXValidFnc[91]={fld:"PROMPT_9943_9944",grid:745};
   this.A4306SaidaEmpresaId = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.A9935SaidaFaseItemSeq = 0 ;
   this.Z9935SaidaFaseItemSeq = 0 ;
   this.O9935SaidaFaseItemSeq = 0 ;
   this.A9936SaidaFaseSeq = 0 ;
   this.Z9936SaidaFaseSeq = 0 ;
   this.O9936SaidaFaseSeq = 0 ;
   this.A9943SaidaFaseEmpId = "" ;
   this.Z9943SaidaFaseEmpId = "" ;
   this.O9943SaidaFaseEmpId = "" ;
   this.A9944SaidaFaseCodigo = 0 ;
   this.Z9944SaidaFaseCodigo = 0 ;
   this.O9944SaidaFaseCodigo = 0 ;
   this.A9939SaidaFaseDataHora = gx.date.nullDate() ;
   this.Z9939SaidaFaseDataHora = gx.date.nullDate() ;
   this.O9939SaidaFaseDataHora = gx.date.nullDate() ;
   this.A9940SaidaFaseObservacao = "" ;
   this.Z9940SaidaFaseObservacao = "" ;
   this.O9940SaidaFaseObservacao = "" ;
   this.A9941SaidaFaseUsuarioAlt = "" ;
   this.Z9941SaidaFaseUsuarioAlt = "" ;
   this.O9941SaidaFaseUsuarioAlt = "" ;
   this.A9942SaidaFaseDataHoraAlt = gx.date.nullDate() ;
   this.Z9942SaidaFaseDataHoraAlt = gx.date.nullDate() ;
   this.O9942SaidaFaseDataHoraAlt = gx.date.nullDate() ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A9935SaidaFaseItemSeq = 0 ;
   this.A9936SaidaFaseSeq = 0 ;
   this.A9943SaidaFaseEmpId = "" ;
   this.A9944SaidaFaseCodigo = 0 ;
   this.A9939SaidaFaseDataHora = gx.date.nullDate() ;
   this.A9940SaidaFaseObservacao = "" ;
   this.A9941SaidaFaseUsuarioAlt = "" ;
   this.A9942SaidaFaseDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e11ei745_client": ["ENTER", true] ,"e12ei745_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_4306_4307", [39,44]);
   this.setPrompt("PROMPT_9943_9944", [59,64]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidafase());
