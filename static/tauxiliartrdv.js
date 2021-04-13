/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:20:55.30
*/
gx.evt.autoSkip = false;
gx.define('tauxiliartrdv', false, function () {
   this.ServerClass =  "tauxiliartrdv" ;
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
   this.Valid_Auxiliartrdvempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AUXILIARTRDVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Auxiliartrdvtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AUXILIARTRDVTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Auxiliartrdvnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Auxiliartrdvnumero",["gx.O.A7529AuxiliarTrDvEmpresaId", "gx.O.A7530AuxiliarTrDvTipo", "gx.O.A7499AuxiliarTrDvNumero", 'gx.date.urlDate(gx.O.A7509AuxiliarTrDvData,"DMY4")', "gx.O.A7502AuxiliarTrDvFilialEmpId", "gx.O.A7503AuxiliarTrDvFilialId", "gx.O.A7504AuxiliarTrDvCliForEmpId", "gx.O.A7505AuxiliarTrDvCliForId", "gx.O.A7506AuxiliarTrDvTrnSaidaEmpId", "gx.O.A7507AuxiliarTrDvTrnSaidaId", "gx.O.A7500AuxiliarTrDvTrnEntradaEmpId", "gx.O.A7501AuxiliarTrDvTrnEntradaId"],["A7509AuxiliarTrDvData", "A7502AuxiliarTrDvFilialEmpId", "A7503AuxiliarTrDvFilialId", "A7504AuxiliarTrDvCliForEmpId", "A7505AuxiliarTrDvCliForId", "A7506AuxiliarTrDvTrnSaidaEmpId", "A7507AuxiliarTrDvTrnSaidaId", "A7500AuxiliarTrDvTrnEntradaEmpId", "A7501AuxiliarTrDvTrnEntradaId", "Gx_mode", "Z7529AuxiliarTrDvEmpresaId", "Z7530AuxiliarTrDvTipo", "Z7499AuxiliarTrDvNumero", "Z7509AuxiliarTrDvData", "Z7502AuxiliarTrDvFilialEmpId", "Z7503AuxiliarTrDvFilialId", "Z7504AuxiliarTrDvCliForEmpId", "Z7505AuxiliarTrDvCliForId", "Z7506AuxiliarTrDvTrnSaidaEmpId", "Z7507AuxiliarTrDvTrnSaidaId", "Z7500AuxiliarTrDvTrnEntradaEmpId", "Z7501AuxiliarTrDvTrnEntradaId", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11ar570_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12ar570_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ar570_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,71,80,82];
   this.GXLastCtrlId =82;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auxiliartrdvempresaid,isvalid:null,rgrid:[],fld:"AUXILIARTRDVEMPRESAID",gxz:"Z7529AuxiliarTrDvEmpresaId",gxold:"O7529AuxiliarTrDvEmpresaId",gxvar:"A7529AuxiliarTrDvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7529AuxiliarTrDvEmpresaId=Value},v2z:function(Value){gx.O.Z7529AuxiliarTrDvEmpresaId=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVEMPRESAID",gx.O.A7529AuxiliarTrDvEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7529AuxiliarTrDvEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auxiliartrdvtipo,isvalid:null,rgrid:[],fld:"AUXILIARTRDVTIPO",gxz:"Z7530AuxiliarTrDvTipo",gxold:"O7530AuxiliarTrDvTipo",gxvar:"A7530AuxiliarTrDvTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7530AuxiliarTrDvTipo=Value},v2z:function(Value){gx.O.Z7530AuxiliarTrDvTipo=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVTIPO",gx.O.A7530AuxiliarTrDvTipo,0)},c2v:function(){gx.O.A7530AuxiliarTrDvTipo=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVTIPO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auxiliartrdvnumero,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNUMERO",gxz:"Z7499AuxiliarTrDvNumero",gxold:"O7499AuxiliarTrDvNumero",gxvar:"A7499AuxiliarTrDvNumero",ucs:[],op:[70,65,60,55,50,45,40,35,30],ip:[70,65,60,55,50,45,40,35,30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7499AuxiliarTrDvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7499AuxiliarTrDvNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVNUMERO",gx.O.A7499AuxiliarTrDvNumero,0)},c2v:function(){gx.O.A7499AuxiliarTrDvNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDATA",gxz:"Z7509AuxiliarTrDvData",gxold:"O7509AuxiliarTrDvData",gxvar:"A7509AuxiliarTrDvData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7509AuxiliarTrDvData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7509AuxiliarTrDvData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDATA",gx.O.A7509AuxiliarTrDvData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7509AuxiliarTrDvData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("AUXILIARTRDVDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVFILIALEMPID",gxz:"Z7502AuxiliarTrDvFilialEmpId",gxold:"O7502AuxiliarTrDvFilialEmpId",gxvar:"A7502AuxiliarTrDvFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7502AuxiliarTrDvFilialEmpId=Value},v2z:function(Value){gx.O.Z7502AuxiliarTrDvFilialEmpId=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVFILIALEMPID",gx.O.A7502AuxiliarTrDvFilialEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7502AuxiliarTrDvFilialEmpId=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVFILIALEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVFILIALID",gxz:"Z7503AuxiliarTrDvFilialId",gxold:"O7503AuxiliarTrDvFilialId",gxvar:"A7503AuxiliarTrDvFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7503AuxiliarTrDvFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7503AuxiliarTrDvFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVFILIALID",gx.O.A7503AuxiliarTrDvFilialId,0)},c2v:function(){gx.O.A7503AuxiliarTrDvFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVCLIFOREMPID",gxz:"Z7504AuxiliarTrDvCliForEmpId",gxold:"O7504AuxiliarTrDvCliForEmpId",gxvar:"A7504AuxiliarTrDvCliForEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7504AuxiliarTrDvCliForEmpId=Value},v2z:function(Value){gx.O.Z7504AuxiliarTrDvCliForEmpId=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVCLIFOREMPID",gx.O.A7504AuxiliarTrDvCliForEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7504AuxiliarTrDvCliForEmpId=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVCLIFOREMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVCLIFORID",gxz:"Z7505AuxiliarTrDvCliForId",gxold:"O7505AuxiliarTrDvCliForId",gxvar:"A7505AuxiliarTrDvCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7505AuxiliarTrDvCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7505AuxiliarTrDvCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVCLIFORID",gx.O.A7505AuxiliarTrDvCliForId,0)},c2v:function(){gx.O.A7505AuxiliarTrDvCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVTRNSAIDAEMPID",gxz:"Z7506AuxiliarTrDvTrnSaidaEmpId",gxold:"O7506AuxiliarTrDvTrnSaidaEmpId",gxvar:"A7506AuxiliarTrDvTrnSaidaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7506AuxiliarTrDvTrnSaidaEmpId=Value},v2z:function(Value){gx.O.Z7506AuxiliarTrDvTrnSaidaEmpId=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVTRNSAIDAEMPID",gx.O.A7506AuxiliarTrDvTrnSaidaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7506AuxiliarTrDvTrnSaidaEmpId=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVTRNSAIDAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVTRNSAIDAID",gxz:"Z7507AuxiliarTrDvTrnSaidaId",gxold:"O7507AuxiliarTrDvTrnSaidaId",gxvar:"A7507AuxiliarTrDvTrnSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7507AuxiliarTrDvTrnSaidaId=Value},v2z:function(Value){gx.O.Z7507AuxiliarTrDvTrnSaidaId=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVTRNSAIDAID",gx.O.A7507AuxiliarTrDvTrnSaidaId,0)},c2v:function(){gx.O.A7507AuxiliarTrDvTrnSaidaId=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVTRNSAIDAID")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVTRNENTRADAEMPID",gxz:"Z7500AuxiliarTrDvTrnEntradaEmpId",gxold:"O7500AuxiliarTrDvTrnEntradaEmpId",gxvar:"A7500AuxiliarTrDvTrnEntradaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7500AuxiliarTrDvTrnEntradaEmpId=Value},v2z:function(Value){gx.O.Z7500AuxiliarTrDvTrnEntradaEmpId=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVTRNENTRADAEMPID",gx.O.A7500AuxiliarTrDvTrnEntradaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7500AuxiliarTrDvTrnEntradaEmpId=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVTRNENTRADAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVTRNENTRADAID",gxz:"Z7501AuxiliarTrDvTrnEntradaId",gxold:"O7501AuxiliarTrDvTrnEntradaId",gxvar:"A7501AuxiliarTrDvTrnEntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7501AuxiliarTrDvTrnEntradaId=Value},v2z:function(Value){gx.O.Z7501AuxiliarTrDvTrnEntradaId=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVTRNENTRADAID",gx.O.A7501AuxiliarTrDvTrnEntradaId,0)},c2v:function(){gx.O.A7501AuxiliarTrDvTrnEntradaId=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVTRNENTRADAID")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"BTNHELP",grid:0};
   this.A7529AuxiliarTrDvEmpresaId = "" ;
   this.Z7529AuxiliarTrDvEmpresaId = "" ;
   this.O7529AuxiliarTrDvEmpresaId = "" ;
   this.A7530AuxiliarTrDvTipo = "" ;
   this.Z7530AuxiliarTrDvTipo = "" ;
   this.O7530AuxiliarTrDvTipo = "" ;
   this.A7499AuxiliarTrDvNumero = 0 ;
   this.Z7499AuxiliarTrDvNumero = 0 ;
   this.O7499AuxiliarTrDvNumero = 0 ;
   this.A7509AuxiliarTrDvData = gx.date.nullDate() ;
   this.Z7509AuxiliarTrDvData = gx.date.nullDate() ;
   this.O7509AuxiliarTrDvData = gx.date.nullDate() ;
   this.A7502AuxiliarTrDvFilialEmpId = "" ;
   this.Z7502AuxiliarTrDvFilialEmpId = "" ;
   this.O7502AuxiliarTrDvFilialEmpId = "" ;
   this.A7503AuxiliarTrDvFilialId = 0 ;
   this.Z7503AuxiliarTrDvFilialId = 0 ;
   this.O7503AuxiliarTrDvFilialId = 0 ;
   this.A7504AuxiliarTrDvCliForEmpId = "" ;
   this.Z7504AuxiliarTrDvCliForEmpId = "" ;
   this.O7504AuxiliarTrDvCliForEmpId = "" ;
   this.A7505AuxiliarTrDvCliForId = 0 ;
   this.Z7505AuxiliarTrDvCliForId = 0 ;
   this.O7505AuxiliarTrDvCliForId = 0 ;
   this.A7506AuxiliarTrDvTrnSaidaEmpId = "" ;
   this.Z7506AuxiliarTrDvTrnSaidaEmpId = "" ;
   this.O7506AuxiliarTrDvTrnSaidaEmpId = "" ;
   this.A7507AuxiliarTrDvTrnSaidaId = "" ;
   this.Z7507AuxiliarTrDvTrnSaidaId = "" ;
   this.O7507AuxiliarTrDvTrnSaidaId = "" ;
   this.A7500AuxiliarTrDvTrnEntradaEmpId = "" ;
   this.Z7500AuxiliarTrDvTrnEntradaEmpId = "" ;
   this.O7500AuxiliarTrDvTrnEntradaEmpId = "" ;
   this.A7501AuxiliarTrDvTrnEntradaId = "" ;
   this.Z7501AuxiliarTrDvTrnEntradaId = "" ;
   this.O7501AuxiliarTrDvTrnEntradaId = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A7529AuxiliarTrDvEmpresaId = "" ;
   this.A7530AuxiliarTrDvTipo = "" ;
   this.A7499AuxiliarTrDvNumero = 0 ;
   this.A7509AuxiliarTrDvData = gx.date.nullDate() ;
   this.A7502AuxiliarTrDvFilialEmpId = "" ;
   this.A7503AuxiliarTrDvFilialId = 0 ;
   this.A7504AuxiliarTrDvCliForEmpId = "" ;
   this.A7505AuxiliarTrDvCliForId = 0 ;
   this.A7506AuxiliarTrDvTrnSaidaEmpId = "" ;
   this.A7507AuxiliarTrDvTrnSaidaId = "" ;
   this.A7500AuxiliarTrDvTrnEntradaEmpId = "" ;
   this.A7501AuxiliarTrDvTrnEntradaId = "" ;
   this.Events = {"e12ar570_client": ["ENTER", true] ,"e13ar570_client": ["CANCEL", true] ,"e11ar570_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tauxiliartrdv());
