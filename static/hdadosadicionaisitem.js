/**@preserve  GeneXus Java 10_3_12-110051 on March 8, 2021 9:28:15.77
*/
gx.evt.autoSkip=!1;gx.define("hdadosadicionaisitem",!1,function(){var n,t;this.ServerClass="hdadosadicionaisitem";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("7","'ANTERIOR'");this.addKeyListener("8","'PROXIMO'");this.addKeyListener("3","'NOVO'");this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","'PROCURAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO");this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO");this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME")};this.e1111i2_client=function(){this.executeServerEvent("'ANTERIOR'",!0,null,!1,!1)};this.e1211i2_client=function(){this.executeServerEvent("'PROXIMO'",!0,null,!1,!1)};this.e1611i2_client=function(){this.executeServerEvent("VPAGINA.CLICK",!0,null,!1,!0)};this.e1311i2_client=function(){this.executeServerEvent("'NOVO'",!0,null,!1,!1)};this.e1411i2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e1511i2_client=function(){this.executeServerEvent("'PROCURAR'",!0,arguments[0],!1,!1)};this.e1911i2_client=function(){this.executeServerEvent("'ALTERAR'",!0,arguments[0],!1,!1)};this.e2011i2_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e2111i2_client=function(){this.executeServerEvent("'CONSULTAR'",!0,arguments[0],!1,!1)};this.e2211i2_client=function(){this.executeServerEvent("'DESCER'",!0,arguments[0],!1,!1)};this.e2311i2_client=function(){this.executeServerEvent("'SUBIR'",!0,arguments[0],!1,!1)};this.e2511i2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e2611i2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,56,57,58];this.GXLastCtrlId=58;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdadosadicionaisitem",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(7486,47,"DADOSADICIONAISEMPRESAID","Empresa","","DadosAdicionaisEmpresaId","char",0,"px",10,10,"left",null,[],7486,"DadosAdicionaisEmpresaId",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(7487,48,"DADOSADICIONAISCODIGO","Código","","DadosAdicionaisCodigo","int",0,"px",7,7,"right",null,[],7487,"DadosAdicionaisCodigo",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(7494,49,"DADOSADICIONAISITEMSEQ","Sequência","","DadosAdicionaisItemSeq","int",0,"px",2,2,"right",null,[],7494,"DadosAdicionaisItemSeq",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(7491,50,"DADOSADICIONAISITEMSNQUELINHA","Quebra Linha","","DadosAdicionaisItemSnQueLinha","char",0,"px",1,1,"left",null,[],7491,"DadosAdicionaisItemSnQueLinha",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(7489,51,"DADOSADICIONAISITEMORDEM","Ordem","","DadosAdicionaisItemOrdem","int",0,"px",2,2,"right",null,[],7489,"DadosAdicionaisItemOrdem",!0,0,!1,!1,"Attribute",1,"");t.addComboBox(7488,52,"DADOSADICIONAISITEMCAMPO","Campo","DadosAdicionaisItemCampo","char",null,0,!0,!1,0,"px","");t.addSingleLineEdit(7490,53,"DADOSADICIONAISITEMCAMPOLIVRE","Campo Livre","","DadosAdicionaisItemCampoLivre","svchar",0,"px",100,80,"left",null,[],7490,"DadosAdicionaisItemCampoLivre",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e1911i2_client","","Alterar","Image","GridColumnImage");t.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e2011i2_client","","Excluir","Image","GridColumnImage");t.addBitmap("&Bmpcon","vBMPCON",56,0,"px",17,"px","e2111i2_client","","Consultar","Image","GridColumnImage");t.addBitmap("&Bmpsubir","vBMPSUBIR",57,0,"px",17,"px","e2311i2_client","","Subir","Image","GridColumnImage");t.addBitmap("&Bmpdescer","vBMPDESCER",58,0,"px",17,"px","e2211i2_client","","Descer","Image","GridColumnImage");this.setGrid(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE6",grid:0};n[8]={fld:"TABLE8",grid:0};n[11]={fld:"TEXTBLOCK2",format:0,grid:0};n[13]={fld:"TABLE9",grid:0};n[16]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDADOSADICIONAISCODIGO",gxz:"ZV27DadosAdicionaisCodigo",gxold:"OV27DadosAdicionaisCodigo",gxvar:"AV27DadosAdicionaisCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27DadosAdicionaisCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV27DadosAdicionaisCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vDADOSADICIONAISCODIGO",gx.O.AV27DadosAdicionaisCodigo,0)},c2v:function(){gx.O.AV27DadosAdicionaisCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDADOSADICIONAISCODIGO",".")},nac:gx.falseFn};n[18]={fld:"TEXTBLOCK4",format:0,grid:0};n[20]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDADOSADICIONAISDESCRICAO",gxz:"ZV28DadosAdicionaisDescricao",gxold:"OV28DadosAdicionaisDescricao",gxvar:"AV28DadosAdicionaisDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28DadosAdicionaisDescricao=n},v2z:function(n){gx.O.ZV28DadosAdicionaisDescricao=n},v2c:function(){gx.fn.setControlValue("vDADOSADICIONAISDESCRICAO",gx.O.AV28DadosAdicionaisDescricao,0)},c2v:function(){gx.O.AV28DadosAdicionaisDescricao=this.val()},val:function(){return gx.fn.getControlValue("vDADOSADICIONAISDESCRICAO")},nac:gx.falseFn};n[23]={fld:"TABLE4",grid:0};n[26]={fld:"TABLE1",grid:0};n[29]={fld:"IMAGE2",grid:0};n[31]={fld:"BTNANTERIOR",grid:0};n[33]={fld:"BTNPROXIMO",grid:0};n[35]={fld:"BTNHELP",grid:0};n[37]={fld:"TABLE5",grid:0};n[40]={fld:"TEXTBLOCK1",format:0,grid:0};n[42]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV5Pagina=gx.num.intval(n)},v2z:function(n){gx.O.ZV5Pagina=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",".")},nac:gx.falseFn};n[43]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6PaginaAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV6PaginaAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",".")},nac:gx.falseFn};n[47]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISEMPRESAID",gxz:"Z7486DadosAdicionaisEmpresaId",gxold:"O7486DadosAdicionaisEmpresaId",gxvar:"A7486DadosAdicionaisEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A7486DadosAdicionaisEmpresaId=n},v2z:function(n){gx.O.Z7486DadosAdicionaisEmpresaId=n},v2c:function(n){gx.fn.setGridControlValue("DADOSADICIONAISEMPRESAID",n||gx.fn.currentGridRowImpl(46),gx.O.A7486DadosAdicionaisEmpresaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A7486DadosAdicionaisEmpresaId=this.val()},val:function(n){return gx.fn.getGridControlValue("DADOSADICIONAISEMPRESAID",n||gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};n[48]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISCODIGO",gxz:"Z7487DadosAdicionaisCodigo",gxold:"O7487DadosAdicionaisCodigo",gxvar:"A7487DadosAdicionaisCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A7487DadosAdicionaisCodigo=gx.num.intval(n)},v2z:function(n){gx.O.Z7487DadosAdicionaisCodigo=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("DADOSADICIONAISCODIGO",n||gx.fn.currentGridRowImpl(46),gx.O.A7487DadosAdicionaisCodigo,0)},c2v:function(){gx.O.A7487DadosAdicionaisCodigo=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("DADOSADICIONAISCODIGO",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[49]={lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISITEMSEQ",gxz:"Z7494DadosAdicionaisItemSeq",gxold:"O7494DadosAdicionaisItemSeq",gxvar:"A7494DadosAdicionaisItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A7494DadosAdicionaisItemSeq=gx.num.intval(n)},v2z:function(n){gx.O.Z7494DadosAdicionaisItemSeq=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("DADOSADICIONAISITEMSEQ",n||gx.fn.currentGridRowImpl(46),gx.O.A7494DadosAdicionaisItemSeq,0)},c2v:function(){gx.O.A7494DadosAdicionaisItemSeq=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("DADOSADICIONAISITEMSEQ",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[50]={lvl:2,type:"char",len:1,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISITEMSNQUELINHA",gxz:"Z7491DadosAdicionaisItemSnQueLinha",gxold:"O7491DadosAdicionaisItemSnQueLinha",gxvar:"A7491DadosAdicionaisItemSnQueLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A7491DadosAdicionaisItemSnQueLinha=n},v2z:function(n){gx.O.Z7491DadosAdicionaisItemSnQueLinha=n},v2c:function(n){gx.fn.setGridControlValue("DADOSADICIONAISITEMSNQUELINHA",n||gx.fn.currentGridRowImpl(46),gx.O.A7491DadosAdicionaisItemSnQueLinha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A7491DadosAdicionaisItemSnQueLinha=this.val()},val:function(n){return gx.fn.getGridControlValue("DADOSADICIONAISITEMSNQUELINHA",n||gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};n[51]={lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISITEMORDEM",gxz:"Z7489DadosAdicionaisItemOrdem",gxold:"O7489DadosAdicionaisItemOrdem",gxvar:"A7489DadosAdicionaisItemOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A7489DadosAdicionaisItemOrdem=gx.num.intval(n)},v2z:function(n){gx.O.Z7489DadosAdicionaisItemOrdem=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("DADOSADICIONAISITEMORDEM",n||gx.fn.currentGridRowImpl(46),gx.O.A7489DadosAdicionaisItemOrdem,0)},c2v:function(){gx.O.A7489DadosAdicionaisItemOrdem=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("DADOSADICIONAISITEMORDEM",n||gx.fn.currentGridRowImpl(46),".")},nac:gx.falseFn};n[52]={lvl:2,type:"char",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISITEMCAMPO",gxz:"Z7488DadosAdicionaisItemCampo",gxold:"O7488DadosAdicionaisItemCampo",gxvar:"A7488DadosAdicionaisItemCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){gx.O.A7488DadosAdicionaisItemCampo=n},v2z:function(n){gx.O.Z7488DadosAdicionaisItemCampo=n},v2c:function(n){gx.fn.setGridComboBoxValue("DADOSADICIONAISITEMCAMPO",n||gx.fn.currentGridRowImpl(46),gx.O.A7488DadosAdicionaisItemCampo)},c2v:function(){gx.O.A7488DadosAdicionaisItemCampo=this.val()},val:function(n){return gx.fn.getGridControlValue("DADOSADICIONAISITEMCAMPO",n||gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};n[53]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DADOSADICIONAISITEMCAMPOLIVRE",gxz:"Z7490DadosAdicionaisItemCampoLivre",gxold:"O7490DadosAdicionaisItemCampoLivre",gxvar:"A7490DadosAdicionaisItemCampoLivre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A7490DadosAdicionaisItemCampoLivre=n},v2z:function(n){gx.O.Z7490DadosAdicionaisItemCampoLivre=n},v2c:function(n){gx.fn.setGridControlValue("DADOSADICIONAISITEMCAMPOLIVRE",n||gx.fn.currentGridRowImpl(46),gx.O.A7490DadosAdicionaisItemCampoLivre,0)},c2v:function(){gx.O.A7490DadosAdicionaisItemCampoLivre=this.val()},val:function(n){return gx.fn.getGridControlValue("DADOSADICIONAISITEMCAMPOLIVRE",n||gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};n[54]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV7bmpAlt=n},v2z:function(n){gx.O.ZV7bmpAlt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPALT",n||gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPALT",n||gx.fn.currentGridRowImpl(46))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPALT_GXI",n||gx.fn.currentGridRowImpl(46))},gxvar_GXI:"AV39Bmpalt_GXI",nac:gx.falseFn};n[55]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV8bmpExc=n},v2z:function(n){gx.O.ZV8bmpExc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPEXC",n||gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPEXC",n||gx.fn.currentGridRowImpl(46))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPEXC_GXI",n||gx.fn.currentGridRowImpl(46))},gxvar_GXI:"AV40Bmpexc_GXI",nac:gx.falseFn};n[56]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV16bmpCon=n},v2z:function(n){gx.O.ZV16bmpCon=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCON",n||gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCON",n||gx.fn.currentGridRowImpl(46))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCON_GXI",n||gx.fn.currentGridRowImpl(46))},gxvar_GXI:"AV41Bmpcon_GXI",nac:gx.falseFn};n[57]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSUBIR",gxz:"ZV30bmpSubir",gxold:"OV30bmpSubir",gxvar:"AV30bmpSubir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV30bmpSubir=n},v2z:function(n){gx.O.ZV30bmpSubir=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPSUBIR",n||gx.fn.currentGridRowImpl(46),gx.O.AV30bmpSubir,gx.O.AV42Bmpsubir_GXI)},c2v:function(){gx.O.AV42Bmpsubir_GXI=this.val_GXI();gx.O.AV30bmpSubir=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPSUBIR",n||gx.fn.currentGridRowImpl(46))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPSUBIR_GXI",n||gx.fn.currentGridRowImpl(46))},gxvar_GXI:"AV42Bmpsubir_GXI",nac:gx.falseFn};n[58]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESCER",gxz:"ZV31bmpDescer",gxold:"OV31bmpDescer",gxvar:"AV31bmpDescer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV31bmpDescer=n},v2z:function(n){gx.O.ZV31bmpDescer=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPDESCER",n||gx.fn.currentGridRowImpl(46),gx.O.AV31bmpDescer,gx.O.AV43Bmpdescer_GXI)},c2v:function(){gx.O.AV43Bmpdescer_GXI=this.val_GXI();gx.O.AV31bmpDescer=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPDESCER",n||gx.fn.currentGridRowImpl(46))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPDESCER_GXI",n||gx.fn.currentGridRowImpl(46))},gxvar_GXI:"AV43Bmpdescer_GXI",nac:gx.falseFn};this.AV27DadosAdicionaisCodigo=0;this.ZV27DadosAdicionaisCodigo=0;this.OV27DadosAdicionaisCodigo=0;this.AV28DadosAdicionaisDescricao="";this.ZV28DadosAdicionaisDescricao="";this.OV28DadosAdicionaisDescricao="";this.AV5Pagina=0;this.ZV5Pagina=0;this.OV5Pagina=0;this.AV6PaginaAux=0;this.ZV6PaginaAux=0;this.OV6PaginaAux=0;this.Z7486DadosAdicionaisEmpresaId="";this.O7486DadosAdicionaisEmpresaId="";this.Z7487DadosAdicionaisCodigo=0;this.O7487DadosAdicionaisCodigo=0;this.Z7494DadosAdicionaisItemSeq=0;this.O7494DadosAdicionaisItemSeq=0;this.Z7491DadosAdicionaisItemSnQueLinha="";this.O7491DadosAdicionaisItemSnQueLinha="";this.Z7489DadosAdicionaisItemOrdem=0;this.O7489DadosAdicionaisItemOrdem=0;this.Z7488DadosAdicionaisItemCampo="";this.O7488DadosAdicionaisItemCampo="";this.Z7490DadosAdicionaisItemCampoLivre="";this.O7490DadosAdicionaisItemCampoLivre="";this.ZV7bmpAlt="";this.OV7bmpAlt="";this.ZV8bmpExc="";this.OV8bmpExc="";this.ZV16bmpCon="";this.OV16bmpCon="";this.ZV30bmpSubir="";this.OV30bmpSubir="";this.ZV31bmpDescer="";this.OV31bmpDescer="";this.AV27DadosAdicionaisCodigo=0;this.AV28DadosAdicionaisDescricao="";this.AV5Pagina=0;this.AV6PaginaAux=0;this.A7486DadosAdicionaisEmpresaId="";this.A7487DadosAdicionaisCodigo=0;this.A7494DadosAdicionaisItemSeq=0;this.A7491DadosAdicionaisItemSnQueLinha="";this.A7489DadosAdicionaisItemOrdem=0;this.A7488DadosAdicionaisItemCampo="";this.A7490DadosAdicionaisItemCampoLivre="";this.AV7bmpAlt="";this.AV8bmpExc="";this.AV16bmpCon="";this.AV30bmpSubir="";this.AV31bmpDescer="";this.AV17EmpresaPadrao="";this.AV34SnRecuperaFiltro="";this.AV37Pgmname="";this.Events={e1111i2_client:["'ANTERIOR'",!0],e1211i2_client:["'PROXIMO'",!0],e1611i2_client:["VPAGINA.CLICK",!0],e1311i2_client:["'NOVO'",!0],e1411i2_client:["'FECHAR'",!0],e1511i2_client:["'PROCURAR'",!0],e1911i2_client:["'ALTERAR'",!0],e2011i2_client:["'EXCLUIR'",!0],e2111i2_client:["'CONSULTAR'",!0],e2211i2_client:["'DESCER'",!0],e2311i2_client:["'SUBIR'",!0],e2511i2_client:["ENTER",!0],e2611i2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30bmpSubir",fld:"vBMPSUBIR"},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:"vBMPSUBIR",prop:"Tooltiptext"},{av:"AV31bmpDescer",fld:"vBMPDESCER"},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:"vBMPDESCER",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[]];this.EvtParms["GRID.REFRESH"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30bmpSubir",fld:"vBMPSUBIR"},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:"vBMPSUBIR",prop:"Tooltiptext"},{av:"AV31bmpDescer",fld:"vBMPDESCER"},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:"vBMPDESCER",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[{av:"AV6PaginaAux",fld:"vPAGINAAUX"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV10NumPagina",fld:"vNUMPAGINA"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:"BTNANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:"BTNPROXIMO",prop:"Enabled"},{av:"AV23filtros",fld:"vFILTROS"},{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"AV28DadosAdicionaisDescricao",fld:"vDADOSADICIONAISDESCRICAO"}]];this.EvtParms["'ANTERIOR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30bmpSubir",fld:"vBMPSUBIR"},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:"vBMPSUBIR",prop:"Tooltiptext"},{av:"AV31bmpDescer",fld:"vBMPDESCER"},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:"vBMPDESCER",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV28DadosAdicionaisDescricao",fld:"vDADOSADICIONAISDESCRICAO"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'PROXIMO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30bmpSubir",fld:"vBMPSUBIR"},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:"vBMPSUBIR",prop:"Tooltiptext"},{av:"AV31bmpDescer",fld:"vBMPDESCER"},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:"vBMPDESCER",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV6PaginaAux",fld:"vPAGINAAUX"},{av:"AV28DadosAdicionaisDescricao",fld:"vDADOSADICIONAISDESCRICAO"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["VPAGINA.CLICK"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30bmpSubir",fld:"vBMPSUBIR"},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:"vBMPSUBIR",prop:"Tooltiptext"},{av:"AV31bmpDescer",fld:"vBMPDESCER"},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:"vBMPDESCER",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV28DadosAdicionaisDescricao",fld:"vDADOSADICIONAISDESCRICAO"}],[{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'NOVO'"]=[[{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV28DadosAdicionaisDescricao",fld:"vDADOSADICIONAISDESCRICAO"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV37Pgmname",fld:"vPGMNAME"}],[]];this.EvtParms["'PROCURAR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30bmpSubir",fld:"vBMPSUBIR"},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:"vBMPSUBIR",prop:"Tooltiptext"},{av:"AV31bmpDescer",fld:"vBMPDESCER"},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:"vBMPDESCER",prop:"Tooltiptext"},{av:"AV34SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV37Pgmname",fld:"vPGMNAME"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV28DadosAdicionaisDescricao",fld:"vDADOSADICIONAISDESCRICAO"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'ALTERAR'"]=[[{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"A7494DadosAdicionaisItemSeq",fld:"DADOSADICIONAISITEMSEQ"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV28DadosAdicionaisDescricao",fld:"vDADOSADICIONAISDESCRICAO"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[{av:"A7494DadosAdicionaisItemSeq",fld:"DADOSADICIONAISITEMSEQ"},{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'EXCLUIR'"]=[[{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"A7494DadosAdicionaisItemSeq",fld:"DADOSADICIONAISITEMSEQ"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV28DadosAdicionaisDescricao",fld:"vDADOSADICIONAISDESCRICAO"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[{av:"A7494DadosAdicionaisItemSeq",fld:"DADOSADICIONAISITEMSEQ"},{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'CONSULTAR'"]=[[{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"A7494DadosAdicionaisItemSeq",fld:"DADOSADICIONAISITEMSEQ"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV28DadosAdicionaisDescricao",fld:"vDADOSADICIONAISDESCRICAO"},{av:"AV37Pgmname",fld:"vPGMNAME"}],[{av:"A7494DadosAdicionaisItemSeq",fld:"DADOSADICIONAISITEMSEQ"},{av:"AV27DadosAdicionaisCodigo",fld:"vDADOSADICIONAISCODIGO"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'DESCER'"]=[[{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"A7487DadosAdicionaisCodigo",fld:"DADOSADICIONAISCODIGO"},{av:"A7494DadosAdicionaisItemSeq",fld:"DADOSADICIONAISITEMSEQ"},{av:"A7489DadosAdicionaisItemOrdem",fld:"DADOSADICIONAISITEMORDEM"}],[{av:"A7489DadosAdicionaisItemOrdem",fld:"DADOSADICIONAISITEMORDEM"},{av:"A7494DadosAdicionaisItemSeq",fld:"DADOSADICIONAISITEMSEQ"},{av:"A7487DadosAdicionaisCodigo",fld:"DADOSADICIONAISCODIGO"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"}]];this.EvtParms["'SUBIR'"]=[[{av:"A7489DadosAdicionaisItemOrdem",fld:"DADOSADICIONAISITEMORDEM"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"A7487DadosAdicionaisCodigo",fld:"DADOSADICIONAISCODIGO"},{av:"A7494DadosAdicionaisItemSeq",fld:"DADOSADICIONAISITEMSEQ"}],[{av:"A7489DadosAdicionaisItemOrdem",fld:"DADOSADICIONAISITEMORDEM"},{av:"A7494DadosAdicionaisItemSeq",fld:"DADOSADICIONAISITEMSEQ"},{av:"A7487DadosAdicionaisCodigo",fld:"DADOSADICIONAISCODIGO"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"}]];this.setVCMap("AV17EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("AV34SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("AV37Pgmname","vPGMNAME",0,"char");this.setVCMap("AV17EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("AV34SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("AV37Pgmname","vPGMNAME",0,"char");t.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar({rfrVar:"AV7bmpAlt",rfrProp:"Value",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV7bmpAlt",rfrProp:"Tooltiptext",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV8bmpExc",rfrProp:"Value",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV8bmpExc",rfrProp:"Tooltiptext",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV16bmpCon",rfrProp:"Value",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"AV16bmpCon",rfrProp:"Tooltiptext",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"AV30bmpSubir",rfrProp:"Value",gxAttId:"Bmpsubir"});t.addRefreshingVar({rfrVar:"AV30bmpSubir",rfrProp:"Tooltiptext",gxAttId:"Bmpsubir"});t.addRefreshingVar({rfrVar:"AV31bmpDescer",rfrProp:"Value",gxAttId:"Bmpdescer"});t.addRefreshingVar({rfrVar:"AV31bmpDescer",rfrProp:"Tooltiptext",gxAttId:"Bmpdescer"});t.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});t.addRefreshingVar({rfrVar:"AV37Pgmname"});this.InitStandaloneVars()});gx.setParentObj(new hdadosadicionaisitem)