/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:34:18.17
*/
gx.evt.autoSkip = false;
gx.define('tforcavendaitens', false, function () {
   this.ServerClass =  "tforcavendaitens" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
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
      this.AV12FvId=gx.fn.getIntegerValue("vFVID",'.') ;
      this.AV13FvItensSequencia=gx.fn.getIntegerValue("vFVITENSSEQUENCIA",'.') ;
      this.A10617FVEmpresa=gx.fn.getControlValue("FVEMPRESA") ;
      this.A10649FVItensLoteCombinacao=gx.fn.getControlValue("FVITENSLOTECOMBINACAO") ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.AV39Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV38Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Fvid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Fvid",["gx.O.A10617FVEmpresa", "gx.O.A10618FVId"],[]);
      return true;
   }
   this.Valid_Fvitenssequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FVITENSSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Produtoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Produtoid",["gx.O.A2964ProdutoEmpresaId", "gx.O.A2965ProdutoId", "gx.O.A2961ProdutoDescricaoResumida", "gx.O.AV37ProdutoId"],["A2961ProdutoDescricaoResumida", "AV37ProdutoId"]);
      return true;
   }
   this.Validv_Desclote1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDESCLOTE1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Desclote2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDESCLOTE2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Desclote3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDESCLOTE3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Desclote4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDESCLOTE4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Loteprodutocombinacao=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Loteprodutocombinacao",["gx.O.AV11EmpresaPadrao", "gx.O.AV37ProdutoId", "gx.O.AV16LoteProdutoCombinacao", "gx.O.AV26DescLote1", "gx.O.AV27DescLote2", "gx.O.AV28DescLote3", "gx.O.AV29DescLote4", "gx.O.AV32Lote1", "gx.O.AV33Lote2", "gx.O.AV34Lote3", "gx.O.AV35Lote4", "gx.O.AV30DescLote5", "gx.O.AV36Lote5"],["AV26DescLote1", "AV32Lote1", "AV27DescLote2", "AV33Lote2", "AV28DescLote3", "AV34Lote3", "AV29DescLote4", "AV35Lote4", "AV30DescLote5", "AV36Lote5"]);
      return true;
   }
   this.e12fe2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13fe787_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14fe787_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,26,29,31,34,36,38,40,42,45,47,49,51,53,56,58,61,63,66,68,71,73,84,85,86,87,89,91];
   this.GXLastCtrlId =91;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fvid,isvalid:null,rgrid:[],fld:"FVID",gxz:"Z10618FVId",gxold:"O10618FVId",gxvar:"A10618FVId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10618FVId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10618FVId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVID",gx.O.A10618FVId,0)},c2v:function(){gx.O.A10618FVId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVID",'.')},nac:function(){return !(0==this.AV12FvId)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fvitenssequencia,isvalid:null,rgrid:[],fld:"FVITENSSEQUENCIA",gxz:"Z10619FVItensSequencia",gxold:"O10619FVItensSequencia",gxvar:"A10619FVItensSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10619FVItensSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10619FVItensSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVITENSSEQUENCIA",gx.O.A10619FVItensSequencia,0)},c2v:function(){gx.O.A10619FVItensSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVITENSSEQUENCIA",'.')},nac:function(){return !(0==this.AV13FvItensSequencia)}};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Produtoid,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[86,26],ip:[86,26,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PRODUTOID",gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTODESCRICAORESUMIDA",gxz:"Z2961ProdutoDescricaoResumida",gxold:"O2961ProdutoDescricaoResumida",gxvar:"A2961ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2961ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.Z2961ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("PRODUTODESCRICAORESUMIDA",gx.O.A2961ProdutoDescricaoResumida,0)},c2v:function(){gx.O.A2961ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("PRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[31]={fld:"TABLE6",grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Desclote1,isvalid:null,rgrid:[],fld:"vDESCLOTE1",gxz:"ZV26DescLote1",gxold:"OV26DescLote1",gxvar:"AV26DescLote1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DescLote1=Value},v2z:function(Value){gx.O.ZV26DescLote1=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE1",gx.O.AV26DescLote1,0)},c2v:function(){gx.O.AV26DescLote1=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE1")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Desclote2,isvalid:null,rgrid:[],fld:"vDESCLOTE2",gxz:"ZV27DescLote2",gxold:"OV27DescLote2",gxvar:"AV27DescLote2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DescLote2=Value},v2z:function(Value){gx.O.ZV27DescLote2=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE2",gx.O.AV27DescLote2,0)},c2v:function(){gx.O.AV27DescLote2=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE2")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Desclote3,isvalid:null,rgrid:[],fld:"vDESCLOTE3",gxz:"ZV28DescLote3",gxold:"OV28DescLote3",gxvar:"AV28DescLote3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DescLote3=Value},v2z:function(Value){gx.O.ZV28DescLote3=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE3",gx.O.AV28DescLote3,0)},c2v:function(){gx.O.AV28DescLote3=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE3")},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Desclote4,isvalid:null,rgrid:[],fld:"vDESCLOTE4",gxz:"ZV29DescLote4",gxold:"OV29DescLote4",gxvar:"AV29DescLote4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DescLote4=Value},v2z:function(Value){gx.O.ZV29DescLote4=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE4",gx.O.AV29DescLote4,0)},c2v:function(){gx.O.AV29DescLote4=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE4")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE5",gxz:"ZV30DescLote5",gxold:"OV30DescLote5",gxvar:"AV30DescLote5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30DescLote5=Value},v2z:function(Value){gx.O.ZV30DescLote5=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE5",gx.O.AV30DescLote5,0)},c2v:function(){gx.O.AV30DescLote5=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE5")},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE1",gxz:"ZV32Lote1",gxold:"OV32Lote1",gxvar:"AV32Lote1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Lote1=Value},v2z:function(Value){gx.O.ZV32Lote1=Value},v2c:function(){gx.fn.setControlValue("vLOTE1",gx.O.AV32Lote1,0)},c2v:function(){gx.O.AV32Lote1=this.val()},val:function(){return gx.fn.getControlValue("vLOTE1")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE2",gxz:"ZV33Lote2",gxold:"OV33Lote2",gxvar:"AV33Lote2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Lote2=Value},v2z:function(Value){gx.O.ZV33Lote2=Value},v2c:function(){gx.fn.setControlValue("vLOTE2",gx.O.AV33Lote2,0)},c2v:function(){gx.O.AV33Lote2=this.val()},val:function(){return gx.fn.getControlValue("vLOTE2")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE3",gxz:"ZV34Lote3",gxold:"OV34Lote3",gxvar:"AV34Lote3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34Lote3=Value},v2z:function(Value){gx.O.ZV34Lote3=Value},v2c:function(){gx.fn.setControlValue("vLOTE3",gx.O.AV34Lote3,0)},c2v:function(){gx.O.AV34Lote3=this.val()},val:function(){return gx.fn.getControlValue("vLOTE3")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE4",gxz:"ZV35Lote4",gxold:"OV35Lote4",gxvar:"AV35Lote4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35Lote4=Value},v2z:function(Value){gx.O.ZV35Lote4=Value},v2c:function(){gx.fn.setControlValue("vLOTE4",gx.O.AV35Lote4,0)},c2v:function(){gx.O.AV35Lote4=this.val()},val:function(){return gx.fn.getControlValue("vLOTE4")},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE5",gxz:"ZV36Lote5",gxold:"OV36Lote5",gxvar:"AV36Lote5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36Lote5=Value},v2z:function(Value){gx.O.ZV36Lote5=Value},v2c:function(){gx.fn.setControlValue("vLOTE5",gx.O.AV36Lote5,0)},c2v:function(){gx.O.AV36Lote5=this.val()},val:function(){return gx.fn.getControlValue("vLOTE5")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVITENSCODIGOBARRAS",gxz:"Z10650FVItensCodigoBarras",gxold:"O10650FVItensCodigoBarras",gxvar:"A10650FVItensCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10650FVItensCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10650FVItensCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVITENSCODIGOBARRAS",gx.O.A10650FVItensCodigoBarras,0)},c2v:function(){gx.O.A10650FVItensCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVITENSCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZZZZZZZZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVITENSQUANTIDADE",gxz:"Z10651FVItensQuantidade",gxold:"O10651FVItensQuantidade",gxvar:"A10651FVItensQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10651FVItensQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10651FVItensQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FVITENSQUANTIDADE",gx.O.A10651FVItensQuantidade,4,',')},c2v:function(){gx.O.A10651FVItensQuantidade=this.val()},val:function(){return gx.fn.getDecimalValue("FVITENSQUANTIDADE",'.',',')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVITENSVALORUNITARIO",gxz:"Z10652FVItensValorUnitario",gxold:"O10652FVItensValorUnitario",gxvar:"A10652FVItensValorUnitario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10652FVItensValorUnitario=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10652FVItensValorUnitario=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FVITENSVALORUNITARIO",gx.O.A10652FVItensValorUnitario,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10652FVItensValorUnitario=this.val()},val:function(){return gx.fn.getDecimalValue("FVITENSVALORUNITARIO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[71]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVITENSDESCONTO",gxz:"Z10653FVItensDesconto",gxold:"O10653FVItensDesconto",gxvar:"A10653FVItensDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10653FVItensDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10653FVItensDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FVITENSDESCONTO",gx.O.A10653FVItensDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10653FVItensDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("FVITENSDESCONTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[84]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV11EmpresaPadrao",gxold:"OV11EmpresaPadrao",gxvar:"AV11EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV11EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV11EmpresaPadrao,0)},c2v:function(){gx.O.AV11EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV19QtdeChar",gxold:"OV19QtdeChar",gxvar:"AV19QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV19QtdeChar,0)},c2v:function(){gx.O.AV19QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV37ProdutoId",gxold:"OV37ProdutoId",gxvar:"AV37ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV37ProdutoId,0)},c2v:function(){gx.O.AV37ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Loteprodutocombinacao,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV16LoteProdutoCombinacao",gxold:"OV16LoteProdutoCombinacao",gxvar:"AV16LoteProdutoCombinacao",ucs:[],op:[53,42,51,40,49,38,47,36,45,34],ip:[53,42,51,49,47,45,40,38,36,34,87,86,84],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV16LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV16LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV16LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"BTNHELP",grid:0};
   GXValidFnc[91]={fld:"PROMPT_10618",grid:787};
   this.A10618FVId = 0 ;
   this.Z10618FVId = 0 ;
   this.O10618FVId = 0 ;
   this.A10619FVItensSequencia = 0 ;
   this.Z10619FVItensSequencia = 0 ;
   this.O10619FVItensSequencia = 0 ;
   this.A2965ProdutoId = 0 ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.Z2961ProdutoDescricaoResumida = "" ;
   this.O2961ProdutoDescricaoResumida = "" ;
   this.AV26DescLote1 = "" ;
   this.ZV26DescLote1 = "" ;
   this.OV26DescLote1 = "" ;
   this.AV27DescLote2 = "" ;
   this.ZV27DescLote2 = "" ;
   this.OV27DescLote2 = "" ;
   this.AV28DescLote3 = "" ;
   this.ZV28DescLote3 = "" ;
   this.OV28DescLote3 = "" ;
   this.AV29DescLote4 = "" ;
   this.ZV29DescLote4 = "" ;
   this.OV29DescLote4 = "" ;
   this.AV30DescLote5 = "" ;
   this.ZV30DescLote5 = "" ;
   this.OV30DescLote5 = "" ;
   this.AV32Lote1 = "" ;
   this.ZV32Lote1 = "" ;
   this.OV32Lote1 = "" ;
   this.AV33Lote2 = "" ;
   this.ZV33Lote2 = "" ;
   this.OV33Lote2 = "" ;
   this.AV34Lote3 = "" ;
   this.ZV34Lote3 = "" ;
   this.OV34Lote3 = "" ;
   this.AV35Lote4 = "" ;
   this.ZV35Lote4 = "" ;
   this.OV35Lote4 = "" ;
   this.AV36Lote5 = "" ;
   this.ZV36Lote5 = "" ;
   this.OV36Lote5 = "" ;
   this.A10650FVItensCodigoBarras = 0 ;
   this.Z10650FVItensCodigoBarras = 0 ;
   this.O10650FVItensCodigoBarras = 0 ;
   this.A10651FVItensQuantidade = 0 ;
   this.Z10651FVItensQuantidade = 0 ;
   this.O10651FVItensQuantidade = 0 ;
   this.A10652FVItensValorUnitario = 0 ;
   this.Z10652FVItensValorUnitario = 0 ;
   this.O10652FVItensValorUnitario = 0 ;
   this.A10653FVItensDesconto = 0 ;
   this.Z10653FVItensDesconto = 0 ;
   this.O10653FVItensDesconto = 0 ;
   this.AV11EmpresaPadrao = "" ;
   this.ZV11EmpresaPadrao = "" ;
   this.OV11EmpresaPadrao = "" ;
   this.AV19QtdeChar = 0 ;
   this.ZV19QtdeChar = 0 ;
   this.OV19QtdeChar = 0 ;
   this.AV37ProdutoId = 0 ;
   this.ZV37ProdutoId = 0 ;
   this.OV37ProdutoId = 0 ;
   this.AV16LoteProdutoCombinacao = "" ;
   this.ZV16LoteProdutoCombinacao = "" ;
   this.OV16LoteProdutoCombinacao = "" ;
   this.AV22UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV20Sistema = "" ;
   this.AV38Pgmname = "" ;
   this.AV39Pgmdesc = "" ;
   this.AV18MsgErro = "" ;
   this.AV17Modulo = "" ;
   this.AV15Logon = {} ;
   this.AV21Tabela = "" ;
   this.AV11EmpresaPadrao = "" ;
   this.AV12FvId = 0 ;
   this.AV13FvItensSequencia = 0 ;
   this.A10617FVEmpresa = "" ;
   this.A10618FVId = 0 ;
   this.A10619FVItensSequencia = 0 ;
   this.AV16LoteProdutoCombinacao = "" ;
   this.AV37ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A10649FVItensLoteCombinacao = "" ;
   this.A10650FVItensCodigoBarras = 0 ;
   this.A10651FVItensQuantidade = 0 ;
   this.A10652FVItensValorUnitario = 0 ;
   this.A10653FVItensDesconto = 0 ;
   this.AV26DescLote1 = "" ;
   this.AV32Lote1 = "" ;
   this.AV27DescLote2 = "" ;
   this.AV33Lote2 = "" ;
   this.AV28DescLote3 = "" ;
   this.AV34Lote3 = "" ;
   this.AV29DescLote4 = "" ;
   this.AV35Lote4 = "" ;
   this.AV30DescLote5 = "" ;
   this.AV36Lote5 = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12fe2_client": ["'FECHAR'", true] ,"e13fe787_client": ["ENTER", true] ,"e14fe787_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV12FvId',fld:'vFVID'},{av:'AV13FvItensSequencia',fld:'vFVITENSSEQUENCIA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12FvId',fld:'vFVID'}],[{av:'AV12FvId',fld:'vFVID'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.setPrompt("PROMPT_10618", [14]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12FvId", "vFVID", 0, "int");
   this.setVCMap("AV13FvItensSequencia", "vFVITENSSEQUENCIA", 0, "int");
   this.setVCMap("A10617FVEmpresa", "FVEMPRESA", 0, "char");
   this.setVCMap("A10649FVItensLoteCombinacao", "FVITENSLOTECOMBINACAO", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV39Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV38Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tforcavendaitens());
