/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:42:15.94
*/
gx.evt.autoSkip = false;
gx.define('tsaidacce', false, function () {
   this.ServerClass =  "tsaidacce" ;
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
   this.Valid_Saidacceseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidacceseq",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId", "gx.O.A7394SaidaCCESeq", "gx.O.A7390SaidaCCECorrecao", 'gx.date.urlDateTime(gx.O.A7391SaidaCCEDataHora,"DMY4")', "gx.O.A7392SaidaCCEUsuarioAlt", 'gx.date.urlDateTime(gx.O.A7393SaidaCCEDataHoraAlt,"DMY4")'],["A7390SaidaCCECorrecao", "A7391SaidaCCEDataHora", "A7392SaidaCCEUsuarioAlt", "A7393SaidaCCEDataHoraAlt", "Gx_mode", "Z4306SaidaEmpresaId", "Z4307SaidaId", "Z7394SaidaCCESeq", "Z7390SaidaCCECorrecao", "Z7391SaidaCCEDataHora", "Z7392SaidaCCEUsuarioAlt", "Z7393SaidaCCEDataHoraAlt", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11gx565_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12gx565_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,75];
   this.GXLastCtrlId =75;
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
   GXValidFnc[47]={fld:"TEXTBLOCKSAIDACCESEQ", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidacceseq,isvalid:null,rgrid:[],fld:"SAIDACCESEQ",gxz:"Z7394SaidaCCESeq",gxold:"O7394SaidaCCESeq",gxvar:"A7394SaidaCCESeq",ucs:[],op:[69,64,59,54],ip:[69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7394SaidaCCESeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7394SaidaCCESeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDACCESEQ",gx.O.A7394SaidaCCESeq,0)},c2v:function(){gx.O.A7394SaidaCCESeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDACCESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKSAIDACCECORRECAO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"vchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDACCECORRECAO",gxz:"Z7390SaidaCCECorrecao",gxold:"O7390SaidaCCECorrecao",gxvar:"A7390SaidaCCECorrecao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7390SaidaCCECorrecao=Value},v2z:function(Value){gx.O.Z7390SaidaCCECorrecao=Value},v2c:function(){gx.fn.setControlValue("SAIDACCECORRECAO",gx.O.A7390SaidaCCECorrecao,0)},c2v:function(){gx.O.A7390SaidaCCECorrecao=this.val()},val:function(){return gx.fn.getControlValue("SAIDACCECORRECAO")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKSAIDACCEDATAHORA", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDACCEDATAHORA",gxz:"Z7391SaidaCCEDataHora",gxold:"O7391SaidaCCEDataHora",gxvar:"A7391SaidaCCEDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7391SaidaCCEDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7391SaidaCCEDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDACCEDATAHORA",gx.O.A7391SaidaCCEDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7391SaidaCCEDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SAIDACCEDATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCKSAIDACCEUSUARIOALT", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDACCEUSUARIOALT",gxz:"Z7392SaidaCCEUsuarioAlt",gxold:"O7392SaidaCCEUsuarioAlt",gxvar:"A7392SaidaCCEUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7392SaidaCCEUsuarioAlt=Value},v2z:function(Value){gx.O.Z7392SaidaCCEUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SAIDACCEUSUARIOALT",gx.O.A7392SaidaCCEUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7392SaidaCCEUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SAIDACCEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKSAIDACCEDATAHORAALT", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDACCEDATAHORAALT",gxz:"Z7393SaidaCCEDataHoraAlt",gxold:"O7393SaidaCCEDataHoraAlt",gxvar:"A7393SaidaCCEDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7393SaidaCCEDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7393SaidaCCEDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDACCEDATAHORAALT",gx.O.A7393SaidaCCEDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7393SaidaCCEDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SAIDACCEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[75]={fld:"PROMPT_4306_4307",grid:565};
   this.A4306SaidaEmpresaId = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.A7394SaidaCCESeq = 0 ;
   this.Z7394SaidaCCESeq = 0 ;
   this.O7394SaidaCCESeq = 0 ;
   this.A7390SaidaCCECorrecao = "" ;
   this.Z7390SaidaCCECorrecao = "" ;
   this.O7390SaidaCCECorrecao = "" ;
   this.A7391SaidaCCEDataHora = gx.date.nullDate() ;
   this.Z7391SaidaCCEDataHora = gx.date.nullDate() ;
   this.O7391SaidaCCEDataHora = gx.date.nullDate() ;
   this.A7392SaidaCCEUsuarioAlt = "" ;
   this.Z7392SaidaCCEUsuarioAlt = "" ;
   this.O7392SaidaCCEUsuarioAlt = "" ;
   this.A7393SaidaCCEDataHoraAlt = gx.date.nullDate() ;
   this.Z7393SaidaCCEDataHoraAlt = gx.date.nullDate() ;
   this.O7393SaidaCCEDataHoraAlt = gx.date.nullDate() ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A7394SaidaCCESeq = 0 ;
   this.A7390SaidaCCECorrecao = "" ;
   this.A7391SaidaCCEDataHora = gx.date.nullDate() ;
   this.A7392SaidaCCEUsuarioAlt = "" ;
   this.A7393SaidaCCEDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e11gx565_client": ["ENTER", true] ,"e12gx565_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_4306_4307", [39,44]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidacce());
