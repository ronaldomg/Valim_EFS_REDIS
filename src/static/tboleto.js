/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:36:26.92
*/
gx.evt.autoSkip = false;
gx.define('tboleto', false, function () {
   this.ServerClass =  "tboleto" ;
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
      this.A2864BoletoNumeroImp=gx.fn.getControlValue("BOLETONUMEROIMP") ;
      this.A10385BoletoValorOriginal=gx.fn.getDecimalValue("BOLETOVALORORIGINAL",'.',',') ;
      this.A10386BoletoDataVencimentoOri=gx.fn.getDateValue("BOLETODATAVENCIMENTOORI") ;
      this.A2861BoletoSacadoEmpId=gx.fn.getControlValue("BOLETOSACADOEMPID") ;
      this.A2862BoletoSacadoId=gx.fn.getIntegerValue("BOLETOSACADOID",'.') ;
      this.A2906BoletoTipoSacado=gx.fn.getControlValue("BOLETOTIPOSACADO") ;
      this.A2904BoletoUFSacado=gx.fn.getControlValue("BOLETOUFSACADO") ;
      this.A2865BoletoCarteira=gx.fn.getControlValue("BOLETOCARTEIRA") ;
      this.A2907BoletoDataJuros=gx.fn.getDateValue("BOLETODATAJUROS") ;
      this.A2908BoletoValorDesconto=gx.fn.getDecimalValue("BOLETOVALORDESCONTO",'.',',') ;
      this.A10353BoletoValorDesconto2=gx.fn.getDecimalValue("BOLETOVALORDESCONTO2",'.',',') ;
      this.A10354BoletoValorDesconto3=gx.fn.getDecimalValue("BOLETOVALORDESCONTO3",'.',',') ;
      this.A2909BoletoDataDesconto=gx.fn.getDateValue("BOLETODATADESCONTO") ;
      this.A10349BoletoDataDesconto2=gx.fn.getDateValue("BOLETODATADESCONTO2") ;
      this.A10350BoletoDataDesconto3=gx.fn.getDateValue("BOLETODATADESCONTO3") ;
      this.A10359BoletoSnAlterouValor=gx.fn.getControlValue("BOLETOSNALTEROUVALOR") ;
      this.A10360BoletoSnAlterouVencimento=gx.fn.getControlValue("BOLETOSNALTEROUVENCIMENTO") ;
      this.A2853BoletoCedenteSequencia=gx.fn.getIntegerValue("BOLETOCEDENTESEQUENCIA",'.') ;
      this.A2316BoletoCedenteBancoNome=gx.fn.getControlValue("BOLETOCEDENTEBANCONOME") ;
      this.A2317BoletoCedenteAgenciaNome=gx.fn.getControlValue("BOLETOCEDENTEAGENCIANOME") ;
      this.A2863BoletoCedenteImgBanco=gx.fn.getControlValue("BOLETOCEDENTEIMGBANCO") ;
      this.A6486BoletoCedenteImgEmpresa=gx.fn.getControlValue("BOLETOCEDENTEIMGEMPRESA") ;
      this.A11181BoletoCedenteModelo=gx.fn.getControlValue("BOLETOCEDENTEMODELO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Boletoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BOLETOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Boletoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Boletoid",["gx.O.A1819BoletoEmpresaId", "gx.O.A1820BoletoId", "gx.num.urlDecimal(gx.O.A1821BoletoNumero,\'.\',\',\')", "gx.O.A2864BoletoNumeroImp", "gx.O.A1822BoletoDigito", "gx.num.urlDecimal(gx.O.A1823BoletoValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10385BoletoValorOriginal,\'.\',\',\')", "gx.O.A1824BoletoTextoSacado", "gx.O.A1825BoletoTextoFichaComp", "gx.O.A1826BoletoMensagemCabec", "gx.O.A1827BoletoCodigoBarras", "gx.O.A1828BoletoLinhaDigitavel", 'gx.date.urlDate(gx.O.A1829BoletoDataProcessamento,"DMY4")', 'gx.date.urlDate(gx.O.A1830BoletoDataEmissao,"DMY4")', 'gx.date.urlDate(gx.O.A1831BoletoDataVencimento,"DMY4")', 'gx.date.urlDate(gx.O.A10386BoletoDataVencimentoOri,"DMY4")', "gx.O.A2861BoletoSacadoEmpId", "gx.O.A2862BoletoSacadoId", "gx.O.A1832BoletoNomeSacado", "gx.O.A2906BoletoTipoSacado", "gx.O.A1833BoletoEnderecoSacado", "gx.O.A1834BoletoBairroSacado", "gx.O.A1835BoletoCepSacado", "gx.O.A2904BoletoUFSacado", "gx.O.A1836BoletoCNPJCPFSacado", "gx.O.A1837BoletoCidadeSacado", "gx.O.A1838BoletoDocumento", "gx.O.A1839BoletoAceite", "gx.O.A2865BoletoCarteira", "gx.O.A1840BoletoEspecieDocumento", "gx.O.A1841BoletoUsoBanco", "gx.O.A1842BoletoMoeda", "gx.O.A1843BoletoBancoImpressao", "gx.O.A1844BoletoLocalPagamento", "gx.O.A1845BoletoAgenciaCedenteImpressao", "gx.num.urlDecimal(gx.O.A1846BoletoValorJuros,\'.\',\',\')", 'gx.date.urlDate(gx.O.A2907BoletoDataJuros,"DMY4")', "gx.num.urlDecimal(gx.O.A2908BoletoValorDesconto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10353BoletoValorDesconto2,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10354BoletoValorDesconto3,\'.\',\',\')", 'gx.date.urlDate(gx.O.A2909BoletoDataDesconto,"DMY4")', 'gx.date.urlDate(gx.O.A10349BoletoDataDesconto2,"DMY4")', 'gx.date.urlDate(gx.O.A10350BoletoDataDesconto3,"DMY4")', "gx.num.urlDecimal(gx.O.A1847BoletoValorMulta,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A1848BoletoValorTarifa,\'.\',\',\')", "gx.O.A1849BoletoNomeCedente", "gx.O.A10359BoletoSnAlterouValor", "gx.O.A10360BoletoSnAlterouVencimento", "gx.O.A1850BoletoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A1851BoletoDataHoraAlt,"DMY4")', "gx.O.A1815BoletoCedenteEmpId", "gx.O.A1816BoletoCedenteBanco", "gx.O.A1817BoletoCedenteAgencia", "gx.O.A2853BoletoCedenteSequencia"],["A1815BoletoCedenteEmpId", "A1816BoletoCedenteBanco", "A1817BoletoCedenteAgencia", "A2853BoletoCedenteSequencia", "A1821BoletoNumero", "A2864BoletoNumeroImp", "A1822BoletoDigito", "A1823BoletoValor", "A10385BoletoValorOriginal", "A1824BoletoTextoSacado", "A1825BoletoTextoFichaComp", "A1826BoletoMensagemCabec", "A1827BoletoCodigoBarras", "A1828BoletoLinhaDigitavel", "A1829BoletoDataProcessamento", "A1830BoletoDataEmissao", "A1831BoletoDataVencimento", "A10386BoletoDataVencimentoOri", "A2861BoletoSacadoEmpId", "A2862BoletoSacadoId", "A1832BoletoNomeSacado", "A2906BoletoTipoSacado", "A1833BoletoEnderecoSacado", "A1834BoletoBairroSacado", "A1835BoletoCepSacado", "A2904BoletoUFSacado", "A1836BoletoCNPJCPFSacado", "A1837BoletoCidadeSacado", "A1838BoletoDocumento", "A1839BoletoAceite", "A2865BoletoCarteira", "A1840BoletoEspecieDocumento", "A1841BoletoUsoBanco", "A1842BoletoMoeda", "A1843BoletoBancoImpressao", "A1844BoletoLocalPagamento", "A1845BoletoAgenciaCedenteImpressao", "A1846BoletoValorJuros", "A2907BoletoDataJuros", "A2908BoletoValorDesconto", "A10353BoletoValorDesconto2", "A10354BoletoValorDesconto3", "A2909BoletoDataDesconto", "A10349BoletoDataDesconto2", "A10350BoletoDataDesconto3", "A1847BoletoValorMulta", "A1848BoletoValorTarifa", "A1849BoletoNomeCedente", "A10359BoletoSnAlterouValor", "A10360BoletoSnAlterouVencimento", "A1850BoletoUsuarioAlt", "A1851BoletoDataHoraAlt", "A2316BoletoCedenteBancoNome", "A2317BoletoCedenteAgenciaNome", "A2863BoletoCedenteImgBanco", "A6486BoletoCedenteImgEmpresa", "A11181BoletoCedenteModelo", "Gx_mode", "Z1819BoletoEmpresaId", "Z1820BoletoId", "Z1815BoletoCedenteEmpId", "Z1816BoletoCedenteBanco", "Z1817BoletoCedenteAgencia", "Z2853BoletoCedenteSequencia", "Z1821BoletoNumero", "Z2864BoletoNumeroImp", "Z1822BoletoDigito", "Z1823BoletoValor", "Z10385BoletoValorOriginal", "Z1824BoletoTextoSacado", "Z1825BoletoTextoFichaComp", "Z1826BoletoMensagemCabec", "Z1827BoletoCodigoBarras", "Z1828BoletoLinhaDigitavel", "Z1829BoletoDataProcessamento", "Z1830BoletoDataEmissao", "Z1831BoletoDataVencimento", "Z10386BoletoDataVencimentoOri", "Z2861BoletoSacadoEmpId", "Z2862BoletoSacadoId", "Z1832BoletoNomeSacado", "Z2906BoletoTipoSacado", "Z1833BoletoEnderecoSacado", "Z1834BoletoBairroSacado", "Z1835BoletoCepSacado", "Z2904BoletoUFSacado", "Z1836BoletoCNPJCPFSacado", "Z1837BoletoCidadeSacado", "Z1838BoletoDocumento", "Z1839BoletoAceite", "Z2865BoletoCarteira", "Z1840BoletoEspecieDocumento", "Z1841BoletoUsoBanco", "Z1842BoletoMoeda", "Z1843BoletoBancoImpressao", "Z1844BoletoLocalPagamento", "Z1845BoletoAgenciaCedenteImpressao", "Z1846BoletoValorJuros", "Z2907BoletoDataJuros", "Z2908BoletoValorDesconto", "Z10353BoletoValorDesconto2", "Z10354BoletoValorDesconto3", "Z2909BoletoDataDesconto", "Z10349BoletoDataDesconto2", "Z10350BoletoDataDesconto3", "Z1847BoletoValorMulta", "Z1848BoletoValorTarifa", "Z1849BoletoNomeCedente", "Z10359BoletoSnAlterouValor", "Z10360BoletoSnAlterouVencimento", "Z1850BoletoUsuarioAlt", "Z1851BoletoDataHoraAlt", "Z2316BoletoCedenteBancoNome", "Z2317BoletoCedenteAgenciaNome", "Z2863BoletoCedenteImgBanco", "Z6486BoletoCedenteImgEmpresa", "Z11181BoletoCedenteModelo", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Boletocedenteempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("BOLETOCEDENTEEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Boletocedentebanco=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Boletocedentebanco",["gx.O.A1815BoletoCedenteEmpId", "gx.O.A1816BoletoCedenteBanco", "gx.O.A2316BoletoCedenteBancoNome"],["A2316BoletoCedenteBancoNome"]);
      return true;
   }
   this.Valid_Boletocedenteagencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Boletocedenteagencia",["gx.O.A1815BoletoCedenteEmpId", "gx.O.A1816BoletoCedenteBanco", "gx.O.A1817BoletoCedenteAgencia", "gx.O.A2853BoletoCedenteSequencia", "gx.O.A2317BoletoCedenteAgenciaNome", "gx.O.A2863BoletoCedenteImgBanco", "gx.O.A6486BoletoCedenteImgEmpresa", "gx.O.A11181BoletoCedenteModelo"],["A2317BoletoCedenteAgenciaNome", "A2863BoletoCedenteImgBanco", "A6486BoletoCedenteImgEmpresa", "A11181BoletoCedenteModelo"]);
      return true;
   }
   this.e113i189_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e123i189_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e133i189_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,37,39,42,46,50,52,55,57,60,62,65,67,70,72,75,77,80,82,85,87,90,92,95,97,100,102,105,107,110,112,115,117,120,122,125,127,130,132,135,137,140,142,145,147,150,152,155,157,160,162,165,167,170,172,175,177,180,182,185,187,190,192,195,197,200,202,203,206,207,208,211,222,225,226];
   this.GXLastCtrlId =226;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Boletoempresaid,isvalid:null,rgrid:[],fld:"BOLETOEMPRESAID",gxz:"Z1819BoletoEmpresaId",gxold:"O1819BoletoEmpresaId",gxvar:"A1819BoletoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1819BoletoEmpresaId=Value},v2z:function(Value){gx.O.Z1819BoletoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("BOLETOEMPRESAID",gx.O.A1819BoletoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1819BoletoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("BOLETOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Boletoid,isvalid:null,rgrid:[],fld:"BOLETOID",gxz:"Z1820BoletoId",gxold:"O1820BoletoId",gxvar:"A1820BoletoId",ucs:[],op:[39,30,25,202,197,192,187,182,177,172,167,162,157,152,147,142,137,132,127,122,117,112,107,102,97,92,87,82,77,72,67,62,57,52],ip:[39,30,25,202,197,192,187,182,177,172,167,162,157,152,147,142,137,132,127,122,117,112,107,102,97,92,87,82,77,72,67,62,57,52,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1820BoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1820BoletoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BOLETOID",gx.O.A1820BoletoId,0)},c2v:function(){gx.O.A1820BoletoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BOLETOID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Boletocedenteempid,isvalid:null,rgrid:[],fld:"BOLETOCEDENTEEMPID",gxz:"Z1815BoletoCedenteEmpId",gxold:"O1815BoletoCedenteEmpId",gxvar:"A1815BoletoCedenteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1815BoletoCedenteEmpId=Value},v2z:function(Value){gx.O.Z1815BoletoCedenteEmpId=Value},v2c:function(){gx.fn.setControlValue("BOLETOCEDENTEEMPID",gx.O.A1815BoletoCedenteEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1815BoletoCedenteEmpId=this.val()},val:function(){return gx.fn.getControlValue("BOLETOCEDENTEEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Boletocedentebanco,isvalid:null,rgrid:[],fld:"BOLETOCEDENTEBANCO",gxz:"Z1816BoletoCedenteBanco",gxold:"O1816BoletoCedenteBanco",gxvar:"A1816BoletoCedenteBanco",ucs:[],op:[],ip:[30,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1816BoletoCedenteBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1816BoletoCedenteBanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BOLETOCEDENTEBANCO",gx.O.A1816BoletoCedenteBanco,0)},c2v:function(){gx.O.A1816BoletoCedenteBanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BOLETOCEDENTEBANCO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Boletocedenteagencia,isvalid:null,rgrid:[],fld:"BOLETOCEDENTEAGENCIA",gxz:"Z1817BoletoCedenteAgencia",gxold:"O1817BoletoCedenteAgencia",gxvar:"A1817BoletoCedenteAgencia",ucs:[],op:[],ip:[39,30,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1817BoletoCedenteAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1817BoletoCedenteAgencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BOLETOCEDENTEAGENCIA",gx.O.A1817BoletoCedenteAgencia,0)},c2v:function(){gx.O.A1817BoletoCedenteAgencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BOLETOCEDENTEAGENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[46]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETONUMERO",gxz:"Z1821BoletoNumero",gxold:"O1821BoletoNumero",gxvar:"A1821BoletoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1821BoletoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1821BoletoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("BOLETONUMERO",gx.O.A1821BoletoNumero,0)},c2v:function(){gx.O.A1821BoletoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("BOLETONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODIGITO",gxz:"Z1822BoletoDigito",gxold:"O1822BoletoDigito",gxvar:"A1822BoletoDigito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1822BoletoDigito=Value},v2z:function(Value){gx.O.Z1822BoletoDigito=Value},v2c:function(){gx.fn.setControlValue("BOLETODIGITO",gx.O.A1822BoletoDigito,0)},c2v:function(){gx.O.A1822BoletoDigito=this.val()},val:function(){return gx.fn.getControlValue("BOLETODIGITO")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOVALOR",gxz:"Z1823BoletoValor",gxold:"O1823BoletoValor",gxvar:"A1823BoletoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1823BoletoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1823BoletoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("BOLETOVALOR",gx.O.A1823BoletoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1823BoletoValor=this.val()},val:function(){return gx.fn.getDecimalValue("BOLETOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[65]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOTEXTOSACADO",gxz:"Z1824BoletoTextoSacado",gxold:"O1824BoletoTextoSacado",gxvar:"A1824BoletoTextoSacado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1824BoletoTextoSacado=Value},v2z:function(Value){gx.O.Z1824BoletoTextoSacado=Value},v2c:function(){gx.fn.setControlValue("BOLETOTEXTOSACADO",gx.O.A1824BoletoTextoSacado,0)},c2v:function(){gx.O.A1824BoletoTextoSacado=this.val()},val:function(){return gx.fn.getControlValue("BOLETOTEXTOSACADO")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOTEXTOFICHACOMP",gxz:"Z1825BoletoTextoFichaComp",gxold:"O1825BoletoTextoFichaComp",gxvar:"A1825BoletoTextoFichaComp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1825BoletoTextoFichaComp=Value},v2z:function(Value){gx.O.Z1825BoletoTextoFichaComp=Value},v2c:function(){gx.fn.setControlValue("BOLETOTEXTOFICHACOMP",gx.O.A1825BoletoTextoFichaComp,0)},c2v:function(){gx.O.A1825BoletoTextoFichaComp=this.val()},val:function(){return gx.fn.getControlValue("BOLETOTEXTOFICHACOMP")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOMENSAGEMCABEC",gxz:"Z1826BoletoMensagemCabec",gxold:"O1826BoletoMensagemCabec",gxvar:"A1826BoletoMensagemCabec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1826BoletoMensagemCabec=Value},v2z:function(Value){gx.O.Z1826BoletoMensagemCabec=Value},v2c:function(){gx.fn.setControlValue("BOLETOMENSAGEMCABEC",gx.O.A1826BoletoMensagemCabec,0)},c2v:function(){gx.O.A1826BoletoMensagemCabec=this.val()},val:function(){return gx.fn.getControlValue("BOLETOMENSAGEMCABEC")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"svchar",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCODIGOBARRAS",gxz:"Z1827BoletoCodigoBarras",gxold:"O1827BoletoCodigoBarras",gxvar:"A1827BoletoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1827BoletoCodigoBarras=Value},v2z:function(Value){gx.O.Z1827BoletoCodigoBarras=Value},v2c:function(){gx.fn.setControlValue("BOLETOCODIGOBARRAS",gx.O.A1827BoletoCodigoBarras,0)},c2v:function(){gx.O.A1827BoletoCodigoBarras=this.val()},val:function(){return gx.fn.getControlValue("BOLETOCODIGOBARRAS")},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"svchar",len:54,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOLINHADIGITAVEL",gxz:"Z1828BoletoLinhaDigitavel",gxold:"O1828BoletoLinhaDigitavel",gxvar:"A1828BoletoLinhaDigitavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1828BoletoLinhaDigitavel=Value},v2z:function(Value){gx.O.Z1828BoletoLinhaDigitavel=Value},v2c:function(){gx.fn.setControlValue("BOLETOLINHADIGITAVEL",gx.O.A1828BoletoLinhaDigitavel,0)},c2v:function(){gx.O.A1828BoletoLinhaDigitavel=this.val()},val:function(){return gx.fn.getControlValue("BOLETOLINHADIGITAVEL")},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAPROCESSAMENTO",gxz:"Z1829BoletoDataProcessamento",gxold:"O1829BoletoDataProcessamento",gxvar:"A1829BoletoDataProcessamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1829BoletoDataProcessamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1829BoletoDataProcessamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BOLETODATAPROCESSAMENTO",gx.O.A1829BoletoDataProcessamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1829BoletoDataProcessamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("BOLETODATAPROCESSAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 92 , function() {
   });
   GXValidFnc[95]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAEMISSAO",gxz:"Z1830BoletoDataEmissao",gxold:"O1830BoletoDataEmissao",gxvar:"A1830BoletoDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1830BoletoDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1830BoletoDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BOLETODATAEMISSAO",gx.O.A1830BoletoDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1830BoletoDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("BOLETODATAEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 97 , function() {
   });
   GXValidFnc[100]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[102]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAVENCIMENTO",gxz:"Z1831BoletoDataVencimento",gxold:"O1831BoletoDataVencimento",gxvar:"A1831BoletoDataVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1831BoletoDataVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1831BoletoDataVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BOLETODATAVENCIMENTO",gx.O.A1831BoletoDataVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1831BoletoDataVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("BOLETODATAVENCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 102 , function() {
   });
   GXValidFnc[105]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETONOMESACADO",gxz:"Z1832BoletoNomeSacado",gxold:"O1832BoletoNomeSacado",gxvar:"A1832BoletoNomeSacado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1832BoletoNomeSacado=Value},v2z:function(Value){gx.O.Z1832BoletoNomeSacado=Value},v2c:function(){gx.fn.setControlValue("BOLETONOMESACADO",gx.O.A1832BoletoNomeSacado,0)},c2v:function(){gx.O.A1832BoletoNomeSacado=this.val()},val:function(){return gx.fn.getControlValue("BOLETONOMESACADO")},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOENDERECOSACADO",gxz:"Z1833BoletoEnderecoSacado",gxold:"O1833BoletoEnderecoSacado",gxvar:"A1833BoletoEnderecoSacado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1833BoletoEnderecoSacado=Value},v2z:function(Value){gx.O.Z1833BoletoEnderecoSacado=Value},v2c:function(){gx.fn.setControlValue("BOLETOENDERECOSACADO",gx.O.A1833BoletoEnderecoSacado,0)},c2v:function(){gx.O.A1833BoletoEnderecoSacado=this.val()},val:function(){return gx.fn.getControlValue("BOLETOENDERECOSACADO")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOBAIRROSACADO",gxz:"Z1834BoletoBairroSacado",gxold:"O1834BoletoBairroSacado",gxvar:"A1834BoletoBairroSacado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1834BoletoBairroSacado=Value},v2z:function(Value){gx.O.Z1834BoletoBairroSacado=Value},v2c:function(){gx.fn.setControlValue("BOLETOBAIRROSACADO",gx.O.A1834BoletoBairroSacado,0)},c2v:function(){gx.O.A1834BoletoBairroSacado=this.val()},val:function(){return gx.fn.getControlValue("BOLETOBAIRROSACADO")},nac:gx.falseFn};
   GXValidFnc[120]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[122]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCEPSACADO",gxz:"Z1835BoletoCepSacado",gxold:"O1835BoletoCepSacado",gxvar:"A1835BoletoCepSacado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1835BoletoCepSacado=Value},v2z:function(Value){gx.O.Z1835BoletoCepSacado=Value},v2c:function(){gx.fn.setControlValue("BOLETOCEPSACADO",gx.O.A1835BoletoCepSacado,0)},c2v:function(){gx.O.A1835BoletoCepSacado=this.val()},val:function(){return gx.fn.getControlValue("BOLETOCEPSACADO")},nac:gx.falseFn};
   GXValidFnc[125]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[127]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCNPJCPFSACADO",gxz:"Z1836BoletoCNPJCPFSacado",gxold:"O1836BoletoCNPJCPFSacado",gxvar:"A1836BoletoCNPJCPFSacado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1836BoletoCNPJCPFSacado=Value},v2z:function(Value){gx.O.Z1836BoletoCNPJCPFSacado=Value},v2c:function(){gx.fn.setControlValue("BOLETOCNPJCPFSACADO",gx.O.A1836BoletoCNPJCPFSacado,0)},c2v:function(){gx.O.A1836BoletoCNPJCPFSacado=this.val()},val:function(){return gx.fn.getControlValue("BOLETOCNPJCPFSACADO")},nac:gx.falseFn};
   GXValidFnc[130]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[132]={lvl:0,type:"svchar",len:28,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCIDADESACADO",gxz:"Z1837BoletoCidadeSacado",gxold:"O1837BoletoCidadeSacado",gxvar:"A1837BoletoCidadeSacado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1837BoletoCidadeSacado=Value},v2z:function(Value){gx.O.Z1837BoletoCidadeSacado=Value},v2c:function(){gx.fn.setControlValue("BOLETOCIDADESACADO",gx.O.A1837BoletoCidadeSacado,0)},c2v:function(){gx.O.A1837BoletoCidadeSacado=this.val()},val:function(){return gx.fn.getControlValue("BOLETOCIDADESACADO")},nac:gx.falseFn};
   GXValidFnc[135]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODOCUMENTO",gxz:"Z1838BoletoDocumento",gxold:"O1838BoletoDocumento",gxvar:"A1838BoletoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1838BoletoDocumento=Value},v2z:function(Value){gx.O.Z1838BoletoDocumento=Value},v2c:function(){gx.fn.setControlValue("BOLETODOCUMENTO",gx.O.A1838BoletoDocumento,0)},c2v:function(){gx.O.A1838BoletoDocumento=this.val()},val:function(){return gx.fn.getControlValue("BOLETODOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[140]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[142]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOACEITE",gxz:"Z1839BoletoAceite",gxold:"O1839BoletoAceite",gxvar:"A1839BoletoAceite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1839BoletoAceite=Value},v2z:function(Value){gx.O.Z1839BoletoAceite=Value},v2c:function(){gx.fn.setControlValue("BOLETOACEITE",gx.O.A1839BoletoAceite,0)},c2v:function(){gx.O.A1839BoletoAceite=this.val()},val:function(){return gx.fn.getControlValue("BOLETOACEITE")},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOESPECIEDOCUMENTO",gxz:"Z1840BoletoEspecieDocumento",gxold:"O1840BoletoEspecieDocumento",gxvar:"A1840BoletoEspecieDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1840BoletoEspecieDocumento=Value},v2z:function(Value){gx.O.Z1840BoletoEspecieDocumento=Value},v2c:function(){gx.fn.setControlValue("BOLETOESPECIEDOCUMENTO",gx.O.A1840BoletoEspecieDocumento,0)},c2v:function(){gx.O.A1840BoletoEspecieDocumento=this.val()},val:function(){return gx.fn.getControlValue("BOLETOESPECIEDOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[150]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[152]={lvl:0,type:"svchar",len:12,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOUSOBANCO",gxz:"Z1841BoletoUsoBanco",gxold:"O1841BoletoUsoBanco",gxvar:"A1841BoletoUsoBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1841BoletoUsoBanco=Value},v2z:function(Value){gx.O.Z1841BoletoUsoBanco=Value},v2c:function(){gx.fn.setControlValue("BOLETOUSOBANCO",gx.O.A1841BoletoUsoBanco,0)},c2v:function(){gx.O.A1841BoletoUsoBanco=this.val()},val:function(){return gx.fn.getControlValue("BOLETOUSOBANCO")},nac:gx.falseFn};
   GXValidFnc[155]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[157]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOMOEDA",gxz:"Z1842BoletoMoeda",gxold:"O1842BoletoMoeda",gxvar:"A1842BoletoMoeda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1842BoletoMoeda=Value},v2z:function(Value){gx.O.Z1842BoletoMoeda=Value},v2c:function(){gx.fn.setControlValue("BOLETOMOEDA",gx.O.A1842BoletoMoeda,0)},c2v:function(){gx.O.A1842BoletoMoeda=this.val()},val:function(){return gx.fn.getControlValue("BOLETOMOEDA")},nac:gx.falseFn};
   GXValidFnc[160]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[162]={lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOBANCOIMPRESSAO",gxz:"Z1843BoletoBancoImpressao",gxold:"O1843BoletoBancoImpressao",gxvar:"A1843BoletoBancoImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1843BoletoBancoImpressao=Value},v2z:function(Value){gx.O.Z1843BoletoBancoImpressao=Value},v2c:function(){gx.fn.setControlValue("BOLETOBANCOIMPRESSAO",gx.O.A1843BoletoBancoImpressao,0)},c2v:function(){gx.O.A1843BoletoBancoImpressao=this.val()},val:function(){return gx.fn.getControlValue("BOLETOBANCOIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[165]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[167]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOLOCALPAGAMENTO",gxz:"Z1844BoletoLocalPagamento",gxold:"O1844BoletoLocalPagamento",gxvar:"A1844BoletoLocalPagamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1844BoletoLocalPagamento=Value},v2z:function(Value){gx.O.Z1844BoletoLocalPagamento=Value},v2c:function(){gx.fn.setControlValue("BOLETOLOCALPAGAMENTO",gx.O.A1844BoletoLocalPagamento,0)},c2v:function(){gx.O.A1844BoletoLocalPagamento=this.val()},val:function(){return gx.fn.getControlValue("BOLETOLOCALPAGAMENTO")},nac:gx.falseFn};
   GXValidFnc[170]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[172]={lvl:0,type:"svchar",len:19,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOAGENCIACEDENTEIMPRESSAO",gxz:"Z1845BoletoAgenciaCedenteImpressao",gxold:"O1845BoletoAgenciaCedenteImpressao",gxvar:"A1845BoletoAgenciaCedenteImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1845BoletoAgenciaCedenteImpressao=Value},v2z:function(Value){gx.O.Z1845BoletoAgenciaCedenteImpressao=Value},v2c:function(){gx.fn.setControlValue("BOLETOAGENCIACEDENTEIMPRESSAO",gx.O.A1845BoletoAgenciaCedenteImpressao,0)},c2v:function(){gx.O.A1845BoletoAgenciaCedenteImpressao=this.val()},val:function(){return gx.fn.getControlValue("BOLETOAGENCIACEDENTEIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[175]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[177]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOVALORJUROS",gxz:"Z1846BoletoValorJuros",gxold:"O1846BoletoValorJuros",gxvar:"A1846BoletoValorJuros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1846BoletoValorJuros=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1846BoletoValorJuros=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("BOLETOVALORJUROS",gx.O.A1846BoletoValorJuros,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1846BoletoValorJuros=this.val()},val:function(){return gx.fn.getDecimalValue("BOLETOVALORJUROS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 177 , function() {
   });
   GXValidFnc[180]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[182]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOVALORMULTA",gxz:"Z1847BoletoValorMulta",gxold:"O1847BoletoValorMulta",gxvar:"A1847BoletoValorMulta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1847BoletoValorMulta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1847BoletoValorMulta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("BOLETOVALORMULTA",gx.O.A1847BoletoValorMulta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1847BoletoValorMulta=this.val()},val:function(){return gx.fn.getDecimalValue("BOLETOVALORMULTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 182 , function() {
   });
   GXValidFnc[185]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[187]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOVALORTARIFA",gxz:"Z1848BoletoValorTarifa",gxold:"O1848BoletoValorTarifa",gxvar:"A1848BoletoValorTarifa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1848BoletoValorTarifa=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1848BoletoValorTarifa=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("BOLETOVALORTARIFA",gx.O.A1848BoletoValorTarifa,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1848BoletoValorTarifa=this.val()},val:function(){return gx.fn.getDecimalValue("BOLETOVALORTARIFA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 187 , function() {
   });
   GXValidFnc[190]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[192]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETONOMECEDENTE",gxz:"Z1849BoletoNomeCedente",gxold:"O1849BoletoNomeCedente",gxvar:"A1849BoletoNomeCedente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1849BoletoNomeCedente=Value},v2z:function(Value){gx.O.Z1849BoletoNomeCedente=Value},v2c:function(){gx.fn.setControlValue("BOLETONOMECEDENTE",gx.O.A1849BoletoNomeCedente,0)},c2v:function(){gx.O.A1849BoletoNomeCedente=this.val()},val:function(){return gx.fn.getControlValue("BOLETONOMECEDENTE")},nac:gx.falseFn};
   GXValidFnc[195]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[197]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOUSUARIOALT",gxz:"Z1850BoletoUsuarioAlt",gxold:"O1850BoletoUsuarioAlt",gxvar:"A1850BoletoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1850BoletoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1850BoletoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("BOLETOUSUARIOALT",gx.O.A1850BoletoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1850BoletoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("BOLETOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 197 , function() {
   });
   GXValidFnc[200]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[202]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAHORAALT",gxz:"Z1851BoletoDataHoraAlt",gxold:"O1851BoletoDataHoraAlt",gxvar:"A1851BoletoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1851BoletoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1851BoletoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("BOLETODATAHORAALT",gx.O.A1851BoletoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1851BoletoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("BOLETODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 202 , function() {
   });
   GXValidFnc[203]={fld:"TAB2",grid:0};
   GXValidFnc[206]={fld:"DIV1", format:1,grid:0};
   GXValidFnc[207]={fld:"DIV2", format:1,grid:0};
   GXValidFnc[208]={fld:"TABLE21",grid:0};
   GXValidFnc[211]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[222]={fld:"BTNHELP",grid:0};
   GXValidFnc[225]={fld:"PROMPT_1815_1816",grid:189};
   GXValidFnc[226]={fld:"PROMPT_1817",grid:189};
   this.A1819BoletoEmpresaId = "" ;
   this.Z1819BoletoEmpresaId = "" ;
   this.O1819BoletoEmpresaId = "" ;
   this.A1820BoletoId = 0 ;
   this.Z1820BoletoId = 0 ;
   this.O1820BoletoId = 0 ;
   this.A1815BoletoCedenteEmpId = "" ;
   this.Z1815BoletoCedenteEmpId = "" ;
   this.O1815BoletoCedenteEmpId = "" ;
   this.A1816BoletoCedenteBanco = 0 ;
   this.Z1816BoletoCedenteBanco = 0 ;
   this.O1816BoletoCedenteBanco = 0 ;
   this.A1817BoletoCedenteAgencia = 0 ;
   this.Z1817BoletoCedenteAgencia = 0 ;
   this.O1817BoletoCedenteAgencia = 0 ;
   this.A1821BoletoNumero = 0 ;
   this.Z1821BoletoNumero = 0 ;
   this.O1821BoletoNumero = 0 ;
   this.A1822BoletoDigito = "" ;
   this.Z1822BoletoDigito = "" ;
   this.O1822BoletoDigito = "" ;
   this.A1823BoletoValor = 0 ;
   this.Z1823BoletoValor = 0 ;
   this.O1823BoletoValor = 0 ;
   this.A1824BoletoTextoSacado = "" ;
   this.Z1824BoletoTextoSacado = "" ;
   this.O1824BoletoTextoSacado = "" ;
   this.A1825BoletoTextoFichaComp = "" ;
   this.Z1825BoletoTextoFichaComp = "" ;
   this.O1825BoletoTextoFichaComp = "" ;
   this.A1826BoletoMensagemCabec = "" ;
   this.Z1826BoletoMensagemCabec = "" ;
   this.O1826BoletoMensagemCabec = "" ;
   this.A1827BoletoCodigoBarras = "" ;
   this.Z1827BoletoCodigoBarras = "" ;
   this.O1827BoletoCodigoBarras = "" ;
   this.A1828BoletoLinhaDigitavel = "" ;
   this.Z1828BoletoLinhaDigitavel = "" ;
   this.O1828BoletoLinhaDigitavel = "" ;
   this.A1829BoletoDataProcessamento = gx.date.nullDate() ;
   this.Z1829BoletoDataProcessamento = gx.date.nullDate() ;
   this.O1829BoletoDataProcessamento = gx.date.nullDate() ;
   this.A1830BoletoDataEmissao = gx.date.nullDate() ;
   this.Z1830BoletoDataEmissao = gx.date.nullDate() ;
   this.O1830BoletoDataEmissao = gx.date.nullDate() ;
   this.A1831BoletoDataVencimento = gx.date.nullDate() ;
   this.Z1831BoletoDataVencimento = gx.date.nullDate() ;
   this.O1831BoletoDataVencimento = gx.date.nullDate() ;
   this.A1832BoletoNomeSacado = "" ;
   this.Z1832BoletoNomeSacado = "" ;
   this.O1832BoletoNomeSacado = "" ;
   this.A1833BoletoEnderecoSacado = "" ;
   this.Z1833BoletoEnderecoSacado = "" ;
   this.O1833BoletoEnderecoSacado = "" ;
   this.A1834BoletoBairroSacado = "" ;
   this.Z1834BoletoBairroSacado = "" ;
   this.O1834BoletoBairroSacado = "" ;
   this.A1835BoletoCepSacado = "" ;
   this.Z1835BoletoCepSacado = "" ;
   this.O1835BoletoCepSacado = "" ;
   this.A1836BoletoCNPJCPFSacado = "" ;
   this.Z1836BoletoCNPJCPFSacado = "" ;
   this.O1836BoletoCNPJCPFSacado = "" ;
   this.A1837BoletoCidadeSacado = "" ;
   this.Z1837BoletoCidadeSacado = "" ;
   this.O1837BoletoCidadeSacado = "" ;
   this.A1838BoletoDocumento = "" ;
   this.Z1838BoletoDocumento = "" ;
   this.O1838BoletoDocumento = "" ;
   this.A1839BoletoAceite = "" ;
   this.Z1839BoletoAceite = "" ;
   this.O1839BoletoAceite = "" ;
   this.A1840BoletoEspecieDocumento = "" ;
   this.Z1840BoletoEspecieDocumento = "" ;
   this.O1840BoletoEspecieDocumento = "" ;
   this.A1841BoletoUsoBanco = "" ;
   this.Z1841BoletoUsoBanco = "" ;
   this.O1841BoletoUsoBanco = "" ;
   this.A1842BoletoMoeda = "" ;
   this.Z1842BoletoMoeda = "" ;
   this.O1842BoletoMoeda = "" ;
   this.A1843BoletoBancoImpressao = "" ;
   this.Z1843BoletoBancoImpressao = "" ;
   this.O1843BoletoBancoImpressao = "" ;
   this.A1844BoletoLocalPagamento = "" ;
   this.Z1844BoletoLocalPagamento = "" ;
   this.O1844BoletoLocalPagamento = "" ;
   this.A1845BoletoAgenciaCedenteImpressao = "" ;
   this.Z1845BoletoAgenciaCedenteImpressao = "" ;
   this.O1845BoletoAgenciaCedenteImpressao = "" ;
   this.A1846BoletoValorJuros = 0 ;
   this.Z1846BoletoValorJuros = 0 ;
   this.O1846BoletoValorJuros = 0 ;
   this.A1847BoletoValorMulta = 0 ;
   this.Z1847BoletoValorMulta = 0 ;
   this.O1847BoletoValorMulta = 0 ;
   this.A1848BoletoValorTarifa = 0 ;
   this.Z1848BoletoValorTarifa = 0 ;
   this.O1848BoletoValorTarifa = 0 ;
   this.A1849BoletoNomeCedente = "" ;
   this.Z1849BoletoNomeCedente = "" ;
   this.O1849BoletoNomeCedente = "" ;
   this.A1850BoletoUsuarioAlt = "" ;
   this.Z1850BoletoUsuarioAlt = "" ;
   this.O1850BoletoUsuarioAlt = "" ;
   this.A1851BoletoDataHoraAlt = gx.date.nullDate() ;
   this.Z1851BoletoDataHoraAlt = gx.date.nullDate() ;
   this.O1851BoletoDataHoraAlt = gx.date.nullDate() ;
   this.AV7Logon = {} ;
   this.A1819BoletoEmpresaId = "" ;
   this.A1820BoletoId = 0 ;
   this.A1815BoletoCedenteEmpId = "" ;
   this.A1816BoletoCedenteBanco = 0 ;
   this.A2316BoletoCedenteBancoNome = "" ;
   this.A1817BoletoCedenteAgencia = 0 ;
   this.A2317BoletoCedenteAgenciaNome = "" ;
   this.A2853BoletoCedenteSequencia = 0 ;
   this.A2863BoletoCedenteImgBanco = "" ;
   this.A6486BoletoCedenteImgEmpresa = "" ;
   this.A11181BoletoCedenteModelo = "" ;
   this.A1821BoletoNumero = 0 ;
   this.A2864BoletoNumeroImp = "" ;
   this.A1822BoletoDigito = "" ;
   this.A1823BoletoValor = 0 ;
   this.A10385BoletoValorOriginal = 0 ;
   this.A1824BoletoTextoSacado = "" ;
   this.A1825BoletoTextoFichaComp = "" ;
   this.A1826BoletoMensagemCabec = "" ;
   this.A1827BoletoCodigoBarras = "" ;
   this.A1828BoletoLinhaDigitavel = "" ;
   this.A1829BoletoDataProcessamento = gx.date.nullDate() ;
   this.A1830BoletoDataEmissao = gx.date.nullDate() ;
   this.A1831BoletoDataVencimento = gx.date.nullDate() ;
   this.A10386BoletoDataVencimentoOri = gx.date.nullDate() ;
   this.A2861BoletoSacadoEmpId = "" ;
   this.A2862BoletoSacadoId = 0 ;
   this.A1832BoletoNomeSacado = "" ;
   this.A2906BoletoTipoSacado = "" ;
   this.A1833BoletoEnderecoSacado = "" ;
   this.A1834BoletoBairroSacado = "" ;
   this.A1835BoletoCepSacado = "" ;
   this.A2904BoletoUFSacado = "" ;
   this.A1836BoletoCNPJCPFSacado = "" ;
   this.A1837BoletoCidadeSacado = "" ;
   this.A1838BoletoDocumento = "" ;
   this.A1839BoletoAceite = "" ;
   this.A2865BoletoCarteira = "" ;
   this.A1840BoletoEspecieDocumento = "" ;
   this.A1841BoletoUsoBanco = "" ;
   this.A1842BoletoMoeda = "" ;
   this.A1843BoletoBancoImpressao = "" ;
   this.A1844BoletoLocalPagamento = "" ;
   this.A1845BoletoAgenciaCedenteImpressao = "" ;
   this.A1846BoletoValorJuros = 0 ;
   this.A2907BoletoDataJuros = gx.date.nullDate() ;
   this.A2908BoletoValorDesconto = 0 ;
   this.A10353BoletoValorDesconto2 = 0 ;
   this.A10354BoletoValorDesconto3 = 0 ;
   this.A2909BoletoDataDesconto = gx.date.nullDate() ;
   this.A10349BoletoDataDesconto2 = gx.date.nullDate() ;
   this.A10350BoletoDataDesconto3 = gx.date.nullDate() ;
   this.A1847BoletoValorMulta = 0 ;
   this.A1848BoletoValorTarifa = 0 ;
   this.A1849BoletoNomeCedente = "" ;
   this.A10359BoletoSnAlterouValor = "" ;
   this.A10360BoletoSnAlterouVencimento = "" ;
   this.A1850BoletoUsuarioAlt = "" ;
   this.A1851BoletoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e123i189_client": ["ENTER", true] ,"e133i189_client": ["CANCEL", true] ,"e113i189_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_1815_1816", [25,30]);
   this.setPrompt("PROMPT_1817", [39]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A2864BoletoNumeroImp", "BOLETONUMEROIMP", 0, "svchar");
   this.setVCMap("A10385BoletoValorOriginal", "BOLETOVALORORIGINAL", 0, "decimal");
   this.setVCMap("A10386BoletoDataVencimentoOri", "BOLETODATAVENCIMENTOORI", 0, "date");
   this.setVCMap("A2861BoletoSacadoEmpId", "BOLETOSACADOEMPID", 0, "char");
   this.setVCMap("A2862BoletoSacadoId", "BOLETOSACADOID", 0, "int");
   this.setVCMap("A2906BoletoTipoSacado", "BOLETOTIPOSACADO", 0, "char");
   this.setVCMap("A2904BoletoUFSacado", "BOLETOUFSACADO", 0, "char");
   this.setVCMap("A2865BoletoCarteira", "BOLETOCARTEIRA", 0, "char");
   this.setVCMap("A2907BoletoDataJuros", "BOLETODATAJUROS", 0, "date");
   this.setVCMap("A2908BoletoValorDesconto", "BOLETOVALORDESCONTO", 0, "decimal");
   this.setVCMap("A10353BoletoValorDesconto2", "BOLETOVALORDESCONTO2", 0, "decimal");
   this.setVCMap("A10354BoletoValorDesconto3", "BOLETOVALORDESCONTO3", 0, "decimal");
   this.setVCMap("A2909BoletoDataDesconto", "BOLETODATADESCONTO", 0, "date");
   this.setVCMap("A10349BoletoDataDesconto2", "BOLETODATADESCONTO2", 0, "date");
   this.setVCMap("A10350BoletoDataDesconto3", "BOLETODATADESCONTO3", 0, "date");
   this.setVCMap("A10359BoletoSnAlterouValor", "BOLETOSNALTEROUVALOR", 0, "char");
   this.setVCMap("A10360BoletoSnAlterouVencimento", "BOLETOSNALTEROUVENCIMENTO", 0, "char");
   this.setVCMap("A2853BoletoCedenteSequencia", "BOLETOCEDENTESEQUENCIA", 0, "int");
   this.setVCMap("A2316BoletoCedenteBancoNome", "BOLETOCEDENTEBANCONOME", 0, "svchar");
   this.setVCMap("A2317BoletoCedenteAgenciaNome", "BOLETOCEDENTEAGENCIANOME", 0, "svchar");
   this.setVCMap("A2863BoletoCedenteImgBanco", "BOLETOCEDENTEIMGBANCO", 0, "svchar");
   this.setVCMap("A6486BoletoCedenteImgEmpresa", "BOLETOCEDENTEIMGEMPRESA", 0, "svchar");
   this.setVCMap("A11181BoletoCedenteModelo", "BOLETOCEDENTEMODELO", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tboleto());
