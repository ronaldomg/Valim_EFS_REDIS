/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:20:31.44
*/
gx.evt.autoSkip = false;
gx.define('tspedaux', false, function () {
   this.ServerClass =  "tspedaux" ;
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
   this.Valid_Spedauxtpregistro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SPEDAUXTPREGISTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Spedauxcodregistro=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Spedauxcodregistro",["gx.O.A7404SpedAuxTpRegistro", "gx.O.A7405SpedAuxCodRegistro", "gx.num.urlDecimal(gx.O.A7395SpedAuxDevolucao,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7396SpedAuxRessarcimento,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7397SpedAuxOutrosCreditos,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7398SpedAuxAjusteCredito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7399SpedAuxRetencao,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7400SpedAuxOutrosDebitos,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7401SpedAuxAjusteDebito,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7402SpedAuxDeducao,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7403SpedAuxRecolhido,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8446SpedAuxReceitaBruta,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8447SpedAuxBaseCalculo,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8448SpedAuxAliquota,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8449SpedAuxContribuicao,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8450SpedAuxAjusteReducao,\'.\',\',\')"],["A7395SpedAuxDevolucao", "A7396SpedAuxRessarcimento", "A7397SpedAuxOutrosCreditos", "A7398SpedAuxAjusteCredito", "A7399SpedAuxRetencao", "A7400SpedAuxOutrosDebitos", "A7401SpedAuxAjusteDebito", "A7402SpedAuxDeducao", "A7403SpedAuxRecolhido", "A8446SpedAuxReceitaBruta", "A8447SpedAuxBaseCalculo", "A8448SpedAuxAliquota", "A8449SpedAuxContribuicao", "A8450SpedAuxAjusteReducao", "Gx_mode", "Z7404SpedAuxTpRegistro", "Z7405SpedAuxCodRegistro", "Z7395SpedAuxDevolucao", "Z7396SpedAuxRessarcimento", "Z7397SpedAuxOutrosCreditos", "Z7398SpedAuxAjusteCredito", "Z7399SpedAuxRetencao", "Z7400SpedAuxOutrosDebitos", "Z7401SpedAuxAjusteDebito", "Z7402SpedAuxDeducao", "Z7403SpedAuxRecolhido", "Z8446SpedAuxReceitaBruta", "Z8447SpedAuxBaseCalculo", "Z8448SpedAuxAliquota", "Z8449SpedAuxContribuicao", "Z8450SpedAuxAjusteReducao", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11an566_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12an566_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,29,31,34,36,39,41,44,46,49,51,54,56,59,61,64,66,69,71,74,76,79,81,84,86,89,91,94,96];
   this.GXLastCtrlId =96;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Spedauxtpregistro,isvalid:null,rgrid:[],fld:"SPEDAUXTPREGISTRO",gxz:"Z7404SpedAuxTpRegistro",gxold:"O7404SpedAuxTpRegistro",gxvar:"A7404SpedAuxTpRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7404SpedAuxTpRegistro=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7404SpedAuxTpRegistro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SPEDAUXTPREGISTRO",gx.O.A7404SpedAuxTpRegistro,0)},c2v:function(){gx.O.A7404SpedAuxTpRegistro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SPEDAUXTPREGISTRO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Spedauxcodregistro,isvalid:null,rgrid:[],fld:"SPEDAUXCODREGISTRO",gxz:"Z7405SpedAuxCodRegistro",gxold:"O7405SpedAuxCodRegistro",gxvar:"A7405SpedAuxCodRegistro",ucs:[],op:[96,91,86,81,76,71,66,61,56,51,46,41,36,31],ip:[96,91,86,81,76,71,66,61,56,51,46,41,36,31,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7405SpedAuxCodRegistro=Value},v2z:function(Value){gx.O.Z7405SpedAuxCodRegistro=Value},v2c:function(){gx.fn.setControlValue("SPEDAUXCODREGISTRO",gx.O.A7405SpedAuxCodRegistro,0)},c2v:function(){gx.O.A7405SpedAuxCodRegistro=this.val()},val:function(){return gx.fn.getControlValue("SPEDAUXCODREGISTRO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXDEVOLUCAO",gxz:"Z7395SpedAuxDevolucao",gxold:"O7395SpedAuxDevolucao",gxvar:"A7395SpedAuxDevolucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7395SpedAuxDevolucao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7395SpedAuxDevolucao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXDEVOLUCAO",gx.O.A7395SpedAuxDevolucao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7395SpedAuxDevolucao=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXDEVOLUCAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[34]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXRESSARCIMENTO",gxz:"Z7396SpedAuxRessarcimento",gxold:"O7396SpedAuxRessarcimento",gxvar:"A7396SpedAuxRessarcimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7396SpedAuxRessarcimento=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7396SpedAuxRessarcimento=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXRESSARCIMENTO",gx.O.A7396SpedAuxRessarcimento,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7396SpedAuxRessarcimento=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXRESSARCIMENTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXOUTROSCREDITOS",gxz:"Z7397SpedAuxOutrosCreditos",gxold:"O7397SpedAuxOutrosCreditos",gxvar:"A7397SpedAuxOutrosCreditos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7397SpedAuxOutrosCreditos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7397SpedAuxOutrosCreditos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXOUTROSCREDITOS",gx.O.A7397SpedAuxOutrosCreditos,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7397SpedAuxOutrosCreditos=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXOUTROSCREDITOS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXAJUSTECREDITO",gxz:"Z7398SpedAuxAjusteCredito",gxold:"O7398SpedAuxAjusteCredito",gxvar:"A7398SpedAuxAjusteCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7398SpedAuxAjusteCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7398SpedAuxAjusteCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXAJUSTECREDITO",gx.O.A7398SpedAuxAjusteCredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7398SpedAuxAjusteCredito=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXAJUSTECREDITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXRETENCAO",gxz:"Z7399SpedAuxRetencao",gxold:"O7399SpedAuxRetencao",gxvar:"A7399SpedAuxRetencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7399SpedAuxRetencao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7399SpedAuxRetencao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXRETENCAO",gx.O.A7399SpedAuxRetencao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7399SpedAuxRetencao=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXRETENCAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXOUTROSDEBITOS",gxz:"Z7400SpedAuxOutrosDebitos",gxold:"O7400SpedAuxOutrosDebitos",gxvar:"A7400SpedAuxOutrosDebitos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7400SpedAuxOutrosDebitos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7400SpedAuxOutrosDebitos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXOUTROSDEBITOS",gx.O.A7400SpedAuxOutrosDebitos,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7400SpedAuxOutrosDebitos=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXOUTROSDEBITOS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXAJUSTEDEBITO",gxz:"Z7401SpedAuxAjusteDebito",gxold:"O7401SpedAuxAjusteDebito",gxvar:"A7401SpedAuxAjusteDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7401SpedAuxAjusteDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7401SpedAuxAjusteDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXAJUSTEDEBITO",gx.O.A7401SpedAuxAjusteDebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7401SpedAuxAjusteDebito=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXAJUSTEDEBITO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXDEDUCAO",gxz:"Z7402SpedAuxDeducao",gxold:"O7402SpedAuxDeducao",gxvar:"A7402SpedAuxDeducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7402SpedAuxDeducao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7402SpedAuxDeducao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXDEDUCAO",gx.O.A7402SpedAuxDeducao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7402SpedAuxDeducao=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXDEDUCAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[69]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXRECOLHIDO",gxz:"Z7403SpedAuxRecolhido",gxold:"O7403SpedAuxRecolhido",gxvar:"A7403SpedAuxRecolhido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7403SpedAuxRecolhido=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7403SpedAuxRecolhido=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXRECOLHIDO",gx.O.A7403SpedAuxRecolhido,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7403SpedAuxRecolhido=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXRECOLHIDO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[74]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXRECEITABRUTA",gxz:"Z8446SpedAuxReceitaBruta",gxold:"O8446SpedAuxReceitaBruta",gxvar:"A8446SpedAuxReceitaBruta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8446SpedAuxReceitaBruta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8446SpedAuxReceitaBruta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXRECEITABRUTA",gx.O.A8446SpedAuxReceitaBruta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8446SpedAuxReceitaBruta=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXRECEITABRUTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 76 , function() {
   });
   GXValidFnc[79]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXBASECALCULO",gxz:"Z8447SpedAuxBaseCalculo",gxold:"O8447SpedAuxBaseCalculo",gxvar:"A8447SpedAuxBaseCalculo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8447SpedAuxBaseCalculo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8447SpedAuxBaseCalculo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXBASECALCULO",gx.O.A8447SpedAuxBaseCalculo,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8447SpedAuxBaseCalculo=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXBASECALCULO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 81 , function() {
   });
   GXValidFnc[84]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"decimal",len:12,dec:4,sign:false,pic:"ZZZZZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXALIQUOTA",gxz:"Z8448SpedAuxAliquota",gxold:"O8448SpedAuxAliquota",gxvar:"A8448SpedAuxAliquota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8448SpedAuxAliquota=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8448SpedAuxAliquota=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXALIQUOTA",gx.O.A8448SpedAuxAliquota,4,',')},c2v:function(){gx.O.A8448SpedAuxAliquota=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXALIQUOTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXCONTRIBUICAO",gxz:"Z8449SpedAuxContribuicao",gxold:"O8449SpedAuxContribuicao",gxvar:"A8449SpedAuxContribuicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8449SpedAuxContribuicao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8449SpedAuxContribuicao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXCONTRIBUICAO",gx.O.A8449SpedAuxContribuicao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8449SpedAuxContribuicao=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXCONTRIBUICAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 91 , function() {
   });
   GXValidFnc[94]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDAUXAJUSTEREDUCAO",gxz:"Z8450SpedAuxAjusteReducao",gxold:"O8450SpedAuxAjusteReducao",gxvar:"A8450SpedAuxAjusteReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8450SpedAuxAjusteReducao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8450SpedAuxAjusteReducao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SPEDAUXAJUSTEREDUCAO",gx.O.A8450SpedAuxAjusteReducao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8450SpedAuxAjusteReducao=this.val()},val:function(){return gx.fn.getDecimalValue("SPEDAUXAJUSTEREDUCAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 96 , function() {
   });
   this.A7404SpedAuxTpRegistro = 0 ;
   this.Z7404SpedAuxTpRegistro = 0 ;
   this.O7404SpedAuxTpRegistro = 0 ;
   this.A7405SpedAuxCodRegistro = "" ;
   this.Z7405SpedAuxCodRegistro = "" ;
   this.O7405SpedAuxCodRegistro = "" ;
   this.A7395SpedAuxDevolucao = 0 ;
   this.Z7395SpedAuxDevolucao = 0 ;
   this.O7395SpedAuxDevolucao = 0 ;
   this.A7396SpedAuxRessarcimento = 0 ;
   this.Z7396SpedAuxRessarcimento = 0 ;
   this.O7396SpedAuxRessarcimento = 0 ;
   this.A7397SpedAuxOutrosCreditos = 0 ;
   this.Z7397SpedAuxOutrosCreditos = 0 ;
   this.O7397SpedAuxOutrosCreditos = 0 ;
   this.A7398SpedAuxAjusteCredito = 0 ;
   this.Z7398SpedAuxAjusteCredito = 0 ;
   this.O7398SpedAuxAjusteCredito = 0 ;
   this.A7399SpedAuxRetencao = 0 ;
   this.Z7399SpedAuxRetencao = 0 ;
   this.O7399SpedAuxRetencao = 0 ;
   this.A7400SpedAuxOutrosDebitos = 0 ;
   this.Z7400SpedAuxOutrosDebitos = 0 ;
   this.O7400SpedAuxOutrosDebitos = 0 ;
   this.A7401SpedAuxAjusteDebito = 0 ;
   this.Z7401SpedAuxAjusteDebito = 0 ;
   this.O7401SpedAuxAjusteDebito = 0 ;
   this.A7402SpedAuxDeducao = 0 ;
   this.Z7402SpedAuxDeducao = 0 ;
   this.O7402SpedAuxDeducao = 0 ;
   this.A7403SpedAuxRecolhido = 0 ;
   this.Z7403SpedAuxRecolhido = 0 ;
   this.O7403SpedAuxRecolhido = 0 ;
   this.A8446SpedAuxReceitaBruta = 0 ;
   this.Z8446SpedAuxReceitaBruta = 0 ;
   this.O8446SpedAuxReceitaBruta = 0 ;
   this.A8447SpedAuxBaseCalculo = 0 ;
   this.Z8447SpedAuxBaseCalculo = 0 ;
   this.O8447SpedAuxBaseCalculo = 0 ;
   this.A8448SpedAuxAliquota = 0 ;
   this.Z8448SpedAuxAliquota = 0 ;
   this.O8448SpedAuxAliquota = 0 ;
   this.A8449SpedAuxContribuicao = 0 ;
   this.Z8449SpedAuxContribuicao = 0 ;
   this.O8449SpedAuxContribuicao = 0 ;
   this.A8450SpedAuxAjusteReducao = 0 ;
   this.Z8450SpedAuxAjusteReducao = 0 ;
   this.O8450SpedAuxAjusteReducao = 0 ;
   this.A7404SpedAuxTpRegistro = 0 ;
   this.A7405SpedAuxCodRegistro = "" ;
   this.A7395SpedAuxDevolucao = 0 ;
   this.A7396SpedAuxRessarcimento = 0 ;
   this.A7397SpedAuxOutrosCreditos = 0 ;
   this.A7398SpedAuxAjusteCredito = 0 ;
   this.A7399SpedAuxRetencao = 0 ;
   this.A7400SpedAuxOutrosDebitos = 0 ;
   this.A7401SpedAuxAjusteDebito = 0 ;
   this.A7402SpedAuxDeducao = 0 ;
   this.A7403SpedAuxRecolhido = 0 ;
   this.A8446SpedAuxReceitaBruta = 0 ;
   this.A8447SpedAuxBaseCalculo = 0 ;
   this.A8448SpedAuxAliquota = 0 ;
   this.A8449SpedAuxContribuicao = 0 ;
   this.A8450SpedAuxAjusteReducao = 0 ;
   this.Events = {"e11an566_client": ["ENTER", true] ,"e12an566_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tspedaux());
