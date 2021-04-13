/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:1:28.89
*/
gx.evt.autoSkip = false;
gx.define('hmodalcopiapedidocompra', false, function () {
   this.ServerClass =  "hmodalcopiapedidocompra" ;
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
      this.AV13FilialId=gx.fn.getIntegerValue("vFILIALID",'.') ;
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
   this.Validv_Filialid2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12ox2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ox2_client=function()
   {
      this.executeServerEvent("'FECHA'", false, null, false, false);
   };
   this.e16ox2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,25,27,28,36,37,38,39,40,41];
   this.GXLastCtrlId =41;
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE2",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidocompraano,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAANO",gxz:"ZV11PedidoCompraAno",gxold:"OV11PedidoCompraAno",gxvar:"AV11PedidoCompraAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11PedidoCompraAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANO",gx.O.AV11PedidoCompraAno,0)},c2v:function(){gx.O.AV11PedidoCompraAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidocompranumero,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANUMERO",gxz:"ZV12PedidoCompraNumero",gxold:"OV12PedidoCompraNumero",gxvar:"AV12PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12PedidoCompraNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMERO",gx.O.AV12PedidoCompraNumero,0)},c2v:function(){gx.O.AV12PedidoCompraNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid2,isvalid:null,rgrid:[],fld:"vFILIALID2",gxz:"ZV22FilialId2",gxold:"OV22FilialId2",gxvar:"AV22FilialId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22FilialId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22FilialId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID2",gx.O.AV22FilialId2,0)},c2v:function(){gx.O.AV22FilialId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID2",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV14FilialNome",gxold:"OV14FilialNome",gxvar:"AV14FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14FilialNome=Value},v2z:function(Value){gx.O.ZV14FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV14FilialNome,0)},c2v:function(){gx.O.AV14FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV16FilialEmpresaId",gxold:"OV16FilialEmpresaId",gxvar:"AV16FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV16FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV16FilialEmpresaId,0)},c2v:function(){gx.O.AV16FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANUMERONOVO",gxz:"ZV30PedidoCompraNumeroNovo",gxold:"OV30PedidoCompraNumeroNovo",gxvar:"AV30PedidoCompraNumeroNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30PedidoCompraNumeroNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30PedidoCompraNumeroNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMERONOVO",gx.O.AV30PedidoCompraNumeroNovo,0)},c2v:function(){gx.O.AV30PedidoCompraNumeroNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERONOVO",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAANONOVO",gxz:"ZV21PedidoCompraAnoNovo",gxold:"OV21PedidoCompraAnoNovo",gxvar:"AV21PedidoCompraAnoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PedidoCompraAnoNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PedidoCompraAnoNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANONOVO",gx.O.AV21PedidoCompraAnoNovo,0)},c2v:function(){gx.O.AV21PedidoCompraAnoNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANONOVO",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"JS", format:1,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV33Qtde",gxold:"OV33Qtde",gxvar:"AV33Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV33Qtde,0)},c2v:function(){gx.O.AV33Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"PROMPT_FILIALID2",grid:0};
   this.AV11PedidoCompraAno = 0 ;
   this.ZV11PedidoCompraAno = 0 ;
   this.OV11PedidoCompraAno = 0 ;
   this.AV12PedidoCompraNumero = 0 ;
   this.ZV12PedidoCompraNumero = 0 ;
   this.OV12PedidoCompraNumero = 0 ;
   this.AV22FilialId2 = 0 ;
   this.ZV22FilialId2 = 0 ;
   this.OV22FilialId2 = 0 ;
   this.AV14FilialNome = "" ;
   this.ZV14FilialNome = "" ;
   this.OV14FilialNome = "" ;
   this.AV16FilialEmpresaId = "" ;
   this.ZV16FilialEmpresaId = "" ;
   this.OV16FilialEmpresaId = "" ;
   this.AV30PedidoCompraNumeroNovo = 0 ;
   this.ZV30PedidoCompraNumeroNovo = 0 ;
   this.OV30PedidoCompraNumeroNovo = 0 ;
   this.AV21PedidoCompraAnoNovo = 0 ;
   this.ZV21PedidoCompraAnoNovo = 0 ;
   this.OV21PedidoCompraAnoNovo = 0 ;
   this.AV33Qtde = 0 ;
   this.ZV33Qtde = 0 ;
   this.OV33Qtde = 0 ;
   this.AV11PedidoCompraAno = 0 ;
   this.AV12PedidoCompraNumero = 0 ;
   this.AV22FilialId2 = 0 ;
   this.AV14FilialNome = "" ;
   this.AV16FilialEmpresaId = "" ;
   this.AV30PedidoCompraNumeroNovo = 0 ;
   this.AV21PedidoCompraAnoNovo = 0 ;
   this.AV33Qtde = 0 ;
   this.AV13FilialId = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3380PedidoCompraSituacao = "" ;
   this.A1136FilialNome = "" ;
   this.Events = {"e12ox2_client": ["ENTER", true] ,"e13ox2_client": ["'FECHA'", true] ,"e16ox2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV12PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV22FilialId2',fld:'vFILIALID2'},{av:'AV21PedidoCompraAnoNovo',fld:'vPEDIDOCOMPRAANONOVO'},{av:'AV30PedidoCompraNumeroNovo',fld:'vPEDIDOCOMPRANUMERONOVO'},{av:'AV23SnCop',fld:'vSNCOP'}],[{av:'AV30PedidoCompraNumeroNovo',fld:'vPEDIDOCOMPRANUMERONOVO'},{av:'AV21PedidoCompraAnoNovo',fld:'vPEDIDOCOMPRAANONOVO'},{av:'AV23SnCop',fld:'vSNCOP'}]];
   this.EvtParms["ENTER"] = [[{av:'AV11PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV12PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV15Erro',fld:'vERRO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV22FilialId2',fld:'vFILIALID2'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV16FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV27PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV21PedidoCompraAnoNovo',fld:'vPEDIDOCOMPRAANONOVO'},{av:'AV30PedidoCompraNumeroNovo',fld:'vPEDIDOCOMPRANUMERONOVO'},{av:'AV23SnCop',fld:'vSNCOP'}],[{av:'AV31CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV11PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV15Erro',fld:'vERRO'},{av:'AV37GXLvl76',fld:'vGXLVL76'},{av:'AV27PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV38GXLvl96',fld:'vGXLVL96'},{av:'AV29Msgm',fld:'vMSGM'},{av:'AV30PedidoCompraNumeroNovo',fld:'vPEDIDOCOMPRANUMERONOVO'},{av:'AV21PedidoCompraAnoNovo',fld:'vPEDIDOCOMPRAANONOVO'},{av:'AV23SnCop',fld:'vSNCOP'}]];
   this.EvtParms["'FECHA'"] = [[{av:'AV21PedidoCompraAnoNovo',fld:'vPEDIDOCOMPRAANONOVO'},{av:'AV30PedidoCompraNumeroNovo',fld:'vPEDIDOCOMPRANUMERONOVO'},{av:'AV22FilialId2',fld:'vFILIALID2'},{av:'AV23SnCop',fld:'vSNCOP'}],[{av:'AV23SnCop',fld:'vSNCOP'}]];
   this.setPrompt("IMGPROMPT", [20,16]);
   this.setPrompt("PROMPT_FILIALID2", [27]);
   this.EnterCtrl = ["BUTTON2"];
   this.setVCMap("AV13FilialId", "vFILIALID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalcopiapedidocompra());
