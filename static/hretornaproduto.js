/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 22:39:46.48
*/
gx.evt.autoSkip=!1;gx.define("hretornaproduto",!1,function(){var n,t;this.ServerClass="hretornaproduto";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("6","'GXM_FIRST'");this.addKeyListener("7","'GXM_PREVIOUS'");this.addKeyListener("8","'GXM_NEXT'");this.addKeyListener("9","'GXM_LAST'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV13EntradaEmpresaId=gx.fn.getControlValue("vENTRADAEMPRESAID");this.AV14EntradaId=gx.fn.getIntegerValue("vENTRADAID",".")};this.Valid_Entradaitemloteprodutoid=function(){try{if(gx.fn.currentGridRowImpl(55)===0)return!0;var n=gx.util.balloon.getNew("ENTRADAITEMLOTEPRODUTOID",gx.fn.currentGridRowImpl(55));this.AnyError=0;this.StandaloneModal();this.StandaloneNotModal()}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s112_client=function(){this.AV56SnErro="N";0==this.AV17EntradaItemLoteProdutoIdIni||0==this.AV16EntradaItemLoteProdutoIdfin||this.AV17EntradaItemLoteProdutoIdIni>this.AV16EntradaItemLoteProdutoIdfin&&(this.AV56SnErro="S",gx.fn.usrSetFocus("vENTRADAITEMLOTEPRODUTOIDINI"),this.addMessage("O Código inicial deve ser menor ou igual o final"));0==this.AV53EntradaItemSequenciaIni||0==this.AV54EntradaItemSequenciafin||this.AV56SnErro!="N"||this.AV53EntradaItemSequenciaIni>this.AV54EntradaItemSequenciafin&&(this.AV56SnErro="S",gx.fn.usrSetFocus("vENTRADAITEMSEQUENCIAINI"),this.addMessage("A Sequência inicial deve ser menor ou igual o final"))};this.e1528j2_client=function(){this.executeServerEvent("'PROCURAR'",!1,null,!1,!1)};this.e1128j2_client=function(){this.executeServerEvent("'GXM_FIRST'",!0,null,!1,!1)};this.e1228j2_client=function(){this.executeServerEvent("'GXM_PREVIOUS'",!0,null,!1,!1)};this.e1328j2_client=function(){this.executeServerEvent("'GXM_NEXT'",!0,null,!1,!1)};this.e1428j2_client=function(){this.executeServerEvent("'GXM_LAST'",!0,null,!1,!1)};this.e1928j2_client=function(){this.executeServerEvent("'RETORNAPRODUTO'",!0,arguments[0],!1,!1)};this.e1628j2_client=function(){this.executeServerEvent("'FECHAR'",!0,null,!1,!1)};this.e1728j2_client=function(){this.executeServerEvent("'FINALIZAR'",!0,null,!1,!1)};this.e2228j2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e2328j2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,13,15,17,19,21,25,27,30,32,34,36,38,56,57,58,59,60,66,69,71,73,75,77,79,80,81,82];this.GXLastCtrlId=82;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",55,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hretornaproduto",[],!1,1,!0,!0,10,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Retforn","vRETFORN",56,0,"px",17,"px","e1928j2_client","","","Image","GridColumnImage");t.addSingleLineEdit(4822,57,"ENTRADAITEMSEQUENCIA","Sequência","","EntradaItemSequencia","int",0,"px",6,6,"right",null,[],4822,"EntradaItemSequencia",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(4846,58,"ENTRADAITEMLOTEPRODUTOID","Produto","","EntradaItemLoteProdutoId","int",0,"px",10,10,"right",null,[],4846,"EntradaItemLoteProdutoId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(4847,59,"ENTRADAITEMLOTEPRODUTODESCRICA","Descrição","","EntradaItemLoteProdutoDescrica","svchar",0,"px",40,40,"left",null,[],4847,"EntradaItemLoteProdutoDescrica",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(4848,60,"ENTRADAITEMLOTECOMBINACAO","Combinação do Lote","","EntradaItemLoteCombinacao","char",0,"px",20,20,"left",null,[],4848,"EntradaItemLoteCombinacao",!0,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE5",grid:0};n[5]={fld:"TABLE1",grid:0};n[8]={fld:"TEXTBLOCK12",format:0,grid:0};n[10]={fld:"TABLE2",grid:0};n[13]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vENTRADAITEMLOTEPRODUTOIDINI",gxz:"ZV17EntradaItemLoteProdutoIdIni",gxold:"OV17EntradaItemLoteProdutoIdIni",gxvar:"AV17EntradaItemLoteProdutoIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17EntradaItemLoteProdutoIdIni=gx.num.intval(n)},v2z:function(n){gx.O.ZV17EntradaItemLoteProdutoIdIni=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vENTRADAITEMLOTEPRODUTOIDINI",gx.O.AV17EntradaItemLoteProdutoIdIni,0)},c2v:function(){gx.O.AV17EntradaItemLoteProdutoIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAITEMLOTEPRODUTOIDINI",".")},nac:gx.falseFn};n[15]={fld:"TXTCODIGOA",format:0,grid:0};n[17]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vENTRADAITEMLOTEPRODUTOIDFIN",gxz:"ZV16EntradaItemLoteProdutoIdfin",gxold:"OV16EntradaItemLoteProdutoIdfin",gxvar:"AV16EntradaItemLoteProdutoIdfin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16EntradaItemLoteProdutoIdfin=gx.num.intval(n)},v2z:function(n){gx.O.ZV16EntradaItemLoteProdutoIdfin=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vENTRADAITEMLOTEPRODUTOIDFIN",gx.O.AV16EntradaItemLoteProdutoIdfin,0)},c2v:function(){gx.O.AV16EntradaItemLoteProdutoIdfin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAITEMLOTEPRODUTOIDFIN",".")},nac:gx.falseFn};n[19]={fld:"TXTNOME",format:0,grid:0};n[21]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vPRODUTODESCRESFILTRO",gxz:"ZV42ProdutoDescResFiltro",gxold:"OV42ProdutoDescResFiltro",gxvar:"AV42ProdutoDescResFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV42ProdutoDescResFiltro=n},v2z:function(n){gx.O.ZV42ProdutoDescResFiltro=n},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRESFILTRO",gx.O.AV42ProdutoDescResFiltro,0)},c2v:function(){gx.O.AV42ProdutoDescResFiltro=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRESFILTRO")},nac:gx.falseFn};n[25]={fld:"TEXTBLOCK13",format:0,grid:0};n[27]={fld:"TABLE4",grid:0};n[30]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vENTRADAITEMSEQUENCIAINI",gxz:"ZV53EntradaItemSequenciaIni",gxold:"OV53EntradaItemSequenciaIni",gxvar:"AV53EntradaItemSequenciaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV53EntradaItemSequenciaIni=gx.num.intval(n)},v2z:function(n){gx.O.ZV53EntradaItemSequenciaIni=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vENTRADAITEMSEQUENCIAINI",gx.O.AV53EntradaItemSequenciaIni,0)},c2v:function(){gx.O.AV53EntradaItemSequenciaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAITEMSEQUENCIAINI",".")},nac:gx.falseFn};n[32]={fld:"TXTCODIGOA2",format:0,grid:0};n[34]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vENTRADAITEMSEQUENCIAFIN",gxz:"ZV54EntradaItemSequenciafin",gxold:"OV54EntradaItemSequenciafin",gxvar:"AV54EntradaItemSequenciafin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV54EntradaItemSequenciafin=gx.num.intval(n)},v2z:function(n){gx.O.ZV54EntradaItemSequenciafin=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vENTRADAITEMSEQUENCIAFIN",gx.O.AV54EntradaItemSequenciafin,0)},c2v:function(){gx.O.AV54EntradaItemSequenciafin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAITEMSEQUENCIAFIN",".")},nac:gx.falseFn};n[36]={fld:"TEXTBLOCK16",format:0,grid:0};n[38]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vENTRADAITEMLOTECOMBINACAOFILTRO",gxz:"ZV55EntradaItemLoteCombinacaoFiltro",gxold:"OV55EntradaItemLoteCombinacaoFiltro",gxvar:"AV55EntradaItemLoteCombinacaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV55EntradaItemLoteCombinacaoFiltro=n},v2z:function(n){gx.O.ZV55EntradaItemLoteCombinacaoFiltro=n},v2c:function(){gx.fn.setControlValue("vENTRADAITEMLOTECOMBINACAOFILTRO",gx.O.AV55EntradaItemLoteCombinacaoFiltro,0)},c2v:function(){gx.O.AV55EntradaItemLoteCombinacaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAITEMLOTECOMBINACAOFILTRO")},nac:gx.falseFn};n[56]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vRETFORN",gxz:"ZV45retForn",gxold:"OV45retForn",gxvar:"AV45retForn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV45retForn=n},v2z:function(n){gx.O.ZV45retForn=n},v2c:function(n){gx.fn.setGridMultimediaValue("vRETFORN",n||gx.fn.currentGridRowImpl(55),gx.O.AV45retForn,gx.O.AV59Retforn_GXI)},c2v:function(){gx.O.AV59Retforn_GXI=this.val_GXI();gx.O.AV45retForn=this.val()},val:function(n){return gx.fn.getGridControlValue("vRETFORN",n||gx.fn.currentGridRowImpl(55))},val_GXI:function(n){return gx.fn.getGridControlValue("vRETFORN_GXI",n||gx.fn.currentGridRowImpl(55))},gxvar_GXI:"AV59Retforn_GXI",nac:gx.falseFn};n[57]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMSEQUENCIA",gxz:"Z4822EntradaItemSequencia",gxold:"O4822EntradaItemSequencia",gxvar:"A4822EntradaItemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A4822EntradaItemSequencia=gx.num.intval(n)},v2z:function(n){gx.O.Z4822EntradaItemSequencia=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("ENTRADAITEMSEQUENCIA",n||gx.fn.currentGridRowImpl(55),gx.O.A4822EntradaItemSequencia,0)},c2v:function(){gx.O.A4822EntradaItemSequencia=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("ENTRADAITEMSEQUENCIA",n||gx.fn.currentGridRowImpl(55),".")},nac:gx.falseFn};n[58]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:this.Valid_Entradaitemloteprodutoid,isvalid:null,rgrid:[],fld:"ENTRADAITEMLOTEPRODUTOID",gxz:"Z4846EntradaItemLoteProdutoId",gxold:"O4846EntradaItemLoteProdutoId",gxvar:"A4846EntradaItemLoteProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A4846EntradaItemLoteProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.Z4846EntradaItemLoteProdutoId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("ENTRADAITEMLOTEPRODUTOID",n||gx.fn.currentGridRowImpl(55),gx.O.A4846EntradaItemLoteProdutoId,0)},c2v:function(){gx.O.A4846EntradaItemLoteProdutoId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("ENTRADAITEMLOTEPRODUTOID",n||gx.fn.currentGridRowImpl(55),".")},nac:gx.falseFn};n[59]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMLOTEPRODUTODESCRICA",gxz:"Z4847EntradaItemLoteProdutoDescrica",gxold:"O4847EntradaItemLoteProdutoDescrica",gxvar:"A4847EntradaItemLoteProdutoDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A4847EntradaItemLoteProdutoDescrica=n},v2z:function(n){gx.O.Z4847EntradaItemLoteProdutoDescrica=n},v2c:function(n){gx.fn.setGridControlValue("ENTRADAITEMLOTEPRODUTODESCRICA",n||gx.fn.currentGridRowImpl(55),gx.O.A4847EntradaItemLoteProdutoDescrica,0)},c2v:function(){gx.O.A4847EntradaItemLoteProdutoDescrica=this.val()},val:function(n){return gx.fn.getGridControlValue("ENTRADAITEMLOTEPRODUTODESCRICA",n||gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};n[60]={lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMLOTECOMBINACAO",gxz:"Z4848EntradaItemLoteCombinacao",gxold:"O4848EntradaItemLoteCombinacao",gxvar:"A4848EntradaItemLoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A4848EntradaItemLoteCombinacao=n},v2z:function(n){gx.O.Z4848EntradaItemLoteCombinacao=n},v2c:function(n){gx.fn.setGridControlValue("ENTRADAITEMLOTECOMBINACAO",n||gx.fn.currentGridRowImpl(55),gx.O.A4848EntradaItemLoteCombinacao,0)},c2v:function(){gx.O.A4848EntradaItemLoteCombinacao=this.val()},val:function(n){return gx.fn.getGridControlValue("ENTRADAITEMLOTECOMBINACAO",n||gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};n[66]={fld:"TABLE3",grid:0};n[69]={fld:"UPDPRODUTO",grid:0};n[71]={fld:"BTNPRIMEIRO",grid:0};n[73]={fld:"BTNANTERIOR",grid:0};n[75]={fld:"BTNPROXIMO",grid:0};n[77]={fld:"BTNULTIMO",grid:0};n[79]={fld:"IMAGE6",grid:0};n[80]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV28PaginaAux",gxold:"OV28PaginaAux",gxvar:"AV28PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28PaginaAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV28PaginaAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV28PaginaAux,0)},c2v:function(){gx.O.AV28PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",".")},nac:gx.falseFn};n[81]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV27Pagina",gxold:"OV27Pagina",gxvar:"AV27Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV27Pagina=gx.num.intval(n)},v2z:function(n){gx.O.ZV27Pagina=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV27Pagina)},c2v:function(){gx.O.AV27Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",".")},nac:gx.falseFn};n[82]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV26OrderedBy",gxold:"OV26OrderedBy",gxvar:"AV26OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26OrderedBy=gx.num.intval(n)},v2z:function(n){gx.O.ZV26OrderedBy=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV26OrderedBy,0)},c2v:function(){gx.O.AV26OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV17EntradaItemLoteProdutoIdIni=0;this.ZV17EntradaItemLoteProdutoIdIni=0;this.OV17EntradaItemLoteProdutoIdIni=0;this.AV16EntradaItemLoteProdutoIdfin=0;this.ZV16EntradaItemLoteProdutoIdfin=0;this.OV16EntradaItemLoteProdutoIdfin=0;this.AV42ProdutoDescResFiltro="";this.ZV42ProdutoDescResFiltro="";this.OV42ProdutoDescResFiltro="";this.AV53EntradaItemSequenciaIni=0;this.ZV53EntradaItemSequenciaIni=0;this.OV53EntradaItemSequenciaIni=0;this.AV54EntradaItemSequenciafin=0;this.ZV54EntradaItemSequenciafin=0;this.OV54EntradaItemSequenciafin=0;this.AV55EntradaItemLoteCombinacaoFiltro="";this.ZV55EntradaItemLoteCombinacaoFiltro="";this.OV55EntradaItemLoteCombinacaoFiltro="";this.ZV45retForn="";this.OV45retForn="";this.Z4822EntradaItemSequencia=0;this.O4822EntradaItemSequencia=0;this.Z4846EntradaItemLoteProdutoId=0;this.O4846EntradaItemLoteProdutoId=0;this.Z4847EntradaItemLoteProdutoDescrica="";this.O4847EntradaItemLoteProdutoDescrica="";this.Z4848EntradaItemLoteCombinacao="";this.O4848EntradaItemLoteCombinacao="";this.AV28PaginaAux=0;this.ZV28PaginaAux=0;this.OV28PaginaAux=0;this.AV27Pagina=0;this.ZV27Pagina=0;this.OV27Pagina=0;this.AV26OrderedBy=0;this.ZV26OrderedBy=0;this.OV26OrderedBy=0;this.AV17EntradaItemLoteProdutoIdIni=0;this.AV16EntradaItemLoteProdutoIdfin=0;this.AV42ProdutoDescResFiltro="";this.AV53EntradaItemSequenciaIni=0;this.AV54EntradaItemSequenciafin=0;this.AV55EntradaItemLoteCombinacaoFiltro="";this.AV28PaginaAux=0;this.AV27Pagina=0;this.AV26OrderedBy=0;this.AV13EntradaEmpresaId="";this.AV14EntradaId=0;this.A4638EntradaId=0;this.A4637EntradaEmpresaId="";this.A4845EntradaItemLoteProdutoEmpId="";this.AV45retForn="";this.A4822EntradaItemSequencia=0;this.A4846EntradaItemLoteProdutoId=0;this.A4847EntradaItemLoteProdutoDescrica="";this.A4848EntradaItemLoteCombinacao="";this.AV56SnErro="";this.Events={e1528j2_client:["'PROCURAR'",!0],e1128j2_client:["'GXM_FIRST'",!0],e1228j2_client:["'GXM_PREVIOUS'",!0],e1328j2_client:["'GXM_NEXT'",!0],e1428j2_client:["'GXM_LAST'",!0],e1928j2_client:["'RETORNAPRODUTO'",!0],e1628j2_client:["'FECHAR'",!0],e1728j2_client:["'FINALIZAR'",!0],e2228j2_client:["ENTER",!0],e2328j2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV17EntradaItemLoteProdutoIdIni",fld:"vENTRADAITEMLOTEPRODUTOIDINI"},{av:"AV16EntradaItemLoteProdutoIdfin",fld:"vENTRADAITEMLOTEPRODUTOIDFIN"},{av:"AV42ProdutoDescResFiltro",fld:"vPRODUTODESCRESFILTRO"},{av:"AV53EntradaItemSequenciaIni",fld:"vENTRADAITEMSEQUENCIAINI"},{av:"AV54EntradaItemSequenciafin",fld:"vENTRADAITEMSEQUENCIAFIN"},{av:"AV55EntradaItemLoteCombinacaoFiltro",fld:"vENTRADAITEMLOTECOMBINACAOFILTRO"},{av:"AV13EntradaEmpresaId",fld:"vENTRADAEMPRESAID"},{av:"AV14EntradaId",fld:"vENTRADAID"},{av:"AV45retForn",fld:"vRETFORN"},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:"vRETFORN",prop:"Tooltiptext"},{av:"A4822EntradaItemSequencia",fld:"ENTRADAITEMSEQUENCIA"}],[{av:"AV28PaginaAux",fld:"vPAGINAAUX"},{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV25NumPagina",fld:"vNUMPAGINA"},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:"BTNANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:"BTNPROXIMO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:"BTNPRIMEIRO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:"BTNULTIMO",prop:"Enabled"}]];this.EvtParms["'PROCURAR'"]=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV17EntradaItemLoteProdutoIdIni",fld:"vENTRADAITEMLOTEPRODUTOIDINI"},{av:"AV16EntradaItemLoteProdutoIdfin",fld:"vENTRADAITEMLOTEPRODUTOIDFIN"},{av:"AV42ProdutoDescResFiltro",fld:"vPRODUTODESCRESFILTRO"},{av:"AV53EntradaItemSequenciaIni",fld:"vENTRADAITEMSEQUENCIAINI"},{av:"AV54EntradaItemSequenciafin",fld:"vENTRADAITEMSEQUENCIAFIN"},{av:"AV55EntradaItemLoteCombinacaoFiltro",fld:"vENTRADAITEMLOTECOMBINACAOFILTRO"},{av:"AV13EntradaEmpresaId",fld:"vENTRADAEMPRESAID"},{av:"AV14EntradaId",fld:"vENTRADAID"},{av:"AV45retForn",fld:"vRETFORN"},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:"vRETFORN",prop:"Tooltiptext"},{av:"A4822EntradaItemSequencia",fld:"ENTRADAITEMSEQUENCIA"}],[{av:"AV27Pagina",fld:"vPAGINA"},{av:"AV56SnErro",fld:"vSNERRO"}]];this.EvtParms["'GXM_FIRST'"]=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV17EntradaItemLoteProdutoIdIni",fld:"vENTRADAITEMLOTEPRODUTOIDINI"},{av:"AV16EntradaItemLoteProdutoIdfin",fld:"vENTRADAITEMLOTEPRODUTOIDFIN"},{av:"AV42ProdutoDescResFiltro",fld:"vPRODUTODESCRESFILTRO"},{av:"AV53EntradaItemSequenciaIni",fld:"vENTRADAITEMSEQUENCIAINI"},{av:"AV54EntradaItemSequenciafin",fld:"vENTRADAITEMSEQUENCIAFIN"},{av:"AV55EntradaItemLoteCombinacaoFiltro",fld:"vENTRADAITEMLOTECOMBINACAOFILTRO"},{av:"AV13EntradaEmpresaId",fld:"vENTRADAEMPRESAID"},{av:"AV14EntradaId",fld:"vENTRADAID"},{av:"AV45retForn",fld:"vRETFORN"},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:"vRETFORN",prop:"Tooltiptext"},{av:"A4822EntradaItemSequencia",fld:"ENTRADAITEMSEQUENCIA"}],[{av:"AV27Pagina",fld:"vPAGINA"}]];this.EvtParms["'GXM_PREVIOUS'"]=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV17EntradaItemLoteProdutoIdIni",fld:"vENTRADAITEMLOTEPRODUTOIDINI"},{av:"AV16EntradaItemLoteProdutoIdfin",fld:"vENTRADAITEMLOTEPRODUTOIDFIN"},{av:"AV42ProdutoDescResFiltro",fld:"vPRODUTODESCRESFILTRO"},{av:"AV53EntradaItemSequenciaIni",fld:"vENTRADAITEMSEQUENCIAINI"},{av:"AV54EntradaItemSequenciafin",fld:"vENTRADAITEMSEQUENCIAFIN"},{av:"AV55EntradaItemLoteCombinacaoFiltro",fld:"vENTRADAITEMLOTECOMBINACAOFILTRO"},{av:"AV13EntradaEmpresaId",fld:"vENTRADAEMPRESAID"},{av:"AV14EntradaId",fld:"vENTRADAID"},{av:"AV45retForn",fld:"vRETFORN"},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:"vRETFORN",prop:"Tooltiptext"},{av:"A4822EntradaItemSequencia",fld:"ENTRADAITEMSEQUENCIA"},{av:"AV27Pagina",fld:"vPAGINA"}],[{av:"AV27Pagina",fld:"vPAGINA"}]];this.EvtParms["'GXM_NEXT'"]=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV17EntradaItemLoteProdutoIdIni",fld:"vENTRADAITEMLOTEPRODUTOIDINI"},{av:"AV16EntradaItemLoteProdutoIdfin",fld:"vENTRADAITEMLOTEPRODUTOIDFIN"},{av:"AV42ProdutoDescResFiltro",fld:"vPRODUTODESCRESFILTRO"},{av:"AV53EntradaItemSequenciaIni",fld:"vENTRADAITEMSEQUENCIAINI"},{av:"AV54EntradaItemSequenciafin",fld:"vENTRADAITEMSEQUENCIAFIN"},{av:"AV55EntradaItemLoteCombinacaoFiltro",fld:"vENTRADAITEMLOTECOMBINACAOFILTRO"},{av:"AV13EntradaEmpresaId",fld:"vENTRADAEMPRESAID"},{av:"AV14EntradaId",fld:"vENTRADAID"},{av:"AV45retForn",fld:"vRETFORN"},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:"vRETFORN",prop:"Tooltiptext"},{av:"A4822EntradaItemSequencia",fld:"ENTRADAITEMSEQUENCIA"},{av:"AV27Pagina",fld:"vPAGINA"}],[{av:"AV27Pagina",fld:"vPAGINA"}]];this.EvtParms["'GXM_LAST'"]=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV17EntradaItemLoteProdutoIdIni",fld:"vENTRADAITEMLOTEPRODUTOIDINI"},{av:"AV16EntradaItemLoteProdutoIdfin",fld:"vENTRADAITEMLOTEPRODUTOIDFIN"},{av:"AV42ProdutoDescResFiltro",fld:"vPRODUTODESCRESFILTRO"},{av:"AV53EntradaItemSequenciaIni",fld:"vENTRADAITEMSEQUENCIAINI"},{av:"AV54EntradaItemSequenciafin",fld:"vENTRADAITEMSEQUENCIAFIN"},{av:"AV55EntradaItemLoteCombinacaoFiltro",fld:"vENTRADAITEMLOTECOMBINACAOFILTRO"},{av:"AV13EntradaEmpresaId",fld:"vENTRADAEMPRESAID"},{av:"AV14EntradaId",fld:"vENTRADAID"},{av:"AV45retForn",fld:"vRETFORN"},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:"vRETFORN",prop:"Tooltiptext"},{av:"A4822EntradaItemSequencia",fld:"ENTRADAITEMSEQUENCIA"}],[{av:"AV27Pagina",fld:"vPAGINA"}]];this.EvtParms["'RETORNAPRODUTO'"]=[[{av:"A4822EntradaItemSequencia",fld:"ENTRADAITEMSEQUENCIA"}],[{av:"AV47splitProduto",fld:"vSPLITPRODUTO"}]];this.EvtParms["GRID1.LOAD"]=[[{av:"A4822EntradaItemSequencia",fld:"ENTRADAITEMSEQUENCIA"}],[{av:"AV47splitProduto",fld:"vSPLITPRODUTO"},{av:"AV18EntradaItemSequencia",fld:"vENTRADAITEMSEQUENCIA"},{av:"AV60GXV1",fld:"vGXV1"},{av:"AV48splitProdutoItem",fld:"vSPLITPRODUTOITEM"},{av:'gx.fn.getCtrlProperty("ENTRADAITEMSEQUENCIA","Fontbold")',ctrl:"ENTRADAITEMSEQUENCIA",prop:"Fontbold"},{av:'gx.fn.getCtrlProperty("ENTRADAITEMSEQUENCIA","Forecolor")',ctrl:"ENTRADAITEMSEQUENCIA",prop:"Forecolor"},{av:'gx.fn.getCtrlProperty("ENTRADAITEMLOTEPRODUTOID","Fontbold")',ctrl:"ENTRADAITEMLOTEPRODUTOID",prop:"Fontbold"},{av:'gx.fn.getCtrlProperty("ENTRADAITEMLOTEPRODUTOID","Forecolor")',ctrl:"ENTRADAITEMLOTEPRODUTOID",prop:"Forecolor"},{av:'gx.fn.getCtrlProperty("ENTRADAITEMLOTEPRODUTODESCRICA","Fontbold")',ctrl:"ENTRADAITEMLOTEPRODUTODESCRICA",prop:"Fontbold"},{av:'gx.fn.getCtrlProperty("ENTRADAITEMLOTEPRODUTODESCRICA","Forecolor")',ctrl:"ENTRADAITEMLOTEPRODUTODESCRICA",prop:"Forecolor"},{av:'gx.fn.getCtrlProperty("ENTRADAITEMLOTECOMBINACAO","Fontbold")',ctrl:"ENTRADAITEMLOTECOMBINACAO",prop:"Fontbold"},{av:'gx.fn.getCtrlProperty("ENTRADAITEMLOTECOMBINACAO","Forecolor")',ctrl:"ENTRADAITEMLOTECOMBINACAO",prop:"Forecolor"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV18EntradaItemSequencia",fld:"vENTRADAITEMSEQUENCIA"},{av:"AV14EntradaId",fld:"vENTRADAID"},{av:"AV13EntradaEmpresaId",fld:"vENTRADAEMPRESAID"}],[]];this.EvtParms["'FINALIZAR'"]=[[{av:"AV18EntradaItemSequencia",fld:"vENTRADAITEMSEQUENCIA"},{av:"AV14EntradaId",fld:"vENTRADAID"},{av:"AV13EntradaEmpresaId",fld:"vENTRADAEMPRESAID"}],[{av:"AV18EntradaItemSequencia",fld:"vENTRADAITEMSEQUENCIA"}]];this.setVCMap("AV13EntradaEmpresaId","vENTRADAEMPRESAID",0,"char");this.setVCMap("AV14EntradaId","vENTRADAID",0,"int");this.setVCMap("AV13EntradaEmpresaId","vENTRADAEMPRESAID",0,"char");this.setVCMap("AV14EntradaId","vENTRADAID",0,"int");t.addRefreshingVar(this.GXValidFnc[13]);t.addRefreshingVar(this.GXValidFnc[17]);t.addRefreshingVar(this.GXValidFnc[21]);t.addRefreshingVar(this.GXValidFnc[30]);t.addRefreshingVar(this.GXValidFnc[34]);t.addRefreshingVar(this.GXValidFnc[38]);t.addRefreshingVar({rfrVar:"AV13EntradaEmpresaId"});t.addRefreshingVar({rfrVar:"AV14EntradaId"});t.addRefreshingVar({rfrVar:"AV45retForn",rfrProp:"Value",gxAttId:"Retforn"});t.addRefreshingVar({rfrVar:"AV45retForn",rfrProp:"Tooltiptext",gxAttId:"Retforn"});t.addRefreshingVar({rfrVar:"A4822EntradaItemSequencia",rfrProp:"Value",gxAttId:"4822"});this.InitStandaloneVars()});gx.setParentObj(new hretornaproduto)