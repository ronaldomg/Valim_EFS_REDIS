/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:8.58
*/
gx.evt.autoSkip = false;
gx.define('tcbd001obsfisco', false, function () {
   this.ServerClass =  "tcbd001obsfisco" ;
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
   this.Valid_Cbd001obsfiscocbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001OBSFISCOCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001obsfiscocbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001OBSFISCOCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001obsfiscocbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001OBSFISCOCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001obsfiscocbdxcampo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001obsfiscocbdxcampo",["gx.O.A7152CBD001OBSFISCOCbdEmpCodigo", "gx.O.A7154CBD001OBSFISCOCbdNtfSerie", "gx.O.A7153CBD001OBSFISCOCbdNtfNumero", "gx.O.A7155CBD001OBSFISCOCbdxCampo", "gx.O.A7156CBD001OBSFISCOCbdxTexto"],["A7156CBD001OBSFISCOCbdxTexto", "Gx_mode", "Z7152CBD001OBSFISCOCbdEmpCodigo", "Z7154CBD001OBSFISCOCbdNtfSerie", "Z7153CBD001OBSFISCOCbdNtfNumero", "Z7155CBD001OBSFISCOCbdxCampo", "Z7156CBD001OBSFISCOCbdxTexto", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11a2542_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12a2542_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001obsfiscocbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001OBSFISCOCBDEMPCODIGO",gxz:"Z7152CBD001OBSFISCOCbdEmpCodigo",gxold:"O7152CBD001OBSFISCOCbdEmpCodigo",gxvar:"A7152CBD001OBSFISCOCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7152CBD001OBSFISCOCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7152CBD001OBSFISCOCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001OBSFISCOCBDEMPCODIGO",gx.O.A7152CBD001OBSFISCOCbdEmpCodigo,0)},c2v:function(){gx.O.A7152CBD001OBSFISCOCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001OBSFISCOCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001obsfiscocbdntfserie,isvalid:null,rgrid:[],fld:"CBD001OBSFISCOCBDNTFSERIE",gxz:"Z7154CBD001OBSFISCOCbdNtfSerie",gxold:"O7154CBD001OBSFISCOCbdNtfSerie",gxvar:"A7154CBD001OBSFISCOCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7154CBD001OBSFISCOCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7154CBD001OBSFISCOCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001OBSFISCOCBDNTFSERIE",gx.O.A7154CBD001OBSFISCOCbdNtfSerie,0)},c2v:function(){gx.O.A7154CBD001OBSFISCOCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001OBSFISCOCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001obsfiscocbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001OBSFISCOCBDNTFNUMERO",gxz:"Z7153CBD001OBSFISCOCbdNtfNumero",gxold:"O7153CBD001OBSFISCOCbdNtfNumero",gxvar:"A7153CBD001OBSFISCOCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7153CBD001OBSFISCOCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7153CBD001OBSFISCOCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001OBSFISCOCBDNTFNUMERO",gx.O.A7153CBD001OBSFISCOCbdNtfNumero,0)},c2v:function(){gx.O.A7153CBD001OBSFISCOCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001OBSFISCOCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001obsfiscocbdxcampo,isvalid:null,rgrid:[],fld:"CBD001OBSFISCOCBDXCAMPO",gxz:"Z7155CBD001OBSFISCOCbdxCampo",gxold:"O7155CBD001OBSFISCOCbdxCampo",gxvar:"A7155CBD001OBSFISCOCbdxCampo",ucs:[],op:[41],ip:[41,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7155CBD001OBSFISCOCbdxCampo=Value},v2z:function(Value){gx.O.Z7155CBD001OBSFISCOCbdxCampo=Value},v2c:function(){gx.fn.setControlValue("CBD001OBSFISCOCBDXCAMPO",gx.O.A7155CBD001OBSFISCOCbdxCampo,0)},c2v:function(){gx.O.A7155CBD001OBSFISCOCbdxCampo=this.val()},val:function(){return gx.fn.getControlValue("CBD001OBSFISCOCBDXCAMPO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001OBSFISCOCBDXTEXTO",gxz:"Z7156CBD001OBSFISCOCbdxTexto",gxold:"O7156CBD001OBSFISCOCbdxTexto",gxvar:"A7156CBD001OBSFISCOCbdxTexto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7156CBD001OBSFISCOCbdxTexto=Value},v2z:function(Value){gx.O.Z7156CBD001OBSFISCOCbdxTexto=Value},v2c:function(){gx.fn.setControlValue("CBD001OBSFISCOCBDXTEXTO",gx.O.A7156CBD001OBSFISCOCbdxTexto,0)},c2v:function(){gx.O.A7156CBD001OBSFISCOCbdxTexto=this.val()},val:function(){return gx.fn.getControlValue("CBD001OBSFISCOCBDXTEXTO")},nac:gx.falseFn};
   this.A7152CBD001OBSFISCOCbdEmpCodigo = 0 ;
   this.Z7152CBD001OBSFISCOCbdEmpCodigo = 0 ;
   this.O7152CBD001OBSFISCOCbdEmpCodigo = 0 ;
   this.A7154CBD001OBSFISCOCbdNtfSerie = "" ;
   this.Z7154CBD001OBSFISCOCbdNtfSerie = "" ;
   this.O7154CBD001OBSFISCOCbdNtfSerie = "" ;
   this.A7153CBD001OBSFISCOCbdNtfNumero = 0 ;
   this.Z7153CBD001OBSFISCOCbdNtfNumero = 0 ;
   this.O7153CBD001OBSFISCOCbdNtfNumero = 0 ;
   this.A7155CBD001OBSFISCOCbdxCampo = "" ;
   this.Z7155CBD001OBSFISCOCbdxCampo = "" ;
   this.O7155CBD001OBSFISCOCbdxCampo = "" ;
   this.A7156CBD001OBSFISCOCbdxTexto = "" ;
   this.Z7156CBD001OBSFISCOCbdxTexto = "" ;
   this.O7156CBD001OBSFISCOCbdxTexto = "" ;
   this.A7152CBD001OBSFISCOCbdEmpCodigo = 0 ;
   this.A7154CBD001OBSFISCOCbdNtfSerie = "" ;
   this.A7153CBD001OBSFISCOCbdNtfNumero = 0 ;
   this.A7155CBD001OBSFISCOCbdxCampo = "" ;
   this.A7156CBD001OBSFISCOCbdxTexto = "" ;
   this.Events = {"e11a2542_client": ["ENTER", true] ,"e12a2542_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001obsfisco());
