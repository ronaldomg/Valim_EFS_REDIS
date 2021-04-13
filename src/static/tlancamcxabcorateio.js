/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:7:59.57
*/
gx.evt.autoSkip = false;
gx.define('tlancamcxabcorateio', false, function () {
   this.ServerClass =  "tlancamcxabcorateio" ;
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
      this.AV19LogLancamentoCxaBcoEmpresaid=gx.fn.getControlValue("vLOGLANCAMENTOCXABCOEMPRESAID") ;
      this.AV20LogLancamentoCxaBcoNumero=gx.fn.getIntegerValue("vLOGLANCAMENTOCXABCONUMERO",'.') ;
      this.AV21LogLancamCxaBcoRateioSequencia=gx.fn.getIntegerValue("vLOGLANCAMCXABCORATEIOSEQUENCIA",'.') ;
      this.AV18lLancamCxaBcoRateios=gx.fn.getControlValue("vLLANCAMCXABCORATEIOS") ;
      this.AV22LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Lancamentocxabcoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMENTOCXABCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamentocxabconumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamentocxabconumero",["gx.O.A1928LancamentoCxaBcoEmpresaid", "gx.O.A1929LancamentoCxaBcoNumero"],[]);
      return true;
   }
   this.Valid_Lancamcxabcorateiosequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamcxabcorateiosequencia",["gx.O.A1928LancamentoCxaBcoEmpresaid", "gx.O.A1929LancamentoCxaBcoNumero", "gx.O.A1960LancamCxaBcoRateioSequencia", "gx.num.urlDecimal(gx.O.A1961LancamCxaBcoRateioValor,\'.\',\',\')", "gx.O.A1962LancamCxaBcoRateioUsuarioAlt", 'gx.date.urlDateTime(gx.O.A1963LancamCxaBcoRateioDataHoraAlt,"DMY4")', "gx.O.A1951LancamCxaBcoRateioCCustoEmpId", "gx.O.A1952LancamCxaBcoRateioCCustoId", "gx.O.A1954LancamCxaBcoRateioNaturezaEmpI", "gx.O.A1955LancamCxaBcoRateioNaturezaId", "gx.O.A1957LancamCxaBcoRateioCContabilEmp", "gx.O.A1958LancamCxaBcoRateioCContabilId"],["A1951LancamCxaBcoRateioCCustoEmpId", "A1952LancamCxaBcoRateioCCustoId", "A1954LancamCxaBcoRateioNaturezaEmpI", "A1955LancamCxaBcoRateioNaturezaId", "A1957LancamCxaBcoRateioCContabilEmp", "A1958LancamCxaBcoRateioCContabilId", "A1961LancamCxaBcoRateioValor", "A1962LancamCxaBcoRateioUsuarioAlt", "A1963LancamCxaBcoRateioDataHoraAlt", "A1953LancamCxaBcoRateioCCustoDesc", "A1956LancamCxaBcoRateioNaturezaDesc", "A1959LancamCxaBcoRateioCContabilNom", "Gx_mode", "Z1928LancamentoCxaBcoEmpresaid", "Z1929LancamentoCxaBcoNumero", "Z1960LancamCxaBcoRateioSequencia", "Z1951LancamCxaBcoRateioCCustoEmpId", "Z1952LancamCxaBcoRateioCCustoId", "Z1954LancamCxaBcoRateioNaturezaEmpI", "Z1955LancamCxaBcoRateioNaturezaId", "Z1957LancamCxaBcoRateioCContabilEmp", "Z1958LancamCxaBcoRateioCContabilId", "Z1961LancamCxaBcoRateioValor", "Z1962LancamCxaBcoRateioUsuarioAlt", "Z1963LancamCxaBcoRateioDataHoraAlt", "Z1953LancamCxaBcoRateioCCustoDesc", "Z1956LancamCxaBcoRateioNaturezaDesc", "Z1959LancamCxaBcoRateioCContabilNom", "O1961LancamCxaBcoRateioValor", "O1958LancamCxaBcoRateioCContabilId", "O1959LancamCxaBcoRateioCContabilNom", "O1957LancamCxaBcoRateioCContabilEmp", "O1955LancamCxaBcoRateioNaturezaId", "O1956LancamCxaBcoRateioNaturezaDesc", "O1954LancamCxaBcoRateioNaturezaEmpI", "O1952LancamCxaBcoRateioCCustoId", "O1953LancamCxaBcoRateioCCustoDesc", "O1951LancamCxaBcoRateioCCustoEmpId", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Lancamcxabcorateioccustoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMCXABCORATEIOCCUSTOEMPID");
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
   this.Valid_Lancamcxabcorateioccustoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamcxabcorateioccustoid",["gx.O.Gx_mode", "gx.O.O1952LancamCxaBcoRateioCCustoId", "gx.O.O1953LancamCxaBcoRateioCCustoDesc", "gx.O.A1951LancamCxaBcoRateioCCustoEmpId", "gx.O.A1952LancamCxaBcoRateioCCustoId", "gx.O.A1953LancamCxaBcoRateioCCustoDesc"],["O1953LancamCxaBcoRateioCCustoDesc", "A1953LancamCxaBcoRateioCCustoDesc", ["AV18lLancamCxaBcoRateios","Alancamcxabcorateioccustodesc"], ["AV18lLancamCxaBcoRateios","Alancamcxabcorateioccustoid"]]);
      return true;
   }
   this.Valid_Lancamcxabcorateioccustodesc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMCXABCORATEIOCCUSTODESC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamcxabcorateionaturezaempi=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMCXABCORATEIONATUREZAEMPI");
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
   this.Valid_Lancamcxabcorateionaturezaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamcxabcorateionaturezaid",["gx.O.Gx_mode", "gx.O.O1955LancamCxaBcoRateioNaturezaId", "gx.O.O1956LancamCxaBcoRateioNaturezaDesc", "gx.O.A1954LancamCxaBcoRateioNaturezaEmpI", "gx.O.A1955LancamCxaBcoRateioNaturezaId", "gx.O.A1956LancamCxaBcoRateioNaturezaDesc"],["O1956LancamCxaBcoRateioNaturezaDesc", "A1956LancamCxaBcoRateioNaturezaDesc", ["AV18lLancamCxaBcoRateios","Alancamcxabcorateionaturezadesc"], ["AV18lLancamCxaBcoRateios","Alancamcxabcorateionaturezaid"]]);
      return true;
   }
   this.Valid_Lancamcxabcorateionaturezadesc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMCXABCORATEIONATUREZADESC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamcxabcorateioccontabilemp=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMCXABCORATEIOCCONTABILEMP");
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
   this.Valid_Lancamcxabcorateioccontabilid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lancamcxabcorateioccontabilid",["gx.O.Gx_mode", "gx.O.O1958LancamCxaBcoRateioCContabilId", "gx.O.O1959LancamCxaBcoRateioCContabilNom", "gx.O.A1957LancamCxaBcoRateioCContabilEmp", "gx.O.A1958LancamCxaBcoRateioCContabilId", "gx.O.A1959LancamCxaBcoRateioCContabilNom"],["O1959LancamCxaBcoRateioCContabilNom", "A1959LancamCxaBcoRateioCContabilNom", ["AV18lLancamCxaBcoRateios","Alancamcxabcorateioccontabilnome"], ["AV18lLancamCxaBcoRateios","Alancamcxabcorateioccontabilid"]]);
      return true;
   }
   this.Valid_Lancamcxabcorateioccontabilnom=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMCXABCORATEIOCCONTABILNOM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lancamcxabcorateiovalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LANCAMCXABCORATEIOVALOR");
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
   this.e113o196_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e123o196_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e133o196_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,86,96,98,99,100,101];
   this.GXLastCtrlId =101;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocxabcoempresaid,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOEMPRESAID",gxz:"Z1928LancamentoCxaBcoEmpresaid",gxold:"O1928LancamentoCxaBcoEmpresaid",gxvar:"A1928LancamentoCxaBcoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1928LancamentoCxaBcoEmpresaid=Value},v2z:function(Value){gx.O.Z1928LancamentoCxaBcoEmpresaid=Value},v2c:function(){gx.fn.setControlValue("LANCAMENTOCXABCOEMPRESAID",gx.O.A1928LancamentoCxaBcoEmpresaid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1928LancamentoCxaBcoEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("LANCAMENTOCXABCOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamentocxabconumero,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCONUMERO",gxz:"Z1929LancamentoCxaBcoNumero",gxold:"O1929LancamentoCxaBcoNumero",gxvar:"A1929LancamentoCxaBcoNumero",ucs:[],op:[],ip:[19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1929LancamentoCxaBcoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1929LancamentoCxaBcoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMENTOCXABCONUMERO",gx.O.A1929LancamentoCxaBcoNumero,0)},c2v:function(){gx.O.A1929LancamentoCxaBcoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMENTOCXABCONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcorateiosequencia,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIOSEQUENCIA",gxz:"Z1960LancamCxaBcoRateioSequencia",gxold:"O1960LancamCxaBcoRateioSequencia",gxvar:"A1960LancamCxaBcoRateioSequencia",ucs:[],op:[65,60,50,45,35,30,85,80,75],ip:[65,60,50,45,35,30,85,80,75,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1960LancamCxaBcoRateioSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1960LancamCxaBcoRateioSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LANCAMCXABCORATEIOSEQUENCIA",gx.O.A1960LancamCxaBcoRateioSequencia,0)},c2v:function(){gx.O.A1960LancamCxaBcoRateioSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LANCAMCXABCORATEIOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcorateioccustoempid,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIOCCUSTOEMPID",gxz:"Z1951LancamCxaBcoRateioCCustoEmpId",gxold:"O1951LancamCxaBcoRateioCCustoEmpId",gxvar:"A1951LancamCxaBcoRateioCCustoEmpId",ucs:[],op:[],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1951LancamCxaBcoRateioCCustoEmpId=Value},v2z:function(Value){gx.O.Z1951LancamCxaBcoRateioCCustoEmpId=Value},v2c:function(){gx.fn.setControlValue("LANCAMCXABCORATEIOCCUSTOEMPID",gx.O.A1951LancamCxaBcoRateioCCustoEmpId,0)},c2v:function(){gx.O.A1951LancamCxaBcoRateioCCustoEmpId=this.val()},val:function(){return gx.fn.getControlValue("LANCAMCXABCORATEIOCCUSTOEMPID")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcorateioccustoid,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIOCCUSTOID",gxz:"Z1952LancamCxaBcoRateioCCustoId",gxold:"O1952LancamCxaBcoRateioCCustoId",gxvar:"A1952LancamCxaBcoRateioCCustoId",ucs:[],op:[40],ip:[40,35,30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1952LancamCxaBcoRateioCCustoId=Value},v2z:function(Value){gx.O.Z1952LancamCxaBcoRateioCCustoId=Value},v2c:function(){gx.fn.setControlValue("LANCAMCXABCORATEIOCCUSTOID",gx.O.A1952LancamCxaBcoRateioCCustoId,0)},c2v:function(){gx.O.A1952LancamCxaBcoRateioCCustoId=this.val()},val:function(){return gx.fn.getControlValue("LANCAMCXABCORATEIOCCUSTOID")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcorateioccustodesc,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIOCCUSTODESC",gxz:"Z1953LancamCxaBcoRateioCCustoDesc",gxold:"O1953LancamCxaBcoRateioCCustoDesc",gxvar:"A1953LancamCxaBcoRateioCCustoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1953LancamCxaBcoRateioCCustoDesc=Value},v2z:function(Value){gx.O.Z1953LancamCxaBcoRateioCCustoDesc=Value},v2c:function(){gx.fn.setControlValue("LANCAMCXABCORATEIOCCUSTODESC",gx.O.A1953LancamCxaBcoRateioCCustoDesc,0)},c2v:function(){gx.O.A1953LancamCxaBcoRateioCCustoDesc=this.val()},val:function(){return gx.fn.getControlValue("LANCAMCXABCORATEIOCCUSTODESC")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcorateionaturezaempi,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIONATUREZAEMPI",gxz:"Z1954LancamCxaBcoRateioNaturezaEmpI",gxold:"O1954LancamCxaBcoRateioNaturezaEmpI",gxvar:"A1954LancamCxaBcoRateioNaturezaEmpI",ucs:[],op:[],ip:[45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1954LancamCxaBcoRateioNaturezaEmpI=Value},v2z:function(Value){gx.O.Z1954LancamCxaBcoRateioNaturezaEmpI=Value},v2c:function(){gx.fn.setControlValue("LANCAMCXABCORATEIONATUREZAEMPI",gx.O.A1954LancamCxaBcoRateioNaturezaEmpI,0)},c2v:function(){gx.O.A1954LancamCxaBcoRateioNaturezaEmpI=this.val()},val:function(){return gx.fn.getControlValue("LANCAMCXABCORATEIONATUREZAEMPI")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcorateionaturezaid,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIONATUREZAID",gxz:"Z1955LancamCxaBcoRateioNaturezaId",gxold:"O1955LancamCxaBcoRateioNaturezaId",gxvar:"A1955LancamCxaBcoRateioNaturezaId",ucs:[],op:[55],ip:[55,50,45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1955LancamCxaBcoRateioNaturezaId=Value},v2z:function(Value){gx.O.Z1955LancamCxaBcoRateioNaturezaId=Value},v2c:function(){gx.fn.setControlValue("LANCAMCXABCORATEIONATUREZAID",gx.O.A1955LancamCxaBcoRateioNaturezaId,0)},c2v:function(){gx.O.A1955LancamCxaBcoRateioNaturezaId=this.val()},val:function(){return gx.fn.getControlValue("LANCAMCXABCORATEIONATUREZAID")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcorateionaturezadesc,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIONATUREZADESC",gxz:"Z1956LancamCxaBcoRateioNaturezaDesc",gxold:"O1956LancamCxaBcoRateioNaturezaDesc",gxvar:"A1956LancamCxaBcoRateioNaturezaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1956LancamCxaBcoRateioNaturezaDesc=Value},v2z:function(Value){gx.O.Z1956LancamCxaBcoRateioNaturezaDesc=Value},v2c:function(){gx.fn.setControlValue("LANCAMCXABCORATEIONATUREZADESC",gx.O.A1956LancamCxaBcoRateioNaturezaDesc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1956LancamCxaBcoRateioNaturezaDesc=this.val()},val:function(){return gx.fn.getControlValue("LANCAMCXABCORATEIONATUREZADESC")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcorateioccontabilemp,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIOCCONTABILEMP",gxz:"Z1957LancamCxaBcoRateioCContabilEmp",gxold:"O1957LancamCxaBcoRateioCContabilEmp",gxvar:"A1957LancamCxaBcoRateioCContabilEmp",ucs:[],op:[],ip:[60],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1957LancamCxaBcoRateioCContabilEmp=Value},v2z:function(Value){gx.O.Z1957LancamCxaBcoRateioCContabilEmp=Value},v2c:function(){gx.fn.setControlValue("LANCAMCXABCORATEIOCCONTABILEMP",gx.O.A1957LancamCxaBcoRateioCContabilEmp,0)},c2v:function(){gx.O.A1957LancamCxaBcoRateioCContabilEmp=this.val()},val:function(){return gx.fn.getControlValue("LANCAMCXABCORATEIOCCONTABILEMP")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcorateioccontabilid,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIOCCONTABILID",gxz:"Z1958LancamCxaBcoRateioCContabilId",gxold:"O1958LancamCxaBcoRateioCContabilId",gxvar:"A1958LancamCxaBcoRateioCContabilId",ucs:[],op:[70],ip:[70,65,60],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1958LancamCxaBcoRateioCContabilId=Value},v2z:function(Value){gx.O.Z1958LancamCxaBcoRateioCContabilId=Value},v2c:function(){gx.fn.setControlValue("LANCAMCXABCORATEIOCCONTABILID",gx.O.A1958LancamCxaBcoRateioCContabilId,0)},c2v:function(){gx.O.A1958LancamCxaBcoRateioCContabilId=this.val()},val:function(){return gx.fn.getControlValue("LANCAMCXABCORATEIOCCONTABILID")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcorateioccontabilnom,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIOCCONTABILNOM",gxz:"Z1959LancamCxaBcoRateioCContabilNom",gxold:"O1959LancamCxaBcoRateioCContabilNom",gxvar:"A1959LancamCxaBcoRateioCContabilNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1959LancamCxaBcoRateioCContabilNom=Value},v2z:function(Value){gx.O.Z1959LancamCxaBcoRateioCContabilNom=Value},v2c:function(){gx.fn.setControlValue("LANCAMCXABCORATEIOCCONTABILNOM",gx.O.A1959LancamCxaBcoRateioCContabilNom,0)},c2v:function(){gx.O.A1959LancamCxaBcoRateioCContabilNom=this.val()},val:function(){return gx.fn.getControlValue("LANCAMCXABCORATEIOCCONTABILNOM")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lancamcxabcorateiovalor,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIOVALOR",gxz:"Z1961LancamCxaBcoRateioValor",gxold:"O1961LancamCxaBcoRateioValor",gxvar:"A1961LancamCxaBcoRateioValor",ucs:[],op:[],ip:[75],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1961LancamCxaBcoRateioValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1961LancamCxaBcoRateioValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LANCAMCXABCORATEIOVALOR",gx.O.A1961LancamCxaBcoRateioValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1961LancamCxaBcoRateioValor=this.val()},val:function(){return gx.fn.getDecimalValue("LANCAMCXABCORATEIOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIOUSUARIOALT",gxz:"Z1962LancamCxaBcoRateioUsuarioAlt",gxold:"O1962LancamCxaBcoRateioUsuarioAlt",gxvar:"A1962LancamCxaBcoRateioUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1962LancamCxaBcoRateioUsuarioAlt=Value},v2z:function(Value){gx.O.Z1962LancamCxaBcoRateioUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("LANCAMCXABCORATEIOUSUARIOALT",gx.O.A1962LancamCxaBcoRateioUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1962LancamCxaBcoRateioUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("LANCAMCXABCORATEIOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMCXABCORATEIODATAHORAALT",gxz:"Z1963LancamCxaBcoRateioDataHoraAlt",gxold:"O1963LancamCxaBcoRateioDataHoraAlt",gxvar:"A1963LancamCxaBcoRateioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1963LancamCxaBcoRateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1963LancamCxaBcoRateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LANCAMCXABCORATEIODATAHORAALT",gx.O.A1963LancamCxaBcoRateioDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1963LancamCxaBcoRateioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LANCAMCXABCORATEIODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[86]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[96]={fld:"BTNHELP",grid:0};
   GXValidFnc[98]={fld:"PROMPT_1928_1929",grid:196};
   GXValidFnc[99]={fld:"PROMPT_1951_1952",grid:196};
   GXValidFnc[100]={fld:"PROMPT_1954_1955",grid:196};
   GXValidFnc[101]={fld:"PROMPT_1957_1958",grid:196};
   this.A1928LancamentoCxaBcoEmpresaid = "" ;
   this.Z1928LancamentoCxaBcoEmpresaid = "" ;
   this.O1928LancamentoCxaBcoEmpresaid = "" ;
   this.A1929LancamentoCxaBcoNumero = 0 ;
   this.Z1929LancamentoCxaBcoNumero = 0 ;
   this.O1929LancamentoCxaBcoNumero = 0 ;
   this.A1960LancamCxaBcoRateioSequencia = 0 ;
   this.Z1960LancamCxaBcoRateioSequencia = 0 ;
   this.O1960LancamCxaBcoRateioSequencia = 0 ;
   this.A1951LancamCxaBcoRateioCCustoEmpId = "" ;
   this.Z1951LancamCxaBcoRateioCCustoEmpId = "" ;
   this.O1951LancamCxaBcoRateioCCustoEmpId = "" ;
   this.A1952LancamCxaBcoRateioCCustoId = "" ;
   this.Z1952LancamCxaBcoRateioCCustoId = "" ;
   this.O1952LancamCxaBcoRateioCCustoId = "" ;
   this.A1953LancamCxaBcoRateioCCustoDesc = "" ;
   this.Z1953LancamCxaBcoRateioCCustoDesc = "" ;
   this.O1953LancamCxaBcoRateioCCustoDesc = "" ;
   this.A1954LancamCxaBcoRateioNaturezaEmpI = "" ;
   this.Z1954LancamCxaBcoRateioNaturezaEmpI = "" ;
   this.O1954LancamCxaBcoRateioNaturezaEmpI = "" ;
   this.A1955LancamCxaBcoRateioNaturezaId = "" ;
   this.Z1955LancamCxaBcoRateioNaturezaId = "" ;
   this.O1955LancamCxaBcoRateioNaturezaId = "" ;
   this.A1956LancamCxaBcoRateioNaturezaDesc = "" ;
   this.Z1956LancamCxaBcoRateioNaturezaDesc = "" ;
   this.O1956LancamCxaBcoRateioNaturezaDesc = "" ;
   this.A1957LancamCxaBcoRateioCContabilEmp = "" ;
   this.Z1957LancamCxaBcoRateioCContabilEmp = "" ;
   this.O1957LancamCxaBcoRateioCContabilEmp = "" ;
   this.A1958LancamCxaBcoRateioCContabilId = "" ;
   this.Z1958LancamCxaBcoRateioCContabilId = "" ;
   this.O1958LancamCxaBcoRateioCContabilId = "" ;
   this.A1959LancamCxaBcoRateioCContabilNom = "" ;
   this.Z1959LancamCxaBcoRateioCContabilNom = "" ;
   this.O1959LancamCxaBcoRateioCContabilNom = "" ;
   this.A1961LancamCxaBcoRateioValor = 0 ;
   this.Z1961LancamCxaBcoRateioValor = 0 ;
   this.O1961LancamCxaBcoRateioValor = 0 ;
   this.A1962LancamCxaBcoRateioUsuarioAlt = "" ;
   this.Z1962LancamCxaBcoRateioUsuarioAlt = "" ;
   this.O1962LancamCxaBcoRateioUsuarioAlt = "" ;
   this.A1963LancamCxaBcoRateioDataHoraAlt = gx.date.nullDate() ;
   this.Z1963LancamCxaBcoRateioDataHoraAlt = gx.date.nullDate() ;
   this.O1963LancamCxaBcoRateioDataHoraAlt = gx.date.nullDate() ;
   this.AV8Logon = {} ;
   this.A1928LancamentoCxaBcoEmpresaid = "" ;
   this.A1929LancamentoCxaBcoNumero = 0 ;
   this.A1960LancamCxaBcoRateioSequencia = 0 ;
   this.AV19LogLancamentoCxaBcoEmpresaid = "" ;
   this.AV20LogLancamentoCxaBcoNumero = 0 ;
   this.AV21LogLancamCxaBcoRateioSequencia = 0 ;
   this.A1951LancamCxaBcoRateioCCustoEmpId = "" ;
   this.A1952LancamCxaBcoRateioCCustoId = "" ;
   this.A1953LancamCxaBcoRateioCCustoDesc = "" ;
   this.A1954LancamCxaBcoRateioNaturezaEmpI = "" ;
   this.A1955LancamCxaBcoRateioNaturezaId = "" ;
   this.A1956LancamCxaBcoRateioNaturezaDesc = "" ;
   this.A1957LancamCxaBcoRateioCContabilEmp = "" ;
   this.A1958LancamCxaBcoRateioCContabilId = "" ;
   this.A1959LancamCxaBcoRateioCContabilNom = "" ;
   this.A1961LancamCxaBcoRateioValor = 0 ;
   this.A1962LancamCxaBcoRateioUsuarioAlt = "" ;
   this.A1963LancamCxaBcoRateioDataHoraAlt = gx.date.nullDate() ;
   this.AV18lLancamCxaBcoRateios = {} ;
   this.AV22LogUsuario = "" ;
   this.Events = {"e123o196_client": ["ENTER", true] ,"e133o196_client": ["CANCEL", true] ,"e113o196_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_1928_1929", [14,19]);
   this.setPrompt("PROMPT_1951_1952", [30,35]);
   this.setPrompt("PROMPT_1954_1955", [45,50]);
   this.setPrompt("PROMPT_1957_1958", [60,65]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19LogLancamentoCxaBcoEmpresaid", "vLOGLANCAMENTOCXABCOEMPRESAID", 0, "char");
   this.setVCMap("AV20LogLancamentoCxaBcoNumero", "vLOGLANCAMENTOCXABCONUMERO", 0, "int");
   this.setVCMap("AV21LogLancamCxaBcoRateioSequencia", "vLOGLANCAMCXABCORATEIOSEQUENCIA", 0, "int");
   this.setVCMap("AV18lLancamCxaBcoRateios", "vLLANCAMCXABCORATEIOS", 0, "lLancamCxaBcoRateios");
   this.setVCMap("AV22LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 196 ]= ["O1961LancamCxaBcoRateioValor","O1958LancamCxaBcoRateioCContabilId","O1959LancamCxaBcoRateioCContabilNom","O1957LancamCxaBcoRateioCContabilEmp","O1955LancamCxaBcoRateioNaturezaId","O1956LancamCxaBcoRateioNaturezaDesc","O1954LancamCxaBcoRateioNaturezaEmpI","O1952LancamCxaBcoRateioCCustoId","O1953LancamCxaBcoRateioCCustoDesc","O1951LancamCxaBcoRateioCCustoEmpId"] ;
});
gx.setParentObj(new tlancamcxabcorateio());
