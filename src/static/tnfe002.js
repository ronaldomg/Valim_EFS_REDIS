/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:21:10.31
*/
gx.evt.autoSkip = false;
gx.define('tnfe002', false, function () {
   this.ServerClass =  "tnfe002" ;
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
   this.Valid_Nfe002logdata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE002LOGDATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe002logsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nfe002logsequencia",['gx.date.urlDateTime(gx.O.A7641NFE002logdata,"DMY4")', "gx.O.A7642NFE002logsequencia", "gx.O.A7643NFE002logorigem", "gx.O.A7644NFE002logerrcategoria", "gx.O.A7645NFE002logerrcode", "gx.O.A7646NFE002logerrdescricao", "gx.O.A7647NFE002logempcodigo", "gx.O.A7648NFE002loglteid", "gx.O.A7649NFE002lognfenumero", "gx.O.A7650NFE002lognfeserie", "gx.O.A7651NFE002lognomtela", "gx.O.A7652NFE002logcnpjemit"],["A7643NFE002logorigem", "A7644NFE002logerrcategoria", "A7645NFE002logerrcode", "A7646NFE002logerrdescricao", "A7647NFE002logempcodigo", "A7648NFE002loglteid", "A7649NFE002lognfenumero", "A7650NFE002lognfeserie", "A7651NFE002lognomtela", "A7652NFE002logcnpjemit", "Gx_mode", "Z7641NFE002logdata", "Z7642NFE002logsequencia", "Z7643NFE002logorigem", "Z7644NFE002logerrcategoria", "Z7645NFE002logerrcode", "Z7646NFE002logerrdescricao", "Z7647NFE002logempcodigo", "Z7648NFE002loglteid", "Z7649NFE002lognfenumero", "Z7650NFE002lognfeserie", "Z7651NFE002lognomtela", "Z7652NFE002logcnpjemit", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11ax578_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ax578_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,29,31,34,36,39,41,44,46,49,51,54,56,59,61,64,66,69,71,74,76];
   this.GXLastCtrlId =76;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"dtime",len:10,dec:8,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe002logdata,isvalid:null,rgrid:[],fld:"NFE002LOGDATA",gxz:"Z7641NFE002logdata",gxold:"O7641NFE002logdata",gxvar:"A7641NFE002logdata",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7641NFE002logdata=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7641NFE002logdata=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NFE002LOGDATA",gx.O.A7641NFE002logdata,0)},c2v:function(){gx.O.A7641NFE002logdata=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NFE002LOGDATA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe002logsequencia,isvalid:null,rgrid:[],fld:"NFE002LOGSEQUENCIA",gxz:"Z7642NFE002logsequencia",gxold:"O7642NFE002logsequencia",gxvar:"A7642NFE002logsequencia",ucs:[],op:[76,71,66,61,56,51,46,41,36,31],ip:[76,71,66,61,56,51,46,41,36,31,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7642NFE002logsequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7642NFE002logsequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE002LOGSEQUENCIA",gx.O.A7642NFE002logsequencia,0)},c2v:function(){gx.O.A7642NFE002logsequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE002LOGSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE002LOGORIGEM",gxz:"Z7643NFE002logorigem",gxold:"O7643NFE002logorigem",gxvar:"A7643NFE002logorigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7643NFE002logorigem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7643NFE002logorigem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE002LOGORIGEM",gx.O.A7643NFE002logorigem,0)},c2v:function(){gx.O.A7643NFE002logorigem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE002LOGORIGEM",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE002LOGERRCATEGORIA",gxz:"Z7644NFE002logerrcategoria",gxold:"O7644NFE002logerrcategoria",gxvar:"A7644NFE002logerrcategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7644NFE002logerrcategoria=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7644NFE002logerrcategoria=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE002LOGERRCATEGORIA",gx.O.A7644NFE002logerrcategoria,0)},c2v:function(){gx.O.A7644NFE002logerrcategoria=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE002LOGERRCATEGORIA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE002LOGERRCODE",gxz:"Z7645NFE002logerrcode",gxold:"O7645NFE002logerrcode",gxvar:"A7645NFE002logerrcode",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7645NFE002logerrcode=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7645NFE002logerrcode=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE002LOGERRCODE",gx.O.A7645NFE002logerrcode,0)},c2v:function(){gx.O.A7645NFE002logerrcode=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE002LOGERRCODE",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE002LOGERRDESCRICAO",gxz:"Z7646NFE002logerrdescricao",gxold:"O7646NFE002logerrdescricao",gxvar:"A7646NFE002logerrdescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7646NFE002logerrdescricao=Value},v2z:function(Value){gx.O.Z7646NFE002logerrdescricao=Value},v2c:function(){gx.fn.setControlValue("NFE002LOGERRDESCRICAO",gx.O.A7646NFE002logerrdescricao,0)},c2v:function(){gx.O.A7646NFE002logerrdescricao=this.val()},val:function(){return gx.fn.getControlValue("NFE002LOGERRDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE002LOGEMPCODIGO",gxz:"Z7647NFE002logempcodigo",gxold:"O7647NFE002logempcodigo",gxvar:"A7647NFE002logempcodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7647NFE002logempcodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7647NFE002logempcodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE002LOGEMPCODIGO",gx.O.A7647NFE002logempcodigo,0)},c2v:function(){gx.O.A7647NFE002logempcodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE002LOGEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE002LOGLTEID",gxz:"Z7648NFE002loglteid",gxold:"O7648NFE002loglteid",gxvar:"A7648NFE002loglteid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7648NFE002loglteid=Value},v2z:function(Value){gx.O.Z7648NFE002loglteid=Value},v2c:function(){gx.fn.setControlValue("NFE002LOGLTEID",gx.O.A7648NFE002loglteid,0)},c2v:function(){gx.O.A7648NFE002loglteid=this.val()},val:function(){return gx.fn.getControlValue("NFE002LOGLTEID")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE002LOGNFENUMERO",gxz:"Z7649NFE002lognfenumero",gxold:"O7649NFE002lognfenumero",gxvar:"A7649NFE002lognfenumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7649NFE002lognfenumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7649NFE002lognfenumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE002LOGNFENUMERO",gx.O.A7649NFE002lognfenumero,0)},c2v:function(){gx.O.A7649NFE002lognfenumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE002LOGNFENUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE002LOGNFESERIE",gxz:"Z7650NFE002lognfeserie",gxold:"O7650NFE002lognfeserie",gxvar:"A7650NFE002lognfeserie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7650NFE002lognfeserie=Value},v2z:function(Value){gx.O.Z7650NFE002lognfeserie=Value},v2c:function(){gx.fn.setControlValue("NFE002LOGNFESERIE",gx.O.A7650NFE002lognfeserie,0)},c2v:function(){gx.O.A7650NFE002lognfeserie=this.val()},val:function(){return gx.fn.getControlValue("NFE002LOGNFESERIE")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"svchar",len:61,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE002LOGNOMTELA",gxz:"Z7651NFE002lognomtela",gxold:"O7651NFE002lognomtela",gxvar:"A7651NFE002lognomtela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7651NFE002lognomtela=Value},v2z:function(Value){gx.O.Z7651NFE002lognomtela=Value},v2c:function(){gx.fn.setControlValue("NFE002LOGNOMTELA",gx.O.A7651NFE002lognomtela,0)},c2v:function(){gx.O.A7651NFE002lognomtela=this.val()},val:function(){return gx.fn.getControlValue("NFE002LOGNOMTELA")},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE002LOGCNPJEMIT",gxz:"Z7652NFE002logcnpjemit",gxold:"O7652NFE002logcnpjemit",gxvar:"A7652NFE002logcnpjemit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7652NFE002logcnpjemit=Value},v2z:function(Value){gx.O.Z7652NFE002logcnpjemit=Value},v2c:function(){gx.fn.setControlValue("NFE002LOGCNPJEMIT",gx.O.A7652NFE002logcnpjemit,0)},c2v:function(){gx.O.A7652NFE002logcnpjemit=this.val()},val:function(){return gx.fn.getControlValue("NFE002LOGCNPJEMIT")},nac:gx.falseFn};
   this.A7641NFE002logdata = gx.date.nullDate() ;
   this.Z7641NFE002logdata = gx.date.nullDate() ;
   this.O7641NFE002logdata = gx.date.nullDate() ;
   this.A7642NFE002logsequencia = 0 ;
   this.Z7642NFE002logsequencia = 0 ;
   this.O7642NFE002logsequencia = 0 ;
   this.A7643NFE002logorigem = 0 ;
   this.Z7643NFE002logorigem = 0 ;
   this.O7643NFE002logorigem = 0 ;
   this.A7644NFE002logerrcategoria = 0 ;
   this.Z7644NFE002logerrcategoria = 0 ;
   this.O7644NFE002logerrcategoria = 0 ;
   this.A7645NFE002logerrcode = 0 ;
   this.Z7645NFE002logerrcode = 0 ;
   this.O7645NFE002logerrcode = 0 ;
   this.A7646NFE002logerrdescricao = "" ;
   this.Z7646NFE002logerrdescricao = "" ;
   this.O7646NFE002logerrdescricao = "" ;
   this.A7647NFE002logempcodigo = 0 ;
   this.Z7647NFE002logempcodigo = 0 ;
   this.O7647NFE002logempcodigo = 0 ;
   this.A7648NFE002loglteid = "" ;
   this.Z7648NFE002loglteid = "" ;
   this.O7648NFE002loglteid = "" ;
   this.A7649NFE002lognfenumero = 0 ;
   this.Z7649NFE002lognfenumero = 0 ;
   this.O7649NFE002lognfenumero = 0 ;
   this.A7650NFE002lognfeserie = "" ;
   this.Z7650NFE002lognfeserie = "" ;
   this.O7650NFE002lognfeserie = "" ;
   this.A7651NFE002lognomtela = "" ;
   this.Z7651NFE002lognomtela = "" ;
   this.O7651NFE002lognomtela = "" ;
   this.A7652NFE002logcnpjemit = "" ;
   this.Z7652NFE002logcnpjemit = "" ;
   this.O7652NFE002logcnpjemit = "" ;
   this.A7641NFE002logdata = gx.date.nullDate() ;
   this.A7642NFE002logsequencia = 0 ;
   this.A7643NFE002logorigem = 0 ;
   this.A7644NFE002logerrcategoria = 0 ;
   this.A7645NFE002logerrcode = 0 ;
   this.A7646NFE002logerrdescricao = "" ;
   this.A7647NFE002logempcodigo = 0 ;
   this.A7648NFE002loglteid = "" ;
   this.A7649NFE002lognfenumero = 0 ;
   this.A7650NFE002lognfeserie = "" ;
   this.A7651NFE002lognomtela = "" ;
   this.A7652NFE002logcnpjemit = "" ;
   this.Events = {"e11ax578_client": ["ENTER", true] ,"e12ax578_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnfe002());
