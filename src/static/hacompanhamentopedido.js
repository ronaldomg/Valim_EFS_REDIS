/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:43:36.95
*/
gx.evt.autoSkip = false;
gx.define('hacompanhamentopedido', false, function () {
   this.ServerClass =  "hacompanhamentopedido" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV27EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
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
   this.e15m72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11m72_client=function()
   {
      this.executeServerEvent("'NOVO'", false, null, false, false);
   };
   this.e12m72_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e17m72_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e18m72_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e19m72_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e13m72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e21m72_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,24,26,29,31,33,36,38,41,43,50,52,53,54,55,56,57,58,59,60,61,67,73,74,75,77];
   this.GXLastCtrlId =77;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hacompanhamentopedido",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3799,52,"PEDIDOCOMPRALOGSEQ","","","PedidoCompraLOGSeq","int",0,"px",3,3,"right",null,[],3799,"PedidoCompraLOGSeq",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3793,53,"PEDIDOCOMPRALOGDATA","","","PedidoCompraLOGData","dtime",0,"px",16,16,"right",null,[],3793,"PedidoCompraLOGData",true,5,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Dataprevisaostr",54,"vDATAPREVISAOSTR","Previsão Entrega","","DataPrevisaoStr","svchar",0,"px",10,10,"left",null,[],"Dataprevisaostr","DataPrevisaoStr",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3794,55,"PEDIDOCOMPRALOGOBSERVACAO","Observação","","PedidoCompraLOGObservacao","vchar",0,"px",3000,80,"left",null,[],3794,"PedidoCompraLOGObservacao",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Observacao",56,"vOBSERVACAO","","","Observacao","svchar",410,"px",80,80,"left",null,[],"Observacao","Observacao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",57,0,"px",17,"px","e17m72_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",58,0,"px",17,"px","e18m72_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",59,0,"px",17,"px","e19m72_client","","Con","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(4286,60,"PEDIDOCOMPRALOGDATAPREV","","","PedidoCompraLOGDataPrev","date",0,"px",10,10,"right",null,[],4286,"PedidoCompraLOGDataPrev",false,0,false,false,"ApenasLeitura",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE6",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE1",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAPESSOAID",gxz:"ZV13PedidoCompraPessoaId",gxold:"OV13PedidoCompraPessoaId",gxvar:"AV13PedidoCompraPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13PedidoCompraPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13PedidoCompraPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAPESSOAID",gx.O.AV13PedidoCompraPessoaId,0)},c2v:function(){gx.O.AV13PedidoCompraPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAPESSOAFANTASIA",gxz:"ZV14PedidoCompraPessoaFantasia",gxold:"OV14PedidoCompraPessoaFantasia",gxvar:"AV14PedidoCompraPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PedidoCompraPessoaFantasia=Value},v2z:function(Value){gx.O.ZV14PedidoCompraPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAPESSOAFANTASIA",gx.O.AV14PedidoCompraPessoaFantasia,0)},c2v:function(){gx.O.AV14PedidoCompraPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE10",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pedidocompraano,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRAANO",gxz:"ZV12PedidoCompraAno",gxold:"OV12PedidoCompraAno",gxvar:"AV12PedidoCompraAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12PedidoCompraAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANO",gx.O.AV12PedidoCompraAno,0)},c2v:function(){gx.O.AV12PedidoCompraAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pedidocompranumero,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRANUMERO",gxz:"ZV11PedidoCompraNumero",gxold:"OV11PedidoCompraNumero",gxvar:"AV11PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11PedidoCompraNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMERO",gx.O.AV11PedidoCompraNumero,0)},c2v:function(){gx.O.AV11PedidoCompraNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANOPEDIDOFORN",gxz:"ZV15PedidoCompraNoPedidoForn",gxold:"OV15PedidoCompraNoPedidoForn",gxvar:"AV15PedidoCompraNoPedidoForn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PedidoCompraNoPedidoForn=Value},v2z:function(Value){gx.O.ZV15PedidoCompraNoPedidoForn=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANOPEDIDOFORN",gx.O.AV15PedidoCompraNoPedidoForn,0)},c2v:function(){gx.O.AV15PedidoCompraNoPedidoForn=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRANOPEDIDOFORN")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV16DataIni",gxold:"OV16DataIni",gxvar:"AV16DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV16DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV16DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[50]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[52]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRALOGSEQ",gxz:"Z3799PedidoCompraLOGSeq",gxold:"O3799PedidoCompraLOGSeq",gxvar:"A3799PedidoCompraLOGSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3799PedidoCompraLOGSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3799PedidoCompraLOGSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRALOGSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A3799PedidoCompraLOGSeq,0)},c2v:function(){gx.O.A3799PedidoCompraLOGSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRALOGSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRALOGDATA",gxz:"Z3793PedidoCompraLOGData",gxold:"O3793PedidoCompraLOGData",gxvar:"A3793PedidoCompraLOGData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3793PedidoCompraLOGData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3793PedidoCompraLOGData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRALOGDATA",row || gx.fn.currentGridRowImpl(51),gx.O.A3793PedidoCompraLOGData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3793PedidoCompraLOGData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMPRALOGDATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPREVISAOSTR",gxz:"ZV33DataPrevisaoStr",gxold:"OV33DataPrevisaoStr",gxvar:"AV33DataPrevisaoStr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV33DataPrevisaoStr=Value},v2z:function(Value){gx.O.ZV33DataPrevisaoStr=Value},v2c:function(row){gx.fn.setGridControlValue("vDATAPREVISAOSTR",row || gx.fn.currentGridRowImpl(51),gx.O.AV33DataPrevisaoStr,0)},c2v:function(){gx.O.AV33DataPrevisaoStr=this.val()},val:function(row){return gx.fn.getGridControlValue("vDATAPREVISAOSTR",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"vchar",len:3000,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRALOGOBSERVACAO",gxz:"Z3794PedidoCompraLOGObservacao",gxold:"O3794PedidoCompraLOGObservacao",gxvar:"A3794PedidoCompraLOGObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3794PedidoCompraLOGObservacao=Value},v2z:function(Value){gx.O.Z3794PedidoCompraLOGObservacao=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRALOGOBSERVACAO",row || gx.fn.currentGridRowImpl(51),gx.O.A3794PedidoCompraLOGObservacao,0)},c2v:function(){gx.O.A3794PedidoCompraLOGObservacao=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRALOGOBSERVACAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV19Observacao",gxold:"OV19Observacao",gxvar:"AV19Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV19Observacao=Value},v2z:function(Value){gx.O.ZV19Observacao=Value},v2c:function(row){gx.fn.setGridControlValue("vOBSERVACAO",row || gx.fn.currentGridRowImpl(51),gx.O.AV19Observacao,0)},c2v:function(){gx.O.AV19Observacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vOBSERVACAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV20bmpAlt",gxold:"OV20bmpAlt",gxvar:"AV20bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20bmpAlt=Value},v2z:function(Value){gx.O.ZV20bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(51),gx.O.AV20bmpAlt,gx.O.AV41Bmpalt_GXI)},c2v:function(){gx.O.AV41Bmpalt_GXI=this.val_GXI();gx.O.AV20bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV41Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV21bmpExc",gxold:"OV21bmpExc",gxvar:"AV21bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpExc=Value},v2z:function(Value){gx.O.ZV21bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51),gx.O.AV21bmpExc,gx.O.AV42Bmpexc_GXI)},c2v:function(){gx.O.AV42Bmpexc_GXI=this.val_GXI();gx.O.AV21bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV42Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV22bmpCon",gxold:"OV22bmpCon",gxvar:"AV22bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpCon=Value},v2z:function(Value){gx.O.ZV22bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(51),gx.O.AV22bmpCon,gx.O.AV43Bmpcon_GXI)},c2v:function(){gx.O.AV43Bmpcon_GXI=this.val_GXI();gx.O.AV22bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV43Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRALOGDATAPREV",gxz:"Z4286PedidoCompraLOGDataPrev",gxold:"O4286PedidoCompraLOGDataPrev",gxvar:"A4286PedidoCompraLOGDataPrev",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4286PedidoCompraLOGDataPrev=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4286PedidoCompraLOGDataPrev=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRALOGDATAPREV",row || gx.fn.currentGridRowImpl(51),gx.O.A4286PedidoCompraLOGDataPrev,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4286PedidoCompraLOGDataPrev=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMPRALOGDATAPREV",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[67]={fld:"TABLE7",grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV23OrderedBy",gxold:"OV23OrderedBy",gxvar:"AV23OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV23OrderedBy,0)},c2v:function(){gx.O.AV23OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"JS", format:2,grid:0};
   GXValidFnc[75]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNMONTA",gxz:"ZV34SnMOnta",gxold:"OV34SnMOnta",gxvar:"AV34SnMOnta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34SnMOnta=Value},v2z:function(Value){gx.O.ZV34SnMOnta=Value},v2c:function(){gx.fn.setControlValue("vSNMONTA",gx.O.AV34SnMOnta,0)},c2v:function(){gx.O.AV34SnMOnta=this.val()},val:function(){return gx.fn.getControlValue("vSNMONTA")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"BTNHELP",grid:0};
   this.AV13PedidoCompraPessoaId = 0 ;
   this.ZV13PedidoCompraPessoaId = 0 ;
   this.OV13PedidoCompraPessoaId = 0 ;
   this.AV14PedidoCompraPessoaFantasia = "" ;
   this.ZV14PedidoCompraPessoaFantasia = "" ;
   this.OV14PedidoCompraPessoaFantasia = "" ;
   this.AV12PedidoCompraAno = 0 ;
   this.ZV12PedidoCompraAno = 0 ;
   this.OV12PedidoCompraAno = 0 ;
   this.AV11PedidoCompraNumero = 0 ;
   this.ZV11PedidoCompraNumero = 0 ;
   this.OV11PedidoCompraNumero = 0 ;
   this.AV15PedidoCompraNoPedidoForn = "" ;
   this.ZV15PedidoCompraNoPedidoForn = "" ;
   this.OV15PedidoCompraNoPedidoForn = "" ;
   this.AV16DataIni = gx.date.nullDate() ;
   this.ZV16DataIni = gx.date.nullDate() ;
   this.OV16DataIni = gx.date.nullDate() ;
   this.Z3799PedidoCompraLOGSeq = 0 ;
   this.O3799PedidoCompraLOGSeq = 0 ;
   this.Z3793PedidoCompraLOGData = gx.date.nullDate() ;
   this.O3793PedidoCompraLOGData = gx.date.nullDate() ;
   this.ZV33DataPrevisaoStr = "" ;
   this.OV33DataPrevisaoStr = "" ;
   this.Z3794PedidoCompraLOGObservacao = "" ;
   this.O3794PedidoCompraLOGObservacao = "" ;
   this.ZV19Observacao = "" ;
   this.OV19Observacao = "" ;
   this.ZV20bmpAlt = "" ;
   this.OV20bmpAlt = "" ;
   this.ZV21bmpExc = "" ;
   this.OV21bmpExc = "" ;
   this.ZV22bmpCon = "" ;
   this.OV22bmpCon = "" ;
   this.Z4286PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.O4286PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.AV23OrderedBy = 0 ;
   this.ZV23OrderedBy = 0 ;
   this.OV23OrderedBy = 0 ;
   this.AV34SnMOnta = "" ;
   this.ZV34SnMOnta = "" ;
   this.OV34SnMOnta = "" ;
   this.AV13PedidoCompraPessoaId = 0 ;
   this.AV14PedidoCompraPessoaFantasia = "" ;
   this.AV12PedidoCompraAno = 0 ;
   this.AV11PedidoCompraNumero = 0 ;
   this.AV15PedidoCompraNoPedidoForn = "" ;
   this.AV16DataIni = gx.date.nullDate() ;
   this.AV23OrderedBy = 0 ;
   this.AV34SnMOnta = "" ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3799PedidoCompraLOGSeq = 0 ;
   this.A3793PedidoCompraLOGData = gx.date.nullDate() ;
   this.AV33DataPrevisaoStr = "" ;
   this.A3794PedidoCompraLOGObservacao = "" ;
   this.AV19Observacao = "" ;
   this.AV20bmpAlt = "" ;
   this.AV21bmpExc = "" ;
   this.AV22bmpCon = "" ;
   this.A4286PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.A3362PedidoCompraPessoaId = 0 ;
   this.A3778PedidoCompraPessoaFantasia = "" ;
   this.A3386PedidoCompraNoPedidoForn = "" ;
   this.A3361PedidoCompraPessoaEmpId = "" ;
   this.AV27EmpresaPadrao = "" ;
   this.Events = {"e15m72_client": ["ENTER", true] ,"e11m72_client": ["'NOVO'", true] ,"e12m72_client": ["'PROCURAR'", true] ,"e17m72_client": ["'ALTERAR'", true] ,"e18m72_client": ["'EXCLUIR'", true] ,"e19m72_client": ["'CONSULTAR'", true] ,"e13m72_client": ["'FECHAR'", true] ,"e21m72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV11PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV22bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A3794PedidoCompraLOGObservacao',fld:'PEDIDOCOMPRALOGOBSERVACAO'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'}],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV23OrderedBy',fld:'vORDEREDBY'}],[{ctrl:'PEDIDOCOMPRALOGSEQ',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRALOGSEQ","Title")',ctrl:'PEDIDOCOMPRALOGSEQ',prop:'Title'},{av:'AV24Imagem',fld:'vIMAGEM'},{ctrl:'PEDIDOCOMPRALOGDATAPREV',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRALOGDATAPREV","Title")',ctrl:'PEDIDOCOMPRALOGDATAPREV',prop:'Title'},{ctrl:'PEDIDOCOMPRALOGDATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRALOGDATA","Title")',ctrl:'PEDIDOCOMPRALOGDATA',prop:'Title'},{ctrl:'vOBSERVACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vOBSERVACAO","Title")',ctrl:'vOBSERVACAO',prop:'Title'}]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV11PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV22bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A3794PedidoCompraLOGObservacao',fld:'PEDIDOCOMPRALOGOBSERVACAO'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV11PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV22bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A3794PedidoCompraLOGObservacao',fld:'PEDIDOCOMPRALOGOBSERVACAO'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'AV16DataIni',fld:'vDATAINI'}],[{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV25Data',fld:'vDATA'},{av:'AV34SnMOnta',fld:'vSNMONTA'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV11PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV22bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A3794PedidoCompraLOGObservacao',fld:'PEDIDOCOMPRALOGOBSERVACAO'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'}],[]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV11PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV22bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A3794PedidoCompraLOGObservacao',fld:'PEDIDOCOMPRALOGOBSERVACAO'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'}],[]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV11PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV22bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A3794PedidoCompraLOGObservacao',fld:'PEDIDOCOMPRALOGOBSERVACAO'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'},{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3794PedidoCompraLOGObservacao',fld:'PEDIDOCOMPRALOGOBSERVACAO'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'}],[{av:'AV19Observacao',fld:'vOBSERVACAO'},{av:'AV33DataPrevisaoStr',fld:'vDATAPREVISAOSTR'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV11PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV22bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A3794PedidoCompraLOGObservacao',fld:'PEDIDOCOMPRALOGOBSERVACAO'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV11PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV22bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A3794PedidoCompraLOGObservacao',fld:'PEDIDOCOMPRALOGOBSERVACAO'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV11PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV22bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A3794PedidoCompraLOGObservacao',fld:'PEDIDOCOMPRALOGOBSERVACAO'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23OrderedBy',fld:'vORDEREDBY'},{av:'AV27EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV11PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV22bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A3794PedidoCompraLOGObservacao',fld:'PEDIDOCOMPRALOGOBSERVACAO'},{av:'A4286PedidoCompraLOGDataPrev',fld:'PEDIDOCOMPRALOGDATAPREV'}],[]];
   this.setVCMap("AV27EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV27EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar({rfrVar:"AV27EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar({rfrVar:"AV20bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV20bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV22bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV22bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"A3794PedidoCompraLOGObservacao", rfrProp:"Value", gxAttId:"3794"});
   GridContainer.addRefreshingVar({rfrVar:"A4286PedidoCompraLOGDataPrev", rfrProp:"Value", gxAttId:"4286"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hacompanhamentopedido());
