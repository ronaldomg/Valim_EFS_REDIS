/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:37.31
*/
gx.evt.autoSkip = false;
gx.define('hconsultapedidocompra', false, function () {
   this.ServerClass =  "hconsultapedidocompra" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A3391PedidoCompraValorTotal=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORTOTAL",'.',',') ;
      this.A3383PedidoCompraValorFrete=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORFRETE",'.',',') ;
      this.A3385PedidoCompraValorSeguro=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORSEGURO",'.',',') ;
      this.A3384PedidoCompraValorEncargo=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORENCARGO",'.',',') ;
      this.A3785PedidoCompraValorIPI=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORIPI",'.',',') ;
      this.A3786PedidoCompraValorICMS=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORICMS",'.',',') ;
      this.A3787PedidoCompraValorICMSST=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORICMSST",'.',',') ;
      this.AV19PedidoCompraFilialIdFiltro=gx.fn.getIntegerValue("vPEDIDOCOMPRAFILIALIDFILTRO",'.') ;
      this.AV18PedidoCompraNumeroSaida=gx.fn.getIntegerValue("vPEDIDOCOMPRANUMEROSAIDA",'.') ;
      this.AV36PedidoCompraAno=gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.') ;
   };
   this.Validv_Pedidocomprafilialidtela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOCOMPRAFILIALIDTELA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocompraano=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(60) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAANO", gx.fn.currentGridRowImpl(60));
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
   this.Valid_Pedidocompranumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(60) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRANUMERO", gx.fn.currentGridRowImpl(60));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocompravalordesconto=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(60) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAVALORDESCONTO", gx.fn.currentGridRowImpl(60));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocomprapessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(60) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAPESSOAID", gx.fn.currentGridRowImpl(60));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e17ng2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11ng2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ng2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ng2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ng2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e20ng2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e15ng2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21ng2_client=function()
   {
      this.executeServerEvent("'ABREPEDIDOCOMPRAITEM'", true, arguments[0], false, false);
   };
   this.e22ng1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,18,20,21,24,26,29,31,33,34,37,40,42,43,46,48,51,53,55,61,62,63,64,65,66,67,68,69,70,71,72,78,81,83,85,87,89,90,91,92,93,94,95,96,97,98,99,100,101];
   this.GXLastCtrlId =101;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",60,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultapedidocompra",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3336,61,"PEDIDOCOMPRAANO","","","PedidoCompraAno","int",0,"px",4,4,"right",null,[],3336,"PedidoCompraAno",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3337,62,"PEDIDOCOMPRANUMERO","","","PedidoCompraNumero","int",0,"px",7,7,"right",null,[],3337,"PedidoCompraNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3360,63,"PEDIDOCOMPRADATA","","","PedidoCompraData","date",0,"px",10,10,"right",null,[],3360,"PedidoCompraData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3778,64,"PEDIDOCOMPRAPESSOAFANTASIA","Fantasia Fornecedor","","PedidoCompraPessoaFantasia","svchar",0,"px",60,60,"left",null,[],3778,"PedidoCompraPessoaFantasia",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Pedidocomprapessoafantasiagrid",65,"vPEDIDOCOMPRAPESSOAFANTASIAGRID","","","PedidoCompraPessoaFantasiaGrid","svchar",0,"px",45,45,"left",null,[],"Pedidocomprapessoafantasiagrid","PedidoCompraPessoaFantasiaGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3382,66,"PEDIDOCOMPRAVALORDESCONTO","","","PedidoCompraValorDesconto","decimal",0,"px",22,22,"right",null,[],3382,"PedidoCompraValorDesconto",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3788,67,"PEDIDOCOMPRAVALORLIQUIDO","Valor Líquido","","PedidoCompraValorLiquido","decimal",0,"px",22,22,"right",null,[],3788,"PedidoCompraValorLiquido",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3389,68,"PEDIDOCOMPRADATAENTREGA","","","PedidoCompraDataEntrega","date",0,"px",10,10,"right",null,[],3389,"PedidoCompraDataEntrega",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3380,69,"PEDIDOCOMPRASITUACAO","","PedidoCompraSituacao","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(3388,70,"PEDIDOCOMPRAFILIALID","Código Filial","","PedidoCompraFilialId","int",0,"px",7,7,"right",null,[],3388,"PedidoCompraFilialId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpprod","vBMPPROD",71,0,"px",17,"px","e21ng2_client","","Itens","Image","");
   GridContainer.addSingleLineEdit(3362,72,"PEDIDOCOMPRAPESSOAID","Fornecedor","","PedidoCompraPessoaId","int",0,"px",7,7,"right",null,[],3362,"PedidoCompraPessoaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidocomprafilialidtela,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRAFILIALIDTELA",gxz:"ZV37PedidoCompraFilialIdTela",gxold:"OV37PedidoCompraFilialIdTela",gxvar:"AV37PedidoCompraFilialIdTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37PedidoCompraFilialIdTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37PedidoCompraFilialIdTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAFILIALIDTELA",gx.O.AV37PedidoCompraFilialIdTela,0)},c2v:function(){gx.O.AV37PedidoCompraFilialIdTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAFILIALIDTELA",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"IMAGEPROMPT",grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAFILIALNOME",gxz:"ZV26PedidoCompraFilialNome",gxold:"OV26PedidoCompraFilialNome",gxvar:"AV26PedidoCompraFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PedidoCompraFilialNome=Value},v2z:function(Value){gx.O.ZV26PedidoCompraFilialNome=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAFILIALNOME",gx.O.AV26PedidoCompraFilialNome,0)},c2v:function(){gx.O.AV26PedidoCompraFilialNome=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRAPESSOAIDFILTRO",gxz:"ZV20PedidoCompraPessoaIdFiltro",gxold:"OV20PedidoCompraPessoaIdFiltro",gxvar:"AV20PedidoCompraPessoaIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PedidoCompraPessoaIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PedidoCompraPessoaIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAPESSOAIDFILTRO",gx.O.AV20PedidoCompraPessoaIdFiltro,0)},c2v:function(){gx.O.AV20PedidoCompraPessoaIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAPESSOAIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAPESSOAFANTASIA",gxz:"ZV27PedidoCompraPessoaFantasia",gxold:"OV27PedidoCompraPessoaFantasia",gxvar:"AV27PedidoCompraPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PedidoCompraPessoaFantasia=Value},v2z:function(Value){gx.O.ZV27PedidoCompraPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAPESSOAFANTASIA",gx.O.AV27PedidoCompraPessoaFantasia,0)},c2v:function(){gx.O.AV27PedidoCompraPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[26]={fld:"TABNUMANO",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRAANOFILTRO",gxz:"ZV42PedidoCompraAnoFiltro",gxold:"OV42PedidoCompraAnoFiltro",gxvar:"AV42PedidoCompraAnoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42PedidoCompraAnoFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42PedidoCompraAnoFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANOFILTRO",gx.O.AV42PedidoCompraAnoFiltro,0)},c2v:function(){gx.O.AV42PedidoCompraAnoFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANOFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRANUMEROFILTRO",gxz:"ZV43PedidoCompraNumeroFiltro",gxold:"OV43PedidoCompraNumeroFiltro",gxvar:"AV43PedidoCompraNumeroFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43PedidoCompraNumeroFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43PedidoCompraNumeroFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMEROFILTRO",gx.O.AV43PedidoCompraNumeroFiltro,0)},c2v:function(){gx.O.AV43PedidoCompraNumeroFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMEROFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABNUM",grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRANUMEROFILTRO",gxz:"ZV43PedidoCompraNumeroFiltro",gxold:"OV43PedidoCompraNumeroFiltro",gxvar:"AV43PedidoCompraNumeroFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43PedidoCompraNumeroFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43PedidoCompraNumeroFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMEROFILTRO",gx.O.AV43PedidoCompraNumeroFiltro,0)},c2v:function(){gx.O.AV43PedidoCompraNumeroFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMEROFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRASITUACAOFILTRO",gxz:"ZV21PedidoCompraSituacaoFiltro",gxold:"OV21PedidoCompraSituacaoFiltro",gxvar:"AV21PedidoCompraSituacaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21PedidoCompraSituacaoFiltro=Value},v2z:function(Value){gx.O.ZV21PedidoCompraSituacaoFiltro=Value},v2c:function(){gx.fn.setComboBoxValue("vPEDIDOCOMPRASITUACAOFILTRO",gx.O.AV21PedidoCompraSituacaoFiltro)},c2v:function(){gx.O.AV21PedidoCompraSituacaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRASITUACAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[48]={fld:"TABLE11",grid:0};
   GXValidFnc[51]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRADATAINICIALFILTRO",gxz:"ZV22PedidoCompraDataInicialFiltro",gxold:"OV22PedidoCompraDataInicialFiltro",gxvar:"AV22PedidoCompraDataInicialFiltro",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PedidoCompraDataInicialFiltro=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22PedidoCompraDataInicialFiltro=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRADATAINICIALFILTRO",gx.O.AV22PedidoCompraDataInicialFiltro,0)},c2v:function(){gx.O.AV22PedidoCompraDataInicialFiltro=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRADATAINICIALFILTRO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRADATAFINALFILTRO",gxz:"ZV23PedidoCompraDataFinalFiltro",gxold:"OV23PedidoCompraDataFinalFiltro",gxvar:"AV23PedidoCompraDataFinalFiltro",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PedidoCompraDataFinalFiltro=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23PedidoCompraDataFinalFiltro=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRADATAFINALFILTRO",gx.O.AV23PedidoCompraDataFinalFiltro,0)},c2v:function(){gx.O.AV23PedidoCompraDataFinalFiltro=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRADATAFINALFILTRO")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocompraano,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAANO",gxz:"Z3336PedidoCompraAno",gxold:"O3336PedidoCompraAno",gxvar:"A3336PedidoCompraAno",ucs:[],op:[67,64],ip:[67,64,66,62,61,72],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3336PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3336PedidoCompraAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(60),gx.O.A3336PedidoCompraAno,0)},c2v:function(){gx.O.A3336PedidoCompraAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocompranumero,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRANUMERO",gxz:"Z3337PedidoCompraNumero",gxold:"O3337PedidoCompraNumero",gxvar:"A3337PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3337PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3337PedidoCompraNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(60),gx.O.A3337PedidoCompraNumero,0)},c2v:function(){gx.O.A3337PedidoCompraNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRADATA",gxz:"Z3360PedidoCompraData",gxold:"O3360PedidoCompraData",gxvar:"A3360PedidoCompraData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3360PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3360PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(60),gx.O.A3360PedidoCompraData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3360PedidoCompraData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAPESSOAFANTASIA",gxz:"Z3778PedidoCompraPessoaFantasia",gxold:"O3778PedidoCompraPessoaFantasia",gxvar:"A3778PedidoCompraPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3778PedidoCompraPessoaFantasia=Value},v2z:function(Value){gx.O.Z3778PedidoCompraPessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(60),gx.O.A3778PedidoCompraPessoaFantasia,0)},c2v:function(){gx.O.A3778PedidoCompraPessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAPESSOAFANTASIAGRID",gxz:"ZV17PedidoCompraPessoaFantasiaGrid",gxold:"OV17PedidoCompraPessoaFantasiaGrid",gxvar:"AV17PedidoCompraPessoaFantasiaGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17PedidoCompraPessoaFantasiaGrid=Value},v2z:function(Value){gx.O.ZV17PedidoCompraPessoaFantasiaGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vPEDIDOCOMPRAPESSOAFANTASIAGRID",row || gx.fn.currentGridRowImpl(60),gx.O.AV17PedidoCompraPessoaFantasiaGrid,0)},c2v:function(){gx.O.AV17PedidoCompraPessoaFantasiaGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vPEDIDOCOMPRAPESSOAFANTASIAGRID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocompravalordesconto,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAVALORDESCONTO",gxz:"Z3382PedidoCompraValorDesconto",gxold:"O3382PedidoCompraValorDesconto",gxvar:"A3382PedidoCompraValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3382PedidoCompraValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3382PedidoCompraValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PEDIDOCOMPRAVALORDESCONTO",row || gx.fn.currentGridRowImpl(60),gx.O.A3382PedidoCompraValorDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3382PedidoCompraValorDesconto=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PEDIDOCOMPRAVALORDESCONTO",row || gx.fn.currentGridRowImpl(60),'.',',')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAVALORLIQUIDO",gxz:"Z3788PedidoCompraValorLiquido",gxold:"O3788PedidoCompraValorLiquido",gxvar:"A3788PedidoCompraValorLiquido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3788PedidoCompraValorLiquido=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3788PedidoCompraValorLiquido=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(60),gx.O.A3788PedidoCompraValorLiquido,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3788PedidoCompraValorLiquido=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(60),'.',',')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRADATAENTREGA",gxz:"Z3389PedidoCompraDataEntrega",gxold:"O3389PedidoCompraDataEntrega",gxvar:"A3389PedidoCompraDataEntrega",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3389PedidoCompraDataEntrega=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3389PedidoCompraDataEntrega=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRADATAENTREGA",row || gx.fn.currentGridRowImpl(60),gx.O.A3389PedidoCompraDataEntrega,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3389PedidoCompraDataEntrega=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMPRADATAENTREGA",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRASITUACAO",gxz:"Z3380PedidoCompraSituacao",gxold:"O3380PedidoCompraSituacao",gxvar:"A3380PedidoCompraSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3380PedidoCompraSituacao=Value},v2z:function(Value){gx.O.Z3380PedidoCompraSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PEDIDOCOMPRASITUACAO",row || gx.fn.currentGridRowImpl(60),gx.O.A3380PedidoCompraSituacao)},c2v:function(){gx.O.A3380PedidoCompraSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRASITUACAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAFILIALID",gxz:"Z3388PedidoCompraFilialId",gxold:"O3388PedidoCompraFilialId",gxvar:"A3388PedidoCompraFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3388PedidoCompraFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3388PedidoCompraFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAFILIALID",row || gx.fn.currentGridRowImpl(60),gx.O.A3388PedidoCompraFilialId,0)},c2v:function(){gx.O.A3388PedidoCompraFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRAFILIALID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPROD",gxz:"ZV16bmpProd",gxold:"OV16bmpProd",gxvar:"AV16bmpProd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpProd=Value},v2z:function(Value){gx.O.ZV16bmpProd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPROD",row || gx.fn.currentGridRowImpl(60),gx.O.AV16bmpProd,gx.O.AV49Bmpprod_GXI)},c2v:function(){gx.O.AV49Bmpprod_GXI=this.val_GXI();gx.O.AV16bmpProd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPROD",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPROD_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV49Bmpprod_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocomprapessoaid,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAPESSOAID",gxz:"Z3362PedidoCompraPessoaId",gxold:"O3362PedidoCompraPessoaId",gxvar:"A3362PedidoCompraPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3362PedidoCompraPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3362PedidoCompraPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAPESSOAID",row || gx.fn.currentGridRowImpl(60),gx.O.A3362PedidoCompraPessoaId,0)},c2v:function(){gx.O.A3362PedidoCompraPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRAPESSOAID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TABLENAV",grid:0};
   GXValidFnc[81]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[83]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[85]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[87]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[89]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[90]={fld:"JSRELAT", format:2,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV40Pagina",gxold:"OV40Pagina",gxvar:"AV40Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV40Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV40Pagina)},c2v:function(){gx.O.AV40Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV41PaginaAux",gxold:"OV41PaginaAux",gxvar:"AV41PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV41PaginaAux,0)},c2v:function(){gx.O.AV41PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"JS2", format:2,grid:0};
   GXValidFnc[95]={fld:"JS", format:2,grid:0};
   GXValidFnc[96]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[97]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARAC",gxz:"ZV44QtdeCarac",gxold:"OV44QtdeCarac",gxvar:"AV44QtdeCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44QtdeCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44QtdeCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARAC",gx.O.AV44QtdeCarac,0)},c2v:function(){gx.O.AV44QtdeCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARAC",'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV24Sim",gxold:"OV24Sim",gxvar:"AV24Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Sim=Value},v2z:function(Value){gx.O.ZV24Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV24Sim,0)},c2v:function(){gx.O.AV24Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV25Nao",gxold:"OV25Nao",gxvar:"AV25Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Nao=Value},v2z:function(Value){gx.O.ZV25Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV25Nao,0)},c2v:function(){gx.O.AV25Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNMONTA",gxz:"ZV45SnMonta",gxold:"OV45SnMonta",gxvar:"AV45SnMonta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45SnMonta=Value},v2z:function(Value){gx.O.ZV45SnMonta=Value},v2c:function(){gx.fn.setControlValue("vSNMONTA",gx.O.AV45SnMonta,0)},c2v:function(){gx.O.AV45SnMonta=this.val()},val:function(){return gx.fn.getControlValue("vSNMONTA")},nac:gx.falseFn};
   GXValidFnc[101]={fld:"PROMPT_PEDIDOCOMPRAPESSOAIDFILTRO",grid:0};
   this.AV37PedidoCompraFilialIdTela = 0 ;
   this.ZV37PedidoCompraFilialIdTela = 0 ;
   this.OV37PedidoCompraFilialIdTela = 0 ;
   this.AV26PedidoCompraFilialNome = "" ;
   this.ZV26PedidoCompraFilialNome = "" ;
   this.OV26PedidoCompraFilialNome = "" ;
   this.AV20PedidoCompraPessoaIdFiltro = 0 ;
   this.ZV20PedidoCompraPessoaIdFiltro = 0 ;
   this.OV20PedidoCompraPessoaIdFiltro = 0 ;
   this.AV27PedidoCompraPessoaFantasia = "" ;
   this.ZV27PedidoCompraPessoaFantasia = "" ;
   this.OV27PedidoCompraPessoaFantasia = "" ;
   this.AV42PedidoCompraAnoFiltro = 0 ;
   this.ZV42PedidoCompraAnoFiltro = 0 ;
   this.OV42PedidoCompraAnoFiltro = 0 ;
   this.AV43PedidoCompraNumeroFiltro = 0 ;
   this.ZV43PedidoCompraNumeroFiltro = 0 ;
   this.OV43PedidoCompraNumeroFiltro = 0 ;
   this.AV21PedidoCompraSituacaoFiltro = "" ;
   this.ZV21PedidoCompraSituacaoFiltro = "" ;
   this.OV21PedidoCompraSituacaoFiltro = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV22PedidoCompraDataInicialFiltro = gx.date.nullDate() ;
   this.ZV22PedidoCompraDataInicialFiltro = gx.date.nullDate() ;
   this.OV22PedidoCompraDataInicialFiltro = gx.date.nullDate() ;
   this.AV23PedidoCompraDataFinalFiltro = gx.date.nullDate() ;
   this.ZV23PedidoCompraDataFinalFiltro = gx.date.nullDate() ;
   this.OV23PedidoCompraDataFinalFiltro = gx.date.nullDate() ;
   this.Z3336PedidoCompraAno = 0 ;
   this.O3336PedidoCompraAno = 0 ;
   this.Z3337PedidoCompraNumero = 0 ;
   this.O3337PedidoCompraNumero = 0 ;
   this.Z3360PedidoCompraData = gx.date.nullDate() ;
   this.O3360PedidoCompraData = gx.date.nullDate() ;
   this.Z3778PedidoCompraPessoaFantasia = "" ;
   this.O3778PedidoCompraPessoaFantasia = "" ;
   this.ZV17PedidoCompraPessoaFantasiaGrid = "" ;
   this.OV17PedidoCompraPessoaFantasiaGrid = "" ;
   this.Z3382PedidoCompraValorDesconto = 0 ;
   this.O3382PedidoCompraValorDesconto = 0 ;
   this.Z3788PedidoCompraValorLiquido = 0 ;
   this.O3788PedidoCompraValorLiquido = 0 ;
   this.Z3389PedidoCompraDataEntrega = gx.date.nullDate() ;
   this.O3389PedidoCompraDataEntrega = gx.date.nullDate() ;
   this.Z3380PedidoCompraSituacao = "" ;
   this.O3380PedidoCompraSituacao = "" ;
   this.Z3388PedidoCompraFilialId = 0 ;
   this.O3388PedidoCompraFilialId = 0 ;
   this.ZV16bmpProd = "" ;
   this.OV16bmpProd = "" ;
   this.Z3362PedidoCompraPessoaId = 0 ;
   this.O3362PedidoCompraPessoaId = 0 ;
   this.AV40Pagina = 0 ;
   this.ZV40Pagina = 0 ;
   this.OV40Pagina = 0 ;
   this.AV41PaginaAux = 0 ;
   this.ZV41PaginaAux = 0 ;
   this.OV41PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV44QtdeCarac = 0 ;
   this.ZV44QtdeCarac = 0 ;
   this.OV44QtdeCarac = 0 ;
   this.AV24Sim = "" ;
   this.ZV24Sim = "" ;
   this.OV24Sim = "" ;
   this.AV25Nao = "" ;
   this.ZV25Nao = "" ;
   this.OV25Nao = "" ;
   this.AV45SnMonta = "" ;
   this.ZV45SnMonta = "" ;
   this.OV45SnMonta = "" ;
   this.AV37PedidoCompraFilialIdTela = 0 ;
   this.AV26PedidoCompraFilialNome = "" ;
   this.AV20PedidoCompraPessoaIdFiltro = 0 ;
   this.AV27PedidoCompraPessoaFantasia = "" ;
   this.AV42PedidoCompraAnoFiltro = 0 ;
   this.AV43PedidoCompraNumeroFiltro = 0 ;
   this.AV21PedidoCompraSituacaoFiltro = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22PedidoCompraDataInicialFiltro = gx.date.nullDate() ;
   this.AV23PedidoCompraDataFinalFiltro = gx.date.nullDate() ;
   this.AV40Pagina = 0 ;
   this.AV41PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV44QtdeCarac = 0 ;
   this.AV24Sim = "" ;
   this.AV25Nao = "" ;
   this.AV45SnMonta = "" ;
   this.AV19PedidoCompraFilialIdFiltro = 0 ;
   this.AV18PedidoCompraNumeroSaida = 0 ;
   this.AV36PedidoCompraAno = 0 ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3787PedidoCompraValorICMSST = 0 ;
   this.A3786PedidoCompraValorICMS = 0 ;
   this.A3785PedidoCompraValorIPI = 0 ;
   this.A3384PedidoCompraValorEncargo = 0 ;
   this.A3385PedidoCompraValorSeguro = 0 ;
   this.A3383PedidoCompraValorFrete = 0 ;
   this.A3391PedidoCompraValorTotal = 0 ;
   this.A3361PedidoCompraPessoaEmpId = "" ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A3360PedidoCompraData = gx.date.nullDate() ;
   this.A3778PedidoCompraPessoaFantasia = "" ;
   this.AV17PedidoCompraPessoaFantasiaGrid = "" ;
   this.A3382PedidoCompraValorDesconto = 0 ;
   this.A3788PedidoCompraValorLiquido = 0 ;
   this.A3389PedidoCompraDataEntrega = gx.date.nullDate() ;
   this.A3380PedidoCompraSituacao = "" ;
   this.A3388PedidoCompraFilialId = 0 ;
   this.AV16bmpProd = "" ;
   this.A3362PedidoCompraPessoaId = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.Events = {"e17ng2_client": ["ENTER", true] ,"e11ng2_client": ["'GXM_FIRST'", true] ,"e12ng2_client": ["'GXM_PREVIOUS'", true] ,"e13ng2_client": ["'GXM_NEXT'", true] ,"e14ng2_client": ["'GXM_LAST'", true] ,"e20ng2_client": ["'ATUALIZAPAGINA'", true] ,"e15ng2_client": ["'PROCURAR'", true] ,"e21ng2_client": ["'ABREPEDIDOCOMPRAITEM'", true] ,"e22ng1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37PedidoCompraFilialIdTela',fld:'vPEDIDOCOMPRAFILIALIDTELA'},{av:'AV20PedidoCompraPessoaIdFiltro',fld:'vPEDIDOCOMPRAPESSOAIDFILTRO'},{av:'AV42PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV43PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV21PedidoCompraSituacaoFiltro',fld:'vPEDIDOCOMPRASITUACAOFILTRO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22PedidoCompraDataInicialFiltro',fld:'vPEDIDOCOMPRADATAINICIALFILTRO'},{av:'AV23PedidoCompraDataFinalFiltro',fld:'vPEDIDOCOMPRADATAFINALFILTRO'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'gx.fn.getCtrlProperty("vBMPPROD","Tooltiptext")',ctrl:'vBMPPROD',prop:'Tooltiptext'},{av:'AV16bmpProd',fld:'vBMPPROD'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'PEDIDOCOMPRANUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRANUMERO","Title")',ctrl:'PEDIDOCOMPRANUMERO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'PEDIDOCOMPRAANO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Title")',ctrl:'PEDIDOCOMPRAANO',prop:'Title'},{ctrl:'PEDIDOCOMPRADATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRADATA","Title")',ctrl:'PEDIDOCOMPRADATA',prop:'Title'},{ctrl:'vPEDIDOCOMPRAPESSOAFANTASIAGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vPEDIDOCOMPRAPESSOAFANTASIAGRID","Title")',ctrl:'vPEDIDOCOMPRAPESSOAFANTASIAGRID',prop:'Title'},{ctrl:'PEDIDOCOMPRAVALORDESCONTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAVALORDESCONTO","Title")',ctrl:'PEDIDOCOMPRAVALORDESCONTO',prop:'Title'},{ctrl:'PEDIDOCOMPRADATAENTREGA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRADATAENTREGA","Title")',ctrl:'PEDIDOCOMPRADATAENTREGA',prop:'Title'},{ctrl:'PEDIDOCOMPRASITUACAO'},{av:'AV41PaginaAux',fld:'vPAGINAAUX'},{av:'AV40Pagina',fld:'vPAGINA'},{av:'AV39NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'}],[{av:'AV18PedidoCompraNumeroSaida',fld:'vPEDIDOCOMPRANUMEROSAIDA'},{av:'AV36PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37PedidoCompraFilialIdTela',fld:'vPEDIDOCOMPRAFILIALIDTELA'},{av:'AV20PedidoCompraPessoaIdFiltro',fld:'vPEDIDOCOMPRAPESSOAIDFILTRO'},{av:'AV42PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV43PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV21PedidoCompraSituacaoFiltro',fld:'vPEDIDOCOMPRASITUACAOFILTRO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22PedidoCompraDataInicialFiltro',fld:'vPEDIDOCOMPRADATAINICIALFILTRO'},{av:'AV23PedidoCompraDataFinalFiltro',fld:'vPEDIDOCOMPRADATAFINALFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'gx.fn.getCtrlProperty("vBMPPROD","Tooltiptext")',ctrl:'vBMPPROD',prop:'Tooltiptext'},{av:'AV16bmpProd',fld:'vBMPPROD'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'}],[{av:'AV40Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37PedidoCompraFilialIdTela',fld:'vPEDIDOCOMPRAFILIALIDTELA'},{av:'AV20PedidoCompraPessoaIdFiltro',fld:'vPEDIDOCOMPRAPESSOAIDFILTRO'},{av:'AV42PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV43PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV21PedidoCompraSituacaoFiltro',fld:'vPEDIDOCOMPRASITUACAOFILTRO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22PedidoCompraDataInicialFiltro',fld:'vPEDIDOCOMPRADATAINICIALFILTRO'},{av:'AV23PedidoCompraDataFinalFiltro',fld:'vPEDIDOCOMPRADATAFINALFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'gx.fn.getCtrlProperty("vBMPPROD","Tooltiptext")',ctrl:'vBMPPROD',prop:'Tooltiptext'},{av:'AV16bmpProd',fld:'vBMPPROD'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV40Pagina',fld:'vPAGINA'}],[{av:'AV40Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37PedidoCompraFilialIdTela',fld:'vPEDIDOCOMPRAFILIALIDTELA'},{av:'AV20PedidoCompraPessoaIdFiltro',fld:'vPEDIDOCOMPRAPESSOAIDFILTRO'},{av:'AV42PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV43PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV21PedidoCompraSituacaoFiltro',fld:'vPEDIDOCOMPRASITUACAOFILTRO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22PedidoCompraDataInicialFiltro',fld:'vPEDIDOCOMPRADATAINICIALFILTRO'},{av:'AV23PedidoCompraDataFinalFiltro',fld:'vPEDIDOCOMPRADATAFINALFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'gx.fn.getCtrlProperty("vBMPPROD","Tooltiptext")',ctrl:'vBMPPROD',prop:'Tooltiptext'},{av:'AV16bmpProd',fld:'vBMPPROD'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV40Pagina',fld:'vPAGINA'},{av:'AV41PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV40Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37PedidoCompraFilialIdTela',fld:'vPEDIDOCOMPRAFILIALIDTELA'},{av:'AV20PedidoCompraPessoaIdFiltro',fld:'vPEDIDOCOMPRAPESSOAIDFILTRO'},{av:'AV42PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV43PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV21PedidoCompraSituacaoFiltro',fld:'vPEDIDOCOMPRASITUACAOFILTRO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22PedidoCompraDataInicialFiltro',fld:'vPEDIDOCOMPRADATAINICIALFILTRO'},{av:'AV23PedidoCompraDataFinalFiltro',fld:'vPEDIDOCOMPRADATAFINALFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'gx.fn.getCtrlProperty("vBMPPROD","Tooltiptext")',ctrl:'vBMPPROD',prop:'Tooltiptext'},{av:'AV16bmpProd',fld:'vBMPPROD'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV41PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV40Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'AV37PedidoCompraFilialIdTela',fld:'vPEDIDOCOMPRAFILIALIDTELA'},{av:'AV22PedidoCompraDataInicialFiltro',fld:'vPEDIDOCOMPRADATAINICIALFILTRO'},{av:'AV23PedidoCompraDataFinalFiltro',fld:'vPEDIDOCOMPRADATAFINALFILTRO'},{av:'AV20PedidoCompraPessoaIdFiltro',fld:'vPEDIDOCOMPRAPESSOAIDFILTRO'},{av:'AV21PedidoCompraSituacaoFiltro',fld:'vPEDIDOCOMPRASITUACAOFILTRO'}],[{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ABREPEDIDOCOMPRAITEM'"] = [[{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'}],[{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'}]];
   this.EvtParms["LOAD"] = [[{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'}],[{av:'AV17PedidoCompraPessoaFantasiaGrid',fld:'vPEDIDOCOMPRAPESSOAFANTASIAGRID'},{ctrl:'PEDIDOCOMPRASITUACAO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37PedidoCompraFilialIdTela',fld:'vPEDIDOCOMPRAFILIALIDTELA'},{av:'AV20PedidoCompraPessoaIdFiltro',fld:'vPEDIDOCOMPRAPESSOAIDFILTRO'},{av:'AV42PedidoCompraAnoFiltro',fld:'vPEDIDOCOMPRAANOFILTRO'},{av:'AV43PedidoCompraNumeroFiltro',fld:'vPEDIDOCOMPRANUMEROFILTRO'},{av:'AV21PedidoCompraSituacaoFiltro',fld:'vPEDIDOCOMPRASITUACAOFILTRO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22PedidoCompraDataInicialFiltro',fld:'vPEDIDOCOMPRADATAINICIALFILTRO'},{av:'AV23PedidoCompraDataFinalFiltro',fld:'vPEDIDOCOMPRADATAFINALFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV45SnMonta',fld:'vSNMONTA'},{av:'gx.fn.getCtrlProperty("vBMPPROD","Tooltiptext")',ctrl:'vBMPPROD',prop:'Tooltiptext'},{av:'AV16bmpProd',fld:'vBMPPROD'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'}],[]];
   this.setPrompt("IMAGEPROMPT", [13]);
   this.setPrompt("PROMPT_PEDIDOCOMPRAPESSOAIDFILTRO", [20]);
   this.setVCMap("A3391PedidoCompraValorTotal", "PEDIDOCOMPRAVALORTOTAL", 0, "decimal");
   this.setVCMap("A3383PedidoCompraValorFrete", "PEDIDOCOMPRAVALORFRETE", 0, "decimal");
   this.setVCMap("A3385PedidoCompraValorSeguro", "PEDIDOCOMPRAVALORSEGURO", 0, "decimal");
   this.setVCMap("A3384PedidoCompraValorEncargo", "PEDIDOCOMPRAVALORENCARGO", 0, "decimal");
   this.setVCMap("A3785PedidoCompraValorIPI", "PEDIDOCOMPRAVALORIPI", 0, "decimal");
   this.setVCMap("A3786PedidoCompraValorICMS", "PEDIDOCOMPRAVALORICMS", 0, "decimal");
   this.setVCMap("A3787PedidoCompraValorICMSST", "PEDIDOCOMPRAVALORICMSST", 0, "decimal");
   this.setVCMap("AV19PedidoCompraFilialIdFiltro", "vPEDIDOCOMPRAFILIALIDFILTRO", 0, "int");
   this.setVCMap("AV18PedidoCompraNumeroSaida", "vPEDIDOCOMPRANUMEROSAIDA", 0, "int");
   this.setVCMap("AV36PedidoCompraAno", "vPEDIDOCOMPRAANO", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar(this.GXValidFnc[100]);
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpProd", rfrProp:"Tooltiptext", gxAttId:"Bmpprod"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpProd", rfrProp:"Value", gxAttId:"Bmpprod"});
   GridContainer.addRefreshingVar({rfrVar:"A3336PedidoCompraAno", rfrProp:"Visible", gxAttId:"3336"});
   GridContainer.addRefreshingVar({rfrVar:"A3778PedidoCompraPessoaFantasia", rfrProp:"Value", gxAttId:"3778"});
   GridContainer.addRefreshingVar({rfrVar:"A3362PedidoCompraPessoaId", rfrProp:"Value", gxAttId:"3362"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultapedidocompra());
