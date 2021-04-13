/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:11:26.33
*/
gx.evt.autoSkip = false;
gx.define('havisoestoqueminimo', false, function () {
   this.ServerClass =  "havisoestoqueminimo" ;
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
   };
   this.e172cx2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e112cx2_client=function()
   {
      this.executeServerEvent("'PROXIMAPAGINA'", true, null, false, false);
   };
   this.e122cx2_client=function()
   {
      this.executeServerEvent("'PAGINAANTERIOR'", true, null, false, false);
   };
   this.e132cx2_client=function()
   {
      this.executeServerEvent("'PRIMEIRAPAGINA'", true, null, false, false);
   };
   this.e142cx2_client=function()
   {
      this.executeServerEvent("'ULTIMAPAGINA'", true, null, false, false);
   };
   this.e152cx2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e202cx2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e212cx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,9,10,11,12,13,19,22,24,26,28,30,31,32,33];
   this.GXLastCtrlId =33;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",8,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"havisoestoqueminimo",[],false,1,false,true,0,true,false,false,"CollSdtApuracaoEstoqueMinimo.SdtApuracaoEstoqueMinimoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV64SdtApuracaoEstoqueMinimo",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV109",9,"CTLPRODUTOID","Produto","","produtoid","int",0,"px",10,10,"right",null,[],"GXV109","GXV109",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10A",10,"CTLPRODUTOREFERENCIA","Referência","","produtoreferencia","svchar",0,"px",20,20,"left",null,[],"GXV10A","GXV10A",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10B",11,"CTLPRODUTODESCRICAO","Descrição","","produtodescricao","svchar",0,"px",40,40,"left",null,[],"GXV10B","GXV10B",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10C",12,"CTLQUANTIDADEDISPONIVEL","Quantidade","","QuantidadeDisponivel","decimal",0,"px",21,21,"right",null,[],"GXV10C","GXV10C",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10D",13,"CTLLOTEPRODUTOESTOQUEMINIMO","Estoque mínimo","","LoteProdutoEstoqueMinimo","decimal",0,"px",18,18,"right",null,[],"GXV10D","GXV10D",true,6,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:8,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOID",gxz:"ZV77GXV109",gxold:"OV77GXV109",gxvar:"GXV109",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV109=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77GXV109=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(8),gx.O.GXV109,0)},c2v:function(){gx.O.GXV109=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(8),'.')},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:8,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOREFERENCIA",gxz:"ZV78GXV10A",gxold:"OV78GXV10A",gxvar:"GXV10A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10A=Value},v2z:function(Value){gx.O.ZV78GXV10A=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOREFERENCIA",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10A,0)},c2v:function(){gx.O.GXV10A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOREFERENCIA",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:8,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTODESCRICAO",gxz:"ZV79GXV10B",gxold:"OV79GXV10B",gxvar:"GXV10B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10B=Value},v2z:function(Value){gx.O.ZV79GXV10B=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10B,0)},c2v:function(){gx.O.GXV10B=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:8,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLQUANTIDADEDISPONIVEL",gxz:"ZV80GXV10C",gxold:"OV80GXV10C",gxvar:"GXV10C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10C=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV80GXV10C=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQUANTIDADEDISPONIVEL",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10C,4,',')},c2v:function(){gx.O.GXV10C=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQUANTIDADEDISPONIVEL",row || gx.fn.currentGridRowImpl(8),'.',',')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"decimal",len:16,dec:6,sign:false,pic:"ZZZ,ZZZ,ZZ9.999999",ro:1,isacc:0,grid:8,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOTEPRODUTOESTOQUEMINIMO",gxz:"ZV81GXV10D",gxold:"OV81GXV10D",gxvar:"GXV10D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10D=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV81GXV10D=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLLOTEPRODUTOESTOQUEMINIMO",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10D,6,',')},c2v:function(){gx.O.GXV10D=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLLOTEPRODUTOESTOQUEMINIMO",row || gx.fn.currentGridRowImpl(8),'.',',')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TABLE3",grid:0};
   GXValidFnc[22]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[24]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[26]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[28]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[30]={fld:"IMAGE5",grid:0};
   GXValidFnc[31]={lvl:0,type:"decimal",len:16,dec:6,sign:false,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOESTOQUEMINIMO",gxz:"ZV62LoteProdutoEstoqueMinimo",gxold:"OV62LoteProdutoEstoqueMinimo",gxvar:"AV62LoteProdutoEstoqueMinimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62LoteProdutoEstoqueMinimo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV62LoteProdutoEstoqueMinimo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vLOTEPRODUTOESTOQUEMINIMO",gx.O.AV62LoteProdutoEstoqueMinimo,6,',')},c2v:function(){gx.O.AV62LoteProdutoEstoqueMinimo=this.val()},val:function(){return gx.fn.getDecimalValue("vLOTEPRODUTOESTOQUEMINIMO",'.',',')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV41Pagina",gxold:"OV41Pagina",gxvar:"AV41Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV41Pagina,0)},c2v:function(){gx.O.AV41Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV66PaginaAux",gxold:"OV66PaginaAux",gxvar:"AV66PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV66PaginaAux,0)},c2v:function(){gx.O.AV66PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.ZV77GXV109 = 0 ;
   this.OV77GXV109 = 0 ;
   this.ZV78GXV10A = "" ;
   this.OV78GXV10A = "" ;
   this.ZV79GXV10B = "" ;
   this.OV79GXV10B = "" ;
   this.ZV80GXV10C = 0 ;
   this.OV80GXV10C = 0 ;
   this.ZV81GXV10D = 0 ;
   this.OV81GXV10D = 0 ;
   this.AV62LoteProdutoEstoqueMinimo = 0 ;
   this.ZV62LoteProdutoEstoqueMinimo = 0 ;
   this.OV62LoteProdutoEstoqueMinimo = 0 ;
   this.AV41Pagina = 0 ;
   this.ZV41Pagina = 0 ;
   this.OV41Pagina = 0 ;
   this.AV66PaginaAux = 0 ;
   this.ZV66PaginaAux = 0 ;
   this.OV66PaginaAux = 0 ;
   this.AV62LoteProdutoEstoqueMinimo = 0 ;
   this.AV41Pagina = 0 ;
   this.AV66PaginaAux = 0 ;
   this.GXV109 = 0 ;
   this.GXV10A = "" ;
   this.GXV10B = "" ;
   this.GXV10C = 0 ;
   this.GXV10D = 0 ;
   this.Events = {"e172cx2_client": ["'ATUALIZAPAGINA'", true] ,"e112cx2_client": ["'PROXIMAPAGINA'", true] ,"e122cx2_client": ["'PAGINAANTERIOR'", true] ,"e132cx2_client": ["'PRIMEIRAPAGINA'", true] ,"e142cx2_client": ["'ULTIMAPAGINA'", true] ,"e152cx2_client": ["'FECHAR'", true] ,"e202cx2_client": ["ENTER", true] ,"e212cx2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8},{av:'subGrid1_Rows'},{av:'AV66PaginaAux',fld:'vPAGINAAUX'},{av:'AV41Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8},{av:'subGrid1_Rows'},{av:'AV66PaginaAux',fld:'vPAGINAAUX'},{av:'AV41Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["GRID1.REFRESH"] = [[{av:'AV66PaginaAux',fld:'vPAGINAAUX'},{av:'AV41Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'PROXIMAPAGINA'"] = [[{av:'AV41Pagina',fld:'vPAGINA'},{av:'AV43ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV30FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV62LoteProdutoEstoqueMinimo',fld:'vLOTEPRODUTOESTOQUEMINIMO'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV66PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV41Pagina',fld:'vPAGINA'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8}]];
   this.EvtParms["'PAGINAANTERIOR'"] = [[{av:'AV41Pagina',fld:'vPAGINA'},{av:'AV43ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV30FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV62LoteProdutoEstoqueMinimo',fld:'vLOTEPRODUTOESTOQUEMINIMO'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV66PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV41Pagina',fld:'vPAGINA'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8}]];
   this.EvtParms["'PRIMEIRAPAGINA'"] = [[{av:'AV43ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV30FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV62LoteProdutoEstoqueMinimo',fld:'vLOTEPRODUTOESTOQUEMINIMO'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV66PaginaAux',fld:'vPAGINAAUX'},{av:'AV41Pagina',fld:'vPAGINA'}],[{av:'AV41Pagina',fld:'vPAGINA'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8}]];
   this.EvtParms["'ULTIMAPAGINA'"] = [[{av:'AV66PaginaAux',fld:'vPAGINAAUX'},{av:'AV43ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV30FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV62LoteProdutoEstoqueMinimo',fld:'vLOTEPRODUTOESTOQUEMINIMO'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV41Pagina',fld:'vPAGINA'}],[{av:'AV41Pagina',fld:'vPAGINA'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV66PaginaAux',fld:'vPAGINAAUX'},{av:'AV41Pagina',fld:'vPAGINA'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV66PaginaAux',fld:'vPAGINAAUX'},{av:'AV41Pagina',fld:'vPAGINA'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV66PaginaAux',fld:'vPAGINAAUX'},{av:'AV41Pagina',fld:'vPAGINA'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV66PaginaAux',fld:'vPAGINAAUX'},{av:'AV41Pagina',fld:'vPAGINA'},{av:'AV64SdtApuracaoEstoqueMinimo',fld:'vSDTAPURACAOESTOQUEMINIMO',grid:8}],[]];
   Grid1Container.addRefreshingVar(this.GXValidFnc[33]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[32]);
   this.addGridBCProperty("Sdtapuracaoestoqueminimo", ["produtoid"], this.GXValidFnc[9], "AV64SdtApuracaoEstoqueMinimo");
   this.addGridBCProperty("Sdtapuracaoestoqueminimo", ["produtoreferencia"], this.GXValidFnc[10], "AV64SdtApuracaoEstoqueMinimo");
   this.addGridBCProperty("Sdtapuracaoestoqueminimo", ["produtodescricao"], this.GXValidFnc[11], "AV64SdtApuracaoEstoqueMinimo");
   this.addGridBCProperty("Sdtapuracaoestoqueminimo", ["QuantidadeDisponivel"], this.GXValidFnc[12], "AV64SdtApuracaoEstoqueMinimo");
   this.addGridBCProperty("Sdtapuracaoestoqueminimo", ["LoteProdutoEstoqueMinimo"], this.GXValidFnc[13], "AV64SdtApuracaoEstoqueMinimo");
   this.InitStandaloneVars( );
});
gx.setParentObj(new havisoestoqueminimo());
