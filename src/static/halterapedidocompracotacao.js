/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:39.75
*/
gx.evt.autoSkip = false;
gx.define('halterapedidocompracotacao', false, function () {
   this.ServerClass =  "halterapedidocompracotacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV83SnErroLote=gx.fn.getControlValue("vSNERROLOTE") ;
   };
   this.Validv_Pedidocompraano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOCOMPRAANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pedidocompranumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOCOMPRANUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pedidocompraitemseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOCOMPRAITEMSEQ");
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
   this.Validv_Pedidocompraitemunidadeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOCOMPRAITEMUNIDADEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("vEDIT1","Enabled", 0 );
      gx.fn.setCtrlProperty("vEDIT2","Enabled", 0 );
      gx.fn.setCtrlProperty("vEDIT3","Enabled", 0 );
      gx.fn.setCtrlProperty("vEDIT4","Enabled", 0 );
      gx.fn.setCtrlProperty("vEDIT5","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOMBO1","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOMBO2","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOMBO3","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOMBO4","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOMBO5","Enabled", 0 );
      gx.fn.setCtrlProperty("LOTE","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMUNIDADEID","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMQTDEPEDIDA","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMVALOR","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMVALORDESCONTO","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMVALORLIQUIDO","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMVALORICMS","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMVALORIPI","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMVALORICMSST","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMVALORFRETE","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMVALORENCARGO","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMVALORSEGURO","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMPCDESCONTO","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMPCFRETE","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMPCICMS","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMPCICMSST","Enabled", 0 );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAITEMPCIPI","Enabled", 0 );
   };
   this.s172_client=function()
   {
      if ( ! (0.0==this.AV79PedidoCompraItemPCICMS) && (0.0==this.AV23PedidoCompraItemValorICMS) )
      {
         this.AV23PedidoCompraItemValorICMS =  gx.num.divide( ( gx.num.multiply( this.AV16PedidoCompraItemValor , this.AV79PedidoCompraItemPCICMS ) ) , 100 )  ;
      }
      if ( ! (0.0==this.AV78PedidoCompraItemPCFrete) && (0.0==this.AV21PedidoCompraItemValorFrete) )
      {
         this.AV21PedidoCompraItemValorFrete =  gx.num.divide( ( gx.num.multiply( this.AV16PedidoCompraItemValor , this.AV78PedidoCompraItemPCFrete ) ) , 100 )  ;
      }
      if ( ! (0.0==this.AV80PedidoCompraItemPCICMSST) && (0.0==this.AV24PedidoCompraItemValorICMSST) )
      {
         this.AV24PedidoCompraItemValorICMSST =  gx.num.divide( ( gx.num.multiply( this.AV16PedidoCompraItemValor , this.AV80PedidoCompraItemPCICMSST ) ) , 100 )  ;
      }
      if ( ! (0.0==this.AV81PedidoCompraItemPCIPI) && (0.0==this.AV22PedidoCompraItemValorIPI) )
      {
         this.AV22PedidoCompraItemValorIPI =  gx.num.divide( ( gx.num.multiply( this.AV16PedidoCompraItemValor , this.AV81PedidoCompraItemPCIPI ) ) , 100 )  ;
      }
      if ( ! (0.0==this.AV82PedidoCompraItemPCDesconto) && (0.0==this.AV18PedidoCompraItemValorDesconto) )
      {
         this.AV18PedidoCompraItemValorDesconto =  gx.num.divide( ( gx.num.multiply( this.AV16PedidoCompraItemValor , this.AV82PedidoCompraItemPCDesconto ) ) , 100 )  ;
      }
   };
   this.e12m92_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13m92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16m92_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,12,14,15,16,17,18,19,22,24,25,26,27,28,29,30,33,35,36,38,40,45,48,50,53,55,57,59,61,64,65,67,68,70,71,73,74,76,77,78,81,84,87,89,92,94,97,99,102,104,107,109,112,114,119,122,124,126,128,131,133,135,137,140,142,144,146,149,151,153,155,158,160,163,167,173,179,181,182];
   this.GXLastCtrlId =182;
   GXValidFnc[2]={fld:"TABLE8",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pedidocompraano,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAANO",gxz:"ZV55PedidoCompraAno",gxold:"OV55PedidoCompraAno",gxvar:"AV55PedidoCompraAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55PedidoCompraAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANO",gx.O.AV55PedidoCompraAno,0)},c2v:function(){gx.O.AV55PedidoCompraAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pedidocompranumero,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANUMERO",gxz:"ZV54PedidoCompraNumero",gxold:"OV54PedidoCompraNumero",gxvar:"AV54PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54PedidoCompraNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMERO",gx.O.AV54PedidoCompraNumero,0)},c2v:function(){gx.O.AV54PedidoCompraNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC1",gxz:"ZV41Desc1",gxold:"OV41Desc1",gxvar:"AV41Desc1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41Desc1=Value},v2z:function(Value){gx.O.ZV41Desc1=Value},v2c:function(){gx.fn.setControlValue("vDESC1",gx.O.AV41Desc1,0)},c2v:function(){gx.O.AV41Desc1=this.val()},val:function(){return gx.fn.getControlValue("vDESC1")},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC2",gxz:"ZV37Desc2",gxold:"OV37Desc2",gxvar:"AV37Desc2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37Desc2=Value},v2z:function(Value){gx.O.ZV37Desc2=Value},v2c:function(){gx.fn.setControlValue("vDESC2",gx.O.AV37Desc2,0)},c2v:function(){gx.O.AV37Desc2=this.val()},val:function(){return gx.fn.getControlValue("vDESC2")},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC3",gxz:"ZV38Desc3",gxold:"OV38Desc3",gxvar:"AV38Desc3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38Desc3=Value},v2z:function(Value){gx.O.ZV38Desc3=Value},v2c:function(){gx.fn.setControlValue("vDESC3",gx.O.AV38Desc3,0)},c2v:function(){gx.O.AV38Desc3=this.val()},val:function(){return gx.fn.getControlValue("vDESC3")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC4",gxz:"ZV39Desc4",gxold:"OV39Desc4",gxvar:"AV39Desc4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39Desc4=Value},v2z:function(Value){gx.O.ZV39Desc4=Value},v2c:function(){gx.fn.setControlValue("vDESC4",gx.O.AV39Desc4,0)},c2v:function(){gx.O.AV39Desc4=this.val()},val:function(){return gx.fn.getControlValue("vDESC4")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pedidocompraitemseq,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMSEQ",gxz:"ZV56PedidoCompraItemSeq",gxold:"OV56PedidoCompraItemSeq",gxvar:"AV56PedidoCompraItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56PedidoCompraItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56PedidoCompraItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAITEMSEQ",gx.O.AV56PedidoCompraItemSeq,0)},c2v:function(){gx.O.AV56PedidoCompraItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC5",gxz:"ZV40Desc5",gxold:"OV40Desc5",gxvar:"AV40Desc5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40Desc5=Value},v2z:function(Value){gx.O.ZV40Desc5=Value},v2c:function(){gx.fn.setControlValue("vDESC5",gx.O.AV40Desc5,0)},c2v:function(){gx.O.AV40Desc5=this.val()},val:function(){return gx.fn.getControlValue("vDESC5")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE5",gxz:"ZV49Visible5",gxold:"OV49Visible5",gxvar:"AV49Visible5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49Visible5=Value},v2z:function(Value){gx.O.ZV49Visible5=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE5",gx.O.AV49Visible5,0)},c2v:function(){gx.O.AV49Visible5=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE5")},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE4",gxz:"ZV48Visible4",gxold:"OV48Visible4",gxvar:"AV48Visible4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48Visible4=Value},v2z:function(Value){gx.O.ZV48Visible4=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE4",gx.O.AV48Visible4,0)},c2v:function(){gx.O.AV48Visible4=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE4")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE3",gxz:"ZV47Visible3",gxold:"OV47Visible3",gxvar:"AV47Visible3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47Visible3=Value},v2z:function(Value){gx.O.ZV47Visible3=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE3",gx.O.AV47Visible3,0)},c2v:function(){gx.O.AV47Visible3=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE3")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE2",gxz:"ZV46Visible2",gxold:"OV46Visible2",gxvar:"AV46Visible2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46Visible2=Value},v2z:function(Value){gx.O.ZV46Visible2=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE2",gx.O.AV46Visible2,0)},c2v:function(){gx.O.AV46Visible2=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE2")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE1",gxz:"ZV45Visible1",gxold:"OV45Visible1",gxvar:"AV45Visible1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45Visible1=Value},v2z:function(Value){gx.O.ZV45Visible1=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE1",gx.O.AV45Visible1,0)},c2v:function(){gx.O.AV45Visible1=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE1")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV12ProdutoId",gxold:"OV12ProdutoId",gxvar:"AV12ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV12ProdutoId,0)},c2v:function(){gx.O.AV12ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV13ProdutoDescricao",gxold:"OV13ProdutoDescricao",gxvar:"AV13ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV13ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV13ProdutoDescricao,0)},c2v:function(){gx.O.AV13ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMPRODUTOUN",gxz:"ZV15PedidoCompraItemProdutoUN",gxold:"OV15PedidoCompraItemProdutoUN",gxvar:"AV15PedidoCompraItemProdutoUN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PedidoCompraItemProdutoUN=Value},v2z:function(Value){gx.O.ZV15PedidoCompraItemProdutoUN=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAITEMPRODUTOUN",gx.O.AV15PedidoCompraItemProdutoUN,0)},c2v:function(){gx.O.AV15PedidoCompraItemProdutoUN=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAITEMPRODUTOUN")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE2",grid:0};
   GXValidFnc[48]={fld:"LOTE", format:0,grid:0};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   GXValidFnc[53]={fld:"DESC1", format:0,grid:0};
   GXValidFnc[55]={fld:"DESC2", format:0,grid:0};
   GXValidFnc[57]={fld:"DESC3", format:0,grid:0};
   GXValidFnc[59]={fld:"DESC4", format:0,grid:0};
   GXValidFnc[61]={fld:"DESC5", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT1",gxz:"ZV26Edit1",gxold:"OV26Edit1",gxvar:"AV26Edit1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Edit1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26Edit1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT1",gx.O.AV26Edit1,0)},c2v:function(){gx.O.AV26Edit1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT1",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO1",gxz:"ZV27Combo1",gxold:"OV27Combo1",gxvar:"AV27Combo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27Combo1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Combo1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO1",gx.O.AV27Combo1)},c2v:function(){gx.O.AV27Combo1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO1",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT2",gxz:"ZV29Edit2",gxold:"OV29Edit2",gxvar:"AV29Edit2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29Edit2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29Edit2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT2",gx.O.AV29Edit2,0)},c2v:function(){gx.O.AV29Edit2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT2",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO2",gxz:"ZV30Combo2",gxold:"OV30Combo2",gxvar:"AV30Combo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30Combo2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30Combo2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO2",gx.O.AV30Combo2)},c2v:function(){gx.O.AV30Combo2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO2",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT3",gxz:"ZV31Edit3",gxold:"OV31Edit3",gxvar:"AV31Edit3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Edit3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31Edit3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT3",gx.O.AV31Edit3,0)},c2v:function(){gx.O.AV31Edit3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT3",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO3",gxz:"ZV32Combo3",gxold:"OV32Combo3",gxvar:"AV32Combo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32Combo3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32Combo3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO3",gx.O.AV32Combo3)},c2v:function(){gx.O.AV32Combo3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO3",'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT4",gxz:"ZV33Edit4",gxold:"OV33Edit4",gxvar:"AV33Edit4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Edit4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33Edit4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT4",gx.O.AV33Edit4,0)},c2v:function(){gx.O.AV33Edit4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT4",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO4",gxz:"ZV34Combo4",gxold:"OV34Combo4",gxvar:"AV34Combo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV34Combo4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34Combo4=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO4",gx.O.AV34Combo4)},c2v:function(){gx.O.AV34Combo4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO4",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT5",gxz:"ZV35Edit5",gxold:"OV35Edit5",gxvar:"AV35Edit5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35Edit5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35Edit5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT5",gx.O.AV35Edit5,0)},c2v:function(){gx.O.AV35Edit5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT5",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO5",gxz:"ZV36Combo5",gxold:"OV36Combo5",gxvar:"AV36Combo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV36Combo5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36Combo5=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO5",gx.O.AV36Combo5)},c2v:function(){gx.O.AV36Combo5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO5",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE",gxz:"ZV28Lote",gxold:"OV28Lote",gxvar:"AV28Lote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Lote=Value},v2z:function(Value){gx.O.ZV28Lote=Value},v2c:function(){gx.fn.setControlValue("vLOTE",gx.O.AV28Lote,0)},c2v:function(){gx.O.AV28Lote=this.val()},val:function(){return gx.fn.getControlValue("vLOTE")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TABLE7",grid:0};
   GXValidFnc[84]={fld:"TABLE1",grid:0};
   GXValidFnc[87]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidocompraitemunidadeid,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMUNIDADEID",gxz:"ZV77PedidoCompraItemUnidadeId",gxold:"OV77PedidoCompraItemUnidadeId",gxvar:"AV77PedidoCompraItemUnidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77PedidoCompraItemUnidadeId=Value},v2z:function(Value){gx.O.ZV77PedidoCompraItemUnidadeId=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAITEMUNIDADEID",gx.O.AV77PedidoCompraItemUnidadeId,0)},c2v:function(){gx.O.AV77PedidoCompraItemUnidadeId=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAITEMUNIDADEID")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMQTDEPEDIDA",gxz:"ZV14PedidoCompraItemQtdePedida",gxold:"OV14PedidoCompraItemQtdePedida",gxvar:"AV14PedidoCompraItemQtdePedida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PedidoCompraItemQtdePedida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV14PedidoCompraItemQtdePedida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMQTDEPEDIDA",gx.O.AV14PedidoCompraItemQtdePedida,3,',')},c2v:function(){gx.O.AV14PedidoCompraItemQtdePedida=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMQTDEPEDIDA",'.',',')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMVALOR",gxz:"ZV16PedidoCompraItemValor",gxold:"OV16PedidoCompraItemValor",gxvar:"AV16PedidoCompraItemValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PedidoCompraItemValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV16PedidoCompraItemValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMVALOR",gx.O.AV16PedidoCompraItemValor,4,',')},c2v:function(){gx.O.AV16PedidoCompraItemValor=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMPCDESCONTO",gxz:"ZV82PedidoCompraItemPCDesconto",gxold:"OV82PedidoCompraItemPCDesconto",gxvar:"AV82PedidoCompraItemPCDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82PedidoCompraItemPCDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV82PedidoCompraItemPCDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMPCDESCONTO",gx.O.AV82PedidoCompraItemPCDesconto,2,',')},c2v:function(){gx.O.AV82PedidoCompraItemPCDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMPCDESCONTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMVALORDESCONTO",gxz:"ZV18PedidoCompraItemValorDesconto",gxold:"OV18PedidoCompraItemValorDesconto",gxvar:"AV18PedidoCompraItemValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PedidoCompraItemValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV18PedidoCompraItemValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMVALORDESCONTO",gx.O.AV18PedidoCompraItemValorDesconto,2,',')},c2v:function(){gx.O.AV18PedidoCompraItemValorDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMVALORDESCONTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMVALORLIQUIDO",gxz:"ZV25PedidoCompraItemValorLiquido",gxold:"OV25PedidoCompraItemValorLiquido",gxvar:"AV25PedidoCompraItemValorLiquido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PedidoCompraItemValorLiquido=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV25PedidoCompraItemValorLiquido=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMVALORLIQUIDO",gx.O.AV25PedidoCompraItemValorLiquido,2,',')},c2v:function(){gx.O.AV25PedidoCompraItemValorLiquido=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMVALORLIQUIDO",'.',',')},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TABLE5",grid:0};
   GXValidFnc[122]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMPCFRETE",gxz:"ZV78PedidoCompraItemPCFrete",gxold:"OV78PedidoCompraItemPCFrete",gxvar:"AV78PedidoCompraItemPCFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78PedidoCompraItemPCFrete=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV78PedidoCompraItemPCFrete=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMPCFRETE",gx.O.AV78PedidoCompraItemPCFrete,2,',')},c2v:function(){gx.O.AV78PedidoCompraItemPCFrete=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMPCFRETE",'.',',')},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[128]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMVALORFRETE",gxz:"ZV21PedidoCompraItemValorFrete",gxold:"OV21PedidoCompraItemValorFrete",gxvar:"AV21PedidoCompraItemValorFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PedidoCompraItemValorFrete=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV21PedidoCompraItemValorFrete=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMVALORFRETE",gx.O.AV21PedidoCompraItemValorFrete,2,',')},c2v:function(){gx.O.AV21PedidoCompraItemValorFrete=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMVALORFRETE",'.',',')},nac:gx.falseFn};
   GXValidFnc[131]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[133]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMPCIPI",gxz:"ZV81PedidoCompraItemPCIPI",gxold:"OV81PedidoCompraItemPCIPI",gxvar:"AV81PedidoCompraItemPCIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81PedidoCompraItemPCIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV81PedidoCompraItemPCIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMPCIPI",gx.O.AV81PedidoCompraItemPCIPI,2,',')},c2v:function(){gx.O.AV81PedidoCompraItemPCIPI=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMPCIPI",'.',',')},nac:gx.falseFn};
   GXValidFnc[135]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMVALORIPI",gxz:"ZV22PedidoCompraItemValorIPI",gxold:"OV22PedidoCompraItemValorIPI",gxvar:"AV22PedidoCompraItemValorIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PedidoCompraItemValorIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV22PedidoCompraItemValorIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMVALORIPI",gx.O.AV22PedidoCompraItemValorIPI,2,',')},c2v:function(){gx.O.AV22PedidoCompraItemValorIPI=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMVALORIPI",'.',',')},nac:gx.falseFn};
   GXValidFnc[140]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[142]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMPCICMS",gxz:"ZV79PedidoCompraItemPCICMS",gxold:"OV79PedidoCompraItemPCICMS",gxvar:"AV79PedidoCompraItemPCICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79PedidoCompraItemPCICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV79PedidoCompraItemPCICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMPCICMS",gx.O.AV79PedidoCompraItemPCICMS,2,',')},c2v:function(){gx.O.AV79PedidoCompraItemPCICMS=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMPCICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[144]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[146]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMVALORICMS",gxz:"ZV23PedidoCompraItemValorICMS",gxold:"OV23PedidoCompraItemValorICMS",gxvar:"AV23PedidoCompraItemValorICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PedidoCompraItemValorICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV23PedidoCompraItemValorICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMVALORICMS",gx.O.AV23PedidoCompraItemValorICMS,2,',')},c2v:function(){gx.O.AV23PedidoCompraItemValorICMS=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMVALORICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[149]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[151]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMPCICMSST",gxz:"ZV80PedidoCompraItemPCICMSST",gxold:"OV80PedidoCompraItemPCICMSST",gxvar:"AV80PedidoCompraItemPCICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80PedidoCompraItemPCICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV80PedidoCompraItemPCICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMPCICMSST",gx.O.AV80PedidoCompraItemPCICMSST,2,',')},c2v:function(){gx.O.AV80PedidoCompraItemPCICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMPCICMSST",'.',',')},nac:gx.falseFn};
   GXValidFnc[153]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[155]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMVALORICMSST",gxz:"ZV24PedidoCompraItemValorICMSST",gxold:"OV24PedidoCompraItemValorICMSST",gxvar:"AV24PedidoCompraItemValorICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PedidoCompraItemValorICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV24PedidoCompraItemValorICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMVALORICMSST",gx.O.AV24PedidoCompraItemValorICMSST,2,',')},c2v:function(){gx.O.AV24PedidoCompraItemValorICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMVALORICMSST",'.',',')},nac:gx.falseFn};
   GXValidFnc[158]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[160]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMVALORENCARGO",gxz:"ZV20PedidoCompraItemValorEncargo",gxold:"OV20PedidoCompraItemValorEncargo",gxvar:"AV20PedidoCompraItemValorEncargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PedidoCompraItemValorEncargo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV20PedidoCompraItemValorEncargo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMVALORENCARGO",gx.O.AV20PedidoCompraItemValorEncargo,2,',')},c2v:function(){gx.O.AV20PedidoCompraItemValorEncargo=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMVALORENCARGO",'.',',')},nac:gx.falseFn};
   GXValidFnc[163]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[167]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAITEMVALORSEGURO",gxz:"ZV19PedidoCompraItemValorSeguro",gxold:"OV19PedidoCompraItemValorSeguro",gxvar:"AV19PedidoCompraItemValorSeguro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PedidoCompraItemValorSeguro=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV19PedidoCompraItemValorSeguro=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCOMPRAITEMVALORSEGURO",gx.O.AV19PedidoCompraItemValorSeguro,2,',')},c2v:function(){gx.O.AV19PedidoCompraItemValorSeguro=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMVALORSEGURO",'.',',')},nac:gx.falseFn};
   GXValidFnc[173]={fld:"TABLE10",grid:0};
   GXValidFnc[179]={fld:"JS", format:2,grid:0};
   GXValidFnc[181]={fld:"BTNHELP",grid:0};
   GXValidFnc[182]={fld:"PROMPT_PEDIDOCOMPRAITEMUNIDADEID",grid:0};
   this.AV55PedidoCompraAno = 0 ;
   this.ZV55PedidoCompraAno = 0 ;
   this.OV55PedidoCompraAno = 0 ;
   this.AV54PedidoCompraNumero = 0 ;
   this.ZV54PedidoCompraNumero = 0 ;
   this.OV54PedidoCompraNumero = 0 ;
   this.AV41Desc1 = "" ;
   this.ZV41Desc1 = "" ;
   this.OV41Desc1 = "" ;
   this.AV37Desc2 = "" ;
   this.ZV37Desc2 = "" ;
   this.OV37Desc2 = "" ;
   this.AV38Desc3 = "" ;
   this.ZV38Desc3 = "" ;
   this.OV38Desc3 = "" ;
   this.AV39Desc4 = "" ;
   this.ZV39Desc4 = "" ;
   this.OV39Desc4 = "" ;
   this.AV56PedidoCompraItemSeq = 0 ;
   this.ZV56PedidoCompraItemSeq = 0 ;
   this.OV56PedidoCompraItemSeq = 0 ;
   this.AV40Desc5 = "" ;
   this.ZV40Desc5 = "" ;
   this.OV40Desc5 = "" ;
   this.AV49Visible5 = "" ;
   this.ZV49Visible5 = "" ;
   this.OV49Visible5 = "" ;
   this.AV48Visible4 = "" ;
   this.ZV48Visible4 = "" ;
   this.OV48Visible4 = "" ;
   this.AV47Visible3 = "" ;
   this.ZV47Visible3 = "" ;
   this.OV47Visible3 = "" ;
   this.AV46Visible2 = "" ;
   this.ZV46Visible2 = "" ;
   this.OV46Visible2 = "" ;
   this.AV45Visible1 = "" ;
   this.ZV45Visible1 = "" ;
   this.OV45Visible1 = "" ;
   this.AV12ProdutoId = 0 ;
   this.ZV12ProdutoId = 0 ;
   this.OV12ProdutoId = 0 ;
   this.AV13ProdutoDescricao = "" ;
   this.ZV13ProdutoDescricao = "" ;
   this.OV13ProdutoDescricao = "" ;
   this.AV15PedidoCompraItemProdutoUN = "" ;
   this.ZV15PedidoCompraItemProdutoUN = "" ;
   this.OV15PedidoCompraItemProdutoUN = "" ;
   this.AV26Edit1 = 0 ;
   this.ZV26Edit1 = 0 ;
   this.OV26Edit1 = 0 ;
   this.AV27Combo1 = 0 ;
   this.ZV27Combo1 = 0 ;
   this.OV27Combo1 = 0 ;
   this.AV29Edit2 = 0 ;
   this.ZV29Edit2 = 0 ;
   this.OV29Edit2 = 0 ;
   this.AV30Combo2 = 0 ;
   this.ZV30Combo2 = 0 ;
   this.OV30Combo2 = 0 ;
   this.AV31Edit3 = 0 ;
   this.ZV31Edit3 = 0 ;
   this.OV31Edit3 = 0 ;
   this.AV32Combo3 = 0 ;
   this.ZV32Combo3 = 0 ;
   this.OV32Combo3 = 0 ;
   this.AV33Edit4 = 0 ;
   this.ZV33Edit4 = 0 ;
   this.OV33Edit4 = 0 ;
   this.AV34Combo4 = 0 ;
   this.ZV34Combo4 = 0 ;
   this.OV34Combo4 = 0 ;
   this.AV35Edit5 = 0 ;
   this.ZV35Edit5 = 0 ;
   this.OV35Edit5 = 0 ;
   this.AV36Combo5 = 0 ;
   this.ZV36Combo5 = 0 ;
   this.OV36Combo5 = 0 ;
   this.AV28Lote = "" ;
   this.ZV28Lote = "" ;
   this.OV28Lote = "" ;
   this.AV77PedidoCompraItemUnidadeId = "" ;
   this.ZV77PedidoCompraItemUnidadeId = "" ;
   this.OV77PedidoCompraItemUnidadeId = "" ;
   this.AV14PedidoCompraItemQtdePedida = 0 ;
   this.ZV14PedidoCompraItemQtdePedida = 0 ;
   this.OV14PedidoCompraItemQtdePedida = 0 ;
   this.AV16PedidoCompraItemValor = 0 ;
   this.ZV16PedidoCompraItemValor = 0 ;
   this.OV16PedidoCompraItemValor = 0 ;
   this.AV82PedidoCompraItemPCDesconto = 0 ;
   this.ZV82PedidoCompraItemPCDesconto = 0 ;
   this.OV82PedidoCompraItemPCDesconto = 0 ;
   this.AV18PedidoCompraItemValorDesconto = 0 ;
   this.ZV18PedidoCompraItemValorDesconto = 0 ;
   this.OV18PedidoCompraItemValorDesconto = 0 ;
   this.AV25PedidoCompraItemValorLiquido = 0 ;
   this.ZV25PedidoCompraItemValorLiquido = 0 ;
   this.OV25PedidoCompraItemValorLiquido = 0 ;
   this.AV78PedidoCompraItemPCFrete = 0 ;
   this.ZV78PedidoCompraItemPCFrete = 0 ;
   this.OV78PedidoCompraItemPCFrete = 0 ;
   this.AV21PedidoCompraItemValorFrete = 0 ;
   this.ZV21PedidoCompraItemValorFrete = 0 ;
   this.OV21PedidoCompraItemValorFrete = 0 ;
   this.AV81PedidoCompraItemPCIPI = 0 ;
   this.ZV81PedidoCompraItemPCIPI = 0 ;
   this.OV81PedidoCompraItemPCIPI = 0 ;
   this.AV22PedidoCompraItemValorIPI = 0 ;
   this.ZV22PedidoCompraItemValorIPI = 0 ;
   this.OV22PedidoCompraItemValorIPI = 0 ;
   this.AV79PedidoCompraItemPCICMS = 0 ;
   this.ZV79PedidoCompraItemPCICMS = 0 ;
   this.OV79PedidoCompraItemPCICMS = 0 ;
   this.AV23PedidoCompraItemValorICMS = 0 ;
   this.ZV23PedidoCompraItemValorICMS = 0 ;
   this.OV23PedidoCompraItemValorICMS = 0 ;
   this.AV80PedidoCompraItemPCICMSST = 0 ;
   this.ZV80PedidoCompraItemPCICMSST = 0 ;
   this.OV80PedidoCompraItemPCICMSST = 0 ;
   this.AV24PedidoCompraItemValorICMSST = 0 ;
   this.ZV24PedidoCompraItemValorICMSST = 0 ;
   this.OV24PedidoCompraItemValorICMSST = 0 ;
   this.AV20PedidoCompraItemValorEncargo = 0 ;
   this.ZV20PedidoCompraItemValorEncargo = 0 ;
   this.OV20PedidoCompraItemValorEncargo = 0 ;
   this.AV19PedidoCompraItemValorSeguro = 0 ;
   this.ZV19PedidoCompraItemValorSeguro = 0 ;
   this.OV19PedidoCompraItemValorSeguro = 0 ;
   this.AV55PedidoCompraAno = 0 ;
   this.AV54PedidoCompraNumero = 0 ;
   this.AV41Desc1 = "" ;
   this.AV37Desc2 = "" ;
   this.AV38Desc3 = "" ;
   this.AV39Desc4 = "" ;
   this.AV56PedidoCompraItemSeq = 0 ;
   this.AV40Desc5 = "" ;
   this.AV49Visible5 = "" ;
   this.AV48Visible4 = "" ;
   this.AV47Visible3 = "" ;
   this.AV46Visible2 = "" ;
   this.AV45Visible1 = "" ;
   this.AV12ProdutoId = 0 ;
   this.AV13ProdutoDescricao = "" ;
   this.AV15PedidoCompraItemProdutoUN = "" ;
   this.AV26Edit1 = 0 ;
   this.AV27Combo1 = 0 ;
   this.AV29Edit2 = 0 ;
   this.AV30Combo2 = 0 ;
   this.AV31Edit3 = 0 ;
   this.AV32Combo3 = 0 ;
   this.AV33Edit4 = 0 ;
   this.AV34Combo4 = 0 ;
   this.AV35Edit5 = 0 ;
   this.AV36Combo5 = 0 ;
   this.AV28Lote = "" ;
   this.AV77PedidoCompraItemUnidadeId = "" ;
   this.AV14PedidoCompraItemQtdePedida = 0 ;
   this.AV16PedidoCompraItemValor = 0 ;
   this.AV82PedidoCompraItemPCDesconto = 0 ;
   this.AV18PedidoCompraItemValorDesconto = 0 ;
   this.AV25PedidoCompraItemValorLiquido = 0 ;
   this.AV78PedidoCompraItemPCFrete = 0 ;
   this.AV21PedidoCompraItemValorFrete = 0 ;
   this.AV81PedidoCompraItemPCIPI = 0 ;
   this.AV22PedidoCompraItemValorIPI = 0 ;
   this.AV79PedidoCompraItemPCICMS = 0 ;
   this.AV23PedidoCompraItemValorICMS = 0 ;
   this.AV80PedidoCompraItemPCICMSST = 0 ;
   this.AV24PedidoCompraItemValorICMSST = 0 ;
   this.AV20PedidoCompraItemValorEncargo = 0 ;
   this.AV19PedidoCompraItemValorSeguro = 0 ;
   this.AV83SnErroLote = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3411UnidadeId = "" ;
   this.A4162UnidadeEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3482CotacaoDataHoraAlt = gx.date.nullDate() ;
   this.A3466CotacaoValorEncargos = 0 ;
   this.A3462CotacaoValorFrete = 0 ;
   this.A3467CotacaoValorSeguro = 0 ;
   this.A4050SolicitacaoItemUnidade = "" ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3382PedidoCompraValorDesconto = 0 ;
   this.A3385PedidoCompraValorSeguro = 0 ;
   this.A3384PedidoCompraValorEncargo = 0 ;
   this.A3383PedidoCompraValorFrete = 0 ;
   this.A3473CotacaoValorTotalAVista = 0 ;
   this.A3479CotacaoValorTotalaPrazo = 0 ;
   this.A3338PedidoCompraItemSeq = 0 ;
   this.A3340PedidoCompraItemProdutoId = 0 ;
   this.A3357PedidoCompraItemCombinacaoLote = "" ;
   this.A4251PedidoCompraItemPCFrete = 0 ;
   this.A4249PedidoCompraItemPCICMS = 0 ;
   this.A4250PedidoCompraItemPCICMSST = 0 ;
   this.A4248PedidoCompraItemPCIPI = 0 ;
   this.A4252PedidoCompraItemPCDesconto = 0 ;
   this.A3362PedidoCompraPessoaId = 0 ;
   this.A3344PedidoCompraItemUnidadeId = "" ;
   this.A3349PedidoCompraItemValor = 0 ;
   this.A3346PedidoCompraItemQtdePedida = 0 ;
   this.A3403PedidoCompraItemValorTotal = 0 ;
   this.A3353PedidoCompraItemValorICMSST = 0 ;
   this.A3351PedidoCompraItemValorICMS = 0 ;
   this.A3352PedidoCompraItemValorIPI = 0 ;
   this.A3355PedidoCompraItemValorEncargo = 0 ;
   this.A3354PedidoCompraItemValorSeguro = 0 ;
   this.A3356PedidoCompraItemValorFrete = 0 ;
   this.A3350PedidoCompraItemValorDesconto = 0 ;
   this.A3404PedidoCompraItemValorLiquido = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2938ValorAtributoDescricao = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3393ProdutoUnidadeCompraId = "" ;
   this.Events = {"e12m92_client": ["ENTER", true] ,"e13m92_client": ["'FECHAR'", true] ,"e16m92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV50SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV42ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV12ProdutoId',fld:'vPRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV26Edit1',fld:'vEDIT1'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV43SnValor',fld:'vSNVALOR'},{av:'AV53LoteProduto',fld:'vLOTEPRODUTO'}],[{av:'AV43SnValor',fld:'vSNVALOR'},{av:'gx.fn.getCtrlProperty("DESC1","Visible")',ctrl:'DESC1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC2","Visible")',ctrl:'DESC2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC3","Visible")',ctrl:'DESC3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC4","Visible")',ctrl:'DESC4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC5","Visible")',ctrl:'DESC5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT1","Visible")',ctrl:'vEDIT1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT2","Visible")',ctrl:'vEDIT2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT3","Visible")',ctrl:'vEDIT3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT4","Visible")',ctrl:'vEDIT4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT5","Visible")',ctrl:'vEDIT5',prop:'Visible'},{ctrl:'vCOMBO1'},{ctrl:'vCOMBO2'},{ctrl:'vCOMBO3'},{ctrl:'vCOMBO4'},{ctrl:'vCOMBO5'},{av:'gx.fn.getCtrlProperty("vVISIBLE1","Visible")',ctrl:'vVISIBLE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE2","Visible")',ctrl:'vVISIBLE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE3","Visible")',ctrl:'vVISIBLE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE4","Visible")',ctrl:'vVISIBLE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE5","Visible")',ctrl:'vVISIBLE5',prop:'Visible'},{av:'AV45Visible1',fld:'vVISIBLE1'},{av:'AV46Visible2',fld:'vVISIBLE2'},{av:'AV47Visible3',fld:'vVISIBLE3'},{av:'AV48Visible4',fld:'vVISIBLE4'},{av:'AV49Visible5',fld:'vVISIBLE5'},{av:'AV51EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV52i',fld:'vI'},{av:'gx.fn.getCtrlProperty("DESC1","Caption")',ctrl:'DESC1',prop:'Caption'},{av:'AV41Desc1',fld:'vDESC1'},{av:'AV27Combo1',fld:'vCOMBO1'},{av:'gx.fn.getCtrlProperty("DESC2","Caption")',ctrl:'DESC2',prop:'Caption'},{av:'AV37Desc2',fld:'vDESC2'},{av:'AV30Combo2',fld:'vCOMBO2'},{av:'gx.fn.getCtrlProperty("DESC3","Caption")',ctrl:'DESC3',prop:'Caption'},{av:'AV38Desc3',fld:'vDESC3'},{av:'AV32Combo3',fld:'vCOMBO3'},{av:'gx.fn.getCtrlProperty("DESC4","Caption")',ctrl:'DESC4',prop:'Caption'},{av:'AV39Desc4',fld:'vDESC4'},{av:'AV34Combo4',fld:'vCOMBO4'},{av:'gx.fn.getCtrlProperty("DESC5","Caption")',ctrl:'DESC5',prop:'Caption'},{av:'AV40Desc5',fld:'vDESC5'},{av:'AV36Combo5',fld:'vCOMBO5'},{av:'AV26Edit1',fld:'vEDIT1'},{av:'AV29Edit2',fld:'vEDIT2'},{av:'AV31Edit3',fld:'vEDIT3'},{av:'AV33Edit4',fld:'vEDIT4'},{av:'AV35Edit5',fld:'vEDIT5'},{av:'AV28Lote',fld:'vLOTE'},{av:'gx.fn.getCtrlProperty("LOTE","Visible")',ctrl:'vLOTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTE","Visible")',ctrl:'LOTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE4","Visible")',ctrl:'TABLE4',prop:'Visible'}]];
   this.EvtParms["ENTER"] = [[{av:'AV45Visible1',fld:'vVISIBLE1'},{av:'AV26Edit1',fld:'vEDIT1'},{av:'AV27Combo1',fld:'vCOMBO1'},{av:'AV46Visible2',fld:'vVISIBLE2'},{av:'AV29Edit2',fld:'vEDIT2'},{av:'AV30Combo2',fld:'vCOMBO2'},{av:'AV47Visible3',fld:'vVISIBLE3'},{av:'AV31Edit3',fld:'vEDIT3'},{av:'AV32Combo3',fld:'vCOMBO3'},{av:'AV48Visible4',fld:'vVISIBLE4'},{av:'AV33Edit4',fld:'vEDIT4'},{av:'AV34Combo4',fld:'vCOMBO4'},{av:'AV49Visible5',fld:'vVISIBLE5'},{av:'AV35Edit5',fld:'vEDIT5'},{av:'AV36Combo5',fld:'vCOMBO5'},{av:'AV62SnErro',fld:'vSNERRO'},{av:'AV55PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV54PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV56PedidoCompraItemSeq',fld:'vPEDIDOCOMPRAITEMSEQ',hsh:true},{av:'AV42ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV14PedidoCompraItemQtdePedida',fld:'vPEDIDOCOMPRAITEMQTDEPEDIDA'},{av:'AV16PedidoCompraItemValor',fld:'vPEDIDOCOMPRAITEMVALOR'},{av:'AV18PedidoCompraItemValorDesconto',fld:'vPEDIDOCOMPRAITEMVALORDESCONTO'},{av:'AV20PedidoCompraItemValorEncargo',fld:'vPEDIDOCOMPRAITEMVALORENCARGO'},{av:'AV21PedidoCompraItemValorFrete',fld:'vPEDIDOCOMPRAITEMVALORFRETE'},{av:'AV23PedidoCompraItemValorICMS',fld:'vPEDIDOCOMPRAITEMVALORICMS'},{av:'AV24PedidoCompraItemValorICMSST',fld:'vPEDIDOCOMPRAITEMVALORICMSST'},{av:'AV22PedidoCompraItemValorIPI',fld:'vPEDIDOCOMPRAITEMVALORIPI'},{av:'AV25PedidoCompraItemValorLiquido',fld:'vPEDIDOCOMPRAITEMVALORLIQUIDO'},{av:'AV19PedidoCompraItemValorSeguro',fld:'vPEDIDOCOMPRAITEMVALORSEGURO'},{av:'AV17ValorItem',fld:'vVALORITEM'},{av:'AV77PedidoCompraItemUnidadeId',fld:'vPEDIDOCOMPRAITEMUNIDADEID'},{av:'AV82PedidoCompraItemPCDesconto',fld:'vPEDIDOCOMPRAITEMPCDESCONTO'},{av:'AV78PedidoCompraItemPCFrete',fld:'vPEDIDOCOMPRAITEMPCFRETE'},{av:'AV79PedidoCompraItemPCICMS',fld:'vPEDIDOCOMPRAITEMPCICMS'},{av:'AV80PedidoCompraItemPCICMSST',fld:'vPEDIDOCOMPRAITEMPCICMSST'},{av:'AV81PedidoCompraItemPCIPI',fld:'vPEDIDOCOMPRAITEMPCIPI'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV75SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'},{av:'AV41Desc1',fld:'vDESC1'},{av:'AV37Desc2',fld:'vDESC2'},{av:'AV38Desc3',fld:'vDESC3'},{av:'AV39Desc4',fld:'vDESC4'},{av:'AV40Desc5',fld:'vDESC5'},{av:'AV87SnUnidade',fld:'vSNUNIDADE'},{av:'AV60SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A4162UnidadeEmpresaId',fld:'UNIDADEEMPRESAID'},{av:'AV86UnidadeEmpresaId',fld:'vUNIDADEEMPRESAID'},{av:'A3411UnidadeId',fld:'UNIDADEID'}],[{av:'AV71LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV74SdtPedidoCompraItem',fld:'vSDTPEDIDOCOMPRAITEM'},{av:'AV75SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'},{av:'AV62SnErro',fld:'vSNERRO'},{av:'AV72MsgQtde',fld:'vMSGQTDE'},{av:'AV23PedidoCompraItemValorICMS',fld:'vPEDIDOCOMPRAITEMVALORICMS'},{av:'AV21PedidoCompraItemValorFrete',fld:'vPEDIDOCOMPRAITEMVALORFRETE'},{av:'AV24PedidoCompraItemValorICMSST',fld:'vPEDIDOCOMPRAITEMVALORICMSST'},{av:'AV22PedidoCompraItemValorIPI',fld:'vPEDIDOCOMPRAITEMVALORIPI'},{av:'AV18PedidoCompraItemValorDesconto',fld:'vPEDIDOCOMPRAITEMVALORDESCONTO'},{av:'AV87SnUnidade',fld:'vSNUNIDADE'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_PEDIDOCOMPRAITEMUNIDADEID", [89]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A3346PedidoCompraItemQtdePedida", "PEDIDOCOMPRAITEMQTDEPEDIDA", 0, "decimal");
   this.setVCMap("A3349PedidoCompraItemValor", "PEDIDOCOMPRAITEMVALOR", 0, "decimal");
   this.setVCMap("A3403PedidoCompraItemValorTotal", "PEDIDOCOMPRAITEMVALORTOTAL", 0, "decimal");
   this.setVCMap("A3350PedidoCompraItemValorDesconto", "PEDIDOCOMPRAITEMVALORDESCONTO", 0, "decimal");
   this.setVCMap("A3356PedidoCompraItemValorFrete", "PEDIDOCOMPRAITEMVALORFRETE", 0, "decimal");
   this.setVCMap("A3354PedidoCompraItemValorSeguro", "PEDIDOCOMPRAITEMVALORSEGURO", 0, "decimal");
   this.setVCMap("A3355PedidoCompraItemValorEncargo", "PEDIDOCOMPRAITEMVALORENCARGO", 0, "decimal");
   this.setVCMap("A3352PedidoCompraItemValorIPI", "PEDIDOCOMPRAITEMVALORIPI", 0, "decimal");
   this.setVCMap("A3351PedidoCompraItemValorICMS", "PEDIDOCOMPRAITEMVALORICMS", 0, "decimal");
   this.setVCMap("A3353PedidoCompraItemValorICMSST", "PEDIDOCOMPRAITEMVALORICMSST", 0, "decimal");
   this.setVCMap("A3404PedidoCompraItemValorLiquido", "PEDIDOCOMPRAITEMVALORLIQUIDO", 0, "decimal");
   this.setVCMap("AV83SnErroLote", "vSNERROLOTE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new halterapedidocompracotacao());
