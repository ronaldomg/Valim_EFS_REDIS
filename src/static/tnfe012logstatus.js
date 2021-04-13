/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:18:57.6
*/
gx.evt.autoSkip = false;
gx.define('tnfe012logstatus', false, function () {
   this.ServerClass =  "tnfe012logstatus" ;
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
   this.Valid_Nfe012logstatuscbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE012LOGSTATUSCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe012logstatuscbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE012LOGSTATUSCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe012logstatuscbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE012LOGSTATUSCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe012logstatuscbdacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE012LOGSTATUSCBDACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe012logstatuscbdstsretcod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE012LOGSTATUSCBDSTSRETCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe012logstatuscbdlgnstsseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nfe012logstatuscbdlgnstsseq",["gx.O.A6790NFE012LOGSTATUSCbdEmpCodigo", "gx.O.A6794NFE012LOGSTATUSCbdNtfNumero", "gx.O.A6795NFE012LOGSTATUSCbdNtfSerie", "gx.O.A6789NFE012LOGSTATUSCbdAcao", "gx.O.A6796NFE012LOGSTATUSCbdStsRetCod", "gx.O.A6793NFE012LOGSTATUSCbdLgnStsSeq", 'gx.date.urlDateTime(gx.O.A6791NFE012LOGSTATUSCbdLgnStsData,"DMY4")', "gx.O.A6792NFE012LOGSTATUSCbdLgnStsRetNom"],["A6791NFE012LOGSTATUSCbdLgnStsData", "A6792NFE012LOGSTATUSCbdLgnStsRetNom", "Gx_mode", "Z6790NFE012LOGSTATUSCbdEmpCodigo", "Z6794NFE012LOGSTATUSCbdNtfNumero", "Z6795NFE012LOGSTATUSCbdNtfSerie", "Z6789NFE012LOGSTATUSCbdAcao", "Z6796NFE012LOGSTATUSCbdStsRetCod", "Z6793NFE012LOGSTATUSCbdLgnStsSeq", "Z6791NFE012LOGSTATUSCbdLgnStsData", "Z6792NFE012LOGSTATUSCbdLgnStsRetNom", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e119v535_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e129v535_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,43,45,49,51,54,56];
   this.GXLastCtrlId =56;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe012logstatuscbdempcodigo,isvalid:null,rgrid:[],fld:"NFE012LOGSTATUSCBDEMPCODIGO",gxz:"Z6790NFE012LOGSTATUSCbdEmpCodigo",gxold:"O6790NFE012LOGSTATUSCbdEmpCodigo",gxvar:"A6790NFE012LOGSTATUSCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6790NFE012LOGSTATUSCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6790NFE012LOGSTATUSCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE012LOGSTATUSCBDEMPCODIGO",gx.O.A6790NFE012LOGSTATUSCbdEmpCodigo,0)},c2v:function(){gx.O.A6790NFE012LOGSTATUSCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE012LOGSTATUSCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe012logstatuscbdntfnumero,isvalid:null,rgrid:[],fld:"NFE012LOGSTATUSCBDNTFNUMERO",gxz:"Z6794NFE012LOGSTATUSCbdNtfNumero",gxold:"O6794NFE012LOGSTATUSCbdNtfNumero",gxvar:"A6794NFE012LOGSTATUSCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6794NFE012LOGSTATUSCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6794NFE012LOGSTATUSCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE012LOGSTATUSCBDNTFNUMERO",gx.O.A6794NFE012LOGSTATUSCbdNtfNumero,0)},c2v:function(){gx.O.A6794NFE012LOGSTATUSCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE012LOGSTATUSCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe012logstatuscbdntfserie,isvalid:null,rgrid:[],fld:"NFE012LOGSTATUSCBDNTFSERIE",gxz:"Z6795NFE012LOGSTATUSCbdNtfSerie",gxold:"O6795NFE012LOGSTATUSCbdNtfSerie",gxvar:"A6795NFE012LOGSTATUSCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6795NFE012LOGSTATUSCbdNtfSerie=Value},v2z:function(Value){gx.O.Z6795NFE012LOGSTATUSCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("NFE012LOGSTATUSCBDNTFSERIE",gx.O.A6795NFE012LOGSTATUSCbdNtfSerie,0)},c2v:function(){gx.O.A6795NFE012LOGSTATUSCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("NFE012LOGSTATUSCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe012logstatuscbdacao,isvalid:null,rgrid:[],fld:"NFE012LOGSTATUSCBDACAO",gxz:"Z6789NFE012LOGSTATUSCbdAcao",gxold:"O6789NFE012LOGSTATUSCbdAcao",gxvar:"A6789NFE012LOGSTATUSCbdAcao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6789NFE012LOGSTATUSCbdAcao=Value},v2z:function(Value){gx.O.Z6789NFE012LOGSTATUSCbdAcao=Value},v2c:function(){gx.fn.setControlValue("NFE012LOGSTATUSCBDACAO",gx.O.A6789NFE012LOGSTATUSCbdAcao,0)},c2v:function(){gx.O.A6789NFE012LOGSTATUSCbdAcao=this.val()},val:function(){return gx.fn.getControlValue("NFE012LOGSTATUSCBDACAO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe012logstatuscbdstsretcod,isvalid:null,rgrid:[],fld:"NFE012LOGSTATUSCBDSTSRETCOD",gxz:"Z6796NFE012LOGSTATUSCbdStsRetCod",gxold:"O6796NFE012LOGSTATUSCbdStsRetCod",gxvar:"A6796NFE012LOGSTATUSCbdStsRetCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6796NFE012LOGSTATUSCbdStsRetCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6796NFE012LOGSTATUSCbdStsRetCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE012LOGSTATUSCBDSTSRETCOD",gx.O.A6796NFE012LOGSTATUSCbdStsRetCod,0)},c2v:function(){gx.O.A6796NFE012LOGSTATUSCbdStsRetCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE012LOGSTATUSCBDSTSRETCOD",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe012logstatuscbdlgnstsseq,isvalid:null,rgrid:[],fld:"NFE012LOGSTATUSCBDLGNSTSSEQ",gxz:"Z6793NFE012LOGSTATUSCbdLgnStsSeq",gxold:"O6793NFE012LOGSTATUSCbdLgnStsSeq",gxvar:"A6793NFE012LOGSTATUSCbdLgnStsSeq",ucs:[],op:[56,51],ip:[56,51,45,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6793NFE012LOGSTATUSCbdLgnStsSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6793NFE012LOGSTATUSCbdLgnStsSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE012LOGSTATUSCBDLGNSTSSEQ",gx.O.A6793NFE012LOGSTATUSCbdLgnStsSeq,0)},c2v:function(){gx.O.A6793NFE012LOGSTATUSCbdLgnStsSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE012LOGSTATUSCBDLGNSTSSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE012LOGSTATUSCBDLGNSTSDATA",gxz:"Z6791NFE012LOGSTATUSCbdLgnStsData",gxold:"O6791NFE012LOGSTATUSCbdLgnStsData",gxvar:"A6791NFE012LOGSTATUSCbdLgnStsData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6791NFE012LOGSTATUSCbdLgnStsData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6791NFE012LOGSTATUSCbdLgnStsData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NFE012LOGSTATUSCBDLGNSTSDATA",gx.O.A6791NFE012LOGSTATUSCbdLgnStsData,0)},c2v:function(){gx.O.A6791NFE012LOGSTATUSCbdLgnStsData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NFE012LOGSTATUSCBDLGNSTSDATA")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:255,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE012LOGSTATUSCBDLGNSTSRETNOM",gxz:"Z6792NFE012LOGSTATUSCbdLgnStsRetNom",gxold:"O6792NFE012LOGSTATUSCbdLgnStsRetNom",gxvar:"A6792NFE012LOGSTATUSCbdLgnStsRetNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6792NFE012LOGSTATUSCbdLgnStsRetNom=Value},v2z:function(Value){gx.O.Z6792NFE012LOGSTATUSCbdLgnStsRetNom=Value},v2c:function(){gx.fn.setControlValue("NFE012LOGSTATUSCBDLGNSTSRETNOM",gx.O.A6792NFE012LOGSTATUSCbdLgnStsRetNom,0)},c2v:function(){gx.O.A6792NFE012LOGSTATUSCbdLgnStsRetNom=this.val()},val:function(){return gx.fn.getControlValue("NFE012LOGSTATUSCBDLGNSTSRETNOM")},nac:gx.falseFn};
   this.A6790NFE012LOGSTATUSCbdEmpCodigo = 0 ;
   this.Z6790NFE012LOGSTATUSCbdEmpCodigo = 0 ;
   this.O6790NFE012LOGSTATUSCbdEmpCodigo = 0 ;
   this.A6794NFE012LOGSTATUSCbdNtfNumero = 0 ;
   this.Z6794NFE012LOGSTATUSCbdNtfNumero = 0 ;
   this.O6794NFE012LOGSTATUSCbdNtfNumero = 0 ;
   this.A6795NFE012LOGSTATUSCbdNtfSerie = "" ;
   this.Z6795NFE012LOGSTATUSCbdNtfSerie = "" ;
   this.O6795NFE012LOGSTATUSCbdNtfSerie = "" ;
   this.A6789NFE012LOGSTATUSCbdAcao = "" ;
   this.Z6789NFE012LOGSTATUSCbdAcao = "" ;
   this.O6789NFE012LOGSTATUSCbdAcao = "" ;
   this.A6796NFE012LOGSTATUSCbdStsRetCod = 0 ;
   this.Z6796NFE012LOGSTATUSCbdStsRetCod = 0 ;
   this.O6796NFE012LOGSTATUSCbdStsRetCod = 0 ;
   this.A6793NFE012LOGSTATUSCbdLgnStsSeq = 0 ;
   this.Z6793NFE012LOGSTATUSCbdLgnStsSeq = 0 ;
   this.O6793NFE012LOGSTATUSCbdLgnStsSeq = 0 ;
   this.A6791NFE012LOGSTATUSCbdLgnStsData = gx.date.nullDate() ;
   this.Z6791NFE012LOGSTATUSCbdLgnStsData = gx.date.nullDate() ;
   this.O6791NFE012LOGSTATUSCbdLgnStsData = gx.date.nullDate() ;
   this.A6792NFE012LOGSTATUSCbdLgnStsRetNom = "" ;
   this.Z6792NFE012LOGSTATUSCbdLgnStsRetNom = "" ;
   this.O6792NFE012LOGSTATUSCbdLgnStsRetNom = "" ;
   this.A6790NFE012LOGSTATUSCbdEmpCodigo = 0 ;
   this.A6794NFE012LOGSTATUSCbdNtfNumero = 0 ;
   this.A6795NFE012LOGSTATUSCbdNtfSerie = "" ;
   this.A6789NFE012LOGSTATUSCbdAcao = "" ;
   this.A6796NFE012LOGSTATUSCbdStsRetCod = 0 ;
   this.A6793NFE012LOGSTATUSCbdLgnStsSeq = 0 ;
   this.A6791NFE012LOGSTATUSCbdLgnStsData = gx.date.nullDate() ;
   this.A6792NFE012LOGSTATUSCbdLgnStsRetNom = "" ;
   this.Events = {"e119v535_client": ["ENTER", true] ,"e129v535_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnfe012logstatus());
