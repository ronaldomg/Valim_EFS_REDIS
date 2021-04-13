/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:29:49.51
*/
gx.evt.autoSkip = false;
gx.define('tnfe012eventos', false, function () {
   this.ServerClass =  "tnfe012eventos" ;
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
   this.Valid_Cbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbdacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBDACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbdevenseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbdevenseq",["gx.O.A9187CbdEmpCodigo", "gx.O.A9188CbdNtfNumero", "gx.O.A9189CbdNtfSerie", "gx.O.A9191CbdAcao", "gx.O.A9190CbdEvenSeq", "gx.O.A9192CbdEveId", "gx.O.A9193CbdEveStsRetCod", "gx.O.A9194CbdEveStsRetNome", "gx.O.A9195CbdEveProcessamento"],["A9192CbdEveId", "A9193CbdEveStsRetCod", "A9194CbdEveStsRetNome", "A9195CbdEveProcessamento", "Gx_mode", "Z9187CbdEmpCodigo", "Z9188CbdNtfNumero", "Z9189CbdNtfSerie", "Z9191CbdAcao", "Z9190CbdEvenSeq", "Z9192CbdEveId", "Z9193CbdEveStsRetCod", "Z9194CbdEveStsRetNome", "Z9195CbdEveProcessamento", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11d1680_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12d1680_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,44,46,49,51,54,56,59,61,69];
   this.GXLastCtrlId =69;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbdempcodigo,isvalid:null,rgrid:[],fld:"CBDEMPCODIGO",gxz:"Z9187CbdEmpCodigo",gxold:"O9187CbdEmpCodigo",gxvar:"A9187CbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9187CbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9187CbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBDEMPCODIGO",gx.O.A9187CbdEmpCodigo,0)},c2v:function(){gx.O.A9187CbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbdntfnumero,isvalid:null,rgrid:[],fld:"CBDNTFNUMERO",gxz:"Z9188CbdNtfNumero",gxold:"O9188CbdNtfNumero",gxvar:"A9188CbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9188CbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9188CbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBDNTFNUMERO",gx.O.A9188CbdNtfNumero,0)},c2v:function(){gx.O.A9188CbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbdntfserie,isvalid:null,rgrid:[],fld:"CBDNTFSERIE",gxz:"Z9189CbdNtfSerie",gxold:"O9189CbdNtfSerie",gxvar:"A9189CbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9189CbdNtfSerie=Value},v2z:function(Value){gx.O.Z9189CbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBDNTFSERIE",gx.O.A9189CbdNtfSerie,0)},c2v:function(){gx.O.A9189CbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbdacao,isvalid:null,rgrid:[],fld:"CBDACAO",gxz:"Z9191CbdAcao",gxold:"O9191CbdAcao",gxvar:"A9191CbdAcao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9191CbdAcao=Value},v2z:function(Value){gx.O.Z9191CbdAcao=Value},v2c:function(){gx.fn.setControlValue("CBDACAO",gx.O.A9191CbdAcao,0)},c2v:function(){gx.O.A9191CbdAcao=this.val()},val:function(){return gx.fn.getControlValue("CBDACAO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbdevenseq,isvalid:null,rgrid:[],fld:"CBDEVENSEQ",gxz:"Z9190CbdEvenSeq",gxold:"O9190CbdEvenSeq",gxvar:"A9190CbdEvenSeq",ucs:[],op:[61,56,51,46],ip:[61,56,51,46,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9190CbdEvenSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9190CbdEvenSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBDEVENSEQ",gx.O.A9190CbdEvenSeq,0)},c2v:function(){gx.O.A9190CbdEvenSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBDEVENSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:54,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBDEVEID",gxz:"Z9192CbdEveId",gxold:"O9192CbdEveId",gxvar:"A9192CbdEveId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9192CbdEveId=Value},v2z:function(Value){gx.O.Z9192CbdEveId=Value},v2c:function(){gx.fn.setControlValue("CBDEVEID",gx.O.A9192CbdEveId,0)},c2v:function(){gx.O.A9192CbdEveId=this.val()},val:function(){return gx.fn.getControlValue("CBDEVEID")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBDEVESTSRETCOD",gxz:"Z9193CbdEveStsRetCod",gxold:"O9193CbdEveStsRetCod",gxvar:"A9193CbdEveStsRetCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9193CbdEveStsRetCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9193CbdEveStsRetCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBDEVESTSRETCOD",gx.O.A9193CbdEveStsRetCod,0)},c2v:function(){gx.O.A9193CbdEveStsRetCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBDEVESTSRETCOD",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"vchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBDEVESTSRETNOME",gxz:"Z9194CbdEveStsRetNome",gxold:"O9194CbdEveStsRetNome",gxvar:"A9194CbdEveStsRetNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9194CbdEveStsRetNome=Value},v2z:function(Value){gx.O.Z9194CbdEveStsRetNome=Value},v2c:function(){gx.fn.setControlValue("CBDEVESTSRETNOME",gx.O.A9194CbdEveStsRetNome,0)},c2v:function(){gx.O.A9194CbdEveStsRetNome=this.val()},val:function(){return gx.fn.getControlValue("CBDEVESTSRETNOME")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBDEVEPROCESSAMENTO",gxz:"Z9195CbdEveProcessamento",gxold:"O9195CbdEveProcessamento",gxvar:"A9195CbdEveProcessamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9195CbdEveProcessamento=Value},v2z:function(Value){gx.O.Z9195CbdEveProcessamento=Value},v2c:function(){gx.fn.setControlValue("CBDEVEPROCESSAMENTO",gx.O.A9195CbdEveProcessamento,0)},c2v:function(){gx.O.A9195CbdEveProcessamento=this.val()},val:function(){return gx.fn.getControlValue("CBDEVEPROCESSAMENTO")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"PROMPT_9187_9188_9189_9190",grid:680};
   this.A9187CbdEmpCodigo = 0 ;
   this.Z9187CbdEmpCodigo = 0 ;
   this.O9187CbdEmpCodigo = 0 ;
   this.A9188CbdNtfNumero = 0 ;
   this.Z9188CbdNtfNumero = 0 ;
   this.O9188CbdNtfNumero = 0 ;
   this.A9189CbdNtfSerie = "" ;
   this.Z9189CbdNtfSerie = "" ;
   this.O9189CbdNtfSerie = "" ;
   this.A9191CbdAcao = "" ;
   this.Z9191CbdAcao = "" ;
   this.O9191CbdAcao = "" ;
   this.A9190CbdEvenSeq = 0 ;
   this.Z9190CbdEvenSeq = 0 ;
   this.O9190CbdEvenSeq = 0 ;
   this.A9192CbdEveId = "" ;
   this.Z9192CbdEveId = "" ;
   this.O9192CbdEveId = "" ;
   this.A9193CbdEveStsRetCod = 0 ;
   this.Z9193CbdEveStsRetCod = 0 ;
   this.O9193CbdEveStsRetCod = 0 ;
   this.A9194CbdEveStsRetNome = "" ;
   this.Z9194CbdEveStsRetNome = "" ;
   this.O9194CbdEveStsRetNome = "" ;
   this.A9195CbdEveProcessamento = "" ;
   this.Z9195CbdEveProcessamento = "" ;
   this.O9195CbdEveProcessamento = "" ;
   this.A9187CbdEmpCodigo = 0 ;
   this.A9188CbdNtfNumero = 0 ;
   this.A9189CbdNtfSerie = "" ;
   this.A9191CbdAcao = "" ;
   this.A9190CbdEvenSeq = 0 ;
   this.A9192CbdEveId = "" ;
   this.A9193CbdEveStsRetCod = 0 ;
   this.A9194CbdEveStsRetNome = "" ;
   this.A9195CbdEveProcessamento = "" ;
   this.Events = {"e11d1680_client": ["ENTER", true] ,"e12d1680_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_9187_9188_9189_9190", [20,25,30,40]);
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnfe012eventos());
