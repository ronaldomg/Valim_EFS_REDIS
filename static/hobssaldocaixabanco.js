/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:55:19.70
*/
gx.evt.autoSkip = false;
gx.define('hobssaldocaixabanco', false, function () {
   this.ServerClass =  "hobssaldocaixabanco" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV16EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV32SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e112032_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122032_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e202032_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e212032_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e222032_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e162032_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132032_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142032_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152032_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e232032_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e242032_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e252032_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,21,24,26,31,34,37,39,41,43,45,48,50,51,55,56,57,58,59,60,61,62,68,70,71,72];
   this.GXLastCtrlId =72;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hobssaldocaixabanco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(9760,55,"OBSSALDOCAIXABANCODATA","","","ObsSaldoCaixaBancoData","date",0,"px",10,10,"right",null,[],9760,"ObsSaldoCaixaBancoData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Saldocxabcovalor",56,"vSALDOCXABCOVALOR","Saldo Banco","","SaldoCxaBcoValor","decimal",0,"px",18,18,"right",null,[],"Saldocxabcovalor","SaldoCxaBcoValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Saldocontasaldoatual",57,"vSALDOCONTASALDOATUAL","Saldo Contabil","","SaldoContaSaldoAtual","decimal",0,"px",18,18,"right",null,[],"Saldocontasaldoatual","SaldoContaSaldoAtual",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",58,0,"px",17,"px","e202032_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",59,0,"px",17,"px","e212032_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",60,0,"px",17,"px","e222032_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1015,61,"CAIXABANCOID","Caixa/Conta Bancária","","CaixaBancoId","int",0,"px",5,5,"right",null,[],1015,"CaixaBancoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1014,62,"CAIXABANCOEMPRESAID","Empresa","","CaixaBancoEmpresaId","char",0,"px",10,10,"left",null,[],1014,"CaixaBancoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXABANCOID",gxz:"ZV12CaixaBancoId",gxold:"OV12CaixaBancoId",gxvar:"AV12CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV12CaixaBancoId,0)},c2v:function(){gx.O.AV12CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV10CaixaBancoDescricao",gxold:"OV10CaixaBancoDescricao",gxvar:"AV10CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV10CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV10CaixaBancoDescricao,0)},c2v:function(){gx.O.AV10CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATA",gxz:"ZV14Data",gxold:"OV14Data",gxvar:"AV14Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATA",gx.O.AV14Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[21]={fld:"TABLE14",grid:0};
   GXValidFnc[24]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV13ContaContabilId",gxold:"OV13ContaContabilId",gxvar:"AV13ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ContaContabilId=Value},v2z:function(Value){gx.O.ZV13ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV13ContaContabilId,0)},c2v:function(){gx.O.AV13ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE4",grid:0};
   GXValidFnc[34]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={fld:"IMAGE2",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNHELP",grid:0};
   GXValidFnc[45]={fld:"TABLE5",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV27Pagina",gxold:"OV27Pagina",gxvar:"AV27Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV27Pagina)},c2v:function(){gx.O.AV27Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV28PaginaAux",gxold:"OV28PaginaAux",gxvar:"AV28PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV28PaginaAux,0)},c2v:function(){gx.O.AV28PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OBSSALDOCAIXABANCODATA",gxz:"Z9760ObsSaldoCaixaBancoData",gxold:"O9760ObsSaldoCaixaBancoData",gxvar:"A9760ObsSaldoCaixaBancoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9760ObsSaldoCaixaBancoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9760ObsSaldoCaixaBancoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("OBSSALDOCAIXABANCODATA",row || gx.fn.currentGridRowImpl(54),gx.O.A9760ObsSaldoCaixaBancoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9760ObsSaldoCaixaBancoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("OBSSALDOCAIXABANCODATA",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOCXABCOVALOR",gxz:"ZV40SaldoCxaBcoValor",gxold:"OV40SaldoCxaBcoValor",gxvar:"AV40SaldoCxaBcoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV40SaldoCxaBcoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV40SaldoCxaBcoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vSALDOCXABCOVALOR",row || gx.fn.currentGridRowImpl(54),gx.O.AV40SaldoCxaBcoValor,2,',')},c2v:function(){gx.O.AV40SaldoCxaBcoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vSALDOCXABCOVALOR",row || gx.fn.currentGridRowImpl(54),'.',',')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOCONTASALDOATUAL",gxz:"ZV39SaldoContaSaldoAtual",gxold:"OV39SaldoContaSaldoAtual",gxvar:"AV39SaldoContaSaldoAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV39SaldoContaSaldoAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV39SaldoContaSaldoAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vSALDOCONTASALDOATUAL",row || gx.fn.currentGridRowImpl(54),gx.O.AV39SaldoContaSaldoAtual,2,',')},c2v:function(){gx.O.AV39SaldoContaSaldoAtual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vSALDOCONTASALDOATUAL",row || gx.fn.currentGridRowImpl(54),'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(54),gx.O.AV7bmpAlt,gx.O.AV45Bmpalt_GXI)},c2v:function(){gx.O.AV45Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV45Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV9bmpExc",gxold:"OV9bmpExc",gxvar:"AV9bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV9bmpExc=Value},v2z:function(Value){gx.O.ZV9bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54),gx.O.AV9bmpExc,gx.O.AV46Bmpexc_GXI)},c2v:function(){gx.O.AV46Bmpexc_GXI=this.val_GXI();gx.O.AV9bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV46Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV8bmpCon",gxold:"OV8bmpCon",gxvar:"AV8bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpCon=Value},v2z:function(Value){gx.O.ZV8bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(54),gx.O.AV8bmpCon,gx.O.AV47Bmpcon_GXI)},c2v:function(){gx.O.AV47Bmpcon_GXI=this.val_GXI();gx.O.AV8bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV47Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOID",gxz:"Z1015CaixaBancoId",gxold:"O1015CaixaBancoId",gxvar:"A1015CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1015CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1015CaixaBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOID",row || gx.fn.currentGridRowImpl(54),gx.O.A1015CaixaBancoId,0)},c2v:function(){gx.O.A1015CaixaBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXABANCOID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOEMPRESAID",gxz:"Z1014CaixaBancoEmpresaId",gxold:"O1014CaixaBancoEmpresaId",gxvar:"A1014CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1014CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.Z1014CaixaBancoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOEMPRESAID",row || gx.fn.currentGridRowImpl(54),gx.O.A1014CaixaBancoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1014CaixaBancoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOEMPRESAID",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV26OrderedBy",gxold:"OV26OrderedBy",gxvar:"AV26OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV26OrderedBy,0)},c2v:function(){gx.O.AV26OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV11CaixaBancoEmpresaId",gxold:"OV11CaixaBancoEmpresaId",gxvar:"AV11CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV11CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV11CaixaBancoEmpresaId,0)},c2v:function(){gx.O.AV11CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"JSJSON", format:2,grid:0};
   GXValidFnc[72]={fld:"PROMPT_CAIXABANCOID",grid:0};
   this.AV12CaixaBancoId = 0 ;
   this.ZV12CaixaBancoId = 0 ;
   this.OV12CaixaBancoId = 0 ;
   this.AV10CaixaBancoDescricao = "" ;
   this.ZV10CaixaBancoDescricao = "" ;
   this.OV10CaixaBancoDescricao = "" ;
   this.AV14Data = gx.date.nullDate() ;
   this.ZV14Data = gx.date.nullDate() ;
   this.OV14Data = gx.date.nullDate() ;
   this.AV13ContaContabilId = "" ;
   this.ZV13ContaContabilId = "" ;
   this.OV13ContaContabilId = "" ;
   this.AV27Pagina = 0 ;
   this.ZV27Pagina = 0 ;
   this.OV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.ZV28PaginaAux = 0 ;
   this.OV28PaginaAux = 0 ;
   this.Z9760ObsSaldoCaixaBancoData = gx.date.nullDate() ;
   this.O9760ObsSaldoCaixaBancoData = gx.date.nullDate() ;
   this.ZV40SaldoCxaBcoValor = 0 ;
   this.OV40SaldoCxaBcoValor = 0 ;
   this.ZV39SaldoContaSaldoAtual = 0 ;
   this.OV39SaldoContaSaldoAtual = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV9bmpExc = "" ;
   this.OV9bmpExc = "" ;
   this.ZV8bmpCon = "" ;
   this.OV8bmpCon = "" ;
   this.Z1015CaixaBancoId = 0 ;
   this.O1015CaixaBancoId = 0 ;
   this.Z1014CaixaBancoEmpresaId = "" ;
   this.O1014CaixaBancoEmpresaId = "" ;
   this.AV26OrderedBy = 0 ;
   this.ZV26OrderedBy = 0 ;
   this.OV26OrderedBy = 0 ;
   this.AV11CaixaBancoEmpresaId = "" ;
   this.ZV11CaixaBancoEmpresaId = "" ;
   this.OV11CaixaBancoEmpresaId = "" ;
   this.AV12CaixaBancoId = 0 ;
   this.AV10CaixaBancoDescricao = "" ;
   this.AV14Data = gx.date.nullDate() ;
   this.AV13ContaContabilId = "" ;
   this.AV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.AV26OrderedBy = 0 ;
   this.AV11CaixaBancoEmpresaId = "" ;
   this.A9760ObsSaldoCaixaBancoData = gx.date.nullDate() ;
   this.AV40SaldoCxaBcoValor = 0 ;
   this.AV39SaldoContaSaldoAtual = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV9bmpExc = "" ;
   this.AV8bmpCon = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.AV16EmpresaPadrao = "" ;
   this.AV32SnRecuperaFiltro = "" ;
   this.Events = {"e112032_client": ["'ANTERIOR'", true] ,"e122032_client": ["'PROXIMO'", true] ,"e202032_client": ["'ALTERAR'", true] ,"e212032_client": ["'EXCLUIR'", true] ,"e222032_client": ["'CONSULTAR'", true] ,"e162032_client": ["VPAGINA.CLICK", true] ,"e132032_client": ["'NOVO'", true] ,"e142032_client": ["'FECHAR'", true] ,"e152032_client": ["'PROCURAR'", true] ,"e232032_client": ["'ATUALIZAPAGINA'", true] ,"e242032_client": ["ENTER", true] ,"e252032_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV14Data',fld:'vDATA'},{av:'AV26OrderedBy',fld:'vORDEREDBY'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV13ContaContabilId',fld:'vCONTACONTABILID'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV14Data',fld:'vDATA'},{av:'AV26OrderedBy',fld:'vORDEREDBY'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV13ContaContabilId',fld:'vCONTACONTABILID'}],[{ctrl:'OBSSALDOCAIXABANCODATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OBSSALDOCAIXABANCODATA","Title")',ctrl:'OBSSALDOCAIXABANCODATA',prop:'Title'},{av:'AV20Imagem',fld:'vIMAGEM'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV25NumPagina',fld:'vNUMPAGINA'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV18filtros',fld:'vFILTROS'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV14Data',fld:'vDATA'},{av:'AV13ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV26OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV14Data',fld:'vDATA'},{av:'AV26OrderedBy',fld:'vORDEREDBY'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV13ContaContabilId',fld:'vCONTACONTABILID'}],[{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV18filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV14Data',fld:'vDATA'},{av:'AV26OrderedBy',fld:'vORDEREDBY'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV13ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV18filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV14Data',fld:'vDATA'},{av:'AV13ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV26OrderedBy',fld:'vORDEREDBY'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV9bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV8bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SaldoCxaBcoValor',fld:'vSALDOCXABCOVALOR'},{av:'AV39SaldoContaSaldoAtual',fld:'vSALDOCONTASALDOATUAL'},{av:'AV18filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV14Data',fld:'vDATA'},{av:'AV13ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV26OrderedBy',fld:'vORDEREDBY'}],[{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV18filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV14Data',fld:'vDATA'},{av:'AV13ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV26OrderedBy',fld:'vORDEREDBY'}],[{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV18filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV14Data',fld:'vDATA'},{av:'AV13ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV26OrderedBy',fld:'vORDEREDBY'}],[{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV18filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV14Data',fld:'vDATA'},{av:'AV26OrderedBy',fld:'vORDEREDBY'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV13ContaContabilId',fld:'vCONTACONTABILID'}],[{av:'AV18filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV34TpErro',fld:'vTPERRO'},{av:'Gx_date',fld:'vTODAY'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV11CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'}],[{av:'AV14Data',fld:'vDATA'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV34TpErro',fld:'vTPERRO'},{av:'AV31snExiste',fld:'vSNEXISTE'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV14Data',fld:'vDATA'},{av:'AV26OrderedBy',fld:'vORDEREDBY'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV13ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV34TpErro',fld:'vTPERRO'},{av:'AV11CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'}],[{av:'AV38SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV34TpErro',fld:'vTPERRO'},{av:'AV31snExiste',fld:'vSNEXISTE'},{av:'AV18filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV14Data',fld:'vDATA'},{av:'AV26OrderedBy',fld:'vORDEREDBY'},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A9760ObsSaldoCaixaBancoData',fld:'OBSSALDOCAIXABANCODATA'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV13ContaContabilId',fld:'vCONTACONTABILID'}],[]];
   this.setPrompt("PROMPT_CAIXABANCOID", [13]);
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar({rfrVar:"AV16EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV32SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1015CaixaBancoId", rfrProp:"Value", gxAttId:"1015"});
   GridContainer.addRefreshingVar({rfrVar:"A9760ObsSaldoCaixaBancoData", rfrProp:"Value", gxAttId:"9760"});
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hobssaldocaixabanco());
