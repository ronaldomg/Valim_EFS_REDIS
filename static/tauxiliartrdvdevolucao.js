/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:20:58.58
*/
gx.evt.autoSkip = false;
gx.define('tauxiliartrdvdevolucao', false, function () {
   this.ServerClass =  "tauxiliartrdvdevolucao" ;
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
   this.Valid_Auxiliartrdvdevolucaoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AUXILIARTRDVDEVOLUCAOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Auxiliartrdvdevolucaotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AUXILIARTRDVDEVOLUCAOTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Auxiliartrdvdevolucaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AUXILIARTRDVDEVOLUCAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Auxiliartrdvdevolucaoseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Auxiliartrdvdevolucaoseq",["gx.O.A7539AuxiliarTrDvDevolucaoEmpresaId", "gx.O.A7540AuxiliarTrDvDevolucaoTipo", "gx.O.A7541AuxiliarTrDvDevolucaoNumero", "gx.O.A7542AuxiliarTrDvDevolucaoSeq", "gx.O.A7531AuxiliarTrDvDevolucaoFilialEmp", "gx.O.A7532AuxiliarTrDvDevolucaoFilIiald", "gx.O.A7533AuxiliarTrDvDevolucaoProdEmpId", "gx.O.A7534AuxiliarTrDvDevolucaoProdId", "gx.O.A7535AuxiliarTrDvDevolucaoProdLote", "gx.num.urlDecimal(gx.O.A7536AuxiliarTrDvDevolucaoProdCodBa,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7537AuxiliarTrDvDevolucaoQtde,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7538AuxiliarTrDvDevolucaoValor,\'.\',\',\')", "gx.O.A7517AuxiliarTrDvDevolucaoSaiOriEmp", "gx.O.A7518AuxiliarTrDvDevolucaoSaiOriId", "gx.O.A7519AuxiliarTrDvDevolucaoSaiOriSeq", "gx.O.A7514AuxiliarTrDvDevolucaoEntradaEm", "gx.O.A7515AuxiliarTrDvDevolucaoEntradaId", "gx.O.A7516AuxiliarTrDvDevolucaoEntradaSe"],["A7531AuxiliarTrDvDevolucaoFilialEmp", "A7532AuxiliarTrDvDevolucaoFilIiald", "A7533AuxiliarTrDvDevolucaoProdEmpId", "A7534AuxiliarTrDvDevolucaoProdId", "A7535AuxiliarTrDvDevolucaoProdLote", "A7536AuxiliarTrDvDevolucaoProdCodBa", "A7537AuxiliarTrDvDevolucaoQtde", "A7538AuxiliarTrDvDevolucaoValor", "A7517AuxiliarTrDvDevolucaoSaiOriEmp", "A7518AuxiliarTrDvDevolucaoSaiOriId", "A7519AuxiliarTrDvDevolucaoSaiOriSeq", "A7514AuxiliarTrDvDevolucaoEntradaEm", "A7515AuxiliarTrDvDevolucaoEntradaId", "A7516AuxiliarTrDvDevolucaoEntradaSe", "Gx_mode", "Z7539AuxiliarTrDvDevolucaoEmpresaId", "Z7540AuxiliarTrDvDevolucaoTipo", "Z7541AuxiliarTrDvDevolucaoNumero", "Z7542AuxiliarTrDvDevolucaoSeq", "Z7531AuxiliarTrDvDevolucaoFilialEmp", "Z7532AuxiliarTrDvDevolucaoFilIiald", "Z7533AuxiliarTrDvDevolucaoProdEmpId", "Z7534AuxiliarTrDvDevolucaoProdId", "Z7535AuxiliarTrDvDevolucaoProdLote", "Z7536AuxiliarTrDvDevolucaoProdCodBa", "Z7537AuxiliarTrDvDevolucaoQtde", "Z7538AuxiliarTrDvDevolucaoValor", "Z7517AuxiliarTrDvDevolucaoSaiOriEmp", "Z7518AuxiliarTrDvDevolucaoSaiOriId", "Z7519AuxiliarTrDvDevolucaoSaiOriSeq", "Z7514AuxiliarTrDvDevolucaoEntradaEm", "Z7515AuxiliarTrDvDevolucaoEntradaId", "Z7516AuxiliarTrDvDevolucaoEntradaSe", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11as571_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12as571_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13as571_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,101,110,112];
   this.GXLastCtrlId =112;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auxiliartrdvdevolucaoempresaid,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOEMPRESAID",gxz:"Z7539AuxiliarTrDvDevolucaoEmpresaId",gxold:"O7539AuxiliarTrDvDevolucaoEmpresaId",gxvar:"A7539AuxiliarTrDvDevolucaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7539AuxiliarTrDvDevolucaoEmpresaId=Value},v2z:function(Value){gx.O.Z7539AuxiliarTrDvDevolucaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOEMPRESAID",gx.O.A7539AuxiliarTrDvDevolucaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7539AuxiliarTrDvDevolucaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVDEVOLUCAOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auxiliartrdvdevolucaotipo,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOTIPO",gxz:"Z7540AuxiliarTrDvDevolucaoTipo",gxold:"O7540AuxiliarTrDvDevolucaoTipo",gxvar:"A7540AuxiliarTrDvDevolucaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7540AuxiliarTrDvDevolucaoTipo=Value},v2z:function(Value){gx.O.Z7540AuxiliarTrDvDevolucaoTipo=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOTIPO",gx.O.A7540AuxiliarTrDvDevolucaoTipo,0)},c2v:function(){gx.O.A7540AuxiliarTrDvDevolucaoTipo=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVDEVOLUCAOTIPO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auxiliartrdvdevolucaonumero,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAONUMERO",gxz:"Z7541AuxiliarTrDvDevolucaoNumero",gxold:"O7541AuxiliarTrDvDevolucaoNumero",gxvar:"A7541AuxiliarTrDvDevolucaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7541AuxiliarTrDvDevolucaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7541AuxiliarTrDvDevolucaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAONUMERO",gx.O.A7541AuxiliarTrDvDevolucaoNumero,0)},c2v:function(){gx.O.A7541AuxiliarTrDvDevolucaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVDEVOLUCAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Auxiliartrdvdevolucaoseq,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOSEQ",gxz:"Z7542AuxiliarTrDvDevolucaoSeq",gxold:"O7542AuxiliarTrDvDevolucaoSeq",gxvar:"A7542AuxiliarTrDvDevolucaoSeq",ucs:[],op:[100,95,90,85,80,75,70,65,60,55,50,45,40,35],ip:[100,95,90,85,80,75,70,65,60,55,50,45,40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7542AuxiliarTrDvDevolucaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7542AuxiliarTrDvDevolucaoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOSEQ",gx.O.A7542AuxiliarTrDvDevolucaoSeq,0)},c2v:function(){gx.O.A7542AuxiliarTrDvDevolucaoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVDEVOLUCAOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOFILIALEMP",gxz:"Z7531AuxiliarTrDvDevolucaoFilialEmp",gxold:"O7531AuxiliarTrDvDevolucaoFilialEmp",gxvar:"A7531AuxiliarTrDvDevolucaoFilialEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7531AuxiliarTrDvDevolucaoFilialEmp=Value},v2z:function(Value){gx.O.Z7531AuxiliarTrDvDevolucaoFilialEmp=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOFILIALEMP",gx.O.A7531AuxiliarTrDvDevolucaoFilialEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7531AuxiliarTrDvDevolucaoFilialEmp=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVDEVOLUCAOFILIALEMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOFILIIALD",gxz:"Z7532AuxiliarTrDvDevolucaoFilIiald",gxold:"O7532AuxiliarTrDvDevolucaoFilIiald",gxvar:"A7532AuxiliarTrDvDevolucaoFilIiald",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7532AuxiliarTrDvDevolucaoFilIiald=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7532AuxiliarTrDvDevolucaoFilIiald=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOFILIIALD",gx.O.A7532AuxiliarTrDvDevolucaoFilIiald,0)},c2v:function(){gx.O.A7532AuxiliarTrDvDevolucaoFilIiald=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVDEVOLUCAOFILIIALD",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOPRODEMPID",gxz:"Z7533AuxiliarTrDvDevolucaoProdEmpId",gxold:"O7533AuxiliarTrDvDevolucaoProdEmpId",gxvar:"A7533AuxiliarTrDvDevolucaoProdEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7533AuxiliarTrDvDevolucaoProdEmpId=Value},v2z:function(Value){gx.O.Z7533AuxiliarTrDvDevolucaoProdEmpId=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOPRODEMPID",gx.O.A7533AuxiliarTrDvDevolucaoProdEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7533AuxiliarTrDvDevolucaoProdEmpId=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVDEVOLUCAOPRODEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOPRODID",gxz:"Z7534AuxiliarTrDvDevolucaoProdId",gxold:"O7534AuxiliarTrDvDevolucaoProdId",gxvar:"A7534AuxiliarTrDvDevolucaoProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7534AuxiliarTrDvDevolucaoProdId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7534AuxiliarTrDvDevolucaoProdId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOPRODID",gx.O.A7534AuxiliarTrDvDevolucaoProdId,0)},c2v:function(){gx.O.A7534AuxiliarTrDvDevolucaoProdId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVDEVOLUCAOPRODID",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOPRODLOTE",gxz:"Z7535AuxiliarTrDvDevolucaoProdLote",gxold:"O7535AuxiliarTrDvDevolucaoProdLote",gxvar:"A7535AuxiliarTrDvDevolucaoProdLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7535AuxiliarTrDvDevolucaoProdLote=Value},v2z:function(Value){gx.O.Z7535AuxiliarTrDvDevolucaoProdLote=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOPRODLOTE",gx.O.A7535AuxiliarTrDvDevolucaoProdLote,0)},c2v:function(){gx.O.A7535AuxiliarTrDvDevolucaoProdLote=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVDEVOLUCAOPRODLOTE")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOPRODCODBA",gxz:"Z7536AuxiliarTrDvDevolucaoProdCodBa",gxold:"O7536AuxiliarTrDvDevolucaoProdCodBa",gxvar:"A7536AuxiliarTrDvDevolucaoProdCodBa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7536AuxiliarTrDvDevolucaoProdCodBa=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7536AuxiliarTrDvDevolucaoProdCodBa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOPRODCODBA",gx.O.A7536AuxiliarTrDvDevolucaoProdCodBa,0)},c2v:function(){gx.O.A7536AuxiliarTrDvDevolucaoProdCodBa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVDEVOLUCAOPRODCODBA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOQTDE",gxz:"Z7537AuxiliarTrDvDevolucaoQtde",gxold:"O7537AuxiliarTrDvDevolucaoQtde",gxvar:"A7537AuxiliarTrDvDevolucaoQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7537AuxiliarTrDvDevolucaoQtde=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7537AuxiliarTrDvDevolucaoQtde=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("AUXILIARTRDVDEVOLUCAOQTDE",gx.O.A7537AuxiliarTrDvDevolucaoQtde,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7537AuxiliarTrDvDevolucaoQtde=this.val()},val:function(){return gx.fn.getDecimalValue("AUXILIARTRDVDEVOLUCAOQTDE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOVALOR",gxz:"Z7538AuxiliarTrDvDevolucaoValor",gxold:"O7538AuxiliarTrDvDevolucaoValor",gxvar:"A7538AuxiliarTrDvDevolucaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7538AuxiliarTrDvDevolucaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7538AuxiliarTrDvDevolucaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("AUXILIARTRDVDEVOLUCAOVALOR",gx.O.A7538AuxiliarTrDvDevolucaoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7538AuxiliarTrDvDevolucaoValor=this.val()},val:function(){return gx.fn.getDecimalValue("AUXILIARTRDVDEVOLUCAOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOSAIORIEMP",gxz:"Z7517AuxiliarTrDvDevolucaoSaiOriEmp",gxold:"O7517AuxiliarTrDvDevolucaoSaiOriEmp",gxvar:"A7517AuxiliarTrDvDevolucaoSaiOriEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7517AuxiliarTrDvDevolucaoSaiOriEmp=Value},v2z:function(Value){gx.O.Z7517AuxiliarTrDvDevolucaoSaiOriEmp=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOSAIORIEMP",gx.O.A7517AuxiliarTrDvDevolucaoSaiOriEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7517AuxiliarTrDvDevolucaoSaiOriEmp=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVDEVOLUCAOSAIORIEMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOSAIORIID",gxz:"Z7518AuxiliarTrDvDevolucaoSaiOriId",gxold:"O7518AuxiliarTrDvDevolucaoSaiOriId",gxvar:"A7518AuxiliarTrDvDevolucaoSaiOriId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7518AuxiliarTrDvDevolucaoSaiOriId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7518AuxiliarTrDvDevolucaoSaiOriId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOSAIORIID",gx.O.A7518AuxiliarTrDvDevolucaoSaiOriId,0)},c2v:function(){gx.O.A7518AuxiliarTrDvDevolucaoSaiOriId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVDEVOLUCAOSAIORIID",'.')},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOSAIORISEQ",gxz:"Z7519AuxiliarTrDvDevolucaoSaiOriSeq",gxold:"O7519AuxiliarTrDvDevolucaoSaiOriSeq",gxvar:"A7519AuxiliarTrDvDevolucaoSaiOriSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7519AuxiliarTrDvDevolucaoSaiOriSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7519AuxiliarTrDvDevolucaoSaiOriSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOSAIORISEQ",gx.O.A7519AuxiliarTrDvDevolucaoSaiOriSeq,0)},c2v:function(){gx.O.A7519AuxiliarTrDvDevolucaoSaiOriSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVDEVOLUCAOSAIORISEQ",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOENTRADAEM",gxz:"Z7514AuxiliarTrDvDevolucaoEntradaEm",gxold:"O7514AuxiliarTrDvDevolucaoEntradaEm",gxvar:"A7514AuxiliarTrDvDevolucaoEntradaEm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7514AuxiliarTrDvDevolucaoEntradaEm=Value},v2z:function(Value){gx.O.Z7514AuxiliarTrDvDevolucaoEntradaEm=Value},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOENTRADAEM",gx.O.A7514AuxiliarTrDvDevolucaoEntradaEm,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7514AuxiliarTrDvDevolucaoEntradaEm=this.val()},val:function(){return gx.fn.getControlValue("AUXILIARTRDVDEVOLUCAOENTRADAEM")},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOENTRADAID",gxz:"Z7515AuxiliarTrDvDevolucaoEntradaId",gxold:"O7515AuxiliarTrDvDevolucaoEntradaId",gxvar:"A7515AuxiliarTrDvDevolucaoEntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7515AuxiliarTrDvDevolucaoEntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7515AuxiliarTrDvDevolucaoEntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOENTRADAID",gx.O.A7515AuxiliarTrDvDevolucaoEntradaId,0)},c2v:function(){gx.O.A7515AuxiliarTrDvDevolucaoEntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVDEVOLUCAOENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVDEVOLUCAOENTRADASE",gxz:"Z7516AuxiliarTrDvDevolucaoEntradaSe",gxold:"O7516AuxiliarTrDvDevolucaoEntradaSe",gxvar:"A7516AuxiliarTrDvDevolucaoEntradaSe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7516AuxiliarTrDvDevolucaoEntradaSe=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7516AuxiliarTrDvDevolucaoEntradaSe=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AUXILIARTRDVDEVOLUCAOENTRADASE",gx.O.A7516AuxiliarTrDvDevolucaoEntradaSe,0)},c2v:function(){gx.O.A7516AuxiliarTrDvDevolucaoEntradaSe=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AUXILIARTRDVDEVOLUCAOENTRADASE",'.')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"BTNHELP",grid:0};
   this.A7539AuxiliarTrDvDevolucaoEmpresaId = "" ;
   this.Z7539AuxiliarTrDvDevolucaoEmpresaId = "" ;
   this.O7539AuxiliarTrDvDevolucaoEmpresaId = "" ;
   this.A7540AuxiliarTrDvDevolucaoTipo = "" ;
   this.Z7540AuxiliarTrDvDevolucaoTipo = "" ;
   this.O7540AuxiliarTrDvDevolucaoTipo = "" ;
   this.A7541AuxiliarTrDvDevolucaoNumero = 0 ;
   this.Z7541AuxiliarTrDvDevolucaoNumero = 0 ;
   this.O7541AuxiliarTrDvDevolucaoNumero = 0 ;
   this.A7542AuxiliarTrDvDevolucaoSeq = 0 ;
   this.Z7542AuxiliarTrDvDevolucaoSeq = 0 ;
   this.O7542AuxiliarTrDvDevolucaoSeq = 0 ;
   this.A7531AuxiliarTrDvDevolucaoFilialEmp = "" ;
   this.Z7531AuxiliarTrDvDevolucaoFilialEmp = "" ;
   this.O7531AuxiliarTrDvDevolucaoFilialEmp = "" ;
   this.A7532AuxiliarTrDvDevolucaoFilIiald = 0 ;
   this.Z7532AuxiliarTrDvDevolucaoFilIiald = 0 ;
   this.O7532AuxiliarTrDvDevolucaoFilIiald = 0 ;
   this.A7533AuxiliarTrDvDevolucaoProdEmpId = "" ;
   this.Z7533AuxiliarTrDvDevolucaoProdEmpId = "" ;
   this.O7533AuxiliarTrDvDevolucaoProdEmpId = "" ;
   this.A7534AuxiliarTrDvDevolucaoProdId = 0 ;
   this.Z7534AuxiliarTrDvDevolucaoProdId = 0 ;
   this.O7534AuxiliarTrDvDevolucaoProdId = 0 ;
   this.A7535AuxiliarTrDvDevolucaoProdLote = "" ;
   this.Z7535AuxiliarTrDvDevolucaoProdLote = "" ;
   this.O7535AuxiliarTrDvDevolucaoProdLote = "" ;
   this.A7536AuxiliarTrDvDevolucaoProdCodBa = 0 ;
   this.Z7536AuxiliarTrDvDevolucaoProdCodBa = 0 ;
   this.O7536AuxiliarTrDvDevolucaoProdCodBa = 0 ;
   this.A7537AuxiliarTrDvDevolucaoQtde = 0 ;
   this.Z7537AuxiliarTrDvDevolucaoQtde = 0 ;
   this.O7537AuxiliarTrDvDevolucaoQtde = 0 ;
   this.A7538AuxiliarTrDvDevolucaoValor = 0 ;
   this.Z7538AuxiliarTrDvDevolucaoValor = 0 ;
   this.O7538AuxiliarTrDvDevolucaoValor = 0 ;
   this.A7517AuxiliarTrDvDevolucaoSaiOriEmp = "" ;
   this.Z7517AuxiliarTrDvDevolucaoSaiOriEmp = "" ;
   this.O7517AuxiliarTrDvDevolucaoSaiOriEmp = "" ;
   this.A7518AuxiliarTrDvDevolucaoSaiOriId = 0 ;
   this.Z7518AuxiliarTrDvDevolucaoSaiOriId = 0 ;
   this.O7518AuxiliarTrDvDevolucaoSaiOriId = 0 ;
   this.A7519AuxiliarTrDvDevolucaoSaiOriSeq = 0 ;
   this.Z7519AuxiliarTrDvDevolucaoSaiOriSeq = 0 ;
   this.O7519AuxiliarTrDvDevolucaoSaiOriSeq = 0 ;
   this.A7514AuxiliarTrDvDevolucaoEntradaEm = "" ;
   this.Z7514AuxiliarTrDvDevolucaoEntradaEm = "" ;
   this.O7514AuxiliarTrDvDevolucaoEntradaEm = "" ;
   this.A7515AuxiliarTrDvDevolucaoEntradaId = 0 ;
   this.Z7515AuxiliarTrDvDevolucaoEntradaId = 0 ;
   this.O7515AuxiliarTrDvDevolucaoEntradaId = 0 ;
   this.A7516AuxiliarTrDvDevolucaoEntradaSe = 0 ;
   this.Z7516AuxiliarTrDvDevolucaoEntradaSe = 0 ;
   this.O7516AuxiliarTrDvDevolucaoEntradaSe = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A7539AuxiliarTrDvDevolucaoEmpresaId = "" ;
   this.A7540AuxiliarTrDvDevolucaoTipo = "" ;
   this.A7541AuxiliarTrDvDevolucaoNumero = 0 ;
   this.A7542AuxiliarTrDvDevolucaoSeq = 0 ;
   this.A7531AuxiliarTrDvDevolucaoFilialEmp = "" ;
   this.A7532AuxiliarTrDvDevolucaoFilIiald = 0 ;
   this.A7533AuxiliarTrDvDevolucaoProdEmpId = "" ;
   this.A7534AuxiliarTrDvDevolucaoProdId = 0 ;
   this.A7535AuxiliarTrDvDevolucaoProdLote = "" ;
   this.A7536AuxiliarTrDvDevolucaoProdCodBa = 0 ;
   this.A7537AuxiliarTrDvDevolucaoQtde = 0 ;
   this.A7538AuxiliarTrDvDevolucaoValor = 0 ;
   this.A7517AuxiliarTrDvDevolucaoSaiOriEmp = "" ;
   this.A7518AuxiliarTrDvDevolucaoSaiOriId = 0 ;
   this.A7519AuxiliarTrDvDevolucaoSaiOriSeq = 0 ;
   this.A7514AuxiliarTrDvDevolucaoEntradaEm = "" ;
   this.A7515AuxiliarTrDvDevolucaoEntradaId = 0 ;
   this.A7516AuxiliarTrDvDevolucaoEntradaSe = 0 ;
   this.Events = {"e12as571_client": ["ENTER", true] ,"e13as571_client": ["CANCEL", true] ,"e11as571_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tauxiliartrdvdevolucao());
