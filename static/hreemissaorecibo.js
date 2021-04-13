/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:17:26.51
*/
gx.evt.autoSkip = false;
gx.define('hreemissaorecibo', false, function () {
   this.ServerClass =  "hreemissaorecibo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("3", "'CANCELAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV29SdtRecibo=gx.fn.getControlValue("vSDTRECIBO") ;
      this.AV60ContaPagRecPagRec=gx.fn.getControlValue("vCONTAPAGRECPAGREC") ;
   };
   this.e11cn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15cn2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", true, arguments[0], false, false);
   };
   this.e16cn2_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", true, arguments[0], false, false);
   };
   this.e12cn2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e19cn2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, arguments[0], false, false);
   };
   this.e20cn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,13,15,18,20,22,30,32,33,34,35,36,37,38,39,40,46,51,52,54,55,56];
   this.GXLastCtrlId =56;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hreemissaorecibo",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Numerorecibo",32,"vNUMERORECIBO","Nº Recibo","","NumeroRecibo","int",0,"px",6,6,"right",null,[],"Numerorecibo","NumeroRecibo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Dataconta",33,"vDATACONTA","Data Conta","","DataConta","date",0,"px",10,10,"right",null,[],"Dataconta","DataConta",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Cliforempid",34,"vCLIFOREMPID","Empresa","","CliForEmpId","char",0,"px",10,10,"left",null,[],"Cliforempid","CliForEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Cliforid",35,"vCLIFORID","Código","","CliForId","int",0,"px",7,7,"right",null,[],"Cliforid","CliForId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Clifornome",36,"vCLIFORNOME","Nome Cliente/Fornecedor","","CliForNome","svchar",0,"px",100,80,"left",null,[],"Clifornome","CliForNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Quantidade",37,"vQUANTIDADE","Quantidade","","Quantidade","int",0,"px",4,4,"right",null,[],"Quantidade","Quantidade",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Valorrecibo",38,"vVALORRECIBO","Valor","","ValorRecibo","decimal",0,"px",22,22,"right",null,[],"Valorrecibo","ValorRecibo",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpimp","vBMPIMP",39,0,"px",17,"px","e19cn2_client","","","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV15PessoaId",gxold:"OV15PessoaId",gxvar:"AV15PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV15PessoaId,0)},c2v:function(){gx.O.AV15PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV18PessoaFantasia",gxold:"OV18PessoaFantasia",gxvar:"AV18PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PessoaFantasia=Value},v2z:function(Value){gx.O.ZV18PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV18PessoaFantasia,0)},c2v:function(){gx.O.AV18PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV16DataIni",gxold:"OV16DataIni",gxvar:"AV16DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV16DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV16DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 18 , function() {
   });
   GXValidFnc[20]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIN",gxz:"ZV17DataFin",gxold:"OV17DataFin",gxvar:"AV17DataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17DataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV17DataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIN",gx.O.AV17DataFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17DataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[30]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[32]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNUMERORECIBO",gxz:"ZV35NumeroRecibo",gxold:"OV35NumeroRecibo",gxvar:"AV35NumeroRecibo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35NumeroRecibo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35NumeroRecibo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNUMERORECIBO",row || gx.fn.currentGridRowImpl(31),gx.O.AV35NumeroRecibo,0)},c2v:function(){gx.O.AV35NumeroRecibo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNUMERORECIBO",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDATACONTA",gxz:"ZV40DataConta",gxold:"OV40DataConta",gxvar:"AV40DataConta",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV40DataConta=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV40DataConta=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vDATACONTA",row || gx.fn.currentGridRowImpl(31),gx.O.AV40DataConta,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV40DataConta=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vDATACONTA",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCLIFOREMPID",gxz:"ZV36CliForEmpId",gxold:"OV36CliForEmpId",gxvar:"AV36CliForEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV36CliForEmpId=Value},v2z:function(Value){gx.O.ZV36CliForEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("vCLIFOREMPID",row || gx.fn.currentGridRowImpl(31),gx.O.AV36CliForEmpId,0)},c2v:function(){gx.O.AV36CliForEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLIFOREMPID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCLIFORID",gxz:"ZV37CliForId",gxold:"OV37CliForId",gxvar:"AV37CliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV37CliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37CliForId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCLIFORID",row || gx.fn.currentGridRowImpl(31),gx.O.AV37CliForId,0)},c2v:function(){gx.O.AV37CliForId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCLIFORID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCLIFORNOME",gxz:"ZV38CliForNome",gxold:"OV38CliForNome",gxvar:"AV38CliForNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV38CliForNome=Value},v2z:function(Value){gx.O.ZV38CliForNome=Value},v2c:function(row){gx.fn.setGridControlValue("vCLIFORNOME",row || gx.fn.currentGridRowImpl(31),gx.O.AV38CliForNome,0)},c2v:function(){gx.O.AV38CliForNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLIFORNOME",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vQUANTIDADE",gxz:"ZV39Quantidade",gxold:"OV39Quantidade",gxvar:"AV39Quantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV39Quantidade=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39Quantidade=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vQUANTIDADE",row || gx.fn.currentGridRowImpl(31),gx.O.AV39Quantidade,0)},c2v:function(){gx.O.AV39Quantidade=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vQUANTIDADE",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALORRECIBO",gxz:"ZV27ValorRecibo",gxold:"OV27ValorRecibo",gxvar:"AV27ValorRecibo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27ValorRecibo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV27ValorRecibo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORRECIBO",row || gx.fn.currentGridRowImpl(31),gx.O.AV27ValorRecibo,2,',')},c2v:function(){gx.O.AV27ValorRecibo=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORRECIBO",row || gx.fn.currentGridRowImpl(31),'.',',')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMP",gxz:"ZV41BmpImp",gxold:"OV41BmpImp",gxvar:"AV41BmpImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV41BmpImp=Value},v2z:function(Value){gx.O.ZV41BmpImp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMP",row || gx.fn.currentGridRowImpl(31),gx.O.AV41BmpImp,gx.O.AV65Bmpimp_GXI)},c2v:function(){gx.O.AV65Bmpimp_GXI=this.val_GXI();gx.O.AV41BmpImp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMP",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMP_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV65Bmpimp_GXI',nac:gx.falseFn};
   GXValidFnc[40]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[46]={fld:"TABLE6",grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPTELA",gxz:"ZV31TpTela",gxold:"OV31TpTela",gxvar:"AV31TpTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TpTela=Value},v2z:function(Value){gx.O.ZV31TpTela=Value},v2c:function(){gx.fn.setControlValue("vTPTELA",gx.O.AV31TpTela,0)},c2v:function(){gx.O.AV31TpTela=this.val()},val:function(){return gx.fn.getControlValue("vTPTELA")},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMPID",gxz:"ZV22PessoaEmpId",gxold:"OV22PessoaEmpId",gxvar:"AV22PessoaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PessoaEmpId=Value},v2z:function(Value){gx.O.ZV22PessoaEmpId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPID",gx.O.AV22PessoaEmpId,0)},c2v:function(){gx.O.AV22PessoaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPID")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"BTNHELP",grid:0};
   GXValidFnc[55]={fld:"JS", format:2,grid:0};
   GXValidFnc[56]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV15PessoaId = 0 ;
   this.ZV15PessoaId = 0 ;
   this.OV15PessoaId = 0 ;
   this.AV18PessoaFantasia = "" ;
   this.ZV18PessoaFantasia = "" ;
   this.OV18PessoaFantasia = "" ;
   this.AV16DataIni = gx.date.nullDate() ;
   this.ZV16DataIni = gx.date.nullDate() ;
   this.OV16DataIni = gx.date.nullDate() ;
   this.AV17DataFin = gx.date.nullDate() ;
   this.ZV17DataFin = gx.date.nullDate() ;
   this.OV17DataFin = gx.date.nullDate() ;
   this.ZV35NumeroRecibo = 0 ;
   this.OV35NumeroRecibo = 0 ;
   this.ZV40DataConta = gx.date.nullDate() ;
   this.OV40DataConta = gx.date.nullDate() ;
   this.ZV36CliForEmpId = "" ;
   this.OV36CliForEmpId = "" ;
   this.ZV37CliForId = 0 ;
   this.OV37CliForId = 0 ;
   this.ZV38CliForNome = "" ;
   this.OV38CliForNome = "" ;
   this.ZV39Quantidade = 0 ;
   this.OV39Quantidade = 0 ;
   this.ZV27ValorRecibo = 0 ;
   this.OV27ValorRecibo = 0 ;
   this.ZV41BmpImp = "" ;
   this.OV41BmpImp = "" ;
   this.AV31TpTela = "" ;
   this.ZV31TpTela = "" ;
   this.OV31TpTela = "" ;
   this.AV22PessoaEmpId = "" ;
   this.ZV22PessoaEmpId = "" ;
   this.OV22PessoaEmpId = "" ;
   this.AV15PessoaId = 0 ;
   this.AV18PessoaFantasia = "" ;
   this.AV16DataIni = gx.date.nullDate() ;
   this.AV17DataFin = gx.date.nullDate() ;
   this.AV31TpTela = "" ;
   this.AV22PessoaEmpId = "" ;
   this.AV60ContaPagRecPagRec = "" ;
   this.AV35NumeroRecibo = 0 ;
   this.AV40DataConta = gx.date.nullDate() ;
   this.AV36CliForEmpId = "" ;
   this.AV37CliForId = 0 ;
   this.AV38CliForNome = "" ;
   this.AV39Quantidade = 0 ;
   this.AV27ValorRecibo = 0 ;
   this.AV41BmpImp = "" ;
   this.A1024ModeloDocumentoId = 0 ;
   this.A1023ModeloDocumentoEmpresaId = "" ;
   this.A2017ModeloDocumentoTipoImpressao = "" ;
   this.A2023ContaLancamDocBaixa = 0 ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1807ContaLancamValor = 0 ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1700ContaPagRecDtPagamento = gx.date.nullDate() ;
   this.AV29SdtRecibo = [ ] ;
   this.Events = {"e11cn2_client": ["'FECHAR'", true] ,"e13cn2_client": ["ENTER", true] ,"e15cn2_client": ["'DESMARCARTODOS'", true] ,"e16cn2_client": ["'MARCARTODOS'", true] ,"e12cn2_client": ["'CANCELAR'", true] ,"e19cn2_client": ["'IMPRIMIR'", true] ,"e20cn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41BmpImp',fld:'vBMPIMP'},{av:'AV29SdtRecibo',fld:'vSDTRECIBO'},{av:'AV31TpTela',fld:'vTPTELA'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV31TpTela',fld:'vTPTELA'},{av:'AV15PessoaId',fld:'vPESSOAID'},{av:'AV16DataIni',fld:'vDATAINI'},{av:'AV22PessoaEmpId',fld:'vPESSOAEMPID'},{av:'AV17DataFin',fld:'vDATAFIN'},{av:'AV23SnErro',fld:'vSNERRO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1636ContaPagRecCliForEmpId',fld:'CONTAPAGRECCLIFOREMPID'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'A2023ContaLancamDocBaixa',fld:'CONTALANCAMDOCBAIXA'},{av:'A1807ContaLancamValor',fld:'CONTALANCAMVALOR'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1700ContaPagRecDtPagamento',fld:'CONTAPAGRECDTPAGAMENTO'}],[{av:'AV23SnErro',fld:'vSNERRO'},{av:'AV18PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV17DataFin',fld:'vDATAFIN'},{av:'AV16DataIni',fld:'vDATAINI'},{av:'AV29SdtRecibo',fld:'vSDTRECIBO'},{av:'AV33SnExiste',fld:'vSNEXISTE'},{av:'AV69GXV1',fld:'vGXV1'},{av:'AV30SdtReciboItem',fld:'vSDTRECIBOITEM'},{av:'AV42ValorAux',fld:'vVALORAUX'},{av:'AV34SdtReciboConta',fld:'vSDTRECIBOCONTA'},{av:'AV31TpTela',fld:'vTPTELA'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV29SdtRecibo',fld:'vSDTRECIBO'}],[{av:'AV29SdtRecibo',fld:'vSDTRECIBO'}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV29SdtRecibo',fld:'vSDTRECIBO'}],[{av:'AV29SdtRecibo',fld:'vSDTRECIBO'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV15PessoaId',fld:'vPESSOAID'}],[{av:'AV31TpTela',fld:'vTPTELA'},{av:'AV29SdtRecibo',fld:'vSDTRECIBO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV29SdtRecibo',fld:'vSDTRECIBO'}],[{av:'AV70GXV2',fld:'vGXV2'},{av:'AV30SdtReciboItem',fld:'vSDTRECIBOITEM'},{av:'AV35NumeroRecibo',fld:'vNUMERORECIBO'},{av:'AV37CliForId',fld:'vCLIFORID'},{av:'AV38CliForNome',fld:'vCLIFORNOME'},{av:'AV39Quantidade',fld:'vQUANTIDADE'},{av:'AV27ValorRecibo',fld:'vVALORRECIBO'},{av:'AV40DataConta',fld:'vDATACONTA'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41BmpImp',fld:'vBMPIMP'},{av:'AV31TpTela',fld:'vTPTELA'},{av:'AV29SdtRecibo',fld:'vSDTRECIBO'},{av:'A1023ModeloDocumentoEmpresaId',fld:'MODELODOCUMENTOEMPRESAID'},{av:'AV45ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'},{av:'AV46ModeloDocumentoId',fld:'vMODELODOCUMENTOID'},{av:'A2017ModeloDocumentoTipoImpressao',fld:'MODELODOCUMENTOTIPOIMPRESSAO'},{av:'AV50SdtImpRecItem',fld:'vSDTIMPRECITEM'},{av:'AV35NumeroRecibo',fld:'vNUMERORECIBO'},{av:'AV37CliForId',fld:'vCLIFORID'},{av:'AV56SdtVis',fld:'vSDTVIS'},{av:'AV57QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV60ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true}],[{av:'AV51ModeloDocumentoTipoImpressao',fld:'vMODELODOCUMENTOTIPOIMPRESSAO'},{av:'AV49SdtImpRec',fld:'vSDTIMPREC'},{av:'AV50SdtImpRecItem',fld:'vSDTIMPRECITEM'},{av:'AV72GXV3',fld:'vGXV3'},{av:'AV30SdtReciboItem',fld:'vSDTRECIBOITEM'},{av:'AV73GXV4',fld:'vGXV4'},{av:'AV34SdtReciboConta',fld:'vSDTRECIBOCONTA'},{av:'AV56SdtVis',fld:'vSDTVIS'},{av:'AV44NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV43NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV57QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV52NoValAux',fld:'vNOVALAUX'},{av:'AV53ModReciboCPag',fld:'vMODRECIBOCPAG'},{av:'AV54ModReciboCRec',fld:'vMODRECIBOCREC'},{av:'AV46ModeloDocumentoId',fld:'vMODELODOCUMENTOID'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41BmpImp',fld:'vBMPIMP'},{av:'AV29SdtRecibo',fld:'vSDTRECIBO'},{av:'AV31TpTela',fld:'vTPTELA'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41BmpImp',fld:'vBMPIMP'},{av:'AV29SdtRecibo',fld:'vSDTRECIBO'},{av:'AV31TpTela',fld:'vTPTELA'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41BmpImp',fld:'vBMPIMP'},{av:'AV29SdtRecibo',fld:'vSDTRECIBO'},{av:'AV31TpTela',fld:'vTPTELA'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV41BmpImp',fld:'vBMPIMP'},{av:'AV29SdtRecibo',fld:'vSDTRECIBO'},{av:'AV31TpTela',fld:'vTPTELA'}],[{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'}]];
   this.setPrompt("PROMPT_PESSOAID", [10]);
   this.EnterCtrl = ["BTNAVANCAR"];
   this.setVCMap("AV29SdtRecibo", "vSDTRECIBO", 0, "CollChequeRecibo.ChequeReciboItem");
   this.setVCMap("AV60ContaPagRecPagRec", "vCONTAPAGRECPAGREC", 0, "char");
   this.setVCMap("AV29SdtRecibo", "vSDTRECIBO", 0, "CollChequeRecibo.ChequeReciboItem");
   GridContainer.addRefreshingVar({rfrVar:"AV41BmpImp", rfrProp:"Value", gxAttId:"Bmpimp"});
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV29SdtRecibo"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hreemissaorecibo());
