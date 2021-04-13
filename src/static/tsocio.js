/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:24:58.27
*/
gx.evt.autoSkip = false;
gx.define('tsocio', false, function () {
   this.ServerClass =  "tsocio" ;
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
   this.Valid_Socioassociadoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOCIOASSOCIADOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Socioassociadoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Socioassociadoid",["gx.O.A10023SocioAssociadoEmpresaId", "gx.O.A10024SocioAssociadoId"],[]);
      return true;
   }
   this.Valid_Socioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Socioid",["gx.O.A10023SocioAssociadoEmpresaId", "gx.O.A10024SocioAssociadoId", "gx.O.A10025SocioId", "gx.O.A10109SocioSnCredenciado", "gx.O.A10110SocioUsuarioAlt", 'gx.date.urlDateTime(gx.O.A10108SocioDataHoraAlt,"DMY4")'],["A10109SocioSnCredenciado", "A10110SocioUsuarioAlt", "A10108SocioDataHoraAlt", "Gx_mode", "Z10023SocioAssociadoEmpresaId", "Z10024SocioAssociadoId", "Z10025SocioId", "Z10109SocioSnCredenciado", "Z10110SocioUsuarioAlt", "Z10108SocioDataHoraAlt", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11ev758_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ev758_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,70];
   this.GXLastCtrlId =70;
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
   GXValidFnc[37]={fld:"TEXTBLOCKSOCIOASSOCIADOEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Socioassociadoempresaid,isvalid:null,rgrid:[],fld:"SOCIOASSOCIADOEMPRESAID",gxz:"Z10023SocioAssociadoEmpresaId",gxold:"O10023SocioAssociadoEmpresaId",gxvar:"A10023SocioAssociadoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10023SocioAssociadoEmpresaId=Value},v2z:function(Value){gx.O.Z10023SocioAssociadoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SOCIOASSOCIADOEMPRESAID",gx.O.A10023SocioAssociadoEmpresaId,0)},c2v:function(){gx.O.A10023SocioAssociadoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SOCIOASSOCIADOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSOCIOASSOCIADOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Socioassociadoid,isvalid:null,rgrid:[],fld:"SOCIOASSOCIADOID",gxz:"Z10024SocioAssociadoId",gxold:"O10024SocioAssociadoId",gxvar:"A10024SocioAssociadoId",ucs:[],op:[],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10024SocioAssociadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10024SocioAssociadoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SOCIOASSOCIADOID",gx.O.A10024SocioAssociadoId,0)},c2v:function(){gx.O.A10024SocioAssociadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SOCIOASSOCIADOID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKSOCIOID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Socioid,isvalid:null,rgrid:[],fld:"SOCIOID",gxz:"Z10025SocioId",gxold:"O10025SocioId",gxvar:"A10025SocioId",ucs:[],op:[64,59,54],ip:[64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10025SocioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10025SocioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SOCIOID",gx.O.A10025SocioId,0)},c2v:function(){gx.O.A10025SocioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SOCIOID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKSOCIOSNCREDENCIADO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SOCIOSNCREDENCIADO",gxz:"Z10109SocioSnCredenciado",gxold:"O10109SocioSnCredenciado",gxvar:"A10109SocioSnCredenciado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10109SocioSnCredenciado=Value},v2z:function(Value){gx.O.Z10109SocioSnCredenciado=Value},v2c:function(){gx.fn.setControlValue("SOCIOSNCREDENCIADO",gx.O.A10109SocioSnCredenciado,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10109SocioSnCredenciado=this.val()},val:function(){return gx.fn.getControlValue("SOCIOSNCREDENCIADO")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCKSOCIOUSUARIOALT", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SOCIOUSUARIOALT",gxz:"Z10110SocioUsuarioAlt",gxold:"O10110SocioUsuarioAlt",gxvar:"A10110SocioUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10110SocioUsuarioAlt=Value},v2z:function(Value){gx.O.Z10110SocioUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SOCIOUSUARIOALT",gx.O.A10110SocioUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10110SocioUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SOCIOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCKSOCIODATAHORAALT", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SOCIODATAHORAALT",gxz:"Z10108SocioDataHoraAlt",gxold:"O10108SocioDataHoraAlt",gxvar:"A10108SocioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10108SocioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10108SocioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SOCIODATAHORAALT",gx.O.A10108SocioDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10108SocioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SOCIODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[70]={fld:"PROMPT_10023_10024",grid:758};
   this.A10023SocioAssociadoEmpresaId = "" ;
   this.Z10023SocioAssociadoEmpresaId = "" ;
   this.O10023SocioAssociadoEmpresaId = "" ;
   this.A10024SocioAssociadoId = 0 ;
   this.Z10024SocioAssociadoId = 0 ;
   this.O10024SocioAssociadoId = 0 ;
   this.A10025SocioId = 0 ;
   this.Z10025SocioId = 0 ;
   this.O10025SocioId = 0 ;
   this.A10109SocioSnCredenciado = "" ;
   this.Z10109SocioSnCredenciado = "" ;
   this.O10109SocioSnCredenciado = "" ;
   this.A10110SocioUsuarioAlt = "" ;
   this.Z10110SocioUsuarioAlt = "" ;
   this.O10110SocioUsuarioAlt = "" ;
   this.A10108SocioDataHoraAlt = gx.date.nullDate() ;
   this.Z10108SocioDataHoraAlt = gx.date.nullDate() ;
   this.O10108SocioDataHoraAlt = gx.date.nullDate() ;
   this.A10023SocioAssociadoEmpresaId = "" ;
   this.A10024SocioAssociadoId = 0 ;
   this.A10025SocioId = 0 ;
   this.A10109SocioSnCredenciado = "" ;
   this.A10110SocioUsuarioAlt = "" ;
   this.A10108SocioDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e11ev758_client": ["ENTER", true] ,"e12ev758_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_10023_10024", [39,44]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsocio());
