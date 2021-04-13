/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:36:19.27
*/
gx.evt.autoSkip = false;
gx.define('tcontarateio', false, function () {
   this.ServerClass =  "tcontarateio" ;
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
      this.AV19LogContaPagRecEmpresaId=gx.fn.getControlValue("vLOGCONTAPAGRECEMPRESAID") ;
      this.AV20LogContaPagRecNumero=gx.fn.getIntegerValue("vLOGCONTAPAGRECNUMERO",'.') ;
      this.AV21LogContaRateioSequencia=gx.fn.getIntegerValue("vLOGCONTARATEIOSEQUENCIA",'.') ;
      this.AV18lContaRateios=gx.fn.getControlValue("vLCONTARATEIOS") ;
      this.AV22LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Contapagrecempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagrecnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contapagrecnumero",["gx.O.A1685ContaPagRecEmpresaId", "gx.O.A1686ContaPagRecNumero"],[]);
      return true;
   }
   this.Valid_Contarateiosequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contarateiosequencia",["gx.O.A1685ContaPagRecEmpresaId", "gx.O.A1686ContaPagRecNumero", "gx.O.A1810ContaRateioSequencia", "gx.num.urlDecimal(gx.O.A1811ContaRateioValor,\'.\',\',\')", "gx.O.A1812ContaRateioUsuarioAlt", 'gx.date.urlDateTime(gx.O.A1813ContaRateioDataHoraAlt,"DMY4")', "gx.O.A1792ContaRateioCCustoEmpId", "gx.O.A1793ContaRateioCCustoId", "gx.O.A1795ContaRateioNaturezaEmpId", "gx.O.A1796ContaRateioNaturezaId", "gx.O.A1798ContaRateioCContabilEmpId", "gx.O.A1799ContaRateioCContabilId"],["A1792ContaRateioCCustoEmpId", "A1793ContaRateioCCustoId", "A1795ContaRateioNaturezaEmpId", "A1796ContaRateioNaturezaId", "A1798ContaRateioCContabilEmpId", "A1799ContaRateioCContabilId", "A1811ContaRateioValor", "A1812ContaRateioUsuarioAlt", "A1813ContaRateioDataHoraAlt", "A1794ContaRateioCCustoDescricao", "A1797ContaRateioNaturezaDescricao", "A1800ContaRateioCContabilNome", "A2071ContaRateioCContabilTradutor", "Gx_mode", "Z1685ContaPagRecEmpresaId", "Z1686ContaPagRecNumero", "Z1810ContaRateioSequencia", "Z1792ContaRateioCCustoEmpId", "Z1793ContaRateioCCustoId", "Z1795ContaRateioNaturezaEmpId", "Z1796ContaRateioNaturezaId", "Z1798ContaRateioCContabilEmpId", "Z1799ContaRateioCContabilId", "Z1811ContaRateioValor", "Z1812ContaRateioUsuarioAlt", "Z1813ContaRateioDataHoraAlt", "Z1794ContaRateioCCustoDescricao", "Z1797ContaRateioNaturezaDescricao", "Z1800ContaRateioCContabilNome", "Z2071ContaRateioCContabilTradutor", "O1811ContaRateioValor", "O1799ContaRateioCContabilId", "O2071ContaRateioCContabilTradutor", "O1800ContaRateioCContabilNome", "O1798ContaRateioCContabilEmpId", "O1796ContaRateioNaturezaId", "O1797ContaRateioNaturezaDescricao", "O1795ContaRateioNaturezaEmpId", "O1793ContaRateioCCustoId", "O1794ContaRateioCCustoDescricao", "O1792ContaRateioCCustoEmpId", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Contarateioccustoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTARATEIOCCUSTOEMPID");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contarateioccustoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contarateioccustoid",["gx.O.Gx_mode", "gx.O.O1793ContaRateioCCustoId", "gx.O.O1794ContaRateioCCustoDescricao", "gx.O.A1792ContaRateioCCustoEmpId", "gx.O.A1793ContaRateioCCustoId", "gx.O.A1794ContaRateioCCustoDescricao"],["O1794ContaRateioCCustoDescricao", "A1794ContaRateioCCustoDescricao", ["AV18lContaRateios","Acontarateioccustodescricao"], ["AV18lContaRateios","Acontarateioccustoid"]]);
      return true;
   }
   this.Valid_Contarateioccustodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTARATEIOCCUSTODESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contarateionaturezaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTARATEIONATUREZAEMPID");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contarateionaturezaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contarateionaturezaid",["gx.O.Gx_mode", "gx.O.O1796ContaRateioNaturezaId", "gx.O.O1797ContaRateioNaturezaDescricao", "gx.O.A1795ContaRateioNaturezaEmpId", "gx.O.A1796ContaRateioNaturezaId", "gx.O.A1797ContaRateioNaturezaDescricao"],["O1797ContaRateioNaturezaDescricao", "A1797ContaRateioNaturezaDescricao", ["AV18lContaRateios","Acontarateionaturezadescricao"], ["AV18lContaRateios","Acontarateionaturezaid"]]);
      return true;
   }
   this.Valid_Contarateionaturezadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTARATEIONATUREZADESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contarateioccontabilempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTARATEIOCCONTABILEMPID");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contarateioccontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contarateioccontabilid",["gx.O.Gx_mode", "gx.O.O1799ContaRateioCContabilId", "gx.O.O2071ContaRateioCContabilTradutor", "gx.O.O1800ContaRateioCContabilNome", "gx.O.A1798ContaRateioCContabilEmpId", "gx.O.A1799ContaRateioCContabilId", "gx.O.A1800ContaRateioCContabilNome", "gx.O.A2071ContaRateioCContabilTradutor"],["O1800ContaRateioCContabilNome", "O2071ContaRateioCContabilTradutor", "A1800ContaRateioCContabilNome", "A2071ContaRateioCContabilTradutor", ["AV18lContaRateios","Acontarateioccontabilnome"], ["AV18lContaRateios","Acontarateioccontabiltradutor"], ["AV18lContaRateios","Acontarateioccontabilid"]]);
      return true;
   }
   this.Valid_Contarateioccontabilnome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTARATEIOCCONTABILNOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contarateioccontabiltradutor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTARATEIOCCONTABILTRADUTOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contarateiovalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTARATEIOVALOR");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e113h187_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e123h187_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e133h187_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,91,101,103,104,105,106];
   this.GXLastCtrlId =106;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecempresaid,isvalid:null,rgrid:[],fld:"CONTAPAGRECEMPRESAID",gxz:"Z1685ContaPagRecEmpresaId",gxold:"O1685ContaPagRecEmpresaId",gxvar:"A1685ContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1685ContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1685ContaPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("CONTAPAGRECEMPRESAID",gx.O.A1685ContaPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1685ContaPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecnumero,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPAGRECNUMERO",gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contarateiosequencia,isvalid:null,rgrid:[],fld:"CONTARATEIOSEQUENCIA",gxz:"Z1810ContaRateioSequencia",gxold:"O1810ContaRateioSequencia",gxvar:"A1810ContaRateioSequencia",ucs:[],op:[65,60,50,45,35,30,90,85,80],ip:[65,60,50,45,35,30,90,85,80,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1810ContaRateioSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1810ContaRateioSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTARATEIOSEQUENCIA",gx.O.A1810ContaRateioSequencia,0)},c2v:function(){gx.O.A1810ContaRateioSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTARATEIOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contarateioccustoempid,isvalid:null,rgrid:[],fld:"CONTARATEIOCCUSTOEMPID",gxz:"Z1792ContaRateioCCustoEmpId",gxold:"O1792ContaRateioCCustoEmpId",gxvar:"A1792ContaRateioCCustoEmpId",ucs:[],op:[],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1792ContaRateioCCustoEmpId=Value},v2z:function(Value){gx.O.Z1792ContaRateioCCustoEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTARATEIOCCUSTOEMPID",gx.O.A1792ContaRateioCCustoEmpId,0)},c2v:function(){gx.O.A1792ContaRateioCCustoEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTARATEIOCCUSTOEMPID")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contarateioccustoid,isvalid:null,rgrid:[],fld:"CONTARATEIOCCUSTOID",gxz:"Z1793ContaRateioCCustoId",gxold:"O1793ContaRateioCCustoId",gxvar:"A1793ContaRateioCCustoId",ucs:[],op:[40],ip:[40,35,30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1793ContaRateioCCustoId=Value},v2z:function(Value){gx.O.Z1793ContaRateioCCustoId=Value},v2c:function(){gx.fn.setControlValue("CONTARATEIOCCUSTOID",gx.O.A1793ContaRateioCCustoId,0)},c2v:function(){gx.O.A1793ContaRateioCCustoId=this.val()},val:function(){return gx.fn.getControlValue("CONTARATEIOCCUSTOID")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contarateioccustodescricao,isvalid:null,rgrid:[],fld:"CONTARATEIOCCUSTODESCRICAO",gxz:"Z1794ContaRateioCCustoDescricao",gxold:"O1794ContaRateioCCustoDescricao",gxvar:"A1794ContaRateioCCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1794ContaRateioCCustoDescricao=Value},v2z:function(Value){gx.O.Z1794ContaRateioCCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("CONTARATEIOCCUSTODESCRICAO",gx.O.A1794ContaRateioCCustoDescricao,0)},c2v:function(){gx.O.A1794ContaRateioCCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONTARATEIOCCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contarateionaturezaempid,isvalid:null,rgrid:[],fld:"CONTARATEIONATUREZAEMPID",gxz:"Z1795ContaRateioNaturezaEmpId",gxold:"O1795ContaRateioNaturezaEmpId",gxvar:"A1795ContaRateioNaturezaEmpId",ucs:[],op:[],ip:[45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1795ContaRateioNaturezaEmpId=Value},v2z:function(Value){gx.O.Z1795ContaRateioNaturezaEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTARATEIONATUREZAEMPID",gx.O.A1795ContaRateioNaturezaEmpId,0)},c2v:function(){gx.O.A1795ContaRateioNaturezaEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTARATEIONATUREZAEMPID")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contarateionaturezaid,isvalid:null,rgrid:[],fld:"CONTARATEIONATUREZAID",gxz:"Z1796ContaRateioNaturezaId",gxold:"O1796ContaRateioNaturezaId",gxvar:"A1796ContaRateioNaturezaId",ucs:[],op:[55],ip:[55,50,45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1796ContaRateioNaturezaId=Value},v2z:function(Value){gx.O.Z1796ContaRateioNaturezaId=Value},v2c:function(){gx.fn.setControlValue("CONTARATEIONATUREZAID",gx.O.A1796ContaRateioNaturezaId,0)},c2v:function(){gx.O.A1796ContaRateioNaturezaId=this.val()},val:function(){return gx.fn.getControlValue("CONTARATEIONATUREZAID")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contarateionaturezadescricao,isvalid:null,rgrid:[],fld:"CONTARATEIONATUREZADESCRICAO",gxz:"Z1797ContaRateioNaturezaDescricao",gxold:"O1797ContaRateioNaturezaDescricao",gxvar:"A1797ContaRateioNaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1797ContaRateioNaturezaDescricao=Value},v2z:function(Value){gx.O.Z1797ContaRateioNaturezaDescricao=Value},v2c:function(){gx.fn.setControlValue("CONTARATEIONATUREZADESCRICAO",gx.O.A1797ContaRateioNaturezaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1797ContaRateioNaturezaDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONTARATEIONATUREZADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contarateioccontabilempid,isvalid:null,rgrid:[],fld:"CONTARATEIOCCONTABILEMPID",gxz:"Z1798ContaRateioCContabilEmpId",gxold:"O1798ContaRateioCContabilEmpId",gxvar:"A1798ContaRateioCContabilEmpId",ucs:[],op:[],ip:[60],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1798ContaRateioCContabilEmpId=Value},v2z:function(Value){gx.O.Z1798ContaRateioCContabilEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTARATEIOCCONTABILEMPID",gx.O.A1798ContaRateioCContabilEmpId,0)},c2v:function(){gx.O.A1798ContaRateioCContabilEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTARATEIOCCONTABILEMPID")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contarateioccontabilid,isvalid:null,rgrid:[],fld:"CONTARATEIOCCONTABILID",gxz:"Z1799ContaRateioCContabilId",gxold:"O1799ContaRateioCContabilId",gxvar:"A1799ContaRateioCContabilId",ucs:[],op:[75,70],ip:[75,70,65,60],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1799ContaRateioCContabilId=Value},v2z:function(Value){gx.O.Z1799ContaRateioCContabilId=Value},v2c:function(){gx.fn.setControlValue("CONTARATEIOCCONTABILID",gx.O.A1799ContaRateioCContabilId,0)},c2v:function(){gx.O.A1799ContaRateioCContabilId=this.val()},val:function(){return gx.fn.getControlValue("CONTARATEIOCCONTABILID")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contarateioccontabilnome,isvalid:null,rgrid:[],fld:"CONTARATEIOCCONTABILNOME",gxz:"Z1800ContaRateioCContabilNome",gxold:"O1800ContaRateioCContabilNome",gxvar:"A1800ContaRateioCContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1800ContaRateioCContabilNome=Value},v2z:function(Value){gx.O.Z1800ContaRateioCContabilNome=Value},v2c:function(){gx.fn.setControlValue("CONTARATEIOCCONTABILNOME",gx.O.A1800ContaRateioCContabilNome,0)},c2v:function(){gx.O.A1800ContaRateioCContabilNome=this.val()},val:function(){return gx.fn.getControlValue("CONTARATEIOCCONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contarateioccontabiltradutor,isvalid:null,rgrid:[],fld:"CONTARATEIOCCONTABILTRADUTOR",gxz:"Z2071ContaRateioCContabilTradutor",gxold:"O2071ContaRateioCContabilTradutor",gxvar:"A2071ContaRateioCContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2071ContaRateioCContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2071ContaRateioCContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTARATEIOCCONTABILTRADUTOR",gx.O.A2071ContaRateioCContabilTradutor,0)},c2v:function(){gx.O.A2071ContaRateioCContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTARATEIOCCONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contarateiovalor,isvalid:null,rgrid:[],fld:"CONTARATEIOVALOR",gxz:"Z1811ContaRateioValor",gxold:"O1811ContaRateioValor",gxvar:"A1811ContaRateioValor",ucs:[],op:[],ip:[80],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1811ContaRateioValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1811ContaRateioValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CONTARATEIOVALOR",gx.O.A1811ContaRateioValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1811ContaRateioValor=this.val()},val:function(){return gx.fn.getDecimalValue("CONTARATEIOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTARATEIOUSUARIOALT",gxz:"Z1812ContaRateioUsuarioAlt",gxold:"O1812ContaRateioUsuarioAlt",gxvar:"A1812ContaRateioUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1812ContaRateioUsuarioAlt=Value},v2z:function(Value){gx.O.Z1812ContaRateioUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONTARATEIOUSUARIOALT",gx.O.A1812ContaRateioUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1812ContaRateioUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONTARATEIOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTARATEIODATAHORAALT",gxz:"Z1813ContaRateioDataHoraAlt",gxold:"O1813ContaRateioDataHoraAlt",gxvar:"A1813ContaRateioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1813ContaRateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1813ContaRateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTARATEIODATAHORAALT",gx.O.A1813ContaRateioDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1813ContaRateioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONTARATEIODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[91]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[101]={fld:"BTNHELP",grid:0};
   GXValidFnc[103]={fld:"PROMPT_1685_1686",grid:187};
   GXValidFnc[104]={fld:"PROMPT_1792_1793",grid:187};
   GXValidFnc[105]={fld:"PROMPT_1795_1796",grid:187};
   GXValidFnc[106]={fld:"PROMPT_1798_1799",grid:187};
   this.A1685ContaPagRecEmpresaId = "" ;
   this.Z1685ContaPagRecEmpresaId = "" ;
   this.O1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.A1810ContaRateioSequencia = 0 ;
   this.Z1810ContaRateioSequencia = 0 ;
   this.O1810ContaRateioSequencia = 0 ;
   this.A1792ContaRateioCCustoEmpId = "" ;
   this.Z1792ContaRateioCCustoEmpId = "" ;
   this.O1792ContaRateioCCustoEmpId = "" ;
   this.A1793ContaRateioCCustoId = "" ;
   this.Z1793ContaRateioCCustoId = "" ;
   this.O1793ContaRateioCCustoId = "" ;
   this.A1794ContaRateioCCustoDescricao = "" ;
   this.Z1794ContaRateioCCustoDescricao = "" ;
   this.O1794ContaRateioCCustoDescricao = "" ;
   this.A1795ContaRateioNaturezaEmpId = "" ;
   this.Z1795ContaRateioNaturezaEmpId = "" ;
   this.O1795ContaRateioNaturezaEmpId = "" ;
   this.A1796ContaRateioNaturezaId = "" ;
   this.Z1796ContaRateioNaturezaId = "" ;
   this.O1796ContaRateioNaturezaId = "" ;
   this.A1797ContaRateioNaturezaDescricao = "" ;
   this.Z1797ContaRateioNaturezaDescricao = "" ;
   this.O1797ContaRateioNaturezaDescricao = "" ;
   this.A1798ContaRateioCContabilEmpId = "" ;
   this.Z1798ContaRateioCContabilEmpId = "" ;
   this.O1798ContaRateioCContabilEmpId = "" ;
   this.A1799ContaRateioCContabilId = "" ;
   this.Z1799ContaRateioCContabilId = "" ;
   this.O1799ContaRateioCContabilId = "" ;
   this.A1800ContaRateioCContabilNome = "" ;
   this.Z1800ContaRateioCContabilNome = "" ;
   this.O1800ContaRateioCContabilNome = "" ;
   this.A2071ContaRateioCContabilTradutor = 0 ;
   this.Z2071ContaRateioCContabilTradutor = 0 ;
   this.O2071ContaRateioCContabilTradutor = 0 ;
   this.A1811ContaRateioValor = 0 ;
   this.Z1811ContaRateioValor = 0 ;
   this.O1811ContaRateioValor = 0 ;
   this.A1812ContaRateioUsuarioAlt = "" ;
   this.Z1812ContaRateioUsuarioAlt = "" ;
   this.O1812ContaRateioUsuarioAlt = "" ;
   this.A1813ContaRateioDataHoraAlt = gx.date.nullDate() ;
   this.Z1813ContaRateioDataHoraAlt = gx.date.nullDate() ;
   this.O1813ContaRateioDataHoraAlt = gx.date.nullDate() ;
   this.AV8Logon = {} ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1810ContaRateioSequencia = 0 ;
   this.AV19LogContaPagRecEmpresaId = "" ;
   this.AV20LogContaPagRecNumero = 0 ;
   this.AV21LogContaRateioSequencia = 0 ;
   this.A1792ContaRateioCCustoEmpId = "" ;
   this.A1793ContaRateioCCustoId = "" ;
   this.A1794ContaRateioCCustoDescricao = "" ;
   this.A1795ContaRateioNaturezaEmpId = "" ;
   this.A1796ContaRateioNaturezaId = "" ;
   this.A1797ContaRateioNaturezaDescricao = "" ;
   this.A1798ContaRateioCContabilEmpId = "" ;
   this.A1799ContaRateioCContabilId = "" ;
   this.A1800ContaRateioCContabilNome = "" ;
   this.A2071ContaRateioCContabilTradutor = 0 ;
   this.A1811ContaRateioValor = 0 ;
   this.A1812ContaRateioUsuarioAlt = "" ;
   this.A1813ContaRateioDataHoraAlt = gx.date.nullDate() ;
   this.AV18lContaRateios = {} ;
   this.AV22LogUsuario = "" ;
   this.Events = {"e123h187_client": ["ENTER", true] ,"e133h187_client": ["CANCEL", true] ,"e113h187_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_1685_1686", [14,19]);
   this.setPrompt("PROMPT_1792_1793", [30,35]);
   this.setPrompt("PROMPT_1795_1796", [45,50]);
   this.setPrompt("PROMPT_1798_1799", [60,65]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19LogContaPagRecEmpresaId", "vLOGCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV20LogContaPagRecNumero", "vLOGCONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV21LogContaRateioSequencia", "vLOGCONTARATEIOSEQUENCIA", 0, "int");
   this.setVCMap("AV18lContaRateios", "vLCONTARATEIOS", 0, "lContaRateios");
   this.setVCMap("AV22LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 187 ]= ["O1811ContaRateioValor","O1799ContaRateioCContabilId","O2071ContaRateioCContabilTradutor","O1800ContaRateioCContabilNome","O1798ContaRateioCContabilEmpId","O1796ContaRateioNaturezaId","O1797ContaRateioNaturezaDescricao","O1795ContaRateioNaturezaEmpId","O1793ContaRateioCCustoId","O1794ContaRateioCCustoDescricao","O1792ContaRateioCCustoEmpId"] ;
});
gx.setParentObj(new tcontarateio());
