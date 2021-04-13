/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:43:20.55
*/
gx.evt.autoSkip = false;
gx.define('tlocalizarlancamentos', false, function () {
   this.ServerClass =  "tlocalizarlancamentos" ;
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
   this.Valid_Localizarlancamentosnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOCALIZARLANCAMENTOSNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Localizarlancamentosseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOCALIZARLANCAMENTOSSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Localizarlancamentosusuario=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Localizarlancamentosusuario",["gx.O.A3176localizarlancamentosnumero", "gx.O.A3177localizarlancamentosSeq", "gx.O.A3155localizarlancamentosusuario", "gx.O.A3156localizarlancamentosemp", 'gx.date.urlDate(gx.O.A3157localizarlancamentosdata,"DMY4")', "gx.O.A3158localizarlancamentosseqdeb", "gx.O.A3159localizarlancamentosseqcre", "gx.O.A3160localizarlancamentoscontadeb", "gx.O.A3161localizarlancamentostraddeb", "gx.O.A3162localizarlancamentosdescdeb", "gx.O.A3163localizarlancamentoscontacre", "gx.O.A3164localizarlancamentostradcre", "gx.O.A3165localizarlancamentosdesccre", "gx.num.urlDecimal(gx.O.A3166localizarlancamentosvalor,\'.\',\',\')", "gx.O.A3167localizarlancamentoshistid", "gx.O.A3168localizarlancamentoshistdesc", "gx.O.A3169localizarlancamentosestorno", "gx.O.A3170localizarlancamentostransconta", "gx.O.A3171localizarlancamentosusuincdeb", "gx.O.A3172localizarlancamentosusuinccre", "gx.num.urlDecimal(gx.O.A3173localizarlancamentossaldo,\'.\',\',\')", "gx.O.A3174localizarlancamentostpsaldo", "gx.O.A3175localizarlancamentostplanc"],["A3156localizarlancamentosemp", "A3157localizarlancamentosdata", "A3158localizarlancamentosseqdeb", "A3159localizarlancamentosseqcre", "A3160localizarlancamentoscontadeb", "A3161localizarlancamentostraddeb", "A3162localizarlancamentosdescdeb", "A3163localizarlancamentoscontacre", "A3164localizarlancamentostradcre", "A3165localizarlancamentosdesccre", "A3166localizarlancamentosvalor", "A3167localizarlancamentoshistid", "A3168localizarlancamentoshistdesc", "A3169localizarlancamentosestorno", "A3170localizarlancamentostransconta", "A3171localizarlancamentosusuincdeb", "A3172localizarlancamentosusuinccre", "A3173localizarlancamentossaldo", "A3174localizarlancamentostpsaldo", "A3175localizarlancamentostplanc", "Gx_mode", "Z3176localizarlancamentosnumero", "Z3177localizarlancamentosSeq", "Z3155localizarlancamentosusuario", "Z3156localizarlancamentosemp", "Z3157localizarlancamentosdata", "Z3158localizarlancamentosseqdeb", "Z3159localizarlancamentosseqcre", "Z3160localizarlancamentoscontadeb", "Z3161localizarlancamentostraddeb", "Z3162localizarlancamentosdescdeb", "Z3163localizarlancamentoscontacre", "Z3164localizarlancamentostradcre", "Z3165localizarlancamentosdesccre", "Z3166localizarlancamentosvalor", "Z3167localizarlancamentoshistid", "Z3168localizarlancamentoshistdesc", "Z3169localizarlancamentosestorno", "Z3170localizarlancamentostransconta", "Z3171localizarlancamentosusuincdeb", "Z3172localizarlancamentosusuinccre", "Z3173localizarlancamentossaldo", "Z3174localizarlancamentostpsaldo", "Z3175localizarlancamentostplanc", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e115v428_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e125v428_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,34,36,39,41,44,46,49,51,54,56,59,61,64,66,69,71,74,76,79,81,84,86,89,91,94,96,99,101,104,106,109,111,114,116,119,121,124,126,129,131];
   this.GXLastCtrlId =131;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Localizarlancamentosnumero,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSNUMERO",gxz:"Z3176localizarlancamentosnumero",gxold:"O3176localizarlancamentosnumero",gxvar:"A3176localizarlancamentosnumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3176localizarlancamentosnumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3176localizarlancamentosnumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSNUMERO",gx.O.A3176localizarlancamentosnumero,0)},c2v:function(){gx.O.A3176localizarlancamentosnumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOCALIZARLANCAMENTOSNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Localizarlancamentosseq,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSSEQ",gxz:"Z3177localizarlancamentosSeq",gxold:"O3177localizarlancamentosSeq",gxvar:"A3177localizarlancamentosSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3177localizarlancamentosSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3177localizarlancamentosSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSSEQ",gx.O.A3177localizarlancamentosSeq,0)},c2v:function(){gx.O.A3177localizarlancamentosSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOCALIZARLANCAMENTOSSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Localizarlancamentosusuario,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSUSUARIO",gxz:"Z3155localizarlancamentosusuario",gxold:"O3155localizarlancamentosusuario",gxvar:"A3155localizarlancamentosusuario",ucs:[],op:[131,126,121,116,111,106,101,96,91,86,81,76,71,66,61,56,51,46,41,36],ip:[131,126,121,116,111,106,101,96,91,86,81,76,71,66,61,56,51,46,41,36,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3155localizarlancamentosusuario=Value},v2z:function(Value){gx.O.Z3155localizarlancamentosusuario=Value},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSUSUARIO",gx.O.A3155localizarlancamentosusuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3155localizarlancamentosusuario=this.val()},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSEMP",gxz:"Z3156localizarlancamentosemp",gxold:"O3156localizarlancamentosemp",gxvar:"A3156localizarlancamentosemp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3156localizarlancamentosemp=Value},v2z:function(Value){gx.O.Z3156localizarlancamentosemp=Value},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSEMP",gx.O.A3156localizarlancamentosemp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3156localizarlancamentosemp=this.val()},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSEMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSDATA",gxz:"Z3157localizarlancamentosdata",gxold:"O3157localizarlancamentosdata",gxvar:"A3157localizarlancamentosdata",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3157localizarlancamentosdata=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3157localizarlancamentosdata=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSDATA",gx.O.A3157localizarlancamentosdata,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3157localizarlancamentosdata=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSSEQDEB",gxz:"Z3158localizarlancamentosseqdeb",gxold:"O3158localizarlancamentosseqdeb",gxvar:"A3158localizarlancamentosseqdeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3158localizarlancamentosseqdeb=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3158localizarlancamentosseqdeb=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSSEQDEB",gx.O.A3158localizarlancamentosseqdeb,0)},c2v:function(){gx.O.A3158localizarlancamentosseqdeb=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOCALIZARLANCAMENTOSSEQDEB",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSSEQCRE",gxz:"Z3159localizarlancamentosseqcre",gxold:"O3159localizarlancamentosseqcre",gxvar:"A3159localizarlancamentosseqcre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3159localizarlancamentosseqcre=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3159localizarlancamentosseqcre=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSSEQCRE",gx.O.A3159localizarlancamentosseqcre,0)},c2v:function(){gx.O.A3159localizarlancamentosseqcre=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOCALIZARLANCAMENTOSSEQCRE",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSCONTADEB",gxz:"Z3160localizarlancamentoscontadeb",gxold:"O3160localizarlancamentoscontadeb",gxvar:"A3160localizarlancamentoscontadeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3160localizarlancamentoscontadeb=Value},v2z:function(Value){gx.O.Z3160localizarlancamentoscontadeb=Value},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSCONTADEB",gx.O.A3160localizarlancamentoscontadeb,0)},c2v:function(){gx.O.A3160localizarlancamentoscontadeb=this.val()},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSCONTADEB")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSTRADDEB",gxz:"Z3161localizarlancamentostraddeb",gxold:"O3161localizarlancamentostraddeb",gxvar:"A3161localizarlancamentostraddeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3161localizarlancamentostraddeb=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3161localizarlancamentostraddeb=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSTRADDEB",gx.O.A3161localizarlancamentostraddeb,0)},c2v:function(){gx.O.A3161localizarlancamentostraddeb=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOCALIZARLANCAMENTOSTRADDEB",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSDESCDEB",gxz:"Z3162localizarlancamentosdescdeb",gxold:"O3162localizarlancamentosdescdeb",gxvar:"A3162localizarlancamentosdescdeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3162localizarlancamentosdescdeb=Value},v2z:function(Value){gx.O.Z3162localizarlancamentosdescdeb=Value},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSDESCDEB",gx.O.A3162localizarlancamentosdescdeb,0)},c2v:function(){gx.O.A3162localizarlancamentosdescdeb=this.val()},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSDESCDEB")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSCONTACRE",gxz:"Z3163localizarlancamentoscontacre",gxold:"O3163localizarlancamentoscontacre",gxvar:"A3163localizarlancamentoscontacre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3163localizarlancamentoscontacre=Value},v2z:function(Value){gx.O.Z3163localizarlancamentoscontacre=Value},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSCONTACRE",gx.O.A3163localizarlancamentoscontacre,0)},c2v:function(){gx.O.A3163localizarlancamentoscontacre=this.val()},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSCONTACRE")},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSTRADCRE",gxz:"Z3164localizarlancamentostradcre",gxold:"O3164localizarlancamentostradcre",gxvar:"A3164localizarlancamentostradcre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3164localizarlancamentostradcre=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3164localizarlancamentostradcre=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSTRADCRE",gx.O.A3164localizarlancamentostradcre,0)},c2v:function(){gx.O.A3164localizarlancamentostradcre=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOCALIZARLANCAMENTOSTRADCRE",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSDESCCRE",gxz:"Z3165localizarlancamentosdesccre",gxold:"O3165localizarlancamentosdesccre",gxvar:"A3165localizarlancamentosdesccre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3165localizarlancamentosdesccre=Value},v2z:function(Value){gx.O.Z3165localizarlancamentosdesccre=Value},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSDESCCRE",gx.O.A3165localizarlancamentosdesccre,0)},c2v:function(){gx.O.A3165localizarlancamentosdesccre=this.val()},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSDESCCRE")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSVALOR",gxz:"Z3166localizarlancamentosvalor",gxold:"O3166localizarlancamentosvalor",gxvar:"A3166localizarlancamentosvalor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3166localizarlancamentosvalor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3166localizarlancamentosvalor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOCALIZARLANCAMENTOSVALOR",gx.O.A3166localizarlancamentosvalor,2,',')},c2v:function(){gx.O.A3166localizarlancamentosvalor=this.val()},val:function(){return gx.fn.getDecimalValue("LOCALIZARLANCAMENTOSVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSHISTID",gxz:"Z3167localizarlancamentoshistid",gxold:"O3167localizarlancamentoshistid",gxvar:"A3167localizarlancamentoshistid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3167localizarlancamentoshistid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3167localizarlancamentoshistid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSHISTID",gx.O.A3167localizarlancamentoshistid,0)},c2v:function(){gx.O.A3167localizarlancamentoshistid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOCALIZARLANCAMENTOSHISTID",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"svchar",len:180,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSHISTDESC",gxz:"Z3168localizarlancamentoshistdesc",gxold:"O3168localizarlancamentoshistdesc",gxvar:"A3168localizarlancamentoshistdesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3168localizarlancamentoshistdesc=Value},v2z:function(Value){gx.O.Z3168localizarlancamentoshistdesc=Value},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSHISTDESC",gx.O.A3168localizarlancamentoshistdesc,0)},c2v:function(){gx.O.A3168localizarlancamentoshistdesc=this.val()},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSHISTDESC")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSESTORNO",gxz:"Z3169localizarlancamentosestorno",gxold:"O3169localizarlancamentosestorno",gxvar:"A3169localizarlancamentosestorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3169localizarlancamentosestorno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3169localizarlancamentosestorno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSESTORNO",gx.O.A3169localizarlancamentosestorno,0)},c2v:function(){gx.O.A3169localizarlancamentosestorno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOCALIZARLANCAMENTOSESTORNO",'.')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSTRANSCONTA",gxz:"Z3170localizarlancamentostransconta",gxold:"O3170localizarlancamentostransconta",gxvar:"A3170localizarlancamentostransconta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3170localizarlancamentostransconta=Value},v2z:function(Value){gx.O.Z3170localizarlancamentostransconta=Value},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSTRANSCONTA",gx.O.A3170localizarlancamentostransconta,0)},c2v:function(){gx.O.A3170localizarlancamentostransconta=this.val()},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSTRANSCONTA")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSUSUINCDEB",gxz:"Z3171localizarlancamentosusuincdeb",gxold:"O3171localizarlancamentosusuincdeb",gxvar:"A3171localizarlancamentosusuincdeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3171localizarlancamentosusuincdeb=Value},v2z:function(Value){gx.O.Z3171localizarlancamentosusuincdeb=Value},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSUSUINCDEB",gx.O.A3171localizarlancamentosusuincdeb,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3171localizarlancamentosusuincdeb=this.val()},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSUSUINCDEB")},nac:gx.falseFn};
   this.declareDomainHdlr( 111 , function() {
   });
   GXValidFnc[114]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSUSUINCCRE",gxz:"Z3172localizarlancamentosusuinccre",gxold:"O3172localizarlancamentosusuinccre",gxvar:"A3172localizarlancamentosusuinccre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3172localizarlancamentosusuinccre=Value},v2z:function(Value){gx.O.Z3172localizarlancamentosusuinccre=Value},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSUSUINCCRE",gx.O.A3172localizarlancamentosusuinccre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3172localizarlancamentosusuinccre=this.val()},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSUSUINCCRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 116 , function() {
   });
   GXValidFnc[119]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSSALDO",gxz:"Z3173localizarlancamentossaldo",gxold:"O3173localizarlancamentossaldo",gxvar:"A3173localizarlancamentossaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3173localizarlancamentossaldo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3173localizarlancamentossaldo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOCALIZARLANCAMENTOSSALDO",gx.O.A3173localizarlancamentossaldo,2,',')},c2v:function(){gx.O.A3173localizarlancamentossaldo=this.val()},val:function(){return gx.fn.getDecimalValue("LOCALIZARLANCAMENTOSSALDO",'.',',')},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSTPSALDO",gxz:"Z3174localizarlancamentostpsaldo",gxold:"O3174localizarlancamentostpsaldo",gxvar:"A3174localizarlancamentostpsaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3174localizarlancamentostpsaldo=Value},v2z:function(Value){gx.O.Z3174localizarlancamentostpsaldo=Value},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSTPSALDO",gx.O.A3174localizarlancamentostpsaldo,0)},c2v:function(){gx.O.A3174localizarlancamentostpsaldo=this.val()},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSTPSALDO")},nac:gx.falseFn};
   GXValidFnc[129]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[131]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALIZARLANCAMENTOSTPLANC",gxz:"Z3175localizarlancamentostplanc",gxold:"O3175localizarlancamentostplanc",gxvar:"A3175localizarlancamentostplanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3175localizarlancamentostplanc=Value},v2z:function(Value){gx.O.Z3175localizarlancamentostplanc=Value},v2c:function(){gx.fn.setControlValue("LOCALIZARLANCAMENTOSTPLANC",gx.O.A3175localizarlancamentostplanc,0)},c2v:function(){gx.O.A3175localizarlancamentostplanc=this.val()},val:function(){return gx.fn.getControlValue("LOCALIZARLANCAMENTOSTPLANC")},nac:gx.falseFn};
   this.A3176localizarlancamentosnumero = 0 ;
   this.Z3176localizarlancamentosnumero = 0 ;
   this.O3176localizarlancamentosnumero = 0 ;
   this.A3177localizarlancamentosSeq = 0 ;
   this.Z3177localizarlancamentosSeq = 0 ;
   this.O3177localizarlancamentosSeq = 0 ;
   this.A3155localizarlancamentosusuario = "" ;
   this.Z3155localizarlancamentosusuario = "" ;
   this.O3155localizarlancamentosusuario = "" ;
   this.A3156localizarlancamentosemp = "" ;
   this.Z3156localizarlancamentosemp = "" ;
   this.O3156localizarlancamentosemp = "" ;
   this.A3157localizarlancamentosdata = gx.date.nullDate() ;
   this.Z3157localizarlancamentosdata = gx.date.nullDate() ;
   this.O3157localizarlancamentosdata = gx.date.nullDate() ;
   this.A3158localizarlancamentosseqdeb = 0 ;
   this.Z3158localizarlancamentosseqdeb = 0 ;
   this.O3158localizarlancamentosseqdeb = 0 ;
   this.A3159localizarlancamentosseqcre = 0 ;
   this.Z3159localizarlancamentosseqcre = 0 ;
   this.O3159localizarlancamentosseqcre = 0 ;
   this.A3160localizarlancamentoscontadeb = "" ;
   this.Z3160localizarlancamentoscontadeb = "" ;
   this.O3160localizarlancamentoscontadeb = "" ;
   this.A3161localizarlancamentostraddeb = 0 ;
   this.Z3161localizarlancamentostraddeb = 0 ;
   this.O3161localizarlancamentostraddeb = 0 ;
   this.A3162localizarlancamentosdescdeb = "" ;
   this.Z3162localizarlancamentosdescdeb = "" ;
   this.O3162localizarlancamentosdescdeb = "" ;
   this.A3163localizarlancamentoscontacre = "" ;
   this.Z3163localizarlancamentoscontacre = "" ;
   this.O3163localizarlancamentoscontacre = "" ;
   this.A3164localizarlancamentostradcre = 0 ;
   this.Z3164localizarlancamentostradcre = 0 ;
   this.O3164localizarlancamentostradcre = 0 ;
   this.A3165localizarlancamentosdesccre = "" ;
   this.Z3165localizarlancamentosdesccre = "" ;
   this.O3165localizarlancamentosdesccre = "" ;
   this.A3166localizarlancamentosvalor = 0 ;
   this.Z3166localizarlancamentosvalor = 0 ;
   this.O3166localizarlancamentosvalor = 0 ;
   this.A3167localizarlancamentoshistid = 0 ;
   this.Z3167localizarlancamentoshistid = 0 ;
   this.O3167localizarlancamentoshistid = 0 ;
   this.A3168localizarlancamentoshistdesc = "" ;
   this.Z3168localizarlancamentoshistdesc = "" ;
   this.O3168localizarlancamentoshistdesc = "" ;
   this.A3169localizarlancamentosestorno = 0 ;
   this.Z3169localizarlancamentosestorno = 0 ;
   this.O3169localizarlancamentosestorno = 0 ;
   this.A3170localizarlancamentostransconta = "" ;
   this.Z3170localizarlancamentostransconta = "" ;
   this.O3170localizarlancamentostransconta = "" ;
   this.A3171localizarlancamentosusuincdeb = "" ;
   this.Z3171localizarlancamentosusuincdeb = "" ;
   this.O3171localizarlancamentosusuincdeb = "" ;
   this.A3172localizarlancamentosusuinccre = "" ;
   this.Z3172localizarlancamentosusuinccre = "" ;
   this.O3172localizarlancamentosusuinccre = "" ;
   this.A3173localizarlancamentossaldo = 0 ;
   this.Z3173localizarlancamentossaldo = 0 ;
   this.O3173localizarlancamentossaldo = 0 ;
   this.A3174localizarlancamentostpsaldo = "" ;
   this.Z3174localizarlancamentostpsaldo = "" ;
   this.O3174localizarlancamentostpsaldo = "" ;
   this.A3175localizarlancamentostplanc = "" ;
   this.Z3175localizarlancamentostplanc = "" ;
   this.O3175localizarlancamentostplanc = "" ;
   this.A3176localizarlancamentosnumero = 0 ;
   this.A3177localizarlancamentosSeq = 0 ;
   this.A3155localizarlancamentosusuario = "" ;
   this.A3156localizarlancamentosemp = "" ;
   this.A3157localizarlancamentosdata = gx.date.nullDate() ;
   this.A3158localizarlancamentosseqdeb = 0 ;
   this.A3159localizarlancamentosseqcre = 0 ;
   this.A3160localizarlancamentoscontadeb = "" ;
   this.A3161localizarlancamentostraddeb = 0 ;
   this.A3162localizarlancamentosdescdeb = "" ;
   this.A3163localizarlancamentoscontacre = "" ;
   this.A3164localizarlancamentostradcre = 0 ;
   this.A3165localizarlancamentosdesccre = "" ;
   this.A3166localizarlancamentosvalor = 0 ;
   this.A3167localizarlancamentoshistid = 0 ;
   this.A3168localizarlancamentoshistdesc = "" ;
   this.A3169localizarlancamentosestorno = 0 ;
   this.A3170localizarlancamentostransconta = "" ;
   this.A3171localizarlancamentosusuincdeb = "" ;
   this.A3172localizarlancamentosusuinccre = "" ;
   this.A3173localizarlancamentossaldo = 0 ;
   this.A3174localizarlancamentostpsaldo = "" ;
   this.A3175localizarlancamentostplanc = "" ;
   this.Events = {"e115v428_client": ["ENTER", true] ,"e125v428_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tlocalizarlancamentos());
