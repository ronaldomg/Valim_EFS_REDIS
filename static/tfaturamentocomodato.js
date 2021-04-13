/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:58:1.58
*/
gx.evt.autoSkip = false;
gx.define('tfaturamentocomodato', false, function () {
   this.ServerClass =  "tfaturamentocomodato" ;
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
   this.Valid_Faturamentocomodatoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Faturamentocomodatoid",["gx.O.A7596FaturamentoComodatoId", 'gx.date.urlDate(gx.O.A7597FaturamentoComodatoData,"DMY4")', "gx.O.A7605FaturamentoComodatoContadorIni", "gx.O.A7606FaturamentoComodatoContadorFin", "gx.O.A7607FaturamentoComodatoFormaPagto", 'gx.date.urlDate(gx.O.A7608FaturamentoComodatoVencimento,"DMY4")', "gx.num.urlDecimal(gx.O.A7609FaturamentoComodatoValor,\'.\',\',\')", "gx.O.A7610FaturamentoComodatoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A7611FaturamentoComodatoDataHoraAlt,"DMY4")', "gx.O.A7598FaturamentoComodatoClienteEmpI", "gx.O.A7599FaturamentoComodatoClienteId"],["A7597FaturamentoComodatoData", "A7598FaturamentoComodatoClienteEmpI", "A7599FaturamentoComodatoClienteId", "A7605FaturamentoComodatoContadorIni", "A7606FaturamentoComodatoContadorFin", "A7607FaturamentoComodatoFormaPagto", "A7608FaturamentoComodatoVencimento", "A7609FaturamentoComodatoValor", "A7610FaturamentoComodatoUsuarioAlt", "A7611FaturamentoComodatoDataHoraAlt", "A7600FaturamentoComodatoClienteNome", "A7601FaturamentoComodatoClienteTpCo", "A7602FaturamentoComodatoClienteVlDo", "A7603FaturamentoComodatoClienteVlFi", "A7604FaturamentoComodatoClienteMinD", "Gx_mode", "Z7596FaturamentoComodatoId", "Z7597FaturamentoComodatoData", "Z7598FaturamentoComodatoClienteEmpI", "Z7599FaturamentoComodatoClienteId", "Z7605FaturamentoComodatoContadorIni", "Z7606FaturamentoComodatoContadorFin", "Z7607FaturamentoComodatoFormaPagto", "Z7608FaturamentoComodatoVencimento", "Z7609FaturamentoComodatoValor", "Z7610FaturamentoComodatoUsuarioAlt", "Z7611FaturamentoComodatoDataHoraAlt", "Z7600FaturamentoComodatoClienteNome", "Z7601FaturamentoComodatoClienteTpCo", "Z7602FaturamentoComodatoClienteVlDo", "Z7603FaturamentoComodatoClienteVlFi", "Z7604FaturamentoComodatoClienteMinD", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Faturamentocomodatoclienteempi=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FATURAMENTOCOMODATOCLIENTEEMPI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Faturamentocomodatoclienteid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Faturamentocomodatoclienteid",["gx.O.A7598FaturamentoComodatoClienteEmpI", "gx.O.A7599FaturamentoComodatoClienteId", "gx.O.A7600FaturamentoComodatoClienteNome", "gx.O.A7601FaturamentoComodatoClienteTpCo", "gx.num.urlDecimal(gx.O.A7602FaturamentoComodatoClienteVlDo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7603FaturamentoComodatoClienteVlFi,\'.\',\',\')", "gx.O.A7604FaturamentoComodatoClienteMinD"],["A7600FaturamentoComodatoClienteNome", "A7601FaturamentoComodatoClienteTpCo", "A7602FaturamentoComodatoClienteVlDo", "A7603FaturamentoComodatoClienteVlFi", "A7604FaturamentoComodatoClienteMinD"]);
      return true;
   }
   this.e11au574_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12au574_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13au574_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,91,100,102,104];
   this.GXLastCtrlId =104;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Faturamentocomodatoid,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOID",gxz:"Z7596FaturamentoComodatoId",gxold:"O7596FaturamentoComodatoId",gxvar:"A7596FaturamentoComodatoId",ucs:[],op:[30,25,90,85,80,75,70,65,60,20],ip:[30,25,90,85,80,75,70,65,60,20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7596FaturamentoComodatoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7596FaturamentoComodatoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATOID",gx.O.A7596FaturamentoComodatoId,0)},c2v:function(){gx.O.A7596FaturamentoComodatoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FATURAMENTOCOMODATOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATODATA",gxz:"Z7597FaturamentoComodatoData",gxold:"O7597FaturamentoComodatoData",gxvar:"A7597FaturamentoComodatoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7597FaturamentoComodatoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7597FaturamentoComodatoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATODATA",gx.O.A7597FaturamentoComodatoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7597FaturamentoComodatoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("FATURAMENTOCOMODATODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Faturamentocomodatoclienteempi,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCLIENTEEMPI",gxz:"Z7598FaturamentoComodatoClienteEmpI",gxold:"O7598FaturamentoComodatoClienteEmpI",gxvar:"A7598FaturamentoComodatoClienteEmpI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7598FaturamentoComodatoClienteEmpI=Value},v2z:function(Value){gx.O.Z7598FaturamentoComodatoClienteEmpI=Value},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATOCLIENTEEMPI",gx.O.A7598FaturamentoComodatoClienteEmpI,0)},c2v:function(){gx.O.A7598FaturamentoComodatoClienteEmpI=this.val()},val:function(){return gx.fn.getControlValue("FATURAMENTOCOMODATOCLIENTEEMPI")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Faturamentocomodatoclienteid,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCLIENTEID",gxz:"Z7599FaturamentoComodatoClienteId",gxold:"O7599FaturamentoComodatoClienteId",gxvar:"A7599FaturamentoComodatoClienteId",ucs:[],op:[55,50,45,40,35],ip:[55,50,45,40,35,30,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7599FaturamentoComodatoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7599FaturamentoComodatoClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATOCLIENTEID",gx.O.A7599FaturamentoComodatoClienteId,0)},c2v:function(){gx.O.A7599FaturamentoComodatoClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FATURAMENTOCOMODATOCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCLIENTENOME",gxz:"Z7600FaturamentoComodatoClienteNome",gxold:"O7600FaturamentoComodatoClienteNome",gxvar:"A7600FaturamentoComodatoClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7600FaturamentoComodatoClienteNome=Value},v2z:function(Value){gx.O.Z7600FaturamentoComodatoClienteNome=Value},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATOCLIENTENOME",gx.O.A7600FaturamentoComodatoClienteNome,0)},c2v:function(){gx.O.A7600FaturamentoComodatoClienteNome=this.val()},val:function(){return gx.fn.getControlValue("FATURAMENTOCOMODATOCLIENTENOME")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCLIENTETPCO",gxz:"Z7601FaturamentoComodatoClienteTpCo",gxold:"O7601FaturamentoComodatoClienteTpCo",gxvar:"A7601FaturamentoComodatoClienteTpCo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7601FaturamentoComodatoClienteTpCo=Value},v2z:function(Value){gx.O.Z7601FaturamentoComodatoClienteTpCo=Value},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATOCLIENTETPCO",gx.O.A7601FaturamentoComodatoClienteTpCo,0)},c2v:function(){gx.O.A7601FaturamentoComodatoClienteTpCo=this.val()},val:function(){return gx.fn.getControlValue("FATURAMENTOCOMODATOCLIENTETPCO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCLIENTEVLDO",gxz:"Z7602FaturamentoComodatoClienteVlDo",gxold:"O7602FaturamentoComodatoClienteVlDo",gxvar:"A7602FaturamentoComodatoClienteVlDo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7602FaturamentoComodatoClienteVlDo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7602FaturamentoComodatoClienteVlDo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FATURAMENTOCOMODATOCLIENTEVLDO",gx.O.A7602FaturamentoComodatoClienteVlDo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7602FaturamentoComodatoClienteVlDo=this.val()},val:function(){return gx.fn.getDecimalValue("FATURAMENTOCOMODATOCLIENTEVLDO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCLIENTEVLFI",gxz:"Z7603FaturamentoComodatoClienteVlFi",gxold:"O7603FaturamentoComodatoClienteVlFi",gxvar:"A7603FaturamentoComodatoClienteVlFi",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7603FaturamentoComodatoClienteVlFi=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7603FaturamentoComodatoClienteVlFi=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FATURAMENTOCOMODATOCLIENTEVLFI",gx.O.A7603FaturamentoComodatoClienteVlFi,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7603FaturamentoComodatoClienteVlFi=this.val()},val:function(){return gx.fn.getDecimalValue("FATURAMENTOCOMODATOCLIENTEVLFI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCLIENTEMIND",gxz:"Z7604FaturamentoComodatoClienteMinD",gxold:"O7604FaturamentoComodatoClienteMinD",gxvar:"A7604FaturamentoComodatoClienteMinD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7604FaturamentoComodatoClienteMinD=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7604FaturamentoComodatoClienteMinD=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATOCLIENTEMIND",gx.O.A7604FaturamentoComodatoClienteMinD,0)},c2v:function(){gx.O.A7604FaturamentoComodatoClienteMinD=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FATURAMENTOCOMODATOCLIENTEMIND",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCONTADORINI",gxz:"Z7605FaturamentoComodatoContadorIni",gxold:"O7605FaturamentoComodatoContadorIni",gxvar:"A7605FaturamentoComodatoContadorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7605FaturamentoComodatoContadorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7605FaturamentoComodatoContadorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATOCONTADORINI",gx.O.A7605FaturamentoComodatoContadorIni,0)},c2v:function(){gx.O.A7605FaturamentoComodatoContadorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FATURAMENTOCOMODATOCONTADORINI",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCONTADORFIN",gxz:"Z7606FaturamentoComodatoContadorFin",gxold:"O7606FaturamentoComodatoContadorFin",gxvar:"A7606FaturamentoComodatoContadorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7606FaturamentoComodatoContadorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7606FaturamentoComodatoContadorFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATOCONTADORFIN",gx.O.A7606FaturamentoComodatoContadorFin,0)},c2v:function(){gx.O.A7606FaturamentoComodatoContadorFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FATURAMENTOCOMODATOCONTADORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOFORMAPAGTO",gxz:"Z7607FaturamentoComodatoFormaPagto",gxold:"O7607FaturamentoComodatoFormaPagto",gxvar:"A7607FaturamentoComodatoFormaPagto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7607FaturamentoComodatoFormaPagto=Value},v2z:function(Value){gx.O.Z7607FaturamentoComodatoFormaPagto=Value},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATOFORMAPAGTO",gx.O.A7607FaturamentoComodatoFormaPagto,0)},c2v:function(){gx.O.A7607FaturamentoComodatoFormaPagto=this.val()},val:function(){return gx.fn.getControlValue("FATURAMENTOCOMODATOFORMAPAGTO")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOVENCIMENTO",gxz:"Z7608FaturamentoComodatoVencimento",gxold:"O7608FaturamentoComodatoVencimento",gxvar:"A7608FaturamentoComodatoVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7608FaturamentoComodatoVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7608FaturamentoComodatoVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATOVENCIMENTO",gx.O.A7608FaturamentoComodatoVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7608FaturamentoComodatoVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("FATURAMENTOCOMODATOVENCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOVALOR",gxz:"Z7609FaturamentoComodatoValor",gxold:"O7609FaturamentoComodatoValor",gxvar:"A7609FaturamentoComodatoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7609FaturamentoComodatoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7609FaturamentoComodatoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FATURAMENTOCOMODATOVALOR",gx.O.A7609FaturamentoComodatoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7609FaturamentoComodatoValor=this.val()},val:function(){return gx.fn.getDecimalValue("FATURAMENTOCOMODATOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOUSUARIOALT",gxz:"Z7610FaturamentoComodatoUsuarioAlt",gxold:"O7610FaturamentoComodatoUsuarioAlt",gxvar:"A7610FaturamentoComodatoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7610FaturamentoComodatoUsuarioAlt=Value},v2z:function(Value){gx.O.Z7610FaturamentoComodatoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATOUSUARIOALT",gx.O.A7610FaturamentoComodatoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7610FaturamentoComodatoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("FATURAMENTOCOMODATOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATODATAHORAALT",gxz:"Z7611FaturamentoComodatoDataHoraAlt",gxold:"O7611FaturamentoComodatoDataHoraAlt",gxvar:"A7611FaturamentoComodatoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7611FaturamentoComodatoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7611FaturamentoComodatoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMODATODATAHORAALT",gx.O.A7611FaturamentoComodatoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7611FaturamentoComodatoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("FATURAMENTOCOMODATODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[91]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"BTNHELP",grid:0};
   GXValidFnc[104]={fld:"PROMPT_7598_7599",grid:574};
   this.A7596FaturamentoComodatoId = 0 ;
   this.Z7596FaturamentoComodatoId = 0 ;
   this.O7596FaturamentoComodatoId = 0 ;
   this.A7597FaturamentoComodatoData = gx.date.nullDate() ;
   this.Z7597FaturamentoComodatoData = gx.date.nullDate() ;
   this.O7597FaturamentoComodatoData = gx.date.nullDate() ;
   this.A7598FaturamentoComodatoClienteEmpI = "" ;
   this.Z7598FaturamentoComodatoClienteEmpI = "" ;
   this.O7598FaturamentoComodatoClienteEmpI = "" ;
   this.A7599FaturamentoComodatoClienteId = 0 ;
   this.Z7599FaturamentoComodatoClienteId = 0 ;
   this.O7599FaturamentoComodatoClienteId = 0 ;
   this.A7600FaturamentoComodatoClienteNome = "" ;
   this.Z7600FaturamentoComodatoClienteNome = "" ;
   this.O7600FaturamentoComodatoClienteNome = "" ;
   this.A7601FaturamentoComodatoClienteTpCo = "" ;
   this.Z7601FaturamentoComodatoClienteTpCo = "" ;
   this.O7601FaturamentoComodatoClienteTpCo = "" ;
   this.A7602FaturamentoComodatoClienteVlDo = 0 ;
   this.Z7602FaturamentoComodatoClienteVlDo = 0 ;
   this.O7602FaturamentoComodatoClienteVlDo = 0 ;
   this.A7603FaturamentoComodatoClienteVlFi = 0 ;
   this.Z7603FaturamentoComodatoClienteVlFi = 0 ;
   this.O7603FaturamentoComodatoClienteVlFi = 0 ;
   this.A7604FaturamentoComodatoClienteMinD = 0 ;
   this.Z7604FaturamentoComodatoClienteMinD = 0 ;
   this.O7604FaturamentoComodatoClienteMinD = 0 ;
   this.A7605FaturamentoComodatoContadorIni = 0 ;
   this.Z7605FaturamentoComodatoContadorIni = 0 ;
   this.O7605FaturamentoComodatoContadorIni = 0 ;
   this.A7606FaturamentoComodatoContadorFin = 0 ;
   this.Z7606FaturamentoComodatoContadorFin = 0 ;
   this.O7606FaturamentoComodatoContadorFin = 0 ;
   this.A7607FaturamentoComodatoFormaPagto = "" ;
   this.Z7607FaturamentoComodatoFormaPagto = "" ;
   this.O7607FaturamentoComodatoFormaPagto = "" ;
   this.A7608FaturamentoComodatoVencimento = gx.date.nullDate() ;
   this.Z7608FaturamentoComodatoVencimento = gx.date.nullDate() ;
   this.O7608FaturamentoComodatoVencimento = gx.date.nullDate() ;
   this.A7609FaturamentoComodatoValor = 0 ;
   this.Z7609FaturamentoComodatoValor = 0 ;
   this.O7609FaturamentoComodatoValor = 0 ;
   this.A7610FaturamentoComodatoUsuarioAlt = "" ;
   this.Z7610FaturamentoComodatoUsuarioAlt = "" ;
   this.O7610FaturamentoComodatoUsuarioAlt = "" ;
   this.A7611FaturamentoComodatoDataHoraAlt = gx.date.nullDate() ;
   this.Z7611FaturamentoComodatoDataHoraAlt = gx.date.nullDate() ;
   this.O7611FaturamentoComodatoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A7596FaturamentoComodatoId = 0 ;
   this.A7597FaturamentoComodatoData = gx.date.nullDate() ;
   this.A7598FaturamentoComodatoClienteEmpI = "" ;
   this.A7599FaturamentoComodatoClienteId = 0 ;
   this.A7600FaturamentoComodatoClienteNome = "" ;
   this.A7601FaturamentoComodatoClienteTpCo = "" ;
   this.A7602FaturamentoComodatoClienteVlDo = 0 ;
   this.A7603FaturamentoComodatoClienteVlFi = 0 ;
   this.A7604FaturamentoComodatoClienteMinD = 0 ;
   this.A7605FaturamentoComodatoContadorIni = 0 ;
   this.A7606FaturamentoComodatoContadorFin = 0 ;
   this.A7607FaturamentoComodatoFormaPagto = "" ;
   this.A7608FaturamentoComodatoVencimento = gx.date.nullDate() ;
   this.A7609FaturamentoComodatoValor = 0 ;
   this.A7610FaturamentoComodatoUsuarioAlt = "" ;
   this.A7611FaturamentoComodatoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e12au574_client": ["ENTER", true] ,"e13au574_client": ["CANCEL", true] ,"e11au574_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_7598_7599", [25,30]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tfaturamentocomodato());
