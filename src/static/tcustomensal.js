/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:41:34.32
*/
gx.evt.autoSkip = false;
gx.define('tcustomensal', false, function () {
   this.ServerClass =  "tcustomensal" ;
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
   this.Valid_Customensalidsessao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CUSTOMENSALIDSESSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Customensalusuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CUSTOMENSALUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Customensaltipocusto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CUSTOMENSALTIPOCUSTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Customensalccustoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Customensalccustoid",["gx.O.A11650CustoMensalIdSessao", "gx.O.A11651CustoMensalUsuarioId", "gx.O.A11652CustoMensalTipoCusto", "gx.O.A11653CustoMensalCCustoId", "gx.O.A11654CustoMensalCCustoDesc", "gx.num.urlDecimal(gx.O.A11655CustoMensalValorAnterior,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11656CustoMensalValorAtual,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11658CustoMensalValorAnteriorSint,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11659CustoMensalValorAtualSint,\'.\',\',\')", "gx.O.A11657CustoMensalSnCCustoSuperior"],["A11654CustoMensalCCustoDesc", "A11655CustoMensalValorAnterior", "A11656CustoMensalValorAtual", "A11658CustoMensalValorAnteriorSint", "A11659CustoMensalValorAtualSint", "A11657CustoMensalSnCCustoSuperior", "Gx_mode", "Z11650CustoMensalIdSessao", "Z11651CustoMensalUsuarioId", "Z11652CustoMensalTipoCusto", "Z11653CustoMensalCCustoId", "Z11654CustoMensalCCustoDesc", "Z11655CustoMensalValorAnterior", "Z11656CustoMensalValorAtual", "Z11658CustoMensalValorAnteriorSint", "Z11659CustoMensalValorAtualSint", "Z11657CustoMensalSnCCustoSuperior", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11gu857_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12gu857_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84];
   this.GXLastCtrlId =84;
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
   GXValidFnc[37]={fld:"TEXTBLOCKCUSTOMENSALIDSESSAO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Customensalidsessao,isvalid:null,rgrid:[],fld:"CUSTOMENSALIDSESSAO",gxz:"Z11650CustoMensalIdSessao",gxold:"O11650CustoMensalIdSessao",gxvar:"A11650CustoMensalIdSessao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11650CustoMensalIdSessao=Value},v2z:function(Value){gx.O.Z11650CustoMensalIdSessao=Value},v2c:function(){gx.fn.setControlValue("CUSTOMENSALIDSESSAO",gx.O.A11650CustoMensalIdSessao,0)},c2v:function(){gx.O.A11650CustoMensalIdSessao=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMENSALIDSESSAO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCUSTOMENSALUSUARIOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Customensalusuarioid,isvalid:null,rgrid:[],fld:"CUSTOMENSALUSUARIOID",gxz:"Z11651CustoMensalUsuarioId",gxold:"O11651CustoMensalUsuarioId",gxvar:"A11651CustoMensalUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11651CustoMensalUsuarioId=Value},v2z:function(Value){gx.O.Z11651CustoMensalUsuarioId=Value},v2c:function(){gx.fn.setControlValue("CUSTOMENSALUSUARIOID",gx.O.A11651CustoMensalUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11651CustoMensalUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMENSALUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCKCUSTOMENSALTIPOCUSTO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Customensaltipocusto,isvalid:null,rgrid:[],fld:"CUSTOMENSALTIPOCUSTO",gxz:"Z11652CustoMensalTipoCusto",gxold:"O11652CustoMensalTipoCusto",gxvar:"A11652CustoMensalTipoCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11652CustoMensalTipoCusto=Value},v2z:function(Value){gx.O.Z11652CustoMensalTipoCusto=Value},v2c:function(){gx.fn.setControlValue("CUSTOMENSALTIPOCUSTO",gx.O.A11652CustoMensalTipoCusto,0)},c2v:function(){gx.O.A11652CustoMensalTipoCusto=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMENSALTIPOCUSTO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKCUSTOMENSALCCUSTOID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Customensalccustoid,isvalid:null,rgrid:[],fld:"CUSTOMENSALCCUSTOID",gxz:"Z11653CustoMensalCCustoId",gxold:"O11653CustoMensalCCustoId",gxvar:"A11653CustoMensalCCustoId",ucs:[],op:[84,79,74,69,64,59],ip:[84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11653CustoMensalCCustoId=Value},v2z:function(Value){gx.O.Z11653CustoMensalCCustoId=Value},v2c:function(){gx.fn.setControlValue("CUSTOMENSALCCUSTOID",gx.O.A11653CustoMensalCCustoId,0)},c2v:function(){gx.O.A11653CustoMensalCCustoId=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMENSALCCUSTOID")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKCUSTOMENSALCCUSTODESC", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMENSALCCUSTODESC",gxz:"Z11654CustoMensalCCustoDesc",gxold:"O11654CustoMensalCCustoDesc",gxvar:"A11654CustoMensalCCustoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11654CustoMensalCCustoDesc=Value},v2z:function(Value){gx.O.Z11654CustoMensalCCustoDesc=Value},v2c:function(){gx.fn.setControlValue("CUSTOMENSALCCUSTODESC",gx.O.A11654CustoMensalCCustoDesc,0)},c2v:function(){gx.O.A11654CustoMensalCCustoDesc=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMENSALCCUSTODESC")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKCUSTOMENSALVALORANTERIOR", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMENSALVALORANTERIOR",gxz:"Z11655CustoMensalValorAnterior",gxold:"O11655CustoMensalValorAnterior",gxvar:"A11655CustoMensalValorAnterior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11655CustoMensalValorAnterior=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11655CustoMensalValorAnterior=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CUSTOMENSALVALORANTERIOR",gx.O.A11655CustoMensalValorAnterior,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11655CustoMensalValorAnterior=this.val()},val:function(){return gx.fn.getDecimalValue("CUSTOMENSALVALORANTERIOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKCUSTOMENSALVALORATUAL", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMENSALVALORATUAL",gxz:"Z11656CustoMensalValorAtual",gxold:"O11656CustoMensalValorAtual",gxvar:"A11656CustoMensalValorAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11656CustoMensalValorAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11656CustoMensalValorAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CUSTOMENSALVALORATUAL",gx.O.A11656CustoMensalValorAtual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11656CustoMensalValorAtual=this.val()},val:function(){return gx.fn.getDecimalValue("CUSTOMENSALVALORATUAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKCUSTOMENSALVALORANTERIORSINT", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMENSALVALORANTERIORSINT",gxz:"Z11658CustoMensalValorAnteriorSint",gxold:"O11658CustoMensalValorAnteriorSint",gxvar:"A11658CustoMensalValorAnteriorSint",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11658CustoMensalValorAnteriorSint=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11658CustoMensalValorAnteriorSint=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CUSTOMENSALVALORANTERIORSINT",gx.O.A11658CustoMensalValorAnteriorSint,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11658CustoMensalValorAnteriorSint=this.val()},val:function(){return gx.fn.getDecimalValue("CUSTOMENSALVALORANTERIORSINT",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCKCUSTOMENSALVALORATUALSINT", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMENSALVALORATUALSINT",gxz:"Z11659CustoMensalValorAtualSint",gxold:"O11659CustoMensalValorAtualSint",gxvar:"A11659CustoMensalValorAtualSint",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11659CustoMensalValorAtualSint=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11659CustoMensalValorAtualSint=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CUSTOMENSALVALORATUALSINT",gx.O.A11659CustoMensalValorAtualSint,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11659CustoMensalValorAtualSint=this.val()},val:function(){return gx.fn.getDecimalValue("CUSTOMENSALVALORATUALSINT",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCKCUSTOMENSALSNCCUSTOSUPERIOR", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CUSTOMENSALSNCCUSTOSUPERIOR",gxz:"Z11657CustoMensalSnCCustoSuperior",gxold:"O11657CustoMensalSnCCustoSuperior",gxvar:"A11657CustoMensalSnCCustoSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11657CustoMensalSnCCustoSuperior=Value},v2z:function(Value){gx.O.Z11657CustoMensalSnCCustoSuperior=Value},v2c:function(){gx.fn.setControlValue("CUSTOMENSALSNCCUSTOSUPERIOR",gx.O.A11657CustoMensalSnCCustoSuperior,0)},c2v:function(){gx.O.A11657CustoMensalSnCCustoSuperior=this.val()},val:function(){return gx.fn.getControlValue("CUSTOMENSALSNCCUSTOSUPERIOR")},nac:gx.falseFn};
   this.A11650CustoMensalIdSessao = "" ;
   this.Z11650CustoMensalIdSessao = "" ;
   this.O11650CustoMensalIdSessao = "" ;
   this.A11651CustoMensalUsuarioId = "" ;
   this.Z11651CustoMensalUsuarioId = "" ;
   this.O11651CustoMensalUsuarioId = "" ;
   this.A11652CustoMensalTipoCusto = "" ;
   this.Z11652CustoMensalTipoCusto = "" ;
   this.O11652CustoMensalTipoCusto = "" ;
   this.A11653CustoMensalCCustoId = "" ;
   this.Z11653CustoMensalCCustoId = "" ;
   this.O11653CustoMensalCCustoId = "" ;
   this.A11654CustoMensalCCustoDesc = "" ;
   this.Z11654CustoMensalCCustoDesc = "" ;
   this.O11654CustoMensalCCustoDesc = "" ;
   this.A11655CustoMensalValorAnterior = 0 ;
   this.Z11655CustoMensalValorAnterior = 0 ;
   this.O11655CustoMensalValorAnterior = 0 ;
   this.A11656CustoMensalValorAtual = 0 ;
   this.Z11656CustoMensalValorAtual = 0 ;
   this.O11656CustoMensalValorAtual = 0 ;
   this.A11658CustoMensalValorAnteriorSint = 0 ;
   this.Z11658CustoMensalValorAnteriorSint = 0 ;
   this.O11658CustoMensalValorAnteriorSint = 0 ;
   this.A11659CustoMensalValorAtualSint = 0 ;
   this.Z11659CustoMensalValorAtualSint = 0 ;
   this.O11659CustoMensalValorAtualSint = 0 ;
   this.A11657CustoMensalSnCCustoSuperior = "" ;
   this.Z11657CustoMensalSnCCustoSuperior = "" ;
   this.O11657CustoMensalSnCCustoSuperior = "" ;
   this.A11650CustoMensalIdSessao = "" ;
   this.A11651CustoMensalUsuarioId = "" ;
   this.A11652CustoMensalTipoCusto = "" ;
   this.A11653CustoMensalCCustoId = "" ;
   this.A11654CustoMensalCCustoDesc = "" ;
   this.A11655CustoMensalValorAnterior = 0 ;
   this.A11656CustoMensalValorAtual = 0 ;
   this.A11658CustoMensalValorAnteriorSint = 0 ;
   this.A11659CustoMensalValorAtualSint = 0 ;
   this.A11657CustoMensalSnCCustoSuperior = "" ;
   this.Events = {"e11gu857_client": ["ENTER", true] ,"e12gu857_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcustomensal());
