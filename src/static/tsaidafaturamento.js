/**@preserve  GeneXus Java 10_3_12-110051 on July 25, 2020 8:49:47.41
*/
gx.evt.autoSkip = false;
gx.define('tsaidafaturamento', false, function () {
   this.ServerClass =  "tsaidafaturamento" ;
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
   this.Valid_Saidafaturamentonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAFATURAMENTONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidafaturamentoseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidafaturamentoseq",["gx.O.A11761SaidaFaturamentoNumero", "gx.O.A11762SaidaFaturamentoSeq", "gx.O.A11763SaidaFaturamentoEmpId", "gx.O.A11764SaidaFaturamentoId", "gx.O.A11765SaidaFaturamentoItem", "gx.O.A11766SaidaFaturamentoTipo"],["A11763SaidaFaturamentoEmpId", "A11764SaidaFaturamentoId", "A11765SaidaFaturamentoItem", "A11766SaidaFaturamentoTipo", "Gx_mode", "Z11761SaidaFaturamentoNumero", "Z11762SaidaFaturamentoSeq", "Z11763SaidaFaturamentoEmpId", "Z11764SaidaFaturamentoId", "Z11765SaidaFaturamentoItem", "Z11766SaidaFaturamentoTipo", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11h6869_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12h6869_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64];
   this.GXLastCtrlId =64;
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
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDAFATURAMENTONUMERO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidafaturamentonumero,isvalid:null,rgrid:[],fld:"SAIDAFATURAMENTONUMERO",gxz:"Z11761SaidaFaturamentoNumero",gxold:"O11761SaidaFaturamentoNumero",gxvar:"A11761SaidaFaturamentoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11761SaidaFaturamentoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11761SaidaFaturamentoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAFATURAMENTONUMERO",gx.O.A11761SaidaFaturamentoNumero,0)},c2v:function(){gx.O.A11761SaidaFaturamentoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAFATURAMENTONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDAFATURAMENTOSEQ", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidafaturamentoseq,isvalid:null,rgrid:[],fld:"SAIDAFATURAMENTOSEQ",gxz:"Z11762SaidaFaturamentoSeq",gxold:"O11762SaidaFaturamentoSeq",gxvar:"A11762SaidaFaturamentoSeq",ucs:[],op:[64,59,54,49],ip:[64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11762SaidaFaturamentoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11762SaidaFaturamentoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAFATURAMENTOSEQ",gx.O.A11762SaidaFaturamentoSeq,0)},c2v:function(){gx.O.A11762SaidaFaturamentoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAFATURAMENTOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKSAIDAFATURAMENTOEMPID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFATURAMENTOEMPID",gxz:"Z11763SaidaFaturamentoEmpId",gxold:"O11763SaidaFaturamentoEmpId",gxvar:"A11763SaidaFaturamentoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11763SaidaFaturamentoEmpId=Value},v2z:function(Value){gx.O.Z11763SaidaFaturamentoEmpId=Value},v2c:function(){gx.fn.setControlValue("SAIDAFATURAMENTOEMPID",gx.O.A11763SaidaFaturamentoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11763SaidaFaturamentoEmpId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAFATURAMENTOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKSAIDAFATURAMENTOID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFATURAMENTOID",gxz:"Z11764SaidaFaturamentoId",gxold:"O11764SaidaFaturamentoId",gxvar:"A11764SaidaFaturamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11764SaidaFaturamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11764SaidaFaturamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAFATURAMENTOID",gx.O.A11764SaidaFaturamentoId,0)},c2v:function(){gx.O.A11764SaidaFaturamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAFATURAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKSAIDAFATURAMENTOITEM", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFATURAMENTOITEM",gxz:"Z11765SaidaFaturamentoItem",gxold:"O11765SaidaFaturamentoItem",gxvar:"A11765SaidaFaturamentoItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11765SaidaFaturamentoItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11765SaidaFaturamentoItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAFATURAMENTOITEM",gx.O.A11765SaidaFaturamentoItem,0)},c2v:function(){gx.O.A11765SaidaFaturamentoItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAFATURAMENTOITEM",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKSAIDAFATURAMENTOTIPO", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFATURAMENTOTIPO",gxz:"Z11766SaidaFaturamentoTipo",gxold:"O11766SaidaFaturamentoTipo",gxvar:"A11766SaidaFaturamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11766SaidaFaturamentoTipo=Value},v2z:function(Value){gx.O.Z11766SaidaFaturamentoTipo=Value},v2c:function(){gx.fn.setControlValue("SAIDAFATURAMENTOTIPO",gx.O.A11766SaidaFaturamentoTipo,0)},c2v:function(){gx.O.A11766SaidaFaturamentoTipo=this.val()},val:function(){return gx.fn.getControlValue("SAIDAFATURAMENTOTIPO")},nac:gx.falseFn};
   this.A11761SaidaFaturamentoNumero = 0 ;
   this.Z11761SaidaFaturamentoNumero = 0 ;
   this.O11761SaidaFaturamentoNumero = 0 ;
   this.A11762SaidaFaturamentoSeq = 0 ;
   this.Z11762SaidaFaturamentoSeq = 0 ;
   this.O11762SaidaFaturamentoSeq = 0 ;
   this.A11763SaidaFaturamentoEmpId = "" ;
   this.Z11763SaidaFaturamentoEmpId = "" ;
   this.O11763SaidaFaturamentoEmpId = "" ;
   this.A11764SaidaFaturamentoId = 0 ;
   this.Z11764SaidaFaturamentoId = 0 ;
   this.O11764SaidaFaturamentoId = 0 ;
   this.A11765SaidaFaturamentoItem = 0 ;
   this.Z11765SaidaFaturamentoItem = 0 ;
   this.O11765SaidaFaturamentoItem = 0 ;
   this.A11766SaidaFaturamentoTipo = "" ;
   this.Z11766SaidaFaturamentoTipo = "" ;
   this.O11766SaidaFaturamentoTipo = "" ;
   this.A11761SaidaFaturamentoNumero = 0 ;
   this.A11762SaidaFaturamentoSeq = 0 ;
   this.A11763SaidaFaturamentoEmpId = "" ;
   this.A11764SaidaFaturamentoId = 0 ;
   this.A11765SaidaFaturamentoItem = 0 ;
   this.A11766SaidaFaturamentoTipo = "" ;
   this.Events = {"e11h6869_client": ["ENTER", true] ,"e12h6869_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidafaturamento());
