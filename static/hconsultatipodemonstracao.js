/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:57:43.43
*/
gx.evt.autoSkip = false;
gx.define('hconsultatipodemonstracao', false, function () {
   this.ServerClass =  "hconsultatipodemonstracao" ;
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
      this.AV17PTipoDemonstracaoId=gx.fn.getIntegerValue("vPTIPODEMONSTRACAOID",'.') ;
   };
   this.e17722_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11722_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12722_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13722_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14722_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15722_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19722_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21721_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,34,35,36,37,38,44,47,49,51,53,55,56,57,58];
   this.GXLastCtrlId =58;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",33,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatipodemonstracao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(271,34,"TIPODEMONSTRACAOID","","","TipoDemonstracaoId","int",0,"px",3,3,"right",null,[],271,"TipoDemonstracaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(550,35,"TIPODEMONSTRACAODESCRICAO","","","TipoDemonstracaoDescricao","svchar",0,"px",40,40,"left",null,[],550,"TipoDemonstracaoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(280,36,"TIPODEMONSTRACAOESTRUTURA","Estrutura","","TipoDemonstracaoEstrutura","svchar",0,"px",10,10,"left",null,[],280,"TipoDemonstracaoEstrutura",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(553,37,"TIPODEMONSTRACAOIDENTVALOR","Itentificação Valor Negativo","TipoDemonstracaoIdentValor","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(270,38,"TIPODEMONSTRACAOEMPRESAID","Empresa Tipo Demonstração","","TipoDemonstracaoEmpresaId","char",0,"px",10,10,"left",null,[],270,"TipoDemonstracaoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPODEMONSTRACAOID",gxz:"ZV13TipoDemonstracaoId",gxold:"OV13TipoDemonstracaoId",gxvar:"AV13TipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPODEMONSTRACAOID",gx.O.AV13TipoDemonstracaoId,0)},c2v:function(){gx.O.AV13TipoDemonstracaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPODEMONSTRACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPODEMONSTRACAODESCRICAO",gxz:"ZV14TipoDemonstracaoDescricao",gxold:"OV14TipoDemonstracaoDescricao",gxvar:"AV14TipoDemonstracaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14TipoDemonstracaoDescricao=Value},v2z:function(Value){gx.O.ZV14TipoDemonstracaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPODEMONSTRACAODESCRICAO",gx.O.AV14TipoDemonstracaoDescricao,0)},c2v:function(){gx.O.AV14TipoDemonstracaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPODEMONSTRACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPODEMONSTRACAOESTRUTURA",gxz:"ZV15TipoDemonstracaoEstrutura",gxold:"OV15TipoDemonstracaoEstrutura",gxvar:"AV15TipoDemonstracaoEstrutura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TipoDemonstracaoEstrutura=Value},v2z:function(Value){gx.O.ZV15TipoDemonstracaoEstrutura=Value},v2c:function(){gx.fn.setControlValue("vTIPODEMONSTRACAOESTRUTURA",gx.O.AV15TipoDemonstracaoEstrutura,0)},c2v:function(){gx.O.AV15TipoDemonstracaoEstrutura=this.val()},val:function(){return gx.fn.getControlValue("vTIPODEMONSTRACAOESTRUTURA")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPODEMONSTRACAOIDENTVALOR",gxz:"ZV16TipoDemonstracaoIdentValor",gxold:"OV16TipoDemonstracaoIdentValor",gxvar:"AV16TipoDemonstracaoIdentValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16TipoDemonstracaoIdentValor=Value},v2z:function(Value){gx.O.ZV16TipoDemonstracaoIdentValor=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPODEMONSTRACAOIDENTVALOR",gx.O.AV16TipoDemonstracaoIdentValor)},c2v:function(){gx.O.AV16TipoDemonstracaoIdentValor=this.val()},val:function(){return gx.fn.getControlValue("vTIPODEMONSTRACAOIDENTVALOR")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOID",gxz:"Z271TipoDemonstracaoId",gxold:"O271TipoDemonstracaoId",gxvar:"A271TipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A271TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z271TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(33),gx.O.A271TipoDemonstracaoId,0)},c2v:function(){gx.O.A271TipoDemonstracaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAODESCRICAO",gxz:"Z550TipoDemonstracaoDescricao",gxold:"O550TipoDemonstracaoDescricao",gxvar:"A550TipoDemonstracaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A550TipoDemonstracaoDescricao=Value},v2z:function(Value){gx.O.Z550TipoDemonstracaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAODESCRICAO",row || gx.fn.currentGridRowImpl(33),gx.O.A550TipoDemonstracaoDescricao,0)},c2v:function(){gx.O.A550TipoDemonstracaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODEMONSTRACAODESCRICAO",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOESTRUTURA",gxz:"Z280TipoDemonstracaoEstrutura",gxold:"O280TipoDemonstracaoEstrutura",gxvar:"A280TipoDemonstracaoEstrutura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A280TipoDemonstracaoEstrutura=Value},v2z:function(Value){gx.O.Z280TipoDemonstracaoEstrutura=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOESTRUTURA",row || gx.fn.currentGridRowImpl(33),gx.O.A280TipoDemonstracaoEstrutura,0)},c2v:function(){gx.O.A280TipoDemonstracaoEstrutura=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODEMONSTRACAOESTRUTURA",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOIDENTVALOR",gxz:"Z553TipoDemonstracaoIdentValor",gxold:"O553TipoDemonstracaoIdentValor",gxvar:"A553TipoDemonstracaoIdentValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A553TipoDemonstracaoIdentValor=Value},v2z:function(Value){gx.O.Z553TipoDemonstracaoIdentValor=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPODEMONSTRACAOIDENTVALOR",row || gx.fn.currentGridRowImpl(33),gx.O.A553TipoDemonstracaoIdentValor)},c2v:function(){gx.O.A553TipoDemonstracaoIdentValor=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODEMONSTRACAOIDENTVALOR",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOEMPRESAID",gxz:"Z270TipoDemonstracaoEmpresaId",gxold:"O270TipoDemonstracaoEmpresaId",gxvar:"A270TipoDemonstracaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A270TipoDemonstracaoEmpresaId=Value},v2z:function(Value){gx.O.Z270TipoDemonstracaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOEMPRESAID",row || gx.fn.currentGridRowImpl(33),gx.O.A270TipoDemonstracaoEmpresaId,0)},c2v:function(){gx.O.A270TipoDemonstracaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODEMONSTRACAOEMPRESAID",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLENAV",grid:0};
   GXValidFnc[47]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[49]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[51]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[53]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[55]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV19PaginaAux",gxold:"OV19PaginaAux",gxvar:"AV19PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV19PaginaAux,0)},c2v:function(){gx.O.AV19PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV18Pagina",gxold:"OV18Pagina",gxvar:"AV18Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV18Pagina)},c2v:function(){gx.O.AV18Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV13TipoDemonstracaoId = 0 ;
   this.ZV13TipoDemonstracaoId = 0 ;
   this.OV13TipoDemonstracaoId = 0 ;
   this.AV14TipoDemonstracaoDescricao = "" ;
   this.ZV14TipoDemonstracaoDescricao = "" ;
   this.OV14TipoDemonstracaoDescricao = "" ;
   this.AV15TipoDemonstracaoEstrutura = "" ;
   this.ZV15TipoDemonstracaoEstrutura = "" ;
   this.OV15TipoDemonstracaoEstrutura = "" ;
   this.AV16TipoDemonstracaoIdentValor = "" ;
   this.ZV16TipoDemonstracaoIdentValor = "" ;
   this.OV16TipoDemonstracaoIdentValor = "" ;
   this.Z271TipoDemonstracaoId = 0 ;
   this.O271TipoDemonstracaoId = 0 ;
   this.Z550TipoDemonstracaoDescricao = "" ;
   this.O550TipoDemonstracaoDescricao = "" ;
   this.Z280TipoDemonstracaoEstrutura = "" ;
   this.O280TipoDemonstracaoEstrutura = "" ;
   this.Z553TipoDemonstracaoIdentValor = "" ;
   this.O553TipoDemonstracaoIdentValor = "" ;
   this.Z270TipoDemonstracaoEmpresaId = "" ;
   this.O270TipoDemonstracaoEmpresaId = "" ;
   this.AV19PaginaAux = 0 ;
   this.ZV19PaginaAux = 0 ;
   this.OV19PaginaAux = 0 ;
   this.AV18Pagina = 0 ;
   this.ZV18Pagina = 0 ;
   this.OV18Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV13TipoDemonstracaoId = 0 ;
   this.AV14TipoDemonstracaoDescricao = "" ;
   this.AV15TipoDemonstracaoEstrutura = "" ;
   this.AV16TipoDemonstracaoIdentValor = "" ;
   this.AV19PaginaAux = 0 ;
   this.AV18Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17PTipoDemonstracaoId = 0 ;
   this.A271TipoDemonstracaoId = 0 ;
   this.A550TipoDemonstracaoDescricao = "" ;
   this.A280TipoDemonstracaoEstrutura = "" ;
   this.A553TipoDemonstracaoIdentValor = "" ;
   this.A270TipoDemonstracaoEmpresaId = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17722_client": ["ENTER", true] ,"e11722_client": ["'GXM_FIRST'", true] ,"e12722_client": ["'GXM_PREVIOUS'", true] ,"e13722_client": ["'GXM_NEXT'", true] ,"e14722_client": ["'GXM_LAST'", true] ,"e15722_client": ["'PROCURAR'", true] ,"e19722_client": ["'ATUALIZAPAGINA'", true] ,"e21721_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV14TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV15TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'},{av:'AV16TipoDemonstracaoIdentValor',fld:'vTIPODEMONSTRACAOIDENTVALOR'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPODEMONSTRACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPODEMONSTRACAOID","Title")',ctrl:'TIPODEMONSTRACAOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPODEMONSTRACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPODEMONSTRACAODESCRICAO","Title")',ctrl:'TIPODEMONSTRACAODESCRICAO',prop:'Title'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'}],[{av:'AV17PTipoDemonstracaoId',fld:'vPTIPODEMONSTRACAOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV14TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV15TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'},{av:'AV16TipoDemonstracaoIdentValor',fld:'vTIPODEMONSTRACAOIDENTVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV14TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV15TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'},{av:'AV16TipoDemonstracaoIdentValor',fld:'vTIPODEMONSTRACAOIDENTVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Pagina',fld:'vPAGINA'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV14TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV15TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'},{av:'AV16TipoDemonstracaoIdentValor',fld:'vTIPODEMONSTRACAOIDENTVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV14TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV15TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'},{av:'AV16TipoDemonstracaoIdentValor',fld:'vTIPODEMONSTRACAOIDENTVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV14TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV15TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'},{av:'AV16TipoDemonstracaoIdentValor',fld:'vTIPODEMONSTRACAOIDENTVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'A550TipoDemonstracaoDescricao',fld:'TIPODEMONSTRACAODESCRICAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV14TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV15TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'},{av:'AV16TipoDemonstracaoIdentValor',fld:'vTIPODEMONSTRACAOIDENTVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17PTipoDemonstracaoId", "vPTIPODEMONSTRACAOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatipodemonstracao());
