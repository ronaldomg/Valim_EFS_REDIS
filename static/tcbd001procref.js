/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:6.99
*/
gx.evt.autoSkip = false;
gx.define('tcbd001procref', false, function () {
   this.ServerClass =  "tcbd001procref" ;
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
   this.Valid_Cbd001procrefcbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001PROCREFCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001procrefcbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001PROCREFCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001procrefcbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001PROCREFCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001procrefcbdnproc=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001procrefcbdnproc",["gx.O.A7157CBD001PROCREFCbdEmpCodigo", "gx.O.A7161CBD001PROCREFCbdNtfSerie", "gx.O.A7160CBD001PROCREFCbdNtfNumero", "gx.O.A7159CBD001PROCREFCbdnProc", "gx.O.A7158CBD001PROCREFCbdindProc"],["A7158CBD001PROCREFCbdindProc", "Gx_mode", "Z7157CBD001PROCREFCbdEmpCodigo", "Z7161CBD001PROCREFCbdNtfSerie", "Z7160CBD001PROCREFCbdNtfNumero", "Z7159CBD001PROCREFCbdnProc", "Z7158CBD001PROCREFCbdindProc", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11a1541_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12a1541_client=function()
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
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001procrefcbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001PROCREFCBDEMPCODIGO",gxz:"Z7157CBD001PROCREFCbdEmpCodigo",gxold:"O7157CBD001PROCREFCbdEmpCodigo",gxvar:"A7157CBD001PROCREFCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7157CBD001PROCREFCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7157CBD001PROCREFCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001PROCREFCBDEMPCODIGO",gx.O.A7157CBD001PROCREFCbdEmpCodigo,0)},c2v:function(){gx.O.A7157CBD001PROCREFCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001PROCREFCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001procrefcbdntfserie,isvalid:null,rgrid:[],fld:"CBD001PROCREFCBDNTFSERIE",gxz:"Z7161CBD001PROCREFCbdNtfSerie",gxold:"O7161CBD001PROCREFCbdNtfSerie",gxvar:"A7161CBD001PROCREFCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7161CBD001PROCREFCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7161CBD001PROCREFCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001PROCREFCBDNTFSERIE",gx.O.A7161CBD001PROCREFCbdNtfSerie,0)},c2v:function(){gx.O.A7161CBD001PROCREFCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001PROCREFCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001procrefcbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001PROCREFCBDNTFNUMERO",gxz:"Z7160CBD001PROCREFCbdNtfNumero",gxold:"O7160CBD001PROCREFCbdNtfNumero",gxvar:"A7160CBD001PROCREFCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7160CBD001PROCREFCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7160CBD001PROCREFCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001PROCREFCBDNTFNUMERO",gx.O.A7160CBD001PROCREFCbdNtfNumero,0)},c2v:function(){gx.O.A7160CBD001PROCREFCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001PROCREFCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001procrefcbdnproc,isvalid:null,rgrid:[],fld:"CBD001PROCREFCBDNPROC",gxz:"Z7159CBD001PROCREFCbdnProc",gxold:"O7159CBD001PROCREFCbdnProc",gxvar:"A7159CBD001PROCREFCbdnProc",ucs:[],op:[41],ip:[41,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7159CBD001PROCREFCbdnProc=Value},v2z:function(Value){gx.O.Z7159CBD001PROCREFCbdnProc=Value},v2c:function(){gx.fn.setControlValue("CBD001PROCREFCBDNPROC",gx.O.A7159CBD001PROCREFCbdnProc,0)},c2v:function(){gx.O.A7159CBD001PROCREFCbdnProc=this.val()},val:function(){return gx.fn.getControlValue("CBD001PROCREFCBDNPROC")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001PROCREFCBDINDPROC",gxz:"Z7158CBD001PROCREFCbdindProc",gxold:"O7158CBD001PROCREFCbdindProc",gxvar:"A7158CBD001PROCREFCbdindProc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7158CBD001PROCREFCbdindProc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7158CBD001PROCREFCbdindProc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001PROCREFCBDINDPROC",gx.O.A7158CBD001PROCREFCbdindProc,0)},c2v:function(){gx.O.A7158CBD001PROCREFCbdindProc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001PROCREFCBDINDPROC",'.')},nac:gx.falseFn};
   this.A7157CBD001PROCREFCbdEmpCodigo = 0 ;
   this.Z7157CBD001PROCREFCbdEmpCodigo = 0 ;
   this.O7157CBD001PROCREFCbdEmpCodigo = 0 ;
   this.A7161CBD001PROCREFCbdNtfSerie = "" ;
   this.Z7161CBD001PROCREFCbdNtfSerie = "" ;
   this.O7161CBD001PROCREFCbdNtfSerie = "" ;
   this.A7160CBD001PROCREFCbdNtfNumero = 0 ;
   this.Z7160CBD001PROCREFCbdNtfNumero = 0 ;
   this.O7160CBD001PROCREFCbdNtfNumero = 0 ;
   this.A7159CBD001PROCREFCbdnProc = "" ;
   this.Z7159CBD001PROCREFCbdnProc = "" ;
   this.O7159CBD001PROCREFCbdnProc = "" ;
   this.A7158CBD001PROCREFCbdindProc = 0 ;
   this.Z7158CBD001PROCREFCbdindProc = 0 ;
   this.O7158CBD001PROCREFCbdindProc = 0 ;
   this.A7157CBD001PROCREFCbdEmpCodigo = 0 ;
   this.A7161CBD001PROCREFCbdNtfSerie = "" ;
   this.A7160CBD001PROCREFCbdNtfNumero = 0 ;
   this.A7159CBD001PROCREFCbdnProc = "" ;
   this.A7158CBD001PROCREFCbdindProc = 0 ;
   this.Events = {"e11a1541_client": ["ENTER", true] ,"e12a1541_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001procref());
