/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:48:12.13
*/
gx.evt.autoSkip = false;
gx.define('hconsultatipodispendio', false, function () {
   this.ServerClass =  "hconsultatipodispendio" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19TipoDispendioCodigo=gx.fn.getIntegerValue("vTIPODISPENDIOCODIGO",'.') ;
   };
   this.e1713i2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1113i2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1213i2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1313i2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1413i2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1513i2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2013i2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2113i1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,33,39,42,44,46,48,50,51,52,53];
   this.GXLastCtrlId =53;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatipodispendio",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8153,29,"TIPODISPENDIOCODIGO","","","TipoDispendioCodigo","int",0,"px",4,4,"right",null,[],8153,"TipoDispendioCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8145,30,"TIPODISPENDIODESCRICAO","","","TipoDispendioDescricao","svchar",0,"px",70,70,"left",null,[],8145,"TipoDispendioDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8146,31,"TIPODISPENDIOCLASSIFICACAO","Classifição","","TipoDispendioClassificacao","char",0,"px",1,1,"left",null,[],8146,"TipoDispendioClassificacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Classificacao",32,"vCLASSIFICACAO","","","Classificacao","svchar",0,"px",10,10,"left",null,[],"Classificacao","Classificacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8152,33,"TIPODISPENDIOEMPRESAID","Empresa","","TipoDispendioEmpresaId","char",0,"px",10,10,"left",null,[],8152,"TipoDispendioEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPODISPENDIOCODIGOFILTRO",gxz:"ZV20TipoDispendioCodigoFiltro",gxold:"OV20TipoDispendioCodigoFiltro",gxvar:"AV20TipoDispendioCodigoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20TipoDispendioCodigoFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20TipoDispendioCodigoFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPODISPENDIOCODIGOFILTRO",gx.O.AV20TipoDispendioCodigoFiltro,0)},c2v:function(){gx.O.AV20TipoDispendioCodigoFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPODISPENDIOCODIGOFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPODISPENDIODESCRICAOFILTRO",gxz:"ZV21TipoDispendioDescricaoFiltro",gxold:"OV21TipoDispendioDescricaoFiltro",gxvar:"AV21TipoDispendioDescricaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21TipoDispendioDescricaoFiltro=Value},v2z:function(Value){gx.O.ZV21TipoDispendioDescricaoFiltro=Value},v2c:function(){gx.fn.setControlValue("vTIPODISPENDIODESCRICAOFILTRO",gx.O.AV21TipoDispendioDescricaoFiltro,0)},c2v:function(){gx.O.AV21TipoDispendioDescricaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vTIPODISPENDIODESCRICAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPODISPENDIOCLASSIFICACAOFILTRO",gxz:"ZV22TipoDispendioClassificacaoFiltro",gxold:"OV22TipoDispendioClassificacaoFiltro",gxvar:"AV22TipoDispendioClassificacaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22TipoDispendioClassificacaoFiltro=Value},v2z:function(Value){gx.O.ZV22TipoDispendioClassificacaoFiltro=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPODISPENDIOCLASSIFICACAOFILTRO",gx.O.AV22TipoDispendioClassificacaoFiltro)},c2v:function(){gx.O.AV22TipoDispendioClassificacaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vTIPODISPENDIOCLASSIFICACAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIOCODIGO",gxz:"Z8153TipoDispendioCodigo",gxold:"O8153TipoDispendioCodigo",gxvar:"A8153TipoDispendioCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8153TipoDispendioCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8153TipoDispendioCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPODISPENDIOCODIGO",row || gx.fn.currentGridRowImpl(28),gx.O.A8153TipoDispendioCodigo,0)},c2v:function(){gx.O.A8153TipoDispendioCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPODISPENDIOCODIGO",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:70,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIODESCRICAO",gxz:"Z8145TipoDispendioDescricao",gxold:"O8145TipoDispendioDescricao",gxvar:"A8145TipoDispendioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8145TipoDispendioDescricao=Value},v2z:function(Value){gx.O.Z8145TipoDispendioDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODISPENDIODESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A8145TipoDispendioDescricao,0)},c2v:function(){gx.O.A8145TipoDispendioDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODISPENDIODESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIOCLASSIFICACAO",gxz:"Z8146TipoDispendioClassificacao",gxold:"O8146TipoDispendioClassificacao",gxvar:"A8146TipoDispendioClassificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8146TipoDispendioClassificacao=Value},v2z:function(Value){gx.O.Z8146TipoDispendioClassificacao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODISPENDIOCLASSIFICACAO",row || gx.fn.currentGridRowImpl(28),gx.O.A8146TipoDispendioClassificacao,0)},c2v:function(){gx.O.A8146TipoDispendioClassificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODISPENDIOCLASSIFICACAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAO",gxz:"ZV23Classificacao",gxold:"OV23Classificacao",gxvar:"AV23Classificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV23Classificacao=Value},v2z:function(Value){gx.O.ZV23Classificacao=Value},v2c:function(row){gx.fn.setGridControlValue("vCLASSIFICACAO",row || gx.fn.currentGridRowImpl(28),gx.O.AV23Classificacao,0)},c2v:function(){gx.O.AV23Classificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLASSIFICACAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODISPENDIOEMPRESAID",gxz:"Z8152TipoDispendioEmpresaId",gxold:"O8152TipoDispendioEmpresaId",gxvar:"A8152TipoDispendioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8152TipoDispendioEmpresaId=Value},v2z:function(Value){gx.O.Z8152TipoDispendioEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODISPENDIOEMPRESAID",row || gx.fn.currentGridRowImpl(28),gx.O.A8152TipoDispendioEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8152TipoDispendioEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODISPENDIOEMPRESAID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLENAV",grid:0};
   GXValidFnc[42]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[50]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV20TipoDispendioCodigoFiltro = 0 ;
   this.ZV20TipoDispendioCodigoFiltro = 0 ;
   this.OV20TipoDispendioCodigoFiltro = 0 ;
   this.AV21TipoDispendioDescricaoFiltro = "" ;
   this.ZV21TipoDispendioDescricaoFiltro = "" ;
   this.OV21TipoDispendioDescricaoFiltro = "" ;
   this.AV22TipoDispendioClassificacaoFiltro = "" ;
   this.ZV22TipoDispendioClassificacaoFiltro = "" ;
   this.OV22TipoDispendioClassificacaoFiltro = "" ;
   this.Z8153TipoDispendioCodigo = 0 ;
   this.O8153TipoDispendioCodigo = 0 ;
   this.Z8145TipoDispendioDescricao = "" ;
   this.O8145TipoDispendioDescricao = "" ;
   this.Z8146TipoDispendioClassificacao = "" ;
   this.O8146TipoDispendioClassificacao = "" ;
   this.ZV23Classificacao = "" ;
   this.OV23Classificacao = "" ;
   this.Z8152TipoDispendioEmpresaId = "" ;
   this.O8152TipoDispendioEmpresaId = "" ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV20TipoDispendioCodigoFiltro = 0 ;
   this.AV21TipoDispendioDescricaoFiltro = "" ;
   this.AV22TipoDispendioClassificacaoFiltro = "" ;
   this.AV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19TipoDispendioCodigo = 0 ;
   this.A8153TipoDispendioCodigo = 0 ;
   this.A8145TipoDispendioDescricao = "" ;
   this.A8146TipoDispendioClassificacao = "" ;
   this.AV23Classificacao = "" ;
   this.A8152TipoDispendioEmpresaId = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e1713i2_client": ["ENTER", true] ,"e1113i2_client": ["'GXM_FIRST'", true] ,"e1213i2_client": ["'GXM_PREVIOUS'", true] ,"e1313i2_client": ["'GXM_NEXT'", true] ,"e1413i2_client": ["'GXM_LAST'", true] ,"e1513i2_client": ["'PROCURAR'", true] ,"e2013i2_client": ["'ATUALIZAPAGINA'", true] ,"e2113i1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20TipoDispendioCodigoFiltro',fld:'vTIPODISPENDIOCODIGOFILTRO'},{av:'AV21TipoDispendioDescricaoFiltro',fld:'vTIPODISPENDIODESCRICAOFILTRO'},{av:'AV22TipoDispendioClassificacaoFiltro',fld:'vTIPODISPENDIOCLASSIFICACAOFILTRO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPODISPENDIOCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPODISPENDIOCODIGO","Title")',ctrl:'TIPODISPENDIOCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPODISPENDIODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPODISPENDIODESCRICAO","Title")',ctrl:'TIPODISPENDIODESCRICAO',prop:'Title'},{ctrl:'vCLASSIFICACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vCLASSIFICACAO","Title")',ctrl:'vCLASSIFICACAO',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8153TipoDispendioCodigo',fld:'TIPODISPENDIOCODIGO'}],[{av:'AV19TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20TipoDispendioCodigoFiltro',fld:'vTIPODISPENDIOCODIGOFILTRO'},{av:'AV21TipoDispendioDescricaoFiltro',fld:'vTIPODISPENDIODESCRICAOFILTRO'},{av:'AV22TipoDispendioClassificacaoFiltro',fld:'vTIPODISPENDIOCLASSIFICACAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20TipoDispendioCodigoFiltro',fld:'vTIPODISPENDIOCODIGOFILTRO'},{av:'AV21TipoDispendioDescricaoFiltro',fld:'vTIPODISPENDIODESCRICAOFILTRO'},{av:'AV22TipoDispendioClassificacaoFiltro',fld:'vTIPODISPENDIOCLASSIFICACAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20TipoDispendioCodigoFiltro',fld:'vTIPODISPENDIOCODIGOFILTRO'},{av:'AV21TipoDispendioDescricaoFiltro',fld:'vTIPODISPENDIODESCRICAOFILTRO'},{av:'AV22TipoDispendioClassificacaoFiltro',fld:'vTIPODISPENDIOCLASSIFICACAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20TipoDispendioCodigoFiltro',fld:'vTIPODISPENDIOCODIGOFILTRO'},{av:'AV21TipoDispendioDescricaoFiltro',fld:'vTIPODISPENDIODESCRICAOFILTRO'},{av:'AV22TipoDispendioClassificacaoFiltro',fld:'vTIPODISPENDIOCLASSIFICACAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20TipoDispendioCodigoFiltro',fld:'vTIPODISPENDIOCODIGOFILTRO'},{av:'AV21TipoDispendioDescricaoFiltro',fld:'vTIPODISPENDIODESCRICAOFILTRO'},{av:'AV22TipoDispendioClassificacaoFiltro',fld:'vTIPODISPENDIOCLASSIFICACAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'}],[{av:'AV23Classificacao',fld:'vCLASSIFICACAO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20TipoDispendioCodigoFiltro',fld:'vTIPODISPENDIOCODIGOFILTRO'},{av:'AV21TipoDispendioDescricaoFiltro',fld:'vTIPODISPENDIODESCRICAOFILTRO'},{av:'AV22TipoDispendioClassificacaoFiltro',fld:'vTIPODISPENDIOCLASSIFICACAOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8146TipoDispendioClassificacao',fld:'TIPODISPENDIOCLASSIFICACAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19TipoDispendioCodigo", "vTIPODISPENDIOCODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A8146TipoDispendioClassificacao", rfrProp:"Value", gxAttId:"8146"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatipodispendio());
