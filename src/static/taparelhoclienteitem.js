/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:19:46.98
*/
gx.evt.autoSkip = false;
gx.define('taparelhoclienteitem', false, function () {
   this.ServerClass =  "taparelhoclienteitem" ;
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
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.A9716AparelhoClienteItemContVisita=gx.fn.getControlValue("APARELHOCLIENTEITEMCONTVISITA") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Aparelhoclienteitemapid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTEITEMAPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclienteitemapempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTEITEMAPEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclienteitemitemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTEITEMITEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclienteitemempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclienteitemempid",["gx.O.A9708AparelhoClienteItemEmpId", "gx.O.A9707AparelhoClienteItemItemId"],[]);
      return true;
   }
   this.Valid_Aparelhoclienteitemapcliseqid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTEITEMAPCLISEQID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclienteitempessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHOCLIENTEITEMPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoclienteitempessoaempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Aparelhoclienteitempessoaempid",["gx.O.A9709AparelhoClienteItemApCliSeqId", "gx.O.A9710AparelhoClienteItemPessoaId", "gx.O.A9711AparelhoClienteItemPessoaEmpId", "gx.O.A9706AparelhoClienteItemApEmpId", "gx.O.A9705AparelhoClienteItemApId"],[]);
      return true;
   }
   this.e11dt718_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12dt718_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,19,21,24,26,29,31,34,36,39,41,44,46,56];
   this.GXLastCtrlId =56;
   GXValidFnc[3]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[6]={fld:"TABLEBORDER",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCKAPARELHOCLIENTEITEMAPID", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclienteitemapid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEITEMAPID",gxz:"Z9705AparelhoClienteItemApId",gxold:"O9705AparelhoClienteItemApId",gxvar:"A9705AparelhoClienteItemApId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9705AparelhoClienteItemApId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9705AparelhoClienteItemApId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEITEMAPID",gx.O.A9705AparelhoClienteItemApId,0)},c2v:function(){gx.O.A9705AparelhoClienteItemApId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTEITEMAPID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCKAPARELHOCLIENTEITEMAPEMPID", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclienteitemapempid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEITEMAPEMPID",gxz:"Z9706AparelhoClienteItemApEmpId",gxold:"O9706AparelhoClienteItemApEmpId",gxvar:"A9706AparelhoClienteItemApEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9706AparelhoClienteItemApEmpId=Value},v2z:function(Value){gx.O.Z9706AparelhoClienteItemApEmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEITEMAPEMPID",gx.O.A9706AparelhoClienteItemApEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9706AparelhoClienteItemApEmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTEITEMAPEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCKAPARELHOCLIENTEITEMITEMID", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclienteitemitemid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEITEMITEMID",gxz:"Z9707AparelhoClienteItemItemId",gxold:"O9707AparelhoClienteItemItemId",gxvar:"A9707AparelhoClienteItemItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9707AparelhoClienteItemItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9707AparelhoClienteItemItemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEITEMITEMID",gx.O.A9707AparelhoClienteItemItemId,0)},c2v:function(){gx.O.A9707AparelhoClienteItemItemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTEITEMITEMID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCKAPARELHOCLIENTEITEMEMPID", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclienteitemempid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEITEMEMPID",gxz:"Z9708AparelhoClienteItemEmpId",gxold:"O9708AparelhoClienteItemEmpId",gxvar:"A9708AparelhoClienteItemEmpId",ucs:[],op:[],ip:[21,26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9708AparelhoClienteItemEmpId=Value},v2z:function(Value){gx.O.Z9708AparelhoClienteItemEmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEITEMEMPID",gx.O.A9708AparelhoClienteItemEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9708AparelhoClienteItemEmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTEITEMEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCKAPARELHOCLIENTEITEMAPCLISEQID", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclienteitemapcliseqid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEITEMAPCLISEQID",gxz:"Z9709AparelhoClienteItemApCliSeqId",gxold:"O9709AparelhoClienteItemApCliSeqId",gxvar:"A9709AparelhoClienteItemApCliSeqId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9709AparelhoClienteItemApCliSeqId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9709AparelhoClienteItemApCliSeqId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEITEMAPCLISEQID",gx.O.A9709AparelhoClienteItemApCliSeqId,0)},c2v:function(){gx.O.A9709AparelhoClienteItemApCliSeqId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTEITEMAPCLISEQID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCKAPARELHOCLIENTEITEMPESSOAID", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclienteitempessoaid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEITEMPESSOAID",gxz:"Z9710AparelhoClienteItemPessoaId",gxold:"O9710AparelhoClienteItemPessoaId",gxvar:"A9710AparelhoClienteItemPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9710AparelhoClienteItemPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9710AparelhoClienteItemPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEITEMPESSOAID",gx.O.A9710AparelhoClienteItemPessoaId,0)},c2v:function(){gx.O.A9710AparelhoClienteItemPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTEITEMPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCKAPARELHOCLIENTEITEMPESSOAEMPID", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhoclienteitempessoaempid,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEITEMPESSOAEMPID",gxz:"Z9711AparelhoClienteItemPessoaEmpId",gxold:"O9711AparelhoClienteItemPessoaEmpId",gxvar:"A9711AparelhoClienteItemPessoaEmpId",ucs:[],op:[],ip:[11,16,41,36,31],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9711AparelhoClienteItemPessoaEmpId=Value},v2z:function(Value){gx.O.Z9711AparelhoClienteItemPessoaEmpId=Value},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEITEMPESSOAEMPID",gx.O.A9711AparelhoClienteItemPessoaEmpId,0)},c2v:function(){gx.O.A9711AparelhoClienteItemPessoaEmpId=this.val()},val:function(){return gx.fn.getControlValue("APARELHOCLIENTEITEMPESSOAEMPID")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCKPRAZOMANUTENCAO", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCLIENTEITEMPRAZOMAN",gxz:"Z9715AparelhoClienteItemPrazoMan",gxold:"O9715AparelhoClienteItemPrazoMan",gxvar:"A9715AparelhoClienteItemPrazoMan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9715AparelhoClienteItemPrazoMan=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9715AparelhoClienteItemPrazoMan=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHOCLIENTEITEMPRAZOMAN",gx.O.A9715AparelhoClienteItemPrazoMan,0)},c2v:function(){gx.O.A9715AparelhoClienteItemPrazoMan=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHOCLIENTEITEMPRAZOMAN",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"PROMPT_9708",grid:718};
   this.A9705AparelhoClienteItemApId = 0 ;
   this.Z9705AparelhoClienteItemApId = 0 ;
   this.O9705AparelhoClienteItemApId = 0 ;
   this.A9706AparelhoClienteItemApEmpId = "" ;
   this.Z9706AparelhoClienteItemApEmpId = "" ;
   this.O9706AparelhoClienteItemApEmpId = "" ;
   this.A9707AparelhoClienteItemItemId = 0 ;
   this.Z9707AparelhoClienteItemItemId = 0 ;
   this.O9707AparelhoClienteItemItemId = 0 ;
   this.A9708AparelhoClienteItemEmpId = "" ;
   this.Z9708AparelhoClienteItemEmpId = "" ;
   this.O9708AparelhoClienteItemEmpId = "" ;
   this.A9709AparelhoClienteItemApCliSeqId = 0 ;
   this.Z9709AparelhoClienteItemApCliSeqId = 0 ;
   this.O9709AparelhoClienteItemApCliSeqId = 0 ;
   this.A9710AparelhoClienteItemPessoaId = 0 ;
   this.Z9710AparelhoClienteItemPessoaId = 0 ;
   this.O9710AparelhoClienteItemPessoaId = 0 ;
   this.A9711AparelhoClienteItemPessoaEmpId = "" ;
   this.Z9711AparelhoClienteItemPessoaEmpId = "" ;
   this.O9711AparelhoClienteItemPessoaEmpId = "" ;
   this.A9715AparelhoClienteItemPrazoMan = 0 ;
   this.Z9715AparelhoClienteItemPrazoMan = 0 ;
   this.O9715AparelhoClienteItemPrazoMan = 0 ;
   this.A9705AparelhoClienteItemApId = 0 ;
   this.A9707AparelhoClienteItemItemId = 0 ;
   this.A9709AparelhoClienteItemApCliSeqId = 0 ;
   this.A9710AparelhoClienteItemPessoaId = 0 ;
   this.A9715AparelhoClienteItemPrazoMan = 0 ;
   this.A9706AparelhoClienteItemApEmpId = "" ;
   this.A9708AparelhoClienteItemEmpId = "" ;
   this.A9711AparelhoClienteItemPessoaEmpId = "" ;
   this.Gx_BScreen = 0 ;
   this.A9716AparelhoClienteItemContVisita = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e11dt718_client": ["ENTER", true] ,"e12dt718_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'A9705AparelhoClienteItemApId',fld:'APARELHOCLIENTEITEMAPID',hsh:true},{av:'A9707AparelhoClienteItemItemId',fld:'APARELHOCLIENTEITEMITEMID'},{av:'A9709AparelhoClienteItemApCliSeqId',fld:'APARELHOCLIENTEITEMAPCLISEQID'},{av:'A9710AparelhoClienteItemPessoaId',fld:'APARELHOCLIENTEITEMPESSOAID'},{av:'A9715AparelhoClienteItemPrazoMan',fld:'APARELHOCLIENTEITEMPRAZOMAN'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_9708", [26]);
   this.EnterCtrl = ["BTN_ENTER"];
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("A9716AparelhoClienteItemContVisita", "APARELHOCLIENTEITEMCONTVISITA", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new taparelhoclienteitem());
