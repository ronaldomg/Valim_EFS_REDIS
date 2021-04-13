/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:29:45.53
*/
gx.evt.autoSkip = false;
gx.define('terrowebservice', false, function () {
   this.ServerClass =  "terrowebservice" ;
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
   this.Valid_Errowebserviceempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ERROWEBSERVICEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Errowebservicepdv=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ERROWEBSERVICEPDV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Errowebservicesequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Errowebservicesequencia",["gx.O.A9116ErroWebServiceEmpresaId", "gx.O.A9117ErroWebServicePDV", "gx.O.A9118ErroWebServiceSequencia", "gx.O.A9111ErroWebServiceNoVendaFcx", "gx.O.A9112ErroWebServiceMensagem", "gx.O.A9113ErroWebServiceSNCancelado", 'gx.date.urlDate(gx.O.A9114ErroWebServiceData,"DMY4")', "gx.O.A9115ErroWebServiceNoCOO"],["A9111ErroWebServiceNoVendaFcx", "A9112ErroWebServiceMensagem", "A9113ErroWebServiceSNCancelado", "A9114ErroWebServiceData", "A9115ErroWebServiceNoCOO", "Gx_mode", "Z9116ErroWebServiceEmpresaId", "Z9117ErroWebServicePDV", "Z9118ErroWebServiceSequencia", "Z9111ErroWebServiceNoVendaFcx", "Z9112ErroWebServiceMensagem", "Z9113ErroWebServiceSNCancelado", "Z9114ErroWebServiceData", "Z9115ErroWebServiceNoCOO", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11cz677_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12cz677_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,43,45,48,50,51,59,61];
   this.GXLastCtrlId =61;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Errowebserviceempresaid,isvalid:null,rgrid:[],fld:"ERROWEBSERVICEEMPRESAID",gxz:"Z9116ErroWebServiceEmpresaId",gxold:"O9116ErroWebServiceEmpresaId",gxvar:"A9116ErroWebServiceEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9116ErroWebServiceEmpresaId=Value},v2z:function(Value){gx.O.Z9116ErroWebServiceEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ERROWEBSERVICEEMPRESAID",gx.O.A9116ErroWebServiceEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9116ErroWebServiceEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ERROWEBSERVICEEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Errowebservicepdv,isvalid:null,rgrid:[],fld:"ERROWEBSERVICEPDV",gxz:"Z9117ErroWebServicePDV",gxold:"O9117ErroWebServicePDV",gxvar:"A9117ErroWebServicePDV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9117ErroWebServicePDV=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9117ErroWebServicePDV=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ERROWEBSERVICEPDV",gx.O.A9117ErroWebServicePDV,0)},c2v:function(){gx.O.A9117ErroWebServicePDV=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ERROWEBSERVICEPDV",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Errowebservicesequencia,isvalid:null,rgrid:[],fld:"ERROWEBSERVICESEQUENCIA",gxz:"Z9118ErroWebServiceSequencia",gxold:"O9118ErroWebServiceSequencia",gxvar:"A9118ErroWebServiceSequencia",ucs:[],op:[50,45,40,35,30],ip:[50,45,40,35,30,25,20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9118ErroWebServiceSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9118ErroWebServiceSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ERROWEBSERVICESEQUENCIA",gx.O.A9118ErroWebServiceSequencia,0)},c2v:function(){gx.O.A9118ErroWebServiceSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ERROWEBSERVICESEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ERROWEBSERVICENOVENDAFCX",gxz:"Z9111ErroWebServiceNoVendaFcx",gxold:"O9111ErroWebServiceNoVendaFcx",gxvar:"A9111ErroWebServiceNoVendaFcx",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9111ErroWebServiceNoVendaFcx=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9111ErroWebServiceNoVendaFcx=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ERROWEBSERVICENOVENDAFCX",gx.O.A9111ErroWebServiceNoVendaFcx,0)},c2v:function(){gx.O.A9111ErroWebServiceNoVendaFcx=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ERROWEBSERVICENOVENDAFCX",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ERROWEBSERVICEMENSAGEM",gxz:"Z9112ErroWebServiceMensagem",gxold:"O9112ErroWebServiceMensagem",gxvar:"A9112ErroWebServiceMensagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9112ErroWebServiceMensagem=Value},v2z:function(Value){gx.O.Z9112ErroWebServiceMensagem=Value},v2c:function(){gx.fn.setControlValue("ERROWEBSERVICEMENSAGEM",gx.O.A9112ErroWebServiceMensagem,0)},c2v:function(){gx.O.A9112ErroWebServiceMensagem=this.val()},val:function(){return gx.fn.getControlValue("ERROWEBSERVICEMENSAGEM")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ERROWEBSERVICESNCANCELADO",gxz:"Z9113ErroWebServiceSNCancelado",gxold:"O9113ErroWebServiceSNCancelado",gxvar:"A9113ErroWebServiceSNCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9113ErroWebServiceSNCancelado=Value},v2z:function(Value){gx.O.Z9113ErroWebServiceSNCancelado=Value},v2c:function(){gx.fn.setControlValue("ERROWEBSERVICESNCANCELADO",gx.O.A9113ErroWebServiceSNCancelado,0)},c2v:function(){gx.O.A9113ErroWebServiceSNCancelado=this.val()},val:function(){return gx.fn.getControlValue("ERROWEBSERVICESNCANCELADO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ERROWEBSERVICEDATA",gxz:"Z9114ErroWebServiceData",gxold:"O9114ErroWebServiceData",gxvar:"A9114ErroWebServiceData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9114ErroWebServiceData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9114ErroWebServiceData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ERROWEBSERVICEDATA",gx.O.A9114ErroWebServiceData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9114ErroWebServiceData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ERROWEBSERVICEDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ERROWEBSERVICENOCOO",gxz:"Z9115ErroWebServiceNoCOO",gxold:"O9115ErroWebServiceNoCOO",gxvar:"A9115ErroWebServiceNoCOO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9115ErroWebServiceNoCOO=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9115ErroWebServiceNoCOO=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ERROWEBSERVICENOCOO",gx.O.A9115ErroWebServiceNoCOO,0)},c2v:function(){gx.O.A9115ErroWebServiceNoCOO=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ERROWEBSERVICENOCOO",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"BTNHELP",grid:0};
   this.A9116ErroWebServiceEmpresaId = "" ;
   this.Z9116ErroWebServiceEmpresaId = "" ;
   this.O9116ErroWebServiceEmpresaId = "" ;
   this.A9117ErroWebServicePDV = 0 ;
   this.Z9117ErroWebServicePDV = 0 ;
   this.O9117ErroWebServicePDV = 0 ;
   this.A9118ErroWebServiceSequencia = 0 ;
   this.Z9118ErroWebServiceSequencia = 0 ;
   this.O9118ErroWebServiceSequencia = 0 ;
   this.A9111ErroWebServiceNoVendaFcx = 0 ;
   this.Z9111ErroWebServiceNoVendaFcx = 0 ;
   this.O9111ErroWebServiceNoVendaFcx = 0 ;
   this.A9112ErroWebServiceMensagem = "" ;
   this.Z9112ErroWebServiceMensagem = "" ;
   this.O9112ErroWebServiceMensagem = "" ;
   this.A9113ErroWebServiceSNCancelado = "" ;
   this.Z9113ErroWebServiceSNCancelado = "" ;
   this.O9113ErroWebServiceSNCancelado = "" ;
   this.A9114ErroWebServiceData = gx.date.nullDate() ;
   this.Z9114ErroWebServiceData = gx.date.nullDate() ;
   this.O9114ErroWebServiceData = gx.date.nullDate() ;
   this.A9115ErroWebServiceNoCOO = 0 ;
   this.Z9115ErroWebServiceNoCOO = 0 ;
   this.O9115ErroWebServiceNoCOO = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A9116ErroWebServiceEmpresaId = "" ;
   this.A9117ErroWebServicePDV = 0 ;
   this.A9118ErroWebServiceSequencia = 0 ;
   this.A9111ErroWebServiceNoVendaFcx = 0 ;
   this.A9112ErroWebServiceMensagem = "" ;
   this.A9113ErroWebServiceSNCancelado = "" ;
   this.A9114ErroWebServiceData = gx.date.nullDate() ;
   this.A9115ErroWebServiceNoCOO = 0 ;
   this.Events = {"e11cz677_client": ["ENTER", true] ,"e12cz677_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new terrowebservice());
