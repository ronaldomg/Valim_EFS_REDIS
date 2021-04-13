/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:47:15.15
*/
gx.evt.autoSkip = false;
gx.define('tmapapreco', false, function () {
   this.ServerClass =  "tmapapreco" ;
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
   this.Valid_Solicitacaoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITACAOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Solicitacaoitemseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Solicitacaoitemseq",["gx.O.A3370SolicitacaoEmpresaId", "gx.O.A3371SolicitacaoNumero", "gx.O.A3392SolicitacaoItemSeq"],[]);
      return true;
   }
   this.Valid_Mapapreconumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Mapapreconumero",["gx.O.A3370SolicitacaoEmpresaId", "gx.O.A3371SolicitacaoNumero", "gx.O.A3392SolicitacaoItemSeq", "gx.O.A3405MapaPrecoNumero", "gx.O.A3653MapaPrecoProdutoEmpId", "gx.O.A3654MapaPrecoProdutoId", "gx.num.urlDecimal(gx.O.A3410MapaPrecoItemQtdePedida,\'.\',\',\')", "gx.O.A3655MapaPrecoItemMarca1", "gx.O.A3656MapaPrecoItemMarca2", "gx.O.A3657MapaPrecoItemMarca3", "gx.O.A3658MapaPrecoItemMarcaInad", "gx.num.urlDecimal(gx.O.A3659MapaPrecoItemVlrCompAno,\'.\',\',\')", 'gx.date.urlDate(gx.O.A3660MapaPrecoItemDataUltComp1,"DMY4")', "gx.O.A3661MapaPrecoItemFornecEmpId1", "gx.O.A3662MapaPrecoItemFornecUltComp1", "gx.num.urlDecimal(gx.O.A3663MapaPrecoItemQtdeUltComp1,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3664MapaPrecoItemPrecoUltComp1,\'.\',\',\')", 'gx.date.urlDate(gx.O.A3665MapaPrecoItemDataUltComp2,"DMY4")', "gx.O.A3666MapaPrecoItemFornecEmpId2", "gx.O.A3667MapaPrecoItemFornecUltComp2", "gx.num.urlDecimal(gx.O.A3668MapaPrecoItemQtdeUltComp2,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3669MapaPrecoItemPrecoUltComp2,\'.\',\',\')", 'gx.date.urlDate(gx.O.A3670MapaPrecoItemDataUltComp3,"DMY4")', "gx.O.A3671MapaPrecoItemFornecEmpId3", "gx.O.A3672MapaPrecoItemFornecUltComp3", "gx.num.urlDecimal(gx.O.A3673MapaPrecoItemQtdeUltComp3,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3674MapaPrecoItemPrecoUltComp3,\'.\',\',\')", "gx.O.A3407MapaPrecoTipoPreco", "gx.O.A3675MapaPrecoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A3406MapaPrecoDataHoraAlt,"DMY4")'],["A3653MapaPrecoProdutoEmpId", "A3654MapaPrecoProdutoId", "A3410MapaPrecoItemQtdePedida", "A3655MapaPrecoItemMarca1", "A3656MapaPrecoItemMarca2", "A3657MapaPrecoItemMarca3", "A3658MapaPrecoItemMarcaInad", "A3659MapaPrecoItemVlrCompAno", "A3660MapaPrecoItemDataUltComp1", "A3661MapaPrecoItemFornecEmpId1", "A3662MapaPrecoItemFornecUltComp1", "A3663MapaPrecoItemQtdeUltComp1", "A3664MapaPrecoItemPrecoUltComp1", "A3665MapaPrecoItemDataUltComp2", "A3666MapaPrecoItemFornecEmpId2", "A3667MapaPrecoItemFornecUltComp2", "A3668MapaPrecoItemQtdeUltComp2", "A3669MapaPrecoItemPrecoUltComp2", "A3670MapaPrecoItemDataUltComp3", "A3671MapaPrecoItemFornecEmpId3", "A3672MapaPrecoItemFornecUltComp3", "A3673MapaPrecoItemQtdeUltComp3", "A3674MapaPrecoItemPrecoUltComp3", "A3407MapaPrecoTipoPreco", "A3675MapaPrecoUsuarioAlt", "A3406MapaPrecoDataHoraAlt", "Gx_mode", "Z3370SolicitacaoEmpresaId", "Z3371SolicitacaoNumero", "Z3392SolicitacaoItemSeq", "Z3405MapaPrecoNumero", "Z3653MapaPrecoProdutoEmpId", "Z3654MapaPrecoProdutoId", "Z3410MapaPrecoItemQtdePedida", "Z3655MapaPrecoItemMarca1", "Z3656MapaPrecoItemMarca2", "Z3657MapaPrecoItemMarca3", "Z3658MapaPrecoItemMarcaInad", "Z3659MapaPrecoItemVlrCompAno", "Z3660MapaPrecoItemDataUltComp1", "Z3661MapaPrecoItemFornecEmpId1", "Z3662MapaPrecoItemFornecUltComp1", "Z3663MapaPrecoItemQtdeUltComp1", "Z3664MapaPrecoItemPrecoUltComp1", "Z3665MapaPrecoItemDataUltComp2", "Z3666MapaPrecoItemFornecEmpId2", "Z3667MapaPrecoItemFornecUltComp2", "Z3668MapaPrecoItemQtdeUltComp2", "Z3669MapaPrecoItemPrecoUltComp2", "Z3670MapaPrecoItemDataUltComp3", "Z3671MapaPrecoItemFornecEmpId3", "Z3672MapaPrecoItemFornecUltComp3", "Z3673MapaPrecoItemQtdeUltComp3", "Z3674MapaPrecoItemPrecoUltComp3", "Z3407MapaPrecoTipoPreco", "Z3675MapaPrecoUsuarioAlt", "Z3406MapaPrecoDataHoraAlt", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e116z390_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e126z390_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e136z390_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,103,105,108,110,113,115,118,120,123,125,128,130,133,135,138,140,143,145,149,152,154,157,159,160,169,171,173];
   this.GXLastCtrlId =173;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitacaoempresaid,isvalid:null,rgrid:[],fld:"SOLICITACAOEMPRESAID",gxz:"Z3370SolicitacaoEmpresaId",gxold:"O3370SolicitacaoEmpresaId",gxvar:"A3370SolicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3370SolicitacaoEmpresaId=Value},v2z:function(Value){gx.O.Z3370SolicitacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SOLICITACAOEMPRESAID",gx.O.A3370SolicitacaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3370SolicitacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SOLICITACAOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitacaonumero,isvalid:null,rgrid:[],fld:"SOLICITACAONUMERO",gxz:"Z3371SolicitacaoNumero",gxold:"O3371SolicitacaoNumero",gxvar:"A3371SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3371SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3371SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SOLICITACAONUMERO",gx.O.A3371SolicitacaoNumero,0)},c2v:function(){gx.O.A3371SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Solicitacaoitemseq,isvalid:null,rgrid:[],fld:"SOLICITACAOITEMSEQ",gxz:"Z3392SolicitacaoItemSeq",gxold:"O3392SolicitacaoItemSeq",gxvar:"A3392SolicitacaoItemSeq",ucs:[],op:[],ip:[24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3392SolicitacaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3392SolicitacaoItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SOLICITACAOITEMSEQ",gx.O.A3392SolicitacaoItemSeq,0)},c2v:function(){gx.O.A3392SolicitacaoItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SOLICITACAOITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mapapreconumero,isvalid:null,rgrid:[],fld:"MAPAPRECONUMERO",gxz:"Z3405MapaPrecoNumero",gxold:"O3405MapaPrecoNumero",gxvar:"A3405MapaPrecoNumero",ucs:[],op:[159,154,149,145,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35],ip:[159,154,149,145,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3405MapaPrecoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3405MapaPrecoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MAPAPRECONUMERO",gx.O.A3405MapaPrecoNumero,0)},c2v:function(){gx.O.A3405MapaPrecoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MAPAPRECONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOPRODUTOEMPID",gxz:"Z3653MapaPrecoProdutoEmpId",gxold:"O3653MapaPrecoProdutoEmpId",gxvar:"A3653MapaPrecoProdutoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3653MapaPrecoProdutoEmpId=Value},v2z:function(Value){gx.O.Z3653MapaPrecoProdutoEmpId=Value},v2c:function(){gx.fn.setControlValue("MAPAPRECOPRODUTOEMPID",gx.O.A3653MapaPrecoProdutoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3653MapaPrecoProdutoEmpId=this.val()},val:function(){return gx.fn.getControlValue("MAPAPRECOPRODUTOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOPRODUTOID",gxz:"Z3654MapaPrecoProdutoId",gxold:"O3654MapaPrecoProdutoId",gxvar:"A3654MapaPrecoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3654MapaPrecoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3654MapaPrecoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MAPAPRECOPRODUTOID",gx.O.A3654MapaPrecoProdutoId,0)},c2v:function(){gx.O.A3654MapaPrecoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MAPAPRECOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMQTDEPEDIDA",gxz:"Z3410MapaPrecoItemQtdePedida",gxold:"O3410MapaPrecoItemQtdePedida",gxvar:"A3410MapaPrecoItemQtdePedida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3410MapaPrecoItemQtdePedida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3410MapaPrecoItemQtdePedida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MAPAPRECOITEMQTDEPEDIDA",gx.O.A3410MapaPrecoItemQtdePedida,3,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3410MapaPrecoItemQtdePedida=this.val()},val:function(){return gx.fn.getDecimalValue("MAPAPRECOITEMQTDEPEDIDA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMMARCA1",gxz:"Z3655MapaPrecoItemMarca1",gxold:"O3655MapaPrecoItemMarca1",gxvar:"A3655MapaPrecoItemMarca1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3655MapaPrecoItemMarca1=Value},v2z:function(Value){gx.O.Z3655MapaPrecoItemMarca1=Value},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMMARCA1",gx.O.A3655MapaPrecoItemMarca1,0)},c2v:function(){gx.O.A3655MapaPrecoItemMarca1=this.val()},val:function(){return gx.fn.getControlValue("MAPAPRECOITEMMARCA1")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMMARCA2",gxz:"Z3656MapaPrecoItemMarca2",gxold:"O3656MapaPrecoItemMarca2",gxvar:"A3656MapaPrecoItemMarca2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3656MapaPrecoItemMarca2=Value},v2z:function(Value){gx.O.Z3656MapaPrecoItemMarca2=Value},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMMARCA2",gx.O.A3656MapaPrecoItemMarca2,0)},c2v:function(){gx.O.A3656MapaPrecoItemMarca2=this.val()},val:function(){return gx.fn.getControlValue("MAPAPRECOITEMMARCA2")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMMARCA3",gxz:"Z3657MapaPrecoItemMarca3",gxold:"O3657MapaPrecoItemMarca3",gxvar:"A3657MapaPrecoItemMarca3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3657MapaPrecoItemMarca3=Value},v2z:function(Value){gx.O.Z3657MapaPrecoItemMarca3=Value},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMMARCA3",gx.O.A3657MapaPrecoItemMarca3,0)},c2v:function(){gx.O.A3657MapaPrecoItemMarca3=this.val()},val:function(){return gx.fn.getControlValue("MAPAPRECOITEMMARCA3")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMMARCAINAD",gxz:"Z3658MapaPrecoItemMarcaInad",gxold:"O3658MapaPrecoItemMarcaInad",gxvar:"A3658MapaPrecoItemMarcaInad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3658MapaPrecoItemMarcaInad=Value},v2z:function(Value){gx.O.Z3658MapaPrecoItemMarcaInad=Value},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMMARCAINAD",gx.O.A3658MapaPrecoItemMarcaInad,0)},c2v:function(){gx.O.A3658MapaPrecoItemMarcaInad=this.val()},val:function(){return gx.fn.getControlValue("MAPAPRECOITEMMARCAINAD")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMVLRCOMPANO",gxz:"Z3659MapaPrecoItemVlrCompAno",gxold:"O3659MapaPrecoItemVlrCompAno",gxvar:"A3659MapaPrecoItemVlrCompAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3659MapaPrecoItemVlrCompAno=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3659MapaPrecoItemVlrCompAno=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MAPAPRECOITEMVLRCOMPANO",gx.O.A3659MapaPrecoItemVlrCompAno,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3659MapaPrecoItemVlrCompAno=this.val()},val:function(){return gx.fn.getDecimalValue("MAPAPRECOITEMVLRCOMPANO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMDATAULTCOMP1",gxz:"Z3660MapaPrecoItemDataUltComp1",gxold:"O3660MapaPrecoItemDataUltComp1",gxvar:"A3660MapaPrecoItemDataUltComp1",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3660MapaPrecoItemDataUltComp1=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3660MapaPrecoItemDataUltComp1=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMDATAULTCOMP1",gx.O.A3660MapaPrecoItemDataUltComp1,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3660MapaPrecoItemDataUltComp1=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("MAPAPRECOITEMDATAULTCOMP1")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMFORNECEMPID1",gxz:"Z3661MapaPrecoItemFornecEmpId1",gxold:"O3661MapaPrecoItemFornecEmpId1",gxvar:"A3661MapaPrecoItemFornecEmpId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3661MapaPrecoItemFornecEmpId1=Value},v2z:function(Value){gx.O.Z3661MapaPrecoItemFornecEmpId1=Value},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMFORNECEMPID1",gx.O.A3661MapaPrecoItemFornecEmpId1,0)},c2v:function(){gx.O.A3661MapaPrecoItemFornecEmpId1=this.val()},val:function(){return gx.fn.getControlValue("MAPAPRECOITEMFORNECEMPID1")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMFORNECULTCOMP1",gxz:"Z3662MapaPrecoItemFornecUltComp1",gxold:"O3662MapaPrecoItemFornecUltComp1",gxvar:"A3662MapaPrecoItemFornecUltComp1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3662MapaPrecoItemFornecUltComp1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3662MapaPrecoItemFornecUltComp1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMFORNECULTCOMP1",gx.O.A3662MapaPrecoItemFornecUltComp1,0)},c2v:function(){gx.O.A3662MapaPrecoItemFornecUltComp1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MAPAPRECOITEMFORNECULTCOMP1",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMQTDEULTCOMP1",gxz:"Z3663MapaPrecoItemQtdeUltComp1",gxold:"O3663MapaPrecoItemQtdeUltComp1",gxvar:"A3663MapaPrecoItemQtdeUltComp1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3663MapaPrecoItemQtdeUltComp1=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3663MapaPrecoItemQtdeUltComp1=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MAPAPRECOITEMQTDEULTCOMP1",gx.O.A3663MapaPrecoItemQtdeUltComp1,3,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3663MapaPrecoItemQtdeUltComp1=this.val()},val:function(){return gx.fn.getDecimalValue("MAPAPRECOITEMQTDEULTCOMP1",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMPRECOULTCOMP1",gxz:"Z3664MapaPrecoItemPrecoUltComp1",gxold:"O3664MapaPrecoItemPrecoUltComp1",gxvar:"A3664MapaPrecoItemPrecoUltComp1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3664MapaPrecoItemPrecoUltComp1=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3664MapaPrecoItemPrecoUltComp1=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MAPAPRECOITEMPRECOULTCOMP1",gx.O.A3664MapaPrecoItemPrecoUltComp1,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3664MapaPrecoItemPrecoUltComp1=this.val()},val:function(){return gx.fn.getDecimalValue("MAPAPRECOITEMPRECOULTCOMP1",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMDATAULTCOMP2",gxz:"Z3665MapaPrecoItemDataUltComp2",gxold:"O3665MapaPrecoItemDataUltComp2",gxvar:"A3665MapaPrecoItemDataUltComp2",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3665MapaPrecoItemDataUltComp2=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3665MapaPrecoItemDataUltComp2=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMDATAULTCOMP2",gx.O.A3665MapaPrecoItemDataUltComp2,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3665MapaPrecoItemDataUltComp2=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("MAPAPRECOITEMDATAULTCOMP2")},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[103]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMFORNECEMPID2",gxz:"Z3666MapaPrecoItemFornecEmpId2",gxold:"O3666MapaPrecoItemFornecEmpId2",gxvar:"A3666MapaPrecoItemFornecEmpId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3666MapaPrecoItemFornecEmpId2=Value},v2z:function(Value){gx.O.Z3666MapaPrecoItemFornecEmpId2=Value},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMFORNECEMPID2",gx.O.A3666MapaPrecoItemFornecEmpId2,0)},c2v:function(){gx.O.A3666MapaPrecoItemFornecEmpId2=this.val()},val:function(){return gx.fn.getControlValue("MAPAPRECOITEMFORNECEMPID2")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMFORNECULTCOMP2",gxz:"Z3667MapaPrecoItemFornecUltComp2",gxold:"O3667MapaPrecoItemFornecUltComp2",gxvar:"A3667MapaPrecoItemFornecUltComp2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3667MapaPrecoItemFornecUltComp2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3667MapaPrecoItemFornecUltComp2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMFORNECULTCOMP2",gx.O.A3667MapaPrecoItemFornecUltComp2,0)},c2v:function(){gx.O.A3667MapaPrecoItemFornecUltComp2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MAPAPRECOITEMFORNECULTCOMP2",'.')},nac:gx.falseFn};
   GXValidFnc[113]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMQTDEULTCOMP2",gxz:"Z3668MapaPrecoItemQtdeUltComp2",gxold:"O3668MapaPrecoItemQtdeUltComp2",gxvar:"A3668MapaPrecoItemQtdeUltComp2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3668MapaPrecoItemQtdeUltComp2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3668MapaPrecoItemQtdeUltComp2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MAPAPRECOITEMQTDEULTCOMP2",gx.O.A3668MapaPrecoItemQtdeUltComp2,3,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3668MapaPrecoItemQtdeUltComp2=this.val()},val:function(){return gx.fn.getDecimalValue("MAPAPRECOITEMQTDEULTCOMP2",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[118]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMPRECOULTCOMP2",gxz:"Z3669MapaPrecoItemPrecoUltComp2",gxold:"O3669MapaPrecoItemPrecoUltComp2",gxvar:"A3669MapaPrecoItemPrecoUltComp2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3669MapaPrecoItemPrecoUltComp2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3669MapaPrecoItemPrecoUltComp2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MAPAPRECOITEMPRECOULTCOMP2",gx.O.A3669MapaPrecoItemPrecoUltComp2,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3669MapaPrecoItemPrecoUltComp2=this.val()},val:function(){return gx.fn.getDecimalValue("MAPAPRECOITEMPRECOULTCOMP2",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[123]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMDATAULTCOMP3",gxz:"Z3670MapaPrecoItemDataUltComp3",gxold:"O3670MapaPrecoItemDataUltComp3",gxvar:"A3670MapaPrecoItemDataUltComp3",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3670MapaPrecoItemDataUltComp3=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3670MapaPrecoItemDataUltComp3=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMDATAULTCOMP3",gx.O.A3670MapaPrecoItemDataUltComp3,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3670MapaPrecoItemDataUltComp3=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("MAPAPRECOITEMDATAULTCOMP3")},nac:gx.falseFn};
   this.declareDomainHdlr( 125 , function() {
   });
   GXValidFnc[128]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMFORNECEMPID3",gxz:"Z3671MapaPrecoItemFornecEmpId3",gxold:"O3671MapaPrecoItemFornecEmpId3",gxvar:"A3671MapaPrecoItemFornecEmpId3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3671MapaPrecoItemFornecEmpId3=Value},v2z:function(Value){gx.O.Z3671MapaPrecoItemFornecEmpId3=Value},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMFORNECEMPID3",gx.O.A3671MapaPrecoItemFornecEmpId3,0)},c2v:function(){gx.O.A3671MapaPrecoItemFornecEmpId3=this.val()},val:function(){return gx.fn.getControlValue("MAPAPRECOITEMFORNECEMPID3")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMFORNECULTCOMP3",gxz:"Z3672MapaPrecoItemFornecUltComp3",gxold:"O3672MapaPrecoItemFornecUltComp3",gxvar:"A3672MapaPrecoItemFornecUltComp3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3672MapaPrecoItemFornecUltComp3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3672MapaPrecoItemFornecUltComp3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MAPAPRECOITEMFORNECULTCOMP3",gx.O.A3672MapaPrecoItemFornecUltComp3,0)},c2v:function(){gx.O.A3672MapaPrecoItemFornecUltComp3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MAPAPRECOITEMFORNECULTCOMP3",'.')},nac:gx.falseFn};
   GXValidFnc[138]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMQTDEULTCOMP3",gxz:"Z3673MapaPrecoItemQtdeUltComp3",gxold:"O3673MapaPrecoItemQtdeUltComp3",gxvar:"A3673MapaPrecoItemQtdeUltComp3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3673MapaPrecoItemQtdeUltComp3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3673MapaPrecoItemQtdeUltComp3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MAPAPRECOITEMQTDEULTCOMP3",gx.O.A3673MapaPrecoItemQtdeUltComp3,3,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3673MapaPrecoItemQtdeUltComp3=this.val()},val:function(){return gx.fn.getDecimalValue("MAPAPRECOITEMQTDEULTCOMP3",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 140 , function() {
   });
   GXValidFnc[143]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOITEMPRECOULTCOMP3",gxz:"Z3674MapaPrecoItemPrecoUltComp3",gxold:"O3674MapaPrecoItemPrecoUltComp3",gxvar:"A3674MapaPrecoItemPrecoUltComp3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3674MapaPrecoItemPrecoUltComp3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3674MapaPrecoItemPrecoUltComp3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MAPAPRECOITEMPRECOULTCOMP3",gx.O.A3674MapaPrecoItemPrecoUltComp3,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3674MapaPrecoItemPrecoUltComp3=this.val()},val:function(){return gx.fn.getDecimalValue("MAPAPRECOITEMPRECOULTCOMP3",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 145 , function() {
   });
   GXValidFnc[149]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOTIPOPRECO",gxz:"Z3407MapaPrecoTipoPreco",gxold:"O3407MapaPrecoTipoPreco",gxvar:"A3407MapaPrecoTipoPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.A3407MapaPrecoTipoPreco=Value},v2z:function(Value){gx.O.Z3407MapaPrecoTipoPreco=Value},v2c:function(){gx.fn.setRadioValue("MAPAPRECOTIPOPRECO",gx.O.A3407MapaPrecoTipoPreco)},c2v:function(){gx.O.A3407MapaPrecoTipoPreco=this.val()},val:function(){return gx.fn.getControlValue("MAPAPRECOTIPOPRECO")},nac:gx.falseFn};
   GXValidFnc[152]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[154]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECOUSUARIOALT",gxz:"Z3675MapaPrecoUsuarioAlt",gxold:"O3675MapaPrecoUsuarioAlt",gxvar:"A3675MapaPrecoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3675MapaPrecoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3675MapaPrecoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MAPAPRECOUSUARIOALT",gx.O.A3675MapaPrecoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3675MapaPrecoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MAPAPRECOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 154 , function() {
   });
   GXValidFnc[157]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[159]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MAPAPRECODATAHORAALT",gxz:"Z3406MapaPrecoDataHoraAlt",gxold:"O3406MapaPrecoDataHoraAlt",gxvar:"A3406MapaPrecoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3406MapaPrecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3406MapaPrecoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MAPAPRECODATAHORAALT",gx.O.A3406MapaPrecoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3406MapaPrecoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MAPAPRECODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 159 , function() {
   });
   GXValidFnc[160]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[171]={fld:"BTNHELP",grid:0};
   GXValidFnc[173]={fld:"PROMPT_3370_3371_3392",grid:390};
   this.A3370SolicitacaoEmpresaId = "" ;
   this.Z3370SolicitacaoEmpresaId = "" ;
   this.O3370SolicitacaoEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.Z3371SolicitacaoNumero = 0 ;
   this.O3371SolicitacaoNumero = 0 ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.Z3392SolicitacaoItemSeq = 0 ;
   this.O3392SolicitacaoItemSeq = 0 ;
   this.A3405MapaPrecoNumero = 0 ;
   this.Z3405MapaPrecoNumero = 0 ;
   this.O3405MapaPrecoNumero = 0 ;
   this.A3653MapaPrecoProdutoEmpId = "" ;
   this.Z3653MapaPrecoProdutoEmpId = "" ;
   this.O3653MapaPrecoProdutoEmpId = "" ;
   this.A3654MapaPrecoProdutoId = 0 ;
   this.Z3654MapaPrecoProdutoId = 0 ;
   this.O3654MapaPrecoProdutoId = 0 ;
   this.A3410MapaPrecoItemQtdePedida = 0 ;
   this.Z3410MapaPrecoItemQtdePedida = 0 ;
   this.O3410MapaPrecoItemQtdePedida = 0 ;
   this.A3655MapaPrecoItemMarca1 = "" ;
   this.Z3655MapaPrecoItemMarca1 = "" ;
   this.O3655MapaPrecoItemMarca1 = "" ;
   this.A3656MapaPrecoItemMarca2 = "" ;
   this.Z3656MapaPrecoItemMarca2 = "" ;
   this.O3656MapaPrecoItemMarca2 = "" ;
   this.A3657MapaPrecoItemMarca3 = "" ;
   this.Z3657MapaPrecoItemMarca3 = "" ;
   this.O3657MapaPrecoItemMarca3 = "" ;
   this.A3658MapaPrecoItemMarcaInad = "" ;
   this.Z3658MapaPrecoItemMarcaInad = "" ;
   this.O3658MapaPrecoItemMarcaInad = "" ;
   this.A3659MapaPrecoItemVlrCompAno = 0 ;
   this.Z3659MapaPrecoItemVlrCompAno = 0 ;
   this.O3659MapaPrecoItemVlrCompAno = 0 ;
   this.A3660MapaPrecoItemDataUltComp1 = gx.date.nullDate() ;
   this.Z3660MapaPrecoItemDataUltComp1 = gx.date.nullDate() ;
   this.O3660MapaPrecoItemDataUltComp1 = gx.date.nullDate() ;
   this.A3661MapaPrecoItemFornecEmpId1 = "" ;
   this.Z3661MapaPrecoItemFornecEmpId1 = "" ;
   this.O3661MapaPrecoItemFornecEmpId1 = "" ;
   this.A3662MapaPrecoItemFornecUltComp1 = 0 ;
   this.Z3662MapaPrecoItemFornecUltComp1 = 0 ;
   this.O3662MapaPrecoItemFornecUltComp1 = 0 ;
   this.A3663MapaPrecoItemQtdeUltComp1 = 0 ;
   this.Z3663MapaPrecoItemQtdeUltComp1 = 0 ;
   this.O3663MapaPrecoItemQtdeUltComp1 = 0 ;
   this.A3664MapaPrecoItemPrecoUltComp1 = 0 ;
   this.Z3664MapaPrecoItemPrecoUltComp1 = 0 ;
   this.O3664MapaPrecoItemPrecoUltComp1 = 0 ;
   this.A3665MapaPrecoItemDataUltComp2 = gx.date.nullDate() ;
   this.Z3665MapaPrecoItemDataUltComp2 = gx.date.nullDate() ;
   this.O3665MapaPrecoItemDataUltComp2 = gx.date.nullDate() ;
   this.A3666MapaPrecoItemFornecEmpId2 = "" ;
   this.Z3666MapaPrecoItemFornecEmpId2 = "" ;
   this.O3666MapaPrecoItemFornecEmpId2 = "" ;
   this.A3667MapaPrecoItemFornecUltComp2 = 0 ;
   this.Z3667MapaPrecoItemFornecUltComp2 = 0 ;
   this.O3667MapaPrecoItemFornecUltComp2 = 0 ;
   this.A3668MapaPrecoItemQtdeUltComp2 = 0 ;
   this.Z3668MapaPrecoItemQtdeUltComp2 = 0 ;
   this.O3668MapaPrecoItemQtdeUltComp2 = 0 ;
   this.A3669MapaPrecoItemPrecoUltComp2 = 0 ;
   this.Z3669MapaPrecoItemPrecoUltComp2 = 0 ;
   this.O3669MapaPrecoItemPrecoUltComp2 = 0 ;
   this.A3670MapaPrecoItemDataUltComp3 = gx.date.nullDate() ;
   this.Z3670MapaPrecoItemDataUltComp3 = gx.date.nullDate() ;
   this.O3670MapaPrecoItemDataUltComp3 = gx.date.nullDate() ;
   this.A3671MapaPrecoItemFornecEmpId3 = "" ;
   this.Z3671MapaPrecoItemFornecEmpId3 = "" ;
   this.O3671MapaPrecoItemFornecEmpId3 = "" ;
   this.A3672MapaPrecoItemFornecUltComp3 = 0 ;
   this.Z3672MapaPrecoItemFornecUltComp3 = 0 ;
   this.O3672MapaPrecoItemFornecUltComp3 = 0 ;
   this.A3673MapaPrecoItemQtdeUltComp3 = 0 ;
   this.Z3673MapaPrecoItemQtdeUltComp3 = 0 ;
   this.O3673MapaPrecoItemQtdeUltComp3 = 0 ;
   this.A3674MapaPrecoItemPrecoUltComp3 = 0 ;
   this.Z3674MapaPrecoItemPrecoUltComp3 = 0 ;
   this.O3674MapaPrecoItemPrecoUltComp3 = 0 ;
   this.A3407MapaPrecoTipoPreco = "" ;
   this.Z3407MapaPrecoTipoPreco = "" ;
   this.O3407MapaPrecoTipoPreco = "" ;
   this.A3675MapaPrecoUsuarioAlt = "" ;
   this.Z3675MapaPrecoUsuarioAlt = "" ;
   this.O3675MapaPrecoUsuarioAlt = "" ;
   this.A3406MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.Z3406MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.O3406MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3405MapaPrecoNumero = 0 ;
   this.A3653MapaPrecoProdutoEmpId = "" ;
   this.A3654MapaPrecoProdutoId = 0 ;
   this.A3410MapaPrecoItemQtdePedida = 0 ;
   this.A3655MapaPrecoItemMarca1 = "" ;
   this.A3656MapaPrecoItemMarca2 = "" ;
   this.A3657MapaPrecoItemMarca3 = "" ;
   this.A3658MapaPrecoItemMarcaInad = "" ;
   this.A3659MapaPrecoItemVlrCompAno = 0 ;
   this.A3660MapaPrecoItemDataUltComp1 = gx.date.nullDate() ;
   this.A3661MapaPrecoItemFornecEmpId1 = "" ;
   this.A3662MapaPrecoItemFornecUltComp1 = 0 ;
   this.A3663MapaPrecoItemQtdeUltComp1 = 0 ;
   this.A3664MapaPrecoItemPrecoUltComp1 = 0 ;
   this.A3665MapaPrecoItemDataUltComp2 = gx.date.nullDate() ;
   this.A3666MapaPrecoItemFornecEmpId2 = "" ;
   this.A3667MapaPrecoItemFornecUltComp2 = 0 ;
   this.A3668MapaPrecoItemQtdeUltComp2 = 0 ;
   this.A3669MapaPrecoItemPrecoUltComp2 = 0 ;
   this.A3670MapaPrecoItemDataUltComp3 = gx.date.nullDate() ;
   this.A3671MapaPrecoItemFornecEmpId3 = "" ;
   this.A3672MapaPrecoItemFornecUltComp3 = 0 ;
   this.A3673MapaPrecoItemQtdeUltComp3 = 0 ;
   this.A3674MapaPrecoItemPrecoUltComp3 = 0 ;
   this.A3407MapaPrecoTipoPreco = "" ;
   this.A3675MapaPrecoUsuarioAlt = "" ;
   this.A3406MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e126z390_client": ["ENTER", true] ,"e136z390_client": ["CANCEL", true] ,"e116z390_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_3370_3371_3392", [14,19,24]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tmapapreco());
