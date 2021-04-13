/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:32.56
*/
gx.evt.autoSkip = false;
gx.define('tcbd001detarma', false, function () {
   this.ServerClass =  "tcbd001detarma" ;
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
   this.Valid_Cbd001detarmacbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETARMACBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detarmacbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETARMACBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detarmacbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETARMACBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detarmacbdnitem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETARMACBDNITEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detarmacbdnserie_arma=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001detarmacbdnserie_arma",["gx.O.A7042CBD001DETARMACbdEmpCodigo", "gx.O.A7047CBD001DETARMACbdNtfSerie", "gx.O.A7046CBD001DETARMACbdNtfNumero", "gx.O.A7044CBD001DETARMACbdnItem", "gx.O.A7045CBD001DETARMACbdnSerie_arma", "gx.O.A7048CBD001DETARMACbdtpArma", "gx.O.A7043CBD001DETARMACbdnCano", "gx.O.A7041CBD001DETARMACbddescr"],["A7048CBD001DETARMACbdtpArma", "A7043CBD001DETARMACbdnCano", "A7041CBD001DETARMACbddescr", "Gx_mode", "Z7042CBD001DETARMACbdEmpCodigo", "Z7047CBD001DETARMACbdNtfSerie", "Z7046CBD001DETARMACbdNtfNumero", "Z7044CBD001DETARMACbdnItem", "Z7045CBD001DETARMACbdnSerie_arma", "Z7048CBD001DETARMACbdtpArma", "Z7043CBD001DETARMACbdnCano", "Z7041CBD001DETARMACbddescr", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11ac552_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ac552_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,44,46,49,51,54,56];
   this.GXLastCtrlId =56;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detarmacbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDEMPCODIGO",gxz:"Z7042CBD001DETARMACbdEmpCodigo",gxold:"O7042CBD001DETARMACbdEmpCodigo",gxvar:"A7042CBD001DETARMACbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7042CBD001DETARMACbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7042CBD001DETARMACbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETARMACBDEMPCODIGO",gx.O.A7042CBD001DETARMACbdEmpCodigo,0)},c2v:function(){gx.O.A7042CBD001DETARMACbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETARMACBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detarmacbdntfserie,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDNTFSERIE",gxz:"Z7047CBD001DETARMACbdNtfSerie",gxold:"O7047CBD001DETARMACbdNtfSerie",gxvar:"A7047CBD001DETARMACbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7047CBD001DETARMACbdNtfSerie=Value},v2z:function(Value){gx.O.Z7047CBD001DETARMACbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001DETARMACBDNTFSERIE",gx.O.A7047CBD001DETARMACbdNtfSerie,0)},c2v:function(){gx.O.A7047CBD001DETARMACbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETARMACBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detarmacbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDNTFNUMERO",gxz:"Z7046CBD001DETARMACbdNtfNumero",gxold:"O7046CBD001DETARMACbdNtfNumero",gxvar:"A7046CBD001DETARMACbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7046CBD001DETARMACbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7046CBD001DETARMACbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETARMACBDNTFNUMERO",gx.O.A7046CBD001DETARMACbdNtfNumero,0)},c2v:function(){gx.O.A7046CBD001DETARMACbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETARMACBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detarmacbdnitem,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDNITEM",gxz:"Z7044CBD001DETARMACbdnItem",gxold:"O7044CBD001DETARMACbdnItem",gxvar:"A7044CBD001DETARMACbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7044CBD001DETARMACbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7044CBD001DETARMACbdnItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETARMACBDNITEM",gx.O.A7044CBD001DETARMACbdnItem,0)},c2v:function(){gx.O.A7044CBD001DETARMACbdnItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETARMACBDNITEM",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detarmacbdnserie_arma,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDNSERIE_ARMA",gxz:"Z7045CBD001DETARMACbdnSerie_arma",gxold:"O7045CBD001DETARMACbdnSerie_arma",gxvar:"A7045CBD001DETARMACbdnSerie_arma",ucs:[],op:[56,51,46],ip:[56,51,46,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7045CBD001DETARMACbdnSerie_arma=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7045CBD001DETARMACbdnSerie_arma=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETARMACBDNSERIE_ARMA",gx.O.A7045CBD001DETARMACbdnSerie_arma,0)},c2v:function(){gx.O.A7045CBD001DETARMACbdnSerie_arma=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETARMACBDNSERIE_ARMA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDTPARMA",gxz:"Z7048CBD001DETARMACbdtpArma",gxold:"O7048CBD001DETARMACbdtpArma",gxvar:"A7048CBD001DETARMACbdtpArma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7048CBD001DETARMACbdtpArma=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7048CBD001DETARMACbdtpArma=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETARMACBDTPARMA",gx.O.A7048CBD001DETARMACbdtpArma,0)},c2v:function(){gx.O.A7048CBD001DETARMACbdtpArma=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETARMACBDTPARMA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDNCANO",gxz:"Z7043CBD001DETARMACbdnCano",gxold:"O7043CBD001DETARMACbdnCano",gxvar:"A7043CBD001DETARMACbdnCano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7043CBD001DETARMACbdnCano=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7043CBD001DETARMACbdnCano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETARMACBDNCANO",gx.O.A7043CBD001DETARMACbdnCano,0)},c2v:function(){gx.O.A7043CBD001DETARMACbdnCano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETARMACBDNCANO",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:256,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDDESCR",gxz:"Z7041CBD001DETARMACbddescr",gxold:"O7041CBD001DETARMACbddescr",gxvar:"A7041CBD001DETARMACbddescr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7041CBD001DETARMACbddescr=Value},v2z:function(Value){gx.O.Z7041CBD001DETARMACbddescr=Value},v2c:function(){gx.fn.setControlValue("CBD001DETARMACBDDESCR",gx.O.A7041CBD001DETARMACbddescr,0)},c2v:function(){gx.O.A7041CBD001DETARMACbddescr=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETARMACBDDESCR")},nac:gx.falseFn};
   this.A7042CBD001DETARMACbdEmpCodigo = 0 ;
   this.Z7042CBD001DETARMACbdEmpCodigo = 0 ;
   this.O7042CBD001DETARMACbdEmpCodigo = 0 ;
   this.A7047CBD001DETARMACbdNtfSerie = "" ;
   this.Z7047CBD001DETARMACbdNtfSerie = "" ;
   this.O7047CBD001DETARMACbdNtfSerie = "" ;
   this.A7046CBD001DETARMACbdNtfNumero = 0 ;
   this.Z7046CBD001DETARMACbdNtfNumero = 0 ;
   this.O7046CBD001DETARMACbdNtfNumero = 0 ;
   this.A7044CBD001DETARMACbdnItem = 0 ;
   this.Z7044CBD001DETARMACbdnItem = 0 ;
   this.O7044CBD001DETARMACbdnItem = 0 ;
   this.A7045CBD001DETARMACbdnSerie_arma = 0 ;
   this.Z7045CBD001DETARMACbdnSerie_arma = 0 ;
   this.O7045CBD001DETARMACbdnSerie_arma = 0 ;
   this.A7048CBD001DETARMACbdtpArma = 0 ;
   this.Z7048CBD001DETARMACbdtpArma = 0 ;
   this.O7048CBD001DETARMACbdtpArma = 0 ;
   this.A7043CBD001DETARMACbdnCano = 0 ;
   this.Z7043CBD001DETARMACbdnCano = 0 ;
   this.O7043CBD001DETARMACbdnCano = 0 ;
   this.A7041CBD001DETARMACbddescr = "" ;
   this.Z7041CBD001DETARMACbddescr = "" ;
   this.O7041CBD001DETARMACbddescr = "" ;
   this.A7042CBD001DETARMACbdEmpCodigo = 0 ;
   this.A7047CBD001DETARMACbdNtfSerie = "" ;
   this.A7046CBD001DETARMACbdNtfNumero = 0 ;
   this.A7044CBD001DETARMACbdnItem = 0 ;
   this.A7045CBD001DETARMACbdnSerie_arma = 0 ;
   this.A7048CBD001DETARMACbdtpArma = 0 ;
   this.A7043CBD001DETARMACbdnCano = 0 ;
   this.A7041CBD001DETARMACbddescr = "" ;
   this.Events = {"e11ac552_client": ["ENTER", true] ,"e12ac552_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001detarma());
