/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:0.92
*/
gx.evt.autoSkip = false;
gx.define('tcbd001vol', false, function () {
   this.ServerClass =  "tcbd001vol" ;
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
   this.Valid_Cbd001volcbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001VOLCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001volcbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001VOLCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001volcbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001VOLCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001volcbdseqvol=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001VOLCBDSEQVOL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001volcbdnvol=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001volcbdnvol",["gx.O.A7179CBD001VOLCbdEmpCodigo", "gx.O.A7183CBD001VOLCbdNtfSerie", "gx.O.A7182CBD001VOLCbdNtfNumero", "gx.O.A10163CBD001VOLCbdSeqVol", "gx.O.A7184CBD001VOLCbdnVol", "gx.num.urlDecimal(gx.O.A7187CBD001VOLCbdqVol,\'.\',\',\')", "gx.O.A7180CBD001VOLCbdesp", "gx.O.A7181CBD001VOLCbdmarca", "gx.num.urlDecimal(gx.O.A7186CBD001VOLCbdpesoL_transp,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7185CBD001VOLCbdpesoB_transp,\'.\',\',\')"],["A7187CBD001VOLCbdqVol", "A7180CBD001VOLCbdesp", "A7181CBD001VOLCbdmarca", "A7186CBD001VOLCbdpesoL_transp", "A7185CBD001VOLCbdpesoB_transp", "Gx_mode", "Z7179CBD001VOLCbdEmpCodigo", "Z7183CBD001VOLCbdNtfSerie", "Z7182CBD001VOLCbdNtfNumero", "Z10163CBD001VOLCbdSeqVol", "Z7184CBD001VOLCbdnVol", "Z7187CBD001VOLCbdqVol", "Z7180CBD001VOLCbdesp", "Z7181CBD001VOLCbdmarca", "Z7186CBD001VOLCbdpesoL_transp", "Z7185CBD001VOLCbdpesoB_transp", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e119x762_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e129x762_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,34,37,39,43,45,48,50,53,55,58,60,63,65];
   this.GXLastCtrlId =65;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001volcbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001VOLCBDEMPCODIGO",gxz:"Z7179CBD001VOLCbdEmpCodigo",gxold:"O7179CBD001VOLCbdEmpCodigo",gxvar:"A7179CBD001VOLCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7179CBD001VOLCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7179CBD001VOLCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001VOLCBDEMPCODIGO",gx.O.A7179CBD001VOLCbdEmpCodigo,0)},c2v:function(){gx.O.A7179CBD001VOLCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001VOLCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001volcbdntfserie,isvalid:null,rgrid:[],fld:"CBD001VOLCBDNTFSERIE",gxz:"Z7183CBD001VOLCbdNtfSerie",gxold:"O7183CBD001VOLCbdNtfSerie",gxvar:"A7183CBD001VOLCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7183CBD001VOLCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7183CBD001VOLCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001VOLCBDNTFSERIE",gx.O.A7183CBD001VOLCbdNtfSerie,0)},c2v:function(){gx.O.A7183CBD001VOLCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001VOLCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001volcbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001VOLCBDNTFNUMERO",gxz:"Z7182CBD001VOLCbdNtfNumero",gxold:"O7182CBD001VOLCbdNtfNumero",gxvar:"A7182CBD001VOLCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7182CBD001VOLCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7182CBD001VOLCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001VOLCBDNTFNUMERO",gx.O.A7182CBD001VOLCbdNtfNumero,0)},c2v:function(){gx.O.A7182CBD001VOLCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001VOLCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001volcbdseqvol,isvalid:null,rgrid:[],fld:"CBD001VOLCBDSEQVOL",gxz:"Z10163CBD001VOLCbdSeqVol",gxold:"O10163CBD001VOLCbdSeqVol",gxvar:"A10163CBD001VOLCbdSeqVol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10163CBD001VOLCbdSeqVol=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10163CBD001VOLCbdSeqVol=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001VOLCBDSEQVOL",gx.O.A10163CBD001VOLCbdSeqVol,0)},c2v:function(){gx.O.A10163CBD001VOLCbdSeqVol=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001VOLCBDSEQVOL",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001volcbdnvol,isvalid:null,rgrid:[],fld:"CBD001VOLCBDNVOL",gxz:"Z7184CBD001VOLCbdnVol",gxold:"O7184CBD001VOLCbdnVol",gxvar:"A7184CBD001VOLCbdnVol",ucs:[],op:[65,60,55,50,45],ip:[65,60,55,50,45,39,34,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7184CBD001VOLCbdnVol=Value},v2z:function(Value){gx.O.Z7184CBD001VOLCbdnVol=Value},v2c:function(){gx.fn.setControlValue("CBD001VOLCBDNVOL",gx.O.A7184CBD001VOLCbdnVol,0)},c2v:function(){gx.O.A7184CBD001VOLCbdnVol=this.val()},val:function(){return gx.fn.getControlValue("CBD001VOLCBDNVOL")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001VOLCBDQVOL",gxz:"Z7187CBD001VOLCbdqVol",gxold:"O7187CBD001VOLCbdqVol",gxvar:"A7187CBD001VOLCbdqVol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7187CBD001VOLCbdqVol=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7187CBD001VOLCbdqVol=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001VOLCBDQVOL",gx.O.A7187CBD001VOLCbdqVol,0)},c2v:function(){gx.O.A7187CBD001VOLCbdqVol=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001VOLCBDQVOL",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001VOLCBDESP",gxz:"Z7180CBD001VOLCbdesp",gxold:"O7180CBD001VOLCbdesp",gxvar:"A7180CBD001VOLCbdesp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7180CBD001VOLCbdesp=Value},v2z:function(Value){gx.O.Z7180CBD001VOLCbdesp=Value},v2c:function(){gx.fn.setControlValue("CBD001VOLCBDESP",gx.O.A7180CBD001VOLCbdesp,0)},c2v:function(){gx.O.A7180CBD001VOLCbdesp=this.val()},val:function(){return gx.fn.getControlValue("CBD001VOLCBDESP")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001VOLCBDMARCA",gxz:"Z7181CBD001VOLCbdmarca",gxold:"O7181CBD001VOLCbdmarca",gxvar:"A7181CBD001VOLCbdmarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7181CBD001VOLCbdmarca=Value},v2z:function(Value){gx.O.Z7181CBD001VOLCbdmarca=Value},v2c:function(){gx.fn.setControlValue("CBD001VOLCBDMARCA",gx.O.A7181CBD001VOLCbdmarca,0)},c2v:function(){gx.O.A7181CBD001VOLCbdmarca=this.val()},val:function(){return gx.fn.getControlValue("CBD001VOLCBDMARCA")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:15,dec:3,sign:false,pic:"ZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001VOLCBDPESOL_TRANSP",gxz:"Z7186CBD001VOLCbdpesoL_transp",gxold:"O7186CBD001VOLCbdpesoL_transp",gxvar:"A7186CBD001VOLCbdpesoL_transp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7186CBD001VOLCbdpesoL_transp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7186CBD001VOLCbdpesoL_transp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001VOLCBDPESOL_TRANSP",gx.O.A7186CBD001VOLCbdpesoL_transp,3,',')},c2v:function(){gx.O.A7186CBD001VOLCbdpesoL_transp=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001VOLCBDPESOL_TRANSP",'.',',')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"decimal",len:15,dec:3,sign:false,pic:"ZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001VOLCBDPESOB_TRANSP",gxz:"Z7185CBD001VOLCbdpesoB_transp",gxold:"O7185CBD001VOLCbdpesoB_transp",gxvar:"A7185CBD001VOLCbdpesoB_transp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7185CBD001VOLCbdpesoB_transp=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7185CBD001VOLCbdpesoB_transp=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001VOLCBDPESOB_TRANSP",gx.O.A7185CBD001VOLCbdpesoB_transp,3,',')},c2v:function(){gx.O.A7185CBD001VOLCbdpesoB_transp=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001VOLCBDPESOB_TRANSP",'.',',')},nac:gx.falseFn};
   this.A7179CBD001VOLCbdEmpCodigo = 0 ;
   this.Z7179CBD001VOLCbdEmpCodigo = 0 ;
   this.O7179CBD001VOLCbdEmpCodigo = 0 ;
   this.A7183CBD001VOLCbdNtfSerie = "" ;
   this.Z7183CBD001VOLCbdNtfSerie = "" ;
   this.O7183CBD001VOLCbdNtfSerie = "" ;
   this.A7182CBD001VOLCbdNtfNumero = 0 ;
   this.Z7182CBD001VOLCbdNtfNumero = 0 ;
   this.O7182CBD001VOLCbdNtfNumero = 0 ;
   this.A10163CBD001VOLCbdSeqVol = 0 ;
   this.Z10163CBD001VOLCbdSeqVol = 0 ;
   this.O10163CBD001VOLCbdSeqVol = 0 ;
   this.A7184CBD001VOLCbdnVol = "" ;
   this.Z7184CBD001VOLCbdnVol = "" ;
   this.O7184CBD001VOLCbdnVol = "" ;
   this.A7187CBD001VOLCbdqVol = 0 ;
   this.Z7187CBD001VOLCbdqVol = 0 ;
   this.O7187CBD001VOLCbdqVol = 0 ;
   this.A7180CBD001VOLCbdesp = "" ;
   this.Z7180CBD001VOLCbdesp = "" ;
   this.O7180CBD001VOLCbdesp = "" ;
   this.A7181CBD001VOLCbdmarca = "" ;
   this.Z7181CBD001VOLCbdmarca = "" ;
   this.O7181CBD001VOLCbdmarca = "" ;
   this.A7186CBD001VOLCbdpesoL_transp = 0 ;
   this.Z7186CBD001VOLCbdpesoL_transp = 0 ;
   this.O7186CBD001VOLCbdpesoL_transp = 0 ;
   this.A7185CBD001VOLCbdpesoB_transp = 0 ;
   this.Z7185CBD001VOLCbdpesoB_transp = 0 ;
   this.O7185CBD001VOLCbdpesoB_transp = 0 ;
   this.A7179CBD001VOLCbdEmpCodigo = 0 ;
   this.A7183CBD001VOLCbdNtfSerie = "" ;
   this.A7182CBD001VOLCbdNtfNumero = 0 ;
   this.A10163CBD001VOLCbdSeqVol = 0 ;
   this.A7184CBD001VOLCbdnVol = "" ;
   this.A7187CBD001VOLCbdqVol = 0 ;
   this.A7180CBD001VOLCbdesp = "" ;
   this.A7181CBD001VOLCbdmarca = "" ;
   this.A7186CBD001VOLCbdpesoL_transp = 0 ;
   this.A7185CBD001VOLCbdpesoB_transp = 0 ;
   this.Events = {"e119x762_client": ["ENTER", true] ,"e129x762_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001vol());
