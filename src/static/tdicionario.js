/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:16:8.90
*/
gx.evt.autoSkip = false;
gx.define('tdicionario', false, function () {
   this.ServerClass =  "tdicionario" ;
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
   this.Valid_Relname=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RELNAME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Attname=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Attname",["gx.O.A182relname", "gx.O.A183attname", "gx.O.A180typname", "gx.O.A181atttypmod"],["A180typname", "A181atttypmod", "Gx_mode", "Z182relname", "Z183attname", "Z180typname", "Z181atttypmod", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e110b15_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e120b15_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,29,31,34,36];
   this.GXLastCtrlId =36;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Relname,isvalid:null,rgrid:[],fld:"RELNAME",gxz:"Z182relname",gxold:"O182relname",gxvar:"A182relname",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A182relname=Value},v2z:function(Value){gx.O.Z182relname=Value},v2c:function(){gx.fn.setControlValue("RELNAME",gx.O.A182relname,0)},c2v:function(){gx.O.A182relname=this.val()},val:function(){return gx.fn.getControlValue("RELNAME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Attname,isvalid:null,rgrid:[],fld:"ATTNAME",gxz:"Z183attname",gxold:"O183attname",gxvar:"A183attname",ucs:[],op:[36,31],ip:[36,31,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A183attname=Value},v2z:function(Value){gx.O.Z183attname=Value},v2c:function(){gx.fn.setControlValue("ATTNAME",gx.O.A183attname,0)},c2v:function(){gx.O.A183attname=this.val()},val:function(){return gx.fn.getControlValue("ATTNAME")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TYPNAME",gxz:"Z180typname",gxold:"O180typname",gxvar:"A180typname",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A180typname=Value},v2z:function(Value){gx.O.Z180typname=Value},v2c:function(){gx.fn.setControlValue("TYPNAME",gx.O.A180typname,0)},c2v:function(){gx.O.A180typname=this.val()},val:function(){return gx.fn.getControlValue("TYPNAME")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:8,dec:0,sign:true,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ATTTYPMOD",gxz:"Z181atttypmod",gxold:"O181atttypmod",gxvar:"A181atttypmod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A181atttypmod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z181atttypmod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ATTTYPMOD",gx.O.A181atttypmod,0)},c2v:function(){gx.O.A181atttypmod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ATTTYPMOD",'.')},nac:gx.falseFn};
   this.A182relname = "" ;
   this.Z182relname = "" ;
   this.O182relname = "" ;
   this.A183attname = "" ;
   this.Z183attname = "" ;
   this.O183attname = "" ;
   this.A180typname = "" ;
   this.Z180typname = "" ;
   this.O180typname = "" ;
   this.A181atttypmod = 0 ;
   this.Z181atttypmod = 0 ;
   this.O181atttypmod = 0 ;
   this.A182relname = "" ;
   this.A183attname = "" ;
   this.A180typname = "" ;
   this.A181atttypmod = 0 ;
   this.Events = {"e110b15_client": ["ENTER", true] ,"e120b15_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdicionario());
