/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:46:9.97
*/
gx.evt.autoSkip = false;
gx.define('hmodalcontasemaberto', false, function () {
   this.ServerClass =  "hmodalcontasemaberto" ;
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
      this.AV31ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
   };
   this.e141gb2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hboxcontaobservacao",[this.AV31ContaPagRecEmpresaId, this.AV23NumeroConta, "R"]), []);
      this.refreshOutputs([]);
   };
   this.e111gb2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151gb2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e161gb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,24,26,31,33,34,35,36,37,38,39,40];
   this.GXLastCtrlId =40;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",32,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodalcontasemaberto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Numeroconta",33,"vNUMEROCONTA","Nº Conta","","NumeroConta","int",0,"px",8,8,"right",null,[],"Numeroconta","NumeroConta",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Numerodocmto",34,"vNUMERODOCMTO","Documento","","NumeroDocmto","svchar",0,"px",25,25,"left",null,[],"Numerodocmto","NumeroDocmto",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tipocobrancadesc",35,"vTIPOCOBRANCADESC","Tipo de Cobrança","","TipoCobrancaDesc","svchar",0,"px",25,25,"left",null,[],"Tipocobrancadesc","TipoCobrancaDesc",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Dtemissao",36,"vDTEMISSAO","Dt.Emissão","","DtEmissao","date",0,"px",10,10,"right",null,[],"Dtemissao","DtEmissao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Dtvencimento",37,"vDTVENCIMENTO","Dt.Vencimento","","DtVencimento","date",0,"px",10,10,"right",null,[],"Dtvencimento","DtVencimento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Valor",38,"vVALOR","Valor","","Valor","decimal",0,"px",22,22,"right",null,[],"Valor","Valor",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpobs","vBMPOBS",39,0,"px",17,"px","e141gb2_client","","Obs","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABHAVER",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV14PessoaId",gxold:"OV14PessoaId",gxvar:"AV14PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV14PessoaId,0)},c2v:function(){gx.O.AV14PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV15PessoaFantasia",gxold:"OV15PessoaFantasia",gxvar:"AV15PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PessoaFantasia=Value},v2z:function(Value){gx.O.ZV15PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV15PessoaFantasia,0)},c2v:function(){gx.O.AV15PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECONTAS",gxz:"ZV29QtdeContas",gxold:"OV29QtdeContas",gxvar:"AV29QtdeContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29QtdeContas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29QtdeContas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECONTAS",gx.O.AV29QtdeContas,0)},c2v:function(){gx.O.AV29QtdeContas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECONTAS",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTVLRTOTSAIDA", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALOREMABERTO",gxz:"ZV28ValorEmAberto",gxold:"OV28ValorEmAberto",gxvar:"AV28ValorEmAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ValorEmAberto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV28ValorEmAberto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALOREMABERTO",gx.O.AV28ValorEmAberto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28ValorEmAberto=this.val()},val:function(){return gx.fn.getDecimalValue("vVALOREMABERTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[31]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[33]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNUMEROCONTA",gxz:"ZV23NumeroConta",gxold:"OV23NumeroConta",gxvar:"AV23NumeroConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23NumeroConta=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23NumeroConta=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNUMEROCONTA",row || gx.fn.currentGridRowImpl(32),gx.O.AV23NumeroConta,0)},c2v:function(){gx.O.AV23NumeroConta=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNUMEROCONTA",row || gx.fn.currentGridRowImpl(32),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNUMERODOCMTO",gxz:"ZV22NumeroDocmto",gxold:"OV22NumeroDocmto",gxvar:"AV22NumeroDocmto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV22NumeroDocmto=Value},v2z:function(Value){gx.O.ZV22NumeroDocmto=Value},v2c:function(row){gx.fn.setGridControlValue("vNUMERODOCMTO",row || gx.fn.currentGridRowImpl(32),gx.O.AV22NumeroDocmto,0)},c2v:function(){gx.O.AV22NumeroDocmto=this.val()},val:function(row){return gx.fn.getGridControlValue("vNUMERODOCMTO",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCADESC",gxz:"ZV24TipoCobrancaDesc",gxold:"OV24TipoCobrancaDesc",gxvar:"AV24TipoCobrancaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV24TipoCobrancaDesc=Value},v2z:function(Value){gx.O.ZV24TipoCobrancaDesc=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOCOBRANCADESC",row || gx.fn.currentGridRowImpl(32),gx.O.AV24TipoCobrancaDesc,0)},c2v:function(){gx.O.AV24TipoCobrancaDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOCOBRANCADESC",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDTEMISSAO",gxz:"ZV25DtEmissao",gxold:"OV25DtEmissao",gxvar:"AV25DtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25DtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vDTEMISSAO",row || gx.fn.currentGridRowImpl(32),gx.O.AV25DtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vDTEMISSAO",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDTVENCIMENTO",gxz:"ZV26DtVencimento",gxold:"OV26DtVencimento",gxvar:"AV26DtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26DtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vDTVENCIMENTO",row || gx.fn.currentGridRowImpl(32),gx.O.AV26DtVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vDTVENCIMENTO",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALOR",gxz:"ZV27Valor",gxold:"OV27Valor",gxvar:"AV27Valor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27Valor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV27Valor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALOR",row || gx.fn.currentGridRowImpl(32),gx.O.AV27Valor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27Valor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALOR",row || gx.fn.currentGridRowImpl(32),'.',',')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOBS",gxz:"ZV30BmpObs",gxold:"OV30BmpObs",gxvar:"AV30BmpObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30BmpObs=Value},v2z:function(Value){gx.O.ZV30BmpObs=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOBS",row || gx.fn.currentGridRowImpl(32),gx.O.AV30BmpObs,gx.O.AV36Bmpobs_GXI)},c2v:function(){gx.O.AV36Bmpobs_GXI=this.val_GXI();gx.O.AV30BmpObs=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOBS",row || gx.fn.currentGridRowImpl(32))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOBS_GXI",row || gx.fn.currentGridRowImpl(32))}, gxvar_GXI:'AV36Bmpobs_GXI',nac:gx.falseFn};
   GXValidFnc[40]={fld:"DIV2", format:2,grid:0};
   this.AV14PessoaId = 0 ;
   this.ZV14PessoaId = 0 ;
   this.OV14PessoaId = 0 ;
   this.AV15PessoaFantasia = "" ;
   this.ZV15PessoaFantasia = "" ;
   this.OV15PessoaFantasia = "" ;
   this.AV29QtdeContas = 0 ;
   this.ZV29QtdeContas = 0 ;
   this.OV29QtdeContas = 0 ;
   this.AV28ValorEmAberto = 0 ;
   this.ZV28ValorEmAberto = 0 ;
   this.OV28ValorEmAberto = 0 ;
   this.ZV23NumeroConta = 0 ;
   this.OV23NumeroConta = 0 ;
   this.ZV22NumeroDocmto = "" ;
   this.OV22NumeroDocmto = "" ;
   this.ZV24TipoCobrancaDesc = "" ;
   this.OV24TipoCobrancaDesc = "" ;
   this.ZV25DtEmissao = gx.date.nullDate() ;
   this.OV25DtEmissao = gx.date.nullDate() ;
   this.ZV26DtVencimento = gx.date.nullDate() ;
   this.OV26DtVencimento = gx.date.nullDate() ;
   this.ZV27Valor = 0 ;
   this.OV27Valor = 0 ;
   this.ZV30BmpObs = "" ;
   this.OV30BmpObs = "" ;
   this.AV14PessoaId = 0 ;
   this.AV15PessoaFantasia = "" ;
   this.AV29QtdeContas = 0 ;
   this.AV28ValorEmAberto = 0 ;
   this.AV23NumeroConta = 0 ;
   this.AV22NumeroDocmto = "" ;
   this.AV24TipoCobrancaDesc = "" ;
   this.AV25DtEmissao = gx.date.nullDate() ;
   this.AV26DtVencimento = gx.date.nullDate() ;
   this.AV27Valor = 0 ;
   this.AV30BmpObs = "" ;
   this.AV31ContaPagRecEmpresaId = "" ;
   this.Events = {"e111gb2_client": ["'FECHAR'", true] ,"e151gb2_client": ["ENTER", true] ,"e161gb2_client": ["CANCEL", true] ,"e141gb2_client": ["'OBSERVACAOCONTA'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV30BmpObs',fld:'vBMPOBS'},{av:'gx.fn.getCtrlProperty("vBMPOBS","Tooltiptext")',ctrl:'vBMPOBS',prop:'Tooltiptext'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true}],[{av:'AV19SdtCli',fld:'vSDTCLI'},{av:'AV37GXV1',fld:'vGXV1'},{av:'AV21sdtCliItem',fld:'vSDTCLIITEM'},{av:'AV15PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV29QtdeContas',fld:'vQTDECONTAS'},{av:'AV28ValorEmAberto',fld:'vVALOREMABERTO'},{av:'AV38GXV2',fld:'vGXV2'},{av:'AV20SdtContasItem',fld:'vSDTCONTASITEM'},{av:'AV23NumeroConta',fld:'vNUMEROCONTA'},{av:'AV22NumeroDocmto',fld:'vNUMERODOCMTO'},{av:'AV24TipoCobrancaDesc',fld:'vTIPOCOBRANCADESC'},{av:'AV25DtEmissao',fld:'vDTEMISSAO'},{av:'AV26DtVencimento',fld:'vDTVENCIMENTO'},{av:'AV27Valor',fld:'vVALOR'}]];
   this.EvtParms["'OBSERVACAOCONTA'"] = [[{av:'AV31ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV23NumeroConta',fld:'vNUMEROCONTA'}],[]];
   this.setVCMap("AV31ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV30BmpObs", rfrProp:"Value", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar({rfrVar:"AV30BmpObs", rfrProp:"Tooltiptext", gxAttId:"Bmpobs"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalcontasemaberto());
