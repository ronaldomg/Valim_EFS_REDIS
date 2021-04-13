/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:32:14.23
*/
gx.evt.autoSkip = false;
gx.define('tbfconnection', false, function () {
   this.ServerClass =  "tbfconnection" ;
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
   this.Valid_Bfconnectionid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Bfconnectionid",["gx.O.A9921BFConnectionId", "gx.O.A9924BFConnectionNomeArquivo", "gx.O.A9925BFConnectionArquivo", "gx.O.A9926BFConnectionPendente", "gx.O.A9927BFConnectionImpressora", "gx.O.A9928BFConnectionIP", "gx.O.A9931BFConnectionTipo", "gx.O.A9932BFConnectionComando", "gx.O.A9929BFConnectionUsuarioId", 'gx.date.urlDateTime(gx.O.A9930BFConnectionDataHora,"DMY4")'],["A9924BFConnectionNomeArquivo", "A9925BFConnectionArquivo", "A9926BFConnectionPendente", "A9927BFConnectionImpressora", "A9928BFConnectionIP", "A9931BFConnectionTipo", "A9932BFConnectionComando", "A9929BFConnectionUsuarioId", "A9930BFConnectionDataHora", "Gx_mode", "Z9921BFConnectionId", "Z9924BFConnectionNomeArquivo", "Z9925BFConnectionArquivo", "Z9926BFConnectionPendente", "Z9927BFConnectionImpressora", "Z9928BFConnectionIP", "Z9931BFConnectionTipo", "Z9932BFConnectionComando", "Z9929BFConnectionUsuarioId", "Z9930BFConnectionDataHora", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Bfconnectiontipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BFCONNECTIONTIPO");
         this.AnyError  = 0;
         if ( ! ( this.A9931BFConnectionTipo == "I" || this.A9931BFConnectionTipo == "G" || this.A9931BFConnectionTipo == "C" ) )
         {
            try {
               gxballoon.setError("Campo Ação fora do intervalo");
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
   this.e11ef742_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ef742_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84];
   this.GXLastCtrlId =84;
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
   GXValidFnc[37]={fld:"TEXTBLOCKBFCONNECTIONID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bfconnectionid,isvalid:null,rgrid:[],fld:"BFCONNECTIONID",gxz:"Z9921BFConnectionId",gxold:"O9921BFConnectionId",gxvar:"A9921BFConnectionId",ucs:[],op:[84,79,74,69,64,59,54,49,44],ip:[84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9921BFConnectionId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9921BFConnectionId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BFCONNECTIONID",gx.O.A9921BFConnectionId,0)},c2v:function(){gx.O.A9921BFConnectionId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BFCONNECTIONID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKBFCONNECTIONNOMEARQUIVO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:250,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BFCONNECTIONNOMEARQUIVO",gxz:"Z9924BFConnectionNomeArquivo",gxold:"O9924BFConnectionNomeArquivo",gxvar:"A9924BFConnectionNomeArquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9924BFConnectionNomeArquivo=Value},v2z:function(Value){gx.O.Z9924BFConnectionNomeArquivo=Value},v2c:function(){gx.fn.setControlValue("BFCONNECTIONNOMEARQUIVO",gx.O.A9924BFConnectionNomeArquivo,0)},c2v:function(){gx.O.A9924BFConnectionNomeArquivo=this.val()},val:function(){return gx.fn.getControlValue("BFCONNECTIONNOMEARQUIVO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKBFCONNECTIONARQUIVO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BFCONNECTIONARQUIVO",gxz:"Z9925BFConnectionArquivo",gxold:"O9925BFConnectionArquivo",gxvar:"A9925BFConnectionArquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9925BFConnectionArquivo=Value},v2z:function(Value){gx.O.Z9925BFConnectionArquivo=Value},v2c:function(){gx.fn.setControlValue("BFCONNECTIONARQUIVO",gx.O.A9925BFConnectionArquivo,0)},c2v:function(){gx.O.A9925BFConnectionArquivo=this.val()},val:function(){return gx.fn.getControlValue("BFCONNECTIONARQUIVO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKBFCONNECTIONPENDENTE", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BFCONNECTIONPENDENTE",gxz:"Z9926BFConnectionPendente",gxold:"O9926BFConnectionPendente",gxvar:"A9926BFConnectionPendente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9926BFConnectionPendente=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.Z9926BFConnectionPendente=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("BFCONNECTIONPENDENTE",gx.O.A9926BFConnectionPendente,true)},c2v:function(){gx.O.A9926BFConnectionPendente=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("BFCONNECTIONPENDENTE")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[57]={fld:"TEXTBLOCKBFCONNECTIONIMPRESSORA", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BFCONNECTIONIMPRESSORA",gxz:"Z9927BFConnectionImpressora",gxold:"O9927BFConnectionImpressora",gxvar:"A9927BFConnectionImpressora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9927BFConnectionImpressora=Value},v2z:function(Value){gx.O.Z9927BFConnectionImpressora=Value},v2c:function(){gx.fn.setControlValue("BFCONNECTIONIMPRESSORA",gx.O.A9927BFConnectionImpressora,0)},c2v:function(){gx.O.A9927BFConnectionImpressora=this.val()},val:function(){return gx.fn.getControlValue("BFCONNECTIONIMPRESSORA")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKBFCONNECTIONIP", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BFCONNECTIONIP",gxz:"Z9928BFConnectionIP",gxold:"O9928BFConnectionIP",gxvar:"A9928BFConnectionIP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9928BFConnectionIP=Value},v2z:function(Value){gx.O.Z9928BFConnectionIP=Value},v2c:function(){gx.fn.setControlValue("BFCONNECTIONIP",gx.O.A9928BFConnectionIP,0)},c2v:function(){gx.O.A9928BFConnectionIP=this.val()},val:function(){return gx.fn.getControlValue("BFCONNECTIONIP")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKBFCONNECTIONTIPO", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Bfconnectiontipo,isvalid:null,rgrid:[],fld:"BFCONNECTIONTIPO",gxz:"Z9931BFConnectionTipo",gxold:"O9931BFConnectionTipo",gxvar:"A9931BFConnectionTipo",ucs:[],op:[69],ip:[69],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A9931BFConnectionTipo=Value},v2z:function(Value){gx.O.Z9931BFConnectionTipo=Value},v2c:function(){gx.fn.setComboBoxValue("BFCONNECTIONTIPO",gx.O.A9931BFConnectionTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9931BFConnectionTipo=this.val()},val:function(){return gx.fn.getControlValue("BFCONNECTIONTIPO")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKBFCONNECTIONCOMANDO", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BFCONNECTIONCOMANDO",gxz:"Z9932BFConnectionComando",gxold:"O9932BFConnectionComando",gxvar:"A9932BFConnectionComando",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9932BFConnectionComando=Value},v2z:function(Value){gx.O.Z9932BFConnectionComando=Value},v2c:function(){gx.fn.setControlValue("BFCONNECTIONCOMANDO",gx.O.A9932BFConnectionComando,0)},c2v:function(){gx.O.A9932BFConnectionComando=this.val()},val:function(){return gx.fn.getControlValue("BFCONNECTIONCOMANDO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKBFCONNECTIONUSUARIOID", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BFCONNECTIONUSUARIOID",gxz:"Z9929BFConnectionUsuarioId",gxold:"O9929BFConnectionUsuarioId",gxvar:"A9929BFConnectionUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9929BFConnectionUsuarioId=Value},v2z:function(Value){gx.O.Z9929BFConnectionUsuarioId=Value},v2c:function(){gx.fn.setControlValue("BFCONNECTIONUSUARIOID",gx.O.A9929BFConnectionUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9929BFConnectionUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("BFCONNECTIONUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCKBFCONNECTIONDATAHORA", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BFCONNECTIONDATAHORA",gxz:"Z9930BFConnectionDataHora",gxold:"O9930BFConnectionDataHora",gxvar:"A9930BFConnectionDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9930BFConnectionDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9930BFConnectionDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BFCONNECTIONDATAHORA",gx.O.A9930BFConnectionDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9930BFConnectionDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("BFCONNECTIONDATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 84 , function() {
   });
   this.A9921BFConnectionId = 0 ;
   this.Z9921BFConnectionId = 0 ;
   this.O9921BFConnectionId = 0 ;
   this.A9924BFConnectionNomeArquivo = "" ;
   this.Z9924BFConnectionNomeArquivo = "" ;
   this.O9924BFConnectionNomeArquivo = "" ;
   this.A9925BFConnectionArquivo = "" ;
   this.Z9925BFConnectionArquivo = "" ;
   this.O9925BFConnectionArquivo = "" ;
   this.A9926BFConnectionPendente = false ;
   this.Z9926BFConnectionPendente = false ;
   this.O9926BFConnectionPendente = false ;
   this.A9927BFConnectionImpressora = "" ;
   this.Z9927BFConnectionImpressora = "" ;
   this.O9927BFConnectionImpressora = "" ;
   this.A9928BFConnectionIP = "" ;
   this.Z9928BFConnectionIP = "" ;
   this.O9928BFConnectionIP = "" ;
   this.A9931BFConnectionTipo = "" ;
   this.Z9931BFConnectionTipo = "" ;
   this.O9931BFConnectionTipo = "" ;
   this.A9932BFConnectionComando = "" ;
   this.Z9932BFConnectionComando = "" ;
   this.O9932BFConnectionComando = "" ;
   this.A9929BFConnectionUsuarioId = "" ;
   this.Z9929BFConnectionUsuarioId = "" ;
   this.O9929BFConnectionUsuarioId = "" ;
   this.A9930BFConnectionDataHora = gx.date.nullDate() ;
   this.Z9930BFConnectionDataHora = gx.date.nullDate() ;
   this.O9930BFConnectionDataHora = gx.date.nullDate() ;
   this.A9921BFConnectionId = 0 ;
   this.A9924BFConnectionNomeArquivo = "" ;
   this.A9925BFConnectionArquivo = "" ;
   this.A9926BFConnectionPendente = false ;
   this.A9927BFConnectionImpressora = "" ;
   this.A9928BFConnectionIP = "" ;
   this.A9931BFConnectionTipo = "" ;
   this.A9932BFConnectionComando = "" ;
   this.A9929BFConnectionUsuarioId = "" ;
   this.A9930BFConnectionDataHora = gx.date.nullDate() ;
   this.Events = {"e11ef742_client": ["ENTER", true] ,"e12ef742_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tbfconnection());
