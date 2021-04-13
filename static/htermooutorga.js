/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:48:16.84
*/
gx.evt.autoSkip = false;
gx.define('htermooutorga', false, function () {
   this.ServerClass =  "htermooutorga" ;
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
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e1113j2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1213j2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1613j2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1313j2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1413j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1513j2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1913j2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2013j2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2113j2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e2213j2_client=function()
   {
      this.executeServerEvent("'ITENS'", true, arguments[0], false, false);
   };
   this.e2313j2_client=function()
   {
      this.executeServerEvent("'PARCELAS'", true, arguments[0], false, false);
   };
   this.e2413j2_client=function()
   {
      this.executeServerEvent("'DOTACAO'", true, arguments[0], false, false);
   };
   this.e2513j2_client=function()
   {
      this.executeServerEvent("'INTEGRANTE'", true, arguments[0], false, false);
   };
   this.e2713j2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2813j2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2913j2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,56,57,58,59,65];
   this.GXLastCtrlId =65;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htermooutorga",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8112,47,"TERMOOUTORGANOPROCESSO","","","TermoOutorgaNoProcesso","svchar",0,"px",20,20,"left",null,[],8112,"TermoOutorgaNoProcesso",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Descedital",48,"vDESCEDITAL","Descrição do Edital","","DescEdital","svchar",0,"px",40,40,"left",null,[],"Descedital","DescEdital",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8081,49,"TERMOOUTORGADESCEDITAL","","","TermoOutorgaDescEdital","svchar",0,"px",40,40,"left",null,[],8081,"TermoOutorgaDescEdital",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8082,50,"TERMOOUTORGATITULO","Título","","TermoOutorgaTitulo","svchar",0,"px",150,80,"left",null,[],8082,"TermoOutorgaTitulo",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Titulo",51,"vTITULO","","","Titulo","svchar",0,"px",50,50,"left",null,[],"Titulo","Titulo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8105,52,"TERMOOUTORGAVALOR","","","TermoOutorgaValor","decimal",0,"px",22,22,"right",null,[],8105,"TermoOutorgaValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpdotacao","vBMPDOTACAO",53,0,"px",17,"px","e2413j2_client","","Dotações","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpitens","vBMPITENS",54,0,"px",17,"px","e2213j2_client","","Itens","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpintegrante","vBMPINTEGRANTE",55,0,"px",17,"px","e2513j2_client","","Integrantes","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpparcela","vBMPPARCELA",56,0,"px",17,"px","e2313j2_client","","Parcelas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",57,0,"px",17,"px","e1913j2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",58,0,"px",17,"px","e2013j2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",59,0,"px",17,"px","e2113j2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTERMOOUTORGANOPROCESSO",gxz:"ZV27TermoOutorgaNoProcesso",gxold:"OV27TermoOutorgaNoProcesso",gxvar:"AV27TermoOutorgaNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.ZV27TermoOutorgaNoProcesso=Value},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGANOPROCESSO",gx.O.AV27TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.AV27TermoOutorgaNoProcesso=this.val()},val:function(){return gx.fn.getControlValue("vTERMOOUTORGANOPROCESSO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTERMOOUTORGATITULO",gxz:"ZV28TermoOutorgaTitulo",gxold:"OV28TermoOutorgaTitulo",gxvar:"AV28TermoOutorgaTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TermoOutorgaTitulo=Value},v2z:function(Value){gx.O.ZV28TermoOutorgaTitulo=Value},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGATITULO",gx.O.AV28TermoOutorgaTitulo,0)},c2v:function(){gx.O.AV28TermoOutorgaTitulo=this.val()},val:function(){return gx.fn.getControlValue("vTERMOOUTORGATITULO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE3",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOPROCESSO",gxz:"Z8112TermoOutorgaNoProcesso",gxold:"O8112TermoOutorgaNoProcesso",gxvar:"A8112TermoOutorgaNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8112TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.Z8112TermoOutorgaNoProcesso=Value},v2c:function(row){gx.fn.setGridControlValue("TERMOOUTORGANOPROCESSO",row || gx.fn.currentGridRowImpl(46),gx.O.A8112TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.A8112TermoOutorgaNoProcesso=this.val()},val:function(row){return gx.fn.getGridControlValue("TERMOOUTORGANOPROCESSO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCEDITAL",gxz:"ZV35DescEdital",gxold:"OV35DescEdital",gxvar:"AV35DescEdital",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV35DescEdital=Value},v2z:function(Value){gx.O.ZV35DescEdital=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCEDITAL",row || gx.fn.currentGridRowImpl(46),gx.O.AV35DescEdital,0)},c2v:function(){gx.O.AV35DescEdital=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCEDITAL",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGADESCEDITAL",gxz:"Z8081TermoOutorgaDescEdital",gxold:"O8081TermoOutorgaDescEdital",gxvar:"A8081TermoOutorgaDescEdital",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8081TermoOutorgaDescEdital=Value},v2z:function(Value){gx.O.Z8081TermoOutorgaDescEdital=Value},v2c:function(row){gx.fn.setGridControlValue("TERMOOUTORGADESCEDITAL",row || gx.fn.currentGridRowImpl(46),gx.O.A8081TermoOutorgaDescEdital,0)},c2v:function(){gx.O.A8081TermoOutorgaDescEdital=this.val()},val:function(row){return gx.fn.getGridControlValue("TERMOOUTORGADESCEDITAL",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:150,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGATITULO",gxz:"Z8082TermoOutorgaTitulo",gxold:"O8082TermoOutorgaTitulo",gxvar:"A8082TermoOutorgaTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8082TermoOutorgaTitulo=Value},v2z:function(Value){gx.O.Z8082TermoOutorgaTitulo=Value},v2c:function(row){gx.fn.setGridControlValue("TERMOOUTORGATITULO",row || gx.fn.currentGridRowImpl(46),gx.O.A8082TermoOutorgaTitulo,0)},c2v:function(){gx.O.A8082TermoOutorgaTitulo=this.val()},val:function(row){return gx.fn.getGridControlValue("TERMOOUTORGATITULO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTITULO",gxz:"ZV33Titulo",gxold:"OV33Titulo",gxvar:"AV33Titulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV33Titulo=Value},v2z:function(Value){gx.O.ZV33Titulo=Value},v2c:function(row){gx.fn.setGridControlValue("vTITULO",row || gx.fn.currentGridRowImpl(46),gx.O.AV33Titulo,0)},c2v:function(){gx.O.AV33Titulo=this.val()},val:function(row){return gx.fn.getGridControlValue("vTITULO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGAVALOR",gxz:"Z8105TermoOutorgaValor",gxold:"O8105TermoOutorgaValor",gxvar:"A8105TermoOutorgaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8105TermoOutorgaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8105TermoOutorgaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("TERMOOUTORGAVALOR",row || gx.fn.currentGridRowImpl(46),gx.O.A8105TermoOutorgaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8105TermoOutorgaValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("TERMOOUTORGAVALOR",row || gx.fn.currentGridRowImpl(46),'.',',')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDOTACAO",gxz:"ZV31bmpDotacao",gxold:"OV31bmpDotacao",gxvar:"AV31bmpDotacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpDotacao=Value},v2z:function(Value){gx.O.ZV31bmpDotacao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDOTACAO",row || gx.fn.currentGridRowImpl(46),gx.O.AV31bmpDotacao,gx.O.AV45Bmpdotacao_GXI)},c2v:function(){gx.O.AV45Bmpdotacao_GXI=this.val_GXI();gx.O.AV31bmpDotacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDOTACAO",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDOTACAO_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV45Bmpdotacao_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPITENS",gxz:"ZV29bmpItens",gxold:"OV29bmpItens",gxvar:"AV29bmpItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpItens=Value},v2z:function(Value){gx.O.ZV29bmpItens=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPITENS",row || gx.fn.currentGridRowImpl(46),gx.O.AV29bmpItens,gx.O.AV46Bmpitens_GXI)},c2v:function(){gx.O.AV46Bmpitens_GXI=this.val_GXI();gx.O.AV29bmpItens=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPITENS",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPITENS_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV46Bmpitens_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPINTEGRANTE",gxz:"ZV32bmpIntegrante",gxold:"OV32bmpIntegrante",gxvar:"AV32bmpIntegrante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpIntegrante=Value},v2z:function(Value){gx.O.ZV32bmpIntegrante=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPINTEGRANTE",row || gx.fn.currentGridRowImpl(46),gx.O.AV32bmpIntegrante,gx.O.AV44Bmpintegrante_GXI)},c2v:function(){gx.O.AV44Bmpintegrante_GXI=this.val_GXI();gx.O.AV32bmpIntegrante=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPINTEGRANTE",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPINTEGRANTE_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV44Bmpintegrante_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPARCELA",gxz:"ZV30bmpParcela",gxold:"OV30bmpParcela",gxvar:"AV30bmpParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpParcela=Value},v2z:function(Value){gx.O.ZV30bmpParcela=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPARCELA",row || gx.fn.currentGridRowImpl(46),gx.O.AV30bmpParcela,gx.O.AV43Bmpparcela_GXI)},c2v:function(){gx.O.AV43Bmpparcela_GXI=this.val_GXI();gx.O.AV30bmpParcela=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPARCELA",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPARCELA_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV43Bmpparcela_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV40Bmpalt_GXI)},c2v:function(){gx.O.AV40Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV40Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV41Bmpexc_GXI)},c2v:function(){gx.O.AV41Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV41Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV42Bmpcon_GXI)},c2v:function(){gx.O.AV42Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV42Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TermoOutorgaNoProcesso = "" ;
   this.ZV27TermoOutorgaNoProcesso = "" ;
   this.OV27TermoOutorgaNoProcesso = "" ;
   this.AV28TermoOutorgaTitulo = "" ;
   this.ZV28TermoOutorgaTitulo = "" ;
   this.OV28TermoOutorgaTitulo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8112TermoOutorgaNoProcesso = "" ;
   this.O8112TermoOutorgaNoProcesso = "" ;
   this.ZV35DescEdital = "" ;
   this.OV35DescEdital = "" ;
   this.Z8081TermoOutorgaDescEdital = "" ;
   this.O8081TermoOutorgaDescEdital = "" ;
   this.Z8082TermoOutorgaTitulo = "" ;
   this.O8082TermoOutorgaTitulo = "" ;
   this.ZV33Titulo = "" ;
   this.OV33Titulo = "" ;
   this.Z8105TermoOutorgaValor = 0 ;
   this.O8105TermoOutorgaValor = 0 ;
   this.ZV31bmpDotacao = "" ;
   this.OV31bmpDotacao = "" ;
   this.ZV29bmpItens = "" ;
   this.OV29bmpItens = "" ;
   this.ZV32bmpIntegrante = "" ;
   this.OV32bmpIntegrante = "" ;
   this.ZV30bmpParcela = "" ;
   this.OV30bmpParcela = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TermoOutorgaNoProcesso = "" ;
   this.AV28TermoOutorgaTitulo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A8111TermoOutorgaEmpresaId = "" ;
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.AV35DescEdital = "" ;
   this.A8081TermoOutorgaDescEdital = "" ;
   this.A8082TermoOutorgaTitulo = "" ;
   this.AV33Titulo = "" ;
   this.A8105TermoOutorgaValor = 0 ;
   this.AV31bmpDotacao = "" ;
   this.AV29bmpItens = "" ;
   this.AV32bmpIntegrante = "" ;
   this.AV30bmpParcela = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV34SnRecuperaFiltro = "" ;
   this.Events = {"e1113j2_client": ["'ANTERIOR'", true] ,"e1213j2_client": ["'PROXIMO'", true] ,"e1613j2_client": ["VPAGINA.CLICK", true] ,"e1313j2_client": ["'NOVO'", true] ,"e1413j2_client": ["'FECHAR'", true] ,"e1513j2_client": ["'PROCURAR'", true] ,"e1913j2_client": ["'ALTERAR'", true] ,"e2013j2_client": ["'EXCLUIR'", true] ,"e2113j2_client": ["'CONSULTAR'", true] ,"e2213j2_client": ["'ITENS'", true] ,"e2313j2_client": ["'PARCELAS'", true] ,"e2413j2_client": ["'DOTACAO'", true] ,"e2513j2_client": ["'INTEGRANTE'", true] ,"e2713j2_client": ["'ATUALIZAPAGINA'", true] ,"e2813j2_client": ["ENTER", true] ,"e2913j2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV28TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpParcela',fld:'vBMPPARCELA'},{av:'gx.fn.getCtrlProperty("vBMPPARCELA","Tooltiptext")',ctrl:'vBMPPARCELA',prop:'Tooltiptext'},{av:'AV32bmpIntegrante',fld:'vBMPINTEGRANTE'},{av:'gx.fn.getCtrlProperty("vBMPINTEGRANTE","Tooltiptext")',ctrl:'vBMPINTEGRANTE',prop:'Tooltiptext'},{av:'AV31bmpDotacao',fld:'vBMPDOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPDOTACAO","Tooltiptext")',ctrl:'vBMPDOTACAO',prop:'Tooltiptext'},{av:'AV29bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'},{av:'A8081TermoOutorgaDescEdital',fld:'TERMOOUTORGADESCEDITAL'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV28TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpParcela',fld:'vBMPPARCELA'},{av:'gx.fn.getCtrlProperty("vBMPPARCELA","Tooltiptext")',ctrl:'vBMPPARCELA',prop:'Tooltiptext'},{av:'AV32bmpIntegrante',fld:'vBMPINTEGRANTE'},{av:'gx.fn.getCtrlProperty("vBMPINTEGRANTE","Tooltiptext")',ctrl:'vBMPINTEGRANTE',prop:'Tooltiptext'},{av:'AV31bmpDotacao',fld:'vBMPDOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPDOTACAO","Tooltiptext")',ctrl:'vBMPDOTACAO',prop:'Tooltiptext'},{av:'AV29bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'},{av:'A8081TermoOutorgaDescEdital',fld:'TERMOOUTORGADESCEDITAL'}],[{ctrl:'TERMOOUTORGANOPROCESSO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TERMOOUTORGANOPROCESSO","Title")',ctrl:'TERMOOUTORGANOPROCESSO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vTITULO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vTITULO","Title")',ctrl:'vTITULO',prop:'Title'},{ctrl:'TERMOOUTORGADESCEDITAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TERMOOUTORGADESCEDITAL","Title")',ctrl:'TERMOOUTORGADESCEDITAL',prop:'Title'},{ctrl:'TERMOOUTORGAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TERMOOUTORGAVALOR","Title")',ctrl:'TERMOOUTORGAVALOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV28TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV28TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpParcela',fld:'vBMPPARCELA'},{av:'gx.fn.getCtrlProperty("vBMPPARCELA","Tooltiptext")',ctrl:'vBMPPARCELA',prop:'Tooltiptext'},{av:'AV32bmpIntegrante',fld:'vBMPINTEGRANTE'},{av:'gx.fn.getCtrlProperty("vBMPINTEGRANTE","Tooltiptext")',ctrl:'vBMPINTEGRANTE',prop:'Tooltiptext'},{av:'AV31bmpDotacao',fld:'vBMPDOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPDOTACAO","Tooltiptext")',ctrl:'vBMPDOTACAO',prop:'Tooltiptext'},{av:'AV29bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'},{av:'A8081TermoOutorgaDescEdital',fld:'TERMOOUTORGADESCEDITAL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV28TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpParcela',fld:'vBMPPARCELA'},{av:'gx.fn.getCtrlProperty("vBMPPARCELA","Tooltiptext")',ctrl:'vBMPPARCELA',prop:'Tooltiptext'},{av:'AV32bmpIntegrante',fld:'vBMPINTEGRANTE'},{av:'gx.fn.getCtrlProperty("vBMPINTEGRANTE","Tooltiptext")',ctrl:'vBMPINTEGRANTE',prop:'Tooltiptext'},{av:'AV31bmpDotacao',fld:'vBMPDOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPDOTACAO","Tooltiptext")',ctrl:'vBMPDOTACAO',prop:'Tooltiptext'},{av:'AV29bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'},{av:'A8081TermoOutorgaDescEdital',fld:'TERMOOUTORGADESCEDITAL'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV28TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpParcela',fld:'vBMPPARCELA'},{av:'gx.fn.getCtrlProperty("vBMPPARCELA","Tooltiptext")',ctrl:'vBMPPARCELA',prop:'Tooltiptext'},{av:'AV32bmpIntegrante',fld:'vBMPINTEGRANTE'},{av:'gx.fn.getCtrlProperty("vBMPINTEGRANTE","Tooltiptext")',ctrl:'vBMPINTEGRANTE',prop:'Tooltiptext'},{av:'AV31bmpDotacao',fld:'vBMPDOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPDOTACAO","Tooltiptext")',ctrl:'vBMPDOTACAO',prop:'Tooltiptext'},{av:'AV29bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'},{av:'A8081TermoOutorgaDescEdital',fld:'TERMOOUTORGADESCEDITAL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV28TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV28TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpParcela',fld:'vBMPPARCELA'},{av:'gx.fn.getCtrlProperty("vBMPPARCELA","Tooltiptext")',ctrl:'vBMPPARCELA',prop:'Tooltiptext'},{av:'AV32bmpIntegrante',fld:'vBMPINTEGRANTE'},{av:'gx.fn.getCtrlProperty("vBMPINTEGRANTE","Tooltiptext")',ctrl:'vBMPINTEGRANTE',prop:'Tooltiptext'},{av:'AV31bmpDotacao',fld:'vBMPDOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPDOTACAO","Tooltiptext")',ctrl:'vBMPDOTACAO',prop:'Tooltiptext'},{av:'AV29bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'},{av:'A8081TermoOutorgaDescEdital',fld:'TERMOOUTORGADESCEDITAL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV28TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'}],[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV28TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'}],[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV28TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'}],[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ITENS'"] = [[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'}],[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'}]];
   this.EvtParms["'PARCELAS'"] = [[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'}],[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'}]];
   this.EvtParms["'DOTACAO'"] = [[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'}],[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'}]];
   this.EvtParms["'INTEGRANTE'"] = [[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'}],[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'},{av:'A8081TermoOutorgaDescEdital',fld:'TERMOOUTORGADESCEDITAL'}],[{av:'AV33Titulo',fld:'vTITULO'},{av:'AV35DescEdital',fld:'vDESCEDITAL'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV28TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpParcela',fld:'vBMPPARCELA'},{av:'gx.fn.getCtrlProperty("vBMPPARCELA","Tooltiptext")',ctrl:'vBMPPARCELA',prop:'Tooltiptext'},{av:'AV32bmpIntegrante',fld:'vBMPINTEGRANTE'},{av:'gx.fn.getCtrlProperty("vBMPINTEGRANTE","Tooltiptext")',ctrl:'vBMPINTEGRANTE',prop:'Tooltiptext'},{av:'AV31bmpDotacao',fld:'vBMPDOTACAO'},{av:'gx.fn.getCtrlProperty("vBMPDOTACAO","Tooltiptext")',ctrl:'vBMPDOTACAO',prop:'Tooltiptext'},{av:'AV29bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'},{av:'A8081TermoOutorgaDescEdital',fld:'TERMOOUTORGADESCEDITAL'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpParcela", rfrProp:"Value", gxAttId:"Bmpparcela"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpParcela", rfrProp:"Tooltiptext", gxAttId:"Bmpparcela"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpIntegrante", rfrProp:"Value", gxAttId:"Bmpintegrante"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpIntegrante", rfrProp:"Tooltiptext", gxAttId:"Bmpintegrante"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpDotacao", rfrProp:"Value", gxAttId:"Bmpdotacao"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpDotacao", rfrProp:"Tooltiptext", gxAttId:"Bmpdotacao"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpItens", rfrProp:"Value", gxAttId:"Bmpitens"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpItens", rfrProp:"Tooltiptext", gxAttId:"Bmpitens"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A8082TermoOutorgaTitulo", rfrProp:"Value", gxAttId:"8082"});
   GridContainer.addRefreshingVar({rfrVar:"A8081TermoOutorgaDescEdital", rfrProp:"Value", gxAttId:"8081"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htermooutorga());
