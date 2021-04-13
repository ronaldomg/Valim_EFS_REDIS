/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:21:35.38
*/
gx.evt.autoSkip = false;
gx.define('hlancamentosprocesso', false, function () {
   this.ServerClass =  "hlancamentosprocesso" ;
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
      this.AV32ProcessoConvEmpresaId=gx.fn.getControlValue("vPROCESSOCONVEMPRESAID") ;
      this.AV35SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.s132_client=function()
   {
      this.AV29tpErro = gx.num.trunc( 0 ,0) ;
      if ( ( new gx.date.gxdate( this.AV27DtInicio ).compare( this.AV28DtFinal ) > 0 && this.AV29tpErro == 0 ) )
      {
         this.addMessage("A data de início deve ser menor que a data final");
         gx.fn.usrSetFocus("vDTINICIO") ;
         this.AV29tpErro = gx.num.trunc( 1 ,0) ;
      }
   };
   this.e11xp2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12xp2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16xp2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13xp2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14xp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15xp2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20xp2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21xp2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22xp2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23xp2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24xp2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25xp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,35,37,42,45,48,50,52,54,56,59,61,62,66,67,68,69,70,71,72,73,74,75,76,83,84];
   this.GXLastCtrlId =84;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",65,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlancamentosprocesso",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Numanoprocesso",66,"vNUMANOPROCESSO","","","NumAnoProcesso","char",0,"px",15,15,"left",null,[],"Numanoprocesso","NumAnoProcesso",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6420,67,"LANCAMENTOSPROCESSODATA","","","LancamentosProcessoData","date",0,"px",10,10,"right",null,[],6420,"LancamentosProcessoData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6421,68,"LANCAMENTOSPROCESSOTIPO","","","LancamentosProcessoTipo","char",0,"px",1,1,"left",null,[],6421,"LancamentosProcessoTipo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6422,69,"LANCAMENTOSPROCESSOVALOR","","","LancamentosProcessoValor","decimal",0,"px",22,22,"right",null,[],6422,"LancamentosProcessoValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",70,0,"px",17,"px","e20xp2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",71,0,"px",17,"px","e21xp2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",72,0,"px",17,"px","e22xp2_client","","Cons","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(6426,73,"LANCAMENTOSPROCESSOSEQ","Sequência","","LancamentosProcessoSeq","int",0,"px",4,4,"right",null,[],6426,"LancamentosProcessoSeq",false,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addSingleLineEdit(3374,74,"PROCESSOCONVNUMERO","Nº Processo","","ProcessoConvNumero","int",0,"px",8,8,"right",null,[],3374,"ProcessoConvNumero",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3373,75,"PROCESSOCONVANO","Ano","","ProcessoConvAno","int",0,"px",4,4,"right",null,[],3373,"ProcessoConvAno",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3372,76,"PROCESSOCONVEMPRESAID","Empresa","","ProcessoConvEmpresaId","char",0,"px",10,10,"left",null,[],3372,"ProcessoConvEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE11",grid:0};
   GXValidFnc[8]={fld:"TABLE12",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE14",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVNUMERO",gxz:"ZV30ProcessoConvNumero",gxold:"OV30ProcessoConvNumero",gxvar:"AV30ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ProcessoConvNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVNUMERO",gx.O.AV30ProcessoConvNumero,0)},c2v:function(){gx.O.AV30ProcessoConvNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOCONVANO",gxz:"ZV31ProcessoConvAno",gxold:"OV31ProcessoConvAno",gxvar:"AV31ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ProcessoConvAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVANO",gx.O.AV31ProcessoConvAno,0)},c2v:function(){gx.O.AV31ProcessoConvAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVANO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE13",grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDTINICIO",gxz:"ZV27DtInicio",gxold:"OV27DtInicio",gxvar:"AV27DtInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DtInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DtInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINICIO",gx.O.AV27DtInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27DtInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDTFINAL",gxz:"ZV28DtFinal",gxold:"OV28DtFinal",gxvar:"AV28DtFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DtFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28DtFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFINAL",gx.O.AV28DtFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28DtFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOSPROCESSOTIPO",gxz:"ZV34LancamentosProcessoTipo",gxold:"OV34LancamentosProcessoTipo",gxvar:"AV34LancamentosProcessoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV34LancamentosProcessoTipo=Value},v2z:function(Value){gx.O.ZV34LancamentosProcessoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vLANCAMENTOSPROCESSOTIPO",gx.O.AV34LancamentosProcessoTipo)},c2v:function(){gx.O.AV34LancamentosProcessoTipo=this.val()},val:function(){return gx.fn.getControlValue("vLANCAMENTOSPROCESSOTIPO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLE4",grid:0};
   GXValidFnc[45]={fld:"TABLE10",grid:0};
   GXValidFnc[48]={fld:"IMAGE2",grid:0};
   GXValidFnc[50]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[52]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[54]={fld:"BTNHELP",grid:0};
   GXValidFnc[56]={fld:"TABLE5",grid:0};
   GXValidFnc[59]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNUMANOPROCESSO",gxz:"ZV33NumAnoProcesso",gxold:"OV33NumAnoProcesso",gxvar:"AV33NumAnoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV33NumAnoProcesso=Value},v2z:function(Value){gx.O.ZV33NumAnoProcesso=Value},v2c:function(row){gx.fn.setGridControlValue("vNUMANOPROCESSO",row || gx.fn.currentGridRowImpl(65),gx.O.AV33NumAnoProcesso,0)},c2v:function(){gx.O.AV33NumAnoProcesso=this.val()},val:function(row){return gx.fn.getGridControlValue("vNUMANOPROCESSO",row || gx.fn.currentGridRowImpl(65))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOSPROCESSODATA",gxz:"Z6420LancamentosProcessoData",gxold:"O6420LancamentosProcessoData",gxvar:"A6420LancamentosProcessoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6420LancamentosProcessoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6420LancamentosProcessoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOSPROCESSODATA",row || gx.fn.currentGridRowImpl(65),gx.O.A6420LancamentosProcessoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6420LancamentosProcessoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOSPROCESSODATA",row || gx.fn.currentGridRowImpl(65))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOSPROCESSOTIPO",gxz:"Z6421LancamentosProcessoTipo",gxold:"O6421LancamentosProcessoTipo",gxvar:"A6421LancamentosProcessoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6421LancamentosProcessoTipo=Value},v2z:function(Value){gx.O.Z6421LancamentosProcessoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOSPROCESSOTIPO",row || gx.fn.currentGridRowImpl(65),gx.O.A6421LancamentosProcessoTipo,0)},c2v:function(){gx.O.A6421LancamentosProcessoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOSPROCESSOTIPO",row || gx.fn.currentGridRowImpl(65))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOSPROCESSOVALOR",gxz:"Z6422LancamentosProcessoValor",gxold:"O6422LancamentosProcessoValor",gxvar:"A6422LancamentosProcessoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6422LancamentosProcessoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6422LancamentosProcessoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOSPROCESSOVALOR",row || gx.fn.currentGridRowImpl(65),gx.O.A6422LancamentosProcessoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6422LancamentosProcessoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOSPROCESSOVALOR",row || gx.fn.currentGridRowImpl(65),'.',',')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(65),gx.O.AV7bmpAlt,gx.O.AV40Bmpalt_GXI)},c2v:function(){gx.O.AV40Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(65))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(65))}, gxvar_GXI:'AV40Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(65),gx.O.AV8bmpExc,gx.O.AV41Bmpexc_GXI)},c2v:function(){gx.O.AV41Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(65))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(65))}, gxvar_GXI:'AV41Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(65),gx.O.AV16bmpCon,gx.O.AV42Bmpcon_GXI)},c2v:function(){gx.O.AV42Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(65))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(65))}, gxvar_GXI:'AV42Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOSPROCESSOSEQ",gxz:"Z6426LancamentosProcessoSeq",gxold:"O6426LancamentosProcessoSeq",gxvar:"A6426LancamentosProcessoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6426LancamentosProcessoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6426LancamentosProcessoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOSPROCESSOSEQ",row || gx.fn.currentGridRowImpl(65),gx.O.A6426LancamentosProcessoSeq,0)},c2v:function(){gx.O.A6426LancamentosProcessoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOSPROCESSOSEQ",row || gx.fn.currentGridRowImpl(65),'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVNUMERO",gxz:"Z3374ProcessoConvNumero",gxold:"O3374ProcessoConvNumero",gxvar:"A3374ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3374ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3374ProcessoConvNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVNUMERO",row || gx.fn.currentGridRowImpl(65),gx.O.A3374ProcessoConvNumero,0)},c2v:function(){gx.O.A3374ProcessoConvNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOCONVNUMERO",row || gx.fn.currentGridRowImpl(65),'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVANO",gxz:"Z3373ProcessoConvAno",gxold:"O3373ProcessoConvAno",gxvar:"A3373ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3373ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3373ProcessoConvAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVANO",row || gx.fn.currentGridRowImpl(65),gx.O.A3373ProcessoConvAno,0)},c2v:function(){gx.O.A3373ProcessoConvAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOCONVANO",row || gx.fn.currentGridRowImpl(65),'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:65,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVEMPRESAID",gxz:"Z3372ProcessoConvEmpresaId",gxold:"O3372ProcessoConvEmpresaId",gxvar:"A3372ProcessoConvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3372ProcessoConvEmpresaId=Value},v2z:function(Value){gx.O.Z3372ProcessoConvEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVEMPRESAID",row || gx.fn.currentGridRowImpl(65),gx.O.A3372ProcessoConvEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3372ProcessoConvEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOCONVEMPRESAID",row || gx.fn.currentGridRowImpl(65))},nac:gx.falseFn};
   GXValidFnc[83]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV30ProcessoConvNumero = 0 ;
   this.ZV30ProcessoConvNumero = 0 ;
   this.OV30ProcessoConvNumero = 0 ;
   this.AV31ProcessoConvAno = 0 ;
   this.ZV31ProcessoConvAno = 0 ;
   this.OV31ProcessoConvAno = 0 ;
   this.AV27DtInicio = gx.date.nullDate() ;
   this.ZV27DtInicio = gx.date.nullDate() ;
   this.OV27DtInicio = gx.date.nullDate() ;
   this.AV28DtFinal = gx.date.nullDate() ;
   this.ZV28DtFinal = gx.date.nullDate() ;
   this.OV28DtFinal = gx.date.nullDate() ;
   this.AV34LancamentosProcessoTipo = "" ;
   this.ZV34LancamentosProcessoTipo = "" ;
   this.OV34LancamentosProcessoTipo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.ZV33NumAnoProcesso = "" ;
   this.OV33NumAnoProcesso = "" ;
   this.Z6420LancamentosProcessoData = gx.date.nullDate() ;
   this.O6420LancamentosProcessoData = gx.date.nullDate() ;
   this.Z6421LancamentosProcessoTipo = "" ;
   this.O6421LancamentosProcessoTipo = "" ;
   this.Z6422LancamentosProcessoValor = 0 ;
   this.O6422LancamentosProcessoValor = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z6426LancamentosProcessoSeq = 0 ;
   this.O6426LancamentosProcessoSeq = 0 ;
   this.Z3374ProcessoConvNumero = 0 ;
   this.O3374ProcessoConvNumero = 0 ;
   this.Z3373ProcessoConvAno = 0 ;
   this.O3373ProcessoConvAno = 0 ;
   this.Z3372ProcessoConvEmpresaId = "" ;
   this.O3372ProcessoConvEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV30ProcessoConvNumero = 0 ;
   this.AV31ProcessoConvAno = 0 ;
   this.AV27DtInicio = gx.date.nullDate() ;
   this.AV28DtFinal = gx.date.nullDate() ;
   this.AV34LancamentosProcessoTipo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV33NumAnoProcesso = "" ;
   this.A6420LancamentosProcessoData = gx.date.nullDate() ;
   this.A6421LancamentosProcessoTipo = "" ;
   this.A6422LancamentosProcessoValor = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A6426LancamentosProcessoSeq = 0 ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.AV32ProcessoConvEmpresaId = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.AV29tpErro = 0 ;
   this.Events = {"e11xp2_client": ["'ANTERIOR'", true] ,"e12xp2_client": ["'PROXIMO'", true] ,"e16xp2_client": ["VPAGINA.CLICK", true] ,"e13xp2_client": ["'NOVO'", true] ,"e14xp2_client": ["'FECHAR'", true] ,"e15xp2_client": ["'PROCURAR'", true] ,"e20xp2_client": ["'ALTERAR'", true] ,"e21xp2_client": ["'EXCLUIR'", true] ,"e22xp2_client": ["'CONSULTAR'", true] ,"e23xp2_client": ["'ATUALIZAPAGINA'", true] ,"e24xp2_client": ["ENTER", true] ,"e25xp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV27DtInicio',fld:'vDTINICIO'},{av:'AV28DtFinal',fld:'vDTFINAL'},{av:'AV34LancamentosProcessoTipo',fld:'vLANCAMENTOSPROCESSOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV27DtInicio',fld:'vDTINICIO'},{av:'AV28DtFinal',fld:'vDTFINAL'},{av:'AV34LancamentosProcessoTipo',fld:'vLANCAMENTOSPROCESSOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'}],[{ctrl:'vNUMANOPROCESSO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vNUMANOPROCESSO","Title")',ctrl:'vNUMANOPROCESSO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'LANCAMENTOSPROCESSODATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOSPROCESSODATA","Title")',ctrl:'LANCAMENTOSPROCESSODATA',prop:'Title'},{ctrl:'LANCAMENTOSPROCESSOTIPO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOSPROCESSOTIPO","Title")',ctrl:'LANCAMENTOSPROCESSOTIPO',prop:'Title'},{ctrl:'LANCAMENTOSPROCESSOVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOSPROCESSOVALOR","Title")',ctrl:'LANCAMENTOSPROCESSOVALOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV27DtInicio',fld:'vDTINICIO'},{av:'AV28DtFinal',fld:'vDTFINAL'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'}],[{av:'AV33NumAnoProcesso',fld:'vNUMANOPROCESSO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV27DtInicio',fld:'vDTINICIO'},{av:'AV28DtFinal',fld:'vDTFINAL'},{av:'AV34LancamentosProcessoTipo',fld:'vLANCAMENTOSPROCESSOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV27DtInicio',fld:'vDTINICIO'},{av:'AV28DtFinal',fld:'vDTFINAL'},{av:'AV34LancamentosProcessoTipo',fld:'vLANCAMENTOSPROCESSOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV27DtInicio',fld:'vDTINICIO'},{av:'AV28DtFinal',fld:'vDTFINAL'},{av:'AV34LancamentosProcessoTipo',fld:'vLANCAMENTOSPROCESSOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV27DtInicio',fld:'vDTINICIO'},{av:'AV28DtFinal',fld:'vDTFINAL'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV27DtInicio',fld:'vDTINICIO'},{av:'AV28DtFinal',fld:'vDTFINAL'},{av:'AV34LancamentosProcessoTipo',fld:'vLANCAMENTOSPROCESSOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'AV29tpErro',fld:'vTPERRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29tpErro',fld:'vTPERRO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A6426LancamentosProcessoSeq',fld:'LANCAMENTOSPROCESSOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV27DtInicio',fld:'vDTINICIO'},{av:'AV28DtFinal',fld:'vDTFINAL'}],[{av:'A6426LancamentosProcessoSeq',fld:'LANCAMENTOSPROCESSOSEQ'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A6426LancamentosProcessoSeq',fld:'LANCAMENTOSPROCESSOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV27DtInicio',fld:'vDTINICIO'},{av:'AV28DtFinal',fld:'vDTFINAL'}],[{av:'A6426LancamentosProcessoSeq',fld:'LANCAMENTOSPROCESSOSEQ'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A6426LancamentosProcessoSeq',fld:'LANCAMENTOSPROCESSOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV27DtInicio',fld:'vDTINICIO'},{av:'AV28DtFinal',fld:'vDTFINAL'}],[{av:'A6426LancamentosProcessoSeq',fld:'LANCAMENTOSPROCESSOSEQ'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'AV31ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV27DtInicio',fld:'vDTINICIO'},{av:'AV28DtFinal',fld:'vDTFINAL'},{av:'AV34LancamentosProcessoTipo',fld:'vLANCAMENTOSPROCESSOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ProcessoConvEmpresaId',fld:'vPROCESSOCONVEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3374ProcessoConvNumero',fld:'PROCESSOCONVNUMERO'},{av:'A3373ProcessoConvAno',fld:'PROCESSOCONVANO'}],[]];
   this.setVCMap("AV32ProcessoConvEmpresaId", "vPROCESSOCONVEMPRESAID", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV32ProcessoConvEmpresaId", "vPROCESSOCONVEMPRESAID", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar(this.GXValidFnc[84]);
   GridContainer.addRefreshingVar({rfrVar:"AV32ProcessoConvEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV35SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A3374ProcessoConvNumero", rfrProp:"Value", gxAttId:"3374"});
   GridContainer.addRefreshingVar({rfrVar:"A3373ProcessoConvAno", rfrProp:"Value", gxAttId:"3373"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlancamentosprocesso());
