/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:46:17.2
*/
gx.evt.autoSkip = false;
gx.define('tsaidavinculada', false, function () {
   this.ServerClass =  "tsaidavinculada" ;
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
   this.Valid_Saidaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaid",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId"],[]);
      return true;
   }
   this.Valid_Saidavinculadaseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidavinculadaseq",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId", "gx.O.A6306SaidaVinculadaSeq", "gx.O.A6270SaidaVinculadaUsuarioAlt", 'gx.date.urlDateTime(gx.O.A6271SaidaVinculadaDataHoraAlt,"DMY4")', "gx.O.A6268SaidaVinculadaEmpId", "gx.O.A6269SaidaVinculadaId"],["A6268SaidaVinculadaEmpId", "A6269SaidaVinculadaId", "A6270SaidaVinculadaUsuarioAlt", "A6271SaidaVinculadaDataHoraAlt", "Gx_mode", "Z4306SaidaEmpresaId", "Z4307SaidaId", "Z6306SaidaVinculadaSeq", "Z6268SaidaVinculadaEmpId", "Z6269SaidaVinculadaId", "Z6270SaidaVinculadaUsuarioAlt", "Z6271SaidaVinculadaDataHoraAlt", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Saidavinculadaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAVINCULADAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidavinculadaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidavinculadaid",["gx.O.A6268SaidaVinculadaEmpId", "gx.O.A6269SaidaVinculadaId"],[]);
      return true;
   }
   this.e11h1861_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12h1861_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,75,76];
   this.GXLastCtrlId =76;
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
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaempresaid,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SAIDAEMPRESAID",gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDAID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaid,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAID",gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKSAIDAVINCULADASEQ", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidavinculadaseq,isvalid:null,rgrid:[],fld:"SAIDAVINCULADASEQ",gxz:"Z6306SaidaVinculadaSeq",gxold:"O6306SaidaVinculadaSeq",gxvar:"A6306SaidaVinculadaSeq",ucs:[],op:[59,54,69,64],ip:[59,54,69,64,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6306SaidaVinculadaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6306SaidaVinculadaSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAVINCULADASEQ",gx.O.A6306SaidaVinculadaSeq,0)},c2v:function(){gx.O.A6306SaidaVinculadaSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAVINCULADASEQ",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKSAIDAVINCULADAEMPID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidavinculadaempid,isvalid:null,rgrid:[],fld:"SAIDAVINCULADAEMPID",gxz:"Z6268SaidaVinculadaEmpId",gxold:"O6268SaidaVinculadaEmpId",gxvar:"A6268SaidaVinculadaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6268SaidaVinculadaEmpId=Value},v2z:function(Value){gx.O.Z6268SaidaVinculadaEmpId=Value},v2c:function(){gx.fn.setControlValue("SAIDAVINCULADAEMPID",gx.O.A6268SaidaVinculadaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6268SaidaVinculadaEmpId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAVINCULADAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCKSAIDAVINCULADAID", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidavinculadaid,isvalid:null,rgrid:[],fld:"SAIDAVINCULADAID",gxz:"Z6269SaidaVinculadaId",gxold:"O6269SaidaVinculadaId",gxvar:"A6269SaidaVinculadaId",ucs:[],op:[],ip:[59,54],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6269SaidaVinculadaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6269SaidaVinculadaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAVINCULADAID",gx.O.A6269SaidaVinculadaId,0)},c2v:function(){gx.O.A6269SaidaVinculadaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAVINCULADAID",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKSAIDAVINCULADAUSUARIOALT", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAVINCULADAUSUARIOALT",gxz:"Z6270SaidaVinculadaUsuarioAlt",gxold:"O6270SaidaVinculadaUsuarioAlt",gxvar:"A6270SaidaVinculadaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6270SaidaVinculadaUsuarioAlt=Value},v2z:function(Value){gx.O.Z6270SaidaVinculadaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SAIDAVINCULADAUSUARIOALT",gx.O.A6270SaidaVinculadaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6270SaidaVinculadaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SAIDAVINCULADAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKSAIDAVINCULADADATAHORAALT", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAVINCULADADATAHORAALT",gxz:"Z6271SaidaVinculadaDataHoraAlt",gxold:"O6271SaidaVinculadaDataHoraAlt",gxvar:"A6271SaidaVinculadaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6271SaidaVinculadaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6271SaidaVinculadaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAVINCULADADATAHORAALT",gx.O.A6271SaidaVinculadaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6271SaidaVinculadaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SAIDAVINCULADADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[75]={fld:"PROMPT_4306_4307",grid:861};
   GXValidFnc[76]={fld:"PROMPT_6268_6269",grid:861};
   this.A4306SaidaEmpresaId = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.A6306SaidaVinculadaSeq = 0 ;
   this.Z6306SaidaVinculadaSeq = 0 ;
   this.O6306SaidaVinculadaSeq = 0 ;
   this.A6268SaidaVinculadaEmpId = "" ;
   this.Z6268SaidaVinculadaEmpId = "" ;
   this.O6268SaidaVinculadaEmpId = "" ;
   this.A6269SaidaVinculadaId = 0 ;
   this.Z6269SaidaVinculadaId = 0 ;
   this.O6269SaidaVinculadaId = 0 ;
   this.A6270SaidaVinculadaUsuarioAlt = "" ;
   this.Z6270SaidaVinculadaUsuarioAlt = "" ;
   this.O6270SaidaVinculadaUsuarioAlt = "" ;
   this.A6271SaidaVinculadaDataHoraAlt = gx.date.nullDate() ;
   this.Z6271SaidaVinculadaDataHoraAlt = gx.date.nullDate() ;
   this.O6271SaidaVinculadaDataHoraAlt = gx.date.nullDate() ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A6306SaidaVinculadaSeq = 0 ;
   this.A6268SaidaVinculadaEmpId = "" ;
   this.A6269SaidaVinculadaId = 0 ;
   this.A6270SaidaVinculadaUsuarioAlt = "" ;
   this.A6271SaidaVinculadaDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e11h1861_client": ["ENTER", true] ,"e12h1861_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_4306_4307", [39,44]);
   this.setPrompt("PROMPT_6268_6269", [54,59]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidavinculada());
