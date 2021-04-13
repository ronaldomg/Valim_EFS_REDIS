/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:47:42.4
*/
gx.evt.autoSkip = false;
gx.define('tlognfce', false, function () {
   this.ServerClass =  "tlognfce" ;
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
   this.Valid_Lognfceempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOGNFCEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lognfcepdv=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOGNFCEPDV");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lognfcesaidaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOGNFCESAIDAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lognfcesequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lognfcesequencia",["gx.O.A11815LogNFCeEmpresaId", "gx.O.A11816LogNFCePDV", "gx.O.A11817LogNFCeSaidaId", "gx.O.A11818LogNFCeSequencia", "gx.O.A11819LogNFCeSerie", "gx.O.A11820LogNFCeDocumento", "gx.O.A11821LogNFCeTipoErro", 'gx.date.urlDateTime(gx.O.A11822LogNFCeDtHoraAutori,"DMY4")', "gx.O.A11823LogNFCeMensagem"],["A11819LogNFCeSerie", "A11820LogNFCeDocumento", "A11821LogNFCeTipoErro", "A11822LogNFCeDtHoraAutori", "A11823LogNFCeMensagem", "Gx_mode", "Z11815LogNFCeEmpresaId", "Z11816LogNFCePDV", "Z11817LogNFCeSaidaId", "Z11818LogNFCeSequencia", "Z11819LogNFCeSerie", "Z11820LogNFCeDocumento", "Z11821LogNFCeTipoErro", "Z11822LogNFCeDtHoraAutori", "Z11823LogNFCeMensagem", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11h9875_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12h9875_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79];
   this.GXLastCtrlId =79;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKLOGNFCEEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lognfceempresaid,isvalid:null,rgrid:[],fld:"LOGNFCEEMPRESAID",gxz:"Z11815LogNFCeEmpresaId",gxold:"O11815LogNFCeEmpresaId",gxvar:"A11815LogNFCeEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11815LogNFCeEmpresaId=Value},v2z:function(Value){gx.O.Z11815LogNFCeEmpresaId=Value},v2c:function(){gx.fn.setControlValue("LOGNFCEEMPRESAID",gx.O.A11815LogNFCeEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11815LogNFCeEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("LOGNFCEEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKLOGNFCEPDV", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lognfcepdv,isvalid:null,rgrid:[],fld:"LOGNFCEPDV",gxz:"Z11816LogNFCePDV",gxold:"O11816LogNFCePDV",gxvar:"A11816LogNFCePDV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11816LogNFCePDV=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11816LogNFCePDV=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOGNFCEPDV",gx.O.A11816LogNFCePDV,0)},c2v:function(){gx.O.A11816LogNFCePDV=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOGNFCEPDV",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKLOGNFCESAIDAID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lognfcesaidaid,isvalid:null,rgrid:[],fld:"LOGNFCESAIDAID",gxz:"Z11817LogNFCeSaidaId",gxold:"O11817LogNFCeSaidaId",gxvar:"A11817LogNFCeSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11817LogNFCeSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11817LogNFCeSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOGNFCESAIDAID",gx.O.A11817LogNFCeSaidaId,0)},c2v:function(){gx.O.A11817LogNFCeSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOGNFCESAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKLOGNFCESEQUENCIA", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lognfcesequencia,isvalid:null,rgrid:[],fld:"LOGNFCESEQUENCIA",gxz:"Z11818LogNFCeSequencia",gxold:"O11818LogNFCeSequencia",gxvar:"A11818LogNFCeSequencia",ucs:[],op:[79,74,69,64,59],ip:[79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11818LogNFCeSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11818LogNFCeSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOGNFCESEQUENCIA",gx.O.A11818LogNFCeSequencia,0)},c2v:function(){gx.O.A11818LogNFCeSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOGNFCESEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKLOGNFCESERIE", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGNFCESERIE",gxz:"Z11819LogNFCeSerie",gxold:"O11819LogNFCeSerie",gxvar:"A11819LogNFCeSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11819LogNFCeSerie=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11819LogNFCeSerie=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOGNFCESERIE",gx.O.A11819LogNFCeSerie,0)},c2v:function(){gx.O.A11819LogNFCeSerie=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOGNFCESERIE",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKLOGNFCEDOCUMENTO", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGNFCEDOCUMENTO",gxz:"Z11820LogNFCeDocumento",gxold:"O11820LogNFCeDocumento",gxvar:"A11820LogNFCeDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11820LogNFCeDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11820LogNFCeDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOGNFCEDOCUMENTO",gx.O.A11820LogNFCeDocumento,0)},c2v:function(){gx.O.A11820LogNFCeDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOGNFCEDOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKLOGNFCETIPOERRO", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGNFCETIPOERRO",gxz:"Z11821LogNFCeTipoErro",gxold:"O11821LogNFCeTipoErro",gxvar:"A11821LogNFCeTipoErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11821LogNFCeTipoErro=Value},v2z:function(Value){gx.O.Z11821LogNFCeTipoErro=Value},v2c:function(){gx.fn.setControlValue("LOGNFCETIPOERRO",gx.O.A11821LogNFCeTipoErro,0)},c2v:function(){gx.O.A11821LogNFCeTipoErro=this.val()},val:function(){return gx.fn.getControlValue("LOGNFCETIPOERRO")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKLOGNFCEDTHORAAUTORI", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGNFCEDTHORAAUTORI",gxz:"Z11822LogNFCeDtHoraAutori",gxold:"O11822LogNFCeDtHoraAutori",gxvar:"A11822LogNFCeDtHoraAutori",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11822LogNFCeDtHoraAutori=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11822LogNFCeDtHoraAutori=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LOGNFCEDTHORAAUTORI",gx.O.A11822LogNFCeDtHoraAutori,0)},c2v:function(){gx.O.A11822LogNFCeDtHoraAutori=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LOGNFCEDTHORAAUTORI")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKLOGNFCEMENSAGEM", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGNFCEMENSAGEM",gxz:"Z11823LogNFCeMensagem",gxold:"O11823LogNFCeMensagem",gxvar:"A11823LogNFCeMensagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11823LogNFCeMensagem=Value},v2z:function(Value){gx.O.Z11823LogNFCeMensagem=Value},v2c:function(){gx.fn.setControlValue("LOGNFCEMENSAGEM",gx.O.A11823LogNFCeMensagem,0)},c2v:function(){gx.O.A11823LogNFCeMensagem=this.val()},val:function(){return gx.fn.getControlValue("LOGNFCEMENSAGEM")},nac:gx.falseFn};
   this.A11815LogNFCeEmpresaId = "" ;
   this.Z11815LogNFCeEmpresaId = "" ;
   this.O11815LogNFCeEmpresaId = "" ;
   this.A11816LogNFCePDV = 0 ;
   this.Z11816LogNFCePDV = 0 ;
   this.O11816LogNFCePDV = 0 ;
   this.A11817LogNFCeSaidaId = 0 ;
   this.Z11817LogNFCeSaidaId = 0 ;
   this.O11817LogNFCeSaidaId = 0 ;
   this.A11818LogNFCeSequencia = 0 ;
   this.Z11818LogNFCeSequencia = 0 ;
   this.O11818LogNFCeSequencia = 0 ;
   this.A11819LogNFCeSerie = 0 ;
   this.Z11819LogNFCeSerie = 0 ;
   this.O11819LogNFCeSerie = 0 ;
   this.A11820LogNFCeDocumento = 0 ;
   this.Z11820LogNFCeDocumento = 0 ;
   this.O11820LogNFCeDocumento = 0 ;
   this.A11821LogNFCeTipoErro = "" ;
   this.Z11821LogNFCeTipoErro = "" ;
   this.O11821LogNFCeTipoErro = "" ;
   this.A11822LogNFCeDtHoraAutori = gx.date.nullDate() ;
   this.Z11822LogNFCeDtHoraAutori = gx.date.nullDate() ;
   this.O11822LogNFCeDtHoraAutori = gx.date.nullDate() ;
   this.A11823LogNFCeMensagem = "" ;
   this.Z11823LogNFCeMensagem = "" ;
   this.O11823LogNFCeMensagem = "" ;
   this.A11815LogNFCeEmpresaId = "" ;
   this.A11816LogNFCePDV = 0 ;
   this.A11817LogNFCeSaidaId = 0 ;
   this.A11818LogNFCeSequencia = 0 ;
   this.A11819LogNFCeSerie = 0 ;
   this.A11820LogNFCeDocumento = 0 ;
   this.A11821LogNFCeTipoErro = "" ;
   this.A11822LogNFCeDtHoraAutori = gx.date.nullDate() ;
   this.A11823LogNFCeMensagem = "" ;
   this.Events = {"e11h9875_client": ["ENTER", true] ,"e12h9875_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tlognfce());
