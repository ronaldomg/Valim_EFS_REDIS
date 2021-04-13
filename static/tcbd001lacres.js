/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:13.33
*/
gx.evt.autoSkip = false;
gx.define('tcbd001lacres', false, function () {
   this.ServerClass =  "tcbd001lacres" ;
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
   this.Valid_Cbd001lacrescbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001LACRESCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001lacrescbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001LACRESCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001lacrescbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001LACRESCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001lacrescbdnvol=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001LACRESCBDNVOL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001lacrescbdnlacre=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001LACRESCBDNLACRE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001lacrescbdseqvol=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001lacrescbdseqvol",["gx.O.A7130CBD001LACRESCbdEmpCodigo", "gx.O.A7133CBD001LACRESCbdNtfSerie", "gx.O.A7132CBD001LACRESCbdNtfNumero", "gx.O.A7134CBD001LACRESCbdnVol", "gx.O.A7131CBD001LACRESCbdnLacre", "gx.O.A10187CBD001LACRESCbdSeqVol"],["Gx_mode", "Z7130CBD001LACRESCbdEmpCodigo", "Z7133CBD001LACRESCbdNtfSerie", "Z7132CBD001LACRESCbdNtfNumero", "Z7134CBD001LACRESCbdnVol", "Z7131CBD001LACRESCbdnLacre", "Z10187CBD001LACRESCbdSeqVol", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11a4764_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12a4764_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,45];
   this.GXLastCtrlId =45;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001lacrescbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001LACRESCBDEMPCODIGO",gxz:"Z7130CBD001LACRESCbdEmpCodigo",gxold:"O7130CBD001LACRESCbdEmpCodigo",gxvar:"A7130CBD001LACRESCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7130CBD001LACRESCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7130CBD001LACRESCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001LACRESCBDEMPCODIGO",gx.O.A7130CBD001LACRESCbdEmpCodigo,0)},c2v:function(){gx.O.A7130CBD001LACRESCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001LACRESCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001lacrescbdntfserie,isvalid:null,rgrid:[],fld:"CBD001LACRESCBDNTFSERIE",gxz:"Z7133CBD001LACRESCbdNtfSerie",gxold:"O7133CBD001LACRESCbdNtfSerie",gxvar:"A7133CBD001LACRESCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7133CBD001LACRESCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7133CBD001LACRESCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001LACRESCBDNTFSERIE",gx.O.A7133CBD001LACRESCbdNtfSerie,0)},c2v:function(){gx.O.A7133CBD001LACRESCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001LACRESCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001lacrescbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001LACRESCBDNTFNUMERO",gxz:"Z7132CBD001LACRESCbdNtfNumero",gxold:"O7132CBD001LACRESCbdNtfNumero",gxvar:"A7132CBD001LACRESCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7132CBD001LACRESCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7132CBD001LACRESCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001LACRESCBDNTFNUMERO",gx.O.A7132CBD001LACRESCbdNtfNumero,0)},c2v:function(){gx.O.A7132CBD001LACRESCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001LACRESCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001lacrescbdnvol,isvalid:null,rgrid:[],fld:"CBD001LACRESCBDNVOL",gxz:"Z7134CBD001LACRESCbdnVol",gxold:"O7134CBD001LACRESCbdnVol",gxvar:"A7134CBD001LACRESCbdnVol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7134CBD001LACRESCbdnVol=Value},v2z:function(Value){gx.O.Z7134CBD001LACRESCbdnVol=Value},v2c:function(){gx.fn.setControlValue("CBD001LACRESCBDNVOL",gx.O.A7134CBD001LACRESCbdnVol,0)},c2v:function(){gx.O.A7134CBD001LACRESCbdnVol=this.val()},val:function(){return gx.fn.getControlValue("CBD001LACRESCBDNVOL")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001lacrescbdnlacre,isvalid:null,rgrid:[],fld:"CBD001LACRESCBDNLACRE",gxz:"Z7131CBD001LACRESCbdnLacre",gxold:"O7131CBD001LACRESCbdnLacre",gxvar:"A7131CBD001LACRESCbdnLacre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7131CBD001LACRESCbdnLacre=Value},v2z:function(Value){gx.O.Z7131CBD001LACRESCbdnLacre=Value},v2c:function(){gx.fn.setControlValue("CBD001LACRESCBDNLACRE",gx.O.A7131CBD001LACRESCbdnLacre,0)},c2v:function(){gx.O.A7131CBD001LACRESCbdnLacre=this.val()},val:function(){return gx.fn.getControlValue("CBD001LACRESCBDNLACRE")},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001lacrescbdseqvol,isvalid:null,rgrid:[],fld:"CBD001LACRESCBDSEQVOL",gxz:"Z10187CBD001LACRESCbdSeqVol",gxold:"O10187CBD001LACRESCbdSeqVol",gxvar:"A10187CBD001LACRESCbdSeqVol",ucs:[],op:[],ip:[45,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10187CBD001LACRESCbdSeqVol=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10187CBD001LACRESCbdSeqVol=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001LACRESCBDSEQVOL",gx.O.A10187CBD001LACRESCbdSeqVol,0)},c2v:function(){gx.O.A10187CBD001LACRESCbdSeqVol=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001LACRESCBDSEQVOL",'.')},nac:gx.falseFn};
   this.A7130CBD001LACRESCbdEmpCodigo = 0 ;
   this.Z7130CBD001LACRESCbdEmpCodigo = 0 ;
   this.O7130CBD001LACRESCbdEmpCodigo = 0 ;
   this.A7133CBD001LACRESCbdNtfSerie = "" ;
   this.Z7133CBD001LACRESCbdNtfSerie = "" ;
   this.O7133CBD001LACRESCbdNtfSerie = "" ;
   this.A7132CBD001LACRESCbdNtfNumero = 0 ;
   this.Z7132CBD001LACRESCbdNtfNumero = 0 ;
   this.O7132CBD001LACRESCbdNtfNumero = 0 ;
   this.A7134CBD001LACRESCbdnVol = "" ;
   this.Z7134CBD001LACRESCbdnVol = "" ;
   this.O7134CBD001LACRESCbdnVol = "" ;
   this.A7131CBD001LACRESCbdnLacre = "" ;
   this.Z7131CBD001LACRESCbdnLacre = "" ;
   this.O7131CBD001LACRESCbdnLacre = "" ;
   this.A10187CBD001LACRESCbdSeqVol = 0 ;
   this.Z10187CBD001LACRESCbdSeqVol = 0 ;
   this.O10187CBD001LACRESCbdSeqVol = 0 ;
   this.A7130CBD001LACRESCbdEmpCodigo = 0 ;
   this.A7133CBD001LACRESCbdNtfSerie = "" ;
   this.A7132CBD001LACRESCbdNtfNumero = 0 ;
   this.A7134CBD001LACRESCbdnVol = "" ;
   this.A7131CBD001LACRESCbdnLacre = "" ;
   this.A10187CBD001LACRESCbdSeqVol = 0 ;
   this.Events = {"e11a4764_client": ["ENTER", true] ,"e12a4764_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001lacres());
