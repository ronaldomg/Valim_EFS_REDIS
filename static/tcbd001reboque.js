/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:5.57
*/
gx.evt.autoSkip = false;
gx.define('tcbd001reboque', false, function () {
   this.ServerClass =  "tcbd001reboque" ;
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
   this.Valid_Cbd001reboquecbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001REBOQUECBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001reboquecbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001REBOQUECBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001reboquecbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001REBOQUECBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001reboquecbdplaca_rebtrans=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001reboquecbdplaca_rebtrans",["gx.O.A7162CBD001REBOQUECbdEmpCodigo", "gx.O.A7164CBD001REBOQUECbdNtfSerie", "gx.O.A7163CBD001REBOQUECbdNtfNumero", "gx.O.A7165CBD001REBOQUECbdplaca_rebtrans", "gx.O.A7167CBD001REBOQUECbdUF_rebtransp", "gx.O.A7166CBD001REBOQUECbdRNTC_rebtransp"],["A7167CBD001REBOQUECbdUF_rebtransp", "A7166CBD001REBOQUECbdRNTC_rebtransp", "Gx_mode", "Z7162CBD001REBOQUECbdEmpCodigo", "Z7164CBD001REBOQUECbdNtfSerie", "Z7163CBD001REBOQUECbdNtfNumero", "Z7165CBD001REBOQUECbdplaca_rebtrans", "Z7167CBD001REBOQUECbdUF_rebtransp", "Z7166CBD001REBOQUECbdRNTC_rebtransp", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11a0540_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12a0540_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,39,41,44,46];
   this.GXLastCtrlId =46;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001reboquecbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001REBOQUECBDEMPCODIGO",gxz:"Z7162CBD001REBOQUECbdEmpCodigo",gxold:"O7162CBD001REBOQUECbdEmpCodigo",gxvar:"A7162CBD001REBOQUECbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7162CBD001REBOQUECbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7162CBD001REBOQUECbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001REBOQUECBDEMPCODIGO",gx.O.A7162CBD001REBOQUECbdEmpCodigo,0)},c2v:function(){gx.O.A7162CBD001REBOQUECbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001REBOQUECBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001reboquecbdntfserie,isvalid:null,rgrid:[],fld:"CBD001REBOQUECBDNTFSERIE",gxz:"Z7164CBD001REBOQUECbdNtfSerie",gxold:"O7164CBD001REBOQUECbdNtfSerie",gxvar:"A7164CBD001REBOQUECbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7164CBD001REBOQUECbdNtfSerie=Value},v2z:function(Value){gx.O.Z7164CBD001REBOQUECbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001REBOQUECBDNTFSERIE",gx.O.A7164CBD001REBOQUECbdNtfSerie,0)},c2v:function(){gx.O.A7164CBD001REBOQUECbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001REBOQUECBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001reboquecbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001REBOQUECBDNTFNUMERO",gxz:"Z7163CBD001REBOQUECbdNtfNumero",gxold:"O7163CBD001REBOQUECbdNtfNumero",gxvar:"A7163CBD001REBOQUECbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7163CBD001REBOQUECbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7163CBD001REBOQUECbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001REBOQUECBDNTFNUMERO",gx.O.A7163CBD001REBOQUECbdNtfNumero,0)},c2v:function(){gx.O.A7163CBD001REBOQUECbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001REBOQUECBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:7,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001reboquecbdplaca_rebtrans,isvalid:null,rgrid:[],fld:"CBD001REBOQUECBDPLACA_REBTRANS",gxz:"Z7165CBD001REBOQUECbdplaca_rebtrans",gxold:"O7165CBD001REBOQUECbdplaca_rebtrans",gxvar:"A7165CBD001REBOQUECbdplaca_rebtrans",ucs:[],op:[46,41],ip:[46,41,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7165CBD001REBOQUECbdplaca_rebtrans=Value},v2z:function(Value){gx.O.Z7165CBD001REBOQUECbdplaca_rebtrans=Value},v2c:function(){gx.fn.setControlValue("CBD001REBOQUECBDPLACA_REBTRANS",gx.O.A7165CBD001REBOQUECbdplaca_rebtrans,0)},c2v:function(){gx.O.A7165CBD001REBOQUECbdplaca_rebtrans=this.val()},val:function(){return gx.fn.getControlValue("CBD001REBOQUECBDPLACA_REBTRANS")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001REBOQUECBDUF_REBTRANSP",gxz:"Z7167CBD001REBOQUECbdUF_rebtransp",gxold:"O7167CBD001REBOQUECbdUF_rebtransp",gxvar:"A7167CBD001REBOQUECbdUF_rebtransp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7167CBD001REBOQUECbdUF_rebtransp=Value},v2z:function(Value){gx.O.Z7167CBD001REBOQUECbdUF_rebtransp=Value},v2c:function(){gx.fn.setControlValue("CBD001REBOQUECBDUF_REBTRANSP",gx.O.A7167CBD001REBOQUECbdUF_rebtransp,0)},c2v:function(){gx.O.A7167CBD001REBOQUECbdUF_rebtransp=this.val()},val:function(){return gx.fn.getControlValue("CBD001REBOQUECBDUF_REBTRANSP")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001REBOQUECBDRNTC_REBTRANSP",gxz:"Z7166CBD001REBOQUECbdRNTC_rebtransp",gxold:"O7166CBD001REBOQUECbdRNTC_rebtransp",gxvar:"A7166CBD001REBOQUECbdRNTC_rebtransp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7166CBD001REBOQUECbdRNTC_rebtransp=Value},v2z:function(Value){gx.O.Z7166CBD001REBOQUECbdRNTC_rebtransp=Value},v2c:function(){gx.fn.setControlValue("CBD001REBOQUECBDRNTC_REBTRANSP",gx.O.A7166CBD001REBOQUECbdRNTC_rebtransp,0)},c2v:function(){gx.O.A7166CBD001REBOQUECbdRNTC_rebtransp=this.val()},val:function(){return gx.fn.getControlValue("CBD001REBOQUECBDRNTC_REBTRANSP")},nac:gx.falseFn};
   this.A7162CBD001REBOQUECbdEmpCodigo = 0 ;
   this.Z7162CBD001REBOQUECbdEmpCodigo = 0 ;
   this.O7162CBD001REBOQUECbdEmpCodigo = 0 ;
   this.A7164CBD001REBOQUECbdNtfSerie = "" ;
   this.Z7164CBD001REBOQUECbdNtfSerie = "" ;
   this.O7164CBD001REBOQUECbdNtfSerie = "" ;
   this.A7163CBD001REBOQUECbdNtfNumero = 0 ;
   this.Z7163CBD001REBOQUECbdNtfNumero = 0 ;
   this.O7163CBD001REBOQUECbdNtfNumero = 0 ;
   this.A7165CBD001REBOQUECbdplaca_rebtrans = "" ;
   this.Z7165CBD001REBOQUECbdplaca_rebtrans = "" ;
   this.O7165CBD001REBOQUECbdplaca_rebtrans = "" ;
   this.A7167CBD001REBOQUECbdUF_rebtransp = "" ;
   this.Z7167CBD001REBOQUECbdUF_rebtransp = "" ;
   this.O7167CBD001REBOQUECbdUF_rebtransp = "" ;
   this.A7166CBD001REBOQUECbdRNTC_rebtransp = "" ;
   this.Z7166CBD001REBOQUECbdRNTC_rebtransp = "" ;
   this.O7166CBD001REBOQUECbdRNTC_rebtransp = "" ;
   this.A7162CBD001REBOQUECbdEmpCodigo = 0 ;
   this.A7164CBD001REBOQUECbdNtfSerie = "" ;
   this.A7163CBD001REBOQUECbdNtfNumero = 0 ;
   this.A7165CBD001REBOQUECbdplaca_rebtrans = "" ;
   this.A7167CBD001REBOQUECbdUF_rebtransp = "" ;
   this.A7166CBD001REBOQUECbdRNTC_rebtransp = "" ;
   this.Events = {"e11a0540_client": ["ENTER", true] ,"e12a0540_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001reboque());
