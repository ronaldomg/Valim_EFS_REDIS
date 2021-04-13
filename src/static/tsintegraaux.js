/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:47.1
*/
gx.evt.autoSkip = false;
gx.define('tsintegraaux', false, function () {
   this.ServerClass =  "tsintegraaux" ;
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
   this.Valid_Sintegraauxtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRAAUXTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegraauxentsai=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRAAUXENTSAI");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegraauxdata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRAAUXDATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegraauxnota=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRAAUXNOTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegraauxserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRAAUXSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegraauxsubserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRAAUXSUBSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegraauxcfop=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SINTEGRAAUXCFOP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sintegraauxaliquota=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Sintegraauxaliquota",["gx.O.A8222SintegraAuxTipo", "gx.O.A8223SintegraAuxEntSai", 'gx.date.urlDate(gx.O.A8224SintegraAuxData,"DMY4")', "gx.O.A8225SintegraAuxNota", "gx.O.A8226SintegraAuxSerie", "gx.O.A8227SintegraAuxSubSerie", "gx.O.A8228SintegraAuxCFOP", "gx.num.urlDecimal(gx.O.A8229SintegraAuxAliquota,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8215SintegraAuxVlrTotal,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8216SintegraAuxVlrBaseCalculo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8217SintegraAuxVlrImposto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8218SintegraAuxVlrNaoTributado,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8219SintegraAuxVlrOutras,\'.\',\',\')", "gx.O.A8220SintegraAuxNumInicial", "gx.O.A8221SintegraAuxNumFinal", "gx.O.A8474SintegraAuxNoDocmto"],["A8215SintegraAuxVlrTotal", "A8216SintegraAuxVlrBaseCalculo", "A8217SintegraAuxVlrImposto", "A8218SintegraAuxVlrNaoTributado", "A8219SintegraAuxVlrOutras", "A8220SintegraAuxNumInicial", "A8221SintegraAuxNumFinal", "A8474SintegraAuxNoDocmto", "Gx_mode", "Z8222SintegraAuxTipo", "Z8223SintegraAuxEntSai", "Z8224SintegraAuxData", "Z8225SintegraAuxNota", "Z8226SintegraAuxSerie", "Z8227SintegraAuxSubSerie", "Z8228SintegraAuxCFOP", "Z8229SintegraAuxAliquota", "Z8215SintegraAuxVlrTotal", "Z8216SintegraAuxVlrBaseCalculo", "Z8217SintegraAuxVlrImposto", "Z8218SintegraAuxVlrNaoTributado", "Z8219SintegraAuxVlrOutras", "Z8220SintegraAuxNumInicial", "Z8221SintegraAuxNumFinal", "Z8474SintegraAuxNoDocmto", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11bj607_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12bj607_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13bj607_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,49,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,91,100,102];
   this.GXLastCtrlId =102;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegraauxtipo,isvalid:null,rgrid:[],fld:"SINTEGRAAUXTIPO",gxz:"Z8222SintegraAuxTipo",gxold:"O8222SintegraAuxTipo",gxvar:"A8222SintegraAuxTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8222SintegraAuxTipo=Value},v2z:function(Value){gx.O.Z8222SintegraAuxTipo=Value},v2c:function(){gx.fn.setControlValue("SINTEGRAAUXTIPO",gx.O.A8222SintegraAuxTipo,0)},c2v:function(){gx.O.A8222SintegraAuxTipo=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRAAUXTIPO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegraauxentsai,isvalid:null,rgrid:[],fld:"SINTEGRAAUXENTSAI",gxz:"Z8223SintegraAuxEntSai",gxold:"O8223SintegraAuxEntSai",gxvar:"A8223SintegraAuxEntSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8223SintegraAuxEntSai=Value},v2z:function(Value){gx.O.Z8223SintegraAuxEntSai=Value},v2c:function(){gx.fn.setControlValue("SINTEGRAAUXENTSAI",gx.O.A8223SintegraAuxEntSai,0)},c2v:function(){gx.O.A8223SintegraAuxEntSai=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRAAUXENTSAI")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegraauxdata,isvalid:null,rgrid:[],fld:"SINTEGRAAUXDATA",gxz:"Z8224SintegraAuxData",gxold:"O8224SintegraAuxData",gxvar:"A8224SintegraAuxData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8224SintegraAuxData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8224SintegraAuxData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRAAUXDATA",gx.O.A8224SintegraAuxData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8224SintegraAuxData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SINTEGRAAUXDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"9999999999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegraauxnota,isvalid:null,rgrid:[],fld:"SINTEGRAAUXNOTA",gxz:"Z8225SintegraAuxNota",gxold:"O8225SintegraAuxNota",gxvar:"A8225SintegraAuxNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8225SintegraAuxNota=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8225SintegraAuxNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRAAUXNOTA",gx.O.A8225SintegraAuxNota,0)},c2v:function(){gx.O.A8225SintegraAuxNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRAAUXNOTA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegraauxserie,isvalid:null,rgrid:[],fld:"SINTEGRAAUXSERIE",gxz:"Z8226SintegraAuxSerie",gxold:"O8226SintegraAuxSerie",gxvar:"A8226SintegraAuxSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8226SintegraAuxSerie=Value},v2z:function(Value){gx.O.Z8226SintegraAuxSerie=Value},v2c:function(){gx.fn.setControlValue("SINTEGRAAUXSERIE",gx.O.A8226SintegraAuxSerie,0)},c2v:function(){gx.O.A8226SintegraAuxSerie=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRAAUXSERIE")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegraauxsubserie,isvalid:null,rgrid:[],fld:"SINTEGRAAUXSUBSERIE",gxz:"Z8227SintegraAuxSubSerie",gxold:"O8227SintegraAuxSubSerie",gxvar:"A8227SintegraAuxSubSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8227SintegraAuxSubSerie=Value},v2z:function(Value){gx.O.Z8227SintegraAuxSubSerie=Value},v2c:function(){gx.fn.setControlValue("SINTEGRAAUXSUBSERIE",gx.O.A8227SintegraAuxSubSerie,0)},c2v:function(){gx.O.A8227SintegraAuxSubSerie=this.val()},val:function(){return gx.fn.getControlValue("SINTEGRAAUXSUBSERIE")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegraauxcfop,isvalid:null,rgrid:[],fld:"SINTEGRAAUXCFOP",gxz:"Z8228SintegraAuxCFOP",gxold:"O8228SintegraAuxCFOP",gxvar:"A8228SintegraAuxCFOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8228SintegraAuxCFOP=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8228SintegraAuxCFOP=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRAAUXCFOP",gx.O.A8228SintegraAuxCFOP,0)},c2v:function(){gx.O.A8228SintegraAuxCFOP=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRAAUXCFOP",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"99.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Sintegraauxaliquota,isvalid:null,rgrid:[],fld:"SINTEGRAAUXALIQUOTA",gxz:"Z8229SintegraAuxAliquota",gxold:"O8229SintegraAuxAliquota",gxvar:"A8229SintegraAuxAliquota",ucs:[],op:[90,85,80,75,70,65,60,55],ip:[90,85,80,75,70,65,60,55,49,44,39,34,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8229SintegraAuxAliquota=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8229SintegraAuxAliquota=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRAAUXALIQUOTA",gx.O.A8229SintegraAuxAliquota,2,',')},c2v:function(){gx.O.A8229SintegraAuxAliquota=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRAAUXALIQUOTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"99999999999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRAAUXVLRTOTAL",gxz:"Z8215SintegraAuxVlrTotal",gxold:"O8215SintegraAuxVlrTotal",gxvar:"A8215SintegraAuxVlrTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8215SintegraAuxVlrTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8215SintegraAuxVlrTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRAAUXVLRTOTAL",gx.O.A8215SintegraAuxVlrTotal,2,',')},c2v:function(){gx.O.A8215SintegraAuxVlrTotal=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRAAUXVLRTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"99999999999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRAAUXVLRBASECALCULO",gxz:"Z8216SintegraAuxVlrBaseCalculo",gxold:"O8216SintegraAuxVlrBaseCalculo",gxvar:"A8216SintegraAuxVlrBaseCalculo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8216SintegraAuxVlrBaseCalculo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8216SintegraAuxVlrBaseCalculo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRAAUXVLRBASECALCULO",gx.O.A8216SintegraAuxVlrBaseCalculo,2,',')},c2v:function(){gx.O.A8216SintegraAuxVlrBaseCalculo=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRAAUXVLRBASECALCULO",'.',',')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"99999999999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRAAUXVLRIMPOSTO",gxz:"Z8217SintegraAuxVlrImposto",gxold:"O8217SintegraAuxVlrImposto",gxvar:"A8217SintegraAuxVlrImposto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8217SintegraAuxVlrImposto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8217SintegraAuxVlrImposto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRAAUXVLRIMPOSTO",gx.O.A8217SintegraAuxVlrImposto,2,',')},c2v:function(){gx.O.A8217SintegraAuxVlrImposto=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRAAUXVLRIMPOSTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"99999999999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRAAUXVLRNAOTRIBUTADO",gxz:"Z8218SintegraAuxVlrNaoTributado",gxold:"O8218SintegraAuxVlrNaoTributado",gxvar:"A8218SintegraAuxVlrNaoTributado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8218SintegraAuxVlrNaoTributado=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8218SintegraAuxVlrNaoTributado=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRAAUXVLRNAOTRIBUTADO",gx.O.A8218SintegraAuxVlrNaoTributado,2,',')},c2v:function(){gx.O.A8218SintegraAuxVlrNaoTributado=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRAAUXVLRNAOTRIBUTADO",'.',',')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"decimal",len:14,dec:2,sign:false,pic:"99999999999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRAAUXVLROUTRAS",gxz:"Z8219SintegraAuxVlrOutras",gxold:"O8219SintegraAuxVlrOutras",gxvar:"A8219SintegraAuxVlrOutras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8219SintegraAuxVlrOutras=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8219SintegraAuxVlrOutras=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SINTEGRAAUXVLROUTRAS",gx.O.A8219SintegraAuxVlrOutras,2,',')},c2v:function(){gx.O.A8219SintegraAuxVlrOutras=this.val()},val:function(){return gx.fn.getDecimalValue("SINTEGRAAUXVLROUTRAS",'.',',')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRAAUXNUMINICIAL",gxz:"Z8220SintegraAuxNumInicial",gxold:"O8220SintegraAuxNumInicial",gxvar:"A8220SintegraAuxNumInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8220SintegraAuxNumInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8220SintegraAuxNumInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRAAUXNUMINICIAL",gx.O.A8220SintegraAuxNumInicial,0)},c2v:function(){gx.O.A8220SintegraAuxNumInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRAAUXNUMINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRAAUXNUMFINAL",gxz:"Z8221SintegraAuxNumFinal",gxold:"O8221SintegraAuxNumFinal",gxvar:"A8221SintegraAuxNumFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8221SintegraAuxNumFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8221SintegraAuxNumFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRAAUXNUMFINAL",gx.O.A8221SintegraAuxNumFinal,0)},c2v:function(){gx.O.A8221SintegraAuxNumFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRAAUXNUMFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SINTEGRAAUXNODOCMTO",gxz:"Z8474SintegraAuxNoDocmto",gxold:"O8474SintegraAuxNoDocmto",gxvar:"A8474SintegraAuxNoDocmto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8474SintegraAuxNoDocmto=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8474SintegraAuxNoDocmto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SINTEGRAAUXNODOCMTO",gx.O.A8474SintegraAuxNoDocmto,0)},c2v:function(){gx.O.A8474SintegraAuxNoDocmto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SINTEGRAAUXNODOCMTO",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"BTNHELP",grid:0};
   this.A8222SintegraAuxTipo = "" ;
   this.Z8222SintegraAuxTipo = "" ;
   this.O8222SintegraAuxTipo = "" ;
   this.A8223SintegraAuxEntSai = "" ;
   this.Z8223SintegraAuxEntSai = "" ;
   this.O8223SintegraAuxEntSai = "" ;
   this.A8224SintegraAuxData = gx.date.nullDate() ;
   this.Z8224SintegraAuxData = gx.date.nullDate() ;
   this.O8224SintegraAuxData = gx.date.nullDate() ;
   this.A8225SintegraAuxNota = 0 ;
   this.Z8225SintegraAuxNota = 0 ;
   this.O8225SintegraAuxNota = 0 ;
   this.A8226SintegraAuxSerie = "" ;
   this.Z8226SintegraAuxSerie = "" ;
   this.O8226SintegraAuxSerie = "" ;
   this.A8227SintegraAuxSubSerie = "" ;
   this.Z8227SintegraAuxSubSerie = "" ;
   this.O8227SintegraAuxSubSerie = "" ;
   this.A8228SintegraAuxCFOP = 0 ;
   this.Z8228SintegraAuxCFOP = 0 ;
   this.O8228SintegraAuxCFOP = 0 ;
   this.A8229SintegraAuxAliquota = 0 ;
   this.Z8229SintegraAuxAliquota = 0 ;
   this.O8229SintegraAuxAliquota = 0 ;
   this.A8215SintegraAuxVlrTotal = 0 ;
   this.Z8215SintegraAuxVlrTotal = 0 ;
   this.O8215SintegraAuxVlrTotal = 0 ;
   this.A8216SintegraAuxVlrBaseCalculo = 0 ;
   this.Z8216SintegraAuxVlrBaseCalculo = 0 ;
   this.O8216SintegraAuxVlrBaseCalculo = 0 ;
   this.A8217SintegraAuxVlrImposto = 0 ;
   this.Z8217SintegraAuxVlrImposto = 0 ;
   this.O8217SintegraAuxVlrImposto = 0 ;
   this.A8218SintegraAuxVlrNaoTributado = 0 ;
   this.Z8218SintegraAuxVlrNaoTributado = 0 ;
   this.O8218SintegraAuxVlrNaoTributado = 0 ;
   this.A8219SintegraAuxVlrOutras = 0 ;
   this.Z8219SintegraAuxVlrOutras = 0 ;
   this.O8219SintegraAuxVlrOutras = 0 ;
   this.A8220SintegraAuxNumInicial = 0 ;
   this.Z8220SintegraAuxNumInicial = 0 ;
   this.O8220SintegraAuxNumInicial = 0 ;
   this.A8221SintegraAuxNumFinal = 0 ;
   this.Z8221SintegraAuxNumFinal = 0 ;
   this.O8221SintegraAuxNumFinal = 0 ;
   this.A8474SintegraAuxNoDocmto = 0 ;
   this.Z8474SintegraAuxNoDocmto = 0 ;
   this.O8474SintegraAuxNoDocmto = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8222SintegraAuxTipo = "" ;
   this.A8223SintegraAuxEntSai = "" ;
   this.A8224SintegraAuxData = gx.date.nullDate() ;
   this.A8225SintegraAuxNota = 0 ;
   this.A8226SintegraAuxSerie = "" ;
   this.A8227SintegraAuxSubSerie = "" ;
   this.A8228SintegraAuxCFOP = 0 ;
   this.A8229SintegraAuxAliquota = 0 ;
   this.A8215SintegraAuxVlrTotal = 0 ;
   this.A8216SintegraAuxVlrBaseCalculo = 0 ;
   this.A8217SintegraAuxVlrImposto = 0 ;
   this.A8218SintegraAuxVlrNaoTributado = 0 ;
   this.A8219SintegraAuxVlrOutras = 0 ;
   this.A8220SintegraAuxNumInicial = 0 ;
   this.A8221SintegraAuxNumFinal = 0 ;
   this.A8474SintegraAuxNoDocmto = 0 ;
   this.Events = {"e12bj607_client": ["ENTER", true] ,"e13bj607_client": ["CANCEL", true] ,"e11bj607_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsintegraaux());
