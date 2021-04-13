/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:21:12.14
*/
gx.evt.autoSkip = false;
gx.define('tnfe010logstatus', false, function () {
   this.ServerClass =  "tnfe010logstatus" ;
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
   this.Valid_Nfe010logstatusempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE010LOGSTATUSEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe010logstatusntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE010LOGSTATUSNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe010logstatusntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE010LOGSTATUSNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe010logstatuslgncodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE010LOGSTATUSLGNCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe010logstatusstsretcod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE010LOGSTATUSSTSRETCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe010logstatuslgnstsdata=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nfe010logstatuslgnstsdata",["gx.O.A7653NFE010LOGSTATUSempcodigo", "gx.O.A7654NFE010LOGSTATUSntfnumero", "gx.O.A7655NFE010LOGSTATUSntfserie", "gx.O.A7656NFE010LOGSTATUSlgncodigo", "gx.O.A7657NFE010LOGSTATUSstsretcod", 'gx.date.urlDateTime(gx.O.A7658NFE010LOGSTATUSlgnstsdata,"DMY4")', "gx.O.A7659NFE010LOGSTATUSlgnstsseq"],["A7659NFE010LOGSTATUSlgnstsseq", "Gx_mode", "Z7653NFE010LOGSTATUSempcodigo", "Z7654NFE010LOGSTATUSntfnumero", "Z7655NFE010LOGSTATUSntfserie", "Z7656NFE010LOGSTATUSlgncodigo", "Z7657NFE010LOGSTATUSstsretcod", "Z7658NFE010LOGSTATUSlgnstsdata", "Z7659NFE010LOGSTATUSlgnstsseq", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11ay579_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ay579_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,43,45,49,51];
   this.GXLastCtrlId =51;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe010logstatusempcodigo,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSEMPCODIGO",gxz:"Z7653NFE010LOGSTATUSempcodigo",gxold:"O7653NFE010LOGSTATUSempcodigo",gxvar:"A7653NFE010LOGSTATUSempcodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7653NFE010LOGSTATUSempcodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7653NFE010LOGSTATUSempcodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE010LOGSTATUSEMPCODIGO",gx.O.A7653NFE010LOGSTATUSempcodigo,0)},c2v:function(){gx.O.A7653NFE010LOGSTATUSempcodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE010LOGSTATUSEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe010logstatusntfnumero,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSNTFNUMERO",gxz:"Z7654NFE010LOGSTATUSntfnumero",gxold:"O7654NFE010LOGSTATUSntfnumero",gxvar:"A7654NFE010LOGSTATUSntfnumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7654NFE010LOGSTATUSntfnumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7654NFE010LOGSTATUSntfnumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE010LOGSTATUSNTFNUMERO",gx.O.A7654NFE010LOGSTATUSntfnumero,0)},c2v:function(){gx.O.A7654NFE010LOGSTATUSntfnumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE010LOGSTATUSNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe010logstatusntfserie,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSNTFSERIE",gxz:"Z7655NFE010LOGSTATUSntfserie",gxold:"O7655NFE010LOGSTATUSntfserie",gxvar:"A7655NFE010LOGSTATUSntfserie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7655NFE010LOGSTATUSntfserie=Value},v2z:function(Value){gx.O.Z7655NFE010LOGSTATUSntfserie=Value},v2c:function(){gx.fn.setControlValue("NFE010LOGSTATUSNTFSERIE",gx.O.A7655NFE010LOGSTATUSntfserie,0)},c2v:function(){gx.O.A7655NFE010LOGSTATUSntfserie=this.val()},val:function(){return gx.fn.getControlValue("NFE010LOGSTATUSNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe010logstatuslgncodigo,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSLGNCODIGO",gxz:"Z7656NFE010LOGSTATUSlgncodigo",gxold:"O7656NFE010LOGSTATUSlgncodigo",gxvar:"A7656NFE010LOGSTATUSlgncodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7656NFE010LOGSTATUSlgncodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7656NFE010LOGSTATUSlgncodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE010LOGSTATUSLGNCODIGO",gx.O.A7656NFE010LOGSTATUSlgncodigo,0)},c2v:function(){gx.O.A7656NFE010LOGSTATUSlgncodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE010LOGSTATUSLGNCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe010logstatusstsretcod,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSSTSRETCOD",gxz:"Z7657NFE010LOGSTATUSstsretcod",gxold:"O7657NFE010LOGSTATUSstsretcod",gxvar:"A7657NFE010LOGSTATUSstsretcod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7657NFE010LOGSTATUSstsretcod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7657NFE010LOGSTATUSstsretcod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE010LOGSTATUSSTSRETCOD",gx.O.A7657NFE010LOGSTATUSstsretcod,0)},c2v:function(){gx.O.A7657NFE010LOGSTATUSstsretcod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE010LOGSTATUSSTSRETCOD",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe010logstatuslgnstsdata,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSLGNSTSDATA",gxz:"Z7658NFE010LOGSTATUSlgnstsdata",gxold:"O7658NFE010LOGSTATUSlgnstsdata",gxvar:"A7658NFE010LOGSTATUSlgnstsdata",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[51],ip:[51,45,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7658NFE010LOGSTATUSlgnstsdata=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7658NFE010LOGSTATUSlgnstsdata=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NFE010LOGSTATUSLGNSTSDATA",gx.O.A7658NFE010LOGSTATUSlgnstsdata,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7658NFE010LOGSTATUSlgnstsdata=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NFE010LOGSTATUSLGNSTSDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSLGNSTSSEQ",gxz:"Z7659NFE010LOGSTATUSlgnstsseq",gxold:"O7659NFE010LOGSTATUSlgnstsseq",gxvar:"A7659NFE010LOGSTATUSlgnstsseq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7659NFE010LOGSTATUSlgnstsseq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7659NFE010LOGSTATUSlgnstsseq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE010LOGSTATUSLGNSTSSEQ",gx.O.A7659NFE010LOGSTATUSlgnstsseq,0)},c2v:function(){gx.O.A7659NFE010LOGSTATUSlgnstsseq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE010LOGSTATUSLGNSTSSEQ",'.')},nac:gx.falseFn};
   this.A7653NFE010LOGSTATUSempcodigo = 0 ;
   this.Z7653NFE010LOGSTATUSempcodigo = 0 ;
   this.O7653NFE010LOGSTATUSempcodigo = 0 ;
   this.A7654NFE010LOGSTATUSntfnumero = 0 ;
   this.Z7654NFE010LOGSTATUSntfnumero = 0 ;
   this.O7654NFE010LOGSTATUSntfnumero = 0 ;
   this.A7655NFE010LOGSTATUSntfserie = "" ;
   this.Z7655NFE010LOGSTATUSntfserie = "" ;
   this.O7655NFE010LOGSTATUSntfserie = "" ;
   this.A7656NFE010LOGSTATUSlgncodigo = 0 ;
   this.Z7656NFE010LOGSTATUSlgncodigo = 0 ;
   this.O7656NFE010LOGSTATUSlgncodigo = 0 ;
   this.A7657NFE010LOGSTATUSstsretcod = 0 ;
   this.Z7657NFE010LOGSTATUSstsretcod = 0 ;
   this.O7657NFE010LOGSTATUSstsretcod = 0 ;
   this.A7658NFE010LOGSTATUSlgnstsdata = gx.date.nullDate() ;
   this.Z7658NFE010LOGSTATUSlgnstsdata = gx.date.nullDate() ;
   this.O7658NFE010LOGSTATUSlgnstsdata = gx.date.nullDate() ;
   this.A7659NFE010LOGSTATUSlgnstsseq = 0 ;
   this.Z7659NFE010LOGSTATUSlgnstsseq = 0 ;
   this.O7659NFE010LOGSTATUSlgnstsseq = 0 ;
   this.A7653NFE010LOGSTATUSempcodigo = 0 ;
   this.A7654NFE010LOGSTATUSntfnumero = 0 ;
   this.A7655NFE010LOGSTATUSntfserie = "" ;
   this.A7656NFE010LOGSTATUSlgncodigo = 0 ;
   this.A7657NFE010LOGSTATUSstsretcod = 0 ;
   this.A7658NFE010LOGSTATUSlgnstsdata = gx.date.nullDate() ;
   this.A7659NFE010LOGSTATUSlgnstsseq = 0 ;
   this.Events = {"e11ay579_client": ["ENTER", true] ,"e12ay579_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnfe010logstatus());
