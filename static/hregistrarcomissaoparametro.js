/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:41:45.31
*/
gx.evt.autoSkip = false;
gx.define('hregistrarcomissaoparametro', false, function () {
   this.ServerClass =  "hregistrarcomissaoparametro" ;
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
      this.AV19EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.e191fc1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms5",[this.AV19EmpresaLogadaId, "EST", "TPPAGTOCOMISSAO", "TPERCCOMISSAO", "TPPERCCOMGER", "SNPERCOMPRODUTO", "SNSUBDEVCOMISS"]), []);
      this.refreshOutputs([]);
   };
   this.e201fc1_client=function()
   {
      this.clearMessages();
      this.s132_client();
      this.refreshOutputs([{av:'AV28ConsiderarTaxas',fld:'vCONSIDERARTAXAS'},{av:'AV29DesconsiderarOS',fld:'vDESCONSIDERAROS'},{av:'gx.fn.getCtrlProperty("vCONSIDERARTAXAS","Enabled")',ctrl:'vCONSIDERARTAXAS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDESCONSIDERAROS","Enabled")',ctrl:'vDESCONSIDERAROS',prop:'Enabled'}]);
   };
   this.s132_client=function()
   {
      if ( this.AV13PercentualVendedor == 2 || this.AV13PercentualVendedor == 3 )
      {
         gx.fn.setCtrlProperty("vCONSIDERARTAXAS","Enabled", 1 );
         gx.fn.setCtrlProperty("vDESCONSIDERAROS","Enabled", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("vCONSIDERARTAXAS","Enabled", 0 );
         gx.fn.setCtrlProperty("vDESCONSIDERAROS","Enabled", 0 );
         this.AV28ConsiderarTaxas =  false  ;
         this.AV29DesconsiderarOS =  false  ;
      }
   };
   this.e121fc2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131fc2_client=function()
   {
      this.executeServerEvent("'PERCENTUAISVENDEDORES'", false, null, false, false);
   };
   this.e141fc2_client=function()
   {
      this.executeServerEvent("'PERCENTUALGERENTE'", false, null, false, false);
   };
   this.e151fc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e161fc2_client=function()
   {
      this.executeServerEvent("'TAXAS'", false, null, false, false);
   };
   this.e211fc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,21,23,25,28,31,34,38,46,50,55,59,62,65,77];
   this.GXLastCtrlId =77;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TABLE5",grid:0};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMACOMISSAO",gxz:"ZV17FormaComissao",gxold:"OV17FormaComissao",gxvar:"AV17FormaComissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17FormaComissao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17FormaComissao=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vFORMACOMISSAO",gx.O.AV17FormaComissao)},c2v:function(){gx.O.AV17FormaComissao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORMACOMISSAO",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TABLE6",grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCOMISSAOPRODUTO",gxz:"ZV15SnComissaoProduto",gxold:"OV15SnComissaoProduto",gxvar:"AV15SnComissaoProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15SnComissaoProduto=Value},v2z:function(Value){gx.O.ZV15SnComissaoProduto=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCOMISSAOPRODUTO",gx.O.AV15SnComissaoProduto,"S")},c2v:function(){gx.O.AV15SnComissaoProduto=this.val()},val:function(){return gx.fn.getControlValue("vSNCOMISSAOPRODUTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSUBTRAIRDEVOLUCOES",gxz:"ZV16SnSubtrairDevolucoes",gxold:"OV16SnSubtrairDevolucoes",gxvar:"AV16SnSubtrairDevolucoes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16SnSubtrairDevolucoes=Value},v2z:function(Value){gx.O.ZV16SnSubtrairDevolucoes=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSUBTRAIRDEVOLUCOES",gx.O.AV16SnSubtrairDevolucoes,"S")},c2v:function(){gx.O.AV16SnSubtrairDevolucoes=this.val()},val:function(){return gx.fn.getControlValue("vSNSUBTRAIRDEVOLUCOES")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[34]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e201fc1_client',rgrid:[],fld:"vPERCENTUALVENDEDOR",gxz:"ZV13PercentualVendedor",gxold:"OV13PercentualVendedor",gxvar:"AV13PercentualVendedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV13PercentualVendedor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13PercentualVendedor=gx.num.intval(Value)},v2c:function(){gx.fn.setRadioValue("vPERCENTUALVENDEDOR",gx.O.AV13PercentualVendedor)},c2v:function(){gx.O.AV13PercentualVendedor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPERCENTUALVENDEDOR",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERCENTUALGERENTE",gxz:"ZV14PercentualGerente",gxold:"OV14PercentualGerente",gxvar:"AV14PercentualGerente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV14PercentualGerente=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PercentualGerente=gx.num.intval(Value)},v2c:function(){gx.fn.setRadioValue("vPERCENTUALGERENTE",gx.O.AV14PercentualGerente)},c2v:function(){gx.O.AV14PercentualGerente=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPERCENTUALGERENTE",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[59]={fld:"TABLE8",grid:0};
   GXValidFnc[62]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONSIDERARTAXAS",gxz:"ZV28ConsiderarTaxas",gxold:"OV28ConsiderarTaxas",gxvar:"AV28ConsiderarTaxas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV28ConsiderarTaxas=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV28ConsiderarTaxas=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCONSIDERARTAXAS",gx.O.AV28ConsiderarTaxas,true)},c2v:function(){gx.O.AV28ConsiderarTaxas=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCONSIDERARTAXAS")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[65]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCONSIDERAROS",gxz:"ZV29DesconsiderarOS",gxold:"OV29DesconsiderarOS",gxvar:"AV29DesconsiderarOS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV29DesconsiderarOS=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV29DesconsiderarOS=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vDESCONSIDERAROS",gx.O.AV29DesconsiderarOS,true)},c2v:function(){gx.O.AV29DesconsiderarOS=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vDESCONSIDERAROS")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[77]={fld:"BTNOBS",grid:0};
   this.AV17FormaComissao = 0 ;
   this.ZV17FormaComissao = 0 ;
   this.OV17FormaComissao = 0 ;
   this.AV15SnComissaoProduto = "" ;
   this.ZV15SnComissaoProduto = "" ;
   this.OV15SnComissaoProduto = "" ;
   this.AV16SnSubtrairDevolucoes = "" ;
   this.ZV16SnSubtrairDevolucoes = "" ;
   this.OV16SnSubtrairDevolucoes = "" ;
   this.AV13PercentualVendedor = 0 ;
   this.ZV13PercentualVendedor = 0 ;
   this.OV13PercentualVendedor = 0 ;
   this.AV14PercentualGerente = 0 ;
   this.ZV14PercentualGerente = 0 ;
   this.OV14PercentualGerente = 0 ;
   this.AV28ConsiderarTaxas = false ;
   this.ZV28ConsiderarTaxas = false ;
   this.OV28ConsiderarTaxas = false ;
   this.AV29DesconsiderarOS = false ;
   this.ZV29DesconsiderarOS = false ;
   this.OV29DesconsiderarOS = false ;
   this.AV17FormaComissao = 0 ;
   this.AV15SnComissaoProduto = "" ;
   this.AV16SnSubtrairDevolucoes = "" ;
   this.AV13PercentualVendedor = 0 ;
   this.AV14PercentualGerente = 0 ;
   this.AV28ConsiderarTaxas = false ;
   this.AV29DesconsiderarOS = false ;
   this.A6476TransacaoSaidaSNDiversosVend = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.AV19EmpresaLogadaId = "" ;
   this.Events = {"e121fc2_client": ["ENTER", true] ,"e131fc2_client": ["'PERCENTUAISVENDEDORES'", true] ,"e141fc2_client": ["'PERCENTUALGERENTE'", true] ,"e151fc2_client": ["'FECHAR'", true] ,"e161fc2_client": ["'TAXAS'", true] ,"e211fc2_client": ["CANCEL", true] ,"e191fc1_client": ["'OBSERVACAO'", false] ,"e201fc1_client": ["VPERCENTUALVENDEDOR.ISVALID", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV13PercentualVendedor',fld:'vPERCENTUALVENDEDOR'}],[{av:'AV28ConsiderarTaxas',fld:'vCONSIDERARTAXAS'},{av:'AV29DesconsiderarOS',fld:'vDESCONSIDERAROS'},{av:'gx.fn.getCtrlProperty("vCONSIDERARTAXAS","Enabled")',ctrl:'vCONSIDERARTAXAS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDESCONSIDERAROS","Enabled")',ctrl:'vDESCONSIDERAROS',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV19EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV28ConsiderarTaxas',fld:'vCONSIDERARTAXAS'},{av:'AV29DesconsiderarOS',fld:'vDESCONSIDERAROS'},{av:'AV25SNErro',fld:'vSNERRO'},{av:'AV17FormaComissao',fld:'vFORMACOMISSAO'},{av:'AV13PercentualVendedor',fld:'vPERCENTUALVENDEDOR'},{av:'AV14PercentualGerente',fld:'vPERCENTUALGERENTE'},{av:'AV15SnComissaoProduto',fld:'vSNCOMISSAOPRODUTO'},{av:'AV16SnSubtrairDevolucoes',fld:'vSNSUBTRAIRDEVOLUCOES'},{av:'AV27ComissaoVendedorEmpresaId',fld:'vCOMISSAOVENDEDOREMPRESAID'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'AV26TransacaoSaidaEmpresaId',fld:'vTRANSACAOSAIDAEMPRESAID'},{av:'A6476TransacaoSaidaSNDiversosVend',fld:'TRANSACAOSAIDASNDIVERSOSVEND'}],[{av:'AV28ConsiderarTaxas',fld:'vCONSIDERARTAXAS'},{av:'AV19EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV29DesconsiderarOS',fld:'vDESCONSIDERAROS'},{av:'AV24SNDiversosVendedores',fld:'vSNDIVERSOSVENDEDORES'},{av:'AV25SNErro',fld:'vSNERRO'}]];
   this.EvtParms["'PERCENTUAISVENDEDORES'"] = [[{av:'AV13PercentualVendedor',fld:'vPERCENTUALVENDEDOR'}],[]];
   this.EvtParms["'PERCENTUALGERENTE'"] = [[{av:'AV14PercentualGerente',fld:'vPERCENTUALGERENTE'}],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV19EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV29DesconsiderarOS',fld:'vDESCONSIDERAROS'},{av:'AV28ConsiderarTaxas',fld:'vCONSIDERARTAXAS'}],[]];
   this.EvtParms["'TAXAS'"] = [[],[]];
   this.EvtParms["VPERCENTUALVENDEDOR.ISVALID"] = [[{av:'AV13PercentualVendedor',fld:'vPERCENTUALVENDEDOR'}],[{av:'AV28ConsiderarTaxas',fld:'vCONSIDERARTAXAS'},{av:'AV29DesconsiderarOS',fld:'vDESCONSIDERAROS'},{av:'gx.fn.getCtrlProperty("vCONSIDERARTAXAS","Enabled")',ctrl:'vCONSIDERARTAXAS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDESCONSIDERAROS","Enabled")',ctrl:'vDESCONSIDERAROS',prop:'Enabled'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarcomissaoparametro());
