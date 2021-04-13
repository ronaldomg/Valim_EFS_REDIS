/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:1:27.36
*/
gx.evt.autoSkip = false;
gx.define('hmodalconsultarnotas', false, function () {
   this.ServerClass =  "hmodalconsultarnotas" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A1712ContaPagRecVlrAcrescimo=gx.fn.getDecimalValue("CONTAPAGRECVLRACRESCIMO",'.',',') ;
      this.A1713ContaPagRecVlrConta=gx.fn.getDecimalValue("CONTAPAGRECVLRCONTA",'.',',') ;
      this.A1714ContaPagRecVlrDesconto=gx.fn.getDecimalValue("CONTAPAGRECVLRDESCONTO",'.',',') ;
      this.A1715ContaPagRecVlrPagamento=gx.fn.getDecimalValue("CONTAPAGRECVLRPAGAMENTO",'.',',') ;
      this.AV34ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
      this.AV35PedidoCompraEmpresaId=gx.fn.getControlValue("vPEDIDOCOMPRAEMPRESAID") ;
   };
   this.Valid_Contapagreccliforid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(40) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECCLIFORID", gx.fn.currentGridRowImpl(40));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11ov2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14ov2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e15ov2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,29,32,34,39,41,42,43,44,45,46,47,48,49,50,51,52,53];
   this.GXLastCtrlId =53;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodalconsultarnotas",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1686,41,"CONTAPAGRECNUMERO","Número","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],1686,"ContaPagRecNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1695,42,"CONTAPAGRECDOCUMENTO","Documento","","ContaPagRecDocumento","svchar",0,"px",20,20,"left",null,[],1695,"ContaPagRecDocumento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1696,43,"CONTAPAGRECSEQDOCUME","Seq","","ContaPagRecSeqDocume","char",0,"px",3,3,"left",null,[],1696,"ContaPagRecSeqDocume",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1637,44,"CONTAPAGRECCLIFORID","Fornecedor","","ContaPagRecCliForId","int",0,"px",7,7,"right",null,[],1637,"ContaPagRecCliForId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1638,45,"CONTAPAGRECCLIFORFANTASIA","Nome","","ContaPagRecCliForFantasia","svchar",0,"px",60,60,"left",null,[],1638,"ContaPagRecCliForFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1699,46,"CONTAPAGRECDTEMISSAO","Emissão","","ContaPagRecDtEmissao","date",0,"px",10,10,"right",null,[],1699,"ContaPagRecDtEmissao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1700,47,"CONTAPAGRECDTPAGAMENTO","Pagamento","","ContaPagRecDtPagamento","date",0,"px",10,10,"right",null,[],1700,"ContaPagRecDtPagamento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1701,48,"CONTAPAGRECDTVENCIMENTO","Vencimento","","ContaPagRecDtVencimento","date",0,"px",10,10,"right",null,[],1701,"ContaPagRecDtVencimento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Contapagrecvlrconta",49,"vCONTAPAGRECVLRCONTA","Valor Conta","","ContaPagRecVlrConta","decimal",0,"px",22,22,"right",null,[],"Contapagrecvlrconta","ContaPagRecVlrConta",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2115,50,"CONTAPAGRECVLRATUALSEMSINAL","Valor Atual","","ContaPagRecVlrAtualSemSinal","decimal",0,"px",22,22,"right",null,[],2115,"ContaPagRecVlrAtualSemSinal",true,2,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1692,51,"CONTAPAGRECSITUACAO","Situação","ContaPagRecSituacao","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE3",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRAANO",gxz:"ZV11PedidoCompraAno",gxold:"OV11PedidoCompraAno",gxvar:"AV11PedidoCompraAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11PedidoCompraAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANO",gx.O.AV11PedidoCompraAno,0)},c2v:function(){gx.O.AV11PedidoCompraAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRANUMERO",gxz:"ZV12PedidoCompraNumero",gxold:"OV12PedidoCompraNumero",gxvar:"AV12PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12PedidoCompraNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMERO",gx.O.AV12PedidoCompraNumero,0)},c2v:function(){gx.O.AV12PedidoCompraNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE4",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAPESSOAID",gxz:"ZV32PedidoCompraPessoaId",gxold:"OV32PedidoCompraPessoaId",gxvar:"AV32PedidoCompraPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32PedidoCompraPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32PedidoCompraPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAPESSOAID",gx.O.AV32PedidoCompraPessoaId,0)},c2v:function(){gx.O.AV32PedidoCompraPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAPESSOAFANTASIA",gxz:"ZV33PedidoCompraPessoaFantasia",gxold:"OV33PedidoCompraPessoaFantasia",gxvar:"AV33PedidoCompraPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33PedidoCompraPessoaFantasia=Value},v2z:function(Value){gx.O.ZV33PedidoCompraPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAPESSOAFANTASIA",gx.O.AV33PedidoCompraPessoaFantasia,0)},c2v:function(){gx.O.AV33PedidoCompraPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRADATA",gxz:"ZV15PedidoCompraData",gxold:"OV15PedidoCompraData",gxvar:"AV15PedidoCompraData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRADATA",gx.O.AV15PedidoCompraData,0)},c2v:function(){gx.O.AV15PedidoCompraData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRADATA")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[41]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(40),gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDOCUMENTO",gxz:"Z1695ContaPagRecDocumento",gxold:"O1695ContaPagRecDocumento",gxvar:"A1695ContaPagRecDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1695ContaPagRecDocumento=Value},v2z:function(Value){gx.O.Z1695ContaPagRecDocumento=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDOCUMENTO",row || gx.fn.currentGridRowImpl(40),gx.O.A1695ContaPagRecDocumento,0)},c2v:function(){gx.O.A1695ContaPagRecDocumento=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECDOCUMENTO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECSEQDOCUME",gxz:"Z1696ContaPagRecSeqDocume",gxold:"O1696ContaPagRecSeqDocume",gxvar:"A1696ContaPagRecSeqDocume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1696ContaPagRecSeqDocume=Value},v2z:function(Value){gx.O.Z1696ContaPagRecSeqDocume=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECSEQDOCUME",row || gx.fn.currentGridRowImpl(40),gx.O.A1696ContaPagRecSeqDocume,0)},c2v:function(){gx.O.A1696ContaPagRecSeqDocume=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECSEQDOCUME",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:this.Valid_Contapagreccliforid,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORID",gxz:"Z1637ContaPagRecCliForId",gxold:"O1637ContaPagRecCliForId",gxvar:"A1637ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1637ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1637ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(40),gx.O.A1637ContaPagRecCliForId,0)},c2v:function(){gx.O.A1637ContaPagRecCliForId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORFANTASIA",gxz:"Z1638ContaPagRecCliForFantasia",gxold:"O1638ContaPagRecCliForFantasia",gxvar:"A1638ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1638ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.Z1638ContaPagRecCliForFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(40),gx.O.A1638ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.A1638ContaPagRecCliForFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTEMISSAO",gxz:"Z1699ContaPagRecDtEmissao",gxold:"O1699ContaPagRecDtEmissao",gxvar:"A1699ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(40),gx.O.A1699ContaPagRecDtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTPAGAMENTO",gxz:"Z1700ContaPagRecDtPagamento",gxold:"O1700ContaPagRecDtPagamento",gxvar:"A1700ContaPagRecDtPagamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1700ContaPagRecDtPagamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1700ContaPagRecDtPagamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTPAGAMENTO",row || gx.fn.currentGridRowImpl(40),gx.O.A1700ContaPagRecDtPagamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1700ContaPagRecDtPagamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTPAGAMENTO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTVENCIMENTO",gxz:"Z1701ContaPagRecDtVencimento",gxold:"O1701ContaPagRecDtVencimento",gxvar:"A1701ContaPagRecDtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(40),gx.O.A1701ContaPagRecDtVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1701ContaPagRecDtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECVLRCONTA",gxz:"ZV19ContaPagRecVlrConta",gxold:"OV19ContaPagRecVlrConta",gxvar:"AV19ContaPagRecVlrConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV19ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vCONTAPAGRECVLRCONTA",row || gx.fn.currentGridRowImpl(40),gx.O.AV19ContaPagRecVlrConta,2,',')},c2v:function(){gx.O.AV19ContaPagRecVlrConta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vCONTAPAGRECVLRCONTA",row || gx.fn.currentGridRowImpl(40),'.',',')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECVLRATUALSEMSINAL",gxz:"Z2115ContaPagRecVlrAtualSemSinal",gxold:"O2115ContaPagRecVlrAtualSemSinal",gxvar:"A2115ContaPagRecVlrAtualSemSinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2115ContaPagRecVlrAtualSemSinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2115ContaPagRecVlrAtualSemSinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CONTAPAGRECVLRATUALSEMSINAL",row || gx.fn.currentGridRowImpl(40),gx.O.A2115ContaPagRecVlrAtualSemSinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2115ContaPagRecVlrAtualSemSinal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CONTAPAGRECVLRATUALSEMSINAL",row || gx.fn.currentGridRowImpl(40),'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECSITUACAO",gxz:"Z1692ContaPagRecSituacao",gxold:"O1692ContaPagRecSituacao",gxvar:"A1692ContaPagRecSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1692ContaPagRecSituacao=Value},v2z:function(Value){gx.O.Z1692ContaPagRecSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(40),gx.O.A1692ContaPagRecSituacao)},c2v:function(){gx.O.A1692ContaPagRecSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[52]={fld:"SECTION1",grid:0};
   GXValidFnc[53]={fld:"DIV2", format:2,grid:0};
   this.AV11PedidoCompraAno = 0 ;
   this.ZV11PedidoCompraAno = 0 ;
   this.OV11PedidoCompraAno = 0 ;
   this.AV12PedidoCompraNumero = 0 ;
   this.ZV12PedidoCompraNumero = 0 ;
   this.OV12PedidoCompraNumero = 0 ;
   this.AV32PedidoCompraPessoaId = 0 ;
   this.ZV32PedidoCompraPessoaId = 0 ;
   this.OV32PedidoCompraPessoaId = 0 ;
   this.AV33PedidoCompraPessoaFantasia = "" ;
   this.ZV33PedidoCompraPessoaFantasia = "" ;
   this.OV33PedidoCompraPessoaFantasia = "" ;
   this.AV15PedidoCompraData = gx.date.nullDate() ;
   this.ZV15PedidoCompraData = gx.date.nullDate() ;
   this.OV15PedidoCompraData = gx.date.nullDate() ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.Z1695ContaPagRecDocumento = "" ;
   this.O1695ContaPagRecDocumento = "" ;
   this.Z1696ContaPagRecSeqDocume = "" ;
   this.O1696ContaPagRecSeqDocume = "" ;
   this.Z1637ContaPagRecCliForId = 0 ;
   this.O1637ContaPagRecCliForId = 0 ;
   this.Z1638ContaPagRecCliForFantasia = "" ;
   this.O1638ContaPagRecCliForFantasia = "" ;
   this.Z1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.O1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.Z1700ContaPagRecDtPagamento = gx.date.nullDate() ;
   this.O1700ContaPagRecDtPagamento = gx.date.nullDate() ;
   this.Z1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.O1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.ZV19ContaPagRecVlrConta = 0 ;
   this.OV19ContaPagRecVlrConta = 0 ;
   this.Z2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.O2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.Z1692ContaPagRecSituacao = "" ;
   this.O1692ContaPagRecSituacao = "" ;
   this.AV11PedidoCompraAno = 0 ;
   this.AV12PedidoCompraNumero = 0 ;
   this.AV32PedidoCompraPessoaId = 0 ;
   this.AV33PedidoCompraPessoaFantasia = "" ;
   this.AV15PedidoCompraData = gx.date.nullDate() ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A4203PedidoCompraPagRecNumero = 0 ;
   this.A4202PedidoCompraPagRecAno = 0 ;
   this.A4201PedidoCompraPagRecEmpId = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1715ContaPagRecVlrPagamento = 0 ;
   this.A1714ContaPagRecVlrDesconto = 0 ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1712ContaPagRecVlrAcrescimo = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1696ContaPagRecSeqDocume = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1700ContaPagRecDtPagamento = gx.date.nullDate() ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.AV19ContaPagRecVlrConta = 0 ;
   this.A2115ContaPagRecVlrAtualSemSinal = 0 ;
   this.A1692ContaPagRecSituacao = "" ;
   this.AV34ContaPagRecEmpresaId = "" ;
   this.AV35PedidoCompraEmpresaId = "" ;
   this.Events = {"e11ov2_client": ["'FECHAR'", true] ,"e14ov2_client": ["ENTER", true] ,"e15ov2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV34ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV35PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'AV11PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV12PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'}],[{av:'AV19ContaPagRecVlrConta',fld:'vCONTAPAGRECVLRCONTA'}]];
   this.setVCMap("A1712ContaPagRecVlrAcrescimo", "CONTAPAGRECVLRACRESCIMO", 0, "decimal");
   this.setVCMap("A1713ContaPagRecVlrConta", "CONTAPAGRECVLRCONTA", 0, "decimal");
   this.setVCMap("A1714ContaPagRecVlrDesconto", "CONTAPAGRECVLRDESCONTO", 0, "decimal");
   this.setVCMap("A1715ContaPagRecVlrPagamento", "CONTAPAGRECVLRPAGAMENTO", 0, "decimal");
   this.setVCMap("AV34ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV35PedidoCompraEmpresaId", "vPEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV34ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV35PedidoCompraEmpresaId", "vPEDIDOCOMPRAEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV34ContaPagRecEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV35PedidoCompraEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar({rfrVar:"A1713ContaPagRecVlrConta"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalconsultarnotas());
