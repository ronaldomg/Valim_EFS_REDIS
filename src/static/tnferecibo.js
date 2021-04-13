/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:47:44.37
*/
gx.evt.autoSkip = false;
gx.define('tnferecibo', false, function () {
   this.ServerClass =  "tnferecibo" ;
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
   this.Valid_Nfecnpj=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFECNPJ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfeserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFESERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfenumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nfenumero",["gx.O.A11675NFeCNPJ", "gx.O.A11676NFeSerie", "gx.O.A11677NFeNumero"],[]);
      return true;
   }
   this.Valid_Nferecibonumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nferecibonumero",["gx.O.A11675NFeCNPJ", "gx.O.A11676NFeSerie", "gx.O.A11677NFeNumero", "gx.num.urlDecimal(gx.O.A11834NfeReciboNumero,\'.\',\',\')", "gx.O.A11835NfeReciboSituacao"],["A11835NfeReciboSituacao", "Gx_mode", "Z11675NFeCNPJ", "Z11676NFeSerie", "Z11677NFeNumero", "Z11834NfeReciboNumero", "Z11835NfeReciboSituacao", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Nferecibosituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFERECIBOSITUACAO");
         this.AnyError  = 0;
         if ( ! ( this.A11835NfeReciboSituacao == "A" || this.A11835NfeReciboSituacao == "C" ) )
         {
            try {
               gxballoon.setError("Campo Situação fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11ha876_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ha876_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,65];
   this.GXLastCtrlId =65;
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
   GXValidFnc[37]={fld:"TEXTBLOCKNFECNPJ", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfecnpj,isvalid:null,rgrid:[],fld:"NFECNPJ",gxz:"Z11675NFeCNPJ",gxold:"O11675NFeCNPJ",gxvar:"A11675NFeCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11675NFeCNPJ=Value},v2z:function(Value){gx.O.Z11675NFeCNPJ=Value},v2c:function(){gx.fn.setControlValue("NFECNPJ",gx.O.A11675NFeCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11675NFeCNPJ=this.val()},val:function(){return gx.fn.getControlValue("NFECNPJ")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKNFESERIE", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfeserie,isvalid:null,rgrid:[],fld:"NFESERIE",gxz:"Z11676NFeSerie",gxold:"O11676NFeSerie",gxvar:"A11676NFeSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11676NFeSerie=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11676NFeSerie=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFESERIE",gx.O.A11676NFeSerie,0)},c2v:function(){gx.O.A11676NFeSerie=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFESERIE",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKNFENUMERO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfenumero,isvalid:null,rgrid:[],fld:"NFENUMERO",gxz:"Z11677NFeNumero",gxold:"O11677NFeNumero",gxvar:"A11677NFeNumero",ucs:[],op:[],ip:[49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11677NFeNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11677NFeNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFENUMERO",gx.O.A11677NFeNumero,0)},c2v:function(){gx.O.A11677NFeNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFENUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKNFERECIBONUMERO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nferecibonumero,isvalid:null,rgrid:[],fld:"NFERECIBONUMERO",gxz:"Z11834NfeReciboNumero",gxold:"O11834NfeReciboNumero",gxvar:"A11834NfeReciboNumero",ucs:[],op:[59],ip:[59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11834NfeReciboNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11834NfeReciboNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFERECIBONUMERO",gx.O.A11834NfeReciboNumero,0)},c2v:function(){gx.O.A11834NfeReciboNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFERECIBONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKNFERECIBOSITUACAO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nferecibosituacao,isvalid:null,rgrid:[],fld:"NFERECIBOSITUACAO",gxz:"Z11835NfeReciboSituacao",gxold:"O11835NfeReciboSituacao",gxvar:"A11835NfeReciboSituacao",ucs:[],op:[59],ip:[59],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A11835NfeReciboSituacao=Value},v2z:function(Value){gx.O.Z11835NfeReciboSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("NFERECIBOSITUACAO",gx.O.A11835NfeReciboSituacao);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11835NfeReciboSituacao=this.val()},val:function(){return gx.fn.getControlValue("NFERECIBOSITUACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[65]={fld:"PROMPT_11675_11676_11677",grid:876};
   this.A11675NFeCNPJ = "" ;
   this.Z11675NFeCNPJ = "" ;
   this.O11675NFeCNPJ = "" ;
   this.A11676NFeSerie = 0 ;
   this.Z11676NFeSerie = 0 ;
   this.O11676NFeSerie = 0 ;
   this.A11677NFeNumero = 0 ;
   this.Z11677NFeNumero = 0 ;
   this.O11677NFeNumero = 0 ;
   this.A11834NfeReciboNumero = 0 ;
   this.Z11834NfeReciboNumero = 0 ;
   this.O11834NfeReciboNumero = 0 ;
   this.A11835NfeReciboSituacao = "" ;
   this.Z11835NfeReciboSituacao = "" ;
   this.O11835NfeReciboSituacao = "" ;
   this.A11675NFeCNPJ = "" ;
   this.A11676NFeSerie = 0 ;
   this.A11677NFeNumero = 0 ;
   this.A11834NfeReciboNumero = 0 ;
   this.A11835NfeReciboSituacao = "" ;
   this.Events = {"e11ha876_client": ["ENTER", true] ,"e12ha876_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_11675_11676_11677", [39,44,49]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnferecibo());
