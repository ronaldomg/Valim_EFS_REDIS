/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:2:56.85
*/
gx.evt.autoSkip = false;
gx.define('hordemservicofase', false, function () {
   this.ServerClass =  "hordemservicofase" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV39SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV42Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A8603OrdemServicoFaseSNFechar=gx.fn.getControlValue("ORDEMSERVICOFASESNFECHAR") ;
      this.A8805OrdemServicoFaseSNBaixaEstoque=gx.fn.getControlValue("ORDEMSERVICOFASESNBAIXAESTOQUE") ;
      this.A8806OrdemServicoFaseSNExigeProduto=gx.fn.getControlValue("ORDEMSERVICOFASESNEXIGEPRODUTO") ;
      this.A8807OrdemServicoFaseSNExigeServico=gx.fn.getControlValue("ORDEMSERVICOFASESNEXIGESERVICO") ;
   };
   this.e111bg2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121bg2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171bg2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131bg2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141bg2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151bg2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161bg2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201bg2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e211bg2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e221bg2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e241bg2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e251bg2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e261bg2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,57,58,59,60,61,62,69,70,71];
   this.GXLastCtrlId =71;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hordemservicofase",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8607,49,"ORDEMSERVICOFASEID","","","OrdemServicoFaseId","int",0,"px",2,2,"right",null,[],8607,"OrdemServicoFaseId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Ordemservicofasedescricaogrid",50,"vORDEMSERVICOFASEDESCRICAOGRID","","","OrdemServicoFaseDescricaoGrid","svchar",0,"px",30,30,"left",null,[],"Ordemservicofasedescricaogrid","OrdemServicoFaseDescricaoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Ordemservicofaseobservacaogrid",51,"vORDEMSERVICOFASEOBSERVACAOGRID","","","OrdemServicoFaseObservacaoGrid","svchar",0,"px",100,80,"left",null,[],"Ordemservicofaseobservacaogrid","OrdemServicoFaseObservacaoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Ordemservicofasesnfechar","vORDEMSERVICOFASESNFECHAR",52,0,"px",17,"px",null,"","Fechar","Image","GridColumnImage");
   GridContainer.addBitmap("&Ordemservicofasesnbaixaestoque","vORDEMSERVICOFASESNBAIXAESTOQUE",53,0,"px",17,"px",null,"","Baixa Estoque","Image","GridColumnImage");
   GridContainer.addBitmap("&Ordemservicofasesnexigeproduto","vORDEMSERVICOFASESNEXIGEPRODUTO",54,0,"px",17,"px",null,"","Exige Produto","Image","GridColumnImage");
   GridContainer.addBitmap("&Ordemservicofasesnexigeservico","vORDEMSERVICOFASESNEXIGESERVICO",55,0,"px",17,"px",null,"","Exige Serviço","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",56,0,"px",17,"px","e201bg2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",57,0,"px",17,"px","e211bg2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",58,0,"px",17,"px","e221bg2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8606,59,"ORDEMSERVICOFASEEMPRESAID","Código da Empresa da Fase","","OrdemServicoFaseEmpresaId","char",0,"px",10,10,"left",null,[],8606,"OrdemServicoFaseEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8600,60,"ORDEMSERVICOFASEDESCRICAO","Descricao da Fase","","OrdemServicoFaseDescricao","svchar",0,"px",30,30,"left",null,[],8600,"OrdemServicoFaseDescricao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8601,61,"ORDEMSERVICOFASEOBSERVACAO","Observação","","OrdemServicoFaseObservacao","svchar",0,"px",100,80,"left",null,[],8601,"OrdemServicoFaseObservacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8602,62,"ORDEMSERVICOFASECORLETRA","Cor da Letra","","OrdemServicoFaseCorLetra","int",0,"px",2,2,"right",null,[],8602,"OrdemServicoFaseCorLetra",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICOFASEID",gxz:"ZV27OrdemServicoFaseId",gxold:"OV27OrdemServicoFaseId",gxvar:"AV27OrdemServicoFaseId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27OrdemServicoFaseId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27OrdemServicoFaseId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOFASEID",gx.O.AV27OrdemServicoFaseId,0)},c2v:function(){gx.O.AV27OrdemServicoFaseId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOFASEID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICOFASEDESCRICAO",gxz:"ZV29OrdemServicoFaseDescricao",gxold:"OV29OrdemServicoFaseDescricao",gxvar:"AV29OrdemServicoFaseDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29OrdemServicoFaseDescricao=Value},v2z:function(Value){gx.O.ZV29OrdemServicoFaseDescricao=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOFASEDESCRICAO",gx.O.AV29OrdemServicoFaseDescricao,0)},c2v:function(){gx.O.AV29OrdemServicoFaseDescricao=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOFASEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEID",gxz:"Z8607OrdemServicoFaseId",gxold:"O8607OrdemServicoFaseId",gxvar:"A8607OrdemServicoFaseId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8607OrdemServicoFaseId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8607OrdemServicoFaseId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOFASEID",row || gx.fn.currentGridRowImpl(48),gx.O.A8607OrdemServicoFaseId,0)},c2v:function(){gx.O.A8607OrdemServicoFaseId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOFASEID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASEDESCRICAOGRID",gxz:"ZV31OrdemServicoFaseDescricaoGrid",gxold:"OV31OrdemServicoFaseDescricaoGrid",gxvar:"AV31OrdemServicoFaseDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31OrdemServicoFaseDescricaoGrid=Value},v2z:function(Value){gx.O.ZV31OrdemServicoFaseDescricaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vORDEMSERVICOFASEDESCRICAOGRID",row || gx.fn.currentGridRowImpl(48),gx.O.AV31OrdemServicoFaseDescricaoGrid,0)},c2v:function(){gx.O.AV31OrdemServicoFaseDescricaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vORDEMSERVICOFASEDESCRICAOGRID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASEOBSERVACAOGRID",gxz:"ZV32OrdemServicoFaseObservacaoGrid",gxold:"OV32OrdemServicoFaseObservacaoGrid",gxvar:"AV32OrdemServicoFaseObservacaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32OrdemServicoFaseObservacaoGrid=Value},v2z:function(Value){gx.O.ZV32OrdemServicoFaseObservacaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vORDEMSERVICOFASEOBSERVACAOGRID",row || gx.fn.currentGridRowImpl(48),gx.O.AV32OrdemServicoFaseObservacaoGrid,0)},c2v:function(){gx.O.AV32OrdemServicoFaseObservacaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vORDEMSERVICOFASEOBSERVACAOGRID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASESNFECHAR",gxz:"ZV33OrdemServicoFaseSNFechar",gxold:"OV33OrdemServicoFaseSNFechar",gxvar:"AV33OrdemServicoFaseSNFechar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33OrdemServicoFaseSNFechar=Value},v2z:function(Value){gx.O.ZV33OrdemServicoFaseSNFechar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vORDEMSERVICOFASESNFECHAR",row || gx.fn.currentGridRowImpl(48),gx.O.AV33OrdemServicoFaseSNFechar,gx.O.AV47Ordemservicofasesnfechar_GXI)},c2v:function(){gx.O.AV47Ordemservicofasesnfechar_GXI=this.val_GXI();gx.O.AV33OrdemServicoFaseSNFechar=this.val()},val:function(row){return gx.fn.getGridControlValue("vORDEMSERVICOFASESNFECHAR",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vORDEMSERVICOFASESNFECHAR_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV47Ordemservicofasesnfechar_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASESNBAIXAESTOQUE",gxz:"ZV34OrdemServicoFaseSNBaixaEstoque",gxold:"OV34OrdemServicoFaseSNBaixaEstoque",gxvar:"AV34OrdemServicoFaseSNBaixaEstoque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34OrdemServicoFaseSNBaixaEstoque=Value},v2z:function(Value){gx.O.ZV34OrdemServicoFaseSNBaixaEstoque=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vORDEMSERVICOFASESNBAIXAESTOQUE",row || gx.fn.currentGridRowImpl(48),gx.O.AV34OrdemServicoFaseSNBaixaEstoque,gx.O.AV48Ordemservicofasesnbaixaestoque_GXI)},c2v:function(){gx.O.AV48Ordemservicofasesnbaixaestoque_GXI=this.val_GXI();gx.O.AV34OrdemServicoFaseSNBaixaEstoque=this.val()},val:function(row){return gx.fn.getGridControlValue("vORDEMSERVICOFASESNBAIXAESTOQUE",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vORDEMSERVICOFASESNBAIXAESTOQUE_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV48Ordemservicofasesnbaixaestoque_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASESNEXIGEPRODUTO",gxz:"ZV35OrdemServicoFaseSNExigeProduto",gxold:"OV35OrdemServicoFaseSNExigeProduto",gxvar:"AV35OrdemServicoFaseSNExigeProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35OrdemServicoFaseSNExigeProduto=Value},v2z:function(Value){gx.O.ZV35OrdemServicoFaseSNExigeProduto=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vORDEMSERVICOFASESNEXIGEPRODUTO",row || gx.fn.currentGridRowImpl(48),gx.O.AV35OrdemServicoFaseSNExigeProduto,gx.O.AV49Ordemservicofasesnexigeproduto_GXI)},c2v:function(){gx.O.AV49Ordemservicofasesnexigeproduto_GXI=this.val_GXI();gx.O.AV35OrdemServicoFaseSNExigeProduto=this.val()},val:function(row){return gx.fn.getGridControlValue("vORDEMSERVICOFASESNEXIGEPRODUTO",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vORDEMSERVICOFASESNEXIGEPRODUTO_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV49Ordemservicofasesnexigeproduto_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASESNEXIGESERVICO",gxz:"ZV36OrdemServicoFaseSNExigeServico",gxold:"OV36OrdemServicoFaseSNExigeServico",gxvar:"AV36OrdemServicoFaseSNExigeServico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36OrdemServicoFaseSNExigeServico=Value},v2z:function(Value){gx.O.ZV36OrdemServicoFaseSNExigeServico=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vORDEMSERVICOFASESNEXIGESERVICO",row || gx.fn.currentGridRowImpl(48),gx.O.AV36OrdemServicoFaseSNExigeServico,gx.O.AV50Ordemservicofasesnexigeservico_GXI)},c2v:function(){gx.O.AV50Ordemservicofasesnexigeservico_GXI=this.val_GXI();gx.O.AV36OrdemServicoFaseSNExigeServico=this.val()},val:function(row){return gx.fn.getGridControlValue("vORDEMSERVICOFASESNEXIGESERVICO",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vORDEMSERVICOFASESNEXIGESERVICO_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV50Ordemservicofasesnexigeservico_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV44Bmpalt_GXI)},c2v:function(){gx.O.AV44Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV44Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV45Bmpexc_GXI)},c2v:function(){gx.O.AV45Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV45Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV46Bmpcon_GXI)},c2v:function(){gx.O.AV46Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV46Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEEMPRESAID",gxz:"Z8606OrdemServicoFaseEmpresaId",gxold:"O8606OrdemServicoFaseEmpresaId",gxvar:"A8606OrdemServicoFaseEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8606OrdemServicoFaseEmpresaId=Value},v2z:function(Value){gx.O.Z8606OrdemServicoFaseEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOFASEEMPRESAID",row || gx.fn.currentGridRowImpl(48),gx.O.A8606OrdemServicoFaseEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8606OrdemServicoFaseEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOFASEEMPRESAID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEDESCRICAO",gxz:"Z8600OrdemServicoFaseDescricao",gxold:"O8600OrdemServicoFaseDescricao",gxvar:"A8600OrdemServicoFaseDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8600OrdemServicoFaseDescricao=Value},v2z:function(Value){gx.O.Z8600OrdemServicoFaseDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOFASEDESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A8600OrdemServicoFaseDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8600OrdemServicoFaseDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOFASEDESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEOBSERVACAO",gxz:"Z8601OrdemServicoFaseObservacao",gxold:"O8601OrdemServicoFaseObservacao",gxvar:"A8601OrdemServicoFaseObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8601OrdemServicoFaseObservacao=Value},v2z:function(Value){gx.O.Z8601OrdemServicoFaseObservacao=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOFASEOBSERVACAO",row || gx.fn.currentGridRowImpl(48),gx.O.A8601OrdemServicoFaseObservacao,0)},c2v:function(){gx.O.A8601OrdemServicoFaseObservacao=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOFASEOBSERVACAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASECORLETRA",gxz:"Z8602OrdemServicoFaseCorLetra",gxold:"O8602OrdemServicoFaseCorLetra",gxvar:"A8602OrdemServicoFaseCorLetra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8602OrdemServicoFaseCorLetra=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8602OrdemServicoFaseCorLetra=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOFASECORLETRA",row || gx.fn.currentGridRowImpl(48),gx.O.A8602OrdemServicoFaseCorLetra,0)},c2v:function(){gx.O.A8602OrdemServicoFaseCorLetra=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOFASECORLETRA",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.AV27OrdemServicoFaseId = 0 ;
   this.ZV27OrdemServicoFaseId = 0 ;
   this.OV27OrdemServicoFaseId = 0 ;
   this.AV29OrdemServicoFaseDescricao = "" ;
   this.ZV29OrdemServicoFaseDescricao = "" ;
   this.OV29OrdemServicoFaseDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8607OrdemServicoFaseId = 0 ;
   this.O8607OrdemServicoFaseId = 0 ;
   this.ZV31OrdemServicoFaseDescricaoGrid = "" ;
   this.OV31OrdemServicoFaseDescricaoGrid = "" ;
   this.ZV32OrdemServicoFaseObservacaoGrid = "" ;
   this.OV32OrdemServicoFaseObservacaoGrid = "" ;
   this.ZV33OrdemServicoFaseSNFechar = "" ;
   this.OV33OrdemServicoFaseSNFechar = "" ;
   this.ZV34OrdemServicoFaseSNBaixaEstoque = "" ;
   this.OV34OrdemServicoFaseSNBaixaEstoque = "" ;
   this.ZV35OrdemServicoFaseSNExigeProduto = "" ;
   this.OV35OrdemServicoFaseSNExigeProduto = "" ;
   this.ZV36OrdemServicoFaseSNExigeServico = "" ;
   this.OV36OrdemServicoFaseSNExigeServico = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z8606OrdemServicoFaseEmpresaId = "" ;
   this.O8606OrdemServicoFaseEmpresaId = "" ;
   this.Z8600OrdemServicoFaseDescricao = "" ;
   this.O8600OrdemServicoFaseDescricao = "" ;
   this.Z8601OrdemServicoFaseObservacao = "" ;
   this.O8601OrdemServicoFaseObservacao = "" ;
   this.Z8602OrdemServicoFaseCorLetra = 0 ;
   this.O8602OrdemServicoFaseCorLetra = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV27OrdemServicoFaseId = 0 ;
   this.AV29OrdemServicoFaseDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.A8603OrdemServicoFaseSNFechar = "" ;
   this.A8805OrdemServicoFaseSNBaixaEstoque = "" ;
   this.A8806OrdemServicoFaseSNExigeProduto = "" ;
   this.A8807OrdemServicoFaseSNExigeServico = "" ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.AV31OrdemServicoFaseDescricaoGrid = "" ;
   this.AV32OrdemServicoFaseObservacaoGrid = "" ;
   this.AV33OrdemServicoFaseSNFechar = "" ;
   this.AV34OrdemServicoFaseSNBaixaEstoque = "" ;
   this.AV35OrdemServicoFaseSNExigeProduto = "" ;
   this.AV36OrdemServicoFaseSNExigeServico = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A8606OrdemServicoFaseEmpresaId = "" ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.A8601OrdemServicoFaseObservacao = "" ;
   this.A8602OrdemServicoFaseCorLetra = 0 ;
   this.AV39SnRecuperaFiltro = "" ;
   this.AV42Pgmname = "" ;
   this.Events = {"e111bg2_client": ["'ANTERIOR'", true] ,"e121bg2_client": ["'PROXIMO'", true] ,"e171bg2_client": ["VPAGINA.CLICK", true] ,"e131bg2_client": ["'NOVO'", true] ,"e141bg2_client": ["'FECHAR'", true] ,"e151bg2_client": ["'IMPRIMIR'", true] ,"e161bg2_client": ["'PROCURAR'", true] ,"e201bg2_client": ["'ALTERAR'", true] ,"e211bg2_client": ["'EXCLUIR'", true] ,"e221bg2_client": ["'CONSULTAR'", true] ,"e241bg2_client": ["'ATUALIZAPAGINA'", true] ,"e251bg2_client": ["ENTER", true] ,"e261bg2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8601OrdemServicoFaseObservacao',fld:'ORDEMSERVICOFASEOBSERVACAO'},{av:'A8603OrdemServicoFaseSNFechar',fld:'ORDEMSERVICOFASESNFECHAR'},{av:'A8805OrdemServicoFaseSNBaixaEstoque',fld:'ORDEMSERVICOFASESNBAIXAESTOQUE'},{av:'A8806OrdemServicoFaseSNExigeProduto',fld:'ORDEMSERVICOFASESNEXIGEPRODUTO'},{av:'A8807OrdemServicoFaseSNExigeServico',fld:'ORDEMSERVICOFASESNEXIGESERVICO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8601OrdemServicoFaseObservacao',fld:'ORDEMSERVICOFASEOBSERVACAO'},{av:'A8603OrdemServicoFaseSNFechar',fld:'ORDEMSERVICOFASESNFECHAR'},{av:'A8805OrdemServicoFaseSNBaixaEstoque',fld:'ORDEMSERVICOFASESNBAIXAESTOQUE'},{av:'A8806OrdemServicoFaseSNExigeProduto',fld:'ORDEMSERVICOFASESNEXIGEPRODUTO'},{av:'A8807OrdemServicoFaseSNExigeServico',fld:'ORDEMSERVICOFASESNEXIGESERVICO'}],[{ctrl:'ORDEMSERVICOFASEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORDEMSERVICOFASEID","Title")',ctrl:'ORDEMSERVICOFASEID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vORDEMSERVICOFASEDESCRICAOGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOFASEDESCRICAOGRID","Title")',ctrl:'vORDEMSERVICOFASEDESCRICAOGRID',prop:'Title'},{ctrl:'vORDEMSERVICOFASEOBSERVACAOGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOFASEOBSERVACAOGRID","Title")',ctrl:'vORDEMSERVICOFASEOBSERVACAOGRID',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8601OrdemServicoFaseObservacao',fld:'ORDEMSERVICOFASEOBSERVACAO'},{av:'A8603OrdemServicoFaseSNFechar',fld:'ORDEMSERVICOFASESNFECHAR'},{av:'A8805OrdemServicoFaseSNBaixaEstoque',fld:'ORDEMSERVICOFASESNBAIXAESTOQUE'},{av:'A8806OrdemServicoFaseSNExigeProduto',fld:'ORDEMSERVICOFASESNEXIGEPRODUTO'},{av:'A8807OrdemServicoFaseSNExigeServico',fld:'ORDEMSERVICOFASESNEXIGESERVICO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8601OrdemServicoFaseObservacao',fld:'ORDEMSERVICOFASEOBSERVACAO'},{av:'A8603OrdemServicoFaseSNFechar',fld:'ORDEMSERVICOFASESNFECHAR'},{av:'A8805OrdemServicoFaseSNBaixaEstoque',fld:'ORDEMSERVICOFASESNBAIXAESTOQUE'},{av:'A8806OrdemServicoFaseSNExigeProduto',fld:'ORDEMSERVICOFASESNEXIGEPRODUTO'},{av:'A8807OrdemServicoFaseSNExigeServico',fld:'ORDEMSERVICOFASESNEXIGESERVICO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8601OrdemServicoFaseObservacao',fld:'ORDEMSERVICOFASEOBSERVACAO'},{av:'A8603OrdemServicoFaseSNFechar',fld:'ORDEMSERVICOFASESNFECHAR'},{av:'A8805OrdemServicoFaseSNBaixaEstoque',fld:'ORDEMSERVICOFASESNBAIXAESTOQUE'},{av:'A8806OrdemServicoFaseSNExigeProduto',fld:'ORDEMSERVICOFASESNEXIGEPRODUTO'},{av:'A8807OrdemServicoFaseSNExigeServico',fld:'ORDEMSERVICOFASESNEXIGESERVICO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV38QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV43Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV38QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8601OrdemServicoFaseObservacao',fld:'ORDEMSERVICOFASEOBSERVACAO'},{av:'A8603OrdemServicoFaseSNFechar',fld:'ORDEMSERVICOFASESNFECHAR'},{av:'A8805OrdemServicoFaseSNBaixaEstoque',fld:'ORDEMSERVICOFASESNBAIXAESTOQUE'},{av:'A8806OrdemServicoFaseSNExigeProduto',fld:'ORDEMSERVICOFASESNEXIGEPRODUTO'},{av:'A8807OrdemServicoFaseSNExigeServico',fld:'ORDEMSERVICOFASESNEXIGESERVICO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A8602OrdemServicoFaseCorLetra',fld:'ORDEMSERVICOFASECORLETRA'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8601OrdemServicoFaseObservacao',fld:'ORDEMSERVICOFASEOBSERVACAO'},{av:'A8603OrdemServicoFaseSNFechar',fld:'ORDEMSERVICOFASESNFECHAR'},{av:'A8805OrdemServicoFaseSNBaixaEstoque',fld:'ORDEMSERVICOFASESNBAIXAESTOQUE'},{av:'A8806OrdemServicoFaseSNExigeProduto',fld:'ORDEMSERVICOFASESNEXIGEPRODUTO'},{av:'A8807OrdemServicoFaseSNExigeServico',fld:'ORDEMSERVICOFASESNEXIGESERVICO'}],[{av:'AV31OrdemServicoFaseDescricaoGrid',fld:'vORDEMSERVICOFASEDESCRICAOGRID'},{av:'AV32OrdemServicoFaseObservacaoGrid',fld:'vORDEMSERVICOFASEOBSERVACAOGRID'},{av:'AV33OrdemServicoFaseSNFechar',fld:'vORDEMSERVICOFASESNFECHAR'},{av:'AV34OrdemServicoFaseSNBaixaEstoque',fld:'vORDEMSERVICOFASESNBAIXAESTOQUE'},{av:'AV35OrdemServicoFaseSNExigeProduto',fld:'vORDEMSERVICOFASESNEXIGEPRODUTO'},{av:'AV36OrdemServicoFaseSNExigeServico',fld:'vORDEMSERVICOFASESNEXIGESERVICO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV29OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'A8601OrdemServicoFaseObservacao',fld:'ORDEMSERVICOFASEOBSERVACAO'},{av:'A8603OrdemServicoFaseSNFechar',fld:'ORDEMSERVICOFASESNFECHAR'},{av:'A8805OrdemServicoFaseSNBaixaEstoque',fld:'ORDEMSERVICOFASESNBAIXAESTOQUE'},{av:'A8806OrdemServicoFaseSNExigeProduto',fld:'ORDEMSERVICOFASESNEXIGEPRODUTO'},{av:'A8807OrdemServicoFaseSNExigeServico',fld:'ORDEMSERVICOFASESNEXIGESERVICO'}],[]];
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A8603OrdemServicoFaseSNFechar", "ORDEMSERVICOFASESNFECHAR", 0, "char");
   this.setVCMap("A8805OrdemServicoFaseSNBaixaEstoque", "ORDEMSERVICOFASESNBAIXAESTOQUE", 0, "char");
   this.setVCMap("A8806OrdemServicoFaseSNExigeProduto", "ORDEMSERVICOFASESNEXIGEPRODUTO", 0, "char");
   this.setVCMap("A8807OrdemServicoFaseSNExigeServico", "ORDEMSERVICOFASESNEXIGESERVICO", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A8603OrdemServicoFaseSNFechar", "ORDEMSERVICOFASESNFECHAR", 0, "char");
   this.setVCMap("A8805OrdemServicoFaseSNBaixaEstoque", "ORDEMSERVICOFASESNBAIXAESTOQUE", 0, "char");
   this.setVCMap("A8806OrdemServicoFaseSNExigeProduto", "ORDEMSERVICOFASESNEXIGEPRODUTO", 0, "char");
   this.setVCMap("A8807OrdemServicoFaseSNExigeServico", "ORDEMSERVICOFASESNEXIGESERVICO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV39SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV42Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A8600OrdemServicoFaseDescricao", rfrProp:"Value", gxAttId:"8600"});
   GridContainer.addRefreshingVar({rfrVar:"A8601OrdemServicoFaseObservacao", rfrProp:"Value", gxAttId:"8601"});
   GridContainer.addRefreshingVar({rfrVar:"A8603OrdemServicoFaseSNFechar"});
   GridContainer.addRefreshingVar({rfrVar:"A8805OrdemServicoFaseSNBaixaEstoque"});
   GridContainer.addRefreshingVar({rfrVar:"A8806OrdemServicoFaseSNExigeProduto"});
   GridContainer.addRefreshingVar({rfrVar:"A8807OrdemServicoFaseSNExigeServico"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hordemservicofase());
