/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:37.26
*/
gx.evt.autoSkip = false;
gx.define('hlancamentocontabil', false, function () {
   this.ServerClass =  "hlancamentocontabil" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A68ItensLancamentoContabilDebCre=gx.fn.getControlValue("ITENSLANCAMENTOCONTABILDEBCRE") ;
      this.A66ItensLancamentoContabilValor=gx.fn.getDecimalValue("ITENSLANCAMENTOCONTABILVALOR",'.',',') ;
   };
   this.e162i2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGGERAL'", true, null, false, false);
   };
   this.e192i2_client=function()
   {
      this.executeServerEvent("'CONSULTALOG'", true, arguments[0], false, false);
   };
   this.e112i2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122i2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e172i2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132i2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, arguments[0], false, false);
   };
   this.e142i2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152i2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e222i2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e232i2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e242i2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e252i2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e262i2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,30,33,36,38,40,42,44,47,49,50,54,55,56,57,58,59,60,61,62,63,64,65,66,73,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlancamentocontabil",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(61,54,"LANCAMENTOCONTABILID","","","LancamentoContabilId","int",0,"px",8,8,"right",null,[],61,"LancamentoContabilId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(60,55,"LANCAMENTOCONTABILDATA","","","LancamentoContabilData","date",0,"px",10,10,"right",null,[],60,"LancamentoContabilData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(342,56,"LANCAMENTOCONTABILESTORNO","","","LancamentoContabilEstorno","int",0,"px",8,8,"right",null,[],342,"LancamentoContabilEstorno",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Totaldebito",57,"vTOTALDEBITO","Total Débito","","TotalDebito","decimal",0,"px",22,22,"right",null,[],"Totaldebito","TotalDebito",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Totalcredito",58,"vTOTALCREDITO","Total Crédito","","TotalCredito","decimal",0,"px",22,22,"right",null,[],"Totalcredito","TotalCredito",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpitemlan","vBMPITEMLAN",59,0,"px",17,"px",null,"","Itens","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmplog","vBMPLOG",60,0,"px",17,"px","e192i2_client","","Log","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",61,0,"px",17,"px","e232i2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",62,0,"px",17,"px","e222i2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",63,0,"px",17,"px",null,"","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(347,64,"TRANSACAOCONTABILID","Transacao Contabil Id","","TransacaoContabilId","svchar",0,"px",10,10,"left",null,[],347,"TransacaoContabilId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2582,65,"LANCAMENTOCONTABILUSUARIOINC","Usuário Inclusão","","LancamentoContabilUsuarioInc","char",0,"px",12,12,"left",null,[],2582,"LancamentoContabilUsuarioInc",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(341,66,"LANCAMENTOCONTABILEMPRESAID","Código Empresa Conta Contábil","","LancamentoContabilEmpresaid","char",0,"px",10,10,"left",null,[],341,"LancamentoContabilEmpresaid",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE9",grid:0};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCONTABILDATAINI",gxz:"ZV23LancamentoContabilDataIni",gxold:"OV23LancamentoContabilDataIni",gxvar:"AV23LancamentoContabilDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23LancamentoContabilDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23LancamentoContabilDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILDATAINI",gx.O.AV23LancamentoContabilDataIni,0)},c2v:function(){gx.O.AV23LancamentoContabilDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCONTABILDATAINI")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCONTABILDATAFIN",gxz:"ZV26LancamentoContabilDataFin",gxold:"OV26LancamentoContabilDataFin",gxvar:"AV26LancamentoContabilDataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26LancamentoContabilDataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26LancamentoContabilDataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILDATAFIN",gx.O.AV26LancamentoContabilDataFin,0)},c2v:function(){gx.O.AV26LancamentoContabilDataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCONTABILDATAFIN")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCONTABILID",gxz:"ZV22LancamentoContabilId",gxold:"OV22LancamentoContabilId",gxvar:"AV22LancamentoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22LancamentoContabilId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILID",gx.O.AV22LancamentoContabilId,0)},c2v:function(){gx.O.AV22LancamentoContabilId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCONTABILID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLE4",grid:0};
   GXValidFnc[33]={fld:"TABLE1",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNHELP",grid:0};
   GXValidFnc[42]={fld:"BTNLOG",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILID",gxz:"Z61LancamentoContabilId",gxold:"O61LancamentoContabilId",gxvar:"A61LancamentoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A61LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z61LancamentoContabilId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILID",row || gx.fn.currentGridRowImpl(53),gx.O.A61LancamentoContabilId,0)},c2v:function(){gx.O.A61LancamentoContabilId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCONTABILID",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILDATA",gxz:"Z60LancamentoContabilData",gxold:"O60LancamentoContabilData",gxvar:"A60LancamentoContabilData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A60LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z60LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILDATA",row || gx.fn.currentGridRowImpl(53),gx.O.A60LancamentoContabilData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A60LancamentoContabilData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOCONTABILDATA",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILESTORNO",gxz:"Z342LancamentoContabilEstorno",gxold:"O342LancamentoContabilEstorno",gxvar:"A342LancamentoContabilEstorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A342LancamentoContabilEstorno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z342LancamentoContabilEstorno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILESTORNO",row || gx.fn.currentGridRowImpl(53),gx.O.A342LancamentoContabilEstorno,0)},c2v:function(){gx.O.A342LancamentoContabilEstorno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCONTABILESTORNO",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALDEBITO",gxz:"ZV37TotalDebito",gxold:"OV37TotalDebito",gxvar:"AV37TotalDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV37TotalDebito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV37TotalDebito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vTOTALDEBITO",row || gx.fn.currentGridRowImpl(53),gx.O.AV37TotalDebito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV37TotalDebito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vTOTALDEBITO",row || gx.fn.currentGridRowImpl(53),'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALCREDITO",gxz:"ZV38TotalCredito",gxold:"OV38TotalCredito",gxvar:"AV38TotalCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV38TotalCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV38TotalCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vTOTALCREDITO",row || gx.fn.currentGridRowImpl(53),gx.O.AV38TotalCredito,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV38TotalCredito=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vTOTALCREDITO",row || gx.fn.currentGridRowImpl(53),'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPITEMLAN",gxz:"ZV27bmpItemLan",gxold:"OV27bmpItemLan",gxvar:"AV27bmpItemLan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpItemLan=Value},v2z:function(Value){gx.O.ZV27bmpItemLan=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPITEMLAN",row || gx.fn.currentGridRowImpl(53),gx.O.AV27bmpItemLan,gx.O.AV46Bmpitemlan_GXI)},c2v:function(){gx.O.AV46Bmpitemlan_GXI=this.val_GXI();gx.O.AV27bmpItemLan=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPITEMLAN",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPITEMLAN_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV46Bmpitemlan_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLOG",gxz:"ZV34bmpLog",gxold:"OV34bmpLog",gxvar:"AV34bmpLog",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34bmpLog=Value},v2z:function(Value){gx.O.ZV34bmpLog=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLOG",row || gx.fn.currentGridRowImpl(53),gx.O.AV34bmpLog,gx.O.AV47Bmplog_GXI)},c2v:function(){gx.O.AV47Bmplog_GXI=this.val_GXI();gx.O.AV34bmpLog=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLOG",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLOG_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV47Bmplog_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(53),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(53),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCONTABILID",gxz:"Z347TransacaoContabilId",gxold:"O347TransacaoContabilId",gxvar:"A347TransacaoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A347TransacaoContabilId=Value},v2z:function(Value){gx.O.Z347TransacaoContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCONTABILID",row || gx.fn.currentGridRowImpl(53),gx.O.A347TransacaoContabilId,0)},c2v:function(){gx.O.A347TransacaoContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCONTABILID",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILUSUARIOINC",gxz:"Z2582LancamentoContabilUsuarioInc",gxold:"O2582LancamentoContabilUsuarioInc",gxvar:"A2582LancamentoContabilUsuarioInc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2582LancamentoContabilUsuarioInc=Value},v2z:function(Value){gx.O.Z2582LancamentoContabilUsuarioInc=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILUSUARIOINC",row || gx.fn.currentGridRowImpl(53),gx.O.A2582LancamentoContabilUsuarioInc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2582LancamentoContabilUsuarioInc=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCONTABILUSUARIOINC",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILEMPRESAID",gxz:"Z341LancamentoContabilEmpresaid",gxold:"O341LancamentoContabilEmpresaid",gxvar:"A341LancamentoContabilEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A341LancamentoContabilEmpresaid=Value},v2z:function(Value){gx.O.Z341LancamentoContabilEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(53),gx.O.A341LancamentoContabilEmpresaid,0)},c2v:function(){gx.O.A341LancamentoContabilEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[73]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV23LancamentoContabilDataIni = gx.date.nullDate() ;
   this.ZV23LancamentoContabilDataIni = gx.date.nullDate() ;
   this.OV23LancamentoContabilDataIni = gx.date.nullDate() ;
   this.AV26LancamentoContabilDataFin = gx.date.nullDate() ;
   this.ZV26LancamentoContabilDataFin = gx.date.nullDate() ;
   this.OV26LancamentoContabilDataFin = gx.date.nullDate() ;
   this.AV22LancamentoContabilId = 0 ;
   this.ZV22LancamentoContabilId = 0 ;
   this.OV22LancamentoContabilId = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z61LancamentoContabilId = 0 ;
   this.O61LancamentoContabilId = 0 ;
   this.Z60LancamentoContabilData = gx.date.nullDate() ;
   this.O60LancamentoContabilData = gx.date.nullDate() ;
   this.Z342LancamentoContabilEstorno = 0 ;
   this.O342LancamentoContabilEstorno = 0 ;
   this.ZV37TotalDebito = 0 ;
   this.OV37TotalDebito = 0 ;
   this.ZV38TotalCredito = 0 ;
   this.OV38TotalCredito = 0 ;
   this.ZV27bmpItemLan = "" ;
   this.OV27bmpItemLan = "" ;
   this.ZV34bmpLog = "" ;
   this.OV34bmpLog = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z347TransacaoContabilId = "" ;
   this.O347TransacaoContabilId = "" ;
   this.Z2582LancamentoContabilUsuarioInc = "" ;
   this.O2582LancamentoContabilUsuarioInc = "" ;
   this.Z341LancamentoContabilEmpresaid = "" ;
   this.O341LancamentoContabilEmpresaid = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV23LancamentoContabilDataIni = gx.date.nullDate() ;
   this.AV26LancamentoContabilDataFin = gx.date.nullDate() ;
   this.AV22LancamentoContabilId = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A61LancamentoContabilId = 0 ;
   this.A60LancamentoContabilData = gx.date.nullDate() ;
   this.A342LancamentoContabilEstorno = 0 ;
   this.AV37TotalDebito = 0 ;
   this.AV38TotalCredito = 0 ;
   this.AV27bmpItemLan = "" ;
   this.AV34bmpLog = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A347TransacaoContabilId = "" ;
   this.A2582LancamentoContabilUsuarioInc = "" ;
   this.A341LancamentoContabilEmpresaid = "" ;
   this.A68ItensLancamentoContabilDebCre = "" ;
   this.A66ItensLancamentoContabilValor = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.Events = {"e162i2_client": ["'CONSULTALOGGERAL'", true] ,"e192i2_client": ["'CONSULTALOG'", true] ,"e112i2_client": ["'ANTERIOR'", true] ,"e122i2_client": ["'PROXIMO'", true] ,"e172i2_client": ["VPAGINA.CLICK", true] ,"e132i2_client": ["'NOVO'", true] ,"e142i2_client": ["'FECHAR'", true] ,"e152i2_client": ["'PROCURAR'", true] ,"e222i2_client": ["'EXCLUIR'", true] ,"e232i2_client": ["'ALTERAR'", true] ,"e242i2_client": ["'ATUALIZAPAGINA'", true] ,"e252i2_client": ["ENTER", true] ,"e262i2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23LancamentoContabilDataIni',fld:'vLANCAMENTOCONTABILDATAINI'},{av:'AV26LancamentoContabilDataFin',fld:'vLANCAMENTOCONTABILDATAFIN'},{av:'AV22LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A2582LancamentoContabilUsuarioInc',fld:'LANCAMENTOCONTABILUSUARIOINC'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'A342LancamentoContabilEstorno',fld:'LANCAMENTOCONTABILESTORNO'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'A68ItensLancamentoContabilDebCre',fld:'ITENSLANCAMENTOCONTABILDEBCRE'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'}],[]];
   this.EvtParms["'CONSULTALOGGERAL'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV36Log',fld:'vLOG'}]];
   this.EvtParms["'CONSULTALOG'"] = [[{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'}],[{av:'AV36Log',fld:'vLOG'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23LancamentoContabilDataIni',fld:'vLANCAMENTOCONTABILDATAINI'},{av:'AV26LancamentoContabilDataFin',fld:'vLANCAMENTOCONTABILDATAFIN'},{av:'AV22LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A2582LancamentoContabilUsuarioInc',fld:'LANCAMENTOCONTABILUSUARIOINC'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'A342LancamentoContabilEstorno',fld:'LANCAMENTOCONTABILESTORNO'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'A68ItensLancamentoContabilDebCre',fld:'ITENSLANCAMENTOCONTABILDEBCRE'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'}],[{ctrl:'LANCAMENTOCONTABILID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCONTABILID","Title")',ctrl:'LANCAMENTOCONTABILID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'LANCAMENTOCONTABILDATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCONTABILDATA","Title")',ctrl:'LANCAMENTOCONTABILDATA',prop:'Title'},{ctrl:'LANCAMENTOCONTABILESTORNO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCONTABILESTORNO","Title")',ctrl:'LANCAMENTOCONTABILESTORNO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV29filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV23LancamentoContabilDataIni',fld:'vLANCAMENTOCONTABILDATAINI'},{av:'AV26LancamentoContabilDataFin',fld:'vLANCAMENTOCONTABILDATAFIN'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23LancamentoContabilDataIni',fld:'vLANCAMENTOCONTABILDATAINI'},{av:'AV26LancamentoContabilDataFin',fld:'vLANCAMENTOCONTABILDATAFIN'},{av:'AV22LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A2582LancamentoContabilUsuarioInc',fld:'LANCAMENTOCONTABILUSUARIOINC'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'A342LancamentoContabilEstorno',fld:'LANCAMENTOCONTABILESTORNO'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'A68ItensLancamentoContabilDebCre',fld:'ITENSLANCAMENTOCONTABILDEBCRE'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23LancamentoContabilDataIni',fld:'vLANCAMENTOCONTABILDATAINI'},{av:'AV26LancamentoContabilDataFin',fld:'vLANCAMENTOCONTABILDATAFIN'},{av:'AV22LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A2582LancamentoContabilUsuarioInc',fld:'LANCAMENTOCONTABILUSUARIOINC'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'A342LancamentoContabilEstorno',fld:'LANCAMENTOCONTABILESTORNO'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'A68ItensLancamentoContabilDebCre',fld:'ITENSLANCAMENTOCONTABILDEBCRE'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A2582LancamentoContabilUsuarioInc',fld:'LANCAMENTOCONTABILUSUARIOINC'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A342LancamentoContabilEstorno',fld:'LANCAMENTOCONTABILESTORNO'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'A68ItensLancamentoContabilDebCre',fld:'ITENSLANCAMENTOCONTABILDEBCRE'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV23LancamentoContabilDataIni',fld:'vLANCAMENTOCONTABILDATAINI'},{av:'AV26LancamentoContabilDataFin',fld:'vLANCAMENTOCONTABILDATAFIN'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'},{av:'AV27bmpItemLan',fld:'vBMPITEMLAN'},{av:'gx.fn.getCtrlProperty("vBMPITEMLAN","Tooltiptext")',ctrl:'vBMPITEMLAN',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPITEMLAN","Link")',ctrl:'vBMPITEMLAN',prop:'Link'},{av:'AV34bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{av:'AV37TotalDebito',fld:'vTOTALDEBITO'},{av:'AV38TotalCredito',fld:'vTOTALCREDITO'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23LancamentoContabilDataIni',fld:'vLANCAMENTOCONTABILDATAINI'},{av:'AV26LancamentoContabilDataFin',fld:'vLANCAMENTOCONTABILDATAFIN'},{av:'AV22LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A2582LancamentoContabilUsuarioInc',fld:'LANCAMENTOCONTABILUSUARIOINC'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'A342LancamentoContabilEstorno',fld:'LANCAMENTOCONTABILESTORNO'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'A68ItensLancamentoContabilDebCre',fld:'ITENSLANCAMENTOCONTABILDEBCRE'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'}],[{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23LancamentoContabilDataIni',fld:'vLANCAMENTOCONTABILDATAINI'},{av:'AV26LancamentoContabilDataFin',fld:'vLANCAMENTOCONTABILDATAFIN'},{av:'AV22LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A2582LancamentoContabilUsuarioInc',fld:'LANCAMENTOCONTABILUSUARIOINC'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'A342LancamentoContabilEstorno',fld:'LANCAMENTOCONTABILESTORNO'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'A68ItensLancamentoContabilDebCre',fld:'ITENSLANCAMENTOCONTABILDEBCRE'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'A2582LancamentoContabilUsuarioInc',fld:'LANCAMENTOCONTABILUSUARIOINC'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'A347TransacaoContabilId',fld:'TRANSACAOCONTABILID'},{av:'A342LancamentoContabilEstorno',fld:'LANCAMENTOCONTABILESTORNO'}],[{av:'AV35SnPermitido',fld:'vSNPERMITIDO'},{av:'AV31SnValida',fld:'vSNVALIDA'},{av:'AV30LancamentoContabilId2',fld:'vLANCAMENTOCONTABILID2'},{av:'A342LancamentoContabilEstorno',fld:'LANCAMENTOCONTABILESTORNO'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A2582LancamentoContabilUsuarioInc',fld:'LANCAMENTOCONTABILUSUARIOINC'}],[{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23LancamentoContabilDataIni',fld:'vLANCAMENTOCONTABILDATAINI'},{av:'AV26LancamentoContabilDataFin',fld:'vLANCAMENTOCONTABILDATAFIN'},{av:'AV22LancamentoContabilId',fld:'vLANCAMENTOCONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A2582LancamentoContabilUsuarioInc',fld:'LANCAMENTOCONTABILUSUARIOINC'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'A342LancamentoContabilEstorno',fld:'LANCAMENTOCONTABILESTORNO'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'A68ItensLancamentoContabilDebCre',fld:'ITENSLANCAMENTOCONTABILDEBCRE'},{av:'A66ItensLancamentoContabilValor',fld:'ITENSLANCAMENTOCONTABILVALOR'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A68ItensLancamentoContabilDebCre", "ITENSLANCAMENTOCONTABILDEBCRE", 0, "char");
   this.setVCMap("A66ItensLancamentoContabilValor", "ITENSLANCAMENTOCONTABILVALOR", 0, "decimal");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A68ItensLancamentoContabilDebCre", "ITENSLANCAMENTOCONTABILDEBCRE", 0, "char");
   this.setVCMap("A66ItensLancamentoContabilValor", "ITENSLANCAMENTOCONTABILVALOR", 0, "decimal");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"A61LancamentoContabilId", rfrProp:"Value", gxAttId:"61"});
   GridContainer.addRefreshingVar({rfrVar:"A2582LancamentoContabilUsuarioInc", rfrProp:"Value", gxAttId:"2582"});
   GridContainer.addRefreshingVar({rfrVar:"A60LancamentoContabilData", rfrProp:"Value", gxAttId:"60"});
   GridContainer.addRefreshingVar({rfrVar:"A342LancamentoContabilEstorno", rfrProp:"Value", gxAttId:"342"});
   GridContainer.addRefreshingVar({rfrVar:"A341LancamentoContabilEmpresaid", rfrProp:"Value", gxAttId:"341"});
   GridContainer.addRefreshingVar({rfrVar:"A68ItensLancamentoContabilDebCre"});
   GridContainer.addRefreshingVar({rfrVar:"A66ItensLancamentoContabilValor"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlancamentocontabil());
