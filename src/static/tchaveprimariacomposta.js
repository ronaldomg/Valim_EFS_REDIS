/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:10:29.12
*/
gx.evt.autoSkip = false;
gx.define('tchaveprimariacomposta', false, function () {
   this.ServerClass =  "tchaveprimariacomposta" ;
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
   this.Valid_Chaveprimariacompostatabela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CHAVEPRIMARIACOMPOSTATABELA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Chaveprimariacompostaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CHAVEPRIMARIACOMPOSTAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Chaveprimariacompostaid1=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Chaveprimariacompostaid1",["gx.O.A5554ChavePrimariaCompostaTabela", "gx.O.A5555ChavePrimariaCompostaEmpresaId", "gx.O.A5556ChavePrimariaCompostaId1", "gx.O.A5557ChavePrimariaCompostaId2"],["A5557ChavePrimariaCompostaId2", "Gx_mode", "Z5554ChavePrimariaCompostaTabela", "Z5555ChavePrimariaCompostaEmpresaId", "Z5556ChavePrimariaCompostaId1", "Z5557ChavePrimariaCompostaId2", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e118w476_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e128w476_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e138w476_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,31,40,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Chaveprimariacompostatabela,isvalid:null,rgrid:[],fld:"CHAVEPRIMARIACOMPOSTATABELA",gxz:"Z5554ChavePrimariaCompostaTabela",gxold:"O5554ChavePrimariaCompostaTabela",gxvar:"A5554ChavePrimariaCompostaTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5554ChavePrimariaCompostaTabela=Value},v2z:function(Value){gx.O.Z5554ChavePrimariaCompostaTabela=Value},v2c:function(){gx.fn.setControlValue("CHAVEPRIMARIACOMPOSTATABELA",gx.O.A5554ChavePrimariaCompostaTabela,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5554ChavePrimariaCompostaTabela=this.val()},val:function(){return gx.fn.getControlValue("CHAVEPRIMARIACOMPOSTATABELA")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Chaveprimariacompostaempresaid,isvalid:null,rgrid:[],fld:"CHAVEPRIMARIACOMPOSTAEMPRESAID",gxz:"Z5555ChavePrimariaCompostaEmpresaId",gxold:"O5555ChavePrimariaCompostaEmpresaId",gxvar:"A5555ChavePrimariaCompostaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5555ChavePrimariaCompostaEmpresaId=Value},v2z:function(Value){gx.O.Z5555ChavePrimariaCompostaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("CHAVEPRIMARIACOMPOSTAEMPRESAID",gx.O.A5555ChavePrimariaCompostaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5555ChavePrimariaCompostaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("CHAVEPRIMARIACOMPOSTAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Chaveprimariacompostaid1,isvalid:null,rgrid:[],fld:"CHAVEPRIMARIACOMPOSTAID1",gxz:"Z5556ChavePrimariaCompostaId1",gxold:"O5556ChavePrimariaCompostaId1",gxvar:"A5556ChavePrimariaCompostaId1",ucs:[],op:[30],ip:[30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5556ChavePrimariaCompostaId1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5556ChavePrimariaCompostaId1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CHAVEPRIMARIACOMPOSTAID1",gx.O.A5556ChavePrimariaCompostaId1,0)},c2v:function(){gx.O.A5556ChavePrimariaCompostaId1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CHAVEPRIMARIACOMPOSTAID1",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CHAVEPRIMARIACOMPOSTAID2",gxz:"Z5557ChavePrimariaCompostaId2",gxold:"O5557ChavePrimariaCompostaId2",gxvar:"A5557ChavePrimariaCompostaId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5557ChavePrimariaCompostaId2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5557ChavePrimariaCompostaId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CHAVEPRIMARIACOMPOSTAID2",gx.O.A5557ChavePrimariaCompostaId2,0)},c2v:function(){gx.O.A5557ChavePrimariaCompostaId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CHAVEPRIMARIACOMPOSTAID2",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.A5554ChavePrimariaCompostaTabela = "" ;
   this.Z5554ChavePrimariaCompostaTabela = "" ;
   this.O5554ChavePrimariaCompostaTabela = "" ;
   this.A5555ChavePrimariaCompostaEmpresaId = "" ;
   this.Z5555ChavePrimariaCompostaEmpresaId = "" ;
   this.O5555ChavePrimariaCompostaEmpresaId = "" ;
   this.A5556ChavePrimariaCompostaId1 = 0 ;
   this.Z5556ChavePrimariaCompostaId1 = 0 ;
   this.O5556ChavePrimariaCompostaId1 = 0 ;
   this.A5557ChavePrimariaCompostaId2 = 0 ;
   this.Z5557ChavePrimariaCompostaId2 = 0 ;
   this.O5557ChavePrimariaCompostaId2 = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A5554ChavePrimariaCompostaTabela = "" ;
   this.A5555ChavePrimariaCompostaEmpresaId = "" ;
   this.A5556ChavePrimariaCompostaId1 = 0 ;
   this.A5557ChavePrimariaCompostaId2 = 0 ;
   this.Events = {"e128w476_client": ["ENTER", true] ,"e138w476_client": ["CANCEL", true] ,"e118w476_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tchaveprimariacomposta());
