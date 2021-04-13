/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:54.17
*/
gx.evt.autoSkip = false;
gx.define('tcbd001anexos', false, function () {
   this.ServerClass =  "tcbd001anexos" ;
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
   this.Valid_Cbd001anexoscbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001ANEXOSCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001anexoscbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001ANEXOSCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001anexoscbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001ANEXOSCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001anexoscbdaneseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001ANEXOSCBDANESEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001anexoscbdanecaminho=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001anexoscbdanecaminho",["gx.O.A7190CBD001ANEXOSCbdEmpCodigo", "gx.O.A7192CBD001ANEXOSCbdNtfSerie", "gx.O.A7191CBD001ANEXOSCbdNtfNumero", "gx.O.A7189CBD001ANEXOSCbdAneSeq", "gx.O.A7188CBD001ANEXOSCbdAneCaminho"],["Gx_mode", "Z7190CBD001ANEXOSCbdEmpCodigo", "Z7192CBD001ANEXOSCbdNtfSerie", "Z7191CBD001ANEXOSCbdNtfNumero", "Z7189CBD001ANEXOSCbdAneSeq", "Z7188CBD001ANEXOSCbdAneCaminho", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11ag556_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ag556_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40];
   this.GXLastCtrlId =40;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001anexoscbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001ANEXOSCBDEMPCODIGO",gxz:"Z7190CBD001ANEXOSCbdEmpCodigo",gxold:"O7190CBD001ANEXOSCbdEmpCodigo",gxvar:"A7190CBD001ANEXOSCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7190CBD001ANEXOSCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7190CBD001ANEXOSCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001ANEXOSCBDEMPCODIGO",gx.O.A7190CBD001ANEXOSCbdEmpCodigo,0)},c2v:function(){gx.O.A7190CBD001ANEXOSCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001ANEXOSCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001anexoscbdntfserie,isvalid:null,rgrid:[],fld:"CBD001ANEXOSCBDNTFSERIE",gxz:"Z7192CBD001ANEXOSCbdNtfSerie",gxold:"O7192CBD001ANEXOSCbdNtfSerie",gxvar:"A7192CBD001ANEXOSCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7192CBD001ANEXOSCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7192CBD001ANEXOSCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001ANEXOSCBDNTFSERIE",gx.O.A7192CBD001ANEXOSCbdNtfSerie,0)},c2v:function(){gx.O.A7192CBD001ANEXOSCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001ANEXOSCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001anexoscbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001ANEXOSCBDNTFNUMERO",gxz:"Z7191CBD001ANEXOSCbdNtfNumero",gxold:"O7191CBD001ANEXOSCbdNtfNumero",gxvar:"A7191CBD001ANEXOSCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7191CBD001ANEXOSCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7191CBD001ANEXOSCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001ANEXOSCBDNTFNUMERO",gx.O.A7191CBD001ANEXOSCbdNtfNumero,0)},c2v:function(){gx.O.A7191CBD001ANEXOSCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001ANEXOSCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001anexoscbdaneseq,isvalid:null,rgrid:[],fld:"CBD001ANEXOSCBDANESEQ",gxz:"Z7189CBD001ANEXOSCbdAneSeq",gxold:"O7189CBD001ANEXOSCbdAneSeq",gxvar:"A7189CBD001ANEXOSCbdAneSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7189CBD001ANEXOSCbdAneSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7189CBD001ANEXOSCbdAneSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001ANEXOSCBDANESEQ",gx.O.A7189CBD001ANEXOSCbdAneSeq,0)},c2v:function(){gx.O.A7189CBD001ANEXOSCbdAneSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001ANEXOSCBDANESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:500,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Cbd001anexoscbdanecaminho,isvalid:null,rgrid:[],fld:"CBD001ANEXOSCBDANECAMINHO",gxz:"Z7188CBD001ANEXOSCbdAneCaminho",gxold:"O7188CBD001ANEXOSCbdAneCaminho",gxvar:"A7188CBD001ANEXOSCbdAneCaminho",ucs:[],op:[],ip:[40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7188CBD001ANEXOSCbdAneCaminho=Value},v2z:function(Value){gx.O.Z7188CBD001ANEXOSCbdAneCaminho=Value},v2c:function(){gx.fn.setControlValue("CBD001ANEXOSCBDANECAMINHO",gx.O.A7188CBD001ANEXOSCbdAneCaminho,0)},c2v:function(){gx.O.A7188CBD001ANEXOSCbdAneCaminho=this.val()},val:function(){return gx.fn.getControlValue("CBD001ANEXOSCBDANECAMINHO")},nac:gx.falseFn};
   this.A7190CBD001ANEXOSCbdEmpCodigo = 0 ;
   this.Z7190CBD001ANEXOSCbdEmpCodigo = 0 ;
   this.O7190CBD001ANEXOSCbdEmpCodigo = 0 ;
   this.A7192CBD001ANEXOSCbdNtfSerie = "" ;
   this.Z7192CBD001ANEXOSCbdNtfSerie = "" ;
   this.O7192CBD001ANEXOSCbdNtfSerie = "" ;
   this.A7191CBD001ANEXOSCbdNtfNumero = 0 ;
   this.Z7191CBD001ANEXOSCbdNtfNumero = 0 ;
   this.O7191CBD001ANEXOSCbdNtfNumero = 0 ;
   this.A7189CBD001ANEXOSCbdAneSeq = 0 ;
   this.Z7189CBD001ANEXOSCbdAneSeq = 0 ;
   this.O7189CBD001ANEXOSCbdAneSeq = 0 ;
   this.A7188CBD001ANEXOSCbdAneCaminho = "" ;
   this.Z7188CBD001ANEXOSCbdAneCaminho = "" ;
   this.O7188CBD001ANEXOSCbdAneCaminho = "" ;
   this.A7190CBD001ANEXOSCbdEmpCodigo = 0 ;
   this.A7192CBD001ANEXOSCbdNtfSerie = "" ;
   this.A7191CBD001ANEXOSCbdNtfNumero = 0 ;
   this.A7189CBD001ANEXOSCbdAneSeq = 0 ;
   this.A7188CBD001ANEXOSCbdAneCaminho = "" ;
   this.Events = {"e11ag556_client": ["ENTER", true] ,"e12ag556_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001anexos());
