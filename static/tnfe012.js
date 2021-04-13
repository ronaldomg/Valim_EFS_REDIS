/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:18:58.94
*/
gx.evt.autoSkip = false;
gx.define('tnfe012', false, function () {
   this.ServerClass =  "tnfe012" ;
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
   this.Valid_Nfe012cbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE012CBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe012cbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE012CBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe012cbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFE012CBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfe012cbdacao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nfe012cbdacao",["gx.O.A6799NFE012CbdEmpCodigo", "gx.O.A6801NFE012CbdNtfNumero", "gx.O.A6802NFE012CbdNtfSerie", "gx.O.A6797NFE012CbdAcao", "gx.O.A6805NFE012CbdSituacao", 'gx.date.urlDate(gx.O.A6798NFE012CbdDtaProcessamento,"DMY4")', "gx.num.urlDecimal(gx.O.A6803NFE012CbdNumProtocolo,\'.\',\',\')", "gx.O.A6806NFE012CbdStsRetCodigo", "gx.O.A6807NFE012CbdStsRetNome", "gx.O.A6804NFE012CbdProcStatus", "gx.O.A6800NFE012CbdNFEChaAcesso"],["A6805NFE012CbdSituacao", "A6798NFE012CbdDtaProcessamento", "A6803NFE012CbdNumProtocolo", "A6806NFE012CbdStsRetCodigo", "A6807NFE012CbdStsRetNome", "A6804NFE012CbdProcStatus", "A6800NFE012CbdNFEChaAcesso", "Gx_mode", "Z6799NFE012CbdEmpCodigo", "Z6801NFE012CbdNtfNumero", "Z6802NFE012CbdNtfSerie", "Z6797NFE012CbdAcao", "Z6805NFE012CbdSituacao", "Z6798NFE012CbdDtaProcessamento", "Z6803NFE012CbdNumProtocolo", "Z6806NFE012CbdStsRetCodigo", "Z6807NFE012CbdStsRetNome", "Z6804NFE012CbdProcStatus", "Z6800NFE012CbdNFEChaAcesso", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e119w536_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e129w536_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,39,41,44,46,49,51,54,56,59,61,64,66,69,71];
   this.GXLastCtrlId =71;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe012cbdempcodigo,isvalid:null,rgrid:[],fld:"NFE012CBDEMPCODIGO",gxz:"Z6799NFE012CbdEmpCodigo",gxold:"O6799NFE012CbdEmpCodigo",gxvar:"A6799NFE012CbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6799NFE012CbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6799NFE012CbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE012CBDEMPCODIGO",gx.O.A6799NFE012CbdEmpCodigo,0)},c2v:function(){gx.O.A6799NFE012CbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE012CBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe012cbdntfnumero,isvalid:null,rgrid:[],fld:"NFE012CBDNTFNUMERO",gxz:"Z6801NFE012CbdNtfNumero",gxold:"O6801NFE012CbdNtfNumero",gxvar:"A6801NFE012CbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6801NFE012CbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6801NFE012CbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE012CBDNTFNUMERO",gx.O.A6801NFE012CbdNtfNumero,0)},c2v:function(){gx.O.A6801NFE012CbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE012CBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe012cbdntfserie,isvalid:null,rgrid:[],fld:"NFE012CBDNTFSERIE",gxz:"Z6802NFE012CbdNtfSerie",gxold:"O6802NFE012CbdNtfSerie",gxvar:"A6802NFE012CbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6802NFE012CbdNtfSerie=Value},v2z:function(Value){gx.O.Z6802NFE012CbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("NFE012CBDNTFSERIE",gx.O.A6802NFE012CbdNtfSerie,0)},c2v:function(){gx.O.A6802NFE012CbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("NFE012CBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfe012cbdacao,isvalid:null,rgrid:[],fld:"NFE012CBDACAO",gxz:"Z6797NFE012CbdAcao",gxold:"O6797NFE012CbdAcao",gxvar:"A6797NFE012CbdAcao",ucs:[],op:[71,66,61,56,51,46,41],ip:[71,66,61,56,51,46,41,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6797NFE012CbdAcao=Value},v2z:function(Value){gx.O.Z6797NFE012CbdAcao=Value},v2c:function(){gx.fn.setControlValue("NFE012CBDACAO",gx.O.A6797NFE012CbdAcao,0)},c2v:function(){gx.O.A6797NFE012CbdAcao=this.val()},val:function(){return gx.fn.getControlValue("NFE012CBDACAO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE012CBDSITUACAO",gxz:"Z6805NFE012CbdSituacao",gxold:"O6805NFE012CbdSituacao",gxvar:"A6805NFE012CbdSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6805NFE012CbdSituacao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6805NFE012CbdSituacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE012CBDSITUACAO",gx.O.A6805NFE012CbdSituacao,0)},c2v:function(){gx.O.A6805NFE012CbdSituacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE012CBDSITUACAO",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE012CBDDTAPROCESSAMENTO",gxz:"Z6798NFE012CbdDtaProcessamento",gxold:"O6798NFE012CbdDtaProcessamento",gxvar:"A6798NFE012CbdDtaProcessamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6798NFE012CbdDtaProcessamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6798NFE012CbdDtaProcessamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NFE012CBDDTAPROCESSAMENTO",gx.O.A6798NFE012CbdDtaProcessamento,0)},c2v:function(){gx.O.A6798NFE012CbdDtaProcessamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("NFE012CBDDTAPROCESSAMENTO")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE012CBDNUMPROTOCOLO",gxz:"Z6803NFE012CbdNumProtocolo",gxold:"O6803NFE012CbdNumProtocolo",gxvar:"A6803NFE012CbdNumProtocolo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6803NFE012CbdNumProtocolo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6803NFE012CbdNumProtocolo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE012CBDNUMPROTOCOLO",gx.O.A6803NFE012CbdNumProtocolo,0)},c2v:function(){gx.O.A6803NFE012CbdNumProtocolo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE012CBDNUMPROTOCOLO",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE012CBDSTSRETCODIGO",gxz:"Z6806NFE012CbdStsRetCodigo",gxold:"O6806NFE012CbdStsRetCodigo",gxvar:"A6806NFE012CbdStsRetCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6806NFE012CbdStsRetCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6806NFE012CbdStsRetCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFE012CBDSTSRETCODIGO",gx.O.A6806NFE012CbdStsRetCodigo,0)},c2v:function(){gx.O.A6806NFE012CbdStsRetCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFE012CBDSTSRETCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE012CBDSTSRETNOME",gxz:"Z6807NFE012CbdStsRetNome",gxold:"O6807NFE012CbdStsRetNome",gxvar:"A6807NFE012CbdStsRetNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6807NFE012CbdStsRetNome=Value},v2z:function(Value){gx.O.Z6807NFE012CbdStsRetNome=Value},v2c:function(){gx.fn.setControlValue("NFE012CBDSTSRETNOME",gx.O.A6807NFE012CbdStsRetNome,0)},c2v:function(){gx.O.A6807NFE012CbdStsRetNome=this.val()},val:function(){return gx.fn.getControlValue("NFE012CBDSTSRETNOME")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE012CBDPROCSTATUS",gxz:"Z6804NFE012CbdProcStatus",gxold:"O6804NFE012CbdProcStatus",gxvar:"A6804NFE012CbdProcStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6804NFE012CbdProcStatus=Value},v2z:function(Value){gx.O.Z6804NFE012CbdProcStatus=Value},v2c:function(){gx.fn.setControlValue("NFE012CBDPROCSTATUS",gx.O.A6804NFE012CbdProcStatus,0)},c2v:function(){gx.O.A6804NFE012CbdProcStatus=this.val()},val:function(){return gx.fn.getControlValue("NFE012CBDPROCSTATUS")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"char",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFE012CBDNFECHAACESSO",gxz:"Z6800NFE012CbdNFEChaAcesso",gxold:"O6800NFE012CbdNFEChaAcesso",gxvar:"A6800NFE012CbdNFEChaAcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6800NFE012CbdNFEChaAcesso=Value},v2z:function(Value){gx.O.Z6800NFE012CbdNFEChaAcesso=Value},v2c:function(){gx.fn.setControlValue("NFE012CBDNFECHAACESSO",gx.O.A6800NFE012CbdNFEChaAcesso,0)},c2v:function(){gx.O.A6800NFE012CbdNFEChaAcesso=this.val()},val:function(){return gx.fn.getControlValue("NFE012CBDNFECHAACESSO")},nac:gx.falseFn};
   this.A6799NFE012CbdEmpCodigo = 0 ;
   this.Z6799NFE012CbdEmpCodigo = 0 ;
   this.O6799NFE012CbdEmpCodigo = 0 ;
   this.A6801NFE012CbdNtfNumero = 0 ;
   this.Z6801NFE012CbdNtfNumero = 0 ;
   this.O6801NFE012CbdNtfNumero = 0 ;
   this.A6802NFE012CbdNtfSerie = "" ;
   this.Z6802NFE012CbdNtfSerie = "" ;
   this.O6802NFE012CbdNtfSerie = "" ;
   this.A6797NFE012CbdAcao = "" ;
   this.Z6797NFE012CbdAcao = "" ;
   this.O6797NFE012CbdAcao = "" ;
   this.A6805NFE012CbdSituacao = 0 ;
   this.Z6805NFE012CbdSituacao = 0 ;
   this.O6805NFE012CbdSituacao = 0 ;
   this.A6798NFE012CbdDtaProcessamento = gx.date.nullDate() ;
   this.Z6798NFE012CbdDtaProcessamento = gx.date.nullDate() ;
   this.O6798NFE012CbdDtaProcessamento = gx.date.nullDate() ;
   this.A6803NFE012CbdNumProtocolo = 0 ;
   this.Z6803NFE012CbdNumProtocolo = 0 ;
   this.O6803NFE012CbdNumProtocolo = 0 ;
   this.A6806NFE012CbdStsRetCodigo = 0 ;
   this.Z6806NFE012CbdStsRetCodigo = 0 ;
   this.O6806NFE012CbdStsRetCodigo = 0 ;
   this.A6807NFE012CbdStsRetNome = "" ;
   this.Z6807NFE012CbdStsRetNome = "" ;
   this.O6807NFE012CbdStsRetNome = "" ;
   this.A6804NFE012CbdProcStatus = "" ;
   this.Z6804NFE012CbdProcStatus = "" ;
   this.O6804NFE012CbdProcStatus = "" ;
   this.A6800NFE012CbdNFEChaAcesso = "" ;
   this.Z6800NFE012CbdNFEChaAcesso = "" ;
   this.O6800NFE012CbdNFEChaAcesso = "" ;
   this.A6799NFE012CbdEmpCodigo = 0 ;
   this.A6801NFE012CbdNtfNumero = 0 ;
   this.A6802NFE012CbdNtfSerie = "" ;
   this.A6797NFE012CbdAcao = "" ;
   this.A6805NFE012CbdSituacao = 0 ;
   this.A6798NFE012CbdDtaProcessamento = gx.date.nullDate() ;
   this.A6803NFE012CbdNumProtocolo = 0 ;
   this.A6806NFE012CbdStsRetCodigo = 0 ;
   this.A6807NFE012CbdStsRetNome = "" ;
   this.A6804NFE012CbdProcStatus = "" ;
   this.A6800NFE012CbdNFEChaAcesso = "" ;
   this.Events = {"e119w536_client": ["ENTER", true] ,"e129w536_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnfe012());
